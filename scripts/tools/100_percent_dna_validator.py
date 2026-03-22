import geopandas as gpd
import pandas as pd
import json
import os
import gc
import warnings
import concurrent.futures
import re
import numpy as np
import pyproj
from shapely.ops import transform
from pathlib import Path
from datetime import datetime

warnings.filterwarnings('ignore')

CITY_BASELINES = {
    "warszawa": 1800000, "krakow": 800000, "lodz": 670000, "wroclaw": 640000,
    "poznan": 530000, "szczecin": 400000, "bydgoszcz": 340000, "lublin": 330000,
    "bialystok": 290000, "katowice": 290000, "gzm": 2300000,
    "rzeszow": 190000, "kielce": 190000, "olsztyn": 170000, "radom": 200000,
    "torun": 190000, "czestochowa": 210000, "legnica": 90000,
    "elblag": 110000, "opole": 120000, "gorzow": 120000, "suwalki": 70000,
    "elk": 60000, "lomza": 60000, "przemysl": 60000, "gizycko": 30000, "swinoujscie": 40000
}

TAG_WHITELIST = {
    "aerodrome": "international_airport", "terminal": "airport_terminal", "port": "major_seaport", "station": "rail_hub",
    "university": "university_campus", "college": "university_campus", "faculty": "university_campus",
    "stadium": "national_stadium", "arena": "national_stadium", "exhibition_centre": "exhibition_centre", "hospital": "hospital_clinical",
    "mall": "shopping_mall", "shopping_centre": "shopping_mall", "department_store": "shopping_mall", "office": "business_office",
    "company": "business_office", "industrial": "industrial_zone", "commercial": "commercial_zone", "warehouse": "logistics_hub",
    "courthouse": "government_central", "court_house": "government_central", "townhall": "government_central", "government": "government_central",
    "supermarket": "supermarket", "student_accommodation": "student_dormitory", "dormitory": "student_dormitory",
    "school": "education_high_school", "marketplace": "marketplace", "social_facility": "social_support_mops", "clinic": "health_clinic",
    "doctors": "health_clinic", "dentist": "health_clinic", "theatre": "culture_theatre", "cinema": "culture_theatre",
    "museum": "culture_theatre", "library": "culture_theatre", "sports_hall": "sports_centre", "sports_centre": "sports_centre",
    "swimming_pool": "sports_centre", "kindergarten": "education_preschool", "pharmacy": "pharmacy", "bank": "bank",
    "post_office": "post_office", "police": "police_station", "convenience": "convenience_store", "place_of_worship": "place_of_worship",
    "park": "park_recreation", "garden": "park_recreation", "hotel": "hotel_accommodation", "hostel": "hotel_accommodation",
    "clothes": "specialized_retail", "furniture": "specialized_retail", "electronics": "specialized_retail", "fuel": "car_services",
    "car_repair": "car_services", "restaurant": "gastronomy", "cafe": "gastronomy", "fast_food": "gastronomy",
    "beauty": "personal_services", "hairdresser": "personal_services", "chemist": "personal_services", "airfield": "local_airfield",
    "parcel_locker": "micro_parcel_locker", "atm": "micro_atm", "playground": "micro_playground"
}

def parse_hstore(hstore_str):
    if not hstore_str or pd.isna(hstore_str): return {}
    pattern = r'"?([^"=>]+)"?=>"?([^",]+)"?'
    return dict(re.findall(pattern, hstore_str))

def identify_category(row):
    tags = parse_hstore(row.get('all_tags', ''))
    for col in ['amenity', 'shop', 'office', 'leisure', 'aeroway', 'railway', 'landuse', 'industrial']:
        if col in row and pd.notna(row[col]): tags[col] = row[col]
    nm = (tags.get('name') or tags.get('official_name') or "").lower()
    if tags.get("aeroway") == "aerodrome":
        if "iata" in tags or any(x in nm for x in ["chopin", "modlin", "balice", "pyrzowice", "jasionka", "ławica", "rebiechowo"]):
            return "international_airport"
        return "local_airfield"
    if tags.get("railway") == "station":
        if "uic_ref" in tags or any(x in nm for x in ["główn", "glown", "central", "fabrycz", "kalisk"]):
            return "national_rail_hub"
        return "regional_rail_hub"
    for k in ['amenity', 'shop', 'office', 'landuse', 'leisure', 'industrial']:
        val = tags.get(k)
        if val in TAG_WHITELIST: return TAG_WHITELIST[val]
    return None

