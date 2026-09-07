#!/usr/bin/env python3
"""
Step 17: Build Unified Analytical H3 Grid (v1.0)
Fuses Stops (GTFS), Demographics (GUS NSP 2021), Real Estate (RCN), and POI Gravity
into a standardized multi-resolution Uber H3 spatial analytical grid (Resolution 8/9).

Conforms strictly to docs/contracts/DATA_DICTIONARY_AND_API_SSOT.md.
"""

import os
import sys
import math
import time
import argparse
import warnings
from pathlib import Path
from typing import Dict, Any, Optional

import h3
import numpy as np
import pandas as pd
import geopandas as gpd
import duckdb

warnings.filterwarnings("ignore", category=FutureWarning)
warnings.filterwarnings("ignore", message=".*Geometry is in a geographic CRS.*")

DEFAULT_DATA_DIR = Path(os.getenv("PIPELINE_DATA_DIR", "data"))
H3_DEFAULT_RES = 8

GRADE_ORDER = {"A+": 6, "A": 5, "B": 4, "C": 3, "D": 2, "F": 1, "NONE": 0}
GRADE_REVERSE = {v: k for k, v in GRADE_ORDER.items()}


def process_city_h3_grid(city_name: str, data_dir: Path = DEFAULT_DATA_DIR, resolution: int = H3_DEFAULT_RES) -> Optional[pd.DataFrame]:
    city_dir = data_dir / "cities" / city_name
    if not city_dir.exists():
        print(f"[-] City directory not found: {city_dir}")
        return None

    spatial_dir = city_dir / "02_spatial"
    results_dir = city_dir / "04_results"
    results_dir.mkdir(parents=True, exist_ok=True)

    stops_path = results_dir / "stop_dna.gpkg"
    pop_path = spatial_dir / "population_250m.gpkg"
    tx_path = spatial_dir / "transactions.gpkg"
    poi_path = results_dir / "poi_matrix.parquet"

    if not stops_path.exists():
        print(f"[-] stop_dna.gpkg missing for {city_name}, skipping.")
        return None

    print(f"[*] Building H3 Grid (Res {resolution}) for city: {city_name}...")
    t0 = time.time()

    # 1. Process Stops & Hubs
    stops_gdf = gpd.read_file(stops_path)
    stops_wgs = stops_gdf.to_crs("EPSG:4326")
    stops_gdf["h3_index"] = stops_wgs.geometry.apply(lambda p: h3.latlng_to_cell(p.y, p.x, resolution))

    # Grade numeric score for max aggregation
    stops_gdf["grade_num"] = stops_gdf["grade"].map(GRADE_ORDER).fillna(0)
    freq_col = "transit_freq" if "transit_freq" in stops_gdf.columns else ("departures_per_hour" if "departures_per_hour" in stops_gdf.columns else None)
    if freq_col is None:
        stops_gdf["_freq"] = 0.0
    else:
        stops_gdf["_freq"] = pd.to_numeric(stops_gdf[freq_col], errors="coerce").fillna(0.0)

    hub_id_col = "hub_id" if "hub_id" in stops_gdf.columns else "stop_id"

    stops_agg = stops_gdf.groupby("h3_index").agg(
        stop_count=("stop_id", "count"),
        hub_count=(hub_id_col, "nunique"),
        total_departures_h=("_freq", "sum"),
        max_grade_num=("grade_num", "max"),
        mean_local_score=("local_score_raw", "mean") if "local_score_raw" in stops_gdf.columns else ("_freq", lambda _: 0.0)
    ).reset_index()

    stops_agg["max_stop_grade"] = stops_agg["max_grade_num"].map(GRADE_REVERSE).fillna("NONE")
    stops_agg.drop(columns=["max_grade_num"], inplace=True)

    # 2. Process Demographics (GUS 250m grid)
    pop_agg = pd.DataFrame(columns=["h3_index", "pop_total"])
    if pop_path.exists():
        try:
            pop_gdf = gpd.read_file(pop_path)
            pop_col = "TOT" if "TOT" in pop_gdf.columns else ("pop_val" if "pop_val" in pop_gdf.columns else None)
            if pop_col is not None and not pop_gdf.empty:
                # If metric CRS (EPSG:2180), compute centroids in metric, then reproject to EPSG:4326
                if pop_gdf.crs and pop_gdf.crs.to_epsg() == 2180:
                    centroids_wgs = pop_gdf.geometry.centroid.to_crs("EPSG:4326")
                else:
                    centroids_wgs = pop_gdf.to_crs("EPSG:4326").geometry.centroid

                pop_gdf["h3_index"] = centroids_wgs.apply(lambda p: h3.latlng_to_cell(p.y, p.x, resolution))
                pop_gdf["_pop"] = pd.to_numeric(pop_gdf[pop_col], errors="coerce").fillna(0.0)
                pop_agg = pop_gdf.groupby("h3_index").agg(pop_total=("_pop", "sum")).reset_index()
        except Exception as e:
            print(f"    [!] Error processing population: {e}")

    # 3. Process Transactions (RCN)
    tx_agg = pd.DataFrame(columns=["h3_index", "rcn_tx_count", "rcn_median_price_m2"])
    if tx_path.exists():
        try:
            tx_gdf = gpd.read_file(tx_path)
            if not tx_gdf.empty and "price_m2" in tx_gdf.columns:
                if tx_gdf.crs and tx_gdf.crs.to_epsg() == 2180:
                    tx_wgs = tx_gdf.to_crs("EPSG:4326")
                else:
                    tx_wgs = tx_gdf

                tx_gdf["h3_index"] = tx_wgs.geometry.apply(lambda p: h3.latlng_to_cell(p.y, p.x, resolution) if p and not p.is_empty else None)
                tx_gdf = tx_gdf[tx_gdf["h3_index"].notna()]
                tx_gdf["_price"] = pd.to_numeric(tx_gdf["price_m2"], errors="coerce")
                valid_tx = tx_gdf[tx_gdf["_price"] > 0]

                if not valid_tx.empty:
                    tx_agg = valid_tx.groupby("h3_index").agg(
                        rcn_tx_count=("_price", "count"),
                        rcn_median_price_m2=("_price", "median")
                    ).reset_index()
        except Exception as e:
            print(f"    [!] Error processing transactions: {e}")

    # 4. Process POIs (poi_matrix.parquet)
    poi_agg = pd.DataFrame(columns=["h3_index", "poi_gravity_sum"])
    if poi_path.exists():
        try:
            con = duckdb.connect(":memory:")
            cols = [r[0] for r in con.execute(f"DESCRIBE SELECT * FROM read_parquet('{poi_path}')").fetchall()]
            if "lat" in cols and "lon" in cols and "w" in cols and "sum_pull" in cols:
                poi_df = con.execute(f"SELECT lat, lon, (w * sum_pull) as grav FROM read_parquet('{poi_path}')").fetch_df()
                con.close()
                if not poi_df.empty:
                    poi_df["h3_index"] = poi_df.apply(lambda r: h3.latlng_to_cell(r["lat"], r["lon"], resolution), axis=1)
                    poi_agg = poi_df.groupby("h3_index").agg(poi_gravity_sum=("grav", "sum")).reset_index()
            else:
                con.close()
        except Exception as e:
            print(f"    [!] Error processing POIs: {e}")

    # 5. Outer Fusion across all 4 domains
    merged = stops_agg.merge(pop_agg, on="h3_index", how="outer")
    merged = merged.merge(tx_agg, on="h3_index", how="outer")
    merged = merged.merge(poi_agg, on="h3_index", how="outer")

    # Clean and fill default values
    merged["city"] = city_name
    merged["stop_count"] = merged["stop_count"].fillna(0).astype(int)
    merged["hub_count"] = merged["hub_count"].fillna(0).astype(int)
    merged["total_departures_h"] = merged["total_departures_h"].fillna(0.0).round(2)
    merged["max_stop_grade"] = merged["max_stop_grade"].fillna("NONE")
    merged["mean_local_score"] = merged["mean_local_score"].fillna(0.0).round(4)
    merged["pop_total"] = merged["pop_total"].fillna(0.0).round(1)
    merged["rcn_tx_count"] = merged["rcn_tx_count"].fillna(0).astype(int)
    merged["rcn_median_price_m2"] = merged["rcn_median_price_m2"].round(1)
    merged["poi_gravity_sum"] = merged["poi_gravity_sum"].fillna(0.0).round(2)

    # Filter out empty cells (cells with neither stops, nor pop, nor tx, nor POIs)
    active_mask = (
        (merged["stop_count"] > 0) |
        (merged["pop_total"] > 0) |
        (merged["rcn_tx_count"] > 0) |
        (merged["poi_gravity_sum"] > 0)
    )
    merged = merged[active_mask].copy().reset_index(drop=True)

    # 6. Compute Lat/Lon Centroids
    coords = [h3.cell_to_latlng(cell) for cell in merged["h3_index"]]
    merged["lat"] = [round(c[0], 6) for c in coords]
    merged["lon"] = [round(c[1], 6) for c in coords]

    # 7. Compute Mathematical Indicators (TDI & Transport Score)
    # Transit Desert Index: log1p(Pop) / log1p(Departures + 0.1)
    merged["transit_desert_index"] = (
        np.log1p(merged["pop_total"]) / np.log1p(merged["total_departures_h"] + 0.1)
    ).round(3)

    # Transit Desert Alert flag: High population (>=150) with critically poor transit (<4 departures/h)
    merged["is_transit_desert"] = (merged["pop_total"] >= 150.0) & (merged["total_departures_h"] < 4.0)

    # Unified Transport Score (0-100 scale based on frequency and stops)
    raw_transport = (merged["total_departures_h"] * 1.2) + (merged["stop_count"] * 3.0)
    max_transport = raw_transport.quantile(0.98) if len(raw_transport) > 0 and raw_transport.max() > 0 else 1.0
    merged["transport_score"] = np.clip((raw_transport / (max_transport + 1e-9)) * 100.0, 0.0, 100.0).round(1)

    # Reorder columns per SSOT contract
    cols_order = [
        "h3_index", "city", "lat", "lon",
        "stop_count", "hub_count", "total_departures_h", "max_stop_grade", "transport_score",
        "pop_total", "rcn_tx_count", "rcn_median_price_m2",
        "poi_gravity_sum", "transit_desert_index", "is_transit_desert"
    ]
    final_df = merged[cols_order]

    # 8. Export to Parquet
    out_parquet = results_dir / "h3_grid.parquet"
    final_df.to_parquet(out_parquet, index=False)

    elapsed = time.time() - t0
    deserts_count = int(final_df["is_transit_desert"].sum())
    print(f"[+] {city_name}: {len(final_df)} H3 cells written to {out_parquet} ({elapsed:.2f}s) | Transit Deserts: {deserts_count}")

    return final_df


