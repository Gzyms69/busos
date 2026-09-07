import geopandas as gpd
import pandas as pd
import numpy as np
import os
import json
import math
from pathlib import Path
import argparse
import sys
import warnings
import h3
import importlib
import importlib.util
from sklearn.cluster import AgglomerativeClustering

warnings.filterwarnings("ignore", category=FutureWarning)
warnings.filterwarnings("ignore", message=".*Geometry is in a geographic CRS.*")

def get_data_dir():
    return Path(os.environ.get("PIPELINE_DATA_DIR", "data"))

# --- KONFIGURACJA DNA v_Final ---
H3_RESOLUTION = 9       
CATCHMENT_RADIUS = 500  
K_DECAY = 0.005         

DOMAIN_MAPPING = {
    'hospital': 'HEALTH', 'clinic': 'HEALTH', 'doctors': 'HEALTH', 'pharmacy': 'HEALTH',
    'hospital_clinical': 'HEALTH', 'health_clinic': 'HEALTH',
    'university': 'EDUCATION', 'college': 'EDUCATION', 'school': 'EDUCATION', 'kindergarten': 'EDUCATION',
    'university_campus': 'EDUCATION', 'education_high_school': 'EDUCATION', 'education_preschool': 'EDUCATION', 'student_dormitory': 'EDUCATION',
    'mall': 'COMMERCE', 'supermarket': 'COMMERCE', 'convenience': 'COMMERCE',
    'shopping_mall': 'COMMERCE', 'convenience_store': 'COMMERCE', 'gastronomy': 'COMMERCE',
    'restaurant': 'COMMERCE', 'cafe': 'COMMERCE', 'fast_food': 'COMMERCE', 'bar': 'COMMERCE',
    'personal_services': 'COMMERCE', 'marketplace': 'COMMERCE', 'specialized_retail': 'COMMERCE', 'wholesale': 'COMMERCE',
    'stadium': 'LEISURE', 'park': 'LEISURE', 'pitch': 'LEISURE', 'sports_centre': 'LEISURE',
    'national_stadium': 'LEISURE', 'exhibition_centre': 'LEISURE', 'park_recreation': 'LEISURE', 'culture_theatre': 'LEISURE', 'hotel_accommodation': 'LEISURE', 'micro_playground': 'LEISURE',
    'townhall': 'GOVERNMENT', 'police': 'GOVERNMENT', 'bank': 'GOVERNMENT', 'post_office': 'GOVERNMENT',
    'government_central': 'GOVERNMENT', 'police_station': 'GOVERNMENT',
    'aerodrome': 'TRANSPORT', 'station': 'TRANSPORT', 'train_station': 'TRANSPORT',
    'international_airport': 'TRANSPORT', 'national_rail_hub': 'TRANSPORT', 'regional_rail_hub': 'TRANSPORT', 'airport_terminal': 'TRANSPORT'
}

def parse_gtfs_time_safe(time_str):
    try:
        if not time_str or not isinstance(time_str, str): return 0
        parts = time_str.strip().split(':')
        return int(parts[0]) * 3600 + int(parts[1]) * 60 + int(parts[2])
    except: return 0

def get_best_service_ids(feed_path):
    try:
        cal_path = feed_path / "calendar.txt"
        cd_path = feed_path / "calendar_dates.txt"
        active = []
        if cal_path.exists():
            cal = pd.read_csv(cal_path)
            if 'wednesday' in cal.columns:
                active = cal[cal['wednesday'] == 1]['service_id'].tolist()
        if not active and cd_path.exists():
            cd = pd.read_csv(cd_path)
            if not cd.empty:
                best_day = cd['date'].value_counts().idxmax()
                active = cd[cd['date'] == best_day]['service_id'].tolist()
        return active
    except: return []



