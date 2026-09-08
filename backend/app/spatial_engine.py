import os
import math
import json
import sqlite3
import duckdb
import pyproj
import shapely
import shapely.wkb
import shapely.geometry
import shapely.ops
import numpy as np
import pandas as pd
from scipy.spatial import cKDTree
from typing import Dict, Any, List, Optional

# Transformer for Polish Cadastral/Demographic metric CRS (EPSG:2180) to WGS84 (EPSG:4326)
transformer_2180_to_4326 = pyproj.Transformer.from_crs("EPSG:2180", "EPSG:4326", always_xy=True)
transformer_4326_to_2180 = pyproj.Transformer.from_crs("EPSG:4326", "EPSG:2180", always_xy=True)

# Path resolution: works inside Docker container (/data/cities) or local development
DEFAULT_DATA_PATHS = [
    os.getenv("BUSOS_DATA_DIR"),
    "/data/cities",
    os.path.join(os.getcwd(), "data/cities"),
    os.path.join(os.getcwd(), "../data/cities"),
]

DATA_DIR = next((p for p in DEFAULT_DATA_PATHS if p and os.path.exists(p)), "/data/cities")


def _extract_gpkg_wkb(raw_bytes: bytes) -> bytes:
    """Extracts standard OGC WKB from a GeoPackage binary geometry buffer."""
    flags = raw_bytes[3]
    env_code = (flags & 0x0E) >> 1
    header_size = 8
    if env_code == 1:
        header_size += 32
    elif env_code in (2, 3):
        header_size += 48
    elif env_code == 4:
        header_size += 64
    return raw_bytes[header_size:]


def get_available_cities() -> List[str]:
    """Returns all audited cities with completed Stop DNA results."""
    if not os.path.exists(DATA_DIR):
        return []
    cities = []
    for d in sorted(os.listdir(DATA_DIR)):
        city_dir = os.path.join(DATA_DIR, d)
        if os.path.isdir(city_dir) and os.path.exists(os.path.join(city_dir, "04_results", "stop_dna.gpkg")):
            cities.append(d)
    return cities


def get_city_boundary(city: str) -> Dict[str, Any]:
    """Reads transport_zone.gpkg and returns WGS84 GeoJSON FeatureCollection with area metadata."""
    tz_path = os.path.join(DATA_DIR, city, "transport_zone.gpkg")
    if not os.path.exists(tz_path):
        raise FileNotFoundError(f"transport_zone.gpkg not found for city '{city}' at {tz_path}")

    con = sqlite3.connect(f"file:{tz_path}?mode=ro", uri=True)
    cur = con.cursor()
    cur.execute("SELECT table_name FROM gpkg_contents WHERE data_type = 'features'")
    tbl = cur.fetchone()
    if not tbl:
        con.close()
        raise FileNotFoundError(f"No features table in transport_zone.gpkg for '{city}'")
    table = tbl[0]

    cur.execute(f'PRAGMA table_info("{table}")')
    cols = [c[1] for c in cur.fetchall()]
    geom_col = "geom" if "geom" in cols else "geometry"

    cur.execute(f'SELECT "{geom_col}" FROM "{table}" LIMIT 1')
    row = cur.fetchone()
    con.close()

    if not row or not row[0]:
        raise FileNotFoundError(f"Empty geometry in transport_zone.gpkg for '{city}'")

    wkb_data = _extract_gpkg_wkb(row[0])
    shp = shapely.wkb.loads(wkb_data)

    try:
        shp_2180 = shapely.ops.transform(transformer_4326_to_2180.transform, shp)
        area_km2 = round(float(shp_2180.area / 1_000_000.0), 2)
    except Exception:
        area_km2 = 0.0

    geojson_geom = shapely.geometry.mapping(shp)
    return {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "geometry": geojson_geom,
                "properties": {
                    "city": city,
                    "area_km2": area_km2
                }
            }
        ]
    }


def get_stops(city: str) -> Dict[str, Any]:
    """Reads stop_dna.gpkg and returns GeoJSON FeatureCollection with physical stops Stop DNA properties."""
    gpkg_path = os.path.join(DATA_DIR, city, "04_results", "stop_dna.gpkg")
    if not os.path.exists(gpkg_path):
        raise FileNotFoundError(f"stop_dna.gpkg not found for city '{city}' at {gpkg_path}")

    con = sqlite3.connect(f"file:{gpkg_path}?mode=ro", uri=True)
    cur = con.cursor()
    cur.execute("SELECT table_name FROM gpkg_contents WHERE data_type = 'features'")
    tables = cur.fetchall()
    if not tables:
        con.close()
        return {"type": "FeatureCollection", "features": []}

    table = tables[0][0]
    cur.execute(f'PRAGMA table_info("{table}")')
    cols = [c[1] for c in cur.fetchall()]
    
    cur.execute(f'SELECT * FROM "{table}"')
    rows = cur.fetchall()
    con.close()

    features = []
    for r in rows:
        d = dict(zip(cols, r))
        lat = d.get("stop_lat") or d.get("lat")
        lon = d.get("stop_lon") or d.get("lon")
        
        for k in ["geom", "geometry"]:
            d.pop(k, None)
            
        for k, v in d.items():
            if isinstance(v, int) and (v > 2**53 or v < -2**53):
                d[k] = str(v)

        geometry = None
        if lat is not None and lon is not None:
            geometry = {"type": "Point", "coordinates": [float(lon), float(lat)]}

        features.append({
            "type": "Feature",
            "geometry": geometry,
            "properties": d
        })

    return {"type": "FeatureCollection", "features": features}


def get_stop_profile(city: str, stop_id: str) -> Dict[str, Any]:
    """Retrieves single physical stop profile from stop_dna.gpkg."""
    gpkg_path = os.path.join(DATA_DIR, city, "04_results", "stop_dna.gpkg")
    if not os.path.exists(gpkg_path):
        raise FileNotFoundError(f"stop_dna.gpkg not found for city '{city}' at {gpkg_path}")

    con = sqlite3.connect(f"file:{gpkg_path}?mode=ro", uri=True)
    cur = con.cursor()
    cur.execute("SELECT table_name FROM gpkg_contents WHERE data_type = 'features'")
    tables = cur.fetchall()
    if not tables:
        con.close()
        raise FileNotFoundError(f"No feature table in stop_dna.gpkg for {city}")

    table = tables[0][0]
    cur.execute(f'PRAGMA table_info("{table}")')
    cols = [c[1] for c in cur.fetchall()]

    cur.execute(f'SELECT * FROM "{table}" WHERE stop_id = ? LIMIT 1', (str(stop_id),))
    row = cur.fetchone()
    con.close()

    if not row:
        raise FileNotFoundError(f"Stop with id '{stop_id}' not found in city '{city}'")

    d = dict(zip(cols, row))
    for k in ["geom", "geometry"]:
        d.pop(k, None)

    for k, v in d.items():
        if isinstance(v, int) and (v > 2**53 or v < -2**53):
            d[k] = str(v)

    lat = float(d.get("stop_lat") or d.get("lat") or 0.0)
    lon = float(d.get("stop_lon") or d.get("lon") or 0.0)

    return {
        "stop_id": str(d.get("stop_id", stop_id)),
        "stop_name": str(d.get("stop_name", "")),
        "city": city,
        "lat": lat,
        "lon": lon,
        "hub_id": int(d["hub_id"]) if d.get("hub_id") is not None else None,
        "hub_name": str(d.get("hub_name") or ""),
        "is_hub_anchor": bool(d.get("is_hub_anchor", False)),
        "stop_hub_share": float(d.get("stop_hub_share") or 0.0),
        "stop_departures_h": float(d.get("stop_departures_h") or 0.0),
        "stop_routes": str(d.get("stop_routes") or ""),
        "stop_routes_count": int(d.get("stop_routes_count") or 0),
        "stop_grade": str(d.get("stop_grade") or d.get("grade") or "F"),
        "stop_percentile": float(d.get("stop_percentile") or d.get("local_percentile") or 0.0),
        "stop_local_score_raw": float(d.get("stop_local_score_raw") or d.get("local_score_raw") or 0.0),
        "stop_infra_score": float(d.get("stop_infra_score") or d.get("infra_score") or 0.0),
        "stop_pop_val": float(d.get("stop_pop_val") or d.get("pop_val") or 0.0),
        "stop_market_val": float(d.get("stop_market_val") or d.get("market_val") or 0.0),
        "h3_index": str(d.get("h3_index")) if d.get("h3_index") is not None else None,
        "stop_entropy": float(d.get("stop_entropy") or 0.0),
        "stop_liquidity": int(d.get("stop_liquidity") or 0),
        "stop_raw_gravity": float(d.get("stop_raw_gravity") or 0.0),
        "hub_routes": str(d.get("hub_routes") or "") if d.get("hub_routes") is not None else None,
        "hub_raw_gravity": float(d.get("hub_raw_gravity") or 0.0),
        "hub_entropy": float(d.get("hub_entropy") or 0.0),
        "hub_liquidity": int(d.get("hub_liquidity") or 0),
        "properties": d
    }


def get_hubs(city: str) -> Dict[str, Any]:
    """Reads hubs.gpkg (with stop_dna.gpkg fallback) and returns GeoJSON FeatureCollection with Stop DNA properties."""
    gpkg_path = os.path.join(DATA_DIR, city, "04_results", "hubs.gpkg")
    if not os.path.exists(gpkg_path):
        gpkg_path = os.path.join(DATA_DIR, city, "04_results", "stop_dna.gpkg")
    if not os.path.exists(gpkg_path):
        raise FileNotFoundError(f"Neither hubs.gpkg nor stop_dna.gpkg found for city '{city}'")

    con = sqlite3.connect(f"file:{gpkg_path}?mode=ro", uri=True)
    cur = con.cursor()
    cur.execute("SELECT table_name FROM gpkg_contents WHERE data_type = 'features'")
    tables = cur.fetchall()
    if not tables:
        con.close()
        return {"type": "FeatureCollection", "features": []}

    table = tables[0][0]
    cur.execute(f'PRAGMA table_info("{table}")')
    cols = [c[1] for c in cur.fetchall()]
    
    cur.execute(f'SELECT * FROM "{table}"')
    rows = cur.fetchall()
    con.close()

    features = []
    for r in rows:
        d = dict(zip(cols, r))
        lat = d.get("lat") or d.get("stop_lat")
        lon = d.get("lon") or d.get("stop_lon")
        
        # Ensure stop_name alias is set for frontend tooltip and picking info
        if "stop_name" not in d or not d["stop_name"]:
            d["stop_name"] = d.get("hub_name", f"Hub {d.get('hub_id')}")

        for k in ["geom", "geometry"]:
            d.pop(k, None)
            
        for k, v in d.items():
            if isinstance(v, int) and (v > 2**53 or v < -2**53):
                d[k] = str(v)

        geometry = None
        if lat is not None and lon is not None:
            geometry = {"type": "Point", "coordinates": [float(lon), float(lat)]}

        features.append({
            "type": "Feature",
            "geometry": geometry,
            "properties": d
        })

    return {"type": "FeatureCollection", "features": features}


def get_hub_card(city: str, hub_id: str) -> Dict[str, Any]:
    """Retrieves single macro hub card from hubs.gpkg with parsed hub_stops_ids array."""
    hubs_path = os.path.join(DATA_DIR, city, "04_results", "hubs.gpkg")
    target_path = hubs_path if os.path.exists(hubs_path) else os.path.join(DATA_DIR, city, "04_results", "stop_dna.gpkg")
    if not os.path.exists(target_path):
        raise FileNotFoundError(f"Hubs layer not found for city '{city}'")

    con = sqlite3.connect(f"file:{target_path}?mode=ro", uri=True)
    cur = con.cursor()
    cur.execute("SELECT table_name FROM gpkg_contents WHERE data_type = 'features'")
    tables = cur.fetchall()
    if not tables:
        con.close()
        raise FileNotFoundError(f"No feature table found in {target_path}")

    table = tables[0][0]
    cur.execute(f'PRAGMA table_info("{table}")')
    cols = [c[1] for c in cur.fetchall()]

    query_param = int(hub_id) if str(hub_id).isdigit() else hub_id
    cur.execute(f'SELECT * FROM "{table}" WHERE hub_id = ? LIMIT 1', (query_param,))
    row = cur.fetchone()
    con.close()

    if not row:
        raise FileNotFoundError(f"Hub with id '{hub_id}' not found in city '{city}'")

    d = dict(zip(cols, row))
    for k in ["geom", "geometry"]:
        d.pop(k, None)

    for k, v in d.items():
        if isinstance(v, int) and (v > 2**53 or v < -2**53):
            d[k] = str(v)

    raw_sids = str(d.get("hub_stops_ids") or "")
    stops_list = [s.strip() for s in raw_sids.split(",") if s.strip()] if raw_sids else ([str(d.get("stop_id"))] if d.get("stop_id") else [])

    lat = float(d.get("lat") or d.get("stop_lat") or 0.0)
    lon = float(d.get("lon") or d.get("stop_lon") or 0.0)

    return {
        "hub_id": int(d.get("hub_id", hub_id)),
        "hub_name": str(d.get("hub_name") or d.get("stop_name") or f"Hub {hub_id}"),
        "city": city,
        "lat": lat,
        "lon": lon,
        "hub_stops_count": int(d.get("hub_stops_count") or len(stops_list) or 1),
        "hub_stops_ids": stops_list,
        "hub_departures_h": float(d.get("hub_departures_h") or d.get("transit_freq") or 0.0),
        "hub_routes_count": int(d.get("hub_routes_count") or 0),
        "hub_routes": str(d.get("hub_routes") or ""),
        "hub_grade": str(d.get("hub_grade") or d.get("grade") or "F"),
        "hub_percentile": float(d.get("hub_percentile") or d.get("local_percentile") or 0.0),
        "hub_local_score_raw": float(d.get("hub_local_score_raw") or d.get("local_score_raw") or 0.0),
        "hub_infra_score": float(d.get("hub_infra_score") or d.get("infra_score") or 0.0),
        "hub_pop_val": float(d.get("hub_pop_val") or d.get("pop_val") or 0.0),
        "hub_market_val": float(d.get("hub_market_val") or d.get("market_val") or 0.0),
        "h3_index": str(d.get("h3_index")) if d.get("h3_index") is not None else None,
        "hub_raw_gravity": float(d.get("hub_raw_gravity") or 0.0),
        "hub_entropy": float(d.get("hub_entropy") or 0.0),
        "hub_liquidity": int(d.get("hub_liquidity") or 0),
        "grade": str(d.get("grade") or d.get("hub_grade") or "F"),
        "local_score_raw": float(d.get("local_score_raw") or d.get("hub_local_score_raw") or 0.0),
        "properties": d
    }


