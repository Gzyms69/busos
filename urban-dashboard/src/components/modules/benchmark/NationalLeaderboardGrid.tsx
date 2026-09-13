"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Table2, Column, Cell, ColumnHeaderCell, TruncatedFormat } from "@blueprintjs/table";
import { Button, ButtonGroup, Tag, Spinner, InputGroup } from "@blueprintjs/core";
import { useFoundryStore } from "@/lib/store";
import { fetchNationalRanking } from "@/lib/api";
import GradeBadge from "@/components/shared/GradeBadge";
import DataExportMenu from "@/components/shared/DataExportMenu";
import { formatNumber, formatPLN } from "@/lib/utils/formatters";

type RankingScope = "cities" | "stops" | "hubs" | "hexagons";

export default function NationalLeaderboardGrid() {
  const { selectedCity, setCity, selectObject, setViewState } = useFoundryStore();
  const [scope, setScope] = useState<RankingScope>("cities");
  const [items, setItems] = useState<Array<Record<string, any>>>([]);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("");
  const [offset, setOffset] = useState<number>(0);
  const limit = 100;

  const loadData = useCallback(() => {
    const controller = new AbortController();
    setLoading(true);

    fetchNationalRanking(
      {
        scope,
        limit,
        offset,
      },
      controller.signal
    )
      .then((res) => {
        if (!controller.signal.aborted) {
          let list = res.items || [];
          if (search.trim()) {
            const q = search.toLowerCase();
            list = list.filter((it) => {
              const name = String(it.city || it.city_name || it.stop_name || it.hub_name || it.h3_index || "").toLowerCase();
              return name.includes(q);
            });
          }
          setItems(list);
          setTotal(res.total || list.length);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (err?.name !== "AbortError") {
          console.warn("National ranking error:", err);
          setLoading(false);
        }
      });

    return () => controller.abort();
  }, [scope, offset, search]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleCitySelect = (citySlug: string) => {
    if (citySlug) {
      setCity(citySlug);
    }
  };

  const handleObjectSelect = (it: Record<string, any>) => {
    if (scope === "stops" && it.stop_id) {
      selectObject("stop", it.stop_id, it);
      if (it.lat && it.lon) {
        setViewState({ latitude: it.lat, longitude: it.lon, zoom: 16 });
      }
    } else if (scope === "hubs" && it.hub_id) {
      selectObject("hub", it.hub_id, it);
      if (it.lat && it.lon) {
        setViewState({ latitude: it.lat, longitude: it.lon, zoom: 15 });
      }
    } else if (scope === "hexagons" && it.h3_index) {
      selectObject("hex", it.h3_index, it);
      if (it.lat && it.lon) {
        setViewState({ latitude: it.lat, longitude: it.lon, zoom: 14 });
      }
    }
  };

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const currentPage = Math.floor(offset / limit) + 1;
  const totalPages = Math.ceil(total / limit) || 1;

  return (
    <div
      style={{
        background: "#1c2127",
        border: "1px solid #2f343c",
        borderRadius: 8,
        padding: "12px 16px",
        display: "flex",
        flexDirection: "column",
        flex: 1,
        height: "100%",
        minHeight: 450,
      }}
    >
      {/* Controls Bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 12,
          gap: 12,
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
          <ButtonGroup style={{ fontSize: 11 }}>
            <Button
              small
              active={scope === "cities"}
              onClick={() => {
                setScope("cities");
                setOffset(0);
              }}
              icon="globe"
              text={isMobile ? "30 Miast" : "30 Aglomeracji"}
            />
            <Button
              small
              active={scope === "hubs"}
              onClick={() => {
                setScope("hubs");
                setOffset(0);
              }}
              icon="git-merge"
              text="Węzły Makro"
            />
            <Button
              small
              active={scope === "stops"}
              onClick={() => {
                setScope("stops");
                setOffset(0);
              }}
              icon="map-marker"
              text="Słupki Fizyczne"
            />
            <Button
              small
              active={scope === "hexagons"}
              onClick={() => {
                setScope("hexagons");
                setOffset(0);
              }}
              icon="grid"
              text="Heksy H3"
            />
          </ButtonGroup>

          <InputGroup
            leftIcon="search"
            placeholder="Filtruj tabelę..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ width: isMobile ? "100%" : 180, fontSize: 11 }}
            small
          />

          {!isMobile && (
            <Tag minimal style={{ fontSize: 11, color: "#8f99a8" }}>
              {formatNumber(total, 0)} rekordów w skali Polski
            </Tag>
          )}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {scope !== "cities" && (
            <ButtonGroup style={{ fontSize: 11 }}>
              <Button
                small
                icon="chevron-left"
                disabled={offset === 0 || loading}
                onClick={() => setOffset(Math.max(0, offset - limit))}
              />
              <Button small minimal disabled style={{ color: "#f6f7f9" }}>
                {currentPage} / {totalPages}
              </Button>
              <Button
                small
                icon="chevron-right"
                disabled={offset + limit >= total || loading}
                onClick={() => setOffset(offset + limit)}
              />
            </ButtonGroup>
          )}

          <DataExportMenu
            filename={`leaderboard_${scope}_polska`}
            headers={items[0] ? Object.keys(items[0]) : ["id"]}
            rows={items.map((it) => Object.values(it) as any[])}
            rawJsonData={items}
          />
        </div>
      </div>

      {/* Content Area: Mobile Card View vs Virtualized Table */}
      <div style={{ flex: 1, minHeight: 0, position: "relative" }}>
        {loading ? (
          <div
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              color: "#8f99a8",
              fontSize: 12,
            }}
          >
            <Spinner size={24} />
            <span>Pobieranie rankingu ogólnopolskiego...</span>
          </div>
        ) : items.length === 0 ? (
          <div
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#8f99a8",
              fontSize: 12,
            }}
          >
            Brak wyników rankingu
          </div>
        ) : isMobile ? (
          <div style={{ height: "100%", overflowY: "auto", display: "flex", flexDirection: "column", gap: 8 }}>
            {items.map((it, idx) => {
              const slug = it.city || it.slug || "";
              const isCurrent = slug.toLowerCase() === selectedCity.toLowerCase();
              const stops = it.stops_count != null ? formatNumber(it.stops_count, 0) : null;
              const hubs = it.hubs_count != null ? formatNumber(it.hubs_count, 0) : null;
              const stopsHubs = stops && hubs ? `${stops} / ${hubs}` : (stops || hubs || "—");

              return (
                <div
                  key={slug || idx}
                  style={{
                    background: isCurrent ? "rgba(16, 185, 129, 0.08)" : "rgba(24, 28, 35, 0.8)",
                    border: `1px solid ${isCurrent ? "#10b981" : "#2f343c"}`,
                    borderRadius: 8,
                    padding: "10px 12px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span className="tabular-nums font-mono font-bold text-sky-400 text-xs">
                        #{it.rank ?? offset + idx + 1}
                      </span>
                      <span style={{ fontWeight: 800, fontSize: 13, color: "#f8fafc" }}>
                        {String(it.name || it.city || it.stop_name || it.hub_name || "—").toUpperCase()}
                      </span>
                      {isCurrent && (
                        <Tag minimal intent="success" style={{ fontSize: 9, fontWeight: 700 }}>
                          AKTYWNA
                        </Tag>
                      )}
                    </div>
                    {scope === "cities" && !isCurrent && (
                      <Button
                        small
                        intent="primary"
                        text="Wybierz"
                        icon="log-in"
                        onClick={() => handleCitySelect(slug)}
                        style={{ fontSize: 11 }}
                      />
                    )}
                  </div>

                  {scope === "cities" ? (
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px 12px", fontSize: 11, color: "#9ca3af" }}>
                      <div>
                        <span>Słupki / Huby: </span>
                        <span className="tabular-nums font-semibold text-gray-200">{stopsHubs}</span>
                      </div>
                      <div>
                        <span>Konsolidacja: </span>
                        <span className="tabular-nums font-semibold text-gray-200">
                          {it.consolidation_ratio != null ? `${formatNumber(it.consolidation_ratio, 2)} sł/hub` : "—"}
                        </span>
                      </div>
                      <div>
                        <span>Populacja: </span>
                        <span className="tabular-nums font-semibold text-gray-200">
                          {it.population_total || it.pop_total ? formatNumber(it.population_total || it.pop_total, 0) : "—"}
                        </span>
                      </div>
                      <div>
                        <span>Mediana RCN: </span>
                        <span className="tabular-nums font-semibold text-sky-400">
                          {it.rcn_median_price_m2 || it.median_price_m2 ? formatPLN(it.rcn_median_price_m2 || it.median_price_m2, true) : "—"}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 11 }}>
                      <span style={{ color: "#9ca3af" }}>
                        Miasto: <strong style={{ color: "#f3f4f6" }}>{String(it.city || "—").toUpperCase()}</strong>
                      </span>
                      <GradeBadge grade={it.grade || it.stop_grade || it.hub_grade} size="small" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : scope === "cities" ? (
          <Table2
            numRows={items.length}
            defaultRowHeight={30}
            enableRowReordering={false}
            enableColumnReordering={false}
          >
            <Column
              name="#Rank"
              columnHeaderCellRenderer={() => <ColumnHeaderCell name="#Rank" />}
              cellRenderer={(row) => (
                <Cell style={{ fontSize: 11, textAlign: "center", fontWeight: 700, color: "#2b95d6" }}>
                  <span className="tabular-nums">#{items[row]?.rank ?? row + 1}</span>
                </Cell>
              )}
            />

            <Column
              name="Aglomeracja"
              columnHeaderCellRenderer={() => <ColumnHeaderCell name="Aglomeracja" />}
              cellRenderer={(row) => {
                const it = items[row];
                const slug = it.city || it.slug || "";
                const isCurrent = slug.toLowerCase() === selectedCity.toLowerCase();
                return (
                  <Cell>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ fontWeight: 700, color: isCurrent ? "#15b371" : "#f6f7f9", fontSize: 11 }}>
                        {String(it.name || it.city || "").toUpperCase()}
                      </span>
                      {isCurrent && (
                        <Tag minimal intent="success" style={{ fontSize: 9 }}>
                          AKTYWNE
                        </Tag>
                      )}
                    </div>
                  </Cell>
                );
              }}
            />

            <Column
              name="Słupki / Huby"
              columnHeaderCellRenderer={() => <ColumnHeaderCell name="Słupki / Huby" />}
              cellRenderer={(row) => {
                const it = items[row];
                const stops = it?.stops_count != null ? formatNumber(it.stops_count, 0) : null;
                const hubs = it?.hubs_count != null ? formatNumber(it.hubs_count, 0) : null;
                const display = stops && hubs ? `${stops} / ${hubs}` : (stops || hubs || "—");
                return (
                  <Cell style={{ fontSize: 11, color: "#8f99a8" }}>
                    <span className="tabular-nums">{display}</span>
                  </Cell>
                );
              }}
            />

            <Column
              name="Konsolidacja"
              columnHeaderCellRenderer={() => <ColumnHeaderCell name="Konsolidacja" />}
              cellRenderer={(row) => {
                const it = items[row];
                return (
                  <Cell style={{ fontSize: 11, color: "#f6f7f9" }}>
                    <span className="tabular-nums">
                      {it?.consolidation_ratio != null ? `${formatNumber(it.consolidation_ratio, 2)} sł/hub` : "—"}
                    </span>
                  </Cell>
                );
              }}
            />

            <Column
              name="Populacja GUS"
              columnHeaderCellRenderer={() => <ColumnHeaderCell name="Populacja GUS" />}
              cellRenderer={(row) => {
                const it = items[row];
                const pop = it?.population_total || it?.pop_total;
                return (
                  <Cell style={{ fontSize: 11, color: "#f6f7f9" }}>
                    <span className="tabular-nums">{pop != null ? formatNumber(pop, 0) : "—"}</span>
                  </Cell>
                );
              }}
            />

            <Column
              name="Mediana RCN"
              columnHeaderCellRenderer={() => <ColumnHeaderCell name="Mediana RCN" />}
              cellRenderer={(row) => {
                const it = items[row];
                const val = it?.rcn_median_price_m2 || it?.median_price_m2;
                return (
                  <Cell style={{ fontSize: 11, color: "#38bdf8", fontWeight: 600 }}>
                    <span className="tabular-nums">{val != null ? formatPLN(val, true) : "—"}</span>
                  </Cell>
                );
              }}
            />

            <Column
              name="Akcja"
              columnHeaderCellRenderer={() => <ColumnHeaderCell name="Akcja" />}
              cellRenderer={(row) => {
                const it = items[row];
                const slug = it.city || it.slug || "";
                const isCurrent = slug.toLowerCase() === selectedCity.toLowerCase();
                return (
                  <Cell>
                    <Button
                      small
                      minimal={!isCurrent}
                      intent={isCurrent ? "none" : "primary"}
                      disabled={isCurrent}
                      icon="log-in"
                      text={isCurrent ? "Wybrana" : "Wybierz"}
                      onClick={() => handleCitySelect(slug)}
                      style={{ fontSize: 10 }}
                    />
                  </Cell>
                );
              }}
            />
          </Table2>
        ) : (
          <Table2
            numRows={items.length}
            defaultRowHeight={28}
            enableRowReordering={false}
            enableColumnReordering={false}
          >
            <Column
              name="#Rank"
              columnHeaderCellRenderer={() => <ColumnHeaderCell name="#Rank" />}
              cellRenderer={(row) => (
                <Cell style={{ fontSize: 10, textAlign: "center", color: "#8f99a8" }}>
                  <span className="tabular-nums">#{items[row]?.rank ?? offset + row + 1}</span>
                </Cell>
              )}
            />

            <Column
              name="Obiekt"
              columnHeaderCellRenderer={() => <ColumnHeaderCell name="Nazwa / Identyfikator" />}
              cellRenderer={(row) => {
                const it = items[row];
                const label = it.stop_name || it.hub_name || it.h3_index || it.name || it.id || "—";
                return (
                  <Cell>
                    <div
                      style={{ cursor: "pointer", color: "#2b95d6", fontSize: 11 }}
                      onClick={() => handleObjectSelect(it)}
                    >
                      <TruncatedFormat>{label}</TruncatedFormat>
                    </div>
                  </Cell>
                );
              }}
            />

            <Column
              name="Miasto"
              columnHeaderCellRenderer={() => <ColumnHeaderCell name="Miasto" />}
              cellRenderer={(row) => (
                <Cell style={{ fontSize: 11, color: "#8f99a8" }}>
                  {String(items[row]?.city || "—").toUpperCase()}
                </Cell>
              )}
            />

            <Column
              name="Ocena Jakości"
              columnHeaderCellRenderer={() => <ColumnHeaderCell name="Ocena Jakości" />}
              cellRenderer={(row) => (
                <Cell>
                  <GradeBadge grade={items[row]?.grade || items[row]?.stop_grade || items[row]?.hub_grade} size="small" />
                </Cell>
              )}
            />

            <Column
              name="Odjazdy / Wynik"
              columnHeaderCellRenderer={() => <ColumnHeaderCell name="Odjazdy / Wynik" />}
              cellRenderer={(row) => {
                const it = items[row];
                const val = it.departures_h || it.stop_departures_h || it.hub_departures_h || it.transport_score || it.score;
                return (
                  <Cell style={{ fontSize: 11, color: "#f6f7f9", fontWeight: 600 }}>
                    <span className="tabular-nums">
                      {typeof val === "number" ? formatNumber(val, 1) : (val || "—")}
                    </span>
                  </Cell>
                );
              }}
            />
          </Table2>
        )}
      </div>
    </div>
  );
}
