"use client";

import React, { useState, useMemo } from "react";
import { Card, Tag, Button, Slider } from "@blueprintjs/core";
import { useFoundryStore } from "@/lib/store";
import { formatNumber, formatPLN, formatDistance, formatDuration, formatSpeed } from "@/lib/utils/formatters";

interface CongestedCorridor {
  id: string;
  name: string;
  lengthMeters: number;
  currentSpeedKmh: number;
  peakBusCountPerHour: number;
  dailyPassengers: number;
  projectedSpeedKmh: number;
  estimatedCostPln: number;
}

export default function BusLaneRoiWidget() {
  const { selectedCity, setViewState } = useFoundryStore();

  const [hourlyWagePln, setHourlyWagePln] = useState<number>(38); // GUS median wage for time value
  const [selectedCorridorId, setSelectedCorridorId] = useState<string>("c1");

  const [corridors] = useState<CongestedCorridor[]>([
    {
      id: "c1",
      name: "Al. IX Wieków Kielc (Warszawska – Sandomierska)",
      lengthMeters: 1400,
      currentSpeedKmh: 10.8,
      peakBusCountPerHour: 28,
      dailyPassengers: 14200,
      projectedSpeedKmh: 22.5,
      estimatedCostPln: 680000,
    },
    {
      id: "c2",
      name: "ul. Żytnia – Ogrodowa (Ciąg centralny)",
      lengthMeters: 950,
      currentSpeedKmh: 9.4,
      peakBusCountPerHour: 34,
      dailyPassengers: 18600,
      projectedSpeedKmh: 21.0,
      estimatedCostPln: 520000,
    },
    {
      id: "c3",
      name: "ul. Krakowska (Kadzidło – Ściegiennego)",
      lengthMeters: 1800,
      currentSpeedKmh: 12.2,
      peakBusCountPerHour: 18,
      dailyPassengers: 9400,
      projectedSpeedKmh: 24.0,
      estimatedCostPln: 890000,
    },
    {
      id: "c4",
      name: "ul. Grunwaldzka (Podkarczówka – Żytnia)",
      lengthMeters: 1200,
      currentSpeedKmh: 11.5,
      peakBusCountPerHour: 16,
      dailyPassengers: 8100,
      projectedSpeedKmh: 23.0,
      estimatedCostPln: 580000,
    },
  ]);

  const activeCorridor = corridors.find((c) => c.id === selectedCorridorId) || corridors[0];

  const analysis = useMemo(() => {
    const c = activeCorridor;
    // Travel time current vs projected
    const currentTimeSec = (c.lengthMeters / (c.currentSpeedKmh / 3.6));
    const projectedTimeSec = (c.lengthMeters / (c.projectedSpeedKmh / 3.6));
    const timeSavedSecPerTrip = Math.max(0, currentTimeSec - projectedTimeSec);
    const timeSavedMinPerTrip = timeSavedSecPerTrip / 60;

    // Daily & annual passenger-hours saved
    const dailyHoursSaved = (c.dailyPassengers * timeSavedSecPerTrip) / 3600;
    const annualHoursSaved = dailyHoursSaved * 250; // 250 working days

    // Economic value of saved time (GUS Voivodship median)
    const annualEconomicBenefitPln = annualHoursSaved * hourlyWagePln;

    // Operational fleet impact: cycles saved
    // If saving ~4-5 minutes per one-way trip, saving 8-10 min per cycle
    // In high-frequency lines, 1-2 vehicle brigades can be eliminated without reducing headway!
    const brigadesSaved = timeSavedMinPerTrip * 2 >= 6 ? (c.peakBusCountPerHour >= 24 ? 2 : 1) : 0;
    const annualOperatingSavingsPln = brigadesSaved * 220000; // ~220k PLN/year driver + lease per brigade

    const totalAnnualBenefitPln = annualEconomicBenefitPln + annualOperatingSavingsPln;
    const paybackYears = c.estimatedCostPln / (totalAnnualBenefitPln || 1);

    return {
      currentTimeSec,
      projectedTimeSec,
      timeSavedMinPerTrip,
      annualHoursSaved,
      annualEconomicBenefitPln,
      brigadesSaved,
      annualOperatingSavingsPln,
      totalAnnualBenefitPln,
      paybackYears,
    };
  }, [activeCorridor, hourlyWagePln]);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", overflowY: "auto", paddingRight: 6 }}>
      {/* Header */}
      <div style={{ marginBottom: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <h3 style={{ margin: 0, fontSize: 14, fontWeight: 800, color: "#f8fafc" }}>
            AUDYT BUSPASÓW I WĄSKICH GARDEŁ
          </h3>
          <Tag minimal intent="success" style={{ fontSize: 10, fontWeight: 700 }}>
            ROI INFRASTRUKTURY
          </Tag>
        </div>
        <p style={{ margin: "3px 0 0 0", fontSize: 11, color: "#9ca3af" }}>
          Kalkulacja zwrotu z inwestycji (ROI) w wydzielone korytarze autobusowe na najbardziej zakorkowanych odcinkach w aglomeracji {selectedCity.toUpperCase()}.
        </p>
      </div>

      {/* Corridor Selector */}
      <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 6, marginBottom: 12 }}>
        {corridors.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setSelectedCorridorId(c.id)}
            style={{
              padding: "6px 12px",
              borderRadius: 6,
              background: c.id === selectedCorridorId ? "rgba(56, 189, 248, 0.15)" : "rgba(28, 33, 39, 0.7)",
              border: `1px solid ${c.id === selectedCorridorId ? "#38bdf8" : "#2f343c"}`,
              color: c.id === selectedCorridorId ? "#38bdf8" : "#d1d5db",
              fontSize: 11,
              fontWeight: 700,
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            {c.name.split("(")[0].trim()}
          </button>
        ))}
      </div>

      {/* ROI & Payback Headline KPI */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 10,
          marginBottom: 14,
        }}
      >
        <Card style={{ background: "#1c2127", border: "1px solid #383e47", padding: "10px 14px", borderRadius: 8 }}>
          <div style={{ fontSize: 10, fontWeight: 800, textTransform: "uppercase", color: "#9ca3af" }}>
            Czas Zwrotu Inwestycji (Payback)
          </div>
          <div style={{ fontSize: 22, fontWeight: 800, color: "#34d399", margin: "4px 0" }} className="tabular-nums">
            {analysis.paybackYears.toFixed(1)} roku
          </div>
          <div style={{ fontSize: 11, color: "#9ca3af" }}>
            Koszt wdrożenia: {formatPLN(activeCorridor.estimatedCostPln)}
          </div>
        </Card>

        <Card style={{ background: "#1c2127", border: "1px solid #383e47", padding: "10px 14px", borderRadius: 8 }}>
          <div style={{ fontSize: 10, fontWeight: 800, textTransform: "uppercase", color: "#9ca3af" }}>
            Odzyskany Czas Pasażerów
          </div>
          <div style={{ fontSize: 22, fontWeight: 800, color: "#38bdf8", margin: "4px 0" }} className="tabular-nums">
            {Math.round(analysis.annualHoursSaved).toLocaleString("pl-PL")} h/rok
          </div>
          <div style={{ fontSize: 11, color: "#9ca3af" }}>
            Wartość społeczna: {formatPLN(analysis.annualEconomicBenefitPln)}/rok
          </div>
        </Card>

        <Card style={{ background: "#1c2127", border: "1px solid #383e47", padding: "10px 14px", borderRadius: 8 }}>
          <div style={{ fontSize: 10, fontWeight: 800, textTransform: "uppercase", color: "#9ca3af" }}>
            Redukcja Taboru (Brygady)
          </div>
          <div style={{ fontSize: 22, fontWeight: 800, color: "#f59e0b", margin: "4px 0" }} className="tabular-nums">
            -{analysis.brigadesSaved} pojazdy
          </div>
          <div style={{ fontSize: 11, color: "#34d399", fontWeight: 700 }}>
            Oszczędność operacyjna: +{formatPLN(analysis.annualOperatingSavingsPln)}/rok
          </div>
        </Card>
      </div>

      {/* Speed & Flow Breakdown */}
      <Card style={{ background: "#1c2127", border: "1px solid #383e47", padding: 14, borderRadius: 8, marginBottom: 12 }}>
        <div style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", color: "#e5e7eb", marginBottom: 10 }}>
          Parametry Korytarza: {activeCorridor.name}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 12, fontSize: 11 }}>
          <div style={{ background: "rgba(18, 20, 26, 0.6)", padding: "8px 10px", borderRadius: 6, border: "1px solid #27272a" }}>
            <div style={{ color: "#9ca3af" }}>Prędkość Obecna:</div>
            <div style={{ fontSize: 16, fontWeight: 800, color: "#f87171" }} className="tabular-nums">
              {formatSpeed(activeCorridor.currentSpeedKmh)}
            </div>
            <div style={{ fontSize: 10, color: "#6b7280" }}>Zatory w szczycie</div>
          </div>

          <div style={{ background: "rgba(18, 20, 26, 0.6)", padding: "8px 10px", borderRadius: 6, border: "1px solid #27272a" }}>
            <div style={{ color: "#9ca3af" }}>Prędkość z Buspasem:</div>
            <div style={{ fontSize: 16, fontWeight: 800, color: "#34d399" }} className="tabular-nums">
              {formatSpeed(activeCorridor.projectedSpeedKmh)}
            </div>
            <div style={{ fontSize: 10, color: "#6b7280" }}>Wzrost o +{(activeCorridor.projectedSpeedKmh - activeCorridor.currentSpeedKmh).toFixed(1)} km/h</div>
          </div>

          <div style={{ background: "rgba(18, 20, 26, 0.6)", padding: "8px 10px", borderRadius: 6, border: "1px solid #27272a" }}>
            <div style={{ color: "#9ca3af" }}>Zysk na Przejeździe:</div>
            <div style={{ fontSize: 16, fontWeight: 800, color: "#38bdf8" }} className="tabular-nums">
              -{analysis.timeSavedMinPerTrip.toFixed(1)} min
            </div>
            <div style={{ fontSize: 10, color: "#6b7280" }}>na każdy kurs autobusu</div>
          </div>

          <div style={{ background: "rgba(18, 20, 26, 0.6)", padding: "8px 10px", borderRadius: 6, border: "1px solid #27272a" }}>
            <div style={{ color: "#9ca3af" }}>Wolumen Pasażerów:</div>
            <div style={{ fontSize: 16, fontWeight: 800, color: "#f8fafc" }} className="tabular-nums">
              {activeCorridor.dailyPassengers.toLocaleString("pl-PL")}
            </div>
            <div style={{ fontSize: 10, color: "#6b7280" }}>osób dziennie w korytarzu</div>
          </div>
        </div>
      </Card>

      {/* Hourly Wage Sensitivity */}
      <Card style={{ background: "#1c2127", border: "1px solid #383e47", padding: "10px 14px", borderRadius: 8 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", color: "#e5e7eb" }}>
              Stawka Godzinowa Utraconego Czasu (GUS): {hourlyWagePln} PLN/h
            </div>
            <div style={{ fontSize: 10, color: "#9ca3af" }}>
              Wartość 1 godziny czasu podróżnego wg standardu Ministerstwa Infrastruktury / CUPT.
            </div>
          </div>

          <div style={{ width: 220 }}>
            <Slider
              min={25}
              max={65}
              stepSize={1}
              labelStepSize={10}
              value={hourlyWagePln}
              onChange={(v) => setHourlyWagePln(v)}
              showTrackFill
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
