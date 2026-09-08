# BusOS Palantir Foundry Workspace — Frontend Master Plan & SSOT (`PLAN_FRONTEND.md`)

> **Dokument:** `PLAN_FRONTEND.md` (Główny katalog projektu / Root Directory)  
> **Status:** `LIVING MASTER SSOT` (Sprint 4 — Marzec 2026)  
> **Architektura:** Palantir Foundry Workspace, Blueprint.js (`@blueprintjs/core@^6.16.0`, `@blueprintjs/table`, `@blueprintjs/icons`), Deck.gl v9, MapLibre GL v5, Next.js 16 (Turbopack), React 19.  
> **Zasada nadrzędna:** 100% wykorzystania 45 tras API backendu, zero prowizorki, 100% czystego Blueprint.js (brak shadcn/ui), 3 logiczne podsesje implementacyjne (4.1, 4.2, 4.3).

---

## 1. Architektura Wykonawcza & Podział na 3 Podsesje

Aby uniknąć wyczerpania okna kontekstu i zagwarantować najwyższą jakość inżynierską kodu, realizacja Sprintu 4 została podzielona na **3 atomowe podsesje**:

```
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ PODSESJA 4.1: FUNDAMENT, SHELL & COMMAND CENTER                                                  │
│ 1. Pakiety Blueprint v6, wyczyszczenie legacy shadcn/ui, konfiguracja bp6-dark w globals.css     │
│ 2. Silnie typowany klient API dla wszystkich 45 tras (src/lib/api/)                              │
│ 3. Zustand Store z Session Cache per City i dwukierunkową synchronizacją URL (searchParams)      │
│ 4. Globalny Command Palette (Blueprint Omnibar Ctrl+K / Cmd+K)                                   │
│ 5. Trójstrefowy szkielet FoundryShell (Navbar, regulowany Splitter, StatusBar)                   │
│ 6. Moduł 1: Command Center (Karta Audytowa, Kafelki KPI, Wykres Stop DNA, Magnesy POI)           │
│ 7. Refaktoryzacja MapCanvas Deck.gl v9 (H3HexagonLayer, Scatterplot, Path, Boundary GeoJson)     │
│ → Weryfikacja: npx tsc --noEmit (0 błędów), npm run build (<5s), Commit & Handoff                │
├──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PODSESJA 4.2: GŁÓWNE SILNIKI ANALITYCZNE (DATAGRIDS & POLICY AUDIT)                              │
│ 1. Moduł 2: Network Explorer (Wirtualizowany DataGrid Table2 dla 60k słupków i 28k hubów)       │
│ 2. Wyszukiwarka POI z DuckDB predicate pushdown w nagłówku tabeli (/poi/search)                  │
│ 3. Pasek aktywnych filtrów (Filter Pills) i kontrolka szybkiego skoku "Skocz do #Rank"          │
│ 4. Moduł 3: Optimization (The Axe List TCRP 100 + kalkulator PLN, The Investment List TDI)       │
│ 5. Relacyjne filtry krzyżowe (Linked Cross-Filtering) i rysowanie par kolidujących na mapie      │
│ 6. Moduł 4: Route Analyzer (Katalog linii GTFS, stepper sekwencji przystanków z LRS, prędkości) │
│ → Weryfikacja: npx tsc --noEmit (0 błędów), npm run build (<5s), Commit & Handoff                │
├──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PODSESJA 4.3: RYNEK NIERUCHOMOŚCI, AI RADAR, MOBILNY SHEET & WYDANIE [DONE - 2026-09-08]         │
│ 1. Moduł 5: Market Intel (Wycena RCN, trendy kwartalne 2020–2026, mostek DuckDB w 15ms)         │
│ 2. Moduł 6: Benchmarking Krajowy (Ogólnopolski Leaderboard 30 miast, porównywarka side-by-side) │
│ 3. Dolny Inspektor 360° Profilu Obiektu (Asynchroniczny podgląd, kafelki 4 filarów)             │
│ 4. Integracja AI Radar (Qdrant Vector Similarity & Stop DNA cosinusowy dystans)                  │
│ 5. Mobile Adaptive Bottom Sheet (vaul / motion/react z 3 snap-pointami: 72px / 45% / 90%)       │
│ 6. Usunięcie starych plików (LeftSidebar, RightPanel, stary api-client, stary store)             │
│ 7. Finalny audyt jakości (npx tsc = 0, build 4.8s, 109/109 Pytest PASSED), git push main        │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Prawda o API: Kompletny Katalog 45 Tras i Kontrakty UI

Backend na OCI ARM64 udostępnia dokładnie **45 zarejestrowanych tras HTTP** (43 operacje domenowe + 2 aliasy wsteczne). Każda trasa jest w 100% zintegrowana w interfejsie:

```
                                  Katalog 45 Tras API BusOS
┌─────────────────────────────────────────────────────────────────────────────────────────────┐
│ 1. SYSTEM & MIASTA (4 trasy):                                                               │
│    GET /health, GET /api/v1/cities, GET /api/v1/cities/{c}/boundary, GET /api/v1/population │
├─────────────────────────────────────────────────────────────────────────────────────────────┤
│ 2. SŁUPKI FIZYCZNE MICRO (4 trasy):                                                         │
│    GET /stops, GET /stops/ranking, POST /stops/batch, GET /stops/{id}                       │
├─────────────────────────────────────────────────────────────────────────────────────────────┤
│ 3. WĘZŁY LOGICZNE MACRO (5 tras):                                                           │
│    GET /hubs, GET /hubs/ranking, GET /hubs/{id}, GET /hubs/{id}/details, /hubs/{id}/full    │
├─────────────────────────────────────────────────────────────────────────────────────────────┤
│ 4. SIATKA PRZESTRZENNA H3 RES 8 (5 tras):                                                   │
│    GET /hexagons, GET /hexagons/ranking, GET /hexagons/{hex}/profile,                       │
│    GET /hexagons/{hex}, GET /hexagons/{hex}/stops                                           │
├─────────────────────────────────────────────────────────────────────────────────────────────┤
│ 5. RYNEK NIERUCHOMOŚCI RCN (10 tras):                                                       │
│    GET /market/summary, GET /market/trends, GET /market/transactions/ranking,                │
│    GET /market/transactions/nearby, GET /market/h3-analysis, GET /market/transactions,      │
│    GET /transactions (alias), GET /market/stops-summary,                                     │
│    GET /market/stop/{id}/transactions, GET /market/h3-grid                                  │
├─────────────────────────────────────────────────────────────────────────────────────────────┤
│ 6. PUNKTY ZAINTERESOWANIA POI (3 trasy):                                                    │
│    GET /poi/search, GET /poi/magnets, GET /poi/categories                                   │
├─────────────────────────────────────────────────────────────────────────────────────────────┤
│ 7. ANALITYKA MIEJSKA & POLICY AUDIT (6 tras):                                               │
│    GET /analytics/audit-summary, GET /analytics/national-ranking,                           │
│    GET /analytics/metric-distribution, GET /analytics/compare-cities,                       │
│    GET /analytics/transit-deserts, GET /analytics/axe-list                                  │
├─────────────────────────────────────────────────────────────────────────────────────────────┤
│ 8. TRASY KOMUNIKACJI GTFS & TOPOLOGIA (7 tras):                                             │
│    GET /routes, GET /routes/search, GET /routes/geometry, GET /routes/stop/{id},             │
│    GET /routes/stop/{id}/destinations, GET /routes/edges, GET /routes/{uid}/details        │
├─────────────────────────────────────────────────────────────────────────────────────────────┤
│ 9. SILNIK WEKTOROWY AI & PODOBIEŃSTWO (1 trasa):                                            │
│    POST /ai/similar-hubs                                                                    │
└─────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

