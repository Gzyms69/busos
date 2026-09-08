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
