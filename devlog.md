# DevLog - Projekt Analizy Komunikacji i Cen Nieruchomości w Polsce

Ten dokument zawiera szczegółowy zapis kroków podjętych w projekcie, wraz z technicznym uzasadnieniem każdej decyzji architektonicznej. Naszym celem nadrzędnym jest zbudowanie ogólnopolskiego dashboardu korelującego dane o transporcie publicznym (GTFS), zagęszczeniu ludności (GUS 250m) oraz cenach nieruchomości (RCN WFS).

---

## Faza 1: Fundamenty i Rygor Inżynieryjny

### 1. Ustanowienie Architektury Projektu
- **Działanie:** Utworzenie rygorystycznej struktury katalogów: scripts/ dla kodu, logs/ dla logów, data/ dla surowych i przetworzonych danych, oraz bazy SQLite data/database/transport_metrics.db.
- **Uzasadnienie:** Oddzielenie logiki wykonawczej od danych. Zapewnienie "Senior Engineering Standard" zapobiega chaosowi przy skalowaniu projektu na dziesiątki miast.

### 2. Konfiguracja Środowiska (Python)
- **Działanie:** Wdrożenie izolowanego środowiska .venv oraz zdefiniowanie zależności w requirements.txt (m.in. geopandas, osmnx, requests, pandas).
- **Uzasadnienie:** Zapewnienie powtarzalności środowiska analitycznego dla operacji przestrzennych.

---

## Faza 2: Pierwsze Wycięcia i Walidacja Danych (Kielce)

### 3. Pobranie Danych Pilotażowych (Kielce)
- **Działanie:** Pobranie danych GTFS dla Kielc jako miasta testowego. Rozpoznanie struktury stops.txt.
- **Uzasadnienie:** Szybka weryfikacja koncepcji na małym, sterowalnym zbiorze danych przed próbą masowej ingestji.

### 4. Odkrycie i Testowanie WFS RCN
- **Problem:** Jak pozyskać bezpłatne dane o transakcjach nieruchomości (RCN) dla Kielc.
- **Rozwiązanie:** Odkryto, że GUGiK udostępnia warstwę ms:lokale pod adresem https://mapy.geoportal.gov.pl/wss/service/rcn.
- **Technikalia:** Skonstruowanie zapytania z filtrem OGC XML (PropertyIsLike na polu teryt oraz PropertyIsGreaterThanOrEqualTo dla daty od 2025-01-01), aby zawęzić gigantyczną bazę tylko do interesującego nas wycinka.

---

## Faza 3: Skalowanie na Całą Polskę

### 5. Masowe Pobieranie GTFS
- **Działanie:** Wykorzystanie bazy mkuran.pl oraz list ministerialnych do pobrania surowych paczek ZIP z rozkładami jazdy dla ponad 70 organizatorów transportu.
- **Problem:** Ogromna fragmentacja danych w Polsce.

### 6. Integracja Siatki Ludności GUS
- **Działanie:** Odkrycie i pobranie siatki populacji z Narodowego Spisu Powszechnego 2021 (NSP 2021) o rozdzielczości 250m x 250m.
- **Uzasadnienie:** Siatka ta pozwala na nałożenie precyzyjnych "map cieplnych" ludności na bufory przystankowe.
- **Problemy techniczne:** Konieczność wyodrębniania pliku GPKG z hybrydowych paczek ZIP.

---

## Faza 4: Diagnostyka i Stabilizacja

### 7. Porzucenie Overpass API na rzecz lokalnego PBF
- **Problem:** Wyciąganie dróg pieszego dojścia do przystanków w całej Polsce przez Overpass API kończyło się permanentnymi limitami zapytań (Rate Limits) i przerwaniem analizy.
- **Rozwiązanie:** Pobranie na dysk całego pliku Polski z Geofabrik (poland-latest.osm.pbf - 1.9 GB).