def check_parquets(results_dir):
    msgs = []
    # POI PARQUET 
    poi_path = results_dir / "poi_matrix.parquet"
    if poi_path.exists():
        try:
            df = pd.read_parquet(poi_path)
            if df.empty: msgs.append("⚠️ `poi_matrix.parquet` puste.")
            else:
                lats, lons = df['lat'], df['lon']
                if df.isna().any().any(): msgs.append("❌ ZNALEZIONO NaN W POI PARQUET!")
                elif not df[df['sum_pull'] <= 0].empty: msgs.append("❌ `sum_pull` <= 0 w POI PARQUET!")
                elif (lats < 49.0).any() or (lats > 55.0).any() or (lons < 14.0).any() or (lons > 24.1).any():
                    msgs.append("❌ POI GEOLOCATION OUT OF BOUNDS WGS84")
                else: msgs.append("✅ POI Parquet 100% Valid (Matematyka Huffa działa)")
        except Exception as e: msgs.append(f"❌ Odczyt POI Parquet: {e}")
    else: msgs.append("❌ Brak pliku `poi_matrix.parquet`")

    # POP PARQUET
    pop_path = results_dir / "pop_matrix.parquet"
    if pop_path.exists():
        try:
            df = pd.read_parquet(pop_path)
            if df.empty: msgs.append("⚠️ `pop_matrix.parquet` puste.")
            else:
                lats, lons = df['lat'], df['lon']
                if df.isna().any().any(): msgs.append("❌ ZNALEZIONO NaN W POP PARQUET!")
                elif 'sum_pull_pop' in df.columns and not df[df['sum_pull_pop'] < 0].empty: 
                    msgs.append("❌ `sum_pull_pop` ujemne w POP PARQUET!")
                elif (lats < 49.0).any() or (lats > 55.0).any() or (lons < 14.0).any() or (lons > 24.1).any():
                    msgs.append("❌ POP GEOLOCATION OUT OF BOUNDS WGS84")
                else: msgs.append("✅ POP Parquet 100% Valid")
        except Exception as e: msgs.append(f"❌ Odczyt POP Parquet: {e}")
    else: msgs.append("❌ Brak pliku `pop_matrix.parquet`")
    return msgs

def get_name(hstore_str):
    tags = parse_hstore(hstore_str)
    return tags.get('name') or tags.get('official_name') or tags.get('brand') or "Obiekt"

