# RAPORT W OPARCIU O ASERCJE W PEŁNI SYSTEMOWE DNA - 2026-03-22 22:58

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
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: 0.000, Std: 0.666)
     Rozkład Kartek (unikalne Huby): A: 88, A+: 44, B: 132, C: 176, D: 219, F: 219
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
| `national_rail_hub` | T0_MEGA_HUB | 1 | 2,042,173,567 |
| `regional_rail_hub` | T1_NATIONAL_MAGNET | 7 | 975,143,169 |
| `exhibition_centre` | T1_NATIONAL_MAGNET | 1 | 282,939,802 |
| `hospital_clinical` | T1_NATIONAL_MAGNET | 14 | 197,348,355 |
| `national_stadium` | T1_NATIONAL_MAGNET | 8 | 186,482,948 |
| `university_campus` | T1_NATIONAL_MAGNET | 39 | 112,189,419 |
| `industrial_zone` | T2_STRATEGIC_HUB | 321 | 18,106,436 |
| `commercial_zone` | T2_STRATEGIC_HUB | 434 | 16,028,092 |
| `shopping_mall` | T2_STRATEGIC_HUB | 20 | 14,074,587 |
| `supermarket` | T2_STRATEGIC_HUB | 121 | 8,923,766 |
| `government_central` | T2_STRATEGIC_HUB | 89 | 8,644,866 |
| `business_office` | T2_STRATEGIC_HUB | 96 | 6,994,144 |
| `student_dormitory` | T2_STRATEGIC_HUB | 1 | 6,807,245 |
| `marketplace` | T3_LOCAL_CORE | 8 | 1,556,275 |
| `education_high_school` | T3_LOCAL_CORE | 130 | 1,449,155 |
| `sports_centre` | T3_LOCAL_CORE | 47 | 1,328,921 |
| `social_support_mops` | T3_LOCAL_CORE | 17 | 949,051 |
| `culture_theatre` | T3_LOCAL_CORE | 41 | 811,450 |
| `health_clinic` | T3_LOCAL_CORE | 226 | 676,096 |
| `car_services` | T4_DAILY_SERVICE | 62 | 114,637 |

### Faza IV: Próbki Pełnego DNA 100% (Zobacz szczegóły POI!)

