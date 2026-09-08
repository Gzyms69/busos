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
        <div style={{ fontSize: 13, marginBottom: 8 }}>
          Nie wybrano żadnej linii transportowej.
        </div>
        <div style={{ fontSize: 11 }}>
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
      <div style={{ padding: 24, textAlign: "center", color: "#db3737" }}>
        {error || "Brak danych o wybranej linii."}
      </div>
    );
  }

  const stops = details.stops || [];

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", overflow: "hidden" }}>
      {/* Route Summary Header */}
      <Card
        style={{
          padding: 12,
          marginBottom: 12,
          background: "#1c2127",
          border: "1px solid #383e47",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span
              style={{
                display: "inline-block",
                padding: "3px 10px",
                borderRadius: 4,
                fontWeight: 800,
                fontSize: 14,
                backgroundColor: details.color ? `#${details.color.replace("#", "")}` : "#2b95d6",
                color: "#ffffff",
                textShadow: "0 1px 2px rgba(0,0,0,0.7)",
              }}
            >
              {details.short_name || details.route_uid}
            </span>
            <div>
              <div style={{ fontWeight: 700, fontSize: 13, color: "#f6f7f9" }}>
                Kierunek: {directionId === 0 ? "Tam (0)" : "Powrót (1)"}
              </div>
              <div style={{ fontSize: 11, color: "#8f99a8" }}>
                {stops.length} przystanków | {formatNumber(details.total_length_km, 1)} km | ~
                {formatNumber(details.total_travel_time_min, 0)} min jazdy
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
                style={{ fontSize: 10 }}
              >
                Kierunek 0
              </Button>
              <Button
                active={directionId === 1}
                intent={directionId === 1 ? "primary" : "none"}
                onClick={() => {
                  setDirectionId(1);
                  setActiveRoute(activeRouteUid, 1);
                }}
                style={{ fontSize: 10 }}
              >
                Kierunek 1
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </Card>

      {/* Vertical Stepper Timeline */}
      <div style={{ flex: 1, overflowY: "auto", paddingRight: 8 }}>
        <div style={{ position: "relative", paddingLeft: 24 }}>
          {/* Vertical Track Line */}
          <div
            style={{
              position: "absolute",
              top: 14,
              bottom: 14,
              left: 11,
              width: 2,
              backgroundColor: details.color ? `#${details.color.replace("#", "")}` : "#2b95d6",
              opacity: 0.6,
            }}
          />

          {stops.map((s, idx) => {
            const isFirst = idx === 0;
            const isLast = idx === stops.length - 1;
            const isTerminal = s.is_terminal || isFirst || isLast;

            return (
              <div key={`${s.stop_id}-${s.sequence}`} style={{ marginBottom: 14, position: "relative" }}>
                {/* Node Dot */}
                <div
                  style={{
                    position: "absolute",
                    left: -20,
                    top: 4,
                    width: isTerminal ? 14 : 10,
                    height: isTerminal ? 14 : 10,
                    borderRadius: "50%",
                    backgroundColor: isTerminal ? "#0f9960" : "#2b95d6",
                    border: "2px solid #111418",
                    boxShadow: "0 0 0 2px rgba(255,255,255,0.2)",
                  }}
                />

                {/* Stop Card Row */}
                <div
                  onClick={() => handleStopClick(s)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "6px 10px",
                    background: "#1c2127",
                    border: "1px solid #2f343c",
                    borderRadius: 4,
                    cursor: "pointer",
                    transition: "background 0.15s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#252a31";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#1c2127";
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <Tag minimal style={{ fontSize: 9, padding: "0 4px", minWidth: 22, textAlign: "center" }}>
                      #{s.sequence}
                    </Tag>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 12, color: "#f6f7f9" }}>
                        {s.stop_name}
                      </div>
                      <div style={{ fontSize: 10, color: "#8f99a8" }}>ID: {s.stop_id}</div>
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 11 }}>
                    <span style={{ color: "#8f99a8" }}>+{formatNumber(s.cumulative_distance_km, 2)} km</span>
                    <Tag minimal intent="primary" style={{ fontSize: 10 }}>
                      +{formatNumber(s.cumulative_travel_time_min, 1)} min
                    </Tag>
                  </div>
                </div>

                {/* Segment Edge Info (between stops) */}
                {!isLast && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      margin: "4px 0 4px 12px",
                      fontSize: 10,
                      color: "#8f99a8",
                    }}
                  >
                    <span>↳ Odcinek: {formatDistance(s.segment_distance_m)}</span>
                    <span>Czas netto: {formatDuration(s.segment_travel_time_sec)}</span>
                    {s.segment_speed_kmh != null && (
                      <span
                        style={{
                          fontWeight: 700,
                          color: s.segment_speed_kmh < 15 ? "#db3737" : "#0f9960",
                        }}
                      >
                        {formatSpeed(s.segment_speed_kmh)}
                      </span>
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
