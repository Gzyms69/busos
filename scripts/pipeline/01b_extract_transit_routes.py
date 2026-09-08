#!/usr/bin/env python3
"""
01b_extract_transit_routes.py - BusOS Transit Route Network & Topology Extraction
Extracts high-fidelity LineString geometries for all transit routes.
Features:
1. Multi-Tier Geometry Fusion: Tier 1 GTFS Shapes -> Tier 2 OSM Map-Matching -> Tier 3 Fallback.
2. Linear Referencing System (LRS w EPSG:2180) for real road distance and commercial speed.
3. Pure traversal travel time (arrival(v) - departure(u)).
4. Timetable analytics: service hours (first/last departure), peak/offpeak headways, daily trips.
5. Exports: transit_routes.gpkg, stop_route_matrix.parquet, transit_network_edges.parquet.
"""

import os
import sys
import json
import hashlib
import argparse
from pathlib import Path
from typing import Optional, List, Tuple
import pandas as pd
import geopandas as gpd
import numpy as np
import duckdb
from shapely.geometry import LineString, Point
from shapely.ops import transform
from pyproj import Transformer

# Dodaj główny katalog do sys.path
PROJECT_ROOT = Path(__file__).resolve().parents[2]
if str(PROJECT_ROOT) not in sys.path:
    sys.path.insert(0, str(PROJECT_ROOT))

try:
    from scripts.utils.osm_router import OSMTransitRouter
except ImportError:
    OSMTransitRouter = None

# Domyślna paleta kolorów wg route_type GTFS
DEFAULT_ROUTE_COLORS = {
    0: "#E31E24",  # Tramwaj - Czerwony
    1: "#0078D7",  # Metro - Niebieski
    2: "#107C41",  # Kolej miejska - Zielony
    3: "#FF8C00",  # Autobus - Pomarańczowy
    11: "#8E44AD"  # Trolejbus - Fioletowy
}


def parse_time_to_seconds(t_str: str) -> int:
    """Parsuje czas GTFS HH:MM:SS (obsługuje godziny >= 24)."""
    try:
        parts = str(t_str).strip().split(':')
        return int(parts[0]) * 3600 + int(parts[1]) * 60 + int(parts[2])
    except Exception:
        return 0