### 8. Optymalizacja wycinania za pomocą Osmium
- **Działanie:** Zastosowanie narzędzia napisanego w C++ (osmium-tool) do szybkiego docinania pliku Polski do konkretnych BBOX (bufor 3km wokół przystanków). Filtrowanie wyłącznie tagów w/highway.
- **Uzasadnienie:** Osmium radzi sobie z gigabajtami danych w sekundy, redukując obciążenie we/wy.

---

## Faza 5: Architektura City-Centric i Wyzwania Wydajnościowe

### 9. Reorganizacja do struktury City-Centric
- **Działanie:** Przebudowa folderów. Zamiast dzielić dane na typy (np. gtfs/, rcn/), pogrupowano je wokół konkretnych aglomeracji (data/cities/{miasto}/...).
- **Uzasadnienie:** Pełna hermetyzacja terytorialna. Umożliwia łatwiejsze zrównoleglenie procesów analitycznych (każde miasto to oddzielny, zamknięty ekosystem).

### 10. Krytyczna awaria: "Swap Death" przy Multiprocessingu OSMnx
- **Problem:** Próba równoległej budowy grafów drogowych z plików XML za pomocą osmnx i ProcessPoolExecutor (na 4 wątkach) całkowicie zawiesiła komputer.
- **Przyczyna:** OSMnx ładując plik XML do struktury NetworkX tworzy setki tysięcy obiektów w Pythonie, pochłaniając drastyczne ilości RAM (kilkanaście GB na proces).
- **Rozwiązanie:** Wycofanie się z parsowania XML w Pythonie na wczesnym etapie.

### 11. Wdrożenie "Zero-RAM GDAL Pipeline"
- **Działanie:** Zastąpienie konwersji OSMnx procedurą C++ opartą na ogr2ogr. Mapowanie atrybutów urbanistycznych (building:levels, barrier, amenity) przez osmconf.ini i zapis bezpośrednio do formatu osm_full.gpkg.
- **Uzasadnienie:** Przejście na strumieniowe bazy danych utrzymuje zużycie RAM w granicach ~200MB, zapobiegając kolejnym awariom.

### 12. Metoda "Stop-Centric Context" (Precyzyjne Wykrojniki)
- **Działanie:** Utworzenie pliku transport_zone.gpkg dla każdego miasta (złączenie 1500m buforów wokół każdego przystanku aglomeracji). Ten kształt służy jako "wykrojnik" do wycinania mapy z pliku PBF i mapy Powiatów.

---

## Faza 6: Audyt Kompletności i Data Quality

### 13. Odkrycie luki w WFS RCN (Problem 0 rekordów)
- **Problem:** Podczas audytu wykryto, że udało się pobrać RCN z 2025 r. tylko dla 4 aglomeracji (m.in. Warszawa, Kraków). Dla 28 miast (np. Suwałki) serwer Geoportalu zwracał 0 obiektów pomimo prawidłowych kodów TERYT.
- **Diagnoza:** Usługa WFS GUGiK (ms:lokale) ma poważne wady na poziomie krajowym. Rate Limiting i brak geometrii w niektórych powiatach uniemożliwiają pobranie danych przez WFS.

---

## Faza 7: Rozwiązanie problemu "Train Plague" i Urban Gravity Engine

### 14. "Plaga Pociągów" (The Train Plague)
- **Problem:** Skrypt identyfikujący kody TERYT próbował objąć ponad 300 powiatów w Polsce.
- **Przyczyna:** Baza GTFS zawierała rozkłady kolei dalekobieżnych (PKP Intercity, PolRegio).
- **Rozwiązanie:** Trwałe usunięcie krajowych przewoźników.

### 15. The "Enterprise GTFS Downloader"
- **Działanie:** Wdrożenie skryptu fetch_gtfs_enterprise.py z wielowątkowością i jawną białą listą komunikacji aglomeracyjnej.

