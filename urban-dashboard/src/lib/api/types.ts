/**
 * BusOS Palantir Foundry — Strongly Typed API Contract (SSOT)
 * 100% Type Coverage for all 45 registered FastAPI routes on OCI ARM64.
 * Reference: docs/contracts/DATA_DICTIONARY_AND_API_SSOT.md & PLAN_FRONTEND.md
 */

// ==========================================
// 1. SYSTEM & CITIES (4 Routes)
// ==========================================

export interface HealthResponse {
  status: string;
  version: string;
  engine: string;
  active_cities_count: number;
  qdrant_connected: boolean;
}

export interface CitiesResponse {
  cities: string[];
  total: number;
}

export interface CityBoundaryProperties {
  city: string;
  area_km2?: number;
  source?: string;
  [key: string]: unknown;
}

export interface GeoJsonGeometry {
  type: string;
  coordinates: any;
}

export interface GeoJsonFeature<G = GeoJsonGeometry, P = Record<string, unknown>> {
  type: "Feature";
  geometry: G;
  properties: P;
  id?: string | number;
}

export interface GeoJsonFeatureCollection<G = GeoJsonGeometry, P = Record<string, unknown>> {
  type: "FeatureCollection";
  features: GeoJsonFeature<G, P>[];
}

export interface PopProperties {
  TOT?: number;
  pop_val?: number;
  grid_id?: string;
  [key: string]: unknown;
}

// ==========================================
// 2. PHYSICAL STOPS (MICRO) (4 Routes)
// ==========================================

export interface StopRankingItem {
  rank: number;
  stop_id: string;
  stop_name: string;
  lat: number;
  lon: number;
  hub_id: number;
  hub_name: string;
  is_hub_anchor: number;
  stop_departures_h: number;
  stop_routes_count: number;
  stop_routes: string;
  stop_grade: string;
  stop_percentile: number;
  stop_local_score_raw: number;
  stop_infra_score: number;
  stop_raw_gravity: number;
  stop_entropy: number;
  stop_pop_val: number;
  stop_market_val: number;
  stop_liquidity: number;
  stop_hub_share: number;
  nat_percentile?: number;
  nat_grade?: string;
}

export interface StopRankingResponse {
  city: string;
  total: number;
  limit: number;
  offset: number;
  order_by: string;
  order_dir: string;
  items: StopRankingItem[];
}

export interface StopProfileResponse extends StopRankingItem {
  h3_index?: string;
  routes_list?: string[];
  [key: string]: unknown;
}

export interface StopBatchResponse {
  city: string;
  count: number;
  stops: StopProfileResponse[];
}

// ==========================================
// 3. LOGICAL HUBS (MACRO) (5 Routes)
// ==========================================

export interface HubRankingItem {
  rank: number;
  hub_id: number;
  hub_name: string;
  lat: number;
  lon: number;
  hub_stops_count: number;
  hub_stops_ids: string;
  hub_departures_h: number;
  hub_routes_count: number;
  hub_routes: string;
  hub_grade: string;
  hub_percentile: number;
  hub_local_score_raw: number;
  hub_infra_score: number;
  hub_raw_gravity: number;
  hub_entropy: number;
  hub_pop_val: number;
  hub_market_val: number;
  hub_liquidity: number;
  nat_percentile?: number;
  nat_grade?: string;
}

export interface HubRankingResponse {
  city: string;
  total: number;
  limit: number;
  offset: number;
  order_by: string;
  order_dir: string;
  items: HubRankingItem[];
}

export interface HubCardResponse {
  hub_id: number;
  hub_name: string;
  lat: number;
  lon: number;
  hub_stops_count: number;
  hub_stops_ids: string[];
  hub_departures_h: number;
  hub_routes_count: number;
  hub_routes: string;
  hub_grade: string;
  hub_percentile: number;
  hub_local_score_raw: number;
  nat_percentile?: number;
  nat_grade?: string;
}

export interface PoiDetail {
  poi_id?: string | null;
  name?: string;
  category?: string;
  tier?: string;
  lat: number;
  lon: number;
  w: number;
  sum_pull: number;
}

export interface PopDetail {
  grid_id?: string | null;
  lat: number;
  lon: number;
  pop_val: number;
  sum_pull_pop: number;
}

export interface HubDetailsResponse {
  hub_id: string | number;
  city: string;
  lat: number;
  lon: number;
  pois: PoiDetail[];
  pop: PopDetail[];
  metrics?: Record<string, unknown>;
}

// ==========================================
// 4. H3 SPATIAL GRID RES 8 (5 Routes)
// ==========================================

