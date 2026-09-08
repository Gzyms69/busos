# BusOS Tactical Roadmap & Session State (SSOT)

> **Document Status:** `ACTIVE SSOT` (Updated after Sprint 3.8 Completion — 100% Data Access)  
> **Target Scale:** 30 Calibrated Cities Live on OCI Cloud & Vercel Global Edge (210 Data Files, 104/104 Pytest Passed, 28 REST Routes).

---

## 1. Executive Context & Verified Baseline State

- **Frontend**: Live on Vercel Global Edge ([https://busos.czerwinskidawid.pl](https://busos.czerwinskidawid.pl)), Next.js 16.2.1 Turbopack, React 19, Deck.gl v9, MapLibre GL.
  - **Build Status**: `npm run build` succeeds in **4.6s**; `npx tsc --noEmit` passes with **0 errors**.
- **Backend**: Live on Oracle Cloud Infrastructure Ampere A1 ARM64 ([https://api.busos.czerwinskidawid.pl](https://api.busos.czerwinskidawid.pl)), FastAPI 0.115+, DuckDB 1.2+, Qdrant Vector Engine (port 6333), Caddy 2 with auto Let's Encrypt TLS 1.3 / HTTP/3.
  - **Health Telemetry**: `{"status":"healthy","version":"9.5.0","active_cities_count":30,"qdrant_connected":true}`.
  - **Automated CI/CD**: GitHub Actions workflow (`.github/workflows/deploy-backend.yml`) deploys to OCI ARM64 in 2m 1s.
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
  - `uv run pytest backend/tests/ -v`: **63/63 testów PASSED w 11.69s**.
  - `npm run build --prefix urban-dashboard`: **sukces w 2.4s (0 błędów TypeScript)**.

### Task 7 (Sprint 3 Finale - Commit `54e9915`): Ekshibicyjny Audyt Złotego DNA v4.2
- **Aktualizacja Walidatora ([`scripts/tools/100_percent_dna_validator.py`](file:///home/gzyms/Dev%20Projects/busos/scripts/tools/100_percent_dna_validator.py))**:
  - Rozdzielenie inspekcji na: Słupki Fizyczne Micro (60 265 słupków z 22 metrykami) oraz Węzły Logiczne Macro (28 317 hubów z 17 metrykami i wskaźnikiem konsolidacji).
  - Pełna statystyka siatki Uber H3 Res 8 (36 784 komórki): rozkłady cen transakcyjnych mieszkań RCN (średnia, mediana, std, min, max, pokrycie %), demografia GUS NSP 2021, podaż transportu, wskaźnik TDI, tabele TOP 5 Pustyń Transportowych, Biegunów Transportu i Najdroższych Heksów.
  - Audyt redukcji TCRP Report 100: liczba zbędnych słupków dla progów 0.50, 0.70, 0.90 oraz tabela TOP 5 par kanibalizujących się.
  - Hierarchia magnesów miejskich: Top 20 kategorii oraz TOP 10 konkretnych nazwanych obiektów z Tierów 0, 1 i 2 (dworce, lotniska, szpitale kliniczne, stadiony) posortowanych malejąco po wadze $W$.
  - Korekta demograficzna strefy aglomeracyjnej (`OBSZAR AGLOMERACYJNY: +X%`).
- **Opublikowany Megaraport Ogólnopolski**:
  - `reports/audits/GOLDEN_DNA_AUDIT_20260907_2356.md` (831 KB, 26 235 linii, 30/30 miast, zero NaNs/Infs).

---

## 3. Decyzje Architektoniczne z Sesji Grill-Me & PLAN.md (LOCKED)

1. **Jeden Cel na Sesję**: Działamy w ścisłej izolacji celów zgodnie z `PLAN.md`.
2. **Contract-First & Universal API Data Access (Przed Budową Frontendu)**:
   - Zanim przystąpimy do budowy UI w Next.js (Palantir Foundry / Blueprint.js), backend API musi oferować całkowitą swobodę wyciągania 100% zebranych i przetworzonych danych z audytu.
   - Zapobieganie ściąganiu ciężkich GeoJSONów (10 MB) na frontend – każdy widget UI musi mieć dedykowany, lekki (<15ms) endpoint JSON.
3. **100% Kompatybilności Wstecznej (ZREALIZOWANO)**:
   - Wszystkie routery domenowe i legacy endpointy działają w 100% spójnie.
4. **Mandat Gita**:
   - Każdy krok kończy się aktualizacją `PLAN.md`, `NEXT_SESSION_PLAN.md` oraz `git commit && git push origin main`.

---

### Task 8 (Sprint 3.5): Universal Query Engine & 100% Audit Data Access w API
- **Uniwersalne Rankingi & Paginacja Exact Rank**:
  - `GET /api/v1/stops/ranking` (ze swobodnym limitem, sortowaniem po 53 metrykach, `rank=N` 1-based exact position, `grade=A+..F`, `h3_index`).
  - `POST /api/v1/stops/batch` (masowy lookup pełnych profili słupków).
  - `GET /api/v1/hubs/ranking` (ranking węzłów makro z `min_stops`).
  - `GET /api/v1/hexagons/ranking` (ranking siatki H3 po TDI, cenach RCN, populacji GUS, odjazdach) + `GET /api/v1/hexagons/{hex_index}/profile` (profil 360° heksa łączący heks, słupki, RCN i POI).
  - `GET /api/v1/market/transactions/ranking` (ranking notarialny RCN) + `GET /api/v1/market/transactions/nearby` (bufor metryczny EPSG:2180) + `GET /api/v1/market/h3-analysis` (6 przedziałów cenowych, korelacja z transportem).
- **Nowy Router POI (`backend/app/routers/poi.py`)**:
  - `GET /api/v1/poi/magnets`: TOP X kluczowych nazwanych atraktorów miejskich (T0–T2) posortowanych wagą grawitacji z odfiltrowaniem zaślepek.
  - `GET /api/v1/poi/categories`: wykaz 20 kategorii z wagami $W$.
- **Karta Audytowa Miasta & Ogólnopolski Leaderboard (`backend/app/routers/analytics.py`)**:
  - `GET /api/v1/analytics/audit-summary?city=...&include=summary,zscore,grades,h3,rcn,tcrp,poi,samples,all` z modułową selekcją sekcji.
  - `GET /api/v1/analytics/national-ranking?scope=stops|hubs|hexagons|cities&rank=N`.
  - `GET /api/v1/analytics/metric-distribution?city=...&metric=...` (kwantyle i 10-bin histogram pod sparklines).
  - `GET /api/v1/analytics/compare-cities?city_a=...&city_b=...`.
- **Wyniki Weryfikacji (100% Green)**:
  - `uv run pytest backend/tests/ -v`: **78/78 testów PASSED w 19.52s** (100% zielone; 24/24 w `test_api_v1.py`).
  - `npm run build --prefix urban-dashboard`: **sukces w 2.3s (0 błędów TypeScript)**.

---

## 3. Decyzje Architektoniczne z Sesji Grill-Me & PLAN.md (LOCKED)

1. **Jeden Cel na Sesję**: Działamy w ścisłej izolacji celów zgodnie z `PLAN.md`.
2. **Contract-First & Universal API Data Access (ZREALIZOWANO)**:
   - Backend API oferuje całkowitą swobodę wyciągania 100% zebranych i przetworzonych danych z audytu.
   - Zapobieganie ściąganiu ciężkich GeoJSONów (10 MB) na frontend – każdy widget UI ma dedykowany, lekki (<15ms) endpoint JSON.
3. **100% Kompatybilności Wstecznej (ZREALIZOWANO)**:
   - Wszystkie routery domenowe i legacy endpointy działają w 100% spójnie.
4. **Mandat Gita**:
   - Każdy krok kończy się aktualizacją `PLAN.md`, `NEXT_SESSION_PLAN.md` oraz `git commit && git push origin main`.

### Task 9 (Sprint 3.6 - Commit `da2bc6c`): GTFS Route Network & Pre-Materialized RCN Spatial Bridge (Definitive v6)
- **Problem & Cele Rozwiązane:**
  1. Wykorzystanie 100% danych GTFS: rekonstrukcja geometrii tras (`transit_routes.gpkg`), sekwencji przystanków (`stop_route_matrix.parquet`) oraz topologicznego grafu przesiadkowego (`transit_network_edges.parquet`).
  2. Izolacja multi-feed GTFS (`route_uid = f"{feed_id}_{route_id}"`) i eliminacja kolizji linii o tych samych numerach u różnych przewoźników aglomeracji.
  3. Czysty czas przejazdu $u \to v$: $\Delta t = \text{arrival}(v) - \text{departure}(u)$ (eliminacja dwell time na przystanku docelowym).
  4. 100% retencji transakcji RCN od 2020 r. na backendzie z sub-15ms czasem odpowiedzi bez geometrycznych przecięć w runtime HTTP.
  5. Rygorystyczny filtr jakościowy lokali mieszkalnych na wolnym rynku (`lok_funkcja == 'mieszkalna'`, `tran_rodzaj_trans == 'wolnyRynek'`) odrzucający garaże i wykupy bonifikatowe.
  6. Jawna ekstrakcja współrzędnych `lon`, `lat` i indeksu Uber H3 Res 8 w `transactions.parquet`.
  7. Zwektoryzowany dystans C/GEOS w `15_compute_stop_dna.py` oraz fizyczne sortowanie `['stop_id', 'dok_data']` z `row_group_size=50000` pod sprzętowe Zone Maps w DuckDB.
  8. Metryczny bufor BBox w EPSG:2180 (5 km) z auto-synchronizacją `config/extract_config.json` w `02_collect_stops.py`.
  9. Integracja orkiestratora: włączenie Kroku 01b i Kroku 17 do głównej pętli potoku w `orchestrator.py`.
  10. Serwis domenowy DuckDB (`market_bridge.py`) z dynamicznym składaniem `WHERE dok_data >= ?::DATE` bezpośrednio na `read_parquet(?)` (brak race conditions, czysty Predicate Pushdown).
  11. Nowe routery API: `/routes` (lista linii, GeoJSON geometrii, rozkłady per słupek, krawędzie grafu) oraz `/market` (`/market/stops-summary`, `/market/stop/{id}/transactions`, `/market/h3-grid`).
  12. FastAPI Lifespan singleton DuckDB w `main.py`.
- **Dowody Weryfikacji (100% Green):**
  - `uv run pytest backend/tests/ -v`: **89/89 testów PASSED w 19.81s** (100% sukces, 5 dedykowanych nowych plików testowych).
  - `npm run build --prefix urban-dashboard`: sukces w **2.4s** (0 błędów TypeScript).
  - Git Commit & Push: Commit `da2bc6c` na gałęzi `main`.

---

### Task 10 (Sprint 3.7 - Commit `86fed85`): Stabilizacja Ogólnopolska (30 Miast), Izolacja Subprocesów i Złoty Mostek C-Spatial
- **Architektura Izolacji Subprocesów (Subprocess Isolation)**:
  - Wyeliminowano awarie OOM Killer i zjawisko Swap Death w przetwarzaniu potoku dla 30 miast.
  - Wycieki pamięci i fragmentacja sterty w alokatorze C++ `glibc` zostały wyeliminowane poprzez delegowanie każdego miasta do niezależnego procesu systemowego (`subprocess.run`), wymuszając natychmiastowe zwolnienie stron pamięci RAM do jądra Linux.
- **Optymalizacja Złączeń Przestrzennych C-GEOS `shapely.STRtree`**:
  - Zastąpiono alokację ciężkich wielokątów (10 000 buforów po 64 wierzchołki) bezalokacyjnym indeksem punktowym `shapely.STRtree.query(predicate='dwithin', distance=500.0)`.
  - Zużycie pamięci RAM spadło z 28 GB do <200 MB, a czas złączenia 222 tys. transakcji notarialnych RCN ze słupkami skrócił się do 6 ms na miasto.
- **Silnik Ekstrakcji Tras GTFS w DuckDB C++ & Kursy Nocne ($\ge 24:00:00$)**:
  - Wdrożono arytmetykę dobową w SQL (`split_part`) przeliczającą czas bezpośrednio do sekund od północy, eliminując błędy parsowania typu `TIME` dla kursów po północy.
- **Universal Query Engine z Paginacją Exact Rank (`rank=N`) & SQL Injection Whitelisting**:
  - Sub-15ms wyszukiwanie i sortowanie po 53 metrykach w API z rygorystyczną białą listą kolumn.
- **Diagnostyka i Stabilizacja Środowiska Produkcyjnego OCI Ampere A1 ARM64**:
  - Wyeliminowano błąd 502 Bad Gateway w kontenerach Docker poprzez jawną konfigurację bibliotek C-Spatial (`geopandas>=1.0.0`, `pyogrio>=0.9.0`, systemowy GDAL/GEOS).
- **Dowody Weryfikacji (100% Green)**:
  - `uv run pytest backend/tests/ -v`: **95/95 testów PASSED w 22.2s** (100% sukces, 5 dedykowanych nowych plików testowych).
  - `npm run build --prefix urban-dashboard`: sukces w **4.6s** (0 błędów TypeScript).
  - `python3 scripts/tools/verify_nationwide_data.py`: **30/30 miast (100.0%), 210/210 wygenerowanych plików**.
  - OCI Live Telemetry: `{"status":"healthy","version":"9.5.0","active_cities_count":30,"qdrant_connected":true}` (HTTP 200).
  - Git Commit & Push: Commit `86fed85` na gałęzi `main`.

---

## 4. Action Items dla Kolejnej Sesji (Sprint 4: Frontend Palantir Foundry UI & Blueprint.js)

1. **Krok 1: Wdrożenie Layoutu Dwudzielnego (Foundry Split)**:
   - Podział ekranu: Mapa Deck.gl 3D (lewa strona) + interaktywny DataGrid `@blueprintjs/table` (prawa strona) z regulowanym splitterem.
2. **Krok 2: Tabela Analityczna "The Axe List" (Audyt Redukcji Słupków)**:
   - Integracja z endpointem `GET /api/v1/analytics/axe-list`.
   - Prezentacja par słupków kanibalizujących się wg TCRP Report 100 z wyliczeniem potencjalnych oszczędności eksploatacyjnych.
3. **Krok 3: Tabela Inwestycyjna "The Investment List" (Pustynie Transportowe)**:
   - Integracja z endpointem `GET /api/v1/analytics/transit-deserts`.
   - Wizualizacja komórek siatki Uber H3 Res 8 o wysokim deficycie transportowym (TDI) i wysokiej gęstości zaludnienia GUS NSP 2021.
4. **Krok 4: Trójstopniowy Przełącznik Widoku (Micro / Macro / Meso)**:
   - Płynne przełączanie widoków: Słupki Fizyczne Micro (`/api/v1/stops`), Węzły Logiczne Macro (`/api/v1/hubs`), Siatka Analityczna H3 Meso (`/api/v1/hexagons`).
5. **Krok 5: Weryfikacja Jakościowa & Git Mandate**:
   - `uv run pytest backend/tests/ -v` (potwierdzenie 95/95 passed).
   - `npm run build --prefix urban-dashboard` (<5s, 0 błędów TypeScript).
   - Commit i push do `origin/main`.

---

## 5. Handoff Bootstrap Prompt (Kopiuj-Wklej do Nowej Sesji)

```markdown
Kontynuujemy rozwój BusOS w NOWEJ SESJI zgodnie ze standardem PLAN.md (Sprint 4: Frontend Palantir Foundry UI & Blueprint.js).

1. Załaduj wymagane skille:
   `view_file` na:
   - `.agents/skills/skill-codebase-onboarding/SKILL.md`
   - `.agents/skills/spec-driven-development/SKILL.md`
   - `.agents/skills/skill-frontend-architect/SKILL.md`
   - `.agents/skills/skill-qa-engineer/SKILL.md`
2. Przeczytaj pliki SSOT:
   - `PLAN.md`
   - `NEXT_SESSION_PLAN.md`
   - `docs/contracts/DATA_DICTIONARY_AND_API_SSOT.md`
3. Stan bazowy po Sprincie 3.8 (100% Data Access & API Gap Closure):
   - Ogólnopolska baza 30 miast w 100% wygenerowana i dostępna przez 28 tras API (210 plików GPKG/Parquet, 60 265 słupków, 28 317 hubów, 36 784 heksy H3).
   - Nowe trasy API wdrożone i zweryfikowane:
     * `GET /api/v1/cities/{city}/boundary` (geometria granicy z `transport_zone.gpkg` + `area_km2`).
     * `GET /api/v1/poi/search` (wyszukiwarka i filtr POI po nazwie i kategorii na `poi_matrix.parquet`).
     * `GET /api/v1/market/trends` (agregaty roczne i kwartalne RCN 2020–2026 na poziomie miasta lub słupka).
     * `GET /api/v1/routes/stop/{stop_id}/destinations` (1-hop bezpośrednia osiągalność z `transit_network_edges.parquet`).
     * `GET /api/v1/analytics/metric-distribution?city=all` (ogólnopolski benchmark rozkładu z bazy krajowej).
     * Pełna parzystość typów Pydantic: `h3_index`, `stop_entropy`, `stop_liquidity`, `hub_raw_gravity`, `hub_entropy`, `hub_liquidity`.
   - Produkcyjne środowisko OCI ARM64 w pełni ustabilizowane z automatycznym CI/CD GitHub Actions (2m 1s).
   - Testy: 104/104 Pytest PASSED (21.9s), Next.js build PASSED w 4.6s (0 błędów TS).
4. Pre-Flight Verification Command:
   `npm run build --prefix urban-dashboard && uv run pytest backend/tests/ -v`
5. Cel sesji (Sprint 4):
   Przebudowa interfejsu analitycznego `urban-dashboard` na wzór Palantir Foundry z wykorzystaniem Blueprint.js (`@blueprintjs/core@^6.16.0` oraz `@blueprintjs/table`):
   - Krok 1: Wdrożenie layoutu dwudzielnego (Foundry Split): Mapa Deck.gl 3D + DataGrid Blueprint.js z regulowanym splitterem.
   - Krok 2: Interaktywna tabela "The Axe List" (redukcja słupków wg TCRP 100) z linkowaniem do mapy.
   - Krok 3: Interaktywna tabela "The Investment List" (pustynie transportowe z TDI) z wycenami mieszkań RCN.
   - Krok 4: Przełącznik analityczny: Słupki (Micro) vs Huby (Macro) vs Siatka H3 (Meso).
   - Krok 5: Weryfikacja jakościowa (Pytest 104/104, TypeScript 0 błędów) oraz git commit i push do origin/main.
```




