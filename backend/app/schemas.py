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