export interface HexagonCell {
  hex: string;
  lat: number;
  lon: number;
  stop_count: number;
  hub_count: number;
  total_departures_h: number;
  max_stop_grade: string;
  transport_score: number;
  pop_total: number;
  rcn_tx_count: number;
  rcn_median_price_m2: number | null;
  poi_gravity_sum: number;
  transit_desert_index: number;
  is_transit_desert: boolean;
}

export interface HexagonsResponse {
  city: string;
  resolution: number;
  count: number;
  hexagons: HexagonCell[];
}

export interface HexagonRankingItem extends HexagonCell {
  rank: number;
}

export interface HexagonRankingResponse {
  city: string;
  total: number;
  limit: number;
  offset: number;
  order_by: string;
  order_dir: string;
  items: HexagonRankingItem[];
}

export interface HexagonProfileResponse {
  city: string;
  hex: string;
  hexagon: HexagonCell;
  stops: StopRankingItem[];
  rcn_transactions: MarketTransactionItem[];
  top_pois: PoiDetail[];
}

// ==========================================
// 5. REAL ESTATE MARKET RCN (10 Routes)
// ==========================================

export interface MarketSummaryResponse {
  city: string;
  total: number;
  valid: number;
  median_price_m2: number;
  trimmed_mean_m2: number;
  min_valid: number;
  max_allowed: number;
}

export interface MarketTrendPeriodItem {
  period: string;
  tx_count: number;
  median_price_m2: number;
  avg_price_m2: number;
  q1_price_m2: number;
  q3_price_m2: number;
}

export interface MarketTrendsResponse {
  city: string;
  stop_id?: string | null;
  interval: string;
  total_periods: number;
  periods: MarketTrendPeriodItem[];
}

export interface MarketStopsSummaryItem {
  tx_count: number;
  median_price_m2: number;
  avg_price_m2: number;
  min_price_m2: number;
  max_price_m2: number;
  avg_distance_m: number;
}

export type MarketStopsSummaryResponse = Record<string, MarketStopsSummaryItem>;

export interface MarketTransactionItem {
  rank?: number;
  tx_id?: string;
  gml_id?: string;
  price_m2: number;
  total_price?: number;
  area_m2?: number;
  market_type?: string;
  property_function?: string;
  floor?: number;
  rooms?: number;
  date?: string;
  dok_data?: string;
  address?: string;
  lat?: number;
  lon?: number;
  distance_m?: number;
  tran_rodzaj_rynku?: string;
}

export interface MarketTransactionsRankingResponse {
  city: string;
  total: number;
  limit: number;
  offset: number;
  items: MarketTransactionItem[];
}

export interface MarketTransactionsNearbyResponse {
  city: string;
  lat: number;
  lon: number;
  radius_m: number;
  count: number;
  items: MarketTransactionItem[];
}

export interface PriceBracket {
  bracket: string;
  count: number;
  percentage: number;
}

export interface MarketH3AnalysisResponse {
  city: string;
  coverage_pct: number;
  cells_with_rcn: number;
  total_cells: number;
  price_stats: Record<string, unknown>;
  price_brackets: PriceBracket[];
  transport_correlation: number;
}

// ==========================================
// 6. POINTS OF INTEREST (POI) (3 Routes)
// ==========================================

export interface PoiSearchItem {
  poi_id: string;
  name: string;
  category: string;
  tier: string;
  w: number;
  lat: number;
  lon: number;
}

export interface PoiSearchResponse {
  city: string;
  total: number;
  items: PoiSearchItem[];
}

export interface PoiMagnetItem {
  rank: number;
  name: string;
  category: string;
  tier: string;
  w: number;
  lat: number;
  lon: number;
  sum_pull: number;
}

export interface PoiMagnetsResponse {
  city: string;
  total: number;
  magnets: PoiMagnetItem[];
}

export interface PoiCategoryItem {
  category: string;
  tier: string;
  count: number;
  final_value: number;
}

export interface PoiCategoriesResponse {
  city: string;
  total: number;
  categories: PoiCategoryItem[];
}

// ==========================================
// 7. URBAN ANALYTICS & POLICY AUDIT (6 Routes)
// ==========================================

export interface AuditSummaryData {
  stops_count: number;
  hubs_count: number;
  consolidation_ratio: number;
  population_total: number;
  population_baseline: number;
  population_delta_pct: number;
  is_metro_area: boolean;
  rcn_transactions_count: number;
  critical_nulls_infs: number;
}

export interface ZScoreDistribution {
  mean: number;
  std: number;
  is_valid: boolean;
}

