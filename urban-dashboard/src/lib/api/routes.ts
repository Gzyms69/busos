import { apiFetch } from "./client";
import type {
  RouteItem,
  RouteDetailsResponse,
  StopDestinationsResponse,
  NetworkEdgeItem,
  GeoJsonFeatureCollection,
} from "./types";

export interface RoutesParams {
  city: string;
  feed_id?: string;
  route_type?: number;
  canonical_only?: boolean;
}

export async function fetchRoutes(
  params: RoutesParams,
  signal?: AbortSignal
): Promise<RouteItem[]> {
  const q = new URLSearchParams({ city: params.city });
  if (params.feed_id) q.set("feed_id", params.feed_id);
  if (params.route_type != null) q.set("route_type", String(params.route_type));
  if (params.canonical_only != null) q.set("canonical_only", String(params.canonical_only));

  return apiFetch<RouteItem[]>(`/api/v1/routes?${q.toString()}`, { signal });
}

export async function searchRoutes(
  city: string,
  query: string,
  limit: number = 20,
  signal?: AbortSignal
): Promise<RouteItem[]> {
  const q = new URLSearchParams({ city, query, limit: String(limit) });
  return apiFetch<RouteItem[]>(`/api/v1/routes/search?${q.toString()}`, { signal });
}

export async function fetchRouteGeometry(
  city: string,
  routeUid: string,
  canonicalOnly: boolean = true,
  signal?: AbortSignal
): Promise<GeoJsonFeatureCollection> {
  const q = new URLSearchParams({
    city,
    route_uid: routeUid,
    canonical_only: String(canonicalOnly),
  });
  return apiFetch<GeoJsonFeatureCollection>(`/api/v1/routes/geometry?${q.toString()}`, { signal });
}

export async function fetchRouteDetails(
  city: string,
  routeUid: string,
  directionId: number = 0,
  signal?: AbortSignal
): Promise<RouteDetailsResponse> {
  return apiFetch<RouteDetailsResponse>(
    `/api/v1/routes/${encodeURIComponent(routeUid)}/details?city=${encodeURIComponent(
      city
    )}&direction_id=${directionId}`,
    { signal }
  );
}

export async function fetchStopRoutes(
  city: string,
  stopId: string,
  signal?: AbortSignal
): Promise<RouteItem[]> {
  return apiFetch<RouteItem[]>(
    `/api/v1/routes/stop/${encodeURIComponent(stopId)}?city=${encodeURIComponent(city)}`,
    { signal }
  );
}

export async function fetchStopDestinations(
  city: string,
  stopId: string,
  signal?: AbortSignal
): Promise<StopDestinationsResponse> {
  return apiFetch<StopDestinationsResponse>(
    `/api/v1/routes/stop/${encodeURIComponent(stopId)}/destinations?city=${encodeURIComponent(city)}`,
    { signal }
  );
}

export async function fetchRouteEdges(
  city: string,
  routeUid?: string,
  signal?: AbortSignal
): Promise<NetworkEdgeItem[]> {
  const q = new URLSearchParams({ city });
  if (routeUid) q.set("route_uid", routeUid);

  return apiFetch<NetworkEdgeItem[]>(`/api/v1/routes/edges?${q.toString()}`, { signal });
}
