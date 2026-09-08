"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Table2, Column, Cell, ColumnHeaderCell, TruncatedFormat } from "@blueprintjs/table";
import { Tag, Spinner, Button, ButtonGroup } from "@blueprintjs/core";
import { useFoundryStore } from "@/lib/store";
import { fetchRouteEdges } from "@/lib/api";
import type { NetworkEdgeItem } from "@/lib/api/types";
import { formatNumber, formatSpeed, formatDistance, formatDuration } from "@/lib/utils/formatters";
import DataExportMenu from "@/components/shared/DataExportMenu";

export default function RouteSpeedGrid() {
  const { selectedCity, activeRouteUid } = useFoundryStore();

  const [edges, setEdges] = useState<NetworkEdgeItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [scope, setScope] = useState<"route" | "all">(activeRouteUid ? "route" : "all");
  const [sortCol, setSortCol] = useState<"speed_kmh" | "distance_m" | "avg_travel_time_sec">("speed_kmh");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  const loadData = useCallback(() => {
    const controller = new AbortController();
    setLoading(true);

    const targetRoute = scope === "route" && activeRouteUid ? activeRouteUid : undefined;

    fetchRouteEdges(selectedCity, targetRoute, controller.signal)
      .then((res) => {
        if (!controller.signal.aborted) {
          setEdges(res || []);
          setLoading(false);
        }
      })
      .catch((e) => {
        if (e?.name !== "AbortError") {
          setLoading(false);
        }
      });

    return () => controller.abort();
  }, [selectedCity, scope, activeRouteUid]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  // Sorting
  const sortedEdges = [...edges].sort((a, b) => {
    const va = a[sortCol] ?? 0;
    const vb = b[sortCol] ?? 0;
    return sortDir === "asc" ? va - vb : vb - va;
  });

  const handleSort = (col: "speed_kmh" | "distance_m" | "avg_travel_time_sec") => {
    if (sortCol === col) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortCol(col);
      setSortDir("asc");
    }
  };

  // Export
  const exportHeaders = [
    "From Stop ID",
    "From Stop Name",
    "To Stop ID",
    "To Stop Name",
    "Route UID",
    "Speed (km/h)",
    "Distance (m)",
    "Travel Time (sec)",
    "Is Real LRS",
  ];

  const getExportRows = () => {
    return sortedEdges.map((e) => [
      e.from_stop_id,
      e.from_stop_name || e.from_stop_id,
      e.to_stop_id,
      e.to_stop_name || e.to_stop_id,
      e.route_uid,
      e.speed_kmh,
      e.distance_m,
      e.avg_travel_time_sec,
      e.is_distance_real ? "TAK" : "NIE",
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
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 11, color: "#8f99a8" }}>Zakres krawędzi:</span>
          <ButtonGroup size="small">
            <Button
              active={scope === "route"}
              disabled={!activeRouteUid}
              intent={scope === "route" ? "primary" : "none"}
              onClick={() => setScope("route")}
              style={{ fontSize: 10 }}
            >
              Wybrana linia ({activeRouteUid || "brak"})
            </Button>
            <Button
              active={scope === "all"}
              intent={scope === "all" ? "primary" : "none"}
              onClick={() => setScope("all")}
              style={{ fontSize: 10 }}
            >
              Wszystkie linie (Całe miasto)
            </Button>
          </ButtonGroup>
        </div>

        <DataExportMenu
          filename={`busos_${selectedCity}_route_speeds`}
          headers={exportHeaders}
          rows={getExportRows}
          rawJsonData={() => sortedEdges}
        />
      </div>

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
          Liczba odcinków tras: <strong>{sortedEdges.length}</strong>
        </div>
        {loading && (
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <Spinner size={12} />
            <span>Pobieranie prędkości na odcinkach...</span>
          </div>
        )}
      </div>

      {/* Virtualized Table2 */}
      <div style={{ flex: 1, minHeight: 320, overflow: "hidden", position: "relative" }}>
        <Table2
          numRows={sortedEdges.length}
          enableRowReordering={false}
          enableColumnReordering={false}
          defaultRowHeight={28}
        >
          <Column
            name="Odcinek Międzyprzystankowy"
            cellRenderer={(row) => {
              const e = sortedEdges[row];
              return (
                <Cell>
                  <div style={{ textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>
                    <span style={{ color: "#f6f7f9" }}>{e.from_stop_name || e.from_stop_id}</span>
                    <span style={{ color: "#8f99a8", margin: "0 6px" }}>→</span>
                    <span style={{ color: "#2b95d6" }}>{e.to_stop_name || e.to_stop_id}</span>
                  </div>
                </Cell>
              );
            }}
          />
          <Column
            name="Linia"
            cellRenderer={(row) => (
              <Cell>
                <Tag minimal intent="primary" style={{ fontSize: 10 }}>
                  {sortedEdges[row]?.route_uid}
                </Tag>
              </Cell>
            )}
          />
          <Column
            name="Prędkość handlowa"
            columnHeaderCellRenderer={() => (
              <ColumnHeaderCell
                name="Prędkość handlowa"
                menuIcon={sortCol === "speed_kmh" ? (sortDir === "asc" ? "sort-asc" : "sort-desc") : undefined}
                nameRenderer={() => (
                  <span
                    onClick={() => handleSort("speed_kmh")}
                    style={{ cursor: "pointer", display: "inline-block", width: "100%" }}
                  >
                    Prędkość handlowa
                  </span>
                )}
              />
            )}
            cellRenderer={(row) => {
              const spd = sortedEdges[row]?.speed_kmh;
              const isBottleneck = spd != null && spd < 15;
              const isFast = spd != null && spd > 25;
              return (
                <Cell>
                  <span
                    style={{
                      fontWeight: 800,
                      color: isBottleneck ? "#db3737" : isFast ? "#0f9960" : "#d9822b",
                    }}
                  >
                    {formatSpeed(spd)}
                  </span>
                  {isBottleneck && (
                    <Tag minimal intent="danger" style={{ fontSize: 8, marginLeft: 6, padding: "0 3px" }}>
                      WĄSKIE GARDŁO
                    </Tag>
                  )}
                </Cell>
              );
            }}
          />
          <Column
            name="Czas netto Δt"
            columnHeaderCellRenderer={() => (
              <ColumnHeaderCell
                name="Czas netto Δt"
                menuIcon={sortCol === "avg_travel_time_sec" ? (sortDir === "asc" ? "sort-asc" : "sort-desc") : undefined}
                nameRenderer={() => (
                  <span
                    onClick={() => handleSort("avg_travel_time_sec")}
                    style={{ cursor: "pointer", display: "inline-block", width: "100%" }}
                  >
                    Czas netto Δt
                  </span>
                )}
              />
            )}
            cellRenderer={(row) => (
              <Cell>
                <strong>{formatDuration(sortedEdges[row]?.avg_travel_time_sec)}</strong>
              </Cell>
            )}
          />
          <Column
            name="Dystans drogowy"
            columnHeaderCellRenderer={() => (
              <ColumnHeaderCell
                name="Dystans drogowy"
                menuIcon={sortCol === "distance_m" ? (sortDir === "asc" ? "sort-asc" : "sort-desc") : undefined}
                nameRenderer={() => (
                  <span
                    onClick={() => handleSort("distance_m")}
                    style={{ cursor: "pointer", display: "inline-block", width: "100%" }}
                  >
                    Dystans drogowy
                  </span>
                )}
              />
            )}
            cellRenderer={(row) => (
              <Cell>
                {formatDistance(sortedEdges[row]?.distance_m)}
              </Cell>
            )}
          />
          <Column
            name="Jakość LRS"
            cellRenderer={(row) => (
              <Cell>
                <Tag minimal intent={sortedEdges[row]?.is_distance_real ? "success" : "none"} style={{ fontSize: 9 }}>
                  {sortedEdges[row]?.is_distance_real ? "SHAPES LRS" : "INTERPOLACJA"}
                </Tag>
              </Cell>
            )}
          />
        </Table2>
      </div>
    </div>
  );
}
