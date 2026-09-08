"use client";

import React from "react";
import { Card, Elevation, Tag } from "@blueprintjs/core";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { getGradeColor } from "@/components/shared/GradeBadge";

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

export default function GradeDistributionChart({
  grades,
  loading = false,
}: GradeDistributionChartProps) {
  const chartData = ORDERED_GRADES.map((grade) => {
    const stopsCount = (grades as any)?.micro?.[grade] ?? (grades as any)?.stops?.[grade] ?? 0;
    const hubsCount = (grades as any)?.macro?.[grade] ?? (grades as any)?.hubs?.[grade] ?? 0;
    return {
      grade,
      stops: stopsCount,
      hubs: hubsCount,
      color: getGradeColor(grade),
    };
  });

  const totalStops = chartData.reduce((acc, curr) => acc + curr.stops, 0);

  return (
    <Card
      elevation={Elevation.ONE}
      style={{
        background: "#121318",
        border: "1px solid #27272a",
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
              fontSize: 11,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 0.6,
              color: "#94a3b8",
            }}
          >
            Dostępność Komunikacyjna
          </span>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#f8fafc", marginTop: 2 }}>
            Rozkład Ocen Przystanków ({totalStops.toLocaleString("pl-PL")})
          </div>
        </div>
        <Tag minimal style={{ fontSize: 10, background: "rgba(39, 39, 42, 0.6)", color: "#94a3b8", border: "1px solid #27272a" }}>
          Standard GTFS
        </Tag>
      </div>

      {/* Chart */}
      <div style={{ width: "100%", height: 160 }}>
        {loading ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              color: "#94a3b8",
              fontSize: 12,
            }}
          >
            Wczytywanie rozkładu ocen...
          </div>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            >
              <XAxis
                dataKey="grade"
                stroke="#52525b"
                tick={{ fill: "#94a3b8", fontSize: 11, fontWeight: 600 }}
                axisLine={{ stroke: "#27272a" }}
                tickLine={false}
              />
              <YAxis
                stroke="#52525b"
                tick={{ fill: "#71717a", fontSize: 10 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#090a0f",
                  borderColor: "#27272a",
                  borderRadius: 6,
                  fontSize: 12,
                  color: "#f8fafc",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.6)",
                }}
                formatter={(value: any, name: any) => [
                  `${Number(value).toLocaleString("pl-PL")} przystanków`,
                  name === "stops" ? "Liczba słupków" : "Węzły przesiadkowe",
                ]}
                labelFormatter={(label) => `Ocena standardu: ${label}`}
              />
              <Bar dataKey="stops" radius={[4, 4, 0, 0]}>
                {chartData.map((entry) => (
                  <Cell key={`cell-${entry.grade}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>

      {/* Legend */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 10,
          paddingTop: 8,
          borderTop: "1px solid #27272a",
          fontSize: 11,
          color: "#71717a",
        }}
      >
        <span>A+/A: Wysoka częstotliwość</span>
        <span>B/C: Dobry i średni standard</span>
        <span>D/F: Niska obsługa / peryferia</span>
      </div>
    </Card>
  );
}
