import json
from pathlib import Path
import math

POI_STATS_PATH = Path("data/processed/national_poi_stats.json")
VALUATION_OUTPUT = Path("data/processed/city_poi_valuation.json")

# 1. Definicja Mnożników Tierów
TIER_MULTIPLIERS = {
    "T1_CRITICAL": 15.0,  # Szpitale, Uczelnie, Urzędy Wojewódzkie, Główne Dworce
    "T2_PRIMARY": 8.0,    # Supermarkety, Galerie, Szkoły, Przychodnie
    "T3_SECONDARY": 4.0,  # Przedszkola, Kultura, Sport, Kościoły, Parki
    "T4_SERVICES": 1.5,   # Żabki, Restauracje, Banki, Apteki, Fryzjerzy
    "T5_MICRO": 0.2,      # Paczkomaty, Bankomaty, Place zabaw
    "BLACKLIST": 0.0      # Śmietniki, Ławki, Parkingi
}

# 2. Mapowanie Tagów do Tierów (Kompleksowe)
TAG_TO_TIER = {
    # T1: Critical
    "hospital": "T1_CRITICAL", "university": "T1_CRITICAL", "college": "T1_CRITICAL",
    "townhall": "T1_CRITICAL", "courthouse": "T1_CRITICAL", "government": "T1_CRITICAL",
    "station": "T1_CRITICAL", "public_transport": "T1_CRITICAL",
    
    # T2: Primary
    "supermarket": "T2_PRIMARY", "mall": "T2_PRIMARY", "department_store": "T2_PRIMARY",
    "school": "T2_PRIMARY", "clinic": "T2_PRIMARY", "doctors": "T2_PRIMARY",
    "dentist": "T2_PRIMARY", "market_place": "T2_PRIMARY", "fire_station": "T2_PRIMARY",
    
    # T3: Secondary
    "kindergarten": "T3_SECONDARY", "place_of_worship": "T3_SECONDARY", 
    "library": "T3_SECONDARY", "museum": "T3_SECONDARY", "theatre": "T3_SECONDARY",
    "cinema": "T3_SECONDARY", "sports_centre": "T3_SECONDARY", "swimming_pool": "T3_SECONDARY",
    "stadium": "T3_SECONDARY", "park": "T3_SECONDARY", "garden": "T3_SECONDARY",
    "community_centre": "T3_SECONDARY", "arts_centre": "T3_SECONDARY",
    
    # T4: Services
    "convenience": "T4_SERVICES", "restaurant": "T4_SERVICES", "cafe": "T4_SERVICES",
    "fast_food": "T4_SERVICES", "bank": "T4_SERVICES", "post_office": "T4_SERVICES",
    "pharmacy": "T4_SERVICES", "bakery": "T4_SERVICES", "butcher": "T4_SERVICES",
    "beauty": "T4_SERVICES", "hairdresser": "T4_SERVICES", "hotel": "T4_SERVICES",
    "bar": "T4_SERVICES", "pub": "T4_SERVICES", "clothes": "T4_SERVICES",
    
    # T5: Micro
    "parcel_locker": "T5_MICRO", "atm": "T5_MICRO", "playground": "T5_MICRO",
    "kiosk": "T5_MICRO", "laundry": "T5_MICRO",
    
    # BLACKLIST (Noise)
    "bench": "BLACKLIST", "waste_basket": "BLACKLIST", "waste_disposal": "BLACKLIST",
    "recycling": "BLACKLIST", "vending_machine": "BLACKLIST", "shelter": "BLACKLIST",
    "bicycle_parking": "BLACKLIST", "pitch": "BLACKLIST", "parking": "BLACKLIST",
    "parking_space": "BLACKLIST", "parking_entrance": "BLACKLIST", "street_lamp": "BLACKLIST",
    "surveillance": "BLACKLIST", "post_box": "BLACKLIST", "crossing": "BLACKLIST"
}

def calculate_valuation():
    if not POI_STATS_PATH.exists():
        print("BŁĄD: Brak pliku statystyk POI. Uruchom najpierw extract_poi_taxonomy.py")
        return

    with open(POI_STATS_PATH, "r", encoding="utf-8") as f:
        national_stats = json.load(f)

    city_valuations = {}

    for city, stats in national_stats.items():
        print(f"  Obliczanie wag dla: {city}...")
        
        # 1. Filtrujemy tylko "użyteczne" POI (nie-blacklist) i liczymy ich sumę
        useful_poi_counts = {k: v for k, v in stats.items() if TAG_TO_TIER.get(k) != "BLACKLIST" and TAG_TO_TIER.get(k) is not None}
        total_useful = sum(useful_poi_counts.values())
        
        if total_useful == 0: continue
        
        city_poi_values = {}
        for tag, count in useful_poi_counts.items():
            tier = TAG_TO_TIER.get(tag)
            multiplier = TIER_MULTIPLIERS.get(tier, 1.0)
            
            # Formuła: Scarcity * Strategic Multiplier
            # Scarcity = TotalUseful / Count
            scarcity_weight = total_useful / count
            
            # Finalny wynik punktowy dla JEDNEGO obiektu tego typu w tym mieście
            final_value = scarcity_weight * multiplier
            
            city_poi_values[tag] = {
                "count": count,
                "tier": tier,
                "base_weight": round(scarcity_weight, 2),
                "final_value": round(final_value, 2)
            }
            
        city_valuations[city] = city_poi_values

    with open(VALUATION_OUTPUT, "w", encoding="utf-8") as f:
        json.dump(city_valuations, f, indent=4, ensure_ascii=False)
        
    print(f"\nSukces! Macierz wyceny POI zapisana w: {VALUATION_OUTPUT}")

if __name__ == "__main__":
    calculate_valuation()
