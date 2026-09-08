"""
backend/app/routers/routes.py
API router exposing 100% GTFS extracted route networks, sequences, and topology.
"""

from fastapi import APIRouter, Query, HTTPException, Request
from typing import Optional, List, Dict, Any
import os
from pathlib import Path
import json
import geopandas as gpd
import pandas as pd

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



@router.get("", summary="List transit lines with modal types and frequencies")
async def list_routes(
    city: str = Query(..., description="City slug"),
    feed_id: Optional[str] = Query(None, description="GTFS feed identifier"),
    route_type: Optional[int] = Query(None, description="GTFS route_type (0=Tram, 1=Metro, 2=Rail, 3=Bus)"),
    canonical_only: bool = Query(True, description="Return only main canonical routes")
):
    routes_gpkg = DATA_DIR / city / "04_results" / "transit_routes.gpkg"
    if not routes_gpkg.exists():
        raise HTTPException(status_code=404, detail=f"Brak tras GTFS dla miasta {city}")

    gdf = gpd.read_file(routes_gpkg, layer="transit_routes")
    if canonical_only and 'is_canonical' in gdf.columns:
        gdf = gdf[gdf['is_canonical'] == True]
    if feed_id:
        gdf = gdf[gdf['feed_id'] == feed_id]
    if route_type is not None:
        gdf = gdf[gdf['route_type'] == route_type]

    return [
        {
            "feed_id": r.get('feed_id', ''),
            "route_id": r['route_id'],
            "route_uid": r.get('route_uid', f"{r.get('feed_id', '')}_{r['route_id']}"),
            "short_name": r['route_short_name'],
            "long_name": r['route_long_name'],
            "type": int(r['route_type']),
            "color": r['route_color'],
            "direction_id": int(r['direction_id']),
            "headsign": r['headsign'],
            "daily_trips": int(r['daily_trips']),
            "stop_count": int(r['stop_count']),
            "is_shape_interpolated": bool(r['is_shape_interpolated'])
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
    routes_gpkg = DATA_DIR / city / "04_results" / "transit_routes.gpkg"
    if not routes_gpkg.exists():
        raise HTTPException(status_code=404, detail=f"Brak warstwy transit_routes.gpkg dla {city}")

    gdf = gpd.read_file(routes_gpkg, layer="transit_routes")
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

@router.get("/edges", summary="Transit network graph edges for AI and routing")
async def get_transit_network_edges(city: str = Query(...), route_uid: Optional[str] = Query(None)):
    edges_p = DATA_DIR / city / "04_results" / "transit_network_edges.parquet"
    if not edges_p.exists():
        raise HTTPException(status_code=404, detail=f"Brak grafu transit_network_edges dla {city}")

    df = pd.read_parquet(edges_p)
    if route_uid and 'route_uid' in df.columns:
        df = df[df['route_uid'] == route_uid]
    return df.to_dict(orient="records")
