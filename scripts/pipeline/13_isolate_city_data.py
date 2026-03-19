import geopandas as gpd
import pandas as pd
from pathlib import Path
import shutil
import os
import warnings

warnings.filterwarnings("ignore")

CITIES_ROOT = Path("data/cities")
POP_PATH = Path("data/poland/population/nsp2021_grid250m.gpkg")

def isolate_city(city_name, pop_grid):
    city_dir = CITIES_ROOT / city_name
    print(f"\n--- Izolacja danych dla: {city_name.upper()} ---")
    
    # 1. Tworzenie nowej struktury
    subdirs = ["01_source", "02_spatial", "03_config", "04_results"]
    for sd in subdirs:
        (city_dir / sd).mkdir(parents=True, exist_ok=True)
        
    # 2. Segregacja istniejących plików
    # stops -> 02_spatial
    stops_old = city_dir / "smart_stops.gpkg"
    if stops_old.exists():
        shutil.move(str(stops_old), str(city_dir / "02_spatial" / "stops.gpkg"))
        
    # infrastructure -> 02_spatial
    osm_old = city_dir / "osm_full.gpkg"
    if osm_old.exists():
        shutil.move(str(osm_old), str(city_dir / "02_spatial" / "infrastructure.gpkg"))
        
    # transactions -> 02_spatial
    rcn_old = city_dir / "rcn" / "transactions.gpkg"
    if rcn_old.exists():
        shutil.move(str(rcn_old), str(city_dir / "02_spatial" / "transactions.gpkg"))
        # Usuwamy stary pusty folder rcn/
        if (city_dir / "rcn").exists(): shutil.rmtree(city_dir / "rcn")
        
    # 3. Wycinanie lokalnej siatki populacji
    stops_path = city_dir / "02_spatial" / "stops.gpkg"
    target_pop = city_dir / "02_spatial" / "population_250m.gpkg"
    
    if stops_path.exists() and pop_grid is not None and not target_pop.exists():
        try:
            print(f"  Wycinanie lokalnej siatki populacji...")
            stops = gpd.read_file(stops_path)
            # Tworzymy obwiednię miasta z lekkim buforem (np. 2km)
            city_bbox = stops.to_crs(pop_grid.crs).total_bounds
            # Wycinamy siatkę na podstawie BBOX dla szybkości
            clipped_pop = pop_grid.cx[city_bbox[0]:city_bbox[2], city_bbox[1]:city_bbox[3]]
            
            if not clipped_pop.empty:
                # Zapisujemy tylko kolumnę TOT i geometrię
                clipped_pop[['TOT', 'geometry']].to_file(target_pop, driver="GPKG")
                print(f"  Zapisano {len(clipped_pop)} komórek populacji.")
            else:
                print("  OSTRZEŻENIE: Brak pokrycia populacji dla tego obszaru.")
        except Exception as e:
            print(f"  Błąd wycinania populacji: {e}")

def run_isolation():
    cities = sorted([d.name for d in CITIES_ROOT.iterdir() if d.is_dir()])
    
    print("Wczytywanie narodowej siatki populacji (może chwilę potrwać)...")
    try:
        # Wczytujemy tylko kolumnę TOT i geometrię, żeby oszczędzić RAM
        pop_grid = gpd.read_file(POP_PATH)
        print(f"Siatka wczytana: {len(pop_grid)} rekordów.")
    except Exception as e:
        print(f"BŁĄD: Nie można wczytać siatki populacji: {e}")
        pop_grid = None

    for city in cities:
        isolate_city(city, pop_grid)
        
    print("\nPROCES IZOLACJI ZAKOŃCZONY.")

if __name__ == "__main__":
    run_isolation()
