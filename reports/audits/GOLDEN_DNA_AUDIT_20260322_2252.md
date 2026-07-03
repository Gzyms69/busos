# RAPORT W OPARCIU O ASERCJE W PEŁNI SYSTEMOWE DNA - 2026-03-22 22:52

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
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: -0.000, Std: 0.684)
     Rozkład Kartek (unikalne Huby): A: 136, A+: 68, B: 204, C: 271, D: 339, F: 339
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
<details><summary><b>Massalskiego (891e2eb5027ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Massalskiego
  stop_id               : 739
  h3_index              : 891e2eb5027ffff
  hub_id                : 989

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.7070

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 15334782.4932

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 18.7143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7920.7921

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 372.1395

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
<details><summary><b>IX Wieków Kielc / Warszawska (891e2eb5ea7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : IX Wieków Kielc / Warszawska
  stop_id               : 1462
  h3_index              : 891e2eb5ea7ffff
  hub_id                : 310

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.9263
  local_score_raw       : 1.6413

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 19528091.5231

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 22.3571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 8625.2528

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 44.3451

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
<details><summary><b>Czarnowska / Dworzec Autobusowy (891e2eb5ebbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Czarnowska / Dworzec Autobusowy
  stop_id               : 67
  h3_index              : 891e2eb5ebbffff
  hub_id                : 885

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.8526
  local_score_raw       : 1.5902

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 14456398.3684

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 30.8571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7812.5000

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 30.7434

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
<details><summary><b>Okrzei / Zagnańska (891e2eb5c47ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Okrzei / Zagnańska
  stop_id               : 349
  h3_index              : 891e2eb5c47ffff
  hub_id                : 581

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.7789
  local_score_raw       : 1.5730

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 17397300.3007

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 15.2143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7820.8614

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 268.1836

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
<details><summary><b>Os. Ślichowice (891e2eb51cbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Os. Ślichowice
  stop_id               : 737
  h3_index              : 891e2eb51cbffff
  hub_id                : 987

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.7052
  local_score_raw       : 1.5400

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 1025860.1913

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 20.3571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 8205.8523

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 230.2689

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

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Wincentów IV (891e2eb1dd3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Wincentów IV
  stop_id               : 1285
  h3_index              : 891e2eb1dd3ffff
  hub_id                : 164

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.3685
  local_score_raw       : -1.4521

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.2857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7388.8165

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 0.0691

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
  hub_id                : 1105

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.2948
  local_score_raw       : -1.4530

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.2143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7388.8165

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 0.2995

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Radomice (891e2ea535bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Radomice
  stop_id               : 1334
  h3_index              : 891e2ea535bffff
  hub_id                : 201

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.2211
  local_score_raw       : -1.4639

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.2183

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.2143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7388.8165

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 0.0688

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x convenience_store

  [WSKAZANE KONKRETNE INSTYTUCJE]
```
</details>
<details><summary><b>Radomice (891e2ea535bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Radomice
  stop_id               : 1335
  h3_index              : 891e2ea535bffff
  hub_id                : 203

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.1474
  local_score_raw       : -1.4661

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.1723

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.2143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7388.8165

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 0.0731

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x convenience_store

  [WSKAZANE KONKRETNE INSTYTUCJE]
```
</details>
<details><summary><b>Żelaznogórska (891e2eb42cbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Żelaznogórska
  stop_id               : 703
  h3_index              : 891e2eb42cbffff
  hub_id                : 950

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.0737
  local_score_raw       : -1.5749

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 1588.8611

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.6429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 1076.6581

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 5.1751

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x car_services
  > 1x commercial_zone
  > 1x industrial_zone
  > 1x park_recreation

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - car_services           : Dr. AutoSzyba
```
</details>

---

## KRAKOW
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: -0.000, Std: 0.674)
     Rozkład Kartek (unikalne Huby): A: 426, A+: 213, B: 639, C: 852, D: 1065, F: 1064
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
<details><summary><b>Dworzec Główny Wschód (891e2e6b18fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Dworzec Główny Wschód
  stop_id               : stop_744_106001
  h3_index              : 891e2e6b18fffff
  hub_id                : 750

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.9122

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 36704223.1797

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 32.6429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 18875.4607

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 58.7590

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 98x gastronomy
  > 91x specialized_retail
  > 40x micro_atm
  > 29x personal_services
  > 16x park_recreation
  > 14x convenience_store
  > 9x micro_parcel_locker
  > 8x bank
  > 7x health_clinic
  > 6x business_office
  > 5x pharmacy
  > 5x education_high_school
  > 5x government_central
  > 4x culture_theatre
  > 4x micro_playground
  > 3x place_of_worship
  > 2x police_station
  > 2x post_office
  > 2x supermarket
  > 2x commercial_zone
  > 1x national_rail_hub
  > 1x shopping_mall
  > 1x sports_centre
  > 1x university_campus

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - national_rail_hub      : Kraków Główny
    - health_clinic          : Małopolski Ośrodek Medycyny Pracy
    - gastronomy             : Kraft Kebab
    - personal_services      : Imperial Barbershop & Academy
    - gastronomy             : Bistro Stacja Smaków
    - gastronomy             : Tawerna La Capitana
    - micro_atm              : Euronet
    - convenience_store      : Żabka
    - gastronomy             : Lunch bar TU
    - gastronomy             : U Szwagra
    - health_clinic          : Centrum Neurologii Klinicznej
    - micro_atm              : Euronet
```
</details>
<details><summary><b>Muzeum Narodowe (891e2e6b023ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Muzeum Narodowe
  stop_id               : stop_1654_314105
  h3_index              : 891e2e6b023ffff
  hub_id                : 1737

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.9765
  local_score_raw       : 1.8825

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 54813795.6548

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 59.4286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 16321.3171

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 13.7209

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
<details><summary><b>Jubilat (891e2e6b393ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Jubilat
  stop_id               : stop_237_31903
  h3_index              : 891e2e6b393ffff
  hub_id                : 1010

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.9530
  local_score_raw       : 1.8472

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 2237065.5455

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 56.3571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 16800.6489

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 68.9265

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
<details><summary><b>Jubilat (891e2e6b393ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Jubilat
  stop_id               : stop_237_31904
  h3_index              : 891e2e6b393ffff
  hub_id                : 1011

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.9296
  local_score_raw       : 1.8226

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 3027754.2590

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 53.4286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 17129.7921

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 49.0867

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 56x gastronomy
  > 23x personal_services
  > 19x convenience_store
  > 18x park_recreation
  > 14x micro_atm
  > 14x specialized_retail
  > 11x health_clinic
  > 6x bank
  > 6x government_central
  > 5x business_office
  > 4x micro_parcel_locker
  > 4x place_of_worship
  > 3x pharmacy
  > 3x education_high_school
  > 3x sports_centre
  > 2x culture_theatre
  > 2x university_campus
  > 2x commercial_zone
  > 1x car_services
  > 1x post_office
  > 1x supermarket
  > 1x marketplace
  > 1x national_stadium
  > 1x hotel_accommodation
  > 1x education_preschool
  > 1x micro_playground

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - car_services           : Orlen
    - gastronomy             : Aquarius - restaurant & cocktail bar
    - bank                   : Millennium Bank
    - micro_atm              : Bankomat Millennium
    - micro_atm              : Bankomat Millennium
    - micro_atm              : Euronet
    - government_central     : Izba Celna w Krakowie
    - post_office            : Poczta Polska FUP Kraków 1
    - convenience_store      : Delikatesy Kabanosik
    - personal_services      : Pazy Mazy
    - gastronomy             : Hoang-Hai
    - gastronomy             : Dalivia
```
</details>
<details><summary><b>AGH / UR (891e2e6b033ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : AGH / UR
  stop_id               : stop_1626_311101
  h3_index              : 891e2e6b033ffff
  hub_id                : 158

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.9061
  local_score_raw       : 1.7590

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 152232321.7054

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 35.7857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 15390.7816

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 22.4142

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 87x park_recreation
  > 81x gastronomy
  > 32x university_campus
  > 20x education_high_school
  > 18x personal_services
  > 15x convenience_store
  > 9x culture_theatre
  > 9x micro_atm
  > 7x micro_parcel_locker
  > 6x micro_playground
  > 5x health_clinic
  > 4x pharmacy
  > 4x place_of_worship
  > 3x specialized_retail
  > 3x hospital_clinical
  > 2x education_preschool
  > 1x post_office
  > 1x business_office
  > 1x bank
  > 1x sports_centre
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - pharmacy               : Dr. Max
    - culture_theatre        : Teatr Groteska
    - gastronomy             : Dynia Resto Bar
    - gastronomy             : Pod Kopytkiem
    - education_high_school  : Ośrodek Szkolno-wychowawczy nr 1
    - convenience_store      : Avita
    - education_high_school  : Inter Lang & Text English and German School
    - pharmacy               : Czysta 5
    - university_campus      : Katedra Patofizjologii Collegium Medicum Uniwersytetu Jagiellońskiego
    - gastronomy             : Karma
    - gastronomy             : Bun Bakery
    - gastronomy             : Spodek
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Lusina Dolna (891e05a6c07ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Lusina Dolna
  stop_id               : stop_508_72202
  h3_index              : 891e05a6c07ffff
  hub_id                : 1422

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.1174
  local_score_raw       : -1.7112

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.6429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 4122.8779

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 2.3367

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
  hub_id                : 3551

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.0939
  local_score_raw       : -1.7386

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 10592.4296

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 0.0005

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Wadów Glinik (891e2e61a67ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Wadów Glinik
  stop_id               : 526
  h3_index              : 891e2e61a67ffff
  hub_id                : 814

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.0704
  local_score_raw       : -1.7454

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.7143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 4715.1277

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 0.7189

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 2x car_services

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - car_services           : Auto Serwis R.Ziomek
    - car_services           : UNI-SERWIS
```
</details>
<details><summary><b>Kocmyrzów Sodfiny (891e2e61893ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Kocmyrzów Sodfiny
  stop_id               : stop_1348_300501
  h3_index              : 891e2e61893ffff
  hub_id                : 1138

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.0470
  local_score_raw       : -1.8277

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 1.3430

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.4286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 16.4204

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 5.8646

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
  hub_id                : 1139

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.0235
  local_score_raw       : -1.9004

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.3069

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.4286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 16.4204

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 4.3607

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x education_preschool

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - education_preschool    : Przedszkole Niepubliczne z oddziałem integracyjnym Chata Wesołego Skrzata
```
</details>

---
