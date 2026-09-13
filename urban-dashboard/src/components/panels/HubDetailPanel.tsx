"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import { ArrowLeft, Network, Bus, Clock, MapPin } from "lucide-react";
import { useFoundryStore } from "@/lib/store";
import { fetchHubCard, fetchStopsBatch, fetchRoutes } from "@/lib/api";
import type { HubCardResponse, StopProfileResponse, RouteItem } from "@/lib/api/types";
import GradeBadge from "@/components/shared/GradeBadge";
import AccordionSection from "@/components/shared/AccordionSection";
import CleanKpiBadge from "@/components/shared/CleanKpiBadge";
import PanelErrorState from "@/components/shared/PanelErrorState";
import InteractiveRouteBadge from "@/components/shared/InteractiveRouteBadge";
import { formatNumber } from "@/lib/utils/formatters";
import { getCityDisplayName } from "@/lib/utils/city-names";

export default function HubDetailPanel() {
  const {
    selectedId,
    selectedCity,
    clearSelection,
    selectObject,
    activeRouteUid,
    setActiveRoute,
  } = useFoundryStore();

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [hubCard, setHubCard] = useState<HubCardResponse | null>(null);
  const [memberStops, setMemberStops] = useState<StopProfileResponse[]>([]);
  const [cityRoutes, setCityRoutes] = useState<RouteItem[]>([]);

  // Load hub card and its member stops
  const loadData = useCallback(() => {
    if (!selectedId) return () => {};
    const controller = new AbortController();
    setLoading(true);
    setError(null);

    Promise.allSettled([
      fetchHubCard(selectedCity, Number(selectedId), controller.signal),
      fetchRoutes({ city: selectedCity, canonical_only: true }, controller.signal),
    ]).then(([hubRes, routesRes]) => {
      if (!controller.signal.aborted) {
        if (routesRes.status === "fulfilled" && Array.isArray(routesRes.value)) {
          setCityRoutes(routesRes.value);
        }

        if (hubRes.status === "fulfilled") {
          const hub = hubRes.value;
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
        } else {
          setError("Błąd pobierania profilu węzła przesiadkowego");
          setLoading(false);
        }
      }
    });

    return () => controller.abort();
  }, [selectedId, selectedCity]);

  useEffect(() => {
    return loadData();
  }, [loadData]);

  // Lookup map of short_name -> RouteItem
  const routeMap = useMemo(() => {
    const map = new Map<string, RouteItem>();
    cityRoutes.forEach((r) => {
      if (r.short_name) map.set(r.short_name.trim(), r);
    });
    return map;
  }, [cityRoutes]);

  if (!selectedId) return null;

  const hubName = hubCard?.hub_name || `Węzeł przesiadkowy #${selectedId}`;
  const grade = hubCard?.hub_grade || "B";
  const stopsCount = hubCard?.hub_stops_count ?? memberStops.length;
  const departures = hubCard?.hub_departures_h ?? 0;
  const routesCount = hubCard?.hub_routes_count ?? 0;
  const routeList = hubCard?.hub_routes
    ? hubCard.hub_routes.split(",").map((r) => r.trim()).filter(Boolean)
    : [];

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
        <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700">
          {getCityDisplayName(selectedCity)}
        </span>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {loading ? (
          <div className="py-12 flex flex-col items-center justify-center gap-2 text-slate-400">
            <div className="w-6 h-6 border-2 border-[#47317f] border-t-transparent rounded-full animate-spin" />
            <span className="text-xs">Ładowanie profilu węzła...</span>
          </div>
        ) : error && !hubCard ? (
          <PanelErrorState
            title="Błąd ładowania węzła"
            message={error}
            onRetry={loadData}
            isRetrying={loading}
          />
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
            <div className="grid grid-cols-3 gap-2">
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

            {/* Accordion 2: Linie obsługujące (Interaktywne podświetlanie i profil) */}
            {routeList.length > 0 && (
              <AccordionSection
                title="Wszystkie linie w węźle"
                count={routeList.length}
                defaultOpen={true}
              >
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {routeList.map((line) => {
                    const matchedRoute = routeMap.get(line);
                    const routeUid = matchedRoute?.route_uid || `${selectedCity}_${line}`;
                    const isHighlighted = activeRouteUid === routeUid;

                    return (
                      <InteractiveRouteBadge
                        key={line}
                        line={line}
                        route={matchedRoute}
                        isActive={isHighlighted}
                        onToggleHighlight={() => {
                          if (isHighlighted) {
                            setActiveRoute(null);
                          } else {
                            setActiveRoute(routeUid, matchedRoute?.direction_id ?? 0, false);
                          }
                        }}
                        onInspect={() => {
                          setActiveRoute(routeUid, matchedRoute?.direction_id ?? 0, true);
                        }}
                      />
                    );
                  })}
                </div>
              </AccordionSection>
            )}
          </>
        )}
      </div>
    </div>
  );
}
