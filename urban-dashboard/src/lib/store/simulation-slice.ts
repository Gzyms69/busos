import type { StateCreator } from "zustand";
import {
  fetchSimulationDataset,
  type SimulationDataset,
  type ActiveVehicle,
  type SimulationMode,
} from "@/lib/api/simulation";
import {
  getCurrentSecondsFromMidnight,
  computeActiveVehicles,
} from "@/components/simulation/simulation-engine";

export interface SimulationSlice {
  isSimulationActive: boolean;
  simulationMode: SimulationMode; // "gps" | "math"
  isLiveMode: boolean;
  isPlaying: boolean;
  simSpeed: number; // 1, 10, 60, 360, 3600
  simTimeSeconds: number; // 0 - 86399
  simulationDataset: SimulationDataset | null;
  isLoadingSimulation: boolean;
  simulationError: string | null;
  activeVehicles: ActiveVehicle[];
  selectedVehicle: ActiveVehicle | null;
  isFollowingVehicle: boolean;
  lineFilter: string | null;

  toggleSimulation: () => void;
  setSimulationActive: (active: boolean) => void;
  setSimulationMode: (mode: SimulationMode) => Promise<void>;
  setLiveMode: (live: boolean) => void;
  setPlaying: (playing: boolean) => void;
  setSimSpeed: (speed: number) => void;
  setSimTimeSeconds: (sec: number) => void;
  advanceSimTime: (deltaSec: number) => void;
  selectVehicle: (vehicle: ActiveVehicle | null) => void;
  setFollowingVehicle: (following: boolean) => void;
  setLineFilter: (filter: string | null) => void;
  loadSimulationData: (city?: string, mode?: SimulationMode) => Promise<void>;
  resetSimulation: () => void;
  updateActiveVehicles: (vehicles: ActiveVehicle[]) => void;
}

export const createSimulationSlice: StateCreator<
  SimulationSlice,
  [],
  [],
  SimulationSlice
> = (set, get) => ({
  isSimulationActive: false,
  simulationMode: "gps",
  isLiveMode: true,
  isPlaying: true,
  simSpeed: 1,
  simTimeSeconds: getCurrentSecondsFromMidnight(),
  simulationDataset: null,
  isLoadingSimulation: false,
  simulationError: null,
  activeVehicles: [],
  selectedVehicle: null,
  isFollowingVehicle: false,
  lineFilter: null,

  toggleSimulation: () => {
    const nextActive = !get().isSimulationActive;
    const state = get() as any;
    const currentCity = state.selectedCity || "kielce";

    if (nextActive && (!get().simulationDataset || get().simulationDataset?.city !== currentCity)) {
      get().loadSimulationData(currentCity, get().simulationMode);
    }

    set({
      isSimulationActive: nextActive,
      simTimeSeconds: get().isLiveMode
        ? getCurrentSecondsFromMidnight()
        : get().simTimeSeconds,
    });
  },

  setSimulationActive: (active) => {
    const state = get() as any;
    const currentCity = state.selectedCity || "kielce";

    if (active && (!get().simulationDataset || get().simulationDataset?.city !== currentCity)) {
      get().loadSimulationData(currentCity, get().simulationMode);
    }
    set({ isSimulationActive: active });
  },

  setSimulationMode: async (mode) => {
    set({ simulationMode: mode });
    const state = get() as any;
    const city = state.selectedCity || "kielce";
    if (get().isSimulationActive || get().simulationDataset) {
      await get().loadSimulationData(city, mode);
    }
  },

  setLiveMode: (live) => {
    set({
      isLiveMode: live,
      simSpeed: live ? 1 : get().simSpeed,
      isPlaying: live ? true : get().isPlaying,
      simTimeSeconds: live
        ? getCurrentSecondsFromMidnight()
        : get().simTimeSeconds,
    });
  },

  setPlaying: (playing) => set({ isPlaying: playing }),

  setSimSpeed: (speed) => {
    set({
      simSpeed: speed,
      isLiveMode: speed === 1 ? get().isLiveMode : false,
    });
  },

  setSimTimeSeconds: (sec) => {
    const safeSec = ((sec % 86400) + 86400) % 86400;
    const dataset = get().simulationDataset;
    const vehicles = dataset
      ? computeActiveVehicles(dataset.trips, safeSec, get().lineFilter)
      : [];
    set({
      simTimeSeconds: safeSec,
      activeVehicles: vehicles,
      isLiveMode: false,
    });
  },

  advanceSimTime: (deltaSec) => {
    const current = get().simTimeSeconds;
    const nextSec = (current + deltaSec) % 86400;
    const dataset = get().simulationDataset;
    const vehicles = dataset
      ? computeActiveVehicles(dataset.trips, nextSec, get().lineFilter)
      : [];
    set({
      simTimeSeconds: nextSec,
      activeVehicles: vehicles,
    });
  },

  selectVehicle: (vehicle) => {
    set({
      selectedVehicle: vehicle,
      isFollowingVehicle: Boolean(vehicle),
    });
  },

  setFollowingVehicle: (following) => set({ isFollowingVehicle: following }),

  setLineFilter: (filter) => {
    const dataset = get().simulationDataset;
    const vehicles = dataset
      ? computeActiveVehicles(dataset.trips, get().simTimeSeconds, filter)
      : [];
    set({
      lineFilter: filter,
      activeVehicles: vehicles,
    });
  },

  loadSimulationData: async (cityArg, modeArg) => {
    const state = get() as any;
    const targetCity = (cityArg || state.selectedCity || "kielce").toLowerCase().trim();
    const targetMode = modeArg || get().simulationMode;

    // Reset current dataset and active vehicles immediately to prevent cross-city leakage
    set({
      isLoadingSimulation: true,
      simulationError: null,
      simulationDataset: null,
      activeVehicles: [],
      selectedVehicle: null,
      isFollowingVehicle: false,
    });

    try {
      const data = await fetchSimulationDataset(targetCity, targetMode);
      const currentSec = get().simTimeSeconds;
      const vehicles = computeActiveVehicles(data.trips, currentSec, get().lineFilter);
      set({
        simulationDataset: data,
        activeVehicles: vehicles,
        isLoadingSimulation: false,
      });
    } catch (err: any) {
      set({
        isLoadingSimulation: false,
        simulationError: err?.message || "Błąd pobierania danych symulacji",
        simulationDataset: null,
        activeVehicles: [],
      });
    }
  },

  resetSimulation: () => {
    set({
      simulationDataset: null,
      activeVehicles: [],
      selectedVehicle: null,
      isFollowingVehicle: false,
      simulationError: null,
    });
  },

  updateActiveVehicles: (vehicles) => set({ activeVehicles: vehicles }),
});
