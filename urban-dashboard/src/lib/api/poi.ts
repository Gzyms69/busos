import { apiFetch } from "./client";
import type {
  PoiSearchResponse,
  PoiMagnetsResponse,
  PoiCategoriesResponse,
} from "./types";

export interface PoiSearchParams {
  city: string;
  query: string;
  category?: string;
  tier?: string;
  min_w?: number;
  limit?: number;
  offset?: number;
}

export interface PoiMagnetsParams {
  city: string;
  limit?: number;
  tier?: string;
  category?: string;
  min_w?: number;
}

export async function searchPoi(
  params: PoiSearchParams,
  signal?: AbortSignal
): Promise<PoiSearchResponse> {
  const q = new URLSearchParams({
    city: params.city,
    query: params.query,
  });
  if (params.category) q.set("category", params.category);
  if (params.tier) q.set("tier", params.tier);
  if (params.min_w != null) q.set("min_w", String(params.min_w));
  if (params.limit != null) q.set("limit", String(params.limit));
  if (params.offset != null) q.set("offset", String(params.offset));

  return apiFetch<PoiSearchResponse>(`/api/v1/poi/search?${q.toString()}`, { signal });
}

export async function fetchPoiMagnets(
  params: PoiMagnetsParams,
  signal?: AbortSignal
): Promise<PoiMagnetsResponse> {
  const q = new URLSearchParams({ city: params.city });
  if (params.limit != null) q.set("limit", String(params.limit));
  if (params.tier) q.set("tier", params.tier);
  if (params.category) q.set("category", params.category);
  if (params.min_w != null) q.set("min_w", String(params.min_w));

  return apiFetch<PoiMagnetsResponse>(`/api/v1/poi/magnets?${q.toString()}`, { signal });
}

export async function fetchPoiCategories(
  city: string,
  limit: number = 20,
  signal?: AbortSignal
): Promise<PoiCategoriesResponse> {
  return apiFetch<PoiCategoriesResponse>(
    `/api/v1/poi/categories?city=${encodeURIComponent(city)}&limit=${limit}`,
    { signal }
  );
}