### 16. Strategia "Urban Gravity Engine" (KPP 2026)
- **Działanie:** Wprowadzenie matematycznej filtracji kolei. Koleje aglomeracyjne są brane pod uwagę TYLKO wtedy, gdy ich stacje znajdują się w promieniu 5km od gęstej siatki autobusowej/tramwajowej danego miasta.
- **Uzasadnienie:** Precyzyjne granice miast, ograniczenie zbędnych zapytań do Geoportalu.

### 17. Sukces Urban Gravity Engine
- **Wynik:** Redukcja przystanków z 85k do 55.9k. Precyzyjne dociecie kolei aglomeracyjnej (np. w Łodzi zostawiono tylko 25% stacji).
- **Uzasadnienie:** Uzyskano minimalne, optymalne granice miast do pobierania RCN i OSM.

---

## Faza 8: Wielki Harvest i Walka z Fragmentacją GML

### 18. Nationwide RCN Harvest 3.2
- **Działanie:** Masowe pobranie danych RCN dla wszystkich 29 aglomeracji.
- **Odkrycie:** Dane z WFS są zdenormalizowane (płaskie), ale dane z paczek ręcznych (Łódź, Suwałki, Giżycko) to relacyjny GML 3.2 wymagający złączenia 4-krotnego (Transakcja -> Dokument -> Nieruchomość -> Lokal).

### 19. Rozwiązanie kryzysu geometrii (Łódź/Suwałki)
- **Problem:** W Łodzi i Suwałkach rekordy cenowe nie miały współrzędnych bezpośrednich.
- **Rozwiązanie:** Napisanie silników złączeń relacyjnych (`fix_relational_rcn.py`). W Suwałkach zastosowano logikę centroidów budynków/działek ze względu na całkowity brak punktowej warstwy lokali w GML.
- **Sukces:** Odzyskanie 12 000 rekordów dla Łodzi i 1 096 dla Suwałk (rocznik 2025+).

---

## Faza 9: Hartowanie Danych i Unifikacja Narodowa

### 20. Batalia o Układy Współrzędnych (The Lodz Case)
- **Problem:** Mimo odzyskania danych, Łódź pokazywała 0% pokrycia.
- **Diagnoza:** Wykryto błędy w kolejności osi (X/Y vs Y/X) oraz rzadki układ EPSG:2177 (Strefa 5) zamiast standardowego EPSG:2178 (Strefa 6) w metadanych ODGiK.
- **Rozwiązanie:** Wdrożenie silnika Brute-Force sprawdzającego wszystkie kombinacje względem warstwy przystanków. Siłowa reprojekcja przez ogr2ogr do standardu EPSG:2180 (1992).

### 21. Odzyskanie Pełnego Spektrum (Luxury Recovery)
- **Problem:** Nieautoryzowane usunięcie luksusowych nieruchomości powyżej 60k PLN/m2 przez agenta (zbytnia gorliwość w czyszczeniu outlierów).
- **Korekta:** Pełna rekonstrukcja bazy Master (222 102 rekordy). Zachowanie autentycznych apartamentów (nawet tych o cenach 100k-500k PLN/m2) jako kluczowego wskaźnika zamożności dzielnic.

### 22. Permanentna Unifikacja i Atlas Danych
- **Działanie:** Standaryzacja kolumn we wszystkich 29 hubach (`price_m2`, `lok_pow_uzyt`).
- **Wynik:** Stworzenie "Atlasu Próbkowanego" (`reports/city_data_samples.txt`), dokumentującego 100% spójności danych populacyjnych (GUS), transportowych (GTFS) i rynkowych (RCN) dla każdego miasta w Polsce.

---

## Faza 10: Wielka Sanacja i Operacjonalizacja (Enterprise Ready)

### 23. Refaktoryzacja Systemowa
- **Działanie:** Gruntowna reorganizacja struktury plików. Przeniesienie skryptów do `scripts/pipeline/` (ścieżka wykonawcza 01-11), `scripts/tools/` (diagnostyka) oraz `scripts/archive/`.
- **Uzasadnienie:** Przekształcenie warsztatu badawczego w powtarzalny proces inżynieryjny. Wprowadzenie `RUN_ORDER.md`.

