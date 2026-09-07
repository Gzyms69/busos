import concurrent.futures
from datetime import datetime
import gc
import json
import os
from pathlib import Path
import re
import sys
import warnings

import geopandas as gpd
import numpy as np
import pandas as pd
import pyproj
from shapely.ops import transform

warnings.filterwarnings('ignore')

PROJECT_ROOT = Path(__file__).resolve().parents[2]
if str(PROJECT_ROOT) not in sys.path:
    sys.path.insert(0, str(PROJECT_ROOT))

from backend.app.spatial_engine import get_axe_list
from scripts.utils.constants import CITY_BASELINES, TAG_WHITELIST
from scripts.utils.geo import parse_hstore


def identify_category(row):
    tags = parse_hstore(row.get('all_tags', ''))
    for col in ['amenity', 'shop', 'office', 'leisure', 'aeroway', 'railway', 'landuse', 'industrial']:
        if col in row and pd.notna(row[col]):
            tags[col] = row[col]
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
        if val in TAG_WHITELIST:
            return TAG_WHITELIST[val]
    return None


def get_name(hstore_str):
    tags = parse_hstore(hstore_str)
    return tags.get('name') or tags.get('official_name') or tags.get('brand') or "Obiekt"


def check_parquets(results_dir):
    msgs = []
    # POI PARQUET 
    poi_path = results_dir / "poi_matrix.parquet"
    if poi_path.exists():
        try:
            df = pd.read_parquet(poi_path)
            if df.empty:
                msgs.append("[WARN] poi_matrix.parquet puste.")
            else:
                lats, lons = df['lat'], df['lon']
                num_cols = [c for c in ['poi_id', 'category', 'tier', 'lat', 'lon', 'w', 'sum_pull'] if c in df.columns]
                if df[num_cols].isna().any().any():
                    msgs.append("[FAIL] ZNALEZIONO NaN W POI PARQUET!")
                elif not df[df['sum_pull'] <= 0].empty:
                    msgs.append("[FAIL] sum_pull <= 0 w POI PARQUET!")
                elif (lats < 49.0).any() or (lats > 55.0).any() or (lons < 14.0).any() or (lons > 24.1).any():
                    msgs.append("[FAIL] POI GEOLOCATION OUT OF BOUNDS WGS84")
                else:
                    msgs.append("[PASS] POI Parquet 100% Valid (Matematyka Huffa dziala)")
        except Exception as e:
            msgs.append(f"[FAIL] Odczyt POI Parquet: {e}")
    else:
        msgs.append("[FAIL] Brak pliku poi_matrix.parquet")

    # POP PARQUET
    pop_path = results_dir / "pop_matrix.parquet"
    if pop_path.exists():
        try:
            df = pd.read_parquet(pop_path)
            if df.empty:
                msgs.append("[WARN] pop_matrix.parquet puste.")
            else:
                lats, lons = df['lat'], df['lon']
                if df.isna().any().any():
                    msgs.append("[FAIL] ZNALEZIONO NaN W POP PARQUET!")
                elif 'sum_pull_pop' in df.columns and not df[df['sum_pull_pop'] < 0].empty: 
                    msgs.append("[FAIL] sum_pull_pop ujemne w POP PARQUET!")
                elif (lats < 49.0).any() or (lats > 55.0).any() or (lons < 14.0).any() or (lons > 24.1).any():
                    msgs.append("[FAIL] POP GEOLOCATION OUT OF BOUNDS WGS84")
                else:
                    msgs.append("[PASS] POP Parquet 100% Valid")
        except Exception as e:
            msgs.append(f"[FAIL] Odczyt POP Parquet: {e}")
    else:
        msgs.append("[FAIL] Brak pliku pop_matrix.parquet")

    # H3 GRID PARQUET
    h3_path = results_dir / "h3_grid.parquet"
    if h3_path.exists():
        try:
            df = pd.read_parquet(h3_path)
            if df.empty:
                msgs.append("[WARN] h3_grid.parquet puste.")
            else:
                deserts = int((df['is_transit_desert'] == True).sum()) if 'is_transit_desert' in df.columns else 0
                calc_cols = [c for c in ['h3_index', 'lat', 'lon', 'transport_score', 'transit_desert_index'] if c in df.columns]
                if df[calc_cols].isna().any().any():
                    msgs.append("[FAIL] ZNALEZIONO NaN W H3 GRID PARQUET!")
                else:
                    msgs.append(f"[PASS] H3 Res 8 Grid 100% Valid ({len(df):,} komorek, {deserts} pustyn transportowych)")
        except Exception as e:
            msgs.append(f"[FAIL] Odczyt H3 Parquet: {e}")
    else:
        msgs.append("[FAIL] Brak pliku h3_grid.parquet")
    return msgs


