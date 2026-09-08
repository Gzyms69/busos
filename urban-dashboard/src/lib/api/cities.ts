import { apiFetch } from "./client";
import type {
  HealthResponse,
  CitiesResponse,
  GeoJsonFeatureCollection,
  CityBoundaryProperties,
  PopProperties,
} from "./types";

export async function fetchHealth(signal?: AbortSignal): Promise<HealthResponse> {
  return apiFetch<HealthResponse>("/health", { signal });
}

export async function fetchCities(signal?: AbortSignal): Promise<string[]> {
  try {
    const data = await apiFetch<CitiesResponse>("/api/v1/cities", {
      signal,
      next: { revalidate: 3600 },
    } as any);
    if (Array.isArray(data.cities) && data.cities.length > 0) {
      return data.cities;
    }
  } catch (err: any) {
    if (err?.name === "AbortError") throw err;
    console.warn("API /api/v1/cities unavailable, using fallback:", err);
  }

  // Fallback to static showcase list
  try {
    const res = await fetch("/data/showcase/cities.json", { signal });
    if (res.ok) {
      const data = await res.json();
      return data.cities || ["kielce"];
    }
  } catch {}

  return ["kielce", "warszawa", "wroclaw", "krakow", "poznan", "lodz", "gdansk", "szczecin", "bydgoszcz", "lublin"];
}

export async function fetchCityBoundary(
  city: string,
  signal?: AbortSignal
): Promise<GeoJsonFeatureCollection<any, CityBoundaryProperties>> {
  return apiFetch<GeoJsonFeatureCollection<any, CityBoundaryProperties>>(
    `/api/v1/cities/${encodeURIComponent(city)}/boundary`,
    { signal }
  );
}

export async function fetchPopulation(
  city: string,
  signal?: AbortSignal
): Promise<GeoJsonFeatureCollection<any, PopProperties>> {
  // Flagship city instant cache
  if (city === "kielce") {
    try {
      const local = await fetch("/data/showcase/kielce/population.json", { signal });
      if (local.ok) return await local.json();
    } catch (e: any) {
      if (e?.name === "AbortError") throw e;
    }
  }

  try {
    return await apiFetch<GeoJsonFeatureCollection<any, PopProperties>>(
      `/api/v1/population?city=${encodeURIComponent(city)}`,
      { signal }
    );
  } catch (e: any) {
    if (e?.name === "AbortError") throw e;
    // Fallback to local
    const local = await fetch(`/data/showcase/${city}/population.json`, { signal }).catch(() => null);
    if (local && local.ok) return await local.json();
    return { type: "FeatureCollection", features: [] };
  }
}
