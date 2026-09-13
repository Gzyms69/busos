# BusOS System Architecture & Project Memory (SSOT)

> **Document Status:** `ACTIVE SSOT` (Updated September 2026 — Sprint 5.0)  
> **Repository:** `busos` (`/home/gzyms/Dev Projects/busos`)  
> **Global Deployment:** Vercel Global Edge (Frontend) + Oracle Cloud Infrastructure ARM64 (Backend & Vector DB)

---

## 1. Production Topology & Cloud Infrastructure

### Frontend (Vercel Edge)
- **Domain:** [https://busos.czerwinskidawid.pl](https://busos.czerwinskidawid.pl)
- **Framework:** Next.js 16.2.1 Turbopack, React 19.2, TypeScript 5.8
- **Core Visual Engines:** `@deck.gl` v9.2+ (`H3HexagonLayer`, `ScatterplotLayer`, `PathLayer`, `TripsLayer`), MapLibre GL 5.2+
- **Architecture:** `BusosShell` — 100% viewport map, `TopSearchPill`, `OmniDock`, `FloatingWindow` dynamic windowing system, and `MobileBottomSheet` (< 768px).

### Backend (OCI Ampere A1 ARM64)
- **Domain:** [https://api.busos.czerwinskidawid.pl](https://api.busos.czerwinskidawid.pl)
- **Host Spec:** Oracle Cloud Infrastructure Ampere A1 (4 OCPU, 24 GB RAM, Ubuntu 24.04 ARM64)
- **Reverse Proxy:** Caddy 2 (TLS 1.3, HTTP/3, automated Let's Encrypt certificates, `@bad_bots` edge filtering)
- **Application:** FastAPI 0.115+, DuckDB 1.2+ (in-memory vectorized queries on Parquet), Redis 7 (rate limiting & cache)
- **Vector DB:** Qdrant v1.13+ (active on port 6333 for Transit Stop DNA GNN embeddings)
- **Telemetry:** VictoriaMetrics v1.101 + Grafana under `monitoring` docker compose profile.

---

## 2. Data Logistics & Deployment Boundaries

### The `.gitignore` Isolation Rule
- The `/data` directory is strictly ignored from git tracking due to its multi-gigabyte volume (GTFS archives, OSM GPKG, raw PBF, demographic grids, and Parquet matrices).
- **OCI Code Deploy:** GitHub Actions (`.github/workflows/deploy-backend.yml`) runs `git pull --ff-only origin main` and rebuilds the `busos-api` container.
- **OCI Data Sync:** Because `data/` is excluded from git, analytical data files in `data/cities/{city}/04_results/` must be synchronized to the OCI host via `scripts/deployment/sync_simulation_to_oci.sh` or direct `rsync`.
- **Simulation Data Size:** `simulation_trips_math.json` across all 30 calibrated cities totals ~196 MB uncompressed.

---

## 3. Key Architectural Decisions & Invariants

1. **Dual-Mode Transit Simulation (`/api/v1/simulation/{city}`):**
   - Mode `math`: Mathematical interpolation of trip timings with LRS corridor speeds (compact ~1-15 MB per city).
   - Mode `gps`: High-resolution raw GPS shape trajectories (~10-95 MB per city).
   - Backend automatically falls back between `math` and `gps` if only one format exists for a given city.
2. **Relative Sizing in FloatingWindow:**
   - Window presets (`presetWidths`) map dynamically to `["S", "M", "L"][idx]` rather than hardcoded pixel thresholds to avoid `S S S` glitches on compact panels.
3. **Primary Selection Routing:**
   - Selecting a transit line in `TopSearchPill` invokes `setActiveRoute(uid, 0, true)`, ensuring `selectionType: "route"` opens the Route Inspector.
4. **Enriched Stop Routes:**
   - `GET /api/v1/routes/stop/{stop_id}` joins `stop_route_matrix.parquet` with `transit_routes.gpkg` to return human-readable line numbers (`short_name`), carrier colors (`color`), and destination headsigns (`headsign`).
