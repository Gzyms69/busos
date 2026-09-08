"""
backend/app/routers/routes.py
API router exposing 100% GTFS extracted route networks, sequences, and topology.
Pure Transit Domain Architecture: GTFS Timetable, Directions, Segment Distances, and Speeds.
"""

from fastapi import APIRouter, Query, HTTPException, Request
from typing import Optional, List, Dict, Any, Tuple
import os
from pathlib import Path
import json
import geopandas as gpd
import pandas as pd
import numpy as np
import duckdb
from shapely.geometry import mapping
from app.schemas import StopDestinationsResponse, StopDestinationItem

router = APIRouter(prefix="/routes", tags=["Transit Route Networks (GTFS 100%)"])

DEFAULT_DATA_PATHS = [
    os.getenv("BUSOS_DATA_DIR"),
    "/data/cities",
    str(Path(__file__).resolve().parents[3] / "data" / "cities") if len(Path(__file__).resolve().parents) > 3 else None,
    os.path.join(os.getcwd(), "../data/cities"),
    os.path.join(os.getcwd(), "data/cities"),
    os.path.join(os.path.dirname(__file__), "../../data/cities"),
]
DATA_DIR = Path(next((p for p in DEFAULT_DATA_PATHS if p and os.path.exists(p)), "data/cities"))

# In-memory caches with timestamp invalidation for sub-5ms responses & thread-safety
_STOPS_CACHE: Dict[str, Tuple[float, Dict[str, Dict[str, Any]]]] = {}
_ROUTES_CACHE: Dict[str, Tuple[float, gpd.GeoDataFrame]] = {}


def _get_stops_dict(city: str) -> Dict[str, Dict[str, Any]]:
    stops_p = DATA_DIR / city / "02_spatial" / "stops.gpkg"
    if not stops_p.exists():
        stops_p = DATA_DIR / city / "04_results" / "stop_dna.gpkg"
    if not stops_p.exists():
        return {}
    mtime = stops_p.stat().st_mtime
    if city in _STOPS_CACHE:
        cached_mtime, cached_map = _STOPS_CACHE[city]
        if cached_mtime == mtime:
            return cached_map

    gdf = gpd.read_file(stops_p, engine="pyogrio")
    stops_map = {}
    for _, row in gdf.iterrows():
        sid = str(row['stop_id'])
        lat = row.get('stop_lat', None)
        lon = row.get('stop_lon', None)
        if lat is None or lon is None or pd.isna(lat) or pd.isna(lon):
            lat = row.geometry.y
            lon = row.geometry.x
        stops_map[sid] = {
            "stop_id": sid,
            "stop_name": str(row.get('stop_name', f"Słupek {sid}")),
            "lat": round(float(lat), 6),
            "lon": round(float(lon), 6)
        }
    _STOPS_CACHE[city] = (mtime, stops_map)
    return stops_map


def _get_routes_gdf(city: str) -> Optional[gpd.GeoDataFrame]:
    routes_gpkg = DATA_DIR / city / "04_results" / "transit_routes.gpkg"
    if not routes_gpkg.exists():
        return None
    mtime = routes_gpkg.stat().st_mtime
    if city in _ROUTES_CACHE:
        cached_mtime, cached_gdf = _ROUTES_CACHE[city]
        if cached_mtime == mtime:
            return cached_gdf.copy(deep=False)

    gdf = gpd.read_file(routes_gpkg, layer="transit_routes", engine="pyogrio")
    _ROUTES_CACHE[city] = (mtime, gdf)
    return gdf.copy(deep=False)


