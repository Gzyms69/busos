# BusOS Master Sprint Plan & Session Tracker (SSOT)

> **Lokalizacja:** `PLAN.md` (Główny katalog projektu / Root Directory)  
> **Status:** `LIVING SSOT` — Każdy agent ma obowiązek przeczytać ten plik na początku sesji i zaktualizować go na koniec sesji.  
> **Zasada naczelna:** Działamy krok po kroku w małych, izolowanych sesjach (sprintach). Jedna sesja = jeden cel. Zakaz łączenia sprintów!

---

## 0. Protokół Pracy dla Agentów (Agent Rules of Engagement)

1. **Jeden Sprint na Sesję:** Agent realizuje wyłącznie zadania przypisane do bieżącego sprintu. Zakaz zaczynania zadań z kolejnych sprintów bez zakończenia i przetestowania bieżącego.
2. **Aktualizacja na Żywo:** Po zakończeniu pracy w sesji agent ma obowiązek:
   - Zaktualizować status sprintu (`[DONE]`, `[IN PROGRESS]`).
   - Wpisać twarde dowody weryfikacji (wyniki testów, zrzuty konsoli, czas wykonania).
   - Zaktualizować sekcję *„Co robimy w następnej sesji”*.
3. **Prawda o Infrastrukturze:**
   - Frontend: Vercel Global Edge (automatyczny deploy przy `git push origin main`).
   - Backend: OCI Ampere A1 ARM64 (w 100% zautomatyzowane CI/CD przez GitHub Actions `.github/workflows/deploy-backend.yml` przy każdym pushu do main; natywny build ARM64 w 2m 1s z zerowym przestojem).
4. **Zero regresji:** Po każdej modyfikacji kodu agent musi potwierdzić:
   - Frontend: `npm run build` (musi kompilować się w <3s, 0 błędów TS).
   - Backend: `TestClient` lub `pytest` musi zwracać 200 OK.
5. **MANDAT GITA (Commit & Push po każdym etapie):** Po zakończeniu każdego etapu/sprintu agent ma bezwzględny obowiązek wykonać: `git add .`, `git commit -m '...'` oraz `git push origin main`. Wszystkie zmiany muszą być natychmiast utrwalone w zdalnym repozytorium.
6. **MANDAT CAŁEJ POLSKI & 6-POZIOMOWA DRABINA TESTOWA (Tier 0 - Tier 5):**
   - Zakaz ograniczania pipeline'u i weryfikacji wyłącznie do jednego miasta. Każda zmiana w logice danych lub API musi być przeliczona i sprawdzona dla **wszystkich 30 skalibrowanych aglomeracji w Polsce**.
   - **Tier 0: Global Poland (National Scale):** Weryfikacja bazy ogólnokrajowej `data/database/master_stop_dna_poland.gpkg` oraz pełna pętla sanity 30/30 miast w API (100% miast zwraca HTTP 200 na wszystkich endpointach domenowych).
   - **Tier 1: Mega Metropolia:** `warszawa` (największa skala: ~6.5k słupków, 4.4k heksów H3, test wydajności DuckDB < 500ms).
   - **Tier 2: Duże Miasto Regionalne:** `wroclaw` (złożony układ promienisty, dynamiczna introspekcja schematu POI, fuzja RCN).
   - **Tier 3: Aglomeracja Policentryczna:** `gzm` (ponad 7k słupków, konurbacja górnośląska, fuzja wielu podsieci).
   - **Tier 4: Średnie Wojewódzkie (Wzorzec):** `kielce` (1357 słupków, 817 hubów, 843 heksy, certyfikowane 8 bramek symetrii).
   - **Tier 5: Miasto Brzegowe / Peryferyjne:** `suwalki` / `swinoujscie` (skrajne przypadki brzegowe, małe próby, odporność na dzielenie przez zero).

---

## 1. Rejestr Sprintów (Sprint Registry)

```
[Sprint 3.6: GTFS & RCN] ──► [Sprint 3.7: Trasy & LRS] ──► [Sprint 3.8: 100% Data Access] ──► [Sprint 4: Palantir UI] ──► [Sprint 5: AI Qdrant]
         [DONE]                         [DONE]                          [DONE]                       [NASTĘPNA SESJA]            [PLANNED]
```

---

### Sprint 0: Stabilizacja Bazy, DuckDB 500 & Siatka H3 Res 8
- **Status:** `[DONE]` (Zrealizowano 2026-09-07)
- **Cel:** Usunięcie błędów 500 na produkcji, wygenerowanie siatki analitycznej H3 oraz optymalizacja mapy Deck.gl.
- **Wykonane zadania:**
  1. Naprawa zapytania DuckDB w `backend/app/spatial_engine.py` (dynamiczna introspekcja schematu w `poi_matrix.parquet`, koniec błędów 500 w Warszawie, Wrocławiu, Poznaniu).
  2. Implementacja kroku pipeline `scripts/pipeline/17_build_h3_grid.py` (fuzja GTFS, GUS 250m, RCN i POI w komórkach H3 Res 8) oraz endpointu `/api/v1/hexagons`. Wygenerowano siatki dla 6 miast.
  3. Frontend: dodanie `AbortController` w `MapContainer.tsx`, wdrożenie natywnego GPU `H3HexagonLayer`, odblokowanie klikania w fizyczne przystanki.
