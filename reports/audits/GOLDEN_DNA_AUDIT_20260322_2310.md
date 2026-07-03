# RAPORT W OPARCIU O ASERCJE W PEŁNI SYSTEMOWE DNA - 2026-03-22 23:10

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
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: -0.000, Std: 0.666)
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
  hub_id                : 125

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
<details><summary><b>Massalskiego (891e2eb5027ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Massalskiego
  stop_id               : 739
  h3_index              : 891e2eb5027ffff
  hub_id                : 397

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
<details><summary><b>Okrzei / Zagnańska (891e2eb5c47ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Okrzei / Zagnańska
  stop_id               : 349
  h3_index              : 891e2eb5c47ffff
  hub_id                : 464

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
<details><summary><b>Żytnia (891e2eb5e07ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Żytnia
  stop_id               : 527
  h3_index              : 891e2eb5e07ffff
  hub_id                : 876

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.6583
  local_score_raw       : 1.5438

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 4489941.5812

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 51.2143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6848.5064

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 286.5852

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 59x park_recreation
  > 47x gastronomy
  > 31x personal_services
  > 27x specialized_retail
  > 17x convenience_store
  > 16x health_clinic
  > 13x micro_parcel_locker
  > 10x micro_playground
  > 7x micro_atm
  > 6x education_preschool
  > 6x pharmacy
  > 5x education_high_school
  > 4x bank
  > 4x place_of_worship
  > 4x commercial_zone
  > 3x post_office
  > 3x supermarket
  > 2x culture_theatre
  > 2x business_office
  > 1x police_station
  > 1x government_central
  > 1x university_campus
  > 1x social_support_mops
  > 1x sports_centre
  > 1x car_services

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - culture_theatre        : Miejska Biblioteka Publiczna
    - specialized_retail     : Media Expert
    - gastronomy             : Pierogarnia
    - micro_parcel_locker    : Paczkomat InPost
    - health_clinic          : NZOZ \
    - gastronomy             : Calimero Café
    - micro_atm              : Euronet
    - culture_theatre        : Muszla koncertowa
    - bank                   : Alior Bank
    - specialized_retail     : Baccara
    - personal_services      : Drogeria Natura
    - personal_services      : Perfect
```
</details>
<details><summary><b>Tarnowska (891e2eb5843ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Tarnowska
  stop_id               : 430
  h3_index              : 891e2eb5843ffff
  hub_id                : 705

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.5444
  local_score_raw       : 1.5413

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 9354583.5148

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 37.9286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7710.8641

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 168.0241

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 28x park_recreation
  > 19x personal_services
  > 15x gastronomy
  > 15x convenience_store
  > 11x specialized_retail
  > 10x micro_atm
  > 10x health_clinic
  > 7x government_central
  > 6x pharmacy
  > 6x micro_playground
  > 5x education_high_school
  > 4x education_preschool
  > 3x supermarket
  > 3x micro_parcel_locker
  > 3x commercial_zone
  > 2x social_support_mops
  > 2x bank
  > 2x car_services
  > 1x post_office
  > 1x marketplace
  > 1x university_campus
  > 1x culture_theatre
  > 1x shopping_mall
  > 1x hospital_clinical

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : Euronet
    - government_central     : Urząd Miasta - Szymanowskiego
    - social_support_mops    : Centrum Integracyjno-Rehabilitacyjne
    - micro_atm              : Euronet
    - supermarket            : Netto
    - pharmacy               : Dbam o Zdrowie
    - pharmacy               : Na Żeromskiego
    - pharmacy               : Apteka Derlatka
    - gastronomy             : Plackowa Izba
    - pharmacy               : Gemini
    - convenience_store      : Żabka
    - micro_parcel_locker    : Paczkomat InPost
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Suków Piaskownia (891e2ea7107ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Suków Piaskownia
  stop_id               : 409
  h3_index              : 891e2ea7107ffff
  hub_id                : 679

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.5695
  local_score_raw       : -1.4601

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
<details><summary><b>Łubno (891e2eb037bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Łubno
  stop_id               : 848
  h3_index              : 891e2eb037bffff
  hub_id                : 729

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.4556
  local_score_raw       : -1.5214

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.5000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7388.8165

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 0.3971

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
  hub_id                : 762

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
  hub_id                : 589

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
  hub_id                : 715

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
  hub_id                : 1024

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
<details><summary><b>Muzeum Narodowe (891e2e6b023ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Muzeum Narodowe
  stop_id               : 3417
  h3_index              : 891e2e6b023ffff
  hub_id                : 806

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.9417
  local_score_raw       : 1.8751

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 128252496.8327

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 125.3571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 15897.9656

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 101.8753

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
<details><summary><b>Nowy Kleparz (891e2e6b563ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Nowy Kleparz
  stop_id               : 3444
  h3_index              : 891e2e6b563ffff
  hub_id                : 866

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.8833
  local_score_raw       : 1.8741

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 27195169.9868

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 171.5714

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 15354.3307

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 123.7156

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 39x personal_services
  > 29x gastronomy
  > 22x specialized_retail
  > 21x health_clinic
  > 18x convenience_store
  > 18x park_recreation
  > 10x micro_atm
  > 8x place_of_worship
  > 7x pharmacy
  > 5x micro_playground
  > 5x government_central
  > 4x bank
  > 4x micro_parcel_locker
  > 3x post_office
  > 3x business_office
  > 3x social_support_mops
  > 2x university_campus
  > 2x supermarket
  > 2x education_preschool
  > 2x sports_centre
  > 2x education_high_school
  > 2x commercial_zone
  > 1x hospital_clinical
  > 1x marketplace

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - bank                   : Millennium Bank
    - pharmacy               : Ziko Apteka
    - specialized_retail     : Miss
    - university_campus      : Collegium Medicum Uniwersytetu Jagiellońskiego - Instytut Stomatologii
    - convenience_store      : Carrefour Express
    - supermarket            : Biedronka
    - personal_services      : Bali Beauty House
    - post_office            : Agencja Pocztowa
    - post_office            : Filia Urzędu Pocztowego Kraków 16
    - post_office            : Filia Urzędu Pocztowego Kraków 65
    - business_office        : Tauron Obsługa Klienta
    - personal_services      : Atena
```
</details>
<details><summary><b>Jubilat (891e2e6b393ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Jubilat
  stop_id               : stop_237_31901
  h3_index              : 891e2e6b393ffff
  hub_id                : 444

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.8250
  local_score_raw       : 1.8580

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 22072541.8664

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 138.4286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 16975.3086

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 107.7438

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 58x gastronomy
  > 21x personal_services
  > 18x convenience_store
  > 18x park_recreation
  > 12x specialized_retail
  > 11x micro_atm
  > 10x health_clinic
  > 5x bank
  > 5x culture_theatre
  > 5x government_central
  > 4x business_office
  > 4x pharmacy
  > 4x micro_parcel_locker
  > 3x post_office
  > 3x education_high_school
  > 3x micro_playground
  > 3x place_of_worship
  > 2x sports_centre
  > 1x car_services
  > 1x university_campus
  > 1x supermarket
  > 1x social_support_mops
  > 1x national_stadium
  > 1x hotel_accommodation
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - car_services           : Orlen
    - gastronomy             : Aquarius - restaurant & cocktail bar
    - bank                   : Millennium Bank
    - micro_atm              : Bankomat Millennium
    - micro_atm              : Bankomat Millennium
    - culture_theatre        : Biblioteka Główna
    - micro_atm              : Euronet
    - government_central     : Izba Celna w Krakowie
    - post_office            : Poczta Polska FUP Kraków 1
    - convenience_store      : Delikatesy Kabanosik
    - personal_services      : Pazy Mazy
    - gastronomy             : Hoang-Hai
```
</details>
<details><summary><b>Biprostal (891e2e6b097ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Biprostal
  stop_id               : stop_60_8403
  h3_index              : 891e2e6b097ffff
  hub_id                : 99

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.7666
  local_score_raw       : 1.8375

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 131919303.9750

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 74.5000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 15794.8837

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 371.3376

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 25x gastronomy
  > 23x personal_services
  > 20x convenience_store
  > 16x micro_parcel_locker
  > 13x specialized_retail
  > 13x park_recreation
  > 12x micro_playground
  > 10x micro_atm
  > 9x pharmacy
  > 9x health_clinic
  > 6x education_preschool
  > 5x bank
  > 3x university_campus
  > 3x supermarket
  > 3x place_of_worship
  > 3x education_high_school
  > 2x culture_theatre
  > 2x post_office
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

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Podolany (891e05a090bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Podolany
  stop_id               : 178077
  h3_index              : 891e05a090bffff
  hub_id                : 1012

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.2917
  local_score_raw       : -1.4965

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 1.8485

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 10592.4296

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 3.5764

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x micro_playground

  [WSKAZANE KONKRETNE INSTYTUCJE]
```
</details>
<details><summary><b>Pisary Kasztanowa (891e2e4ce6fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Pisary Kasztanowa
  stop_id               : stop_1214_286001
  h3_index              : 891e2e4ce6fffff
  hub_id                : 985

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.2334
  local_score_raw       : -1.5145

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 2.1429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 4683.6735

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 2.4369

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
  hub_id                : 685

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
  hub_id                : 568

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
  hub_id                : 510

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

---
