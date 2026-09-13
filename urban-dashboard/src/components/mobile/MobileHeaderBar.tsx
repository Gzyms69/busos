"use client";

import React, { useState } from "react";
import {
  MapPin,
  ChevronDown,
  Search,
  Layers,
  Sun,
  Moon,
  Bus,
  Check,
  X,
} from "lucide-react";
import { useFoundryStore } from "@/lib/store";
import MobileSearchOverlay from "./MobileSearchOverlay";

export default function MobileHeaderBar() {
  const {
    selectedCity,
    setCity,
    availableCities,
    connectionStatus,
    mapStyle,
    setMapStyle,
    showBoundary,
    showHexagons,
    showStops,
    showHubs,
    showRoutes,
    toggleLayer,
    isSimulationActive,
    toggleSimulation,
    activeVehicles,
  } = useFoundryStore();

  const [searchOpen, setSearchOpen] = useState(false);
  const [cityDrawerOpen, setCityDrawerOpen] = useState(false);
  const [layersDrawerOpen, setLayersDrawerOpen] = useState(false);

  const cityName = selectedCity.charAt(0).toUpperCase() + selectedCity.slice(1);

  return (
    <>
      <header
        aria-label="Mobilny pasek nawigacyjny BusOS"
        className="fixed top-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.04)] px-3 pb-2 pt-[calc(0.5rem+env(safe-area-inset-top,0px))] flex items-center justify-between gap-2 pointer-events-auto"
      >
        {/* Left: Brand Badge & Compact City Selector */}
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-8 h-8 rounded-xl bg-[#47317f] flex items-center justify-center text-white font-black text-xs shrink-0 shadow-xs">
            B
          </div>

          <button
            type="button"
            onClick={() => setCityDrawerOpen(true)}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-slate-100/90 border border-slate-200 text-xs font-bold text-slate-800 active:bg-slate-200 transition-colors min-h-[36px] max-w-[150px] cursor-pointer"
            aria-label="Wybierz miasto"
          >
            <MapPin className="w-3.5 h-3.5 text-[#47317f] shrink-0" />
            <span className="truncate">{cityName}</span>
            <ChevronDown className="w-3 h-3 text-slate-400 shrink-0" />
          </button>

          {/* Connection Dot */}
          <span
            className={`w-2 h-2 rounded-full shrink-0 ${
              connectionStatus === "online"
                ? "bg-emerald-500"
                : connectionStatus === "reconnecting"
                ? "bg-amber-500 animate-ping"
                : "bg-rose-500"
            }`}
            title={`Status: ${connectionStatus}`}
          />
        </div>

        {/* Right Action Icons (44px hit targets) */}
        <div className="flex items-center gap-1 shrink-0">
          {/* 1. Search Button */}
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            className="min-h-[40px] min-w-[40px] flex items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-700 transition-all cursor-pointer"
            title="Szukaj linii i przystanków"
            aria-label="Szukaj linii i przystanków"
          >
            <Search className="w-4 h-4 text-[#47317f]" />
          </button>

          {/* 2. Map Layers & Style Button */}
          <button
            type="button"
            onClick={() => setLayersDrawerOpen(true)}
            className={`min-h-[40px] min-w-[40px] flex items-center justify-center rounded-xl border transition-all cursor-pointer active:scale-95 ${
              showHexagons
                ? "bg-[#f5f2fa] border-[#47317f] text-[#47317f]"
                : "bg-slate-100 border-transparent text-slate-700 hover:bg-slate-200"
            }`}
            title="Warstwy i styl mapy"
            aria-label="Warstwy i styl mapy"
          >
            <Layers className="w-4 h-4 text-[#47317f]" />
          </button>

          {/* 3. Fleet Simulation Toggle Button */}
          <button
            type="button"
            onClick={toggleSimulation}
            className={`min-h-[40px] px-2.5 rounded-xl border flex items-center gap-1.5 text-xs font-bold transition-all cursor-pointer active:scale-95 ${
              isSimulationActive
                ? "bg-[#47317f] border-[#47317f] text-white shadow-xs"
                : "bg-slate-100 border-transparent text-slate-700 hover:bg-slate-200"
            }`}
            title={isSimulationActive ? "Zatrzymaj symulację floty" : "Uruchom symulację floty"}
            aria-label="Symulacja floty"
          >
            <Bus className={`w-4 h-4 ${isSimulationActive ? "text-white" : "text-[#47317f]"}`} />
            {isSimulationActive && (
              <span className="font-mono text-[11px] font-black">
                {activeVehicles.length}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Full-Screen Mobile Search Overlay */}
      <MobileSearchOverlay
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />

      {/* Mobile City Selection Drawer / Modal */}
      {cityDrawerOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Wybór miasta"
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-end md:hidden animate-in fade-in-50 duration-150"
          onClick={() => setCityDrawerOpen(false)}
        >
          <div
            className="bg-white w-full rounded-t-3xl border-t border-slate-200 p-4 max-h-[75dvh] flex flex-col overflow-hidden pb-[calc(1rem+env(safe-area-inset-bottom,16px))]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#47317f]" />
                <h3 className="text-sm font-bold text-slate-900">
                  Wybierz aglomerację ({availableCities.length})
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setCityDrawerOpen(false)}
                className="min-h-[40px] min-w-[40px] flex items-center justify-center text-slate-400 active:text-slate-700 cursor-pointer"
                aria-label="Zamknij"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="overflow-y-auto divide-y divide-slate-100 mt-2 flex-1">
              {availableCities.map((city) => (
                <button
                  key={city}
                  type="button"
                  onClick={() => {
                    setCity(city);
                    setCityDrawerOpen(false);
                  }}
                  className={`w-full px-3 py-3 flex items-center justify-between text-left text-xs font-bold active:bg-slate-50 transition-colors cursor-pointer ${
                    selectedCity.toLowerCase() === city.toLowerCase()
                      ? "text-[#47317f] bg-[#f5f2fa]"
                      : "text-slate-800"
                  }`}
                >
                  <span className="capitalize">{city}</span>
                  {selectedCity.toLowerCase() === city.toLowerCase() && (
                    <Check className="w-4 h-4 text-[#47317f]" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Layers & Map Style Sheet */}
      {layersDrawerOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Ustawienia warstw mapy"
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-end md:hidden animate-in fade-in-50 duration-150"
          onClick={() => setLayersDrawerOpen(false)}
        >
          <div
            className="bg-white w-full rounded-t-3xl border-t border-slate-200 p-4 max-h-[80dvh] flex flex-col overflow-hidden pb-[calc(1rem+env(safe-area-inset-bottom,16px))]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#47317f]" />
                <h3 className="text-sm font-bold text-slate-900">
                  Warstwy i styl podkładu
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setLayersDrawerOpen(false)}
                className="min-h-[40px] min-w-[40px] flex items-center justify-center text-slate-400 active:text-slate-700 cursor-pointer"
                aria-label="Zamknij"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="overflow-y-auto space-y-4 mt-3">
              {/* Sekcja: Styl Podkładu */}
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Styl podkładu mapowego
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setMapStyle("light")}
                    className={`min-h-[44px] px-3 py-2 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold cursor-pointer transition-all ${
                      mapStyle === "light"
                        ? "bg-[#f5f2fa] border-[#47317f] text-[#47317f]"
                        : "bg-slate-50 border-slate-200 text-slate-700"
                    }`}
                  >
                    <Sun className="w-4 h-4 text-amber-500" />
                    <span>Jasny</span>
                    {mapStyle === "light" && <Check className="w-3.5 h-3.5 ml-auto" />}
                  </button>

                  <button
                    type="button"
                    onClick={() => setMapStyle("dark")}
                    className={`min-h-[44px] px-3 py-2 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold cursor-pointer transition-all ${
                      mapStyle === "dark"
                        ? "bg-[#f5f2fa] border-[#47317f] text-[#47317f]"
                        : "bg-slate-50 border-slate-200 text-slate-700"
                    }`}
                  >
                    <Moon className="w-4 h-4 text-slate-600" />
                    <span>Ciemny</span>
                    {mapStyle === "dark" && <Check className="w-3.5 h-3.5 ml-auto" />}
                  </button>
                </div>
              </div>

              {/* Sekcja: Warstwy */}
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Widoczne warstwy analityczne
                </div>
                <div className="space-y-2 bg-slate-50 p-2 rounded-2xl border border-slate-100">
                  <label className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-slate-100 min-h-[44px] cursor-pointer">
                    <span className="text-xs font-bold text-slate-800">Przystanki komunikacji</span>
                    <input
                      type="checkbox"
                      checked={showStops}
                      onChange={() => toggleLayer("showStops")}
                      className="w-4 h-4 rounded text-[#47317f] focus:ring-[#47317f]"
                    />
                  </label>

                  <label className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-slate-100 min-h-[44px] cursor-pointer">
                    <span className="text-xs font-bold text-slate-800">Węzły przesiadkowe</span>
                    <input
                      type="checkbox"
                      checked={showHubs}
                      onChange={() => toggleLayer("showHubs")}
                      className="w-4 h-4 rounded text-[#47317f] focus:ring-[#47317f]"
                    />
                  </label>

                  <label className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-slate-100 min-h-[44px] cursor-pointer">
                    <span className="text-xs font-bold text-slate-800">Trasy i korytarze linii</span>
                    <input
                      type="checkbox"
                      checked={showRoutes}
                      onChange={() => toggleLayer("showRoutes")}
                      className="w-4 h-4 rounded text-[#47317f] focus:ring-[#47317f]"
                    />
                  </label>

                  <label className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-slate-100 min-h-[44px] cursor-pointer">
                    <span className="text-xs font-bold text-slate-800">Dostępność H3 (Hexagony)</span>
                    <input
                      type="checkbox"
                      checked={showHexagons}
                      onChange={() => toggleLayer("showHexagons")}
                      className="w-4 h-4 rounded text-[#47317f] focus:ring-[#47317f]"
                    />
                  </label>

                  <label className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-slate-100 min-h-[44px] cursor-pointer">
                    <span className="text-xs font-bold text-slate-800">Granica aglomeracji</span>
                    <input
                      type="checkbox"
                      checked={showBoundary}
                      onChange={() => toggleLayer("showBoundary")}
                      className="w-4 h-4 rounded text-[#47317f] focus:ring-[#47317f]"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
