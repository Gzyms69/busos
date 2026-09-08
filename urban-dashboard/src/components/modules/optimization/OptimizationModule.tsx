"use client";

import React, { useState } from "react";
import { Tabs, Tab, Tag } from "@blueprintjs/core";
import { useFoundryStore } from "@/lib/store";
import AxeListGrid from "./AxeListGrid";
import InvestmentGrid from "./InvestmentGrid";

export default function OptimizationModule() {
  const { selectedCity } = useFoundryStore();
  const [activeTab, setActiveTab] = useState<string>("axe");

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
              OPTIMIZATION & POLICY: {selectedCity.toUpperCase()}
            </h2>
            <Tag minimal intent="danger" style={{ fontSize: 10, fontWeight: 700 }}>
              POLICY AUDIT
            </Tag>
          </div>
          <div style={{ fontSize: 11, color: "#8f99a8", marginTop: 3 }}>
            Optymalizacja siatki połączeń: redukcja kanibalizujących się przystanków (TCRP 100) oraz eliminacja pustyń (TDI).
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <Tabs
          id="optimization-tabs"
          selectedTabId={activeTab}
          onChange={(newTab) => setActiveTab(String(newTab))}
        >
          <Tab
            id="axe"
            title="The Axe List (Redukcja TCRP 100)"
            panel={
              <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <AxeListGrid />
              </div>
            }
          />
          <Tab
            id="investment"
            title="The Investment List (Pustynie TDI)"
            panel={
              <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <InvestmentGrid />
              </div>
            }
          />
        </Tabs>
      </div>
    </div>
  );
}
