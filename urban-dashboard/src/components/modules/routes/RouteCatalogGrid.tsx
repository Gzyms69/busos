"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Table2, Column, Cell, ColumnHeaderCell, TruncatedFormat } from "@blueprintjs/table";
import { Button, ButtonGroup, InputGroup, Tag, Spinner } from "@blueprintjs/core";
import { useFoundryStore } from "@/lib/store";
import { fetchRoutes } from "@/lib/api";
import type { RouteItem } from "@/lib/api/types";
import { formatNumber, formatSpeed } from "@/lib/utils/formatters";
import DataExportMenu from "@/components/shared/DataExportMenu";

interface RouteCatalogGridProps {
  onRouteSelect?: (route: RouteItem) => void;
}

export default function RouteCatalogGrid({ onRouteSelect }: RouteCatalogGridProps) {
  const { selectedCity, activeRouteUid, setActiveRoute } = useFoundryStore();

  const [items, setItems] = useState<RouteItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [typeFilter, setTypeFilter] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const loadData = useCallback(() => {
    const controller = new AbortController();
    setLoading(true);

    fetchRoutes(
      {
        city: selectedCity,
        route_type: typeFilter != null ? typeFilter : undefined,
        canonical_only: true,
      },
      controller.signal
    )
      .then((res) => {
        if (!controller.signal.aborted) {
          setItems(res || []);
          setLoading(false);
        }
      })
      .catch((e) => {
        if (e?.name !== "AbortError") {
          setLoading(false);
        }
      });

    return () => controller.abort();
  }, [selectedCity, typeFilter]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const filteredItems = items.filter((r) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      r.short_name?.toLowerCase().includes(q) ||
      r.long_name?.toLowerCase().includes(q) ||
      r.headsign?.toLowerCase().includes(q) ||
      r.route_id?.toLowerCase().includes(q)
    );
  });

  const handleRowClick = (rowIndex: number) => {
    const route = filteredItems[rowIndex];
    if (!route) return;
    setActiveRoute(route.route_uid, route.direction_id);
    if (onRouteSelect) onRouteSelect(route);
  };

  const getRouteTypeName = (type: number) => {
    if (type === 0) return "Tramwaj";
    if (type === 1) return "Metro";
    if (type === 2) return "Kolej";
    if (type === 3) return "Autobus";
    return "Inny";
  };

  // Export
  const exportHeaders = [
    "Route UID",
    "Line",
    "Headsign",
    "Type",
    "Daily Trips",
    "Stop Count",
    "Length (km)",
    "Travel Time (min)",
    "Commercial Speed (km/h)",
    "Peak Headway (min)",
    "Offpeak Headway (min)",
  ];

  const getExportRows = () => {
    return filteredItems.map((r) => [
      r.route_uid,
      r.short_name,
      r.headsign,
      getRouteTypeName(r.type),
      r.daily_trips,
      r.stop_count,
      r.length_km,
      r.travel_time_min,
      r.commercial_speed_kmh,
      r.peak_headway_min ?? "—",
      r.offpeak_headway_min ?? "—",
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
          {/* Transport Type Filter */}
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <span style={{ fontSize: 11, color: "#8f99a8" }}>Typ:</span>
            <ButtonGroup size="small">
              <Button
                active={typeFilter === null}
                intent={typeFilter === null ? "primary" : "none"}
                onClick={() => setTypeFilter(null)}
                style={{ fontSize: 10 }}
              >
                Wszystkie
              </Button>
              <Button
                active={typeFilter === 3}
                intent={typeFilter === 3 ? "primary" : "none"}
                onClick={() => setTypeFilter(3)}
                style={{ fontSize: 10 }}
              >
                Autobus
              </Button>
              <Button
                active={typeFilter === 0}
                intent={typeFilter === 0 ? "primary" : "none"}
                onClick={() => setTypeFilter(0)}
                style={{ fontSize: 10 }}
              >
                Tramwaj
              </Button>
              <Button
                active={typeFilter === 2}
                intent={typeFilter === 2 ? "primary" : "none"}
                onClick={() => setTypeFilter(2)}
                style={{ fontSize: 10 }}
              >
                Kolej
              </Button>
            </ButtonGroup>
          </div>

          {/* Search Filter */}
          <InputGroup
            small
            leftIcon="search"
            placeholder="Szukaj linii / kierunku..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ width: 180, fontSize: 11 }}
          />
        </div>

        {/* Export */}
        <DataExportMenu
          filename={`busos_${selectedCity}_gtfs_routes`}
          headers={exportHeaders}
          rows={getExportRows}
          rawJsonData={() => filteredItems}
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
          Liczba linii: <strong>{filteredItems.length}</strong> (kliknij wiersz, by otworzyć sekwencję i ślad na mapie)
        </div>
        {loading && (
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <Spinner size={12} />
            <span>Pobieranie rozkładu linii GTFS...</span>
          </div>
        )}
      </div>

      {/* Virtualized Table2 */}
      <div style={{ flex: 1, minHeight: 320, overflow: "hidden", position: "relative" }}>
        <Table2
          numRows={filteredItems.length}
          enableRowReordering={false}
          enableColumnReordering={false}
          defaultRowHeight={28}
          onSelection={(regions) => {
            const r = regions?.[0]?.rows?.[0];
            if (r != null) handleRowClick(r);
          }}
        >
          <Column
            name="Linia"
            cellRenderer={(row) => {
              const r = filteredItems[row];
              const isSelected = activeRouteUid === r?.route_uid;
              return (
                <Cell
                  style={{
                    backgroundColor: isSelected ? "rgba(43, 149, 214, 0.25)" : undefined,
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      padding: "1px 6px",
                      borderRadius: 3,
                      fontWeight: 800,
                      fontSize: 11,
                      backgroundColor: r?.color ? `#${r.color.replace("#", "")}` : "#2b95d6",
                      color: "#ffffff",
                      textShadow: "0 1px 2px rgba(0,0,0,0.7)",
                    }}
                  >
                    {r?.short_name || r?.route_id}
                  </span>
                </Cell>
              );
            }}
          />

          <Column
            name="Kierunek / Trasa"
            cellRenderer={(row) => (
              <Cell>
                <TruncatedFormat>
                  {filteredItems[row]?.headsign || filteredItems[row]?.long_name || "—"}
                </TruncatedFormat>
              </Cell>
            )}
          />

          <Column
            name="Środek"
            cellRenderer={(row) => (
              <Cell>
                <Tag minimal style={{ fontSize: 10 }}>
                  {getRouteTypeName(filteredItems[row]?.type)}
                </Tag>
              </Cell>
            )}
          />

          <Column
            name="Kursy/dobę"
            cellRenderer={(row) => (
              <Cell>
                <strong>{filteredItems[row]?.daily_trips || 0}</strong>
              </Cell>
            )}
          />

          <Column
            name="Przystanki"
            cellRenderer={(row) => (
              <Cell>
                {filteredItems[row]?.stop_count || 0}
              </Cell>
            )}
          />

          <Column
            name="Długość"
            cellRenderer={(row) => (
              <Cell>
                {`${formatNumber(filteredItems[row]?.length_km, 1)} km`}
              </Cell>
            )}
          />

          <Column
            name="Czas jazdy"
            cellRenderer={(row) => (
              <Cell>
                {`${formatNumber(filteredItems[row]?.travel_time_min, 0)} min`}
              </Cell>
            )}
          />

          <Column
            name="Prędkość handlowa"
            cellRenderer={(row) => {
              const spd = filteredItems[row]?.commercial_speed_kmh;
              return (
                <Cell>
                  <span style={{ color: spd && spd < 16 ? "#db3737" : "#0f9960", fontWeight: 700 }}>
                    {formatSpeed(spd)}
                  </span>
                </Cell>
              );
            }}
          />

          <Column
            name="Takt szczyt"
            cellRenderer={(row) => (
              <Cell>
                {filteredItems[row]?.peak_headway_min ? `${filteredItems[row]?.peak_headway_min} min` : "—"}
              </Cell>
            )}
          />
        </Table2>
      </div>
    </div>
  );
}