@router.get("", summary="List transit lines with modal types and frequencies")
async def list_routes(
    city: str = Query(..., description="City slug"),
    feed_id: Optional[str] = Query(None, description="GTFS feed identifier"),
    route_type: Optional[int] = Query(None, description="GTFS route_type (0=Tram, 1=Metro, 2=Rail, 3=Bus)"),
    canonical_only: bool = Query(True, description="Return only main canonical routes")
):
    gdf = _get_routes_gdf(city)
    if gdf is None or gdf.empty:
        raise HTTPException(status_code=404, detail=f"Brak tras GTFS dla miasta {city}")

    if canonical_only and 'is_canonical' in gdf.columns:
        gdf = gdf[gdf['is_canonical'] == True]
    if feed_id:
        gdf = gdf[gdf['feed_id'] == feed_id]
    if route_type is not None:
        gdf = gdf[gdf['route_type'] == route_type]

    results = []
    for _, r in gdf.iterrows():
        results.append({
            "feed_id": r.get('feed_id', ''),
            "route_id": str(r['route_id']),
            "route_uid": str(r.get('route_uid', f"{r.get('feed_id', '')}_{r['route_id']}")),
            "short_name": str(r.get('route_short_name', r['route_id'])),
            "long_name": str(r.get('route_long_name', '')),
            "type": int(r.get('route_type', 3)),
            "color": str(r.get('route_color', '#FF8C00')),
            "direction_id": int(r.get('direction_id', 0)),
            "headsign": str(r.get('headsign', '')),
            "daily_trips": int(r.get('daily_trips', 0)),
            "stop_count": int(r.get('stop_count', 0)),
            "length_km": float(r['length_km']) if 'length_km' in r and pd.notna(r['length_km']) else None,
            "travel_time_min": float(r['travel_time_min']) if 'travel_time_min' in r and pd.notna(r['travel_time_min']) else None,
            "commercial_speed_kmh": float(r['commercial_speed_kmh']) if 'commercial_speed_kmh' in r and pd.notna(r['commercial_speed_kmh']) else None,
            "first_departure": str(r.get('first_departure', '')) if pd.notna(r.get('first_departure')) else "",
            "last_departure": str(r.get('last_departure', '')) if pd.notna(r.get('last_departure')) else "",
            "peak_headway_min": int(r['peak_headway_min']) if 'peak_headway_min' in r and pd.notna(r['peak_headway_min']) else None,
            "offpeak_headway_min": int(r['offpeak_headway_min']) if 'offpeak_headway_min' in r and pd.notna(r['offpeak_headway_min']) else None,
            "geometry_source": str(r.get('geometry_source', 'gtfs_shape')),
            "is_shape_interpolated": bool(r.get('is_shape_interpolated', False))
        })
    return results


@router.get("/search", summary="Search and autocomplete transit lines")
async def search_routes(
    city: str = Query(..., description="City slug"),
    query: Optional[str] = Query(None, description="Search query for line number or headsign"),
    limit: int = Query(50, ge=1, le=200)
):
    gdf = _get_routes_gdf(city)
    if gdf is None or gdf.empty:
        raise HTTPException(status_code=404, detail=f"Brak tras GTFS dla miasta {city}")

    if 'is_canonical' in gdf.columns:
        gdf = gdf[gdf['is_canonical'] == True]

    if query:
        q = str(query).strip().lower()
        mask = (
            gdf['route_short_name'].astype(str).str.lower().str.contains(q, na=False) |
            gdf['headsign'].astype(str).str.lower().str.contains(q, na=False) |
            gdf['route_long_name'].astype(str).str.lower().str.contains(q, na=False)
        )
        gdf = gdf[mask]

    gdf = gdf.head(limit)
    return [
        {
            "route_uid": str(r.get('route_uid', f"{r.get('feed_id', '')}_{r['route_id']}")),
            "short_name": str(r.get('route_short_name', r['route_id'])),
            "long_name": str(r.get('route_long_name', '')),
            "type": int(r.get('route_type', 3)),
            "color": str(r.get('route_color', '#FF8C00')),
            "direction_id": int(r.get('direction_id', 0)),
            "headsign": str(r.get('headsign', '')),
            "daily_trips": int(r.get('daily_trips', 0)),
            "stop_count": int(r.get('stop_count', 0)),
            "length_km": float(r['length_km']) if 'length_km' in r and pd.notna(r['length_km']) else None,
            "commercial_speed_kmh": float(r['commercial_speed_kmh']) if 'commercial_speed_kmh' in r and pd.notna(r['commercial_speed_kmh']) else None
        }
        for _, r in gdf.iterrows()
    ]


