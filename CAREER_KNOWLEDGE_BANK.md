# CAREER KNOWLEDGE BANK: BusOS (National Transit Equity & Urban Gravity Platform)

Dokument stanowi ustrukturyzowany magazyn faktów inżynieryjnych, metryk wydajnościowych, decyzji architektonicznych oraz gotowych komponentów aplikacyjnych (formuła Google XYZ, historie STAR+R) dla projektu BusOS. Plik jest zsynchronizowany z rzeczywistym kodem źródłowym repozytorium oraz raportem nadrzędnym `Dawid_Czerwinski_Raport.md`.

---

## 1. System Overview

BusOS (National Transit Equity & Urban Gravity Platform) to specjalistyczny silnik inżynierii przestrzennej, uniwersalne API analityczne oraz panel WebGL, służący do empirycznej kwantyfikacji wpływu dostępności transportu publicznego na transakcyjne ceny nieruchomości w 57 polskich aglomeracjach i ośrodkach miejskich (z 30 aglomeracjami w pełnej kalibracji ekonometrycznej Z-Score, obejmującymi 60 265 fizycznych słupków, 28 317 węzłów logicznych, 36 784 komórek siatki analitycznej Uber H3 Res 8 oraz kompletny zestaw 210 zwalidowanych plików danych). 

System integruje rozkłady jazdy 85+ przewoźników (GTFS), ogólnopolski wyciąg infrastruktury OpenStreetMap (1.9 GB binarnego PBF), demograficzną siatkę spisową GUS 250m x 250m oraz ponad 222 000 urzędowych aktów notarialnych z Rejestru Cen Nieruchomości (GUGiK WFS oraz powiatowe pakiety GML 3.2). 

Rdzeń obliczeniowy realizuje wieloetapowy potok przestrzenny w standardzie EPSG:2180 (Układ 1992): rekonstrukcję geometrii tras GTFS z izolacją multi-feed (`route_uid`) i algorytmem Canonical Trip Patterns, Linear Referencing System (LRS w EPSG:2180) z kalkulacją realnych odległości drogowych/torowych oraz prędkości handlowych, dwufazowe klastrowanie aglomeracyjne przystanków z certyfikowaną symetrią słupków, taksonomię wyceny POI (T0-T6) z algorytmem Spatial Dissolve dla kampusów, dynamiczne prawo malejących przychodów z ochroną tkanki miejskiej (Retention Floor 20%), model grawitacyjny Huffa optymalizowany pamięciowo w C-GEOS `shapely.STRtree(predicate='dwithin')`, entropię Shannona różnorodności funkcjonalnej, analityczną siatkę Uber H3 ze wskaźnikiem Pustyni Transportowej (TDI) oraz asymetryczny audyt zbędności przystanków wg standardu TCRP Report 100.

Wyliczone profile Stop DNA (53 unikalne metryki) oraz pre-materializowany most transakcji RCN są udostępniane przez asynchroniczny silnik Universal Query Engine w FastAPI 0.115+ i DuckDB 1.2+ (błyskawiczne filtrowanie ze sprzętowym Predicate Pushdown Zone Maps i rankingi `rank=N` / `limit=N` w czasie <15 ms) oraz warstwę serwerową Next.js 16 i renderowane sprzętowo w czasie rzeczywistym na GPU przez Deck.gl v9 i MapLibre GL. Całość działa w zautomatyzowanym potoku CI/CD na chmurze Oracle Cloud Infrastructure (OCI Ampere A1 ARM64) z certyfikowanym zestawem 95 testów automatycznych w Pytest.

---

## 2. Matryca Perspektyw Stanowiskowych (Role Angles)

### Kąt 1: Data Engineering & Spatial ETL Specialist
- **Fokus technologiczny:** PyOsmium, GDAL/OGR (`ogr2ogr`), GeoPandas, Shapely 2.0 (C-GEOS), Apache Parquet (`pyarrow`), OGC GeoPackage, Uber H3 (Res 8, `h3-py`), SciPy (`cKDTree`), DuckDB C++, Linear Referencing System (LRS w EPSG:2180), Linux CLI.
- **Opis roli:** Architekt i wykonawca wieloźródłowych potoków danych przestrzennych. Projektant hermetycznej struktury "Autonomous City Hub" (57 miast jako niezależne, zrównoleglone ekosystemy `01_source` -> `02_spatial` -> `03_config` -> `04_results`, 210 kompletnych plików danych dla 30 skalibrowanych miast). Twórca bezalokacyjnych zapytań przestrzennych w C-GEOS `shapely.STRtree(predicate='dwithin', distance=500.0)` redukujących narzut pamięci z 28 GB do <200 MB oraz skracających czas złączenia 222 tys. aktów RCN do 6 ms. Autor silnika rekonstrukcji tras GTFS w DuckDB C++ z arytmetyką dobową `split_part` radzącą sobie ze specyfikacją kursów nocnych $\ge 24:00:00$ (skrócenie czasu z >50 min do 28s na 7.3 mln kursów w Warszawie). Implementator LRS obliczającego realne odległości drogowe i handlowe prędkości $u \to v$ w grafie sieci. Specjalista od wektoryzacji algebry macierzowej w NumPy (`unstack()`), redukującej czas obliczeń entropii Shannona z 5 min do 38 ms.

