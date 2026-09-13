"use client";

import React, { useState } from "react";
import { ChevronUp, ChevronDown, LayoutDashboard, ListFilter, X, MapPin } from "lucide-react";
import { useFoundryStore } from "@/lib/store";
import AgglomerationOverviewPanel from "@/components/panels/AgglomerationOverviewPanel";
import StopCatalogPanel from "@/components/panels/StopCatalogPanel";
import StopDetailPanel from "@/components/panels/StopDetailPanel";
import HubDetailPanel from "@/components/panels/HubDetailPanel";

export type MobileSnap = "peek" | "half" | "full";

export default function MobileBottomSheet() {
  const { selectedId, selectionType, selectedCity, clearSelection } = useFoundryStore();
  const [snap, setSnap] = useState<MobileSnap>("peek");
  const [activeTab, setActiveTab] = useState<"overview" | "catalog">("overview");

  const isDetailView = Boolean(selectedId && (selectionType === "stop" || selectionType === "hub"));

  // Auto-expand sheet to half if a stop/hub is selected from map
  React.useEffect(() => {
    if (selectedId) {
      setSnap("half");
    }
  }, [selectedId]);

  const snapHeights: Record<MobileSnap, string> = {
    peek: "68px",
    half: "45dvh",
    full: "86dvh",
  };

  const handleCycleSnap = () => {
    if (snap === "peek") setSnap("half");
    else if (snap === "half") setSnap("full");
    else setSnap("peek");
  };

  const cityName = selectedCity.charAt(0).toUpperCase() + selectedCity.slice(1);

  return (
    <section
      aria-label="Panel analityczny aglomeracji"
      style={{ height: snapHeights[snap] }}
      className="md:hidden absolute bottom-0 left-0 right-0 z-30 bg-white rounded-t-3xl border-t border-slate-200 shadow-[0_-8px_30px_rgba(0,0,0,0.12)] flex flex-col overflow-hidden transition-[height] duration-300 ease-out"
    >
      {/* 1. Drag Handle & Header (Always clickable / 44px+ hit target) */}
      <div
        onClick={handleCycleSnap}
        className="w-full pt-2 pb-2.5 px-4 flex flex-col items-center justify-center shrink-0 cursor-pointer select-none bg-slate-50/80 border-b border-slate-100 min-h-[44px]"
      >
        {/* Capsule Pill Handle */}
        <div className="w-10 h-1 rounded-full bg-slate-300 mb-2" />

        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-2 min-w-0">
            <span className="w-2 h-2 rounded-full bg-[#47317f]" />
            <h2 className="text-xs font-bold text-slate-800 tracking-tight truncate">
              {isDetailView
                ? `${selectionType === "stop" ? "Przystanek" : "Węzeł"} #${selectedId}`
                : `Aglomeracja ${cityName}`}
            </h2>
            <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-600">
              {snap === "peek" ? "Dotknij, aby rozwinąć" : snap === "half" ? "45%" : "86%"}
            </span>
          </div>

          <div className="flex items-center gap-1 text-slate-400">
            {snap === "full" ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronUp className="w-4 h-4" />
            )}
          </div>
        </div>
      </div>

      {/* 2. Navigation Tabs when not in detail view */}
      {snap !== "peek" && !isDetailView && (
        <div className="flex border-b border-slate-200 bg-slate-50/70 p-1.5 shrink-0 gap-1">
          <button
            type="button"
            onClick={() => setActiveTab("overview")}
            className={`flex-1 min-h-[40px] py-1.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              activeTab === "overview"
                ? "bg-white text-[#47317f] shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <LayoutDashboard className="w-3.5 h-3.5" />
            <span>Przegląd</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("catalog")}
            className={`flex-1 min-h-[40px] py-1.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              activeTab === "catalog"
                ? "bg-white text-[#47317f] shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <ListFilter className="w-3.5 h-3.5" />
            <span>Katalog</span>
          </button>
        </div>
      )}

      {/* 3. Panel Content Area */}
      {snap !== "peek" && (
        <div className="flex-1 min-h-0 overflow-y-auto pb-[env(safe-area-inset-bottom,16px)]">
          {selectionType === "stop" && selectedId ? (
            <StopDetailPanel />
          ) : selectionType === "hub" && selectedId ? (
            <HubDetailPanel />
          ) : activeTab === "overview" ? (
            <AgglomerationOverviewPanel />
          ) : (
            <StopCatalogPanel />
          )}
        </div>
      )}
    </section>
  );
}
