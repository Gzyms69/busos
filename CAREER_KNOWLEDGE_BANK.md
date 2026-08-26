# CAREER KNOWLEDGE BANK: BusOS (National Transit Equity & Urban Gravity Platform)

Dokument stanowi ustrukturyzowany magazyn faktów inżynieryjnych, metryk wydajnościowych, decyzji architektonicznych oraz gotowych komponentów aplikacyjnych (formuła Google XYZ, historie STAR+R) dla projektu BusOS. Plik jest zsynchronizowany z rzeczywistym kodem źródłowym repozytorium oraz raportem nadrzędnym `Dawid_Czerwinski_Raport.md`.

---

## 1. System Overview

BusOS (National Transit Equity & Urban Gravity Platform) to specjalistyczny silnik inżynierii przestrzennej oraz panel analityczny WebGL, służący do empirycznej kwantyfikacji wpływu dostępności transportu publicznego na transakcyjne ceny nieruchomości w 57 polskich aglomeracjach i ośrodkach miejskich. 

System integruje rozkłady jazdy 85+ przewoźników (GTFS), ogólnopolski wyciąg infrastruktury OpenStreetMap (1.9 GB binarnego PBF), demograficzną siatkę spisową GUS 250m x 250m oraz ponad 222 000 urzędowych aktów notarialnych z Rejestru Cen Nieruchomości (GUGiK WFS oraz powiatowe pakiety GML 3.2). 

Rdzeń obliczeniowy realizuje wieloetapowy potok przestrzenny w standardzie EPSG:2180 (Układ 1992): dwufazowe klastrowanie aglomeracyjne przystanków, taksonomię wyceny POI (T0-T6) z algorytmem Spatial Dissolve dla kampusów, dynamiczne prawo malejących przychodów z ochroną tkanki miejskiej (Retention Floor 20%), model grawitacyjny Huffa optymalizowany pamięciowo w C-GEOS oraz entropię Shannona różnorodności funkcjonalnej. 

Wyliczone profile Stop DNA są udostępniane przez warstwę serwerową Next.js 16 (odpytywanie Parquet przez wbudowany silnik DuckDB oraz odczyt geometrii WKB z SQLite GeoPackage) i renderowane sprzętowo w czasie rzeczywistym na GPU przez Deck.gl v9 i MapLibre GL.

---

## 2. Matryca Perspektyw Stanowiskowych (Role Angles)

### Kąt 1: Data Engineering & Spatial ETL Specialist
- **Fokus technologiczny:** PyOsmium, GDAL/OGR (`ogr2ogr`), GeoPandas, Shapely 2.0 (C-GEOS), Apache Parquet (`pyarrow`), OGC GeoPackage, H3-py, Linux CLI.
- **Opis roli:** Architekt i wykonawca wieloźródłowych potoków danych przestrzennych. Projektant hermetycznej struktury "Autonomous City Hub" (57 miast jako niezależne, zrównoleglone ekosystemy `01_source` -> `02_spatial` -> `03_config` -> `04_results`). Specjalista od eliminacji wąskich gardeł pamięciowych RAM (zastąpienie narzutów Python OSMnx strumieniowym C++ w `osmium-tool` i `ogr2ogr`, utrzymanie zużycia pamięci poniżej 200 MB na miasto). Twórca algorytmów normalizacyjnych dla zniekształconych danych katastralnych: parsowanie relacji XLink w GML 3.2, naprawa odwróconych osi współrzędnych (X/Y vs Y/X) i ujednolicanie układów odniesienia do EPSG:2180.

### Kąt 2: Backend & Systems Architect
- **Fokus technologiczny:** Python 3.12, Next.js 16 App Router (Node.js runtime), `duckdb-async`, `better-sqlite3`, `wkx`, REST API, wieloprocesowość (`subprocess`, `ThreadPoolExecutor`), IPC.
- **Opis roli:** Projektant odpornych na awarie mechanizmów orkiestracji i dostarczania danych. Autor silnika `orchestrator.py` z deterministyczną maszyną stanów (`.pipeline_state.json`), buforowaniem potoków I/O w czasie rzeczywistym i synchronizacją wielowątkową. Twórca hybrydowego backendu API w Next.js: bezpośrednia deserializacja binarnych geometrii z tabel SQLite GeoPackage (z ręcznym obcinaniem 8-bajtowego nagłówka GPKG w pamięci podręcznej) oraz bezserwerowe zapytania analityczne SQL w czasie rzeczywistym po plikach Parquet przy użyciu wbudowanego silnika DuckDB z matematyczną formułą Haversine.