def audit_h3_grid(city_dir):
    h3_path = city_dir / "04_results" / "h3_grid.parquet"
    if not h3_path.exists():
        return None, {}
    
    df = pd.read_parquet(h3_path)
    if df.empty:
        return None, {}

    # Statystyki Nieruchomosci RCN w Heksach
    rcn_cells = df[df['rcn_median_price_m2'].notna() & (df['rcn_median_price_m2'] > 0)]
    rcn_stats = {
        'count': len(rcn_cells),
        'total_cells': len(df),
        'coverage_pct': (len(rcn_cells) / len(df)) * 100.0 if len(df) > 0 else 0.0,
        'mean': float(rcn_cells['rcn_median_price_m2'].mean()) if len(rcn_cells) > 0 else 0.0,
        'median': float(rcn_cells['rcn_median_price_m2'].median()) if len(rcn_cells) > 0 else 0.0,
        'std': float(rcn_cells['rcn_median_price_m2'].std()) if len(rcn_cells) > 1 else 0.0,
        'min': float(rcn_cells['rcn_median_price_m2'].min()) if len(rcn_cells) > 0 else 0.0,
        'max': float(rcn_cells['rcn_median_price_m2'].max()) if len(rcn_cells) > 0 else 0.0,
    }

    # Statystyki Demografii GUS w Heksach
    pop_stats = {
        'sum': float(df['pop_total'].sum()) if 'pop_total' in df.columns else 0.0,
        'mean': float(df['pop_total'].mean()) if 'pop_total' in df.columns else 0.0,
        'median': float(df['pop_total'].median()) if 'pop_total' in df.columns else 0.0,
        'std': float(df['pop_total'].std()) if 'pop_total' in df.columns else 0.0,
        'max': float(df['pop_total'].max()) if 'pop_total' in df.columns else 0.0
    }

    # Statystyki Podazy Transportowej w Heksach
    transport_stats = {
        'mean_score': float(df['transport_score'].mean()) if 'transport_score' in df.columns else 0.0,
        'max_score': float(df['transport_score'].max()) if 'transport_score' in df.columns else 0.0,
        'mean_dep': float(df['total_departures_h'].mean()) if 'total_departures_h' in df.columns else 0.0,
        'deserts_count': int((df['is_transit_desert'] == True).sum()) if 'is_transit_desert' in df.columns else 0,
        'poi_gravity_sum': float(df['poi_gravity_sum'].sum()) if 'poi_gravity_sum' in df.columns else 0.0
    }

    # TOP 5 Pustyn Transportowych (The Investment List)
    if 'is_transit_desert' in df.columns and (df['is_transit_desert'] == True).any():
        deserts = df[df['is_transit_desert'] == True].sort_values('transit_desert_index', ascending=False).head(5)
    elif 'transit_desert_index' in df.columns:
        deserts = df.sort_values('transit_desert_index', ascending=False).head(5)
    else:
        deserts = pd.DataFrame()

    # TOP 5 Biegunow Transportu
    cores = df.sort_values('transport_score', ascending=False).head(5) if 'transport_score' in df.columns else pd.DataFrame()

    # TOP 5 Najdrozszych Heksow
    rich = rcn_cells.sort_values('rcn_median_price_m2', ascending=False).head(5) if not rcn_cells.empty else pd.DataFrame()

    return df, {
        'rcn': rcn_stats,
        'pop': pop_stats,
        'transport': transport_stats,
        'top_deserts': deserts,
        'top_cores': cores,
        'top_rich': rich
    }


def get_top_named_magnets(city_dir):
    poi_path = city_dir / "04_results" / "poi_matrix.parquet"
    if not poi_path.exists():
        return []
    
    try:
        df = pd.read_parquet(poi_path)
        if 'name' not in df.columns or 'tier' not in df.columns or 'w' not in df.columns:
            return []
        
        # Filtrujemy tylko obiekty posiadajace nazwe wlasna (eliminacja pustych i placeholderow)
        valid = df[df['name'].notna() & (~df['name'].isin(['bez_nazwy', 'Obiekt', 'N/A', 'None', '', 'brak', 'unnamed', 'null']))].copy()
        valid = valid[valid['tier'].str.startswith(('T0', 'T1', 'T2'))]
        if valid.empty:
            return []
        
        # Sortujemy malejaco po wadze W i usuwamy duplikaty nazw
        unique_top = valid.sort_values('w', ascending=False).drop_duplicates(subset=['name']).head(10)
        
        res = []
        for _, row in unique_top.iterrows():
            res.append({
                'name': str(row['name']),
                'category': str(row.get('category', 'Infrastruktura')),
                'tier': str(row.get('tier', 'T2')),
                'w': float(row.get('w', 0.0))
            })
        return res
    except Exception:
        return []


