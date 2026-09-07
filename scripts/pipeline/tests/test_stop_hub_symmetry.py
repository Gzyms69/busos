#!/usr/bin/env python3
"""
Test Suite: Stop-Hub Symmetry & Data Pipeline Parity (Sprint 1)
Verifies full feature parity for physical stops (stop_id), macro hub aggregation,
relational integrity, and dual-layer GeoPackage export.
"""

import os
import sys
import argparse
from pathlib import Path
import geopandas as gpd
import pandas as pd
import numpy as np

def verify_city_symmetry(city_name: str, data_dir: Path = Path("data")) -> bool:
    city_dir = data_dir / "cities" / city_name
    spatial_dir = city_dir / "02_spatial"
    results_dir = city_dir / "04_results"

    stops_raw_path = spatial_dir / "stops.gpkg"
    stop_dna_path = results_dir / "stop_dna.gpkg"
    hubs_path = results_dir / "hubs.gpkg"

    print(f"[*] Auditing Stop-Hub Symmetry for city: {city_name}")

    # 1. Existence Check
    assert stops_raw_path.exists(), f"Missing input stops.gpkg at {stops_raw_path}"
    assert stop_dna_path.exists(), f"Missing output stop_dna.gpkg at {stop_dna_path}"
    assert hubs_path.exists(), f"Missing output hubs.gpkg at {hubs_path}"

    stops_raw = gpd.read_file(stops_raw_path)
    stop_dna = gpd.read_file(stop_dna_path)
    hubs = gpd.read_file(hubs_path)

    # 2. Row Count & Zero Stop Loss
    print(f"  - Raw stops: {len(stops_raw)} | Output stop_dna: {len(stop_dna)} | Hubs: {len(hubs)}")
    assert len(stop_dna) == len(stops_raw), (
        f"CRITICAL: Stop loss detected! Raw={len(stops_raw)}, stop_dna={len(stop_dna)}"
    )
    assert len(hubs) > 0, "CRITICAL: Hubs layer is empty!"
    assert len(hubs) == stop_dna["hub_id"].nunique(), (
        f"CRITICAL: Hub count mismatch! hubs.gpkg={len(hubs)}, stop_dna unique hubs={stop_dna['hub_id'].nunique()}"
    )

    # 3. Micro Pillars Check (Physical Stops)
    micro_pillars = [
        "stop_departures_h",
        "stop_routes_count",
        "stop_routes",
        "stop_raw_gravity",
        "stop_entropy",
        "stop_infra_score",
        "stop_pop_val",
        "stop_market_val",
        "stop_liquidity",
        "stop_local_score_raw",
        "stop_percentile",
        "stop_grade"
    ]
    for col in micro_pillars:
        assert col in stop_dna.columns, f"Missing micro pillar column: {col} in stop_dna.gpkg"

    # Verify grades are valid
    valid_grades = {"A+", "A", "B", "C", "D", "F"}
    assert set(stop_dna["stop_grade"].unique()).issubset(valid_grades), (
        f"Invalid stop_grade values: {set(stop_dna['stop_grade'].unique()) - valid_grades}"
    )

    # 4. Macro Pillars Check (Hub Metrics in stop_dna)
    macro_pillars = [
        "hub_id",
        "hub_name",
        "hub_stops_count",
        "hub_departures_h",
        "hub_routes_count",
        "hub_routes",
        "hub_raw_gravity",
        "hub_entropy",
        "hub_infra_score",
        "hub_pop_val",
        "hub_market_val",
        "hub_liquidity",
        "hub_local_score_raw",
        "hub_percentile",
        "hub_grade"
    ]
    for col in macro_pillars:
        assert col in stop_dna.columns, f"Missing macro column: {col} in stop_dna.gpkg"

    # 5. Relational Columns & Structural Integrity
    relational_cols = ["stop_hub_share", "is_hub_anchor"]
    for col in relational_cols:
        assert col in stop_dna.columns, f"Missing relational column: {col} in stop_dna.gpkg"

    # Exactly 1 anchor per hub
    anchors_per_hub = stop_dna[stop_dna["is_hub_anchor"] == True].groupby("hub_id")["stop_id"].count()
    assert (anchors_per_hub == 1).all(), (
        f"Anchor violation: hubs with != 1 anchor: {anchors_per_hub[anchors_per_hub != 1]}"
    )
    assert len(anchors_per_hub) == len(hubs), (
        f"Mismatch between hubs count and anchor count: {len(hubs)} vs {len(anchors_per_hub)}"
    )

    # stop_hub_share range [0.0, 1.0]
    assert (stop_dna["stop_hub_share"] >= 0.0).all() and (stop_dna["stop_hub_share"] <= 1.0001).all(), (
        f"stop_hub_share out of bounds: min={stop_dna['stop_hub_share'].min()}, max={stop_dna['stop_hub_share'].max()}"
    )

    # 6. Backward Compatibility Aliases Check
    compat_aliases = [
        "infra_score",
        "transit_freq",
        "pop_val",
        "market_val",
        "local_score_raw",
        "local_percentile",
        "grade"
    ]
    for col in compat_aliases:
        assert col in stop_dna.columns, f"Missing compatibility alias column: {col} in stop_dna.gpkg"

    # 7. Hubs Layer (hubs.gpkg) Integrity
    hub_cols = [
        "hub_id", "hub_name", "city", "lat", "lon",
        "hub_stops_count", "hub_stops_ids",
        "hub_departures_h", "hub_routes_count", "hub_routes",
        "hub_raw_gravity", "hub_entropy", "hub_infra_score",
        "hub_pop_val", "hub_market_val", "hub_liquidity",
        "hub_local_score_raw", "hub_percentile", "hub_grade",
        "transit_freq", "infra_score", "pop_val", "market_val", "grade"
    ]
    for col in hub_cols:
        assert col in hubs.columns, f"Missing column in hubs.gpkg: {col}"

    assert hubs.crs and hubs.crs.to_epsg() == 4326, f"hubs.gpkg CRS must be EPSG:4326, got {hubs.crs}"
    assert stop_dna.crs and stop_dna.crs.to_epsg() == 4326, f"stop_dna.gpkg CRS must be EPSG:4326, got {stop_dna.crs}"
    assert (hubs.geometry.geom_type == "Point").all(), "All geometries in hubs.gpkg must be Points!"

    # 8. Departures Conservation: sum(stop_departures_h) >= hub_departures_h
    departures_sum_by_hub = stop_dna.groupby("hub_id")["stop_departures_h"].sum()
    hub_dep = hubs.set_index("hub_id")["hub_departures_h"]
    diff = departures_sum_by_hub - hub_dep
    # sum of stop departures should be >= hub departures (with tiny floating point tolerance)
    assert (diff >= -1e-4).all(), (
        f"Conservation violation: some hubs have hub_departures > sum(stop_departures): {diff[diff < -1e-4]}"
    )

    print(f"[+] All 8 verification gates PASSED for {city_name}!")
    return True

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--city", default="kielce")
    parser.add_argument("--data-dir", default="data")
    args = parser.parse_args()

    success = verify_city_symmetry(args.city, Path(args.data_dir))
    if not success:
        sys.exit(1)