### Kąt 2: Backend & Systems Architect
- **Fokus technologiczny:** Python 3.12, FastAPI 0.115+, DuckDB 1.2+ C++, SQLite3 (WAL mode), Pydantic v2, Next.js 16 App Router, REST API, Subprocess Isolation, DuckDB Zone Map Predicate Pushdown, SQL injection security whitelisting.
- **Opis roli:** Projektant odpornych na awarie mechanizmów orkiestracji i dostarczania danych. Autor architektury Subprocess Isolation dla przetwarzania wsadowego 30 miast, gwarantującej natychmiastowe zwalnianie aren alokatora `glibc` i stron swapu przez jądro Linuxa po zakończeniu każdego zadania. Twórca uniwersalnego silnika zapytań analitycznych (Universal Query Engine): modularne API z 24 trasami OpenAPI, obsługa zapytań rankingowych o dowolnej pozycji (parametr `rank=N` 1-based pozwalający pobrać dokładnie N-ty rekord w czasie <15 ms), zabezpieczenie przed atakami SQL Injection przez whitelisty mapowania kolumn (`STOP_METRIC_MAP`, `HUB_METRIC_MAP`, `HEX_METRIC_MAP`) oraz modularny endpoint scorecardu audytowego (`?include=...`). Projektant pre-materializowanego mostka przestrzennego RCN (`stop_transactions_bridge.parquet`) posortowanego po `['stop_id', 'dok_data']` z `row_group_size=50000`, umożliwiającego sprzętowy Predicate Pushdown w DuckDB (<26 ms na 2.55 mln wierszy).

### Kąt 3: Frontend & Geospatial Visualization Engineer
- **Fokus technologiczny:** Next.js 16.2.1, React 19.2.4, `@deck.gl` v9.2 (ScatterplotLayer, H3HexagonLayer, PathLayer, GeoJSONLayer), MapLibre GL, TypeScript 5, Zustand, Tailwind CSS v4, Blueprint.js, shadcn/ui.
- **Opis roli:** Inżynier interfejsów danych przestrzennych o wysokiej gęstości. Twórca architektury dashboardu miejskiego zdolnego do płynnego renderowania (60 FPS) dziesiątek tysięcy węzłów transportowych i komórek H3 bezpośrednio na GPU za pomocą Deck.gl. Implementator natywnej warstwy GPU `H3HexagonLayer` z `@deck.gl/geo-layers`, eliminującej powolne przeliczanie słupków na CPU. Architekt zarządzania cyklem życia zapytań w React 19, wdrażający pulę `AbortController` zapobiegającą wyścigom sieciowym i zamrażaniu wątku WebGL przy szybkiej zmianie aglomeracji. Rozwiązujący konflikty raycastingu 3D w scenie Deck.gl (limit wyniesienia 350m i priorytetyzacja warstwy ScatterplotLayer). Rygorystyczny strażnik jakości TypeScript (0 błędów przy kompilacji `tsc --noEmit`).

### Kąt 4: QA & Data Integrity Engineer
- **Fokus technologiczny:** Pytest 9+, asercje systemowe, weryfikacja statystyczna (Z-Score, Gaussa $\mu/\sigma$, IQR), audyt topologiczny, GTFS Validation, 6-poziomowa drabina testowa (Tier 0 do Tier 5).
- **Opis roli:** Autor autonomicznego pakietu walidacyjnego (`100_percent_dna_validator.py` oraz 18 dedykowanych audytorów w `scripts/tools/`). Twórca kompletnego zestawu 95 testów automatycznych w Pytest weryfikujących model grawitacji Huffa, geometrię kanibalizacji TCRP 100, odporność schematów DuckDB na braki kolumn, granice WGS84 Polski, poprawność mostka RCN, formaty GTFS $\ge 24:00:00$ oraz realizm ekonomiczny i demograficzny. Projektant 3-poziomowego audytu Złotego DNA (Micro, Macro, H3) weryfikującego 53 metryki na próbie 60 265 słupków w 30 miastach ze 100% gwarancją czystości danych (zero NaNs/Infs w opublikowanym 26-tysięcznym megaraporcie).

