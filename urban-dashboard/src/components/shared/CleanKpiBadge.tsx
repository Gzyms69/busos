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
    purple: "border-l-[3px] border-l-[#47317f]",
    emerald: "border-l-[3px] border-l-emerald-600",
    amber: "border-l-[3px] border-l-amber-500",
    blue: "border-l-[3px] border-l-blue-600",
    default: "border-slate-200",
  };

  return (
    <div
      className={`bg-white rounded-xl border border-slate-200/90 p-3 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all hover:shadow-md flex flex-col justify-between ${
        accentBorderMap[accentColor]
      }`}
    >
      <div className="flex items-start justify-between gap-1.5 mb-1 min-h-[28px]">
        <span
          className="text-[11px] font-bold uppercase tracking-tight text-slate-500 leading-snug line-clamp-2 break-words"
          title={label}
        >
          {label}
        </span>
        {icon && <span className="text-slate-400 shrink-0 mt-0.5">{icon}</span>}
      </div>

      <div className="text-lg font-bold font-mono text-slate-900 tracking-tight tabular-nums my-0.5">
        {value}
      </div>

      {(subtext || trend) && (
        <div className="mt-1 flex items-center gap-1.5 text-[11px] text-slate-500 leading-tight">
          {trend && (
            <span
              className={`font-semibold shrink-0 ${
                trend.positive ? "text-emerald-600" : "text-amber-600"
              }`}
            >
              {trend.text}
            </span>
          )}
          {subtext && (
            <span className="line-clamp-1 text-slate-400" title={subtext}>
              {subtext}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
