# National Transit Equity & Urban Gravity Platform (Urban Gravity Engine v9.1)

## 1. Project Mission & Analytical Scope

The primary mission of this platform is to provide an empirical, high-fidelity quantification of the causal relationship between public transport accessibility and residential property values across **30 major Polish agglomerations**. By integrating high-resolution transit data (GTFS), comprehensive infrastructure context (OpenStreetMap), transactional real estate registries (RCN/GUGiK), and demographic grids (GUS NSP 2021), the system enables advanced modeling of Transit-Oriented Development (TOD) premiums and socio-economic equity.

This platform is not merely a data aggregator; it is a **specialized spatial engineering engine** designed to eliminate "spatial noise". It solves fundamental data science challenges—such as preventing rural train stops from being evaluated like metropolitan hubs, stopping the "Gravity Fallacy" from erasing human populations, and preventing massive shopping malls from being outranked by 30 scattered park benches. 

It acts as a Digital Auditor of Urban Policy, revealing whether cities favor affluent districts or prioritize regional accessibility, while delivering completely clean, mathematically rigorous data sets (Parquet/GPKG) ready for Next.js mapping and deep econometric modeling.

---

## 2. Mathematical Architecture: Physics of the City (v13.0 - Rygor Tkanki Miejskiej)

The most critical achievement of this platform is its custom-built **Urban Gravity Engine**, which relies on strict mathematical rules to simulate how humans move, choose services, and assign value to urban spaces. This is divided into three distinct phases: **Macro-Valuation**, **Calibrated Hybrid Clustering**, and **Dynamic Micro-Gravity Distribution**.

### A. Phase I: Macro-Valuation & Spatial Dissolve (Script 14)
**1. The "Spatial Dissolve" Algorithm (v13.0):**
To prevent artificial value inflation, the system unifies fragmented OSM complexes (e.g., a hospital with 15 pavilions) into a single analytical unit.
*   **Target:** Tier T0 (Mega Hubs) and T1 (National Magnets).
*   **Logic:** Buffers objects by 10m, dissolves by `name` and `tier`, and restores geometry. 
*   **Result:** A 15-building campus is treated as **One Object** with summed area, preventing 15x weight multiplication.

**2. The Balanced Tier Matrix (Urban Fabric Rescue):**
Parks and religious sites are demoted to T6 to prioritize commercial/service density.
*   **T0 Mega Hubs:** 5,000,000 pts (Airports, Main Rail).
*   **T1 National Magnets:** 1,000,000 pts (Hospitals, University Campuses).
*   **T2 Strategic Hubs:** 250,000 pts (Malls, Commercial/Industrial Zones).
*   **T3 Local Cores:** 50,000 pts (High Schools, Theatres).
*   **T4 Daily Services:** 10,000 pts (Pharmacies, Banks, Convenience stores).
*   **T5 Specialized Gastro:** 2,500 pts (Restaurants, Hotels).
*   **T6 Micro Infra:** 100 pts (**Parks**, **Churches**, ATMs, Lockers).

### B. Phase II: Calibrated Hybrid Hub Agglomeration (Script 15)
1.  **Semantic Phase:** Group by `norm_name` (150m threshold, `complete` linkage).
2.  **Stitching Phase:** Merge different names (e.g. "Galeria Korona" and "IX Wieków") if centroids are within **100 meters**.

### C. Phase III: Dynamic Micro-Gravity Distribution (Script 15)
**1. Dynamic Diminishing Returns (The High-Street Shield):**
*   **T0 / T1 (National Hubs):** Power = `0.2`. No floor.
*   **T2 (Strategic Hubs - Malls):** Power = `1.2`. **No floor** (Penalty falls to zero).
*   **T4 / T5 (Urban Fabric - Stores/Gastro):** Power = `1.0`. **20% RETENTION FLOOR** (Protects the High Street).
*   **T6 (Micro-Infra - Parks/Spam):** Power = `2.0`. **No floor** (Aggressively hits zero).

