"use client";

import React, { useState } from "react";
import { Tabs, Tab, Tag } from "@blueprintjs/core";
import { useFoundryStore } from "@/lib/store";
import StopsDataGrid from "./StopsDataGrid";
import HubsDataGrid from "./HubsDataGrid";
import PoiSearchOverlay from "./PoiSearchOverlay";

export default function NetworkModule() {
  const { selectedCity } = useFoundryStore();
  const [activeTab, setActiveTab] = useState<string>("stops");

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
              PRZYSTANKI I WĘZŁY: {selectedCity.toUpperCase()}
            </h2>
            <Tag minimal intent="primary" style={{ fontSize: 10, fontWeight: 700 }}>
              KATALOG PUNKTÓW
            </Tag>
          </div>
          <div style={{ fontSize: 11, color: "#8f99a8", marginTop: 3 }}>
            Eksplorator przystanków i węzłów przesiadkowych z parametrami obsługi pasażerskiej.
          </div>
        </div>

        {/* POI Search with DuckDB Pushdown */}
        <PoiSearchOverlay />
      </div>

      {/* Tabs Navigation */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <Tabs
          id="network-tabs"
          selectedTabId={activeTab}
          onChange={(newTab) => setActiveTab(String(newTab))}
        >
          <Tab
            id="stops"
            title="Przystanki"
            panel={
              <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <StopsDataGrid />
              </div>
            }
          />
          <Tab
            id="hubs"
            title="Węzły Przesiadkowe"
            panel={
              <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <HubsDataGrid />
              </div>
            }
          />
        </Tabs>
      </div>
    </div>
  );
}