### Kąt 5: Tech Support L2 / Reliability & Cloud Operations Specialist (SRE)
- **Fokus technologiczny:** Linux kernel diagnostics (`journalctl`, `kswapd`, OOM Killer), Bash scripting (`dev.sh`), zarządzanie sygnałami systemowymi (SIGTERM/SIGKILL), Oracle Cloud Infrastructure (Ampere A1 ARM64), Docker Compose, Caddy 2 (TLS 1.3 / HTTP/3), GitHub Actions CI/CD.
- **Opis roli:** Inżynier niezawodności systemów i infrastruktury chmurowej. Diagnosta jądra Linuxa: identyfikacja przyczyn zapaści pamięciowej i awarii OOM Killer przy nasyceniu 8 GB swapu, rozwiązana poprzez wdrożenie Subprocess Isolation. Twórca w pełni zautomatyzowanego potoku CI/CD w GitHub Actions wdrażającego backend na OCI Ampere A1 ARM64 w czasie 2m 1s z zerowym przestojem. Diagnosta i likwidator awarii chmurowych: usunięcie błędu 502 Bad Gateway na OCI poprzez rekompilację kontenera Docker z natywnymi bibliotekami C-Spatial (`pyogrio>=0.9.0`, `geopandas>=1.0.0`) oraz bezstratną synchronizację 210 plików danych dla 30 miast. Autor skryptu `dev.sh` zarządzającego pełnym cyklem życia procesu deweloperskiego.

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
31. **Zbudowano zunifikowaną siatkę analityczną Uber H3 Res 8 (36 784 komórki) dla 30 aglomeracji** (`17_build_h3_grid.py`), dokonując fuzji GTFS, demografii GUS 250m, transakcji RCN i grawitacji POI oraz wyliczając wskaźnik wykluczenia transportowego (Transit Desert Index – TDI) w czasie <1s per aglomeracja.
32. **Zoptymalizowano czas obliczeń entropii Shannona z ~5 minut do 38 milisekund (przyspieszenie o 99.8%)** dla 10 253 przystanków GZM, eliminując pętle `groupby.apply` w Pythonie na rzecz wektoryzacji macierzowej `unstack(fill_value=0.0)` i wektorowych operacji logarytmicznych w NumPy.
33. **Zredukowano zużycie pamięci z 28 GB do <200 MB oraz skrócono czas złączenia 222 tys. transakcji RCN z minut do 6 milisekund**, zastępując generowanie 10 000 poligonowych buforów i kartyzjańskie `sjoin` bezalokacyjnym indeksem przestrzennym C-GEOS `shapely.STRtree(points).query(predicate='dwithin', distance=500.0)`.
34. **Skrócono czas ekstrakcji z 7.3 mln kursów GTFS (Warszawa, 16 feedów) z >50 minut do 28 sekund (>100x speedup)**, zastępując iteracyjne pętle w Pandas zapytaniami analitycznymi DuckDB C++ z autorską arytmetyką dobową `split_part` obsługującą kursy nocne $\ge 24:00:00$.
35. **Zaimplementowano Linear Referencing System (LRS) w układzie metrycznym EPSG:2180 dla 23 aglomeracji**, wyliczając realne odległości drogowe i torowe wzdłuż geometrii trasy oraz prędkości handlowe między wszystkimi parami przystanków ($u \to v$) z zapisem do `transit_network_edges.parquet`.
36. **Zbudowano dwupoziomowy silnik rekonstrukcji geometrii tras GTFS dla 30 aglomeracji** (`01b_extract_transit_routes.py`), wykorzystujący ślady GPS z `shapes.txt` oraz algorytm Canonical Trip Patterns z kompozytowym kluczem `(feed_id, route_id, direction_id)`, eliminując kolizje linii u różnych organizatorów transportu.
37. **Oczyszczono próbę transakcji RCN z 5 551 zniekształcających wpisów**, wprowadzając automatyczną eliminację lokali niemieszkalnych (3 804 garaże od 777 zł/m²) oraz transakcji z bonifikatami urzędowymi (1 747 wykupów z 90% upustem).

### Kategoria B: Backend & Architektura Systemowa

