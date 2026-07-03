import geopandas as gpd
import pandas as pd
import json
import math
from pathlib import Path
import warnings
import os
import re
import argparse

warnings.filterwarnings("ignore", category=FutureWarning)
warnings.filterwarnings("ignore", message=".*Geometry is in a geographic CRS.*")

def get_data_dir():
    return Path(os.environ.get("PIPELINE_DATA_DIR", "data"))

# --- URBAN GRAVITY ENGINE 11.0: URBAN FABRIC RESCUE ---
TIER_VALUES = {
    "T0_MEGA_HUB":        5000000.0, # Airport, Port, Rail Hub
    "T1_NATIONAL_MAGNET": 1000000.0, # Hospital, University, Stadium
    "T2_STRATEGIC_HUB":   250000.0,  # Mall, Office, Industrial, Commercial, Gov
    "T3_LOCAL_CORE":      50000.0,   # High School, Culture, Marketplace, Sport
    "T4_DAILY_SERVICE":   10000.0,    # Pharmacy, Bank, Post, Convenience, Kindergarten
    "T5_SPEC_GASTRO":     2500.0,     # Restaurant, Local Airfield
    "T6_MICRO_INFRA":     100.0       # ATM, Locker
}

TAG_WHITELIST = {
    # T0 - MEGA HUBS
    "aerodrome": ("international_airport", "T0_MEGA_HUB"),
    "terminal":  ("airport_terminal", "T0_MEGA_HUB"),
    "port":      ("major_seaport", "T0_MEGA_HUB"),
    "station":   ("rail_hub", "T0_MEGA_HUB"),
    
    # T1 - NATIONAL MAGNETS
    "university": ("university_campus", "T1_NATIONAL_MAGNET"),
    "college":    ("university_campus", "T1_NATIONAL_MAGNET"),
    "faculty":    ("university_campus", "T1_NATIONAL_MAGNET"),
    "stadium":    ("national_stadium", "T1_NATIONAL_MAGNET"),
    "arena":      ("national_stadium", "T1_NATIONAL_MAGNET"),
    "exhibition_centre": ("exhibition_centre", "T1_NATIONAL_MAGNET"),
    "hospital":              ("hospital_clinical", "T1_NATIONAL_MAGNET"),

    # T2 - STRATEGIC HUBS
    "mall":                  ("shopping_mall", "T2_STRATEGIC_HUB"),
    "shopping_centre":       ("shopping_mall", "T2_STRATEGIC_HUB"),
    "department_store":      ("shopping_mall", "T2_STRATEGIC_HUB"),
    "office":                ("business_office", "T2_STRATEGIC_HUB"),
    "company":               ("business_office", "T2_STRATEGIC_HUB"),
    "industrial":            ("industrial_zone", "T2_STRATEGIC_HUB"),
    "commercial":            ("commercial_zone", "T2_STRATEGIC_HUB"),
    "warehouse":             ("logistics_hub", "T2_STRATEGIC_HUB"),
    "courthouse":            ("government_central", "T2_STRATEGIC_HUB"),
    "court_house":           ("government_central", "T2_STRATEGIC_HUB"),
    "townhall":              ("government_central", "T2_STRATEGIC_HUB"),
    "government":            ("government_central", "T2_STRATEGIC_HUB"),
    "supermarket":           ("supermarket", "T2_STRATEGIC_HUB"),
    "student_accommodation": ("student_dormitory", "T2_STRATEGIC_HUB"),
    "dormitory":             ("student_dormitory", "T2_STRATEGIC_HUB"),

    # T3 - LOCAL CORES
    "school":                ("education_high_school", "T3_LOCAL_CORE"),
    "marketplace":           ("marketplace", "T3_LOCAL_CORE"),
    "social_facility": ("social_support_mops", "T3_LOCAL_CORE"),
    "clinic":          ("health_clinic", "T3_LOCAL_CORE"),
    "doctors":         ("health_clinic", "T3_LOCAL_CORE"),
    "dentist":         ("health_clinic", "T3_LOCAL_CORE"),
    "theatre":         ("culture_theatre", "T3_LOCAL_CORE"),
    "cinema":          ("culture_theatre", "T3_LOCAL_CORE"),
    "museum":          ("culture_theatre", "T3_LOCAL_CORE"),
    "library":         ("culture_theatre", "T3_LOCAL_CORE"),
    "sports_hall":     ("sports_centre", "T3_LOCAL_CORE"),
    "sports_centre":   ("sports_centre", "T3_LOCAL_CORE"),
    "swimming_pool":   ("sports_centre", "T3_LOCAL_CORE"),

    # T4 - DAILY SERVICES
    "kindergarten":    ("education_preschool", "T4_DAILY_SERVICE"),
    "pharmacy":         ("pharmacy", "T4_DAILY_SERVICE"),
    "bank":             ("bank", "T4_DAILY_SERVICE"),
    "post_office":      ("post_office", "T4_DAILY_SERVICE"),
    "police":           ("police_station", "T4_DAILY_SERVICE"),
    "convenience":      ("convenience_store", "T4_DAILY_SERVICE"),
    "hotel":            ("hotel_accommodation", "T4_DAILY_SERVICE"),
    "hostel":           ("hotel_accommodation", "T4_DAILY_SERVICE"),
    "clothes":          ("specialized_retail", "T4_DAILY_SERVICE"),
    "furniture":        ("specialized_retail", "T4_DAILY_SERVICE"),
    "electronics":      ("specialized_retail", "T4_DAILY_SERVICE"),
    "fuel":             ("car_services", "T4_DAILY_SERVICE"),

    # T5 - SPECIALIZED / LOW IMPACT
    "restaurant": ("gastronomy", "T5_SPEC_GASTRO"),
    "cafe":       ("gastronomy", "T5_SPEC_GASTRO"),
    "fast_food":  ("gastronomy", "T5_SPEC_GASTRO"),
    "beauty":     ("personal_services", "T5_SPEC_GASTRO"),
    "hairdresser":("personal_services", "T5_SPEC_GASTRO"),
    "chemist":    ("personal_services", "T5_SPEC_GASTRO"),
    "airfield":   ("local_airfield", "T5_SPEC_GASTRO"),

    # T6 - MICRO INFRA (The Junk/Spam Tier - No Retention Floor)
    "parcel_locker":    ("micro_parcel_locker", "T6_MICRO_INFRA"),
    "atm":              ("micro_atm", "T6_MICRO_INFRA"),
    "playground":       ("micro_playground", "T6_MICRO_INFRA"),
    "bench":            ("micro_playground", "T6_MICRO_INFRA"),
    "park":             ("park_recreation", "T6_MICRO_INFRA"),
    "garden":           ("park_recreation", "T6_MICRO_INFRA"),
    "recreation_ground":("park_recreation", "T6_MICRO_INFRA"),
    "place_of_worship": ("place_of_worship", "T6_MICRO_INFRA")
}