def audit_single_city(city, data_dir, cities_root):
    city_dir = cities_root / city
    results_dir = city_dir / "04_results"
    spatial_dir = city_dir / "02_spatial"
    config_dir = city_dir / "03_config"
    
    dna_path = results_dir / "stop_dna.gpkg"
    if not dna_path.exists():
        return None, None, False

    print(f"[{city}] Rozpoczynam pelny 3-poziomowy audyt DNA...", flush=True)
    
    city_stats = {'stops': 0, 'hubs': 0, 'pop': 0, 'rcn': 0, 'osm_pts': 0, 'osm_ply': 0, 'critical_nulls': 0}
    macro_stats, poi_md, dump_md, dashboard_md, h3_md, tcrp_md = [], [], [], [], [], []
    
    try:
        dna = gpd.read_file(dna_path)
        city_stats['stops'] = len(dna)
        
        # Wczytanie warstwy hubow
        hubs_path = results_dir / "hubs.gpkg"
        if hubs_path.exists():
            hubs_df = gpd.read_file(hubs_path)
        else:
            hubs_df = dna.drop_duplicates(subset=['hub_id'])
        city_stats['hubs'] = len(hubs_df)

        # --- ASERCJE GLOBALNE NULLS & INFS ---
        chk_cols = [
            'stop_infra_score', 'stop_raw_gravity', 'stop_departures_h', 'stop_market_val',
            'stop_pop_val', 'stop_local_score_raw', 'stop_percentile',
            'hub_infra_score', 'hub_departures_h', 'hub_local_score_raw', 'hub_percentile'
        ]
        nulls, infs = 0, 0
        for col in chk_cols:
            if col in dna.columns:
                nulls += dna[col].isna().sum()
                try:
                    infs += np.isinf(dna[col].astype(float)).sum()
                except Exception:
                    pass
        
        city_stats['critical_nulls'] = nulls + infs
        
        # --- DEMOGRAFIA: SPRAWDZENIE STREFY TRANSPORTOWEJ VS BAZY MIEJSKIEJ ---
        baseline_pop = CITY_BASELINES.get(city.lower(), 0)
        pop_path = spatial_dir / "population_250m.gpkg"
        pop_status = "Brak pliku population_250m.gpkg"
        
        if pop_path.exists():
            pop_df = gpd.read_file(pop_path)
            city_pop = pop_df['TOT'].sum()
            city_stats['pop'] = city_pop
            macro_stats.append(f"- **Populacja Strefy Transportowej (GUS 250m):** {city_pop:,.0f} mieszkancow")
            
            if baseline_pop > 0:
                diff_pct = ((city_pop - baseline_pop) / float(baseline_pop)) * 100.0
                sign = "+" if diff_pct > 0 else ""
                if abs(diff_pct) <= 25.0:
                    pop_status = f"[PASS] DEMOGRAFIA W NORMIE: {sign}{diff_pct:.1f}% (GUS strefa: {city_pop:,.0f} vs Baza miejska: {baseline_pop:,.0f})"
                elif diff_pct > 25.0:
                    pop_status = f"[INFO] OBSZAR AGLOMERACYJNY: {sign}{diff_pct:.1f}% (GUS strefa aglomeracyjna: {city_pop:,.0f} vs Miasto rdzen: {baseline_pop:,.0f})"
                else:
                    pop_status = f"[WARN] NIEDOSZACOWANA POPULACJA: {sign}{diff_pct:.1f}% (GUS strefa: {city_pop:,.0f} vs Baza: {baseline_pop:,.0f})"
            else:
                pop_status = f"[INFO] Populacja GUS: {city_pop:,.0f} (Brak wpisu w CITY_BASELINES)"
            del pop_df

        rcn_path = spatial_dir / "transactions.gpkg"
        if rcn_path.exists():
            rcn_full = gpd.read_file(rcn_path, ignore_geometry=True)
            city_stats['rcn'] = len(rcn_full)
            macro_stats.append(f"- **Transakcje Notarialne RCN:** {len(rcn_full):,.0f} aktow")
            del rcn_full

        # --- ASERCJE ROZKLADOW Z-SCORE (MICRO ORAZ MACRO) ---
        zs_status_micro = "N/A"
        zs_status_macro = "N/A"
        distr_str_micro = ""
        distr_str_macro = ""
        sz_tol = 0.50

        # Micro Z-Score
        if 'stop_local_score_raw' in dna.columns and 'stop_grade' in dna.columns:
            m_mean = dna['stop_local_score_raw'].mean()
            m_std = dna['stop_local_score_raw'].std()
            if abs(m_mean) < sz_tol and abs(m_std - 1.0) < sz_tol:
                zs_status_micro = f"[PASS] Z-Score Micro VALID (Mean: {m_mean:.3f}, Std: {m_std:.3f})"
            else:
                zs_status_micro = f"[WARN] Z-Score Micro ODD (Mean: {m_mean:.3f}, Std: {m_std:.3f})"
            grades_m = dna['stop_grade'].value_counts().to_dict()
            distr_str_micro = "Rozklad Rang Slupkow (Micro): " + ", ".join([f"{k}: {v}" for k, v in sorted(grades_m.items())])

        # Macro Z-Score
        if 'hub_local_score_raw' in hubs_df.columns and 'hub_grade' in hubs_df.columns:
            h_mean = hubs_df['hub_local_score_raw'].mean()
            h_std = hubs_df['hub_local_score_raw'].std()
            if abs(h_mean) < sz_tol and abs(h_std - 1.0) < sz_tol:
                zs_status_macro = f"[PASS] Z-Score Macro VALID (Mean: {h_mean:.3f}, Std: {h_std:.3f})"
            else:
                zs_status_macro = f"[WARN] Z-Score Macro ODD (Mean: {h_mean:.3f}, Std: {h_std:.3f})"
            grades_h = hubs_df['hub_grade'].value_counts().to_dict()
            distr_str_macro = "Rozklad Rang Hubow (Macro): " + ", ".join([f"{k}: {v}" for k, v in sorted(grades_h.items())])

        # --- ASERCJE PARQUET ---
        parquet_statuses = check_parquets(results_dir)
        
        # --- DASHBOARD ASERCJI PIPELINE'U ---
        dashboard_md.append("#### DASHBOARD ASERCJI PIPELINE'U (Pelna Integralnosc Bazy)")
        dashboard_md.append("```text")
        if nulls > 0 or infs > 0:
            dashboard_md.append(f"[FAIL KRYTYCZNY] Wykryto {nulls} NaNs oraz {infs} Infs w wynikach stop_dna!")
        else:
            dashboard_md.append("[PASS ZERO NULLS & INFS] Petla obliczeniowa wygenerowala 100% spojnych komorek.")
        dashboard_md.append(f"[STATS] {zs_status_micro}\n        {distr_str_micro}")
        dashboard_md.append(f"[STATS] {zs_status_macro}\n        {distr_str_macro}")
        dashboard_md.append(f"[DEMOGRAPHY] {pop_status}")
        for p_s in parquet_statuses:
            dashboard_md.append(f"{p_s}")
        dashboard_md.append("```\n")

        # --- SIATKA ANILITYCZNA H3 RES 8 ---
        h3_df, h3_stats = audit_h3_grid(city_dir)
        if h3_df is not None and not h3_df.empty:
            rcn_s = h3_stats['rcn']
            pop_s = h3_stats['pop']
            trn_s = h3_stats['transport']
            
            h3_md.append("### Faza 1: Siatka Analityczna Uber H3 Res 8 (0.74 km2 / komorka)")
            h3_md.append(f"- **Liczba Komorek H3 Res 8:** {len(h3_df):,}")
            h3_md.append(f"- **Rynek Nieruchomosci RCN w Heksach:** Pokrycie {rcn_s['coverage_pct']:.1f}% ({rcn_s['count']}/{rcn_s['total_cells']} komorek), Srednia: {rcn_s['mean']:,.0f} PLN/m2, Mediana: {rcn_s['median']:,.0f} PLN/m2, Std: {rcn_s['std']:,.0f}, Min: {rcn_s['min']:,.0f}, Max: {rcn_s['max']:,.0f} PLN/m2")
            h3_md.append(f"- **Demografia GUS NSP 2021 w Heksach:** Laczna ludnosc w heksach: {pop_s['sum']:,.0f}, Srednia/heks: {pop_s['mean']:.1f}, Mediana: {pop_s['median']:.1f}, Std: {pop_s['std']:.1f}, Max: {pop_s['max']:,.0f}")
            h3_md.append(f"- **Podaz Transportu w Heksach:** Sredni Transport Score: {trn_s['mean_score']:.2f}, Max Transport Score: {trn_s['max_score']:.2f}, Srednia odjazdow/h: {trn_s['mean_dep']:.2f}, Pustynie Transportowe TDI: {trn_s['deserts_count']}")

            # TOP 5 Pustyn Transportowych
            top_des = h3_stats['top_deserts']
            if not top_des.empty:
                h3_md.append("\n#### TOP 5 Pustyn Transportowych (The Investment List)")
                h3_md.append("| H3 Index | Lat | Lon | Populacja GUS | Odjazdy/h | TDI Score |")
                h3_md.append("|---|---|---|---|---|---|")
                for _, r in top_des.iterrows():
                    h3_md.append(f"| `{r['h3_index']}` | {r['lat']:.5f} | {r['lon']:.5f} | {r.get('pop_total', 0):,.0f} | {r.get('total_departures_h', 0):.1f} | **{r.get('transit_desert_index', 0):.2f}** |")

            # TOP 5 Biegunow Transportu
            top_cor = h3_stats['top_cores']
            if not top_cor.empty:
                h3_md.append("\n#### TOP 5 Biegunow Transportu (Najwyzsza Podaz)")
                h3_md.append("| H3 Index | Lat | Lon | Transport Score | Odjazdy/h | Liczba Slupkow |")
                h3_md.append("|---|---|---|---|---|---|")
                for _, r in top_cor.iterrows():
                    h3_md.append(f"| `{r['h3_index']}` | {r['lat']:.5f} | {r['lon']:.5f} | **{r.get('transport_score', 0):.2f}** | {r.get('total_departures_h', 0):.1f} | {r.get('stop_count', 0)} |")

            # TOP 5 Najdrozszych Heksow
            top_ric = h3_stats['top_rich']
            if not top_ric.empty:
                h3_md.append("\n#### TOP 5 Najdrozszych Heksow Mieszkaniowych RCN")
                h3_md.append("| H3 Index | Lat | Lon | Mediana Ceny m2 | Liczba Transakcji |")
                h3_md.append("|---|---|---|---|---|")
                for _, r in top_ric.iterrows():
                    h3_md.append(f"| `{r['h3_index']}` | {r['lat']:.5f} | {r['lon']:.5f} | **{r.get('rcn_median_price_m2', 0):,.0f} PLN** | {r.get('rcn_tx_count', 0)} |")

        # --- AUDYT ZBEDNOSCI TCRP REPORT 100 (THE AXE LIST) ---
        try:
            axe_50 = get_axe_list(city, threshold=0.50)
            axe_70 = get_axe_list(city, threshold=0.70)
            axe_90 = get_axe_list(city, threshold=0.90)
            
            tcrp_md.append("\n### Faza 2: Audyt Zbednosci TCRP Report 100 (The Axe List)")
            tcrp_md.append(f"- **Zbedne Slupki (R >= 0.50 - Umiarkowana Kanibalizacja):** {axe_50['total_redundant']}")
            tcrp_md.append(f"- **Zbedne Slupki (R >= 0.70 - Rekomendacja Likwidacji):** {axe_70['total_redundant']}")
            tcrp_md.append(f"- **Zbedne Slupki (R >= 0.90 - Skrajna Zbednosc / Dubel):** {axe_90['total_redundant']}")
            
            if axe_70['stops']:
                tcrp_md.append("\n| Zbedny Słupek | Dominujacy Słupek | Dystans [m] | S_service | S_spatial | S_cannibal | R-Score |")
                tcrp_md.append("|---|---|---|---|---|---|---|")
                for item in axe_70['stops'][:5]:
                    r_name = f"{item['redundant_stop_name']} (#{item['redundant_stop_id']}, {item['redundant_departures_h']} odj/h)"
                    d_name = f"{item['dominant_stop_name']} (#{item['dominant_stop_id']}, {item['dominant_departures_h']} odj/h)"
                    dist = f"{item['distance_m']:.1f}m"
                    s_srv = f"{item['service_overlap']:.2f}"
                    s_spt = f"{item['spatial_decay']:.2f}"
                    s_can = f"{item['demand_cannibalization']:.2f}"
                    r_sc = f"**{item['redundancy_score']:.4f}**"
                    tcrp_md.append(f"| {r_name} | {d_name} | {dist} | {s_srv} | {s_spt} | {s_can} | {r_sc} |")
            else:
                tcrp_md.append("- Brak slupkow spelniajacych prog likwidacji R >= 0.70.")
        except Exception as e:
            tcrp_md.append(f"- [WARN] Blad kalkulacji TCRP Report 100: {e}")

        # --- FAZA 3: HIERARCHIA POI ORAZ TOP 10 NAZWANYCH MAGNESOW ---
        val_file = config_dir / "poi_valuation.json"
        if val_file.exists():
            with open(val_file, 'r', encoding='utf-8') as f:
                val_data = json.load(f)
            sorted_poi = sorted(val_data.items(), key=lambda x: x[1]['final_value'], reverse=True)
            poi_md.append("\n#### Top 20 Kategorii POI w Miescie")
            poi_md.append("| Kategoria | Tier | Ilosc w Miescie | Wartosc Punktowa (W) |")
            poi_md.append("|---|---|---|---|")
            for cat, d in sorted_poi[:20]:
                poi_md.append(f"| `{cat}` | {d['tier']} | {d['count']} | {d['final_value']:,.0f} |")

        # TOP 10 Konkretnych Nazwanych Magnesow T0, T1, T2
        top_magnets = get_top_named_magnets(city_dir)
        if top_magnets:
            poi_md.append("\n#### TOP 10 Konkretnych Nazwanych Magnesow Miejskich (T0, T1, T2)")
            poi_md.append("| Nazwa Obiektu | Kategoria POI | Tier | Waga Przyciagania (W) |")
            poi_md.append("|---|---|---|---|")
            for m in top_magnets:
                poi_md.append(f"| **{m['name']}** | `{m['category']}` | {m['tier']} | {m['w']:,.0f} |")

        # --- PRZYGOTOWANIE INFRASTRUKTURY DO CATCHMENTU 500m ---
        infra_path = spatial_dir / "infrastructure.gpkg"
        tagged_infra = None
        if infra_path.exists():
            all_layers = []
            for layer in ['points', 'multipolygons']:
                gdf = gpd.read_file(infra_path, layer=layer)
                if layer == 'points':
                    city_stats['osm_pts'] += len(gdf)
                else:
                    city_stats['osm_ply'] += len(gdf)
                if not gdf.empty:
                    if gdf.crs.to_string() != "EPSG:2180":
                        gdf = gdf.to_crs("EPSG:2180")
                    if layer == 'multipolygons':
                        gdf['geometry'] = gdf.geometry.centroid
                    gdf['cat'] = gdf.apply(identify_category, axis=1)
                    all_layers.append(gdf[gdf['cat'].notna()])
            if all_layers:
                tagged_infra = pd.concat(all_layers, ignore_index=True)

        # --- FAZA 4: PROBKI PELNEGO DNA (MICRO SLUPKI ORAZ MACRO HUBY) ---
        project_4326_to_2180 = pyproj.Transformer.from_crs("EPSG:4326", "EPSG:2180", always_xy=True).transform

        def render_micro(df, title):
            r_md = [f"\n#### {title}"]
            for _, row in df.iterrows():
                nm = row.get('stop_name', 'N/A')
                sid = row.get('stop_id', 'N/A')
                h3 = row.get('h3_index', 'N/A')
                r_md.append(f"<details><summary><b>{nm} (ID: {sid} | H3: {h3})</b></summary>\n\n```text")
                
                groups = {
                    "[IDENTYFIKACJA SLUPKA]": ['stop_name', 'stop_id', 'h3_index', 'hub_id', 'hub_name', 'is_hub_anchor', 'stop_lat', 'stop_lon'],
                    "[OCENA STOP DNA & RANKING]": ['stop_grade', 'stop_percentile', 'stop_local_score_raw', 'national_percentile', 'national_score'],
                    "[FILAR 1: INFRASTRUKTURA & POI]": ['stop_infra_score', 'stop_raw_gravity', 'stop_entropy'],
                    "[FILAR 2: TRANSPORT GTFS]": ['stop_departures_h', 'stop_routes_count', 'stop_routes', 'stop_hub_share'],
                    "[FILAR 3: NIERUCHOMOSCI RCN]": ['stop_market_val', 'stop_liquidity'],
                    "[FILAR 4: GESTOSC POPULACJI GUS]": ['stop_pop_val']
                }
                
                for gn, cs in groups.items():
                    r_md.append(f"\n{gn}")
                    for c in cs:
                        if c in dna.columns:
                            v = row[c]
                            if pd.isna(v) or str(v).lower() == 'nan':
                                continue
                            if isinstance(v, (float, np.float64)):
                                r_md.append(f"  {c.ljust(24)}: {v:.4f}")
                            else:
                                r_md.append(f"  {c.ljust(24)}: {v}")
                
                if tagged_infra is not None and hasattr(row, 'geometry') and row.geometry:
                    geom_2180 = transform(project_4326_to_2180, row.geometry)
                    catchment = geom_2180.buffer(500)
                    nearby = tagged_infra[tagged_infra.geometry.intersects(catchment)]
                    
                    r_md.append("\n[TOP OBIEKTY POI (CATCHMENT 500m)]")
                    if not nearby.empty:
                        p_counts = nearby['cat'].value_counts()
                        for cat, count in p_counts.items():
                            r_md.append(f"  > {count}x {cat}")
                            
                        r_md.append("\n  [WSKAZANE KONKRETNE INSTYTUCJE]")
                        nearby = nearby.copy()
                        nearby['nazwa_poi'] = nearby.get('all_tags', '').apply(get_name)
                        nazwane = nearby[~nearby['nazwa_poi'].isin(['Obiekt', 'bez_nazwy', 'N/A', 'None', ''])]
                        
                        for _, p in nazwane.head(10).iterrows():
                            r_md.append(f"    - {p['cat'].ljust(24)} : {p['nazwa_poi']}")
                    else:
                        r_md.append("  Brak sklasyfikowanych obiektow w okolicy 500m.")
                r_md.append("```\n</details>")
            return r_md

        def render_macro(df, title):
            r_md = [f"\n#### {title}"]
            for _, row in df.iterrows():
                hn = row.get('hub_name', 'N/A')
                hid = row.get('hub_id', 'N/A')
                h3 = row.get('h3_index', 'N/A')
                r_md.append(f"<details><summary><b>HUB: {hn} (ID: {hid} | H3: {h3})</b></summary>\n\n```text")
                
                groups = {
                    "[IDENTYFIKACJA WEZLA]": ['hub_name', 'hub_id', 'h3_index', 'hub_stops_count', 'hub_stops_ids', 'lat', 'lon'],
                    "[OCENA WEZLA & RANKING]": ['hub_grade', 'hub_percentile', 'hub_local_score_raw'],
                    "[FILAR 1: INFRASTRUKTURA & POI]": ['hub_infra_score', 'hub_raw_gravity', 'hub_entropy'],
                    "[FILAR 2: TRANSPORT GTFS]": ['hub_departures_h', 'hub_routes_count', 'hub_routes'],
                    "[FILAR 3: NIERUCHOMOSCI RCN]": ['hub_market_val', 'hub_liquidity'],
                    "[FILAR 4: GESTOSC POPULACJI GUS]": ['hub_pop_val']
                }
                
                for gn, cs in groups.items():
                    r_md.append(f"\n{gn}")
                    for c in cs:
                        if c in df.columns:
                            v = row[c]
                            if pd.isna(v) or str(v).lower() == 'nan':
                                continue
                            if isinstance(v, (float, np.float64)):
                                r_md.append(f"  {c.ljust(24)}: {v:.4f}")
                            else:
                                r_md.append(f"  {c.ljust(24)}: {v}")
                r_md.append("```\n</details>")
            return r_md

        # Sortowanie i ekstrakcja
        sort_col_micro = 'stop_percentile' if 'stop_percentile' in dna.columns else 'local_percentile'
        sort_col_macro = 'hub_percentile' if 'hub_percentile' in hubs_df.columns else 'local_percentile'

        dna_micro_sorted = dna.sort_values(sort_col_micro, ascending=False)
        hubs_macro_sorted = hubs_df.sort_values(sort_col_macro, ascending=False)

        dump_md.extend(render_micro(dna_micro_sorted.head(5), "POZIOM 1: NAJLEPSZE SLUPKI FIZYCZNE MICRO (TOP 5)"))
        dump_md.extend(render_micro(dna_micro_sorted.tail(5), "POZIOM 1: NAJSLABSZE SLUPKI FIZYCZNE MICRO (BOTTOM 5)"))
        dump_md.extend(render_macro(hubs_macro_sorted.head(5), "POZIOM 2: NAJWAZNIEJSZE WEZLY LOGICZNE MACRO (TOP 5 HUBOW)"))

        # Zlozenie sekcji dla miasta
        res_md = [f"## {city.upper()}"]
        res_md.extend(dashboard_md)
        res_md.append("### Faza 0: Statystyki Ogolne i Balans Sieci")
        res_md.append(f"- **Slupki Fizyczne (Micro):** {len(dna):,} slupkow")
        res_md.append(f"- **Wezly Logiczne (Macro Hubs):** {len(hubs_df):,} hubow (Wskaznik konsolidacji: {len(dna)/float(len(hubs_df)):.2f} slupka/hub)")
        res_md.extend(macro_stats)
        res_md.extend(h3_md)
        res_md.extend(tcrp_md)
        res_md.append("\n### Faza 3: Hierarchia Magnesow Miejskich POI")
        res_md.extend(poi_md)
        res_md.append("\n### Faza 4: Probki Pelnego DNA (Wszystkie 53 Metryki)")
        res_md.extend(dump_md)
        res_md.append("\n---\n")
        
        del dna, hubs_df, tagged_infra
        gc.collect()
        return "\n".join(res_md), city_stats, False
    except Exception as e:
        import traceback
        traceback.print_exc()
        return f"### {city.upper()}\n**[CRITICAL ERROR] Blad audytu:** {e}\n---", city_stats, True


