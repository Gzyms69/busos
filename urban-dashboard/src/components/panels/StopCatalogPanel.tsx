"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Search, MapPin, Network, ChevronLeft, ChevronRight, Bus, X } from "lucide-react";
import { useFoundryStore } from "@/lib/store";
import { fetchStopsRanking, fetchHubsRanking } from "@/lib/api";
import type { StopRankingItem, HubRankingItem } from "@/lib/api/types";
import GradeBadge from "@/components/shared/GradeBadge";
import { formatNumber } from "@/lib/utils/formatters";

export default function StopCatalogPanel() {
  const {
    selectedCity,
    selectObject,
    setViewState,
  } = useFoundryStore();

  const [activeTab, setActiveTab] = useState<"stops" | "hubs">("stops");
  const [searchQuery, setSearchQuery] = useState("");
  const [gradeFilter, setGradeFilter] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  const pageSize = 20;

  const [stops, setStops] = useState<StopRankingItem[]>([]);
  const [hubs, setHubs] = useState<HubRankingItem[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  const loadData = useCallback(() => {
    const controller = new AbortController();
    setLoading(true);

    if (activeTab === "stops") {
      fetchStopsRanking(
        {
          city: selectedCity,
          order_by: "stop_departures_h",
          order_dir: "desc",
          grade: gradeFilter || undefined,
          limit: 100,
          offset: page * pageSize,
        },
        controller.signal
      )
        .then((res) => {
          if (!controller.signal.aborted) {
            let list = res.items || [];
            if (searchQuery.trim()) {
              const q = searchQuery.toLowerCase();
              list = list.filter(
                (s) =>
                  s.stop_name?.toLowerCase().includes(q) ||
                  s.stop_routes?.toLowerCase().includes(q) ||
                  s.stop_id?.toLowerCase().includes(q)
              );
            }
            setStops(list);
            setTotal(res.total || list.length);
            setLoading(false);
          }
        })
        .catch(() => setLoading(false));
    } else {
      fetchHubsRanking(
        {
          city: selectedCity,
          order_by: "hub_departures_h",
          order_dir: "desc",
          grade: gradeFilter || undefined,
          limit: 100,
          offset: page * pageSize,
        },
        controller.signal
      )
        .then((res) => {
          if (!controller.signal.aborted) {
            let list = res.items || [];
            if (searchQuery.trim()) {
              const q = searchQuery.toLowerCase();
              list = list.filter(
                (h) =>
                  h.hub_name?.toLowerCase().includes(q) ||
                  h.hub_routes?.toLowerCase().includes(q)
              );
            }
            setHubs(list);
            setTotal(res.total || list.length);
            setLoading(false);
          }
        })
        .catch(() => setLoading(false));
    }

    return () => controller.abort();
  }, [activeTab, selectedCity, gradeFilter, searchQuery, page]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleSelectStop = (stop: StopRankingItem) => {
    selectObject("stop", stop.stop_id, stop);
    if (stop.lat && stop.lon) {
      setViewState({
        latitude: stop.lat,
        longitude: stop.lon,
        zoom: 16,
        pitch: 0,
      });
    }
  };

  const handleSelectHub = (hub: HubRankingItem) => {
    selectObject("hub", hub.hub_id, hub);
    if (hub.lat && hub.lon) {
      setViewState({
        latitude: hub.lat,
        longitude: hub.lon,
        zoom: 15,
        pitch: 0,
      });
    }
  };

  const grades = ["Wszystkie", "A+", "A", "B", "C", "D", "F"];

  return (
    <div className="flex flex-col h-full bg-white overflow-hidden">
      {/* Top Search & Filter Area */}
      <div className="p-4 border-b border-slate-200 bg-white space-y-3 shrink-0">
        {/* Tab Toggle: Przystanki / Węzły */}
        <div className="flex rounded-xl bg-slate-100 p-1">
          <button
            type="button"
            onClick={() => {
              setActiveTab("stops");
              setPage(0);
            }}
            className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
              activeTab === "stops"
                ? "bg-white text-[#47317f] shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Przystanki
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveTab("hubs");
              setPage(0);
            }}
            className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
              activeTab === "hubs"
                ? "bg-white text-[#47317f] shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Węzły przesiadkowe
          </button>
        </div>

        {/* Clean Search Input without tech jargon */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setPage(0);
            }}
            placeholder={
              activeTab === "stops"
                ? "Szukaj przystanku lub linii..."
                : "Szukaj węzła przesiadkowego..."
            }
            className="w-full pl-9 pr-8 py-2 text-xs bg-slate-50 hover:bg-slate-100/60 focus:bg-white border border-slate-200 focus:border-[#47317f] rounded-xl outline-none transition-colors"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Grade Filter Pills */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1 no-scrollbar text-xs">
          {grades.map((g) => {
            const isAll = g === "Wszystkie";
            const isSelected = isAll ? !gradeFilter : gradeFilter === g;
            return (
              <button
                key={g}
                type="button"
                onClick={() => {
                  setGradeFilter(isAll ? "" : g);
                  setPage(0);
                }}
                className={`px-2.5 py-1 rounded-full text-[11px] font-semibold transition-colors cursor-pointer shrink-0 ${
                  isSelected
                    ? "bg-[#47317f] text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {g}
              </button>
            );
          })}
        </div>
      </div>

      {/* Catalog List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {loading ? (
          <div className="py-12 flex flex-col items-center justify-center gap-2 text-slate-400">
            <div className="w-6 h-6 border-2 border-[#47317f] border-t-transparent rounded-full animate-spin" />
            <span className="text-xs">Ładowanie katalogu...</span>
          </div>
        ) : activeTab === "stops" ? (
          stops.length === 0 ? (
            <div className="py-12 text-center text-xs text-slate-400">
              Brak przystanków spełniających kryteria
            </div>
          ) : (
            stops.slice(0, pageSize).map((s, idx) => (
              <button
                key={s.stop_id || idx}
                type="button"
                onClick={() => handleSelectStop(s)}
                className="w-full p-3 rounded-xl bg-slate-50 hover:bg-[#f5f2fa] border border-slate-200 hover:border-[#47317f]/40 text-left transition-all cursor-pointer group flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <GradeBadge grade={s.stop_grade} size="small" />
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-slate-900 group-hover:text-[#47317f] truncate max-w-[220px]">
                      {s.stop_name}
                    </div>
                    <div className="text-[11px] text-slate-500 truncate flex items-center gap-1.5 mt-0.5">
                      <Bus className="w-3 h-3 text-slate-400" />
                      <span>{s.stop_routes || "Linie lokalne"}</span>
                    </div>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <div className="text-xs font-mono font-bold text-slate-900">
                    {formatNumber(s.stop_departures_h, 1)}/h
                  </div>
                  <div className="text-[10px] text-slate-400">odjazdów</div>
                </div>
              </button>
            ))
          )
        ) : hubs.length === 0 ? (
          <div className="py-12 text-center text-xs text-slate-400">
            Brak węzłów przesiadkowych spełniających kryteria
          </div>
        ) : (
          hubs.slice(0, pageSize).map((h, idx) => (
            <button
              key={h.hub_id || idx}
              type="button"
              onClick={() => handleSelectHub(h)}
              className="w-full p-3 rounded-xl bg-slate-50 hover:bg-[#f5f2fa] border border-slate-200 hover:border-[#47317f]/40 text-left transition-all cursor-pointer group flex items-center justify-between gap-3"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <GradeBadge grade={h.hub_grade} size="small" />
                <div className="min-w-0">
                  <div className="text-xs font-bold text-slate-900 group-hover:text-[#47317f] truncate max-w-[220px]">
                    {h.hub_name}
                  </div>
                  <div className="text-[11px] text-slate-500 truncate flex items-center gap-1.5 mt-0.5">
                    <Network className="w-3 h-3 text-slate-400" />
                    <span>{h.hub_stops_count} stanowisk • {h.hub_routes_count} linii</span>
                  </div>
                </div>
              </div>

              <div className="text-right shrink-0">
                <div className="text-xs font-mono font-bold text-slate-900">
                  {formatNumber(h.hub_departures_h, 0)}/h
                </div>
                <div className="text-[10px] text-slate-400">odjazdów</div>
              </div>
            </button>
          ))
        )}
      </div>

      {/* Clean Pagination Footer */}
      {total > pageSize && (
        <div className="p-3 border-t border-slate-200 bg-white flex items-center justify-between text-xs text-slate-600 shrink-0">
          <span>
            Pokazano {Math.min((page + 1) * pageSize, total)} z {total}
          </span>
          <div className="flex items-center gap-1">
            <button
              type="button"
              disabled={page === 0}
              onClick={() => setPage(p => Math.max(0, p - 1))}
              className="p-1 rounded-lg border border-slate-200 hover:bg-slate-100 disabled:opacity-40 disabled:pointer-events-none"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="px-2 font-semibold tabular-nums">
              {page + 1}
            </span>
            <button
              type="button"
              disabled={(page + 1) * pageSize >= total}
              onClick={() => setPage(p => p + 1)}
              className="p-1 rounded-lg border border-slate-200 hover:bg-slate-100 disabled:opacity-40 disabled:pointer-events-none"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
