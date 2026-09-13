"use client";

import React, { useState, useEffect, useRef } from "react";
import { Search, X, Bus, ArrowRight } from "lucide-react";
import { useFoundryStore } from "@/lib/store";
import { fetchStopsRanking } from "@/lib/api";
import type { StopRankingItem } from "@/lib/api/types";
import GradeBadge from "@/components/shared/GradeBadge";

export default function TopSearchPill() {
  const { selectedCity, selectObject, setViewState } = useFoundryStore();
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<StopRankingItem[]>([]);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!query.trim()) return;

    const timer = setTimeout(() => {
      setLoading(true);
      fetchStopsRanking({
        city: selectedCity,
        limit: 8,
      })
        .then((res) => {
          const q = query.toLowerCase();
          const matches = (res.items || []).filter(
            (s) =>
              s.stop_name?.toLowerCase().includes(q) ||
              s.stop_routes?.toLowerCase().includes(q) ||
              s.stop_id?.toLowerCase().includes(q)
          );
          setResults(matches);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }, 200);

    return () => clearTimeout(timer);
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

  const handleSelect = (stop: StopRankingItem) => {
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

  return (
    <div ref={containerRef} className="relative w-full max-w-[460px]">
      <div className="busos-pill rounded-full flex items-center px-4 py-2.5 transition-all">
        <Search className="w-4 h-4 text-[#47317f] shrink-0 mr-3" />
        <input
          type="text"
          value={query}
          onFocus={() => setIsOpen(true)}
          onChange={(e) => {
            const val = e.target.value;
            setQuery(val);
            if (!val.trim()) {
              setResults([]);
            }
            setIsOpen(true);
          }}
          placeholder="Wpisz nazwę przystanku, linii lub ulicy..."
          className="w-full bg-transparent text-xs font-semibold text-slate-900 placeholder:text-slate-400 placeholder:font-normal outline-none"
        />
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setResults([]);
            }}
            className="text-slate-400 hover:text-slate-600 p-0.5 ml-2 cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Autocomplete Dropdown */}
      {isOpen && query.trim() && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden py-2 z-50 animate-in fade-in-50 duration-150">
          <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Wyniki wyszukiwania
          </div>

          {loading ? (
            <div className="px-4 py-6 text-center text-xs text-slate-400">
              Szukanie...
            </div>
          ) : results.length === 0 ? (
            <div className="px-4 py-6 text-center text-xs text-slate-400">
              Nie znaleziono przystanków dla &quot;{query}&quot;
            </div>
          ) : (
            <div className="divide-y divide-slate-100 max-h-80 overflow-y-auto">
              {results.map((stop) => (
                <button
                  key={stop.stop_id}
                  type="button"
                  onClick={() => handleSelect(stop)}
                  className="w-full px-3.5 py-2.5 flex items-center justify-between gap-3 text-left hover:bg-slate-50 transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <GradeBadge grade={stop.stop_grade} size="small" />
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-slate-900 group-hover:text-[#47317f] truncate">
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
  );
}
