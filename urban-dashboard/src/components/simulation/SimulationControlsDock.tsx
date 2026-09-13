"use client";

import React, { useMemo, useState, useEffect } from "react";
import {
  Play,
  Pause,
  RotateCcw,
  Radio,
  Clock,
  Gauge,
  X,
  Bus,
  Filter,
  Layers,
  Minimize2,
  Maximize2,
} from "lucide-react";
import { formatSecondsToHms, getCurrentSecondsFromMidnight } from "./simulation-engine";
import { useFoundryStore } from "@/lib/store";
import FloatingWindow from "@/components/shell/FloatingWindow";

const SPEED_PRESETS = [
  { label: "1x", value: 1, desc: "Czas rzeczywisty" },
  { label: "10x", value: 10, desc: "10 sek/s" },
  { label: "60x", value: 60, desc: "1 min/s" },
  { label: "360x", value: 360, desc: "6 min/s" },
  { label: "3600x", value: 3600, desc: "1 godz/s" },
];

export default function SimulationControlsDock() {
  const {
    isSimulationActive,
    simulationMode,
    setSimulationMode,
    toggleSimulation,
    isLiveMode,
    setLiveMode,
    isPlaying,
    setPlaying,
    simSpeed,
    setSimSpeed,
    simTimeSeconds,
    setSimTimeSeconds,
    activeVehicles,
    simulationDataset,
    isLoadingSimulation,
    simulationError,
    lineFilter,
    setLineFilter,
    selectedCity,
    openWindow,
    closeWindow,
  } = useFoundryStore();

  const [isCompact, setIsCompact] = useState<boolean>(false);

  // Synchronize window open state with simulation active
  useEffect(() => {
    if (isSimulationActive) {
      openWindow("simulation-dock");
    } else {
      closeWindow("simulation-dock");
    }
  }, [isSimulationActive, openWindow, closeWindow]);

  // Extract list of unique route short names for the filter
  const availableLines = useMemo(() => {
    if (!simulationDataset?.trips) return [];
    const set = new Set<string>();
    simulationDataset.trips.forEach((t: any) => set.add(t.route_short_name));
    return Array.from(set).sort((a, b) => {
      const numA = parseInt(a, 10);
      const numB = parseInt(b, 10);
      if (!isNaN(numA) && !isNaN(numB)) return numA - numB;
      return a.localeCompare(b);
    });
  }, [simulationDataset]);

  if (!isSimulationActive) return null;

  return (
    <>
      {/* Desktop Resizable & Draggable Floating Window */}
      <FloatingWindow
        id="simulation-dock"
        title={`Symulacja Floty • ${selectedCity.toUpperCase()}`}
        subtitle={
          isLoadingSimulation
            ? "Wczytywanie danych rozkładu..."
            : simulationError
            ? "Brak pliku symulacji dla miasta"
            : `${activeVehicles.length} pojazdów w trasie`
        }
        icon={<Bus className="w-4 h-4" />}
        presetWidths={[460, 680, 840]}
        allowDock={false}
        allowResize={true}
        allowMinimize={true}
        allowMaximize={false}
        allowClose={true}
        onClose={toggleSimulation}
        headerActions={
          <button
            type="button"
            onClick={() => setIsCompact(!isCompact)}
            className="p-1 rounded-lg hover:bg-slate-200/60 text-slate-400 hover:text-slate-700 transition-all cursor-pointer mr-0.5"
            title={isCompact ? "Rozwiń pełny pulpit kontrolny" : "Zwiń do mini-odtwarzacza"}
          >
            {isCompact ? <Maximize2 className="w-3.5 h-3.5" /> : <Minimize2 className="w-3.5 h-3.5" />}
          </button>
        }
      >
        <div className="p-3 sm:p-4 text-slate-800 flex flex-col gap-2.5">
          {/* Top Status & Live Mode Row */}
          <div className="flex items-center justify-between gap-2 pb-2 border-b border-slate-100">
            <div className="flex items-center gap-2 text-xs">
              <span className="font-bold text-[#47317f]">{simulationDataset?.total_trips ?? 0} kursów</span>
              <span className="text-slate-300">•</span>
              <span className="font-semibold text-emerald-600">{activeVehicles.length} aktywnych</span>
              {isLoadingSimulation && (
                <span className="text-[10px] font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">
                  Wczytywanie...
                </span>
              )}
              {simulationError && (
                <span className="text-[10px] font-medium text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full">
                  {simulationError}
                </span>
              )}
            </div>

            {/* Live Toggle Pill */}
            <button
              type="button"
              onClick={() => setLiveMode(!isLiveMode)}
              className={`px-2.5 py-1 rounded-xl border text-[11px] font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                isLiveMode
                  ? "bg-emerald-500 border-emerald-600 text-white shadow-xs"
                  : "bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200"
              }`}
              title={
                isLiveMode
                  ? "Tryb na żywo aktywny (czas zsynchronizowany z zegarem)"
                  : "Przełącz na symulację czasu rzeczywistego (Live)"
              }
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  isLiveMode ? "bg-white animate-ping" : "bg-slate-400"
                }`}
              />
              <span>NA ŻYWO</span>
            </button>
          </div>

          {/* Dual-Mode Selector: GPS Shapes vs Mathematical Schedule */}
          {!isCompact && (
            <div className="flex items-center gap-1.5 p-1 bg-slate-100/90 rounded-xl border border-slate-200/80">
              <button
                type="button"
                onClick={() => setSimulationMode("gps")}
                disabled={isLoadingSimulation}
                className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  simulationMode === "gps"
                    ? "bg-[#47317f] text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
                }`}
                title="Ruch pojazdów wzdłuż fizycznej geometrii ulic (ślady GPS shapes.txt lub siatka drogowa OSM)"
              >
                <Radio className="w-3.5 h-3.5 shrink-0" />
                <span>Ślady GPS</span>
                {simulationDataset?.geometry_source && (
                  <span
                    className={`text-[9px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider ${
                      simulationMode === "gps"
                        ? "bg-white/20 text-white"
                        : "bg-slate-200 text-slate-600"
                    }`}
                  >
                    {simulationDataset.geometry_source === "gtfs_shapes" ? "Shapes" : "OSM"}
                  </span>
                )}
              </button>

              <button
                type="button"
                onClick={() => setSimulationMode("math")}
                disabled={isLoadingSimulation}
                className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  simulationMode === "math"
                    ? "bg-[#47317f] text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
                }`}
                title="Interpolacja matematyczna czasu i dystansu bezpośrednio pomiędzy kolejnymi przystankami rozkładu"
              >
                <Layers className="w-3.5 h-3.5 shrink-0" />
                <span>Model matematyczny</span>
                <span
                  className={`text-[9px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider ${
                    simulationMode === "math"
                      ? "bg-white/20 text-white"
                      : "bg-slate-200 text-slate-600"
                  }`}
                >
                  Rozkład
                </span>
              </button>
            </div>
          )}

          {/* Middle Row: Play/Pause, Digital Clock, Timeline Scrubber */}
          <div className="flex flex-col sm:flex-row items-center gap-2.5">
            {/* Play/Pause & Reset */}
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                type="button"
                onClick={() => setPlaying(!isPlaying)}
                className="w-9 h-9 rounded-xl bg-[#47317f] hover:bg-[#3d2970] text-white flex items-center justify-center shadow-xs transition-all cursor-pointer"
                title={isPlaying ? "Wstrzymaj symulację (Spacja)" : "Wznów symulację (Spacja)"}
              >
                {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
              </button>

              <button
                type="button"
                onClick={() => setSimTimeSeconds(getCurrentSecondsFromMidnight())}
                className="p-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 transition-all cursor-pointer"
                title="Zresetuj czas do bieżącego zegara"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>

              {/* Digital Clock Display */}
              <div className="flex items-center gap-1 px-2.5 py-1 bg-slate-50 border border-slate-200/80 rounded-xl">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-xs font-bold font-mono text-slate-900 tracking-wider">
                  {formatSecondsToHms(simTimeSeconds)}
                </span>
              </div>
            </div>

            {/* 24-Hour Scrubber Slider (hidden in compact mode) */}
            {!isCompact && (
              <div className="flex-1 w-full flex flex-col gap-0.5">
                <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 px-1">
                  <span>00:00</span>
                  <span className="text-[#47317f]">Szczyt (07-09 / 15-17)</span>
                  <span>24:00</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={86399}
                  step={1}
                  value={simTimeSeconds}
                  onChange={(e) => setSimTimeSeconds(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#47317f] focus:outline-none"
                  title="Przesuń suwak, aby zmienić godzinę symulacji"
                />
              </div>
            )}
          </div>

          {/* Bottom Row: Speed Slider, Preset Multiplier Chips, Line Filter (hidden in compact mode) */}
          {!isCompact && (
            <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs">
              {/* Speed Presets & Slider */}
              <div className="flex items-center gap-2 flex-wrap">
                <div className="flex items-center gap-1 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  <Gauge className="w-3.5 h-3.5 text-[#47317f]" />
                  <span>Prędkość:</span>
                </div>

                <div className="flex items-center gap-0.5 bg-slate-100 p-0.5 rounded-xl border border-slate-200">
                  {SPEED_PRESETS.map((preset) => {
                    const isActive = simSpeed === preset.value;
                    return (
                      <button
                        key={preset.value}
                        type="button"
                        onClick={() => setSimSpeed(preset.value)}
                        className={`px-2 py-0.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          isActive
                            ? "bg-[#47317f] text-white shadow-xs"
                            : "text-slate-600 hover:text-slate-900"
                        }`}
                        title={preset.desc}
                      >
                        {preset.label}
                      </button>
                    );
                  })}
                </div>

                {/* Continuous Speed Multiplier Slider */}
                <div className="flex items-center gap-1 ml-1">
                  <input
                    type="range"
                    min={1}
                    max={3600}
                    step={10}
                    value={simSpeed}
                    onChange={(e) => setSimSpeed(Number(e.target.value))}
                    className="w-16 sm:w-20 h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#47317f]"
                    title={`Płynny suwak prędkości: x${simSpeed}`}
                  />
                  <span className="text-[11px] font-mono font-bold text-slate-700 min-w-[34px]">
                    x{simSpeed}
                  </span>
                </div>
              </div>

              {/* Route Filter Dropdown */}
              <div className="flex items-center gap-1.5">
                <Filter className="w-3.5 h-3.5 text-slate-400" />
                <select
                  value={lineFilter || ""}
                  onChange={(e) => setLineFilter(e.target.value || null)}
                  className="bg-slate-50 border border-slate-200 text-slate-800 text-xs font-semibold rounded-xl px-2.5 py-1 focus:ring-1 focus:ring-[#47317f] focus:outline-none cursor-pointer"
                >
                  <option value="">Wszystkie linie ({availableLines.length})</option>
                  {availableLines.map((line) => (
                    <option key={line} value={line}>
                      Linia {line}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>
      </FloatingWindow>

      {/* Mobile Fixed Bottom Controls (Only visible on small touchscreens) */}
      <div className="md:hidden fixed bottom-16 left-3 right-3 z-40 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200 shadow-xl p-3 text-slate-800">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setPlaying(!isPlaying)}
              className="w-8 h-8 rounded-xl bg-[#47317f] text-white flex items-center justify-center cursor-pointer"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
            </button>
            <div className="text-xs font-mono font-bold text-slate-800">
              {formatSecondsToHms(simTimeSeconds)}
            </div>
          </div>

          <div className="text-xs font-bold text-[#47317f]">
            {activeVehicles.length} w trasie
          </div>

          <button
            type="button"
            onClick={toggleSimulation}
            className="p-1.5 text-slate-400 hover:text-slate-700 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  );
}