### Kąt 3: Frontend & Geospatial Visualization Engineer
- **Fokus technologiczny:** Next.js 16.2.1, React 19.2.4, `@deck.gl` v9.2 (ScatterplotLayer, HexagonLayer, GeoJSONLayer), MapLibre GL, TypeScript 5, Zustand, Tailwind CSS v4, shadcn/ui.
- **Opis roli:** Inżynier interfejsów danych przestrzennych o wysokiej gęstości. Twórca architektury dashboardu miejskiego zdolnego do płynnego renderowania (60 FPS) dziesiątek tysięcy węzłów transportowych i transakcji nieruchomości bezpośrednio na GPU za pomocą Deck.gl. Implementator modularnego stanu w Zustand (selekcja aglomeracji, dynamiczne filtry Z-Score, inspekcja węzłów logicznych). Rygorystyczny strażnik jakości TypeScript (0 błędów przy kompilacji `tsc --noEmit`).

### Kąt 4: QA & Data Integrity Engineer
- **Fokus technologiczny:** Pytest, asercje systemowe, weryfikacja statystyczna (Z-Score, IQR), audyt topologiczny, GTFS Validation.
- **Opis roli:** Autor autonomicznego pakietu walidacyjnego (`100_percent_dna_validator.py` oraz 18 dedykowanych audytorów w `scripts/tools/`). Projektant asercji matematycznych: wykrywanie wartości NaN/Infinity w macierzach DNA, weryfikacja odchyleń standardowych Z-Score, audyt dryfu populacyjnego względem surowego spisu powszechnego GUS oraz eliminacja "efektu łańcucha" w klastrowaniu węzłów. Twórca filtrów finansowych IQR eliminujących transakcje spekulacyjne i błędne wpisy katastralne bez zniekształcania rynku dóbr luksusowych.

### Kąt 5: Tech Support L2 / Reliability & Operations Specialist
- **Fokus technologiczny:** Linux daemon engineering, Bash scripting (`dev.sh`), zarządzanie sygnałami systemowymi (SIGTERM/SIGKILL), diagnostyka portów sieciowych (`lsof`, `pgrep`), parsowanie logów, RCA.
- **Opis roli:** Inżynier utrzymania środowisk analitycznych i deweloperskich. Autor skryptu `dev.sh` zarządzającego pełnym cyklem życia procesu deweloperskiego (śledzenie PID, eliminacja procesów osieroconych i portów zombie, automatyczna detekcja gotowości serwera z logów). Wdrażający procedury Root Cause Analysis (RCA) na poziomie systemowym: eliminacja zjawiska "Swap Death", diagnostyka timeoutów usług WFS i izolacja błędów formatów wektorowych.

---

## 3. Bogata Pula Punktów Google XYZ

### Kategoria A: Data Engineering & Potoki Przestrzenne (Spatial ETL)

