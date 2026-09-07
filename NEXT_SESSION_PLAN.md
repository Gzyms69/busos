# BusOS Tactical Roadmap & Session State (SSOT)

> **Document Status:** `ACTIVE SSOT` (Updated after Task 1, 2, 3 Completion)  
> **Target Scale:** 30 Calibrated Cities Live on OCI Cloud & Vercel Global Edge.

---

## 1. Executive Context & Verified Baseline State

- **Frontend**: Live on Vercel Global Edge ([https://busos.czerwinskidawid.pl](https://busos.czerwinskidawid.pl)), Next.js 16.2.1 Turbopack, React 19, Deck.gl v9, MapLibre GL.
  - **Build Status**: `npm run build` succeeds in **2.2s**; `npx tsc --noEmit` passes with **0 errors**.
- **Backend**: Live on Oracle Cloud Infrastructure Ampere A1 ARM64 ([https://api.busos.czerwinskidawid.pl](https://api.busos.czerwinskidawid.pl)), FastAPI 0.115+, DuckDB 1.2+, Qdrant Vector Engine (port 6333), Caddy 2 with auto Let's Encrypt TLS 1.3 / HTTP/3.
  - **Health Telemetry**: `{"status":"healthy","version":"9.5.0","active_cities_count":30,"qdrant_connected":true}`.
- **Contract SSOT**: `docs/contracts/DATA_DICTIONARY_AND_API_SSOT.md` locked.

---

## 2. Completed Milestones (Session Verification Log)

### Task 1: DuckDB Dynamic Schema Introspection (`backend/app/spatial_engine.py`)
- **Problem Resolved**: Wcześniejszy Binder Error 500 (`Referenced column "name" not found`) w Warszawie, Wrocławiu i Poznaniu został definitywnie wyeliminowany.
- **Rozwiązanie**: Silnik bada schemat `poi_matrix.parquet` w locie (`DESCRIBE`) i automatycznie mapuje brakujące kolumny `name`, `category`, `tier` na bazie wag grawitacji Huffa $w$.
- **Dowód weryfikacji**:
  ```text
  Warszawa: 767 POIs, 12 komórek demograficznych (HTTP 200)
  Wrocław:  437 POIs, 13 komórek demograficznych (HTTP 200)
  Kielce:   755 POIs, 13 komórek demograficznych (HTTP 200)
  ```

### Task 2: Unified Analytical H3 Grid (Step 17 Pipeline & FastAPI `/api/v1/hexagons`)
- **Nowy krok potoku**: `scripts/pipeline/17_build_h3_grid.py` realizuje wielodomenową fuzję przystanków GTFS, siatki demograficznej GUS 250m, transakcji notarialnych RCN oraz wag POI do stałej siatki Uber H3 (Resolution 8).
- **Metryki**: Wskaźnik Pustyni Transportowej (`transit_desert_index`), flaga wykluczenia (`is_transit_desert`), znormalizowany `transport_score` (0-100), mediana cen RCN.
- **Wygenerowane i zweryfikowane zbiory**:
  ```text
  Kielce:   843 komórki H3 (0.31s) | 197 pustyń transportowych
  Warszawa: 4438 komórek H3 (3.40s) | 1549 pustyń transportowych
  Wrocław:  2286 komórek H3 (0.98s) | 264 pustynie transportowe
  Poznań:   4952 komórki H3 (1.95s) | 644 pustynie transportowe
  Kraków:   2064 komórki H3 (1.24s) | 403 pustynie transportowe
  Łódź:     1742 komórki H3 (0.32s) | 264 pustynie transportowe
  ```
- **Nowy endpoint API**: `GET /api/v1/hexagons?city={city}&min_pop=0` zwraca dane siatki ze schematem Pydantic `HexagonsResponse`.

### Task 3: Optymalizacja Frontendu i Deck.gl GPU Compute
- **Wdrożenie `AbortController`**: `MapContainer.tsx` i `api-client.ts` przerywają zaległe żądania sieciowe przy szybkim przełączaniu miast, zapobiegając race conditions i zamrażaniu wątku WebGL.
- **Natywny GPU `H3HexagonLayer`**:
  - Zastąpiono powolny `HexagonLayer` (liczony na CPU z surowych punktów RCN) natywnym `H3HexagonLayer` z `@deck.gl/geo-layers`.
  - Warstwa renderuje pre-kalkulowane komórki H3 Res 8 z wysokością 3D proporcjonalną do `transport_score` oraz kolorystyką wyróżniającą Pustynie Transportowe (czerwony alert) i gęstą obsługę (szmaragd/błękit).
- **Odblokowanie kliknięć przystanków**: Słupki 3D nie przechwytują już kliknięć myszy (`pickable: false` lub hierarchia warstw), a przystanki (`ScatterplotLayer`) renderują się na wierzchu z priorytetem interakcji.
- **Dwupoziomowy Tooltip**: Prezentacja parametrów przystanku lub pełnego profilu komórki H3 (populacja, odjazdy/h, cena m² RCN).

### Task 4 (Sprint 1): Fundament Danych & Pełna Symetria Słupek vs Hub (`scripts/pipeline/15_compute_stop_dna.py`)
- **Pełna symetria metryk (Full Feature Parity)**:
  - Każdy fizyczny słupek (`stop_id`) otrzymuje natywne 4 filary Stop DNA: `stop_departures_h`, `stop_routes` (linie GTFS), `stop_raw_gravity`, `stop_entropy`, `stop_infra_score` (w promieniu 500m z modelem Huffa), `stop_pop_val` (GUS 250m z kanibalizacją), `stop_market_val` (RCN z filtrem IQR) oraz Z-Score i ocenę A+ do F w populacji słupków miasta.
  - Relacje makro-mikro: `stop_hub_share` ($[0.0, 1.0]$), `is_hub_anchor` (dokładnie 1 anchor na hub dla słupka o najwyższym wolumenie).
  - 100% kompatybilności wstecznej: Zachowano aliasy (`infra_score`, `transit_freq`, `pop_val`, `market_val`, `local_score_raw`, `local_percentile`, `grade`).
- **Eksport dwóch warstw GeoPackage**:
  - `data/cities/kielce/04_results/stop_dna.gpkg`: 1357 fizycznych słupków (WGS84 Point EPSG:4326).
  - `data/cities/kielce/04_results/hubs.gpkg`: 817 unikalnych węzłów logicznych (WGS84 Point EPSG:4326 na współrzędnych centroidu, `hub_stops_count`, `hub_stops_ids`).
- **Weryfikacja & Git Mandate**:
  - `scripts/pipeline/tests/test_stop_hub_symmetry.py`: Wszystkie 8 bramek weryfikacyjnych zaliczone sukcesem.
  - Backend `TestClient`: HTTP 200 OK dla `/api/v1/hubs?city=kielce` (1357 rekordów), `/details` i `/hexagons`.
  - Frontend `npm run build`: kompilacja w **2.3s** (0 błędów TS).
  - Commit `9fe7dc5` wypchnięty do `origin/main`.

---

## 3. Decyzje Architektoniczne z Sesji Grill-Me & PLAN.md (LOCKED)

1. **Jeden Sprint na Sesję**: Działamy w ścisłej izolacji celów zgodnie z `PLAN.md`.
2. **Modularyzacja API & Maksymalizacja Danych (Sprint 2)**:
   - Rozbicie monolitycznego `main.py` na dedykowane routery domenowe:
     - `app/routers/stops.py` (fizyczne słupki mikro, GeoJSON, profile `/api/v1/stops/{id}`)
     - `app/routers/hubs.py` (węzły makro, GeoJSON, karta huba z listą słupków, widok composite `/full`)
     - `app/routers/hexagons.py` (siatka H3 Res 8, profil komórki)
     - `app/routers/market.py` (statystyki z `rcn_stats.json`, transakcje)
     - `app/routers/analytics.py` (The Axe List - TCRP 100 cannibalization, The Investment List - TDI, wyceny POI)
     - `app/routers/ai.py` (wektorowe podobieństwo Qdrant)
3. **100% Kompatybilności Wstecznej**:
   - Wszystkie dotychczasowe endpointy (`/api/v1/hubs`, `/details`, `/hexagons`, `/population`, `/transactions`, `/health`) działają identycznie jak przed podziałem na routery.
4. **Zautomatyzowany Test Suite przez Tier-2 Sub-Worker (Sprint 3)**:
   - Wygenerowanie testów `pytest` przez FastMCP `chinese-worker` (`worker_generate_tests`).
5. **Mandat Gita**:
   - Każdy sprint kończy się aktualizacją `PLAN.md`, `NEXT_SESSION_PLAN.md` oraz `git commit && git push origin main`.

---

## 4. Action Items dla Kolejnej Sesji (Sprint 2)

1. **Krok 1: Implementacja routerów domenowych w `backend/app/routers/`**:
   - `stops.py`, `hubs.py`, `hexagons.py`, `market.py`, `analytics.py`, `ai.py`.
2. **Krok 2: Podpięcie warstwy `hubs.gpkg` i nowych źródeł**:
   - Odczyt `hubs.gpkg` w `hubs.py` oraz `stop_dna.gpkg` w `stops.py`.
   - Podpięcie `rcn_stats.json` w `market.py` (`/api/v1/market/summary`).
   - Implementacja audytu kanibalizacji TCRP Report 100 w `analytics.py` (`/api/v1/analytics/axe-list`).
3. **Krok 3: Weryfikacja jakościowa**:
   - Zero regresji: `TestClient` HTTP 200 OK dla wszystkich tras.
   - Frontend `npm run build` w `urban-dashboard` (<3s, 0 błędów TS).
   - Git commit & push.

---

## 5. Handoff Bootstrap Prompt (Kopiuj-Wklej do Nowej Sesji)

```markdown
Kontynuujemy rozwój BusOS w NOWEJ SESJI zgodnie z protokołem PLAN.md.

1. Załaduj wymagane skille: `spec-driven-development`, `skill-backend-architect`, `skill-qa-engineer`, `skill-codebase-onboarding`.
2. Przeczytaj pliki SSOT: `PLAN.md`, `NEXT_SESSION_PLAN.md` oraz `docs/contracts/DATA_DICTIONARY_AND_API_SSOT.md`.
3. Stan bazowy po Sprincie 1:
   - Potok `scripts/pipeline/15_compute_stop_dna.py` generuje pełną symetrię metryk mikro (`stop_*`) i makro (`hub_*`).
   - Wyeksportowano dwie warstwy GeoPackage: `stop_dna.gpkg` (1357 słupków w Kielcach) i `hubs.gpkg` (817 węzłów z centroidami WGS84 Point).
   - Test `scripts/pipeline/tests/test_stop_hub_symmetry.py` zalicza wszystkie 8 bramek weryfikacyjnych.
   - Step 17 (`17_build_h3_grid.py`) i endpoint `/api/v1/hexagons` działają bezbłędnie (843 hexy w Kielcach, 0.27s).
   - Backend `TestClient` i Frontend `npm run build` (2.3s, 0 błędów TS) są zielone.
   - Ostatni commit: `9fe7dc5` na `origin/main`.
4. Cel nowej sesji: Realizacja SPRINTU 2 z PLAN.md (Granularne, Inteligentne API w `backend/app/routers/`):
   - Rozbicie monolitycznego `main.py` na czyste routery domenowe: `stops.py`, `hubs.py`, `hexagons.py`, `market.py`, `analytics.py`, `ai.py`.
   - Nowe endpointy:
     * `GET /api/v1/stops?city={city}` oraz `GET /api/v1/stops/{id}?city={city}` (profil słupka z `stop_dna.gpkg`)
     * `GET /api/v1/hubs?city={city}` (z `hubs.gpkg`) oraz `GET /api/v1/hubs/{id}?city={city}` (karta huba + tablica przypisanych `hub_stops_ids`)
     * `GET /api/v1/market/summary?city={city}` (dane z `rcn_stats.json`)
     * `GET /api/v1/analytics/axe-list?city={city}` (audyt kanibalizacji TCRP Report 100 na poziomie fizycznych słupków)
     * `GET /api/v1/analytics/transit-deserts?city={city}` (The Investment List z siatki H3)
   - 100% kompatybilności wstecznej dla wszystkich dotychczasowych tras.
   - Rygor: zakaz modyfikacji frontendu w tym sprincie. Weryfikacja przez `TestClient` / `pytest`.
```


