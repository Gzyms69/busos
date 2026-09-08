import type { StateCreator } from "zustand";
import type { HealthResponse } from "../api/types";

export interface CitySlice {
  selectedCity: string;
  availableCities: string[];
  health: HealthResponse | null;
  lastLatencyMs: number | null;
  setCity: (city: string) => void;
  setAvailableCities: (cities: string[]) => void;
  setHealth: (health: HealthResponse, latencyMs?: number) => void;
}

export const createCitySlice: StateCreator<CitySlice, [], [], CitySlice> = (set) => ({
  selectedCity: "kielce",
  availableCities: ["kielce"],
  health: null,
  lastLatencyMs: null,

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
    }),
});
