# Comprehensive Operational Plan: National Transit Equity & Real Estate Platform (2026)

## 1. Project Vision
To build an enterprise-grade analytical engine that quantifies the efficiency, equity, and strategic priorities of public transport across 29 Polish agglomerations. The platform will serve as a digital auditor of urban policies, revealing whether cities favor affluent districts or prioritize regional accessibility for lower-income commuters.

## 2. Core Analytical Dimensions

### A. The Wealth & Equity Dimension (Wealth-to-Transit Ratio)
For every stop, we calculate the socio-economic status of its catchment area:
- **Indicator:** Average Price per m² (from RCN 2025-2026).
- **Audit Goal:** Compare transit service levels (frequency, number of lines) in "High-Wealth" vs "Low-Wealth" zones. 
- **Critical Question:** Does the city invest more in tram/metro lines for expensive districts while leaving lower-income areas with infrequent bus service?

### B. The Regional Gravity Dimension (Commuter Equity Index)
Analyze how well the city handles "External Pressure" (people commuting from outside the core):
- **Indicator:** Connectivity of Park & Ride hubs and regional rail integration.
- **Audit Goal:** Measure the travel time and accessibility for the "Class B" transit nodes (Regional Rail) vs the "Urban Core".
- **Critical Question:** Is the city accessible for workers from remote counties, or is the transport system a "closed fortress" for the urban elite?

### C. The Spatial Efficiency Dimension (Circuity & Redundancy)
- **Real vs Straight Distance:** Use OSM pedestrian networks to calculate the "Pedestrian circuity factor".
- **Redundancy Audit:** Identify stops within 300m of each other that serve identical lines with low population density.
- **Sequence-based Line Redundancy:** Check stop sequences ($n$ vs $n+1$). If two consecutive stops serve exactly the same lines and are within 400m, mark as "Strategic Redundancy Candidate".
- **Point of Interest (POI) Coverage:** Correlate stop importance with the density of Urzędy, Schools, and Healthcare (from OSM `all_tags`).

## 3. Data Unification & Hardening (Phase 1 - CURRENT)
Status: 100% Complete - DATA HARDENED. Final stitching required for ZIP-based cities.
- **Task 1.1:** Finalize relational stitching for Suwałki (Centroid logic) and Giżycko.
- **Task 1.2:** Convert all `tran_cena_brutto` columns from TEXT to REAL (Float) across all 29 GPKG databases.
- **Task 1.3:** Consolidate all Hubs into a single `master_analytical.gpkg` with a unified schema.

## 4. Master Analytical Pipeline (Phase 2)
### Step 1: Pre-computation of Stop Metrics (`compute_stop_dna.py`)
For each of the 55,933 stops, generate a "DNA Profile":
- `wealth_index`: Mean price/m2 in 1500m radius.
- `pop_density`: Total population in 1500m radius (NSP 2021).
- `poi_score`: Count of critical POIs (Schools, Hospitals, Trade).
- `transit_load`: (Lines count * average frequency).

## Phase 2.1: The Urban Gravity Engine (ISC+) - ADVANCED MODELING
This phase introduces infrastructural intelligence by weighting POIs based on local context and physical scale.

### Step 1.1: Data Isolation & Autonomous Hubs
- **Structure:** Every city folder (`data/cities/{city}/`) will be reorganized into:
  - `01_source/`: Raw GTFS, OSM, RCN files.
  - `02_spatial/`: Unified GeoPackages + **`population_local.gpkg`** (Clipped NSP 2021 TOT grid).
  - `03_config/`: **`poi_valuation.json`** (City-specific scarcity weights).
  - `04_results/`: Stop DNA and city reports.
- **Goal:** 100% independent city units for parallel processing and scalability.

### Step 1.2: Infrastructural Scarcity Context (ISC) Logic
- **Formula:** $Weight = TierMultiplier \times (TotalPOI / CountOfType)$.
- **Logic:** A hospital in a metropolis is weighted higher than in a small town because it serves a larger, more complex urban fabric (represented by Total POI).

### Step 1.3: Volume & Diversity Scaling (ISC+)
- **Volume Factor:** Polygon-based POIs (buildings) are multiplied by $\log(Area \times Levels)$.
- **Saturation Penalty:** Diminishing returns for repetitive services (e.g., the 5th supermarket in one zone adds less value than the 1st).
- **Blacklist:** Zero-weight for urban noise (benches, waste baskets, parking spaces).

### Step 2: Spatial Routing Audit (`routing_analysis.py`)
...
- Calculate the "Walking Distance Gap".
- Compare Euclidean distance vs real sidewalk distance to identify topological barriers (rails, rivers, gated communities).

### Step 3: Priority Profiling (`city_priority_report.py`)
- Cluster cities into "Elite-Favored", "Commuter-Friendly", or "Service-Optimized".
- Generate equity charts showing Transit Service Level vs Real Estate Price.

## 5. Interface & Visualization (Phase 3)
- **Master Dashboard (Streamlit/Notebook):**
  - Interactive Map with "Inequity Heatmap".
  - "The Axe List": Top 10 most redundant/useless stops.
  - "The Investment List": Top 10 underserved areas with high population and low transit density.

## 6. Comparison with Kielce Pilot
This plan supersedes the early Kielce notebooks by:
1. **Nationwide Parity:** Identical math for all 29 cities.
2. **Economic Depth:** RCN price correlation (Wealth Index) which was missing in the pilot.
3. **Temporal Precision:** Strict use of 2025-2026 data only.
4. **Architectural Rigor:** Using `all_tags` Relational OSM instead of simple keyword filters.

## 7. Execution Schedule (Immediate Actions)
1. **[X] Fix Relational Data (Lodz/Gizycko)**
2. **[X] Fix Suwałki (Polygon Centroid Mapping)**
3. **[ ] Consolidate National Analytical Dataset**
4. **[ ] Execute Equity & Wealth Analysis**

---
**Senior Engineering Standard: NO EMOJIS | ALL DATA VERIFIED | RIGOROUS DOCUMENTATION**
