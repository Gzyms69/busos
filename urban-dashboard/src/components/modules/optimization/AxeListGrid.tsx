"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Table2, Column, Cell, ColumnHeaderCell, TruncatedFormat } from "@blueprintjs/table";
import { Slider, Tag, Button, Spinner, Card } from "@blueprintjs/core";
import { useFoundryStore } from "@/lib/store";
import { fetchAxeList } from "@/lib/api";
import type { AxeStopItem } from "@/lib/api/types";
import { formatNumber, formatDistance, formatPLN } from "@/lib/utils/formatters";
import DataExportMenu from "@/components/shared/DataExportMenu";

const ANNUAL_SAVINGS_PER_STOP_PLN = 12000;

export default function AxeListGrid() {
  const { selectedCity, setSelectedAxePair, selectedAxePair, setViewState } = useFoundryStore();

  const [threshold, setThreshold] = useState<number>(0.7);
  const [items, setItems] = useState<AxeStopItem[]>([]);
  const [totalRedundant, setTotalRedundant] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  const loadData = useCallback(() => {
    const controller = new AbortController();
    setLoading(true);

    fetchAxeList(selectedCity, threshold, controller.signal)
      .then((res) => {
        if (!controller.signal.aborted) {
          setItems(res.stops || []);
          setTotalRedundant(res.total_redundant || (res.stops?.length ?? 0));
          setLoading(false);
        }
      })
      .catch((e) => {
        if (e?.name !== "AbortError") {
          setLoading(false);
        }
      });

    return () => controller.abort();
  }, [selectedCity, threshold]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleRowClick = (rowIndex: number) => {
    const item = items[rowIndex];
    if (!item) return;
    setSelectedAxePair(item);
    if (item.lon && item.lat) {
      setViewState({
        longitude: item.lon,
        latitude: item.lat,
        zoom: 16,
        pitch: 45,
      });
    }
  };

  const estAnnualSavings = totalRedundant * ANNUAL_SAVINGS_PER_STOP_PLN;

  // Export
  const exportHeaders = [
    "Redundant Stop ID",
    "Redundant Stop Name",
    "Dominant Stop ID",
    "Dominant Stop Name",
    "Redundancy Score",
    "Distance (m)",
    "Service Overlap",
    "Spatial Decay",
    "Demand Cannibalization",
    "Redundant Departures/h",
    "Dominant Departures/h",
    "Redundant Routes",
    "Dominant Routes",
  ];

  const getExportRows = () => {
    return items.map((s) => [
      s.redundant_stop_id,
      s.redundant_stop_name,
      s.dominant_stop_id,
      s.dominant_stop_name,
      s.redundancy_score,
      s.distance_m,
      s.service_overlap,
      s.spatial_decay,
      s.demand_cannibalization,
      s.redundant_departures_h,
      s.dominant_departures_h,
      s.redundant_routes,
      s.dominant_routes,
    ]);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", overflow: "hidden" }}>
      {/* Top Section: Savings KPI and Threshold Slider */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 12,
          marginBottom: 12,
        }}
      >
        {/* KPI 1: Redundant count & savings */}
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
            Redukcja Zbędnych Słupków (TCRP 100)
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 8, margin: "6px 0" }}>
            <span style={{ fontSize: 24, fontWeight: 800, color: "#db3737" }}>
              {totalRedundant}
            </span>
            <span style={{ fontSize: 12, color: "#8f99a8" }}>słupków do likwidacji</span>
          </div>
          <div style={{ fontSize: 11, color: "#0f9960", fontWeight: 700 }}>
            Potencjał oszczędności: {formatPLN(estAnnualSavings)} / rok
          </div>
        </Card>

        {/* KPI 2: Threshold Slider */}
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
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 11, color: "#8f99a8", textTransform: "uppercase", fontWeight: 700 }}>
              Próg Redundancji TCRP (R ≥ {threshold.toFixed(2)})
            </span>
            <Tag minimal intent={threshold >= 0.9 ? "danger" : threshold >= 0.7 ? "warning" : "primary"}>
              {threshold >= 0.9 ? "Krytyczna" : threshold >= 0.7 ? "Zalecany TCRP" : "Szeroka"}
            </Tag>
          </div>

          <div style={{ padding: "0 10px", marginTop: 8 }}>
            <Slider
              min={0.5}
              max={0.95}
              stepSize={0.05}
              labelStepSize={0.2}
              value={threshold}
              onChange={(val) => setThreshold(Number(val.toFixed(2)))}
              showTrackFill
            />
          </div>

          <div style={{ fontSize: 10, color: "#8f99a8", marginTop: 4 }}>
            Wskaźnik TCRP Report 100 uwzględnia odległość pieszą cKDTree ≤200m oraz rozkład Gaussa.
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
          Zidentyfikowane pary kanibalizujące: <strong>{items.length}</strong> (kliknij parę, by narysować wektor na mapie)
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {selectedAxePair && (
            <Button
              small
              minimal
              icon="cross"
              intent="danger"
              onClick={() => setSelectedAxePair(null)}
              style={{ fontSize: 10 }}
            >
              Odznacz parę na mapie
            </Button>
          )}

          <DataExportMenu
            filename={`busos_${selectedCity}_axe_list_tcrp100`}
            headers={exportHeaders}
            rows={getExportRows}
            rawJsonData={() => items}
          />
        </div>
      </div>

      {/* Table Status */}
      {loading && (
        <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "4px 0", fontSize: 11, color: "#8f99a8" }}>
          <Spinner size={12} />
          <span>Przeliczanie par kanibalizujących TCRP 100...</span>
        </div>
      )}

      {/* Virtualized Table2 */}
      <div style={{ flex: 1, minHeight: 300, overflow: "hidden", position: "relative" }}>
        <Table2
          numRows={items.length}
          enableRowReordering={false}
          enableColumnReordering={false}
          defaultRowHeight={28}
          onSelection={(regions) => {
            const r = regions?.[0]?.rows?.[0];
            if (r != null) handleRowClick(r);
          }}
        >
          <Column
            name="Słupek Zbędny (Do Usunięcia)"
            cellRenderer={(row) => {
              const isSelected = selectedAxePair?.redundant_stop_id === items[row]?.redundant_stop_id;
              return (
                <Cell
                  style={{
                    backgroundColor: isSelected ? "rgba(219, 55, 55, 0.25)" : undefined,
                  }}
                >
                  <div style={{ textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>
                    <span style={{ color: "#db3737", fontWeight: 700 }}>
                      {items[row]?.redundant_stop_name}
                    </span>{" "}
                    ({items[row]?.redundant_stop_id}) — {formatNumber(items[row]?.redundant_departures_h, 1)} kurs/h
                  </div>
                </Cell>
              );
            }}
          />
          <Column
            name="Słupek Dominujący (Przejmujący)"
            cellRenderer={(row) => (
              <Cell>
                <div style={{ textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>
                  <span style={{ color: "#0f9960", fontWeight: 700 }}>
                    {items[row]?.dominant_stop_name}
                  </span>{" "}
                  ({items[row]?.dominant_stop_id}) — {formatNumber(items[row]?.dominant_departures_h, 1)} kurs/h
                </div>
              </Cell>
            )}
          />
          <Column
            name="Wskaźnik R"
            cellRenderer={(row) => (
              <Cell>
                <Tag
                  minimal
                  intent={items[row]?.redundancy_score >= 0.85 ? "danger" : "warning"}
                  style={{ fontSize: 10, fontWeight: 700 }}
                >
                  R = {formatNumber(items[row]?.redundancy_score, 2)}
                </Tag>
              </Cell>
            )}
          />
          <Column
            name="Odległość Piesza"
            cellRenderer={(row) => (
              <Cell>
                <strong>{formatDistance(items[row]?.distance_m)}</strong>
              </Cell>
            )}
          />
          <Column
            name="Pokrycie Linii"
            cellRenderer={(row) => (
              <Cell>
                {`${formatNumber((items[row]?.service_overlap || 0) * 100, 0)}%`}
              </Cell>
            )}
          />
          <Column
            name="Zanik Gaussa"
            cellRenderer={(row) => (
              <Cell>
                {formatNumber(items[row]?.spatial_decay, 2)}
              </Cell>
            )}
          />
          <Column
            name="Kanibalizacja Popytu"
            cellRenderer={(row) => (
              <Cell>
                {formatNumber(items[row]?.demand_cannibalization, 2)}
              </Cell>
            )}
          />
        </Table2>
      </div>
    </div>
  );
}
