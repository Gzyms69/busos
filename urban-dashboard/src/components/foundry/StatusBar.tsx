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
      return `Przystanek: ${selectedId}${name}`;
    }
    if (selectionType === "hub") {
      const name = selectedData?.hub_name ? ` (${selectedData.hub_name})` : "";
      return `Węzeł: ${selectedId}${name}`;
    }
    if (selectionType === "hex") {
      return `Obszar H3: ${selectedId}`;
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
        background: "#0e1017",
        borderTop: "1px solid #27272a",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 14px",
        fontSize: 11,
        color: "#94a3b8",
        zIndex: 20,
        userSelect: "none",
      }}
    >
      {/* Left: Active Environment & Scope */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "oklch(0.72 0.17 150)" }} />
          <span>Aglomeracja:</span>
          <b style={{ color: "#f8fafc", letterSpacing: 0.5 }}>{selectedCity.toUpperCase()}</b>
        </span>

        <span style={{ color: "#27272a" }}>/</span>

        <span>
          Widok: <b style={{ color: "#f8fafc" }}>{activeModule.replace("-", " ").toUpperCase()}</b>
        </span>
      </div>

      {/* Center: Selection Feedback */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, minWidth: 0 }}>
        <span style={{ color: selectionType ? "#f8fafc" : "#71717a", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
          {getSelectionText()}
        </span>
        {selectionType && (
          <Tag minimal style={{ fontSize: 9, padding: "0 4px", background: "rgba(34, 197, 94, 0.15)", color: "#22c55e", border: "1px solid rgba(34, 197, 94, 0.3)" }}>
            {selectionType.toUpperCase()}
          </Tag>
        )}
      </div>

      {/* Right: Technical Telemetry & Attribution */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {lastLatencyMs != null && (
          <span>
            API: <b style={{ color: "#f8fafc", fontFamily: "var(--font-mono, monospace)", fontVariantNumeric: "tabular-nums" }}>{lastLatencyMs} ms</b>
          </span>
        )}
        <span style={{ color: "#27272a" }}>|</span>
        <span>GTFS: <b style={{ color: "oklch(0.72 0.17 150)" }}>Zweryfikowana</b></span>
        <span style={{ color: "#27272a" }}>|</span>
        <a
          href="https://czerwinskidawid.pl"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#94a3b8", textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}
        >
          <span>Projekt:</span> <b style={{ color: "#f8fafc" }}>czerwinskidawid.pl</b>
        </a>
      </div>
    </div>
  );
}
