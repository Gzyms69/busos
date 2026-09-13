"use client";

import React, { useState, useEffect } from "react";
import { ArrowLeft, Bus, MapPin, Building2, Users, Clock, ExternalLink } from "lucide-react";
import { useFoundryStore } from "@/lib/store";
import {
  fetchStopProfile,
  fetchStopDestinations,
  fetchStopTransactions,
  fetchStopRoutes,
} from "@/lib/api";
import type {
  StopProfileResponse,
  StopDestinationsResponse,
  MarketTransactionItem,
  RouteItem,
} from "@/lib/api/types";
import GradeBadge from "@/components/shared/GradeBadge";
import RoutePill from "@/components/shared/RoutePill";
import AccordionSection from "@/components/shared/AccordionSection";
import CleanKpiBadge from "@/components/shared/CleanKpiBadge";
import { formatNumber, formatDuration, formatSpeed } from "@/lib/utils/formatters";

export default function StopDetailPanel() {
  const {
    selectedId,
    selectedCity,
    clearSelection,
    setActiveRoute,
  } = useFoundryStore();

  const [loading, setLoading] = useState<boolean>(true);
  const [stopProfile, setStopProfile] = useState<StopProfileResponse | null>(null);
  const [stopDestinations, setStopDestinations] = useState<StopDestinationsResponse | null>(null);
  const [stopTransactions, setStopTransactions] = useState<MarketTransactionItem[]>([]);
  const [stopRoutes, setStopRoutes] = useState<RouteItem[]>([]);

  useEffect(() => {
    if (!selectedId) return;
    const controller = new AbortController();
    setLoading(true);

    Promise.allSettled([
      fetchStopProfile(selectedCity, String(selectedId), controller.signal),
      fetchStopDestinations(selectedCity, String(selectedId), controller.signal),
      fetchStopTransactions(selectedCity, String(selectedId), undefined, controller.signal),
      fetchStopRoutes(selectedCity, String(selectedId), controller.signal),
    ]).then(([profRes, destRes, txRes, routesRes]) => {
      if (!controller.signal.aborted) {
        if (profRes.status === "fulfilled") setStopProfile(profRes.value);
        if (destRes.status === "fulfilled") setStopDestinations(destRes.value);
        if (txRes.status === "fulfilled") {
          const raw = txRes.value;
          setStopTransactions(Array.isArray(raw) ? raw : (raw as any)?.items || []);
        }
        if (routesRes.status === "fulfilled") {
          setStopRoutes(Array.isArray(routesRes.value) ? routesRes.value : []);
        }
        setLoading(false);
      }
    });

    return () => controller.abort();
  }, [selectedId, selectedCity]);

  if (!selectedId) return null;

  const stopName = stopProfile?.stop_name || `Przystanek #${selectedId}`;
  const grade = stopProfile?.stop_grade || "C";
  const departuresPerHour = stopProfile?.stop_departures_h ?? 0;
  const routesCount = stopProfile?.stop_routes_count ?? stopRoutes.length;
  const residentsNear = stopProfile?.residents_250m ?? stopProfile?.pop_total_500m ?? 0;
  const medianPrice = stopProfile?.median_price_m2_500m;

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
            <span className="text-xs">Ładowanie profilu przystanku...</span>
          </div>
        ) : (
          <>
            {/* Stop Identity Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#47317f] mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Przystanek komunikacji miejskiej</span>
                  </div>
                  <h2 className="text-lg font-bold text-slate-900 leading-snug">
                    {stopName}
                  </h2>
                </div>
                <GradeBadge grade={grade} size="medium" />
              </div>
            </div>

            {/* Key Metrics Grid */}
            <div className="grid grid-cols-2 gap-2.5">
              <CleanKpiBadge
                label="Częstotliwość"
                value={`${formatNumber(departuresPerHour, 1)}/h`}
                subtext="Odjazdy w szczycie"
                accentColor="purple"
                icon={<Clock className="w-4 h-4" />}
              />
              <CleanKpiBadge
                label="Dostępne linie"
                value={routesCount}
                subtext="Połączenia autobusowe"
                accentColor="blue"
                icon={<Bus className="w-4 h-4" />}
              />
              <CleanKpiBadge
                label="Mieszkańcy w zasięgu"
                value={residentsNear > 0 ? `${residentsNear.toLocaleString("pl-PL")} os.` : "Brak danych"}
                subtext="Promień 250m (GUS)"
                accentColor="emerald"
                icon={<Users className="w-4 h-4" />}
              />
              <CleanKpiBadge
                label="Śr. cena mieszkań"
                value={medianPrice ? `${Math.round(medianPrice).toLocaleString("pl-PL")} zł` : "Brak aktów"}
                subtext="W promieniu 500m (RCN)"
                accentColor="amber"
                icon={<Building2 className="w-4 h-4" />}
              />
            </div>

            {/* Accordion 1: Linie autobusowe */}
            <AccordionSection
              title="Obsługiwane linie"
              count={stopRoutes.length}
              defaultOpen={true}
            >
              {stopRoutes.length === 0 ? (
                <p className="text-xs text-slate-500 py-1">Brak przypisanych linii GTFS</p>
              ) : (
                <div className="flex flex-wrap gap-2 pt-1">
                  {stopRoutes.map((r, i) => (
                    <RoutePill
                      key={r.route_uid || i}
                      route={r}
                      onClick={() => setActiveRoute(r.route_uid, 0)}
                    />
                  ))}
                </div>
              )}
            </AccordionSection>

            {/* Accordion 2: Ceny mieszkań w sąsiedztwie */}
            <AccordionSection
              title="Ceny mieszkań w sąsiedztwie (500m)"
              count={stopTransactions.length}
              defaultOpen={stopTransactions.length > 0}
            >
              {stopTransactions.length === 0 ? (
                <p className="text-xs text-slate-500 py-1">
                  Brak zarejestrowanych transakcji notarialnych w promieniu 500m
                </p>
              ) : (
                <div className="space-y-1.5 pt-1">
                  {stopTransactions.slice(0, 8).map((tx, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100 text-xs"
                    >
                      <div className="flex flex-col">
                        <span className="font-bold text-slate-900">
                          {tx.price_m2 ? `${Math.round(tx.price_m2).toLocaleString("pl-PL")} zł/m²` : "Cena poufna"}
                        </span>
                        <span className="text-[11px] text-slate-500">
                          {tx.transaction_date || "Niedawno"} • {tx.distance_m ? `${Math.round(tx.distance_m)}m od słupka` : "Blisko"}
                        </span>
                      </div>
                      <span className="px-2 py-0.5 text-[10px] font-semibold bg-white border border-slate-200 rounded text-slate-600">
                        {tx.market_type === "primary" ? "Pierwotny" : "Wtórny"}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </AccordionSection>

            {/* Accordion 3: Bezpośrednie połączenia (Destinations) */}
            {stopDestinations?.destinations && stopDestinations.destinations.length > 0 && (
              <AccordionSection
                title="Główne kierunki dojazdu"
                count={stopDestinations.destinations.length}
                defaultOpen={false}
              >
                <div className="space-y-1.5 pt-1">
                  {stopDestinations.destinations.slice(0, 10).map((dst, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100 text-xs"
                    >
                      <span className="font-medium text-slate-800 truncate max-w-[180px]">
                        {dst.to_stop_name}
                      </span>
                      <div className="flex items-center gap-2 text-[11px] text-slate-500 shrink-0">
                        <span className="font-semibold text-[#47317f]">
                          {formatDuration(dst.min_travel_time_sec)}
                        </span>
                        <span>•</span>
                        <span>{formatSpeed(dst.speed_kmh)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionSection>
            )}

            {/* Accordion 4: Metadane techniczne */}
            <AccordionSection
              title="Informacje techniczne i GTFS"
              defaultOpen={false}
            >
              <div className="space-y-2 text-xs text-slate-600 pt-1">
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Identyfikator słupka (GTFS):</span>
                  <span className="font-mono font-bold text-slate-800">{stopProfile?.stop_id || selectedId}</span>
                </div>
                {stopProfile?.stop_lat && (
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Współrzędne geograficzne:</span>
                    <span className="font-mono text-slate-800">
                      {stopProfile.stop_lat.toFixed(4)}, {stopProfile.stop_lon?.toFixed(4)}
                    </span>
                  </div>
                )}
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Wskaźnik obsługi:</span>
                  <span className="font-bold text-slate-800">
                    {formatNumber(stopProfile?.stop_score ?? 0, 1)} / 100
                  </span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Status topologiczny:</span>
                  <span className="text-emerald-700 font-semibold">Zweryfikowany GTFS</span>
                </div>
              </div>
            </AccordionSection>
          </>
        )}
      </div>
    </div>
  );
}
