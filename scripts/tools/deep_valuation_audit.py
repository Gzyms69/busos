import json
import pandas as pd
from pathlib import Path
import os

CITIES_ROOT = Path("data/cities")
VALUATION_REPORT = Path("reports/full_valuation_audit_2026.txt")

def analyze_city_valuation(city_name):
    val_path = CITIES_ROOT / city_name / "03_config" / "poi_valuation.json"
    if not val_path.exists(): return None
    
    with open(val_path, "r", encoding="utf-8") as f:
        data = json.load(f)
    
    df = pd.DataFrame.from_dict(data, orient='index')
    
    stats = {
        "city": city_name.upper(),
        "total_unique_types": len(df),
        "tiers_found": df['tier'].unique().tolist(),
        "tier_stats": df.groupby('tier')['final_value'].agg(['min', 'max', 'mean']).to_dict('index'),
        "top_5": df.sort_values('final_value', ascending=False).head(5).index.tolist(),
        "missing_t0": "aerodrome" not in df.index and "terminal" not in df.index,
        "missing_t1": "hospital" not in df.index and "university" not in df.index
    }
    return stats, df

def run_deep_audit():
    cities = sorted([d.name for d in CITIES_ROOT.iterdir() if d.is_dir()])
    reports = []
    
    with open(VALUATION_REPORT, "w", encoding="utf-8") as f:
        f.write("DEEP CRITICAL AUDIT: URBAN GRAVITY ENGINE 5.0\n")
        f.write("="*80 + "\n\n")
        
        for city in cities:
            res = analyze_city_valuation(city)
            if not res: continue
            s, df = res
            
            f.write(f"CITY: {s['city']}\n")
            f.write(f"  Unique POI Types: {s['total_unique_types']}\n")
            f.write(f"  Tiers present: {s['tiers_found']}\n")
            
            f.write("  Tier Ranges:\n")
            for t, r in s['tier_stats'].items():
                f.write(f"    - {t:20}: {r['min']:12.0f} to {r['max']:12.0f}\n")
            
            f.write(f"  Top 5 Strategic: {', '.join(s['top_5'])}\n")
            
            if s['missing_t0']: f.write("  [!] CRITICAL: No T0 (Global Hubs) found!\n")
            if s['missing_t1']: f.write("  [!] WARNING: No T1 (Regional Magnets) found!\n")
            
            # Weryfikacja Lotnisk w Warszawie
            if city == "warszawa":
                f.write("\n  WARSAW SPECIAL FOCUS (Airports):\n")
                targets = ['aerodrome', 'terminal', 'station']
                for t in targets:
                    if t in df.index:
                        f.write(f"    - {t:15}: Val={df.loc[t, 'final_value']:12.0f}, Tier={df.loc[t, 'tier']}\n")
            
            f.write("-" * 60 + "\n\n")
            
    print(f"Deep Audit complete: {VALUATION_REPORT}")

if __name__ == "__main__":
    run_deep_audit()
