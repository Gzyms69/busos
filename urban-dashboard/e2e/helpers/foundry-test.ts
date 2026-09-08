import { test as base, expect, type Page } from "@playwright/test";

// ==========================================
// 1. MOCK DATA FIXTURES (45 API Routes)
// ==========================================

export const MOCK_CITIES = [
  "kielce", "warszawa", "krakow", "wroclaw", "poznan",
  "lodz", "gdansk", "szczecin", "bydgoszcz", "lublin",
  "bialystok", "katowice", "gdynia", "czestochowa", "radom",
  "torun", "sosnowiec", "rzeszow", "gliwice", "zabrze",
  "olsztyn", "bielsko-biala", "bytom", "zielona-gora", "rybnik",
  "ruda-slaska", "opole", "tychy", "gorzow-wielkopolski", "suwalki"
];

export const MOCK_HEALTH = {
  status: "healthy",
  version: "9.5.0",
  engine: "DuckDB / C-GEOS",
  active_cities_count: 30,
  qdrant_connected: true,
};

export const MOCK_BOUNDARY = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [20.55, 50.82],
            [20.70, 50.82],
            [20.70, 50.92],
            [20.55, 50.92],
            [20.55, 50.82],
          ],
        ],
      },
      properties: { city: "kielce", area_km2: 109.65 },
    },
  ],
};

export const MOCK_STOPS = [
  {
    rank: 1,
    stop_id: "2001",
    stop_name: "Żytnia I",
    lat: 50.871,
    lon: 20.628,
    hub_id: 10,
    hub_name: "Węzeł Żytnia / Grunwaldzka",
    is_hub_anchor: 1,
    stop_departures_h: 68.5,
    stop_routes_count: 14,
    stop_routes: "1, 2, 8, 12, 18, 25, 34, 46",
    stop_grade: "A+",
    stop_percentile: 99.8,
    stop_local_score_raw: 2.85,
    stop_infra_score: 92.4,
    stop_raw_gravity: 450.2,
    stop_entropy: 2.34,
    stop_pop_val: 3850,
    stop_market_val: 8950,
    stop_liquidity: 42,
    stop_hub_share: 0.62,
    nat_percentile: 98.4,
    nat_grade: "A+",
  },
  {
    rank: 2,
    stop_id: "2002",
    stop_name: "Żytnia II",
    lat: 50.8715,
    lon: 20.629,
    hub_id: 10,
    hub_name: "Węzeł Żytnia / Grunwaldzka",
    is_hub_anchor: 0,
    stop_departures_h: 42.0,
    stop_routes_count: 9,
    stop_routes: "4, 15, 21, 35, 102",
    stop_grade: "A",
    stop_percentile: 94.2,
    stop_local_score_raw: 1.95,
    stop_infra_score: 86.1,
    stop_raw_gravity: 380.0,
    stop_entropy: 2.15,
    stop_pop_val: 3400,
    stop_market_val: 8800,
    stop_liquidity: 38,
    stop_hub_share: 0.38,
    nat_percentile: 92.1,
    nat_grade: "A",
  },
  {
    rank: 3,
    stop_id: "2003",
    stop_name: "Dworzec Kolejowy",
    lat: 50.875,
    lon: 20.621,
    hub_id: 11,
    hub_name: "Dworzec PKP / Bus",
    is_hub_anchor: 1,
    stop_departures_h: 55.0,
    stop_routes_count: 12,
    stop_routes: "0W, 0Z, 5, 13, 28, 33, 44",
    stop_grade: "A+",
    stop_percentile: 98.9,
    stop_local_score_raw: 2.45,
    stop_infra_score: 95.0,
    stop_raw_gravity: 520.1,
    stop_entropy: 2.55,
    stop_pop_val: 2900,
    stop_market_val: 9100,
    stop_liquidity: 50,
    stop_hub_share: 0.75,
    nat_percentile: 97.2,
    nat_grade: "A+",
  },
  {
    rank: 4,
    stop_id: "2004",
    stop_name: "Warszawska / Galeria Korona",
    lat: 50.873,
    lon: 20.635,
    hub_id: 12,
    hub_name: "Galeria Korona",
    is_hub_anchor: 1,
    stop_departures_h: 38.0,
    stop_routes_count: 8,
    stop_routes: "13, 30, 35, 46",
    stop_grade: "B",
    stop_percentile: 82.5,
    stop_local_score_raw: 1.15,
    stop_infra_score: 84.0,
    stop_raw_gravity: 340.0,
    stop_entropy: 1.98,
    stop_pop_val: 4200,
    stop_market_val: 9400,
    stop_liquidity: 30,
    stop_hub_share: 0.85,
    nat_percentile: 80.5,
    nat_grade: "B",
  },
  {
    rank: 5,
    stop_id: "2005",
    stop_name: "Krakowska / Kadzielnia",
    lat: 50.862,
    lon: 20.620,
    hub_id: 13,
    hub_name: "Kadzielnia",
    is_hub_anchor: 1,
    stop_departures_h: 22.0,
    stop_routes_count: 5,
    stop_routes: "4, 19, 27, 29",
    stop_grade: "C",
    stop_percentile: 55.0,
    stop_local_score_raw: 0.15,
    stop_infra_score: 62.0,
    stop_raw_gravity: 190.0,
    stop_entropy: 1.55,
    stop_pop_val: 1800,
    stop_market_val: 8200,
    stop_liquidity: 18,
    stop_hub_share: 0.90,
    nat_percentile: 52.0,
    nat_grade: "C",
  },
];

