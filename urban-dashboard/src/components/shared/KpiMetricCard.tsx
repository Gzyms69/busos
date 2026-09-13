"use client";

import React from "react";
import { Card, Elevation, Icon, Tag, type Intent } from "@blueprintjs/core";

interface KpiMetricCardProps {
  title: string;
  value: string | number;
  unit?: string;
  subtitle?: string;
  icon?: any;
  intent?: Intent;
  badge?: string;
  onClick?: () => void;
}

export default function KpiMetricCard({
  title,
  value,
  unit,
  subtitle,
  icon,
  intent = "none",
  badge,
  onClick,
}: KpiMetricCardProps) {
  const isClickable = Boolean(onClick);

  return (
    <Card
      elevation={Elevation.ONE}
      interactive={isClickable}
      onClick={onClick}
      style={{
        background: "oklch(0.15 0.010 260)",
        border: "1px solid oklch(0.24 0.010 260)",
        padding: "10px 12px",
        borderRadius: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: 84,
        cursor: isClickable ? "pointer" : "default",
        boxShadow: "inset 0 1px 0 0 rgba(255, 255, 255, 0.08), 0 2px 8px rgba(0, 0, 0, 0.3)",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: 4 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 6 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, minWidth: 0 }}>
            {icon && <Icon icon={icon} size={12} style={{ color: "#94a3b8", flexShrink: 0 }} />}
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: 0.5,
                color: "#94a3b8",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
              title={title}
            >
              {title}
            </span>
          </div>

          {badge && (
            <Tag
              minimal
              intent={intent}
              style={{
                fontSize: 9,
                padding: "0 4px",
                fontWeight: 600,
                flexShrink: 0,
                lineHeight: "14px",
                height: 16,
              }}
            >
              {badge}
            </Tag>
          )}
        </div>
      </div>

      {/* Metric Value */}
      <div style={{ display: "flex", alignItems: "baseline", gap: 6, margin: "2px 0" }}>
        <span
          style={{
            fontSize: 22,
            fontWeight: 800,
            color: "#f6f7f9",
            fontFamily: "var(--font-mono, monospace)",
            fontVariantNumeric: "tabular-nums",
            letterSpacing: -0.5,
            lineHeight: 1.1,
          }}
        >
          {value}
        </span>
        {unit && (
          <span style={{ fontSize: 12, fontWeight: 600, color: "#94a3b8" }}>
            {unit}
          </span>
        )}
      </div>

      {/* Subtitle */}
      {subtitle && (
        <div
          style={{
            fontSize: 11,
            color: "#94a3b8",
            marginTop: 2,
            lineHeight: 1.35,
          }}
        >
          {subtitle}
        </div>
      )}
    </Card>
  );
}
