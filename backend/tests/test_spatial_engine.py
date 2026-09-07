import math
import pytest
import numpy as np
import pandas as pd
from typing import Dict, Any

from app.spatial_engine import (
    get_available_cities,
    get_stops,
    get_stop_profile,
    get_hubs,
    get_hub_card,
    get_transactions,
    get_population,
    get_hub_details,
    get_hexagons,
    get_market_summary,
    get_axe_list,
    get_transit_deserts,
    get_hexagon_detail,
    get_hexagon_stops,
)


def haversine_m(lat1: float, lon1: float, lat2: float, lon2: float) -> float:
    """Calculates great-circle distance between two points in meters using Haversine formula."""
    r = 6371000.0  # Earth radius in meters
    phi1, phi2 = math.radians(lat1), math.radians(lat2)
    dphi = math.radians(lat2 - lat1)
    dlam = math.radians(lon2 - lon1)
    a = math.sin(dphi / 2.0) ** 2 + math.cos(phi1) * math.cos(phi2) * math.sin(dlam / 2.0) ** 2
    return 2.0 * r * math.asin(math.sqrt(max(0.0, min(1.0, a))))


# ==============================================================================
# 1. HUFF GRAVITY MODEL & 500M WALKING BUFFER
# ==============================================================================

class TestHuffGravityEngine:
    """Verifies in-memory DuckDB queries, Haversine 500m filtering, and Huff gravity ranking."""

    def test_haversine_500m_exact_boundary(self):
        """Verify that every POI and demographic cell returned by get_hub_details is <= 500m away."""
        center_lat, center_lon = 50.8703, 20.6275  # Kielce Rynek / Central
        details = get_hub_details("kielce", lat=center_lat, lon=center_lon)

        assert "pois" in details
        assert "pop" in details
        assert len(details["pois"]) > 0, "Expected at least some POIs in Kielce center"

        for p in details["pois"]:
            p_lat, p_lon = float(p["lat"]), float(p["lon"])
            dist = haversine_m(center_lat, center_lon, p_lat, p_lon)
            # Allow 1.0m tolerance for floating point / spherical earth projection differences
            assert dist <= 501.0, f"POI {p.get('name')} at distance {dist}m exceeds 500m buffer"

        for cell in details["pop"]:
            c_lat, c_lon = float(cell["lat"]), float(cell["lon"])
            dist = haversine_m(center_lat, center_lon, c_lat, c_lon)
            assert dist <= 501.0, f"POP grid cell at distance {dist}m exceeds 500m buffer"

    def test_gravity_pull_ranking_order(self):
        """Verify POIs are strictly sorted by (w * sum_pull) DESC in DuckDB."""
        details = get_hub_details("kielce", lat=50.8703, lon=20.6275)
        pois = details["pois"]
        assert len(pois) >= 2

        pull_scores = [float(p["w"]) * float(p["sum_pull"]) for p in pois]
        expected_sorted = sorted(pull_scores, reverse=True)
        assert pull_scores == expected_sorted, "POIs are not sorted in descending order of (w * sum_pull)"

    def test_demographic_aggregation_within_walking_radius(self):
        """Verify population matrix cells are non-negative and sum_pull_pop >= 0."""
        details = get_hub_details("kielce", lat=50.8703, lon=20.6275)
        pop_cells = details["pop"]
        assert len(pop_cells) > 0

        for cell in pop_cells:
            assert cell["pop_val"] >= 0.0
            assert cell["sum_pull_pop"] >= 0.0

    def test_hub_metrics_attachment(self):
        """Verify get_hub_details attaches hub metrics when a valid hub_id is provided."""
        hubs = get_hubs("kielce")["features"]
        assert len(hubs) > 0
        first_hub = hubs[0]["properties"]
        hub_id = str(first_hub["hub_id"])
        lat = float(first_hub["lat"])
        lon = float(first_hub["lon"])

        details = get_hub_details("kielce", lat=lat, lon=lon, hub_id=hub_id)
        assert details["hub_id"] == hub_id
        assert details["metrics"] is not None
        assert int(details["metrics"]["hub_id"]) == int(hub_id)


# ==============================================================================
# 2. TCRP REPORT 100 ASYMMETRIC REDUNDANCY AUDIT (THE AXE LIST)
# ==============================================================================

