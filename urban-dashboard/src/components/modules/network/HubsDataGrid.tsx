"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Table2, Column, Cell, ColumnHeaderCell, TruncatedFormat } from "@blueprintjs/table";
import { Button, ButtonGroup, NumericInput, Tag, Spinner } from "@blueprintjs/core";
import { useFoundryStore } from "@/lib/store";
import { fetchHubsRanking } from "@/lib/api";
import type { HubRankingItem } from "@/lib/api/types";
import GradeBadge from "@/components/shared/GradeBadge";
import JumpToRankInput from "@/components/shared/JumpToRankInput";
import FilterPillsBar, { type FilterPill } from "@/components/shared/FilterPillsBar";
import DataExportMenu from "@/components/shared/DataExportMenu";
import { formatNumber, formatPLN } from "@/lib/utils/formatters";

export default function HubsDataGrid() {
  const {
    selectedCity,
    hubsOrderBy,
    hubsOrderDir,
    hubsMinStops,
    setHubsOrdering,
    setHubsMinStops,
    selectedId,
    selectObject,
    setViewState,
    setHoveredObject,
    hoveredId,
  } = useFoundryStore();

  const [items, setItems] = useState<HubRankingItem[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [gradeFilter, setGradeFilter] = useState<string>("");
  const limit = 100;

  const selectedIndex = selectedId != null ? items.findIndex((it) => String(it.hub_id) === String(selectedId)) : -1;

  const loadData = useCallback(
    (rankParam?: number) => {
      const controller = new AbortController();
      setLoading(true);

      fetchHubsRanking(
        {
          city: selectedCity,
          order_by: hubsOrderBy,
          order_dir: hubsOrderDir,
          grade: gradeFilter || undefined,
          min_stops: hubsMinStops > 1 ? hubsMinStops : undefined,
          limit,
          rank: rankParam,
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
    [selectedCity, hubsOrderBy, hubsOrderDir, gradeFilter, hubsMinStops]
  );

  useEffect(() => {
    loadData();
  }, [loadData]);

  // Hover styling helper
  const getCellStyle = (row: number) => {
    return hoveredId && String(items[row]?.hub_id) === String(hoveredId)
      ? { backgroundColor: "rgba(224, 242, 254, 0.75)" }
      : undefined;
  };

  const handleSort = (colName: string) => {
    setHubsOrdering(colName);
  };

  const renderSortHeader = (colName: string, displayName: string) => {
    const isSorted = hubsOrderBy === colName;
    return (
      <ColumnHeaderCell
        name={displayName}
        menuIcon={isSorted ? (hubsOrderDir === "asc" ? "sort-asc" : "sort-desc") : undefined}
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

  const handleRowClick = (rowIndex: number) => {
    const item = items[rowIndex];
    if (!item) return;
    selectObject("hub", item.hub_id, item);
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
  if (gradeFilter) {
    activeFilters.push({
      key: "grade",
      label: "Klasa",
      value: gradeFilter,
      onRemove: () => setGradeFilter(""),
    });
  }
  if (hubsMinStops > 1) {
    activeFilters.push({
      key: "min_stops",
      label: "Min. stanowisk",
      value: `>= ${hubsMinStops}`,
      onRemove: () => setHubsMinStops(1),
    });
  }

  // Export
  const exportHeaders = [
    "Rank",
    "Hub ID",
    "Hub Name",
    "Grade",
    "Stops Count",
    "Departures/h",
    "Routes Count",
    "Routes",
    "Gravity Score",
    "Efficiency",
    "Liquidity",
    "Market RCN",
  ];

  const getExportRows = () => {
    return items.map((h) => [
      h.rank,
      h.hub_id,
      h.hub_name,
      h.hub_grade,
      h.hub_stops_count,
      h.hub_departures_h,
      h.hub_routes_count,
      h.hub_routes,
      h.hub_raw_gravity,
      h.hub_entropy,
      h.hub_liquidity,
      h.hub_market_val,
    ]);
  };

  return (
    <div className="flex flex-col h-full overflow-hidden text-slate-900">
      {/* Controls Bar */}
      <div className="flex items-center justify-between flex-wrap gap-2.5 py-2.5 border-b border-slate-200">
        <div className="flex items-center gap-2.5 flex-wrap">
          {/* Grade Filter */}
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-semibold text-slate-600">Klasa:</span>
            <ButtonGroup size="small">
              {["", "A+", "A", "B", "C", "D", "F"].map((g) => (
                <Button
                  key={g}
                  active={gradeFilter === g}
                  intent={gradeFilter === g ? "primary" : "none"}
                  onClick={() => setGradeFilter(g)}
                  style={{ fontSize: 10, padding: "0 6px" }}
                >
                  {g || "Wszystkie"}
                </Button>
              ))}
            </ButtonGroup>
          </div>

          {/* Min Stops Filter */}
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-semibold text-slate-600">Min. stanowisk w węźle:</span>
            <NumericInput
              small
              min={1}
              max={20}
              value={hubsMinStops}
              onValueChange={(val) => {
                if (!isNaN(val)) setHubsMinStops(val);
              }}
              style={{ width: 60, fontSize: 11 }}
            />
          </div>
        </div>

        {/* Jump & Export */}
        <div className="flex items-center gap-2">
          <JumpToRankInput
            maxRank={total || 28000}
            onJump={(r) => {
              loadData(r);
            }}
          />
          <DataExportMenu
            filename={`busos_${selectedCity}_hubs_ranking`}
            headers={exportHeaders}
            rows={getExportRows}
            rawJsonData={() => items}
          />
        </div>
      </div>

      {/* Filter Pills */}
      <FilterPillsBar
        filters={activeFilters}
        onClearAll={() => {
          setGradeFilter("");
          setHubsMinStops(1);
        }}
      />

      {/* Table Status */}
      <div className="flex justify-between items-center py-1.5 px-0.5 text-xs text-slate-500">
        <div>
          Pokazywane: <strong className="text-slate-800 font-semibold">{items.length}</strong> z{" "}
          <strong className="text-slate-800 font-semibold">{total.toLocaleString("pl-PL")}</strong> węzłów przesiadkowych
        </div>
        {loading && (
          <div className="flex items-center gap-1.5 text-slate-500">
            <Spinner size={12} />
            <span>Pobieranie danych...</span>
          </div>
        )}
      </div>

      {/* Virtualized Table2 */}
      <div className="flex-1 min-h-[350px] overflow-hidden relative border border-slate-200 rounded-xl shadow-xs">
        <Table2
          numRows={items.length}
          enableRowReordering={false}
          enableColumnReordering={false}
          defaultRowHeight={30}
          columnWidths={[65, 230, 85, 110, 120, 160, 95, 100, 100, 110]}
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
                  onMouseEnter={() => setHoveredObject("hub", items[row]?.hub_id)}
                  onMouseLeave={() => setHoveredObject(null, null)}
                  className="w-full h-full flex items-center"
                >
                  <span className="font-mono font-bold text-sky-700 text-xs">#{items[row]?.rank}</span>
                </div>
              </Cell>
            )}
          />
          <Column
            name="Węzeł Przesiadkowy"
            columnHeaderCellRenderer={() => renderSortHeader("hub_name", "Węzeł Przesiadkowy")}
            cellRenderer={(row) => (
              <Cell style={getCellStyle(row)}>
                <div
                  onMouseEnter={() => setHoveredObject("hub", items[row]?.hub_id)}
                  onMouseLeave={() => setHoveredObject(null, null)}
                  className="w-full h-full flex items-center font-bold text-slate-900 text-xs truncate"
                  title={items[row]?.hub_name}
                >
                  <TruncatedFormat>
                    {items[row]?.hub_name || `Węzeł #${items[row]?.hub_id}`}
                  </TruncatedFormat>
                </div>
              </Cell>
            )}
          />
          <Column
            name="Ocena Makro"
            columnHeaderCellRenderer={() => renderSortHeader("hub_grade", "Ocena Makro")}
            cellRenderer={(row) => (
              <Cell style={getCellStyle(row)}>
                <div
                  onMouseEnter={() => setHoveredObject("hub", items[row]?.hub_id)}
                  onMouseLeave={() => setHoveredObject(null, null)}
                  className="w-full h-full flex items-center"
                >
                  <GradeBadge grade={items[row]?.hub_grade} size="small" />
                </div>
              </Cell>
            )}
          />
          <Column
            name="Słupki w Hubie"
            columnHeaderCellRenderer={() => renderSortHeader("hub_stops_count", "Słupki w Hubie")}
            cellRenderer={(row) => (
              <Cell style={getCellStyle(row)}>
                <div
                  onMouseEnter={() => setHoveredObject("hub", items[row]?.hub_id)}
                  onMouseLeave={() => setHoveredObject(null, null)}
                  className="w-full h-full flex items-center"
                >
                  <Tag minimal intent={items[row]?.hub_stops_count > 3 ? "primary" : "none"} style={{ fontSize: 10 }}>
                    {items[row]?.hub_stops_count} słupków
                  </Tag>
                </div>
              </Cell>
            )}
          />
          <Column
            name="Suma Odjazdów/h"
            columnHeaderCellRenderer={() => renderSortHeader("hub_departures_h", "Suma Odjazdów/h")}
            cellRenderer={(row) => (
              <Cell style={getCellStyle(row)}>
                <div
                  onMouseEnter={() => setHoveredObject("hub", items[row]?.hub_id)}
                  onMouseLeave={() => setHoveredObject(null, null)}
                  className="w-full h-full flex items-center gap-1"
                >
                  <span className="font-mono font-bold text-slate-900 text-xs">
                    {formatNumber(items[row]?.hub_departures_h, 1)}
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium">odj./h</span>
                </div>
              </Cell>
            )}
          />
          <Column
            name="Linie Obsługujące"
            columnHeaderCellRenderer={() => renderSortHeader("hub_routes_count", "Linie Obsługujące")}
            cellRenderer={(row) => (
              <Cell style={getCellStyle(row)}>
                <div
                  onMouseEnter={() => setHoveredObject("hub", items[row]?.hub_id)}
                  onMouseLeave={() => setHoveredObject(null, null)}
                  className="w-full h-full flex items-center"
                >
                  <TruncatedFormat>
                    {`(${items[row]?.hub_routes_count || 0}) ${items[row]?.hub_routes || "—"}`}
                  </TruncatedFormat>
                </div>
              </Cell>
            )}
          />
          <Column
            name="Grawitacja POI"
            columnHeaderCellRenderer={() => renderSortHeader("hub_raw_gravity", "Grawitacja POI")}
            cellRenderer={(row) => (
              <Cell style={getCellStyle(row)}>
                <div
                  onMouseEnter={() => setHoveredObject("hub", items[row]?.hub_id)}
                  onMouseLeave={() => setHoveredObject(null, null)}
                  className="w-full h-full flex items-center font-mono text-xs text-slate-700"
                >
                  {formatNumber(items[row]?.hub_raw_gravity, 1)}
                </div>
              </Cell>
            )}
          />
          <Column
            name="Entropia Miksu"
            columnHeaderCellRenderer={() => renderSortHeader("hub_entropy", "Entropia Miksu")}
            cellRenderer={(row) => (
              <Cell style={getCellStyle(row)}>
                <div
                  onMouseEnter={() => setHoveredObject("hub", items[row]?.hub_id)}
                  onMouseLeave={() => setHoveredObject(null, null)}
                  className="w-full h-full flex items-center font-mono text-xs text-slate-700"
                >
                  {formatNumber(items[row]?.hub_entropy, 2)}
                </div>
              </Cell>
            )}
          />
          <Column
            name="Płynność (HHI)"
            columnHeaderCellRenderer={() => renderSortHeader("hub_liquidity", "Płynność (HHI)")}
            cellRenderer={(row) => (
              <Cell style={getCellStyle(row)}>
                <div
                  onMouseEnter={() => setHoveredObject("hub", items[row]?.hub_id)}
                  onMouseLeave={() => setHoveredObject(null, null)}
                  className="w-full h-full flex items-center font-mono text-xs text-slate-700"
                >
                  {formatNumber(items[row]?.hub_liquidity, 2)}
                </div>
              </Cell>
            )}
          />
          <Column
            name="Rynek RCN"
            columnHeaderCellRenderer={() => renderSortHeader("hub_market_val", "Rynek RCN")}
            cellRenderer={(row) => (
              <Cell style={getCellStyle(row)}>
                <div
                  onMouseEnter={() => setHoveredObject("hub", items[row]?.hub_id)}
                  onMouseLeave={() => setHoveredObject(null, null)}
                  className="w-full h-full flex items-center font-mono text-xs text-slate-700"
                >
                  {formatPLN(items[row]?.hub_market_val, true)}
                </div>
              </Cell>
            )}
          />
          <Column
            name="Percentyl Krajowy"
            columnHeaderCellRenderer={() => renderSortHeader("nat_percentile", "Percentyl Krajowy")}
            cellRenderer={(row) => (
              <Cell style={getCellStyle(row)}>
                {items[row]?.nat_percentile != null ? (
                  <span style={{ color: "#2b95d6", fontWeight: 600 }}>
                    {`${formatNumber(items[row]?.nat_percentile, 1)}%`}
                  </span>
                ) : (
                  <span className="text-slate-400">—</span>
                )}
              </Cell>
            )}
          />
        </Table2>
      </div>
    </div>
  );
}
