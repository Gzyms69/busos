import geopandas as gpd
import pandas as pd
from pathlib import Path
import json
import os
import warnings

warnings.filterwarnings("ignore")

CITIES_ROOT = Path("data/cities")
OUTPUT_PATH = Path("data/processed/national_poi_stats.json")

def extract_city_poi_stats(city_name):
    osm_path = CITIES_ROOT / city_name / "osm_full.gpkg"
    if not osm_path.exists(): return None
    
    print(f"  Analizowanie OSM dla: {city_name}...")
    stats = {}
    
    try:
        # Interesują nas punkty i poligony (budynki użyteczności publicznej)
        for layer in ['points', 'multipolygons']:
            gdf = gpd.read_file(osm_path, layer=layer, columns=['amenity', 'shop', 'office', 'leisure'])
            
            # Agregujemy wszystkie kolumny tagów w jedną serię
            all_tags = pd.concat([gdf['amenity'], gdf['shop'], gdf['office'], gdf['leisure']])
            counts = all_tags.value_counts().to_dict()
            
            for tag, count in counts.items():
                if tag:
                    stats[tag] = stats.get(tag, 0) + count
                    
        return stats
    except Exception as e:
        print(f"    Błąd w {city_name}: {e}")
        return None

def run_taxonomy_extraction():
    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    cities = sorted([d.name for d in CITIES_ROOT.iterdir() if d.is_dir()])
    
    national_stats = {}
    
    for city in cities:
        city_stats = extract_city_poi_stats(city)
        if city_stats:
            national_stats[city] = city_stats
            
    with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
        json.dump(national_stats, f, indent=4, ensure_ascii=False)
        
    print(f"\nSukces! Statystyki POI zapisane w: {OUTPUT_PATH}")

if __name__ == "__main__":
    run_taxonomy_extraction()