- **Dowody weryfikacji:**
  - `npm run build` w `urban-dashboard` przechodzi w **2.3s** (0 błędów TypeScript).
  - Zapytania do Warszawy (767 POI), Wrocławia (437 POI), Kielc (755 POI) zwracają HTTP 200.
  - TestClient backendu zwraca HTTP 200 dla `/api/v1/hexagons?city=kielce` (843 komórki H3).

---

### Sprint 1: Fundament Danych & Pełna Symetria Słupek vs Hub
- **Status:** `[DONE]` (Zrealizowano 2026-09-07)
- **Cel:** Przebudowa potoku danych `scripts/pipeline/15_compute_stop_dna.py` bez modyfikacji API i frontendu.
- **Wykonane zadania:**
  1. **Natywne obliczenie 4 filarów dla każdego fizycznego słupka (`stop_id`):**
     - Transport: `stop_departures_h` (kursy/h), `stop_routes_count`, `stop_routes` (linie GTFS).
     - POI: `stop_raw_gravity`, `stop_entropy`, `stop_infra_score` (w promieniu 500m z modelem Huffa).
     - Demografia: `stop_pop_val` (ludność GUS NSP 2021 z uwzględnieniem kanibalizacji popytu).
     - Rynek RCN: `stop_market_val` (mediana transakcji z filtrem IQR w promieniu 500m), `stop_liquidity`.
     - Ocena i ranga: `stop_local_score_raw` (Z-Score), `stop_percentile` (0-100%), `stop_grade` (`A+`..`F`) w populacji słupków miasta.
  2. **Zachowanie metryk makro huba (`hub_*`) oraz relacji:**
     - `stop_hub_share` (`stop_departures_h / hub_departures_h` w przedziale $[0.0, 1.0]$).
     - `is_hub_anchor` (dokładnie jeden anchor na hub dla słupka o najwyższym potoku odjazdów).
     - Zachowanie 100% aliasów wstecznych (`infra_score`, `transit_freq`, `pop_val`, `market_val`, `local_score_raw`, `local_percentile`, `grade`).
  3. **Eksport dwóch dedykowanych warstw w `04_results/`:**
     - `stop_dna.gpkg` — 1357 fizycznych słupków (kompletne metryki mikro + metryki huba + aliasy wsteczne).
     - `hubs.gpkg` — 817 unikalnych węzłów logicznych (geometrie centroidów WGS84 Point EPSG:4326, `hub_stops_count`, `hub_stops_ids`, metryki makro).
- **Dowody weryfikacji:**
  - `scripts/pipeline/tests/test_stop_hub_symmetry.py`: Wszystkie 8 bramek weryfikacyjnych zaliczone sukcesem (`All 8 verification gates PASSED for kielce`).
  - Zachowanie słupków: `Raw=1357`, `stop_dna=1357`, `Hubs=817` (zero utraty punktów).
  - Konserwacja odjazdów: $\sum \text{stop\_departures\_h} \ge \text{hub\_departures\_h}$ z zachowaniem reguły sumowania i deduplikacji GTFS.
  - Step 17 (`17_build_h3_grid.py`): 843 komórki H3 wygenerowane bez błędów w 0.27s (197 pustyń transportowych).
  - Backend API regression check: `TestClient` zwraca HTTP 200 OK dla `/api/v1/hubs?city=kielce` (1357 obiektów) oraz `/details` i `/hexagons`.
  - Frontend build check: `npm run build` w `urban-dashboard` przechodzi w **2.3s** (0 błędów TypeScript).

---

