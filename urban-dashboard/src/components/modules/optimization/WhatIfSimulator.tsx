"use client";

import React, { useState, useMemo } from "react";
import { Card, Slider, Tag, Button, Switch } from "@blueprintjs/core";
import { useFoundryStore } from "@/lib/store";
import { formatNumber, formatPLN, formatDistance, formatDuration } from "@/lib/utils/formatters";

interface SimulatedStop {
  id: string;
  name: string;
  popCatchment: number;
  departuresH: number;
  enabled: boolean;
}

export default function WhatIfSimulator() {
  const { selectedCity, activeRouteUid } = useFoundryStore();

  // Baseline parameters for route simulation
  const [headwayPeak, setHeadwayPeak] = useState<number>(20); // minutes
  const [headwayOffpeak, setHeadwayOffpeak] = useState<number>(30); // minutes
  const [wzkmRate, setWzkmRate] = useState<number>(14.2); // PLN / wzkm
  const [operatingHoursPeak, setOperatingHoursPeak] = useState<number>(6); // h/day peak (6-9, 14-17)
  const [operatingHoursOffpeak, setOperatingHoursOffpeak] = useState<number>(10); // h/day offpeak (9-14, 17-22)

  // Stops on the line with catchment population
  const [stops, setStops] = useState<SimulatedStop[]>([
    { id: "46", name: "Dworzec Główny", popCatchment: 4200, departuresH: 24, enabled: true },
    { id: "365", name: "Żytnia I", popCatchment: 3100, departuresH: 18, enabled: true },
    { id: "1395", name: "Krakowska Rogatka", popCatchment: 2800, departuresH: 16, enabled: true },
    { id: "398", name: "Ściegiennego / Husarska", popCatchment: 1950, departuresH: 12, enabled: true },
    { id: "503", name: "Barwinek Skrzyżowanie", popCatchment: 1400, departuresH: 8, enabled: true },
    { id: "529", name: "Popiełuszki / Wrzosowa", popCatchment: 1650, departuresH: 8, enabled: true },
    { id: "436", name: "Wrzosowa Pętla (Dubel)", popCatchment: 420, departuresH: 6, enabled: false }, // disabled by default
  ]);

  const toggleStop = (id: string) => {
    setStops((prev) =>
      prev.map((s) => (s.id === id ? { ...s, enabled: !s.enabled } : s))
    );
  };

  // Calculations
  const calculations = useMemo(() => {
    const activeStops = stops.filter((s) => s.enabled);
    const disabledStops = stops.filter((s) => !s.enabled);

    // Baseline route stats
    const baseLengthKm = 14.8;
    const dwellTimeSecPerStop = 35;
    const baseTravelTimeMin = 42;

    // Time saved by skipping stops
    const timeSavedMin = (disabledStops.length * dwellTimeSecPerStop) / 60;
    const simulatedTravelTimeMin = Math.max(15, baseTravelTimeMin - timeSavedMin);

    // Departures per day
    const peakDepartures = (operatingHoursPeak * 60) / headwayPeak;
    const offpeakDepartures = (operatingHoursOffpeak * 60) / headwayOffpeak;
    const totalDailyDepartures = peakDepartures + offpeakDepartures;

    // Daily & annual wzkm
    const dailyWzkm = totalDailyDepartures * baseLengthKm;
    const annualWzkm = dailyWzkm * 300; // ~300 operational days equivalent
    const annualCost = annualWzkm * wzkmRate;

    // Baseline comparison (baseline headway: 20m peak, 30m offpeak)
    const basePeakDep = (operatingHoursPeak * 60) / 20;
    const baseOffpeakDep = (operatingHoursOffpeak * 60) / 30;
    const baseDailyWzkm = (basePeakDep + baseOffpeakDep) * baseLengthKm;
    const baseAnnualCost = baseDailyWzkm * 300 * wzkmRate;
    const costDelta = annualCost - baseAnnualCost;

    // Population catchment
    const totalPopServed = activeStops.reduce((sum, s) => sum + s.popCatchment, 0);
    const popLost = disabledStops.reduce((sum, s) => sum + s.popCatchment, 0);

    // Fleet requirement (round trip + turnaround 10m)
    const cycleTimeMin = simulatedTravelTimeMin * 2 + 10;
    const brigadesNeeded = Math.ceil(cycleTimeMin / headwayPeak);

    return {
      activeStopsCount: activeStops.length,
      disabledStopsCount: disabledStops.length,
      simulatedTravelTimeMin,
      timeSavedMin,
      totalDailyDepartures,
      dailyWzkm,
      annualWzkm,
      annualCost,
      costDelta,
      totalPopServed,
      popLost,
      brigadesNeeded,
    };
  }, [stops, headwayPeak, headwayOffpeak, wzkmRate, operatingHoursPeak, operatingHoursOffpeak]);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", overflowY: "auto", paddingRight: 6 }}>
      {/* Header Info */}
      <div style={{ marginBottom: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <h3 style={{ margin: 0, fontSize: 14, fontWeight: 800, color: "#f8fafc" }}>
            SYMULATOR SCENARIUSZY WHAT-IF
          </h3>
          <Tag minimal intent="primary" style={{ fontSize: 10, fontWeight: 700 }}>
            MODEL PODAŻOWY
          </Tag>
        </div>
        <p style={{ margin: "3px 0 0 0", fontSize: 11, color: "#9ca3af" }}>
          Interaktywna symulacja modyfikacji taktu, eliminacji przystanków i zapotrzebowania na tabor dla linii w aglomeracji {selectedCity.toUpperCase()}.
        </p>
      </div>

      {/* KPI Cards: Before vs After Delta */}
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
            Roczny Koszt Wzkm
          </div>
          <div style={{ fontSize: 20, fontWeight: 800, color: "#f8fafc", margin: "4px 0" }} className="tabular-nums">
            {formatPLN(calculations.annualCost)}
          </div>
          <div style={{ fontSize: 11 }}>
            Bilans:{" "}
            <span
              className="tabular-nums"
              style={{
                fontWeight: 800,
                color: calculations.costDelta > 0 ? "#f87171" : calculations.costDelta < 0 ? "#34d399" : "#9ca3af",
              }}
            >
              {calculations.costDelta > 0 ? "+" : ""}
              {formatPLN(calculations.costDelta)} / rok
            </span>
          </div>
        </Card>

        <Card style={{ background: "#1c2127", border: "1px solid #383e47", padding: "10px 14px", borderRadius: 8 }}>
          <div style={{ fontSize: 10, fontWeight: 800, textTransform: "uppercase", color: "#9ca3af" }}>
            Czas Przejazdu i Brygady
          </div>
          <div style={{ fontSize: 20, fontWeight: 800, color: "#38bdf8", margin: "4px 0" }} className="tabular-nums">
            {calculations.simulatedTravelTimeMin.toFixed(1)} min
          </div>
          <div style={{ fontSize: 11, color: "#9ca3af" }}>
            Zapotrzebowanie: <strong style={{ color: "#f8fafc" }}>{calculations.brigadesNeeded} brygad</strong> taboru
          </div>
        </Card>

        <Card style={{ background: "#1c2127", border: "1px solid #383e47", padding: "10px 14px", borderRadius: 8 }}>
          <div style={{ fontSize: 10, fontWeight: 800, textTransform: "uppercase", color: "#9ca3af" }}>
            Obsługiwana Populacja GUS
          </div>
          <div style={{ fontSize: 20, fontWeight: 800, color: "#34d399", margin: "4px 0" }} className="tabular-nums">
            {calculations.totalPopServed.toLocaleString("pl-PL")}
          </div>
          <div style={{ fontSize: 11, color: calculations.popLost > 0 ? "#fbbf24" : "#9ca3af" }}>
            {calculations.popLost > 0 ? `Wykluczono ${calculations.popLost} os.` : "100% pierwotnego bufora"}
          </div>
        </Card>
      </div>

      {/* Control Sliders Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 12,
          marginBottom: 14,
        }}
      >
        {/* Takt Szczytowy */}
        <Card style={{ background: "#1c2127", border: "1px solid #383e47", padding: 14, borderRadius: 8 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
            <span style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", color: "#e5e7eb" }}>
              Takt Szczytowy: {headwayPeak} min
            </span>
            <Tag minimal intent={headwayPeak <= 12 ? "success" : headwayPeak <= 25 ? "primary" : "warning"}>
              {headwayPeak <= 12 ? "Metrobus" : headwayPeak <= 25 ? "Standard" : "Rzadki"}
            </Tag>
          </div>
          <Slider
            min={5}
            max={60}
            stepSize={5}
            labelStepSize={15}
            value={headwayPeak}
            onChange={(v) => setHeadwayPeak(v)}
            showTrackFill
          />
          <div style={{ fontSize: 10, color: "#9ca3af", marginTop: 4 }}>
            Odjazdy co {headwayPeak} min w godzinach szczytu (6:30–9:00, 14:30–17:00).
          </div>
        </Card>

        {/* Takt Pozaszczytowy */}
        <Card style={{ background: "#1c2127", border: "1px solid #383e47", padding: 14, borderRadius: 8 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
            <span style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", color: "#e5e7eb" }}>
              Takt Pozaszczytowy: {headwayOffpeak} min
            </span>
            <Tag minimal intent={headwayOffpeak <= 20 ? "primary" : "warning"}>
              {headwayOffpeak <= 20 ? "Częsty" : "Ekonomiczny"}
            </Tag>
          </div>
          <Slider
            min={10}
            max={90}
            stepSize={5}
            labelStepSize={20}
            value={headwayOffpeak}
            onChange={(v) => setHeadwayOffpeak(v)}
            showTrackFill
          />
          <div style={{ fontSize: 10, color: "#9ca3af", marginTop: 4 }}>
            Częstotliwość w międzyszczycie (9:00–14:30) oraz wieczorami (17:00–22:00).
          </div>
        </Card>
      </div>

      {/* Stop Selection Checkboxes */}
      <Card style={{ background: "#1c2127", border: "1px solid #383e47", padding: 14, borderRadius: 8 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
          <div style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", color: "#e5e7eb" }}>
            Optymalizacja Przebiegu: Włącz / Wyłącz Przystanki (Oszczędność czasu)
          </div>
          <span style={{ fontSize: 11, color: "#34d399", fontWeight: 700 }}>
            Zaoszczędzony czas: -{formatDuration(calculations.timeSavedMin * 60)}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {stops.map((s) => (
            <div
              key={s.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "6px 10px",
                background: s.enabled ? "rgba(35, 41, 50, 0.5)" : "rgba(220, 38, 38, 0.08)",
                border: `1px solid ${s.enabled ? "#2f343c" : "rgba(220, 38, 38, 0.3)"}`,
                borderRadius: 6,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Switch
                  checked={s.enabled}
                  onChange={() => toggleStop(s.id)}
                  style={{ marginBottom: 0 }}
                />
                <div>
                  <span style={{ fontWeight: 700, fontSize: 12, color: s.enabled ? "#f8fafc" : "#9ca3af" }}>
                    {s.name}
                  </span>
                  <span style={{ fontSize: 10, color: "#6b7280", marginLeft: 6 }}>ID: {s.id}</span>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 11 }}>
                <span style={{ color: "#9ca3af" }}>
                  Bufor: <strong className="tabular-nums" style={{ color: "#e5e7eb" }}>{s.popCatchment}</strong> os.
                </span>
                <span style={{ color: "#9ca3af" }}>
                  Ruch: <strong className="tabular-nums" style={{ color: "#e5e7eb" }}>{s.departuresH}</strong> kursów/h
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
