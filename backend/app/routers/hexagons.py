from fastapi import APIRouter, Query, HTTPException
from app.schemas import HexagonsResponse, HexagonCell, GeoJsonFeatureCollection
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