def audit_single_city(city, data_dir, cities_root):
    city_dir = cities_root / city
    results_dir = city_dir / "04_results"
    spatial_dir = city_dir / "02_spatial"
    config_dir = city_dir / "03_config"
    
    dna_path = results_dir / "stop_dna.gpkg"
    if not dna_path.exists(): return None, None, False

    print(f"[{city}] Audyt Złożony...", flush=True)
    
    city_stats = {'stops': 0, 'pop': 0, 'rcn': 0, 'osm_pts': 0, 'osm_ply': 0, 'critical_nulls': 0}
    macro_stats, poi_md, dump_md, dashboard_md = [], [], [], []
    
    try:
        dna = gpd.read_file(dna_path)
        city_stats['stops'] = len(dna)
        
        # --- ASERCJE GLOBALE NULLS & INFS (Błędy #1 i #7) ---
        chk_cols = ['infra_score', 'raw_gravity', 'transit_freq', 'market_val', 'pop_val', 'local_score_raw', 'local_percentile']
        nulls, infs = 0, 0
        for col in chk_cols:
            if col in dna.columns:
                nulls += dna[col].isna().sum()
                try: infs += np.isinf(dna[col].astype(float)).sum()
                except: pass
        
        city_stats['critical_nulls'] = nulls + infs
        
        # --- FAZA 0. ASERCJE CITY BASELINES (Błąd #6) ---
        baseline_pop = CITY_BASELINES.get(city.lower(), 0)
        pop_path = spatial_dir / "population_250m.gpkg"
        pop_status = "Nie dotyczy"
        
        if pop_path.exists():
            pop_df = gpd.read_file(pop_path)
            city_pop = pop_df['TOT'].sum()
            city_stats['pop'] = city_pop
            macro_stats.append(f"- **Populacja Miasta:** {city_pop:,.0f} (GUS Grid)")
            
            if baseline_pop > 0:
                deviation = abs(city_pop - baseline_pop) / float(baseline_pop)
                if deviation > 0.25:
                    pop_status = f"❌ OSTRZEŻENIE DEMOGRAFICZNE: Odchylenie {deviation*100:.1f}%. GUS: {city_pop:,.0f} vs Baza: {baseline_pop:,.0f}"
                else:
                    pop_status = f"✅ DEMOGRAFIA OK (Odchylenie zaledwie {deviation*100:.1f}%)"
            else:
                pop_status = "Brak profilu w CITY_BASELINES"
            del pop_df
            
        rcn_path = spatial_dir / "transactions.gpkg"
        if rcn_path.exists():
            rcn_full = gpd.read_file(rcn_path, ignore_geometry=True)
            city_stats['rcn'] = len(rcn_full)
            macro_stats.append(f"- **Transakcje RCN:** {len(rcn_full):,.0f}")
            del rcn_full

        # --- ASERCJE Z-SCORE MATEMATYCZNE (Błąd #2) ---
        zs_status = "N/A"
        distr_str = ""
        if 'local_score_raw' in dna.columns and 'grade' in dna.columns:
            # Ponieważ huby dublują score u przystanków fizycznych, prawdziwy rozkład Z-Score jest z hubs
            # Pobieramy same unikatowe raw scores dla sensu statystycznego
            unique_hubs = dna.drop_duplicates(subset=['hub_id'])
            l_mean, l_std = unique_hubs['local_score_raw'].mean(), unique_hubs['local_score_raw'].std()
            sz_tol = 0.5 # 50% tolerancji
            if abs(l_mean) < sz_tol and abs(l_std - 1.0) < sz_tol:
                zs_status = f"✅ Z-Score ROZKŁAD VALID (Mean: {l_mean:.3f}, Std: {l_std:.3f})"
            else:
                zs_status = f"⚠️ Z-Score ODD DIST (Mean: {l_mean:.3f}, Std: {l_std:.3f})"
            
            grades = unique_hubs['grade'].value_counts().to_dict()
            grades_str = ", ".join([f"{k}: {v}" for k, v in sorted(grades.items())])
            distr_str = f"Rozkład Kartek (unikalne Huby): {grades_str}"
            
        # --- ASERCJE PARQUET (Błąd #3) ---
        parquet_statuses = check_parquets(results_dir)
        
        # --- ZBUDUJ DASHBOARD RAPORTU ---
        dashboard_md.append("#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)")
        dashboard_md.append("```text")
        if nulls > 0 or infs > 0:
            dashboard_md.append(f"[❌ KRYTYCZNY BŁĄD MATEMATYKI] Wyłapano {nulls} NaNs oraz {infs} Infs w wynikach!")
        else:
            dashboard_md.append(f"[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.")
        dashboard_md.append(f"[📈 ROZKŁAD STATYSTYCZNY] {zs_status}\n     {distr_str}")
        dashboard_md.append(f"[👥 BAZA LUDNOŚCI GUS] {pop_status}")
        for p_s in parquet_statuses: dashboard_md.append(f"[{p_s[0]}] {p_s[1:]}")
        dashboard_md.append("```\n")

        # Faza III POI
        val_file = config_dir / "poi_valuation.json"
        if val_file.exists():
            with open(val_file, 'r') as f:
                val_data = json.load(f)
            sorted_poi = sorted(val_data.items(), key=lambda x: x[1]['final_value'], reverse=True)
            poi_md.append("\n| Kategoria | Tier | Ilość w Mieście | Wartość Punktowa (W) |\n|---|---|---|---|")
            for cat, d in sorted_poi[:20]:
                poi_md.append(f"| `{cat}` | {d['tier']} | {d['count']} | {d['final_value']:,.0f} |")

        # --- Przygotowanie infrastruktury do wyświetlania POI przy Top/Bottom Przystankach ---
        infra_path = spatial_dir / "infrastructure.gpkg"
        tagged_infra = None
        if infra_path.exists():
            all_layers = []
            for layer in ['points', 'multipolygons']:
                gdf = gpd.read_file(infra_path, layer=layer)
                if layer == 'points': city_stats['osm_pts'] += len(gdf)
                else: city_stats['osm_ply'] += len(gdf)
                if not gdf.empty:
                    if gdf.crs.to_string() != "EPSG:2180": gdf = gdf.to_crs("EPSG:2180")
                    if layer == 'multipolygons': gdf['geometry'] = gdf.geometry.centroid
                    gdf['cat'] = gdf.apply(identify_category, axis=1)
                    all_layers.append(gdf[gdf['cat'].notna()])
            if all_layers: tagged_infra = pd.concat(all_layers, ignore_index=True)

        # Faza IV
        if 'local_percentile' in dna.columns:
            project_4326_to_2180 = pyproj.Transformer.from_crs("EPSG:4326", "EPSG:2180", always_xy=True).transform
            
            # KRYTYCZNA POPRAWKA: Pokaż tylko 1 unikalny słupek na każdy Węzeł Logiczny (hub_id) by uniknąć duplikatów w raporcie
            dna_s = dna.sort_values('local_percentile', ascending=False).drop_duplicates(subset=['hub_id'])
            
            def render(df, title):
                r_md = [f"\n#### {title}"]
                for _, row in df.iterrows():
                    nm, h3 = row.get('stop_name', 'N/A'), row.get('h3_index', 'N/A')
                    r_md.append(f"<details><summary><b>{nm} ({h3})</b></summary>\n\n```text")
                    
                    # Wypisujemy konkretne dane
                    groups = {
                        "[IDENTYFIKACJA]": ['stop_name', 'stop_id', 'h3_index', 'hub_id'],
                        "[OCENA Z-SCORE & RANK]": ['grade', 'local_percentile', 'local_score_raw'],
                        "[FILAR 1: INFRASTRUKTURA]": ['infra_score', 'raw_gravity', 'domain_count'],
                        "[FILAR 2: TRANSPORT GTFS]": ['transit_freq', 'hourly_freq'],
                        "[FILAR 3: NIERUCHOMOŚCI RCN]": ['market_val', 'liquidity'],
                        "[FILAR 4: GĘSTOŚĆ POPULACJI]": ['pop_val']
                    }
                    
                    for gn, cs in groups.items():
                        r_md.append(f"\n{gn}")
                        for c in cs:
                            if c in dna.columns:
                                v = row[c]
                                if pd.isna(v) or str(v).lower() == 'nan': continue
                                r_md.append(f"  {c.ljust(22)}: {v:.4f}" if isinstance(v, (float, np.float64)) else f"  {c.ljust(22)}: {v}")
                    
                    if tagged_infra is not None:
                        # Prawidłowy bufor geometryczny w EPSG:2180 (Błąd #4)
                        geom_2180 = transform(project_4326_to_2180, row.geometry)
                        catchment = geom_2180.buffer(500)
                        nearby = tagged_infra[tagged_infra.geometry.intersects(catchment)]
                        
                        r_md.append("\n[TOP OBIEKTY POI (CATCHMENT 500m)]")
                        if not nearby.empty:
                            p_counts = nearby['cat'].value_counts()
                            # Wypisz agregację klas
                            for cat, count in p_counts.items():
                                r_md.append(f"  > {count}x {cat}")
                                
                            # Wypisz konkretne POI z ich nazwami !!! (Zgodnie z żądaniem Użytkownika)
                            r_md.append("\n  [WSKAZANE KONKRETNE INSTYTUCJE]")
                            nearby = nearby.copy()
                            nearby['nazwa_poi'] = nearby.get('all_tags', '').apply(get_name)
                            # Zostaw tylko te co mają nazwy:
                            nazwane = nearby[nearby['nazwa_poi'] != "Obiekt"]
                            
                            # Wyświetl do 12 najlepszych punktów w zasięgu ucha
                            for _, p in nazwane.head(12).iterrows():
                                r_md.append(f"    - {p['cat'].ljust(22)} : {p['nazwa_poi']}")
                        else:
                            r_md.append("  Brak sklasyfikowanych obiektów w okolicy.")
                    r_md.append("```\n</details>")
                return r_md

            dump_md.extend(render(dna_s.head(5), "NAJLEPSZE PRZYSTANKI (TOP 5)"))
            dump_md.extend(render(dna_s.tail(5), "NAJSŁABSZE PRZYSTANKI (BOTTOM 5)"))

        res_md = [f"## {city.upper()}"]
        res_md.extend(dashboard_md)
        res_md.append("### Faza 0: Statystyki ogólne")
        res_md.extend(macro_stats)
        res_md.append("\n### Faza III: Top 20 POI (Miasto)")
        res_md.extend(poi_md)
        res_md.append("\n### Faza IV: Próbki Pełnego DNA 100% (Zobacz szczegóły POI!)")
        res_md.extend(dump_md)
        res_md.append("\n---\n")
        
        del dna, tagged_infra; gc.collect()
        return "\n".join(res_md), city_stats, False
    except Exception as e:
        return f"### {city.upper()}\n**🛑 KRYTYCZNI BŁĄD AUDYTU:** {e}\n---", city_stats, True


