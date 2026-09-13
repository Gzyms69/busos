#!/usr/bin/env python3
"""
scripts/tools/export_simulation_trips.py
BusOS Dual-Mode Fleet Simulation Generator:
1. Mode GPS: High-fidelity street-following trajectory along GTFS shapes (shapes.txt) or OSM road network (transit_routes.gpkg).
2. Mode Math: Pure timetable stop-to-stop linear interpolation (mathematical model).

Generates datasets for all 30 Polish metropolitan agglomerations.
"""

import os
import sys
import json
import time
import math
import argparse
from pathlib import Path
import duckdb
import pandas as pd
import numpy as np
import geopandas as gpd

PROJECT_ROOT = Path(__file__).resolve().parents[2]
DATA_DIR = PROJECT_ROOT / "data" / "cities"
OUTPUT_DIR = PROJECT_ROOT / "urban-dashboard" / "public" / "data"
SIM_SUBDIR = OUTPUT_DIR / "simulation"


def parse_time_str(time_str: str) -> int:
    """Parses HH:MM:SS to seconds from midnight (supports hours >= 24)."""
    try:
        parts = str(time_str).strip().split(":")
        return int(parts[0]) * 3600 + int(parts[1]) * 60 + int(parts[2])
    except Exception:
        return 0


def seconds_to_hhmmss(sec: int) -> str:
    h = (sec // 3600) % 24
    m = (sec % 3600) // 60
    s = sec % 60
    return f"{h:02d}:{m:02d}:{s:02d}"


def haversine_m(lon1: float, lat1: float, lon2: float, lat2: float) -> float:
    """Calculates spherical distance in meters between two coordinates."""
    R = 6371000.0
    phi1 = math.radians(lat1)
    phi2 = math.radians(lat2)
    dphi = math.radians(lat2 - lat1)
    dlambda = math.radians(lon2 - lon1)
    a = math.sin(dphi / 2.0) ** 2 + math.cos(phi1) * math.cos(phi2) * math.sin(dlambda / 2.0) ** 2
    return 2.0 * R * math.atan2(math.sqrt(a), math.sqrt(1.0 - a))


def export_city_simulation(city: str) -> dict:
    city_dir = DATA_DIR / city
    gtfs_base = city_dir / "gtfs"
    results_dir = city_dir / "04_results"
    results_dir.mkdir(parents=True, exist_ok=True)
    SIM_SUBDIR.mkdir(parents=True, exist_ok=True)

    feed_dirs = [d for d in gtfs_base.iterdir() if d.is_dir()] if gtfs_base.exists() else []
    if not feed_dirs:
        print(f"[-] Brak katalogu GTFS dla {city}")
        return {}

    t0 = time.time()
    print(f"[+] Generowanie dwutrybowej symulacji BusOS dla {city}...")
    con = duckdb.connect()

    # 1. Stops lookup: stop_id -> lat, lon, name
    stops_map = {}
    for fd in feed_dirs:
        sp = fd / "stops.txt"
        if not sp.exists():
            continue
        df = con.execute(f"""
            SELECT 
                stop_id::VARCHAR AS stop_id,
                COALESCE(stop_name, 'Przystanek ' || stop_id::VARCHAR) AS stop_name,
                TRY_CAST(stop_lon AS DOUBLE) AS lon,
                TRY_CAST(stop_lat AS DOUBLE) AS lat
            FROM read_csv('{sp.as_posix()}', header=true, all_varchar=true, quote='\"', escape='\"', ignore_errors=true)
            WHERE TRY_CAST(stop_lon AS DOUBLE) IS NOT NULL AND TRY_CAST(stop_lat AS DOUBLE) IS NOT NULL
        """).fetchdf()
        for _, row in df.iterrows():
            stops_map[str(row["stop_id"])] = {
                "name": str(row["stop_name"]),
                "lon": round(float(row["lon"]), 5),
                "lat": round(float(row["lat"]), 5),
            }
    print(f"    - Załadowano {len(stops_map)} przystanków.")

    # 2. Routes lookup: route_id -> short_name, color
    routes_map = {}
    for fd in feed_dirs:
        rp = fd / "routes.txt"
        if not rp.exists():
            continue
        cols = [c[0] for c in con.execute(f"DESCRIBE SELECT * FROM read_csv('{rp.as_posix()}', header=true, all_varchar=true, quote='\"', escape='\"', ignore_errors=true)").fetchall()]
        color_expr = "COALESCE(route_color, '47317F')" if "route_color" in cols else "'47317F'"
        short_expr = "COALESCE(route_short_name, route_id::VARCHAR)" if "route_short_name" in cols else "route_id::VARCHAR"
        df = con.execute(f"""
            SELECT 
                route_id::VARCHAR AS route_id,
                {short_expr} AS route_short_name,
                {color_expr} AS route_color
            FROM read_csv('{rp.as_posix()}', header=true, all_varchar=true, quote='\"', escape='\"', ignore_errors=true)
        """).fetchdf()
        for _, row in df.iterrows():
            raw_color = str(row["route_color"]).strip().replace("#", "")
            if len(raw_color) != 6:
                raw_color = "47317F"
            routes_map[str(row["route_id"])] = {
                "short_name": str(row["route_short_name"]),
                "color": f"#{raw_color}",
            }
    print(f"    - Załadowano {len(routes_map)} linii.")

    # 3. Shapes lookup from GTFS: shape_id -> lons, lats, dists
    shapes_dict = {}
    for fd in feed_dirs:
        shp = fd / "shapes.txt"
        if not shp.exists():
            continue
        df = con.execute(f"""
            SELECT 
                shape_id::VARCHAR AS shape_id,
                TRY_CAST(shape_pt_sequence AS INT) AS seq,
                TRY_CAST(shape_pt_lon AS DOUBLE) AS lon,
                TRY_CAST(shape_pt_lat AS DOUBLE) AS lat
            FROM read_csv('{shp.as_posix()}', header=true, all_varchar=true, quote='\"', escape='\"', ignore_errors=true)
            WHERE TRY_CAST(shape_pt_lon AS DOUBLE) IS NOT NULL AND TRY_CAST(shape_pt_lat AS DOUBLE) IS NOT NULL
            ORDER BY shape_id, seq
        """).fetchdf()
        for s_id, group in df.groupby("shape_id"):
            lons = group["lon"].to_numpy()
            lats = group["lat"].to_numpy()
            if len(lons) < 2:
                continue
            cum_dist = [0.0]
            for i in range(1, len(lons)):
                d = haversine_m(lons[i-1], lats[i-1], lons[i], lats[i])
                cum_dist.append(cum_dist[-1] + d)
            shapes_dict[str(s_id)] = {
                "lons": lons,
                "lats": lats,
                "dists": np.array(cum_dist),
                "total_dist": cum_dist[-1]
            }
    has_gtfs_shapes = len(shapes_dict) > 0
    print(f"    - Załadowano {len(shapes_dict)} śladów GPS (shapes.txt).")

    # 4. Fallback route geometries from transit_routes.gpkg
    fallback_routes_geom = {}
    routes_gpkg = results_dir / "transit_routes.gpkg"
    if routes_gpkg.exists():
        try:
            gdf = gpd.read_file(routes_gpkg)
            for _, r in gdf.iterrows():
                r_id = str(r.get("route_id", ""))
                d_id = int(r.get("direction_id", 0)) if pd.notna(r.get("direction_id", 0)) else 0
                geom = r.geometry
                if geom and geom.geom_type == "LineString":
                    coords = list(geom.coords)
                    if len(coords) >= 2:
                        lons = np.array([c[0] for c in coords])
                        lats = np.array([c[1] for c in coords])
                        cum_dist = [0.0]
                        for i in range(1, len(lons)):
                            d = haversine_m(lons[i-1], lats[i-1], lons[i], lats[i])
                            cum_dist.append(cum_dist[-1] + d)
                        fallback_routes_geom[(r_id, d_id)] = {
                            "lons": lons,
                            "lats": lats,
                            "dists": np.array(cum_dist),
                            "total_dist": cum_dist[-1]
                        }
            print(f"    - Załadowano {len(fallback_routes_geom)} geometrii drogowych z transit_routes.gpkg.")
        except Exception as e:
            print(f"    - Ostrzeżenie transit_routes.gpkg: {e}")

    # 5. Select primary feed with highest trip count
    best_fd = feed_dirs[0]
    best_cnt = 0
    best_service = None
    for fd in feed_dirs:
        tp = fd / "trips.txt"
        if not tp.exists():
            continue
        sc = con.execute(f"SELECT service_id::VARCHAR, count(*) FROM read_csv('{tp.as_posix()}', header=true, all_varchar=true, quote='\"', escape='\"', ignore_errors=true) GROUP BY 1 ORDER BY 2 DESC").fetchall()
        if sc and sc[0][1] > best_cnt:
            best_cnt = sc[0][1]
            best_fd = fd
            best_service = sc[0][0]
            for s_id, cnt in sc:
                if "_RO" in s_id or s_id == "RO" or "WEEKDAY" in s_id.upper() or "DNI_POWSZEDNIE" in s_id.upper():
                    best_service = s_id
                    break

    print(f"    - Wybrany feed: {best_fd.name}, profil (service_id): {best_service}")

    trips_p = best_fd / "trips.txt"
    st_p = best_fd / "stop_times.txt"
    t_cols = [c[0] for c in con.execute(f"DESCRIBE SELECT * FROM read_csv('{trips_p.as_posix()}', header=true, all_varchar=true, quote='\"', escape='\"', ignore_errors=true)").fetchall()]
    
    dir_expr = "COALESCE(direction_id, '0')" if "direction_id" in t_cols else "'0'"
    headsign_expr = "COALESCE(trip_headsign, '')" if "trip_headsign" in t_cols else "''"
    shape_expr = "COALESCE(shape_id, '')" if "shape_id" in t_cols else "''"

    trips_df = con.execute(f"""
        SELECT 
            trip_id::VARCHAR AS trip_id,
            route_id::VARCHAR AS route_id,
            {headsign_expr} AS headsign,
            {dir_expr} AS direction_id,
            {shape_expr} AS shape_id
        FROM read_csv('{trips_p.as_posix()}', header=true, all_varchar=true, quote='\"', escape='\"', ignore_errors=true)
        WHERE service_id::VARCHAR = '{best_service}'
    """).fetchdf()

    trip_meta = {}
    for _, r in trips_df.iterrows():
        trip_meta[str(r["trip_id"])] = {
            "route_id": str(r["route_id"]),
            "headsign": str(r["headsign"]),
            "direction_id": int(r["direction_id"]) if str(r["direction_id"]).isdigit() else 0,
            "shape_id": str(r["shape_id"]) if pd.notna(r["shape_id"]) else ""
        }
    print(f"    - Znaleziono {len(trip_meta)} kursów dla wybranego dnia.")

    # 6. Stop times extraction
    st_df = con.execute(f"""
        WITH filtered_trips AS (
            SELECT trip_id::VARCHAR AS trip_id
            FROM read_csv('{trips_p.as_posix()}', header=true, all_varchar=true, quote='\"', escape='\"', ignore_errors=true)
            WHERE service_id::VARCHAR = '{best_service}'
        )
        SELECT 
            st.trip_id::VARCHAR AS trip_id,
            TRY_CAST(st.stop_sequence AS INTEGER) AS seq,
            st.stop_id::VARCHAR AS stop_id,
            st.departure_time::VARCHAR AS dep_time,
            st.arrival_time::VARCHAR AS arr_time
        FROM read_csv('{st_p.as_posix()}', header=true, all_varchar=true, quote='\"', escape='\"', ignore_errors=true) st
        JOIN filtered_trips ft ON st.trip_id::VARCHAR = ft.trip_id
        WHERE TRY_CAST(st.stop_sequence AS INTEGER) IS NOT NULL
        ORDER BY st.trip_id, seq
    """).fetchdf()

    trips_stops = {}
    for _, row in st_df.iterrows():
        t_id = str(row["trip_id"])
        if t_id not in trips_stops:
            trips_stops[t_id] = []
        s_id = str(row["stop_id"])
        dep = str(row["dep_time"]) if pd.notna(row["dep_time"]) else str(row["arr_time"])
        sec = parse_time_str(dep)
        trips_stops[t_id].append((sec, s_id))

    trips_math = []
    trips_gps = []

    for t_id, raw_st in trips_stops.items():
        if len(raw_st) < 2:
            continue
        meta = trip_meta.get(t_id)
        if not meta:
            continue
        r_id = meta["route_id"]
        r_info = routes_map.get(r_id, {"short_name": r_id, "color": "#47317F"})

        valid_stops = []
        last_sec = -1
        for sec, s_id in raw_st:
            s_info = stops_map.get(s_id)
            if not s_info:
                continue
            if sec < last_sec:
                sec = last_sec
            last_sec = sec
            valid_stops.append((sec, s_info["lon"], s_info["lat"], s_info["name"]))

        if len(valid_stops) < 2:
            continue
        start_sec = valid_stops[0][0]
        end_sec = valid_stops[-1][0]
        if end_sec <= start_sec:
            continue

        # ----------------------------------------------------
        # Mode 1: Math (Pure Stop-to-Stop Timetable Interpolation)
        # ----------------------------------------------------
        math_waypoints = [[s[0], s[1], s[2], s[3]] for s in valid_stops]
        trips_math.append({
            "trip_id": t_id,
            "route_id": r_id,
            "route_short_name": r_info["short_name"],
            "route_color": r_info["color"],
            "headsign": meta["headsign"] or f"Linia {r_info['short_name']}",
            "direction_id": meta["direction_id"],
            "start_sec": start_sec,
            "end_sec": end_sec,
            "waypoints": math_waypoints
        })

        # ----------------------------------------------------
        # Mode 2: GPS (Shapes or OSM Road Trajectory)
        # ----------------------------------------------------
        shape_data = shapes_dict.get(meta["shape_id"])
        if not shape_data:
            shape_data = fallback_routes_geom.get((r_id, meta["direction_id"]))

        if shape_data and len(shape_data["lons"]) >= 2:
            stop_projections = []
            last_idx = 0
            for sec, s_lon, s_lat, s_name in valid_stops:
                sub_lons = shape_data["lons"][last_idx:]
                sub_lats = shape_data["lats"][last_idx:]
                if len(sub_lons) > 0:
                    d2 = (sub_lons - s_lon)**2 + (sub_lats - s_lat)**2
                    idx = last_idx + int(np.argmin(d2))
                else:
                    idx = len(shape_data["lons"]) - 1
                stop_projections.append((idx, sec, s_lon, s_lat, s_name))
                last_idx = idx

            gps_waypoints = []
            for seg_i in range(len(stop_projections) - 1):
                idx_a, sec_a, lon_a, lat_a, name_a = stop_projections[seg_i]
                idx_b, sec_b, lon_b, lat_b, name_b = stop_projections[seg_i + 1]

                gps_waypoints.append([sec_a, round(lon_a, 5), round(lat_a, 5), name_a])

                if idx_b > idx_a + 1 and sec_b > sec_a:
                    dist_a = shape_data["dists"][idx_a]
                    dist_b = shape_data["dists"][idx_b]
                    span_dist = dist_b - dist_a
                    span_time = sec_b - sec_a

                    if span_dist > 5.0:
                        pts = range(idx_a + 1, idx_b)
                        step = max(1, len(pts) // 15)  # Cap sample density
                        for pt_idx in pts[::step]:
                            pt_d = shape_data["dists"][pt_idx] - dist_a
                            frac = min(1.0, max(0.0, pt_d / span_dist))
                            pt_time = round(sec_a + frac * span_time)
                            pt_lon = round(float(shape_data["lons"][pt_idx]), 5)
                            pt_lat = round(float(shape_data["lats"][pt_idx]), 5)
                            gps_waypoints.append([pt_time, pt_lon, pt_lat, ""])

            last_p = stop_projections[-1]
            gps_waypoints.append([last_p[1], round(last_p[2], 5), round(last_p[3], 5), last_p[4]])

            trips_gps.append({
                "trip_id": t_id,
                "route_id": r_id,
                "route_short_name": r_info["short_name"],
                "route_color": r_info["color"],
                "headsign": meta["headsign"] or f"Linia {r_info['short_name']}",
                "direction_id": meta["direction_id"],
                "start_sec": start_sec,
                "end_sec": end_sec,
                "waypoints": gps_waypoints
            })
        else:
            trips_gps.append({
                "trip_id": t_id,
                "route_id": r_id,
                "route_short_name": r_info["short_name"],
                "route_color": r_info["color"],
                "headsign": meta["headsign"] or f"Linia {r_info['short_name']}",
                "direction_id": meta["direction_id"],
                "start_sec": start_sec,
                "end_sec": end_sec,
                "waypoints": math_waypoints
            })

    trips_math.sort(key=lambda x: x["start_sec"])
    trips_gps.sort(key=lambda x: x["start_sec"])

    geo_source = "gtfs_shapes" if has_gtfs_shapes else ("osm_hybrid" if len(fallback_routes_geom) > 0 else "direct_stop")

    dataset_gps = {
        "city": city,
        "mode": "gps",
        "geometry_source": geo_source,
        "service_id": best_service,
        "total_trips": len(trips_gps),
        "min_sec": min(t["start_sec"] for t in trips_gps) if trips_gps else 0,
        "max_sec": max(t["end_sec"] for t in trips_gps) if trips_gps else 86400,
        "trips": trips_gps
    }

    dataset_math = {
        "city": city,
        "mode": "math",
        "geometry_source": "direct_stop",
        "service_id": best_service,
        "total_trips": len(trips_math),
        "min_sec": min(t["start_sec"] for t in trips_math) if trips_math else 0,
        "max_sec": max(t["end_sec"] for t in trips_math) if trips_math else 86400,
        "trips": trips_math
    }

    # Save to public/data/simulation/
    out_gps_pub = SIM_SUBDIR / f"{city}_gps.json"
    out_math_pub = SIM_SUBDIR / f"{city}_math.json"
    out_legacy_pub = OUTPUT_DIR / f"{city}_simulation.json"

    with open(out_gps_pub, "w", encoding="utf-8") as f:
        json.dump(dataset_gps, f, separators=(',', ':'))

    with open(out_math_pub, "w", encoding="utf-8") as f:
        json.dump(dataset_math, f, separators=(',', ':'))

    with open(out_legacy_pub, "w", encoding="utf-8") as f:
        json.dump(dataset_gps, f, separators=(',', ':'))

    # Save to data/cities/{city}/04_results/
    with open(results_dir / "simulation_trips.json", "w", encoding="utf-8") as f:
        json.dump(dataset_gps, f, separators=(',', ':'))

    with open(results_dir / "simulation_trips_math.json", "w", encoding="utf-8") as f:
        json.dump(dataset_math, f, separators=(',', ':'))

    elapsed = time.time() - t0
    size_gps_kb = out_gps_pub.stat().st_size / 1024.0
    size_math_kb = out_math_pub.stat().st_size / 1024.0
    print(f"[✓] {city.upper()} ukończono w {elapsed:.2f}s:")
    print(f"    - GPS:  {len(trips_gps)} kursów ({size_gps_kb:.1f} KB, źródło: {geo_source}) -> {out_gps_pub.name}")
    print(f"    - Math: {len(trips_math)} kursów ({size_math_kb:.1f} KB) -> {out_math_pub.name}")

    return dataset_gps


def export_all_cities():
    cities = sorted([d.name for d in DATA_DIR.iterdir() if d.is_dir() and (d / "04_results" / "stop_dna.gpkg").exists()])
    print(f"\n========================================================")
    print(f"[+] Uruchamianie generowania symulacji dla wszystkich {len(cities)} miast BusOS")
    print(f"========================================================\n")
    
    start_all = time.time()
    success_count = 0
    errors = []

    for idx, city in enumerate(cities, 1):
        print(f"[{idx}/{len(cities)}] {city.upper()}...")
        try:
            res = export_city_simulation(city)
            if res and res.get("total_trips", 0) > 0:
                success_count += 1
            else:
                errors.append((city, "Brak wygenerowanych kursów"))
        except Exception as e:
            print(f"[-] Błąd dla {city}: {e}")
            errors.append((city, str(e)))

    total_time = time.time() - start_all
    print(f"\n========================================================")
    print(f"[✓] Zakończono generowanie: {success_count}/{len(cities)} miast w {total_time:.2f}s")
    if errors:
        print(f"[-] Błędy ({len(errors)}): {errors}")
    print(f"========================================================\n")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="BusOS Dual-Mode Fleet Simulation Generator")
    parser.add_argument("city", nargs="?", default="kielce", help="City slug or --all")
    parser.add_argument("--all", action="store_true", help="Generate for all 30 audited cities")
    args = parser.parse_args()

    if args.all or args.city == "--all":
        export_all_cities()
    else:
        export_city_simulation(args.city)