export const MOCK_HUBS = [
  {
    rank: 1,
    hub_id: 10,
    hub_name: "Węzeł Żytnia / Grunwaldzka",
    lat: 50.8712,
    lon: 20.6285,
    hub_stops_count: 2,
    hub_stops_ids: "2001, 2002",
    hub_departures_h: 110.5,
    hub_routes_count: 18,
    hub_routes: "1, 2, 4, 8, 12, 15, 18, 21, 25, 34, 35, 46, 102",
    hub_grade: "A+",
    hub_percentile: 99.5,
    hub_local_score_raw: 3.12,
    hub_infra_score: 94.2,
    hub_raw_gravity: 490.5,
    hub_entropy: 2.65,
    hub_pop_val: 4100,
    hub_market_val: 8900,
    hub_liquidity: 45,
    nat_percentile: 99.1,
    nat_grade: "A+",
  },
  {
    rank: 2,
    hub_id: 11,
    hub_name: "Dworzec PKP / Bus",
    lat: 50.8752,
    lon: 20.6212,
    hub_stops_count: 2,
    hub_stops_ids: "2003, 2006",
    hub_departures_h: 73.0,
    hub_routes_count: 15,
    hub_routes: "0W, 0Z, 5, 13, 28, 33, 44",
    hub_grade: "A+",
    hub_percentile: 98.2,
    hub_local_score_raw: 2.75,
    hub_infra_score: 96.5,
    hub_raw_gravity: 540.0,
    hub_entropy: 2.70,
    hub_pop_val: 3100,
    hub_market_val: 9200,
    hub_liquidity: 52,
    nat_percentile: 97.8,
    nat_grade: "A+",
  },
];

export const MOCK_HEXAGONS = [
  {
    hex: "881e2856d7fffff",
    lat: 50.871,
    lon: 20.628,
    stop_count: 2,
    hub_count: 1,
    total_departures_h: 110.5,
    max_stop_grade: "A+",
    transport_score: 92.5,
    pop_total: 2150,
    rcn_tx_count: 45,
    rcn_median_price_m2: 9150,
    poi_gravity_sum: 480.0,
    transit_desert_index: 0.05,
    is_transit_desert: false,
  },
  {
    hex: "881e2856d5fffff",
    lat: 50.865,
    lon: 20.615,
    stop_count: 0,
    hub_count: 0,
    total_departures_h: 0.0,
    max_stop_grade: "F",
    transport_score: 8.2,
    pop_total: 1850,
    rcn_tx_count: 12,
    rcn_median_price_m2: 7800,
    poi_gravity_sum: 45.0,
    transit_desert_index: 0.88,
    is_transit_desert: true,
  },
];

