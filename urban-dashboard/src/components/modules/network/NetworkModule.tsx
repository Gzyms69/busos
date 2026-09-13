"use client";

import React, { useState, useEffect } from "react";
import { Tabs, Tab, Tag } from "@blueprintjs/core";
import { useFoundryStore } from "@/lib/store";
import { fetchAuditSummary } from "@/lib/api";
import type { CityAuditSummaryResponse } from "@/lib/api/types";
import StopsDataGrid from "./StopsDataGrid";
import HubsDataGrid from "./HubsDataGrid";
import PoiSearchOverlay from "./PoiSearchOverlay";
import { formatNumber } from "@/lib/utils/formatters";
import { AlertTriangle, Award, Bus, Network, Sparkles } from "lucide-react";

export default function NetworkModule() {
  const { selectedCity, setStopsFilter, stopsGradeFilter } = useFoundryStore();
  const [activeTab, setActiveTab] = useState<string>("stops");
  const [auditData, setAuditData] = useState<CityAuditSummaryResponse | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    fetchAuditSummary(selectedCity, "summary,grades", controller.signal)
      .then((res) => setAuditData(res))
      .catch(() => {});
    return () => controller.abort();
  }, [selectedCity]);

  const summary = auditData?.summary;
  const grades = auditData?.grades?.stops;
  const totalStops = summary?.stops_count || 0;
  const gradeFCount = grades?.F || 0;
  const gradeAPlusCount = (grades?.A_plus || 0) + (grades?.A || 0);
  const gradeFPct = totalStops > 0 ? (gradeFCount / totalStops) * 100 : 0;

  return (
    <div className="flex flex-col h-full p-4 sm:p-5 overflow-hidden bg-white text-slate-900">
      {/* Module Header */}
      <div className="flex items-center justify-between flex-wrap gap-3 pb-3 mb-3 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-base font-extrabold text-slate-900 tracking-tight m-0">
              PRZYSTANKI I WĘZŁY: {selectedCity.toUpperCase()}
            </h2>
            <Tag minimal intent="primary" className="text-[10px] font-bold">
              KATALOG PUNKTÓW
            </Tag>
          </div>
          <div className="text-xs text-slate-500 mt-0.5">
            Eksplorator przystanków i węzłów przesiadkowych z parametrami obsługi pasażerskiej.
          </div>
        </div>

        {/* POI Search with DuckDB Pushdown */}
        <PoiSearchOverlay />
      </div>

      {/* Progressive Disclosure: Executive Telemetry Summary Bar */}
      {summary && (
        <div className="mb-3 p-2.5 rounded-xl bg-slate-50 border border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-2 text-xs select-none">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center shrink-0">
              <Bus className="w-3.5 h-3.5" />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider truncate">
                Słupki w siatce
              </div>
              <div className="font-mono font-bold text-slate-900 text-xs">
                {totalStops.toLocaleString("pl-PL")} słupków
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center shrink-0">
              <Network className="w-3.5 h-3.5" />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider truncate">
                Węzły (Hubs)
              </div>
              <div className="font-mono font-bold text-slate-900 text-xs">
                {(summary.hubs_count || 0).toLocaleString("pl-PL")} węzłów
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setStopsFilter({ grade: stopsGradeFilter === "F" ? "" : "F" })}
            className={`flex items-center gap-2 text-left p-1 rounded-lg transition-colors cursor-pointer ${
              stopsGradeFilter === "F" ? "bg-rose-100 ring-1 ring-rose-400" : "hover:bg-slate-100"
            }`}
            title="Kliknij, aby przefiltrować tabelę tylko do przystanków z oceną F"
          >
            <div className="w-7 h-7 rounded-lg bg-rose-50 text-rose-700 flex items-center justify-center shrink-0">
              <AlertTriangle className="w-3.5 h-3.5" />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] font-semibold text-rose-600 uppercase tracking-wider truncate">
                Wymagające interwencji (F)
              </div>
              <div className="font-mono font-bold text-rose-700 text-xs">
                {gradeFCount} ({formatNumber(gradeFPct, 1)}%)
              </div>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setStopsFilter({ grade: stopsGradeFilter === "A+" ? "" : "A+" })}
            className={`flex items-center gap-2 text-left p-1 rounded-lg transition-colors cursor-pointer ${
              stopsGradeFilter === "A+" ? "bg-emerald-100 ring-1 ring-emerald-400" : "hover:bg-slate-100"
            }`}
            title="Kliknij, aby przefiltrować tabelę do przystanków o wzorcowej obsłudze"
          >
            <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
              <Award className="w-3.5 h-3.5" />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] font-semibold text-emerald-600 uppercase tracking-wider truncate">
                Wzorcowe (A+ / A)
              </div>
              <div className="font-mono font-bold text-emerald-700 text-xs">
                {gradeAPlusCount} słupków
              </div>
            </div>
          </button>
        </div>
      )}

      {/* Tabs Navigation */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Tabs
          id="network-tabs"
          selectedTabId={activeTab}
          onChange={(newTab) => setActiveTab(String(newTab))}
        >
          <Tab
            id="stops"
            title="Przystanki"
            panel={
              <div className="h-full flex flex-col">
                <StopsDataGrid />
              </div>
            }
          />
          <Tab
            id="hubs"
            title="Węzły Przesiadkowe"
            panel={
              <div className="h-full flex flex-col">
                <HubsDataGrid />
              </div>
            }
          />
        </Tabs>
      </div>
    </div>
  );
}
