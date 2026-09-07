"use client";
import React, { useEffect, useState } from 'react';
import DeckGL from '@deck.gl/react';
import { ScatterplotLayer, GeoJsonLayer } from '@deck.gl/layers';
import { HexagonLayer } from '@deck.gl/aggregation-layers';
import { H3HexagonLayer } from '@deck.gl/geo-layers';
import { Map, Layer } from 'react-map-gl/maplibre';
import { useTheme } from 'next-themes';
import { useStore, ViewState } from '@/lib/store';
import { fetchHubs, fetchPopulation, fetchTransactions, fetchHexagons } from '@/lib/api-client';
import type { PickingInfo } from '@deck.gl/core';
import type { Feature, FeatureCollection, Geometry } from 'geojson';
import 'maplibre-gl/dist/maplibre-gl.css';

interface HubProperties {
  hub_id: number | string;
  stop_name: string;
  grade: string;
  local_score_raw: number | string;
  [key: string]: unknown;
}

interface PopProperties {
  TOT?: number;
  [key: string]: unknown;
}

interface TxProperties {
  price_m2?: number | string;
  [key: string]: unknown;
}

interface TxPoint {
  position: [number, number];
  price_m2: number;
}

export interface H3CellData {
  hex: string;
  lat: number;
  lon: number;
  stop_count: number;
  hub_count: number;
  total_departures_h: number;
  max_stop_grade: string;
  transport_score: number;
  pop_total: number;
  rcn_tx_count: number;
  rcn_median_price_m2: number | null;
  poi_gravity_sum: number;
  transit_desert_index: number;
  is_transit_desert: boolean;
}

const emptySubscribe = () => () => {};

