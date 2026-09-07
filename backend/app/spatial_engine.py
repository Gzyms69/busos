import os
import math
import sqlite3
import duckdb
import pyproj
import shapely.wkb
import shapely.geometry
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


def get_hubs(city: str) -> Dict[str, Any]:
    """Reads stop_dna.gpkg and returns GeoJSON FeatureCollection with Stop DNA properties."""
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
        
        # Strip internal binary blobs and redundant geometry keys
        for k in ["geom", "geometry"]:
            d.pop(k, None)
            
        # Ensure BigInt values are converted for standard JSON serialization
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