def calculate_h3_dna(city_name):
    print(f"[{city_name}] Obliczanie DNA (Master Pipeline Final)...", flush=True)
    try:
        data_dir = get_data_dir()
        city_dir = data_dir / "cities" / city_name
        spatial_dir = city_dir / "02_spatial"
        results_dir = city_dir / "04_results"
        results_dir.mkdir(parents=True, exist_ok=True)

        import sys

        stops_path = spatial_dir / "stops.gpkg"
        if not stops_path.exists(): return

        # Load stops and MUST convert to EPSG:2180 before spatial ops
        stops = gpd.read_file(stops_path)
        stops = stops.reset_index(drop=True) # KRYTYCZNE: Blokada nadpisywania węzłów!

        if 'norm_name' not in stops.columns:
             stops['norm_name'] = stops['stop_name'].str.lower().str.replace(r'[^a-ząćęłńóśźż0-9]', '', regex=True)

        # Zabezpieczenie przed pustymi nazwami (żeby nie wypadły z klastrowania)
        stops['norm_name'] = stops['norm_name'].fillna(pd.Series('bez_nazwy_' + stops.index.astype(str)))        # H3 ONLY for frontend rendering later (calculated on WGS84)
        stops['h3_index'] = stops.to_crs("EPSG:4326").geometry.apply(lambda p: h3.latlng_to_cell(p.y, p.x, H3_RESOLUTION))
        stops = stops.to_crs("EPSG:2180")

        # Step 1: Semantic + Strict Agglomerative Clustering (Hybrid v11.0)
        stops['hub_id_pre'] = -1
        hub_counter = 0
        
        # Phase A: Strict Semantic + Spatial Complete Linkage (150m - calibrated for wide arteries)
        # Gather stops with the same name into compact bundles.
        for name, group in stops.groupby('norm_name'):
            if len(group) == 1:
                stops.loc[group.index, 'hub_id_pre'] = hub_counter
                hub_counter += 1
                continue
            
            coords = np.array([[geom.x, geom.y] for geom in group.geometry])
            # Complete linkage ensures tight groups within 150m.
            clustering = AgglomerativeClustering(distance_threshold=150, n_clusters=None, linkage='complete')
            labels = clustering.fit_predict(coords)
            
            for label in np.unique(labels): 
                stops.loc[group.index[labels == label], 'hub_id_pre'] = hub_counter
                hub_counter += 1
                
        # Handle unassigned
        unassigned = stops['hub_id_pre'] == -1
        if unassigned.any():
            stops.loc[unassigned, 'hub_id_pre'] = range(hub_counter, hub_counter + unassigned.sum())

        # Phase B: Cross-Semantic Centroid Stitching (100m - calibrated for massive intersections)
        # Merge hubs with different names if their centers are virtually touching (e.g. Korona & IX Wiekow).
        pre_hubs = stops.dissolve(by='hub_id_pre').reset_index()
        pre_hubs['centroid'] = pre_hubs.geometry.centroid
        
        coords_hubs = np.array([[geom.x, geom.y] for geom in pre_hubs['centroid']])
        # Single linkage here is safe because centroids are already the result of a strict pass.
        stitching = AgglomerativeClustering(distance_threshold=100, n_clusters=None, linkage='single')
        stitch_labels = stitching.fit_predict(coords_hubs)
        
        # Map pre_id to final_id
        hub_map = dict(zip(pre_hubs['hub_id_pre'], stitch_labels))
        stops['hub_id'] = stops['hub_id_pre'].map(hub_map)

        # Build logical hubs from MultiPoints
        hubs = stops.dissolve(by='hub_id').reset_index()
        hubs['hub_centroid'] = hubs.geometry.centroid
        
        # Step 2: Euclidean 500m Catchment
        hubs['catchment'] = hubs.geometry.buffer(CATCHMENT_RADIUS)
        stops['catchment'] = stops.geometry.buffer(CATCHMENT_RADIUS)
        
        # Step 3: Prawdziwa Częstotliwość (Dirty GTFS Tolerance + Trip Deduplication) dla Słupków i Hubów
        import concurrent.futures
        
        def process_gtfs_feed(feed):
            local_stop_counts = {}
            local_stop_routes = {}
            local_hub_counts = {}
            local_hub_routes = {}
            if not feed.is_dir():
                return local_stop_counts, local_stop_routes, local_hub_counts, local_hub_routes
            try:
                service_ids = get_best_service_ids(feed)
                st = pd.read_csv(feed / "stop_times.txt", usecols=['trip_id', 'stop_id', 'departure_time'], dtype={'stop_id': str, 'trip_id': str})
                tr = pd.read_csv(feed / "trips.txt", dtype={'trip_id': str})
                
                if 'route_id' in tr.columns:
                    routes_path = feed / "routes.txt"
                    if routes_path.exists():
                        routes = pd.read_csv(routes_path, dtype=str)
                        r_name_col = 'route_short_name' if 'route_short_name' in routes.columns else ('route_long_name' if 'route_long_name' in routes.columns else 'route_id')
                        tr = tr.merge(routes[['route_id', r_name_col]], on='route_id', how='left')
                        tr['route_name'] = tr[r_name_col].fillna(tr['route_id']).astype(str)
                    else:
                        tr['route_name'] = tr['route_id'].astype(str)
                else:
                    tr['route_name'] = 'BUS'

                if service_ids and 'service_id' in tr.columns:
                    tr = tr[tr['service_id'].isin(service_ids)]
                    divisor = 14.0 # typical 14 working hours
                else:
                    divisor = 14.0 * 20.0
                    
                st = st.merge(tr[['trip_id', 'route_name']], on='trip_id')
                del tr; import gc; gc.collect()
                
                # Assign hub_id to stop_times
                stop_hub_map = dict(zip(stops['stop_id'].astype(str), stops['hub_id']))
                st['hub_id'] = st['stop_id'].astype(str).map(stop_hub_map)
                st = st.dropna(subset=['hub_id'])
                
                # Active time window 06:00 to 20:00
                st['secs'] = st['departure_time'].apply(parse_gtfs_time_safe)
                st = st[(st['secs'] >= 21600) & (st['secs'] <= 72000)]
                
                # Stop level counts & routes
                stop_counts = st.groupby('stop_id')['trip_id'].nunique()
                for sid, val in stop_counts.items():
                    local_stop_counts[str(sid)] = (val / divisor)

                stop_r = st.groupby('stop_id')['route_name'].unique()
                for sid, rts in stop_r.items():
                    local_stop_routes[str(sid)] = set(rts)

                # Hub level counts & routes
                hub_counts = st.groupby('hub_id')['trip_id'].nunique()
                for hid, val in hub_counts.items():
                    local_hub_counts[hid] = (val / divisor)

                hub_r = st.groupby('hub_id')['route_name'].unique()
                for hid, rts in hub_r.items():
                    local_hub_routes[hid] = set(rts)

            except Exception as e:
                print(f"Błąd GTFS na feedzie {feed.name}: {e}")
            return local_stop_counts, local_stop_routes, local_hub_counts, local_hub_routes

        total_stop_trips = {}
        total_stop_routes = {}
        total_hub_trips = {}
        total_hub_routes = {}

        with concurrent.futures.ThreadPoolExecutor(max_workers=4) as executor:
            gtfs_dirs = list((city_dir / "gtfs").iterdir()) if (city_dir / "gtfs").exists() else []
            futures = [executor.submit(process_gtfs_feed, f) for f in gtfs_dirs]
            for future in concurrent.futures.as_completed(futures):
                s_counts, s_routes, h_counts, h_routes = future.result()
                for sid, val in s_counts.items():
                    total_stop_trips[sid] = total_stop_trips.get(sid, 0.0) + val
                for sid, rts in s_routes.items():
                    total_stop_routes.setdefault(sid, set()).update(rts)
                for hid, val in h_counts.items():
                    total_hub_trips[hid] = total_hub_trips.get(hid, 0.0) + val
                for hid, rts in h_routes.items():
                    total_hub_routes.setdefault(hid, set()).update(rts)

        def format_routes(r_set):
            if not r_set: return ""
            return ", ".join(sorted(r_set, key=lambda s: (int(s) if str(s).isdigit() else 999, str(s))))

        stops['stop_departures_h'] = stops['stop_id'].astype(str).map(total_stop_trips).fillna(0.0)
        stops['stop_routes'] = stops['stop_id'].astype(str).map(lambda sid: format_routes(total_stop_routes.get(sid, set())))
        stops['stop_routes_count'] = stops['stop_id'].astype(str).map(lambda sid: len(total_stop_routes.get(sid, set()))).astype(int)

        hubs['hub_departures_h'] = hubs['hub_id'].map(total_hub_trips).fillna(0.0)
        hubs['hub_routes'] = hubs['hub_id'].map(lambda hid: format_routes(total_hub_routes.get(hid, set())))
        hubs['hub_routes_count'] = hubs['hub_id'].map(lambda hid: len(total_hub_routes.get(hid, set()))).astype(int)

        # Step 4: RCN Ochrona IQR + Zero-Liquidity Fallback dla Hubów i Słupków
        rcn_path = spatial_dir / "transactions.gpkg"
        rcn = gpd.GeoDataFrame()
        if rcn_path.exists():
            rcn = gpd.read_file(rcn_path).to_crs("EPSG:2180")
            if not rcn.empty and 'price_m2' in rcn.columns:
                q1, q3 = rcn['price_m2'].quantile(0.25), rcn['price_m2'].quantile(0.75)
                iqr = q3 - q1
                rcn = rcn[(rcn['price_m2'] >= (q1 - 1.5*iqr)) & (rcn['price_m2'] <= (q3 + 1.5*iqr))]
        
        city_median_price = rcn['price_m2'].median() if not rcn.empty else 0.0
        
        if not rcn.empty:
            # Hubs RCN
            joined_rcn_hubs = gpd.sjoin(rcn, hubs.set_geometry('catchment')[['hub_id', 'catchment']], how="inner", predicate="intersects")
            rcn_stats_hubs = joined_rcn_hubs.groupby('hub_id')['price_m2'].agg(hub_market_val='median', hub_liquidity='count').reset_index()
            hubs = hubs.merge(rcn_stats_hubs, on='hub_id', how='left')
            hubs['hub_market_val'] = hubs['hub_market_val'].fillna(city_median_price)
            hubs['hub_liquidity'] = hubs['hub_liquidity'].fillna(0).astype(int)

            # Stops RCN
            joined_rcn_stops = gpd.sjoin(rcn, stops.set_geometry('catchment')[['stop_id', 'catchment']], how="inner", predicate="intersects")
            rcn_stats_stops = joined_rcn_stops.groupby('stop_id')['price_m2'].agg(stop_market_val='median', stop_liquidity='count').reset_index()
            stops = stops.merge(rcn_stats_stops, on='stop_id', how='left')
            stops['stop_market_val'] = stops['stop_market_val'].fillna(city_median_price)
            stops['stop_liquidity'] = stops['stop_liquidity'].fillna(0).astype(int)
        else:
            hubs['hub_market_val'] = city_median_price
            hubs['hub_liquidity'] = 0
            stops['stop_market_val'] = city_median_price
            stops['stop_liquidity'] = 0

        # Step 5 & 7: Pełne Poligony POI + Kanibalizacja Popytu (Model Huffa & Tuning Decay)
        poi_weights_path = city_dir / "03_config" / "poi_valuation.json"
        poi_weights = {}
        if poi_weights_path.exists():
            with open(poi_weights_path, "r") as f:
                poi_weights = json.load(f)
            
        infra_pts = gpd.read_file(spatial_dir / "infrastructure.gpkg", layer="points").to_crs("EPSG:2180")
        infra_poly = gpd.read_file(spatial_dir / "infrastructure.gpkg", layer="multipolygons").to_crs("EPSG:2180")
        infra = pd.concat([infra_pts, infra_poly], ignore_index=True)
        del infra_pts, infra_poly; import gc; gc.collect()
        
        val_path = Path(__file__).parent / "14_build_isc_valuation.py"
        spec = importlib.util.spec_from_file_location("val_module", str(val_path))
        val_module = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(val_module)
        
        if 'name' not in infra.columns:
            infra['name'] = infra['all_tags'].apply(lambda x: val_module.parse_hstore(x).get('name'))
        
        tag_results = infra.apply(lambda row: val_module.identify_v7_9_tag(row, city_name), axis=1, result_type='expand')
        infra['category'] = tag_results[0]
        infra['tier'] = tag_results[1]
        infra = infra[infra['category'].notna()]
        
        infra['area_m2'] = infra.to_crs("EPSG:2180").area if not infra.empty else 0.0
        infra = infra.rename(columns={'category': 'cat_name'})
        infra = val_module.spatial_dissolve_strategic(infra)
        infra = infra.rename(columns={'cat_name': 'category'})
        
        infra['poi_id'] = range(len(infra))
        
        def get_penalty_power(tier):
            if tier in ["T0_MEGA_HUB", "T1_NATIONAL_MAGNET"]: return 0.2
            if tier == "T2_STRATEGIC_HUB": return 1.2  
            if tier == "T3_LOCAL_CORE": return 1.0     
            if tier == "T4_DAILY_SERVICE": return 1.0  
            if tier == "T5_SPEC_GASTRO": return 1.5    
            return 2.0
            
        floor_map = {"T4_DAILY_SERVICE": 5.0, "T5_SPEC_GASTRO": 5.0}

        def calc_entropy(group):
            total_grav = group['grav_unique'].sum()
            if total_grav == 0: return 0.0
            props = group.groupby('domain')['grav_unique'].sum() / total_grav
            return -float(np.sum(props * np.log2(props + 1e-9)))

        # 5a. Hubs POI Calculation
        joined_infra = gpd.sjoin(infra, hubs.set_geometry('catchment')[['hub_id', 'catchment']], how="inner", predicate="intersects")
        if not joined_infra.empty:
            joined_infra = joined_infra.reset_index(drop=True)
            joined_infra['domain'] = joined_infra['category'].map(DOMAIN_MAPPING)
            joined_infra['w'] = joined_infra['category'].apply(lambda c: poi_weights.get(c, {}).get('final_value', 10.0))
            joined_infra = joined_infra.merge(hubs[['hub_id', 'hub_centroid']], on='hub_id', how='left')
            joined_infra['dist'] = joined_infra.geometry.distance(gpd.GeoSeries(joined_infra['hub_centroid'], crs="EPSG:2180")).values
            
            joined_infra = joined_infra.sort_values(['hub_id', 'category', 'dist'])
            joined_infra['cat_rank'] = joined_infra.groupby(['hub_id', 'category']).cumcount() + 1
            joined_infra['penalty_power'] = joined_infra['tier'].apply(get_penalty_power)
            joined_infra['decay_factor'] = joined_infra['cat_rank'] ** joined_infra['penalty_power']
            joined_infra['max_decay'] = joined_infra['tier'].map(floor_map).fillna(np.inf)
            joined_infra['effective_decay'] = np.minimum(joined_infra['decay_factor'], joined_infra['max_decay'])
            joined_infra['w'] = joined_infra['w'] / joined_infra['effective_decay']
            
            joined_infra['pull'] = np.exp(-K_DECAY * joined_infra['dist'])
            joined_infra['sum_pull'] = joined_infra.groupby('poi_id')['pull'].transform('sum')
            joined_infra['grav_unique'] = (joined_infra['w'] * joined_infra['pull']) * (joined_infra['pull'] / joined_infra['sum_pull'])
            
            # Export poi_matrix.parquet
            poi_export = joined_infra[['poi_id', 'name', 'category', 'tier', 'w', 'sum_pull', 'geometry']].drop_duplicates('poi_id')
            poi_export_wgs = poi_export.set_geometry('geometry').to_crs("EPSG:4326")
            poi_export_wgs['lat'] = poi_export_wgs.geometry.centroid.y
            poi_export_wgs['lon'] = poi_export_wgs.geometry.centroid.x
            poi_export_df = pd.DataFrame(poi_export_wgs[['poi_id', 'name', 'category', 'tier', 'lat', 'lon', 'w', 'sum_pull']])
            poi_export_df.to_parquet(results_dir / "poi_matrix.parquet")
            
            gravity_stats = joined_infra.groupby('hub_id')['grav_unique'].sum().reset_index().rename(columns={'grav_unique': 'hub_raw_gravity'})
            entropy_stats = joined_infra.groupby('hub_id').apply(calc_entropy, include_groups=False).reset_index(name='hub_entropy')
            hubs = hubs.merge(gravity_stats, on='hub_id', how='left').merge(entropy_stats, on='hub_id', how='left')
        else:
            hubs['hub_raw_gravity'] = 0.0
            hubs['hub_entropy'] = 0.0
            pd.DataFrame(columns=['poi_id', 'lat', 'lon', 'w', 'sum_pull']).to_parquet(results_dir / "poi_matrix.parquet")
            
        hubs['hub_raw_gravity'] = hubs['hub_raw_gravity'].fillna(0.0)
        hubs['hub_entropy'] = hubs['hub_entropy'].fillna(0.0)
        hubs['hub_infra_score'] = hubs['hub_raw_gravity'] * (1.0 + hubs['hub_entropy'])

        # 5b. Micro Stops POI Calculation
        joined_infra_stops = gpd.sjoin(infra, stops.set_geometry('catchment')[['stop_id', 'catchment']], how="inner", predicate="intersects")
        if not joined_infra_stops.empty:
            joined_infra_stops = joined_infra_stops.reset_index(drop=True)
            joined_infra_stops['domain'] = joined_infra_stops['category'].map(DOMAIN_MAPPING)
            joined_infra_stops['w'] = joined_infra_stops['category'].apply(lambda c: poi_weights.get(c, {}).get('final_value', 10.0))
            
            stop_geoms = stops[['stop_id', 'geometry']].rename(columns={'geometry': 'stop_geom'})
            joined_infra_stops = joined_infra_stops.merge(stop_geoms, on='stop_id', how='left')
            joined_infra_stops['dist'] = joined_infra_stops.geometry.distance(gpd.GeoSeries(joined_infra_stops['stop_geom'], crs="EPSG:2180")).values
            
            joined_infra_stops = joined_infra_stops.sort_values(['stop_id', 'category', 'dist'])
            joined_infra_stops['cat_rank'] = joined_infra_stops.groupby(['stop_id', 'category']).cumcount() + 1
            joined_infra_stops['penalty_power'] = joined_infra_stops['tier'].apply(get_penalty_power)
            joined_infra_stops['decay_factor'] = joined_infra_stops['cat_rank'] ** joined_infra_stops['penalty_power']
            joined_infra_stops['max_decay'] = joined_infra_stops['tier'].map(floor_map).fillna(np.inf)
            joined_infra_stops['effective_decay'] = np.minimum(joined_infra_stops['decay_factor'], joined_infra_stops['max_decay'])
            joined_infra_stops['w'] = joined_infra_stops['w'] / joined_infra_stops['effective_decay']
            
            joined_infra_stops['pull'] = np.exp(-K_DECAY * joined_infra_stops['dist'])
            joined_infra_stops['sum_pull'] = joined_infra_stops.groupby('poi_id')['pull'].transform('sum')
            joined_infra_stops['grav_unique'] = (joined_infra_stops['w'] * joined_infra_stops['pull']) * (joined_infra_stops['pull'] / joined_infra_stops['sum_pull'])
            
            stop_grav_stats = joined_infra_stops.groupby('stop_id')['grav_unique'].sum().reset_index().rename(columns={'grav_unique': 'stop_raw_gravity'})
            stop_entropy_stats = joined_infra_stops.groupby('stop_id').apply(calc_entropy, include_groups=False).reset_index(name='stop_entropy')
            stops = stops.merge(stop_grav_stats, on='stop_id', how='left').merge(stop_entropy_stats, on='stop_id', how='left')
        else:
            stops['stop_raw_gravity'] = 0.0
            stops['stop_entropy'] = 0.0

        stops['stop_raw_gravity'] = stops['stop_raw_gravity'].fillna(0.0)
        stops['stop_entropy'] = stops['stop_entropy'].fillna(0.0)
        stops['stop_infra_score'] = stops['stop_raw_gravity'] * (1.0 + stops['stop_entropy'])

        # Step 6 & 7: SJOIN dla Populacji + Kanibalizacja Huffa Ludności
        pop_path = spatial_dir / "population_250m.gpkg"
        pop_exported = False
        if pop_path.exists():
            pop = gpd.read_file(pop_path).to_crs("EPSG:2180")
            if not pop.empty and 'TOT' in pop.columns:
                pop['grid_id'] = range(len(pop))
                pop['pop_centroid'] = pop.geometry.centroid
                
                # 6a. Hubs Population
                pop_joined = gpd.sjoin(pop.set_geometry('pop_centroid')[['grid_id', 'TOT', 'pop_centroid']], hubs.set_geometry('catchment')[['hub_id', 'catchment']], how="inner", predicate="within")
                if not pop_joined.empty:
                    pop_joined = pop_joined.reset_index(drop=True)
                    pop_joined = pop_joined.merge(hubs[['hub_id', 'hub_centroid']], on='hub_id', how='left')
                    
                    pop_x = pop_joined['pop_centroid'].x.values; pop_y = pop_joined['pop_centroid'].y.values
                    hub_x = pop_joined['hub_centroid'].x.values; hub_y = pop_joined['hub_centroid'].y.values
                    pop_joined['dist'] = np.sqrt((pop_x - hub_x)**2 + (pop_y - hub_y)**2)
                    pop_joined['pull'] = np.exp(-K_DECAY * pop_joined['dist'])
                    pop_joined['sum_pull_pop'] = pop_joined.groupby('grid_id')['pull'].transform('sum')
                    pop_joined['pop_unique'] = pop_joined['TOT'] * (pop_joined['pull'] / pop_joined['sum_pull_pop'])
                    
                    pop_export = pop_joined[['grid_id', 'TOT', 'sum_pull_pop', 'pop_centroid']].drop_duplicates('grid_id')
                    pop_export_wgs = gpd.GeoDataFrame(pop_export, geometry='pop_centroid', crs="EPSG:2180").to_crs("EPSG:4326")
                    pop_export_wgs['lat'] = pop_export_wgs.geometry.y
                    pop_export_wgs['lon'] = pop_export_wgs.geometry.x
                    pop_export_df = pd.DataFrame(pop_export_wgs[['grid_id', 'lat', 'lon', 'TOT', 'sum_pull_pop']].rename(columns={'TOT': 'pop_val'}))
                    pop_export_df.to_parquet(results_dir / "pop_matrix.parquet")
                    pop_exported = True
                    
                    pop_hubs = pop_joined.groupby('hub_id')['pop_unique'].sum().reset_index().rename(columns={'pop_unique': 'hub_pop_val'})
                    hubs = hubs.merge(pop_hubs, on='hub_id', how='left')

                # 6b. Micro Stops Population
                pop_joined_stops = gpd.sjoin(pop.set_geometry('pop_centroid')[['grid_id', 'TOT', 'pop_centroid']], stops.set_geometry('catchment')[['stop_id', 'catchment']], how="inner", predicate="within")
                if not pop_joined_stops.empty:
                    pop_joined_stops = pop_joined_stops.reset_index(drop=True)
                    pop_joined_stops = pop_joined_stops.merge(stops[['stop_id', 'geometry']], on='stop_id', how='left')
                    
                    pop_x = pop_joined_stops['pop_centroid'].x.values; pop_y = pop_joined_stops['pop_centroid'].y.values
                    stop_x = pop_joined_stops['geometry'].x.values; stop_y = pop_joined_stops['geometry'].y.values
                    pop_joined_stops['dist'] = np.sqrt((pop_x - stop_x)**2 + (pop_y - stop_y)**2)
                    pop_joined_stops['pull'] = np.exp(-K_DECAY * pop_joined_stops['dist'])
                    pop_joined_stops['sum_pull_pop'] = pop_joined_stops.groupby('grid_id')['pull'].transform('sum')
                    pop_joined_stops['pop_unique'] = pop_joined_stops['TOT'] * (pop_joined_stops['pull'] / pop_joined_stops['sum_pull_pop'])
                    
                    pop_stops = pop_joined_stops.groupby('stop_id')['pop_unique'].sum().reset_index().rename(columns={'pop_unique': 'stop_pop_val'})
                    stops = stops.merge(pop_stops, on='stop_id', how='left')

        if not pop_exported:
            pd.DataFrame(columns=['grid_id', 'lat', 'lon', 'pop_val', 'sum_pull_pop']).to_parquet(results_dir / "pop_matrix.parquet")

        if 'hub_pop_val' not in hubs.columns:
            hubs['hub_pop_val'] = 0.0
        hubs['hub_pop_val'] = hubs['hub_pop_val'].fillna(0.0)

        if 'stop_pop_val' not in stops.columns:
            stops['stop_pop_val'] = 0.0
        stops['stop_pop_val'] = stops['stop_pop_val'].fillna(0.0)

        # Local Scoring & Ranking (Hubs & Stops)
        def z_score(s): return (s - s.mean()) / (s.std() + 1e-9)
        def assign_grade(pct):
            if pct >= 95: return "A+"
            if pct >= 85: return "A"
            if pct >= 70: return "B"
            if pct >= 50: return "C"
            if pct >= 25: return "D"
            return "F"

        # Hub Scoring
        for c in ['hub_infra_score', 'hub_departures_h', 'hub_pop_val', 'hub_market_val']:
            hubs[f'{c}_log'] = np.log1p(hubs[c])
            
        hubs['hub_local_score_raw'] = (
            z_score(hubs['hub_infra_score_log']) * 0.35 +
            z_score(hubs['hub_departures_h_log']) * 0.35 +
            z_score(hubs['hub_pop_val_log']) * 0.15 +
            z_score(hubs['hub_market_val_log']) * 0.15
        )
        hubs['hub_percentile'] = hubs['hub_local_score_raw'].rank(pct=True) * 100
        hubs['hub_grade'] = hubs['hub_percentile'].apply(assign_grade)

        # Stop Scoring
        for c in ['stop_infra_score', 'stop_departures_h', 'stop_pop_val', 'stop_market_val']:
            stops[f'{c}_log'] = np.log1p(stops[c])
            
        stops['stop_local_score_raw'] = (
            z_score(stops['stop_infra_score_log']) * 0.35 +
            z_score(stops['stop_departures_h_log']) * 0.35 +
            z_score(stops['stop_pop_val_log']) * 0.15 +
            z_score(stops['stop_market_val_log']) * 0.15
        )
        stops['stop_percentile'] = stops['stop_local_score_raw'].rank(pct=True) * 100
        stops['stop_grade'] = stops['stop_percentile'].apply(assign_grade)

        # Step 8: Attach Hub DNA, Relationships & Dual Layer GPKG Export
        hub_macro_cols = [
            'hub_id', 'hub_departures_h', 'hub_routes_count', 'hub_routes',
            'hub_raw_gravity', 'hub_entropy', 'hub_infra_score',
            'hub_pop_val', 'hub_market_val', 'hub_liquidity',
            'hub_local_score_raw', 'hub_percentile', 'hub_grade'
        ]
        stops = stops.merge(hubs[hub_macro_cols], on='hub_id', how='left')

        # Relacja udziału przystanku w hubie
        stops['stop_hub_share'] = np.where(
            stops['hub_departures_h'] > 0,
            np.clip(stops['stop_departures_h'] / stops['hub_departures_h'], 0.0, 1.0),
            0.0
        )

        # Wyznaczenie anchor stopu w każdym hubie (najwyższe odjazdy, deterministyczny tie-break)
        stops = stops.sort_values(['hub_id', 'stop_departures_h', 'stop_id'], ascending=[True, False, True])
        stops['is_hub_anchor'] = (stops.groupby('hub_id').cumcount() == 0)

        # Nazwa huba na bazie anchor stopu
        anchor_names = stops[stops['is_hub_anchor']].set_index('hub_id')['stop_name'].to_dict()
        stops['hub_name'] = stops['hub_id'].map(anchor_names).fillna(stops['hub_id'].astype(str))
        hubs['hub_name'] = hubs['hub_id'].map(anchor_names).fillna(hubs['hub_id'].astype(str))

        # Agregacja liczby słupków i listy stop_ids w hubie
        def format_stop_ids(sids):
            return ", ".join(map(str, sorted(sids, key=lambda x: (int(x) if str(x).isdigit() else 99999, str(x)))))

        hub_stops_agg = stops.groupby('hub_id')['stop_id'].agg(
            hub_stops_count='count',
            hub_stops_ids=format_stop_ids
        ).reset_index()
        hubs = hubs.merge(hub_stops_agg, on='hub_id', how='left')
        stops = stops.merge(hub_stops_agg[['hub_id', 'hub_stops_count']], on='hub_id', how='left')

        # Aliases wsteczne (Backwards-compatibility dla API, Deck.gl i Vercel)
        stops['infra_score'] = stops['hub_infra_score']
        stops['transit_freq'] = stops['hub_departures_h']
        stops['pop_val'] = stops['hub_pop_val']
        stops['market_val'] = stops['hub_market_val']
        stops['local_score_raw'] = stops['hub_local_score_raw']
        stops['local_percentile'] = stops['hub_percentile']
        stops['grade'] = stops['hub_grade']

        hubs['transit_freq'] = hubs['hub_departures_h']
        hubs['infra_score'] = hubs['hub_infra_score']
        hubs['pop_val'] = hubs['hub_pop_val']
        hubs['market_val'] = hubs['hub_market_val']
        hubs['local_score_raw'] = hubs['hub_local_score_raw']
        hubs['local_percentile'] = hubs['hub_percentile']
        hubs['grade'] = hubs['hub_grade']

        # 8a. Export hubs.gpkg (WGS84 EPSG:4326 Centroids)
        hubs['geometry'] = hubs['hub_centroid']
        hubs_export = hubs.to_crs("EPSG:4326")
        hubs_export['lat'] = hubs_export.geometry.y
        hubs_export['lon'] = hubs_export.geometry.x
        hubs_export['city'] = city_name
        drop_hub_cols = [c for c in hubs_export.columns if c.endswith('_log') or c in ['catchment', 'hub_centroid', 'norm_name', 'hub_id_pre', 'stop_id', 'stop_name', 'stop_lat', 'stop_lon', 'source', 'lat_grid', 'lon_grid']]
        hubs_export = hubs_export.drop(columns=drop_hub_cols, errors='ignore')
        hubs_export.to_file(results_dir / "hubs.gpkg", driver="GPKG")

        # 8b. Export stop_dna.gpkg (WGS84 EPSG:4326 Stops)
        stops_export = stops.to_crs("EPSG:4326")
        stops_export['stop_lat'] = stops_export.geometry.y
        stops_export['stop_lon'] = stops_export.geometry.x
        drop_stop_cols = [c for c in stops_export.columns if c.endswith('_log') or c in ['catchment', 'stop_geom']]
        stops_export = stops_export.drop(columns=drop_stop_cols, errors='ignore')
        stops_export.to_file(results_dir / "stop_dna.gpkg", driver="GPKG")

        print(f"[{city_name}] Sukces zakończenia wywołu grawitacji The Master Pipeline.", flush=True)
        return stops_export
    except Exception as e:
        print(f"[{city_name}] CRITICAL DNA ERROR: {str(e)}", file=sys.stderr); raise