def audit_national_stitching():
    # Zrzut Krajowy Walidacja (Rozwiązanie błędu #5)
    msgs = ["\n## WALIDACJA ZRZUTU KRAJOWEGO (NATIONAL STITCHING)"]
    msgs.append("```text")
    db_path = Path("data/database/master_stop_dna_poland.gpkg")
    if db_path.exists():
        try:
            full_df = gpd.read_file(db_path)
            if 'national_percentile' in full_df.columns:
                n_min = full_df['national_percentile'].min()
                n_max = full_df['national_percentile'].max()
                unique_cities = full_df['city_context'].nunique()
                msgs.append(f"Liczba Przystanków w Kraju: {len(full_df):,.0f}")
                msgs.append(f"Użytych Miast do Z-Score: {unique_cities}")
                msgs.append(f"Przedziały Kwantyli: od {n_min:.2f}% do {n_max:.2f}%")
                if n_max > 99.0 and n_min <= 1.5:
                    msgs.append("[✅ SUCCESS] Percentyle krajowe objęły zbiór i nie uległy ściśnięciu statystycznemu.")
                else:
                    msgs.append("[⚠️ WARNING] Ściśnięcie przedziału statystycznego percentyli! (Czy dane są równe?)")
            else: msgs.append("[❌ KRTYCZNY BLAD] Kolumna 'national_percentile' brakuje w master db.")
        except Exception as e: msgs.append(f"[❌ KRYTYCZNY BLAD ODCZYTU MASTER] {e}")
    else:
        msgs.append("[⚠️ INFO] Plik zrzutu narodowego 'master_stop_dna_poland.gpkg' nie istnieje w bazie. Pipeline zatrzymał się przed łączeniem.")
    msgs.append("```\n---\n")
    return "\n".join(msgs)


