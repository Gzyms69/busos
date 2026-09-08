"use client";

import React, { useEffect, useState, useMemo, useCallback } from "react";
import DeckGL from "@deck.gl/react";
import { ScatterplotLayer, GeoJsonLayer, PathLayer } from "@deck.gl/layers";
import { H3HexagonLayer } from "@deck.gl/geo-layers";
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

function hexColorToRgb(hex: string, fallback: [number, number, number] = [43, 149, 214]): [number, number, number] {
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
          // Calculate center
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

  // Deck.gl Layer Stack
  const layers = useMemo(() => {
    const list: any[] = [];

    // Layer 1: Boundary
    if (showBoundary && boundary) {
      list.push(
        new GeoJsonLayer({
          id: "city-boundary",
          data: boundary,
          stroked: true,
          filled: false,
          getLineColor: [43, 149, 214, 200],
          getLineWidth: 2.5,
          lineWidthUnits: "pixels",
          lineJointRounded: true,
          pickable: false,
        })
      );
    }

    // Layer 2: H3 Hexagons 3D
    if (showHexagons && hexagons.length > 0) {
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
              const norm = Math.min(1, Math.max(0, (d.rcn_median_price_m2 - 6000) / 12000));
              return [Math.round(43 + norm * 180), Math.round(149 - norm * 50), 214, 180];
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

    // Layer 3: Physical Stops
    if (showStops && stops?.features) {
      list.push(
        new ScatterplotLayer({
          id: "stops-micro",
          data: stops.features,
          getPosition: (f: any) => f.geometry.coordinates,
          getRadius: 7,
          radiusUnits: "pixels",
          radiusMinPixels: 3.5,
          radiusMaxPixels: 14,
          getFillColor: (f: any) => getGradeRgb(f.properties?.stop_grade || f.properties?.grade),
          getLineColor: [17, 20, 24, 255],
          lineWidthUnits: "pixels",
          getLineWidth: 1.5,
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
          getRadius: (f: any) => Math.min(22, 10 + (f.properties?.hub_stops_count || 1) * 2),
          radiusUnits: "pixels",
          radiusMinPixels: 6,
          radiusMaxPixels: 24,
          getFillColor: (f: any) => getGradeRgb(f.properties?.hub_grade || f.properties?.grade),
          getLineColor: [255, 255, 255, 200],
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

    // Layer 5: Active Route
    if (showRoutes && routeGeo?.features) {
      list.push(
        new PathLayer({
          id: "route-path",
          data: routeGeo.features,
          getPath: (f: any) => f.geometry.coordinates,
          getColor: (f: any) => hexColorToRgb(f.properties?.color || "#e31e24"),
          getWidth: 4.5,
          widthUnits: "pixels",
          capRounded: true,
          jointRounded: true,
          pickable: false,
        })
      );
    }

    // Layer 6: Selected Axe Pair Cannibalization Vector
    if (selectedAxePair && stops?.features) {
      const domFeature = stops.features.find(
        (f: any) => String(f.properties?.stop_id) === String(selectedAxePair.dominant_stop_id)
      );
      if (domFeature?.geometry?.coordinates && selectedAxePair.lon && selectedAxePair.lat) {
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
    selectedAxePair,
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
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      <DeckGL
        viewState={viewState}
        onViewStateChange={handleViewStateChange}
        controller={true}
        layers={layers}
      >
        <Map
          mapStyle={mapStyle === "satellite" ? SATELLITE_STYLE : CARTO_DARK_MATTER}
          reuseMaps
        />
      </DeckGL>

      {/* Floating HUD */}
      <MapHud />

      {/* Dynamic Hover Tooltip */}
      {hoverInfo?.object && (
        <div
          style={{
            position: "absolute",
            zIndex: 30,
            pointerEvents: "none",
            left: hoverInfo.x + 12,
            top: hoverInfo.y + 12,
            background: "rgba(24, 28, 32, 0.94)",
            backdropFilter: "blur(6px)",
            border: "1px solid #383e47",
            borderRadius: 6,
            padding: "8px 12px",
            fontSize: 11,
            color: "#f6f7f9",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.6)",
            maxWidth: 260,
          }}
        >
          {/* Hexagon Tooltip */}
          {"hex" in (hoverInfo.object as any) && (
            <div>
              <div style={{ fontWeight: 700, color: "#2b95d6", marginBottom: 3 }}>
                Heks Res 8: {(hoverInfo.object as HexagonCell).hex}
              </div>
              <div>Podaż transportu: {(hoverInfo.object as HexagonCell).transport_score.toFixed(1)} / 100</div>
              <div>Populacja GUS: {Math.round((hoverInfo.object as HexagonCell).pop_total)}</div>
              <div>Odjazdy/h: {(hoverInfo.object as HexagonCell).total_departures_h.toFixed(1)}</div>
              {(hoverInfo.object as HexagonCell).rcn_median_price_m2 && (
                <div>RCN: {Math.round((hoverInfo.object as HexagonCell).rcn_median_price_m2!)} PLN/m²</div>
              )}
              {(hoverInfo.object as HexagonCell).is_transit_desert && (
                <div style={{ color: "#db3737", fontWeight: 700, marginTop: 4 }}>
                  ⚠️ PUSTYNIA TRANSPORTOWA
                </div>
              )}
            </div>
          )}

          {/* Stop Tooltip */}
          {"stop_id" in (hoverInfo.object as any)?.properties && (
            <div>
              <div style={{ fontWeight: 700, color: "#0f9960", marginBottom: 2 }}>
                {(hoverInfo.object as any).properties.stop_name}
              </div>
              <div style={{ color: "#8f99a8" }}>
                ID: {(hoverInfo.object as any).properties.stop_id} | Klasa:{" "}
                {(hoverInfo.object as any).properties.stop_grade || (hoverInfo.object as any).properties.grade}
              </div>
              <div>
                Odjazdy: {Number((hoverInfo.object as any).properties.stop_departures_h || 0).toFixed(1)}/h
              </div>
            </div>
          )}

          {/* Hub Tooltip */}
          {"hub_id" in (hoverInfo.object as any)?.properties && (
            <div>
              <div style={{ fontWeight: 700, color: "#2b95d6", marginBottom: 2 }}>
                {(hoverInfo.object as any).properties.hub_name || (hoverInfo.object as any).properties.stop_name}
              </div>
              <div style={{ color: "#8f99a8" }}>
                Węzeł: {(hoverInfo.object as any).properties.hub_id} | Słupków:{" "}
                {(hoverInfo.object as any).properties.hub_stops_count || 1}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
