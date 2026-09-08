import pytest
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)


# ==============================================================================
# 1. METROPOLITAN BOUNDARY TESTS (/api/v1/cities/{city}/boundary)
# ==============================================================================

def test_city_boundary_geojson_kielce():
    """Verify that /api/v1/cities/kielce/boundary returns valid WGS84 GeoJSON MultiPolygon with metadata."""
    response = client.get("/api/v1/cities/kielce/boundary")
    assert response.status_code == 200
    data = response.json()
    assert data["type"] == "FeatureCollection"
    assert len(data["features"]) >= 1
    
    feature = data["features"][0]
    assert feature["geometry"]["type"] in ["Polygon", "MultiPolygon"]
    props = feature["properties"]
    assert props.get("city") == "kielce"
    assert "area_km2" in props
    assert props["area_km2"] > 0.0


def test_city_boundary_nonexistent_city():
    """Verify that requesting boundary for nonexistent city returns 404."""
    response = client.get("/api/v1/cities/nonexistent_xyz/boundary")
    assert response.status_code == 404


# ==============================================================================
# 2. POI SEARCH & CATEGORY FILTERING TESTS (/api/v1/poi/search)
# ==============================================================================

def test_poi_search_by_query_text():
    """Verify substring search by POI name or category."""
    response = client.get("/api/v1/poi/search?city=kielce&query=Żabka&limit=10")
    assert response.status_code == 200
    data = response.json()
    assert data["city"] == "kielce"
    assert "total" in data
    assert "items" in data
    assert len(data["items"]) >= 1
    first = data["items"][0]
    assert "poi_id" in first
    assert "name" in first
    assert "category" in first
    assert "w" in first
    assert "lat" in first
    assert "lon" in first


def test_poi_search_by_category():
    """Verify filtering POIs by exact category."""
    response = client.get("/api/v1/poi/search?city=kielce&category=convenience_store&limit=5")
    assert response.status_code == 200
    data = response.json()
    assert len(data["items"]) <= 5
    for item in data["items"]:
        assert item["category"] == "convenience_store"


# ==============================================================================
# 3. RCN TIME-SERIES & PRICE TRENDS TESTS (/api/v1/market/trends)
# ==============================================================================

def test_market_trends_city_wide_annual():
    """Verify annual transaction aggregation from 2020 to 2026."""
    response = client.get("/api/v1/market/trends?city=kielce&interval=year")
    assert response.status_code == 200
    data = response.json()
    assert data["city"] == "kielce"
    assert data["interval"] == "year"
    assert len(data["periods"]) >= 2
    
    first = data["periods"][0]
    assert "period" in first
    assert "tx_count" in first
    assert first["tx_count"] > 0
    assert "median_price_m2" in first
    assert first["median_price_m2"] > 1000.0


def test_market_trends_single_stop():
    """Verify stop-level transaction trend querying stop_transactions_bridge.parquet."""
    ranking_res = client.get("/api/v1/stops/ranking?city=kielce&order_by=stop_market_val&order_dir=desc&limit=1")
    assert ranking_res.status_code == 200
    stop_id = str(ranking_res.json()["items"][0]["stop_id"])
    
    response = client.get(f"/api/v1/market/trends?city=kielce&stop_id={stop_id}&interval=year")
    assert response.status_code == 200
    data = response.json()
    assert data["city"] == "kielce"
    assert data["stop_id"] == stop_id
    assert "periods" in data


# ==============================================================================
# 4. 1-HOP TRANSIT REACHABILITY TESTS (/api/v1/routes/stop/{stop_id}/destinations)
# ==============================================================================

def test_stop_destinations_1hop():
    """Verify 1-hop reachable direct destination stops from a transit stop."""
    ranking_res = client.get("/api/v1/stops/ranking?city=kielce&order_by=stop_departures_h&order_dir=desc&limit=1")
    assert ranking_res.status_code == 200
    stop_id = str(ranking_res.json()["items"][0]["stop_id"])
    
    response = client.get(f"/api/v1/routes/stop/{stop_id}/destinations?city=kielce")
    assert response.status_code == 200
    data = response.json()
    assert data["city"] == "kielce"
    assert data["from_stop_id"] == stop_id
    assert "destinations" in data
    if len(data["destinations"]) > 0:
        dest = data["destinations"][0]
        assert "to_stop_id" in dest
        assert "to_stop_name" in dest
        assert "min_travel_time_sec" in dest
        assert "routes" in dest
        assert isinstance(dest["routes"], list)


# ==============================================================================
# 5. NATIONAL METRIC DISTRIBUTION BENCHMARK (/api/v1/analytics/metric-distribution?city=all)
# ==============================================================================

def test_national_metric_distribution_all():
    """Verify that city=all computes nationwide distribution stats across 60k+ stops."""
    response = client.get("/api/v1/analytics/metric-distribution?city=all&metric=stop_departures_h")
    assert response.status_code == 200
    data = response.json()
    assert data["city"] == "all"
    assert data["metric"] == "stop_departures_h"
    assert "median" in data
    assert "mean" in data
    assert "histogram_bins" in data
    assert len(data["histogram_bins"]) == 10


# ==============================================================================
# 6. SCHEMA TYPING & PARITY TESTS
# ==============================================================================

def test_schema_parity_typed_fields():
    """Verify that StopProfileResponse contains explicit typed fields: h3_index, stop_entropy, stop_liquidity."""
    ranking_res = client.get("/api/v1/stops/ranking?city=kielce&limit=1")
    assert ranking_res.status_code == 200
    stop_id = str(ranking_res.json()["items"][0]["stop_id"])
    
    response = client.get(f"/api/v1/stops/{stop_id}?city=kielce")
    assert response.status_code == 200
    profile = response.json()
    assert "h3_index" in profile
    assert "stop_entropy" in profile
    assert "stop_liquidity" in profile
    assert "hub_raw_gravity" in profile
    assert "hub_entropy" in profile
