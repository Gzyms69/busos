"use client";

import React, { useState } from "react";
import { Tabs, Tab, Tag } from "@blueprintjs/core";
import { useFoundryStore } from "@/lib/store";
import RouteCatalogGrid from "./RouteCatalogGrid";
import RouteStepperView from "./RouteStepperView";
import RouteSpeedGrid from "./RouteSpeedGrid";

export default function RoutesModule() {
  const { selectedCity, activeRouteUid } = useFoundryStore();
  const [activeTab, setActiveTab] = useState<string>("catalog");

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
              ROUTE ANALYZER: {selectedCity.toUpperCase()}
            </h2>
            <Tag minimal intent="primary" style={{ fontSize: 10, fontWeight: 700 }}>
              GTFS TOPOLOGIA & LRS
            </Tag>
            {activeRouteUid && (
              <Tag intent="success" style={{ fontSize: 10, fontWeight: 800 }}>
                Aktywna linia: {activeRouteUid}
              </Tag>
            )}
          </div>
          <div style={{ fontSize: 11, color: "#8f99a8", marginTop: 3 }}>
            Katalog linii GTFS, wertykalny stepper sekwencji z LRS, czasy netto $\Delta t$ oraz wąskie gardła prędkości handlowej.
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <Tabs
          id="routes-tabs"
          selectedTabId={activeTab}
          onChange={(newTab) => setActiveTab(String(newTab))}
        >
          <Tab
            id="catalog"
            title="Katalog Linii"
            panel={
              <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <RouteCatalogGrid onRouteSelect={() => setActiveTab("stepper")} />
              </div>
            }
          />
          <Tab
            id="stepper"
            title="Sekwencja i Profil LRS"
            panel={
              <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <RouteStepperView />
              </div>
            }
          />
          <Tab
            id="edges"
            title="Prędkości Odcinkowe (Edges)"
            panel={
              <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <RouteSpeedGrid />
              </div>
            }
          />
        </Tabs>
      </div>
    </div>
  );
}