### Grupa 1: System, Aglomeracje & Granice Strefowe (4 trasy)

#### 1. `GET /health`
* **Sygnatura:** `GET /health` (bez parametrów).
* **Model Zwracany (`HealthResponse`):** `{ status: str, version: str, engine: str, active_cities_count: int, qdrant_connected: bool }`.
* **Umiejscowienie w UI:** Prawa strona górnego paska operacyjnego (`FoundryNavbar`).
* **Komponent Blueprint.js:** `Tag` z właściwością `intent={online ? "success" : "warning"}`, ikoną `dot` i toolipem `Popover` pokazującym pełne dane: silnik C-GEOS/DuckDB, wersję API, stan połączenia z Qdrant oraz liczbę 30 miast.
* **Strategia Sieciowa:** Odpytywane przy montowaniu aplikacji, powtarzane w interwale co 60 sekund w tle.

#### 2. `GET /api/v1/cities`
* **Sygnatura:** `GET /api/v1/cities` (bez parametrów).
* **Model Zwracany (`CitiesResponse`):** `{ cities: string[], total: int }` (30 slugów aglomeracji).
* **Umiejscowienie w UI:** Lewa sekcja `FoundryNavbar`.
* **Komponent Blueprint.js:** `Button` w wariancie `minimal` z ikoną `globe`, etykietą aktywnego miasta i strzałką w dół, otwierający `Popover` z komponentem `Menu` i wyszukiwarką `InputGroup` filtrującą listę miast w czasie rzeczywistym.
* **Strategia Sieciowa:** Jednorazowe pobranie przy starcie, zapis w pamięci trwałej (`localStorage`) z rewalidacją 1h. Fallback do statycznego pliku `/data/showcase/cities.json`.

#### 3. `GET /api/v1/cities/{city}/boundary`
* **Sygnatura:** `GET /api/v1/cities/{city}/boundary` (ścieżka: `city`).
* **Model Zwracany (`GeoJsonFeatureCollection`):** Feature z geometrią `Polygon`/`MultiPolygon` (EPSG:4326) oraz metadanymi w `properties`: `{ city: str, area_km2: float, source: "transport_zone.gpkg" }`.
* **Umiejscowienie w UI:** Warstwa wektorowa w `MapCanvas` (Deck.gl `GeoJsonLayer`).
* **Wizualizacja:** Przerywana, neonowo-błękitna linia obrysu aglomeracji (`[43, 149, 214, 180]`, `dashArray: [6, 4]`).
* **Strategia Sieciowa:** Ładowane asynchronicznie po zmianie miasta w tle, służy również do automatycznego wyliczenia bounding box i wykonania `flyTo` kamery MapLibre.

#### 4. `GET /api/v1/population`
* **Sygnatura:** `GET /api/v1/population?city={city}`.
* **Model Zwracany (`GeoJsonFeatureCollection`):** Zbiór punktów siatki GUS NSP 2021 (250m × 250m) z atrybutem `pop_val`.
* **Umiejscowienie w UI:** Warstwa opcjonalna w menu wyboru warstw mapy (HUD Warstw).
* **Komponent Blueprint.js:** `Switch` w menu warstw "Siatka Ludności GUS 250m".
* **Wizualizacja:** Deck.gl `ScatterplotLayer` lub heatmapa populacyjna.
* **Strategia Sieciowa:** Ładowane na żądanie (on-demand) wyłącznie po zaznaczeniu przełącznika przez użytkownika.

---

### Grupa 2: Fizyczne Słupki Przystankowe (Micro) (4 trasy)

#### 5. `GET /api/v1/stops`
* **Sygnatura:** `GET /api/v1/stops?city={city}`.
* **Model Zwracany (`GeoJsonFeatureCollection`):** 100% fizycznych słupków z `stop_dna.gpkg` z pełnym zestawem 22 atrybutów w `properties`.
* **Umiejscowienie w UI:** Podstawowa warstwa punktowa `MapCanvas` (Deck.gl `ScatterplotLayer`).
* **Wizualizacja:** Punkty o promieniu zależnym od zoomu, kolorowane według oceny Stop DNA (`A+` = szmaragd `#0F9960`, `A` = zielony, `B` = niebieski, `C` = żółty, `D` = pomarańczowy, `F` = karmazyn `#DB3737`).
* **Strategia Sieciowa:** Pobierane jednorazowo dla miasta z cache'owaniem pamięciowym; wirtualizowane na GPU bez obciążania drzewa DOM Reacta.

#### 6. `GET /api/v1/stops/ranking`
* **Sygnatura:** `GET /api/v1/stops/ranking?city={city}&order_by={col}&order_dir={dir}&limit={limit}&offset={offset}&rank={rank}&grade={grade}&is_hub_anchor={bool}&min_departures={float}&min_pop={float}&h3_index={hex}`.
* **Model Zwracany (`StopRankingResponse`):**
  `{ city: str, total: int, limit: int, offset: int, order_by: str, order_dir: str, items: StopRankingItem[] }`.
  Pola pojedynczego elementu: `rank`, `stop_id`, `stop_name`, `lat`, `lon`, `hub_id`, `hub_name`, `is_hub_anchor`, `stop_departures_h`, `stop_routes_count`, `stop_routes`, `stop_grade`, `stop_percentile`, `stop_local_score_raw`, `stop_infra_score`, `stop_raw_gravity`, `stop_entropy`, `stop_pop_val`, `stop_market_val`, `stop_liquidity`, `stop_hub_share`.
* **Umiejscowienie w UI:** Moduł **Network Explorer** -> Pod-zakładka **"Słupki Fizyczne (Micro)"**.
* **Komponent Blueprint.js:**
  - `@blueprintjs/table`: Komponent `Table2` z wirtualizacją wierszy, nagłówkami `ColumnHeaderCell` z menu sortowania po dowolnej metryce.
  - Komórki: `Tag` dla ocen A+ do F, `TruncatedFormat` dla nazw i tras, liczby formatowane do 1 miejsca po przecinku.
  - Pasek kontrolny: `ControlGroup` z wyszukiwarką, filtrem ocen `ButtonGroup` (`A+`, `A`, `B`, `C`, `D`, `F`), przełącznikiem `Switch` (`Tylko Anchory Huba`) oraz polem `NumericInput` ("Skocz do pozycji #Rank").
* **Strategia Sieciowa:** Bufor 100 wierszy; przewinięcie poniżej 80 wiersza wyzwala pre-fetch kolejnej paczki 100 wierszy w tle.

#### 7. `POST /api/v1/stops/batch`
* **Sygnatura:** `POST /api/v1/stops/batch` z ciałem `{ city: str, stop_ids: string[] }`.
* **Model Zwracany (`StopBatchResponse`):** `{ city: str, count: int, stops: StopProfileResponse[] }`.
* **Umiejscowienie w UI:**
  - Inspektor Huba (lista słupków wchodzących w skład węzła `hub_stops_ids`).
  - Inspektor Heksa H3 (słupki znajdujące się wewnątrz wybranej komórki).
