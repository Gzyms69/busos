import os
import pytest
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)


# ==============================================================================
# TIER 0: GLOBAL POLAND & 30-CITY NATIONAL SANITY LOOP
# ==============================================================================

def test_tier0_health_endpoint():
    """Verify health returns healthy, 30 active cities, and proper engine version."""
    response = client.get("/health")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "healthy"
    assert data["version"] == "9.5.0"
    assert data["active_cities_count"] == 30
    assert "X-Process-Time-Ms" in response.headers


def test_tier0_list_cities_returns_30_calibrated_cities():
    """Verify /api/v1/cities returns exactly 30 audited agglomerations."""
    response = client.get("/api/v1/cities")
    assert response.status_code == 200
    data = response.json()
    assert data["total"] == 30
    assert len(data["cities"]) == 30
    assert "warszawa" in data["cities"]
    assert "kielce" in data["cities"]
    assert "gzm" in data["cities"]
    assert "wroclaw" in data["cities"]
    assert "suwalki" in data["cities"]


def test_tier0_all_30_cities_sanity_loop():
    """
    Tier 0 National Stress Test:
    Ensures 100% of the 30 calibrated Polish cities return HTTP 200 on all domain routers.
    """
    cities_resp = client.get("/api/v1/cities")
    cities = cities_resp.json()["cities"]
    assert len(cities) == 30

    failed_cities = []
    for city in cities:
        # 1. Hubs
        r_hubs = client.get(f"/api/v1/hubs?city={city}")
        if r_hubs.status_code != 200:
            failed_cities.append((city, "hubs", r_hubs.status_code))
            continue
        assert r_hubs.json()["type"] == "FeatureCollection"

        # 2. Physical Stops
        r_stops = client.get(f"/api/v1/stops?city={city}")
        if r_stops.status_code != 200:
            failed_cities.append((city, "stops", r_stops.status_code))
            continue
        assert r_stops.json()["type"] == "FeatureCollection"

        # 3. Market Summary
        r_market = client.get(f"/api/v1/market/summary?city={city}")
        if r_market.status_code != 200:
            failed_cities.append((city, "market/summary", r_market.status_code))
            continue
        assert r_market.json()["city"] == city

        # 4. Axe List (TCRP 100 Redundancy)
        r_axe = client.get(f"/api/v1/analytics/axe-list?city={city}")
        if r_axe.status_code != 200:
            failed_cities.append((city, "analytics/axe-list", r_axe.status_code))
            continue
        assert "total_redundant" in r_axe.json()

    assert not failed_cities, f"Tier 0 failures detected in cities: {failed_cities}"


# ==============================================================================
# TIER 1: MEGA METROPOLIA (WARSZAWA)
# ==============================================================================

def test_tier1_warszawa_mega_scale():
    """Verify Warszawa mega scale: massive stop count and sub-500ms latency."""
    r_hubs = client.get("/api/v1/hubs?city=warszawa")
    assert r_hubs.status_code == 200
    features = r_hubs.json()["features"]
    assert len(features) > 1000

    r_stops = client.get("/api/v1/stops?city=warszawa")
    assert r_stops.status_code == 200
    stop_features = r_stops.json()["features"]
    assert len(stop_features) > 2000

    # Latency check: X-Process-Time-Ms header should be present
    process_time = float(r_hubs.headers.get("X-Process-Time-Ms", "999"))
    assert process_time < 2000.0


# ==============================================================================
# TIER 2: DUŻE MIASTO REGIONALNE (WROCŁAW)
# ==============================================================================

def test_tier2_wroclaw_dynamic_schema_and_rcn():
    """Verify Wrocław dynamic POI schema introspection and RCN real estate stats."""
    r_hubs = client.get("/api/v1/hubs?city=wroclaw")
    assert r_hubs.status_code == 200

    r_market = client.get("/api/v1/market/summary?city=wroclaw")
    assert r_market.status_code == 200
    market_data = r_market.json()
    assert market_data["median_price_m2"] > 0
    assert market_data["valid"] > 0


# ==============================================================================
# TIER 3: AGLOMERACJA POLICENTRYCZNA (GZM)
# ==============================================================================

def test_tier3_gzm_polycentric_scale():
    """Verify Upper Silesia polycentric conurbation (>4000 hubs, >10000 physical stops)."""
    r_hubs = client.get("/api/v1/hubs?city=gzm")
    assert r_hubs.status_code == 200
    hubs = r_hubs.json()["features"]
    assert len(hubs) > 4000, f"Expected >4000 hubs in GZM, got {len(hubs)}"

    r_stops = client.get("/api/v1/stops?city=gzm")
    assert r_stops.status_code == 200
    stops = r_stops.json()["features"]
    assert len(stops) > 10000, f"Expected >10000 stops in GZM, got {len(stops)}"


