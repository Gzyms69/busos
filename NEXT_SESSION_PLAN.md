# BusOS Tactical Roadmap & Next Session Plan

## Executive Context & Current Baseline State
- **Frontend**: Live on Vercel Global Edge ([https://busos.czerwinskidawid.pl](https://busos.czerwinskidawid.pl)), Next.js 16.2.1 Turbopack, React 19, Deck.gl v9, MapLibre GL.
- **Backend**: Live on Oracle Cloud Infrastructure Ampere A1 ARM64 ([https://api.busos.czerwinskidawid.pl](https://api.busos.czerwinskidawid.pl)), FastAPI 0.115+, DuckDB 1.2+, Qdrant Vector Engine (port 6333), Caddy 2 with auto Let's Encrypt TLS 1.3 / HTTP/3.
- **30 Calibrated Cities**: Active and queryable on the backend.
- **Verification Baseline**: `npm run build` succeeds in 2.5s; `npx tsc --noEmit` passes with 0 errors; DNS-Only Cloudflare resolution active on both domains.

---

## Technical Root Cause Analysis of Reported Issues

### 1. Dziwne, gigantyczne słupki w miastach
- **Co to jest**: Warstwa `HexagonLayer` w `MapContainer.tsx` (id: `tx-hex`).
- **Dlaczego są tak wysokie**:
  ```tsx
  elevationScale: 5,
  getElevationValue: (points: TxPoint[]) => points.length
  ```
  Słupki NIE reprezentują przystanków ani grawitacji miejskiej! Reprezentują surowe **transakcje notarialne (RCN)** zgrupowane w locie w promieniu 150m przez przeglądarkę. W gęstych skupiskach deweloperskich (np. 100-300 transakcji) wysokość wynosi 500-1500m, dominując nad całą panoramą 3D.
- **Efekt uboczny**: Warstwa ma `pickable: true` i jest renderowana przed warstwą przystanków (`ScatterplotLayer`). Kiedy użytkownik klika przystanek znajdujący się w obrysie kolumny transakcji, zdarzenie kliknięcia jest pochłaniane przez słupek transakcji (który nie ma `onClick`), uniemożliwiając otwarcie inspektora przystanku!

### 2. Brak danych w inspektorze ("nic się nie pobiera, suma obiektów 0, kategorie puste")
- **Twardy dowód błędu z backendu**:
  ```text
  GET /api/v1/hubs/1/details?city=warszawa&lat=52.23&lon=21.01
  HTTP/2 500
  DuckDB spatial aggregation error: Binder Error: Referenced column "name" not found in FROM clause!
  Candidate bindings: "__index_level_0__", "lat", "lon", "poi_id", "sum_pull", "w"
  ```
- **Przyczyna**: W `scripts/pipeline/15_compute_stop_dna.py` podczas optymalizacji macierzy dla dużych miast (Warszawa, Wrocław, Poznań), kolumny tekstowe `name`, `category`, `tier` zostały pominięte w pliku `04_results/poi_matrix.parquet` (zachowano tylko `poi_id, lat, lon, w, sum_pull`). Zapytanie w `backend/app/spatial_engine.py` wymaga tych kolumn na sztywno, co wywala błąd SQL 500. Frontend przechwytuje błąd w bloku `catch` i zwraca pustą strukturę `{ pois: [], pop: [], metrics: null }`.

### 3. Lagi i powolne wczytywanie przy szybkim przełączaniu miast
- **Przyczyna**:
  1. Przy każdym kliknięciu miasta `MapContainer.tsx` odpala 3 równoległe zapytania `fetch` pobierające nieskompresowane GeoJSONy o łącznej wadze 15-20 MB (`hubs` + `population` + `transactions`).
  2. Brak instancji `AbortController`. Jeśli użytkownik szybko kliknie 3 miasta pod rząd, 9 zapytań pobiera się jednocześnie i konkuruje o przepustowość sieci, a następnie parsuje gigantyczne drzewa JSON w głównym wątku JS (zamrażając WebGL event loop).

### 4. Czy hexy mają swoje informacje w obecnym pipeline?
- **Stan faktyczny**: **NIE**. Pipeline w Step 15 dopisuje jedynie pojedynczy string `h3_index` (H3 Res 9) do punktu przystanku w celach pomocniczych. Nie istnieje żaden dedykowany zbiór danych modelujący komórki H3 jako samodzielne jednostki analityczne!
- **Potencjał architektoniczny (Koncepcja Gzymsona)**:
  Zamiast przesyłać 10 MB surowych punktów transakcji i liczyć hexy na CPU w przeglądarce, pipeline powinien w nowym dedykowanym kroku wygenerować **Zunifikowaną Siatkę Analityczną H3** (np. H3 Res 8 lub 9). Każdy hex będzie zawierał:
  - **Transport Score**: liczbę przystanków w hexie, łączną częstotliwość odjazdów/h, zróżnicowanie linii, najwyższy grade Stop DNA.
  - **Demografia**: zsumowaną populację GUS NSP 2021 przypadającą na hex.
  - **Rynek Nieruchomości**: medianę i średnią cenę m², wolumen transakcji notarialnych RCN.
  - **Infrastruktura & Grawitacja**: łączną sumę wag POI (usługi codzienne, ochrona zdrowia, edukacja).
  - **Wskaźnik Wykluczenia / Pustyni Transportowej (Transit Desert Index)**: relację dużej populacji do braku sprawnej oferty transportowej.

---

## Decyzja Strategiczna: Dlaczego kolejna sesja jest właściwym momentem?

1. **Cel obecnej sesji został w 100% osiągnięty**:
   - Zero-cost OCI cloud backend z 30 miastami na żywo.
   - Vercel Edge frontend pod subdomeną `busos.czerwinskidawid.pl`.
   - Certyfikaty Let's Encrypt i wyeliminowany błąd zduplikowanego nagłówka CORS w Caddy.
2. **Kolejny etap to duży skok jakościowy**:
   - Harmonizacja schematów DuckDB Parquet (odporność na brakujące kolumny).
   - Budowa kroku pipeline dla Analitycznej Siatki H3.
   - Wdrożenie frameworka **Palantir Blueprint.js** (`@blueprintjs/core`, `@blueprintjs/table`) w układzie Foundry.
   - Integracja z bazą wektorową **Qdrant** pod kątem GNN Spatial Embeddings.

---

## Action Items dla Kolejnej Sesji

1. **Zadanie 1: Naprawa backendu DuckDB (`spatial_engine.py`)**:
   - Dodać introspekcję schematu Parquet w locie (`duckdb.sql("DESCRIBE ...")`) lub użyć `COALESCE` / fallbacków dla kolumn `name`, `category`, `tier`.
   - W przypadku braku kolumn tekstowych, zmapować `poi_id` z lokalnego `infrastructure.gpkg` lub zwrócić czytelne kategorie domyślne.
   - Przetestować endpoint `/details` dla Warszawy, Wrocławia, Poznania, Krakowa i Gdańska.
2. **Zadanie 2: Pipeline - Analityczna Siatka H3 (Step 17 lub rozszerzenie Step 15)**:
   - Stworzyć skrypt agregujący przystanki, transakcje RCN i populację GUS do stałej siatki H3 Res 8/9.
   - Wyeksportować lekki plik `h3_grid.parquet` per miasto.
   - Dodać endpoint w FastAPI: `/api/v1/hexagons?city={city}`.
3. **Zadanie 3: Optymalizacja Frontendu i Warstwy Deck.gl**:
   - Wdrożyć `AbortController` przy zmianie miasta, przerywając zaległe żądania sieciowe.
   - Zamienić kosztowny CPU `HexagonLayer` na natywny GPU `H3HexagonLayer`, renderujący pre-kalkulowane hexy z backendu.
   - Wyregulować `elevationScale` słupków transakcji, aby nie przesłaniały przystanków, lub przenieść je do osobnego przełącznika widoku ("Widok Nieruchomości vs Widok Transportowy").
4. **Zadanie 4: Przebudowa UI na Palantir Blueprint.js & Wdrożenie AI**:
   - Zastąpić obecny layout komponentami `@blueprintjs/core` w stylu enterprise data exploration.
   - Podpiąć Qdrant do wyszukiwania podobnych węzłów transportowych na bazie embeddingów wektorowych.