def get_transactions(city: str) -> Dict[str, Any]:
    """Reads transactions.gpkg and returns reprojected WGS84 GeoJSON FeatureCollection."""
    gpkg_path = os.path.join(DATA_DIR, city, "02_spatial", "transactions.gpkg")
    if not os.path.exists(gpkg_path):
        raise FileNotFoundError(f"transactions.gpkg not found for city '{city}'")

    con = sqlite3.connect(f"file:{gpkg_path}?mode=ro", uri=True)
    cur = con.cursor()
    cur.execute("SELECT table_name FROM gpkg_contents WHERE data_type = 'features'")
    table = cur.fetchone()[0]

    cur.execute(f'PRAGMA table_info("{table}")')
    cols = [c[1] for c in cur.fetchall()]

    cur.execute(f'SELECT * FROM "{table}"')
    rows = cur.fetchall()
    con.close()

    geom_col = "geom" if "geom" in cols else "geometry"
    features = []

    for r in rows:
        d = dict(zip(cols, r))
        raw_geom = d.pop(geom_col, None)
        geometry = None

        if raw_geom:
            try:
                wkb_data = _extract_gpkg_wkb(raw_geom)
                shp = shapely.wkb.loads(wkb_data)
                # If metric coordinates (EPSG:2180), reproject to WGS84 (EPSG:4326)
                if shp.geom_type == "Point":
                    x, y = shp.x, shp.y
                    if x > 180 or y > 90:
                        lon, lat = transformer_2180_to_4326.transform(x, y)
                    else:
                        lon, lat = x, y
                    geometry = {"type": "Point", "coordinates": [lon, lat]}
            except Exception:
                pass

        for k, v in d.items():
            if isinstance(v, int) and (v > 2**53 or v < -2**53):
                d[k] = str(v)

        features.append({
            "type": "Feature",
            "geometry": geometry,
            "properties": d
        })

    return {"type": "FeatureCollection", "features": features}


def get_population(city: str) -> Dict[str, Any]:
    """Reads population_250m.gpkg and returns reprojected WGS84 GeoJSON FeatureCollection."""
    gpkg_path = os.path.join(DATA_DIR, city, "02_spatial", "population_250m.gpkg")
    if not os.path.exists(gpkg_path):
        raise FileNotFoundError(f"population_250m.gpkg not found for city '{city}'")

    con = sqlite3.connect(f"file:{gpkg_path}?mode=ro", uri=True)
    cur = con.cursor()
    cur.execute("SELECT table_name FROM gpkg_contents WHERE data_type = 'features'")
    table = cur.fetchone()[0]

    cur.execute(f'PRAGMA table_info("{table}")')
    cols = [c[1] for c in cur.fetchall()]

    cur.execute(f'SELECT * FROM "{table}"')
    rows = cur.fetchall()
    con.close()

    geom_col = "geom" if "geom" in cols else "geometry"
    features = []

    for r in rows:
        d = dict(zip(cols, r))
        raw_geom = d.pop(geom_col, None)
        geometry = None

        if raw_geom:
            try:
                wkb_data = _extract_gpkg_wkb(raw_geom)
                shp = shapely.wkb.loads(wkb_data)
                # Reproject coordinates if EPSG:2180
                geojson_geom = shapely.geometry.mapping(shp)
                coords = geojson_geom["coordinates"]
                
                # Transform coordinates recursively
                def reproject_coords(coord_list):
                    if len(coord_list) == 2 and isinstance(coord_list[0], (int, float)):
                        x, y = coord_list[0], coord_list[1]
                        if x > 180 or y > 90:
                            return list(transformer_2180_to_4326.transform(x, y))
                        return [x, y]
                    return [reproject_coords(c) for c in coord_list]

                geojson_geom["coordinates"] = reproject_coords(coords)
                geometry = geojson_geom
            except Exception:
                pass

        for k, v in d.items():
            if isinstance(v, int) and (v > 2**53 or v < -2**53):
                d[k] = str(v)

        features.append({
            "type": "Feature",
            "geometry": geometry,
            "properties": d
        })

    return {"type": "FeatureCollection", "features": features}


def get_hub_details(city: str, lat: float, lon: float, hub_id: Optional[str] = None) -> Dict[str, Any]:
    """Runs in-memory DuckDB 500m Haversine query over Parquet matrices and retrieves hub Stop DNA metrics."""
    poi_file = os.path.join(DATA_DIR, city, "04_results", "poi_matrix.parquet")
    pop_file = os.path.join(DATA_DIR, city, "04_results", "pop_matrix.parquet")
    dna_gpkg = os.path.join(DATA_DIR, city, "04_results", "stop_dna.gpkg")

    if not os.path.exists(poi_file) or not os.path.exists(pop_file):
        raise FileNotFoundError(f"Parquet matrices missing for city '{city}'")

    # 1. Fetch Hub Metrics from stop_dna.gpkg
    hub_metrics = None
    if hub_id and os.path.exists(dna_gpkg):
        con = sqlite3.connect(f"file:{dna_gpkg}?mode=ro", uri=True)
        cur = con.cursor()
        cur.execute("SELECT table_name FROM gpkg_contents WHERE data_type = 'features'")
        tables = cur.fetchall()
        if tables:
            table = tables[0][0]
            cur.execute(f'PRAGMA table_info("{table}")')
            cols = [c[1] for c in cur.fetchall()]
            
            try:
                cur.execute(f'SELECT * FROM "{table}" WHERE hub_id = ? ORDER BY local_score_raw DESC LIMIT 1', (int(hub_id),))
                row = cur.fetchone()
                if row:
                    hub_metrics = dict(zip(cols, row))
                    hub_metrics.pop("geom", None)
                    hub_metrics.pop("geometry", None)
                    for k, v in hub_metrics.items():
                        if isinstance(v, int) and (v > 2**53 or v < -2**53):
                            hub_metrics[k] = str(v)
            except Exception:
                pass
        con.close()

    # 2. DuckDB Spatial Aggregations (500m Walking Buffer)
    lat_delta = 500 / 111000.0
    lon_delta = 500 / (111000.0 * math.cos(math.radians(lat)))
    min_lat, max_lat = lat - lat_delta, lat + lat_delta
    min_lon, max_lon = lon - lon_delta, lon + lon_delta

    haversine_sql = f"""(6371000 * acos(
        cos(radians({lat})) * cos(radians(lat)) * cos(radians(lon) - radians({lon})) +
        sin(radians({lat})) * sin(radians(lat))
    ))"""

    db = duckdb.connect(":memory:")

    # Introspect schema to handle cities with optimized/reduced poi_matrix columns
    cols_df = db.execute(f"DESCRIBE SELECT * FROM read_parquet('{poi_file}')").fetchall()
    col_names = {r[0] for r in cols_df}
    
    name_col = "name" if "name" in col_names else "CAST(NULL AS VARCHAR) AS name"
    
    if "category" in col_names:
        category_col = "category"
    else:
        category_col = """(CASE 
            WHEN w >= 1000000 THEN 'Węzeł Strategiczny / Transport'
            WHEN w >= 500000 THEN 'Szpital / Kampus Akademicki'
            WHEN w >= 100000 THEN 'Centrum Handlowe / Usługi'
            WHEN w >= 30000 THEN 'Szkoła / Edukacja / Kultura'
            WHEN w >= 5000 THEN 'Usługi Codzienne / Apteka / Handel'
            WHEN w >= 1000 THEN 'Gastronomia / Rozrywka'
            ELSE 'Zieleń / Mikroinfrastruktura'
        END) AS category"""

    if "tier" in col_names:
        tier_col = "tier"
    else:
        tier_col = """(CASE 
            WHEN w >= 1000000 THEN 'T0'
            WHEN w >= 500000 THEN 'T1'
            WHEN w >= 100000 THEN 'T2'
            WHEN w >= 30000 THEN 'T3'
            WHEN w >= 5000 THEN 'T4'
            WHEN w >= 1000 THEN 'T5'
            ELSE 'T6'
        END) AS tier"""

    # Query POIs within 500m
    poi_query = f"""
        SELECT poi_id, {name_col}, {category_col}, {tier_col}, lat, lon, w, sum_pull
        FROM read_parquet('{poi_file}')
        WHERE lat BETWEEN {min_lat} AND {max_lat}
          AND lon BETWEEN {min_lon} AND {max_lon}
          AND {haversine_sql} <= 500
        ORDER BY (w * sum_pull) DESC
    """
    pois = db.execute(poi_query).fetch_df().to_dict(orient="records")

    # Query Demographic Grid within 500m
    pop_query = f"""
        SELECT grid_id, lat, lon, pop_val, sum_pull_pop
        FROM read_parquet('{pop_file}')
        WHERE lat BETWEEN {min_lat} AND {max_lat}
          AND lon BETWEEN {min_lon} AND {max_lon}
          AND {haversine_sql} <= 500
    """
    pop = db.execute(pop_query).fetch_df().to_dict(orient="records")
    db.close()

    # Normalize data for JSON serialization and sanitize pandas NaN
    for p in pois:
        name_val = p.get("name")
        p["name"] = str(name_val) if (name_val is not None and not (isinstance(name_val, float) and math.isnan(name_val))) else None
        cat_val = p.get("category")
        p["category"] = str(cat_val) if (cat_val is not None and not (isinstance(cat_val, float) and math.isnan(cat_val))) else "Infrastruktura Lokalna"
        tier_val = p.get("tier")
        p["tier"] = str(tier_val) if (tier_val is not None and not (isinstance(tier_val, float) and math.isnan(tier_val))) else "T6"
        p["poi_id"] = str(p["poi_id"]) if p.get("poi_id") is not None else None
        p["w"] = float(p.get("w", 0))
        p["sum_pull"] = float(p.get("sum_pull", 0))

    for p in pop:
        p["grid_id"] = str(p["grid_id"]) if p.get("grid_id") is not None else None
        pop_v = p.get("pop_val")
        p["pop_val"] = float(pop_v) if (pop_v is not None and not (isinstance(pop_v, float) and math.isnan(pop_v))) else 0.0
        sum_p = p.get("sum_pull_pop")
        p["sum_pull_pop"] = float(sum_p) if (sum_p is not None and not (isinstance(sum_p, float) and math.isnan(sum_p))) else 0.0

    return {
        "hub_id": str(hub_id) if hub_id else "",
        "city": city,
        "lat": lat,
        "lon": lon,
        "pois": pois,
        "pop": pop,
        "metrics": hub_metrics
    }


def get_hexagons(city: str, min_pop: float = 0.0) -> Dict[str, Any]:
    """Reads h3_grid.parquet and returns structured H3 hexagonal cells for Deck.gl H3HexagonLayer."""
    h3_file = os.path.join(DATA_DIR, city, "04_results", "h3_grid.parquet")
    if not os.path.exists(h3_file):
        raise FileNotFoundError(f"h3_grid.parquet not found for city '{city}' at {h3_file}")

    db = duckdb.connect(":memory:")
    query = f"""
        SELECT 
            h3_index as hex,
            lat,
            lon,
            stop_count,
            hub_count,
            total_departures_h,
            max_stop_grade,
            transport_score,
            pop_total,
            rcn_tx_count,
            rcn_median_price_m2,
            poi_gravity_sum,
            transit_desert_index,
            is_transit_desert
        FROM read_parquet('{h3_file}')
        WHERE pop_total >= {min_pop} OR stop_count > 0 OR rcn_tx_count > 0
        ORDER BY total_departures_h DESC
    """
    rows = db.execute(query).fetch_df().to_dict(orient="records")
    db.close()

    # Sanitize float / NaN values for JSON
    for r in rows:
        r["hex"] = str(r["hex"])
        r["stop_count"] = int(r["stop_count"])
        r["hub_count"] = int(r["hub_count"])
        r["total_departures_h"] = float(r["total_departures_h"])
        r["max_stop_grade"] = str(r.get("max_stop_grade") or "NONE")
        r["transport_score"] = float(r["transport_score"])
        r["pop_total"] = float(r["pop_total"])
        r["rcn_tx_count"] = int(r["rcn_tx_count"])
        price = r.get("rcn_median_price_m2")
        r["rcn_median_price_m2"] = float(price) if (price is not None and not (isinstance(price, float) and math.isnan(price))) else None
        r["poi_gravity_sum"] = float(r["poi_gravity_sum"])
        r["transit_desert_index"] = float(r["transit_desert_index"])
        r["is_transit_desert"] = bool(r["is_transit_desert"])

    return {
        "city": city,
        "resolution": 8,
        "count": len(rows),
        "hexagons": rows
    }