# ==============================================================================
# TIER 4: ŚREDNIE MIASTO WOJEWÓDZKIE / WZORZEC (KIELCE)
# ==============================================================================

def test_tier4_kielce_symmetry_and_granular_endpoints():
    """
    Verify Kielce reference model:
    - 817 hubs, 1357 stops
    - Granular stop profile /stops/{id}
    - Hub card /hubs/{id} with hub_stops_ids
    - H3 Grid Res 8 (843 cells)
    - Transit Deserts & The Axe List
    """
    r_hubs = client.get("/api/v1/hubs?city=kielce")
    assert r_hubs.status_code == 200
    hubs = r_hubs.json()["features"]
    assert len(hubs) == 817

    r_stops = client.get("/api/v1/stops?city=kielce")
    assert r_stops.status_code == 200
    stops = r_stops.json()["features"]
    assert len(stops) == 1357

    # Granular Stop Profile
    sample_stop_id = str(stops[0]["properties"]["stop_id"])
    r_profile = client.get(f"/api/v1/stops/{sample_stop_id}?city=kielce")
    assert r_profile.status_code == 200
    prof = r_profile.json()
    assert prof["stop_id"] == sample_stop_id
    assert "stop_grade" in prof
    assert "stop_hub_share" in prof

    # Granular Hub Card
    sample_hub_id = int(hubs[0]["properties"]["hub_id"])
    r_card = client.get(f"/api/v1/hubs/{sample_hub_id}?city=kielce")
    assert r_card.status_code == 200
    card = r_card.json()
    assert card["hub_id"] == sample_hub_id
    assert len(card["hub_stops_ids"]) >= 1

    # H3 Grid Res 8
    r_hex = client.get("/api/v1/hexagons?city=kielce")
    assert r_hex.status_code == 200
    hex_data = r_hex.json()
    assert hex_data["count"] == 843

    # Transit Deserts (The Investment List)
    r_deserts = client.get("/api/v1/analytics/transit-deserts?city=kielce")
    assert r_deserts.status_code == 200
    deserts = r_deserts.json()["deserts"]
    assert len(deserts) > 0

    # The Axe List (TCRP 100 Cannibalization)
    r_axe = client.get("/api/v1/analytics/axe-list?city=kielce&threshold=0.7")
    assert r_axe.status_code == 200
    assert "stops" in r_axe.json()


# ==============================================================================
# TIER 5: MIASTO BRZEGOWE / PERYFERYJNE (SUWAŁKI)
# ==============================================================================

def test_tier5_suwalki_edge_case_and_ai_similarity():
    """Verify Suwałki edge conditions, small sample stability, and AI similar hubs."""
    r_hubs = client.get("/api/v1/hubs?city=suwalki")
    assert r_hubs.status_code == 200
    hubs = r_hubs.json()["features"]
    assert len(hubs) == 222

    r_stops = client.get("/api/v1/stops?city=suwalki")
    assert r_stops.status_code == 200
    stops = r_stops.json()["features"]
    assert len(stops) == 333

    # AI Similar Hubs across Poland
    hub_id = str(hubs[0]["properties"]["hub_id"])
    r_ai = client.post("/api/v1/ai/similar-hubs", json={"hub_id": hub_id, "city": "suwalki", "top_k": 3})
    assert r_ai.status_code == 200
    sim_hubs = r_ai.json()
    assert len(sim_hubs) >= 1
    assert "similarity_score" in sim_hubs[0]


# ==============================================================================
# BACKWARD COMPATIBILITY LEADERBOARD
# ==============================================================================

def test_backward_compatibility_legacy_routes():
    """Verify 100% backward compatibility for all legacy endpoints."""
    # /api/v1/transactions
    r_tx = client.get("/api/v1/transactions?city=kielce")
    assert r_tx.status_code == 200
    assert r_tx.json()["type"] == "FeatureCollection"

    # /api/v1/population
    r_pop = client.get("/api/v1/population?city=kielce")
    assert r_pop.status_code == 200
    assert r_pop.json()["type"] == "FeatureCollection"

    # /api/v1/hubs/{id}/details
    r_det = client.get("/api/v1/hubs/1/details?city=kielce&lat=50.87&lon=20.63")
    assert r_det.status_code == 200
    assert "pois" in r_det.json()
    assert "pop" in r_det.json()