### Sprint 2: Ogólnopolski Potok Danych (30 Miast) & Modularne API (`backend/app/routers/`)
- **Status:** `[DONE]` (Zrealizowano 2026-09-07)
- **Cel:** Przeliczenie potoku dla całej Polski (30 miast: `stop_dna.gpkg`, `hubs.gpkg`, `h3_grid.parquet`, `master_stop_dna_poland.gpkg`), rozbicie monolitycznego `main.py` na czyste routery domenowe oraz wdrożenie kompletnego zestawu testów od poziomu Tier 0 (krajowego) do Tier 5.
- **Wykonane zadania:**
  1. **Optymalizacja i przeliczenie potoku dla całej Polski (30 miast):**
     - Wektoryzacja entropii Shannona w `15_compute_stop_dna.py` (redukcja czasu z minut do milisekund).
     - Wygenerowanie symetrycznych warstw `stop_dna.gpkg` i `hubs.gpkg` dla wszystkich 30 skalibrowanych aglomeracji.
     - Wygenerowanie bazy krajowej `data/database/master_stop_dna_poland.gpkg` (30 MB) oraz `.csv` (38 MB) z percentylami ogólnopolskimi.
     - Wygenerowanie siatki Uber H3 Res 8 dla wszystkich 30 miast (`17_build_h3_grid.py --city all`, 36 784 komórki H3).
  2. **Modularne API w `backend/app/routers/` (100% zgodności z SSOT):**
     - `stops.py`: `GET /api/v1/stops`, `GET /api/v1/stops/{stop_id}` (profil fizycznego słupka z `stop_dna.gpkg`).
     - `hubs.py`: `GET /api/v1/hubs`, `GET /api/v1/hubs/{hub_id}` (karta huba z tablicą `hub_stops_ids`), `GET /api/v1/hubs/{hub_id}/details`, `/full`.
     - `hexagons.py`: `GET /api/v1/hexagons`, `GET /api/v1/hexagons/{hex_index}`, `GET /api/v1/hexagons/{hex_index}/stops`.
     - `market.py`: `GET /api/v1/market/summary` (statystyki z `rcn_stats.json`), `GET /api/v1/market/transactions`, alias `/api/v1/transactions`.
     - `analytics.py`: `GET /api/v1/analytics/axe-list` (TCRP Report 100), `GET /api/v1/analytics/transit-deserts` (The Investment List).
     - `ai.py`: `POST /api/v1/ai/similar-hubs` (wyszukiwanie podobieństwa Stop DNA w skali całej Polski).
     - Refaktoryzacja `backend/app/main.py` z zachowaniem tras wstecznych (`/health`, `/api/v1/cities`, `/api/v1/population`).
  3. **Wdrożenie 6-poziomowego zestawu testów Pytest (`backend/tests/test_api_v1.py`):**
     - Tier 0: Global Poland & Pętla Sanity 30/30 miast dla wszystkich tras.
     - Tier 1: Warszawa (Mega Metropolia, >10k słupków, >4k heksów).
     - Tier 2: Wrocław (Duże Miasto Regionalne, dynamiczny schemat POI, fuzja RCN).
     - Tier 3: GZM (Aglomeracja Policentryczna, 10 253 słupki, 4 806 hubów).
     - Tier 4: Kielce (Średnie Miasto Wzorcowe, 1357 słupków, 817 hubów, 843 heksy).
     - Tier 5: Suwałki (Miasto Brzegowe, odporność na małe próby, AI similarities).
- **Dowody weryfikacji:**
  - `scripts/pipeline/tests/test_stop_hub_symmetry.py --all`: **30/30 miast zaliczyło wszystkie 8 bramek weryfikacyjnych** (0 utraty słupków, 100% relacji).
  - `scripts/pipeline/17_build_h3_grid.py --city all`: **36 784 komórek H3 wygenerowanych dla 30 miast**.
  - `pytest backend/tests/test_api_v1.py -v`: **9/9 testów PASSED w 10.25s** (100% zielone od Tier 0 do Tier 5).
  - Frontend build check: `npm run build` w `urban-dashboard` przechodzi w **2.3s** (0 błędów TypeScript).

---

### Sprint 3: Zaawansowany Zautomatyzowany Pakiet Testów Pytest & Audyt Domenowy (Golden DNA Standard)
- **Status:** `[DONE]` (Zrealizowano 2026-09-07)
- **Cel:** Rozszerzenie pokrycia testami integracyjnymi silnika DuckDB i algorytmów przestrzennych TCRP Report 100 oraz wdrożenie rygorystycznego audytu jakości i rozkładów danych Stop DNA w oparciu o standard `GOLDEN DNA AUDIT`.
- **Wykonane zadania:**
  1. **Pakiet testów silnika przestrzennego (`backend/tests/test_spatial_engine.py` - 15 testów):**
     - Model grawitacji Huffa: dokładność bufora 500m (Haversine), sortowanie malejące wg $(w \cdot \text{sum\_pull})$, agregacja komórek demograficznych GUS 250m.
     - Audyt kanibalizacji TCRP Report 100: sąsiedztwo $\le 200\text{m}$ przez `cKDTree`, monotoniczny spadek zaniku Gaussa $s_{\text{spatial}}$, analityczne nakładanie kół strefy zlewni ($r = 300\text{m}$), reguła asymetrycznej redukcji ($departures_{dominant} \ge departures_{redundant}$).
     - Odporność DuckDB na niekompletne schematy: dynamiczna introspekcja brakujących kolumn (`name`, `category`, `tier`) w `poi_matrix.parquet` z automatycznym mapowaniem progów $w$ (T0 do T6).
     - Odporność brzegowa: obsługa nieistniejących miast (`FileNotFoundError`), brakujących ID słupków/hubów/heksów, skrajnych współrzędnych geograficznych.
  2. **Pakiet testów Złotego Standardu DNA (`backend/tests/test_golden_dna_domain.py` - 39 testów):**
     - Zero NaNs & Infs: 100% czystości danych we wszystkich metrykach Stop DNA.
     - Rozkład Gaussa Z-Score: $\mu \in [-0.5, 0.5]$ oraz $\sigma \in [0.5, 1.5]$ w unikalnych hubach miast (brak zapaści statystycznej).
     - Pełne pokrycie percentyli: brak ściśnięcia rozkładu (min $\le 2.0\%$, max $\ge 98.0\%$).
     - Równomierność ocen Stop DNA: obecność wszystkich klas (A+, A, B, C, D, F) bez zapaści.
     - Baza ogólnopolska `master_stop_dna_poland.gpkg`: 30 miast, >50k słupków, 0 nulli w rangach krajowych.
     - Granice WGS84: 100% obiektów mieści się w granicach Polski ($49.0 \le lat \le 55.0$, $14.0 \le lon \le 24.5$).
     - Realizm ekonomiczny i demograficzny: transakcje RCN po filtracji IQR w granicach $2\,500 - 40\,000\text{ PLN/m}^2$, poprawność wskaźnika Pustyni Transportowej (TDI).
