export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.busos.czerwinskidawid.pl';

export async function fetchCities(): Promise<string[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/v1/cities`, { next: { revalidate: 3600 } });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data.cities) && data.cities.length > 0) {
        return data.cities;
      }
    }
  } catch (e) {
    console.warn('API /api/v1/cities unavailable, using static fallback');
  }

  try {
    const fallback = await fetch('/data/showcase/cities.json');
    if (fallback.ok) {
      const data = await fallback.json();
      return data.cities || ['kielce'];
    }
  } catch (e) {}

  return ['kielce'];
}

export async function fetchHubs(city: string, signal?: AbortSignal): Promise<any> {
  // If flagship city, load instant static cache first for sub-second paint
  if (city === 'kielce') {
    try {
      const local = await fetch('/data/showcase/kielce/hubs.json', { signal });
      if (local.ok) return await local.json();
    } catch (e: any) {
      if (e.name === 'AbortError') return { type: 'FeatureCollection', features: [] };
    }
  }

  try {
    const res = await fetch(`${API_BASE_URL}/api/v1/hubs?city=${city}`, { signal });
    if (res.ok) return await res.json();
  } catch (e: any) {
    if (e.name !== 'AbortError') {
      console.error(`Failed to fetch hubs for ${city} from API:`, e);
    }
  }

  // Fallback to local if available
  try {
    const local = await fetch(`/data/showcase/${city}/hubs.json`, { signal });
    if (local.ok) return await local.json();
  } catch (e: any) {
    if (e.name === 'AbortError') return { type: 'FeatureCollection', features: [] };
  }

  return { type: 'FeatureCollection', features: [] };
}

export async function fetchPopulation(city: string, signal?: AbortSignal): Promise<any> {
  if (city === 'kielce') {
    try {
      const local = await fetch('/data/showcase/kielce/population.json', { signal });
      if (local.ok) return await local.json();
    } catch (e: any) {
      if (e.name === 'AbortError') return { type: 'FeatureCollection', features: [] };
    }
  }

  try {
    const res = await fetch(`${API_BASE_URL}/api/v1/population?city=${city}`, { signal });
    if (res.ok) return await res.json();
  } catch (e: any) {
    if (e.name !== 'AbortError') {
      console.error(`Failed to fetch population for ${city} from API:`, e);
    }
  }

  try {
    const local = await fetch(`/data/showcase/${city}/population.json`, { signal });
    if (local.ok) return await local.json();
  } catch (e: any) {
    if (e.name === 'AbortError') return { type: 'FeatureCollection', features: [] };
  }

  return { type: 'FeatureCollection', features: [] };
}

export async function fetchTransactions(city: string, signal?: AbortSignal): Promise<any> {
  if (city === 'kielce') {
    try {
      const local = await fetch('/data/showcase/kielce/transactions.json', { signal });
      if (local.ok) return await local.json();
    } catch (e: any) {
      if (e.name === 'AbortError') return { type: 'FeatureCollection', features: [] };
    }
  }

  try {
    const res = await fetch(`${API_BASE_URL}/api/v1/transactions?city=${city}`, { signal });
    if (res.ok) return await res.json();
  } catch (e: any) {
    if (e.name !== 'AbortError') {
      console.error(`Failed to fetch transactions for ${city} from API:`, e);
    }
  }

  try {
    const local = await fetch(`/data/showcase/${city}/transactions.json`, { signal });
    if (local.ok) return await local.json();
  } catch (e: any) {
    if (e.name === 'AbortError') return { type: 'FeatureCollection', features: [] };
  }

  return { type: 'FeatureCollection', features: [] };
}

export async function fetchHubDetails(city: string, hubId: string | number, lat: number, lon: number, signal?: AbortSignal): Promise<any> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/v1/hubs/${hubId}/details?city=${city}&lat=${lat}&lon=${lon}`, { signal });
    if (res.ok) return await res.json();
  } catch (e: any) {
    if (e.name !== 'AbortError') {
      console.warn('Backend details fetch failed, trying static sample fallback:', e);
    }
  }

  if (city === 'kielce') {
    try {
      const local = await fetch('/data/showcase/kielce/details_sample.json', { signal });
      if (local.ok) {
        const samples = await local.json();
        if (samples[String(hubId)]) {
          return samples[String(hubId)];
        }
      }
    } catch (e: any) {
      if (e.name === 'AbortError') return { pois: [], pop: [], metrics: null };
    }
  }

  return { pois: [], pop: [], metrics: null };
}

