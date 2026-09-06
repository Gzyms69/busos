"""
Testy jednostkowe dla kluczowych funkcji platformy BusOS (SSOT & Pipeline).
Uruchamianie: uv run pytest tests/ -v
"""

import importlib.util
from pathlib import Path

import pandas as pd
import pytest

from scripts.utils.constants import CITY_BASELINES, TIER_POINTS
from scripts.utils.geo import normalize_name, parse_hstore

PROJECT_ROOT = Path(__file__).resolve().parent.parent


def _import_valuation_funcs():
    """Importuje funkcje analityczne z 14_build_isc_valuation.py bez side-effectów."""
    script_path = PROJECT_ROOT / "scripts" / "pipeline" / "14_build_isc_valuation.py"
    spec = importlib.util.spec_from_file_location("isc_valuation", script_path)
    assert spec is not None and spec.loader is not None
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod.parse_hstore, mod.identify_v7_9_tag


# ============================================================
# 1. Testy parsera HSTORE (scripts.utils.geo)
# ============================================================
class TestParseHstore:
    """Testy parsera tagów HSTORE OpenStreetMap."""

    def test_none_and_nan(self):
        assert parse_hstore(None) == {}
        assert parse_hstore(float("nan")) == {}
        assert parse_hstore("None") == {}
        assert parse_hstore("nan") == {}

    def test_empty_string(self):
        assert parse_hstore("") == {}
        assert parse_hstore("   ") == {}

    def test_basic_quoted(self):
        result = parse_hstore('"amenity"=>"hospital","name"=>"Szpital"')
        assert result["amenity"] == "hospital"
        assert result["name"] == "Szpital"

    def test_unquoted_and_mixed(self):
        result = parse_hstore("amenity=>pharmacy,name=>Apteka")
        assert result["amenity"] == "pharmacy"
        assert result["name"] == "Apteka"

    def test_already_dict(self):
        d = {"amenity": "hospital"}
        assert parse_hstore(d) == d


# ============================================================
# 2. Testy normalizatora nazw (scripts.utils.geo)
# ============================================================
class TestNormalizeName:
    """Testy kanonicznej normalizacji nazw przystanków i węzłów."""

    def test_diacritics_removal(self):
        assert normalize_name("Kielce, Żytnia / Chęcińska") == "kielcezytniachecinska"
        assert normalize_name("Łódź Fabryczna") == "lodzfabryczna"
        assert normalize_name("Kraków Główny") == "krakowglowny"

    def test_rail_suffix_stripping(self):
        assert normalize_name("Kielce Główne PKP", strip_rail_suffixes=True) == "kielcepkp"
        assert normalize_name("Warszawa Główna Osobowa", strip_rail_suffixes=True) == "warszawa"

    def test_empty_and_none(self):
        assert normalize_name(None) == ""
        assert normalize_name("") == ""
        assert normalize_name(float("nan")) == ""


# ============================================================
# 3. Testy klasyfikatora POI (14_build_isc_valuation.py)
# ============================================================
class TestIdentifyTag:
    """Testy klasyfikatora tagów i przypisywania Tierów z silnika wyceny."""

    @pytest.fixture(autouse=True)
    def setup_funcs(self):
        self.parse_hstore, self.identify_tag = _import_valuation_funcs()

    def test_hospital(self):
        row = pd.Series({"amenity": "hospital", "all_tags": ""})
        cat, tier = self.identify_tag(row, "kielce")
        assert cat == "hospital_clinical"
        assert tier == "T1_NATIONAL_MAGNET"

    def test_airport_international(self):
        row = pd.Series({"aeroway": "aerodrome", "all_tags": '"iata"=>"KRK","name"=>"Balice"'})
        cat, tier = self.identify_tag(row, "krakow")
        assert cat == "international_airport"
        assert tier == "T0_MEGA_HUB"

    def test_airport_local(self):
        row = pd.Series({"aeroway": "aerodrome", "all_tags": '"name"=>"Lotnisko Sportowe"'})
        cat, tier = self.identify_tag(row, "kielce")
        assert cat == "local_airfield"
        assert tier == "T5_SPEC_GASTRO"

    def test_rail_main_station(self):
        row = pd.Series({"railway": "station", "all_tags": '"name"=>"Kielce Główne"'})
        cat, tier = self.identify_tag(row, "kielce")
        assert "rail" in cat
        assert tier == "T0_MEGA_HUB"

    def test_supermarket(self):
        row = pd.Series({"shop": "supermarket", "all_tags": ""})
        cat, tier = self.identify_tag(row, "kielce")
        assert cat == "supermarket"
        assert tier == "T2_STRATEGIC_HUB"

    def test_unknown_returns_none(self):
        row = pd.Series({"amenity": "totally_unknown_xyz", "all_tags": ""})
        cat, tier = self.identify_tag(row, "kielce")
        assert cat is None
        assert tier is None


# ============================================================
# 4. Testy stałych i taksonomii (scripts.utils.constants)
# ============================================================
class TestConstants:
    """Testy spójności bazowych stałych platformy."""

    def test_city_baselines(self):
        assert "kielce" in CITY_BASELINES
        assert "warszawa" in CITY_BASELINES
        assert CITY_BASELINES["warszawa"] > CITY_BASELINES["kielce"]
        assert all(isinstance(v, int) and v > 0 for v in CITY_BASELINES.values())

    def test_tier_points_monotonicity(self):
        assert TIER_POINTS["T0_MEGA_HUB"] > TIER_POINTS["T1_NATIONAL_MAGNET"]
        assert TIER_POINTS["T1_NATIONAL_MAGNET"] > TIER_POINTS["T2_STRATEGIC_HUB"]
        assert TIER_POINTS["T2_STRATEGIC_HUB"] > TIER_POINTS["T3_LOCAL_CORE"]
        assert TIER_POINTS["T3_LOCAL_CORE"] > TIER_POINTS["T4_DAILY_SERVICE"]
        assert TIER_POINTS["T4_DAILY_SERVICE"] > TIER_POINTS["T5_SPEC_GASTRO"]
        assert TIER_POINTS["T5_SPEC_GASTRO"] > TIER_POINTS["T6_MICRO_INFRA"]
