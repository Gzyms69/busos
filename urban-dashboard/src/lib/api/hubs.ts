import { apiFetch } from "./client";
import type {
  GeoJsonFeatureCollection,
  HubRankingResponse,
  HubCardResponse,
  HubDetailsResponse,
} from "./types";

export interface HubRankingParams {
  city: string;
  order_by?: string;
  order_dir?: "asc" | "desc";
  limit?: number;
  offset?: number;
  rank?: number;
  grade?: string;
  min_stops?: number;
}

export async function fetchHubsGeoJson(
  city: string,
  signal?: AbortSignal
): Promise<GeoJsonFeatureCollection> {
  if (city === "kielce") {
    try {
      const local = await fetch("/data/showcase/kielce/hubs.json", { signal });
      if (local.ok) return await local.json();
    } catch (e: any) {
      if (e?.name === "AbortError") throw e;
    }
  }

  try {
    return await apiFetch<GeoJsonFeatureCollection>(
      `/api/v1/hubs?city=${encodeURIComponent(city)}`,
      { signal }
    );
  } catch (e: any) {
    if (e?.name === "AbortError") throw e;
    const local = await fetch(`/data/showcase/${city}/hubs.json`, { signal }).catch(() => null);
    if (local && local.ok) return await local.json();
    return { type: "FeatureCollection", features: [] };
  }
}

export const fetchHubs = fetchHubsGeoJson;

export async function fetchHubsRanking(
  params: HubRankingParams,
  signal?: AbortSignal
): Promise<HubRankingResponse> {
  const q = new URLSearchParams({ city: params.city });
  if (params.order_by) q.set("order_by", params.order_by);
  if (params.order_dir) q.set("order_dir", params.order_dir);
  if (params.limit != null) q.set("limit", String(params.limit));
  if (params.offset != null) q.set("offset", String(params.offset));
  if (params.rank != null) q.set("rank", String(params.rank));
  if (params.grade) q.set("grade", params.grade);
  if (params.min_stops != null) q.set("min_stops", String(params.min_stops));

  return apiFetch<HubRankingResponse>(`/api/v1/hubs/ranking?${q.toString()}`, { signal });
}

export async function fetchHubCard(
  city: string,
  hubId: string | number,
  signal?: AbortSignal
): Promise<HubCardResponse> {
  return apiFetch<HubCardResponse>(
    `/api/v1/hubs/${encodeURIComponent(String(hubId))}?city=${encodeURIComponent(city)}`,
    { signal }
  );
}

export async function fetchHubDetails(
  city: string,
  hubId: string | number,
  lat?: number,
  lon?: number,
  signal?: AbortSignal
): Promise<HubDetailsResponse> {
  const q = new URLSearchParams({ city });
  if (lat != null) q.set("lat", String(lat));
  if (lon != null) q.set("lon", String(lon));

  return apiFetch<HubDetailsResponse>(
    `/api/v1/hubs/${encodeURIComponent(String(hubId))}/details?${q.toString()}`,
    { signal }
  );
}
