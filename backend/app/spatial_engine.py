import os
import math
import json
import sqlite3
import duckdb
import pyproj
import shapely.wkb
import shapely.geometry
import numpy as np
import pandas as pd
from scipy.spatial import cKDTree
from typing import Dict, Any, List, Optional

# Transformer for Polish Cadastral/Demographic metric CRS (EPSG:2180) to WGS84 (EPSG:4326)
transformer_2180_to_4326 = pyproj.Transformer.from_crs("EPSG:2180", "EPSG:4326", always_xy=True)

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


