import json
import pandas as pd
from pathlib import Path

CITIES_ROOT = Path("data/cities")
FULL_INVENTORY_REPORT = Path("reports/full_poi_inventory_audit.txt")

def generate_inventory():
    cities = sorted([d.name for d in CITIES_ROOT.iterdir() if d.is_dir()])
    
    with open(FULL_INVENTORY_REPORT, "w", encoding="utf-8") as f:
        f.write("TOTAL POI INVENTORY & CRITICAL WEIGHT ANALYSIS 2026\n")
        f.write("="*90 + "\n\n")
        
        for city in cities:
            val_path = CITIES_ROOT / city / "03_config" / "poi_valuation.json"
            if not val_path.exists(): continue
            
            with open(val_path, "r", encoding="utf-8") as json_f:
                data = json.load(json_f)
            
            df = pd.DataFrame.from_dict(data, orient='index')
            df['city'] = city.upper()
            
            f.write(f"CITY: {city.upper()}\n")
            f.write(f"Total recognized POI types: {len(df)}\n")
            f.write("-" * 90 + "\n")
            f.write(f"{'POI Type':30} | {'Tier':20} | {'Cnt':5} | {'Weight (Final)':15}\n")
            f.write("-" * 90 + "\n")
            
            # Sortujemy od najważniejszych
            df_sorted = df.sort_values('final_value', ascending=False)
            for tag, row in df_sorted.iterrows():
                f.write(f"{tag:30} | {row['tier']:20} | {int(row['count']):5} | {row['final_value']:15.2f}\n")
            
            f.write("\n" + "="*90 + "\n\n")

    print(f"Pełny inwentarz wygenerowany: {FULL_INVENTORY_REPORT}")

if __name__ == "__main__":
    generate_inventory()
