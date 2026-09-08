from typing import Optional, Dict, Any, List
from fastapi import APIRouter, Query, HTTPException, Request
from app.schemas import (
    MarketSummaryResponse,
    GeoJsonFeatureCollection,
    MarketTransactionsRankingResponse,
    MarketTransactionsNearbyResponse,
    MarketH3AnalysisResponse,
    MarketTrendsResponse,
)
from app import spatial_engine
from app.domain.market_bridge import (
    get_bulk_stops_summary,
    get_stop_transactions_list,
    get_h3_grid_market_val,
    get_market_trends,
)

router = APIRouter(tags=["Real Estate Modeling"])


@router.get("/market/trends", response_model=MarketTrendsResponse)
async def get_market_trends_endpoint(
    request: Request,
    city: str = Query(..., description="City slug"),
    stop_id: Optional[str] = Query(None, description="Optional stop ID to scope transactions to its 500m catchment"),
    interval: str = Query("year", description="'year' or 'quarter'"),
    market_type: Optional[str] = Query(None, description="'pierwotny' or 'wtorny'"),
):
    """Computes time-series median price and transaction volume trends across years or quarters via DuckDB."""
    try:
        return get_market_trends(
            city=city,
            stop_id=stop_id,
            interval=interval,
            market_type=market_type,
            app_state=request.app.state
        )
    except FileNotFoundError as e:
        raise HTTPException(status_code=404, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Market trends error: {str(e)}")


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


@router.get("/market/stops-summary", summary="City-wide stops valuation summary in a single pass (Anti-N+1)")
async def get_city_stops_summary(
    request: Request,
    city: str = Query(..., description="City slug"),
    date_from: Optional[str] = Query(None, description="Start date YYYY-MM-DD"),
    date_to: Optional[str] = Query(None, description="End date YYYY-MM-DD"),
    market_type: Optional[str] = Query(None, description="pierwotny or wtorny")
) -> Dict[str, Dict[str, Any]]:
    return get_bulk_stops_summary(
        city=city,
        date_from=date_from,
        date_to=date_to,
        market_type=market_type,
        app_state=request.app.state
    )


@router.get("/market/stop/{stop_id}/transactions", summary="List raw transactions linked to a stop")
async def get_stop_transactions(
    request: Request,
    city: str = Query(...),
    stop_id: str = ...,
    date_from: Optional[str] = None,
    date_to: Optional[str] = None
) -> List[Dict[str, Any]]:
    return get_stop_transactions_list(
        city=city,
        stop_id=stop_id,
        date_from=date_from,
        date_to=date_to,
        app_state=request.app.state
    )


@router.get("/market/h3-grid", summary="H3 hexagonal market density and valuation")
async def get_h3_grid(
    request: Request,
    city: str = Query(...),
    date_from: Optional[str] = None,
    date_to: Optional[str] = None,
    market_type: Optional[str] = None
) -> List[Dict[str, Any]]:
    return get_h3_grid_market_val(
        city=city,
        date_from=date_from,
        date_to=date_to,
        market_type=market_type,
        app_state=request.app.state
    )

