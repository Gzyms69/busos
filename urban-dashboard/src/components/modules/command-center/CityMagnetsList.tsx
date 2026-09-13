"use client";

import React from "react";
import { Card, Elevation, Tag, Button, Icon } from "@blueprintjs/core";
import { useFoundryStore } from "@/lib/store";
import type { PoiMagnetItem } from "@/lib/api/types";

interface CityMagnetsListProps {
  magnets: PoiMagnetItem[];
  loading?: boolean;
}

function formatMagnetWeight(w: number | string | undefined): string {
  if (w == null) return "Indeks: —";
  const num = typeof w === "number" ? w : parseFloat(String(w));
  if (isNaN(num)) return "Indeks: —";
  if (num >= 1_000_000) {
    return `${(num / 1_000_000).toFixed(1)}M`;
  }
  if (num >= 1_000) {
    return `${(num / 1_000).toFixed(1)}k`;
  }
  return num.toFixed(1);
}

export default function CityMagnetsList({
  magnets,
  loading = false,
}: CityMagnetsListProps) {
  const { setViewState } = useFoundryStore();

  const handleFlyTo = (lat: number, lon: number) => {
    setViewState({
      latitude: lat,
      longitude: lon,
      zoom: 15,
      pitch: 45,
    });
  };

  const getTierIntent = (tier?: string) => {
    if (tier === "0") return "danger"; // Strategiczne (Lotniska, Dworce)
    if (tier === "1") return "warning"; // Szpitale kliniczne, Uczelnie
    return "primary"; // Centra handlowe, parki
  };

  return (
    <Card
      elevation={Elevation.ONE}
      style={{
        background: "oklch(0.14 0.010 260)",
        border: "1px solid oklch(0.24 0.010 260)",
        padding: "12px 14px",
        borderRadius: 8,
        boxShadow: "inset 0 1px 0 0 rgba(255, 255, 255, 0.08), 0 4px 12px rgba(0, 0, 0, 0.4)",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 10,
          gap: 8,
        }}
      >
        <div style={{ minWidth: 0 }}>
          <span
            style={{
              fontSize: 10,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 0.6,
              color: "#94a3b8",
            }}
          >
            Punkty Węzłowe i Usługi
          </span>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#f8fafc", marginTop: 2, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            Cele Podróży w Aglomeracji
          </div>
        </div>
        <Tag minimal style={{ fontSize: 9, background: "rgba(59, 130, 246, 0.15)", color: "#3b82f6", border: "1px solid rgba(59, 130, 246, 0.3)", flexShrink: 0 }}>
          Generatory Ruchu
        </Tag>
      </div>

      {/* List */}
      <div style={{ display: "flex", flexDirection: "column", gap: 6, maxHeight: 260, overflowY: "auto" }}>
        {loading ? (
          <div style={{ padding: 24, textAlign: "center", color: "#94a3b8", fontSize: 12 }}>
            Wczytywanie celów podróży...
          </div>
        ) : magnets.length === 0 ? (
          <div style={{ padding: 24, textAlign: "center", color: "#71717a", fontSize: 12 }}>
            Brak sklasyfikowanych punktów docelowych dla tej aglomeracji.
          </div>
        ) : (
          magnets.map((m) => (
            <div
              key={`${m.rank}-${m.name}`}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "8px 10px",
                background: "oklch(0.12 0.008 260)",
                borderRadius: 6,
                border: "1px solid oklch(0.22 0.010 260)",
                gap: 8,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0, flex: 1 }}>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#94a3b8",
                    fontFamily: "var(--font-mono, monospace)",
                    fontVariantNumeric: "tabular-nums",
                    width: 24,
                    textAlign: "right",
                    flexShrink: 0,
                  }}
                >
                  #{m.rank}
                </span>

                <div style={{ minWidth: 0, flex: 1 }}>
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      color: "#f6f7f9",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                    title={m.name}
                  >
                    {m.name}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 2, flexWrap: "wrap" }}>
                    <Tag minimal intent={getTierIntent(m.tier)} style={{ fontSize: 9, padding: "0 4px", lineHeight: "14px", height: 16 }}>
                      T{m.tier}
                    </Tag>
                    <span style={{ fontSize: 10, color: "#8f99a8" }}>{m.category}</span>
                    <span style={{ fontSize: 10, color: "#94a3b8", fontFamily: "var(--font-mono, monospace)", fontVariantNumeric: "tabular-nums" }}>
                      • Wskaźnik: {formatMagnetWeight(m.w)}
                    </span>
                  </div>
                </div>
              </div>

              <Button
                minimal
                small
                icon="locate"
                title="Pokaż na mapie"
                onClick={() => handleFlyTo(m.lat, m.lon)}
                style={{ color: "#2b95d6", minWidth: 32, minHeight: 32 }}
              />
            </div>
          ))
        )}
      </div>
    </Card>
  );
}
