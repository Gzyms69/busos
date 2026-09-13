"use client";

import React, { useState } from "react";
import { Icon, Tag, Button } from "@blueprintjs/core";
import { useFoundryStore } from "@/lib/store";
import AnalyticalWorkspace from "@/components/foundry/AnalyticalWorkspace";
import ObjectInspector from "@/components/foundry/ObjectInspector";

export type SnapLevel = "peek" | "half" | "expanded";

export default function AdaptiveBottomSheet() {
  const {
    selectedCity,
    activeModule,
    isInspectorOpen,
    selectedId,
    clearSelection,
    bottomSheetSnap,
    setBottomSheetSnap,
  } = useFoundryStore();

  const snap: SnapLevel = bottomSheetSnap || "half";

  const snapHeights: Record<SnapLevel, string> = {
    peek: "64px",
    half: "42dvh",
    expanded: "88dvh",
  };

  const modulePolishNames: Record<string, string> = {
    "command-center": "Przegląd Miasta",
    "network": "Przystanki i Węzły",
    "optimization": "Optymalizacja",
    "routes": "Linie i Trasy",
    "market": "Rynek Mieszkaniowy",
    "benchmark": "Ranking Miast",
  };

  const handleToggle = () => {
    if (bottomSheetSnap === "peek") setBottomSheetSnap("half");
    else if (bottomSheetSnap === "half") setBottomSheetSnap("expanded");
    else setBottomSheetSnap("peek");
  };

  return (
    <div
      style={{
        position: "absolute",
        bottom: "calc(52px + env(safe-area-inset-bottom, 0px))", // Above MobileSegmentedNav
        left: 0,
        right: 0,
        height: snapHeights[snap],
        background: "rgba(14, 16, 23, 0.96)",
        backdropFilter: "blur(16px)",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        boxShadow: "0 -8px 32px rgba(0,0,0,0.6)",
        zIndex: 35,
        display: "flex",
        flexDirection: "column",
        transition: "height 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
        overflow: "hidden",
      }}
    >
      {/* Drag Handle & Peek Bar */}
      <div
        data-testid="bottom-sheet-drag-handle"
        onClick={handleToggle}
        style={{
          height: snap === "peek" ? 64 : 42,
          padding: "6px 16px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "pointer",
          borderBottom: snap !== "peek" ? "1px solid #27272a" : "none",
          userSelect: "none",
        }}
      >
        {/* Capsule Handle */}
        <div
          style={{
            width: 38,
            height: 4,
            borderRadius: 2,
            background: "#52525b",
            marginTop: 2,
          }}
        />

        {/* Peek Info */}
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "2px 0 6px 0",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span
              style={{
                fontSize: 12,
                fontWeight: 800,
                color: "#f8fafc",
                letterSpacing: 0.3,
              }}
            >
              {isInspectorOpen ? "Inspektor Obiektu" : (modulePolishNames[activeModule] || activeModule)}
            </span>
            <Tag minimal style={{ fontSize: 9, background: "rgba(34, 197, 94, 0.15)", color: "#22c55e", border: "1px solid rgba(34, 197, 94, 0.3)" }}>
              {selectedCity.toUpperCase()}
            </Tag>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            {isInspectorOpen && selectedId && (
              <Tag minimal intent="primary" style={{ fontSize: 9 }}>
                #{selectedId}
              </Tag>
            )}
            <Icon
              icon={snap === "expanded" ? "chevron-down" : snap === "peek" ? "chevron-up" : "double-chevron-up"}
              size={14}
              style={{ color: "#8f99a8" }}
            />
          </div>
        </div>
      </div>

      {/* Content Area */}
      {snap !== "peek" && (
        <div style={{ flex: 1, overflowY: "auto", position: "relative", minHeight: 0 }}>
          {isInspectorOpen ? (
            <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "6px 12px",
                  background: "rgba(24, 28, 35, 0.8)",
                  borderBottom: "1px solid #27272a",
                }}
              >
                <span style={{ fontSize: 11, fontWeight: 700, color: "#38bdf8" }}>
                  Szczegóły obiektu #{selectedId}
                </span>
                <Button
                  small
                  minimal
                  icon="cross"
                  text="Zamknij"
                  onClick={(e: React.MouseEvent) => {
                    e.stopPropagation();
                    clearSelection();
                  }}
                  style={{ fontSize: 10 }}
                />
              </div>
              <div style={{ flex: 1, overflowY: "auto" }}>
                <ObjectInspector />
              </div>
            </div>
          ) : (
            <AnalyticalWorkspace />
          )}
        </div>
      )}
    </div>
  );
}