#### NAJLEPSZE PRZYSTANKI (TOP 5)
<details><summary><b>Czarnowska / Dworzec Autobusowy (891e2eb5ebbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Czarnowska / Dworzec Autobusowy
  stop_id               : 1187
  h3_index              : 891e2eb5ebbffff
  hub_id                : 118

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.6840

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 27535302.6376

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 61.7143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7905.2321

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 45.7950

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
<details><summary><b>Czarnowska / Dworzec Autobusowy (891e2eb5ebbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Czarnowska / Dworzec Autobusowy
  stop_id               : 67
  h3_index              : 891e2eb5ebbffff
  hub_id                : 118

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.6840

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 27535302.6376

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 61.7143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7905.2321

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 45.7950

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
<details><summary><b>Massalskiego (891e2eb5027ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Massalskiego
  stop_id               : 739
  h3_index              : 891e2eb5027ffff
  hub_id                : 356

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.8861
  local_score_raw       : 1.6557

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 13017466.1931

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 30.2143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7901.5725

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 597.4114

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
<details><summary><b>Massalskiego (891e2eb5027ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Massalskiego
  stop_id               : 736
  h3_index              : 891e2eb5027ffff
  hub_id                : 356

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.8861
  local_score_raw       : 1.6557

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 13017466.1931

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 30.2143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7901.5725

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 597.4114

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 35x micro_playground
  > 28x personal_services
  > 15x health_clinic
  > 14x micro_parcel_locker
  > 11x convenience_store
  > 11x gastronomy
  > 9x park_recreation
  > 8x specialized_retail
  > 6x micro_atm
  > 5x supermarket
  > 3x pharmacy
  > 3x car_services
  > 3x commercial_zone
  > 2x post_office
  > 2x education_preschool
  > 2x education_high_school
  > 2x shopping_mall
  > 1x sports_centre
  > 1x bank
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
<details><summary><b>Okrzei / Zagnańska (891e2eb5c47ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Okrzei / Zagnańska
  stop_id               : 349
  h3_index              : 891e2eb5c47ffff
  hub_id                : 453

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.7722
  local_score_raw       : 1.5451

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 27505280.7617

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 29.0714

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7836.4586

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 188.4399

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 14x personal_services
  > 10x health_clinic
  > 9x commercial_zone
  > 7x specialized_retail
  > 7x micro_parcel_locker
  > 7x micro_playground
  > 7x park_recreation
  > 6x education_preschool
  > 5x convenience_store
  > 4x industrial_zone
  > 3x education_high_school
  > 2x business_office
  > 1x gastronomy
  > 1x pharmacy
  > 1x micro_atm
  > 1x car_services
  > 1x supermarket
  > 1x bank
  > 1x place_of_worship

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy             : Żółty Słoń
    - personal_services      : Salon Kosmetyczny Beautenko Olga Butenko
    - specialized_retail     : Kuchnie
    - specialized_retail     : Materace
    - convenience_store      : Żabka
    - specialized_retail     : Kominki Grille
    - personal_services      : Esthetica
    - micro_parcel_locker    : Paczkomat InPost
    - health_clinic          : Moto-med
    - education_preschool    : Przedszkole ABC
    - specialized_retail     : Studio Mebli Kuchennych
    - pharmacy               : Plus
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Wincentów IV (891e2eb1dd3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Wincentów IV
  stop_id               : 1285
  h3_index              : 891e2eb1dd3ffff
  hub_id                : 724

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.3417
  local_score_raw       : -1.5218

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.5000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7388.8165

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 0.3919

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Wincentów IV (891e2eb1dd3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Wincentów IV
  stop_id               : 1284
  h3_index              : 891e2eb1dd3ffff
  hub_id                : 724

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.3417
  local_score_raw       : -1.5218

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.5000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7388.8165

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 0.3919

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Radomice (891e2ea535bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Radomice
  stop_id               : 1335
  h3_index              : 891e2ea535bffff
  hub_id                : 572

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.2278
  local_score_raw       : -1.5425

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.3851

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.4286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7388.8165

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 0.1418

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x convenience_store

  [WSKAZANE KONKRETNE INSTYTUCJE]
```
</details>
<details><summary><b>Radomice (891e2ea535bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Radomice
  stop_id               : 1334
  h3_index              : 891e2ea535bffff
  hub_id                : 572

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.2278
  local_score_raw       : -1.5425

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.3851

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.4286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7388.8165

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 0.1418

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x convenience_store

  [WSKAZANE KONKRETNE INSTYTUCJE]
```
</details>
<details><summary><b>Tumlin (891e2eb6297ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Tumlin
  stop_id               : 63776
  h3_index              : 891e2eb6297ffff
  hub_id                : 680

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.1139
  local_score_raw       : -1.5905

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7388.8165

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 2.0682

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>

---

## KRAKOW
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: 0.000, Std: 0.717)
     Rozkład Kartek (unikalne Huby): A: 172, A+: 86, B: 257, C: 343, D: 428, F: 428
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
| `international_airport` | T0_MEGA_HUB | 1 | 12,861,894,181 |
| `national_rail_hub` | T0_MEGA_HUB | 1 | 2,334,490,607 |
| `regional_rail_hub` | T1_NATIONAL_MAGNET | 15 | 1,096,334,514 |
| `exhibition_centre` | T1_NATIONAL_MAGNET | 1 | 243,920,476 |
| `national_stadium` | T1_NATIONAL_MAGNET | 26 | 221,300,475 |
| `hospital_clinical` | T1_NATIONAL_MAGNET | 31 | 208,658,369 |
| `university_campus` | T1_NATIONAL_MAGNET | 145 | 123,159,373 |
| `student_dormitory` | T2_STRATEGIC_HUB | 1 | 19,706,360 |
| `industrial_zone` | T2_STRATEGIC_HUB | 1125 | 18,330,924 |
| `commercial_zone` | T2_STRATEGIC_HUB | 763 | 16,909,982 |
| `shopping_mall` | T2_STRATEGIC_HUB | 57 | 16,890,111 |
| `logistics_hub` | T2_STRATEGIC_HUB | 8 | 10,686,068 |
| `supermarket` | T2_STRATEGIC_HUB | 345 | 10,438,584 |
| `government_central` | T2_STRATEGIC_HUB | 193 | 9,212,472 |
| `business_office` | T2_STRATEGIC_HUB | 307 | 7,521,675 |
| `marketplace` | T3_LOCAL_CORE | 32 | 1,657,786 |
| `education_high_school` | T3_LOCAL_CORE | 486 | 1,550,352 |
| `sports_centre` | T3_LOCAL_CORE | 329 | 1,210,253 |
| `social_support_mops` | T3_LOCAL_CORE | 78 | 1,051,524 |
| `culture_theatre` | T3_LOCAL_CORE | 178 | 815,248 |

### Faza IV: Próbki Pełnego DNA 100% (Zobacz szczegóły POI!)

#### NAJLEPSZE PRZYSTANKI (TOP 5)
<details><summary><b>Politechnika (891e2e6b183ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Politechnika
  stop_id               : stop_189_7329
  h3_index              : 891e2e6b183ffff
  hub_id                : 1007

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.9019

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 124103603.0334

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 136.4286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 19138.6964

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 20.9797

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
<details><summary><b>Politechnika (891e2e6b183ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Politechnika
  stop_id               : stop_189_7319
  h3_index              : 891e2e6b183ffff
  hub_id                : 1007

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.9019

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 124103603.0334

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 136.4286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 19138.6964

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 20.9797

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 74x gastronomy
  > 61x specialized_retail
  > 26x micro_atm
  > 26x park_recreation
  > 18x personal_services
  > 9x convenience_store
  > 7x micro_parcel_locker
  > 6x bank
  > 5x health_clinic
  > 4x university_campus
  > 4x pharmacy
  > 4x business_office
  > 4x education_high_school
  > 3x place_of_worship
  > 3x government_central
  > 2x post_office
  > 2x supermarket
  > 2x micro_playground
  > 2x commercial_zone
  > 1x national_rail_hub
  > 1x social_support_mops
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
    - personal_services      : Trio Studio
    - micro_atm              : Euronet
    - health_clinic          : Stomatologia - NonStopDent
```
</details>
<details><summary><b>Politechnika (891e2e6b183ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Politechnika
  stop_id               : stop_189_7349
  h3_index              : 891e2e6b183ffff
  hub_id                : 1007

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.9019

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 124103603.0334

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 136.4286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 19138.6964

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 20.9797

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 75x gastronomy
  > 73x specialized_retail
  > 27x micro_atm
  > 26x park_recreation
  > 18x personal_services
  > 10x convenience_store
  > 8x bank
  > 7x micro_parcel_locker
  > 6x health_clinic
  > 4x university_campus
  > 4x pharmacy
  > 4x business_office
  > 4x education_high_school
  > 4x place_of_worship
  > 3x government_central
  > 2x post_office
  > 2x supermarket
  > 2x micro_playground
  > 2x commercial_zone
  > 1x national_rail_hub
  > 1x social_support_mops
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
    - personal_services      : Trio Studio
    - micro_atm              : Euronet
    - micro_atm              : Euronet
```
</details>
<details><summary><b>Politechnika (891e2e6b183ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Politechnika
  stop_id               : stop_189_7339
  h3_index              : 891e2e6b183ffff
  hub_id                : 1007

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.9019

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 124103603.0334

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 136.4286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 19138.6964

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 20.9797

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 75x gastronomy
  > 70x specialized_retail
  > 27x micro_atm
  > 26x park_recreation
  > 18x personal_services
  > 10x convenience_store
  > 7x bank
  > 7x micro_parcel_locker
  > 5x health_clinic
  > 4x university_campus
  > 4x pharmacy
  > 4x business_office
  > 4x education_high_school
  > 3x place_of_worship
  > 3x government_central
  > 2x post_office
  > 2x supermarket
  > 2x micro_playground
  > 2x commercial_zone
  > 1x national_rail_hub
  > 1x social_support_mops
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
    - personal_services      : Trio Studio
    - micro_atm              : Euronet
    - micro_atm              : Euronet
```
</details>
<details><summary><b>Politechnika (891e2e6b183ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Politechnika
  stop_id               : 3453
  h3_index              : 891e2e6b183ffff
  hub_id                : 1007

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.9019

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 124103603.0334

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 136.4286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 19138.6964

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 20.9797

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 74x gastronomy
  > 61x specialized_retail
  > 26x micro_atm
  > 26x park_recreation
  > 18x personal_services
  > 9x convenience_store
  > 7x micro_parcel_locker
  > 6x bank
  > 5x health_clinic
  > 4x university_campus
  > 4x pharmacy
  > 4x business_office
  > 4x education_high_school
  > 3x place_of_worship
  > 3x government_central
  > 2x post_office
  > 2x supermarket
  > 2x micro_playground
  > 2x commercial_zone
  > 1x national_rail_hub
  > 1x social_support_mops
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
    - personal_services      : Trio Studio
    - micro_atm              : Euronet
    - health_clinic          : Stomatologia - NonStopDent
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Lusina Dolna (891e05a6c07ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Lusina Dolna
  stop_id               : stop_508_72202
  h3_index              : 891e05a6c07ffff
  hub_id                : 678

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.1750
  local_score_raw       : -1.5864

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 1.2857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 4122.8779

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 5.2322

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
  hub_id                : 553

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.1167
  local_score_raw       : -1.7049

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0714

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 10592.4296

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 0.0033

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
  hub_id                : 553

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.1167
  local_score_raw       : -1.7049

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0714

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 10592.4296

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 0.0033

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Kocmyrzów Sodfiny (891e2e61893ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Kocmyrzów Sodfiny
  stop_id               : stop_1348_300501
  h3_index              : 891e2e61893ffff
  hub_id                : 498

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.0583
  local_score_raw       : -1.7457

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 1.7688

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.8571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 16.4204

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 9.7192

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
  hub_id                : 498

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.0583
  local_score_raw       : -1.7457

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 1.7688

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.8571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 16.4204

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 9.7192

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x education_preschool

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - education_preschool    : Przedszkole Niepubliczne z oddziałem integracyjnym Chata Wesołego Skrzata
```
</details>

---
