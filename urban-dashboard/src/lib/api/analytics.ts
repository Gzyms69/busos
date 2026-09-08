import { apiFetch } from "./client";
import type {
  CityAuditSummaryResponse,
  AxeListResponse,
  TransitDesertsResponse,
  NationalRankingResponse,
  MetricDistributionResponse,
  CityComparisonResponse,
} from "./types";

export interface NationalRankingParams {
  scope: "stops" | "hubs" | "hexagons" | "cities";
  order_by?: string;
  order_dir?: "asc" | "desc";
  limit?: number;
  offset?: number;
  rank?: number;
  grade?: string;
  city?: string;
}

export async function fetchAuditSummary(
  city: string,
  include: string = "summary,zscore,grades",
  signal?: AbortSignal
): Promise<CityAuditSummaryResponse> {
  const q = new URLSearchParams({
    city,
    include,
  });

  return apiFetch<CityAuditSummaryResponse>(
    `/api/v1/analytics/audit-summary?${q.toString()}`,
    { signal }
  );
}

export async function fetchAxeList(
  city: string,
  threshold: number = 0.5,
  signal?: AbortSignal
): Promise<AxeListResponse> {
  return apiFetch<AxeListResponse>(
    `/api/v1/analytics/axe-list?city=${encodeURIComponent(city)}&threshold=${threshold}`,
    { signal }
  );
}

export async function fetchTransitDeserts(
  city: string,
  limit: number = 100,
  signal?: AbortSignal
): Promise<TransitDesertsResponse> {
  return apiFetch<TransitDesertsResponse>(
    `/api/v1/analytics/transit-deserts?city=${encodeURIComponent(city)}&limit=${limit}`,
    { signal }
  );
}

export async function fetchNationalRanking(
  params: NationalRankingParams,
  signal?: AbortSignal
): Promise<NationalRankingResponse> {
  const q = new URLSearchParams({ scope: params.scope });
  if (params.order_by) q.set("order_by", params.order_by);
  if (params.order_dir) q.set("order_dir", params.order_dir);
  if (params.limit != null) q.set("limit", String(params.limit));
  if (params.offset != null) q.set("offset", String(params.offset));
  if (params.rank != null) q.set("rank", String(params.rank));
  if (params.grade) q.set("grade", params.grade);
  if (params.city) q.set("city", params.city);

  return apiFetch<NationalRankingResponse>(
    `/api/v1/analytics/national-ranking?${q.toString()}`,
    { signal }
  );
}

export async function fetchMetricDistribution(
  city: string,
  metric: string,
  signal?: AbortSignal
): Promise<MetricDistributionResponse> {
  const q = new URLSearchParams({ city, metric });
  return apiFetch<MetricDistributionResponse>(
    `/api/v1/analytics/metric-distribution?${q.toString()}`,
    { signal }
  );
}

export async function fetchCityComparison(
  cityA: string,
  cityB: string,
  signal?: AbortSignal
): Promise<CityComparisonResponse> {
  const q = new URLSearchParams({
    city_a: cityA,
    city_b: cityB,
  });

  return apiFetch<CityComparisonResponse>(
    `/api/v1/analytics/compare-cities?${q.toString()}`,
    { signal }
  );
}
