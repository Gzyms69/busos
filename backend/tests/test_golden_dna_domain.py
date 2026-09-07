import os
import math
import sqlite3
import pytest
import numpy as np
import pandas as pd
import geopandas as gpd
from pathlib import Path

DATA_DIR = Path("data")
CITIES_DIR = DATA_DIR / "cities"
MASTER_GPKG = DATA_DIR / "database" / "master_stop_dna_poland.gpkg"

# 5 Tier Reference Cities: Mega, Regional, Polycentric, Baseline, Edge
TIER_SAMPLE_CITIES = ["warszawa", "wroclaw", "gzm", "kielce", "suwalki"]


# ==============================================================================
# 1. GOLDEN DNA STATISTICAL SANITY & ZERO-DAMAGE ASSERTIONS
# ==============================================================================

class TestGoldenDNASanity:
    """
    Verifies that Stop DNA calculations follow the Golden Audit Standard:
    Zero NaNs/Infs, Gaussian Z-Score distribution, and uncompressed percentiles.
    """

    @pytest.mark.parametrize("city", TIER_SAMPLE_CITIES)
    def test_zero_nulls_and_infs_in_stop_dna(self, city: str):
        """Verify 0 NaNs and 0 Infs in critical calculation columns of stop_dna.gpkg."""
        gpkg_path = CITIES_DIR / city / "04_results" / "stop_dna.gpkg"
        assert gpkg_path.exists(), f"Missing stop_dna.gpkg for {city}"

        con = sqlite3.connect(f"file:{gpkg_path}?mode=ro", uri=True)
        df = pd.read_sql_query("SELECT * FROM stop_dna", con)
        con.close()

        critical_cols = [
            "stop_infra_score",
            "stop_raw_gravity",
            "stop_departures_h",
            "stop_market_val",
            "stop_pop_val",
            "stop_local_score_raw",
            "stop_percentile",
            "stop_hub_share"
        ]

        for col in critical_cols:
            assert col in df.columns, f"Column {col} missing in {city} stop_dna"
            nan_count = df[col].isna().sum()
            assert nan_count == 0, f"Found {nan_count} NaNs in {city}.{col}"
            inf_count = np.isinf(df[col].astype(float)).sum()
            assert inf_count == 0, f"Found {inf_count} Infs in {city}.{col}"

    @pytest.mark.parametrize("city", TIER_SAMPLE_CITIES)
    def test_zscore_gaussian_distribution_per_city(self, city: str):
        """
        Verify that city Z-Score (local_score_raw) over unique hubs forms a healthy Gaussian:
        - Mean must be close to 0: -0.5 <= mean <= 0.5
        - Std must be close to 1: 0.5 <= std <= 1.5
        """
        gpkg_path = CITIES_DIR / city / "04_results" / "hubs.gpkg"
        if not gpkg_path.exists():
            gpkg_path = CITIES_DIR / city / "04_results" / "stop_dna.gpkg"

        con = sqlite3.connect(f"file:{gpkg_path}?mode=ro", uri=True)
        df = pd.read_sql_query("SELECT * FROM hubs" if "hubs.gpkg" in str(gpkg_path) else "SELECT * FROM stop_dna", con)
        con.close()

        score_col = "hub_local_score_raw" if "hub_local_score_raw" in df.columns else "local_score_raw"
        unique_scores = df.drop_duplicates(subset=["hub_id"])[score_col].astype(float)

        mean_val = float(unique_scores.mean())
        std_val = float(unique_scores.std())

        assert -0.50 <= mean_val <= 0.50, f"{city}: Z-score mean {mean_val:.4f} is outside [-0.5, 0.5]"
        assert 0.50 <= std_val <= 1.50, f"{city}: Z-score std {std_val:.4f} is outside [0.5, 1.5]"

    @pytest.mark.parametrize("city", TIER_SAMPLE_CITIES)
    def test_percentiles_distribution_spread(self, city: str):
        """Verify local percentiles cover the full spectrum [0, 100] without statistical compression."""
        gpkg_path = CITIES_DIR / city / "04_results" / "stop_dna.gpkg"
        con = sqlite3.connect(f"file:{gpkg_path}?mode=ro", uri=True)
        df = pd.read_sql_query("SELECT stop_percentile FROM stop_dna", con)
        con.close()

        p_min = float(df["stop_percentile"].min())
        p_max = float(df["stop_percentile"].max())

        assert p_min <= 2.0, f"{city}: Minimum percentile {p_min:.2f}% is too high (compressed distribution)"
        assert p_max >= 98.0, f"{city}: Maximum percentile {p_max:.2f}% is too low (compressed distribution)"

    @pytest.mark.parametrize("city", TIER_SAMPLE_CITIES)
    def test_grade_distribution_entropy(self, city: str):
        """Verify that grades {A+, A, B, C, D, F} are well-distributed without classifier collapse."""
        gpkg_path = CITIES_DIR / city / "04_results" / "stop_dna.gpkg"
        con = sqlite3.connect(f"file:{gpkg_path}?mode=ro", uri=True)
        df = pd.read_sql_query("SELECT stop_grade FROM stop_dna", con)
        con.close()

        grades = set(df["stop_grade"].unique())
        expected_grades = {"A+", "A", "B", "C", "D", "F"}
        assert grades == expected_grades, f"{city} is missing grades: {expected_grades - grades}"

        # No single grade should dominate > 60% of the city stops
        counts = df["stop_grade"].value_counts(normalize=True)
        for grade, ratio in counts.items():
            assert ratio < 0.60, f"{city}: Grade {grade} has degenerate proportion {ratio * 100:.1f}% > 60%"


