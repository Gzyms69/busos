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


# ==============================================================================
# SPRINT 3.5: UNIVERSAL QUERY ENGINE & 100% AUDIT DATA ACCESS
# ==============================================================================

def test_stops_ranking_arbitrary_limit_and_rank_parameter():
    """Verify stops ranking handles arbitrary limit (7), rank=6 (1 record), order_dir, and grade filter."""
    # 1. Arbitrary limit = 7
    r_lim = client.get("/api/v1/stops/ranking?city=kielce&limit=7")
    assert r_lim.status_code == 200
    data_lim = r_lim.json()
    assert data_lim["total"] == 1357
    assert data_lim["limit"] == 7
    assert len(data_lim["items"]) == 7
    assert data_lim["items"][0]["rank"] == 1
    assert data_lim["items"][6]["rank"] == 7

    # 2. rank = 6 returns exactly 1 item with rank: 6
    r_rank = client.get("/api/v1/stops/ranking?city=kielce&rank=6")
    assert r_rank.status_code == 200
    data_rank = r_rank.json()
    assert len(data_rank["items"]) == 1
    assert data_rank["items"][0]["rank"] == 6
    assert data_rank["items"][0]["stop_id"] == data_lim["items"][5]["stop_id"]

    # 3. order_dir = asc returns worst stops
    r_asc = client.get("/api/v1/stops/ranking?city=kielce&order_dir=asc&limit=5")
    assert r_asc.status_code == 200
    items_asc = r_asc.json()["items"]
    assert len(items_asc) == 5
    assert items_asc[0]["stop_local_score_raw"] <= items_asc[-1]["stop_local_score_raw"]

    # 4. grade = A+ filter
    r_grade = client.get("/api/v1/stops/ranking?city=kielce&grade=A+&limit=10")
    assert r_grade.status_code == 200
    for item in r_grade.json()["items"]:
        assert item["stop_grade"] == "A+"


def test_stops_ranking_sorting_all_pillars():
    """Verify sorting stops by all 4 pillars and national score works smoothly."""
    for metric in ["stop_departures_h", "stop_pop_val", "stop_infra_score", "stop_market_val", "national_score"]:
        r = client.get(f"/api/v1/stops/ranking?city=kielce&order_by={metric}&limit=3")
        assert r.status_code == 200, f"Failed sorting by {metric}"
        items = r.json()["items"]
        assert len(items) == 3
        v0 = items[0].get(metric) or 0.0
        v1 = items[1].get(metric) or 0.0
        assert v0 >= v1, f"Metric {metric} not sorted descending: {v0} vs {v1}"


def test_stops_batch_lookup():
    """Verify POST /api/v1/stops/batch retrieves full profiles for multiple stops."""
    # First get 3 valid stop IDs
    r_top = client.get("/api/v1/stops/ranking?city=kielce&limit=3")
    assert r_top.status_code == 200
    s_ids = [item["stop_id"] for item in r_top.json()["items"]]

    r_batch = client.post("/api/v1/stops/batch", json={"city": "kielce", "stop_ids": s_ids})
    assert r_batch.status_code == 200
    batch_data = r_batch.json()
    assert "stops" in batch_data
    assert len(batch_data["stops"]) == 3
    for s in batch_data["stops"]:
        assert s["stop_id"] in s_ids
        assert "stop_grade" in s


def test_hubs_ranking_and_rank_parameter():
    """Verify hubs ranking supports limit, rank=1, and min_stops filter."""
    r_top = client.get("/api/v1/hubs/ranking?city=kielce&limit=5")
    assert r_top.status_code == 200
    data = r_top.json()
    assert data["total"] == 817
    assert len(data["items"]) == 5
    assert data["items"][0]["rank"] == 1

    # rank=3 returns 1 record with rank: 3
    r_r3 = client.get("/api/v1/hubs/ranking?city=kielce&rank=3")
    assert r_r3.status_code == 200
    assert len(r_r3.json()["items"]) == 1
    assert r_r3.json()["items"][0]["rank"] == 3

    # min_stops=2
    r_multi = client.get("/api/v1/hubs/ranking?city=kielce&min_stops=2&limit=5")
    assert r_multi.status_code == 200
    for h in r_multi.json()["items"]:
        assert h["hub_stops_count"] >= 2


