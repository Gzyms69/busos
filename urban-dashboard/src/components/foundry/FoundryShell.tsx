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

export default function FoundryShell() {
  const store = useFoundryStore();
  const { setAvailableCities, setHealth } = store;

  const [panelWidth, setPanelWidth] = useState<number>(540);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const dragRef = useRef<{ startX: number; startWidth: number }>({
    startX: 0,
    startWidth: 540,
  });

  // Initialize store from URL and load baseline cities & health
  useEffect(() => {
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

  return (
    <div
      className="bp6-dark"
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        background: "#111418",
        color: "#f6f7f9",
        userSelect: isDragging ? "none" : "auto",
      }}
    >
      {/* 1. Foundry Top Navbar (48px) */}
      <FoundryNavbar />

      {/* 2. Central Split Layout */}
      <div
        style={{
          flex: 1,
          display: "flex",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Left: Map Canvas */}
        <div style={{ flex: 1, height: "100%", position: "relative" }}>
          <MapCanvas />
        </div>

        {/* Resizable Splitter */}
        <div
          onMouseDown={handleMouseDown}
          style={{
            width: 5,
            cursor: "col-resize",
            background: isDragging ? "#2b95d6" : "#242930",
            borderLeft: "1px solid #2f343c",
            borderRight: "1px solid #14171b",
            zIndex: 15,
            transition: isDragging ? "none" : "background 0.15s ease",
          }}
          title="Przeciągnij, aby zmienić szerokość panelu"
        />

        {/* Right: Analytical Workspace Panel */}
        <div
          style={{
            width: panelWidth,
            height: "100%",
            background: "#1c2127",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            zIndex: 10,
          }}
        >
          <AnalyticalWorkspace />
        </div>
      </div>

      {/* 3. Bottom Status Bar (28px) */}
      <StatusBar />

      {/* Global Spotlight Omnibar */}
      <CommandPalette />
    </div>
  );
}
