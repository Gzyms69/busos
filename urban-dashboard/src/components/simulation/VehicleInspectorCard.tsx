"use client";

import React, { useEffect } from "react";
import { Bus, Navigation, MapPin, Eye, EyeOff, FastForward } from "lucide-react";
import { useFoundryStore } from "@/lib/store";
import FloatingWindow from "@/components/shell/FloatingWindow";

export default function VehicleInspectorCard() {
  const {
    selectedVehicle,
    selectVehicle,
    isFollowingVehicle,
    setFollowingVehicle,
    openWindow,
    closeWindow,
  } = useFoundryStore();

  useEffect(() => {
    if (selectedVehicle) {
      openWindow("vehicle-inspector");
    } else {
      closeWindow("vehicle-inspector");
    }
  }, [selectedVehicle, openWindow, closeWindow]);

  if (!selectedVehicle) return null;

  return (
    <FloatingWindow
      id="vehicle-inspector"
      title={`Linia ${selectedVehicle.routeShortName}`}
      subtitle={selectedVehicle.headsign || "Pojazd w trasie"}
      icon={<Bus className="w-4 h-4" />}
      presetWidths={[300, 360, 420]}
      allowDock={false}
      allowResize={true}
      allowMinimize={true}
      allowMaximize={false}
      allowClose={true}
      onClose={() => selectVehicle(null)}
    >
      <div className="p-3 sm:p-4 text-slate-800 flex flex-col gap-3 overflow-y-auto">
        {/* Header: Line Badge & Headsign */}
        <div className="flex items-center gap-2.5">
          <div
            className="px-2.5 py-1 rounded-xl text-white font-black text-sm tracking-wide shadow-xs shrink-0"
            style={{ backgroundColor: selectedVehicle.routeColor || "#47317f" }}
          >
            {selectedVehicle.routeShortName}
          </div>
          <div className="min-w-0">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Kierunek kursu
            </div>
            <div className="text-xs font-bold text-slate-900 truncate">
              {selectedVehicle.headsign}
            </div>
          </div>
        </div>

        {/* Telemetry Metrics Grid */}
        <div className="grid grid-cols-2 gap-2">
          <div className="p-2 bg-slate-50 border border-slate-100 rounded-xl">
            <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400 mb-0.5">
              <FastForward className="w-3 h-3 text-[#47317f]" />
              <span>Prędkość:</span>
            </div>
            <div className="text-sm font-black text-slate-900 font-mono">
              {selectedVehicle.speedKmh}{" "}
              <span className="text-[10px] font-normal text-slate-500 font-sans">km/h</span>
            </div>
          </div>

          <div className="p-2 bg-slate-50 border border-slate-100 rounded-xl">
            <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400 mb-0.5">
              <Navigation className="w-3 h-3 text-[#47317f]" />
              <span>Kąt kursu:</span>
            </div>
            <div className="text-sm font-black text-slate-900 font-mono">
              {Math.round(selectedVehicle.bearing)}°
            </div>
          </div>
        </div>

        {/* Stops & Progress */}
        <div className="space-y-2 text-xs">
          <div className="flex items-start gap-2">
            <MapPin className="w-3.5 h-3.5 text-slate-400 mt-0.5 shrink-0" />
            <div className="min-w-0">
              <div className="text-[10px] text-slate-400 font-semibold">Ostatni słupek:</div>
              <div className="font-semibold text-slate-700 truncate">
                {selectedVehicle.currentStopName || "W trasie"}
              </div>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <MapPin className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
            <div className="min-w-0">
              <div className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1.5">
                <span>Następny przystanek</span>
                <span className="font-mono text-slate-500">
                  (za {Math.round(selectedVehicle.nextStopEtaSec)}s)
                </span>
              </div>
              <div className="font-bold text-slate-900 truncate">
                {selectedVehicle.nextStopName}
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="pt-1">
            <div className="flex justify-between text-[10px] font-bold text-slate-400 mb-1">
              <span>Postęp trasy</span>
              <span className="font-mono">{Math.round(selectedVehicle.progress * 100)}%</span>
            </div>
            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-300"
                style={{
                  width: `${Math.round(selectedVehicle.progress * 100)}%`,
                  backgroundColor: selectedVehicle.routeColor || "#47317f",
                }}
              />
            </div>
          </div>
        </div>

        {/* Actions: Follow / Stop following */}
        <div className="pt-1 border-t border-slate-100">
          <button
            type="button"
            onClick={() => setFollowingVehicle(!isFollowingVehicle)}
            className={`w-full py-1.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              isFollowingVehicle
                ? "bg-[#47317f] text-white shadow-xs shadow-[#47317f]/20"
                : "bg-slate-100 hover:bg-slate-200 text-slate-700"
            }`}
          >
            {isFollowingVehicle ? (
              <>
                <Eye className="w-3.5 h-3.5" />
                <span>Śledzenie aktywne</span>
              </>
            ) : (
              <>
                <EyeOff className="w-3.5 h-3.5 text-slate-400" />
                <span>Śledź ten pojazd na mapie</span>
              </>
            )}
          </button>
        </div>
      </div>
    </FloatingWindow>
  );
}
