"use client";

import React, { useState } from "react";
import { ChevronDown, MapPin, RefreshCw } from "lucide-react";
import { useFoundryStore } from "@/lib/store";
import { fetchHealth } from "@/lib/api";

export default function BrandHeader() {
  const {
    selectedCity,
    setCity,
    availableCities,
    health,
    lastLatencyMs,
    connectionStatus,
    setHealth,
    setConnectionStatus,
  } = useFoundryStore();

  const [isOpen, setIsOpen] = useState(false);
  const [isRetrying, setIsRetrying] = useState(false);

  const cityName = selectedCity.charAt(0).toUpperCase() + selectedCity.slice(1);

  const handleManualRetry = async (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsRetrying(true);
    setConnectionStatus("reconnecting");
    const t0 = performance.now();
    try {
      const h = await fetchHealth();
      const latency = Math.round(performance.now() - t0);
      setHealth(h, latency);
    } catch (err: any) {
      setConnectionStatus("offline", err.message);
    } finally {
      setIsRetrying(false);
    }
  };

  return (
    <div className="relative">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/80 shadow-[0_4px_16px_rgba(0,0,0,0.06)] px-3 py-1.5 sm:px-3.5 sm:py-2 flex items-center gap-2.5 sm:gap-3">
        {/* Brand Logo & Name */}
        <a
          href="https://czerwinskidawid.pl"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 group text-decoration-none"
        >
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#47317f] flex items-center justify-center text-white font-black text-xs sm:text-sm tracking-tighter shadow-sm group-hover:scale-105 transition-transform">
            B
          </div>
          <div className="flex flex-col">
            <span className="text-xs sm:text-sm font-black tracking-tight text-slate-900 leading-none">
              BUSOS
            </span>
            <span className="hidden sm:inline text-[10px] font-semibold text-slate-400 leading-none mt-0.5">
              Analiza aglomeracji
            </span>
          </div>
        </a>

        <div className="h-4 sm:h-5 w-px bg-slate-200" />

        {/* City Dropdown Trigger */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-1.5 px-2 sm:px-2.5 py-1 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-bold text-slate-800 transition-colors cursor-pointer"
          >
            <MapPin className="w-3.5 h-3.5 text-[#47317f]" />
            <span>{cityName}</span>
            <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 mt-1.5 w-48 max-h-72 overflow-y-auto bg-white rounded-xl border border-slate-200 shadow-xl py-1 z-50">
              <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 sticky top-0 bg-white/95 backdrop-blur-sm">
                Wybierz miasto (30)
              </div>
              {availableCities.map((city) => (
                <button
                  key={city}
                  type="button"
                  onClick={() => {
                    setCity(city);
                    setIsOpen(false);
                  }}
                  className={`w-full px-3 py-1.5 text-xs text-left font-semibold hover:bg-slate-50 flex items-center justify-between cursor-pointer ${
                    selectedCity.toLowerCase() === city.toLowerCase()
                      ? "text-[#47317f] bg-[#f5f2fa]"
                      : "text-slate-700"
                  }`}
                >
                  <span className="capitalize">{city}</span>
                  {selectedCity.toLowerCase() === city.toLowerCase() && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#47317f]" />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Backend Connectivity Telemetry (Swiss Style / No Pulse Clichés) */}
        <div className="hidden lg:flex items-center">
          <div className="h-4 w-px bg-slate-200 mr-2.5" />
          {connectionStatus === "online" ? (
            <div
              title={`Połączono z API BusOS (${health?.engine || "UrbanGravity v9.5"} | Qdrant: ${health?.qdrant_connected ? "OK" : "N/A"})`}
              className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-slate-100/70 border border-slate-200/60 text-[11px] font-mono text-slate-600 select-none"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
              <span>v{health?.version || "9.5"}</span>
              {lastLatencyMs != null && (
                <>
                  <span className="text-slate-300">·</span>
                  <span>{lastLatencyMs}ms</span>
                </>
              )}
            </div>
          ) : connectionStatus === "reconnecting" || isRetrying ? (
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-amber-50 border border-amber-200 text-[11px] font-mono text-amber-700">
              <RefreshCw className="w-2.5 h-2.5 animate-spin" />
              <span>Łączenie...</span>
            </div>
          ) : (
            <button
              type="button"
              onClick={handleManualRetry}
              title="Brak połączenia z API BusOS. Kliknij, aby ponowić próbę."
              className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-amber-50/80 hover:bg-amber-100/90 border border-amber-200/80 text-[11px] font-mono text-amber-800 transition-colors cursor-pointer"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
              <span>Offline</span>
              <span className="text-amber-300">·</span>
              <span className="underline underline-offset-2">Ponów</span>
              <RefreshCw className="w-2.5 h-2.5 text-amber-600 ml-0.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
