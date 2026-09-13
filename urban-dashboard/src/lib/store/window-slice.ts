import type { StateCreator } from "zustand";

export type WindowId = "primary-panel" | "simulation-dock" | "vehicle-inspector" | "map-tools";
export type WindowMode = "floating" | "docked-left" | "docked-right";

export interface WindowConfig {
  id: WindowId;
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  mode: WindowMode;
  position: { x: number; y: number };
  size: { width: number; height: number };
  minSize: { width: number; height: number };
  maxSize: { width: number; height: number };
  zIndex: number;
}

export interface WindowSlice {
  windows: Record<WindowId, WindowConfig>;
  activeWindowId: WindowId | null;
  highestZIndex: number;
  isCleanMapMode: boolean;

  openWindow: (id: WindowId) => void;
  closeWindow: (id: WindowId) => void;
  toggleWindow: (id: WindowId) => void;
  minimizeWindow: (id: WindowId, minimized?: boolean) => void;
  maximizeWindow: (id: WindowId) => void;
  setWindowPosition: (id: WindowId, pos: { x: number; y: number }) => void;
  setWindowSize: (id: WindowId, size: { width: number; height: number }) => void;
  setWindowMode: (id: WindowId, mode: WindowMode) => void;
  bringToFront: (id: WindowId) => void;
  toggleCleanMapMode: () => void;
  resetLayout: () => void;
}

const STORAGE_KEY = "busos_workspace_layout_v2";

export const DEFAULT_WINDOWS: Record<WindowId, WindowConfig> = {
  "primary-panel": {
    id: "primary-panel",
    title: "Panel Analityczny",
    isOpen: true,
    isMinimized: false,
    isMaximized: false,
    mode: "docked-left",
    position: { x: 12, y: 76 },
    size: { width: 440, height: 760 },
    minSize: { width: 360, height: 380 },
    maxSize: { width: 1200, height: 1400 },
    zIndex: 30,
  },
  "simulation-dock": {
    id: "simulation-dock",
    title: "Symulacja Floty",
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    mode: "floating",
    position: { x: 260, y: 560 },
    size: { width: 680, height: 260 },
    minSize: { width: 380, height: 180 },
    maxSize: { width: 1000, height: 500 },
    zIndex: 35,
  },
  "vehicle-inspector": {
    id: "vehicle-inspector",
    title: "Inspektor Pojazdu",
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    mode: "floating",
    position: { x: 880, y: 80 },
    size: { width: 340, height: 420 },
    minSize: { width: 280, height: 320 },
    maxSize: { width: 500, height: 600 },
    zIndex: 40,
  },
  "map-tools": {
    id: "map-tools",
    title: "Warstwy i Style",
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    mode: "floating",
    position: { x: 840, y: 76 },
    size: { width: 320, height: 440 },
    minSize: { width: 260, height: 300 },
    maxSize: { width: 460, height: 620 },
    zIndex: 32,
  },
};

function loadSavedWindows(): Record<WindowId, WindowConfig> {
  if (typeof window === "undefined") return DEFAULT_WINDOWS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_WINDOWS;
    const parsed = JSON.parse(raw);
    return {
      ...DEFAULT_WINDOWS,
      ...parsed,
    };
  } catch {
    return DEFAULT_WINDOWS;
  }
}

function persistWindows(windows: Record<WindowId, WindowConfig>) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(windows));
  } catch (e) {
    console.warn("Nie udało się zapisać układu okien w localStorage:", e);
  }
}

export const createWindowSlice: StateCreator<WindowSlice, [], [], WindowSlice> = (set, get) => ({
  windows: loadSavedWindows(),
  activeWindowId: "primary-panel",
  highestZIndex: 40,
  isCleanMapMode: false,

  openWindow: (id) => {
    const { windows, highestZIndex } = get();
    const nextZ = highestZIndex + 1;
    const nextWindows = {
      ...windows,
      [id]: {
        ...windows[id],
        isOpen: true,
        isMinimized: false,
        zIndex: nextZ,
      },
    };
    persistWindows(nextWindows);
    set({
      windows: nextWindows,
      activeWindowId: id,
      highestZIndex: nextZ,
      isCleanMapMode: false,
    });
  },

  closeWindow: (id) => {
    const { windows } = get();
    const nextWindows = {
      ...windows,
      [id]: {
        ...windows[id],
        isOpen: false,
      },
    };
    persistWindows(nextWindows);
    set({
      windows: nextWindows,
      activeWindowId: get().activeWindowId === id ? null : get().activeWindowId,
    });
  },

  toggleWindow: (id) => {
    const { windows } = get();
    if (windows[id]?.isOpen && !windows[id]?.isMinimized) {
      get().closeWindow(id);
    } else {
      get().openWindow(id);
    }
  },

  minimizeWindow: (id, minimized) => {
    const { windows } = get();
    const nextMinimized = minimized !== undefined ? minimized : !windows[id]?.isMinimized;
    const nextWindows = {
      ...windows,
      [id]: {
        ...windows[id],
        isMinimized: nextMinimized,
      },
    };
    persistWindows(nextWindows);
    set({ windows: nextWindows });
  },

  maximizeWindow: (id) => {
    const { windows } = get();
    const current = windows[id];
    if (!current) return;
    const nextWindows = {
      ...windows,
      [id]: {
        ...current,
        isMaximized: !current.isMaximized,
      },
    };
    persistWindows(nextWindows);
    set({ windows: nextWindows });
  },

  setWindowPosition: (id, pos) => {
    const { windows } = get();
    const current = windows[id];
    if (!current) return;
    const nextWindows = {
      ...windows,
      [id]: {
        ...current,
        position: pos,
      },
    };
    persistWindows(nextWindows);
    set({ windows: nextWindows });
  },

  setWindowSize: (id, size) => {
    const { windows } = get();
    const current = windows[id];
    if (!current) return;
    const clampedWidth = Math.max(current.minSize.width, Math.min(current.maxSize.width, size.width));
    const clampedHeight = Math.max(current.minSize.height, Math.min(current.maxSize.height, size.height));
    const nextWindows = {
      ...windows,
      [id]: {
        ...current,
        size: { width: clampedWidth, height: clampedHeight },
      },
    };
    persistWindows(nextWindows);
    set({ windows: nextWindows });
  },

  setWindowMode: (id, mode) => {
    const { windows } = get();
    const current = windows[id];
    if (!current) return;
    const nextWindows = {
      ...windows,
      [id]: {
        ...current,
        mode,
      },
    };
    persistWindows(nextWindows);
    set({ windows: nextWindows });
  },

  bringToFront: (id) => {
    const { windows, highestZIndex } = get();
    if (windows[id]?.zIndex === highestZIndex) {
      set({ activeWindowId: id });
      return;
    }
    const nextZ = highestZIndex + 1;
    const nextWindows = {
      ...windows,
      [id]: {
        ...windows[id],
        zIndex: nextZ,
      },
    };
    set({
      windows: nextWindows,
      activeWindowId: id,
      highestZIndex: nextZ,
    });
  },

  toggleCleanMapMode: () => {
    set((state) => ({ isCleanMapMode: !state.isCleanMapMode }));
  },

  resetLayout: () => {
    if (typeof window !== "undefined") {
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch {}
    }
    set({
      windows: DEFAULT_WINDOWS,
      activeWindowId: "primary-panel",
      highestZIndex: 40,
      isCleanMapMode: false,
    });
  },
});
