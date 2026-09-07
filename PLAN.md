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
   - Backend: OCI Ampere A1 ARM64 (deploy ręczny przez SSH: `git pull && docker compose build && docker compose up -d`). Brak automatycznego CI/CD dla OCI.
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
[Sprint 0: Stabilizacja & H3] ──► [Sprint 1: Symetria Danych Potoku] ──► [Sprint 2: Modularne API] ──► [Sprint 3: Testy Pytest] ──► [Sprint 3.5: Universal Query Engine] ──► [Sprint 4: Palantir Blueprint UI]
          [DONE]                                [DONE]                              [DONE]                          [DONE]                               [DONE]                           [NASTĘPNA SESJA]
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

### Sprint 4: Frontend Palantir Foundry UI & Blueprint.js
- **Status:** `[PLANNED]` (Do wykonania w Sesji 5)
- **Cel:** Przebudowa interfejsu analitycznego z wykorzystaniem `@blueprintjs/core@^6.16.0` i `@blueprintjs/table`.
- **Zakres:**
  - Layout dwudzielny (Foundry split): Mapa Deck.gl 3D + zaawansowany DataGrid.
  - Tabele: "The Axe List" (audyt redukcji słupków) oraz "The Investment List" (pustynie transportowe).
  - Przełącznik widoku: Słupki (Micro) vs Huby (Macro) vs Siatka H3.

---

### Sprint 5: Integracja AI & Qdrant Vector Search
- **Status:** `[PLANNED]` (Do wykonania w Sesji 6)
- **Cel:** Uruchomienie wyszukiwania podobieństwa profilu Stop DNA w oparciu o wektory w Qdrant (`POST /api/v1/ai/similar-hubs`).