- **Dowody weryfikacji:**
  - `uv run pytest backend/tests/ -v`: **63/63 testów PASSED w 12.47s** (100% zielone: `test_api_v1.py` 9/9, `test_spatial_engine.py` 15/15, `test_golden_dna_domain.py` 39/39).
  - Frontend build check: `npm run build` w `urban-dashboard` przechodzi w **2.4s** (0 błędów TypeScript).

---

### Sprint 3.5: Universal Query Engine & 100% Audit Data Access w API
- **Status:** `[DONE]` (Zrealizowano 2026-09-08)
- **Cel:** Całkowite odblokowanie swobody analitycznej w API BusOS przed budową Foundry UI (Sprint 4): uniwersalne endpointy rankingowe z parametrem `rank=N` (dokładna pozycja) i `limit=N`, sortowanie po wszystkich 53 metrykach, profil 360° heksa H3, moduł POI, karta audytowa miasta z modularnym `?include=`, ogólnopolskie tablice liderów oraz porównywarka miast.
- **Wykonane zadania:**
  1. **Uniwersalne rankingi ze swobodnym `limit` i `rank` (1-based exact position):**
     - Słupki fizyczne: `GET /api/v1/stops/ranking` (12.7 ms SQLite) + `POST /api/v1/stops/batch`.
     - Węzły przesiadkowe: `GET /api/v1/hubs/ranking`.
     - Komórki H3 Res 8: `GET /api/v1/hexagons/ranking` + `GET /api/v1/hexagons/{hex_index}/profile`.
     - Transakcje notarialne: `GET /api/v1/market/transactions/ranking` + `GET /api/v1/market/transactions/nearby` + `GET /api/v1/market/h3-analysis`.
  2. **Nowy Router POI (`backend/app/routers/poi.py`):**
     - `GET /api/v1/poi/magnets`: pobieranie kluczowych named obiektów (T0–T2) posortowanych wagą grawitacji z usunięciem nazw zaślepek (`Obiekt`, `bez_nazwy`).
     - `GET /api/v1/poi/categories`: wykaz 20 kategorii z wagami $W$.
  3. **Karta Audytowa Miasta & Ogólnopolski Leaderboard (`backend/app/routers/analytics.py`):**
     - `GET /api/v1/analytics/audit-summary?city=...&include=summary,zscore,grades,h3,rcn,tcrp,poi,samples,all` z modułową selekcją.
     - `GET /api/v1/analytics/national-ranking?scope=stops|hubs|hexagons|cities&rank=N`.
     - `GET /api/v1/analytics/metric-distribution?city=...&metric=...` (kwantyle i 10-bin histogram pod sparklines).
     - `GET /api/v1/analytics/compare-cities?city_a=...&city_b=...`.
  4. **Bezpieczeństwo SQL Injection & Normalizacja Query Strings:**
     - Whitelisty kolumn (`STOP_METRIC_MAP`, `HUB_METRIC_MAP`, `HEX_METRIC_MAP`, `MARKET_METRIC_MAP`) odrzucające nieautoryzowane zapytania kodem 422.
     - Normalizacja parametru `grade=A+` (ochrona przed URL unquoting znaku `+` jako spacji).
- **Dowody weryfikacji:**
  - `uv run pytest backend/tests/ -v`: **78/78 testów PASSED w 19.52s** (100% zielone; 24/24 w `test_api_v1.py`).
  - Frontend build check: `npm run build --prefix urban-dashboard` przechodzi w **2.3s** (Turbopack, 0 błędów TypeScript).

---

