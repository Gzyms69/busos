from typing import Optional
from fastapi import APIRouter, Query, HTTPException
from app.schemas import PoiMagnetsResponse, PoiCategoriesResponse, PoiSearchResponse
from app import spatial_engine

router = APIRouter(tags=["Points of Interest (Attractors & Gravity)"])


@router.get("/poi/search", response_model=PoiSearchResponse)
async def search_pois(
    city: str = Query(..., description="City slug"),
    query: Optional[str] = Query(None, description="Search term for POI name or category"),
    category: Optional[str] = Query(None, description="Exact category filter"),
    tier: Optional[str] = Query(None, description="Tier filter (e.g. T0_KRAJOWY, T1_REGIONALNY)"),
    min_w: Optional[float] = Query(None, description="Minimum weight W threshold"),
    limit: int = Query(50, ge=1, le=500, description="Max POIs to return"),
    offset: int = Query(0, ge=0, description="Pagination offset"),
):
    """Searches and filters named POIs from poi_matrix.parquet using high-performance DuckDB pushdown."""
    try:
        return spatial_engine.search_pois(
            city=city,
            query=query,
            category=category,
            tier=tier,
            min_w=min_w,
            limit=limit,
            offset=offset,
        )
    except FileNotFoundError as e:
        raise HTTPException(status_code=404, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"POI search error: {str(e)}")


@router.get("/poi/magnets", response_model=PoiMagnetsResponse)
async def get_poi_magnets(
    city: str = Query(..., description="City slug"),
    limit: int = Query(10, ge=1, le=100, description="Max number of key magnets to return"),
    tier: Optional[str] = Query(None, description="Filter by tiers (e.g. T0_KRAJOWY, T1_REGIONALNY)"),
    category: Optional[str] = Query(None, description="Filter by category"),
    min_w: Optional[float] = Query(None, description="Minimum weight W threshold"),
):
    """Returns top named urban attractors (magnets) sorted by gravity weight, filtering out placeholder names."""
    try:
        return spatial_engine.get_poi_magnets(
            city=city,
            limit=limit,
            tier=tier,
            category=category,
            min_w=min_w,
        )
    except FileNotFoundError as e:
        raise HTTPException(status_code=404, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"POI magnets error: {str(e)}")


@router.get("/poi/categories", response_model=PoiCategoriesResponse)
async def get_poi_categories(
    city: str = Query(..., description="City slug"),
    limit: int = Query(20, ge=1, le=100, description="Max number of categories to return"),
    order_by: str = Query("final_value", description="Sort by 'final_value' (weight W) or 'count'"),
    order_dir: str = Query("desc", description="Sort direction ('asc' or 'desc')"),
):
    """Returns POI categories valuation, tier assignment, and object counts."""
    try:
        return spatial_engine.get_poi_categories(
            city=city,
            limit=limit,
            order_by=order_by,
            order_dir=order_dir,
        )
    except FileNotFoundError as e:
        raise HTTPException(status_code=404, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"POI categories error: {str(e)}")

