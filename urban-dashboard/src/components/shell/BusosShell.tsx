"use client";

import React, { useEffect, useState } from "react";
import {
  useFoundryStore,
  initializeStoreFromUrl,
  syncUrlParams,
} from "@/lib/store";
import { fetchCities, fetchHealth, onConnectivityChange } from "@/lib/api";
import MapCanvas from "@/components/foundry/MapCanvas";
import BrandHeader from "./BrandHeader";
import TopSearchPill from "./TopSearchPill";
import FloatingMapControls from "./FloatingMapControls";
import LeftSlidePanel from "./LeftSlidePanel";
import MobileBottomSheet from "@/components/mobile/MobileBottomSheet";
import SimulationControlsDock from "@/components/simulation/SimulationControlsDock";
import VehicleInspectorCard from "@/components/simulation/VehicleInspectorCard";

export default function BusosShell() {
  const store = useFoundryStore();
  const { setAvailableCities, setHealth, setConnectionStatus, selectedId } = store;
  const [isPanelOpen, setIsPanelOpen] = useState<boolean>(true);

  // Initialize store from URL and load baseline cities & health
  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as any).__FOUNDRY_STORE__ = useFoundryStore;
    }
    initializeStoreFromUrl((updates) => {
      useFoundryStore.setState(updates);
    });

    // Subscribe to client connectivity events
    const unsub = onConnectivityChange((status, err) => {
      setConnectionStatus(status, err);
    });

    const startTime = performance.now();
    fetchHealth()
      .then((h) => {
        const latency = Math.round(performance.now() - startTime);
        setHealth(h, latency);
      })
      .catch((e) => {
        setConnectionStatus("offline", e?.message || "Błąd połączenia z API");
      });

    fetchCities()
      .then((cities) => {
        if (cities?.length) setAvailableCities(cities);
      })
      .catch((e) => {
        console.warn("Cities list warning:", e);
      });

    return () => unsub();
  }, [setAvailableCities, setHealth, setConnectionStatus]);

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
    <div className="relative w-full h-dvh min-h-dvh overflow-hidden bg-slate-50 font-sans">
      {/* 1. Fullscreen MapCanvas (100% viewport) */}
      <div className="absolute inset-0 z-0">
        <MapCanvas />
      </div>

      {/* 2. Top Unified Controls Dock (Always on top z-40) */}
      <div className="absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 z-40 flex items-center justify-between pointer-events-none gap-2 sm:gap-3">
        {/* Left: Brand Badge & City Selector & Telemetry */}
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

      {/* 3. Desktop Collapsible Left Slide Panel (Hidden on Mobile) */}
      <LeftSlidePanel
        isOpen={isPanelOpen}
        onToggle={() => setIsPanelOpen(!isPanelOpen)}
      />

      {/* 5. Mobile Gesture Bottom Sheet (Hidden on Desktop) */}
      <MobileBottomSheet />

      {/* 6. Fleet Simulation Controls Dock & Inspector */}
      <SimulationControlsDock />
      <VehicleInspectorCard />
    </div>
  );
}