export const MOCK_AUDIT_SUMMARY = {
  city: "kielce",
  summary: {
    stops_count: 1357,
    hubs_count: 817,
    consolidation_ratio: 0.602,
    population_total: 187000,
    population_baseline: 185000,
    population_delta_pct: 1.08,
    is_metro_area: false,
    rcn_transactions_count: 6540,
    critical_nulls_infs: 0,
  },
  zscore: {
    mean: 0.02,
    std: 0.98,
    is_valid: true,
  },
  grades: {
    stops: { "A+": 135, A: 270, B: 405, C: 270, D: 135, F: 142 },
    hubs: { "A+": 82, A: 163, B: 245, C: 163, D: 82, F: 82 },
  },
  tcrp: {
    redundant_stops_r50: 184,
    redundant_stops_r70: 92,
    redundant_stops_r90: 28,
  },
};

export const MOCK_AXE_LIST = {
  city: "kielce",
  threshold: 0.7,
  total_redundant: 92,
  stops: [
    {
      redundant_stop_id: "2099",
      redundant_stop_name: "Grunwaldzka Szpital II",
      dominant_stop_id: "2001",
      dominant_stop_name: "Żytnia I",
      redundancy_score: 0.84,
      distance_m: 145,
      service_overlap: 0.92,
      spatial_decay: 0.88,
      demand_cannibalization: 0.76,
      redundant_routes: "1, 2, 8",
      dominant_routes: "1, 2, 8, 12, 18, 25, 34, 46",
      redundant_departures_h: 18.0,
      dominant_departures_h: 68.5,
      lat: 50.8705,
      lon: 20.627,
    },
    {
      redundant_stop_id: "2105",
      redundant_stop_name: "Sienkiewicza / Mała",
      dominant_stop_id: "2003",
      dominant_stop_name: "Dworzec Kolejowy",
      redundancy_score: 0.76,
      distance_m: 180,
      service_overlap: 0.80,
      spatial_decay: 0.75,
      demand_cannibalization: 0.65,
      redundant_routes: "5, 13",
      dominant_routes: "0W, 0Z, 5, 13, 28, 33, 44",
      redundant_departures_h: 12.0,
      dominant_departures_h: 55.0,
      lat: 50.874,
      lon: 20.623,
    },
  ],
};

export const MOCK_TRANSIT_DESERTS = {
  city: "kielce",
  count: 1,
  deserts: [
    {
      h3_index: "881e2856d5fffff",
      lat: 50.865,
      lon: 20.615,
      pop_total: 1850,
      total_departures_h: 0.0,
      transit_desert_index: 0.88,
      is_transit_desert: true,
      rcn_median_price_m2: 7800,
      stop_count: 0,
      hub_count: 0,
    },
  ],
};

export const MOCK_ROUTES = [
  {
    feed_id: "ztm",
    route_id: "34",
    route_uid: "ztm_34",
    short_name: "34",
    long_name: "Bukówka - Zagórze",
    type: 3,
    color: "#e63946",
    direction_id: 0,
    headsign: "Zagórze",
    daily_trips: 48,
    stop_count: 24,
    length_km: 12.8,
    travel_time_min: 36,
    commercial_speed_kmh: 21.3,
    peak_headway_min: 15,
    offpeak_headway_min: 20,
    is_shape_interpolated: false,
  },
  {
    feed_id: "ztm",
    route_id: "46",
    route_uid: "ztm_46",
    short_name: "46",
    long_name: "Targi Kielce - Ślichowice",
    type: 3,
    color: "#2a9d8f",
    direction_id: 0,
    headsign: "Ślichowice",
    daily_trips: 40,
    stop_count: 28,
    length_km: 15.2,
    travel_time_min: 42,
    commercial_speed_kmh: 21.7,
    peak_headway_min: 15,
    offpeak_headway_min: 30,
    is_shape_interpolated: false,
  },
];

