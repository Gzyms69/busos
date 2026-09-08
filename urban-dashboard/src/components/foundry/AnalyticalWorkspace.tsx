"use client";

import React from "react";
import { useFoundryStore } from "@/lib/store";
import CommandCenterModule from "@/components/modules/command-center/CommandCenterModule";
import NetworkModule from "@/components/modules/network/NetworkModule";
import OptimizationModule from "@/components/modules/optimization/OptimizationModule";
import RoutesModule from "@/components/modules/routes/RoutesModule";
import MarketModule from "@/components/modules/market/MarketModule";
import BenchmarkModule from "@/components/modules/benchmark/BenchmarkModule";
import EmptyStateView from "@/components/shared/EmptyStateView";

export default function AnalyticalWorkspace() {
  const { activeModule, setActiveModule, selectedCity } = useFoundryStore();

  if (activeModule === "command-center") {
    return <CommandCenterModule />;
  }

  if (activeModule === "network") {
    return <NetworkModule />;
  }

  if (activeModule === "optimization") {
    return <OptimizationModule />;
  }

  if (activeModule === "routes") {
    return <RoutesModule />;
  }

  if (activeModule === "market") {
    return <MarketModule />;
  }

  if (activeModule === "benchmark") {
    return <BenchmarkModule />;
  }

  const moduleNames: Record<string, { name: string; session: string; desc: string }> = {
    network: {
      name: "Network Explorer",
      session: "Sesja 4.2",
      desc: "Wirtualizowany DataGrid Table2 dla 60k słupków i 28k hubów, wyszukiwarka POI DuckDB pushdown, linked cross-filtering.",
    },
    optimization: {
      name: "Optimization & Policy",
      session: "Sesja 4.2",
      desc: "The Axe List TCRP 100 z kalkulatorem oszczędności PLN oraz The Investment List (Pustynie TDI w siatce H3).",
    },
    routes: {
      name: "Route Analyzer",
      session: "Sesja 4.2",
      desc: "Katalog linii GTFS, wertykalny stepper przystanków z LRS, czasy netto i analiza prędkości handlowych na krawędziach.",
    },
    market: {
      name: "Market Intel",
      session: "Sesja 4.3",
      desc: "Wycena transakcji notarialnych RCN, trendy cenowe kwartalne 2020–2026, mostek DuckDB w 15ms.",
    },
    benchmark: {
      name: "Benchmarking Krajowy",
      session: "Sesja 4.3",
      desc: "Ogólnopolski Leaderboard 30 aglomeracji, porównywarka side-by-side oraz histogramy rozkładu kwantylowego.",
    },
  };

  const current = moduleNames[activeModule] || {
    name: "Moduł Analityczny",
    session: "Wkrótce",
    desc: "Specyfikacja zdefiniowana w PLAN_FRONTEND.md",
  };

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 32,
        background: "#1c2127",
      }}
    >
      <EmptyStateView
        icon="build"
        title={`${current.name} [${current.session}]`}
        description={`${current.desc} Aktywne miasto: ${selectedCity.toUpperCase()}.`}
        actionText="Wróć do Command Center"
        onAction={() => setActiveModule("command-center")}
      />
    </div>
  );
}