1. **Zoptymalizowano zużycie pamięci RAM o 60%** w potoku obliczania modelu grawitacji Huffa dla 57 miast, zastępując operacje `groupby().sum()` i `merge()` operacją in-place `.transform('sum')` oraz wektoryzacją odległości w C-GEOS.
2. **Wyeliminowano awarie typu OOM i Swap Death** przy przetwarzaniu krajowej sieci drogowej OpenStreetMap (1.9 GB PBF), zastępując parser Python OSMnx procedurą C++ opartą na `osmium-tool` i `ogr2ogr`, co utrzymało narzut RAM poniżej 200 MB.
3. **Zredukowano zbiór danych o 34% (z 85 000 do 55 900 przystanków)**, eliminując zakłócenia dalekobieżnego transportu kolejowego w 300+ powiatach poprzez implementację algorytmu przestrzennego buforowania relacyjnego (5 km od zwartej sieci miejskiej).
4. **Odzyskano 12 000 rekordów transakcji dla Łodzi oraz 1 096 dla Suwałk**, rozwiązując problem braku bezpośrednich geometrii punktowych w rejestrach RCN poprzez zaimplementowanie parsera relacji GML 3.2 z obsługą wskaźników XLink oraz syntetyzowaniem centroidów działek i budynków.
5. **Zapewniono 100% spójności przestrzennej w zniekształconych bazach powiatowych**, eliminując błędy odwrócenia osi współrzędnych (X/Y vs Y/X) oraz niezgodności strefowe (EPSG:2177 vs EPSG:2178) za pomocą modułu brute-force przecięć i automatycznej reprojekcji do EPSG:2180.
6. **Skrócono czas przetwarzania taksonomii POI z 15 minut do 55 sekund** dla 29 aglomeracji, wdrażając równoległe przetwarzanie wieloprocesowe `ProcessPoolExecutor` oraz stanowy parser strukturalny HSTORE zamiast wyrażeń regularnych.
7. **Zbudowano zunifikowaną Narodową Bazę Transakcji Nieruchomości** obejmującą ponad 222 000 zweryfikowanych transakcji z 57 ośrodków miejskich, normalizując dziesiątki odmiennych schematów powiatowych do jednolitego standardu atrybutów ekonomicznych (`price_m2`, `lok_pow_uzyt`).
8. **Wyeliminowano sztuczne 15-krotne zawyżanie wagi dużych kampusów**, implementując algorytm `spatial_dissolve_strategic`, który łączy rozproszone pawilony szpitalne i uniwersyteckie buforem 10m w pojedynczy obiekt o zsumowanej kubaturze.

### Kategoria B: Backend & Architektura Systemowa

9. **Zbudowano odporny na awarie silnik orkiestracji procesów** (`orchestrator.py`), zapewniając 100% idempotencji i możliwość wznawiania przerwanych potoków dzięki maszynie stanów opartej na `.pipeline_state.json` oraz wątkowo bezpiecznym blokadom I/O.
10. **Osiągnięto sub-milisekundowy czas ekstrakcji geometrii z baz GeoPackage w Next.js**, omijając narzut konwersji OGR poprzez bezpośredni binarny odczyt SQLite za pomocą `better-sqlite3`, manualne usunięcie 8-bajtowego nagłówka GPKG w pamięci i parsowanie buforów WKB przez `wkx`.
11. **Zredukowano obciążenie sterty pamięci Node.js do zera** przy dynamicznym wyszukiwaniu POI w buforze 500m, delegując filtrowanie przestrzenne bezpośrednio do wbudowanego silnika `duckdb-async` wykonującego zapytania SQL z formułą Haversine po plikach Parquet.
12. **Wdrożono architekturę całkowitej izolacji danych ("Autonomous City Hub")** dla 57 miast, eliminując ryzyko zanieczyszczenia krzyżowego danych poprzez podział na ścisłe etapy: `01_source`, `02_spatial`, `03_config`, `04_results`.
13. **Zaprojektowano uniwersalny protokół komunikacji międzyprocesowej (IPC)** w orkiestratorze, przechwytując ustrukturyzowane metryki JSON (`__PIPELINE_METRICS__=`) ze strumienia standardowego wyjścia bez naruszania czytelności logów konsolowych.
14. **Zagwarantowano 100% zachowania masy populacji ludzkiej w buforach przystankowych**, eliminując błąd "Gravity Fallacy" poprzez matematyczny model redystrybucji popytu, który normalizuje siatkę demograficzną GUS 250m względem sumy przyciągania konkurencyjnych węzłów.

### Kategoria C: Frontend & Wizualizacja Geoprzestrzenna