export const MOCK_ROUTE_DETAILS = {
  route_uid: "ztm_34",
  short_name: "34",
  color: "#e63946",
  total_length_km: 12.8,
  total_travel_time_min: 36,
  commercial_speed_kmh: 21.3,
  variants: [],
  stops: [
    {
      sequence: 1,
      stop_id: "1001",
      stop_name: "Bukówka Pętla",
      lat: 50.845,
      lon: 20.655,
      segment_distance_m: 0,
      cumulative_distance_km: 0.0,
      segment_travel_time_sec: 0,
      cumulative_travel_time_min: 0,
      segment_speed_kmh: 0,
      is_terminal: true,
    },
    {
      sequence: 2,
      stop_id: "2001",
      stop_name: "Żytnia I",
      lat: 50.871,
      lon: 20.628,
      segment_distance_m: 3500,
      cumulative_distance_km: 3.5,
      segment_travel_time_sec: 480,
      cumulative_travel_time_min: 8,
      segment_speed_kmh: 26.2,
      is_terminal: false,
    },
    {
      sequence: 3,
      stop_id: "2003",
      stop_name: "Dworzec Kolejowy",
      lat: 50.875,
      lon: 20.621,
      segment_distance_m: 850,
      cumulative_distance_km: 4.35,
      segment_travel_time_sec: 150,
      cumulative_travel_time_min: 10.5,
      segment_speed_kmh: 20.4,
      is_terminal: false,
    },
  ],
};

export const MOCK_NETWORK_EDGES = [
  {
    from_stop_id: "2001",
    from_stop_name: "Żytnia I",
    to_stop_id: "2003",
    to_stop_name: "Dworzec Kolejowy",
    route_uid: "ztm_34",
    direction_id: 0,
    avg_travel_time_sec: 150,
    distance_m: 850,
    speed_kmh: 20.4,
    is_distance_real: true,
  },
  {
    from_stop_id: "2003",
    from_stop_name: "Dworzec Kolejowy",
    to_stop_id: "2004",
    to_stop_name: "Warszawska / Galeria Korona",
    route_uid: "ztm_46",
    direction_id: 0,
    avg_travel_time_sec: 240,
    distance_m: 920,
    speed_kmh: 13.8, // bottleneck alert < 15km/h
    is_distance_real: true,
  },
];

export const MOCK_MARKET_SUMMARY = {
  city: "kielce",
  total: 6540,
  valid: 6120,
  median_price_m2: 8950,
  trimmed_mean_m2: 9020,
  min_valid: 3800,
  max_allowed: 22000,
};

export const MOCK_MARKET_TRENDS = {
  city: "kielce",
  interval: "quarterly",
  total_periods: 8,
  periods: [
    { period: "2024-Q1", tx_count: 240, median_price_m2: 8200, avg_price_m2: 8310, q1_price_m2: 7600, q3_price_m2: 8900 },
    { period: "2024-Q2", tx_count: 285, median_price_m2: 8450, avg_price_m2: 8520, q1_price_m2: 7850, q3_price_m2: 9150 },
    { period: "2024-Q3", tx_count: 310, median_price_m2: 8700, avg_price_m2: 8780, q1_price_m2: 8100, q3_price_m2: 9400 },
    { period: "2024-Q4", tx_count: 290, median_price_m2: 8900, avg_price_m2: 8990, q1_price_m2: 8300, q3_price_m2: 9650 },
    { period: "2025-Q1", tx_count: 260, median_price_m2: 9100, avg_price_m2: 9210, q1_price_m2: 8500, q3_price_m2: 9800 },
    { period: "2025-Q2", tx_count: 330, median_price_m2: 9350, avg_price_m2: 9420, q1_price_m2: 8700, q3_price_m2: 10100 },
    { period: "2025-Q3", tx_count: 350, median_price_m2: 9550, avg_price_m2: 9630, q1_price_m2: 8950, q3_price_m2: 10350 },
    { period: "2025-Q4", tx_count: 315, median_price_m2: 9750, avg_price_m2: 9820, q1_price_m2: 9100, q3_price_m2: 10550 },
  ],
};

export const MOCK_MARKET_TRANSACTIONS = [
  {
    rank: 1,
    tx_id: "tx-kielce-001",
    price_m2: 12400,
    total_price: 682000,
    area_m2: 55.0,
    market_type: "pierwotny",
    property_function: "mieszkalna",
    floor: 3,
    rooms: 3,
    dok_data: "2025-11-14",
    address: "ul. Żytnia 14",
    lat: 50.8715,
    lon: 20.6288,
    distance_m: 65,
  },
  {
    rank: 2,
    tx_id: "tx-kielce-002",
    price_m2: 11800,
    total_price: 531000,
    area_m2: 45.0,
    market_type: "wtorny",
    property_function: "mieszkalna",
    floor: 2,
    rooms: 2,
    dok_data: "2025-10-05",
    address: "ul. Sienkiewicza 48",
    lat: 50.872,
    lon: 20.630,
    distance_m: 120,
  },
];

