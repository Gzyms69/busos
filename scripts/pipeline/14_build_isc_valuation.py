import geopandas as gpd
import pandas as pd
import json
import math
from pathlib import Path
import warnings
import os
import re
from concurrent.futures import ProcessPoolExecutor
import time

warnings.filterwarnings("ignore")

CITIES_ROOT = Path("data/cities")
REPORT_PATH = Path("reports/national_valuation_summary.txt")

# --- URBAN GRAVITY ENGINE 7.1: ECONOMIC COMPLETENESS ---
TIER_VALUES = {
    "T0_MEGA_HUB":        20000000.0, # Balanced from 50M
    "T1_NATIONAL_MAGNET": 10000000.0, 
    "T2_STRATEGIC_HUB":   1000000.0,  # Employment, Education, Strategic Trade
    "T3_LOCAL_CORE":      100000.0,   
    "T4_DAILY_SERVICE":   10000.0,    
    "T5_SPEC_GASTRO":     1000.0,     
    "T6_MICRO_INFRA":     10.0
}

# Strict Whitelist: TAG -> (Category_EN, Tier)
TAG_WHITELIST = {
    "aerodrome": ("international_airport", "T0_MEGA_HUB"),
    "terminal":  ("airport_terminal", "T0_MEGA_HUB"),
    "port":      ("major_seaport", "T0_MEGA_HUB"),
    "station":   ("rail_hub", "T0_MEGA_HUB"),
    
    "hospital":   ("hospital_clinical", "T1_NATIONAL_MAGNET"),
    "university": ("university_campus", "T1_NATIONAL_MAGNET"),
    "college":    ("university_campus", "T1_NATIONAL_MAGNET"),
    "faculty":    ("university_campus", "T1_NATIONAL_MAGNET"),
    "stadium":    ("national_stadium", "T1_NATIONAL_MAGNET"),
    "arena":      ("national_stadium", "T1_NATIONAL_MAGNET"),
    "exhibition_centre": ("exhibition_centre", "T1_NATIONAL_MAGNET"),
    
    # Tier 2: The Employment & Hubs
    "office":                ("business_office", "T2_STRATEGIC_HUB"),
    "company":               ("business_office", "T2_STRATEGIC_HUB"),
    "industrial":            ("industrial_zone", "T2_STRATEGIC_HUB"),
    "warehouse":             ("logistics_hub", "T2_STRATEGIC_HUB"),
    "student_accommodation": ("student_dormitory", "T2_STRATEGIC_HUB"),
    "dormitory":             ("student_dormitory", "T2_STRATEGIC_HUB"),
    "mall":                  ("shopping_mall", "T2_STRATEGIC_HUB"),
    "shopping_centre":       ("shopping_mall", "T2_STRATEGIC_HUB"),
    "supermarket":           ("supermarket", "T2_STRATEGIC_HUB"),
    "school":                ("education_high_school", "T2_STRATEGIC_HUB"),
    "courthouse":            ("government_central", "T2_STRATEGIC_HUB"),
    "townhall":              ("government_central", "T2_STRATEGIC_HUB"),
    "department_store":      ("shopping_mall", "T2_STRATEGIC_HUB"),

    # Tier 3: Local Foundation
    "social_facility": ("social_support_mops", "T3_LOCAL_CORE"),
    "clinic":          ("health_clinic", "T3_LOCAL_CORE"),
    "doctors":         ("health_clinic", "T3_LOCAL_CORE"),
    "dentist":         ("health_clinic", "T3_LOCAL_CORE"),
    "kindergarten":    ("education_preschool", "T3_LOCAL_CORE"),
    "theatre":         ("culture_theatre", "T3_LOCAL_CORE"),
    "cinema":          ("culture_theatre", "T3_LOCAL_CORE"),
    "museum":          ("culture_theatre", "T3_LOCAL_CORE"),
    "library":         ("culture_theatre", "T3_LOCAL_CORE"),
    "sports_hall":     ("sports_centre", "T3_LOCAL_CORE"),
    "swimming_pool":   ("sports_centre", "T3_LOCAL_CORE"),

    # Tier 4: Specific Destinations
    "pharmacy":         ("pharmacy", "T4_DAILY_SERVICE"),
    "bank":             ("bank", "T4_DAILY_SERVICE"),
    "post_office":      ("post_office", "T4_DAILY_SERVICE"),
    "convenience":      ("convenience_store", "T4_DAILY_SERVICE"),
    "place_of_worship": ("place_of_worship", "T4_DAILY_SERVICE"),
    "park":             ("park_recreation", "T4_DAILY_SERVICE"),
    "garden":           ("park_recreation", "T4_DAILY_SERVICE"),
    "hotel":            ("hotel_accommodation", "T4_DAILY_SERVICE"),
    "hostel":           ("hotel_accommodation", "T4_DAILY_SERVICE"),
    "clothes":          ("specialized_retail", "T4_DAILY_SERVICE"),
    "furniture":        ("specialized_retail", "T4_DAILY_SERVICE"),
    "florist":          ("specialized_retail", "T4_DAILY_SERVICE"),
    "electronics":      ("specialized_retail", "T4_DAILY_SERVICE"),
    "jewelry":          ("specialized_retail", "T4_DAILY_SERVICE"),
    "fuel":             ("car_services", "T4_DAILY_SERVICE"),
    "car_repair":       ("car_services", "T4_DAILY_SERVICE"),
    "car_wash":         ("car_services", "T4_DAILY_SERVICE"),
    "bicycle_rental":   ("bicycle_infrastructure", "T4_DAILY_SERVICE"),

    # Tier 5: Transient/Minor
    "restaurant": ("gastronomy", "T5_SPEC_GASTRO"),
    "cafe":       ("gastronomy", "T5_SPEC_GASTRO"),
    "fast_food":  ("gastronomy", "T5_SPEC_GASTRO"),
    "beauty":     ("personal_services", "T5_SPEC_GASTRO"),
    "hairdresser":("personal_services", "T5_SPEC_GASTRO"),
    "chemist":    ("personal_services", "T5_SPEC_GASTRO"),
    
    # Tier 6: Micro
    "parcel_locker": ("micro_parcel_locker", "T6_MICRO_INFRA"),
    "atm":           ("micro_atm", "T6_MICRO_INFRA"),
    "playground":    ("micro_playground", "T6_MICRO_INFRA")
}

