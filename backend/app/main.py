import time
import os
import httpx
from fastapi import FastAPI, Request, Query, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from app.schemas import (
    HealthResponse,
    CitiesResponse,
    GeoJsonFeatureCollection,
    HubDetailsResponse,
    SimilarHubResponse,
    HexagonsResponse
)
from app import spatial_engine

QDRANT_HOST = os.getenv("QDRANT_HOST", "qdrant")
QDRANT_PORT = int(os.getenv("QDRANT_PORT", "6333"))

app = FastAPI(
    title="BusOS Spatial Intelligence Engine API",
    description="High-throughput spatial analytical API serving 30 Polish metropolitan hubs with DuckDB, GeoPackage, and GNN Vector Embeddings.",
    version="9.5.0",
    docs_url="/docs",
    redoc_url="/redoc"
)

# Open CORS policy for Vercel and local development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.middleware("http")
async def add_process_time_header(request: Request, call_next):
    start_time = time.perf_counter()
    response = await call_next(request)
    process_time_ms = (time.perf_counter() - start_time) * 1000
    response.headers["X-Process-Time-Ms"] = f"{process_time_ms:.2f}"
    return response


@app.get("/health", response_model=HealthResponse, tags=["System Diagnostics"])
async def health():
    """Returns engine telemetry, active city count, and Qdrant connectivity."""
    qdrant_ok = False
    try:
        async with httpx.AsyncClient(timeout=1.0) as client:
            r = await client.get(f"http://{QDRANT_HOST}:{QDRANT_PORT}/healthz")
            qdrant_ok = (r.status_code == 200)
    except Exception:
        qdrant_ok = False

    cities = spatial_engine.get_available_cities()
    return HealthResponse(
        status="healthy",
        version="9.5.0",
        engine="UrbanGravityEngine-v9.5 (C-GEOS + DuckDB + Qdrant)",
        active_cities_count=len(cities),
        qdrant_connected=qdrant_ok
    )


@app.get("/api/v1/cities", response_model=CitiesResponse, tags=["Urban Analytics"])
async def list_cities():
    """Returns all 30 audited Polish metropolitan agglomerations available in the platform."""
    cities = spatial_engine.get_available_cities()
    return CitiesResponse(cities=cities, total=len(cities))


@app.get("/api/v1/hubs", response_model=GeoJsonFeatureCollection, tags=["Urban Analytics"])
async def get_hubs(city: str = Query(..., description="City slug (e.g. kielce, warszawa, krakow)")):
    """Returns GeoJSON FeatureCollection of transit hubs with Stop DNA grades (A+ to F), Z-scores, and 4 pillars."""
    try:
        return spatial_engine.get_hubs(city)
    except FileNotFoundError as e:
        raise HTTPException(status_code=404, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Internal spatial error: {str(e)}")


@app.get("/api/v1/transactions", response_model=GeoJsonFeatureCollection, tags=["Real Estate Modeling"])
async def get_transactions(city: str = Query(..., description="City slug")):
    """Returns notary property transactions with normalized price_m2 reprojected into WGS84 for Deck.gl hex-layers."""
    try:
        return spatial_engine.get_transactions(city)
    except FileNotFoundError as e:
        raise HTTPException(status_code=404, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Spatial error: {str(e)}")


@app.get("/api/v1/population", response_model=GeoJsonFeatureCollection, tags=["Demographics"])
async def get_population(city: str = Query(..., description="City slug")):
    """Returns GUS National Census 250m demographic grid reprojected into WGS84 GeoJSON."""
    try:
        return spatial_engine.get_population(city)
    except FileNotFoundError as e:
        raise HTTPException(status_code=404, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Spatial error: {str(e)}")


@app.get("/api/v1/hubs/{hub_id}/details", response_model=HubDetailsResponse, tags=["Stop DNA Inspector"])
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


@app.get("/api/v1/hexagons", response_model=HexagonsResponse, tags=["H3 Analytical Grid"])
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

