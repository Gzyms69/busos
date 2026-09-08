#!/usr/bin/env python3
"""
01c_osm_transit_matcher.py - BusOS OSM Transit Map-Matching Engine
Performs street- and track-level map-matching for transit routes without shapes.txt
using OSM network graphs in EPSG:2180. Exports synthetic_shapes.gpkg and updates transit_routes.gpkg.
"""

import os
import sys
import json
import argparse
from pathlib import Path
import pandas as pd
import geopandas as gpd
from shapely.geometry import LineString

# Root project path for imports
PROJECT_ROOT = Path(__file__).resolve().parents[2]
if str(PROJECT_ROOT) not in sys.path:
    sys.path.insert(0, str(PROJECT_ROOT))

from scripts.utils.osm_router import OSMTransitRouter


def map_match_city_routes(city_name: str, data_dir: Path) -> bool:
    city_dir = data_dir / "cities" / city_name
    infra_p = city_dir / "02_spatial" / "infrastructure.gpkg"
    routes_p = city_dir / "04_results" / "transit_routes.gpkg"
    stops_p = city_dir / "02_spatial" / "stops.gpkg"
    matrix_p = city_dir / "04_results" / "stop_route_matrix.parquet"
    out_shapes_gpkg = city_dir / "04_results" / "synthetic_shapes.gpkg"

    if not routes_p.exists():
        print(f"[-] [01c_matcher] Brak transit_routes.gpkg dla {city_name}. Uruchom najpierw 01b.")
        return False

    if not infra_p.exists():
        print(f"[-] [01c_matcher] Brak infrastructure.gpkg dla {city_name}. Pomijam.")
        return False

    print(f"[+] [01c_matcher] Rozpoczynam map-matching OSM dla {city_name}...")
    router = OSMTransitRouter(infra_p)

    routes_gdf = gpd.read_file(routes_p, layer="transit_routes")
    stops_gdf = gpd.read_file(stops_p)
    stop_coords = {str(row['stop_id']): (row.geometry.x, row.geometry.y) for _, row in stops_gdf.iterrows()}

    # Słownik sekwencji przystanków z stop_times w GTFS lub macierzy
    stop_sequences = {}
    gtfs_dir = city_dir / "gtfs"
    if gtfs_dir.exists():
        for feed_dir in gtfs_dir.iterdir():
            if not feed_dir.is_dir():
                continue
            st_file = feed_dir / "stop_times.txt"
            tr_file = feed_dir / "trips.txt"
            if st_file.exists() and tr_file.exists():
                st = pd.read_csv(st_file, dtype={'trip_id': str, 'stop_id': str, 'stop_sequence': int})
                tr = pd.read_csv(tr_file, dtype=str)
                if 'direction_id' not in tr.columns:
                    tr['direction_id'] = '0'
                tr['direction_id'] = tr['direction_id'].fillna('0')
                merged = tr[['trip_id', 'route_id', 'direction_id']].merge(st, on='trip_id')
                merged = merged.sort_values(['trip_id', 'stop_sequence'])
                for (r_id, d_id), grp in merged.groupby(['route_id', 'direction_id']):
                    first_trip_id = grp['trip_id'].iloc[0]
                    seq_stops = grp[grp['trip_id'] == first_trip_id]['stop_id'].tolist()
                    key = (feed_dir.name, str(r_id), str(d_id))
                    stop_sequences[key] = seq_stops

    matched_count = 0
    synthetic_shapes = []

    for idx, row in routes_gdf.iterrows():
        # Map-matching wykonujemy dla tras, które nie miały pełnego kształtu GPS
        is_interpolated = bool(row.get('is_shape_interpolated', True))
        feed_id = str(row.get('feed_id', ''))
        route_id = str(row['route_id'])
        direction_id = str(row.get('direction_id', '0'))
        key = (feed_id, route_id, direction_id)

        stops_list = stop_sequences.get(key, [])
        if not stops_list:
            continue

        coords = [stop_coords[s] for s in stops_list if s in stop_coords]
        if len(coords) < 2:
            continue

        # Jeśli trasa była interpolowana po prostej, zastępujemy ją trasą OSM
        if is_interpolated:
            mode = "tram" if row.get('route_type') in [0, 1] else "bus"
            new_geom, src = router.route_stops_sequence(coords, mode=mode)
            if new_geom and new_geom.is_valid and not new_geom.is_empty:
                routes_gdf.at[idx, 'geometry'] = new_geom
                routes_gdf.at[idx, 'is_shape_interpolated'] = False
                routes_gdf.at[idx, 'geometry_source'] = src
                matched_count += 1
                synthetic_shapes.append({
                    'feed_id': feed_id,
                    'route_id': route_id,
                    'direction_id': int(direction_id),
                    'geometry_source': src,
                    'stop_count': len(coords),
                    'geometry': new_geom
                })
        else:
            if 'geometry_source' not in routes_gdf.columns:
                routes_gdf.at[idx, 'geometry_source'] = 'gtfs_shape'

    # Zapis synthetic_shapes.gpkg
    if synthetic_shapes:
        synth_gdf = gpd.GeoDataFrame(synthetic_shapes, crs="EPSG:4326")
        synth_gdf.to_file(out_shapes_gpkg, driver="GPKG", layer="synthetic_shapes")
        print(f"    [✓] Wygenerowano {len(synth_gdf)} syntetycznych kształtów do {out_shapes_gpkg.name}")

    # Aktualizacja transit_routes.gpkg
    routes_gdf.to_file(routes_p, driver="GPKG", layer="transit_routes")
    print(f"[✓] [01c_matcher] Zaktualizowano {matched_count} tras w {routes_p.name} dla {city_name}")
    return True


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="BusOS OSM Transit Map-Matching Engine")
    parser.add_argument("--city", help="Nazwa miasta")
    parser.add_argument("--all", action="store_true", help="Przetwarzaj wszystkie miasta")
    parser.add_argument("--data-dir", default="data", help="Katalog bazy danych")
    args = parser.parse_args()

    data_path = Path(args.data_dir)
    if args.city:
        map_match_city_routes(args.city, data_path)
    elif args.all:
        cities_dir = data_path / "cities"
        for c in sorted(cities_dir.iterdir()):
            if c.is_dir() and (c / "04_results" / "transit_routes.gpkg").exists():
                map_match_city_routes(c.name, data_path)
