"use client";

import React, { useState, useEffect } from "react";
import { Tabs, Tab, Button, Tag, Spinner, Card } from "@blueprintjs/core";
import { useFoundryStore } from "@/lib/store";
import {
  fetchStopProfile,
  fetchStopDestinations,
  fetchStopTransactions,
  fetchStopRoutes,
  fetchHubCard,
  fetchStopsBatch,
  fetchHexagonProfile,
} from "@/lib/api";
import type {
  StopProfileResponse,
  StopDestinationsResponse,
  MarketTransactionItem,
  RouteItem,
  HubCardResponse,
  HexagonProfileResponse,
} from "@/lib/api/types";
import GradeBadge from "@/components/shared/GradeBadge";
import AiRadarWidget from "./AiRadarWidget";
import { formatNumber, formatPLN, formatDuration, formatSpeed, formatDistance } from "@/lib/utils/formatters";

export default function ObjectInspector() {
  const {
    selectionType,
    selectedId,
    selectedData,
    isInspectorOpen,
    clearSelection,
    selectedCity,
    selectObject,
    setViewState,
    setActiveRoute,
  } = useFoundryStore();

  const [expanded, setExpanded] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("pillars");
  const [loading, setLoading] = useState<boolean>(true);

  // Detail states
  const [stopProfile, setStopProfile] = useState<StopProfileResponse | null>(null);
  const [stopDestinations, setStopDestinations] = useState<StopDestinationsResponse | null>(null);
  const [stopTransactions, setStopTransactions] = useState<MarketTransactionItem[]>([]);
  const [stopRoutes, setStopRoutes] = useState<RouteItem[]>([]);

  const [hubCard, setHubCard] = useState<HubCardResponse | null>(null);
  const [memberStops, setMemberStops] = useState<StopProfileResponse[]>([]);

  const [hexProfile, setHexProfile] = useState<HexagonProfileResponse | null>(null);

  useEffect(() => {
    if (!isInspectorOpen || !selectedId || !selectionType) return;
    const controller = new AbortController();
    const signal = controller.signal;
    setLoading(true);

    if (selectionType === "stop") {
      setActiveTab("pillars");
      Promise.allSettled([
        fetchStopProfile(selectedCity, String(selectedId), signal),
        fetchStopDestinations(selectedCity, String(selectedId), signal),
        fetchStopTransactions(selectedCity, String(selectedId), undefined, signal),
        fetchStopRoutes(selectedCity, String(selectedId), signal),
      ]).then(([profRes, destRes, txRes, routesRes]) => {
        if (!signal.aborted) {
          if (profRes.status === "fulfilled") setStopProfile(profRes.value);
          if (destRes.status === "fulfilled") setStopDestinations(destRes.value);
          if (txRes.status === "fulfilled") {
            const raw = txRes.value;
            setStopTransactions(Array.isArray(raw) ? raw : (raw as any)?.items || []);
          }
          if (routesRes.status === "fulfilled") setStopRoutes(Array.isArray(routesRes.value) ? routesRes.value : []);
          setLoading(false);
        }
      });
    } else if (selectionType === "hub") {
      setActiveTab("members");
      fetchHubCard(selectedCity, selectedId, signal)
        .then((hub) => {
          if (!signal.aborted) {
            setHubCard(hub);
            const stopIds = hub.hub_stops_ids || [];
            if (stopIds.length > 0) {
              fetchStopsBatch(selectedCity, stopIds, signal)
                .then((batch) => {
                  if (!signal.aborted) setMemberStops(batch.stops || []);
                })
                .catch(() => {});
            }
            setLoading(false);
          }
        })
        .catch((err) => {
          if (err?.name !== "AbortError") setLoading(false);
        });
    } else if (selectionType === "hex") {
      setActiveTab("pillars");
      fetchHexagonProfile(selectedCity, String(selectedId), signal)
        .then((hex) => {
          if (!signal.aborted) {
            setHexProfile(hex);
            setLoading(false);
          }
        })
        .catch((err) => {
          if (err?.name !== "AbortError") setLoading(false);
        });
    } else {
      setLoading(false);
    }

    return () => controller.abort();
  }, [isInspectorOpen, selectionType, selectedId, selectedCity, selectedData]);

  if (!isInspectorOpen || !selectedId || !selectionType) {
    return null;
  }

  // Determine Title & Grade
  let title = String(selectedId);
  let grade = "C";
  let typeLabel = "OBIEKT";

  if (selectionType === "stop") {
    title = stopProfile?.stop_name || (selectedData as any)?.stop_name || `Słupek ${selectedId}`;
    grade = stopProfile?.stop_grade || (selectedData as any)?.stop_grade || (selectedData as any)?.grade || "C";
    typeLabel = "SŁUPEK FIZYCZNY (MICRO)";
  } else if (selectionType === "hub") {
    title = hubCard?.hub_name || (selectedData as any)?.hub_name || `Węzeł #${selectedId}`;
    grade = hubCard?.hub_grade || (selectedData as any)?.hub_grade || (selectedData as any)?.grade || "B";
    typeLabel = "WĘZEŁ LOGICZNY (MACRO)";
  } else if (selectionType === "hex") {
    title = `Komórka H3 Res 8: ${selectedId}`;
    typeLabel = "SIATKA H3 RES 8";
  }

  const hexData = hexProfile?.hexagon || (selectedData as any);

  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: expanded ? 480 : 250,
        background: "rgba(24, 28, 33, 0.98)",
        backdropFilter: "blur(10px)",
        borderTop: "1px solid #383e47",
        boxShadow: "0 -8px 24px rgba(0, 0, 0, 0.6)",
        zIndex: 25,
        display: "flex",
        flexDirection: "column",
        transition: "height 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        overflow: "hidden",
      }}
    >
      {/* Top Header Bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px 16px",
          background: "#181c20",
          borderBottom: "1px solid #2f343c",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
          <Tag minimal intent="primary" style={{ fontSize: 9, fontWeight: 700 }}>
            {typeLabel}
          </Tag>
          <span
            style={{
              fontSize: 13,
              fontWeight: 800,
              color: "#f6f7f9",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {title}
          </span>
          {selectionType !== "hex" && <GradeBadge grade={grade} size="small" />}
          <Tag minimal style={{ fontSize: 9 }}>
            {selectedCity.toUpperCase()}
          </Tag>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <Button
            small
            minimal
            icon={expanded ? "chevron-down" : "chevron-up"}
            title={expanded ? "Zwiń panel" : "Rozwiń panel"}
            onClick={() => setExpanded(!expanded)}
          />
          <Button
            small
            minimal
            icon="cross"
            title="Zamknij inspektor"
            onClick={() => clearSelection()}
          />
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ flex: 1, overflowY: "auto", padding: "12px 16px" }}>
        {loading ? (
          <div
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              color: "#8f99a8",
              fontSize: 11,
            }}
          >
            <Spinner size={18} />
            <span>Pobieranie profilu 360° obiektu...</span>
          </div>
        ) : (
          <>
            {/* 1. PHYSICAL STOP PROFILE */}
            {selectionType === "stop" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {/* 4 Pillars KPI Row */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: 8,
                  }}
                >
                  <Card style={{ background: "#1c2127", border: "1px solid #2f343c", padding: "8px 12px" }}>
                    <div style={{ fontSize: 9, color: "#8f99a8", textTransform: "uppercase" }}>I. Podaż Transportu</div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#f6f7f9" }}>
                      {formatNumber(stopProfile?.stop_departures_h, 1)} kursów/h
                    </div>
                    <div style={{ fontSize: 9, color: "#8f99a8" }}>
                      {stopProfile?.stop_routes_count ?? stopRoutes.length} linii GTFS
                    </div>
                  </Card>

                  <Card style={{ background: "#1c2127", border: "1px solid #2f343c", padding: "8px 12px" }}>
                    <div style={{ fontSize: 9, color: "#8f99a8", textTransform: "uppercase" }}>II. Popyt Demografii</div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#f6f7f9" }}>
                      {formatNumber(stopProfile?.stop_pop_val, 0)} os.
                    </div>
                    <div style={{ fontSize: 9, color: "#8f99a8" }}>Zlewnia GUS 250m</div>
                  </Card>

                  <Card style={{ background: "#1c2127", border: "1px solid #2f343c", padding: "8px 12px" }}>
                    <div style={{ fontSize: 9, color: "#8f99a8", textTransform: "uppercase" }}>III. Rynek RCN</div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#2b95d6" }}>
                      {formatPLN(stopProfile?.stop_market_val, true)}
                    </div>
                    <div style={{ fontSize: 9, color: "#8f99a8" }}>
                      {stopProfile?.stop_liquidity ?? stopTransactions.length} transakcji (500m)
                    </div>
                  </Card>

                  <Card style={{ background: "#1c2127", border: "1px solid #2f343c", padding: "8px 12px" }}>
                    <div style={{ fontSize: 9, color: "#8f99a8", textTransform: "uppercase" }}>IV. Pozycja i Z-Score</div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#15b371" }}>
                      Top {stopProfile?.stop_percentile ? (100 - stopProfile.stop_percentile).toFixed(1) : "—"}%
                    </div>
                    <div style={{ fontSize: 9, color: "#8f99a8" }}>
                      Z-Score: {stopProfile?.stop_local_score_raw?.toFixed(2) ?? "—"}
                    </div>
                  </Card>
                </div>

                {/* Sub-Tabs */}
                <Tabs id="stop-details-tabs" selectedTabId={activeTab} onChange={(t) => setActiveTab(String(t))}>
                  <Tab
                    id="pillars"
                    title="Osiągalność 1-Hop"
                    panel={
                      <div style={{ display: "flex", flexDirection: "column", gap: 6, maxHeight: 180, overflowY: "auto" }}>
                        {(stopDestinations?.destinations || []).length === 0 ? (
                          <div style={{ fontSize: 11, color: "#8f99a8", padding: 8 }}>
                            Brak bezpośrednich połączeń 1-hop w grafie
                          </div>
                        ) : (
                          (stopDestinations?.destinations || []).slice(0, 15).map((dst, i) => (
                            <div
                              key={i}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                padding: "4px 8px",
                                background: "#1c2127",
                                borderRadius: 4,
                                fontSize: 11,
                              }}
                            >
                              <span style={{ color: "#f6f7f9", fontWeight: 600 }}>{dst.to_stop_name}</span>
                              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                <span style={{ color: "#2b95d6" }}>{formatDuration(dst.min_travel_time_sec)}</span>
                                <span style={{ color: "#8f99a8" }}>{formatSpeed(dst.speed_kmh)}</span>
                                <Tag minimal style={{ fontSize: 9 }}>
                                  {dst.routes?.join(", ")}
                                </Tag>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    }
                  />
                  <Tab
                    id="routes"
                    title="Linie GTFS"
                    panel={
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, padding: "4px 0" }}>
                        {stopRoutes.length === 0 ? (
                          <div style={{ fontSize: 11, color: "#8f99a8" }}>Brak danych o liniach</div>
                        ) : (
                          stopRoutes.map((r) => (
                            <Button
                              key={r.route_uid}
                              small
                              minimal
                              onClick={() => setActiveRoute(r.route_uid, 0)}
                              style={{
                                border: `1px solid ${r.color || "#2b95d6"}`,
                                color: r.color || "#2b95d6",
                                fontSize: 10,
                                fontWeight: 700,
                              }}
                            >
                              {r.short_name} → {r.headsign || r.long_name}
                            </Button>
                          ))
                        )}
                      </div>
                    }
                  />
                  <Tab
                    id="rcn"
                    title="Transakcje RCN (500m)"
                    panel={
                      <div style={{ display: "flex", flexDirection: "column", gap: 4, maxHeight: 180, overflowY: "auto" }}>
                        {stopTransactions.length === 0 ? (
                          <div style={{ fontSize: 11, color: "#8f99a8", padding: 8 }}>
                            Brak notarialnych transakcji mieszkań w buforze 500m
                          </div>
                        ) : (
                          stopTransactions.slice(0, 10).map((tx, idx) => (
                            <div
                              key={idx}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                padding: "4px 8px",
                                background: "#1c2127",
                                borderRadius: 4,
                                fontSize: 10,
                              }}
                            >
                              <span style={{ color: "#2b95d6", fontWeight: 700 }}>
                                {formatPLN(tx.price_m2, true)}
                              </span>
                              <span style={{ color: "#8f99a8" }}>{tx.date || tx.dok_data || "—"}</span>
                              <span style={{ color: "#f6f7f9" }}>
                                {tx.distance_m ? formatDistance(tx.distance_m) : "—"}
                              </span>
                              <Tag minimal style={{ fontSize: 9 }}>
                                {tx.market_type || tx.tran_rodzaj_rynku || "mieszkanie"}
                              </Tag>
                            </div>
                          ))
                        )}
                      </div>
                    }
                  />
                </Tabs>
              </div>
            )}

            {/* 2. LOGICAL HUB PROFILE */}
            {selectionType === "hub" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <Tabs id="hub-details-tabs" selectedTabId={activeTab} onChange={(t) => setActiveTab(String(t))}>
                  <Tab
                    id="members"
                    title={`Słupki Składowe (${memberStops.length || hubCard?.hub_stops_count || (selectedData as any)?.hub_stops_count || 1})`}
                    panel={
                      <div style={{ display: "flex", flexDirection: "column", gap: 6, maxHeight: 200, overflowY: "auto" }}>
                        {memberStops.length === 0 ? (
                          <div style={{ fontSize: 11, color: "#8f99a8", padding: 8 }}>
                            Słupki powiązane: {hubCard?.hub_stops_ids?.join(", ") || (selectedData as any)?.hub_stops_ids || "—"}
                          </div>
                        ) : (
                          memberStops.map((st) => (
                            <div
                              key={st.stop_id}
                              onClick={() => {
                                selectObject("stop", st.stop_id, st);
                                if (st.lat && st.lon) setViewState({ latitude: st.lat, longitude: st.lon, zoom: 16 });
                              }}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                padding: "6px 10px",
                                background: "#1c2127",
                                borderRadius: 4,
                                cursor: "pointer",
                                fontSize: 11,
                              }}
                            >
                              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                                <span style={{ color: "#2b95d6", fontWeight: 700 }}>{st.stop_name}</span>
                                <span style={{ color: "#8f99a8", fontSize: 10 }}>({st.stop_id})</span>
                                {st.is_hub_anchor === 1 && (
                                  <Tag minimal intent="primary" style={{ fontSize: 9 }}>
                                    ANCHOR
                                  </Tag>
                                )}
                              </div>
                              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                <span style={{ color: "#f6f7f9" }}>{formatNumber(st.stop_departures_h, 1)} kursów/h</span>
                                <GradeBadge grade={st.stop_grade} size="small" />
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    }
                  />
                  <Tab
                    id="ai-radar"
                    title="AI Radar: Węzły Bliźniacze w Polsce"
                    panel={<AiRadarWidget city={selectedCity} hubId={selectedId} />}
                  />
                </Tabs>
              </div>
            )}

            {/* 3. HEXAGON PROFILE */}
            {selectionType === "hex" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
                  <Card style={{ background: "#1c2127", border: "1px solid #2f343c", padding: "8px 12px" }}>
                    <div style={{ fontSize: 9, color: "#8f99a8", textTransform: "uppercase" }}>Podaż Transportu</div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#15b371" }}>
                      {hexData?.transport_score?.toFixed(1) ?? "—"} / 100
                    </div>
                    <div style={{ fontSize: 9, color: "#8f99a8" }}>
                      {hexData?.total_departures_h?.toFixed(1) ?? "0"} odjazdów/h
                    </div>
                  </Card>

                  <Card style={{ background: "#1c2127", border: "1px solid #2f343c", padding: "8px 12px" }}>
                    <div style={{ fontSize: 9, color: "#8f99a8", textTransform: "uppercase" }}>Ludność GUS</div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#f6f7f9" }}>
                      {Math.round(hexData?.pop_total ?? 0)} os.
                    </div>
                    <div style={{ fontSize: 9, color: "#8f99a8" }}>Siatka 250m</div>
                  </Card>

                  <Card style={{ background: "#1c2127", border: "1px solid #2f343c", padding: "8px 12px" }}>
                    <div style={{ fontSize: 9, color: "#8f99a8", textTransform: "uppercase" }}>Wycena RCN</div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#2b95d6" }}>
                      {formatPLN(hexData?.rcn_median_price_m2, true)}
                    </div>
                    <div style={{ fontSize: 9, color: "#8f99a8" }}>Mediana w komórce</div>
                  </Card>

                  <Card style={{ background: "#1c2127", border: "1px solid #2f343c", padding: "8px 12px" }}>
                    <div style={{ fontSize: 9, color: "#8f99a8", textTransform: "uppercase" }}>Status Pustyni</div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: hexData?.is_transit_desert ? "#db3737" : "#15b371" }}>
                      {hexData?.is_transit_desert ? "PUSTYNIA TDI" : "OBSŁUGIWANY"}
                    </div>
                    <div style={{ fontSize: 9, color: "#8f99a8" }}>
                      TDI: {(hexData?.transit_desert_index ?? 0).toFixed(2)}
                    </div>
                  </Card>
                </div>

                {hexProfile?.stops && hexProfile.stops.length > 0 && (
                  <div style={{ marginTop: 8 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#f6f7f9", marginBottom: 6 }}>
                      Słupki w komórce H3 ({hexProfile.stops.length}):
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {hexProfile.stops.map((st) => (
                        <Tag
                          key={st.stop_id}
                          interactive
                          onClick={() => {
                            selectObject("stop", st.stop_id, st);
                            if (st.lat && st.lon) setViewState({ latitude: st.lat, longitude: st.lon, zoom: 16 });
                          }}
                          style={{ cursor: "pointer", fontSize: 10 }}
                        >
                          {st.stop_name} ({st.stop_departures_h.toFixed(1)}/h)
                        </Tag>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
