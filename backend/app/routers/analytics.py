from typing import Optional
from fastapi import APIRouter, Query, HTTPException
from app.schemas import (
    AxeListResponse,
    TransitDesertsResponse,
    CityAuditSummaryResponse,
    NationalRankingResponse,
    MetricDistributionResponse,
    CityComparisonResponse,
)
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


@router.get("/analytics/audit-summary", response_model=CityAuditSummaryResponse)
async def get_city_audit_summary(
    city: str = Query(..., description="City slug"),
    include: str = Query("all", description="Comma-separated list of sections: summary, zscore, grades, h3, rcn, tcrp, poi, samples, all"),
):
    """Returns granular City Audit Scorecard with modular selective section loading."""
    try:
        return spatial_engine.get_city_audit_summary(city=city, include=include)
    except FileNotFoundError as e:
        raise HTTPException(status_code=404, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Audit summary error: {str(e)}")


@router.get("/analytics/national-ranking", response_model=NationalRankingResponse)
async def get_national_ranking(
    scope: str = Query("stops", description="Leaderboard scope: 'stops', 'hubs', 'hexagons', 'cities'"),
    order_by: Optional[str] = Query(None, description="Metric column to sort by"),
    order_dir: str = Query("desc", description="Sort direction ('asc' or 'desc')"),
    limit: int = Query(20, ge=1, le=1000, description="Max records to return"),
    offset: int = Query(0, ge=0, description="Pagination offset"),
    rank: Optional[int] = Query(None, ge=1, description="1-based exact position to fetch"),
    grade: Optional[str] = Query(None, description="Filter by grade"),
    city: Optional[str] = Query(None, description="Filter by city"),
):
    """National leaderboard across Poland for stops (60k), hubs (28k), hexagons (36k), or cities (30)."""
    try:
        return spatial_engine.get_national_ranking(
            scope=scope,
            order_by=order_by,
            order_dir=order_dir,
            limit=limit,
            offset=offset,
            rank=rank,
            grade=grade,
            city=city,
        )
    except ValueError as e:
        raise HTTPException(status_code=422, detail=str(e))
    except FileNotFoundError as e:
        raise HTTPException(status_code=404, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"National ranking error: {str(e)}")


@router.get("/analytics/metric-distribution", response_model=MetricDistributionResponse)
async def get_metric_distribution(
    city: str = Query(..., description="City slug"),
    metric: str = Query(..., description="Metric name to compute distribution for"),
):
    """Computes distribution stats (min, p10, p25, median, p75, p90, max, mean, std) and 10-bin histogram."""
    try:
        return spatial_engine.get_metric_distribution(city=city, metric=metric)
    except ValueError as e:
        raise HTTPException(status_code=422, detail=str(e))
    except FileNotFoundError as e:
        raise HTTPException(status_code=404, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Metric distribution error: {str(e)}")


@router.get("/analytics/compare-cities", response_model=CityComparisonResponse)
async def compare_cities(
    city_a: str = Query(..., description="First city slug"),
    city_b: str = Query(..., description="Second city slug"),
):
    """Returns side-by-side KPI comparison of two audited metropolitan areas."""
    try:
        return spatial_engine.get_city_comparison(city_a=city_a, city_b=city_b)
    except FileNotFoundError as e:
        raise HTTPException(status_code=404, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"City comparison error: {str(e)}")

