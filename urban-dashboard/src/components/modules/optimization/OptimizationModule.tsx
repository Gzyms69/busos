"use client";

import React, { useState } from "react";
import { Tag } from "@blueprintjs/core";
import { useFoundryStore } from "@/lib/store";
import AxeListGrid from "./AxeListGrid";
import InvestmentGrid from "./InvestmentGrid";
import WhatIfSimulator from "./WhatIfSimulator";
import WzkmBudgetCalculator from "./WzkmBudgetCalculator";
import BusLaneRoiWidget from "./BusLaneRoiWidget";
import ApcDataImporter from "./ApcDataImporter";
import StatutoryReportGenerator from "./StatutoryReportGenerator";

type OptimizationTabId =
  | "axe"
  | "investment"
  | "whatif"
  | "costing"
  | "buslane"
  | "apc"
  | "report";

interface ToolDef {
  id: OptimizationTabId;
  label: string;
  badge?: string;
}

const OPTIMIZATION_TOOLS: ToolDef[] = [
  { id: "axe", label: "Dublujące Się Przystanki", badge: "The Axe List" },
  { id: "investment", label: "Białe Plamy i Pustynie", badge: "Investment" },
  { id: "whatif", label: "Symulator What-If", badge: "Model" },
  { id: "costing", label: "Kalkulator Wzkm & Stadność", badge: "Budżet" },
  { id: "buslane", label: "Buspasy & Wąskie Gardła", badge: "ROI" },
  { id: "apc", label: "Potoki Pasażerskie (APC)", badge: "Bramki" },
  { id: "report", label: "Raport Statutowy (Plan)", badge: "Uchwała" },
];

export default function OptimizationModule() {
  const { selectedCity } = useFoundryStore();
  const [activeTab, setActiveTab] = useState<OptimizationTabId>("axe");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: "14px 18px",
        overflow: "hidden",
        minHeight: 0,
      }}
    >
      {/* Module Header */}
      <div className="flex items-start justify-between flex-wrap gap-3 mb-2.5 pb-2 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <h2 className="text-base font-extrabold text-slate-900 tracking-tight m-0">
              PAKIET DECYZYJNY ZTM: {selectedCity.toUpperCase()}
            </h2>
            <Tag minimal intent="danger" style={{ fontSize: 9, fontWeight: 700 }}>
              OPTYMALIZACJA SIECI
            </Tag>
          </div>
          <div className="text-xs text-slate-500 mt-0.5">
            Siedem dedykowanych narzędzi planistycznych: likwidacja dubli, kalkulacja wzkm, ROI buspasów i potoki APC.
          </div>
        </div>
      </div>

      {/* Horizontally Scrollable Tool Sub-Navigation Dock */}
      <div className="flex gap-1.5 overflow-x-auto pb-1.5 mb-2.5 border-b border-slate-200 min-h-[38px] no-scrollbar">
        {OPTIMIZATION_TOOLS.map((t, idx) => {
          const isActive = activeTab === t.id;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setActiveTab(t.id)}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? "bg-sky-50 text-sky-800 border border-sky-300 shadow-xs font-bold"
                  : "bg-slate-100/80 hover:bg-slate-200/70 text-slate-700 border border-slate-200"
              }`}
            >
              <span className="tabular-nums font-mono text-[10px] text-slate-400">
                {idx + 1}.
              </span>
              <span>{t.label}</span>
              {t.badge && (
                <span
                  className={`text-[9px] px-1 py-0.2 rounded font-bold uppercase tracking-wider ${
                    isActive ? "bg-sky-200/70 text-sky-900" : "bg-slate-200 text-slate-600"
                  }`}
                >
                  {t.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Active Tool Panel */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", minHeight: 0 }}>
        {activeTab === "axe" && <AxeListGrid />}
        {activeTab === "investment" && <InvestmentGrid />}
        {activeTab === "whatif" && <WhatIfSimulator />}
        {activeTab === "costing" && <WzkmBudgetCalculator />}
        {activeTab === "buslane" && <BusLaneRoiWidget />}
        {activeTab === "apc" && <ApcDataImporter />}
        {activeTab === "report" && <StatutoryReportGenerator />}
      </div>
    </div>
  );
}
