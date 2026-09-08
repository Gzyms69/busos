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

### 1.2 Fizyczne Słupki Przystankowe (`stop_dna.gpkg` / tabela `stop_dna`)

Warstwa zawiera 100% fizycznych słupków przystankowych w układzie WGS84 (EPSG:4326 Point).

| Pole (Field) | Typ | Zakres / Jednostka | Definicja / Źródło | Rola w Systemie |
| :--- | :--- | :--- | :--- | :--- |
| `stop_id` | `VARCHAR` | Alfanumeryczny | Oryginalny identyfikator słupka z GTFS `stops.txt`. | Klucz główny (PK) |
| `stop_name` | `VARCHAR` | Tekst | Oryginalna nazwa przystanku ze słupka. | Prezentacja UI |
| `stop_lat` / `stop_lon` | `DOUBLE` | EPSG:4326 | Współrzędne geograficzne fizycznego słupka. | Geometria punktowa |
| `hub_id` | `INT` | $\ge 1$ | Identyfikator nadrzędnego logicznego węzła przesiadkowego. | Klucz obcy (FK) |
| `hub_name` | `VARCHAR` | Tekst | Znormalizowana nazwa węzła logicznego. | Agregacja makro |
| `hub_stops_count` | `INT` | $\ge 1$ | Liczba fizycznych słupków wchodzących w skład huba. | Skala węzła |
| `hub_stops_ids` | `VARCHAR` | Lista CSV | Identyfikatory wszystkich słupków w hubie (`id1,id2,...`). | Lookup relacyjny |
| `stop_hub_share` | `DOUBLE` | $[0.0, 1.0]$ | Udział odjazdów słupka w odjazdach huba: $\frac{\text{stop\_dep}}{\text{hub\_dep}}$. | Waga mikro/makro |
| `is_hub_anchor` | `INT` | `0` lub `1` | Dokładnie 1 dla słupka o najwyższym wolumenie kursów w hubie. | Reprezentant huba |
| `stop_departures_h`| `DOUBLE` | kursy / godz. | Unikalne odjazdy w godzinie szczytu z tego słupka. | Podaż transportowa |
| `stop_routes` | `VARCHAR` | CSV linii | Wykaz linii autobusowych/tramwajowych obsługujących słupek. | Oferta przewozowa |
| `stop_raw_gravity` | `DOUBLE` | $\ge 0.0$ | Suma grawitacji POI w buforze 500m (model Huffa). | Potencjał usługowy |
| `stop_entropy` | `DOUBLE` | $[0.0, 1.0]$ | Znormalizowana entropia Shannona różnorodności domen POI. | Synergia miejska |
| `stop_infra_score` | `DOUBLE` | $\ge 0.0$ | Złożony wskaźnik infrastrukturalny słupka. | Filar infrastruktury |
| `stop_pop_val` | `DOUBLE` | osoby | Przypisana ludność GUS 250m po kanibalizacji popytu. | Filar demografii |
| `stop_market_val` | `DOUBLE` | PLN / m² | Mediana cen RCN w buforze 500m po filtracji IQR. | Filar wyceny rynku |
| `stop_liquidity` | `INT` | $\ge 0$ | Liczba transakcji notarialnych w buforze 500m. | Płynność rynku |
| `stop_local_score_raw`| `DOUBLE`| Z-Score | Log-standaryzowany Z-Score słupka w populacji miasta. | Ocena syntetyczna |
| `stop_percentile` | `DOUBLE` | $0.0 - 100.0\%$ | Percentyl słupka w rozkładzie miejskim. | Pozycja w mieście |
| `stop_grade` | `VARCHAR` | `A+` do `F` | Klasa jakościowa słupka (A+, A, B, C, D, F). | Klasyfikacja UI |
| `nat_percentile` | `DOUBLE` | $0.0 - 100.0\%$ | Percentyl słupka w rozkładzie ogólnopolskim (30 miast). | Pozycja krajowa |
| `nat_grade` | `VARCHAR` | `A+` do `F` | Klasa jakościowa słupka w skali całego kraju. | Benchmarking |

### 1.3 Logiczne Węzły Przesiadkowe (`hubs.gpkg` / tabela `hubs`)

Warstwa zawiera zagregowane węzły logiczne (zespoły przystankowe) na współrzędnych centroidu geometrycznego (EPSG:4326 Point).

