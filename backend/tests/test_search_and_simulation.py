import pytest
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)


def test_stops_search_miechowity_krakow():
    """Verify searching for 'miechowity' in Krakow returns physical stops with Stop DNA ranking."""
    response = client.get("/api/v1/stops/search?city=krakow&query=miechowity&limit=20")
    assert response.status_code == 200, f"Search failed with {response.status_code}: {response.text}"
    data = response.json()
    assert "items" in data
    assert data["total"] >= 1
    items = data["items"]
    # Verify Miechowity stops are returned
    names = [it["stop_name"].lower() for it in items]
    assert any("miechowity" in name for name in names), f"Expected 'miechowity' in results, got: {names}"
    
    # Check stop routes and metadata
    routes_all = " ".join([it.get("stop_routes", "") for it in items])
    assert any(line in routes_all for line in ["128", "152", "182", "184", "482"]), (
        f"Expected typical Miechowity routes in stops, found: {routes_all}"
    )


def test_stops_ranking_with_query():
    """Verify that /api/v1/stops/ranking accepts query parameter and filters properly."""
    response = client.get("/api/v1/stops/ranking?city=krakow&query=miechowity&limit=10")
    assert response.status_code == 200, f"Ranking with query failed: {response.text}"
    data = response.json()
    assert "items" in data
    assert len(data["items"]) > 0
    for item in data["items"]:
        match = (
            "miechowity" in item["stop_name"].lower()
            or "miechowity" in item.get("hub_name", "").lower()
            or "miechowity" in item.get("stop_routes", "").lower()
            or "miechowity" in item.get("stop_id", "").lower()
        )
        assert match, f"Stop item {item} did not match search query 'miechowity'"


def test_simulation_math_mode_krakow():
    """Verify /api/v1/simulation/krakow?mode=math returns mathematical model simulation."""
    response = client.get("/api/v1/simulation/krakow?mode=math")
    assert response.status_code == 200, f"Simulation math failed: {response.status_code}: {response.text}"
    data = response.json()
    assert data["city"] == "krakow"
    assert "trips" in data
    assert len(data["trips"]) > 0
    assert "total_trips" in data
    assert data["total_trips"] > 0
    assert "Cache-Control" in response.headers


def test_simulation_gps_mode_krakow():
    """Verify /api/v1/simulation/krakow?mode=gps returns full GPS traces or fallback."""
    response = client.get("/api/v1/simulation/krakow?mode=gps")
    assert response.status_code == 200, f"Simulation gps failed: {response.status_code}: {response.text}"
    data = response.json()
    assert data["city"] == "krakow"
    assert "trips" in data
    assert len(data["trips"]) > 0


def test_simulation_invalid_city():
    """Verify invalid city returns 404."""
    response = client.get("/api/v1/simulation/nonexistent_city_xyz?mode=math")
    assert response.status_code == 404


def test_simulation_invalid_mode():
    """Verify invalid mode returns 422 validation error."""
    response = client.get("/api/v1/simulation/krakow?mode=invalid_mode")
    assert response.status_code == 422
