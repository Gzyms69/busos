from typing import Any, Dict, List, Optional
from pydantic import BaseModel, Field


class HealthResponse(BaseModel):
    status: str = Field(..., description="Service status indicator")
    version: str = Field(..., description="BusOS API version")
    engine: str = Field(..., description="Urban Gravity Engine version identifier")
    active_cities_count: int = Field(..., description="Number of audited cities available for serving")
    qdrant_connected: bool = Field(False, description="Whether Qdrant vector engine is reachable")


class CityInfo(BaseModel):
    id: str = Field(..., description="Slug identifier of the city (e.g. kielce, warszawa)")
    name: str = Field(..., description="Human-readable city name")
    has_results: bool = Field(True, description="Whether full Stop DNA & gravity matrices exist")


class CitiesResponse(BaseModel):
    cities: List[str] = Field(..., description="List of available audited city slugs")
    total: int = Field(..., description="Total count of cities")


class GeoJsonFeature(BaseModel):
    type: str = "Feature"
    geometry: Optional[Dict[str, Any]] = Field(None, description="GeoJSON Geometry (Point, Polygon, etc.)")
    properties: Dict[str, Any] = Field(default_factory=dict, description="Feature attributes")


class GeoJsonFeatureCollection(BaseModel):
    type: str = "FeatureCollection"
    features: List[GeoJsonFeature] = Field(default_factory=list, description="Array of GeoJSON Features")


class PoiDetail(BaseModel):
    poi_id: Optional[str] = None
    name: Optional[str] = None
    category: Optional[str] = None
    tier: Optional[str] = None
    lat: float
    lon: float
    w: float = Field(..., description="Base structural weight assigned by Tier Matrix")
    sum_pull: float = Field(..., description="Aggregated spatial gravity pull value")


class PopDetail(BaseModel):
    grid_id: Optional[str] = None
    lat: float
    lon: float
    pop_val: Optional[float] = None
    sum_pull_pop: Optional[float] = None


class HubDetailsResponse(BaseModel):
    hub_id: str
    city: str
    lat: float
    lon: float
    pois: List[PoiDetail] = Field(default_factory=list, description="POIs within 500m walking radius")
    pop: List[PopDetail] = Field(default_factory=list, description="GUS population grid cells within 500m")
    metrics: Optional[Dict[str, Any]] = Field(None, description="Comprehensive 4-pillar Stop DNA metrics")


class SimilarHubResponse(BaseModel):
    hub_id: str
    city: str
    stop_name: str
    similarity_score: float = Field(..., description="Cosine similarity score (0.0 to 1.0)")
    grade: str
    local_score_raw: float


class HexagonCell(BaseModel):
    hex: str = Field(..., description="H3 cell index string")
    lat: float
    lon: float
    stop_count: int
    hub_count: int
    total_departures_h: float
    max_stop_grade: str
    transport_score: float
    pop_total: float
    rcn_tx_count: int
    rcn_median_price_m2: Optional[float] = None
    poi_gravity_sum: float
    transit_desert_index: float
    is_transit_desert: bool


class HexagonsResponse(BaseModel):
    city: str
    resolution: int
    count: int
    hexagons: List[HexagonCell] = Field(default_factory=list, description="Array of H3 analytical cells")


class StopProfileResponse(BaseModel):
    stop_id: str
    stop_name: str
    city: str
    lat: float
    lon: float
    hub_id: Optional[int] = None
    hub_name: Optional[str] = None
    is_hub_anchor: bool = False
    stop_hub_share: float = 0.0
    stop_departures_h: float = 0.0
    stop_routes: Optional[str] = None
    stop_routes_count: int = 0
    stop_grade: str = "F"
    stop_percentile: float = 0.0
    stop_local_score_raw: float = 0.0
    stop_infra_score: float = 0.0
    stop_pop_val: float = 0.0
    stop_market_val: float = 0.0
    properties: Dict[str, Any] = Field(default_factory=dict)


class HubCardResponse(BaseModel):
    hub_id: int
    hub_name: str
    city: str
    lat: float
    lon: float
    hub_stops_count: int
    hub_stops_ids: List[str] = Field(default_factory=list)
    hub_departures_h: float = 0.0
    hub_routes_count: int = 0
    hub_routes: Optional[str] = None
    hub_grade: str = "F"
    hub_percentile: float = 0.0
    hub_local_score_raw: float = 0.0
    hub_infra_score: float = 0.0
    hub_pop_val: float = 0.0
    hub_market_val: float = 0.0
    grade: str = "F"
    local_score_raw: float = 0.0
    properties: Dict[str, Any] = Field(default_factory=dict)


class MarketSummaryResponse(BaseModel):
    city: str
    total: int
    valid: int
    median_price_m2: float
    trimmed_mean_m2: float
    min_valid: float
    max_allowed: float


class AxeStopItem(BaseModel):
    redundant_stop_id: str
    redundant_stop_name: str
    dominant_stop_id: str
    dominant_stop_name: str
    redundancy_score: float = Field(..., description="TCRP Report 100 Asymmetric Redundancy R >= 0.70")
    distance_m: float
    service_overlap: float
    spatial_decay: float
    demand_cannibalization: float
    redundant_routes: Optional[str] = None
    dominant_routes: Optional[str] = None
    redundant_departures_h: float = 0.0
    dominant_departures_h: float = 0.0
    lat: float
    lon: float


class AxeListResponse(BaseModel):
    city: str
    threshold: float
    total_redundant: int
    stops: List[AxeStopItem] = Field(default_factory=list)


class TransitDesertItem(BaseModel):
    h3_index: str
    lat: float
    lon: float
    pop_total: float
    total_departures_h: float
    transit_desert_index: float
    is_transit_desert: bool
    rcn_median_price_m2: Optional[float] = None
    stop_count: int = 0
    hub_count: int = 0


class TransitDesertsResponse(BaseModel):
    city: str
    count: int
    deserts: List[TransitDesertItem] = Field(default_factory=list)


class SimilarHubRequest(BaseModel):
    hub_id: str
    city: str
    top_k: int = Field(5, description="Number of top similar hubs to return")

