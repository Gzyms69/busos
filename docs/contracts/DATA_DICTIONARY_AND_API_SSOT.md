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

### 2.0 Router Fizycznych Słupków Przystankowych (`/api/v1/stops`)
*   `GET /api/v1/stops?city={city}`: GeoJSON FeatureCollection ze wszystkimi fizycznymi słupkami przystankowymi.
*   `GET /api/v1/stops/ranking?city={city}&order_by=...&order_dir=...&limit=N&rank=N&grade=...`: Uniwersalny ranking fizycznych słupków z dynamicznym sortowaniem po dowolnej z metryk filarowych, filtrowaniem po grade (`A+` do `F`), `is_hub_anchor`, `min_departures`, `min_pop`, `h3_index` oraz wsparciem dla pobierania konkretnej pozycji (`rank=N`).
*   `POST /api/v1/stops/batch`: Masowy lookup pełnych profili przystanków po liście `stop_ids: string[]`.
*   `GET /api/v1/stops/{stop_id}?city={city}`: Granularny profil Stop DNA pojedynczego słupka.

### 2.1 Router Węzłów Przesiadkowych (`/api/v1/hubs`)
*   `GET /api/v1/hubs?city={city}`: [Legacy & Map] Lekki GeoJSON ze wszystkimi przystankami i ocenami Stop DNA (A+ do F) dla warstwy `ScatterplotLayer`.
*   `GET /api/v1/hubs/ranking?city={city}&order_by=...&order_dir=...&limit=N&rank=N&grade=...&min_stops=...`: Uniwersalny ranking węzłów przesiadkowych z dowolnym limitem, pobieraniem dokładnej pozycji (`rank=N`), sortowaniem po 14 metrykach hubu i filtrowaniem po `min_stops`.
*   `GET /api/v1/hubs/{hub_id}?city={city}`: [Granularny] Podstawowe metryki wybranego węzła (nazwa, współrzędne, ocena, percentyl, lista IDs słupków składowych).
*   `GET /api/v1/hubs/{hub_id}/details` oraz `/full`: [Composite] Pełny zagregowany payload dla prawego panelu inspektora (100% kompatybilny wstecz).

### 2.2 Router Siatki Przestrzennej H3 (`/api/v1/hexagons`)
*   `GET /api/v1/hexagons?city={city}&min_pop=0`: [Map Engine] Zunifikowana siatka komórek H3 Res 8 dla Deck.gl `H3HexagonLayer`.
*   `GET /api/v1/hexagons/ranking?city={city}&order_by=...&order_dir=...&limit=N&rank=N&is_transit_desert=...&has_rcn=...`: Uniwersalny ranking komórek H3 z sortowaniem po TDI, transport_score, pop_total, rcn_median_price_m2 i filtrami wykluczenia transportowego.
*   `GET /api/v1/hexagons/{hex_index}/profile?city={city}`: Profil 360° heksa H3 łączący metryki siatki, fizyczne słupki, okoliczne transakcje notarialne RCN i magnesy POI.
*   `GET /api/v1/hexagons/{hex_index}?city={city}`: Granularny profil analityczny pojedynczej komórki H3.
*   `GET /api/v1/hexagons/{hex_index}/stops?city={city}`: Lista fizycznych słupków przystankowych zlokalizowanych wewnątrz komórki.

### 2.3 Router Rynku Nieruchomości (`/api/v1/market`)
*   `GET /api/v1/market/summary?city={city}`: Globalne statystyki transakcyjne miasta z `rcn_stats.json` (mediana ceny m², wolumen, przedziały IQR).
*   `GET /api/v1/market/transactions/ranking?city={city}&order_by=price_m2&order_dir=...&limit=N&rank=N&market_type=...`: Paginowany ranking transakcji notarialnych RCN z dynamicznym sortowaniem, filtrowaniem po rynku (`pierwotny` / `wtorny`), funkcji nieruchomości i cenie.
*   `GET /api/v1/market/transactions/nearby?city={city}&lat=...&lon=...&radius_m=500&limit=20`: Przestrzenne wyszukiwanie transakcji w promieniu metrycznym (EPSG:2180 C-GEOS).
*   `GET /api/v1/market/h3-analysis?city={city}`: Zbiorcza analiza pokrycia nieruchomości w siatce H3, 6 przedziałów cenowych oraz korelacji z transportem publicznym.
*   `GET /api/v1/market/transactions?city={city}`: [Legacy] GeoJSON ze znormalizowanymi punktami transakcji RCN.

### 2.4 Router Punktów Zainteresowania (`/api/v1/poi`)
*   `GET /api/v1/poi/magnets?city={city}&limit=N&tier=...&category=...`: Ranking kluczowych miejskich atraktorów/magnesów POI posortowanych wagą grawitacji Huffa, z odfiltrowanymi nazwami zastępczymi.
*   `GET /api/v1/poi/categories?city={city}&limit=N&order_by=final_value`: Zestawienie wyceny i wolumenu kategorii POI.

### 2.5 Router Analityki Miejskiej & Policy Audit (`/api/v1/analytics`)
*   `GET /api/v1/analytics/audit-summary?city={city}&include=summary,zscore,grades,h3,rcn,tcrp,poi,samples,all`: Pełna karta audytowa miasta (City Audit Scorecard) z modularnym parametrem `include`, umożliwiającym pobranie całości lub wybranych podsystemów.
*   `GET /api/v1/analytics/national-ranking?scope=stops|hubs|hexagons|cities&rank=N&limit=N`: Ogólnopolska tablica liderów dla 60k słupków, 28k hubów, 36k hexów lub 30 miast.
*   `GET /api/v1/analytics/metric-distribution?city={city}&metric={metric}`: Generator statystyk kwantylowych (min, p10, p25, median, p75, p90, max, mean, std) i 10-kubełkowego histogramu do wykresów sparkline.
*   `GET /api/v1/analytics/compare-cities?city_a={city}&city_b={city}`: Porównanie kluczowych KPI dwóch miast side-by-side.
*   `GET /api/v1/analytics/transit-deserts?city={city}`: [The Investment List] Ranking komórek H3 o najwyższym wskaźniku wykluczenia (duża populacja GUS, brak oferty transportowej).
*   `GET /api/v1/analytics/axe-list?city={city}`: [The Axe List] Przystanki zidentyfikowane jako zbędne wg standardu TCRP Report 100 ($R_{\max} \ge 0.70$).

### 2.6 Router Wektorowy & AI (`/api/v1/ai`)
*   `POST /api/v1/ai/similar-hubs`: Wyszukiwanie semantyczne w silniku Qdrant na bazie embeddingów węzłów (znajdź najbardziej zbliżone węzły w kraju).


---

## 3. Zasady Obsługi Błędów i Niezmienniki Architektoniczne

1. **Brak kolumn w Parquet:** W przypadku starszych lub zoptymalizowanych plików Parquet backend MUSI stosować dynamiczną introspekcję (`DESCRIBE`) i zwracać spójne wartości domyślne zamiast rzucać błąd Binder Error 500.
2. **Stateless Backend:** Backend na OCI nie przechowuje stanu sesji w pamięci RAM — wszystkie zapytania DuckDB wykonują się in-memory w oparciu o pliki na dysku `/data/cities/`.
3. **C-Level Vectorization First:** Żadne operacje przestrzenne nie mogą być wykonywane pętlami `apply(lambda)` w Pythonie dla dużych zbiorów — wyłącznie wektoryzacja GeoPandas, C-GEOS i DuckDB.
