import os
import time
from contextlib import asynccontextmanager

import duckdb
import httpx
from app import spatial_engine
from app.routers import ai, analytics, hexagons, hubs, market, poi, routes, stops
from app.schemas import (
    CitiesResponse,
    GeoJsonFeatureCollection,
    HealthResponse,
)
from fastapi import FastAPI, HTTPException, Query, Request
from fastapi.middleware.cors import CORSMiddleware
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.errors import RateLimitExceeded
from slowapi.middleware import SlowAPIMiddleware
from slowapi.util import get_remote_address

QDRANT_HOST = os.getenv("QDRANT_HOST", "qdrant")
QDRANT_PORT = int(os.getenv("QDRANT_PORT", "6333"))
IS_PROD = os.getenv("ENVIRONMENT", "").lower() in ["production", "prod"]

limiter = Limiter(
    key_func=get_remote_address,
    default_limits=["60/minute"],
    headers_enabled=True,
    storage_uri="memory://"
)


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Inicjalizacja persistent singleton DuckDB in-memory
    app.state.duckdb = duckdb.connect(":memory:", read_only=False)
    yield
    # Zamykanie połączenia przy wyłączeniu serwera
    if hasattr(app.state, "duckdb") and app.state.duckdb:
        app.state.duckdb.close()


app = FastAPI(
    title="BusOS Spatial Intelligence Engine API",
    description="High-throughput spatial analytical API serving 30 Polish metropolitan hubs with DuckDB, GeoPackage, and GNN Vector Embeddings.",
    version="9.5.0",
    docs_url=None if IS_PROD else "/docs",
    redoc_url=None if IS_PROD else "/redoc",
    openapi_url=None if IS_PROD else "/openapi.json",
    lifespan=lifespan
)

app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)
app.add_middleware(SlowAPIMiddleware)


ALLOWED_ORIGINS = [
    "https://busos.czerwinskidawid.pl",
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]

# Strict CORS policy for Vercel and local development
app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_origin_regex=r"^https:\/\/busos.*\.vercel\.app$",
    allow_credentials=False,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
    max_age=86400,
)


@app.middleware("http")
async def add_process_time_and_cache_header(request: Request, call_next):
    start_time = time.perf_counter()
    response = await call_next(request)
    process_time_ms = (time.perf_counter() - start_time) * 1000
    response.headers["X-Process-Time-Ms"] = f"{process_time_ms:.2f}"

    # Cache GET spatial responses in client browser to reduce repeat DoS pressure
    if request.method == "GET" and not request.url.path.startswith("/health"):
        response.headers.setdefault("Cache-Control", "public, max-age=3600, stale-while-revalidate=86400")
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


@app.get("/api/v1/cities/{city}/boundary", response_model=GeoJsonFeatureCollection, tags=["Urban Analytics"])
async def get_city_boundary(city: str):
    """Returns official metropolitan transport zone boundary polygon in WGS84 GeoJSON."""
    try:
        return spatial_engine.get_city_boundary(city)
    except FileNotFoundError as e:
        raise HTTPException(status_code=404, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Boundary error: {str(e)}")


@app.get("/api/v1/population", response_model=GeoJsonFeatureCollection, tags=["Demographics"])
async def get_population(city: str = Query(..., description="City slug")):
    """Returns GUS National Census 250m demographic grid reprojected into WGS84 GeoJSON."""
    try:
        return spatial_engine.get_population(city)
    except FileNotFoundError as e:
        raise HTTPException(status_code=404, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Spatial error: {str(e)}")


# Register Modular Domain Routers under /api/v1
app.include_router(stops.router, prefix="/api/v1")
app.include_router(hubs.router, prefix="/api/v1")
app.include_router(hexagons.router, prefix="/api/v1")
app.include_router(market.router, prefix="/api/v1")
app.include_router(poi.router, prefix="/api/v1")
app.include_router(analytics.router, prefix="/api/v1")
app.include_router(ai.router, prefix="/api/v1")
app.include_router(routes.router, prefix="/api/v1")


