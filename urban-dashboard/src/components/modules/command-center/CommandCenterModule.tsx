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
  const { selectedCity, setHealth } = useFoundryStore();

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
          const currentHealth = useFoundryStore.getState().health;
          if (currentHealth) {
            setHealth(currentHealth, latency);
          }
        }
      })
      .catch((err) => {
        if (err?.name !== "AbortError") {
          console.error("Failed to load Command Center data:", err);
          setError("Nie udało się pobrać danych analitycznych aglomeracji.");
          setLoading(false);
        }
      });

    return () => {
      controller.abort();
    };
  }, [selectedCity, setHealth]);

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
      <div className="flex items-center justify-between mb-4 pb-2.5 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-base font-extrabold text-slate-900 tracking-tight m-0">
              PRZEGLĄD AGLOMERACJI: {selectedCity.toUpperCase()}
            </h2>
            <Tag minimal intent="success" style={{ fontSize: 10, fontWeight: 700 }}>
              DANE AKTYWNE
            </Tag>
          </div>
          <div className="text-xs text-slate-500 mt-1">
            Analiza dostępności przystanków, węzłów przesiadkowych i kluczowych celów podróży.
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
          title="Odśwież dane aglomeracji"
          style={{ color: "#94a3b8" }}
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
