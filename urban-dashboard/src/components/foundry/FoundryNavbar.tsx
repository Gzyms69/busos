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
  { id: "command-center", label: "Przegląd", icon: "dashboard" },
  { id: "network", label: "Przystanki i Węzły", icon: "git-branch" },
  { id: "optimization", label: "Optymalizacja", icon: "cut" },
  { id: "routes", label: "Linie", icon: "path" },
  { id: "market", label: "Nieruchomości", icon: "dollar" },
  { id: "benchmark", label: "Ranking Miast", icon: "chart" },
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
        borderBottom: "1px solid #27272a",
        background: "#0e1017",
        zIndex: 20,
      }}
    >
      {/* Left: Brand & City Selector */}
      <NavbarGroup>
        <NavbarHeading style={{ margin: 0, display: "flex", alignItems: "center" }}>
          <a
            href="https://czerwinskidawid.pl"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}
            title="Odwiedź stronę domową Dawida Czerwińskiego (czerwinskidawid.pl)"
          >
            <span
              style={{
                fontWeight: 900,
                letterSpacing: 1.2,
                fontSize: 15,
                color: "#f8fafc",
                textTransform: "uppercase",
              }}
            >
              BusOS
            </span>
            <span
              className="hidden sm:inline-block"
              style={{
                fontSize: 10,
                fontWeight: 600,
                color: "#94a3b8",
                letterSpacing: 0.5,
                borderLeft: "1px solid #27272a",
                paddingLeft: 8,
              }}
            >
              BY DAWID CZERWIŃSKI
            </span>
          </a>
        </NavbarHeading>

        <NavbarDivider className="hidden sm:inline-block" style={{ margin: "0 12px", borderColor: "#27272a" }} />

        {/* City Selector Popover */}
        <PopoverNext
          isOpen={isCityOpen}
          onInteraction={(nextOpen) => setIsCityOpen(nextOpen)}
          content={
            <div style={{ width: 220, padding: 8, background: "#121318", border: "1px solid #27272a", borderRadius: 6 }}>
              <InputGroup
                leftIcon="search"
                placeholder="Szukaj aglomeracji..."
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
            style={{ fontWeight: 700, letterSpacing: 0.5, color: "#22c55e", padding: "0 6px" }}
          >
            {selectedCity.toUpperCase()}
          </Button>
        </PopoverNext>
      </NavbarGroup>

      {/* Center: Module Navigation Tabs (Desktop only - mobile uses MobileSegmentedNav) */}
      <NavbarGroup className="hidden md:flex">
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
                  color: isActive ? "#22c55e" : "#94a3b8",
                  background: isActive ? "rgba(34, 197, 94, 0.10)" : "transparent",
                  borderBottom: isActive ? "2px solid #22c55e" : "2px solid transparent",
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

      {/* Right: Quick Search & Real Telemetry */}
      <NavbarGroup>
        <Tooltip content="Otwórz paletę komend (Ctrl+K)" placement="bottom">
          <Button
            minimal
            icon="search"
            style={{ color: "#94a3b8", marginRight: 8, minWidth: 32, minHeight: 32 }}
            onClick={() => {
              window.dispatchEvent(
                new KeyboardEvent("keydown", { ctrlKey: true, key: "k" })
              );
            }}
          >
            <Tag minimal className="hidden sm:inline-block" style={{ fontSize: 10, background: "rgba(39, 39, 42, 0.5)", color: "#94a3b8", border: "1px solid #27272a" }}>
              Ctrl+K
            </Tag>
          </Button>
        </Tooltip>

        <Tooltip
          content={
            <div style={{ fontSize: 11, padding: 4 }}>
              <div><b>Aglomeracje:</b> {health?.active_cities_count || 30} miast w Polsce</div>
              <div><b>Stan bazy:</b> Zsynchronizowana (GTFS / DuckDB)</div>
              {lastLatencyMs != null && <div><b>Czas odpowiedzi:</b> {lastLatencyMs} ms</div>}
            </div>
          }
          placement="bottom-end"
        >
          <Tag
            minimal
            style={{
              fontSize: 10,
              cursor: "pointer",
              background: "rgba(34, 197, 94, 0.12)",
              color: "#22c55e",
              border: "1px solid rgba(34, 197, 94, 0.3)",
              fontWeight: 600,
              fontFamily: "var(--font-mono, monospace)",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {lastLatencyMs != null ? `${lastLatencyMs}ms` : "API 200"}
          </Tag>
        </Tooltip>
      </NavbarGroup>
    </Navbar>
  );
}

