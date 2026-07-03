# RAPORT W OPARCIU O ASERCJE W PEŁNI SYSTEMOWE DNA - 2026-03-23 18:28

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
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: -0.000, Std: 0.685)
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
| `exhibition_centre` | T1_NATIONAL_MAGNET | 1 | 282,939,802 |
| `hospital_clinical` | T1_NATIONAL_MAGNET | 14 | 197,348,355 |
| `national_stadium` | T1_NATIONAL_MAGNET | 8 | 186,482,948 |
| `national_rail_hub` | T0_MEGA_HUB | 1 | 136,144,904 |
| `university_campus` | T1_NATIONAL_MAGNET | 39 | 112,189,419 |
| `regional_rail_hub` | T1_NATIONAL_MAGNET | 7 | 65,009,545 |
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
<details><summary><b>Urząd Wojewódzki (891e2eb5ea3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Urząd Wojewódzki
  stop_id               : 84
  h3_index              : 891e2eb5ea3ffff
  hub_id                : 735

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.6287

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 40835185.2783

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 49.8571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 8433.7349

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 464.2880

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 78x gastronomy
  > 69x specialized_retail
  > 64x personal_services
  > 49x park_recreation
  > 20x bank
  > 19x government_central
  > 17x convenience_store
  > 15x micro_atm
  > 15x commercial_zone
  > 12x micro_parcel_locker
  > 11x health_clinic
  > 9x education_high_school
  > 8x business_office
  > 6x pharmacy
  > 5x shopping_mall
  > 5x supermarket
  > 5x micro_playground
  > 3x post_office
  > 3x place_of_worship
  > 3x culture_theatre
  > 2x sports_centre
  > 2x education_preschool
  > 1x social_support_mops
  > 1x car_services

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - government_central     : Urząd Marszałkowski Województwa Świętokrzyskiego Departament Wdrażania Europejskiego Funduszu Społecznego
    - micro_atm              : Euronet
    - bank                   : mBank
    - bank                   : ING Bank Śląski
    - shopping_mall          : Centrum Rondo
    - micro_atm              : Planet Cash
    - gastronomy             : Jadłodalnia Tempo
    - government_central     : Urząd Marszałkowski Województwa Świętokrzyskiego
    - government_central     : Centrum Powiadamiania Ratunkowego
    - gastronomy             : Meet Me
    - specialized_retail     : Elegancja
    - pharmacy               : Cef@rm 36
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
  local_percentile      : 99.8861
  local_score_raw       : 1.6213

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 50356656.4843

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 61.7143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7905.2321

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 370.7103

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
<details><summary><b>Jaworskiego (891e2eb5dd3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Jaworskiego
  stop_id               : 218
  h3_index              : 891e2eb5dd3ffff
  hub_id                : 239

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.7722
  local_score_raw       : 1.4921

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 32216484.2123

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 31.6429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7475.2551

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 2175.3300

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 13x micro_playground
  > 12x micro_parcel_locker
  > 12x park_recreation
  > 8x convenience_store
  > 7x health_clinic
  > 7x personal_services
  > 4x supermarket
  > 4x car_services
  > 3x gastronomy
  > 2x culture_theatre
  > 2x pharmacy
  > 2x specialized_retail
  > 2x place_of_worship
  > 1x bank
  > 1x micro_atm
  > 1x post_office
  > 1x sports_centre
  > 1x education_high_school
  > 1x commercial_zone
  > 1x university_campus
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store      : Gama
    - culture_theatre        : Miejska Biblioteka Publiczna filia nr 11 w Kielcach
    - culture_theatre        : Miejska Biblioteka Publiczna
    - bank                   : ING Bank Śląski
    - health_clinic          : NZOZ UNIMED
    - supermarket            : Delikatesy Centrum
    - micro_atm              : Euronet
    - pharmacy               : Apteka Derlatka
    - health_clinic          : Gabinet \
    - post_office            : Poczta Polska - UP Kielce 27
    - convenience_store      : Groszek
    - gastronomy             : Pizzeria Felicita
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
  local_score_raw       : 1.4916

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 11247085.0528

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 59.3571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7382.9561

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 686.2866

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
<details><summary><b>Os. Ślichowice (891e2eb51cbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Os. Ślichowice
  stop_id               : 738
  h3_index              : 891e2eb51cbffff
  hub_id                : 496

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.5444
  local_score_raw       : 1.4719

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 8704680.3301

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 30.1429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 8205.8523

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 2055.5167

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 39x micro_playground
  > 13x personal_services
  > 11x micro_parcel_locker
  > 9x convenience_store
  > 8x health_clinic
  > 6x park_recreation
  > 5x gastronomy
  > 2x micro_atm
  > 2x sports_centre
  > 2x supermarket
  > 2x pharmacy
  > 2x specialized_retail
  > 1x post_office
  > 1x education_preschool
  > 1x bank
  > 1x shopping_mall
  > 1x place_of_worship
  > 1x education_high_school
  > 1x industrial_zone
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : Bankomat BZ WBK
    - convenience_store      : Groszek
    - convenience_store      : Żabka
    - convenience_store      : Smaki PRL-u
    - health_clinic          : MoDent
    - sports_centre          : Centrum Sportowe Jurajska Plaza
    - supermarket            : Lewiatan
    - pharmacy               : Apteka Plus
    - pharmacy               : Dom Zdrowia
    - convenience_store      : Żabka
    - convenience_store      : Żabka
    - specialized_retail     : KiK
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Bat. Chłopskich I (891e2eb5467ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Bat. Chłopskich I
  stop_id               : 548
  h3_index              : 891e2eb5467ffff
  hub_id                : 19

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.5695
  local_score_raw       : -1.6704

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 2.9286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 3732.5039

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 109.8731

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
  hub_id                : 762

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.4556
  local_score_raw       : -1.8034

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
  hub_id                : 352

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.3417
  local_score_raw       : -1.9661

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
  hub_id                : 729

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.2278
  local_score_raw       : -1.9909

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
  hub_id                : 679

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.1139
  local_score_raw       : -2.0347

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
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: -0.000, Std: 0.726)
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
| `international_airport` | T0_MEGA_HUB | 1 | 857,459,612 |
| `exhibition_centre` | T1_NATIONAL_MAGNET | 1 | 243,920,476 |
| `national_stadium` | T1_NATIONAL_MAGNET | 26 | 221,300,475 |
| `hospital_clinical` | T1_NATIONAL_MAGNET | 31 | 208,658,369 |
| `national_rail_hub` | T0_MEGA_HUB | 1 | 155,632,707 |
| `university_campus` | T1_NATIONAL_MAGNET | 145 | 123,159,373 |
| `regional_rail_hub` | T1_NATIONAL_MAGNET | 15 | 73,088,968 |
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
<details><summary><b>Nowy Kleparz (891e2e6b563ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Nowy Kleparz
  stop_id               : stop_50_7186
  h3_index              : 891e2e6b563ffff
  hub_id                : 866

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.9031

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 130437918.1205

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 171.5714

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 15354.3307

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1691.0667

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
<details><summary><b>Jubilat (891e2e6b393ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Jubilat
  stop_id               : stop_237_31902
  h3_index              : 891e2e6b393ffff
  hub_id                : 444

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.9417
  local_score_raw       : 1.8501

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 72073905.1023

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 138.4286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 16975.3086

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1359.0597

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 49x gastronomy
  > 23x personal_services
  > 17x convenience_store
  > 14x park_recreation
  > 12x micro_atm
  > 11x specialized_retail
  > 10x health_clinic
  > 5x business_office
  > 5x government_central
  > 5x micro_playground
  > 4x bank
  > 4x culture_theatre
  > 4x pharmacy
  > 4x education_high_school
  > 4x micro_parcel_locker
  > 2x post_office
  > 2x place_of_worship
  > 1x car_services
  > 1x university_campus
  > 1x supermarket
  > 1x sports_centre
  > 1x marketplace
  > 1x national_stadium
  > 1x hotel_accommodation
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - car_services           : Orlen
    - gastronomy             : Aquarius - restaurant & cocktail bar
    - bank                   : Millennium Bank
    - micro_atm              : Bankomat Millennium
    - micro_atm              : Bankomat Millennium
    - culture_theatre        : Biblioteka Kraków Filia 26
    - culture_theatre        : Biblioteka Główna
    - micro_atm              : Euronet
    - government_central     : Izba Celna w Krakowie
    - post_office            : Poczta Polska FUP Kraków 1
    - convenience_store      : Delikatesy Kabanosik
    - personal_services      : Pazy Mazy
```
</details>
<details><summary><b>Politechnika (891e2e6b183ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Politechnika
  stop_id               : stop_189_7319
  h3_index              : 891e2e6b183ffff
  hub_id                : 1024

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.8833
  local_score_raw       : 1.8498

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 129422579.9377

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 136.4286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 19138.6964

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 350.7118

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
<details><summary><b>Plac Inwalidów (891e2e6b0a3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Plac Inwalidów
  stop_id               : stop_193_7929
  h3_index              : 891e2e6b0a3ffff
  hub_id                : 992

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.8250
  local_score_raw       : 1.8346

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 130475823.0460

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 149.5000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 14159.2920

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 2428.6790

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 50x gastronomy
  > 30x personal_services
  > 18x convenience_store
  > 13x education_high_school
  > 13x health_clinic
  > 11x micro_playground
  > 10x park_recreation
  > 9x specialized_retail
  > 6x government_central
  > 6x place_of_worship
  > 5x micro_atm
  > 5x business_office
  > 5x education_preschool
  > 4x university_campus
  > 2x culture_theatre
  > 2x bank
  > 2x micro_parcel_locker
  > 2x police_station
  > 1x supermarket
  > 1x post_office
  > 1x social_support_mops
  > 1x pharmacy
  > 1x industrial_zone
  > 1x hospital_clinical

  [WSKAZANE KONKRETNE INSTYTUCJE]
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
    - gastronomy             : Piwnice Pałacu Pokutyńskich
```
</details>
<details><summary><b>Muzeum Narodowe (891e2e6b02bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Muzeum Narodowe
  stop_id               : stop_1654_314104
  h3_index              : 891e2e6b02bffff
  hub_id                : 806

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.7666
  local_score_raw       : 1.8216

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 215305508.2197

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 125.3571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 15897.9656

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1180.8783

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 49x gastronomy
  > 22x park_recreation
  > 18x personal_services
  > 17x convenience_store
  > 14x micro_atm
  > 14x specialized_retail
  > 13x university_campus
  > 10x education_high_school
  > 10x health_clinic
  > 9x micro_parcel_locker
  > 6x business_office
  > 6x bank
  > 5x culture_theatre
  > 5x government_central
  > 4x micro_playground
  > 3x pharmacy
  > 3x place_of_worship
  > 3x sports_centre
  > 2x commercial_zone
  > 1x car_services
  > 1x post_office
  > 1x supermarket
  > 1x hospital_clinical
  > 1x hotel_accommodation
  > 1x education_preschool

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - car_services           : Orlen
    - university_campus      : Wydział Filozofii Uniwersytetu Jagiellońskiego
    - gastronomy             : Pod Kopytkiem
    - university_campus      : Ośrodek Informacji i Promocji Uniwersytetu Jagiellońskiego
    - business_office        : Redakcja miesięcznika Alma Mater
    - bank                   : Millennium Bank
    - micro_atm              : Bankomat Millennium
    - micro_atm              : Bankomat Millennium
    - culture_theatre        : Biblioteka Kraków Filia 25
    - micro_atm              : Euronet
    - government_central     : Izba Celna w Krakowie
    - post_office            : Poczta Polska FUP Kraków 1
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Pisary Kasztanowa (891e2e4ce6fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Pisary Kasztanowa
  stop_id               : stop_1214_286001
  h3_index              : 891e2e4ce6fffff
  hub_id                : 985

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.2917
  local_score_raw       : -1.6748

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 2.1429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 4683.6735

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 55.6548

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Wola Luborzycka Skrzyżowanie (891e2e602a3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Wola Luborzycka Skrzyżowanie
  stop_id               : stop_2052_328402
  h3_index              : 891e2e602a3ffff
  hub_id                : 1562

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.2334
  local_score_raw       : -1.7222

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 1.1429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 4750.0000

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 114.9221

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Oczyszczalnia Ścieków ”Kujawy” (891e2e68d83ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Oczyszczalnia Ścieków ”Kujawy”
  stop_id               : 2025
  h3_index              : 891e2e68d83ffff
  hub_id                : 880

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.1750
  local_score_raw       : -1.7244

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
  stop_id               : stop_508_72202
  h3_index              : 891e05a6c07ffff
  hub_id                : 685

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.1167
  local_score_raw       : -1.8236

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
  hub_id                : 568

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.0583
  local_score_raw       : -1.9743

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

---
