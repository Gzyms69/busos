"use client";

import React, { useState, useRef, useEffect } from "react";
import { Layers, Map as MapIcon, PanelLeftClose, PanelLeft, Check, Sun, Moon } from "lucide-react";
import { useFoundryStore } from "@/lib/store";

interface FloatingMapControlsProps {
  isPanelOpen: boolean;
  onTogglePanel: () => void;
}

export default function FloatingMapControls({
  isPanelOpen,
  onTogglePanel,
}: FloatingMapControlsProps) {
  const {
    mapStyle,
    setMapStyle,
    showBoundary,
    showHexagons,
    showStops,
    showHubs,
    showRoutes,
    toggleLayer,
  } = useFoundryStore();

  const [layersOpen, setLayersOpen] = useState(false);
  const [styleOpen, setStyleOpen] = useState(false);

  const layersRef = useRef<HTMLDivElement>(null);
  const styleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (layersRef.current && !layersRef.current.contains(e.target as Node)) {
        setLayersOpen(false);
      }
      if (styleRef.current && !styleRef.current.contains(e.target as Node)) {
        setStyleOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex items-center gap-2">
      {/* 1. Toggle Panel (Widok Listy / Przeglądu) */}
      <button
        type="button"
        onClick={onTogglePanel}
        className={`px-3.5 py-2 rounded-xl border flex items-center gap-2 text-xs font-semibold shadow-sm transition-all cursor-pointer ${
          isPanelOpen
            ? "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
            : "bg-white border-[#47317f] text-[#47317f] shadow-md hover:bg-[#f5f2fa]"
        }`}
        title={isPanelOpen ? "Zwiń panel boczny" : "Rozwiń panel boczny"}
      >
        {isPanelOpen ? (
          <>
            <PanelLeftClose className="w-4 h-4 text-slate-500" />
            <span className="hidden sm:inline">Schowaj panel</span>
          </>
        ) : (
          <>
            <PanelLeft className="w-4 h-4 text-[#47317f]" />
            <span className="hidden sm:inline">Widok panelu</span>
          </>
        )}
      </button>

      {/* 2. Layers Menu Popover */}
      <div ref={layersRef} className="relative">
        <button
          type="button"
          onClick={() => {
            setLayersOpen(!layersOpen);
            setStyleOpen(false);
          }}
          className={`p-2 sm:px-3 sm:py-2 rounded-xl border flex items-center gap-2 text-xs font-semibold shadow-sm transition-all cursor-pointer ${
            layersOpen || showHexagons
              ? "bg-[#f5f2fa] border-[#47317f] text-[#47317f]"
              : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
          }`}
          title="Przełącz warstwy analityczne"
        >
          <Layers className="w-4 h-4 text-[#47317f]" />
          <span className="hidden sm:inline">Warstwy</span>
        </button>

        {layersOpen && (
          <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-2xl border border-slate-200 shadow-2xl p-2 z-50 animate-in fade-in-50 duration-150">
            <div className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Warstwy mapy
            </div>

            <div className="space-y-1">
              <label className="flex items-center justify-between px-2.5 py-1.5 rounded-lg hover:bg-slate-50 cursor-pointer text-xs font-medium text-slate-800">
                <span>Przystanki komunikacji</span>
                <input
                  type="checkbox"
                  checked={showStops}
                  onChange={() => toggleLayer("showStops")}
                  className="rounded text-[#47317f] focus:ring-[#47317f] w-3.5 h-3.5"
                />
              </label>

              <label className="flex items-center justify-between px-2.5 py-1.5 rounded-lg hover:bg-slate-50 cursor-pointer text-xs font-medium text-slate-800">
                <span>Węzły przesiadkowe</span>
                <input
                  type="checkbox"
                  checked={showHubs}
                  onChange={() => toggleLayer("showHubs")}
                  className="rounded text-[#47317f] focus:ring-[#47317f] w-3.5 h-3.5"
                />
              </label>

              <label className="flex items-center justify-between px-2.5 py-1.5 rounded-lg hover:bg-slate-50 cursor-pointer text-xs font-medium text-slate-800">
                <span>Trasy i korytarze linii</span>
                <input
                  type="checkbox"
                  checked={showRoutes}
                  onChange={() => toggleLayer("showRoutes")}
                  className="rounded text-[#47317f] focus:ring-[#47317f] w-3.5 h-3.5"
                />
              </label>

              <div className="h-px bg-slate-100 my-1" />

              <label className="flex items-center justify-between px-2.5 py-1.5 rounded-lg hover:bg-slate-50 cursor-pointer text-xs font-medium text-slate-800">
                <span>Dostępność przestrzenna H3</span>
                <input
                  type="checkbox"
                  checked={showHexagons}
                  onChange={() => toggleLayer("showHexagons")}
                  className="rounded text-[#47317f] focus:ring-[#47317f] w-3.5 h-3.5"
                />
              </label>

              <label className="flex items-center justify-between px-2.5 py-1.5 rounded-lg hover:bg-slate-50 cursor-pointer text-xs font-medium text-slate-800">
                <span>Granica aglomeracji</span>
                <input
                  type="checkbox"
                  checked={showBoundary}
                  onChange={() => toggleLayer("showBoundary")}
                  className="rounded text-[#47317f] focus:ring-[#47317f] w-3.5 h-3.5"
                />
              </label>
            </div>
          </div>
        )}
      </div>

      {/* 3. Style Menu Popover */}
      <div ref={styleRef} className="relative">
        <button
          type="button"
          onClick={() => {
            setStyleOpen(!styleOpen);
            setLayersOpen(false);
          }}
          className={`p-2 sm:px-3 sm:py-2 rounded-xl border flex items-center gap-2 text-xs font-semibold shadow-sm transition-all cursor-pointer ${
            styleOpen
              ? "bg-[#f5f2fa] border-[#47317f] text-[#47317f]"
              : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
          }`}
          title="Styl podkładu mapowego"
        >
          {mapStyle === "light" ? (
            <Sun className="w-4 h-4 text-amber-500" />
          ) : (
            <Moon className="w-4 h-4 text-slate-600" />
          )}
          <span className="hidden sm:inline">Podkład</span>
        </button>

        {styleOpen && (
          <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-2xl border border-slate-200 shadow-2xl p-1.5 z-50 animate-in fade-in-50 duration-150">
            <div className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Podkład mapy
            </div>

            <button
              type="button"
              onClick={() => {
                setMapStyle("light");
                setStyleOpen(false);
              }}
              className={`w-full px-2.5 py-1.5 rounded-lg flex items-center justify-between text-xs font-semibold cursor-pointer ${
                mapStyle === "light"
                  ? "bg-[#f5f2fa] text-[#47317f]"
                  : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              <span>Jasny (Standard)</span>
              {mapStyle === "light" && <Check className="w-3.5 h-3.5 text-[#47317f]" />}
            </button>

            <button
              type="button"
              onClick={() => {
                setMapStyle("dark");
                setStyleOpen(false);
              }}
              className={`w-full px-2.5 py-1.5 rounded-lg flex items-center justify-between text-xs font-semibold cursor-pointer ${
                mapStyle === "dark"
                  ? "bg-[#f5f2fa] text-[#47317f]"
                  : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              <span>Ciemny (Nocny)</span>
              {mapStyle === "dark" && <Check className="w-3.5 h-3.5 text-[#47317f]" />}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