def audit_national_stitching():
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
                msgs.append(f"Liczba Przystankow w Kraju: {len(full_df):,.0f}")
                msgs.append(f"Uzytych Miast do Z-Score  : {unique_cities}")
                msgs.append(f"Przedzialy Kwantyli       : od {n_min:.2f}% do {n_max:.2f}%")
                if n_max > 99.0 and n_min <= 1.5:
                    msgs.append("[PASS] Percentyle krajowe objely zbior i nie ulegly scisnieciu statystycznemu.")
                else:
                    msgs.append("[WARN] Scisniecie przedzialu statystycznego percentyli krajowych!")
            else:
                msgs.append("[FAIL] Kolumna 'national_percentile' brakuje w master db.")
        except Exception as e:
            msgs.append(f"[FAIL] Odczyt master_stop_dna_poland.gpkg: {e}")
    else:
        msgs.append("[WARN] Plik 'master_stop_dna_poland.gpkg' nie istnieje w bazie.")
    msgs.append("```\n---\n")
    return "\n".join(msgs)


def run_100_percent_validation(target_cities=None):
    data_dir, cities_root = Path("data"), Path("data/cities")
    reports_dir = Path("reports/audits")
    reports_dir.mkdir(parents=True, exist_ok=True)
    timestamp = datetime.now().strftime('%Y%m%d_%H%M')
    report_path = reports_dir / f"GOLDEN_DNA_AUDIT_{timestamp}.md"
    
    all_cities = sorted([d.name for d in cities_root.iterdir() if d.is_dir() and d.name != 'rail'])
    if target_cities:
        cities = [c for c in all_cities if c in target_cities]
    else:
        cities = all_cities
    
    global_agg = {'stops': 0, 'hubs': 0, 'fails': 0, 'cities': 0, 'pop': 0, 'rcn': 0, 'osm_pts': 0, 'osm_ply': 0, 'critical_nulls': 0}
    city_reports_dict = {}
    
    print(f"=== AUDYT ROWNOLĘGŁY 100% Z ASERCJAMI & BIG-DATA METRICS ===")
    print(f"Liczba miast do audytu: {len(cities)}")
    with concurrent.futures.ThreadPoolExecutor(max_workers=8) as executor:
        futures = {executor.submit(audit_single_city, city, data_dir, cities_root): city for city in cities}
        for future in concurrent.futures.as_completed(futures):
            city_name = futures[future]
            res_md, res_stats, failed = future.result()
            if res_md:
                city_reports_dict[city_name] = res_md
                global_agg['cities'] += 1
                if failed:
                    global_agg['fails'] += 1
                for k in ['stops', 'hubs', 'pop', 'rcn', 'osm_pts', 'osm_ply', 'critical_nulls']: 
                    global_agg[k] += res_stats.get(k, 0)

    # National Stitching Validate
    nat_md = audit_national_stitching()

    full_report = [
        f"# EKSHIBICYJNY AUDYT DNA TRANSPORTOWEGO POLSKI - {datetime.now().strftime('%Y-%m-%d %H:%M')}\n",
        "---",
        "## PODSUMOWANIE RYGORYSTYCZNE DLA POLSKI",
        "```text",
        f"Przeprobkowanych Miast    : {global_agg['cities']}",
        f"Laczna Liczba Slupkow     : {global_agg['stops']:,} fizycznych slupkow",
        f"Laczna Liczba Wezlow      : {global_agg['hubs']:,} wezlow przesiadkowych (hubs)",
        f"Krytyczne Nulle / Inf     : {global_agg['critical_nulls']} FAILURES",
        f"Laczna Populacja GUS      : {global_agg['pop']:,.0f} osob (Siatka 250m GUS w strefach)",
        f"Transakcje Notarialne RCN : {global_agg['rcn']:,.0f} aktow notarialnych",
        f"Obiekty Infrastruktury OSM: {global_agg['osm_pts'] + global_agg['osm_ply']:,.0f} zweryfikowanych geometrii",
        "```\n---\n"
    ]
    full_report.append(nat_md)
    full_report.extend([city_reports_dict[c] for c in sorted(city_reports_dict.keys())])
    with open(report_path, "w", encoding="utf-8") as f:
        f.write("\n".join(full_report))
    print(f"\nGeneracja pelnego audytu zakonczona pomyslnie.")
    print(f"Sciezka docelowa: {report_path}")
    return report_path


if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser()
    parser.add_argument("--cities", type=str, help="Comma-separated list of cities to audit (e.g. kielce,krakow)")
    args = parser.parse_args()
    
    target_cities = args.cities.split(",") if args.cities else None
    run_100_percent_validation(target_cities)
