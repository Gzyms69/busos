"use client";

import React, { useState, useEffect } from "react";
import { Card, HTMLSelect, Tag, Spinner } from "@blueprintjs/core";
import { useFoundryStore } from "@/lib/store";
import { fetchCityComparison } from "@/lib/api";
import type { CityComparisonResponse } from "@/lib/api/types";
import { formatNumber, formatPLN } from "@/lib/utils/formatters";

export default function CityComparisonView() {
  const { selectedCity, availableCities } = useFoundryStore();
  const [cityA, setCityA] = useState<string>(selectedCity);
  const [cityB, setCityB] = useState<string>(selectedCity === "warszawa" ? "krakow" : "warszawa");
  const [comparison, setComparison] = useState<CityComparisonResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Sync cityA when selectedCity changes
  useEffect(() => {
    if (selectedCity && selectedCity !== cityA) {
      setCityA(selectedCity);
    }
  }, [selectedCity, cityA]);

  useEffect(() => {
    if (!cityA || !cityB) return;
    const controller = new AbortController();
    setLoading(true);

    fetchCityComparison(cityA, cityB, controller.signal)
      .then((res) => {
        if (!controller.signal.aborted) {
          setComparison(res);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (err?.name !== "AbortError") {
          console.warn("City comparison error:", err);
          setLoading(false);
        }
      });

    return () => controller.abort();
  }, [cityA, cityB]);

  const metrics = [
    {
      key: "stops_count",
      label: "Fizyczne Słupki Przystankowe",
      formatter: (v: any) => formatNumber(v, 0),
      unit: "słupków",
    },
    {
      key: "hubs_count",
      label: "Logiczne Węzły Makro",
      formatter: (v: any) => formatNumber(v, 0),
      unit: "hubów",
    },
    {
      key: "consolidation_ratio",
      label: "Wskaźnik Konsolidacji Sieci",
      formatter: (v: any) => `${formatNumber(v, 2)} sł/hub`,
      unit: "",
    },
    {
      key: "population_total",
      label: "Popyt Demograficzny (GUS 250m)",
      formatter: (v: any) => formatNumber(v, 0),
      unit: "mieszkańców",
    },
    {
      key: "rcn_median_price_m2",
      label: "Mediana Cen Mieszkań (RCN)",
      formatter: (v: any) => formatPLN(v, true),
      unit: "",
    },
    {
      key: "rcn_transactions_count",
      label: "Zarejestrowane Akty Notarialne",
      formatter: (v: any) => formatNumber(v, 0),
      unit: "transakcji",
    },
  ];

  const cA = (comparison?.city_a as any) || {};
  const cB = (comparison?.city_b as any) || {};
  const deltas = (comparison?.deltas as any) || {};

  return (
    <div
      style={{
        background: "#1c2127",
        border: "1px solid #2f343c",
        borderRadius: 6,
        padding: 16,
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      {/* Header and City Selectors */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
          paddingBottom: 12,
          borderBottom: "1px solid #2f343c",
        }}
      >
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#f6f7f9" }}>
            Porównywarka Metryczna Side-by-Side
          </div>
          <div style={{ fontSize: 11, color: "#8f99a8" }}>
            Zestawienie parametrów infrastrukturalnych, demograficznych i rynkowych dwóch aglomeracji
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ fontSize: 11, color: "#2b95d6", fontWeight: 700 }}>Miasto A:</span>
            <HTMLSelect
              value={cityA}
              onChange={(e) => setCityA(e.target.value)}
              style={{ fontSize: 11 }}
            >
              {availableCities.map((c) => (
                <option key={`a-${c}`} value={c}>
                  {c.toUpperCase()}
                </option>
              ))}
            </HTMLSelect>
          </div>

          <span style={{ color: "#636e7b", fontWeight: 700 }}>VS</span>

          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ fontSize: 11, color: "#15b371", fontWeight: 700 }}>Miasto B:</span>
            <HTMLSelect
              value={cityB}
              onChange={(e) => setCityB(e.target.value)}
              style={{ fontSize: 11 }}
            >
              {availableCities.map((c) => (
                <option key={`b-${c}`} value={c}>
                  {c.toUpperCase()}
                </option>
              ))}
            </HTMLSelect>
          </div>
        </div>
      </div>

      {/* Comparison Grid */}
      {loading ? (
        <div
          style={{
            height: 240,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            color: "#8f99a8",
            fontSize: 12,
          }}
        >
          <Spinner size={24} />
          <span>Generowanie analizy porównawczej miast...</span>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {metrics.map((m) => {
            const valA = cA[m.key];
            const valB = cB[m.key];
            const deltaPct = deltas[`${m.key}_delta_pct`] ?? deltas[m.key];

            return (
              <Card
                key={m.key}
                style={{
                  background: "#181c20",
                  border: "1px solid #2f343c",
                  borderRadius: 6,
                  padding: "10px 14px",
                  display: "grid",
                  gridTemplateColumns: "220px 1fr 100px 1fr",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                {/* Metric Label */}
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#f6f7f9" }}>{m.label}</div>
                  <div style={{ fontSize: 10, color: "#8f99a8" }}>{m.unit}</div>
                </div>

                {/* Value City A */}
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 16, fontWeight: 800, color: "#2b95d6" }}>
                    {m.formatter(valA)}
                  </div>
                  <div style={{ fontSize: 9, color: "#8f99a8" }}>{cityA.toUpperCase()}</div>
                </div>

                {/* Delta Pill */}
                <div style={{ textAlign: "center" }}>
                  {deltaPct != null && Number.isFinite(deltaPct) ? (
                    <Tag
                      minimal
                      intent={deltaPct > 0 ? "success" : deltaPct < 0 ? "danger" : "none"}
                      style={{ fontSize: 10, fontWeight: 700 }}
                    >
                      {deltaPct > 0 ? `+${deltaPct.toFixed(1)}%` : `${deltaPct.toFixed(1)}%`}
                    </Tag>
                  ) : (
                    <span style={{ fontSize: 10, color: "#636e7b" }}>—</span>
                  )}
                </div>

                {/* Value City B */}
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontSize: 16, fontWeight: 800, color: "#15b371" }}>
                    {m.formatter(valB)}
                  </div>
                  <div style={{ fontSize: 9, color: "#8f99a8" }}>{cityB.toUpperCase()}</div>
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
