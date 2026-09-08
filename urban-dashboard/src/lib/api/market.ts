import { apiFetch } from "./client";
import type {
  MarketSummaryResponse,
  MarketTrendsResponse,
  MarketStopsSummaryResponse,
  MarketTransactionItem,
  MarketTransactionsRankingResponse,
  MarketTransactionsNearbyResponse,
  MarketH3AnalysisResponse,
  GeoJsonFeatureCollection,
} from "./types";

export interface MarketTrendsParams {
  city: string;
  stop_id?: string | null;
  interval?: "year" | "quarter";
  market_type?: "pierwotny" | "wtorny";
}

export interface MarketTransactionsRankingParams {
  city: string;
  order_by?: string;
  order_dir?: "asc" | "desc";
  limit?: number;
  offset?: number;
  rank?: number;
  market_type?: string;
  property_function?: string;
  min_price_m2?: number;
  max_price_m2?: number;
  date_from?: string;
  date_to?: string;
}

export interface MarketTransactionsNearbyParams {
  city: string;
  lat: number;
  lon: number;
  radius_m?: number;
  limit?: number;
}

export async function fetchMarketSummary(
  city: string,
  signal?: AbortSignal
): Promise<MarketSummaryResponse> {
  return apiFetch<MarketSummaryResponse>(
    `/api/v1/market/summary?city=${encodeURIComponent(city)}`,
    { signal }
  );
}

export async function fetchMarketTrends(
  params: MarketTrendsParams,
  signal?: AbortSignal
): Promise<MarketTrendsResponse> {
  const q = new URLSearchParams({ city: params.city });
  if (params.stop_id) q.set("stop_id", params.stop_id);
  if (params.interval) q.set("interval", params.interval);
  if (params.market_type) q.set("market_type", params.market_type);

  return apiFetch<MarketTrendsResponse>(`/api/v1/market/trends?${q.toString()}`, { signal });
}

export async function fetchMarketStopsSummary(
  city: string,
  filters?: { date_from?: string; date_to?: string; market_type?: string },
  signal?: AbortSignal
): Promise<MarketStopsSummaryResponse> {
  const q = new URLSearchParams({ city });
  if (filters?.date_from) q.set("date_from", filters.date_from);
  if (filters?.date_to) q.set("date_to", filters.date_to);
  if (filters?.market_type) q.set("market_type", filters.market_type);

  return apiFetch<MarketStopsSummaryResponse>(
    `/api/v1/market/stops-summary?${q.toString()}`,
    { signal }
  );
}

export async function fetchStopTransactions(
  city: string,
  stopId: string,
  filters?: { date_from?: string; date_to?: string },
  signal?: AbortSignal
): Promise<MarketTransactionItem[]> {
  const q = new URLSearchParams({ city });
  if (filters?.date_from) q.set("date_from", filters.date_from);
  if (filters?.date_to) q.set("date_to", filters.date_to);

  return apiFetch<MarketTransactionItem[]>(
    `/api/v1/market/stop/${encodeURIComponent(stopId)}/transactions?${q.toString()}`,
    { signal }
  );
}

export async function fetchMarketTransactionsRanking(
  params: MarketTransactionsRankingParams,
  signal?: AbortSignal
): Promise<MarketTransactionsRankingResponse> {
  const q = new URLSearchParams({ city: params.city });
  if (params.order_by) q.set("order_by", params.order_by);
  if (params.order_dir) q.set("order_dir", params.order_dir);
  if (params.limit != null) q.set("limit", String(params.limit));
  if (params.offset != null) q.set("offset", String(params.offset));
  if (params.rank != null) q.set("rank", String(params.rank));
  if (params.market_type) q.set("market_type", params.market_type);
  if (params.property_function) q.set("property_function", params.property_function);
  if (params.min_price_m2 != null) q.set("min_price_m2", String(params.min_price_m2));
  if (params.max_price_m2 != null) q.set("max_price_m2", String(params.max_price_m2));
  if (params.date_from) q.set("date_from", params.date_from);
  if (params.date_to) q.set("date_to", params.date_to);

  return apiFetch<MarketTransactionsRankingResponse>(
    `/api/v1/market/transactions/ranking?${q.toString()}`,
    { signal }
  );
}

export async function fetchMarketTransactionsNearby(
  params: MarketTransactionsNearbyParams,
  signal?: AbortSignal
): Promise<MarketTransactionsNearbyResponse> {
  const q = new URLSearchParams({
    city: params.city,
    lat: String(params.lat),
    lon: String(params.lon),
  });
  if (params.radius_m != null) q.set("radius_m", String(params.radius_m));
  if (params.limit != null) q.set("limit", String(params.limit));

  return apiFetch<MarketTransactionsNearbyResponse>(
    `/api/v1/market/transactions/nearby?${q.toString()}`,
    { signal }
  );
}

export async function fetchMarketH3Analysis(
  city: string,
  signal?: AbortSignal
): Promise<MarketH3AnalysisResponse> {
  return apiFetch<MarketH3AnalysisResponse>(
    `/api/v1/market/h3-analysis?city=${encodeURIComponent(city)}`,
    { signal }
  );
}

export async function fetchTransactionsGeoJson(
  city: string,
  signal?: AbortSignal
): Promise<GeoJsonFeatureCollection> {
  if (city === "kielce") {
    try {
      const local = await fetch("/data/showcase/kielce/transactions.json", { signal });
      if (local.ok) return await local.json();
    } catch (e: any) {
      if (e?.name === "AbortError") throw e;
    }
  }

  try {
    return await apiFetch<GeoJsonFeatureCollection>(
      `/api/v1/transactions?city=${encodeURIComponent(city)}`,
      { signal }
    );
  } catch (e: any) {
    if (e?.name === "AbortError") throw e;
    const local = await fetch(`/data/showcase/${city}/transactions.json`, { signal }).catch(() => null);
    if (local && local.ok) return await local.json();
    return { type: "FeatureCollection", features: [] };
  }
}

export const fetchTransactions = fetchTransactionsGeoJson;
