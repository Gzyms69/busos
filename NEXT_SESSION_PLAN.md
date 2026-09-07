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

### Task 5 (Sprint 2): Ogólnopolski Potok Danych (30 Miast) & Modularne API (`backend/app/routers/`)
- **Pełna Skala Ogólnopolska (30 Miast)**:
  - Przeliczono potok `scripts/pipeline/15_compute_stop_dna.py --city all --stitch` dla wszystkich 30 skalibrowanych aglomeracji.
  - Wygenerowano zunifikowaną bazę ogólnopolską: `data/database/master_stop_dna_poland.gpkg` (30 MB) oraz `.csv` (38 MB) z percentylami i rangami krajowymi.
  - Wygenerowano siatkę Uber H3 Res 8 dla całej Polski: `17_build_h3_grid.py --city all` (**36 784 komórki H3** we wszystkich 30 miastach).
- **Weryfikacja Symetrii (0 Stop Loss)**:
  - `scripts/pipeline/tests/test_stop_hub_symmetry.py --all`: **30/30 miast zaliczyło 8/8 bramek weryfikacyjnych** (np. Warszawa: 10 393 słupki / 4 714 hubów, GZM: 10 253 słupki / 4 806 hubów, Kielce: 1 357 słupków / 817 hubów).
- **Modularna Architektura API**:
  - `backend/app/routers/stops.py`: `GET /api/v1/stops`, `GET /api/v1/stops/{stop_id}` (profil słupka).
  - `backend/app/routers/hubs.py`: `GET /api/v1/hubs`, `GET /api/v1/hubs/{hub_id}` (karta huba z `hub_stops_ids`), `GET /api/v1/hubs/{hub_id}/details`, `/full`.
  - `backend/app/routers/hexagons.py`: `GET /api/v1/hexagons`, `GET /api/v1/hexagons/{hex_index}`, `GET /api/v1/hexagons/{hex_index}/stops`.
  - `backend/app/routers/market.py`: `GET /api/v1/market/summary`, `GET /api/v1/market/transactions`, alias `/api/v1/transactions`.
  - `backend/app/routers/analytics.py`: `GET /api/v1/analytics/axe-list` (TCRP 100), `GET /api/v1/analytics/transit-deserts` (The Investment List).
  - `backend/app/routers/ai.py`: `POST /api/v1/ai/similar-hubs` (wektorowe podobieństwo Stop DNA w skali kraju).
- **6-Poziomowa Drabina Testowa Pytest (`backend/tests/test_api_v1.py`)**:
  - **9/9 testów PASSED w 10.25s**:
    * Tier 0: Global Poland & Pętla Sanity 30/30 miast dla wszystkich tras.
    * Tier 1: Warszawa (Mega Metropolia, >10k słupków, >4k heksów).
    * Tier 2: Wrocław (Duże Miasto Regionalne, dynamiczny schemat POI, fuzja RCN).
    * Tier 3: GZM (Aglomeracja Policentryczna, 10 253 słupki, 4 806 hubów).
    * Tier 4: Kielce (Średnie Miasto Wzorcowe, 1357 słupków, 817 hubów, 843 heksy).
    * Tier 5: Suwałki (Miasto Brzegowe, odporność na małe próby, AI similarities).
    * Backward Compatibility: 100% zgodności wstecznej dla tras legacy.
- **Frontend & Git Mandate**:
  - `npm run build` w `urban-dashboard` przechodzi w **2.3s** (0 błędów TypeScript).

---

## 3. Decyzje Architektoniczne z Sesji Grill-Me & PLAN.md (LOCKED)

1. **Jeden Sprint na Sesję**: Działamy w ścisłej izolacji celów zgodnie z `PLAN.md`.
2. **Modularyzacja API & Maksymalizacja Danych (Sprint 2 - ZREALIZOWANO)**:
   - Wszystkie routery domenowe wdrożone w `backend/app/routers/`.
3. **100% Kompatybilności Wstecznej (ZREALIZOWANO)**:
### Task 6 (Sprint 3): Zaawansowany Pakiet Testów Pytest & Audyt Domenowy (Golden DNA Standard)
- **Rozszerzenie Zestawu Testowego (`backend/tests/`)**:
  - `backend/tests/test_spatial_engine.py` (15 testów):
    * Model Huffa (bufor 500m Haversine, ranking grawitacyjny $(w \cdot \text{sum\_pull})$ malejąco, agregacja demograficzna).
    * Audyt TCRP Report 100 ($cKDTree$ w buforze 200m, monotoniczność zaniku Gaussa, wzór nakładania kół $r = 300\text{m}$, reguła asymetrii odjazdów).
    * Dynamiczna introspekcja DuckDB (odporność na brak kolumn w Parquet, fallback T0–T6, sanityzacja NaN).
    * Odporność brzegowa (nieistniejące slugi, brakujące pliki, ujemne/skrajne współrzędne, test 30 miast).
  - `backend/tests/test_golden_dna_domain.py` (39 testów):
    * Weryfikacja Standardu Złotego Audytu DNA (`GOLDEN DNA AUDIT`): Zero NaNs/Infs w stop_dna i hubs.
    * Rozkład Gaussa Z-Score: $\mu \in [-0.5, 0.5]$, $\sigma \in [0.5, 1.5]$ w unikalnych hubach.
    * Brak kompresji percentyli ($0\% - 100\%$) i równomierność rang $A+$ do $F$.
    * Baza ogólnopolska `master_stop_dna_poland.gpkg` (30 miast, >50k słupków, 0 nulli w rangach).
    * Granice geograficzne WGS84 dla Polski ($49.0 \le lat \le 55.0$, $14.0 \le lon \le 24.5$).
    * Realizm ekonomiczny cen transakcyjnych RCN oraz demografii GUS 250m.
    * Weryfikacja matematyczna wskaźnika TDI w komórkach Uber H3.