def parse_hstore(hstore_str):
    if not hstore_str or pd.isna(hstore_str): return {}
    pattern = r'"?([^"=>]+)"?=>"?([^",]+)"?'
    return dict(re.findall(pattern, hstore_str))

def identify_v7_1_tag(row, city_name):
    tags = parse_hstore(row.get('all_tags', ''))
    for col in ['amenity', 'shop', 'office', 'leisure', 'aeroway', 'railway', 'landuse']:
        if col in row and pd.notna(row[col]): tags[col] = row[col]
    
    nm = (tags.get('name') or tags.get('official_name') or "").lower()

    if tags.get("aeroway") in ["aerodrome", "terminal"]:
        if "iata" in tags: return ("international_airport", "T0_MEGA_HUB")
        return ("local_airfield", "T3_LOCAL_CORE")
        
    if tags.get("railway") == "station":
        if "uic_ref" in tags or any(x in nm for x in ["główn", "glown", "central", "fabrycz", "kalisk"]):
            return ("national_rail_hub", "T0_MEGA_HUB")
        if "wikidata" in tags or any(x in nm for x in ["wschod", "zachod", "widzew", "wrzeszcz", "oliwa"]):
            return ("regional_rail_hub", "T1_NATIONAL_MAGNET")
        return ("suburban_rail_stop", "T3_LOCAL_CORE")

    if tags.get("landuse") == "industrial": return ("industrial_zone", "T2_STRATEGIC_HUB")
    if tags.get("industrial") == "port": return ("major_seaport", "T0_MEGA_HUB")

    for k in ['amenity', 'shop', 'office', 'landuse', 'leisure']:
        val = tags.get(k)
        if val in TAG_WHITELIST: return TAG_WHITELIST[val]
            
    return None, None

