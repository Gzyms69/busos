import geopandas as gpd
import pandas as pd
from pathlib import Path
import os
import argparse
import json
import tempfile

def get_data_dir():
    return Path(os.environ.get("PIPELINE_DATA_DIR", "data"))

def permanent_unify_city(city_name, data_dir):
    rcn_path = data_dir / "cities" / city_name / "02_spatial" / "transactions.gpkg"
    
    if not rcn_path.exists():
        print(f"    [SKIP] Nie znaleziono bazy transakcji dla {city_name}.")
        return False
    
    try:
        rcn = gpd.read_file(rcn_path)
        if rcn.empty:
            print("    [EMPTY] Baza jest pusta.")
            return True
            
        mapped = False
        if 'lok_pow_uzyt' not in rcn.columns:
            for col in ['pow_uzytkowa', 'pow_lokalu', 'nier_pow_uzyt', 'm2', 'powUzytkowaLokalu']:
                if col in rcn.columns:
                    rcn['lok_pow_uzyt'] = rcn[col]
                    mapped = True
                    break
        else:
            mapped = True
        
        if not mapped:
            print(f"    [ERR] Brak kolumny powierzchniowej w {city_name}.")
            return False

        rcn['tran_cena_brutto'] = pd.to_numeric(rcn['tran_cena_brutto'], errors='coerce')
        rcn['lok_pow_uzyt'] = pd.to_numeric(rcn['lok_pow_uzyt'], errors='coerce')
        
        mask = (rcn['lok_pow_uzyt'] > 5) & (rcn['tran_cena_brutto'] > 0)
        rcn['price_m2'] = pd.NA # Inicjalizacja jako NA (numeric-friendly)
        rcn.loc[mask, 'price_m2'] = rcn.loc[mask, 'tran_cena_brutto'] / rcn.loc[mask, 'lok_pow_uzyt']
        
        # 1. Rygorystyczny filtr jakościowy lokali mieszkalnych na wolnym rynku
        initial_count = len(rcn)
        if 'lok_funkcja' in rcn.columns:
            rcn = rcn[rcn['lok_funkcja'] == 'mieszkalna']
        if 'tran_rodzaj_trans' in rcn.columns:
            rcn = rcn[rcn['tran_rodzaj_trans'] == 'wolnyRynek']
        if initial_count != len(rcn):
            print(f"    [Filtr RCN] Odrzucono {initial_count - len(rcn)} transakcji niemieszkalnych/bonifikat.")

        # 2. Ścisłe typowanie daty do czystego typu kolumnowego DATE
        if 'dok_data' in rcn.columns:
            rcn['dok_data'] = pd.to_datetime(rcn['dok_data'].astype(str).str.slice(0, 10), errors='coerce').dt.date
            rcn = rcn[rcn['dok_data'].notna()]

        # 3. Jawna ekstrakcja współrzędnych WGS84 i indeksu Uber H3 (Res 8)
        import h3
        rcn_wgs = rcn.to_crs(epsg=4326)
        rcn['lon'] = rcn_wgs.geometry.x
        rcn['lat'] = rcn_wgs.geometry.y
        rcn['h3_index'] = rcn_wgs.geometry.apply(
            lambda pt: h3.latlng_to_cell(pt.y, pt.x, 8) if pt and not pt.is_empty else None
        )

        # KRYTYCZNA POPRAWKA: Wymuszamy typ numeryczny (float) przed zapisem
        rcn['price_m2'] = pd.to_numeric(rcn['price_m2'], errors='coerce')
        valid_prices = rcn.loc[rcn['price_m2'].notna(), 'price_m2']
        
        avg_price = 0
        median_price = 0
        min_allowed = 0
        max_allowed = 0
        
        if not valid_prices.empty:
            median_price = valid_prices.median()
            max_allowed = median_price * 30
            min_allowed = 500
            
            trimmed_prices = valid_prices[(valid_prices >= min_allowed) & (valid_prices <= max_allowed)]
            avg_price = trimmed_prices.mean()
        
        # ATOMIC WRITE: Zapis do pliku tymczasowego GPKG, potem atomowy rename
        tmp_fd, tmp_path = tempfile.mkstemp(suffix='.gpkg', dir=rcn_path.parent)
        os.close(tmp_fd)
        try:
            rcn.to_file(tmp_path, driver="GPKG", layer="transactions")
            os.replace(tmp_path, rcn_path)
        except Exception:
            if os.path.exists(tmp_path):
                os.unlink(tmp_path)
            raise

        # Zapis do Parquet dla DuckDB (z polami lat, lon, h3_index)
        parquet_path = rcn_path.parent / "transactions.parquet"
        rcn_parquet = pd.DataFrame(rcn.drop(columns=['geometry']))
        rcn_parquet.to_parquet(parquet_path, index=False, engine='pyarrow')
        print(f"    [✓] Zapisano transactions.parquet ({len(rcn_parquet)} rekordów).")
        
        # Zapis zagregowanych statystyk do osobnego pliku
        stats_path = rcn_path.parent / "rcn_stats.json"
        with open(stats_path, "w", encoding="utf-8") as f:
            json.dump({
                "city": city_name,
                "total": len(rcn),
                "valid": len(valid_prices),
                "median_price_m2": round(median_price, 2),
                "trimmed_mean_m2": round(avg_price, 2),
                "min_valid": round(min_allowed, 2) if not valid_prices.empty else 0,
                "max_allowed": round(max_allowed, 2) if not valid_prices.empty else 0
            }, f, indent=2)
        
        metrics = {
            "city": city_name,
            "trans_total": len(rcn),
            "trans_valid": len(valid_prices),
            "avg_price_m2": round(avg_price, 0),
            "median_price_m2": round(median_price, 0)
        }
        print(f"__PIPELINE_METRICS__={json.dumps(metrics)}")
        return True
    except Exception as e:
        print(f"    [ERR] {city_name}: {e}")
        return False

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--city", help="Miasto do unifikacji")
    parser.add_argument("--all", action="store_true", help="Unifikuj wszystkie miasta")
    parser.add_argument("--force", action="store_true")
    args = parser.parse_args()

    data_dir = get_data_dir()
    if args.city:
        permanent_unify_city(args.city, data_dir)
    elif args.all:
        cities_dir = data_dir / "cities"
        for c in sorted(cities_dir.iterdir()):
            if c.is_dir() and (c / "02_spatial" / "transactions.gpkg").exists():
                permanent_unify_city(c.name, data_dir)
    else:
        parser.print_help()

if __name__ == "__main__":
    main()
