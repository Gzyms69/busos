from fastapi import APIRouter, Query, HTTPException
from app.schemas import AxeListResponse, TransitDesertsResponse
from app import spatial_engine

router = APIRouter(tags=["Urban Analytics & Policy Audit"])


@router.get("/analytics/axe-list", response_model=AxeListResponse)
async def get_axe_list(
    city: str = Query(..., description="City slug"),
    threshold: float = Query(0.70, description="TCRP Report 100 redundancy threshold R >= 0.70")
):
    """Computes TCRP Report 100 Asymmetric Redundancy Audit on physical stops in stop_dna.gpkg."""
    try:
        return spatial_engine.get_axe_list(city=city, threshold=threshold)
    except FileNotFoundError as e:
        raise HTTPException(status_code=404, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Axe list error: {str(e)}")


@router.get("/analytics/transit-deserts", response_model=TransitDesertsResponse)
async def get_transit_deserts(
    city: str = Query(..., description="City slug"),
    limit: int = Query(50, description="Max number of desert cells to return")
):
    """Returns top transit deserts (The Investment List) from h3_grid.parquet sorted by TDI DESC."""
    try:
        return spatial_engine.get_transit_deserts(city=city, limit=limit)
    except FileNotFoundError as e:
        raise HTTPException(status_code=404, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Transit deserts error: {str(e)}")
