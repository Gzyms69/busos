# AGENTS.md: BusOS Repository Directives & Guidelines

This document establishes operational directives, commands, and architectural standards for AI agents working in the BusOS codebase.

---

## 1. Project Overview & Architecture

BusOS (National Transit Equity & Urban Gravity Platform) is a decoupled spatial engineering system:
*   **Data Pipeline (`scripts/pipeline/`)**: 18 sequential Python 3.12+ scripts utilizing C-GEOS (`shapely`), PyOsmium, `ogr2ogr`, DuckDB, and NumPy to ingest GTFS, OSM, GUS demographic grids, and RCN real estate transactions across 57 Polish agglomerations (30 fully calibrated hubs).
*   **Spatial Backend (`backend/`)**: FastAPI 0.115+ query engine backed by in-memory DuckDB C++ SQL, serving 28 REST endpoints with column whitelisting and zone-map pushdown. Deployed on Oracle Cloud Infrastructure (Ampere A1 ARM64) behind Caddy 2 reverse proxy.
*   **Frontend Dashboard (`urban-dashboard/`)**: Next.js 16.2.1, React 19.2, Deck.gl v9.2 (TripsLayer, H3HexagonLayer, ScatterplotLayer, PathLayer), MapLibre GL v5.2, and Zustand 5.0. Deployed on Vercel Global Edge CDN.

---

## 2. Directory Structure

```
busos/
├── backend/                  # FastAPI spatial REST API & DuckDB query engine
│   ├── app/                  # Application code (main.py, routers, schemas)
│   ├── tests/                # Pytest unit & integration test suite (129 tests)
│   └── Dockerfile            # Multi-stage ARM64/AMD64 Dockerfile
├── data/
│   └── cities/               # Nationwide analytical outputs (30 cities, 7 layers each)
│       └── <city>/           # stop_dna.gpkg, hubs.gpkg, h3_grid.parquet, etc.
├── scripts/
│   ├── pipeline/             # Automated data pipeline scripts (00 to 17)
│   ├── tools/                # 18 auditing and validation utilities
│   ├── utils/                # SSOT normalizers, constants, geometry helpers
│   └── deployment/           # OCI sync and deployment shell scripts
└── urban-dashboard/          # Next.js 16 frontend workspace
    ├── src/
    │   ├── app/              # App Router pages and root layout
    │   ├── components/       # UI components (foundry, shell, panels, mobile)
    │   ├── lib/              # API client, Zustand store, utilities
    │   └── types/            # TypeScript interfaces and contracts
    ├── tests/                # Playwright E2E test suites (12 spec files)
    └── package.json
```

---

## 3. Mandatory Verification Commands

Agents must run verification checks before proposing or committing changes:

### Backend & Pipeline
```bash
# Run backend test suite (129 tests)
uv run pytest backend/tests/ -q

# Lint Python files
uv run ruff check backend/ scripts/

# Verify nationwide data integrity (210 files across 30 cities)
python3 scripts/tools/verify_nationwide_data.py

# Run Golden DNA Auditor across all stops
python3 scripts/tools/100_percent_dna_validator.py
```

### Frontend (`urban-dashboard/`)
```bash
cd urban-dashboard

# Static type check (MANDATORY: 0 errors allowed)
npx tsc --noEmit

# Production build
npm run build

# Playwright E2E suite
npx playwright test
```

---

## 4. Architectural Invariants

1.  **Pure Decoupled API**:
    *   The frontend communicates with the backend exclusively via REST API (`NEXT_PUBLIC_API_URL` or `https://api.busos.czerwinskidawid.pl`).
    *   Never reintroduce local static cache bypasses (`/data/showcase/`).
2.  **SQL Injection Immunity & Column Whitelisting**:
    *   All DuckDB SQL queries in `backend/app/` must use parameterized placeholders (`?`).
    *   Dynamic sorting and filtering must validate column names against SSOT whitelists (`STOP_METRIC_MAP`, `HUB_METRIC_MAP`, `HEX_METRIC_MAP`, `MARKET_METRIC_MAP`) in O(1) time.
3.  **C-Level Vectorization First**:
    *   Python `apply(lambda)` loops over GeoDataFrames are banned for distance matrices or coordinate transformations.
    *   Use flat NumPy arrays, SciPy `cKDTree`, or native C-GEOS `STRtree`.
4.  **No Emojis Rule**:
    *   Emojis are strictly prohibited in technical documentation, logs, and user interface microcopy. Use semantic text labels or SVG icons (`lucide-react`).
5.  **Anti-AI Writing Style**:
    *   Eliminate buzzwords (*cutting-edge*, *game-changer*, *pivotal*, *seamlessly*, *robust*).
    *   Do not use em-dashes (`—` or `--`) in prose or titles. Replace with commas, periods, or colons.
    *   Maintain direct, active voice and precise technical terminology.
6.  **Single Source of Truth (SSOT)**:
    *   Geospatial constants, normalizers, and baselines reside in `scripts/utils/`.
    *   Never duplicate calculation logic between pipeline scripts and API backend.

---

## 5. Definition of Done

A task or pull request is complete only when:
*   All tests pass: backend Pytest (129/129) and frontend build (`npm run build`).
*   TypeScript compilation (`npx tsc --noEmit`) passes with 0 errors.
*   Documentation (root `README.md`, `urban-dashboard/README.md`) reflects exact codebase state.
*   No hardcoded city names or debug bypasses in reusable components.
