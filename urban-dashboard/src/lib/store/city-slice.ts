import type { StateCreator } from "zustand";
import type { HealthResponse } from "../api/types";
import { getCityCenter } from "../utils/city-coordinates";

export type ConnectionStatus = "online" | "offline" | "reconnecting";

export interface CitySlice {
  selectedCity: string;
  availableCities: string[];
  health: HealthResponse | null;
  lastLatencyMs: number | null;
  connectionStatus: ConnectionStatus;
  lastError: string | null;
  setCity: (city: string) => void;
  setAvailableCities: (cities: string[]) => void;
  setHealth: (health: HealthResponse, latencyMs?: number) => void;
  setConnectionStatus: (status: ConnectionStatus, error?: string | null) => void;
}

export const createCitySlice: StateCreator<CitySlice, [], [], CitySlice> = (set, get) => ({
  selectedCity: "kielce",
  availableCities: ["kielce"],
  health: null,
  lastLatencyMs: null,
  connectionStatus: "reconnecting",
  lastError: null,

  setCity: (city: string) => {
    const nextCity = city.toLowerCase().trim();
    const prevCity = get().selectedCity;
    if (nextCity === prevCity) return;

    set({
      selectedCity: nextCity,
    });

    const anyStore = get() as any;
    if (anyStore.setViewState) {
      const center = getCityCenter(nextCity);
      anyStore.setViewState({
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: center.zoom,
      });
    }
    if (anyStore.clearSelection) {
      anyStore.clearSelection();
    }
    if (anyStore.isSimulationActive && anyStore.loadSimulationData) {
      anyStore.loadSimulationData(nextCity);
    } else if (anyStore.resetSimulation) {
      anyStore.resetSimulation();
    }
  },

  setAvailableCities: (cities: string[]) =>
    set({
      availableCities: cities,
    }),

  setHealth: (health: HealthResponse, latencyMs?: number) =>
    set({
      health,
      lastLatencyMs: latencyMs ?? null,
      connectionStatus: "online",
      lastError: null,
    }),

  setConnectionStatus: (connectionStatus: ConnectionStatus, error?: string | null) =>
    set({
      connectionStatus,
      lastError: error ?? null,
    }),
});
