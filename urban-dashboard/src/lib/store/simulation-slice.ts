import type { StateCreator } from "zustand";
import {
  fetchSimulationDataset,
  type SimulationDataset,
  type ActiveVehicle,
} from "@/lib/api/simulation";
import {
  getCurrentSecondsFromMidnight,
  computeActiveVehicles,
} from "@/components/simulation/simulation-engine";

export interface SimulationSlice {
  isSimulationActive: boolean;
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
  setLiveMode: (live: boolean) => void;
  setPlaying: (playing: boolean) => void;
  setSimSpeed: (speed: number) => void;
  setSimTimeSeconds: (sec: number) => void;
  advanceSimTime: (deltaSec: number) => void;
  selectVehicle: (vehicle: ActiveVehicle | null) => void;
  setFollowingVehicle: (following: boolean) => void;
  setLineFilter: (filter: string | null) => void;
  loadSimulationData: (city: string) => Promise<void>;
  updateActiveVehicles: (vehicles: ActiveVehicle[]) => void;
}

export const createSimulationSlice: StateCreator<
  SimulationSlice,
  [],
  [],
  SimulationSlice
> = (set, get) => ({
  isSimulationActive: false,
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
    if (nextActive && !get().simulationDataset) {
      // Auto-load for current city if not already loaded
      const state = get() as any;
      const city = state.selectedCity || "kielce";
      get().loadSimulationData(city);
    }
    set({
      isSimulationActive: nextActive,
      // If turning on and live mode is on, sync to current clock
      simTimeSeconds: get().isLiveMode
        ? getCurrentSecondsFromMidnight()
        : get().simTimeSeconds,
    });
  },

  setSimulationActive: (active) => {
    if (active && !get().simulationDataset) {
      const state = get() as any;
      const city = state.selectedCity || "kielce";
      get().loadSimulationData(city);
    }
    set({ isSimulationActive: active });
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
      // If speed changed away from 1x, deactivate strict live clock lock
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
      // Manual scrubbing disables live clock lock
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

  loadSimulationData: async (city) => {
    set({ isLoadingSimulation: true, simulationError: null });
    try {
      const data = await fetchSimulationDataset(city);
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
      });
    }
  },

  updateActiveVehicles: (vehicles) => set({ activeVehicles: vehicles }),
});
