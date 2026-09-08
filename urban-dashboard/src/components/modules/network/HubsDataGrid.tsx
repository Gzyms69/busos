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
            style={{ cursor: "pointer", display: "inline-block", width: "100%" }}
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
        zoom: 15,
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
      label: "Min. słupków",
      value: `≥ ${hubsMinStops}`,
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
    "Raw Gravity",
    "Entropy",
    "Pop GUS",
    "Market RCN",
    "City Percentile",
    "Nat Percentile",
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
      h.hub_pop_val,
      h.hub_market_val,
      h.hub_percentile,
      h.nat_percentile ?? "—",
    ]);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", overflow: "hidden" }}>
      {/* Toolbar */}
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
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <span style={{ fontSize: 11, color: "#8f99a8" }}>Min. słupków w hubie:</span>
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
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
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
          Pokazywane: <strong>{items.length}</strong> z <strong>{total}</strong> węzłów logicznych
        </div>
        {loading && (
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <Spinner size={12} />
            <span>Pobieranie danych...</span>
          </div>
        )}
      </div>

      {/* Virtualized Table2 */}
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
            name="Węzeł Przesiadkowy"
            columnHeaderCellRenderer={() => renderSortHeader("hub_name", "Węzeł Przesiadkowy")}
            cellRenderer={(row) => (
              <Cell>
                <TruncatedFormat>
                  {items[row]?.hub_name || `Węzeł #${items[row]?.hub_id}`}
                </TruncatedFormat>
              </Cell>
            )}
          />
          <Column
            name="Ocena Makro"
            columnHeaderCellRenderer={() => renderSortHeader("hub_grade", "Ocena Makro")}
            cellRenderer={(row) => (
              <Cell>
                <GradeBadge grade={items[row]?.hub_grade} size="small" />
              </Cell>
            )}
          />
          <Column
            name="Słupki w Hubie"
            columnHeaderCellRenderer={() => renderSortHeader("hub_stops_count", "Słupki w Hubie")}
            cellRenderer={(row) => (
              <Cell>
                <Tag minimal intent={items[row]?.hub_stops_count > 3 ? "primary" : "none"} style={{ fontSize: 10 }}>
                  {items[row]?.hub_stops_count} słupków
                </Tag>
              </Cell>
            )}
          />
          <Column
            name="Suma Odjazdów/h"
            columnHeaderCellRenderer={() => renderSortHeader("hub_departures_h", "Suma Odjazdów/h")}
            cellRenderer={(row) => (
              <Cell>
                <strong>{formatNumber(items[row]?.hub_departures_h, 1)}</strong>
              </Cell>
            )}
          />
          <Column
            name="Linie Obsługujące"
            columnHeaderCellRenderer={() => renderSortHeader("hub_routes_count", "Linie Obsługujące")}
            cellRenderer={(row) => (
              <Cell>
                <TruncatedFormat>
                  {`(${items[row]?.hub_routes_count || 0}) ${items[row]?.hub_routes || "—"}`}
                </TruncatedFormat>
              </Cell>
            )}
          />
          <Column
            name="Grawitacja POI"
            columnHeaderCellRenderer={() => renderSortHeader("hub_raw_gravity", "Grawitacja POI")}
            cellRenderer={(row) => (
              <Cell>
                {formatNumber(items[row]?.hub_raw_gravity, 1)}
              </Cell>
            )}
          />
          <Column
            name="Entropia Miksu"
            columnHeaderCellRenderer={() => renderSortHeader("hub_entropy", "Entropia Miksu")}
            cellRenderer={(row) => (
              <Cell>
                {formatNumber(items[row]?.hub_entropy, 2)}
              </Cell>
            )}
          />
          <Column
            name="Populacja Ciążąca"
            columnHeaderCellRenderer={() => renderSortHeader("hub_pop_val", "Populacja Ciążąca")}
            cellRenderer={(row) => (
              <Cell>
                {formatNumber(items[row]?.hub_pop_val, 0)}
              </Cell>
            )}
          />
          <Column
            name="Wycena Mieszkań RCN"
            columnHeaderCellRenderer={() => renderSortHeader("hub_market_val", "Wycena Mieszkań RCN")}
            cellRenderer={(row) => (
              <Cell>
                {formatPLN(items[row]?.hub_market_val, true)}
              </Cell>
            )}
          />
          <Column
            name="Percentyl Krajowy"
            columnHeaderCellRenderer={() => renderSortHeader("nat_percentile", "Percentyl Krajowy")}
            cellRenderer={(row) => (
              <Cell>
                {items[row]?.nat_percentile != null ? (
                  <span style={{ color: "#2b95d6", fontWeight: 600 }}>
                    {`${formatNumber(items[row]?.nat_percentile, 1)}%`}
                  </span>
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