# ==============================================================================
# 2. NATIONAL DATABASE STITCHING (MASTER STOP DNA POLAND)
# ==============================================================================

class TestNationalDatabaseStitching:
    """Verifies master_stop_dna_poland.gpkg national cohesion, ranking, and percentiles."""

    def test_master_poland_database_cohesion(self):
        """Verify nationwide stitched database spans all 30 cities and >= 50,000 stops."""
        assert MASTER_GPKG.exists(), f"Master database missing at {MASTER_GPKG}"

        con = sqlite3.connect(f"file:{MASTER_GPKG}?mode=ro", uri=True)
        cur = con.cursor()
        cur.execute("SELECT COUNT(*), COUNT(DISTINCT city_context) FROM master_stop_dna_poland")
        total_stops, total_cities = cur.fetchone()

        cur.execute("""
            SELECT 
                MIN(national_percentile), 
                MAX(national_percentile),
                COUNT(CASE WHEN national_percentile IS NULL THEN 1 END)
            FROM master_stop_dna_poland
        """)
        n_min, n_max, nulls = cur.fetchone()
        con.close()

        assert total_stops > 50000, f"Expected > 50,000 stops in Poland, got {total_stops}"
        assert total_cities == 30, f"Expected exactly 30 cities in master DB, got {total_cities}"
        assert nulls == 0, f"Found {nulls} NULLs in national_percentile"
        assert n_min <= 1.0, f"National percentile min {n_min} > 1.0%"
        assert n_max >= 99.0, f"National percentile max {n_max} < 99.0%"


# ==============================================================================
# 3. PHYSICAL GEOGRAPHY & TERRITORIAL BOUNDS (WGS84 POLAND)
# ==============================================================================

class TestPhysicalGeographyBounds:
    """Verifies that 100% of spatial entities lie strictly within the territory of Poland."""

    @pytest.mark.parametrize("city", TIER_SAMPLE_CITIES)
    def test_wgs84_poland_coordinates_envelope(self, city: str):
        """
        Verify all stops in stop_dna.gpkg are within the territory of Poland:
        Latitude: 49.0°N - 55.0°N
        Longitude: 14.0°E - 24.5°E
        """
        gpkg_path = CITIES_DIR / city / "04_results" / "stop_dna.gpkg"
        con = sqlite3.connect(f"file:{gpkg_path}?mode=ro", uri=True)
        df = pd.read_sql_query("SELECT stop_lat, stop_lon FROM stop_dna", con)
        con.close()

        assert (df["stop_lat"] >= 49.0).all() and (df["stop_lat"] <= 55.0).all(), (
            f"{city} contains latitudes outside Poland: min={df['stop_lat'].min()}, max={df['stop_lat'].max()}"
        )
        assert (df["stop_lon"] >= 14.0).all() and (df["stop_lon"] <= 24.5).all(), (
            f"{city} contains longitudes outside Poland: min={df['stop_lon'].min()}, max={df['stop_lon'].max()}"
        )


