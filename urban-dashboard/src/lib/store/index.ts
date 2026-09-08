import { create } from "zustand";
import { createCitySlice, type CitySlice } from "./city-slice";
import { createModuleSlice, type ModuleSlice } from "./module-slice";
import { createMapSlice, type MapSlice, type MapViewState } from "./map-slice";
import { createSelectionSlice, type SelectionSlice } from "./selection-slice";
import { createGridSlice, type GridSlice } from "./grid-slice";
import { sessionCache } from "./session-cache";

export type FoundryStore = CitySlice &
  ModuleSlice &
  MapSlice &
  SelectionSlice &
  GridSlice;

export const useFoundryStore = create<FoundryStore>()((...a) => ({
  ...createCitySlice(...a),
  ...createModuleSlice(...a),
  ...createMapSlice(...a),
  ...createSelectionSlice(...a),
  ...createGridSlice(...a),
}));

// Backwards compatibility alias for components expecting useStore
export const useStore = useFoundryStore;

// Re-export slice types
export * from "./city-slice";
export * from "./module-slice";
export * from "./map-slice";
export * from "./selection-slice";
export * from "./grid-slice";
export * from "./session-cache";

// URL State Sync Helper
export function syncUrlParams(store: FoundryStore): void {
  if (typeof window === "undefined") return;

  const url = new URL(window.location.href);
  url.searchParams.set("city", store.selectedCity);
  url.searchParams.set("module", store.activeModule);
  if (store.activeSubtab) {
    url.searchParams.set("subtab", store.activeSubtab);
  }
  url.searchParams.set("lat", store.viewState.latitude.toFixed(4));
  url.searchParams.set("lon", store.viewState.longitude.toFixed(4));
  url.searchParams.set("zoom", store.viewState.zoom.toFixed(1));

  window.history.replaceState(null, "", url.toString());
}

export function initializeStoreFromUrl(set: (partial: Partial<FoundryStore>) => void): void {
  if (typeof window === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const city = params.get("city");
  const moduleParam = params.get("module") as any;
  const subtab = params.get("subtab");
  const lat = params.get("lat");
  const lon = params.get("lon");
  const zoom = params.get("zoom");

  const updates: Partial<FoundryStore> = {};
  if (city) updates.selectedCity = city.toLowerCase();
  if (moduleParam) updates.activeModule = moduleParam;
  if (subtab) updates.activeSubtab = subtab;
  if (lat && lon) {
    updates.viewState = {
      latitude: parseFloat(lat),
      longitude: parseFloat(lon),
      zoom: zoom ? parseFloat(zoom) : 12,
      pitch: 45,
      bearing: 0,
    };
  }

  if (Object.keys(updates).length > 0) {
    set(updates);
  }
}