def main():
    parser = argparse.ArgumentParser(description="Step 17: Build Unified Analytical H3 Grid per city.")
    parser.add_argument("--city", type=str, help="City slug to process (or 'all')")
    parser.add_argument("--res", type=int, default=H3_DEFAULT_RES, help=f"H3 resolution (default: {H3_DEFAULT_RES})")
    parser.add_argument("--data-dir", type=str, default="data", help="Data directory path")
    args = parser.parse_args()

    data_dir = Path(args.data_dir)

    if not args.city or args.city == "all":
        cities_dir = data_dir / "cities"
        if not cities_dir.exists():
            print(f"[-] Cities directory not found: {cities_dir}")
            sys.exit(1)

        available_cities = sorted([
            d.name for d in cities_dir.iterdir()
            if d.is_dir() and (d / "04_results" / "stop_dna.gpkg").exists()
        ])
        print(f"[*] Found {len(available_cities)} calibrated cities to process.")
        total_cells = 0
        for c in available_cities:
            df = process_city_h3_grid(c, data_dir, args.res)
            if df is not None:
                total_cells += len(df)
        print(f"[SUCCESS] All {len(available_cities)} cities processed into H3 Grid. Total cells: {total_cells}")
    else:
        df = process_city_h3_grid(args.city, data_dir, args.res)
        if df is None:
            sys.exit(1)


if __name__ == "__main__":
    main()
