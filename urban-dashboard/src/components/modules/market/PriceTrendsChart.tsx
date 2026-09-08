"use client";

import React, { useState, useEffect } from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Area,
  Line,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";
import { Button, ButtonGroup, HTMLSelect, Spinner } from "@blueprintjs/core";
import { useFoundryStore } from "@/lib/store";
import { fetchMarketTrends } from "@/lib/api";
import type { MarketTrendPeriodItem } from "@/lib/api/types";
import { formatPLN, formatNumber } from "@/lib/utils/formatters";

export default function PriceTrendsChart() {
  const { selectedCity } = useFoundryStore();
  const [interval, setInterval] = useState<"quarter" | "year">("quarter");
  const [marketType, setMarketType] = useState<"all" | "pierwotny" | "wtorny">("all");
  const [periods, setPeriods] = useState<MarketTrendPeriodItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!selectedCity) return;
    const controller = new AbortController();
    setLoading(true);

    fetchMarketTrends(
      {
        city: selectedCity,
        interval,
        market_type: marketType === "all" ? undefined : marketType,
      },
      controller.signal
    )
      .then((res) => {
        if (!controller.signal.aborted) {
          setPeriods(res.periods || []);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (err?.name !== "AbortError") {
          console.warn("Market trends error:", err);
          setLoading(false);
        }
      });

    return () => controller.abort();
  }, [selectedCity, interval, marketType]);

  // Format data for chart
  const chartData = periods.map((p) => ({
    period: p.period,
    median: Math.round(p.median_price_m2),
    avg: Math.round(p.avg_price_m2),
    q1: Math.round(p.q1_price_m2),
    q3: Math.round(p.q3_price_m2),
    qBand: [Math.round(p.q1_price_m2), Math.round(p.q3_price_m2)],
    volume: p.tx_count,
  }));

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
      {/* Header and Controls */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 16,
          flexWrap: "wrap",
          gap: 8,
        }}
      >
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#f6f7f9" }}>
            Dynamika Cen Transakcyjnych RCN (2020–2026)
          </div>
          <div style={{ fontSize: 11, color: "#8f99a8" }}>
            Pasmo kwartylowe Q1–Q3, mediana cen oraz wolumen zawartych transakcji
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <HTMLSelect
            value={marketType}
            onChange={(e) => setMarketType(e.target.value as any)}
            style={{ fontSize: 11 }}
          >
            <option value="all">Wszystkie rynki</option>
            <option value="pierwotny">Rynek pierwotny</option>
            <option value="wtorny">Rynek wtórny</option>
          </HTMLSelect>

          <ButtonGroup style={{ fontSize: 11 }}>
            <Button
              small
              active={interval === "quarter"}
              onClick={() => setInterval("quarter")}
              text="Kwartalnie"
            />
            <Button
              small
              active={interval === "year"}
              onClick={() => setInterval("year")}
              text="Rocznie"
            />
          </ButtonGroup>
        </div>
      </div>

      {/* Chart Canvas */}
      <div style={{ width: "100%", height: 260, position: "relative" }}>
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
            <span>Ładowanie szeregów czasowych RCN...</span>
          </div>
        ) : chartData.length === 0 ? (
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
            Brak danych transakcyjnych dla wybranego filtru
          </div>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={chartData} margin={{ top: 10, right: 20, bottom: 0, left: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a3038" vertical={false} />
              <XAxis
                dataKey="period"
                stroke="#636e7b"
                tick={{ fill: "#8f99a8", fontSize: 10 }}
                axisLine={{ stroke: "#2f343c" }}
              />
              <YAxis
                yAxisId="price"
                stroke="#636e7b"
                tick={{ fill: "#8f99a8", fontSize: 10 }}
                tickFormatter={(val) => `${Math.round(val / 1000)}k`}
                axisLine={{ stroke: "#2f343c" }}
                domain={["auto", "auto"]}
              />
              <YAxis
                yAxisId="volume"
                orientation="right"
                stroke="#636e7b"
                tick={{ fill: "#8f99a8", fontSize: 10 }}
                axisLine={{ stroke: "#2f343c" }}
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
                formatter={(value: any, name: any) => {
                  if (name === "qBand") {
                    return [`${formatPLN(value[0])} - ${formatPLN(value[1])}`, "Pasmo Q1–Q3"];
                  }
                  if (name === "Mediana") return [formatPLN(value, true), "Mediana"];
                  if (name === "Średnia") return [formatPLN(value, true), "Średnia"];
                  if (name === "Wolumen") return [formatNumber(value, 0), "Transakcje"];
                  return [String(value), String(name ?? "")];
                }}
              />
              <Legend
                wrapperStyle={{ fontSize: 11, paddingTop: 6 }}
                formatter={(val) => <span style={{ color: "#8f99a8" }}>{val}</span>}
              />

              {/* Volume Bars */}
              <Bar
                yAxisId="volume"
                dataKey="volume"
                name="Wolumen"
                fill="#8f99a8"
                opacity={0.25}
                radius={[3, 3, 0, 0]}
              />

              {/* Interquartile Range Area */}
              <Area
                yAxisId="price"
                type="monotone"
                dataKey="qBand"
                name="Pasmo Q1–Q3"
                stroke="none"
                fill="#2b95d6"
                fillOpacity={0.15}
              />

              {/* Median Line */}
              <Line
                yAxisId="price"
                type="monotone"
                dataKey="median"
                name="Mediana"
                stroke="#2b95d6"
                strokeWidth={2.5}
                dot={{ r: 3, fill: "#2b95d6", strokeWidth: 0 }}
                activeDot={{ r: 5, fill: "#f6f7f9" }}
              />

              {/* Mean Line */}
              <Line
                yAxisId="price"
                type="monotone"
                dataKey="avg"
                name="Średnia"
                stroke="#15b371"
                strokeWidth={1.5}
                strokeDasharray="4 4"
                dot={false}
              />
            </ComposedChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
}
