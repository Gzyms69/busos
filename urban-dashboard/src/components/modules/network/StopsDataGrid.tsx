"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Table2, Column, Cell, ColumnHeaderCell, TruncatedFormat } from "@blueprintjs/table";
import { Button, ButtonGroup, Switch, InputGroup, Tag, Spinner } from "@blueprintjs/core";
import { useFoundryStore } from "@/lib/store";
import { fetchStopsRanking } from "@/lib/api";
import type { StopRankingItem } from "@/lib/api/types";
import GradeBadge from "@/components/shared/GradeBadge";
import JumpToRankInput from "@/components/shared/JumpToRankInput";
import FilterPillsBar, { type FilterPill } from "@/components/shared/FilterPillsBar";
import DataExportMenu from "@/components/shared/DataExportMenu";
import { formatNumber, formatPLN } from "@/lib/utils/formatters";

export default function StopsDataGrid() {
  const {
    selectedCity,
    stopsOrderBy,
    stopsOrderDir,
    stopsGradeFilter,
    stopsAnchorOnly,
    stopsSearch,
    setStopsOrdering,
    setStopsFilter,
    selectedId,
    selectObject,
    setViewState,
    setHoveredObject,
    hoveredId,
  } = useFoundryStore();

  const [items, setItems] = useState<StopRankingItem[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [offset, setOffset] = useState<number>(0);
  const limit = 100;

  const selectedIndex = selectedId != null ? items.findIndex((it) => String(it.stop_id) === String(selectedId)) : -1;

  const loadData = useCallback(
    (rankParam?: number) => {
      const controller = new AbortController();
      setLoading(true);

      fetchStopsRanking(
        {
          city: selectedCity,
          order_by: stopsOrderBy,
          order_dir: stopsOrderDir,
          grade: stopsGradeFilter || undefined,
          is_hub_anchor: stopsAnchorOnly ? true : undefined,
          limit,
          offset: rankParam ? undefined : offset,
          rank: rankParam,
          query: stopsSearch.trim() || undefined,
        },
        controller.signal
      )
        .then((res) => {
          if (!controller.signal.aborted) {
            setItems(res.items || []);
            setTotal(res.total || 0);
            setLoading(false);
          }
        })
        .catch((e) => {
          if (e?.name !== "AbortError") {
            setLoading(false);
          }
        });

      return () => controller.abort();
    },
    [selectedCity, stopsOrderBy, stopsOrderDir, stopsGradeFilter, stopsAnchorOnly, stopsSearch, offset]
  );

  useEffect(() => {
    loadData();
  }, [loadData]);

  // Hover styling helper
  const getCellStyle = (row: number) => {
    return hoveredId && String(items[row]?.stop_id) === String(hoveredId)
      ? { backgroundColor: "rgba(224, 242, 254, 0.75)" }
      : undefined;
  };

  // Sorting helper
  const handleSort = (colName: string) => {
    setStopsOrdering(colName);
  };

  const renderSortHeader = (colName: string, displayName: string) => {
    const isSorted = stopsOrderBy === colName;
    return (
      <ColumnHeaderCell
        name={displayName}
        menuIcon={isSorted ? (stopsOrderDir === "asc" ? "sort-asc" : "sort-desc") : undefined}
        nameRenderer={() => (
          <span
            onClick={() => handleSort(colName)}
            className="cursor-pointer inline-block w-full font-bold text-slate-800 text-[11px] select-none"
          >
            {displayName}
          </span>
        )}
      />
    );
  };

  // Row selection handler
  const handleRowClick = (rowIndex: number) => {
    const item = items[rowIndex];
    if (!item) return;
    selectObject("stop", item.stop_id, item);
    if (item.lon && item.lat) {
      setViewState({
        longitude: item.lon,
        latitude: item.lat,
        zoom: 15.5,
        pitch: 45,
      });
    }
  };

  // Active filter pills
  const activeFilters: FilterPill[] = [];
  if (stopsGradeFilter) {
    activeFilters.push({
      key: "grade",
      label: "Klasa",
      value: stopsGradeFilter,
      onRemove: () => setStopsFilter({ grade: "" }),
    });
  }
  if (stopsAnchorOnly) {
    activeFilters.push({
      key: "anchor",
      label: "Typ",
      value: "Tylko słupki główne",
      onRemove: () => setStopsFilter({ anchorOnly: false }),
    });
  }
  if (stopsSearch) {
    activeFilters.push({
      key: "search",
      label: "Filtr",
      value: stopsSearch,
      onRemove: () => setStopsFilter({ search: "" }),
    });
  }

  // Export headers and rows
  const exportHeaders = [
    "Rank",
    "Stop ID",
    "Stop Name",
    "Hub ID",
    "Hub Name",
    "Grade",
    "Percentile",
    "Z-Score",
    "Departures/h",
    "Routes Count",
    "Routes",
    "Infra Score",
    "Pop GUS",
    "Market RCN",
    "Is Anchor",
  ];

  const getExportRows = () => {
    return items.map((s) => [
      s.rank,
      s.stop_id,
      s.stop_name,
      s.hub_id,
      s.hub_name,
      s.stop_grade,
      s.stop_percentile,
      s.stop_local_score_raw,
      s.stop_departures_h,
      s.stop_routes_count,
      s.stop_routes,
      s.stop_infra_score,
      s.stop_pop_val,
      s.stop_market_val,
      s.is_hub_anchor ? "TAK" : "NIE",
    ]);
  };

  return (
    <div className="flex flex-col h-full overflow-hidden text-slate-900">
      {/* Action and Filter Toolbar */}
      <div className="flex items-center justify-between flex-wrap gap-2.5 py-2.5 border-b border-slate-200">
        <div className="flex items-center gap-2.5 flex-wrap">
          {/* Grade Filter */}
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-semibold text-slate-600">Klasa:</span>
            <ButtonGroup size="small">
              {["", "A+", "A", "B", "C", "D", "F"].map((g) => (
                <Button
                  key={g}
                  active={stopsGradeFilter === g}
                  intent={stopsGradeFilter === g ? "primary" : "none"}
                  onClick={() => setStopsFilter({ grade: g })}
                  style={{ fontSize: 10, padding: "0 6px" }}
                >
                  {g || "Wszystkie"}
                </Button>
              ))}
            </ButtonGroup>
          </div>

          {/* Anchor Switch */}
          <Switch
            inline
            checked={stopsAnchorOnly}
            label="Tylko główne słupki węzła"
            onChange={(e) => setStopsFilter({ anchorOnly: (e.target as HTMLInputElement).checked })}
            className="text-xs text-slate-700 m-0"
          />

          {/* Search Filter */}
          <InputGroup
            small
            leftIcon="filter"
            placeholder="Szukaj przystanku..."
            value={stopsSearch}
            onChange={(e) => setStopsFilter({ search: e.target.value })}
            style={{ width: 170, fontSize: 11 }}
          />
        </div>

        {/* Jump & Export Actions */}
        <div className="flex items-center gap-2">
          <JumpToRankInput
            maxRank={total || 60000}
            onJump={(r) => {
              loadData(r);
            }}
          />
          <DataExportMenu
            filename={`busos_${selectedCity}_stops_ranking`}
            headers={exportHeaders}
            rows={getExportRows}
            rawJsonData={() => items}
          />
        </div>
      </div>

      {/* Filter Pills Bar */}
      <FilterPillsBar
        filters={activeFilters}
        onClearAll={() => setStopsFilter({ grade: "", anchorOnly: false, search: "" })}
      />

      {/* Table Status Bar */}
      <div className="flex justify-between items-center py-1.5 px-0.5 text-xs text-slate-500">
        <div>
          Pokazywane: <strong className="text-slate-800 font-semibold">{items.length}</strong> z{" "}
          <strong className="text-slate-800 font-semibold">{total.toLocaleString("pl-PL")}</strong> przystanków
        </div>
        {loading && (
          <div className="flex items-center gap-1.5 text-slate-500">
            <Spinner size={12} />
            <span>Pobieranie danych...</span>
          </div>
        )}
      </div>

      {/* Virtualized Table2 Container with Responsive Column Widths */}
      <div className="flex-1 min-h-[350px] overflow-hidden relative border border-slate-200 rounded-xl shadow-xs">
        <Table2
          numRows={items.length}
          enableRowReordering={false}
          enableColumnReordering={false}
          defaultRowHeight={30}
          columnWidths={[65, 230, 75, 125, 100, 110, 160, 90, 110, 120, 90]}
          selectedRegions={
            selectedIndex >= 0
              ? [{ rows: [selectedIndex, selectedIndex] }]
              : undefined
          }
          onSelection={(regions) => {
            const r = regions?.[0]?.rows?.[0];
            if (r != null) handleRowClick(r);
          }}
        >
          <Column
            name="#Rank"
            columnHeaderCellRenderer={() => renderSortHeader("rank", "#Rank")}
            cellRenderer={(row) => (
              <Cell style={getCellStyle(row)}>
                <div
                  onMouseEnter={() => setHoveredObject("stop", items[row]?.stop_id)}
                  onMouseLeave={() => setHoveredObject(null, null)}
                  className="w-full h-full flex items-center"
                >
                  <span className="font-mono font-bold text-sky-700 text-xs">#{items[row]?.rank}</span>
                </div>
              </Cell>
            )}
          />
          <Column
            name="Słupek Fizyczny"
            columnHeaderCellRenderer={() => renderSortHeader("stop_name", "Słupek Fizyczny")}
            cellRenderer={(row) => (
              <Cell style={getCellStyle(row)}>
                <div
                  onMouseEnter={() => setHoveredObject("stop", items[row]?.stop_id)}
                  onMouseLeave={() => setHoveredObject(null, null)}
                  className="flex items-center justify-between gap-1.5 w-full h-full"
                  title={items[row]?.stop_name}
                >
                  <span className="font-bold text-slate-900 text-xs truncate">
                    {items[row]?.stop_name || "—"}
                  </span>
                  {items[row]?.is_hub_anchor ? (
                    <span className="shrink-0 px-1 py-0.2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded text-[9px] font-black uppercase tracking-wider">
                      WĘZEŁ
                    </span>
                  ) : null}
                </div>
              </Cell>
            )}
          />
          <Column
            name="Ocena"
            columnHeaderCellRenderer={() => renderSortHeader("stop_grade", "Ocena")}
            cellRenderer={(row) => (
              <Cell style={getCellStyle(row)}>
                <div
                  onMouseEnter={() => setHoveredObject("stop", items[row]?.stop_id)}
                  onMouseLeave={() => setHoveredObject(null, null)}
                  className="w-full h-full flex items-center"
                >
                  <GradeBadge grade={items[row]?.stop_grade} size="small" />
                </div>
              </Cell>
            )}
          />
          <Column
            name="Percentyl"
            columnHeaderCellRenderer={() => renderSortHeader("stop_percentile", "Percentyl")}
            cellRenderer={(row) => {
              const pct = items[row]?.stop_percentile ?? 0;
              const barColor =
                pct >= 70 ? "bg-emerald-500" : pct >= 40 ? "bg-sky-500" : pct >= 15 ? "bg-amber-500" : "bg-rose-500";
              return (
                <Cell style={getCellStyle(row)}>
                  <div
                    onMouseEnter={() => setHoveredObject("stop", items[row]?.stop_id)}
                    onMouseLeave={() => setHoveredObject(null, null)}
                    className="flex items-center gap-2 w-full h-full"
                  >
                    <div className="flex-1 bg-slate-100 rounded-full h-1.5 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${barColor}`}
                        style={{ width: `${Math.max(4, Math.min(100, pct))}%` }}
                      />
                    </div>
                    <span className="font-mono text-[11px] font-semibold text-slate-700 shrink-0 w-11 text-right">
                      {formatNumber(pct, 1)}%
                    </span>
                  </div>
                </Cell>
              );
            }}
          />
          <Column
            name="Z-Score"
            columnHeaderCellRenderer={() => renderSortHeader("stop_local_score_raw", "Z-Score")}
            cellRenderer={(row) => {
              const val = items[row]?.stop_local_score_raw ?? 0;
              const isGood = val >= 0;
              return (
                <Cell style={getCellStyle(row)}>
                  <div
                    onMouseEnter={() => setHoveredObject("stop", items[row]?.stop_id)}
                    onMouseLeave={() => setHoveredObject(null, null)}
                    className="w-full h-full flex items-center"
                  >
                    <span
                      title={`Odchylenie standardowe od średniej aglomeracji: ${val >= 0 ? "+" : ""}${formatNumber(val, 2)}σ`}
                      className={`font-mono text-xs font-semibold px-1.5 py-0.5 rounded ${
                        isGood ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700"
                      }`}
                    >
                      {isGood ? "+" : ""}
                      {formatNumber(val, 2)}σ
                    </span>
                  </div>
                </Cell>
              );
            }}
          />
          <Column
            name="Odjazdy/h"
            columnHeaderCellRenderer={() => renderSortHeader("stop_departures_h", "Odjazdy/h")}
            cellRenderer={(row) => (
              <Cell style={getCellStyle(row)}>
                <div
                  onMouseEnter={() => setHoveredObject("stop", items[row]?.stop_id)}
                  onMouseLeave={() => setHoveredObject(null, null)}
                  className="flex items-center gap-1 w-full h-full"
                >
                  <span className="font-mono font-bold text-slate-900 text-xs">
                    {formatNumber(items[row]?.stop_departures_h, 1)}
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium">odj./h</span>
                </div>
              </Cell>
            )}
          />
          <Column
            name="Linie GTFS"
            columnHeaderCellRenderer={() => renderSortHeader("stop_routes_count", "Linie GTFS")}
            cellRenderer={(row) => (
              <Cell style={getCellStyle(row)}>
                <div
                  onMouseEnter={() => setHoveredObject("stop", items[row]?.stop_id)}
                  onMouseLeave={() => setHoveredObject(null, null)}
                  className="w-full h-full flex items-center"
                >
                  <TruncatedFormat>
                    {`(${items[row]?.stop_routes_count || 0}) ${items[row]?.stop_routes || "—"}`}
                  </TruncatedFormat>
                </div>
              </Cell>
            )}
          />
          <Column
            name="Wskaźnik POI"
            columnHeaderCellRenderer={() => renderSortHeader("stop_infra_score", "Wskaźnik POI")}
            cellRenderer={(row) => (
              <Cell style={getCellStyle(row)}>
                <div
                  onMouseEnter={() => setHoveredObject("stop", items[row]?.stop_id)}
                  onMouseLeave={() => setHoveredObject(null, null)}
                  className="w-full h-full flex items-center"
                >
                  <span className="font-mono text-xs text-slate-700">
                    {formatNumber(items[row]?.stop_infra_score, 1)}
                  </span>
                </div>
              </Cell>
            )}
          />
          <Column
            name="Ludność (500m)"
            columnHeaderCellRenderer={() => renderSortHeader("stop_pop_val", "Ludność (500m)")}
            cellRenderer={(row) => (
              <Cell style={getCellStyle(row)}>
                <div
                  onMouseEnter={() => setHoveredObject("stop", items[row]?.stop_id)}
                  onMouseLeave={() => setHoveredObject(null, null)}
                  className="w-full h-full flex items-center"
                >
                  <span className="font-mono text-xs text-slate-700">
                    {formatNumber(items[row]?.stop_pop_val, 0)} os.
                  </span>
                </div>
              </Cell>
            )}
          />
          <Column
            name="Cena m² RCN"
            columnHeaderCellRenderer={() => renderSortHeader("stop_market_val", "Cena m² RCN")}
            cellRenderer={(row) => (
              <Cell style={getCellStyle(row)}>
                <div
                  onMouseEnter={() => setHoveredObject("stop", items[row]?.stop_id)}
                  onMouseLeave={() => setHoveredObject(null, null)}
                  className="w-full h-full flex items-center"
                >
                  <span className="font-mono text-xs text-slate-700">
                    {formatPLN(items[row]?.stop_market_val, true)}
                  </span>
                </div>
              </Cell>
            )}
          />
          <Column
            name="Słupek główny"
            columnHeaderCellRenderer={() => renderSortHeader("is_hub_anchor", "Słupek główny")}
            cellRenderer={(row) => (
              <Cell style={getCellStyle(row)}>
                <div
                  onMouseEnter={() => setHoveredObject("stop", items[row]?.stop_id)}
                  onMouseLeave={() => setHoveredObject(null, null)}
                  className="w-full h-full flex items-center"
                >
                  {items[row]?.is_hub_anchor ? (
                    <Tag
                      minimal
                      intent="success"
                      style={{ fontSize: 9, fontWeight: 700 }}
                      title="Główny słupek węzła o najwyższym wolumenie odjazdów"
                    >
                      GŁÓWNY
                    </Tag>
                  ) : (
                    <span className="text-slate-300">—</span>
                  )}
                </div>
              </Cell>
            )}
          />
        </Table2>
      </div>
    </div>
  );
}
