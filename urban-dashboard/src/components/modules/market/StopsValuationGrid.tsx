"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Table2, Column, Cell, ColumnHeaderCell, TruncatedFormat } from "@blueprintjs/table";
import { InputGroup, HTMLSelect, Spinner, Tag } from "@blueprintjs/core";
import { useFoundryStore } from "@/lib/store";
import { fetchMarketStopsSummary } from "@/lib/api";
import type { MarketStopsSummaryItem } from "@/lib/api/types";
import DataExportMenu from "@/components/shared/DataExportMenu";
import { formatPLN, formatNumber, formatDistance } from "@/lib/utils/formatters";

interface StopValuationRow extends MarketStopsSummaryItem {
  stop_id: string;
  stop_name?: string;
}

export default function StopsValuationGrid() {
  const { selectedCity, selectObject } = useFoundryStore();
  const [data, setData] = useState<Record<string, MarketStopsSummaryItem>>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("");
  const [marketType, setMarketType] = useState<string>("all");
  const [sortCol, setSortCol] = useState<keyof StopValuationRow>("median_price_m2");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");

  useEffect(() => {
    if (!selectedCity) return;
    const controller = new AbortController();
    setLoading(true);

    fetchMarketStopsSummary(
      selectedCity,
      {
        market_type: marketType === "all" ? undefined : marketType,
      },
      controller.signal
    )
      .then((res) => {
        if (!controller.signal.aborted) {
          setData(res || {});
          setLoading(false);
        }
      })
      .catch((err) => {
        if (err?.name !== "AbortError") {
          console.warn("Stops market summary error:", err);
          setLoading(false);
        }
      });

    return () => controller.abort();
  }, [selectedCity, marketType]);

  const rows: StopValuationRow[] = useMemo(() => {
    const list: StopValuationRow[] = Object.entries(data).map(([stop_id, item]) => ({
      stop_id,
      ...item,
    }));

    let filtered = list;
    if (search.trim()) {
      const q = search.toLowerCase();
      filtered = filtered.filter(
        (r) => r.stop_id.toLowerCase().includes(q) || (r.stop_name && r.stop_name.toLowerCase().includes(q))
      );
    }

    return filtered.sort((a, b) => {
      const valA = a[sortCol] ?? 0;
      const valB = b[sortCol] ?? 0;
      if (typeof valA === "string" && typeof valB === "string") {
        return sortDir === "asc" ? valA.localeCompare(valB) : valB.localeCompare(valA);
      }
      return sortDir === "asc" ? (valA as number) - (valB as number) : (valB as number) - (valA as number);
    });
  }, [data, search, sortCol, sortDir]);

  const handleSort = (col: keyof StopValuationRow) => {
    if (sortCol === col) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortCol(col);
      setSortDir("desc");
    }
  };

  const renderSortHeader = (col: keyof StopValuationRow, name: string) => {
    const isSorted = sortCol === col;
    return (
      <ColumnHeaderCell
        name={name}
        menuIcon={isSorted ? (sortDir === "asc" ? "sort-asc" : "sort-desc") : undefined}
        nameRenderer={() => (
          <div
            onClick={() => handleSort(col)}
            style={{
              cursor: "pointer",
              fontWeight: 700,
              fontSize: 11,
              color: isSorted ? "#2b95d6" : "#f6f7f9",
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            {name}
            {isSorted && <span>{sortDir === "asc" ? "↑" : "↓"}</span>}
          </div>
        )}
      />
    );
  };

  const handleRowClick = useCallback(
    (row: StopValuationRow) => {
      selectObject("stop", row.stop_id, row);
    },
    [selectObject]
  );

  return (
    <div
      style={{
        background: "#1c2127",
        border: "1px solid #2f343c",
        borderRadius: 6,
        padding: 16,
        display: "flex",
        flexDirection: "column",
        height: 480,
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
        <div style={{ display: "flex", alignItems: "center", gap: 10, flex: 1 }}>
          <InputGroup
            leftIcon="search"
            placeholder="Szukaj słupka..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ width: 220, fontSize: 11 }}
            small
          />
          <HTMLSelect
            value={marketType}
            onChange={(e) => setMarketType(e.target.value)}
            style={{ fontSize: 11 }}
          >
            <option value="all">Wszystkie rynki</option>
            <option value="pierwotny">Rynek pierwotny</option>
            <option value="wtorny">Rynek wtórny</option>
          </HTMLSelect>
          <Tag minimal style={{ fontSize: 11, color: "#8f99a8" }}>
            {formatNumber(rows.length, 0)} słupków w mostku DuckDB
          </Tag>
        </div>

        <DataExportMenu
          filename={`rcn_wyceny_${selectedCity}`}
          headers={[
            "stop_id",
            "stop_name",
            "median_price_m2",
            "avg_price_m2",
            "tx_count",
            "avg_distance_m",
            "min_price_m2",
            "max_price_m2",
          ]}
          rows={rows.map((r) => [
            r.stop_id,
            r.stop_name || "",
            r.median_price_m2,
            r.avg_price_m2,
            r.tx_count,
            r.avg_distance_m,
            r.min_price_m2,
            r.max_price_m2,
          ])}
          rawJsonData={rows}
        />
      </div>

      {/* Virtualized Table */}
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
            <span>Odpytywanie mostka DuckDB RCN (&lt;15ms)...</span>
          </div>
        ) : rows.length === 0 ? (
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
            Brak wycen wokół słupków dla wybranego filtru
          </div>
        ) : (
          <Table2
            numRows={rows.length}
            defaultRowHeight={28}
            enableRowReordering={false}
            enableColumnReordering={false}
            onSelection={(regions) => {
              const r = regions?.[0]?.rows?.[0];
              if (r != null && rows[r]) handleRowClick(rows[r]);
            }}
          >
            <Column
              name="Słupek"
              columnHeaderCellRenderer={() => renderSortHeader("stop_id", "Słupek")}
              cellRenderer={(rowIndex) => {
                const r = rows[rowIndex];
                return (
                  <Cell>
                    <div
                      style={{ cursor: "pointer", color: "#2b95d6", fontSize: 11 }}
                      onClick={() => handleRowClick(r)}
                    >
                      <TruncatedFormat>{r.stop_name ? `${r.stop_name} (${r.stop_id})` : r.stop_id}</TruncatedFormat>
                    </div>
                  </Cell>
                );
              }}
            />

            <Column
              name="Mediana PLN/m²"
              columnHeaderCellRenderer={() => renderSortHeader("median_price_m2", "Mediana PLN/m²")}
              cellRenderer={(rowIndex) => {
                const r = rows[rowIndex];
                return (
                  <Cell style={{ fontSize: 11, fontWeight: 600, color: "#f6f7f9" }}>
                    {formatPLN(r.median_price_m2, true)}
                  </Cell>
                );
              }}
            />

            <Column
              name="Średnia PLN/m²"
              columnHeaderCellRenderer={() => renderSortHeader("avg_price_m2", "Średnia PLN/m²")}
              cellRenderer={(rowIndex) => {
                const r = rows[rowIndex];
                return (
                  <Cell style={{ fontSize: 11, color: "#8f99a8" }}>
                    {formatPLN(r.avg_price_m2, true)}
                  </Cell>
                );
              }}
            />

            <Column
              name="Liczba Transakcji"
              columnHeaderCellRenderer={() => renderSortHeader("tx_count", "Transakcje")}
              cellRenderer={(rowIndex) => {
                const r = rows[rowIndex];
                return (
                  <Cell style={{ fontSize: 11, textAlign: "right" }}>
                    <Tag minimal intent={r.tx_count > 20 ? "primary" : "none"} style={{ fontSize: 10 }}>
                      {formatNumber(r.tx_count, 0)} aktów
                    </Tag>
                  </Cell>
                );
              }}
            />

            <Column
              name="Śr. Dystans Pieszy"
              columnHeaderCellRenderer={() => renderSortHeader("avg_distance_m", "Śr. Dystans")}
              cellRenderer={(rowIndex) => {
                const r = rows[rowIndex];
                return (
                  <Cell style={{ fontSize: 11, color: "#8f99a8" }}>
                    {formatDistance(r.avg_distance_m)}
                  </Cell>
                );
              }}
            />

            <Column
              name="Przedział Min - Max"
              columnHeaderCellRenderer={() => <ColumnHeaderCell name="Przedział Min - Max" />}
              cellRenderer={(rowIndex) => {
                const r = rows[rowIndex];
                return (
                  <Cell style={{ fontSize: 10, color: "#636e7b" }}>
                    {`${formatNumber(r.min_price_m2, 0)} - ${formatNumber(r.max_price_m2, 0)} PLN`}
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
