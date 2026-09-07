# RAPORT W OPARCIU O ASERCJE W PEŁNI SYSTEMOWE DNA - 2026-09-07 23:32

---
## PODSUMOWANIE RYGORYSTYCZNE DLA POLSKI
```text
Przepróbkowanych Miast    : 30
Krytyczne Nulle / Inf     : 0 FAILURES
Łączna Walidacja Populacji: 16,436,792 osób (Siatka 250m GUS)
Ilość Transakcji RCN Pkt  : 1,104,389 aktów notarialnych
Obiekty Infr. OSM BAZA    : 10,640,807 zweryfikowanych geometrii
```
---


## WALIDACJA ZRZUTU KRAJOWEGO (NATIONAL STITCHING)
```text
Liczba Przystanków w Kraju: 60,265
Użytych Miast do Z-Score: 30
Przedziały Kwantyli: od 0.00% do 100.00%
[✅ SUCCESS] Percentyle krajowe objęły zbiór i nie uległy ściśnięciu statystycznemu.
```
---

## BIALYSTOK
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: -0.000, Std: 0.717)
     Rozkład Kartek (unikalne Huby): A: 99, A+: 50, B: 149, C: 198, D: 248, F: 247
[👥 BAZA LUDNOŚCI GUS] ❌ OSTRZEŻENIE DEMOGRAFICZNE: Odchylenie 31.3%. GUS: 380,838 vs Baza: 290,000
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
[✅]  H3 Res 8 Grid 100% Valid (1,004 komórek, 78 pustyń transportowych)
```

### Faza 0: Statystyki ogólne
- **Populacja Miasta:** 380,838 (GUS Grid)
- **Transakcje RCN:** 34,402

### Faza III: Top 20 POI (Miasto)

| Kategoria | Tier | Ilość w Mieście | Wartość Punktowa (W) |
|---|---|---|---|
| `national_rail_hub` | T0_MEGA_HUB | 1 | 34,866,932 |
| `national_stadium` | T1_NATIONAL_MAGNET | 2 | 22,252,840 |
| `hospital_clinical` | T1_NATIONAL_MAGNET | 10 | 18,418,418 |
| `university_campus` | T1_NATIONAL_MAGNET | 31 | 12,281,847 |
| `regional_rail_hub` | T1_NATIONAL_MAGNET | 4 | 6,750,241 |
| `industrial_zone` | T2_STRATEGIC_HUB | 239 | 4,936,188 |
| `commercial_zone` | T2_STRATEGIC_HUB | 57 | 4,730,676 |
| `shopping_mall` | T2_STRATEGIC_HUB | 37 | 3,873,495 |
| `logistics_hub` | T2_STRATEGIC_HUB | 1 | 3,633,389 |
| `student_dormitory` | T2_STRATEGIC_HUB | 9 | 3,408,633 |
| `supermarket` | T2_STRATEGIC_HUB | 145 | 2,505,093 |
| `government_central` | T2_STRATEGIC_HUB | 104 | 2,386,440 |
| `business_office` | T2_STRATEGIC_HUB | 160 | 2,119,069 |
| `marketplace` | T3_LOCAL_CORE | 12 | 806,656 |
| `education_high_school` | T3_LOCAL_CORE | 136 | 784,670 |
| `sports_centre` | T3_LOCAL_CORE | 51 | 538,452 |
| `social_support_mops` | T3_LOCAL_CORE | 42 | 515,538 |
| `culture_theatre` | T3_LOCAL_CORE | 42 | 408,990 |
| `health_clinic` | T3_LOCAL_CORE | 205 | 352,695 |
| `education_preschool` | T4_DAILY_SERVICE | 168 | 105,360 |

### Faza IV: Próbki Pełnego DNA 100% (Zobacz szczegóły POI!)

#### NAJLEPSZE PRZYSTANKI (TOP 5)
<details><summary><b>pl. Niepodległości/Kościół Św. Rocha(211) (891f513348fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : pl. Niepodległości/Kościół Św. Rocha(211)
  stop_id               : 211
  h3_index              : 891f513348fffff
  hub_id                : 94
  hub_name              : al. Piłsudskiego/pl. Niepodległości (301)
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 97.0133
  local_percentile      : 100.0000
  stop_local_score_raw  : 1.0800
  local_score_raw       : 1.5238
  hub_grade             : A+
  hub_percentile        : 100.0000

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 3350349.5674
  infra_score           : 5219866.0412
  stop_raw_gravity      : 1894818.6109
  stop_entropy          : 0.7682
  hub_infra_score       : 5219866.0412

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 17.0000
  transit_freq          : 67.8571
  stop_routes_count     : 5
  stop_routes           : 2, 4, 5, 7, 10
  stop_hub_share        : 0.2505
  hub_departures_h      : 67.8571
  hub_routes            : 1, 2, 4, 5, 7, 9, 10, 12, 18, 21, 24, 100, 103, 107

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 7359.3074
  market_val            : 7440.0000
  stop_liquidity        : 2394
  hub_market_val        : 7440.0000

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 452.2606
  pop_val               : 703.4008
  hub_pop_val           : 703.4008

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 25x personal_services
  > 21x gastronomy
  > 19x specialized_retail
  > 12x micro_playground
  > 12x convenience_store
  > 11x micro_parcel_locker
  > 7x health_clinic
  > 7x education_high_school
  > 6x pharmacy
  > 6x government_central
  > 6x place_of_worship
  > 5x micro_atm
  > 5x bank
  > 4x education_preschool
  > 3x university_campus
  > 3x social_support_mops
  > 3x park_recreation
  > 2x shopping_mall
  > 2x commercial_zone
  > 1x post_office
  > 1x supermarket
  > 1x car_services
  > 1x business_office
  > 1x police_station

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy             : Włoska Sztuka
    - micro_atm              : PKO BP
    - micro_atm              : Euronet
    - specialized_retail     : Madom - salon meblowy
    - post_office            : Urząd Pocztowy Białystok 4
    - personal_services      : Rossmann
    - pharmacy               : Apteka Społeczna
    - bank                   : BNP Paribas Polska
    - personal_services      : Avangarda
    - gastronomy             : Piu'di Pizza
    - bank                   : Crédit Agricole
    - pharmacy               : Apteka Społeczna
```
</details>
<details><summary><b>Wiejska/Politechnika (529) (891f51330dbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Wiejska/Politechnika (529)
  stop_id               : 529
  h3_index              : 891f51330dbffff
  hub_id                : 15
  hub_name              : Wiejska/Politechnika (529)
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 97.9904
  local_percentile      : 99.8991
  stop_local_score_raw  : 1.1484
  local_score_raw       : 1.4470
  hub_grade             : A+
  hub_percentile        : 99.8991

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 2029748.9235
  infra_score           : 5368019.2667
  stop_raw_gravity      : 1296261.2519
  stop_entropy          : 0.5658
  hub_infra_score       : 5368019.2667

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 18.0714
  transit_freq          : 43.5714
  stop_routes_count     : 7
  stop_routes           : 3, 10, 11, 16, 23, 26, 104
  stop_hub_share        : 0.4148
  hub_departures_h      : 43.5714
  hub_routes            : 3, 8, 10, 11, 16, 17, 23, 26, 27, 104

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 8071.2788
  market_val            : 7793.3985
  stop_liquidity        : 1046
  hub_market_val        : 7793.3985

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 671.8067
  pop_val               : 1092.3836
  hub_pop_val           : 1092.3836

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 34x micro_playground
  > 9x gastronomy
  > 8x convenience_store
  > 7x health_clinic
  > 5x pharmacy
  > 5x micro_parcel_locker
  > 5x education_preschool
  > 4x micro_atm
  > 4x supermarket
  > 3x specialized_retail
  > 3x university_campus
  > 2x bank
  > 2x personal_services
  > 2x sports_centre
  > 1x business_office
  > 1x place_of_worship
  > 1x car_services
  > 1x industrial_zone
  > 1x education_high_school

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy             : Bar BIBI
    - supermarket            : Biedronka
    - convenience_store      : Lewiatan Express
    - gastronomy             : Savona
    - convenience_store      : Owoce i warzywa
    - health_clinic          : Dentysta
    - pharmacy               : Społeczna
    - gastronomy             : Naleśnikarnia Retrospekcja
    - gastronomy             : Express Bar
    - gastronomy             : Kebab
    - health_clinic          : Przychodnia medyczna
    - health_clinic          : Dentysta
```
</details>
<details><summary><b>al. Piłsudskiego/Częstochowska (302) (891f51334b3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : al. Piłsudskiego/Częstochowska (302)
  stop_id               : 302
  h3_index              : 891f51334b3ffff
  hub_id                : 231
  hub_name              : al. Piłsudskiego/Częstochowska (302)
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 98.7279
  local_percentile      : 99.7982
  stop_local_score_raw  : 1.1814
  local_score_raw       : 1.4429
  hub_grade             : A+
  hub_percentile        : 99.7982

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 959126.9306
  infra_score           : 3054495.4475
  stop_raw_gravity      : 332083.9133
  stop_entropy          : 1.8882
  hub_infra_score       : 3054495.4475

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 26.0714
  transit_freq          : 52.1429
  stop_routes_count     : 9
  stop_routes           : 1, 9, 12, 15, 18, 21, 24, 100, 103
  stop_hub_share        : 0.5000
  hub_departures_h      : 52.1429
  hub_routes            : 1, 9, 12, 15, 18, 21, 24, 100, 103

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 7584.3346
  market_val            : 7584.3346
  stop_liquidity        : 2576
  hub_market_val        : 7584.3346

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 606.6010
  pop_val               : 959.4414
  hub_pop_val           : 959.4414

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 50x gastronomy
  > 30x personal_services
  > 17x micro_playground
  > 17x specialized_retail
  > 15x convenience_store
  > 12x health_clinic
  > 12x micro_parcel_locker
  > 8x micro_atm
  > 8x pharmacy
  > 8x bank
  > 7x government_central
  > 5x university_campus
  > 4x social_support_mops
  > 4x education_preschool
  > 3x supermarket
  > 3x business_office
  > 3x education_high_school
  > 3x park_recreation
  > 2x post_office
  > 2x place_of_worship
  > 2x sports_centre
  > 2x police_station

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : Bankomat Millennium
    - gastronomy             : Sioux
    - gastronomy             : Patio
    - convenience_store      : Lewiatan
    - micro_atm              : PKO BP
    - micro_atm              : Euronet
    - post_office            : Urząd Pocztowy Białystok 4
    - personal_services      : Rossmann
    - pharmacy               : Apteka Społeczna
    - bank                   : BNP Paribas Polska
    - personal_services      : Avangarda
    - gastronomy             : Piu'di Pizza
```
</details>
<details><summary><b>Wiejska/UWB(528) (891f51330cbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Wiejska/UWB(528)
  stop_id               : 528
  h3_index              : 891f51330cbffff
  hub_id                : 374
  hub_name              : Wiejska/UWB (528)
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 98.9491
  local_percentile      : 99.6973
  stop_local_score_raw  : 1.1979
  local_score_raw       : 1.4247
  hub_grade             : A+
  hub_percentile        : 99.6973

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 3572083.0012
  infra_score           : 7094787.8854
  stop_raw_gravity      : 2579924.1950
  stop_entropy          : 0.3846
  hub_infra_score       : 7094787.8854

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 18.0714
  transit_freq          : 35.9286
  stop_routes_count     : 7
  stop_routes           : 3, 10, 11, 16, 23, 26, 104
  stop_hub_share        : 0.5030
  hub_departures_h      : 35.9286
  hub_routes            : 3, 10, 11, 16, 23, 26, 104

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 8370.0441
  market_val            : 8314.6067
  stop_liquidity        : 914
  hub_market_val        : 8314.6067

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 586.3433
  pop_val               : 968.3730
  hub_pop_val           : 968.3730

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 29x micro_playground
  > 7x gastronomy
  > 6x convenience_store
  > 5x health_clinic
  > 4x pharmacy
  > 4x micro_parcel_locker
  > 3x micro_atm
  > 3x specialized_retail
  > 3x university_campus
  > 2x bank
  > 2x education_preschool
  > 2x personal_services
  > 2x social_support_mops
  > 1x place_of_worship
  > 1x supermarket
  > 1x sports_centre

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy             : Bar BIBI
    - gastronomy             : Savona
    - convenience_store      : Owoce i warzywa
    - health_clinic          : Dentysta
    - pharmacy               : Społeczna
    - gastronomy             : Naleśnikarnia Retrospekcja
    - gastronomy             : Express Bar
    - health_clinic          : Przychodnia medyczna
    - health_clinic          : Dentysta
    - pharmacy               : Pogodna
    - pharmacy               : Malwa
    - pharmacy               : Cef@Rm 36
```
</details>
<details><summary><b>Kolejowa/Dworzec PKP(596) (891f51334d7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Kolejowa/Dworzec PKP(596)
  stop_id               : 596
  h3_index              : 891f51334d7ffff
  hub_id                : 112
  hub_name              : Kolejowa/Dworzec PKP (159)
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 98.1379
  local_percentile      : 99.5964
  stop_local_score_raw  : 1.1584
  local_score_raw       : 1.4199
  hub_grade             : A+
  hub_percentile        : 99.5964

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 2598198.2873
  infra_score           : 10834477.0309
  stop_raw_gravity      : 885822.1847
  stop_entropy          : 1.9331
  hub_infra_score       : 10834477.0309

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 28.1429
  transit_freq          : 58.4286
  stop_routes_count     : 10
  stop_routes           : 1, 2, 4, 11, 14, 18, 21, 29, 103, 142
  stop_hub_share        : 0.4817
  hub_departures_h      : 58.4286
  hub_routes            : 1, 2, 4, 10, 11, 14, 18, 21, 29, 103, 142

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 7163.4275
  market_val            : 7157.0496
  stop_liquidity        : 1412
  hub_market_val        : 7157.0496

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 230.4515
  pop_val               : 323.1736
  hub_pop_val           : 323.1736

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 12x specialized_retail
  > 11x micro_parcel_locker
  > 9x gastronomy
  > 9x convenience_store
  > 6x health_clinic
  > 6x shopping_mall
  > 5x micro_atm
  > 5x social_support_mops
  > 5x commercial_zone
  > 4x pharmacy
  > 4x education_preschool
  > 3x bank
  > 3x car_services
  > 3x university_campus
  > 3x personal_services
  > 3x government_central
  > 3x micro_playground
  > 2x business_office
  > 1x supermarket
  > 1x regional_rail_hub
  > 1x post_office
  > 1x place_of_worship
  > 1x education_high_school
  > 1x park_recreation
  > 1x marketplace

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : PKO
    - bank                   : Bank Millennium
    - gastronomy             : Bar Okrąglak
    - convenience_store      : Żabka
    - specialized_retail     : Madom - salon meblowy
    - bank                   : Santander
    - car_services           : Serwis blacharsko-lakierniczy
    - supermarket            : Biedronka
    - micro_atm              : SBR Bank
    - micro_atm              : Euronet
    - bank                   : Bank Pekao
    - convenience_store      : Lewiatan
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Krasne I L11/P12 DW676 (891f51ad443ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Krasne I L11/P12 DW676
  stop_id               : 28
  h3_index              : 891f51ad443ffff
  hub_id                : 879
  hub_name              : Krasne I L11/P12 DW676
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : D
  grade                 : F
  stop_percentile       : 28.0236
  local_percentile      : 0.4541
  stop_local_score_raw  : -0.2798
  local_score_raw       : -1.6245
  hub_grade             : F
  hub_percentile        : 0.4541

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 771864.1960
  infra_score           : 0.0000
  stop_raw_gravity      : 465410.1168
  stop_entropy          : 0.6585
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6772.3274
  market_val            : 6811.5942
  stop_liquidity        : 56
  hub_market_val        : 6811.5942

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 257.6308
  pop_val               : 0.0000
  hub_pop_val           : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Ryboły 67 (891f5121443ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Ryboły 67
  stop_id               : 496
  h3_index              : 891f5121443ffff
  hub_id                : 514
  hub_name              : Ryboły 67
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : B
  grade                 : F
  stop_percentile       : 84.8451
  local_percentile      : 0.4541
  stop_local_score_raw  : 0.6988
  local_score_raw       : -1.6245
  hub_grade             : F
  hub_percentile        : 0.4541

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 1503354.6059
  infra_score           : 0.0000
  stop_raw_gravity      : 643037.8412
  stop_entropy          : 1.3379
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 8.8571
  transit_freq          : 0.0000
  stop_routes_count     : 6
  stop_routes           : 20, 26, 27, 102, 122, 132
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6640.8269
  market_val            : 6811.5942
  stop_liquidity        : 490
  hub_market_val        : 6811.5942

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 349.6191
  pop_val               : 0.0000
  hub_pop_val           : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Krasne II L15/P16 DW 676 (891f51af37bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Krasne II L15/P16 DW 676
  stop_id               : 26
  h3_index              : 891f51af37bffff
  hub_id                : 545
  hub_name              : Krasne II L15/P16 DW 676
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : D
  grade                 : F
  stop_percentile       : 28.3555
  local_percentile      : 0.4541
  stop_local_score_raw  : -0.2782
  local_score_raw       : -1.6245
  hub_grade             : F
  hub_percentile        : 0.4541

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 923337.9154
  infra_score           : 0.0000
  stop_raw_gravity      : 475804.3861
  stop_entropy          : 0.9406
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 5757.3428
  market_val            : 6811.5942
  stop_liquidity        : 122
  hub_market_val        : 6811.5942

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 447.9854
  pop_val               : 0.0000
  hub_pop_val           : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Choroszcz/Rynek 11 Listopada (2156) (891f5106063ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Choroszcz/Rynek 11 Listopada (2156)
  stop_id               : 2156
  h3_index              : 891f5106063ffff
  hub_id                : 187
  hub_name              : Choroszcz/Rynek 11 Listopada (856)
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.0553
  local_percentile      : 0.2018
  stop_local_score_raw  : -2.5688
  local_score_raw       : -1.9973
  hub_grade             : F
  hub_percentile        : 0.2018

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 179697.2465
  infra_score           : 1351219.0472
  stop_raw_gravity      : 121140.3252
  stop_entropy          : 0.4834
  hub_infra_score       : 1351219.0472

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 3.4286
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 3.4286
  hub_routes            : 103

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 101.6202
  market_val            : 101.6202
  stop_liquidity        : 1
  hub_market_val        : 101.6202

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 43.6849
  pop_val               : 333.1801
  hub_pop_val           : 333.1801

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 3x place_of_worship
  > 2x convenience_store
  > 2x education_preschool
  > 1x pharmacy
  > 1x government_central
  > 1x business_office
  > 1x micro_parcel_locker
  > 1x police_station
  > 1x health_clinic
  > 1x bank
  > 1x specialized_retail
  > 1x education_high_school

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store      : Chorten
    - pharmacy               : Tas
    - government_central     : Urząd Miejski w Choroszczy
    - business_office        : Telewizja Kablowa TVK-NET
    - place_of_worship       : Kaplica pw. Matki Bożej Anielskiej
    - micro_parcel_locker    : Paczkomat InPost
    - education_preschool    : Żłobek Samorządowy nr 1 w Choroszczy
    - police_station         : Posterunek Policji
    - health_clinic          : Przychodnia Lekarska Medicus
    - place_of_worship       : Kościół pw. Świętego Jana Chrzciciela i Świętego Szczepana Męczennika
    - bank                   : Bank Spółdzielczy
    - place_of_worship       : Cerkiew Prawosławna pw. Opieki Matki Boskiej w Choroszczy
```
</details>
<details><summary><b>Choroszcz/Dominikańska (939) (891f51063d3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Choroszcz/Dominikańska (939)
  stop_id               : 939
  h3_index              : 891f51063d3ffff
  hub_id                : 20
  hub_name              : Choroszcz/Zastawie (935)
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.2028
  local_percentile      : 0.1009
  stop_local_score_raw  : -2.1215
  local_score_raw       : -2.1214
  hub_grade             : F
  hub_percentile        : 0.1009

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 101972.6993
  infra_score           : 303090.6110
  stop_raw_gravity      : 54425.5187
  stop_entropy          : 0.8736
  hub_infra_score       : 303090.6110

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 1.7143
  transit_freq          : 3.4286
  stop_routes_count     : 1
  stop_routes           : 103
  stop_hub_share        : 0.5000
  hub_departures_h      : 3.4286
  hub_routes            : 103

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 101.6202
  market_val            : 101.6202
  stop_liquidity        : 2
  hub_market_val        : 101.6202

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 110.7674
  pop_val               : 250.3782
  hub_pop_val           : 250.3782

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 2x convenience_store
  > 2x place_of_worship
  > 1x government_central
  > 1x micro_parcel_locker
  > 1x bank

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store      : Chorten
    - government_central     : Urząd Miejski w Choroszczy
    - place_of_worship       : Kaplica pw. Matki Bożej Anielskiej
    - micro_parcel_locker    : Paczkomat InPost
    - place_of_worship       : Kościół pw. Świętego Jana Chrzciciela i Świętego Szczepana Męczennika
    - bank                   : Bank Spółdzielczy
```
</details>

---

## BYDGOSZCZ
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: 0.000, Std: 0.558)
     Rozkład Kartek (unikalne Huby): A: 65, A+: 33, B: 98, C: 130, D: 162, F: 162
[👥 BAZA LUDNOŚCI GUS] ✅ DEMOGRAFIA OK (Odchylenie zaledwie 18.8%)
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
[✅]  H3 Res 8 Grid 100% Valid (1,518 komórek, 191 pustyń transportowych)
```

### Faza 0: Statystyki ogólne
- **Populacja Miasta:** 403,938 (GUS Grid)
- **Transakcje RCN:** 11,410

### Faza III: Top 20 POI (Miasto)

| Kategoria | Tier | Ilość w Mieście | Wartość Punktowa (W) |
|---|---|---|---|
| `international_airport` | T0_MEGA_HUB | 1 | 202,656,690 |
| `national_rail_hub` | T0_MEGA_HUB | 1 | 35,261,027 |
| `national_stadium` | T1_NATIONAL_MAGNET | 4 | 22,695,566 |
| `hospital_clinical` | T1_NATIONAL_MAGNET | 18 | 20,547,646 |
| `university_campus` | T1_NATIONAL_MAGNET | 43 | 17,340,801 |
| `regional_rail_hub` | T1_NATIONAL_MAGNET | 8 | 6,715,975 |
| `industrial_zone` | T2_STRATEGIC_HUB | 1210 | 4,052,651 |
| `commercial_zone` | T2_STRATEGIC_HUB | 318 | 3,757,419 |
| `shopping_mall` | T2_STRATEGIC_HUB | 25 | 3,394,975 |
| `logistics_hub` | T2_STRATEGIC_HUB | 4 | 3,290,598 |
| `supermarket` | T2_STRATEGIC_HUB | 148 | 2,608,138 |
| `government_central` | T2_STRATEGIC_HUB | 78 | 2,503,335 |
| `business_office` | T2_STRATEGIC_HUB | 45 | 2,064,942 |
| `education_high_school` | T3_LOCAL_CORE | 157 | 799,543 |
| `marketplace` | T3_LOCAL_CORE | 13 | 704,383 |
| `sports_centre` | T3_LOCAL_CORE | 121 | 634,310 |
| `social_support_mops` | T3_LOCAL_CORE | 28 | 624,949 |
| `culture_theatre` | T3_LOCAL_CORE | 39 | 473,733 |
| `health_clinic` | T3_LOCAL_CORE | 143 | 432,573 |
| `education_preschool` | T4_DAILY_SERVICE | 111 | 132,505 |

### Faza IV: Próbki Pełnego DNA 100% (Zobacz szczegóły POI!)

#### NAJLEPSZE PRZYSTANKI (TOP 5)
<details><summary><b>Zbożowy Rynek (891f0b3294bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Zbożowy Rynek
  stop_id               : 10097
  h3_index              : 891f0b3294bffff
  hub_id                : 270
  hub_name              : Zbożowy Rynek
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 96.9672
  local_percentile      : 100.0000
  stop_local_score_raw  : 1.2504
  local_score_raw       : 1.8331
  hub_grade             : A+
  hub_percentile        : 100.0000

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 6341707.9665
  infra_score           : 19832705.9586
  stop_raw_gravity      : 3331110.3992
  stop_entropy          : 0.9038
  hub_infra_score       : 19832705.9586

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 8.9286
  transit_freq          : 56.5000
  stop_routes_count     : 3
  stop_routes           : 2, 9, 11
  stop_hub_share        : 0.1580
  hub_departures_h      : 56.5000
  hub_routes            : 2, 9, 11, 51, 52, 55, 58, 59, 60, 61, 64, 76, 80, 99

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 4268.1240
  market_val            : 4268.1240
  stop_liquidity        : 0
  hub_market_val        : 4268.1240

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 194.7935
  pop_val               : 615.6162
  hub_pop_val           : 615.6162

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 62x gastronomy
  > 16x park_recreation
  > 16x commercial_zone
  > 10x bank
  > 9x university_campus
  > 8x convenience_store
  > 7x micro_parcel_locker
  > 6x micro_atm
  > 6x government_central
  > 6x micro_playground
  > 5x specialized_retail
  > 5x culture_theatre
  > 4x post_office
  > 3x social_support_mops
  > 3x place_of_worship
  > 2x personal_services
  > 2x sports_centre
  > 2x industrial_zone
  > 2x education_preschool
  > 1x pharmacy
  > 1x supermarket
  > 1x shopping_mall
  > 1x car_services
  > 1x education_high_school
  > 1x hospital_clinical
  > 1x health_clinic

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy             : Bistro pod Papugami
    - micro_atm              : Bankomat PKO
    - gastronomy             : Karramba
    - gastronomy             : Bobby Burger
    - gastronomy             : Sphinx
    - gastronomy             : Cadillac Bar
    - micro_atm              : PKO BP
    - specialized_retail     : Meble używane
    - bank                   : Pocztowy
    - pharmacy               : Dbam o Zdrowie
    - gastronomy             : Sowa
    - gastronomy             : XOXO Bydgoszcz
```
</details>
<details><summary><b>Wojska Polskiego - Boya-Żeleńskiego (891f0b3761bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Wojska Polskiego - Boya-Żeleńskiego
  stop_id               : 10044
  h3_index              : 891f0b3761bffff
  hub_id                : 161
  hub_name              : Wojska Polskiego - Boya-Żeleńskiego
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 96.3934
  local_percentile      : 99.8462
  stop_local_score_raw  : 1.2292
  local_score_raw       : 1.6572
  hub_grade             : A+
  hub_percentile        : 99.8462

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 1527866.1263
  infra_score           : 5596688.6101
  stop_raw_gravity      : 583651.5168
  stop_entropy          : 1.6178
  hub_infra_score       : 5596688.6101

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 8.7143
  transit_freq          : 36.4286
  stop_routes_count     : 3
  stop_routes           : 2, 9, 11
  stop_hub_share        : 0.2392
  hub_departures_h      : 36.4286
  hub_routes            : 2, 9, 11, 53, 56, 68

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 4268.1240
  market_val            : 4268.1240
  stop_liquidity        : 0
  hub_market_val        : 4268.1240

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 1153.5920
  pop_val               : 3445.8233
  hub_pop_val           : 3445.8233

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 13x micro_playground
  > 8x micro_atm
  > 7x micro_parcel_locker
  > 6x park_recreation
  > 4x gastronomy
  > 4x pharmacy
  > 4x education_preschool
  > 3x convenience_store
  > 3x industrial_zone
  > 2x car_services
  > 2x health_clinic
  > 2x bank
  > 2x education_high_school
  > 1x supermarket
  > 1x police_station
  > 1x marketplace
  > 1x personal_services
  > 1x specialized_retail
  > 1x commercial_zone
  > 1x sports_centre
  > 1x place_of_worship
  > 1x university_campus

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : Bankomat Cash4You
    - micro_atm              : Bankomat BZ WBK
    - car_services           : Transoil
    - supermarket            : Eurospar
    - police_station         : Komisariat Policji Bydgoszcz Wyżyny
    - convenience_store      : Żabka
    - gastronomy             : NOVA Sushi
    - bank                   : Santander
    - micro_parcel_locker    : Paczkomat InPost
    - micro_parcel_locker    : Paczkomat InPost
    - micro_parcel_locker    : Paczkomat InPost
    - pharmacy               : Apteka Dbam O Zdrowie
```
</details>
<details><summary><b>Szarych Szeregów (891f0b3762bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Szarych Szeregów
  stop_id               : 11085
  h3_index              : 891f0b3762bffff
  hub_id                : 538
  hub_name              : Szarych Szeregów
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A
  grade                 : A+
  stop_percentile       : 90.5738
  local_percentile      : 99.6923
  stop_local_score_raw  : 0.7407
  local_score_raw       : 1.6567
  hub_grade             : A+
  hub_percentile        : 99.6923

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 1795662.8211
  infra_score           : 6226802.4977
  stop_raw_gravity      : 718834.2912
  stop_entropy          : 1.4980
  hub_infra_score       : 6226802.4977

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 3.0714
  transit_freq          : 36.0000
  stop_routes_count     : 2
  stop_routes           : 9, 11
  stop_hub_share        : 0.0853
  hub_departures_h      : 36.0000
  hub_routes            : 2, 4, 7, 8, 9, 11, 53

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 4268.1240
  market_val            : 4268.1240
  stop_liquidity        : 0
  hub_market_val        : 4268.1240

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 748.2850
  pop_val               : 3170.1582
  hub_pop_val           : 3170.1582

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 16x micro_playground
  > 9x micro_parcel_locker
  > 6x supermarket
  > 6x pharmacy
  > 6x park_recreation
  > 5x convenience_store
  > 5x health_clinic
  > 5x education_preschool
  > 4x commercial_zone
  > 3x gastronomy
  > 3x car_services
  > 3x micro_atm
  > 3x education_high_school
  > 2x bank
  > 2x government_central
  > 2x personal_services
  > 1x shopping_mall
  > 1x post_office
  > 1x sports_centre
  > 1x marketplace

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy             : McDonald's
    - car_services           : Shell
    - car_services           : Circle K
    - supermarket            : Kaufland
    - convenience_store      : Żabka
    - supermarket            : Biedronka
    - shopping_mall          : Hermes
    - convenience_store      : Żabka
    - bank                   : Alior Bank
    - bank                   : Crédit Agricole
    - supermarket            : Stokrotka
    - gastronomy             : Pakman
```
</details>
<details><summary><b>Zbożowy Rynek (891f0b3294bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Zbożowy Rynek
  stop_id               : 10063
  h3_index              : 891f0b3294bffff
  hub_id                : 73
  hub_name              : Zbożowy Rynek
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 96.5574
  local_percentile      : 99.5385
  stop_local_score_raw  : 1.2367
  local_score_raw       : 1.6103
  hub_grade             : A+
  hub_percentile        : 99.5385

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 3980404.3218
  infra_score           : 12478578.2285
  stop_raw_gravity      : 1659184.9739
  stop_entropy          : 1.3990
  hub_infra_score       : 12478578.2285

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 8.8571
  transit_freq          : 35.2857
  stop_routes_count     : 3
  stop_routes           : 51, 56, 58
  stop_hub_share        : 0.2510
  hub_departures_h      : 35.2857
  hub_routes            : 51, 52, 55, 56, 58, 59, 60

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 4268.1240
  market_val            : 4268.1240
  stop_liquidity        : 0
  hub_market_val        : 4268.1240

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 323.6437
  pop_val               : 816.9053
  hub_pop_val           : 816.9053

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 68x gastronomy
  > 22x park_recreation
  > 12x commercial_zone
  > 10x micro_atm
  > 10x micro_playground
  > 9x specialized_retail
  > 9x government_central
  > 9x bank
  > 8x convenience_store
  > 8x university_campus
  > 5x place_of_worship
  > 4x culture_theatre
  > 4x personal_services
  > 4x post_office
  > 3x social_support_mops
  > 3x micro_parcel_locker
  > 3x education_preschool
  > 2x pharmacy
  > 2x supermarket
  > 2x education_high_school
  > 1x car_services
  > 1x hospital_clinical
  > 1x sports_centre
  > 1x health_clinic

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : Pekao Sa
    - gastronomy             : Bistro pod Papugami
    - micro_atm              : Bankomat PKO
    - gastronomy             : Karramba
    - gastronomy             : Bobby Burger
    - gastronomy             : Sphinx
    - gastronomy             : Cadillac Bar
    - micro_atm              : PKO BP
    - specialized_retail     : Meble używane
    - pharmacy               : Dbam o Zdrowie
    - gastronomy             : Gramofon
    - gastronomy             : Medea
```
</details>
<details><summary><b>Wyżyny (891f0b3760fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Wyżyny
  stop_id               : 10048
  h3_index              : 891f0b3760fffff
  hub_id                : 107
  hub_name              : Wyżyny
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 97.7869
  local_percentile      : 99.3846
  stop_local_score_raw  : 1.3077
  local_score_raw       : 1.5736
  hub_grade             : A+
  hub_percentile        : 99.3846

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 3486055.1542
  infra_score           : 13201038.6512
  stop_raw_gravity      : 1549554.8870
  stop_entropy          : 1.2497
  hub_infra_score       : 13201038.6512

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 8.7143
  transit_freq          : 23.5714
  stop_routes_count     : 3
  stop_routes           : 2, 9, 11
  stop_hub_share        : 0.3697
  hub_departures_h      : 23.5714
  hub_routes            : 2, 9, 11, 53

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 4268.1240
  market_val            : 4268.1240
  stop_liquidity        : 0
  hub_market_val        : 4268.1240

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 937.6293
  pop_val               : 3620.9946
  hub_pop_val           : 3620.9946

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 18x micro_playground
  > 8x micro_parcel_locker
  > 7x park_recreation
  > 6x micro_atm
  > 5x pharmacy
  > 5x education_preschool
  > 4x car_services
  > 4x supermarket
  > 4x health_clinic
  > 3x gastronomy
  > 3x convenience_store
  > 3x personal_services
  > 3x education_high_school
  > 2x sports_centre
  > 1x bank
  > 1x culture_theatre
  > 1x place_of_worship
  > 1x university_campus
  > 1x government_central
  > 1x marketplace
  > 1x social_support_mops
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy             : McDonald's
    - car_services           : Shell
    - car_services           : Circle K
    - micro_atm              : Bankomat BZ WBK
    - car_services           : Transoil
    - supermarket            : Eurospar
    - supermarket            : Kaufland
    - convenience_store      : Żabka
    - supermarket            : Biedronka
    - bank                   : Santander
    - personal_services      : Rossmann
    - micro_parcel_locker    : Paczkomat InPost
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Strzelce Dolne I (891f56db20fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Strzelce Dolne I
  stop_id               : 13246
  h3_index              : 891f56db20fffff
  hub_id                : 171
  hub_name              : Strzelce Dolne I
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.7377
  local_percentile      : 0.7692
  stop_local_score_raw  : -1.8149
  local_score_raw       : -1.8025
  hub_grade             : F
  hub_percentile        : 0.7692

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.2857
  transit_freq          : 0.2857
  stop_routes_count     : 1
  stop_routes           : 97
  stop_hub_share        : 1.0000
  hub_departures_h      : 0.2857
  hub_routes            : 97

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 4268.1240
  market_val            : 4268.1240
  stop_liquidity        : 0
  hub_market_val        : 4268.1240

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 49.0000
  pop_val               : 49.0000
  hub_pop_val           : 49.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Zamczysko - Pętla (891f0bad943ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Zamczysko - Pętla
  stop_id               : 8161
  h3_index              : 891f0bad943ffff
  hub_id                : 63
  hub_name              : Zamczysko - Pętla
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.6557
  local_percentile      : 0.6154
  stop_local_score_raw  : -1.8582
  local_score_raw       : -1.8236
  hub_grade             : F
  hub_percentile        : 0.6154

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 4268.1240
  market_val            : 4268.1240
  stop_liquidity        : 0
  hub_market_val        : 4268.1240

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 140.0000
  pop_val               : 140.0000
  hub_pop_val           : 140.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Chełmszczonka (891f56db063ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Chełmszczonka
  stop_id               : 13245
  h3_index              : 891f56db063ffff
  hub_id                : 559
  hub_name              : Chełmszczonka
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.4918
  local_percentile      : 0.4615
  stop_local_score_raw  : -1.9058
  local_score_raw       : -1.8875
  hub_grade             : F
  hub_percentile        : 0.4615

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.2857
  transit_freq          : 0.2857
  stop_routes_count     : 1
  stop_routes           : 97
  stop_hub_share        : 1.0000
  hub_departures_h      : 0.2857
  hub_routes            : 97

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 4268.1240
  market_val            : 4268.1240
  stop_liquidity        : 0
  hub_market_val        : 4268.1240

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 17.0000
  pop_val               : 17.0000
  hub_pop_val           : 17.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Wyzwolenia - Brzegowa (891f56d9657ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Wyzwolenia - Brzegowa
  stop_id               : 8158
  h3_index              : 891f56d9657ffff
  hub_id                : 69
  hub_name              : Wyzwolenia - Brzegowa
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.1639
  local_percentile      : 0.3077
  stop_local_score_raw  : -1.9970
  local_score_raw       : -1.8933
  hub_grade             : F
  hub_percentile        : 0.3077

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 4268.1240
  market_val            : 4268.1240
  stop_liquidity        : 0
  hub_market_val        : 4268.1240

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 28.6216
  pop_val               : 60.0000
  hub_pop_val           : 60.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Osielsko - Wybudowanie (891f0bace1bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Osielsko - Wybudowanie
  stop_id               : 13250
  h3_index              : 891f0bace1bffff
  hub_id                : 385
  hub_name              : Osielsko - Wybudowanie
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.0820
  local_percentile      : 0.1538
  stop_local_score_raw  : -2.7566
  local_score_raw       : -2.5319
  hub_grade             : F
  hub_percentile        : 0.1538

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 2085004.1287
  infra_score           : 2150752.6823
  stop_raw_gravity      : 2085004.1287
  stop_entropy          : -0.0000
  hub_infra_score       : 2150752.6823

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.5714
  transit_freq          : 0.5714
  stop_routes_count     : 1
  stop_routes           : 41
  stop_hub_share        : 1.0000
  hub_departures_h      : 0.5714
  hub_routes            : 41

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 170.2997
  market_val            : 170.2997
  stop_liquidity        : 9
  hub_market_val        : 170.2997

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 14.7761
  pop_val               : 15.3376
  hub_pop_val           : 15.3376

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 5x industrial_zone
  > 1x gastronomy
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy             : Gazdówka
    - industrial_zone        : Vitfoss - pasze
    - industrial_zone        : Stalco
    - industrial_zone        : AKO
```
</details>

---

## CZESTOCHOWA
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ⚠️ Z-Score ODD DIST (Mean: 0.000, Std: 0.428)
     Rozkład Kartek (unikalne Huby): A: 44, A+: 23, B: 66, C: 89, D: 110, F: 110
[👥 BAZA LUDNOŚCI GUS] ✅ DEMOGRAFIA OK (Odchylenie zaledwie 14.7%)
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
[✅]  H3 Res 8 Grid 100% Valid (431 komórek, 202 pustyń transportowych)
```

### Faza 0: Statystyki ogólne
- **Populacja Miasta:** 240,937 (GUS Grid)
- **Transakcje RCN:** 10,835

### Faza III: Top 20 POI (Miasto)

| Kategoria | Tier | Ilość w Mieście | Wartość Punktowa (W) |
|---|---|---|---|
| `national_rail_hub` | T0_MEGA_HUB | 1 | 33,269,519 |
| `national_stadium` | T1_NATIONAL_MAGNET | 5 | 20,647,949 |
| `hospital_clinical` | T1_NATIONAL_MAGNET | 8 | 18,445,958 |
| `university_campus` | T1_NATIONAL_MAGNET | 11 | 17,705,736 |
| `regional_rail_hub` | T1_NATIONAL_MAGNET | 3 | 6,483,388 |
| `industrial_zone` | T2_STRATEGIC_HUB | 164 | 4,808,708 |
| `commercial_zone` | T2_STRATEGIC_HUB | 43 | 4,270,410 |
| `shopping_mall` | T2_STRATEGIC_HUB | 17 | 3,778,804 |
| `government_central` | T2_STRATEGIC_HUB | 29 | 2,693,133 |
| `supermarket` | T2_STRATEGIC_HUB | 80 | 2,488,112 |
| `business_office` | T2_STRATEGIC_HUB | 40 | 2,195,887 |
| `education_high_school` | T3_LOCAL_CORE | 94 | 765,658 |
| `sports_centre` | T3_LOCAL_CORE | 32 | 663,858 |
| `marketplace` | T3_LOCAL_CORE | 8 | 653,891 |
| `social_support_mops` | T3_LOCAL_CORE | 15 | 523,980 |
| `health_clinic` | T3_LOCAL_CORE | 71 | 372,909 |
| `culture_theatre` | T3_LOCAL_CORE | 33 | 371,137 |
| `education_preschool` | T4_DAILY_SERVICE | 36 | 125,240 |
| `police_station` | T4_DAILY_SERVICE | 13 | 91,558 |
| `local_airfield` | T5_SPEC_GASTRO | 1 | 90,544 |

### Faza IV: Próbki Pełnego DNA 100% (Zobacz szczegóły POI!)

#### NAJLEPSZE PRZYSTANKI (TOP 5)
<details><summary><b>Św. Barbary - Szpital (891e23a6a33ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Św. Barbary - Szpital
  stop_id               : 575
  h3_index              : 891e23a6a33ffff
  hub_id                : 136
  hub_name              : Św. Barbary - Szpital
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 99.7775
  local_percentile      : 100.0000
  stop_local_score_raw  : 0.5872
  local_score_raw       : 0.5566
  hub_grade             : A+
  hub_percentile        : 100.0000

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 9725095.6670
  infra_score           : 16787318.5350
  stop_raw_gravity      : 4868275.6357
  stop_entropy          : 0.9976
  hub_infra_score       : 16787318.5350

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 7946.0028
  market_val            : 7942.0055
  stop_liquidity        : 140
  hub_market_val        : 7942.0055

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 260.4052
  pop_val               : 429.5443
  hub_pop_val           : 429.5443

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 4x gastronomy
  > 4x supermarket
  > 2x pharmacy
  > 2x industrial_zone
  > 2x education_high_school
  > 1x culture_theatre
  > 1x convenience_store
  > 1x micro_atm
  > 1x university_campus
  > 1x place_of_worship
  > 1x commercial_zone
  > 1x micro_playground
  > 1x hospital_clinical
  > 1x park_recreation

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - pharmacy               : Apteka JANA
    - gastronomy             : Siostry Zakonne Jedzenie
    - supermarket            : Lewiatan
    - pharmacy               : Turkusowa
    - gastronomy             : Aurum
    - gastronomy             : Bar Familijny
    - culture_theatre        : Biblioteka Publiczna im. dr Władysława Biegańskiego FIlia nr 4
    - gastronomy             : Sulaiman
    - convenience_store      : Żabka
    - micro_atm              : Euronet
    - university_campus      : Wyższe Seminarium Duchowne Archidiecezji Częstochowskiej
    - education_high_school  : Zespół Szkół Ekonomicznych
```
</details>
<details><summary><b>Rynek Wieluński (891e23a684fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Rynek Wieluński
  stop_id               : 530
  h3_index              : 891e23a684fffff
  hub_id                : 165
  hub_name              : Rynek Wieluński
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 99.8888
  local_percentile      : 99.7738
  stop_local_score_raw  : 0.5872
  local_score_raw       : 0.5565
  hub_grade             : A+
  hub_percentile        : 99.7738

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 7070269.5750
  infra_score           : 12793020.5222
  stop_raw_gravity      : 2538406.1127
  stop_entropy          : 1.7853
  hub_infra_score       : 12793020.5222

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6744.0989
  market_val            : 6727.8446
  stop_liquidity        : 169
  hub_market_val        : 6727.8446

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 586.2216
  pop_val               : 1059.1249
  hub_pop_val           : 1059.1249

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 12x gastronomy
  > 8x place_of_worship
  > 6x micro_playground
  > 5x health_clinic
  > 4x education_high_school
  > 4x park_recreation
  > 3x pharmacy
  > 3x education_preschool
  > 3x micro_atm
  > 2x convenience_store
  > 2x bank
  > 2x personal_services
  > 2x police_station
  > 1x specialized_retail
  > 1x business_office
  > 1x car_services
  > 1x micro_parcel_locker
  > 1x social_support_mops
  > 1x supermarket
  > 1x commercial_zone
  > 1x government_central

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store      : Żabka
    - education_high_school  : Katolickie Liceum Ogólnokształcące SPSK
    - micro_atm              : Euronet
    - bank                   : Krakowski Bank Spółdzielczy
    - micro_atm              : KBS
    - gastronomy             : Tbilisi Smak Gruzji Częstochowa
    - education_preschool    : ARTOK
    - health_clinic          : Centrum Stomatologiczne
    - health_clinic          : Lipowski
    - gastronomy             : Juan
    - gastronomy             : Sekwana
    - gastronomy             : Pireus
```
</details>
<details><summary><b>Matejki (891e23a4cd3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Matejki
  stop_id               : 409
  h3_index              : 891e23a4cd3ffff
  hub_id                : 226
  hub_name              : Matejki
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A
  grade                 : A+
  stop_percentile       : 91.4349
  local_percentile      : 99.5475
  stop_local_score_raw  : 0.4305
  local_score_raw       : 0.5319
  hub_grade             : A+
  hub_percentile        : 99.5475

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 1462559.7836
  infra_score           : 9151567.6457
  stop_raw_gravity      : 1424970.2962
  stop_entropy          : 0.0264
  hub_infra_score       : 9151567.6457

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6851.8519
  market_val            : 6851.8519
  stop_liquidity        : 13
  hub_market_val        : 6851.8519

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 392.0315
  pop_val               : 961.1791
  hub_pop_val           : 961.1791

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x business_office
  > 1x convenience_store
  > 1x micro_playground
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - business_office        : AGRAVEN ZACISZE
    - convenience_store      : Żabka
```
</details>
<details><summary><b>Kosmowskiej (891e2169adbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Kosmowskiej
  stop_id               : 345
  h3_index              : 891e2169adbffff
  hub_id                : 197
  hub_name              : Kosmowskiej
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 98.3315
  local_percentile      : 99.3213
  stop_local_score_raw  : 0.5092
  local_score_raw       : 0.5156
  hub_grade             : A+
  hub_percentile        : 99.3213

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 4465333.4182
  infra_score           : 13224169.3129
  stop_raw_gravity      : 2737156.3126
  stop_entropy          : 0.6314
  hub_infra_score       : 13224169.3129

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 5424.0631
  market_val            : 5469.1904
  stop_liquidity        : 105
  hub_market_val        : 5469.1904

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 902.1142
  pop_val               : 1717.8090
  hub_pop_val           : 1717.8090

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 13x micro_playground
  > 6x convenience_store
  > 5x park_recreation
  > 2x personal_services
  > 2x national_stadium
  > 1x post_office
  > 1x supermarket
  > 1x specialized_retail
  > 1x micro_parcel_locker
  > 1x place_of_worship
  > 1x education_high_school
  > 1x education_preschool

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - post_office            : Urząd pocztowy nr 27 Częstochowa
    - convenience_store      : Żabka
    - personal_services      : Puczyńscy
    - supermarket            : Lewiatan
    - specialized_retail     : Butik Marie
    - micro_parcel_locker    : Paczkomat InPost
    - personal_services      : Świat chemii
    - convenience_store      : Odido
    - convenience_store      : abc
    - convenience_store      : Społem
    - place_of_worship       : Kościół pw. Świętego Maksymiliana Marii Kolbego
    - education_high_school  : Szkoła Podstawowa nr 50 im. gen. Władysława Sikorskiego
```
</details>
<details><summary><b>Okulickiego (891e23a68cfffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Okulickiego
  stop_id               : 1162
  h3_index              : 891e23a68cfffff
  hub_id                : 4
  hub_name              : Parkitka - Osiedle
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 96.7742
  local_percentile      : 99.0950
  stop_local_score_raw  : 0.4650
  local_score_raw       : 0.5150
  hub_grade             : A+
  hub_percentile        : 99.0950

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 3771811.3090
  infra_score           : 8301150.7016
  stop_raw_gravity      : 2300450.5376
  stop_entropy          : 0.6396
  hub_infra_score       : 8301150.7016

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6435.0201
  market_val            : 6434.6301
  stop_liquidity        : 2094
  hub_market_val        : 6434.6301

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 364.5449
  pop_val               : 1143.6848
  hub_pop_val           : 1143.6848

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 12x micro_playground
  > 4x supermarket
  > 4x specialized_retail
  > 4x convenience_store
  > 3x personal_services
  > 3x micro_parcel_locker
  > 2x gastronomy
  > 2x micro_atm
  > 2x education_preschool
  > 1x post_office
  > 1x car_services
  > 1x pharmacy
  > 1x shopping_mall
  > 1x park_recreation
  > 1x place_of_worship
  > 1x health_clinic
  > 1x industrial_zone
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - car_services           : AMIC Energy
    - gastronomy             : McDonald's
    - supermarket            : Kaufland
    - micro_atm              : Euronet
    - specialized_retail     : Moda Italiana Olga e Roberto
    - gastronomy             : Cukiernia Aleksandra
    - pharmacy               : Dbam o Zdrowie
    - specialized_retail     : Neonet
    - specialized_retail     : Pepco
    - personal_services      : Rossmann
    - convenience_store      : Sklep spożywczy
    - micro_parcel_locker    : Paczkomat InPost
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Cmentarz Mirów (891e2ed352bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Cmentarz Mirów
  stop_id               : 995
  h3_index              : 891e2ed352bffff
  hub_id                : 364
  hub_name              : Cmentarz Mirów
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 1.4461
  local_percentile      : 1.1312
  stop_local_score_raw  : -1.1318
  local_score_raw       : -1.0401
  hub_grade             : F
  hub_percentile        : 1.1312

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 5654.6324
  market_val            : 5654.6324
  stop_liquidity        : 0
  hub_market_val        : 5654.6324

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 9.0831
  pop_val               : 19.6483
  hub_pop_val           : 19.6483

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Dąbie (891e2ed32c3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Dąbie
  stop_id               : 179
  h3_index              : 891e2ed32c3ffff
  hub_id                : 339
  hub_name              : Dąbie
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.5562
  local_percentile      : 0.9050
  stop_local_score_raw  : -1.1946
  local_score_raw       : -1.0769
  hub_grade             : F
  hub_percentile        : 0.9050

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 68468.8048
  infra_score           : 252503.2319
  stop_raw_gravity      : 35131.2210
  stop_entropy          : 0.9489
  hub_infra_score       : 252503.2319

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 445.2843
  market_val            : 445.2843
  stop_liquidity        : 3
  hub_market_val        : 445.2843

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 60.7471
  pop_val               : 246.8099
  hub_pop_val           : 246.8099

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x car_services
  > 1x place_of_worship
  > 1x supermarket
  > 1x education_high_school

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - car_services           : Avia
    - place_of_worship       : Kościół pw. Najświętszej Maryi Panny Wspomożycielki Wiernych
    - supermarket            : Dino
    - education_high_school  : Szkoła Podstawowa nr 19 im. J. Tuwima w Częstochowie
```
</details>
<details><summary><b>Wodociągowa (891e2ed3197ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Wodociągowa
  stop_id               : 1257
  h3_index              : 891e2ed3197ffff
  hub_id                : 38
  hub_name              : Wodociągowa
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.2225
  local_percentile      : 0.6787
  stop_local_score_raw  : -1.2163
  local_score_raw       : -1.1038
  hub_grade             : F
  hub_percentile        : 0.6787

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 5654.6324
  market_val            : 5654.6324
  stop_liquidity        : 0
  hub_market_val        : 5654.6324

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 3.8929
  pop_val               : 10.1259
  hub_pop_val           : 10.1259

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Łanowa (891e2ed3667ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Łanowa
  stop_id               : 569
  h3_index              : 891e2ed3667ffff
  hub_id                : 377
  hub_name              : Łanowa
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 1.0011
  local_percentile      : 0.4525
  stop_local_score_raw  : -1.1423
  local_score_raw       : -1.1226
  hub_grade             : F
  hub_percentile        : 0.4525

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 44647.1043
  infra_score           : 120255.3542
  stop_raw_gravity      : 44647.1043
  stop_entropy          : 0.0000
  hub_infra_score       : 120255.3542

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 445.2843
  market_val            : 445.2843
  stop_liquidity        : 3
  hub_market_val        : 445.2843

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 125.5853
  pop_val               : 258.4238
  hub_pop_val           : 258.4238

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>HUTA - Wydział Transportu (891e2ed1463ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : HUTA - Wydział Transportu
  stop_id               : 1290
  h3_index              : 891e2ed1463ffff
  hub_id                : 267
  hub_name              : HUTA - Wydział Transportu
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.1112
  local_percentile      : 0.2262
  stop_local_score_raw  : -1.3472
  local_score_raw       : -1.2789
  hub_grade             : F
  hub_percentile        : 0.2262

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 5654.6324
  market_val            : 5654.6324
  stop_liquidity        : 0
  hub_market_val        : 5654.6324

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 0.5968
  pop_val               : 1.0319
  hub_pop_val           : 1.0319

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>

---

## ELBLAG
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: -0.000, Std: 0.710)
     Rozkład Kartek (unikalne Huby): A: 18, A+: 10, B: 28, C: 37, D: 46, F: 46
[👥 BAZA LUDNOŚCI GUS] ✅ DEMOGRAFIA OK (Odchylenie zaledwie 8.0%)
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
[✅]  H3 Res 8 Grid 100% Valid (156 komórek, 7 pustyń transportowych)
```

### Faza 0: Statystyki ogólne
- **Populacja Miasta:** 118,772 (GUS Grid)
- **Transakcje RCN:** 5,907

### Faza III: Top 20 POI (Miasto)

| Kategoria | Tier | Ilość w Mieście | Wartość Punktowa (W) |
|---|---|---|---|
| `national_stadium` | T1_NATIONAL_MAGNET | 1 | 20,170,188 |
| `university_campus` | T1_NATIONAL_MAGNET | 5 | 18,737,399 |
| `hospital_clinical` | T1_NATIONAL_MAGNET | 3 | 17,984,340 |
| `regional_rail_hub` | T1_NATIONAL_MAGNET | 1 | 6,215,408 |
| `commercial_zone` | T2_STRATEGIC_HUB | 17 | 4,244,343 |
| `industrial_zone` | T2_STRATEGIC_HUB | 299 | 3,778,225 |
| `shopping_mall` | T2_STRATEGIC_HUB | 13 | 3,027,858 |
| `supermarket` | T2_STRATEGIC_HUB | 60 | 2,161,554 |
| `business_office` | T2_STRATEGIC_HUB | 52 | 2,061,403 |
| `government_central` | T2_STRATEGIC_HUB | 27 | 1,896,900 |
| `education_high_school` | T3_LOCAL_CORE | 35 | 865,822 |
| `sports_centre` | T3_LOCAL_CORE | 11 | 678,404 |
| `marketplace` | T3_LOCAL_CORE | 6 | 567,148 |
| `social_support_mops` | T3_LOCAL_CORE | 12 | 517,021 |
| `health_clinic` | T3_LOCAL_CORE | 50 | 374,030 |
| `culture_theatre` | T3_LOCAL_CORE | 15 | 348,919 |
| `education_preschool` | T4_DAILY_SERVICE | 40 | 123,825 |
| `police_station` | T4_DAILY_SERVICE | 4 | 89,208 |
| `car_services` | T4_DAILY_SERVICE | 23 | 87,483 |
| `local_airfield` | T5_SPEC_GASTRO | 1 | 78,116 |

### Faza IV: Próbki Pełnego DNA 100% (Zobacz szczegóły POI!)

#### NAJLEPSZE PRZYSTANKI (TOP 5)
<details><summary><b>Plac Słowiański (891f54d0abbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Plac Słowiański
  stop_id               : 97
  h3_index              : 891f54d0abbffff
  hub_id                : 76
  hub_name              : Plac Słowiański
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A
  grade                 : A+
  stop_percentile       : 94.8424
  local_percentile      : 100.0000
  stop_local_score_raw  : 0.9008
  local_score_raw       : 1.2466
  hub_grade             : A+
  hub_percentile        : 100.0000

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 2190337.5858
  infra_score           : 7876258.0919
  stop_raw_gravity      : 704288.3210
  stop_entropy          : 2.1100
  hub_infra_score       : 7876258.0919

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 9.8571
  transit_freq          : 36.6429
  stop_routes_count     : 5
  stop_routes           : 10, 12, 14, 15, 21
  stop_hub_share        : 0.2690
  hub_departures_h      : 36.6429
  hub_routes            : 1, 2, 3, 10, 12, 14, 15, 21

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6976.7442
  market_val            : 6883.8146
  stop_liquidity        : 807
  hub_market_val        : 6883.8146

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 492.4997
  pop_val               : 1362.9688
  hub_pop_val           : 1362.9688

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 43x gastronomy
  > 15x park_recreation
  > 13x bank
  > 10x specialized_retail
  > 6x convenience_store
  > 5x pharmacy
  > 5x micro_atm
  > 4x government_central
  > 4x micro_playground
  > 4x micro_parcel_locker
  > 3x culture_theatre
  > 3x supermarket
  > 3x health_clinic
  > 3x place_of_worship
  > 3x education_high_school
  > 2x personal_services
  > 2x car_services
  > 1x post_office
  > 1x social_support_mops
  > 1x police_station
  > 1x education_preschool
  > 1x marketplace
  > 1x university_campus
  > 1x sports_centre
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - bank                   : Deutsche Bank
    - bank                   : Milenium Bank
    - bank                   : Crédit Agricole
    - bank                   : Alior Bank
    - culture_theatre        : Biblioteka Elbląska
    - government_central     : Powiatowy Zespół do Spraw Orzekania o Niepełnosprawności
    - post_office            : Elbląg 1
    - bank                   : Crédit Agricole
    - convenience_store      : Żabka
    - convenience_store      : Żabka
    - culture_theatre        : Warmińsko-Mazurska Biblioteka Pedagogiczna
    - gastronomy             : Strzecha
```
</details>
<details><summary><b>Robotnicza (891f54d084bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Robotnicza
  stop_id               : 90
  h3_index              : 891f54d084bffff
  hub_id                : 8
  hub_name              : Robotnicza - Alstom
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : B
  grade                 : A+
  stop_percentile       : 73.0659
  local_percentile      : 99.4595
  stop_local_score_raw  : 0.4556
  local_score_raw       : 1.1280
  hub_grade             : A+
  hub_percentile        : 99.4595

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 3205006.7967
  infra_score           : 11151077.9562
  stop_raw_gravity      : 1248439.1395
  stop_entropy          : 1.5672
  hub_infra_score       : 11151077.9562

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 5.3571
  transit_freq          : 27.7857
  stop_routes_count     : 2
  stop_routes           : 12, 21
  stop_hub_share        : 0.1928
  hub_departures_h      : 27.7857
  hub_routes            : 1, 2, 3, 12, 21

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6082.4742
  market_val            : 7010.0876
  stop_liquidity        : 317
  hub_market_val        : 7010.0876

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 201.6524
  pop_val               : 765.5847
  hub_pop_val           : 765.5847

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 17x gastronomy
  > 13x park_recreation
  > 10x specialized_retail
  > 8x bank
  > 8x micro_atm
  > 7x personal_services
  > 6x micro_parcel_locker
  > 5x shopping_mall
  > 4x supermarket
  > 4x business_office
  > 4x micro_playground
  > 3x convenience_store
  > 3x education_high_school
  > 2x pharmacy
  > 2x culture_theatre
  > 2x social_support_mops
  > 2x sports_centre
  > 1x post_office
  > 1x police_station
  > 1x health_clinic
  > 1x government_central
  > 1x commercial_zone
  > 1x car_services
  > 1x place_of_worship
  > 1x marketplace
  > 1x university_campus
  > 1x education_preschool

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - bank                   : Millennium Bank
    - bank                   : Crédit Agricole
    - post_office            : Elbląg 1
    - supermarket            : Biedronka
    - supermarket            : Kaufland
    - micro_atm              : Euronet
    - gastronomy             : Studnia Smaków
    - business_office        : FLSmidth MAAG Gear
    - gastronomy             : Przy Bramie
    - bank                   : Idea Bank
    - convenience_store      : abc
    - personal_services      : Yves Rocher
```
</details>
<details><summary><b>Nad Jarem (891f54d0d03ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Nad Jarem
  stop_id               : 166
  h3_index              : 891f54d0d03ffff
  hub_id                : 16
  hub_name              : Nad Jarem
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 100.0000
  local_percentile      : 98.9189
  stop_local_score_raw  : 1.2763
  local_score_raw       : 1.1267
  hub_grade             : A+
  hub_percentile        : 98.9189

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 1974949.8539
  infra_score           : 3346255.8590
  stop_raw_gravity      : 1418246.3750
  stop_entropy          : 0.3925
  hub_infra_score       : 3346255.8590

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 20.4286
  transit_freq          : 34.4286
  stop_routes_count     : 10
  stop_routes           : 13, 14, 16, 17, 18, 21, 24, C, T1, T4
  stop_hub_share        : 0.5934
  hub_departures_h      : 34.4286
  hub_routes            : 13, 14, 16, 17, 18, 21, 24, C, T1, T4

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6860.4651
  market_val            : 6874.9090
  stop_liquidity        : 142
  hub_market_val        : 6874.9090

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 613.8135
  pop_val               : 1145.6423
  hub_pop_val           : 1145.6423

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 57x park_recreation
  > 11x micro_playground
  > 6x convenience_store
  > 6x supermarket
  > 4x personal_services
  > 3x micro_parcel_locker
  > 2x health_clinic
  > 1x post_office
  > 1x micro_atm
  > 1x pharmacy
  > 1x place_of_worship
  > 1x specialized_retail
  > 1x commercial_zone
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - post_office            : Elbląg 17
    - convenience_store      : Żabka
    - pharmacy               : Regenium
    - convenience_store      : Gest
    - micro_parcel_locker    : Paczkomat InPost
    - micro_parcel_locker    : Paczkomat InPost
    - micro_parcel_locker    : Paczkomat InPost
    - convenience_store      : Sklep spożywczo-monopolowy
    - place_of_worship       : Kościół pw. Świętego Brata Alberta
    - supermarket            : Społem
    - convenience_store      : Cytrusek
    - specialized_retail     : Bielizna odzież
```
</details>
<details><summary><b>Sąd - Pętla (891f54d0aa7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Sąd - Pętla
  stop_id               : 1005
  h3_index              : 891f54d0aa7ffff
  hub_id                : 1
  hub_name              : 1-go Maja - Sąd
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : C
  grade                 : A+
  stop_percentile       : 62.1777
  local_percentile      : 98.3784
  stop_local_score_raw  : 0.3216
  local_score_raw       : 1.0780
  hub_grade             : A+
  hub_percentile        : 98.3784

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 2331104.7049
  infra_score           : 5743433.8401
  stop_raw_gravity      : 1053670.0991
  stop_entropy          : 1.2124
  hub_infra_score       : 5743433.8401

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 3.5714
  transit_freq          : 33.0714
  stop_routes_count     : 1
  stop_routes           : T4
  stop_hub_share        : 0.1080
  hub_departures_h      : 33.0714
  hub_routes            : 1, 2, 3, 13, 16, 19, T4

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6087.1964
  market_val            : 6147.7352
  stop_liquidity        : 690
  hub_market_val        : 6147.7352

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 500.3787
  pop_val               : 1252.0051
  hub_pop_val           : 1252.0051

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 18x bank
  > 18x specialized_retail
  > 17x park_recreation
  > 12x convenience_store
  > 12x gastronomy
  > 12x personal_services
  > 7x health_clinic
  > 6x pharmacy
  > 6x micro_atm
  > 6x micro_parcel_locker
  > 5x education_preschool
  > 3x supermarket
  > 3x government_central
  > 3x place_of_worship
  > 3x micro_playground
  > 3x education_high_school
  > 2x sports_centre
  > 1x culture_theatre
  > 1x business_office
  > 1x post_office
  > 1x social_support_mops
  > 1x police_station
  > 1x shopping_mall
  > 1x car_services
  > 1x university_campus

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - bank                   : Deutsche Bank
    - bank                   : Milenium Bank
    - bank                   : Crédit Agricole
    - bank                   : Alior Bank
    - bank                   : Crédit Agricole
    - convenience_store      : Żabka
    - pharmacy               : Dom Leków
    - gastronomy             : Kalinka
    - bank                   : Bank Pekao
    - convenience_store      : Żabka
    - convenience_store      : Żabka
    - personal_services      : Yves Rocher
```
</details>
<details><summary><b>Ogólna - Sklep (891f54d0d53ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Ogólna - Sklep
  stop_id               : 124
  h3_index              : 891f54d0d53ffff
  hub_id                : 99
  hub_name              : Ogólna - Sklep
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : B
  grade                 : A+
  stop_percentile       : 78.7966
  local_percentile      : 97.8378
  stop_local_score_raw  : 0.5345
  local_score_raw       : 1.0194
  hub_grade             : A+
  hub_percentile        : 97.8378

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 805807.7695
  infra_score           : 1936176.8564
  stop_raw_gravity      : 268679.8313
  stop_entropy          : 1.9991
  hub_infra_score       : 1936176.8564

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 5.6429
  transit_freq          : 29.4286
  stop_routes_count     : 2
  stop_routes           : 21, 24
  stop_hub_share        : 0.1917
  hub_departures_h      : 29.4286
  hub_routes            : 13, 14, 17, 18, 21, 24, T1, T4

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6903.3531
  market_val            : 6903.3531
  stop_liquidity        : 172
  hub_market_val        : 6903.3531

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 622.7588
  pop_val               : 1237.3046
  hub_pop_val           : 1237.3046

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 92x park_recreation
  > 38x specialized_retail
  > 19x micro_playground
  > 12x personal_services
  > 9x gastronomy
  > 5x micro_parcel_locker
  > 5x health_clinic
  > 4x convenience_store
  > 4x car_services
  > 3x post_office
  > 3x supermarket
  > 2x education_preschool
  > 1x pharmacy
  > 1x culture_theatre
  > 1x shopping_mall
  > 1x education_high_school

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - specialized_retail     : RTV Euro AGD
    - gastronomy             : McDonald's
    - specialized_retail     : Crux
    - specialized_retail     : House
    - specialized_retail     : Gatta
    - specialized_retail     : H&M
    - specialized_retail     : Marilyn
    - specialized_retail     : Ochnik
    - specialized_retail     : Reserved
    - specialized_retail     : Bialcon
    - specialized_retail     : Camaïeu
    - specialized_retail     : Lavard
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>ROD "Jagiellończyka" - Komunialnik (891f54d0da7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : ROD "Jagiellończyka" - Komunialnik
  stop_id               : 329
  h3_index              : 891f54d0da7ffff
  hub_id                : 68
  hub_name              : ROD "Jagiellończyka" - Komunialnik
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 3.4384
  local_percentile      : 2.7027
  stop_local_score_raw  : -1.8641
  local_score_raw       : -1.7965
  hub_grade             : F
  hub_percentile        : 2.7027

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 2.8407
  infra_score           : 2.8407
  stop_raw_gravity      : 2.8407
  stop_entropy          : -0.0000
  hub_infra_score       : 2.8407

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.9286
  transit_freq          : 0.9286
  stop_routes_count     : 1
  stop_routes           : 18
  stop_hub_share        : 1.0000
  hub_departures_h      : 0.9286
  hub_routes            : 18

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6527.0936
  market_val            : 6527.0936
  stop_liquidity        : 0
  hub_market_val        : 6527.0936

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 9.9730
  pop_val               : 13.4114
  hub_pop_val           : 13.4114

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Stagniewo - POD (891f54d5447ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Stagniewo - POD
  stop_id               : 248
  h3_index              : 891f54d5447ffff
  hub_id                : 44
  hub_name              : Stagniewo - POD
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.7163
  local_percentile      : 2.1622
  stop_local_score_raw  : -2.1311
  local_score_raw       : -1.8642
  hub_grade             : F
  hub_percentile        : 2.1622

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 1.2857
  transit_freq          : 2.5714
  stop_routes_count     : 1
  stop_routes           : 11
  stop_hub_share        : 0.5000
  hub_departures_h      : 2.5714
  hub_routes            : 11

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6527.0936
  market_val            : 6527.0936
  stop_liquidity        : 0
  hub_market_val        : 6527.0936

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 0.0000
  pop_val               : 0.0000
  hub_pop_val           : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Piastowo I (891f54d7183ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Piastowo I
  stop_id               : 240
  h3_index              : 891f54d7183ffff
  hub_id                : 23
  hub_name              : Piastowo I
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 2.0057
  local_percentile      : 1.6216
  stop_local_score_raw  : -1.9811
  local_score_raw       : -1.9106
  hub_grade             : F
  hub_percentile        : 1.6216

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.6429
  transit_freq          : 0.6429
  stop_routes_count     : 1
  stop_routes           : 20
  stop_hub_share        : 1.0000
  hub_departures_h      : 0.6429
  hub_routes            : 20

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6527.0936
  market_val            : 6527.0936
  stop_liquidity        : 0
  hub_market_val        : 6527.0936

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 37.3386
  pop_val               : 37.3386
  hub_pop_val           : 37.3386

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Piastowo I (891f54d7183ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Piastowo I
  stop_id               : 241
  h3_index              : 891f54d7183ffff
  hub_id                : 72
  hub_name              : Piastowo I
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 1.7192
  local_percentile      : 1.0811
  stop_local_score_raw  : -1.9926
  local_score_raw       : -1.9122
  hub_grade             : F
  hub_percentile        : 1.0811

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.6429
  transit_freq          : 0.6429
  stop_routes_count     : 1
  stop_routes           : 20
  stop_hub_share        : 1.0000
  hub_departures_h      : 0.6429
  hub_routes            : 20

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6527.0936
  market_val            : 6527.0936
  stop_liquidity        : 0
  hub_market_val        : 6527.0936

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 32.8081
  pop_val               : 36.6087
  hub_pop_val           : 36.6087

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Leszkowo (891f726da23ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Leszkowo
  stop_id               : 119
  h3_index              : 891f726da23ffff
  hub_id                : 63
  hub_name              : Leszkowo
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.2865
  local_percentile      : 0.5405
  stop_local_score_raw  : -2.1349
  local_score_raw       : -2.1289
  hub_grade             : F
  hub_percentile        : 0.5405

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 1.6429
  transit_freq          : 1.6429
  stop_routes_count     : 1
  stop_routes           : 24
  stop_hub_share        : 1.0000
  hub_departures_h      : 1.6429
  hub_routes            : 24

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 3857.9519
  market_val            : 3857.9519
  stop_liquidity        : 3
  hub_market_val        : 3857.9519

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 31.5588
  pop_val               : 31.5588
  hub_pop_val           : 31.5588

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>

---

## ELK
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: -0.000, Std: 0.782)
     Rozkład Kartek (unikalne Huby): A: 21, A+: 11, B: 31, C: 41, D: 52, F: 51
[👥 BAZA LUDNOŚCI GUS] ✅ DEMOGRAFIA OK (Odchylenie zaledwie 20.8%)
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
[✅]  H3 Res 8 Grid 100% Valid (475 komórek, 22 pustyń transportowych)
```

### Faza 0: Statystyki ogólne
- **Populacja Miasta:** 72,490 (GUS Grid)
- **Transakcje RCN:** 3,570

### Faza III: Top 20 POI (Miasto)

| Kategoria | Tier | Ilość w Mieście | Wartość Punktowa (W) |
|---|---|---|---|
| `hospital_clinical` | T1_NATIONAL_MAGNET | 3 | 16,239,672 |
| `university_campus` | T1_NATIONAL_MAGNET | 5 | 11,917,109 |
| `regional_rail_hub` | T1_NATIONAL_MAGNET | 3 | 5,808,237 |
| `industrial_zone` | T2_STRATEGIC_HUB | 71 | 4,191,680 |
| `commercial_zone` | T2_STRATEGIC_HUB | 44 | 4,098,390 |
| `shopping_mall` | T2_STRATEGIC_HUB | 4 | 3,346,445 |
| `supermarket` | T2_STRATEGIC_HUB | 32 | 2,517,707 |
| `business_office` | T2_STRATEGIC_HUB | 8 | 1,737,094 |
| `government_central` | T2_STRATEGIC_HUB | 37 | 1,726,251 |
| `marketplace` | T3_LOCAL_CORE | 3 | 639,196 |
| `education_high_school` | T3_LOCAL_CORE | 47 | 544,790 |
| `sports_centre` | T3_LOCAL_CORE | 30 | 520,038 |
| `social_support_mops` | T3_LOCAL_CORE | 10 | 384,724 |
| `culture_theatre` | T3_LOCAL_CORE | 7 | 313,822 |
| `health_clinic` | T3_LOCAL_CORE | 65 | 295,777 |
| `education_preschool` | T4_DAILY_SERVICE | 25 | 85,416 |
| `police_station` | T4_DAILY_SERVICE | 3 | 79,574 |
| `specialized_retail` | T4_DAILY_SERVICE | 94 | 64,129 |
| `post_office` | T4_DAILY_SERVICE | 15 | 60,575 |
| `car_services` | T4_DAILY_SERVICE | 13 | 57,275 |

### Faza IV: Próbki Pełnego DNA 100% (Zobacz szczegóły POI!)

#### NAJLEPSZE PRZYSTANKI (TOP 5)
<details><summary><b>Kilińskiego — Koszykowa (891f55388c7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Kilińskiego — Koszykowa
  stop_id               : 10
  h3_index              : 891f55388c7ffff
  hub_id                : 6
  hub_name              : Kilińskiego — Matejki
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 97.1875
  local_percentile      : 100.0000
  stop_local_score_raw  : 1.4618
  local_score_raw       : 1.6023
  hub_grade             : A+
  hub_percentile        : 100.0000

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 7292874.2933
  infra_score           : 12423187.4561
  stop_raw_gravity      : 2855463.8665
  stop_entropy          : 1.5540
  hub_infra_score       : 12423187.4561

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 5.2143
  transit_freq          : 11.0000
  stop_routes_count     : 6
  stop_routes           : 4, 5, 6, 8, 12, 13
  stop_hub_share        : 0.4740
  hub_departures_h      : 11.0000
  hub_routes            : 4, 5, 6, 7, 8, 12, 13

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 5920.3143
  market_val            : 5920.3143
  stop_liquidity        : 125
  hub_market_val        : 5920.3143

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 1421.6723
  pop_val               : 2732.0152
  hub_pop_val           : 2732.0152

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 20x micro_playground
  > 13x park_recreation
  > 6x commercial_zone
  > 5x convenience_store
  > 4x micro_atm
  > 4x car_services
  > 4x gastronomy
  > 4x health_clinic
  > 4x education_preschool
  > 4x micro_parcel_locker
  > 3x supermarket
  > 3x pharmacy
  > 3x personal_services
  > 3x education_high_school
  > 1x bank
  > 1x government_central
  > 1x specialized_retail
  > 1x post_office
  > 1x sports_centre
  > 1x place_of_worship

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : Bankomat BZ WBK
    - bank                   : Bank Pekao
    - supermarket            : Kaufland
    - supermarket            : Biedronka
    - government_central     : PEC Ełk
    - car_services           : Auto-Marcin
    - pharmacy               : Cef@Rm 36
    - gastronomy             : Roma
    - specialized_retail     : Atu
    - gastronomy             : Kebab
    - car_services           : Orlen
    - car_services           : Auto Serwis Mobile
```
</details>
<details><summary><b>Wojska Polskiego — Most (891f5538c6fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Wojska Polskiego — Most
  stop_id               : 26
  h3_index              : 891f5538c6fffff
  hub_id                : 22
  hub_name              : Wojska Polskiego — Most
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 97.8125
  local_percentile      : 99.5169
  stop_local_score_raw  : 1.4827
  local_score_raw       : 1.5804
  hub_grade             : A+
  hub_percentile        : 99.5169

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 4818622.6453
  infra_score           : 8343920.8788
  stop_raw_gravity      : 1855462.8275
  stop_entropy          : 1.5970
  hub_infra_score       : 8343920.8788

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 6.9286
  transit_freq          : 13.8571
  stop_routes_count     : 9
  stop_routes           : 1, 4, 5, 6, 7, 8, 12, 13, 16
  stop_hub_share        : 0.5000
  hub_departures_h      : 13.8571
  hub_routes            : 1, 4, 5, 6, 7, 8, 12, 13, 16

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 5435.3355
  market_val            : 5435.3355
  stop_liquidity        : 100
  hub_market_val        : 5435.3355

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 798.6912
  pop_val               : 1335.7744
  hub_pop_val           : 1335.7744

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 31x specialized_retail
  > 16x bank
  > 16x micro_playground
  > 13x park_recreation
  > 12x personal_services
  > 11x gastronomy
  > 7x health_clinic
  > 5x micro_atm
  > 5x supermarket
  > 5x convenience_store
  > 5x place_of_worship
  > 3x pharmacy
  > 3x government_central
  > 3x university_campus
  > 3x education_high_school
  > 3x education_preschool
  > 3x micro_parcel_locker
  > 3x sports_centre
  > 2x post_office
  > 2x social_support_mops
  > 2x commercial_zone
  > 1x shopping_mall
  > 1x business_office
  > 1x marketplace
  > 1x police_station

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - post_office            : Urząd Pocztowy 1
    - micro_atm              : Bankomat Millennium
    - bank                   : Millennium Bank
    - pharmacy               : Cef@Rm 36
    - personal_services      : Rossmann
    - bank                   : PKO BP
    - supermarket            : Super Plus
    - government_central     : NFZ
    - personal_services      : Golibroda
    - bank                   : BRE Bank
    - micro_atm              : Euronet
    - bank                   : Bank Pekao
```
</details>
<details><summary><b>Kilińskiego — Szkoła nr 7 (891f553880bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Kilińskiego — Szkoła nr 7
  stop_id               : 11
  h3_index              : 891f553880bffff
  hub_id                : 189
  hub_name              : Kilińskiego — Szkoła nr 7
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 99.0625
  local_percentile      : 99.0338
  stop_local_score_raw  : 1.5107
  local_score_raw       : 1.5514
  hub_grade             : A+
  hub_percentile        : 99.0338

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 1973149.4268
  infra_score           : 3224809.8240
  stop_raw_gravity      : 614147.5003
  stop_entropy          : 2.2128
  hub_infra_score       : 3224809.8240

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 7.5714
  transit_freq          : 13.3571
  stop_routes_count     : 9
  stop_routes           : 1, 4, 5, 6, 7, 8, 12, 13, 14
  stop_hub_share        : 0.5668
  hub_departures_h      : 13.3571
  hub_routes            : 1, 4, 5, 6, 7, 8, 12, 13, 14

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 5644.7679
  market_val            : 5644.7679
  stop_liquidity        : 62
  hub_market_val        : 5644.7679

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 930.9678
  pop_val               : 1646.9917
  hub_pop_val           : 1646.9917

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 18x park_recreation
  > 17x micro_playground
  > 5x health_clinic
  > 4x convenience_store
  > 3x pharmacy
  > 3x education_preschool
  > 2x car_services
  > 2x micro_atm
  > 2x micro_parcel_locker
  > 1x bank
  > 1x government_central
  > 1x personal_services
  > 1x post_office
  > 1x specialized_retail
  > 1x supermarket
  > 1x sports_centre
  > 1x education_high_school
  > 1x commercial_zone
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - bank                   : Bank Pekao
    - government_central     : PEC Ełk
    - pharmacy               : Cef@Rm 36
    - health_clinic          : Eskulap
    - convenience_store      : Spożywczak
    - personal_services      : U Kaśki
    - post_office            : UP Ełk Nr 6
    - car_services           : CircleK
    - convenience_store      : abc
    - pharmacy               : Asak
    - pharmacy               : Aspirynka
    - health_clinic          : NZOZ Diagnostyk
```
</details>
<details><summary><b>Suwalska — PUK (891f5538dc3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Suwalska — PUK
  stop_id               : 31
  h3_index              : 891f5538dc3ffff
  hub_id                : 55
  hub_name              : Suwalska — PUK
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 96.5625
  local_percentile      : 98.5507
  stop_local_score_raw  : 1.4498
  local_score_raw       : 1.5343
  hub_grade             : A+
  hub_percentile        : 98.5507

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 5156235.8753
  infra_score           : 7359744.9505
  stop_raw_gravity      : 1676375.8205
  stop_entropy          : 2.0758
  hub_infra_score       : 7359744.9505

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 5.7143
  transit_freq          : 11.2857
  stop_routes_count     : 8
  stop_routes           : 1, 2, 3, 4, 5, 12, 14, 18
  stop_hub_share        : 0.5063
  hub_departures_h      : 11.2857
  hub_routes            : 1, 2, 3, 4, 5, 12, 14, 18

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6141.1825
  market_val            : 6141.1825
  stop_liquidity        : 32
  hub_market_val        : 6141.1825

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 687.9367
  pop_val               : 1093.3895
  hub_pop_val           : 1093.3895

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 37x park_recreation
  > 5x car_services
  > 4x micro_parcel_locker
  > 4x commercial_zone
  > 3x education_high_school
  > 3x micro_playground
  > 2x health_clinic
  > 2x sports_centre
  > 1x convenience_store
  > 1x post_office
  > 1x supermarket
  > 1x place_of_worship
  > 1x education_preschool
  > 1x government_central

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - education_high_school  : Szkoła Podstawowa Sportowa nr 6
    - health_clinic          : Ars-Dent
    - car_services           : Point S HOiA
    - education_high_school  : Liceum Ogólnokształcące Zespołu Szkół Samorządowych
    - health_clinic          : NZOZ \
    - micro_parcel_locker    : Appkomat InPost
    - micro_parcel_locker    : Paczkomat InPost
    - car_services           : Super-Moto
    - micro_parcel_locker    : Appkomat InPost
    - car_services           : BP
    - micro_parcel_locker    : Paczkomat InPost
    - supermarket            : Netto
```
</details>
<details><summary><b>Wojska Polskiego — Kościół (891f5538c7bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Wojska Polskiego — Kościół
  stop_id               : 27
  h3_index              : 891f5538c7bffff
  hub_id                : 19
  hub_name              : Wojska Polskiego — Kościół
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 95.9375
  local_percentile      : 98.0676
  stop_local_score_raw  : 1.4163
  local_score_raw       : 1.4902
  hub_grade             : A+
  hub_percentile        : 98.0676

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 4462427.6185
  infra_score           : 5934275.3505
  stop_raw_gravity      : 2090240.1663
  stop_entropy          : 1.1349
  hub_infra_score       : 5934275.3505

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 6.1429
  transit_freq          : 12.2857
  stop_routes_count     : 8
  stop_routes           : 1, 4, 5, 6, 8, 10, 12, 13
  stop_hub_share        : 0.5000
  hub_departures_h      : 12.2857
  hub_routes            : 1, 4, 5, 6, 8, 10, 12, 13

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 5500.0000
  market_val            : 5500.0000
  stop_liquidity        : 187
  hub_market_val        : 5500.0000

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 705.3781
  pop_val               : 976.9753
  hub_pop_val           : 976.9753

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 40x specialized_retail
  > 22x gastronomy
  > 19x bank
  > 15x micro_playground
  > 13x personal_services
  > 12x convenience_store
  > 8x health_clinic
  > 7x park_recreation
  > 6x education_high_school
  > 6x place_of_worship
  > 5x micro_atm
  > 5x government_central
  > 4x pharmacy
  > 3x culture_theatre
  > 3x education_preschool
  > 3x sports_centre
  > 2x post_office
  > 2x university_campus
  > 2x social_support_mops
  > 2x micro_parcel_locker
  > 2x supermarket
  > 1x shopping_mall
  > 1x business_office
  > 1x police_station

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - post_office            : Urząd Pocztowy 1
    - micro_atm              : Bankomat Millennium
    - bank                   : Millennium Bank
    - pharmacy               : Cef@Rm 36
    - gastronomy             : Kuźnia Smaku
    - personal_services      : Rossmann
    - bank                   : PKO BP
    - pharmacy               : Gemini
    - government_central     : NFZ
    - personal_services      : Golibroda
    - bank                   : BRE Bank
    - micro_atm              : Euronet
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Chełchy — Wieś (891f55226dbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Chełchy — Wieś
  stop_id               : 164
  h3_index              : 891f55226dbffff
  hub_id                : 13
  hub_name              : Chełchy — Wieś
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.6250
  local_percentile      : 2.4155
  stop_local_score_raw  : -1.1968
  local_score_raw       : -1.0913
  hub_grade             : F
  hub_percentile        : 2.4155

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.5714
  transit_freq          : 1.1429
  stop_routes_count     : 1
  stop_routes           : 5
  stop_hub_share        : 0.5000
  hub_departures_h      : 1.1429
  hub_routes            : 5

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 1690.1362
  market_val            : 1690.1362
  stop_liquidity        : 2
  hub_market_val        : 1690.1362

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 32.0752
  pop_val               : 64.7597
  hub_pop_val           : 64.7597

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Bajtkowo — PKS (891f5576973ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Bajtkowo — PKS
  stop_id               : 146
  h3_index              : 891f5576973ffff
  hub_id                : 155
  hub_name              : Bajtkowo — PKS
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 2.5000
  local_percentile      : 1.9324
  stop_local_score_raw  : -1.0454
  local_score_raw       : -1.1305
  hub_grade             : F
  hub_percentile        : 1.9324

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.2857
  transit_freq          : 0.2857
  stop_routes_count     : 1
  stop_routes           : 10
  stop_hub_share        : 1.0000
  hub_departures_h      : 0.2857
  hub_routes            : 10

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 2464.4529
  market_val            : 2464.4529
  stop_liquidity        : 2
  hub_market_val        : 2464.4529

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 62.4707
  pop_val               : 62.4707
  hub_pop_val           : 62.4707

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Rymki (891f5576c63ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Rymki
  stop_id               : 180
  h3_index              : 891f5576c63ffff
  hub_id                : 41
  hub_name              : Rymki
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 2.1875
  local_percentile      : 1.4493
  stop_local_score_raw  : -1.0608
  local_score_raw       : -1.1668
  hub_grade             : F
  hub_percentile        : 1.4493

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.7143
  transit_freq          : 0.7143
  stop_routes_count     : 2
  stop_routes           : 10, 18
  stop_hub_share        : 1.0000
  hub_departures_h      : 0.7143
  hub_routes            : 10, 18

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 1688.6910
  market_val            : 1688.6910
  stop_liquidity        : 2
  hub_market_val        : 1688.6910

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 99.0000
  pop_val               : 99.0000
  hub_pop_val           : 99.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Buczki (891f5523043ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Buczki
  stop_id               : 159
  h3_index              : 891f5523043ffff
  hub_id                : 135
  hub_name              : Buczki
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 1.7188
  local_percentile      : 0.9662
  stop_local_score_raw  : -1.1395
  local_score_raw       : -1.2087
  hub_grade             : F
  hub_percentile        : 0.9662

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 4784.2342
  market_val            : 4784.2342
  stop_liquidity        : 0
  hub_market_val        : 4784.2342

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 0.0000
  pop_val               : 0.0000
  hub_pop_val           : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Grabnik Osada (891f5505aafffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Grabnik Osada
  stop_id               : 264
  h3_index              : 891f5505aafffff
  hub_id                : 104
  hub_name              : Grabnik Osada
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.3125
  local_percentile      : 0.4831
  stop_local_score_raw  : -1.5540
  local_score_raw       : -1.6146
  hub_grade             : F
  hub_percentile        : 0.4831

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 1205.0124
  market_val            : 1205.0124
  stop_liquidity        : 2
  hub_market_val        : 1205.0124

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 102.0000
  pop_val               : 102.0000
  hub_pop_val           : 102.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>

---

## GIZYCKO
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: 0.000, Std: 0.512)
     Rozkład Kartek (unikalne Huby): A: 10, A+: 5, B: 14, C: 19, D: 23, F: 23
[👥 BAZA LUDNOŚCI GUS] ✅ DEMOGRAFIA OK (Odchylenie zaledwie 19.0%)
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
[✅]  H3 Res 8 Grid 100% Valid (238 komórek, 29 pustyń transportowych)
```

### Faza 0: Statystyki ogólne
- **Populacja Miasta:** 35,698 (GUS Grid)
- **Transakcje RCN:** 605

### Faza III: Top 20 POI (Miasto)

| Kategoria | Tier | Ilość w Mieście | Wartość Punktowa (W) |
|---|---|---|---|
| `hospital_clinical` | T1_NATIONAL_MAGNET | 1 | 19,697,361 |
| `regional_rail_hub` | T1_NATIONAL_MAGNET | 2 | 5,266,139 |
| `commercial_zone` | T2_STRATEGIC_HUB | 3 | 3,906,496 |
| `industrial_zone` | T2_STRATEGIC_HUB | 13 | 3,882,692 |
| `shopping_mall` | T2_STRATEGIC_HUB | 5 | 2,353,823 |
| `supermarket` | T2_STRATEGIC_HUB | 19 | 1,921,994 |
| `government_central` | T2_STRATEGIC_HUB | 15 | 1,741,160 |
| `business_office` | T2_STRATEGIC_HUB | 3 | 1,487,948 |
| `marketplace` | T3_LOCAL_CORE | 1 | 782,047 |
| `education_high_school` | T3_LOCAL_CORE | 15 | 630,278 |
| `sports_centre` | T3_LOCAL_CORE | 17 | 456,692 |
| `culture_theatre` | T3_LOCAL_CORE | 3 | 408,761 |
| `health_clinic` | T3_LOCAL_CORE | 4 | 368,943 |
| `social_support_mops` | T3_LOCAL_CORE | 1 | 267,845 |
| `police_station` | T4_DAILY_SERVICE | 2 | 79,146 |
| `specialized_retail` | T4_DAILY_SERVICE | 20 | 74,281 |
| `education_preschool` | T4_DAILY_SERVICE | 12 | 72,727 |
| `car_services` | T4_DAILY_SERVICE | 6 | 70,563 |
| `bank` | T4_DAILY_SERVICE | 7 | 54,958 |
| `pharmacy` | T4_DAILY_SERVICE | 16 | 51,777 |

### Faza IV: Próbki Pełnego DNA 100% (Zobacz szczegóły POI!)

#### NAJLEPSZE PRZYSTANKI (TOP 5)
<details><summary><b>Wilkasy Niegocin (891f5511e53ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Wilkasy Niegocin
  stop_id               : 12658
  h3_index              : 891f5511e53ffff
  hub_id                : 38
  hub_name              : Wilkasy Niegocin
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 100.0000
  local_percentile      : 100.0000
  stop_local_score_raw  : 0.8789
  local_score_raw       : 0.8244
  hub_grade             : A+
  hub_percentile        : 100.0000

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 1096926.0507
  infra_score           : 1657306.6368
  stop_raw_gravity      : 1034709.8600
  stop_entropy          : 0.0601
  hub_infra_score       : 1657306.6368

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 10940.4560
  market_val            : 10940.4560
  stop_liquidity        : 9
  hub_market_val        : 10940.4560

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 87.0929
  pop_val               : 101.0770
  hub_pop_val           : 101.0770

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 2x industrial_zone
  > 1x micro_parcel_locker
  > 1x car_services
  > 1x convenience_store
  > 1x micro_playground

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_parcel_locker    : Paczkomat InPost
    - car_services           : FALCO
    - industrial_zone        : GLAMOX Wilkasy
```
</details>
<details><summary><b>Wilkasy — Olsztyńska Niegocin (891f5511e53ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Wilkasy — Olsztyńska Niegocin
  stop_id               : 88
  h3_index              : 891f5511e53ffff
  hub_id                : 32
  hub_name              : Wilkasy — Olsztyńska Niegocin
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 99.3007
  local_percentile      : 98.9362
  stop_local_score_raw  : 0.8624
  local_score_raw       : 0.8182
  hub_grade             : A+
  hub_percentile        : 98.9362

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 1673367.1832
  infra_score           : 2433224.7316
  stop_raw_gravity      : 1089578.9405
  stop_entropy          : 0.5358
  hub_infra_score       : 2433224.7316

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 10940.4560
  market_val            : 10940.4560
  stop_liquidity        : 9
  hub_market_val        : 10940.4560

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 57.5019
  pop_val               : 77.1061
  hub_pop_val           : 77.1061

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 2x industrial_zone
  > 1x gastronomy
  > 1x micro_parcel_locker
  > 1x car_services
  > 1x place_of_worship

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy             : Agromargot - Restauracja Kuchnia Regionalna Noclegi
    - micro_parcel_locker    : Paczkomat InPost
    - car_services           : FALCO
    - place_of_worship       : Kościół pw. Świętego Rafała Kalinowskiego
    - industrial_zone        : GLAMOX Wilkasy
```
</details>
<details><summary><b>Plac Grunwaldzki — Bank (891f5511c03ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Plac Grunwaldzki — Bank
  stop_id               : 60
  h3_index              : 891f5511c03ffff
  hub_id                : 45
  hub_name              : Plac Grunwaldzki — Bank
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 98.6014
  local_percentile      : 97.8723
  stop_local_score_raw  : 0.8325
  local_score_raw       : 0.7727
  hub_grade             : A+
  hub_percentile        : 97.8723

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 6593653.9191
  infra_score           : 7654109.4769
  stop_raw_gravity      : 2642809.5350
  stop_entropy          : 1.4949
  hub_infra_score       : 7654109.4769

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 5174.1610
  market_val            : 5174.1610
  stop_liquidity        : 34
  hub_market_val        : 5174.1610

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 2134.8645
  pop_val               : 2451.0752
  hub_pop_val           : 2451.0752

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 33x gastronomy
  > 10x convenience_store
  > 8x sports_centre
  > 7x pharmacy
  > 7x bank
  > 7x micro_parcel_locker
  > 6x micro_atm
  > 6x government_central
  > 5x micro_playground
  > 4x supermarket
  > 4x specialized_retail
  > 4x shopping_mall
  > 4x education_high_school
  > 3x park_recreation
  > 2x post_office
  > 2x education_preschool
  > 1x business_office
  > 1x health_clinic
  > 1x personal_services
  > 1x culture_theatre
  > 1x place_of_worship
  > 1x marketplace

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store      : Żabka
    - convenience_store      : Sienkiel
    - supermarket            : Biedronka
    - post_office            : InPost
    - post_office            : Poczta Polska
    - gastronomy             : Pizza Oregano
    - pharmacy               : Parkowa
    - convenience_store      : Anitrex
    - pharmacy               : Salveo
    - gastronomy             : Korsarz
    - gastronomy             : Porto
    - gastronomy             : Restauracja Hotel Wodnik***
```
</details>
<details><summary><b>Warszawska — Kościół Ewangelicki (891f5511c0fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Warszawska — Kościół Ewangelicki
  stop_id               : 79
  h3_index              : 891f5511c0fffff
  hub_id                : 46
  hub_name              : Warszawska — Kościół Ewangelicki
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 97.2028
  local_percentile      : 96.8085
  stop_local_score_raw  : 0.7192
  local_score_raw       : 0.6698
  hub_grade             : A+
  hub_percentile        : 96.8085

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 5532926.1762
  infra_score           : 6945303.9000
  stop_raw_gravity      : 2440739.3003
  stop_entropy          : 1.2669
  hub_infra_score       : 6945303.9000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 4864.4678
  market_val            : 4864.4678
  stop_liquidity        : 38
  hub_market_val        : 4864.4678

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 1092.7516
  pop_val               : 1343.2128
  hub_pop_val           : 1343.2128

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 30x gastronomy
  > 9x convenience_store
  > 7x micro_atm
  > 7x pharmacy
  > 7x bank
  > 7x government_central
  > 6x sports_centre
  > 5x supermarket
  > 5x shopping_mall
  > 4x specialized_retail
  > 4x micro_playground
  > 4x micro_parcel_locker
  > 4x education_high_school
  > 3x education_preschool
  > 3x place_of_worship
  > 3x park_recreation
  > 2x health_clinic
  > 1x post_office
  > 1x business_office
  > 1x personal_services
  > 1x culture_theatre
  > 1x marketplace

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store      : Żabka
    - convenience_store      : Sienkiel
    - supermarket            : Biedronka
    - post_office            : Poczta Polska
    - gastronomy             : Tawerna Marina
    - micro_atm              : Euronet
    - gastronomy             : Pizza Oregano
    - pharmacy               : Parkowa
    - convenience_store      : Anitrex
    - pharmacy               : Salveo
    - gastronomy             : Restauracja Hotel Wodnik***
    - gastronomy             : Omega
```
</details>
<details><summary><b>Al. 1-go Maja (891f5511c17ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Al. 1-go Maja
  stop_id               : 10
  h3_index              : 891f5511c17ffff
  hub_id                : 49
  hub_name              : Al. 1-go Maja
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A
  grade                 : A+
  stop_percentile       : 94.4056
  local_percentile      : 95.7447
  stop_local_score_raw  : 0.6439
  local_score_raw       : 0.6369
  hub_grade             : A+
  hub_percentile        : 95.7447

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 3234300.7743
  infra_score           : 5567804.1037
  stop_raw_gravity      : 1178641.5049
  stop_entropy          : 1.7441
  hub_infra_score       : 5567804.1037

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 4612.5742
  market_val            : 4612.5742
  stop_liquidity        : 36
  hub_market_val        : 4612.5742

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 959.7614
  pop_val               : 1501.6143
  hub_pop_val           : 1501.6143

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 12x gastronomy
  > 6x education_high_school
  > 6x government_central
  > 6x sports_centre
  > 5x pharmacy
  > 5x bank
  > 5x place_of_worship
  > 5x micro_playground
  > 4x convenience_store
  > 4x micro_atm
  > 4x education_preschool
  > 4x supermarket
  > 4x micro_parcel_locker
  > 3x specialized_retail
  > 2x post_office
  > 2x shopping_mall
  > 1x car_services
  > 1x social_support_mops
  > 1x culture_theatre
  > 1x police_station
  > 1x marketplace

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - post_office            : InPost
    - post_office            : Poczta Polska
    - gastronomy             : Pizza Oregano
    - car_services           : Orlen
    - convenience_store      : Anitrex
    - pharmacy               : Salveo
    - gastronomy             : Restauracja Hotel Wodnik***
    - bank                   : BNP Paribas Polska
    - bank                   : PKO BP
    - gastronomy             : Prosto z Młynka
    - gastronomy             : Kuchnie Świata
    - pharmacy               : Dr. Max
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Wronka Kolonia (891f551accfffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Wronka Kolonia
  stop_id               : 159
  h3_index              : 891f551accfffff
  hub_id                : 27
  hub_name              : Wronka Kolonia
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 9.0909
  local_percentile      : 5.3191
  stop_local_score_raw  : -0.6525
  local_score_raw       : -0.7097
  hub_grade             : F
  hub_percentile        : 5.3191

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 4124.8453
  market_val            : 4124.8453
  stop_liquidity        : 0
  hub_market_val        : 4124.8453

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 17.0000
  pop_val               : 17.0000
  hub_pop_val           : 17.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Sterławki Małe (891f551a56fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Sterławki Małe
  stop_id               : 12666
  h3_index              : 891f551a56fffff
  hub_id                : 50
  hub_name              : Sterławki Małe
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 4.1958
  local_percentile      : 4.2553
  stop_local_score_raw  : -0.7008
  local_score_raw       : -0.7591
  hub_grade             : F
  hub_percentile        : 4.2553

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 4124.8453
  market_val            : 4124.8453
  stop_liquidity        : 0
  hub_market_val        : 4124.8453

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 10.0000
  pop_val               : 10.0000
  hub_pop_val           : 10.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Sulimy — Kolonia (891f5510e37ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Sulimy — Kolonia
  stop_id               : 68
  h3_index              : 891f5510e37ffff
  hub_id                : 81
  hub_name              : Sulimy — Kolonia
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 2.0979
  local_percentile      : 3.1915
  stop_local_score_raw  : -0.7451
  local_score_raw       : -0.8045
  hub_grade             : F
  hub_percentile        : 3.1915

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 4124.8453
  market_val            : 4124.8453
  stop_liquidity        : 0
  hub_market_val        : 4124.8453

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 6.0000
  pop_val               : 6.0000
  hub_pop_val           : 6.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Spytkowo (891f55101b7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Spytkowo
  stop_id               : 64
  h3_index              : 891f55101b7ffff
  hub_id                : 84
  hub_name              : Spytkowo
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 1.3986
  local_percentile      : 2.1277
  stop_local_score_raw  : -0.7833
  local_score_raw       : -0.8320
  hub_grade             : F
  hub_percentile        : 2.1277

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 2497.6807
  market_val            : 2497.6807
  stop_liquidity        : 1
  hub_market_val        : 2497.6807

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 108.3840
  pop_val               : 108.3840
  hub_pop_val           : 108.3840

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Spytkowo (891f5512a7bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Spytkowo
  stop_id               : 63
  h3_index              : 891f5512a7bffff
  hub_id                : 41
  hub_name              : Spytkowo
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.6993
  local_percentile      : 1.0638
  stop_local_score_raw  : -0.8006
  local_score_raw       : -0.8498
  hub_grade             : F
  hub_percentile        : 1.0638

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 2497.6807
  market_val            : 2497.6807
  stop_liquidity        : 1
  hub_market_val        : 2497.6807

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 90.6160
  pop_val               : 90.6160
  hub_pop_val           : 90.6160

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>

---

## GORZOW
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ⚠️ Z-Score ODD DIST (Mean: -0.000, Std: 0.467)
     Rozkład Kartek (unikalne Huby): A: 22, A+: 11, B: 32, C: 44, D: 54, F: 53
[👥 BAZA LUDNOŚCI GUS] ✅ DEMOGRAFIA OK (Odchylenie zaledwie 7.1%)
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
[✅]  H3 Res 8 Grid 100% Valid (290 komórek, 84 pustyń transportowych)
```

### Faza 0: Statystyki ogólne
- **Populacja Miasta:** 128,465 (GUS Grid)
- **Transakcje RCN:** 3,895

### Faza III: Top 20 POI (Miasto)

| Kategoria | Tier | Ilość w Mieście | Wartość Punktowa (W) |
|---|---|---|---|
| `hospital_clinical` | T1_NATIONAL_MAGNET | 3 | 23,049,995 |
| `national_stadium` | T1_NATIONAL_MAGNET | 3 | 20,616,590 |
| `university_campus` | T1_NATIONAL_MAGNET | 9 | 14,353,241 |
| `regional_rail_hub` | T1_NATIONAL_MAGNET | 2 | 6,178,736 |
| `industrial_zone` | T2_STRATEGIC_HUB | 304 | 3,550,019 |
| `shopping_mall` | T2_STRATEGIC_HUB | 16 | 3,543,074 |
| `commercial_zone` | T2_STRATEGIC_HUB | 255 | 2,829,093 |
| `student_dormitory` | T2_STRATEGIC_HUB | 1 | 2,490,839 |
| `supermarket` | T2_STRATEGIC_HUB | 67 | 2,406,874 |
| `government_central` | T2_STRATEGIC_HUB | 48 | 2,148,928 |
| `business_office` | T2_STRATEGIC_HUB | 18 | 1,545,347 |
| `sports_centre` | T3_LOCAL_CORE | 34 | 648,447 |
| `education_high_school` | T3_LOCAL_CORE | 98 | 638,663 |
| `marketplace` | T3_LOCAL_CORE | 6 | 572,850 |
| `health_clinic` | T3_LOCAL_CORE | 45 | 408,776 |
| `culture_theatre` | T3_LOCAL_CORE | 16 | 382,779 |
| `social_support_mops` | T3_LOCAL_CORE | 4 | 357,496 |
| `education_preschool` | T4_DAILY_SERVICE | 46 | 117,548 |
| `police_station` | T4_DAILY_SERVICE | 9 | 100,099 |
| `car_services` | T4_DAILY_SERVICE | 33 | 81,100 |

### Faza IV: Próbki Pełnego DNA 100% (Zobacz szczegóły POI!)

#### NAJLEPSZE PRZYSTANKI (TOP 5)
<details><summary><b>Stilon (891f0a409c3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Stilon
  stop_id               : 143
  h3_index              : 891f0a409c3ffff
  hub_id                : 20
  hub_name              : Stilon
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 95.2687
  local_percentile      : 100.0000
  stop_local_score_raw  : 0.4429
  local_score_raw       : 0.5412
  hub_grade             : A+
  hub_percentile        : 100.0000

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 2846534.0579
  infra_score           : 14694141.7426
  stop_raw_gravity      : 1165143.5213
  stop_entropy          : 1.4431
  hub_infra_score       : 14694141.7426

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 7657.0770
  market_val            : 7602.4155
  stop_liquidity        : 260
  hub_market_val        : 7602.4155

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 246.0350
  pop_val               : 1221.6220
  hub_pop_val           : 1221.6220

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 5x gastronomy
  > 5x specialized_retail
  > 5x commercial_zone
  > 5x micro_playground
  > 4x micro_parcel_locker
  > 4x health_clinic
  > 4x industrial_zone
  > 3x micro_atm
  > 2x education_high_school
  > 2x convenience_store
  > 2x supermarket
  > 2x sports_centre
  > 2x car_services
  > 1x government_central
  > 1x personal_services
  > 1x pharmacy
  > 1x education_preschool
  > 1x university_campus
  > 1x park_recreation

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : Euronet
    - education_high_school  : Cosinus
    - convenience_store      : Żabka
    - gastronomy             : Sushi Madara
    - government_central     : PGW \
    - specialized_retail     : KiK
    - specialized_retail     : Pepco
    - specialized_retail     : Sinsay
    - personal_services      : Rossmann
    - supermarket            : Biedronka
    - specialized_retail     : RTV Euro AGD
    - gastronomy             : Świat Pierogów
```
</details>
<details><summary><b>Rondo Szczecińskie (891f0a40e77ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Rondo Szczecińskie
  stop_id               : 189
  h3_index              : 891f0a40e77ffff
  hub_id                : 41
  hub_name              : Rondo Szczecińskie
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 99.4743
  local_percentile      : 99.5370
  stop_local_score_raw  : 0.5816
  local_score_raw       : 0.5221
  hub_grade             : A+
  hub_percentile        : 99.5370

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 3583843.6082
  infra_score           : 16654706.3227
  stop_raw_gravity      : 1654336.0249
  stop_entropy          : 1.1663
  hub_infra_score       : 16654706.3227

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 8420.8871
  market_val            : 8008.4417
  stop_liquidity        : 232
  hub_market_val        : 8008.4417

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 368.8634
  pop_val               : 655.2534
  hub_pop_val           : 655.2534

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 14x micro_playground
  > 11x micro_parcel_locker
  > 6x specialized_retail
  > 6x government_central
  > 5x industrial_zone
  > 4x supermarket
  > 4x gastronomy
  > 4x commercial_zone
  > 2x police_station
  > 2x micro_atm
  > 2x personal_services
  > 2x car_services
  > 2x shopping_mall
  > 1x post_office
  > 1x bank
  > 1x convenience_store
  > 1x pharmacy
  > 1x sports_centre
  > 1x university_campus

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - supermarket            : Biedronka
    - specialized_retail     : RTV Euro AGD
    - police_station         : Komisariat Policji I w Gorzowie
    - micro_atm              : Euronet
    - post_office            : Agencja Pocztowa
    - bank                   : Gospodarczy Bank Spółdzielczy
    - personal_services      : Rossmann
    - specialized_retail     : Pepco
    - gastronomy             : Berlin Döner Kebap
    - convenience_store      : Żabka
    - micro_parcel_locker    : Paczkomat InPost
    - micro_parcel_locker    : Paczkomat InPost
```
</details>
<details><summary><b>Pl. Słoneczny (891f0a40acbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Pl. Słoneczny
  stop_id               : 347
  h3_index              : 891f0a40acbffff
  hub_id                : 118
  hub_name              : Pl. Słoneczny
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : B
  grade                 : A+
  stop_percentile       : 82.4182
  local_percentile      : 99.0741
  stop_local_score_raw  : 0.3202
  local_score_raw       : 0.4817
  hub_grade             : A+
  hub_percentile        : 99.0741

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 1447019.3508
  infra_score           : 17485303.8893
  stop_raw_gravity      : 619813.2260
  stop_entropy          : 1.3346
  hub_infra_score       : 17485303.8893

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6396.1257
  market_val            : 6232.6041
  stop_liquidity        : 68
  hub_market_val        : 6232.6041

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 514.7319
  pop_val               : 1857.3937
  hub_pop_val           : 1857.3937

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 9x commercial_zone
  > 8x micro_playground
  > 6x industrial_zone
  > 4x convenience_store
  > 3x pharmacy
  > 3x micro_parcel_locker
  > 2x social_support_mops
  > 2x personal_services
  > 2x health_clinic
  > 2x place_of_worship
  > 1x post_office
  > 1x micro_atm
  > 1x business_office
  > 1x culture_theatre
  > 1x education_preschool
  > 1x supermarket
  > 1x park_recreation
  > 1x education_high_school
  > 1x hospital_clinical
  > 1x sports_centre

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store      : Groszek
    - social_support_mops    : Centrum Charytatywne im. Jana Pawła II
    - post_office            : UP nr 10 Gorzów
    - business_office        : Reklama Design Creations -FUX
    - convenience_store      : Chata Polska
    - convenience_store      : Żabka
    - pharmacy               : Ziko Apteka
    - pharmacy               : Dom Leków
    - convenience_store      : Sklep spożywczy \
    - culture_theatre        : Biblioteka Publiczna Wojewódzka i Miejska filia nr 4
    - personal_services      : Grażyna
    - micro_parcel_locker    : Appkomat InPost
```
</details>
<details><summary><b>Pluty (891f0a40d0fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Pluty
  stop_id               : 68
  h3_index              : 891f0a40d0fffff
  hub_id                : 83
  hub_name              : Pluty
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 99.9416
  local_percentile      : 98.6111
  stop_local_score_raw  : 0.5930
  local_score_raw       : 0.4763
  hub_grade             : A+
  hub_percentile        : 98.6111

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 2150978.0324
  infra_score           : 5789902.9199
  stop_raw_gravity      : 1110884.8953
  stop_entropy          : 0.9363
  hub_infra_score       : 5789902.9199

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 8005.1926
  market_val            : 8005.1926
  stop_liquidity        : 278
  hub_market_val        : 8005.1926

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 971.0084
  pop_val               : 1311.3502
  hub_pop_val           : 1311.3502

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 34x micro_playground
  > 11x specialized_retail
  > 6x micro_parcel_locker
  > 5x supermarket
  > 4x education_preschool
  > 3x gastronomy
  > 3x convenience_store
  > 3x personal_services
  > 3x shopping_mall
  > 2x bank
  > 2x health_clinic
  > 2x pharmacy
  > 1x micro_atm
  > 1x place_of_worship
  > 1x education_high_school
  > 1x commercial_zone
  > 1x marketplace
  > 1x park_recreation
  > 1x sports_centre

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy             : Pizzeria OK
    - bank                   : PKO BP
    - health_clinic          : MediRaj
    - convenience_store      : Żabka
    - gastronomy             : Pizzeria O.K.
    - supermarket            : Chata Polska
    - specialized_retail     : Top Secret Outlet
    - personal_services      : Rossmann
    - specialized_retail     : Monnari
    - specialized_retail     : Quiosque
    - specialized_retail     : Scotfree
    - specialized_retail     : Abra Meble
```
</details>
<details><summary><b>Londyńska (891f0a40e47ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Londyńska
  stop_id               : 1242
  h3_index              : 891f0a40e47ffff
  hub_id                : 140
  hub_name              : Londyńska
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 99.2407
  local_percentile      : 98.1481
  stop_local_score_raw  : 0.5326
  local_score_raw       : 0.4745
  hub_grade             : A+
  hub_percentile        : 98.1481

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 905476.1414
  infra_score           : 3919326.1591
  stop_raw_gravity      : 585276.6180
  stop_entropy          : 0.5471
  hub_infra_score       : 3919326.1591

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 7900.0000
  market_val            : 7900.0000
  stop_liquidity        : 692
  hub_market_val        : 7900.0000

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 1605.5830
  pop_val               : 2112.9060
  hub_pop_val           : 2112.9060

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 18x micro_playground
  > 10x micro_parcel_locker
  > 5x car_services
  > 4x supermarket
  > 4x specialized_retail
  > 3x gastronomy
  > 2x micro_atm
  > 2x personal_services
  > 2x convenience_store
  > 2x government_central
  > 2x commercial_zone
  > 2x shopping_mall
  > 1x post_office
  > 1x bank
  > 1x pharmacy
  > 1x industrial_zone
  > 1x university_campus

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - supermarket            : Biedronka
    - micro_atm              : Euronet
    - post_office            : Agencja Pocztowa
    - bank                   : Gospodarczy Bank Spółdzielczy
    - car_services           : Top-JAAN
    - personal_services      : Rossmann
    - specialized_retail     : Pepco
    - gastronomy             : Berlin Döner Kebap
    - convenience_store      : Żabka
    - micro_parcel_locker    : Paczkomat InPost
    - convenience_store      : Żabka
    - micro_parcel_locker    : Paczkomat InPost
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Żurawia (891f0a4e0cbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Żurawia
  stop_id               : 1199
  h3_index              : 891f0a4e0cbffff
  hub_id                : 8
  hub_name              : Żurawia
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 1.5771
  local_percentile      : 2.3148
  stop_local_score_raw  : -1.9193
  local_score_raw       : -1.8628
  hub_grade             : F
  hub_percentile        : 2.3148

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6015.3994
  market_val            : 6015.3994
  stop_liquidity        : 0
  hub_market_val        : 6015.3994

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 11.5345
  pop_val               : 23.2207
  hub_pop_val           : 23.2207

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Osiedlowa I (gr. strefy) (891f0a4064bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Osiedlowa I (gr. strefy)
  stop_id               : 1222
  h3_index              : 891f0a4064bffff
  hub_id                : 175
  hub_name              : Osiedlowa I (gr. strefy)
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 1.3435
  local_percentile      : 1.8519
  stop_local_score_raw  : -1.9326
  local_score_raw       : -1.8764
  hub_grade             : F
  hub_percentile        : 1.8519

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6015.3994
  market_val            : 6015.3994
  stop_liquidity        : 0
  hub_market_val        : 6015.3994

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 10.1501
  pop_val               : 20.2604
  hub_pop_val           : 20.2604

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Racław III (891f0a415bbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Racław III
  stop_id               : 201
  h3_index              : 891f0a415bbffff
  hub_id                : 80
  hub_name              : Racław III
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.6425
  local_percentile      : 1.3889
  stop_local_score_raw  : -1.9574
  local_score_raw       : -1.8999
  hub_grade             : F
  hub_percentile        : 1.3889

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6015.3994
  market_val            : 6015.3994
  stop_liquidity        : 0
  hub_market_val        : 6015.3994

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 7.9540
  pop_val               : 16.0000
  hub_pop_val           : 16.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Drozdowa Ogrody Działkowe (891f0a4e45bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Drozdowa Ogrody Działkowe
  stop_id               : 445
  h3_index              : 891f0a4e45bffff
  hub_id                : 207
  hub_name              : Drozdowa Ogrody Działkowe
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.4089
  local_percentile      : 0.9259
  stop_local_score_raw  : -2.0487
  local_score_raw       : -2.0518
  hub_grade             : F
  hub_percentile        : 0.9259

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6015.3994
  market_val            : 6015.3994
  stop_liquidity        : 0
  hub_market_val        : 6015.3994

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 3.0000
  pop_val               : 3.0000
  hub_pop_val           : 3.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Czechów (891f0a4501bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Czechów
  stop_id               : 434
  h3_index              : 891f0a4501bffff
  hub_id                : 194
  hub_name              : Czechów
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.1752
  local_percentile      : 0.4630
  stop_local_score_raw  : -2.4018
  local_score_raw       : -2.2802
  hub_grade             : F
  hub_percentile        : 0.4630

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 991.6411
  infra_score           : 2231.5868
  stop_raw_gravity      : 917.3345
  stop_entropy          : 0.0810
  hub_infra_score       : 2231.5868

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 696.0874
  market_val            : 696.0874
  stop_liquidity        : 2
  hub_market_val        : 696.0874

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 31.1904
  pop_val               : 39.3098
  hub_pop_val           : 39.3098

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x convenience_store
  > 1x micro_playground
  > 1x micro_parcel_locker
  > 1x place_of_worship

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store      : Maniek
    - micro_parcel_locker    : Paczkomat InPost
    - place_of_worship       : Kościół pw. Najświętszej Maryi Panny Królowej Polski
```
</details>

---

## GZM
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: 0.000, Std: 0.622)
     Rozkład Kartek (unikalne Huby): A: 480, A+: 241, B: 721, C: 962, D: 1201, F: 1201
[👥 BAZA LUDNOŚCI GUS] ❌ OSTRZEŻENIE DEMOGRAFICZNE: Odchylenie 49.3%. GUS: 3,432,986 vs Baza: 2,300,000
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
[✅]  H3 Res 8 Grid 100% Valid (6,475 komórek, 1603 pustyń transportowych)
```

### Faza 0: Statystyki ogólne
- **Populacja Miasta:** 3,432,986 (GUS Grid)
- **Transakcje RCN:** 212,099

### Faza III: Top 20 POI (Miasto)

| Kategoria | Tier | Ilość w Mieście | Wartość Punktowa (W) |
|---|---|---|---|
| `international_airport` | T0_MEGA_HUB | 2 | 238,138,740 |
| `national_rail_hub` | T0_MEGA_HUB | 38 | 39,720,124 |
| `national_stadium` | T1_NATIONAL_MAGNET | 83 | 24,061,548 |
| `hospital_clinical` | T1_NATIONAL_MAGNET | 118 | 23,294,134 |
| `university_campus` | T1_NATIONAL_MAGNET | 116 | 18,876,212 |
| `exhibition_centre` | T1_NATIONAL_MAGNET | 1 | 8,629,895 |
| `regional_rail_hub` | T1_NATIONAL_MAGNET | 71 | 7,826,238 |
| `industrial_zone` | T2_STRATEGIC_HUB | 4743 | 5,038,833 |
| `logistics_hub` | T2_STRATEGIC_HUB | 2 | 4,789,533 |
| `commercial_zone` | T2_STRATEGIC_HUB | 2538 | 4,528,844 |
| `shopping_mall` | T2_STRATEGIC_HUB | 219 | 4,395,474 |
| `student_dormitory` | T2_STRATEGIC_HUB | 2 | 4,277,326 |
| `supermarket` | T2_STRATEGIC_HUB | 1267 | 3,176,887 |
| `government_central` | T2_STRATEGIC_HUB | 600 | 2,734,574 |
| `business_office` | T2_STRATEGIC_HUB | 886 | 2,161,332 |
| `marketplace` | T3_LOCAL_CORE | 122 | 895,473 |
| `education_high_school` | T3_LOCAL_CORE | 1646 | 885,137 |
| `sports_centre` | T3_LOCAL_CORE | 835 | 793,407 |
| `social_support_mops` | T3_LOCAL_CORE | 289 | 605,871 |
| `culture_theatre` | T3_LOCAL_CORE | 490 | 466,580 |

### Faza IV: Próbki Pełnego DNA 100% (Zobacz szczegóły POI!)

#### NAJLEPSZE PRZYSTANKI (TOP 5)
<details><summary><b>Katowice AWF (891e232d133ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Katowice AWF
  stop_id               : 11084
  h3_index              : 891e232d133ffff
  hub_id                : 2908
  hub_name              : Katowice AWF
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 100.0000
  local_percentile      : 100.0000
  stop_local_score_raw  : 1.8165
  local_score_raw       : 1.7484
  hub_grade             : A+
  hub_percentile        : 100.0000

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 27315162.8373
  infra_score           : 41713201.6654
  stop_raw_gravity      : 12160622.7637
  stop_entropy          : 1.2462
  hub_infra_score       : 41713201.6654

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 48.2857
  transit_freq          : 89.7143
  stop_routes_count     : 23
  stop_routes           : 9, 10, 11, 12, 37, 46, 48, 51, 115, 120, 130, 154, 177, 193, 296, 297, 632, 657, 689, 880, 900, M10, M12
  stop_hub_share        : 0.5382
  hub_departures_h      : 89.7143
  hub_routes            : 9, 10, 11, 12, 37, 46, 48, 51, 115, 120, 130, 154, 177, 193, 296, 297, 632, 657, 689, 880, 900, M10, M12

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 8330.2497
  market_val            : 8330.2497
  stop_liquidity        : 1005
  hub_market_val        : 8330.2497

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 1694.5659
  pop_val               : 2746.7398
  hub_pop_val           : 2746.7398

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 14x personal_services
  > 10x health_clinic
  > 9x convenience_store
  > 7x micro_playground
  > 5x gastronomy
  > 5x university_campus
  > 4x education_high_school
  > 4x place_of_worship
  > 4x commercial_zone
  > 3x pharmacy
  > 3x micro_parcel_locker
  > 3x social_support_mops
  > 3x education_preschool
  > 3x hospital_clinical
  > 2x government_central
  > 2x micro_atm
  > 2x business_office
  > 2x park_recreation
  > 1x culture_theatre
  > 1x post_office
  > 1x specialized_retail
  > 1x car_services
  > 1x supermarket
  > 1x bank
  > 1x police_station

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy             : Strzelec
    - government_central     : Wojewódzka Stacja Sanitarno-Epidemiologiczna w Katowicach
    - health_clinic          : PsychoMEDIC
    - education_high_school  : Szkoła Policealna Nr 7
    - education_high_school  : Technikum Nr 2
    - culture_theatre        : Filia nr 4 Miejska Biblioteka Publiczna w Katowicach
    - pharmacy               : Apteka Główna
    - pharmacy               : Dbam o Zdrowie
    - micro_parcel_locker    : Paczkomat InPost
    - micro_atm              : Euronet
    - convenience_store      : Żabka
    - convenience_store      : Żabka
```
</details>
<details><summary><b>Katowice Dworzec (891e232dcd7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Katowice Dworzec
  stop_id               : 5408
  h3_index              : 891e232dcd7ffff
  hub_id                : 71
  hub_name              : Katowice Dworzec
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A
  grade                 : A+
  stop_percentile       : 92.1681
  local_percentile      : 99.9792
  stop_local_score_raw  : 0.8549
  local_score_raw       : 1.5526
  hub_grade             : A+
  hub_percentile        : 99.9792

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 5563036.6795
  infra_score           : 33115541.7617
  stop_raw_gravity      : 1901987.2131
  stop_entropy          : 1.9249
  hub_infra_score       : 33115541.7617

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 14.0714
  transit_freq          : 100.7143
  stop_routes_count     : 5
  stop_routes           : 10, 12, 46, 154, 657
  stop_hub_share        : 0.1397
  hub_departures_h      : 100.7143
  hub_routes            : 0, 9, 10, 11, 12, 46, 50, 61, 110, 115, 154, 177, 193, 296, 297, 600, 601, 657, 674, 910, 911, 930, 950, AP, M10, M101, M12, M13, M22, M4, Z210

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 7603.1889
  market_val            : 7018.5289
  stop_liquidity        : 946
  hub_market_val        : 7018.5289

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 99.5084
  pop_val               : 578.2183
  hub_pop_val           : 578.2183

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 150x gastronomy
  > 136x specialized_retail
  > 69x personal_services
  > 34x convenience_store
  > 26x bank
  > 23x micro_atm
  > 19x health_clinic
  > 15x commercial_zone
  > 13x pharmacy
  > 11x culture_theatre
  > 11x business_office
  > 10x government_central
  > 9x park_recreation
  > 8x micro_parcel_locker
  > 8x place_of_worship
  > 7x supermarket
  > 6x university_campus
  > 6x micro_playground
  > 5x education_high_school
  > 5x shopping_mall
  > 4x post_office
  > 3x car_services
  > 2x industrial_zone
  > 1x police_station
  > 1x national_rail_hub
  > 1x sports_centre
  > 1x social_support_mops
  > 1x exhibition_centre
  > 1x marketplace

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - supermarket            : Zenit
    - government_central     : Sąd Okręgowy w Katowicach
    - micro_atm              : Euronet
    - culture_theatre        : Teatr Bez Sceny
    - micro_atm              : Euronet
    - bank                   : Millennium Bank
    - specialized_retail     : H&M
    - gastronomy             : McDonald's
    - gastronomy             : Restauracja Patio
    - gastronomy             : Biała Brama
    - pharmacy               : Pharmavit
    - culture_theatre        : Światowid
```
</details>
<details><summary><b>Katowice Sokolska (891e232c267ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Katowice Sokolska
  stop_id               : 2708
  h3_index              : 891e232c267ffff
  hub_id                : 2216
  hub_name              : Katowice Sokolska
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 98.6931
  local_percentile      : 99.9584
  stop_local_score_raw  : 1.1894
  local_score_raw       : 1.5312
  hub_grade             : A+
  hub_percentile        : 99.9584

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 3853716.3233
  infra_score           : 10696446.6039
  stop_raw_gravity      : 2080287.8809
  stop_entropy          : 0.8525
  hub_infra_score       : 10696446.6039

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 23.5000
  transit_freq          : 93.1429
  stop_routes_count     : 13
  stop_routes           : 11, 40, 61, 70, 177, 600, 601, 657, 805, 911, 930, AP, M101
  stop_hub_share        : 0.2523
  hub_departures_h      : 93.1429
  hub_routes            : 0, 5, 6, 7, 11, 23, 27, 30, 40, 43, 50, 61, 70, 110, 133, 154, 168, 177, 193, 296, 600, 601, 657, 673, 674, 805, 911, 930, 950, AP, M101, M11, M25, M28, M4

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 10049.1066
  market_val            : 9888.6215
  stop_liquidity        : 1549
  hub_market_val        : 9888.6215

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 216.1276
  pop_val               : 492.5660
  hub_pop_val           : 492.5660

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 44x gastronomy
  > 39x specialized_retail
  > 30x personal_services
  > 18x convenience_store
  > 16x health_clinic
  > 15x micro_atm
  > 15x commercial_zone
  > 10x bank
  > 9x micro_parcel_locker
  > 7x business_office
  > 6x education_high_school
  > 6x university_campus
  > 5x micro_playground
  > 4x pharmacy
  > 4x supermarket
  > 4x park_recreation
  > 2x place_of_worship
  > 2x industrial_zone
  > 2x education_preschool
  > 2x social_support_mops
  > 2x shopping_mall
  > 1x culture_theatre
  > 1x police_station
  > 1x car_services

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - specialized_retail     : Difu
    - convenience_store      : Żabka
    - micro_atm              : Euronet
    - culture_theatre        : Teatr Bez Sceny
    - bank                   : Millennium Bank
    - micro_atm              : Santander
    - specialized_retail     : H&M
    - gastronomy             : McDonald's
    - gastronomy             : Restauracja Patio
    - gastronomy             : Biała Brama
    - pharmacy               : Pharmavit
    - gastronomy             : Pod Siódemką
```
</details>
<details><summary><b>Katowice Plac Wolności (891e232c26fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Katowice Plac Wolności
  stop_id               : 4443
  h3_index              : 891e232c26fffff
  hub_id                : 3084
  hub_name              : Katowice Plac Wolności
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 99.2490
  local_percentile      : 99.9376
  stop_local_score_raw  : 1.2578
  local_score_raw       : 1.5282
  hub_grade             : A+
  hub_percentile        : 99.9376

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 3827281.9154
  infra_score           : 16754136.5100
  stop_raw_gravity      : 1297849.8293
  stop_entropy          : 1.9489
  hub_infra_score       : 16754136.5100

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 31.5000
  transit_freq          : 84.5000
  stop_routes_count     : 6
  stop_routes           : 0, 7, 11, 13, 15, 20
  stop_hub_share        : 0.3728
  hub_departures_h      : 84.5000
  hub_routes            : 0, 5, 7, 11, 13, 15, 20, 23, 27, 43, 50, 61, 70, 110, 133, 168, 177, 193, 296, 600, 601, 657, 674, 911, 930, 950, M101, M11, M25, M28

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 11128.1589
  market_val            : 10178.1168
  stop_liquidity        : 1256
  hub_market_val        : 10178.1168

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 100.3495
  pop_val               : 411.0147
  hub_pop_val           : 411.0147

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 111x specialized_retail
  > 104x gastronomy
  > 49x personal_services
  > 24x convenience_store
  > 21x commercial_zone
  > 20x micro_atm
  > 17x health_clinic
  > 15x bank
  > 10x park_recreation
  > 9x pharmacy
  > 9x micro_parcel_locker
  > 8x education_high_school
  > 8x supermarket
  > 7x culture_theatre
  > 6x government_central
  > 6x university_campus
  > 6x business_office
  > 6x micro_playground
  > 5x shopping_mall
  > 4x post_office
  > 4x place_of_worship
  > 3x car_services
  > 2x sports_centre
  > 2x industrial_zone
  > 1x education_preschool
  > 1x police_station
  > 1x national_rail_hub
  > 1x social_support_mops

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - specialized_retail     : Difu
    - government_central     : Sąd Okręgowy w Katowicach
    - micro_atm              : Euronet
    - culture_theatre        : Teatr Bez Sceny
    - specialized_retail     : H&M
    - gastronomy             : McDonald's
    - gastronomy             : Restauracja Patio
    - gastronomy             : Biała Brama
    - pharmacy               : Pharmavit
    - culture_theatre        : Światowid
    - gastronomy             : Pod Siódemką
    - gastronomy             : Bob Klub Cafe
```
</details>
<details><summary><b>Katowice Mikołowska (891e232d137ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Katowice Mikołowska
  stop_id               : 11083
  h3_index              : 891e232d137ffff
  hub_id                : 3544
  hub_name              : Katowice Mikołowska
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 99.9805
  local_percentile      : 99.9168
  stop_local_score_raw  : 1.7783
  local_score_raw       : 1.4983
  hub_grade             : A+
  hub_percentile        : 99.9168

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 24552339.8270
  infra_score           : 35871868.3275
  stop_raw_gravity      : 10823096.4593
  stop_entropy          : 1.2685
  hub_infra_score       : 35871868.3275

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 49.7143
  transit_freq          : 49.7143
  stop_routes_count     : 23
  stop_routes           : 9, 10, 11, 12, 37, 46, 48, 51, 115, 120, 130, 154, 177, 193, 296, 297, 632, 657, 689, 880, 900, M10, M12
  stop_hub_share        : 1.0000
  hub_departures_h      : 49.7143
  hub_routes            : 9, 10, 11, 12, 37, 46, 48, 51, 115, 120, 130, 154, 177, 193, 296, 297, 632, 657, 689, 880, 900, M10, M12

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 7916.9162
  market_val            : 7916.9162
  stop_liquidity        : 1264
  hub_market_val        : 7916.9162

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 1371.7486
  pop_val               : 2072.3464
  hub_pop_val           : 2072.3464

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 17x personal_services
  > 16x convenience_store
  > 13x health_clinic
  > 12x gastronomy
  > 7x education_high_school
  > 6x place_of_worship
  > 6x micro_playground
  > 5x university_campus
  > 4x pharmacy
  > 4x micro_parcel_locker
  > 4x car_services
  > 4x education_preschool
  > 3x specialized_retail
  > 3x social_support_mops
  > 3x government_central
  > 3x business_office
  > 3x hospital_clinical
  > 3x park_recreation
  > 3x commercial_zone
  > 2x bank
  > 2x micro_atm
  > 1x culture_theatre
  > 1x police_station
  > 1x sports_centre
  > 1x supermarket

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy             : Z Liścia
    - gastronomy             : Strzelec
    - health_clinic          : PsychoMEDIC
    - education_high_school  : Szkoła Policealna Nr 7
    - education_high_school  : Technikum Nr 2
    - culture_theatre        : Filia nr 4 Miejska Biblioteka Publiczna w Katowicach
    - place_of_worship       : Zbór Kościóła Wolnych Chrześcijan
    - pharmacy               : Apteka Główna
    - convenience_store      : Żabka
    - convenience_store      : Spożywczy
    - pharmacy               : Dbam o Zdrowie
    - specialized_retail     : Dan Tom
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Bohumin (891e05d333bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Bohumin
  stop_id               : 179223_
  h3_index              : 891e05d333bffff
  hub_id                : 3711
  hub_name              : Bohumin
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.2048
  local_percentile      : 0.1144
  stop_local_score_raw  : -2.3325
  local_score_raw       : -2.1079
  hub_grade             : F
  hub_percentile        : 0.1144

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6066.9456
  market_val            : 6066.9456
  stop_liquidity        : 0
  hub_market_val        : 6066.9456

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 0.0000
  pop_val               : 0.0000
  hub_pop_val           : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Morgi Kościół (891e05962bbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Morgi Kościół
  stop_id               : 1763
  h3_index              : 891e05962bbffff
  hub_id                : 1712
  hub_name              : Morgi Kościół
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.1170
  local_percentile      : 0.0832
  stop_local_score_raw  : -2.5934
  local_score_raw       : -2.2845
  hub_grade             : F
  hub_percentile        : 0.0832

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 3685.0227
  infra_score           : 7579.9290
  stop_raw_gravity      : 3685.0227
  stop_entropy          : -0.0000
  hub_infra_score       : 7579.9290

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 4.0000
  transit_freq          : 7.8571
  stop_routes_count     : 3
  stop_routes           : 76, 160, 162
  stop_hub_share        : 0.5091
  hub_departures_h      : 7.8571
  hub_routes            : 76, 160, 162

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 5.8774
  market_val            : 5.8774
  stop_liquidity        : 18
  hub_market_val        : 5.8774

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 225.3808
  pop_val               : 477.3647
  hub_pop_val           : 477.3647

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x place_of_worship

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - place_of_worship       : Kościół pw. Świętego Jacka w Mysłowicach
```
</details>
<details><summary><b>Tychy Żwaków (891e059191bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Tychy Żwaków
  stop_id               : 75978_I
  h3_index              : 891e059191bffff
  hub_id                : 1001
  hub_name              : Tychy Żwaków
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.0244
  local_percentile      : 0.0624
  stop_local_score_raw  : -3.0243
  local_score_raw       : -2.4496
  hub_grade             : F
  hub_percentile        : 0.0624

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 39.6799
  infra_score           : 544.6341
  stop_raw_gravity      : 39.6799
  stop_entropy          : -0.0000
  hub_infra_score       : 544.6341

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 86.8204
  market_val            : 86.8204
  stop_liquidity        : 40
  hub_market_val        : 86.8204

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 33.9927
  pop_val               : 225.5719
  hub_pop_val           : 225.5719

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x car_services

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - car_services           : Serwis samochodów terenowych
```
</details>
<details><summary><b>Płużniczka Skrzyżowanie z DK-94 (891e230ecb7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Płużniczka Skrzyżowanie z DK-94
  stop_id               : 5912
  h3_index              : 891e230ecb7ffff
  hub_id                : 729
  hub_name              : Płużniczka Skrzyżowanie z DK-94
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.0585
  local_percentile      : 0.0416
  stop_local_score_raw  : -2.9286
  local_score_raw       : -2.5486
  hub_grade             : F
  hub_percentile        : 0.0416

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.7857
  transit_freq          : 1.5714
  stop_routes_count     : 1
  stop_routes           : 203
  stop_hub_share        : 0.5000
  hub_departures_h      : 1.5714
  hub_routes            : 203

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 195.1872
  market_val            : 195.1872
  stop_liquidity        : 1
  hub_market_val        : 195.1872

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 22.0178
  pop_val               : 47.9947
  hub_pop_val           : 47.9947

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Wieszowa Leśniczówka nż (891e2338967ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Wieszowa Leśniczówka nż
  stop_id               : 3264
  h3_index              : 891e2338967ffff
  hub_id                : 1261
  hub_name              : Wieszowa Leśniczówka nż
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.0780
  local_percentile      : 0.0208
  stop_local_score_raw  : -2.9005
  local_score_raw       : -2.5795
  hub_grade             : F
  hub_percentile        : 0.0208

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.5714
  transit_freq          : 1.0000
  stop_routes_count     : 1
  stop_routes           : 112
  stop_hub_share        : 0.5714
  hub_departures_h      : 1.0000
  hub_routes            : 112

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 157.1515
  market_val            : 157.1515
  stop_liquidity        : 3
  hub_market_val        : 157.1515

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 98.1499
  pop_val               : 166.4873
  hub_pop_val           : 166.4873

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>

---

## KIELCE
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: 0.000, Std: 0.683)
     Rozkład Kartek (unikalne Huby): A: 82, A+: 41, B: 123, C: 163, D: 204, F: 204
[👥 BAZA LUDNOŚCI GUS] ❌ OSTRZEŻENIE DEMOGRAFICZNE: Odchylenie 51.2%. GUS: 287,314 vs Baza: 190,000
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
[✅]  H3 Res 8 Grid 100% Valid (843 komórek, 197 pustyń transportowych)
```

### Faza 0: Statystyki ogólne
- **Populacja Miasta:** 287,314 (GUS Grid)
- **Transakcje RCN:** 9,588

### Faza III: Top 20 POI (Miasto)

| Kategoria | Tier | Ilość w Mieście | Wartość Punktowa (W) |
|---|---|---|---|
| `national_rail_hub` | T0_MEGA_HUB | 1 | 34,334,978 |
| `exhibition_centre` | T1_NATIONAL_MAGNET | 1 | 28,542,329 |
| `hospital_clinical` | T1_NATIONAL_MAGNET | 13 | 20,455,516 |
| `national_stadium` | T1_NATIONAL_MAGNET | 5 | 18,770,250 |
| `university_campus` | T1_NATIONAL_MAGNET | 38 | 11,059,361 |
| `regional_rail_hub` | T1_NATIONAL_MAGNET | 7 | 6,560,648 |
| `industrial_zone` | T2_STRATEGIC_HUB | 321 | 4,570,180 |
| `commercial_zone` | T2_STRATEGIC_HUB | 434 | 4,045,233 |
| `shopping_mall` | T2_STRATEGIC_HUB | 20 | 3,551,729 |
| `supermarket` | T2_STRATEGIC_HUB | 121 | 2,252,543 |
| `government_central` | T2_STRATEGIC_HUB | 89 | 2,182,084 |
| `business_office` | T2_STRATEGIC_HUB | 96 | 1,765,433 |
| `student_dormitory` | T2_STRATEGIC_HUB | 1 | 1,716,749 |
| `marketplace` | T3_LOCAL_CORE | 8 | 785,305 |
| `education_high_school` | T3_LOCAL_CORE | 130 | 731,596 |
| `sports_centre` | T3_LOCAL_CORE | 47 | 670,815 |
| `social_support_mops` | T3_LOCAL_CORE | 17 | 478,971 |
| `culture_theatre` | T3_LOCAL_CORE | 41 | 409,596 |
| `health_clinic` | T3_LOCAL_CORE | 226 | 341,320 |
| `car_services` | T4_DAILY_SERVICE | 62 | 115,739 |

### Faza IV: Próbki Pełnego DNA 100% (Zobacz szczegóły POI!)

#### NAJLEPSZE PRZYSTANKI (TOP 5)
<details><summary><b>Czarnowska / Dworzec Autobusowy (891e2eb5ebbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Czarnowska / Dworzec Autobusowy
  stop_id               : 1187
  h3_index              : 891e2eb5ebbffff
  hub_id                : 565
  hub_name              : Czarnowska / Dworzec Autobusowy
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 99.7052
  local_percentile      : 100.0000
  stop_local_score_raw  : 1.5083
  local_score_raw       : 1.5941
  hub_grade             : A+
  hub_percentile        : 100.0000

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 6381659.6475
  infra_score           : 15655639.8570
  stop_raw_gravity      : 2243252.4369
  stop_entropy          : 1.8448
  hub_infra_score       : 15655639.8570

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 31.6429
  transit_freq          : 61.7143
  stop_routes_count     : 22
  stop_routes           : 7, 9, 10, 11, 12, 13, 14, 18, 21, 31, 32, 33, 34, 38, 41, 43, 44, 45, 46, 47, 50, 54
  stop_hub_share        : 0.5127
  hub_departures_h      : 61.7143
  hub_routes            : 7, 9, 10, 11, 12, 13, 14, 18, 21, 31, 32, 33, 34, 38, 41, 43, 44, 45, 46, 47, 50, 51, 54, 0Z

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 7966.9981
  market_val            : 7905.2321
  stop_liquidity        : 256
  hub_market_val        : 7905.2321

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 189.6728
  pop_val               : 417.7852
  hub_pop_val           : 417.7852

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
<details><summary><b>Żytnia (891e2eb5e07ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Żytnia
  stop_id               : 528
  h3_index              : 891e2eb5e07ffff
  hub_id                : 71
  hub_name              : Żytnia
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 98.8209
  local_percentile      : 99.8776
  stop_local_score_raw  : 1.4048
  local_score_raw       : 1.5715
  hub_grade             : A+
  hub_percentile        : 99.8776

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 3196343.3176
  infra_score           : 6769948.7603
  stop_raw_gravity      : 1292558.1904
  stop_entropy          : 1.4729
  hub_infra_score       : 6769948.7603

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 28.0714
  transit_freq          : 69.5000
  stop_routes_count     : 14
  stop_routes           : 1, 2, 8, 18, 25, 27, 28, 29, 31, 35, 51, 102, 107, 108
  stop_hub_share        : 0.4039
  hub_departures_h      : 69.5000
  hub_routes            : 1, 2, 8, 18, 25, 27, 28, 29, 31, 33, 34, 35, 36, 44, 45, 50, 51, 54, 102, 107, 108, 0Z

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6849.3151
  market_val            : 6849.3151
  stop_liquidity        : 289
  hub_market_val        : 6849.3151

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 404.7607
  pop_val               : 857.0645
  hub_pop_val           : 857.0645

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 58x park_recreation
  > 53x gastronomy
  > 31x specialized_retail
  > 30x personal_services
  > 17x convenience_store
  > 16x health_clinic
  > 13x micro_parcel_locker
  > 10x micro_playground
  > 8x micro_atm
  > 6x education_preschool
  > 6x pharmacy
  > 6x education_high_school
  > 6x commercial_zone
  > 5x bank
  > 4x place_of_worship
  > 3x culture_theatre
  > 3x business_office
  > 3x post_office
  > 3x supermarket
  > 1x police_station
  > 1x government_central
  > 1x university_campus
  > 1x social_support_mops
  > 1x sports_centre
  > 1x shopping_mall
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
    - gastronomy             : Bar Turystyczny
    - bank                   : Alior Bank
    - specialized_retail     : Baccara
    - personal_services      : Drogeria Natura
```
</details>
<details><summary><b>Urząd Wojewódzki (891e2eb5ea7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Urząd Wojewódzki
  stop_id               : 1042
  h3_index              : 891e2eb5ea7ffff
  hub_id                : 174
  hub_name              : Urząd Wojewódzki
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A
  grade                 : A+
  stop_percentile       : 94.1783
  local_percentile      : 99.7552
  stop_local_score_raw  : 1.1824
  local_score_raw       : 1.5492
  hub_grade             : A+
  hub_percentile        : 99.7552

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 6748783.6999
  infra_score           : 10175311.1855
  stop_raw_gravity      : 2272697.8941
  stop_entropy          : 1.9695
  hub_infra_score       : 10175311.1855

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 10.7857
  transit_freq          : 49.8571
  stop_routes_count     : 10
  stop_routes           : 10, 11, 14, 21, 25, 26, 38, 41, 43, 47
  stop_hub_share        : 0.2163
  hub_departures_h      : 49.8571
  hub_routes            : 10, 11, 13, 14, 21, 25, 26, 35, 36, 38, 41, 43, 46, 47, 53, 102, 103

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 8585.6016
  market_val            : 8433.7349
  stop_liquidity        : 373
  hub_market_val        : 8433.7349

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 329.7877
  pop_val               : 522.5720
  hub_pop_val           : 522.5720

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
  hub_name              : Grunwaldzka / Mielczarskiego
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 99.8526
  local_percentile      : 99.6328
  stop_local_score_raw  : 1.5444
  local_score_raw       : 1.5220
  hub_grade             : A+
  hub_percentile        : 99.6328

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 2522081.7324
  infra_score           : 4990362.1642
  stop_raw_gravity      : 805905.4491
  stop_entropy          : 2.1295
  hub_infra_score       : 4990362.1642

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 35.0714
  transit_freq          : 59.3571
  stop_routes_count     : 17
  stop_routes           : 1, 2, 5, 8, 13, 18, 25, 27, 29, 31, 35, 46, 50, 51, 102, 107, 114
  stop_hub_share        : 0.5909
  hub_departures_h      : 59.3571
  hub_routes            : 1, 2, 5, 8, 13, 18, 25, 27, 29, 31, 35, 46, 50, 51, 102, 107, 114

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 7402.3260
  market_val            : 7382.9561
  stop_liquidity        : 176
  hub_market_val        : 7382.9561

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 446.0525
  pop_val               : 770.4805
  hub_pop_val           : 770.4805

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
<details><summary><b>Galeria Korona (891e2eb5ea7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Galeria Korona
  stop_id               : 536
  h3_index              : 891e2eb5ea7ffff
  hub_id                : 20
  hub_name              : IX Wieków Kielc / Warszawska
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 99.2631
  local_percentile      : 99.5104
  stop_local_score_raw  : 1.4401
  local_score_raw       : 1.4850
  hub_grade             : A+
  hub_percentile        : 99.5104

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 10768647.5538
  infra_score           : 16559191.5300
  stop_raw_gravity      : 3910833.7042
  stop_entropy          : 1.7535
  hub_infra_score       : 16559191.5300

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 18.9286
  transit_freq          : 37.1429
  stop_routes_count     : 8
  stop_routes           : 13, 24, 35, 36, 46, 53, 102, 103
  stop_hub_share        : 0.5096
  hub_departures_h      : 37.1429
  hub_routes            : 10, 11, 13, 14, 21, 24, 25, 26, 35, 36, 38, 41, 43, 46, 47, 53, 102, 103, 0W

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 8636.3636
  market_val            : 8530.8057
  stop_liquidity        : 365
  hub_market_val        : 8530.8057

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 293.1627
  pop_val               : 530.8620
  hub_pop_val           : 530.8620

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 56x gastronomy
  > 52x park_recreation
  > 50x personal_services
  > 48x specialized_retail
  > 17x bank
  > 17x health_clinic
  > 16x convenience_store
  > 15x government_central
  > 10x commercial_zone
  > 8x micro_parcel_locker
  > 7x micro_atm
  > 7x business_office
  > 7x education_high_school
  > 5x education_preschool
  > 5x post_office
  > 5x place_of_worship
  > 5x micro_playground
  > 4x pharmacy
  > 2x culture_theatre
  > 2x supermarket
  > 2x hospital_clinical
  > 1x sports_centre
  > 1x social_support_mops
  > 1x university_campus
  > 1x shopping_mall

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - culture_theatre        : Multikino
    - supermarket            : Auchan
    - bank                   : mBank
    - bank                   : ING Bank Śląski
    - government_central     : Urząd Marszałkowski Województwa Świętokrzyskiego
    - government_central     : Centrum Powiadamiania Ratunkowego
    - pharmacy               : Całodobowa
    - micro_atm              : mBank
    - convenience_store      : Żabka
    - pharmacy               : Apteka Remedium
    - bank                   : PKO BP
    - gastronomy             : Amigo De La Cocina
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Brzechów-Nowiny (891e2ea6147ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Brzechów-Nowiny
  stop_id               : 1419
  h3_index              : 891e2ea6147ffff
  hub_id                : 771
  hub_name              : Brzechów-Nowiny
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.8843
  local_percentile      : 0.6120
  stop_local_score_raw  : -1.5226
  local_score_raw       : -1.5411
  hub_grade             : F
  hub_percentile        : 0.6120

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.2143
  transit_freq          : 0.5000
  stop_routes_count     : 1
  stop_routes           : 41
  stop_hub_share        : 0.4286
  hub_departures_h      : 0.5000
  hub_routes            : 41

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 7388.8165
  market_val            : 7388.8165
  stop_liquidity        : 0
  hub_market_val        : 7388.8165

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 20.1138
  pop_val               : 37.2839
  hub_pop_val           : 37.2839

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
  hub_name              : Wincentów IV
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.5158
  local_percentile      : 0.4896
  stop_local_score_raw  : -1.7469
  local_score_raw       : -1.6868
  hub_grade             : F
  hub_percentile        : 0.4896

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.2857
  transit_freq          : 0.5000
  stop_routes_count     : 1
  stop_routes           : 28
  stop_hub_share        : 0.5714
  hub_departures_h      : 0.5000
  hub_routes            : 28

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 7388.8165
  market_val            : 7388.8165
  stop_liquidity        : 0
  hub_market_val        : 7388.8165

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 2.1783
  pop_val               : 11.4042
  hub_pop_val           : 11.4042

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Leszczyny Skała (891e2c69647ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Leszczyny Skała
  stop_id               : 1183
  h3_index              : 891e2c69647ffff
  hub_id                : 439
  hub_name              : Leszczyny Skała
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.4053
  local_percentile      : 0.3672
  stop_local_score_raw  : -1.7908
  local_score_raw       : -1.8475
  hub_grade             : F
  hub_percentile        : 0.3672

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.6429
  transit_freq          : 1.2857
  stop_routes_count     : 1
  stop_routes           : 10
  stop_hub_share        : 0.5000
  hub_departures_h      : 1.2857
  hub_routes            : 10

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 7388.8165
  market_val            : 7388.8165
  stop_liquidity        : 0
  hub_market_val        : 7388.8165

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 0.0000
  pop_val               : 0.0000
  hub_pop_val           : 0.0000

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
  hub_id                : 116
  hub_name              : Łubno
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.1474
  local_percentile      : 0.2448
  stop_local_score_raw  : -1.8326
  local_score_raw       : -1.8703
  hub_grade             : F
  hub_percentile        : 0.2448

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.2143
  transit_freq          : 0.5000
  stop_routes_count     : 1
  stop_routes           : 28
  stop_hub_share        : 0.4286
  hub_departures_h      : 0.5000
  hub_routes            : 28

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 7388.8165
  market_val            : 7388.8165
  stop_liquidity        : 0
  hub_market_val        : 7388.8165

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 1.0100
  pop_val               : 2.0000
  hub_pop_val           : 2.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Suków Piaskownia (891e2ea7107ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Suków Piaskownia
  stop_id               : 409
  h3_index              : 891e2ea7107ffff
  hub_id                : 516
  hub_name              : Suków Piaskownia
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.0737
  local_percentile      : 0.1224
  stop_local_score_raw  : -1.8527
  local_score_raw       : -1.9140
  hub_grade             : F
  hub_percentile        : 0.1224

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.4286
  transit_freq          : 0.9286
  stop_routes_count     : 1
  stop_routes           : 11
  stop_hub_share        : 0.4615
  hub_departures_h      : 0.9286
  hub_routes            : 11

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 7388.8165
  market_val            : 7388.8165
  stop_liquidity        : 0
  hub_market_val        : 7388.8165

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 0.0000
  pop_val               : 0.0000
  hub_pop_val           : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>

---

## KRAKOW
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: 0.000, Std: 0.712)
     Rozkład Kartek (unikalne Huby): A: 178, A+: 89, B: 266, C: 355, D: 444, F: 443
[👥 BAZA LUDNOŚCI GUS] ❌ OSTRZEŻENIE DEMOGRAFICZNE: Odchylenie 40.8%. GUS: 1,126,209 vs Baza: 800,000
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
[✅]  H3 Res 8 Grid 100% Valid (2,064 komórek, 403 pustyń transportowych)
```

### Faza 0: Statystyki ogólne
- **Populacja Miasta:** 1,126,209 (GUS Grid)
- **Transakcje RCN:** 76,536

### Faza III: Top 20 POI (Miasto)

| Kategoria | Tier | Ilość w Mieście | Wartość Punktowa (W) |
|---|---|---|---|
| `international_airport` | T0_MEGA_HUB | 1 | 216,720,841 |
| `national_rail_hub` | T0_MEGA_HUB | 1 | 39,335,790 |
| `exhibition_centre` | T1_NATIONAL_MAGNET | 1 | 24,660,124 |
| `national_stadium` | T1_NATIONAL_MAGNET | 20 | 23,104,466 |
| `hospital_clinical` | T1_NATIONAL_MAGNET | 26 | 21,966,263 |
| `university_campus` | T1_NATIONAL_MAGNET | 129 | 11,834,909 |
| `regional_rail_hub` | T1_NATIONAL_MAGNET | 15 | 7,394,372 |
| `student_dormitory` | T2_STRATEGIC_HUB | 1 | 4,980,735 |
| `industrial_zone` | T2_STRATEGIC_HUB | 1125 | 4,639,908 |
| `commercial_zone` | T2_STRATEGIC_HUB | 763 | 4,280,447 |
| `shopping_mall` | T2_STRATEGIC_HUB | 57 | 4,273,449 |
| `logistics_hub` | T2_STRATEGIC_HUB | 8 | 2,702,306 |
| `supermarket` | T2_STRATEGIC_HUB | 345 | 2,642,200 |
| `government_central` | T2_STRATEGIC_HUB | 193 | 2,331,597 |
| `business_office` | T2_STRATEGIC_HUB | 307 | 1,903,841 |
| `marketplace` | T3_LOCAL_CORE | 32 | 838,759 |
| `education_high_school` | T3_LOCAL_CORE | 486 | 784,877 |
| `sports_centre` | T3_LOCAL_CORE | 327 | 610,280 |
| `social_support_mops` | T3_LOCAL_CORE | 78 | 532,147 |
| `culture_theatre` | T3_LOCAL_CORE | 178 | 412,657 |

### Faza IV: Próbki Pełnego DNA 100% (Zobacz szczegóły POI!)

#### NAJLEPSZE PRZYSTANKI (TOP 5)
<details><summary><b>Muzeum Narodowe (891e2e6b023ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Muzeum Narodowe
  stop_id               : stop_1654_314105
  h3_index              : 891e2e6b023ffff
  hub_id                : 1522
  hub_name              : Muzeum Narodowe
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 100.0000
  local_percentile      : 100.0000
  stop_local_score_raw  : 1.7165
  local_score_raw       : 1.6467
  hub_grade             : A+
  hub_percentile        : 100.0000

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 8238792.8299
  infra_score           : 24507724.9850
  stop_raw_gravity      : 3777028.0919
  stop_entropy          : 1.1813
  hub_infra_score       : 24507724.9850

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 59.4286
  transit_freq          : 125.3571
  stop_routes_count     : 17
  stop_routes           : 124, 144, 164, 169, 173, 179, 192, 194, 301, 304, 307, 310, 424, 494, 503, 513, 706
  stop_hub_share        : 0.4741
  hub_departures_h      : 125.3571
  hub_routes            : 109, 124, 134, 144, 152, 164, 169, 173, 179, 192, 194, 300, 301, 304, 307, 310, 424, 469, 494, 503, 513, 706

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 16321.3171
  market_val            : 15897.9656
  stop_liquidity        : 275
  hub_market_val        : 15897.9656

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 255.1785
  pop_val               : 993.7438
  hub_pop_val           : 993.7438

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
  stop_id               : stop_193_7919
  h3_index              : 891e2e6b0a3ffff
  hub_id                : 441
  hub_name              : Plac Inwalidów
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 98.3095
  local_percentile      : 99.9437
  stop_local_score_raw  : 1.2722
  local_score_raw       : 1.6343
  hub_grade             : A+
  hub_percentile        : 99.9437

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 3448566.2314
  infra_score           : 14931765.7191
  stop_raw_gravity      : 1458833.2571
  stop_entropy          : 1.3639
  hub_infra_score       : 14931765.7191

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 23.7143
  transit_freq          : 125.6429
  stop_routes_count     : 4
  stop_routes           : 4, 8, 20, 24
  stop_hub_share        : 0.1887
  hub_departures_h      : 125.6429
  hub_routes            : 4, 8, 20, 24, 124, 139, 152, 159, 169, 179, 192, 199, 301, 304, 307, 424, 469, 501, 503, 511, 513

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 14481.8508
  market_val            : 14285.7143
  stop_liquidity        : 358
  hub_market_val        : 14285.7143

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 393.8953
  pop_val               : 1713.5858
  hub_pop_val           : 1713.5858

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 95x park_recreation
  > 52x gastronomy
  > 29x personal_services
  > 19x convenience_store
  > 14x university_campus
  > 12x health_clinic
  > 11x education_high_school
  > 8x micro_playground
  > 8x micro_atm
  > 7x specialized_retail
  > 6x government_central
  > 6x place_of_worship
  > 4x culture_theatre
  > 4x business_office
  > 3x pharmacy
  > 3x education_preschool
  > 3x micro_parcel_locker
  > 2x post_office
  > 2x bank
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
<details><summary><b>Teatr Słowackiego (891e2e6b11bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Teatr Słowackiego
  stop_id               : stop_852_324239
  h3_index              : 891e2e6b11bffff
  hub_id                : 683
  hub_name              : Teatr Słowackiego
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 99.0608
  local_percentile      : 99.8873
  stop_local_score_raw  : 1.3442
  local_score_raw       : 1.6084
  hub_grade             : A+
  hub_percentile        : 99.8873

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 3433803.7321
  infra_score           : 21611590.4677
  stop_raw_gravity      : 1564957.2106
  stop_entropy          : 1.1942
  hub_infra_score       : 21611590.4677

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 39.5000
  transit_freq          : 132.5714
  stop_routes_count     : 7
  stop_routes           : 3, 8, 18, 20, 24, 52, 76
  stop_hub_share        : 0.2980
  hub_departures_h      : 132.5714
  hub_routes            : 3, 4, 8, 14, 18, 20, 24, 50, 52, 75, 76, 124, 152, 424, 502

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 14627.5169
  market_val            : 14769.6298
  stop_liquidity        : 184
  hub_market_val        : 14769.6298

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 122.8923
  pop_val               : 809.2645
  hub_pop_val           : 809.2645

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 179x gastronomy
  > 99x specialized_retail
  > 57x micro_atm
  > 30x personal_services
  > 25x convenience_store
  > 13x health_clinic
  > 13x bank
  > 12x place_of_worship
  > 9x park_recreation
  > 8x pharmacy
  > 8x micro_parcel_locker
  > 7x university_campus
  > 7x business_office
  > 5x education_high_school
  > 5x government_central
  > 5x culture_theatre
  > 2x police_station
  > 2x post_office
  > 2x micro_playground
  > 1x social_support_mops
  > 1x hospital_clinical
  > 1x supermarket
  > 1x marketplace
  > 1x shopping_mall
  > 1x commercial_zone
  > 1x education_preschool

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - health_clinic          : Małopolski Ośrodek Medycyny Pracy
    - gastronomy             : Demmers Teahouse
    - gastronomy             : Cafe Magia
    - gastronomy             : Bankowa
    - gastronomy             : The Piano Rouge
    - gastronomy             : Pijalnia Czekolady E. Wedel
    - convenience_store      : Żabka
    - gastronomy             : Domowe Przysmaki
    - specialized_retail     : Grateful
    - gastronomy             : Cyrano de Bergerac
    - personal_services      : Rossmann
    - gastronomy             : Costa
```
</details>
<details><summary><b>Biprostal (891e2e6b097ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Biprostal
  stop_id               : stop_60_8405
  h3_index              : 891e2e6b097ffff
  hub_id                : 917
  hub_name              : Biprostal
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 95.2101
  local_percentile      : 99.8310
  stop_local_score_raw  : 1.1082
  local_score_raw       : 1.5950
  hub_grade             : A+
  hub_percentile        : 99.8310

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 7680018.2156
  infra_score           : 26389655.0265
  stop_raw_gravity      : 3439298.2163
  stop_entropy          : 1.2330
  hub_infra_score       : 26389655.0265

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 10.5714
  transit_freq          : 74.5000
  stop_routes_count     : 3
  stop_routes           : 144, 194, 494
  stop_hub_share        : 0.1419
  hub_departures_h      : 74.5000
  hub_routes            : 4, 8, 20, 24, 102, 144, 194, 494

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 15820.0035
  market_val            : 15794.8837
  stop_liquidity        : 683
  hub_market_val        : 15794.8837

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 627.7540
  pop_val               : 2960.3042
  hub_pop_val           : 2960.3042

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 30x gastronomy
  > 24x personal_services
  > 21x convenience_store
  > 16x micro_parcel_locker
  > 13x specialized_retail
  > 12x park_recreation
  > 10x micro_atm
  > 10x micro_playground
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
  stop_id               : stop_51_7301
  h3_index              : 891e2e6b183ffff
  hub_id                : 1512
  hub_name              : Politechnika
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 98.4503
  local_percentile      : 99.7746
  stop_local_score_raw  : 1.2855
  local_score_raw       : 1.5832
  hub_grade             : A+
  hub_percentile        : 99.7746

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 3134684.8094
  infra_score           : 18477278.6041
  stop_raw_gravity      : 1430776.7931
  stop_entropy          : 1.1909
  hub_infra_score       : 18477278.6041

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 35.9286
  transit_freq          : 136.4286
  stop_routes_count     : 9
  stop_routes           : 105, 130, 132, 179, 189, 192, 304, 405, 511
  stop_hub_share        : 0.2634
  hub_departures_h      : 136.4286
  hub_routes            : 3, 5, 14, 17, 18, 50, 105, 129, 130, 132, 179, 189, 192, 304, 405, 501, 511

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 19202.8962
  market_val            : 19138.6964
  stop_liquidity        : 472
  hub_market_val        : 19138.6964

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 49.7612
  pop_val               : 302.5300
  hub_pop_val           : 302.5300

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 75x gastronomy
  > 73x specialized_retail
  > 27x micro_atm
  > 26x park_recreation
  > 18x personal_services
  > 10x convenience_store
  > 8x bank
  > 7x micro_parcel_locker
  > 5x health_clinic
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

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Oczyszczalnia Ścieków ”Kujawy” (891e2e68d83ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Oczyszczalnia Ścieków ”Kujawy”
  stop_id               : 2025
  h3_index              : 891e2e68d83ffff
  hub_id                : 1357
  hub_name              : Oczyszczalnia Ścieków ”Kujawy”
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.2583
  local_percentile      : 0.2817
  stop_local_score_raw  : -1.8753
  local_score_raw       : -1.7635
  hub_grade             : F
  hub_percentile        : 0.2817

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.7143
  transit_freq          : 1.5000
  stop_routes_count     : 1
  stop_routes           : 181
  stop_hub_share        : 0.4762
  hub_departures_h      : 1.5000
  hub_routes            : 181

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 10592.4296
  market_val            : 10592.4296
  stop_liquidity        : 0
  hub_market_val        : 10592.4296

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 1.8505
  pop_val               : 3.4499
  hub_pop_val           : 3.4499

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
  hub_id                : 455
  hub_name              : Lusina Dolna
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.1878
  local_percentile      : 0.2254
  stop_local_score_raw  : -1.9615
  local_score_raw       : -1.8392
  hub_grade             : F
  hub_percentile        : 0.2254

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.6429
  transit_freq          : 1.2857
  stop_routes_count     : 1
  stop_routes           : 265
  stop_hub_share        : 0.5000
  hub_departures_h      : 1.2857
  hub_routes            : 265

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 4122.8779
  market_val            : 4122.8779
  stop_liquidity        : 5
  hub_market_val        : 4122.8779

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 24.6011
  pop_val               : 49.6887
  hub_pop_val           : 49.6887

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
  hub_name              : KRAKÓW NOWA HUTA
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.1291
  local_percentile      : 0.1690
  stop_local_score_raw  : -1.9849
  local_score_raw       : -2.0188
  hub_grade             : F
  hub_percentile        : 0.1690

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0714
  transit_freq          : 0.0714
  stop_routes_count     : 1
  stop_routes           : KML
  stop_hub_share        : 1.0000
  hub_departures_h      : 0.0714
  hub_routes            : KML

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 10592.4296
  market_val            : 10592.4296
  stop_liquidity        : 0
  hub_market_val        : 10592.4296

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 4.9677
  pop_val               : 5.1892
  hub_pop_val           : 5.1892

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
  hub_name              : Kocmyrzów Biblioteka
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.0704
  local_percentile      : 0.1127
  stop_local_score_raw  : -2.6621
  local_score_raw       : -2.5427
  hub_grade             : F
  hub_percentile        : 0.1127

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 335232.6787
  infra_score           : 639168.0527
  stop_raw_gravity      : 207008.2752
  stop_entropy          : 0.6194
  hub_infra_score       : 639168.0527

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.4286
  transit_freq          : 0.8571
  stop_routes_count     : 1
  stop_routes           : 212
  stop_hub_share        : 0.5000
  hub_departures_h      : 0.8571
  hub_routes            : 212

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 16.4204
  market_val            : 16.4204
  stop_liquidity        : 1
  hub_market_val        : 16.4204

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 117.8758
  pop_val               : 244.8870
  hub_pop_val           : 244.8870

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
  hub_name              : Kocmyrzów Sodfiny
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.0470
  local_percentile      : 0.0563
  stop_local_score_raw  : -3.0631
  local_score_raw       : -2.9146
  hub_grade             : F
  hub_percentile        : 0.0563

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 4937.0238
  infra_score           : 8307.7430
  stop_raw_gravity      : 2503.3481
  stop_entropy          : 0.9722
  hub_infra_score       : 8307.7430

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.4286
  transit_freq          : 0.8571
  stop_routes_count     : 1
  stop_routes           : 212
  stop_hub_share        : 0.5000
  hub_departures_h      : 0.8571
  hub_routes            : 212

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 16.4204
  market_val            : 16.4204
  stop_liquidity        : 1
  hub_market_val        : 16.4204

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 88.8831
  pop_val               : 176.2858
  hub_pop_val           : 176.2858

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

## KUTNO
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: -0.000, Std: 0.658)
     Rozkład Kartek (unikalne Huby): A: 12, A+: 6, B: 17, C: 23, D: 29, F: 28
[👥 BAZA LUDNOŚCI GUS] ✅ DEMOGRAFIA OK (Odchylenie zaledwie 9.2%)
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
[✅]  H3 Res 8 Grid 100% Valid (139 komórek, 11 pustyń transportowych)
```

### Faza 0: Statystyki ogólne
- **Populacja Miasta:** 46,943 (GUS Grid)
- **Transakcje RCN:** 533

### Faza III: Top 20 POI (Miasto)

| Kategoria | Tier | Ilość w Mieście | Wartość Punktowa (W) |
|---|---|---|---|
| `national_rail_hub` | T0_MEGA_HUB | 1 | 27,709,492 |
| `hospital_clinical` | T1_NATIONAL_MAGNET | 1 | 20,648,167 |
| `national_stadium` | T1_NATIONAL_MAGNET | 1 | 17,423,863 |
| `university_campus` | T1_NATIONAL_MAGNET | 2 | 13,369,038 |
| `industrial_zone` | T2_STRATEGIC_HUB | 98 | 4,181,467 |
| `shopping_mall` | T2_STRATEGIC_HUB | 2 | 3,819,185 |
| `commercial_zone` | T2_STRATEGIC_HUB | 3 | 3,685,426 |
| `supermarket` | T2_STRATEGIC_HUB | 20 | 2,493,121 |
| `government_central` | T2_STRATEGIC_HUB | 12 | 2,269,152 |
| `business_office` | T2_STRATEGIC_HUB | 4 | 2,015,538 |
| `social_support_mops` | T3_LOCAL_CORE | 4 | 786,779 |
| `marketplace` | T3_LOCAL_CORE | 2 | 785,711 |
| `education_high_school` | T3_LOCAL_CORE | 19 | 667,518 |
| `sports_centre` | T3_LOCAL_CORE | 10 | 548,186 |
| `culture_theatre` | T3_LOCAL_CORE | 4 | 400,372 |
| `health_clinic` | T3_LOCAL_CORE | 10 | 395,837 |
| `police_station` | T4_DAILY_SERVICE | 2 | 106,619 |
| `education_preschool` | T4_DAILY_SERVICE | 10 | 105,390 |
| `car_services` | T4_DAILY_SERVICE | 17 | 67,744 |
| `post_office` | T4_DAILY_SERVICE | 3 | 66,568 |

### Faza IV: Próbki Pełnego DNA 100% (Zobacz szczegóły POI!)

#### NAJLEPSZE PRZYSTANKI (TOP 5)
<details><summary><b>Jana Pawła II (891f52c8a0bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Jana Pawła II
  stop_id               : 27
  h3_index              : 891f52c8a0bffff
  hub_id                : 102
  hub_name              : Jana Pawła II
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 100.0000
  local_percentile      : 100.0000
  stop_local_score_raw  : 1.4047
  local_score_raw       : 1.3068
  hub_grade             : A+
  hub_percentile        : 100.0000

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 2549432.8705
  infra_score           : 5327774.0723
  stop_raw_gravity      : 963210.7869
  stop_entropy          : 1.6468
  hub_infra_score       : 5327774.0723

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 9.5714
  transit_freq          : 18.5000
  stop_routes_count     : 11
  stop_routes           : 1, 2, 3, 4, 5, 7, 9, 10, 11, 12, 14
  stop_hub_share        : 0.5174
  hub_departures_h      : 18.5000
  hub_routes            : 1, 2, 3, 4, 5, 7, 9, 10, 11, 12, 14

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 5754.9400
  market_val            : 5495.6897
  stop_liquidity        : 66
  hub_market_val        : 5495.6897

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 466.6010
  pop_val               : 909.2114
  hub_pop_val           : 909.2114

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 15x specialized_retail
  > 13x gastronomy
  > 12x convenience_store
  > 10x bank
  > 10x pharmacy
  > 8x micro_atm
  > 7x personal_services
  > 6x micro_parcel_locker
  > 6x education_high_school
  > 5x car_services
  > 5x supermarket
  > 5x park_recreation
  > 3x education_preschool
  > 3x micro_playground
  > 2x culture_theatre
  > 2x sports_centre
  > 2x health_clinic
  > 1x business_office
  > 1x marketplace
  > 1x place_of_worship
  > 1x industrial_zone
  > 1x post_office
  > 1x national_stadium
  > 1x government_central
  > 1x shopping_mall

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : Bankomat Cash4You
    - micro_atm              : Bankomat BZ WBK
    - gastronomy             : Jana
    - car_services           : Shell
    - bank                   : Bank Pekao
    - car_services           : Carrefour
    - convenience_store      : Malwina 24h
    - convenience_store      : Żabka
    - convenience_store      : Żabka
    - gastronomy             : Pizzeria Papa Doriano
    - convenience_store      : Żabka
    - gastronomy             : Pizzeria 55
```
</details>
<details><summary><b>Wyszyńskiego (891f52c8a73ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Wyszyńskiego
  stop_id               : 31
  h3_index              : 891f52c8a73ffff
  hub_id                : 10
  hub_name              : Wyszyńskiego
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 99.1071
  local_percentile      : 99.1304
  stop_local_score_raw  : 1.3633
  local_score_raw       : 1.2946
  hub_grade             : A+
  hub_percentile        : 99.1304

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 2603471.4010
  infra_score           : 5595922.9165
  stop_raw_gravity      : 986376.2893
  stop_entropy          : 1.6394
  hub_infra_score       : 5595922.9165

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 8.4286
  transit_freq          : 16.2857
  stop_routes_count     : 10
  stop_routes           : 2, 3, 4, 5, 7, 9, 10, 11, 12, 14
  stop_hub_share        : 0.5175
  hub_departures_h      : 16.2857
  hub_routes            : 2, 3, 4, 5, 7, 9, 10, 11, 12, 14

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 5744.6809
  market_val            : 5744.6809
  stop_liquidity        : 69
  hub_market_val        : 5744.6809

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 710.5458
  pop_val               : 1346.1189
  hub_pop_val           : 1346.1189

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 12x convenience_store
  > 11x specialized_retail
  > 11x pharmacy
  > 8x micro_atm
  > 8x gastronomy
  > 6x bank
  > 6x micro_parcel_locker
  > 5x car_services
  > 5x personal_services
  > 5x education_high_school
  > 4x supermarket
  > 4x education_preschool
  > 3x micro_playground
  > 2x government_central
  > 2x sports_centre
  > 2x health_clinic
  > 2x park_recreation
  > 1x marketplace
  > 1x place_of_worship
  > 1x industrial_zone
  > 1x culture_theatre
  > 1x post_office
  > 1x shopping_mall

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : Bankomat Cash4You
    - micro_atm              : Bankomat BZ WBK
    - gastronomy             : Jana
    - car_services           : Shell
    - car_services           : Carrefour
    - convenience_store      : Malwina 24h
    - convenience_store      : Żabka
    - convenience_store      : Żabka
    - gastronomy             : Restauracja Lawenda
    - bank                   : Bank Pekao
    - micro_parcel_locker    : Paczkomat InPost
    - gastronomy             : Doner Kebap
```
</details>
<details><summary><b>Grunwaldzka (891f52c8a77ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Grunwaldzka
  stop_id               : 32
  h3_index              : 891f52c8a77ffff
  hub_id                : 30
  hub_name              : Grunwaldzka
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 98.2143
  local_percentile      : 98.2609
  stop_local_score_raw  : 1.2732
  local_score_raw       : 1.2349
  hub_grade             : A+
  hub_percentile        : 98.2609

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 4054168.4178
  infra_score           : 7541979.2235
  stop_raw_gravity      : 2118655.0839
  stop_entropy          : 0.9136
  hub_infra_score       : 7541979.2235

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 6.7143
  transit_freq          : 13.0714
  stop_routes_count     : 7
  stop_routes           : 3, 4, 5, 7, 9, 10, 14
  stop_hub_share        : 0.5137
  hub_departures_h      : 13.0714
  hub_routes            : 3, 4, 5, 7, 9, 10, 14

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 5746.1407
  market_val            : 6016.5975
  stop_liquidity        : 23
  hub_market_val        : 6016.5975

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 765.1420
  pop_val               : 1507.4000
  hub_pop_val           : 1507.4000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 6x pharmacy
  > 5x supermarket
  > 5x car_services
  > 5x convenience_store
  > 5x education_preschool
  > 3x micro_parcel_locker
  > 3x specialized_retail
  > 3x industrial_zone
  > 2x bank
  > 2x place_of_worship
  > 2x education_high_school
  > 2x sports_centre
  > 2x health_clinic
  > 2x micro_playground
  > 2x park_recreation
  > 1x micro_atm
  > 1x commercial_zone
  > 1x government_central
  > 1x gastronomy
  > 1x shopping_mall

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - supermarket            : Aldi
    - car_services           : Carrefour
    - bank                   : Santander
    - bank                   : Bank Pekao
    - place_of_worship       : Kościół Zielonoświątkowy
    - car_services           : Wasbruk
    - education_high_school  : Zakład Doskonalenia Zawodowego w Warszawie Centrum Kształcenia w Kutnie
    - micro_parcel_locker    : Paczkomat InPost
    - pharmacy               : Dr. Max
    - pharmacy               : Medest Iii
    - pharmacy               : Apteka Dbam O Zdrowie
    - pharmacy               : Calendula
```
</details>
<details><summary><b>Chrobrego (891f5252493ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Chrobrego
  stop_id               : 17
  h3_index              : 891f5252493ffff
  hub_id                : 45
  hub_name              : Chrobrego
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 95.9821
  local_percentile      : 97.3913
  stop_local_score_raw  : 1.1747
  local_score_raw       : 1.1518
  hub_grade             : A+
  hub_percentile        : 97.3913

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 1785775.5899
  infra_score           : 3251527.9443
  stop_raw_gravity      : 855504.8168
  stop_entropy          : 1.0874
  hub_infra_score       : 3251527.9443

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 6.3571
  transit_freq          : 13.0714
  stop_routes_count     : 7
  stop_routes           : 3, 4, 5, 7, 9, 10, 14
  stop_hub_share        : 0.4863
  hub_departures_h      : 13.0714
  hub_routes            : 3, 4, 5, 7, 9, 10, 14

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6044.9050
  market_val            : 6044.9050
  stop_liquidity        : 29
  hub_market_val        : 6044.9050

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 697.0521
  pop_val               : 1385.2530
  hub_pop_val           : 1385.2530

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 5x convenience_store
  > 4x micro_parcel_locker
  > 2x supermarket
  > 2x bank
  > 2x place_of_worship
  > 2x education_high_school
  > 2x pharmacy
  > 2x government_central
  > 1x micro_atm
  > 1x sports_centre
  > 1x education_preschool
  > 1x social_support_mops
  > 1x micro_playground
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - supermarket            : Aldi
    - convenience_store      : Supermarket Lewiatan
    - bank                   : Santander
    - bank                   : Bank Pekao
    - micro_parcel_locker    : Paczkomat InPost
    - place_of_worship       : Kościół Zielonoświątkowy
    - education_high_school  : Zakład Doskonalenia Zawodowego w Warszawie Centrum Kształcenia w Kutnie
    - micro_parcel_locker    : Paczkomat InPost
    - pharmacy               : Medest Iii
    - pharmacy               : Apteka Gemini
    - convenience_store      : Żabka
    - micro_parcel_locker    : DPD Oddział Miejski Kutno
```
</details>
<details><summary><b>Barlickiego (891f52c8a57ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Barlickiego
  stop_id               : 160
  h3_index              : 891f52c8a57ffff
  hub_id                : 61
  hub_name              : Barlickiego
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 96.8750
  local_percentile      : 96.5217
  stop_local_score_raw  : 1.2015
  local_score_raw       : 1.1482
  hub_grade             : A+
  hub_percentile        : 96.5217

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 1649871.8164
  infra_score           : 2741184.3547
  stop_raw_gravity      : 602021.5939
  stop_entropy          : 1.7406
  hub_infra_score       : 2741184.3547

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 7.0714
  transit_freq          : 14.0714
  stop_routes_count     : 9
  stop_routes           : 1, 2, 3, 5, 6, 7, 11, 12, 14
  stop_hub_share        : 0.5025
  hub_departures_h      : 14.0714
  hub_routes            : 1, 2, 3, 5, 6, 7, 11, 12, 14

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 5495.6897
  market_val            : 5744.6809
  stop_liquidity        : 63
  hub_market_val        : 5744.6809

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 778.4245
  pop_val               : 1301.3579
  hub_pop_val           : 1301.3579

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 16x gastronomy
  > 15x convenience_store
  > 13x bank
  > 13x specialized_retail
  > 9x micro_atm
  > 9x pharmacy
  > 8x personal_services
  > 5x micro_parcel_locker
  > 5x park_recreation
  > 5x education_high_school
  > 4x government_central
  > 3x supermarket
  > 3x culture_theatre
  > 3x micro_playground
  > 2x car_services
  > 2x place_of_worship
  > 2x health_clinic
  > 1x police_station
  > 1x marketplace
  > 1x university_campus
  > 1x post_office
  > 1x sports_centre
  > 1x education_preschool

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : Bankomat Cash4You
    - micro_atm              : Bankomat BZ WBK
    - gastronomy             : Jana
    - car_services           : Shell
    - bank                   : Bank Pekao
    - bank                   : BNP Paribas
    - convenience_store      : Malwina 24h
    - convenience_store      : Żabka
    - convenience_store      : Żabka
    - gastronomy             : Pizzeria Papa Doriano
    - convenience_store      : Żabka
    - gastronomy             : Pizzeria 55
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Raszewska / 23 (891f52c836bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Raszewska / 23
  stop_id               : 542
  h3_index              : 891f52c836bffff
  hub_id                : 36
  hub_name              : Raszewska / 23
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 3.5714
  local_percentile      : 4.3478
  stop_local_score_raw  : -1.4609
  local_score_raw       : -1.4467
  hub_grade             : F
  hub_percentile        : 4.3478

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.8571
  transit_freq          : 1.7857
  stop_routes_count     : 1
  stop_routes           : 3
  stop_hub_share        : 0.4800
  hub_departures_h      : 1.7857
  hub_routes            : 3

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6346.7492
  market_val            : 6346.7492
  stop_liquidity        : 0
  hub_market_val        : 6346.7492

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 16.3086
  pop_val               : 31.1410
  hub_pop_val           : 31.1410

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Raszewska / Zachodnia (891f52c834fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Raszewska / Zachodnia
  stop_id               : 676
  h3_index              : 891f52c834fffff
  hub_id                : 43
  hub_name              : Raszewska / Zachodnia
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 4.4643
  local_percentile      : 3.4783
  stop_local_score_raw  : -1.4350
  local_score_raw       : -1.4480
  hub_grade             : F
  hub_percentile        : 3.4783

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.9286
  transit_freq          : 1.7857
  stop_routes_count     : 1
  stop_routes           : 3
  stop_hub_share        : 0.5200
  hub_departures_h      : 1.7857
  hub_routes            : 3

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6346.7492
  market_val            : 6346.7492
  stop_liquidity        : 0
  hub_market_val        : 6346.7492

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 16.2591
  pop_val               : 30.6452
  hub_pop_val           : 30.6452

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Kuczków I (891f52c88d3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Kuczków I
  stop_id               : 151
  h3_index              : 891f52c88d3ffff
  hub_id                : 79
  hub_name              : Kuczków I
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 1.7857
  local_percentile      : 2.6087
  stop_local_score_raw  : -1.5052
  local_score_raw       : -1.5051
  hub_grade             : F
  hub_percentile        : 2.6087

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.7857
  transit_freq          : 1.5714
  stop_routes_count     : 1
  stop_routes           : 5
  stop_hub_share        : 0.5000
  hub_departures_h      : 1.5714
  hub_routes            : 5

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6346.7492
  market_val            : 6346.7492
  stop_liquidity        : 0
  hub_market_val        : 6346.7492

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 13.2367
  pop_val               : 26.4182
  hub_pop_val           : 26.4182

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Lotnicza (891f525202fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Lotnicza
  stop_id               : 280
  h3_index              : 891f525202fffff
  hub_id                : 105
  hub_name              : Lotnicza
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 1.3393
  local_percentile      : 1.7391
  stop_local_score_raw  : -1.6238
  local_score_raw       : -1.6530
  hub_grade             : F
  hub_percentile        : 1.7391

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.4286
  transit_freq          : 0.8571
  stop_routes_count     : 1
  stop_routes           : 1
  stop_hub_share        : 0.5000
  hub_departures_h      : 0.8571
  hub_routes            : 1

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6346.7492
  market_val            : 6346.7492
  stop_liquidity        : 0
  hub_market_val        : 6346.7492

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 20.5050
  pop_val               : 41.0000
  hub_pop_val           : 41.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Raciborów Kutnowski (891f52caa4fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Raciborów Kutnowski
  stop_id               : 32334
  h3_index              : 891f52caa4fffff
  hub_id                : 63
  hub_name              : Raciborów Kutnowski
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.4464
  local_percentile      : 0.8696
  stop_local_score_raw  : -1.7279
  local_score_raw       : -1.9208
  hub_grade             : F
  hub_percentile        : 0.8696

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6346.7492
  market_val            : 6346.7492
  stop_liquidity        : 0
  hub_market_val        : 6346.7492

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 110.0000
  pop_val               : 110.0000
  hub_pop_val           : 110.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>

---

## LEGNICA
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: 0.000, Std: 0.745)
     Rozkład Kartek (unikalne Huby): A: 23, A+: 12, B: 34, C: 45, D: 57, F: 56
[👥 BAZA LUDNOŚCI GUS] ❌ OSTRZEŻENIE DEMOGRAFICZNE: Odchylenie 25.5%. GUS: 112,987 vs Baza: 90,000
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
[✅]  H3 Res 8 Grid 100% Valid (506 komórek, 39 pustyń transportowych)
```

### Faza 0: Statystyki ogólne
- **Populacja Miasta:** 112,987 (GUS Grid)
- **Transakcje RCN:** 17,704

### Faza III: Top 20 POI (Miasto)

| Kategoria | Tier | Ilość w Mieście | Wartość Punktowa (W) |
|---|---|---|---|
| `national_rail_hub` | T0_MEGA_HUB | 1 | 30,655,712 |
| `hospital_clinical` | T1_NATIONAL_MAGNET | 1 | 26,487,611 |
| `national_stadium` | T1_NATIONAL_MAGNET | 2 | 17,287,890 |
| `university_campus` | T1_NATIONAL_MAGNET | 3 | 16,827,439 |
| `shopping_mall` | T2_STRATEGIC_HUB | 7 | 4,207,416 |
| `industrial_zone` | T2_STRATEGIC_HUB | 155 | 4,103,161 |
| `commercial_zone` | T2_STRATEGIC_HUB | 55 | 3,880,978 |
| `supermarket` | T2_STRATEGIC_HUB | 43 | 2,278,999 |
| `government_central` | T2_STRATEGIC_HUB | 37 | 1,870,936 |
| `business_office` | T2_STRATEGIC_HUB | 18 | 1,717,667 |
| `marketplace` | T3_LOCAL_CORE | 3 | 645,527 |
| `education_high_school` | T3_LOCAL_CORE | 40 | 625,837 |
| `sports_centre` | T3_LOCAL_CORE | 17 | 527,663 |
| `social_support_mops` | T3_LOCAL_CORE | 7 | 431,701 |
| `health_clinic` | T3_LOCAL_CORE | 31 | 327,023 |
| `culture_theatre` | T3_LOCAL_CORE | 24 | 316,274 |
| `education_preschool` | T4_DAILY_SERVICE | 29 | 105,325 |
| `car_services` | T4_DAILY_SERVICE | 21 | 68,965 |
| `post_office` | T4_DAILY_SERVICE | 23 | 61,991 |
| `police_station` | T4_DAILY_SERVICE | 6 | 58,704 |

### Faza IV: Próbki Pełnego DNA 100% (Zobacz szczegóły POI!)

#### NAJLEPSZE PRZYSTANKI (TOP 5)
<details><summary><b>Piłsudskiego - Galaktyczna (891e2638d63ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Piłsudskiego - Galaktyczna
  stop_id               : 1799
  h3_index              : 891e2638d63ffff
  hub_id                : 5
  hub_name              : Piłsudskiego - Galaktyczna
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 99.4334
  local_percentile      : 100.0000
  stop_local_score_raw  : 1.2801
  local_score_raw       : 1.3688
  hub_grade             : A+
  hub_percentile        : 100.0000

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 1918637.9438
  infra_score           : 3507964.3594
  stop_raw_gravity      : 1082613.1097
  stop_entropy          : 0.7722
  hub_infra_score       : 3507964.3594

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 15.1429
  transit_freq          : 30.2143
  stop_routes_count     : 8
  stop_routes           : 3, 6, 8, 15, 16, 18, 23, 28
  stop_hub_share        : 0.5012
  hub_departures_h      : 30.2143
  hub_routes            : 3, 6, 8, 15, 16, 18, 23, 28

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 5218.2163
  market_val            : 5254.4818
  stop_liquidity        : 381
  hub_market_val        : 5254.4818

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 1568.5478
  pop_val               : 2950.6313
  hub_pop_val           : 2950.6313

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 11x micro_playground
  > 10x personal_services
  > 9x micro_parcel_locker
  > 8x supermarket
  > 8x convenience_store
  > 6x pharmacy
  > 5x gastronomy
  > 5x education_preschool
  > 5x specialized_retail
  > 3x car_services
  > 3x education_high_school
  > 3x health_clinic
  > 2x post_office
  > 2x micro_atm
  > 2x marketplace
  > 2x sports_centre
  > 1x culture_theatre
  > 1x bank
  > 1x business_office
  > 1x police_station
  > 1x shopping_mall
  > 1x park_recreation
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - post_office            : Poczta Polska
    - gastronomy             : Had Food
    - car_services           : Orlen
    - supermarket            : Intermarché
    - education_high_school  : Szkoła Podstawowa nr 7
    - car_services           : BP Orbita
    - culture_theatre        : Legnicka Biblioteka Publiczna - filia nr 4
    - gastronomy             : Vikos
    - bank                   : PKO BP
    - marketplace            : Targowisko
    - education_preschool    : M. Przedszkole nr. 6
    - post_office            : Poczta Polska
```
</details>
<details><summary><b>Iwaszkiewicza - Pętla (891e2623263ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Iwaszkiewicza - Pętla
  stop_id               : 2024
  h3_index              : 891e2623263ffff
  hub_id                : 45
  hub_name              : Iwaszkiewicza - Pętla
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 100.0000
  local_percentile      : 99.5595
  stop_local_score_raw  : 1.4609
  local_score_raw       : 1.3471
  hub_grade             : A+
  hub_percentile        : 99.5595

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 3042329.5013
  infra_score           : 4900354.0870
  stop_raw_gravity      : 2581579.2829
  stop_entropy          : 0.1785
  hub_infra_score       : 4900354.0870

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 29.7143
  transit_freq          : 36.7857
  stop_routes_count     : 9
  stop_routes           : 3, 6, 8, 15, 16, 18, 23, 25, 38
  stop_hub_share        : 0.8078
  hub_departures_h      : 36.7857
  hub_routes            : 3, 6, 8, 15, 16, 18, 23, 24, 25, 28, 38

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 4950.2982
  market_val            : 4940.7115
  stop_liquidity        : 175
  hub_market_val        : 4940.7115

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 445.6571
  pop_val               : 1003.5956
  hub_pop_val           : 1003.5956

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 8x micro_playground
  > 3x education_preschool
  > 3x micro_parcel_locker
  > 3x personal_services
  > 2x pharmacy
  > 1x police_station
  > 1x specialized_retail
  > 1x micro_atm
  > 1x health_clinic
  > 1x convenience_store
  > 1x gastronomy
  > 1x supermarket
  > 1x sports_centre
  > 1x park_recreation
  > 1x hospital_clinical
  > 1x education_high_school

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - police_station         : Staffa 2
    - education_preschool    : Przedszkole Niepubliczne Tęczowy Zakątek
    - specialized_retail     : KiK
    - micro_parcel_locker    : Paczkomat InPost
    - micro_atm              : Euronet
    - health_clinic          : RCKiK we Wrocławiu TO Legnica
    - pharmacy               : Lekosfera
    - pharmacy               : Dr. Max
    - convenience_store      : abc
    - personal_services      : Wonder Woman
    - micro_parcel_locker    : DPD Pickup Station
    - micro_parcel_locker    : Orlen Paczka
```
</details>
<details><summary><b>Piłsudskiego - Wielkiej Niedźwiedzicy (891e263899bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Piłsudskiego - Wielkiej Niedźwiedzicy
  stop_id               : 1798
  h3_index              : 891e263899bffff
  hub_id                : 25
  hub_name              : Piłsudskiego - Wielkiej Niedźwiedzicy
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 97.4504
  local_percentile      : 99.1189
  stop_local_score_raw  : 1.2075
  local_score_raw       : 1.3065
  hub_grade             : A+
  hub_percentile        : 99.1189

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 893944.8387
  infra_score           : 1700499.8597
  stop_raw_gravity      : 349521.7616
  stop_entropy          : 1.5576
  hub_infra_score       : 1700499.8597

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 15.1429
  transit_freq          : 30.1429
  stop_routes_count     : 8
  stop_routes           : 3, 6, 8, 15, 16, 18, 23, 28
  stop_hub_share        : 0.5024
  hub_departures_h      : 30.1429
  hub_routes            : 3, 6, 8, 15, 16, 18, 23, 28

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 5232.5649
  market_val            : 5253.9405
  stop_liquidity        : 170
  hub_market_val        : 5253.9405

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 1317.6518
  pop_val               : 2660.0230
  hub_pop_val           : 2660.0230

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 7x micro_playground
  > 6x convenience_store
  > 6x personal_services
  > 4x micro_parcel_locker
  > 4x pharmacy
  > 3x education_preschool
  > 3x supermarket
  > 3x place_of_worship
  > 2x post_office
  > 2x marketplace
  > 2x car_services
  > 2x health_clinic
  > 2x industrial_zone
  > 1x culture_theatre
  > 1x bank
  > 1x business_office
  > 1x park_recreation
  > 1x micro_atm
  > 1x specialized_retail
  > 1x shopping_mall
  > 1x education_high_school
  > 1x government_central

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - post_office            : Poczta Polska
    - culture_theatre        : Legnicka Biblioteka Publiczna - filia nr 4
    - bank                   : PKO BP
    - marketplace            : Targowisko
    - education_preschool    : Miejskie Przedszkole nr 13
    - education_preschool    : M. Przedszkole nr. 6
    - post_office            : Poczta Polska
    - business_office        : Vectra TV
    - convenience_store      : Aqua
    - personal_services      : Maria
    - convenience_store      : Żabka
    - supermarket            : Delikatesy Centrum
```
</details>
<details><summary><b>Skarbka - Mickiewicza (891e2638893ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Skarbka - Mickiewicza
  stop_id               : 1825
  h3_index              : 891e2638893ffff
  hub_id                : 44
  hub_name              : Skarbka - Pl. Słowiański
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 98.8669
  local_percentile      : 98.6784
  stop_local_score_raw  : 1.2406
  local_score_raw       : 1.2962
  hub_grade             : A+
  hub_percentile        : 98.6784

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 6023451.9106
  infra_score           : 10009241.1247
  stop_raw_gravity      : 2441623.3931
  stop_entropy          : 1.4670
  hub_infra_score       : 10009241.1247

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 12.7143
  transit_freq          : 25.5000
  stop_routes_count     : 8
  stop_routes           : 3, 6, 9, 15, 16, 20, 24, 26
  stop_hub_share        : 0.4986
  hub_departures_h      : 25.5000
  hub_routes            : 3, 6, 9, 15, 16, 20, 24, 26

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 4514.0425
  market_val            : 4498.2570
  stop_liquidity        : 950
  hub_market_val        : 4498.2570

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 1554.1579
  pop_val               : 2311.1158
  hub_pop_val           : 2311.1158

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 35x gastronomy
  > 15x government_central
  > 15x specialized_retail
  > 14x convenience_store
  > 12x bank
  > 9x personal_services
  > 9x place_of_worship
  > 8x pharmacy
  > 8x park_recreation
  > 6x commercial_zone
  > 5x culture_theatre
  > 4x micro_atm
  > 4x micro_parcel_locker
  > 3x education_high_school
  > 2x health_clinic
  > 2x post_office
  > 2x education_preschool
  > 1x supermarket
  > 1x micro_playground
  > 1x university_campus
  > 1x car_services
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - government_central     : Urząd Miejski w Legnicy
    - gastronomy             : Restauracja Hong Ha
    - bank                   : Santander
    - government_central     : Sąd Okręgowy
    - government_central     : Sąd Rejonowy wyd. Karny i Gospodarczy
    - bank                   : Millennium Bank
    - gastronomy             : Don Giovanni
    - gastronomy             : Art Cafe Modjeska
    - gastronomy             : Kolorowa
    - gastronomy             : Tivoli
    - culture_theatre        : Legnicka Biblioteka Publiczna Wypożyczalnia dla dorosłych
    - culture_theatre        : Legnicka Biblioteka Publiczna Filia Dziecięco — Młodzieżowa Numer I
```
</details>
<details><summary><b>Sikorskiego - Gałczyńskiego (891e26389b7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Sikorskiego - Gałczyńskiego
  stop_id               : 1818
  h3_index              : 891e26389b7ffff
  hub_id                : 41
  hub_name              : Sikorskiego - Gałczyńskiego
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 96.8839
  local_percentile      : 98.2379
  stop_local_score_raw  : 1.1441
  local_score_raw       : 1.1769
  hub_grade             : A+
  hub_percentile        : 98.2379

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 1901296.2453
  infra_score           : 2974380.1517
  stop_raw_gravity      : 840872.3497
  stop_entropy          : 1.2611
  hub_infra_score       : 2974380.1517

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 13.0714
  transit_freq          : 23.5714
  stop_routes_count     : 6
  stop_routes           : 2, 3, 6, 18, 23, 24
  stop_hub_share        : 0.5545
  hub_departures_h      : 23.5714
  hub_routes            : 2, 3, 6, 18, 23, 24

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 5026.4719
  market_val            : 5016.0607
  stop_liquidity        : 216
  hub_market_val        : 5016.0607

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 818.8633
  pop_val               : 1315.7768
  hub_pop_val           : 1315.7768

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 15x personal_services
  > 6x micro_parcel_locker
  > 6x specialized_retail
  > 6x micro_playground
  > 5x convenience_store
  > 5x health_clinic
  > 4x post_office
  > 4x gastronomy
  > 4x pharmacy
  > 3x micro_atm
  > 3x education_preschool
  > 2x culture_theatre
  > 2x supermarket
  > 1x police_station
  > 1x business_office
  > 1x sports_centre
  > 1x shopping_mall
  > 1x place_of_worship
  > 1x industrial_zone
  > 1x education_high_school
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - police_station         : Staffa 2
    - post_office            : Poczta Polska
    - micro_parcel_locker    : Paczkomat InPost
    - specialized_retail     : RTV Euro AGD
    - post_office            : Poczta Polska
    - culture_theatre        : Legnicka Biblioteka Publiczna Filia Dziecięco — Młodzieżowa Numer II
    - convenience_store      : Żabka
    - education_preschool    : Przedszkole Niepubliczne Tęczowy Zakątek
    - supermarket            : Lidl
    - specialized_retail     : KiK
    - convenience_store      : Żabka
    - gastronomy             : Pierogarnia u Reni
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Raczkowa - Nr 5 (891e262a02bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Raczkowa - Nr 5
  stop_id               : 2106
  h3_index              : 891e262a02bffff
  hub_id                : 30
  hub_name              : Raczkowa - Nr 7
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 1.9830
  local_percentile      : 2.2026
  stop_local_score_raw  : -1.5227
  local_score_raw       : -1.4698
  hub_grade             : F
  hub_percentile        : 2.2026

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.3571
  transit_freq          : 0.7143
  stop_routes_count     : 1
  stop_routes           : 20
  stop_hub_share        : 0.5000
  hub_departures_h      : 0.7143
  hub_routes            : 20

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 2317.0732
  market_val            : 2317.0732
  stop_liquidity        : 5
  hub_market_val        : 2317.0732

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 43.8564
  pop_val               : 91.0307
  hub_pop_val           : 91.0307

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Rzeszotary - Ul. Wiejska Nr 93 (891e263a9c7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Rzeszotary - Ul. Wiejska Nr 93
  stop_id               : 2070
  h3_index              : 891e263a9c7ffff
  hub_id                : 58
  hub_name              : Rzeszotary - Ul. Wiejska Nr 93
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 1.4164
  local_percentile      : 1.7621
  stop_local_score_raw  : -1.6082
  local_score_raw       : -1.6055
  hub_grade             : F
  hub_percentile        : 1.7621

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.2857
  transit_freq          : 0.5714
  stop_routes_count     : 1
  stop_routes           : 8
  stop_hub_share        : 0.5000
  hub_departures_h      : 0.5714
  hub_routes            : 8

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 1500.0000
  market_val            : 1500.0000
  stop_liquidity        : 1
  hub_market_val        : 1500.0000

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 122.1766
  pop_val               : 232.5404
  hub_pop_val           : 232.5404

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Cmentarz - Jaszków (891e263817bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Cmentarz - Jaszków
  stop_id               : 1985
  h3_index              : 891e263817bffff
  hub_id                : 119
  hub_name              : Cmentarz - Jaszków
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.2833
  local_percentile      : 1.3216
  stop_local_score_raw  : -1.6907
  local_score_raw       : -1.7016
  hub_grade             : F
  hub_percentile        : 1.3216

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 4759.2628
  market_val            : 4759.2628
  stop_liquidity        : 0
  hub_market_val        : 4759.2628

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 1.0000
  pop_val               : 1.0000
  hub_pop_val           : 1.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Ogonowice - Nr 19 (891e262aadbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Ogonowice - Nr 19
  stop_id               : 2127
  h3_index              : 891e262aadbffff
  hub_id                : 53
  hub_name              : Ogonowice - Nr 19
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 1.1331
  local_percentile      : 0.8811
  stop_local_score_raw  : -1.6613
  local_score_raw       : -1.7482
  hub_grade             : F
  hub_percentile        : 0.8811

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.3571
  transit_freq          : 0.3571
  stop_routes_count     : 1
  stop_routes           : 20
  stop_hub_share        : 1.0000
  hub_departures_h      : 0.3571
  hub_routes            : 20

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 1504.2118
  market_val            : 1504.2118
  stop_liquidity        : 1
  hub_market_val        : 1504.2118

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 52.8288
  pop_val               : 82.8493
  hub_pop_val           : 82.8493

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Ogonowice - Nr 25 (891e262aadbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Ogonowice - Nr 25
  stop_id               : 2113
  h3_index              : 891e262aadbffff
  hub_id                : 116
  hub_name              : Ogonowice - Nr 25
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.5666
  local_percentile      : 0.4405
  stop_local_score_raw  : -1.6859
  local_score_raw       : -1.7726
  hub_grade             : F
  hub_percentile        : 0.4405

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.3571
  transit_freq          : 0.3571
  stop_routes_count     : 1
  stop_routes           : 20
  stop_hub_share        : 1.0000
  hub_departures_h      : 0.3571
  hub_routes            : 20

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 1504.2118
  market_val            : 1504.2118
  stop_liquidity        : 1
  hub_market_val        : 1504.2118

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 40.4783
  pop_val               : 62.1507
  hub_pop_val           : 62.1507

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>

---

## LESZNO
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: -0.000, Std: 0.748)
     Rozkład Kartek (unikalne Huby): A: 14, A+: 8, B: 21, C: 28, D: 35, F: 35
[👥 BAZA LUDNOŚCI GUS] ❌ OSTRZEŻENIE DEMOGRAFICZNE: Odchylenie 26.1%. GUS: 79,417 vs Baza: 63,000
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
[✅]  H3 Res 8 Grid 100% Valid (238 komórek, 35 pustyń transportowych)
```

### Faza 0: Statystyki ogólne
- **Populacja Miasta:** 79,417 (GUS Grid)
- **Transakcje RCN:** 3,695

### Faza III: Top 20 POI (Miasto)

| Kategoria | Tier | Ilość w Mieście | Wartość Punktowa (W) |
|---|---|---|---|
| `hospital_clinical` | T1_NATIONAL_MAGNET | 2 | 18,992,328 |
| `national_stadium` | T1_NATIONAL_MAGNET | 3 | 13,983,867 |
| `university_campus` | T1_NATIONAL_MAGNET | 21 | 7,851,481 |
| `regional_rail_hub` | T1_NATIONAL_MAGNET | 1 | 5,940,407 |
| `industrial_zone` | T2_STRATEGIC_HUB | 92 | 4,057,476 |
| `commercial_zone` | T2_STRATEGIC_HUB | 37 | 3,604,265 |
| `shopping_mall` | T2_STRATEGIC_HUB | 11 | 3,256,933 |
| `supermarket` | T2_STRATEGIC_HUB | 46 | 2,073,390 |
| `government_central` | T2_STRATEGIC_HUB | 41 | 1,715,281 |
| `business_office` | T2_STRATEGIC_HUB | 40 | 1,413,405 |
| `marketplace` | T3_LOCAL_CORE | 3 | 635,655 |
| `education_high_school` | T3_LOCAL_CORE | 52 | 583,431 |
| `sports_centre` | T3_LOCAL_CORE | 15 | 437,058 |
| `social_support_mops` | T3_LOCAL_CORE | 8 | 433,608 |
| `culture_theatre` | T3_LOCAL_CORE | 13 | 358,478 |
| `health_clinic` | T3_LOCAL_CORE | 48 | 308,205 |
| `education_preschool` | T4_DAILY_SERVICE | 40 | 95,844 |
| `police_station` | T4_DAILY_SERVICE | 11 | 82,183 |
| `car_services` | T4_DAILY_SERVICE | 19 | 60,674 |
| `bank` | T4_DAILY_SERVICE | 32 | 59,310 |

### Faza IV: Próbki Pełnego DNA 100% (Zobacz szczegóły POI!)

#### NAJLEPSZE PRZYSTANKI (TOP 5)
<details><summary><b>Dąbrowskiego (891e2463233ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Dąbrowskiego
  stop_id               : 61
  h3_index              : 891e2463233ffff
  hub_id                : 85
  hub_name              : Dąbrowskiego
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 99.6169
  local_percentile      : 100.0000
  stop_local_score_raw  : 1.3339
  local_score_raw       : 1.2783
  hub_grade             : A+
  hub_percentile        : 100.0000

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 7302531.0357
  infra_score           : 17612034.7690
  stop_raw_gravity      : 3305785.2671
  stop_entropy          : 1.2090
  hub_infra_score       : 17612034.7690

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 5.0000
  transit_freq          : 9.7143
  stop_routes_count     : 8
  stop_routes           : 1, 3, 4, 5, 6, 8, 16, 17
  stop_hub_share        : 0.5147
  hub_departures_h      : 9.7143
  hub_routes            : 1, 3, 4, 5, 6, 8, 9, 16, 17

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 5167.6258
  market_val            : 5167.6258
  stop_liquidity        : 202
  hub_market_val        : 5167.6258

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 850.5281
  pop_val               : 1789.6493
  hub_pop_val           : 1789.6493

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 45x specialized_retail
  > 26x gastronomy
  > 16x personal_services
  > 13x health_clinic
  > 13x bank
  > 12x convenience_store
  > 11x university_campus
  > 10x micro_playground
  > 9x education_high_school
  > 8x education_preschool
  > 7x micro_atm
  > 7x government_central
  > 6x pharmacy
  > 6x business_office
  > 6x park_recreation
  > 5x culture_theatre
  > 5x commercial_zone
  > 4x post_office
  > 3x supermarket
  > 2x micro_parcel_locker
  > 2x shopping_mall
  > 2x place_of_worship
  > 2x police_station
  > 1x car_services
  > 1x sports_centre
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - post_office            : Urząd Pocztowy Leszno 3
    - micro_atm              : Bankomat BZ WBK
    - micro_atm              : Bankomat Santander
    - culture_theatre        : Miejska Biblioteka Publiczna
    - culture_theatre        : Pedagogiczna Biblioteka Publiczna
    - university_campus      : Wyższa Szkoła Humanistyczna BUDYNEK D
    - education_high_school  : Zakład Doskonalenia Zawodowego
    - convenience_store      : POLOmarket
    - education_high_school  : Zespół Prywatnych Szkół Średnich
    - gastronomy             : Primavera
    - supermarket            : Biedronka
    - specialized_retail     : Neonet
```
</details>
<details><summary><b>Krasińskiego (891e2463203ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Krasińskiego
  stop_id               : 108
  h3_index              : 891e2463203ffff
  hub_id                : 137
  hub_name              : Krasińskiego
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 99.2337
  local_percentile      : 99.2908
  stop_local_score_raw  : 1.1008
  local_score_raw       : 1.0659
  hub_grade             : A+
  hub_percentile        : 99.2908

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 9740971.8434
  infra_score           : 18451085.6363
  stop_raw_gravity      : 3918096.0070
  stop_entropy          : 1.4861
  hub_infra_score       : 18451085.6363

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 4.0714
  transit_freq          : 8.2143
  stop_routes_count     : 6
  stop_routes           : 3, 4, 5, 10, 11, 12
  stop_hub_share        : 0.4957
  hub_departures_h      : 8.2143
  hub_routes            : 3, 4, 5, 10, 11, 12

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 4495.7473
  market_val            : 4471.5864
  stop_liquidity        : 159
  hub_market_val        : 4471.5864

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 556.6860
  pop_val               : 1049.7720
  hub_pop_val           : 1049.7720

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 64x specialized_retail
  > 32x gastronomy
  > 25x personal_services
  > 17x bank
  > 17x convenience_store
  > 17x park_recreation
  > 13x micro_atm
  > 13x government_central
  > 12x health_clinic
  > 11x university_campus
  > 10x education_high_school
  > 9x pharmacy
  > 6x education_preschool
  > 4x post_office
  > 4x culture_theatre
  > 4x business_office
  > 4x micro_playground
  > 4x commercial_zone
  > 3x place_of_worship
  > 2x sports_centre
  > 2x social_support_mops
  > 2x industrial_zone
  > 1x car_services
  > 1x shopping_mall
  > 1x micro_parcel_locker
  > 1x marketplace
  > 1x hospital_clinical
  > 1x supermarket

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - post_office            : Urząd Pocztowy Leszno 1
    - bank                   : Santander
    - micro_atm              : Bankomat BZ WBK
    - micro_atm              : Bankomat BZ WBK
    - culture_theatre        : Miejska Biblioteka Publiczna
    - culture_theatre        : Pedagogiczna Biblioteka Publiczna
    - education_high_school  : Zakład Doskonalenia Zawodowego
    - micro_atm              : Bankomat Kredyt Bank
    - convenience_store      : Żabka
    - education_high_school  : Zespół Prywatnych Szkół Średnich
    - gastronomy             : Primavera
    - bank                   : Bank Spółdzielczy
```
</details>
<details><summary><b>Jana Pawła II pływalnia (891e2463223ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Jana Pawła II pływalnia
  stop_id               : 79
  h3_index              : 891e2463223ffff
  hub_id                : 121
  hub_name              : Jana Pawła II pływalnia
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 98.4674
  local_percentile      : 98.5816
  stop_local_score_raw  : 1.0969
  local_score_raw       : 1.0656
  hub_grade             : A+
  hub_percentile        : 98.5816

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 5986720.9179
  infra_score           : 10101743.8048
  stop_raw_gravity      : 2112008.7930
  stop_entropy          : 1.8346
  hub_infra_score       : 10101743.8048

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 3.4286
  transit_freq          : 6.8571
  stop_routes_count     : 4
  stop_routes           : 3, 4, 6, 9
  stop_hub_share        : 0.5000
  hub_departures_h      : 6.8571
  hub_routes            : 3, 4, 6, 9

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 5522.3881
  market_val            : 5522.3881
  stop_liquidity        : 177
  hub_market_val        : 5522.3881

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 998.8782
  pop_val               : 1940.9207
  hub_pop_val           : 1940.9207

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 19x specialized_retail
  > 12x micro_playground
  > 9x personal_services
  > 7x convenience_store
  > 7x education_preschool
  > 7x gastronomy
  > 6x micro_atm
  > 6x pharmacy
  > 6x health_clinic
  > 6x park_recreation
  > 5x bank
  > 5x micro_parcel_locker
  > 5x education_high_school
  > 4x supermarket
  > 4x commercial_zone
  > 3x post_office
  > 3x shopping_mall
  > 2x car_services
  > 2x business_office
  > 2x place_of_worship
  > 1x culture_theatre
  > 1x sports_centre
  > 1x university_campus
  > 1x police_station
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - post_office            : Urząd Pocztowy Leszno 3
    - micro_atm              : Bankomat BZ WBK
    - bank                   : Santander
    - micro_atm              : Bankomat Santander
    - micro_atm              : Santander
    - pharmacy               : Medina
    - convenience_store      : POLOmarket
    - supermarket            : Biedronka
    - specialized_retail     : Neonet
    - convenience_store      : Żabka
    - specialized_retail     : RTV Euro AGD
    - specialized_retail     : TXM
```
</details>
<details><summary><b>Niepodległości (891e24632abffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Niepodległości
  stop_id               : 60
  h3_index              : 891e24632abffff
  hub_id                : 50
  hub_name              : Niepodległości
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A
  grade                 : A+
  stop_percentile       : 93.8697
  local_percentile      : 97.8723
  stop_local_score_raw  : 0.9162
  local_score_raw       : 0.9719
  hub_grade             : A+
  hub_percentile        : 97.8723

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 15540343.5652
  infra_score           : 29059992.4006
  stop_raw_gravity      : 6379495.0762
  stop_entropy          : 1.4360
  hub_infra_score       : 29059992.4006

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 2.5000
  transit_freq          : 5.2143
  stop_routes_count     : 5
  stop_routes           : 1, 4, 8, 10, 16
  stop_hub_share        : 0.4795
  hub_departures_h      : 5.2143
  hub_routes            : 1, 4, 8, 9, 10, 16

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 4970.9158
  market_val            : 5152.2248
  stop_liquidity        : 154
  hub_market_val        : 5152.2248

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 752.4741
  pop_val               : 1435.4575
  hub_pop_val           : 1435.4575

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 49x specialized_retail
  > 26x gastronomy
  > 22x personal_services
  > 14x convenience_store
  > 13x bank
  > 11x university_campus
  > 10x health_clinic
  > 10x park_recreation
  > 8x education_high_school
  > 7x education_preschool
  > 7x government_central
  > 6x pharmacy
  > 6x business_office
  > 5x micro_playground
  > 5x micro_atm
  > 5x commercial_zone
  > 3x culture_theatre
  > 3x sports_centre
  > 3x supermarket
  > 3x shopping_mall
  > 3x micro_parcel_locker
  > 3x place_of_worship
  > 2x post_office
  > 2x social_support_mops
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - culture_theatre        : Miejska Biblioteka Publiczna
    - culture_theatre        : Pedagogiczna Biblioteka Publiczna
    - university_campus      : Wyższa Szkoła Humanistyczna BUDYNEK D
    - education_high_school  : Zakład Doskonalenia Zawodowego
    - pharmacy               : Dom Leków
    - convenience_store      : POLOmarket
    - education_high_school  : Zespół Prywatnych Szkół Średnich
    - gastronomy             : Primavera
    - convenience_store      : Żabka
    - bank                   : Bank Spółdzielczy
    - personal_services      : Rossmann
    - gastronomy             : Pizza Hut
```
</details>
<details><summary><b>Mickiewicza Urząd Skarbowy (891e24632b7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Mickiewicza Urząd Skarbowy
  stop_id               : 188
  h3_index              : 891e24632b7ffff
  hub_id                : 82
  hub_name              : Mickiewicza Urząd Skarbowy
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 95.7854
  local_percentile      : 97.1631
  stop_local_score_raw  : 0.9388
  local_score_raw       : 0.9421
  hub_grade             : A+
  hub_percentile        : 97.1631

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 7058335.6579
  infra_score           : 13586576.1338
  stop_raw_gravity      : 3319072.6744
  stop_entropy          : 1.1266
  hub_infra_score       : 13586576.1338

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 2.7857
  transit_freq          : 5.5714
  stop_routes_count     : 4
  stop_routes           : 3, 5, 6, 17
  stop_hub_share        : 0.5000
  hub_departures_h      : 5.5714
  hub_routes            : 3, 5, 6, 17

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 5632.1328
  market_val            : 5502.0710
  stop_liquidity        : 89
  hub_market_val        : 5502.0710

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 678.1586
  pop_val               : 1350.4627
  hub_pop_val           : 1350.4627

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 6x park_recreation
  > 5x education_high_school
  > 4x government_central
  > 4x micro_parcel_locker
  > 4x micro_playground
  > 3x convenience_store
  > 3x university_campus
  > 3x personal_services
  > 3x business_office
  > 3x sports_centre
  > 3x commercial_zone
  > 2x health_clinic
  > 2x social_support_mops
  > 1x pharmacy
  > 1x bank
  > 1x education_preschool
  > 1x gastronomy
  > 1x post_office
  > 1x micro_atm
  > 1x supermarket
  > 1x culture_theatre
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - pharmacy               : Dom Leków
    - education_high_school  : Zespół Szkół Technicznych
    - convenience_store      : Żabka
    - bank                   : Bank Spółdzielczy
    - university_campus      : Wojewódzki Ośrodek Ruchu Drogowego
    - education_preschool    : Przedszkole sióstr Elżbietanek im. św JanaPawła II
    - personal_services      : Magia Fryzur
    - business_office        : Usługi Geodezyjne Piotr Dolata
    - government_central     : Wydział Kontroli Podatkowej w Lesznie
    - sports_centre          : Sala szermiercza
    - gastronomy             : Ester
    - sports_centre          : Strzelnica Sportowa Lesna Leszno
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Wilkowice (891e247a9dbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Wilkowice
  stop_id               : 263
  h3_index              : 891e247a9dbffff
  hub_id                : 105
  hub_name              : Wilkowice
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 2.6820
  local_percentile      : 3.5461
  stop_local_score_raw  : -2.1674
  local_score_raw       : -1.9750
  hub_grade             : F
  hub_percentile        : 3.5461

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.7143
  transit_freq          : 1.5000
  stop_routes_count     : 1
  stop_routes           : 4
  stop_hub_share        : 0.4762
  hub_departures_h      : 1.5000
  hub_routes            : 4

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 3256.2942
  market_val            : 3256.2942
  stop_liquidity        : 3
  hub_market_val        : 3256.2942

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 51.8023
  pop_val               : 102.9462
  hub_pop_val           : 102.9462

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Wyciążkowo (891e2462683ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Wyciążkowo
  stop_id               : 283
  h3_index              : 891e2462683ffff
  hub_id                : 1
  hub_name              : Wyciążkowo
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 1.9157
  local_percentile      : 2.8369
  stop_local_score_raw  : -2.1742
  local_score_raw       : -2.0416
  hub_grade             : F
  hub_percentile        : 2.8369

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.2857
  transit_freq          : 0.5714
  stop_routes_count     : 2
  stop_routes           : 8, 16
  stop_hub_share        : 0.5000
  hub_departures_h      : 0.5714
  hub_routes            : 8, 16

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 5117.6027
  market_val            : 5117.6027
  stop_liquidity        : 2
  hub_market_val        : 5117.6027

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 66.9684
  pop_val               : 134.0000
  hub_pop_val           : 134.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Gronówko (891e2462653ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Gronówko
  stop_id               : 132
  h3_index              : 891e2462653ffff
  hub_id                : 75
  hub_name              : Gronówko
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 1.1494
  local_percentile      : 2.1277
  stop_local_score_raw  : -2.2776
  local_score_raw       : -2.1413
  hub_grade             : F
  hub_percentile        : 2.1277

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.2857
  transit_freq          : 0.5714
  stop_routes_count     : 2
  stop_routes           : 8, 16
  stop_hub_share        : 0.5000
  hub_departures_h      : 0.5714
  hub_routes            : 8, 16

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 4882.8125
  market_val            : 4882.8125
  stop_liquidity        : 0
  hub_market_val        : 4882.8125

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 34.9246
  pop_val               : 69.8655
  hub_pop_val           : 69.8655

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Klonówiec pętla (891e247182fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Klonówiec pętla
  stop_id               : 289
  h3_index              : 891e247182fffff
  hub_id                : 41
  hub_name              : Klonówiec pętla
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.7663
  local_percentile      : 1.4184
  stop_local_score_raw  : -2.6292
  local_score_raw       : -2.5901
  hub_grade             : F
  hub_percentile        : 1.4184

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 92.9553
  infra_score           : 92.9553
  stop_raw_gravity      : 92.9553
  stop_entropy          : -0.0000
  hub_infra_score       : 92.9553

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.2857
  transit_freq          : 0.2857
  stop_routes_count     : 1
  stop_routes           : 17
  stop_hub_share        : 1.0000
  hub_departures_h      : 0.2857
  hub_routes            : 17

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 499.4554
  market_val            : 499.4554
  stop_liquidity        : 4
  hub_market_val        : 499.4554

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 162.9564
  pop_val               : 162.9564
  hub_pop_val           : 162.9564

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x micro_playground

  [WSKAZANE KONKRETNE INSTYTUCJE]
```
</details>
<details><summary><b>Klonówiec osiedle (891e2471867ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Klonówiec osiedle
  stop_id               : 290
  h3_index              : 891e2471867ffff
  hub_id                : 89
  hub_name              : Klonówiec osiedle
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.3831
  local_percentile      : 0.7092
  stop_local_score_raw  : -2.7168
  local_score_raw       : -2.6741
  hub_grade             : F
  hub_percentile        : 0.7092

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 62.3782
  infra_score           : 62.3782
  stop_raw_gravity      : 62.3782
  stop_entropy          : -0.0000
  hub_infra_score       : 62.3782

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.2857
  transit_freq          : 0.2857
  stop_routes_count     : 1
  stop_routes           : 17
  stop_hub_share        : 1.0000
  hub_departures_h      : 0.2857
  hub_routes            : 17

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 499.4554
  market_val            : 499.4554
  stop_liquidity        : 4
  hub_market_val        : 499.4554

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 117.0436
  pop_val               : 117.0436
  hub_pop_val           : 117.0436

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x micro_playground

  [WSKAZANE KONKRETNE INSTYTUCJE]
```
</details>

---

## LODZ
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: -0.000, Std: 0.723)
     Rozkład Kartek (unikalne Huby): A: 142, A+: 72, B: 214, C: 286, D: 356, F: 356
[👥 BAZA LUDNOŚCI GUS] ❌ OSTRZEŻENIE DEMOGRAFICZNE: Odchylenie 46.8%. GUS: 983,517 vs Baza: 670,000
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
[✅]  H3 Res 8 Grid 100% Valid (1,744 komórek, 264 pustyń transportowych)
```

### Faza 0: Statystyki ogólne
- **Populacja Miasta:** 983,517 (GUS Grid)
- **Transakcje RCN:** 9,351

### Faza III: Top 20 POI (Miasto)

| Kategoria | Tier | Ilość w Mieście | Wartość Punktowa (W) |
|---|---|---|---|
| `international_airport` | T0_MEGA_HUB | 1 | 204,252,860 |
| `national_rail_hub` | T0_MEGA_HUB | 5 | 37,224,542 |
| `hospital_clinical` | T1_NATIONAL_MAGNET | 36 | 21,921,986 |
| `national_stadium` | T1_NATIONAL_MAGNET | 10 | 19,960,221 |
| `university_campus` | T1_NATIONAL_MAGNET | 78 | 18,688,120 |
| `regional_rail_hub` | T1_NATIONAL_MAGNET | 14 | 7,266,942 |
| `industrial_zone` | T2_STRATEGIC_HUB | 1518 | 4,603,532 |
| `shopping_mall` | T2_STRATEGIC_HUB | 75 | 4,223,279 |
| `commercial_zone` | T2_STRATEGIC_HUB | 1162 | 4,078,351 |
| `logistics_hub` | T2_STRATEGIC_HUB | 8 | 3,779,786 |
| `student_dormitory` | T2_STRATEGIC_HUB | 1 | 3,564,741 |
| `supermarket` | T2_STRATEGIC_HUB | 331 | 2,991,574 |
| `government_central` | T2_STRATEGIC_HUB | 180 | 2,449,943 |
| `business_office` | T2_STRATEGIC_HUB | 162 | 2,009,200 |
| `education_high_school` | T3_LOCAL_CORE | 388 | 817,493 |
| `marketplace` | T3_LOCAL_CORE | 46 | 763,343 |
| `social_support_mops` | T3_LOCAL_CORE | 73 | 717,943 |
| `sports_centre` | T3_LOCAL_CORE | 211 | 618,016 |
| `culture_theatre` | T3_LOCAL_CORE | 150 | 437,074 |
| `health_clinic` | T3_LOCAL_CORE | 454 | 391,571 |

### Faza IV: Próbki Pełnego DNA 100% (Zobacz szczegóły POI!)

#### NAJLEPSZE PRZYSTANKI (TOP 5)
<details><summary><b>Kilińskiego-Piłsudskiego (891e21b1427ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Kilińskiego-Piłsudskiego
  stop_id               : 412
  h3_index              : 891e21b1427ffff
  hub_id                : 26
  hub_name              : Piłsudskiego-Kilińskiego
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 97.7436
  local_percentile      : 100.0000
  stop_local_score_raw  : 1.0343
  local_score_raw       : 1.4041
  hub_grade             : A+
  hub_percentile        : 100.0000

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 5114072.1476
  infra_score           : 15537909.2422
  stop_raw_gravity      : 1832891.7745
  stop_entropy          : 1.7902
  hub_infra_score       : 15537909.2422

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 15.4286
  transit_freq          : 83.9286
  stop_routes_count     : 6
  stop_routes           : 1, 5, 12, 18, 77, 53A
  stop_hub_share        : 0.1838
  hub_departures_h      : 83.9286
  hub_routes            : 1, 2, 4, 5, 6, 8, 12, 14, 18, 57, 77, 83, 10A, 10B, 53A, 64B, 80A, 80B

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 9406.0945
  market_val            : 9467.4729
  stop_liquidity        : 3
  hub_market_val        : 9467.4729

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 378.2570
  pop_val               : 1049.5946
  hub_pop_val           : 1049.5946

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 28x park_recreation
  > 17x commercial_zone
  > 9x specialized_retail
  > 9x micro_parcel_locker
  > 5x gastronomy
  > 5x convenience_store
  > 5x university_campus
  > 4x business_office
  > 4x government_central
  > 4x place_of_worship
  > 3x micro_atm
  > 3x bank
  > 3x supermarket
  > 3x health_clinic
  > 3x micro_playground
  > 2x culture_theatre
  > 2x sports_centre
  > 2x personal_services
  > 2x pharmacy
  > 2x education_high_school
  > 1x shopping_mall
  > 1x education_preschool
  > 1x car_services

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : Bankomat Millennium
    - bank                   : Millennium Bank
    - gastronomy             : Cukiernia Braci Miś
    - specialized_retail     : Lemon Decor
    - bank                   : Bank Pekao
    - culture_theatre        : Sala Teatralna im. ks. Jerzego Popiełuszki
    - convenience_store      : Żabka
    - specialized_retail     : MediaMarkt
    - supermarket            : Lidl
    - specialized_retail     : Agata Wojtkiewicz
    - specialized_retail     : Butik Ślubny
    - specialized_retail     : Odzież robocza
```
</details>
<details><summary><b>Brzeźna-Piotrkowska (891e21b108bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Brzeźna-Piotrkowska
  stop_id               : 119
  h3_index              : 891e21b108bffff
  hub_id                : 137
  hub_name              : Piotrkowska-Brzeźna
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 98.9060
  local_percentile      : 99.9299
  stop_local_score_raw  : 1.0952
  local_score_raw       : 1.3729
  hub_grade             : A+
  hub_percentile        : 99.9299

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 5770278.5670
  infra_score           : 14758328.1570
  stop_raw_gravity      : 2199284.6768
  stop_entropy          : 1.6237
  hub_infra_score       : 14758328.1570

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 16.0714
  transit_freq          : 71.3571
  stop_routes_count     : 6
  stop_routes           : 57, 77, 83, 55A, 80A, 80B
  stop_hub_share        : 0.2252
  hub_departures_h      : 71.3571
  hub_routes            : 2, 3, 6, 7, 11, 57, 77, 83, 55A, 80A, 80B

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 10275.0750
  market_val            : 10275.0750
  stop_liquidity        : 6
  hub_market_val        : 10275.0750

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 381.2257
  pop_val               : 977.8336
  hub_pop_val           : 977.8336

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 43x park_recreation
  > 23x gastronomy
  > 20x commercial_zone
  > 14x micro_playground
  > 7x health_clinic
  > 7x convenience_store
  > 7x micro_parcel_locker
  > 6x culture_theatre
  > 5x micro_atm
  > 5x pharmacy
  > 5x personal_services
  > 4x supermarket
  > 4x bank
  > 3x education_preschool
  > 3x sports_centre
  > 3x education_high_school
  > 2x post_office
  > 2x specialized_retail
  > 2x university_campus
  > 2x hospital_clinical
  > 1x government_central
  > 1x place_of_worship

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy             : Soplicowo
    - pharmacy               : Rosa
    - pharmacy               : Dbam o Zdrowie
    - supermarket            : Społem
    - bank                   : mBank
    - micro_atm              : Bank Pekao
    - gastronomy             : Karczma u Chochoła
    - gastronomy             : Pizzeria Papa Lolo
    - convenience_store      : Lewiatan
    - culture_theatre        : Biblioteka Miejska w Łodzi
    - convenience_store      : Żabka
    - post_office            : Urząd Pocztowy Łódź 21
```
</details>
<details><summary><b>Rokicińska-Maszynowa (891e21b023bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Rokicińska-Maszynowa
  stop_id               : 500
  h3_index              : 891e21b023bffff
  hub_id                : 497
  hub_name              : Rokicińska-Maszynowa
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A
  grade                 : A+
  stop_percentile       : 88.7863
  local_percentile      : 99.8597
  stop_local_score_raw  : 0.7839
  local_score_raw       : 1.3513
  hub_grade             : A+
  hub_percentile        : 99.8597

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 1538315.3344
  infra_score           : 8722600.3439
  stop_raw_gravity      : 658293.0484
  stop_entropy          : 1.3368
  hub_infra_score       : 8722600.3439

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 8.1429
  transit_freq          : 54.6429
  stop_routes_count     : 11
  stop_routes           : 90, 58B, 72A, 75A, 75B, 80A, 80B, 82B, 91B, 91C, W
  stop_hub_share        : 0.1490
  hub_departures_h      : 54.6429
  hub_routes            : 3, 8, 9, 90, 10A, 10B, 58B, 72A, 75A, 75B, 80A, 80B, 82A, 82B, 91A, 91B, 91C, W

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 8723.0492
  market_val            : 8870.3702
  stop_liquidity        : 4
  hub_market_val        : 8870.3702

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 1066.1648
  pop_val               : 4871.3463
  hub_pop_val           : 4871.3463

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 7x micro_playground
  > 4x park_recreation
  > 3x convenience_store
  > 3x personal_services
  > 3x gastronomy
  > 2x supermarket
  > 2x pharmacy
  > 2x culture_theatre
  > 2x education_preschool
  > 2x health_clinic
  > 2x industrial_zone
  > 1x micro_atm
  > 1x car_services
  > 1x micro_parcel_locker
  > 1x business_office
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - supermarket            : Stokrotka
    - supermarket            : Biedronka
    - micro_atm              : Cash4You
    - pharmacy               : Dr. Max
    - culture_theatre        : Biblioteka Miejska w Łodzi
    - car_services           : Serwis opon „Auto-Centrum”
    - personal_services      : Catherine Studio Kosmetyczne
    - micro_parcel_locker    : Paczkomat InPost
    - pharmacy               : Apteka Bliska Zdrowiu
    - education_preschool    : Przedszkole Miejskie nr 183
    - gastronomy             : Pizzeria 105
    - personal_services      : Salon Fryzjerski Ala
```
</details>
<details><summary><b>Piotrkowska-Żwirki (891e21b1467ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Piotrkowska-Żwirki
  stop_id               : 544
  h3_index              : 891e21b1467ffff
  hub_id                : 311
  hub_name              : Piotrkowska-Żwirki
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 99.9316
  local_percentile      : 99.7896
  stop_local_score_raw  : 1.2578
  local_score_raw       : 1.2715
  hub_grade             : A+
  hub_percentile        : 99.7896

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 4851067.9491
  infra_score           : 13370816.6571
  stop_raw_gravity      : 1627509.1859
  stop_entropy          : 1.9807
  hub_infra_score       : 13370816.6571

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 22.7857
  transit_freq          : 45.5714
  stop_routes_count     : 5
  stop_routes           : 2, 3, 6, 7, 11
  stop_hub_share        : 0.5000
  hub_departures_h      : 45.5714
  hub_routes            : 2, 3, 6, 7, 11

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 10425.2401
  market_val            : 10425.2401
  stop_liquidity        : 5
  hub_market_val        : 10425.2401

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 536.4187
  pop_val               : 1510.2866
  hub_pop_val           : 1510.2866

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 41x gastronomy
  > 30x park_recreation
  > 27x commercial_zone
  > 15x micro_atm
  > 14x government_central
  > 14x micro_parcel_locker
  > 11x bank
  > 11x convenience_store
  > 11x micro_playground
  > 10x health_clinic
  > 9x personal_services
  > 8x pharmacy
  > 6x supermarket
  > 6x education_high_school
  > 5x specialized_retail
  > 4x culture_theatre
  > 4x sports_centre
  > 3x post_office
  > 2x education_preschool
  > 2x business_office
  > 2x shopping_mall
  > 1x social_support_mops
  > 1x place_of_worship
  > 1x hospital_clinical

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - culture_theatre        : Multikino Łódź
    - gastronomy             : Soplicowo
    - bank                   : Santander
    - micro_atm              : Bankomat Millennium
    - bank                   : Millennium Bank
    - pharmacy               : Rosa
    - pharmacy               : Dbam o Zdrowie
    - health_clinic          : Centrum Medycyny Estetycznej i Rehabilitacji Nowa Europa
    - micro_atm              : Euronet
    - micro_atm              : Bank Pekao
    - micro_atm              : CitiBank
    - gastronomy             : Karczma u Chochoła
```
</details>
<details><summary><b>Kilińskiego-Tuwima (891e21b15dbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Kilińskiego-Tuwima
  stop_id               : 394
  h3_index              : 891e21b15dbffff
  hub_id                : 31
  hub_name              : Kilińskiego-Tuwima
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 99.4530
  local_percentile      : 99.7195
  stop_local_score_raw  : 1.1739
  local_score_raw       : 1.2357
  hub_grade             : A+
  hub_percentile        : 99.7195

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 7656857.4568
  infra_score           : 17634260.4359
  stop_raw_gravity      : 4113967.4802
  stop_entropy          : 0.8612
  hub_infra_score       : 17634260.4359

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 19.2857
  transit_freq          : 46.7857
  stop_routes_count     : 6
  stop_routes           : 1, 5, 12, 18, 57, 77
  stop_hub_share        : 0.4122
  hub_departures_h      : 46.7857
  hub_routes            : 1, 5, 12, 18, 57, 77, 83, 53A, 80A, 80B

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 9777.3159
  market_val            : 9777.3159
  stop_liquidity        : 4
  hub_market_val        : 9777.3159

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 400.3013
  pop_val               : 1011.5033
  hub_pop_val           : 1011.5033

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 59x park_recreation
  > 25x commercial_zone
  > 12x gastronomy
  > 10x micro_playground
  > 9x micro_parcel_locker
  > 8x convenience_store
  > 5x personal_services
  > 4x bank
  > 4x specialized_retail
  > 4x health_clinic
  > 4x culture_theatre
  > 4x government_central
  > 4x car_services
  > 4x business_office
  > 3x police_station
  > 3x university_campus
  > 2x education_preschool
  > 2x post_office
  > 2x sports_centre
  > 2x place_of_worship
  > 2x education_high_school
  > 1x national_rail_hub
  > 1x micro_atm
  > 1x industrial_zone
  > 1x social_support_mops

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - bank                   : Millennium Przedsiębiorstwa
    - education_preschool    : Przedszkole Miejskie Nr 223
    - post_office            : Urząd Pocztowy Łódź 1
    - convenience_store      : Żabka
    - gastronomy             : Cukiernia Braci Miś
    - gastronomy             : Tu i Teraz
    - national_rail_hub      : Łódź Fabryczna
    - personal_services      : Fryzjer
    - specialized_retail     : Szop
    - bank                   : Santander
    - convenience_store      : Żabka
    - gastronomy             : Złoty Imbir
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Wola Żytowska/Konin kier. Kazimierz (891e218e917ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Wola Żytowska/Konin kier. Kazimierz
  stop_id               : 1400042
  h3_index              : 891e218e917ffff
  hub_id                : 851
  hub_name              : Wola Żytowska/Konin kier. Pabianice
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.3419
  local_percentile      : 0.3506
  stop_local_score_raw  : -2.0470
  local_score_raw       : -1.9903
  hub_grade             : F
  hub_percentile        : 0.3506

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 5477.5695
  market_val            : 5477.5695
  stop_liquidity        : 0
  hub_market_val        : 5477.5695

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 4.4880
  pop_val               : 8.9765
  hub_pop_val           : 8.9765

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Lubocha II (891e219738bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Lubocha II
  stop_id               : 1600077
  h3_index              : 891e219738bffff
  hub_id                : 883
  hub_name              : Lubocha II
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.2393
  local_percentile      : 0.2805
  stop_local_score_raw  : -2.0796
  local_score_raw       : -2.0120
  hub_grade             : F
  hub_percentile        : 0.2805

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.2143
  transit_freq          : 0.3571
  stop_routes_count     : 1
  stop_routes           : ŁA6
  stop_hub_share        : 0.6000
  hub_departures_h      : 0.3571
  hub_routes            : ŁA6

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 5477.5695
  market_val            : 5477.5695
  stop_liquidity        : 0
  hub_market_val        : 5477.5695

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 1.0124
  pop_val               : 2.0000
  hub_pop_val           : 2.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Milionowa-Przędzalniana (891e21b11d3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Milionowa-Przędzalniana
  stop_id               : 752
  h3_index              : 891e21b11d3ffff
  hub_id                : 155
  hub_name              : Milionowa-Przędzalniana
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.1709
  local_percentile      : 0.2104
  stop_local_score_raw  : -2.0895
  local_score_raw       : -2.0302
  hub_grade             : F
  hub_percentile        : 0.2104

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 3992052.5542
  infra_score           : 7255748.4781
  stop_raw_gravity      : 3092024.8750
  stop_entropy          : 0.2911
  hub_infra_score       : 7255748.4781

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 4.0714
  transit_freq          : 8.0714
  stop_routes_count     : 1
  stop_routes           : 55A
  stop_hub_share        : 0.5044
  hub_departures_h      : 8.0714
  hub_routes            : 55A

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 11.3466
  market_val            : 11.3466
  stop_liquidity        : 1
  hub_market_val        : 11.3466

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 302.7150
  pop_val               : 603.6916
  hub_pop_val           : 603.6916

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 10x gastronomy
  > 8x commercial_zone
  > 7x convenience_store
  > 6x park_recreation
  > 6x micro_playground
  > 5x micro_parcel_locker
  > 3x pharmacy
  > 3x health_clinic
  > 2x specialized_retail
  > 2x social_support_mops
  > 2x place_of_worship
  > 2x car_services
  > 1x post_office
  > 1x business_office
  > 1x micro_atm
  > 1x hospital_clinical
  > 1x education_high_school
  > 1x supermarket
  > 1x industrial_zone
  > 1x education_preschool

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy             : Cesky Film
    - specialized_retail     : Ordom
    - convenience_store      : Sklep ogólnospożywczy
    - post_office            : Poczta Polska
    - gastronomy             : Kreatoora
    - gastronomy             : Cafe Vanilia
    - convenience_store      : Żabka
    - pharmacy               : Olmed
    - gastronomy             : T.25 CAFE
    - micro_parcel_locker    : Paczkomat InPost
    - health_clinic          : LUX MED Diagnostyka
    - pharmacy               : Apteka Dbam O Zdrowie
```
</details>
<details><summary><b>Warszawska-Legionów (Stryków) (891f524f36bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Warszawska-Legionów (Stryków)
  stop_id               : 1863
  h3_index              : 891f524f36bffff
  hub_id                : 1132
  hub_name              : Warszawska-Legionów (Stryków)
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.0342
  local_percentile      : 0.1403
  stop_local_score_raw  : -2.2032
  local_score_raw       : -2.2880
  hub_grade             : F
  hub_percentile        : 0.1403

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 35315.9043
  infra_score           : 54641.4023
  stop_raw_gravity      : 35315.9043
  stop_entropy          : -0.0000
  hub_infra_score       : 54641.4023

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.5714
  transit_freq          : 0.5714
  stop_routes_count     : 1
  stop_routes           : 60C
  stop_hub_share        : 1.0000
  hub_departures_h      : 0.5714
  hub_routes            : 60C

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 101.2658
  market_val            : 101.2658
  stop_liquidity        : 1
  hub_market_val        : 101.2658

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 143.5306
  pop_val               : 151.0445
  hub_pop_val           : 151.0445

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x car_services
  > 1x place_of_worship
  > 1x micro_playground
  > 1x park_recreation

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - car_services           : LPG
    - place_of_worship       : Kościół św. Anny i św. Marcina
```
</details>
<details><summary><b>Milionowa-Śmigłego-Rydza NŻ (891e21b11d3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Milionowa-Śmigłego-Rydza NŻ
  stop_id               : 754
  h3_index              : 891e21b11d3ffff
  hub_id                : 1382
  hub_name              : Milionowa-Śmigłego-Rydza NŻ
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.1026
  local_percentile      : 0.0701
  stop_local_score_raw  : -2.1449
  local_score_raw       : -2.3056
  hub_grade             : F
  hub_percentile        : 0.0701

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 2392443.5201
  infra_score           : 3500917.2383
  stop_raw_gravity      : 1665495.2881
  stop_entropy          : 0.4365
  hub_infra_score       : 3500917.2383

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 4.0000
  transit_freq          : 4.0000
  stop_routes_count     : 1
  stop_routes           : 55A
  stop_hub_share        : 1.0000
  hub_departures_h      : 4.0000
  hub_routes            : 55A

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 11.3466
  market_val            : 11.3466
  stop_liquidity        : 1
  hub_market_val        : 11.3466

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 283.0416
  pop_val               : 466.1380
  hub_pop_val           : 466.1380

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 12x commercial_zone
  > 7x convenience_store
  > 6x gastronomy
  > 6x micro_parcel_locker
  > 6x micro_playground
  > 4x park_recreation
  > 3x health_clinic
  > 2x specialized_retail
  > 2x pharmacy
  > 2x place_of_worship
  > 2x car_services
  > 2x education_high_school
  > 2x industrial_zone
  > 1x post_office
  > 1x business_office
  > 1x micro_atm
  > 1x hospital_clinical
  > 1x supermarket
  > 1x social_support_mops
  > 1x education_preschool

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - specialized_retail     : Ordom
    - post_office            : Poczta Polska
    - gastronomy             : Cafe Vanilia
    - convenience_store      : Żabka
    - pharmacy               : Olmed
    - gastronomy             : T.25 CAFE
    - micro_parcel_locker    : Paczkomat InPost
    - micro_parcel_locker    : Paczkomat InPost
    - health_clinic          : LUX MED Diagnostyka
    - health_clinic          : Medicover Śmigłego-Rydza
    - health_clinic          : Medicover Stomatologia
    - pharmacy               : Zdrowit
```
</details>

---

## LOMZA
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ⚠️ Z-Score ODD DIST (Mean: -0.000, Std: 0.444)
     Rozkład Kartek (unikalne Huby): A: 11, A+: 6, B: 17, C: 23, D: 28, F: 27
[👥 BAZA LUDNOŚCI GUS] ✅ DEMOGRAFIA OK (Odchylenie zaledwie 8.6%)
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
[✅]  H3 Res 8 Grid 100% Valid (77 komórek, 36 pustyń transportowych)
```

### Faza 0: Statystyki ogólne
- **Populacja Miasta:** 65,157 (GUS Grid)
- **Transakcje RCN:** 5,045

### Faza III: Top 20 POI (Miasto)

| Kategoria | Tier | Ilość w Mieście | Wartość Punktowa (W) |
|---|---|---|---|
| `national_stadium` | T1_NATIONAL_MAGNET | 1 | 21,016,713 |
| `hospital_clinical` | T1_NATIONAL_MAGNET | 2 | 20,160,774 |
| `university_campus` | T1_NATIONAL_MAGNET | 3 | 5,571,516 |
| `industrial_zone` | T2_STRATEGIC_HUB | 21 | 4,717,522 |
| `commercial_zone` | T2_STRATEGIC_HUB | 2 | 3,724,124 |
| `shopping_mall` | T2_STRATEGIC_HUB | 6 | 2,975,617 |
| `supermarket` | T2_STRATEGIC_HUB | 32 | 2,124,746 |
| `government_central` | T2_STRATEGIC_HUB | 16 | 2,000,425 |
| `business_office` | T2_STRATEGIC_HUB | 7 | 1,588,942 |
| `education_high_school` | T3_LOCAL_CORE | 32 | 627,642 |
| `sports_centre` | T3_LOCAL_CORE | 6 | 581,808 |
| `marketplace` | T3_LOCAL_CORE | 2 | 553,069 |
| `culture_theatre` | T3_LOCAL_CORE | 5 | 406,624 |
| `health_clinic` | T3_LOCAL_CORE | 10 | 328,281 |
| `social_support_mops` | T3_LOCAL_CORE | 3 | 278,576 |
| `education_preschool` | T4_DAILY_SERVICE | 33 | 87,601 |
| `post_office` | T4_DAILY_SERVICE | 5 | 68,508 |
| `specialized_retail` | T4_DAILY_SERVICE | 28 | 63,168 |
| `car_services` | T4_DAILY_SERVICE | 19 | 62,384 |
| `convenience_store` | T4_DAILY_SERVICE | 27 | 56,467 |

### Faza IV: Próbki Pełnego DNA 100% (Zobacz szczegóły POI!)

#### NAJLEPSZE PRZYSTANKI (TOP 5)
<details><summary><b>Kazańska — Spółdzielnia Perspektywa (891f51cad2bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Kazańska — Spółdzielnia Perspektywa
  stop_id               : 142
  h3_index              : 891f51cad2bffff
  hub_id                : 109
  hub_name              : Kazańska — Spółdzielnia Perspektywa
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 99.4318
  local_percentile      : 100.0000
  stop_local_score_raw  : 0.6545
  local_score_raw       : 0.7214
  hub_grade             : A+
  hub_percentile        : 100.0000

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 3554006.5012
  infra_score           : 6848506.1805
  stop_raw_gravity      : 2159195.1952
  stop_entropy          : 0.6460
  hub_infra_score       : 6848506.1805

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6125.5743
  market_val            : 6257.0451
  stop_liquidity        : 1051
  hub_market_val        : 6257.0451

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 821.8924
  pop_val               : 1544.2297
  hub_pop_val           : 1544.2297

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 24x micro_playground
  > 8x micro_atm
  > 8x pharmacy
  > 7x park_recreation
  > 6x supermarket
  > 5x micro_parcel_locker
  > 4x gastronomy
  > 3x convenience_store
  > 3x shopping_mall
  > 3x specialized_retail
  > 2x post_office
  > 2x education_preschool
  > 2x place_of_worship
  > 1x bank
  > 1x personal_services
  > 1x health_clinic
  > 1x government_central
  > 1x hospital_clinical

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : Bankomat Cash4You
    - post_office            : UP Łomża 6
    - shopping_mall          : Galeria Łomża
    - micro_atm              : Euronet
    - micro_atm              : PKO BP
    - bank                   : PKO BP
    - micro_atm              : PKO BP
    - micro_parcel_locker    : Paczkomat InPost
    - supermarket            : Stokrotka
    - gastronomy             : Diavolo Łomża
    - personal_services      : Rossmann
    - gastronomy             : Apetyt Bistro
```
</details>
<details><summary><b>Zawadzka — Stokrotka (891f51cad77ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Zawadzka — Stokrotka
  stop_id               : 96
  h3_index              : 891f51cad77ffff
  hub_id                : 103
  hub_name              : Zawadzka — Stokrotka
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 98.8636
  local_percentile      : 99.1071
  stop_local_score_raw  : 0.5834
  local_score_raw       : 0.5677
  hub_grade             : A+
  hub_percentile        : 99.1071

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 2665933.3323
  infra_score           : 3969243.3041
  stop_raw_gravity      : 1555071.0156
  stop_entropy          : 0.7143
  hub_infra_score       : 3969243.3041

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 5769.5178
  market_val            : 5769.5178
  stop_liquidity        : 642
  hub_market_val        : 5769.5178

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 1080.7691
  pop_val               : 1675.2307
  hub_pop_val           : 1675.2307

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 40x micro_playground
  > 7x micro_atm
  > 7x pharmacy
  > 7x park_recreation
  > 6x supermarket
  > 4x micro_parcel_locker
  > 4x gastronomy
  > 3x shopping_mall
  > 3x education_preschool
  > 3x specialized_retail
  > 2x convenience_store
  > 2x place_of_worship
  > 1x post_office
  > 1x bank
  > 1x personal_services
  > 1x government_central
  > 1x sports_centre
  > 1x education_high_school

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - post_office            : UP Łomża 6
    - shopping_mall          : Galeria Łomża
    - micro_atm              : Euronet
    - micro_atm              : PKO BP
    - bank                   : PKO BP
    - micro_atm              : PKO BP
    - micro_parcel_locker    : Paczkomat InPost
    - gastronomy             : Diavolo Łomża
    - personal_services      : Rossmann
    - gastronomy             : Apetyt Bistro
    - education_preschool    : Niepubliczne przedszkole Montessori Przystań
    - convenience_store      : Alex
```
</details>
<details><summary><b>Aleja Piłsudzkiego — Empik (891f51cad77ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Aleja Piłsudzkiego — Empik
  stop_id               : 49
  h3_index              : 891f51cad77ffff
  hub_id                : 34
  hub_name              : Aleja Piłsudzkiego — Łagody
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 97.7273
  local_percentile      : 98.2143
  stop_local_score_raw  : 0.5089
  local_score_raw       : 0.5164
  hub_grade             : A+
  hub_percentile        : 98.2143

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 2468946.9602
  infra_score           : 3983791.9842
  stop_raw_gravity      : 1111789.9307
  stop_entropy          : 1.2207
  hub_infra_score       : 3983791.9842

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 5545.2865
  market_val            : 5540.1662
  stop_liquidity        : 665
  hub_market_val        : 5540.1662

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 849.0335
  pop_val               : 1460.9883
  hub_pop_val           : 1460.9883

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 34x micro_playground
  > 8x micro_atm
  > 7x pharmacy
  > 7x park_recreation
  > 6x supermarket
  > 4x education_preschool
  > 4x micro_parcel_locker
  > 4x gastronomy
  > 3x shopping_mall
  > 3x specialized_retail
  > 2x convenience_store
  > 2x place_of_worship
  > 1x post_office
  > 1x bank
  > 1x personal_services
  > 1x government_central

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : Bankomat Cash4You
    - post_office            : UP Łomża 6
    - education_preschool    : Przedszkole Publiczne Nr 10
    - shopping_mall          : Galeria Łomża
    - micro_atm              : Euronet
    - micro_atm              : PKO BP
    - bank                   : PKO BP
    - micro_atm              : PKO BP
    - micro_parcel_locker    : Paczkomat InPost
    - supermarket            : Stokrotka
    - gastronomy             : Diavolo Łomża
    - personal_services      : Rossmann
```
</details>
<details><summary><b>Aleja Legionów — Kontakty (891f51c132fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Aleja Legionów — Kontakty
  stop_id               : 3
  h3_index              : 891f51c132fffff
  hub_id                : 0
  hub_name              : Aleja Legionów — Kontakty
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 97.1591
  local_percentile      : 97.3214
  stop_local_score_raw  : 0.5004
  local_score_raw       : 0.5002
  hub_grade             : A+
  hub_percentile        : 97.3214

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 3574547.8195
  infra_score           : 6053473.9836
  stop_raw_gravity      : 1332828.1941
  stop_entropy          : 1.6819
  hub_infra_score       : 6053473.9836

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 5275.6532
  market_val            : 5275.6532
  stop_liquidity        : 298
  hub_market_val        : 5275.6532

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 639.6875
  pop_val               : 1009.2018
  hub_pop_val           : 1009.2018

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 14x bank
  > 13x place_of_worship
  > 13x micro_playground
  > 8x park_recreation
  > 7x education_high_school
  > 6x gastronomy
  > 5x pharmacy
  > 5x personal_services
  > 5x convenience_store
  > 4x government_central
  > 4x education_preschool
  > 3x culture_theatre
  > 3x specialized_retail
  > 2x micro_parcel_locker
  > 1x micro_atm
  > 1x police_station
  > 1x social_support_mops
  > 1x university_campus
  > 1x post_office
  > 1x supermarket
  > 1x hospital_clinical

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : Bankomat BZ WBK
    - pharmacy               : Gemini
    - education_high_school  : Katolicka szkoła podstawowa im. Kardynała S. Wyszyńskiego
    - gastronomy             : Chicken Bar
    - culture_theatre        : Miejska Biblioteka Publiczna
    - bank                   : Alior Bank
    - bank                   : EuroBank
    - pharmacy               : Medica
    - bank                   : SKOK
    - gastronomy             : Smak Kebab
    - bank                   : Crédit Agricole
    - gastronomy             : Gruby Benek
```
</details>
<details><summary><b>Aleja Legionów — Dworzec (891f51cad9bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Aleja Legionów — Dworzec
  stop_id               : 6
  h3_index              : 891f51cad9bffff
  hub_id                : 2
  hub_name              : Aleja Legionów — Kopernika
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A
  grade                 : A+
  stop_percentile       : 94.3182
  local_percentile      : 96.4286
  stop_local_score_raw  : 0.4556
  local_score_raw       : 0.4711
  hub_grade             : A+
  hub_percentile        : 96.4286

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 4333358.7234
  infra_score           : 7263138.8547
  stop_raw_gravity      : 2226689.4885
  stop_entropy          : 0.9461
  hub_infra_score       : 7263138.8547

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 5171.6707
  market_val            : 5228.7582
  stop_liquidity        : 127
  hub_market_val        : 5228.7582

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 368.3154
  pop_val               : 649.2856
  hub_pop_val           : 649.2856

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 9x micro_playground
  > 7x gastronomy
  > 6x pharmacy
  > 6x convenience_store
  > 5x education_preschool
  > 4x bank
  > 3x supermarket
  > 3x education_high_school
  > 3x micro_parcel_locker
  > 2x car_services
  > 2x marketplace
  > 2x specialized_retail
  > 2x shopping_mall
  > 2x place_of_worship
  > 1x micro_atm
  > 1x personal_services
  > 1x government_central
  > 1x police_station
  > 1x park_recreation
  > 1x hospital_clinical
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - car_services           : Circle K
    - pharmacy               : Gemini
    - supermarket            : Lidl
    - marketplace            : Targowisko Miejskie
    - bank                   : SKOK
    - gastronomy             : Smak Kebab
    - bank                   : Crédit Agricole
    - gastronomy             : Gruby Benek
    - bank                   : SKOK
    - personal_services      : Rossmann
    - convenience_store      : Alex
    - education_high_school  : Liceum Plastyczne im. Wojciecha Kossaka w Łomży
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Sikorskiego — Dworna (891f51c1e7bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Sikorskiego — Dworna
  stop_id               : 82
  h3_index              : 891f51c1e7bffff
  hub_id                : 66
  hub_name              : Sikorskiego — Dworna
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 3.9773
  local_percentile      : 4.4643
  stop_local_score_raw  : -1.0173
  local_score_raw       : -0.9670
  hub_grade             : F
  hub_percentile        : 4.4643

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 35511.7344
  infra_score           : 72234.2107
  stop_raw_gravity      : 17788.1193
  stop_entropy          : 0.9964
  hub_infra_score       : 72234.2107

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 2692.3077
  market_val            : 2692.3077
  stop_liquidity        : 1
  hub_market_val        : 2692.3077

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 206.4261
  pop_val               : 338.4301
  hub_pop_val           : 338.4301

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 2x place_of_worship
  > 2x education_high_school
  > 1x gastronomy
  > 1x convenience_store

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - place_of_worship       : Kaplica klasztorna
    - convenience_store      : Sklep Spożywczy Ewa
    - education_high_school  : III Liceum Ogólnokształcące im. Żołnierzy Obwodu Łomżyńskiego AK w Łomży
    - education_high_school  : Zespół Szkół Technicznych i Ogólnokształcących Nr 4 im. Marii Skłodowskiej-Curie w Łomży
    - place_of_worship       : Kościół pw. Trójcy Przenajświętszej
```
</details>
<details><summary><b>Zawadzka — Szosa Do Mężenina (891f51ca837ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Zawadzka — Szosa Do Mężenina
  stop_id               : 147
  h3_index              : 891f51ca837ffff
  hub_id                : 20
  hub_name              : Zawadzka — Szosa Do Mężenina
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 3.4091
  local_percentile      : 3.5714
  stop_local_score_raw  : -1.1154
  local_score_raw       : -1.1041
  hub_grade             : F
  hub_percentile        : 3.5714

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 1832.4777
  infra_score           : 2599.3396
  stop_raw_gravity      : 1832.4777
  stop_entropy          : -0.0000
  hub_infra_score       : 2599.3396

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 4879.1823
  market_val            : 4879.1823
  stop_liquidity        : 14
  hub_market_val        : 4879.1823

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 103.6358
  pop_val               : 142.1386
  hub_pop_val           : 142.1386

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x micro_parcel_locker
  > 1x health_clinic

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_parcel_locker    : Appkomat InPost
    - health_clinic          : Gabinet Położnej \
```
</details>
<details><summary><b>Rybaki — Sikorskiego (891f51c1e63ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Rybaki — Sikorskiego
  stop_id               : 131
  h3_index              : 891f51c1e63ffff
  hub_id                : 61
  hub_name              : Rybaki — Sikorskiego
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 2.2727
  local_percentile      : 2.6786
  stop_local_score_raw  : -1.2685
  local_score_raw       : -1.2899
  hub_grade             : F
  hub_percentile        : 2.6786

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 10121.1621
  infra_score           : 14041.2279
  stop_raw_gravity      : 10121.1621
  stop_entropy          : -0.0000
  hub_infra_score       : 14041.2279

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 2692.3077
  market_val            : 2692.3077
  stop_liquidity        : 1
  hub_market_val        : 2692.3077

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 160.2287
  pop_val               : 226.3417
  hub_pop_val           : 226.3417

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x gastronomy
  > 1x convenience_store

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store      : Sklep Spożywczy Ewa
```
</details>
<details><summary><b>Zdrojowa Ⅰ (891f51c1e6fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Zdrojowa Ⅰ
  stop_id               : 84
  h3_index              : 891f51c1e6fffff
  hub_id                : 26
  hub_name              : Zdrojowa Ⅰ
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 1.1364
  local_percentile      : 1.7857
  stop_local_score_raw  : -1.7366
  local_score_raw       : -1.7214
  hub_grade             : F
  hub_percentile        : 1.7857

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 759.4495
  infra_score           : 1110.0784
  stop_raw_gravity      : 759.4495
  stop_entropy          : -0.0000
  hub_infra_score       : 1110.0784

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 2692.3077
  market_val            : 2692.3077
  stop_liquidity        : 1
  hub_market_val        : 2692.3077

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 148.6605
  pop_val               : 218.0049
  hub_pop_val           : 218.0049

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x convenience_store

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store      : Sklep Spożywczy Ewa
```
</details>
<details><summary><b>Królowej Bony (891f51c1ad7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Królowej Bony
  stop_id               : 212
  h3_index              : 891f51c1ad7ffff
  hub_id                : 87
  hub_name              : Królowej Bony
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.5682
  local_percentile      : 0.8929
  stop_local_score_raw  : -2.2105
  local_score_raw       : -2.1953
  hub_grade             : F
  hub_percentile        : 0.8929

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 5960.6481
  market_val            : 5960.6481
  stop_liquidity        : 2
  hub_market_val        : 5960.6481

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 192.3234
  pop_val               : 229.7792
  hub_pop_val           : 229.7792

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>

---

## LUBLIN
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: -0.000, Std: 0.712)
     Rozkład Kartek (unikalne Huby): A: 76, A+: 38, B: 113, C: 151, D: 189, F: 188
[👥 BAZA LUDNOŚCI GUS] ❌ OSTRZEŻENIE DEMOGRAFICZNE: Odchylenie 35.2%. GUS: 446,126 vs Baza: 330,000
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
[✅]  H3 Res 8 Grid 100% Valid (869 komórek, 165 pustyń transportowych)
```

### Faza 0: Statystyki ogólne
- **Populacja Miasta:** 446,126 (GUS Grid)
- **Transakcje RCN:** 40,868

### Faza III: Top 20 POI (Miasto)

| Kategoria | Tier | Ilość w Mieście | Wartość Punktowa (W) |
|---|---|---|---|
| `international_airport` | T0_MEGA_HUB | 1 | 191,846,537 |
| `national_rail_hub` | T0_MEGA_HUB | 1 | 35,896,452 |
| `national_stadium` | T1_NATIONAL_MAGNET | 2 | 23,123,671 |
| `hospital_clinical` | T1_NATIONAL_MAGNET | 17 | 21,682,418 |
| `university_campus` | T1_NATIONAL_MAGNET | 71 | 10,644,670 |
| `regional_rail_hub` | T1_NATIONAL_MAGNET | 4 | 6,953,353 |
| `industrial_zone` | T2_STRATEGIC_HUB | 338 | 4,528,676 |
| `commercial_zone` | T2_STRATEGIC_HUB | 341 | 4,234,390 |
| `shopping_mall` | T2_STRATEGIC_HUB | 35 | 4,056,902 |
| `student_dormitory` | T2_STRATEGIC_HUB | 1 | 3,983,318 |
| `supermarket` | T2_STRATEGIC_HUB | 191 | 2,532,441 |
| `government_central` | T2_STRATEGIC_HUB | 104 | 2,346,082 |
| `business_office` | T2_STRATEGIC_HUB | 95 | 1,963,522 |
| `education_high_school` | T3_LOCAL_CORE | 274 | 616,813 |
| `marketplace` | T3_LOCAL_CORE | 31 | 606,082 |
| `social_support_mops` | T3_LOCAL_CORE | 69 | 530,373 |
| `sports_centre` | T3_LOCAL_CORE | 172 | 505,390 |
| `health_clinic` | T3_LOCAL_CORE | 210 | 377,276 |
| `culture_theatre` | T3_LOCAL_CORE | 84 | 351,812 |
| `police_station` | T4_DAILY_SERVICE | 22 | 149,334 |

### Faza IV: Próbki Pełnego DNA 100% (Zobacz szczegóły POI!)

#### NAJLEPSZE PRZYSTANKI (TOP 5)
<details><summary><b>Ogród Saski (891e2d09db3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Ogród Saski
  stop_id               : 1003
  h3_index              : 891e2d09db3ffff
  hub_id                : 209
  hub_name              : Ogród Saski
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 100.0000
  local_percentile      : 100.0000
  stop_local_score_raw  : 1.6206
  local_score_raw       : 1.5448
  hub_grade             : A+
  hub_percentile        : 100.0000

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 11647552.8979
  infra_score           : 26610472.1708
  stop_raw_gravity      : 4861616.6231
  stop_entropy          : 1.3958
  hub_infra_score       : 26610472.1708

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 39.5000
  transit_freq          : 63.4286
  stop_routes_count     : 19
  stop_routes           : 2, 3, 4, 7, 8, 13, 15, 18, 20, 26, 31, 44, 55, 57, 74, 150, 151, 155, 158
  stop_hub_share        : 0.6227
  hub_departures_h      : 63.4286
  hub_routes            : 2, 3, 4, 7, 8, 13, 15, 18, 20, 26, 31, 32, 40, 44, 55, 57, 74, 150, 151, 155, 158, 302

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 9655.1724
  market_val            : 9661.2834
  stop_liquidity        : 981
  hub_market_val        : 9661.2834

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 325.5773
  pop_val               : 596.6178
  hub_pop_val           : 596.6178

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 48x gastronomy
  > 24x government_central
  > 19x park_recreation
  > 16x bank
  > 15x convenience_store
  > 14x commercial_zone
  > 12x specialized_retail
  > 8x micro_atm
  > 7x culture_theatre
  > 6x micro_playground
  > 5x business_office
  > 5x pharmacy
  > 5x place_of_worship
  > 4x health_clinic
  > 4x personal_services
  > 4x education_preschool
  > 4x university_campus
  > 4x marketplace
  > 3x supermarket
  > 3x micro_parcel_locker
  > 3x education_high_school
  > 2x shopping_mall
  > 1x car_services
  > 1x social_support_mops
  > 1x sports_centre
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - business_office        : Voal Lublin
    - convenience_store      : Żabka
    - micro_atm              : Euronet
    - micro_atm              : PKO BP
    - gastronomy             : Shawarma
    - gastronomy             : Insomnia
    - convenience_store      : Żabka
    - bank                   : Narodowy Bank Polski
    - specialized_retail     : Pracownia Krawiecka i Renowacja odzieży skórzanej
    - bank                   : Punkt Obsługi Bankowej I piętro
    - convenience_store      : Żabka
    - car_services           : Avia
```
</details>
<details><summary><b>Plac Litewski (891e2d08e6bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Plac Litewski
  stop_id               : 1021
  h3_index              : 891e2d08e6bffff
  hub_id                : 556
  hub_name              : Plac Litewski
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 99.9239
  local_percentile      : 99.8675
  stop_local_score_raw  : 1.5483
  local_score_raw       : 1.5215
  hub_grade             : A+
  hub_percentile        : 99.8675

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 26907892.5529
  infra_score           : 44097035.8639
  stop_raw_gravity      : 11219701.5495
  stop_entropy          : 1.3983
  hub_infra_score       : 44097035.8639

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 19.0000
  transit_freq          : 38.1429
  stop_routes_count     : 9
  stop_routes           : 2, 18, 26, 31, 32, 40, 57, 150, 302
  stop_hub_share        : 0.4981
  hub_departures_h      : 38.1429
  hub_routes            : 2, 18, 26, 31, 32, 40, 57, 150, 302

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 10634.2759
  market_val            : 10477.8057
  stop_liquidity        : 831
  hub_market_val        : 10477.8057

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 538.5433
  pop_val               : 804.6433
  hub_pop_val           : 804.6433

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 63x gastronomy
  > 29x government_central
  > 22x bank
  > 22x park_recreation
  > 19x convenience_store
  > 17x personal_services
  > 14x specialized_retail
  > 14x university_campus
  > 12x education_high_school
  > 12x commercial_zone
  > 10x pharmacy
  > 9x health_clinic
  > 9x micro_playground
  > 8x micro_atm
  > 7x place_of_worship
  > 5x culture_theatre
  > 5x business_office
  > 5x micro_parcel_locker
  > 4x education_preschool
  > 4x social_support_mops
  > 4x hospital_clinical
  > 2x supermarket
  > 1x post_office
  > 1x shopping_mall
  > 1x marketplace

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - bank                   : Millennium Bank
    - convenience_store      : Żabka
    - micro_atm              : Euronet
    - micro_atm              : PKO BP
    - bank                   : Millennium Przedsiębiorstwa
    - bank                   : Narodowy Bank Polski
    - specialized_retail     : Pracownia Krawiecka i Renowacja odzieży skórzanej
    - convenience_store      : Żabka
    - bank                   : Punkt Obsługi Bankowej I piętro
    - convenience_store      : Żabka
    - micro_atm              : PKO BP
    - gastronomy             : Galeria Smaku
```
</details>
<details><summary><b>Zamojska (891e2d08a1bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Zamojska
  stop_id               : 2232
  h3_index              : 891e2d08a1bffff
  hub_id                : 48
  hub_name              : Zamojska
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 99.6956
  local_percentile      : 99.7351
  stop_local_score_raw  : 1.4552
  local_score_raw       : 1.4700
  hub_grade             : A+
  hub_percentile        : 99.7351

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 8015186.1453
  infra_score           : 13682080.0370
  stop_raw_gravity      : 3862476.1267
  stop_entropy          : 1.0751
  hub_infra_score       : 13682080.0370

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 24.6429
  transit_freq          : 51.5000
  stop_routes_count     : 14
  stop_routes           : 3, 5, 6, 7, 13, 17, 22, 24, 25, 52, 55, 156, 159, 160
  stop_hub_share        : 0.4785
  hub_departures_h      : 51.5000
  hub_routes            : 3, 5, 6, 7, 13, 17, 22, 23, 24, 25, 52, 55, 156, 159, 160

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 10207.0841
  market_val            : 10088.3635
  stop_liquidity        : 209
  hub_market_val        : 10088.3635

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 345.7425
  pop_val               : 690.6494
  hub_pop_val           : 690.6494

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 6x micro_parcel_locker
  > 6x park_recreation
  > 5x convenience_store
  > 5x micro_playground
  > 3x micro_atm
  > 3x sports_centre
  > 3x specialized_retail
  > 3x gastronomy
  > 3x personal_services
  > 3x social_support_mops
  > 3x place_of_worship
  > 3x university_campus
  > 2x shopping_mall
  > 2x education_high_school
  > 2x police_station
  > 1x supermarket
  > 1x bank
  > 1x car_services
  > 1x culture_theatre
  > 1x education_preschool
  > 1x business_office
  > 1x commercial_zone
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - shopping_mall          : Vipsat
    - supermarket            : Biedronka
    - micro_atm              : Euronet
    - micro_atm              : Euronet
    - bank                   : Bank DNB Nord
    - car_services           : Amic
    - sports_centre          : Hala MOSiR im. Zdzisława Niedzieli
    - sports_centre          : Strefa H2O
    - specialized_retail     : Telemax
    - gastronomy             : Maxipizza
    - specialized_retail     : Retoure Euro RTV AGD
    - personal_services      : Salon Fryzjerski Syrena
```
</details>
<details><summary><b>KUL (891e2d09d87ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : KUL
  stop_id               : 5902
  h3_index              : 891e2d09d87ffff
  hub_id                : 713
  hub_name              : KUL
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 99.4673
  local_percentile      : 99.6026
  stop_local_score_raw  : 1.3546
  local_score_raw       : 1.2840
  hub_grade             : A+
  hub_percentile        : 99.6026

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 4561989.5302
  infra_score           : 8421112.5772
  stop_raw_gravity      : 2807560.5901
  stop_entropy          : 0.6249
  hub_infra_score       : 8421112.5772

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 39.7143
  transit_freq          : 71.2857
  stop_routes_count     : 19
  stop_routes           : 2, 3, 4, 7, 8, 13, 15, 18, 20, 26, 31, 44, 55, 57, 74, 150, 151, 155, 158
  stop_hub_share        : 0.5571
  hub_departures_h      : 71.2857
  hub_routes            : 2, 3, 4, 7, 8, 12, 13, 15, 18, 20, 26, 31, 44, 55, 57, 74, 150, 151, 155, 158

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 7801.5734
  market_val            : 7778.9588
  stop_liquidity        : 539
  hub_market_val        : 7778.9588

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 314.9506
  pop_val               : 516.5858
  hub_pop_val           : 516.5858

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 27x gastronomy
  > 20x park_recreation
  > 19x education_high_school
  > 11x university_campus
  > 8x education_preschool
  > 7x convenience_store
  > 6x micro_atm
  > 6x culture_theatre
  > 6x sports_centre
  > 6x micro_playground
  > 5x commercial_zone
  > 4x government_central
  > 3x health_clinic
  > 3x pharmacy
  > 3x car_services
  > 2x supermarket
  > 2x personal_services
  > 2x place_of_worship
  > 1x post_office
  > 1x micro_parcel_locker
  > 1x business_office
  > 1x student_dormitory
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy             : La Casa Restauracja Pizzeria
    - convenience_store      : Banan
    - gastronomy             : jeden
    - gastronomy             : Shawarma
    - convenience_store      : Żabka
    - post_office            : Urząd Pocztowy Lublin 9
    - gastronomy             : Lub Burger
    - supermarket            : Stokrotka
    - health_clinic          : Przychodnie Zdrowia
    - culture_theatre        : Opera Lubelska
    - culture_theatre        : Filharmonia im. Henryka Wieniawskiego
    - culture_theatre        : Miejska Biblioteka Publiczna w Lublinie Filia nr 6
```
</details>
<details><summary><b>Lotnicza (891e2d72493ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Lotnicza
  stop_id               : 3122
  h3_index              : 891e2d72493ffff
  hub_id                : 459
  hub_name              : Lotnicza
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 98.8584
  local_percentile      : 99.4702
  stop_local_score_raw  : 1.2338
  local_score_raw       : 1.2609
  hub_grade             : A+
  hub_percentile        : 99.4702

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 8129337.3243
  infra_score           : 15429541.3745
  stop_raw_gravity      : 4462312.5971
  stop_entropy          : 0.8218
  hub_infra_score       : 15429541.3745

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 17.6429
  transit_freq          : 35.8571
  stop_routes_count     : 10
  stop_routes           : 7, 14, 16, 23, 35, 55, 153, 156, 158, 161
  stop_hub_share        : 0.4920
  hub_departures_h      : 35.8571
  hub_routes            : 7, 14, 16, 23, 35, 55, 153, 156, 158, 161, 950

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 7594.9367
  market_val            : 7547.4128
  stop_liquidity        : 1495
  hub_market_val        : 7547.4128

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 1443.0194
  pop_val               : 2629.9225
  hub_pop_val           : 2629.9225

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 20x micro_playground
  > 14x park_recreation
  > 11x micro_parcel_locker
  > 10x gastronomy
  > 8x convenience_store
  > 8x education_preschool
  > 5x pharmacy
  > 5x education_high_school
  > 4x micro_atm
  > 4x personal_services
  > 4x commercial_zone
  > 3x supermarket
  > 3x bank
  > 3x health_clinic
  > 2x place_of_worship
  > 1x post_office
  > 1x culture_theatre
  > 1x business_office
  > 1x government_central
  > 1x marketplace
  > 1x car_services
  > 1x shopping_mall

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : Bankomat BZ WBK
    - post_office            : Lublin 10
    - personal_services      : Rossmann
    - convenience_store      : Społem
    - education_preschool    : Przedszkole nr 32 w Lublinie
    - supermarket            : Stokrotka
    - gastronomy             : MO-RAFI
    - culture_theatre        : Miejska Biblioteka Publiczna w Lublinie Filia nr 9
    - gastronomy             : Chili
    - micro_atm              : PKO BP
    - pharmacy               : Sulap
    - supermarket            : Biedronka
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Majdan (891e2d4412fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Majdan
  stop_id               : 51391
  h3_index              : 891e2d4412fffff
  hub_id                : 193
  hub_name              : Majdan
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 1.1416
  local_percentile      : 0.6623
  stop_local_score_raw  : -1.7750
  local_score_raw       : -1.8411
  hub_grade             : F
  hub_percentile        : 0.6623

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 7245.8954
  market_val            : 7245.8954
  stop_liquidity        : 0
  hub_market_val        : 7245.8954

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 67.0000
  pop_val               : 67.0000
  hub_pop_val           : 67.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Snopków I (891e2d08487ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Snopków I
  stop_id               : 9511
  h3_index              : 891e2d08487ffff
  hub_id                : 349
  hub_name              : Snopków I
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 1.4460
  local_percentile      : 0.5298
  stop_local_score_raw  : -1.7576
  local_score_raw       : -1.8827
  hub_grade             : F
  hub_percentile        : 0.5298

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 47.5706
  infra_score           : 48.0565
  stop_raw_gravity      : 47.5706
  stop_entropy          : -0.0000
  hub_infra_score       : 48.0565

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.7143
  transit_freq          : 0.7143
  stop_routes_count     : 1
  stop_routes           : 7
  stop_hub_share        : 1.0000
  hub_departures_h      : 0.7143
  hub_routes            : 7

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 3717.7935
  market_val            : 3717.7935
  stop_liquidity        : 3
  hub_market_val        : 3717.7935

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 67.8747
  pop_val               : 67.8747
  hub_pop_val           : 67.8747

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x micro_parcel_locker
  > 1x park_recreation

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_parcel_locker    : Appkomat InPost
```
</details>
<details><summary><b>Zawieprzyce - skrzyżowanie NŻ (891e2d00b63ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Zawieprzyce - skrzyżowanie NŻ
  stop_id               : 9661
  h3_index              : 891e2d00b63ffff
  hub_id                : 32
  hub_name              : Zawieprzyce - skrzyżowanie NŻ
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.3805
  local_percentile      : 0.3974
  stop_local_score_raw  : -1.8842
  local_score_raw       : -1.9883
  hub_grade             : F
  hub_percentile        : 0.3974

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.6429
  transit_freq          : 0.6429
  stop_routes_count     : 1
  stop_routes           : 22
  stop_hub_share        : 1.0000
  hub_departures_h      : 0.6429
  hub_routes            : 22

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 7245.8954
  market_val            : 7245.8954
  stop_liquidity        : 0
  hub_market_val        : 7245.8954

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 2.8093
  pop_val               : 2.8093
  hub_pop_val           : 2.8093

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Snopków I (891e2d08417ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Snopków I
  stop_id               : 9512
  h3_index              : 891e2d08417ffff
  hub_id                : 259
  hub_name              : Snopków I
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.1522
  local_percentile      : 0.2649
  stop_local_score_raw  : -1.9014
  local_score_raw       : -2.0088
  hub_grade             : F
  hub_percentile        : 0.2649

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.7857
  transit_freq          : 0.7857
  stop_routes_count     : 1
  stop_routes           : 7
  stop_hub_share        : 1.0000
  hub_departures_h      : 0.7857
  hub_routes            : 7

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 4567.3390
  market_val            : 4567.3390
  stop_liquidity        : 1
  hub_market_val        : 4567.3390

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 85.8954
  pop_val               : 85.8954
  hub_pop_val           : 85.8954

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x car_services

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - car_services           : Auto Naprawa Łukasz Lipiec
```
</details>
<details><summary><b>Podzamcze (891e2d0db87ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Podzamcze
  stop_id               : 50518
  h3_index              : 891e2d0db87ffff
  hub_id                : 640
  hub_name              : Podzamcze
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.0761
  local_percentile      : 0.1325
  stop_local_score_raw  : -1.9300
  local_score_raw       : -2.0384
  hub_grade             : F
  hub_percentile        : 0.1325

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 1033.6439
  infra_score           : 1033.6439
  stop_raw_gravity      : 1033.6439
  stop_entropy          : -0.0000
  hub_infra_score       : 1033.6439

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 2488.8709
  market_val            : 2488.8709
  stop_liquidity        : 1
  hub_market_val        : 2488.8709

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 172.0000
  pop_val               : 172.0000
  hub_pop_val           : 172.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 3x park_recreation
  > 1x micro_playground

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - park_recreation        : zespół pałacowo-parkowy w Podzamczu
```
</details>

---

## OLSZTYN
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ⚠️ Z-Score ODD DIST (Mean: -0.000, Std: 0.470)
     Rozkład Kartek (unikalne Huby): A: 42, A+: 22, B: 64, C: 85, D: 106, F: 106
[👥 BAZA LUDNOŚCI GUS] ❌ OSTRZEŻENIE DEMOGRAFICZNE: Odchylenie 26.8%. GUS: 215,625 vs Baza: 170,000
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
[✅]  H3 Res 8 Grid 100% Valid (708 komórek, 142 pustyń transportowych)
```

### Faza 0: Statystyki ogólne
- **Populacja Miasta:** 215,625 (GUS Grid)
- **Transakcje RCN:** 20,397

### Faza III: Top 20 POI (Miasto)

| Kategoria | Tier | Ilość w Mieście | Wartość Punktowa (W) |
|---|---|---|---|
| `national_rail_hub` | T0_MEGA_HUB | 1 | 33,019,673 |
| `hospital_clinical` | T1_NATIONAL_MAGNET | 10 | 20,260,335 |
| `national_stadium` | T1_NATIONAL_MAGNET | 5 | 16,859,791 |
| `university_campus` | T1_NATIONAL_MAGNET | 22 | 9,210,487 |
| `regional_rail_hub` | T1_NATIONAL_MAGNET | 5 | 6,356,406 |
| `industrial_zone` | T2_STRATEGIC_HUB | 146 | 4,418,853 |
| `shopping_mall` | T2_STRATEGIC_HUB | 19 | 3,534,380 |
| `commercial_zone` | T2_STRATEGIC_HUB | 48 | 3,458,938 |
| `supermarket` | T2_STRATEGIC_HUB | 84 | 2,304,165 |
| `government_central` | T2_STRATEGIC_HUB | 85 | 2,035,714 |
| `business_office` | T2_STRATEGIC_HUB | 67 | 1,745,321 |
| `education_high_school` | T3_LOCAL_CORE | 79 | 726,348 |
| `marketplace` | T3_LOCAL_CORE | 5 | 699,417 |
| `sports_centre` | T3_LOCAL_CORE | 40 | 568,920 |
| `culture_theatre` | T3_LOCAL_CORE | 26 | 451,743 |
| `social_support_mops` | T3_LOCAL_CORE | 15 | 425,689 |
| `health_clinic` | T3_LOCAL_CORE | 74 | 343,377 |
| `police_station` | T4_DAILY_SERVICE | 13 | 106,259 |
| `education_preschool` | T4_DAILY_SERVICE | 76 | 97,110 |
| `car_services` | T4_DAILY_SERVICE | 44 | 82,232 |

### Faza IV: Próbki Pełnego DNA 100% (Zobacz szczegóły POI!)

#### NAJLEPSZE PRZYSTANKI (TOP 5)
<details><summary><b>Janowicza (Wilczyńskiego) (891f542b0d7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Janowicza (Wilczyńskiego)
  stop_id               : 179
  h3_index              : 891f542b0d7ffff
  hub_id                : 216
  hub_name              : Janowicza (Wilczyńskiego)
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 99.0208
  local_percentile      : 100.0000
  stop_local_score_raw  : 0.5573
  local_score_raw       : 0.5692
  hub_grade             : A+
  hub_percentile        : 100.0000

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 4918129.1877
  infra_score           : 10864698.7138
  stop_raw_gravity      : 2488668.8887
  stop_entropy          : 0.9762
  hub_infra_score       : 10864698.7138

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6646.6917
  market_val            : 6651.4945
  stop_liquidity        : 656
  hub_market_val        : 6651.4945

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 1495.2448
  pop_val               : 3094.6968
  hub_pop_val           : 3094.6968

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 42x micro_playground
  > 20x gastronomy
  > 11x personal_services
  > 9x micro_atm
  > 8x convenience_store
  > 8x health_clinic
  > 7x pharmacy
  > 7x specialized_retail
  > 6x bank
  > 6x micro_parcel_locker
  > 6x commercial_zone
  > 4x supermarket
  > 4x education_preschool
  > 3x sports_centre
  > 3x shopping_mall
  > 2x post_office
  > 2x industrial_zone
  > 2x park_recreation
  > 1x education_high_school

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - bank                   : Millennium Bank
    - supermarket            : Społem
    - micro_atm              : Euronet
    - supermarket            : Lidl
    - bank                   : BS Szczytno
    - bank                   : Santander
    - bank                   : BNP Paribas Polska
    - gastronomy             : Na Rogu Czasu
    - gastronomy             : Twój Przepis
    - gastronomy             : Gruby Benek
    - gastronomy             : Roma
    - convenience_store      : Żabka
```
</details>
<details><summary><b>Szpital Dziecięcy (Dworcowa) (891f5439b57ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Szpital Dziecięcy (Dworcowa)
  stop_id               : 85
  h3_index              : 891f5439b57ffff
  hub_id                : 206
  hub_name              : Szpital Dziecięcy (Dworcowa)
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 97.5520
  local_percentile      : 99.7647
  stop_local_score_raw  : 0.5020
  local_score_raw       : 0.5677
  hub_grade             : A+
  hub_percentile        : 99.7647

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 3689437.8600
  infra_score           : 9556911.7992
  stop_raw_gravity      : 1883785.5453
  stop_entropy          : 0.9585
  hub_infra_score       : 9556911.7992

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6842.1053
  market_val            : 7645.1508
  stop_liquidity        : 571
  hub_market_val        : 7645.1508

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 867.7800
  pop_val               : 1768.4722
  hub_pop_val           : 1768.4722

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 10x convenience_store
  > 9x education_high_school
  > 9x micro_parcel_locker
  > 8x micro_playground
  > 6x gastronomy
  > 6x education_preschool
  > 5x pharmacy
  > 5x specialized_retail
  > 4x micro_atm
  > 4x personal_services
  > 2x supermarket
  > 2x sports_centre
  > 2x bank
  > 2x hospital_clinical
  > 1x post_office
  > 1x culture_theatre
  > 1x health_clinic
  > 1x shopping_mall
  > 1x park_recreation

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store      : Lewiatan
    - micro_atm              : Euronet
    - convenience_store      : Maciejka i Nela
    - supermarket            : Carrefour Market
    - gastronomy             : Cud Miód i Pizza Italiana
    - education_high_school  : Zespół Szkół Gastronomiczno-Spożywczych
    - pharmacy               : Dr. Max
    - education_high_school  : IV Liceum Ogólnokształcące im. Marii Skłodowskiej-Curie
    - education_high_school  : Liceum Ogólnokształcące Zaoczne nr 2
    - post_office            : Urząd Pocztowy Olsztyn 17
    - gastronomy             : Dwie Strony Świata
    - convenience_store      : Kubuś
```
</details>
<details><summary><b>Szpital Dziecięcy (Żołnierska) (891f5439b57ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Szpital Dziecięcy (Żołnierska)
  stop_id               : 104
  h3_index              : 891f5439b57ffff
  hub_id                : 49
  hub_name              : Szpital Dziecięcy (Żołnierska)
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 99.3880
  local_percentile      : 99.5294
  stop_local_score_raw  : 0.5624
  local_score_raw       : 0.5607
  hub_grade             : A+
  hub_percentile        : 99.5294

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 5342267.2098
  infra_score           : 10551414.8575
  stop_raw_gravity      : 3740185.7573
  stop_entropy          : 0.4283
  hub_infra_score       : 10551414.8575

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 7739.9381
  market_val            : 7684.2928
  stop_liquidity        : 782
  hub_market_val        : 7684.2928

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 735.4712
  pop_val               : 1487.4787
  hub_pop_val           : 1487.4787

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 11x convenience_store
  > 9x micro_parcel_locker
  > 7x micro_playground
  > 5x gastronomy
  > 5x education_preschool
  > 4x micro_atm
  > 4x pharmacy
  > 4x personal_services
  > 3x sports_centre
  > 3x specialized_retail
  > 3x government_central
  > 3x education_high_school
  > 2x supermarket
  > 2x bank
  > 2x hospital_clinical
  > 1x culture_theatre
  > 1x health_clinic
  > 1x shopping_mall
  > 1x park_recreation

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store      : Lewiatan
    - micro_atm              : Euronet
    - convenience_store      : Maciejka i Nela
    - supermarket            : Carrefour Market
    - gastronomy             : Cud Miód i Pizza Italiana
    - sports_centre          : Urania
    - pharmacy               : Dr. Max
    - gastronomy             : Dwie Strony Świata
    - convenience_store      : Kubuś
    - pharmacy               : Dbam o Zdrowie
    - pharmacy               : Pod Lipą
    - supermarket            : Biedronka
```
</details>
<details><summary><b>D.H. Śliwa (Wilczyńskiego) (891f542b08bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : D.H. Śliwa (Wilczyńskiego)
  stop_id               : 176
  h3_index              : 891f542b08bffff
  hub_id                : 378
  hub_name              : D.H. Śliwa (Wilczyńskiego)
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 99.2656
  local_percentile      : 99.2941
  stop_local_score_raw  : 0.5615
  local_score_raw       : 0.5549
  hub_grade             : A+
  hub_percentile        : 99.2941

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 4123763.7500
  infra_score           : 7277799.7434
  stop_raw_gravity      : 2464823.0162
  stop_entropy          : 0.6730
  hub_infra_score       : 7277799.7434

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6872.0881
  market_val            : 6846.4730
  stop_liquidity        : 506
  hub_market_val        : 6846.4730

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 1529.9774
  pop_val               : 3080.1402
  hub_pop_val           : 3080.1402

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 45x micro_playground
  > 13x gastronomy
  > 13x commercial_zone
  > 9x micro_parcel_locker
  > 7x convenience_store
  > 6x micro_atm
  > 6x pharmacy
  > 5x specialized_retail
  > 4x bank
  > 4x personal_services
  > 4x education_preschool
  > 3x supermarket
  > 3x park_recreation
  > 2x health_clinic
  > 2x sports_centre
  > 2x post_office
  > 2x shopping_mall
  > 2x education_high_school
  > 1x social_support_mops
  > 1x place_of_worship

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - bank                   : Millennium Bank
    - supermarket            : Społem
    - micro_atm              : Euronet
    - supermarket            : Lidl
    - bank                   : BS Szczytno
    - bank                   : BNP Paribas Polska
    - gastronomy             : Na Rogu Czasu
    - gastronomy             : Twój Przepis
    - gastronomy             : Roma
    - gastronomy             : La'grande
    - convenience_store      : Żabka
    - micro_atm              : Bank Pekao
```
</details>
<details><summary><b>Carrefour (Krasickiego) (891f542b42fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Carrefour (Krasickiego)
  stop_id               : 747
  h3_index              : 891f542b42fffff
  hub_id                : 213
  hub_name              : Carrefour (Krasickiego)
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 95.5324
  local_percentile      : 99.0588
  stop_local_score_raw  : 0.4594
  local_score_raw       : 0.5280
  hub_grade             : A+
  hub_percentile        : 99.0588

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 2271489.7909
  infra_score           : 6028037.6830
  stop_raw_gravity      : 1168002.0228
  stop_entropy          : 0.9448
  hub_infra_score       : 6028037.6830

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 7284.6289
  market_val            : 7244.6910
  stop_liquidity        : 1404
  hub_market_val        : 7244.6910

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 576.1123
  pop_val               : 2014.8334
  hub_pop_val           : 2014.8334

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 11x micro_playground
  > 6x gastronomy
  > 4x micro_atm
  > 4x education_preschool
  > 4x education_high_school
  > 3x specialized_retail
  > 3x micro_parcel_locker
  > 3x personal_services
  > 2x supermarket
  > 1x car_services
  > 1x police_station
  > 1x pharmacy
  > 1x convenience_store
  > 1x bank
  > 1x commercial_zone
  > 1x park_recreation

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : Planet Cash
    - micro_atm              : Euronet
    - micro_atm              : Euronet
    - micro_atm              : Euronet
    - car_services           : Carrefour
    - specialized_retail     : Pepco
    - supermarket            : Carrefour
    - education_high_school  : Szkoła Podstawowa nr 4 Specjalna Dla Dzieci z Autyzmem i Niepełnosprawnościami Sprzężonymi
    - education_preschool    : Przedszkole Specjalne nr 11dla Dzieci z Niepełnosprawnością Ruchową
    - education_preschool    : Przedszkole Publiczne z Oddziałami Integracyjnymi nr 25
    - education_high_school  : XV Liceum Ogólnokształcące Specjalne
    - police_station         : Posterunek Policji I w Olsztynie
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Bartąg-Kolonia (Bartąg-Kolonia) (891f542b6cbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Bartąg-Kolonia (Bartąg-Kolonia)
  stop_id               : 604
  h3_index              : 891f542b6cbffff
  hub_id                : 289
  hub_name              : Bartąg-Kolonia (Bartąg-Kolonia)
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.9792
  local_percentile      : 1.0588
  stop_local_score_raw  : -1.0959
  local_score_raw       : -1.1724
  hub_grade             : F
  hub_percentile        : 1.0588

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6854.1234
  market_val            : 6854.1234
  stop_liquidity        : 0
  hub_market_val        : 6854.1234

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 0.0000
  pop_val               : 0.0000
  hub_pop_val           : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Jezioro Skanda (Pstrowskiego) (891f542b503ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Jezioro Skanda (Pstrowskiego)
  stop_id               : 205
  h3_index              : 891f542b503ffff
  hub_id                : 363
  hub_name              : Jezioro Skanda (Pstrowskiego)
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.9792
  local_percentile      : 1.0588
  stop_local_score_raw  : -1.0959
  local_score_raw       : -1.1724
  hub_grade             : F
  hub_percentile        : 1.0588

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6854.1234
  market_val            : 6854.1234
  stop_liquidity        : 0
  hub_market_val        : 6854.1234

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 0.0000
  pop_val               : 0.0000
  hub_pop_val           : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Spręcowo-Świetlica (Spręcowo) (891f543a297ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Spręcowo-Świetlica (Spręcowo)
  stop_id               : 598
  h3_index              : 891f543a297ffff
  hub_id                : 130
  hub_name              : Spręcowo-Świetlica (Spręcowo)
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.7344
  local_percentile      : 0.7059
  stop_local_score_raw  : -1.2107
  local_score_raw       : -1.1813
  hub_grade             : F
  hub_percentile        : 0.7059

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 1560.9438
  infra_score           : 3199.7091
  stop_raw_gravity      : 780.6421
  stop_entropy          : 0.9996
  hub_infra_score       : 3199.7091

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 630.5833
  market_val            : 630.5833
  stop_liquidity        : 2
  hub_market_val        : 630.5833

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 71.6796
  pop_val               : 143.1696
  hub_pop_val           : 143.1696

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x micro_parcel_locker
  > 1x convenience_store
  > 1x car_services
  > 1x micro_playground

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_parcel_locker    : Appkomat InPost
    - convenience_store      : Sklep Spożywczo-Przemysłowy Dziadak Zbigniew
    - car_services           : Auto Serwis Archacki
```
</details>
<details><summary><b>Nowe Włóki wieś (Nowe Włóki) (891f5431223ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Nowe Włóki wieś (Nowe Włóki)
  stop_id               : 524
  h3_index              : 891f5431223ffff
  hub_id                : 128
  hub_name              : Nowe Włóki wieś (Nowe Włóki)
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.4284
  local_percentile      : 0.4706
  stop_local_score_raw  : -1.2183
  local_score_raw       : -1.1884
  hub_grade             : F
  hub_percentile        : 0.4706

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 240.6414
  infra_score           : 481.2827
  stop_raw_gravity      : 240.6414
  stop_entropy          : 0.0000
  hub_infra_score       : 481.2827

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 852.8785
  market_val            : 852.8785
  stop_liquidity        : 1
  hub_market_val        : 852.8785

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 65.0000
  pop_val               : 130.0000
  hub_pop_val           : 130.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x place_of_worship

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - place_of_worship       : Kaplica pw. Matki Bożej Szkaplerznej
```
</details>
<details><summary><b>Sętal Kolonia (Sętal) (891f543a0abffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Sętal Kolonia (Sętal)
  stop_id               : 531
  h3_index              : 891f543a0abffff
  hub_id                : 125
  hub_name              : Sętal Kolonia (Sętal)
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.2448
  local_percentile      : 0.2353
  stop_local_score_raw  : -1.6606
  local_score_raw       : -1.6713
  hub_grade             : F
  hub_percentile        : 0.2353

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 1009.4950
  market_val            : 1009.4950
  stop_liquidity        : 2
  hub_market_val        : 1009.4950

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 11.2509
  pop_val               : 21.8133
  hub_pop_val           : 21.8133

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>

---

## OPOLE
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ⚠️ Z-Score ODD DIST (Mean: 0.000, Std: 0.432)
     Rozkład Kartek (unikalne Huby): A: 34, A+: 18, B: 52, C: 69, D: 86, F: 85
[👥 BAZA LUDNOŚCI GUS] ❌ OSTRZEŻENIE DEMOGRAFICZNE: Odchylenie 25.6%. GUS: 150,715 vs Baza: 120,000
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
[✅]  H3 Res 8 Grid 100% Valid (318 komórek, 146 pustyń transportowych)
```

### Faza 0: Statystyki ogólne
- **Populacja Miasta:** 150,715 (GUS Grid)
- **Transakcje RCN:** 5,560

### Faza III: Top 20 POI (Miasto)

| Kategoria | Tier | Ilość w Mieście | Wartość Punktowa (W) |
|---|---|---|---|
| `national_rail_hub` | T0_MEGA_HUB | 4 | 30,818,416 |
| `hospital_clinical` | T1_NATIONAL_MAGNET | 7 | 19,420,353 |
| `university_campus` | T1_NATIONAL_MAGNET | 10 | 16,176,942 |
| `national_stadium` | T1_NATIONAL_MAGNET | 3 | 16,038,043 |
| `regional_rail_hub` | T1_NATIONAL_MAGNET | 3 | 6,206,615 |
| `commercial_zone` | T2_STRATEGIC_HUB | 29 | 4,093,988 |
| `industrial_zone` | T2_STRATEGIC_HUB | 316 | 4,053,162 |
| `shopping_mall` | T2_STRATEGIC_HUB | 12 | 3,762,066 |
| `supermarket` | T2_STRATEGIC_HUB | 70 | 2,259,260 |
| `government_central` | T2_STRATEGIC_HUB | 64 | 2,072,383 |
| `business_office` | T2_STRATEGIC_HUB | 24 | 1,904,290 |
| `marketplace` | T3_LOCAL_CORE | 2 | 684,828 |
| `education_high_school` | T3_LOCAL_CORE | 60 | 637,059 |
| `sports_centre` | T3_LOCAL_CORE | 32 | 610,988 |
| `social_support_mops` | T3_LOCAL_CORE | 9 | 426,692 |
| `health_clinic` | T3_LOCAL_CORE | 41 | 383,635 |
| `culture_theatre` | T3_LOCAL_CORE | 14 | 382,675 |
| `education_preschool` | T4_DAILY_SERVICE | 41 | 107,955 |
| `police_station` | T4_DAILY_SERVICE | 9 | 91,856 |
| `local_airfield` | T5_SPEC_GASTRO | 1 | 79,547 |

### Faza IV: Próbki Pełnego DNA 100% (Zobacz szczegóły POI!)

#### NAJLEPSZE PRZYSTANKI (TOP 5)
<details><summary><b>Ozimska - Dubois (259) (891e23c45d3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Ozimska - Dubois (259)
  stop_id               : 259
  h3_index              : 891e23c45d3ffff
  hub_id                : 212
  hub_name              : Ozimska - Dubois (259)
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 100.0000
  local_percentile      : 100.0000
  stop_local_score_raw  : 0.6854
  local_score_raw       : 0.6413
  hub_grade             : A+
  hub_percentile        : 100.0000

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 16198419.0943
  infra_score           : 21787871.6086
  stop_raw_gravity      : 7829171.4646
  stop_entropy          : 1.0690
  hub_infra_score       : 21787871.6086

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 9262.9089
  market_val            : 9262.9089
  stop_liquidity        : 451
  hub_market_val        : 9262.9089

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 649.8319
  pop_val               : 876.5959
  hub_pop_val           : 876.5959

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 17x gastronomy
  > 9x government_central
  > 9x education_high_school
  > 8x convenience_store
  > 6x specialized_retail
  > 6x pharmacy
  > 6x health_clinic
  > 4x personal_services
  > 4x university_campus
  > 3x culture_theatre
  > 3x hospital_clinical
  > 3x park_recreation
  > 2x supermarket
  > 2x micro_atm
  > 2x sports_centre
  > 2x place_of_worship
  > 2x micro_playground
  > 1x bank
  > 1x shopping_mall
  > 1x education_preschool

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy             : Karczma pod Czeremchą
    - specialized_retail     : Tifanni
    - specialized_retail     : Mona
    - personal_services      : DermoLam
    - gastronomy             : Classic Coffee
    - gastronomy             : Sandwich Express
    - gastronomy             : Tutaj
    - gastronomy             : Pierogarnia Staropolska
    - pharmacy               : Multifarm Ozimska
    - government_central     : Urząd Statystyczny w Opolu - Informatorium
    - health_clinic          : \
    - government_central     : Wojewódzka stacja sanitarno-epidemiologiczna w Opolu
```
</details>
<details><summary><b>Ozimska - Dubois (260) (891e23c45d3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Ozimska - Dubois (260)
  stop_id               : 260
  h3_index              : 891e23c45d3ffff
  hub_id                : 131
  hub_name              : Ozimska - Dubois (260)
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 99.8158
  local_percentile      : 99.7093
  stop_local_score_raw  : 0.6833
  local_score_raw       : 0.6131
  hub_grade             : A+
  hub_percentile        : 99.7093

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 14230621.2744
  infra_score           : 16905736.1699
  stop_raw_gravity      : 5051524.2525
  stop_entropy          : 1.8171
  hub_infra_score       : 16905736.1699

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 9226.2749
  market_val            : 9226.2749
  stop_liquidity        : 454
  hub_market_val        : 9226.2749

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 748.6459
  pop_val               : 900.9938
  hub_pop_val           : 900.9938

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 44x specialized_retail
  > 43x gastronomy
  > 12x government_central
  > 10x convenience_store
  > 10x pharmacy
  > 10x education_high_school
  > 8x personal_services
  > 5x health_clinic
  > 4x bank
  > 4x supermarket
  > 4x culture_theatre
  > 4x micro_playground
  > 3x shopping_mall
  > 3x university_campus
  > 3x place_of_worship
  > 2x micro_atm
  > 2x hospital_clinical
  > 2x park_recreation
  > 1x business_office
  > 1x sports_centre
  > 1x education_preschool

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - shopping_mall          : Solaris Center
    - micro_atm              : Bankomat BZ WBK
    - government_central     : Prokuratura Okręgowa w Opolu
    - gastronomy             : Book A Coffee
    - gastronomy             : Karczma pod Czeremchą
    - specialized_retail     : Tifanni
    - convenience_store      : Żabka
    - convenience_store      : Żabka
    - convenience_store      : Delikatesy Kołłątaja
    - gastronomy             : Dolce Vita
    - specialized_retail     : Mona
    - personal_services      : DermoLam
```
</details>
<details><summary><b>1 Maja - Dworzec Główny (1) (891e23c4437ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : 1 Maja - Dworzec Główny (1)
  stop_id               : 1
  h3_index              : 891e23c4437ffff
  hub_id                : 138
  hub_name              : 1 Maja - Dworzec Główny (1)
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 99.0792
  local_percentile      : 99.4186
  stop_local_score_raw  : 0.6124
  local_score_raw       : 0.6111
  hub_grade             : A+
  hub_percentile        : 99.4186

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 13535542.4605
  infra_score           : 22676484.4124
  stop_raw_gravity      : 4307441.0000
  stop_entropy          : 2.1424
  hub_infra_score       : 22676484.4124

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 9600.9414
  market_val            : 9538.7244
  stop_liquidity        : 312
  hub_market_val        : 9538.7244

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 352.4260
  pop_val               : 556.7105
  hub_pop_val           : 556.7105

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 21x gastronomy
  > 13x convenience_store
  > 11x government_central
  > 9x bank
  > 9x pharmacy
  > 7x park_recreation
  > 6x micro_atm
  > 6x industrial_zone
  > 5x health_clinic
  > 4x specialized_retail
  > 4x education_high_school
  > 4x police_station
  > 3x personal_services
  > 3x hospital_clinical
  > 2x supermarket
  > 2x culture_theatre
  > 2x shopping_mall
  > 2x micro_playground
  > 1x national_rail_hub
  > 1x business_office
  > 1x post_office
  > 1x sports_centre
  > 1x university_campus
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - bank                   : Millennium Przedsiębiorstwa
    - micro_atm              : Bankomat BZ WBK
    - micro_atm              : Bankomat Millennium
    - micro_atm              : Bankomat BZ WBK
    - bank                   : Millennium Bank
    - personal_services      : Astor
    - government_central     : Prokuratura Okręgowa w Opolu
    - specialized_retail     : Tifanni
    - convenience_store      : Żabka
    - convenience_store      : Żabka
    - convenience_store      : Żabka
    - convenience_store      : Delikatesy Kołłątaja
```
</details>
<details><summary><b>Kołłątaja - Dworzec Główny (149) (891e23c4437ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Kołłątaja - Dworzec Główny (149)
  stop_id               : 149
  h3_index              : 891e23c4437ffff
  hub_id                : 307
  hub_name              : Kołłątaja - Dworzec Główny (149)
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 99.4475
  local_percentile      : 99.1279
  stop_local_score_raw  : 0.6194
  local_score_raw       : 0.5980
  hub_grade             : A+
  hub_percentile        : 99.1279

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 13969667.3931
  infra_score           : 20935971.6557
  stop_raw_gravity      : 4664052.8702
  stop_entropy          : 1.9952
  hub_infra_score       : 20935971.6557

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 9309.8335
  market_val            : 9309.8335
  stop_liquidity        : 340
  hub_market_val        : 9309.8335

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 410.1293
  pop_val               : 594.3157
  hub_pop_val           : 594.3157

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 37x gastronomy
  > 15x government_central
  > 14x convenience_store
  > 12x bank
  > 9x pharmacy
  > 8x micro_atm
  > 8x park_recreation
  > 6x health_clinic
  > 5x specialized_retail
  > 5x industrial_zone
  > 4x personal_services
  > 4x education_high_school
  > 4x police_station
  > 3x culture_theatre
  > 3x hospital_clinical
  > 3x micro_playground
  > 2x supermarket
  > 2x shopping_mall
  > 1x national_rail_hub
  > 1x business_office
  > 1x post_office
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - bank                   : Millennium Przedsiębiorstwa
    - micro_atm              : Bankomat BZ WBK
    - micro_atm              : Bankomat Millennium
    - micro_atm              : Bankomat BZ WBK
    - bank                   : Millennium Bank
    - personal_services      : Astor
    - government_central     : Prokuratura Okręgowa w Opolu
    - gastronomy             : Grabówka
    - gastronomy             : Pizza Hut
    - specialized_retail     : Tifanni
    - convenience_store      : Żabka
    - convenience_store      : Żabka
```
</details>
<details><summary><b>Reymonta (327) (891e23c45dbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Reymonta (327)
  stop_id               : 327
  h3_index              : 891e23c45dbffff
  hub_id                : 221
  hub_name              : Reymonta (327)
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 98.8950
  local_percentile      : 98.8372
  stop_local_score_raw  : 0.6016
  local_score_raw       : 0.5812
  hub_grade             : A+
  hub_percentile        : 98.8372

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 9077416.9362
  infra_score           : 13257481.2793
  stop_raw_gravity      : 2775832.9027
  stop_entropy          : 2.2702
  hub_infra_score       : 13257481.2793

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 9545.0207
  market_val            : 9545.0207
  stop_liquidity        : 419
  hub_market_val        : 9545.0207

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 510.0936
  pop_val               : 753.9317
  hub_pop_val           : 753.9317

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 24x gastronomy
  > 15x government_central
  > 13x convenience_store
  > 11x pharmacy
  > 9x bank
  > 7x education_high_school
  > 7x park_recreation
  > 6x micro_atm
  > 6x specialized_retail
  > 6x health_clinic
  > 4x personal_services
  > 4x police_station
  > 3x supermarket
  > 3x shopping_mall
  > 3x hospital_clinical
  > 3x micro_playground
  > 2x culture_theatre
  > 2x industrial_zone
  > 1x national_rail_hub
  > 1x business_office
  > 1x university_campus
  > 1x post_office
  > 1x sports_centre
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - bank                   : Millennium Przedsiębiorstwa
    - micro_atm              : Bankomat BZ WBK
    - micro_atm              : Bankomat Millennium
    - micro_atm              : Bankomat BZ WBK
    - bank                   : Millennium Bank
    - personal_services      : Astor
    - government_central     : Prokuratura Okręgowa w Opolu
    - specialized_retail     : Tifanni
    - convenience_store      : Żabka
    - convenience_store      : Żabka
    - convenience_store      : Żabka
    - convenience_store      : Delikatesy Kołłątaja
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Malina - Pętla (187) (891e23c484bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Malina - Pętla (187)
  stop_id               : 187
  h3_index              : 891e23c484bffff
  hub_id                : 199
  hub_name              : Malina - Pętla (187)
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 2.0258
  local_percentile      : 1.4535
  stop_local_score_raw  : -1.5646
  local_score_raw       : -1.5432
  hub_grade             : F
  hub_percentile        : 1.4535

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 4.2017
  infra_score           : 4.7135
  stop_raw_gravity      : 4.2017
  stop_entropy          : 0.0000
  hub_infra_score       : 4.7135

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 7639.1123
  market_val            : 7639.1123
  stop_liquidity        : 7
  hub_market_val        : 7639.1123

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 25.2096
  pop_val               : 31.4045
  hub_pop_val           : 31.4045

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x place_of_worship

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - place_of_worship       : Kościół parafialny pw. św. Jadwigi Śląskiej
```
</details>
<details><summary><b>Prószków - Grunwaldzka - Rudnicka (917) (891e23c53c3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Prószków - Grunwaldzka - Rudnicka (917)
  stop_id               : 917
  h3_index              : 891e23c53c3ffff
  hub_id                : 97
  hub_name              : Prószków - Grunwaldzka - Rudnicka (914)
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.7366
  local_percentile      : 1.1628
  stop_local_score_raw  : -1.6283
  local_score_raw       : -1.5634
  hub_grade             : F
  hub_percentile        : 1.1628

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 7734.0793
  market_val            : 7734.0793
  stop_liquidity        : 0
  hub_market_val        : 7734.0793

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 86.0881
  pop_val               : 171.0000
  hub_pop_val           : 171.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Krapkowicka - Szkolna (514) (891e23c4287ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Krapkowicka - Szkolna (514)
  stop_id               : 514
  h3_index              : 891e23c4287ffff
  hub_id                : 327
  hub_name              : Krapkowicka - Szkolna (514)
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 1.8416
  local_percentile      : 0.8721
  stop_local_score_raw  : -1.5747
  local_score_raw       : -1.5833
  hub_grade             : F
  hub_percentile        : 0.8721

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 7734.0793
  market_val            : 7734.0793
  stop_liquidity        : 0
  hub_market_val        : 7734.0793

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 141.3272
  pop_val               : 141.3272
  hub_pop_val           : 141.3272

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Czarnowąsy - Pętla (60) (891e23d4b8fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Czarnowąsy - Pętla (60)
  stop_id               : 60
  h3_index              : 891e23d4b8fffff
  hub_id                : 343
  hub_name              : Czarnowąsy - Pętla (60)
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.3683
  local_percentile      : 0.5814
  stop_local_score_raw  : -1.6643
  local_score_raw       : -1.6482
  hub_grade             : F
  hub_percentile        : 0.5814

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 7734.0793
  market_val            : 7734.0793
  stop_liquidity        : 0
  hub_market_val        : 7734.0793

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 61.6566
  pop_val               : 75.8906
  hub_pop_val           : 75.8906

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Świerkle - Pętla (71) (891e23d4937ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Świerkle - Pętla (71)
  stop_id               : 71
  h3_index              : 891e23d4937ffff
  hub_id                : 211
  hub_name              : Świerkle - Pętla (71)
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.1842
  local_percentile      : 0.2907
  stop_local_score_raw  : -1.7069
  local_score_raw       : -1.7108
  hub_grade             : F
  hub_percentile        : 0.2907

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 7734.0793
  market_val            : 7734.0793
  stop_liquidity        : 0
  hub_market_val        : 7734.0793

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 41.4428
  pop_val               : 41.4428
  hub_pop_val           : 41.4428

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>

---

## POZNAN
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: 0.000, Std: 0.536)
     Rozkład Kartek (unikalne Huby): A: 278, A+: 139, B: 416, C: 556, D: 694, F: 693
[👥 BAZA LUDNOŚCI GUS] ❌ OSTRZEŻENIE DEMOGRAFICZNE: Odchylenie 151.2%. GUS: 1,331,460 vs Baza: 530,000
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
[✅]  H3 Res 8 Grid 100% Valid (4,953 komórek, 1191 pustyń transportowych)
```

### Faza 0: Statystyki ogólne
- **Populacja Miasta:** 1,331,460 (GUS Grid)
- **Transakcje RCN:** 105,538

### Faza III: Top 20 POI (Miasto)

| Kategoria | Tier | Ilość w Mieście | Wartość Punktowa (W) |
|---|---|---|---|
| `international_airport` | T0_MEGA_HUB | 1 | 217,774,950 |
| `national_rail_hub` | T0_MEGA_HUB | 3 | 39,003,636 |
| `exhibition_centre` | T1_NATIONAL_MAGNET | 1 | 34,786,739 |
| `national_stadium` | T1_NATIONAL_MAGNET | 19 | 25,334,608 |
| `hospital_clinical` | T1_NATIONAL_MAGNET | 37 | 21,695,990 |
| `university_campus` | T1_NATIONAL_MAGNET | 95 | 14,806,720 |
| `regional_rail_hub` | T1_NATIONAL_MAGNET | 43 | 7,330,398 |
| `industrial_zone` | T2_STRATEGIC_HUB | 2005 | 4,853,567 |
| `logistics_hub` | T2_STRATEGIC_HUB | 6 | 4,668,491 |
| `shopping_mall` | T2_STRATEGIC_HUB | 81 | 4,498,670 |
| `commercial_zone` | T2_STRATEGIC_HUB | 1206 | 4,262,895 |
| `student_dormitory` | T2_STRATEGIC_HUB | 1 | 3,258,172 |
| `supermarket` | T2_STRATEGIC_HUB | 597 | 2,907,625 |
| `government_central` | T2_STRATEGIC_HUB | 300 | 2,287,872 |
| `business_office` | T2_STRATEGIC_HUB | 934 | 1,847,181 |
| `education_high_school` | T3_LOCAL_CORE | 556 | 805,339 |
| `marketplace` | T3_LOCAL_CORE | 48 | 740,390 |
| `sports_centre` | T3_LOCAL_CORE | 349 | 655,468 |
| `social_support_mops` | T3_LOCAL_CORE | 97 | 577,290 |
| `culture_theatre` | T3_LOCAL_CORE | 186 | 430,526 |

### Faza IV: Próbki Pełnego DNA 100% (Zobacz szczegóły POI!)

#### NAJLEPSZE PRZYSTANKI (TOP 5)
<details><summary><b>Kórnik - Pl. Niepodległości (891e2432a9bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Kórnik - Pl. Niepodległości
  stop_id               : KDNIE01a
  h3_index              : 891e2432a9bffff
  hub_id                : 100
  hub_name              : Kórnik - Pl. Niepodległości
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 98.2632
  local_percentile      : 100.0000
  stop_local_score_raw  : 1.3458
  local_score_raw       : 2.4659
  hub_grade             : A+
  hub_percentile        : 100.0000

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 396517.8591
  infra_score           : 2928420.3533
  stop_raw_gravity      : 159814.5926
  stop_entropy          : 1.4811
  hub_infra_score       : 2928420.3533

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 3.1429
  transit_freq          : 11.5000
  stop_routes_count     : 7
  stop_routes           : 582, 590, 592, 593, 596, 598, 599
  stop_hub_share        : 0.2733
  hub_departures_h      : 11.5000
  hub_routes            : 156, 172, 211, 212, 250, 329, 330, 580, 582, 590, 591, 592, 593, 595, 596, 598, 599

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6929.1201
  market_val            : 6929.1201
  stop_liquidity        : 6
  hub_market_val        : 6929.1201

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 102.4925
  pop_val               : 569.9231
  hub_pop_val           : 569.9231

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 8x gastronomy
  > 3x micro_atm
  > 3x pharmacy
  > 3x bank
  > 2x place_of_worship
  > 1x post_office
  > 1x convenience_store
  > 1x government_central
  > 1x health_clinic
  > 1x micro_playground
  > 1x sports_centre
  > 1x park_recreation
  > 1x marketplace

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy             : Biała Dama
    - gastronomy             : Bar Podzamcze
    - post_office            : Poczta Kórnik
    - pharmacy               : Zamkowa
    - gastronomy             : Restauracja Kornicka
    - pharmacy               : W Rynku
    - bank                   : PKO BP
    - convenience_store      : Żabka
    - bank                   : Bank Spółdzielczy w Kórniku
    - place_of_worship       : Kaplica domowa
    - gastronomy             : Kulka
    - gastronomy             : Pastelowa
```
</details>
<details><summary><b>Śrem, Dworzec Autobusowy Peron 2 (891e24388afffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Śrem, Dworzec Autobusowy Peron 2
  stop_id               : 547-2
  h3_index              : 891e24388afffff
  hub_id                : 171
  hub_name              : Śrem, Dworzec Autobusowy Peron 9
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : B
  grade                 : A+
  stop_percentile       : 73.8944
  local_percentile      : 99.9640
  stop_local_score_raw  : 0.3416
  local_score_raw       : 2.4169
  hub_grade             : A+
  hub_percentile        : 99.9640

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 644518.5965
  infra_score           : 3932929.2194
  stop_raw_gravity      : 294809.1007
  stop_entropy          : 1.1862
  hub_infra_score       : 3932929.2194

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.5714
  transit_freq          : 10.0714
  stop_routes_count     : 4
  stop_routes           : 156, 158, 218, 230
  stop_hub_share        : 0.0567
  hub_departures_h      : 10.0714
  hub_routes            : 115, 156, 158, 172, 207, 211, 212, 213, 218, 230, 233, 237, 239, 240, 241, 242, 245, 250, 251, 312, 314, 315, 316, 317, 329, 330, 919

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 5735.0945
  market_val            : 5735.0945
  stop_liquidity        : 126
  hub_market_val        : 5735.0945

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 232.7124
  pop_val               : 1655.6644
  hub_pop_val           : 1655.6644

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 3x gastronomy
  > 2x personal_services
  > 2x government_central
  > 1x micro_atm
  > 1x specialized_retail
  > 1x business_office
  > 1x post_office
  > 1x convenience_store
  > 1x pharmacy
  > 1x place_of_worship
  > 1x car_services
  > 1x police_station
  > 1x supermarket
  > 1x shopping_mall
  > 1x education_high_school
  > 1x micro_playground

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy             : Abisynka
    - micro_atm              : PKO BP
    - specialized_retail     : Media Expert
    - business_office        : MARGO
    - post_office            : Poczta Polska
    - convenience_store      : Społem
    - pharmacy               : Dbam o Zdrowie
    - personal_services      : Rossmann
    - personal_services      : Hebe
    - gastronomy             : Bistro na Talerzu
    - place_of_worship       : Kościół pw. Świętego Ignacego Loyoli
    - car_services           : BP
```
</details>
<details><summary><b>Poznań Główny - Dworzec Autobusowy Peron 5 (891e24aa563ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Poznań Główny - Dworzec Autobusowy Peron 5
  stop_id               : 399-5
  h3_index              : 891e24aa563ffff
  hub_id                : 342
  hub_name              : Poznań Główny - Dworzec Autobusowy Peron 18
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : A+
  stop_percentile       : 5.7833
  local_percentile      : 99.9280
  stop_local_score_raw  : -1.1925
  local_score_raw       : 2.4089
  hub_grade             : A+
  hub_percentile        : 99.9280

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 1880218.1948
  infra_score           : 12458341.0239
  stop_raw_gravity      : 636837.6773
  stop_entropy          : 1.9524
  hub_infra_score       : 12458341.0239

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 12.4286
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 12.4286
  hub_routes            : 10, 12, 19, 22, 33, 36, 44, 51, 52, 54, 55, 57, 60, 76, 93, 97, 102, 115, 156, 158, 169, 172, 207, 211, 212, 218, 250, 251, 292, 293, 294, 297, 312, 321, 325, 326, 327, 328, 330, 331, 333, 349

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 366.2374
  market_val            : 7462.6866
  stop_liquidity        : 463
  hub_market_val        : 7462.6866

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 9.9379
  pop_val               : 47.6703
  hub_pop_val           : 47.6703

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 193x park_recreation
  > 43x specialized_retail
  > 26x business_office
  > 25x gastronomy
  > 12x micro_atm
  > 7x convenience_store
  > 7x micro_playground
  > 5x micro_parcel_locker
  > 3x bank
  > 2x post_office
  > 2x personal_services
  > 2x supermarket
  > 2x pharmacy
  > 2x government_central
  > 2x university_campus
  > 1x national_rail_hub
  > 1x social_support_mops
  > 1x education_preschool
  > 1x health_clinic
  > 1x commercial_zone
  > 1x exhibition_centre
  > 1x shopping_mall

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - national_rail_hub      : Poznań Główny
    - gastronomy             : MTPbistro
    - gastronomy             : MTPcafe
    - micro_atm              : Bankomat Cash4You
    - convenience_store      : Żabka
    - post_office            : Poczta Polska
    - micro_atm              : Santander
    - micro_parcel_locker    : Paczkomat InPost
    - convenience_store      : Żabka
    - gastronomy             : Costa Caffee
    - personal_services      : Rossmann
    - gastronomy             : Starbucks
```
</details>
<details><summary><b>Kórnik/Reja (891e2432e77ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Kórnik/Reja
  stop_id               : 2604
  h3_index              : 891e2432e77ffff
  hub_id                : 243
  hub_name              : Kórnik - Reja
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : D
  grade                 : A+
  stop_percentile       : 42.0949
  local_percentile      : 99.8919
  stop_local_score_raw  : -0.0802
  local_score_raw       : 2.3893
  hub_grade             : A+
  hub_percentile        : 99.8919

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 2020952.6303
  infra_score           : 11633174.5194
  stop_raw_gravity      : 1081464.1062
  stop_entropy          : 0.8687
  hub_infra_score       : 11633174.5194

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 9.5714
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 9.5714
  hub_routes            : 156, 172, 211, 212, 250, 330, 590, 591, 592, 593, 596, 598, 599

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6544.3225
  market_val            : 6551.0516
  stop_liquidity        : 75
  hub_market_val        : 6551.0516

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 137.0012
  pop_val               : 627.3150
  hub_pop_val           : 627.3150

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 6x gastronomy
  > 4x micro_parcel_locker
  > 3x supermarket
  > 3x commercial_zone
  > 2x police_station
  > 2x industrial_zone
  > 1x car_services
  > 1x personal_services
  > 1x specialized_retail
  > 1x pharmacy
  > 1x culture_theatre
  > 1x place_of_worship
  > 1x health_clinic

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - car_services           : Auto Rachuba
    - police_station         : Komisariat Policji w Kórniku
    - gastronomy             : Restauracja Kornicka
    - personal_services      : Rossmann
    - specialized_retail     : Pepco
    - micro_parcel_locker    : Paczkomat InPost
    - pharmacy               : Topfarm
    - micro_parcel_locker    : Paczkomat InPost
    - police_station         : Straż Miejska
    - micro_parcel_locker    : Orlen Paczka
    - culture_theatre        : Biblioteka publiczna w Kórniku
    - micro_parcel_locker    : Allegro Onebox
```
</details>
<details><summary><b>Śrem, ul. Grunwaldzka (891e243883bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Śrem, ul. Grunwaldzka
  stop_id               : 548
  h3_index              : 891e243883bffff
  hub_id                : 762
  hub_name              : Śrem, ul. Grunwaldzka
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 99.7762
  local_percentile      : 99.8559
  stop_local_score_raw  : 1.9672
  local_score_raw       : 2.1993
  hub_grade             : A+
  hub_percentile        : 99.8559

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 4690215.8507
  infra_score           : 8338847.3718
  stop_raw_gravity      : 2459381.2790
  stop_entropy          : 0.9071
  hub_infra_score       : 8338847.3718

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 3.3571
  transit_freq          : 6.7857
  stop_routes_count     : 13
  stop_routes           : 115, 156, 158, 172, 211, 212, 218, 233, 237, 245, 251, 312, 330
  stop_hub_share        : 0.4947
  hub_departures_h      : 6.7857
  hub_routes            : 115, 156, 158, 172, 207, 211, 212, 218, 233, 237, 245, 250, 251, 312, 317, 330

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 7085.9980
  market_val            : 5164.8352
  stop_liquidity        : 1319
  hub_market_val        : 5164.8352

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 3106.7608
  pop_val               : 4321.6905
  hub_pop_val           : 4321.6905

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 7x pharmacy
  > 5x specialized_retail
  > 5x micro_playground
  > 4x micro_atm
  > 4x shopping_mall
  > 3x supermarket
  > 2x convenience_store
  > 2x personal_services
  > 1x gastronomy
  > 1x bank
  > 1x post_office
  > 1x health_clinic
  > 1x park_recreation
  > 1x car_services
  > 1x culture_theatre
  > 1x education_high_school
  > 1x education_preschool
  > 1x place_of_worship
  > 1x micro_parcel_locker
  > 1x marketplace

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : SGB
    - micro_atm              : Bankomat BZ WBK
    - gastronomy             : Abisynka
    - specialized_retail     : Visual Projekt Monika Laska
    - bank                   : Alior Bank Placówka Partnerska
    - micro_atm              : PKO BP
    - micro_atm              : Euronet 24h
    - post_office            : Poczta Polska
    - convenience_store      : Społem
    - pharmacy               : Profilaktyka
    - pharmacy               : Przyjazna
    - pharmacy               : Centrum Zdrowia
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Babin (891e243603bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Babin
  stop_id               : 3:198:00
  h3_index              : 891e243603bffff
  hub_id                : 1867
  hub_name              : Babin
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.5013
  local_percentile      : 0.1801
  stop_local_score_raw  : -1.7110
  local_score_raw       : -1.4349
  hub_grade             : F
  hub_percentile        : 0.1801

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 390.7943
  infra_score           : 810.1492
  stop_raw_gravity      : 390.7943
  stop_entropy          : -0.0000
  hub_infra_score       : 810.1492

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.4286
  transit_freq          : 0.5000
  stop_routes_count     : 1
  stop_routes           : 11
  stop_hub_share        : 0.8571
  hub_departures_h      : 0.5000
  hub_routes            : 11

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 82.6830
  market_val            : 82.6830
  stop_liquidity        : 1
  hub_market_val        : 82.6830

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 93.6289
  pop_val               : 192.0000
  hub_pop_val           : 192.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 2x park_recreation

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - park_recreation        : Park dworski
```
</details>
<details><summary><b>Jeziory Wielkie/Wieś (891e2430a67ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Jeziory Wielkie/Wieś
  stop_id               : 2628
  h3_index              : 891e2430a67ffff
  hub_id                : 2299
  hub_name              : Jeziory Wielkie - Wieś
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.0179
  local_percentile      : 0.1441
  stop_local_score_raw  : -2.6414
  local_score_raw       : -1.7575
  hub_grade             : F
  hub_percentile        : 0.1441

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.6429
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.6429
  hub_routes            : 580

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 84.9593
  market_val            : 84.9593
  stop_liquidity        : 1
  hub_market_val        : 84.9593

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 59.5500
  pop_val               : 193.1998
  hub_pop_val           : 193.1998

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Garby (891e2435a0bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Garby
  stop_id               : 3:343:01
  h3_index              : 891e2435a0bffff
  hub_id                : 1731
  hub_name              : Garby
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.0895
  local_percentile      : 0.1081
  stop_local_score_raw  : -2.1704
  local_score_raw       : -1.8770
  hub_grade             : F
  hub_percentile        : 0.1081

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.1429
  transit_freq          : 0.1429
  stop_routes_count     : 1
  stop_routes           : 26
  stop_hub_share        : 1.0000
  hub_departures_h      : 0.1429
  hub_routes            : 26

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 200.0064
  market_val            : 200.0064
  stop_liquidity        : 2
  hub_market_val        : 200.0064

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 123.0000
  pop_val               : 123.0000
  hub_pop_val           : 123.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Luboń/Rzeczna (891e24a846fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Luboń/Rzeczna
  stop_id               : 3071
  h3_index              : 891e24a846fffff
  hub_id                : 886
  hub_name              : Luboń/Rzeczna
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.0716
  local_percentile      : 0.0720
  stop_local_score_raw  : -2.2035
  local_score_raw       : -2.0630
  hub_grade             : F
  hub_percentile        : 0.0720

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 1107023.8872
  infra_score           : 2422156.1936
  stop_raw_gravity      : 536515.7302
  stop_entropy          : 1.0634
  hub_infra_score       : 2422156.1936

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 4.0723
  market_val            : 4.0723
  stop_liquidity        : 74
  hub_market_val        : 4.0723

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 170.7430
  pop_val               : 540.6158
  hub_pop_val           : 540.6158

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 4x education_high_school
  > 3x convenience_store
  > 3x car_services
  > 2x personal_services
  > 2x business_office
  > 1x post_office
  > 1x micro_playground
  > 1x park_recreation
  > 1x industrial_zone
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - personal_services      : 3 stopnie
    - convenience_store      : Żabka
    - post_office            : Agencja Pocztowa
    - convenience_store      : Mateo Stadion
    - convenience_store      : Żabka
    - business_office        : MG Robba
    - car_services           : Bear-Lock Centrum Zapezpieczeń
    - business_office        : G.W.T.
    - car_services           : STM Auto Naprawa
    - education_high_school  : Szkoła Podstawowa nr 3
    - education_high_school  : Dwujęzyczne Liceum Ogólnokształcące w Luboniu
    - education_high_school  : Zespół Szkół imienia Kryptologów Poznańskich w Luboniu
```
</details>
<details><summary><b>Strzeszyńska (891e24b891bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Strzeszyńska
  stop_id               : 513
  h3_index              : 891e24b891bffff
  hub_id                : 731
  hub_name              : Strzeszyńska
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : B
  grade                 : F
  stop_percentile       : 72.0501
  local_percentile      : 0.0360
  stop_local_score_raw  : 0.3051
  local_score_raw       : -2.2292
  hub_grade             : F
  hub_percentile        : 0.0360

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 7579961.8972
  infra_score           : 8219035.0370
  stop_raw_gravity      : 3121154.7945
  stop_entropy          : 1.4286
  hub_infra_score       : 8219035.0370

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.3571
  transit_freq          : 0.0000
  stop_routes_count     : 2
  stop_routes           : 307, 347
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6400.0166
  market_val            : 3.4999
  stop_liquidity        : 197
  hub_market_val        : 3.4999

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 79.1241
  pop_val               : 61.8816
  hub_pop_val           : 61.8816

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 14x business_office
  > 8x micro_parcel_locker
  > 6x industrial_zone
  > 4x car_services
  > 4x park_recreation
  > 3x commercial_zone
  > 2x micro_atm
  > 2x supermarket
  > 2x health_clinic
  > 2x convenience_store
  > 1x gastronomy
  > 1x government_central
  > 1x pharmacy
  > 1x shopping_mall
  > 1x micro_playground

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy             : Bistro Quatro
    - car_services           : AUTO-COMA Kia
    - car_services           : BP
    - micro_atm              : Euronet
    - government_central     : Agencji Restrukturyzacji i Modernizacji Rolnictwa OR15
    - pharmacy               : Lutycka Apteka
    - micro_atm              : Euronet
    - car_services           : Shell
    - supermarket            : Biedronka
    - health_clinic          : Moja Stomatologia Clinic +
    - business_office        : Dąbex
    - business_office        : MK Group
```
</details>

---

## PRZEMYSL
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: -0.000, Std: 0.662)
     Rozkład Kartek (unikalne Huby): A: 18, A+: 10, B: 27, C: 36, D: 45, F: 44
[👥 BAZA LUDNOŚCI GUS] ✅ DEMOGRAFIA OK (Odchylenie zaledwie 18.7%)
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
[✅]  H3 Res 8 Grid 100% Valid (202 komórek, 31 pustyń transportowych)
```

### Faza 0: Statystyki ogólne
- **Populacja Miasta:** 71,214 (GUS Grid)
- **Transakcje RCN:** 902

### Faza III: Top 20 POI (Miasto)

| Kategoria | Tier | Ilość w Mieście | Wartość Punktowa (W) |
|---|---|---|---|
| `national_rail_hub` | T0_MEGA_HUB | 1 | 29,447,671 |
| `national_stadium` | T1_NATIONAL_MAGNET | 1 | 21,390,025 |
| `hospital_clinical` | T1_NATIONAL_MAGNET | 3 | 18,933,534 |
| `university_campus` | T1_NATIONAL_MAGNET | 7 | 14,614,092 |
| `regional_rail_hub` | T1_NATIONAL_MAGNET | 1 | 5,889,534 |
| `shopping_mall` | T2_STRATEGIC_HUB | 4 | 3,716,245 |
| `commercial_zone` | T2_STRATEGIC_HUB | 68 | 3,268,808 |
| `industrial_zone` | T2_STRATEGIC_HUB | 268 | 2,833,997 |
| `supermarket` | T2_STRATEGIC_HUB | 23 | 2,460,815 |
| `government_central` | T2_STRATEGIC_HUB | 32 | 2,196,659 |
| `business_office` | T2_STRATEGIC_HUB | 13 | 1,957,153 |
| `marketplace` | T3_LOCAL_CORE | 3 | 843,177 |
| `education_high_school` | T3_LOCAL_CORE | 51 | 647,491 |
| `social_support_mops` | T3_LOCAL_CORE | 17 | 642,508 |
| `sports_centre` | T3_LOCAL_CORE | 20 | 588,715 |
| `culture_theatre` | T3_LOCAL_CORE | 16 | 372,490 |
| `health_clinic` | T3_LOCAL_CORE | 38 | 365,997 |
| `police_station` | T4_DAILY_SERVICE | 6 | 104,318 |
| `education_preschool` | T4_DAILY_SERVICE | 35 | 101,831 |
| `car_services` | T4_DAILY_SERVICE | 17 | 100,808 |

### Faza IV: Próbki Pełnego DNA 100% (Zobacz szczegóły POI!)

#### NAJLEPSZE PRZYSTANKI (TOP 5)
<details><summary><b>Jagiellońska - PL. Pileckiego - Końcowy (891e2b16b2fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Jagiellońska - PL. Pileckiego - Końcowy
  stop_id               : 6
  h3_index              : 891e2b16b2fffff
  hub_id                : 27
  hub_name              : Jagiellońska - PL. Pileckiego - Kier. Zasanie
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : C
  grade                 : A+
  stop_percentile       : 50.6452
  local_percentile      : 100.0000
  stop_local_score_raw  : -0.0311
  local_score_raw       : 1.6578
  hub_grade             : A+
  hub_percentile        : 100.0000

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 8747752.9068
  infra_score           : 15678053.5248
  stop_raw_gravity      : 2861241.9558
  stop_entropy          : 2.0573
  hub_infra_score       : 15678053.5248

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.1429
  transit_freq          : 16.4286
  stop_routes_count     : 1
  stop_routes           : 4
  stop_hub_share        : 0.0087
  hub_departures_h      : 16.4286
  hub_routes            : 1, 2, 3, 4, 5, 8, 10, 12, 16, 18, 20, 25, 28

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 4887.8991
  market_val            : 5054.9451
  stop_liquidity        : 42
  hub_market_val        : 5054.9451

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 582.2126
  pop_val               : 1131.4245
  hub_pop_val           : 1131.4245

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 63x gastronomy
  > 25x specialized_retail
  > 18x micro_atm
  > 18x convenience_store
  > 15x government_central
  > 15x commercial_zone
  > 14x bank
  > 13x personal_services
  > 12x park_recreation
  > 10x pharmacy
  > 10x health_clinic
  > 9x place_of_worship
  > 7x micro_playground
  > 6x education_preschool
  > 6x education_high_school
  > 4x culture_theatre
  > 3x social_support_mops
  > 3x business_office
  > 3x police_station
  > 2x post_office
  > 2x micro_parcel_locker
  > 2x marketplace
  > 2x sports_centre
  > 2x industrial_zone
  > 1x university_campus
  > 1x shopping_mall
  > 1x hospital_clinical
  > 1x car_services
  > 1x supermarket

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - government_central     : Prokuratura Rejonowa w Przemyślu
    - gastronomy             : 3 Papryczki
    - post_office            : Urząd Pocztowy Przemyśl 8
    - micro_atm              : Bankomat PKO BP
    - gastronomy             : Margherita
    - pharmacy               : Pogodna
    - micro_atm              : Euronet
    - pharmacy               : Dr. Max
    - pharmacy               : Słoneczna
    - pharmacy               : Pod Orłem
    - micro_atm              : Bank Pekao
    - bank                   : Millennium Bank
```
</details>
<details><summary><b>Łukasińskiego - Kier. Bakończyce (891e2b14db3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Łukasińskiego - Kier. Bakończyce
  stop_id               : 506
  h3_index              : 891e2b14db3ffff
  hub_id                : 23
  hub_name              : Słowackiego - Poczta - Kier. Centrum
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A
  grade                 : A+
  stop_percentile       : 87.7419
  local_percentile      : 99.4444
  stop_local_score_raw  : 0.7567
  local_score_raw       : 1.3960
  hub_grade             : A+
  hub_percentile        : 99.4444

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 9051905.1207
  infra_score           : 17923813.3471
  stop_raw_gravity      : 4487963.9520
  stop_entropy          : 1.0169
  hub_infra_score       : 17923813.3471

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 1.5000
  transit_freq          : 7.9286
  stop_routes_count     : 2
  stop_routes           : 5, 10
  stop_hub_share        : 0.1892
  hub_departures_h      : 7.9286
  hub_routes            : 3, 4, 5, 8, 10, 16, 28

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6274.5654
  market_val            : 6297.7099
  stop_liquidity        : 130
  hub_market_val        : 6297.7099

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 572.9245
  pop_val               : 1192.4278
  hub_pop_val           : 1192.4278

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 17x park_recreation
  > 11x micro_playground
  > 8x health_clinic
  > 8x education_high_school
  > 8x commercial_zone
  > 5x government_central
  > 4x industrial_zone
  > 3x culture_theatre
  > 3x place_of_worship
  > 3x gastronomy
  > 3x convenience_store
  > 3x specialized_retail
  > 3x sports_centre
  > 3x education_preschool
  > 3x university_campus
  > 2x micro_atm
  > 2x pharmacy
  > 2x supermarket
  > 2x social_support_mops
  > 1x personal_services
  > 1x post_office
  > 1x micro_parcel_locker
  > 1x bank
  > 1x car_services
  > 1x hospital_clinical

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - culture_theatre        : Kino Centrum
    - personal_services      : Noel
    - post_office            : Filia Urzędu Pocztowego Przemyśl 2
    - place_of_worship       : Epifania
    - gastronomy             : Samir Kebab
    - gastronomy             : Bar Przemyskie Klimaty
    - convenience_store      : abc
    - convenience_store      : Żabka
    - culture_theatre        : Filia nr.6 Przemyskiej Biblioteki Publicznej
    - micro_parcel_locker    : Paczkomat InPost
    - specialized_retail     : Brooklyn
    - specialized_retail     : Gaja
```
</details>
<details><summary><b>Grunwaldzka - PL. Konstytucji - Kier. Ostrów (891e2b16b23ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Grunwaldzka - PL. Konstytucji - Kier. Ostrów
  stop_id               : 44
  h3_index              : 891e2b16b23ffff
  hub_id                : 78
  hub_name              : Grunwaldzka - PL. Konstytucji - Kier. Centrum
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 99.3548
  local_percentile      : 98.8889
  stop_local_score_raw  : 1.3134
  local_score_raw       : 1.3030
  hub_grade             : A+
  hub_percentile        : 98.8889

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 5471859.3837
  infra_score           : 10096211.0024
  stop_raw_gravity      : 2838351.6231
  stop_entropy          : 0.9278
  hub_infra_score       : 10096211.0024

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 4.7143
  transit_freq          : 8.5000
  stop_routes_count     : 7
  stop_routes           : 1, 4, 10, 12, 18, 25, 28
  stop_hub_share        : 0.5546
  hub_departures_h      : 8.5000
  hub_routes            : 1, 4, 10, 12, 18, 25, 28

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6061.5990
  market_val            : 6061.5990
  stop_liquidity        : 63
  hub_market_val        : 6061.5990

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 435.1714
  pop_val               : 751.3997
  hub_pop_val           : 751.3997

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 13x micro_playground
  > 12x gastronomy
  > 12x commercial_zone
  > 9x government_central
  > 9x convenience_store
  > 9x specialized_retail
  > 7x micro_atm
  > 7x education_high_school
  > 6x pharmacy
  > 6x bank
  > 6x park_recreation
  > 5x personal_services
  > 5x health_clinic
  > 4x place_of_worship
  > 3x supermarket
  > 3x micro_parcel_locker
  > 3x culture_theatre
  > 2x university_campus
  > 2x post_office
  > 2x education_preschool
  > 1x shopping_mall
  > 1x car_services
  > 1x sports_centre
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - government_central     : Prokuratura Rejonowa w Przemyślu
    - gastronomy             : 3 Papryczki
    - micro_atm              : Bankomat PKO BP
    - pharmacy               : Pod Orłem
    - pharmacy               : Niezapominajka
    - micro_atm              : Bankomat BZ WBK
    - micro_atm              : Bankomat ING Bank Slaski
    - gastronomy             : Restauracja Dominikańska
    - convenience_store      : Mini Market
    - gastronomy             : Libera
    - gastronomy             : FastoPizza
    - bank                   : Invest-Bank
```
</details>
<details><summary><b>Słowackiego - Biblioteka (891e2bab64bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Słowackiego - Biblioteka
  stop_id               : 89
  h3_index              : 891e2bab64bffff
  hub_id                : 1
  hub_name              : Słowackiego - Biblioteka
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 96.4516
  local_percentile      : 98.3333
  stop_local_score_raw  : 1.0709
  local_score_raw       : 1.1223
  hub_grade             : A+
  hub_percentile        : 98.3333

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 8471690.7185
  infra_score           : 13125353.7461
  stop_raw_gravity      : 2676901.9478
  stop_entropy          : 2.1647
  hub_infra_score       : 13125353.7461

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 4.1429
  transit_freq          : 8.0000
  stop_routes_count     : 7
  stop_routes           : 3, 4, 5, 8, 10, 16, 28
  stop_hub_share        : 0.5179
  hub_departures_h      : 8.0000
  hub_routes            : 3, 4, 5, 8, 10, 16, 28

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 4042.6078
  market_val            : 4195.9212
  stop_liquidity        : 61
  hub_market_val        : 4195.9212

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 750.1013
  pop_val               : 1318.2393
  hub_pop_val           : 1318.2393

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 53x gastronomy
  > 19x specialized_retail
  > 16x convenience_store
  > 15x micro_atm
  > 14x commercial_zone
  > 13x bank
  > 12x health_clinic
  > 11x personal_services
  > 10x education_high_school
  > 10x place_of_worship
  > 10x government_central
  > 9x park_recreation
  > 8x pharmacy
  > 7x micro_playground
  > 5x education_preschool
  > 4x culture_theatre
  > 4x social_support_mops
  > 4x industrial_zone
  > 3x police_station
  > 3x business_office
  > 2x post_office
  > 2x micro_parcel_locker
  > 1x national_rail_hub
  > 1x marketplace
  > 1x supermarket
  > 1x shopping_mall
  > 1x sports_centre
  > 1x hospital_clinical

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy             : Margherita
    - pharmacy               : Pogodna
    - micro_atm              : Euronet
    - pharmacy               : Dr. Max
    - pharmacy               : Słoneczna
    - national_rail_hub      : Przemyśl Główny
    - bank                   : Millennium Bank
    - gastronomy             : Bar Misz Masz
    - gastronomy             : Kebab Sindbad
    - convenience_store      : Piotruś Pan
    - gastronomy             : Cuda Wianki
    - personal_services      : Natura
```
</details>
<details><summary><b>Monte Cassino - Szpital Wojewódzki - Kier. Centrum (891e2b169abffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Monte Cassino - Szpital Wojewódzki - Kier. Centrum
  stop_id               : 14
  h3_index              : 891e2b169abffff
  hub_id                : 147
  hub_name              : Monte Cassino - Szpital Wojewódzki - Końcowy
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A
  grade                 : A+
  stop_percentile       : 94.5161
  local_percentile      : 97.7778
  stop_local_score_raw  : 1.0025
  local_score_raw       : 1.1134
  hub_grade             : A+
  hub_percentile        : 97.7778

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 6814809.4309
  infra_score           : 13841311.3403
  stop_raw_gravity      : 6591686.3496
  stop_entropy          : 0.0338
  hub_infra_score       : 13841311.3403

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 3.0714
  transit_freq          : 6.2143
  stop_routes_count     : 4
  stop_routes           : 2, 10, 16, 18
  stop_hub_share        : 0.4943
  hub_departures_h      : 6.2143
  hub_routes            : 2, 10, 16, 18

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 5635.3888
  market_val            : 5635.3888
  stop_liquidity        : 113
  hub_market_val        : 5635.3888

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 396.6902
  pop_val               : 787.8842
  hub_pop_val           : 787.8842

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 4x micro_playground
  > 2x convenience_store
  > 1x pharmacy
  > 1x place_of_worship
  > 1x micro_parcel_locker
  > 1x hospital_clinical
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - pharmacy               : Szpitalna
    - place_of_worship       : Kaplica pw. Świętego Ojca Pio
    - micro_parcel_locker    : Appkomat InPost
    - hospital_clinical      : Wojewódzki Szpital im. Św. Ojca Pio w Przemyślu
    - convenience_store      : Piotruś Pan
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Malhowice N / Ż (891e2b061a7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Malhowice N / Ż
  stop_id               : 350
  h3_index              : 891e2b061a7ffff
  hub_id                : 101
  hub_name              : Malhowice N / Ż
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 4.5161
  local_percentile      : 2.7778
  stop_local_score_raw  : -1.3399
  local_score_raw       : -1.5259
  hub_grade             : F
  hub_percentile        : 2.7778

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 28.0025
  infra_score           : 28.0025
  stop_raw_gravity      : 28.0025
  stop_entropy          : 0.0000
  hub_infra_score       : 28.0025

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.2857
  transit_freq          : 0.2857
  stop_routes_count     : 1
  stop_routes           : 4
  stop_hub_share        : 1.0000
  hub_departures_h      : 0.2857
  hub_routes            : 4

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 5989.2328
  market_val            : 5989.2328
  stop_liquidity        : 0
  hub_market_val        : 5989.2328

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 15.6538
  pop_val               : 15.6538
  hub_pop_val           : 15.6538

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x place_of_worship

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - place_of_worship       : Kaplica pw. Świętego biskupa Józefa Sebastiana Pelczara
```
</details>
<details><summary><b>Łętownia Wieś - Kier. Przemyśl (891e2b1610fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Łętownia Wieś - Kier. Przemyśl
  stop_id               : 283
  h3_index              : 891e2b1610fffff
  hub_id                : 135
  hub_name              : Łętownia Wieś - Kier. Przemyśl
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 1.9355
  local_percentile      : 2.2222
  stop_local_score_raw  : -1.6574
  local_score_raw       : -1.7202
  hub_grade             : F
  hub_percentile        : 2.2222

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0714
  transit_freq          : 0.0714
  stop_routes_count     : 1
  stop_routes           : 1
  stop_hub_share        : 1.0000
  hub_departures_h      : 0.0714
  hub_routes            : 1

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 5989.2328
  market_val            : 5989.2328
  stop_liquidity        : 0
  hub_market_val        : 5989.2328

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 39.5390
  pop_val               : 78.7997
  hub_pop_val           : 78.7997

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Łętownia N / Ż - Kier. Przemyśl (891e2b16167ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Łętownia N / Ż - Kier. Przemyśl
  stop_id               : 281
  h3_index              : 891e2b16167ffff
  hub_id                : 89
  hub_name              : Łętownia N / Ż - Kier. Przemyśl
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 1.2903
  local_percentile      : 1.6667
  stop_local_score_raw  : -1.6766
  local_score_raw       : -1.7394
  hub_grade             : F
  hub_percentile        : 1.6667

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0714
  transit_freq          : 0.0714
  stop_routes_count     : 1
  stop_routes           : 1
  stop_hub_share        : 1.0000
  hub_departures_h      : 0.0714
  hub_routes            : 1

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 5989.2328
  market_val            : 5989.2328
  stop_liquidity        : 0
  hub_market_val        : 5989.2328

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 33.9505
  pop_val               : 67.7606
  hub_pop_val           : 67.7606

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Łuczyce II N / Ż - Kier. Przemyśl (891e2ba9467ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Łuczyce II N / Ż - Kier. Przemyśl
  stop_id               : 300
  h3_index              : 891e2ba9467ffff
  hub_id                : 117
  hub_name              : Łuczyce II N / Ż - Kier. Przemyśl
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.6452
  local_percentile      : 1.1111
  stop_local_score_raw  : -1.7618
  local_score_raw       : -1.7630
  hub_grade             : F
  hub_percentile        : 1.1111

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.3571
  transit_freq          : 0.6429
  stop_routes_count     : 1
  stop_routes           : 20
  stop_hub_share        : 0.5556
  hub_departures_h      : 0.6429
  hub_routes            : 20

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 5989.2328
  market_val            : 5989.2328
  stop_liquidity        : 0
  hub_market_val        : 5989.2328

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 3.2155
  pop_val               : 6.0000
  hub_pop_val           : 6.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Malhowice III N / Ż (891e2ba9227ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Malhowice III N / Ż
  stop_id               : 677
  h3_index              : 891e2ba9227ffff
  hub_id                : 99
  hub_name              : Malhowice III N / Ż
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 2.2581
  local_percentile      : 0.5556
  stop_local_score_raw  : -1.5840
  local_score_raw       : -1.7721
  hub_grade             : F
  hub_percentile        : 0.5556

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.3571
  transit_freq          : 0.3571
  stop_routes_count     : 1
  stop_routes           : 4
  stop_hub_share        : 1.0000
  hub_departures_h      : 0.3571
  hub_routes            : 4

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 5989.2328
  market_val            : 5989.2328
  stop_liquidity        : 0
  hub_market_val        : 5989.2328

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 15.6847
  pop_val               : 15.6847
  hub_pop_val           : 15.6847

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>

---

## RADOM
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: 0.000, Std: 0.664)
     Rozkład Kartek (unikalne Huby): A: 44, A+: 22, B: 66, C: 88, D: 110, F: 109
[👥 BAZA LUDNOŚCI GUS] ✅ DEMOGRAFIA OK (Odchylenie zaledwie 19.6%)
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
[✅]  H3 Res 8 Grid 100% Valid (400 komórek, 127 pustyń transportowych)
```

### Faza 0: Statystyki ogólne
- **Populacja Miasta:** 239,185 (GUS Grid)
- **Transakcje RCN:** 4,179

### Faza III: Top 20 POI (Miasto)

| Kategoria | Tier | Ilość w Mieście | Wartość Punktowa (W) |
|---|---|---|---|
| `international_airport` | T0_MEGA_HUB | 1 | 187,989,020 |
| `national_rail_hub` | T0_MEGA_HUB | 1 | 34,180,638 |
| `national_stadium` | T1_NATIONAL_MAGNET | 3 | 23,270,084 |
| `hospital_clinical` | T1_NATIONAL_MAGNET | 8 | 20,687,709 |
| `university_campus` | T1_NATIONAL_MAGNET | 39 | 11,666,499 |
| `regional_rail_hub` | T1_NATIONAL_MAGNET | 2 | 6,728,566 |
| `industrial_zone` | T2_STRATEGIC_HUB | 471 | 4,096,274 |
| `commercial_zone` | T2_STRATEGIC_HUB | 95 | 3,797,831 |
| `shopping_mall` | T2_STRATEGIC_HUB | 30 | 3,516,990 |
| `supermarket` | T2_STRATEGIC_HUB | 72 | 2,577,258 |
| `government_central` | T2_STRATEGIC_HUB | 42 | 2,068,711 |
| `business_office` | T2_STRATEGIC_HUB | 29 | 1,809,370 |
| `marketplace` | T3_LOCAL_CORE | 8 | 833,395 |
| `education_high_school` | T3_LOCAL_CORE | 105 | 800,389 |
| `social_support_mops` | T3_LOCAL_CORE | 21 | 700,625 |
| `sports_centre` | T3_LOCAL_CORE | 50 | 484,183 |
| `culture_theatre` | T3_LOCAL_CORE | 27 | 413,423 |
| `health_clinic` | T3_LOCAL_CORE | 148 | 374,877 |
| `education_preschool` | T4_DAILY_SERVICE | 53 | 128,907 |
| `police_station` | T4_DAILY_SERVICE | 10 | 110,492 |

### Faza IV: Próbki Pełnego DNA 100% (Zobacz szczegóły POI!)

#### NAJLEPSZE PRZYSTANKI (TOP 5)
<details><summary><b>Chrobrego / Mierzejewskiego (891e2c040afffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Chrobrego / Mierzejewskiego
  stop_id               : 156
  h3_index              : 891e2c040afffff
  hub_id                : 271
  hub_name              : Chrobrego / Mierzejewskiego
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 99.8624
  local_percentile      : 100.0000
  stop_local_score_raw  : 1.3945
  local_score_raw       : 1.4318
  hub_grade             : A+
  hub_percentile        : 100.0000

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 16995442.6174
  infra_score           : 28892364.8802
  stop_raw_gravity      : 13941797.8669
  stop_entropy          : 0.2190
  hub_infra_score       : 28892364.8802

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 8.9286
  transit_freq          : 17.7143
  stop_routes_count     : 6
  stop_routes           : 7, 11, 13, 21, 23, 24
  stop_hub_share        : 0.5040
  hub_departures_h      : 17.7143
  hub_routes            : 7, 11, 13, 21, 23, 24

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 8033.8884
  market_val            : 8016.7971
  stop_liquidity        : 51
  hub_market_val        : 8016.7971

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 493.2556
  pop_val               : 826.2769
  hub_pop_val           : 826.2769

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 79x park_recreation
  > 18x university_campus
  > 15x micro_playground
  > 9x gastronomy
  > 5x specialized_retail
  > 5x health_clinic
  > 4x personal_services
  > 3x police_station
  > 3x micro_atm
  > 3x supermarket
  > 3x micro_parcel_locker
  > 2x pharmacy
  > 2x education_high_school
  > 2x convenience_store
  > 2x place_of_worship
  > 2x car_services
  > 1x post_office
  > 1x social_support_mops
  > 1x government_central
  > 1x culture_theatre
  > 1x commercial_zone
  > 1x education_preschool

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - university_campus      : Wydział Inżynierii Chemicznej i Towaroznawstwa
    - police_station         : Komenda Miejska Policji w Radomiu
    - post_office            : Urząd Pocztowy Radom 7
    - university_campus      : Centrum Naukowo-Badawcze
    - university_campus      : Wydział Ekonomii i Finansów
    - university_campus      : Aula Głowna UTH Radom
    - gastronomy             : Dell' Arte
    - gastronomy             : BurgerMANIA
    - pharmacy               : Apteka Polskich Farmaceutów s.c.
    - micro_atm              : Euronet
    - university_campus      : Hala sportowa UTH Radom
    - micro_atm              : Euronet
```
</details>
<details><summary><b>Limanowskiego / Wałowa (891e2c042a3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Limanowskiego / Wałowa
  stop_id               : 123
  h3_index              : 891e2c042a3ffff
  hub_id                : 236
  hub_name              : Limanowskiego / Wałowa
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 99.4498
  local_percentile      : 99.7722
  stop_local_score_raw  : 1.2406
  local_score_raw       : 1.4151
  hub_grade             : A+
  hub_percentile        : 99.7722

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 10470397.7225
  infra_score           : 18567720.4832
  stop_raw_gravity      : 3566134.2021
  stop_entropy          : 1.9361
  hub_infra_score       : 18567720.4832

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 10.3571
  transit_freq          : 20.7143
  stop_routes_count     : 8
  stop_routes           : 1, 2, 5, 10, 11, 16, 17, 23
  stop_hub_share        : 0.5000
  hub_departures_h      : 20.7143
  hub_routes            : 1, 2, 5, 10, 11, 16, 17, 23

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 7128.3613
  market_val            : 8177.0904
  stop_liquidity        : 61
  hub_market_val        : 8177.0904

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 309.4911
  pop_val               : 569.6059
  hub_pop_val           : 569.6059

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 144x park_recreation
  > 17x health_clinic
  > 11x specialized_retail
  > 10x place_of_worship
  > 10x gastronomy
  > 8x industrial_zone
  > 7x micro_playground
  > 5x personal_services
  > 4x convenience_store
  > 4x commercial_zone
  > 3x social_support_mops
  > 3x government_central
  > 2x car_services
  > 2x pharmacy
  > 2x education_high_school
  > 2x education_preschool
  > 2x supermarket
  > 2x hospital_clinical
  > 1x post_office
  > 1x micro_atm
  > 1x micro_parcel_locker
  > 1x national_stadium
  > 1x university_campus

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - health_clinic          : Orto Profil Roma
    - convenience_store      : Żabka
    - car_services           : Transoil
    - health_clinic          : Radomska Stacja Pogotowia Ratunkowego
    - post_office            : Ajencja Pocztowa Radom
    - place_of_worship       : Kaplica domowa
    - place_of_worship       : Kaplica domowa
    - gastronomy             : Casa Verde Ristorante Pizzeria
    - gastronomy             : Radomska Cafe
    - gastronomy             : Nihil Novi
    - specialized_retail     : Konfekcja u Ani
    - health_clinic          : Niepubliczny Zakład Opieki Zdrowotnej \
```
</details>
<details><summary><b>Chrobrego / Rapackiego (891e2c040a7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Chrobrego / Rapackiego
  stop_id               : 63
  h3_index              : 891e2c040a7ffff
  hub_id                : 238
  hub_name              : Chrobrego / Rapackiego
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 99.1747
  local_percentile      : 99.5444
  stop_local_score_raw  : 1.1807
  local_score_raw       : 1.2673
  hub_grade             : A+
  hub_percentile        : 99.5444

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 11088289.9210
  infra_score           : 21219544.9617
  stop_raw_gravity      : 7719531.0304
  stop_entropy          : 0.4364
  hub_infra_score       : 21219544.9617

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 9.0000
  transit_freq          : 17.9286
  stop_routes_count     : 6
  stop_routes           : 3, 7, 13, 21, 23, 24
  stop_hub_share        : 0.5020
  hub_departures_h      : 17.9286
  hub_routes            : 3, 7, 11, 13, 21, 23, 24

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6102.8571
  market_val            : 6494.4079
  stop_liquidity        : 125
  hub_market_val        : 6494.4079

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 804.7884
  pop_val               : 1152.5792
  hub_pop_val           : 1152.5792

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 106x park_recreation
  > 18x university_campus
  > 18x micro_playground
  > 10x gastronomy
  > 7x convenience_store
  > 5x health_clinic
  > 5x micro_parcel_locker
  > 4x specialized_retail
  > 4x supermarket
  > 3x car_services
  > 3x micro_atm
  > 3x personal_services
  > 3x place_of_worship
  > 2x pharmacy
  > 2x education_preschool
  > 1x education_high_school
  > 1x government_central
  > 1x social_support_mops
  > 1x culture_theatre
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - car_services           : Circle K Express
    - car_services           : Orlen
    - university_campus      : Wydział Ekonomii i Finansów
    - university_campus      : Aula Głowna UTH Radom
    - gastronomy             : Dell' Arte
    - university_campus      : Katedra Pojazdów Samochodowych
    - gastronomy             : BurgerMANIA
    - pharmacy               : Apteka Polskich Farmaceutów s.c.
    - convenience_store      : Sklep ABC
    - convenience_store      : Żabka
    - university_campus      : Kolegium Nauczycielskie
    - micro_atm              : Euronet
```
</details>
<details><summary><b>Malczewskiego / Kelles-Krauza (891e2c043d3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Malczewskiego / Kelles-Krauza
  stop_id               : 49
  h3_index              : 891e2c043d3ffff
  hub_id                : 406
  hub_name              : Malczewskiego / Kelles-Krauza
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 99.0371
  local_percentile      : 99.3166
  stop_local_score_raw  : 1.1797
  local_score_raw       : 1.2154
  hub_grade             : A+
  hub_percentile        : 99.3166

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 6098960.6258
  infra_score           : 10096677.9436
  stop_raw_gravity      : 2536529.8448
  stop_entropy          : 1.4045
  hub_infra_score       : 10096677.9436

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 8.8571
  transit_freq          : 17.5000
  stop_routes_count     : 4
  stop_routes           : 7, 9, 17, 19
  stop_hub_share        : 0.5061
  hub_departures_h      : 17.5000
  hub_routes            : 7, 9, 17, 19

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 7820.3594
  market_val            : 7780.6892
  stop_liquidity        : 106
  hub_market_val        : 7780.6892

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 295.4521
  pop_val               : 494.7400
  hub_pop_val           : 494.7400

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 159x park_recreation
  > 88x specialized_retail
  > 60x gastronomy
  > 20x personal_services
  > 16x micro_playground
  > 15x university_campus
  > 13x convenience_store
  > 12x bank
  > 11x education_high_school
  > 11x health_clinic
  > 9x micro_atm
  > 9x place_of_worship
  > 8x commercial_zone
  > 3x supermarket
  > 3x pharmacy
  > 3x car_services
  > 3x government_central
  > 3x micro_parcel_locker
  > 2x culture_theatre
  > 2x post_office
  > 2x social_support_mops
  > 2x business_office
  > 2x education_preschool
  > 1x shopping_mall

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - bank                   : Millennium Bank
    - bank                   : Bank Zachodni WBK
    - university_campus      : Wydział Transportu
    - university_campus      : Wydział Transportu
    - micro_atm              : Bankomat Millennium
    - micro_atm              : Bankomat BZ WBK
    - convenience_store      : Żabka
    - specialized_retail     : Bershka
    - specialized_retail     : Cropp
    - specialized_retail     : HalfPrice
    - specialized_retail     : H&M
    - specialized_retail     : House
```
</details>
<details><summary><b>Okulickiego / Rondo (891e2c042a3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Okulickiego / Rondo
  stop_id               : 143
  h3_index              : 891e2c042a3ffff
  hub_id                : 58
  hub_name              : Okulickiego / Rondo
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 98.8996
  local_percentile      : 99.0888
  stop_local_score_raw  : 1.1784
  local_score_raw       : 1.2149
  hub_grade             : A+
  hub_percentile        : 99.0888

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 8639771.1558
  infra_score           : 14152812.7111
  stop_raw_gravity      : 3404303.2204
  stop_entropy          : 1.5379
  hub_infra_score       : 14152812.7111

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 9.1429
  transit_freq          : 18.2143
  stop_routes_count     : 7
  stop_routes           : 2, 5, 6, 8, 10, 15, 25
  stop_hub_share        : 0.5020
  hub_departures_h      : 18.2143
  hub_routes            : 2, 5, 6, 8, 10, 15, 25

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 7658.2265
  market_val            : 7658.2265
  stop_liquidity        : 165
  hub_market_val        : 7658.2265

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 230.8212
  pop_val               : 374.2909
  hub_pop_val           : 374.2909

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 144x park_recreation
  > 9x industrial_zone
  > 8x personal_services
  > 7x place_of_worship
  > 7x health_clinic
  > 6x specialized_retail
  > 4x micro_parcel_locker
  > 4x micro_playground
  > 4x commercial_zone
  > 3x supermarket
  > 3x gastronomy
  > 3x government_central
  > 2x pharmacy
  > 2x convenience_store
  > 2x education_high_school
  > 1x post_office
  > 1x car_services
  > 1x social_support_mops
  > 1x shopping_mall
  > 1x business_office
  > 1x education_preschool
  > 1x national_stadium
  > 1x university_campus

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - post_office            : Ajencja Pocztowa Radom
    - place_of_worship       : Kaplica domowa
    - place_of_worship       : Kaplica domowa
    - specialized_retail     : Pepco
    - supermarket            : Biedronka
    - specialized_retail     : Media Expert
    - gastronomy             : Nihil Novi
    - pharmacy               : Apteka \
    - specialized_retail     : Trafika
    - supermarket            : Biedronka
    - health_clinic          : Niepubliczny Zakład Opieki Zdrowotnej \
    - health_clinic          : Centrum Specjalistycznej Opieki Ambulatoryjnej
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Kosów (891e2c0524fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Kosów
  stop_id               : 410
  h3_index              : 891e2c0524fffff
  hub_id                : 226
  hub_name              : Kosów
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 1.3755
  local_percentile      : 1.1390
  stop_local_score_raw  : -2.0657
  local_score_raw       : -2.0737
  hub_grade             : F
  hub_percentile        : 1.1390

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6689.2033
  market_val            : 6689.2033
  stop_liquidity        : 0
  hub_market_val        : 6689.2033

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 100.3199
  pop_val               : 189.0000
  hub_pop_val           : 189.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Małęczyn Stary / Pogodna (NŻ) (891e2c04b2bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Małęczyn Stary / Pogodna (NŻ)
  stop_id               : 1337
  h3_index              : 891e2c04b2bffff
  hub_id                : 312
  hub_name              : Małęczyn Stary / Pogodna (NŻ)
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 1.2380
  local_percentile      : 0.9112
  stop_local_score_raw  : -2.0774
  local_score_raw       : -2.0766
  hub_grade             : F
  hub_percentile        : 0.9112

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6689.2033
  market_val            : 6689.2033
  stop_liquidity        : 0
  hub_market_val        : 6689.2033

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 92.6186
  pop_val               : 185.1502
  hub_pop_val           : 185.1502

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Rożki I (891e2c0e16bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Rożki I
  stop_id               : 1233
  h3_index              : 891e2c0e16bffff
  hub_id                : 160
  hub_name              : Rożki I
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.6878
  local_percentile      : 0.6834
  stop_local_score_raw  : -2.1458
  local_score_raw       : -2.1469
  hub_grade             : F
  hub_percentile        : 0.6834

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6689.2033
  market_val            : 6689.2033
  stop_liquidity        : 0
  hub_market_val        : 6689.2033

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 57.8875
  pop_val               : 112.5745
  hub_pop_val           : 112.5745

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Małęczyn Stary / Leśna (NŻ) (891e2c3a597ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Małęczyn Stary / Leśna (NŻ)
  stop_id               : 1339
  h3_index              : 891e2c3a597ffff
  hub_id                : 263
  hub_name              : Małęczyn Stary / Leśna (NŻ)
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.5502
  local_percentile      : 0.4556
  stop_local_score_raw  : -2.1574
  local_score_raw       : -2.1563
  hub_grade             : F
  hub_percentile        : 0.4556

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6689.2033
  market_val            : 6689.2033
  stop_liquidity        : 0
  hub_market_val        : 6689.2033

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 53.4460
  pop_val               : 105.2548
  hub_pop_val           : 105.2548

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Kozłów I (NŻ) (891e2c068afffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Kozłów I (NŻ)
  stop_id               : 903
  h3_index              : 891e2c068afffff
  hub_id                : 230
  hub_name              : Kozłów I (NŻ)
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.2751
  local_percentile      : 0.2278
  stop_local_score_raw  : -2.4210
  local_score_raw       : -2.4168
  hub_grade             : F
  hub_percentile        : 0.2278

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6689.2033
  market_val            : 6689.2033
  stop_liquidity        : 0
  hub_market_val        : 6689.2033

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 8.1285
  pop_val               : 16.0000
  hub_pop_val           : 16.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>

---

## RZESZOW
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: 0.000, Std: 0.686)
     Rozkład Kartek (unikalne Huby): A: 138, A+: 70, B: 208, C: 277, D: 346, F: 345
[👥 BAZA LUDNOŚCI GUS] ❌ OSTRZEŻENIE DEMOGRAFICZNE: Odchylenie 123.0%. GUS: 423,608 vs Baza: 190,000
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
[✅]  H3 Res 8 Grid 100% Valid (1,904 komórek, 425 pustyń transportowych)
```

### Faza 0: Statystyki ogólne
- **Populacja Miasta:** 423,608 (GUS Grid)
- **Transakcje RCN:** 12,298

### Faza III: Top 20 POI (Miasto)

| Kategoria | Tier | Ilość w Mieście | Wartość Punktowa (W) |
|---|---|---|---|
| `international_airport` | T0_MEGA_HUB | 1 | 194,869,952 |
| `national_rail_hub` | T0_MEGA_HUB | 1 | 35,711,344 |
| `national_stadium` | T1_NATIONAL_MAGNET | 11 | 21,355,857 |
| `hospital_clinical` | T1_NATIONAL_MAGNET | 13 | 21,015,838 |
| `university_campus` | T1_NATIONAL_MAGNET | 48 | 10,676,662 |
| `regional_rail_hub` | T1_NATIONAL_MAGNET | 11 | 6,753,090 |
| `industrial_zone` | T2_STRATEGIC_HUB | 650 | 4,370,346 |
| `commercial_zone` | T2_STRATEGIC_HUB | 593 | 3,789,309 |
| `shopping_mall` | T2_STRATEGIC_HUB | 43 | 3,471,010 |
| `logistics_hub` | T2_STRATEGIC_HUB | 1 | 2,334,039 |
| `government_central` | T2_STRATEGIC_HUB | 100 | 2,322,848 |
| `supermarket` | T2_STRATEGIC_HUB | 179 | 2,254,537 |
| `business_office` | T2_STRATEGIC_HUB | 103 | 1,976,230 |
| `marketplace` | T3_LOCAL_CORE | 12 | 746,401 |
| `education_high_school` | T3_LOCAL_CORE | 294 | 683,517 |
| `sports_centre` | T3_LOCAL_CORE | 79 | 663,359 |
| `social_support_mops` | T3_LOCAL_CORE | 31 | 622,184 |
| `culture_theatre` | T3_LOCAL_CORE | 47 | 392,358 |
| `health_clinic` | T3_LOCAL_CORE | 197 | 391,168 |
| `education_preschool` | T4_DAILY_SERVICE | 197 | 109,059 |

### Faza IV: Próbki Pełnego DNA 100% (Zobacz szczegóły POI!)

#### NAJLEPSZE PRZYSTANKI (TOP 5)
<details><summary><b>Piłsudskiego U. Wojewódzki 06 (891e286c1a7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Piłsudskiego U. Wojewódzki 06
  stop_id               : 288
  h3_index              : 891e286c1a7ffff
  hub_id                : 1094
  hub_name              : Piłsudskiego U. Wojewódzki 05
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 97.3998
  local_percentile      : 100.0000
  stop_local_score_raw  : 1.2187
  local_score_raw       : 1.7097
  hub_grade             : A+
  hub_percentile        : 100.0000

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 9211253.8470
  infra_score           : 30929432.8822
  stop_raw_gravity      : 3883985.8545
  stop_entropy          : 1.3716
  hub_infra_score       : 30929432.8822

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 28.2143
  transit_freq          : 76.2857
  stop_routes_count     : 22
  stop_routes           : 4, 6, 10, 11, 13, 15, 16, 20, 31, 35, 37, 41, 45, 51, 52, 54, 57, 59, 219, 228, 253, 0A
  stop_hub_share        : 0.3699
  hub_departures_h      : 76.2857
  hub_routes            : 1, 4, 6, 10, 11, 13, 15, 16, 17, 19, 20, 22, 27, 31, 35, 37, 39, 41, 42, 45, 46, 47, 51, 52, 54, 57, 59, 108, 203, 208, 209, 210, 219, 223, 228, 233, 251, 253, 288, 0A, 0B

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 8689.0244
  market_val            : 8689.0244
  stop_liquidity        : 89
  hub_market_val        : 8689.0244

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 198.0754
  pop_val               : 615.2226
  hub_pop_val           : 615.2226

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 93x gastronomy
  > 49x park_recreation
  > 30x personal_services
  > 28x commercial_zone
  > 25x specialized_retail
  > 15x government_central
  > 15x bank
  > 13x micro_atm
  > 13x health_clinic
  > 12x convenience_store
  > 11x education_high_school
  > 11x university_campus
  > 10x micro_parcel_locker
  > 9x pharmacy
  > 5x supermarket
  > 5x culture_theatre
  > 5x post_office
  > 5x shopping_mall
  > 4x micro_playground
  > 2x business_office
  > 2x education_preschool
  > 2x place_of_worship
  > 1x national_rail_hub
  > 1x marketplace

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : PKO BP
    - gastronomy             : Dara Fit
    - micro_atm              : Euronet
    - government_central     : Urząd Komunikacji Elektronicznej
    - gastronomy             : Kogucik
    - supermarket            : Biedronka
    - education_high_school  : Technikum Nr 1
    - education_high_school  : VI Liceum Ogólnokształcące
    - supermarket            : FRAC
    - pharmacy               : Dr. Max
    - specialized_retail     : Atelier
    - gastronomy             : Avanti
```
</details>
<details><summary><b>Lisa-Kuli 01 (891e286c133ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Lisa-Kuli 01
  stop_id               : 69
  h3_index              : 891e286c133ffff
  hub_id                : 35
  hub_name              : Lisa-Kuli 01
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 97.8621
  local_percentile      : 99.9277
  stop_local_score_raw  : 1.3006
  local_score_raw       : 1.7034
  hub_grade             : A+
  hub_percentile        : 99.9277

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 17975905.4815
  infra_score           : 31577095.6754
  stop_raw_gravity      : 6096974.1155
  stop_entropy          : 1.9483
  hub_infra_score       : 31577095.6754

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 13.9286
  transit_freq          : 71.0714
  stop_routes_count     : 10
  stop_routes           : 2, 5, 6, 12, 13, 14, 37, 39, 42, 223
  stop_hub_share        : 0.1960
  hub_departures_h      : 71.0714
  hub_routes            : 2, 3, 7, 8, 10, 11, 14, 15, 18, 23, 26, 28, 30, 34, 35, 36, 42, 45, 58, 59, 203, 208, 209, 211, 219, 223, 230, 233, 251, 253, 281, 288, 0A, 0B

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 9927.7978
  market_val            : 8514.2261
  stop_liquidity        : 963
  hub_market_val        : 8514.2261

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 742.4472
  pop_val               : 787.3125
  hub_pop_val           : 787.3125

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 58x gastronomy
  > 36x commercial_zone
  > 34x park_recreation
  > 21x specialized_retail
  > 16x bank
  > 16x education_high_school
  > 13x personal_services
  > 12x government_central
  > 11x micro_playground
  > 10x convenience_store
  > 9x micro_atm
  > 9x health_clinic
  > 8x education_preschool
  > 7x university_campus
  > 6x pharmacy
  > 6x micro_parcel_locker
  > 6x sports_centre
  > 5x culture_theatre
  > 5x police_station
  > 5x place_of_worship
  > 4x supermarket
  > 4x shopping_mall
  > 3x business_office
  > 2x industrial_zone
  > 1x post_office
  > 1x social_support_mops
  > 1x marketplace

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy             : Dara Fit
    - micro_atm              : Bankomat BZ WBK
    - gastronomy             : Fasta Pasta
    - gastronomy             : Bar Mleczny \
    - gastronomy             : Strażacka
    - supermarket            : Biedronka
    - bank                   : Bank Spółdzielczy w Rzeszowie
    - bank                   : Plus Bank
    - gastronomy             : Bellanuna
    - gastronomy             : Nam-a
    - health_clinic          : Ośrodek Chirurgii Oka Prof. Zagórskiego
    - health_clinic          : Ośrodek Chirurgii Plastycznej Dr. M. Kuczyńskiego
```
</details>
<details><summary><b>Krakowska jedn. wojskowa 02 (891e286c187ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Krakowska jedn. wojskowa 02
  stop_id               : 16
  h3_index              : 891e286c187ffff
  hub_id                : 0
  hub_name              : Krakowska jedn. wojskowa 01
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 99.1333
  local_percentile      : 99.8555
  stop_local_score_raw  : 1.4430
  local_score_raw       : 1.6953
  hub_grade             : A+
  hub_percentile        : 99.8555

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 9476346.7288
  infra_score           : 17208034.7928
  stop_raw_gravity      : 3310364.8606
  stop_entropy          : 1.8626
  hub_infra_score       : 17208034.7928

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 25.9286
  transit_freq          : 56.0000
  stop_routes_count     : 15
  stop_routes           : 1, 2, 3, 6, 17, 19, 22, 27, 30, 33, 34, 36, 42, 47, 108
  stop_hub_share        : 0.4630
  hub_departures_h      : 56.0000
  hub_routes            : 1, 2, 3, 6, 17, 19, 22, 27, 30, 33, 34, 36, 42, 47, 108, 203, 208, 209, 210, 219, 223, 228, 233, 251, 288

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 8390.8046
  market_val            : 8426.3266
  stop_liquidity        : 199
  hub_market_val        : 8426.3266

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 1115.1557
  pop_val               : 1810.7700
  hub_pop_val           : 1810.7700

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 10x micro_parcel_locker
  > 9x park_recreation
  > 6x micro_playground
  > 6x personal_services
  > 6x commercial_zone
  > 5x convenience_store
  > 5x specialized_retail
  > 5x gastronomy
  > 4x supermarket
  > 4x health_clinic
  > 3x shopping_mall
  > 3x micro_atm
  > 3x pharmacy
  > 3x education_preschool
  > 3x business_office
  > 1x post_office
  > 1x car_services
  > 1x university_campus
  > 1x bank
  > 1x education_high_school
  > 1x government_central
  > 1x hospital_clinical

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store      : Żabka
    - post_office            : Urząd Pocztowy nr 7
    - shopping_mall          : Alton-hurtowniaGSM
    - convenience_store      : Społem
    - convenience_store      : Delikatesy Premium
    - specialized_retail     : Detex
    - specialized_retail     : Pepco
    - micro_atm              : Planet Cash
    - car_services           : Shell
    - gastronomy             : Oro Ristorante
    - supermarket            : Delikatesy Centrum
    - supermarket            : Biedronka
```
</details>
<details><summary><b>Kwiatkowskiego / Powst. Warszawy 02 (891e286ce03ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Kwiatkowskiego / Powst. Warszawy 02
  stop_id               : 408
  h3_index              : 891e286ce03ffff
  hub_id                : 150
  hub_name              : Powst. Warszawy dom studenta 09
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A
  grade                 : A+
  stop_percentile       : 91.7373
  local_percentile      : 99.7832
  stop_local_score_raw  : 0.9141
  local_score_raw       : 1.6858
  hub_grade             : A+
  hub_percentile        : 99.7832

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 6178565.9788
  infra_score           : 3554039.3495
  stop_raw_gravity      : 2788476.6878
  stop_entropy          : 1.2157
  hub_infra_score       : 3554039.3495

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 8.2143
  transit_freq          : 53.1429
  stop_routes_count     : 6
  stop_routes           : 10, 12, 31, 40, 218, 232
  stop_hub_share        : 0.1546
  hub_departures_h      : 53.1429
  hub_routes            : 5, 6, 8, 10, 12, 13, 18, 29, 31, 34, 36, 37, 40, 43, 49, 58, 108, 210, 218, 219, 223, 232, 253, 0A, 0B

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 8932.1745
  market_val            : 10086.8559
  stop_liquidity        : 307
  hub_market_val        : 10086.8559

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 721.7958
  pop_val               : 1161.2979
  hub_pop_val           : 1161.2979

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 6x micro_playground
  > 5x convenience_store
  > 4x gastronomy
  > 4x personal_services
  > 4x education_preschool
  > 3x pharmacy
  > 3x education_high_school
  > 2x supermarket
  > 2x micro_parcel_locker
  > 2x park_recreation
  > 1x post_office
  > 1x health_clinic
  > 1x micro_atm
  > 1x business_office
  > 1x specialized_retail
  > 1x commercial_zone
  > 1x university_campus
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - supermarket            : Biedronka
    - post_office            : Poczta Podwisłocze
    - pharmacy               : Apteka Panacea
    - gastronomy             : Zajazd Polonez
    - convenience_store      : Żabka
    - convenience_store      : Żabka
    - gastronomy             : Czarna Oliwka - Pizzeria
    - personal_services      : Studio Urody CIACH Eunika Nowicka
    - micro_parcel_locker    : Paczkomat InPost
    - education_preschool    : Publiczne przedszkole nr 35
    - micro_parcel_locker    : Paczkomat InPost
    - education_high_school  : Szkoła Podstawowa Nr 23
```
</details>
<details><summary><b>Cieplińskiego 02 (891e286c1afffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Cieplińskiego 02
  stop_id               : 206
  h3_index              : 891e286c1afffff
  hub_id                : 202
  hub_name              : Cieplińskiego 02
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 97.7080
  local_percentile      : 99.7110
  stop_local_score_raw  : 1.2756
  local_score_raw       : 1.6566
  hub_grade             : A+
  hub_percentile        : 99.7110

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 12185930.7480
  infra_score           : 16393157.9167
  stop_raw_gravity      : 4511144.4990
  stop_entropy          : 1.7013
  hub_infra_score       : 16393157.9167

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 21.7857
  transit_freq          : 74.9286
  stop_routes_count     : 13
  stop_routes           : 8, 13, 16, 18, 23, 26, 28, 31, 33, 37, 41, 51, 223
  stop_hub_share        : 0.2908
  hub_departures_h      : 74.9286
  hub_routes            : 2, 3, 7, 8, 10, 11, 14, 15, 18, 23, 26, 28, 30, 34, 35, 36, 42, 45, 58, 59, 108, 203, 208, 209, 219, 223, 233, 251, 253, 288, 0A, 0B

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 9121.8682
  market_val            : 8680.6351
  stop_liquidity        : 215
  hub_market_val        : 8680.6351

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 374.9195
  pop_val               : 588.8247
  hub_pop_val           : 588.8247

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 83x gastronomy
  > 42x park_recreation
  > 33x commercial_zone
  > 28x personal_services
  > 27x specialized_retail
  > 15x bank
  > 13x micro_atm
  > 13x government_central
  > 13x education_high_school
  > 13x convenience_store
  > 10x health_clinic
  > 10x micro_parcel_locker
  > 10x university_campus
  > 8x pharmacy
  > 8x micro_playground
  > 8x sports_centre
  > 6x supermarket
  > 6x shopping_mall
  > 5x culture_theatre
  > 5x education_preschool
  > 4x business_office
  > 4x place_of_worship
  > 3x police_station
  > 2x post_office
  > 1x marketplace
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : PKO BP
    - gastronomy             : Dara Fit
    - micro_atm              : Bankomat BZ WBK
    - micro_atm              : Euronet
    - government_central     : Urząd Komunikacji Elektronicznej
    - supermarket            : Biedronka
    - education_high_school  : Technikum Nr 1
    - education_high_school  : VI Liceum Ogólnokształcące
    - gastronomy             : Fasta Pasta
    - specialized_retail     : Aryton
    - specialized_retail     : Anna Skrzynecka
    - personal_services      : Art STUDIO
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Wólka Sokołowska las 65 (891e282955bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Wólka Sokołowska las 65
  stop_id               : 993
  h3_index              : 891e282955bffff
  hub_id                : 635
  hub_name              : Wólka Sokołowska las 65
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : C
  grade                 : F
  stop_percentile       : 52.5616
  local_percentile      : 0.3613
  stop_local_score_raw  : 0.1017
  local_score_raw       : -1.5410
  hub_grade             : F
  hub_percentile        : 0.3613

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 2369346.9888
  infra_score           : 0.0000
  stop_raw_gravity      : 1101104.5520
  stop_entropy          : 1.1518
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 1.9286
  transit_freq          : 0.0000
  stop_routes_count     : 4
  stop_routes           : 54, 215, 216, 226
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 10461.6558
  market_val            : 7964.9363
  stop_liquidity        : 8
  hub_market_val        : 7964.9363

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 83.2316
  pop_val               : 6.9466
  hub_pop_val           : 6.9466

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Wólka Sokołowska las 44 (891e282955bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Wólka Sokołowska las 44
  stop_id               : 992
  h3_index              : 891e282955bffff
  hub_id                : 1166
  hub_name              : Wólka Sokołowska las 44
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.1156
  local_percentile      : 0.2890
  stop_local_score_raw  : -2.2100
  local_score_raw       : -1.6160
  hub_grade             : F
  hub_percentile        : 0.2890

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.9286
  transit_freq          : 0.9286
  stop_routes_count     : 1
  stop_routes           : 215
  stop_hub_share        : 1.0000
  hub_departures_h      : 0.9286
  hub_routes            : 215

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 7964.9363
  market_val            : 7964.9363
  stop_liquidity        : 0
  hub_market_val        : 7964.9363

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 0.0000
  pop_val               : 0.0000
  hub_pop_val           : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Krzemienica działki 04 (891e2b9a277ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Krzemienica działki 04
  stop_id               : 1355
  h3_index              : 891e2b9a277ffff
  hub_id                : 687
  hub_name              : Krzemienica działki 03
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.0578
  local_percentile      : 0.2168
  stop_local_score_raw  : -2.3421
  local_score_raw       : -1.6287
  hub_grade             : F
  hub_percentile        : 0.2168

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.4286
  transit_freq          : 0.8571
  stop_routes_count     : 1
  stop_routes           : 401
  stop_hub_share        : 0.5000
  hub_departures_h      : 0.8571
  hub_routes            : 401

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 7964.9363
  market_val            : 7964.9363
  stop_liquidity        : 0
  hub_market_val        : 7964.9363

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 0.0000
  pop_val               : 0.0000
  hub_pop_val           : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Kamień Krzywa Wieś / Markowska 11 (891e282b623ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Kamień Krzywa Wieś / Markowska 11
  stop_id               : 1038
  h3_index              : 891e282b623ffff
  hub_id                : 393
  hub_name              : Kamień Krzywa Wieś / Markowska 12
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 19.8190
  local_percentile      : 0.1445
  stop_local_score_raw  : -0.5420
  local_score_raw       : -1.6479
  hub_grade             : F
  hub_percentile        : 0.1445

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 48934.0962
  infra_score           : 0.0000
  stop_raw_gravity      : 28521.1607
  stop_entropy          : 0.7157
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.8571
  transit_freq          : 0.0000
  stop_routes_count     : 1
  stop_routes           : 61
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 7964.9363
  market_val            : 7964.9363
  stop_liquidity        : 0
  hub_market_val        : 7964.9363

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 139.0095
  pop_val               : 2.7591
  hub_pop_val           : 2.7591

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Łowisko rondo 01 (891e282b023ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Łowisko rondo 01
  stop_id               : 1012
  h3_index              : 891e282b023ffff
  hub_id                : 801
  hub_name              : Łowisko rondo 02
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 11.9992
  local_percentile      : 0.0723
  stop_local_score_raw  : -0.8331
  local_score_raw       : -1.6650
  hub_grade             : F
  hub_percentile        : 0.0723

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 1019142.2076
  infra_score           : 0.0000
  stop_raw_gravity      : 1019142.2076
  stop_entropy          : -0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 1.2143
  transit_freq          : 0.0000
  stop_routes_count     : 2
  stop_routes           : 51, 215
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 7964.9363
  market_val            : 7964.9363
  stop_liquidity        : 0
  hub_market_val        : 7964.9363

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 2.4818
  pop_val               : 2.3342
  hub_pop_val           : 2.3342

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>

---

## SUWALKI
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: -0.000, Std: 0.706)
     Rozkład Kartek (unikalne Huby): A: 22, A+: 12, B: 33, C: 45, D: 55, F: 55
[👥 BAZA LUDNOŚCI GUS] ✅ DEMOGRAFIA OK (Odchylenie zaledwie 6.3%)
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
[✅]  H3 Res 8 Grid 100% Valid (285 komórek, 14 pustyń transportowych)
```

### Faza 0: Statystyki ogólne
- **Populacja Miasta:** 74,387 (GUS Grid)
- **Transakcje RCN:** 1,306

### Faza III: Top 20 POI (Miasto)

| Kategoria | Tier | Ilość w Mieście | Wartość Punktowa (W) |
|---|---|---|---|
| `hospital_clinical` | T1_NATIONAL_MAGNET | 1 | 21,788,885 |
| `national_stadium` | T1_NATIONAL_MAGNET | 4 | 19,341,933 |
| `university_campus` | T1_NATIONAL_MAGNET | 1 | 18,611,333 |
| `regional_rail_hub` | T1_NATIONAL_MAGNET | 2 | 5,772,291 |
| `commercial_zone` | T2_STRATEGIC_HUB | 13 | 4,447,805 |
| `industrial_zone` | T2_STRATEGIC_HUB | 50 | 4,425,489 |
| `shopping_mall` | T2_STRATEGIC_HUB | 11 | 2,939,661 |
| `supermarket` | T2_STRATEGIC_HUB | 33 | 2,383,169 |
| `government_central` | T2_STRATEGIC_HUB | 18 | 2,355,203 |
| `business_office` | T2_STRATEGIC_HUB | 4 | 2,116,957 |
| `marketplace` | T3_LOCAL_CORE | 2 | 947,537 |
| `education_high_school` | T3_LOCAL_CORE | 26 | 692,741 |
| `social_support_mops` | T3_LOCAL_CORE | 2 | 578,089 |
| `culture_theatre` | T3_LOCAL_CORE | 3 | 472,114 |
| `sports_centre` | T3_LOCAL_CORE | 8 | 470,669 |
| `health_clinic` | T3_LOCAL_CORE | 17 | 319,732 |
| `car_services` | T4_DAILY_SERVICE | 25 | 90,656 |
| `police_station` | T4_DAILY_SERVICE | 2 | 90,359 |
| `post_office` | T4_DAILY_SERVICE | 5 | 75,816 |
| `local_airfield` | T5_SPEC_GASTRO | 1 | 73,389 |

### Faza IV: Próbki Pełnego DNA 100% (Zobacz szczegóły POI!)

#### NAJLEPSZE PRZYSTANKI (TOP 5)
<details><summary><b>Kowalskiego / MERK (01) (891f42d18dbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Kowalskiego / MERK (01)
  stop_id               : 13
  h3_index              : 891f42d18dbffff
  hub_id                : 185
  hub_name              : Kowalskiego / MERK (01)
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : C
  grade                 : A+
  stop_percentile       : 53.1532
  local_percentile      : 100.0000
  stop_local_score_raw  : 0.1638
  local_score_raw       : 1.4370
  hub_grade             : A+
  hub_percentile        : 100.0000

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 2406747.0277
  infra_score           : 3578273.4355
  stop_raw_gravity      : 1124234.1318
  stop_entropy          : 1.1408
  hub_infra_score       : 3578273.4355

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.2143
  transit_freq          : 18.2143
  stop_routes_count     : 1
  stop_routes           : 27 P
  stop_hub_share        : 0.0118
  hub_departures_h      : 18.2143
  hub_routes            : 2, 5, 6, 7, 11, 14, 15, 16, 17, 18, 19, 20, 21, 27 P

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6067.0292
  market_val            : 6067.0292
  stop_liquidity        : 0
  hub_market_val        : 6067.0292

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 770.2089
  pop_val               : 1357.4597
  hub_pop_val           : 1357.4597

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 23x micro_playground
  > 9x specialized_retail
  > 7x park_recreation
  > 4x micro_parcel_locker
  > 3x education_high_school
  > 3x car_services
  > 3x supermarket
  > 3x shopping_mall
  > 2x pharmacy
  > 2x gastronomy
  > 1x micro_atm
  > 1x health_clinic
  > 1x personal_services
  > 1x national_stadium

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : Bankomat BZ WBK
    - education_high_school  : Szkoła Podstawowa nr 7
    - micro_parcel_locker    : Paczkomat InPost
    - car_services           : Auto-Szyby-Alarmy
    - health_clinic          : Klinika Implantologiczna
    - supermarket            : Biedronka
    - specialized_retail     : RTV Euro AGD
    - personal_services      : Rossmann
    - pharmacy               : Dbam o Zdrowie (Doz)
    - specialized_retail     : Media Expert
    - specialized_retail     : Sinsay
    - micro_parcel_locker    : Paczkomat InPost
```
</details>
<details><summary><b>Pułaskiego / Chopina (08) (891f42d18cbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Pułaskiego / Chopina (08)
  stop_id               : 458
  h3_index              : 891f42d18cbffff
  hub_id                : 61
  hub_name              : Pułaskiego / Chopina (08)
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 98.7988
  local_percentile      : 99.5495
  stop_local_score_raw  : 1.3494
  local_score_raw       : 1.4061
  hub_grade             : A+
  hub_percentile        : 99.5495

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 761022.1577
  infra_score           : 1252053.5712
  stop_raw_gravity      : 301254.7947
  stop_entropy          : 1.5262
  hub_infra_score       : 1252053.5712

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 10.6429
  transit_freq          : 19.6429
  stop_routes_count     : 15
  stop_routes           : 2, 4, 5, 6, 7, 10, 14, 15, 16, 17, 18, 19, 20, 21, 24
  stop_hub_share        : 0.5418
  hub_departures_h      : 19.6429
  hub_routes            : 2, 4, 5, 6, 7, 10, 14, 15, 16, 17, 18, 19, 20, 21, 24

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6067.0292
  market_val            : 6067.0292
  stop_liquidity        : 0
  hub_market_val        : 6067.0292

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 894.7772
  pop_val               : 1408.0436
  hub_pop_val           : 1408.0436

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 26x micro_playground
  > 7x park_recreation
  > 4x supermarket
  > 3x education_high_school
  > 3x micro_parcel_locker
  > 3x car_services
  > 2x pharmacy
  > 2x gastronomy
  > 1x micro_atm
  > 1x personal_services
  > 1x national_stadium
  > 1x place_of_worship
  > 1x post_office
  > 1x health_clinic

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : Bankomat BZ WBK
    - education_high_school  : Szkoła Podstawowa nr 7
    - micro_parcel_locker    : Paczkomat InPost
    - car_services           : Auto-Szyby-Alarmy
    - pharmacy               : Dbam o Zdrowie (Doz)
    - gastronomy             : Bar Koko
    - micro_parcel_locker    : Paczkomat InPost
    - pharmacy               : Arnika
    - supermarket            : Lewiatan
    - micro_parcel_locker    : Appkomat InPost
    - supermarket            : Kaufland
    - supermarket            : Sabo - Stobud
```
</details>
<details><summary><b>Kowalskiego / Paca (04) (891f42d1eafffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Kowalskiego / Paca (04)
  stop_id               : 14
  h3_index              : 891f42d1eafffff
  hub_id                : 21
  hub_name              : Kowalskiego / Paca (04)
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 97.5976
  local_percentile      : 99.0991
  stop_local_score_raw  : 1.2952
  local_score_raw       : 1.3497
  hub_grade             : A+
  hub_percentile        : 99.0991

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 587968.3556
  infra_score           : 864708.8584
  stop_raw_gravity      : 225262.7877
  stop_entropy          : 1.6101
  hub_infra_score       : 864708.8584

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 9.7857
  transit_freq          : 18.1429
  stop_routes_count     : 14
  stop_routes           : 2, 5, 6, 7, 11, 14, 15, 16, 17, 18, 19, 20, 21, 27 P
  stop_hub_share        : 0.5394
  hub_departures_h      : 18.1429
  hub_routes            : 2, 5, 6, 7, 11, 14, 15, 16, 17, 18, 19, 20, 21, 27 P

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6067.0292
  market_val            : 6067.0292
  stop_liquidity        : 0
  hub_market_val        : 6067.0292

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 943.3810
  pop_val               : 1464.9806
  hub_pop_val           : 1464.9806

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 24x micro_playground
  > 8x park_recreation
  > 6x micro_parcel_locker
  > 3x convenience_store
  > 3x health_clinic
  > 3x supermarket
  > 2x education_high_school
  > 2x personal_services
  > 2x pharmacy
  > 2x national_stadium
  > 2x place_of_worship
  > 2x shopping_mall
  > 1x specialized_retail
  > 1x education_preschool
  > 1x gastronomy

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - education_high_school  : Szkoła Podstawowa nr 7
    - convenience_store      : ABC
    - health_clinic          : Prywatna przychodnia
    - health_clinic          : Klinika Implantologiczna
    - convenience_store      : Groszek
    - specialized_retail     : Dealz
    - personal_services      : Hebe
    - micro_parcel_locker    : Paczkomat InPost
    - micro_parcel_locker    : Paczkomat InPost
    - micro_parcel_locker    : Paczkomat InPost
    - micro_parcel_locker    : Paczkomat InPost
    - pharmacy               : Apteka (W. Korzeniowski)
```
</details>
<details><summary><b>Świerkowa / Rondo (03) (891f42d1a97ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Świerkowa / Rondo (03)
  stop_id               : 70
  h3_index              : 891f42d1a97ffff
  hub_id                : 41
  hub_name              : Nowomiejska / Świerkowa (01)
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A
  grade                 : A+
  stop_percentile       : 94.8949
  local_percentile      : 98.6486
  stop_local_score_raw  : 1.1216
  local_score_raw       : 1.3312
  hub_grade             : A+
  hub_percentile        : 98.6486

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 1243382.0630
  infra_score           : 2590403.7747
  stop_raw_gravity      : 663006.8856
  stop_entropy          : 0.8754
  hub_infra_score       : 2590403.7747

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 6.7857
  transit_freq          : 15.2857
  stop_routes_count     : 9
  stop_routes           : 6, 7, 16, 17, 18, 19, 20, 21, 24
  stop_hub_share        : 0.4439
  hub_departures_h      : 15.2857
  hub_routes            : 1, 2, 6, 7, 15, 16, 17, 18, 19, 20, 21, 24

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6067.0292
  market_val            : 6067.0292
  stop_liquidity        : 0
  hub_market_val        : 6067.0292

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 597.1700
  pop_val               : 1272.2275
  hub_pop_val           : 1272.2275

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 21x micro_playground
  > 4x government_central
  > 3x supermarket
  > 3x micro_parcel_locker
  > 2x micro_atm
  > 2x pharmacy
  > 1x specialized_retail
  > 1x health_clinic
  > 1x education_preschool
  > 1x police_station
  > 1x place_of_worship
  > 1x car_services
  > 1x gastronomy
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : Bankomat Cash4You
    - supermarket            : Delikatesy Centrum
    - supermarket            : Biedronka
    - supermarket            : Lewiatan
    - specialized_retail     : JYSK
    - micro_playground       : urządzenie do Boulderingu
    - health_clinic          : Melius Centrum Rehabilitacji
    - government_central     : Prokuratura Okręgowa w Suwałkach
    - micro_parcel_locker    : Paczkomat InPost
    - pharmacy               : Dbam o Zdrowie (Doz)
    - micro_parcel_locker    : Appkomat InPost
    - pharmacy               : Apteka Z Różą
```
</details>
<details><summary><b>Noniewicza / Wigry (06) (891f42d1a1bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Noniewicza / Wigry (06)
  stop_id               : 17
  h3_index              : 891f42d1a1bffff
  hub_id                : 78
  hub_name              : Noniewicza / Stokrotka (05)
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 95.1952
  local_percentile      : 98.1982
  stop_local_score_raw  : 1.1369
  local_score_raw       : 1.2998
  hub_grade             : A+
  hub_percentile        : 98.1982

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 2105653.2569
  infra_score           : 3122817.0712
  stop_raw_gravity      : 965219.1561
  stop_entropy          : 1.1815
  hub_infra_score       : 3122817.0712

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 6.5000
  transit_freq          : 15.0000
  stop_routes_count     : 7
  stop_routes           : 2, 4, 7, 8, 14, 18, 24
  stop_hub_share        : 0.4333
  hub_departures_h      : 15.0000
  hub_routes            : 2, 3, 4, 5, 6, 7, 8, 10, 11, 14, 16, 18, 23, 24

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6067.0292
  market_val            : 6067.0292
  stop_liquidity        : 0
  hub_market_val        : 6067.0292

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 604.4882
  pop_val               : 867.2587
  hub_pop_val           : 867.2587

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 39x specialized_retail
  > 25x gastronomy
  > 20x micro_playground
  > 19x personal_services
  > 10x bank
  > 10x pharmacy
  > 8x micro_atm
  > 6x park_recreation
  > 5x convenience_store
  > 4x micro_parcel_locker
  > 3x health_clinic
  > 3x government_central
  > 3x education_high_school
  > 3x shopping_mall
  > 2x education_preschool
  > 2x supermarket
  > 2x post_office
  > 2x place_of_worship
  > 1x police_station
  > 1x culture_theatre
  > 1x car_services

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : Bankomat Cash4You
    - micro_atm              : Bankomat Cash4You
    - bank                   : Bank BPS
    - bank                   : Bank Spółdzielczy
    - gastronomy             : Gruby Benek
    - convenience_store      : Eden
    - gastronomy             : Naleśnikarnia
    - gastronomy             : Wilniuk
    - specialized_retail     : Szmizjerka
    - gastronomy             : Al Capone
    - gastronomy             : Emmi
    - micro_parcel_locker    : Paczkomat InPost
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Pułaskiego / Studzieniczne (16) (891f42d0367ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Pułaskiego / Studzieniczne (16)
  stop_id               : 121
  h3_index              : 891f42d0367ffff
  hub_id                : 69
  hub_name              : Pułaskiego / Studzieniczne (16)
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 1.8018
  local_percentile      : 2.2523
  stop_local_score_raw  : -1.2566
  local_score_raw       : -1.3556
  hub_grade             : F
  hub_percentile        : 2.2523

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.2143
  transit_freq          : 0.2143
  stop_routes_count     : 1
  stop_routes           : 10
  stop_hub_share        : 1.0000
  hub_departures_h      : 0.2143
  hub_routes            : 10

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6067.0292
  market_val            : 6067.0292
  stop_liquidity        : 0
  hub_market_val        : 6067.0292

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 5.3854
  pop_val               : 5.3854
  hub_pop_val           : 5.3854

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Biała Woda / Skrzyżowanie 04 (891f42d024fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Biała Woda / Skrzyżowanie 04
  stop_id               : 488
  h3_index              : 891f42d024fffff
  hub_id                : 200
  hub_name              : Biała Woda / Skrzyżowanie 04
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 1.5015
  local_percentile      : 1.8018
  stop_local_score_raw  : -1.2822
  local_score_raw       : -1.3614
  hub_grade             : F
  hub_percentile        : 1.8018

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.1429
  transit_freq          : 0.1429
  stop_routes_count     : 1
  stop_routes           : 5
  stop_hub_share        : 1.0000
  hub_departures_h      : 0.1429
  hub_routes            : 5

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6067.0292
  market_val            : 6067.0292
  stop_liquidity        : 0
  hub_market_val        : 6067.0292

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 5.9383
  pop_val               : 7.2097
  hub_pop_val           : 7.2097

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Pułaskiego / Osinki (14) (891f42d1dd3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Pułaskiego / Osinki (14)
  stop_id               : 120
  h3_index              : 891f42d1dd3ffff
  hub_id                : 217
  hub_name              : Pułaskiego / Osinki (14)
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 1.2012
  local_percentile      : 1.3514
  stop_local_score_raw  : -1.2905
  local_score_raw       : -1.3887
  hub_grade             : F
  hub_percentile        : 1.3514

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.2143
  transit_freq          : 0.2143
  stop_routes_count     : 1
  stop_routes           : 10
  stop_hub_share        : 1.0000
  hub_departures_h      : 0.2143
  hub_routes            : 10

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6067.0292
  market_val            : 6067.0292
  stop_liquidity        : 0
  hub_market_val        : 6067.0292

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 3.4576
  pop_val               : 3.4576
  hub_pop_val           : 3.4576

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Wychodne / Trzciane 18 P (891f42dae5bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Wychodne / Trzciane 18 P
  stop_id               : 170
  h3_index              : 891f42dae5bffff
  hub_id                : 91
  hub_name              : Wychodne / Trzciane 18 P
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.9009
  local_percentile      : 0.9009
  stop_local_score_raw  : -1.3152
  local_score_raw       : -1.4128
  hub_grade             : F
  hub_percentile        : 0.9009

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.2143
  transit_freq          : 0.2143
  stop_routes_count     : 1
  stop_routes           : 3
  stop_hub_share        : 1.0000
  hub_departures_h      : 0.2143
  hub_routes            : 3

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6067.0292
  market_val            : 6067.0292
  stop_liquidity        : 0
  hub_market_val        : 6067.0292

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 2.4310
  pop_val               : 2.4310
  hub_pop_val           : 2.4310

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Zielone Kamedulskie Os. (891f42daab7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Zielone Kamedulskie Os.
  stop_id               : 129
  h3_index              : 891f42daab7ffff
  hub_id                : 31
  hub_name              : Zielone Kamedulskie Os.
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.6006
  local_percentile      : 0.4505
  stop_local_score_raw  : -1.3461
  local_score_raw       : -1.4217
  hub_grade             : F
  hub_percentile        : 0.4505

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.4286
  transit_freq          : 0.4286
  stop_routes_count     : 1
  stop_routes           : 3
  stop_hub_share        : 1.0000
  hub_departures_h      : 0.4286
  hub_routes            : 3

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 3993.0556
  market_val            : 3993.0556
  stop_liquidity        : 9
  hub_market_val        : 3993.0556

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 293.0000
  pop_val               : 293.0000
  hub_pop_val           : 293.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>

---

## SWINOUJSCIE
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ⚠️ Z-Score ODD DIST (Mean: -0.000, Std: 0.480)
     Rozkład Kartek (unikalne Huby): A: 12, A+: 6, B: 17, C: 24, D: 29, F: 28
[👥 BAZA LUDNOŚCI GUS] ✅ DEMOGRAFIA OK (Odchylenie zaledwie 0.5%)
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
[✅]  H3 Res 8 Grid 100% Valid (193 komórek, 23 pustyń transportowych)
```

### Faza 0: Statystyki ogólne
- **Populacja Miasta:** 40,200 (GUS Grid)
- **Transakcje RCN:** 5,875

### Faza III: Top 20 POI (Miasto)

| Kategoria | Tier | Ilość w Mieście | Wartość Punktowa (W) |
|---|---|---|---|
| `national_rail_hub` | T0_MEGA_HUB | 2 | 27,385,370 |
| `hospital_clinical` | T1_NATIONAL_MAGNET | 1 | 17,435,993 |
| `logistics_hub` | T2_STRATEGIC_HUB | 1 | 4,315,855 |
| `industrial_zone` | T2_STRATEGIC_HUB | 33 | 4,009,197 |
| `commercial_zone` | T2_STRATEGIC_HUB | 11 | 3,394,042 |
| `shopping_mall` | T2_STRATEGIC_HUB | 5 | 3,059,627 |
| `student_dormitory` | T2_STRATEGIC_HUB | 1 | 3,036,013 |
| `supermarket` | T2_STRATEGIC_HUB | 19 | 1,902,328 |
| `government_central` | T2_STRATEGIC_HUB | 11 | 1,760,139 |
| `business_office` | T2_STRATEGIC_HUB | 7 | 1,638,707 |
| `education_high_school` | T3_LOCAL_CORE | 15 | 735,412 |
| `marketplace` | T3_LOCAL_CORE | 1 | 709,766 |
| `social_support_mops` | T3_LOCAL_CORE | 4 | 655,546 |
| `sports_centre` | T3_LOCAL_CORE | 3 | 500,237 |
| `culture_theatre` | T3_LOCAL_CORE | 5 | 376,538 |
| `health_clinic` | T3_LOCAL_CORE | 10 | 308,733 |
| `education_preschool` | T4_DAILY_SERVICE | 9 | 120,237 |
| `police_station` | T4_DAILY_SERVICE | 4 | 93,133 |
| `car_services` | T4_DAILY_SERVICE | 12 | 68,744 |
| `post_office` | T4_DAILY_SERVICE | 5 | 68,365 |

### Faza IV: Próbki Pełnego DNA 100% (Zobacz szczegóły POI!)

#### NAJLEPSZE PRZYSTANKI (TOP 5)
<details><summary><b>Wieża widokowa (891f0ec714bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Wieża widokowa
  stop_id               : 114
  h3_index              : 891f0ec714bffff
  hub_id                : 11
  hub_name              : Wieża widokowa
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 100.0000
  local_percentile      : 100.0000
  stop_local_score_raw  : 0.6249
  local_score_raw       : 0.5665
  hub_grade             : A+
  hub_percentile        : 100.0000

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 3476505.2149
  infra_score           : 4348486.0416
  stop_raw_gravity      : 1710067.3222
  stop_entropy          : 1.0330
  hub_infra_score       : 4348486.0416

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 16459.7262
  market_val            : 16459.7262
  stop_liquidity        : 227
  hub_market_val        : 16459.7262

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 527.4083
  pop_val               : 689.2559
  hub_pop_val           : 689.2559

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 14x specialized_retail
  > 11x gastronomy
  > 9x personal_services
  > 8x park_recreation
  > 7x micro_playground
  > 5x convenience_store
  > 4x government_central
  > 4x education_high_school
  > 3x pharmacy
  > 3x culture_theatre
  > 3x health_clinic
  > 3x place_of_worship
  > 3x police_station
  > 2x education_preschool
  > 2x supermarket
  > 1x bank
  > 1x micro_atm
  > 1x micro_parcel_locker
  > 1x post_office
  > 1x shopping_mall
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy             : Kurna Chata
    - gastronomy             : Neptun
    - gastronomy             : Zefir
    - bank                   : PKO BP
    - micro_atm              : Bank Pekao
    - gastronomy             : Z kur czy byk
    - education_preschool    : Aktywne Przedszkole i Żłobek KOGUT
    - convenience_store      : Żabka
    - pharmacy               : Morska
    - specialized_retail     : H&M
    - specialized_retail     : Reserved
    - specialized_retail     : Medicine
```
</details>
<details><summary><b>Uzdrowiskowa (891f0ec7173ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Uzdrowiskowa
  stop_id               : 175
  h3_index              : 891f0ec7173ffff
  hub_id                : 15
  hub_name              : Uzdrowiskowa
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 99.4845
  local_percentile      : 99.1379
  stop_local_score_raw  : 0.6106
  local_score_raw       : 0.5181
  hub_grade             : A+
  hub_percentile        : 99.1379

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 2872154.2439
  infra_score           : 2870542.4641
  stop_raw_gravity      : 1392593.1422
  stop_entropy          : 1.0625
  hub_infra_score       : 2870542.4641

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 22476.3333
  market_val            : 22476.3333
  stop_liquidity        : 168
  hub_market_val        : 22476.3333

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 73.4184
  pop_val               : 73.5071
  hub_pop_val           : 73.5071

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 25x gastronomy
  > 4x convenience_store
  > 3x micro_atm
  > 2x specialized_retail
  > 2x micro_playground
  > 1x pharmacy
  > 1x micro_parcel_locker
  > 1x industrial_zone
  > 1x health_clinic
  > 1x park_recreation

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store      : Odido
    - gastronomy             : Costa Bravs
    - gastronomy             : Tu Dostaniesz Wypieków
    - convenience_store      : Żabka
    - gastronomy             : Czuć miętą
    - gastronomy             : Berlin Döner Kebap
    - gastronomy             : Mila
    - gastronomy             : Baila
    - gastronomy             : Truskawkawa
    - gastronomy             : Promenada
    - gastronomy             : Laguna
    - gastronomy             : Cassano
```
</details>
<details><summary><b>Szpital (891f0ec73a7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Szpital
  stop_id               : 209
  h3_index              : 891f0ec73a7ffff
  hub_id                : 43
  hub_name              : Szpital
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 97.9381
  local_percentile      : 98.2759
  stop_local_score_raw  : 0.5150
  local_score_raw       : 0.5082
  hub_grade             : A+
  hub_percentile        : 98.2759

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 5225725.6781
  infra_score           : 10289935.4336
  stop_raw_gravity      : 3763940.3542
  stop_entropy          : 0.3884
  hub_infra_score       : 10289935.4336

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 12989.9968
  market_val            : 12717.7700
  stop_liquidity        : 157
  hub_market_val        : 12717.7700

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 377.7527
  pop_val               : 669.2742
  hub_pop_val           : 669.2742

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 9x gastronomy
  > 9x park_recreation
  > 6x specialized_retail
  > 5x personal_services
  > 4x supermarket
  > 3x bank
  > 3x micro_atm
  > 3x convenience_store
  > 2x health_clinic
  > 2x micro_playground
  > 1x education_preschool
  > 1x pharmacy
  > 1x government_central
  > 1x place_of_worship
  > 1x micro_parcel_locker
  > 1x car_services
  > 1x industrial_zone
  > 1x hospital_clinical

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - bank                   : Bank Spółdzielczy
    - gastronomy             : Da Grasso
    - micro_atm              : Bank Pekao
    - convenience_store      : Żabka
    - convenience_store      : Żabka
    - education_preschool    : Niepubliczne przedszkole TYGRYSEK
    - specialized_retail     : Top Secret
    - gastronomy             : Magiczna Spiżarnia
    - micro_atm              : Euronet
    - gastronomy             : Koku Sushi
    - specialized_retail     : Bodzio
    - personal_services      : Elegance
```
</details>
<details><summary><b>Narutowicza (891f0ec714bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Narutowicza
  stop_id               : 186
  h3_index              : 891f0ec714bffff
  hub_id                : 53
  hub_name              : Narutowicza
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 98.9691
  local_percentile      : 97.4138
  stop_local_score_raw  : 0.5539
  local_score_raw       : 0.4996
  hub_grade             : A+
  hub_percentile        : 97.4138

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 1628695.9218
  infra_score           : 2016306.6476
  stop_raw_gravity      : 661887.2872
  stop_entropy          : 1.4607
  hub_infra_score       : 2016306.6476

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 17616.3324
  market_val            : 17616.3324
  stop_liquidity        : 243
  hub_market_val        : 17616.3324

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 330.9071
  pop_val               : 433.8836
  hub_pop_val           : 433.8836

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 12x park_recreation
  > 7x gastronomy
  > 7x micro_playground
  > 5x convenience_store
  > 4x government_central
  > 4x personal_services
  > 4x education_high_school
  > 3x police_station
  > 2x education_preschool
  > 2x place_of_worship
  > 2x sports_centre
  > 2x culture_theatre
  > 1x bank
  > 1x micro_atm
  > 1x health_clinic
  > 1x micro_parcel_locker
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy             : Kurna Chata
    - gastronomy             : Zefir
    - bank                   : PKO BP
    - gastronomy             : Z kur czy byk
    - education_preschool    : Aktywne Przedszkole i Żłobek KOGUT
    - convenience_store      : Żabka
    - government_central     : Areszt Śledczy w Świnoujściu
    - gastronomy             : Cafe Wieża
    - personal_services      : Looksus
    - convenience_store      : Delikatesy Zbyszko
    - gastronomy             : Qchnia
    - gastronomy             : Express Chicken
```
</details>
<details><summary><b>Chrobrego (891f0ec73a3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Chrobrego
  stop_id               : 184
  h3_index              : 891f0ec73a3ffff
  hub_id                : 86
  hub_name              : Chrobrego
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 96.3918
  local_percentile      : 96.5517
  stop_local_score_raw  : 0.5038
  local_score_raw       : 0.4903
  hub_grade             : A+
  hub_percentile        : 96.5517

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 4689467.3842
  infra_score           : 8230200.4598
  stop_raw_gravity      : 2489798.7227
  stop_entropy          : 0.8835
  hub_infra_score       : 8230200.4598

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 12184.9672
  market_val            : 12107.0911
  stop_liquidity        : 230
  hub_market_val        : 12107.0911

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 559.4938
  pop_val               : 942.7117
  hub_pop_val           : 942.7117

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 22x gastronomy
  > 17x park_recreation
  > 15x specialized_retail
  > 14x personal_services
  > 10x convenience_store
  > 7x bank
  > 5x micro_atm
  > 5x pharmacy
  > 5x health_clinic
  > 4x supermarket
  > 2x business_office
  > 2x place_of_worship
  > 2x micro_parcel_locker
  > 2x shopping_mall
  > 2x micro_playground
  > 1x education_preschool
  > 1x government_central
  > 1x culture_theatre
  > 1x car_services
  > 1x post_office
  > 1x industrial_zone
  > 1x hospital_clinical
  > 1x education_high_school

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - bank                   : Bank Spółdzielczy
    - gastronomy             : Da Grasso
    - gastronomy             : Neptun
    - gastronomy             : Costa
    - bank                   : PKO BP
    - micro_atm              : Bank Pekao
    - convenience_store      : Żabka
    - convenience_store      : Żabka
    - convenience_store      : Żabka
    - education_preschool    : Niepubliczne przedszkole TYGRYSEK
    - specialized_retail     : Top Secret
    - pharmacy               : Morska
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Przytór - Dworzec PKP (891f0ec438fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Przytór - Dworzec PKP
  stop_id               : 137
  h3_index              : 891f0ec438fffff
  hub_id                : 98
  hub_name              : Przytór - Dworzec PKP
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 4.6392
  local_percentile      : 4.3103
  stop_local_score_raw  : -1.2326
  local_score_raw       : -1.2434
  hub_grade             : F
  hub_percentile        : 4.3103

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 14111.9365
  market_val            : 14111.9365
  stop_liquidity        : 0
  hub_market_val        : 14111.9365

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 1.7907
  pop_val               : 1.7907
  hub_pop_val           : 1.7907

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Wolińska - Przystań Żeglarska (891f0ec4c47ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Wolińska - Przystań Żeglarska
  stop_id               : 139
  h3_index              : 891f0ec4c47ffff
  hub_id                : 7
  hub_name              : Wolińska - Przystań Żeglarska
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 2.5773
  local_percentile      : 2.5862
  stop_local_score_raw  : -1.3140
  local_score_raw       : -1.3217
  hub_grade             : F
  hub_percentile        : 2.5862

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 14111.9365
  market_val            : 14111.9365
  stop_liquidity        : 0
  hub_market_val        : 14111.9365

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 0.0000
  pop_val               : 0.0000
  hub_pop_val           : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Mostowa / Pomorska (891f0ec516bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Mostowa / Pomorska
  stop_id               : 87
  h3_index              : 891f0ec516bffff
  hub_id                : 80
  hub_name              : Mostowa / Pomorska
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 2.5773
  local_percentile      : 2.5862
  stop_local_score_raw  : -1.3140
  local_score_raw       : -1.3217
  hub_grade             : F
  hub_percentile        : 2.5862

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 14111.9365
  market_val            : 14111.9365
  stop_liquidity        : 0
  hub_market_val        : 14111.9365

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 0.0000
  pop_val               : 0.0000
  hub_pop_val           : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Barlickiego - Cargo PKP (891f0ec42b7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Barlickiego - Cargo PKP
  stop_id               : 34
  h3_index              : 891f0ec42b7ffff
  hub_id                : 95
  hub_name              : Barlickiego - Cargo PKP
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 2.5773
  local_percentile      : 2.5862
  stop_local_score_raw  : -1.3140
  local_score_raw       : -1.3217
  hub_grade             : F
  hub_percentile        : 2.5862

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 14111.9365
  market_val            : 14111.9365
  stop_liquidity        : 0
  hub_market_val        : 14111.9365

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 0.0000
  pop_val               : 0.0000
  hub_pop_val           : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Krzywa - Leśniczówka (891f0ec5457ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Krzywa - Leśniczówka
  stop_id               : 51
  h3_index              : 891f0ec5457ffff
  hub_id                : 91
  hub_name              : Krzywa - Leśniczówka
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 1.0309
  local_percentile      : 0.8621
  stop_local_score_raw  : -1.4891
  local_score_raw       : -1.4578
  hub_grade             : F
  hub_percentile        : 0.8621

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6135.4826
  market_val            : 6135.4826
  stop_liquidity        : 2
  hub_market_val        : 6135.4826

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 21.9684
  pop_val               : 40.2525
  hub_pop_val           : 40.2525

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>

---

## SZCZECIN
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: 0.000, Std: 0.689)
     Rozkład Kartek (unikalne Huby): A: 92, A+: 47, B: 139, C: 185, D: 231, F: 231
[👥 BAZA LUDNOŚCI GUS] ❌ OSTRZEŻENIE DEMOGRAFICZNE: Odchylenie 27.6%. GUS: 510,367 vs Baza: 400,000
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
[✅]  H3 Res 8 Grid 100% Valid (1,264 komórek, 106 pustyń transportowych)
```

### Faza 0: Statystyki ogólne
- **Populacja Miasta:** 510,367 (GUS Grid)
- **Transakcje RCN:** 45,297

### Faza III: Top 20 POI (Miasto)

| Kategoria | Tier | Ilość w Mieście | Wartość Punktowa (W) |
|---|---|---|---|
| `international_airport` | T0_MEGA_HUB | 1 | 196,486,037 |
| `national_rail_hub` | T0_MEGA_HUB | 6 | 34,787,083 |
| `hospital_clinical` | T1_NATIONAL_MAGNET | 11 | 25,500,442 |
| `national_stadium` | T1_NATIONAL_MAGNET | 6 | 22,894,411 |
| `university_campus` | T1_NATIONAL_MAGNET | 49 | 12,338,654 |
| `regional_rail_hub` | T1_NATIONAL_MAGNET | 2 | 7,138,297 |
| `industrial_zone` | T2_STRATEGIC_HUB | 591 | 4,344,955 |
| `commercial_zone` | T2_STRATEGIC_HUB | 275 | 4,143,465 |
| `logistics_hub` | T2_STRATEGIC_HUB | 2 | 4,123,915 |
| `shopping_mall` | T2_STRATEGIC_HUB | 40 | 3,883,196 |
| `supermarket` | T2_STRATEGIC_HUB | 207 | 2,605,895 |
| `government_central` | T2_STRATEGIC_HUB | 145 | 2,052,728 |
| `student_dormitory` | T2_STRATEGIC_HUB | 3 | 1,767,883 |
| `business_office` | T2_STRATEGIC_HUB | 315 | 1,687,038 |
| `education_high_school` | T3_LOCAL_CORE | 221 | 715,791 |
| `marketplace` | T3_LOCAL_CORE | 24 | 674,102 |
| `sports_centre` | T3_LOCAL_CORE | 105 | 597,352 |
| `social_support_mops` | T3_LOCAL_CORE | 75 | 518,360 |
| `culture_theatre` | T3_LOCAL_CORE | 57 | 419,360 |
| `health_clinic` | T3_LOCAL_CORE | 356 | 357,701 |

### Faza IV: Próbki Pełnego DNA 100% (Zobacz szczegóły POI!)

#### NAJLEPSZE PRZYSTANKI (TOP 5)
<details><summary><b>Plac Rodła 28 (891f0e795abffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Plac Rodła 28
  stop_id               : 11528
  h3_index              : 891f0e795abffff
  hub_id                : 12
  hub_name              : Plac Rodła 34
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : B
  grade                 : A+
  stop_percentile       : 84.0000
  local_percentile      : 100.0000
  stop_local_score_raw  : 0.6140
  local_score_raw       : 1.5278
  hub_grade             : A+
  hub_percentile        : 100.0000

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 2478504.1357
  infra_score           : 11153657.4978
  stop_raw_gravity      : 858325.4623
  stop_entropy          : 1.8876
  hub_infra_score       : 11153657.4978

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 8.5000
  transit_freq          : 154.2857
  stop_routes_count     : 1
  stop_routes           : 68
  stop_hub_share        : 0.0551
  hub_departures_h      : 154.2857
  hub_routes            : 1, 2, 3, 4, 5, 8, 10, 11, 58, 59, 68, 70, 74, 86, 90, 101, 107, A, B, C

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 7562.7676
  market_val            : 7554.3430
  stop_liquidity        : 614
  hub_market_val        : 7554.3430

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 207.8188
  pop_val               : 1248.0148
  hub_pop_val           : 1248.0148

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 90x specialized_retail
  > 79x gastronomy
  > 25x personal_services
  > 16x bank
  > 16x government_central
  > 15x convenience_store
  > 12x micro_parcel_locker
  > 10x micro_atm
  > 10x health_clinic
  > 9x pharmacy
  > 6x education_high_school
  > 6x micro_playground
  > 6x business_office
  > 5x supermarket
  > 5x education_preschool
  > 4x commercial_zone
  > 3x culture_theatre
  > 3x post_office
  > 3x place_of_worship
  > 2x university_campus
  > 2x shopping_mall
  > 2x sports_centre
  > 2x park_recreation
  > 1x social_support_mops
  > 1x car_services

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy             : Mak Kwak
    - convenience_store      : Żabka
    - gastronomy             : Spiżarnia Szczecińska
    - gastronomy             : El Tapatio
    - gastronomy             : Costa
    - supermarket            : Auchan
    - pharmacy               : Apteka z Sercem
    - gastronomy             : Pizza King
    - pharmacy               : Dom Leków
    - gastronomy             : Mała Tumska
    - gastronomy             : Karczma Pod Kogutem
    - pharmacy               : Zdrowie
```
</details>
<details><summary><b>Brama Portowa 22 (891f0e79577ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Brama Portowa 22
  stop_id               : 10822
  h3_index              : 891f0e79577ffff
  hub_id                : 45
  hub_name              : Brama Portowa 43
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 96.0563
  local_percentile      : 99.8919
  stop_local_score_raw  : 0.8818
  local_score_raw       : 1.4709
  hub_grade             : A+
  hub_percentile        : 99.8919

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 3384258.1856
  infra_score           : 20913398.7410
  stop_raw_gravity      : 1297133.0812
  stop_entropy          : 1.6090
  hub_infra_score       : 20913398.7410

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 20.0000
  transit_freq          : 132.6429
  stop_routes_count     : 4
  stop_routes           : 7, 8, 75, 76
  stop_hub_share        : 0.1508
  hub_departures_h      : 132.6429
  hub_routes            : 1, 2, 3, 7, 8, 9, 10, 52, 61, 75, 76, 87, A, B, C

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6864.1400
  market_val            : 6632.6531
  stop_liquidity        : 649
  hub_market_val        : 6632.6531

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 168.1793
  pop_val               : 1108.5560
  hub_pop_val           : 1108.5560

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 67x gastronomy
  > 63x specialized_retail
  > 23x personal_services
  > 23x health_clinic
  > 19x convenience_store
  > 16x bank
  > 15x micro_playground
  > 14x business_office
  > 13x micro_atm
  > 11x pharmacy
  > 11x government_central
  > 11x place_of_worship
  > 7x micro_parcel_locker
  > 7x park_recreation
  > 6x education_preschool
  > 5x post_office
  > 5x education_high_school
  > 5x university_campus
  > 4x culture_theatre
  > 4x supermarket
  > 4x shopping_mall
  > 4x commercial_zone
  > 2x car_services
  > 1x sports_centre
  > 1x marketplace

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy             : Turysta
    - culture_theatre        : Pionier 1907
    - car_services           : Orlen
    - gastronomy             : KFC
    - supermarket            : Netto
    - pharmacy               : Apteka z Sercem
    - convenience_store      : Żabka
    - convenience_store      : Żabka
    - micro_atm              : Pekao SA
    - bank                   : Bank Pekao
    - gastronomy             : Mama Indii
    - pharmacy               : Cefarm
```
</details>
<details><summary><b>Plac Kościuszki 41 (891f0e79553ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Plac Kościuszki 41
  stop_id               : 10441
  h3_index              : 891f0e79553ffff
  hub_id                : 72
  hub_name              : Plac Kościuszki 35
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : B
  grade                 : A+
  stop_percentile       : 83.2676
  local_percentile      : 99.7838
  stop_local_score_raw  : 0.6066
  local_score_raw       : 1.4608
  hub_grade             : A+
  hub_percentile        : 99.7838

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 1348062.0495
  infra_score           : 6151904.5930
  stop_raw_gravity      : 532022.6094
  stop_entropy          : 1.5338
  hub_infra_score       : 6151904.5930

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 9.1429
  transit_freq          : 131.2857
  stop_routes_count     : 2
  stop_routes           : 8, 10
  stop_hub_share        : 0.0696
  hub_departures_h      : 131.2857
  hub_routes            : 4, 7, 8, 9, 10, 61, 62, 70, 75, 90, 241, 242, 243, 811

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6520.0000
  market_val            : 6841.6106
  stop_liquidity        : 923
  hub_market_val        : 6841.6106

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 650.0736
  pop_val               : 3452.8575
  hub_pop_val           : 3452.8575

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 45x gastronomy
  > 43x specialized_retail
  > 35x personal_services
  > 16x convenience_store
  > 16x health_clinic
  > 12x park_recreation
  > 11x bank
  > 10x pharmacy
  > 7x education_high_school
  > 7x micro_atm
  > 7x micro_playground
  > 6x supermarket
  > 6x micro_parcel_locker
  > 5x business_office
  > 3x shopping_mall
  > 2x post_office
  > 2x sports_centre
  > 2x social_support_mops
  > 2x university_campus
  > 2x education_preschool
  > 1x culture_theatre
  > 1x government_central
  > 1x car_services
  > 1x place_of_worship

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - culture_theatre        : Helios
    - gastronomy             : Mak Kwak
    - gastronomy             : Prasad
    - gastronomy             : Green Way
    - supermarket            : Biedronka
    - convenience_store      : Żabka
    - pharmacy               : Centrum
    - supermarket            : Carrefour
    - specialized_retail     : Reserved
    - gastronomy             : China Town
    - gastronomy             : Bar Rab
    - gastronomy             : Mekong
```
</details>
<details><summary><b>Kołłątaja 15 (891f0e7b327ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Kołłątaja 15
  stop_id               : 12715
  h3_index              : 891f0e7b327ffff
  hub_id                : 33
  hub_name              : Kołłątaja 32
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A
  grade                 : A+
  stop_percentile       : 93.5211
  local_percentile      : 99.6757
  stop_local_score_raw  : 0.8080
  local_score_raw       : 1.4197
  hub_grade             : A+
  hub_percentile        : 99.6757

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 1969365.2316
  infra_score           : 7470648.5247
  stop_raw_gravity      : 698749.0306
  stop_entropy          : 1.8184
  hub_infra_score       : 7470648.5247

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 14.2857
  transit_freq          : 125.3571
  stop_routes_count     : 3
  stop_routes           : 69, 82, 89
  stop_hub_share        : 0.1140
  hub_departures_h      : 125.3571
  hub_routes            : 2, 3, 10, 11, 51, 53, 57, 60, 63, 67, 69, 78, 82, 87, 89, 92, 99, B

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6867.8460
  market_val            : 6923.1311
  stop_liquidity        : 747
  hub_market_val        : 6923.1311

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 534.3471
  pop_val               : 1865.9826
  hub_pop_val           : 1865.9826

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 19x specialized_retail
  > 17x gastronomy
  > 17x personal_services
  > 15x convenience_store
  > 11x micro_playground
  > 10x health_clinic
  > 7x pharmacy
  > 7x micro_parcel_locker
  > 7x park_recreation
  > 4x micro_atm
  > 4x supermarket
  > 4x bank
  > 3x post_office
  > 3x marketplace
  > 3x government_central
  > 3x business_office
  > 3x social_support_mops
  > 2x education_high_school
  > 2x place_of_worship
  > 1x car_services
  > 1x culture_theatre
  > 1x university_campus
  > 1x hospital_clinical
  > 1x sports_centre
  > 1x education_preschool

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store      : Żabka
    - convenience_store      : Żabka
    - convenience_store      : Żabka
    - gastronomy             : Pizza King
    - post_office            : Urząd Pocztowy Szczecin 5
    - marketplace            : Hala Piastowska
    - micro_atm              : Euronet
    - micro_atm              : Euronet
    - supermarket            : Netto
    - gastronomy             : Capri
    - supermarket            : Stokrotka
    - bank                   : PKO BP
```
</details>
<details><summary><b>Klonowica Zajezdnia 22 (891f0e7b2bbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Klonowica Zajezdnia 22
  stop_id               : 32622
  h3_index              : 891f0e7b2bbffff
  hub_id                : 151
  hub_name              : Klonowica Zajezdnia 22
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 100.0000
  local_percentile      : 99.5676
  stop_local_score_raw  : 1.2056
  local_score_raw       : 1.3455
  hub_grade             : A+
  hub_percentile        : 99.5676

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 6971533.6266
  infra_score           : 29432967.5245
  stop_raw_gravity      : 3621248.9114
  stop_entropy          : 0.9252
  hub_infra_score       : 29432967.5245

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 25.4286
  transit_freq          : 47.1429
  stop_routes_count     : 7
  stop_routes           : 53, 60, 75, 80, 222, 225, 227
  stop_hub_share        : 0.5394
  hub_departures_h      : 47.1429
  hub_routes            : 53, 60, 75, 80, 222, 225, 227

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 8487.1632
  market_val            : 8983.5729
  stop_liquidity        : 235
  hub_market_val        : 8983.5729

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 339.4321
  pop_val               : 1590.8952
  hub_pop_val           : 1590.8952

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 7x education_high_school
  > 7x government_central
  > 6x university_campus
  > 6x micro_playground
  > 5x gastronomy
  > 4x health_clinic
  > 4x car_services
  > 4x micro_parcel_locker
  > 4x commercial_zone
  > 3x park_recreation
  > 2x pharmacy
  > 2x micro_atm
  > 2x business_office
  > 2x personal_services
  > 2x specialized_retail
  > 2x industrial_zone
  > 1x post_office
  > 1x sports_centre
  > 1x convenience_store
  > 1x place_of_worship
  > 1x supermarket

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - pharmacy               : Dbam o Zdrowie
    - post_office            : Filia Urzędu Pocztowego Szczecin 43
    - education_high_school  : Publiczna Katolicka Szkoła Podstawowa im. św. Stanisława Kostki
    - pharmacy               : Gemini
    - micro_atm              : Bank Pekao
    - gastronomy             : Pizza Pasta i Basta
    - gastronomy             : Pod różami
    - government_central     : Instytut Pamięci Narodowej
    - government_central     : Zarząd Dróg i Transportu Miejskiego
    - business_office        : Tramwaje Szczecińskie
    - personal_services      : Beauty Bay
    - health_clinic          : Clinic dent
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Bolesławice (891f0e7067bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Bolesławice
  stop_id               : 112
  h3_index              : 891f0e7067bffff
  hub_id                : 767
  hub_name              : Bolesławice
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.3944
  local_percentile      : 0.5405
  stop_local_score_raw  : -2.1684
  local_score_raw       : -2.0246
  hub_grade             : F
  hub_percentile        : 0.5405

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6621.5027
  market_val            : 6621.5027
  stop_liquidity        : 0
  hub_market_val        : 6621.5027

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 3.7308
  pop_val               : 7.0000
  hub_pop_val           : 7.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Łozienica Ferma Gil nż. (891f0e718afffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Łozienica Ferma Gil nż.
  stop_id               : 87
  h3_index              : 891f0e718afffff
  hub_id                : 571
  hub_name              : Łozienica Ferma Gil nż.
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.4507
  local_percentile      : 0.4324
  stop_local_score_raw  : -2.1635
  local_score_raw       : -2.0628
  hub_grade             : F
  hub_percentile        : 0.4324

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6621.5027
  market_val            : 6621.5027
  stop_liquidity        : 0
  hub_market_val        : 6621.5027

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 4.0000
  pop_val               : 4.0000
  hub_pop_val           : 4.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Budno (891f0e75013ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Budno
  stop_id               : 21
  h3_index              : 891f0e75013ffff
  hub_id                : 855
  hub_name              : Budno
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.5634
  local_percentile      : 0.3243
  stop_local_score_raw  : -2.1550
  local_score_raw       : -2.0649
  hub_grade             : F
  hub_percentile        : 0.3243

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 3687.7689
  market_val            : 3687.7689
  stop_liquidity        : 1
  hub_market_val        : 3687.7689

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 120.5818
  pop_val               : 120.5818
  hub_pop_val           : 120.5818

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Żdżary skrzyż. nż. (891f0e70c57ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Żdżary skrzyż. nż.
  stop_id               : 95
  h3_index              : 891f0e70c57ffff
  hub_id                : 871
  hub_name              : Żdżary skrzyż. nż.
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.1127
  local_percentile      : 0.2162
  stop_local_score_raw  : -2.2341
  local_score_raw       : -2.0809
  hub_grade             : F
  hub_percentile        : 0.2162

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6621.5027
  market_val            : 6621.5027
  stop_liquidity        : 0
  hub_market_val        : 6621.5027

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 1.2557
  pop_val               : 3.0000
  hub_pop_val           : 3.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Grambow (891f0e4c237ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Grambow
  stop_id               : 179218
  h3_index              : 891f0e4c237ffff
  hub_id                : 479
  hub_name              : Grambow
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.0563
  local_percentile      : 0.1081
  stop_local_score_raw  : -2.3063
  local_score_raw       : -2.1933
  hub_grade             : F
  hub_percentile        : 0.1081

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6621.5027
  market_val            : 6621.5027
  stop_liquidity        : 0
  hub_market_val        : 6621.5027

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 0.0000
  pop_val               : 0.0000
  hub_pop_val           : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>

---

## TORUN
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ⚠️ Z-Score ODD DIST (Mean: -0.000, Std: 0.457)
     Rozkład Kartek (unikalne Huby): A: 45, A+: 23, B: 68, C: 90, D: 113, F: 112
[👥 BAZA LUDNOŚCI GUS] ❌ OSTRZEŻENIE DEMOGRAFICZNE: Odchylenie 30.7%. GUS: 248,382 vs Baza: 190,000
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
[✅]  H3 Res 8 Grid 100% Valid (657 komórek, 185 pustyń transportowych)
```

### Faza 0: Statystyki ogólne
- **Populacja Miasta:** 248,382 (GUS Grid)
- **Transakcje RCN:** 16,216

### Faza III: Top 20 POI (Miasto)

| Kategoria | Tier | Ilość w Mieście | Wartość Punktowa (W) |
|---|---|---|---|
| `national_rail_hub` | T0_MEGA_HUB | 1 | 33,982,577 |
| `national_stadium` | T1_NATIONAL_MAGNET | 3 | 23,409,173 |
| `hospital_clinical` | T1_NATIONAL_MAGNET | 11 | 17,926,938 |
| `university_campus` | T1_NATIONAL_MAGNET | 92 | 10,372,916 |
| `regional_rail_hub` | T1_NATIONAL_MAGNET | 6 | 6,517,688 |
| `industrial_zone` | T2_STRATEGIC_HUB | 598 | 3,997,439 |
| `shopping_mall` | T2_STRATEGIC_HUB | 22 | 3,667,996 |
| `commercial_zone` | T2_STRATEGIC_HUB | 516 | 3,509,087 |
| `supermarket` | T2_STRATEGIC_HUB | 112 | 2,310,347 |
| `government_central` | T2_STRATEGIC_HUB | 90 | 1,838,270 |
| `business_office` | T2_STRATEGIC_HUB | 92 | 1,627,667 |
| `education_high_school` | T3_LOCAL_CORE | 111 | 727,683 |
| `marketplace` | T3_LOCAL_CORE | 9 | 587,538 |
| `social_support_mops` | T3_LOCAL_CORE | 40 | 579,325 |
| `sports_centre` | T3_LOCAL_CORE | 71 | 562,025 |
| `culture_theatre` | T3_LOCAL_CORE | 38 | 409,865 |
| `health_clinic` | T3_LOCAL_CORE | 298 | 326,954 |
| `education_preschool` | T4_DAILY_SERVICE | 94 | 113,376 |
| `local_airfield` | T5_SPEC_GASTRO | 1 | 90,103 |
| `police_station` | T4_DAILY_SERVICE | 8 | 86,976 |

### Faza IV: Próbki Pełnego DNA 100% (Zobacz szczegóły POI!)

#### NAJLEPSZE PRZYSTANKI (TOP 5)
<details><summary><b>Świętopełka (891f56528bbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Świętopełka
  stop_id               : 8702
  h3_index              : 891f56528bbffff
  hub_id                : 149
  hub_name              : Świętopełka
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 99.5423
  local_percentile      : 100.0000
  stop_local_score_raw  : 0.5357
  local_score_raw       : 0.5911
  hub_grade             : A+
  hub_percentile        : 100.0000

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 12832215.3609
  infra_score           : 33046938.1519
  stop_raw_gravity      : 4806117.6880
  stop_entropy          : 1.6700
  hub_infra_score       : 33046938.1519

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 7029.9728
  market_val            : 6994.9063
  stop_liquidity        : 373
  hub_market_val        : 6994.9063

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 880.7936
  pop_val               : 2309.8897
  hub_pop_val           : 2309.8897

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 25x personal_services
  > 25x micro_playground
  > 21x park_recreation
  > 16x health_clinic
  > 13x micro_parcel_locker
  > 12x specialized_retail
  > 12x business_office
  > 10x post_office
  > 7x supermarket
  > 7x gastronomy
  > 6x micro_atm
  > 6x convenience_store
  > 6x commercial_zone
  > 5x pharmacy
  > 4x sports_centre
  > 4x education_high_school
  > 4x university_campus
  > 3x car_services
  > 3x industrial_zone
  > 2x education_preschool
  > 1x culture_theatre
  > 1x bank
  > 1x place_of_worship
  > 1x hospital_clinical
  > 1x national_stadium

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : Santander
    - supermarket            : Biedronka
    - supermarket            : Lidl
    - specialized_retail     : Pracownia Krawiectwa Męskiego
    - micro_atm              : PKO BP
    - post_office            : Poczta Polska
    - micro_atm              : Bitomat Bitcoin ATM
    - supermarket            : Biedronka
    - pharmacy               : Puls Świętopełka
    - personal_services      : Zakład Fryzjerski
    - gastronomy             : Restauracja Olimpia
    - health_clinic          : Lux Med
```
</details>
<details><summary><b>Garbaty Mostek (891f5652807ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Garbaty Mostek
  stop_id               : 2804
  h3_index              : 891f5652807ffff
  hub_id                : 283
  hub_name              : Garbaty Mostek
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 99.6568
  local_percentile      : 99.7783
  stop_local_score_raw  : 0.5587
  local_score_raw       : 0.5873
  hub_grade             : A+
  hub_percentile        : 99.7783

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 8070165.7949
  infra_score           : 18679830.1389
  stop_raw_gravity      : 2974172.7545
  stop_entropy          : 1.7134
  hub_infra_score       : 18679830.1389

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 7324.3647
  market_val            : 7308.8788
  stop_liquidity        : 415
  hub_market_val        : 7308.8788

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 1423.3400
  pop_val               : 3101.4580
  hub_pop_val           : 3101.4580

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 24x micro_playground
  > 11x personal_services
  > 9x micro_parcel_locker
  > 9x post_office
  > 6x health_clinic
  > 6x convenience_store
  > 5x specialized_retail
  > 4x supermarket
  > 4x pharmacy
  > 4x park_recreation
  > 3x gastronomy
  > 3x industrial_zone
  > 2x sports_centre
  > 2x place_of_worship
  > 2x national_stadium
  > 2x education_high_school
  > 2x university_campus
  > 1x car_services
  > 1x micro_atm
  > 1x hospital_clinical
  > 1x education_preschool

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - supermarket            : Biedronka
    - health_clinic          : TORMED Sp. z o.o.
    - supermarket            : Torimpex
    - gastronomy             : Rabarbar
    - pharmacy               : Apteka Prima
    - health_clinic          : Nasz Lekarz
    - micro_parcel_locker    : Paczkomat InPost
    - pharmacy               : Apteka Bliska Tobie
    - pharmacy               : Dbam o Zdrowie
    - convenience_store      : Żabka
    - personal_services      : Wojno team
    - personal_services      : Awangarda
```
</details>
<details><summary><b>Plac Rapackiego (891f5652a87ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Plac Rapackiego
  stop_id               : 202
  h3_index              : 891f5652a87ffff
  hub_id                : 83
  hub_name              : Plac Rapackiego
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 98.3982
  local_percentile      : 99.5565
  stop_local_score_raw  : 0.4866
  local_score_raw       : 0.5348
  hub_grade             : A+
  hub_percentile        : 99.5565

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 9928674.1267
  infra_score           : 27561591.7926
  stop_raw_gravity      : 5635403.2087
  stop_entropy          : 0.7618
  hub_infra_score       : 27561591.7926

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 7134.3676
  market_val            : 7111.8986
  stop_liquidity        : 218
  hub_market_val        : 7111.8986

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 638.3447
  pop_val               : 1406.1365
  hub_pop_val           : 1406.1365

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 86x gastronomy
  > 61x park_recreation
  > 20x personal_services
  > 17x specialized_retail
  > 16x government_central
  > 12x health_clinic
  > 9x micro_atm
  > 9x university_campus
  > 8x bank
  > 7x commercial_zone
  > 6x convenience_store
  > 6x place_of_worship
  > 5x culture_theatre
  > 4x micro_playground
  > 3x marketplace
  > 3x micro_parcel_locker
  > 3x sports_centre
  > 1x pharmacy
  > 1x supermarket
  > 1x social_support_mops
  > 1x education_high_school
  > 1x shopping_mall
  > 1x post_office

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : Euronet
    - micro_atm              : Euronet
    - micro_atm              : PKO BP
    - gastronomy             : Bar Panda
    - gastronomy             : Miś
    - pharmacy               : Centralna
    - gastronomy             : Little Egoist
    - gastronomy             : Pod arkadami
    - gastronomy             : Jasmin kebab
    - gastronomy             : krzywa caffe
    - gastronomy             : Manekin
    - micro_atm              : Euronet
```
</details>
<details><summary><b>Szosa Okrężna (891f5652ecfffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Szosa Okrężna
  stop_id               : 46802
  h3_index              : 891f5652ecfffff
  hub_id                : 113
  hub_name              : Szosa Okrężna
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A
  grade                 : A+
  stop_percentile       : 93.1350
  local_percentile      : 99.3348
  stop_local_score_raw  : 0.4285
  local_score_raw       : 0.5322
  hub_grade             : A+
  hub_percentile        : 99.3348

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 8750330.2410
  infra_score           : 34319873.2956
  stop_raw_gravity      : 7154297.3826
  stop_entropy          : 0.2231
  hub_infra_score       : 34319873.2956

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 7126.5678
  market_val            : 7126.5678
  stop_liquidity        : 399
  hub_market_val        : 7126.5678

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 402.0310
  pop_val               : 1104.7960
  hub_pop_val           : 1104.7960

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 57x park_recreation
  > 25x university_campus
  > 24x micro_playground
  > 16x gastronomy
  > 13x specialized_retail
  > 7x personal_services
  > 6x micro_parcel_locker
  > 5x convenience_store
  > 5x industrial_zone
  > 4x supermarket
  > 4x health_clinic
  > 3x micro_atm
  > 3x culture_theatre
  > 3x bank
  > 3x car_services
  > 3x education_high_school
  > 2x pharmacy
  > 2x sports_centre
  > 2x education_preschool
  > 2x commercial_zone
  > 1x marketplace
  > 1x post_office
  > 1x social_support_mops

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - supermarket            : POLOmarket
    - gastronomy             : Manekin
    - micro_atm              : PKO
    - micro_atm              : PKO BP
    - convenience_store      : Żabka
    - marketplace            : Targowisko
    - supermarket            : POLOmarket
    - culture_theatre        : Cinema City
    - gastronomy             : McDonald's
    - specialized_retail     : Media Expert
    - micro_atm              : Euronet
    - micro_parcel_locker    : Paczkomat InPost
```
</details>
<details><summary><b>Dekerta (891f56528c3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Dekerta
  stop_id               : 13101
  h3_index              : 891f56528c3ffff
  hub_id                : 300
  hub_name              : Dekerta
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 97.3684
  local_percentile      : 99.1131
  stop_local_score_raw  : 0.4799
  local_score_raw       : 0.5285
  hub_grade             : A+
  hub_percentile        : 99.1131

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 6454832.8912
  infra_score           : 19070342.1836
  stop_raw_gravity      : 2391423.0163
  stop_entropy          : 1.6992
  hub_infra_score       : 19070342.1836

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6928.4065
  market_val            : 6916.7332
  stop_liquidity        : 551
  hub_market_val        : 6916.7332

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 1010.2495
  pop_val               : 2101.2230
  hub_pop_val           : 2101.2230

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 99x park_recreation
  > 85x specialized_retail
  > 63x personal_services
  > 30x micro_playground
  > 27x health_clinic
  > 14x gastronomy
  > 13x commercial_zone
  > 10x convenience_store
  > 7x micro_parcel_locker
  > 7x education_high_school
  > 6x business_office
  > 6x government_central
  > 6x university_campus
  > 5x car_services
  > 5x education_preschool
  > 4x supermarket
  > 4x bank
  > 3x pharmacy
  > 2x post_office
  > 2x shopping_mall
  > 1x police_station
  > 1x culture_theatre
  > 1x sports_centre
  > 1x marketplace
  > 1x hospital_clinical
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - supermarket            : Torimpex
    - police_station         : Komisariat Sródmiescie
    - convenience_store      : abc
    - convenience_store      : Żabka
    - convenience_store      : Żabka
    - car_services           : Watis
    - bank                   : ING Bank Śląski
    - convenience_store      : Żabka
    - supermarket            : Biedronka
    - health_clinic          : Gabinet stomatologiczny Dziuba-Szwed
    - personal_services      : Platinum
    - personal_services      : Chantal Sylwia Borowa
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Złotoria I (891f5657237ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Złotoria I
  stop_id               : 99057
  h3_index              : 891f5657237ffff
  hub_id                : 19
  hub_name              : Złotoria I
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 1.1442
  local_percentile      : 1.1086
  stop_local_score_raw  : -1.4703
  local_score_raw       : -1.4571
  hub_grade             : F
  hub_percentile        : 1.1086

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 4264.3923
  market_val            : 4264.3923
  stop_liquidity        : 5
  hub_market_val        : 4264.3923

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 49.1790
  pop_val               : 98.9341
  hub_pop_val           : 98.9341

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Zawały I (891f56541b3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Zawały I
  stop_id               : 99129
  h3_index              : 891f56541b3ffff
  hub_id                : 36
  hub_name              : Zawały I
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.8009
  local_percentile      : 0.8869
  stop_local_score_raw  : -1.5445
  local_score_raw       : -1.5259
  hub_grade             : F
  hub_percentile        : 0.8869

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 3490.8265
  market_val            : 3513.7533
  stop_liquidity        : 16
  hub_market_val        : 3513.7533

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 56.2171
  pop_val               : 114.7174
  hub_pop_val           : 114.7174

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Dzikowo (891f5655e43ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Dzikowo
  stop_id               : 99109
  h3_index              : 891f5655e43ffff
  hub_id                : 431
  hub_name              : Dzikowo
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.4005
  local_percentile      : 0.4435
  stop_local_score_raw  : -1.6832
  local_score_raw       : -1.7227
  hub_grade             : F
  hub_percentile        : 0.4435

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6395.0179
  market_val            : 6395.0179
  stop_liquidity        : 0
  hub_market_val        : 6395.0179

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 0.0000
  pop_val               : 0.0000
  hub_pop_val           : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Solankowa (891f565725bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Solankowa
  stop_id               : 50702
  h3_index              : 891f565725bffff
  hub_id                : 61
  hub_name              : Solankowa
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.4005
  local_percentile      : 0.4435
  stop_local_score_raw  : -1.6832
  local_score_raw       : -1.7227
  hub_grade             : F
  hub_percentile        : 0.4435

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6395.0179
  market_val            : 6395.0179
  stop_liquidity        : 0
  hub_market_val        : 6395.0179

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 0.0000
  pop_val               : 0.0000
  hub_pop_val           : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Przysiecka (891f56525bbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Przysiecka
  stop_id               : 68202
  h3_index              : 891f56525bbffff
  hub_id                : 87
  hub_name              : Przysiecka
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.4005
  local_percentile      : 0.4435
  stop_local_score_raw  : -1.6832
  local_score_raw       : -1.7227
  hub_grade             : F
  hub_percentile        : 0.4435

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6395.0179
  market_val            : 6395.0179
  stop_liquidity        : 0
  hub_market_val        : 6395.0179

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 0.0000
  pop_val               : 0.0000
  hub_pop_val           : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>

---

## TROJMIASTO
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: -0.000, Std: 0.577)
     Rozkład Kartek (unikalne Huby): A: 169, A+: 85, B: 254, C: 339, D: 423, F: 423
[👥 BAZA LUDNOŚCI GUS] ❌ OSTRZEŻENIE DEMOGRAFICZNE: Odchylenie 37.8%. GUS: 1,033,361 vs Baza: 750,000
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
[✅]  H3 Res 8 Grid 100% Valid (1,726 komórek, 571 pustyń transportowych)
```

### Faza 0: Statystyki ogólne
- **Populacja Miasta:** 1,033,361 (GUS Grid)
- **Transakcje RCN:** 150,122

### Faza III: Top 20 POI (Miasto)

| Kategoria | Tier | Ilość w Mieście | Wartość Punktowa (W) |
|---|---|---|---|
| `international_airport` | T0_MEGA_HUB | 1 | 207,269,246 |
| `national_rail_hub` | T0_MEGA_HUB | 2 | 38,456,144 |
| `hospital_clinical` | T1_NATIONAL_MAGNET | 16 | 24,170,819 |
| `national_stadium` | T1_NATIONAL_MAGNET | 11 | 23,837,519 |
| `university_campus` | T1_NATIONAL_MAGNET | 51 | 16,044,213 |
| `regional_rail_hub` | T1_NATIONAL_MAGNET | 14 | 7,353,612 |
| `logistics_hub` | T2_STRATEGIC_HUB | 1 | 4,569,218 |
| `shopping_mall` | T2_STRATEGIC_HUB | 91 | 4,064,501 |
| `commercial_zone` | T2_STRATEGIC_HUB | 1072 | 4,005,652 |
| `industrial_zone` | T2_STRATEGIC_HUB | 1931 | 3,938,952 |
| `supermarket` | T2_STRATEGIC_HUB | 315 | 2,725,034 |
| `government_central` | T2_STRATEGIC_HUB | 248 | 2,467,305 |
| `business_office` | T2_STRATEGIC_HUB | 369 | 1,987,112 |
| `education_high_school` | T3_LOCAL_CORE | 354 | 816,446 |
| `marketplace` | T3_LOCAL_CORE | 30 | 790,512 |
| `social_support_mops` | T3_LOCAL_CORE | 84 | 611,475 |
| `sports_centre` | T3_LOCAL_CORE | 216 | 600,157 |
| `culture_theatre` | T3_LOCAL_CORE | 125 | 447,487 |
| `health_clinic` | T3_LOCAL_CORE | 681 | 369,960 |
| `police_station` | T4_DAILY_SERVICE | 50 | 139,783 |

### Faza IV: Próbki Pełnego DNA 100% (Zobacz szczegóły POI!)

#### NAJLEPSZE PRZYSTANKI (TOP 5)
<details><summary><b>Nadrzeczna 02 (891f0d25113ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Nadrzeczna 02
  stop_id               : 40375
  h3_index              : 891f0d25113ffff
  hub_id                : 2
  hub_name              : Wejherowo Nadrzeczna 02
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : D
  grade                 : A+
  stop_percentile       : 41.9197
  local_percentile      : 100.0000
  stop_local_score_raw  : -0.0377
  local_score_raw       : 2.4060
  hub_grade             : A+
  hub_percentile        : 100.0000

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 3641428.2519
  infra_score           : 12039265.3293
  stop_raw_gravity      : 1499377.1927
  stop_entropy          : 1.4286
  hub_infra_score       : 12039265.3293

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 7.4286
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 7.4286
  hub_routes            : 2, 5, 8, 11, 12, 701

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6315.6141
  market_val            : 6035.6653
  stop_liquidity        : 29
  hub_market_val        : 6035.6653

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 173.8831
  pop_val               : 503.5894
  hub_pop_val           : 503.5894

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 9x specialized_retail
  > 7x micro_playground
  > 5x personal_services
  > 3x health_clinic
  > 3x gastronomy
  > 3x micro_parcel_locker
  > 3x industrial_zone
  > 2x supermarket
  > 2x education_preschool
  > 2x convenience_store
  > 2x education_high_school
  > 2x government_central
  > 1x business_office
  > 1x pharmacy
  > 1x shopping_mall
  > 1x social_support_mops
  > 1x car_services
  > 1x sports_centre

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - personal_services      : Studio Kleopatra
    - health_clinic          : Stermed
    - health_clinic          : Lek. Stomatolog Maria Chmiel
    - personal_services      : Salon Fryzjerski Adam
    - specialized_retail     : Media Expert
    - specialized_retail     : Pepco
    - supermarket            : Biedronka
    - personal_services      : Rossmann
    - specialized_retail     : Stoper
    - specialized_retail     : Mandarynka
    - gastronomy             : Twoja Kuchnia Bistro
    - specialized_retail     : Bardotka
```
</details>
<details><summary><b>Wejherowo Sobieskiego - GS 02 (891f0d2515bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Wejherowo Sobieskiego - GS 02
  stop_id               : 83
  h3_index              : 891f0d2515bffff
  hub_id                : 258
  hub_name              : Wejherowo Sobieskiego - GS 02
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 99.9575
  local_percentile      : 99.9409
  stop_local_score_raw  : 2.7247
  local_score_raw       : 2.3895
  hub_grade             : A+
  hub_percentile        : 99.9409

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 4680640.8564
  infra_score           : 11226843.2393
  stop_raw_gravity      : 1704895.9013
  stop_entropy          : 1.7454
  hub_infra_score       : 11226843.2393

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 4.4286
  transit_freq          : 7.2143
  stop_routes_count     : 6
  stop_routes           : 2, 3, 4, 7, 12, 16
  stop_hub_share        : 0.6139
  hub_departures_h      : 7.2143
  hub_routes            : 2, 3, 4, 7, 12, 16

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 5756.5789
  market_val            : 5783.3288
  stop_liquidity        : 159
  hub_market_val        : 5783.3288

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 383.7643
  pop_val               : 784.3305
  hub_pop_val           : 784.3305

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 34x park_recreation
  > 20x specialized_retail
  > 15x convenience_store
  > 13x personal_services
  > 12x gastronomy
  > 10x bank
  > 8x health_clinic
  > 8x education_high_school
  > 6x micro_atm
  > 6x government_central
  > 5x business_office
  > 5x education_preschool
  > 4x pharmacy
  > 3x supermarket
  > 3x place_of_worship
  > 2x post_office
  > 2x university_campus
  > 2x micro_parcel_locker
  > 2x sports_centre
  > 2x micro_playground
  > 1x regional_rail_hub
  > 1x police_station
  > 1x culture_theatre
  > 1x car_services
  > 1x social_support_mops
  > 1x shopping_mall
  > 1x marketplace
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - regional_rail_hub      : Wejherowo
    - bank                   : Millennium Bank
    - micro_atm              : Bankomat Millennium
    - gastronomy             : Jedyny Taki Kebab w Mieście
    - bank                   : Santander
    - police_station         : Komenda Powiatowa Policji w Wejherowie
    - gastronomy             : Bar Gusto
    - convenience_store      : Kami
    - gastronomy             : Do syta
    - bank                   : BNP Paribas
    - personal_services      : Rossmann
    - gastronomy             : Marysieńka
```
</details>
<details><summary><b>Wejherowo Filharmonia Kaszubska 02 (891f0d25027ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Wejherowo Filharmonia Kaszubska 02
  stop_id               : 79
  h3_index              : 891f0d25027ffff
  hub_id                : 199
  hub_name              : Wejherowo Filharmonia Kaszubska 01
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 99.2992
  local_percentile      : 99.8819
  stop_local_score_raw  : 2.1272
  local_score_raw       : 2.3883
  hub_grade             : A+
  hub_percentile        : 99.8819

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 2879922.5458
  infra_score           : 6682686.0939
  stop_raw_gravity      : 1002682.8136
  stop_entropy          : 1.8722
  hub_infra_score       : 6682686.0939

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 2.7143
  transit_freq          : 7.0714
  stop_routes_count     : 5
  stop_routes           : 3, 4, 7, 11, 16
  stop_hub_share        : 0.3838
  hub_departures_h      : 7.0714
  hub_routes            : 2, 3, 4, 7, 11, 16

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 6040.7769
  market_val            : 6182.7293
  stop_liquidity        : 136
  hub_market_val        : 6182.7293

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 666.3004
  pop_val               : 1344.2149
  hub_pop_val           : 1344.2149

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 40x park_recreation
  > 13x education_high_school
  > 11x convenience_store
  > 10x specialized_retail
  > 8x personal_services
  > 7x gastronomy
  > 7x micro_parcel_locker
  > 7x micro_playground
  > 6x education_preschool
  > 5x micro_atm
  > 5x health_clinic
  > 4x pharmacy
  > 3x bank
  > 3x car_services
  > 3x government_central
  > 3x supermarket
  > 3x industrial_zone
  > 3x sports_centre
  > 2x place_of_worship
  > 2x business_office
  > 2x university_campus
  > 1x regional_rail_hub
  > 1x police_station
  > 1x culture_theatre
  > 1x post_office
  > 1x social_support_mops
  > 1x shopping_mall
  > 1x marketplace
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - regional_rail_hub      : Wejherowo
    - bank                   : Millennium Bank
    - micro_atm              : Bankomat Millennium
    - gastronomy             : Jedyny Taki Kebab w Mieście
    - police_station         : Komenda Powiatowa Policji w Wejherowie
    - place_of_worship       : Kalwaria Wejherowska
    - gastronomy             : Bar Gusto
    - pharmacy               : W Pastorówce
    - gastronomy             : Scena
    - bank                   : Bank Pekao
    - car_services           : Auto Brudniewicz. Centrum motoryzacji
    - culture_theatre        : Powiatowa Biblioteka Publiczna w Wejherowie
```
</details>
<details><summary><b>Wejherowo Szpitalna 04 n/ż (891f0d25187ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Wejherowo Szpitalna 04 n/ż
  stop_id               : 94
  h3_index              : 891f0d25187ffff
  hub_id                : 163
  hub_name              : Wejherowo Szpitalna 04 n/ż
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 99.6815
  local_percentile      : 99.8228
  stop_local_score_raw  : 2.3517
  local_score_raw       : 2.3211
  hub_grade             : A+
  hub_percentile        : 99.8228

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 3427102.2126
  infra_score           : 9821169.1637
  stop_raw_gravity      : 3419872.4503
  stop_entropy          : 0.0021
  hub_infra_score       : 9821169.1637

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 3.6429
  transit_freq          : 6.7143
  stop_routes_count     : 4
  stop_routes           : 2, 5, 8, 701
  stop_hub_share        : 0.5426
  hub_departures_h      : 6.7143
  hub_routes            : 2, 5, 8, 12, 701

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 8809.6007
  market_val            : 8809.6007
  stop_liquidity        : 0
  hub_market_val        : 8809.6007

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 22.7015
  pop_val               : 105.3731
  hub_pop_val           : 105.3731

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x gastronomy
  > 1x car_services
  > 1x hospital_clinical
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy             : Bar Restauracyjny
    - car_services           : Elektryka pojazdowa
    - hospital_clinical      : Szpital Specjalistyczny im. Floriana Ceynowy w Wejherowie
    - industrial_zone        : Przepompownia ścieków
```
</details>
<details><summary><b>Wejherowo Broniewskiego - Dworzec PKP 02 (891f0d251cbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Wejherowo Broniewskiego - Dworzec PKP 02
  stop_id               : 87
  h3_index              : 891f0d251cbffff
  hub_id                : 107
  hub_name              : Wejherowo Broniewskiego - Dworzec PKP 02
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 99.4479
  local_percentile      : 99.7637
  stop_local_score_raw  : 2.2520
  local_score_raw       : 2.2427
  hub_grade             : A+
  hub_percentile        : 99.7637

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 2559912.5493
  infra_score           : 7184658.9110
  stop_raw_gravity      : 907218.6344
  stop_entropy          : 1.8217
  hub_infra_score       : 7184658.9110

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 3.3571
  transit_freq          : 6.6429
  stop_routes_count     : 4
  stop_routes           : 1, 5, 10, 12
  stop_hub_share        : 0.5054
  hub_departures_h      : 6.6429
  hub_routes            : 1, 5, 10, 12, 701

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 5993.1184
  market_val            : 5960.4905
  stop_liquidity        : 72
  hub_market_val        : 5960.4905

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 246.8592
  pop_val               : 639.0237
  hub_pop_val           : 639.0237

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 38x park_recreation
  > 12x convenience_store
  > 10x specialized_retail
  > 7x business_office
  > 7x micro_parcel_locker
  > 6x gastronomy
  > 6x car_services
  > 4x health_clinic
  > 4x micro_playground
  > 4x education_high_school
  > 3x bank
  > 3x micro_atm
  > 3x pharmacy
  > 3x personal_services
  > 3x education_preschool
  > 3x supermarket
  > 2x university_campus
  > 2x government_central
  > 2x industrial_zone
  > 1x regional_rail_hub
  > 1x police_station
  > 1x culture_theatre
  > 1x post_office
  > 1x place_of_worship
  > 1x shopping_mall
  > 1x social_support_mops

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - regional_rail_hub      : Wejherowo
    - bank                   : Millennium Bank
    - micro_atm              : Bankomat Millennium
    - gastronomy             : Jedyny Taki Kebab w Mieście
    - business_office        : P.U.H MBJ
    - police_station         : Komenda Powiatowa Policji w Wejherowie
    - convenience_store      : Żabka
    - car_services           : Dan - Cars
    - gastronomy             : Joker Pizza
    - health_clinic          : Władysława Lassmann
    - gastronomy             : Bar Gusto
    - gastronomy             : Scena
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Bogatka Bogatka III 02 (891f09b2b83ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Bogatka Bogatka III 02
  stop_id               : 14627
  h3_index              : 891f09b2b83ffff
  hub_id                : 503
  hub_name              : Bogatka Bogatka III 01
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.1593
  local_percentile      : 0.2953
  stop_local_score_raw  : -2.6816
  local_score_raw       : -2.4239
  hub_grade             : F
  hub_percentile        : 0.2953

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 8809.6007
  market_val            : 8809.6007
  stop_liquidity        : 0
  hub_market_val        : 8809.6007

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 4.3454
  pop_val               : 8.4122
  hub_pop_val           : 8.4122

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Bogatka Bogatka Skrzyżowanie 69 (891f09b290bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Bogatka Bogatka Skrzyżowanie 69
  stop_id               : 15031
  h3_index              : 891f09b290bffff
  hub_id                : 1304
  hub_name              : Bogatka Bogatka Skrzyżowanie 69
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.2867
  local_percentile      : 0.2363
  stop_local_score_raw  : -2.6368
  local_score_raw       : -2.4328
  hub_grade             : F
  hub_percentile        : 0.2363

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 7185.7466
  market_val            : 7185.7466
  stop_liquidity        : 4
  hub_market_val        : 7185.7466

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 21.1541
  pop_val               : 24.0459
  hub_pop_val           : 24.0459

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Dobrzewino Owsiana 16 (891f0996dabffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Dobrzewino Owsiana 16
  stop_id               : 31633
  h3_index              : 891f0996dabffff
  hub_id                : 1634
  hub_name              : Dobrzewino Owsiana 16
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.0637
  local_percentile      : 0.1772
  stop_local_score_raw  : -2.7431
  local_score_raw       : -2.5566
  hub_grade             : F
  hub_percentile        : 0.1772

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 5152.1099
  market_val            : 5152.1099
  stop_liquidity        : 5
  hub_market_val        : 5152.1099

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 40.8132
  pop_val               : 40.8132
  hub_pop_val           : 40.8132

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Dobrzewino Owsiana 63 (891f0996dabffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Dobrzewino Owsiana 63
  stop_id               : 31634
  h3_index              : 891f0996dabffff
  hub_id                : 1385
  hub_name              : Dobrzewino Owsiana 63
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.0425
  local_percentile      : 0.1181
  stop_local_score_raw  : -2.7493
  local_score_raw       : -2.5635
  hub_grade             : F
  hub_percentile        : 0.1181

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 4988.5509
  market_val            : 4988.5509
  stop_liquidity        : 7
  hub_market_val        : 4988.5509

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 45.2268
  pop_val               : 45.2268
  hub_pop_val           : 45.2268

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Demptowo - Jednostka Wojskowa 01 (891f725817bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Demptowo - Jednostka Wojskowa 01
  stop_id               : 38160
  h3_index              : 891f725817bffff
  hub_id                : 1279
  hub_name              : Demptowo - Jednostka Wojskowa 01
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.0212
  local_percentile      : 0.0591
  stop_local_score_raw  : -2.8601
  local_score_raw       : -2.6500
  hub_grade             : F
  hub_percentile        : 0.0591

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 8809.6007
  market_val            : 8809.6007
  stop_liquidity        : 0
  hub_market_val        : 8809.6007

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 0.0000
  pop_val               : 0.0000
  hub_pop_val           : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>

---

## WARSZAWA
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: -0.000, Std: 0.526)
     Rozkład Kartek (unikalne Huby): A: 472, A+: 236, B: 707, C: 943, D: 1178, F: 1178
[👥 BAZA LUDNOŚCI GUS] ❌ OSTRZEŻENIE DEMOGRAFICZNE: Odchylenie 71.2%. GUS: 3,081,843 vs Baza: 1,800,000
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
[✅]  H3 Res 8 Grid 100% Valid (4,442 komórek, 1641 pustyń transportowych)
```

### Faza 0: Statystyki ogólne
- **Populacja Miasta:** 3,081,843 (GUS Grid)
- **Transakcje RCN:** 227,085

### Faza III: Top 20 POI (Miasto)

| Kategoria | Tier | Ilość w Mieście | Wartość Punktowa (W) |
|---|---|---|---|
| `international_airport` | T0_MEGA_HUB | 2 | 242,647,992 |
| `national_rail_hub` | T0_MEGA_HUB | 6 | 41,504,761 |
| `national_stadium` | T1_NATIONAL_MAGNET | 24 | 26,372,728 |
| `hospital_clinical` | T1_NATIONAL_MAGNET | 74 | 24,344,991 |
| `exhibition_centre` | T1_NATIONAL_MAGNET | 3 | 17,377,669 |
| `university_campus` | T1_NATIONAL_MAGNET | 196 | 14,123,584 |
| `regional_rail_hub` | T1_NATIONAL_MAGNET | 72 | 7,835,838 |
| `shopping_mall` | T2_STRATEGIC_HUB | 175 | 4,957,655 |
| `industrial_zone` | T2_STRATEGIC_HUB | 5113 | 4,575,368 |
| `commercial_zone` | T2_STRATEGIC_HUB | 3934 | 4,451,705 |
| `student_dormitory` | T2_STRATEGIC_HUB | 17 | 3,475,573 |
| `supermarket` | T2_STRATEGIC_HUB | 912 | 2,811,312 |
| `government_central` | T2_STRATEGIC_HUB | 678 | 2,679,485 |
| `business_office` | T2_STRATEGIC_HUB | 1311 | 2,137,180 |
| `logistics_hub` | T2_STRATEGIC_HUB | 19 | 2,109,268 |
| `marketplace` | T3_LOCAL_CORE | 113 | 962,822 |
| `education_high_school` | T3_LOCAL_CORE | 1304 | 813,346 |
| `social_support_mops` | T3_LOCAL_CORE | 282 | 707,189 |
| `sports_centre` | T3_LOCAL_CORE | 842 | 666,306 |
| `culture_theatre` | T3_LOCAL_CORE | 490 | 434,594 |

### Faza IV: Próbki Pełnego DNA 100% (Zobacz szczegóły POI!)

#### NAJLEPSZE PRZYSTANKI (TOP 5)
<details><summary><b>Grodzisk Maz. Dw. PKP (891f5221387ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Grodzisk Maz. Dw. PKP
  stop_id               : 585919
  h3_index              : 891f5221387ffff
  hub_id                : 17
  hub_name              : Grodzisk Maz. Dw. PKP
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 100.0000
  local_percentile      : 100.0000
  stop_local_score_raw  : 2.5296
  local_score_raw       : 2.1271
  hub_grade             : A+
  hub_percentile        : 100.0000

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 6510854.4259
  infra_score           : 17293237.3693
  stop_raw_gravity      : 1975095.3671
  stop_entropy          : 2.2965
  hub_infra_score       : 17293237.3693

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 56.3571
  transit_freq          : 58.5714
  stop_routes_count     : 20
  stop_routes           : 0, 13, 16, 17, 18, 21, 22, 23, 24, 25, 26, 28, 29, 30, 31, 32, 33, 34, 63, 82
  stop_hub_share        : 0.9622
  hub_departures_h      : 58.5714
  hub_routes            : 0, 13, 15, 16, 17, 18, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 63, 82

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 10295.3559
  market_val            : 10465.3826
  stop_liquidity        : 98
  hub_market_val        : 10465.3826

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 186.0550
  pop_val               : 469.0104
  hub_pop_val           : 469.0104

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 185x park_recreation
  > 13x specialized_retail
  > 12x gastronomy
  > 12x personal_services
  > 9x government_central
  > 7x convenience_store
  > 7x health_clinic
  > 7x micro_playground
  > 7x micro_parcel_locker
  > 6x commercial_zone
  > 5x education_high_school
  > 4x pharmacy
  > 3x micro_atm
  > 3x industrial_zone
  > 2x bank
  > 2x culture_theatre
  > 2x social_support_mops
  > 1x post_office
  > 1x supermarket
  > 1x regional_rail_hub
  > 1x police_station
  > 1x education_preschool
  > 1x sports_centre
  > 1x marketplace

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - pharmacy               : Farmacja 24
    - pharmacy               : Dbam o Zdrowie
    - post_office            : Poczta Polska
    - bank                   : Millennium Bank
    - micro_atm              : Euronet
    - micro_atm              : Euronet
    - pharmacy               : Centralna
    - micro_atm              : PKO BP
    - gastronomy             : Studnia Smaków
    - gastronomy             : Donatello
    - supermarket            : Społem
    - specialized_retail     : Garanti
```
</details>
<details><summary><b>USC (Bolesława Prusa) (891f522762bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : USC (Bolesława Prusa)
  stop_id               : 1502615
  h3_index              : 891f522762bffff
  hub_id                : 49
  hub_name              : Pruszków USC
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 98.8454
  local_percentile      : 99.9788
  stop_local_score_raw  : 1.3352
  local_score_raw       : 1.9861
  hub_grade             : A+
  hub_percentile        : 99.9788

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 2825188.8528
  infra_score           : 18606974.9197
  stop_raw_gravity      : 908940.9565
  stop_entropy          : 2.1082
  hub_infra_score       : 18606974.9197

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 8.5714
  transit_freq          : 35.7143
  stop_routes_count     : 5
  stop_routes           : 4, 5, 6, 7, 10
  stop_hub_share        : 0.2400
  hub_departures_h      : 35.7143
  hub_routes            : 2, 4, 5, 6, 7, 10, 62, 67, 77, 78, WKD ZKA

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 8402.8125
  market_val            : 8930.4955
  stop_liquidity        : 336
  hub_market_val        : 8930.4955

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 265.4612
  pop_val               : 1810.8157
  hub_pop_val           : 1810.8157

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 42x park_recreation
  > 29x personal_services
  > 22x specialized_retail
  > 20x gastronomy
  > 14x micro_parcel_locker
  > 13x health_clinic
  > 13x micro_playground
  > 11x bank
  > 10x convenience_store
  > 10x micro_atm
  > 6x education_preschool
  > 5x business_office
  > 5x government_central
  > 4x pharmacy
  > 4x education_high_school
  > 3x supermarket
  > 2x post_office
  > 2x commercial_zone
  > 1x university_campus
  > 1x place_of_worship
  > 1x car_services
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store      : Żabka
    - bank                   : Millennium Bank
    - bank                   : mBank
    - gastronomy             : Kale
    - gastronomy             : Palermo Pizza & Pasta
    - bank                   : Santander
    - bank                   : Crédit Agricole
    - bank                   : Bank Pekao
    - bank                   : Skok Stefczyka
    - micro_atm              : Bankomat BZ WBK
    - micro_atm              : Euronet
    - supermarket            : Biedronka
```
</details>
<details><summary><b>Grodzisk Maz. Kierlańczyków (891f52213a3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Grodzisk Maz. Kierlańczyków
  stop_id               : 585924
  h3_index              : 891f52213a3ffff
  hub_id                : 54
  hub_name              : Grodzisk Maz. Kościuszki
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 99.9326
  local_percentile      : 99.9576
  stop_local_score_raw  : 2.0250
  local_score_raw       : 1.9528
  hub_grade             : A+
  hub_percentile        : 99.9576

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 4834501.1549
  infra_score           : 9521970.4285
  stop_raw_gravity      : 1717282.8180
  stop_entropy          : 1.8152
  hub_infra_score       : 9521970.4285

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 26.4286
  transit_freq          : 50.0714
  stop_routes_count     : 17
  stop_routes           : 0, 13, 16, 17, 21, 22, 23, 26, 28, 29, 30, 31, 32, 33, 34, 63, 82
  stop_hub_share        : 0.5278
  hub_departures_h      : 50.0714
  hub_routes            : 0, 13, 16, 17, 21, 22, 23, 26, 28, 29, 30, 31, 32, 33, 34, 63, 82

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 9308.8201
  market_val            : 9249.5960
  stop_liquidity        : 119
  hub_market_val        : 9249.5960

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 196.8770
  pop_val               : 455.8630
  hub_pop_val           : 455.8630

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 370x park_recreation
  > 28x gastronomy
  > 28x specialized_retail
  > 16x personal_services
  > 14x convenience_store
  > 11x micro_atm
  > 11x health_clinic
  > 11x micro_playground
  > 9x government_central
  > 8x pharmacy
  > 8x bank
  > 8x education_high_school
  > 7x commercial_zone
  > 6x micro_parcel_locker
  > 4x culture_theatre
  > 3x post_office
  > 3x supermarket
  > 2x police_station
  > 2x social_support_mops
  > 2x shopping_mall
  > 2x place_of_worship
  > 1x regional_rail_hub
  > 1x education_preschool
  > 1x sports_centre
  > 1x marketplace

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - pharmacy               : Farmacja 24
    - pharmacy               : Dbam o Zdrowie
    - post_office            : Poczta Polska
    - bank                   : Millennium Bank
    - micro_atm              : Bankomat Cash4You
    - micro_atm              : Euronet
    - culture_theatre        : Kino CK
    - gastronomy             : Biesiadowo
    - gastronomy             : LOFT Food & Music
    - micro_atm              : Euronet
    - micro_atm              : Euronet
    - bank                   : PKO BP
```
</details>
<details><summary><b>PKP Pruszków (891f522760bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : PKP Pruszków
  stop_id               : 1287177
  h3_index              : 891f522760bffff
  hub_id                : 47
  hub_name              : PKP Pruszków
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A
  grade                 : A+
  stop_percentile       : 94.8427
  local_percentile      : 99.9364
  stop_local_score_raw  : 0.7765
  local_score_raw       : 1.9498
  hub_grade             : A+
  hub_percentile        : 99.9364

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 2981661.9420
  infra_score           : 24348343.5853
  stop_raw_gravity      : 969457.0335
  stop_entropy          : 2.0756
  hub_infra_score       : 24348343.5853

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 2.3571
  transit_freq          : 30.2143
  stop_routes_count     : 3
  stop_routes           : 67, 77, 78
  stop_hub_share        : 0.0780
  hub_departures_h      : 30.2143
  hub_routes            : 1, 2, 5, 6, 7, 10, 60, 65, 66, 67, 77, 78, S1

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 10771.5433
  market_val            : 10752.3203
  stop_liquidity        : 1147
  hub_market_val        : 10752.3203

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 211.2961
  pop_val               : 1117.6291
  hub_pop_val           : 1117.6291

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 63x park_recreation
  > 18x specialized_retail
  > 12x gastronomy
  > 10x personal_services
  > 9x micro_parcel_locker
  > 8x convenience_store
  > 7x micro_playground
  > 6x health_clinic
  > 4x industrial_zone
  > 3x education_high_school
  > 2x bank
  > 2x pharmacy
  > 2x micro_atm
  > 2x post_office
  > 2x government_central
  > 2x education_preschool
  > 2x commercial_zone
  > 1x sports_centre
  > 1x supermarket
  > 1x regional_rail_hub
  > 1x culture_theatre
  > 1x business_office
  > 1x car_services
  > 1x shopping_mall

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - health_clinic          : Medica-Med
    - bank                   : ING Bank Śląski
    - personal_services      : Barbershop - Fryzjer Męski
    - gastronomy             : Frentzza
    - sports_centre          : Fitness & Body
    - supermarket            : Lewiatan
    - pharmacy               : Apteka Grafitowa
    - regional_rail_hub      : Pruszków
    - micro_parcel_locker    : Paczkomat InPost
    - specialized_retail     : Galmour
    - gastronomy             : Ucieranie Treści
    - gastronomy             : WPR Burger & More
```
</details>
<details><summary><b>Grodzisk Maz. Zondka (891f52213bbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Grodzisk Maz. Zondka
  stop_id               : 586000
  h3_index              : 891f52213bbffff
  hub_id                : 2798
  hub_name              : Grodzisk Maz. Zondka
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 99.9904
  local_percentile      : 99.9151
  stop_local_score_raw  : 2.2853
  local_score_raw       : 1.8748
  hub_grade             : A+
  hub_percentile        : 99.9151

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 4138772.6069
  infra_score           : 9783039.7973
  stop_raw_gravity      : 1261362.5170
  stop_entropy          : 2.2812
  hub_infra_score       : 9783039.7973

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 37.2857
  transit_freq          : 37.2857
  stop_routes_count     : 20
  stop_routes           : 0, 13, 16, 17, 18, 21, 22, 23, 24, 25, 26, 28, 29, 30, 31, 32, 33, 34, 63, 82
  stop_hub_share        : 1.0000
  hub_departures_h      : 37.2857
  hub_routes            : 0, 13, 16, 17, 18, 21, 22, 23, 24, 25, 26, 28, 29, 30, 31, 32, 33, 34, 63, 82

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 10146.8048
  market_val            : 10146.8048
  stop_liquidity        : 215
  hub_market_val        : 10146.8048

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 280.8288
  pop_val               : 556.9256
  hub_pop_val           : 556.9256

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 427x park_recreation
  > 28x gastronomy
  > 25x specialized_retail
  > 19x personal_services
  > 14x convenience_store
  > 12x government_central
  > 12x micro_playground
  > 11x micro_atm
  > 11x health_clinic
  > 8x pharmacy
  > 8x micro_parcel_locker
  > 8x education_high_school
  > 7x bank
  > 6x commercial_zone
  > 3x post_office
  > 3x culture_theatre
  > 2x supermarket
  > 2x police_station
  > 2x social_support_mops
  > 2x shopping_mall
  > 2x place_of_worship
  > 2x industrial_zone
  > 1x regional_rail_hub
  > 1x education_preschool
  > 1x sports_centre
  > 1x marketplace

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - pharmacy               : Farmacja 24
    - pharmacy               : Dbam o Zdrowie
    - post_office            : Poczta Polska
    - bank                   : Millennium Bank
    - micro_atm              : Euronet
    - culture_theatre        : Kino CK
    - gastronomy             : Biesiadowo
    - gastronomy             : LOFT Food & Music
    - micro_atm              : Euronet
    - micro_atm              : Euronet
    - bank                   : PKO BP
    - pharmacy               : Dr. Max
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Borzęcin Duży Borki (891f523733bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Borzęcin Duży Borki
  stop_id               : 617402
  h3_index              : 891f523733bffff
  hub_id                : 2699
  hub_name              : Borzęcin Duży Borki
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.1155
  local_percentile      : 0.1061
  stop_local_score_raw  : -1.9866
  local_score_raw       : -1.8018
  hub_grade             : F
  hub_percentile        : 0.1061

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 10154.4102
  market_val            : 10154.4102
  stop_liquidity        : 0
  hub_market_val        : 10154.4102

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 0.6749
  pop_val               : 1.0238
  hub_pop_val           : 1.0238

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Bronisława Czecha - Las (891f53cd2dbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Bronisława Czecha - Las
  stop_id               : 202302
  h3_index              : 891f53cd2dbffff
  hub_id                : 2857
  hub_name              : Bronisława Czecha - Las
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.0866
  local_percentile      : 0.0849
  stop_local_score_raw  : -2.0475
  local_score_raw       : -1.8797
  hub_grade             : F
  hub_percentile        : 0.0849

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 10154.4102
  market_val            : 10154.4102
  stop_liquidity        : 0
  hub_market_val        : 10154.4102

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 0.0000
  pop_val               : 0.0000
  hub_pop_val           : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Jazgarzew Wólka Pęcherska (891f535b307ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Jazgarzew Wólka Pęcherska
  stop_id               : 379702
  h3_index              : 891f535b307ffff
  hub_id                : 2487
  hub_name              : Jazgarzew Wólka Pęcherska
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.0192
  local_percentile      : 0.0636
  stop_local_score_raw  : -2.2980
  local_score_raw       : -2.1096
  hub_grade             : F
  hub_percentile        : 0.0636

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 1937.5427
  market_val            : 1937.5427
  stop_liquidity        : 1
  hub_market_val        : 1937.5427

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 23.2923
  pop_val               : 46.0000
  hub_pop_val           : 46.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Góra Rzeczna (891f52aed47ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Góra Rzeczna
  stop_id               : 185901
  h3_index              : 891f52aed47ffff
  hub_id                : 2535
  hub_name              : Góra Rzeczna
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.0577
  local_percentile      : 0.0424
  stop_local_score_raw  : -2.1697
  local_score_raw       : -2.1652
  hub_grade             : F
  hub_percentile        : 0.0424

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 79037.4315
  infra_score           : 165935.8101
  stop_raw_gravity      : 73901.0125
  stop_entropy          : 0.0695
  hub_infra_score       : 165935.8101

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 95.1261
  market_val            : 95.1261
  stop_liquidity        : 2
  hub_market_val        : 95.1261

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 108.1088
  pop_val               : 203.0000
  hub_pop_val           : 203.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x convenience_store
  > 1x micro_playground

  [WSKAZANE KONKRETNE INSTYTUCJE]
```
</details>
<details><summary><b>Góra Pałacowa (891f52aed07ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Góra Pałacowa
  stop_id               : 187602
  h3_index              : 891f52aed07ffff
  hub_id                : 2475
  hub_name              : Góra Pałacowa
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.0674
  local_percentile      : 0.0212
  stop_local_score_raw  : -2.1618
  local_score_raw       : -2.1925
  hub_grade             : F
  hub_percentile        : 0.0212

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 774855.8987
  infra_score           : 1320873.6817
  stop_raw_gravity      : 774855.8987
  stop_entropy          : -0.0000
  hub_infra_score       : 1320873.6817

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 96.5903
  market_val            : 96.5903
  stop_liquidity        : 2
  hub_market_val        : 96.5903

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 16.2049
  pop_val               : 32.1375
  hub_pop_val           : 32.1375

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x industrial_zone
  > 1x park_recreation

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - park_recreation        : park XVI
```
</details>

---

## WROCLAW
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: 0.000, Std: 0.607)
     Rozkład Kartek (unikalne Huby): A: 142, A+: 72, B: 214, C: 285, D: 356, F: 355
[👥 BAZA LUDNOŚCI GUS] ❌ OSTRZEŻENIE DEMOGRAFICZNE: Odchylenie 42.7%. GUS: 912,971 vs Baza: 640,000
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
[✅]  H3 Res 8 Grid 100% Valid (2,289 komórek, 593 pustyń transportowych)
```

### Faza 0: Statystyki ogólne
- **Populacja Miasta:** 912,971 (GUS Grid)
- **Transakcje RCN:** 58,508

### Faza III: Top 20 POI (Miasto)

| Kategoria | Tier | Ilość w Mieście | Wartość Punktowa (W) |
|---|---|---|---|
| `international_airport` | T0_MEGA_HUB | 1 | 213,878,203 |
| `national_rail_hub` | T0_MEGA_HUB | 8 | 36,742,790 |
| `national_stadium` | T1_NATIONAL_MAGNET | 9 | 24,659,474 |
| `hospital_clinical` | T1_NATIONAL_MAGNET | 19 | 23,578,540 |
| `university_campus` | T1_NATIONAL_MAGNET | 202 | 9,572,328 |
| `regional_rail_hub` | T1_NATIONAL_MAGNET | 17 | 7,218,983 |
| `student_dormitory` | T2_STRATEGIC_HUB | 1 | 5,579,781 |
| `shopping_mall` | T2_STRATEGIC_HUB | 41 | 4,418,496 |
| `industrial_zone` | T2_STRATEGIC_HUB | 1205 | 4,212,786 |
| `commercial_zone` | T2_STRATEGIC_HUB | 1098 | 4,182,224 |
| `supermarket` | T2_STRATEGIC_HUB | 290 | 2,622,381 |
| `government_central` | T2_STRATEGIC_HUB | 210 | 2,029,519 |
| `business_office` | T2_STRATEGIC_HUB | 428 | 1,887,628 |
| `logistics_hub` | T2_STRATEGIC_HUB | 3 | 1,879,302 |
| `marketplace` | T3_LOCAL_CORE | 20 | 805,076 |
| `education_high_school` | T3_LOCAL_CORE | 463 | 672,372 |
| `sports_centre` | T3_LOCAL_CORE | 218 | 579,050 |
| `social_support_mops` | T3_LOCAL_CORE | 68 | 575,559 |
| `culture_theatre` | T3_LOCAL_CORE | 108 | 404,845 |
| `health_clinic` | T3_LOCAL_CORE | 556 | 371,337 |

### Faza IV: Próbki Pełnego DNA 100% (Zobacz szczegóły POI!)

#### NAJLEPSZE PRZYSTANKI (TOP 5)
<details><summary><b>Wrocław Główny (891e204083bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Wrocław Główny
  stop_id               : 1474640
  h3_index              : 891e204083bffff
  hub_id                : 173
  hub_name              : Wrocław Główny
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 100.0000
  local_percentile      : 100.0000
  stop_local_score_raw  : 4.1636
  local_score_raw       : 3.9288
  hub_grade             : A+
  hub_percentile        : 100.0000

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 4236492.1517
  infra_score           : 17634296.7288
  stop_raw_gravity      : 2605615.1962
  stop_entropy          : 0.6259
  hub_infra_score       : 17634296.7288

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 21.0000
  transit_freq          : 56.5714
  stop_routes_count     : 25
  stop_routes           : D1, D10, D11, D12, D14, D2, D20, D3, D3/D9, D4, D4/D8, D40, D5, D6, D60, D62/D6, D64, D7, D70, D71, D8, D8/D4, D9, D90, 249555
  stop_hub_share        : 0.3712
  hub_departures_h      : 56.5714
  hub_routes            : D1, D10, D11, D12, D14, D2, D20, D3, D3/D9, D30, D4, D4/D8, D40, D5, D5/D62, D6, D60, D62/D6, D64, D7, D7/D80, D7/D83, D70, D71, D8, D8/D4, D80, D80/D7, D83, D83/D7, D9, D9/D3, D90, D91/D4, 249555

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 11624.2797
  market_val            : 11619.1850
  stop_liquidity        : 520
  hub_market_val        : 11619.1850

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 89.0630
  pop_val               : 329.9153
  hub_pop_val           : 329.9153

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 63x gastronomy
  > 61x specialized_retail
  > 17x health_clinic
  > 17x convenience_store
  > 16x commercial_zone
  > 15x micro_atm
  > 13x personal_services
  > 12x education_high_school
  > 11x pharmacy
  > 9x micro_playground
  > 8x park_recreation
  > 7x bank
  > 6x micro_parcel_locker
  > 5x government_central
  > 3x supermarket
  > 3x education_preschool
  > 3x university_campus
  > 2x culture_theatre
  > 2x post_office
  > 2x social_support_mops
  > 2x sports_centre
  > 1x national_rail_hub
  > 1x car_services
  > 1x business_office
  > 1x shopping_mall
  > 1x place_of_worship
  > 1x police_station
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - national_rail_hub      : Wrocław Główny
    - micro_atm              : Santander
    - car_services           : Circle K
    - gastronomy             : Mały Bar u Babci Jadzi
    - pharmacy               : Wrocławska
    - health_clinic          : Luxmed
    - convenience_store      : Żabka
    - gastronomy             : Jadłomania
    - gastronomy             : Frytkarnia Wujka Patryka
    - gastronomy             : Abradable
    - gastronomy             : Europejska
    - health_clinic          : lek. dent. Anna Furmanek
```
</details>
<details><summary><b>Wrocław Mikołajów (891e2040c53ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Wrocław Mikołajów
  stop_id               : 1474701
  h3_index              : 891e2040c53ffff
  hub_id                : 862
  hub_name              : Wrocław Mikołajów
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 99.8188
  local_percentile      : 99.9298
  stop_local_score_raw  : 2.8611
  local_score_raw       : 2.8646
  hub_grade             : A+
  hub_percentile        : 99.9298

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 3470798.6051
  infra_score           : 13579116.2150
  stop_raw_gravity      : 1320564.3100
  stop_entropy          : 1.6283
  hub_infra_score       : 13579116.2150

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 6.8571
  transit_freq          : 15.8571
  stop_routes_count     : 9
  stop_routes           : D4/D8, D7/D80, D7/D83, D70, D8, D8/D4, D80, D83, D9/D3
  stop_hub_share        : 0.4324
  hub_departures_h      : 15.8571
  hub_routes            : D3, D3/D9, D30, D4/D8, D7/D80, D7/D83, D70, D8, D8/D4, D80, D80/D7, D83, D83/D7, D9/D3, 249555

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 10261.1940
  market_val            : 10261.1940
  stop_liquidity        : 497
  hub_market_val        : 10261.1940

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 209.8422
  pop_val               : 755.3694
  hub_pop_val           : 755.3694

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 21x business_office
  > 13x gastronomy
  > 10x micro_playground
  > 9x park_recreation
  > 8x convenience_store
  > 8x commercial_zone
  > 7x micro_parcel_locker
  > 6x personal_services
  > 5x bank
  > 5x education_high_school
  > 4x micro_atm
  > 4x pharmacy
  > 3x health_clinic
  > 3x education_preschool
  > 2x supermarket
  > 2x specialized_retail
  > 2x government_central
  > 2x university_campus
  > 1x car_services
  > 1x culture_theatre
  > 1x shopping_mall
  > 1x sports_centre
  > 1x industrial_zone
  > 1x social_support_mops

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy             : McDonald's
    - micro_playground       : Piotruś
    - micro_atm              : Euronet
    - bank                   : Millennium Bank
    - car_services           : BP
    - business_office        : Information Market S.A.
    - gastronomy             : The Tu
    - pharmacy               : Pod Akacjami
    - gastronomy             : Hoshi Sushi
    - culture_theatre        : Miejska Biblioteka Publiczna
    - shopping_mall          : TGG
    - pharmacy               : Dolmed
```
</details>
<details><summary><b>Wrocław Nadodrze (891e2042b6fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Wrocław Nadodrze
  stop_id               : 2475915
  h3_index              : 891e2042b6fffff
  hub_id                : 196
  hub_name              : Wrocław Nadodrze
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 97.1912
  local_percentile      : 99.8596
  stop_local_score_raw  : 0.9002
  local_score_raw       : 2.7207
  hub_grade             : A+
  hub_percentile        : 99.8596

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 8200586.6918
  infra_score           : 41036307.0364
  stop_raw_gravity      : 4718742.8713
  stop_entropy          : 0.7379
  hub_infra_score       : 41036307.0364

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.5714
  transit_freq          : 11.2143
  stop_routes_count     : 1
  stop_routes           : D70
  stop_hub_share        : 0.0510
  hub_departures_h      : 11.2143
  hub_routes            : D4/D8, D7/D80, D7/D83, D70, D8, D8/D4, D80, D80/D7, D83, D83/D7, 249555

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 8513.2136
  market_val            : 8513.2136
  stop_liquidity        : 195
  hub_market_val        : 8513.2136

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 430.8453
  pop_val               : 2235.8273
  hub_pop_val           : 2235.8273

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 22x personal_services
  > 18x gastronomy
  > 17x micro_playground
  > 13x convenience_store
  > 12x specialized_retail
  > 12x micro_parcel_locker
  > 6x health_clinic
  > 5x pharmacy
  > 5x government_central
  > 5x commercial_zone
  > 4x car_services
  > 4x park_recreation
  > 3x micro_atm
  > 3x post_office
  > 3x education_high_school
  > 3x industrial_zone
  > 2x education_preschool
  > 2x hospital_clinical
  > 1x national_rail_hub
  > 1x supermarket
  > 1x business_office
  > 1x bank
  > 1x place_of_worship

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - national_rail_hub      : Wrocław Nadodrze
    - micro_atm              : Euronet
    - convenience_store      : Rabat
    - gastronomy             : Maybe Coffee
    - health_clinic          : Sensodentis
    - pharmacy               : Dbam o Zdrowie
    - government_central     : Urząd Skarbowy Wrocław-Psie Pole
    - personal_services      : Manufaktura Piękna
    - post_office            : Urząd Pocztowy Wrocław 4
    - gastronomy             : Enklawa Cafe
    - convenience_store      : Żabka
    - car_services           : Orlen
```
</details>
<details><summary><b>Wrocław Muchobór (891e2040173ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Wrocław Muchobór
  stop_id               : 58867
  h3_index              : 891e2040173ffff
  hub_id                : 254
  hub_name              : Wrocław Muchobór
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : D
  grade                 : A+
  stop_percentile       : 29.9607
  local_percentile      : 99.7893
  stop_local_score_raw  : -0.0833
  local_score_raw       : 2.6557
  hub_grade             : A+
  hub_percentile        : 99.7893

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 2417321.9438
  infra_score           : 7828655.9813
  stop_raw_gravity      : 1090677.7514
  stop_entropy          : 1.2163
  hub_infra_score       : 7828655.9813

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 17.5000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 17.5000
  hub_routes            : D1, D10, D11, D12, D14, D2, D20

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 11661.0048
  market_val            : 11661.0048
  stop_liquidity        : 86
  hub_market_val        : 11661.0048

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 14.1421
  pop_val               : 38.3920
  hub_pop_val           : 38.3920

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 9x commercial_zone
  > 7x business_office
  > 5x education_preschool
  > 5x industrial_zone
  > 3x car_services
  > 3x gastronomy
  > 3x micro_parcel_locker
  > 2x micro_atm
  > 2x convenience_store
  > 2x health_clinic
  > 2x micro_playground
  > 1x supermarket
  > 1x university_campus

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - car_services           : Orlen
    - business_office        : Objectivity
    - business_office        : Grupa Open
    - gastronomy             : Muchoborska 8
    - gastronomy             : Atmosfera
    - business_office        : Ultranet
    - gastronomy             : Komosa
    - convenience_store      : O!Shop
    - micro_parcel_locker    : Paczkomat InPost
    - micro_parcel_locker    : Paczkomat InPost
    - education_preschool    : Przedszkole Niepubliczne Kolorowe Kredki
    - education_preschool    : Przedszkole \
```
</details>
<details><summary><b>Wrocław Sołtysowice (891e20470d3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Wrocław Sołtysowice
  stop_id               : 59204
  h3_index              : 891e20470d3ffff
  hub_id                : 203
  hub_name              : Wrocław Sołtysowice
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : D
  grade                 : A+
  stop_percentile       : 48.3540
  local_percentile      : 99.7191
  stop_local_score_raw  : 0.0953
  local_score_raw       : 2.5234
  hub_grade             : A+
  hub_percentile        : 99.7191

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 8435020.2854
  infra_score           : 41658091.6275
  stop_raw_gravity      : 6208050.9669
  stop_entropy          : 0.3587
  hub_infra_score       : 41658091.6275

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 11.2857
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 11.2857
  hub_routes            : D4/D8, D7/D80, D7/D83, D70, D8, D8/D4, D80, D80/D7, D83, D83/D7, 249555

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 8371.5012
  market_val            : 8371.5012
  stop_liquidity        : 8
  hub_market_val        : 8371.5012

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 55.3818
  pop_val               : 281.6518
  hub_pop_val           : 281.6518

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 16x specialized_retail
  > 12x gastronomy
  > 6x commercial_zone
  > 5x car_services
  > 4x micro_parcel_locker
  > 3x micro_atm
  > 3x industrial_zone
  > 2x supermarket
  > 2x personal_services
  > 2x pharmacy
  > 1x national_rail_hub
  > 1x culture_theatre
  > 1x bank
  > 1x business_office
  > 1x convenience_store
  > 1x shopping_mall
  > 1x marketplace
  > 1x micro_playground

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - car_services           : Shell
    - national_rail_hub      : Wrocław Sołtysowice
    - supermarket            : Lidl
    - supermarket            : Auchan
    - culture_theatre        : Cinema City
    - specialized_retail     : Media Expert
    - specialized_retail     : TK Maxx
    - gastronomy             : McDonald's
    - gastronomy             : KFC
    - gastronomy             : Pasibus
    - gastronomy             : Salad Story
    - gastronomy             : Grycan
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Wyszogród (891e200d277ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Wyszogród
  stop_id               : 142
  h3_index              : 891e200d277ffff
  hub_id                : 116
  hub_name              : Wyszogród
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : D
  grade                 : F
  stop_percentile       : 35.6992
  local_percentile      : 0.3511
  stop_local_score_raw  : -0.0167
  local_score_raw       : -1.9044
  hub_grade             : F
  hub_percentile        : 0.3511

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 2114948.1493
  infra_score           : 0.0000
  stop_raw_gravity      : 1054423.1066
  stop_entropy          : 1.0058
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 7140.4934
  market_val            : 966.1836
  stop_liquidity        : 33
  hub_market_val        : 966.1836

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 147.5252
  pop_val               : 150.0000
  hub_pop_val           : 150.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Halicka (891e20431a7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Halicka
  stop_id               : 5263
  h3_index              : 891e20431a7ffff
  hub_id                : 899
  hub_name              : Halicka
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.2718
  local_percentile      : 0.2809
  stop_local_score_raw  : -2.3002
  local_score_raw       : -1.9477
  hub_grade             : F
  hub_percentile        : 0.2809

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 230849.7749
  infra_score           : 669326.4392
  stop_raw_gravity      : 163685.4437
  stop_entropy          : 0.4103
  hub_infra_score       : 669326.4392

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 18.4393
  market_val            : 18.4393
  stop_liquidity        : 1
  hub_market_val        : 18.4393

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 88.0775
  pop_val               : 197.4430
  hub_pop_val           : 197.4430

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 6x education_high_school
  > 5x micro_parcel_locker
  > 3x micro_playground
  > 1x convenience_store
  > 1x university_campus
  > 1x education_preschool
  > 1x post_office
  > 1x health_clinic

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store      : Żabka
    - university_campus      : Szkoła Policealna Specjalna nr 18 dla Uczniów Niewidomych I Słabowidzących
    - education_high_school  : Liceum Ogólnokształcące Specjalne nr XXXII dla Uczniów Niewidomych i Słabowidzących
    - education_high_school  : Technikum Specjalne nr 17 dla Uczniów Niewidomych i Słabowidzących
    - education_high_school  : Branżowa Szkoła I Stopnia nr 16 dla Uczniów Niewidomych i Słabowidzących
    - education_high_school  : Szkoła Podstawowa Specjalna nr 122 dla Uczniów Niewidomych i Słabowidzących
    - education_high_school  : Szkoła Specjalna Przysposobiająca do Pracy
    - education_preschool    : Złote Przedszkole Na Złotnikach
    - micro_parcel_locker    : Paczkomat InPost
    - micro_parcel_locker    : DPD Pickup Station
    - micro_parcel_locker    : Orlen Paczka
    - micro_parcel_locker    : DHL BOX 24/7
```
</details>
<details><summary><b>Siekierowice Szkoła (891e200841bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Siekierowice Szkoła
  stop_id               : 194
  h3_index              : 891e200841bffff
  hub_id                : 748
  hub_name              : Siekierowice Szkoła
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.1208
  local_percentile      : 0.2107
  stop_local_score_raw  : -2.6455
  local_score_raw       : -2.0592
  hub_grade             : F
  hub_percentile        : 0.2107

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 763.4014
  market_val            : 763.4014
  stop_liquidity        : 1
  hub_market_val        : 763.4014

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 30.9741
  pop_val               : 63.2112
  hub_pop_val           : 63.2112

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Mękarzowice (891e200a207ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Mękarzowice
  stop_id               : 83
  h3_index              : 891e200a207ffff
  hub_id                : 743
  hub_name              : Mękarzowice
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : C
  grade                 : F
  stop_percentile       : 56.8559
  local_percentile      : 0.1404
  stop_local_score_raw  : 0.1631
  local_score_raw       : -2.0914
  hub_grade             : F
  hub_percentile        : 0.1404

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 2419080.6131
  infra_score           : 0.0000
  stop_raw_gravity      : 929342.1819
  stop_entropy          : 1.6030
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 5556.6019
  market_val            : 621.3162
  stop_liquidity        : 868
  hub_market_val        : 621.3162

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 1478.2701
  pop_val               : 88.0000
  hub_pop_val           : 88.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Częstochowska (891e20431afffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Częstochowska
  stop_id               : 5262
  h3_index              : 891e20431afffff
  hub_id                : 734
  hub_name              : Częstochowska
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.0906
  local_percentile      : 0.0702
  stop_local_score_raw  : -2.6681
  local_score_raw       : -2.2130
  hub_grade             : F
  hub_percentile        : 0.0702

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 6050.3913
  infra_score           : 15299.2219
  stop_raw_gravity      : 2732.4496
  stop_entropy          : 1.2143
  hub_infra_score       : 15299.2219

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 18.4393
  market_val            : 18.4393
  stop_liquidity        : 1
  hub_market_val        : 18.4393

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 157.2939
  pop_val               : 352.0382
  hub_pop_val           : 352.0382

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 5x micro_parcel_locker
  > 2x micro_playground
  > 1x convenience_store
  > 1x education_preschool
  > 1x park_recreation

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store      : Żabka
    - education_preschool    : Złote Przedszkole Na Złotnikach
    - micro_parcel_locker    : Paczkomat InPost
    - micro_parcel_locker    : DPD Pickup Station
    - micro_parcel_locker    : Orlen Paczka
    - micro_parcel_locker    : DHL BOX 24/7
    - micro_parcel_locker    : Allegro One Box
```
</details>

---

## ZIELONA-GORA
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: 0.000, Std: 0.686)
     Rozkład Kartek (unikalne Huby): A: 26, A+: 14, B: 40, C: 53, D: 66, F: 66
[👥 BAZA LUDNOŚCI GUS] ✅ DEMOGRAFIA OK (Odchylenie zaledwie 1.2%)
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
[✅]  H3 Res 8 Grid 100% Valid (376 komórek, 52 pustyń transportowych)
```

### Faza 0: Statystyki ogólne
- **Populacja Miasta:** 141,680 (GUS Grid)
- **Transakcje RCN:** 5,063

### Faza III: Top 20 POI (Miasto)

| Kategoria | Tier | Ilość w Mieście | Wartość Punktowa (W) |
|---|---|---|---|
| `national_rail_hub` | T0_MEGA_HUB | 1 | 32,052,882 |
| `hospital_clinical` | T1_NATIONAL_MAGNET | 2 | 21,574,639 |
| `national_stadium` | T1_NATIONAL_MAGNET | 4 | 19,163,571 |
| `university_campus` | T1_NATIONAL_MAGNET | 11 | 18,051,276 |
| `industrial_zone` | T2_STRATEGIC_HUB | 105 | 4,421,131 |
| `commercial_zone` | T2_STRATEGIC_HUB | 65 | 4,244,894 |
| `shopping_mall` | T2_STRATEGIC_HUB | 27 | 3,590,314 |
| `supermarket` | T2_STRATEGIC_HUB | 67 | 2,571,757 |
| `government_central` | T2_STRATEGIC_HUB | 60 | 2,342,411 |
| `business_office` | T2_STRATEGIC_HUB | 69 | 2,038,709 |
| `education_high_school` | T3_LOCAL_CORE | 43 | 880,548 |
| `sports_centre` | T3_LOCAL_CORE | 89 | 462,161 |
| `social_support_mops` | T3_LOCAL_CORE | 14 | 459,103 |
| `culture_theatre` | T3_LOCAL_CORE | 27 | 419,617 |
| `health_clinic` | T3_LOCAL_CORE | 57 | 376,812 |
| `police_station` | T4_DAILY_SERVICE | 5 | 130,443 |
| `education_preschool` | T4_DAILY_SERVICE | 45 | 121,413 |
| `car_services` | T4_DAILY_SERVICE | 32 | 84,067 |
| `post_office` | T4_DAILY_SERVICE | 21 | 79,097 |
| `bank` | T4_DAILY_SERVICE | 35 | 67,213 |

### Faza IV: Próbki Pełnego DNA 100% (Zobacz szczegóły POI!)

#### NAJLEPSZE PRZYSTANKI (TOP 5)
<details><summary><b>DWORZEC GŁÓWNY (891f192f1a7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : DWORZEC GŁÓWNY
  stop_id               : 460
  h3_index              : 891f192f1a7ffff
  hub_id                : 200
  hub_name              : Dworzec Główny
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : C
  grade                 : A+
  stop_percentile       : 69.3920
  local_percentile      : 100.0000
  stop_local_score_raw  : 0.3530
  local_score_raw       : 1.5749
  hub_grade             : A+
  hub_percentile        : 100.0000

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 4472975.4010
  infra_score           : 11047133.6960
  stop_raw_gravity      : 1582643.6334
  stop_entropy          : 1.8263
  hub_infra_score       : 11047133.6960

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 1.2857
  transit_freq          : 35.2857
  stop_routes_count     : 2
  stop_routes           : 44, 101
  stop_hub_share        : 0.0364
  hub_departures_h      : 35.2857
  hub_routes            : 0, 1, 3, 5, 6, 8, 12, 17, 19, 20, 21, 22, 25, 26, 27, 30, 44, 101, 102, 103

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 7872.6811
  market_val            : 7808.9819
  stop_liquidity        : 44
  hub_market_val        : 7808.9819

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 256.5070
  pop_val               : 550.3326
  hub_pop_val           : 550.3326

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 18x park_recreation
  > 11x gastronomy
  > 9x convenience_store
  > 8x micro_playground
  > 7x micro_parcel_locker
  > 6x specialized_retail
  > 5x pharmacy
  > 5x government_central
  > 4x sports_centre
  > 4x health_clinic
  > 3x supermarket
  > 2x business_office
  > 2x micro_atm
  > 1x police_station
  > 1x culture_theatre
  > 1x national_rail_hub
  > 1x personal_services
  > 1x industrial_zone
  > 1x education_high_school
  > 1x education_preschool
  > 1x social_support_mops
  > 1x bank
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - pharmacy               : Dbam o Zdrowie
    - convenience_store      : Mlekovitka
    - gastronomy             : Son Hao
    - gastronomy             : Kuchnia u Jasia
    - supermarket            : Kwiaciarnia
    - police_station         : Komenda Regionalna Straży Ochrony Kolei w Zielonej Górze
    - gastronomy             : Retro
    - convenience_store      : 1 Minute
    - gastronomy             : Bar Turysta
    - convenience_store      : Żabka
    - convenience_store      : Żabka
    - convenience_store      : Żabka
```
</details>
<details><summary><b>Centrum (891f192f117ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Centrum
  stop_id               : 10
  h3_index              : 891f192f117ffff
  hub_id                : 140
  hub_name              : Centrum
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 99.5807
  local_percentile      : 99.6226
  stop_local_score_raw  : 1.5448
  local_score_raw       : 1.5096
  hub_grade             : A+
  hub_percentile        : 99.6226

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 10933759.8245
  infra_score           : 19944016.5119
  stop_raw_gravity      : 4474951.3649
  stop_entropy          : 1.4433
  hub_infra_score       : 19944016.5119

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 13.4286
  transit_freq          : 24.6429
  stop_routes_count     : 11
  stop_routes           : 0, 5, 6, 8, 12, 17, 19, 20, 26, 27, 44
  stop_hub_share        : 0.5449
  hub_departures_h      : 24.6429
  hub_routes            : 0, 5, 6, 8, 12, 17, 19, 20, 26, 27, 44

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 7501.6230
  market_val            : 7660.4555
  stop_liquidity        : 60
  hub_market_val        : 7660.4555

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 412.9081
  pop_val               : 814.9750
  hub_pop_val           : 814.9750

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 65x specialized_retail
  > 62x gastronomy
  > 34x personal_services
  > 19x bank
  > 16x government_central
  > 16x park_recreation
  > 14x convenience_store
  > 10x micro_playground
  > 9x micro_atm
  > 6x health_clinic
  > 6x place_of_worship
  > 5x business_office
  > 5x pharmacy
  > 5x culture_theatre
  > 5x shopping_mall
  > 4x supermarket
  > 4x education_preschool
  > 4x commercial_zone
  > 1x social_support_mops
  > 1x micro_parcel_locker
  > 1x post_office
  > 1x education_high_school
  > 1x university_campus
  > 1x car_services

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - bank                   : Millennium Bank
    - micro_atm              : Bankomat BZ WBK
    - bank                   : Millennium Bank Przedsiębiorstwa
    - convenience_store      : Spar Express
    - convenience_store      : Żabka
    - gastronomy             : La Tulipe Noire
    - business_office        : Port2000
    - supermarket            : Biedronka
    - bank                   : PKO BP
    - gastronomy             : Heban
    - gastronomy             : Ogień i Oliwa
    - gastronomy             : Niger
```
</details>
<details><summary><b>Staszica (891f192f1a7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Staszica
  stop_id               : 12
  h3_index              : 891f192f1a7ffff
  hub_id                : 39
  hub_name              : Staszica
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 99.1614
  local_percentile      : 99.2453
  stop_local_score_raw  : 1.3562
  local_score_raw       : 1.3793
  hub_grade             : A+
  hub_percentile        : 99.2453

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 3655345.9639
  infra_score           : 7947218.7598
  stop_raw_gravity      : 1142016.3660
  stop_entropy          : 2.2008
  hub_infra_score       : 7947218.7598

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 11.7857
  transit_freq          : 23.1429
  stop_routes_count     : 9
  stop_routes           : 0, 1, 5, 8, 19, 21, 22, 44, 103
  stop_hub_share        : 0.5093
  hub_departures_h      : 23.1429
  hub_routes            : 0, 1, 5, 8, 19, 21, 22, 44, 103

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 7788.3272
  market_val            : 7805.4638
  stop_liquidity        : 52
  hub_market_val        : 7805.4638

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 368.2466
  pop_val               : 801.2603
  hub_pop_val           : 801.2603

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 16x park_recreation
  > 8x convenience_store
  > 8x gastronomy
  > 8x micro_playground
  > 7x micro_parcel_locker
  > 5x pharmacy
  > 5x sports_centre
  > 5x health_clinic
  > 3x specialized_retail
  > 3x government_central
  > 3x education_high_school
  > 2x supermarket
  > 2x culture_theatre
  > 2x business_office
  > 1x police_station
  > 1x post_office
  > 1x micro_atm
  > 1x national_stadium
  > 1x industrial_zone
  > 1x education_preschool
  > 1x social_support_mops
  > 1x bank
  > 1x hospital_clinical

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store      : Mlekovitka
    - gastronomy             : Son Hao
    - supermarket            : Kwiaciarnia
    - police_station         : Komenda Regionalna Straży Ochrony Kolei w Zielonej Górze
    - gastronomy             : Retro
    - convenience_store      : 1 Minute
    - gastronomy             : Bar Turysta
    - convenience_store      : Żabka
    - convenience_store      : Żabka
    - convenience_store      : Żabka
    - convenience_store      : Żabka
    - pharmacy               : Panax
```
</details>
<details><summary><b>Monte Cassino (891f192f397ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Monte Cassino
  stop_id               : 129
  h3_index              : 891f192f397ffff
  hub_id                : 213
  hub_name              : Monte Cassino
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 98.3229
  local_percentile      : 98.8679
  stop_local_score_raw  : 1.2557
  local_score_raw       : 1.2526
  hub_grade             : A+
  hub_percentile        : 98.8679

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 6056620.9931
  infra_score           : 9715511.2242
  stop_raw_gravity      : 2212251.4931
  stop_entropy          : 1.7378
  hub_infra_score       : 9715511.2242

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 7.5000
  transit_freq          : 14.4286
  stop_routes_count     : 7
  stop_routes           : 0, 2, 8, 9, 10, 12, 14
  stop_hub_share        : 0.5198
  hub_departures_h      : 14.4286
  hub_routes            : 0, 2, 8, 9, 10, 12, 14

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 7233.7260
  market_val            : 7233.7260
  stop_liquidity        : 78
  hub_market_val        : 7233.7260

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 1214.4098
  pop_val               : 2041.3597
  hub_pop_val           : 2041.3597

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 20x micro_playground
  > 10x micro_parcel_locker
  > 9x convenience_store
  > 7x health_clinic
  > 7x pharmacy
  > 6x supermarket
  > 6x personal_services
  > 3x car_services
  > 3x post_office
  > 3x education_high_school
  > 3x education_preschool
  > 2x micro_atm
  > 2x specialized_retail
  > 2x commercial_zone
  > 2x park_recreation
  > 1x bank
  > 1x culture_theatre
  > 1x place_of_worship
  > 1x business_office
  > 1x government_central
  > 1x university_campus

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - car_services           : Circle K
    - micro_atm              : Bankomat BZ WBK
    - post_office            : UP Zielona Góra 10
    - supermarket            : Chata Polska
    - convenience_store      : Żabka
    - convenience_store      : Chata Polska
    - convenience_store      : Edbal
    - health_clinic          : Centrum Stomatologii
    - convenience_store      : Żabka
    - pharmacy               : Dr. Max
    - personal_services      : Ewa
    - personal_services      : Fantazja
```
</details>
<details><summary><b>Wiśniowa (891f192f3b3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Wiśniowa
  stop_id               : 128
  h3_index              : 891f192f3b3ffff
  hub_id                : 35
  hub_name              : Wiśniowa
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : A+
  grade                 : A+
  stop_percentile       : 98.1132
  local_percentile      : 98.4906
  stop_local_score_raw  : 1.2403
  local_score_raw       : 1.2457
  hub_grade             : A+
  hub_percentile        : 98.4906

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 3740572.7636
  infra_score           : 6493408.0044
  stop_raw_gravity      : 1346048.3739
  stop_entropy          : 1.7789
  hub_infra_score       : 6493408.0044

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 7.5000
  transit_freq          : 14.4286
  stop_routes_count     : 7
  stop_routes           : 0, 2, 8, 9, 10, 12, 14
  stop_hub_share        : 0.5198
  hub_departures_h      : 14.4286
  hub_routes            : 0, 2, 8, 9, 10, 12, 14

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 7847.0899
  market_val            : 7847.0899
  stop_liquidity        : 118
  hub_market_val        : 7847.0899

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 1355.5215
  pop_val               : 2483.5700
  hub_pop_val           : 2483.5700

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 19x micro_playground
  > 11x convenience_store
  > 10x micro_parcel_locker
  > 7x health_clinic
  > 6x personal_services
  > 5x gastronomy
  > 5x supermarket
  > 5x pharmacy
  > 5x education_preschool
  > 4x bank
  > 4x education_high_school
  > 3x micro_atm
  > 3x specialized_retail
  > 3x park_recreation
  > 2x post_office
  > 2x culture_theatre
  > 2x university_campus
  > 1x police_station
  > 1x place_of_worship
  > 1x business_office
  > 1x car_services

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : Bankomat BZ WBK
    - gastronomy             : Bella Napoli
    - convenience_store      : Żabka
    - convenience_store      : Żabka
    - convenience_store      : Żabka
    - supermarket            : Chata Polska
    - bank                   : Kasa Stefczyka
    - convenience_store      : Żabka
    - gastronomy             : Song Lam
    - convenience_store      : Lewiatan
    - bank                   : PKO BP
    - convenience_store      : Sklep spożywczy
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>DRZONKÓW LEŚNA (891f192dc0fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : DRZONKÓW LEŚNA
  stop_id               : 438
  h3_index              : 891f192dc0fffff
  hub_id                : 6
  hub_name              : DRZONKÓW
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 1.8868
  local_percentile      : 1.8868
  stop_local_score_raw  : -1.9069
  local_score_raw       : -1.9414
  hub_grade             : F
  hub_percentile        : 1.8868

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.2857
  transit_freq          : 0.5714
  stop_routes_count     : 1
  stop_routes           : 10
  stop_hub_share        : 0.5000
  hub_departures_h      : 0.5714
  hub_routes            : 10

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 5531.5663
  market_val            : 5531.5663
  stop_liquidity        : 0
  hub_market_val        : 5531.5663

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 75.0629
  pop_val               : 190.5548
  hub_pop_val           : 190.5548

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Elektrociepłownia (891f192f573ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Elektrociepłownia
  stop_id               : 115
  h3_index              : 891f192f573ffff
  hub_id                : 146
  hub_name              : Elektrociepłownia
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.2096
  local_percentile      : 1.5094
  stop_local_score_raw  : -2.3185
  local_score_raw       : -2.0156
  hub_grade             : F
  hub_percentile        : 1.5094

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 3315992.9183
  infra_score           : 5277553.5213
  stop_raw_gravity      : 1507363.3153
  stop_entropy          : 1.1999
  hub_infra_score       : 5277553.5213

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.2143
  transit_freq          : 0.2143
  stop_routes_count     : 3
  stop_routes           : 2, 3, 6
  stop_hub_share        : 1.0000
  hub_departures_h      : 0.2143
  hub_routes            : 2, 3, 6

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 27.6539
  market_val            : 27.6539
  stop_liquidity        : 10
  hub_market_val        : 27.6539

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 5.2969
  pop_val               : 7.7467
  hub_pop_val           : 7.7467

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 8x industrial_zone
  > 7x specialized_retail
  > 5x car_services
  > 4x micro_parcel_locker
  > 3x gastronomy
  > 3x commercial_zone
  > 2x government_central
  > 1x convenience_store
  > 1x post_office
  > 1x business_office
  > 1x shopping_mall
  > 1x supermarket
  > 1x micro_playground
  > 1x university_campus

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - specialized_retail     : JYSK
    - specialized_retail     : Black Red White
    - specialized_retail     : Derby Jeans
    - specialized_retail     : Media Expert
    - gastronomy             : Flamingo
    - specialized_retail     : Pepco
    - specialized_retail     : Abra Meble
    - gastronomy             : Nova Shusi
    - specialized_retail     : Vox
    - car_services           : LD Auto Service S.C.
    - government_central     : Agencja Restrukturyzacji i Modernizacji Rolnictwa
    - micro_parcel_locker    : Paczkomat InPost
```
</details>
<details><summary><b>Leśniczówka (891f192ca57ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Leśniczówka
  stop_id               : 721
  h3_index              : 891f192ca57ffff
  hub_id                : 207
  hub_name              : Leśniczówka
  is_hub_anchor         : False

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 1.0482
  local_percentile      : 1.1321
  stop_local_score_raw  : -2.0936
  local_score_raw       : -2.1374
  hub_grade             : F
  hub_percentile        : 1.1321

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.3571
  transit_freq          : 0.7143
  stop_routes_count     : 1
  stop_routes           : 30
  stop_hub_share        : 0.5000
  hub_departures_h      : 0.7143
  hub_routes            : 30

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 5531.5663
  market_val            : 5531.5663
  stop_liquidity        : 0
  hub_market_val        : 5531.5663

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 5.5087
  pop_val               : 11.0000
  hub_pop_val           : 11.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Barcikowiczki (891e2692d0fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Barcikowiczki
  stop_id               : 987
  h3_index              : 891e2692d0fffff
  hub_id                : 223
  hub_name              : Barcikowiczki
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 1.2579
  local_percentile      : 0.7547
  stop_local_score_raw  : -2.0469
  local_score_raw       : -2.2251
  hub_grade             : F
  hub_percentile        : 0.7547

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.0000
  transit_freq          : 0.0000
  stop_routes_count     : 0
  stop_routes           : 
  stop_hub_share        : 0.0000
  hub_departures_h      : 0.0000
  hub_routes            : 

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 5531.5663
  market_val            : 5531.5663
  stop_liquidity        : 0
  hub_market_val        : 5531.5663

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 80.0000
  pop_val               : 80.0000
  hub_pop_val           : 80.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Kiełpin las (891e2692ddbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Kiełpin las
  stop_id               : 870
  h3_index              : 891e2692ddbffff
  hub_id                : 239
  hub_name              : Kiełpin las
  is_hub_anchor         : True

[OCENA Z-SCORE & RANK]
  stop_grade            : F
  grade                 : F
  stop_percentile       : 0.5241
  local_percentile      : 0.3774
  stop_local_score_raw  : -2.2909
  local_score_raw       : -2.3900
  hub_grade             : F
  hub_percentile        : 0.3774

[FILAR 1: INFRASTRUKTURA]
  stop_infra_score      : 0.0000
  infra_score           : 0.0000
  stop_raw_gravity      : 0.0000
  stop_entropy          : 0.0000
  hub_infra_score       : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h     : 0.2857
  transit_freq          : 0.5714
  stop_routes_count     : 1
  stop_routes           : 27
  stop_hub_share        : 0.5000
  hub_departures_h      : 0.5714
  hub_routes            : 27

[FILAR 3: NIERUCHOMOŚCI RCN]
  stop_market_val       : 5531.5663
  market_val            : 5531.5663
  stop_liquidity        : 0
  hub_market_val        : 5531.5663

[FILAR 4: GĘSTOŚĆ POPULACJI]
  stop_pop_val          : 0.0000
  pop_val               : 0.0000
  hub_pop_val           : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>

---
