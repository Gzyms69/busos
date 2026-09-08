#!/usr/bin/env python3
"""
verify_nationwide_data.py
Quality Gate & Data Auditor for BusOS.
Verifies all 7 core deliverables across all 30 calibrated Polish cities:
1. stop_dna.gpkg
2. hubs.gpkg
3. h3_grid.parquet
4. stop_transactions_bridge.parquet
5. transit_routes.gpkg
6. stop_route_matrix.parquet
7. transit_network_edges.parquet
Plus National Master Database in data/database/.
"""

import os
import sys
from pathlib import Path

DATA_DIR = Path(os.getenv("BUSOS_DATA_DIR", "data"))
CITIES_DIR = DATA_DIR / "cities"
DB_DIR = DATA_DIR / "database"

CALIBRATED_CITIES = [
    "bialystok", "bydgoszcz", "czestochowa", "elblag", "elk", "gizycko", "gorzow",
    "gzm", "kielce", "krakow", "kutno", "legnica", "leszno", "lodz", "lomza",
    "lublin", "olsztyn", "opole", "poznan", "przemysl", "radom", "rzeszow",
    "suwalki", "swinoujscie", "szczecin", "torun", "trojmiasto", "warszawa",
    "wroclaw", "zielona-gora"
]

DELIVERABLES = [
    ("stop_dna.gpkg", "04_results/stop_dna.gpkg"),
    ("hubs.gpkg", "04_results/hubs.gpkg"),
    ("h3_grid.parquet", "04_results/h3_grid.parquet"),
    ("stop_transactions_bridge.parquet", "04_results/stop_transactions_bridge.parquet"),
    ("transit_routes.gpkg", "04_results/transit_routes.gpkg"),
    ("stop_route_matrix.parquet", "04_results/stop_route_matrix.parquet"),
    ("transit_network_edges.parquet", "04_results/transit_network_edges.parquet"),
]


def audit_city(city: str) -> dict:
    city_p = CITIES_DIR / city
    results = {"city": city, "valid": True, "details": {}}
    
    for name, rel_path in DELIVERABLES:
        p = city_p / rel_path
        if not p.exists() or p.stat().st_size == 0:
            results["details"][name] = False
            results["valid"] = False
        else:
            results["details"][name] = True
            
    return results


def main():
    print(f"==================================================================")
    print(f"      BUSOS NATIONWIDE DATA INTEGRITY AUDITOR (30 CITIES)         ")
    print(f"==================================================================\n")
    
    total_cities = len(CALIBRATED_CITIES)
    deliverable_counts = {name: 0 for name, _ in DELIVERABLES}
    failed_cities = []

    for city in CALIBRATED_CITIES:
        res = audit_city(city)
        for name, ok in res["details"].items():
            if ok:
                deliverable_counts[name] += 1
        if not res["valid"]:
            failed_cities.append(city)

    print(f"{'Deliverable':35s} | {'Coverage':10s} | {'Status'}")
    print(f"{'-'*35}-+-{'-'*10}-+-{'-'*15}")
    
    all_passed = True
    for name, _ in DELIVERABLES:
        count = deliverable_counts[name]
        pct = (count / total_cities) * 100
        status = "PASSED [100%]" if count == total_cities else f"MISSING ({total_cities - count})"
        if count != total_cities:
            all_passed = False
        print(f"{name:35s} | {count:2d}/{total_cities:2d} ({pct:4.1f}%) | {status}")

    print(f"\nNational Master Database:")
    master_gpkg = DB_DIR / "master_stop_dna_poland.gpkg"
    master_csv = DB_DIR / "master_stop_dna_poland.csv"
    print(f"  master_stop_dna_poland.gpkg : {'EXISTS (' + str(master_gpkg.stat().st_size // 1024) + ' KB)' if master_gpkg.exists() else 'MISSING'}")
    print(f"  master_stop_dna_poland.csv  : {'EXISTS (' + str(master_csv.stat().st_size // 1024) + ' KB)' if master_csv.exists() else 'MISSING'}")

    if failed_cities:
        print(f"\n[!] Cities with incomplete deliverables ({len(failed_cities)}):")
        for fc in failed_cities[:10]:
            print(f"  - {fc}")
        if len(failed_cities) > 10:
            print(f"  ... and {len(failed_cities) - 10} more")
        print("\nAUDIT STATUS: INCOMPLETE (Pipeline run required)")
        sys.exit(1)
    else:
        print(f"\n[✓] ALL 30 CITIES AND ALL 7 DELIVERABLES (210/210 ARTIFACTS) 100% COMPLETE!")
        print("AUDIT STATUS: PASSED")
        sys.exit(0)


if __name__ == "__main__":
    main()