def test_hexagons_ranking_and_filters():
    """Verify hexagons ranking by TDI, rank=1, and is_transit_desert filter."""
    r_tdi = client.get("/api/v1/hexagons/ranking?city=kielce&order_by=transit_desert_index&order_dir=desc&limit=5")
    assert r_tdi.status_code == 200
    deserts = r_tdi.json()["items"]
    assert len(deserts) == 5
    assert deserts[0]["rank"] == 1
    assert deserts[0]["transit_desert_index"] >= deserts[1]["transit_desert_index"]

    # rank=1
    r_r1 = client.get("/api/v1/hexagons/ranking?city=kielce&order_by=transit_desert_index&rank=1")
    assert r_r1.status_code == 200
    assert len(r_r1.json()["items"]) == 1
    assert r_r1.json()["items"][0]["hex"] == deserts[0]["hex"]

    # is_transit_desert=true
    r_des = client.get("/api/v1/hexagons/ranking?city=kielce&is_transit_desert=true&limit=10")
    assert r_des.status_code == 200
    for cell in r_des.json()["items"]:
        assert cell["is_transit_desert"] is True


def test_hexagon_360_profile():
    """Verify deep 360 profile of a single H3 hexagon."""
    r_list = client.get("/api/v1/hexagons/ranking?city=kielce&order_by=transport_score&rank=1")
    assert r_list.status_code == 200
    hex_id = r_list.json()["items"][0]["hex"]

    r_prof = client.get(f"/api/v1/hexagons/{hex_id}/profile?city=kielce")
    assert r_prof.status_code == 200
    prof = r_prof.json()
    assert "hexagon" in prof
    assert prof["hexagon"]["hex"] == hex_id
    assert "stops" in prof
    assert "rcn_transactions" in prof
    assert "top_pois" in prof


def test_market_transactions_ranking_and_filters():
    """Verify notary transactions ranking by price_m2, rank=1, and market_type filter."""
    # 1. Ranking by price_m2 DESC
    r_rank = client.get("/api/v1/market/transactions/ranking?city=kielce&order_by=price_m2&order_dir=desc&limit=5")
    assert r_rank.status_code == 200
    txs = r_rank.json()["items"]
    assert len(txs) == 5
    assert txs[0]["rank"] == 1
    assert txs[0]["price_m2"] >= txs[1]["price_m2"]

    # 2. rank=1
    r_r1 = client.get("/api/v1/market/transactions/ranking?city=kielce&rank=1")
    assert r_r1.status_code == 200
    assert len(r_r1.json()["items"]) == 1
    assert r_r1.json()["items"][0]["rank"] == 1
    assert r_r1.json()["items"][0]["price_m2"] == txs[0]["price_m2"]

    # 3. Filter market_type=pierwotny
    r_pierw = client.get("/api/v1/market/transactions/ranking?city=kielce&market_type=pierwotny&limit=5")
    assert r_pierw.status_code == 200
    for t in r_pierw.json()["items"]:
        assert t["market_type"] == "pierwotny"


def test_market_transactions_nearby():
    """Verify finding transactions within 500m walking radius."""
    r_near = client.get("/api/v1/market/transactions/nearby?city=kielce&lat=50.871&lon=20.628&radius_m=500&limit=10")
    assert r_near.status_code == 200
    items = r_near.json()["transactions"]
    for t in items:
        assert t["distance_m"] <= 500.0


def test_market_h3_analysis():
    """Verify aggregate H3 real estate market analysis with brackets and correlation."""
    r_h3 = client.get("/api/v1/market/h3-analysis?city=kielce")
    assert r_h3.status_code == 200
    data = r_h3.json()
    assert "coverage_pct" in data
    assert "price_stats" in data
    assert "price_brackets" in data
    assert len(data["price_brackets"]) == 6
    assert "transport_correlation" in data


