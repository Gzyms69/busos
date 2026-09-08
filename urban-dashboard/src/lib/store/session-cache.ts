import type { MapViewState } from "./map-slice";

export interface CitySessionData {
  city: string;
  viewState?: MapViewState;
  boundaryGeoJson?: any;
  auditSummary?: any;
  cachedAt: number;
}

class SessionCacheManager {
  private cache = new Map<string, CitySessionData>();
  private readonly TTL_MS = 30 * 60 * 1000; // 30 minutes

  get(city: string): CitySessionData | null {
    const key = city.toLowerCase().trim();
    const entry = this.cache.get(key);
    if (!entry) return null;
    if (Date.now() - entry.cachedAt > this.TTL_MS) {
      this.cache.delete(key);
      return null;
    }
    return entry;
  }

  set(city: string, data: Partial<CitySessionData>): void {
    const key = city.toLowerCase().trim();
    const existing = this.cache.get(key) || { city: key, cachedAt: Date.now() };
    this.cache.set(key, {
      ...existing,
      ...data,
      cachedAt: Date.now(),
    });
  }

  clear(): void {
    this.cache.clear();
  }
}

export const sessionCache = new SessionCacheManager();