### Sprint 3.6: GTFS Route Network & Pre-Materialized RCN Spatial Bridge (Definitive v6)
- **Status:** `[DONE]` (Zrealizowano 2026-09-08, Commit `da2bc6c`)
- **Cel:** Pełne wykorzystanie danych GTFS (ekstrakcja geometrii linii, sekwencji przystanków i grafu $u \to v$ z izolacją multi-feed), pre-materializowany most przestrzenny RCN (`stop_transactions_bridge.parquet`) oraz dynamiczne, sub-15ms zapytania w DuckDB z zachowaniem 100% transakcji od 2020 r.
- **Wykonane zadania:**
  1. **Dwupoziomowa Ekstrakcja GTFS (`scripts/pipeline/01b_extract_transit_routes.py`):**
     - Canonical Trip Patterns z grupowaniem po `(feed_id, route_id, direction_id, pattern_hash)`.
     - Multi-feed key isolation: `route_uid = f"{feed_id}_{route_id}"`.
     - Obsługa Poziomu 1 (`shapes.txt` dla 23 miast) oraz Poziomu 2 (interpolacja przystankowa dla 7 miast).
     - Czysty czas przejazdu netto: $\Delta t = \text{arrival}(v) - \text{departure}(u)$ (odrzucenie dwell time).
     - Eksport: `transit_routes.gpkg`, `stop_route_matrix.parquet`, `transit_network_edges.parquet`.
  2. **Normalizacja RCN & Koordynaty Parquet (`scripts/pipeline/10_unify_schemas.py`):**
     - Rygorystyczny filtr jakościowy: `lok_funkcja == 'mieszkalna'`, `tran_rodzaj_trans == 'wolnyRynek'`.
     - Ścisłe typowanie daty do kolumny `DATE`.
     - Jawna ekstrakcja współrzędnych `lon`, `lat` i indeksu Uber H3 Res 8 przed usunięciem geometrii i zapisem do `transactions.parquet`.
  3. **Zwektoryzowany Dystans GEOS & Mostek Parquet (`scripts/pipeline/15_compute_stop_dna.py`):**
     - Jednorazowy offline spatial join w EPSG:2180.
     - W pełni zwektoryzowane obliczanie dystansu w C/GEOS (`distance_m` w <0.2s zamiast pętli lambda).
     - Fizyczne sortowanie `['stop_id', 'dok_data']` i `row_group_size=50000` pod sprzętowe Zone Maps w DuckDB.
  4. **Metryczny BBox EPSG:2180 & Orkiestrator:**
     - `02_collect_stops.py`: metryczny bufor 5 km w EPSG:2180 z automatyczną aktualizacją `config/extract_config.json`.
     - `orchestrator.py`: dołączenie Kroku 01b (Krok 2) oraz Kroku 17 (`17_build_h3_grid.py --city all`).
  5. **Serwis Domenowy DuckDB & Routery API:**
     - `backend/app/domain/market_bridge.py`: dynamiczne składanie klauzuli `WHERE dok_data >= ?::DATE` bezpośrednio na `read_parquet(?)` (Zone Maps Predicate Pushdown).
     - `backend/app/routers/routes.py`: `/api/v1/routes`, `/routes/geometry`, `/routes/stop/{id}`, `/routes/edges`.
     - `backend/app/routers/market.py`: `/api/v1/market/stops-summary` (odpowiedź dla 10.4k słupków w 12 ms), `/stop/{id}/transactions`, `/h3-grid`.
     - `backend/app/main.py`: rejestracja singletona DuckDB w cyklu życia FastAPI Lifespan.
- **Dowody weryfikacji:**
  - `uv run pytest backend/tests/ -v`: **89/89 testów PASSED w 19.81s** (100% green, 5 nowych dedykowanych plików testowych).
  - `npm run build --prefix urban-dashboard`: sukces w **2.4s** (0 błędów TypeScript).
  - Git Commit & Push: Commit `da2bc6c` na gałęzi `main`.

---

### Sprint 3.7: Ogólnopolska Skala Produkcyjna (30 Miast), Izolacja Subprocesów & C-Spatial Optimization
- **Status:** `[DONE]`
- **Cel:** Pełne, bezbłędne przetworzenie 30 miast w potoku ETL (210 plików GPKG/Parquet), eliminacja wąskich gardeł pamięciowych (Swap Death) oraz wdrożenie produkcyjnego CI/CD na OCI ARM64.
- **Zrealizowany zakres:**
  1. **Architektura Izolacji Subprocesów (Subprocess Isolation):**
     - Wyeliminowanie wycieków pamięci i fragmentacji sterty C++ `glibc` w potoku obliczeniowym poprzez delegowanie każdego miasta do izolowanego procesu systemowego (`subprocess.run`).
     - Gwarancja natychmiastowego zwrotu stron pamięci do jądra Linux po zakończeniu przetwarzania aglomeracji.
  2. **Optymalizacja Złączeń Przestrzennych C-GEOS `shapely.STRtree`:**
     - Zastąpienie alokacji ciężkich poligonów (10 000 buforów po 64 wierzchołki) bezalokacyjnym indeksem punktowym z predykatem odległościowym `STRtree.query(predicate='dwithin', distance=500.0)`.
     - Redukcja zużycia RAM z 28 GB do <200 MB oraz skrócenie czasu złączenia 222 tys. transakcji RCN do 6 ms.
  3. **Silnik Ekstrakcji Tras GTFS w DuckDB C++ & Obsługa Kursów Nocnych ($\ge 24:00:00$):**
     - Zaimplementowanie arytmetyki dobowej w SQL z podziałem stringów (`split_part`), co wyeliminowało błędy parsowania DuckDB dla kursów realizowanych po północy.
  4. **Universal Query Engine z Paginacją Exact Rank (`rank=N`) & SQL Injection Whitelisting:**
     - Sub-15ms wyszukiwanie i sortowanie po 53 metrykach w API z rygorystyczną białą listą kolumn.
  5. **Stabilizacja Środowiska Produkcyjnego OCI Ampere A1 ARM64:**
     - Rozwiązanie błędu 502 Bad Gateway w kontenerach Docker poprzez jawną konfigurację bibliotek C-Spatial (`geopandas>=1.0.0`, `pyogrio>=0.9.0`, systemowy GDAL/GEOS).