def process_city(city_name):
    city_dir = CITIES_ROOT / city_name
    spatial_dir = city_dir / "02_spatial"
    pop_path = spatial_dir / "population_250m.gpkg"
    infra_path = spatial_dir / "infrastructure.gpkg"
    if not pop_path.exists() or not infra_path.exists(): return None
    try:
        pop = gpd.read_file(pop_path); h_grav = math.log10(pop["TOT"].sum()) if not pop.empty else 1.0
        objs = []
        for layer in ["points", "multipolygons"]:
            gdf = gpd.read_file(infra_path, layer=layer)
            gdf['area_m2'] = gdf.to_crs("EPSG:2180").area if layer == "multipolygons" else 0
            for _, row in gdf.iterrows():
                cat_name, tier = identify_v7_1_tag(row, city_name)
                if cat_name:
                    base_val = TIER_VALUES[tier]
                    d_mult = 1.0
                    if "rail" in cat_name or "airport" in cat_name: d_mult = 15.0
                    elif "park" in cat_name or "stadium" in cat_name: d_mult = 0.1
                    
                    area_factor = 1.0 + math.log10((row['area_m2'] / 100.0) + 1) if row['area_m2'] > 0 else 1.0
                    objs.append({"cat": cat_name, "tier": tier, "val": base_val * h_grav * area_factor * d_mult})
        
        if not objs: return None
        df = pd.DataFrame(objs); val = {}
        for cat in df['cat'].unique():
            c_df = df[df['cat'] == cat]
            scarcity = 1.0 + (math.log2((len(df)/len(c_df))+1) / 50.0)
            val[cat] = {"count": len(c_df), "tier": c_df.iloc[0]['tier'], "final_value": round(c_df['val'].mean() * scarcity, 2)}
        with open(city_dir / "03_config" / "poi_valuation.json", "w", encoding="utf-8") as f:
            json.dump(val, f, indent=4, ensure_ascii=False)
        return city_name, val
    except Exception as e: return f"ERROR_{city_name}", str(e)

def run():
    cities = sorted([d.name for d in CITIES_ROOT.iterdir() if d.is_dir()])
    print(f"Uruchamianie Urban Gravity Engine 7.1 (ECONOMIC) na {os.cpu_count()} rdzeniach...")
    with ProcessPoolExecutor() as executor:
        results = list(executor.map(process_city, cities))
    all_vals = {r[0]: r[1] for r in results if r and not r[0].startswith("ERROR")}
    
    test_cities = ["warszawa", "krakow", "lodz", "trojmiasto", "bialystok"]
    with open(REPORT_PATH, "w", encoding="utf-8") as f:
        f.write("URBAN GRAVITY ENGINE 7.1 - FINAL AGGREGATED VALUATION AUDIT (ECONOMIC COMPLETENESS)\n")
        f.write("Standard: Work & Industry Included | Hub Compression | No Noise\n")
        f.write("="*105 + "\n\n")
        for city in test_cities:
            if city in all_vals:
                f.write(f"CITY: {city.upper()}\n")
                f.write(f"Total Unique Service Types: {len(all_vals[city])}\n")
                f.write(f"{'Service Category (EN)':35} | {'Tier':20} | {'Cnt':5} | {'Avg Value':15}\n")
                f.write("-" * 105 + "\n")
                top = sorted(all_vals[city].items(), key=lambda x: x[1]['final_value'], reverse=True)[:35]
                for cat, d in top:
                    f.write(f"{cat:35} | {d['tier']:20} | {d['count']:5} | {d['final_value']:15.0f}\n")
                f.write("\n" + "="*105 + "\n\n")
    print(f"Analiza zakończona. Raport: {REPORT_PATH}")

if __name__ == "__main__":
    run()
