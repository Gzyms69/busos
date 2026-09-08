"use client";

import React from "react";
import { Icon } from "@blueprintjs/core";
import { useFoundryStore } from "@/lib/store";
import type { FoundryModuleId } from "@/lib/store/module-slice";

interface NavItem {
  id: FoundryModuleId;
  label: string;
  icon: any;
}

const NAV_ITEMS: NavItem[] = [
  { id: "command-center", label: "Center", icon: "dashboard" },
  { id: "network", label: "Network", icon: "git-merge" },
  { id: "optimization", label: "Policy", icon: "shield" },
  { id: "routes", label: "Routes", icon: "path" },
  { id: "market", label: "Market", icon: "home" },
  { id: "benchmark", label: "Benchmark", icon: "comparison" },
];

export default function MobileSegmentedNav() {
  const { activeModule, setActiveModule } = useFoundryStore();

  return (
    <nav
      aria-label="Nawigacja mobilna BusOS"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        background: "#181c20",
        borderTop: "1px solid #2f343c",
        height: 54,
        padding: "0 4px",
        zIndex: 40,
      }}
    >
      {NAV_ITEMS.map((item) => {
        const isActive = activeModule === item.id;
        return (
          <button
            key={item.id}
            onClick={() => setActiveModule(item.id)}
            aria-label={item.label}
            aria-pressed={isActive}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minWidth: 48,
              minHeight: 44, // WCAG 2.1/2.2 AA touch target
              padding: "4px 6px",
              background: "transparent",
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
              color: isActive ? "#2b95d6" : "#8f99a8",
              outline: "none",
              transition: "color 0.15s ease",
            }}
          >
            <Icon icon={item.icon} size={16} />
            <span
              style={{
                fontSize: 9,
                fontWeight: isActive ? 700 : 500,
                marginTop: 2,
                letterSpacing: 0.2,
              }}
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