export async function fetchHexagons(city: string, minPop: number = 0, signal?: AbortSignal): Promise<{ city: string; resolution: number; count: number; hexagons: any[] }> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/v1/hexagons?city=${city}&min_pop=${minPop}`, { signal });
    if (res.ok) return await res.json();
  } catch (e: any) {
    if (e.name !== 'AbortError') {
      console.warn(`Failed to fetch hexagons for ${city} from API:`, e);
    }
  }

  // Fallback to local if available
  try {
    const local = await fetch(`/data/showcase/${city}/hexagons.json`, { signal });
    if (local.ok) return await local.json();
  } catch (e: any) {
    if (e.name === 'AbortError') return { city, resolution: 8, count: 0, hexagons: [] };
  }

  return { city, resolution: 8, count: 0, hexagons: [] };
}


export async function searchRoutes(city: string, query?: string, limit: number = 50, signal?: AbortSignal): Promise<any[]> {
  try {
    const qParam = query ? `&query=${encodeURIComponent(query)}` : '';
    const res = await fetch(`${API_BASE_URL}/api/v1/routes/search?city=${city}${qParam}&limit=${limit}`, { signal });
    if (res.ok) return await res.json();
  } catch (e: any) {
    if (e.name !== 'AbortError') {
      console.warn(`Failed to search routes for ${city}:`, e);
    }
  }

  // Fallback to local showcase
  try {
    const local = await fetch(`/data/showcase/${city}/routes.json`, { signal });
    if (local.ok) {
      const routes = await local.json();
      if (query) {
        const q = query.trim().toLowerCase();
        return routes.filter((r: any) => 
          String(r.short_name).toLowerCase().includes(q) || 
          String(r.headsign).toLowerCase().includes(q)
        ).slice(0, limit);
      }
      return routes.slice(0, limit);
    }
  } catch (e: any) {
    if (e.name === 'AbortError') return [];
  }

  return [];
}

export async function fetchRouteDetails(city: string, routeUid: string, directionId?: number, signal?: AbortSignal): Promise<any | null> {
  try {
    const dirParam = directionId !== undefined && directionId !== null ? `&direction_id=${directionId}` : '';
    const res = await fetch(`${API_BASE_URL}/api/v1/routes/${encodeURIComponent(routeUid)}/details?city=${city}${dirParam}`, { signal });
    if (res.ok) return await res.json();
  } catch (e: any) {
    if (e.name !== 'AbortError') {
      console.warn(`Failed to fetch route details for ${routeUid}:`, e);
    }
  }

  // Fallback to local sample details
  try {
    const local = await fetch(`/data/showcase/${city}/route_details_sample.json`, { signal });
    if (local.ok) {
      const samples = await local.json();
      if (samples[routeUid]) {
        return samples[routeUid];
      }
    }
  } catch (e: any) {
    if (e.name === 'AbortError') return null;
  }

  return null;
}

export async function checkBackendHealth(): Promise<{ online: boolean; latencyMs: number; info?: any }> {
  const start = performance.now();
  try {
    const res = await fetch(`${API_BASE_URL}/health`, { signal: AbortSignal.timeout(3000) });
    if (res.ok) {
      const info = await res.json();
      return { online: true, latencyMs: Math.round(performance.now() - start), info };
    }
  } catch (e) {}
  return { online: false, latencyMs: 0 };
}

