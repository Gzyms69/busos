from typing import Optional
from fastapi import APIRouter, Query, HTTPException
from app.schemas import (
    HexagonsResponse,
    HexagonCell,
    GeoJsonFeatureCollection,
    HexagonRankingResponse,
    HexagonProfileResponse,
)
from app import spatial_engine

router = APIRouter(tags=["H3 Analytical Grid"])


@router.get("/hexagons", response_model=HexagonsResponse)
async def get_hexagons(
    city: str = Query(..., description="City slug"),
    min_pop: float = Query(0.0, description="Minimum population filter")
):
    """Returns precomputed unified H3 spatial grid cells (Res 8) with fused transit, demographic, and real estate data."""
    try:
        return spatial_engine.get_hexagons(city=city, min_pop=min_pop)
    except FileNotFoundError as e:
        raise HTTPException(status_code=404, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"H3 grid error: {str(e)}")


@router.get("/hexagons/ranking", response_model=HexagonRankingResponse)
async def get_hexagons_ranking(
    city: str = Query(..., description="City slug"),
    order_by: str = Query("transport_score", description="Metric to sort by"),
    order_dir: str = Query("desc", description="Sort direction ('asc' or 'desc')"),
    limit: int = Query(20, ge=1, le=1000, description="Max items to return"),
    offset: int = Query(0, ge=0, description="Pagination offset"),
    rank: Optional[int] = Query(None, ge=1, description="1-based exact rank to fetch"),
    is_transit_desert: Optional[bool] = Query(None, description="Filter transit deserts"),
    has_rcn: Optional[bool] = Query(None, description="Filter hexes with real estate data"),
    min_pop: Optional[float] = Query(None, description="Minimum population"),
    max_pop: Optional[float] = Query(None, description="Maximum population"),
    min_departures: Optional[float] = Query(None, description="Minimum departures/h"),
    max_departures: Optional[float] = Query(None, description="Maximum departures/h"),
    grade: Optional[str] = Query(None, description="Filter by stop grade"),
):
    """Universal ranking endpoint for H3 hexagon cells with multi-attribute filtering."""
    try:
        return spatial_engine.get_hexagons_ranking(
            city=city,
            order_by=order_by,
            order_dir=order_dir,
            limit=limit,
            offset=offset,
            rank=rank,
            is_transit_desert=is_transit_desert,
            has_rcn=has_rcn,
            min_pop=min_pop,
            max_pop=max_pop,
            min_departures=min_departures,
            max_departures=max_departures,
            grade=grade,
        )
    except ValueError as e:
        raise HTTPException(status_code=422, detail=str(e))
    except FileNotFoundError as e:
        raise HTTPException(status_code=404, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Hexagons ranking error: {str(e)}")


@router.get("/hexagons/{hex_index}/profile", response_model=HexagonProfileResponse)
async def get_hexagon_profile(
    hex_index: str,
    city: str = Query(..., description="City slug")
):
    """Returns 360-degree deep analytical profile of an H3 cell including physical stops, nearby RCN transactions, and POI magnets."""
    try:
        return spatial_engine.get_hexagon_profile(city=city, hex_index=hex_index)
    except FileNotFoundError as e:
        raise HTTPException(status_code=404, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Hexagon profile error: {str(e)}")


@router.get("/hexagons/{hex_index}", response_model=HexagonCell)
async def get_hexagon_detail(
    hex_index: str,
    city: str = Query(..., description="City slug")
):
    """Returns granular analytical metrics for a single H3 hexagon."""
    try:
        return spatial_engine.get_hexagon_detail(city=city, hex_index=hex_index)
    except FileNotFoundError as e:
        raise HTTPException(status_code=404, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Hexagon detail error: {str(e)}")


@router.get("/hexagons/{hex_index}/stops", response_model=GeoJsonFeatureCollection)
async def get_hexagon_stops(
    hex_index: str,
    city: str = Query(..., description="City slug")
):
    """Returns physical stops falling inside the given H3 index from stop_dna.gpkg."""
    try:
        return spatial_engine.get_hexagon_stops(city=city, hex_index=hex_index)
    except FileNotFoundError as e:
        raise HTTPException(status_code=404, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Hexagon stops error: {str(e)}")