* **Komponent Blueprint.js:** `CardList` wewnątrz Inspektora 360°, gdzie każdy element to miniaturowy `Card` słupka z nazwą, oceną `Tag`, liczbą odjazdów i przyciskiem lupy centrującej mapę na słupku.
* **Strategia Sieciowa:** Wywoływane on-demand w jednym żądaniu HTTP (eliminacja problemu N+1) po otwarciu karty huba lub heksa.

#### 8. `GET /api/v1/stops/{stop_id}`
* **Sygnatura:** `GET /api/v1/stops/{stop_id}?city={city}`.
* **Model Zwracany (`StopProfileResponse`):** Kompletny rekord mikro z 22 metrykami oraz metadanymi huba nadrzędnego.
* **Umiejscowienie w UI:** Dolny wysuwany **Inspektor 360°** (widok profilu słupka).
* **Komponent Blueprint.js:** `Section` z tytułem słupka, `Elevation={1}`, 4 kafelki metryk `Card` reprezentujące filary (Podaż, POI, Demografia, RCN) oraz link `Button` ("Przejdź do Huba nadrzędnego").
* **Strategia Sieciowa:** Wywoływane po kliknięciu słupka na mapie lub w DataGridzie.

---

### Grupa 3: Logiczne Węzły Przesiadkowe (Macro) (5 tras)

#### 9. `GET /api/v1/hubs`
* **Sygnatura:** `GET /api/v1/hubs?city={city}`.
* **Model Zwracany (`GeoJsonFeatureCollection`):** Centroidy węzłów z `hubs.gpkg` z metrykami makro.
* **Umiejscowienie w UI:** Warstwa punktowa węzłów w `MapCanvas` (włączana przełącznikiem Micro/Macro).
* **Wizualizacja:** Większe okręgi niż dla słupków, z pierścieniem zewnętrznym oznaczającym stopień konsolidacji (`hub_stops_count`).
* **Strategia Sieciowa:** Cache'owane w pamięci podręcznej klienta.

#### 10. `GET /api/v1/hubs/ranking`
* **Sygnatura:** `GET /api/v1/hubs/ranking?city={city}&order_by={col}&order_dir={dir}&limit={limit}&offset={offset}&rank={rank}&grade={grade}&min_stops={int}`.
* **Model Zwracany (`HubRankingResponse`):**
  `{ city: str, total: int, limit: int, offset: int, order_by: str, order_dir: str, items: HubRankingItem[] }`.
  Pola: `rank`, `hub_id`, `hub_name`, `lat`, `lon`, `hub_stops_count`, `hub_stops_ids`, `hub_departures_h`, `hub_routes_count`, `hub_routes`, `hub_grade`, `hub_percentile`, `hub_local_score_raw`, `hub_infra_score`, `hub_raw_gravity`, `hub_entropy`, `hub_pop_val`, `hub_market_val`, `hub_liquidity`.
* **Umiejscowienie w UI:** Moduł **Network Explorer** -> Pod-zakładka **"Węzły Przesiadkowe (Macro)"**.
* **Komponent Blueprint.js:** `Table2` z kolumnami: Ranga, Nazwa Huba, Ocena (`Tag`), Liczba Słupków (`Badge`), Suma Odjazdów/h, Populacja Ciążąca, Wycena RCN, Entropia POI. Filtr `min_stops` w postaci `NumericInput`.
* **Strategia Sieciowa:** Paginacja wirtualizowana strumieniowa (100 wierszy per chunk).

#### 11. `GET /api/v1/hubs/{hub_id}`
* **Sygnatura:** `GET /api/v1/hubs/{hub_id}?city={city}`.
* **Model Zwracany (`HubCardResponse`):** Metryki makro węzła oraz tablica stringów `hub_stops_ids`.
* **Umiejscowienie w UI:** Nagłówek Inspektora 360° węzła.
* **Komponent Blueprint.js:** `Section` z identyfikatorem huba, nazwą zespołu, percentylem ogólnopolskim i miejskim.

#### 12. `GET /api/v1/hubs/{hub_id}/details` oraz `/hubs/{hub_id}/full`
* **Sygnatura:** `GET /api/v1/hubs/{hub_id}/details?city={city}&lat={lat}&lon={lon}`.
* **Model Zwracany (`HubDetailsResponse`):**
  `{ hub_id: str, city: str, lat: float, lon: float, pois: PoiDetail[], pop: PopDetail[], metrics: Dict }`.
  `PoiDetail`: `{ poi_id, name, category, tier, lat, lon, w, sum_pull }`.
  `PopDetail`: `{ grid_id, lat, lon, pop_val, sum_pull_pop }`.
* **Umiejscowienie w UI:** Dolny wysuwany **Inspektor 360°** (widok profilu węzła).
* **Komponent Blueprint.js:** Komponent `Tabs` z 4 zakładkami:
  - **Przegląd:** 4 kafelki filarowe, Z-Score, Zlewnia ludnościowa.
  - **Magnesy POI:** Tabela `Table2` z listą obiektów w promieniu 500m, ich kategoriami i siłą przyciągania ($w \cdot \text{sum\_pull}$).
  - **Demografia GUS:** Tabela komórek siatki 250m i wykres słupkowy ciążenia popytu.
  - **AI Radar:** Sekcja podobieństwa wektorowego.
* **Strategia Sieciowa:** Wywoływane w DuckDB in-memory w 8–15ms na żądanie kliknięcia w węzeł.

---

### Grupa 4: Siatka Przestrzenna Uber H3 Res 8 (5 tras)

#### 13. `GET /api/v1/hexagons`
* **Sygnatura:** `GET /api/v1/hexagons?city={city}&min_pop={float}`.
* **Model Zwracany (`HexagonsResponse`):**
  `{ city: str, resolution: 8, count: int, hexagons: HexagonCell[] }`.
  `HexagonCell`: `{ hex, lat, lon, stop_count, hub_count, total_departures_h, max_stop_grade, transport_score, pop_total, rcn_tx_count, rcn_median_price_m2, poi_gravity_sum, transit_desert_index, is_transit_desert }`.
* **Umiejscowienie w UI:** Główna warstwa przestrzenna `MapCanvas` (Deck.gl `H3HexagonLayer`).
* **Wizualizacja:**
  - Wysokość 3D (ekstruzja słupów heksagonalnych): proporcjonalna do `transport_score` lub `pop_total`.
  - Kolorystyka:
    * Tryb Standard: Gradient od ciemnoniebieskiego (niska podaż) do szmaragdu (wysoka podaż).
    * Tryb Pustynie Transportowe: Jaskrawy karmazyn/czerwień dla komórek z `is_transit_desert == True` na tle wyszarzonej reszty miasta.
* **Strategia Sieciowa:** Pobierane z cache'em przeglądarki, renderowane z akceleracją sprzętową GPU WebGL.

#### 14. `GET /api/v1/hexagons/ranking`
* **Sygnatura:** `GET /api/v1/hexagons/ranking?city={city}&order_by={col}&order_dir={dir}&limit={limit}&offset={offset}&rank={rank}&is_transit_desert={bool}&has_rcn={bool}&min_pop={float}&max_pop={float}&min_departures={float}&max_departures={float}&grade={grade}`.
* **Model Zwracany (`HexagonRankingResponse`):**
  `{ city: str, total: int, limit: int, offset: int, order_by: str, order_dir: str, items: HexagonRankingItem[] }`.
