"use client";

import React, { useEffect, useState, useMemo, useCallback, useRef } from "react";
import DeckGL from "@deck.gl/react";
import { ScatterplotLayer, GeoJsonLayer, PathLayer, TextLayer } from "@deck.gl/layers";
import { H3HexagonLayer, TripsLayer } from "@deck.gl/geo-layers";
import { Map } from "react-map-gl/maplibre";
import { useFoundryStore } from "@/lib/store";
import {
  fetchCityBoundary,
  fetchHexagons,
  fetchStopsGeoJson,
  fetchHubsGeoJson,
  fetchRouteGeometry,
} from "@/lib/api";
import {
  getCurrentSecondsFromMidnight,
  computeActiveVehicles,
} from "@/components/simulation/simulation-engine";
import type { ActiveVehicle } from "@/lib/api/simulation";
import type { HexagonCell } from "@/lib/api/types";
import type { PickingInfo } from "@deck.gl/core";
import MapHud from "./MapHud";
import "maplibre-gl/dist/maplibre-gl.css";

const CARTO_POSITRON =
  "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json";
const CARTO_DARK_MATTER =
  "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json";
const SATELLITE_STYLE = process.env.NEXT_PUBLIC_MAPTILER_KEY
  ? `https://api.maptiler.com/maps/hybrid/style.json?key=${process.env.NEXT_PUBLIC_MAPTILER_KEY}`
  : CARTO_DARK_MATTER;

function getGradeRgb(grade?: string): [number, number, number] {
  if (!grade) return [143, 153, 168];
  const g = grade.toUpperCase().trim();
  if (g === "A+") return [15, 153, 96]; // Emerald
  if (g === "A") return [21, 179, 113];
  if (g === "B") return [43, 149, 214]; // Cobalt
  if (g === "C") return [157, 167, 179]; // Neutral
  if (g === "D") return [217, 130, 43]; // Amber
  if (g === "F") return [219, 55, 55]; // Crimson
  return [143, 153, 168];
}

function hexColorToRgb(
  hex: string,
  fallback: [number, number, number] = [43, 149, 214]
): [number, number, number] {
  if (!hex || typeof hex !== "string") return fallback;
  const clean = hex.replace("#", "").trim();
  if (clean.length === 6) {
    const num = parseInt(clean, 16);
    if (!isNaN(num)) {
      return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
    }
  }
  return fallback;
}

function getSpeedColor(
  speed?: number,
  fallbackHex?: string
): [number, number, number, number] {
  if (speed != null && Number.isFinite(speed)) {
    if (speed < 15) return [219, 55, 55, 240]; // Crimson: congested corridor (<15 km/h)
    if (speed < 22) return [217, 130, 43, 240]; // Amber: moderate urban crawl (15-22 km/h)
    if (speed < 30) return [43, 149, 214, 240]; // Cobalt: steady arterial (22-30 km/h)
    return [15, 153, 96, 240]; // Emerald: rapid corridor (>30 km/h)
  }
  const rgb = hexColorToRgb(fallbackHex || "#2b95d6");
  return [rgb[0], rgb[1], rgb[2], 240];
}

function extractLonLatCoords(geometry: any): [number, number][] {
  if (!geometry || !geometry.coordinates) return [];
  const coords: [number, number][] = [];

  function recurse(val: any) {
    if (Array.isArray(val)) {
      if (
        val.length >= 2 &&
        typeof val[0] === "number" &&
        typeof val[1] === "number" &&
        Number.isFinite(val[0]) &&
        Number.isFinite(val[1])
      ) {
        coords.push([val[0], val[1]]);
      } else {
        for (const item of val) {
          recurse(item);
        }
      }
    }
  }

  recurse(geometry.coordinates);
  return coords;
}

