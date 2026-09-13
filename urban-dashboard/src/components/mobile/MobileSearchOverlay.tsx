"use client";

import React, { useState, useEffect, useRef } from "react";
import { Search, X, Route as RouteIcon, Bus, ArrowRight, Loader2 } from "lucide-react";
import { useFoundryStore } from "@/lib/store";
import { fetchStopsRanking, searchRoutes } from "@/lib/api";
import type { StopRankingItem, RouteItem } from "@/lib/api/types";
import GradeBadge from "@/components/shared/GradeBadge";

interface MobileSearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileSearchOverlay({
  isOpen,
  onClose,
}: MobileSearchOverlayProps) {
  const { selectedCity, selectObject, setViewState, setActiveRoute } = useFoundryStore();
  const [query, setQuery] = useState("");
  const [stopResults, setStopResults] = useState<StopRankingItem[]>([]);
  const [routeResults, setRouteResults] = useState<RouteItem[]>([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else {
      setQuery("");
      setStopResults([]);
      setRouteResults([]);
    }
  }, [isOpen]);

  // Debounced search query
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
        searchRoutes(selectedCity, q, 6, controller.signal),
        fetchStopsRanking(
          {
            city: selectedCity,
            limit: 60,
          },
          controller.signal
        ),
      ])
        .then(([routesRes, stopsRes]) => {
          if (controller.signal.aborted) return;

          if (routesRes.status === "fulfilled") {
            setRouteResults(routesRes.value || []);
          } else {
            setRouteResults([]);
          }

          if (stopsRes.status === "fulfilled") {
            const list = stopsRes.value?.items || [];
            const filtered = list.filter(
              (s) =>
                s.stop_name?.toLowerCase().includes(q) ||
                s.stop_routes?.toLowerCase().includes(q) ||
                s.stop_id?.toLowerCase().includes(q)
            );
            setStopResults(filtered.slice(0, 10));
          } else {
            setStopResults([]);
          }
          setLoading(false);
        })
        .catch(() => {
          if (!controller.signal.aborted) setLoading(false);
        });
    }, 180);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [query, selectedCity]);

  if (!isOpen) return null;

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
    onClose();
  };

  const handleSelectRoute = (route: RouteItem) => {
    setActiveRoute(route.route_uid);
    onClose();
  };

  const hasResults = stopResults.length > 0 || routeResults.length > 0;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Wyszukiwarka mobilna linii i przystanków"
      className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex flex-col md:hidden animate-in fade-in-50 duration-150"
    >
      <div className="bg-white flex flex-col w-full h-full pt-[calc(0.5rem+env(safe-area-inset-top,0px))]">
        {/* Top Search Input Bar */}
        <div className="flex items-center gap-2 p-3 border-b border-slate-200">
          <div className="flex-1 flex items-center bg-slate-100 rounded-2xl px-3 py-2 border border-slate-200/80">
            <Search className="w-4 h-4 text-[#47317f] shrink-0 mr-2.5" />
            <input
              ref={inputRef}
              type="search"
              inputMode="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Szukaj linii (np. 34, 46) lub przystanku..."
              className="w-full bg-transparent text-base font-semibold text-slate-900 placeholder:text-slate-400 placeholder:font-normal outline-none"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="min-h-[40px] min-w-[40px] flex items-center justify-center text-slate-400 active:text-slate-700 cursor-pointer"
                aria-label="Wyczyść zapytanie"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="min-h-[44px] px-3 flex items-center justify-center text-xs font-bold text-[#47317f] active:text-[#3d2970] cursor-pointer"
          >
            Anuluj
          </button>
        </div>

        {/* Results Body */}
        <div className="flex-1 overflow-y-auto p-3 space-y-4 pb-[calc(1.5rem+env(safe-area-inset-bottom,16px))]">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-16 text-slate-400 gap-3">
              <Loader2 className="w-6 h-6 animate-spin text-[#47317f]" />
              <span className="text-xs font-medium">Wyszukiwanie w aglomeracji {selectedCity}...</span>
            </div>
          ) : query.trim() && !hasResults ? (
            <div className="py-16 text-center text-xs text-slate-500">
              Nie znaleziono wyników dla &quot;{query}&quot;
            </div>
          ) : (
            <>
              {/* Sekcja: Linie */}
              {routeResults.length > 0 && (
                <div>
                  <div className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-[#47317f]">
                    Linie komunikacji miejskiej
                  </div>
                  <div className="divide-y divide-slate-100 bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-xs">
                    {routeResults.map((r) => (
                      <button
                        key={r.route_uid}
                        type="button"
                        onClick={() => handleSelectRoute(r)}
                        className="w-full px-3.5 py-3 flex items-center justify-between gap-3 text-left active:bg-slate-50 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <span
                            className="px-2.5 py-1 rounded-xl text-xs font-black tracking-tight text-white shrink-0 shadow-xs"
                            style={{ backgroundColor: r.color || "#47317f" }}
                          >
                            {r.short_name}
                          </span>
                          <div className="min-w-0">
                            <div className="text-xs font-bold text-slate-900 truncate">
                              {r.headsign || r.long_name || `Linia ${r.short_name}`}
                            </div>
                            <div className="text-[11px] text-slate-500 truncate flex items-center gap-1 mt-0.5">
                              <RouteIcon className="w-3 h-3 text-slate-400" />
                              <span>{r.daily_trips || 0} kursów dziennie</span>
                            </div>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-300 shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Sekcja: Przystanki */}
              {stopResults.length > 0 && (
                <div>
                  <div className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Przystanki i słupki
                  </div>
                  <div className="divide-y divide-slate-100 bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-xs">
                    {stopResults.map((stop) => (
                      <button
                        key={stop.stop_id}
                        type="button"
                        onClick={() => handleSelectStop(stop)}
                        className="w-full px-3.5 py-3 flex items-center justify-between gap-3 text-left active:bg-slate-50 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <GradeBadge grade={stop.stop_grade} size="small" />
                          <div className="min-w-0">
                            <div className="text-xs font-bold text-slate-900 truncate">
                              {stop.stop_name}
                            </div>
                            <div className="text-[11px] text-slate-500 truncate flex items-center gap-1 mt-0.5">
                              <Bus className="w-3 h-3 text-slate-400" />
                              <span>{stop.stop_routes || "Linie lokalne"}</span>
                            </div>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-300 shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Empty Query Helper */}
              {!query.trim() && (
                <div className="py-8 px-4 text-center text-slate-400 text-xs">
                  Wpisz numer linii lub nazwę przystanku, aby wyszukać w aglomeracji {selectedCity}.
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
