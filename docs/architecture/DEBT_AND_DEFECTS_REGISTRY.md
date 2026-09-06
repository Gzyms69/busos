# Master Registry of System Defaults, Architectural Failures and Urban Analytics Biases (v10.0)

Ten dokument jest kompletnym zapisem zagadnien architektonicznych, matematycznych oraz jakosciowych w potoku analitycznym BusOS (Urban Gravity). Sluzi jako techniczna mapa drogowa refaktoryzacji inzynieryjnej.

---

## 1. Software Engineering & Coding Standards (Jakosc Kodu)

### 1.1. Zasieg zmiennych i obsluga wartosci brzegowych (Scope Creep)
- **Lokalizacja:** `scripts/pipeline/10_unify_schemas.py`
- **Defekt:** Zmienne `min_allowed` i `max_allowed` bywaly inicjowane wylacznie wewnatrz warunku `if not valid_prices.empty:`.
- **Skutek:** `UnboundLocalError` przy probie zapisu metryk JSON dla miast bez transakcji.
- **Wymagana poprawka:** Inicjalizacja wartosci domyslnych przed blokami warunkowymi.

### 1.2. Brak atomowosci operacji na plikach (Atomic Write)
- **Lokalizacja:** `scripts/pipeline/10_unify_schemas.py` oraz inne skrypty ETL.
- **Defekt:** Bezposrednie nadpisywanie pliku docelowego: `rcn.to_file(rcn_path)`.
- **Zagrozenie:** Przerwanie procesu w polowie zapisu (OOM, SIGKILL) powoduje uszkodzenie pliku GeoPackage / DuckDB.
- **Wymagana poprawka:** Zapis do pliku tymczasowego (`.tmp`) i atomowa zamiana przez `os.replace()`.

### 1.3. Parsowanie XML przez wyrazenia regularne (Zalgo Text)
- **Lokalizacja:** `scripts/pipeline/07_harvest_rcn_omnibus.py`
- **Defekt:** Uzycie `re.search` do wycinania strukturalnych tagow XML `FeatureCollection`.
- **Zagrozenie:** Podatnosc na zmiany formatowania, przestrzeni nazw XML (namespaces) i kolejnosci atrybutow w Geoportalu.
- **Wymagana poprawka:** Wdrozenie parsera strukturalnego (`xml.etree.ElementTree` lub `lxml`).

### 1.4. Ignorowanie statusu procesow zewnetrznych (Subprocess Safety)
- **Lokalizacja:** `scripts/pipeline/07_harvest_rcn_omnibus.py`
- **Defekt:** Wywolywanie `ogr2ogr` bez rygorystycznej kontroli kodu wyjscia (`returncode`).
- **Skutek:** Skrypt zglasza sukces mimo nieudanej konwersji GML do GeoPackage.
- **Wymagana poprawka:** Stosowanie `subprocess.run(..., check=True)`.

### 1.5. Architektura anty-strumieniowa (OOM Risk)
- **Lokalizacja:** `scripts/pipeline/11_build_master_db.py`
- **Defekt:** Ladowanie pelnych warstw przestrzennych ze wszystkich aglomeracji do pamieci RAM przed zlaczeniem (`pd.concat`).
- **Skutek:** Ryzyko wyczerpania pamieci RAM przy przetwarzaniu ogolnokrajowym.
- **Wymagana poprawka:** Strumieniowe dopisywanie do docelowej bazy danych przez `ogr2ogr -update -append` lub DuckDB appender.

---

## 2. Urban Analytics & Mathematical Logic (Logika Domenowa)

### 2.1. Matematyczne splaszczenie skrajnosci (Percentile Fallacy)
- **Defekt:** Bezkrytyczne uzycie `rank(pct=True)` przed sumowaniem skladowych profilu przystanku.
- **Problem:** Percentyle splaszczaja rozklad i degraduja anomalie pozytywne (np. wezel lotniskowy o zerowej populacji bezposredniej, ale kluczowym znaczeniu multimodalnym).
- **Wymagana poprawka:** Standaryzacja Z-Score (Robust Scaling) po logarytmowaniu danych wyjsciowych.

### 2.2. Nieefektywna iteracja w analizie przestrzennej
- **Lokalizacja:** `scripts/pipeline/15_compute_stop_dna.py`
- **Defekt:** Iteracja pętla po wierszach (`iterrows()`) wewnatrz `.apply()`.
- **Wymagana poprawka:** Wykorzystanie zoptymalizowanych metod wektorowych GeoPandas i indeksow R-tree / PyGEOS.

