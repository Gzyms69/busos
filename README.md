# National Transit Equity & Urban Gravity Platform (2026)

## 1. Project Mission & Analytical Scope

The primary mission of this platform is to provide an empirical, high-fidelity quantification of the causal relationship between public transport accessibility and residential property values across **29 major Polish agglomerations**. By integrating high-resolution transit data (GTFS), comprehensive infrastructure context (OpenStreetMap), transactional real estate registries (RCN/GUGiK), and demographic grids (GUS NSP 2021), the system enables advanced modeling of Transit-Oriented Development (TOD) premiums and socio-economic equity.

This platform is not merely a data aggregator; it is a **specialized spatial engineering engine** designed to eliminate "spatial noise" (e.g., classifying a rural train stop as a metropolitan hub or treating an airport like a grassy field) and provide a "clean", mathematically rigorous environment for econometric modeling. It acts as a Digital Auditor of Urban Policy, revealing whether cities favor affluent districts or prioritize regional accessibility.

---

## 2. System Architecture: The "Autonomous Hub" Model

To ensure 100% scalability, data integrity, and parallel processing capabilities, the project utilizes a decentralized **City Hub** structure. Each of the 29 agglomerations is a self-contained operational unit located in `data/cities/{city_name}/`. This allows for independent processing, validation, and recovery without cross-contamination.

*   **`01_source/`**: The raw ingestion point for local GTFS feeds, regional OSM PBF extracts, and local RCN GML/WFS transactional files.
*   **`02_spatial/`**: Hardened, unified GeoPackage (GPKG) databases:
    *   `stops.gpkg`: Validated transit nodes (Smart Stops).
    *   `infrastructure.gpkg`: Multi-layer OSM data (points/polygons) strictly clipped to the city's transit zone. Preserves the full `all_tags` HSTORE.
    *   `transactions.gpkg`: Unified real estate records with normalized `price_m2` and `lok_pow_uzyt` columns.
    *   `population_250m.gpkg`: A localized, highly efficient demographic grid extracted from the massive national census file.