**2. Shannon Entropy & Log-Normalized Z-Score:**
`Local_Score = Z(log1p(infra)) * 0.35 + Z(log1p(transit)) * 0.35 + Z(log1p(pop)) * 0.15 + Z(log1p(market)) * 0.15`

---

## 3. System Architecture: The "Autonomous Hub" Model

To ensure 100% scalability, data integrity, and parallel processing capabilities, the project utilizes a decentralized **City Hub** structure. Each of the 30 agglomerations is a self-contained operational unit located in `data/cities/{city_name}/`. This allows for independent processing, validation, and recovery without cross-contamination.

*   **`01_source/`**: The raw ingestion point for local GTFS feeds, regional OSM PBF extracts, and local RCN GML/WFS transactional files.
*   **`02_spatial/`**: Hardened, unified GeoPackage (GPKG) databases:
    *   `stops.gpkg`: Validated transit nodes (Smart Stops).
    *   `infrastructure.gpkg`: Multi-layer OSM data (points/polygons) strictly clipped to the city's transit zone. Preserves the full `all_tags` HSTORE.
    *   `transactions.gpkg`: Unified real estate records with normalized `price_m2` and `lok_pow_uzyt` columns.
    *   `population_250m.gpkg`: A localized, highly efficient demographic grid extracted from the massive national census file.
