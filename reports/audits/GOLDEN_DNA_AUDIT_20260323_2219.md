# RAPORT W OPARCIU O ASERCJE W PEŁNI SYSTEMOWE DNA - 2026-03-23 22:19

---
## PODSUMOWANIE RYGORYSTYCZNE DLA POLSKI
```text
Przepróbkowanych Miast    : 2
Krytyczne Nulle / Inf     : 0 FAILURES
Łączna Walidacja Populacji: 1,413,523 osób (Siatka 250m GUS)
Ilość Transakcji RCN Pkt  : 86,124 aktów notarialnych
Obiekty Infr. OSM BAZA    : 1,129,287 zweryfikowanych geometrii
```
---


## WALIDACJA ZRZUTU KRAJOWEGO (NATIONAL STITCHING)
```text
Liczba Przystanków w Kraju: 60,265
Użytych Miast do Z-Score: 30
Przedziały Kwantyli: od 0.03% do 100.00%
[✅ SUCCESS] Percentyle krajowe objęły zbiór i nie uległy ściśnięciu statystycznemu.
```
---

## KIELCE
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: 0.000, Std: 0.681)
     Rozkład Kartek (unikalne Huby): A: 82, A+: 41, B: 123, C: 163, D: 204, F: 204
[👥 BAZA LUDNOŚCI GUS] ❌ OSTRZEŻENIE DEMOGRAFICZNE: Odchylenie 51.2%. GUS: 287,314 vs Baza: 190,000
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
```

### Faza 0: Statystyki ogólne
- **Populacja Miasta:** 287,314 (GUS Grid)
- **Transakcje RCN:** 9,588

### Faza III: Top 20 POI (Miasto)

| Kategoria | Tier | Ilość w Mieście | Wartość Punktowa (W) |
|---|---|---|---|
| `national_rail_hub` | T0_MEGA_HUB | 1 | 34,036,226 |
| `exhibition_centre` | T1_NATIONAL_MAGNET | 1 | 28,293,980 |
| `hospital_clinical` | T1_NATIONAL_MAGNET | 14 | 19,734,835 |
| `national_stadium` | T1_NATIONAL_MAGNET | 8 | 18,648,295 |
| `university_campus` | T1_NATIONAL_MAGNET | 39 | 11,218,942 |
| `regional_rail_hub` | T1_NATIONAL_MAGNET | 7 | 6,500,954 |
| `industrial_zone` | T2_STRATEGIC_HUB | 321 | 4,526,609 |
| `commercial_zone` | T2_STRATEGIC_HUB | 434 | 4,007,023 |
| `shopping_mall` | T2_STRATEGIC_HUB | 20 | 3,518,647 |
| `supermarket` | T2_STRATEGIC_HUB | 121 | 2,230,942 |
| `government_central` | T2_STRATEGIC_HUB | 89 | 2,161,217 |
| `business_office` | T2_STRATEGIC_HUB | 96 | 1,748,536 |
| `student_dormitory` | T2_STRATEGIC_HUB | 1 | 1,701,811 |
| `marketplace` | T3_LOCAL_CORE | 8 | 778,138 |
| `education_high_school` | T3_LOCAL_CORE | 130 | 724,577 |
| `sports_centre` | T3_LOCAL_CORE | 47 | 664,460 |
| `social_support_mops` | T3_LOCAL_CORE | 17 | 474,526 |
| `culture_theatre` | T3_LOCAL_CORE | 41 | 405,725 |
| `health_clinic` | T3_LOCAL_CORE | 226 | 338,048 |
| `car_services` | T4_DAILY_SERVICE | 62 | 114,637 |

### Faza IV: Próbki Pełnego DNA 100% (Zobacz szczegóły POI!)

#### NAJLEPSZE PRZYSTANKI (TOP 5)
<details><summary><b>Czarnowska / Dworzec Autobusowy (891e2eb5ebbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Czarnowska / Dworzec Autobusowy
  stop_id               : 67
  h3_index              : 891e2eb5ebbffff
  hub_id                : 565

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.5870

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 14842037.3012

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 61.7143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7905.2321

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 417.7852

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 53x park_recreation
  > 48x gastronomy
  > 40x personal_services
  > 38x specialized_retail
  > 13x micro_atm
  > 11x micro_parcel_locker
  > 11x convenience_store
  > 10x health_clinic
  > 9x bank
  > 9x commercial_zone
  > 8x government_central
  > 7x education_high_school
  > 6x shopping_mall
  > 5x business_office
  > 4x pharmacy
  > 4x supermarket
  > 4x post_office
  > 3x micro_playground
  > 2x police_station
  > 2x culture_theatre
  > 2x place_of_worship
  > 1x national_rail_hub
  > 1x sports_centre
  > 1x education_preschool

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - bank                   : Millennium Bank
    - micro_atm              : Euronet
    - micro_atm              : Euronet
    - shopping_mall          : Centrum Rondo
    - national_rail_hub      : Kielce Główne
    - bank                   : Santander
    - personal_services      : Rossmann
    - micro_atm              : Planet Cash
    - gastronomy             : Pierogarnia
    - gastronomy             : Jadłodalnia Tempo
    - micro_parcel_locker    : Paczkomat InPost
    - specialized_retail     : Serwis GSM
```
</details>
<details><summary><b>Żytnia I (891e2eb5e07ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Żytnia I
  stop_id               : 1041
  h3_index              : 891e2eb5e07ffff
  hub_id                : 71

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.8776
  local_score_raw       : 1.5634

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 6776650.2217

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 69.5000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6849.3151

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 857.0645

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 54x park_recreation
  > 51x gastronomy
  > 31x personal_services
  > 29x specialized_retail
  > 17x health_clinic
  > 17x convenience_store
  > 14x micro_parcel_locker
  > 10x micro_atm
  > 10x micro_playground
  > 6x education_preschool
  > 6x pharmacy
  > 6x education_high_school
  > 5x bank
  > 4x supermarket
  > 4x place_of_worship
  > 4x commercial_zone
  > 3x business_office
  > 3x post_office
  > 2x culture_theatre
  > 1x police_station
  > 1x government_central
  > 1x university_campus
  > 1x social_support_mops
  > 1x sports_centre
  > 1x car_services

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : Euronet
    - culture_theatre        : Miejska Biblioteka Publiczna
    - bank                   : Santander
    - personal_services      : Rossmann
    - specialized_retail     : Media Expert
    - gastronomy             : Pierogarnia
    - micro_parcel_locker    : Paczkomat InPost
    - health_clinic          : NZOZ \
    - gastronomy             : Calimero Café
    - micro_atm              : Euronet
    - culture_theatre        : Muszla koncertowa
    - gastronomy             : Bar Turystyczny
```
</details>
<details><summary><b>Urząd Wojewódzki (891e2eb5ea7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Urząd Wojewódzki
  stop_id               : 1042
  h3_index              : 891e2eb5ea7ffff
  hub_id                : 174

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.7552
  local_score_raw       : 1.5368

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 9385623.6532

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 49.8571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 8433.7349

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 522.5720

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 83x gastronomy
  > 80x specialized_retail
  > 69x personal_services
  > 55x park_recreation
  > 20x government_central
  > 19x bank
  > 18x convenience_store
  > 15x micro_atm
  > 13x health_clinic
  > 13x commercial_zone
  > 8x business_office
  > 8x education_high_school
  > 8x micro_parcel_locker
  > 5x shopping_mall
  > 5x pharmacy
  > 5x post_office
  > 4x culture_theatre
  > 4x supermarket
  > 4x micro_playground
  > 3x place_of_worship
  > 2x education_preschool
  > 1x sports_centre
  > 1x social_support_mops
  > 1x university_campus
  > 1x hospital_clinical

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - government_central     : Urząd Marszałkowski Województwa Świętokrzyskiego Departament Wdrażania Europejskiego Funduszu Społecznego
    - micro_atm              : Euronet
    - gastronomy             : Centralny Bar Mleczny
    - culture_theatre        : Multikino
    - supermarket            : Auchan
    - bank                   : mBank
    - bank                   : ING Bank Śląski
    - shopping_mall          : Centrum Rondo
    - micro_atm              : Planet Cash
    - government_central     : Urząd Marszałkowski Województwa Świętokrzyskiego
    - government_central     : Centrum Powiadamiania Ratunkowego
    - gastronomy             : Meet Me
```
</details>
<details><summary><b>Grunwaldzka / Mielczarskiego (891e2eb5e13ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Grunwaldzka / Mielczarskiego
  stop_id               : 144
  h3_index              : 891e2eb5e13ffff
  hub_id                : 601

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.6328
  local_score_raw       : 1.4975

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 4235256.5825

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 59.3571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7382.9561

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 770.4805

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 18x specialized_retail
  > 16x personal_services
  > 16x health_clinic
  > 12x micro_parcel_locker
  > 12x gastronomy
  > 12x park_recreation
  > 10x micro_playground
  > 9x convenience_store
  > 5x pharmacy
  > 4x micro_atm
  > 4x education_high_school
  > 4x place_of_worship
  > 4x commercial_zone
  > 3x education_preschool
  > 2x bank
  > 2x post_office
  > 2x car_services
  > 2x supermarket
  > 2x social_support_mops
  > 1x culture_theatre
  > 1x national_rail_hub
  > 1x government_central
  > 1x police_station
  > 1x sports_centre
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : Euronet
    - culture_theatre        : Miejska Biblioteka Publiczna
    - national_rail_hub      : Kielce Główne
    - bank                   : Santander
    - personal_services      : Rossmann
    - specialized_retail     : Media Expert
    - micro_parcel_locker    : Paczkomat InPost
    - specialized_retail     : Serwis GSM
    - gastronomy             : Bar Turystyczny
    - convenience_store      : Żabka
    - government_central     : Zarząd Transportu Miejskiego w Kielcach
    - police_station         : Straż Ochrony Kolei
```
</details>
<details><summary><b>IX Wieków Kielc / Warszawska (891e2eb5ea7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : IX Wieków Kielc / Warszawska
  stop_id               : 1462
  h3_index              : 891e2eb5ea7ffff
  hub_id                : 20

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.5104
  local_score_raw       : 1.4702

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 14305616.7877

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 37.1429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 8530.8057

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 530.8620

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 61x gastronomy
  > 60x specialized_retail
  > 58x personal_services
  > 49x park_recreation
  > 18x bank
  > 16x government_central
  > 16x health_clinic
  > 15x convenience_store
  > 11x commercial_zone
  > 10x micro_atm
  > 8x business_office
  > 8x micro_parcel_locker
  > 7x education_high_school
  > 6x pharmacy
  > 4x culture_theatre
  > 4x post_office
  > 4x micro_playground
  > 3x shopping_mall
  > 3x education_preschool
  > 3x place_of_worship
  > 2x supermarket
  > 2x hospital_clinical
  > 1x sports_centre
  > 1x social_support_mops
  > 1x university_campus

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - culture_theatre        : Multikino
    - supermarket            : Auchan
    - bank                   : mBank
    - bank                   : ING Bank Śląski
    - shopping_mall          : Centrum Rondo
    - micro_atm              : Planet Cash
    - government_central     : Urząd Marszałkowski Województwa Świętokrzyskiego
    - government_central     : Centrum Powiadamiania Ratunkowego
    - gastronomy             : Meet Me
    - specialized_retail     : Elegancja
    - pharmacy               : Całodobowa
    - pharmacy               : Rondo
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Brzechów-Nowiny (891e2ea6147ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Brzechów-Nowiny
  stop_id               : 1420
  h3_index              : 891e2ea6147ffff
  hub_id                : 771

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.6120
  local_score_raw       : -1.6561

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.5000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7388.8165

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 37.2839

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Wincentów IV (891e2eb1dd3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Wincentów IV
  stop_id               : 1285
  h3_index              : 891e2eb1dd3ffff
  hub_id                : 51

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.4896
  local_score_raw       : -1.8018

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.5000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7388.8165

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 11.4042

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Leszczyny Skała (891e2c69647ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Leszczyny Skała
  stop_id               : 1182
  h3_index              : 891e2c69647ffff
  hub_id                : 439

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.3672
  local_score_raw       : -1.9626

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 1.2857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7388.8165

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Łubno (891e2eb037bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Łubno
  stop_id               : 848
  h3_index              : 891e2eb037bffff
  hub_id                : 116

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.2448
  local_score_raw       : -1.9853

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.5000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7388.8165

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 2.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Suków Piaskownia (891e2ea7107ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Suków Piaskownia
  stop_id               : 410
  h3_index              : 891e2ea7107ffff
  hub_id                : 516

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.1224
  local_score_raw       : -2.0291

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.9286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7388.8165

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>

---

## KRAKOW
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: 0.000, Std: 0.711)
     Rozkład Kartek (unikalne Huby): A: 178, A+: 89, B: 266, C: 355, D: 444, F: 443
[👥 BAZA LUDNOŚCI GUS] ❌ OSTRZEŻENIE DEMOGRAFICZNE: Odchylenie 40.8%. GUS: 1,126,209 vs Baza: 800,000
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
```

### Faza 0: Statystyki ogólne
- **Populacja Miasta:** 1,126,209 (GUS Grid)
- **Transakcje RCN:** 76,536

### Faza III: Top 20 POI (Miasto)

| Kategoria | Tier | Ilość w Mieście | Wartość Punktowa (W) |
|---|---|---|---|
| `international_airport` | T0_MEGA_HUB | 1 | 214,364,903 |
| `national_rail_hub` | T0_MEGA_HUB | 1 | 38,908,177 |
| `exhibition_centre` | T1_NATIONAL_MAGNET | 1 | 24,392,048 |
| `national_stadium` | T1_NATIONAL_MAGNET | 26 | 22,130,047 |
| `hospital_clinical` | T1_NATIONAL_MAGNET | 31 | 20,865,837 |
| `university_campus` | T1_NATIONAL_MAGNET | 145 | 12,315,937 |
| `regional_rail_hub` | T1_NATIONAL_MAGNET | 15 | 7,308,897 |
| `student_dormitory` | T2_STRATEGIC_HUB | 1 | 4,926,590 |
| `industrial_zone` | T2_STRATEGIC_HUB | 1125 | 4,582,731 |
| `commercial_zone` | T2_STRATEGIC_HUB | 763 | 4,227,496 |
| `shopping_mall` | T2_STRATEGIC_HUB | 57 | 4,222,528 |
| `logistics_hub` | T2_STRATEGIC_HUB | 8 | 2,671,517 |
| `supermarket` | T2_STRATEGIC_HUB | 345 | 2,609,646 |
| `government_central` | T2_STRATEGIC_HUB | 193 | 2,303,118 |
| `business_office` | T2_STRATEGIC_HUB | 307 | 1,880,419 |
| `marketplace` | T3_LOCAL_CORE | 32 | 828,893 |
| `education_high_school` | T3_LOCAL_CORE | 486 | 775,176 |
| `sports_centre` | T3_LOCAL_CORE | 329 | 605,126 |
| `social_support_mops` | T3_LOCAL_CORE | 78 | 525,762 |
| `culture_theatre` | T3_LOCAL_CORE | 178 | 407,624 |

### Faza IV: Próbki Pełnego DNA 100% (Zobacz szczegóły POI!)

#### NAJLEPSZE PRZYSTANKI (TOP 5)
<details><summary><b>Muzeum Narodowe (891e2e6b023ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Muzeum Narodowe
  stop_id               : 3417
  h3_index              : 891e2e6b023ffff
  hub_id                : 1522

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.6587

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 28163922.2531

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 125.3571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 15897.9656

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 993.7438

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 64x gastronomy
  > 17x university_campus
  > 16x park_recreation
  > 14x convenience_store
  > 13x education_high_school
  > 12x specialized_retail
  > 11x personal_services
  > 10x health_clinic
  > 9x micro_atm
  > 8x micro_parcel_locker
  > 6x culture_theatre
  > 6x business_office
  > 6x bank
  > 6x place_of_worship
  > 5x pharmacy
  > 4x micro_playground
  > 3x hospital_clinical
  > 3x sports_centre
  > 2x government_central
  > 1x post_office
  > 1x supermarket
  > 1x hotel_accommodation
  > 1x commercial_zone
  > 1x education_preschool

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - culture_theatre        : Teatr Groteska
    - gastronomy             : Dynia Resto Bar
    - university_campus      : Wydział Filozofii Uniwersytetu Jagiellońskiego
    - gastronomy             : Pod Kopytkiem
    - education_high_school  : Ośrodek Szkolno-wychowawczy nr 1
    - university_campus      : Ośrodek Informacji i Promocji Uniwersytetu Jagiellońskiego
    - business_office        : Redakcja miesięcznika Alma Mater
    - bank                   : Millennium Bank
    - micro_atm              : Bankomat Millennium
    - micro_atm              : Bankomat Millennium
    - pharmacy               : Czysta 5
    - university_campus      : Katedra Patofizjologii Collegium Medicum Uniwersytetu Jagiellońskiego
```
</details>
<details><summary><b>Plac Inwalidów (891e2e6b0a3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Plac Inwalidów
  stop_id               : 3427
  h3_index              : 891e2e6b0a3ffff
  hub_id                : 441

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.9437
  local_score_raw       : 1.6371

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 15548568.3011

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 125.6429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 14285.7143

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1713.5858

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 70x park_recreation
  > 48x gastronomy
  > 29x personal_services
  > 18x convenience_store
  > 13x health_clinic
  > 11x education_high_school
  > 8x specialized_retail
  > 7x micro_playground
  > 7x university_campus
  > 6x government_central
  > 6x micro_atm
  > 6x place_of_worship
  > 4x business_office
  > 3x pharmacy
  > 3x education_preschool
  > 2x culture_theatre
  > 2x post_office
  > 2x bank
  > 2x micro_parcel_locker
  > 2x police_station
  > 1x supermarket
  > 1x social_support_mops
  > 1x industrial_zone
  > 1x hospital_clinical

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - pharmacy               : Dr. Max
    - convenience_store      : Avita
    - personal_services      : Perła Krakowska
    - education_high_school  : Inter Lang & Text English and German School
    - convenience_store      : U Moniki
    - health_clinic          : Gabinet lekarski
    - health_clinic          : Dentalking
    - health_clinic          : Specjalistyczna Poradnia Diagnozy i Rehabilitacji Dzieci i Młodzieży z Wadą Słuchu PZG
    - culture_theatre        : Biblioteka Kraków Filia 22
    - supermarket            : Alpo
    - gastronomy             : Spodek
    - gastronomy             : Veganic
```
</details>
<details><summary><b>Teatr Słowackiego (891e2e6b11bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Teatr Słowackiego
  stop_id               : stop_852_324229
  h3_index              : 891e2e6b11bffff
  hub_id                : 683

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.8873
  local_score_raw       : 1.6117

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 22389472.8979

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 132.5714

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 14769.6298

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 809.2645

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 199x gastronomy
  > 109x specialized_retail
  > 60x micro_atm
  > 31x personal_services
  > 26x convenience_store
  > 15x place_of_worship
  > 14x bank
  > 12x health_clinic
  > 10x education_high_school
  > 10x micro_parcel_locker
  > 10x park_recreation
  > 9x pharmacy
  > 8x university_campus
  > 5x culture_theatre
  > 5x business_office
  > 4x government_central
  > 3x post_office
  > 2x police_station
  > 2x supermarket
  > 1x national_rail_hub
  > 1x social_support_mops
  > 1x hospital_clinical
  > 1x marketplace
  > 1x shopping_mall
  > 1x micro_playground
  > 1x education_preschool

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - national_rail_hub      : Kraków Główny
    - health_clinic          : Małopolski Ośrodek Medycyny Pracy
    - gastronomy             : Demmers Teahouse
    - gastronomy             : Cafe Magia
    - gastronomy             : Bankowa
    - gastronomy             : The Piano Rouge
    - gastronomy             : Pijalnia Czekolady E. Wedel
    - education_high_school  : Prywatna Szkoła Podstawowa nr 5
    - convenience_store      : Żabka
    - gastronomy             : Domowe Przysmaki
    - specialized_retail     : Grateful
    - gastronomy             : Cyrano de Bergerac
```
</details>
<details><summary><b>Biprostal (891e2e6b097ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Biprostal
  stop_id               : stop_195_8429
  h3_index              : 891e2e6b097ffff
  hub_id                : 917

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.8310
  local_score_raw       : 1.5974

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 26864257.7716

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 74.5000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 15794.8837

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 2960.3042

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 25x gastronomy
  > 23x personal_services
  > 20x convenience_store
  > 16x micro_parcel_locker
  > 13x specialized_retail
  > 13x park_recreation
  > 11x micro_playground
  > 10x micro_atm
  > 9x pharmacy
  > 9x health_clinic
  > 6x education_preschool
  > 5x bank
  > 4x education_high_school
  > 3x university_campus
  > 3x supermarket
  > 3x place_of_worship
  > 2x post_office
  > 2x business_office
  > 1x culture_theatre
  > 1x commercial_zone
  > 1x marketplace
  > 1x hospital_clinical
  > 1x car_services
  > 1x sports_centre

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store      : O! Shop
    - convenience_store      : Carrefour Express
    - convenience_store      : Żabka
    - micro_atm              : PKO BP
    - pharmacy               : Hygieia
    - culture_theatre        : Biblioteka Kraków Filia 21
    - gastronomy             : Que Viet
    - bank                   : Bank Ochrony Środowiska
    - pharmacy               : Apteka Higiena
    - bank                   : Bank Pekao
    - post_office            : Urząd Pocztowy Kraków 16
    - convenience_store      : Carrefour Express
```
</details>
<details><summary><b>Politechnika (891e2e6b183ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Politechnika
  stop_id               : stop_189_7329
  h3_index              : 891e2e6b183ffff
  hub_id                : 1512

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.7746
  local_score_raw       : 1.5896

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 19993223.3363

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 136.4286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 19138.6964

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 302.5300

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 85x specialized_retail
  > 80x gastronomy
  > 31x micro_atm
  > 26x park_recreation
  > 20x personal_services
  > 12x convenience_store
  > 8x bank
  > 8x micro_parcel_locker
  > 6x health_clinic
  > 4x university_campus
  > 4x pharmacy
  > 4x business_office
  > 4x education_high_school
  > 4x place_of_worship
  > 2x post_office
  > 2x supermarket
  > 2x micro_playground
  > 2x government_central
  > 2x commercial_zone
  > 1x national_rail_hub
  > 1x social_support_mops
  > 1x marketplace
  > 1x shopping_mall
  > 1x culture_theatre

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - national_rail_hub      : Kraków Główny
    - bank                   : Millennium Bank
    - gastronomy             : Kraft Kebab
    - gastronomy             : Łupinka
    - university_campus      : Collegium Medicum Uniwersytetu Jagiellońskiego - Instytut Stomatologii
    - post_office            : Urząd Pocztowy Kraków 5
    - personal_services      : Imperial Barbershop & Academy
    - gastronomy             : Bistro Stacja Smaków
    - pharmacy               : Hygieia
    - gastronomy             : U Kolejarzy
    - personal_services      : Trio Studio
    - micro_atm              : Euronet
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Oczyszczalnia Ścieków ”Kujawy” (891e2e68d8bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Oczyszczalnia Ścieków ”Kujawy”
  stop_id               : 2026
  h3_index              : 891e2e68d8bffff
  hub_id                : 1357

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.2817
  local_score_raw       : -1.8075

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 1.5000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 10592.4296

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 3.4499

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Lusina Dolna (891e05a6c07ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Lusina Dolna
  stop_id               : stop_508_72201
  h3_index              : 891e05a6c07ffff
  hub_id                : 455

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.2254
  local_score_raw       : -1.8832

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 1.2857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 4122.8779

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 49.6887

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Kraków Nowa Huta (891e2e61a6fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Kraków Nowa Huta
  stop_id               : 178406
  h3_index              : 891e2e61a6fffff
  hub_id                : 1709

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.1690
  local_score_raw       : -2.0628

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0714

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 10592.4296

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 5.1892

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Kocmyrzów Biblioteka (891e2e61c77ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Kocmyrzów Biblioteka
  stop_id               : stop_1344_300101
  h3_index              : 891e2e61c77ffff
  hub_id                : 1571

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.1127
  local_score_raw       : -2.5401

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 736320.5908

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.8571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 16.4204

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 244.8870

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x place_of_worship
  > 1x culture_theatre
  > 1x education_preschool

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - place_of_worship       : Kaplica pw. Świętej Jadwigi Królowej
    - culture_theatre        : Filia Gminnej Biblioteki Publicznej w Kocmyrzowie
    - education_preschool    : Przedszkole Niepubliczne z oddziałem integracyjnym Chata Wesołego Skrzata
```
</details>
<details><summary><b>Kocmyrzów Sodfiny (891e2e61893ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Kocmyrzów Sodfiny
  stop_id               : stop_1348_300501
  h3_index              : 891e2e61893ffff
  hub_id                : 1081

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.0563
  local_score_raw       : -2.9112

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 11172.4772

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.8571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 16.4204

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 176.2858

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x place_of_worship
  > 1x culture_theatre
  > 1x education_preschool

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - place_of_worship       : Kaplica pw. Świętej Jadwigi Królowej
    - culture_theatre        : Filia Gminnej Biblioteki Publicznej w Kocmyrzowie
    - education_preschool    : Przedszkole Niepubliczne z oddziałem integracyjnym Chata Wesołego Skrzata
```
</details>

---