export const MOCK_MARKET_H3_ANALYSIS = {
  city: "kielce",
  coverage_pct: 78.4,
  cells_with_rcn: 660,
  total_cells: 843,
  price_stats: { min: 3800, median: 8950, max: 21500 },
  price_brackets: [
    { bracket: "< 6k PLN", count: 45, percentage: 6.8 },
    { bracket: "6k - 8k PLN", count: 180, percentage: 27.3 },
    { bracket: "8k - 10k PLN", count: 285, percentage: 43.2 },
    { bracket: "10k - 12k PLN", count: 110, percentage: 16.7 },
    { bracket: "12k - 15k PLN", count: 32, percentage: 4.8 },
    { bracket: "> 15k PLN", count: 8, percentage: 1.2 },
  ],
  transport_correlation: 0.642,
};

export const MOCK_POI_MAGNETS = [
  { rank: 1, name: "Dworzec PKP Kielce", category: "Dworzec Kolejowy", tier: "T0", w: 5.0, lat: 50.875, lon: 20.621, sum_pull: 890.5 },
  { rank: 2, name: "Galeria Korona", category: "Centrum Handlowe", tier: "T1", w: 3.5, lat: 50.873, lon: 20.635, sum_pull: 650.0 },
  { rank: 3, name: "Uniwersytet Jana Kochanowskiego", category: "Uczelnia Wyższa", tier: "T1", w: 3.5, lat: 50.880, lon: 20.645, sum_pull: 580.0 },
  { rank: 4, name: "Szpital Wojewódzki na Czarnowie", category: "Szpital Kliniczny", tier: "T0", w: 5.0, lat: 50.878, lon: 20.605, sum_pull: 540.0 },
];

export const MOCK_POI_CATEGORIES = [
  { category: "Dworzec Kolejowy", tier: "T0", count: 2, final_value: 5.0 },
  { category: "Szpital Kliniczny", tier: "T0", count: 3, final_value: 5.0 },
  { category: "Centrum Handlowe", tier: "T1", count: 6, final_value: 3.5 },
  { category: "Uczelnia Wyższa", tier: "T1", count: 4, final_value: 3.5 },
];

export const MOCK_NATIONAL_RANKING = {
  scope: "cities",
  total: 30,
  limit: 30,
  offset: 0,
  items: [
    { rank: 1, city: "warszawa", stops_count: 10393, hubs_count: 4714, avg_transport_score: 84.5, rcn_median_m2: 17200, consolidation_ratio: 0.453 },
    { rank: 2, city: "krakow", stops_count: 4210, hubs_count: 2150, avg_transport_score: 79.2, rcn_median_m2: 15400, consolidation_ratio: 0.510 },
    { rank: 3, city: "wroclaw", stops_count: 3890, hubs_count: 1980, avg_transport_score: 78.4, rcn_median_m2: 13900, consolidation_ratio: 0.508 },
    { rank: 4, city: "poznan", stops_count: 3450, hubs_count: 1820, avg_transport_score: 76.1, rcn_median_m2: 11800, consolidation_ratio: 0.527 },
    { rank: 5, city: "kielce", stops_count: 1357, hubs_count: 817, avg_transport_score: 68.3, rcn_median_m2: 8950, consolidation_ratio: 0.602 },
  ],
};

export const MOCK_CITY_COMPARISON = {
  city_a: {
    city: "kielce",
    stops_count: 1357,
    hubs_count: 817,
    consolidation_ratio: 0.602,
    median_rcn: 8950,
    transport_score: 68.3,
  },
  city_b: {
    city: "radom",
    stops_count: 1120,
    hubs_count: 730,
    consolidation_ratio: 0.651,
    median_rcn: 7400,
    transport_score: 59.8,
  },
  deltas: {
    stops_count_delta_pct: 21.1,
    hubs_count_delta_pct: 11.9,
    median_rcn_delta_pct: 20.9,
    transport_score_delta_pct: 14.2,
  },
};