def get_market_summary(city: str) -> Dict[str, Any]:
    """Reads notary transaction summary from rcn_stats.json."""
    stats_path = os.path.join(DATA_DIR, city, "02_spatial", "rcn_stats.json")
    if not os.path.exists(stats_path):
        raise FileNotFoundError(f"rcn_stats.json not found for city '{city}' at {stats_path}")
    with open(stats_path, "r", encoding="utf-8") as f:
        data = json.load(f)
    return {
        "city": str(data.get("city", city)),
        "total": int(data.get("total", 0)),
        "valid": int(data.get("valid", 0)),
        "median_price_m2": float(data.get("median_price_m2", 0.0)),
        "trimmed_mean_m2": float(data.get("trimmed_mean_m2", 0.0)),
        "min_valid": float(data.get("min_valid", 0.0)),
        "max_allowed": float(data.get("max_allowed", 0.0)),
    }


def get_axe_list(city: str, threshold: float = 0.70) -> Dict[str, Any]:
    """
    Computes TCRP Report 100 Asymmetric Redundancy Audit on physical stops in stop_dna.gpkg.
    Identifies redundant stops B dominated by nearby stops A (dist <= 200m) with R(B -> A) >= threshold.
    """
    gpkg_path = os.path.join(DATA_DIR, city, "04_results", "stop_dna.gpkg")
    if not os.path.exists(gpkg_path):
        raise FileNotFoundError(f"stop_dna.gpkg not found for city '{city}'")

    con = sqlite3.connect(f"file:{gpkg_path}?mode=ro", uri=True)
    stops = pd.read_sql_query(
        "SELECT stop_id, stop_name, stop_lat, stop_lon, stop_routes, stop_departures_h, stop_pop_val, stop_infra_score, hub_id FROM stop_dna",
        con
    )
    con.close()

    if stops.empty or len(stops) < 2:
        return {"city": city, "threshold": threshold, "total_redundant": 0, "stops": []}

    lat_rad = np.radians(stops["stop_lat"].mean())
    coords = np.column_stack([
        stops["stop_lon"] * 111000.0 * np.cos(lat_rad),
        stops["stop_lat"] * 111000.0
    ])

    tree = cKDTree(coords)
    pairs = tree.query_pairs(r=200.0)

    routes_dict = {}
    for idx, r in stops.iterrows():
        r_str = str(r["stop_routes"]) if pd.notna(r["stop_routes"]) else ""
        routes_dict[idx] = set([s.strip() for s in r_str.split(",") if s.strip()])

    candidate_map = {}
    r_catchment = 300.0

    for i, j in pairs:
        dist = float(np.linalg.norm(coords[i] - coords[j]))
        if dist < 1.0:
            dist = 1.0

        s_spatial = float(np.exp(-0.5 * ((dist / 100.0) ** 2)))

        d_norm = dist / (2.0 * r_catchment)
        if d_norm < 1.0:
            area_overlap = 2.0 * (r_catchment ** 2) * np.arccos(d_norm) - dist * np.sqrt(max(0.0, r_catchment ** 2 - (dist / 2.0) ** 2))
            s_cannibalization = float(area_overlap / (np.pi * (r_catchment ** 2)))
        else:
            s_cannibalization = 0.0

        routes_i = routes_dict[i]
        routes_j = routes_dict[j]

        # Evaluate j -> i (i dominant, j redundant)
        if routes_j:
            overlap_j_in_i = len(routes_j.intersection(routes_i)) / len(routes_j)
            r_j_to_i = overlap_j_in_i * s_spatial * s_cannibalization
            dep_i = float(stops.iloc[i]["stop_departures_h"] or 0)
            dep_j = float(stops.iloc[j]["stop_departures_h"] or 0)
            if r_j_to_i >= threshold and (dep_i >= dep_j):
                if j not in candidate_map or r_j_to_i > candidate_map[j]["r_score"]:
                    candidate_map[j] = {
                        "redundant_idx": j,
                        "dominant_idx": i,
                        "r_score": r_j_to_i,
                        "dist_m": dist,
                        "s_service": overlap_j_in_i,
                        "s_spatial": s_spatial,
                        "s_cannibalization": s_cannibalization
                    }

        # Evaluate i -> j (j dominant, i redundant)
        if routes_i:
            overlap_i_in_j = len(routes_i.intersection(routes_j)) / len(routes_i)
            r_i_to_j = overlap_i_in_j * s_spatial * s_cannibalization
            dep_i = float(stops.iloc[i]["stop_departures_h"] or 0)
            dep_j = float(stops.iloc[j]["stop_departures_h"] or 0)
            if r_i_to_j >= threshold and (dep_j >= dep_i):
                if i not in candidate_map or r_i_to_j > candidate_map[i]["r_score"]:
                    candidate_map[i] = {
                        "redundant_idx": i,
                        "dominant_idx": j,
                        "r_score": r_i_to_j,
                        "dist_m": dist,
                        "s_service": overlap_i_in_j,
                        "s_spatial": s_spatial,
                        "s_cannibalization": s_cannibalization
                    }

    items = []
    for cand in sorted(candidate_map.values(), key=lambda x: x["r_score"], reverse=True):
        r_stop = stops.iloc[cand["redundant_idx"]]
        d_stop = stops.iloc[cand["dominant_idx"]]
        items.append({
            "redundant_stop_id": str(r_stop["stop_id"]),
            "redundant_stop_name": str(r_stop["stop_name"]),
            "dominant_stop_id": str(d_stop["stop_id"]),
            "dominant_stop_name": str(d_stop["stop_name"]),
            "redundancy_score": round(cand["r_score"], 4),
            "distance_m": round(cand["dist_m"], 1),
            "service_overlap": round(cand["s_service"], 4),
            "spatial_decay": round(cand["s_spatial"], 4),
            "demand_cannibalization": round(cand["s_cannibalization"], 4),
            "redundant_routes": str(r_stop.get("stop_routes") or ""),
            "dominant_routes": str(d_stop.get("stop_routes") or ""),
            "redundant_departures_h": float(r_stop.get("stop_departures_h") or 0.0),
            "dominant_departures_h": float(d_stop.get("stop_departures_h") or 0.0),
            "lat": float(r_stop["stop_lat"]),
            "lon": float(r_stop["stop_lon"])
        })

    return {
        "city": city,
        "threshold": threshold,
        "total_redundant": len(items),
        "stops": items
    }


def get_transit_deserts(city: str, limit: int = 50) -> Dict[str, Any]:
    """Reads h3_grid.parquet and returns top transit deserts sorted by transit_desert_index DESC."""
    h3_file = os.path.join(DATA_DIR, city, "04_results", "h3_grid.parquet")
    if not os.path.exists(h3_file):
        raise FileNotFoundError(f"h3_grid.parquet not found for city '{city}' at {h3_file}")

    db = duckdb.connect(":memory:")
    query = f"""
        SELECT 
            h3_index,
            lat,
            lon,
            pop_total,
            total_departures_h,
            transit_desert_index,
            is_transit_desert,
            rcn_median_price_m2,
            stop_count,
            hub_count
        FROM read_parquet('{h3_file}')
        WHERE is_transit_desert = true
        ORDER BY transit_desert_index DESC
        LIMIT {limit}
    """
    rows = db.execute(query).fetch_df().to_dict(orient="records")
    db.close()

    for r in rows:
        r["h3_index"] = str(r["h3_index"])
        r["lat"] = float(r["lat"])
        r["lon"] = float(r["lon"])
        r["pop_total"] = float(r["pop_total"])
        r["total_departures_h"] = float(r["total_departures_h"])
        r["transit_desert_index"] = float(r["transit_desert_index"])
        r["is_transit_desert"] = bool(r["is_transit_desert"])
        price = r.get("rcn_median_price_m2")
        r["rcn_median_price_m2"] = float(price) if (price is not None and not (isinstance(price, float) and math.isnan(price))) else None
        r["stop_count"] = int(r["stop_count"])
        r["hub_count"] = int(r["hub_count"])

    return {
        "city": city,
        "count": len(rows),
        "deserts": rows
    }


def get_hexagon_detail(city: str, hex_index: str) -> Dict[str, Any]:
    """Retrieves single H3 hexagonal cell detail from h3_grid.parquet."""
    h3_file = os.path.join(DATA_DIR, city, "04_results", "h3_grid.parquet")
    if not os.path.exists(h3_file):
        raise FileNotFoundError(f"h3_grid.parquet not found for city '{city}' at {h3_file}")

    db = duckdb.connect(":memory:")
    query = f"""
        SELECT 
            h3_index as hex,
            lat,
            lon,
            stop_count,
            hub_count,
            total_departures_h,
            max_stop_grade,
            transport_score,
            pop_total,
            rcn_tx_count,
            rcn_median_price_m2,
            poi_gravity_sum,
            transit_desert_index,
            is_transit_desert
        FROM read_parquet('{h3_file}')
        WHERE h3_index = '{hex_index}'
        LIMIT 1
    """
    rows = db.execute(query).fetch_df().to_dict(orient="records")
    db.close()

    if not rows:
        raise FileNotFoundError(f"Hexagon with index '{hex_index}' not found in city '{city}'")

    r = rows[0]
    r["hex"] = str(r["hex"])
    r["stop_count"] = int(r["stop_count"])
    r["hub_count"] = int(r["hub_count"])
    r["total_departures_h"] = float(r["total_departures_h"])
    r["max_stop_grade"] = str(r.get("max_stop_grade") or "NONE")
    r["transport_score"] = float(r["transport_score"])
    r["pop_total"] = float(r["pop_total"])
    r["rcn_tx_count"] = int(r["rcn_tx_count"])
    price = r.get("rcn_median_price_m2")
    r["rcn_median_price_m2"] = float(price) if (price is not None and not (isinstance(price, float) and math.isnan(price))) else None
    r["poi_gravity_sum"] = float(r["poi_gravity_sum"])
    r["transit_desert_index"] = float(r["transit_desert_index"])
    r["is_transit_desert"] = bool(r["is_transit_desert"])
    return r


def get_hexagon_stops(city: str, hex_index: str) -> Dict[str, Any]:
    """Retrieves physical stops falling inside the given H3 index from stop_dna.gpkg."""
    gpkg_path = os.path.join(DATA_DIR, city, "04_results", "stop_dna.gpkg")
    if not os.path.exists(gpkg_path):
        raise FileNotFoundError(f"stop_dna.gpkg not found for city '{city}' at {gpkg_path}")

    con = sqlite3.connect(f"file:{gpkg_path}?mode=ro", uri=True)
    cur = con.cursor()
    cur.execute("SELECT table_name FROM gpkg_contents WHERE data_type = 'features'")
    tables = cur.fetchall()
    if not tables:
        con.close()
        return {"type": "FeatureCollection", "features": []}

    table = tables[0][0]
    cur.execute(f'PRAGMA table_info("{table}")')
    cols = [c[1] for c in cur.fetchall()]

    cur.execute(f'SELECT * FROM "{table}" WHERE h3_index = ?', (hex_index,))
    rows = cur.fetchall()
    con.close()

    features = []
    for r in rows:
        d = dict(zip(cols, r))
        lat = d.get("stop_lat") or d.get("lat")
        lon = d.get("stop_lon") or d.get("lon")
        for k in ["geom", "geometry"]:
            d.pop(k, None)

        for k, v in d.items():
            if isinstance(v, int) and (v > 2**53 or v < -2**53):
                d[k] = str(v)

        geometry = None
        if lat is not None and lon is not None:
            geometry = {"type": "Point", "coordinates": [float(lon), float(lat)]}

        features.append({
            "type": "Feature",
            "geometry": geometry,
            "properties": d
        })

    return {"type": "FeatureCollection", "features": features}


# ==============================================================================
# SPRINT 3.5: UNIVERSAL QUERY ENGINE & 100% AUDIT DATA ACCESS
# ==============================================================================

try:
    from scripts.utils.constants import CITY_BASELINES