### 24. Uwolnienie Repozytorium (Git Restoration)
- **Działanie:** Naprawa błędu w `.gitignore`, który blokował foldery `scripts/` i `reports/`. Pełna synchronizacja kodu z GitHubem.
- **Uzasadnienie:** Zapewnienie transparentności i bezpieczeństwa kodu poza lokalną maszyną.

### 25. Diagnostyka Mikro-Danych i Fix "TOT"
- **Działanie:** Wykrycie błędu Case-Sensitivity w siatce populacji (poszukiwanie `tot` zamiast `TOT`). Naprawa generatora próbek.
- **Wynik:** Odblokowanie realnych liczb ludności przy przystankach (np. 984 osoby przy ul. Brzeźnej w Łodzi).

---

## Faza 11: Projektowanie Inteligencji Przestrzennej (Urban Gravity)

### 26. Problem "Pustych POI" i Taksonomii
- **Działanie:** Wykrycie braku treści w atlasie próbek (`POI ID N/A`). Zidentyfikowanie przyczyn: brak obsługi warstwy poligonów i błędne mapowanie kolumn.
- **Reakcja:** Masowa ekstrakcja narodowych statystyk POI (`national_poi_stats.json`) z 29 miast.

### 27. Koncepcja Urban Gravity Engine 2.0
- **Działanie:** Zaprojektowanie zaawansowanego algorytmu wagowania infrastruktury.
- **Kluczowe założenia:** 
  - **Local Scarcity:** Rzadkość obiektu w skali miasta definiuje jego wartość.
  - **Strategic Tiering:** 5 poziomów istotności (od Szpitali/Uczelni x15 do Paczkomatów x0.2).
  - **Noise Cancellation:** Całkowite wycięcie szumu (ławki, śmietniki, parkingi).
  - **Distance Decay:** Wartość obiektu maleje wraz z odległością od przystanku (bufor 500m).

---

## Faza 12: Inteligencja Urbanistyczna (Urban Gravity 3.0)

### 28. Kryzys Modelu Logarytmicznego (RCA)
- **Problem:** Model 2.2 pozwalał rzadkim, nieistotnym obiektom (WiFi, Juice Bar) na dominację nad strategicznymi celami (Szpitale).
- **Przyczyna:** Zbyt mała separacja mnożników Tierów względem potęgi rzadkości statystycznej.

### 29. Wdrożenie Modelu Izolacji Warstwowej (Tier Isolation)
- **Logika:** Wprowadzenie sztywnych podłóg punktowych:
  - **Tier 1 (Regional Magnets):** 1 000 000 pkt (Szpitale, Uczelnie, Dworce).
  - **Tier 2 (Strategic Hubs):** 100 000 pkt (Galerie, Supermarkety, Szkoły, Policja).
  - **Tier 3 (Local Core):** 10 000 pkt (Przychodnie, Kultura, Przedszkola).
  - **Tier 4-6:** Odpowiednio 1 000, 100 i 1 pkt.
- **Formuła:** `V = (Base_Tier * log10(Pop)) * Scarcity_Bonus * Uniqueness`. Scarcity działa tylko jako mikro-modyfikator wewnątrz warstwy.

### 30. Ostateczna Weryfikacja (National Audit 3.0)
- **Wynik:** Pełen sukces merytoryczny. W każdym z 29 miast zachowano żelazną hierarchię: Szpital > Supermarket > Żabka > Paczkomat.
- **Skalowalność:** Model zapewnia uczciwe porównanie między metropolią (Warszawa) a mniejszymi ośrodkami (Giżycko), zachowując rzędy wielkości właściwe dla funkcji społecznej obiektów.

---
**Status Projektu:** System wyceny infrastruktury jest "betonowy". Przechodzimy do obliczeń DNA Przystanków (Faza 2).