export const MOCK_METRIC_DISTRIBUTION = {
  city: "kielce",
  metric: "transport_score",
  count: 1357,
  min: 5.2,
  p10: 24.1,
  p25: 45.0,
  median: 68.3,
  p75: 84.2,
  p90: 93.5,
  max: 99.8,
  mean: 64.7,
  std: 21.4,
  histogram_bins: [
    { bin_start: 0, bin_end: 10, count: 42 },
    { bin_start: 10, bin_end: 20, count: 75 },
    { bin_start: 20, bin_end: 30, count: 110 },
    { bin_start: 30, bin_end: 40, count: 145 },
    { bin_start: 40, bin_end: 50, count: 190 },
    { bin_start: 50, bin_end: 60, count: 230 },
    { bin_start: 60, bin_end: 70, count: 265 },
    { bin_start: 70, bin_end: 80, count: 180 },
    { bin_start: 80, bin_end: 90, count: 85 },
    { bin_start: 90, bin_end: 100, count: 35 },
  ],
};

export const MOCK_SIMILAR_HUBS = [
  {
    hub_id: 142,
    city: "radom",
    stop_name: "Dworzec PKP Radom",
    similarity_score: 0.984,
    grade: "A+",
    local_score_raw: 2.78,
  },
  {
    hub_id: 205,
    city: "czestochowa",
    stop_name: "Dworzec Główny",
    similarity_score: 0.962,
    grade: "A+",
    local_score_raw: 2.65,
  },
  {
    hub_id: 88,
    city: "torun",
    stop_name: "Plac Rapackiego",
    similarity_score: 0.941,
    grade: "A",
    local_score_raw: 2.45,
  },
  {
    hub_id: 312,
    city: "opole",
    stop_name: "Opole Główne",
    similarity_score: 0.915,
    grade: "A",
    local_score_raw: 2.30,
  },
  {
    hub_id: 420,
    city: "rzeszow",
    stop_name: "Plac Wolności",
    similarity_score: 0.887,
    grade: "B",
    local_score_raw: 1.95,
  },
];

// ==========================================
// 2. NETWORK MOCKING INTERCEPTOR
// ==========================================