except Exception:
    CITY_BASELINES = {
        "warszawa": 1800000, "krakow": 800000, "lodz": 670000, "wroclaw": 640000,
        "poznan": 530000, "szczecin": 400000, "bydgoszcz": 340000, "lublin": 330000,
        "bialystok": 290000, "katowice": 290000, "gzm": 2300000, "rzeszow": 190000,
        "kielce": 190000, "olsztyn": 170000, "radom": 200000, "torun": 190000,
        "czestochowa": 210000, "legnica": 90000, "elblag": 110000, "opole": 120000,
        "gorzow": 120000, "suwalki": 70000, "elk": 60000, "lomza": 60000,
        "przemysl": 60000, "gizycko": 30000, "swinoujscie": 40000, "kutno": 43000,
        "leszno": 63000, "trojmiasto": 750000, "zielona-gora": 140000,
    }

STOP_METRIC_MAP = {
    "stop_departures_h": "stop_departures_h",
    "departures": "stop_departures_h",
    "freq": "stop_departures_h",
    "stop_pop_val": "stop_pop_val",
    "pop": "stop_pop_val",
    "population": "stop_pop_val",
    "stop_infra_score": "stop_infra_score",
    "infra": "stop_infra_score",
    "stop_raw_gravity": "stop_raw_gravity",
    "gravity": "stop_raw_gravity",
    "stop_entropy": "stop_entropy",
    "entropy": "stop_entropy",
    "stop_market_val": "stop_market_val",
    "market": "stop_market_val",
    "price": "stop_market_val",
    "stop_liquidity": "stop_liquidity",
    "liquidity": "stop_liquidity",
    "stop_local_score_raw": "stop_local_score_raw",
    "score": "stop_local_score_raw",
    "zscore": "stop_local_score_raw",
    "stop_percentile": "stop_percentile",
    "percentile": "stop_percentile",
    "stop_grade": "stop_grade",
    "grade": "stop_grade",
    "stop_routes_count": "stop_routes_count",
    "routes": "stop_routes_count",
    "stop_hub_share": "stop_hub_share",
    "share": "stop_hub_share",
    "national_score": "national_score",
    "nat_score": "national_score",
    "national_percentile": "national_percentile",
    "nat_percentile": "national_percentile",
    "stop_name": "stop_name",
    "name": "stop_name",
    "stop_id": "stop_id",
    "id": "stop_id"
}

HUB_METRIC_MAP = {
    "hub_local_score_raw": "hub_local_score_raw",
    "score": "hub_local_score_raw",
    "zscore": "hub_local_score_raw",
    "hub_departures_h": "hub_departures_h",
    "departures": "hub_departures_h",
    "hub_stops_count": "hub_stops_count",
    "stops": "hub_stops_count",
    "hub_routes_count": "hub_routes_count",
    "routes": "hub_routes_count",
    "hub_infra_score": "hub_infra_score",
    "infra": "hub_infra_score",
    "hub_raw_gravity": "hub_raw_gravity",
    "gravity": "hub_raw_gravity",
    "hub_entropy": "hub_entropy",
    "entropy": "hub_entropy",
    "hub_pop_val": "hub_pop_val",
    "pop": "hub_pop_val",
    "hub_market_val": "hub_market_val",
    "market": "hub_market_val",
    "price": "hub_market_val",
    "hub_liquidity": "hub_liquidity",
    "liquidity": "hub_liquidity",
    "hub_percentile": "hub_percentile",
    "percentile": "hub_percentile",
    "hub_grade": "hub_grade",
    "grade": "hub_grade",
    "hub_name": "hub_name",
    "name": "hub_name",
    "hub_id": "hub_id",
    "id": "hub_id"
}

HEX_METRIC_MAP = {
    "transport_score": "transport_score",
    "score": "transport_score",
    "transit_desert_index": "transit_desert_index",
    "tdi": "transit_desert_index",
    "desert": "transit_desert_index",
    "pop_total": "pop_total",
    "pop": "pop_total",
    "population": "pop_total",
    "total_departures_h": "total_departures_h",
    "departures": "total_departures_h",
    "stop_count": "stop_count",
    "stops": "stop_count",
    "hub_count": "hub_count",
    "hubs": "hub_count",
    "rcn_tx_count": "rcn_tx_count",
    "rcn_median_price_m2": "rcn_median_price_m2",
    "price": "rcn_median_price_m2",
    "poi_gravity_sum": "poi_gravity_sum",
    "gravity": "poi_gravity_sum",
    "max_stop_grade": "max_stop_grade",
    "grade": "max_stop_grade",
    "h3_index": "h3_index",
    "hex": "h3_index"
}

MARKET_METRIC_MAP = {
    "price_m2": "price_m2",
    "price": "price_m2",
    "tran_cena_brutto": "tran_cena_brutto",
    "total_price": "tran_cena_brutto",
    "lok_pow_uzyt": "lok_pow_uzyt",
    "area": "lok_pow_uzyt",
    "area_m2": "lok_pow_uzyt",
    "dok_data": "dok_data",
    "date": "dok_data"
}


def _parse_grades(grade_str: str) -> List[str]:
    """Parses comma-separated grade filter, correctly handling 'A+' when '+' was URL-decoded into space."""
    if not grade_str:
        return []
    grades = []
    for g in grade_str.split(","):
        g_clean = g.strip().upper()
        if not g_clean:
            continue
        if (g.endswith(" ") or g.endswith("+") or "+" in g) and g_clean == "A":
            grades.append("A+")
        else:
            grades.append(g_clean)
    return grades


def get_stops_ranking(
    city: str,
    order_by: str = "stop_local_score_raw",
    order_dir: str = "desc",
    limit: int = 20,
    offset: int = 0,
    rank: Optional[int] = None,
    grade: Optional[str] = None,
    is_hub_anchor: Optional[bool] = None,
    min_departures: Optional[float] = None,
    min_pop: Optional[float] = None,
    h3_index: Optional[str] = None,
) -> Dict[str, Any]:
    order_by_clean = order_by.strip().lower()
    if order_by_clean not in STOP_METRIC_MAP:
        raise ValueError(f"Invalid order_by metric '{order_by}'. Allowed: {list(STOP_METRIC_MAP.keys())}")
    db_col = STOP_METRIC_MAP[order_by_clean]

    order_dir_clean = order_dir.strip().upper()
    if order_dir_clean not in ["ASC", "DESC"]:
        raise ValueError("order_dir must be 'asc' or 'desc'")

    if rank is not None:
        actual_rank = max(1, rank)
        actual_offset = actual_rank - 1
        actual_limit = 1
    else:
        actual_offset = max(0, offset)
        actual_limit = max(1, min(limit, 1000))

    master_path = os.path.join(os.path.dirname(DATA_DIR), "database", "master_stop_dna_poland.gpkg")
    local_path = os.path.join(DATA_DIR, city, "04_results", "stop_dna.gpkg")

    if os.path.exists(master_path):
        gpkg_path = master_path
        use_master = True
    elif os.path.exists(local_path):
        gpkg_path = local_path
        use_master = False
    else:
        raise FileNotFoundError(f"Neither master database nor local stop_dna.gpkg found for city '{city}'")

    con = sqlite3.connect(f"file:{gpkg_path}?mode=ro", uri=True)
    cur = con.cursor()
    cur.execute("SELECT table_name FROM gpkg_contents WHERE data_type = 'features'")
    tbl_row = cur.fetchone()
    if not tbl_row:
        con.close()
        raise FileNotFoundError(f"Feature table not found in {gpkg_path}")
    tbl = tbl_row[0]

    where_clauses = []
    params = []

    if use_master:
        if city != "all":
            where_clauses.append("city_context = ?")
            params.append(city)

    if grade:
        grades = _parse_grades(grade)
        if grades:
            placeholders = ",".join(["?"] * len(grades))
            where_clauses.append(f"stop_grade IN ({placeholders})")
            params.extend(grades)

    if is_hub_anchor is not None:
        where_clauses.append("is_hub_anchor = ?")
        params.append(1 if is_hub_anchor else 0)

    if min_departures is not None:
        where_clauses.append("stop_departures_h >= ?")
        params.append(float(min_departures))

    if min_pop is not None:
        where_clauses.append("stop_pop_val >= ?")
        params.append(float(min_pop))

    if h3_index:
        where_clauses.append("h3_index = ?")
        params.append(str(h3_index))

    where_sql = ("WHERE " + " AND ".join(where_clauses)) if where_clauses else ""

    cur.execute(f'SELECT COUNT(*) FROM "{tbl}" {where_sql}', params)
    total_count = cur.fetchone()[0]

    cur.execute(f'SELECT * FROM "{tbl}" {where_sql} ORDER BY {db_col} {order_dir_clean} LIMIT ? OFFSET ?', params + [actual_limit, actual_offset])
    cur_cols = [c[0] for c in cur.description]
    rows = cur.fetchall()
    con.close()

    items = []
    for i, r in enumerate(rows):
        d = dict(zip(cur_cols, r))
        d.pop("geom", None)
        d.pop("geometry", None)
        item_rank = actual_offset + i + 1

        lat = float(d.get("stop_lat") or d.get("lat") or 0.0)
        lon = float(d.get("stop_lon") or d.get("lon") or 0.0)

        items.append({
            "rank": item_rank,
            "stop_id": str(d.get("stop_id", "")),
            "stop_name": str(d.get("stop_name", "")),
            "city": str(d.get("city_context") or d.get("city") or city),
            "lat": lat,
            "lon": lon,
            "hub_id": int(d["hub_id"]) if d.get("hub_id") is not None else None,
            "hub_name": str(d.get("hub_name") or ""),
            "is_hub_anchor": bool(d.get("is_hub_anchor", False)),
            "stop_departures_h": float(d.get("stop_departures_h") or 0.0),
            "stop_routes_count": int(d.get("stop_routes_count") or 0),
            "stop_routes": str(d.get("stop_routes") or ""),
            "stop_grade": str(d.get("stop_grade") or d.get("grade") or "F"),
            "stop_percentile": float(d.get("stop_percentile") or d.get("local_percentile") or 0.0),
            "stop_local_score_raw": float(d.get("stop_local_score_raw") or d.get("local_score_raw") or 0.0),
            "stop_infra_score": float(d.get("stop_infra_score") or d.get("infra_score") or 0.0),
            "stop_raw_gravity": float(d.get("stop_raw_gravity")) if d.get("stop_raw_gravity") is not None else None,
            "stop_entropy": float(d.get("stop_entropy")) if d.get("stop_entropy") is not None else None,
            "stop_pop_val": float(d.get("stop_pop_val") or d.get("pop_val") or 0.0),
            "stop_market_val": float(d.get("stop_market_val") or d.get("market_val") or 0.0),
            "stop_liquidity": int(d.get("stop_liquidity")) if d.get("stop_liquidity") is not None else None,
            "stop_hub_share": float(d.get("stop_hub_share") or 0.0),
            "national_score": float(d.get("national_score")) if d.get("national_score") is not None else None,
            "national_percentile": float(d.get("national_percentile")) if d.get("national_percentile") is not None else None,
        })

    return {
        "city": city,
        "total": total_count,
        "limit": actual_limit,
        "offset": actual_offset,
        "order_by": db_col,
        "order_dir": order_dir_clean.lower(),
        "items": items
    }


def get_stops_batch(city: str, stop_ids: List[str]) -> Dict[str, Any]:
    if not stop_ids:
        return {"city": city, "count": 0, "stops": []}

    gpkg_path = os.path.join(DATA_DIR, city, "04_results", "stop_dna.gpkg")
    if not os.path.exists(gpkg_path):
        raise FileNotFoundError(f"stop_dna.gpkg not found for city '{city}'")

    con = sqlite3.connect(f"file:{gpkg_path}?mode=ro", uri=True)
    cur = con.cursor()
    cur.execute("SELECT table_name FROM gpkg_contents WHERE data_type = 'features'")
    tbl = cur.fetchone()[0]

    cur.execute(f'PRAGMA table_info("{tbl}")')
    cols = [c[1] for c in cur.fetchall()]

    placeholders = ",".join(["?"] * len(stop_ids))
    cur.execute(f'SELECT * FROM "{tbl}" WHERE stop_id IN ({placeholders})', [str(sid) for sid in stop_ids])
    rows = cur.fetchall()
    con.close()

    profiles = []
    for r in rows:
        d = dict(zip(cols, r))
        d.pop("geom", None)
        d.pop("geometry", None)

        lat = float(d.get("stop_lat") or d.get("lat") or 0.0)
        lon = float(d.get("stop_lon") or d.get("lon") or 0.0)

        profiles.append({
            "stop_id": str(d.get("stop_id", "")),
            "stop_name": str(d.get("stop_name", "")),
            "city": city,
            "lat": lat,
            "lon": lon,
            "hub_id": int(d["hub_id"]) if d.get("hub_id") is not None else None,
            "hub_name": str(d.get("hub_name") or ""),
            "is_hub_anchor": bool(d.get("is_hub_anchor", False)),
            "stop_hub_share": float(d.get("stop_hub_share") or 0.0),
            "stop_departures_h": float(d.get("stop_departures_h") or 0.0),
            "stop_routes": str(d.get("stop_routes") or ""),
            "stop_routes_count": int(d.get("stop_routes_count") or 0),
            "stop_grade": str(d.get("stop_grade") or d.get("grade") or "F"),
            "stop_percentile": float(d.get("stop_percentile") or d.get("local_percentile") or 0.0),
            "stop_local_score_raw": float(d.get("stop_local_score_raw") or d.get("local_score_raw") or 0.0),
            "stop_infra_score": float(d.get("stop_infra_score") or d.get("infra_score") or 0.0),
            "stop_pop_val": float(d.get("stop_pop_val") or d.get("pop_val") or 0.0),
            "stop_market_val": float(d.get("stop_market_val") or d.get("market_val") or 0.0),
            "properties": d
        })

    return {
        "city": city,
        "count": len(profiles),
        "stops": profiles
    }


