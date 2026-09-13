"use client";

import React from "react";
import { RefreshCw, WifiOff } from "lucide-react";

interface PanelErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
  isRetrying?: boolean;
}

export default function PanelErrorState({
  title = "Błąd pobierania danych",
  message = "Nie udało się połączyć z API BusOS. Sprawdź połączenie sieciowe lub spróbuj ponownie.",
  onRetry,
  isRetrying = false,
}: PanelErrorStateProps) {
  return (
    <div className="p-6 m-4 rounded-2xl bg-slate-50/80 border border-slate-200/90 text-center flex flex-col items-center justify-center gap-3 animate-in fade-in-50 duration-200">
      <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 shadow-sm">
        <WifiOff className="w-5 h-5 text-slate-400" />
      </div>

      <div>
        <h3 className="text-xs font-semibold text-slate-800 mb-1">
          {title}
        </h3>
        <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
          {message}
        </p>
      </div>

      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          disabled={isRetrying}
          className="mt-1 px-4 py-2 rounded-xl bg-white hover:bg-slate-100/80 border border-slate-200 text-xs font-semibold text-[#47317f] shadow-xs transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center gap-2 cursor-pointer disabled:opacity-50"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isRetrying ? "animate-spin text-[#47317f]" : "text-slate-400"}`} />
          <span>{isRetrying ? "Ponawianie..." : "Ponów próbę"}</span>
        </button>
      )}
    </div>
  );
}
