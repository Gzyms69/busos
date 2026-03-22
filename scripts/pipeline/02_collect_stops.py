import pandas as pd
import geopandas as gpd
from pathlib import Path
import os
import argparse
import re
import unicodedata
import json
import sys
import warnings
from shapely.ops import unary_union
from shapely.geometry import box, Point

warnings.filterwarnings("ignore", category=FutureWarning)
warnings.filterwarnings("ignore", message=".*Geometry is in a geographic CRS.*")

def get_data_dir():
    return Path(os.environ.get("PIPELINE_DATA_DIR", "data"))

# POPRAWKA P2-7: Przeniesione z poziomu modulu do wnetrza funkcji
RAIL_KEYWORDS = ['pkp', 'kolej', 'rail']

# STRATEGIC HUBS (Modlin, Balice, Pyrzowice itp.) - muszą być w strefie!
STRATEGIC_NODES = [
    {"name": "Modlin Airport", "lon": 20.65, "lat": 52.45, "city": "warszawa"},
    {"name": "Balice Airport", "lon": 19.78, "lat": 50.07, "city": "krakow"},
    {"name": "Pyrzowice Airport", "lon": 19.08, "lat": 50.47, "city": "gzm"},
    {"name": "Jasionka Airport", "lon": 22.01, "lat": 50.11, "city": "rzeszow"}
]

def normalize_name(name):
    n = str(name).lower()
    n = ''.join(c for c in unicodedata.normalize('NFD', n) if unicodedata.category(c) != 'Mn')
    n = re.sub(r'glown[ya]', '', n)
    n = re.sub(r'osobow[ya]', '', n)
    return re.sub(r'[^a-z0-9]', '', n).strip()

def load_national_rail():
    NATIONAL_RAIL_ROOT = get_data_dir() / "poland" / "gtfs_national"
    rail_gdfs = []
    if not NATIONAL_RAIL_ROOT.exists():
        return pd.DataFrame()
        
    for source_dir in NATIONAL_RAIL_ROOT.iterdir():
        if not source_dir.is_dir(): continue
        stops_file = source_dir / "stops.txt"
        if not stops_file.exists(): continue
        
        try:
            df = pd.read_csv(stops_file)
            if 'stop_lat' not in df.columns or 'stop_lon' not in df.columns: continue
            gdf = gpd.GeoDataFrame(
                df[['stop_id', 'stop_name', 'stop_lat', 'stop_lon']],
                geometry=gpd.points_from_xy(df.stop_lon, df.stop_lat),
                crs="EPSG:4326"
            ).to_crs("EPSG:2180")
            gdf['source'] = source_dir.name
            rail_gdfs.append(gdf)
        except Exception as e:
            print(f"  [WARN] Failed to load national rail {source_dir.name}: {e}", file=sys.stderr)
            
    if not rail_gdfs: return pd.DataFrame()
    all_rail = pd.concat(rail_gdfs, ignore_index=True)
    all_rail['norm_name'] = all_rail['stop_name'].apply(normalize_name)
    all_rail['lat_grid'] = all_rail['stop_lat'].round(2)
    all_rail['lon_grid'] = all_rail['stop_lon'].round(2)
    return all_rail.drop_duplicates(subset=['norm_name', 'lat_grid', 'lon_grid'])