* **Umiejscowienie w UI:** Moduł **Optimization** -> Pod-zakładka **"Pustynie & Potencjał H3"**.
* **Komponent Blueprint.js:** `Table2` z sortowaniem po TDI (`transit_desert_index`), ludności GUS, odjazdach i medianie cen mieszkań. Filtry w pasku narzędziowym: suwaki przedziałów populacji i odjazdów.

#### 15. `GET /api/v1/hexagons/{hex_index}/profile`
* **Sygnatura:** `GET /api/v1/hexagons/{hex_index}/profile?city={city}`.
* **Model Zwracany (`HexagonProfileResponse`):**
  `{ city: str, hex: str, hexagon: HexagonCell, stops: StopRankingItem[], rcn_transactions: Dict[], top_pois: Dict[] }`.
* **Umiejscowienie w UI:** Dolny wysuwany **Inspektor 360°** (profil komórki H3).
* **Komponent Blueprint.js:** Panel łączący parametry heksa z listą fizycznych przystanków w komórce, listą ostatnich transakcji notarialnych oraz magnesami POI.

#### 16. `GET /api/v1/hexagons/{hex_index}`
* **Sygnatura:** `GET /api/v1/hexagons/{hex_index}?city={city}`.
* **Model Zwracany (`HexagonCell`):** Podstawowe parametry analityczne pojedynczego heksa.
* **Umiejscowienie w UI:** Pływający mini-tooltip przy hoverze nad heksem na mapie (gdy Inspektor jest zamknięty).

#### 17. `GET /api/v1/hexagons/{hex_index}/stops`
* **Sygnatura:** `GET /api/v1/hexagons/{hex_index}/stops?city={city}`.
* **Model Zwracany (`GeoJsonFeatureCollection`):** Geometrie punktowe słupków w komórce.
* **Umiejscowienie w UI:** Podświetlenie przystanków w heksie na mapie po kliknięciu w komórkę.

---

### Grupa 5: Rynek Nieruchomości RCN & Wycena Przestrzenna (10 tras)

#### 18. `GET /api/v1/market/summary`
* **Sygnatura:** `GET /api/v1/market/summary?city={city}`.
* **Model Zwracany (`MarketSummaryResponse`):**
  `{ city: str, total: int, valid: int, median_price_m2: float, trimmed_mean_m2: float, min_valid: float, max_allowed: float }`.
* **Umiejscowienie w UI:** Górne kafelki KPI w module **Market Intel**.
* **Komponent Blueprint.js:** 4 kafelki `Card` z ikonami `home`, prezentujące medianę ceny m², średnią uciętą (po filtrze IQR), całkowity wolumen transakcji oraz bezpieczne granice rynkowe.

#### 19. `GET /api/v1/market/trends`
* **Sygnatura:** `GET /api/v1/market/trends?city={city}&stop_id={opt}&interval={year|quarter}&market_type={opt}`.
* **Model Zwracany (`MarketTrendsResponse`):**
  `{ city: str, stop_id: str|null, interval: str, total_periods: int, periods: MarketTrendPeriodItem[] }`.
  Pola okresu: `period` (np. "2023-Q2"), `tx_count`, `median_price_m2`, `avg_price_m2`, `q1_price_m2`, `q3_price_m2`.
* **Umiejscowienie w UI:**
  - Główny wykres w module **Market Intel**.
  - Sekcja rynkowa w Inspektorze 360° dla wybranego słupka przystankowego (`stop_id`).
* **Komponent Wizualizacji:** Wykres Recharts `AreaChart` z pasmem kwartyli cenowych (Q1–Q3 jako zacieniony obszar) oraz linią mediany cen w czasie (2020–2026), uzupełniony słupkami wolumenu transakcji na osi pomocniczej. Przełącznik `ButtonGroup` (Rocznie / Kwartalnie) oraz filtr Rynku (Wszystkie / Pierwotny / Wtórny).

#### 20. `GET /api/v1/market/stops-summary`
* **Sygnatura:** `GET /api/v1/market/stops-summary?city={city}&date_from={opt}&date_to={opt}&market_type={opt}`.
* **Model Zwracany:** Słownik `{ [stop_id: string]: { tx_count: int, median_price_m2: float, avg_price_m2: float, min_price_m2: float, max_price_m2: float, avg_distance_m: float } }`.
* **Umiejscowienie w UI:** Moduł **Market Intel** -> Tabela korelacji cen m² ze słupkami.
* **Komponent Blueprint.js:** `Table2` pozwalająca analizować ceny mieszkań wokół każdego z tysięcy słupków miasta z filtrem zakresu dat zawarcia aktu notarialnego.
* **Wydajność:** Odpowiedź z mostka DuckDB w 12–26 ms dla całej aglomeracji.

#### 21. `GET /api/v1/market/stop/{stop_id}/transactions`
* **Sygnatura:** `GET /api/v1/market/stop/{stop_id}/transactions?city={city}&date_from={opt}&date_to={opt}`.
* **Model Zwracany:** Lista surowych transakcji w buforze 500m: `[{ tx_id, dok_data, price_m2, distance_m, tran_rodzaj_rynku }]`.
* **Umiejscowienie w UI:** Zakładka "Nieruchomości" w Inspektorze 360° słupka.
* **Komponent Blueprint.js:** Mini `Table2` z datą aktu, odległością pieszą w metrach, ceną m² i rynkiem (`pierwotny` / `wtórny`).

#### 22. `GET /api/v1/market/transactions/ranking`
* **Sygnatura:** `GET /api/v1/market/transactions/ranking?city={city}&order_by={col}&order_dir={dir}&limit={limit}&offset={offset}&rank={rank}&market_type={opt}&property_function={opt}&min_price_m2={opt}&max_price_m2={opt}&date_from={opt}&date_to={opt}`.
* **Model Zwracany (`MarketTransactionsRankingResponse`):**
  `{ city: str, total: int, limit: int, offset: int, items: MarketTransactionItem[] }`.
  Pola: `rank`, `gml_id`, `price_m2`, `total_price`, `area_m2`, `market_type`, `property_function`, `floor`, `rooms`, `date`, `address`, `lat`, `lon`.
* **Umiejscowienie w UI:** Moduł **Market Intel** -> Pod-zakładka **"Akty Notarialne RCN"**.
* **Komponent Blueprint.js:** `Table2` z formatowaniem walutowym (PLN/m², kwota całkowita PLN), metrażem, datą i rynkiem.

#### 23. `GET /api/v1/market/transactions/nearby`
* **Sygnatura:** `GET /api/v1/market/transactions/nearby?city={city}&lat={lat}&lon={lon}&radius_m={radius}&limit={limit}`.
* **Model Zwracany (`MarketTransactionsNearbyResponse`):** Transakcje w metrycznym promieniu wokół wskazanego punktu.
* **Umiejscowienie w UI:** Narzędzie mapowe: kliknięcie prawym przyciskiem myszy na mapie ("Zbadaj ceny w promieniu 500m").
* **Komponent Blueprint.js:** `Dialog` lub boczny popover z zestawieniem transakcji i średnią ceną w punkcie kliknięcia.

#### 24. `GET /api/v1/market/h3-analysis`
* **Sygnatura:** `GET /api/v1/market/h3-analysis?city={city}`.
* **Model Zwracany (`MarketH3AnalysisResponse`):**
  `{ city: str, coverage_pct: float, cells_with_rcn: int, total_cells: int, price_stats: Dict, price_brackets: PriceBracket[], transport_correlation: float }`.