| Pole (Field) | Typ | Zakres / Jednostka | Definicja / Rola |
| :--- | :--- | :--- | :--- |
| `hub_id` | `INT` | $\ge 1$ | Unikalny identyfikator węzła logicznego w danym mieście. |
| `hub_name` | `VARCHAR` | Tekst | Oficjalna nazwa zespołu przystankowego (np. `Dworzec Główny`). |
| `hub_stops_count` | `INT` | $\ge 1$ | Liczba słupków składowych. |
| `hub_stops_ids` | `VARCHAR` | CSV | Lista identyfikatorów słupków fizycznych wchodzących w skład węzła. |
| `hub_departures_h` | `DOUBLE` | kursy / godz. | Sumaryczny wolumen odjazdów huba (ze zredukowanymi dubletami). |
| `hub_routes` | `VARCHAR` | CSV | Zbiór wszystkich unikalnych linii obsługujących zespół węzłowy. |
| `hub_raw_gravity` | `DOUBLE` | $\ge 0.0$ | Suma grawitacji POI zintegrowana dla całego węzła. |
| `hub_entropy` | `DOUBLE` | $[0.0, 1.0]$ | Entropia Shannona miksu usługowego wokół węzła. |
| `hub_infra_score` | `DOUBLE` | $\ge 0.0$ | Wynik infrastrukturalny huba. |
| `hub_pop_val` | `DOUBLE` | osoby | Łączna populacja GUS 250m ciążąca do zespołu przesiadkowego. |
| `hub_market_val` | `DOUBLE` | PLN / m² | Średnia ważona wycena m² mieszkań w otoczeniu węzła. |
| `hub_liquidity` | `INT` | $\ge 0$ | Liczba aktów notarialnych w strefie dojścia pieszych. |
| `hub_local_score_raw`| `DOUBLE`| Z-Score | Log-standaryzowany Z-Score huba. |
| `hub_percentile` | `DOUBLE` | $0.0 - 100.0\%$ | Percentyl huba w populacji węzłów miasta. |
| `hub_grade` | `VARCHAR` | `A+` do `F` | Klasa jakościowa huba. |
| `nat_percentile` / `nat_grade` | `DOUBLE`/`STR` | $0.0 - 100\%$ / `A+`..`F` | Ogólnokrajowy percentyl i ocena huba kalibrowana na 28 317 hubach. |

### 1.4 Sieć Tras i Graf Transportowy (`transit_routes.gpkg`, `stop_route_matrix.parquet`, `transit_network_edges.parquet`)

1. **`transit_routes.gpkg` (Warstwa Linii Transportowych EPSG:4326 MultiLineString):**
   * `route_uid`: Kompozytowy unikalny identyfikator linii: `f"{feed_id}_{route_id}"`.
   * `feed_id`, `route_id`, `route_short_name`, `route_long_name`, `route_type` (0=tramwaj, 3=autobus, 2=kolej).
   * `route_color`: Oficjalny kod HEX koloru przewoźnika (np. `#E31E24`).
   * `direction_id`: Kierunek jazdy (`0` lub `1`).
   * `is_canonical`: Flaga wariantu dominującego (`true` dla najczęstszego wzorca kursów w dobie).
   * `is_shape_interpolated`: `false` dla geometrii ze śladów GPS `shapes.txt`, `true` dla interpolacji przystankowej.
   * `daily_trips`: Suma zrealizowanych kursów w dobie.
   * `stop_count`: Liczba obsługiwanych przystanków na trasie.

2. **`transit_network_edges.parquet` (Topologiczny Graf Skierowany $u \to v$):**
   * `from_stop_id`, `to_stop_id`: Pary kolejnych przystanków w sekwencji trasy.
   * `route_uid`, `direction_id`: Powiązanie z linią i kierunkiem.
   * `avg_travel_time_sec`: Czysty czas przejazdu netto: $\Delta t = \text{arrival}(v) - \text{departure}(u)$.
   * `distance_m`: Dystans drogowy/torowy wzdłuż trasy w metrach (LRS w EPSG:2180).
   * `speed_kmh`: Realna prędkość handlowa: $\frac{d_{\text{real}} / 1000}{t / 3600}$.
   * `is_distance_real`: `true` dla obliczeń w oparciu o rzutowanie LRS na `shapes.txt`.

### 1.5 Mostek Przestrzenny Nieruchomości (`stop_transactions_bridge.parquet` & `transactions.parquet`)