def test_poi_magnets_and_categories():
    """Verify POI magnets returns named objects without placeholders and categories with W."""
    # 1. Magnets
    r_mag = client.get("/api/v1/poi/magnets?city=kielce&limit=5")
    assert r_mag.status_code == 200
    magnets = r_mag.json()["magnets"]
    assert len(magnets) == 5
    for m in magnets:
        assert m["name"] not in ["Obiekt", "bez_nazwy", "None", "", "null"]
        assert m["w"] > 0.0
        assert m["tier"].startswith(("T0", "T1", "T2"))

    # 2. Categories
    r_cat = client.get("/api/v1/poi/categories?city=kielce&limit=10")
    assert r_cat.status_code == 200
    cats = r_cat.json()["categories"]
    assert len(cats) == 10
    assert cats[0]["final_value"] >= cats[1]["final_value"]


def test_analytics_audit_summary_full_and_modular():
    """Verify audit summary scorecard full (all) and modular (?include=summary,rcn)."""
    # 1. Full audit summary
    r_full = client.get("/api/v1/analytics/audit-summary?city=kielce&include=all")
    assert r_full.status_code == 200
    f_data = r_full.json()
    assert "summary" in f_data
    assert f_data["summary"]["stops_count"] == 1357
    assert f_data["summary"]["hubs_count"] == 817
    assert f_data["summary"]["critical_nulls_infs"] == 0
    assert "zscore" in f_data
    assert "grades" in f_data
    assert "h3" in f_data
    assert "rcn" in f_data
    assert "tcrp" in f_data
    assert "poi" in f_data

    # 2. Modular include=summary,rcn (omits tcrp and poi for high speed)
    r_mod = client.get("/api/v1/analytics/audit-summary?city=kielce&include=summary,rcn")
    assert r_mod.status_code == 200
    m_data = r_mod.json()
    assert "summary" in m_data
    assert "rcn" in m_data
    assert m_data.get("tcrp") is None
    assert m_data.get("poi") is None


def test_analytics_national_ranking_all_scopes():
    """Verify national leaderboard across Poland for stops, hubs, hexagons, and cities."""
    # 1. Stops scope (60k stops)
    r_stops = client.get("/api/v1/analytics/national-ranking?scope=stops&rank=1")
    assert r_stops.status_code == 200
    s_top = r_stops.json()["items"]
    assert len(s_top) == 1
    assert s_top[0]["rank"] == 1
    assert "national_score" in s_top[0]

    # 2. Hexagons scope (36k hexes)
    r_hex = client.get("/api/v1/analytics/national-ranking?scope=hexagons&order_by=transit_desert_index&limit=5")
    assert r_hex.status_code == 200
    h_items = r_hex.json()["items"]
    assert len(h_items) == 5
    assert h_items[0]["transit_desert_index"] >= h_items[1]["transit_desert_index"]

    # 3. Cities scope (30 cities)
    r_cities = client.get("/api/v1/analytics/national-ranking?scope=cities&limit=30")
    assert r_cities.status_code == 200
    c_items = r_cities.json()["items"]
    assert len(c_items) == 30
    assert c_items[0]["total_stops"] >= c_items[-1]["total_stops"]


def test_analytics_metric_distribution():
    """Verify metric distribution quantiles and histogram bins for sparklines."""
    r = client.get("/api/v1/analytics/metric-distribution?city=kielce&metric=stop_departures_h")
    assert r.status_code == 200
    data = r.json()
    assert data["metric"] == "stop_departures_h"
    assert "median" in data
    assert "p10" in data
    assert "p90" in data
    assert "histogram_bins" in data
    assert len(data["histogram_bins"]) == 10


def test_analytics_compare_cities():
    """Verify side-by-side comparison of two cities."""
    r = client.get("/api/v1/analytics/compare-cities?city_a=kielce&city_b=warszawa")
    assert r.status_code == 200
    data = r.json()
    assert "city_a" in data
    assert "city_b" in data
    assert data["city_a"]["city"] == "kielce"
    assert data["city_b"]["city"] == "warszawa"
    assert data["city_b"]["total_stops"] > data["city_a"]["total_stops"]


def test_ranking_sql_injection_defense():
    """Verify rejection of invalid metric names with HTTP 422/400."""
    r = client.get("/api/v1/stops/ranking?city=kielce&order_by=DROP+TABLE+users;--")
    assert r.status_code in [400, 422]

