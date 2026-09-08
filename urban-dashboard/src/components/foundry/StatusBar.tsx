"use client";

import React from "react";
import { Tag } from "@blueprintjs/core";
import { useFoundryStore } from "@/lib/store";

export default function StatusBar() {
  const {
    selectedCity,
    selectionType,
    selectedId,
    selectedData,
    lastLatencyMs,
    activeModule,
  } = useFoundryStore();

  const getSelectionText = () => {
    if (!selectionType || !selectedId) return "Brak aktywnego zaznaczenia";
    if (selectionType === "stop") {
      const name = selectedData?.stop_name ? ` (${selectedData.stop_name})` : "";
      return `Słupek: ${selectedId}${name}`;
    }
    if (selectionType === "hub") {
      const name = selectedData?.hub_name ? ` (${selectedData.hub_name})` : "";
      return `Węzeł: ${selectedId}${name}`;
    }
    if (selectionType === "hex") {
      return `Heks H3: ${selectedId}`;
    }
    if (selectionType === "route") {
      return `Linia GTFS: ${selectedId}`;
    }
    return `Wybrano: ${selectedId}`;
  };

  return (
    <div
      className="bp6-dark"
      style={{
        height: 28,
        minHeight: 28,
        background: "#14171b",
        borderTop: "1px solid #2f343c",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 14px",
        fontSize: 11,
        color: "#8f99a8",
        zIndex: 20,
        userSelect: "none",
      }}
    >
      {/* Left: Active Environment & Scope */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#0f9960" }} />
          <span>Aglomeracja:</span>
          <b style={{ color: "#f6f7f9" }}>{selectedCity.toUpperCase()}</b>
        </span>

        <span style={{ color: "#383e47" }}>|</span>

        <span>
          Moduł: <b style={{ color: "#2b95d6" }}>{activeModule.toUpperCase()}</b>
        </span>
      </div>

      {/* Center: Selection Feedback */}
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ color: selectionType ? "#f6f7f9" : "#656e7b" }}>
          {getSelectionText()}
        </span>
        {selectionType && (
          <Tag minimal intent="primary" style={{ fontSize: 9, padding: "0 4px" }}>
            {selectionType.toUpperCase()}
          </Tag>
        )}
      </div>

      {/* Right: Technical Telemetry */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {lastLatencyMs != null && (
          <span>
            API Latencja: <b style={{ color: "#f6f7f9" }}>{lastLatencyMs} ms</b>
          </span>
        )}
        <span style={{ color: "#383e47" }}>|</span>
        <span>Foundry Engine: <b style={{ color: "#f6f7f9" }}>DuckDB / GEOS</b></span>
        <span style={{ color: "#383e47" }}>|</span>
        <span style={{ opacity: 0.8 }}>OCI Ampere A1</span>
      </div>
    </div>
  );
}
