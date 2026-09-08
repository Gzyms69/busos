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
        },
        controller.signal
      )
        .then((res) => {
          if (!controller.signal.aborted) {
            let filtered = res.items || [];
            if (stopsSearch.trim()) {
              const q = stopsSearch.toLowerCase();
              filtered = filtered.filter(
                (item) =>
                  item.stop_name?.toLowerCase().includes(q) ||
                  item.stop_id?.toLowerCase().includes(q) ||
                  item.hub_name?.toLowerCase().includes(q) ||
                  item.stop_routes?.toLowerCase().includes(q)
              );
            }
            setItems(filtered);
            setTotal(res.total || filtered.length);
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
            style={{ cursor: "pointer", display: "inline-block", width: "100%" }}
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
        zoom: 15,
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
      value: "Tylko Anchory",
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
    <div style={{ display: "flex", flexDirection: "column", height: "100%", overflow: "hidden" }}>
      {/* Action and Filter Toolbar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 8,
          padding: "10px 0",
          borderBottom: "1px solid #2f343c",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
          {/* Grade Filter */}
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <span style={{ fontSize: 11, color: "#8f99a8" }}>Klasa:</span>
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
            style={{ margin: 0, fontSize: 11 }}
          />

          {/* Search Filter */}
          <InputGroup
            small
            leftIcon="filter"
            placeholder="Szukaj przystanku lub linii..."
            value={stopsSearch}
            onChange={(e) => setStopsFilter({ search: e.target.value })}
            style={{ width: 160, fontSize: 11 }}
          />
        </div>

        {/* Jump & Export Actions */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "4px 0 6px 0",
          fontSize: 11,
          color: "#8f99a8",
        }}
      >
        <div>
          Pokazywane: <strong>{items.length}</strong> z <strong>{total}</strong> przystanków
        </div>
        {loading && (
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <Spinner size={12} />
            <span>Pobieranie danych...</span>
          </div>
        )}
      </div>

      {/* Virtualized Table2 Container */}
      <div style={{ flex: 1, minHeight: 350, overflow: "hidden", position: "relative" }}>
        <Table2
          numRows={items.length}
          enableRowReordering={false}
          enableColumnReordering={false}
          defaultRowHeight={28}
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
              <Cell>
                <span style={{ fontWeight: 700, color: "#2b95d6" }}>#{items[row]?.rank}</span>
              </Cell>
            )}
          />
          <Column
            name="Słupek Fizyczny"
            columnHeaderCellRenderer={() => renderSortHeader("stop_name", "Słupek Fizyczny")}
            cellRenderer={(row) => (
              <Cell>
                <TruncatedFormat>
                  {`${items[row]?.stop_name || "—"} (${items[row]?.stop_id})`}
                </TruncatedFormat>
              </Cell>
            )}
          />
          <Column
            name="Ocena"
            columnHeaderCellRenderer={() => renderSortHeader("stop_grade", "Ocena")}
            cellRenderer={(row) => (
              <Cell>
                <GradeBadge grade={items[row]?.stop_grade} size="small" />
              </Cell>
            )}
          />
          <Column
            name="Percentyl"
            columnHeaderCellRenderer={() => renderSortHeader("stop_percentile", "Percentyl")}
            cellRenderer={(row) => (
              <Cell>
                {`${formatNumber(items[row]?.stop_percentile, 1)}%`}
              </Cell>
            )}
          />
          <Column
            name="Z-Score"
            columnHeaderCellRenderer={() => renderSortHeader("stop_local_score_raw", "Z-Score")}
            cellRenderer={(row) => (
              <Cell>
                <span style={{ color: items[row]?.stop_local_score_raw >= 0 ? "#0f9960" : "#db3737" }}>
                  {formatNumber(items[row]?.stop_local_score_raw, 2)}
                </span>
              </Cell>
            )}
          />
          <Column
            name="Odjazdy/h"
            columnHeaderCellRenderer={() => renderSortHeader("stop_departures_h", "Odjazdy/h")}
            cellRenderer={(row) => (
              <Cell>
                <strong>{formatNumber(items[row]?.stop_departures_h, 1)}</strong>
              </Cell>
            )}
          />
          <Column
            name="Linie GTFS"
            columnHeaderCellRenderer={() => renderSortHeader("stop_routes_count", "Linie GTFS")}
            cellRenderer={(row) => (
              <Cell>
                <TruncatedFormat>
                  {`(${items[row]?.stop_routes_count || 0}) ${items[row]?.stop_routes || "—"}`}
                </TruncatedFormat>
              </Cell>
            )}
          />
          <Column
            name="Infra Score"
            columnHeaderCellRenderer={() => renderSortHeader("stop_infra_score", "Infra Score")}
            cellRenderer={(row) => (
              <Cell>
                {formatNumber(items[row]?.stop_infra_score, 1)}
              </Cell>
            )}
          />
          <Column
            name="Pop GUS (500m)"
            columnHeaderCellRenderer={() => renderSortHeader("stop_pop_val", "Pop GUS (500m)")}
            cellRenderer={(row) => (
              <Cell>
                {formatNumber(items[row]?.stop_pop_val, 0)}
              </Cell>
            )}
          />
          <Column
            name="Rynek RCN"
            columnHeaderCellRenderer={() => renderSortHeader("stop_market_val", "Rynek RCN")}
            cellRenderer={(row) => (
              <Cell>
                {formatPLN(items[row]?.stop_market_val, true)}
              </Cell>
            )}
          />
          <Column
            name="Anchor Huba"
            columnHeaderCellRenderer={() => renderSortHeader("is_hub_anchor", "Anchor Huba")}
            cellRenderer={(row) => (
              <Cell>
                {items[row]?.is_hub_anchor ? (
                  <Tag minimal intent="success" style={{ fontSize: 9 }}>
                    ANCHOR
                  </Tag>
                ) : (
                  <span style={{ color: "#8f99a8" }}>—</span>
                )}
              </Cell>
            )}
          />
        </Table2>
      </div>
    </div>
  );
}