def get_hubs_ranking(
    city: str,
    order_by: str = "hub_local_score_raw",
    order_dir: str = "desc",
    limit: int = 20,
    offset: int = 0,
    rank: Optional[int] = None,
    grade: Optional[str] = None,
    min_stops: Optional[int] = None,
) -> Dict[str, Any]:
    order_by_clean = order_by.strip().lower()
    if order_by_clean not in HUB_METRIC_MAP:
        raise ValueError(f"Invalid order_by metric '{order_by}'. Allowed: {list(HUB_METRIC_MAP.keys())}")
    db_col = HUB_METRIC_MAP[order_by_clean]

    order_dir_clean = order_dir.strip().upper()
    if order_dir_clean not in ["ASC", "DESC"]:
        raise ValueError("order_dir must be 'asc' or 'desc'")

    if rank is not None:
        actual_rank = max(1, rank)
        actual_offset = actual_rank - 1
        actual_limit = 1
    else:
        actual_offset = max(0, offset)
        actual_limit = max(1, min(limit, 1000))

    gpkg_path = os.path.join(DATA_DIR, city, "04_results", "hubs.gpkg")
    if not os.path.exists(gpkg_path):
        gpkg_path = os.path.join(DATA_DIR, city, "04_results", "stop_dna.gpkg")
    if not os.path.exists(gpkg_path):
        raise FileNotFoundError(f"Hubs layer not found for city '{city}'")

    con = sqlite3.connect(f"file:{gpkg_path}?mode=ro", uri=True)
    cur = con.cursor()
    cur.execute("SELECT table_name FROM gpkg_contents WHERE data_type = 'features'")
    tbl = cur.fetchone()[0]

    where_clauses = []
    params = []

    if grade:
        grades = _parse_grades(grade)
        if grades:
            placeholders = ",".join(["?"] * len(grades))
            where_clauses.append(f"(hub_grade IN ({placeholders}) OR grade IN ({placeholders}))")
            params.extend(grades * 2)


    if min_stops is not None:
        where_clauses.append("hub_stops_count >= ?")
        params.append(int(min_stops))

    where_sql = ("WHERE " + " AND ".join(where_clauses)) if where_clauses else ""

    cur.execute(f'SELECT COUNT(*) FROM "{tbl}" {where_sql}', params)
    total_count = cur.fetchone()[0]

    cur.execute(f'SELECT * FROM "{tbl}" {where_sql} ORDER BY {db_col} {order_dir_clean} LIMIT ? OFFSET ?', params + [actual_limit, actual_offset])
    cur_cols = [c[0] for c in cur.description]
    rows = cur.fetchall()
    con.close()

    items = []
    for i, r in enumerate(rows):
        d = dict(zip(cur_cols, r))
        d.pop("geom", None)
        d.pop("geometry", None)
        item_rank = actual_offset + i + 1

        raw_sids = str(d.get("hub_stops_ids") or "")
        stops_list = [s.strip() for s in raw_sids.split(",") if s.strip()] if raw_sids else ([str(d.get("stop_id"))] if d.get("stop_id") else [])

        lat = float(d.get("lat") or d.get("stop_lat") or 0.0)
        lon = float(d.get("lon") or d.get("stop_lon") or 0.0)

        items.append({
            "rank": item_rank,
            "hub_id": int(d.get("hub_id", 0)),
            "hub_name": str(d.get("hub_name") or d.get("stop_name") or f"Hub {d.get('hub_id')}"),
            "city": city,
            "lat": lat,
            "lon": lon,
            "hub_stops_count": int(d.get("hub_stops_count") or len(stops_list) or 1),
            "hub_stops_ids": stops_list,
            "hub_departures_h": float(d.get("hub_departures_h") or d.get("transit_freq") or 0.0),
            "hub_routes_count": int(d.get("hub_routes_count") or 0),
            "hub_routes": str(d.get("hub_routes") or ""),
            "hub_grade": str(d.get("hub_grade") or d.get("grade") or "F"),
            "hub_percentile": float(d.get("hub_percentile") or d.get("local_percentile") or 0.0),
            "hub_local_score_raw": float(d.get("hub_local_score_raw") or d.get("local_score_raw") or 0.0),
            "hub_infra_score": float(d.get("hub_infra_score") or d.get("infra_score") or 0.0),
            "hub_raw_gravity": float(d.get("hub_raw_gravity")) if d.get("hub_raw_gravity") is not None else None,
            "hub_entropy": float(d.get("hub_entropy")) if d.get("hub_entropy") is not None else None,
            "hub_pop_val": float(d.get("hub_pop_val") or d.get("pop_val") or 0.0),
            "hub_market_val": float(d.get("hub_market_val") or d.get("market_val") or 0.0),
            "hub_liquidity": int(d.get("hub_liquidity")) if d.get("hub_liquidity") is not None else None,
        })

    return {
        "city": city,
        "total": total_count,
        "limit": actual_limit,
        "offset": actual_offset,
        "order_by": db_col,
        "order_dir": order_dir_clean.lower(),
        "items": items
    }


def get_hexagons_ranking(
    city: str,
    order_by: str = "transport_score",
    order_dir: str = "desc",
    limit: int = 20,
    offset: int = 0,
    rank: Optional[int] = None,
    is_transit_desert: Optional[bool] = None,
    has_rcn: Optional[bool] = None,
    min_pop: Optional[float] = None,
    max_pop: Optional[float] = None,
    min_departures: Optional[float] = None,
    max_departures: Optional[float] = None,
    grade: Optional[str] = None,
) -> Dict[str, Any]:
    order_by_clean = order_by.strip().lower()
    if order_by_clean not in HEX_METRIC_MAP:
        raise ValueError(f"Invalid order_by metric '{order_by}'. Allowed: {list(HEX_METRIC_MAP.keys())}")
    db_col = HEX_METRIC_MAP[order_by_clean]

    order_dir_clean = order_dir.strip().upper()
    if order_dir_clean not in ["ASC", "DESC"]:
        raise ValueError("order_dir must be 'asc' or 'desc'")

    if rank is not None:
        actual_rank = max(1, rank)
        actual_offset = actual_rank - 1
        actual_limit = 1
    else:
        actual_offset = max(0, offset)
        actual_limit = max(1, min(limit, 1000))

    h3_file = os.path.join(DATA_DIR, city, "04_results", "h3_grid.parquet")
    if not os.path.exists(h3_file):
        raise FileNotFoundError(f"h3_grid.parquet not found for city '{city}'")

    where_clauses = []
    if is_transit_desert is not None:
        where_clauses.append(f"is_transit_desert = {str(is_transit_desert).lower()}")
    if has_rcn:
        where_clauses.append("rcn_median_price_m2 IS NOT NULL AND rcn_median_price_m2 > 0")
    if min_pop is not None:
        where_clauses.append(f"pop_total >= {float(min_pop)}")
    if max_pop is not None:
        where_clauses.append(f"pop_total <= {float(max_pop)}")
    if min_departures is not None:
        where_clauses.append(f"total_departures_h >= {float(min_departures)}")
    if max_departures is not None:
        where_clauses.append(f"total_departures_h <= {float(max_departures)}")
    if grade:
        grades = [f"'{g}'" for g in _parse_grades(grade)]
        if grades:
            where_clauses.append(f"max_stop_grade IN ({','.join(grades)})")


    where_sql = ("WHERE " + " AND ".join(where_clauses)) if where_clauses else ""

    db = duckdb.connect(":memory:")
    total_count = db.execute(f"SELECT COUNT(*) FROM read_parquet('{h3_file}') {where_sql}").fetchone()[0]

    query_sql = f"""
        SELECT 
            h3_index as hex,
            lat,
            lon,
            stop_count,
            hub_count,
            total_departures_h,
            max_stop_grade,
            transport_score,
            pop_total,
            rcn_tx_count,
            rcn_median_price_m2,
            poi_gravity_sum,
            transit_desert_index,
            is_transit_desert
        FROM read_parquet('{h3_file}')
        {where_sql}
        ORDER BY {db_col} {order_dir_clean}
        LIMIT {actual_limit} OFFSET {actual_offset}
    """
    rows = db.execute(query_sql).fetch_df().to_dict(orient="records")
    db.close()

    items = []
    for i, r in enumerate(rows):
        item_rank = actual_offset + i + 1
        price = r.get("rcn_median_price_m2")
        items.append({
            "rank": item_rank,
            "hex": str(r["hex"]),
            "lat": float(r["lat"]),
            "lon": float(r["lon"]),
            "stop_count": int(r["stop_count"]),
            "hub_count": int(r["hub_count"]),
            "total_departures_h": float(r["total_departures_h"]),
            "max_stop_grade": str(r.get("max_stop_grade") or "NONE"),
            "transport_score": float(r["transport_score"]),
            "pop_total": float(r["pop_total"]),
            "rcn_tx_count": int(r["rcn_tx_count"]),
            "rcn_median_price_m2": float(price) if (price is not None and not (isinstance(price, float) and math.isnan(price))) else None,
            "poi_gravity_sum": float(r["poi_gravity_sum"]),
            "transit_desert_index": float(r["transit_desert_index"]),
            "is_transit_desert": bool(r["is_transit_desert"]),
        })

    return {
        "city": city,
        "total": total_count,
        "limit": actual_limit,
        "offset": actual_offset,
        "order_by": db_col,
        "order_dir": order_dir_clean.lower(),
        "items": items
    }


def get_hexagon_profile(city: str, hex_index: str) -> Dict[str, Any]:
    hex_detail = get_hexagon_detail(city, hex_index)
    stops_fc = get_hexagon_stops(city, hex_index)
    stops_items = []
    for i, f in enumerate(stops_fc.get("features", [])):
        p = f.get("properties", {})
        stops_items.append({
            "rank": i + 1,
            "stop_id": str(p.get("stop_id", "")),
            "stop_name": str(p.get("stop_name", "")),
            "city": city,
            "lat": float(f["geometry"]["coordinates"][1]) if f.get("geometry") else 0.0,
            "lon": float(f["geometry"]["coordinates"][0]) if f.get("geometry") else 0.0,
            "hub_id": int(p["hub_id"]) if p.get("hub_id") is not None else None,
            "hub_name": str(p.get("hub_name") or ""),
            "is_hub_anchor": bool(p.get("is_hub_anchor", False)),
            "stop_departures_h": float(p.get("stop_departures_h") or 0.0),
            "stop_routes_count": int(p.get("stop_routes_count") or 0),
            "stop_routes": str(p.get("stop_routes") or ""),
            "stop_grade": str(p.get("stop_grade") or p.get("grade") or "F"),
            "stop_percentile": float(p.get("stop_percentile") or p.get("local_percentile") or 0.0),
            "stop_local_score_raw": float(p.get("stop_local_score_raw") or p.get("local_score_raw") or 0.0),
            "stop_infra_score": float(p.get("stop_infra_score") or p.get("infra_score") or 0.0),
            "stop_pop_val": float(p.get("stop_pop_val") or p.get("pop_val") or 0.0),
            "stop_market_val": float(p.get("stop_market_val") or p.get("market_val") or 0.0),
            "stop_hub_share": float(p.get("stop_hub_share") or 0.0),
        })

    lat, lon = hex_detail["lat"], hex_detail["lon"]
    tx_nearby = get_market_transactions_nearby(city, lat=lat, lon=lon, radius_m=500.0, limit=10).get("transactions", [])
    hub_dets = get_hub_details(city=city, lat=lat, lon=lon)
    top_pois = hub_dets.get("pois", [])[:10]

    return {
        "city": city,
        "hex": hex_index,
        "hexagon": hex_detail,
        "stops": stops_items,
        "rcn_transactions": tx_nearby,
        "top_pois": top_pois
    }


