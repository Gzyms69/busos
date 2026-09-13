"use client";

import React, { useState, useEffect, useRef } from "react";
import { Search, X, Bus, Route, ArrowRight } from "lucide-react";
import { useFoundryStore } from "@/lib/store";
import { searchStops, searchRoutes } from "@/lib/api";
import type { StopRankingItem, RouteItem } from "@/lib/api/types";
import GradeBadge from "@/components/shared/GradeBadge";

export default function TopSearchPill() {
  const { selectedCity, selectObject, setViewState, setActiveRoute } = useFoundryStore();
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [stopResults, setStopResults] = useState<StopRankingItem[]>([]);
  const [routeResults, setRouteResults] = useState<RouteItem[]>([]);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!query.trim()) {
      setStopResults([]);
      setRouteResults([]);
      return;
    }

    const controller = new AbortController();
    const timer = setTimeout(() => {
      setLoading(true);
      const q = query.trim().toLowerCase();

      Promise.allSettled([
        searchRoutes(selectedCity, q, 5, controller.signal),
        searchStops(selectedCity, q, 8, controller.signal),
      ])
        .then(([routesRes, stopsRes]) => {
          if (controller.signal.aborted) return;

          if (routesRes.status === "fulfilled") {
            setRouteResults(routesRes.value || []);
          } else {
            setRouteResults([]);
          }

          if (stopsRes.status === "fulfilled") {
            setStopResults(stopsRes.value || []);
          } else {
            setStopResults([]);
          }
          setLoading(false);
        })
        .catch(() => {
          if (!controller.signal.aborted) setLoading(false);
        });
    }, 200);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [query, selectedCity]);

  // Click outside to dismiss
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
    setIsOpen(false);
    setQuery("");
  };

  const handleSelectRoute = (route: RouteItem) => {
    setActiveRoute(route.route_uid);
    setIsOpen(false);
    setQuery("");
  };

  const hasResults = stopResults.length > 0 || routeResults.length > 0;

  return (
    <div ref={containerRef} className="relative w-full max-w-[460px]">
      <div className="busos-pill rounded-full flex items-center px-4 py-2 transition-all">
        <Search className="w-4 h-4 text-[#47317f] shrink-0 mr-3" />
        <input
          type="text"
          value={query}
          role="combobox"
          aria-expanded={isOpen}
          aria-autocomplete="list"
          aria-controls="top-search-results"
          onFocus={() => setIsOpen(true)}
          onChange={(e) => {
            const val = e.target.value;
            setQuery(val);
            if (!val.trim()) {
              setStopResults([]);
              setRouteResults([]);
            }
            setIsOpen(true);
          }}
          placeholder="Szukaj linii, przystanku lub ulicy..."
          className="w-full bg-transparent text-xs font-semibold text-slate-900 placeholder:text-slate-400 placeholder:font-normal outline-none"
        />
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setStopResults([]);
              setRouteResults([]);
            }}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center text-slate-400 hover:text-slate-600 -mr-2 cursor-pointer"
            aria-label="Wyczyść zapytanie"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Autocomplete Dropdown */}
      {isOpen && query.trim() && (
        <div
          id="top-search-results"
          role="listbox"
          className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden py-2 z-50 animate-in fade-in-50 duration-150 max-h-96 overflow-y-auto"
        >
          {loading ? (
            <div className="px-4 py-6 text-center text-xs text-slate-400 font-medium">
              Wyszukiwanie w aglomeracji {selectedCity}...
            </div>
          ) : !hasResults ? (
            <div className="px-4 py-6 text-center text-xs text-slate-400">
              Nie znaleziono wyników dla &quot;{query}&quot;
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {/* Sekcja 1: Linie komunikacji */}
              {routeResults.length > 0 && (
                <div className="py-1">
                  <div className="px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#47317f]">
                    Linie komunikacji miejskiej
                  </div>
                  {routeResults.map((r) => (
                    <button
                      key={r.route_uid}
                      type="button"
                      onClick={() => handleSelectRoute(r)}
                      className="w-full px-3.5 py-2 flex items-center justify-between gap-3 text-left hover:bg-slate-50 transition-colors cursor-pointer group"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span
                          className="px-2 py-0.5 rounded-lg text-xs font-black tracking-tight text-white shrink-0 shadow-sm"
                          style={{ backgroundColor: r.color || "#47317f" }}
                        >
                          {r.short_name}
                        </span>
                        <div className="min-w-0">
                          <div className="text-xs font-bold text-slate-900 group-hover:text-[#47317f] truncate">
                            {r.headsign || r.long_name || `Linia ${r.short_name}`}
                          </div>
                          <div className="text-[11px] text-slate-500 truncate flex items-center gap-1 mt-0.5">
                            <Route className="w-3 h-3 text-slate-400" />
                            <span>{r.daily_trips || 0} kursów/dzień</span>
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#47317f] shrink-0 group-hover:translate-x-0.5 transition-all" />
                    </button>
                  ))}
                </div>
              )}

              {/* Sekcja 2: Przystanki i węzły */}
              {stopResults.length > 0 && (
                <div className="py-1">
                  <div className="px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Przystanki i słupki
                  </div>
                  {stopResults.map((stop) => (
                    <button
                      key={stop.stop_id}
                      type="button"
                      onClick={() => handleSelectStop(stop)}
                      className="w-full px-3.5 py-2 flex items-center justify-between gap-3 text-left hover:bg-slate-50 transition-colors cursor-pointer group"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <GradeBadge grade={stop.stop_grade} size="small" />
                        <div className="min-w-0">
                          <div className="text-xs font-bold text-slate-900 group-hover:text-[#47317f] truncate font-heading">
                            {stop.stop_name}
                          </div>
                          <div className="text-[11px] text-slate-500 truncate flex items-center gap-1 mt-0.5">
                            <Bus className="w-3 h-3 text-slate-400" />
                            <span>{stop.stop_routes || "Linie lokalne"}</span>
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#47317f] shrink-0 group-hover:translate-x-0.5 transition-all" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
