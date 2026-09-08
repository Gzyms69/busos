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
      name: "Przystanki i Węzły",
      session: "Moduł 2",
      desc: "Wyszukiwanie przystanków i węzłów przesiadkowych, linked cross-filtering i parametry.",
    },
    optimization: {
      name: "Optymalizacja Sieci",
      session: "Moduł 3",
      desc: "Identyfikacja dublujących się przystanków oraz analiza białych plam transportowych.",
    },
    routes: {
      name: "Linie i Rozkłady",
      session: "Moduł 4",
      desc: "Katalog linii GTFS, wertykalny przebieg trasy, czasy przejazdu i analiza prędkości handlowych.",
    },
    market: {
      name: "Rynek Nieruchomości",
      session: "Moduł 5",
      desc: "Wyceny mieszkań przy przystankach, trendy cenowe kwartalne 2020–2026 i transakcje notarialne.",
    },
    benchmark: {
      name: "Ranking Miast",
      session: "Moduł 6",
      desc: "Ogólnopolski ranking 30 aglomeracji, porównywarka miast oraz histogramy wskaźników.",
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
