"use client";

import React from "react";
import { Compass, RotateCcw, RotateCw, Plus, Minus, Crosshair } from "lucide-react";
import { useFoundryStore } from "@/lib/store";

export default function MobileCameraControls() {
  const { viewState, setViewState, resetView } = useFoundryStore();

  const bearing = Math.round(viewState.bearing || 0);
  const pitch = Math.round(viewState.pitch || 0);
  const zoom = viewState.zoom || 12;
  const is3D = pitch > 15;

  const handleResetBearing = () => {
    setViewState({ bearing: 0 });
  };

  const handleToggle3D = () => {
    setViewState({
      pitch: is3D ? 0 : 55,
    });
  };

  const handleRotateStep = (delta: number) => {
    let nextBearing = (bearing + delta) % 360;
    if (nextBearing < -180) nextBearing += 360;
    if (nextBearing > 180) nextBearing -= 360;
    setViewState({ bearing: nextBearing });
  };

  const handleZoom = (delta: number) => {
    setViewState({
      zoom: Math.max(9, Math.min(20, zoom + delta)),
    });
  };

  return (
    <aside
      aria-label="Mobilna kontrola kamery 3D"
      className="fixed right-3 bottom-24 z-20 md:hidden flex flex-col items-center gap-1.5 pointer-events-auto"
    >
      {/* 1. Dynamic Compass Widget */}
      <button
        type="button"
        onClick={handleResetBearing}
        className="w-11 h-11 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-[0_4px_16px_rgba(0,0,0,0.12)] flex flex-col items-center justify-center p-1 cursor-pointer active:scale-95 transition-all text-slate-700"
        title={`Resetuj orientację na Północ (Azymut: ${bearing}°)`}
        aria-label="Wyrównaj do północy"
      >
        <div
          className="w-6 h-6 flex items-center justify-center transition-transform duration-200"
          style={{ transform: `rotate(${-bearing}deg)` }}
        >
          {/* Custom SVG Compass Needle */}
          <svg viewBox="0 0 24 24" className="w-5 h-5 drop-shadow-xs" fill="none">
            {/* North Red Pointer */}
            <polygon points="12,2 16,12 12,9" fill="#ef4444" />
            <polygon points="12,2 8,12 12,9" fill="#dc2626" />
            {/* South Slate Pointer */}
            <polygon points="12,22 16,12 12,15" fill="#94a3b8" />
            <polygon points="12,22 8,12 12,15" fill="#64748b" />
          </svg>
        </div>
        <span className="text-[9px] font-black tracking-tight text-slate-500 leading-none">
          {bearing === 0 ? "N" : `${bearing}°`}
        </span>
      </button>

      {/* 2. 2D / 3D Tilt Toggle */}
      <button
        type="button"
        onClick={handleToggle3D}
        className={`w-11 h-11 rounded-2xl border shadow-[0_4px_16px_rgba(0,0,0,0.12)] flex flex-col items-center justify-center cursor-pointer active:scale-95 transition-all ${
          is3D
            ? "bg-[#47317f] border-[#47317f] text-white shadow-[#47317f]/25"
            : "bg-white/95 backdrop-blur-md border-slate-200/90 text-slate-700"
        }`}
        title={is3D ? "Przełącz na widok 2D (z góry)" : "Przełącz na perspektywę 3D (nachylenie)"}
        aria-label="Przełącz perspektywę 2D i 3D"
      >
        <span className="text-[11px] font-black tracking-wider">
          {is3D ? "3D" : "2D"}
        </span>
        <span className="text-[8px] font-semibold opacity-75 leading-none">
          {is3D ? `${pitch}°` : "Płasko"}
        </span>
      </button>

      {/* 3. Step Rotation Buttons (↺ 45° / ↻ 45°) */}
      <div className="flex flex-col bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.12)] overflow-hidden">
        <button
          type="button"
          onClick={() => handleRotateStep(-45)}
          className="w-11 h-10 flex items-center justify-center text-slate-700 hover:text-[#47317f] active:bg-slate-100 transition-colors border-b border-slate-100 cursor-pointer"
          title="Obróć w lewo o 45°"
          aria-label="Obróć w lewo o 45 stopni"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => handleRotateStep(45)}
          className="w-11 h-10 flex items-center justify-center text-slate-700 hover:text-[#47317f] active:bg-slate-100 transition-colors cursor-pointer"
          title="Obróć w prawo o 45°"
          aria-label="Obróć w prawo o 45 stopni"
        >
          <RotateCw className="w-4 h-4" />
        </button>
      </div>

      {/* 4. Single-Thumb Zoom Controls (+ / -) */}
      <div className="flex flex-col bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.12)] overflow-hidden">
        <button
          type="button"
          onClick={() => handleZoom(0.75)}
          className="w-11 h-10 flex items-center justify-center text-slate-700 hover:text-[#47317f] active:bg-slate-100 transition-colors border-b border-slate-100 cursor-pointer"
          title="Przybliż mapę"
          aria-label="Przybliż mapę"
        >
          <Plus className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => handleZoom(-0.75)}
          className="w-11 h-10 flex items-center justify-center text-slate-700 hover:text-[#47317f] active:bg-slate-100 transition-colors cursor-pointer"
          title="Oddal mapę"
          aria-label="Oddal mapę"
        >
          <Minus className="w-4 h-4" />
        </button>
      </div>

      {/* 5. Recenter City View */}
      <button
        type="button"
        onClick={resetView}
        className="w-11 h-11 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-[0_4px_16px_rgba(0,0,0,0.12)] flex items-center justify-center text-slate-600 hover:text-[#47317f] cursor-pointer active:scale-95 transition-all"
        title="Wycentruj widok aglomeracji"
        aria-label="Wycentruj widok aglomeracji"
      >
        <Crosshair className="w-4 h-4" />
      </button>
    </aside>
  );
}
