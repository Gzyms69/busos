"use client";
import React, { useEffect, useState, useMemo } from 'react';
import { useStore } from '@/lib/store';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

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
  const { selectedCity, activeHubId, activeHubLat, activeHubLon } = useStore();
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
    fetch(`/api/hubs/details?city=${selectedCity}&hub_id=${activeHubId}&lat=${activeHubLat}&lon=${activeHubLon}`)
      .then(r => r.json())
      .then(d => {
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

  if (!activeHubId) return null;

  return (
    <div className="absolute top-4 right-4 z-10 w-[420px] text-foreground max-h-[85vh] flex flex-col shadow-2xl">
      <Card className="bg-background/95 border-sidebar-border shadow-2xl flex-1 flex flex-col overflow-hidden max-h-[85vh]">
        <CardHeader className="pb-2 flex-shrink-0">
          <CardTitle className="text-xl font-bold flex justify-between items-center">
            <span>INSPEKTOR WĘZŁA</span>
            <Badge variant="outline" className="text-xs font-mono py-1 rounded-sm">ID: {activeHubId}</Badge>
          </CardTitle>
          <div className="text-xs text-muted-foreground pt-1 tracking-widest uppercase">4 Filary i Zasięg 500m</div>
        </CardHeader>
        <CardContent className="flex-1 overflow-hidden flex flex-col pt-4">
          {loading ? (
            <div className="flex-1 flex items-center justify-center text-sm font-mono tracking-widest text-muted-foreground pb-20 animate-pulse">
              [ EKSTRAKCJA_DNA ]
            </div>
          ) : (
            <Tabs defaultValue="overview" className="flex-1 flex flex-col overflow-hidden">
              <TabsList className="grid w-full grid-cols-3 flex-shrink-0 text-[10.5px]">
                <TabsTrigger value="overview">DNA</TabsTrigger>
                <TabsTrigger value="categories">Kategorie</TabsTrigger>
                <TabsTrigger value="pois">Obiekty</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="mt-4 flex-1 overflow-auto">
                {data?.metrics ? (
                  <div className="space-y-4">
                    <div className="flex flex-col gap-2 p-3 border border-border rounded-md bg-accent/10">
                      <div className="flex justify-between items-center pb-2 border-b border-border/50">
                         <span className="text-xs font-semibold uppercase tracking-wide">Ogólna Ocena DNA</span>
                         <Badge className={
                            data.metrics.grade === "A+" || data.metrics.grade === "A" ? "bg-green-500/20 text-green-500" :
                            data.metrics.grade === "B" || data.metrics.grade === "C" ? "bg-yellow-500/20 text-yellow-500" :
                            "bg-red-500/20 text-red-500"
                         }>{data.metrics.grade}</Badge>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">Percentyl Krajowy</span>
                        <span className="font-mono">{Number(data.metrics.local_percentile).toFixed(1)}%</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">Z-Score (Surowy)</span>
                        <span className="font-mono">{Number(data.metrics.local_score_raw).toFixed(3)}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                       <div className="flex flex-col p-3 border border-border rounded-md bg-accent/5">
                          <span className="text-[10px] uppercase text-muted-foreground mb-1">Filar I: Infrastruktura</span>
                          <span className="text-lg font-mono text-primary">{Math.round(data.metrics.infra_score || 0).toLocaleString()} <span className="text-xs text-muted-foreground font-sans">G</span></span>
                       </div>
                       <div className="flex flex-col p-3 border border-border rounded-md bg-accent/5">
                          <span className="text-[10px] uppercase text-muted-foreground mb-1">Filar II: Transport</span>
                          <span className="text-lg font-mono text-primary">{Math.round(data.metrics.transit_freq || 0).toLocaleString()} <span className="text-xs text-muted-foreground font-sans">Przejazdów/tydz.</span></span>
                       </div>
                       <div className="flex flex-col p-3 border border-border rounded-md bg-accent/5">
                          <span className="text-[10px] uppercase text-muted-foreground mb-1">Filar III: Nieruchomości</span>
                          <span className="text-lg font-mono text-primary">{Math.round(data.metrics.market_val || 0).toLocaleString()} <span className="text-xs text-muted-foreground font-sans">PLN/m²</span></span>
                       </div>
                       <div className="flex flex-col p-3 border border-border rounded-md bg-accent/5">
                          <span className="text-[10px] uppercase text-muted-foreground mb-1">Filar IV: Populacja</span>
                          <span className="text-lg font-mono text-primary">{Math.round(data.metrics.pop_val || 0).toLocaleString()} <span className="text-xs text-muted-foreground font-sans">osób</span></span>
                       </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 border border-border rounded-md bg-accent/10">
                      <span className="text-xs font-semibold uppercase tracking-wide">Populacja (500m)</span>
                      <span className="font-mono text-primary text-lg">{Math.round(popCount).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 border border-border rounded-md bg-accent/10">
                      <span className="text-xs font-semibold uppercase tracking-wide">Suma obiektów (POI)</span>
                      <span className="font-mono text-primary text-lg">{pois.length}</span>
                    </div>
                  </div>
                )}
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
