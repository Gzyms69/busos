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
  mode: SimulationMode = "gps",
  signal?: AbortSignal
): Promise<SimulationDataset> {
  const normalizedCity = city.toLowerCase().trim();
  const cacheKey = `${normalizedCity}_${mode}`;
  if (simulationCache.has(cacheKey)) {
    return simulationCache.get(cacheKey)!;
  }

  // 1. Try mode-specific dataset first: /data/simulation/{city}_{mode}.json
  let url = `/data/simulation/${normalizedCity}_${mode}.json`;
  let res = await fetch(url, { signal }).catch(() => null);

  // 2. Fallback to legacy single file: /data/{city}_simulation.json
  if (!res || !res.ok) {
    url = `/data/${normalizedCity}_simulation.json`;
    res = await fetch(url, { signal }).catch(() => null);
  }

  if (!res || !res.ok) {
    throw new Error(
      `Nie udało się pobrać danych symulacji dla miasta ${city} w trybie ${mode === "gps" ? "śladów GPS" : "modelu matematycznego"}`
    );
  }

  const data = (await res.json()) as SimulationDataset;
  data.mode = data.mode || mode;
  simulationCache.set(cacheKey, data);
  return data;
}