def parse_hstore(hstore_str):
    if not hstore_str or pd.isna(hstore_str): return {}
    # Standardowy parser HSTORE OpenStreetMap
    pattern = r'"?([^"=>]+)"?=>"?([^",]+)"?'
    return dict(re.findall(pattern, hstore_str))

def spatial_dissolve_strategic(gdf):
    """Scalamy obiekty T0 i T1 o tej samej nazwie, aby nie dublować wag (np. pawilony szpitala)."""
    strategic = gdf[gdf['tier'].isin(['T0_MEGA_HUB', 'T1_NATIONAL_MAGNET'])].copy()
    others = gdf[~gdf['tier'].isin(['T0_MEGA_HUB', 'T1_NATIONAL_MAGNET'])].copy()
    
    if strategic.empty: return gdf
    
    # Grupowanie po nazwie i klastrowanie przestrzenne (bufor 10m by skleić stykające się budynki)
    # Zabezpieczamy się przed pustymi nazwami
    strategic['name_clean'] = strategic['name'].fillna("bez_nazwy")
    strategic['geometry'] = strategic.geometry.buffer(10)
    
    # Dissolve po nazwie i tierze
    dissolved = strategic.dissolve(by=['name_clean', 'cat_name', 'tier'], aggfunc={'area_m2': 'sum'}).reset_index()
    # Przywracamy geometrię i nazwę
    dissolved['geometry'] = dissolved.geometry.buffer(-10)
    dissolved = dissolved.rename(columns={'name_clean': 'name'})
    
    return pd.concat([dissolved, others], ignore_index=True)

