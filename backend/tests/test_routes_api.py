"""
Integration tests for routes API endpoints.
"""

import pytest
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_routes_endpoint_nonexistent_city():
    response = client.get("/api/v1/routes?city=nonexistent_city_xyz")
    assert response.status_code == 404

def test_routes_geometry_nonexistent_city():
    response = client.get("/api/v1/routes/geometry?city=nonexistent_city_xyz")
    assert response.status_code == 404

def test_market_stops_summary_api():
    response = client.get("/api/v1/market/stops-summary?city=nonexistent_city_xyz")
    assert response.status_code == 200
    assert response.json() == {}

def test_stop_serving_routes_enriched():
    response = client.get("/api/v1/routes/stop/596?city=kielce")
    assert response.status_code == 200
    data = response.json()
    assert isinstance(data, list)
    if data:
        first = data[0]
        assert "short_name" in first
        assert "color" in first
        assert "route_id" in first

