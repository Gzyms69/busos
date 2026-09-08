"use client";

import React, { useState, useEffect } from "react";
import { useFoundryStore } from "@/lib/store";
import { fetchMarketSummary } from "@/lib/api";
import type { MarketSummaryResponse } from "@/lib/api/types";
import KpiMetricCard from "@/components/shared/KpiMetricCard";
import { formatPLN, formatNumber } from "@/lib/utils/formatters";

export default function MarketKpiCards() {
  const { selectedCity } = useFoundryStore();
  const [summary, setSummary] = useState<MarketSummaryResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!selectedCity) return;
    const controller = new AbortController();
    setLoading(true);

    fetchMarketSummary(selectedCity, controller.signal)
      .then((res) => {
        if (!controller.signal.aborted) {
          setSummary(res);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (err?.name !== "AbortError") {
          console.warn("Market summary error:", err);
          setLoading(false);
        }
      });

    return () => controller.abort();
  }, [selectedCity]);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 12,
        marginBottom: 16,
      }}
    >
      <KpiMetricCard
        title="Mediana Cen M² (RCN)"
        value={loading ? "..." : formatPLN(summary?.median_price_m2, true)}
        subtitle="Czysty wolny rynek mieszkań"
        icon="home"
        intent="primary"
        badge={selectedCity.toUpperCase()}
      />

      <KpiMetricCard
        title="Średnia Ucięta (IQR)"
        value={loading ? "..." : formatPLN(summary?.trimmed_mean_m2, true)}
        subtitle="Po odrzuceniu anomalii skrajnych"
        icon="calculator"
        intent="none"
      />

      <KpiMetricCard
        title="Wolumen Transakcji"
        value={loading ? "..." : formatNumber(summary?.valid ?? summary?.total, 0)}
        unit="aktów"
        subtitle={`Zarejestrowano łącznie: ${formatNumber(summary?.total, 0)}`}
        icon="database"
        intent="success"
      />

      <KpiMetricCard
        title="Korytarz Cenowy"
        value={
          loading
            ? "..."
            : `${formatNumber(summary?.min_valid, 0)} - ${formatNumber(summary?.max_allowed, 0)}`
        }
        unit="PLN/m²"
        subtitle="Dopuszczalny przedział rynkowy"
        icon="arrows-horizontal"
        intent="warning"
      />
    </div>
  );
}