9. **Zbudowano odporny na awarie silnik orkiestracji procesów** (`orchestrator.py`), zapewniając 100% idempotencji i możliwość wznawiania przerwanych potoków dzięki maszynie stanów opartej na `.pipeline_state.json` oraz wątkowo bezpiecznym blokadom I/O.
10. **Osiągnięto sub-milisekundowy czas ekstrakcji geometrii z baz GeoPackage w Next.js**, omijając narzut konwersji OGR poprzez bezpośredni binarny odczyt SQLite za pomocą `better-sqlite3`, manualne usunięcie 8-bajtowego nagłówka GPKG w pamięci i parsowanie buforów WKB przez `wkx`.
11. **Zredukowano obciążenie sterty pamięci Node.js do zera** przy dynamicznym wyszukiwaniu POI w buforze 500m, delegując filtrowanie przestrzenne bezpośrednio do wbudowanego silnika `duckdb-async` wykonującego zapytania SQL z formułą Haversine po plikach Parquet.
12. **Wdrożono architekturę całkowitej izolacji danych ("Autonomous City Hub")** dla 57 miast, eliminując ryzyko zanieczyszczenia krzyżowego danych poprzez podział na ścisłe etapy: `01_source`, `02_spatial`, `03_config`, `04_results`.
13. **Zaprojektowano uniwersalny protokół komunikacji międzyprocesowej (IPC)** w orkiestratorze, przechwytując ustrukturyzowane metryki JSON (`__PIPELINE_METRICS__=`) ze strumienia standardowego wyjścia bez naruszania czytelności logów konsolowych.
14. **Zagwarantowano 100% zachowania masy populacji ludzkiej w buforach przystankowych**, eliminując błąd "Gravity Fallacy" poprzez matematyczny model redystrybucji popytu, który normalizuje siatkę demograficzną GUS 250m względem sumy przyciągania konkurencyjnych węzłów.
38. **Zaprojektowano i wdrożono uniwersalny silnik zapytań przestrzenno-analitycznych (Universal Query Engine)** w FastAPI 0.115+ i DuckDB 1.2+, osiągając czas odpowiedzi poniżej 15 ms dla dowolnych limitów oraz zapytań o dokładną pozycję rankingową (`rank=N`, 1-based indexing) w skali 60 265 słupków i 28 317 hubów.
39. **Zabezpieczono 24 endpointy analityczne DuckDB przed atakami typu SQL Injection**, zastępując dynamiczną konkatenację zapytań ścisłymi słownikami whitelistingowymi (`STOP_METRIC_MAP`, `HUB_METRIC_MAP`, `HEX_METRIC_MAP`, `MARKET_METRIC_MAP`), które weryfikują kolumny w czasie O(1) i odrzucają nieautoryzowane zapytania ze statusem HTTP 422.
40. **Zoptymalizowano czas zapytań analitycznych mostka transakcyjnego RCN na 2.55 mln rekordów Warszawy z 86 ms do 26 ms**, zastępując `COUNT(DISTINCT tx_id)` w DuckDB agregacją `COUNT(*)` ze sprzętowym filtrem Zone Maps Predicate Pushdown w posortowanym pliku Parquet (`row_group_size=50000`).
41. **Zredukowano transfer sieciowy o 85% przy generowaniu kart audytowych miast**, wdrażając modularny endpoint `/api/v1/analytics/audit-summary` z selektywnym parametrem `include` (podział na słupki, huby, heksy H3, demografię, RCN, TCRP i POI) i eliminując przesyłanie zbędnych megabajtów danych analitycznych.
42. **Wygenerowano dwie odrębne, czyste warstwy GeoPackage** (`stop_dna.gpkg` dla 60 265 fizycznych słupków i `hubs.gpkg` dla 28 317 logicznych węzłów) w układzie WGS84, eliminując kolizje schematów po operacji dissolve i zachowując 100% kompatybilności wstecznej z produkcyjnymi endpointami FastAPI i Deck.gl.

### Kategoria C: Frontend & Wizualizacja Geoprzestrzenna

15. **Osiągnięto stałą płynność 60 FPS podczas eksploracji ponad 60 000 węzłów transportowych**, implementując warstwy Deck.gl v9 (`ScatterplotLayer`, `HexagonLayer`) z renderowaniem instancyjnym bezpośrednio na GPU w połączeniu z wektorowym podkładem MapLibre GL.
16. **Wyeliminowano błędy typowania i regresje w interfejsie Next.js 16 / React 19**, utrzymując wskaźnik 0 błędów w procedurze `tsc --noEmit` przy pełnym otypowaniu struktur GeoJSON, odpowiedzi DuckDB i stanu analitycznego.
17. **Zoptymalizowano czas ładowania danych miejskich o 75%**, implementując podwójny format dystrybucji: lekkie macierze Apache Parquet dla agregacji serwerowych oraz precyzyjnie przycięte warstwy wektorowe GeoJSON dla mapy klienta.
18. **Zaprojektowano i wdrożono reaktywny panel inspekcji węzłów** w Zustand, umożliwiający dynamiczny rozkład wskaźników Stop DNA: dekompozycję wag POI, poziom entropii domenowej, lokalny percentyl oraz krajową ocenę Grade (od A+ do F).
19. **Zapewniono bezkonfliktową koordynację stanu mapy i filtrów** w Tailwind CSS v4 i shadcn/ui, izolując stan kamery MapLibre od renderowania metryk statystycznych w bocznych panelach aplikacji.
43. **Zastąpiono powolną agregację CPU (HexagonLayer) natywną warstwą GPU H3HexagonLayer (@deck.gl/geo-layers)**, eliminując narzut przeliczania wysokości na procesorze klienta i osiągając stałe 60 FPS przy wizualizacji 36 784 trójwymiarowych heksagonów z wyróżnieniem pustyń transportowych (czerwony alert).
44. **Wyeliminowano wyścigi danych i zamrażanie wątku WebGL przy szybkiej zmianie miast**, wdrażając pulę `AbortController` w React 19 / Next.js, która natychmiast anuluje przeterminowane żądania HTTP fetch.
45. **Odblokowano interakcję myszy z fizycznymi przystankami w scenie 3D Deck.gl**, rozwiązując konflikt raycastingu (słupki 3D o wysokości kilkuset metrów przechwytywały kliknięcia) poprzez ograniczenie skali wyniesienia do max 350m i priorytetyzację warstwy `ScatterplotLayer`.

