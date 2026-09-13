import { apiFetch } from "./client";

export type SimulationMode = "gps" | "math";

export interface SimulationWaypoint {
  timeSec: number;
  lon: number;
  lat: number;
  stopName: string;
}

export interface SimulationTrip {
  trip_id: string;
  route_id: string;
  route_short_name: string;
  route_color: string;
  headsign: string;
  direction_id: number;
  start_sec: number;
  end_sec: number;
  waypoints: [number, number, number, string][]; // [sec, lon, lat, stop_name]
}

export interface SimulationDataset {
  city: string;
  mode?: SimulationMode;
  geometry_source?: "gtfs_shapes" | "osm_hybrid" | "direct_stop" | string;
  service_id: string;
  total_trips: number;
  min_sec: number;
  max_sec: number;
  trips: SimulationTrip[];
}

export interface ActiveVehicle {
  id: string; // trip_id
  tripId: string;
  routeId: string;
  routeShortName: string;
  routeColor: string;
  headsign: string;
  directionId: number;
  lon: number;
  lat: number;
  bearing: number;
  progress: number;
  speedKmh: number;
  currentStopName: string;
  nextStopName: string;
  nextStopEtaSec: number;
}

// In-memory cache for loaded simulation datasets by city and mode
const simulationCache = new Map<string, SimulationDataset>();

export async function fetchSimulationDataset(
  city: string,
  mode: SimulationMode = "math",
  signal?: AbortSignal
): Promise<SimulationDataset> {
  const normalizedCity = city.toLowerCase().trim();
  const cacheKey = `${normalizedCity}_${mode}`;
  if (simulationCache.has(cacheKey)) {
    return simulationCache.get(cacheKey)!;
  }

  let data: SimulationDataset | null = null;

  // 1. Backend API via apiFetch (FastAPI OCI ARM64 with GZip compression)
  try {
    data = await apiFetch<SimulationDataset>(
      `/api/v1/simulation/${encodeURIComponent(normalizedCity)}?mode=${mode}`,
      { signal, timeoutMs: 60000 }
    );
  } catch (apiErr: any) {
    if (apiErr?.name === "AbortError") throw apiErr;
  }

  // 2. Fallback to local static assets (if offline or standalone deployment)
  if (!data) {
    try {
      const res = await fetch(`/data/simulation/${normalizedCity}_${mode}.json`, { signal });
      if (res.ok) data = (await res.json()) as SimulationDataset;
    } catch (e: any) {
      if (e?.name === "AbortError") throw e;
    }
  }

  // 3. Fallback to legacy single file
  if (!data) {
    try {
      const res = await fetch(`/data/${normalizedCity}_simulation.json`, { signal });
      if (res.ok) data = (await res.json()) as SimulationDataset;
    } catch (e: any) {
      if (e?.name === "AbortError") throw e;
    }
  }

  // 4. Fallback to Math mode if GPS failed
  if (!data && mode === "gps") {
    return fetchSimulationDataset(city, "math", signal);
  }

  if (!data) {
    throw new Error(
      `Nie udało się pobrać danych symulacji dla miasta ${city} w trybie ${mode === "gps" ? "śladów GPS" : "modelu matematycznego"}`
    );
  }

  data.mode = data.mode || mode;
  simulationCache.set(cacheKey, data);
  return data;
}
