"use client";

import React from "react";
import {
  LayoutDashboard,
  Bus,
  Layers,
  Eye,
  EyeOff,
  RotateCcw,
  Sparkles,
  Search,
} from "lucide-react";
import { useFoundryStore } from "@/lib/store";

export default function OmniDock() {
  const {
    windows,
    openWindow,
    toggleWindow,
    isCleanMapMode,
    toggleCleanMapMode,
    resetLayout,
    isSimulationActive,
    toggleSimulation,
    activeVehicles,
    selectedCity,
  } = useFoundryStore();

  const primaryWin = windows["primary-panel"];
  const simWin = windows["simulation-dock"];
  const mapWin = windows["map-tools"];

  const isPrimaryOpen = primaryWin?.isOpen && !primaryWin?.isMinimized;
  const isPrimaryMinimized = primaryWin?.isOpen && primaryWin?.isMinimized;

  const isSimOpen = simWin?.isOpen && !simWin?.isMinimized;
  const isSimMinimized = simWin?.isOpen && simWin?.isMinimized;

  const isMapToolsOpen = mapWin?.isOpen && !mapWin?.isMinimized;

  return (
    <nav
      aria-label="Dolny pasek narzędzi pulpitu"
      className="fixed bottom-3 left-1/2 -translate-x-1/2 z-40 hidden md:flex items-center gap-1.5 p-1.5 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/90 shadow-[0_12px_40px_rgba(0,0,0,0.14)] text-slate-700 pointer-events-auto transition-all"
    >
      {/* 1. Primary Panel: Analytics & Catalog */}
      <button
        type="button"
        onClick={() => toggleWindow("primary-panel")}
        className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
          isPrimaryOpen
            ? "bg-[#47317f] text-white shadow-sm shadow-[#47317f]/20"
            : isPrimaryMinimized
            ? "bg-amber-50 text-amber-800 border border-amber-300"
            : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
        }`}
        title="Główny panel analityczny (Przegląd aglomeracji, katalog, moduły analityczne)"
      >
        <LayoutDashboard className="w-4 h-4" />
        <span>Panele i moduły</span>
        {isPrimaryMinimized && (
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
        )}
      </button>

      {/* 2. Fleet Simulation Dock */}
      <button
        type="button"
        onClick={() => {
          if (!isSimulationActive) {
            toggleSimulation();
          }
          toggleWindow("simulation-dock");
        }}
        className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
          isSimOpen
            ? "bg-[#47317f] text-white shadow-sm shadow-[#47317f]/20"
            : isSimMinimized
            ? "bg-amber-50 text-amber-800 border border-amber-300"
            : isSimulationActive
            ? "bg-emerald-50 text-emerald-800 border border-emerald-300"
            : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
        }`}
        title="Symulacja ruchu floty autobusowej w czasie rzeczywistym"
      >
        <Bus className="w-4 h-4" />
        <span>Symulacja floty</span>
        {isSimulationActive && (
          <span className="px-1.5 py-0.2 bg-white/20 rounded-md text-[10px] font-mono">
            {activeVehicles.length}
          </span>
        )}
      </button>

      {/* 3. Map Tools & Layers */}
      <button
        type="button"
        onClick={() => toggleWindow("map-tools")}
        className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
          isMapToolsOpen
            ? "bg-[#47317f] text-white shadow-sm shadow-[#47317f]/20"
            : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
        }`}
        title="Warstwy analityczne (Heksagony H3, linie, słupki, style mapy)"
      >
        <Layers className="w-4 h-4" />
        <span>Warstwy mapy</span>
      </button>

      <div className="w-px h-5 bg-slate-200 mx-0.5" />

      {/* 4. Clean Map Mode Toggle */}
      <button
        type="button"
        onClick={toggleCleanMapMode}
        className={`px-2.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
          isCleanMapMode
            ? "bg-sky-500 text-white shadow-sm shadow-sky-500/20"
            : "text-slate-500 hover:text-slate-800 hover:bg-slate-100"
        }`}
        title={
          isCleanMapMode
            ? "Przywróć okna (skrót H)"
            : "Tryb czystej mapy: ukryj wszystkie panele (skrót H)"
        }
      >
        {isCleanMapMode ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
        <span className="hidden lg:inline">
          {isCleanMapMode ? "Pokaż okna (H)" : "Czysta mapa (H)"}
        </span>
      </button>

      {/* 5. Reset Layout */}
      <button
        type="button"
        onClick={() => {
          if (window.confirm("Przywrócić domyślny układ okien roboczych?")) {
            resetLayout();
          }
        }}
        className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all cursor-pointer"
        title="Przywróć domyślny układ okien"
      >
        <RotateCcw className="w-4 h-4" />
      </button>
    </nav>
  );
}
