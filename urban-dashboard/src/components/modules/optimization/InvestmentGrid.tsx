"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Table2, Column, Cell, ColumnHeaderCell } from "@blueprintjs/table";
import { Tag, Spinner, Card } from "@blueprintjs/core";
import { useFoundryStore } from "@/lib/store";
import { fetchTransitDeserts } from "@/lib/api";
import type { TransitDesertItem } from "@/lib/api/types";
import { formatNumber, formatPLN } from "@/lib/utils/formatters";
import DataExportMenu from "@/components/shared/DataExportMenu";

export default function InvestmentGrid() {
  const { selectedCity, selectObject, setViewState, setH3Metric } = useFoundryStore();

  const [items, setItems] = useState<TransitDesertItem[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  const loadData = useCallback(() => {
    const controller = new AbortController();
    setLoading(true);

    fetchTransitDeserts(selectedCity, 100, controller.signal)
      .then((res) => {
        if (!controller.signal.aborted) {
          setItems(res.deserts || []);
          setTotalCount(res.count || res.deserts?.length || 0);
          setLoading(false);
        }
      })
      .catch((e) => {
        if (e?.name !== "AbortError") {
          setLoading(false);
        }
      });

    return () => controller.abort();
  }, [selectedCity]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleRowClick = (rowIndex: number) => {
    const item = items[rowIndex];
    if (!item) return;
    selectObject("hex", item.h3_index, item);
    setH3Metric("transit_desert");
    if (item.lon && item.lat) {
      setViewState({
        longitude: item.lon,
        latitude: item.lat,
        zoom: 14,
        pitch: 45,
      });
    }
  };

  const totalExcludedPop = items.reduce((acc, curr) => acc + (curr.pop_total || 0), 0);

  // Export
  const exportHeaders = [
    "Rank",
    "H3 Index",
    "Deficit Index",
    "Excluded Population (GUS)",
    "Departures/h",
    "RCN Median Price m2",
    "Stop Count",
    "Hub Count",
    "Lat",
    "Lon",
  ];

  const getExportRows = () => {
    return items.map((d, idx) => [
      idx + 1,
      d.h3_index,
      d.transit_desert_index,
      d.pop_total,
      d.total_departures_h,
      d.rcn_median_price_m2 ?? "—",
      d.stop_count,
      d.hub_count,
      d.lat,
      d.lon,
    ]);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", overflow: "hidden" }}>
      {/* KPI Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 12,
          marginBottom: 12,
        }}
      >
        <Card
          style={{
            padding: 12,
            background: "#1c2127",
            border: "1px solid #383e47",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ fontSize: 11, color: "#8f99a8", textTransform: "uppercase", fontWeight: 700 }}>
            Obszary o Niskiej Dostępności
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 8, margin: "6px 0" }}>
            <span style={{ fontSize: 24, fontWeight: 800, color: "#db3737" }}>
              {totalCount}
            </span>
            <span style={{ fontSize: 12, color: "#8f99a8" }}>obszarów analizy (H3)</span>
          </div>
          <div style={{ fontSize: 11, color: "#d9822b" }}>
            Kryterium: min. 150 mieszkańców i &lt; 4 odjazdy/h
          </div>
        </Card>

        <Card
          style={{
            padding: 12,
            background: "#1c2127",
            border: "1px solid #383e47",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ fontSize: 11, color: "#8f99a8", textTransform: "uppercase", fontWeight: 700 }}>
            Mieszkańcy z Ograniczoną Obsługą
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 8, margin: "6px 0" }}>
            <span style={{ fontSize: 24, fontWeight: 800, color: "#f6f7f9" }}>
              {formatNumber(totalExcludedPop, 0)}
            </span>
            <span style={{ fontSize: 12, color: "#8f99a8" }}>mieszkańców w strefie deficytu</span>
          </div>
          <div style={{ fontSize: 11, color: "#2b95d6" }}>
            Potencjał dla nowych przystanków i korekty tras
          </div>
        </Card>
      </div>

      {/* Toolbar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "6px 0",
          borderBottom: "1px solid #2f343c",
          marginBottom: 6,
        }}
      >
        <div style={{ fontSize: 11, color: "#8f99a8" }}>
          Ranking priorytetów inwestycyjnych TDI (kliknij wiersz, by podświetlić heks na mapie):
        </div>

        <DataExportMenu
          filename={`busos_${selectedCity}_transit_deserts_tdi`}
          headers={exportHeaders}
          rows={getExportRows}
          rawJsonData={() => items}
        />
      </div>

      {/* Table Status */}
      {loading && (
        <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "4px 0", fontSize: 11, color: "#8f99a8" }}>
          <Spinner size={12} />
          <span>Ładowanie rankingu...</span>
        </div>
      )}

      {/* Virtualized Table2 Container */}
      <div style={{ flex: 1, minHeight: 350, overflow: "hidden", position: "relative" }}>
        <Table2
          numRows={items.length}
          enableRowReordering={false}
          enableColumnReordering={false}
          defaultRowHeight={28}
          onSelection={(regions) => {
            const r = regions?.[0]?.rows?.[0];
            if (r != null) {
              handleRowClick(r);
            }
          }}
        >
          <Column
            name="#Rank"
            cellRenderer={(row) => (
              <Cell>
                <span style={{ fontWeight: 700, color: "#db3737" }}>#{row + 1}</span>
              </Cell>
            )}
          />

          <Column
            name="Obszar H3"
            cellRenderer={(row) => (
              <Cell>
                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: 11,
                    color: "#2b95d6",
                    cursor: "pointer",
                  }}
                >
                  {items[row]?.h3_index || "—"}
                </span>
              </Cell>
            )}
          />

          <Column
            name="Wskaźnik Deficytu"
            cellRenderer={(row) => (
              <Cell>
                <span style={{ fontSize: 11, color: "#f6f7f9", fontWeight: 700 }}>
                  Deficyt: {formatNumber(items[row]?.transit_desert_index, 2)}
                </span>
              </Cell>
            )}
          />
          <Column
            name="Mieszkańcy w Strefie"
            cellRenderer={(row) => (
              <Cell>
                <strong>{formatNumber(items[row]?.pop_total, 0)}</strong>
              </Cell>
            )}
          />
          <Column
            name="Odjazdy / Godzina"
            cellRenderer={(row) => (
              <Cell>
                <span style={{ color: items[row]?.total_departures_h < 1 ? "#db3737" : "#d9822b" }}>
                  {formatNumber(items[row]?.total_departures_h, 1)} /h
                </span>
              </Cell>
            )}
          />
          <Column
            name="Cena Mieszkań"
            cellRenderer={(row) => (
              <Cell>
                {items[row]?.rcn_median_price_m2
                  ? formatPLN(items[row]?.rcn_median_price_m2, true)
                  : "Brak transakcji"}
              </Cell>
            )}
          />
          <Column
            name="Liczba Przystanków"
            cellRenderer={(row) => (
              <Cell>
                {items[row]?.stop_count || 0} przystanków
              </Cell>
            )}
          />
        </Table2>
      </div>
    </div>
  );
}
