"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  Bus,
  Clock,
  Gauge,
  MapPin,
  Route as RouteIcon,
  Navigation,
} from "lucide-react";
import { useFoundryStore } from "@/lib/store";
import { fetchRouteDetails } from "@/lib/api";
import type { RouteDetailsResponse, RouteStopItem } from "@/lib/api/types";
import { formatNumber, formatSpeed, formatDistance, formatDuration } from "@/lib/utils/formatters";
import CleanKpiBadge from "@/components/shared/CleanKpiBadge";
import AccordionSection from "@/components/shared/AccordionSection";
import { getCityDisplayName } from "@/lib/utils/city-names";

export default function RouteDetailPanel() {
  const {
    selectedCity,
    activeRouteUid,
    activeDirectionId,
    setActiveRoute,
    selectObject,
    setViewState,
    clearSelection,
  } = useFoundryStore();

  const [directionId, setDirectionId] = useState<number>(activeDirectionId || 0);
  const [details, setDetails] = useState<RouteDetailsResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!activeRouteUid) return;
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
      .catch((err) => {
        if (err?.name !== "AbortError") {
          setError("Nie udało się pobrać szczegółów trasy.");
          setLoading(false);
        }
      });

    return () => controller.abort();
  }, [selectedCity, activeRouteUid, directionId]);

  if (!activeRouteUid) return null;

  const handleStopClick = (s: RouteStopItem) => {
    selectObject("stop", s.stop_id, s);
    if (s.lon && s.lat) {
      setViewState({
        longitude: s.lon,
        latitude: s.lat,
        zoom: 16,
        pitch: 30,
      });
    }
  };

  const routeNumber = details?.short_name || activeRouteUid.replace(/^[a-z]+_/i, "").replace(/_\d+$/, "");
  const routeColor = details?.color
    ? details.color.startsWith("#")
      ? details.color
      : `#${details.color}`
    : "#47317f";

  const stops = details?.stops || [];
  const speed = details?.commercial_speed_kmh;
  const speedAccent = speed != null && speed < 16 ? "amber" : "emerald";

  return (
    <div className="flex flex-col h-full bg-white overflow-hidden">
      {/* Top Bar with Back Button */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 bg-white shrink-0">
        <button
          type="button"
          onClick={() => {
            setActiveRoute(null);
            clearSelection();
          }}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-[#47317f] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Wróć do przeglądu</span>
        </button>
        <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700">
          {getCityDisplayName(selectedCity)}
        </span>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {loading ? (
          <div className="py-12 flex flex-col items-center justify-center gap-2 text-slate-400">
            <div className="w-6 h-6 border-2 border-[#47317f] border-t-transparent rounded-full animate-spin" />
            <span className="text-xs">Ładowanie sekwencji GTFS i profilu LRS...</span>
          </div>
        ) : error || !details ? (
          <div className="py-8 text-center text-xs text-rose-600 bg-rose-50 rounded-xl p-4 border border-rose-200">
            {error || "Brak danych o wybranej trasie."}
          </div>
        ) : (
          <>
            {/* Route Header Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="inline-flex items-center gap-2 mb-1.5">
                    <span
                      className="px-2.5 py-0.5 rounded-lg text-sm font-black text-white shadow-sm"
                      style={{ backgroundColor: routeColor }}
                    >
                      {routeNumber}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Linia transportowa
                    </span>
                  </div>
                  <h2 className="text-base font-bold text-slate-900 leading-snug truncate">
                    {stops[stops.length - 1]?.stop_name
                      ? `${stops[0]?.stop_name || "Początek"} → ${stops[stops.length - 1]?.stop_name}`
                      : `Linia ${routeNumber}`}
                  </h2>
                </div>
              </div>

              {/* Direction Toggle */}
              <div className="mt-3 pt-3 border-t border-slate-200/80 flex items-center justify-between gap-2">
                <span className="text-xs font-semibold text-slate-600">Kierunek:</span>
                <div className="inline-flex rounded-lg bg-slate-200/70 p-0.5 text-xs">
                  <button
                    type="button"
                    onClick={() => {
                      setDirectionId(0);
                      setActiveRoute(activeRouteUid, 0, true);
                    }}
                    className={`px-2.5 py-1 rounded-md font-bold transition-all cursor-pointer ${
                      directionId === 0
                        ? "bg-white text-slate-900 shadow-sm"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Tam (0)
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setDirectionId(1);
                      setActiveRoute(activeRouteUid, 1, true);
                    }}
                    className={`px-2.5 py-1 rounded-md font-bold transition-all cursor-pointer ${
                      directionId === 1
                        ? "bg-white text-slate-900 shadow-sm"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Powrót (1)
                  </button>
                </div>
              </div>
            </div>

            {/* Key Metrics Grid */}
            <div className="grid grid-cols-3 gap-2">
              <CleanKpiBadge
                label="Długość trasy"
                value={`${formatNumber(details.total_length_km, 1)} km`}
                subtext="Trasa LRS"
                accentColor="purple"
                icon={<RouteIcon className="w-4 h-4" />}
              />
              <CleanKpiBadge
                label="Czas przejazdu"
                value={`${formatNumber(details.total_travel_time_min, 0)} min`}
                subtext="Rozkładowy"
                accentColor="blue"
                icon={<Clock className="w-4 h-4" />}
              />
              <CleanKpiBadge
                label="Prędkość handlowa"
                value={formatSpeed(details.commercial_speed_kmh)}
                subtext={speed != null && speed < 16 ? "Zator miejski" : "Płynny korytarz"}
                accentColor={speedAccent}
                icon={<Gauge className="w-4 h-4" />}
              />
            </div>

            {/* Accordion 1: Przystanki na trasie (LRS Sequence) */}
            <AccordionSection
              title="Przystanki na trasie"
              count={stops.length}
              defaultOpen={true}
            >
              {stops.length === 0 ? (
                <p className="text-xs text-slate-500 py-1">Brak listy przystanków</p>
              ) : (
                <div className="relative pl-6 pt-2 space-y-2">
                  {/* Vertical Track Line */}
                  <div
                    className="absolute top-4 bottom-4 left-2.5 w-0.5 rounded-full"
                    style={{ backgroundColor: routeColor, opacity: 0.5 }}
                  />

                  {stops.map((s, idx) => {
                    const isFirst = idx === 0;
                    const isLast = idx === stops.length - 1;
                    const isTerminal = s.is_terminal || isFirst || isLast;

                    return (
                      <div key={`${s.stop_id}-${s.sequence}`} className="relative group">
                        {/* Node Dot */}
                        <div
                          className={`absolute -left-[19px] top-2 rounded-full border-2 border-white shadow-sm transition-transform group-hover:scale-125 ${
                            isTerminal ? "w-3.5 h-3.5" : "w-2.5 h-2.5"
                          }`}
                          style={{
                            backgroundColor: isTerminal ? routeColor : "#64748b",
                          }}
                        />

                        {/* Stop Card */}
                        <button
                          type="button"
                          onClick={() => handleStopClick(s)}
                          className="w-full flex items-center justify-between p-2 rounded-lg bg-slate-50 hover:bg-[#f5f2fa] border border-slate-200/80 text-left transition-colors cursor-pointer group"
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <span className="text-[10px] font-mono font-bold text-slate-400 shrink-0 w-5">
                              #{s.sequence}
                            </span>
                            <span className="text-xs font-semibold text-slate-800 group-hover:text-[#47317f] truncate">
                              {s.stop_name}
                            </span>
                          </div>

                          <div className="flex items-center gap-2 text-[11px] text-slate-500 shrink-0">
                            <span>+{formatNumber(s.cumulative_distance_km, 1)} km</span>
                            <span className="font-bold text-[#47317f]">
                              +{formatNumber(s.cumulative_travel_time_min, 0)} min
                            </span>
                          </div>
                        </button>

                        {/* Segment Edge Info (between stops) */}
                        {!isLast && s.segment_distance_m > 0 && (
                          <div className="flex items-center gap-2 pl-3 py-0.5 text-[10px] text-slate-400">
                            <span>↳ {formatDistance(s.segment_distance_m)}</span>
                            <span>• {formatDuration(s.segment_travel_time_sec)}</span>
                            {s.segment_speed_kmh != null && (
                              <span
                                className={`font-semibold ${
                                  s.segment_speed_kmh < 15 ? "text-amber-600" : "text-emerald-600"
                                }`}
                              >
                                • {formatSpeed(s.segment_speed_kmh)}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </AccordionSection>
          </>
        )}
      </div>
    </div>
  );
}