@router.get("/geometry", summary="GeoJSON of route networks for Deck.gl / MapLibre")
async def get_routes_geojson(
    city: str = Query(...),
    route_uid: Optional[str] = Query(None, description="Feed-qualified route identifier"),
    route_id: Optional[str] = Query(None),
    canonical_only: bool = Query(True)
):
    gdf = _get_routes_gdf(city)
    if gdf is None or gdf.empty:
        raise HTTPException(status_code=404, detail=f"Brak warstwy transit_routes.gpkg dla {city}")

    if canonical_only and 'is_canonical' in gdf.columns:
        gdf = gdf[gdf['is_canonical'] == True]
    if route_uid and 'route_uid' in gdf.columns:
        gdf = gdf[gdf['route_uid'] == route_uid]
    elif route_id:
        gdf = gdf[gdf['route_id'] == route_id]

    return json.loads(gdf.to_json())


@router.get("/stop/{stop_id}", summary="All routes serving a specific stop")
async def get_stop_serving_routes(city: str = Query(...), stop_id: str = ...):
    matrix_p = DATA_DIR / city / "04_results" / "stop_route_matrix.parquet"
    if not matrix_p.exists():
        raise HTTPException(status_code=404, detail=f"Brak macierzy stop_route_matrix dla {city}")

    df = pd.read_parquet(matrix_p)
    stop_routes = df[df['stop_id'] == stop_id]
    return stop_routes.to_dict(orient="records")


@router.get("/stop/{stop_id}/destinations", response_model=StopDestinationsResponse, summary="1-hop reachable direct destination stops from a transit stop")
async def get_stop_destinations(stop_id: str, city: str = Query(..., description="City slug")):
    edges_p = DATA_DIR / city / "04_results" / "transit_network_edges.parquet"
    if not edges_p.exists():
        raise HTTPException(status_code=404, detail=f"Brak grafu transit_network_edges dla miasta {city}")

    stops_dict = _get_stops_dict(city)
    from_info = stops_dict.get(str(stop_id))
    from_stop_name = from_info["stop_name"] if from_info else f"Przystanek {stop_id}"

    conn = duckdb.connect(":memory:")
    try:
        rows = conn.execute(
            """
            SELECT 
                CAST(to_stop_id AS VARCHAR) AS to_stop_id,
                CAST(ROUND(MIN(avg_travel_time_sec)) AS INTEGER) AS min_travel_time_sec,
                ROUND(AVG(distance_m), 1) AS distance_m,
                ROUND(AVG(speed_kmh), 1) AS speed_kmh,
                LIST(DISTINCT CAST(route_id AS VARCHAR)) AS routes
            FROM read_parquet(?)
            WHERE CAST(from_stop_id AS VARCHAR) = ?
            GROUP BY to_stop_id
            ORDER BY min_travel_time_sec ASC
            """,
            [str(edges_p), str(stop_id)]
        ).fetchall()
    finally:
        conn.close()

    destinations = []
    for r in rows:
        to_sid = str(r[0])
        s_info = stops_dict.get(to_sid)
        destinations.append(
            StopDestinationItem(
                to_stop_id=to_sid,
                to_stop_name=s_info["stop_name"] if s_info else f"Słupek {to_sid}",
                lat=float(s_info["lat"]) if s_info else 0.0,
                lon=float(s_info["lon"]) if s_info else 0.0,
                min_travel_time_sec=int(r[1]) if r[1] is not None else 0,
                distance_m=float(r[2]) if r[2] is not None else None,
                speed_kmh=float(r[3]) if r[3] is not None else None,
                routes=[str(x) for x in r[4]] if r[4] else []
            )
        )

    return StopDestinationsResponse(
        city=city,
        from_stop_id=str(stop_id),
        from_stop_name=from_stop_name,
        destinations_count=len(destinations),
        destinations=destinations
    )


