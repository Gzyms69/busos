"use client";

import React, { useEffect } from "react";
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
import ResizableMainPanel from "./ResizableMainPanel";
import OmniDock from "./OmniDock";
import MobileBottomSheet from "@/components/mobile/MobileBottomSheet";
import MobileHeaderBar from "@/components/mobile/MobileHeaderBar";
import MobileCameraControls from "@/components/mobile/MobileCameraControls";
import SimulationControlsDock from "@/components/simulation/SimulationControlsDock";
import VehicleInspectorCard from "@/components/simulation/VehicleInspectorCard";

export default function BusosShell() {
  const store = useFoundryStore();
  const {
    setAvailableCities,
    setHealth,
    setConnectionStatus,
    selectedId,
    clearSelection,
    windows,
    openWindow,
    closeWindow,
    toggleWindow,
    toggleCleanMapMode,
    activeWindowId,
    isSimulationActive,
    isPlaying,
    setPlaying,
  } = store;

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

  // Automatically open primary panel if an object is selected
  useEffect(() => {
    if (selectedId) {
      openWindow("primary-panel");
    }
  }, [selectedId, openWindow]);

  // Global Keyboard Shortcuts (Esc, H, Space)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in an input, textarea, or select
      const activeTag = (document.activeElement?.tagName || "").toLowerCase();
      if (activeTag === "input" || activeTag === "textarea" || activeTag === "select") {
        if (e.key === "Escape") {
          (document.activeElement as HTMLElement)?.blur();
        }
        return;
      }

      // 1. Escape: clear selection or close active window
      if (e.key === "Escape") {
        if (selectedId) {
          clearSelection();
        } else if (activeWindowId) {
          closeWindow(activeWindowId);
        }
      }

      // 2. 'h' or 'H': toggle Clean Map mode
      if (e.key === "h" || e.key === "H") {
        e.preventDefault();
        toggleCleanMapMode();
      }

      // 3. Space: play/pause simulation
      if (e.key === " " && isSimulationActive) {
        e.preventDefault();
        setPlaying(!isPlaying);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    selectedId,
    clearSelection,
    activeWindowId,
    closeWindow,
    toggleCleanMapMode,
    isSimulationActive,
    isPlaying,
    setPlaying,
  ]);

  const isPrimaryPanelOpen =
    Boolean(windows["primary-panel"]?.isOpen && !windows["primary-panel"]?.isMinimized);

  return (
    <div className="relative w-full h-dvh min-h-dvh overflow-hidden bg-slate-50 font-sans">
      {/* 1. Fullscreen MapCanvas (100% viewport) */}
      <div className="absolute inset-0 z-0">
        <MapCanvas />
      </div>

      {/* 2a. Mobile-Specific Header Bar (< md) */}
      <MobileHeaderBar />

      {/* 2b. Desktop Unified Controls Dock (hidden on mobile, flex on md+) */}
      <header className="hidden md:flex absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 z-40 items-center justify-between pointer-events-none gap-2 sm:gap-3">
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
            isPanelOpen={isPrimaryPanelOpen}
            onTogglePanel={() => toggleWindow("primary-panel")}
          />
        </div>
      </header>

      {/* 3. Mobile Camera & 3D Tilt Controls */}
      <MobileCameraControls />

      {/* 4. Desktop Resizable & Draggable Primary Workspace Panel */}
      <ResizableMainPanel />

      {/* 5. Desktop Bottom OmniDock Toolbar */}
      <OmniDock />

      {/* 6. Mobile Gesture Bottom Sheet (Hidden on Desktop) */}
      <MobileBottomSheet />

      {/* 6. Fleet Simulation Controls Dock & Inspector */}
      <SimulationControlsDock />
      <VehicleInspectorCard />
    </div>
  );
}