# ==============================================================================
# 4. ECONOMIC & DEMOGRAPHIC REALISM
# ==============================================================================

class TestEconomicAndDemographicRealism:
    """Verifies real-world boundaries for real estate transactions and GUS census population."""

    @pytest.mark.parametrize("city", TIER_SAMPLE_CITIES)
    def test_rcn_market_prices_within_realistic_bounds(self, city: str):
        """
        Verify RCN median price m2 and trimmed mean reflect Polish economic reality:
        - 2,500 PLN/m² <= median <= 40,000 PLN/m²
        - min_valid <= median <= max_allowed
        """
        import json
        rcn_stats_path = CITIES_DIR / city / "02_spatial" / "rcn_stats.json"
        if not rcn_stats_path.exists():
            pytest.skip(f"No rcn_stats.json for {city}")

        with open(rcn_stats_path, "r", encoding="utf-8") as f:
            stats = json.load(f)

        med = float(stats.get("median_price_m2", 0))
        assert 2500.0 <= med <= 40000.0, f"{city}: Median price {med} PLN/m² is economically unrealistic"
        assert stats["min_valid"] <= med <= stats["max_allowed"], f"{city}: Median price outside IQR bounds"

    @pytest.mark.parametrize("city", TIER_SAMPLE_CITIES)
    def test_population_catchment_density_bounds(self, city: str):
        """
        Verify stop demographic values (stop_pop_val) in 500m buffer:
        - Must be non-negative: pop_val >= 0
        - Must not exceed maximum urban density for 500m circle (~0.785 km²): <= 40,000 residents
        """
        gpkg_path = CITIES_DIR / city / "04_results" / "stop_dna.gpkg"
        con = sqlite3.connect(f"file:{gpkg_path}?mode=ro", uri=True)
        df = pd.read_sql_query("SELECT stop_pop_val FROM stop_dna", con)
        con.close()

        assert (df["stop_pop_val"] >= 0.0).all(), f"{city} has negative population values"
        max_pop = float(df["stop_pop_val"].max())
        assert max_pop <= 40000.0, f"{city} has impossible population in 500m catchment: {max_pop:,.0f} residents"


# ==============================================================================
# 5. TRANSIT DESERT INDEX (TDI) & H3 GRID FORMULAS
# ==============================================================================

class TestTransitDesertIndexLogic:
    """Verifies mathematical consistency of the Transit Desert Index in Uber H3 cells."""

    @pytest.mark.parametrize("city", ["kielce", "warszawa", "wroclaw"])
    def test_tdi_formula_and_desert_flag(self, city: str):
        """
        Verify in h3_grid.parquet:
        - is_transit_desert == True IFF (pop_total >= 150 AND total_departures_h < 4.0)
        - TDI formula: ln(1 + pop_total) / ln(1 + total_departures_h + 0.1)
        - transport_score is bounded in [0.0, 100.0]
        """
        h3_path = CITIES_DIR / city / "04_results" / "h3_grid.parquet"
        assert h3_path.exists(), f"Missing h3_grid.parquet for {city}"

        df = pd.read_parquet(h3_path)

        # 1. Flag consistency
        expected_flag = (df["pop_total"] >= 150.0) & (df["total_departures_h"] < 4.0)
        mismatches = (df["is_transit_desert"] != expected_flag).sum()
        assert mismatches == 0, f"{city}: Found {mismatches} mismatches in is_transit_desert flag"

        # 2. Score bounds
        assert (df["transport_score"] >= 0.0).all() and (df["transport_score"] <= 100.0).all(), (
            f"{city}: transport_score out of bounds [0, 100]"
        )

        # 3. TDI calculation check
        sample = df.head(50)
        for _, row in sample.iterrows():
            pop = float(row["pop_total"])
            dep = float(row["total_departures_h"])
            expected_tdi = round(math.log1p(pop) / math.log1p(dep + 0.1), 3)
            actual_tdi = float(row["transit_desert_index"])
            assert math.isclose(expected_tdi, actual_tdi, abs_tol=1e-3), (
                f"TDI formula mismatch: expected {expected_tdi:.3f}, got {actual_tdi:.3f}"
            )