*   **`03_config/`**: Local intelligence layer containing `poi_valuation.json` (the city's specific "Gravity Price List" calculated by the Engine).
*   **`04_results/`**: Final analytical outputs, including the Stop DNA profiles, equity reports, and CSV exports.

---

## 3. Global Data Inventory: Pillar of Truth

The platform relies on a rigorously maintained national dataset (`data/poland/`):
*   **Administrative Boundaries**: `powiaty.json` (PRG) used for TERYT mapping.
*   **Population**: `nsp2021_grid250m.gpkg` - 250m demographic grid from the 2021 National Census (GUS).
*   **Infrastructure**: `poland-latest.osm.pbf` (Geofabrik) - The single source of truth for OSM data, processed via C++ Osmium for ultra-fast, low-RAM clipping.
*   **Master Database**: `data/database/transport_metrics.db` and `master_analytical.gpkg` containing over 220,000 verified property transactions (2025-2026) and 55,933 "Smart Stops".

---

## 4. Core Methodology I: The "Urban Gravity" Spatial Filter

To solve the "Train Plague" problem—where nationwide rail networks (PKP Intercity, PolRegio) artificially inflate urban boundaries into rural areas—the project implements a proprietary spatial filtering algorithm:

1.  **Urban Core Identification**: Aggregate all "Class A" transit nodes (Bus, Tram, Metro, Trolleybus). These form the high-density urban skeleton.
2.  **Gravity-Based Rail Clipping**: "Class B" nodes (Regional rail stations) are retained *if and only if* they are located within a 5,000-meter radius of any Class A node.
3.  **Analytical Perimeter Generation**: A 1,500-meter "pedestrian reach" buffer is calculated around all validated stops. This geometry is merged and simplified to serve as the master spatial mask for extracting local OSM and Population data.

---

## 5. Core Methodology II: Urban Gravity Engine v7.1 (ISC+)

The platform’s analytical brain is the **Urban Gravity Engine**, which evaluates the strategic importance of every piece of infrastructure around a transit stop. It has evolved through 7 iterations to achieve perfect, noise-free valuation.

### 5.1 Structural Tag Signature (STS) & HSTORE Parsing
We abandoned fragile semantic (name-based) filtering. Objects are identified via Technical Passports using a custom HSTORE parser:
*   **Mega Hubs (T0)**: Require `uic_ref` (Major Rail), `iata` (International Airports), or `industrial=port` (Major Seaports).
*   **National Magnets (T1)**: Identified by `wikidata/wikipedia` tags (Regional Rail/Metro) or specific strategic tags (`hospital`, `university`).
*   **Economic Completeness**: Integration of `business_office`, `industrial`, and `warehouse` into Tier 2 to properly weight employment zones.

### 5.2 The Mathematical Formula (ISC+)
Each POI instance is valued using a multi-dimensional logarithmic formula to prevent statistical anomalies (e.g., massive empty fields dominating central stations):

**`V = (BaseTier * log10(Population)) * (1 + log10(Area / 100)) * Density_Multiplier * Scarcity_Bonus`**

*   **Base Tiers (Strict Floors)**: 
    *   T0 (Mega Hubs): 20,000,000 pkt.
    *   T1 (National Magnets): 10,000,000 pkt.
    *   T2 (Strategic Hubs): 1,000,000 pkt.
    *   T3 (Local Core): 100,000 pkt.
    *   T4-T6: Down to 10 pkt for Micro-Infra (ATMs, Parcel Lockers).
*   **Human Gravity**: `log10(Population)` scales the base value so a hospital in Warsaw correctly weighs more than one in Giżycko, reflecting total passenger capacity.
*   **Volume Factor**: Logarithmic scaling of physical area (`Area / 100`).
*   **Density Multiplier**: Adjusts for usage intensity. A railway station receives a `x10.0` multiplier because a small terminal handles vastly more daily humans per square meter than a massive stadium (`x0.1`).

---

## 6. Production Pipeline (Execution Order)

The system is fully automated. To rebuild the national dataset from scratch, execute these numbered scripts sequentially from `scripts/pipeline/`:

### Phase 1: Ingestion & Spatial Isolation
*   `01_fetch_gtfs.py`: Multi-threaded sync of 85+ Polish transit operators.
*   `02_collect_stops.py`: Urban Gravity filtering, generating `stops.gpkg` per hub.
*   `03_download_osm_pbf.py`: Ingestion of the 2GB National OSM binary.
*   `04_download_population.py`: Retrieval of the NSP 2021 demographic grid.
*   `05_extract_infrastructure.py`: High-performance C++ (Osmium/OGR) extraction of local infrastructure perimeters.
*   `06_identify_rcn_teryt.py`: Spatial mapping of transit zones to administrative county codes.

### Phase 2: Real Estate Hardening
*   `07_harvest_rcn.py`: National harvester for property transactions via GUGiK WFS.
*   `08_fix_relational_data.py`: Complex XML/XLink joining for relational GML cities (Łódź, Giżycko).
*   `09_fix_suwalki_geometry.py`: Centroid-based spatial recovery for non-point property records.
*   `10_unify_schemas.py`: Hardening local databases into a unified economic schema (`price_m2`).
*   `11_build_master_db.py`: Consolidation of 222,000+ records into the National Master Database.

### Phase 3: Urban Intelligence & DNA
*   `13_isolate_city_data.py`: Architecture migration to the "Autonomous Hub" model and Local Population Clipping.
*   `14_build_isc_valuation.py`: Execution of the **Urban Gravity Engine 7.1**. Calculates the universal weight for every infrastructure category across 29 cities using parallel multiprocessing.

*(Note: Script 12 was deprecated in favor of the advanced 14).*

---

## 7. Utility & Audit Suite (`scripts/tools/`)
The platform enforces a "Verify, Then Trust" standard via strict auditing tools:
*   `verify_isolation.py`: Audits local population sums against city boundaries to ensure zero demographic data loss.
*   `generate_full_inventory.py`: Dumps every recognized POI tag to guarantee the "White List" taxonomy is comprehensive.
*   `generate_atlas_samples.py`: Creates point-blank technical samples of Stops, showing exact distances to properties and infrastructure.
*   `audit_data_quality.py`: Validates CRS (EPSG:2180 parity) across all nodes.

---

## 8. Technical Stack
*   **Language**: Python 3.12+ (GeoPandas, Pandas, Concurrent.Futures, Shapely).
*   **Spatial Engines**: Osmium Tool (C++) for PBF clipping, GDAL/OGR 3.8+ (C++) for relational mapping.
*   **Databases**: OGC GeoPackage (GPKG) with R-Tree Spatial Indexing.
*   **Coordinate Reference System**: EPSG:2180 (Poland CS92) strictly enforced for all distance and area metrics.

## 9. Development Philosophy (Senior Engineering Standard)
1.  **No Semantic Guessing**: Objects are evaluated by structural tags (e.g., UIC codes), not easily mistyped names.
2.  **Absolute RCA**: Every implementation failure (e.g., the "Lodz Coordinates Crisis" or "Airport Area Inflation") undergoes a rigorous Root Cause Analysis documented in `devlog.md`.
3.  **Idempotency**: Pipeline scripts are designed to skip existing, valid data to ensure rapid recovery and low resource waste.
