"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, LayoutDashboard, ListFilter } from "lucide-react";
import { useFoundryStore } from "@/lib/store";
import AgglomerationOverviewPanel from "@/components/panels/AgglomerationOverviewPanel";
import StopCatalogPanel from "@/components/panels/StopCatalogPanel";
import StopDetailPanel from "@/components/panels/StopDetailPanel";
import HubDetailPanel from "@/components/panels/HubDetailPanel";

interface LeftSlidePanelProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function LeftSlidePanel({ isOpen, onToggle }: LeftSlidePanelProps) {
  const { selectedId, selectionType } = useFoundryStore();
  const [panelTab, setPanelTab] = useState<"overview" | "catalog">("overview");

  // Determine what view to render inside panel
  const isDetailView = Boolean(selectedId && (selectionType === "stop" || selectionType === "hub"));

  return (
    <>
      <div
        className={`absolute top-3 bottom-3 left-3 z-30 w-[420px] max-w-[calc(100vw-24px)] bg-white rounded-2xl border border-slate-200 shadow-[0_12px_40px_rgba(0,0,0,0.12)] flex flex-col overflow-hidden transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "-translate-x-[440px] pointer-events-none"
        }`}
      >
        {/* Navigation Tabs when not in detail view */}
        {!isDetailView && (
          <div className="flex border-b border-slate-200 bg-slate-50/70 p-1.5 shrink-0 gap-1">
            <button
              type="button"
              onClick={() => setPanelTab("overview")}
              className={`flex-1 py-1.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                panelTab === "overview"
                  ? "bg-white text-[#47317f] shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <LayoutDashboard className="w-3.5 h-3.5" />
              <span>Przegląd aglomeracji</span>
            </button>
            <button
              type="button"
              onClick={() => setPanelTab("catalog")}
              className={`flex-1 py-1.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                panelTab === "catalog"
                  ? "bg-white text-[#47317f] shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <ListFilter className="w-3.5 h-3.5" />
              <span>Katalog przystanków</span>
            </button>
          </div>
        )}

        {/* Dynamic Content View */}
        <div className="flex-1 min-h-0 overflow-hidden">
          {selectionType === "stop" && selectedId ? (
            <StopDetailPanel />
          ) : selectionType === "hub" && selectedId ? (
            <HubDetailPanel />
          ) : panelTab === "overview" ? (
            <AgglomerationOverviewPanel />
          ) : (
            <StopCatalogPanel />
          )}
        </div>
      </div>

      {/* Collapse/Expand Handle Button floating next to the panel */}
      <button
        type="button"
        onClick={onToggle}
        style={{ left: isOpen ? 432 : 12 }}
        className="absolute top-1/2 -translate-y-1/2 z-30 w-7 h-14 bg-white hover:bg-slate-50 border border-slate-200 shadow-lg rounded-r-xl flex items-center justify-center text-slate-500 hover:text-[#47317f] transition-all cursor-pointer"
        title={isOpen ? "Zwiń panel" : "Rozwiń panel"}
      >
        {isOpen ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
      </button>
    </>
  );
}
