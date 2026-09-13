"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronUp,
  ChevronDown,
  LayoutDashboard,
  ListFilter,
  Route as RouteIcon,
  Bus,
  Cpu,
  X,
  Play,
  Pause,
  RotateCcw,
  Gauge,
  Navigation,
} from "lucide-react";
import { useFoundryStore } from "@/lib/store";
import AgglomerationOverviewPanel from "@/components/panels/AgglomerationOverviewPanel";
import StopCatalogPanel from "@/components/panels/StopCatalogPanel";
import StopDetailPanel from "@/components/panels/StopDetailPanel";
import HubDetailPanel from "@/components/panels/HubDetailPanel";
import RouteDetailPanel from "@/components/panels/RouteDetailPanel";
import AnalyticalWorkspace from "@/components/foundry/AnalyticalWorkspace";

export type MobileSnap = "minimized" | "peek" | "half" | "full";

const MODULES_LIST = [
  { id: "command-center", label: "Command Center" },
  { id: "network", label: "Przystanki i Węzły" },
  { id: "optimization", label: "Optymalizacja (Axe List)" },
  { id: "routes", label: "Katalog GTFS" },
  { id: "market", label: "Ceny Mieszkań RCN" },
  { id: "benchmark", label: "Ranking Miast" },
] as const;

