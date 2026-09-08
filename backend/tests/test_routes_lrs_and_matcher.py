"""
Integration tests for Sprint 3.7:
Transit Route Details, Search, LRS (EPSG:2180), and OSM Map-Matching.
"""

import pytest
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)


def test_routes_search_endpoint_kielce():
    res = client.get("/api/v1/routes/search?city=kielce&query=34")
    assert res.status_code == 200
    data = res.json()
    assert isinstance(data, list)
    assert len(data) >= 1
    sample = data[0]
    assert sample["short_name"] == "34"
    assert "route_uid" in sample
    assert "total_trips" not in sample # renamed to daily_trips
    assert "daily_trips" in sample
    assert "commercial_speed_kmh" in sample


def test_routes_search_empty_query():
    res = client.get("/api/v1/routes/search?city=kielce&limit=10")
    assert res.status_code == 200
    data = res.json()
    assert len(data) == 10


def test_routes_details_pure_transit_contract_kielce():
    # 1. First find a route_uid
    search_res = client.get("/api/v1/routes/search?city=kielce&query=34")
    assert search_res.status_code == 200
    route_uid = search_res.json()[0]["route_uid"]

    # 2. Query details
    res = client.get(f"/api/v1/routes/{route_uid}/details?city=kielce")
    assert res.status_code == 200
    data = res.json()

    # Core transit identity
    assert data["route_uid"] == route_uid
    assert data["short_name"] == "34"
    assert data["type_name"] in ["Autobus", "Tramwaj", "Kolej"]
    assert "headsign" in data

    # SRP Check: No Stop DNA or RCN polluting pure transit routes
    assert "grade" not in data
    assert "stop_market_val" not in data
    assert "local_score_raw" not in data

    # Timetable and physical telemetry
    assert data["total_length_km"] > 0
    assert data["commercial_speed_kmh"] > 0
    assert "service_hours" in data
    assert "first_departure" in data["service_hours"]
    assert "last_departure" in data["service_hours"]

    # Geometry LineString
    assert data["geometry"] is not None
    assert data["geometry"]["type"] == "LineString"
    assert len(data["geometry"]["coordinates"]) >= 2

    # Stop Sequence
    stops = data["stops"]
    assert len(stops) >= 2
    assert stops[0]["sequence"] == 1
    assert stops[0]["is_terminal"] is True
    assert stops[0]["segment_distance_m"] == 0.0
    assert stops[0]["cumulative_distance_km"] == 0.0

    assert stops[-1]["sequence"] == len(stops)
    assert stops[-1]["is_terminal"] is True
    assert stops[-1]["cumulative_distance_km"] > 0

    # Ensure stops don't leak RCN or DNA
    for s in stops[:3]:
        assert "grade" not in s
        assert "stop_market_val" not in s
        assert "stop_id" in s
        assert "stop_name" in s


def test_routes_details_gizycko_osm_matcher():
    # Giżycko has NO shapes.txt in GTFS, relies on OSM Transit Router
    search_res = client.get("/api/v1/routes/search?city=gizycko")
    assert search_res.status_code == 200
    data = search_res.json()
    assert len(data) >= 1
    route_uid = data[0]["route_uid"]

    res = client.get(f"/api/v1/routes/{route_uid}/details?city=gizycko")
    assert res.status_code == 200
    details = res.json()

    assert details["geometry_source"] in ["osm_matched", "osm_hybrid", "direct_fallback"]
    assert details["total_length_km"] > 0
    assert len(details["stops"]) >= 2
    assert details["geometry"]["type"] == "LineString"


def test_routes_edges_lrs_telemetry():
    res = client.get("/api/v1/routes/edges?city=kielce")
    assert res.status_code == 200
    edges = res.json()
    assert len(edges) > 0
    e = edges[0]
    assert "distance_m" in e
    assert "speed_kmh" in e
    assert "is_distance_real" in e
    assert e["distance_m"] > 0
    assert e["speed_kmh"] > 0


def test_routes_details_nonexistent():
    res = client.get("/api/v1/routes/nonexistent_route_uid/details?city=kielce")
    assert res.status_code == 404
