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

---

## 1. Rejestr Sprintów (Sprint Registry)

```
[Sprint 0: Stabilizacja & H3] ──► [Sprint 1: Symetria Danych Potoku] ──► [Sprint 2: Modularne API] ──► [Sprint 3: Testy Pytest] ──► [Sprint 4: Palantir Blueprint UI]
          [DONE]                                [DONE]                              [NASTĘPNA SESJA]                 [PLANOWANY]                    [PLANOWANY]
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

### Sprint 2: Granularne, Inteligentne API (`backend/app/routers/`)
- **Status:** `[PLANNED]` (Do wykonania w Sesji 3)
- **Cel:** Rozbicie monolitycznego `main.py` na czyste, dedykowane routery FastAPI. Umożliwienie odpytywania o konkretny słupek, hub, heksagon H3 lub wybraną metrykę.
- **Zakres:**
  1. `app/routers/stops.py`:
     - `GET /api/v1/stops?city={city}` (GeoJSON słupków)
     - `GET /api/v1/stops/{id}?city={city}` (profil słupka)
     - `GET /api/v1/stops/{id}/details` (wycinek POI i demografii dla słupka)
  2. `app/routers/hubs.py`:
     - `GET /api/v1/hubs?city={city}` (GeoJSON węzłów)
     - `GET /api/v1/hubs/{id}?city={city}` (karta huba + tablica przypisanych słupków)
     - `GET /api/v1/hubs/{id}/details` (istniejący radius query)
  3. `app/routers/hexagons.py`:
     - `GET /api/v1/hexagons?city={city}` (Siatka H3 Res 8)
  4. `app/routers/market.py`:
     - `GET /api/v1/market/summary?city={city}` (dane z `rcn_stats.json`)
     - `GET /api/v1/transactions?city={city}`
  5. `app/routers/analytics.py`:
     - `GET /api/v1/analytics/axe-list?city={city}` (audyt kanibalizacji TCRP Report 100 na poziomie fizycznych słupków)
     - `GET /api/v1/analytics/transit-deserts?city={city}` (The Investment List z H3)
- **Zasada:** 100% kompatybilności wstecznej — stare endpointy w `main.py` działają bez zmian.

---

### Sprint 3: Zautomatyzowany Pakiet Testów Pytest (Tier-2 Worker)
- **Status:** `[PLANNED]` (Do wykonania w Sesji 4)
- **Cel:** Pokrycie testami jednostkowymi i integracyjnymi silnika przestrzennego i nowych routerów.
- **Narzędzie:** FastMCP `chinese-worker` (`worker_generate_tests`, profil `nemotron-lightning`).
- **Kryteria:** 100% testów przechodzi (`pytest backend/tests/ -v`).

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
