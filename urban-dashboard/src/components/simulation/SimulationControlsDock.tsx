"use client";

import React, { useMemo } from "react";
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
} from "lucide-react";
import { formatSecondsToHms, getCurrentSecondsFromMidnight } from "./simulation-engine";
import { useFoundryStore } from "@/lib/store";

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
  } = useFoundryStore();

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
    <div className="fixed bottom-4 left-3 right-3 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 z-40 sm:max-w-3xl w-auto pointer-events-auto">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/90 shadow-2xl p-3 sm:p-4 text-slate-800 transition-all duration-200">
        {/* Top Header Row: Status, City, Live Pill, Close */}
        <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-[#47317f]/10 flex items-center justify-center text-[#47317f]">
              <Bus className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Symulacja Floty • {selectedCity.toUpperCase()}
                </h3>
                {isLoadingSimulation && (
                  <span className="text-[10px] font-medium text-amber-600 animate-pulse bg-amber-50 px-2 py-0.5 rounded-full">
                    Wczytywanie rozkładu...
                  </span>
                )}
                {simulationError && (
                  <span className="text-[10px] font-medium text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full">
                    {simulationError}
                  </span>
                )}
              </div>
              <div className="text-[11px] text-slate-500 flex items-center gap-1.5 font-medium">
                <span>{simulationDataset?.total_trips ?? 0} kursów rozkładowych</span>
                <span>•</span>
                <span className="font-semibold text-[#47317f]">
                  {activeVehicles.length} w trasie
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Live Toggle Pill */}
            <button
              type="button"
              onClick={() => setLiveMode(!isLiveMode)}
              className={`px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                isLiveMode
                  ? "bg-emerald-500 border-emerald-600 text-white shadow-sm shadow-emerald-500/20"
                  : "bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200"
              }`}
              title={
                isLiveMode
                  ? "Tryb na żywo aktywny (czas zsynchronizowany z zegarem)"
                  : "Przełącz na symulację czasu rzeczywistego (Live)"
              }
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  isLiveMode ? "bg-white animate-ping" : "bg-slate-400"
                }`}
              />
              <span>NA ŻYWO</span>
            </button>

            {/* Close Button */}
            <button
              type="button"
              onClick={toggleSimulation}
              className="p-1.5 rounded-xl hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-all cursor-pointer"
              title="Zwiń panel symulacji"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Middle Row: Play/Pause, Digital Clock, Timeline Scrubber */}
        <div className="py-2.5 flex flex-col sm:flex-row items-center gap-3">
          {/* Play/Pause & Reset */}
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              type="button"
              onClick={() => setPlaying(!isPlaying)}
              className="w-10 h-10 rounded-xl bg-[#47317f] hover:bg-[#3d2970] text-white flex items-center justify-center shadow-md shadow-[#47317f]/20 transition-all cursor-pointer"
              title={isPlaying ? "Wstrzymaj symulację (Spacja)" : "Wznów symulację (Spacja)"}
            >
              {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
            </button>

            <button
              type="button"
              onClick={() => setSimTimeSeconds(getCurrentSecondsFromMidnight())}
              className="p-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 transition-all cursor-pointer"
              title="Zresetuj czas do bieżącego zegara"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            {/* Digital Clock Display */}
            <div className="flex items-center gap-1 px-3 py-1.5 bg-slate-50 border border-slate-200/80 rounded-xl">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-sm font-bold font-mono text-slate-900 tracking-wider">
                {formatSecondsToHms(simTimeSeconds)}
              </span>
            </div>
          </div>

          {/* 24-Hour Scrubber Slider */}
          <div className="flex-1 w-full flex flex-col gap-1">
            <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 px-1">
              <span>00:00</span>
              <span className="text-[#47317f]">Szczyt poranny (07-09)</span>
              <span>12:00</span>
              <span className="text-[#47317f]">Szczyt popołudniowy (15-17)</span>
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
        </div>

        {/* Bottom Row: Speed Slider, Preset Multiplier Chips, Line Filter */}
        <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2.5 text-xs">
          {/* Speed Presets & Slider */}
          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex items-center gap-1 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              <Gauge className="w-3.5 h-3.5 text-[#47317f]" />
              <span>Prędkość:</span>
            </div>

            <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-xl border border-slate-200">
              {SPEED_PRESETS.map((preset) => {
                const isActive = simSpeed === preset.value;
                return (
                  <button
                    key={preset.value}
                    type="button"
                    onClick={() => setSimSpeed(preset.value)}
                    className={`px-2 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#47317f] text-white shadow-sm"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
                    }`}
                    title={preset.desc}
                  >
                    {preset.label}
                  </button>
                );
              })}
            </div>

            {/* Continuous Speed Multiplier Slider */}
            <div className="flex items-center gap-1.5 ml-1">
              <input
                type="range"
                min={1}
                max={3600}
                step={10}
                value={simSpeed}
                onChange={(e) => setSimSpeed(Number(e.target.value))}
                className="w-20 sm:w-28 h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#47317f]"
                title={`Płynny suwak prędkości: x${simSpeed}`}
              />
              <span className="text-[11px] font-mono font-bold text-slate-700 min-w-[38px]">
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
      </div>
    </div>
  );
}
