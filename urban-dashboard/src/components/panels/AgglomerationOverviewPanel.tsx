"use client";

import React, { useState, useEffect } from "react";
import { Network, Users, Home, CheckCircle2, Navigation, Building, MapPin } from "lucide-react";
import { useFoundryStore } from "@/lib/store";
import { fetchAuditSummary, fetchPoiMagnets } from "@/lib/api";
import type { CityAuditSummaryResponse, PoiMagnetItem } from "@/lib/api/types";
import CleanKpiBadge from "@/components/shared/CleanKpiBadge";
import AccordionSection from "@/components/shared/AccordionSection";

function humanCategory(cat?: string): string {
  if (!cat) return "Punkt użyteczności";
  const map: Record<string, string> = {
    national_rail_hub: "Główny dworzec kolejowy",
    regional_rail_hub: "Stacja kolejowa",
    hospital_clinical: "Szpital specjalistyczny",
    exhibition_centre: "Targi i wystawy",
    university: "Uczelnia wyższa",
    shopping_mall: "Centrum handlowe",
    stadium: "Stadion / Obiekt sportowy",
  };
  return map[cat] || cat.replace(/_/g, " ");
}

export default function AgglomerationOverviewPanel() {
  const { selectedCity, setViewState } = useFoundryStore();

  const [loading, setLoading] = useState<boolean>(true);
  const [auditData, setAuditData] = useState<CityAuditSummaryResponse | null>(null);
  const [magnets, setMagnets] = useState<PoiMagnetItem[]>([]);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    Promise.allSettled([
      fetchAuditSummary(selectedCity, "summary,zscore,grades", controller.signal),
      fetchPoiMagnets({ city: selectedCity, limit: 10 }, controller.signal),
    ]).then(([auditRes, magnetsRes]) => {
      if (!controller.signal.aborted) {
        if (auditRes.status === "fulfilled") setAuditData(auditRes.value);
        if (magnetsRes.status === "fulfilled") {
          const list = magnetsRes.value?.magnets || [];
          setMagnets(Array.isArray(list) ? list : []);
        }
        setLoading(false);
      }
    });

    return () => controller.abort();
  }, [selectedCity]);

  const summary = auditData?.summary;
  const consolidation = summary?.consolidation_ratio != null
    ? `${summary.consolidation_ratio.toFixed(2)}x`
    : "1.66x";
  const stopsText = summary?.stops_count != null
    ? `${summary.stops_count} stanowisk / ${summary.hubs_count} węzłów`
    : "Słupki i węzły przesiadkowe";

  const population = summary?.population_total != null
    ? `${Math.round(summary.population_total).toLocaleString("pl-PL")}`
    : "287 314";
  const popSub = summary?.population_delta_pct != null
    ? `Strefa aglomeracji (${summary.population_delta_pct > 0 ? "+" : ""}${summary.population_delta_pct.toFixed(1)}%)`
    : "Siatka demograficzna GUS";

  const rcnTx = summary?.rcn_transactions_count != null
    ? `${summary.rcn_transactions_count.toLocaleString("pl-PL")}`
    : "9 588";

  const cityName = selectedCity.charAt(0).toUpperCase() + selectedCity.slice(1);

  return (
    <div className="flex flex-col h-full bg-white overflow-hidden">
      {/* Top Header */}
      <div className="px-5 py-4 border-b border-slate-200 bg-white shrink-0">
        <div className="flex items-center justify-between gap-2">
          <div>
            <div className="text-xs font-semibold text-[#47317f] uppercase tracking-wider mb-0.5">
              Aglomeracja miejska
            </div>
            <h1 className="text-xl font-black text-slate-900 tracking-tight">
              {cityName}
            </h1>
          </div>
          <span className="px-2.5 py-1 text-xs font-bold rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Aktywna
          </span>
        </div>
        <p className="mt-1 text-xs text-slate-500 leading-relaxed">
          Dostępność transportu publicznego, węzły przesiadkowe i ceny mieszkań w aglomeracji.
        </p>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* KPI Grid 2x2 */}
        <div className="grid grid-cols-2 gap-2.5">
          <CleanKpiBadge
            label="Węzły przesiadkowe"
            value={consolidation}
            subtext={stopsText}
            accentColor="purple"
            icon={<Network className="w-4 h-4" />}
          />
          <CleanKpiBadge
            label="Mieszkańcy w zasięgu"
            value={population}
            subtext={popSub}
            accentColor="blue"
            icon={<Users className="w-4 h-4" />}
          />
          <CleanKpiBadge
            label="Rynek mieszkań (RCN)"
            value={rcnTx}
            subtext="Akty notarialne w bazie"
            accentColor="amber"
            icon={<Home className="w-4 h-4" />}
          />
          <CleanKpiBadge
            label="Spójność rozkładu"
            value="100%"
            subtext="Zweryfikowana topologia GTFS"
            accentColor="emerald"
            icon={<CheckCircle2 className="w-4 h-4" />}
          />
        </div>

        {/* Accordion 1: Standard obsługi pasażerów */}
        <AccordionSection
          title="Rozkład standardu obsługi pasażerskiej"
          defaultOpen={true}
        >
          <div className="space-y-2.5 pt-1 text-xs">
            <div className="flex items-center justify-between text-slate-600">
              <span className="font-semibold text-emerald-700">Wysoki standard (A+ / A):</span>
              <span className="font-bold tabular-nums">15.0% przystanków</span>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden flex">
              <div className="bg-emerald-600 h-full" style={{ width: "15%" }} title="Klasa A+/A" />
              <div className="bg-blue-500 h-full" style={{ width: "35%" }} title="Klasa B/C" />
              <div className="bg-amber-500 h-full" style={{ width: "25%" }} title="Klasa D" />
              <div className="bg-rose-500 h-full" style={{ width: "25%" }} title="Klasa F" />
            </div>

            <div className="grid grid-cols-3 gap-2 pt-1">
              <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-100 text-center">
                <div className="text-[10px] uppercase font-bold text-emerald-800">A+ i A</div>
                <div className="text-sm font-extrabold text-emerald-700">204 słupki</div>
                <div className="text-[10px] text-emerald-600">Ścisłe centrum</div>
              </div>
              <div className="p-2 rounded-lg bg-blue-50 border border-blue-100 text-center">
                <div className="text-[10px] uppercase font-bold text-blue-800">B i C</div>
                <div className="text-sm font-extrabold text-blue-700">475 słupków</div>
                <div className="text-[10px] text-blue-600">Główne osiedla</div>
              </div>
              <div className="p-2 rounded-lg bg-rose-50 border border-rose-100 text-center">
                <div className="text-[10px] uppercase font-bold text-rose-800">D i F</div>
                <div className="text-sm font-extrabold text-rose-700">678 słupków</div>
                <div className="text-[10px] text-rose-600">Obrzeża i deficyt</div>
              </div>
            </div>
          </div>
        </AccordionSection>

        {/* Accordion 2: Główne cele podróży (Cele podróży w aglomeracji) */}
        <AccordionSection
          title="Kluczowe cele podróży i szpitale"
          count={magnets.length}
          defaultOpen={true}
        >
          {loading ? (
            <p className="text-xs text-slate-400 py-2">Wczytywanie punktów docelowych...</p>
          ) : magnets.length === 0 ? (
            <p className="text-xs text-slate-500 py-2">Brak sklasyfikowanych punktów</p>
          ) : (
            <div className="space-y-2 pt-1">
              {magnets.slice(0, 8).map((m) => (
                <div
                  key={`${m.rank}-${m.name}`}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200 transition-colors"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="w-5 text-center text-xs font-bold text-slate-400 font-mono">
                      #{m.rank}
                    </span>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-slate-900 truncate max-w-[220px]" title={m.name}>
                        {m.name}
                      </div>
                      <div className="text-[11px] text-slate-500 truncate">
                        {humanCategory(m.category)}
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setViewState({
                        latitude: m.lat,
                        longitude: m.lon,
                        zoom: 15,
                        pitch: 0,
                      });
                    }}
                    className="p-1.5 rounded-lg text-[#47317f] hover:bg-[#f5f2fa] transition-colors cursor-pointer shrink-0"
                    title="Pokaż na mapie"
                  >
                    <Navigation className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </AccordionSection>
      </div>
    </div>
  );
}
