"use client";

import React, { useState } from "react";
import {
  LayoutDashboard,
  ListFilter,
  BarChart3,
  Layers,
  ArrowLeft,
  ChevronDown,
} from "lucide-react";
import { useFoundryStore } from "@/lib/store";
import FloatingWindow from "./FloatingWindow";
import AgglomerationOverviewPanel from "@/components/panels/AgglomerationOverviewPanel";
import StopCatalogPanel from "@/components/panels/StopCatalogPanel";
import StopDetailPanel from "@/components/panels/StopDetailPanel";
import HubDetailPanel from "@/components/panels/HubDetailPanel";
import RouteDetailPanel from "@/components/panels/RouteDetailPanel";
import AnalyticalWorkspace from "@/components/foundry/AnalyticalWorkspace";

const ANALYTICAL_MODULES = [
  { id: "command-center", name: "Command Center", desc: "Karta audytowa i Stop DNA" },
  { id: "network", name: "Network Explorer", desc: "Wirtualizowany DataGrid 60k słupków" },
  { id: "optimization", name: "Optimization", desc: "The Axe List TCRP 100 & Pustynie" },
  { id: "routes", name: "Route Analyzer", desc: "Katalog GTFS i sekwencje z LRS" },
  { id: "market", name: "Market Intel", desc: "Wyceny mieszkań RCN & trendy" },
  { id: "benchmark", name: "Benchmark Krajowy", desc: "Ogólnopolski ranking 30 miast" },
] as const;

export default function ResizableMainPanel() {
  const {
    selectedId,
    selectionType,
    clearSelection,
    activeModule,
    setActiveModule,
    setWindowSize,
    windows,
  } = useFoundryStore();

  const [activeTab, setActiveTab] = useState<"overview" | "catalog" | "modules">("overview");
  const [modulesDropdownOpen, setModulesDropdownOpen] = useState(false);

  const win = windows["primary-panel"];
  const isDetailView = Boolean(
    selectedId && (selectionType === "stop" || selectionType === "hub" || selectionType === "route")
  );

  // Dynamic window title and subtitle
  let title = "Panel Analityczny";
  let subtitle = "Aglomeracja miejska";
  if (isDetailView) {
    title =
      selectionType === "stop"
        ? `Przystanek #${selectedId}`
        : selectionType === "hub"
        ? `Węzeł #${selectedId}`
        : `Trasa #${selectedId}`;
    subtitle = "Szczegółowa telemetria obiektu";
  } else if (activeTab === "modules") {
    const mod = ANALYTICAL_MODULES.find((m) => m.id === activeModule);
    title = mod ? mod.name : "Moduł Analityczny";
    subtitle = mod ? mod.desc : "Zaawansowana analityka GIS";
  } else if (activeTab === "catalog") {
    title = "Katalog Przystanków";
    subtitle = "Wyszukiwanie i filtrowanie słupków";
  }

  const handleSelectModule = (modId: any) => {
    setActiveModule(modId);
    setActiveTab("modules");
    setModulesDropdownOpen(false);

    // Auto-widen to 860px for analytical datagrids if currently compact
    if (win && win.size.width < 750) {
      setWindowSize("primary-panel", { width: 860, height: win.size.height });
    }
  };

  return (
    <FloatingWindow
      id="primary-panel"
      title={title}
      subtitle={subtitle}
      icon={<BarChart3 className="w-4 h-4" />}
      presetWidths={[380, 520, 860]}
      allowDock={true}
      allowResize={true}
      allowMinimize={true}
      allowMaximize={true}
      allowClose={true}
      onClose={() => {
        if (selectedId) clearSelection();
      }}
      headerActions={
        isDetailView ? (
          <button
            type="button"
            onClick={() => clearSelection()}
            className="px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-[11px] font-bold text-slate-700 flex items-center gap-1 transition-all cursor-pointer mr-1"
            title="Wróć do katalogu lub przeglądu"
          >
            <ArrowLeft className="w-3 h-3" />
            <span>Wróć</span>
          </button>
        ) : null
      }
    >
      {/* Navigation Subtabs when not in detail view */}
      {!isDetailView && (
        <div className="flex items-center border-b border-slate-200 bg-slate-50/80 p-1.5 shrink-0 gap-1 select-none">
          <button
            type="button"
            onClick={() => setActiveTab("overview")}
            className={`flex-1 py-1 px-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              activeTab === "overview"
                ? "bg-white text-[#47317f] shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <LayoutDashboard className="w-3.5 h-3.5" />
            <span>Przegląd</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("catalog")}
            className={`flex-1 py-1 px-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              activeTab === "catalog"
                ? "bg-white text-[#47317f] shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <ListFilter className="w-3.5 h-3.5" />
            <span>Katalog</span>
          </button>

          {/* Analytical Modules Dropdown Tab */}
          <div className="relative flex-1">
            <button
              type="button"
              onClick={() => {
                setActiveTab("modules");
                setModulesDropdownOpen(!modulesDropdownOpen);
              }}
              className={`w-full py-1 px-2.5 rounded-xl text-xs font-bold flex items-center justify-between gap-1 transition-all cursor-pointer ${
                activeTab === "modules"
                  ? "bg-white text-[#47317f] shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <div className="flex items-center gap-1.5 truncate">
                <Layers className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">Moduły</span>
              </div>
              <ChevronDown className="w-3 h-3 text-slate-400 shrink-0" />
            </button>

            {modulesDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl border border-slate-200 shadow-xl py-1 z-50 animate-in fade-in-50 duration-100 min-w-[200px]">
                {ANALYTICAL_MODULES.map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => handleSelectModule(m.id)}
                    className={`w-full text-left px-3 py-1.5 text-xs flex flex-col hover:bg-slate-50 transition-colors cursor-pointer ${
                      activeModule === m.id ? "bg-[#47317f]/10 text-[#47317f] font-bold" : "text-slate-700 font-medium"
                    }`}
                  >
                    <span className="font-bold">{m.name}</span>
                    <span className="text-[10px] text-slate-400">{m.desc}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden">
        {selectionType === "stop" && selectedId ? (
          <StopDetailPanel />
        ) : selectionType === "hub" && selectedId ? (
          <HubDetailPanel />
        ) : selectionType === "route" && selectedId ? (
          <RouteDetailPanel />
        ) : activeTab === "overview" ? (
          <AgglomerationOverviewPanel />
        ) : activeTab === "catalog" ? (
          <StopCatalogPanel />
        ) : (
          <AnalyticalWorkspace />
        )}
      </div>
    </FloatingWindow>
  );
}
