"use client";

import React, { useState } from "react";
import { Card, Elevation, Tag, Tooltip } from "@blueprintjs/core";
import GradeBadge from "@/components/shared/GradeBadge";

interface GradeDistributionChartProps {
  grades?: {
    micro?: Record<string, number>;
    macro?: Record<string, number>;
    stops?: Record<string, number>;
    hubs?: Record<string, number>;
  };
  loading?: boolean;
}

const ORDERED_GRADES = ["A+", "A", "B", "C", "D", "F"];

const OKLCH_GRADE_COLORS: Record<string, string> = {
  "A+": "oklch(0.72 0.17 150)", // Vivid Emerald
  "A": "oklch(0.64 0.14 150)",  // Medium Emerald
  "B": "oklch(0.60 0.11 185)",  // Teal Sage
  "C": "oklch(0.52 0.04 260)",  // Neutral Slate
  "D": "oklch(0.70 0.14 70)",   // Signal Amber
  "F": "oklch(0.58 0.18 25)",   // Safety Crimson
};

export default function GradeDistributionChart({
  grades,
  loading = false,
}: GradeDistributionChartProps) {
  const [hoveredGrade, setHoveredGrade] = useState<string | null>(null);

  const chartData = ORDERED_GRADES.map((grade) => {
    const stopsCount = (grades as any)?.micro?.[grade] ?? (grades as any)?.stops?.[grade] ?? 0;
    const hubsCount = (grades as any)?.macro?.[grade] ?? (grades as any)?.hubs?.[grade] ?? 0;
    return {
      grade,
      stops: stopsCount,
      hubs: hubsCount,
      color: OKLCH_GRADE_COLORS[grade] || "oklch(0.5 0 0)",
    };
  });

  const totalStops = chartData.reduce((acc, curr) => acc + curr.stops, 0);

  const highQualityPercent = totalStops > 0
    ? (((chartData.find((d) => d.grade === "A+")?.stops ?? 0) + (chartData.find((d) => d.grade === "A")?.stops ?? 0)) / totalStops * 100).toFixed(1)
    : "0.0";

  const lowQualityPercent = totalStops > 0
    ? (((chartData.find((d) => d.grade === "D")?.stops ?? 0) + (chartData.find((d) => d.grade === "F")?.stops ?? 0)) / totalStops * 100).toFixed(1)
    : "0.0";

  return (
    <Card
      elevation={Elevation.ONE}
      style={{
        background: "oklch(0.14 0.010 260)",
        border: "1px solid oklch(0.24 0.010 260)",
        padding: "14px 16px",
        borderRadius: 8,
        marginBottom: 16,
        boxShadow: "inset 0 1px 0 0 rgba(255, 255, 255, 0.08), 0 4px 12px rgba(0, 0, 0, 0.4)",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 12,
        }}
      >
        <div>
          <span
            style={{
              fontSize: 10,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 0.6,
              color: "#94a3b8",
            }}
          >
            Dostępność Komunikacyjna
          </span>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#f8fafc", marginTop: 2 }}>
            Rozkład Standardu Obsługi ({totalStops.toLocaleString("pl-PL")})
          </div>
        </div>
        <Tag minimal style={{ fontSize: 9, background: "rgba(39, 39, 42, 0.6)", color: "#94a3b8", border: "1px solid #27272a" }}>
          Standard GTFS
        </Tag>
      </div>

      {loading ? (
        <div style={{ padding: "24px 0", textAlign: "center", color: "#94a3b8", fontSize: 11 }}>
          Wczytywanie rozkładu ocen...
        </div>
      ) : (
        <>
          {/* Horizontal Stacked Bar */}
          <div
            style={{
              display: "flex",
              height: 24,
              borderRadius: 6,
              overflow: "hidden",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              marginBottom: 12,
              background: "oklch(0.10 0.005 260)",
            }}
          >
            {chartData.map((item) => {
              const pct = totalStops > 0 ? (item.stops / totalStops) * 100 : 0;
              if (pct <= 0) return null;
              const isHovered = hoveredGrade === item.grade;
              return (
                <Tooltip
                  key={item.grade}
                  content={
                    <div style={{ fontSize: 11, padding: 4 }}>
                      <div><b>Standard {item.grade}:</b> {item.stops.toLocaleString("pl-PL")} przystanków</div>
                      <div><b>Udział:</b> {pct.toFixed(1)}% w aglomeracji</div>
                    </div>
                  }
                  placement="top"
                >
                  <div
                    onMouseEnter={() => setHoveredGrade(item.grade)}
                    onMouseLeave={() => setHoveredGrade(null)}
                    style={{
                      width: `${pct}%`,
                      height: "100%",
                      backgroundColor: item.color,
                      opacity: hoveredGrade && !isHovered ? 0.45 : 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 10,
                      fontWeight: 800,
                      color: "#000000",
                      cursor: "pointer",
                      transition: "opacity 0.15s ease",
                      userSelect: "none",
                    }}
                  >
                    {pct >= 8 && item.grade}
                  </div>
                </Tooltip>
              );
            })}
          </div>

          {/* Tabular Numerics Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
              gap: 6,
              textAlign: "center",
            }}
          >
            {chartData.map((item) => {
              const pct = totalStops > 0 ? ((item.stops / totalStops) * 100).toFixed(1) : "0.0";
              const isHovered = hoveredGrade === item.grade;
              return (
                <div
                  key={item.grade}
                  onMouseEnter={() => setHoveredGrade(item.grade)}
                  onMouseLeave={() => setHoveredGrade(null)}
                  style={{
                    padding: "4px 2px",
                    borderRadius: 4,
                    background: isHovered ? "oklch(0.20 0.012 260)" : "transparent",
                    transition: "background 0.15s ease",
                    cursor: "pointer",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "center", marginBottom: 2 }}>
                    <span
                      style={{
                        display: "inline-block",
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        backgroundColor: item.color,
                      }}
                    />
                  </div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#f8fafc" }}>{item.grade}</div>
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      color: "#94a3b8",
                      fontFamily: "var(--font-mono, monospace)",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {item.stops}
                  </div>
                  <div
                    style={{
                      fontSize: 10,
                      color: "#71717a",
                      fontFamily: "var(--font-mono, monospace)",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {pct}%
                  </div>
                </div>
              );
            })}
          </div>

          {/* Integrated Balance Footer */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 10,
              paddingTop: 8,
              borderTop: "1px solid oklch(0.22 0.010 260)",
              fontSize: 11,
              color: "#94a3b8",
            }}
          >
            <span>
              Wysoki standard (A+/A): <b style={{ color: "oklch(0.72 0.17 150)", fontFamily: "var(--font-mono)", fontVariantNumeric: "tabular-nums" }}>{highQualityPercent}%</b>
            </span>
            <span>
              Deficyt / Peryferia (D/F): <b style={{ color: "oklch(0.70 0.14 70)", fontFamily: "var(--font-mono)", fontVariantNumeric: "tabular-nums" }}>{lowQualityPercent}%</b>
            </span>
          </div>
        </>
      )}
    </Card>
  );
}