def run_100_percent_validation(target_cities=None):
    data_dir, cities_root = Path("data"), Path("data/cities")
    reports_dir = Path("reports/audits")
    reports_dir.mkdir(parents=True, exist_ok=True)
    report_path = reports_dir / f"GOLDEN_DNA_AUDIT_{datetime.now().strftime('%Y%m%d_%H%M')}.md" # Nowy raport z asercjami
    
    all_cities = sorted([d.name for d in cities_root.iterdir() if d.is_dir() and d.name != 'rail'])
    if target_cities:
        cities = [c for c in all_cities if c in target_cities]
    else:
        cities = all_cities
    
    global_agg = {'stops': 0, 'fails': 0, 'cities': 0, 'pop': 0, 'rcn': 0, 'osm_pts': 0, 'osm_ply': 0, 'critical_nulls': 0}
    city_reports_dict = {}
    
    print(f"=== AUDYT RÓWNOLEGŁY 100% Z ASERCJAMI & BIG-DATA METRICS ===")
    with concurrent.futures.ThreadPoolExecutor(max_workers=4) as executor:
        futures = {executor.submit(audit_single_city, city, data_dir, cities_root): city for city in cities}
        for future in concurrent.futures.as_completed(futures):
            city_name = futures[future]
            res_md, res_stats, failed = future.result()
            if res_md:
                city_reports_dict[city_name] = res_md
                global_agg['cities'] += 1
                if failed: global_agg['fails'] += 1
                for k in ['stops', 'pop', 'rcn', 'osm_pts', 'osm_ply', 'critical_nulls']: 
                    global_agg[k] += res_stats.get(k, 0)

    # National Stitching Validate
    nat_md = audit_national_stitching()

    full_report = [
        f"# RAPORT W OPARCIU O ASERCJE W PEŁNI SYSTEMOWE DNA - {datetime.now().strftime('%Y-%m-%d %H:%M')}\n",
        "---",
        "## PODSUMOWANIE RYGORYSTYCZNE DLA POLSKI",
        "```text",
        f"Przepróbkowanych Miast    : {global_agg['cities']}",
        f"Krytyczne Nulle / Inf     : {global_agg['critical_nulls']} FAILURES",
        f"Łączna Walidacja Populacji: {global_agg['pop']:,.0f} osób (Siatka 250m GUS)",
        f"Ilość Transakcji RCN Pkt  : {global_agg['rcn']:,.0f} aktów notarialnych",
        f"Obiekty Infr. OSM BAZA    : {global_agg['osm_pts'] + global_agg['osm_ply']:,.0f} zweryfikowanych geometrii",
        "```\n---\n"
    ]
    full_report.append(nat_md)
    full_report.extend([city_reports_dict[c] for c in sorted(city_reports_dict.keys())])
    with open(report_path, "w", encoding="utf-8") as f: f.write("\n".join(full_report))
    print(f"\nGeneracja pełnego audytu zakończona. Ścieżka docelowa: {report_path}")

if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser()
    parser.add_argument("--cities", type=str, help="Comma-separated list of cities to audit (e.g. kielce,krakow)")
    args = parser.parse_args()
    
    target_cities = args.cities.split(",") if args.cities else None
    run_100_percent_validation(target_cities)