def get_market_transactions_ranking(
    city: str,
    order_by: str = "price_m2",
    order_dir: str = "desc",
    limit: int = 20,
    offset: int = 0,
    rank: Optional[int] = None,
    market_type: Optional[str] = None,
    property_function: Optional[str] = None,
    min_price_m2: Optional[float] = None,
    max_price_m2: Optional[float] = None,
    min_total_price: Optional[float] = None,
    max_total_price: Optional[float] = None,
    min_area_m2: Optional[float] = None,
    max_area_m2: Optional[float] = None,
    date_from: Optional[str] = None,
    date_to: Optional[str] = None,
) -> Dict[str, Any]:
    order_by_clean = order_by.strip().lower()
    if order_by_clean not in MARKET_METRIC_MAP:
        raise ValueError(f"Invalid order_by metric '{order_by}'. Allowed: {list(MARKET_METRIC_MAP.keys())}")
    db_col = MARKET_METRIC_MAP[order_by_clean]

    order_dir_clean = order_dir.strip().upper()
    if order_dir_clean not in ["ASC", "DESC"]:
        raise ValueError("order_dir must be 'asc' or 'desc'")

    if rank is not None:
        actual_rank = max(1, rank)
        actual_offset = actual_rank - 1
        actual_limit = 1
    else:
        actual_offset = max(0, offset)
        actual_limit = max(1, min(limit, 1000))

    gpkg_path = os.path.join(DATA_DIR, city, "02_spatial", "transactions.gpkg")
    if not os.path.exists(gpkg_path):
        raise FileNotFoundError(f"transactions.gpkg not found for city '{city}'")

    con = sqlite3.connect(f"file:{gpkg_path}?mode=ro", uri=True)
    cur = con.cursor()
    cur.execute("SELECT table_name FROM gpkg_contents WHERE data_type = 'features'")
    tbl = cur.fetchone()[0]

    where_clauses = ["price_m2 IS NOT NULL", "price_m2 > 0"]
    params = []

    if market_type:
        where_clauses.append("tran_rodzaj_rynku = ?")
        params.append(market_type)
    if property_function:
        where_clauses.append("lok_funkcja = ?")
        params.append(property_function)
    if min_price_m2 is not None:
        where_clauses.append("price_m2 >= ?")
        params.append(float(min_price_m2))
    if max_price_m2 is not None:
        where_clauses.append("price_m2 <= ?")
        params.append(float(max_price_m2))
    if min_total_price is not None:
        where_clauses.append("tran_cena_brutto >= ?")
        params.append(float(min_total_price))
    if max_total_price is not None:
        where_clauses.append("tran_cena_brutto <= ?")
        params.append(float(max_total_price))
    if min_area_m2 is not None:
        where_clauses.append("lok_pow_uzyt >= ?")
        params.append(float(min_area_m2))
    if max_area_m2 is not None:
        where_clauses.append("lok_pow_uzyt <= ?")
        params.append(float(max_area_m2))
    if date_from:
        where_clauses.append("dok_data >= ?")
        params.append(str(date_from))
    if date_to:
        where_clauses.append("dok_data <= ?")
        params.append(str(date_to))

    where_sql = "WHERE " + " AND ".join(where_clauses)

    cur.execute(f'SELECT COUNT(*) FROM "{tbl}" {where_sql}', params)
    total_count = cur.fetchone()[0]

    cur.execute(f'SELECT * FROM "{tbl}" {where_sql} ORDER BY {db_col} {order_dir_clean} LIMIT ? OFFSET ?', params + [actual_limit, actual_offset])
    cur_cols = [c[0] for c in cur.description]
    rows = cur.fetchall()
    con.close()

    items = []
    for i, r in enumerate(rows):
        d = dict(zip(cur_cols, r))
        raw_geom = d.pop("geom", None) or d.pop("geometry", None)
        item_rank = actual_offset + i + 1

        lat, lon = None, None
        if raw_geom:
            try:
                wkb_data = _extract_gpkg_wkb(raw_geom)
                shp = shapely.wkb.loads(wkb_data)
                if shp.geom_type == "Point":
                    x, y = shp.x, shp.y
                    if x > 180 or y > 90:
                        lon, lat = transformer_2180_to_4326.transform(x, y)
                    else:
                        lon, lat = x, y
            except Exception:
                pass

        total_p = d.get("tran_cena_brutto")
        area = d.get("lok_pow_uzyt")
        rooms = d.get("lok_liczba_izb")

        items.append({
            "rank": item_rank,
            "gml_id": str(d.get("gml_id") or ""),
            "price_m2": float(d.get("price_m2", 0.0)),
            "total_price": float(total_p) if (total_p is not None and not (isinstance(total_p, float) and math.isnan(total_p))) else None,
            "area_m2": float(area) if (area is not None and not (isinstance(area, float) and math.isnan(area))) else None,
            "market_type": str(d.get("tran_rodzaj_rynku") or ""),
            "property_function": str(d.get("lok_funkcja") or ""),
            "floor": str(d.get("lok_nr_kond") or "") if d.get("lok_nr_kond") is not None else None,
            "rooms": int(rooms) if rooms is not None and str(rooms).isdigit() else None,
            "date": str(d.get("dok_data") or "")[:10] if d.get("dok_data") else None,
            "address": str(d.get("lok_adres") or "") if d.get("lok_adres") else None,
            "lat": lat,
            "lon": lon
        })

    return {
        "city": city,
        "total": total_count,
        "limit": actual_limit,
        "offset": actual_offset,
        "order_by": db_col,
        "order_dir": order_dir_clean.lower(),
        "items": items
    }


def get_market_transactions_nearby(
    city: str,
    lat: float,
    lon: float,
    radius_m: float = 500.0,
    limit: int = 20,
) -> Dict[str, Any]:
    gpkg_path = os.path.join(DATA_DIR, city, "02_spatial", "transactions.gpkg")
    if not os.path.exists(gpkg_path):
        raise FileNotFoundError(f"transactions.gpkg not found for city '{city}'")

    transformer_4326_to_2180 = pyproj.Transformer.from_crs("EPSG:4326", "EPSG:2180", always_xy=True)
    x0, y0 = transformer_4326_to_2180.transform(lon, lat)

    con = sqlite3.connect(f"file:{gpkg_path}?mode=ro", uri=True)
    cur = con.cursor()
    cur.execute("SELECT table_name FROM gpkg_contents WHERE data_type = 'features'")
    tbl = cur.fetchone()[0]

    cur.execute(f'SELECT * FROM "{tbl}" WHERE price_m2 IS NOT NULL AND price_m2 > 0')
    cur_cols = [c[0] for c in cur.description]
    rows = cur.fetchall()
    con.close()

    txs = []
    r2 = radius_m ** 2
    for r in rows:
        d = dict(zip(cur_cols, r))
        raw_geom = d.pop("geom", None) or d.pop("geometry", None)
        if not raw_geom:
            continue
        try:
            wkb_data = _extract_gpkg_wkb(raw_geom)
            shp = shapely.wkb.loads(wkb_data)
            if shp.geom_type == "Point":
                dist2 = (shp.x - x0)**2 + (shp.y - y0)**2
                if dist2 <= r2:
                    dist_m = math.sqrt(dist2)
                    pt_lon, pt_lat = transformer_2180_to_4326.transform(shp.x, shp.y)
                    total_p = d.get("tran_cena_brutto")
                    area = d.get("lok_pow_uzyt")
                    rooms = d.get("lok_liczba_izb")
                    txs.append({
                        "gml_id": str(d.get("gml_id") or ""),
                        "price_m2": float(d.get("price_m2", 0.0)),
                        "total_price": float(total_p) if (total_p is not None and not (isinstance(total_p, float) and math.isnan(total_p))) else None,
                        "area_m2": float(area) if (area is not None and not (isinstance(area, float) and math.isnan(area))) else None,
                        "market_type": str(d.get("tran_rodzaj_rynku") or ""),
                        "property_function": str(d.get("lok_funkcja") or ""),
                        "floor": str(d.get("lok_nr_kond") or "") if d.get("lok_nr_kond") is not None else None,
                        "rooms": int(rooms) if rooms is not None and str(rooms).isdigit() else None,
                        "date": str(d.get("dok_data") or "")[:10] if d.get("dok_data") else None,
                        "distance_m": round(dist_m, 1),
                        "lat": pt_lat,
                        "lon": pt_lon
                    })
        except Exception:
            continue

    txs.sort(key=lambda x: x["distance_m"])
    return {
        "city": city,
        "count": len(txs[:limit]),
        "radius_m": radius_m,
        "transactions": txs[:limit]
    }


def get_market_h3_analysis(city: str) -> Dict[str, Any]:
    h3_file = os.path.join(DATA_DIR, city, "04_results", "h3_grid.parquet")
    if not os.path.exists(h3_file):
        raise FileNotFoundError(f"h3_grid.parquet not found for city '{city}'")

    db = duckdb.connect(":memory:")
    df = db.execute(f"SELECT * FROM read_parquet('{h3_file}')").fetch_df()
    db.close()

    total_cells = len(df)
    rcn_cells = df[df['rcn_median_price_m2'].notna() & (df['rcn_median_price_m2'] > 0)]
    cells_with_rcn = len(rcn_cells)
    coverage_pct = (cells_with_rcn / total_cells * 100.0) if total_cells > 0 else 0.0

    prices = rcn_cells['rcn_median_price_m2']
    if not prices.empty:
        price_stats = {
            "mean": float(prices.mean()),
            "median": float(prices.median()),
            "std": float(prices.std()) if len(prices) > 1 else 0.0,
            "min": float(prices.min()),
            "max": float(prices.max()),
            "p10": float(prices.quantile(0.10)),
            "p25": float(prices.quantile(0.25)),
            "p75": float(prices.quantile(0.75)),
            "p90": float(prices.quantile(0.90)),
        }
    else:
        price_stats = {"mean": 0.0, "median": 0.0, "std": 0.0, "min": 0.0, "max": 0.0, "p10": 0.0, "p25": 0.0, "p75": 0.0, "p90": 0.0}

    bracket_defs = [
        ("< 5000 PLN", 0.0, 5000.0),
        ("5000 - 7500 PLN", 5000.0, 7500.0),
        ("7500 - 10000 PLN", 7500.0, 10000.0),
        ("10000 - 12500 PLN", 10000.0, 12500.0),
        ("12500 - 15000 PLN", 12500.0, 15000.0),
        ("> 15000 PLN", 15000.0, None)
    ]
    brackets = []
    for label, b_min, b_max in bracket_defs:
        if b_max is not None:
            c = int(((prices >= b_min) & (prices < b_max)).sum())
        else:
            c = int((prices >= b_min).sum())
        pct = (c / cells_with_rcn * 100.0) if cells_with_rcn > 0 else 0.0
        brackets.append({
            "label": label,
            "min_val": b_min,
            "max_val": b_max,
            "count": c,
            "percentage": round(pct, 2)
        })

    if cells_with_rcn > 2 and 'transport_score' in rcn_cells.columns:
        corr = float(rcn_cells['transport_score'].corr(rcn_cells['rcn_median_price_m2']))
        if math.isnan(corr):
            corr = 0.0
    else:
        corr = 0.0

    return {
        "city": city,
        "coverage_pct": round(coverage_pct, 2),
        "cells_with_rcn": cells_with_rcn,
        "total_cells": total_cells,
        "price_stats": price_stats,
        "price_brackets": brackets,
        "transport_correlation": round(corr, 4)
    }


def get_poi_magnets(
    city: str,
    limit: int = 10,
    tier: Optional[str] = None,
    category: Optional[str] = None,
    min_w: Optional[float] = None
) -> Dict[str, Any]:
    poi_file = os.path.join(DATA_DIR, city, "04_results", "poi_matrix.parquet")
    if not os.path.exists(poi_file):
        raise FileNotFoundError(f"poi_matrix.parquet not found for city '{city}'")

    db = duckdb.connect(":memory:")
    df = db.execute(f"SELECT * FROM read_parquet('{poi_file}')").fetch_df()
    db.close()

    if df.empty or 'name' not in df.columns or 'tier' not in df.columns or 'w' not in df.columns:
        return {"city": city, "total": 0, "magnets": []}

    invalid_names = {'bez_nazwy', 'Obiekt', 'N/A', 'None', '', 'brak', 'unnamed', 'null'}
    valid = df[df['name'].notna() & (~df['name'].isin(invalid_names))].copy()

    if tier:
        tiers = [t.strip() for t in tier.split(",") if t.strip()]
        valid = valid[valid['tier'].isin(tiers)]
    else:
        valid = valid[valid['tier'].str.startswith(('T0', 'T1', 'T2'))]

    if category and 'category' in valid.columns:
        valid = valid[valid['category'] == category]

    if min_w is not None:
        valid = valid[valid['w'] >= float(min_w)]

    if valid.empty:
        return {"city": city, "total": 0, "magnets": []}

    unique_top = valid.sort_values('w', ascending=False).drop_duplicates(subset=['name']).head(limit)
    magnets = []
    for i, (_, row) in enumerate(unique_top.iterrows()):
        magnets.append({
            "rank": i + 1,
            "name": str(row['name']),
            "category": str(row.get('category', 'Infrastruktura')),
            "tier": str(row.get('tier', 'T2')),
            "w": float(row.get('w', 0.0)),
            "lat": float(row.get('lat', 0.0)),
            "lon": float(row.get('lon', 0.0)),
            "sum_pull": float(row.get('sum_pull', 0.0))
        })

    return {
        "city": city,
        "total": len(magnets),
        "magnets": magnets
    }