* **Umiejscowienie w UI:** Moduł **Market Intel** -> Panel analizy przestrzennej.
* **Komponent Wizualizacji:** Wykres Recharts `BarChart` prezentujący 6 przedziałów cenowych oraz kafelek ze współczynnikiem korelacji Pearsona (Cena mieszkań vs Podaż transportu).

#### 25. `GET /api/v1/market/h3-grid`
* **Sygnatura:** `GET /api/v1/market/h3-grid?city={city}&date_from={opt}&date_to={opt}&market_type={opt}`.
* **Model Zwracany:** Zagregowane heksy H3 z metrykami rynku nieruchomości wyliczonymi dynamicznie w DuckDB.
* **Umiejscowienie w UI:** Dynamiczne kolorowanie warstwy heksów w trybie analizy cen mieszkań.

#### 26. `GET /api/v1/market/transactions` oraz `GET /api/v1/transactions`
* **Sygnatura:** `GET /api/v1/market/transactions?city={city}`.
* **Model Zwracany (`GeoJsonFeatureCollection`):** Punkty transakcji z atrybutem `price_m2`.
* **Umiejscowienie w UI:** Warstwa opcjonalna punktów transakcji w menu HUD mapy.

---

### Grupa 6: Punkty Zainteresowania (POI) & Magnesy Miejskie (3 trasy)

#### 27. `GET /api/v1/poi/search`
* **Sygnatura:** `GET /api/v1/poi/search?city={city}&query={q}&category={cat}&tier={tier}&min_w={float}&limit={limit}&offset={offset}`.
* **Model Zwracany (`PoiSearchResponse`):** `{ city: str, total: int, items: PoiSearchItem[] }`.
* **Umiejscowienie w UI:** Uniwersalna wyszukiwarka w nagłówku modułu **Network Explorer**.
* **Komponent Blueprint.js:** `InputGroup` z autouzupełnianiem (debounce 250ms), zwracający listę obiektów w menu rozwijanym. Kliknięcie obiektu centruje mapę na jego współrzędnych i podświetla okoliczne przystanki.

#### 28. `GET /api/v1/poi/magnets`
* **Sygnatura:** `GET /api/v1/poi/magnets?city={city}&limit={limit}&tier={tier}&category={cat}&min_w={float}`.
* **Model Zwracany (`PoiMagnetsResponse`):** `{ city: str, total: int, magnets: PoiMagnetItem[] }`.
  Pola: `rank`, `name`, `category`, `tier`, `w`, `lat`, `lon`, `sum_pull`.
* **Umiejscowienie w UI:** Karta "Kluczowe Magnesy Miejskie (Top Attractors)" w module **Command Center**.
* **Komponent Blueprint.js:** `Card` z listą obiektów rangi krajowej i regionalnej (dworce, lotniska, szpitale, uczelnie) z wagami grawitacji i tagami kategorii.

#### 29. `GET /api/v1/poi/categories`
* **Sygnatura:** `GET /api/v1/poi/categories?city={city}&limit={limit}&order_by={col}&order_dir={dir}`.
* **Model Zwracany (`PoiCategoriesResponse`):** `{ city: str, total: int, categories: PoiCategoryItem[] }`.
  Pola: `category`, `tier`, `count`, `final_value`.
* **Umiejscowienie w UI:** Rozbicie struktury usługowej w module **Command Center** oraz w Inspektorze Huba.
* **Komponent Blueprint.js:** Mini `Table2` lub poziomy wykres słupkowy udziału kategorii POI.

---

### Grupa 7: Analityka Miejska & Policy Audit (6 tras)

#### 30. `GET /api/v1/analytics/audit-summary`
* **Sygnatura:** `GET /api/v1/analytics/audit-summary?city={city}&include={sections}` (gdzie `include=summary,zscore,grades,h3,rcn,tcrp,poi,all`).
* **Model Zwracany (`CityAuditSummaryResponse`):**
  - `summary`: `{ stops_count, hubs_count, consolidation_ratio, population_total, population_baseline, population_delta_pct, is_metro_area, rcn_transactions_count, critical_nulls_infs }`.
  - `zscore`: rozkład Z-Score (`mean`, `std`, `is_valid`).
  - `grades`: rozkład ocen Stop DNA (A+, A, B, C, D, F) dla słupków i hubów.
  - `tcrp`: `{ redundant_stops_r50, redundant_stops_r70, redundant_stops_r90, top_redundant_pairs }`.
* **Umiejscowienie w UI:** Główny widok **Command Center** (City Scorecard).
* **Komponent Blueprint.js:**
  - `Section` "Karta Audytowa Aglomeracji".
  - `Card` KPI: Konsolidacja Sieci (słupki/hub), Populacja Obszaru, Spójność Danych (0 nulli).
  - Wykres rozkładu ocen Stop DNA (Recharts `BarChart`).
* **Strategia Sieciowa:** Ładowane domyślnie z parametrem `include=summary,grades` dla natychmiastowego startu; pozostałe sekcje dociągane przy przewijaniu.

#### 31. `GET /api/v1/analytics/axe-list`
* **Sygnatura:** `GET /api/v1/analytics/axe-list?city={city}&threshold={float}`.
* **Model Zwracany (`AxeListResponse`):**
  `{ city: str, threshold: float, total_redundant: int, stops: AxeStopItem[] }`.
  Pola: `redundant_stop_id`, `redundant_stop_name`, `dominant_stop_id`, `dominant_stop_name`, `redundancy_score`, `distance_m`, `service_overlap`, `spatial_decay`, `demand_cannibalization`, `redundant_routes`, `dominant_routes`, `redundant_departures_h`, `dominant_departures_h`, `lat`, `lon`.
* **Umiejscowienie w UI:** Moduł **Optimization** -> Pod-zakładka **"The Axe List (Redukcja TCRP 100)"**.
* **Komponent Blueprint.js:**
  - `Table2` z wykazem par kanibalizujących się przystanków, suwakiem progu redundancji `Slider` ($R \ge 0.50, 0.70, 0.90$).
  - Kalkulator Oszczędności Budżetowych: `Card` wyliczający roczne oszczędności z likwidacji zbędnych słupków ($\approx 12\,000\text{ PLN}$ na słupek/rok).
* **Interakcja z Mapą:** Kliknięcie wiersza rysuje na mapie czerwoną linię łączącą słupek dominujący ze słupkiem zbędnym.

#### 32. `GET /api/v1/analytics/transit-deserts`
* **Sygnatura:** `GET /api/v1/analytics/transit-deserts?city={city}&limit={limit}`.
* **Model Zwracany (`TransitDesertsResponse`):**
  `{ city: str, count: int, deserts: TransitDesertItem[] }`.
  Pola: `h3_index`, `lat`, `lon`, `pop_total`, `total_departures_h`, `transit_desert_index`, `is_transit_desert`, `rcn_median_price_m2`, `stop_count`, `hub_count`.
* **Umiejscowienie w UI:** Moduł **Optimization** -> Pod-zakładka **"The Investment List (Pustynie TDI)"**.
* **Komponent Blueprint.js:** `Table2` posortowana malejąco po wskaźniku TDI, z oznaczeniem populacji pozbawionej transportu i szacunkiem cen mieszkań.
* **Interakcja z Mapą:** Podświetla czerwoną komórkę H3 na mapie i centruje widok.

