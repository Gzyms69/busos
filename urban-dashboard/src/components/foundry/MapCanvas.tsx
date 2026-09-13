"use client";

import React, { useEffect, useState, useMemo, useCallback } from "react";
import DeckGL from "@deck.gl/react";
import { ScatterplotLayer, GeoJsonLayer, PathLayer } from "@deck.gl/layers";
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
import type { HexagonCell } from "@/lib/api/types";
import type { PickingInfo } from "@deck.gl/core";
import MapHud from "./MapHud";
import "maplibre-gl/dist/maplibre-gl.css";

const CARTO_POSITRON =
  "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json";
const CARTO_DARK_MATTER =
  "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json";
const SATELLITE_STYLE =
  "https://api.maptiler.com/maps/hybrid/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL";

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
    activeRouteUid,
    selectedAxePair,
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

  // Load datasets when selected city changes
  useEffect(() => {
    if (!selectedCity) return;
    const controller = new AbortController();
    const signal = controller.signal;

    // 1. Boundary & auto-center
    fetchCityBoundary(selectedCity, signal)
      .then((b) => {
        if (!signal.aborted && b?.features?.[0]) {
          setBoundary(b);
          const coords = b.features[0].geometry?.coordinates;
          if (coords) {
            try {
              const flat = coords.flat(2) as [number, number][];
              if (flat.length > 0) {
                const lons = flat.map((p) => p[0]).filter(Number.isFinite);
                const lats = flat.map((p) => p[1]).filter(Number.isFinite);
                if (lons.length > 0 && lats.length > 0) {
                  const minLon = Math.min(...lons);
                  const maxLon = Math.max(...lons);
                  const minLat = Math.min(...lats);
                  const maxLat = Math.max(...lats);
                  setViewState({
                    longitude: (minLon + maxLon) / 2,
                    latitude: (minLat + maxLat) / 2,
                    zoom: 12,
                  });
                }
              }
            } catch {}
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

  // Load active route geometry
  useEffect(() => {
    if (!selectedCity || !activeRouteUid) {
      setRouteGeo(null);
      return;
    }
    const controller = new AbortController();
    fetchRouteGeometry(selectedCity, activeRouteUid, true, controller.signal)
      .then((res) => {
        if (!controller.signal.aborted) setRouteGeo(res);
      })
      .catch((e) => {
        if (e?.name !== "AbortError") setRouteGeo(null);
      });

    return () => controller.abort();
  }, [selectedCity, activeRouteUid]);

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
          filled: false,
          getLineColor: [43, 149, 214, isRouteActive ? 60 : 180],
          getLineWidth: isRouteActive ? 1.5 : 2.5,
          lineWidthUnits: "pixels",
          lineJointRounded: true,
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

    // Layer 3: Physical Stops (With Context Isolation: alien stops fade to 8% opacity)
    if (showStops && stops?.features) {
      list.push(
        new ScatterplotLayer({
          id: "stops-micro",
          data: stops.features,
          getPosition: (f: any) => f.geometry.coordinates,
          getRadius: (f: any) => {
            if (!isRouteActive || !activeRouteStopIds) return 6;
            const stopId = String(f.properties?.stop_id);
            return activeRouteStopIds.has(stopId) ? 8 : 2.5;
          },
          radiusUnits: "pixels",
          radiusMinPixels: 2,
          radiusMaxPixels: 16,
          getFillColor: (f: any) => {
            if (isRouteActive && activeRouteStopIds) {
              const stopId = String(f.properties?.stop_id);
              if (!activeRouteStopIds.has(stopId)) {
                // Alien stop: deeply muted
                return [100, 100, 100, 20];
              }
              // Active route stop: emerald or grade color
              return getGradeRgb(f.properties?.stop_grade || f.properties?.grade);
            }
            return getGradeRgb(f.properties?.stop_grade || f.properties?.grade);
          },
          getLineColor: (f: any) => {
            if (isRouteActive && activeRouteStopIds) {
              const stopId = String(f.properties?.stop_id);
              return activeRouteStopIds.has(stopId)
                ? [255, 255, 255, 240]
                : [0, 0, 0, 0];
            }
            return [17, 20, 24, 255];
          },
          lineWidthUnits: "pixels",
          getLineWidth: (f: any) => {
            if (isRouteActive && activeRouteStopIds) {
              const stopId = String(f.properties?.stop_id);
              return activeRouteStopIds.has(stopId) ? 2 : 0;
            }
            return 1.5;
          },
          stroked: true,
          filled: true,
          pickable: true,
          onHover: (info: PickingInfo) => setHoverInfo(info),
          onClick: (info: PickingInfo) => {
            if (info?.object) {
              const p = (info.object as any).properties;
              selectObject("stop", p.stop_id, p);
            }
          },
        })
      );
    }

    // Layer 4: Macro Hubs
    if (showHubs && hubs?.features) {
      list.push(
        new ScatterplotLayer({
          id: "hubs-macro",
          data: hubs.features,
          getPosition: (f: any) => f.geometry.coordinates,
          getRadius: (f: any) =>
            Math.min(22, 10 + (f.properties?.hub_stops_count || 1) * 2),
          radiusUnits: "pixels",
          radiusMinPixels: 6,
          radiusMaxPixels: 24,
          getFillColor: (f: any) => {
            const rgb = getGradeRgb(
              f.properties?.hub_grade || f.properties?.grade
            );
            return isRouteActive ? [rgb[0], rgb[1], rgb[2], 90] : rgb;
          },
          getLineColor: [255, 255, 255, isRouteActive ? 120 : 200],
          lineWidthUnits: "pixels",
          getLineWidth: 2,
          stroked: true,
          filled: true,
          pickable: true,
          onHover: (info: PickingInfo) => setHoverInfo(info),
          onClick: (info: PickingInfo) => {
            if (info?.object) {
              const p = (info.object as any).properties;
              selectObject("hub", p.hub_id, p);
            }
          },
        })
      );
    }

    // Layer 5: Active Route (Buffer Glow + Path with Velocity Gradient)
    if (showRoutes && routeGeo?.features) {
      // 5a. Catchment buffer glow
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

      // 5b. Primary route line with velocity-aware gradient
      list.push(
        new PathLayer({
          id: "route-path",
          data: routeGeo.features,
          getPath: (f: any) => f.geometry.coordinates,
          getColor: (f: any) =>
            getSpeedColor(
              f.properties?.commercial_speed_kmh,
              f.properties?.route_color
            ),
          getWidth: 4.5,
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
      }}
    >
      <DeckGL
        viewState={viewState}
        onViewStateChange={handleViewStateChange}
        controller={true}
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

      {/* Dynamic Hover Tooltip */}
      {hoverInfo?.object && (
        <div
          style={{
            position: "absolute",
            zIndex: 40,
            pointerEvents: "none",
            left: hoverInfo.x + 12,
            top: hoverInfo.y + 12,
            background: "rgba(255, 255, 255, 0.96)",
            backdropFilter: "blur(12px)",
            border: "1px solid #e2e8f0",
            borderRadius: 12,
            padding: "8px 12px",
            fontSize: 11,
            color: "#0f172a",
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.12), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            maxWidth: 280,
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

          {/* Stop Tooltip */}
          {(hoverInfo.object as any)?.properties &&
            "stop_id" in (hoverInfo.object as any).properties && (
              <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <div style={{ fontWeight: 800, color: "#0f172a", fontSize: 12 }}>
                  {(hoverInfo.object as any).properties.stop_name}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: "#64748b",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <span>
                    Klasa:{" "}
                    <strong style={{ color: "#47317f" }}>
                      {(hoverInfo.object as any).properties.stop_grade ||
                        (hoverInfo.object as any).properties.grade}
                    </strong>
                  </span>
                  <span>•</span>
                  <span>
                    <strong style={{ color: "#0f172a" }}>
                      {Number(
                        (hoverInfo.object as any).properties.stop_departures_h || 0
                      ).toFixed(1)}
                    </strong>{" "}
                    odjazdów/h
                  </span>
                </div>
              </div>
            )}

          {/* Hub Tooltip */}
          {(hoverInfo.object as any)?.properties &&
            "hub_id" in (hoverInfo.object as any).properties && (
              <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <div style={{ fontWeight: 800, color: "#47317f", fontSize: 12 }}>
                  {(hoverInfo.object as any).properties.hub_name ||
                    (hoverInfo.object as any).properties.stop_name}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: "#64748b",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <span>Węzeł przesiadkowy</span>
                  <span>•</span>
                  <span>
                    {(hoverInfo.object as any).properties.hub_stops_count || 1} stanowisk
                  </span>
                </div>
              </div>
            )}
        </div>
      )}
    </div>
  );
}
