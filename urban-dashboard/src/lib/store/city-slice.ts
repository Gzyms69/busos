import type { StateCreator } from "zustand";
import type { HealthResponse } from "../api/types";

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

export const createCitySlice: StateCreator<CitySlice, [], [], CitySlice> = (set) => ({
  selectedCity: "kielce",
  availableCities: ["kielce"],
  health: null,
  lastLatencyMs: null,
  connectionStatus: "reconnecting",
  lastError: null,

  setCity: (city: string) =>
    set({
      selectedCity: city.toLowerCase().trim(),
    }),

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
