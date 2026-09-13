"use client";

import React, { useEffect, useState } from "react";
import {
  useFoundryStore,
  initializeStoreFromUrl,
  syncUrlParams,
} from "@/lib/store";
import { fetchCities, fetchHealth } from "@/lib/api";
import MapCanvas from "@/components/foundry/MapCanvas";
import BrandHeader from "./BrandHeader";
import TopSearchPill from "./TopSearchPill";
import FloatingMapControls from "./FloatingMapControls";
import LeftSlidePanel from "./LeftSlidePanel";

export default function BusosShell() {
  const store = useFoundryStore();
  const { setAvailableCities, setHealth, selectedId } = store;
  const [isPanelOpen, setIsPanelOpen] = useState<boolean>(true);

  // Initialize store from URL and load baseline cities & health
  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as any).__FOUNDRY_STORE__ = useFoundryStore;
    }
    initializeStoreFromUrl((updates) => {
      useFoundryStore.setState(updates);
    });

    const startTime = performance.now();
    fetchHealth()
      .then((h) => {
        const latency = Math.round(performance.now() - startTime);
        setHealth(h, latency);
      })
      .catch((e) => console.warn("Health telemetry warning:", e));

    fetchCities()
      .then((cities) => {
        if (cities?.length) setAvailableCities(cities);
      })
      .catch((e) => console.warn("Cities list warning:", e));
  }, [setAvailableCities, setHealth]);

  // Sync URL searchParams on state changes
  useEffect(() => {
    syncUrlParams(store);
  }, [
    store.selectedCity,
    store.activeModule,
    store.activeSubtab,
    store.viewState.latitude,
    store.viewState.longitude,
    store.viewState.zoom,
  ]);

  // Automatically open panel if an object is selected
  useEffect(() => {
    if (selectedId) {
      setIsPanelOpen(true);
    }
  }, [selectedId]);

  return (
    <div className="relative w-full h-dvh min-h-dvh overflow-hidden bg-slate-50 font-sans select-none">
      {/* 1. Fullscreen MapCanvas (100% viewport) */}
      <div className="absolute inset-0 z-0">
        <MapCanvas />
      </div>

      {/* 2. Top Floating Controls Row */}
      <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none gap-3">
        {/* Left: Brand Badge */}
        <div className="pointer-events-auto shrink-0">
          <BrandHeader />
        </div>

        {/* Center: Search Pill */}
        <div className="pointer-events-auto flex-1 flex justify-center max-w-xl mx-auto">
          <TopSearchPill />
        </div>

        {/* Right: Map & View Controls */}
        <div className="pointer-events-auto shrink-0">
          <FloatingMapControls
            isPanelOpen={isPanelOpen}
            onTogglePanel={() => setIsPanelOpen(!isPanelOpen)}
          />
        </div>
      </div>

      {/* 3. Collapsible Left Slide Panel */}
      <LeftSlidePanel
        isOpen={isPanelOpen}
        onToggle={() => setIsPanelOpen(!isPanelOpen)}
      />
    </div>
  );
}
