"use client";

import React, { useState, useMemo } from "react";
import { Card, Tag, Button, Callout } from "@blueprintjs/core";
import { useFoundryStore } from "@/lib/store";
import { formatNumber } from "@/lib/utils/formatters";

interface ApcRecord {
  seq: number;
  stopId: string;
  stopName: string;
  boardings: number;
  alightings: number;
  occupancy: number;
  capacity: number;
  loadFactor: number; // occupancy / capacity
}

const SAMPLE_APC_DATA: ApcRecord[] = [
  { seq: 1, stopId: "46", stopName: "Dworzec Główny", boardings: 42, alightings: 0, occupancy: 42, capacity: 105, loadFactor: 0.40 },
  { seq: 2, stopId: "365", stopName: "Żytnia I", boardings: 38, alightings: 6, occupancy: 74, capacity: 105, loadFactor: 0.70 },
  { seq: 3, stopId: "1395", stopName: "Krakowska Rogatka", boardings: 29, alightings: 8, occupancy: 95, capacity: 105, loadFactor: 0.90 },
  { seq: 4, stopId: "398", stopName: "Ściegiennego / Husarska", boardings: 14, alightings: 18, occupancy: 91, capacity: 105, loadFactor: 0.87 },
  { seq: 5, stopId: "503", stopName: "Barwinek Skrzyżowanie", boardings: 8, alightings: 32, occupancy: 67, capacity: 105, loadFactor: 0.64 },
  { seq: 6, stopId: "529", stopName: "Popiełuszki / Wrzosowa", boardings: 6, alightings: 28, occupancy: 45, capacity: 105, loadFactor: 0.43 },
  { seq: 7, stopId: "436", stopName: "Wrzosowa Pętla", boardings: 2, alightings: 47, occupancy: 0, capacity: 105, loadFactor: 0.0 },
];

