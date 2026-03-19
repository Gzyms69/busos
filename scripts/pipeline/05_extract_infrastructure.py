import subprocess
import geopandas as gpd
from pathlib import Path
import time
import os
import argparse
import sys

# Konfiguracja ścieżek globalnych
PBF_SOURCE = Path("data/poland/osm/poland-latest.osm.pbf")
CITIES_ROOT = Path("data/cities")
OSMCONF = Path("config/osmconf.ini")

def extract_city_infrastructure(city_dir, force=False):
    city_name = city_dir.name
    spatial_dir = city_dir / "02_spatial"
    stops_file = spatial_dir / "stops.gpkg"
    output_gpkg = spatial_dir / "infrastructure.gpkg"
    temp_pbf = spatial_dir / "temp_bbox.osm.pbf"
    
    if not stops_file.exists():
        print(f"[SKIP] {city_name}: Brak bazy przystanków w 02_spatial")
        return
        
    if output_gpkg.exists() and not force:
        print(f"[SKIP] {city_name}: Infrastruktura już istnieje. Użyj --force aby nadpisać.")
        return

    print(f"\n--- EKSTRAKCJA INFRASTRUKTURY: {city_name.upper()} ---")
    start_time = time.time()
    
    try:
        # 1. Pobranie BBOX z przystanków
        gdf = gpd.read_file(stops_file)
        minx, miny, maxx, maxy = gdf.total_bounds
        # Lekki bufor (0.01 stopnia ~ 1km) dla pewności pokrycia stref
        bbox_str = f"{minx-0.01},{miny-0.01},{maxx+0.01},{maxy+0.01}"
        
        # 2. OSMIUM: Wycięcie PBF dla BBOX
        print(f"  [1/2] Osmium: Wycinanie obszaru...")
        subprocess.run([
            "osmium", "extract",
            "-b", bbox_str,
            str(PBF_SOURCE),
            "-o", str(temp_pbf),
            "--overwrite"
        ], check=True, capture_output=True)
        
        # 3. OGR2OGR: Konwersja do GPKG (używając OSMCONF)
        print(f"  [2/2] OGR2OGR: Generowanie bazy GPKG...")
        # Ustawiamy zmienną środowiskową dla OGR, aby widział plik konfiguracyjny
        os.environ["OSM_CONFIG_FILE"] = str(OSMCONF)
        
        subprocess.run([
            "ogr2ogr", "-f", "GPKG", str(output_gpkg), str(temp_pbf),
            "-gt", "65536", 
            "-nlt", "PROMOTE_TO_MULTI",
            "-lco", "GEOMETRY_NAME=geometry",
            "-skipfailures"
        ], check=True, capture_output=True)
        
        # Czyszczenie
        if temp_pbf.exists(): temp_pbf.unlink()
        
        duration = time.time() - start_time
        size = output_gpkg.stat().st_size / (1024*1024)
        print(f"  [OK] Sukces! Czas: {duration:.1f}s | Rozmiar: {size:.1f} MB")
        
    except subprocess.CalledProcessError as e:
        print(f"  [ERR] Błąd procesu zewnętrznego: {e.stderr.decode()}")
    except Exception as e:
        print(f"  [ERR] Błąd krytyczny: {e}")

def main():
    parser = argparse.ArgumentParser(description="Ekstrakcja infrastruktury OSM dla aglomeracji.")
    parser. BourneArgument = parser.add_argument("--city", help="Nazwa konkretnego miasta do przetworzenia")
    parser.add_argument("--force", action="store_true", help="Nadpisz istniejące pliki")
    args = parser.parse_args()

    if not PBF_SOURCE.exists():
        print(f"BŁĄD: Brak źródłowego pliku PBF: {PBF_SOURCE}")
        sys.exit(1)

    if not OSMCONF.exists():
        print(f"BŁĄD: Brak pliku konfiguracyjnego: {OSMCONF}")
        sys.exit(1)

    if args.city:
        city_dir = CITIES_ROOT / args.city.lower()
        if city_dir.exists():
            extract_city_infrastructure(city_dir, force=args.force)
        else:
            print(f"BŁĄD: Nie znaleziono folderu dla miasta: {args.city}")
    else:
        print("=== URUCHAMIANIE EKSTRAKCJI NARODOWEJ (Idempotent) ===")
        cities = sorted([d for d in CITIES_ROOT.iterdir() if d.is_dir()])
        for city_dir in cities:
            extract_city_infrastructure(city_dir, force=args.force)

if __name__ == "__main__":
    main()
