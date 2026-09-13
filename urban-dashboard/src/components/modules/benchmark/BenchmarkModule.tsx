"use client";

import React, { useState } from "react";
import { Tabs, Tab, Tag } from "@blueprintjs/core";
import NationalLeaderboardGrid from "./NationalLeaderboardGrid";
import CityComparisonView from "./CityComparisonView";
import MetricDistributionWidget from "./MetricDistributionWidget";

export default function BenchmarkModule() {
  const [activeTab, setActiveTab] = useState<string>("leaderboard");

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
          paddingBottom: 10,
          borderBottom: "1px solid #e2e8f0",
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            <h2
              style={{
                margin: 0,
                fontSize: 16,
                fontWeight: 800,
                color: "#0f172a",
                letterSpacing: "0.03em",
              }}
            >
              RANKING MIAST: AUDYT 30 POLSKICH AGLOMERACJI
            </h2>
            <Tag minimal intent="primary" style={{ fontSize: 9, fontWeight: 700 }}>
              BENCHMARK PL
            </Tag>
          </div>
          <div style={{ fontSize: 11, color: "#64748b", marginTop: 2 }}>
            Metryki dostępności, spójność GTFS oraz korelacje cen transakcyjnych mieszkań RCN w 30 miastach.
          </div>
        </div>

        {/* National Telemetry Chips */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              background: "#f1f5f9",
              border: "1px solid #e2e8f0",
              borderRadius: 6,
              padding: "4px 8px",
              fontSize: 11,
            }}
          >
            <span style={{ color: "#64748b" }}>Aglomeracje:</span>
            <span className="tabular-nums font-bold text-sky-700">30</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              background: "#f1f5f9",
              border: "1px solid #e2e8f0",
              borderRadius: 6,
              padding: "4px 8px",
              fontSize: 11,
            }}
          >
            <span style={{ color: "#64748b" }}>GTFS / DuckDB:</span>
            <span className="tabular-nums font-bold text-emerald-700">100% spójności</span>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", minHeight: 0 }}>
        <Tabs
          id="benchmark-tabs"
          selectedTabId={activeTab}
          onChange={(newTab) => setActiveTab(String(newTab))}
        >
          <Tab
            id="leaderboard"
            title="Ranking 30 Miast"
            panel={
              <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <NationalLeaderboardGrid />
              </div>
            }
          />
          <Tab
            id="compare"
            title="Porównanie Miast"
            panel={
              <div style={{ height: "100%", display: "flex", flexDirection: "column", overflowY: "auto" }}>
                <CityComparisonView />
              </div>
            }
          />
          <Tab
            id="distribution"
            title="Rozkład Wskaźników"
            panel={
              <div style={{ height: "100%", display: "flex", flexDirection: "column", overflowY: "auto" }}>
                <MetricDistributionWidget />
              </div>
            }
          />
        </Tabs>
      </div>
    </div>
  );
}