#### 33. `GET /api/v1/analytics/national-ranking`
* **Sygnatura:** `GET /api/v1/analytics/national-ranking?scope={stops|hubs|hexagons|cities}&order_by={col}&order_dir={dir}&limit={limit}&offset={offset}&rank={rank}&grade={grade}&city={city}`.
* **Model Zwracany (`NationalRankingResponse`):** Ogólnopolska tablica liderów dla 60k słupków, 28k hubów lub 30 miast.
* **Umiejscowienie w UI:** Moduł **Benchmarking Krajowy** -> Tablica Liderów.
* **Komponent Blueprint.js:** `Table2` z przełącznikiem zakresu `SegmentedControl` / `ButtonGroup` (Aglomeracje / Słupki / Węzły / Heksy).

#### 34. `GET /api/v1/analytics/metric-distribution`
* **Sygnatura:** `GET /api/v1/analytics/metric-distribution?city={city|all}&metric={metric}`.
* **Model Zwracany (`MetricDistributionResponse`):**
  `{ city: str, metric: str, count: int, min: float, p10: float, p25: float, median: float, p75: float, p90: float, max: float, mean: float, std: float, histogram_bins: HistogramBin[] }`.
* **Umiejscowienie w UI:** Inspektor 360° (rozkład dowolnej wybranej metryki) oraz moduł **Benchmarking**.
* **Komponent Wizualizacji:** Wykres Recharts z 10 słupkami histogramu, pionową linią mediany i markerem wskazującym pozycję aktualnie badanego obiektu na tle rozkładu miasta lub całej Polski (`city=all`).

#### 35. `GET /api/v1/analytics/compare-cities`
* **Sygnatura:** `GET /api/v1/analytics/compare-cities?city_a={slug}&city_b={slug}`.
* **Model Zwracany (`CityComparisonResponse`):** Dwa obiekty `CityKpi` side-by-side.
* **Umiejscowienie w UI:** Moduł **Benchmarking Krajowy** -> Narzędzie Porównywarki.
* **Komponent Blueprint.js:** Dwie kolumny `Card` z selektorami miast i wskaźnikami różnic procentowych (zielone/czerwone tagi delta).

---

### Grupa 8: Trasy Komunikacji Miejskiej GTFS & Topologia Sieci (7 tras)

#### 36. `GET /api/v1/routes`
* **Sygnatura:** `GET /api/v1/routes?city={city}&feed_id={opt}&route_type={opt}&canonical_only={bool}`.
* **Model Zwracany:** Lista linii transportowych:
  `[{ feed_id, route_id, route_uid, short_name, long_name, type, color, direction_id, headsign, daily_trips, stop_count, length_km, travel_time_min, commercial_speed_kmh, first_departure, last_departure, peak_headway_min, offpeak_headway_min, geometry_source, is_shape_interpolated }]`.
* **Umiejscowienie w UI:** Moduł **Route Analyzer** -> Katalog Linii.
* **Komponent Blueprint.js:** `Table2` z kolumnami: Numer Linii (kolorowy badge z tłem `color`), Kierunek, Typ (Autobus/Tramwaj), Kursy/dobę, Długość km, Czas przejazdu, Prędkość handlowa km/h, Takt szczytowy.

#### 37. `GET /api/v1/routes/search`
* **Sygnatura:** `GET /api/v1/routes/search?city={city}&query={q}&limit={limit}`.
* **Model Zwracany:** Odfiltrowana lista linii pasujących do zapytania.
* **Umiejscowienie w UI:** Szybka wyszukiwarka linii w nagłówku modułu **Route Analyzer**.
* **Komponent Blueprint.js:** `InputGroup` z ikoną lupy i skrótem klawiszowym (`/`).

#### 38. `GET /api/v1/routes/geometry`
* **Sygnatura:** `GET /api/v1/routes/geometry?city={city}&route_uid={uid}&canonical_only={bool}`.
* **Model Zwracany (`GeoJsonFeatureCollection`):** Precyzyjny ślad geometrii trasy (EPSG:4326 MultiLineString z LRS).
* **Umiejscowienie w UI:** Warstwa tras w `MapCanvas` (Deck.gl `PathLayer`).
* **Wizualizacja:** Ścieżka o grubości 4px renderowana w oficjalnym kolorze przewoźnika (`route_color`).

#### 39. `GET /api/v1/routes/{route_uid}/details`
* **Sygnatura:** `GET /api/v1/routes/{route_uid}/details?city={city}&direction_id={dir}`.
* **Model Zwracany:**
  `{ route_uid, short_name, color, total_length_km, total_travel_time_min, commercial_speed_kmh, service_hours, variants: [], stops: RouteStopItem[] }`.
  `RouteStopItem`: `{ sequence, stop_id, stop_name, lat, lon, segment_distance_m, cumulative_distance_km, segment_travel_time_sec, cumulative_travel_time_min, segment_speed_kmh, is_terminal }`.
* **Umiejscowienie w UI:** Moduł **Route Analyzer** -> Prawy panel profilu trasy.
* **Komponent Blueprint.js:**
  - Przełącznik wariantów/kierunków: `ButtonGroup`.
  - Oś czasu (Stepper Przystankowy): Wertykalny timeline z numeracją sekwencji, odległościami narastającymi `+X km`, czasami `+Y min` oraz prędkościami handlowymi na każdym odcinku międzyprzystankowym.
* **Interakcja z Mapą:** Kliknięcie przystanku w stepperze przesuwa kamerę mapy na słupek i podświetla odcinek trasy.

#### 40. `GET /api/v1/routes/stop/{stop_id}`
* **Sygnatura:** `GET /api/v1/routes/stop/{stop_id}?city={city}`.
* **Model Zwracany:** Lista wszystkich linii i kierunków obsługujących dany słupek.
* **Umiejscowienie w UI:** Zakładka "Linie" w Inspektorze 360° słupka.
* **Komponent Blueprint.js:** Zestaw kolorowych `Tag` z numerami linii; kliknięcie tagu przełącza widok do profilu tej linii w **Route Analyzer**.

#### 41. `GET /api/v1/routes/stop/{stop_id}/destinations`
* **Sygnatura:** `GET /api/v1/routes/stop/{stop_id}/destinations?city={city}`.
* **Model Zwracany (`StopDestinationsResponse`):**
  `{ city: str, from_stop_id: str, from_stop_name: str, destinations_count: int, destinations: StopDestinationItem[] }`.
  `StopDestinationItem`: `{ to_stop_id, to_stop_name, lat, lon, min_travel_time_sec, distance_m, speed_kmh, routes: string[] }`.
* **Umiejscowienie w UI:** Sekcja "Bezpośrednia Osiągalność 1-Hop" w Inspektorze 360° słupka.
* **Komponent Blueprint.js:** Mini `Table2` posortowana po czasie dojazdu (`min_travel_time_sec`), z listą linii dojazdowych i prędkością handlową.

#### 42. `GET /api/v1/routes/edges`
* **Sygnatura:** `GET /api/v1/routes/edges?city={city}&route_uid={uid}`.
* **Model Zwracany:** Surowe krawędzie skierowane grafu sieci $u \to v$ z odległościami i czasami netto.
* **Umiejscowienie w UI:** Pod-zakładka "Analiza Prędkości Odcinkowych" w module **Route Analyzer**.
* **Komponent Blueprint.js:** `Table2` z kolorowaniem wąskich gardeł prędkości (odcinki < 15 km/h na czerwono).

