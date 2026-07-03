# Historia Badań nad Potencjałem AI w Projekcie Busos

Ten dokument zawiera pełny zapis analiz badawczych (Research & Code Review), przeprowadzonych w celu rozszerzenia projektu `busos` o zaawansowane modele uczenia maszynowego (Deep Learning, GNN, Spatial RF).

---

## 📌 FAZA 1: Wstępne badanie koncepcji AI (Generative & State Estimation)

### Wstęp
Twój projekt **busos** – jako narzędzie analityczne oceniające priorytety i jakość działań samorządów w zakresie transportu publicznego (na wzór "deweloperucha" dla RCN) – to strzał w dziesiątkę. Pomysł rozbudowy tego o modele sztucznej inteligencji to obecnie jeden z najgorętszych i najszybciej rozwijających się tematów w dziedzinie *Smart Cities* oraz *Intelligent Transportation Systems (ITS)*. 

Z naukowego punktu widzenia koncepcja podzielenia tego na **Dwa Modele** (1. Oceniający, 2. Optymalizujący) ma głęboki sens i jest w pełni poparta aktualnymi badaniami.

### Model 1: Oceniający i Rozumiejący Sieć (State Estimation)
Jego celem jest zmapowanie obecnej sytuacji w polskich miastach, zrozumienie topologii sieci i wystawienie oceny "zdrowia" komunikacji miejskiej.

1. **Grafowe Sieci Neuronowe (Graph Neural Networks - GNNs):**
   * Przystanki są traktowane jako węzły (nodes), a trasy autobusów jako krawędzie (edges). GNN potrafi spojrzeć na pliki GTFS i powiedzieć: "Rozkład strukturalny w tej części miasta jest wąskim gardłem".
2. **Ocena Niezawodności (Robustness and Vulnerability Oracles):**
   * Model sprawdza, co się dzieje, gdy jedna linia wypada. Generuje on metrykę: **"Podatność osiedla X na wykluczenie"**.

### Model 2: Proponujący Realne Ulepszenia (Network Design & Optimization)
1. **Głębokie Uczenie ze Wzmocnieniem (Deep Reinforcement Learning - DRL):**
   * Model DRL (agent) traktuje planowanie jak grę. AI sprawdza "Co-jeśli". Wynikiem jest raport: *"Jeśli urwiemy z linii 103 dwa najmniej używane kursy rano i przerzucimy je na linię 105 w stronę strefy ekonomicznej, o 14% spadnie czas oczekiwania w skali dnia"*.
2. **Stochastyczna Optymalizacja i Metaheurystyka:**
   * Algorytmy genetyczne połączone z uczeniem maszynowym używane do jednoczesnej optymalizacji częstotliwości i projektowania tras.

### Perspektywy spoza inżynierii ruchu drogowego
1. **Urban Planning & Spatial Equity:** Badanie wykluczenia komunikacyjnego najbiedniejszych osiedli (Transport Equity).
2. **Behavioral Economics (Ekonomia Behawioralna):** Przewidywanie *Modal Shift* (zmiany nawyków) na podstawie percepcji czasu.
3. **Network Science:** Badanie stopnia centralności przystanków, tak jak bada się zakażenia wirusowe lub przepływ informacji.

---

## 📌 FAZA 2: Pierwsza Rewizja z Code Review (Urban Gravity Engine v13.0)

### 1. Wstęp i Code Review
Twój projekt to majstersztyk data inżynierii.
Masz tam błyskawiczne operacje w C-GEOS, "Spatial Dissolve", rozwiązanie "Kanibalizacji Popytu" Modelem Huffa (`np.exp(-K_DECAY * dist)`) i **Shannon Entropy**.
Obecnie w `busos` liczysz grawitację za pomocą sztywnego algorytmu:
`local_score_raw = Z(log(infra))*0.35 + Z(log(freq))*0.35 + Z(log(pop))*0.15 + Z(log(market))*0.15`