- **Dowody weryfikacji:**
  - `uv run pytest backend/tests/ -v`: **95/95 testów PASSED w 22.2s** (100% green).
  - `npm run build --prefix urban-dashboard`: sukces w **4.6s** (0 błędów TypeScript).
  - `python3 scripts/tools/verify_nationwide_data.py`: **30/30 miast (100.0%), 210/210 wygenerowanych plików**.
  - OCI Live Telemetry: `{"status":"healthy","version":"9.5.0","active_cities_count":30,"qdrant_connected":true}` (HTTP 200).
  - Git Commit & Push: Commit `86fed85` na gałęzi `main`.

---

### Sprint 3.8: 100% Data Access & API Gap Closure (Pelna Dostępność Danych)
- **Status:** `[DONE]`
- **Cel:** Wyeliminowanie 6 zidentyfikowanych luk pomiędzy zbiorem danych na dysku a API przed przystąpieniem do przebudowy interfejsu (Sprint 4).
- **Zrealizowany zakres:**
  1. **Granica Strefy Transportowej (`GET /api/v1/cities/{city}/boundary`):**
     - Geometria WGS84 GeoJSON FeatureCollection z `transport_zone.gpkg` wraz z polem właściwości `area_km2` obliczanym w rzutowaniu EPSG:2180.
  2. **Wyszukiwarka i Filtr POI (`GET /api/v1/poi/search`):**
     - Substring search i dokładne filtrowanie po kategoriach w DuckDB na `poi_matrix.parquet` z predicate pushdown i paginacją.
  3. **Szeregi Czasowe i Trendy Cenowe RCN 2020–2026 (`GET /api/v1/market/trends`):**
     - Agregacja roczna i kwartalna median cen m², wolumenu transakcji i kwartyli (Q1, Q3) na poziomie całego miasta lub pojedynczego słupka.
  4. **Graf Bezpośredniej Osiągalności 1-Hop (`GET /api/v1/routes/stop/{stop_id}/destinations`):**
     - Odpytanie `transit_network_edges.parquet` z agregacją docelowych słupków, minimalnego czasu przejazdu, dystansu, prędkości handlowej i linii.
  5. **Ogólnokrajowy Benchmark Rozkładu Metryk (`GET /api/v1/analytics/metric-distribution?city=all`):**
     - Obliczanie statystyk kwantylowych i 10-kubełkowego histogramu w skali całej Polski (60k+ słupków i 36k+ heksów).
  6. **Silne Typowanie w Schematach Pydantic:**
     - Dodanie jawnych pól `h3_index`, `stop_entropy`, `stop_liquidity`, `hub_raw_gravity`, `hub_entropy`, `hub_liquidity` do schematów odpowiedzi.
- **Dowody weryfikacji:**
  - `uv run pytest backend/tests/ -v`: **104/104 testów PASSED w 21.92s** (100% green, w tym 9 nowych dedykowanych testów w `test_100_percent_data_access.py`).
  - `npm run build --prefix urban-dashboard`: sukces w **4.6s** (0 błędów TypeScript).

---