### Kategoria D: QA, Integralność Danych & Test Automation

20. **Zbudowano wielowątkowy system audytu jakościowego** (`100_percent_dna_validator.py`), weryfikujący poprawność matematyczną 100% wygenerowanych węzłów transportowych pod kątem braku komórek Null/Infinity i prawidłowości rozkładu Z-Score.
21. **Zabezpieczono potok analityczny przed błędami parsowania czasu GTFS**, wdrażając parser obsługujący specyficzne formaty nocne (>24:00:00) poprzez konwersję do bezwzględnych sekund od północy.
22. **Zaimplementowano odporną na braki heurystykę kalendarza GTFS (Calendar Resilience)**, gwarantującą prawidłowe wyliczanie kursów w miastach z uszkodzonymi danymi rozkładowymi poprzez automatyczny wybór "Dnia Typowego" (środa) lub analizę częstotliwości w `calendar_dates.txt`.
23. **Wdrożono statystyczną ochronę rynku nieruchomości przed anomaliami**, stosując filtr rozstępu ćwiartkowego (IQR: Q1 - 1.5*IQR do Q3 + 1.5*IQR) per miasto, co usunęło błędy katastralne bez nieuprawnionego wycinania autentycznych transakcji luksusowych.
24. **Wyeliminowano błąd spłaszczania skrajności urbanistycznych ("Paradoks Balic")**, zastępując naiwne percentyle logarytmiczną standaryzacją Z-Score (Robust Scaling), co pozwoliło zachować rangę strategicznych anomalii (lotniska, dworce główne).
25. **Napisano zestaw testów jednostkowych w pytest** dla krytycznych modułów wyceny tagów OSM i dekodera HSTORE, weryfikując izolację klasyfikatora POI dla różnych kategorii urbanistycznych.
46. **Rozszerzono pakiet testów automatycznych w Pytest z 25 do 95 testów integracyjnych (100% green w 22.2s)**, weryfikujących poprawność matematyczną grawitacji Huffa, geometrię kanibalizacji TCRP 100, odporność schematów DuckDB na brakujące kolumny, czasy przejazdu GTFS oraz granice geograficzne WGS84 Polski.
47. **Wdrożono asymetryczny algorytm audytu zbędności przystanków transportu publicznego zgodny ze standardem TCRP Report 100 ("The Axe List")**, identyfikujący wzajemną kanibalizację stref dojścia pieszych ($r=300\text{m}$) przy użyciu funkcji zaniku Gaussa ($e^{-(d/150)^2}$) oraz chroniący przystanki dominujące przed fałszywą kwalifikacją do likwidacji.
48. **Zbudowano 3-poziomowy system audytu jakościowego Złotego DNA v4.2 (`100_percent_dna_validator.py`)**, weryfikujący 53 metryki analityczne na 60 265 słupkach, 28 317 hubach i 36 784 heksach H3 w 30 aglomeracjach z automatyczną generacją 26 235-wierszowego raportu i gwarancją zera wartości pustych (NaN/Inf).

### Kategoria E: DevOps, Reliability & Wsparcie L2 / SRE

