# RAPORT W OPARCIU O ASERCJE W PEŁNI SYSTEMOWE DNA - 2026-03-23 22:03

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
Przedziały Kwantyli: od 0.02% do 100.00%
[✅ SUCCESS] Percentyle krajowe objęły zbiór i nie uległy ściśnięciu statystycznemu.
```
---

## KIELCE
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: 0.000, Std: 0.678)
     Rozkład Kartek (unikalne Huby): A: 93, A+: 47, B: 140, C: 187, D: 233, F: 232
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
<details><summary><b>Żytnia I (891e2eb5e07ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Żytnia I
  stop_id               : 1041
  h3_index              : 891e2eb5e07ffff
  hub_id                : 33

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.6450

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 6822867.0008

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 69.5000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6849.3151

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 775.7768

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
<details><summary><b>Czarnowska / Dworzec Autobusowy (891e2eb5ebbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Czarnowska / Dworzec Autobusowy
  stop_id               : 1187
  h3_index              : 891e2eb5ebbffff
  hub_id                : 468

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.8927
  local_score_raw       : 1.6255

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 12172890.0684

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 61.7143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7905.2321

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 331.3659

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 51x park_recreation
  > 48x gastronomy
  > 39x personal_services
  > 37x specialized_retail
  > 12x micro_atm
  > 10x convenience_store
  > 10x health_clinic
  > 9x bank
  > 9x micro_parcel_locker
  > 9x commercial_zone
  > 7x government_central
  > 7x education_high_school
  > 6x shopping_mall
  > 5x business_office
  > 4x pharmacy
  > 4x supermarket
  > 4x post_office
  > 3x micro_playground
  > 2x culture_theatre
  > 2x place_of_worship
  > 1x national_rail_hub
  > 1x sports_centre
  > 1x police_station
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
<details><summary><b>Grunwaldzka / Mielczarskiego (891e2eb5e13ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Grunwaldzka / Mielczarskiego
  stop_id               : 144
  h3_index              : 891e2eb5e13ffff
  hub_id                : 678

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.7854
  local_score_raw       : 1.5400

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 3323484.7779

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 59.3571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7382.9561

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 642.2202

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
<details><summary><b>Os. Ślichowice (891e2eb51cbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Os. Ślichowice
  stop_id               : 737
  h3_index              : 891e2eb51cbffff
  hub_id                : 134

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.6781
  local_score_raw       : 1.4802

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 3274145.0997

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 30.1429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 8205.8523

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1931.2483

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 41x micro_playground
  > 17x personal_services
  > 13x micro_parcel_locker
  > 10x convenience_store
  > 9x health_clinic
  > 9x gastronomy
  > 7x park_recreation
  > 5x specialized_retail
  > 4x micro_atm
  > 3x pharmacy
  > 3x supermarket
  > 2x sports_centre
  > 2x post_office
  > 2x commercial_zone
  > 1x education_preschool
  > 1x bank
  > 1x shopping_mall
  > 1x place_of_worship
  > 1x education_high_school
  > 1x car_services
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : Bankomat Cash4You
    - micro_atm              : Bankomat BZ WBK
    - convenience_store      : Groszek
    - pharmacy               : Dbam o Zdrowie
    - convenience_store      : Żabka
    - convenience_store      : Smaki PRL-u
    - health_clinic          : MoDent
    - sports_centre          : Centrum Sportowe Jurajska Plaza
    - specialized_retail     : RTV Euro AGD
    - post_office            : Urząd Pocztowy Kielce 28
    - supermarket            : Lewiatan
    - pharmacy               : Apteka Plus
```
</details>
<details><summary><b>Massalskiego (891e2eb5027ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Massalskiego
  stop_id               : 739
  h3_index              : 891e2eb5027ffff
  hub_id                : 558

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.5708
  local_score_raw       : 1.4686

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 4307959.4135

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 30.2143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7901.5725

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1745.9728

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 31x micro_playground
  > 26x personal_services
  > 15x health_clinic
  > 15x micro_parcel_locker
  > 12x convenience_store
  > 11x gastronomy
  > 11x park_recreation
  > 8x specialized_retail
  > 6x micro_atm
  > 5x supermarket
  > 3x pharmacy
  > 3x car_services
  > 3x commercial_zone
  > 2x post_office
  > 2x education_preschool
  > 2x shopping_mall
  > 1x sports_centre
  > 1x bank
  > 1x education_high_school
  > 1x place_of_worship

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : Bankomat Cash4You
    - micro_atm              : Bankomat BZ WBK
    - specialized_retail     : JYSK
    - specialized_retail     : Neonet
    - supermarket            : Biedronka
    - convenience_store      : Groszek
    - pharmacy               : Dbam o Zdrowie
    - convenience_store      : Żabka
    - health_clinic          : Centrum Medyczne Omega
    - health_clinic          : Dar Medica Ośrodek Rehabilitacji
    - convenience_store      : Smaki PRL-u
    - health_clinic          : MoDent
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Łubno II (891e2eb0227ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Łubno II
  stop_id               : 844
  h3_index              : 891e2eb0227ffff
  hub_id                : 438

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.5365
  local_score_raw       : -1.7003

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.2143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7388.8165

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 53.4527

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
  hub_id                : 129

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.4292
  local_score_raw       : -1.8095

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
  hub_id                : 752

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.3219
  local_score_raw       : -1.9705

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
  stop_id               : 849
  h3_index              : 891e2eb037bffff
  hub_id                : 61

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.2146
  local_score_raw       : -1.9969

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
  hub_id                : 247

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.1073
  local_score_raw       : -2.0396

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
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: -0.000, Std: 0.704)
     Rozkład Kartek (unikalne Huby): A: 207, A+: 104, B: 310, C: 414, D: 517, F: 517
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
<details><summary><b>Plac Inwalidów (891e2e6b0a3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Plac Inwalidów
  stop_id               : 3428
  h3_index              : 891e2e6b0a3ffff
  hub_id                : 962

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.7352

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 16531103.0368

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 125.6429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 14285.7143

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1712.1473

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 84x park_recreation
  > 54x gastronomy
  > 32x personal_services
  > 18x convenience_store
  > 17x university_campus
  > 12x education_high_school
  > 12x health_clinic
  > 9x micro_playground
  > 8x specialized_retail
  > 7x micro_atm
  > 6x government_central
  > 6x place_of_worship
  > 5x business_office
  > 3x culture_theatre
  > 2x pharmacy
  > 2x post_office
  > 2x bank
  > 2x education_preschool
  > 2x micro_parcel_locker
  > 2x police_station
  > 1x supermarket
  > 1x social_support_mops
  > 1x industrial_zone
  > 1x hospital_clinical
  > 1x commercial_zone

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
<details><summary><b>Biprostal (891e2e6b097ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Biprostal
  stop_id               : stop_60_8401
  h3_index              : 891e2e6b097ffff
  hub_id                : 4

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.9517
  local_score_raw       : 1.6866

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 27093314.8365

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 74.5000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 15794.8837

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 2938.6475

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 28x gastronomy
  > 25x personal_services
  > 19x convenience_store
  > 16x micro_parcel_locker
  > 16x park_recreation
  > 13x specialized_retail
  > 11x micro_playground
  > 9x micro_atm
  > 9x pharmacy
  > 9x health_clinic
  > 6x education_preschool
  > 5x bank
  > 5x education_high_school
  > 3x supermarket
  > 3x place_of_worship
  > 2x post_office
  > 2x business_office
  > 2x university_campus
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
<details><summary><b>Politechnika (891e2e6b19bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Politechnika
  stop_id               : stop_51_7306
  h3_index              : 891e2e6b19bffff
  hub_id                : 1893

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.9033
  local_score_raw       : 1.6556

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 18026126.3061

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 136.4286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 19138.6964

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 253.5397

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 75x gastronomy
  > 61x specialized_retail
  > 25x micro_atm
  > 25x park_recreation
  > 24x personal_services
  > 12x convenience_store
  > 7x health_clinic
  > 7x micro_parcel_locker
  > 6x bank
  > 5x place_of_worship
  > 4x university_campus
  > 4x pharmacy
  > 4x business_office
  > 4x micro_playground
  > 4x education_high_school
  > 3x government_central
  > 3x commercial_zone
  > 2x post_office
  > 2x supermarket
  > 2x social_support_mops
  > 1x national_rail_hub
  > 1x police_station
  > 1x marketplace
  > 1x shopping_mall
  > 1x culture_theatre

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - national_rail_hub      : Kraków Główny
    - bank                   : Millennium Bank
    - gastronomy             : Kraft Kebab
    - gastronomy             : Łupinka
    - police_station         : Komisariat Policji I w Krakowie
    - university_campus      : Collegium Medicum Uniwersytetu Jagiellońskiego - Instytut Stomatologii
    - post_office            : Urząd Pocztowy Kraków 5
    - personal_services      : Imperial Barbershop & Academy
    - pharmacy               : Hygieia
    - gastronomy             : U Kolejarzy
    - personal_services      : Trio Studio
    - micro_atm              : Euronet
```
</details>
<details><summary><b>Jubilat (891e2e6b393ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Jubilat
  stop_id               : stop_237_31903
  h3_index              : 891e2e6b393ffff
  hub_id                : 1452

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.8550
  local_score_raw       : 1.6099

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 8161967.4588

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 109.7857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 17057.2706

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 843.0813

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 56x gastronomy
  > 23x personal_services
  > 18x convenience_store
  > 16x park_recreation
  > 13x micro_atm
  > 13x specialized_retail
  > 11x health_clinic
  > 6x bank
  > 5x business_office
  > 5x government_central
  > 4x university_campus
  > 4x education_high_school
  > 4x place_of_worship
  > 3x pharmacy
  > 3x culture_theatre
  > 3x micro_parcel_locker
  > 3x sports_centre
  > 2x commercial_zone
  > 2x micro_playground
  > 1x car_services
  > 1x post_office
  > 1x supermarket
  > 1x social_support_mops
  > 1x national_stadium
  > 1x hotel_accommodation
  > 1x education_preschool

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - car_services           : Orlen
    - university_campus      : Ośrodek Informacji i Promocji Uniwersytetu Jagiellońskiego
    - gastronomy             : Aquarius - restaurant & cocktail bar
    - business_office        : Redakcja miesięcznika Alma Mater
    - bank                   : Millennium Bank
    - micro_atm              : Bankomat Millennium
    - micro_atm              : Bankomat Millennium
    - micro_atm              : Euronet
    - government_central     : Izba Celna w Krakowie
    - post_office            : Poczta Polska FUP Kraków 1
    - convenience_store      : Delikatesy Kabanosik
    - personal_services      : Pazy Mazy
```
</details>
<details><summary><b>Czarnowiejska (891e2e6b0abffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Czarnowiejska
  stop_id               : 2230
  h3_index              : 891e2e6b0abffff
  hub_id                : 1644

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.8067
  local_score_raw       : 1.5747

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 40774591.8086

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 72.7857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 14319.0688

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1188.9524

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 69x gastronomy
  > 59x park_recreation
  > 33x university_campus
  > 22x personal_services
  > 18x convenience_store
  > 11x education_high_school
  > 8x micro_atm
  > 7x health_clinic
  > 6x culture_theatre
  > 6x specialized_retail
  > 4x pharmacy
  > 4x business_office
  > 4x micro_playground
  > 2x bank
  > 2x hospital_clinical
  > 2x place_of_worship
  > 2x micro_parcel_locker
  > 1x post_office
  > 1x education_preschool
  > 1x government_central
  > 1x industrial_zone
  > 1x police_station
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - culture_theatre        : Teatr Groteska
    - convenience_store      : Avita
    - education_high_school  : Inter Lang & Text English and German School
    - pharmacy               : Czysta 5
    - university_campus      : Katedra Patofizjologii Collegium Medicum Uniwersytetu Jagiellońskiego
    - culture_theatre        : Biblioteka Kraków Filia 22
    - gastronomy             : Bun Bakery
    - gastronomy             : Spodek
    - gastronomy             : Urban
    - gastronomy             : Damka
    - gastronomy             : Veganic
    - education_high_school  : Szkoła podstawowa z oddziałem dwujęzycznym im. Piotra Michałowskiego
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Oczyszczalnia Ścieków ”Kujawy” (891e2e68d8bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Oczyszczalnia Ścieków ”Kujawy”
  stop_id               : 2026
  h3_index              : 891e2e68d8bffff
  hub_id                : 1289

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.2417
  local_score_raw       : -1.8254

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
  hub_id                : 427

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.1933
  local_score_raw       : -1.9077

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
<details><summary><b>KRAKÓW NOWA HUTA (891e2e61a6fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : KRAKÓW NOWA HUTA
  stop_id               : 178406
  h3_index              : 891e2e61a6fffff
  hub_id                : 1612

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.1450
  local_score_raw       : -2.0920

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
  hub_id                : 1876

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.0967
  local_score_raw       : -2.5898

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
<details><summary><b>Kocmyrzów Sodfiny (891e2e61c2fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Kocmyrzów Sodfiny
  stop_id               : stop_1348_300502
  h3_index              : 891e2e61c2fffff
  hub_id                : 1731

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.0483
  local_score_raw       : -2.9718

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 11172.4772

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.8571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 16.4204

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 176.2858

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x education_preschool

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - education_preschool    : Przedszkole Niepubliczne z oddziałem integracyjnym Chata Wesołego Skrzata
```
</details>

---