def get_poi_categories(
    city: str,
    limit: int = 20,
    order_by: str = "final_value",
    order_dir: str = "desc"
) -> Dict[str, Any]:
    val_file = os.path.join(DATA_DIR, city, "03_config", "poi_valuation.json")
    if not os.path.exists(val_file):
        raise FileNotFoundError(f"poi_valuation.json not found for city '{city}'")

    with open(val_file, "r", encoding="utf-8") as f:
        data = json.load(f)

    sort_key = "final_value" if order_by == "final_value" else "count"
    rev = (order_dir.strip().lower() == "desc")

    sorted_items = sorted(data.items(), key=lambda x: x[1].get(sort_key, 0.0), reverse=rev)
    cats = []
    for cat, d in sorted_items[:limit]:
        cats.append({
            "category": cat,
            "tier": str(d.get("tier", "T4")),
            "count": int(d.get("count", 0)),
            "final_value": float(d.get("final_value", 0.0))
        })

    return {
        "city": city,
        "total": len(cats),
        "categories": cats
    }


def search_pois(
    city: str,
    query: Optional[str] = None,
    category: Optional[str] = None,
    tier: Optional[str] = None,
    min_w: Optional[float] = None,
    limit: int = 50,
    offset: int = 0
) -> Dict[str, Any]:
    """Searches and filters POIs in poi_matrix.parquet via DuckDB with high-performance predicate pushdown."""
    poi_file = os.path.join(DATA_DIR, city, "04_results", "poi_matrix.parquet")
    if not os.path.exists(poi_file):
        raise FileNotFoundError(f"poi_matrix.parquet not found for city '{city}'")

    limit = max(1, min(limit, 500))
    offset = max(0, offset)

    con = duckdb.connect(":memory:")
    where_clauses = ["1=1"]
    params = [str(poi_file)]

    if query and query.strip():
        q_clean = f"%{query.strip().lower()}%"
        where_clauses.append("(LOWER(COALESCE(name, '')) LIKE ? OR LOWER(category) LIKE ?)")
        params.append(q_clean)
        params.append(q_clean)

    if category and category.strip():
        where_clauses.append("LOWER(category) = ?")
        params.append(category.strip().lower())

    if tier and tier.strip():
        where_clauses.append("LOWER(tier) = ?")
        params.append(tier.strip().lower())

    if min_w is not None:
        where_clauses.append("w >= ?")
        params.append(float(min_w))

    where_sql = " AND ".join(where_clauses)

    count_sql = f"SELECT COUNT(*) FROM read_parquet(?) WHERE {where_sql}"
    total = con.execute(count_sql, params).fetchone()[0]

    select_params = params + [limit, offset]
    select_sql = f"""
    SELECT poi_id, name, category, tier, lat, lon, w, sum_pull
    FROM read_parquet(?)
    WHERE {where_sql}
    ORDER BY w DESC
    LIMIT ? OFFSET ?
    """
    rows = con.execute(select_sql, select_params).fetchall()
    con.close()

    items = [
        {
            "poi_id": int(r[0]),
            "name": str(r[1]) if r[1] is not None else None,
            "category": str(r[2]),
            "tier": str(r[3]),
            "lat": float(r[4]),
            "lon": float(r[5]),
            "w": float(r[6]),
            "sum_pull": float(r[7]),
        }
        for r in rows
    ]

    return {
        "city": city,
        "total": total,
        "limit": limit,
        "offset": offset,
        "items": items
    }


def get_city_kpi(city: str) -> Dict[str, Any]:
    city_dir = os.path.join(DATA_DIR, city)
    dna_path = os.path.join(city_dir, "04_results", "stop_dna.gpkg")
    stops_cnt, hubs_cnt = 0, 0
    if os.path.exists(dna_path):
        con = sqlite3.connect(f"file:{dna_path}?mode=ro", uri=True)
        cur = con.cursor()
        cur.execute("SELECT COUNT(*), COUNT(DISTINCT hub_id) FROM stop_dna")
        row = cur.fetchone()
        stops_cnt, hubs_cnt = row[0], row[1]
        con.close()

    pop_total = 0.0
    pop_path = os.path.join(city_dir, "02_spatial", "population_250m.gpkg")
    if os.path.exists(pop_path):
        con = sqlite3.connect(f"file:{pop_path}?mode=ro", uri=True)
        cur = con.cursor()
        cur.execute("SELECT SUM(TOT) FROM population_250m")
        p_row = cur.fetchone()
        pop_total = float(p_row[0] or 0.0)
        con.close()

    avg_trn, deserts_cnt, rcn_med = 0.0, 0, None
    h3_file = os.path.join(city_dir, "04_results", "h3_grid.parquet")
    if os.path.exists(h3_file):
        db = duckdb.connect(":memory:")
        r = db.execute(f"""
            SELECT 
                AVG(transport_score), 
                SUM(CASE WHEN is_transit_desert THEN 1 ELSE 0 END),
                MEDIAN(rcn_median_price_m2)
            FROM read_parquet('{h3_file}')
        """).fetchone()
        db.close()
        avg_trn = float(r[0] or 0.0)
        deserts_cnt = int(r[1] or 0)
        rcn_med = float(r[2]) if r[2] is not None and not math.isnan(r[2]) else None

    axe_cnt = 0
    try:
        axe = get_axe_list(city, threshold=0.70)
        axe_cnt = axe.get("total_redundant", 0)
    except Exception:
        pass

    return {
        "city": city,
        "total_stops": stops_cnt,
        "total_hubs": hubs_cnt,
        "consolidation_ratio": round(stops_cnt / hubs_cnt, 2) if hubs_cnt > 0 else 1.0,
        "population_gus": pop_total,
        "avg_transport_score": round(avg_trn, 2),
        "transit_deserts_count": deserts_cnt,
        "rcn_median_price_m2": rcn_med,
        "tcrp_redundant_r70": axe_cnt
    }


def get_city_audit_summary(city: str, include: str = "all") -> Dict[str, Any]:
    city_dir = os.path.join(DATA_DIR, city)
    if not os.path.exists(city_dir):
        raise FileNotFoundError(f"City directory not found for '{city}'")

    inc_tokens = {s.strip().lower() for s in include.split(",") if s.strip()}
    inc_all = ("all" in inc_tokens)

    res = {
        "city": city,
        "timestamp": "2026-09-08T00:00:00Z",
        "included_sections": list(inc_tokens if not inc_all else ["all"]),
        "summary": None,
        "zscore": None,
        "grades": None,
        "h3": None,
        "rcn": None,
        "tcrp": None,
        "poi": None,
        "samples": None
    }

    if inc_all or "summary" in inc_tokens:
        dna_path = os.path.join(city_dir, "04_results", "stop_dna.gpkg")
        stops_cnt = 0
        hubs_cnt = 0
        if os.path.exists(dna_path):
            con = sqlite3.connect(f"file:{dna_path}?mode=ro", uri=True)
            cur = con.cursor()
            cur.execute("SELECT COUNT(*), COUNT(DISTINCT hub_id) FROM stop_dna")
            row = cur.fetchone()
            stops_cnt = row[0]
            hubs_cnt = row[1]
            con.close()

        pop_total = 0.0
        pop_path = os.path.join(city_dir, "02_spatial", "population_250m.gpkg")
        if os.path.exists(pop_path):
            con = sqlite3.connect(f"file:{pop_path}?mode=ro", uri=True)
            cur = con.cursor()
            cur.execute("SELECT SUM(TOT) FROM population_250m")
            p_row = cur.fetchone()
            pop_total = float(p_row[0] or 0.0)
            con.close()

        base_pop = CITY_BASELINES.get(city.lower(), 190000)
        delta_pct = ((pop_total - base_pop) / float(base_pop) * 100.0) if base_pop > 0 else 0.0

        rcn_cnt = 0
        rcn_path = os.path.join(city_dir, "02_spatial", "transactions.gpkg")
        if os.path.exists(rcn_path):
            con = sqlite3.connect(f"file:{rcn_path}?mode=ro", uri=True)
            cur = con.cursor()
            cur.execute("SELECT COUNT(*) FROM transactions")
            rcn_cnt = cur.fetchone()[0]
            con.close()

        res["summary"] = {
            "city": city,
            "stops_count": stops_cnt,
            "hubs_count": hubs_cnt,
            "consolidation_ratio": round(stops_cnt / hubs_cnt, 2) if hubs_cnt > 0 else 1.0,
            "population_total": pop_total,
            "population_baseline": base_pop,
            "population_delta_pct": round(delta_pct, 1),
            "is_metro_area": (delta_pct > 25.0),
            "rcn_transactions_count": rcn_cnt,
            "critical_nulls_infs": 0
        }

    if inc_all or "zscore" in inc_tokens or "grades" in inc_tokens:
        dna_path = os.path.join(city_dir, "04_results", "stop_dna.gpkg")
        if os.path.exists(dna_path):
            con = sqlite3.connect(f"file:{dna_path}?mode=ro", uri=True)
            cur = con.cursor()
            cur.execute("SELECT stop_local_score_raw, stop_grade, hub_local_score_raw, hub_grade FROM stop_dna")
            dna_rows = cur.fetchall()
            con.close()

            m_scores = [r[0] for r in dna_rows if r[0] is not None]
            m_grades = {}
            for r in dna_rows:
                g = r[1] or "F"
                m_grades[g] = m_grades.get(g, 0) + 1

            m_mean = float(np.mean(m_scores)) if m_scores else 0.0
            m_std = float(np.std(m_scores)) if m_scores else 1.0
            m_valid = bool(abs(m_mean) < 0.50 and abs(m_std - 1.0) < 0.50)

            h_scores = [r[2] for r in dna_rows if r[2] is not None]
            h_grades = {}
            for r in dna_rows:
                g = r[3] or "F"
                h_grades[g] = h_grades.get(g, 0) + 1
            h_mean = float(np.mean(h_scores)) if h_scores else 0.0
            h_std = float(np.std(h_scores)) if h_scores else 1.0
            h_valid = bool(abs(h_mean) < 0.50 and abs(h_std - 1.0) < 0.50)

            if inc_all or "zscore" in inc_tokens:
                res["zscore"] = {
                    "micro": {"mean": round(m_mean, 4), "std": round(m_std, 4), "is_valid": m_valid},
                    "macro": {"mean": round(h_mean, 4), "std": round(h_std, 4), "is_valid": h_valid}
                }

            if inc_all or "grades" in inc_tokens:
                res["grades"] = {
                    "micro": m_grades,
                    "macro": h_grades
                }

    if inc_all or "h3" in inc_tokens:
        h3_file = os.path.join(city_dir, "04_results", "h3_grid.parquet")
        if os.path.exists(h3_file):
            db = duckdb.connect(":memory:")
            h3_df = db.execute(f"SELECT * FROM read_parquet('{h3_file}')").fetch_df()
            db.close()

            top_des = h3_df.sort_values("transit_desert_index", ascending=False).head(5)
            top_cor = h3_df.sort_values("transport_score", ascending=False).head(5)
            rcn_cells = h3_df[h3_df['rcn_median_price_m2'].notna() & (h3_df['rcn_median_price_m2'] > 0)]
            top_ric = rcn_cells.sort_values("rcn_median_price_m2", ascending=False).head(5) if not rcn_cells.empty else pd.DataFrame()

            res["h3"] = {
                "total_cells": len(h3_df),
                "deserts_count": int((h3_df["is_transit_desert"] == True).sum()) if "is_transit_desert" in h3_df.columns else 0,
                "avg_transport_score": round(float(h3_df["transport_score"].mean()), 2),
                "max_transport_score": round(float(h3_df["transport_score"].max()), 2),
                "avg_departures_h": round(float(h3_df["total_departures_h"].mean()), 2),
                "top_deserts": top_des[["h3_index", "lat", "lon", "pop_total", "total_departures_h", "transit_desert_index"]].to_dict(orient="records"),
                "top_cores": top_cor[["h3_index", "lat", "lon", "transport_score", "total_departures_h", "stop_count"]].to_dict(orient="records"),
                "top_rich": top_ric[["h3_index", "lat", "lon", "rcn_median_price_m2", "rcn_tx_count"]].to_dict(orient="records") if not top_ric.empty else []
            }

    if inc_all or "rcn" in inc_tokens:
        res["rcn"] = get_market_h3_analysis(city)

    if inc_all or "tcrp" in inc_tokens:
        axe_50 = get_axe_list(city, threshold=0.50)
        axe_70 = get_axe_list(city, threshold=0.70)
        axe_90 = get_axe_list(city, threshold=0.90)
        res["tcrp"] = {
            "redundant_stops_r50": axe_50.get("total_redundant", 0),
            "redundant_stops_r70": axe_70.get("total_redundant", 0),
            "redundant_stops_r90": axe_90.get("total_redundant", 0),
            "top_redundant_pairs": axe_70.get("stops", [])[:5]
        }

    if inc_all or "poi" in inc_tokens:
        cats = get_poi_categories(city, limit=20).get("categories", [])
        mags = get_poi_magnets(city, limit=10).get("magnets", [])
        res["poi"] = {
            "categories": cats,
            "magnets": mags
        }

    if inc_all or "samples" in inc_tokens:
        top_stops = get_stops_ranking(city, order_by="stop_local_score_raw", order_dir="desc", limit=3).get("items", [])
        bot_stops = get_stops_ranking(city, order_by="stop_local_score_raw", order_dir="asc", limit=3).get("items", [])
        top_hubs = get_hubs_ranking(city, order_by="hub_local_score_raw", order_dir="desc", limit=3).get("items", [])
        bot_hubs = get_hubs_ranking(city, order_by="hub_local_score_raw", order_dir="asc", limit=3).get("items", [])
        res["samples"] = {
            "top_stops_a_plus": top_stops,
            "bottom_stops_f": bot_stops,
            "top_hubs_a_plus": top_hubs,
            "bottom_hubs_f": bot_hubs
        }

    return res


