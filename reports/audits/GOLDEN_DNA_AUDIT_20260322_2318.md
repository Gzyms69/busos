# RAPORT W OPARCIU O ASERCJE W PEŁNI SYSTEMOWE DNA - 2026-03-22 23:18

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
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: -0.000, Std: 0.595)
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
<details><summary><b>Kielce Główne (891e2eb5e8fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Kielce Główne
  stop_id               : 63552
  h3_index              : 891e2eb5e8fffff
  hub_id                : 264

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 8.0805

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 2489427155.6759

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7038.2883

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 554.7846

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 40x park_recreation
  > 25x gastronomy
  > 20x specialized_retail
  > 18x personal_services
  > 9x micro_parcel_locker
  > 8x convenience_store
  > 8x health_clinic
  > 7x micro_atm
  > 7x commercial_zone
  > 5x bank
  > 5x education_high_school
  > 4x government_central
  > 4x micro_playground
  > 3x pharmacy
  > 3x supermarket
  > 2x business_office
  > 2x shopping_mall
  > 1x national_rail_hub
  > 1x sports_centre
  > 1x police_station
  > 1x education_preschool
  > 1x car_services
  > 1x culture_theatre
  > 1x place_of_worship
  > 1x post_office
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - bank                   : Millennium Bank
    - micro_atm              : Euronet
    - micro_atm              : Euronet
    - national_rail_hub      : Kielce Główne
    - bank                   : Santander
    - personal_services      : Rossmann
    - gastronomy             : Antresola
    - convenience_store      : Livio
    - gastronomy             : Pierogarnia
    - gastronomy             : Jadłodalnia Tempo
    - micro_parcel_locker    : Paczkomat InPost
    - specialized_retail     : Serwis GSM
```
</details>
<details><summary><b>Zagnańsk (891e2eb6133ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Zagnańsk
  stop_id               : 63701
  h3_index              : 891e2eb6133ffff
  hub_id                : 806

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.8861
  local_score_raw       : 3.4814

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 1151255814.4331

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7388.8165

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 54.9464

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 5x industrial_zone
  > 2x education_high_school
  > 1x regional_rail_hub
  > 1x business_office
  > 1x pharmacy
  > 1x post_office
  > 1x government_central
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - regional_rail_hub      : Zagnańsk
    - business_office        : Induset Sp.z o.o. Sp.k.
    - pharmacy               : Farmacja
    - post_office            : Urząd Pocztowy Zagnańsk
    - government_central     : Urząd Gminy Zagnańsk
    - education_high_school  : Zespół Szkoły Podstawowej nr 2 i Przedszkola w Zagnańsku
    - education_high_school  : Zespół Szkół Leśnych w Zagnańsku
    - commercial_zone        : Nadleśnictwo Zagnańsk
```
</details>
<details><summary><b>Czarnowska / Dworzec Autobusowy (891e2eb5ebbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Czarnowska / Dworzec Autobusowy
  stop_id               : 67
  h3_index              : 891e2eb5ebbffff
  hub_id                : 125

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.7722
  local_score_raw       : 2.9677

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 27535302.6376

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 61.7143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7905.2321

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 369.3033

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
<details><summary><b>Grunwaldzka / Mielczarskiego (891e2eb5e13ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Grunwaldzka / Mielczarskiego
  stop_id               : 143
  h3_index              : 891e2eb5e13ffff
  hub_id                : 206

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.6583
  local_score_raw       : 2.8135

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 7546738.5055

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 59.3571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7382.9561

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 671.2792

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 20x specialized_retail
  > 16x personal_services
  > 16x health_clinic
  > 15x gastronomy
  > 15x park_recreation
  > 14x micro_parcel_locker
  > 11x convenience_store
  > 9x micro_playground
  > 5x pharmacy
  > 5x education_high_school
  > 4x micro_atm
  > 4x place_of_worship
  > 4x commercial_zone
  > 3x bank
  > 3x education_preschool
  > 2x government_central
  > 2x post_office
  > 2x car_services
  > 2x supermarket
  > 2x social_support_mops
  > 1x culture_theatre
  > 1x national_rail_hub
  > 1x police_station
  > 1x business_office
  > 1x sports_centre
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - bank                   : Millennium Bank
    - micro_atm              : Euronet
    - culture_theatre        : Miejska Biblioteka Publiczna
    - national_rail_hub      : Kielce Główne
    - bank                   : Santander
    - personal_services      : Rossmann
    - gastronomy             : Antresola
    - convenience_store      : Livio
    - specialized_retail     : Media Expert
    - micro_parcel_locker    : Paczkomat InPost
    - specialized_retail     : Serwis GSM
    - gastronomy             : Bar Turystyczny
```
</details>
<details><summary><b>Urząd Wojewódzki (891e2eb5ea7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Urząd Wojewódzki
  stop_id               : 1042
  h3_index              : 891e2eb5ea7ffff
  hub_id                : 735

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.5444
  local_score_raw       : 2.4137

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 24425454.8411

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 49.8571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 8433.7349

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 269.2026

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

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Transportowców (891e2eb552fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Transportowców
  stop_id               : 1140
  h3_index              : 891e2eb552fffff
  hub_id                : 713

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.5695
  local_score_raw       : -1.1763

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 14047374.9621

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 2.0714

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 1076.6581

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 7.0060

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 5x car_services
  > 4x commercial_zone
  > 3x industrial_zone
  > 2x convenience_store
  > 1x specialized_retail
  > 1x gastronomy
  > 1x park_recreation

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - specialized_retail     : Agata Meble
    - car_services           : Dr. AutoSzyba
    - gastronomy             : Karczma pod Strzechą
    - car_services           : MOL
    - commercial_zone        : Hotel Pod Strzechą
    - car_services           : Orlen
    - car_services           : Stacja paliw Orlen nr 7310
    - car_services           : Makro
```
</details>
<details><summary><b>Pakosz I (891e2ea2db7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Pakosz I
  stop_id               : 367
  h3_index              : 891e2ea2db7ffff
  hub_id                : 501

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.4556
  local_score_raw       : -1.1764

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 567408.6685

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 2.4286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 600.2216

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 283.9320

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 4x commercial_zone
  > 3x gastronomy
  > 3x convenience_store
  > 3x business_office
  > 3x park_recreation
  > 2x car_services
  > 1x micro_parcel_locker
  > 1x national_stadium
  > 1x sports_centre
  > 1x personal_services
  > 1x education_high_school
  > 1x micro_playground
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_parcel_locker    : Paczkomat InPost
    - gastronomy             : Olimpijska
    - convenience_store      : Sklep Gama
    - business_office        : Kwiatek s.c.
    - convenience_store      : Żabka
    - gastronomy             : La Sora
    - car_services           : MORĄG Centrum
    - park_recreation        : Park Baranowski
    - national_stadium       : Stadion Lekkoatletyczny MOSiR
    - sports_centre          : Hala Legionów
    - gastronomy             : La Casa
    - convenience_store      : Odido
```
</details>
<details><summary><b>Żelaznogórska (891e2eb42cbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Żelaznogórska
  stop_id               : 703
  h3_index              : 891e2eb42cbffff
  hub_id                : 859

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.3417
  local_score_raw       : -1.2213

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 7940.8750

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 1.2857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 1076.6581

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 122.0981

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x car_services
  > 1x commercial_zone
  > 1x industrial_zone
  > 1x park_recreation

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - car_services           : Dr. AutoSzyba
```
</details>
<details><summary><b>Żelaznogórska II (891e2eb5537ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Żelaznogórska II
  stop_id               : 1323
  h3_index              : 891e2eb5537ffff
  hub_id                : 861

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.2278
  local_score_raw       : -1.2363

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 43427.1486

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.9286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 1076.6581

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 129.3660

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 2x industrial_zone
  > 2x commercial_zone
  > 1x car_services
  > 1x gastronomy
  > 1x park_recreation

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - car_services           : Dr. AutoSzyba
    - gastronomy             : Karczma pod Strzechą
    - commercial_zone        : Hotel Pod Strzechą
```
</details>
<details><summary><b>Żelaznogórska I (891e2eb5537ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Żelaznogórska I
  stop_id               : 711
  h3_index              : 891e2eb5537ffff
  hub_id                : 860

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.1139
  local_score_raw       : -1.2547

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 160190.8785

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.6429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 1076.6581

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 116.0447

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 2x industrial_zone
  > 2x commercial_zone
  > 1x specialized_retail
  > 1x car_services
  > 1x gastronomy
  > 1x park_recreation

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - specialized_retail     : Agata Meble
    - car_services           : Dr. AutoSzyba
    - gastronomy             : Karczma pod Strzechą
    - commercial_zone        : Hotel Pod Strzechą
```
</details>

---

## KRAKOW
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: 0.000, Std: 0.629)
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
<details><summary><b>Balice Autostrada (891e05b6eafffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Balice Autostrada
  stop_id               : stop_169_22102
  h3_index              : 891e05b6eafffff
  hub_id                : 31

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 8.2984

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 3620085873.4439

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.5714

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 10592.4296

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 7.2237

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x gastronomy
  > 1x business_office
  > 1x industrial_zone
  > 1x commercial_zone
  > 1x park_recreation

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy             : GRILL
    - business_office        : Grupa Wollf
```
</details>
<details><summary><b>Balice Na Lotnisko (891e05b6e2fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Balice Na Lotnisko
  stop_id               : stop_3298_388601
  h3_index              : 891e05b6e2fffff
  hub_id                : 38

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.9417
  local_score_raw       : 5.5755

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 2479910020.4794

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.5000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 10592.4296

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x micro_atm
  > 1x micro_parcel_locker
  > 1x car_services

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : Euronet
    - micro_parcel_locker    : Paczkomat InPost
    - car_services           : Orlen
```
</details>
<details><summary><b>Kraków Airport (891e05b6e67ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Kraków Airport
  stop_id               : stop_1215_286101
  h3_index              : 891e05b6e67ffff
  hub_id                : 552

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.8833
  local_score_raw       : 3.4446

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 1528406618.4088

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 8.2143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 10592.4296

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 3.1735

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 10x gastronomy
  > 5x micro_atm
  > 2x industrial_zone
  > 1x pharmacy
  > 1x convenience_store
  > 1x personal_services
  > 1x government_central
  > 1x specialized_retail
  > 1x sports_centre

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy             : So! Coffee
    - micro_atm              : Euronet
    - micro_atm              : Euronet
    - micro_atm              : Euronet
    - micro_atm              : Euronet
    - pharmacy               : Św. Barbara
    - gastronomy             : Amundsen
    - gastronomy             : Suitcase Bar
    - gastronomy             : Galicya
    - convenience_store      : Premium Food Gate
    - micro_atm              : Euronet
    - personal_services      : Drogeria
```
</details>
<details><summary><b>Kraków Główny (891e2e6b18fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Kraków Główny
  stop_id               : 80416
  h3_index              : 891e2e6b18fffff
  hub_id                : 558

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.8250
  local_score_raw       : 3.3345

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 1276034857.0312

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 10.8571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 18777.7867

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 115.3300

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 107x gastronomy
  > 90x specialized_retail
  > 40x micro_atm
  > 33x personal_services
  > 24x park_recreation
  > 18x convenience_store
  > 9x micro_parcel_locker
  > 8x health_clinic
  > 8x bank
  > 6x education_high_school
  > 5x pharmacy
  > 4x government_central
  > 4x place_of_worship
  > 3x post_office
  > 3x culture_theatre
  > 3x micro_playground
  > 3x business_office
  > 2x police_station
  > 2x supermarket
  > 2x commercial_zone
  > 1x national_rail_hub
  > 1x university_campus
  > 1x shopping_mall

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - national_rail_hub      : Kraków Główny
    - health_clinic          : Małopolski Ośrodek Medycyny Pracy
    - gastronomy             : Kraft Kebab
    - gastronomy             : Łupinka
    - post_office            : Urząd Pocztowy Kraków 5
    - personal_services      : Imperial Barbershop & Academy
    - gastronomy             : Glonojad
    - gastronomy             : Jarema
    - education_high_school  : TEB Technikum Kraków
    - gastronomy             : Bistro Stacja Smaków
    - gastronomy             : Tawerna La Capitana
    - micro_atm              : Euronet
```
</details>
<details><summary><b>Nowy Kleparz (891e2e6b563ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Nowy Kleparz
  stop_id               : stop_50_7105
  h3_index              : 891e2e6b563ffff
  hub_id                : 866

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.7666
  local_score_raw       : 3.2664

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 27195169.9868

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 171.5714

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 15354.3307

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1259.3478

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 36x personal_services
  > 26x gastronomy
  > 19x health_clinic
  > 18x park_recreation
  > 17x specialized_retail
  > 17x convenience_store
  > 8x micro_atm
  > 6x pharmacy
  > 6x place_of_worship
  > 4x bank
  > 4x business_office
  > 3x government_central
  > 3x commercial_zone
  > 3x micro_playground
  > 2x university_campus
  > 2x sports_centre
  > 2x social_support_mops
  > 2x micro_parcel_locker
  > 1x supermarket
  > 1x post_office
  > 1x education_preschool
  > 1x hospital_clinical
  > 1x industrial_zone
  > 1x marketplace

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - bank                   : Millennium Bank
    - pharmacy               : Ziko Apteka
    - specialized_retail     : Miss
    - university_campus      : Collegium Medicum Uniwersytetu Jagiellońskiego - Instytut Stomatologii
    - convenience_store      : Carrefour Express
    - supermarket            : Biedronka
    - post_office            : Filia Urzędu Pocztowego Kraków 65
    - business_office        : Tauron Obsługa Klienta
    - personal_services      : Atena
    - university_campus      : Krakowska Wyższa Szkoła Promocji Zdrowia
    - personal_services      : Marcela
    - specialized_retail     : GPS-y.pl
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>RUDAWA (891e05b6413ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : RUDAWA
  stop_id               : 77735
  h3_index              : 891e05b6413ffff
  hub_id                : 1141

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.2917
  local_score_raw       : -0.7499

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 1626501.5704

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 1.5000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 1381.5607

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 268.8339

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 4x industrial_zone
  > 2x car_services
  > 2x sports_centre
  > 1x convenience_store
  > 1x personal_services
  > 1x micro_parcel_locker
  > 1x health_clinic
  > 1x gastronomy
  > 1x micro_playground
  > 1x park_recreation

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store      : Delikatesy Pokusa
    - car_services           : Mosur
    - car_services           : MOSUR
    - personal_services      : Salon Fryzjerski
    - micro_parcel_locker    : Paczkomat InPost
    - health_clinic          : Ośrodek zdrowia NFZ
    - sports_centre          : Rudawa Tennis Club
    - gastronomy             : Lenartówka
    - micro_playground       : Plac zabaw przy ośrodku zdrowia
```
</details>
<details><summary><b>Bibice Cmentarz (891e2e799b3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Bibice Cmentarz
  stop_id               : stop_1190_278301
  h3_index              : 891e2e799b3ffff
  hub_id                : 78

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.2334
  local_score_raw       : -0.7995

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 2101.4662

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 2.8571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 715.8726

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 66.8578

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 5x park_recreation
  > 1x convenience_store
  > 1x micro_parcel_locker
  > 1x micro_playground

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store      : Avita
    - micro_parcel_locker    : Paczkomat InPost
```
</details>
<details><summary><b>Kocmyrzów Rondo (891e2e61c53ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Kocmyrzów Rondo
  stop_id               : stop_1343_300002
  h3_index              : 891e2e61c53ffff
  hub_id                : 509

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.1750
  local_score_raw       : -0.8056

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 5054203.5672

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.8571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 123.2499

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 342.6126

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 7x personal_services
  > 4x health_clinic
  > 3x specialized_retail
  > 2x pharmacy
  > 2x convenience_store
  > 2x gastronomy
  > 2x supermarket
  > 1x post_office
  > 1x micro_atm
  > 1x micro_parcel_locker
  > 1x bank
  > 1x government_central
  > 1x park_recreation
  > 1x shopping_mall
  > 1x education_high_school
  > 1x micro_playground

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - post_office            : Urząd Pocztowy Kocmyrzów
    - health_clinic          : Nova Dent
    - personal_services      : Studio Viva
    - personal_services      : Justyna
    - pharmacy               : Rodzinna
    - personal_services      : Solarium
    - convenience_store      : Garmażeria
    - personal_services      : Olena Factoria
    - health_clinic          : Centrum Medyczne „Gastro-Medical”
    - micro_parcel_locker    : Paczkomat InPost
    - specialized_retail     : Dream Look Fashion
    - pharmacy               : Apteka Kocmyrzowska
```
</details>
<details><summary><b>Kocmyrzów Biblioteka (891e2e61c77ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Kocmyrzów Biblioteka
  stop_id               : stop_1344_300101
  h3_index              : 891e2e61c77ffff
  hub_id                : 506

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.1167
  local_score_raw       : -0.8384

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 879999.2274

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.8571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 16.4204

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 244.2431

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
  hub_id                : 510

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.0583
  local_score_raw       : -0.8516

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 1.7688

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.8571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 16.4204

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 181.6528

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x education_preschool

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - education_preschool    : Przedszkole Niepubliczne z oddziałem integracyjnym Chata Wesołego Skrzata
```
</details>

---
