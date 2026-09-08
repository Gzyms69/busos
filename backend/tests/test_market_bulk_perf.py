"""
Integration tests for DuckDB Bulk Stops Summary and Predicate Pushdown.
"""

import time
import pytest
from app.domain.market_bridge import get_bulk_stops_summary, get_h3_grid_market_val

def test_bulk_stops_summary_signature_and_fallback():
    # If file doesn't exist for nonexistent city, returns empty dict safely
    summary = get_bulk_stops_summary(city="nonexistent_city_xyz")
    assert summary == {}

    h3_grid = get_h3_grid_market_val(city="nonexistent_city_xyz")
    assert h3_grid == []

def test_bulk_stops_summary_performance():
    # Warmup OS disk cache and DuckDB connection
    get_bulk_stops_summary(
        city="warszawa",
        date_from="2023-01-01",
        date_to="2025-12-31"
    )

    # Performance check on available city
    t0 = time.perf_counter()
    summary = get_bulk_stops_summary(
        city="warszawa",
        date_from="2023-01-01",
        date_to="2025-12-31"
    )
    t_elapsed_ms = (time.perf_counter() - t0) * 1000

    # If bridge is materialized for warszawa, verify sub-75ms SLA on 2.55M rows
    if summary:
        assert len(summary) > 0
        assert t_elapsed_ms < 75.0  # Warm SLA threshold for 2.55M transaction records
        sample_stop = next(iter(summary.values()))
        assert "median_price_m2" in sample_stop

def test_bulk_stops_summary_performance_kielce():
    t0 = time.perf_counter()
    summary = get_bulk_stops_summary(
        city="kielce",
        date_from="2023-01-01",
        date_to="2025-12-31"
    )
    t_elapsed_ms = (time.perf_counter() - t0) * 1000

    assert len(summary) > 0
    assert t_elapsed_ms < 50.0
    sample_stop = next(iter(summary.values()))
    assert "median_price_m2" in sample_stop
    assert sample_stop["median_price_m2"] > 0

