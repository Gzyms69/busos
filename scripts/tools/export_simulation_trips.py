#!/usr/bin/env python3
"""
scripts/tools/export_simulation_trips.py
Extracts full-day transit trip waypoints and schedules from GTFS for client-side 60 FPS simulation.
Targeting weekday operations ('RO') for Kielce with fallback to other service_ids if needed.
"""

import os
import sys
import json
import gzip
from pathlib import Path
import duckdb
import pandas as pd

PROJECT_ROOT = Path(__file__).resolve().parents[2]
DATA_DIR = PROJECT_ROOT / "data" / "cities"
OUTPUT_DIR = PROJECT_ROOT / "urban-dashboard" / "public" / "data"


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


def export_city_simulation(city: str = "kielce") -> dict:
    feed_dir = DATA_DIR / city / "gtfs" / city
    if not feed_dir.exists():
        # Try finding first feed folder
        subdirs = [d for d in (DATA_DIR / city / "gtfs").iterdir() if d.is_dir()]
        if not subdirs:
            raise FileNotFoundError(f"Brak katalogu GTFS dla miasta {city}")
        feed_dir = subdirs[0]

    trips_p = feed_dir / "trips.txt"
    st_p = feed_dir / "stop_times.txt"
    stops_p = feed_dir / "stops.txt"
    routes_p = feed_dir / "routes.txt"

    print(f"[+] Generowanie symulacji GTFS dla {city} z {feed_dir}...")
    con = duckdb.connect()

    # 1. Stops lookup: stop_id -> lat, lon, name
    stops_df = con.execute(f"""
        SELECT 
            stop_id::VARCHAR AS stop_id,
            COALESCE(stop_name, 'Przystanek ' || stop_id::VARCHAR) AS stop_name,
            TRY_CAST(stop_lon AS DOUBLE) AS lon,
            TRY_CAST(stop_lat AS DOUBLE) AS lat
        FROM read_csv('{stops_p.as_posix()}', header=true, all_varchar=true, quote='\"', escape='\"', ignore_errors=true)
        WHERE TRY_CAST(stop_lon AS DOUBLE) IS NOT NULL AND TRY_CAST(stop_lat AS DOUBLE) IS NOT NULL
    """).fetchdf()

    stops_map = {}
    for _, row in stops_df.iterrows():
        stops_map[str(row["stop_id"])] = {
            "name": str(row["stop_name"]),
            "lon": round(float(row["lon"]), 5),
            "lat": round(float(row["lat"]), 5),
        }
    print(f"    - Załadowano {len(stops_map)} przystanków.")

    # 2. Routes lookup: route_id -> short_name, color
    routes_df = con.execute(f"""
        SELECT 
            route_id::VARCHAR AS route_id,
            COALESCE(route_short_name, route_id::VARCHAR) AS route_short_name,
            COALESCE(route_color, '47317F') AS route_color
        FROM read_csv('{routes_p.as_posix()}', header=true, all_varchar=true, quote='\"', escape='\"', ignore_errors=true)
    """).fetchdf()

    routes_map = {}
    for _, row in routes_df.iterrows():
        raw_color = str(row["route_color"]).strip().replace("#", "")
        if len(raw_color) != 6:
            raw_color = "47317F"
        routes_map[str(row["route_id"])] = {
            "short_name": str(row["route_short_name"]),
            "color": f"#{raw_color}",
        }
    print(f"    - Załadowano {len(routes_map)} linii.")

    # 3. Detect best service_id (e.g. '%RO' for Kielce weekdays or highest trip count)
    service_counts = con.execute(f"""
        SELECT service_id::VARCHAR AS s_id, count(*) as cnt
        FROM read_csv('{trips_p.as_posix()}', header=true, all_varchar=true, quote='\"', escape='\"', ignore_errors=true)
        GROUP BY 1
        ORDER BY 2 DESC
    """).fetchall()

    chosen_service = service_counts[0][0]
    for s_id, cnt in service_counts:
        if "_RO" in s_id:
            chosen_service = s_id
            break
    print(f"    - Wybrany profil rozkładowy (service_id): {chosen_service}")

    # 4. Load trips with this service_id
    trips_df = con.execute(f"""
        SELECT 
            trip_id::VARCHAR AS trip_id,
            route_id::VARCHAR AS route_id,
            COALESCE(trip_headsign, '') AS headsign,
            COALESCE(direction_id, '0') AS direction_id
        FROM read_csv('{trips_p.as_posix()}', header=true, all_varchar=true, quote='\"', escape='\"', ignore_errors=true)
        WHERE service_id::VARCHAR = '{chosen_service}'
    """).fetchdf()

    trip_meta_map = {}
    for _, row in trips_df.iterrows():
        trip_meta_map[str(row["trip_id"])] = {
            "route_id": str(row["route_id"]),
            "headsign": str(row["headsign"]),
            "direction_id": int(row["direction_id"]) if str(row["direction_id"]).isdigit() else 0,
        }
    print(f"    - Znaleziono {len(trip_meta_map)} kursów dla wybranego dnia.")

    # 5. Extract stop sequences with times for these trips
    # Optimize with DuckDB
    st_df = con.execute(f"""
        WITH filtered_trips AS (
            SELECT trip_id::VARCHAR AS trip_id
            FROM read_csv('{trips_p.as_posix()}', header=true, all_varchar=true, quote='\"', escape='\"', ignore_errors=true)
            WHERE service_id::VARCHAR = '{chosen_service}'
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

    # Group by trip_id
    trips_grouped = {}
    for _, row in st_df.iterrows():
        t_id = str(row["trip_id"])
        if t_id not in trips_grouped:
            trips_grouped[t_id] = []
        s_id = str(row["stop_id"])
        dep = str(row["dep_time"]) if pd.notna(row["dep_time"]) else str(row["arr_time"])
        sec = parse_time_str(dep)
        trips_grouped[t_id].append((sec, s_id))

    # Assemble compact SimulationDataset
    simulation_trips = []
    skipped_count = 0

    for trip_id, raw_waypoints in trips_grouped.items():
        if len(raw_waypoints) < 2:
            skipped_count += 1
            continue

        meta = trip_meta_map.get(trip_id)
        if not meta:
            continue

        r_id = meta["route_id"]
        r_info = routes_map.get(r_id, {"short_name": r_id, "color": "#47317F"})

        valid_points = []
        last_sec = -1

        for sec, s_id in raw_waypoints:
            s_info = stops_map.get(s_id)
            if not s_info:
                continue
            # Ensure strictly monotonic or non-decreasing time
            if sec < last_sec:
                sec = last_sec
            last_sec = sec

            valid_points.append([
                sec,
                s_info["lon"],
                s_info["lat"],
                s_info["name"]
            ])

        if len(valid_points) >= 2:
            start_sec = valid_points[0][0]
            end_sec = valid_points[-1][0]
            if end_sec > start_sec:
                simulation_trips.append({
                    "trip_id": trip_id,
                    "route_id": r_id,
                    "route_short_name": r_info["short_name"],
                    "route_color": r_info["color"],
                    "headsign": meta["headsign"] or f"Linia {r_info['short_name']}",
                    "direction_id": meta["direction_id"],
                    "start_sec": start_sec,
                    "end_sec": end_sec,
                    "waypoints": valid_points
                })

    # Sort trips by start_sec
    simulation_trips.sort(key=lambda x: x["start_sec"])

    result = {
        "city": city,
        "service_id": chosen_service,
        "total_trips": len(simulation_trips),
        "min_sec": min(t["start_sec"] for t in simulation_trips) if simulation_trips else 0,
        "max_sec": max(t["end_sec"] for t in simulation_trips) if simulation_trips else 86400,
        "trips": simulation_trips
    }

    # Save to public/data and data/cities/kielce/04_results
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    out_public = OUTPUT_DIR / f"{city}_simulation.json"
    with open(out_public, "w", encoding="utf-8") as f:
        json.dump(result, f, separators=(',', ':'))

    results_dir = DATA_DIR / city / "04_results"
    results_dir.mkdir(parents=True, exist_ok=True)
    out_results = results_dir / "simulation_trips.json"
    with open(out_results, "w", encoding="utf-8") as f:
        json.dump(result, f, separators=(',', ':'))

    size_kb = out_public.stat().st_size / 1024.0
    print(f"[✓] Wyeksportowano {len(simulation_trips)} kursów do:")
    print(f"    - {out_public} ({size_kb:.1f} KB)")
    print(f"    - {out_results}")

    return result


if __name__ == "__main__":
    city_arg = sys.argv[1] if len(sys.argv) > 1 else "kielce"
    export_city_simulation(city_arg)
