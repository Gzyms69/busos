from fastapi import APIRouter, Query, HTTPException
from app.schemas import MarketSummaryResponse, GeoJsonFeatureCollection
from app import spatial_engine

router = APIRouter(tags=["Real Estate Modeling"])


@router.get("/market/summary", response_model=MarketSummaryResponse)
async def get_market_summary(
    city: str = Query(..., description="City slug")
):
    """Returns RCN transaction market summary statistics (median, trimmed mean, IQR ranges)."""
    try:
        return spatial_engine.get_market_summary(city=city)
    except FileNotFoundError as e:
        raise HTTPException(status_code=404, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Market summary error: {str(e)}")


@router.get("/market/transactions", response_model=GeoJsonFeatureCollection)
async def get_market_transactions(
    city: str = Query(..., description="City slug")
):
    """Returns notary property transactions with normalized price_m2 reprojected into WGS84."""
    try:
        return spatial_engine.get_transactions(city=city)
    except FileNotFoundError as e:
        raise HTTPException(status_code=404, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Transactions error: {str(e)}")


@router.get("/transactions", response_model=GeoJsonFeatureCollection)
async def get_transactions_legacy_alias(
    city: str = Query(..., description="City slug")
):
    """Legacy alias for backward compatibility: /api/v1/transactions."""
    try:
        return spatial_engine.get_transactions(city=city)
    except FileNotFoundError as e:
        raise HTTPException(status_code=404, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Transactions error: {str(e)}")
