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
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
          marginBottom: 10,
          paddingBottom: 8,
          borderBottom: "1px solid #2f343c",
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            <h2
              style={{
                margin: 0,
                fontSize: 16,
                fontWeight: 800,
                color: "#f6f7f9",
                letterSpacing: "0.03em",
              }}
            >
              PAKIET DECYZYJNY ZTM: {selectedCity.toUpperCase()}
            </h2>
            <Tag minimal intent="danger" style={{ fontSize: 9, fontWeight: 700 }}>
              OPTYMALIZACJA SIECI
            </Tag>
          </div>
          <div style={{ fontSize: 11, color: "#8f99a8", marginTop: 2 }}>
            Siedem dedykowanych narzędzi planistycznych: likwidacja dubli, kalkulacja wzkm, ROI buspasów i potoki APC.
          </div>
        </div>
      </div>

      {/* Horizontally Scrollable Tool Sub-Navigation Dock */}
      <div
        style={{
          display: "flex",
          gap: 6,
          overflowX: "auto",
          paddingBottom: 6,
          marginBottom: 10,
          borderBottom: "1px solid #27272a",
          minHeight: 38,
        }}
        className="no-scrollbar"
      >
        {OPTIMIZATION_TOOLS.map((t, idx) => {
          const isActive = activeTab === t.id;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setActiveTab(t.id)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "5px 10px",
                borderRadius: 6,
                background: isActive ? "rgba(56, 189, 248, 0.15)" : "rgba(24, 28, 35, 0.6)",
                border: `1px solid ${isActive ? "#38bdf8" : "#2f343c"}`,
                color: isActive ? "#38bdf8" : "#9ca3af",
                fontSize: 11,
                fontWeight: isActive ? 700 : 500,
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "all 0.15s ease",
              }}
            >
              <span className="tabular-nums font-mono text-xs" style={{ opacity: 0.7 }}>
                {idx + 1}.
              </span>
              <span>{t.label}</span>
              {t.badge && (
                <span
                  style={{
                    fontSize: 9,
                    padding: "1px 4px",
                    borderRadius: 3,
                    background: isActive ? "rgba(56, 189, 248, 0.25)" : "rgba(107, 114, 128, 0.2)",
                    color: isActive ? "#e0f2fe" : "#9ca3af",
                    fontWeight: 700,
                  }}
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
