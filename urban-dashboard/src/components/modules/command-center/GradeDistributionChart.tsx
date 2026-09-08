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
    stops: Record<string, number>;
    hubs: Record<string, number>;
  };
  loading?: boolean;
}

const ORDERED_GRADES = ["A+", "A", "B", "C", "D", "F"];

export default function GradeDistributionChart({
  grades,
  loading = false,
}: GradeDistributionChartProps) {
  const chartData = ORDERED_GRADES.map((grade) => {
    const stopsCount = grades?.stops?.[grade] || 0;
    const hubsCount = grades?.hubs?.[grade] || 0;
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
        background: "#1c2127",
        border: "1px solid #2f343c",
        padding: "14px 16px",
        borderRadius: 6,
        marginBottom: 16,
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
              color: "#8f99a8",
            }}
          >
            Rozkład Klas Stop DNA
          </span>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#f6f7f9", marginTop: 2 }}>
            Kategoryzacja Jakościowa Słupków ({totalStops.toLocaleString("pl-PL")})
          </div>
        </div>
        <Tag minimal intent="primary" style={{ fontSize: 10 }}>
          Gauss Z-Score
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
              color: "#8f99a8",
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
                stroke="#656e7b"
                tick={{ fill: "#8f99a8", fontSize: 11, fontWeight: 600 }}
                axisLine={{ stroke: "#2f343c" }}
                tickLine={false}
              />
              <YAxis
                stroke="#656e7b"
                tick={{ fill: "#656e7b", fontSize: 10 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#181c20",
                  borderColor: "#383e47",
                  borderRadius: 4,
                  fontSize: 11,
                  color: "#f6f7f9",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
                }}
                formatter={(value: any, name: any) => [
                  `${Number(value).toLocaleString("pl-PL")} obiektów`,
                  name === "stops" ? "Słupki fizyczne" : "Węzły macro",
                ]}
                labelFormatter={(label) => `Klasa DNA: ${label}`}
              />
              <Bar dataKey="stops" radius={[3, 3, 0, 0]}>
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
          borderTop: "1px solid #2f343c",
          fontSize: 10,
          color: "#656e7b",
        }}
      >
        <span>A+/A: Dominacja & Węzły Węzłowe</span>
        <span>B/C: Średni Standard</span>
        <span>D/F: Peryferia / Deficyt</span>
      </div>
    </Card>
  );
}
