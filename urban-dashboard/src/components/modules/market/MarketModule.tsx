"use client";

import React, { useState } from "react";
import { Tabs, Tab, Tag } from "@blueprintjs/core";
import { useFoundryStore } from "@/lib/store";
import MarketKpiCards from "./MarketKpiCards";
import PriceTrendsChart from "./PriceTrendsChart";
import StopsValuationGrid from "./StopsValuationGrid";
import TransactionsRankingGrid from "./TransactionsRankingGrid";
import MarketH3AnalysisCard from "./MarketH3AnalysisCard";

export default function MarketModule() {
  const { selectedCity } = useFoundryStore();
  const [activeTab, setActiveTab] = useState<string>("valuation");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: "16px 20px",
        overflow: "hidden",
      }}
    >
      {/* Module Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
          marginBottom: 12,
          paddingBottom: 10,
          borderBottom: "1px solid #2f343c",
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <h2
              style={{
                margin: 0,
                fontSize: 16,
                fontWeight: 800,
                color: "#f6f7f9",
                letterSpacing: 0.5,
              }}
            >
              RYNEK MIESZKANIOWY: {selectedCity.toUpperCase()}
            </h2>
            <Tag minimal intent="success" style={{ fontSize: 10, fontWeight: 700 }}>
              DANE RCN
            </Tag>
          </div>
          <div style={{ fontSize: 11, color: "#8f99a8", marginTop: 3 }}>
            Wyceny mieszkań w sąsiedztwie przystanków, trendy cenowe 2020–2026 oraz rejestr transakcji notarialnych.
          </div>
        </div>
      </div>

      {/* Top KPI Cards */}
      <MarketKpiCards />

      {/* Tabs Navigation */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <Tabs
          id="market-tabs"
          selectedTabId={activeTab}
          onChange={(newTab) => setActiveTab(String(newTab))}
        >
          <Tab
            id="valuation"
            title="Ceny przy Przystankach"
            panel={
              <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <StopsValuationGrid />
              </div>
            }
          />
          <Tab
            id="trends"
            title="Trendy Cenowe (2020–2026)"
            panel={
              <div style={{ height: "100%", display: "flex", flexDirection: "column", overflowY: "auto" }}>
                <PriceTrendsChart />
                <MarketH3AnalysisCard />
              </div>
            }
          />
          <Tab
            id="transactions"
            title="Rejestr Transakcji"
            panel={
              <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <TransactionsRankingGrid />
              </div>
            }
          />
        </Tabs>
      </div>
    </div>
  );
}