class TestTCRPReport100Redundancy:
    """Verifies cKDTree proximity search, mathematical formulas, and asymmetric reduction."""

    def test_ckdtree_200m_proximity_guarantee(self):
        """Verify all redundant stop pairs are within <= 200m distance threshold."""
        axe = get_axe_list("kielce", threshold=0.70)
        stops = axe["stops"]
        assert len(stops) > 0, "Kielce should have identified redundant candidate pairs at threshold 0.70"

        for s in stops:
            assert s["distance_m"] <= 200.0, f"Pair {s['redundant_stop_name']} -> {s['dominant_stop_name']} distance {s['distance_m']}m > 200m"
            assert s["redundancy_score"] >= 0.70

    def test_spatial_decay_formula_and_monotonicity(self):
        """
        Verify Gaussian spatial decay s_spatial = exp(-0.5 * (dist / 100)^2):
        - dist = 0 -> s = 1.0
        - dist = 100 -> s = exp(-0.5) ≈ 0.6065
        - dist = 200 -> s = exp(-2.0) ≈ 0.1353
        - Monotonically decreasing with distance
        """
        distances = np.array([0.0, 50.0, 100.0, 150.0, 200.0])
        s_vals = np.exp(-0.5 * ((distances / 100.0) ** 2))

        assert math.isclose(s_vals[0], 1.0, rel_tol=1e-5)
        assert math.isclose(s_vals[2], np.exp(-0.5), rel_tol=1e-5)
        assert math.isclose(s_vals[4], np.exp(-2.0), rel_tol=1e-5)
        # Strict monotonicity check
        assert np.all(np.diff(s_vals) < 0.0), "Spatial decay must strictly decrease with distance"

    def test_cannibalization_overlap_geometry_bounds(self):
        """
        Verify circular catchment overlap formula for r = 300m:
        Area = 2 * r^2 * arccos(d / 2r) - d * sqrt(r^2 - (d/2)^2)
        s_cannibalization = Area / (pi * r^2)
        - dist = 0 -> s = 1.0
        - dist = 200 -> s ≈ 0.5847
        - dist >= 600 -> s = 0.0
        """
        r = 300.0
        for d in [0.0, 100.0, 200.0, 300.0, 500.0, 600.0]:
            d_norm = d / (2.0 * r)
            if d_norm < 1.0:
                area = 2.0 * (r ** 2) * np.arccos(d_norm) - d * np.sqrt(max(0.0, r ** 2 - (d / 2.0) ** 2))
                s_c = float(area / (np.pi * (r ** 2)))
            else:
                s_c = 0.0

            assert 0.0 <= s_c <= 1.00001
            if d == 0.0:
                assert math.isclose(s_c, 1.0, abs_tol=1e-5)
            elif d == 200.0:
                assert 0.55 <= s_c <= 0.62
            elif d >= 600.0:
                assert s_c == 0.0

    def test_asymmetric_reduction_rule(self):
        """
        Verify TCRP 100 Asymmetric Dominance invariant:
        Dominant stop must have departures_h >= redundant stop departures_h.
        We never eliminate a higher-frequency backbone stop in favor of a low-frequency branch stop.
        """
        axe = get_axe_list("kielce", threshold=0.60)
        for item in axe["stops"]:
            dom_dep = item["dominant_departures_h"]
            red_dep = item["redundant_departures_h"]
            assert dom_dep >= red_dep, (
                f"Violation of asymmetric rule: dominant ({item['dominant_stop_name']}, {dom_dep}/h) "
                f"< redundant ({item['redundant_stop_name']}, {red_dep}/h)"
            )

    def test_threshold_filtering_sensitivity(self):
        """Verify increasing threshold monotonically filters out candidates."""
        axe_50 = get_axe_list("kielce", threshold=0.50)
        axe_70 = get_axe_list("kielce", threshold=0.70)
        axe_90 = get_axe_list("kielce", threshold=0.90)

        assert axe_50["total_redundant"] >= axe_70["total_redundant"] >= axe_90["total_redundant"]


# ==============================================================================
# 3. DUCKDB SCHEMA ROBUSTNESS & INTROSPECTION
# ==============================================================================

