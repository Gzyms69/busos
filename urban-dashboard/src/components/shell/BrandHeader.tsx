"use client";

import React, { useState } from "react";
import { ChevronDown, MapPin } from "lucide-react";
import { useFoundryStore } from "@/lib/store";

export default function BrandHeader() {
  const { selectedCity, setCity, availableCities } = useFoundryStore();
  const [isOpen, setIsOpen] = useState(false);

  const cityName = selectedCity.charAt(0).toUpperCase() + selectedCity.slice(1);

  return (
    <div className="relative">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_4px_16px_rgba(0,0,0,0.08)] px-3.5 py-2 flex items-center gap-3">
        <a
          href="https://czerwinskidawid.pl"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 group text-decoration-none"
        >
          <div className="w-8 h-8 rounded-xl bg-[#47317f] flex items-center justify-center text-white font-black text-sm tracking-tighter shadow-sm group-hover:scale-105 transition-transform">
            B
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-black tracking-tight text-slate-900 leading-none">
              BUSOS
            </span>
            <span className="text-[10px] font-semibold text-slate-400 leading-none mt-0.5">
              Analiza aglomeracji
            </span>
          </div>
        </a>

        <div className="h-5 w-px bg-slate-200" />

        {/* City Dropdown Trigger */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-bold text-slate-800 transition-colors cursor-pointer"
          >
            <MapPin className="w-3.5 h-3.5 text-[#47317f]" />
            <span>{cityName}</span>
            <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 mt-1.5 w-44 bg-white rounded-xl border border-slate-200 shadow-xl py-1 z-50">
              <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Wybierz miasto
              </div>
              {availableCities.map((city) => (
                <button
                  key={city}
                  type="button"
                  onClick={() => {
                    setCity(city);
                    setIsOpen(false);
                  }}
                  className={`w-full px-3 py-1.5 text-xs text-left font-semibold hover:bg-slate-50 flex items-center justify-between cursor-pointer ${
                    selectedCity.toLowerCase() === city.toLowerCase()
                      ? "text-[#47317f] bg-[#f5f2fa]"
                      : "text-slate-700"
                  }`}
                >
                  <span className="capitalize">{city}</span>
                  {selectedCity.toLowerCase() === city.toLowerCase() && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#47317f]" />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