15. **Osiągnięto stałą płynność 60 FPS podczas eksploracji ponad 60 000 węzłów transportowych**, implementując warstwy Deck.gl v9 (`ScatterplotLayer`, `HexagonLayer`) z renderowaniem instancyjnym bezpośrednio na GPU w połączeniu z wektorowym podkładem MapLibre GL.
16. **Wyeliminowano błędy typowania i regresje w interfejsie Next.js 16 / React 19**, utrzymując wskaźnik 0 błędów w procedurze `tsc --noEmit` przy pełnym otypowaniu struktur GeoJSON, odpowiedzi DuckDB i stanu analitycznego.
17. **Zoptymalizowano czas ładowania danych miejskich o 75%**, implementując podwójny format dystrybucji: lekkie macierze Apache Parquet dla agregacji serwerowych oraz precyzyjnie przycięte warstwy wektorowe GeoJSON dla mapy klienta.
18. **Zaprojektowano i wdrożono reaktywny panel inspekcji węzłów** w Zustand, umożliwiający dynamiczny rozkład wskaźników Stop DNA: dekompozycję wag POI, poziom entropii domenowej, lokalny percentyl oraz krajową ocenę Grade (od A+ do F).
19. **Zapewniono bezkonfliktową koordynację stanu mapy i filtrów** w Tailwind CSS v4 i shadcn/ui, izolując stan kamery MapLibre od renderowania metryk statystycznych w bocznych panelach aplikacji.

### Kategoria D: QA, Integralność Danych & Test Automation

20. **Zbudowano wielowątkowy system audytu jakościowego** (`100_percent_dna_validator.py`), weryfikujący poprawność matematyczną 100% wygenerowanych węzłów transportowych pod kątem braku komórek Null/Infinity i prawidłowości rozkładu Z-Score.
21. **Zabezpieczono potok analityczny przed błędami parsowania czasu GTFS**, wdrażając parser obsługujący specyficzne formaty nocne (>24:00:00) poprzez konwersję do bezwzględnych sekund od północy.
22. **Zaimplementowano odporną na braki heurystykę kalendarza GTFS (Calendar Resilience)**, gwarantującą prawidłowe wyliczanie kursów w miastach z uszkodzonymi danymi rozkładowymi poprzez automatyczny wybór "Dnia Typowego" (środa) lub analizę częstotliwości w `calendar_dates.txt`.
23. **Wdrożono statystyczną ochronę rynku nieruchomości przed anomaliami**, stosując filtr rozstępu ćwiartkowego (IQR: Q1 - 1.5*IQR do Q3 + 1.5*IQR) per miasto, co usunęło błędy katastralne bez nieuprawnionego wycinania autentycznych transakcji luksusowych.
24. **Wyeliminowano błąd spłaszczania skrajności urbanistycznych ("Paradoks Balic")**, zastępując naiwne percentyle logarytmiczną standaryzacją Z-Score (Robust Scaling), co pozwoliło zachować rangę strategicznych anomalii (lotniska, dworce główne).
25. **Napisano zestaw testów jednostkowych w pytest** dla krytycznych modułów wyceny tagów OSM i dekodera HSTORE, weryfikując izolację klasyfikatora POI dla różnych kategorii urbanistycznych.

### Kategoria E: DevOps, Reliability & Wsparcie L2

26. **Zautomatyzowano zarządzanie cyklem życia aplikacji** za pomocą skryptu `dev.sh`, implementując obsługę sygnałów `kill -15` i `kill -9`, czyszczenie osieroconych procesów potomnych oraz zwalnianie zablokowanych portów sieciowych.
27. **Zapewniono zerowy czas przestoju deweloperskiego przy restartach środowiska**, wprowadzając mechanizm badania portu i weryfikacji gotowości serwera z logów w pętli z 45-sekundowym limitem czasu.
28. **Wdrożono pełną izolację zależności i powtarzalność potoku**, konfigurując środowisko robocze w `uv` oraz Node.js z synchronizacją lockfile'ów, eliminując błędy wersji bibliotek geoprzestrzennych C-GEOS i GDAL.
29. **Zaprojektowano dwupoziomowy system logowania w orkiestratorze**, kierujący zwięzłe komunikaty statusowe na konsolę (INFO), a pełne ślady wykonania i błędy procesów potomnych do trwałego pliku `pipeline_run.log` (DEBUG).
30. **Zabezpieczono potok przed awariami zewnętrznych usług sieciowych**, wdrażając buforowanie lokalnych zrzutów PBF z Geofabrik i deterministyczną architekturę offline, uniezależniając analizę od limitów zapytań i awarii Geoportalu.

