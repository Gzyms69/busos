import geopandas as gpd
import pandas as pd
from pathlib import Path
import os
import warnings

warnings.filterwarnings("ignore")

CITIES_ROOT = Path("data/cities")
REPORT_PATH = Path("reports/isolation_audit_report.txt")

# Przybliżone populacje miast (rdzeń) dla weryfikacji rzędu wielkości
CITY_BASELINES = {
    "warszawa": 1800000, "krakow": 800000, "lodz": 670000, "wroclaw": 640000,
    "poznan": 530000, "szczecin": 400000, "bydgoszcz": 340000, "lublin": 330000,
    "bialystok": 290000, "katowice": 290000, "gdynia": 240000, "gdansk": 470000,
    "rzeszow": 190000, "kielce": 190000, "olsztyn": 170000, "radom": 200000,
    "torun": 190000, "sosnowiec": 190000, "czestochowa": 210000, "legnica": 90000,
    "elblag": 110000, "opole": 120000, "gorzow": 120000, "suwalki": 70000,
    "elk": 60000, "lomza": 60000, "przemysl": 60000, "gizycko": 30000, "swinoujscie": 40000
}

def audit_city_isolation(city_name):
    city_dir = CITIES_ROOT / city_name
    spatial_dir = city_dir / "02_spatial"
    
    res = {
        "city": city_name.upper(),
        "files_ok": True,
        "stops_count": 0,
        "rcn_count": 0,
        "poi_count": 0,
        "pop_total": 0,
        "pop_status": "UNKNOWN",
        "warnings": []
    }
    
    required_files = ["stops.gpkg", "infrastructure.gpkg", "transactions.gpkg", "population_250m.gpkg"]
    for f in required_files:
        if not (spatial_dir / f).exists():
            res["files_ok"] = False
            res["warnings"].append(f"MISSING FILE: {f}")

    if res["files_ok"]:
        try:
            # 1. Stops
            stops = gpd.read_file(spatial_dir / "stops.gpkg")
            res["stops_count"] = len(stops)
            
            # 2. RCN
            rcn = gpd.read_file(spatial_dir / "transactions.gpkg")
            res["rcn_count"] = len(rcn)
            
            # 3. Infrastructure (Points + Polys)
            try:
                pts = gpd.read_file(spatial_dir / "infrastructure.gpkg", layer="points")
                polys = gpd.read_file(spatial_dir / "infrastructure.gpkg", layer="multipolygons")
                res["poi_count"] = len(pts) + len(polys)
            except:
                res["warnings"].append("Could not read all OSM layers")

            # 4. Population - THE CRITICAL TEST
            pop = gpd.read_file(spatial_dir / "population_250m.gpkg")
            res["pop_total"] = int(pop["TOT"].sum())
            
            # Validation logic
            baseline = CITY_BASELINES.get(city_name.lower(), 50000)
            # Nasze strefy transportowe są większe niż samo miasto, więc pop_total powinno być >= baseline
            if res["pop_total"] < baseline * 0.7:
                res["pop_status"] = "LOW"
                res["warnings"].append(f"Suspiciously low population: {res['pop_total']} (Baseline: {baseline})")
            elif res["pop_total"] > baseline * 3.0:
                res["pop_status"] = "HIGH"
                res["warnings"].append(f"Large metro area: {res['pop_total']} (Baseline: {baseline})")
            else:
                res["pop_status"] = "OK"
                
        except Exception as e:
            res["warnings"].append(f"Data error: {e}")
            
    return res

def run_audit():
    cities = sorted([d.name for d in CITIES_ROOT.iterdir() if d.is_dir()])
    reports = []
    
    print("Rozpoczynam audyt poizolacyjny...")
    for city in cities:
        reports.append(audit_city_isolation(city))
        
    with open(REPORT_PATH, "w", encoding="utf-8") as f:
        f.write("ISOLATION & CLIPPING INTEGRITY REPORT 2026\n")
        f.write("="*60 + "\n\n")
        
        for r in reports:
            f.write(f"CITY: {r['city']}\n")
            f.write(f"  - Files: {'OK' if r['files_ok'] else 'MISSING'}\n")
            f.write(f"  - Stops: {r['stops_count']}\n")
            f.write(f"  - POIs:  {r['poi_count']}\n")
            f.write(f"  - RCN:   {r['rcn_count']}\n")
            f.write(f"  - TOTAL POPULATION (TOT): {r['pop_total']} ({r['pop_status']})\n")
            if r['warnings']:
                for w in r['warnings']:
                    f.write(f"    [!] WARNING: {w}\n")
            f.write("-" * 40 + "\n")
            
    print(f"\nAudyt zakończony. Raport w: {REPORT_PATH}")

if __name__ == "__main__":
    run_audit()
