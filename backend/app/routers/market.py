from typing import Optional
from fastapi import APIRouter, Query, HTTPException
from app.schemas import (
    MarketSummaryResponse,
    GeoJsonFeatureCollection,
    MarketTransactionsRankingResponse,
    MarketTransactionsNearbyResponse,
    MarketH3AnalysisResponse,
)
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


@router.get("/market/transactions/ranking", response_model=MarketTransactionsRankingResponse)
async def get_market_transactions_ranking(
    city: str = Query(..., description="City slug"),
    order_by: str = Query("price_m2", description="Metric to sort by (price_m2, tran_cena_brutto, lok_pow_uzyt, dok_data)"),
    order_dir: str = Query("desc", description="Sort direction ('asc' or 'desc')"),
    limit: int = Query(20, ge=1, le=1000, description="Max records to return"),
    offset: int = Query(0, ge=0, description="Pagination offset"),
    rank: Optional[int] = Query(None, ge=1, description="1-based exact position to fetch"),
    market_type: Optional[str] = Query(None, description="Filter: 'pierwotny' or 'wtorny'"),
    property_function: Optional[str] = Query(None, description="Property function / usage"),
    min_price_m2: Optional[float] = Query(None, description="Minimum price per m²"),
    max_price_m2: Optional[float] = Query(None, description="Maximum price per m²"),
    min_total_price: Optional[float] = Query(None, description="Minimum gross transaction price"),
    max_total_price: Optional[float] = Query(None, description="Maximum gross transaction price"),
    min_area_m2: Optional[float] = Query(None, description="Minimum usable area"),
    max_area_m2: Optional[float] = Query(None, description="Maximum usable area"),
    date_from: Optional[str] = Query(None, description="Transaction date lower bound (YYYY-MM-DD)"),
    date_to: Optional[str] = Query(None, description="Transaction date upper bound (YYYY-MM-DD)"),
):
    """Universal ranking endpoint for notary property transactions with multi-field filtering."""
    try:
        return spatial_engine.get_market_transactions_ranking(
            city=city,
            order_by=order_by,
            order_dir=order_dir,
            limit=limit,
            offset=offset,
            rank=rank,
            market_type=market_type,
            property_function=property_function,
            min_price_m2=min_price_m2,
            max_price_m2=max_price_m2,
            min_total_price=min_total_price,
            max_total_price=max_total_price,
            min_area_m2=min_area_m2,
            max_area_m2=max_area_m2,
            date_from=date_from,
            date_to=date_to,
        )
    except ValueError as e:
        raise HTTPException(status_code=422, detail=str(e))
    except FileNotFoundError as e:
        raise HTTPException(status_code=404, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Market ranking error: {str(e)}")


@router.get("/market/transactions/nearby", response_model=MarketTransactionsNearbyResponse)
async def get_market_transactions_nearby(
    city: str = Query(..., description="City slug"),
    lat: float = Query(..., description="Latitude of query point"),
    lon: float = Query(..., description="Longitude of query point"),
    radius_m: float = Query(500.0, ge=10.0, le=5000.0, description="Search radius in meters (Euclidean in EPSG:2180)"),
    limit: int = Query(20, ge=1, le=200, description="Max transactions to return"),
):
    """Finds notary property transactions within a metric radius around coordinates."""
    try:
        return spatial_engine.get_market_transactions_nearby(
            city=city,
            lat=lat,
            lon=lon,
            radius_m=radius_m,
            limit=limit,
        )
    except FileNotFoundError as e:
        raise HTTPException(status_code=404, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Nearby transactions error: {str(e)}")


@router.get("/market/h3-analysis", response_model=MarketH3AnalysisResponse)
async def get_market_h3_analysis(
    city: str = Query(..., description="City slug")
):
    """Computes comprehensive H3 real estate coverage, price distribution brackets, and transport correlation."""
    try:
        return spatial_engine.get_market_h3_analysis(city=city)
    except FileNotFoundError as e:
        raise HTTPException(status_code=404, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Market H3 analysis error: {str(e)}")


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