@router.get("/edges", summary="Transit network graph edges for AI and routing")
async def get_transit_network_edges(city: str = Query(...), route_uid: Optional[str] = Query(None)):
    edges_p = DATA_DIR / city / "04_results" / "transit_network_edges.parquet"
    if not edges_p.exists():
        raise HTTPException(status_code=404, detail=f"Brak grafu transit_network_edges dla {city}")

    df = pd.read_parquet(edges_p)
    if route_uid and 'route_uid' in df.columns:
        df = df[df['route_uid'] == route_uid]
    return df.to_dict(orient="records")


@router.get("/{route_uid}/details", summary="Full transit line profile, geometry and stop sequence")
async def get_route_details(
    route_uid: str,
    city: str = Query(..., description="City slug"),
    direction_id: Optional[int] = Query(None, description="Specific direction (0 or 1)")
):
    edges_p = DATA_DIR / city / "04_results" / "transit_network_edges.parquet"

    gdf = _get_routes_gdf(city)
    if gdf is None or gdf.empty:
        raise HTTPException(status_code=404, detail=f"Brak tras GTFS dla miasta {city}")

    route_matches = gdf[gdf['route_uid'] == route_uid]
    if route_matches.empty:
        # Fallback to route_id if route_uid doesn't match directly
        route_matches = gdf[gdf['route_id'] == route_uid]
    if route_matches.empty:
        raise HTTPException(status_code=404, detail=f"Nie znaleziono trasy {route_uid} w mieście {city}")

    # Wyciągamy warianty trasy (wszystkie kierunki i wersje)
    variants = []
    for _, var_row in route_matches.iterrows():
        variants.append({
            "direction_id": int(var_row.get('direction_id', 0)),
            "headsign": str(var_row.get('headsign', '')),
            "stop_count": int(var_row.get('stop_count', 0)),
            "daily_trips": int(var_row.get('daily_trips', 0)),
            "is_canonical": bool(var_row.get('is_canonical', False)),
            "pattern_hash": str(var_row.get('pattern_hash', ''))
        })

    # Dobór wariantu: podany direction_id lub wariant kanoniczny
    selected_row = None
    if direction_id is not None:
        matched_dir = route_matches[route_matches['direction_id'] == direction_id]
        if not matched_dir.empty:
            selected_row = matched_dir.sort_values('daily_trips', ascending=False).iloc[0]

    if selected_row is None:
        if 'is_canonical' in route_matches.columns:
            canonical_rows = route_matches[route_matches['is_canonical'] == True]
            if not canonical_rows.empty:
                selected_row = canonical_rows.iloc[0]
        if selected_row is None:
            selected_row = route_matches.sort_values('daily_trips', ascending=False).iloc[0]

    # Geometria trasy w formacie GeoJSON (błyskawiczny mapping z C)
    geom = selected_row.geometry
    geom_geojson = mapping(geom) if geom and not geom.is_empty else None

    # Wczytanie słownika przystanków (z cache)
    stops_dict = _get_stops_dict(city)

    # Wczytanie krawędzi dla segmentów z DuckDB predicate pushdown
    edge_map = {}
    if edges_p.exists():
        edge_rows = duckdb.execute(
            "SELECT from_stop_id, to_stop_id, distance_m, avg_travel_time_sec, speed_kmh FROM read_parquet(?) WHERE route_uid = ?",
            [str(edges_p), route_uid]
        ).fetchall()
        for f_id, t_id, dist, dur, spd in edge_rows:
            edge_map[(str(f_id), str(t_id))] = {
                "distance_m": float(dist) if dist is not None else 0.0,
                "travel_time_sec": float(dur) if dur is not None else 0.0,
                "speed_kmh": float(spd) if spd is not None else 0.0
            }

    # Budowa sekwencji przystanków
    stops_sequence = []
    stop_ids_raw = str(selected_row.get('stop_ids', ''))
    stop_id_list = [s.strip() for s in stop_ids_raw.split(',') if s.strip()]

    cum_dist_m = 0.0
    cum_time_sec = 0.0
    total_stops = len(stop_id_list)

    for idx, sid in enumerate(stop_id_list):
        seq_num = idx + 1
        s_info = stops_dict.get(sid, {
            "stop_id": sid,
            "stop_name": f"Przystanek {sid}",
            "lat": 0.0,
            "lon": 0.0
        })

        seg_dist = 0.0
        seg_time = 0.0
        seg_speed = None

        if idx > 0:
            prev_sid = stop_id_list[idx - 1]
            pair_key = (prev_sid, sid)
            edge_info = edge_map.get(pair_key)
            if edge_info:
                seg_dist = edge_info['distance_m']
                seg_time = edge_info['travel_time_sec']
                seg_speed = edge_info['speed_kmh']
            else:
                # Szacowanie euklidesowe jeśli brak krawędzi
                prev_info = stops_dict.get(prev_sid)
                if prev_info and s_info:
                    dlat = (s_info['lat'] - prev_info['lat']) * 111000.0
                    dlon = (s_info['lon'] - prev_info['lon']) * 71000.0
                    seg_dist = round(float(np.sqrt(dlat**2 + dlon**2)), 1)
                    seg_time = round(seg_dist / (20.0 / 3.6), 1)
                    seg_speed = 20.0

            cum_dist_m += seg_dist
            cum_time_sec += seg_time

        stops_sequence.append({
            "sequence": seq_num,
            "stop_id": sid,
            "stop_name": s_info['stop_name'],
            "lat": s_info['lat'],
            "lon": s_info['lon'],
            "segment_distance_m": round(seg_dist, 1),
            "cumulative_distance_km": round(cum_dist_m / 1000.0, 2),
            "segment_travel_time_sec": round(seg_time, 1),
            "cumulative_travel_time_min": round(cum_time_sec / 60.0, 1),
            "segment_speed_kmh": seg_speed,
            "is_terminal": (idx == 0 or idx == total_stops - 1)
        })

    type_names = {0: "Tramwaj", 1: "Metro", 2: "Kolej", 3: "Autobus", 11: "Trolejbus"}
    r_type = int(selected_row.get('route_type', 3))

    return {
        "route_uid": str(selected_row.get('route_uid', route_uid)),
        "route_id": str(selected_row['route_id']),
        "feed_id": str(selected_row.get('feed_id', '')),
        "short_name": str(selected_row.get('route_short_name', selected_row['route_id'])),
        "long_name": str(selected_row.get('route_long_name', '')),
        "type": r_type,
        "type_name": type_names.get(r_type, "Autobus"),
        "color": str(selected_row.get('route_color', '#FF8C00')),
        "text_color": "#FFFFFF",
        "direction_id": int(selected_row.get('direction_id', 0)),
        "headsign": str(selected_row.get('headsign', '')),
        "daily_trips": int(selected_row.get('daily_trips', 0)),
        "stop_count": len(stops_sequence),
        "total_length_km": float(selected_row['length_km']) if 'length_km' in selected_row and pd.notna(selected_row['length_km']) else round(cum_dist_m / 1000.0, 2),
        "total_travel_time_min": float(selected_row['travel_time_min']) if 'travel_time_min' in selected_row and pd.notna(selected_row['travel_time_min']) else round(cum_time_sec / 60.0, 1),
        "commercial_speed_kmh": float(selected_row['commercial_speed_kmh']) if 'commercial_speed_kmh' in selected_row and pd.notna(selected_row['commercial_speed_kmh']) else 20.0,
        "service_hours": {
            "first_departure": str(selected_row.get('first_departure', '')) if pd.notna(selected_row.get('first_departure')) else "",
            "last_departure": str(selected_row.get('last_departure', '')) if pd.notna(selected_row.get('last_departure')) else "",
            "peak_headway_min": int(selected_row['peak_headway_min']) if 'peak_headway_min' in selected_row and pd.notna(selected_row['peak_headway_min']) else None,
            "offpeak_headway_min": int(selected_row['offpeak_headway_min']) if 'offpeak_headway_min' in selected_row and pd.notna(selected_row['offpeak_headway_min']) else None
        },
        "geometry_source": str(selected_row.get('geometry_source', 'gtfs_shape')),
        "geometry": geom_geojson,
        "variants": variants,
        "stops": stops_sequence
    }
