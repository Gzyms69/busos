"use client";

import React from "react";
import type { RouteItem } from "@/lib/api/types";
import { Eye, ChevronRight } from "lucide-react";

interface InteractiveRouteBadgeProps {
  line: string;
  route?: RouteItem | null;
  isActive?: boolean;
  onToggleHighlight: () => void;
  onInspect?: () => void;
  title?: string;
}

export default function InteractiveRouteBadge({
  line,
  route,
  isActive = false,
  onToggleHighlight,
  onInspect,
  title,
}: InteractiveRouteBadgeProps) {
  const rawColor = route?.color;
  const color = rawColor
    ? rawColor.startsWith("#")
      ? rawColor
      : `#${rawColor}`
    : "#47317f";

  const destination = route?.headsign || route?.long_name || "";

  return (
    <div
      className={`inline-flex items-center rounded-lg border transition-all duration-150 ${
        isActive
          ? "bg-[#f5f2fa] border-[#47317f] shadow-sm ring-2 ring-[#47317f]/20"
          : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50"
      }`}
    >
      <button
        type="button"
        onClick={onToggleHighlight}
        aria-pressed={isActive}
        title={title || (isActive ? `Linia ${line}: Wyłącz podświetlenie na mapie` : `Linia ${line}: Podświetl na mapie`)}
        className="inline-flex items-center gap-1.5 px-2 py-1 cursor-pointer select-none text-left"
      >
        <span
          className="px-1.5 py-0.5 rounded text-[11px] font-black text-white shrink-0 tracking-tight"
          style={{ backgroundColor: color }}
        >
          {line}
        </span>

        {destination && (
          <span className="text-[11px] font-medium text-slate-700 truncate max-w-[110px] hidden sm:inline">
            {destination}
          </span>
        )}

        {isActive && (
          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#47317f] bg-purple-100/80 px-1 py-0.5 rounded shrink-0">
            <Eye className="w-3 h-3" />
            <span className="hidden md:inline">Aktywna</span>
          </span>
        )}
      </button>

      {onInspect && (
        <button
          type="button"
          onClick={onInspect}
          aria-label={`Pokaż profil trasy linii ${line}`}
          title="Otwórz pełny profil linii i przystanki"
          className="px-1.5 py-1 text-slate-400 hover:text-[#47317f] hover:bg-slate-100/80 border-l border-slate-100 rounded-r-lg transition-colors cursor-pointer"
        >
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
}
