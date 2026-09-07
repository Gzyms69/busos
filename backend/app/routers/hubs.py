from fastapi import APIRouter, Query, HTTPException
from app.schemas import GeoJsonFeatureCollection, HubCardResponse, HubDetailsResponse
from app import spatial_engine

router = APIRouter(tags=["Transit Hubs (Macro)"])


@router.get("/hubs", response_model=GeoJsonFeatureCollection)
async def get_hubs(city: str = Query(..., description="City slug (e.g. kielce, warszawa, krakow)")):
    """Returns GeoJSON FeatureCollection of transit hubs with Stop DNA grades (A+ to F), Z-scores, and 4 pillars."""
    try:
        return spatial_engine.get_hubs(city)
    except FileNotFoundError as e:
        raise HTTPException(status_code=404, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Internal spatial error: {str(e)}")


@router.get("/hubs/{hub_id}", response_model=HubCardResponse)
async def get_hub_card(
    hub_id: int,
    city: str = Query(..., description="City slug")
):
    """Returns deep Hub Card with associated micro physical stop IDs from hubs.gpkg."""
    try:
        return spatial_engine.get_hub_card(city=city, hub_id=hub_id)
    except FileNotFoundError as e:
        raise HTTPException(status_code=404, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Hub card error: {str(e)}")


@router.get("/hubs/{hub_id}/details", response_model=HubDetailsResponse)
async def get_hub_details(
    hub_id: str,
    city: str = Query(..., description="City slug"),
    lat: float = Query(..., description="Latitude of hub centroid"),
    lon: float = Query(..., description="Longitude of hub centroid"),
):
    """Executes an in-memory DuckDB Haversine radius query (500m walking distance) over POI & demographic matrices."""
    try:
        return spatial_engine.get_hub_details(city=city, lat=lat, lon=lon, hub_id=hub_id)
    except FileNotFoundError as e:
        raise HTTPException(status_code=404, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"DuckDB spatial aggregation error: {str(e)}")


@router.get("/hubs/{hub_id}/full", response_model=HubDetailsResponse)
async def get_hub_full(
    hub_id: str,
    city: str = Query(..., description="City slug"),
    lat: float = Query(..., description="Latitude of hub centroid"),
    lon: float = Query(..., description="Longitude of hub centroid"),
):
    """Full composite payload for Stop DNA Inspector (alias for /details)."""
    try:
        return spatial_engine.get_hub_details(city=city, lat=lat, lon=lon, hub_id=hub_id)
    except FileNotFoundError as e:
        raise HTTPException(status_code=404, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"DuckDB spatial aggregation error: {str(e)}")