*   **`03_config/`**: Local intelligence layer containing `poi_valuation.json` (the city's specific "Gravity Price List" calculated by the Engine).
*   **`04_results/`**: Final analytical outputs, including the Stop DNA profiles (GPKG), raw Parquet matrices for frontend API delivery, and equity reports.

---

## 4. The Master Pipeline: 16 Steps to Perfection

The system is fully automated and orchestrated via `orchestrator.py` (The "Pancerny" fault-tolerant runner). To rebuild the national dataset from scratch, the Orchestrator executes these numbered scripts sequentially from `scripts/pipeline/`.

### Phase 1: Environment & Spatial Isolation
*   **`00_init_environment.py`**: Validates the global directory structure, verifies CRS integrity across the workspace, and prepares the operational grid.
*   **`01_fetch_gtfs.py`**: Multi-threaded sync of 85+ Polish transit operators (ZTM, MPK, PKP).
*   **`02_collect_stops.py`**: Unifies Urban and Rail stops. Applies the crucial `normalize_name` regex function (stripping strings to raw alphanumeric core) to ensure perfect Agglomerative Clustering later. Identifies massive transport radii.
*   **`03_download_osm_pbf.py`**: Downloads the 2GB+ National OpenStreetMap binary (Geofabrik).
*   **`04_download_population.py`**: Ingests the National Census (GUS) 250m demographic grid and converts it to EPSG:2180.
*   **`05_extract_infrastructure.py`**: C++ Osmium + OGR high-performance pipeline. Clips the massive Poland PBF strictly to the 1.5km walking buffers of transit stops, saving massive amounts of RAM and disk space.
*   **`06_identify_rcn_teryt.py`**: Spatial intersection mapping transit hubs to specific administrative TERYT codes for real estate querying.

### Phase 2: Real Estate Hardening (RCN)
*   **`07_harvest_rcn_omnibus.py`**: Connects to the national WFS (GUGiK) to download vast XML troves of local real estate transactions.
*   **`08_fix_relational_data.py`**: Reconstructs broken, nested GML relationships (handling complex XLink pointers specific to Polish county databases like Łódź).
*   **`09_fix_suwalki_geometry.py`**: Global fallback algorithm restoring valid Point geometries for non-standard real estate multipolygons.
*   **`10_unify_schemas.py`**: Aggressive standardization of thousands of disjointed local RCN columns into a strict, unified economic format (price, area, date).
*   **`11_build_master_db.py`**: Concatenates all verified property records into the National Master Database (over 220,000 transactions).

### Phase 3: Urban Intelligence & The Gravity Engine
*   **`12_audit_data_quality.py`**: Mid-flight validation. Verifies coordinate validity, eliminates teleporting stops (0,0 coords), and audits schema compliance.
*   **`13_isolate_city_data.py`**: The "Splinter" process. Cuts the National Master DB and National Population grid into autonomous, localized GeoPackages per city, moving operations to the decentralized `data/cities/` architecture.
*   **`14_build_isc_valuation.py`**: **The Urban Intelligence Engine.** Parses the complex `all_tags` HSTORE of every building. Assigns Tiers (T0-T6) based on structural taxonomy (e.g., recognizing `uic_ref` to designate a National Rail Hub instead of just a generic station). Incorporates base city population logs and physical volume metrics to calculate the definitive Monetary Weight of every POI category in the city (`poi_valuation.json`).
*   **`15_compute_stop_dna.py`**: **The Grand Integrator.** 
    *   Merges Stops into Logical Hubs (`linkage='single'`, 150m).
    *   Computes exact GTFS unique departures per hour without heavy drop_duplicate cloning (`nunique()`).
    *   Dynamically maps the intelligence of Step 14 onto physical buildings.
    *   Calculates highly optimized C-GEOS vectorized Euclidean distances to POIs.
    *   Solves Huff Models strictly in-place (`.transform('sum')`) to prevent RAM Cartesian explosions (OOM).
    *   Applies Tier-based Diminishing Returns and extracts 100% of the demographic grid.
    *   Generates the unflattened, linear Local and National Z-Scores.
    *   Exports ultra-lightweight `.parquet` matrices for Next.js UI integration and the final `stop_dna.gpkg` vectors.

---

## 5. Tooling & Auditing Suite (`scripts/tools/`)

The platform enforces a "Verify, Then Trust" standard via rigorous auditing tools:

*   **`100_percent_dna_validator.py` (The Golden Auditor):** A massive, multi-threaded validation engine. It traverses the final `stop_dna.gpkg` for all cities, deduplicates logic hubs so reports reflect truth, validates statistical standard deviations (Z-Scores), audits population drift, and generates the massive `GOLDEN_DNA_AUDIT` Markdown reports. It ensures the Math is perfect before any map is rendered.
*   **`orchestrator.py`**: Not just a script, but the master commander of the pipeline. It handles parallel process streaming (running multiple cities on multiple CPU cores simultaneously), state management (`.pipeline_state.json`), failure resuming, and parameter parsing (e.g., `--cities kielce,krakow`).
*   **Utility Auditors:** `verify_isolation.py`, `generate_full_inventory.py`, `verify_final_pipeline.py`.

---

## 6. Technical Stack & Engineering Directives

### Stack:
*   **Language**: Python 3.12+ 
*   **Core Libraries**: GeoPandas (C-GEOS), Pandas (NumPy vectorization), Shapely, scikit-learn (AgglomerativeClustering), pyarrow/fastparquet.
*   **Spatial Engines**: Osmium Tool (C++) for PBF clipping, GDAL/OGR 3.8+ (C++) for relational mapping.
*   **Databases / Formats**: OGC GeoPackage (GPKG) with R-Tree Spatial Indexing, Apache Parquet (for extreme frontend IO speed), H3 Hexagons.
*   **Coordinate Reference System**: EPSG:2180 (Poland CS92) strictly enforced for all distance and area physics. Exported to WGS84 (EPSG:4326) strictly at the end of the pipeline for Mapbox/Leaflet UI rendering.

### Development Directives (Senior Engineering Standard):
1.  **C-Level Vectorization First**: Python `apply(lambda)` loops over massive spatial frames are banned. Distance calculations and gravity models must be reduced to flat arrays (e.g., `x.values`, `y.values`) or utilize native C bindings (`geometry.distance()`).
2.  **No RAM Cartesian Explosions**: Complex `groupby.sum()` followed by `merge()` on multi-million row DataFrames are banned. Memory must be preserved using in-place operations like `.transform('sum')` and pre-join duplication pruning.
3.  **Absolute RCA**: Every implementation failure undergoes a rigorous Root Cause Analysis. Solutions address the source of the problem (e.g., normalizing names in Step 02), rather than patching the symptoms downstream (in Step 15).
4.  **Idempotency**: Pipeline scripts are designed to skip existing, valid data to ensure rapid recovery and low resource waste. Force updates are managed explicitly by the Orchestrator.