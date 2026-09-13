import type { SimulationTrip, ActiveVehicle } from "@/lib/api/simulation";

/**
 * Returns the current time of day in seconds from midnight (0 - 86399).
 */
export function getCurrentSecondsFromMidnight(): number {
  const now = new Date();
  return now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
}

/**
 * Formats seconds from midnight into HH:MM:SS string.
 */
export function formatSecondsToHms(sec: number): string {
  const safeSec = Math.max(0, Math.floor(sec)) % 86400;
  const h = Math.floor(safeSec / 3600);
  const m = Math.floor((safeSec % 3600) / 60);
  const s = safeSec % 60;
  return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s
    .toString()
    .padStart(2, "0")}`;
}

/**
 * Calculates initial compass bearing (heading 0 - 360 degrees) between two coordinates.
 */
export function calculateBearing(
  lon1: number,
  lat1: number,
  lon2: number,
  lat2: number
): number {
  const toRad = Math.PI / 180;
  const toDeg = 180 / Math.PI;

  const phi1 = lat1 * toRad;
  const phi2 = lat2 * toRad;
  const deltaLambda = (lon2 - lon1) * toRad;

  const y = Math.sin(deltaLambda) * Math.cos(phi2);
  const x =
    Math.cos(phi1) * Math.sin(phi2) -
    Math.sin(phi1) * Math.cos(phi2) * Math.cos(deltaLambda);

  const theta = Math.atan2(y, x);
  return (theta * toDeg + 360) % 360;
}

/**
 * Great-circle distance between two points in meters (Haversine formula).
 */
export function calculateDistanceMeters(
  lon1: number,
  lat1: number,
  lon2: number,
  lat2: number
): number {
  const R = 6371000; // meters
  const toRad = Math.PI / 180;
  const phi1 = lat1 * toRad;
  const phi2 = lat2 * toRad;
  const deltaPhi = (lat2 - lat1) * toRad;
  const deltaLambda = (lon2 - lon1) * toRad;

  const a =
    Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) +
    Math.cos(phi1) * Math.cos(phi2) * Math.sin(deltaLambda / 2) * Math.sin(deltaLambda / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
}

/**
 * High-throughput vehicle position interpolation engine.
 * Computes all active vehicle positions at a given second of the day T in < 2ms.
 */
export function computeActiveVehicles(
  trips: SimulationTrip[],
  currentSec: number,
  lineFilter?: string | null
): ActiveVehicle[] {
  const vehicles: ActiveVehicle[] = [];
  const normalizedFilter = lineFilter?.trim().toUpperCase();

  for (let tIdx = 0; tIdx < trips.length; tIdx++) {
    const trip = trips[tIdx];

    // Quick range rejection
    if (currentSec < trip.start_sec || currentSec > trip.end_sec) {
      continue;
    }

    // Filter by route short name if active
    if (normalizedFilter && trip.route_short_name.toUpperCase() !== normalizedFilter) {
      continue;
    }

    const wps = trip.waypoints;
    const count = wps.length;
    if (count < 2) continue;

    // Binary search to find adjacent waypoint segment [wps[low], wps[high]]
    let low = 0;
    let high = count - 1;

    while (low <= high) {
      const mid = (low + high) >> 1;
      if (wps[mid][0] <= currentSec) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    const idx1 = Math.max(0, Math.min(count - 2, high));
    const idx2 = idx1 + 1;

    const p1 = wps[idx1];
    const p2 = wps[idx2];

    const t1 = p1[0];
    const t2 = p2[0];
    const dt = Math.max(1, t2 - t1);
    const alpha = Math.max(0, Math.min(1, (currentSec - t1) / dt));

    const lon1 = p1[1];
    const lat1 = p1[2];
    const stopName1 = p1[3];

    const lon2 = p2[1];
    const lat2 = p2[2];
    const stopName2 = p2[3];

    // Linear interpolation
    const curLon = lon1 + alpha * (lon2 - lon1);
    const curLat = lat1 + alpha * (lat2 - lat1);

    // Bearing towards next stop
    const bearing = calculateBearing(lon1, lat1, lon2, lat2);

    // Segment distance and speed (km/h)
    const distMeters = calculateDistanceMeters(lon1, lat1, lon2, lat2);
    const speedKmh = Math.round((distMeters / dt) * 3.6);

    // Trip progress (0.0 to 1.0)
    const totalDuration = Math.max(1, trip.end_sec - trip.start_sec);
    const progress = Math.max(0, Math.min(1, (currentSec - trip.start_sec) / totalDuration));

    vehicles.push({
      id: trip.trip_id,
      tripId: trip.trip_id,
      routeId: trip.route_id,
      routeShortName: trip.route_short_name,
      routeColor: trip.route_color,
      headsign: trip.headsign,
      directionId: trip.direction_id,
      lon: curLon,
      lat: curLat,
      bearing,
      progress,
      speedKmh: isNaN(speedKmh) ? 22 : Math.max(5, Math.min(75, speedKmh)),
      currentStopName: stopName1,
      nextStopName: stopName2,
      nextStopEtaSec: Math.max(0, t2 - currentSec),
    });
  }

  return vehicles;
}