def get_national_ranking(
    scope: str = "stops",
    order_by: Optional[str] = None,
    order_dir: str = "desc",
    limit: int = 20,
    offset: int = 0,
    rank: Optional[int] = None,
    grade: Optional[str] = None,
    city: Optional[str] = None
) -> Dict[str, Any]:
    order_dir_clean = order_dir.strip().upper()
    if order_dir_clean not in ["ASC", "DESC"]:
        raise ValueError("order_dir must be 'asc' or 'desc'")

    if rank is not None:
        actual_rank = max(1, rank)
        actual_offset = actual_rank - 1
        actual_limit = 1
    else:
        actual_offset = max(0, offset)
        actual_limit = max(1, min(limit, 1000))

    master_path = os.path.join(os.path.dirname(DATA_DIR), "database", "master_stop_dna_poland.gpkg")

    if scope == "stops":
        if not os.path.exists(master_path):
            raise FileNotFoundError("master_stop_dna_poland.gpkg not found")
        db_col = STOP_METRIC_MAP.get((order_by or "national_score").lower(), "national_score")
        con = sqlite3.connect(f"file:{master_path}?mode=ro", uri=True)
        cur = con.cursor()
        cur.execute("SELECT table_name FROM gpkg_contents WHERE data_type = 'features'")
        tbl = cur.fetchone()[0]

        where_clauses = []
        params = []
        if city:
            where_clauses.append("city_context = ?")
            params.append(city)
        if grade:
            grades = _parse_grades(grade)
            if grades:
                placeholders = ",".join(["?"] * len(grades))
                where_clauses.append(f"stop_grade IN ({placeholders})")
                params.extend(grades)


        where_sql = ("WHERE " + " AND ".join(where_clauses)) if where_clauses else ""
        cur.execute(f'SELECT COUNT(*) FROM "{tbl}" {where_sql}', params)
        total_count = cur.fetchone()[0]

        cur.execute(f'SELECT * FROM "{tbl}" {where_sql} ORDER BY {db_col} {order_dir_clean} LIMIT ? OFFSET ?', params + [actual_limit, actual_offset])
        cur_cols = [c[0] for c in cur.description]
        rows = cur.fetchall()
        con.close()

        items = []
        for i, r in enumerate(rows):
            d = dict(zip(cur_cols, r))
            d.pop("geom", None)
            d.pop("geometry", None)
            item_rank = actual_offset + i + 1
            items.append({
                "rank": item_rank,
                "scope": "stops",
                "id": str(d.get("stop_id", "")),
                "name": str(d.get("stop_name", "")),
                "city": str(d.get("city_context", "")),
                "score": float(d.get("national_score") or 0.0),
                "percentile": float(d.get("national_percentile") or 0.0),
                "grade": str(d.get("stop_grade") or "F"),
                "national_score": float(d.get("national_score") or 0.0),
                "stop_departures_h": float(d.get("stop_departures_h") or 0.0),
                "stop_infra_score": float(d.get("stop_infra_score") or 0.0),
                "stop_pop_val": float(d.get("stop_pop_val") or 0.0),
                "stop_market_val": float(d.get("stop_market_val") or 0.0),
            })

        return {
            "scope": "stops",
            "total": total_count,
            "limit": actual_limit,
            "offset": actual_offset,
            "order_by": db_col,
            "order_dir": order_dir_clean.lower(),
            "items": items
        }

    elif scope == "hubs":
        if not os.path.exists(master_path):
            raise FileNotFoundError("master_stop_dna_poland.gpkg not found")
        db_col = HUB_METRIC_MAP.get((order_by or "hub_departures_h").lower(), "hub_departures_h")
        con = sqlite3.connect(f"file:{master_path}?mode=ro", uri=True)
        cur = con.cursor()
        cur.execute("SELECT table_name FROM gpkg_contents WHERE data_type = 'features'")
        tbl = cur.fetchone()[0]

        cur.execute(f'''
            SELECT city_context, hub_id, hub_name, hub_stops_count, hub_departures_h, hub_routes_count,
                   hub_infra_score, hub_pop_val, hub_market_val, hub_grade, national_score, national_percentile
            FROM "{tbl}"
            GROUP BY city_context, hub_id
            ORDER BY {db_col} {order_dir_clean}
        ''')
        cur_cols = [c[0] for c in cur.description]
        all_rows = cur.fetchall()
        con.close()

        total_count = len(all_rows)
        slice_rows = all_rows[actual_offset : actual_offset + actual_limit]
        items = []
        for i, r in enumerate(slice_rows):
            d = dict(zip(cur_cols, r))
            items.append({
                "rank": actual_offset + i + 1,
                "scope": "hubs",
                "id": str(d.get("hub_id", "")),
                "name": str(d.get("hub_name") or f"Hub {d.get('hub_id')}"),
                "city": str(d.get("city_context", "")),
                "score": float(d.get("hub_departures_h") or 0.0),
                "percentile": float(d.get("national_percentile") or 0.0),
                "grade": str(d.get("hub_grade") or "F"),
                "hub_stops_count": int(d.get("hub_stops_count") or 1),
                "hub_departures_h": float(d.get("hub_departures_h") or 0.0),
                "hub_infra_score": float(d.get("hub_infra_score") or 0.0),
            })

        return {
            "scope": "hubs",
            "total": total_count,
            "limit": actual_limit,
            "offset": actual_offset,
            "order_by": db_col,
            "order_dir": order_dir_clean.lower(),
            "items": items
        }

    elif scope == "hexagons":
        db = duckdb.connect(":memory:")
        pattern = os.path.join(DATA_DIR, "*", "04_results", "h3_grid.parquet")
        db_col = HEX_METRIC_MAP.get((order_by or "transit_desert_index").lower(), "transit_desert_index")
        total_count = db.execute(f"SELECT COUNT(*) FROM read_parquet('{pattern}')").fetchone()[0]
        q = f"""
            SELECT h3_index, city, lat, lon, transit_desert_index, transport_score, pop_total, total_departures_h, rcn_median_price_m2
            FROM read_parquet('{pattern}')
            ORDER BY {db_col} {order_dir_clean}
            LIMIT {actual_limit} OFFSET {actual_offset}
        """
        rows = db.execute(q).fetch_df().to_dict(orient="records")
        db.close()

        items = []
        for i, r in enumerate(rows):
            items.append({
                "rank": actual_offset + i + 1,
                "scope": "hexagons",
                "id": str(r["h3_index"]),
                "name": f"H3 Res 8 ({r['city']})",
                "city": str(r["city"]),
                "score": float(r.get(db_col) or 0.0),
                "transit_desert_index": float(r.get("transit_desert_index") or 0.0),
                "transport_score": float(r.get("transport_score") or 0.0),
                "pop_total": float(r.get("pop_total") or 0.0),
                "total_departures_h": float(r.get("total_departures_h") or 0.0),
                "rcn_median_price_m2": float(r["rcn_median_price_m2"]) if (r.get("rcn_median_price_m2") is not None and not (isinstance(r["rcn_median_price_m2"], float) and math.isnan(r["rcn_median_price_m2"]))) else None
            })

        return {
            "scope": "hexagons",
            "total": total_count,
            "limit": actual_limit,
            "offset": actual_offset,
            "order_by": db_col,
            "order_dir": order_dir_clean.lower(),
            "items": items
        }

    elif scope == "cities":
        cities = get_available_cities()
        city_kpis = []
        for c in cities:
            kpi = get_city_kpi(c)
            city_kpis.append(kpi)

        sort_key = order_by if (order_by and order_by in ["total_stops", "total_hubs", "population_gus", "avg_transport_score", "transit_deserts_count"]) else "total_stops"
        rev = (order_dir_clean == "DESC")
        city_kpis.sort(key=lambda x: x.get(sort_key, 0.0), reverse=rev)

        items = []
        for i, k in enumerate(city_kpis[actual_offset : actual_offset + actual_limit]):
            items.append({
                "rank": actual_offset + i + 1,
                "scope": "cities",
                "id": k["city"],
                "name": k["city"].capitalize(),
                "city": k["city"],
                "score": float(k.get(sort_key, 0.0)),
                **k
            })

        return {
            "scope": "cities",
            "total": len(city_kpis),
            "limit": actual_limit,
            "offset": actual_offset,
            "order_by": sort_key,
            "order_dir": order_dir_clean.lower(),
            "items": items
        }
    else:
        raise ValueError(f"Unknown national ranking scope '{scope}'. Allowed: stops, hubs, hexagons, cities")


def get_metric_distribution(city: str, metric: str) -> Dict[str, Any]:
    metric_clean = metric.strip().lower()
    vals = []
    is_national = (city.strip().lower() in ["all", "national", "_national", "polska", "poland"])

    if is_national:
        if metric_clean in STOP_METRIC_MAP:
            col = STOP_METRIC_MAP[metric_clean]
            master_path = os.path.join(os.path.dirname(DATA_DIR), "database", "master_stop_dna_poland.gpkg")
            if os.path.exists(master_path):
                con = sqlite3.connect(f"file:{master_path}?mode=ro", uri=True)
                cur = con.cursor()
                cur.execute("SELECT table_name FROM gpkg_contents WHERE data_type = 'features'")
                tbl = cur.fetchone()[0]
                cur.execute(f'SELECT {col} FROM "{tbl}" WHERE {col} IS NOT NULL')
                vals = [float(r[0]) for r in cur.fetchall() if r[0] is not None and not math.isnan(r[0])]
                con.close()
        elif metric_clean in HEX_METRIC_MAP:
            col = HEX_METRIC_MAP[metric_clean]
            pattern = os.path.join(DATA_DIR, "*", "04_results", "h3_grid.parquet")
            db = duckdb.connect(":memory:")
            res = db.execute(f"SELECT {col} FROM read_parquet('{pattern}') WHERE {col} IS NOT NULL").fetchall()
            db.close()
            vals = [float(r[0]) for r in res if r[0] is not None and not math.isnan(r[0])]
        else:
            raise ValueError(f"Unknown metric '{metric}' for distribution calculation")
    else:
        city_dir = os.path.join(DATA_DIR, city)
        if metric_clean in STOP_METRIC_MAP:
            col = STOP_METRIC_MAP[metric_clean]
            dna_path = os.path.join(city_dir, "04_results", "stop_dna.gpkg")
            if os.path.exists(dna_path):
                con = sqlite3.connect(f"file:{dna_path}?mode=ro", uri=True)
                cur = con.cursor()
                cur.execute(f'SELECT {col} FROM stop_dna WHERE {col} IS NOT NULL')
                vals = [float(r[0]) for r in cur.fetchall() if r[0] is not None and not math.isnan(r[0])]
                con.close()
        elif metric_clean in HEX_METRIC_MAP:
            col = HEX_METRIC_MAP[metric_clean]
            h3_file = os.path.join(city_dir, "04_results", "h3_grid.parquet")
            if os.path.exists(h3_file):
                db = duckdb.connect(":memory:")
                res = db.execute(f"SELECT {col} FROM read_parquet('{h3_file}') WHERE {col} IS NOT NULL").fetchall()
                db.close()
                vals = [float(r[0]) for r in res if r[0] is not None and not math.isnan(r[0])]
        else:
            raise ValueError(f"Unknown metric '{metric}' for distribution calculation")

    if not vals:
        return {
            "city": city,
            "metric": metric,
            "count": 0,
            "min": 0.0, "p10": 0.0, "p25": 0.0, "median": 0.0, "p75": 0.0, "p90": 0.0, "max": 0.0, "mean": 0.0, "std": 0.0,
            "histogram_bins": []
        }

    arr = np.array(vals)
    v_min = float(np.min(arr))
    v_max = float(np.max(arr))
    v_mean = float(np.mean(arr))
    v_std = float(np.std(arr))

    counts, bin_edges = np.histogram(arr, bins=10)
    bins = []
    for i in range(len(counts)):
        bins.append({
            "bin_start": round(float(bin_edges[i]), 4),
            "bin_end": round(float(bin_edges[i+1]), 4),
            "count": int(counts[i])
        })

    return {
        "city": city,
        "metric": metric,
        "count": len(arr),
        "min": round(v_min, 4),
        "p10": round(float(np.percentile(arr, 10)), 4),
        "p25": round(float(np.percentile(arr, 25)), 4),
        "median": round(float(np.median(arr)), 4),
        "p75": round(float(np.percentile(arr, 75)), 4),
        "p90": round(float(np.percentile(arr, 90)), 4),
        "max": round(v_max, 4),
        "mean": round(v_mean, 4),
        "std": round(v_std, 4),
        "histogram_bins": bins
    }


def get_city_comparison(city_a: str, city_b: str) -> Dict[str, Any]:
    kpi_a = get_city_kpi(city_a)
    kpi_b = get_city_kpi(city_b)
    return {
        "city_a": kpi_a,
        "city_b": kpi_b
    }



