"use client";
import React, { useEffect, useState } from 'react';
import { useStore } from '@/lib/store';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { useTheme } from 'next-themes';

import { fetchCities, checkBackendHealth, API_BASE_URL, searchRoutes } from '@/lib/api-client';

const emptySubscribe = () => () => {};

export default function LeftSidebar() {
  const {
    selectedCity,
    setCity,
    mapType,
    setMapType,
    show3DBuildings,
    setShow3DBuildings,
    activeRouteUid,
    setActiveRoute
  } = useStore();
  const [cities, setCities] = useState<string[]>([]);
  const [backendStatus, setBackendStatus] = useState<{ online: boolean; latencyMs: number } | null>(null);
  const [routes, setRoutes] = useState<any[]>([]);
  const [routeQuery, setRouteQuery] = useState('');
  const [modeFilter, setModeFilter] = useState<number | null>(null);
  const { theme, setTheme } = useTheme();
  const mounted = React.useSyncExternalStore(emptySubscribe, () => true, () => false);

  useEffect(() => {
    fetchCities().then(setCities);
    checkBackendHealth().then(setBackendStatus);
  }, []);

  // Wczytywanie linii transportowych dla wybranego miasta
  useEffect(() => {
    if (!selectedCity) return;
    const controller = new AbortController();
    searchRoutes(selectedCity, routeQuery, 60, controller.signal).then((data) => {
      if (!controller.signal.aborted) {
        setRoutes(data || []);
      }
    });
    return () => {
      controller.abort();
    };
  }, [selectedCity, routeQuery]);

  const filteredRoutes = routes.filter((r) => {
    if (modeFilter !== null && r.type !== modeFilter) return false;
    return true;
  });

  return (
    <div className="absolute top-4 left-4 z-10 w-84 text-foreground">
      <Card className="bg-background/95 border-sidebar-border shadow-2xl backdrop-blur-sm max-h-[92vh] flex flex-col">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-bold tracking-tight">SILNIK GRAWITACJI MIEJSKIEJ</CardTitle>
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Panel Diagnostyczny & Trasy</p>
        </CardHeader>
        <CardContent className="space-y-4 overflow-y-auto pr-2">
          {/* Wybór Aglomeracji */}
          <div>
            <div className="text-xs font-semibold mb-1.5 uppercase tracking-wider text-muted-foreground">Aglomeracja</div>
            <ScrollArea className="h-[120px] w-full rounded-md border border-border p-1.5 bg-sidebar/50">
              {cities.map((c) => (
                <div
                  key={c}
                  className={`p-2 mb-1 cursor-pointer rounded-sm text-xs uppercase font-medium tracking-wide transition-colors ${
                    selectedCity === c ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'
                  }`}
                  onClick={() => setCity(c)}
                >
                  {c.replace(/-/g, ' ')}
                </div>
              ))}
            </ScrollArea>
          </div>

          {/* Sekcja Tras i Linii GTFS 100% */}
          <div className="border-t border-border pt-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Linie Komunikacji ({filteredRoutes.length})</span>
              {activeRouteUid && (
                <button
                  onClick={() => setActiveRoute(null)}
                  className="text-[10px] text-destructive hover:underline font-mono"
                >
                  ✕ Wyczyść trasę
                </button>
              )}
            </div>

            {/* Wyszukiwarka linii */}
            <input
              type="text"
              placeholder="Szukaj linii (np. 34, 1, 107)..."
              value={routeQuery}
              onChange={(e) => setRouteQuery(e.target.value)}
              className="w-full text-xs px-2.5 py-1.5 rounded-md border border-border bg-muted/40 placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-primary mb-2"
            />

            {/* Filtry typów modalnych */}
            <div className="flex gap-1 mb-2">
              <button
                onClick={() => setModeFilter(null)}
                className={`px-2 py-0.5 text-[10px] rounded border transition-colors ${
                  modeFilter === null ? 'bg-primary text-primary-foreground border-primary' : 'border-border hover:bg-accent'
                }`}
              >
                Wszystkie
              </button>
              <button
                onClick={() => setModeFilter(3)}
                className={`px-2 py-0.5 text-[10px] rounded border transition-colors ${
                  modeFilter === 3 ? 'bg-primary text-primary-foreground border-primary' : 'border-border hover:bg-accent'
                }`}
              >
                Autobus
              </button>
              <button
                onClick={() => setModeFilter(0)}
                className={`px-2 py-0.5 text-[10px] rounded border transition-colors ${
                  modeFilter === 0 ? 'bg-primary text-primary-foreground border-primary' : 'border-border hover:bg-accent'
                }`}
              >
                Tramwaj
              </button>
            </div>

            {/* Kafelki linii */}
            <ScrollArea className="h-[140px] w-full rounded-md border border-border p-1.5 bg-sidebar/50">
              <div className="grid grid-cols-4 gap-1.5">
                {filteredRoutes.map((r) => {
                  const isActive = activeRouteUid === r.route_uid;
                  return (
                    <button
                      key={r.route_uid}
                      onClick={() => setActiveRoute(r.route_uid, r.direction_id)}
                      style={{
                        borderColor: r.color || '#FF8C00'
                      }}
                      className={`flex flex-col items-center justify-center p-1.5 rounded border text-center transition-all ${
                        isActive ? 'ring-2 ring-primary ring-offset-1 bg-accent font-bold' : 'hover:bg-accent/60'
                      }`}
                    >
                      <span
                        className="text-xs font-black tracking-tight"
                        style={{ color: r.color || '#FF8C00' }}
                      >
                        {r.short_name}
                      </span>
                      <span className="text-[8px] text-muted-foreground truncate w-full" title={r.headsign}>
                        {r.headsign || `${r.stop_count} przyst.`}
                      </span>
                    </button>
                  );
                })}
              </div>
              {filteredRoutes.length === 0 && (
                <div className="text-center py-6 text-xs text-muted-foreground">Brak linii spełniających kryteria</div>
              )}
            </ScrollArea>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-1">
            <Badge variant="secondary" className="text-[9px]">LRS EPSG:2180</Badge>
            <Badge variant="secondary" className="text-[9px]">OSM MATCHING</Badge>
            <Badge variant="secondary" className="text-[9px]">GTFS 100%</Badge>
          </div>

          {mounted && (
            <div className="flex flex-col gap-3 border-t border-border pt-3 text-xs">
              <div className="flex items-center justify-between">
                <Label htmlFor="theme-mode" className="text-[11px] uppercase tracking-wider text-muted-foreground cursor-pointer">Tryb Ciemny</Label>
                <Switch id="theme-mode" checked={theme === 'dark'} onCheckedChange={(c) => setTheme(c ? 'dark' : 'light')} />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="map-type" className="text-[11px] uppercase tracking-wider text-muted-foreground cursor-pointer">Widok Satelitarny</Label>
                <Switch id="map-type" checked={mapType === 'satellite'} onCheckedChange={(c) => setMapType(c ? 'satellite' : 'flat')} />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="3d-buildings" className="text-[11px] uppercase tracking-wider text-muted-foreground cursor-pointer">Budynki 3D</Label>
                <Switch id="3d-buildings" checked={show3DBuildings} onCheckedChange={setShow3DBuildings} />
              </div>

              <div className="p-2 rounded-md border border-border/60 bg-muted/20 text-xs flex flex-col gap-1 mt-1">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground uppercase tracking-wider text-[9px]">API Backend:</span>
                  <span className="flex items-center gap-1.5 font-mono text-[10px]">
                    <span className={`inline-block w-1.5 h-1.5 rounded-full ${backendStatus?.online ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
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
