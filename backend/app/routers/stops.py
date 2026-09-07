from fastapi import APIRouter, Query, HTTPException
from app.schemas import GeoJsonFeatureCollection, StopProfileResponse
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
