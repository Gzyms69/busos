"use client";

import React, { useState, useEffect } from "react";
import { Card, Button, ProgressBar, Tag, Spinner } from "@blueprintjs/core";
import { useFoundryStore } from "@/lib/store";
import { fetchSimilarHubs } from "@/lib/api";
import type { SimilarHubItem } from "@/lib/api/types";
import GradeBadge from "@/components/shared/GradeBadge";

interface AiRadarWidgetProps {
  city: string;
  hubId: string | number;
}

export default function AiRadarWidget({ city, hubId }: AiRadarWidgetProps) {
  const { setCity, selectObject } = useFoundryStore();
  const [twins, setTwins] = useState<SimilarHubItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!city || !hubId) return;
    const controller = new AbortController();
    setLoading(true);

    fetchSimilarHubs(city, hubId, 5, controller.signal)
      .then((res) => {
        if (!controller.signal.aborted) {
          setTwins(res || []);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (err?.name !== "AbortError") {
          console.warn("AI Radar error:", err);
          setLoading(false);
        }
      });

    return () => controller.abort();
  }, [city, hubId]);

  const handleJump = (item: SimilarHubItem) => {
    if (item.city) {
      setCity(item.city);
      selectObject("hub", item.hub_id, item);
    }
  };

  return (
    <div
      style={{
        background: "#121318",
        border: "1px solid #27272a",
        borderRadius: 8,
        padding: 14,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        boxShadow: "inset 0 1px 0 0 rgba(255, 255, 255, 0.08)",
      }}
    >
      {/* Widget Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: "#f8fafc", letterSpacing: 0.5 }}>
            PODOBNE WĘZŁY W INNYCH MIASTACH
          </span>
          <Tag minimal style={{ fontSize: 9, fontWeight: 700, background: "rgba(59, 130, 246, 0.15)", color: "#38bdf8", border: "1px solid rgba(59, 130, 246, 0.3)" }}>
            ANALIZA PORÓWNAWCZA
          </Tag>
        </div>
        <span style={{ fontSize: 10, color: "#94a3b8" }}>Baza: 28 317 węzłów w Polsce</span>
      </div>


      {loading ? (
        <div
          style={{
            height: 120,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            color: "#8f99a8",
            fontSize: 11,
          }}
        >
          <Spinner size={16} />
          <span>Wyszukiwanie wektorów w silniku Qdrant...</span>
        </div>
      ) : twins.length === 0 ? (
        <div style={{ padding: 12, textAlign: "center", color: "#8f99a8", fontSize: 11 }}>
          Brak zbliżonych węzłów w bazie wektorowej dla wybranego obiektu
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {twins.map((item, idx) => {
            const pct = Math.round(item.similarity_score * 100);
            return (
              <Card
                key={`${item.city}-${item.hub_id}-${idx}`}
                style={{
                  background: "#1c2127",
                  border: "1px solid #2f343c",
                  padding: "8px 12px",
                  borderRadius: 4,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 12,
                }}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: "#f6f7f9" }}>
                      {item.stop_name}
                    </span>
                    <Tag minimal style={{ fontSize: 9 }}>
                      {item.city.toUpperCase()}
                    </Tag>
                    <GradeBadge grade={item.grade} size="small" />
                  </div>

                  {/* Similarity Bar */}
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <ProgressBar
                      value={item.similarity_score}
                      intent={pct >= 90 ? "success" : "primary"}
                      style={{ height: 5, flex: 1, borderRadius: 2 }}
                    />
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        color: pct >= 90 ? "#15b371" : "#2b95d6",
                        minWidth: 40,
                      }}
                    >
                      {pct}%
                    </span>
                  </div>
                </div>

                <Button
                  small
                  minimal
                  icon="share"
                  text="Przejdź"
                  onClick={() => handleJump(item)}
                  style={{ fontSize: 10 }}
                />
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
