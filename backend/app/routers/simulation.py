import os
from fastapi import APIRouter, Query, HTTPException
from fastapi.responses import FileResponse
from app import spatial_engine

router = APIRouter(tags=["Transit Simulation"])


@router.get("/simulation/{city}")
async def get_simulation(
    city: str,
    mode: str = Query("math", pattern=r"^(gps|math)$", description="Simulation mode: 'math' (default) or 'gps'"),
):
    """
    Returns full fleet vehicle trip schedule and spatial trajectories for a metropolitan network.
    Serves gzip-compressed GeoJSON/JSON directly from 04_results/ with automatic mutual fallback (gps <-> math).
    """
    normalized_city = city.lower().strip()
    city_results_dir = os.path.join(spatial_engine.DATA_DIR, normalized_city, "04_results")

    if not os.path.exists(city_results_dir):
        raise HTTPException(
            status_code=404,
            detail=f"City '{city}' results directory not found at {city_results_dir}",
        )

    gps_path = os.path.join(city_results_dir, "simulation_trips.json")
    math_path = os.path.join(city_results_dir, "simulation_trips_math.json")

    target_path = None
    served_mode = mode

    if mode == "gps":
        if os.path.exists(gps_path):
            target_path = gps_path
        elif os.path.exists(math_path):
            target_path = math_path
            served_mode = "math"
    else:  # mode == "math"
        if os.path.exists(math_path):
            target_path = math_path
        elif os.path.exists(gps_path):
            target_path = gps_path
            served_mode = "gps"

    if not target_path or not os.path.exists(target_path):
        raise HTTPException(
            status_code=404,
            detail=f"Simulation dataset for city '{city}' (mode '{mode}') not found on server",
        )

    return FileResponse(
        path=target_path,
        media_type="application/json",
        headers={
            "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
            "Content-Disposition": f'inline; filename="{normalized_city}_{served_mode}.json"',
            "X-Simulation-Mode": served_mode,
        },
    )
