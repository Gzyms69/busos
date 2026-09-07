# BusOS Data Dictionary & API Contract (Single Source of Truth)

> **Document Status:** `LOCKED` (SSOT v1.0 — March 2026)  
> **Applicability:** Pipeline Steps (14–17), Backend REST API (FastAPI), Vector Engine (Qdrant), Frontend Dashboard (Deck.gl & Blueprint.js).

---

## 1. Mathematical Standards & Unified Metrics

Wszystkie nazwy metryk w całym projekcie (pliki Parquet, GeoPackage, endpointy REST, interfejsy TypeScript) muszą być w 100% zgodne z poniższą tabelą. Wprowadzanie alternatywnych nazw lub synonimów jest zabronione.

### 1.1 Siatka Analityczna H3 (`h3_grid.parquet`)

Każdy wiersz w `h3_grid.parquet` reprezentuje pojedynczą komórkę Uber H3 (domyślnie **Resolution 8**, ~0.74 km², promień ~460m).

| Pole (Field) | Typ | Zakres / Jednostka | Definicja i Wzór Matematyczny | Rola w Systemie |
| :--- | :--- | :--- | :--- | :--- |
| `h3_index` | `VARCHAR` | Hex string (15 znaków) | Identyfikator komórki H3 Res 8 (np. `881f53c93bfffff`). | Klucz główny (PK) |
| `city` | `VARCHAR` | Slug (np. `kielce`, `warszawa`) | Nazwa aglomeracji z katalogu `data/cities/`. | Partycjonowanie |
| `lat` | `DOUBLE` | EPSG:4326 (stopnie) | Szerokość geograficzna środka komórki H3. | Pozycjonowanie Deck.gl |
| `lon` | `DOUBLE` | EPSG:4326 (stopnie) | Długość geograficzna środka komórki H3. | Pozycjonowanie Deck.gl |
| `stop_count` | `INT` | $\ge 0$ | Liczba fizycznych słupków przystankowych wewnątrz komórki. | Podaż transportu |
| `hub_count` | `INT` | $\ge 0$ | Liczba unikalnych logicznych węzłów przesiadkowych (`hub_id`). | Koncentracja sieci |
| `total_departures_h`| `DOUBLE` | kursy / godz. | Suma unikalnych odjazdów na godzinę we wszystkich przystankach w hexie. | Wolumen podaży |
| `max_stop_grade` | `VARCHAR` | `A+`, `A`, `B`, `C`, `D`, `F`, `NONE` | Najwyższa ocena Stop DNA węzła w komórce (lub `NONE` przy braku przystanków). | Jakość transportowa |
| `transport_score` | `DOUBLE` | $0.0 - 100.0$ | Złożony wskaźnik podaży transportu w komórce. | Kolorowanie Deck.gl |
| `pop_total` | `DOUBLE` | osoby (GUS NSP 2021) | Suma ludności ze skrzyżowania komórki z siatką GUS 250m × 250m. | Popyt demograficzny |
| `rcn_tx_count` | `INT` | $\ge 0$ | Liczba zarejestrowanych transakcji notarialnych RCN. | Płynność rynku |
| `rcn_median_price_m2`| `DOUBLE`| PLN / m² | Mediana cen transakcyjnych mieszkań/lokali w komórce (NULL jeśli `rcn_tx_count == 0`). | Wycena nieruchomości |
| `poi_gravity_sum` | `DOUBLE` | punkty grawitacji | Suma wag atrakcyjności infrastruktury miejskiej (model Huffa). | Atrakcyjność usług |
| `transit_desert_index`| `DOUBLE`| $\ge 0.0$ | Wskaźnik Pustyni Transportowej: $\frac{\ln(1 + \text{pop\_total})}{\ln(1 + \text{total\_departures\_h} + 0.1)}$ | Oś 2: The Investment List |
| `is_transit_desert` | `BOOLEAN` | `true` / `false` | Flaga wykluczenia: $\text{pop\_total} \ge 150 \land \text{total\_departures\_h} < 4.0$. | Filtracja alertów |

---

## 2. Modular API Architecture & Domain Routers (`backend/app/routers/`)

Architektura API zostaje podzielona na wyspecjalizowane routery domenowe z pełną kompatybilnością wsteczną.