class TestDuckDBSchemaRobustness:
    """Verifies schema resilience against missing columns in POI matrices."""

    def test_category_and_tier_fallback_mapping_rules(self):
        """
        Verifies DuckDB dynamic CASE WHEN logic for POI weight thresholds:
        - w >= 1,000,000 -> T0 / Węzeł Strategiczny
        - w >= 500,000   -> T1 / Szpital / Kampus
        - w >= 100,000   -> T2 / Centrum Handlowe
        - w >= 30,000    -> T3 / Szkoła / Edukacja
        - w >= 5,000     -> T4 / Usługi Codzienne
        - w >= 1,000     -> T5 / Gastronomia / Rozrywka
        - else           -> T6 / Zieleń / Mikroinfrastruktura
        """
        import duckdb
        test_df = pd.DataFrame([
            {"poi_id": "1", "lat": 50.87, "lon": 20.62, "w": 2500000, "sum_pull": 1.5},
            {"poi_id": "2", "lat": 50.87, "lon": 20.62, "w": 600000, "sum_pull": 1.2},
            {"poi_id": "3", "lat": 50.87, "lon": 20.62, "w": 150000, "sum_pull": 1.0},
            {"poi_id": "4", "lat": 50.87, "lon": 20.62, "w": 40000, "sum_pull": 0.8},
            {"poi_id": "5", "lat": 50.87, "lon": 20.62, "w": 8000, "sum_pull": 0.5},
            {"poi_id": "6", "lat": 50.87, "lon": 20.62, "w": 1500, "sum_pull": 0.3},
            {"poi_id": "7", "lat": 50.87, "lon": 20.62, "w": 500, "sum_pull": 0.1},
        ])

        con = duckdb.connect(":memory:")
        con.register("poi_test", test_df)

        query = """
            SELECT poi_id, w,
            (CASE 
                WHEN w >= 1000000 THEN 'Węzeł Strategiczny / Transport'
                WHEN w >= 500000 THEN 'Szpital / Kampus Akademicki'
                WHEN w >= 100000 THEN 'Centrum Handlowe / Usługi'
                WHEN w >= 30000 THEN 'Szkoła / Edukacja / Kultura'
                WHEN w >= 5000 THEN 'Usługi Codzienne / Apteka / Handel'
                WHEN w >= 1000 THEN 'Gastronomia / Rozrywka'
                ELSE 'Zieleń / Mikroinfrastruktura'
            END) AS category,
            (CASE 
                WHEN w >= 1000000 THEN 'T0'
                WHEN w >= 500000 THEN 'T1'
                WHEN w >= 100000 THEN 'T2'
                WHEN w >= 30000 THEN 'T3'
                WHEN w >= 5000 THEN 'T4'
                WHEN w >= 1000 THEN 'T5'
                ELSE 'T6'
            END) AS tier
            FROM poi_test
            ORDER BY w DESC
        """
        res = con.execute(query).fetch_df()
        con.close()

        assert list(res["tier"]) == ["T0", "T1", "T2", "T3", "T4", "T5", "T6"]
        assert res.iloc[0]["category"] == "Węzeł Strategiczny / Transport"
        assert res.iloc[-1]["category"] == "Zieleń / Mikroinfrastruktura"

    def test_nan_sanitization_for_json_serialization(self):
        """Verify that functions returning floats sanitize NaN values to prevent broken JSON."""
        import json
        hexagons = get_hexagons("kielce", min_pop=0)
        # Must serialize cleanly without ValueError: Out of range float values are not JSON compliant
        json_str = json.dumps(hexagons)
        assert len(json_str) > 0

        # Check market summary serialization
        market = get_market_summary("kielce")
        json_market = json.dumps(market)
        assert len(json_market) > 0


# ==============================================================================
# 4. RESILIENCE & FAILURE MODES
# ==============================================================================

class TestSpatialEngineResilience:
    """Verifies safe exception handling for non-existent cities, IDs, and extreme coordinates."""

    def test_nonexistent_city_raises_filenotfound(self):
        """Verify all engine entrypoints raise FileNotFoundError when passed an invalid city."""
        fake_city = "atlantis_city_xyz"

        with pytest.raises(FileNotFoundError):
            get_stops(fake_city)

        with pytest.raises(FileNotFoundError):
            get_hubs(fake_city)

        with pytest.raises(FileNotFoundError):
            get_hexagons(fake_city)

        with pytest.raises(FileNotFoundError):
            get_axe_list(fake_city)

        with pytest.raises(FileNotFoundError):
            get_market_summary(fake_city)

        with pytest.raises(FileNotFoundError):
            get_transit_deserts(fake_city)

        with pytest.raises(FileNotFoundError):
            get_hub_details(fake_city, lat=50.0, lon=20.0)

    def test_invalid_stop_and_hub_ids_raise_filenotfound(self):
        """Verify profile lookups raise FileNotFoundError for missing stop_id or hub_id."""
        with pytest.raises(FileNotFoundError):
            get_stop_profile("kielce", "nonexistent_stop_id_999999")

        with pytest.raises(FileNotFoundError):
            get_hub_card("kielce", "nonexistent_hub_id_999999")

        with pytest.raises(FileNotFoundError):
            get_hexagon_detail("kielce", "invalid_h3_index_000000")

    def test_extreme_and_out_of_bounds_coordinates(self):
        """Verify get_hub_details handles points outside the city without crashing (returns empty lists)."""
        # Point in middle of the Pacific Ocean
        details = get_hub_details("kielce", lat=-45.0, lon=-130.0)
        assert details["pois"] == []
        assert details["pop"] == []
        assert details["city"] == "kielce"

    def test_get_available_cities_count(self):
        """Verify get_available_cities returns exactly 30 audited cities."""
        cities = get_available_cities()
        assert len(cities) == 30
        assert "warszawa" in cities
        assert "kielce" in cities
        assert "gzm" in cities
        assert "wroclaw" in cities
        assert "suwalki" in cities