* **`stop_transactions_bridge.parquet`**: Pre-materializowana tabela relacji M:N łącząca przystanki z transakcjami RCN.
  * `stop_id`: Identyfikator słupka.
  * `hub_id`: Identyfikator huba.
  * `tx_id`: Identyfikator transakcji notarialnej.
  * `dok_data`: Data zawarcia aktu notarialnego (kolumnowy typ `DATE`).
  * `price_m2`: Cena transakcyjna za metr kwadratowy lokalu (PLN).
  * `distance_m`: Rzeczywista odległość metryczna punktu od słupka w EPSG:2180 (C-GEOS).
  * `tran_rodzaj_rynku`: Rynek `pierwotny` lub `wtorny`.
  * **Optymalizacja I/O:** Plik jest fizycznie posortowany po `['stop_id', 'dok_data']` z `row_group_size=50000`, co umożliwia DuckDB sprzętowe pomijanie bloków (Zone Maps Predicate Pushdown) bez pełnego skanowania dysku.

---

## 2. Modular API Architecture & Domain Routers (`backend/app/routers/`)

Architektura API zostaje podzielona na wyspecjalizowane routery domenowe z pełną kompatybilnością wsteczną.

### 2.0 Router Fizycznych Słupków Przystankowych (`/api/v1/stops`) oraz Granic Miast
*   `GET /api/v1/cities`: Lista wszystkich dostępnych, przetworzonych aglomeracji.
*   `GET /api/v1/cities/{city}/boundary`: GeoJSON FeatureCollection z geometrią strefy transportowej aglomeracji (`transport_zone.gpkg`, EPSG:4326) oraz metadanymi powierzchni w kilometrach kwadratowych (`area_km2` z rzutowania EPSG:2180).
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
*   `GET /api/v1/market/trends?city={city}&stop_id=...&interval=year|quarter`: Historyczne szeregi czasowe i trendy cenowe transakcji RCN z lat 2020–2026 na poziomie miasta lub pojedynczego słupka z medianami cen m², wolumenem transakcji i kwartylami cenowymi (Q1, Q3).
*   `GET /api/v1/market/stops-summary?city={city}&date_from=...&date_to=...&market_type=...`: Odpytanie silnika DuckDB po pre-materializowanym mostku `stop_transactions_bridge.parquet` (czas odpowiedzi 12–26 ms dla 10k+ słupków).
*   `GET /api/v1/market/stop/{stop_id}/transactions?city={city}&date_from=...`: Lista transakcji notarialnych w strefie 500m wokół wybranego słupka.
*   `GET /api/v1/market/transactions/ranking?city={city}&order_by=price_m2&order_dir=...&limit=N&rank=N&market_type=...`: Paginowany ranking transakcji notarialnych RCN z dynamicznym sortowaniem, filtrowaniem po rynku (`pierwotny` / `wtorny`), funkcji nieruchomości i cenie.
*   `GET /api/v1/market/transactions/nearby?city={city}&lat=...&lon=...&radius_m=500&limit=20`: Przestrzenne wyszukiwanie transakcji w promieniu metrycznym (EPSG:2180 C-GEOS).
*   `GET /api/v1/market/h3-analysis?city={city}`: Zbiorcza analiza pokrycia nieruchomości w siatce H3, 6 przedziałów cenowych oraz korelacji z transportem publicznym.
*   `GET /api/v1/market/transactions?city={city}`: [Legacy] GeoJSON ze znormalizowanymi punktami transakcji RCN.

### 2.4 Router Punktów Zainteresowania (`/api/v1/poi`)
*   `GET /api/v1/poi/search?city={city}&query=...&category=...&tier=...&min_w=...&limit=N&offset=N`: Wyszukiwarka i filtr POI po nazwie lub kategorii z predicate pushdown na `poi_matrix.parquet` w DuckDB.
*   `GET /api/v1/poi/magnets?city={city}&limit=N&tier=...&category=...`: Ranking kluczowych miejskich atraktorów/magnesów POI posortowanych wagą grawitacji Huffa, z odfiltrowanymi nazwami zastępczymi.
*   `GET /api/v1/poi/categories?city={city}&limit=N&order_by=final_value`: Zestawienie wyceny i wolumenu kategorii POI.