---

### Grupa 9: Wektorowy Silnik AI & Podobieństwo Stop DNA (1 trasa)

#### 43. `POST /api/v1/ai/similar-hubs`
* **Sygnatura:** `POST /api/v1/ai/similar-hubs` z ciałem `{ hub_id: str, city: str, top_k: int }`.
* **Model Zwracany (`SimilarHubResponse[]`):**
  `[{ hub_id: str, city: str, stop_name: str, similarity_score: float, grade: str, local_score_raw: float }]`.
* **Umiejscowienie w UI:** Karta **"AI Radar: Podobne Węzły w Polsce"** w Inspektorze 360° huba.
* **Komponent Blueprint.js:** `Card` z listą 5 najbardziej zbliżonych węzłów w kraju z bazy 28 317 hubów. Prezentuje nazwę miasta, nazwę węzła, ocenę Stop DNA oraz pasek `ProgressBar` odzwierciedlający cosinusowe podobieństwo wektorowe (np. `98.4% zgodności`). Kliknięcie pozwala błyskawicznie przełączyć dashboard na analizę tego bliźniaczego węzła.

---

## 3. Arsenał Komponentów Blueprint.js v6 & Foundry Design System

Aplikacja wykorzystuje wyłącznie oficjalne komponenty `@blueprintjs/core` i `@blueprintjs/table` w technicznym motywie `bp6-dark`:

### 3.1 Paleta Barw i Tokeny Systemowe (`bp6-dark`)
*   **Tło aplikacji (Canvas Background):** `#111418` (Głęboki antracyt).
*   **Tło paneli i sekcji (Surface):** `#1c2127` (Panel roboczy).
*   **Tło aktywne / hover (Elevated Surface):** `#252a31` (Karty, wiersze hover).
*   **Obramowania (Borders):** `#383e47` (Subtelne linie podziału).
*   **Tekst główny:** `#f6f7f9` (Wysoki kontrast).
*   **Tekst wyciszony (Muted):** `#8f99a8` (Podpisy, jednostki, metadane).
*   **Akcenty funkcyjne (Foundry Semantics):**
    *   `Emerald` (`#0F9960` / `intent="success"`): Klasy A+/A Stop DNA, wysoka częstotliwość odjazdów, zysk efektywności.
    *   `Cobalt` (`#2B95D6` / `intent="primary"`): Klasa B, zaznaczenia wierszy, aktywne trasy, przyciski akcji.
    *   `Amber` (`#D9822B` / `intent="warning"`): Klasa D, ostrzeżenia o brakach danych, umiarkowany deficyt.
    *   `Crimson` (`#DB3737` / `intent="danger"`): Klasa F, Pustynie Transportowe (TDI), Przystanki zbędne w The Axe List.

### 3.2 Narzędzia Power-User Palantir Foundry
1. **Globalny Command Palette (`Ctrl+K` / `Cmd+K` via Blueprint Omnibar):**
   - Pozwala z dowolnego miejsca w aplikacji natychmiast wyszukać aglomerację, wpisać numer linii GTFS, nazwę przystanku lub wywołać akcję (np. "Eksportuj widok do CSV", "Otwórz The Axe List").
2. **Relacyjne Filtry Krzyżowe (Linked Cross-Filtering):**
   - Zaznaczenie wiersza ze słupkiem w DataGridzie natychmiast:
     * Filtruje linie autobusowe/tramwajowe do tych, które go obsługują (`/routes/stop/{id}`).
     * Pokazuje transakcje notarialne RCN w promieniu 500m (`/market/stop/{id}/transactions`).
     * Rysuje punkt na mapie i podświetla nadrzędny hub logiczny.
3. **Pasek Aktywnych Filtrów (Filter Pills):**
   - Bezpośrednio nad każdą tabelą renderowany jest rząd tagów Blueprint `Tag` z krzyżykiem `onRemove`, pokazujący aktualnie nałożone filtry (np. `[Klasa: A+]` `[Min odjazdy: 15/h]` `[Tylko Anchory]` `✕ Wyczyść wszystko`).
4. **Foundry Data Actions:**
   - Każdy DataGrid posiada przycisk eksportu aktualnie widocznych/odfiltrowanych danych do pliku `.csv` lub `.json` oraz kopiowania identyfikatorów do schowka systemowego.

---

## 4. Architektura Progresywnego Ujawniania Danych

Aplikacja chroni analityka przed przesyceniem informacyjnym poprzez deterministyczne 4 poziomy ujawniania danych:

```
[Poziom 0: Shell Startowy] ──→ [Poziom 1: Karta Audytowa] ──→ [Poziom 2: DataGrid 100] ──→ [Poziom 3: Inspektor 360°]
  - /health (<100ms)             - /audit-summary (KPI)          - /ranking (bufor 100)        - Profil obiektu
  - /cities (cache)              - Obrys miasta /boundary        - Płynne doładowywanie        - Magnesy, RCN, GTFS
  - Waga: ~2 KB                  - Waga: ~15 KB                  - Waga: ~20 KB                - Waga: ~5 KB
```

*   **Poziom 0 (Shell):** Start poniżej 100ms. Wczytuje wyłącznie status backendu oraz listę miast.
*   **Poziom 1 (Scorecard):** Po wejściu do aglomeracji pobiera wyłącznie podsumowanie KPI aglomeracji i geometrię obrysu. Żadne ciężkie punkty nie są wstrzykiwane do drzewa DOM.
*   **Poziom 2 (DataGrid):** Po wejściu do modułu (np. Słupki) pobierana jest pierwsza paczka 100 wierszy wirtualizowanych w `Table2`.
*   **Poziom 3 (Inspektor 360° na żądanie):** Dopiero kliknięcie konkretnego obiektu wyzwala docelowe zapytania o okoliczne transakcje, ludność GUS czy podobieństwo AI.

---

## 5. Kompletne Drzewo Plików (~60 Plików)

