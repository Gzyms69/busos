"use client";

import React from "react";
import { Tag, Button } from "@blueprintjs/core";

export interface FilterPill {
  key: string;
  label: string;
  value: string;
  onRemove: () => void;
}

interface FilterPillsBarProps {
  filters: FilterPill[];
  onClearAll?: () => void;
  style?: React.CSSProperties;
}

export default function FilterPillsBar({
  filters,
  onClearAll,
  style,
}: FilterPillsBarProps) {
  if (filters.length === 0) return null;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 6,
        padding: "6px 0",
        fontSize: 11,
        ...style,
      }}
    >
      <span style={{ color: "#8f99a8", fontSize: 11, marginRight: 2 }}>
        Aktywne filtry:
      </span>

      {filters.map((f) => (
        <Tag
          key={f.key}
          minimal
          intent="primary"
          onRemove={f.onRemove}
          style={{
            fontSize: 11,
            height: 20,
            lineHeight: "18px",
            backgroundColor: "rgba(43, 149, 214, 0.15)",
            border: "1px solid rgba(43, 149, 214, 0.35)",
            color: "#f6f7f9",
          }}
        >
          <span style={{ color: "#8f99a8", marginRight: 4 }}>{f.label}:</span>
          <strong>{f.value}</strong>
        </Tag>
      ))}

      {onClearAll && filters.length > 1 && (
        <Button
          minimal
          small
          icon="cross"
          intent="danger"
          onClick={onClearAll}
          style={{ fontSize: 10, height: 20, minHeight: 20, padding: "0 6px" }}
        >
          Wyczyść wszystko
        </Button>
      )}
    </div>
  );
}