26. **Zautomatyzowano zarządzanie cyklem życia aplikacji** za pomocą skryptu `dev.sh`, implementując obsługę sygnałów `kill -15` i `kill -9`, czyszczenie osieroconych procesów potomnych oraz zwalnianie zablokowanych portów sieciowych.
27. **Zapewniono zerowy czas przestoju deweloperskiego przy restartach środowiska**, wprowadzając mechanizm badania portu i weryfikacji gotowości serwera z logów w pętli z 45-sekundowym limitem czasu.
28. **Wdrożono pełną izolację zależności i powtarzalność potoku**, konfigurując środowisko robocze w `uv` oraz Node.js z synchronizacją lockfile'ów, eliminując błędy wersji bibliotek geoprzestrzennych C-GEOS i GDAL.
29. **Zaprojektowano dwupoziomowy system logowania w orkiestratorze**, kierujący zwięzłe komunikaty statusowe na konsolę (INFO), a pełne ślady wykonania i błędy procesów potomnych do trwałego pliku `pipeline_run.log` (DEBUG).
30. **Zabezpieczono potok przed awariami zewnętrznych usług sieciowych**, wdrażając buforowanie lokalnych zrzutów PBF z Geofabrik i deterministyczną architekturę offline, uniezależniając analizę od limitów zapytań i awarii Geoportalu.
49. **Wyeliminowano zjawisko Swap Death i awarie OOM Killer** (zabicie procesu przy 28.8 GB wirtualnej pamięci i 100% nasycenia 8 GB swapu) w potoku 30 aglomeracji, wprowadzając architekturę Subprocess Isolation z bezwarunkowym zwalnianiem aren `glibc` i anonimowych stron swapu przez jądro Linuxa po zakończeniu każdego miasta.
50. **Zautomatyzowano wdrożenie produkcyjne backendu na chmurę Oracle Cloud Infrastructure (OCI Ampere A1 ARM64) przez potok GitHub Actions**, skracając czas deploymentu do 2m 1s przy zerowym przestoju i 100% zachowaniu 210 plików danych przestrzennych 30 miast.
51. **Zdiagnozowano i usunięto błąd 502 Bad Gateway na instancji chmurowej Oracle Cloud (OCI Ampere A1 ARM64)**, przebudowując kontener Docker z natywnymi bibliotekami C-Spatial (`pyogrio>=0.9.0`, `geopandas>=1.0.0`) oraz synchronizując rsyncem 210 plików danych dla 30 miast ze 100% SLA.

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

### Historia 5: Eliminacja zjawiska Swap Death i awarii OOM w ogólnopolskim potoku Master DNA (Subprocess Isolation & C-GEOS STRtree)
- **Kategoria:** Systems / Pamięć RAM / Diagnostyka Jądra Linuxa
- **Situation (Sytuacja):** Podczas uruchomienia potoku obliczeniowego Stop DNA dla 30 aglomeracji system operacyjny całkowicie zamarł, a sesja graficzna przestała reagować na zdarzenia klawiatury i myszy.
- **Task (Zadanie):** Zdiagnozować przyczynę zamrożenia systemu na poziomie jądra Linuxa, wyeliminować wycieki pamięci i zapewnić stabilne wykonanie obliczeń dla całej Polski w ograniczonych zasobach RAM bez naruszania swapu.
- **Action (Działanie):** Zbadałem logi jądra za pomocą `journalctl -k`. Odnalazłem wpis kernel OOM Killera, który ubił proces Pythona przy 28.8 GB wirtualnej pamięci i w pełni zapełnionym swapie (8.0/8.0 GB, zaledwie 120 KB wolnego), co wywoływało thrashing wątku `kswapd`. Zidentyfikowałem dwa wąskie gardła: (1) alokator `glibc` i obiekty C Pythona nie zwalniały pamięci do jądra w pętli 30 miast mimo `del` i `gc.collect()`, (2) krok złączenia z bazą RCN generował 10 000 poligonowych buforów (64 wierzchołki każdy) i ciężkie `gpd.sjoin`. Wdrożyłem architekturę Subprocess Isolation (`subprocess.run`), wymuszając bezwarunkowe zwalnianie pamięci przez jądro po każdym mieście. Następnie zastąpiłem bufory i `sjoin` bezalokacyjnym indeksem przestrzennym `shapely.STRtree(points).query(predicate='dwithin', distance=500.0)`.
- **Result (Wynik):** Szczytowe zużycie pamięci spadło z 28 GB do stabilnych <200 MB na miasto, czas złączenia RCN skrócił się z minut do 6 ms, a potok dla wszystkich 30 miast wykonał się bezbłędnie bez nasycenia swapu.
- **Reflection (Refleksja):** Pythonowe mechanizmy garbage collection nie zarządzają pamięcią alokatorów C/C++. W masowym przetwarzaniu danych jedyną gwarancją zerowej fragmentacji pamięci jest izolacja na poziomie procesów systemu operacyjnego oraz unikanie alokacji geometrii poligonowych tam, gdzie wystarczą bezpośrednie operacje dystansowe na punktach.

