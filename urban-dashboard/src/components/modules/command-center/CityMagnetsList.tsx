"use client";

import React from "react";
import { Card, Elevation, Tag, Button, Icon } from "@blueprintjs/core";
import { useFoundryStore } from "@/lib/store";
import type { PoiMagnetItem } from "@/lib/api/types";

interface CityMagnetsListProps {
  magnets: PoiMagnetItem[];
  loading?: boolean;
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
        background: "#1c2127",
        border: "1px solid #2f343c",
        padding: "14px 16px",
        borderRadius: 6,
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
            Kluczowe Magnesy Miejskie
          </span>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#f6f7f9", marginTop: 2 }}>
            Główne Punkty Ciążenia (Top Attractors)
          </div>
        </div>
        <Tag minimal intent="warning" style={{ fontSize: 10 }}>
          Model Huffa W
        </Tag>
      </div>

      {/* List */}
      <div style={{ display: "flex", flexDirection: "column", gap: 6, maxHeight: 260, overflowY: "auto" }}>
        {loading ? (
          <div style={{ padding: 24, textAlign: "center", color: "#8f99a8", fontSize: 12 }}>
            Pobieranie atraktorów miejskich...
          </div>
        ) : magnets.length === 0 ? (
          <div style={{ padding: 24, textAlign: "center", color: "#656e7b", fontSize: 12 }}>
            Brak sklasyfikowanych obiektów T0-T2 dla tej aglomeracji.
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
                background: "#181c20",
                borderRadius: 4,
                border: "1px solid #282d35",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#656e7b",
                    width: 22,
                    textAlign: "right",
                  }}
                >
                  #{m.rank}
                </span>

                <div style={{ minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      color: "#f6f7f9",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {m.name}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 2 }}>
                    <Tag minimal intent={getTierIntent(m.tier)} style={{ fontSize: 9, padding: "0 4px" }}>
                      T{m.tier}
                    </Tag>
                    <span style={{ fontSize: 10, color: "#8f99a8" }}>{m.category}</span>
                    <span style={{ fontSize: 10, color: "#656e7b" }}>• Waga: {m.w}</span>
                  </div>
                </div>
              </div>

              <Button
                minimal
                small
                icon="locate"
                title="Pokaż na mapie"
                onClick={() => handleFlyTo(m.lat, m.lon)}
                style={{ color: "#2b95d6" }}
              />
            </div>
          ))
        )}
      </div>
    </Card>
  );
}
