"use client";
import React, { useEffect, useState } from 'react';
import DeckGL from '@deck.gl/react';
import { ScatterplotLayer, GeoJsonLayer } from '@deck.gl/layers';
import { HexagonLayer } from '@deck.gl/aggregation-layers';
import { Map, Layer } from 'react-map-gl/maplibre';
import { useTheme } from 'next-themes';
import { useStore, ViewState } from '@/lib/store';
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

const emptySubscribe = () => () => {};

export default function MapContainer() {
  const { selectedCity, mapViewState, setMapViewState, setActiveHub, mapType, show3DBuildings } = useStore();
  const [hubs, setHubs] = useState<FeatureCollection<Geometry, HubProperties> | null>(null);
  const [pop, setPop] = useState<FeatureCollection<Geometry, PopProperties> | null>(null);
  const [transactions, setTransactions] = useState<FeatureCollection<Geometry, TxProperties> | null>(null);
  const { theme, resolvedTheme } = useTheme();
  const mounted = React.useSyncExternalStore(emptySubscribe, () => true, () => false);
  const [hoverInfo, setHoverInfo] = useState<PickingInfo<Feature<Geometry, HubProperties>> | null>(null);

  useEffect(() => {
    if (!selectedCity) return;
    fetch(`/api/hubs?city=${selectedCity}`).then(r => r.json()).then(setHubs);
    fetch(`/api/population?city=${selectedCity}`).then(r => r.json()).then(setPop);
    fetch(`/api/transactions?city=${selectedCity}`).then(r => r.json()).then(setTransactions);
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
    new GeoJsonLayer({
      id: 'pop-grid',
      data: pop?.type === 'FeatureCollection' ? pop : { type: 'FeatureCollection', features: [] },
      pickable: false,
      stroked: true,
      filled: true,
      getFillColor: (f) => {
        const props = (f as Feature<Geometry, PopProperties>).properties;
        return [200, 200, 200, (props?.TOT ?? 0) > 0 ? (isDark ? 30 : 60) : 0];
      },
      getLineColor: isDark ? [50, 50, 50, 100] : [200, 200, 200, 150],
      lineWidthMinPixels: 1
    }),
    new HexagonLayer<TxPoint>({
      id: 'tx-hex',
      data: txData,
      pickable: true,
      extruded: true,
      radius: 150,
      elevationScale: 5,
      getPosition: (d: TxPoint) => d.position,
      getColorValue: (points: TxPoint[]) => {
        if (!points.length) return 0;
        return points.reduce((acc, p) => acc + p.price_m2, 0) / points.length;
      },
      getElevationValue: (points: TxPoint[]) => points.length,
      colorRange: isDark ? [
        [30, 41, 59], [49, 63, 85], [69, 87, 114], [90, 113, 145], [113, 140, 178], [137, 169, 214]
      ] : [
        [240, 244, 250], [210, 222, 238], [180, 200, 226], [150, 178, 214], [120, 156, 202], [90, 134, 190]
      ]
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

      {/* Hover Tooltip */}
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
    </div>
  );
}