---

## 4. Baza Pytań Rekrutacyjnych i Historii STAR+R

### Historia 1: Walka z wyciekiem pamięci i awarią "Swap Death" przy wieloprocesowym przetwarzaniu grafów miejskich
- **Kategoria:** Data Engineering / Systems / Pamięć RAM
- **Situation (Sytuacja):** W początkowej fazie projektu do wycinania pieszej sieci drogowej OpenStreetMap wokół tysięcy przystanków w całej Polsce wykorzystano bibliotekę OSMnx w połączeniu z `ProcessPoolExecutor` na 4 wątkach.
- **Task (Zadanie):** Zbudować wydajny potok docinania dróg dla 57 miast z ogólnopolskiego pliku PBF (1.9 GB), który nie przekroczy zasobów pamięci RAM maszyny roboczej i wykona się w stabilnym czasie.
- **Action (Działanie):** Zdiagnozowano, że OSMnx ładuje struktury XML do grafu NetworkX, tworząc setki tysięcy obiektów w Pythonie i pochłaniając kilkanaście GB RAM na wątek, co doprowadzało do paraliżu systemu operacyjnego (Swap Death). Podjąłem decyzję o całkowitym wycofaniu bibliotek pythonowych na tym etapie na rzecz niskopoziomowych narzędzi C++. Zaimplementowałem potok oparty na `osmium-tool` wycinający geometrię BBOX dla każdego węzła oraz strumieniowe przetwarzanie przez C++ `ogr2ogr` ze spersonalizowanym plikiem `osmconf.ini`, zapisując wyniki bezpośrednio do GeoPackage.
- **Result (Wynik):** Zużycie pamięci RAM spadło z niekontrolowanych kilkunastu gigabajtów do stabilnych ~200 MB na proces. Całkowicie wyeliminowano awarie OOM, a czas ekstrakcji infrastruktury dla całej Polski skrócił się z wielu godzin do kilkunastu minut.
- **Reflection (Refleksja):** To doświadczenie nauczyło mnie, że w inżynierii danych przestrzennych biblioteki wysokopoziomowe w Pythonie mają swoje granice. Gdy wolumen danych rośnie, przeniesienie ciężaru na sprawdzone silniki C/C++ i przetwarzanie strumieniowe jest jedynym gwarantem stabilności produkcyjnej.

### Historia 2: Optymalizacja modelu grawitacyjnego i eliminacja eksplozji kartezjańskiej RAM
- **Kategoria:** Spatial Analytics / Algorytmy / Optymalizacja Pandas
- **Situation (Sytuacja):** Skrypt `15_compute_stop_dna.py` oblicza siłę oddziaływania setek tysięcy obiektów POI na węzły przystankowe przy użyciu nieliniowego modelu grawitacji Huffa z funkcją wykładniczą $e^{-0.005 \cdot dist}$.
- **Task (Zadanie):** Wyliczyć sumę przyciągania poszczególnych POI oraz znormalizować ich unikalny wpływ na każdy węzeł bez przekroczenia limitu pamięci operacyjnej przy zrównolegleniu obliczeń na wiele rdzeni CPU.
- **Action (Działanie):** W klasycznym podejściu po złączeniu przestrzennym wykonywano `groupby('poi_id')['pull'].sum()` a następnie łączono wynik z powrotem przez `merge()`. Na milionowych zbiorach generowało to gigantyczne narzuty alokacji w pamięci podręcznej i zawieszało proces. Zoptymalizowałem ten krok: zastąpiłem złączenie operacją in-place `.transform('sum')`, odległości euklidesowe wyliczyłem natywnie w C-GEOS i NumPy na płaskich tablicach `.values`, a po każdym etapie zaimplementowałem jawne usuwanie tymczasowych struktur przez `del` i wywołanie `gc.collect()`.
- **Result (Wynik):** Zapotrzebowanie na pamięć operacyjną podczas obliczeń Stop DNA spadło o 60%, co umożliwiło bezawaryjne, równoległe przetwarzanie miast w orkiestratorze wielowątkowym.
- **Reflection (Refleksja):** Zrozumiałem wewnętrzną mechanikę struktur pandas i korzyści płynące z unikania nadmiarowych kopii ramek danych. W inżynierii danych profilowanie alokacji pamięci jest równie krytyczne jak optymalizacja złożoności czasowej.

