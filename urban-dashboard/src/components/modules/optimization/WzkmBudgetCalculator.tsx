"use client";

import React, { useState, useMemo } from "react";
import { Card, Tag, Button, InputGroup, Slider } from "@blueprintjs/core";
import { useFoundryStore } from "@/lib/store";
import { formatNumber, formatPLN } from "@/lib/utils/formatters";

interface LineOverlapPair {
  lineA: string;
  lineB: string;
  sharedCorridor: string;
  overlapPercentage: number;
  sharedLengthKm: number;
  bunchingRisk: "Wysokie" | "Średnie" | "Niskie";
  currentOffsetMin: number;
  recommendedOffsetMin: number;
  annualRedundantWzkm: number;
  redundantAnnualCost: number;
}

export default function WzkmBudgetCalculator() {
  const { selectedCity } = useFoundryStore();

  const [standardRate, setStandardRate] = useState<number>(14.2); // PLN / wzkm for 12m standard
  const [articulatedRate, setArticulatedRate] = useState<number>(17.8); // PLN / wzkm for 18m mega
  const [midiRate, setMidiRate] = useState<number>(11.5); // PLN / wzkm for 9m midi

  // Pairs of lines with corridor overlap in Kielce
  const [overlapPairs, setOverlapPairs] = useState<LineOverlapPair[]>([
    {
      lineA: "34",
      lineB: "46",
      sharedCorridor: "Czarnów – Żytnia – Sienkiewicza – Warszawska",
      overlapPercentage: 82,
      sharedLengthKm: 7.4,
      bunchingRisk: "Wysokie",
      currentOffsetMin: 2,
      recommendedOffsetMin: 8,
      annualRedundantWzkm: 48200,
      redundantAnnualCost: 48200 * 14.2,
    },
    {
      lineA: "54",
      lineB: "21",
      sharedCorridor: "Dworzec Główny – Seminaryjska – Ściegiennego",
      overlapPercentage: 74,
      sharedLengthKm: 5.1,
      bunchingRisk: "Wysokie",
      currentOffsetMin: 1,
      recommendedOffsetMin: 6,
      annualRedundantWzkm: 32600,
      redundantAnnualCost: 32600 * 14.2,
    },
    {
      lineA: "30",
      lineB: "35",
      sharedCorridor: "Zagórska – Źródłowa – Al. IX Wieków Kielc",
      overlapPercentage: 68,
      sharedLengthKm: 4.3,
      bunchingRisk: "Średnie",
      currentOffsetMin: 3,
      recommendedOffsetMin: 7,
      annualRedundantWzkm: 21400,
      redundantAnnualCost: 21400 * 14.2,
    },
    {
      lineA: "13",
      lineB: "114",
      sharedCorridor: "Krakowska – Ściegiennego – Bilcza",
      overlapPercentage: 62,
      sharedLengthKm: 6.8,
      bunchingRisk: "Średnie",
      currentOffsetMin: 4,
      recommendedOffsetMin: 10,
      annualRedundantWzkm: 19800,
      redundantAnnualCost: 19800 * 14.2,
    },
  ]);

  const totals = useMemo(() => {
    const totalRedundantWzkm = overlapPairs.reduce((acc, p) => acc + p.annualRedundantWzkm, 0);
    const totalRedundantCost = totalRedundantWzkm * standardRate;
    return { totalRedundantWzkm, totalRedundantCost };
  }, [overlapPairs, standardRate]);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", overflowY: "auto", paddingRight: 6 }}>
      {/* Header */}
      <div style={{ marginBottom: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <h3 style={{ margin: 0, fontSize: 14, fontWeight: 800, color: "#f8fafc" }}>
            KALKULATOR WZKM I KANIBALIZACJA RELACJI
          </h3>
          <Tag minimal intent="warning" style={{ fontSize: 10, fontWeight: 700 }}>
            AUDYT STADNOŚCI I KOSZTÓW
          </Tag>
        </div>
        <p style={{ margin: "3px 0 0 0", fontSize: 11, color: "#9ca3af" }}>
          Identyfikacja par linii dublujących te same korytarze (nakładanie trasy &gt;60%), ryzyko stadności (bunching) oraz potencjał synchronizacji rozkładów.
        </p>
      </div>

      {/* KPI Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 10,
          marginBottom: 14,
        }}
      >
        <Card style={{ background: "#1c2127", border: "1px solid #383e47", padding: "10px 14px", borderRadius: 8 }}>
          <div style={{ fontSize: 10, fontWeight: 800, textTransform: "uppercase", color: "#9ca3af" }}>
            Roczne Wzkm w Pokrywających Się Trasach
          </div>
          <div style={{ fontSize: 20, fontWeight: 800, color: "#f59e0b", margin: "4px 0" }} className="tabular-nums">
            {totals.totalRedundantWzkm.toLocaleString("pl-PL")} wzkm
          </div>
          <div style={{ fontSize: 11, color: "#9ca3af" }}>
            W 4 głównych korytarzach aglomeracji
          </div>
        </Card>

        <Card style={{ background: "#1c2127", border: "1px solid #383e47", padding: "10px 14px", borderRadius: 8 }}>
          <div style={{ fontSize: 10, fontWeight: 800, textTransform: "uppercase", color: "#9ca3af" }}>
            Wartość Budżetowa Kanibalizacji
          </div>
          <div style={{ fontSize: 20, fontWeight: 800, color: "#f87171", margin: "4px 0" }} className="tabular-nums">
            {formatPLN(totals.totalRedundantCost)}
          </div>
          <div style={{ fontSize: 11, color: "#34d399", fontWeight: 700 }}>
            Odzyskiwalne przy taktowaniu naprzemiennym
          </div>
        </Card>

        <Card style={{ background: "#1c2127", border: "1px solid #383e47", padding: "10px 14px", borderRadius: 8 }}>
          <div style={{ fontSize: 10, fontWeight: 800, textTransform: "uppercase", color: "#9ca3af" }}>
            Stawka Rozliczeniowa ZTM
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, margin: "4px 0" }}>
            <span style={{ fontSize: 20, fontWeight: 800, color: "#38bdf8" }} className="tabular-nums">
              {standardRate.toFixed(2)} PLN
            </span>
            <span style={{ fontSize: 11, color: "#9ca3af" }}>/ wzkm (12m)</span>
          </div>
          <div style={{ fontSize: 10, color: "#6b7280" }}>
            Mega 18m: {articulatedRate.toFixed(2)} PLN | Midi 9m: {midiRate.toFixed(2)} PLN
          </div>
        </Card>
      </div>

      {/* Stawka Controls */}
      <Card style={{ background: "#1c2127", border: "1px solid #383e47", padding: "10px 14px", borderRadius: 8, marginBottom: 12 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", color: "#e5e7eb" }}>
            Dostosuj Stawkę Wozokilometra Umownego (MPK / Operatorzy):
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: 12, width: 260 }}>
            <Slider
              min={10}
              max={22}
              stepSize={0.2}
              labelStepSize={4}
              value={standardRate}
              onChange={(v) => setStandardRate(Number(v.toFixed(2)))}
              showTrackFill
            />
          </div>
        </div>
      </Card>

      {/* Line Overlap List */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <div style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", color: "#9ca3af", marginBottom: 2 }}>
          Wykryte Pary Kanibalizujące Się (Zbieżność Trasy &gt; 60%)
        </div>

        {overlapPairs.map((p, idx) => (
          <Card
            key={idx}
            style={{
              background: "rgba(28, 33, 39, 0.75)",
              border: "1px solid #2f343c",
              padding: "10px 14px",
              borderRadius: 8,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: 6 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span
                  style={{
                    padding: "3px 8px",
                    borderRadius: 4,
                    background: "#2563eb",
                    color: "#ffffff",
                    fontWeight: 800,
                    fontSize: 12,
                  }}
                >
                  Linia {p.lineA}
                </span>
                <span style={{ color: "#9ca3af", fontSize: 11 }}>vs</span>
                <span
                  style={{
                    padding: "3px 8px",
                    borderRadius: 4,
                    background: "#7c3aed",
                    color: "#ffffff",
                    fontWeight: 800,
                    fontSize: 12,
                  }}
                >
                  Linia {p.lineB}
                </span>
                <Tag
                  minimal
                  intent={p.bunchingRisk === "Wysokie" ? "danger" : "warning"}
                  style={{ fontSize: 9, fontWeight: 700 }}
                >
                  Ryzyko stadności: {p.bunchingRisk}
                </Tag>
              </div>

              <div style={{ fontSize: 11, color: "#f87171", fontWeight: 800 }} className="tabular-nums">
                {formatPLN(p.annualRedundantWzkm * standardRate)} / rok
              </div>
            </div>

            <div style={{ fontSize: 11, color: "#d1d5db", marginBottom: 6 }}>
              Wspólny ciąg: <strong>{p.sharedCorridor}</strong> ({p.sharedLengthKm} km, {p.overlapPercentage}% trasy)
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 8,
                fontSize: 11,
                background: "rgba(18, 20, 26, 0.6)",
                padding: "6px 10px",
                borderRadius: 6,
                border: "1px solid #27272a",
              }}
            >
              <div style={{ color: "#9ca3af" }}>
                Obecny odstęp odjazdów: <span style={{ color: "#f87171", fontWeight: 700 }}>{p.currentOffsetMin} min</span> (efekt stadny!)
              </div>
              <div style={{ color: "#34d399", fontWeight: 700 }}>
                ↳ Rekomendowane przesunięcie: +{p.recommendedOffsetMin} min (równy takt)
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