def seconds_to_hhmm(sec: int) -> str:
    """Konwertuje sekundy na string HH:MM."""
    if sec is None or sec < 0:
        return ""
    h = (sec // 3600) % 24
    m = (sec % 3600) // 60
    return f"{h:02d}:{m:02d}"


def calculate_headway_minutes(dep_seconds: list) -> tuple[Optional[int], Optional[int]]:
    """Oblicza medianę taktu (w minutach) w szczycie (07-09) i poza szczytem (10-14)."""
    if len(dep_seconds) < 2:
        return None, None
    
    sorted_deps = sorted(dep_seconds)
    peak_diffs = []
    offpeak_diffs = []

    for i in range(len(sorted_deps) - 1):
        t1, t2 = sorted_deps[i], sorted_deps[i + 1]
        diff_min = (t2 - t1) / 60.0
        if 2 <= diff_min <= 120:
            if 7 * 3600 <= t1 <= 9 * 3600:
                peak_diffs.append(diff_min)
            elif 10 * 3600 <= t1 <= 14 * 3600:
                offpeak_diffs.append(diff_min)

    peak_h = int(np.median(peak_diffs)) if peak_diffs else None
    offpeak_h = int(np.median(offpeak_diffs)) if offpeak_diffs else None
    return peak_h, offpeak_h


def extract_city_routes(city_name: str, data_dir: Path) -> bool:
    city_dir = data_dir / "cities" / city_name
    gtfs_dir = city_dir / "gtfs"
    results_dir = city_dir / "04_results"
    results_dir.mkdir(parents=True, exist_ok=True)
    infra_p = city_dir / "02_spatial" / "infrastructure.gpkg"

    if not gtfs_dir.exists():
        print(f"[-] [01b_routes] Brak katalogu GTFS dla {city_name}")
        return False

    # Inicjalizacja routera OSM dla tras bez shapes
    osm_router = None
    if OSMTransitRouter is not None and infra_p.exists():
        osm_router = OSMTransitRouter(infra_p)

    transformer_to_2180 = Transformer.from_crs("EPSG:4326", "EPSG:2180", always_xy=True)
    
    all_routes_gdf = []
    all_stop_routes = []
    all_edges = []

    for feed_dir in sorted(gtfs_dir.iterdir()):
        if not feed_dir.is_dir():
            continue

        feed_id = feed_dir.name
        routes_p = feed_dir / "routes.txt"
        trips_p = feed_dir / "trips.txt"
        stops_p = feed_dir / "stops.txt"
        st_p = feed_dir / "stop_times.txt"
        shapes_p = feed_dir / "shapes.txt"

        if not (routes_p.exists() and trips_p.exists() and stops_p.exists() and st_p.exists()):
            continue

        print(f"[+] [01b_routes] Przetwarzanie feedu: {feed_id} w {city_name} (DuckDB C++ Engine)...")
        con = duckdb.connect()

        # 1. Wczytanie słownika przystanków
        stops_df = con.execute(f"""
            SELECT 
                stop_id::VARCHAR AS stop_id,
                TRY_CAST(stop_lon AS DOUBLE) AS stop_lon,
                TRY_CAST(stop_lat AS DOUBLE) AS stop_lat
            FROM read_csv('{stops_p.as_posix()}', header=true, all_varchar=true, quote='\"', escape='\"', ignore_errors=true)
            WHERE TRY_CAST(stop_lon AS DOUBLE) IS NOT NULL AND TRY_CAST(stop_lat AS DOUBLE) IS NOT NULL
        """).fetchdf()

        stop_coords = {str(row['stop_id']): (float(row['stop_lon']), float(row['stop_lat'])) for _, row in stops_df.iterrows()}
        stop_coords_2180 = {
            str(row['stop_id']): transformer_to_2180.transform(float(row['stop_lon']), float(row['stop_lat']))
            for _, row in stops_df.iterrows()
        }
        stop_points_2180 = {sid: Point(coord) for sid, coord in stop_coords_2180.items()}

        # 2. Wczytanie metadanych tras (routes.txt)
        routes_df = con.execute(f"SELECT * FROM read_csv('{routes_p.as_posix()}', header=true, all_varchar=true, quote='\"', escape='\"', ignore_errors=true)").fetchdf()
        routes_by_id = {str(row['route_id']): row for _, row in routes_df.iterrows()}

        # 3. Wczytanie shapes.txt jeśli istnieje
        has_valid_shapes = shapes_p.exists() and shapes_p.stat().st_size > 500
        shapes_geoms = {}
        if has_valid_shapes:
            try:
                shapes_q = f"""
                    SELECT 
                        shape_id::VARCHAR AS shape_id,
                        list(TRY_CAST(shape_pt_lon AS DOUBLE) ORDER BY COALESCE(TRY_CAST(shape_pt_sequence AS INTEGER), 0)) AS lons,
                        list(TRY_CAST(shape_pt_lat AS DOUBLE) ORDER BY COALESCE(TRY_CAST(shape_pt_sequence AS INTEGER), 0)) AS lats
                    FROM read_csv('{shapes_p.as_posix()}', header=true, all_varchar=true, quote='\"', escape='\"', ignore_errors=true)
                    WHERE TRY_CAST(shape_pt_lon AS DOUBLE) IS NOT NULL AND TRY_CAST(shape_pt_lat AS DOUBLE) IS NOT NULL
                    GROUP BY shape_id
                """
                for sid, lons, lats in con.execute(shapes_q).fetchall():
                    if len(lons) >= 2:
                        shapes_geoms[str(sid)] = LineString(zip(lons, lats))
                print(f"    [shapes.txt] Wczytano {len(shapes_geoms)} unikalnych kształtów GPS dla {feed_id}.")
            except Exception as e:
                print(f"    [!] Błąd czytania shapes.txt: {e}. Przełączam na silnik OSM.")
                has_valid_shapes = False

        # 4. Sprawdzenie nagłówków trips.txt dla opcjonalnych kolumn GTFS
        with open(trips_p, 'r', encoding='utf-8-sig') as f:
            trips_header = [c.strip().strip('"') for c in f.readline().strip().split(',')]

        dir_expr = "COALESCE(TRY_CAST(t.direction_id AS INTEGER), 0)" if 'direction_id' in trips_header else "0::INTEGER"
        shape_expr = "COALESCE(t.shape_id::VARCHAR, '')" if 'shape_id' in trips_header else "''"
        headsign_expr = "COALESCE(t.trip_headsign::VARCHAR, '')" if 'trip_headsign' in trips_header else "''"

        variants_q = f"""
        WITH parsed_st AS (
            SELECT 
                trip_id,
                COALESCE(TRY_CAST(stop_sequence AS INTEGER), 0) AS seq,
                stop_id::VARCHAR AS stop_id,
                COALESCE(TRY_CAST(split_part(departure_time, ':', 1) AS INTEGER), 0) * 3600 +
                COALESCE(TRY_CAST(split_part(departure_time, ':', 2) AS INTEGER), 0) * 60 +
                COALESCE(TRY_CAST(split_part(departure_time, ':', 3) AS INTEGER), 0) AS dep_sec,
                COALESCE(TRY_CAST(split_part(arrival_time, ':', 1) AS INTEGER), 0) * 3600 +
                COALESCE(TRY_CAST(split_part(arrival_time, ':', 2) AS INTEGER), 0) * 60 +
                COALESCE(TRY_CAST(split_part(arrival_time, ':', 3) AS INTEGER), 0) AS arr_sec
            FROM read_csv('{st_p.as_posix()}', header=true, all_varchar=true, quote='\"', escape='\"', ignore_errors=true)
        ),
        trip_stats AS (
            SELECT
                trip_id,
                arg_min(dep_sec, seq) AS first_dep_sec,
                arg_max(arr_sec, seq) AS last_arr_sec,
                arg_max(arr_sec, seq) - arg_min(dep_sec, seq) AS travel_time_sec,
                count(stop_id) AS stop_count,
                string_agg(stop_id, ',' ORDER BY seq) AS stop_ids_str,
                substring(md5(string_agg(stop_id, '->' ORDER BY seq)), 1, 8) AS pattern_hash
            FROM parsed_st
            GROUP BY trip_id
        )
        SELECT 
            t.route_id::VARCHAR AS route_id,
            {dir_expr} AS direction_id,
            ts.pattern_hash,
            count(*) AS daily_trips,
            any_value(ts.stop_ids_str) AS stop_ids_str,
            max(ts.stop_count) AS stop_count,
            COALESCE(mode({shape_expr}) FILTER (WHERE {shape_expr} != ''), '') AS shape_id,
            COALESCE(mode({headsign_expr}) FILTER (WHERE {headsign_expr} != ''), '') AS headsign,
            COALESCE(avg(ts.travel_time_sec) FILTER (WHERE ts.travel_time_sec > 0), 0.0) AS avg_travel_time_sec,
            list(ts.first_dep_sec ORDER BY ts.first_dep_sec) FILTER (WHERE ts.first_dep_sec > 0) AS departures
        FROM read_csv('{trips_p.as_posix()}', header=true, all_varchar=true, quote='\"', escape='\"', ignore_errors=true) t
        JOIN trip_stats ts ON t.trip_id = ts.trip_id
        GROUP BY 1, 2, 3
        """
        variants_df = con.execute(variants_q).fetchdf()
        variant_shapes_2180 = {}

        for row in variants_df.itertuples(index=False):
            r_id = str(row.route_id)
            d_id = int(row.direction_id)
            p_hash = str(row.pattern_hash)
            total_trips = int(row.daily_trips)
            stop_ids_str = str(row.stop_ids_str) if row.stop_ids_str else ""
            trip_stops = [s.strip() for s in stop_ids_str.split(',') if s.strip()]
            shape_id = str(row.shape_id) if row.shape_id else ""
            headsign = str(row.headsign) if row.headsign else ""

            route_meta = routes_by_id.get(r_id)
            if route_meta is None:
                continue

            if not headsign:
                headsign = str(route_meta.get('route_long_name') or f"Linia {r_id}")

            try:
                r_type = int(route_meta.get('route_type', 3))
            except Exception:
                r_type = 3

            raw_color = str(route_meta.get('route_color', '')).strip().upper()
            r_color = f"#{raw_color}" if raw_color and raw_color != 'NAN' and len(raw_color) == 6 else DEFAULT_ROUTE_COLORS.get(r_type, "#FF8C00")

            # Multi-tier geometry fusion
            geom = None
            geom_source = "direct_fallback"

            # Poziom 1: GTFS shapes.txt
            if has_valid_shapes and shape_id in shapes_geoms:
                geom = shapes_geoms[shape_id]
                geom_source = "gtfs_shape"
            else:
                coords = [stop_coords[s] for s in trip_stops if s in stop_coords]
                if osm_router is not None and len(coords) >= 2:
                    mode = "tram" if r_type in [0, 1] else "bus"
                    osm_geom, src = osm_router.route_stops_sequence(coords, mode=mode)
                    if osm_geom and osm_geom.is_valid and not osm_geom.is_empty:
                        geom = osm_geom
                        geom_source = src

                if geom is None and len(coords) >= 2:
                    geom = LineString(coords)
                    geom_source = "direct_fallback"

            if geom is None or not geom.is_valid or geom.is_empty:
                continue

            geom_2180 = transform(transformer_to_2180.transform, geom)
            variant_shapes_2180[p_hash] = geom_2180
            length_km = round(geom_2180.length / 1000.0, 2)

            avg_travel_time_sec = float(row.avg_travel_time_sec)
            travel_time_min = round(avg_travel_time_sec / 60.0, 1)

            if avg_travel_time_sec > 0 and length_km > 0:
                commercial_speed_kmh = round(length_km / (avg_travel_time_sec / 3600.0), 2)
                commercial_speed_kmh = max(3.0, min(commercial_speed_kmh, 90.0))
            else:
                commercial_speed_kmh = 20.0

            first_departures = []
            if row.departures is not None and row.departures is not pd.NA and hasattr(row.departures, '__len__') and len(row.departures) > 0:
                first_departures = [int(x) for x in row.departures]
            if first_departures:
                first_dep_str = seconds_to_hhmm(first_departures[0])
                last_dep_str = seconds_to_hhmm(first_departures[-1])
                peak_h, offpeak_h = calculate_headway_minutes(first_departures)
            else:
                first_dep_str = ""
                last_dep_str = ""
                peak_h, offpeak_h = None, None

            all_routes_gdf.append({
                'feed_id': str(feed_id),
                'route_id': str(r_id),
                'route_uid': f"{feed_id}_{r_id}",
                'route_short_name': str(route_meta.get('route_short_name') or r_id),
                'route_long_name': str(route_meta.get('route_long_name') or ''),
                'route_type': r_type,
                'route_color': r_color,
                'direction_id': d_id,
                'pattern_hash': p_hash,
                'headsign': headsign,
                'daily_trips': total_trips,
                'stop_count': len(trip_stops),
                'stop_ids': stop_ids_str,
                'length_km': length_km,
                'travel_time_min': travel_time_min,
                'commercial_speed_kmh': commercial_speed_kmh,
                'first_departure': first_dep_str,
                'last_departure': last_dep_str,
                'peak_headway_min': peak_h,
                'offpeak_headway_min': offpeak_h,
                'geometry_source': geom_source,
                'is_shape_interpolated': (geom_source == "direct_fallback"),
                'geometry': geom
            })

        # 5. Budowa macierzy słupków i grafu krawędzi sieci w DuckDB C++
        stop_matrix_q = f"""
        WITH parsed_st AS (
            SELECT 
                trip_id,
                COALESCE(TRY_CAST(stop_sequence AS INTEGER), 0) AS seq,
                stop_id::VARCHAR AS stop_id
            FROM read_csv('{st_p.as_posix()}', header=true, all_varchar=true, quote='\"', escape='\"', ignore_errors=true)
        )
        SELECT
            '{feed_id}' AS feed_id,
            pst.stop_id,
            t.route_id::VARCHAR AS route_id,
            '{feed_id}_' || t.route_id::VARCHAR AS route_uid,
            {dir_expr} AS direction_id,
            count(DISTINCT pst.trip_id) AS daily_departures,
            min(pst.seq) AS min_sequence
        FROM parsed_st pst
        JOIN read_csv('{trips_p.as_posix()}', header=true, all_varchar=true, quote='\"', escape='\"', ignore_errors=true) t ON pst.trip_id = t.trip_id
        GROUP BY 1, 2, 3, 4, 5
        """
        stop_matrix = con.execute(stop_matrix_q).fetchdf()
        all_stop_routes.append(stop_matrix)

        # Krawędzie grafu z Linear Referencing System (LRS w EPSG:2180)
        edges_q = f"""
        WITH parsed_st AS (
            SELECT 
                trip_id,
                COALESCE(TRY_CAST(stop_sequence AS INTEGER), 0) AS seq,
                stop_id::VARCHAR AS stop_id,
                COALESCE(TRY_CAST(split_part(departure_time, ':', 1) AS INTEGER), 0) * 3600 +
                COALESCE(TRY_CAST(split_part(departure_time, ':', 2) AS INTEGER), 0) * 60 +
                COALESCE(TRY_CAST(split_part(departure_time, ':', 3) AS INTEGER), 0) AS dep_sec,
                COALESCE(TRY_CAST(split_part(arrival_time, ':', 1) AS INTEGER), 0) * 3600 +
                COALESCE(TRY_CAST(split_part(arrival_time, ':', 2) AS INTEGER), 0) * 60 +
                COALESCE(TRY_CAST(split_part(arrival_time, ':', 3) AS INTEGER), 0) AS arr_sec
            FROM read_csv('{st_p.as_posix()}', header=true, all_varchar=true, quote='\"', escape='\"', ignore_errors=true)
        ),
        trip_pats AS (
            SELECT
                trip_id,
                substring(md5(string_agg(stop_id, '->' ORDER BY seq)), 1, 8) AS pattern_hash
            FROM parsed_st
            GROUP BY trip_id
        ),
        st_with_trips AS (
            SELECT 
                t.route_id::VARCHAR AS route_id,
                {dir_expr} AS direction_id,
                tp.pattern_hash,
                pst.trip_id,
                pst.seq,
                pst.stop_id AS from_stop_id,
                pst.dep_sec,
                lead(pst.stop_id) OVER (PARTITION BY pst.trip_id ORDER BY pst.seq) AS to_stop_id,
                lead(pst.arr_sec) OVER (PARTITION BY pst.trip_id ORDER BY pst.seq) AS next_arr_sec
            FROM parsed_st pst
            JOIN trip_pats tp ON pst.trip_id = tp.trip_id
            JOIN read_csv('{trips_p.as_posix()}', header=true, all_varchar=true, quote='\"', escape='\"', ignore_errors=true) t ON pst.trip_id = t.trip_id
        ),
        valid_edges AS (
            SELECT
                route_id,
                direction_id,
                pattern_hash,
                from_stop_id,
                to_stop_id,
                (next_arr_sec - dep_sec) AS travel_time_sec
            FROM st_with_trips
            WHERE to_stop_id IS NOT NULL AND (next_arr_sec - dep_sec) > 0
        )
        SELECT
            '{feed_id}' AS feed_id,
            from_stop_id,
            to_stop_id,
            route_id,
            '{feed_id}_' || route_id AS route_uid,
            direction_id,
            pattern_hash,
            round(avg(travel_time_sec), 1) AS avg_travel_time_sec,
            count(*) AS total_trips
        FROM valid_edges
        GROUP BY 1, 2, 3, 4, 5, 6, 7
        """
        edge_summary = con.execute(edges_q).fetchdf()

        edge_distances = []
        is_real_list = []
        speed_list = []

        for u, v, p_h, t_sec in zip(edge_summary['from_stop_id'], edge_summary['to_stop_id'], edge_summary['pattern_hash'], edge_summary['avg_travel_time_sec']):
            pt_u = stop_points_2180.get(u)
            pt_v = stop_points_2180.get(v)
            d_real = 0.0
            is_real = False

            if pt_u is not None and pt_v is not None:
                sh_2180 = variant_shapes_2180.get(p_h)
                if sh_2180 is not None:
                    proj_u = sh_2180.project(pt_u)
                    proj_v = sh_2180.project(pt_v)
                    d_proj = abs(proj_v - proj_u)
                    if d_proj >= 1.0:
                        d_real = d_proj
                        is_real = True

                if not is_real:
                    d_real = pt_u.distance(pt_v)
                    is_real = False

            edge_distances.append(round(float(d_real), 1))
            is_real_list.append(is_real)

            if t_sec > 0 and d_real > 0:
                v_kmh = (d_real / 1000.0) / (t_sec / 3600.0)
                v_kmh = max(2.0, min(v_kmh, 110.0))
            else:
                v_kmh = 20.0
            speed_list.append(round(float(v_kmh), 2))

        edge_summary['distance_m'] = edge_distances
        edge_summary['speed_kmh'] = speed_list
        edge_summary['is_distance_real'] = is_real_list
        all_edges.append(edge_summary)

        con.close()

    # 6. Eksport warstw wyjściowych
    if all_routes_gdf:
        routes_gdf = gpd.GeoDataFrame(all_routes_gdf, crs="EPSG:4326")

        # Flaga wariantu kanonicznego per feed_id, route_id, direction_id
        routes_gdf['is_canonical'] = False
        idx_canonical = routes_gdf.groupby(['feed_id', 'route_id', 'direction_id'])['daily_trips'].idxmax()
        routes_gdf.loc[idx_canonical, 'is_canonical'] = True

        out_gpkg = results_dir / "transit_routes.gpkg"
        routes_gdf.to_file(out_gpkg, driver="GPKG", layer="transit_routes", engine="pyogrio")
        print(f"[✓] [01b_routes] Zapisano {len(routes_gdf)} tras do {out_gpkg}")

    if all_stop_routes:
        full_stop_matrix = pd.concat(all_stop_routes, ignore_index=True)
        out_matrix = results_dir / "stop_route_matrix.parquet"
        full_stop_matrix.to_parquet(out_matrix, index=False)
        print(f"[✓] [01b_routes] Zapisano macierz słupków do {out_matrix}")

    if all_edges:
        full_edges = pd.concat(all_edges, ignore_index=True)
        out_edges = results_dir / "transit_network_edges.parquet"
        full_edges.to_parquet(out_edges, index=False)
        print(f"[✓] [01b_routes] Zapisano graf sieci transportowej (LRS) do {out_edges}")

    return True


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Extract transit routes and topology")
    parser.add_argument("--city", help="Nazwa miasta")
    parser.add_argument("--all", action="store_true", help="Przetwarzaj wszystkie miasta")
    parser.add_argument("--data-dir", default="data", help="Katalog bazy danych")
    args = parser.parse_args()

    data_path = Path(args.data_dir)
    if args.city:
        extract_city_routes(args.city, data_path)
    elif args.all:
        cities_dir = data_path / "cities"
        for c in sorted(cities_dir.iterdir()):
            if c.is_dir() and (c / "gtfs").exists():
                extract_city_routes(c.name, data_path)
