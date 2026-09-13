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

// In-memory cache for loaded simulation datasets by city
const simulationCache = new Map<string, SimulationDataset>();

export async function fetchSimulationDataset(
  city: string,
  signal?: AbortSignal
): Promise<SimulationDataset> {
  const normalizedCity = city.toLowerCase().trim();
  if (simulationCache.has(normalizedCity)) {
    return simulationCache.get(normalizedCity)!;
  }

  // Load from static Next.js public assets (fastest & lowest bandwidth)
  const url = `/data/${normalizedCity}_simulation.json`;
  const res = await fetch(url, { signal });
  if (!res.ok) {
    throw new Error(
      `Nie udało się pobrać danych symulacji dla miasta ${city} (${res.status} ${res.statusText})`
    );
  }

  const data = (await res.json()) as SimulationDataset;
  simulationCache.set(normalizedCity, data);
  return data;
}
