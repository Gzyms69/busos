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
              BENCHMARKING KRAJOWY: OGÓLNOPOLSKI AUDYT 30 MIAST
            </h2>
            <Tag minimal intent="primary" style={{ fontSize: 10, fontWeight: 700 }}>
              LEADERBOARD POLSKA
            </Tag>
          </div>
          <div style={{ fontSize: 11, color: "#8f99a8", marginTop: 3 }}>
            Porównanie 30 skalibrowanych aglomeracji, rozkłady statystyczne 60k słupków i analiza side-by-side.
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <Tabs
          id="benchmark-tabs"
          selectedTabId={activeTab}
          onChange={(newTab) => setActiveTab(String(newTab))}
        >
          <Tab
            id="leaderboard"
            title="Tablica Liderów (30 Miast / Polska)"
            panel={
              <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <NationalLeaderboardGrid />
              </div>
            }
          />
          <Tab
            id="compare"
            title="Porównywarka Miast (Side-by-Side)"
            panel={
              <div style={{ height: "100%", display: "flex", flexDirection: "column", overflowY: "auto" }}>
                <CityComparisonView />
              </div>
            }
          />
          <Tab
            id="distribution"
            title="Rozkład Kwantylowy Metryk"
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
