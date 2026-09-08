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
  ReferenceLine,
} from "recharts";
import { HTMLSelect, ButtonGroup, Button, Spinner, Tag } from "@blueprintjs/core";
import { useFoundryStore } from "@/lib/store";
import { fetchMetricDistribution } from "@/lib/api";
import type { MetricDistributionResponse } from "@/lib/api/types";
import { formatNumber } from "@/lib/utils/formatters";

const METRIC_OPTIONS = [
  { value: "stop_local_score_raw", label: "Z-Score Jakości Stop DNA" },
  { value: "stop_departures_h", label: "Odjazdy w Godzinie Szczytu (kursy/h)" },
  { value: "stop_market_val", label: "Wycena Rynkowa RCN (PLN/m²)" },
  { value: "pop_total", label: "Popyt Demograficzny GUS (osoby)" },
  { value: "transit_desert_index", label: "Wskaźnik Pustyni Transportowej (TDI)" },
];

export default function MetricDistributionWidget() {
  const { selectedCity } = useFoundryStore();
  const [metric, setMetric] = useState<string>("stop_local_score_raw");
  const [scope, setScope] = useState<"city" | "all">("city");
  const [dist, setDist] = useState<MetricDistributionResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const targetCity = scope === "all" ? "all" : selectedCity;
    if (!targetCity) return;
    const controller = new AbortController();
    setLoading(true);

    fetchMetricDistribution(targetCity, metric, controller.signal)
      .then((res) => {
        if (!controller.signal.aborted) {
          setDist(res);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (err?.name !== "AbortError") {
          console.warn("Metric distribution error:", err);
          setLoading(false);
        }
      });

    return () => controller.abort();
  }, [selectedCity, metric, scope]);

  const bins = (dist?.histogram_bins || []).map((b) => ({
    label: `${formatNumber(b.bin_start, 1)} - ${formatNumber(b.bin_end, 1)}`,
    mid: (b.bin_start + b.bin_end) / 2,
    count: b.count,
  }));

  return (
    <div
      style={{
        background: "#1c2127",
        border: "1px solid #2f343c",
        borderRadius: 6,
        padding: 16,
        display: "flex",
        flexDirection: "column",
        gap: 14,
      }}
    >
      {/* Header and Controls */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#f6f7f9" }}>
            Rozkład Statystyczny & Kwantyle Metryki
          </div>
          <div style={{ fontSize: 11, color: "#8f99a8" }}>
            10-kubełkowy histogram rozkładu empirycznego oraz analiza percentylowa
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <HTMLSelect
            value={metric}
            onChange={(e) => setMetric(e.target.value)}
            style={{ fontSize: 11 }}
          >
            {METRIC_OPTIONS.map((m) => (
              <option key={m.value} value={m.value}>
                {m.label}
              </option>
            ))}
          </HTMLSelect>

          <ButtonGroup style={{ fontSize: 11 }}>
            <Button
              small
              active={scope === "city"}
              onClick={() => setScope("city")}
              text={selectedCity.toUpperCase()}
            />
            <Button
              small
              active={scope === "all"}
              onClick={() => setScope("all")}
              text="Cała Polska"
            />
          </ButtonGroup>
        </div>
      </div>

      {/* Quantiles Bar */}
      {dist && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            gap: 8,
            padding: "8px 12px",
            background: "#181c20",
            border: "1px solid #2f343c",
            borderRadius: 6,
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 9, color: "#8f99a8", textTransform: "uppercase" }}>Min</div>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#f6f7f9" }}>{formatNumber(dist.min, 1)}</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 9, color: "#8f99a8", textTransform: "uppercase" }}>P10</div>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#8f99a8" }}>{formatNumber(dist.p10, 1)}</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 9, color: "#8f99a8", textTransform: "uppercase" }}>P25 (Q1)</div>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#8f99a8" }}>{formatNumber(dist.p25, 1)}</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 9, color: "#2b95d6", textTransform: "uppercase", fontWeight: 700 }}>Mediana (Q2)</div>
            <div style={{ fontSize: 13, fontWeight: 800, color: "#2b95d6" }}>{formatNumber(dist.median, 1)}</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 9, color: "#8f99a8", textTransform: "uppercase" }}>P75 (Q3)</div>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#8f99a8" }}>{formatNumber(dist.p75, 1)}</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 9, color: "#8f99a8", textTransform: "uppercase" }}>P90</div>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#8f99a8" }}>{formatNumber(dist.p90, 1)}</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 9, color: "#8f99a8", textTransform: "uppercase" }}>Max</div>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#f6f7f9" }}>{formatNumber(dist.max, 1)}</div>
          </div>
        </div>
      )}

      {/* Histogram Canvas */}
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
            <span>Generowanie histogramu 10-kubełkowego...</span>
          </div>
        ) : bins.length === 0 ? (
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
            Brak danych rozkładu
          </div>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={bins} margin={{ top: 10, right: 10, bottom: 20, left: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a3038" vertical={false} />
              <XAxis
                dataKey="label"
                stroke="#636e7b"
                tick={{ fill: "#8f99a8", fontSize: 9 }}
                axisLine={{ stroke: "#2f343c" }}
                angle={-20}
                textAnchor="end"
                height={40}
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
                formatter={(val: any) => [`${val} obiektów`, "Częstość"]}
              />
              <Bar dataKey="count" name="Liczba obiektów" fill="#2b95d6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
}