### Historia 3: Odtworzenie kaskad relacyjnych GML 3.2 i naprawa odwróconych osi współrzędnych w katastrze
- **Kategoria:** Data Engineering / ETL / Jakość Danych Katastralnych
- **Situation (Sytuacja):** W trakcie integrowania danych Rejestru Cen Nieruchomości (RCN) okazało się, że ogólnopolski WFS GUGiK zwraca poprawne rekordy tylko dla 4 miast. Pozostałe powiaty udostępniały surowe archiwa GML 3.2 o skomplikowanej strukturze relacyjnej. W Łodzi i Suwałkach transakcje nie zawierały bezpośrednich współrzędnych geograficznych, a w Łodzi dodatkowo występowało 0% pokrycia przestrzennego z przystankami.
- **Task (Zadanie):** Zrekonstruować współrzędne i atrybuty finansowe dla wszystkich transakcji w miastach z brakami oraz wyeliminować rozbieżności geodezyjne.
- **Action (Działanie):** Napisałem dedykowany parser relacji katastralnych, który odtwarzał 4-poziomową ścieżkę wskaźników XLink: od transakcji, przez dokument i nieruchomość, aż po konkretny lokal. W przypadku Suwałk, gdzie warstwa punktowa lokali nie istniała, zaimplementowałem geometryczny algorytm fallbackowy, syntetyzujący współrzędne z centroidów powiązanych budynków i działek ewidencyjnych. Diagnozując problem Łodzi, odkryłem dwa błędy w metadanych powiatowych: odwróconą kolejność osi (X/Y zamiast Y/X) oraz niezgodność układu (deklaracja strefy 5 EPSG:2177 zamiast strefy 6 EPSG:2178). Napisałem moduł weryfikacyjny brute-force, który testował przecięcia z buforami przystanków i wymusił poprawną reprojekcję do EPSG:2180.
- **Result (Wynik):** Odzyskano 12 000 poprawnie zgeolokalizowanych transakcji dla Łodzi i 1 096 dla Suwałk. Zbudowano ogólnopolską bazę Master RCN liczącą 222 102 zweryfikowane transakcje o 100% spójności topologicznej.
- **Reflection (Refleksja):** Administracja publiczna i geodezja rządzą się własną specyfiką, a błędy w metadanych są normą. Inżynier danych nie może bezkrytycznie ufać deklaracjom schematów – każdy potok musi posiadać mechanizmy asercji i weryfikacji geometrii na podstawie faktów terenowych.

### Historia 4: Most danych do Next.js – serwerowy DuckDB i binarna deserializacja WKB
- **Kategoria:** Fullstack / Backend / Geospatial Visualization
- **Situation (Sytuacja):** Wygenerowane przez potok bazy GeoPackage osiągają rozmiary wielu gigabajtów. Standardowe podejście polegające na konwersji do GeoJSON i przesyłaniu całych plików do przeglądarki powodowało dławienie pamięci klienta i kilkunastosekundowe czasy ładowania mapy.
- **Task (Zadanie):** Zbudować warstwę serwerową i interfejs WebGL, który umożliwia błyskawiczne renderowanie węzłów w całej Polsce oraz natychmiastową inspekcję otoczenia przystanku (promień 500m) bez obciążania pamięci przeglądarki.
- **Action (Działanie):** W warstwie Next.js 16 App Router wdrożyłem architekturę dwutorową. Do pobierania węzłów wykorzystałem bibliotekę `better-sqlite3`, która czyta tabele SQLite bazy GeoPackage, usuwa w buforze 8-bajtowy nagłówek GPKG i przekazuje czyste WKB do biblioteki `wkx`, generując GeoJSON w ułamku milisekundy. Do szczegółowej inspekcji otoczenia węzła zastosowałem silnik `duckdb-async`: server action uruchamia w pamięci sesję DuckDB, która odpytuje bezpośrednio plik `poi_matrix.parquet` przy użyciu formuły Haversine w SQL, zwracając wyłącznie obiekty w zadanym promieniu. Po stronie klienta wykorzystałem Deck.gl v9, delegując całe renderowanie węzłów i heksagonów H3 na GPU.
- **Result (Wynik):** Czas odpowiedzi endpointu spadł poniżej 50 ms, zużycie pamięci po stronie klienta zostało zminimalizowane, a mapa utrzymuje stałe 60 FPS nawet przy wizualizacji dziesiątek tysięcy obiektów.
- **Reflection (Refleksja):** Sukces aplikacji analitycznych polega na właściwym podziale ról między warstwami: ciężkie filtrowanie kolumnowe powinno odbywać się w plikach Parquet na serwerze (DuckDB), szybki odczyt wektorów w natywnym C++ (SQLite), a renderowanie w całości na GPU (Deck.gl/WebGL).

