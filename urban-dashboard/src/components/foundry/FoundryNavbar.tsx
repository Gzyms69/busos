"use client";

import React, { useState } from "react";
import {
  Navbar,
  NavbarGroup,
  NavbarHeading,
  NavbarDivider,
  Button,
  ButtonGroup,
  PopoverNext,
  Menu,
  MenuItem,
  InputGroup,
  Tag,
  Tooltip,
} from "@blueprintjs/core";
import { useFoundryStore, type FoundryModuleId } from "@/lib/store";

const MODULES: Array<{ id: FoundryModuleId; label: string; icon: any }> = [
  { id: "command-center", label: "Command Center", icon: "dashboard" },
  { id: "network", label: "Network", icon: "git-branch" },
  { id: "optimization", label: "Optimization", icon: "cut" },
  { id: "routes", label: "Routes", icon: "path" },
  { id: "market", label: "Market Intel", icon: "dollar" },
  { id: "benchmark", label: "Benchmarking", icon: "chart" },
];

export default function FoundryNavbar() {
  const {
    selectedCity,
    setCity,
    availableCities,
    activeModule,
    setActiveModule,
    health,
    lastLatencyMs,
  } = useFoundryStore();

  const [cityFilter, setCityFilter] = useState("");
  const [isCityOpen, setIsCityOpen] = useState(false);

  const filteredCities = availableCities.filter((c) =>
    c.toLowerCase().includes(cityFilter.toLowerCase())
  );

  return (
    <Navbar
      className="bp6-dark"
      style={{
        height: 48,
        minHeight: 48,
        padding: "0 16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid #2f343c",
        zIndex: 20,
      }}
    >
      {/* Left: Brand & City Selector */}
      <NavbarGroup>
        <NavbarHeading style={{ margin: 0, display: "flex", alignItems: "center", gap: 8 }}>
          <span
            style={{
              fontWeight: 800,
              letterSpacing: 1.2,
              fontSize: 15,
              color: "#f6f7f9",
              textTransform: "uppercase",
            }}
          >
            BusOS
          </span>
          <Tag minimal intent="primary" style={{ fontSize: 10, fontWeight: 700 }}>
            FOUNDRY
          </Tag>
        </NavbarHeading>

        <NavbarDivider style={{ margin: "0 12px" }} />

        {/* City Selector Popover */}
        <PopoverNext
          isOpen={isCityOpen}
          onInteraction={(nextOpen) => setIsCityOpen(nextOpen)}
          content={
            <div style={{ width: 220, padding: 8, background: "#1c2127" }}>
              <InputGroup
                leftIcon="search"
                placeholder="Szukaj miasta..."
                value={cityFilter}
                onChange={(e) => setCityFilter(e.target.value)}
                small
                fill
                style={{ marginBottom: 6 }}
              />
              <Menu style={{ maxHeight: 260, overflowY: "auto", background: "transparent" }}>
                {filteredCities.map((c) => (
                  <MenuItem
                    key={c}
                    text={c.toUpperCase()}
                    active={c === selectedCity}
                    onClick={() => {
                      setCity(c);
                      setIsCityOpen(false);
                      setCityFilter("");
                    }}
                  />
                ))}
              </Menu>
            </div>
          }
          placement="bottom-start"
        >
          <Button
            minimal
            icon="globe"
            rightIcon="caret-down"
            style={{ fontWeight: 700, letterSpacing: 0.5, color: "#2b95d6" }}
          >
            {selectedCity.toUpperCase()}
          </Button>
        </PopoverNext>
      </NavbarGroup>

      {/* Center: Module Navigation Tabs */}
      <NavbarGroup>
        <ButtonGroup minimal>
          {MODULES.map((m) => {
            const isActive = activeModule === m.id;
            return (
              <Button
                key={m.id}
                icon={m.icon}
                intent={isActive ? "primary" : "none"}
                active={isActive}
                onClick={() => setActiveModule(m.id)}
                style={{
                  fontWeight: isActive ? 700 : 500,
                  fontSize: 12,
                  color: isActive ? "#2b95d6" : "#8f99a8",
                  background: isActive ? "rgba(43, 149, 214, 0.12)" : "transparent",
                  borderBottom: isActive ? "2px solid #2b95d6" : "2px solid transparent",
                  borderRadius: 0,
                  height: 48,
                  padding: "0 12px",
                }}
              >
                {m.label}
              </Button>
            );
          })}
        </ButtonGroup>
      </NavbarGroup>

      {/* Right: Quick Search & Health Telemetry */}
      <NavbarGroup>
        <Tooltip content="Otwórz paletę komend (Ctrl+K)" placement="bottom">
          <Button
            minimal
            icon="search"
            style={{ color: "#8f99a8", marginRight: 8 }}
            onClick={() => {
              window.dispatchEvent(
                new KeyboardEvent("keydown", { ctrlKey: true, key: "k" })
              );
            }}
          >
            <Tag minimal style={{ fontSize: 10, opacity: 0.7 }}>
              Ctrl+K
            </Tag>
          </Button>
        </Tooltip>

        <Tooltip
          content={
            <div style={{ fontSize: 11 }}>
              <div><b>Backend:</b> {health?.status || "online"} (v{health?.version || "9.5.0"})</div>
              <div><b>Silnik:</b> {health?.engine || "DuckDB / C-GEOS"}</div>
              <div><b>Qdrant:</b> {health?.qdrant_connected ? "Połączony" : "Offline"}</div>
              <div><b>Aktywne miasta:</b> {health?.active_cities_count || 30}</div>
              {lastLatencyMs != null && <div><b>Latencja:</b> {lastLatencyMs} ms</div>}
            </div>
          }
          placement="bottom-end"
        >
          <Tag
            round
            intent={health?.status === "healthy" || !health ? "success" : "warning"}
            minimal
            style={{ fontSize: 11, cursor: "pointer" }}
          >
            ● OCI ARM64
          </Tag>
        </Tooltip>
      </NavbarGroup>
    </Navbar>
  );
}