export default function ApcDataImporter() {
  const { selectedCity } = useFoundryStore();

  const [records, setRecords] = useState<ApcRecord[]>(SAMPLE_APC_DATA);
  const [activeFileName, setActiveFileName] = useState<string>("kielce_apc_linia_34_szczyt_poranny.csv");
  const [isDragOver, setIsDragOver] = useState(false);

  // Statistics
  const stats = useMemo(() => {
    if (!records.length) return null;
    const maxOccupancy = Math.max(...records.map((r) => r.occupancy));
    const maxRecord = records.find((r) => r.occupancy === maxOccupancy);
    const capacity = records[0]?.capacity || 105;
    const peakLoadFactor = (maxOccupancy / capacity) * 100;
    const totalBoardings = records.reduce((acc, r) => acc + r.boardings, 0);
    const overloadedStops = records.filter((r) => r.loadFactor >= 0.85);

    return {
      maxOccupancy,
      maxStopName: maxRecord?.stopName || "—",
      capacity,
      peakLoadFactor,
      totalBoardings,
      overloadedCount: overloadedStops.length,
    };
  }, [records]);

  // Load sample dataset
  const handleLoadSample = () => {
    setRecords(SAMPLE_APC_DATA);
    setActiveFileName("kielce_apc_linia_34_szczyt_poranny.csv");
  };

  // CSV file parse
  const handleFileUpload = (file: File) => {
    setActiveFileName(file.name);
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      if (!text) return;
      const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
      if (lines.length < 2) return;

      const parsed: ApcRecord[] = [];
      let runningOccupancy = 0;
      const capacity = 105;

      for (let i = 1; i < lines.length; i++) {
        const cols = lines[i].split(/[;,]/).map((c) => c.trim().replace(/^"|"$/g, ""));
        if (cols.length >= 3) {
          const stopName = cols[1] || `Przystanek ${i}`;
          const boardings = parseInt(cols[2], 10) || 0;
          const alightings = parseInt(cols[3], 10) || 0;
          runningOccupancy = Math.max(0, runningOccupancy + boardings - alightings);
          parsed.push({
            seq: i,
            stopId: cols[0] || String(i),
            stopName,
            boardings,
            alightings,
            occupancy: runningOccupancy,
            capacity,
            loadFactor: runningOccupancy / capacity,
          });
        }
      }

      if (parsed.length > 0) {
        setRecords(parsed);
      }
    };
    reader.readAsText(file);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", overflowY: "auto", paddingRight: 6 }}>
      {/* Header */}
      <div style={{ marginBottom: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <h3 style={{ margin: 0, fontSize: 14, fontWeight: 800, color: "#f8fafc" }}>
            IMPORTER POTOKÓW PASAŻERSKICH (APC)
          </h3>
          <Tag minimal intent="primary" style={{ fontSize: 10, fontWeight: 700 }}>
            LICZNIKI BRAMKOWE
          </Tag>
        </div>
        <p style={{ margin: "3px 0 0 0", fontSize: 11, color: "#9ca3af" }}>
          Wizualizacja profilu napełnienia pojazdów, potoków wymiany pasażerskiej oraz wykrywanie przepełnień (&gt;85% pojemności) dla aglomeracji {selectedCity.toUpperCase()}.
        </p>
      </div>

      {/* Drag and Drop Zone */}
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragOver(true);
        }}
        onDragLeave={() => setIsDragOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setIsDragOver(false);
          const file = e.dataTransfer.files?.[0];
          if (file) handleFileUpload(file);
        }}
        style={{
          border: `2px dashed ${isDragOver ? "#38bdf8" : "#383e47"}`,
          borderRadius: 8,
          padding: "14px 16px",
          background: isDragOver ? "rgba(56, 189, 248, 0.08)" : "rgba(24, 28, 35, 0.6)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
          marginBottom: 14,
          transition: "all 0.15s ease",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 22, color: "#38bdf8" }}>📊</span>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#f8fafc" }}>
              Przeciągnij plik CSV liczników pasażerskich (APC)
            </div>
            <div style={{ fontSize: 10, color: "#9ca3af" }}>
              Aktywny zestaw: <strong style={{ color: "#38bdf8" }}>{activeFileName}</strong>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <label
            style={{
              cursor: "pointer",
              padding: "5px 10px",
              borderRadius: 4,
              background: "#1f2937",
              border: "1px solid #374151",
              fontSize: 11,
              fontWeight: 600,
              color: "#e5e7eb",
            }}
          >
            Wybierz plik
            <input
              type="file"
              accept=".csv,.txt"
              style={{ display: "none" }}
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) handleFileUpload(f);
              }}
            />
          </label>

          <Button small minimal intent="primary" onClick={handleLoadSample} style={{ fontSize: 11 }}>
            Wczytaj zestaw testowy
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      {stats && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 10,
            marginBottom: 14,
          }}
        >
          <Card style={{ background: "#1c2127", border: "1px solid #383e47", padding: "10px 14px", borderRadius: 8 }}>
            <div style={{ fontSize: 10, fontWeight: 800, textTransform: "uppercase", color: "#9ca3af" }}>
              Maksymalne Napełnienie
            </div>
            <div style={{ fontSize: 22, fontWeight: 800, color: stats.peakLoadFactor > 85 ? "#f87171" : "#34d399", margin: "4px 0" }} className="tabular-nums">
              {stats.maxOccupancy} os.
            </div>
            <div style={{ fontSize: 10, color: "#9ca3af" }}>
              Przystanek: <strong>{stats.maxStopName}</strong>
            </div>
          </Card>

          <Card style={{ background: "#1c2127", border: "1px solid #383e47", padding: "10px 14px", borderRadius: 8 }}>
            <div style={{ fontSize: 10, fontWeight: 800, textTransform: "uppercase", color: "#9ca3af" }}>
              Współczynnik Napełnienia (Load)
            </div>
            <div style={{ fontSize: 22, fontWeight: 800, color: stats.peakLoadFactor > 85 ? "#f87171" : "#38bdf8", margin: "4px 0" }} className="tabular-nums">
              {stats.peakLoadFactor.toFixed(0)}%
            </div>
            <div style={{ fontSize: 10, color: "#9ca3af" }}>
              Nominalna pojemność: {stats.capacity} os. (12m)
            </div>
          </Card>

          <Card style={{ background: "#1c2127", border: "1px solid #383e47", padding: "10px 14px", borderRadius: 8 }}>
            <div style={{ fontSize: 10, fontWeight: 800, textTransform: "uppercase", color: "#9ca3af" }}>
              Przystanki Przepełnione (&gt;85%)
            </div>
            <div style={{ fontSize: 22, fontWeight: 800, color: stats.overloadedCount > 0 ? "#f87171" : "#34d399", margin: "4px 0" }} className="tabular-nums">
              {stats.overloadedCount}
            </div>
            <div style={{ fontSize: 10, color: stats.overloadedCount > 0 ? "#f87171" : "#34d399" }}>
              {stats.overloadedCount > 0 ? "Wymaga taboru przegubowego 18m" : "Brak przekroczeń normy"}
            </div>
          </Card>
        </div>
      )}

      {/* Occupancy Profile Along Route */}
      <Card style={{ background: "#1c2127", border: "1px solid #383e47", padding: 14, borderRadius: 8, marginBottom: 12 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <span style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", color: "#e5e7eb" }}>
            Krzywa Napełnienia Pojazdu Wzdłuż Trasy (Liczba pasażerów na pokładzie)
          </span>
          <span style={{ fontSize: 10, color: "#9ca3af" }}>
            Czerwona linia: próg 85% pojemności (89 os.)
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {records.map((r) => {
            const pct = Math.min(100, Math.round((r.occupancy / r.capacity) * 100));
            const isAlert = pct >= 85;

            return (
              <div key={r.seq} style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <span className="tabular-nums font-mono text-gray-400">#{r.seq}</span>
                    <span style={{ fontWeight: isAlert ? 800 : 600, color: isAlert ? "#f87171" : "#f3f4f6" }}>
                      {r.stopName}
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ fontSize: 10, color: "#9ca3af" }}>
                      +{r.boardings} wsiadło / -{r.alightings} wysiadło
                    </span>
                    <span
                      className="tabular-nums"
                      style={{
                        fontWeight: 800,
                        color: isAlert ? "#f87171" : "#38bdf8",
                        minWidth: 44,
                        textAlign: "right",
                      }}
                    >
                      {r.occupancy} os.
                    </span>
                  </div>
                </div>

                {/* Progress Bar with 85% alert line */}
                <div
                  style={{
                    position: "relative",
                    height: 8,
                    background: "#181c20",
                    borderRadius: 4,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${pct}%`,
                      background: isAlert
                        ? "linear-gradient(90deg, #f59e0b, #ef4444)"
                        : "linear-gradient(90deg, #10b981, #0284c7)",
                      borderRadius: 4,
                      transition: "width 0.3s ease",
                    }}
                  />
                  {/* 85% guideline marker */}
                  <div
                    style={{
                      position: "absolute",
                      left: "85%",
                      top: 0,
                      bottom: 0,
                      width: 2,
                      background: "rgba(239, 68, 68, 0.6)",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}
