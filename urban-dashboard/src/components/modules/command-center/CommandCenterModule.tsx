"use client";

import React, { useEffect, useState } from "react";
import { useFoundryStore } from "@/lib/store";
import { fetchAuditSummary, fetchPoiMagnets } from "@/lib/api";
import type { CityAuditSummaryResponse, PoiMagnetItem } from "@/lib/api/types";
import CityScorecardCards from "./CityScorecardCards";
import GradeDistributionChart from "./GradeDistributionChart";
import CityMagnetsList from "./CityMagnetsList";
import { Tag, Button } from "@blueprintjs/core";

export default function CommandCenterModule() {
  const { selectedCity, health, setHealth } = useFoundryStore();

  const [auditData, setAuditData] = useState<CityAuditSummaryResponse | null>(null);
  const [magnets, setMagnets] = useState<PoiMagnetItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!selectedCity) return;

    const controller = new AbortController();
    const signal = controller.signal;
    setLoading(true);
    setError(null);

    const startTime = performance.now();

    Promise.all([
      fetchAuditSummary(selectedCity, "summary,zscore,grades", signal),
      fetchPoiMagnets({ city: selectedCity, limit: 12 }, signal),
    ])
      .then(([auditRes, magnetsRes]) => {
        if (!signal.aborted) {
          const latency = Math.round(performance.now() - startTime);
          setAuditData(auditRes);
          setMagnets(magnetsRes.magnets || []);
          setLoading(false);
          if (health) {
            setHealth(health, latency);
          }
        }
      })
      .catch((err) => {
        if (err?.name !== "AbortError") {
          console.error("Failed to load Command Center data:", err);
          setError("Nie udało się pobrać danych audytowych aglomeracji.");
          setLoading(false);
        }
      });

    return () => {
      controller.abort();
    };
  }, [selectedCity, health, setHealth]);

  return (
    <div
      style={{
        padding: "16px 20px",
        overflowY: "auto",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Module Title Section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 16,
          paddingBottom: 10,
          borderBottom: "1px solid #2f343c",
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <h2
              style={{
                margin: 0,
                fontSize: 16,
                fontWeight: 800,
                color: "#f6f7f9",
                letterSpacing: 0.5,
              }}
            >
              COMMAND CENTER: {selectedCity.toUpperCase()}
            </h2>
            <Tag minimal intent="success" style={{ fontSize: 10, fontWeight: 700 }}>
              LIVE AUDIT
            </Tag>
          </div>
          <div style={{ fontSize: 11, color: "#8f99a8", marginTop: 3 }}>
            Syntetyczny przegląd DNA węzłów, spójności transportowej i rynku nieruchomości.
          </div>
        </div>

        <Button
          minimal
          icon="refresh"
          loading={loading}
          onClick={() => {
            setAuditData(null);
            setLoading(true);
            fetchAuditSummary(selectedCity, "summary,zscore,grades").then(setAuditData);
          }}
          title="Odśwież dane audytu"
          style={{ color: "#8f99a8" }}
        />
      </div>

      {error && (
        <div
          style={{
            padding: 12,
            marginBottom: 14,
            background: "rgba(219, 55, 55, 0.15)",
            border: "1px solid #db3737",
            borderRadius: 4,
            color: "#f6f7f9",
            fontSize: 12,
          }}
        >
          {error}
        </div>
      )}

      {/* KPI Cards */}
      <CityScorecardCards data={auditData} loading={loading} />

      {/* Grade Distribution Chart */}
      <GradeDistributionChart grades={auditData?.grades} loading={loading} />

      {/* Attractors List */}
      <CityMagnetsList magnets={magnets} loading={loading} />
    </div>
  );
}