def run_national_stitching():
    data_dir = get_data_dir()
    db_dir = data_dir / "database"
    db_dir.mkdir(parents=True, exist_ok=True)
    all_dfs = []
    
    for city_dir in (data_dir / "cities").iterdir():
        p = city_dir / "04_results" / "stop_dna.gpkg"
        if p.exists(): 
            df = gpd.read_file(p)
            df['city_context'] = city_dir.name
            all_dfs.append(df)
            
    if not all_dfs: return
    full_df = pd.concat(all_dfs, ignore_index=True)
    
    for c in ['infra_score', 'transit_freq', 'pop_val']: full_df[f'{c}_log_nat'] = np.log1p(full_df[c])
    
    # Rygor percentyli bazy danych krajowej ma bazować na Węzłach Unikalnych (1 Węzeł Logiczny).
    unique_scores = full_df.drop_duplicates(subset=['city_context', 'hub_id'])
    
    full_df['national_score'] = (((full_df['infra_score_log_nat'] - unique_scores['infra_score_log_nat'].mean()) / (unique_scores['infra_score_log_nat'].std() + 1e-9)) * 0.35 +
                                 ((full_df['transit_freq_log_nat'] - unique_scores['transit_freq_log_nat'].mean()) / (unique_scores['transit_freq_log_nat'].std() + 1e-9)) * 0.35 +
                                 ((full_df['pop_val_log_nat'] - unique_scores['pop_val_log_nat'].mean()) / (unique_scores['pop_val_log_nat'].std() + 1e-9)) * 0.15 +
                                 ((full_df['market_val'] - unique_scores['market_val'].mean()) / (unique_scores['market_val'].std() + 1e-9)) * 0.15)
                                 
    unique_ranks = full_df[['city_context', 'hub_id', 'national_score']].drop_duplicates()
    unique_ranks['national_percentile'] = unique_ranks['national_score'].rank(pct=True) * 100
    
    full_df = full_df.merge(unique_ranks[['city_context', 'hub_id', 'national_percentile']], on=['city_context', 'hub_id'], how='left')
    
    full_df.to_file(db_dir / "master_stop_dna_poland.gpkg", driver="GPKG")
    full_df.drop(columns='geometry').to_csv(db_dir / "master_stop_dna_poland.csv", index=False)

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--city"); parser.add_argument("--force", action="store_true"); parser.add_argument("--stitch", action="store_true")
    args = parser.parse_args()
    if args.city: calculate_h3_dna(args.city)
    if args.stitch: run_national_stitching()

if __name__ == "__main__":
    main()
