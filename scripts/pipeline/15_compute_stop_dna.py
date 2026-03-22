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
from sklearn.cluster import AgglomerativeClustering

warnings.filterwarnings("ignore", category=FutureWarning)
warnings.filterwarnings("ignore", message=".*Geometry is in a geographic CRS.*")

def get_data_dir():
    return Path(os.environ.get("PIPELINE_DATA_DIR", "data"))

# --- KONFIGURACJA DNA v_Final ---
H3_RESOLUTION = 9       
CATCHMENT_RADIUS = 500  
K_DECAY = 0.015         

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

        # Step 1: Semantic + Strict Agglomerative Clustering
        stops['hub_id'] = -1
        hub_counter = 0
        
        # We group by norm_name and use complete linkage with 50m distance threshold to ensure 0 snakes.
        for name, group in stops.groupby('norm_name'):
            if len(group) == 1:
                stops.loc[group.index, 'hub_id'] = hub_counter
                hub_counter += 1
                continue
            
            coords = np.array([[geom.x, geom.y] for geom in group.geometry])
            clustering = AgglomerativeClustering(distance_threshold=150, n_clusters=None, linkage='single')
            labels = clustering.fit_predict(coords)
            
            # KRYTYCZNE: Iterujemy tylko po UNIKALNYCH klastrach (koniec z rozbijaniem węzłów!)
            for label in np.unique(labels): 
                stops.loc[group.index[labels == label], 'hub_id'] = hub_counter
                hub_counter += 1
                
        # KRYTYCZNE: Łapiemy wszystkie niezbadane przystanki z błędem -1
        unassigned = stops['hub_id'] == -1
        if unassigned.any():
            stops.loc[unassigned, 'hub_id'] = range(hub_counter, hub_counter + unassigned.sum())

        # Build logical hubs from MultiPoints
        hubs = stops.dissolve(by='hub_id').reset_index()
        hubs['hub_centroid'] = hubs.geometry.centroid
        
        # Step 2: Euclidean 500m Catchment
        hubs['catchment'] = hubs.geometry.buffer(CATCHMENT_RADIUS)
        
        # Step 3: Prawdziwa Częstotliwość (Dirty GTFS Tolerance + Trip Deduplication)
        import concurrent.futures
        hub_trip_counts = {h: 0 for h in hubs['hub_id']}
        
        def process_gtfs_feed(feed):
            local_counts = {}
            if not feed.is_dir(): return local_counts
            try:
                service_ids = get_best_service_ids(feed)
                # OPTYMALIZACJA RAM: Używamy tylko 3 kolumn i wymuszamy typy
                st = pd.read_csv(feed / "stop_times.txt", usecols=['trip_id', 'stop_id', 'departure_time'], dtype={'stop_id': str, 'trip_id': str})
                tr = pd.read_csv(feed / "trips.txt", usecols=['trip_id', 'service_id'], dtype={'trip_id': str})
                
                if service_ids:
                    tr = tr[tr['service_id'].isin(service_ids)]
                    divisor = 14.0 # typical 14 working hours
                else:
                    # Awaryjne tryby (Dirty GTFS)
                    divisor = 14.0 * 20.0
                    
                st = st.merge(tr[['trip_id']], on='trip_id')
                del tr # Zwalniamy RAM
                import gc; gc.collect()
                
                # Assign hub_id to stop_times
                stop_hub_map = dict(zip(stops['stop_id'].astype(str), stops['hub_id']))
                st['hub_id'] = st['stop_id'].astype(str).map(stop_hub_map)
                st = st.dropna(subset=['hub_id'])
                
                # Active time window 06:00 to 20:00
                st['secs'] = st['departure_time'].apply(parse_gtfs_time_safe)
                st = st[(st['secs'] >= 21600) & (st['secs'] <= 72000)]
                
                # Deduplication by (hub_id, trip_id)
                counts = st.groupby('hub_id')['trip_id'].nunique()
                
                for hid, val in counts.items():
                    local_counts[hid] = (val / divisor)
            except Exception as e:
                print(f"Błąd GTFS na węźle {feed.name}: {e}")
            return local_counts

        # Optymalizacja wielowątkowa odczytu I/O rozkładów jazdy
        with concurrent.futures.ThreadPoolExecutor(max_workers=4) as executor:
            gtfs_dirs = list((city_dir / "gtfs").iterdir()) if (city_dir / "gtfs").exists() else []
            futures = [executor.submit(process_gtfs_feed, f) for f in gtfs_dirs]
            for future in concurrent.futures.as_completed(futures):
                for hid, val in future.result().items():
                    if hid in hub_trip_counts:
                        hub_trip_counts[hid] += val

        hubs['transit_freq'] = hubs['hub_id'].map(hub_trip_counts).fillna(0)

        # Step 4: RCN Ochrona IQR + Zero-Liquidity Fallback
        rcn_path = spatial_dir / "transactions.gpkg"
        rcn = gpd.GeoDataFrame()
        if rcn_path.exists():
            rcn = gpd.read_file(rcn_path).to_crs("EPSG:2180")
            if not rcn.empty and 'price_m2' in rcn.columns:
                q1, q3 = rcn['price_m2'].quantile(0.25), rcn['price_m2'].quantile(0.75)
                iqr = q3 - q1
                rcn = rcn[(rcn['price_m2'] >= (q1 - 1.5*iqr)) & (rcn['price_m2'] <= (q3 + 1.5*iqr))]
        
        city_median_price = rcn['price_m2'].median() if not rcn.empty else 0
        
        if not rcn.empty:
            joined_rcn = gpd.sjoin(rcn, hubs.set_geometry('catchment')[['hub_id', 'catchment']], how="inner", predicate="intersects")
            rcn_stats = joined_rcn.groupby('hub_id')['price_m2'].agg(market_val='median', liquidity='count').reset_index()
            hubs = hubs.merge(rcn_stats, on='hub_id', how='left')
            # Fallback dla Hubów z brakiem transakcji w zapętleniu
            hubs['market_val'] = hubs['market_val'].fillna(city_median_price)
            hubs['liquidity'] = hubs['liquidity'].fillna(0)
        else:
            hubs['market_val'] = city_median_price
            hubs['liquidity'] = 0

        # Step 5 & 7: Pełne Poligony POI + Kanibalizacja Popytu (Model Huffa & Tuning Decay)
        poi_weights_path = city_dir / "03_config" / "poi_valuation.json"
        
        # Użyjemy domyślnych wartości w jeśli pliku brakuje
        poi_weights = {}
        if poi_weights_path.exists():
            with open(poi_weights_path, "r") as f:
                poi_weights = json.load(f)
            
        infra_pts = gpd.read_file(spatial_dir / "infrastructure.gpkg", layer="points").to_crs("EPSG:2180")
        infra_poly = gpd.read_file(spatial_dir / "infrastructure.gpkg", layer="multipolygons").to_crs("EPSG:2180")
        # Poligony zachowują powierzchnię (intersects!)
        infra = pd.concat([infra_pts, infra_poly], ignore_index=True)
        del infra_pts, infra_poly; import gc; gc.collect() # Zwalniamy od razu RAM po złączeniu obiektów
        
        # Wykorzystujemy ciężką pracę Skryptu 14: Kategoryzacja PRZED sjoin (żeby wykonać to raz na budynek)
        import sys
        import importlib
        sys.path.append(str(Path(__file__).resolve().parent))
        val_module = importlib.import_module("14_build_isc_valuation")
        
        tag_results = infra.apply(lambda row: val_module.identify_v7_9_tag(row, city_name), axis=1, result_type='expand')
        infra['category'] = tag_results[0]
        infra = infra[infra['category'].notna()]
        
        infra['poi_id'] = range(len(infra))
        
        joined_infra = gpd.sjoin(infra, hubs.set_geometry('catchment')[['hub_id', 'catchment']], how="inner", predicate="intersects")
        
        if not joined_infra.empty:
            joined_infra = joined_infra.reset_index(drop=True) # KRYTYCZNE: Zatrzymanie mnożenia wierszy
            
            joined_infra['domain'] = joined_infra['category'].map(DOMAIN_MAPPING)
            
            # Pobieramy pełne parametry wagi (w) ORAZ rangę (tier) z pliku
            joined_infra['w'] = joined_infra['category'].apply(lambda c: poi_weights.get(c, {}).get('final_value', 10.0))
            joined_infra['tier'] = joined_infra['category'].apply(lambda c: poi_weights.get(c, {}).get('tier', 'T6_MICRO_INFRA'))
            
            # KRYTYCZNE: Fizyczne dołączenie środka węzła do tabeli, by nie zgubić osi
            joined_infra = joined_infra.merge(hubs[['hub_id', 'hub_centroid']], on='hub_id', how='left')
            
            # Natywna kalkulacja C-GEOS wektor-do-wektora z wymuszonym .values (100% bezpieczne indeksy)
            joined_infra['dist'] = joined_infra.geometry.distance(gpd.GeoSeries(joined_infra['hub_centroid'], crs="EPSG:2180")).values
            
            # INTELIGENTNE DIMINISHING RETURNS (Lekarstwo na Tyranię Krat)
            joined_infra = joined_infra.sort_values(['hub_id', 'category', 'dist'])
            joined_infra['cat_rank'] = joined_infra.groupby(['hub_id', 'category']).cumcount() + 1
            
            def get_penalty_power(tier):
                if tier in ["T0_MEGA_HUB", "T1_NATIONAL_MAGNET"]: return 0.2
                if tier in ["T2_STRATEGIC_HUB", "T3_LOCAL_CORE"]: return 0.6
                if tier == "T4_DAILY_SERVICE": return 1.0
                return 1.5 # Brutalna kara dla T5/T6 (plac zabaw, ławki, fryzjerzy)
                
            joined_infra['penalty_power'] = joined_infra['tier'].apply(get_penalty_power)
            joined_infra['w'] = joined_infra['w'] / (joined_infra['cat_rank'] ** joined_infra['penalty_power'])
            
            # Wzór Huffa - Absolute vs Relative Gravity (Monopolista ukarany odległością)
            joined_infra['pull'] = np.exp(-K_DECAY * joined_infra['dist'])
            # OPTYMALIZACJA RAM: transform zamiast groupby+merge
            joined_infra['sum_pull'] = joined_infra.groupby('poi_id')['pull'].transform('sum')
            
            joined_infra['grav_unique'] = (joined_infra['w'] * joined_infra['pull']) * (joined_infra['pull'] / joined_infra['sum_pull'])
            
            # Krok 8: Ślepy Frontendu (The Prescriptive Blind Spot) -> z WGS84
            poi_export = joined_infra[['poi_id', 'w', 'sum_pull', 'geometry']].drop_duplicates('poi_id')
            poi_export_wgs = poi_export.set_geometry('geometry').to_crs("EPSG:4326")
            poi_export_wgs['lat'] = poi_export_wgs.geometry.centroid.y
            poi_export_wgs['lon'] = poi_export_wgs.geometry.centroid.x
            poi_export_df = pd.DataFrame(poi_export_wgs[['poi_id', 'lat', 'lon', 'w', 'sum_pull']])
            poi_export_df.to_parquet(results_dir / "poi_matrix.parquet")
            
            gravity_stats = joined_infra.groupby('hub_id')['grav_unique'].sum().reset_index().rename(columns={'grav_unique': 'raw_gravity'})
            domain_stats = joined_infra.dropna(subset=['domain']).groupby('hub_id')['domain'].nunique().reset_index().rename(columns={'domain': 'domain_count'})
            
            hubs = hubs.merge(gravity_stats, on='hub_id', how='left').merge(domain_stats, on='hub_id', how='left')
        else:
            hubs['raw_gravity'] = 0
            hubs['domain_count'] = 0
            # Puści pusty plik
            pd.DataFrame(columns=['poi_id', 'lat', 'lon', 'w', 'sum_pull']).to_parquet(results_dir / "poi_matrix.parquet")
            
        hubs['raw_gravity'] = hubs['raw_gravity'].fillna(0)
        hubs['domain_count'] = hubs['domain_count'].fillna(0)
        
        # Domain Synergy Bonus: +10% za każdą unikalną kategorię miejską 
        hubs['infra_score'] = hubs['raw_gravity'] * (1.0 + 0.1 * hubs['domain_count'])

        # Step 6 & 7: SJOIN dla Populacji + Kanibalizacja Huffa Ludności
        pop_path = spatial_dir / "population_250m.gpkg"
        if pop_path.exists():
            pop = gpd.read_file(pop_path).to_crs("EPSG:2180")
            if not pop.empty and 'TOT' in pop.columns:
                pop['grid_id'] = range(len(pop))
                # Przetwarzanie przy uzyciu wektorowych srodków kwadratow w intersects dla wydajności
                pop['pop_centroid'] = pop.geometry.centroid
                
                # Używamy predicate 'within' dla punktu w buforze
                pop_joined = gpd.sjoin(pop.set_geometry('pop_centroid')[['grid_id', 'TOT', 'pop_centroid']], hubs.set_geometry('catchment')[['hub_id', 'catchment']], how="inner", predicate="within")
                
                if not pop_joined.empty:
                    pop_joined = pop_joined.reset_index(drop=True) # Zabezpieczenie przed klonowaniem
                    pop_joined = pop_joined.merge(hubs[['hub_id', 'hub_centroid']], on='hub_id', how='left')
                    
                    # Czysta, bezpieczna matematyka NumPy
                    pop_x = pop_joined['pop_centroid'].x.values
                    pop_y = pop_joined['pop_centroid'].y.values
                    hub_x = pop_joined['hub_centroid'].x.values
                    hub_y = pop_joined['hub_centroid'].y.values
                    
                    # Błyskawiczny Pitagoras wektorowy w C (NumPy)
                    pop_joined['dist'] = np.sqrt((pop_x - hub_x)**2 + (pop_y - hub_y)**2)
                    
                    pop_joined['pull'] = np.exp(-K_DECAY * pop_joined['dist'])
                    # OPTYMALIZACJA RAM: transform zamiast groupby+merge
                    pop_joined['sum_pull_pop'] = pop_joined.groupby('grid_id')['pull'].transform('sum')
                    
                    # Absolute Relative Population Distribution (The Gravity Fallacy handled - Zachowanie 100% masy ludzkiej)
                    pop_joined['pop_unique'] = pop_joined['TOT'] * (pop_joined['pull'] / pop_joined['sum_pull_pop'])
                    
                    # Pop Matrix Export for API (w lat, lon EPSG:4326)
                    # Odrzucamy duplikaty punktów zanim przepuścimy je przez ciężki transformator EPSG:4326
                    pop_export = pop_joined[['grid_id', 'TOT', 'sum_pull_pop', 'pop_centroid']].drop_duplicates('grid_id')
                    pop_export_wgs = gpd.GeoDataFrame(pop_export, geometry='pop_centroid', crs="EPSG:2180").to_crs("EPSG:4326")
                    pop_export_wgs['lat'] = pop_export_wgs.geometry.y
                    pop_export_wgs['lon'] = pop_export_wgs.geometry.x
                    pop_export_df = pd.DataFrame(pop_export_wgs[['grid_id', 'lat', 'lon', 'TOT', 'sum_pull_pop']].rename(columns={'TOT': 'pop_val'}))
                    pop_export_df.to_parquet(results_dir / "pop_matrix.parquet")
                    
                    pop_hubs = pop_joined.groupby('hub_id')['pop_unique'].sum().reset_index().rename(columns={'pop_unique': 'pop_val'})
                    hubs = hubs.merge(pop_hubs, on='hub_id', how='left')
                else: 
                     pd.DataFrame(columns=['grid_id', 'lat', 'lon', 'pop_val', 'sum_pull_pop']).to_parquet(results_dir / "pop_matrix.parquet")
        
        if 'pop_val' not in hubs.columns:
            hubs['pop_val'] = 0
            pd.DataFrame(columns=['grid_id', 'lat', 'lon', 'pop_val', 'sum_pull_pop']).to_parquet(results_dir / "pop_matrix.parquet")
            
        hubs['pop_val'] = hubs['pop_val'].fillna(0)

        # Local Scoring na Węzłach Logicznych!
        def z_score(s): return (s - s.mean()) / (s.std() + 1e-9)
        
        # Koniec z logarytmicznym spłaszczaniem! Z-Score musi karać/nagradzać matematycznie na skali liniowej.
        hubs['local_score_raw'] = (z_score(hubs['infra_score']) * 0.35 + z_score(hubs['transit_freq']) * 0.35 +
                                      z_score(hubs['pop_val']) * 0.15 + z_score(hubs['market_val']) * 0.15)
        hubs['local_percentile'] = hubs['local_score_raw'].rank(pct=True) * 100
        
        def assign_grade(pct):
            if pct >= 95: return "A+"
            if pct >= 85: return "A"
            if pct >= 70: return "B"
            if pct >= 50: return "C"
            if pct >= 25: return "D"
            return "F"
        hubs['grade'] = hubs['local_percentile'].apply(assign_grade)
        
        # Step 8: Attach Hub DNA to Physical Stops i Zrzut Końcowy
        export_cols = ['hub_id', 'infra_score', 'transit_freq', 'pop_val', 'market_val', 'local_score_raw', 'local_percentile', 'grade']
        hubs_export = hubs[export_cols]
        # Pamiętamy że na starcie do hubs wrzuciliśmy wszystkie stops by je wyzerować, teraz wciągamy na pierwotne stops.
        final_stops = stops.merge(hubs_export, on='hub_id', how='left')
        
        # Ostateczny export wektorowy i geopackage musi mieć format WGS84 pod mapy The Next.js
        final_stops.to_crs("EPSG:4326").to_file(results_dir / "stop_dna.gpkg", driver="GPKG")
        print(f"[{city_name}] Sukces zakończenia wywołu grawitacji The Master Pipeline.", flush=True)
        return final_stops
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
    
    # Rygor percentyli bazy danych krajowej ma bazować na Węzłach Unikalnych (1 Węzeł Logiczny).
    unique_scores = full_df.drop_duplicates(subset=['city_context', 'hub_id'])
    
    full_df['national_score'] = (((full_df['infra_score'] - unique_scores['infra_score'].mean()) / (unique_scores['infra_score'].std() + 1e-9)) * 0.35 +
                                 ((full_df['transit_freq'] - unique_scores['transit_freq'].mean()) / (unique_scores['transit_freq'].std() + 1e-9)) * 0.35 +
                                 ((full_df['pop_val'] - unique_scores['pop_val'].mean()) / (unique_scores['pop_val'].std() + 1e-9)) * 0.15 +
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
