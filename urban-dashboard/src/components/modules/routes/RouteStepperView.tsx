"use client";

import React, { useState, useEffect } from "react";
import { Button, ButtonGroup, Tag, Spinner, Card } from "@blueprintjs/core";
import { useFoundryStore } from "@/lib/store";
import { fetchRouteDetails } from "@/lib/api";
import type { RouteDetailsResponse, RouteStopItem } from "@/lib/api/types";
import { formatNumber, formatSpeed, formatDistance, formatDuration } from "@/lib/utils/formatters";

export default function RouteStepperView() {
  const {
    selectedCity,
    activeRouteUid,
    activeDirectionId,
    setActiveRoute,
    selectObject,
    setViewState,
    setBottomSheetSnap,
  } = useFoundryStore();

  const [details, setDetails] = useState<RouteDetailsResponse | null>(null);
  const [directionId, setDirectionId] = useState<number>(activeDirectionId || 0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!activeRouteUid) {
      setDetails(null);
      return;
    }

    const controller = new AbortController();
    setLoading(true);
    setError(null);

    fetchRouteDetails(selectedCity, activeRouteUid, directionId, controller.signal)
      .then((res) => {
        if (!controller.signal.aborted) {
          setDetails(res);
          setLoading(false);
        }
      })
      .catch((e) => {
        if (e?.name !== "AbortError") {
          setError("Nie udało się załadować profilu trasy.");
          setLoading(false);
        }
      });

    return () => controller.abort();
  }, [selectedCity, activeRouteUid, directionId]);

  const handleStopClick = (s: RouteStopItem) => {
    selectObject("stop", s.stop_id, s);
    if (s.lon && s.lat) {
      setViewState({
        longitude: s.lon,
        latitude: s.lat,
        zoom: 16,
        pitch: 45,
      });
    }
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setBottomSheetSnap("peek");
    }
  };

  if (!activeRouteUid) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          padding: 32,
          color: "#8f99a8",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 13, marginBottom: 8, fontWeight: 700 }}>
          Nie wybrano żadnej linii transportowej.
        </div>
        <div style={{ fontSize: 11, maxWidth: 320 }}>
          Wybierz linię w zakładce <strong>Katalog Linii</strong>, aby przeanalizować listę przystanków,
          czasy przejazdu oraz prędkości odcinkowe.
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", gap: 8 }}>
        <Spinner size={24} />
        <span style={{ fontSize: 12, color: "#8f99a8" }}>Ładowanie trasy i przystanków...</span>
      </div>
    );
  }

  if (error || !details) {
    return (
      <div style={{ padding: 24, textAlign: "center", color: "#f87171" }}>
        {error || "Brak danych o wybranej linii."}
      </div>
    );
  }

  const stops = details.stops || [];
  const routeColor = details.color ? `#${details.color.replace("#", "")}` : "#38bdf8";

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", overflow: "hidden", minHeight: 0 }}>
      {/* Route Summary Header */}
      <Card
        style={{
          padding: "10px 14px",
          marginBottom: 10,
          background: "rgba(24, 28, 35, 0.85)",
          border: "1px solid #383e47",
          borderRadius: 8,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "4px 12px",
                borderRadius: 6,
                fontWeight: 800,
                fontSize: 15,
                backgroundColor: routeColor,
                color: "#ffffff",
                boxShadow: `0 2px 8px ${routeColor}66`,
              }}
            >
              {details.short_name || details.route_uid}
            </span>
            <div>
              <div style={{ fontWeight: 800, fontSize: 13, color: "#f6f7f9" }}>
                Kierunek: {directionId === 0 ? "Tam (Główny)" : "Powrót (Wariant)"}
              </div>
              <div style={{ fontSize: 11, color: "#8f99a8" }}>
                <span className="tabular-nums font-semibold text-gray-300">{stops.length}</span> przystanków •{" "}
                <span className="tabular-nums font-semibold text-gray-300">{formatNumber(details.total_length_km, 1)}</span> km • ~
                <span className="tabular-nums font-semibold text-gray-300">{formatNumber(details.total_travel_time_min, 0)}</span> min •{" "}
                <span className="tabular-nums font-semibold text-sky-400">{formatSpeed(details.commercial_speed_kmh)}</span>
              </div>
            </div>
          </div>

          {/* Direction Toggle */}
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ fontSize: 11, color: "#8f99a8" }}>Kierunek:</span>
            <ButtonGroup size="small">
              <Button
                active={directionId === 0}
                intent={directionId === 0 ? "primary" : "none"}
                onClick={() => {
                  setDirectionId(0);
                  setActiveRoute(activeRouteUid, 0);
                }}
                style={{ fontSize: 10, fontWeight: 700 }}
              >
                0: Tam
              </Button>
              <Button
                active={directionId === 1}
                intent={directionId === 1 ? "primary" : "none"}
                onClick={() => {
                  setDirectionId(1);
                  setActiveRoute(activeRouteUid, 1);
                }}
                style={{ fontSize: 10, fontWeight: 700 }}
              >
                1: Powrót
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </Card>

      {/* Continuous Subway Timeline */}
      <div style={{ flex: 1, overflowY: "auto", paddingRight: 6, minHeight: 0 }}>
        <div style={{ position: "relative", paddingLeft: 28, paddingTop: 6, paddingBottom: 16 }}>
          {/* Continuous Vertical Subway Spine Line */}
          <div
            style={{
              position: "absolute",
              top: 14,
              bottom: 24,
              left: 10,
              width: 3,
              backgroundColor: routeColor,
              borderRadius: 2,
              boxShadow: `0 0 10px ${routeColor}50`,
            }}
          />

          {stops.map((s, idx) => {
            const isFirst = idx === 0;
            const isLast = idx === stops.length - 1;
            const isTerminal = s.is_terminal || isFirst || isLast;

            return (
              <div key={`${s.stop_id}-${s.sequence}`} style={{ marginBottom: 10, position: "relative" }}>
                {/* Node Marker on Spine */}
                <div
                  style={{
                    position: "absolute",
                    left: -24,
                    top: 8,
                    width: isTerminal ? 14 : 10,
                    height: isTerminal ? 14 : 10,
                    borderRadius: "50%",
                    backgroundColor: isTerminal ? "#10b981" : "#1c2127",
                    border: `2.5px solid ${isTerminal ? "#ffffff" : routeColor}`,
                    boxShadow: isTerminal
                      ? "0 0 0 3px rgba(16, 185, 129, 0.35)"
                      : "0 0 0 2px rgba(0, 0, 0, 0.6)",
                    zIndex: 2,
                  }}
                />

                {/* Stop Card Row */}
                <div
                  onClick={() => handleStopClick(s)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "7px 12px",
                    background: "rgba(28, 33, 39, 0.75)",
                    border: "1px solid #2f343c",
                    borderRadius: 6,
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(40, 48, 58, 0.9)";
                    e.currentTarget.style.borderColor = "#3b82f6";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(28, 33, 39, 0.75)";
                    e.currentTarget.style.borderColor = "#2f343c";
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
                    <span
                      className="tabular-nums font-mono"
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        color: "#9ca3af",
                        background: "#181c20",
                        padding: "2px 6px",
                        borderRadius: 4,
                        border: "1px solid #374151",
                      }}
                    >
                      #{String(s.sequence).padStart(2, "0")}
                    </span>
                    <div style={{ minWidth: 0 }}>
                      <div
                        style={{
                          fontWeight: isTerminal ? 800 : 600,
                          fontSize: 12,
                          color: isTerminal ? "#ffffff" : "#e5e7eb",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {s.stop_name}
                      </div>
                      <div style={{ fontSize: 10, color: "#9ca3af" }}>ID: {s.stop_id}</div>
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0, fontSize: 11 }}>
                    <span className="tabular-nums text-gray-400" style={{ fontSize: 11 }}>
                      +{formatNumber(s.cumulative_distance_km, 2)} km
                    </span>
                    <span
                      className="tabular-nums"
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        color: "#38bdf8",
                        background: "rgba(56, 189, 248, 0.12)",
                        border: "1px solid rgba(56, 189, 248, 0.25)",
                        padding: "2px 6px",
                        borderRadius: 4,
                      }}
                    >
                      +{formatNumber(s.cumulative_travel_time_min, 1)} min
                    </span>
                  </div>
                </div>

                {/* Segment Edge Info (embedded on vertical spine between stops) */}
                {!isLast && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      margin: "3px 0 3px 6px",
                      fontSize: 10,
                      color: "#9ca3af",
                    }}
                  >
                    <span style={{ color: "#6b7280" }}>↳</span>
                    <span>{formatDistance(s.segment_distance_m)}</span>
                    <span style={{ color: "#4b5563" }}>•</span>
                    <span>{formatDuration(s.segment_travel_time_sec)}</span>
                    {s.segment_speed_kmh != null && (
                      <>
                        <span style={{ color: "#4b5563" }}>•</span>
                        <span
                          className="tabular-nums"
                          style={{
                            fontWeight: 700,
                            padding: "1px 5px",
                            borderRadius: 3,
                            fontSize: 9,
                            background:
                              s.segment_speed_kmh < 15
                                ? "rgba(239, 68, 68, 0.15)"
                                : s.segment_speed_kmh < 22
                                ? "rgba(245, 158, 11, 0.15)"
                                : "rgba(16, 185, 129, 0.15)",
                            color:
                              s.segment_speed_kmh < 15
                                ? "#f87171"
                                : s.segment_speed_kmh < 22
                                ? "#fbbf24"
                                : "#34d399",
                            border: `1px solid ${
                              s.segment_speed_kmh < 15
                                ? "rgba(239, 68, 68, 0.3)"
                                : s.segment_speed_kmh < 22
                                ? "rgba(245, 158, 11, 0.3)"
                                : "rgba(16, 185, 129, 0.3)"
                            }`,
                          }}
                        >
                          {formatSpeed(s.segment_speed_kmh)}
                        </span>
                      </>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
