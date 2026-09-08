import type { StateCreator } from "zustand";

export type FoundryModuleId =
  | "command-center"
  | "network"
  | "optimization"
  | "routes"
  | "market"
  | "benchmark";

export interface ModuleSlice {
  activeModule: FoundryModuleId;
  activeSubtab: string;
  setActiveModule: (module: FoundryModuleId) => void;
  setActiveSubtab: (subtab: string) => void;
}

const DEFAULT_SUBTABS: Record<FoundryModuleId, string> = {
  "command-center": "scorecard",
  network: "stops",
  optimization: "axe",
  routes: "catalog",
  market: "kpi",
  benchmark: "leaderboard",
};

export const createModuleSlice: StateCreator<ModuleSlice, [], [], ModuleSlice> = (set) => ({
  activeModule: "command-center",
  activeSubtab: "scorecard",

  setActiveModule: (module: FoundryModuleId) =>
    set({
      activeModule: module,
      activeSubtab: DEFAULT_SUBTABS[module] || "default",
    }),

  setActiveSubtab: (subtab: string) =>
    set({
      activeSubtab: subtab,
    }),
});
