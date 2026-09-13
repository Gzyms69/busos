"use client";

import React, { useState } from "react";
import { Tabs, Tab, Tag } from "@blueprintjs/core";
import { useFoundryStore } from "@/lib/store";
import RouteCatalogGrid from "./RouteCatalogGrid";
import RouteStepperView from "./RouteStepperView";
import RouteSpeedGrid from "./RouteSpeedGrid";

export default function RoutesModule() {
  const { selectedCity, activeRouteUid, setActiveRoute } = useFoundryStore();
  const [activeTab, setActiveTab] = useState<string>("catalog");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: "14px 16px",
        overflow: "hidden",
      }}
    >
      {/* Module Header */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 10,
          marginBottom: 10,
          paddingBottom: 10,
          borderBottom: "1px solid #2f343c",
        }}
      >
        <div style={{ minWidth: 0, flex: "1 1 auto" }}>
          <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
            <h2
              style={{
                margin: 0,
                fontSize: 15,
                fontWeight: 800,
                color: "#f6f7f9",
                letterSpacing: "0.03em",
              }}
            >
              LINIE I TRASY: {selectedCity.toUpperCase()}
            </h2>
            <Tag minimal intent="primary" style={{ fontSize: 9, fontWeight: 700 }}>
              GTFS
            </Tag>
            {activeRouteUid && (
              <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <Tag intent="success" style={{ fontSize: 10, fontWeight: 800 }}>
                  Linia: {activeRouteUid.replace(new RegExp(`^${selectedCity}_`, "i"), "")}
                </Tag>
                <button
                  type="button"
                  onClick={() => setActiveRoute(null)}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "#9ca3af",
                    cursor: "pointer",
                    fontSize: 11,
                    padding: "2px 4px",
                  }}
                  title="Odznacz linię"
                >
                  ✕
                </button>
              </div>
            )}
          </div>
          <div style={{ fontSize: 11, color: "#8f99a8", marginTop: 2 }}>
            Katalog linii, dynamiczny przebieg tras oraz prędkości handlowe.
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          minHeight: 0,
        }}
        className="routes-tabs-container"
      >
        <Tabs
          id="routes-tabs"
          selectedTabId={activeTab}
          onChange={(newTab) => setActiveTab(String(newTab))}
          renderActiveTabPanelOnly
        >
          <Tab
            id="catalog"
            title="Katalog Linii"
            panel={
              <div style={{ height: "100%", display: "flex", flexDirection: "column", minHeight: 0 }}>
                <RouteCatalogGrid onRouteSelect={() => setActiveTab("stepper")} />
              </div>
            }
          />
          <Tab
            id="stepper"
            title="Przebieg Trasy"
            panel={
              <div style={{ height: "100%", display: "flex", flexDirection: "column", minHeight: 0 }}>
                <RouteStepperView />
              </div>
            }
          />
          <Tab
            id="edges"
            title="Prędkości Handlowe"
            panel={
              <div style={{ height: "100%", display: "flex", flexDirection: "column", minHeight: 0 }}>
                <RouteSpeedGrid />
              </div>
            }
          />
        </Tabs>
      </div>
    </div>
  );
}
