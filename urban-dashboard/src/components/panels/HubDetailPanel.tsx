"use client";

import React, { useState, useEffect } from "react";
import { ArrowLeft, Network, Bus, Clock, MapPin } from "lucide-react";
import { useFoundryStore } from "@/lib/store";
import { fetchHubCard, fetchStopsBatch } from "@/lib/api";
import type { HubCardResponse, StopProfileResponse } from "@/lib/api/types";
import GradeBadge from "@/components/shared/GradeBadge";
import AccordionSection from "@/components/shared/AccordionSection";
import CleanKpiBadge from "@/components/shared/CleanKpiBadge";
import { formatNumber } from "@/lib/utils/formatters";

export default function HubDetailPanel() {
  const {
    selectedId,
    selectedCity,
    clearSelection,
    selectObject,
  } = useFoundryStore();

  const [loading, setLoading] = useState<boolean>(true);
  const [hubCard, setHubCard] = useState<HubCardResponse | null>(null);
  const [memberStops, setMemberStops] = useState<StopProfileResponse[]>([]);

  useEffect(() => {
    if (!selectedId) return;
    const controller = new AbortController();
    setLoading(true);

    fetchHubCard(selectedCity, Number(selectedId), controller.signal)
      .then((hub) => {
        if (!controller.signal.aborted) {
          setHubCard(hub);
          const stopIds = hub.hub_stops_ids || [];
          if (stopIds.length > 0) {
            fetchStopsBatch(selectedCity, stopIds, controller.signal)
              .then((batch) => {
                if (!controller.signal.aborted) setMemberStops(batch.stops || []);
              })
              .catch(() => {});
          }
          setLoading(false);
        }
      })
      .catch((err) => {
        if (err?.name !== "AbortError") setLoading(false);
      });

    return () => controller.abort();
  }, [selectedId, selectedCity]);

  if (!selectedId) return null;

  const hubName = hubCard?.hub_name || `Węzeł przesiadkowy #${selectedId}`;
  const grade = hubCard?.hub_grade || "B";
  const stopsCount = hubCard?.hub_stops_count ?? memberStops.length;
  const departures = hubCard?.hub_departures_h ?? 0;
  const routesCount = hubCard?.hub_routes_count ?? 0;
  const routeList = hubCard?.hub_routes ? hubCard.hub_routes.split(",").map(r => r.trim()).filter(Boolean) : [];

  return (
    <div className="flex flex-col h-full bg-white overflow-hidden">
      {/* Top Bar with Back Button */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 bg-white shrink-0">
        <button
          type="button"
          onClick={() => clearSelection()}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-[#47317f] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Wróć do listy</span>
        </button>
        <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600">
          {selectedCity}
        </span>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {loading ? (
          <div className="py-12 flex flex-col items-center justify-center gap-2 text-slate-400">
            <div className="w-6 h-6 border-2 border-[#47317f] border-t-transparent rounded-full animate-spin" />
            <span className="text-xs">Ładowanie profilu węzła...</span>
          </div>
        ) : (
          <>
            {/* Hub Header Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#47317f] mb-1">
                    <Network className="w-3.5 h-3.5" />
                    <span>Węzeł przesiadkowy (Hub)</span>
                  </div>
                  <h2 className="text-lg font-bold text-slate-900 leading-snug">
                    {hubName}
                  </h2>
                </div>
                <GradeBadge grade={grade} size="medium" />
              </div>
            </div>

            {/* Key Metrics Grid */}
            <div className="grid grid-cols-3 gap-2.5">
              <CleanKpiBadge
                label="Słupki w węźle"
                value={stopsCount}
                subtext="Stanowiska"
                accentColor="purple"
                icon={<MapPin className="w-4 h-4" />}
              />
              <CleanKpiBadge
                label="Odjazdy łączne"
                value={`${formatNumber(departures, 0)}/h`}
                subtext="Przepustowość"
                accentColor="emerald"
                icon={<Clock className="w-4 h-4" />}
              />
              <CleanKpiBadge
                label="Liczba linii"
                value={routesCount}
                subtext="Połączenia"
                accentColor="blue"
                icon={<Bus className="w-4 h-4" />}
              />
            </div>

            {/* Accordion 1: Słupki składowe */}
            <AccordionSection
              title="Stanowiska przystankowe"
              count={memberStops.length}
              defaultOpen={true}
            >
              {memberStops.length === 0 ? (
                <p className="text-xs text-slate-500 py-1">Ładowanie listy słupków...</p>
              ) : (
                <div className="space-y-1.5 pt-1">
                  {memberStops.map((stop) => (
                    <button
                      key={stop.stop_id}
                      type="button"
                      onClick={() => selectObject("stop", stop.stop_id, stop)}
                      className="w-full flex items-center justify-between p-2 rounded-lg bg-slate-50 hover:bg-[#f5f2fa] border border-slate-200 text-left transition-colors cursor-pointer group"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <GradeBadge grade={stop.stop_grade} size="small" />
                        <span className="text-xs font-semibold text-slate-800 group-hover:text-[#47317f] truncate">
                          {stop.stop_name}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono font-bold text-slate-500 shrink-0">
                        {formatNumber(stop.stop_departures_h, 1)}/h
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </AccordionSection>

            {/* Accordion 2: Linie obsługujące */}
            {routeList.length > 0 && (
              <AccordionSection
                title="Wszystkie linie w węźle"
                count={routeList.length}
                defaultOpen={false}
              >
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {routeList.map((line, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 rounded bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200"
                    >
                      {line}
                    </span>
                  ))}
                </div>
              </AccordionSection>
            )}
          </>
        )}
      </div>
    </div>
  );
}