### 2.5 Router Analityki Miejskiej & Policy Audit (`/api/v1/analytics`)
*   `GET /api/v1/analytics/audit-summary?city={city}&include=summary,zscore,grades,h3,rcn,tcrp,poi,samples,all`: Pełna karta audytowa miasta (City Audit Scorecard) z modularnym parametrem `include`, umożliwiającym pobranie całości lub wybranych podsystemów.
*   `GET /api/v1/analytics/national-ranking?scope=stops|hubs|hexagons|cities&rank=N&limit=N`: Ogólnopolska tablica liderów dla 60k słupków, 28k hubów, 36k hexów lub 30 miast.
*   `GET /api/v1/analytics/metric-distribution?city={city|all}&metric={metric}`: Generator statystyk kwantylowych (min, p10, p25, median, p75, p90, max, mean, std) i 10-kubełkowego histogramu; obsługa `city=all` generuje ogólnokrajowy benchmark rozkładu z bazy `master_stop_dna_poland.gpkg` lub siatek H3.
*   `GET /api/v1/analytics/compare-cities?city_a={city}&city_b={city}`: Porównanie kluczowych KPI dwóch miast side-by-side.
*   `GET /api/v1/analytics/transit-deserts?city={city}`: [The Investment List] Ranking komórek H3 o najwyższym wskaźniku wykluczenia (duża populacja GUS, brak oferty transportowej).
*   `GET /api/v1/analytics/axe-list?city={city}`: [The Axe List] Przystanki zidentyfikowane jako zbędne wg standardu TCRP Report 100 ($R_{\max} \ge 0.70$).

### 2.6 Router Tras Komunikacji Miejskiej (`/api/v1/routes`)
*   `GET /api/v1/routes?city={city}&route_type=...&canonical_only=true`: Wykaz linii transportowych ze statystykami kursów i barwą przewoźnika.
*   `GET /api/v1/routes/search?city={city}&query={q}`: Autouzupełnianie i wyszukiwarka linii autobusowych i tramwajowych po numerze lub nazwie.
*   `GET /api/v1/routes/geometry?city={city}&route_uid={uid}`: Precyzyjny GeoJSON geometrii wybranej trasy (MultiLineString EPSG:4326) z LRS.
*   `GET /api/v1/routes/{route_uid}/details?city={city}&direction_id={dir}`: Złożony payload zawierający sekwencję przystanków, czasy przejazdu, odległości drogowe w metrach i wyceny Stop DNA.
*   `GET /api/v1/routes/stop/{stop_id}?city={city}`: Wykaz wszystkich linii i kierunków obsługujących dany słupek przystankowy.
*   `GET /api/v1/routes/stop/{stop_id}/destinations?city={city}`: Graf bezpośredniej osiągalności 1-hop ze słupka z `transit_network_edges.parquet` (docelowe słupki, minimalny czas przejazdu, odległość w metrach, prędkość handlowa, obsługujące linie).
*   `GET /api/v1/routes/edges?city={city}&route_uid={uid}`: Odcinki grafu sieci $u \to v$ z czasami netto i prędkościami handlowymi w km/h.

### 2.7 Router Wektorowy & AI (`/api/v1/ai`)
*   `POST /api/v1/ai/similar-hubs`: Wyszukiwanie semantyczne w silniku Qdrant na bazie embeddingów węzłów (znajdź najbardziej zbliżone węzły w kraju).

---

## 3. Zasady Obsługi Błędów i Niezmienniki Architektoniczne

1. **Brak kolumn w Parquet:** W przypadku starszych lub zoptymalizowanych plików Parquet backend MUSI stosować dynamiczną introspekcję (`DESCRIBE`) i zwracać spójne wartości domyślne zamiast rzucać błąd Binder Error 500.
2. **Stateless Backend:** Backend na OCI nie przechowuje stanu sesji w pamięci RAM — wszystkie zapytania DuckDB wykonują się in-memory w oparciu o pliki na dysku `/data/cities/`.
3. **C-Level Vectorization First:** Żadne operacje przestrzenne nie mogą być wykonywane pętlami `apply(lambda)` w Pythonie dla dużych zbiorów — wyłącznie wektoryzacja GeoPandas, C-GEOS `shapely.STRtree` i DuckDB.
4. **Subprocess Isolation:** Masowe przetwarzanie 30 miast w potoku musi odbywać się w izolowanych podprocesach (`subprocess.run`), co gwarantuje 100% zwrot pamięci i zwalnianie stron swapu przez jądro Linuxa po każdym mieście.
5. **Multi-Feed Key Isolation:** Wszelkie operacje na trasach GTFS muszą posługiwać się kompozytowym kluczem `route_uid = f"{feed_id}_{route_id}"`, eliminując kolizje linii o tych samych numerach u różnych organizatorów aglomeracji.
6. **Hardware Zone Maps Pushdown:** Tabele Parquet o dużym wolumenie (`stop_transactions_bridge.parquet`) muszą być fizycznie posortowane po kluczach partycjonowania z jednolitym `row_group_size=50000`.
