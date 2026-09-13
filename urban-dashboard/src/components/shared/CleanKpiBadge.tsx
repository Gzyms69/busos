"use client";

import React from "react";

interface CleanKpiBadgeProps {
  label: string;
  value: string | number;
  subtext?: string;
  trend?: {
    text: string;
    positive?: boolean;
  };
  accentColor?: "purple" | "emerald" | "amber" | "blue" | "default";
  icon?: React.ReactNode;
}

export default function CleanKpiBadge({
  label,
  value,
  subtext,
  trend,
  accentColor = "default",
  icon,
}: CleanKpiBadgeProps) {
  const accentBorderMap = {
    purple: "border-l-4 border-l-[#47317f]",
    emerald: "border-l-4 border-l-emerald-600",
    amber: "border-l-4 border-l-amber-500",
    blue: "border-l-4 border-l-blue-600",
    default: "border-slate-200",
  };

  return (
    <div
      className={`bg-white rounded-xl border border-slate-200 p-3.5 shadow-sm transition-all hover:shadow-md ${
        accentBorderMap[accentColor]
      }`}
    >
      <div className="flex items-center justify-between gap-2 mb-1.5">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 truncate">
          {label}
        </span>
        {icon && <span className="text-slate-400 shrink-0">{icon}</span>}
      </div>

      <div className="text-xl font-extrabold text-slate-900 tracking-tight tabular-nums">
        {value}
      </div>

      {(subtext || trend) && (
        <div className="mt-1 flex items-center gap-1.5 text-xs text-slate-500">
          {trend && (
            <span
              className={`font-semibold ${
                trend.positive ? "text-emerald-600" : "text-amber-600"
              }`}
            >
              {trend.text}
            </span>
          )}
          {subtext && <span className="truncate">{subtext}</span>}
        </div>
      )}
    </div>
  );
}