- **Wyniki Weryfikacji (100% Green)**:
  - `uv run pytest backend/tests/ -v`: **63/63 testów PASSED w 12.47s**.
  - `npm run build --prefix urban-dashboard`: **sukces w 2.4s (0 błędów TypeScript)**.

---

## 3. Decyzje Architektoniczne z Sesji Grill-Me & PLAN.md (LOCKED)

1. **Jeden Sprint na Sesję**: Działamy w ścisłej izolacji celów zgodnie z `PLAN.md`.
2. **Standard Złotego Audytu DNA (Sprint 3 - ZREALIZOWANO)**:
   - Wszystkie metryki transportowe i przestrzenne audytowane pod kątem sensu fizycznego, rozkładów statystycznych i praw geografii.
3. **100% Kompatybilności Wstecznej (ZREALIZOWANO)**:
   - Wszystkie routery domenowe i legacy endpointy działają w 100% spójnie.
4. **Mandat Gita**:
   - Każdy sprint kończy się aktualizacją `PLAN.md`, `NEXT_SESSION_PLAN.md` oraz `git commit && git push origin main`.

---

## 4. Action Items dla Kolejnej Sesji (Sprint 4: Palantir Foundry UI & Blueprint.js)

1. **Krok 1: Wdrożenie Blueprint.js w Next.js**:
   - Instalacja i konfiguracja `@blueprintjs/core@^6.16.0` oraz `@blueprintjs/table` w `urban-dashboard`.
2. **Krok 2: Foundry Split Layout**:
   - Podział ekranu: Interaktywna mapa 3D Deck.gl + profesjonalny DataGrid.
3. **Krok 3: Tabele Domenowe**:
   - "The Axe List" (audyt redukcji słupków TCRP 100) z podglądem par przystanków.
   - "The Investment List" (pustynie transportowe H3) z sortowaniem po TDI.
4. **Krok 4: Weryfikacja jakościowa & Git Mandate**:
   - `npm run build` w `urban-dashboard` (<3s, 0 błędów TS).
   - `uv run pytest backend/tests/ -v` (63/63 passed).
   - Git commit & push.

---

## 5. Handoff Bootstrap Prompt (Kopiuj-Wklej do Nowej Sesji)

```markdown
Kontynuujemy rozwój BusOS w NOWEJ SESJI zgodnie ze standardem PLAN.md (Sprint 4).

1. Załaduj wymagane skille: `spec-driven-development`, `skill-frontend-architect`, `skill-qa-engineer`, `skill-codebase-onboarding`.
2. Przeczytaj pliki SSOT: `PLAN.md`, `NEXT_SESSION_PLAN.md` oraz `docs/contracts/DATA_DICTIONARY_AND_API_SSOT.md`.
3. Stan bazowy po Sprincie 3:
   - Baza ogólnopolska i siatka H3: 30 miast, 36 784 komórek H3, certyfikowana symetria 8/8 w 30 miastach.
   - Pełny pakiet testów Pytest: 63/63 PASSED w 12.47s (API v1, Spatial Engine, Golden DNA Domain Integrity).
   - Frontend: Next.js 16.2.1 Turbopack, Deck.gl v9, H3HexagonLayer GPU compute, buduje się w 2.4s (0 błędów TS).
4. Pre-Flight Verification Command:
   `uv run pytest backend/tests/ -v && npm run build --prefix urban-dashboard`
5. Cel sesji: Realizacja SPRINTU 4 z PLAN.md (Frontend Palantir Foundry UI & Blueprint.js):
   - Wdrożenie `@blueprintjs/core` i `@blueprintjs/table` w layoutcie dwudzielnym (Foundry split).
   - Zaawansowane widoki analityczne: "The Axe List" (TCRP 100) oraz "The Investment List" (Pustynie Transportowe H3).
   - Weryfikacja: `npm run build` < 3s, 0 błędów TS.
   - Git Mandate: commit i push do `origin/main`.
```