```
urban-dashboard/src/
├── app/
│   ├── layout.tsx                               # Klasa bp6-dark, importy CSS Blueprint
│   ├── page.tsx                                 # Renderowanie FoundryShell
│   └── globals.css                              # Motyw bp6-dark, reset Tailwind v4
│
├── lib/
│   ├── api/                                     # Silnie typowany klient 45 tras
│   │   ├── client.ts                            # Podstawowy fetch z AbortController i fallbackiem
│   │   ├── types.ts                             # 100% interfejsów TS modeli Pydantic
│   │   ├── cities.ts                            # /health, /cities, /boundary, /population
│   │   ├── stops.ts                             # /stops, /stops/ranking, /stops/batch, /stops/{id}
│   │   ├── hubs.ts                              # /hubs, /hubs/ranking, /hubs/{id}, /details, /full
│   │   ├── hexagons.ts                          # /hexagons, /hexagons/ranking, /profile, /{hex}, /stops
│   │   ├── market.ts                            # /market/summary, trends, ranking, stops-summary, h3
│   │   ├── poi.ts                               # /poi/search, /poi/magnets, /poi/categories
│   │   ├── analytics.ts                         # /audit-summary, axe-list, transit-deserts, national, compare
│   │   ├── routes.ts                            # /routes, search, geometry, details, stop, destinations, edges
│   │   └── ai.ts                                # /ai/similar-hubs
│   │
│   ├── store/                                   # Modułowy store Zustand
│   │   ├── index.ts                             # Root store z Session Cache per City
│   │   ├── city-slice.ts                        # Wybór miasta, lista miast, telemetria
│   │   ├── module-slice.ts                      # Aktywny moduł (1-6), sub-zakładki
│   │   ├── map-slice.ts                         # ViewState, styl mapy, widoczność warstw
│   │   ├── selection-slice.ts                   # Zaznaczony obiekt (słupek, hub, heks, trasa)
│   │   └── grid-slice.ts                        # Sortowanie, filtry, paginacja tabel
│   │
│   └── utils/
│       ├── formatters.ts                        # Formatowanie walut, liczb, czasów, prędkości
│       └── url-state.ts                         # Dwukierunkowa synchronizacja searchParams
│
├── components/
│   ├── foundry/                                 # Szkielet Foundry Workspace
│   │   ├── FoundryShell.tsx                     # Orkiestrator 3-strefowy z regulowanym splitterem
│   │   ├── FoundryNavbar.tsx                    # Górny pasek: Miasto, Moduły, Telemetria, Akcje
│   │   ├── CommandPalette.tsx                   # Omnibar Ctrl+K dla szybkiego wyszukiwania
│   │   ├── MapCanvas.tsx                        # Deck.gl v9 + MapLibre z per-module switcherem
│   │   ├── MapHud.tsx                           # Mini-HUD mapy: Satelita, 3D, Legenda, Warstwy
│   │   ├── AnalyticalWorkspace.tsx              # Router prawego panelu modułów
│   │   ├── StatusBar.tsx                        # Dolny pasek telemetryczny ze statystykami
│   │   └── ObjectInspector.tsx                  # Dolny uniwersalny panel 360° profilu obiektu
│   │
│   ├── modules/                                 # 6 modułów zadaniowych
│   │   ├── command-center/
│   │   │   ├── CommandCenterModule.tsx          # Karta Audytowa & Scorecard aglomeracji
│   │   │   ├── CityScorecardCards.tsx           # 4 kafelki KPI (Konsolidacja, Podaż, Wycena, Spójność)
│   │   │   ├── GradeDistributionChart.tsx       # Wykres rozkładu ocen Stop DNA (Recharts)
│   │   │   └── CityMagnetsList.tsx              # Top magnesy miejskie z /poi/magnets
│   │   │
│   │   ├── network/
│   │   │   ├── NetworkModule.tsx                # Kontener z sub-zakładkami Słupki / Węzły
│   │   │   ├── StopsDataGrid.tsx                # Table2 dla 60k słupków z wirtualizacją
│   │   │   ├── HubsDataGrid.tsx                 # Table2 dla 28k węzłów z konsolidacją
│   │   │   └── PoiSearchOverlay.tsx             # Wyszukiwarka obiektów POI z DuckDB pushdown
│   │   │
│   │   ├── optimization/
│   │   │   ├── OptimizationModule.tsx           # Kontener Axe List + The Investment List
│   │   │   ├── AxeListGrid.tsx                  # Table2 redukcji słupków TCRP 100 + kalkulator PLN
│   │   │   └── InvestmentGrid.tsx               # Table2 pustyń transportowych TDI w siatce H3
│   │   │
│   │   ├── routes/
│   │   │   ├── RoutesModule.tsx                 # Katalog linii i analiza sekwencji
│   │   │   ├── RouteCatalogGrid.tsx             # Table2 linii z filtrem autobus/tramwaj
│   │   │   ├── RouteStepperView.tsx             # Oś czasu przystanków z LRS i czasami netto
│   │   │   └── RouteSpeedGrid.tsx               # Analiza prędkości handlowych na krawędziach
│   │   │
│   │   ├── market/
│   │   │   ├── MarketModule.tsx                 # Panel rynku nieruchomości RCN
│   │   │   ├── MarketKpiCards.tsx               # Mediana, wolumen, przedziały IQR
│   │   │   ├── PriceTrendsChart.tsx             # Recharts wykres szeregów czasowych 2020-2026
│   │   │   ├── StopsValuationGrid.tsx           # Table2 cen mieszkań przy przystankach (DuckDB)
│   │   │   └── TransactionsRankingGrid.tsx      # Table2 skrajnych transakcji notarialnych
│   │   │
│   │   └── benchmark/
│   │       ├── BenchmarkModule.tsx              # Moduł porównawczy i leaderboard
│   │       ├── NationalLeaderboardGrid.tsx      # Table2 rankingu 30 miast w Polsce
│   │       ├── CityComparisonView.tsx           # Widok side-by-side dwóch aglomeracji
│   │       └── MetricDistributionWidget.tsx     # Histogram 10-kubełkowy z pozycją miasta
│   │
│   ├── shared/                                  # Współdzielone komponenty atomowe
│   │   ├── GradeBadge.tsx                       # Ocena A+ do F jako Blueprint Tag z kolorami
│   │   ├── KpiMetricCard.tsx                    # Kafel metryki z etykietą, wartością i trendem
│   │   ├── SvgSparkline.tsx                     # Lekki, natywny wykres SVG bez narzutu DOM
│   │   ├── DataExportMenu.tsx                   # Przycisk eksportu tabeli do CSV / JSON
│   │   ├── JumpToRankInput.tsx                  # Kontrolka szybkiego skoku do wiersza #Rank
│   │   ├── FilterPillsBar.tsx                   # Pasek aktywnych filtrów z usuwaniem jednym klikiem
│   │   └── EmptyStateView.tsx                   # Wrapper NonIdealState dla błędów i pustych danych
│   │
│   └── mobile/                                  # Komponenty responsywne dla smartfonów
│       ├── AdaptiveBottomSheet.tsx              # 3-stopniowy arkusz gestowy (Peek/Half/Full)
│       └── MobileSegmentedNav.tsx               # Dolny pasek nawigacji dotykowej (44x44px)
```

---

## 6. Jakościowe Bramki Weryfikacyjne (Quality Gates)

Każdy etap wdrożenia oraz cała podsesja musi bezwzględnie zaliczyć poniższy zestaw testów:

1. **Bramka Typowania TypeScript:**
   `npx tsc --noEmit --project urban-dashboard/tsconfig.json` — musi zakończyć się kodem 0 (0 błędów).
2. **Bramka Produkcyjnej Kompilacji Next.js (Turbopack):**
   `npm run build --prefix urban-dashboard` — musi zakończyć się sukcesem w czasie poniżej 5.0 sekund.
3. **Bramka Braku Regresji w Backendzie:**
   `uv run pytest backend/tests/ -v` — 100% testów (95/95) musi pozostać zielonych.
4. **Bramka Dostępności i Responsywności:**
   Brak overflow poziomego na 390px (mobile), 768px (tablet) i 1440px (desktop), strefy dotyku minimum 44x44px.

---

## 7. Protokół Ciągłości Między Sesjami (Session Handoff & Bootstrap)

Po zakończeniu każdej podsesji (4.1, 4.2, 4.3):
1. Zaktualizować status w `PLAN.md` oraz odznaczyć zrealizowane zadania w `PLAN_FRONTEND.md`.
2. Zaktualizować `NEXT_SESSION_PLAN.md` wpisując precyzyjny bootstrap prompt dla następnej sesji.
3. Wykonać atomowy commit i push: `git add . && git commit -m '...' && git push origin main`.
