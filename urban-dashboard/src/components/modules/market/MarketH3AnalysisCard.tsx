"use client";

import React, { useState, useEffect } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Cell,
} from "recharts";
import { Spinner, Tag } from "@blueprintjs/core";
import { useFoundryStore } from "@/lib/store";
import { fetchMarketH3Analysis } from "@/lib/api";
import type { MarketH3AnalysisResponse } from "@/lib/api/types";
import KpiMetricCard from "@/components/shared/KpiMetricCard";
import { formatNumber } from "@/lib/utils/formatters";

export default function MarketH3AnalysisCard() {
  const { selectedCity } = useFoundryStore();
  const [data, setData] = useState<MarketH3AnalysisResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!selectedCity) return;
    const controller = new AbortController();
    setLoading(true);

    fetchMarketH3Analysis(selectedCity, controller.signal)
      .then((res) => {
        if (!controller.signal.aborted) {
          setData(res);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (err?.name !== "AbortError") {
          console.warn("Market H3 analysis error:", err);
          setLoading(false);
        }
      });

    return () => controller.abort();
  }, [selectedCity]);

  const brackets = data?.price_brackets || [];

  return (
    <div
      style={{
        background: "#1c2127",
        border: "1px solid #2f343c",
        borderRadius: 6,
        padding: 16,
        marginBottom: 16,
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: 14 }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: "#f6f7f9" }}>
          Przestrzenna Analiza Heksów Uber H3 (Res 8) & Rynek Nieruchomości
        </div>
        <div style={{ fontSize: 11, color: "#8f99a8" }}>
          Agregacja cen notarialnych w komórkach 0.74 km² oraz korelacja Pearsona z podażą transportu
        </div>
      </div>

      {/* KPI Cards Row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 10,
          marginBottom: 16,
        }}
      >
        <KpiMetricCard
          title="Pokrycie Przestrzenne"
          value={loading ? "..." : `${data?.coverage_pct?.toFixed(1) ?? "—"}%`}
          subtitle={`${data?.cells_with_rcn ?? 0} z ${data?.total_cells ?? 0} heksów z transakcjami`}
          icon="map"
          intent="primary"
        />

        <KpiMetricCard
          title="Korelacja z Transportem"
          value={loading ? "..." : (data?.transport_correlation != null ? data.transport_correlation.toFixed(3) : "—")}
          subtitle="Współczynnik Pearsona: Ceny mieszkań vs Transport"
          icon="trending-up"
          intent={
            data?.transport_correlation != null && data.transport_correlation > 0.3
              ? "success"
              : "warning"
          }
        />

        <KpiMetricCard
          title="Próbkowanie H3"
          value={loading ? "..." : formatNumber(data?.cells_with_rcn, 0)}
          unit="komórek"
          subtitle="Rozdzielczość Uber H3 Resolution 8"
          icon="grid"
          intent="none"
        />
      </div>

      {/* Price Brackets Bar Chart */}
      <div style={{ width: "100%", height: 220, position: "relative" }}>
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
            <Spinner size={20} />
            <span>Obliczanie rozkładu cen w siatce H3...</span>
          </div>
        ) : brackets.length === 0 ? (
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
            Brak danych o przedziałach cenowych H3
          </div>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={brackets} margin={{ top: 10, right: 10, bottom: 20, left: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a3038" vertical={false} />
              <XAxis
                dataKey="bracket"
                stroke="#636e7b"
                tick={{ fill: "#8f99a8", fontSize: 10 }}
                axisLine={{ stroke: "#2f343c" }}
              />
              <YAxis
                stroke="#636e7b"
                tick={{ fill: "#8f99a8", fontSize: 10 }}
                axisLine={{ stroke: "#2f343c" }}
                tickFormatter={(v) => `${v}`}
              />
              <Tooltip
                contentStyle={{
                  background: "#181c20",
                  border: "1px solid #383e47",
                  borderRadius: 6,
                  fontSize: 11,
                  color: "#f6f7f9",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.5)",
                }}
                formatter={(val: any, _name: any, item: any) => [
                  `${val} komórek (${item?.payload?.percentage?.toFixed(1)}%)`,
                  "Liczba heksów",
                ]}
              />
              <Bar dataKey="count" name="Komórki H3" radius={[4, 4, 0, 0]}>
                {brackets.map((_entry, index) => {
                  const colors = ["#2b95d6", "#15b371", "#d9822b", "#db3737", "#8f99a8", "#636e7b"];
                  return <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />;
                })}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
}
