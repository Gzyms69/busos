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
        background: "#1c2127",
        border: "1px solid #2f343c",
        padding: "12px 14px",
        borderRadius: 6,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: 88,
        cursor: isClickable ? "pointer" : "default",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 6,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          {icon && <Icon icon={icon} size={13} style={{ color: "#8f99a8" }} />}
          <span
            style={{
              fontSize: 11,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: 0.6,
              color: "#8f99a8",
            }}
          >
            {title}
          </span>
        </div>
        {badge && (
          <Tag minimal intent={intent} style={{ fontSize: 10, padding: "0 4px" }}>
            {badge}
          </Tag>
        )}
      </div>

      {/* Metric Value */}
      <div style={{ display: "flex", alignItems: "baseline", gap: 5 }}>
        <span
          style={{
            fontSize: 22,
            fontWeight: 800,
            color: "#f6f7f9",
            fontVariantNumeric: "tabular-nums",
            letterSpacing: -0.5,
          }}
        >
          {value}
        </span>
        {unit && (
          <span style={{ fontSize: 12, fontWeight: 500, color: "#8f99a8" }}>
            {unit}
          </span>
        )}
      </div>

      {/* Subtitle */}
      {subtitle && (
        <div
          style={{
            fontSize: 11,
            color: "#656e7b",
            marginTop: 4,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {subtitle}
        </div>
      )}
    </Card>
  );
}