export type GradesDistribution = Record<string, number>;

export interface AxeStopItem {
  redundant_stop_id: string;
  redundant_stop_name: string;
  dominant_stop_id: string;
  dominant_stop_name: string;
  redundancy_score: number;
  distance_m: number;
  service_overlap: number;
  spatial_decay: number;
  demand_cannibalization: number;
  redundant_routes: string;
  dominant_routes: string;
  redundant_departures_h: number;
  dominant_departures_h: number;
  lat: number;
  lon: number;
}

export interface TcrpAudit {
  redundant_stops_r50: number;
  redundant_stops_r70: number;
  redundant_stops_r90: number;
  top_redundant_pairs?: AxeStopItem[];
}

export interface CityAuditSummaryResponse {
  city: string;
  summary?: AuditSummaryData;
  zscore?: ZScoreDistribution;
  grades?: {
    stops: GradesDistribution;
    hubs: GradesDistribution;
  };
  tcrp?: TcrpAudit;
  h3?: Record<string, unknown>;
  rcn?: Record<string, unknown>;
  poi?: Record<string, unknown>;
}

export interface AxeListResponse {
  city: string;
  threshold: number;
  total_redundant: number;
  stops: AxeStopItem[];
}

export interface TransitDesertItem {
  h3_index: string;
  lat: number;
  lon: number;
  pop_total: number;
  total_departures_h: number;
  transit_desert_index: number;
  is_transit_desert: boolean;
  rcn_median_price_m2: number | null;
  stop_count: number;
  hub_count: number;
}

export interface TransitDesertsResponse {
  city: string;
  count: number;
  deserts: TransitDesertItem[];
}

export interface NationalRankingResponse {
  scope: string;
  total: number;
  limit: number;
  offset: number;
  items: Array<Record<string, unknown>>;
}

export interface HistogramBin {
  bin_start: number;
  bin_end: number;
  count: number;
}

export interface MetricDistributionResponse {
  city: string;
  metric: string;
  count: number;
  min: number;
  p10: number;
  p25: number;
  median: number;
  p75: number;
  p90: number;
  max: number;
  mean: number;
  std: number;
  histogram_bins: HistogramBin[];
}

export interface CityComparisonResponse {
  city_a: Record<string, unknown>;
  city_b: Record<string, unknown>;
  deltas: Record<string, unknown>;
}

// ==========================================
// 8. TRANSIT ROUTES (GTFS) & TOPOLOGY (7 Routes)
// ==========================================

export interface RouteItem {
  feed_id: string;
  route_id: string;
  route_uid: string;
  short_name: string;
  long_name: string;
  type: number;
  color: string;
  direction_id: number;
  headsign: string;
  daily_trips: number;
  stop_count: number;
  length_km: number;
  travel_time_min: number;
  commercial_speed_kmh: number;
  first_departure?: string;
  last_departure?: string;
  peak_headway_min?: number;
  offpeak_headway_min?: number;
  geometry_source?: string;
  is_shape_interpolated: boolean;
}

export interface RouteStopItem {
  sequence: number;
  stop_id: string;
  stop_name: string;
  lat: number;
  lon: number;
  segment_distance_m: number;
  cumulative_distance_km: number;
  segment_travel_time_sec: number;
  cumulative_travel_time_min: number;
  segment_speed_kmh: number;
  is_terminal: boolean;
}

export interface RouteDetailsResponse {
  route_uid: string;
  short_name: string;
  color: string;
  total_length_km: number;
  total_travel_time_min: number;
  commercial_speed_kmh: number;
  service_hours?: string;
  variants: Array<Record<string, unknown>>;
  stops: RouteStopItem[];
}

export interface StopDestinationItem {
  to_stop_id: string;
  to_stop_name: string;
  lat: number;
  lon: number;
  min_travel_time_sec: number;
  distance_m: number;
  speed_kmh: number;
  routes: string[];
}

export interface StopDestinationsResponse {
  city: string;
  from_stop_id: string;
  from_stop_name: string;
  destinations_count: number;
  destinations: StopDestinationItem[];
}

export interface NetworkEdgeItem {
  from_stop_id: string;
  to_stop_id: string;
  route_uid: string;
  direction_id: number;
  avg_travel_time_sec: number;
  distance_m: number;
  speed_kmh: number;
  is_distance_real: boolean;
}

// ==========================================
// 9. AI VECTOR ENGINE (1 Route)
// ==========================================

export interface SimilarHubItem {
  hub_id: string | number;
  city: string;
  stop_name: string;
  similarity_score: number;
  grade: string;
  local_score_raw: number;
}
