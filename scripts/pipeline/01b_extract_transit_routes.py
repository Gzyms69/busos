#!/usr/bin/env python3
"""
01b_extract_transit_routes.py - BusOS Transit Route Network & Topology Extraction
Extracts high-fidelity LineString geometries for all transit routes, handles feeds
with and without shapes.txt via Canonical Trip Patterns, isolates multi-feed route IDs,
and exports the topological graph with pure traversal times.
"""

import os
import sys
import json
import hashlib
import argparse
from pathlib import Path
import pandas as pd
import geopandas as gpd
from shapely.geometry import LineString, Point

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

def extract_city_routes(city_name: str, data_dir: Path) -> bool:
    city_dir = data_dir / "cities" / city_name
    gtfs_dir = city_dir / "gtfs"
    results_dir = city_dir / "04_results"
    results_dir.mkdir(parents=True, exist_ok=True)
    
    if not gtfs_dir.exists():
        print(f"[-] [01b_routes] Brak katalogu GTFS dla {city_name}")
        return False

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

        print(f"[+] [01b_routes] Przetwarzanie feedu: {feed_id} w {city_name}...")
        
        # 1. Wczytanie tabel GTFS
        routes = pd.read_csv(routes_p, dtype=str)
        trips = pd.read_csv(trips_p, dtype=str)
        stops = pd.read_csv(stops_p, dtype=str)
        st = pd.read_csv(st_p, dtype={
            'trip_id': str, 
            'stop_id': str, 
            'stop_sequence': int, 
            'arrival_time': str, 
            'departure_time': str
        })
        
        # Przygotowanie słownika współrzędnych przystanków
        stops['stop_lat'] = pd.to_numeric(stops['stop_lat'], errors='coerce')
        stops['stop_lon'] = pd.to_numeric(stops['stop_lon'], errors='coerce')
        stops = stops.dropna(subset=['stop_lat', 'stop_lon'])
        stop_coords = {row['stop_id']: (row['stop_lon'], row['stop_lat']) for _, row in stops.iterrows()}
        
        # 2. Weryfikacja dostępności shapes.txt
        has_valid_shapes = shapes_p.exists() and shapes_p.stat().st_size > 500
        shapes_geoms = {}
        if has_valid_shapes:
            try:
                sh_df = pd.read_csv(shapes_p, dtype={'shape_id': str, 'shape_pt_sequence': int, 'shape_pt_lat': float, 'shape_pt_lon': float})
                sh_df = sh_df.sort_values(['shape_id', 'shape_pt_sequence'])
                for sid, grp in sh_df.groupby('shape_id'):
                    if len(grp) >= 2:
                        shapes_geoms[sid] = LineString(zip(grp['shape_pt_lon'], grp['shape_pt_lat']))
                print(f"    [shapes.txt] Wczytano {len(shapes_geoms)} unikalnych kształtów GPS dla {feed_id}.")
            except Exception as e:
                print(f"    [!] Błąd czytania shapes.txt: {e}. Przełączam na fallback sekwencji.")
                has_valid_shapes = False

        # 3. Złączenie trips z trasami
        if 'direction_id' not in trips.columns:
            trips['direction_id'] = '0'
        trips['direction_id'] = trips['direction_id'].fillna('0')
        
        st_sorted = st.sort_values(['trip_id', 'stop_sequence'])
        
        # 4. Generowanie wzorców sekwencji przystanków (Canonical Trip Patterns)
        trip_patterns = st_sorted.groupby('trip_id')['stop_id'].apply(tuple).to_dict()
        trips['pattern'] = trips['trip_id'].map(trip_patterns)
        trips = trips.dropna(subset=['pattern'])
        trips['pattern_hash'] = trips['pattern'].apply(lambda p: hashlib.md5("->".join(p).encode()).hexdigest()[:8])

        # Grupowanie wariantów tras: (route_id, direction_id, pattern_hash)
        variant_groups = trips.groupby(['route_id', 'direction_id', 'pattern_hash'])
        
        for (r_id, d_id, p_hash), grp in variant_groups:
            route_meta = routes[routes['route_id'] == r_id]
            if route_meta.empty:
                continue
            r_row = route_meta.iloc[0]
            
            total_trips = len(grp)
            sample_trip = grp.iloc[0]
            trip_stops = sample_trip['pattern']
            headsign = sample_trip.get('trip_headsign', r_row.get('route_long_name', f"Linia {r_id}"))
            
            # Identyfikacja koloru i typu
            r_type = int(r_row.get('route_type', 3))
            raw_color = str(r_row.get('route_color', '')).strip().upper()
            r_color = f"#{raw_color}" if raw_color and raw_color != 'NAN' and len(raw_color) == 6 else DEFAULT_ROUTE_COLORS.get(r_type, "#FF8C00")

            # Rekonstrukcja geometrii: Poziom 1 (shapes.txt) lub Poziom 2 (interpolacja przystankowa)
            geom = None
            interpolated = True
            
            shape_id = str(sample_trip.get('shape_id', ''))
            if has_valid_shapes and shape_id in shapes_geoms:
                geom = shapes_geoms[shape_id]
                interpolated = False
            else:
                coords = [stop_coords[s] for s in trip_stops if s in stop_coords]
                if len(coords) >= 2:
                    geom = LineString(coords)
                    interpolated = True

            if geom is not None and geom.is_valid and not geom.is_empty:
                all_routes_gdf.append({
                    'feed_id': str(feed_id),
                    'route_id': str(r_id),
                    'route_uid': f"{feed_id}_{r_id}",
                    'route_short_name': str(r_row.get('route_short_name', r_id)),
                    'route_long_name': str(r_row.get('route_long_name', '')),
                    'route_type': r_type,
                    'route_color': r_color,
                    'direction_id': int(d_id),
                    'pattern_hash': str(p_hash),
                    'headsign': str(headsign),
                    'daily_trips': total_trips,
                    'is_shape_interpolated': interpolated,
                    'stop_count': len(trip_stops),
                    'geometry': geom
                })

        # 5. Budowa macierzy słupków i grafu przesiadkowego (topologia)
        st_trips = st_sorted.merge(trips[['trip_id', 'route_id', 'direction_id']], on='trip_id')
        st_trips['feed_id'] = feed_id
        st_trips['route_uid'] = f"{feed_id}_" + st_trips['route_id'].astype(str)

        stop_matrix = st_trips.groupby(['feed_id', 'stop_id', 'route_id', 'route_uid', 'direction_id']).agg(
            daily_departures=('trip_id', 'count'),
            min_sequence=('stop_sequence', 'min')
        ).reset_index()
        all_stop_routes.append(stop_matrix)

        # Krawędzie grafu (from_stop_id -> to_stop_id)
        # Czysty czas przejazdu: arrival_time(v) - departure_time(u)
        st_trips['next_stop_id'] = st_trips.groupby('trip_id')['stop_id'].shift(-1)
        st_trips['dep_sec'] = st_trips['departure_time'].apply(parse_time_to_seconds)
        st_trips['next_arr_sec'] = st_trips.groupby('trip_id')['arrival_time'].shift(-1).apply(parse_time_to_seconds)
        
        edges = st_trips.dropna(subset=['next_stop_id']).copy()
        edges['travel_time_sec'] = edges['next_arr_sec'] - edges['dep_sec']
        edges = edges[edges['travel_time_sec'] > 0]
        
        edge_summary = edges.groupby(['feed_id', 'stop_id', 'next_stop_id', 'route_id', 'route_uid', 'direction_id']).agg(
            avg_travel_time_sec=('travel_time_sec', 'mean'),
            total_trips=('trip_id', 'count')
        ).reset_index().rename(columns={'stop_id': 'from_stop_id', 'next_stop_id': 'to_stop_id'})
        all_edges.append(edge_summary)

    # 6. Eksport warstw wyjściowych z kluczem kompozytowym (feed_id, route_id, direction_id)
    if all_routes_gdf:
        routes_gdf = gpd.GeoDataFrame(all_routes_gdf, crs="EPSG:4326")
        
        # Wybór wariantu kanonicznego per feed_id, route_id i direction_id (brak kolizji!)
        routes_gdf['is_canonical'] = False
        idx_canonical = routes_gdf.groupby(['feed_id', 'route_id', 'direction_id'])['daily_trips'].idxmax()
        routes_gdf.loc[idx_canonical, 'is_canonical'] = True
        
        out_gpkg = results_dir / "transit_routes.gpkg"
        routes_gdf.to_file(out_gpkg, driver="GPKG", layer="transit_routes")
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
        print(f"[✓] [01b_routes] Zapisano graf sieci transportowej do {out_edges}")

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