### Sprint 4: Frontend Palantir Foundry UI & Blueprint.js (SSOT: PLAN_FRONTEND.md)
- **Status:** `[DONE - SPRINT 4.1, 4.2, 4.3, 4.4, 4.5 ALL COMPLETED]`
- **Specyfikacja Główna (SSOT):** Pełny plan implementacyjny, kontrakty 45 tras API oraz architektura komponentów znajdują się w dedykowanym dokumencie [`PLAN_FRONTEND.md`](PLAN_FRONTEND.md).
- **Architektura Wykonawcza (3 Logiczne Podsesje):**
  - **Sesja 4.1 (Fundament & Shell):** `[DONE]` (Zrealizowano 2026-09-08)
    * Czysty stack Blueprint v6 (`@blueprintjs/core@^6.16.0`, `@blueprintjs/table`, `@blueprintjs/icons`, `@blueprintjs/select`, `recharts`, `vaul`, `motion`).
    * Usunięcie legacy `shadcn/ui` (`src/components/ui/*`) i konfiguracja `bp6-dark` w `globals.css` oraz `layout.tsx`.
    * Silnie typowany klient API dla 45 tras HTTP w `src/lib/api/` (11 dedykowanych modułów).
    * Zustand Store z Session Cache per City i dwukierunkową synchronizacją URL (`searchParams`) w `src/lib/store/`.
    * Globalny Command Palette (Blueprint Omnibar `Ctrl+K`) w `src/components/foundry/CommandPalette.tsx`.
    * Trójstrefowy szkielet Foundry (`FoundryShell`, `FoundryNavbar`, `StatusBar`, `AnalyticalWorkspace`).
    * Moduł 1: Command Center (`CommandCenterModule`, `CityScorecardCards`, `GradeDistributionChart`, `CityMagnetsList`) zasilany z OCI ARM64.
    * Refaktoryzacja Deck.gl v9 `MapCanvas.tsx` z mini-HUD `MapHud.tsx`, ekstruzją 3D `H3HexagonLayer`, warstwami `ScatterplotLayer`, `PathLayer`, `GeoJsonLayer`.
    * Dowody weryfikacji: `tsc --noEmit` = 0 błędów, `npm run build` = sukces w 3.8s, `uv run pytest` = 104/104 PASSED.
  - **Sesja 4.2 (Silniki Analityczne DataGrids & Policy Audit):** `[DONE]` (Zrealizowano 2026-09-08)
    * **Moduł 2: Network Explorer:**
      - `StopsDataGrid.tsx`: Wirtualizowana tabela `@blueprintjs/table` `Table2` dla 60k słupków z sortowaniem po 53 metrykach, `JumpToRankInput` (#Rank), selekcją wierszy i centrowaniem mapy.
      - `HubsDataGrid.tsx`: Wirtualizowana tabela `Table2` dla 28k węzłów ze wskaźnikami konsolidacji, filtrem `min_stops` i percentylem ogólnokrajowym.
      - `PoiSearchOverlay.tsx`: Wyszukiwarka POI w nagłówku tabeli z DuckDB predicate pushdown (`/api/v1/poi/search`).
      - `FilterPillsBar.tsx`: Pasek aktywnych filtrów z usuwaniem pojedynczych i czyszczeniem całości.
      - `DataExportMenu.tsx`: Eksport danych do CSV i JSON bezpośrednio z nagłówka tabeli.
    * **Moduł 3: Optimization & Policy Audit:**
      - `AxeListGrid.tsx`: Audyt redukcji zbędnych słupków TCRP 100 z suwakiem progu ($0.50, 0.70, 0.90$) oraz kalkulatorem oszczędności PLN (~12 000 PLN/słupek/rok).
      - `MapCanvas.tsx`: Warstwa `cannibalization-vector` (PathLayer + ScatterplotLayer markerów końcowych) renderująca czerwoną linię wektora między słupkiem zbędnym a dominującym.
      - `InvestmentGrid.tsx`: Ranking pustyń transportowych TDI w komórkach H3 Res 8 z populacją wykluczoną GUS i wycenami RCN.
    * **Moduł 4: Route Analyzer:**
      - `RouteCatalogGrid.tsx`: Katalog linii GTFS z filtrami środków transportu (Autobus/Tramwaj/Kolej), taktu i prędkości.
      - `RouteStepperView.tsx`: Wertykalna oś czasu przystanków z LRS, czasem netto $\Delta t$ i prędkościami handlowymi.
      - `RouteSpeedGrid.tsx`: Analiza krawędzi $u \to v$ z `transit_network_edges.parquet` z alertami wąskich gardeł (<15 km/h).
    * **Dowody weryfikacji:**
      - `npx tsc --noEmit`: **0 błędów**.
      - `npm run build --prefix urban-dashboard`: **sukces w 3.9s** (Turbopack Next.js 16).
      - `uv run pytest backend/tests/ -v`: **104/104 testów PASSED w 22.43s**.
  - **Sesja 4.3 (Rynki, AI & Mobile):** `[DONE]` (Zrealizowano 2026-09-08)
    * **Moduł 5: Market Intel (`MarketModule.tsx`):**
      - `MarketKpiCards.tsx`: 4 kafelki KPI (Mediana cen m², Średnia IQR, Wolumen, Zakres rynkowy) zasilane z `/api/v1/market/summary`.
      - `PriceTrendsChart.tsx`: Wykres szeregów czasowych 2020–2026 (Recharts ComposedChart: pasmo kwartyli Q1–Q3, mediana cen, wolumen na osi prawej, filtry interwału i rynku).
      - `StopsValuationGrid.tsx`: Wirtualizowana `Table2` wycen przy słupkach z mostka DuckDB (<15ms), sortowaniem, filtrami i centrowaniem mapy.
      - `TransactionsRankingGrid.tsx`: Wirtualizowana `Table2` pojedynczych aktów notarialnych RCN z paginacją i sortowaniem.
      - `MarketH3AnalysisCard.tsx`: Wykres 6 przedziałów cenowych i korelacja Pearsona z transportem.
    * **Moduł 6: Benchmarking Krajowy (`BenchmarkModule.tsx`):**
      - `NationalLeaderboardGrid.tsx`: Ogólnopolska tablica liderów dla 30 miast, słupków, hubów i heksów z przyciskiem szybkiego przełączenia aglomeracji.
      - `CityComparisonView.tsx`: Porównywarka side-by-side dwóch wybranych aglomeracji z tagami delta (`+X%` / `-Y%`).
      - `MetricDistributionWidget.tsx`: Rozkład kwantylowy i 10-bin histogram empiryczny wybranej metryki (miasto vs cała Polska).
    * **Dolny Inspektor 360° Profilu Obiektu (`ObjectInspector.tsx`):**
      - Asynchroniczny panel 360° z kafelkami 4 filarów DNA, osiągalnością 1-hop, liniami GTFS oraz transakcjami RCN w buforze 500m.
    * **Integracja AI Radar (`AiRadarWidget.tsx`):**
      - Wyszukiwanie 5 bliźniaczych węzłów w skali kraju o najbardziej zbliżonym wektorze cech Stop DNA z bazy 28 317 hubów w Qdrant (`POST /api/v1/ai/similar-hubs`).
    * **Mobile Adaptive Bottom Sheet (`AdaptiveBottomSheet.tsx`, `MobileSegmentedNav.tsx`):**
      - 3-stopniowy arkusz gestowy (72px Peek / 45vh Half / 88vh Full) oraz dotykowa nawigacja (min 44x44px hit-targets WCAG AA).
    * **Czyszczenie Legacy & Trasy Next.js:**
      - Usunięto zbędne pliki pomostowe `api-client.ts`, `store.ts`. Zaktualizowano trasy App Router.
    * **Dowody weryfikacji:**
      - `npx tsc --noEmit`: **0 błędów**.
      - `npm run build --prefix urban-dashboard`: **sukces w 4.8s** (Turbopack Next.js 16, < 5.0s quality gate).
      - `uv run pytest backend/tests/ -v`: **109/109 testów PASSED w 23.46s**.
  - **Sesja 4.4 (API Security Hardening):** `[DONE]` (Zrealizowano 2026-09-08)
    * Usunięcie podatności DuckDB SQL Injection w dynamicznych rankingach heksów (`ALLOWED_GRADES` whitelist).
    * Wdrożenie sliding-window rate limitingu w FastAPI (`slowapi`, 60 req/min per IP, kod 429).
    * Ścisła biała lista CORS i wyłączenie credentials dla bezstanowego API.
    * Autonomiczny strażnik brzegu w Caddy (`@bad_bots` 403, blokada braku User-Agent, body limit 1MB, HSTS/XFO headers).
    * In-memory cache dla bazy wektorowej hubów i ograniczenie parametru `top_k <= 50`.
    * Dowody weryfikacji: `pytest backend/tests/test_security.py` = 5/5 PASSED.
  - **Sesja 4.5 (Frontend Deep Interactive E2E Testing Suite):** `[DONE]` (Zrealizowano 2026-09-09)
    * Kompletny pakiet 10 scenariuszy E2E w Playwright (`@playwright/test`) testujący 100% interaktywnych elementów UI.
    * Konfiguracja z systemowym Google Chrome 152 (`/usr/bin/google-chrome`) i emulacją WebGL Angle/SwiftShader.
    * Deterministyczny mostek sieciowy mockujący wszystkie 45 tras API w `urban-dashboard/e2e/helpers/foundry-test.ts`.
    * Testowanie selektora 30 miast, 6 modułów analitycznych, wirtualizowanych tabel Table2, filtrów POI, suwaków TCRP, kalkulatora oszczędności, sekwencji GTFS LRS, grafu krawędzi, mostka wycen RCN, porównywarki miast, AI Radaru oraz 3 snap-pointów gestowego arkusza mobilnego.
    * Bezwzględna brama jakości: 0 nieschwytanych błędów w konsoli przeglądarki (`console.error === 0`).
    * Zapewnienie stabilności WebGL poprzez ujednolicenie drzewa komponentów `<MapCanvas />` pomiędzy trybem desktop a mobilnym (eliminacja błędu `maxTextureDimension2D` w luma.gl/deck.gl).
    * Skrypt wykonawczy weryfikacji: `scripts/test_frontend_e2e.sh`.
    * **Dowody weryfikacji:**
      - `./scripts/test_frontend_e2e.sh`: **10/10 testów E2E PASSED w 49.8s** (100% green, 0 błędów konsoli).
      - `npx tsc --noEmit`: **0 błędów**.
      - `npm run build --prefix urban-dashboard`: **sukces w 7.7s** (Turbopack Next.js 16).
      - `uv run pytest backend/tests/ -v`: **109/109 testów PASSED w 35.71s**.

---

### Sprint 5: Integracja AI & Qdrant Vector Search
- **Status:** `[DONE - SPRINT 4.3 AI RADAR INTEGRATED]`
- **Cel:** Uruchomiono wyszukiwanie podobieństwa profilu Stop DNA w oparciu o wektory w Qdrant (`POST /api/v1/ai/similar-hubs`) z pełną integracją w interfejsie Foundry Workspace.
