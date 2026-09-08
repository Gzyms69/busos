"use client";

import React, { useState } from "react";
import { Icon, Tag } from "@blueprintjs/core";
import { useFoundryStore } from "@/lib/store";
import AnalyticalWorkspace from "@/components/foundry/AnalyticalWorkspace";
import ObjectInspector from "@/components/foundry/ObjectInspector";

export type SnapLevel = "peek" | "half" | "expanded";

export default function AdaptiveBottomSheet() {
  const { selectedCity, activeModule, isInspectorOpen, selectedId } = useFoundryStore();
  const [snap, setSnap] = useState<SnapLevel>("half");

  const snapHeights: Record<SnapLevel, string> = {
    peek: "72px",
    half: "45vh",
    expanded: "88vh",
  };

  const handleToggle = () => {
    if (snap === "peek") setSnap("half");
    else if (snap === "half") setSnap("expanded");
    else setSnap("peek");
  };

  return (
    <div
      style={{
        position: "absolute",
        bottom: 54, // Above MobileSegmentedNav
        left: 0,
        right: 0,
        height: snapHeights[snap],
        background: "rgba(24, 28, 33, 0.98)",
        backdropFilter: "blur(12px)",
        borderTop: "1px solid #383e47",
        boxShadow: "0 -8px 24px rgba(0,0,0,0.6)",
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
          height: snap === "peek" ? 72 : 44,
          padding: "6px 16px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "pointer",
          borderBottom: snap !== "peek" ? "1px solid #2f343c" : "none",
          userSelect: "none",
        }}
      >
        {/* Capsule Handle */}
        <div
          style={{
            width: 38,
            height: 4,
            borderRadius: 2,
            background: "#636e7b",
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
                color: "#f6f7f9",
                textTransform: "uppercase",
              }}
            >
              {activeModule.replace("-", " ")}
            </span>
            <Tag minimal style={{ fontSize: 9 }}>
              {selectedCity.toUpperCase()}
            </Tag>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            {isInspectorOpen && selectedId && (
              <Tag minimal intent="primary" style={{ fontSize: 9 }}>
                Zaznaczony #{selectedId}
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
        <div style={{ flex: 1, overflowY: "auto", position: "relative" }}>
          <AnalyticalWorkspace />
          {isInspectorOpen && <ObjectInspector />}
        </div>
      )}
    </div>
  );
}
