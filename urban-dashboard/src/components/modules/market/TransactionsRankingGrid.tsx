"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Table2, Column, Cell, ColumnHeaderCell, TruncatedFormat } from "@blueprintjs/table";
import { Button, ButtonGroup, HTMLSelect, InputGroup, Tag, Spinner } from "@blueprintjs/core";
import { useFoundryStore } from "@/lib/store";
import { fetchMarketTransactionsRanking } from "@/lib/api";
import type { MarketTransactionItem } from "@/lib/api/types";
import DataExportMenu from "@/components/shared/DataExportMenu";
import { formatPLN, formatNumber } from "@/lib/utils/formatters";

export default function TransactionsRankingGrid() {
  const { selectedCity, setViewState } = useFoundryStore();
  const [items, setItems] = useState<MarketTransactionItem[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [offset, setOffset] = useState<number>(0);
  const [orderBy, setOrderBy] = useState<string>("price_m2");
  const [orderDir, setOrderDir] = useState<"asc" | "desc">("desc");
  const [marketType, setMarketType] = useState<string>("all");
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");
  const limit = 100;

  const loadData = useCallback(() => {
    if (!selectedCity) return;
    const controller = new AbortController();
    setLoading(true);

    fetchMarketTransactionsRanking(
      {
        city: selectedCity,
        order_by: orderBy,
        order_dir: orderDir,
        limit,
        offset,
        market_type: marketType === "all" ? undefined : marketType,
        min_price_m2: minPrice ? Number(minPrice) : undefined,
        max_price_m2: maxPrice ? Number(maxPrice) : undefined,
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
      .catch((err) => {
        if (err?.name !== "AbortError") {
          console.warn("Market transactions ranking error:", err);
          setLoading(false);
        }
      });

    return () => controller.abort();
  }, [selectedCity, orderBy, orderDir, offset, marketType, minPrice, maxPrice]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleSort = (col: string) => {
    if (orderBy === col) {
      setOrderDir(orderDir === "asc" ? "desc" : "asc");
    } else {
      setOrderBy(col);
      setOrderDir("desc");
    }
    setOffset(0);
  };

  const renderSortHeader = (col: string, name: string) => {
    const isSorted = orderBy === col;
    return (
      <ColumnHeaderCell
        name={name}
        menuIcon={isSorted ? (orderDir === "asc" ? "sort-asc" : "sort-desc") : undefined}
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
            {isSorted && <span>{orderDir === "asc" ? "↑" : "↓"}</span>}
          </div>
        )}
      />
    );
  };

  const handleRowClick = (item: MarketTransactionItem) => {
    if (item.lat && item.lon) {
      setViewState({
        latitude: item.lat,
        longitude: item.lon,
        zoom: 16,
      });
    }
  };

  const currentPage = Math.floor(offset / limit) + 1;
  const totalPages = Math.ceil(total / limit) || 1;

  return (
    <div
      style={{
        background: "#1c2127",
        border: "1px solid #2f343c",
        borderRadius: 6,
        padding: 16,
        display: "flex",
        flexDirection: "column",
        height: 520,
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
          <HTMLSelect
            value={marketType}
            onChange={(e) => {
              setMarketType(e.target.value);
              setOffset(0);
            }}
            style={{ fontSize: 11 }}
          >
            <option value="all">Wszystkie rynki</option>
            <option value="pierwotny">Rynek pierwotny</option>
            <option value="wtorny">Rynek wtórny</option>
          </HTMLSelect>

          <InputGroup
            placeholder="Min PLN/m²"
            value={minPrice}
            onChange={(e) => {
              setMinPrice(e.target.value);
              setOffset(0);
            }}
            style={{ width: 110, fontSize: 11 }}
            small
          />

          <InputGroup
            placeholder="Max PLN/m²"
            value={maxPrice}
            onChange={(e) => {
              setMaxPrice(e.target.value);
              setOffset(0);
            }}
            style={{ width: 110, fontSize: 11 }}
            small
          />

          <Tag minimal style={{ fontSize: 11, color: "#8f99a8" }}>
            {formatNumber(total, 0)} aktów notarialnych
          </Tag>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
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

          <DataExportMenu
            filename={`akty_notarialne_${selectedCity}`}
            headers={[
              "rank",
              "date",
              "price_m2",
              "total_price",
              "area_m2",
              "market_type",
              "address",
              "floor",
              "rooms",
            ]}
            rows={items.map((it) => [
              it.rank ?? "",
              it.date || it.dok_data || "",
              it.price_m2,
              it.total_price ?? "",
              it.area_m2 ?? "",
              it.market_type || it.tran_rodzaj_rynku || "",
              it.address ?? "",
              it.floor ?? "",
              it.rooms ?? "",
            ])}
            rawJsonData={items}
          />
        </div>
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
            <span>Pobieranie rejestru aktów notarialnych RCN...</span>
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
            Brak transakcji spełniających kryteria
          </div>
        ) : (
          <Table2
            numRows={items.length}
            defaultRowHeight={28}
            enableRowReordering={false}
            enableColumnReordering={false}
          >
            <Column
              name="#"
              columnHeaderCellRenderer={() => renderSortHeader("rank", "#")}
              cellRenderer={(rowIndex) => {
                const it = items[rowIndex];
                return (
                  <Cell style={{ fontSize: 10, color: "#8f99a8", textAlign: "center" }}>
                    {it.rank ?? offset + rowIndex + 1}
                  </Cell>
                );
              }}
            />

            <Column
              name="Cena M²"
              columnHeaderCellRenderer={() => renderSortHeader("price_m2", "Cena PLN/m²")}
              cellRenderer={(rowIndex) => {
                const it = items[rowIndex];
                return (
                  <Cell>
                    <div
                      style={{ fontSize: 11, fontWeight: 700, color: "#2b95d6", cursor: "pointer" }}
                      onClick={() => handleRowClick(it)}
                    >
                      {formatPLN(it.price_m2, true)}
                    </div>
                  </Cell>
                );
              }}
            />

            <Column
              name="Kwota Całkowita"
              columnHeaderCellRenderer={() => renderSortHeader("total_price", "Kwota Całkowita")}
              cellRenderer={(rowIndex) => {
                const it = items[rowIndex];
                return (
                  <Cell style={{ fontSize: 11, color: "#f6f7f9" }}>
                    {formatPLN(it.total_price)}
                  </Cell>
                );
              }}
            />

            <Column
              name="Metraż"
              columnHeaderCellRenderer={() => renderSortHeader("area_m2", "Metraż")}
              cellRenderer={(rowIndex) => {
                const it = items[rowIndex];
                return (
                  <Cell style={{ fontSize: 11, color: "#f6f7f9" }}>
                    {it.area_m2 ? `${formatNumber(it.area_m2, 1)} m²` : "—"}
                  </Cell>
                );
              }}
            />

            <Column
              name="Rynek"
              columnHeaderCellRenderer={() => <ColumnHeaderCell name="Rynek" />}
              cellRenderer={(rowIndex) => {
                const it = items[rowIndex];
                const mType = it.market_type || it.tran_rodzaj_rynku || "—";
                return (
                  <Cell style={{ fontSize: 10 }}>
                    <Tag minimal intent={mType === "pierwotny" ? "success" : "none"} style={{ fontSize: 10 }}>
                      {mType}
                    </Tag>
                  </Cell>
                );
              }}
            />

            <Column
              name="Data Aktu"
              columnHeaderCellRenderer={() => renderSortHeader("dok_data", "Data Aktu")}
              cellRenderer={(rowIndex) => {
                const it = items[rowIndex];
                return (
                  <Cell style={{ fontSize: 11, color: "#8f99a8" }}>
                    {it.date || it.dok_data || "—"}
                  </Cell>
                );
              }}
            />

            <Column
              name="Lokalizacja / Adres"
              columnHeaderCellRenderer={() => <ColumnHeaderCell name="Adres / Opis" />}
              cellRenderer={(rowIndex) => {
                const it = items[rowIndex];
                return (
                  <Cell style={{ fontSize: 11, color: "#8f99a8" }}>
                    <TruncatedFormat>{it.address || `Koordynaty: ${it.lat?.toFixed(4)}, ${it.lon?.toFixed(4)}`}</TruncatedFormat>
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
