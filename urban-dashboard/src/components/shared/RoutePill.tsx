"use client";

import React from "react";
import type { RouteItem } from "@/lib/api/types";

interface RoutePillProps {
  route: RouteItem;
  onClick?: () => void;
  isActive?: boolean;
}

export default function RoutePill({ route, onClick, isActive }: RoutePillProps) {
  const lineName = route.short_name || route.route_uid?.replace(/^route_/, "") || "Linia";
  const destination = route.headsign || route.long_name || "";
  const routeColor = route.color ? (route.color.startsWith("#") ? route.color : `#${route.color}`) : "#47317f";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`group inline-flex items-center gap-2 px-2.5 py-1 rounded-lg border text-left transition-all duration-150 cursor-pointer ${
        isActive
          ? "bg-[#f5f2fa] border-[#47317f] shadow-sm"
          : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50"
      }`}
    >
      <span
        className="px-1.5 py-0.5 rounded text-[11px] font-black tracking-tight text-white shrink-0"
        style={{ backgroundColor: routeColor }}
      >
        {lineName}
      </span>
      {destination && (
        <span className="text-xs font-medium text-slate-700 truncate max-w-[150px] group-hover:text-slate-900">
          {destination}
        </span>
      )}
    </button>
  );
}
