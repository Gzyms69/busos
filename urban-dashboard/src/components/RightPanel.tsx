"use client";
import React, { useEffect, useState, useMemo } from 'react';
import { useStore } from '@/lib/store';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { fetchHubDetails } from '@/lib/api-client';

interface PoiItem {
  poi_id?: string | null;
  name?: string;
  category?: string;
  tier?: string;
  w: number;
  sum_pull: number;
}

interface PopItem {
  grid_id?: string | null;
  pop_val?: number | string | null;
}

interface HubMetrics {
  grade?: string;
  local_percentile?: number | string;
  local_score_raw?: number | string;
  infra_score?: number;
  transit_freq?: number;
  market_val?: number;
  pop_val?: number;
  [key: string]: unknown;
}

interface HubDetailResponse {
  pois: PoiItem[];
  pop: PopItem[];
  metrics?: HubMetrics | null;
}

interface AggregatedPoi {
  category: string;
  tier: string;
  count: number;
  gravity: number;
}

export default function RightPanel() {
  const {
    selectedCity,
    activeHubId,
    activeHubLat,
    activeHubLon,
    setActiveHub,
    activeRouteUid,
    activeDirectionId,
    activeRouteData,
    setActiveRoute,
    mapViewState,
    setMapViewState
  } = useStore();

  const [data, setData] = useState<HubDetailResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [prevHubKey, setPrevHubKey] = useState<string>('');

  const currentHubKey = `${selectedCity}-${activeHubId}-${activeHubLat}-${activeHubLon}`;
  if (currentHubKey !== prevHubKey) {
    setPrevHubKey(currentHubKey);
    setData(null);
    setLoading(Boolean(selectedCity && activeHubId && activeHubLat && activeHubLon));
  }

  useEffect(() => {
    if (!selectedCity || !activeHubId || !activeHubLat || !activeHubLon) {
      return;
    }
    let ignore = false;
    fetchHubDetails(selectedCity, activeHubId, activeHubLat, activeHubLon)
      .then((d) => {
        if (!ignore) {
          setData(d as HubDetailResponse);
          setLoading(false);
        }
      })
      .catch(() => {
        if (!ignore) {
          setLoading(false);
        }
      });
    return () => {
      ignore = true;
    };
  }, [selectedCity, activeHubId, activeHubLat, activeHubLon]);

  const pois = useMemo(() => data?.pois || [], [data]);
  const popCount = useMemo(() => data?.pop?.reduce((acc: number, p: PopItem) => acc + Number(p.pop_val || 0), 0) || 0, [data]);

  const aggregatedPois = useMemo(() => {
    const grouped: Record<string, AggregatedPoi> = {};
    pois.forEach((poi: PoiItem) => {
      const cat = poi.category || "Infrastruktura Lokalna";
      if (!grouped[cat]) {
        grouped[cat] = { category: cat, tier: poi.tier || 'T6', count: 0, gravity: 0 };
      }
      grouped[cat].count += 1;
      grouped[cat].gravity += (poi.w * poi.sum_pull);
    });
    return Object.values(grouped).sort((a: AggregatedPoi, b: AggregatedPoi) => b.gravity - a.gravity);
  }, [pois]);

  // Jeśli brak aktywnego huba i brak aktywnej trasy, nie renderujemy panelu
  if (!activeHubId && !activeRouteData) return null;

  // --- WIDOK 1: INSPEKTOR TRASY I STEPPER PRZYSTANKOWY ---
  if (activeRouteData) {
    const r = activeRouteData;
    const stops = r.stops || [];

    return (
      <div className="absolute top-4 right-4 z-10 w-[420px] text-foreground max-h-[92vh] flex flex-col shadow-2xl">
        <Card className="bg-background/95 border-sidebar-border shadow-2xl flex-1 flex flex-col overflow-hidden max-h-[92vh] backdrop-blur-sm">
          {/* Header Trasy */}
          <CardHeader className="pb-3 border-b border-border/60">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div
                  className="px-3 py-1 rounded text-base font-black tracking-tight text-white shadow-sm"
                  style={{ backgroundColor: r.color || '#FF8C00' }}
                >
                  {r.short_name}
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {r.type_name} • {r.feed_id}
                  </div>
                  <CardTitle className="text-sm font-bold truncate max-w-[240px]" title={r.headsign}>
                    {r.headsign ? `→ ${r.headsign}` : r.long_name}
                  </CardTitle>
                </div>
              </div>
              <button
                onClick={() => setActiveRoute(null)}
                className="text-xs text-muted-foreground hover:text-foreground font-mono p-1 rounded hover:bg-muted"
                title="Zamknij podgląd trasy"
              >
                ✕
              </button>
            </div>

            {/* Przełącznik kierunku / wariantów jeśli linia posiada więcej niż 1 */}
            {r.variants && r.variants.length > 1 && (
              <div className="flex gap-1.5 mt-2 pt-2 border-t border-border/40">
                {r.variants.map((v: any, i: number) => {
                  const isSelected = activeDirectionId === v.direction_id;
                  return (
                    <button
                      key={i}
                      onClick={() => setActiveRoute(r.route_uid, v.direction_id)}
                      className={`text-[10px] px-2 py-1 rounded border transition-colors truncate max-w-[190px] ${
                        isSelected
                          ? 'bg-primary text-primary-foreground border-primary font-bold'
                          : 'border-border/80 hover:bg-muted text-muted-foreground'
                      }`}
                    >
                      Kierunek: {v.headsign}
                    </button>
                  );
                })}
              </div>
            )}
          </CardHeader>

          {/* Telemetria i KPI Linii */}
          <CardContent className="p-3 flex-1 flex flex-col overflow-hidden space-y-3">
            <div className="grid grid-cols-3 gap-2">
              <div className="p-2 rounded bg-muted/30 border border-border/60 text-center">
                <div className="text-[9px] uppercase tracking-wider text-muted-foreground">Dystans</div>
                <div className="text-sm font-bold font-mono text-primary">{r.total_length_km} km</div>
              </div>
              <div className="p-2 rounded bg-muted/30 border border-border/60 text-center">
                <div className="text-[9px] uppercase tracking-wider text-muted-foreground">Czas Jazdy</div>
                <div className="text-sm font-bold font-mono text-primary">{r.total_travel_time_min} min</div>
              </div>
              <div className="p-2 rounded bg-muted/30 border border-border/60 text-center">
                <div className="text-[9px] uppercase tracking-wider text-muted-foreground">Śr. Prędkość</div>
                <div className="text-sm font-bold font-mono text-primary">{r.commercial_speed_kmh} km/h</div>
              </div>
            </div>

            {/* Godziny kursowania i Takt */}
            <div className="p-2.5 rounded bg-muted/20 border border-border/40 flex items-center justify-between text-xs">
              <div>
                <span className="text-[9px] text-muted-foreground uppercase block">Godziny kursowania:</span>
                <span className="font-mono text-xs font-semibold">
                  {r.service_hours?.first_departure || '05:00'} - {r.service_hours?.last_departure || '23:00'}
                </span>
              </div>
              <div className="text-right">
                <span className="text-[9px] text-muted-foreground uppercase block">Takt szczytowy:</span>
                <span className="font-mono text-xs font-semibold text-emerald-500">
                  {r.service_hours?.peak_headway_min ? `co ${r.service_hours.peak_headway_min} min` : 'wg rozkładu'}
                </span>
              </div>
            </div>

            {/* Stepper Przystankowy (Timeline Stepper) */}
            <div className="flex-1 flex flex-col overflow-hidden">
              <div className="flex items-center justify-between mb-1.5 px-0.5">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Sekwencja Przystanków ({stops.length})
                </span>
                <Badge variant="outline" className="text-[9px] font-mono">
                  {r.geometry_source === 'gtfs_shape' ? 'GTFS GPS' : 'OSM MATCHED'}
                </Badge>
              </div>

              <ScrollArea className="flex-1 rounded-md border border-border p-2 bg-sidebar/50">
                <div className="relative pl-6 space-y-3">
                  {/* Ciągła pionowa linia steppera */}
                  <div
                    className="absolute left-2.5 top-2 bottom-2 w-0.5"
                    style={{ backgroundColor: r.color || '#FF8C00' }}
                  />

                  {stops.map((st: any) => {
                    return (
                      <div
                        key={st.sequence}
                        onClick={() => {
                          setMapViewState({
                            ...mapViewState,
                            longitude: st.lon,
                            latitude: st.lat,
                            zoom: 15.5
                          });
                        }}
                        className="relative group cursor-pointer p-1.5 rounded hover:bg-accent/60 transition-colors"
                      >
                        {/* Wskaźnik punktowy na osi czasu */}
                        <div
                          className={`absolute -left-6 top-2 w-4 h-4 rounded-full border-2 flex items-center justify-center text-[8px] font-black ${
                            st.is_terminal
                              ? 'bg-background border-primary text-primary'
                              : 'bg-primary text-primary-foreground border-background'
                          }`}
                          style={{
                            borderColor: st.is_terminal ? r.color : undefined,
                            backgroundColor: !st.is_terminal ? r.color : undefined
                          }}
                        >
                          {st.sequence}
                        </div>

                        {/* Informacje o przystanku */}
                        <div className="flex items-baseline justify-between gap-1">
                          <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors truncate max-w-[200px]">
                            {st.stop_name}
                          </span>
                          <span className="text-[9px] font-mono text-muted-foreground">
                            +{st.cumulative_distance_km} km
                          </span>
                        </div>

                        {/* Metryki odcinkowe */}
                        <div className="flex items-center gap-2 mt-0.5 text-[9px] text-muted-foreground font-mono">
                          <span>+{st.cumulative_travel_time_min} min</span>
                          {st.segment_speed_kmh && (
                            <span className="text-emerald-500">v: {st.segment_speed_kmh} km/h</span>
                          )}
                          {st.is_terminal && (
                            <span className="text-primary font-semibold uppercase text-[8px]">
                              {st.sequence === 1 ? 'Start' : 'Koniec'}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </ScrollArea>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // --- WIDOK 2: INSPEKTOR HUBA (STOP DNA) ---
  return (
    <div className="absolute top-4 right-4 z-10 w-[420px] text-foreground max-h-[85vh] flex flex-col shadow-2xl">
      <Card className="bg-background/95 border-sidebar-border shadow-2xl flex-1 flex flex-col overflow-hidden max-h-[85vh]">
        <CardHeader className="pb-2 flex-shrink-0">
          <div className="flex justify-between items-start">
            <div>
              <div className="text-xs font-bold tracking-widest text-primary uppercase">Profil Węzła Przesiadkowego</div>
              <CardTitle className="text-lg font-black tracking-tight">{activeHubId}</CardTitle>
            </div>
            <button
              onClick={() => setActiveHub(null)}
              className="text-xs text-muted-foreground hover:text-foreground font-mono p-1 rounded hover:bg-muted"
            >
              ✕
            </button>
          </div>
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
            Lat: {Number(activeHubLat).toFixed(4)} | Lon: {Number(activeHubLon).toFixed(4)}
          </p>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col overflow-hidden pt-0">
          {loading ? (
            <div className="flex-1 flex items-center justify-center text-xs text-muted-foreground animate-pulse">
              Pobieranie profilu Stop DNA z silnika analitycznego...
            </div>
          ) : (
            <Tabs defaultValue="overview" className="flex-1 flex flex-col overflow-hidden">
              <TabsList className="grid w-full grid-cols-3 bg-muted/60">
                <TabsTrigger value="overview">Przegląd</TabsTrigger>
                <TabsTrigger value="categories">Kategorie</TabsTrigger>
                <TabsTrigger value="pois">Atraktory</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-4 flex-1 overflow-y-auto space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-3 rounded-lg border border-border bg-card">
                    <div className="text-xs text-muted-foreground uppercase font-semibold">Ocena Stop DNA</div>
                    <div className="text-2xl font-black text-primary mt-1">
                      {data?.metrics?.grade || "N/A"}
                    </div>
                    <div className="text-[10px] text-muted-foreground">
                      Percentyl: {data?.metrics?.local_percentile ? `${Number(data.metrics.local_percentile).toFixed(1)}%` : "N/A"}
                    </div>
                  </div>
                  <div className="p-3 rounded-lg border border-border bg-card">
                    <div className="text-xs text-muted-foreground uppercase font-semibold">Podaż Transportu</div>
                    <div className="text-2xl font-black text-foreground mt-1">
                      {data?.metrics?.transit_freq !== undefined ? `${Number(data.metrics.transit_freq).toFixed(1)}` : "0.0"}
                    </div>
                    <div className="text-[10px] text-muted-foreground">odjazdów / godzinę</div>
                  </div>
                </div>

                <div className="p-3 rounded-lg border border-border bg-card space-y-2">
                  <div className="text-xs font-semibold text-muted-foreground uppercase">Otoczenie Przestrzenne (500m)</div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Zlewnia Demograficzna:</span>
                    <span className="font-bold font-mono">{Math.round(popCount).toLocaleString()} osób</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Wycena Rynku RCN:</span>
                    <span className="font-bold font-mono">
                      {data?.metrics?.market_val ? `${Math.round(Number(data.metrics.market_val)).toLocaleString()} PLN/m²` : "Brak transakcji"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Suma Przyciągania POI:</span>
                    <span className="font-bold font-mono">{data?.metrics?.infra_score ? Number(data.metrics.infra_score).toFixed(2) : "0.00"}</span>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="categories" className="mt-4 flex-1 flex flex-col overflow-hidden">
                <ScrollArea className="flex-1 rounded-md border border-border">
                  <Table>
                    <TableHeader className="bg-muted/50 sticky top-0 z-10 backdrop-blur">
                      <TableRow>
                        <TableHead className="w-[45%] text-[10px]">Kategoria</TableHead>
                        <TableHead className="text-[10px]">Poziom</TableHead>
                        <TableHead className="text-right text-[10px]">Ilość</TableHead>
                        <TableHead className="text-right text-[10px]">Wartość Punktowa (W)</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {aggregatedPois.map((p: AggregatedPoi, i: number) => (
                        <TableRow key={i}>
                          <TableCell className="font-medium text-[10px] font-mono text-primary">{p.category}</TableCell>
                          <TableCell className="text-[9px] text-muted-foreground">{p.tier}</TableCell>
                          <TableCell className="text-right text-[10px]">{p.count}</TableCell>
                          <TableCell className="text-right font-mono text-[10px]">
                            {Math.round(p.gravity).toLocaleString()}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </ScrollArea>
              </TabsContent>

              <TabsContent value="pois" className="mt-4 flex-1 flex flex-col overflow-hidden">
                <ScrollArea className="flex-1 rounded-md border border-border">
                  <Table>
                    <TableHeader className="bg-muted/50 sticky top-0 z-10 backdrop-blur">
                      <TableRow>
                        <TableHead className="w-[70%]">Entity / Toponym</TableHead>
                        <TableHead className="text-right">Gravity Pull</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {pois.map((poi: PoiItem, i: number) => {
                        const name = poi.name || "Obiekty Specjalne";
                        const type = poi.category || "Infrastruktura Lokalna";
                        return (
                          <TableRow key={i}>
                            <TableCell className="font-medium text-[11px] leading-tight max-w-[200px] truncate">
                              {name}
                              <span className="block text-[9px] text-muted-foreground uppercase tracking-widest mt-1">{type}</span>
                            </TableCell>
                            <TableCell className="text-right font-mono text-[11px]">
                              {Math.round(poi.w * poi.sum_pull).toLocaleString()}
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </ScrollArea>
              </TabsContent>
            </Tabs>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
