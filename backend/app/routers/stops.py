from typing import Optional
from fastapi import APIRouter, Query, HTTPException
from app.schemas import (
    GeoJsonFeatureCollection,
    StopProfileResponse,
    StopRankingResponse,
    StopBatchRequest,
    StopBatchResponse,
)
from app import spatial_engine

router = APIRouter(tags=["Physical Stops (Micro)"])


@router.get("/stops", response_model=GeoJsonFeatureCollection)
async def get_stops(city: str = Query(..., description="City slug (e.g. kielce, warszawa, gzm)")):
    """Returns GeoJSON FeatureCollection of physical transit stops from stop_dna.gpkg with micro & macro Stop DNA metrics."""
    try:
        return spatial_engine.get_stops(city)
    except FileNotFoundError as e:
        raise HTTPException(status_code=404, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Spatial error: {str(e)}")


@router.get("/stops/ranking", response_model=StopRankingResponse)
async def get_stops_ranking(
    city: str = Query(..., description="City slug"),
    order_by: str = Query("stop_local_score_raw", description="Metric column name to sort by"),
    order_dir: str = Query("desc", description="Sort direction ('asc' or 'desc')"),
    limit: int = Query(20, ge=1, le=1000, description="Max number of items to return"),
    offset: int = Query(0, ge=0, description="Offset for pagination"),
    rank: Optional[int] = Query(None, ge=1, description="1-based exact position to fetch"),
    grade: Optional[str] = Query(None, description="Filter by grade (e.g. A+, A, B, C, D, E, F)"),
    is_hub_anchor: Optional[bool] = Query(None, description="Filter for hub anchor stops"),
    min_departures: Optional[float] = Query(None, description="Filter for minimum departures per hour"),
    min_pop: Optional[float] = Query(None, description="Filter for minimum population"),
    h3_index: Optional[str] = Query(None, description="Filter for H3 cell index"),
):
    """Universal ranking endpoint for physical stops with arbitrary limits and dynamic sorting."""
    try:
        return spatial_engine.get_stops_ranking(
            city=city,
            order_by=order_by,
            order_dir=order_dir,
            limit=limit,
            offset=offset,
            rank=rank,
            grade=grade,
            is_hub_anchor=is_hub_anchor,
            min_departures=min_departures,
            min_pop=min_pop,
            h3_index=h3_index,
        )
    except ValueError as e:
        raise HTTPException(status_code=422, detail=str(e))
    except FileNotFoundError as e:
        raise HTTPException(status_code=404, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Ranking error: {str(e)}")


@router.post("/stops/batch", response_model=StopBatchResponse)
async def get_stops_batch(payload: StopBatchRequest):
    """Batch lookup endpoint retrieving full profiles for multiple stop IDs in a single query."""
    try:
        return spatial_engine.get_stops_batch(city=payload.city, stop_ids=payload.stop_ids)
    except FileNotFoundError as e:
        raise HTTPException(status_code=404, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Batch error: {str(e)}")


@router.get("/stops/{stop_id}", response_model=StopProfileResponse)
async def get_stop_profile(
    stop_id: str,
    city: str = Query(..., description="City slug")
):
    """Returns deep Stop DNA profile of a single physical stop from stop_dna.gpkg."""
    try:
        return spatial_engine.get_stop_profile(city=city, stop_id=stop_id)
    except FileNotFoundError as e:
        raise HTTPException(status_code=404, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Stop profile error: {str(e)}")

