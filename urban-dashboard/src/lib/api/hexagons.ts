import { apiFetch } from "./client";
import type {
  HexagonCell,
  HexagonsResponse,
  HexagonRankingResponse,
  HexagonProfileResponse,
  GeoJsonFeatureCollection,
} from "./types";

export interface HexagonRankingParams {
  city: string;
  order_by?: string;
  order_dir?: "asc" | "desc";
  limit?: number;
  offset?: number;
  rank?: number;
  is_transit_desert?: boolean;
  has_rcn?: boolean;
  min_pop?: number;
  max_pop?: number;
  min_departures?: number;
  max_departures?: number;
  grade?: string;
}

export async function fetchHexagons(
  city: string,
  minPop: number = 0,
  signal?: AbortSignal
): Promise<HexagonCell[]> {
  try {
    const res = await apiFetch<HexagonsResponse>(
      `/api/v1/hexagons?city=${encodeURIComponent(city)}&min_pop=${minPop}`,
      { signal }
    );
    return res.hexagons || [];
  } catch (e: any) {
    if (e?.name === "AbortError") throw e;
    console.error(`Failed to fetch hexagons for ${city}:`, e);
    return [];
  }
}

export async function fetchHexagonsRanking(
  params: HexagonRankingParams,
  signal?: AbortSignal
): Promise<HexagonRankingResponse> {
  const q = new URLSearchParams({ city: params.city });
  if (params.order_by) q.set("order_by", params.order_by);
  if (params.order_dir) q.set("order_dir", params.order_dir);
  if (params.limit != null) q.set("limit", String(params.limit));
  if (params.offset != null) q.set("offset", String(params.offset));
  if (params.rank != null) q.set("rank", String(params.rank));
  if (params.is_transit_desert != null) q.set("is_transit_desert", String(params.is_transit_desert));
  if (params.has_rcn != null) q.set("has_rcn", String(params.has_rcn));
  if (params.min_pop != null) q.set("min_pop", String(params.min_pop));
  if (params.max_pop != null) q.set("max_pop", String(params.max_pop));
  if (params.min_departures != null) q.set("min_departures", String(params.min_departures));
  if (params.max_departures != null) q.set("max_departures", String(params.max_departures));
  if (params.grade) q.set("grade", params.grade);

  return apiFetch<HexagonRankingResponse>(`/api/v1/hexagons/ranking?${q.toString()}`, { signal });
}

export async function fetchHexagonProfile(
  city: string,
  hexIndex: string,
  signal?: AbortSignal
): Promise<HexagonProfileResponse> {
  return apiFetch<HexagonProfileResponse>(
    `/api/v1/hexagons/${encodeURIComponent(hexIndex)}/profile?city=${encodeURIComponent(city)}`,
    { signal }
  );
}

export async function fetchHexagonCell(
  city: string,
  hexIndex: string,
  signal?: AbortSignal
): Promise<HexagonCell> {
  return apiFetch<HexagonCell>(
    `/api/v1/hexagons/${encodeURIComponent(hexIndex)}?city=${encodeURIComponent(city)}`,
    { signal }
  );
}

export async function fetchHexagonStops(
  city: string,
  hexIndex: string,
  signal?: AbortSignal
): Promise<GeoJsonFeatureCollection> {
  return apiFetch<GeoJsonFeatureCollection>(
    `/api/v1/hexagons/${encodeURIComponent(hexIndex)}/stops?city=${encodeURIComponent(city)}`,
    { signal }
  );
}