export async function setupFoundryApiMocks(page: Page): Promise<void> {
  await page.route("**/*", async (route) => {
    const url = route.request().url();

    // Only intercept requests directed at the backend API or /api/
    const isApi =
      url.includes("api.busos.czerwinskidawid.pl") ||
      url.includes("/api/v1/") ||
      url.includes("/health") ||
      (url.includes("localhost:3000/api/") && !url.includes("/_next/"));

    if (!isApi) {
      return route.continue();
    }

    const respondJson = (data: any, status = 200) => {
      return route.fulfill({
        status,
        contentType: "application/json",
        body: JSON.stringify(data),
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        },
      });
    };

    // 1. Health & Cities
    if (url.includes("/health")) return respondJson(MOCK_HEALTH);
    if (url.includes("/api/v1/cities") && url.includes("/boundary")) return respondJson(MOCK_BOUNDARY);
    if (url.includes("/api/v1/cities")) return respondJson({ cities: MOCK_CITIES, total: 30 });
    if (url.includes("/api/v1/population")) return respondJson(MOCK_BOUNDARY);

    // 2. Physical Stops
    if (url.includes("/api/v1/stops/batch")) return respondJson({ city: "kielce", count: MOCK_STOPS.length, stops: MOCK_STOPS });
    if (url.includes("/api/v1/stops/ranking")) return respondJson({ city: "kielce", total: 1357, limit: 100, offset: 0, order_by: "rank", order_dir: "asc", items: MOCK_STOPS });
    if (url.match(/\/api\/v1\/stops\/[0-9]+/)) {
      const match = url.match(/\/api\/v1\/stops\/([0-9]+)/);
      const stopId = match ? match[1] : "2001";
      const found = MOCK_STOPS.find((s) => s.stop_id === stopId) || MOCK_STOPS[0];
      return respondJson({ ...found, h3_index: "881e2856d7fffff", routes_list: ["1", "2", "8", "12", "34"] });
    }

    // 3. Hubs
    if (url.includes("/api/v1/hubs/ranking")) return respondJson({ city: "kielce", total: 817, limit: 100, offset: 0, order_by: "rank", order_dir: "asc", items: MOCK_HUBS });
    if (url.includes("/api/v1/hubs") && (url.includes("/details") || url.includes("/full"))) {
      return respondJson({
        hub_id: 10,
        city: "kielce",
        lat: 50.8712,
        lon: 20.6285,
        pois: MOCK_POI_MAGNETS,
        pop: [{ grid_id: "g1", lat: 50.871, lon: 20.628, pop_val: 2150, sum_pull_pop: 1500 }],
      });
    }
    if (url.match(/\/api\/v1\/hubs\/[0-9]+/)) {
      return respondJson({
        hub_id: 10,
        hub_name: "Węzeł Żytnia / Grunwaldzka",
        lat: 50.8712,
        lon: 20.6285,
        hub_stops_count: 2,
        hub_stops_ids: ["2001", "2002"],
        hub_departures_h: 110.5,
        hub_routes_count: 18,
        hub_routes: "1, 2, 4, 8, 12, 15, 18, 21, 25, 34, 35, 46, 102",
        hub_grade: "A+",
        hub_percentile: 99.5,
        hub_local_score_raw: 3.12,
      });
    }

    // 4. Hexagons
    if (url.includes("/api/v1/hexagons/ranking")) return respondJson({ city: "kielce", total: 843, limit: 100, offset: 0, order_by: "transport_score", order_dir: "desc", items: MOCK_HEXAGONS });
    if (url.includes("/profile")) return respondJson({ city: "kielce", hex: "881e2856d7fffff", hexagon: MOCK_HEXAGONS[0], stops: MOCK_STOPS.slice(0, 2), rcn_transactions: MOCK_MARKET_TRANSACTIONS, top_pois: MOCK_POI_MAGNETS });
    if (url.includes("/stops")) return respondJson(MOCK_STOPS);
    if (url.includes("/api/v1/hexagons")) return respondJson({ city: "kielce", resolution: 8, count: MOCK_HEXAGONS.length, hexagons: MOCK_HEXAGONS });

    // 5. Market
    if (url.includes("/api/v1/market/summary")) return respondJson(MOCK_MARKET_SUMMARY);
    if (url.includes("/api/v1/market/trends")) return respondJson(MOCK_MARKET_TRENDS);
    if (url.includes("/api/v1/market/stops-summary")) {
      const summaryMap: Record<string, any> = {};
      MOCK_STOPS.forEach((s) => {
        summaryMap[s.stop_id] = { tx_count: 24, median_price_m2: 8950, avg_price_m2: 9100, min_price_m2: 6500, max_price_m2: 13500, avg_distance_m: 210 };
      });
      return respondJson(summaryMap);
    }
    if (url.includes("/api/v1/market/stop/") && url.includes("/transactions")) return respondJson(MOCK_MARKET_TRANSACTIONS);
    if (url.includes("/api/v1/market/transactions/ranking") || url.includes("/transactions")) return respondJson({ city: "kielce", total: 6540, limit: 100, offset: 0, items: MOCK_MARKET_TRANSACTIONS });
    if (url.includes("/api/v1/market/h3-analysis") || url.includes("/h3-grid")) return respondJson(MOCK_MARKET_H3_ANALYSIS);

    // 6. POI
    if (url.includes("/api/v1/poi/magnets")) return respondJson({ city: "kielce", total: MOCK_POI_MAGNETS.length, magnets: MOCK_POI_MAGNETS });
    if (url.includes("/api/v1/poi/categories")) return respondJson({ city: "kielce", total: MOCK_POI_CATEGORIES.length, categories: MOCK_POI_CATEGORIES });
    if (url.includes("/api/v1/poi/search")) return respondJson({ city: "kielce", total: MOCK_POI_MAGNETS.length, items: MOCK_POI_MAGNETS.map((m) => ({ poi_id: `poi-${m.rank}`, ...m })) });

    // 7. Analytics & Policy
    if (url.includes("/api/v1/analytics/audit-summary")) return respondJson(MOCK_AUDIT_SUMMARY);
    if (url.includes("/api/v1/analytics/axe-list")) return respondJson(MOCK_AXE_LIST);
    if (url.includes("/api/v1/analytics/transit-deserts")) return respondJson(MOCK_TRANSIT_DESERTS);
    if (url.includes("/api/v1/analytics/national-ranking")) return respondJson(MOCK_NATIONAL_RANKING);
    if (url.includes("/api/v1/analytics/metric-distribution")) return respondJson(MOCK_METRIC_DISTRIBUTION);
    if (url.includes("/api/v1/analytics/compare-cities")) return respondJson(MOCK_CITY_COMPARISON);

    // 8. Routes GTFS
    if (url.includes("/destinations")) return respondJson({ city: "kielce", from_stop_id: "2001", from_stop_name: "Żytnia I", destinations_count: 2, destinations: [{ to_stop_id: "2003", to_stop_name: "Dworzec Kolejowy", lat: 50.875, lon: 20.621, min_travel_time_sec: 150, distance_m: 850, speed_kmh: 20.4, routes: ["34", "46"] }] });
    if (url.includes("/api/v1/routes/edges")) return respondJson(MOCK_NETWORK_EDGES);
    if (url.includes("/api/v1/routes/geometry")) {
      return respondJson({
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            geometry: {
              type: "LineString",
              coordinates: [
                [20.655, 50.845],
                [20.628, 50.871],
                [20.621, 50.875],
              ],
            },
            properties: { route_uid: "ztm_34", color: "#e63946" },
          },
        ],
      });
    }
    if (url.includes("/details")) return respondJson(MOCK_ROUTE_DETAILS);
    if (url.match(/\/api\/v1\/routes\/ztm_[0-9]+/)) return respondJson(MOCK_ROUTE_DETAILS);
    if (url.includes("/api/v1/routes")) return respondJson(MOCK_ROUTES);

    // 9. AI Vector Engine
    if (url.includes("/api/v1/ai/similar-hubs")) return respondJson(MOCK_SIMILAR_HUBS);

    // Fallback default response
    return respondJson({ status: "ok" });
  });
}