### Historia 6: Skrócenie czasu ekstrakcji 7.3 mln kursów GTFS z >50 minut do 28 sekund w DuckDB C++ (Obsługa kursów nocnych $\ge 24:00:00$)
- **Kategoria:** Data Engineering / C++ SQL / Format Spec Resilience
- **Situation (Sytuacja):** Ekstrakcja unikalnych tras, wzorców podróży i sekwencji przystanków dla Warszawy (16 feedów GTFS, 7.3 mln wierszy `stop_times`) w Pandas trwała ponad 50 minut i paraliżowała cykl CI/CD potoku.
- **Task (Zadanie):** Zbudować silnik ekstrakcji tras transportowych zdolny do przetworzenia dowolnej aglomeracji w czasie poniżej 1 minuty, zachowujący 100% zgodności ze specyfikacją GTFS.
- **Action (Działanie):** Zastąpiłem sekwencyjne przetwarzanie w Pandas dedykowanym silnikiem analitycznym w DuckDB C++. Podczas testów zapytanie zwracało błąd `Conversion Error: date/time field value out of range: "24:15:00"`. Zidentyfikowałem, że standard GTFS koduje kursy nocne po północy jako godziny $\ge 24:00:00$, co wyklucza bezpośrednie rzutowanie na typ `::TIME`. Zaimplementowałem arytmetykę dobową w SQL opartą na `split_part`, konwertującą czas bezpośrednio do sekund od północy na liczbach całkowitych, oraz zastosowałem kompozytowy klucz izolacji `route_uid = f"{feed_id}_{route_id}"`.
- **Result (Wynik):** Czas ekstrakcji tras dla Warszawy skrócił się z ponad 50 minut do 28 sekund (>100-krotne przyspieszenie). Ekstrakcja dla wszystkich 30 miast zajmuje łącznie niespełna 3 minuty.
- **Reflection (Refleksja):** Silniki wektorowe SQL w C++ deklasują biblioteki Pythonowe w operacjach analitycznych, pod warunkiem rygorystycznego zrozumienia formatów brzegowych danych domenowych.

### Historia 7: Projekt Universal Query Engine – sub-15ms zapytania rankingowe exact position (`rank=N`) i ochrona przed SQL Injection
- **Kategoria:** Backend Architecture / Distributed APIs / Security
- **Situation (Sytuacja):** Wcześniejsza warstwa serwerowa wymagała przesyłania monolitycznych plików GeoJSON (10 MB na miasto) lub sztywnych zapytań top-N, co dławiło pamięć przeglądarki i uniemożliwiało pobranie np. wyłącznie 6. najlepszego przystanku w mieście czy selektywnego wycinka audytu.
- **Task (Zadanie):** Zbudować uniwersalny silnik analityczny (Universal Query Engine), gwarantujący sub-15ms czasy odpowiedzi dla dowolnych rankingów (`limit=N`, `rank=N`), pełne pokrycie 53 metryk audytu Golden DNA oraz 100% odporności na SQL Injection.
- **Action (Działanie):** Zintegrowałem silnik DuckDB 1.2+ bezpośrednio z FastAPI 0.115+. Zamiast podatnej na błędy konkatenacji ciągów SQL zaimplementowałem ścisłe słowniki mapowania kolumn (`STOP_METRIC_MAP`, `HUB_METRIC_MAP`, `HEX_METRIC_MAP`), które weryfikują żądane metryki w czasie O(1). Wprowadziłem uniwersalną logikę paginacji 1-based (`OFFSET (rank - 1) LIMIT 1`), modułowy endpoint scorecardu `/api/v1/analytics/audit-summary` z selektorem `?include=...` oraz dedykowany router magnesów miejskich POI (`/api/v1/poi/magnets`).
- **Result (Wynik):** Czas odpowiedzi dla dowolnego zapytania rankingowego spadł poniżej 15 ms, zużycie transferu sieciowego dla kart audytowych zmalało o 85%, a API uzyskało 100% parytetu danych z raportem audytowym Golden DNA przy zachowaniu pełnego bezpieczeństwa.
- **Reflection (Refleksja):** Uniwersalność interfejsu API nie może oznaczać kompromisów w bezpieczeństwie. Zastosowanie wzorca whitelisty kolumn w połączeniu z wektoryzowanym silnikiem analitycznym (DuckDB) pozwala na pełną swobodę zapytań analitycznych przy zachowaniu żelaznych granic bezpieczeństwa i sub-15ms wydajności.

### Historia 8: Diagnostyka i usunięcie błędu 502 Bad Gateway na Oracle Cloud ARM64 oraz ogólnokrajowa synchronizacja 210 zbiorów danych
- **Kategoria:** Cloud Infrastructure / DevOps / SRE
- **Situation (Sytuacja):** Po wdrożeniu nowego routera tras na serwer produkcyjny OCI (Ampere A1 ARM64), endpointy API zaczęły zwracać błąd 502 Bad Gateway z serwera proxy Caddy.
- **Task (Zadanie):** Przywrócić 100% dostępności API, usunąć przyczynę błędu na poziomie kontenera Docker i zsynchronizować 210 wygenerowanych plików danych dla 30 miast.
- **Action (Działanie):** Sprawdziłem logi kontenera przez `docker logs busos-api`. Zidentyfikowałem `ImportError` związany z brakiem biblioteki `geopandas` i natywnego drivera `pyogrio` w obrazie produkcyjnym. Zaktualizowałem `Dockerfile` i `pyproject.toml`, wymuszając instalację `geopandas>=1.0.0` oraz `pyogrio>=0.9.0` z dowiązaniami do systemowych bibliotek GDAL/GEOS. Zrekompilowałem kontener w Docker Compose, a następnie przeprowadziłem synchronizację rsyncem wszystkich 30 miast (warstwy `04_results/` oraz `02_spatial/stops.gpkg`) oraz baz ogólnopolskich.
- **Result (Wynik):** Błąd 502 został wyeliminowany. API osiągnęło status Healthy z 30 aktywnymi miastami, zwracając trasy i profile przystanków w czasie <15ms. Cały proces wdrożenia i weryfikacji zajął mniej niż 15 minut.
- **Reflection (Refleksja):** Środowiska kontenerowe na architekturze ARM64 wymagają jawnej walidacji zależności C-Spatial. Zawsze należy weryfikować zgodność środowiska produkcyjnego z lokalnym przed transferem danych.