export default function MobileBottomSheet() {
  const {
    selectedId,
    selectionType,
    selectedCity,
    clearSelection,
    activeRouteUid,
    setActiveRoute,
    selectedVehicle,
    selectVehicle,
    isSimulationActive,
    isPlaying,
    setPlaying,
    simSpeed,
    setSimSpeed,
    activeVehicles,
    activeModule,
    setActiveModule,
  } = useFoundryStore();

  const [snap, setSnap] = useState<MobileSnap>("peek");
  const [activeTab, setActiveTab] = useState<"overview" | "catalog" | "modules" | "simulation">("overview");

  const isDetailView = Boolean(
    (selectedId && (selectionType === "stop" || selectionType === "hub")) ||
    activeRouteUid ||
    selectedVehicle
  );

  // Auto-expand sheet when an object, route, or vehicle is selected
  useEffect(() => {
    if (selectedId || activeRouteUid || selectedVehicle) {
      setSnap("half");
    }
  }, [selectedId, activeRouteUid, selectedVehicle]);

  const snapHeights: Record<MobileSnap, string> = {
    minimized: "32px",
    peek: "calc(54px + env(safe-area-inset-bottom, 0px))",
    half: "50dvh",
    full: "88dvh",
  };

  const handleCycleSnap = () => {
    if (snap === "minimized") setSnap("half");
    else if (snap === "peek") setSnap("half");
    else if (snap === "half") setSnap("full");
    else setSnap("peek");
  };

  const cityName = selectedCity.charAt(0).toUpperCase() + selectedCity.slice(1);

  // Determine Title & Subtitle for Sheet Header
  let sheetTitle = `Aglomeracja ${cityName}`;
  if (selectedVehicle) {
    sheetTitle = `Autobus ${selectedVehicle.routeShortName} • ${selectedVehicle.headsign}`;
  } else if (activeRouteUid) {
    sheetTitle = `Linia ${activeRouteUid}`;
  } else if (selectedId) {
    sheetTitle = `${selectionType === "stop" ? "Przystanek" : "Węzeł"} #${selectedId}`;
  }

  const handleClearDetail = () => {
    if (selectedVehicle) selectVehicle(null);
    if (activeRouteUid) setActiveRoute(null);
    if (selectedId) clearSelection();
    setSnap("peek");
  };

  return (
    <section
      aria-label="Mobilny panel analityczny"
      style={{ height: snapHeights[snap] }}
      className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-white rounded-t-3xl border-t border-slate-200/90 shadow-[0_-8px_30px_rgba(0,0,0,0.14)] flex flex-col overflow-hidden transition-[height] duration-300 ease-out pointer-events-auto"
    >
      {/* 1. Drag Handle & Header */}
      <div
        onClick={handleCycleSnap}
        className="w-full pt-2 pb-2 px-4 flex flex-col items-center justify-center shrink-0 cursor-pointer select-none bg-slate-50/90 border-b border-slate-100 min-h-[44px]"
      >
        <div className="w-10 h-1 rounded-full bg-slate-300 mb-1.5" />

        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-2 min-w-0">
            <span className="w-2 h-2 rounded-full bg-[#47317f] shrink-0" />
            <h2 className="text-xs font-bold text-slate-800 tracking-tight truncate">
              {sheetTitle}
            </h2>
            <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-600 shrink-0">
              {snap === "peek" ? "Rozwiń" : snap === "half" ? "50%" : snap === "full" ? "88%" : "Ukryty"}
            </span>
          </div>

          <div className="flex items-center gap-1">
            {isDetailView && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleClearDetail();
                }}
                className="p-1 rounded-lg hover:bg-slate-200 text-slate-400 hover:text-slate-700 cursor-pointer"
                title="Zamknij szczegóły obiektu"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
            <div className="text-slate-400 p-0.5">
              {snap === "full" ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronUp className="w-4 h-4" />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Navigation Tabs (when not in detail view and expanded) */}
      {snap !== "peek" && snap !== "minimized" && !isDetailView && (
        <div className="flex border-b border-slate-200 bg-slate-50/70 p-1.5 shrink-0 gap-1 overflow-x-auto no-scrollbar">
          <button
            type="button"
            onClick={() => setActiveTab("overview")}
            className={`min-h-[38px] py-1 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
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
            className={`min-h-[38px] py-1 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "catalog"
                ? "bg-white text-[#47317f] shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <ListFilter className="w-3.5 h-3.5" />
            <span>Katalog</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("modules")}
            className={`min-h-[38px] py-1 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "modules"
                ? "bg-white text-[#47317f] shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Moduły</span>
          </button>

          {isSimulationActive && (
            <button
              type="button"
              onClick={() => setActiveTab("simulation")}
              className={`min-h-[38px] py-1 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
                activeTab === "simulation"
                  ? "bg-[#47317f] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Bus className="w-3.5 h-3.5" />
              <span>Symulacja ({activeVehicles.length})</span>
            </button>
          )}
        </div>
      )}

      {/* 3. Panel Content Area */}
      {snap !== "peek" && snap !== "minimized" && (
        <div className="flex-1 min-h-0 overflow-y-auto pb-[calc(1.5rem+env(safe-area-inset-bottom,16px))]">
          {/* Detail Views */}
          {selectedVehicle ? (
            <div className="p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span
                    className="px-3 py-1 rounded-xl text-sm font-black text-white shadow-xs"
                    style={{ backgroundColor: selectedVehicle.routeColor || "#47317f" }}
                  >
                    {selectedVehicle.routeShortName}
                  </span>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Kierunek
                    </div>
                    <div className="text-xs font-bold text-slate-900">
                      {selectedVehicle.headsign}
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-slate-400 block text-[10px] font-bold">Prędkość</span>
                  <span className="text-sm font-bold text-slate-800">
                    {Math.round(selectedVehicle.speedKmh || 0)} km/h
                  </span>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-slate-400 block text-[10px] font-bold">Status</span>
                  <span className="text-sm font-bold text-emerald-600">W trasie</span>
                </div>
              </div>
            </div>
          ) : activeRouteUid ? (
            <RouteDetailPanel />
          ) : selectionType === "stop" && selectedId ? (
            <StopDetailPanel />
          ) : selectionType === "hub" && selectedId ? (
            <HubDetailPanel />
          ) : activeTab === "overview" ? (
            <AgglomerationOverviewPanel />
          ) : activeTab === "catalog" ? (
            <StopCatalogPanel />
          ) : activeTab === "modules" ? (
            <div className="p-3 space-y-3">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Wybierz moduł analityczny
              </div>
              <div className="grid grid-cols-2 gap-2">
                {MODULES_LIST.map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setActiveModule(m.id as any)}
                    className={`min-h-[44px] p-2.5 rounded-xl border text-left text-xs font-bold transition-all cursor-pointer ${
                      activeModule === m.id
                        ? "bg-[#f5f2fa] border-[#47317f] text-[#47317f]"
                        : "bg-slate-50 border-slate-200 text-slate-700"
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
              <div className="mt-4 border-t border-slate-100 pt-3">
                <AnalyticalWorkspace />
              </div>
            </div>
          ) : (
            /* Simulation Tab Content */
            <div className="p-4 space-y-4">
              <div className="flex items-center justify-between bg-slate-50 p-3 rounded-2xl border border-slate-100">
                <div>
                  <div className="text-xs font-bold text-slate-900">
                    Aktywne pojazdy: {activeVehicles.length}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Symulacja ruchu w aglomeracji
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setPlaying(!isPlaying)}
                  className="min-h-[44px] px-4 rounded-xl bg-[#47317f] text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  <span>{isPlaying ? "Pauza" : "Start"}</span>
                </button>
              </div>

              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Prędkość symulacji
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[1, 10, 60, 360].map((spd) => (
                    <button
                      key={spd}
                      type="button"
                      onClick={() => setSimSpeed(spd)}
                      className={`min-h-[40px] rounded-xl border text-xs font-bold cursor-pointer ${
                        simSpeed === spd
                          ? "bg-[#47317f] border-[#47317f] text-white"
                          : "bg-slate-50 border-slate-200 text-slate-700"
                      }`}
                    >
                      {spd}x
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
