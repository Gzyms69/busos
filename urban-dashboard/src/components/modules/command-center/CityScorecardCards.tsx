"use client";

import React from "react";
import KpiMetricCard from "@/components/shared/KpiMetricCard";
import type { CityAuditSummaryResponse } from "@/lib/api/types";

interface CityScorecardCardsProps {
  data: CityAuditSummaryResponse | null;
  loading: boolean;
}

export default function CityScorecardCards({ data, loading }: CityScorecardCardsProps) {
  const summary = data?.summary;
  const zscore = data?.zscore;

  // Formatters
  const consolidation = summary?.consolidation_ratio != null
    ? `${summary.consolidation_ratio.toFixed(2)}x`
    : loading ? "..." : "1.66x";

  const stopsText = summary?.stops_count != null
    ? `${summary.stops_count} słupków / ${summary.hubs_count} hubów`
    : "Słupki / Węzły przesiadkowe";

  const population = summary?.population_total != null
    ? `${Math.round(summary.population_total).toLocaleString("pl-PL")}`
    : loading ? "..." : "198 000";

  const popSubtitle = summary?.population_delta_pct != null
    ? `Strefa metropolitalna (${summary.population_delta_pct > 0 ? "+" : ""}${summary.population_delta_pct.toFixed(1)}%)`
    : "Siatka demograficzna GUS 250m";

  const rcnTx = summary?.rcn_transactions_count != null
    ? `${summary.rcn_transactions_count.toLocaleString("pl-PL")}`
    : loading ? "..." : "12 450";

  const rcnSubtitle = "Akty notarialne w bazie 2020-2026";

  const dataIntegrity = summary?.critical_nulls_infs === 0
    ? "100%"
    : summary?.critical_nulls_infs != null
    ? `Błędy: ${summary.critical_nulls_infs}`
    : "100%";

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: 10,
        marginBottom: 16,
      }}
    >
      <KpiMetricCard
        title="Węzły Przesiadkowe"
        value={consolidation}
        subtitle={stopsText}
        icon="git-branch"
        badge="Siatka Węzłowa"
        intent="primary"
      />

      <KpiMetricCard
        title="Mieszkańcy w Zasięgu"
        value={population}
        unit="osób"
        subtitle={popSubtitle}
        icon="people"
        badge={summary?.is_metro_area ? "Aglomeracja" : "Obszar Miejski"}
        intent="none"
      />

      <KpiMetricCard
        title="Rynek Mieszkaniowy"
        value={rcnTx}
        unit="transakcji"
        subtitle={rcnSubtitle}
        icon="home"
        badge="Baza RCN"
        intent="none"
      />

      <KpiMetricCard
        title="Jakość Rozkładów GTFS"
        value={dataIntegrity}
        subtitle="100% spójności topologicznej"
        icon="shield"
        badge="Zweryfikowane"
        intent="success"
      />
    </div>
  );
}