def identify_v7_9_tag(row, city_name):
    tags = parse_hstore(row.get('all_tags', ''))
    for col in ['amenity', 'shop', 'office', 'leisure', 'aeroway', 'railway', 'landuse', 'industrial']:
        if col in row and pd.notna(row[col]): tags[col] = row[col]
    
    nm = (tags.get('name') or tags.get('official_name') or "").lower()

    # Specyficzna logika dla Lotnisk (T0 vs T5)
    if tags.get("aeroway") == "aerodrome":
        if "iata" in tags or any(x in nm for x in ["chopin", "modlin", "balice", "pyrzowice", "jasionka", "ławica", "rebiechowo"]):
            return ("international_airport", "T0_MEGA_HUB")
        return ("local_airfield", "T5_SPEC_GASTRO")
        
    if tags.get("railway") == "station":
        if "uic_ref" in tags or any(x in nm for x in ["główn", "glown", "central", "fabrycz", "kalisk"]):
            return ("national_rail_hub", "T0_MEGA_HUB")
        return ("regional_rail_hub", "T1_NATIONAL_MAGNET")

    for k in ['amenity', 'shop', 'office', 'landuse', 'leisure', 'industrial']:
        val = tags.get(k)
        if val in TAG_WHITELIST: return TAG_WHITELIST[val]
            
    return None, None

def process_city(city_name, data_dir):
    city_dir = data_dir / "cities" / city_name
    spatial_dir = city_dir / "02_spatial"
    pop_path = spatial_dir / "population_250m.gpkg"
    infra_path = spatial_dir / "infrastructure.gpkg"
    
    if not pop_path.exists() or not infra_path.exists():
        return False
        
    try:
        pop = gpd.read_file(pop_path)
        h_grav = math.log10(pop["TOT"].sum()) if not pop.empty and pop["TOT"].sum() > 0 else 1.0
        
        # Wektoryzacja
        all_gdf = []
        for layer in ["points", "multipolygons"]:
            gdf = gpd.read_file(infra_path, layer=layer)
            gdf['area_m2'] = gdf.to_crs("EPSG:2180").area if layer == "multipolygons" else 0
            all_gdf.append(gdf)
        gdf = pd.concat(all_gdf, ignore_index=True)
        
        # KRYTYCZNE v13.0: Wyciągamy nazwę z all_tags, jeśli nie ma jej jako osobnej kolumny
        if 'name' not in gdf.columns:
            gdf['name'] = gdf['all_tags'].apply(lambda x: parse_hstore(x).get('name'))
        
        tag_results = gdf.apply(lambda row: identify_v7_9_tag(row, city_name), axis=1, result_type='expand')
        tag_results.columns = ['cat_name', 'tier']
        gdf = pd.concat([gdf, tag_results], axis=1)
        gdf = gdf[gdf['cat_name'].notna()]
        
        # NOWOŚĆ v13.0: Zszywanie pawilonów strategicznych (T0/T1) przed wyceną
        gdf = spatial_dissolve_strategic(gdf)
        
        if gdf.empty: return False
        
        # Wektorowe obliczenie wartosci (Linear Physics v10.0)
        gdf['base_val'] = gdf['tier'].map(TIER_VALUES)
        gdf['area_factor'] = gdf['area_m2'].apply(lambda a: 1.0 + math.log10((a / 100.0) + 1) if a > 0 else 1.0)
        gdf['val'] = gdf['base_val'] * h_grav * gdf['area_factor']
        
        objs = gdf[['cat_name', 'tier', 'val']].rename(columns={'cat_name': 'cat'}).to_dict('records')
        if not objs: return False
            
        df = pd.DataFrame(objs)
        val = {}
        for cat in df['cat'].unique():
            c_df = df[df['cat'] == cat]
            scarcity = 1.0 + (math.log2((len(df)/len(c_df))+1) / 50.0)
            val[cat] = {"count": len(c_df), "tier": c_df.iloc[0]['tier'], "final_value": round(c_df['val'].mean() * scarcity, 2)}
            
        with open(city_dir / "03_config" / "poi_valuation.json", "w", encoding="utf-8") as f:
            json.dump(val, f, indent=4, ensure_ascii=False)
            
        print(f"__PIPELINE_METRICS__={json.dumps({'city': city_name, 'poi': len(df), 'grav': round(h_grav, 2)})}")
        return True
    except Exception as e:
        print(f"[ERR] {city_name}: {e}")
        return False

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--city", required=True)
    parser.add_argument("--force", action="store_true")
    args = parser.parse_args()
    process_city(args.city, get_data_dir())

if __name__ == "__main__":
    main()
