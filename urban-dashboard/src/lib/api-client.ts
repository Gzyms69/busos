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

export async function fetchHubs(city: string): Promise<any> {
  // If flagship city, load instant static cache first for sub-second paint
  if (city === 'kielce') {
    try {
      const local = await fetch('/data/showcase/kielce/hubs.json');
      if (local.ok) return await local.json();
    } catch (e) {}
  }

  try {
    const res = await fetch(`${API_BASE_URL}/api/v1/hubs?city=${city}`);
    if (res.ok) return await res.json();
  } catch (e) {
    console.error(`Failed to fetch hubs for ${city} from API:`, e);
  }

  // Fallback to local if available
  try {
    const local = await fetch(`/data/showcase/${city}/hubs.json`);
    if (local.ok) return await local.json();
  } catch (e) {}

  return { type: 'FeatureCollection', features: [] };
}

export async function fetchPopulation(city: string): Promise<any> {
  if (city === 'kielce') {
    try {
      const local = await fetch('/data/showcase/kielce/population.json');
      if (local.ok) return await local.json();
    } catch (e) {}
  }

  try {
    const res = await fetch(`${API_BASE_URL}/api/v1/population?city=${city}`);
    if (res.ok) return await res.json();
  } catch (e) {
    console.error(`Failed to fetch population for ${city} from API:`, e);
  }

  try {
    const local = await fetch(`/data/showcase/${city}/population.json`);
    if (local.ok) return await local.json();
  } catch (e) {}

  return { type: 'FeatureCollection', features: [] };
}

export async function fetchTransactions(city: string): Promise<any> {
  if (city === 'kielce') {
    try {
      const local = await fetch('/data/showcase/kielce/transactions.json');
      if (local.ok) return await local.json();
    } catch (e) {}
  }

  try {
    const res = await fetch(`${API_BASE_URL}/api/v1/transactions?city=${city}`);
    if (res.ok) return await res.json();
  } catch (e) {
    console.error(`Failed to fetch transactions for ${city} from API:`, e);
  }

  try {
    const local = await fetch(`/data/showcase/${city}/transactions.json`);
    if (local.ok) return await local.json();
  } catch (e) {}

  return { type: 'FeatureCollection', features: [] };
}

export async function fetchHubDetails(city: string, hubId: string | number, lat: number, lon: number): Promise<any> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/v1/hubs/${hubId}/details?city=${city}&lat=${lat}&lon=${lon}`);
    if (res.ok) return await res.json();
  } catch (e) {
    console.warn('Backend details fetch failed, trying static sample fallback:', e);
  }

  if (city === 'kielce') {
    try {
      const local = await fetch('/data/showcase/kielce/details_sample.json');
      if (local.ok) {
        const samples = await local.json();
        if (samples[String(hubId)]) {
          return samples[String(hubId)];
        }
      }
    } catch (e) {}
  }

  return { pois: [], pop: [], metrics: null };
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