### 2.1 Router Węzłów Przesiadkowych (`/api/v1/hubs`)
*   `GET /api/v1/hubs?city={city}`: [Legacy & Map] Lekki GeoJSON ze wszystkimi przystankami i ocenami Stop DNA (A+ do F) dla warstwy `ScatterplotLayer`.
*   `GET /api/v1/hubs/{hub_id}?city={city}`: [Granularny] Podstawowe metryki wybranego węzła (nazwa, współrzędne, ocena, percentyl).
*   `GET /api/v1/hubs/{hub_id}/metrics?city={city}`: [Granularny] Rozbicie 4 filarów Stop DNA (`transit_freq`, `infra_score`, `pop_val`, `market_val`, entropia Shannona).
*   `GET /api/v1/hubs/{hub_id}/pois?city={city}&limit=50&category=...`: [Granularny] Paginowana lista POI w buforze 500m (DuckDB in-memory).
*   `GET /api/v1/hubs/{hub_id}/population?city={city}`: [Granularny] Komórki demograficzne GUS 250m w buforze 500m.
*   `GET /api/v1/hubs/{hub_id}/details` oraz `/full`: [Composite] Pełny zagregowany payload dla prawego panelu inspektora (100% kompatybilny wstecz).

### 2.2 Router Siatki Przestrzennej H3 (`/api/v1/hexagons`)
*   `GET /api/v1/hexagons?city={city}&min_pop=0`: [Map Engine] Zunifikowana siatka komórek H3 Res 8 dla Deck.gl `H3HexagonLayer`.
*   `GET /api/v1/hexagons/{hex_index}?city={city}`: [Granularny] Głęboki profil analityczny pojedynczej komórki H3 (populacja, odjazdy, mediana RCN, wskaźnik TDI).
*   `GET /api/v1/hexagons/{hex_index}/stops?city={city}`: [Granularny] Lista fizycznych słupków przystankowych zlokalizowanych wewnątrz komórki.

### 2.3 Router Rynku Nieruchomości (`/api/v1/market`)
*   `GET /api/v1/market/summary?city={city}`: Globalne statystyki transakcyjne miasta z `rcn_stats.json` (mediana ceny m², wolumen, przedziały IQR).
*   `GET /api/v1/market/transactions?city={city}`: [Legacy] GeoJSON ze znormalizowanymi punktami transakcji RCN.

### 2.4 Router Analityki Miejskiej & Policy Audit (`/api/v1/analytics`)
*   `GET /api/v1/analytics/transit-deserts?city={city}`: [The Investment List] Ranking komórek H3 o najwyższym wskaźniku wykluczenia (duża populacja GUS, brak oferty transportowej).
*   `GET /api/v1/analytics/axe-list?city={city}`: [The Axe List] Przystanki zidentyfikowane jako zbędne wg standardu TCRP Report 100 ($R_{\max} \ge 0.70$).
*   `GET /api/v1/analytics/gravity?city={city}`: Podsumowanie wyceny i rozkładu kategorii POI z `poi_valuation.json`.

### 2.5 Router Wektorowy & AI (`/api/v1/ai`)
*   `POST /api/v1/ai/similar-hubs`: Wyszukiwanie semantyczne w silniku Qdrant na bazie embeddingów węzłów (znajdź najbardziej zbliżone węzły w kraju).


---

## 3. Zasady Obsługi Błędów i Niezmienniki Architektoniczne

1. **Brak kolumn w Parquet:** W przypadku starszych lub zoptymalizowanych plików Parquet backend MUSI stosować dynamiczną introspekcję (`DESCRIBE`) i zwracać spójne wartości domyślne zamiast rzucać błąd Binder Error 500.
2. **Stateless Backend:** Backend na OCI nie przechowuje stanu sesji w pamięci RAM — wszystkie zapytania DuckDB wykonują się in-memory w oparciu o pliki na dysku `/data/cities/`.
3. **C-Level Vectorization First:** Żadne operacje przestrzenne nie mogą być wykonywane pętlami `apply(lambda)` w Pythonie dla dużych zbiorów — wyłącznie wektoryzacja GeoPandas, C-GEOS i DuckDB.
