"use client";
import React, { useEffect, useState } from 'react';
import { useStore } from '@/lib/store';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { useTheme } from 'next-themes';

import { fetchCities, checkBackendHealth, API_BASE_URL } from '@/lib/api-client';

const emptySubscribe = () => () => {};

export default function LeftSidebar() {
  const { selectedCity, setCity, mapType, setMapType, show3DBuildings, setShow3DBuildings } = useStore();
  const [cities, setCities] = useState<string[]>([]);
  const [backendStatus, setBackendStatus] = useState<{ online: boolean; latencyMs: number } | null>(null);
  const { theme, setTheme } = useTheme();
  const mounted = React.useSyncExternalStore(emptySubscribe, () => true, () => false);

  useEffect(() => {
    fetchCities().then(setCities);
    checkBackendHealth().then(setBackendStatus);
  }, []);

  return (
    <div className="absolute top-4 left-4 z-10 w-80 text-foreground">
      <Card className="bg-background/95 border-sidebar-border shadow-2xl">
        <CardHeader>
          <CardTitle className="text-xl font-bold tracking-tight">SILNIK GRAWITACJI MIEJSKIEJ</CardTitle>
          <p className="text-xs text-muted-foreground uppercase tracking-widest">Panel Diagnostyczny</p>
        </CardHeader>
        <CardContent>
          <div className="text-sm font-semibold mb-3">DOSTĘPNE AUDYTY</div>
          <ScrollArea className="h-[200px] w-full rounded-md border border-border p-2 bg-sidebar/50">
            {cities.map(c => (
              <div 
                key={c} 
                className={`p-3 mb-1 cursor-pointer rounded-sm text-sm uppercase font-medium tracking-wide transition-colors ${selectedCity === c ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'}`}
                onClick={() => setCity(c)}
              >
                {c.replace(/-/g, ' ')}
              </div>
            ))}
          </ScrollArea>
          
          <div className="mt-6 flex flex-wrap gap-2">
            <Badge variant="secondary">DNA GPKG</Badge>
            <Badge variant="secondary">DUCKDB PARQUET</Badge>
            <Badge variant="secondary">WKB GEOJSON</Badge>
          </div>

          {mounted && (
            <div className="mt-6 flex flex-col gap-4 border-t border-border pt-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="theme-mode" className="text-xs uppercase tracking-widest text-muted-foreground cursor-pointer">Tryb Ciemny</Label>
                <Switch id="theme-mode" checked={theme === 'dark'} onCheckedChange={(c) => setTheme(c ? 'dark' : 'light')} />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="map-type" className="text-xs uppercase tracking-widest text-muted-foreground cursor-pointer">Widok Satelitarny</Label>
                <Switch id="map-type" checked={mapType === 'satellite'} onCheckedChange={(c) => setMapType(c ? 'satellite' : 'flat')} />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="3d-buildings" className="text-xs uppercase tracking-widest text-muted-foreground cursor-pointer">Budynki 3D</Label>
                <Switch id="3d-buildings" checked={show3DBuildings} onCheckedChange={setShow3DBuildings} />
              </div>

              <div className="p-2.5 rounded-md border border-border/60 bg-muted/20 text-xs flex flex-col gap-1.5 mt-2">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground uppercase tracking-widest text-[9px]">API Backend:</span>
                  <span className="flex items-center gap-1.5 font-mono text-[10px]">
                    <span className={`inline-block w-2 h-2 rounded-full ${backendStatus?.online ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
                    {backendStatus?.online ? `Online (${backendStatus.latencyMs}ms)` : 'Edge Fallback'}
                  </span>
                </div>
                <div className="flex items-center justify-between text-[10px] text-muted-foreground pt-1 border-t border-border/40">
                  <span>Kontrakty API:</span>
                  <a href={`${API_BASE_URL}/docs`} target="_blank" rel="noreferrer" className="text-primary hover:underline font-mono">
                    Swagger /docs ↗
                  </a>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