def process_city(city_name, global_rail_gdf):
    CITIES_ROOT = get_data_dir() / "cities"
    city_dir = CITIES_ROOT / city_name
    gtfs_root = city_dir / "gtfs"
    
    if not gtfs_root.exists():
        print(f"__PIPELINE_METRICS__={json.dumps({'city': city_name, 'status': 'no_gtfs'})}")
        return False
        
    urban_stops = []
    local_rail_stops = []
    
    for source_dir in gtfs_root.iterdir():
        if not source_dir.is_dir(): continue
        stops_file = source_dir / "stops.txt"
        if not stops_file.exists(): continue
        try:
            df = pd.read_csv(stops_file)
            gdf = gpd.GeoDataFrame(
                df[['stop_id', 'stop_name', 'stop_lat', 'stop_lon']],
                geometry=gpd.points_from_xy(df.stop_lon, df.stop_lat),
                crs="EPSG:4326"
            ).to_crs("EPSG:2180")
            gdf['source'] = source_dir.name
            if any(k in source_dir.name.lower() for k in RAIL_KEYWORDS):
                local_rail_stops.append(gdf)
            else:
                urban_stops.append(gdf)
        except Exception as e:
            print(f"  [ERR] Nie udalo sie wczytac GTFS {source_dir.name}: {e}", file=sys.stderr)

    if not urban_stops:
        print(f"__PIPELINE_METRICS__={json.dumps({'city': city_name, 'status': 'no_urban'})}")
        return False

    urban_gdf = pd.concat(urban_stops, ignore_index=True)
    
    # KRYTYCZNA POPRAWKA v7.8: Filtr 150km od centrum medialnego (ochrona przed 0,0 i teleportami)
    median_x, median_y = urban_gdf.geometry.x.median(), urban_gdf.geometry.y.median()
    urban_gdf['dist'] = ((urban_gdf.geometry.x - median_x)**2 + (urban_gdf.geometry.y - median_y)**2)**0.5
    urban_gdf = urban_gdf[urban_gdf['dist'] < 150000].copy()

    # Ochrona Strategic Hubs (Modlin itp.)
    strategic_points = []
    for node in STRATEGIC_NODES:
        if node['city'] == city_name:
            p = Point(node['lon'], node['lat'])
            gdf_p = gpd.GeoDataFrame(geometry=[p], crs="EPSG:4326").to_crs("EPSG:2180")
            gdf_p['stop_id'] = 'STRATEGIC'
            gdf_p['stop_name'] = node['name']
            gdf_p['source'] = 'STRATEGIC_HUB'
            strategic_points.append(gdf_p)

    # Filtr PKP (3km od miejskich)
    urban_footprint = urban_gdf.geometry.buffer(3000, resolution=1).union_all()
    all_rail_sources = list(local_rail_stops) + [global_rail_gdf]
    
    filtered_rail = []
    if all_rail_sources:
        all_rail_gdf = pd.concat(all_rail_sources, ignore_index=True)
        spatial_valid = all_rail_gdf[all_rail_gdf.geometry.intersects(urban_footprint)]
        norm_city = normalize_name(city_name)
        name_valid = all_rail_gdf[all_rail_gdf['norm_name'].str.contains(norm_city, na=False)]
        valid_rail = pd.concat([spatial_valid, name_valid]).drop_duplicates(subset=['stop_id', 'source'])
        if not valid_rail.empty: filtered_rail.append(valid_rail)

    final_city_stops = pd.concat([urban_gdf] + filtered_rail + strategic_points, ignore_index=True)
    final_city_stops['city'] = city_name
    
    # POPRAWKA: Bezwzględnie nadajemy znormalizowaną nazwę (norm_name) każdemu przystankowi
    # aby usunąć diakrytyki, znaki specjalne, przedrostki itp., co warunkuje mądre grupowanie w Step 15.
    final_city_stops['norm_name'] = final_city_stops['stop_name'].apply(normalize_name)
    
    # POPRAWKA P0-1: Filtr MAD post-merge na FINALNYM zbiorze
    # Chroni przed stacjami PKP z bledna lokalizacja ktore ominely pre-filtr
    final_median_x = final_city_stops.geometry.x.median()
    final_median_y = final_city_stops.geometry.y.median()
    final_city_stops['final_dist'] = (
        (final_city_stops.geometry.x - final_median_x)**2 +
        (final_city_stops.geometry.y - final_median_y)**2
    )**0.5
    
    # MAD (Median Absolute Deviation) — poprawna implementacja
    # MAD = median(|X_i - median(X)|), NIE median(X)
    median_dist = final_city_stops['final_dist'].median()
    deviations = (final_city_stops['final_dist'] - median_dist).abs()
    mad = deviations.median()
    if mad > 0:
        cutoff = median_dist + mad * 6  # 6 sigma od mediany
    else:
        cutoff = 150000  # Fallback na 150km
    cutoff = min(cutoff, 150000)  # Hard cap 150km
    
    pre_filter_count = len(final_city_stops)
    final_city_stops = final_city_stops[final_city_stops['final_dist'] <= cutoff].copy()
    post_filter_count = len(final_city_stops)
    if pre_filter_count != post_filter_count:
        print(f"  [OUTLIER] {city_name}: Usunieto {pre_filter_count - post_filter_count} outlierow (cutoff={cutoff/1000:.1f}km)", file=sys.stderr)
    
    final_city_stops = final_city_stops.drop(columns=['final_dist', 'dist'], errors='ignore')
    
    # Generowanie strefy (Box Trick + Simplify 10m - Twoja mądra metoda)
    buffer_zone = final_city_stops.geometry.buffer(1500, resolution=1).union_all()
    simplified_zone = buffer_zone.simplify(10)
    if not simplified_zone.is_valid: simplified_zone = simplified_zone.buffer(0)
    transport_zone = gpd.GeoDataFrame(geometry=[simplified_zone], crs="EPSG:2180")
    
    spatial_dir = city_dir / "02_spatial"
    spatial_dir.mkdir(parents=True, exist_ok=True)
    transport_zone.to_crs("EPSG:4326").to_file(city_dir / "transport_zone.gpkg", driver="GPKG")
    final_city_stops.to_crs("EPSG:4326").to_file(spatial_dir / "stops.gpkg", driver="GPKG")
    
    area_km2 = round(transport_zone.area.sum() / 1_000_000, 1)
    
    # SANITY CHECK P0-1: Strefa > 5000 km2 to oznaka wycieku outlierow
    if area_km2 > 5000:
        print(f"  [!!!] {city_name}: Strefa transportowa = {area_km2} km2 - PODEJRZANIE DUZA. Sprawdz outlier detection.", file=sys.stderr)
    
    metrics = {"city": city_name, "urban": len(urban_gdf), "rail": len(filtered_rail[0]) if filtered_rail else 0, "strategic": len(strategic_points), "km2": area_km2}
    print(f"__PIPELINE_METRICS__={json.dumps(metrics)}")
    return True

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--city", help="Miasto")
    parser.add_argument("--force", action="store_true", help="Ignorowane, dla kompatybilności")
    args = parser.parse_args()
    global_rail_gdf = load_national_rail()
    CITIES_ROOT = get_data_dir() / "cities"
    if args.city: process_city(args.city, global_rail_gdf)
    else:
        for d in sorted(CITIES_ROOT.iterdir()):
            if d.is_dir() and d.name != 'rail': process_city(d.name, global_rail_gdf)

if __name__ == "__main__":
    main()