### 2.3. Dostosowanie oceny roznorodnosci POI
- **Defekt:** Stosowanie entropii Shannona do oceny POI prowadzace do karania klastrow o wysokiej specjalizacji (np. kampusy medyczne, centra akademickie).
- **Wymagana poprawka:** Wskaznik Domain Synergy (klasyfikacja POI: Edukacja, Zdrowie, Handel, Administracja, Rekreacja) z premia za dywersyfikacje domenowa.

### 2.4. Bariery przestrzenne (Severance Penalty)
- **Defekt:** Stosowanie prostych buforow euklidesowych (okregi 500m) bez uwzglednienia fizycznych barier infrastrukturalnych (tory kolejowe, rzeki, drogi ekspresowe).
- **Wymagana poprawka:** Wprowadzenie korekty dostepnosci pieszej (Severance Penalty) lub analizy izochron pedestrian network.

### 2.5. Rozpoznawanie rozkladow GTFS (Calendar Resilience)
- **Defekt:** Naiwne sumowanie wszystkich wpisow w `stop_times.txt` laczace rozklady powszednie, weekendowe i swiateczne.
- **Wymagana poprawka:** Heurystyka typowego dnia roboczego (sroda) oraz fallback na `calendar_dates.txt` w przypadku braku pliku `calendar.txt`.

---

## 3. Data Integrity & Spatial Harmonization (Integralnosc Danych)

### 3.1. Zgodnosc typow w zlaczeniach przestrzennych
- **Defekt:** Porownywanie identyfikatorow o roznych typach danych (np. string vs int64) prowadzace do podstawiania median globalnych zamiast wartosci z sasiadujacych stref.
- **Wymagana poprawka:** Standaryzacja typow kluczy przed zlaczeniami i wektorowe `.groupby()` po operacji `sjoin`.

### 3.2. Deduplikacja slupkow przystankowych
- **Defekt:** Grupowanie buforami odleglosciowymi mogace prowadzic do niekontrolowanego laczenia dlugich ciagow ulicznych w pojedynczy wezel.
- **Wymagana poprawka:** Wykorzystanie dyskretnej siatki heksagonalnej H3 (rozdzielczosc 9) jako jednoznacznej jednostki przestrzennej.

### 3.3. Walidacja danych transakcyjnych RCN
- **Defekt:** Wystepowanie skrajnych cen nierynkowych w surowych zbiorach publicznych.
- **Wymagana poprawka:** Zastosowanie filtru IQR (Interquartile Range) per miasto na etapie unifikacji schematow (Krok 10 jako jedyne SSOT jakosci cenowej).

### 3.4. Obsluga niestandardowych formatow czasu GTFS
- **Defekt:** Godziny przekraczajace standardowy format 24-godzinny (np. 24:15:00 dla kursow nocnych).
- **Wymagana poprawka:** Konwersja czasu do sekund od polnocy.

---

## 4. Architecture & Delivery (Dostarczanie Danych i Frontend)

### 4.1. Data Delivery do Frontendu (PMTiles / MVT)
- **Defekt:** Generowanie ciezkich plikow GeoPackage (`master_analytical.gpkg`), ktore nie moga byc bezposrednio serwowane do przegladarki klienta w Next.js.
- **Wymagana poprawka:** Kafelkowanie wektorowe (PMTiles lub MVT przy uzyciu `tippecanoe`) dla plynnej wizualizacji MapLibre GL / Deck.gl.

### 4.2. Wydajnosc operacji przestrzennych (Eliminacja gpd.overlay)
- **Defekt:** Wykonywanie ciezkiej operacji przecinania wielokatow `gpd.overlay(..., how="intersection")` na siatkach populacyjnych GUS.
- **Wymagana poprawka:** Zastapienie indeksowanym przestrzennie `sjoin` z przeliczeniem powierzchniowym.

### 4.3. Odpornosc pobierania danych sieciowych WFS
- **Defekt:** Jednorazowe zapytania HTTP do Geoportalu bez mechanizmu powtorzen (Retry).
- **Wymagana poprawka:** Integracja mechanizmu exponential backoff (`tenacity`) w celu automatycznego wznawiania polaczen.

### 4.4. Elastyczne mapowanie schematow w powiatach (Fuzzy Matching)
- **Defekt:** Sztywne listy kolumn atrybutowych dla danych z ronych powiatow.
- **Wymagana poprawka:** Dopasowywanie nazw atrybutow z uzyciem fuzzy matchingu / tokenizacji slow kluczowych.
