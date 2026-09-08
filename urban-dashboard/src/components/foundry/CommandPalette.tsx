"use client";

import React, { useEffect, useState, useMemo } from "react";
import { Dialog, DialogBody, InputGroup, Menu, MenuItem, Tag, Classes } from "@blueprintjs/core";
import { useFoundryStore, type FoundryModuleId } from "@/lib/store";

interface CommandItem {
  id: string;
  category: "Aglomeracja" | "Moduł" | "Narzędzie Mapy";
  title: string;
  subtitle?: string;
  icon?: any;
  action: () => void;
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const {
    availableCities,
    setCity,
    setActiveModule,
    mapStyle,
    setMapStyle,
    show3DBuildings,
    toggleLayer,
    resetView,
  } = useFoundryStore();

  // Listen for Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
        setQuery("");
        setSelectedIndex(0);
      }
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Build command list
  const commands: CommandItem[] = useMemo(() => {
    const list: CommandItem[] = [];

    // Modules
    const modules: Array<{ id: FoundryModuleId; name: string; desc: string }> = [
      { id: "command-center", name: "1. Command Center", desc: "Karta audytowa miasta i metryki DNA" },
      { id: "network", name: "2. Network Explorer", desc: "Słupki fizyczne micro & węzły macro" },
      { id: "optimization", name: "3. Optimization", desc: "The Axe List TCRP 100 & Pustynie TDI" },
      { id: "routes", name: "4. Route Analyzer", desc: "Katalog linii GTFS, stepper i prędkości" },
      { id: "market", name: "5. Market Intel", desc: "Wycena transakcji RCN i trendy 2020-2026" },
      { id: "benchmark", name: "6. Benchmarking", desc: "Ogólnopolski leaderboard 30 miast" },
    ];

    modules.forEach((m) => {
      list.push({
        id: `mod-${m.id}`,
        category: "Moduł",
        title: m.name,
        subtitle: m.desc,
        action: () => {
          setActiveModule(m.id);
          setIsOpen(false);
        },
      });
    });

    // Map tools
    list.push({
      id: "map-style",
      category: "Narzędzie Mapy",
      title: mapStyle === "dark" ? "Włącz widok satelitarny" : "Włącz ciemny podkład wektorowy",
      subtitle: "Przełącz styl kafelków podkładowych",
      action: () => {
        setMapStyle(mapStyle === "dark" ? "satellite" : "dark");
        setIsOpen(false);
      },
    });

    list.push({
      id: "map-3d",
      category: "Narzędzie Mapy",
      title: show3DBuildings ? "Ukryj budynki 3D" : "Pokaż budynki 3D i pochyl kamerę",
      subtitle: "Przełącz trójwymiarową perspektywę kafelków",
      action: () => {
        toggleLayer("show3DBuildings");
        setIsOpen(false);
      },
    });

    list.push({
      id: "map-reset",
      category: "Narzędzie Mapy",
      title: "Zresetuj widok kamery",
      subtitle: "Płaski widok z góry (pitch 0, bearing 0)",
      action: () => {
        resetView();
        setIsOpen(false);
      },
    });

    // Cities
    availableCities.forEach((city) => {
      list.push({
        id: `city-${city}`,
        category: "Aglomeracja",
        title: city.toUpperCase(),
        subtitle: `Przełącz analizę na miasto ${city}`,
        action: () => {
          setCity(city);
          setIsOpen(false);
        },
      });
    });

    return list;
  }, [availableCities, setActiveModule, mapStyle, setMapStyle, show3DBuildings, toggleLayer, resetView, setCity]);

  // Filter commands
  const filteredCommands = useMemo(() => {
    if (!query.trim()) return commands.slice(0, 12);
    const q = query.toLowerCase();
    return commands
      .filter((c) => c.title.toLowerCase().includes(q) || c.subtitle?.toLowerCase().includes(q) || c.category.toLowerCase().includes(q))
      .slice(0, 12);
  }, [commands, query]);

  // Handle keyboard navigation in list
  const handleInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1 < filteredCommands.length ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 >= 0 ? prev - 1 : filteredCommands.length - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredCommands[selectedIndex]) {
        filteredCommands[selectedIndex].action();
      }
    }
  };

  return (
    <Dialog
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      className="bp6-dark"
      style={{
        width: 580,
        maxWidth: "92vw",
        top: "15vh",
        background: "#181c20",
        border: "1px solid #383e47",
        borderRadius: 8,
        boxShadow: "0 16px 40px rgba(0, 0, 0, 0.6)",
        overflow: "hidden",
      }}
      canOutsideClickClose
    >
      <div style={{ padding: "12px 16px 8px 16px", borderBottom: "1px solid #2f343c" }}>
        <InputGroup
          leftIcon="search"
          placeholder="Wyszukaj miasto, moduł lub akcję... (Esc aby zamknąć)"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setSelectedIndex(0);
          }}
          onKeyDown={handleInputKeyDown}
          autoFocus
          large
          fill
          rightElement={<Tag minimal>Ctrl+K</Tag>}
          style={{ background: "transparent", border: "none", color: "#f6f7f9" }}
        />
      </div>
      <DialogBody style={{ maxHeight: 380, overflowY: "auto", padding: "8px" }}>
        {filteredCommands.length === 0 ? (
          <div style={{ padding: "24px 16px", textAlign: "center", color: "#8f99a8" }}>
            Brak wyników dla zapytania &ldquo;{query}&rdquo;
          </div>
        ) : (
          <Menu style={{ background: "transparent" }}>
            {filteredCommands.map((cmd, idx) => (
              <MenuItem
                key={cmd.id}
                text={
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span style={{ fontWeight: 600, color: idx === selectedIndex ? "#2b95d6" : "#f6f7f9" }}>
                        {cmd.title}
                      </span>
                      {cmd.subtitle && (
                        <span style={{ fontSize: 11, color: "#8f99a8" }}>{cmd.subtitle}</span>
                      )}
                    </div>
                    <Tag minimal style={{ fontSize: 10, opacity: 0.8 }}>
                      {cmd.category}
                    </Tag>
                  </div>
                }
                active={idx === selectedIndex}
                onClick={cmd.action}
                style={{
                  borderRadius: 4,
                  padding: "8px 12px",
                  marginBottom: 2,
                  background: idx === selectedIndex ? "rgba(43, 149, 214, 0.15)" : "transparent",
                }}
              />
            ))}
          </Menu>
        )}
      </DialogBody>
    </Dialog>
  );
}
