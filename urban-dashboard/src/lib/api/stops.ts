import { apiFetch } from "./client";
import type {
  GeoJsonFeatureCollection,
  StopRankingResponse,
  StopRankingItem,
  StopBatchResponse,
  StopProfileResponse,
} from "./types";

export interface StopRankingParams {
  city: string;
  order_by?: string;
  order_dir?: "asc" | "desc";
  limit?: number;
  offset?: number;
  rank?: number;
  grade?: string;
  is_hub_anchor?: boolean;
  min_departures?: number;
  min_pop?: number;
  h3_index?: string;
  query?: string;
}

export async function fetchStopsGeoJson(
  city: string,
  signal?: AbortSignal
): Promise<GeoJsonFeatureCollection> {
  try {
    return await apiFetch<GeoJsonFeatureCollection>(
      `/api/v1/stops?city=${encodeURIComponent(city)}`,
      { signal }
    );
  } catch (e: any) {
    if (e?.name === "AbortError") throw e;
    const local = await fetch(`/data/showcase/${city}/stops.json`, { signal }).catch(() => null);
    if (local && local.ok) return await local.json();
    return { type: "FeatureCollection", features: [] };
  }
}

export async function fetchStopsRanking(
  params: StopRankingParams,
  signal?: AbortSignal
): Promise<StopRankingResponse> {
  const q = new URLSearchParams({ city: params.city });
  if (params.order_by) q.set("order_by", params.order_by);
  if (params.order_dir) q.set("order_dir", params.order_dir);
  if (params.limit != null) q.set("limit", String(params.limit));
  if (params.offset != null) q.set("offset", String(params.offset));
  if (params.rank != null) q.set("rank", String(params.rank));
  if (params.grade) q.set("grade", params.grade);
  if (params.is_hub_anchor != null) q.set("is_hub_anchor", String(params.is_hub_anchor));
  if (params.min_departures != null) q.set("min_departures", String(params.min_departures));
  if (params.min_pop != null) q.set("min_pop", String(params.min_pop));
  if (params.h3_index) q.set("h3_index", params.h3_index);
  if (params.query) q.set("query", params.query);

  return apiFetch<StopRankingResponse>(`/api/v1/stops/ranking?${q.toString()}`, { signal });
}

export async function searchStops(
  city: string,
  query: string,
  limit: number = 20,
  signal?: AbortSignal
): Promise<StopRankingItem[]> {
  const q = new URLSearchParams({ city, query, limit: String(limit) });
  try {
    const res = await apiFetch<StopRankingResponse>(`/api/v1/stops/search?${q.toString()}`, { signal });
    return res.items || [];
  } catch (e: any) {
    if (e?.name === "AbortError") throw e;
    try {
      const res = await apiFetch<StopRankingResponse>(`/api/v1/stops/ranking?${q.toString()}`, { signal });
      return res.items || [];
    } catch {
      return [];
    }
  }
}

export async function fetchStopsBatch(
  city: string,
  stopIds: string[],
  signal?: AbortSignal
): Promise<StopBatchResponse> {
  return apiFetch<StopBatchResponse>("/api/v1/stops/batch", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ city, stop_ids: stopIds }),
    signal,
  });
}

export async function fetchStopProfile(
  city: string,
  stopId: string,
  signal?: AbortSignal
): Promise<StopProfileResponse> {
  return apiFetch<StopProfileResponse>(
    `/api/v1/stops/${encodeURIComponent(stopId)}?city=${encodeURIComponent(city)}`,
    { signal }
  );
}