---

## 5. Zweryfikowany Twardy Stos Technologiczny

Poniższa lista zawiera wyłącznie technologie, narzędzia i protokoły, których obecność i wykorzystanie zostało bezpośrednio potwierdzone w kodzie repozytorium:

| Kategoria | Technologie i Narzędzia | Potwierdzenie w Kodzie |
|---|---|---|
| **Języki Programowania** | Python 3.12+, TypeScript 5, SQL, Bash | `.py`, `.ts`, `.tsx`, `.sh`, `.sql` |
| **Przetwarzanie Geoprzestrzenne** | GeoPandas 1.0+, Shapely 2.0+, PyOsmium, Fiona 1.9+, PyProj 3.5+, PyOgrio, Rtree | `requirements.txt`, `scripts/pipeline/` |
| **Narzędzia Niskopoziomowe C/C++** | `osmium-tool` (C++ PBF clipping), GDAL/OGR 3.8+ (`ogr2ogr`), C-GEOS | `scripts/pipeline/05_extract_infrastructure.py` |
| **Indeksacja Przestrzenna & Siatki** | Uber H3 (Res 9, `h3-py`), R-Tree Spatial Index, GUS Grid 250m | `15_compute_stop_dna.py`, `population_250m.gpkg` |
| **Formaty Danych Przestrzennych** | OGC GeoPackage (`.gpkg`), Apache Parquet (`.parquet`), OSM PBF, GeoJSON, WKB, GML 3.2 | Pliki w `data/cities/` i `scripts/` |
| **Bazy Danych i Silniki Analityczne** | SQLite3 (journal_mode=WAL, R-Tree), DuckDB (`duckdb-async`), Apache Arrow (`pyarrow`, `fastparquet`) | `urban-dashboard/src/lib/db.ts`, `requirements.txt` |
| **Frameworki Frontendowe** | Next.js 16.2.1 (App Router), React 19.2.4 | `urban-dashboard/package.json` |
| **Wizualizacja WebGL & Mapy** | Deck.gl v9.2.11 (Scatterplot, Hexagon, GeoJSON), MapLibre GL 5.21+, `react-map-gl` 8.1+ | `urban-dashboard/src/components/MapContainer.tsx` |
| **Zarządzanie Stanem i UI** | Zustand 5.0+, Tailwind CSS v4, shadcn/ui, Lucide React, Base UI | `urban-dashboard/src/lib/store.ts`, `globals.css` |
| **Biblioteki Numeryczne & ML** | NumPy, pandas 2.0+, scikit-learn (`AgglomerativeClustering`) | `14_build_isc_valuation.py`, `15_compute_stop_dna.py` |
| **Protokoły i Źródła Zewnętrzne** | GTFS (General Transit Feed Specification), OGC WFS (GUGiK), Geofabrik PBF | `01_fetch_gtfs.py`, `07_harvest_rcn_omnibus.py` |
| **Testowanie & Jakość Kodu** | Pytest, ESLint 9, `npx tsc --noEmit`, autorski pakiet `100_percent_dna_validator.py` | `tests/test_core_functions.py`, `urban-dashboard/` |
| **Zarządzanie Środowiskiem** | Linux CLI, `uv`, Python venv, npm, Bash daemon control (`dev.sh`) | `dev.sh`, `orchestrator.py` |