export default function MapContainer() {
  const { selectedCity, mapViewState, setMapViewState, setActiveHub, mapType, show3DBuildings } = useStore();
  const [hubs, setHubs] = useState<FeatureCollection<Geometry, HubProperties> | null>(null);
  const [pop, setPop] = useState<FeatureCollection<Geometry, PopProperties> | null>(null);
  const [transactions, setTransactions] = useState<FeatureCollection<Geometry, TxProperties> | null>(null);
  const [hexagons, setHexagons] = useState<H3CellData[]>([]);
  const { theme, resolvedTheme } = useTheme();
  const mounted = React.useSyncExternalStore(emptySubscribe, () => true, () => false);
  const [hoverInfo, setHoverInfo] = useState<PickingInfo<Feature<Geometry, HubProperties>> | null>(null);
  const [hexHoverInfo, setHexHoverInfo] = useState<PickingInfo<H3CellData> | null>(null);

  useEffect(() => {
    if (!selectedCity) return;
    const controller = new AbortController();
    const signal = controller.signal;

    fetchHubs(selectedCity, signal).then((data) => {
      if (!signal.aborted) setHubs(data);
    });
    fetchPopulation(selectedCity, signal).then((data) => {
      if (!signal.aborted) setPop(data);
    });
    fetchTransactions(selectedCity, signal).then((data) => {
      if (!signal.aborted) setTransactions(data);
    });
    fetchHexagons(selectedCity, 0, signal).then((data) => {
      if (!signal.aborted && data?.hexagons) setHexagons(data.hexagons);
    });

    return () => {
      controller.abort();
    };
  }, [selectedCity]);

  const txData: TxPoint[] = transactions?.features?.map((f) => {
    let pos: unknown = f.geometry && 'coordinates' in f.geometry ? f.geometry.coordinates : null;
    while (pos && Array.isArray(pos) && Array.isArray(pos[0])) {
      pos = pos[0];
    }
    // Validation: must be [lng, lat] and valid numbers
    if (!pos || !Array.isArray(pos) || pos.length < 2 || typeof pos[0] !== 'number' || typeof pos[1] !== 'number' || isNaN(pos[0]) || isNaN(pos[1])) {
      return null;
    }
    return {
      position: [pos[0], pos[1]] as [number, number],
      price_m2: Number(f.properties?.price_m2 || 0)
    };
  }).filter((item): item is TxPoint => item !== null) || [];

  const gradeColors: Record<string, [number, number, number]> = {
    'A+': [0, 255, 128], 'A': [0, 200, 100], 'B': [100, 150, 255],
    'C': [255, 200, 0], 'D': [255, 100, 0], 'F': [255, 0, 0]
  };

  const isDark = (resolvedTheme === 'dark' || theme === 'dark') ?? true;

  const layers = [
    // Native GPU H3 Spatial Analytical Grid (Fused GTFS, GUS, RCN)
    new H3HexagonLayer<H3CellData>({
      id: 'h3-grid',
      data: hexagons,
      pickable: true,
      wireframe: false,
      filled: true,
      extruded: true,
      getHexagon: (d: H3CellData) => d.hex,
      getElevation: (d: H3CellData) => Math.min(d.transport_score * 3.5, 350),
      elevationScale: 1,
      getFillColor: (d: H3CellData) => {
        if (d.is_transit_desert) {
          return [239, 68, 68, isDark ? 160 : 190]; // Red: Transit Desert Alert
        }
        const score = d.transport_score || 0;
        if (score >= 70) return [16, 185, 129, isDark ? 130 : 160]; // Emerald
        if (score >= 40) return [59, 130, 246, isDark ? 110 : 140]; // Blue
        if (score >= 15) return [245, 158, 11, isDark ? 90 : 120]; // Amber
        return [100, 116, 139, isDark ? 40 : 60]; // Muted slate
      },
      onHover: (info) => setHexHoverInfo(info as PickingInfo<H3CellData>)
    }),
    new ScatterplotLayer<Feature<Geometry, HubProperties>>({
      id: 'hubs',
      data: hubs?.features || [],
      pickable: true,
      radiusScale: 1,
      radiusMinPixels: 6,
      getPosition: (d) => {
        const coords = d.geometry && 'coordinates' in d.geometry ? (d.geometry.coordinates as [number, number]) : [0, 0];
        return [coords[0], coords[1]];
      },
      getFillColor: (d) => gradeColors[d.properties.grade] || [128, 128, 128],
      onHover: (info) => setHoverInfo(info as PickingInfo<Feature<Geometry, HubProperties>>),
      onClick: (info) => {
        if (info.object && info.object.geometry && 'coordinates' in info.object.geometry) {
          const coords = info.object.geometry.coordinates as [number, number];
          setActiveHub(info.object.properties.hub_id, coords[1], coords[0]);
          setMapViewState({
            ...mapViewState,
            longitude: coords[0],
            latitude: coords[1],
            zoom: 15,
            pitch: mapViewState.pitch,
            bearing: mapViewState.bearing
          });
        }
      }
    })
  ];

  const flatStyle = isDark 
    ? "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
    : "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json";

  const satelliteStyle = {
    version: 8 as const,
    sources: {
      satellite: {
        type: "raster" as const,
        tiles: ["https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"],
        tileSize: 256,
        attribution: "Esri"
      },
      carto: {
        type: "vector" as const,
        tiles: [isDark 
          ? "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json" 
          : "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"]
      }
    },
    layers: [{
      id: "satellite",
      type: "raster" as const,
      source: "satellite"
    }]
  };

  const currentStyle = mapType === 'satellite' ? satelliteStyle : flatStyle;

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 w-full h-full z-0">
      <DeckGL
        initialViewState={mapViewState}
        viewState={mapViewState}
        controller={true}
        layers={layers}
        onViewStateChange={({ viewState }) => setMapViewState(viewState as ViewState)}
      >
        <Map mapStyle={currentStyle}>
          {show3DBuildings && mapType === 'flat' && (
            <Layer
              id="3d-buildings"
              source="carto"
              source-layer="building"
              type="fill-extrusion"
              minzoom={15}
              paint={{
                'fill-extrusion-color': isDark ? '#333333' : '#e2e8f0',
                'fill-extrusion-height': ['get', 'render_height'],
                'fill-extrusion-base': ['get', 'render_min_height'],
                'fill-extrusion-opacity': isDark ? 0.6 : 0.8
              }}
            />
          )}
        </Map>
      </DeckGL>

      {/* Stop Hover Tooltip */}
      {hoverInfo && hoverInfo.object && (
        <div 
          className="absolute z-50 pointer-events-none bg-background/95 backdrop-blur-md border border-border px-3 py-2 rounded-lg shadow-xl text-sm"
          style={{ left: hoverInfo.x + 10, top: hoverInfo.y + 10 }}
        >
          <div className="font-semibold">{hoverInfo.object.properties.stop_name}</div>
          <div className="text-[10px] text-muted-foreground mt-0.5 uppercase tracking-wide">
            Grade: <span className="font-mono text-primary mr-2">{hoverInfo.object.properties.grade}</span> 
            Score: <span className="font-mono">{Number(hoverInfo.object.properties.local_score_raw).toFixed(2)}</span>
          </div>
        </div>
      )}

      {/* H3 Hex Hover Tooltip */}
      {(!hoverInfo || !hoverInfo.object) && hexHoverInfo && hexHoverInfo.object && (
        <div 
          className="absolute z-50 pointer-events-none bg-background/95 backdrop-blur-md border border-border px-3 py-2.5 rounded-lg shadow-xl text-xs max-w-xs"
          style={{ left: hexHoverInfo.x + 10, top: hexHoverInfo.y + 10 }}
        >
          <div className="flex items-center justify-between gap-2 border-b border-border/50 pb-1 mb-1.5">
            <span className="font-mono font-bold text-[11px]">{hexHoverInfo.object.hex}</span>
            {hexHoverInfo.object.is_transit_desert ? (
              <span className="bg-destructive/20 text-destructive text-[9px] font-bold px-1.5 py-0.5 rounded uppercase">
                Pustynia Transportowa
              </span>
            ) : (
              <span className="bg-primary/20 text-primary text-[9px] font-bold px-1.5 py-0.5 rounded uppercase">
                Obszar Obsługiwany
              </span>
            )}
          </div>
          <div className="space-y-1 text-muted-foreground text-[11px]">
            <div className="flex justify-between">
              <span>Transport Score:</span>
              <span className="font-mono font-bold text-foreground">{hexHoverInfo.object.transport_score.toFixed(1)}</span>
            </div>
            <div className="flex justify-between">
              <span>Odjazdy na godzinę:</span>
              <span className="font-mono font-bold text-foreground">{hexHoverInfo.object.total_departures_h} kursów/h</span>
            </div>
            <div className="flex justify-between">
              <span>Populacja GUS:</span>
              <span className="font-mono font-bold text-foreground">{Math.round(hexHoverInfo.object.pop_total).toLocaleString()} os.</span>
            </div>
            {hexHoverInfo.object.rcn_median_price_m2 && (
              <div className="flex justify-between">
                <span>Mediana cen RCN:</span>
                <span className="font-mono font-bold text-foreground">{Math.round(hexHoverInfo.object.rcn_median_price_m2).toLocaleString()} zł/m²</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
