"use client";

import React, { useEffect, useState, useRef } from "react";
import {
  useFoundryStore,
  initializeStoreFromUrl,
  syncUrlParams,
} from "@/lib/store";
import { fetchCities, fetchHealth } from "@/lib/api";
import FoundryNavbar from "./FoundryNavbar";
import StatusBar from "./StatusBar";
import AnalyticalWorkspace from "./AnalyticalWorkspace";
import MapCanvas from "./MapCanvas";
import CommandPalette from "./CommandPalette";
import ObjectInspector from "./ObjectInspector";
import AdaptiveBottomSheet from "@/components/mobile/AdaptiveBottomSheet";
import MobileSegmentedNav from "@/components/mobile/MobileSegmentedNav";

export default function FoundryShell() {
  const store = useFoundryStore();
  const { setAvailableCities, setHealth } = store;

  const [panelWidth, setPanelWidth] = useState<number>(540);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const dragRef = useRef<{ startX: number; startWidth: number }>({
    startX: 0,
    startWidth: 540,
  });

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

  // Handle Splitter Dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    dragRef.current = {
      startX: e.clientX,
      startWidth: panelWidth,
    };
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = dragRef.current.startX - e.clientX;
      const nextWidth = Math.min(840, Math.max(380, dragRef.current.startWidth + deltaX));
      setPanelWidth(nextWidth);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  // Handle mobile detection (<768px)
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const isFullWidthModule = store.activeModule === "benchmark";

  return (
    <div
      className="bp6-dark h-dvh w-full"
      style={{
        width: "100%",
        height: "100dvh",
        minHeight: "100dvh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        background: "oklch(0.10 0.005 260)",
        color: "#f6f7f9",
        userSelect: isDragging ? "none" : "auto",
      }}
    >
      {/* 1. Foundry Top Navbar (48px) */}
      <FoundryNavbar />

      {/* 2. Main Layout (Unified Tree for MapCanvas WebGL Stability) */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          position: "relative",
          overflow: "hidden",
          minHeight: 0,
        }}
      >
        {isFullWidthModule ? (
          /* Full-Width Bento Mode for Benchmark (Macro Poland Map + Leaderboard) */
          <div style={{ flex: 1, height: "100%", width: "100%", overflow: "hidden" }}>
            <AnalyticalWorkspace />
          </div>
        ) : (
          <>
            {/* Left / Full: Map Canvas with Docked Object Inspector */}
            <div style={{ flex: 1, height: "100%", position: "relative", minHeight: 0 }}>
              <MapCanvas />
              {!isMobile && <ObjectInspector />}
            </div>

            {/* Desktop Splitter & Analytical Workspace */}
            {!isMobile && (
              <>
                <div
                  onMouseDown={handleMouseDown}
                  style={{
                    width: 5,
                    cursor: "col-resize",
                    background: isDragging ? "#2b95d6" : "oklch(0.20 0.010 260)",
                    borderLeft: "1px solid #27272a",
                    borderRight: "1px solid #14171b",
                    zIndex: 15,
                    transition: isDragging ? "none" : "background 0.15s ease",
                  }}
                  title="Przeciągnij, aby zmienić szerokość panelu"
                />
                <div
                  style={{
                    width: panelWidth,
                    height: "100%",
                    background: "oklch(0.14 0.010 260)",
                    borderLeft: "1px solid rgba(255, 255, 255, 0.06)",
                    boxShadow: "inset 1px 0 0 0 rgba(255, 255, 255, 0.04), -8px 0 24px rgba(0, 0, 0, 0.4)",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    zIndex: 10,
                  }}
                >
                  <AnalyticalWorkspace />
                </div>
              </>
            )}
          </>
        )}

        {/* Mobile Gestural Bottom Sheet & Nav (Active in non-benchmark or mobile view) */}
        {isMobile && (
          <>
            <AdaptiveBottomSheet />
            <MobileSegmentedNav />
          </>
        )}
      </div>

      {/* 3. Bottom Status Bar (28px) - Desktop only */}
      {!isMobile && <StatusBar />}

      {/* Global Spotlight Omnibar */}
      <CommandPalette />
    </div>
  );
}