// ==========================================
// 3. CONSOLE ERROR RECORDER & ZUSTAND HELPERS
// ==========================================

export interface FoundryTestContext {
  page: Page;
  consoleErrors: string[];
  assertNoConsoleErrors: () => void;
  getStoreState: () => Promise<any>;
  waitForHydration: () => Promise<void>;
}

export const test = base.extend<{ foundry: FoundryTestContext }>({
  foundry: async ({ page }, use) => {
    const consoleErrors: string[] = [];

    // Capture console errors
    page.on("console", (msg) => {
      if (msg.type() === "error") {
        const text = msg.text();
        // Ignore benign favicon or cross-origin map tile missing warnings
        if (
          !text.includes("favicon") &&
          !text.includes("404 (Not Found)") &&
          !text.includes("Failed to load resource")
        ) {
          consoleErrors.push(`[Console Error] ${text}`);
        }
      }
    });

    // Capture uncaught page errors
    page.on("pageerror", (err) => {
      consoleErrors.push(`[Page Error] ${err.message}\n${err.stack || ""}`);
    });

    // Install mock bridge
    await setupFoundryApiMocks(page);

    const assertNoConsoleErrors = () => {
      if (consoleErrors.length > 0) {
        throw new Error(
          `Expected 0 console errors, but encountered ${consoleErrors.length}:\n${consoleErrors.join("\n")}`
        );
      }
      expect(consoleErrors).toHaveLength(0);
    };

    const getStoreState = async () => {
      return page.evaluate(() => {
        const store = (window as any).__FOUNDRY_STORE__;
        return store ? store.getState() : null;
      });
    };

    const waitForHydration = async () => {
      // Wait until Foundry top navbar is visible
      await page.waitForSelector(".bp6-navbar", { timeout: 15000 });
      // Ensure store is loaded
      await page.waitForFunction(() => (window as any).__FOUNDRY_STORE__ != null, { timeout: 10000 });
    };

    await use({
      page,
      consoleErrors,
      assertNoConsoleErrors,
      getStoreState,
      waitForHydration,
    });
  },
});

export { expect };