---

## 5. Zweryfikowany Twardy Stos Technologiczny

Poniższa lista zawiera wyłącznie technologie, narzędzia i protokoły, których obecność i wykorzystanie zostało bezpośrednio potwierdzone w kodzie repozytorium:

| Kategoria | Technologie i Narzędzia | Potwierdzenie w Kodzie |
|---|---|---|
| **Języki Programowania** | Python 3.12+, TypeScript 5, SQL, Bash | `.py`, `.ts`, `.tsx`, `.sh`, `.sql` |
| **Przetwarzanie Geoprzestrzenne** | GeoPandas 1.0+, Shapely 2.0+ (C-GEOS), PyOsmium, Fiona 1.9+, PyProj 3.5+, PyOgrio 0.9+, Rtree, SciPy (`cKDTree`) | `pyproject.toml`, `requirements.txt`, `scripts/pipeline/` |
| **Narzędzia Niskopoziomowe C/C++** | `osmium-tool` (C++ PBF clipping), GDAL/OGR 3.8+ (`ogr2ogr`), C-GEOS STRtree | `scripts/pipeline/05_extract_infrastructure.py`, `15_compute_stop_dna.py` |
| **Indeksacja Przestrzenna & LRS** | Uber H3 (Res 8 & Res 9, `h3-py`), Linear Referencing System (EPSG:2180), R-Tree Spatial Index, GUS Grid 250m | `01b_extract_transit_routes.py`, `17_build_h3_grid.py`, `population_250m.gpkg` |
| **Formaty Danych Przestrzennych** | OGC GeoPackage (`.gpkg`), Apache Parquet (`.parquet` Zone Maps), OSM PBF, GeoJSON, WKB, GML 3.2 | Pliki w `data/cities/`, `data/database/` i `scripts/` |
| **Bazy Danych i Silniki Analityczne** | DuckDB 1.2+ (vectorized C++ SQL, Zone Maps), SQLite3 (journal_mode=WAL, R-Tree), Apache Arrow (`pyarrow`) | `backend/app/domain/market_bridge.py`, `backend/app/spatial_engine.py` |
| **Backend & API** | FastAPI 0.115+, Pydantic v2, Uvicorn, REST API (24 trasy OpenAPI), SQL Injection Whitelisting | `backend/app/main.py`, `backend/app/routers/` |
| **Frameworki Frontendowe** | Next.js 16.2.1 (Turbopack, App Router), React 19.2.4 | `urban-dashboard/package.json` |
| **Wizualizacja WebGL & Mapy** | Deck.gl v9.2.11 (Scatterplot, H3HexagonLayer, PathLayer, GeoJSON), MapLibre GL 5.21+, `react-map-gl` 8.1+ | `urban-dashboard/src/components/MapContainer.tsx` |
| **Zarządzanie Stanem i UI** | Zustand 5.0+, Tailwind CSS v4, shadcn/ui, Blueprint.js, Lucide React | `urban-dashboard/src/lib/store.ts`, `globals.css` |
| **Infrastruktura Chmurowa & SRE** | Oracle Cloud Infrastructure (Ampere A1 ARM64, 2 OCPUs, 12 GB RAM), Caddy 2 (TLS 1.3 / HTTP/3), Docker Compose v2, GitHub Actions CI/CD | `.github/workflows/deploy-backend.yml`, `docker-compose.yml`, `Caddyfile` |
| **Silnik Wektorowy & AI** | Qdrant v1.13+ (Rust Vector DB na porcie 6333), Stop DNA Embedding Search | `backend/app/routers/ai.py` |
| **Testowanie & Jakość Kodu** | Pytest 9+ (95 testów integracyjnych, Tier 0–5), ESLint 9, `npx tsc --noEmit` (0 błędów), `100_percent_dna_validator.py` | `backend/tests/`, `scripts/tools/` |
| **Zarządzanie Środowiskiem** | Linux CLI (kernel diagnostics), `uv`, Python venv, npm, Subprocess Isolation, Bash daemon (`dev.sh`) | `dev.sh`, `orchestrator.py` |