### 2. Zastosowanie AI w `busos` na podstawie badań (2021-2024)
*   **Deep Gravity Model & SINNs:** Zamiast podawać sztywny wzór Huffa, sieci GNN (Graph Neural Network) mogą uczyć się "przestrzennej niestacjonarności". AI dynamicznie dopasowuje współczynniki grawitacji na poziomie lokalnym (np. bariery w Warszawie vs małe odległości w Ełku).
*   **Supervised Learning przy użyciu RCN (TOD Premium):** Możesz wytrenować potężny model **XGBoost**. Celem jest przewidzenie ceny `price_m2` na podstawie wyliczonych wektorów. AI udowodni np. że "Na krakowskim Ruczaju zwiększenie częstotliwości odpowiada za 12% wzrostu cen mieszkań".
*   **Deep Reinforcement Learning (Prawdziwy Doradca):** Agent AI bawi się plikami GTFS, przenosząc kursy między węzłami bez zwiększania stałych kosztów wozokilometrów, wypluwając gotowe propozycje optymalizacyjne.

### 3. Implementacja
Do pipeline'u orkiestratora wystarczy dodać nowe kroki czytające pliki `.parquet`, np. `17_train_gravity_gnn.py` i `18_run_equity_reinforcement.py`.

---

## 📌 FAZA 3: Ostateczna Koncepcja - EXTREME DEEP DIVE (Po przejrzeniu 16 skryptów)

### 1. Architektura Systemu: Co masz obecnie
Przeczytałem dokładnie wszystkie 16 kroków pipeline'u. To system **Spatial ETL** o architekturze enterprise:
*   Filtrujesz outlierów (6-sigma MAD).
*   Mistrzostwo wydajności C++ Osmium (`ogr2ogr`).
*   `Smart Cache` WFS, unifikacja RCN i odcięcie absurdalnych błędów (limit 30x mediany).
*   Model Huffa i *Spatial Dissolve v13.0*.

Twoje wyjściowe pliki (`stop_dna.gpkg`, Parquet) to idealnie przygotowany **Tensor Cech (Feature Tensor)** dla najnowocześniejszych architektur AI.

### 2. Modele AI "Szyte na miarę" pod bazę Busos

**A. Geographically Weighted Random Forest (GWRF) do wyliczania "TOD Premium"**
Zebrałeś potężną bazę RCN. Zamiast liczyć liniowy `Local_Score_Raw`, GWRF uczy się na współrzędnych przestrzennych (H3 / WGS84).
*   Wykorzystując Explainable AI (SHAP), model wypluje wynik w złotówkach: *"Zwiększenie częstotliwości autobusów o 1 kurs/h na tym osiedlu podniesie wartość mieszkań o 340 PLN/m2"*.

**B. Generacja Macierzy OD (Deep Gravity Model)**
Masz wyliczony `pop_unique` i `sum_pull`, ale nie wiesz jak płyną pasażerowie (dane warte setki tysięcy złotych od operatorów GSM).
*   Sieć neuronowa **Deep Gravity** (np. biblioteka `scikit-mobility`) potrafi generować syntetyczny ruch. Wypuścisz skrypt, który wyłapie "Transportowe Pustynie" – wykaże popyt, którego samorząd i ZTM nie zauważyły.

**C. Predykcja Gentryfikacji (Time-Series AI po RCN)**
Z WFS pobierasz daty transakcji od `2020-01-01`. 
*   Modele transformatorowe (Time-Series) badają skoki cenowe wokół infrastruktury. `busos` może wyliczyć ryzyko "Gentryfikacji Wywołanej Transportem" (Transit-Induced Gentrification) dla planowanych węzłów.

**D. Graph Neural Networks (GNN-SWIM) do projektowania siatki**
Zamiast oceniać sieć grawitacyjnie, zasilamy sieć grafową.
*   GNN-SWIM rozpoznaje "Strukturalne Dziury" w sieci transportowej (np. rzeki, tory). AI wypluwa propozycje nowych tras łączących węzły, maksymalizujących globalną Shannon Entropy.

### 3. Konkretny plan działania (Architektura Kodu)
Tego pancernego orkiestratora nie tykamy. AI wpinamy jako **Warstwę Analityczną** `scripts/ai_models/`:
1.  **`01_train_spatial_rf_tod.py`**: Trenuje GWRF, analizując wpływ Tierów na portfel kupujących (eksport TOD Premium).
2.  **`02_synthesize_deep_gravity.py`**: Generuje krawędzie syntetycznego przepływu pasażerów (`skmob`).
3.  **`03_generate_mayor_audit.py`**: Skrypt przepuszcza metryki z AI przez model językowy (LLM) na twardym prompcie, generując soczysty raport dla Prezydenta Miasta na podstawie surowych danych i wytykający bezradność lub chwalący dobre decyzje urbanistyczne.