export default function MapCanvas() {
  const {
    selectedCity,
    viewState,
    setViewState,
    mapStyle,
    showBoundary,
    showHexagons,
    showStops,
    showHubs,
    showRoutes,
    show3DBuildings,
    h3Metric,
    selectObject,
    selectedId,
    selectionType,
    activeRouteUid,
    selectedAxePair,
    // Fleet simulation state
    isSimulationActive,
    isLiveMode,
    isPlaying,
    simSpeed,
    simTimeSeconds,
    advanceSimTime,
    simulationDataset,
    activeVehicles,
    updateActiveVehicles,
    selectedVehicle,
    selectVehicle,
    isFollowingVehicle,
    lineFilter,
    hoveredId,
    hoveredType,
    setHoveredObject,
  } = useFoundryStore();

  const [boundary, setBoundary] = useState<any>(null);
  const [hexagons, setHexagons] = useState<HexagonCell[]>([]);
  const [stops, setStops] = useState<any>(null);
  const [hubs, setHubs] = useState<any>(null);
  const [routeGeo, setRouteGeo] = useState<any>(null);
  const [hoverInfo, setHoverInfo] = useState<PickingInfo | null>(null);

  // Mobile viewport detection for WebGL DPR capping
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // 60 FPS animation timer for synthetic bus TripsLayer
  const [animTime, setAnimTime] = useState(0);
  useEffect(() => {
    if (!activeRouteUid || !routeGeo?.features?.length) return;
    let frameId: number;
    const loop = () => {
      setAnimTime((prev) => (prev + 2.5) % 1000);
      frameId = requestAnimationFrame(loop);
    };
    frameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frameId);
  }, [activeRouteUid, routeGeo]);

  // 60 FPS Fleet Simulation Engine Loop
  const lastSimTimeRef = useRef<number>(performance.now());
  useEffect(() => {
    const isMatchingCity = simulationDataset?.city?.toLowerCase() === selectedCity?.toLowerCase();
    if (!isSimulationActive || !simulationDataset || !isPlaying || !isMatchingCity) return;

    let frameId: number;
    lastSimTimeRef.current = performance.now();

    const simLoop = (now: number) => {
      const dtSec = Math.min(0.1, (now - lastSimTimeRef.current) / 1000.0);
      lastSimTimeRef.current = now;

      if (isLiveMode) {
        const realSec = getCurrentSecondsFromMidnight();
        const vehicles = computeActiveVehicles(simulationDataset.trips, realSec, lineFilter);
        updateActiveVehicles(vehicles);
      } else {
        const delta = dtSec * simSpeed;
        advanceSimTime(delta);
      }

      frameId = requestAnimationFrame(simLoop);
    };

    frameId = requestAnimationFrame(simLoop);
    return () => cancelAnimationFrame(frameId);
  }, [
    isSimulationActive,
    simulationDataset,
    isPlaying,
    isLiveMode,
    simSpeed,
    lineFilter,
    advanceSimTime,
    updateActiveVehicles,
  ]);

  // Camera tracking for followed vehicle
  useEffect(() => {
    if (isSimulationActive && isFollowingVehicle && selectedVehicle) {
      setViewState({
        longitude: selectedVehicle.lon,
        latitude: selectedVehicle.lat,
      });
    }
  }, [isSimulationActive, isFollowingVehicle, selectedVehicle, setViewState]);

  // Load datasets when selected city changes
  useEffect(() => {
    if (!selectedCity) return;
    const controller = new AbortController();
    const signal = controller.signal;

    // Reset previous city layers immediately to prevent optical clash
    setBoundary(null);
    setHexagons([]);
    setStops(null);
    setHubs(null);
    setRouteGeo(null);

    // 1. Boundary & auto-center using robust polygon vertex extraction
    fetchCityBoundary(selectedCity, signal)
      .then((b) => {
        if (!signal.aborted && b?.features?.[0]) {
          setBoundary(b);
          const points = extractLonLatCoords(b.features[0].geometry);
          if (points.length > 0) {
            const lons = points.map((p) => p[0]);
            const lats = points.map((p) => p[1]);
            const minLon = Math.min(...lons);
            const maxLon = Math.max(...lons);
            const minLat = Math.min(...lats);
            const maxLat = Math.max(...lats);
            const spanLon = maxLon - minLon;
            const spanLat = maxLat - minLat;
            const maxSpan = Math.max(spanLon, spanLat);

            let zoom = 12;
            if (maxSpan > 0.8) zoom = 9.5;
            else if (maxSpan > 0.4) zoom = 10.5;
            else if (maxSpan > 0.2) zoom = 11.5;
            else if (maxSpan > 0.1) zoom = 12;
            else zoom = 12.5;

            setViewState({
              longitude: (minLon + maxLon) / 2,
              latitude: (minLat + maxLat) / 2,
              zoom,
            });
          }
        }
      })
      .catch((e) => {
        if (e?.name !== "AbortError") console.warn("Boundary load:", e);
      });

    // 2. Hexagons
    fetchHexagons(selectedCity, 0, signal)
      .then((hex) => {
        if (!signal.aborted) setHexagons(hex);
      })
      .catch((e) => {
        if (e?.name !== "AbortError") console.warn("Hexagons load:", e);
      });

    // 3. Physical Stops
    fetchStopsGeoJson(selectedCity, signal)
      .then((s) => {
        if (!signal.aborted) setStops(s);
      })
      .catch((e) => {
        if (e?.name !== "AbortError") console.warn("Stops load:", e);
      });

    // 4. Macro Hubs
    fetchHubsGeoJson(selectedCity, signal)
      .then((h) => {
        if (!signal.aborted) setHubs(h);
      })
      .catch((e) => {
        if (e?.name !== "AbortError") console.warn("Hubs load:", e);
      });

    return () => {
      controller.abort();
    };
  }, [selectedCity, setViewState]);

  // Load active route geometry OR full transit corridors network when showRoutes is enabled
  useEffect(() => {
    if (!selectedCity) {
      setRouteGeo(null);
      return;
    }
    const controller = new AbortController();
    const signal = controller.signal;

    if (activeRouteUid) {
      // Specific route inspected
      fetchRouteGeometry(selectedCity, activeRouteUid, true, signal)
        .then((res) => {
          if (!signal.aborted) setRouteGeo(res);
        })
        .catch((e) => {
          if (e?.name !== "AbortError") setRouteGeo(null);
        });
    } else if (showRoutes) {
      // Full network corridors displayed when layer is checked
      fetchRouteGeometry(selectedCity, undefined, true, signal)
        .then((res) => {
          if (!signal.aborted) setRouteGeo(res);
        })
        .catch((e) => {
          if (e?.name !== "AbortError") setRouteGeo(null);
        });
    } else {
      setRouteGeo(null);
    }

    return () => controller.abort();
  }, [selectedCity, activeRouteUid, showRoutes]);

  // Extract set of stop IDs belonging to the active route for Context Isolation
  const activeRouteStopIds = useMemo(() => {
    if (!activeRouteUid || !routeGeo?.features) return null;
    const set = new Set<string>();
    for (const f of routeGeo.features) {
      const rawIds = f.properties?.stop_ids;
      if (typeof rawIds === "string") {
        rawIds
          .split(",")
          .map((s: string) => s.trim())
          .filter(Boolean)
          .forEach((id: string) => set.add(id));
      }
    }
    return set;
  }, [activeRouteUid, routeGeo]);

  // Synthetic animated vehicle trips along route paths
  const tripsData = useMemo(() => {
    if (!routeGeo?.features?.length) return [];
    const items: Array<{
      path: [number, number][];
      timestamps: number[];
      color: [number, number, number];
    }> = [];

    routeGeo.features.forEach((f: any) => {
      const coords = f.geometry?.coordinates || [];
      const flat = (Array.isArray(coords[0]?.[0]) ? coords[0] : coords) as [
        number,
        number
      ][];
      const count = flat.length;
      if (count < 2) return;

      const baseColor = hexColorToRgb(f.properties?.route_color || "#38bdf8");

      // Bus 1: primary vehicle [0 .. 1000]
      items.push({
        path: flat,
        timestamps: flat.map((_, i) => (i / (count - 1)) * 1000),
        color: baseColor,
      });

      // Bus 2 (offset 500): staggered trailing vehicle
      items.push(
        {
          path: flat,
          timestamps: flat.map((_, i) => (i / (count - 1)) * 1000 - 500),
          color: [255, 255, 255],
        },
        {
          path: flat,
          timestamps: flat.map((_, i) => (i / (count - 1)) * 1000 + 500),
          color: [255, 255, 255],
        }
      );
    });

    return items;
  }, [routeGeo]);

  // Deck.gl Layer Stack
  const layers = useMemo(() => {
    const list: any[] = [];
    const isRouteActive = Boolean(activeRouteUid);

    // Layer 1: Boundary
    if (showBoundary && boundary) {
      list.push(
        new GeoJsonLayer({
          id: "city-boundary",
          data: boundary,
          stroked: true,
          filled: true,
          getFillColor: [99, 102, 241, 8],
          getLineColor: [99, 102, 241, isRouteActive ? 60 : 160],
          getLineWidth: isRouteActive ? 1.5 : 2.0,
          lineWidthUnits: "pixels",
          lineJointRounded: true,
          lineCapRounded: true,
          pickable: false,
        })
      );
    }

    // Layer 2: H3 Hexagons 3D (Auto-suppressed when route is active to eliminate optical clash)
    if (!isRouteActive && showHexagons && hexagons.length > 0) {
      list.push(
        new H3HexagonLayer({
          id: "h3-grid",
          data: hexagons,
          getHexagon: (d: HexagonCell) => d.hex,
          extruded: show3DBuildings,
          getElevation: (d: HexagonCell) =>
            show3DBuildings ? Math.min(d.transport_score * 25, 2500) : 0,
          elevationScale: 1,
          wireframe: false,
          filled: true,
          getFillColor: (d: HexagonCell) => {
            if (h3Metric === "transit_desert") {
              return d.is_transit_desert ? [219, 55, 55, 180] : [30, 35, 42, 60];
            }
            if (h3Metric === "pop_total") {
              const alpha = Math.min(240, Math.max(40, (d.pop_total / 800) * 200));
              return [140, 80, 220, alpha];
            }
            if (h3Metric === "rcn_median_price_m2") {
              if (!d.rcn_median_price_m2) return [30, 35, 42, 40];
              const norm = Math.min(
                1,
                Math.max(0, (d.rcn_median_price_m2 - 6000) / 12000)
              );
              return [
                Math.round(43 + norm * 180),
                Math.round(149 - norm * 50),
                214,
                180,
              ];
            }
            // Default: transport_score
            const score = d.transport_score;
            if (score > 70) return [15, 153, 96, 170]; // High
            if (score > 40) return [43, 149, 214, 160]; // Mid
            if (score > 15) return [217, 130, 43, 140]; // Low
            return [40, 45, 52, 70]; // Baseline
          },
          pickable: true,
          onHover: (info: PickingInfo) => setHoverInfo(info),
          onClick: (info: PickingInfo) => {
            if (info?.object) {
              const cell = info.object as HexagonCell;
              selectObject("hex", cell.hex, cell);
            }
          },
        })
      );
    }

    // Layer 3: Physical Stops with Semantic Level of Detail (LOD)
    if (showStops && stops?.features) {
      const currentZoom = viewState.zoom ?? 12;
      // Semantic LOD:
      // - Regional zoom (< 12.0): micro stops hidden (only macro hubs show) unless a route is actively focused
      // - District zoom (12.0 - 13.5): show key corridor stops (>= 3 departures/h), hubs, or hovered/selected stop
      // - Local street zoom (>= 13.5): full physical stops network
      const isRegionalZoom = currentZoom < 12.0 && !isRouteActive;

      if (!isRegionalZoom) {
        const visibleFeatures = isRouteActive
          ? stops.features
          : currentZoom < 13.5
          ? stops.features.filter((f: any) => {
              const dep = Number(f.properties?.stop_departures_h || 0);
              const isHub = Boolean(f.properties?.is_hub_anchor || f.properties?.is_hub);
              const isTarget =
                (hoveredId && String(f.properties?.stop_id) === String(hoveredId)) ||
                (selectedId && String(f.properties?.stop_id) === String(selectedId));
              return dep >= 3.0 || isHub || isTarget;
            })
          : stops.features;

        list.push(
          new ScatterplotLayer({
            id: "stops-micro",
            data: visibleFeatures,
            getPosition: (f: any) => f.geometry.coordinates,
            getRadius: (f: any) => {
              let baseRadius = 5;
              if (currentZoom < 13) baseRadius = 3;
              else if (currentZoom < 14.5) baseRadius = 4.5;
              else baseRadius = 6;

              const stopId = String(f.properties?.stop_id);
              const isHovered = hoveredId && stopId === String(hoveredId);
              if (isHovered) return baseRadius * 1.6;

              if (!isRouteActive || !activeRouteStopIds) return baseRadius;
              return activeRouteStopIds.has(stopId) ? baseRadius * 1.4 : baseRadius * 0.5;
            },
            radiusUnits: "pixels",
            radiusMinPixels: isRouteActive ? 2 : 2,
            radiusMaxPixels: isMobile ? 12 : 16,
            getFillColor: (f: any) => {
              const stopId = String(f.properties?.stop_id);
              const isHovered = hoveredId && stopId === String(hoveredId);
              if (isHovered) {
                return [2, 132, 199, 255]; // Vivid sky blue when hovered
              }

              if (isRouteActive && activeRouteStopIds) {
                if (!activeRouteStopIds.has(stopId)) {
                  // Alien stop: deeply muted
                  return [100, 100, 100, 15];
                }
                // Active route stop: emerald or grade color
                return getGradeRgb(f.properties?.stop_grade || f.properties?.grade);
              }
              const rgb = getGradeRgb(f.properties?.stop_grade || f.properties?.grade);
              if (currentZoom < 13) {
                return [rgb[0], rgb[1], rgb[2], 180];
              }
              return rgb;
            },
            getLineColor: (f: any) => {
              const stopId = String(f.properties?.stop_id);
              const isHovered = hoveredId && stopId === String(hoveredId);
              if (isHovered) return [255, 255, 255, 255];

              if (isRouteActive && activeRouteStopIds) {
                return activeRouteStopIds.has(stopId)
                  ? [255, 255, 255, 240]
                  : [0, 0, 0, 0];
              }
              return [255, 255, 255, 140];
            },
            lineWidthUnits: "pixels",
            getLineWidth: (f: any) => {
              const stopId = String(f.properties?.stop_id);
              if (hoveredId && stopId === String(hoveredId)) return 2.5;

              if (isRouteActive && activeRouteStopIds) {
                return activeRouteStopIds.has(stopId) ? 2 : 0;
              }
              return 1;
            },
            stroked: true,
            filled: true,
            pickable: true,
            onHover: (info: PickingInfo) => {
              setHoverInfo(info);
              if (info?.object) {
                const p = (info.object as any).properties;
                setHoveredObject("stop", p?.stop_id);
              } else {
                setHoveredObject(null, null);
              }
            },
            onClick: (info: PickingInfo) => {
              if (info?.object) {
                const p = (info.object as any).properties;
                selectObject("stop", p.stop_id, p);
              }
            },
          })
        );
      }
    }

    // Layer 4: Macro Hubs
    if (showHubs && hubs?.features) {
      const currentZoom = viewState.zoom ?? 12;
      list.push(
        new ScatterplotLayer({
          id: "hubs-macro",
          data: hubs.features,
          getPosition: (f: any) => f.geometry.coordinates,
          getRadius: (f: any) => {
            const count = f.properties?.hub_stops_count || 1;
            const isHovered = hoveredId && String(f.properties?.hub_id) === String(hoveredId);
            if (isHovered) return currentZoom < 12.0 ? 9 : 18;
            if (currentZoom < 12.0) {
              return 5.5;
            }
            if (currentZoom < 13.5) {
              return Math.min(12, 6 + count * 0.9);
            }
            return Math.min(20, 8 + count * 1.5);
          },
          radiusUnits: "pixels",
          radiusMinPixels: currentZoom < 12.0 ? 4 : 5,
          radiusMaxPixels: isMobile ? 16 : 24,
          getFillColor: (f: any) => {
            const rgb = getGradeRgb(
              f.properties?.hub_grade || f.properties?.grade
            );
            const isHovered = hoveredId && String(f.properties?.hub_id) === String(hoveredId);
            if (isHovered) return [71, 49, 127, 255];
            return isRouteActive ? [rgb[0], rgb[1], rgb[2], 90] : rgb;
          },
          getLineColor: (f: any) => {
            const isHovered = hoveredId && String(f.properties?.hub_id) === String(hoveredId);
            if (isHovered) return [255, 255, 255, 255];
            return [255, 255, 255, isRouteActive ? 120 : 200];
          },
          lineWidthUnits: "pixels",
          getLineWidth: (f: any) => {
            const isHovered = hoveredId && String(f.properties?.hub_id) === String(hoveredId);
            return isHovered ? 3 : 1.5;
          },
          stroked: true,
          filled: true,
          pickable: true,
          onHover: (info: PickingInfo) => {
            setHoverInfo(info);
            if (info?.object) {
              const p = (info.object as any).properties;
              setHoveredObject("hub", p?.hub_id);
            } else {
              setHoveredObject(null, null);
            }
          },
          onClick: (info: PickingInfo) => {
            if (info?.object) {
              const p = (info.object as any).properties;
              selectObject("hub", p.hub_id, p);
            }
          },
        })
      );
    }

    // Layer 4b: Selected Object Selection Halo (for Hub or Stop)
    if (selectedId && (selectionType === "hub" || selectionType === "stop")) {
      let haloCoord: [number, number] | null = null;
      let haloRadius = 24;

      if (selectionType === "hub" && hubs?.features) {
        const h = hubs.features.find(
          (f: any) => String(f.properties?.hub_id) === String(selectedId)
        );
        if (h?.geometry?.coordinates) {
          haloCoord = h.geometry.coordinates;
          const stopsCount = h.properties?.hub_stops_count || 1;
          haloRadius = Math.min(32, 16 + stopsCount * 2);
        }
      } else if (selectionType === "stop" && stops?.features) {
        const s = stops.features.find(
          (f: any) => String(f.properties?.stop_id) === String(selectedId)
        );
        if (s?.geometry?.coordinates) {
          haloCoord = s.geometry.coordinates;
          haloRadius = 14;
        }
      }

      if (haloCoord) {
        list.push(
          new ScatterplotLayer({
            id: "selected-object-halo",
            data: [{ position: haloCoord }],
            getPosition: (d: any) => d.position,
            getRadius: haloRadius,
            radiusUnits: "pixels",
            stroked: true,
            filled: true,
            getFillColor: [71, 49, 127, 50], // Translucent brand purple glow
            getLineColor: [71, 49, 127, 255], // Solid brand purple ring
            lineWidthUnits: "pixels",
            getLineWidth: 3,
            pickable: false,
          })
        );
      }
    }

    // Layer 4c: Hovered Object Aura (cross-highlighting)
    if (hoveredId && hoveredId !== selectedId && (hoveredType === "hub" || hoveredType === "stop")) {
      let haloCoord: [number, number] | null = null;
      let haloRadius = 18;

      if (hoveredType === "hub" && hubs?.features) {
        const h = hubs.features.find(
          (f: any) => String(f.properties?.hub_id) === String(hoveredId)
        );
        if (h?.geometry?.coordinates) {
          haloCoord = h.geometry.coordinates;
          const stopsCount = h.properties?.hub_stops_count || 1;
          haloRadius = Math.min(30, 16 + stopsCount * 2);
        }
      } else if (hoveredType === "stop" && stops?.features) {
        const s = stops.features.find(
          (f: any) => String(f.properties?.stop_id) === String(hoveredId)
        );
        if (s?.geometry?.coordinates) {
          haloCoord = s.geometry.coordinates;
          haloRadius = 16;
        }
      }

      if (haloCoord) {
        list.push(
          new ScatterplotLayer({
            id: "hovered-object-halo",
            data: [{ position: haloCoord }],
            getPosition: (d: any) => d.position,
            getRadius: haloRadius,
            radiusUnits: "pixels",
            stroked: true,
            filled: true,
            getFillColor: [2, 132, 199, 45], // Soft cyan/sky blue aura
            getLineColor: [2, 132, 199, 220], // Bright sky ring
            lineWidthUnits: "pixels",
            getLineWidth: 2.5,
            pickable: false,
          })
        );
      }
    }

    // Layer 5: Active Route (Buffer Glow + Path with Velocity Gradient)
    if (showRoutes && routeGeo?.features) {
      // 5a. Catchment buffer glow (only when a specific route is active to prevent optical blur)
      if (isRouteActive) {
        list.push(
          new PathLayer({
            id: "route-buffer-glow",
            data: routeGeo.features,
            getPath: (f: any) => f.geometry.coordinates,
            getColor: (f: any) => {
              const base = getSpeedColor(
                f.properties?.commercial_speed_kmh,
                f.properties?.route_color
              );
              return [base[0], base[1], base[2], 35];
            },
            getWidth: 14,
            widthUnits: "pixels",
            capRounded: true,
            jointRounded: true,
            pickable: false,
          })
        );
      }

      // 5b. Primary route line with velocity-aware gradient
      const currentZoom = viewState.zoom ?? 12;
      list.push(
        new PathLayer({
          id: "route-path",
          data: routeGeo.features,
          getPath: (f: any) => f.geometry.coordinates,
          getColor: (f: any) => {
            const rgb = getSpeedColor(
              f.properties?.commercial_speed_kmh,
              f.properties?.route_color
            );
            if (!isRouteActive && currentZoom < 12.0) {
              return [rgb[0], rgb[1], rgb[2], 75]; // delicate transit skeleton at regional zoom
            }
            if (!isRouteActive && currentZoom < 13.5) {
              return [rgb[0], rgb[1], rgb[2], 130];
            }
            return isRouteActive ? [rgb[0], rgb[1], rgb[2], 255] : [rgb[0], rgb[1], rgb[2], 180];
          },
          getWidth: isRouteActive ? 4.5 : currentZoom < 12.0 ? 1.25 : 2.2,
          widthUnits: "pixels",
          capRounded: true,
          jointRounded: true,
          pickable: false,
        })
      );

      // 5c. Synthetic animated bus pulses (TripsLayer at 60 FPS)
      if (tripsData.length > 0) {
        list.push(
          new TripsLayer({
            id: "route-trips-pulse",
            data: tripsData,
            getPath: (d: any) => d.path,
            getTimestamps: (d: any) => d.timestamps,
            getColor: (d: any) => d.color,
            currentTime: animTime,
            trailLength: 70,
            capRounded: true,
            jointRounded: true,
            widthMinPixels: 4,
          })
        );
      }
    }

    // Layer 6: Selected Axe Pair Cannibalization Vector
    if (selectedAxePair && stops?.features) {
      const domFeature = stops.features.find(
        (f: any) =>
          String(f.properties?.stop_id) ===
          String(selectedAxePair.dominant_stop_id)
      );
      if (
        domFeature?.geometry?.coordinates &&
        selectedAxePair.lon &&
        selectedAxePair.lat
      ) {
        const pRedundant = [selectedAxePair.lon, selectedAxePair.lat];
        const pDominant = domFeature.geometry.coordinates;

        list.push(
          new PathLayer({
            id: "cannibalization-vector",
            data: [{ path: [pRedundant, pDominant] }],
            getPath: (d: any) => d.path,
            getColor: [219, 55, 55, 255],
            getWidth: 4,
            widthUnits: "pixels",
            capRounded: true,
            jointRounded: true,
            pickable: false,
          }),
          new ScatterplotLayer({
            id: "cannibalization-endpoints",
            data: [
              { pos: pRedundant, color: [219, 55, 55, 255], radius: 10 },
              { pos: pDominant, color: [15, 153, 96, 255], radius: 12 },
            ],
            getPosition: (d: any) => d.pos,
            getFillColor: (d: any) => d.color,
            getRadius: (d: any) => d.radius,
            radiusUnits: "pixels",
            stroked: true,
            getLineColor: [255, 255, 255, 255],
            getLineWidth: 2,
            lineWidthUnits: "pixels",
            pickable: false,
          })
        );
      }
    }

    // Layer 7: Real-Time / Simulated Active Buses
    const isMatchingCity = simulationDataset?.city?.toLowerCase() === selectedCity?.toLowerCase();
    if (isSimulationActive && isMatchingCity && activeVehicles.length > 0) {
      // 7a. Selected vehicle pulsing aura ring
      if (selectedVehicle) {
        list.push(
          new ScatterplotLayer({
            id: "simulation-selected-halo",
            data: [selectedVehicle],
            getPosition: (d: ActiveVehicle) => [d.lon, d.lat],
            getRadius: 24,
            radiusUnits: "pixels",
            stroked: true,
            filled: false,
            getLineColor: [71, 49, 127, 200],
            getLineWidth: 3,
            lineWidthUnits: "pixels",
            pickable: false,
          })
        );
      }

      // 7b. Primary Bus Circles (Color coded by route with high contrast white stroke)
      list.push(
        new ScatterplotLayer({
          id: "simulation-bus-points",
          data: activeVehicles,
          getPosition: (d: ActiveVehicle) => [d.lon, d.lat],
          getRadius: (d: ActiveVehicle) => (selectedVehicle?.id === d.id ? 14 : 11),
          radiusUnits: "pixels",
          radiusMinPixels: 8,
          radiusMaxPixels: 22,
          getFillColor: (d: ActiveVehicle) => hexColorToRgb(d.routeColor, [71, 49, 127]),
          getLineColor: [255, 255, 255, 255],
          getLineWidth: 2,
          lineWidthUnits: "pixels",
          stroked: true,
          filled: true,
          pickable: true,
          onHover: (info: PickingInfo) => setHoverInfo(info),
          onClick: (info: PickingInfo) => {
            if (info?.object) {
              selectVehicle(info.object as ActiveVehicle);
            }
          },
        })
      );

      // 7c. TextLayer displaying route short name on top of each bus
      list.push(
        new TextLayer({
          id: "simulation-bus-labels",
          data: activeVehicles,
          getPosition: (d: ActiveVehicle) => [d.lon, d.lat],
          getText: (d: ActiveVehicle) => d.routeShortName,
          getSize: 9,
          sizeUnits: "pixels",
          getColor: [255, 255, 255, 255],
          getTextAnchor: "middle",
          getAlignmentBaseline: "center",
          fontWeight: "bold",
          fontFamily: "Inter, system-ui, sans-serif",
          pickable: false,
        })
      );
    }

    return list;
  }, [
    boundary,
    hexagons,
    stops,
    hubs,
    routeGeo,
    tripsData,
    animTime,
    selectedAxePair,
    activeRouteUid,
    activeRouteStopIds,
    showBoundary,
    showHexagons,
    showStops,
    showHubs,
    showRoutes,
    show3DBuildings,
    h3Metric,
    selectObject,
    selectedId,
    selectionType,
    isSimulationActive,
    activeVehicles,
    selectedVehicle,
    selectVehicle,
  ]);

  const handleViewStateChange = useCallback(
    ({ viewState: nextViewState }: any) => {
      setViewState(nextViewState);
    },
    [setViewState]
  );

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        touchAction: "none",
      }}
    >
      <DeckGL
        viewState={viewState}
        onViewStateChange={handleViewStateChange}
        controller={{
          dragPan: true,
          dragRotate: true,
          touchRotate: true,
          touchZoom: true,
          doubleClickZoom: true,
          keyboard: true,
          inertia: 250,
        }}
        layers={layers}
        useDevicePixels={isMobile ? 1.5 : true}
      >
        <Map
          mapStyle={
            mapStyle === "satellite"
              ? SATELLITE_STYLE
              : mapStyle === "dark"
              ? CARTO_DARK_MATTER
              : CARTO_POSITRON
          }
          reuseMaps
        />
      </DeckGL>

      {/* Dynamic Hover Tooltip - Tactical Glass Card */}
      {hoverInfo?.object && (
        <div
          style={{
            position: "absolute",
            zIndex: 40,
            pointerEvents: "none",
            left: hoverInfo.x + 14,
            top: hoverInfo.y + 14,
            background: "rgba(255, 255, 255, 0.96)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(226, 232, 240, 0.9)",
            borderRadius: 14,
            padding: "10px 14px",
            fontSize: 11,
            color: "#0f172a",
            boxShadow:
              "0 20px 25px -5px rgba(15, 23, 42, 0.15), 0 8px 10px -6px rgba(15, 23, 42, 0.08)",
            maxWidth: 320,
          }}
        >
          {/* Hexagon Tooltip */}
          {(hoverInfo.object as any) && "hex" in (hoverInfo.object as any) && (
            <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <div
                style={{
                  fontWeight: 800,
                  color: "#47317f",
                  fontSize: 11,
                  letterSpacing: "0.02em",
                }}
              >
                Strefa Dostępności Transportowej
              </div>
              <div style={{ fontSize: 10, color: "#64748b", marginBottom: 3 }}>
                Aglomeracja kielecka • Siatka analityczna
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gap: "2px 8px",
                  fontSize: 11,
                }}
              >
                <span style={{ color: "#64748b" }}>Wskaźnik obsługi:</span>
                <span className="tabular-nums" style={{ fontWeight: 700, color: "#0f172a" }}>
                  {(hoverInfo.object as HexagonCell).transport_score.toFixed(1)}{" "}
                  <span style={{ color: "#94a3b8" }}>/ 100</span>
                </span>
                <span style={{ color: "#64748b" }}>Mieszkańcy (GUS):</span>
                <span className="tabular-nums" style={{ fontWeight: 700, color: "#0f172a" }}>
                  {Math.round(
                    (hoverInfo.object as HexagonCell).pop_total
                  ).toLocaleString("pl-PL")}
                </span>
                <span style={{ color: "#64748b" }}>Odjazdy łączne:</span>
                <span className="tabular-nums" style={{ fontWeight: 700, color: "#0f172a" }}>
                  {(hoverInfo.object as HexagonCell).total_departures_h.toFixed(1)}/h
                </span>
                {(hoverInfo.object as HexagonCell).rcn_median_price_m2 && (
                  <>
                    <span style={{ color: "#64748b" }}>Śr. cena m²:</span>
                    <span
                      className="tabular-nums"
                      style={{ fontWeight: 700, color: "#47317f" }}
                    >
                      {Math.round(
                        (hoverInfo.object as HexagonCell).rcn_median_price_m2!
                      ).toLocaleString("pl-PL")}{" "}
                      zł
                    </span>
                  </>
                )}
              </div>
              {(hoverInfo.object as HexagonCell).is_transit_desert && (
                <div
                  style={{
                    color: "#dc2626",
                    fontWeight: 800,
                    marginTop: 5,
                    fontSize: 10,
                    letterSpacing: "0.04em",
                  }}
                >
                  STREFA DEFICYTU KOMUNIKACYJNEGO
                </div>
              )}
            </div>
          )}

          {/* Stop Tooltip - Tactical Glass Card */}
          {(hoverInfo.object as any)?.properties &&
            "stop_id" in (hoverInfo.object as any).properties && (() => {
              const p = (hoverInfo.object as any).properties;
              const grade = String(p.stop_grade || p.grade || "B").toUpperCase();
              const gradeColor =
                grade.startsWith("A")
                  ? "bg-emerald-600 text-white"
                  : grade.startsWith("B")
                  ? "bg-sky-600 text-white"
                  : grade.startsWith("C")
                  ? "bg-amber-600 text-white"
                  : "bg-rose-600 text-white";

              return (
                <div style={{ display: "flex", flexDirection: "column", gap: 6, minWidth: 220 }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 8 }}>
                    <div>
                      <div style={{ fontWeight: 800, color: "#0f172a", fontSize: 13, lineHeight: 1.2 }}>
                        {p.stop_name}
                      </div>
                      <div style={{ fontSize: 10, color: "#64748b", marginTop: 2 }}>
                        {p.is_hub_anchor ? "Stanowisko węzłowe" : "Słupek fizyczny"}
                        {p.platform_code ? ` • Peron ${p.platform_code}` : ""}
                      </div>
                    </div>
                    <span
                      style={{
                        padding: "2px 7px",
                        borderRadius: 6,
                        fontSize: 10,
                        fontWeight: 900,
                        letterSpacing: "0.05em",
                      }}
                      className={gradeColor}
                    >
                      {grade}
                    </span>
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "4px 8px",
                      paddingTop: 6,
                      borderTop: "1px solid #f1f5f9",
                    }}
                  >
                    <div>
                      <div style={{ fontSize: 9, textTransform: "uppercase", color: "#94a3b8", fontWeight: 700 }}>
                        Odjazdy
                      </div>
                      <div className="font-mono font-bold text-slate-800 text-xs">
                        {Number(p.stop_departures_h || 0).toFixed(1)}{" "}
                        <span style={{ fontSize: 9, color: "#64748b", fontWeight: 400 }}>odj./h</span>
                      </div>
                    </div>
                    {p.stop_z_score != null && (
                      <div>
                        <div style={{ fontSize: 9, textTransform: "uppercase", color: "#94a3b8", fontWeight: 700 }}>
                          Z-Score
                        </div>
                        <div
                          className={`font-mono font-bold text-xs ${
                            Number(p.stop_z_score) >= 0 ? "text-emerald-600" : "text-amber-600"
                          }`}
                        >
                          {Number(p.stop_z_score) > 0
                            ? `+${Number(p.stop_z_score).toFixed(2)}`
                            : Number(p.stop_z_score).toFixed(2)}
                          σ
                        </div>
                      </div>
                    )}
                  </div>

                  <div
                    style={{
                      paddingTop: 6,
                      borderTop: "1px solid #f1f5f9",
                      fontSize: 10,
                      color: "#47317f",
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                    }}
                  >
                    <span>⚡ Kliknij, aby wycentrować i otworzyć szczegóły</span>
                  </div>
                </div>
              );
            })()}

          {/* Hub Tooltip - Tactical Glass Card */}
          {(hoverInfo.object as any)?.properties &&
            "hub_id" in (hoverInfo.object as any).properties && (() => {
              const p = (hoverInfo.object as any).properties;
              const grade = String(p.hub_grade || p.grade || "A").toUpperCase();
              const gradeColor =
                grade.startsWith("A")
                  ? "bg-emerald-600 text-white"
                  : grade.startsWith("B")
                  ? "bg-sky-600 text-white"
                  : grade.startsWith("C")
                  ? "bg-amber-600 text-white"
                  : "bg-rose-600 text-white";

              return (
                <div style={{ display: "flex", flexDirection: "column", gap: 6, minWidth: 230 }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 8 }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        <span
                          style={{
                            padding: "1px 5px",
                            borderRadius: 4,
                            backgroundColor: "#ede9fe",
                            color: "#47317f",
                            fontSize: 9,
                            fontWeight: 900,
                            letterSpacing: "0.05em",
                          }}
                        >
                          WĘZEŁ
                        </span>
                        <span style={{ fontSize: 10, color: "#64748b", fontWeight: 600 }}>
                          {p.hub_stops_count || 1} stan.
                        </span>
                      </div>
                      <div style={{ fontWeight: 800, color: "#47317f", fontSize: 13, lineHeight: 1.2, marginTop: 2 }}>
                        {p.hub_name || p.stop_name}
                      </div>
                    </div>
                    <span
                      style={{
                        padding: "2px 7px",
                        borderRadius: 6,
                        fontSize: 10,
                        fontWeight: 900,
                        letterSpacing: "0.05em",
                      }}
                      className={gradeColor}
                    >
                      {grade}
                    </span>
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "4px 8px",
                      paddingTop: 6,
                      borderTop: "1px solid #f1f5f9",
                    }}
                  >
                    <div>
                      <div style={{ fontSize: 9, textTransform: "uppercase", color: "#94a3b8", fontWeight: 700 }}>
                        Pojemność
                      </div>
                      <div className="font-mono font-bold text-slate-800 text-xs">
                        {p.hub_stops_count || 1}{" "}
                        <span style={{ fontSize: 9, color: "#64748b", fontWeight: 400 }}>stanowisk</span>
                      </div>
                    </div>
                    {p.hub_departures_h != null && (
                      <div>
                        <div style={{ fontSize: 9, textTransform: "uppercase", color: "#94a3b8", fontWeight: 700 }}>
                          Odjazdy sum.
                        </div>
                        <div className="font-mono font-bold text-slate-800 text-xs">
                          {Number(p.hub_departures_h).toFixed(1)}{" "}
                          <span style={{ fontSize: 9, color: "#64748b", fontWeight: 400 }}>odj./h</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div
                    style={{
                      paddingTop: 6,
                      borderTop: "1px solid #f1f5f9",
                      fontSize: 10,
                      color: "#47317f",
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                    }}
                  >
                    <span>⚡ Kliknij, aby zbadać profil węzła 360°</span>
                  </div>
                </div>
              );
            })()}

          {/* Active Bus Simulation Tooltip */}
          {(hoverInfo.object as any)?.tripId && (
            <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span
                  style={{
                    backgroundColor: (hoverInfo.object as any).routeColor || "#47317f",
                    color: "#fff",
                    fontWeight: 900,
                    fontSize: 11,
                    padding: "2px 6px",
                    borderRadius: 6,
                  }}
                >
                  Linia {(hoverInfo.object as any).routeShortName}
                </span>
                <span
                  style={{
                    fontWeight: 800,
                    color: "#0f172a",
                    fontSize: 11,
                    maxWidth: 180,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {(hoverInfo.object as any).headsign}
                </span>
              </div>
              <div style={{ fontSize: 10, color: "#64748b", marginTop: 2 }}>
                Prędkość:{" "}
                <strong style={{ color: "#0f172a" }}>
                  {(hoverInfo.object as any).speedKmh} km/h
                </strong>
                {" • "}
                Kurs: <strong>{Math.round((hoverInfo.object as any).bearing)}°</strong>
              </div>
              <div style={{ fontSize: 10, color: "#059669", marginTop: 1 }}>
                Następny: <strong>{(hoverInfo.object as any).nextStopName}</strong>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
