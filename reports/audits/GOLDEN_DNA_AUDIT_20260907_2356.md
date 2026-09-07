# EKSHIBICYJNY AUDYT DNA TRANSPORTOWEGO POLSKI - 2026-09-08 00:00

---
## PODSUMOWANIE RYGORYSTYCZNE DLA POLSKI
```text
Przeprobkowanych Miast    : 30
Laczna Liczba Slupkow     : 60,265 fizycznych slupkow
Laczna Liczba Wezlow      : 28,317 wezlow przesiadkowych (hubs)
Krytyczne Nulle / Inf     : 0 FAILURES
Laczna Populacja GUS      : 16,436,792 osob (Siatka 250m GUS w strefach)
Transakcje Notarialne RCN : 1,104,389 aktow notarialnych
Obiekty Infrastruktury OSM: 10,640,807 zweryfikowanych geometrii
```
---


## WALIDACJA ZRZUTU KRAJOWEGO (NATIONAL STITCHING)
```text
Liczba Przystankow w Kraju: 60,265
Uzytych Miast do Z-Score  : 30
Przedzialy Kwantyli       : od 0.00% do 100.00%
[PASS] Percentyle krajowe objely zbior i nie ulegly scisnieciu statystycznemu.
```
---

## BIALYSTOK
#### DASHBOARD ASERCJI PIPELINE'U (Pelna Integralnosc Bazy)
```text
[PASS ZERO NULLS & INFS] Petla obliczeniowa wygenerowala 100% spojnych komorek.
[STATS] [PASS] Z-Score Micro VALID (Mean: -0.000, Std: 0.674)
        Rozklad Rang Slupkow (Micro): A: 271, A+: 137, B: 405, C: 543, D: 679, F: 677
[STATS] [PASS] Z-Score Macro VALID (Mean: -0.000, Std: 0.717)
        Rozklad Rang Hubow (Macro): A: 99, A+: 50, B: 149, C: 198, D: 248, F: 247
[DEMOGRAPHY] [INFO] OBSZAR AGLOMERACYJNY: +31.3% (GUS strefa aglomeracyjna: 380,838 vs Miasto rdzen: 290,000)
[PASS] POI Parquet 100% Valid (Matematyka Huffa dziala)
[PASS] POP Parquet 100% Valid
[PASS] H3 Res 8 Grid 100% Valid (1,004 komorek, 78 pustyn transportowych)
```

### Faza 0: Statystyki Ogolne i Balans Sieci
- **Slupki Fizyczne (Micro):** 2,712 slupkow
- **Wezly Logiczne (Macro Hubs):** 991 hubow (Wskaznik konsolidacji: 2.74 slupka/hub)
- **Populacja Strefy Transportowej (GUS 250m):** 380,838 mieszkancow
- **Transakcje Notarialne RCN:** 34,402 aktow
### Faza 1: Siatka Analityczna Uber H3 Res 8 (0.74 km2 / komorka)
- **Liczba Komorek H3 Res 8:** 1,004
- **Rynek Nieruchomosci RCN w Heksach:** Pokrycie 22.4% (225/1004 komorek), Srednia: 5,687 PLN/m2, Mediana: 6,006 PLN/m2, Std: 2,361, Min: 102, Max: 18,079 PLN/m2
- **Demografia GUS NSP 2021 w Heksach:** Laczna ludnosc w heksach: 380,838, Srednia/heks: 379.3, Mediana: 33.0, Std: 1185.9, Max: 9,562
- **Podaz Transportu w Heksach:** Sredni Transport Score: 7.74, Max Transport Score: 100.00, Srednia odjazdow/h: 15.84, Pustynie Transportowe TDI: 78

#### TOP 5 Pustyn Transportowych (The Investment List)
| H3 Index | Lat | Lon | Populacja GUS | Odjazdy/h | TDI Score |
|---|---|---|---|---|---|
| `881f513353fffff` | 53.12649 | 23.19571 | 2,401 | 0.0 | **81.67** |
| `881f510499fffff` | 53.08631 | 23.12258 | 1,664 | 0.0 | **77.83** |
| `881f51323dfffff` | 53.13037 | 23.24288 | 1,371 | 0.0 | **75.80** |
| `881f51326bfffff` | 53.15065 | 23.21306 | 1,283 | 0.0 | **75.10** |
| `881f51a99bfffff` | 53.16819 | 23.19607 | 1,141 | 0.0 | **73.87** |

#### TOP 5 Biegunow Transportu (Najwyzsza Podaz)
| H3 Index | Lat | Lon | Transport Score | Odjazdy/h | Liczba Slupkow |
|---|---|---|---|---|---|
| `881f513349fffff` | 53.13740 | 23.14438 | **100.00** | 449.4 | 14 |
| `881f51330bfffff` | 53.11713 | 23.17421 | **100.00** | 198.6 | 20 |
| `881f51a9b7fffff` | 53.13936 | 23.16797 | **100.00** | 275.5 | 19 |
| `881f51a9b5fffff` | 53.14208 | 23.15513 | **100.00** | 230.7 | 30 |
| `881f51a9bdfffff` | 53.14949 | 23.15305 | **100.00** | 291.0 | 18 |

#### TOP 5 Najdrozszych Heksow Mieszkaniowych RCN
| H3 Index | Lat | Lon | Mediana Ceny m2 | Liczba Transakcji |
|---|---|---|---|---|
| `881f511595fffff` | 53.16403 | 22.91953 | **18,079 PLN** | 2 |
| `881f51049bfffff` | 53.08358 | 23.13541 | **11,863 PLN** | 2 |
| `881f51330bfffff` | 53.11713 | 23.17421 | **10,663 PLN** | 85 |
| `881f5ccb63fffff` | 53.09862 | 23.64943 | **10,429 PLN** | 3 |
| `881f5104cbfffff` | 53.10189 | 23.08201 | **9,910 PLN** | 1 |

### Faza 2: Audyt Zbednosci TCRP Report 100 (The Axe List)
- **Zbedne Slupki (R >= 0.50 - Umiarkowana Kanibalizacja):** 2076
- **Zbedne Slupki (R >= 0.70 - Rekomendacja Likwidacji):** 2068
- **Zbedne Slupki (R >= 0.90 - Skrajna Zbednosc / Dubel):** 2055

| Zbedny Słupek | Dominujacy Słupek | Dystans [m] | S_service | S_spatial | S_cannibal | R-Score |
|---|---|---|---|---|---|---|
| Złotniki(1435) (#1435, 0.2857142857142857 odj/h) | Złotniki (1435) (#1435, 0.2857142857142857 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |
| Złotniki (1435) (#1435, 0.2857142857142857 odj/h) | Złotniki(1435) (#1435, 0.2857142857142857 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |
| Kleosin/Kraszewskiego(1262) (#1262, 2.5714285714285716 odj/h) | Kleosin/Kraszewskiego (1262) (#1262, 2.5714285714285716 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |
| Kleosin/Kraszewskiego (1261) (#1261, 2.5714285714285716 odj/h) | Kleosin/Kraszewskiego(1261) (#1261, 2.5714285714285716 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |
| Giedroycia/Wołkowa(918) (#918, 1.8571428571428572 odj/h) | Giedroycia/Wołkowa (918) (#918, 1.8571428571428572 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |

### Faza 3: Hierarchia Magnesow Miejskich POI

#### Top 20 Kategorii POI w Miescie
| Kategoria | Tier | Ilosc w Miescie | Wartosc Punktowa (W) |
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

#### TOP 10 Konkretnych Nazwanych Magnesow Miejskich (T0, T1, T2)
| Nazwa Obiektu | Kategoria POI | Tier | Waga Przyciagania (W) |
|---|---|---|---|
| **Białystok Fabryczny** | `national_rail_hub` | T0_MEGA_HUB | 34,866,932 |
| **Stadion lekkoatletyczny im. Wojciecha Nowickiego** | `national_stadium` | T1_NATIONAL_MAGNET | 22,252,840 |
| **Białostockie Centrum Onkologii im. Marii Skłodowskiej - Curie** | `hospital_clinical` | T1_NATIONAL_MAGNET | 18,418,418 |
| **Uniwersytecki Szpital Kliniczny - Oddział** | `hospital_clinical` | T1_NATIONAL_MAGNET | 18,418,418 |
| **Samodzielny Publiczny Psychiatryczny Zakład Opieki Zdrowotnej im. dr. Stanisława Deresza** | `hospital_clinical` | T1_NATIONAL_MAGNET | 18,418,418 |
| **Wojewódzki Szpital Zespolony im. Jędrzeja Śniadeckiego** | `hospital_clinical` | T1_NATIONAL_MAGNET | 18,418,418 |
| **Samodzielny Szpital Miejski im. PCK** | `hospital_clinical` | T1_NATIONAL_MAGNET | 18,418,418 |
| **Uniwersytecki Dziecięcy Szpital Kliniczny im. Ludwika Zamenhofa** | `hospital_clinical` | T1_NATIONAL_MAGNET | 18,418,418 |
| **Uniwersytecki Szpital Kliniczny** | `hospital_clinical` | T1_NATIONAL_MAGNET | 16,034,164 |
| **Neurologia** | `hospital_clinical` | T1_NATIONAL_MAGNET | 16,034,164 |

### Faza 4: Probki Pelnego DNA (Wszystkie 53 Metryki)

#### POZIOM 1: NAJLEPSZE SLUPKI FIZYCZNE MICRO (TOP 5)
<details><summary><b>Sienkiewicza/Ryska (420) (ID: 420 | H3: 891f51a9b67ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Sienkiewicza/Ryska (420)
  stop_id                 : 420
  h3_index                : 891f51a9b67ffff
  hub_id                  : 489
  hub_name                : Sienkiewicza/Ryska (420)
  is_hub_anchor           : True
  stop_lat                : 53.1406
  stop_lon                : 23.1729

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.9816
  stop_local_score_raw    : 1.4791

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 10603362.5581
  stop_raw_gravity        : 4394146.2417
  stop_entropy            : 1.4131

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 22.7857
  stop_routes_count       : 10
  stop_routes             : 3, 6, 9, 13, 16, 18, 22, 100, 108, 111
  stop_hub_share          : 1.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 8297.3621
  stop_liquidity          : 3422

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 1500.9865

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 14x gastronomy
  > 13x convenience_store
  > 11x micro_playground
  > 8x education_preschool
  > 7x education_high_school
  > 6x place_of_worship
  > 6x pharmacy
  > 6x health_clinic
  > 6x micro_parcel_locker
  > 5x personal_services
  > 3x supermarket
  > 3x micro_atm
  > 3x university_campus
  > 3x government_central
  > 3x social_support_mops
  > 2x specialized_retail
  > 2x post_office
  > 2x hospital_clinical
  > 1x car_services
  > 1x business_office
  > 1x culture_theatre
  > 1x park_recreation
  > 1x shopping_mall
  > 1x police_station
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - supermarket              : Biedronka
    - place_of_worship         : Kaplica pw. Matki Bożej Częstochowskiej
    - car_services             : Circle K
    - pharmacy                 : Dr. Max
    - micro_atm                : PKO BP
    - gastronomy               : Super King
    - personal_services        : Mirosław Konopko
    - personal_services        : M Studio
    - personal_services        : Rossmann
    - convenience_store        : Delikatesy u Chłopców
```
</details>
<details><summary><b>Sienkiewicza/Ryska(420) (ID: 420 | H3: 891f51a9b67ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Sienkiewicza/Ryska(420)
  stop_id                 : 420
  h3_index                : 891f51a9b67ffff
  hub_id                  : 489
  hub_name                : Sienkiewicza/Ryska (420)
  is_hub_anchor           : False
  stop_lat                : 53.1406
  stop_lon                : 23.1729

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.9816
  stop_local_score_raw    : 1.4791

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 10603362.5581
  stop_raw_gravity        : 4394146.2417
  stop_entropy            : 1.4131

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 22.7857
  stop_routes_count       : 10
  stop_routes             : 3, 6, 9, 13, 16, 18, 22, 100, 108, 111
  stop_hub_share          : 1.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 8297.3621
  stop_liquidity          : 3422

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 1500.9865

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 14x gastronomy
  > 13x convenience_store
  > 11x micro_playground
  > 8x education_preschool
  > 7x education_high_school
  > 6x place_of_worship
  > 6x pharmacy
  > 6x health_clinic
  > 6x micro_parcel_locker
  > 5x personal_services
  > 3x supermarket
  > 3x micro_atm
  > 3x university_campus
  > 3x government_central
  > 3x social_support_mops
  > 2x specialized_retail
  > 2x post_office
  > 2x hospital_clinical
  > 1x car_services
  > 1x business_office
  > 1x culture_theatre
  > 1x park_recreation
  > 1x shopping_mall
  > 1x police_station
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - supermarket              : Biedronka
    - place_of_worship         : Kaplica pw. Matki Bożej Częstochowskiej
    - car_services             : Circle K
    - pharmacy                 : Dr. Max
    - micro_atm                : PKO BP
    - gastronomy               : Super King
    - personal_services        : Mirosław Konopko
    - personal_services        : M Studio
    - personal_services        : Rossmann
    - convenience_store        : Delikatesy u Chłopców
```
</details>
<details><summary><b>Sienkiewicza/Ryska (419) (ID: 419 | H3: 891f51a9b2bffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Sienkiewicza/Ryska (419)
  stop_id                 : 419
  h3_index                : 891f51a9b2bffff
  hub_id                  : 354
  hub_name                : Sienkiewicza/Ryska (419)
  is_hub_anchor           : True
  stop_lat                : 53.1412
  stop_lon                : 23.1741

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.9078
  stop_local_score_raw    : 1.4020

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 5950828.4118
  stop_raw_gravity        : 2256018.7440
  stop_entropy            : 1.6378

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 22.0714
  stop_routes_count       : 10
  stop_routes             : 3, 6, 9, 13, 16, 18, 22, 100, 108, 111
  stop_hub_share          : 1.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 8193.0608
  stop_liquidity          : 3494

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 1371.7115

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 13x gastronomy
  > 10x convenience_store
  > 10x micro_playground
  > 7x health_clinic
  > 7x micro_parcel_locker
  > 6x pharmacy
  > 5x micro_atm
  > 5x supermarket
  > 5x personal_services
  > 5x education_preschool
  > 5x place_of_worship
  > 4x education_high_school
  > 3x university_campus
  > 3x government_central
  > 3x social_support_mops
  > 2x specialized_retail
  > 1x post_office
  > 1x sports_centre
  > 1x culture_theatre
  > 1x park_recreation
  > 1x shopping_mall
  > 1x police_station
  > 1x hospital_clinical
  > 1x business_office
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - supermarket              : Biedronka
    - pharmacy                 : Dr. Max
    - micro_atm                : PKO BP
    - gastronomy               : Super King
    - personal_services        : Mirosław Konopko
    - personal_services        : M Studio
    - personal_services        : Rossmann
    - convenience_store        : Delikatesy u Chłopców
    - convenience_store        : Chorten
    - post_office              : Poczta Polska - UP Białystok 25
```
</details>
<details><summary><b>Sienkiewicza/Ryska(419) (ID: 419 | H3: 891f51a9b2bffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Sienkiewicza/Ryska(419)
  stop_id                 : 419
  h3_index                : 891f51a9b2bffff
  hub_id                  : 354
  hub_name                : Sienkiewicza/Ryska (419)
  is_hub_anchor           : False
  stop_lat                : 53.1412
  stop_lon                : 23.1741

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.9078
  stop_local_score_raw    : 1.4020

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 5950828.4118
  stop_raw_gravity        : 2256018.7440
  stop_entropy            : 1.6378

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 22.0714
  stop_routes_count       : 10
  stop_routes             : 3, 6, 9, 13, 16, 18, 22, 100, 108, 111
  stop_hub_share          : 1.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 8193.0608
  stop_liquidity          : 3494

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 1371.7115

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 13x gastronomy
  > 10x convenience_store
  > 10x micro_playground
  > 7x health_clinic
  > 7x micro_parcel_locker
  > 6x pharmacy
  > 5x micro_atm
  > 5x supermarket
  > 5x personal_services
  > 5x education_preschool
  > 5x place_of_worship
  > 4x education_high_school
  > 3x university_campus
  > 3x government_central
  > 3x social_support_mops
  > 2x specialized_retail
  > 1x post_office
  > 1x sports_centre
  > 1x culture_theatre
  > 1x park_recreation
  > 1x shopping_mall
  > 1x police_station
  > 1x hospital_clinical
  > 1x business_office
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - supermarket              : Biedronka
    - pharmacy                 : Dr. Max
    - micro_atm                : PKO BP
    - gastronomy               : Super King
    - personal_services        : Mirosław Konopko
    - personal_services        : M Studio
    - personal_services        : Rossmann
    - convenience_store        : Delikatesy u Chłopców
    - convenience_store        : Chorten
    - post_office              : Poczta Polska - UP Białystok 25
```
</details>
<details><summary><b>Sienkiewicza/Komenda Woj. Policji(418) (ID: 418 | H3: 891f51a9b63ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Sienkiewicza/Komenda Woj. Policji(418)
  stop_id                 : 418
  h3_index                : 891f51a9b63ffff
  hub_id                  : 709
  hub_name                : Sienkiewicza/Komenda Woj. Policji (418)
  is_hub_anchor           : False
  stop_lat                : 53.1386
  stop_lon                : 23.1699

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.8341
  stop_local_score_raw    : 1.3983

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 7519871.7567
  stop_raw_gravity        : 2771147.5990
  stop_entropy            : 1.7136

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 20.5714
  stop_routes_count       : 9
  stop_routes             : 3, 6, 9, 13, 16, 18, 100, 108, 111
  stop_hub_share          : 1.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 8408.8474
  stop_liquidity          : 3532

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 1261.9707

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 17x gastronomy
  > 16x convenience_store
  > 9x pharmacy
  > 9x health_clinic
  > 8x place_of_worship
  > 8x personal_services
  > 8x education_high_school
  > 8x micro_parcel_locker
  > 7x government_central
  > 6x micro_playground
  > 6x education_preschool
  > 5x micro_atm
  > 5x specialized_retail
  > 4x supermarket
  > 4x bank
  > 3x university_campus
  > 3x hospital_clinical
  > 2x post_office
  > 2x culture_theatre
  > 2x shopping_mall
  > 2x police_station
  > 2x social_support_mops
  > 1x business_office

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - government_central       : Komenda Miejska Państwowej Straży Pożarnej w Białymstoku
    - supermarket              : Biedronka
    - place_of_worship         : Kaplica pw. Matki Bożej Częstochowskiej
    - place_of_worship         : Kaplica pw. Świętej Rodziny
    - pharmacy                 : Dr. Max
    - micro_atm                : PKO BP
    - gastronomy               : Super King
    - personal_services        : Mirosław Konopko
    - personal_services        : M Studio
    - gastronomy               : Bar Grodno
```
</details>

#### POZIOM 1: NAJSLABSZE SLUPKI FIZYCZNE MICRO (BOTTOM 5)
<details><summary><b>Choroszcz/Dominikańska(939) (ID: 939 | H3: 891f51063d3ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Choroszcz/Dominikańska(939)
  stop_id                 : 939
  h3_index                : 891f51063d3ffff
  hub_id                  : 20
  hub_name                : Choroszcz/Zastawie (935)
  is_hub_anchor           : False
  stop_lat                : 53.1398
  stop_lon                : 22.9855

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.2028
  stop_local_score_raw    : -2.1215

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 101972.6993
  stop_raw_gravity        : 54425.5187
  stop_entropy            : 0.8736

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 1.7143
  stop_routes_count       : 1
  stop_routes             : 103
  stop_hub_share          : 0.5000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 101.6202
  stop_liquidity          : 2

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 110.7674

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 2x convenience_store
  > 2x place_of_worship
  > 1x government_central
  > 1x micro_parcel_locker
  > 1x bank

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store        : Chorten
    - government_central       : Urząd Miejski w Choroszczy
    - place_of_worship         : Kaplica pw. Matki Bożej Anielskiej
    - micro_parcel_locker      : Paczkomat InPost
    - place_of_worship         : Kościół pw. Świętego Jana Chrzciciela i Świętego Szczepana Męczennika
    - bank                     : Bank Spółdzielczy
```
</details>
<details><summary><b>Choroszcz/Zastawie(935) (ID: 935 | H3: 891f51063d3ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Choroszcz/Zastawie(935)
  stop_id                 : 935
  h3_index                : 891f51063d3ffff
  hub_id                  : 20
  hub_name                : Choroszcz/Zastawie (935)
  is_hub_anchor           : False
  stop_lat                : 53.1393
  stop_lon                : 22.9843

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.1291
  stop_local_score_raw    : -2.1838

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 44950.5800
  stop_raw_gravity        : 23646.0953
  stop_entropy            : 0.9010

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 1.7143
  stop_routes_count       : 1
  stop_routes             : 103
  stop_hub_share          : 0.5000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 101.6202
  stop_liquidity          : 2

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 117.9280

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 3x place_of_worship
  > 2x convenience_store
  > 1x government_central
  > 1x micro_parcel_locker
  > 1x bank

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store        : Chorten
    - place_of_worship         : Kapliczka św. Jana Nepomucena
    - government_central       : Urząd Miejski w Choroszczy
    - place_of_worship         : Kaplica pw. Matki Bożej Anielskiej
    - micro_parcel_locker      : Paczkomat InPost
    - place_of_worship         : Kościół pw. Świętego Jana Chrzciciela i Świętego Szczepana Męczennika
    - bank                     : Bank Spółdzielczy
```
</details>
<details><summary><b>Choroszcz/Zastawie (935) (ID: 935 | H3: 891f51063d3ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Choroszcz/Zastawie (935)
  stop_id                 : 935
  h3_index                : 891f51063d3ffff
  hub_id                  : 20
  hub_name                : Choroszcz/Zastawie (935)
  is_hub_anchor           : True
  stop_lat                : 53.1393
  stop_lon                : 22.9843

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.1291
  stop_local_score_raw    : -2.1838

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 44950.5800
  stop_raw_gravity        : 23646.0953
  stop_entropy            : 0.9010

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 1.7143
  stop_routes_count       : 1
  stop_routes             : 103
  stop_hub_share          : 0.5000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 101.6202
  stop_liquidity          : 2

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 117.9280

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 3x place_of_worship
  > 2x convenience_store
  > 1x government_central
  > 1x micro_parcel_locker
  > 1x bank

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store        : Chorten
    - place_of_worship         : Kapliczka św. Jana Nepomucena
    - government_central       : Urząd Miejski w Choroszczy
    - place_of_worship         : Kaplica pw. Matki Bożej Anielskiej
    - micro_parcel_locker      : Paczkomat InPost
    - place_of_worship         : Kościół pw. Świętego Jana Chrzciciela i Świętego Szczepana Męczennika
    - bank                     : Bank Spółdzielczy
```
</details>
<details><summary><b>Choroszcz/Rynek 11 Listopada (2157) (ID: 2157 | H3: 891f5106063ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Choroszcz/Rynek 11 Listopada (2157)
  stop_id                 : 2157
  h3_index                : 891f5106063ffff
  hub_id                  : 187
  hub_name                : Choroszcz/Rynek 11 Listopada (856)
  is_hub_anchor           : False
  stop_lat                : 53.1426
  stop_lon                : 22.9876

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.0553
  stop_local_score_raw    : -2.5688

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 179697.2465
  stop_raw_gravity        : 121140.3252
  stop_entropy            : 0.4834

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 101.6202
  stop_liquidity          : 1

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 43.6849

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
    - convenience_store        : Chorten
    - pharmacy                 : Tas
    - government_central       : Urząd Miejski w Choroszczy
    - business_office          : Telewizja Kablowa TVK-NET
    - place_of_worship         : Kaplica pw. Matki Bożej Anielskiej
    - micro_parcel_locker      : Paczkomat InPost
    - education_preschool      : Żłobek Samorządowy nr 1 w Choroszczy
    - police_station           : Posterunek Policji
    - health_clinic            : Przychodnia Lekarska Medicus
    - place_of_worship         : Kościół pw. Świętego Jana Chrzciciela i Świętego Szczepana Męczennika
```
</details>
<details><summary><b>Choroszcz/Rynek 11 Listopada (2156) (ID: 2156 | H3: 891f5106063ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Choroszcz/Rynek 11 Listopada (2156)
  stop_id                 : 2156
  h3_index                : 891f5106063ffff
  hub_id                  : 187
  hub_name                : Choroszcz/Rynek 11 Listopada (856)
  is_hub_anchor           : False
  stop_lat                : 53.1426
  stop_lon                : 22.9876

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.0553
  stop_local_score_raw    : -2.5688

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 179697.2465
  stop_raw_gravity        : 121140.3252
  stop_entropy            : 0.4834

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 101.6202
  stop_liquidity          : 1

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 43.6849

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
    - convenience_store        : Chorten
    - pharmacy                 : Tas
    - government_central       : Urząd Miejski w Choroszczy
    - business_office          : Telewizja Kablowa TVK-NET
    - place_of_worship         : Kaplica pw. Matki Bożej Anielskiej
    - micro_parcel_locker      : Paczkomat InPost
    - education_preschool      : Żłobek Samorządowy nr 1 w Choroszczy
    - police_station           : Posterunek Policji
    - health_clinic            : Przychodnia Lekarska Medicus
    - place_of_worship         : Kościół pw. Świętego Jana Chrzciciela i Świętego Szczepana Męczennika
```
</details>

#### POZIOM 2: NAJWAZNIEJSZE WEZLY LOGICZNE MACRO (TOP 5 HUBOW)
<details><summary><b>HUB: al. Piłsudskiego/pl. Niepodległości (301) (ID: 94 | H3: 891f513348fffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : al. Piłsudskiego/pl. Niepodległości (301)
  hub_id                  : 94
  h3_index                : 891f513348fffff
  hub_stops_count         : 6
  hub_stops_ids           : 211, 211, 301, 301, 307, 307
  lat                     : 53.1356
  lon                     : 23.1470

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 100.0000
  hub_local_score_raw     : 1.5238

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 5219866.0412
  hub_raw_gravity         : 2282987.0062
  hub_entropy             : 1.2864

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 67.8571
  hub_routes_count        : 14
  hub_routes              : 1, 2, 4, 5, 7, 9, 10, 12, 18, 21, 24, 100, 103, 107

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 7440.0000
  hub_liquidity           : 1321

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 703.4008
```
</details>
<details><summary><b>HUB: Wiejska/Politechnika (529) (ID: 15 | H3: 891f51336a7ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Wiejska/Politechnika (529)
  hub_id                  : 15
  h3_index                : 891f51336a7ffff
  hub_stops_count         : 7
  hub_stops_ids           : 53, 321, 321, 525, 525, 529, 529
  lat                     : 53.1169
  lon                     : 23.1442

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.8991
  hub_local_score_raw     : 1.4470

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 5368019.2667
  hub_raw_gravity         : 2541912.4562
  hub_entropy             : 1.1118

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 43.5714
  hub_routes_count        : 10
  hub_routes              : 3, 8, 10, 11, 16, 17, 23, 26, 27, 104

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 7793.3985
  hub_liquidity           : 729

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 1092.3836
```
</details>
<details><summary><b>HUB: al. Piłsudskiego/Częstochowska (302) (ID: 231 | H3: 891f51334b3ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : al. Piłsudskiego/Częstochowska (302)
  hub_id                  : 231
  h3_index                : 891f51334b3ffff
  hub_stops_count         : 7
  hub_stops_ids           : 8, 173, 302, 302, 306, 306, 627
  lat                     : 53.1361
  lon                     : 23.1536

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.7982
  hub_local_score_raw     : 1.4429

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 3054495.4475
  hub_raw_gravity         : 1018568.6379
  hub_entropy             : 1.9988

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 52.1429
  hub_routes_count        : 9
  hub_routes              : 1, 9, 12, 15, 18, 21, 24, 100, 103

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 7584.3346
  hub_liquidity           : 1288

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 959.4414
```
</details>
<details><summary><b>HUB: Wiejska/UWB (528) (ID: 374 | H3: 891f51330cbffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Wiejska/UWB (528)
  hub_id                  : 374
  h3_index                : 891f51330cbffff
  hub_stops_count         : 4
  hub_stops_ids           : 528, 528, 531, 531
  lat                     : 53.1133
  lon                     : 23.1469

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.6973
  hub_local_score_raw     : 1.4247

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 7094787.8854
  hub_raw_gravity         : 4365332.9172
  hub_entropy             : 0.6253

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 35.9286
  hub_routes_count        : 7
  hub_routes              : 3, 10, 11, 16, 23, 26, 104

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 8314.6067
  hub_liquidity           : 489

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 968.3730
```
</details>
<details><summary><b>HUB: Kolejowa/Dworzec PKP (159) (ID: 112 | H3: 891f51334d7ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Kolejowa/Dworzec PKP (159)
  hub_id                  : 112
  h3_index                : 891f51334d7ffff
  hub_stops_count         : 6
  hub_stops_ids           : 159, 159, 596, 596, 625, 635
  lat                     : 53.1354
  lon                     : 23.1363

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.5964
  hub_local_score_raw     : 1.4199

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 10834477.0309
  hub_raw_gravity         : 3644235.5939
  hub_entropy             : 1.9730

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 58.4286
  hub_routes_count        : 11
  hub_routes              : 1, 2, 4, 10, 11, 14, 18, 21, 29, 103, 142

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 7157.0496
  hub_liquidity           : 720

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 323.1736
```
</details>

---

## BYDGOSZCZ
#### DASHBOARD ASERCJI PIPELINE'U (Pelna Integralnosc Bazy)
```text
[PASS ZERO NULLS & INFS] Petla obliczeniowa wygenerowala 100% spojnych komorek.
[STATS] [PASS] Z-Score Micro VALID (Mean: 0.000, Std: 0.560)
        Rozklad Rang Slupkow (Micro): A: 122, A+: 62, B: 183, C: 244, D: 305, F: 304
[STATS] [PASS] Z-Score Macro VALID (Mean: 0.000, Std: 0.558)
        Rozklad Rang Hubow (Macro): A: 65, A+: 33, B: 98, C: 130, D: 162, F: 162
[DEMOGRAPHY] [PASS] DEMOGRAFIA W NORMIE: +18.8% (GUS strefa: 403,938 vs Baza miejska: 340,000)
[PASS] POI Parquet 100% Valid (Matematyka Huffa dziala)
[PASS] POP Parquet 100% Valid
[PASS] H3 Res 8 Grid 100% Valid (1,518 komorek, 191 pustyn transportowych)
```

### Faza 0: Statystyki Ogolne i Balans Sieci
- **Slupki Fizyczne (Micro):** 1,220 slupkow
- **Wezly Logiczne (Macro Hubs):** 650 hubow (Wskaznik konsolidacji: 1.88 slupka/hub)
- **Populacja Strefy Transportowej (GUS 250m):** 403,938 mieszkancow
- **Transakcje Notarialne RCN:** 11,410 aktow
### Faza 1: Siatka Analityczna Uber H3 Res 8 (0.74 km2 / komorka)
- **Liczba Komorek H3 Res 8:** 1,518
- **Rynek Nieruchomosci RCN w Heksach:** Pokrycie 59.9% (909/1518 komorek), Srednia: 2,947 PLN/m2, Mediana: 2,713 PLN/m2, Std: 1,855, Min: 17, Max: 20,164 PLN/m2
- **Demografia GUS NSP 2021 w Heksach:** Laczna ludnosc w heksach: 403,938, Srednia/heks: 266.1, Mediana: 0.0, Std: 1054.8, Max: 11,708
- **Podaz Transportu w Heksach:** Sredni Transport Score: 8.14, Max Transport Score: 100.00, Srednia odjazdow/h: 2.24, Pustynie Transportowe TDI: 191

#### TOP 5 Pustyn Transportowych (The Investment List)
| H3 Index | Lat | Lon | Populacja GUS | Odjazdy/h | TDI Score |
|---|---|---|---|---|---|
| `881f0b3741fffff` | 53.12928 | 18.05314 | 8,819 | 0.0 | **95.32** |
| `881f0b32b1fffff` | 53.11096 | 17.99890 | 8,294 | 0.0 | **94.67** |
| `881f0b32a9fffff` | 53.11745 | 17.96001 | 8,172 | 0.0 | **94.52** |
| `881f0b32bdfffff` | 53.11312 | 17.98594 | 7,734 | 0.0 | **93.94** |
| `881f0b3281fffff` | 53.12770 | 17.98064 | 7,497 | 0.0 | **93.61** |

#### TOP 5 Biegunow Transportu (Najwyzsza Podaz)
| H3 Index | Lat | Lon | Transport Score | Odjazdy/h | Liczba Slupkow |
|---|---|---|---|---|---|
| `881f0b3707fffff` | 53.10524 | 18.07402 | **100.00** | 15.8 | 8 |
| `881f0b3703fffff` | 53.11035 | 18.08434 | **100.00** | 39.7 | 7 |
| `881f0b373bfffff` | 53.10088 | 18.09994 | **100.00** | 49.7 | 4 |
| `881f0b3729fffff` | 53.10229 | 18.05074 | **100.00** | 158.7 | 10 |
| `881f0b372bfffff` | 53.10012 | 18.06370 | **100.00** | 127.1 | 8 |

#### TOP 5 Najdrozszych Heksow Mieszkaniowych RCN
| H3 Index | Lat | Lon | Mediana Ceny m2 | Liczba Transakcji |
|---|---|---|---|---|
| `881f565481fffff` | 52.97259 | 18.88679 | **20,164 PLN** | 2 |
| `881f0b74cbfffff` | 52.85221 | 17.74055 | **16,458 PLN** | 148 |
| `881f56500bfffff` | 52.98940 | 18.55313 | **9,348 PLN** | 2 |
| `881f0b322dfffff` | 53.12740 | 17.85895 | **8,073 PLN** | 9 |
| `881e259607fffff` | 52.78264 | 18.27463 | **7,554 PLN** | 29 |

### Faza 2: Audyt Zbednosci TCRP Report 100 (The Axe List)
- **Zbedne Slupki (R >= 0.50 - Umiarkowana Kanibalizacja):** 260
- **Zbedne Slupki (R >= 0.70 - Rekomendacja Likwidacji):** 199
- **Zbedne Slupki (R >= 0.90 - Skrajna Zbednosc / Dubel):** 96

| Zbedny Słupek | Dominujacy Słupek | Dystans [m] | S_service | S_spatial | S_cannibal | R-Score |
|---|---|---|---|---|---|---|
| Wojska Polskiego - Boya-Żeleńskiego (#10044, 8.714285714285714 odj/h) | Wojska Polskiego - Boya-Żeleńskiego (#10043, 8.928571428571429 odj/h) | 4.3m | 1.00 | 1.00 | 0.99 | **0.9898** |
| Trzęsacz I (#13169, 0.35714285714285715 odj/h) | Trzęsacz I (#13168, 0.35714285714285715 odj/h) | 4.5m | 1.00 | 1.00 | 0.99 | **0.9894** |
| Trzęsacz I (#13168, 0.35714285714285715 odj/h) | Trzęsacz I (#13169, 0.35714285714285715 odj/h) | 4.5m | 1.00 | 1.00 | 0.99 | **0.9894** |
| Osielsko - Wiązowa (#13064, 1.8571428571428572 odj/h) | Osielsko - Wiązowa (#13063, 1.8571428571428572 odj/h) | 5.5m | 1.00 | 1.00 | 0.99 | **0.9868** |
| Osielsko - Wiązowa (#13063, 1.8571428571428572 odj/h) | Osielsko - Wiązowa (#13064, 1.8571428571428572 odj/h) | 5.5m | 1.00 | 1.00 | 0.99 | **0.9868** |

### Faza 3: Hierarchia Magnesow Miejskich POI

#### Top 20 Kategorii POI w Miescie
| Kategoria | Tier | Ilosc w Miescie | Wartosc Punktowa (W) |
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

#### TOP 10 Konkretnych Nazwanych Magnesow Miejskich (T0, T1, T2)
| Nazwa Obiektu | Kategoria POI | Tier | Waga Przyciagania (W) |
|---|---|---|---|
| **Port Lotniczy Bydgoszcz-Szwederowo** | `international_airport` | T0_MEGA_HUB | 202,656,690 |
| **Bydgoszcz Główna** | `national_rail_hub` | T0_MEGA_HUB | 35,261,027 |
| **Stadion Polonii** | `national_stadium` | T1_NATIONAL_MAGNET | 22,695,566 |
| **Hala Sportowo-Widowiskowa \** | `national_stadium` | T1_NATIONAL_MAGNET | 22,695,566 |
| **Stadion im. Zdzisława Krzyszkowiaka** | `national_stadium` | T1_NATIONAL_MAGNET | 22,695,566 |
| **Kujawsko-Pomorskie Centrum Pulmonologii w Bydgoszczy** | `hospital_clinical` | T1_NATIONAL_MAGNET | 20,547,646 |
| **Wojewódzka Przychodnia Zdrowia Psychicznego w Bydgoszczy** | `hospital_clinical` | T1_NATIONAL_MAGNET | 20,547,646 |
| **Wielospecjalistyczny Ośrodek Zdrowia \** | `hospital_clinical` | T1_NATIONAL_MAGNET | 20,547,646 |
| **Centrum Medyczne Bieńkowski - Klinika Chirurgii Plastycznej** | `hospital_clinical` | T1_NATIONAL_MAGNET | 20,547,646 |
| **Kujawsko-Pomorskie Centrum Pulmonologii Oddział Smukała** | `hospital_clinical` | T1_NATIONAL_MAGNET | 20,547,646 |

### Faza 4: Probki Pelnego DNA (Wszystkie 53 Metryki)

#### POZIOM 1: NAJLEPSZE SLUPKI FIZYCZNE MICRO (TOP 5)
<details><summary><b>Zbożowy Rynek (ID: 10082 | H3: 891f0b32bb3ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Zbożowy Rynek
  stop_id                 : 10082
  h3_index                : 891f0b32bb3ffff
  hub_id                  : 270
  hub_name                : Zbożowy Rynek
  is_hub_anchor           : True
  stop_lat                : 53.1198
  stop_lon                : 18.0061

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 100.0000
  stop_local_score_raw    : 1.7499

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 6479610.6278
  stop_raw_gravity        : 3359648.9777
  stop_entropy            : 0.9287

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 23.9286
  stop_routes_count       : 11
  stop_routes             : 51, 52, 55, 58, 59, 60, 61, 64, 76, 80, 99
  stop_hub_share          : 0.4235

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 4268.1240
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 195.8966

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 66x gastronomy
  > 16x specialized_retail
  > 16x commercial_zone
  > 11x park_recreation
  > 10x bank
  > 9x university_campus
  > 8x convenience_store
  > 7x micro_parcel_locker
  > 7x micro_playground
  > 5x micro_atm
  > 5x culture_theatre
  > 5x government_central
  > 4x post_office
  > 3x social_support_mops
  > 3x place_of_worship
  > 3x sports_centre
  > 2x personal_services
  > 2x industrial_zone
  > 2x education_preschool
  > 1x supermarket
  > 1x shopping_mall
  > 1x pharmacy
  > 1x car_services
  > 1x education_high_school
  > 1x hospital_clinical
  > 1x health_clinic

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy               : Bistro pod Papugami
    - micro_atm                : Bankomat PKO
    - gastronomy               : Karramba
    - gastronomy               : Bobby Burger
    - gastronomy               : Sphinx
    - gastronomy               : Cadillac Bar
    - specialized_retail       : Meble używane
    - bank                     : Pocztowy
    - bank                     : Citibank
    - gastronomy               : Sowa
```
</details>
<details><summary><b>Rondo Kujawskie (ID: 10026 | H3: 891f0b32ba3ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Rondo Kujawskie
  stop_id                 : 10026
  h3_index                : 891f0b32ba3ffff
  hub_id                  : 604
  hub_name                : Rondo Kujawskie
  is_hub_anchor           : True
  stop_lat                : 53.1145
  stop_lon                : 18.0092

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.9180
  stop_local_score_raw    : 1.5901

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 2599117.6418
  stop_raw_gravity        : 1038561.1355
  stop_entropy            : 1.5026

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 17.2857
  stop_routes_count       : 6
  stop_routes             : 53, 56, 57, 69, 79, 89
  stop_hub_share          : 0.6576

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 4268.1240
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 713.2746

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 69x specialized_retail
  > 45x park_recreation
  > 28x micro_playground
  > 17x gastronomy
  > 11x micro_parcel_locker
  > 10x personal_services
  > 6x micro_atm
  > 4x supermarket
  > 4x education_high_school
  > 4x pharmacy
  > 3x convenience_store
  > 3x health_clinic
  > 3x bank
  > 2x car_services
  > 2x government_central
  > 2x shopping_mall
  > 2x education_preschool
  > 2x social_support_mops
  > 2x commercial_zone
  > 1x police_station
  > 1x post_office
  > 1x business_office
  > 1x sports_centre
  > 1x place_of_worship

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm                : BGZ
    - supermarket              : Biedronka
    - car_services             : Orlen
    - police_station           : Komenda Miejska Policji
    - convenience_store        : Żabka
    - specialized_retail       : MediaMarkt
    - specialized_retail       : Zara
    - specialized_retail       : H&M
    - gastronomy               : McDonald's
    - gastronomy               : KFC
```
</details>
<details><summary><b>Wzgórze Wolności (ID: 10031 | H3: 891f0b32ba7ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Wzgórze Wolności
  stop_id                 : 10031
  h3_index                : 891f0b32ba7ffff
  hub_id                  : 308
  hub_name                : Wzgórze Wolności
  is_hub_anchor           : True
  stop_lat                : 53.1149
  stop_lon                : 18.0152

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.8361
  stop_local_score_raw    : 1.5714

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 2847121.7795
  stop_raw_gravity        : 1049732.9294
  stop_entropy            : 1.7122

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 17.3571
  stop_routes_count       : 6
  stop_routes             : 53, 56, 57, 69, 79, 89
  stop_hub_share          : 0.6060

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 4268.1240
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 500.5976

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 69x specialized_retail
  > 52x park_recreation
  > 25x micro_playground
  > 17x gastronomy
  > 11x micro_parcel_locker
  > 10x personal_services
  > 5x micro_atm
  > 4x supermarket
  > 4x commercial_zone
  > 3x shopping_mall
  > 3x bank
  > 2x convenience_store
  > 2x health_clinic
  > 2x government_central
  > 2x pharmacy
  > 2x education_preschool
  > 2x education_high_school
  > 2x sports_centre
  > 1x police_station
  > 1x post_office
  > 1x car_services
  > 1x university_campus
  > 1x industrial_zone
  > 1x place_of_worship

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - police_station           : Komenda Miejska Policji
    - specialized_retail       : MediaMarkt
    - specialized_retail       : Zara
    - specialized_retail       : H&M
    - gastronomy               : McDonald's
    - gastronomy               : KFC
    - personal_services        : Artego
    - post_office              : Poczta Polska
    - personal_services        : Artego
    - convenience_store        : Odido
```
</details>
<details><summary><b>Wojska Polskiego - Ujejskiego (ID: 10037 | H3: 891f0b376cfffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Wojska Polskiego - Ujejskiego
  stop_id                 : 10037
  h3_index                : 891f0b376cfffff
  hub_id                  : 117
  hub_name                : Wojska Polskiego - Ujejskiego
  is_hub_anchor           : True
  stop_lat                : 53.1127
  stop_lon                : 18.0248

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.7541
  stop_local_score_raw    : 1.5542

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 3958854.5178
  stop_raw_gravity        : 2539420.3305
  stop_entropy            : 0.5590

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 15.2143
  stop_routes_count       : 5
  stop_routes             : 53, 56, 68, 69, 89
  stop_hub_share          : 1.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 4268.1240
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 566.2423

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 23x micro_playground
  > 9x micro_parcel_locker
  > 5x pharmacy
  > 4x industrial_zone
  > 3x park_recreation
  > 2x micro_atm
  > 2x health_clinic
  > 2x education_preschool
  > 2x commercial_zone
  > 1x personal_services
  > 1x gastronomy
  > 1x convenience_store
  > 1x shopping_mall
  > 1x hospital_clinical
  > 1x supermarket
  > 1x education_high_school

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm                : Bankomat Cash4You
    - health_clinic            : Szpitalny Oddział Ratunkowy
    - personal_services        : Artego
    - gastronomy               : NOVA Sushi
    - micro_parcel_locker      : Paczkomat InPost
    - micro_parcel_locker      : Paczkomat InPost
    - micro_parcel_locker      : Paczkomat InPost
    - micro_parcel_locker      : Paczkomat InPost
    - health_clinic            : Stomatologia PERIO-DENS
    - pharmacy                 : Gemini
```
</details>
<details><summary><b>Zbożowy Rynek (ID: 10001 | H3: 891f0b3294bffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Zbożowy Rynek
  stop_id                 : 10001
  h3_index                : 891f0b3294bffff
  hub_id                  : 73
  hub_name                : Zbożowy Rynek
  is_hub_anchor           : True
  stop_lat                : 53.1200
  stop_lon                : 18.0028

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.6721
  stop_local_score_raw    : 1.5468

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 3708786.2475
  stop_raw_gravity        : 1486017.4072
  stop_entropy            : 1.4958

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 17.7143
  stop_routes_count       : 7
  stop_routes             : 51, 52, 55, 56, 58, 59, 60
  stop_hub_share          : 0.5020

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 4268.1240
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 237.7201

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 71x gastronomy
  > 24x park_recreation
  > 12x specialized_retail
  > 11x micro_playground
  > 11x commercial_zone
  > 10x micro_atm
  > 10x government_central
  > 10x bank
  > 8x convenience_store
  > 7x university_campus
  > 6x place_of_worship
  > 4x culture_theatre
  > 4x personal_services
  > 4x post_office
  > 3x pharmacy
  > 3x education_high_school
  > 3x social_support_mops
  > 3x micro_parcel_locker
  > 2x supermarket
  > 2x education_preschool
  > 1x car_services
  > 1x hospital_clinical
  > 1x sports_centre
  > 1x health_clinic
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm                : Pekao Sa
    - gastronomy               : Bistro pod Papugami
    - micro_atm                : Bankomat PKO
    - gastronomy               : Karramba
    - gastronomy               : Bobby Burger
    - gastronomy               : Sphinx
    - gastronomy               : Cadillac Bar
    - micro_atm                : PKO BP
    - specialized_retail       : Meble używane
    - pharmacy                 : Dbam o Zdrowie
```
</details>

#### POZIOM 1: NAJSLABSZE SLUPKI FIZYCZNE MICRO (BOTTOM 5)
<details><summary><b>Kamieniec (ID: 13327 | H3: 891f0b36a63ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Kamieniec
  stop_id                 : 13327
  h3_index                : 891f0b36a63ffff
  hub_id                  : 269
  hub_name                : Kamieniec
  is_hub_anchor           : True
  stop_lat                : 53.1095
  stop_lon                : 18.2198

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.4098
  stop_local_score_raw    : -1.9160

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.2857
  stop_routes_count       : 1
  stop_routes             : 43
  stop_hub_share          : 0.5000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 4268.1240
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 15.0500

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Kamieniec (ID: 13328 | H3: 891f0b36a77ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Kamieniec
  stop_id                 : 13328
  h3_index                : 891f0b36a77ffff
  hub_id                  : 269
  hub_name                : Kamieniec
  is_hub_anchor           : False
  stop_lat                : 53.1098
  stop_lon                : 18.2199

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.3279
  stop_local_score_raw    : -1.9162

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.2857
  stop_routes_count       : 1
  stop_routes             : 43
  stop_hub_share          : 0.5000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 4268.1240
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 15.0175

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Wyzwolenia - Brzegowa (ID: 8141 | H3: 891f56d9657ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Wyzwolenia - Brzegowa
  stop_id                 : 8141
  h3_index                : 891f56d9657ffff
  hub_id                  : 69
  hub_name                : Wyzwolenia - Brzegowa
  is_hub_anchor           : True
  stop_lat                : 53.1816
  stop_lon                : 18.1707

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.2459
  stop_local_score_raw    : -1.9891

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 4268.1240
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 31.3784

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Wyzwolenia - Brzegowa (ID: 8158 | H3: 891f56d9657ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Wyzwolenia - Brzegowa
  stop_id                 : 8158
  h3_index                : 891f56d9657ffff
  hub_id                  : 69
  hub_name                : Wyzwolenia - Brzegowa
  is_hub_anchor           : False
  stop_lat                : 53.1818
  stop_lon                : 18.1709

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.1639
  stop_local_score_raw    : -1.9970

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 4268.1240
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 28.6216

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Osielsko - Wybudowanie (ID: 13250 | H3: 891f0bace1bffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Osielsko - Wybudowanie
  stop_id                 : 13250
  h3_index                : 891f0bace1bffff
  hub_id                  : 385
  hub_name                : Osielsko - Wybudowanie
  is_hub_anchor           : True
  stop_lat                : 53.1980
  stop_lon                : 18.0828

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.0820
  stop_local_score_raw    : -2.7566

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 2085004.1287
  stop_raw_gravity        : 2085004.1287
  stop_entropy            : -0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.5714
  stop_routes_count       : 1
  stop_routes             : 41
  stop_hub_share          : 1.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 170.2997
  stop_liquidity          : 9

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 14.7761

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 5x industrial_zone
  > 1x gastronomy
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy               : Gazdówka
    - industrial_zone          : Vitfoss - pasze
    - industrial_zone          : Stalco
    - industrial_zone          : AKO
```
</details>

#### POZIOM 2: NAJWAZNIEJSZE WEZLY LOGICZNE MACRO (TOP 5 HUBOW)
<details><summary><b>HUB: Zbożowy Rynek (ID: 270 | H3: 891f0b3294bffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Zbożowy Rynek
  hub_id                  : 270
  h3_index                : 891f0b3294bffff
  hub_stops_count         : 5
  hub_stops_ids           : 10078, 10081, 10082, 10096, 10097
  lat                     : 53.1197
  lon                     : 18.0060

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 100.0000
  hub_local_score_raw     : 1.8331

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 19832705.9586
  hub_raw_gravity         : 10051840.8115
  hub_entropy             : 0.9730

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 56.5000
  hub_routes_count        : 14
  hub_routes              : 2, 9, 11, 51, 52, 55, 58, 59, 60, 61, 64, 76, 80, 99

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 4268.1240
  hub_liquidity           : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 615.6162
```
</details>
<details><summary><b>HUB: Wojska Polskiego - Boya-Żeleńskiego (ID: 161 | H3: 891f0b3760bffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Wojska Polskiego - Boya-Żeleńskiego
  hub_id                  : 161
  h3_index                : 891f0b3760bffff
  hub_stops_count         : 4
  hub_stops_ids           : 10041, 10042, 10043, 10044
  lat                     : 53.1099
  lon                     : 18.0305

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.8462
  hub_local_score_raw     : 1.6572

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 5596688.6101
  hub_raw_gravity         : 2181573.4240
  hub_entropy             : 1.5654

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 36.4286
  hub_routes_count        : 6
  hub_routes              : 2, 9, 11, 53, 56, 68

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 4268.1240
  hub_liquidity           : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 3445.8233
```
</details>
<details><summary><b>HUB: Szarych Szeregów (ID: 538 | H3: 891f0b3762bffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Szarych Szeregów
  hub_id                  : 538
  h3_index                : 891f0b3762bffff
  hub_stops_count         : 7
  hub_stops_ids           : 11010, 11011, 11012, 11084, 11085, 11086, 11089
  lat                     : 53.1080
  lon                     : 18.0443

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.6923
  hub_local_score_raw     : 1.6567

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 6226802.4977
  hub_raw_gravity         : 2247874.4987
  hub_entropy             : 1.7701

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 36.0000
  hub_routes_count        : 7
  hub_routes              : 2, 4, 7, 8, 9, 11, 53

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 4268.1240
  hub_liquidity           : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 3170.1582
```
</details>
<details><summary><b>HUB: Zbożowy Rynek (ID: 73 | H3: 891f0b3294bffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Zbożowy Rynek
  hub_id                  : 73
  h3_index                : 891f0b3294bffff
  hub_stops_count         : 3
  hub_stops_ids           : 10001, 10002, 10063
  lat                     : 53.1198
  lon                     : 18.0030

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.5385
  hub_local_score_raw     : 1.6103

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 12478578.2285
  hub_raw_gravity         : 4993531.5562
  hub_entropy             : 1.4989

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 35.2857
  hub_routes_count        : 7
  hub_routes              : 51, 52, 55, 56, 58, 59, 60

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 4268.1240
  hub_liquidity           : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 816.9053
```
</details>
<details><summary><b>HUB: Wyżyny (ID: 107 | H3: 891f0b37677ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Wyżyny
  hub_id                  : 107
  h3_index                : 891f0b37677ffff
  hub_stops_count         : 4
  hub_stops_ids           : 10045, 10046, 10047, 10048
  lat                     : 53.1080
  lon                     : 18.0378

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.3846
  hub_local_score_raw     : 1.5736

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 13201038.6512
  hub_raw_gravity         : 5915769.0278
  hub_entropy             : 1.2315

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 23.5714
  hub_routes_count        : 4
  hub_routes              : 2, 9, 11, 53

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 4268.1240
  hub_liquidity           : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 3620.9946
```
</details>

---

## CZESTOCHOWA
#### DASHBOARD ASERCJI PIPELINE'U (Pelna Integralnosc Bazy)
```text
[PASS ZERO NULLS & INFS] Petla obliczeniowa wygenerowala 100% spojnych komorek.
[STATS] [WARN] Z-Score Micro ODD (Mean: -0.000, Std: 0.433)
        Rozklad Rang Slupkow (Micro): A: 90, A+: 45, B: 135, C: 180, D: 225, F: 224
[STATS] [WARN] Z-Score Macro ODD (Mean: 0.000, Std: 0.428)
        Rozklad Rang Hubow (Macro): A: 44, A+: 23, B: 66, C: 89, D: 110, F: 110
[DEMOGRAPHY] [PASS] DEMOGRAFIA W NORMIE: +14.7% (GUS strefa: 240,937 vs Baza miejska: 210,000)
[PASS] POI Parquet 100% Valid (Matematyka Huffa dziala)
[PASS] POP Parquet 100% Valid
[PASS] H3 Res 8 Grid 100% Valid (431 komorek, 202 pustyn transportowych)
```

### Faza 0: Statystyki Ogolne i Balans Sieci
- **Slupki Fizyczne (Micro):** 899 slupkow
- **Wezly Logiczne (Macro Hubs):** 442 hubow (Wskaznik konsolidacji: 2.03 slupka/hub)
- **Populacja Strefy Transportowej (GUS 250m):** 240,937 mieszkancow
- **Transakcje Notarialne RCN:** 10,835 aktow
### Faza 1: Siatka Analityczna Uber H3 Res 8 (0.74 km2 / komorka)
- **Liczba Komorek H3 Res 8:** 431
- **Rynek Nieruchomosci RCN w Heksach:** Pokrycie 35.7% (154/431 komorek), Srednia: 4,642 PLN/m2, Mediana: 4,693 PLN/m2, Std: 2,172, Min: 89, Max: 16,023 PLN/m2
- **Demografia GUS NSP 2021 w Heksach:** Laczna ludnosc w heksach: 240,937, Srednia/heks: 559.0, Mediana: 131.0, Std: 1391.3, Max: 10,987
- **Podaz Transportu w Heksach:** Sredni Transport Score: 16.57, Max Transport Score: 100.00, Srednia odjazdow/h: 0.00, Pustynie Transportowe TDI: 202

#### TOP 5 Pustyn Transportowych (The Investment List)
| H3 Index | Lat | Lon | Populacja GUS | Odjazdy/h | TDI Score |
|---|---|---|---|---|---|
| `881e23a4d7fffff` | 50.78231 | 19.14103 | 10,987 | 0.0 | **97.62** |
| `881e23a68bfffff` | 50.83024 | 19.11385 | 10,829 | 0.0 | **97.47** |
| `881e23a6d3fffff` | 50.84063 | 19.13401 | 9,604 | 0.0 | **96.21** |
| `881e23a6bdfffff` | 50.80987 | 19.10867 | 8,152 | 0.0 | **94.49** |
| `881e23a6b5fffff` | 50.80228 | 19.11111 | 7,221 | 0.0 | **93.22** |

#### TOP 5 Biegunow Transportu (Najwyzsza Podaz)
| H3 Index | Lat | Lon | Transport Score | Odjazdy/h | Liczba Slupkow |
|---|---|---|---|---|---|
| `881e2ed36dfffff` | 50.81028 | 19.14378 | **100.00** | 0.0 | 16 |
| `881e23a683fffff` | 50.82265 | 19.11630 | **100.00** | 0.0 | 14 |
| `881e23a6b1fffff` | 50.80748 | 19.12119 | **100.00** | 0.0 | 12 |
| `881e23a491fffff` | 50.77232 | 19.15598 | **100.00** | 0.0 | 17 |
| `881e23a48bfffff` | 50.77712 | 19.13096 | **100.00** | 0.0 | 12 |

#### TOP 5 Najdrozszych Heksow Mieszkaniowych RCN
| H3 Index | Lat | Lon | Mediana Ceny m2 | Liczba Transakcji |
|---|---|---|---|---|
| `881e216f3bfffff` | 50.92151 | 19.34321 | **16,023 PLN** | 3 |
| `881e2ed1d9fffff` | 50.76383 | 19.31130 | **10,039 PLN** | 4 |
| `881e23a689fffff` | 50.83263 | 19.10133 | **8,544 PLN** | 144 |
| `881e23a6c5fffff` | 50.83741 | 19.07628 | **8,194 PLN** | 68 |
| `881e23a6b1fffff` | 50.80748 | 19.12119 | **8,154 PLN** | 466 |

### Faza 2: Audyt Zbednosci TCRP Report 100 (The Axe List)
- **Zbedne Slupki (R >= 0.50 - Umiarkowana Kanibalizacja):** 0
- **Zbedne Slupki (R >= 0.70 - Rekomendacja Likwidacji):** 0
- **Zbedne Slupki (R >= 0.90 - Skrajna Zbednosc / Dubel):** 0
- Brak slupkow spelniajacych prog likwidacji R >= 0.70.

### Faza 3: Hierarchia Magnesow Miejskich POI

#### Top 20 Kategorii POI w Miescie
| Kategoria | Tier | Ilosc w Miescie | Wartosc Punktowa (W) |
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

#### TOP 10 Konkretnych Nazwanych Magnesow Miejskich (T0, T1, T2)
| Nazwa Obiektu | Kategoria POI | Tier | Waga Przyciagania (W) |
|---|---|---|---|
| **Częstochowa** | `national_rail_hub` | T0_MEGA_HUB | 33,269,519 |
| **Arena zielona-energia.com** | `national_stadium` | T1_NATIONAL_MAGNET | 20,647,949 |
| **Stadion Raków** | `national_stadium` | T1_NATIONAL_MAGNET | 20,647,949 |
| **Orkan** | `national_stadium` | T1_NATIONAL_MAGNET | 20,647,949 |
| **Miejski Stadion Lekkoatletyczny** | `national_stadium` | T1_NATIONAL_MAGNET | 20,647,949 |
| **Wojewódzki Szpital Specjalistyczny im. Najświętszej Maryi Panny** | `hospital_clinical` | T1_NATIONAL_MAGNET | 18,445,958 |
| **Miejski Szpital Zespolony** | `hospital_clinical` | T1_NATIONAL_MAGNET | 18,445,958 |
| **SP ZOZ Miejski Szpital Zespolony im. dr Tytusa Chałubińskiego** | `hospital_clinical` | T1_NATIONAL_MAGNET | 18,445,958 |
| **Miejski Szpital Zespolony im. dr. Władysława Biegańskiego** | `hospital_clinical` | T1_NATIONAL_MAGNET | 18,445,958 |
| **Szpital Chorób Wewnętrznych** | `hospital_clinical` | T1_NATIONAL_MAGNET | 18,445,958 |

### Faza 4: Probki Pelnego DNA (Wszystkie 53 Metryki)

#### POZIOM 1: NAJLEPSZE SLUPKI FIZYCZNE MICRO (TOP 5)
<details><summary><b>Św. Barbary - Szpital (ID: 576 | H3: 891e23a6a33ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Św. Barbary - Szpital
  stop_id                 : 576
  h3_index                : 891e23a6a33ffff
  hub_id                  : 136
  hub_name                : Św. Barbary - Szpital
  is_hub_anchor           : False
  stop_lat                : 50.8062
  stop_lon                : 19.0951

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 100.0000
  stop_local_score_raw    : 0.5890

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 10625717.0386
  stop_raw_gravity        : 4920574.5362
  stop_entropy            : 1.1594

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 7904.5094
  stop_liquidity          : 140

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 254.9259

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 6x gastronomy
  > 3x pharmacy
  > 3x supermarket
  > 2x convenience_store
  > 2x industrial_zone
  > 2x education_high_school
  > 1x post_office
  > 1x education_preschool
  > 1x culture_theatre
  > 1x micro_atm
  > 1x university_campus
  > 1x place_of_worship
  > 1x micro_playground
  > 1x hospital_clinical
  > 1x park_recreation

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - pharmacy                 : Apteka JANA
    - gastronomy               : Siostry Zakonne Jedzenie
    - supermarket              : Lewiatan
    - pharmacy                 : Turkusowa
    - pharmacy                 : Pod Klasztorem
    - gastronomy               : Aurum
    - gastronomy               : Bar Familijny
    - culture_theatre          : Biblioteka Publiczna im. dr Władysława Biegańskiego FIlia nr 4
    - convenience_store        : Żabka
    - gastronomy               : Kameleon
```
</details>
<details><summary><b>Rynek Wieluński (ID: 530 | H3: 891e23a684fffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Rynek Wieluński
  stop_id                 : 530
  h3_index                : 891e23a684fffff
  hub_id                  : 165
  hub_name                : Rynek Wieluński
  is_hub_anchor           : False
  stop_lat                : 50.8166
  stop_lon                : 19.0971

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.8888
  stop_local_score_raw    : 0.5872

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 7070269.5750
  stop_raw_gravity        : 2538406.1127
  stop_entropy            : 1.7853

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 6744.0989
  stop_liquidity          : 169

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 586.2216

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
    - convenience_store        : Żabka
    - education_high_school    : Katolickie Liceum Ogólnokształcące SPSK
    - micro_atm                : Euronet
    - bank                     : Krakowski Bank Spółdzielczy
    - micro_atm                : KBS
    - gastronomy               : Tbilisi Smak Gruzji Częstochowa
    - education_preschool      : ARTOK
    - health_clinic            : Centrum Stomatologiczne
    - health_clinic            : Lipowski
    - gastronomy               : Juan
```
</details>
<details><summary><b>Św. Barbary - Szpital (ID: 575 | H3: 891e23a6a33ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Św. Barbary - Szpital
  stop_id                 : 575
  h3_index                : 891e23a6a33ffff
  hub_id                  : 136
  hub_name                : Św. Barbary - Szpital
  is_hub_anchor           : True
  stop_lat                : 50.8059
  stop_lon                : 19.0952

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.7775
  stop_local_score_raw    : 0.5872

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 9725095.6670
  stop_raw_gravity        : 4868275.6357
  stop_entropy            : 0.9976

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 7946.0028
  stop_liquidity          : 140

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 260.4052

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
    - pharmacy                 : Apteka JANA
    - gastronomy               : Siostry Zakonne Jedzenie
    - supermarket              : Lewiatan
    - pharmacy                 : Turkusowa
    - gastronomy               : Aurum
    - gastronomy               : Bar Familijny
    - culture_theatre          : Biblioteka Publiczna im. dr Władysława Biegańskiego FIlia nr 4
    - gastronomy               : Sulaiman
    - convenience_store        : Żabka
    - micro_atm                : Euronet
```
</details>
<details><summary><b>Kosmowskiej (ID: 344 | H3: 891e2169adbffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Kosmowskiej
  stop_id                 : 344
  h3_index                : 891e2169adbffff
  hub_id                  : 197
  hub_name                : Kosmowskiej
  is_hub_anchor           : True
  stop_lat                : 50.8462
  stop_lon                : 19.1371

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.6663
  stop_local_score_raw    : 0.5453

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 8570052.3773
  stop_raw_gravity        : 6351129.4112
  stop_entropy            : 0.3494

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 5477.6300
  stop_liquidity          : 105

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 783.3803

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 12x micro_playground
  > 7x convenience_store
  > 5x personal_services
  > 5x park_recreation
  > 2x health_clinic
  > 2x national_stadium
  > 1x supermarket
  > 1x specialized_retail
  > 1x post_office
  > 1x micro_parcel_locker
  > 1x place_of_worship
  > 1x education_high_school
  > 1x education_preschool

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store        : Żabka
    - health_clinic            : Przychodnia Północ
    - convenience_store        : Społem
    - personal_services        : Puczyńscy
    - supermarket              : Lewiatan
    - specialized_retail       : Butik Marie
    - post_office              : Poczta Polska
    - micro_parcel_locker      : Paczkomat InPost
    - personal_services        : Świat chemii
    - health_clinic            : Gabinet stomatologiczny
```
</details>
<details><summary><b>Rynek Wieluński (ID: 529 | H3: 891e23a684fffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Rynek Wieluński
  stop_id                 : 529
  h3_index                : 891e23a684fffff
  hub_id                  : 165
  hub_name                : Rynek Wieluński
  is_hub_anchor           : True
  stop_lat                : 50.8164
  stop_lon                : 19.0958

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.5551
  stop_local_score_raw    : 0.5378

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 5183008.1327
  stop_raw_gravity        : 1734325.3513
  stop_entropy            : 1.9885

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 7012.2370
  stop_liquidity          : 145

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 404.5894

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 13x gastronomy
  > 9x place_of_worship
  > 5x health_clinic
  > 5x micro_playground
  > 4x education_high_school
  > 3x pharmacy
  > 3x micro_atm
  > 3x park_recreation
  > 2x convenience_store
  > 2x bank
  > 2x personal_services
  > 2x education_preschool
  > 1x specialized_retail
  > 1x business_office
  > 1x car_services
  > 1x micro_parcel_locker
  > 1x social_support_mops
  > 1x supermarket
  > 1x commercial_zone
  > 1x government_central

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store        : Żabka
    - education_high_school    : Katolickie Liceum Ogólnokształcące SPSK
    - micro_atm                : Euronet
    - bank                     : Krakowski Bank Spółdzielczy
    - micro_atm                : KBS
    - gastronomy               : Tbilisi Smak Gruzji Częstochowa
    - education_preschool      : ARTOK
    - health_clinic            : Centrum Stomatologiczne
    - health_clinic            : Lipowski
    - gastronomy               : Juan
```
</details>

#### POZIOM 1: NAJSLABSZE SLUPKI FIZYCZNE MICRO (BOTTOM 5)
<details><summary><b>Dąbie (ID: 179 | H3: 891e2ed32c3ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Dąbie
  stop_id                 : 179
  h3_index                : 891e2ed32c3ffff
  hub_id                  : 339
  hub_name                : Dąbie
  is_hub_anchor           : False
  stop_lat                : 50.7918
  stop_lon                : 19.1600

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.5562
  stop_local_score_raw    : -1.1946

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 68468.8048
  stop_raw_gravity        : 35131.2210
  stop_entropy            : 0.9489

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 445.2843
  stop_liquidity          : 3

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 60.7471

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x car_services
  > 1x place_of_worship
  > 1x supermarket
  > 1x education_high_school

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - car_services             : Avia
    - place_of_worship         : Kościół pw. Najświętszej Maryi Panny Wspomożycielki Wiernych
    - supermarket              : Dino
    - education_high_school    : Szkoła Podstawowa nr 19 im. J. Tuwima w Częstochowie
```
</details>
<details><summary><b>Wodociągowa (ID: 1256 | H3: 891e2ed3197ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Wodociągowa
  stop_id                 : 1256
  h3_index                : 891e2ed3197ffff
  hub_id                  : 38
  hub_name                : Wodociągowa
  is_hub_anchor           : True
  stop_lat                : 50.8180
  stop_lon                : 19.2261

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.4449
  stop_local_score_raw    : -1.1951

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 5654.6324
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 4.8656

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Dąbie (ID: 178 | H3: 891e2ed32c3ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Dąbie
  stop_id                 : 178
  h3_index                : 891e2ed32c3ffff
  hub_id                  : 339
  hub_name                : Dąbie
  is_hub_anchor           : True
  stop_lat                : 50.7923
  stop_lon                : 19.1613

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.3337
  stop_local_score_raw    : -1.2090

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 49872.6431
  stop_raw_gravity        : 25591.3565
  stop_entropy            : 0.9488

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 445.2843
  stop_liquidity          : 3

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 65.6922

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x car_services
  > 1x supermarket
  > 1x education_high_school

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - car_services             : Avia
    - supermarket              : Dino
    - education_high_school    : Szkoła Podstawowa nr 19 im. J. Tuwima w Częstochowie
```
</details>
<details><summary><b>Wodociągowa (ID: 1257 | H3: 891e2ed3197ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Wodociągowa
  stop_id                 : 1257
  h3_index                : 891e2ed3197ffff
  hub_id                  : 38
  hub_name                : Wodociągowa
  is_hub_anchor           : False
  stop_lat                : 50.8175
  stop_lon                : 19.2267

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.2225
  stop_local_score_raw    : -1.2163

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 5654.6324
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 3.8929

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>HUTA - Wydział Transportu (ID: 1290 | H3: 891e2ed1463ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : HUTA - Wydział Transportu
  stop_id                 : 1290
  h3_index                : 891e2ed1463ffff
  hub_id                  : 267
  hub_name                : HUTA - Wydział Transportu
  is_hub_anchor           : True
  stop_lat                : 50.7653
  stop_lon                : 19.1923

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.1112
  stop_local_score_raw    : -1.3472

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 5654.6324
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 0.5968

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>

#### POZIOM 2: NAJWAZNIEJSZE WEZLY LOGICZNE MACRO (TOP 5 HUBOW)
<details><summary><b>HUB: Św. Barbary - Szpital (ID: 136 | H3: 891e23a6a33ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Św. Barbary - Szpital
  hub_id                  : 136
  h3_index                : 891e23a6a33ffff
  hub_stops_count         : 2
  hub_stops_ids           : 575, 576
  lat                     : 50.8061
  lon                     : 19.0951

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 100.0000
  hub_local_score_raw     : 0.5566

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 16787318.5350
  hub_raw_gravity         : 7962306.7280
  hub_entropy             : 1.1083

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 0.0000
  hub_routes_count        : 0
  hub_routes              : 

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 7942.0055
  hub_liquidity           : 141

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 429.5443
```
</details>
<details><summary><b>HUB: Rynek Wieluński (ID: 165 | H3: 891e23a684fffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Rynek Wieluński
  hub_id                  : 165
  h3_index                : 891e23a684fffff
  hub_stops_count         : 2
  hub_stops_ids           : 529, 530
  lat                     : 50.8165
  lon                     : 19.0965

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.7738
  hub_local_score_raw     : 0.5565

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 12793020.5222
  hub_raw_gravity         : 4403204.5205
  hub_entropy             : 1.9054

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 0.0000
  hub_routes_count        : 0
  hub_routes              : 

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 6727.8446
  hub_liquidity           : 172

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 1059.1249
```
</details>
<details><summary><b>HUB: Matejki (ID: 226 | H3: 891e23a4cd3ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Matejki
  hub_id                  : 226
  h3_index                : 891e23a4cd3ffff
  hub_stops_count         : 3
  hub_stops_ids           : 407, 408, 409
  lat                     : 50.7948
  lon                     : 19.0890

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.5475
  hub_local_score_raw     : 0.5319

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 9151567.6457
  hub_raw_gravity         : 5006078.0782
  hub_entropy             : 0.8281

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 0.0000
  hub_routes_count        : 0
  hub_routes              : 

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 6851.8519
  hub_liquidity           : 13

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 961.1791
```
</details>
<details><summary><b>HUB: Kosmowskiej (ID: 197 | H3: 891e2169adbffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Kosmowskiej
  hub_id                  : 197
  h3_index                : 891e2169adbffff
  hub_stops_count         : 2
  hub_stops_ids           : 344, 345
  lat                     : 50.8456
  lon                     : 19.1375

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.3213
  hub_local_score_raw     : 0.5156

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 13224169.3129
  hub_raw_gravity         : 9124169.5324
  hub_entropy             : 0.4494

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 0.0000
  hub_routes_count        : 0
  hub_routes              : 

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 5469.1904
  hub_liquidity           : 124

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 1717.8090
```
</details>
<details><summary><b>HUB: Parkitka - Osiedle (ID: 4 | H3: 891e23a68cfffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Parkitka - Osiedle
  hub_id                  : 4
  h3_index                : 891e23a68cfffff
  hub_stops_count         : 3
  hub_stops_ids           : 455, 1010, 1162
  lat                     : 50.8248
  lon                     : 19.0931

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.0950
  hub_local_score_raw     : 0.5150

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 8301150.7016
  hub_raw_gravity         : 5431809.6577
  hub_entropy             : 0.5282

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 0.0000
  hub_routes_count        : 0
  hub_routes              : 

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 6434.6301
  hub_liquidity           : 2110

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 1143.6848
```
</details>

---

## ELBLAG
#### DASHBOARD ASERCJI PIPELINE'U (Pelna Integralnosc Bazy)
```text
[PASS ZERO NULLS & INFS] Petla obliczeniowa wygenerowala 100% spojnych komorek.
[STATS] [PASS] Z-Score Micro VALID (Mean: -0.000, Std: 0.698)
        Rozklad Rang Slupkow (Micro): A: 35, A+: 18, B: 52, C: 70, D: 87, F: 87
[STATS] [PASS] Z-Score Macro VALID (Mean: -0.000, Std: 0.710)
        Rozklad Rang Hubow (Macro): A: 18, A+: 10, B: 28, C: 37, D: 46, F: 46
[DEMOGRAPHY] [PASS] DEMOGRAFIA W NORMIE: +8.0% (GUS strefa: 118,772 vs Baza miejska: 110,000)
[PASS] POI Parquet 100% Valid (Matematyka Huffa dziala)
[PASS] POP Parquet 100% Valid
[PASS] H3 Res 8 Grid 100% Valid (156 komorek, 7 pustyn transportowych)
```

### Faza 0: Statystyki Ogolne i Balans Sieci
- **Slupki Fizyczne (Micro):** 349 slupkow
- **Wezly Logiczne (Macro Hubs):** 185 hubow (Wskaznik konsolidacji: 1.89 slupka/hub)
- **Populacja Strefy Transportowej (GUS 250m):** 118,772 mieszkancow
- **Transakcje Notarialne RCN:** 5,907 aktow
### Faza 1: Siatka Analityczna Uber H3 Res 8 (0.74 km2 / komorka)
- **Liczba Komorek H3 Res 8:** 156
- **Rynek Nieruchomosci RCN w Heksach:** Pokrycie 25.0% (39/156 komorek), Srednia: 6,570 PLN/m2, Mediana: 6,316 PLN/m2, Std: 2,527, Min: 1,374, Max: 19,608 PLN/m2
- **Demografia GUS NSP 2021 w Heksach:** Laczna ludnosc w heksach: 118,772, Srednia/heks: 761.4, Mediana: 39.5, Std: 1819.1, Max: 11,080
- **Podaz Transportu w Heksach:** Sredni Transport Score: 12.34, Max Transport Score: 100.00, Srednia odjazdow/h: 18.59, Pustynie Transportowe TDI: 7

#### TOP 5 Pustyn Transportowych (The Investment List)
| H3 Index | Lat | Lon | Populacja GUS | Odjazdy/h | TDI Score |
|---|---|---|---|---|---|
| `881f54d0b1fffff` | 54.15431 | 19.42850 | 2,813 | 0.0 | **83.33** |
| `881f54d52dfffff` | 54.14028 | 19.47048 | 482 | 0.0 | **64.84** |
| `881f54d627fffff` | 54.21564 | 19.54287 | 270 | 0.0 | **58.78** |
| `881f54d0e3fffff` | 54.16833 | 19.38650 | 173 | 0.0 | **54.13** |
| `881f54d76dfffff` | 54.20735 | 19.43453 | 170 | 0.0 | **53.95** |

#### TOP 5 Biegunow Transportu (Najwyzsza Podaz)
| H3 Index | Lat | Lon | Transport Score | Odjazdy/h | Liczba Slupkow |
|---|---|---|---|---|---|
| `881f54d089fffff` | 54.17819 | 19.40774 | **100.00** | 146.3 | 11 |
| `881f54d085fffff` | 54.16606 | 19.39966 | **100.00** | 246.3 | 12 |
| `881f54d0c7fffff` | 54.18046 | 19.39458 | **100.00** | 201.9 | 13 |
| `881f54d0abfffff` | 54.15886 | 19.40220 | **100.00** | 402.1 | 19 |
| `881f54d0b5fffff` | 54.14939 | 19.41788 | **95.80** | 133.1 | 13 |

#### TOP 5 Najdrozszych Heksow Mieszkaniowych RCN
| H3 Index | Lat | Lon | Mediana Ceny m2 | Liczba Transakcji |
|---|---|---|---|---|
| `881f54d0a5fffff` | 54.14900 | 19.38097 | **19,608 PLN** | 1 |
| `881f54d0dbfffff` | 54.19296 | 19.43960 | **8,648 PLN** | 48 |
| `881f54d0bbfffff` | 54.15924 | 19.43912 | **8,285 PLN** | 27 |
| `881f54d56dfffff` | 54.15696 | 19.45227 | **7,930 PLN** | 64 |
| `881f54d083fffff` | 54.16871 | 19.42343 | **7,824 PLN** | 9 |

### Faza 2: Audyt Zbednosci TCRP Report 100 (The Axe List)
- **Zbedne Slupki (R >= 0.50 - Umiarkowana Kanibalizacja):** 178
- **Zbedne Slupki (R >= 0.70 - Rekomendacja Likwidacji):** 157
- **Zbedne Slupki (R >= 0.90 - Skrajna Zbednosc / Dubel):** 96

| Zbedny Słupek | Dominujacy Słupek | Dystans [m] | S_service | S_spatial | S_cannibal | R-Score |
|---|---|---|---|---|---|---|
| Gronowo Górne - Skrzyżowanie (#289, 2.0714285714285716 odj/h) | Gronowo - Skrzyżowanie (#288, 2.0714285714285716 odj/h) | 2.2m | 1.00 | 1.00 | 1.00 | **0.9950** |
| Gronowo - Skrzyżowanie (#288, 2.0714285714285716 odj/h) | Gronowo Górne - Skrzyżowanie (#289, 2.0714285714285716 odj/h) | 2.2m | 1.00 | 1.00 | 1.00 | **0.9950** |
| Lotnicza - Skrzydlata (#353, 0.21428571428571427 odj/h) | Lotnicza - Skrzydlata (#352, 0.2857142857142857 odj/h) | 2.6m | 1.00 | 1.00 | 0.99 | **0.9942** |
| Bielany - Osiedle (#113, 1.7142857142857142 odj/h) | Bielany - Osiedle (#112, 1.7142857142857142 odj/h) | 3.0m | 1.00 | 1.00 | 0.99 | **0.9933** |
| Bielany - Osiedle (#112, 1.7142857142857142 odj/h) | Bielany - Osiedle (#113, 1.7142857142857142 odj/h) | 3.0m | 1.00 | 1.00 | 0.99 | **0.9933** |

### Faza 3: Hierarchia Magnesow Miejskich POI

#### Top 20 Kategorii POI w Miescie
| Kategoria | Tier | Ilosc w Miescie | Wartosc Punktowa (W) |
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

#### TOP 10 Konkretnych Nazwanych Magnesow Miejskich (T0, T1, T2)
| Nazwa Obiektu | Kategoria POI | Tier | Waga Przyciagania (W) |
|---|---|---|---|
| **ZKS Olimpia Elbląg** | `national_stadium` | T1_NATIONAL_MAGNET | 20,170,188 |
| **Zespół Państwowych Szkół Muzycznych** | `university_campus` | T1_NATIONAL_MAGNET | 18,737,399 |
| **Akademia Nauk Stosowanych** | `university_campus` | T1_NATIONAL_MAGNET | 18,737,399 |
| **I Liceum Ogólnokształcące im. Juliusza Słowackiego** | `university_campus` | T1_NATIONAL_MAGNET | 18,737,399 |
| **Akademia Medycznych i Społecznych Nauk Stosowanych** | `university_campus` | T1_NATIONAL_MAGNET | 18,737,399 |
| **Wojewódzki Szpital Zespolony** | `hospital_clinical` | T1_NATIONAL_MAGNET | 17,984,340 |
| **Szpital Miejski im. Jana Pawła II** | `hospital_clinical` | T1_NATIONAL_MAGNET | 17,984,340 |
| **Elbląg** | `regional_rail_hub` | T1_NATIONAL_MAGNET | 6,215,408 |
| **Elbląski Park Technologiczny** | `commercial_zone` | T2_STRATEGIC_HUB | 4,244,343 |
| **Zajezdnia tramwajowa** | `industrial_zone` | T2_STRATEGIC_HUB | 3,778,225 |

### Faza 4: Probki Pelnego DNA (Wszystkie 53 Metryki)

#### POZIOM 1: NAJLEPSZE SLUPKI FIZYCZNE MICRO (TOP 5)
<details><summary><b>Nad Jarem (ID: 166 | H3: 891f54d0d03ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Nad Jarem
  stop_id                 : 166
  h3_index                : 891f54d0d03ffff
  hub_id                  : 16
  hub_name                : Nad Jarem
  is_hub_anchor           : True
  stop_lat                : 54.1876
  stop_lon                : 19.4279

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 100.0000
  stop_local_score_raw    : 1.2763

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 1974949.8539
  stop_raw_gravity        : 1418246.3750
  stop_entropy            : 0.3925

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 20.4286
  stop_routes_count       : 10
  stop_routes             : 13, 14, 16, 17, 18, 21, 24, C, T1, T4
  stop_hub_share          : 0.5934

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 6860.4651
  stop_liquidity          : 142

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 613.8135

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
    - post_office              : Elbląg 17
    - convenience_store        : Żabka
    - pharmacy                 : Regenium
    - convenience_store        : Gest
    - micro_parcel_locker      : Paczkomat InPost
    - micro_parcel_locker      : Paczkomat InPost
    - micro_parcel_locker      : Paczkomat InPost
    - convenience_store        : Sklep spożywczo-monopolowy
    - place_of_worship         : Kościół pw. Świętego Brata Alberta
    - supermarket              : Społem
```
</details>
<details><summary><b>Królewiecka - Szpital (ID: 170 | H3: 891f54d0d6bffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Królewiecka - Szpital
  stop_id                 : 170
  h3_index                : 891f54d0d6bffff
  hub_id                  : 183
  hub_name                : Królewiecka - Szpital
  is_hub_anchor           : True
  stop_lat                : 54.1790
  stop_lon                : 19.4270

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.7135
  stop_local_score_raw    : 1.1377

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 8589387.7858
  stop_raw_gravity        : 5426975.5681
  stop_entropy            : 0.5827

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 11.5000
  stop_routes_count       : 7
  stop_routes             : 10, 13, 17, 20, 21, 24, C
  stop_hub_share          : 0.8256

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 7500.0000
  stop_liquidity          : 143

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 312.1143

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 7x convenience_store
  > 7x health_clinic
  > 6x car_services
  > 4x micro_playground
  > 3x micro_parcel_locker
  > 3x park_recreation
  > 3x education_preschool
  > 3x industrial_zone
  > 2x personal_services
  > 2x gastronomy
  > 2x pharmacy
  > 2x hospital_clinical
  > 2x supermarket
  > 1x government_central
  > 1x culture_theatre
  > 1x business_office

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - personal_services        : Obsesja
    - health_clinic            : Poradnia Zdrowia Psychicznego
    - gastronomy               : Celebra
    - pharmacy                 : Dyżurna
    - convenience_store        : Żabka
    - health_clinic            : Medesta
    - micro_parcel_locker      : Paczkomat InPost
    - micro_parcel_locker      : Paczkomat InPost
    - pharmacy                 : Apteka Farmacja 24
    - health_clinic            : Omnia
```
</details>
<details><summary><b>Ogólna (ID: 72 | H3: 891f54d0c23ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Ogólna
  stop_id                 : 72
  h3_index                : 891f54d0c23ffff
  hub_id                  : 184
  hub_name                : Ogólna
  is_hub_anchor           : True
  stop_lat                : 54.1865
  stop_lon                : 19.4065

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.4269
  stop_local_score_raw    : 1.1342

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 3966367.6167
  stop_raw_gravity        : 2088968.9335
  stop_entropy            : 0.8987

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 12.3571
  stop_routes_count       : 6
  stop_routes             : 13, 14, 17, 18, T1, T4
  stop_hub_share          : 1.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 7003.2573
  stop_liquidity          : 227

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 870.1932

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 46x specialized_retail
  > 46x park_recreation
  > 15x micro_playground
  > 10x gastronomy
  > 10x personal_services
  > 6x convenience_store
  > 5x health_clinic
  > 4x supermarket
  > 4x shopping_mall
  > 4x micro_parcel_locker
  > 4x industrial_zone
  > 3x pharmacy
  > 3x education_preschool
  > 2x micro_atm
  > 2x bank
  > 2x post_office
  > 2x business_office
  > 1x culture_theatre
  > 1x place_of_worship
  > 1x education_high_school
  > 1x car_services
  > 1x sports_centre

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm                : Bankomat Millennium
    - specialized_retail       : RTV Euro AGD
    - supermarket              : Carrefour Elbląg Ogrody
    - gastronomy               : McDonald's
    - supermarket              : Biedronka
    - supermarket              : Biedronka
    - pharmacy                 : Centrum
    - specialized_retail       : Carry
    - specialized_retail       : Chiarra
    - specialized_retail       : Esotiq
```
</details>
<details><summary><b>Ogólna - Broniewskiego (ID: 121 | H3: 891f54d0dcfffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Ogólna - Broniewskiego
  stop_id                 : 121
  h3_index                : 891f54d0dcfffff
  hub_id                  : 157
  hub_name                : Ogólna - Broniewskiego
  is_hub_anchor           : True
  stop_lat                : 54.1866
  stop_lon                : 19.4192

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.1404
  stop_local_score_raw    : 1.1329

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 865596.4041
  stop_raw_gravity        : 410824.0467
  stop_entropy            : 1.1070

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 18.0714
  stop_routes_count       : 8
  stop_routes             : 13, 14, 17, 18, 21, 24, T1, T4
  stop_hub_share          : 0.6504

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 6752.8736
  stop_liquidity          : 237

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 772.1566

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 80x park_recreation
  > 21x micro_playground
  > 11x personal_services
  > 8x health_clinic
  > 7x convenience_store
  > 5x specialized_retail
  > 5x micro_parcel_locker
  > 4x supermarket
  > 4x gastronomy
  > 3x pharmacy
  > 2x micro_atm
  > 2x post_office
  > 2x car_services
  > 2x education_preschool
  > 1x culture_theatre
  > 1x bank
  > 1x business_office
  > 1x place_of_worship
  > 1x education_high_school

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - personal_services        : LeCher
    - specialized_retail       : Łapciuch
    - personal_services        : Blue
    - pharmacy                 : Dyżurna
    - supermarket              : Top Market
    - health_clinic            : Centrum Stomatologii
    - health_clinic            : Uni-Med
    - health_clinic            : Uni-Med
    - personal_services        : wySpa
    - personal_services        : Ada
```
</details>
<details><summary><b>Królewiecka - Metalowców (ID: 194 | H3: 891f54d0d63ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Królewiecka - Metalowców
  stop_id                 : 194
  h3_index                : 891f54d0d63ffff
  hub_id                  : 140
  hub_name                : Królewiecka - Metalowców
  is_hub_anchor           : True
  stop_lat                : 54.1811
  stop_lon                : 19.4315

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 98.8539
  stop_local_score_raw    : 1.0826

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 4193635.2161
  stop_raw_gravity        : 2209095.4211
  stop_entropy            : 0.8983

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 11.5714
  stop_routes_count       : 7
  stop_routes             : 10, 13, 17, 20, 21, 24, C
  stop_hub_share          : 0.6067

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 7142.8571
  stop_liquidity          : 139

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 569.3623

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 26x park_recreation
  > 6x specialized_retail
  > 5x convenience_store
  > 5x car_services
  > 4x personal_services
  > 4x micro_playground
  > 3x pharmacy
  > 3x micro_parcel_locker
  > 3x industrial_zone
  > 3x supermarket
  > 3x health_clinic
  > 2x hospital_clinical
  > 1x gastronomy
  > 1x place_of_worship
  > 1x education_preschool

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy               : Celebra
    - pharmacy                 : Dyżurna
    - micro_parcel_locker      : Paczkomat InPost
    - pharmacy                 : Apteka Farmacja 24
    - specialized_retail       : Sinsay
    - personal_services        : Hebe
    - personal_services        : Rossmann
    - specialized_retail       : Media Expert
    - pharmacy                 : Gemini
    - specialized_retail       : Pepco
```
</details>

#### POZIOM 1: NAJSLABSZE SLUPKI FIZYCZNE MICRO (BOTTOM 5)
<details><summary><b>Nowakowo 5 (ID: 61 | H3: 891f54d2e17ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Nowakowo 5
  stop_id                 : 61
  h3_index                : 891f54d2e17ffff
  hub_id                  : 65
  hub_name                : Nowakowo 5
  is_hub_anchor           : True
  stop_lat                : 54.2243
  stop_lon                : 19.3578

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 1.4327
  stop_local_score_raw    : -2.0020

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.7143
  stop_routes_count       : 1
  stop_routes             : 11
  stop_hub_share          : 0.5000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 6527.0936
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 22.5421

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Nowakowo 5 (ID: 63 | H3: 891f54d2e17ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Nowakowo 5
  stop_id                 : 63
  h3_index                : 891f54d2e17ffff
  hub_id                  : 65
  hub_name                : Nowakowo 5
  is_hub_anchor           : False
  stop_lat                : 54.2244
  stop_lon                : 19.3577

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 1.1461
  stop_local_score_raw    : -2.0028

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.7143
  stop_routes_count       : 1
  stop_routes             : 11
  stop_hub_share          : 0.5000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 6527.0936
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 22.3535

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Stagniewo - POD (ID: 251 | H3: 891f54d5447ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Stagniewo - POD
  stop_id                 : 251
  h3_index                : 891f54d5447ffff
  hub_id                  : 44
  hub_name                : Stagniewo - POD
  is_hub_anchor           : False
  stop_lat                : 54.1662
  stop_lon                : 19.4812

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.7163
  stop_local_score_raw    : -2.1311

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 1.2857
  stop_routes_count       : 1
  stop_routes             : 11
  stop_hub_share          : 0.5000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 6527.0936
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Stagniewo - POD (ID: 248 | H3: 891f54d5447ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Stagniewo - POD
  stop_id                 : 248
  h3_index                : 891f54d5447ffff
  hub_id                  : 44
  hub_name                : Stagniewo - POD
  is_hub_anchor           : True
  stop_lat                : 54.1661
  stop_lon                : 19.4811

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.7163
  stop_local_score_raw    : -2.1311

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 1.2857
  stop_routes_count       : 1
  stop_routes             : 11
  stop_hub_share          : 0.5000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 6527.0936
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Leszkowo (ID: 119 | H3: 891f726da23ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Leszkowo
  stop_id                 : 119
  h3_index                : 891f726da23ffff
  hub_id                  : 63
  hub_name                : Leszkowo
  is_hub_anchor           : True
  stop_lat                : 54.2368
  stop_lon                : 19.4596

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.2865
  stop_local_score_raw    : -2.1349

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 1.6429
  stop_routes_count       : 1
  stop_routes             : 24
  stop_hub_share          : 1.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 3857.9519
  stop_liquidity          : 3

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 31.5588

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>

#### POZIOM 2: NAJWAZNIEJSZE WEZLY LOGICZNE MACRO (TOP 5 HUBOW)
<details><summary><b>HUB: Plac Słowiański (ID: 76 | H3: 891f54d0abbffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Plac Słowiański
  hub_id                  : 76
  h3_index                : 891f54d0abbffff
  hub_stops_count         : 4
  hub_stops_ids           : 96, 97, 410, 423
  lat                     : 54.1592
  lon                     : 19.3988

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 100.0000
  hub_local_score_raw     : 1.2466

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 7876258.0919
  hub_raw_gravity         : 2726150.8595
  hub_entropy             : 1.8891

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 36.6429
  hub_routes_count        : 8
  hub_routes              : 1, 2, 3, 10, 12, 14, 15, 21

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 6883.8146
  hub_liquidity           : 873

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 1362.9688
```
</details>
<details><summary><b>HUB: Robotnicza - Alstom (ID: 8 | H3: 891f54d084bffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Robotnicza - Alstom
  hub_id                  : 8
  h3_index                : 891f54d084bffff
  hub_stops_count         : 6
  hub_stops_ids           : 90, 91, 409, 424, 434, 448
  lat                     : 54.1635
  lon                     : 19.3984

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.4595
  hub_local_score_raw     : 1.1280

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 11151077.9562
  hub_raw_gravity         : 4908924.5915
  hub_entropy             : 1.2716

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 27.7857
  hub_routes_count        : 5
  hub_routes              : 1, 2, 3, 12, 21

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 7010.0876
  hub_liquidity           : 632

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 765.5847
```
</details>
<details><summary><b>HUB: Nad Jarem (ID: 16 | H3: 891f54d0d03ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Nad Jarem
  hub_id                  : 16
  h3_index                : 891f54d0d03ffff
  hub_stops_count         : 3
  hub_stops_ids           : 166, 167, 280
  lat                     : 54.1875
  lon                     : 19.4276

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 98.9189
  hub_local_score_raw     : 1.1267

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 3346255.8590
  hub_raw_gravity         : 2366966.9801
  hub_entropy             : 0.4137

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 34.4286
  hub_routes_count        : 10
  hub_routes              : 13, 14, 16, 17, 18, 21, 24, C, T1, T4

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 6874.9090
  hub_liquidity           : 170

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 1145.6423
```
</details>
<details><summary><b>HUB: 1-go Maja - Sąd (ID: 1 | H3: 891f54d086bffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : 1-go Maja - Sąd
  hub_id                  : 1
  h3_index                : 891f54d086bffff
  hub_stops_count         : 5
  hub_stops_ids           : 151, 411, 422, 1004, 1005
  lat                     : 54.1600
  lon                     : 19.4072

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 98.3784
  hub_local_score_raw     : 1.0780

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 5743433.8401
  hub_raw_gravity         : 2411566.0711
  hub_entropy             : 1.3816

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 33.0714
  hub_routes_count        : 7
  hub_routes              : 1, 2, 3, 13, 16, 19, T4

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 6147.7352
  hub_liquidity           : 820

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 1252.0051
```
</details>
<details><summary><b>HUB: Ogólna - Sklep (ID: 99 | H3: 891f54d0dcbffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Ogólna - Sklep
  hub_id                  : 99
  h3_index                : 891f54d0dcbffff
  hub_stops_count         : 3
  hub_stops_ids           : 120, 123, 124
  lat                     : 54.1866
  lon                     : 19.4141

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 97.8378
  hub_local_score_raw     : 1.0194

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 1936176.8564
  hub_raw_gravity         : 632776.8839
  hub_entropy             : 2.0598

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 29.4286
  hub_routes_count        : 8
  hub_routes              : 13, 14, 17, 18, 21, 24, T1, T4

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 6903.3531
  hub_liquidity           : 187

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 1237.3046
```
</details>

---

## ELK
#### DASHBOARD ASERCJI PIPELINE'U (Pelna Integralnosc Bazy)
```text
[PASS ZERO NULLS & INFS] Petla obliczeniowa wygenerowala 100% spojnych komorek.
[STATS] [PASS] Z-Score Micro VALID (Mean: 0.000, Std: 0.777)
        Rozklad Rang Slupkow (Micro): A: 32, A+: 17, B: 48, C: 64, D: 80, F: 79
[STATS] [PASS] Z-Score Macro VALID (Mean: -0.000, Std: 0.782)
        Rozklad Rang Hubow (Macro): A: 21, A+: 11, B: 31, C: 41, D: 52, F: 51
[DEMOGRAPHY] [PASS] DEMOGRAFIA W NORMIE: +20.8% (GUS strefa: 72,490 vs Baza miejska: 60,000)
[PASS] POI Parquet 100% Valid (Matematyka Huffa dziala)
[PASS] POP Parquet 100% Valid
[PASS] H3 Res 8 Grid 100% Valid (475 komorek, 22 pustyn transportowych)
```

### Faza 0: Statystyki Ogolne i Balans Sieci
- **Slupki Fizyczne (Micro):** 320 slupkow
- **Wezly Logiczne (Macro Hubs):** 207 hubow (Wskaznik konsolidacji: 1.55 slupka/hub)
- **Populacja Strefy Transportowej (GUS 250m):** 72,490 mieszkancow
- **Transakcje Notarialne RCN:** 3,570 aktow
### Faza 1: Siatka Analityczna Uber H3 Res 8 (0.74 km2 / komorka)
- **Liczba Komorek H3 Res 8:** 475
- **Rynek Nieruchomosci RCN w Heksach:** Pokrycie 47.4% (225/475 komorek), Srednia: 3,066 PLN/m2, Mediana: 2,653 PLN/m2, Std: 2,187, Min: 79, Max: 13,029 PLN/m2
- **Demografia GUS NSP 2021 w Heksach:** Laczna ludnosc w heksach: 72,490, Srednia/heks: 152.6, Mediana: 5.0, Std: 752.9, Max: 8,480
- **Podaz Transportu w Heksach:** Sredni Transport Score: 6.30, Max Transport Score: 100.00, Srednia odjazdow/h: 1.62, Pustynie Transportowe TDI: 22

#### TOP 5 Pustyn Transportowych (The Investment List)
| H3 Index | Lat | Lon | Populacja GUS | Odjazdy/h | TDI Score |
|---|---|---|---|---|---|
| `881f5538a9fffff` | 53.80062 | 22.34443 | 458 | 0.0 | **64.31** |
| `881f5538e9fffff` | 53.81784 | 22.32703 | 330 | 0.0 | **60.88** |
| `881f5538c5fffff` | 53.82254 | 22.33783 | 278 | 0.0 | **59.08** |
| `881f553ab1fffff` | 53.84394 | 22.36805 | 187 | 0.0 | **54.94** |
| `881f55389dfffff` | 53.81210 | 22.38983 | 171 | 0.0 | **54.01** |

#### TOP 5 Biegunow Transportu (Najwyzsza Podaz)
| H3 Index | Lat | Lon | Transport Score | Odjazdy/h | Liczba Slupkow |
|---|---|---|---|---|---|
| `881f553ab5fffff` | 53.83925 | 22.35724 | **100.00** | 54.4 | 9 |
| `881f5538c7fffff` | 53.81993 | 22.35083 | **100.00** | 77.7 | 8 |
| `881f5538cbfffff` | 53.83194 | 22.35944 | **100.00** | 35.0 | 6 |
| `881f5538cdfffff` | 53.82985 | 22.33563 | **100.00** | 31.5 | 7 |
| `881f553881fffff` | 53.81001 | 22.36603 | **100.00** | 41.7 | 6 |

#### TOP 5 Najdrozszych Heksow Mieszkaniowych RCN
| H3 Index | Lat | Lon | Mediana Ceny m2 | Liczba Transakcji |
|---|---|---|---|---|
| `881f554dc3fffff` | 53.56162 | 21.50249 | **13,029 PLN** | 4 |
| `881f550363fffff` | 53.96714 | 21.77955 | **11,618 PLN** | 1 |
| `881f5539bbfffff` | 53.76457 | 22.31863 | **11,409 PLN** | 4 |
| `881f5511e5fffff` | 54.01587 | 21.73982 | **11,036 PLN** | 12 |
| `881f553ab1fffff` | 53.84394 | 22.36805 | **8,628 PLN** | 24 |

### Faza 2: Audyt Zbednosci TCRP Report 100 (The Axe List)
- **Zbedne Slupki (R >= 0.50 - Umiarkowana Kanibalizacja):** 147
- **Zbedne Slupki (R >= 0.70 - Rekomendacja Likwidacji):** 123
- **Zbedne Slupki (R >= 0.90 - Skrajna Zbednosc / Dubel):** 80

| Zbedny Słupek | Dominujacy Słupek | Dystans [m] | S_service | S_spatial | S_cannibal | R-Score |
|---|---|---|---|---|---|---|
| Chełchy — Bloki (#74, 0.5714285714285714 odj/h) | Chełchy — Bloki (#255, 0.5714285714285714 odj/h) | 6.2m | 1.00 | 1.00 | 0.99 | **0.9849** |
| Chełchy — Bloki (#255, 0.5714285714285714 odj/h) | Chełchy — Bloki (#74, 0.5714285714285714 odj/h) | 6.2m | 1.00 | 1.00 | 0.99 | **0.9849** |
| Sajzy Ⅲ (#234, 0.2857142857142857 odj/h) | Sajzy Ⅲ (#119, 0.2857142857142857 odj/h) | 7.7m | 1.00 | 1.00 | 0.98 | **0.9807** |
| Sajzy Ⅲ (#119, 0.2857142857142857 odj/h) | Sajzy Ⅲ (#234, 0.2857142857142857 odj/h) | 7.7m | 1.00 | 1.00 | 0.98 | **0.9807** |
| Osiedle Bocianie Gniazdo n/ż (#314-03, 0.2857142857142857 odj/h) | Osiedle Bocianie Gniazdo n/ż (#313-16, 0.2857142857142857 odj/h) | 8.1m | 1.00 | 1.00 | 0.98 | **0.9796** |

### Faza 3: Hierarchia Magnesow Miejskich POI

#### Top 20 Kategorii POI w Miescie
| Kategoria | Tier | Ilosc w Miescie | Wartosc Punktowa (W) |
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

#### TOP 10 Konkretnych Nazwanych Magnesow Miejskich (T0, T1, T2)
| Nazwa Obiektu | Kategoria POI | Tier | Waga Przyciagania (W) |
|---|---|---|---|
| **Szpital Miejski Pro-Medica** | `hospital_clinical` | T1_NATIONAL_MAGNET | 16,239,672 |
| **1 Wojskowy Szpital Kliniczny z Polikliniką SPZOZ w Lublinie Filia w Ełku** | `hospital_clinical` | T1_NATIONAL_MAGNET | 16,239,672 |
| **Pro-Medica** | `hospital_clinical` | T1_NATIONAL_MAGNET | 14,137,456 |
| **Wschodnioeuropejska Akademia Nauk Stosowanych** | `university_campus` | T1_NATIONAL_MAGNET | 11,917,109 |
| **Ełcki Uniwersytet Trzeciego Wieku** | `university_campus` | T1_NATIONAL_MAGNET | 10,374,446 |
| **Wyższe Seminarium Duchowne** | `university_campus` | T1_NATIONAL_MAGNET | 10,374,446 |
| **Uniwesytet Warmińsko-Mazurski w Olsztynie filia w Ełku** | `university_campus` | T1_NATIONAL_MAGNET | 9,566,359 |
| **Ełk Wąskotorowy** | `regional_rail_hub` | T1_NATIONAL_MAGNET | 5,808,237 |
| **Woszczele** | `regional_rail_hub` | T1_NATIONAL_MAGNET | 5,808,237 |
| **Ełk** | `regional_rail_hub` | T1_NATIONAL_MAGNET | 5,056,364 |

### Faza 4: Probki Pelnego DNA (Wszystkie 53 Metryki)

#### POZIOM 1: NAJLEPSZE SLUPKI FIZYCZNE MICRO (TOP 5)
<details><summary><b>Jana Pawła Ⅱ — Kolbego (ID: 15 | H3: 891f5538ab3ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Jana Pawła Ⅱ — Kolbego
  stop_id                 : 15
  h3_index                : 891f5538ab3ffff
  hub_id                  : 173
  hub_name                : Jana Pawła Ⅱ — Kolbego
  is_hub_anchor           : True
  stop_lat                : 53.8002
  stop_lon                : 22.3550

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 100.0000
  stop_local_score_raw    : 1.6173

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 2093869.5733
  stop_raw_gravity        : 698305.8353
  stop_entropy            : 1.9985

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 6.7143
  stop_routes_count       : 7
  stop_routes             : 4, 6, 7, 8, 12, 14, 16
  stop_hub_share          : 1.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 6947.8908
  stop_liquidity          : 249

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 1653.2259

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 44x park_recreation
  > 31x micro_playground
  > 12x personal_services
  > 8x convenience_store
  > 8x health_clinic
  > 6x gastronomy
  > 4x specialized_retail
  > 4x micro_parcel_locker
  > 4x bank
  > 4x education_preschool
  > 3x pharmacy
  > 3x education_high_school
  > 2x supermarket
  > 2x post_office
  > 1x micro_atm
  > 1x culture_theatre
  > 1x sports_centre
  > 1x place_of_worship

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - supermarket              : Biedronka
    - convenience_store        : Lewiatan
    - convenience_store        : Okruszek
    - gastronomy               : DaGrasso
    - specialized_retail       : Ato
    - convenience_store        : Miraż
    - personal_services        : U Marleny
    - micro_parcel_locker      : Paczkomat InPost
    - bank                     : Bank Spółdzielczy
    - gastronomy               : Savana
```
</details>
<details><summary><b>Jeziorna — Pętla (ID: 20 | H3: 891f5538ab3ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Jeziorna — Pętla
  stop_id                 : 20
  h3_index                : 891f5538ab3ffff
  hub_id                  : 170
  hub_name                : Jeziorna — Pętla
  is_hub_anchor           : True
  stop_lat                : 53.7996
  stop_lon                : 22.3530

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.6875
  stop_local_score_raw    : 1.5859

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 1821428.7013
  stop_raw_gravity        : 622084.3929
  stop_entropy            : 1.9279

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 6.6429
  stop_routes_count       : 7
  stop_routes             : 4, 6, 7, 8, 12, 14, 16
  stop_hub_share          : 1.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 7154.9453
  stop_liquidity          : 232

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 1060.4536

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 49x park_recreation
  > 27x micro_playground
  > 12x personal_services
  > 8x health_clinic
  > 6x convenience_store
  > 4x specialized_retail
  > 4x micro_parcel_locker
  > 4x bank
  > 4x gastronomy
  > 3x education_preschool
  > 3x education_high_school
  > 2x supermarket
  > 2x pharmacy
  > 1x post_office
  > 1x sports_centre
  > 1x place_of_worship

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - supermarket              : Biedronka
    - convenience_store        : Okruszek
    - specialized_retail       : Ato
    - convenience_store        : Miraż
    - personal_services        : U Marleny
    - micro_parcel_locker      : Paczkomat InPost
    - bank                     : Bank Spółdzielczy
    - gastronomy               : Savana
    - health_clinic            : Specmed
    - convenience_store        : Żabka
```
</details>
<details><summary><b>Jana Pawła Ⅱ — Skwer Foksa (ID: 21 | H3: 891f5538ab3ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Jana Pawła Ⅱ — Skwer Foksa
  stop_id                 : 21
  h3_index                : 891f5538ab3ffff
  hub_id                  : 200
  hub_name                : Jana Pawła Ⅱ — Skwer Foksa
  is_hub_anchor           : True
  stop_lat                : 53.8007
  stop_lon                : 22.3564

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.3750
  stop_local_score_raw    : 1.5745

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 1943443.2823
  stop_raw_gravity        : 706235.7489
  stop_entropy            : 1.7518

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 6.6429
  stop_routes_count       : 7
  stop_routes             : 4, 6, 7, 8, 12, 14, 16
  stop_hub_share          : 1.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 6569.7772
  stop_liquidity          : 200

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 1616.6241

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 40x park_recreation
  > 31x micro_playground
  > 13x personal_services
  > 10x convenience_store
  > 8x health_clinic
  > 6x gastronomy
  > 5x micro_parcel_locker
  > 4x specialized_retail
  > 4x bank
  > 4x education_preschool
  > 3x pharmacy
  > 3x education_high_school
  > 3x place_of_worship
  > 2x supermarket
  > 2x post_office
  > 2x sports_centre
  > 1x micro_atm
  > 1x culture_theatre

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - supermarket              : Biedronka
    - convenience_store        : Lewiatan
    - convenience_store        : Okruszek
    - gastronomy               : DaGrasso
    - specialized_retail       : Ato
    - convenience_store        : Miraż
    - personal_services        : U Marleny
    - micro_parcel_locker      : Paczkomat InPost
    - bank                     : Bank Spółdzielczy
    - gastronomy               : Savana
```
</details>
<details><summary><b>Kilińskiego — Szkoła nr 7 (ID: 11 | H3: 891f553880bffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Kilińskiego — Szkoła nr 7
  stop_id                 : 11
  h3_index                : 891f553880bffff
  hub_id                  : 189
  hub_name                : Kilińskiego — Szkoła nr 7
  is_hub_anchor           : True
  stop_lat                : 53.8088
  stop_lon                : 22.3644

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.0625
  stop_local_score_raw    : 1.5107

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 1973149.4268
  stop_raw_gravity        : 614147.5003
  stop_entropy            : 2.2128

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 7.5714
  stop_routes_count       : 9
  stop_routes             : 1, 4, 5, 6, 7, 8, 12, 13, 14
  stop_hub_share          : 0.5668

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 5644.7679
  stop_liquidity          : 62

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 930.9678

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
    - bank                     : Bank Pekao
    - government_central       : PEC Ełk
    - pharmacy                 : Cef@Rm 36
    - health_clinic            : Eskulap
    - convenience_store        : Spożywczak
    - personal_services        : U Kaśki
    - post_office              : UP Ełk Nr 6
    - car_services             : CircleK
    - convenience_store        : abc
    - pharmacy                 : Asak
```
</details>
<details><summary><b>Kilińskiego — Matejki (ID: 25 | H3: 891f55388c7ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Kilińskiego — Matejki
  stop_id                 : 25
  h3_index                : 891f55388c7ffff
  hub_id                  : 6
  hub_name                : Kilińskiego — Matejki
  is_hub_anchor           : True
  stop_lat                : 53.8119
  stop_lon                : 22.3607

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 98.7500
  stop_local_score_raw    : 1.5045

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 6331132.5814
  stop_raw_gravity        : 2426171.0636
  stop_entropy            : 1.6095

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 5.7857
  stop_routes_count       : 7
  stop_routes             : 4, 5, 6, 7, 8, 12, 13
  stop_hub_share          : 0.5260

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 5920.3143
  stop_liquidity          : 127

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 1437.7123

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 20x micro_playground
  > 15x park_recreation
  > 6x health_clinic
  > 6x commercial_zone
  > 5x convenience_store
  > 4x micro_atm
  > 4x car_services
  > 4x education_preschool
  > 4x micro_parcel_locker
  > 3x supermarket
  > 3x pharmacy
  > 3x gastronomy
  > 3x personal_services
  > 3x education_high_school
  > 1x bank
  > 1x government_central
  > 1x specialized_retail
  > 1x post_office
  > 1x sports_centre
  > 1x place_of_worship

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm                : Bankomat BZ WBK
    - bank                     : Bank Pekao
    - supermarket              : Kaufland
    - supermarket              : Biedronka
    - government_central       : PEC Ełk
    - car_services             : Auto-Marcin
    - pharmacy                 : Cef@Rm 36
    - gastronomy               : Roma
    - specialized_retail       : Atu
    - car_services             : Orlen
```
</details>

#### POZIOM 1: NAJSLABSZE SLUPKI FIZYCZNE MICRO (BOTTOM 5)
<details><summary><b>Buczki (ID: 159 | H3: 891f5523043ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Buczki
  stop_id                 : 159
  h3_index                : 891f5523043ffff
  hub_id                  : 135
  hub_name                : Buczki
  is_hub_anchor           : True
  stop_lat                : 53.8381
  stop_lon                : 22.4291

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 1.7188
  stop_local_score_raw    : -1.1395

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 4784.2342
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Nowa Wieś — GRP (ID: 150 | H3: 891f5539b8bffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Nowa Wieś — GRP
  stop_id                 : 150
  h3_index                : 891f5539b8bffff
  hub_id                  : 28
  hub_name                : Nowa Wieś — GR
  is_hub_anchor           : False
  stop_lat                : 53.7648
  stop_lon                : 22.3003

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 1.2500
  stop_local_score_raw    : -1.1645

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0714
  stop_routes_count       : 1
  stop_routes             : 4
  stop_hub_share          : 0.1667

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 2248.8756
  stop_liquidity          : 5

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 98.8141

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Chełchy — Kościół (ID: 256 | H3: 891f55226dbffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Chełchy — Kościół
  stop_id                 : 256
  h3_index                : 891f55226dbffff
  hub_id                  : 13
  hub_name                : Chełchy — Wieś
  is_hub_anchor           : False
  stop_lat                : 53.8799
  stop_lon                : 22.4630

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.9375
  stop_local_score_raw    : -1.1936

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.5714
  stop_routes_count       : 1
  stop_routes             : 5
  stop_hub_share          : 0.5000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 1690.1362
  stop_liquidity          : 2

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 33.4182

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Chełchy — Wieś (ID: 164 | H3: 891f55226dbffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Chełchy — Wieś
  stop_id                 : 164
  h3_index                : 891f55226dbffff
  hub_id                  : 13
  hub_name                : Chełchy — Wieś
  is_hub_anchor           : True
  stop_lat                : 53.8797
  stop_lon                : 22.4631

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.6250
  stop_local_score_raw    : -1.1968

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.5714
  stop_routes_count       : 1
  stop_routes             : 5
  stop_hub_share          : 0.5000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 1690.1362
  stop_liquidity          : 2

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 32.0752

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Grabnik Osada (ID: 264 | H3: 891f5505aafffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Grabnik Osada
  stop_id                 : 264
  h3_index                : 891f5505aafffff
  hub_id                  : 104
  hub_name                : Grabnik Osada
  is_hub_anchor           : True
  stop_lat                : 53.8828
  stop_lon                : 22.1624

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.3125
  stop_local_score_raw    : -1.5540

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 1205.0124
  stop_liquidity          : 2

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 102.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>

#### POZIOM 2: NAJWAZNIEJSZE WEZLY LOGICZNE MACRO (TOP 5 HUBOW)
<details><summary><b>HUB: Kilińskiego — Matejki (ID: 6 | H3: 891f55388c7ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Kilińskiego — Matejki
  hub_id                  : 6
  h3_index                : 891f55388c7ffff
  hub_stops_count         : 2
  hub_stops_ids           : 10, 25
  lat                     : 53.8119
  lon                     : 22.3603

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 100.0000
  hub_local_score_raw     : 1.6023

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 12423187.4561
  hub_raw_gravity         : 4784823.3766
  hub_entropy             : 1.5964

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 11.0000
  hub_routes_count        : 7
  hub_routes              : 4, 5, 6, 7, 8, 12, 13

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 5920.3143
  hub_liquidity           : 127

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 2732.0152
```
</details>
<details><summary><b>HUB: Wojska Polskiego — Most (ID: 22 | H3: 891f5538c6fffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Wojska Polskiego — Most
  hub_id                  : 22
  h3_index                : 891f5538c6fffff
  hub_stops_count         : 2
  hub_stops_ids           : 9, 26
  lat                     : 53.8186
  lon                     : 22.3530

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.5169
  hub_local_score_raw     : 1.5804

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 8343920.8788
  hub_raw_gravity         : 3083996.5339
  hub_entropy             : 1.7056

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 13.8571
  hub_routes_count        : 9
  hub_routes              : 1, 4, 5, 6, 7, 8, 12, 13, 16

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 5435.3355
  hub_liquidity           : 100

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 1335.7744
```
</details>
<details><summary><b>HUB: Kilińskiego — Szkoła nr 7 (ID: 189 | H3: 891f553880bffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Kilińskiego — Szkoła nr 7
  hub_id                  : 189
  h3_index                : 891f553880bffff
  hub_stops_count         : 2
  hub_stops_ids           : 11, 24
  lat                     : 53.8088
  lon                     : 22.3647

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.0338
  hub_local_score_raw     : 1.5514

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 3224809.8240
  hub_raw_gravity         : 986975.3069
  hub_entropy             : 2.2674

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 13.3571
  hub_routes_count        : 9
  hub_routes              : 1, 4, 5, 6, 7, 8, 12, 13, 14

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 5644.7679
  hub_liquidity           : 62

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 1646.9917
```
</details>
<details><summary><b>HUB: Suwalska — PUK (ID: 55 | H3: 891f5538dc3ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Suwalska — PUK
  hub_id                  : 55
  h3_index                : 891f5538dc3ffff
  hub_stops_count         : 2
  hub_stops_ids           : 4, 31
  lat                     : 53.8294
  lon                     : 22.3707

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 98.5507
  hub_local_score_raw     : 1.5343

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 7359744.9505
  hub_raw_gravity         : 2404740.1232
  hub_entropy             : 2.0605

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 11.2857
  hub_routes_count        : 8
  hub_routes              : 1, 2, 3, 4, 5, 12, 14, 18

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 6141.1825
  hub_liquidity           : 32

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 1093.3895
```
</details>
<details><summary><b>HUB: Wojska Polskiego — Kościół (ID: 19 | H3: 891f5538c7bffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Wojska Polskiego — Kościół
  hub_id                  : 19
  h3_index                : 891f5538c7bffff
  hub_stops_count         : 2
  hub_stops_ids           : 8, 27
  lat                     : 53.8204
  lon                     : 22.3474

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 98.0676
  hub_local_score_raw     : 1.4902

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 5934275.3505
  hub_raw_gravity         : 2687048.8103
  hub_entropy             : 1.2085

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 12.2857
  hub_routes_count        : 8
  hub_routes              : 1, 4, 5, 6, 8, 10, 12, 13

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 5500.0000
  hub_liquidity           : 187

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 976.9753
```
</details>

---

## GIZYCKO
#### DASHBOARD ASERCJI PIPELINE'U (Pelna Integralnosc Bazy)
```text
[PASS ZERO NULLS & INFS] Petla obliczeniowa wygenerowala 100% spojnych komorek.
[STATS] [PASS] Z-Score Micro VALID (Mean: -0.000, Std: 0.510)
        Rozklad Rang Slupkow (Micro): A: 14, A+: 8, B: 21, C: 29, D: 36, F: 35
[STATS] [PASS] Z-Score Macro VALID (Mean: 0.000, Std: 0.512)
        Rozklad Rang Hubow (Macro): A: 10, A+: 5, B: 14, C: 19, D: 23, F: 23
[DEMOGRAPHY] [PASS] DEMOGRAFIA W NORMIE: +19.0% (GUS strefa: 35,698 vs Baza miejska: 30,000)
[PASS] POI Parquet 100% Valid (Matematyka Huffa dziala)
[PASS] POP Parquet 100% Valid
[PASS] H3 Res 8 Grid 100% Valid (238 komorek, 29 pustyn transportowych)
```

### Faza 0: Statystyki Ogolne i Balans Sieci
- **Slupki Fizyczne (Micro):** 143 slupkow
- **Wezly Logiczne (Macro Hubs):** 94 hubow (Wskaznik konsolidacji: 1.52 slupka/hub)
- **Populacja Strefy Transportowej (GUS 250m):** 35,698 mieszkancow
- **Transakcje Notarialne RCN:** 605 aktow
### Faza 1: Siatka Analityczna Uber H3 Res 8 (0.74 km2 / komorka)
- **Liczba Komorek H3 Res 8:** 238
- **Rynek Nieruchomosci RCN w Heksach:** Pokrycie 33.6% (80/238 komorek), Srednia: 3,218 PLN/m2, Mediana: 2,334 PLN/m2, Std: 4,439, Min: 196, Max: 36,934 PLN/m2
- **Demografia GUS NSP 2021 w Heksach:** Laczna ludnosc w heksach: 35,698, Srednia/heks: 150.0, Mediana: 9.5, Std: 731.5, Max: 8,699
- **Podaz Transportu w Heksach:** Sredni Transport Score: 9.25, Max Transport Score: 100.00, Srednia odjazdow/h: 0.00, Pustynie Transportowe TDI: 29

#### TOP 5 Pustyn Transportowych (The Investment List)
| H3 Index | Lat | Lon | Populacja GUS | Odjazdy/h | TDI Score |
|---|---|---|---|---|---|
| `881f5511cbfffff` | 54.04208 | 21.78072 | 8,699 | 0.0 | **95.17** |
| `881f5511c1fffff` | 54.03735 | 21.76993 | 5,777 | 0.0 | **90.88** |
| `881f5511c9fffff` | 54.04462 | 21.76766 | 2,621 | 0.0 | **82.59** |
| `881f5511c3fffff` | 54.03481 | 21.78299 | 1,996 | 0.0 | **79.73** |
| `881f5511cdfffff` | 54.03988 | 21.75686 | 1,928 | 0.0 | **79.37** |

#### TOP 5 Biegunow Transportu (Najwyzsza Podaz)
| H3 Index | Lat | Lon | Transport Score | Odjazdy/h | Liczba Slupkow |
|---|---|---|---|---|---|
| `881f551023fffff` | 54.05189 | 21.76538 | **100.00** | 0.0 | 11 |
| `881f5511c3fffff` | 54.03481 | 21.78299 | **100.00** | 0.0 | 9 |
| `881f5511cbfffff` | 54.04208 | 21.78072 | **100.00** | 0.0 | 8 |
| `881f5511c9fffff` | 54.04462 | 21.76766 | **100.00** | 0.0 | 6 |
| `881f551ad9fffff` | 54.01113 | 21.72903 | **100.00** | 0.0 | 7 |

#### TOP 5 Najdrozszych Heksow Mieszkaniowych RCN
| H3 Index | Lat | Lon | Mediana Ceny m2 | Liczba Transakcji |
|---|---|---|---|---|
| `881f558853fffff` | 54.20463 | 21.68055 | **36,934 PLN** | 1 |
| `881f550363fffff` | 53.96714 | 21.77955 | **11,618 PLN** | 1 |
| `881f5588d5fffff` | 54.18476 | 21.74834 | **11,500 PLN** | 56 |
| `881f5511e5fffff` | 54.01587 | 21.73982 | **11,036 PLN** | 12 |
| `881f551ad5fffff` | 53.99912 | 21.72052 | **6,680 PLN** | 3 |

### Faza 2: Audyt Zbednosci TCRP Report 100 (The Axe List)
- **Zbedne Slupki (R >= 0.50 - Umiarkowana Kanibalizacja):** 0
- **Zbedne Slupki (R >= 0.70 - Rekomendacja Likwidacji):** 0
- **Zbedne Slupki (R >= 0.90 - Skrajna Zbednosc / Dubel):** 0
- Brak slupkow spelniajacych prog likwidacji R >= 0.70.

### Faza 3: Hierarchia Magnesow Miejskich POI

#### Top 20 Kategorii POI w Miescie
| Kategoria | Tier | Ilosc w Miescie | Wartosc Punktowa (W) |
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

#### TOP 10 Konkretnych Nazwanych Magnesow Miejskich (T0, T1, T2)
| Nazwa Obiektu | Kategoria POI | Tier | Waga Przyciagania (W) |
|---|---|---|---|
| **Szpital Giżycki** | `hospital_clinical` | T1_NATIONAL_MAGNET | 19,697,361 |
| **Giżycko** | `regional_rail_hub` | T1_NATIONAL_MAGNET | 5,266,139 |
| **Siedliska** | `regional_rail_hub` | T1_NATIONAL_MAGNET | 5,266,139 |
| **Ciepłownia PEC Sp. z o.o.** | `industrial_zone` | T2_STRATEGIC_HUB | 3,882,692 |
| **Okręgowa Spółdzielnia Mleczarska w Giżycku** | `industrial_zone` | T2_STRATEGIC_HUB | 3,882,692 |
| **Dystrybucja gazu PGNiG** | `industrial_zone` | T2_STRATEGIC_HUB | 3,882,692 |
| **GLAMOX Wilkasy** | `industrial_zone` | T2_STRATEGIC_HUB | 3,882,692 |
| **Centrum Handlowe \** | `shopping_mall` | T2_STRATEGIC_HUB | 2,353,823 |
| **Intermarché** | `supermarket` | T2_STRATEGIC_HUB | 1,921,994 |
| **Delikatesy Centrum** | `supermarket` | T2_STRATEGIC_HUB | 1,921,994 |

### Faza 4: Probki Pelnego DNA (Wszystkie 53 Metryki)

#### POZIOM 1: NAJLEPSZE SLUPKI FIZYCZNE MICRO (TOP 5)
<details><summary><b>Wilkasy Niegocin (ID: 12658 | H3: 891f5511e53ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Wilkasy Niegocin
  stop_id                 : 12658
  h3_index                : 891f5511e53ffff
  hub_id                  : 38
  hub_name                : Wilkasy Niegocin
  is_hub_anchor           : True
  stop_lat                : 54.0196
  stop_lon                : 21.7380

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 100.0000
  stop_local_score_raw    : 0.8789

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 1096926.0507
  stop_raw_gravity        : 1034709.8600
  stop_entropy            : 0.0601

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 10940.4560
  stop_liquidity          : 9

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 87.0929

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 2x industrial_zone
  > 1x micro_parcel_locker
  > 1x car_services
  > 1x convenience_store
  > 1x micro_playground

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_parcel_locker      : Paczkomat InPost
    - car_services             : FALCO
    - industrial_zone          : GLAMOX Wilkasy
```
</details>
<details><summary><b>Wilkasy — Olsztyńska Niegocin (ID: 88 | H3: 891f5511e53ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Wilkasy — Olsztyńska Niegocin
  stop_id                 : 88
  h3_index                : 891f5511e53ffff
  hub_id                  : 32
  hub_name                : Wilkasy — Olsztyńska Niegocin
  is_hub_anchor           : True
  stop_lat                : 54.0174
  stop_lon                : 21.7392

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.3007
  stop_local_score_raw    : 0.8624

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 1673367.1832
  stop_raw_gravity        : 1089578.9405
  stop_entropy            : 0.5358

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 10940.4560
  stop_liquidity          : 9

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 57.5019

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 2x industrial_zone
  > 1x gastronomy
  > 1x micro_parcel_locker
  > 1x car_services
  > 1x place_of_worship

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy               : Agromargot - Restauracja Kuchnia Regionalna Noclegi
    - micro_parcel_locker      : Paczkomat InPost
    - car_services             : FALCO
    - place_of_worship         : Kościół pw. Świętego Rafała Kalinowskiego
    - industrial_zone          : GLAMOX Wilkasy
```
</details>
<details><summary><b>Plac Grunwaldzki — Bank (ID: 60 | H3: 891f5511c03ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Plac Grunwaldzki — Bank
  stop_id                 : 60
  h3_index                : 891f5511c03ffff
  hub_id                  : 45
  hub_name                : Plac Grunwaldzki — Bank
  is_hub_anchor           : True
  stop_lat                : 54.0360
  stop_lon                : 21.7692

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 98.6014
  stop_local_score_raw    : 0.8325

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 6593653.9191
  stop_raw_gravity        : 2642809.5350
  stop_entropy            : 1.4949

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 5174.1610
  stop_liquidity          : 34

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 2134.8645

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
    - convenience_store        : Żabka
    - convenience_store        : Sienkiel
    - supermarket              : Biedronka
    - post_office              : InPost
    - post_office              : Poczta Polska
    - gastronomy               : Pizza Oregano
    - pharmacy                 : Parkowa
    - convenience_store        : Anitrex
    - pharmacy                 : Salveo
    - gastronomy               : Korsarz
```
</details>
<details><summary><b>Wilkasy — Olsztyńska Niegocin (ID: 89 | H3: 891f5511e53ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Wilkasy — Olsztyńska Niegocin
  stop_id                 : 89
  h3_index                : 891f5511e53ffff
  hub_id                  : 32
  hub_name                : Wilkasy — Olsztyńska Niegocin
  is_hub_anchor           : False
  stop_lat                : 54.0184
  stop_lon                : 21.7395

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 97.9021
  stop_local_score_raw    : 0.7782

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 956295.3480
  stop_raw_gravity        : 956295.3480
  stop_entropy            : -0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 10940.4560
  stop_liquidity          : 9

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 33.1009

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 2x industrial_zone
  > 1x gastronomy
  > 1x micro_parcel_locker
  > 1x car_services

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy               : Agromargot - Restauracja Kuchnia Regionalna Noclegi
    - micro_parcel_locker      : Paczkomat InPost
    - car_services             : FALCO
    - industrial_zone          : GLAMOX Wilkasy
```
</details>
<details><summary><b>Warszawska — Kościół Ewangelicki (ID: 79 | H3: 891f5511c0fffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Warszawska — Kościół Ewangelicki
  stop_id                 : 79
  h3_index                : 891f5511c0fffff
  hub_id                  : 46
  hub_name                : Warszawska — Kościół Ewangelicki
  is_hub_anchor           : True
  stop_lat                : 54.0360
  stop_lon                : 21.7709

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 97.2028
  stop_local_score_raw    : 0.7192

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 5532926.1762
  stop_raw_gravity        : 2440739.3003
  stop_entropy            : 1.2669

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 4864.4678
  stop_liquidity          : 38

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 1092.7516

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
    - convenience_store        : Żabka
    - convenience_store        : Sienkiel
    - supermarket              : Biedronka
    - post_office              : Poczta Polska
    - gastronomy               : Tawerna Marina
    - micro_atm                : Euronet
    - gastronomy               : Pizza Oregano
    - pharmacy                 : Parkowa
    - convenience_store        : Anitrex
    - pharmacy                 : Salveo
```
</details>

#### POZIOM 1: NAJSLABSZE SLUPKI FIZYCZNE MICRO (BOTTOM 5)
<details><summary><b>Bogacko Tartak (ID: 175 | H3: 891f551a587ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Bogacko Tartak
  stop_id                 : 175
  h3_index                : 891f551a587ffff
  hub_id                  : 79
  hub_name                : Bogacko Tartak
  is_hub_anchor           : True
  stop_lat                : 54.0293
  stop_lon                : 21.6455

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 3.4965
  stop_local_score_raw    : -0.7041

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 4124.8453
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 9.6335

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Bogacko Tartak (ID: 176 | H3: 891f551a587ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Bogacko Tartak
  stop_id                 : 176
  h3_index                : 891f551a587ffff
  hub_id                  : 79
  hub_name                : Bogacko Tartak
  is_hub_anchor           : False
  stop_lat                : 54.0292
  stop_lon                : 21.6454

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 2.7972
  stop_local_score_raw    : -0.7042

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 4124.8453
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 9.6214

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Sulimy — Kolonia (ID: 68 | H3: 891f5510e37ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Sulimy — Kolonia
  stop_id                 : 68
  h3_index                : 891f5510e37ffff
  hub_id                  : 81
  hub_name                : Sulimy — Kolonia
  is_hub_anchor           : True
  stop_lat                : 54.0525
  stop_lon                : 21.8406

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 2.0979
  stop_local_score_raw    : -0.7451

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 4124.8453
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 6.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Spytkowo (ID: 64 | H3: 891f55101b7ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Spytkowo
  stop_id                 : 64
  h3_index                : 891f55101b7ffff
  hub_id                  : 84
  hub_name                : Spytkowo
  is_hub_anchor           : True
  stop_lat                : 54.0780
  stop_lon                : 21.8230

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 1.3986
  stop_local_score_raw    : -0.7833

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 2497.6807
  stop_liquidity          : 1

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 108.3840

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Spytkowo (ID: 63 | H3: 891f5512a7bffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Spytkowo
  stop_id                 : 63
  h3_index                : 891f5512a7bffff
  hub_id                  : 41
  hub_name                : Spytkowo
  is_hub_anchor           : True
  stop_lat                : 54.0792
  stop_lon                : 21.8246

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.6993
  stop_local_score_raw    : -0.8006

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 2497.6807
  stop_liquidity          : 1

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 90.6160

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>

#### POZIOM 2: NAJWAZNIEJSZE WEZLY LOGICZNE MACRO (TOP 5 HUBOW)
<details><summary><b>HUB: Wilkasy Niegocin (ID: 38 | H3: 891f5511e53ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Wilkasy Niegocin
  hub_id                  : 38
  h3_index                : 891f5511e53ffff
  hub_stops_count         : 1
  hub_stops_ids           : 12658
  lat                     : 54.0196
  lon                     : 21.7380

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 100.0000
  hub_local_score_raw     : 0.8244

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 1657306.6368
  hub_raw_gravity         : 1562736.5244
  hub_entropy             : 0.0605

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 0.0000
  hub_routes_count        : 0
  hub_routes              : 

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 10940.4560
  hub_liquidity           : 9

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 101.0770
```
</details>
<details><summary><b>HUB: Wilkasy — Olsztyńska Niegocin (ID: 32 | H3: 891f5511e53ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Wilkasy — Olsztyńska Niegocin
  hub_id                  : 32
  h3_index                : 891f5511e53ffff
  hub_stops_count         : 2
  hub_stops_ids           : 88, 89
  lat                     : 54.0179
  lon                     : 21.7394

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 98.9362
  hub_local_score_raw     : 0.8182

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 2433224.7316
  hub_raw_gravity         : 1519771.4432
  hub_entropy             : 0.6010

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 0.0000
  hub_routes_count        : 0
  hub_routes              : 

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 10940.4560
  hub_liquidity           : 9

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 77.1061
```
</details>
<details><summary><b>HUB: Plac Grunwaldzki — Bank (ID: 45 | H3: 891f5511c03ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Plac Grunwaldzki — Bank
  hub_id                  : 45
  h3_index                : 891f5511c03ffff
  hub_stops_count         : 1
  hub_stops_ids           : 60
  lat                     : 54.0360
  lon                     : 21.7692

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 97.8723
  hub_local_score_raw     : 0.7727

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 7654109.4769
  hub_raw_gravity         : 3025246.2937
  hub_entropy             : 1.5301

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 0.0000
  hub_routes_count        : 0
  hub_routes              : 

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 5174.1610
  hub_liquidity           : 34

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 2451.0752
```
</details>
<details><summary><b>HUB: Warszawska — Kościół Ewangelicki (ID: 46 | H3: 891f5511c0fffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Warszawska — Kościół Ewangelicki
  hub_id                  : 46
  h3_index                : 891f5511c0fffff
  hub_stops_count         : 1
  hub_stops_ids           : 79
  lat                     : 54.0360
  lon                     : 21.7709

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 96.8085
  hub_local_score_raw     : 0.6698

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 6945303.9000
  hub_raw_gravity         : 3035462.2123
  hub_entropy             : 1.2881

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 0.0000
  hub_routes_count        : 0
  hub_routes              : 

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 4864.4678
  hub_liquidity           : 38

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 1343.2128
```
</details>
<details><summary><b>HUB: Al. 1-go Maja (ID: 49 | H3: 891f5511c17ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Al. 1-go Maja
  hub_id                  : 49
  h3_index                : 891f5511c17ffff
  hub_stops_count         : 2
  hub_stops_ids           : 10, 11
  lat                     : 54.0400
  lon                     : 21.7706

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 95.7447
  hub_local_score_raw     : 0.6369

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 5567804.1037
  hub_raw_gravity         : 2123776.2848
  hub_entropy             : 1.6217

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 0.0000
  hub_routes_count        : 0
  hub_routes              : 

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 4612.5742
  hub_liquidity           : 36

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 1501.6143
```
</details>

---

## GORZOW
#### DASHBOARD ASERCJI PIPELINE'U (Pelna Integralnosc Bazy)
```text
[PASS ZERO NULLS & INFS] Petla obliczeniowa wygenerowala 100% spojnych komorek.
[STATS] [WARN] Z-Score Micro ODD (Mean: 0.000, Std: 0.462)
        Rozklad Rang Slupkow (Micro): A: 84, A+: 44, B: 130, C: 170, D: 215, F: 213
[STATS] [WARN] Z-Score Macro ODD (Mean: -0.000, Std: 0.467)
        Rozklad Rang Hubow (Macro): A: 22, A+: 11, B: 32, C: 44, D: 54, F: 53
[DEMOGRAPHY] [PASS] DEMOGRAFIA W NORMIE: +7.1% (GUS strefa: 128,465 vs Baza miejska: 120,000)
[PASS] POI Parquet 100% Valid (Matematyka Huffa dziala)
[PASS] POP Parquet 100% Valid
[PASS] H3 Res 8 Grid 100% Valid (290 komorek, 84 pustyn transportowych)
```

### Faza 0: Statystyki Ogolne i Balans Sieci
- **Slupki Fizyczne (Micro):** 856 slupkow
- **Wezly Logiczne (Macro Hubs):** 216 hubow (Wskaznik konsolidacji: 3.96 slupka/hub)
- **Populacja Strefy Transportowej (GUS 250m):** 128,465 mieszkancow
- **Transakcje Notarialne RCN:** 3,895 aktow
### Faza 1: Siatka Analityczna Uber H3 Res 8 (0.74 km2 / komorka)
- **Liczba Komorek H3 Res 8:** 290
- **Rynek Nieruchomosci RCN w Heksach:** Pokrycie 59.3% (172/290 komorek), Srednia: 4,609 PLN/m2, Mediana: 4,451 PLN/m2, Std: 3,305, Min: 24, Max: 34,838 PLN/m2
- **Demografia GUS NSP 2021 w Heksach:** Laczna ludnosc w heksach: 128,465, Srednia/heks: 443.0, Mediana: 14.0, Std: 1218.1, Max: 7,738
- **Podaz Transportu w Heksach:** Sredni Transport Score: 13.03, Max Transport Score: 100.00, Srednia odjazdow/h: 0.00, Pustynie Transportowe TDI: 84

#### TOP 5 Pustyn Transportowych (The Investment List)
| H3 Index | Lat | Lon | Populacja GUS | Odjazdy/h | TDI Score |
|---|---|---|---|---|---|
| `881f0a40e3fffff` | 52.73972 | 15.21100 | 7,738 | 0.0 | **93.95** |
| `881f0a40d1fffff` | 52.76120 | 15.25091 | 6,528 | 0.0 | **92.16** |
| `881f0a40d3fffff` | 52.75932 | 15.26380 | 6,291 | 0.0 | **91.77** |
| `881f0a4083fffff` | 52.74134 | 15.24676 | 6,093 | 0.0 | **91.44** |
| `881f0a4085fffff` | 52.73784 | 15.22390 | 6,003 | 0.0 | **91.28** |

#### TOP 5 Biegunow Transportu (Najwyzsza Podaz)
| H3 Index | Lat | Lon | Transport Score | Odjazdy/h | Liczba Slupkow |
|---|---|---|---|---|---|
| `881f0a4089fffff` | 52.75046 | 15.23095 | **100.00** | 0.0 | 30 |
| `881f0a4087fffff` | 52.73597 | 15.23679 | **100.00** | 0.0 | 22 |
| `881f0a40b9fffff` | 52.73409 | 15.24968 | **100.00** | 0.0 | 33 |
| `881f0a4081fffff` | 52.74321 | 15.23387 | **100.00** | 0.0 | 24 |
| `881f0a472dfffff` | 52.76469 | 15.27378 | **100.00** | 0.0 | 22 |

#### TOP 5 Najdrozszych Heksow Mieszkaniowych RCN
| H3 Index | Lat | Lon | Mediana Ceny m2 | Liczba Transakcji |
|---|---|---|---|---|
| `881f0a40d9fffff` | 52.76844 | 15.24799 | **34,838 PLN** | 23 |
| `881f0a4729fffff` | 52.77005 | 15.28377 | **13,249 PLN** | 1 |
| `881f0a4569fffff` | 52.73570 | 15.28544 | **9,352 PLN** | 1 |
| `881f0a4097fffff` | 52.73758 | 15.27254 | **9,004 PLN** | 51 |
| `881f0a4157fffff` | 52.72941 | 15.09380 | **8,733 PLN** | 3 |

### Faza 2: Audyt Zbednosci TCRP Report 100 (The Axe List)
- **Zbedne Slupki (R >= 0.50 - Umiarkowana Kanibalizacja):** 0
- **Zbedne Slupki (R >= 0.70 - Rekomendacja Likwidacji):** 0
- **Zbedne Slupki (R >= 0.90 - Skrajna Zbednosc / Dubel):** 0
- Brak slupkow spelniajacych prog likwidacji R >= 0.70.

### Faza 3: Hierarchia Magnesow Miejskich POI

#### Top 20 Kategorii POI w Miescie
| Kategoria | Tier | Ilosc w Miescie | Wartosc Punktowa (W) |
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

#### TOP 10 Konkretnych Nazwanych Magnesow Miejskich (T0, T1, T2)
| Nazwa Obiektu | Kategoria POI | Tier | Waga Przyciagania (W) |
|---|---|---|---|
| **Wielospecjalistyczny Szpital Wojewódzki w Gorzowie** | `hospital_clinical` | T1_NATIONAL_MAGNET | 23,049,995 |
| **Wielospecjalistyczny Szpital Wojewódzki w Gorzowie | ZESPÓŁ SZPITALNY ul. DEKERTA** | `hospital_clinical` | T1_NATIONAL_MAGNET | 23,049,995 |
| **Stadion lekkoatletyczny im. Lubuskich Olimpijczyków** | `national_stadium` | T1_NATIONAL_MAGNET | 20,616,590 |
| **Stadion OSiR** | `national_stadium` | T1_NATIONAL_MAGNET | 20,616,590 |
| **Stadion lekkoatletyczny OSiR** | `national_stadium` | T1_NATIONAL_MAGNET | 17,947,784 |
| **Akademia Wychowania Fizycznego w Gorzowie** | `university_campus` | T1_NATIONAL_MAGNET | 14,353,241 |
| **Akademia im. Jakuba z Paradyża w Gorzowie** | `university_campus` | T1_NATIONAL_MAGNET | 14,353,241 |
| **budynek 5!** | `university_campus` | T1_NATIONAL_MAGNET | 12,495,222 |
| **budynek 8** | `university_campus` | T1_NATIONAL_MAGNET | 11,521,943 |
| **budynek 5** | `university_campus` | T1_NATIONAL_MAGNET | 11,521,943 |

### Faza 4: Probki Pelnego DNA (Wszystkie 53 Metryki)

#### POZIOM 1: NAJLEPSZE SLUPKI FIZYCZNE MICRO (TOP 5)
<details><summary><b>Pluty (ID: 68 | H3: 891f0a40d0fffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Pluty
  stop_id                 : 68
  h3_index                : 891f0a40d0fffff
  hub_id                  : 83
  hub_name                : Pluty
  is_hub_anchor           : False
  stop_lat                : 52.7586
  stop_lon                : 15.2530

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.9416
  stop_local_score_raw    : 0.5930

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 2150978.0324
  stop_raw_gravity        : 1110884.8953
  stop_entropy            : 0.9363

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 8005.1926
  stop_liquidity          : 278

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 971.0084

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
    - gastronomy               : Pizzeria OK
    - bank                     : PKO BP
    - health_clinic            : MediRaj
    - convenience_store        : Żabka
    - gastronomy               : Pizzeria O.K.
    - supermarket              : Chata Polska
    - specialized_retail       : Top Secret Outlet
    - personal_services        : Rossmann
    - specialized_retail       : Monnari
    - specialized_retail       : Quiosque
```
</details>
<details><summary><b>Pluty (ID: 68 | H3: 891f0a40d0fffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Pluty
  stop_id                 : 68
  h3_index                : 891f0a40d0fffff
  hub_id                  : 83
  hub_name                : Pluty
  is_hub_anchor           : True
  stop_lat                : 52.7586
  stop_lon                : 15.2530

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.9416
  stop_local_score_raw    : 0.5930

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 2150978.0324
  stop_raw_gravity        : 1110884.8953
  stop_entropy            : 0.9363

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 8005.1926
  stop_liquidity          : 278

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 971.0084

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
    - gastronomy               : Pizzeria OK
    - bank                     : PKO BP
    - health_clinic            : MediRaj
    - convenience_store        : Żabka
    - gastronomy               : Pizzeria O.K.
    - supermarket              : Chata Polska
    - specialized_retail       : Top Secret Outlet
    - personal_services        : Rossmann
    - specialized_retail       : Monnari
    - specialized_retail       : Quiosque
```
</details>
<details><summary><b>Pluty (ID: 90 | H3: 891f0a40d0fffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Pluty
  stop_id                 : 90
  h3_index                : 891f0a40d0fffff
  hub_id                  : 98
  hub_name                : Pluty
  is_hub_anchor           : False
  stop_lat                : 52.7583
  stop_lon                : 15.2554

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.7079
  stop_local_score_raw    : 0.5821

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 2546261.1468
  stop_raw_gravity        : 1202402.5520
  stop_entropy            : 1.1176

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 7963.9193
  stop_liquidity          : 176

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 754.6589

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 30x micro_playground
  > 14x specialized_retail
  > 8x micro_parcel_locker
  > 6x gastronomy
  > 5x supermarket
  > 4x convenience_store
  > 4x shopping_mall
  > 4x education_preschool
  > 3x bank
  > 3x personal_services
  > 3x pharmacy
  > 3x sports_centre
  > 2x health_clinic
  > 2x park_recreation
  > 2x education_high_school
  > 2x commercial_zone
  > 1x culture_theatre
  > 1x micro_atm
  > 1x hospital_clinical
  > 1x place_of_worship
  > 1x marketplace

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy               : Pizzeria OK
    - bank                     : PKO BP
    - health_clinic            : MediRaj
    - convenience_store        : Żabka
    - supermarket              : Chata Polska
    - specialized_retail       : Top Secret Outlet
    - personal_services        : Rossmann
    - specialized_retail       : Monnari
    - specialized_retail       : Quiosque
    - specialized_retail       : Scotfree
```
</details>
<details><summary><b>Pluty (ID: 90 | H3: 891f0a40d0fffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Pluty
  stop_id                 : 90
  h3_index                : 891f0a40d0fffff
  hub_id                  : 98
  hub_name                : Pluty
  is_hub_anchor           : True
  stop_lat                : 52.7583
  stop_lon                : 15.2554

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.7079
  stop_local_score_raw    : 0.5821

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 2546261.1468
  stop_raw_gravity        : 1202402.5520
  stop_entropy            : 1.1176

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 7963.9193
  stop_liquidity          : 176

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 754.6589

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 30x micro_playground
  > 14x specialized_retail
  > 8x micro_parcel_locker
  > 6x gastronomy
  > 5x supermarket
  > 4x convenience_store
  > 4x shopping_mall
  > 4x education_preschool
  > 3x bank
  > 3x personal_services
  > 3x pharmacy
  > 3x sports_centre
  > 2x health_clinic
  > 2x park_recreation
  > 2x education_high_school
  > 2x commercial_zone
  > 1x culture_theatre
  > 1x micro_atm
  > 1x hospital_clinical
  > 1x place_of_worship
  > 1x marketplace

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy               : Pizzeria OK
    - bank                     : PKO BP
    - health_clinic            : MediRaj
    - convenience_store        : Żabka
    - supermarket              : Chata Polska
    - specialized_retail       : Top Secret Outlet
    - personal_services        : Rossmann
    - specialized_retail       : Monnari
    - specialized_retail       : Quiosque
    - specialized_retail       : Scotfree
```
</details>
<details><summary><b>Rondo Szczecińskie (ID: 189 | H3: 891f0a40e77ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Rondo Szczecińskie
  stop_id                 : 189
  h3_index                : 891f0a40e77ffff
  hub_id                  : 41
  hub_name                : Rondo Szczecińskie
  is_hub_anchor           : False
  stop_lat                : 52.7368
  stop_lon                : 15.2011

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.4743
  stop_local_score_raw    : 0.5816

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 3583843.6082
  stop_raw_gravity        : 1654336.0249
  stop_entropy            : 1.1663

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 8420.8871
  stop_liquidity          : 232

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 368.8634

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
    - supermarket              : Biedronka
    - specialized_retail       : RTV Euro AGD
    - police_station           : Komisariat Policji I w Gorzowie
    - micro_atm                : Euronet
    - post_office              : Agencja Pocztowa
    - bank                     : Gospodarczy Bank Spółdzielczy
    - personal_services        : Rossmann
    - specialized_retail       : Pepco
    - gastronomy               : Berlin Döner Kebap
    - convenience_store        : Żabka
```
</details>

#### POZIOM 1: NAJSLABSZE SLUPKI FIZYCZNE MICRO (BOTTOM 5)
<details><summary><b>Racław III (ID: 201 | H3: 891f0a415bbffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Racław III
  stop_id                 : 201
  h3_index                : 891f0a415bbffff
  hub_id                  : 80
  hub_name                : Racław III
  is_hub_anchor           : True
  stop_lat                : 52.7413
  stop_lon                : 15.0943

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.6425
  stop_local_score_raw    : -1.9574

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 6015.3994
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 7.9540

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Drozdowa Ogrody Działkowe (ID: 445 | H3: 891f0a4e45bffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Drozdowa Ogrody Działkowe
  stop_id                 : 445
  h3_index                : 891f0a4e45bffff
  hub_id                  : 207
  hub_name                : Drozdowa Ogrody Działkowe
  is_hub_anchor           : True
  stop_lat                : 52.7028
  stop_lon                : 15.2207

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.4089
  stop_local_score_raw    : -2.0487

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 6015.3994
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 3.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Drozdowa Ogrody Działkowe (ID: 445 | H3: 891f0a4e45bffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Drozdowa Ogrody Działkowe
  stop_id                 : 445
  h3_index                : 891f0a4e45bffff
  hub_id                  : 207
  hub_name                : Drozdowa Ogrody Działkowe
  is_hub_anchor           : False
  stop_lat                : 52.7028
  stop_lon                : 15.2207

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.4089
  stop_local_score_raw    : -2.0487

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 6015.3994
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 3.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Czechów (ID: 434 | H3: 891f0a4501bffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Czechów
  stop_id                 : 434
  h3_index                : 891f0a4501bffff
  hub_id                  : 194
  hub_name                : Czechów
  is_hub_anchor           : False
  stop_lat                : 52.7288
  stop_lon                : 15.3194

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.1752
  stop_local_score_raw    : -2.4018

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 991.6411
  stop_raw_gravity        : 917.3345
  stop_entropy            : 0.0810

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 696.0874
  stop_liquidity          : 2

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 31.1904

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x convenience_store
  > 1x micro_playground
  > 1x micro_parcel_locker
  > 1x place_of_worship

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store        : Maniek
    - micro_parcel_locker      : Paczkomat InPost
    - place_of_worship         : Kościół pw. Najświętszej Maryi Panny Królowej Polski
```
</details>
<details><summary><b>Czechów (ID: 434 | H3: 891f0a4501bffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Czechów
  stop_id                 : 434
  h3_index                : 891f0a4501bffff
  hub_id                  : 194
  hub_name                : Czechów
  is_hub_anchor           : True
  stop_lat                : 52.7288
  stop_lon                : 15.3194

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.1752
  stop_local_score_raw    : -2.4018

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 991.6411
  stop_raw_gravity        : 917.3345
  stop_entropy            : 0.0810

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 696.0874
  stop_liquidity          : 2

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 31.1904

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x convenience_store
  > 1x micro_playground
  > 1x micro_parcel_locker
  > 1x place_of_worship

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store        : Maniek
    - micro_parcel_locker      : Paczkomat InPost
    - place_of_worship         : Kościół pw. Najświętszej Maryi Panny Królowej Polski
```
</details>

#### POZIOM 2: NAJWAZNIEJSZE WEZLY LOGICZNE MACRO (TOP 5 HUBOW)
<details><summary><b>HUB: Stilon (ID: 20 | H3: 891f0a409dbffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Stilon
  hub_id                  : 20
  h3_index                : 891f0a409dbffff
  hub_stops_count         : 8
  hub_stops_ids           : 19, 19, 72, 72, 119, 119, 143, 143
  lat                     : 52.7471
  lon                     : 15.2536

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 100.0000
  hub_local_score_raw     : 0.5412

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 14694141.7426
  hub_raw_gravity         : 4989897.7605
  hub_entropy             : 1.9448

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 0.0000
  hub_routes_count        : 0
  hub_routes              : 

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 7602.4155
  hub_liquidity           : 137

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 1221.6220
```
</details>
<details><summary><b>HUB: Rondo Szczecińskie (ID: 41 | H3: 891f0a40e73ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Rondo Szczecińskie
  hub_id                  : 41
  h3_index                : 891f0a40e73ffff
  hub_stops_count         : 6
  hub_stops_ids           : 55, 55, 115, 115, 189, 189
  lat                     : 52.7373
  lon                     : 15.2007

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.5370
  hub_local_score_raw     : 0.5221

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 16654706.3227
  hub_raw_gravity         : 6632232.7988
  hub_entropy             : 1.5112

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 0.0000
  hub_routes_count        : 0
  hub_routes              : 

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 8008.4417
  hub_liquidity           : 170

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 655.2534
```
</details>
<details><summary><b>HUB: Pl. Słoneczny (ID: 118 | H3: 891f0a40acbffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Pl. Słoneczny
  hub_id                  : 118
  h3_index                : 891f0a40acbffff
  hub_stops_count         : 8
  hub_stops_ids           : 32, 32, 130, 130, 254, 254, 347, 347
  lat                     : 52.7237
  lon                     : 15.1996

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.0741
  hub_local_score_raw     : 0.4817

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 17485303.8893
  hub_raw_gravity         : 6494383.6502
  hub_entropy             : 1.6924

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 0.0000
  hub_routes_count        : 0
  hub_routes              : 

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 6232.6041
  hub_liquidity           : 42

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 1857.3937
```
</details>
<details><summary><b>HUB: Pluty (ID: 83 | H3: 891f0a40d0fffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Pluty
  hub_id                  : 83
  h3_index                : 891f0a40d0fffff
  hub_stops_count         : 2
  hub_stops_ids           : 68, 68
  lat                     : 52.7586
  lon                     : 15.2530

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 98.6111
  hub_local_score_raw     : 0.4763

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 5789902.9199
  hub_raw_gravity         : 3215086.5407
  hub_entropy             : 0.8009

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 0.0000
  hub_routes_count        : 0
  hub_routes              : 

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 8005.1926
  hub_liquidity           : 139

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 1311.3502
```
</details>
<details><summary><b>HUB: Londyńska (ID: 140 | H3: 891f0a40e47ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Londyńska
  hub_id                  : 140
  h3_index                : 891f0a40e47ffff
  hub_stops_count         : 2
  hub_stops_ids           : 1242, 1242
  lat                     : 52.7363
  lon                     : 15.1953

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 98.1481
  hub_local_score_raw     : 0.4745

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 3919326.1591
  hub_raw_gravity         : 2766835.7217
  hub_entropy             : 0.4165

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 0.0000
  hub_routes_count        : 0
  hub_routes              : 

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 7900.0000
  hub_liquidity           : 346

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 2112.9060
```
</details>

---

## GZM
#### DASHBOARD ASERCJI PIPELINE'U (Pelna Integralnosc Bazy)
```text
[PASS ZERO NULLS & INFS] Petla obliczeniowa wygenerowala 100% spojnych komorek.
[STATS] [PASS] Z-Score Micro VALID (Mean: 0.000, Std: 0.660)
        Rozklad Rang Slupkow (Micro): A: 1025, A+: 513, B: 1538, C: 2051, D: 2563, F: 2563
[STATS] [PASS] Z-Score Macro VALID (Mean: 0.000, Std: 0.622)
        Rozklad Rang Hubow (Macro): A: 480, A+: 241, B: 721, C: 962, D: 1201, F: 1201
[DEMOGRAPHY] [INFO] OBSZAR AGLOMERACYJNY: +49.3% (GUS strefa aglomeracyjna: 3,432,986 vs Miasto rdzen: 2,300,000)
[PASS] POI Parquet 100% Valid (Matematyka Huffa dziala)
[PASS] POP Parquet 100% Valid
[PASS] H3 Res 8 Grid 100% Valid (6,475 komorek, 1603 pustyn transportowych)
```

### Faza 0: Statystyki Ogolne i Balans Sieci
- **Slupki Fizyczne (Micro):** 10,253 slupkow
- **Wezly Logiczne (Macro Hubs):** 4,806 hubow (Wskaznik konsolidacji: 2.13 slupka/hub)
- **Populacja Strefy Transportowej (GUS 250m):** 3,432,986 mieszkancow
- **Transakcje Notarialne RCN:** 212,099 aktow
### Faza 1: Siatka Analityczna Uber H3 Res 8 (0.74 km2 / komorka)
- **Liczba Komorek H3 Res 8:** 6,475
- **Rynek Nieruchomosci RCN w Heksach:** Pokrycie 47.3% (3061/6475 komorek), Srednia: 5,607 PLN/m2, Mediana: 4,942 PLN/m2, Std: 3,802, Min: 2, Max: 60,582 PLN/m2
- **Demografia GUS NSP 2021 w Heksach:** Laczna ludnosc w heksach: 3,432,986, Srednia/heks: 530.2, Mediana: 115.0, Std: 1193.1, Max: 10,538
- **Podaz Transportu w Heksach:** Sredni Transport Score: 8.51, Max Transport Score: 100.00, Srednia odjazdow/h: 13.64, Pustynie Transportowe TDI: 1603

#### TOP 5 Pustyn Transportowych (The Investment List)
| H3 Index | Lat | Lon | Populacja GUS | Odjazdy/h | TDI Score |
|---|---|---|---|---|---|
| `881e05d75bfffff` | 49.94716 | 18.60386 | 10,136 | 0.0 | **96.78** |
| `881e236d43fffff` | 50.00914 | 18.46767 | 8,567 | 0.0 | **95.01** |
| `881e0512adfffff` | 49.80692 | 19.06592 | 8,264 | 0.0 | **94.64** |
| `881e23a6bdfffff` | 50.80987 | 19.10867 | 8,152 | 0.0 | **94.49** |
| `881e23a6b5fffff` | 50.80228 | 19.11111 | 7,221 | 0.0 | **93.22** |

#### TOP 5 Biegunow Transportu (Najwyzsza Podaz)
| H3 Index | Lat | Lon | Transport Score | Odjazdy/h | Liczba Slupkow |
|---|---|---|---|---|---|
| `881e2e5b43fffff` | 50.32404 | 19.18190 | **100.00** | 234.0 | 8 |
| `881e232f03fffff` | 50.30342 | 18.95515 | **100.00** | 183.9 | 10 |
| `881e232f05fffff` | 50.30057 | 18.93273 | **100.00** | 150.9 | 10 |
| `881e232f0bfffff` | 50.31106 | 18.95270 | **100.00** | 143.4 | 13 |
| `881e232f21fffff` | 50.28768 | 18.92519 | **100.00** | 235.0 | 11 |

#### TOP 5 Najdrozszych Heksow Mieszkaniowych RCN
| H3 Index | Lat | Lon | Mediana Ceny m2 | Liczba Transakcji |
|---|---|---|---|---|
| `881e0582c9fffff` | 50.10005 | 19.07805 | **60,582 PLN** | 138 |
| `881e0511a9fffff` | 49.72138 | 19.02330 | **55,107 PLN** | 27 |
| `881e050243fffff` | 49.73029 | 19.12464 | **53,324 PLN** | 8 |
| `881e051207fffff` | 49.83201 | 19.01169 | **42,743 PLN** | 4 |
| `881e0510a9fffff` | 49.75829 | 19.09274 | **35,549 PLN** | 20 |

### Faza 2: Audyt Zbednosci TCRP Report 100 (The Axe List)
- **Zbedne Slupki (R >= 0.50 - Umiarkowana Kanibalizacja):** 3493
- **Zbedne Slupki (R >= 0.70 - Rekomendacja Likwidacji):** 2698
- **Zbedne Slupki (R >= 0.90 - Skrajna Zbednosc / Dubel):** 1596

| Zbedny Słupek | Dominujacy Słupek | Dystans [m] | S_service | S_spatial | S_cannibal | R-Score |
|---|---|---|---|---|---|---|
| Wirek Wanda-Lech [tech] (#5130, 2.857142857142857 odj/h) | Wirek Wanda-Lech [tech] (#5131, 3.0 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |
| Marklowice Wiosny Ludów Widokowa (#669, 6.071428571428571 odj/h) | Marklowice Wiosny Ludów Widokowa (#668, 14.642857142857142 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |
| Cielmice Pętla (#6331, 0.7857142857142857 odj/h) | Cielmice Pętla [tech] (#8671, 7.928571428571429 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |
| Boguszowice Stare Błękitna (#740, 15.714285714285715 odj/h) | Boguszowice Stare Błękitna (#739, 18.071428571428573 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |
| Kopacz nż (#7939, 0.9285714285714286 odj/h) | Kopacz nż (#7940, 1.0 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |

### Faza 3: Hierarchia Magnesow Miejskich POI

#### Top 20 Kategorii POI w Miescie
| Kategoria | Tier | Ilosc w Miescie | Wartosc Punktowa (W) |
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

#### TOP 10 Konkretnych Nazwanych Magnesow Miejskich (T0, T1, T2)
| Nazwa Obiektu | Kategoria POI | Tier | Waga Przyciagania (W) |
|---|---|---|---|
| **Międzynarodowy Port Lotniczy Katowice im. Wojciecha Korfantego w Pyrzowicach** | `international_airport` | T0_MEGA_HUB | 238,138,740 |
| **Katowice** | `national_rail_hub` | T0_MEGA_HUB | 39,720,124 |
| **Bytom** | `national_rail_hub` | T0_MEGA_HUB | 39,720,124 |
| **Kalety** | `national_rail_hub` | T0_MEGA_HUB | 39,720,124 |
| **Katowice Ligota** | `national_rail_hub` | T0_MEGA_HUB | 39,720,124 |
| **Sosnowiec Główny** | `national_rail_hub` | T0_MEGA_HUB | 39,720,124 |
| **Dąbrowa Górnicza** | `national_rail_hub` | T0_MEGA_HUB | 39,720,124 |
| **Ruda Chebzie** | `national_rail_hub` | T0_MEGA_HUB | 39,720,124 |
| **Katowice Zawodzie** | `national_rail_hub` | T0_MEGA_HUB | 39,720,124 |
| **Wisła Uzdrowisko** | `national_rail_hub` | T0_MEGA_HUB | 39,720,124 |

### Faza 4: Probki Pelnego DNA (Wszystkie 53 Metryki)

#### POZIOM 1: NAJLEPSZE SLUPKI FIZYCZNE MICRO (TOP 5)
<details><summary><b>Katowice AWF (ID: 11084 | H3: 891e232d133ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Katowice AWF
  stop_id                 : 11084
  h3_index                : 891e232d133ffff
  hub_id                  : 2908
  hub_name                : Katowice AWF
  is_hub_anchor           : False
  stop_lat                : 50.2514
  stop_lon                : 19.0046

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 100.0000
  stop_local_score_raw    : 1.8165

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 27315162.8373
  stop_raw_gravity        : 12160622.7637
  stop_entropy            : 1.2462

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 48.2857
  stop_routes_count       : 23
  stop_routes             : 9, 10, 11, 12, 37, 46, 48, 51, 115, 120, 130, 154, 177, 193, 296, 297, 632, 657, 689, 880, 900, M10, M12
  stop_hub_share          : 0.5382

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 8330.2497
  stop_liquidity          : 1005

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 1694.5659

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
    - gastronomy               : Strzelec
    - government_central       : Wojewódzka Stacja Sanitarno-Epidemiologiczna w Katowicach
    - health_clinic            : PsychoMEDIC
    - education_high_school    : Szkoła Policealna Nr 7
    - education_high_school    : Technikum Nr 2
    - culture_theatre          : Filia nr 4 Miejska Biblioteka Publiczna w Katowicach
    - pharmacy                 : Apteka Główna
    - pharmacy                 : Dbam o Zdrowie
    - micro_parcel_locker      : Paczkomat InPost
    - micro_atm                : Euronet
```
</details>
<details><summary><b>Katowice AWF (ID: 11085 | H3: 891e232d13bffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Katowice AWF
  stop_id                 : 11085
  h3_index                : 891e232d13bffff
  hub_id                  : 2908
  hub_name                : Katowice AWF
  is_hub_anchor           : True
  stop_lat                : 50.2511
  stop_lon                : 19.0043

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.9902
  stop_local_score_raw    : 1.8094

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 24637393.5361
  stop_raw_gravity        : 11920312.1358
  stop_entropy            : 1.0668

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 49.7857
  stop_routes_count       : 23
  stop_routes             : 9, 10, 11, 12, 37, 46, 48, 51, 115, 120, 130, 154, 177, 193, 296, 297, 632, 657, 689, 880, 900, M10, M12
  stop_hub_share          : 0.5549

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 8330.2509
  stop_liquidity          : 1003

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 1553.9297

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 12x personal_services
  > 10x health_clinic
  > 8x convenience_store
  > 8x micro_playground
  > 5x gastronomy
  > 5x university_campus
  > 4x place_of_worship
  > 4x commercial_zone
  > 3x pharmacy
  > 3x micro_parcel_locker
  > 3x social_support_mops
  > 3x education_preschool
  > 2x government_central
  > 2x micro_atm
  > 2x business_office
  > 2x hospital_clinical
  > 2x education_high_school
  > 1x culture_theatre
  > 1x post_office
  > 1x specialized_retail
  > 1x park_recreation
  > 1x car_services
  > 1x supermarket
  > 1x bank
  > 1x police_station

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy               : Strzelec
    - government_central       : Wojewódzka Stacja Sanitarno-Epidemiologiczna w Katowicach
    - health_clinic            : PsychoMEDIC
    - culture_theatre          : Filia nr 4 Miejska Biblioteka Publiczna w Katowicach
    - pharmacy                 : Apteka Główna
    - pharmacy                 : Dbam o Zdrowie
    - micro_parcel_locker      : Paczkomat InPost
    - micro_atm                : Euronet
    - convenience_store        : Żabka
    - convenience_store        : Żabka
```
</details>
<details><summary><b>Katowice Mikołowska (ID: 11083 | H3: 891e232d137ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Katowice Mikołowska
  stop_id                 : 11083
  h3_index                : 891e232d137ffff
  hub_id                  : 3544
  hub_name                : Katowice Mikołowska
  is_hub_anchor           : True
  stop_lat                : 50.2526
  stop_lon                : 19.0087

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.9805
  stop_local_score_raw    : 1.7783

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 24552339.8270
  stop_raw_gravity        : 10823096.4593
  stop_entropy            : 1.2685

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 49.7143
  stop_routes_count       : 23
  stop_routes             : 9, 10, 11, 12, 37, 46, 48, 51, 115, 120, 130, 154, 177, 193, 296, 297, 632, 657, 689, 880, 900, M10, M12
  stop_hub_share          : 1.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 7916.9162
  stop_liquidity          : 1264

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 1371.7486

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
    - gastronomy               : Z Liścia
    - gastronomy               : Strzelec
    - health_clinic            : PsychoMEDIC
    - education_high_school    : Szkoła Policealna Nr 7
    - education_high_school    : Technikum Nr 2
    - culture_theatre          : Filia nr 4 Miejska Biblioteka Publiczna w Katowicach
    - place_of_worship         : Zbór Kościóła Wolnych Chrześcijan
    - pharmacy                 : Apteka Główna
    - convenience_store        : Żabka
    - convenience_store        : Spożywczy
```
</details>
<details><summary><b>Katowice Mikołowska (ID: 11082 | H3: 891e232dcdbffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Katowice Mikołowska
  stop_id                 : 11082
  h3_index                : 891e232dcdbffff
  hub_id                  : 3676
  hub_name                : Katowice Mikołowska
  is_hub_anchor           : True
  stop_lat                : 50.2547
  stop_lon                : 19.0105

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.9707
  stop_local_score_raw    : 1.6509

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 15586295.3019
  stop_raw_gravity        : 7056601.5310
  stop_entropy            : 1.2088

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 48.2143
  stop_routes_count       : 23
  stop_routes             : 9, 10, 11, 12, 37, 46, 48, 51, 115, 120, 130, 154, 177, 193, 296, 297, 632, 657, 689, 880, 900, M10, M12
  stop_hub_share          : 1.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 7750.0000
  stop_liquidity          : 1241

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 748.0879

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 25x personal_services
  > 20x gastronomy
  > 18x convenience_store
  > 12x specialized_retail
  > 9x health_clinic
  > 9x place_of_worship
  > 6x education_high_school
  > 6x business_office
  > 6x commercial_zone
  > 5x pharmacy
  > 5x micro_playground
  > 4x park_recreation
  > 3x bank
  > 3x micro_atm
  > 3x car_services
  > 3x micro_parcel_locker
  > 3x hospital_clinical
  > 2x government_central
  > 2x social_support_mops
  > 2x supermarket
  > 2x sports_centre
  > 2x education_preschool
  > 2x university_campus
  > 1x culture_theatre
  > 1x police_station
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - government_central       : Sąd Okręgowy w Katowicach
    - gastronomy               : Z Liścia
    - gastronomy               : Strzelec
    - education_high_school    : Szkoła Policealna Nr 7
    - education_high_school    : Technikum Nr 2
    - culture_theatre          : Filia nr 4 Miejska Biblioteka Publiczna w Katowicach
    - pharmacy                 : Apteka Główna
    - personal_services        : Kashmir Hair
    - convenience_store        : Żabka
    - convenience_store        : Spożywczy
```
</details>
<details><summary><b>Śródmieście Kampus (ID: 406 | H3: 891e236e573ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Śródmieście Kampus
  stop_id                 : 406
  h3_index                : 891e236e573ffff
  hub_id                  : 4356
  hub_name                : Śródmieście Kampus
  is_hub_anchor           : True
  stop_lat                : 50.0975
  stop_lon                : 18.5408

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.9512
  stop_local_score_raw    : 1.5126

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 15840103.3739
  stop_raw_gravity        : 6015776.7988
  stop_entropy            : 1.6331

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 42.2857
  stop_routes_count       : 34
  stop_routes             : 18, 24, 27, 28, 34, 41, 43, 49, 55, 116, 182, 201, 203, 207, 209, 210, 260, 603, 612, 624, 629, 637, 638, 640, 644, 656, 690, 716, 807, 808, 814, 928, M109, M2
  stop_hub_share          : 1.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 4844.7190
  stop_liquidity          : 516

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 1470.5784

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 48x gastronomy
  > 47x specialized_retail
  > 29x park_recreation
  > 21x commercial_zone
  > 14x personal_services
  > 12x convenience_store
  > 11x bank
  > 10x health_clinic
  > 9x government_central
  > 8x micro_atm
  > 8x business_office
  > 7x place_of_worship
  > 7x pharmacy
  > 5x micro_parcel_locker
  > 4x culture_theatre
  > 4x micro_playground
  > 2x university_campus
  > 2x car_services
  > 2x post_office
  > 2x education_high_school
  > 2x sports_centre
  > 2x shopping_mall
  > 2x supermarket

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - university_campus        : Uniwersytet Ekonomiczny
    - micro_atm                : Bankomat Cash4You
    - micro_atm                : Bankomat Millennium
    - bank                     : Millennium Bank
    - micro_atm                : Bankomat Millennium
    - bank                     : Millennium Bank
    - car_services             : Moya Express
    - convenience_store        : Żabka
    - gastronomy               : Maryna
    - gastronomy               : Cafe Bosko
```
</details>

#### POZIOM 1: NAJSLABSZE SLUPKI FIZYCZNE MICRO (BOTTOM 5)
<details><summary><b>Wieszowa Leśniczówka nż (ID: 3263 | H3: 891e2338977ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Wieszowa Leśniczówka nż
  stop_id                 : 3263
  h3_index                : 891e2338977ffff
  hub_id                  : 1261
  hub_name                : Wieszowa Leśniczówka nż
  is_hub_anchor           : False
  stop_lat                : 50.3866
  stop_lon                : 18.7918

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.0488
  stop_local_score_raw    : -2.9481

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.4286
  stop_routes_count       : 1
  stop_routes             : 112
  stop_hub_share          : 0.4286

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 157.1515
  stop_liquidity          : 3

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 89.8636

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Tychy Żwaków (ID: 75978_ | H3: 891e059191bffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Tychy Żwaków
  stop_id                 : 75978_
  h3_index                : 891e059191bffff
  hub_id                  : 1001
  hub_name                : Tychy Żwaków
  is_hub_anchor           : False
  stop_lat                : 50.1100
  stop_lon                : 18.9532

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.0244
  stop_local_score_raw    : -3.0243

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 39.6799
  stop_raw_gravity        : 39.6799
  stop_entropy            : -0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 86.8204
  stop_liquidity          : 40

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 33.9927

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x car_services

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - car_services             : Serwis samochodów terenowych
```
</details>
<details><summary><b>Tychy Żwaków (ID: 75978_BUS | H3: 891e059191bffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Tychy Żwaków
  stop_id                 : 75978_BUS
  h3_index                : 891e059191bffff
  hub_id                  : 1001
  hub_name                : Tychy Żwaków
  is_hub_anchor           : False
  stop_lat                : 50.1100
  stop_lon                : 18.9532

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.0244
  stop_local_score_raw    : -3.0243

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 39.6799
  stop_raw_gravity        : 39.6799
  stop_entropy            : -0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 86.8204
  stop_liquidity          : 40

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 33.9927

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x car_services

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - car_services             : Serwis samochodów terenowych
```
</details>
<details><summary><b>Tychy Żwaków (ID: 75978_I | H3: 891e059191bffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Tychy Żwaków
  stop_id                 : 75978_I
  h3_index                : 891e059191bffff
  hub_id                  : 1001
  hub_name                : Tychy Żwaków
  is_hub_anchor           : False
  stop_lat                : 50.1100
  stop_lon                : 18.9532

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.0244
  stop_local_score_raw    : -3.0243

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 39.6799
  stop_raw_gravity        : 39.6799
  stop_entropy            : -0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 86.8204
  stop_liquidity          : 40

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 33.9927

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x car_services

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - car_services             : Serwis samochodów terenowych
```
</details>
<details><summary><b>Tychy Żwaków (ID: 75978_II | H3: 891e059191bffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Tychy Żwaków
  stop_id                 : 75978_II
  h3_index                : 891e059191bffff
  hub_id                  : 1001
  hub_name                : Tychy Żwaków
  is_hub_anchor           : False
  stop_lat                : 50.1100
  stop_lon                : 18.9532

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.0244
  stop_local_score_raw    : -3.0243

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 39.6799
  stop_raw_gravity        : 39.6799
  stop_entropy            : -0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 86.8204
  stop_liquidity          : 40

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 33.9927

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x car_services

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - car_services             : Serwis samochodów terenowych
```
</details>

#### POZIOM 2: NAJWAZNIEJSZE WEZLY LOGICZNE MACRO (TOP 5 HUBOW)
<details><summary><b>HUB: Katowice AWF (ID: 2908 | H3: 891e232d133ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Katowice AWF
  hub_id                  : 2908
  h3_index                : 891e232d133ffff
  hub_stops_count         : 2
  hub_stops_ids           : 11084, 11085
  lat                     : 50.2512
  lon                     : 19.0045

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 100.0000
  hub_local_score_raw     : 1.7484

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 41713201.6654
  hub_raw_gravity         : 19979608.1457
  hub_entropy             : 1.0878

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 89.7143
  hub_routes_count        : 23
  hub_routes              : 9, 10, 11, 12, 37, 46, 48, 51, 115, 120, 130, 154, 177, 193, 296, 297, 632, 657, 689, 880, 900, M10, M12

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 8330.2497
  hub_liquidity           : 1005

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 2746.7398
```
</details>
<details><summary><b>HUB: Katowice Dworzec (ID: 71 | H3: 891e232dcd7ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Katowice Dworzec
  hub_id                  : 71
  h3_index                : 891e232dcd7ffff
  hub_stops_count         : 19
  hub_stops_ids           : 3687, 5407, 5408, 5409, 5410, 5411, 5412, 5413, 5415, 9753, 73312, 73312, 73312, 73312_, 73312_BUS, 73312_I, 73312_II, 73312_III, 73312_IV
  lat                     : 50.2582
  lon                     : 19.0175

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.9792
  hub_local_score_raw     : 1.5526

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 33115541.7617
  hub_raw_gravity         : 12246647.2712
  hub_entropy             : 1.7040

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 100.7143
  hub_routes_count        : 31
  hub_routes              : 0, 9, 10, 11, 12, 46, 50, 61, 110, 115, 154, 177, 193, 296, 297, 600, 601, 657, 674, 910, 911, 930, 950, AP, M10, M101, M12, M13, M22, M4, Z210

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 7018.5289
  hub_liquidity           : 1189

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 578.2183
```
</details>
<details><summary><b>HUB: Katowice Sokolska (ID: 2216 | H3: 891e232c267ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Katowice Sokolska
  hub_id                  : 2216
  h3_index                : 891e232c267ffff
  hub_stops_count         : 4
  hub_stops_ids           : 2706, 2707, 2708, 2709
  lat                     : 50.2640
  lon                     : 19.0179

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.9584
  hub_local_score_raw     : 1.5312

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 10696446.6039
  hub_raw_gravity         : 5971973.3988
  hub_entropy             : 0.7911

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 93.1429
  hub_routes_count        : 35
  hub_routes              : 0, 5, 6, 7, 11, 23, 27, 30, 40, 43, 50, 61, 70, 110, 133, 154, 168, 177, 193, 296, 600, 601, 657, 673, 674, 805, 911, 930, 950, AP, M101, M11, M25, M28, M4

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 9888.6215
  hub_liquidity           : 1603

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 492.5660
```
</details>
<details><summary><b>HUB: Katowice Plac Wolności (ID: 3084 | H3: 891e232c26bffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Katowice Plac Wolności
  hub_id                  : 3084
  h3_index                : 891e232c26bffff
  hub_stops_count         : 4
  hub_stops_ids           : 4443, 5244, 5424, 9785
  lat                     : 50.2604
  lon                     : 19.0143

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.9376
  hub_local_score_raw     : 1.5282

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 16754136.5100
  hub_raw_gravity         : 5435492.0256
  hub_entropy             : 2.0824

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 84.5000
  hub_routes_count        : 30
  hub_routes              : 0, 5, 7, 11, 13, 15, 20, 23, 27, 43, 50, 61, 70, 110, 133, 168, 177, 193, 296, 600, 601, 657, 674, 911, 930, 950, M101, M11, M25, M28

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 10178.1168
  hub_liquidity           : 1591

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 411.0147
```
</details>
<details><summary><b>HUB: Katowice Mikołowska (ID: 3544 | H3: 891e232d137ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Katowice Mikołowska
  hub_id                  : 3544
  h3_index                : 891e232d137ffff
  hub_stops_count         : 1
  hub_stops_ids           : 11083
  lat                     : 50.2526
  lon                     : 19.0087

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.9168
  hub_local_score_raw     : 1.4983

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 35871868.3275
  hub_raw_gravity         : 15631061.4057
  hub_entropy             : 1.2949

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 49.7143
  hub_routes_count        : 23
  hub_routes              : 9, 10, 11, 12, 37, 46, 48, 51, 115, 120, 130, 154, 177, 193, 296, 297, 632, 657, 689, 880, 900, M10, M12

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 7916.9162
  hub_liquidity           : 1264

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 2072.3464
```
</details>

---

## KIELCE
#### DASHBOARD ASERCJI PIPELINE'U (Pelna Integralnosc Bazy)
```text
[PASS ZERO NULLS & INFS] Petla obliczeniowa wygenerowala 100% spojnych komorek.
[STATS] [PASS] Z-Score Micro VALID (Mean: -0.000, Std: 0.695)
        Rozklad Rang Slupkow (Micro): A: 136, A+: 68, B: 204, C: 271, D: 339, F: 339
[STATS] [PASS] Z-Score Macro VALID (Mean: 0.000, Std: 0.683)
        Rozklad Rang Hubow (Macro): A: 82, A+: 41, B: 123, C: 163, D: 204, F: 204
[DEMOGRAPHY] [INFO] OBSZAR AGLOMERACYJNY: +51.2% (GUS strefa aglomeracyjna: 287,314 vs Miasto rdzen: 190,000)
[PASS] POI Parquet 100% Valid (Matematyka Huffa dziala)
[PASS] POP Parquet 100% Valid
[PASS] H3 Res 8 Grid 100% Valid (843 komorek, 197 pustyn transportowych)
```

### Faza 0: Statystyki Ogolne i Balans Sieci
- **Slupki Fizyczne (Micro):** 1,357 slupkow
- **Wezly Logiczne (Macro Hubs):** 817 hubow (Wskaznik konsolidacji: 1.66 slupka/hub)
- **Populacja Strefy Transportowej (GUS 250m):** 287,314 mieszkancow
- **Transakcje Notarialne RCN:** 9,588 aktow
### Faza 1: Siatka Analityczna Uber H3 Res 8 (0.74 km2 / komorka)
- **Liczba Komorek H3 Res 8:** 843
- **Rynek Nieruchomosci RCN w Heksach:** Pokrycie 14.8% (125/843 komorek), Srednia: 6,525 PLN/m2, Mediana: 6,744 PLN/m2, Std: 2,484, Min: 501, Max: 18,377 PLN/m2
- **Demografia GUS NSP 2021 w Heksach:** Laczna ludnosc w heksach: 287,314, Srednia/heks: 340.8, Mediana: 113.0, Std: 1012.3, Max: 12,453
- **Podaz Transportu w Heksach:** Sredni Transport Score: 9.06, Max Transport Score: 100.00, Srednia odjazdow/h: 9.46, Pustynie Transportowe TDI: 197

#### TOP 5 Pustyn Transportowych (The Investment List)
| H3 Index | Lat | Lon | Populacja GUS | Odjazdy/h | TDI Score |
|---|---|---|---|---|---|
| `881e2eb5b5fffff` | 50.84588 | 20.65862 | 1,715 | 0.0 | **78.14** |
| `881e2eae51fffff` | 50.74426 | 20.63045 | 676 | 0.0 | **68.38** |
| `881e2c7925fffff` | 50.98795 | 20.66293 | 617 | 0.0 | **67.43** |
| `881e2ea0d5fffff` | 50.79259 | 20.60426 | 567 | 0.0 | **66.54** |
| `881e2ea099fffff` | 50.78748 | 20.62922 | 550 | 0.0 | **66.22** |

#### TOP 5 Biegunow Transportu (Najwyzsza Podaz)
| H3 Index | Lat | Lon | Transport Score | Odjazdy/h | Liczba Slupkow |
|---|---|---|---|---|---|
| `881e2eb5edfffff` | 50.87134 | 20.60406 | **100.00** | 245.4 | 19 |
| `881e2eb5ebfffff` | 50.87385 | 20.62677 | **100.00** | 543.1 | 18 |
| `881e2eb5e3fffff` | 50.86624 | 20.62906 | **100.00** | 337.1 | 12 |
| `881e2eb5d9fffff` | 50.89411 | 20.66763 | **100.00** | 159.3 | 10 |
| `881e2eb5e1fffff` | 50.86879 | 20.61656 | **100.00** | 482.5 | 15 |

#### TOP 5 Najdrozszych Heksow Mieszkaniowych RCN
| H3 Index | Lat | Lon | Mediana Ceny m2 | Liczba Transakcji |
|---|---|---|---|---|
| `881e2c71adfffff` | 51.10144 | 20.87584 | **18,377 PLN** | 1 |
| `881e2ea317fffff` | 50.80789 | 20.45899 | **12,409 PLN** | 1 |
| `881e2eb5d5fffff` | 50.88143 | 20.65970 | **12,204 PLN** | 21 |
| `881e2ea337fffff` | 50.79010 | 20.44092 | **10,504 PLN** | 1 |
| `881e2eb5d7fffff` | 50.87887 | 20.67219 | **10,097 PLN** | 5 |

### Faza 2: Audyt Zbednosci TCRP Report 100 (The Axe List)
- **Zbedne Slupki (R >= 0.50 - Umiarkowana Kanibalizacja):** 551
- **Zbedne Slupki (R >= 0.70 - Rekomendacja Likwidacji):** 372
- **Zbedne Slupki (R >= 0.90 - Skrajna Zbednosc / Dubel):** 128

| Zbedny Słupek | Dominujacy Słupek | Dystans [m] | S_service | S_spatial | S_cannibal | R-Score |
|---|---|---|---|---|---|---|
| Długa / Częstochowska (#75, 1.5 odj/h) | Długa / Częstochowska (#1217, 1.5 odj/h) | 3.4m | 1.00 | 1.00 | 0.99 | **0.9922** |
| Długa / Częstochowska (#1217, 1.5 odj/h) | Długa / Częstochowska (#75, 1.5 odj/h) | 3.4m | 1.00 | 1.00 | 0.99 | **0.9922** |
| Młynek / Brudzowski (#654, 0.35714285714285715 odj/h) | Młynek / Brudzowski (#810, 0.42857142857142855 odj/h) | 3.6m | 1.00 | 1.00 | 0.99 | **0.9918** |
| Wola Murowana Kościół (#564, 0.7857142857142857 odj/h) | Wola Murowana Kościół (#562, 0.7857142857142857 odj/h) | 5.5m | 1.00 | 1.00 | 0.99 | **0.9867** |
| Wola Murowana Kościół (#562, 0.7857142857142857 odj/h) | Wola Murowana Kościół (#564, 0.7857142857142857 odj/h) | 5.5m | 1.00 | 1.00 | 0.99 | **0.9867** |

### Faza 3: Hierarchia Magnesow Miejskich POI

#### Top 20 Kategorii POI w Miescie
| Kategoria | Tier | Ilosc w Miescie | Wartosc Punktowa (W) |
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

#### TOP 10 Konkretnych Nazwanych Magnesow Miejskich (T0, T1, T2)
| Nazwa Obiektu | Kategoria POI | Tier | Waga Przyciagania (W) |
|---|---|---|---|
| **Kielce Główne** | `national_rail_hub` | T0_MEGA_HUB | 34,334,978 |
| **Targi Kielce** | `exhibition_centre` | T1_NATIONAL_MAGNET | 28,542,329 |
| **Szpital Kielecki imienia św. Aleksandra - ArtMedik** | `hospital_clinical` | T1_NATIONAL_MAGNET | 20,455,516 |
| **Świętokrzyskie Centrum Psychiatrii w Morawicy** | `hospital_clinical` | T1_NATIONAL_MAGNET | 20,455,516 |
| **Wojewódzki Szpital Specjalistyczny im. św. Rafała w Czerwonej Górze** | `hospital_clinical` | T1_NATIONAL_MAGNET | 20,455,516 |
| **Oddział Dzienny Psychiatryczny Ogólny Świętokrzyskiego Centrum Psychiatrii w Morawicy** | `hospital_clinical` | T1_NATIONAL_MAGNET | 20,455,516 |
| **Świętokrzyskie Centrum Onkologii** | `hospital_clinical` | T1_NATIONAL_MAGNET | 20,455,516 |
| **Hala sportowa** | `national_stadium` | T1_NATIONAL_MAGNET | 18,770,250 |
| **Stadion Lekkoatletyczny MOSiR** | `national_stadium` | T1_NATIONAL_MAGNET | 18,770,250 |
| **Mini stadion lekkoatletyczny** | `national_stadium` | T1_NATIONAL_MAGNET | 18,770,250 |

### Faza 4: Probki Pelnego DNA (Wszystkie 53 Metryki)

#### POZIOM 1: NAJLEPSZE SLUPKI FIZYCZNE MICRO (TOP 5)
<details><summary><b>Grunwaldzka / Jagiellońska (ID: 142 | H3: 891e2eb5ed7ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Grunwaldzka / Jagiellońska
  stop_id                 : 142
  h3_index                : 891e2eb5ed7ffff
  hub_id                  : 582
  hub_name                : Grunwaldzka / Jagiellońska
  is_hub_anchor           : True
  stop_lat                : 50.8733
  stop_lon                : 20.6083

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 100.0000
  stop_local_score_raw    : 1.5976

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 3066556.6369
  stop_raw_gravity        : 1072834.3646
  stop_entropy            : 1.8584

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 35.0714
  stop_routes_count       : 17
  stop_routes             : 1, 2, 5, 8, 13, 18, 25, 27, 29, 31, 35, 46, 50, 51, 102, 107, 114
  stop_hub_share          : 1.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 7122.2833
  stop_liquidity          : 315

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 717.9997

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 15x personal_services
  > 14x convenience_store
  > 13x park_recreation
  > 13x micro_playground
  > 11x specialized_retail
  > 11x micro_parcel_locker
  > 9x health_clinic
  > 6x pharmacy
  > 5x gastronomy
  > 4x micro_atm
  > 4x supermarket
  > 3x car_services
  > 3x education_preschool
  > 3x commercial_zone
  > 2x business_office
  > 2x government_central
  > 1x post_office
  > 1x bank
  > 1x marketplace
  > 1x social_support_mops
  > 1x industrial_zone
  > 1x education_high_school
  > 1x hospital_clinical

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - health_clinic            : Przychodnia Sportowa
    - micro_atm                : Euronet
    - gastronomy               : Antresola
    - convenience_store        : Livio
    - supermarket              : Lewiatan
    - gastronomy               : Wild Bean Cafe
    - post_office              : UP Kielce 11
    - pharmacy                 : Gemini
    - convenience_store        : Żabka
    - convenience_store        : Żabka
```
</details>
<details><summary><b>Grunwaldzka / Mielczarskiego (ID: 143 | H3: 891e2eb5e13ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Grunwaldzka / Mielczarskiego
  stop_id                 : 143
  h3_index                : 891e2eb5e13ffff
  hub_id                  : 601
  hub_name                : Grunwaldzka / Mielczarskiego
  is_hub_anchor           : True
  stop_lat                : 50.8713
  stop_lon                : 20.6150

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.9263
  stop_local_score_raw    : 1.5524

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 2790304.6925
  stop_raw_gravity        : 910162.2179
  stop_entropy            : 2.0657

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 35.5714
  stop_routes_count       : 17
  stop_routes             : 1, 2, 5, 8, 13, 18, 25, 27, 29, 31, 35, 46, 50, 51, 102, 107, 114
  stop_hub_share          : 0.5993

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 7402.3260
  stop_liquidity          : 176

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 426.0781

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
    - bank                     : Millennium Bank
    - micro_atm                : Euronet
    - culture_theatre          : Miejska Biblioteka Publiczna
    - national_rail_hub        : Kielce Główne
    - bank                     : Santander
    - personal_services        : Rossmann
    - gastronomy               : Antresola
    - convenience_store        : Livio
    - specialized_retail       : Media Expert
    - micro_parcel_locker      : Paczkomat InPost
```
</details>
<details><summary><b>Grunwaldzka / Mielczarskiego (ID: 144 | H3: 891e2eb5e13ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Grunwaldzka / Mielczarskiego
  stop_id                 : 144
  h3_index                : 891e2eb5e13ffff
  hub_id                  : 601
  hub_name                : Grunwaldzka / Mielczarskiego
  is_hub_anchor           : False
  stop_lat                : 50.8710
  stop_lon                : 20.6148

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.8526
  stop_local_score_raw    : 1.5444

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 2522081.7324
  stop_raw_gravity        : 805905.4491
  stop_entropy            : 2.1295

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 35.0714
  stop_routes_count       : 17
  stop_routes             : 1, 2, 5, 8, 13, 18, 25, 27, 29, 31, 35, 46, 50, 51, 102, 107, 114
  stop_hub_share          : 0.5909

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 7402.3260
  stop_liquidity          : 176

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 446.0525

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
    - micro_atm                : Euronet
    - culture_theatre          : Miejska Biblioteka Publiczna
    - national_rail_hub        : Kielce Główne
    - bank                     : Santander
    - personal_services        : Rossmann
    - specialized_retail       : Media Expert
    - micro_parcel_locker      : Paczkomat InPost
    - specialized_retail       : Serwis GSM
    - gastronomy               : Bar Turystyczny
    - convenience_store        : Żabka
```
</details>
<details><summary><b>IX Wieków Kielc / Warszawska (ID: 1462 | H3: 891e2eb5ea7ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : IX Wieków Kielc / Warszawska
  stop_id                 : 1462
  h3_index                : 891e2eb5ea7ffff
  hub_id                  : 20
  hub_name                : IX Wieków Kielc / Warszawska
  is_hub_anchor           : True
  stop_lat                : 50.8746
  stop_lon                : 20.6327

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.7789
  stop_local_score_raw    : 1.5110

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 9651146.6145
  stop_raw_gravity        : 3265060.9768
  stop_entropy            : 1.9559

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 22.3571
  stop_routes_count       : 15
  stop_routes             : 10, 11, 13, 14, 21, 25, 26, 35, 38, 41, 43, 47, 53, 103, 0W
  stop_hub_share          : 0.6019

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 8625.2528
  stop_liquidity          : 343

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 316.3358

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
    - culture_theatre          : Multikino
    - supermarket              : Auchan
    - bank                     : mBank
    - bank                     : ING Bank Śląski
    - shopping_mall            : Centrum Rondo
    - micro_atm                : Planet Cash
    - government_central       : Urząd Marszałkowski Województwa Świętokrzyskiego
    - government_central       : Centrum Powiadamiania Ratunkowego
    - gastronomy               : Meet Me
    - specialized_retail       : Elegancja
```
</details>
<details><summary><b>Czarnowska / Dworzec Autobusowy (ID: 1187 | H3: 891e2eb5ebbffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Czarnowska / Dworzec Autobusowy
  stop_id                 : 1187
  h3_index                : 891e2eb5ebbffff
  hub_id                  : 565
  hub_name                : Czarnowska / Dworzec Autobusowy
  is_hub_anchor           : True
  stop_lat                : 50.8748
  stop_lon                : 20.6220

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.7052
  stop_local_score_raw    : 1.5083

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 6381659.6475
  stop_raw_gravity        : 2243252.4369
  stop_entropy            : 1.8448

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 31.6429
  stop_routes_count       : 22
  stop_routes             : 7, 9, 10, 11, 12, 13, 14, 18, 21, 31, 32, 33, 34, 38, 41, 43, 44, 45, 46, 47, 50, 54
  stop_hub_share          : 0.5127

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 7966.9981
  stop_liquidity          : 256

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 189.6728

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
    - bank                     : Millennium Bank
    - micro_atm                : Euronet
    - micro_atm                : Euronet
    - shopping_mall            : Centrum Rondo
    - national_rail_hub        : Kielce Główne
    - bank                     : Santander
    - personal_services        : Rossmann
    - micro_atm                : Planet Cash
    - gastronomy               : Pierogarnia
    - gastronomy               : Jadłodalnia Tempo
```
</details>

#### POZIOM 1: NAJSLABSZE SLUPKI FIZYCZNE MICRO (BOTTOM 5)
<details><summary><b>Leszczyny Skała (ID: 1182 | H3: 891e2c69647ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Leszczyny Skała
  stop_id                 : 1182
  h3_index                : 891e2c69647ffff
  hub_id                  : 439
  hub_name                : Leszczyny Skała
  is_hub_anchor           : True
  stop_lat                : 50.8800
  stop_lon                : 20.7698

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.4053
  stop_local_score_raw    : -1.7908

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.6429
  stop_routes_count       : 1
  stop_routes             : 10
  stop_hub_share          : 0.5000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 7388.8165
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Łubno (ID: 848 | H3: 891e2eb037bffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Łubno
  stop_id                 : 848
  h3_index                : 891e2eb037bffff
  hub_id                  : 116
  hub_name                : Łubno
  is_hub_anchor           : True
  stop_lat                : 50.8972
  stop_lon                : 20.4045

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.2948
  stop_local_score_raw    : -1.8086

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.2857
  stop_routes_count       : 1
  stop_routes             : 28
  stop_hub_share          : 0.5714

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 7388.8165
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 0.9900

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Suków Piaskownia (ID: 410 | H3: 891e2ea7107ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Suków Piaskownia
  stop_id                 : 410
  h3_index                : 891e2ea7107ffff
  hub_id                  : 516
  hub_name                : Suków Piaskownia
  is_hub_anchor           : True
  stop_lat                : 50.8140
  stop_lon                : 20.7067

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.2211
  stop_local_score_raw    : -1.8311

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.5000
  stop_routes_count       : 1
  stop_routes             : 11
  stop_hub_share          : 0.5385

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 7388.8165
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Łubno (ID: 849 | H3: 891e2eb037bffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Łubno
  stop_id                 : 849
  h3_index                : 891e2eb037bffff
  hub_id                  : 116
  hub_name                : Łubno
  is_hub_anchor           : False
  stop_lat                : 50.8975
  stop_lon                : 20.4042

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.1474
  stop_local_score_raw    : -1.8326

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.2143
  stop_routes_count       : 1
  stop_routes             : 28
  stop_hub_share          : 0.4286

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 7388.8165
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 1.0100

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Suków Piaskownia (ID: 409 | H3: 891e2ea7107ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Suków Piaskownia
  stop_id                 : 409
  h3_index                : 891e2ea7107ffff
  hub_id                  : 516
  hub_name                : Suków Piaskownia
  is_hub_anchor           : False
  stop_lat                : 50.8139
  stop_lon                : 20.7081

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.0737
  stop_local_score_raw    : -1.8527

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.4286
  stop_routes_count       : 1
  stop_routes             : 11
  stop_hub_share          : 0.4615

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 7388.8165
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>

#### POZIOM 2: NAJWAZNIEJSZE WEZLY LOGICZNE MACRO (TOP 5 HUBOW)
<details><summary><b>HUB: Czarnowska / Dworzec Autobusowy (ID: 565 | H3: 891e2eb5ebbffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Czarnowska / Dworzec Autobusowy
  hub_id                  : 565
  h3_index                : 891e2eb5ebbffff
  hub_stops_count         : 2
  hub_stops_ids           : 67, 1187
  lat                     : 50.8747
  lon                     : 20.6219

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 100.0000
  hub_local_score_raw     : 1.5941

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 15655639.8570
  hub_raw_gravity         : 5545676.4771
  hub_entropy             : 1.8230

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 61.7143
  hub_routes_count        : 24
  hub_routes              : 7, 9, 10, 11, 12, 13, 14, 18, 21, 31, 32, 33, 34, 38, 41, 43, 44, 45, 46, 47, 50, 51, 54, 0Z

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 7905.2321
  hub_liquidity           : 278

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 417.7852
```
</details>
<details><summary><b>HUB: Żytnia (ID: 71 | H3: 891e2eb5e07ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Żytnia
  hub_id                  : 71
  h3_index                : 891e2eb5e07ffff
  hub_stops_count         : 4
  hub_stops_ids           : 527, 528, 1040, 1041
  lat                     : 50.8692
  lon                     : 20.6199

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.8776
  hub_local_score_raw     : 1.5715

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 6769948.7603
  hub_raw_gravity         : 2607139.9463
  hub_entropy             : 1.5967

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 69.5000
  hub_routes_count        : 22
  hub_routes              : 1, 2, 8, 18, 25, 27, 28, 29, 31, 33, 34, 35, 36, 44, 45, 50, 51, 54, 102, 107, 108, 0Z

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 6849.3151
  hub_liquidity           : 297

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 857.0645
```
</details>
<details><summary><b>HUB: Urząd Wojewódzki (ID: 174 | H3: 891e2eb5ea7ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Urząd Wojewódzki
  hub_id                  : 174
  h3_index                : 891e2eb5ea7ffff
  hub_stops_count         : 3
  hub_stops_ids           : 81, 84, 1042
  lat                     : 50.8744
  lon                     : 20.6303

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.7552
  hub_local_score_raw     : 1.5492

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 10175311.1855
  hub_raw_gravity         : 3895485.0471
  hub_entropy             : 1.6121

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 49.8571
  hub_routes_count        : 17
  hub_routes              : 10, 11, 13, 14, 21, 25, 26, 35, 36, 38, 41, 43, 46, 47, 53, 102, 103

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 8433.7349
  hub_liquidity           : 431

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 522.5720
```
</details>
<details><summary><b>HUB: Grunwaldzka / Mielczarskiego (ID: 601 | H3: 891e2eb5e13ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Grunwaldzka / Mielczarskiego
  hub_id                  : 601
  h3_index                : 891e2eb5e13ffff
  hub_stops_count         : 2
  hub_stops_ids           : 143, 144
  lat                     : 50.8711
  lon                     : 20.6149

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.6328
  hub_local_score_raw     : 1.5220

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 4990362.1642
  hub_raw_gravity         : 1683586.7899
  hub_entropy             : 1.9641

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 59.3571
  hub_routes_count        : 17
  hub_routes              : 1, 2, 5, 8, 13, 18, 25, 27, 29, 31, 35, 46, 50, 51, 102, 107, 114

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 7382.9561
  hub_liquidity           : 182

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 770.4805
```
</details>
<details><summary><b>HUB: IX Wieków Kielc / Warszawska (ID: 20 | H3: 891e2eb5ea7ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : IX Wieków Kielc / Warszawska
  hub_id                  : 20
  h3_index                : 891e2eb5ea7ffff
  hub_stops_count         : 2
  hub_stops_ids           : 536, 1462
  lat                     : 50.8747
  lon                     : 20.6333

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.5104
  hub_local_score_raw     : 1.4850

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 16559191.5300
  hub_raw_gravity         : 5615532.1701
  hub_entropy             : 1.9488

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 37.1429
  hub_routes_count        : 19
  hub_routes              : 10, 11, 13, 14, 21, 24, 25, 26, 35, 36, 38, 41, 43, 46, 47, 53, 102, 103, 0W

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 8530.8057
  hub_liquidity           : 391

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 530.8620
```
</details>

---

## KRAKOW
#### DASHBOARD ASERCJI PIPELINE'U (Pelna Integralnosc Bazy)
```text
[PASS ZERO NULLS & INFS] Petla obliczeniowa wygenerowala 100% spojnych komorek.
[STATS] [PASS] Z-Score Micro VALID (Mean: 0.000, Std: 0.673)
        Rozklad Rang Slupkow (Micro): A: 426, A+: 213, B: 639, C: 852, D: 1065, F: 1064
[STATS] [PASS] Z-Score Macro VALID (Mean: 0.000, Std: 0.712)
        Rozklad Rang Hubow (Macro): A: 178, A+: 89, B: 266, C: 355, D: 444, F: 443
[DEMOGRAPHY] [INFO] OBSZAR AGLOMERACYJNY: +40.8% (GUS strefa aglomeracyjna: 1,126,209 vs Miasto rdzen: 800,000)
[PASS] POI Parquet 100% Valid (Matematyka Huffa dziala)
[PASS] POP Parquet 100% Valid
[PASS] H3 Res 8 Grid 100% Valid (2,064 komorek, 403 pustyn transportowych)
```

### Faza 0: Statystyki Ogolne i Balans Sieci
- **Slupki Fizyczne (Micro):** 4,259 slupkow
- **Wezly Logiczne (Macro Hubs):** 1,775 hubow (Wskaznik konsolidacji: 2.40 slupka/hub)
- **Populacja Strefy Transportowej (GUS 250m):** 1,126,209 mieszkancow
- **Transakcje Notarialne RCN:** 76,536 aktow
### Faza 1: Siatka Analityczna Uber H3 Res 8 (0.74 km2 / komorka)
- **Liczba Komorek H3 Res 8:** 2,064
- **Rynek Nieruchomosci RCN w Heksach:** Pokrycie 44.2% (913/2064 komorek), Srednia: 7,658 PLN/m2, Mediana: 6,955 PLN/m2, Std: 3,946, Min: 16, Max: 30,445 PLN/m2
- **Demografia GUS NSP 2021 w Heksach:** Laczna ludnosc w heksach: 1,126,209, Srednia/heks: 545.6, Mediana: 141.5, Std: 1435.7, Max: 12,860
- **Podaz Transportu w Heksach:** Sredni Transport Score: 5.97, Max Transport Score: 100.00, Srednia odjazdow/h: 36.36, Pustynie Transportowe TDI: 403

#### TOP 5 Pustyn Transportowych (The Investment List)
| H3 Index | Lat | Lon | Populacja GUS | Odjazdy/h | TDI Score |
|---|---|---|---|---|---|
| `881e2ad24dfffff` | 49.99457 | 20.07456 | 1,655 | 0.0 | **77.77** |
| `881e2e6999fffff` | 49.99963 | 20.04984 | 1,546 | 0.0 | **77.05** |
| `881e2e7991fffff` | 50.11728 | 19.93297 | 1,405 | 0.0 | **76.05** |
| `881e2e692dfffff` | 49.99388 | 19.90078 | 1,375 | 0.0 | **75.83** |
| `881e2e6b69fffff` | 50.07082 | 19.87740 | 1,302 | 0.0 | **75.25** |

#### TOP 5 Biegunow Transportu (Najwyzsza Podaz)
| H3 Index | Lat | Lon | Transport Score | Odjazdy/h | Liczba Slupkow |
|---|---|---|---|---|---|
| `881e2e6b31fffff` | 50.04540 | 19.93157 | **100.00** | 956.4 | 18 |
| `881e2e6b13fffff` | 50.06094 | 19.96169 | **100.00** | 553.4 | 13 |
| `881e2e6b11fffff` | 50.06346 | 19.94931 | **100.00** | 1828.6 | 17 |
| `881e2e6b09fffff` | 50.07099 | 19.91219 | **100.00** | 1097.6 | 23 |
| `881e2e6b3bfffff` | 50.05058 | 19.94161 | **100.00** | 655.8 | 13 |

#### TOP 5 Najdrozszych Heksow Mieszkaniowych RCN
| H3 Index | Lat | Lon | Mediana Ceny m2 | Liczba Transakcji |
|---|---|---|---|---|
| `881e05b6b3fffff` | 50.06046 | 19.85734 | **30,445 PLN** | 3 |
| `881e2e6b15fffff` | 50.05828 | 19.93927 | **23,082 PLN** | 240 |
| `881e2e6b19fffff` | 50.07115 | 19.94698 | **22,181 PLN** | 767 |
| `881e2e69e1fffff` | 49.99167 | 19.98265 | **22,050 PLN** | 4 |
| `881e05b483fffff` | 50.02450 | 19.85667 | **21,473 PLN** | 1 |

### Faza 2: Audyt Zbednosci TCRP Report 100 (The Axe List)
- **Zbedne Slupki (R >= 0.50 - Umiarkowana Kanibalizacja):** 1975
- **Zbedne Slupki (R >= 0.70 - Rekomendacja Likwidacji):** 1444
- **Zbedne Slupki (R >= 0.90 - Skrajna Zbednosc / Dubel):** 663

| Zbedny Słupek | Dominujacy Słupek | Dystans [m] | S_service | S_spatial | S_cannibal | R-Score |
|---|---|---|---|---|---|---|
| Strzelców (#stop_73_10181, 2.142857142857143 odj/h) | Strzelców (#stop_73_10101, 5.571428571428571 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |
| Radziszów PKP (#stop_842_118671, 1.0714285714285714 odj/h) | Radziszów PKP (#stop_842_118601, 1.0714285714285714 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |
| Radziszów PKP (#stop_842_118601, 1.0714285714285714 odj/h) | Radziszów PKP (#stop_842_118671, 1.0714285714285714 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |
| Ochodza Dwór (#stop_2101_333102, 0.35714285714285715 odj/h) | Ochodza Dwór (#stop_2101_333101, 0.9285714285714286 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |
| Rudawa Rynek (#stop_2208_341981, 2.642857142857143 odj/h) | Rudawa Rynek (#stop_2208_341901, 2.7142857142857144 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |

### Faza 3: Hierarchia Magnesow Miejskich POI

#### Top 20 Kategorii POI w Miescie
| Kategoria | Tier | Ilosc w Miescie | Wartosc Punktowa (W) |
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

#### TOP 10 Konkretnych Nazwanych Magnesow Miejskich (T0, T1, T2)
| Nazwa Obiektu | Kategoria POI | Tier | Waga Przyciagania (W) |
|---|---|---|---|
| **Międzynarodowy Port Lotniczy im. Jana Pawła II Kraków-Balice** | `international_airport` | T0_MEGA_HUB | 216,720,841 |
| **Kraków Główny** | `national_rail_hub` | T0_MEGA_HUB | 39,335,790 |
| **Międzynarodowe Centrum Targowo-Kongresowe EXPO** | `exhibition_centre` | T1_NATIONAL_MAGNET | 24,660,124 |
| **Stadion Miejski KS Prądniczanka im. Władysława Kawuli** | `national_stadium` | T1_NATIONAL_MAGNET | 23,104,466 |
| **Klub Sportowy Grębałowianka** | `national_stadium` | T1_NATIONAL_MAGNET | 23,104,466 |
| **Narodowe Centrum Rugby 7** | `national_stadium` | T1_NATIONAL_MAGNET | 23,104,466 |
| **Klub Sportowy Borek** | `national_stadium` | T1_NATIONAL_MAGNET | 23,104,466 |
| **KS Clepardia** | `national_stadium` | T1_NATIONAL_MAGNET | 23,104,466 |
| **SKS Podgórze** | `national_stadium` | T1_NATIONAL_MAGNET | 23,104,466 |
| **Tauron Arena Kraków** | `national_stadium` | T1_NATIONAL_MAGNET | 23,104,466 |

### Faza 4: Probki Pelnego DNA (Wszystkie 53 Metryki)

#### POZIOM 1: NAJLEPSZE SLUPKI FIZYCZNE MICRO (TOP 5)
<details><summary><b>Muzeum Narodowe (ID: stop_1654_314105 | H3: 891e2e6b023ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Muzeum Narodowe
  stop_id                 : stop_1654_314105
  h3_index                : 891e2e6b023ffff
  hub_id                  : 1522
  hub_name                : Muzeum Narodowe
  is_hub_anchor           : False
  stop_lat                : 50.0598
  stop_lon                : 19.9251

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 100.0000
  stop_local_score_raw    : 1.7165

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 8238792.8299
  stop_raw_gravity        : 3777028.0919
  stop_entropy            : 1.1813

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 59.4286
  stop_routes_count       : 17
  stop_routes             : 124, 144, 164, 169, 173, 179, 192, 194, 301, 304, 307, 310, 424, 494, 503, 513, 706
  stop_hub_share          : 0.4741

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 16321.3171
  stop_liquidity          : 275

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 255.1785

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
    - culture_theatre          : Teatr Groteska
    - gastronomy               : Dynia Resto Bar
    - university_campus        : Wydział Filozofii Uniwersytetu Jagiellońskiego
    - gastronomy               : Pod Kopytkiem
    - education_high_school    : Ośrodek Szkolno-wychowawczy nr 1
    - university_campus        : Ośrodek Informacji i Promocji Uniwersytetu Jagiellońskiego
    - business_office          : Redakcja miesięcznika Alma Mater
    - bank                     : Millennium Bank
    - micro_atm                : Bankomat Millennium
    - micro_atm                : Bankomat Millennium
```
</details>
<details><summary><b>Muzeum Narodowe (ID: stop_1654_314104 | H3: 891e2e6b02bffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Muzeum Narodowe
  stop_id                 : stop_1654_314104
  h3_index                : 891e2e6b02bffff
  hub_id                  : 1522
  hub_name                : Muzeum Narodowe
  is_hub_anchor           : True
  stop_lat                : 50.0586
  stop_lon                : 19.9252

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.9765
  stop_local_score_raw    : 1.6929

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 4669262.9473
  stop_raw_gravity        : 2096053.3647
  stop_entropy            : 1.2276

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 61.2857
  stop_routes_count       : 19
  stop_routes             : 124, 134, 144, 164, 169, 173, 179, 194, 300, 301, 304, 307, 310, 424, 469, 494, 503, 513, 706
  stop_hub_share          : 0.4889

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 15858.5490
  stop_liquidity          : 315

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 309.2676

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
    - car_services             : Orlen
    - university_campus        : Wydział Filozofii Uniwersytetu Jagiellońskiego
    - gastronomy               : Pod Kopytkiem
    - university_campus        : Ośrodek Informacji i Promocji Uniwersytetu Jagiellońskiego
    - business_office          : Redakcja miesięcznika Alma Mater
    - bank                     : Millennium Bank
    - micro_atm                : Bankomat Millennium
    - micro_atm                : Bankomat Millennium
    - culture_theatre          : Biblioteka Kraków Filia 25
    - micro_atm                : Euronet
```
</details>
<details><summary><b>Jubilat (ID: stop_237_31903 | H3: 891e2e6b393ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Jubilat
  stop_id                 : stop_237_31903
  h3_index                : 891e2e6b393ffff
  hub_id                  : 1530
  hub_name                : Jubilat
  is_hub_anchor           : True
  stop_lat                : 50.0565
  stop_lon                : 19.9271

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.9530
  stop_local_score_raw    : 1.6796

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 3673029.2048
  stop_raw_gravity        : 1159312.8034
  stop_entropy            : 2.1683

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 56.3571
  stop_routes_count       : 16
  stop_routes             : 124, 144, 164, 169, 173, 179, 194, 300, 301, 304, 310, 424, 494, 503, 513, 706
  stop_hub_share          : 0.5133

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 16800.6489
  stop_liquidity          : 388

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 371.3553

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
    - car_services             : Orlen
    - university_campus        : Ośrodek Informacji i Promocji Uniwersytetu Jagiellońskiego
    - gastronomy               : Aquarius - restaurant & cocktail bar
    - business_office          : Redakcja miesięcznika Alma Mater
    - bank                     : Millennium Bank
    - micro_atm                : Bankomat Millennium
    - micro_atm                : Bankomat Millennium
    - micro_atm                : Euronet
    - government_central       : Izba Celna w Krakowie
    - post_office              : Poczta Polska FUP Kraków 1
```
</details>
<details><summary><b>Jubilat (ID: stop_237_31904 | H3: 891e2e6b393ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Jubilat
  stop_id                 : stop_237_31904
  h3_index                : 891e2e6b393ffff
  hub_id                  : 1530
  hub_name                : Jubilat
  is_hub_anchor           : False
  stop_lat                : 50.0561
  stop_lon                : 19.9267

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.9296
  stop_local_score_raw    : 1.6554

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 3610659.6695
  stop_raw_gravity        : 1134122.0839
  stop_entropy            : 2.1837

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 53.4286
  stop_routes_count       : 16
  stop_routes             : 124, 144, 164, 169, 173, 179, 194, 300, 301, 304, 310, 424, 469, 494, 503, 513
  stop_hub_share          : 0.4867

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 17129.7921
  stop_liquidity          : 476

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 349.1378

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
    - car_services             : Orlen
    - gastronomy               : Aquarius - restaurant & cocktail bar
    - bank                     : Millennium Bank
    - micro_atm                : Bankomat Millennium
    - micro_atm                : Bankomat Millennium
    - micro_atm                : Euronet
    - government_central       : Izba Celna w Krakowie
    - post_office              : Poczta Polska FUP Kraków 1
    - convenience_store        : Delikatesy Kabanosik
    - personal_services        : Pazy Mazy
```
</details>
<details><summary><b>AGH / UR (ID: stop_1626_311102 | H3: 891e2e6b033ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : AGH / UR
  stop_id                 : stop_1626_311102
  h3_index                : 891e2e6b033ffff
  hub_id                  : 1544
  hub_name                : AGH / UR
  is_hub_anchor           : True
  stop_lat                : 50.0628
  stop_lon                : 19.9231

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.9061
  stop_local_score_raw    : 1.6252

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 10476280.4491
  stop_raw_gravity        : 5823592.9800
  stop_entropy            : 0.7989

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 56.5714
  stop_routes_count       : 17
  stop_routes             : 124, 144, 164, 169, 173, 179, 192, 194, 301, 304, 307, 310, 424, 469, 494, 503, 513
  stop_hub_share          : 0.9565

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 15492.6617
  stop_liquidity          : 84

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 138.8502

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 53x gastronomy
  > 45x park_recreation
  > 32x university_campus
  > 13x education_high_school
  > 10x convenience_store
  > 9x personal_services
  > 7x culture_theatre
  > 7x micro_atm
  > 6x health_clinic
  > 6x micro_parcel_locker
  > 4x micro_playground
  > 3x pharmacy
  > 3x hospital_clinical
  > 3x place_of_worship
  > 3x sports_centre
  > 2x specialized_retail
  > 2x business_office
  > 2x education_preschool
  > 1x bank

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - culture_theatre          : Teatr Groteska
    - gastronomy               : Dynia Resto Bar
    - gastronomy               : Pod Kopytkiem
    - education_high_school    : Ośrodek Szkolno-wychowawczy nr 1
    - convenience_store        : Avita
    - pharmacy                 : Czysta 5
    - university_campus        : Katedra Patofizjologii Collegium Medicum Uniwersytetu Jagiellońskiego
    - micro_atm                : Euronet
    - gastronomy               : Bun Bakery
    - gastronomy               : Spodek
```
</details>

#### POZIOM 1: NAJSLABSZE SLUPKI FIZYCZNE MICRO (BOTTOM 5)
<details><summary><b>KRAKÓW NOWA HUTA (ID: 178406 | H3: 891e2e61a6fffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : KRAKÓW NOWA HUTA
  stop_id                 : 178406
  h3_index                : 891e2e61a6fffff
  hub_id                  : 1709
  hub_name                : KRAKÓW NOWA HUTA
  is_hub_anchor           : True
  stop_lat                : 50.0902
  stop_lon                : 20.1287

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.1291
  stop_local_score_raw    : -1.9849

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0714
  stop_routes_count       : 1
  stop_routes             : KML
  stop_hub_share          : 1.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 10592.4296
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 4.9677

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Kocmyrzów Biblioteka (ID: stop_1344_300102 | H3: 891e2e61c77ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Kocmyrzów Biblioteka
  stop_id                 : stop_1344_300102
  h3_index                : 891e2e61c77ffff
  hub_id                  : 1571
  hub_name                : Kocmyrzów Biblioteka
  is_hub_anchor           : False
  stop_lat                : 50.1304
  stop_lon                : 20.1301

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.0939
  stop_local_score_raw    : -2.6569

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 319487.0913
  stop_raw_gravity        : 187326.9061
  stop_entropy            : 0.7055

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.4286
  stop_routes_count       : 1
  stop_routes             : 212
  stop_hub_share          : 0.5000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 16.4204
  stop_liquidity          : 1

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 127.4574

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x place_of_worship
  > 1x culture_theatre
  > 1x education_preschool

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - place_of_worship         : Kaplica pw. Świętej Jadwigi Królowej
    - culture_theatre          : Filia Gminnej Biblioteki Publicznej w Kocmyrzowie
    - education_preschool      : Przedszkole Niepubliczne z oddziałem integracyjnym Chata Wesołego Skrzata
```
</details>
<details><summary><b>Kocmyrzów Biblioteka (ID: stop_1344_300101 | H3: 891e2e61c77ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Kocmyrzów Biblioteka
  stop_id                 : stop_1344_300101
  h3_index                : 891e2e61c77ffff
  hub_id                  : 1571
  hub_name                : Kocmyrzów Biblioteka
  is_hub_anchor           : True
  stop_lat                : 50.1307
  stop_lon                : 20.1301

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.0704
  stop_local_score_raw    : -2.6621

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 335232.6787
  stop_raw_gravity        : 207008.2752
  stop_entropy            : 0.6194

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.4286
  stop_routes_count       : 1
  stop_routes             : 212
  stop_hub_share          : 0.5000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 16.4204
  stop_liquidity          : 1

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 117.8758

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x place_of_worship
  > 1x culture_theatre
  > 1x education_preschool

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - place_of_worship         : Kaplica pw. Świętej Jadwigi Królowej
    - culture_theatre          : Filia Gminnej Biblioteki Publicznej w Kocmyrzowie
    - education_preschool      : Przedszkole Niepubliczne z oddziałem integracyjnym Chata Wesołego Skrzata
```
</details>
<details><summary><b>Kocmyrzów Sodfiny (ID: stop_1348_300501 | H3: 891e2e61893ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Kocmyrzów Sodfiny
  stop_id                 : stop_1348_300501
  h3_index                : 891e2e61893ffff
  hub_id                  : 1081
  hub_name                : Kocmyrzów Sodfiny
  is_hub_anchor           : True
  stop_lat                : 50.1299
  stop_lon                : 20.1371

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.0470
  stop_local_score_raw    : -3.0631

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 4937.0238
  stop_raw_gravity        : 2503.3481
  stop_entropy            : 0.9722

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.4286
  stop_routes_count       : 1
  stop_routes             : 212
  stop_hub_share          : 0.5000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 16.4204
  stop_liquidity          : 1

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 88.8831

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x place_of_worship
  > 1x culture_theatre
  > 1x education_preschool

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - place_of_worship         : Kaplica pw. Świętej Jadwigi Królowej
    - culture_theatre          : Filia Gminnej Biblioteki Publicznej w Kocmyrzowie
    - education_preschool      : Przedszkole Niepubliczne z oddziałem integracyjnym Chata Wesołego Skrzata
```
</details>
<details><summary><b>Kocmyrzów Sodfiny (ID: stop_1348_300502 | H3: 891e2e61c2fffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Kocmyrzów Sodfiny
  stop_id                 : stop_1348_300502
  h3_index                : 891e2e61c2fffff
  hub_id                  : 1081
  hub_name                : Kocmyrzów Sodfiny
  is_hub_anchor           : False
  stop_lat                : 50.1302
  stop_lon                : 20.1375

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.0235
  stop_local_score_raw    : -3.2259

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 773.6279
  stop_raw_gravity        : 773.6279
  stop_entropy            : -0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.4286
  stop_routes_count       : 1
  stop_routes             : 212
  stop_hub_share          : 0.5000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 16.4204
  stop_liquidity          : 1

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 87.6569

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x education_preschool

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - education_preschool      : Przedszkole Niepubliczne z oddziałem integracyjnym Chata Wesołego Skrzata
```
</details>

#### POZIOM 2: NAJWAZNIEJSZE WEZLY LOGICZNE MACRO (TOP 5 HUBOW)
<details><summary><b>HUB: Muzeum Narodowe (ID: 1522 | H3: 891e2e6b02bffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Muzeum Narodowe
  hub_id                  : 1522
  h3_index                : 891e2e6b02bffff
  hub_stops_count         : 5
  hub_stops_ids           : 3416, 3417, stop_1654_314103, stop_1654_314104, stop_1654_314105
  lat                     : 50.0593
  lon                     : 19.9253

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 100.0000
  hub_local_score_raw     : 1.6467

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 24507724.9850
  hub_raw_gravity         : 11464735.7522
  hub_entropy             : 1.1377

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 125.3571
  hub_routes_count        : 22
  hub_routes              : 109, 124, 134, 144, 152, 164, 169, 173, 179, 192, 194, 300, 301, 304, 307, 310, 424, 469, 494, 503, 513, 706

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 15897.9656
  hub_liquidity           : 340

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 993.7438
```
</details>
<details><summary><b>HUB: Plac Inwalidów (ID: 441 | H3: 891e2e6b0a3ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Plac Inwalidów
  hub_id                  : 441
  h3_index                : 891e2e6b0a3ffff
  hub_stops_count         : 7
  hub_stops_ids           : 3427, 3428, stop_193_7919, stop_55_7901, stop_55_7903, stop_55_7904, stop_55_7971
  lat                     : 50.0689
  lon                     : 19.9267

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.9437
  hub_local_score_raw     : 1.6343

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 14931765.7191
  hub_raw_gravity         : 6325229.2283
  hub_entropy             : 1.3607

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 125.6429
  hub_routes_count        : 21
  hub_routes              : 4, 8, 20, 24, 124, 139, 152, 159, 169, 179, 192, 199, 301, 304, 307, 424, 469, 501, 503, 511, 513

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 14285.7143
  hub_liquidity           : 431

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 1713.5858
```
</details>
<details><summary><b>HUB: Teatr Słowackiego (ID: 683 | H3: 891e2e6b11bffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Teatr Słowackiego
  hub_id                  : 683
  h3_index                : 891e2e6b11bffff
  hub_stops_count         : 9
  hub_stops_ids           : 3319, 3320, stop_1921_324201, stop_1921_324202, stop_1921_324203, stop_852_324219, stop_852_324229, stop_852_324239, stop_852_324249
  lat                     : 50.0646
  lon                     : 19.9450

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.8873
  hub_local_score_raw     : 1.6084

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 21611590.4677
  hub_raw_gravity         : 8621489.4966
  hub_entropy             : 1.5067

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 132.5714
  hub_routes_count        : 15
  hub_routes              : 3, 4, 8, 14, 18, 20, 24, 50, 52, 75, 76, 124, 152, 424, 502

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 14769.6298
  hub_liquidity           : 243

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 809.2645
```
</details>
<details><summary><b>HUB: Biprostal (ID: 917 | H3: 891e2e6b097ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Biprostal
  hub_id                  : 917
  h3_index                : 891e2e6b097ffff
  hub_stops_count         : 7
  hub_stops_ids           : stop_195_8419, stop_195_8429, stop_60_8401, stop_60_8402, stop_60_8403, stop_60_8404, stop_60_8405
  lat                     : 50.0730
  lon                     : 19.9155

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.8310
  hub_local_score_raw     : 1.5950

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 26389655.0265
  hub_raw_gravity         : 11933623.3075
  hub_entropy             : 1.2114

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 74.5000
  hub_routes_count        : 8
  hub_routes              : 4, 8, 20, 24, 102, 144, 194, 494

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 15794.8837
  hub_liquidity           : 720

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 2960.3042
```
</details>
<details><summary><b>HUB: Politechnika (ID: 1512 | H3: 891e2e6b183ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Politechnika
  hub_id                  : 1512
  h3_index                : 891e2e6b183ffff
  hub_stops_count         : 11
  hub_stops_ids           : 3453, 3457, 3458, stop_189_7319, stop_189_7329, stop_189_7339, stop_189_7349, stop_51_7301, stop_51_7305, stop_51_7306, stop_51_7308
  lat                     : 50.0711
  lon                     : 19.9448

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.7746
  hub_local_score_raw     : 1.5832

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 18477278.6041
  hub_raw_gravity         : 9444944.5300
  hub_entropy             : 0.9563

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 136.4286
  hub_routes_count        : 17
  hub_routes              : 3, 5, 14, 17, 18, 50, 105, 129, 130, 132, 179, 189, 192, 304, 405, 501, 511

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 19138.6964
  hub_liquidity           : 481

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 302.5300
```
</details>

---

## KUTNO
#### DASHBOARD ASERCJI PIPELINE'U (Pelna Integralnosc Bazy)
```text
[PASS ZERO NULLS & INFS] Petla obliczeniowa wygenerowala 100% spojnych komorek.
[STATS] [PASS] Z-Score Micro VALID (Mean: 0.000, Std: 0.656)
        Rozklad Rang Slupkow (Micro): A: 22, A+: 12, B: 34, C: 45, D: 56, F: 55
[STATS] [PASS] Z-Score Macro VALID (Mean: -0.000, Std: 0.658)
        Rozklad Rang Hubow (Macro): A: 12, A+: 6, B: 17, C: 23, D: 29, F: 28
[DEMOGRAPHY] [PASS] DEMOGRAFIA W NORMIE: +9.2% (GUS strefa: 46,943 vs Baza miejska: 43,000)
[PASS] POI Parquet 100% Valid (Matematyka Huffa dziala)
[PASS] POP Parquet 100% Valid
[PASS] H3 Res 8 Grid 100% Valid (139 komorek, 11 pustyn transportowych)
```

### Faza 0: Statystyki Ogolne i Balans Sieci
- **Slupki Fizyczne (Micro):** 224 slupkow
- **Wezly Logiczne (Macro Hubs):** 115 hubow (Wskaznik konsolidacji: 1.95 slupka/hub)
- **Populacja Strefy Transportowej (GUS 250m):** 46,943 mieszkancow
- **Transakcje Notarialne RCN:** 533 aktow
### Faza 1: Siatka Analityczna Uber H3 Res 8 (0.74 km2 / komorka)
- **Liczba Komorek H3 Res 8:** 139
- **Rynek Nieruchomosci RCN w Heksach:** Pokrycie 25.2% (35/139 komorek), Srednia: 4,219 PLN/m2, Mediana: 3,974 PLN/m2, Std: 2,229, Min: 485, Max: 9,991 PLN/m2
- **Demografia GUS NSP 2021 w Heksach:** Laczna ludnosc w heksach: 46,943, Srednia/heks: 337.7, Mediana: 47.0, Std: 943.9, Max: 5,292
- **Podaz Transportu w Heksach:** Sredni Transport Score: 10.51, Max Transport Score: 100.00, Srednia odjazdow/h: 5.97, Pustynie Transportowe TDI: 11

#### TOP 5 Pustyn Transportowych (The Investment List)
| H3 Index | Lat | Lon | Populacja GUS | Odjazdy/h | TDI Score |
|---|---|---|---|---|---|
| `881f52c991fffff` | 52.21717 | 19.34848 | 629 | 0.0 | **67.63** |
| `881f52c993fffff` | 52.21481 | 19.36125 | 462 | 0.0 | **64.40** |
| `881f52c995fffff` | 52.21209 | 19.33818 | 257 | 0.0 | **58.26** |
| `881f52c8e1fffff` | 52.25197 | 19.34890 | 183 | 0.0 | **54.72** |
| `881f52c8b3fffff` | 52.23275 | 19.41525 | 176 | 0.0 | **54.31** |

#### TOP 5 Biegunow Transportu (Najwyzsza Podaz)
| H3 Index | Lat | Lon | Transport Score | Odjazdy/h | Liczba Slupkow |
|---|---|---|---|---|---|
| `881f52c8a7fffff` | 52.22732 | 19.36909 | **100.00** | 79.3 | 8 |
| `881f52c8a1fffff` | 52.23475 | 19.36662 | **100.00** | 83.9 | 8 |
| `881f52c8adfffff` | 52.23711 | 19.35384 | **100.00** | 70.2 | 11 |
| `881f52c999fffff` | 52.22460 | 19.34601 | **98.70** | 55.2 | 15 |
| `881f525249fffff` | 52.22496 | 19.38186 | **81.70** | 61.7 | 6 |

#### TOP 5 Najdrozszych Heksow Mieszkaniowych RCN
| H3 Index | Lat | Lon | Mediana Ceny m2 | Liczba Transakcji |
|---|---|---|---|---|
| `881f52c8e3fffff` | 52.24962 | 19.36168 | **9,991 PLN** | 3 |
| `881f525245fffff` | 52.21245 | 19.37402 | **7,463 PLN** | 90 |
| `881f52c887fffff` | 52.24490 | 19.38724 | **6,750 PLN** | 69 |
| `881f52c8a3fffff` | 52.23240 | 19.37939 | **6,591 PLN** | 77 |
| `881f52c837fffff` | 52.24417 | 19.31552 | **6,566 PLN** | 7 |

### Faza 2: Audyt Zbednosci TCRP Report 100 (The Axe List)
- **Zbedne Slupki (R >= 0.50 - Umiarkowana Kanibalizacja):** 113
- **Zbedne Slupki (R >= 0.70 - Rekomendacja Likwidacji):** 99
- **Zbedne Slupki (R >= 0.90 - Skrajna Zbednosc / Dubel):** 57

| Zbedny Słupek | Dominujacy Słupek | Dystans [m] | S_service | S_spatial | S_cannibal | R-Score |
|---|---|---|---|---|---|---|
| Orzeszkowej (#208, 1.2142857142857142 odj/h) | Orzeszkowej (#209, 1.4285714285714286 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |
| Dybów (#62, 1.1428571428571428 odj/h) | Dybów (#61, 1.1428571428571428 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |
| Dybów (#61, 1.1428571428571428 odj/h) | Dybów (#62, 1.1428571428571428 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |
| Sklęczkowska / Odlewnia (#86, 0.7857142857142857 odj/h) | Sklęczkowska / Odlewnia (#87, 0.8571428571428571 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |
| Józefów / Holenderska (#78, 1.1428571428571428 odj/h) | Józefów / Holenderska (#79, 1.2857142857142858 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |

### Faza 3: Hierarchia Magnesow Miejskich POI

#### Top 20 Kategorii POI w Miescie
| Kategoria | Tier | Ilosc w Miescie | Wartosc Punktowa (W) |
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

#### TOP 10 Konkretnych Nazwanych Magnesow Miejskich (T0, T1, T2)
| Nazwa Obiektu | Kategoria POI | Tier | Waga Przyciagania (W) |
|---|---|---|---|
| **Kutno** | `national_rail_hub` | T0_MEGA_HUB | 27,709,492 |
| **Kutnowski Szpital Samorządowy Sp. z o.o. im. dr Antoniego Troczewskiego** | `hospital_clinical` | T1_NATIONAL_MAGNET | 20,648,167 |
| **Stadion Miejski im. Henryka Reymana** | `national_stadium` | T1_NATIONAL_MAGNET | 17,423,863 |
| **Zespół Szkół Nr 4 im. Zygmunta Balickiego w Kutnie-Azorach** | `university_campus` | T1_NATIONAL_MAGNET | 13,369,038 |
| **Akademia Nauk Stosowanych Gospodarki Krajowej w Kutnie** | `university_campus` | T1_NATIONAL_MAGNET | 13,369,038 |
| **Sekcja Zasilania Elektroenergetycznego Kutno** | `industrial_zone` | T2_STRATEGIC_HUB | 4,181,467 |
| **Przedsiębiorstwo Robót Drogowych w Kutnie** | `industrial_zone` | T2_STRATEGIC_HUB | 4,181,467 |
| **Bury Maszyny Rolnicze** | `industrial_zone` | T2_STRATEGIC_HUB | 4,181,467 |
| **Chalzen** | `industrial_zone` | T2_STRATEGIC_HUB | 4,181,467 |
| **Miejski Zakład Komunikacji Sp. z o.o. w Kutnie** | `industrial_zone` | T2_STRATEGIC_HUB | 4,181,467 |

### Faza 4: Probki Pelnego DNA (Wszystkie 53 Metryki)

#### POZIOM 1: NAJLEPSZE SLUPKI FIZYCZNE MICRO (TOP 5)
<details><summary><b>Jana Pawła II (ID: 27 | H3: 891f52c8a0bffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Jana Pawła II
  stop_id                 : 27
  h3_index                : 891f52c8a0bffff
  hub_id                  : 102
  hub_name                : Jana Pawła II
  is_hub_anchor           : True
  stop_lat                : 52.2316
  stop_lon                : 19.3653

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 100.0000
  stop_local_score_raw    : 1.4047

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 2549432.8705
  stop_raw_gravity        : 963210.7869
  stop_entropy            : 1.6468

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 9.5714
  stop_routes_count       : 11
  stop_routes             : 1, 2, 3, 4, 5, 7, 9, 10, 11, 12, 14
  stop_hub_share          : 0.5174

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 5754.9400
  stop_liquidity          : 66

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 466.6010

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
    - micro_atm                : Bankomat Cash4You
    - micro_atm                : Bankomat BZ WBK
    - gastronomy               : Jana
    - car_services             : Shell
    - bank                     : Bank Pekao
    - car_services             : Carrefour
    - convenience_store        : Malwina 24h
    - convenience_store        : Żabka
    - convenience_store        : Żabka
    - gastronomy               : Pizzeria Papa Doriano
```
</details>
<details><summary><b>Jana Pawła II (ID: 14 | H3: 891f52c8a0bffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Jana Pawła II
  stop_id                 : 14
  h3_index                : 891f52c8a0bffff
  hub_id                  : 102
  hub_name                : Jana Pawła II
  is_hub_anchor           : False
  stop_lat                : 52.2319
  stop_lon                : 19.3652

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.5536
  stop_local_score_raw    : 1.3661

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 3170260.1460
  stop_raw_gravity        : 1083701.8928
  stop_entropy            : 1.9254

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 8.9286
  stop_routes_count       : 11
  stop_routes             : 1, 2, 3, 4, 5, 7, 9, 10, 11, 12, 14
  stop_hub_share          : 0.4826

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 5487.5709
  stop_liquidity          : 64

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 486.5497

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 15x specialized_retail
  > 13x gastronomy
  > 13x convenience_store
  > 10x bank
  > 10x pharmacy
  > 9x personal_services
  > 8x micro_atm
  > 6x education_high_school
  > 5x car_services
  > 5x micro_parcel_locker
  > 4x supermarket
  > 4x micro_playground
  > 4x park_recreation
  > 3x education_preschool
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
    - micro_atm                : Bankomat Cash4You
    - micro_atm                : Bankomat BZ WBK
    - gastronomy               : Jana
    - car_services             : Shell
    - bank                     : Bank Pekao
    - car_services             : Carrefour
    - convenience_store        : Malwina 24h
    - convenience_store        : Żabka
    - convenience_store        : Żabka
    - gastronomy               : Pizzeria Papa Doriano
```
</details>
<details><summary><b>Wyszyńskiego (ID: 31 | H3: 891f52c8a73ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Wyszyńskiego
  stop_id                 : 31
  h3_index                : 891f52c8a73ffff
  hub_id                  : 10
  hub_name                : Wyszyńskiego
  is_hub_anchor           : True
  stop_lat                : 52.2301
  stop_lon                : 19.3658

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.1071
  stop_local_score_raw    : 1.3633

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 2603471.4010
  stop_raw_gravity        : 986376.2893
  stop_entropy            : 1.6394

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 8.4286
  stop_routes_count       : 10
  stop_routes             : 2, 3, 4, 5, 7, 9, 10, 11, 12, 14
  stop_hub_share          : 0.5175

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 5744.6809
  stop_liquidity          : 69

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 710.5458

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
    - micro_atm                : Bankomat Cash4You
    - micro_atm                : Bankomat BZ WBK
    - gastronomy               : Jana
    - car_services             : Shell
    - car_services             : Carrefour
    - convenience_store        : Malwina 24h
    - convenience_store        : Żabka
    - convenience_store        : Żabka
    - gastronomy               : Restauracja Lawenda
    - bank                     : Bank Pekao
```
</details>
<details><summary><b>Wyszyńskiego (ID: 15 | H3: 891f52c8a73ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Wyszyńskiego
  stop_id                 : 15
  h3_index                : 891f52c8a73ffff
  hub_id                  : 10
  hub_name                : Wyszyńskiego
  is_hub_anchor           : False
  stop_lat                : 52.2299
  stop_lon                : 19.3663

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 98.6607
  stop_local_score_raw    : 1.3433

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 3357210.9926
  stop_raw_gravity        : 1235855.5826
  stop_entropy            : 1.7165

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 7.8571
  stop_routes_count       : 10
  stop_routes             : 2, 3, 4, 5, 7, 9, 10, 11, 12, 14
  stop_hub_share          : 0.4825

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 5765.1992
  stop_liquidity          : 67

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 690.5182

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 12x convenience_store
  > 9x specialized_retail
  > 9x pharmacy
  > 8x gastronomy
  > 6x micro_atm
  > 6x micro_parcel_locker
  > 5x car_services
  > 4x bank
  > 4x personal_services
  > 4x supermarket
  > 4x education_preschool
  > 4x education_high_school
  > 3x micro_playground
  > 2x government_central
  > 2x industrial_zone
  > 2x sports_centre
  > 2x health_clinic
  > 2x park_recreation
  > 1x place_of_worship
  > 1x culture_theatre
  > 1x post_office
  > 1x shopping_mall

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm                : Bankomat Cash4You
    - micro_atm                : Bankomat BZ WBK
    - gastronomy               : Jana
    - car_services             : Shell
    - car_services             : Carrefour
    - convenience_store        : Malwina 24h
    - convenience_store        : Żabka
    - convenience_store        : Żabka
    - gastronomy               : Restauracja Lawenda
    - bank                     : Santander
```
</details>
<details><summary><b>Grunwaldzka (ID: 32 | H3: 891f52c8a77ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Grunwaldzka
  stop_id                 : 32
  h3_index                : 891f52c8a77ffff
  hub_id                  : 30
  hub_name                : Grunwaldzka
  is_hub_anchor           : True
  stop_lat                : 52.2288
  stop_lon                : 19.3727

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 98.2143
  stop_local_score_raw    : 1.2732

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 4054168.4178
  stop_raw_gravity        : 2118655.0839
  stop_entropy            : 0.9136

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 6.7143
  stop_routes_count       : 7
  stop_routes             : 3, 4, 5, 7, 9, 10, 14
  stop_hub_share          : 0.5137

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 5746.1407
  stop_liquidity          : 23

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 765.1420

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
    - supermarket              : Aldi
    - car_services             : Carrefour
    - bank                     : Santander
    - bank                     : Bank Pekao
    - place_of_worship         : Kościół Zielonoświątkowy
    - car_services             : Wasbruk
    - education_high_school    : Zakład Doskonalenia Zawodowego w Warszawie Centrum Kształcenia w Kutnie
    - micro_parcel_locker      : Paczkomat InPost
    - pharmacy                 : Dr. Max
    - pharmacy                 : Medest Iii
```
</details>

#### POZIOM 1: NAJSLABSZE SLUPKI FIZYCZNE MICRO (BOTTOM 5)
<details><summary><b>Kuczków I (ID: 152 | H3: 891f52c88d3ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Kuczków I
  stop_id                 : 152
  h3_index                : 891f52c88d3ffff
  hub_id                  : 79
  hub_name                : Kuczków I
  is_hub_anchor           : False
  stop_lat                : 52.2576
  stop_lon                : 19.3707

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 2.2321
  stop_local_score_raw    : -1.5047

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.7857
  stop_routes_count       : 1
  stop_routes             : 5
  stop_hub_share          : 0.5000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 6346.7492
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 13.3067

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Kuczków I (ID: 151 | H3: 891f52c88d3ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Kuczków I
  stop_id                 : 151
  h3_index                : 891f52c88d3ffff
  hub_id                  : 79
  hub_name                : Kuczków I
  is_hub_anchor           : True
  stop_lat                : 52.2576
  stop_lon                : 19.3706

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 1.7857
  stop_local_score_raw    : -1.5052

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.7857
  stop_routes_count       : 1
  stop_routes             : 5
  stop_hub_share          : 0.5000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 6346.7492
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 13.2367

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Lotnicza (ID: 280 | H3: 891f525202fffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Lotnicza
  stop_id                 : 280
  h3_index                : 891f525202fffff
  hub_id                  : 105
  hub_name                : Lotnicza
  is_hub_anchor           : False
  stop_lat                : 52.1966
  stop_lon                : 19.4166

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 1.3393
  stop_local_score_raw    : -1.6238

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.4286
  stop_routes_count       : 1
  stop_routes             : 1
  stop_hub_share          : 0.5000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 6346.7492
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 20.5050

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Lotnicza (ID: 279 | H3: 891f525202fffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Lotnicza
  stop_id                 : 279
  h3_index                : 891f525202fffff
  hub_id                  : 105
  hub_name                : Lotnicza
  is_hub_anchor           : True
  stop_lat                : 52.1966
  stop_lon                : 19.4167

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.8929
  stop_local_score_raw    : -1.6239

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.4286
  stop_routes_count       : 1
  stop_routes             : 1
  stop_hub_share          : 0.5000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 6346.7492
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 20.4950

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Raciborów Kutnowski (ID: 32334 | H3: 891f52caa4fffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Raciborów Kutnowski
  stop_id                 : 32334
  h3_index                : 891f52caa4fffff
  hub_id                  : 63
  hub_name                : Raciborów Kutnowski
  is_hub_anchor           : True
  stop_lat                : 52.2805
  stop_lon                : 19.3416

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.4464
  stop_local_score_raw    : -1.7279

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 6346.7492
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 110.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>

#### POZIOM 2: NAJWAZNIEJSZE WEZLY LOGICZNE MACRO (TOP 5 HUBOW)
<details><summary><b>HUB: Jana Pawła II (ID: 102 | H3: 891f52c8a0bffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Jana Pawła II
  hub_id                  : 102
  h3_index                : 891f52c8a0bffff
  hub_stops_count         : 2
  hub_stops_ids           : 14, 27
  lat                     : 52.2318
  lon                     : 19.3652

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 100.0000
  hub_local_score_raw     : 1.3068

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 5327774.0723
  hub_raw_gravity         : 1889490.6758
  hub_entropy             : 1.8197

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 18.5000
  hub_routes_count        : 11
  hub_routes              : 1, 2, 3, 4, 5, 7, 9, 10, 11, 12, 14

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 5495.6897
  hub_liquidity           : 71

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 909.2114
```
</details>
<details><summary><b>HUB: Wyszyńskiego (ID: 10 | H3: 891f52c8a73ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Wyszyńskiego
  hub_id                  : 10
  h3_index                : 891f52c8a73ffff
  hub_stops_count         : 2
  hub_stops_ids           : 15, 31
  lat                     : 52.2301
  lon                     : 19.3661

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.1304
  hub_local_score_raw     : 1.2946

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 5595922.9165
  hub_raw_gravity         : 2090280.2104
  hub_entropy             : 1.6771

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 16.2857
  hub_routes_count        : 10
  hub_routes              : 2, 3, 4, 5, 7, 9, 10, 11, 12, 14

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 5744.6809
  hub_liquidity           : 69

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 1346.1189
```
</details>
<details><summary><b>HUB: Grunwaldzka (ID: 30 | H3: 891f52c8a77ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Grunwaldzka
  hub_id                  : 30
  h3_index                : 891f52c8a77ffff
  hub_stops_count         : 2
  hub_stops_ids           : 16, 32
  lat                     : 52.2288
  lon                     : 19.3722

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 98.2609
  hub_local_score_raw     : 1.2349

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 7541979.2235
  hub_raw_gravity         : 3789387.8858
  hub_entropy             : 0.9903

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 13.0714
  hub_routes_count        : 7
  hub_routes              : 3, 4, 5, 7, 9, 10, 14

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 6016.5975
  hub_liquidity           : 27

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 1507.4000
```
</details>
<details><summary><b>HUB: Chrobrego (ID: 45 | H3: 891f5252493ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Chrobrego
  hub_id                  : 45
  h3_index                : 891f5252493ffff
  hub_stops_count         : 2
  hub_stops_ids           : 17, 33
  lat                     : 52.2279
  lon                     : 19.3790

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 97.3913
  hub_local_score_raw     : 1.1518

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 3251527.9443
  hub_raw_gravity         : 1568554.3474
  hub_entropy             : 1.0729

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 13.0714
  hub_routes_count        : 7
  hub_routes              : 3, 4, 5, 7, 9, 10, 14

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 6044.9050
  hub_liquidity           : 29

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 1385.2530
```
</details>
<details><summary><b>HUB: Barlickiego (ID: 61 | H3: 891f52c8a57ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Barlickiego
  hub_id                  : 61
  h3_index                : 891f52c8a57ffff
  hub_stops_count         : 2
  hub_stops_ids           : 159, 160
  lat                     : 52.2324
  lon                     : 19.3612

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 96.5217
  hub_local_score_raw     : 1.1482

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 2741184.3547
  hub_raw_gravity         : 989418.5306
  hub_entropy             : 1.7705

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 14.0714
  hub_routes_count        : 9
  hub_routes              : 1, 2, 3, 5, 6, 7, 11, 12, 14

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 5744.6809
  hub_liquidity           : 65

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 1301.3579
```
</details>

---

## LEGNICA
#### DASHBOARD ASERCJI PIPELINE'U (Pelna Integralnosc Bazy)
```text
[PASS ZERO NULLS & INFS] Petla obliczeniowa wygenerowala 100% spojnych komorek.
[STATS] [PASS] Z-Score Micro VALID (Mean: 0.000, Std: 0.743)
        Rozklad Rang Slupkow (Micro): A: 35, A+: 18, B: 53, C: 72, D: 88, F: 87
[STATS] [PASS] Z-Score Macro VALID (Mean: 0.000, Std: 0.745)
        Rozklad Rang Hubow (Macro): A: 23, A+: 12, B: 34, C: 45, D: 57, F: 56
[DEMOGRAPHY] [INFO] OBSZAR AGLOMERACYJNY: +25.5% (GUS strefa aglomeracyjna: 112,987 vs Miasto rdzen: 90,000)
[PASS] POI Parquet 100% Valid (Matematyka Huffa dziala)
[PASS] POP Parquet 100% Valid
[PASS] H3 Res 8 Grid 100% Valid (506 komorek, 39 pustyn transportowych)
```

### Faza 0: Statystyki Ogolne i Balans Sieci
- **Slupki Fizyczne (Micro):** 353 slupkow
- **Wezly Logiczne (Macro Hubs):** 227 hubow (Wskaznik konsolidacji: 1.56 slupka/hub)
- **Populacja Strefy Transportowej (GUS 250m):** 112,987 mieszkancow
- **Transakcje Notarialne RCN:** 17,704 aktow
### Faza 1: Siatka Analityczna Uber H3 Res 8 (0.74 km2 / komorka)
- **Liczba Komorek H3 Res 8:** 506
- **Rynek Nieruchomosci RCN w Heksach:** Pokrycie 74.1% (375/506 komorek), Srednia: 3,384 PLN/m2, Mediana: 3,118 PLN/m2, Std: 2,267, Min: 148, Max: 30,023 PLN/m2
- **Demografia GUS NSP 2021 w Heksach:** Laczna ludnosc w heksach: 112,987, Srednia/heks: 223.3, Mediana: 0.0, Std: 920.5, Max: 8,743
- **Podaz Transportu w Heksach:** Sredni Transport Score: 6.57, Max Transport Score: 100.00, Srednia odjazdow/h: 3.68, Pustynie Transportowe TDI: 39

#### TOP 5 Pustyn Transportowych (The Investment List)
| H3 Index | Lat | Lon | Populacja GUS | Odjazdy/h | TDI Score |
|---|---|---|---|---|---|
| `881e263ab5fffff` | 51.22546 | 16.15584 | 1,331 | 0.0 | **75.48** |
| `881e2622cdfffff` | 51.27578 | 16.36255 | 1,278 | 0.0 | **75.06** |
| `881e2638e3fffff` | 51.19228 | 16.14443 | 993 | 0.0 | **72.41** |
| `881e26233dfffff` | 51.21854 | 16.24137 | 535 | 0.0 | **65.93** |
| `881e2622c1fffff` | 51.27371 | 16.37517 | 520 | 0.0 | **65.64** |

#### TOP 5 Biegunow Transportu (Najwyzsza Podaz)
| H3 Index | Lat | Lon | Transport Score | Odjazdy/h | Liczba Slupkow |
|---|---|---|---|---|---|
| `881e262327fffff` | 51.20774 | 16.22165 | **100.00** | 132.7 | 6 |
| `881e26389bfffff` | 51.20233 | 16.21180 | **100.00** | 122.9 | 8 |
| `881e263899fffff` | 51.20439 | 16.19919 | **100.00** | 65.4 | 4 |
| `881e263889fffff` | 51.20309 | 16.16412 | **100.00** | 57.4 | 4 |
| `881e2638c3fffff` | 51.21055 | 16.16136 | **100.00** | 84.1 | 7 |

#### TOP 5 Najdrozszych Heksow Mieszkaniowych RCN
| H3 Index | Lat | Lon | Mediana Ceny m2 | Liczba Transakcji |
|---|---|---|---|---|
| `881e263853fffff` | 51.22619 | 16.10815 | **30,023 PLN** | 4 |
| `881e2638ddfffff` | 51.21595 | 16.17121 | **8,964 PLN** | 121 |
| `881e263881fffff` | 51.19563 | 16.16688 | **8,892 PLN** | 207 |
| `881e26331bfffff` | 51.35875 | 16.15382 | **8,409 PLN** | 13 |
| `881e26ad03fffff` | 51.42547 | 16.25973 | **8,280 PLN** | 2 |

### Faza 2: Audyt Zbednosci TCRP Report 100 (The Axe List)
- **Zbedne Slupki (R >= 0.50 - Umiarkowana Kanibalizacja):** 150
- **Zbedne Slupki (R >= 0.70 - Rekomendacja Likwidacji):** 133
- **Zbedne Slupki (R >= 0.90 - Skrajna Zbednosc / Dubel):** 76

| Zbedny Słupek | Dominujacy Słupek | Dystans [m] | S_service | S_spatial | S_cannibal | R-Score |
|---|---|---|---|---|---|---|
| Księginice - Sad (#2092, 0.7142857142857143 odj/h) | Księginice - Sad (#2091, 0.7142857142857143 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |
| Myrka - Pętla (#1763, 0.9285714285714286 odj/h) | Myrka - Pętla (#1762, 0.9285714285714286 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |
| Myrka - Pętla (#1762, 0.9285714285714286 odj/h) | Myrka - Pętla (#1763, 0.9285714285714286 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |
| Gniewomierz - Nr 61B (#2081, 0.35714285714285715 odj/h) | Gniewomierz - Nr 61B (#2080, 0.35714285714285715 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |
| Gniewomierz - Nr 61B (#2080, 0.35714285714285715 odj/h) | Gniewomierz - Nr 61B (#2081, 0.35714285714285715 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |

### Faza 3: Hierarchia Magnesow Miejskich POI

#### Top 20 Kategorii POI w Miescie
| Kategoria | Tier | Ilosc w Miescie | Wartosc Punktowa (W) |
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

#### TOP 10 Konkretnych Nazwanych Magnesow Miejskich (T0, T1, T2)
| Nazwa Obiektu | Kategoria POI | Tier | Waga Przyciagania (W) |
|---|---|---|---|
| **Legnica** | `national_rail_hub` | T0_MEGA_HUB | 30,655,712 |
| **Wojewódzki Szpital Specjalistyczny w Legnicy** | `hospital_clinical` | T1_NATIONAL_MAGNET | 26,487,611 |
| **Collegium Witelona Uczelnia Państwowa** | `university_campus` | T1_NATIONAL_MAGNET | 16,827,439 |
| **Politechnika Wrocławska** | `university_campus` | T1_NATIONAL_MAGNET | 14,649,137 |
| **Wyższe Seminarium Duchowne** | `university_campus` | T1_NATIONAL_MAGNET | 14,649,137 |
| **Galeria Auchan** | `shopping_mall` | T2_STRATEGIC_HUB | 4,207,416 |
| **CH Piekary** | `shopping_mall` | T2_STRATEGIC_HUB | 4,207,416 |
| **Galeria DGB** | `shopping_mall` | T2_STRATEGIC_HUB | 4,207,416 |
| **Galeria Ferio** | `shopping_mall` | T2_STRATEGIC_HUB | 4,207,416 |
| **Czerwona Torebka** | `shopping_mall` | T2_STRATEGIC_HUB | 4,207,416 |

### Faza 4: Probki Pelnego DNA (Wszystkie 53 Metryki)

#### POZIOM 1: NAJLEPSZE SLUPKI FIZYCZNE MICRO (TOP 5)
<details><summary><b>Iwaszkiewicza - Pętla (ID: 2024 | H3: 891e2623263ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Iwaszkiewicza - Pętla
  stop_id                 : 2024
  h3_index                : 891e2623263ffff
  hub_id                  : 45
  hub_name                : Iwaszkiewicza - Pętla
  is_hub_anchor           : True
  stop_lat                : 51.2070
  stop_lon                : 16.2198

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 100.0000
  stop_local_score_raw    : 1.4609

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 3042329.5013
  stop_raw_gravity        : 2581579.2829
  stop_entropy            : 0.1785

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 29.7143
  stop_routes_count       : 9
  stop_routes             : 3, 6, 8, 15, 16, 18, 23, 25, 38
  stop_hub_share          : 0.8078

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 4950.2982
  stop_liquidity          : 175

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 445.6571

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
    - police_station           : Staffa 2
    - education_preschool      : Przedszkole Niepubliczne Tęczowy Zakątek
    - specialized_retail       : KiK
    - micro_parcel_locker      : Paczkomat InPost
    - micro_atm                : Euronet
    - health_clinic            : RCKiK we Wrocławiu TO Legnica
    - pharmacy                 : Lekosfera
    - pharmacy                 : Dr. Max
    - convenience_store        : abc
    - personal_services        : Wonder Woman
```
</details>
<details><summary><b>Piłsudskiego - Heweliusza (ID: 1790 | H3: 891e2638d63ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Piłsudskiego - Heweliusza
  stop_id                 : 1790
  h3_index                : 891e2638d63ffff
  hub_id                  : 5
  hub_name                : Piłsudskiego - Galaktyczna
  is_hub_anchor           : False
  stop_lat                : 51.2053
  stop_lon                : 16.1865

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.7167
  stop_local_score_raw    : 1.3079

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 2287488.9461
  stop_raw_gravity        : 1384331.2666
  stop_entropy            : 0.6524

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 15.0714
  stop_routes_count       : 8
  stop_routes             : 3, 6, 8, 15, 16, 18, 23, 28
  stop_hub_share          : 0.4988

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 5322.8744
  stop_liquidity          : 339

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 1735.4904

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 13x micro_playground
  > 9x micro_parcel_locker
  > 8x convenience_store
  > 8x personal_services
  > 7x supermarket
  > 6x pharmacy
  > 5x education_preschool
  > 4x education_high_school
  > 4x gastronomy
  > 3x car_services
  > 3x health_clinic
  > 2x post_office
  > 2x micro_atm
  > 2x marketplace
  > 2x sports_centre
  > 2x specialized_retail
  > 2x park_recreation
  > 1x culture_theatre
  > 1x bank
  > 1x business_office
  > 1x shopping_mall
  > 1x place_of_worship
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - post_office              : Poczta Polska
    - car_services             : Orlen
    - supermarket              : Intermarché
    - education_high_school    : Szkoła Podstawowa nr 7
    - car_services             : BP Orbita
    - culture_theatre          : Legnicka Biblioteka Publiczna - filia nr 4
    - gastronomy               : Vikos
    - bank                     : PKO BP
    - marketplace              : Targowisko
    - education_preschool      : M. Przedszkole nr. 6
```
</details>
<details><summary><b>Piłsudskiego - Galaktyczna (ID: 1799 | H3: 891e2638d63ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Piłsudskiego - Galaktyczna
  stop_id                 : 1799
  h3_index                : 891e2638d63ffff
  hub_id                  : 5
  hub_name                : Piłsudskiego - Galaktyczna
  is_hub_anchor           : True
  stop_lat                : 51.2058
  stop_lon                : 16.1854

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.4334
  stop_local_score_raw    : 1.2801

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 1918637.9438
  stop_raw_gravity        : 1082613.1097
  stop_entropy            : 0.7722

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 15.1429
  stop_routes_count       : 8
  stop_routes             : 3, 6, 8, 15, 16, 18, 23, 28
  stop_hub_share          : 0.5012

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 5218.2163
  stop_liquidity          : 381

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 1568.5478

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
    - post_office              : Poczta Polska
    - gastronomy               : Had Food
    - car_services             : Orlen
    - supermarket              : Intermarché
    - education_high_school    : Szkoła Podstawowa nr 7
    - car_services             : BP Orbita
    - culture_theatre          : Legnicka Biblioteka Publiczna - filia nr 4
    - gastronomy               : Vikos
    - bank                     : PKO BP
    - marketplace              : Targowisko
```
</details>
<details><summary><b>Witelona - Pl. Wilsona (ID: 1853 | H3: 891e2638d5bffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Witelona - Pl. Wilsona
  stop_id                 : 1853
  h3_index                : 891e2638d5bffff
  hub_id                  : 57
  hub_name                : Witelona - Pl. Wilsona
  is_hub_anchor           : True
  stop_lat                : 51.2090
  stop_lon                : 16.1673

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.1501
  stop_local_score_raw    : 1.2420

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 11145831.7102
  stop_raw_gravity        : 3815547.4091
  stop_entropy            : 1.9212

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 12.8571
  stop_routes_count       : 8
  stop_routes             : 3, 6, 9, 15, 16, 20, 24, 26
  stop_hub_share          : 1.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 4784.6985
  stop_liquidity          : 419

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 736.7768

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 29x gastronomy
  > 14x bank
  > 12x convenience_store
  > 9x specialized_retail
  > 9x park_recreation
  > 9x commercial_zone
  > 8x place_of_worship
  > 8x micro_parcel_locker
  > 7x government_central
  > 7x personal_services
  > 7x pharmacy
  > 5x micro_atm
  > 4x culture_theatre
  > 3x post_office
  > 3x health_clinic
  > 3x micro_playground
  > 3x education_high_school
  > 2x supermarket
  > 2x business_office
  > 1x police_station
  > 1x shopping_mall
  > 1x education_preschool
  > 1x industrial_zone
  > 1x car_services

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - culture_theatre          : Piast
    - government_central       : Urząd Miejski w Legnicy
    - gastronomy               : Restauracja Hong Ha
    - culture_theatre          : Helios
    - bank                     : Millennium Bank
    - gastronomy               : Don Giovanni
    - gastronomy               : Art Cafe Modjeska
    - post_office              : Urząd Pocztowy Legnica II
    - post_office              : Poczta Polska
    - convenience_store        : Piekarnictwo Dworok Sp.j.
```
</details>
<details><summary><b>Skarbka - Mickiewicza (ID: 1825 | H3: 891e2638893ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Skarbka - Mickiewicza
  stop_id                 : 1825
  h3_index                : 891e2638893ffff
  hub_id                  : 44
  hub_name                : Skarbka - Pl. Słowiański
  is_hub_anchor           : False
  stop_lat                : 51.2054
  stop_lon                : 16.1620

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 98.8669
  stop_local_score_raw    : 1.2406

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 6023451.9106
  stop_raw_gravity        : 2441623.3931
  stop_entropy            : 1.4670

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 12.7143
  stop_routes_count       : 8
  stop_routes             : 3, 6, 9, 15, 16, 20, 24, 26
  stop_hub_share          : 0.4986

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 4514.0425
  stop_liquidity          : 950

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 1554.1579

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
    - government_central       : Urząd Miejski w Legnicy
    - gastronomy               : Restauracja Hong Ha
    - bank                     : Santander
    - government_central       : Sąd Okręgowy
    - government_central       : Sąd Rejonowy wyd. Karny i Gospodarczy
    - bank                     : Millennium Bank
    - gastronomy               : Don Giovanni
    - gastronomy               : Art Cafe Modjeska
    - gastronomy               : Kolorowa
    - gastronomy               : Tivoli
```
</details>

#### POZIOM 1: NAJSLABSZE SLUPKI FIZYCZNE MICRO (BOTTOM 5)
<details><summary><b>Rzeszotary - Ul. Wiejska Nr 93 (ID: 2070 | H3: 891e263a9c7ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Rzeszotary - Ul. Wiejska Nr 93
  stop_id                 : 2070
  h3_index                : 891e263a9c7ffff
  hub_id                  : 58
  hub_name                : Rzeszotary - Ul. Wiejska Nr 93
  is_hub_anchor           : True
  stop_lat                : 51.2510
  stop_lon                : 16.1731

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 1.4164
  stop_local_score_raw    : -1.6082

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.2857
  stop_routes_count       : 1
  stop_routes             : 8
  stop_hub_share          : 0.5000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 1500.0000
  stop_liquidity          : 1

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 122.1766

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Ogonowice - Nr 19 (ID: 2127 | H3: 891e262aadbffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Ogonowice - Nr 19
  stop_id                 : 2127
  h3_index                : 891e262aadbffff
  hub_id                  : 53
  hub_name                : Ogonowice - Nr 19
  is_hub_anchor           : True
  stop_lat                : 51.1120
  stop_lon                : 16.2404

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 1.1331
  stop_local_score_raw    : -1.6613

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.3571
  stop_routes_count       : 1
  stop_routes             : 20
  stop_hub_share          : 1.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 1504.2118
  stop_liquidity          : 1

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 52.8288

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Ogonowice - Nr 17 (ID: 2128 | H3: 891e262aadbffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Ogonowice - Nr 17
  stop_id                 : 2128
  h3_index                : 891e262aadbffff
  hub_id                  : 53
  hub_name                : Ogonowice - Nr 19
  is_hub_anchor           : False
  stop_lat                : 51.1120
  stop_lon                : 16.2405

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.8499
  stop_local_score_raw    : -1.6633

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.3571
  stop_routes_count       : 1
  stop_routes             : 20
  stop_hub_share          : 1.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 1504.2118
  stop_liquidity          : 1

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 51.6929

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Ogonowice - Nr 25 (ID: 2113 | H3: 891e262aadbffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Ogonowice - Nr 25
  stop_id                 : 2113
  h3_index                : 891e262aadbffff
  hub_id                  : 116
  hub_name                : Ogonowice - Nr 25
  is_hub_anchor           : True
  stop_lat                : 51.1111
  stop_lon                : 16.2395

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.5666
  stop_local_score_raw    : -1.6859

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.3571
  stop_routes_count       : 1
  stop_routes             : 20
  stop_hub_share          : 1.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 1504.2118
  stop_liquidity          : 1

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 40.4783

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Cmentarz - Jaszków (ID: 1985 | H3: 891e263817bffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Cmentarz - Jaszków
  stop_id                 : 1985
  h3_index                : 891e263817bffff
  hub_id                  : 119
  hub_name                : Cmentarz - Jaszków
  is_hub_anchor           : True
  stop_lat                : 51.2037
  stop_lon                : 16.1123

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.2833
  stop_local_score_raw    : -1.6907

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 4759.2628
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 1.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>

#### POZIOM 2: NAJWAZNIEJSZE WEZLY LOGICZNE MACRO (TOP 5 HUBOW)
<details><summary><b>HUB: Piłsudskiego - Galaktyczna (ID: 5 | H3: 891e2638d63ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Piłsudskiego - Galaktyczna
  hub_id                  : 5
  h3_index                : 891e2638d63ffff
  hub_stops_count         : 2
  hub_stops_ids           : 1790, 1799
  lat                     : 51.2055
  lon                     : 16.1859

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 100.0000
  hub_local_score_raw     : 1.3688

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 3507964.3594
  hub_raw_gravity         : 2224748.6129
  hub_entropy             : 0.5768

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 30.2143
  hub_routes_count        : 8
  hub_routes              : 3, 6, 8, 15, 16, 18, 23, 28

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 5254.4818
  hub_liquidity           : 405

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 2950.6313
```
</details>
<details><summary><b>HUB: Iwaszkiewicza - Pętla (ID: 45 | H3: 891e262326bffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Iwaszkiewicza - Pętla
  hub_id                  : 45
  h3_index                : 891e262326bffff
  hub_stops_count         : 3
  hub_stops_ids           : 1727, 1730, 2024
  lat                     : 51.2068
  lon                     : 16.2194

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.5595
  hub_local_score_raw     : 1.3471

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 4900354.0870
  hub_raw_gravity         : 3932589.2507
  hub_entropy             : 0.2461

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 36.7857
  hub_routes_count        : 11
  hub_routes              : 3, 6, 8, 15, 16, 18, 23, 24, 25, 28, 38

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 4940.7115
  hub_liquidity           : 219

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 1003.5956
```
</details>
<details><summary><b>HUB: Piłsudskiego - Wielkiej Niedźwiedzicy (ID: 25 | H3: 891e263899bffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Piłsudskiego - Wielkiej Niedźwiedzicy
  hub_id                  : 25
  h3_index                : 891e263899bffff
  hub_stops_count         : 2
  hub_stops_ids           : 1792, 1798
  lat                     : 51.2035
  lon                     : 16.1934

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.1189
  hub_local_score_raw     : 1.3065

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 1700499.8597
  hub_raw_gravity         : 690050.3772
  hub_entropy             : 1.4643

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 30.1429
  hub_routes_count        : 8
  hub_routes              : 3, 6, 8, 15, 16, 18, 23, 28

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 5253.9405
  hub_liquidity           : 211

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 2660.0230
```
</details>
<details><summary><b>HUB: Skarbka - Pl. Słowiański (ID: 44 | H3: 891e2638893ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Skarbka - Pl. Słowiański
  hub_id                  : 44
  h3_index                : 891e2638893ffff
  hub_stops_count         : 2
  hub_stops_ids           : 1825, 1826
  lat                     : 51.2053
  lon                     : 16.1616

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 98.6784
  hub_local_score_raw     : 1.2962

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 10009241.1247
  hub_raw_gravity         : 4103670.6203
  hub_entropy             : 1.4391

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 25.5000
  hub_routes_count        : 8
  hub_routes              : 3, 6, 9, 15, 16, 20, 24, 26

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 4498.2570
  hub_liquidity           : 1008

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 2311.1158
```
</details>
<details><summary><b>HUB: Sikorskiego - Gałczyńskiego (ID: 41 | H3: 891e26389b7ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Sikorskiego - Gałczyńskiego
  hub_id                  : 41
  h3_index                : 891e26389b7ffff
  hub_stops_count         : 2
  hub_stops_ids           : 1818, 1821
  lat                     : 51.2050
  lon                     : 16.2122

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 98.2379
  hub_local_score_raw     : 1.1769

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 2974380.1517
  hub_raw_gravity         : 1356586.3268
  hub_entropy             : 1.1925

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 23.5714
  hub_routes_count        : 6
  hub_routes              : 2, 3, 6, 18, 23, 24

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 5016.0607
  hub_liquidity           : 232

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 1315.7768
```
</details>

---

## LESZNO
#### DASHBOARD ASERCJI PIPELINE'U (Pelna Integralnosc Bazy)
```text
[PASS ZERO NULLS & INFS] Petla obliczeniowa wygenerowala 100% spojnych komorek.
[STATS] [PASS] Z-Score Micro VALID (Mean: 0.000, Std: 0.726)
        Rozklad Rang Slupkow (Micro): A: 26, A+: 14, B: 39, C: 52, D: 65, F: 65
[STATS] [PASS] Z-Score Macro VALID (Mean: -0.000, Std: 0.748)
        Rozklad Rang Hubow (Macro): A: 14, A+: 8, B: 21, C: 28, D: 35, F: 35
[DEMOGRAPHY] [INFO] OBSZAR AGLOMERACYJNY: +26.1% (GUS strefa aglomeracyjna: 79,417 vs Miasto rdzen: 63,000)
[PASS] POI Parquet 100% Valid (Matematyka Huffa dziala)
[PASS] POP Parquet 100% Valid
[PASS] H3 Res 8 Grid 100% Valid (238 komorek, 35 pustyn transportowych)
```

### Faza 0: Statystyki Ogolne i Balans Sieci
- **Slupki Fizyczne (Micro):** 261 slupkow
- **Wezly Logiczne (Macro Hubs):** 141 hubow (Wskaznik konsolidacji: 1.85 slupka/hub)
- **Populacja Strefy Transportowej (GUS 250m):** 79,417 mieszkancow
- **Transakcje Notarialne RCN:** 3,695 aktow
### Faza 1: Siatka Analityczna Uber H3 Res 8 (0.74 km2 / komorka)
- **Liczba Komorek H3 Res 8:** 238
- **Rynek Nieruchomosci RCN w Heksach:** Pokrycie 76.1% (181/238 komorek), Srednia: 3,998 PLN/m2, Mediana: 3,799 PLN/m2, Std: 1,871, Min: 138, Max: 13,449 PLN/m2
- **Demografia GUS NSP 2021 w Heksach:** Laczna ludnosc w heksach: 79,417, Srednia/heks: 333.7, Mediana: 7.0, Std: 933.2, Max: 8,629
- **Podaz Transportu w Heksach:** Sredni Transport Score: 8.19, Max Transport Score: 100.00, Srednia odjazdow/h: 3.29, Pustynie Transportowe TDI: 35

#### TOP 5 Pustyn Transportowych (The Investment List)
| H3 Index | Lat | Lon | Populacja GUS | Odjazdy/h | TDI Score |
|---|---|---|---|---|---|
| `881e2461e7fffff` | 51.78519 | 16.66294 | 1,272 | 0.0 | **75.01** |
| `881e246337fffff` | 51.83583 | 16.60836 | 1,133 | 0.0 | **73.80** |
| `881e246147fffff` | 51.81777 | 16.59114 | 786 | 0.0 | **69.96** |
| `881e24630bfffff` | 51.86542 | 16.59740 | 675 | 0.0 | **68.37** |
| `881e247a9bfffff` | 51.88107 | 16.54373 | 533 | 0.0 | **65.89** |

#### TOP 5 Biegunow Transportu (Najwyzsza Podaz)
| H3 Index | Lat | Lon | Transport Score | Odjazdy/h | Liczba Slupkow |
|---|---|---|---|---|---|
| `881e24614bfffff` | 51.83050 | 16.59838 | **100.00** | 62.2 | 15 |
| `881e246321fffff` | 51.84204 | 16.57019 | **100.00** | 65.1 | 12 |
| `881e246335fffff` | 51.83790 | 16.59564 | **100.00** | 53.6 | 11 |
| `881e246329fffff` | 51.84943 | 16.56744 | **100.00** | 47.3 | 12 |
| `881e24632bfffff` | 51.84737 | 16.58017 | **100.00** | 52.7 | 8 |

#### TOP 5 Najdrozszych Heksow Mieszkaniowych RCN
| H3 Index | Lat | Lon | Mediana Ceny m2 | Liczba Transakcji |
|---|---|---|---|---|
| `881e244411fffff` | 51.95609 | 16.33606 | **13,449 PLN** | 87 |
| `881e244419fffff` | 51.96347 | 16.33328 | **11,409 PLN** | 8 |
| `881e246331fffff` | 51.84323 | 16.60562 | **9,946 PLN** | 90 |
| `881e246327fffff` | 51.83464 | 16.57293 | **8,052 PLN** | 70 |
| `881e24630dfffff` | 51.86216 | 16.57468 | **8,002 PLN** | 139 |

### Faza 2: Audyt Zbednosci TCRP Report 100 (The Axe List)
- **Zbedne Slupki (R >= 0.50 - Umiarkowana Kanibalizacja):** 136
- **Zbedne Slupki (R >= 0.70 - Rekomendacja Likwidacji):** 104
- **Zbedne Slupki (R >= 0.90 - Skrajna Zbednosc / Dubel):** 63

| Zbedny Słupek | Dominujacy Słupek | Dystans [m] | S_service | S_spatial | S_cannibal | R-Score |
|---|---|---|---|---|---|---|
| Jagiełły (#278, 0.9285714285714286 odj/h) | Jagiełły (#277, 0.9285714285714286 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |
| Jagiełły (#277, 0.9285714285714286 odj/h) | Jagiełły (#278, 0.9285714285714286 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |
| Osiecka cmentarz (#182, 1.0714285714285714 odj/h) | Osiecka cmentarz (#141, 1.1428571428571428 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |
| Szpitalna SZPITAL (#13, 2.5714285714285716 odj/h) | Szpitalna SZPITAL (#66, 2.7857142857142856 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |
| Dąbcze Kościół (#204, 0.8571428571428571 odj/h) | Dąbcze Kościół (#229, 0.9285714285714286 odj/h) | 1.4m | 1.00 | 1.00 | 1.00 | **0.9970** |

### Faza 3: Hierarchia Magnesow Miejskich POI

#### Top 20 Kategorii POI w Miescie
| Kategoria | Tier | Ilosc w Miescie | Wartosc Punktowa (W) |
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

#### TOP 10 Konkretnych Nazwanych Magnesow Miejskich (T0, T1, T2)
| Nazwa Obiektu | Kategoria POI | Tier | Waga Przyciagania (W) |
|---|---|---|---|
| **Leszczyńskie Centrum Medyczne Ventriculus** | `hospital_clinical` | T1_NATIONAL_MAGNET | 18,992,328 |
| **Wojewódzki Szpital Wielospecjalistyczny im. dr Jana Jonstona w Lesznie** | `hospital_clinical` | T1_NATIONAL_MAGNET | 18,992,328 |
| **Stadion im. Alfreda Smoczyka** | `national_stadium` | T1_NATIONAL_MAGNET | 13,983,867 |
| **Tor speedrowerowy LKS Szawer Leszno** | `national_stadium` | T1_NATIONAL_MAGNET | 11,225,431 |
| **Uniwersytet Robotniczy** | `university_campus` | T1_NATIONAL_MAGNET | 7,851,481 |
| **Pracownia Ćwiczeń Praktycznych Zespołu Szkół Rolniczo-Budowlanych** | `university_campus` | T1_NATIONAL_MAGNET | 7,851,481 |
| **Szkoła Paralotniowa Fly2Live** | `university_campus` | T1_NATIONAL_MAGNET | 7,851,481 |
| **Wyższa Szkoła Humanistyczna im. Króla Stanisława Leszczyńskiego** | `university_campus` | T1_NATIONAL_MAGNET | 7,851,481 |
| **Arena Kreatywnej Edukacji** | `university_campus` | T1_NATIONAL_MAGNET | 7,851,481 |
| **Wyższa Szkoła Humanistyczna BUDYNEK E** | `university_campus` | T1_NATIONAL_MAGNET | 6,835,111 |

### Faza 4: Probki Pelnego DNA (Wszystkie 53 Metryki)

#### POZIOM 1: NAJLEPSZE SLUPKI FIZYCZNE MICRO (TOP 5)
<details><summary><b>Dąbrowskiego (ID: 26 | H3: 891e2463233ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Dąbrowskiego
  stop_id                 : 26
  h3_index                : 891e2463233ffff
  hub_id                  : 85
  hub_name                : Dąbrowskiego
  is_hub_anchor           : True
  stop_lat                : 51.8423
  stop_lon                : 16.5800

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 100.0000
  stop_local_score_raw    : 1.3922

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 10963875.4415
  stop_raw_gravity        : 5140267.2004
  stop_entropy            : 1.1329

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 5.0000
  stop_routes_count       : 9
  stop_routes             : 1, 3, 4, 5, 6, 8, 9, 16, 17
  stop_hub_share          : 0.5147

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 5197.5052
  stop_liquidity          : 191

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 908.5427

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 48x specialized_retail
  > 26x gastronomy
  > 20x personal_services
  > 14x bank
  > 13x health_clinic
  > 11x university_campus
  > 11x convenience_store
  > 11x micro_playground
  > 9x education_high_school
  > 8x education_preschool
  > 7x micro_atm
  > 7x government_central
  > 7x pharmacy
  > 7x business_office
  > 6x park_recreation
  > 6x commercial_zone
  > 5x post_office
  > 5x culture_theatre
  > 3x supermarket
  > 3x micro_parcel_locker
  > 3x shopping_mall
  > 3x place_of_worship
  > 2x sports_centre
  > 2x police_station
  > 1x social_support_mops
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - post_office              : Urząd Pocztowy Leszno 3
    - micro_atm                : Bankomat BZ WBK
    - micro_atm                : Bankomat Santander
    - culture_theatre          : Miejska Biblioteka Publiczna
    - culture_theatre          : Pedagogiczna Biblioteka Publiczna
    - university_campus        : Wyższa Szkoła Humanistyczna BUDYNEK D
    - education_high_school    : Zakład Doskonalenia Zawodowego
    - convenience_store        : POLOmarket
    - education_high_school    : Zespół Prywatnych Szkół Średnich
    - gastronomy               : Primavera
```
</details>
<details><summary><b>Dąbrowskiego (ID: 61 | H3: 891e2463233ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Dąbrowskiego
  stop_id                 : 61
  h3_index                : 891e2463233ffff
  hub_id                  : 85
  hub_name                : Dąbrowskiego
  is_hub_anchor           : False
  stop_lat                : 51.8417
  stop_lon                : 16.5800

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.6169
  stop_local_score_raw    : 1.3339

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 7302531.0357
  stop_raw_gravity        : 3305785.2671
  stop_entropy            : 1.2090

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 5.0000
  stop_routes_count       : 8
  stop_routes             : 1, 3, 4, 5, 6, 8, 16, 17
  stop_hub_share          : 0.5147

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 5167.6258
  stop_liquidity          : 202

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 850.5281

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
    - post_office              : Urząd Pocztowy Leszno 3
    - micro_atm                : Bankomat BZ WBK
    - micro_atm                : Bankomat Santander
    - culture_theatre          : Miejska Biblioteka Publiczna
    - culture_theatre          : Pedagogiczna Biblioteka Publiczna
    - university_campus        : Wyższa Szkoła Humanistyczna BUDYNEK D
    - education_high_school    : Zakład Doskonalenia Zawodowego
    - convenience_store        : POLOmarket
    - education_high_school    : Zespół Prywatnych Szkół Średnich
    - gastronomy               : Primavera
```
</details>
<details><summary><b>Krasińskiego (ID: 108 | H3: 891e2463203ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Krasińskiego
  stop_id                 : 108
  h3_index                : 891e2463203ffff
  hub_id                  : 137
  hub_name                : Krasińskiego
  is_hub_anchor           : False
  stop_lat                : 51.8427
  stop_lon                : 16.5709

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.2337
  stop_local_score_raw    : 1.1008

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 9740971.8434
  stop_raw_gravity        : 3918096.0070
  stop_entropy            : 1.4861

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 4.0714
  stop_routes_count       : 6
  stop_routes             : 3, 4, 5, 10, 11, 12
  stop_hub_share          : 0.4957

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 4495.7473
  stop_liquidity          : 159

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 556.6860

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
    - post_office              : Urząd Pocztowy Leszno 1
    - bank                     : Santander
    - micro_atm                : Bankomat BZ WBK
    - micro_atm                : Bankomat BZ WBK
    - culture_theatre          : Miejska Biblioteka Publiczna
    - culture_theatre          : Pedagogiczna Biblioteka Publiczna
    - education_high_school    : Zakład Doskonalenia Zawodowego
    - micro_atm                : Bankomat Kredyt Bank
    - convenience_store        : Żabka
    - education_high_school    : Zespół Prywatnych Szkół Średnich
```
</details>
<details><summary><b>Krasińskiego (ID: 81 | H3: 891e2463203ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Krasińskiego
  stop_id                 : 81
  h3_index                : 891e2463203ffff
  hub_id                  : 137
  hub_name                : Krasińskiego
  is_hub_anchor           : True
  stop_lat                : 51.8420
  stop_lon                : 16.5706

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 98.8506
  stop_local_score_raw    : 1.0980

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 8937794.2972
  stop_raw_gravity        : 3646376.6424
  stop_entropy            : 1.4511

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 4.1429
  stop_routes_count       : 6
  stop_routes             : 3, 4, 5, 10, 11, 12
  stop_hub_share          : 0.5043

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 4546.7242
  stop_liquidity          : 154

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 512.9742

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 59x specialized_retail
  > 31x gastronomy
  > 25x personal_services
  > 17x bank
  > 16x convenience_store
  > 15x park_recreation
  > 13x micro_atm
  > 12x health_clinic
  > 10x government_central
  > 9x pharmacy
  > 8x education_high_school
  > 7x university_campus
  > 6x education_preschool
  > 4x post_office
  > 4x culture_theatre
  > 4x business_office
  > 3x place_of_worship
  > 3x micro_playground
  > 3x commercial_zone
  > 2x sports_centre
  > 2x social_support_mops
  > 1x car_services
  > 1x shopping_mall
  > 1x micro_parcel_locker
  > 1x marketplace
  > 1x industrial_zone
  > 1x hospital_clinical
  > 1x supermarket

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - post_office              : Urząd Pocztowy Leszno 1
    - bank                     : Santander
    - micro_atm                : Bankomat BZ WBK
    - micro_atm                : Bankomat BZ WBK
    - culture_theatre          : Miejska Biblioteka Publiczna
    - culture_theatre          : Pedagogiczna Biblioteka Publiczna
    - micro_atm                : Bankomat Kredyt Bank
    - convenience_store        : Żabka
    - education_high_school    : Zespół Prywatnych Szkół Średnich
    - gastronomy               : Primavera
```
</details>
<details><summary><b>Jana Pawła II pływalnia (ID: 79 | H3: 891e2463223ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Jana Pawła II pływalnia
  stop_id                 : 79
  h3_index                : 891e2463223ffff
  hub_id                  : 121
  hub_name                : Jana Pawła II pływalnia
  is_hub_anchor           : False
  stop_lat                : 51.8407
  stop_lon                : 16.5839

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 98.4674
  stop_local_score_raw    : 1.0969

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 5986720.9179
  stop_raw_gravity        : 2112008.7930
  stop_entropy            : 1.8346

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 3.4286
  stop_routes_count       : 4
  stop_routes             : 3, 4, 6, 9
  stop_hub_share          : 0.5000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 5522.3881
  stop_liquidity          : 177

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 998.8782

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
    - post_office              : Urząd Pocztowy Leszno 3
    - micro_atm                : Bankomat BZ WBK
    - bank                     : Santander
    - micro_atm                : Bankomat Santander
    - micro_atm                : Santander
    - pharmacy                 : Medina
    - convenience_store        : POLOmarket
    - supermarket              : Biedronka
    - specialized_retail       : Neonet
    - convenience_store        : Żabka
```
</details>

#### POZIOM 1: NAJSLABSZE SLUPKI FIZYCZNE MICRO (BOTTOM 5)
<details><summary><b>Wyciążkowo (ID: 283 | H3: 891e2462683ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Wyciążkowo
  stop_id                 : 283
  h3_index                : 891e2462683ffff
  hub_id                  : 1
  hub_name                : Wyciążkowo
  is_hub_anchor           : True
  stop_lat                : 51.9030
  stop_lon                : 16.6212

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 1.9157
  stop_local_score_raw    : -2.1742

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.2857
  stop_routes_count       : 2
  stop_routes             : 8, 16
  stop_hub_share          : 0.5000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 5117.6027
  stop_liquidity          : 2

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 66.9684

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Gronówko (ID: 123 | H3: 891e2462653ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Gronówko
  stop_id                 : 123
  h3_index                : 891e2462653ffff
  hub_id                  : 75
  hub_name                : Gronówko
  is_hub_anchor           : True
  stop_lat                : 51.8925
  stop_lon                : 16.6087

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 1.5326
  stop_local_score_raw    : -2.2617

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.2857
  stop_routes_count       : 2
  stop_routes             : 8, 16
  stop_hub_share          : 0.5000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 4882.8125
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 39.7044

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Gronówko (ID: 132 | H3: 891e2462653ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Gronówko
  stop_id                 : 132
  h3_index                : 891e2462653ffff
  hub_id                  : 75
  hub_name                : Gronówko
  is_hub_anchor           : False
  stop_lat                : 51.8923
  stop_lon                : 16.6086

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 1.1494
  stop_local_score_raw    : -2.2776

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.2857
  stop_routes_count       : 2
  stop_routes             : 8, 16
  stop_hub_share          : 0.5000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 4882.8125
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 34.9246

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Klonówiec pętla (ID: 289 | H3: 891e247182fffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Klonówiec pętla
  stop_id                 : 289
  h3_index                : 891e247182fffff
  hub_id                  : 41
  hub_name                : Klonówiec pętla
  is_hub_anchor           : True
  stop_lat                : 51.9065
  stop_lon                : 16.5840

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.7663
  stop_local_score_raw    : -2.6292

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 92.9553
  stop_raw_gravity        : 92.9553
  stop_entropy            : -0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.2857
  stop_routes_count       : 1
  stop_routes             : 17
  stop_hub_share          : 1.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 499.4554
  stop_liquidity          : 4

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 162.9564

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x micro_playground

  [WSKAZANE KONKRETNE INSTYTUCJE]
```
</details>
<details><summary><b>Klonówiec osiedle (ID: 290 | H3: 891e2471867ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Klonówiec osiedle
  stop_id                 : 290
  h3_index                : 891e2471867ffff
  hub_id                  : 89
  hub_name                : Klonówiec osiedle
  is_hub_anchor           : True
  stop_lat                : 51.9054
  stop_lon                : 16.5779

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.3831
  stop_local_score_raw    : -2.7168

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 62.3782
  stop_raw_gravity        : 62.3782
  stop_entropy            : -0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.2857
  stop_routes_count       : 1
  stop_routes             : 17
  stop_hub_share          : 1.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 499.4554
  stop_liquidity          : 4

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 117.0436

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x micro_playground

  [WSKAZANE KONKRETNE INSTYTUCJE]
```
</details>

#### POZIOM 2: NAJWAZNIEJSZE WEZLY LOGICZNE MACRO (TOP 5 HUBOW)
<details><summary><b>HUB: Dąbrowskiego (ID: 85 | H3: 891e2463233ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Dąbrowskiego
  hub_id                  : 85
  h3_index                : 891e2463233ffff
  hub_stops_count         : 2
  hub_stops_ids           : 26, 61
  lat                     : 51.8420
  lon                     : 16.5800

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 100.0000
  hub_local_score_raw     : 1.2783

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 17612034.7690
  hub_raw_gravity         : 8119921.0202
  hub_entropy             : 1.1690

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 9.7143
  hub_routes_count        : 9
  hub_routes              : 1, 3, 4, 5, 6, 8, 9, 16, 17

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 5167.6258
  hub_liquidity           : 224

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 1789.6493
```
</details>
<details><summary><b>HUB: Krasińskiego (ID: 137 | H3: 891e2463203ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Krasińskiego
  hub_id                  : 137
  h3_index                : 891e2463203ffff
  hub_stops_count         : 2
  hub_stops_ids           : 81, 108
  lat                     : 51.8424
  lon                     : 16.5708

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.2908
  hub_local_score_raw     : 1.0659

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 18451085.6363
  hub_raw_gravity         : 7524921.6383
  hub_entropy             : 1.4520

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 8.2143
  hub_routes_count        : 6
  hub_routes              : 3, 4, 5, 10, 11, 12

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 4471.5864
  hub_liquidity           : 162

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 1049.7720
```
</details>
<details><summary><b>HUB: Jana Pawła II pływalnia (ID: 121 | H3: 891e2463223ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Jana Pawła II pływalnia
  hub_id                  : 121
  h3_index                : 891e2463223ffff
  hub_stops_count         : 2
  hub_stops_ids           : 79, 110
  lat                     : 51.8407
  lon                     : 16.5844

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 98.5816
  hub_local_score_raw     : 1.0656

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 10101743.8048
  hub_raw_gravity         : 3503982.1664
  hub_entropy             : 1.8829

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 6.8571
  hub_routes_count        : 4
  hub_routes              : 3, 4, 6, 9

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 5522.3881
  hub_liquidity           : 215

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 1940.9207
```
</details>
<details><summary><b>HUB: Niepodległości (ID: 50 | H3: 891e24632abffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Niepodległości
  hub_id                  : 50
  h3_index                : 891e24632abffff
  hub_stops_count         : 2
  hub_stops_ids           : 34, 60
  lat                     : 51.8455
  lon                     : 16.5791

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 97.8723
  hub_local_score_raw     : 0.9719

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 29059992.4006
  hub_raw_gravity         : 11632731.2779
  hub_entropy             : 1.4981

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 5.2143
  hub_routes_count        : 6
  hub_routes              : 1, 4, 8, 9, 10, 16

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 5152.2248
  hub_liquidity           : 167

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 1435.4575
```
</details>
<details><summary><b>HUB: Mickiewicza Urząd Skarbowy (ID: 82 | H3: 891e24632b7ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Mickiewicza Urząd Skarbowy
  hub_id                  : 82
  h3_index                : 891e24632b7ffff
  hub_stops_count         : 2
  hub_stops_ids           : 174, 188
  lat                     : 51.8494
  lon                     : 16.5807

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 97.1631
  hub_local_score_raw     : 0.9421

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 13586576.1338
  hub_raw_gravity         : 6662311.7298
  hub_entropy             : 1.0393

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 5.5714
  hub_routes_count        : 4
  hub_routes              : 3, 5, 6, 17

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 5502.0710
  hub_liquidity           : 110

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 1350.4627
```
</details>

---

## LODZ
#### DASHBOARD ASERCJI PIPELINE'U (Pelna Integralnosc Bazy)
```text
[PASS ZERO NULLS & INFS] Petla obliczeniowa wygenerowala 100% spojnych komorek.
[STATS] [PASS] Z-Score Micro VALID (Mean: -0.000, Std: 0.715)
        Rozklad Rang Slupkow (Micro): A: 292, A+: 147, B: 439, C: 586, D: 730, F: 731
[STATS] [PASS] Z-Score Macro VALID (Mean: -0.000, Std: 0.723)
        Rozklad Rang Hubow (Macro): A: 142, A+: 72, B: 214, C: 286, D: 356, F: 356
[DEMOGRAPHY] [INFO] OBSZAR AGLOMERACYJNY: +46.8% (GUS strefa aglomeracyjna: 983,517 vs Miasto rdzen: 670,000)
[PASS] POI Parquet 100% Valid (Matematyka Huffa dziala)
[PASS] POP Parquet 100% Valid
[PASS] H3 Res 8 Grid 100% Valid (1,744 komorek, 264 pustyn transportowych)
```

### Faza 0: Statystyki Ogolne i Balans Sieci
- **Slupki Fizyczne (Micro):** 2,925 slupkow
- **Wezly Logiczne (Macro Hubs):** 1,426 hubow (Wskaznik konsolidacji: 2.05 slupka/hub)
- **Populacja Strefy Transportowej (GUS 250m):** 983,517 mieszkancow
- **Transakcje Notarialne RCN:** 9,351 aktow
### Faza 1: Siatka Analityczna Uber H3 Res 8 (0.74 km2 / komorka)
- **Liczba Komorek H3 Res 8:** 1,744
- **Rynek Nieruchomosci RCN w Heksach:** Pokrycie 22.2% (388/1744 komorek), Srednia: 5,735 PLN/m2, Mediana: 5,459 PLN/m2, Std: 2,610, Min: 50, Max: 13,186 PLN/m2
- **Demografia GUS NSP 2021 w Heksach:** Laczna ludnosc w heksach: 983,517, Srednia/heks: 563.9, Mediana: 72.5, Std: 1522.2, Max: 14,502
- **Podaz Transportu w Heksach:** Sredni Transport Score: 6.06, Max Transport Score: 100.00, Srednia odjazdow/h: 24.23, Pustynie Transportowe TDI: 264

#### TOP 5 Pustyn Transportowych (The Investment List)
| H3 Index | Lat | Lon | Populacja GUS | Odjazdy/h | TDI Score |
|---|---|---|---|---|---|
| `881e21b867fffff` | 51.65063 | 19.37976 | 6,732 | 0.0 | **92.48** |
| `881e21b861fffff` | 51.65813 | 19.37731 | 5,706 | 0.0 | **90.75** |
| `881e21bb31fffff` | 51.65778 | 19.34176 | 4,954 | 0.0 | **89.27** |
| `881e2185d9fffff` | 51.75280 | 19.32255 | 4,525 | 0.0 | **88.32** |
| `881e21b865fffff` | 51.65302 | 19.36709 | 3,805 | 0.0 | **86.50** |

#### TOP 5 Biegunow Transportu (Najwyzsza Podaz)
| H3 Index | Lat | Lon | Transport Score | Odjazdy/h | Liczba Slupkow |
|---|---|---|---|---|---|
| `881e21b137fffff` | 51.72183 | 19.48740 | **100.00** | 568.4 | 10 |
| `881e21b13bfffff` | 51.73443 | 19.49520 | **100.00** | 616.6 | 20 |
| `881e21b13dfffff` | 51.73172 | 19.47228 | **100.00** | 398.5 | 17 |
| `881e21b141fffff` | 51.76407 | 19.44984 | **100.00** | 640.4 | 24 |
| `881e21b143fffff` | 51.76168 | 19.46252 | **100.00** | 656.8 | 11 |

#### TOP 5 Najdrozszych Heksow Mieszkaniowych RCN
| H3 Index | Lat | Lon | Mediana Ceny m2 | Liczba Transakcji |
|---|---|---|---|---|
| `881e21b323fffff` | 51.77904 | 19.44495 | **13,186 PLN** | 9 |
| `881e2184d7fffff` | 51.77360 | 19.39909 | **12,346 PLN** | 2 |
| `881e21b04bfffff` | 51.80485 | 19.53183 | **12,217 PLN** | 1 |
| `881e21b899fffff` | 51.64955 | 19.53464 | **12,121 PLN** | 1 |
| `881e21b043fffff` | 51.79736 | 19.53427 | **11,936 PLN** | 3 |

### Faza 2: Audyt Zbednosci TCRP Report 100 (The Axe List)
- **Zbedne Slupki (R >= 0.50 - Umiarkowana Kanibalizacja):** 1249
- **Zbedne Slupki (R >= 0.70 - Rekomendacja Likwidacji):** 939
- **Zbedne Slupki (R >= 0.90 - Skrajna Zbednosc / Dubel):** 499

| Zbedny Słupek | Dominujacy Słupek | Dystans [m] | S_service | S_spatial | S_cannibal | R-Score |
|---|---|---|---|---|---|---|
| Koluszki Dworzec PKP (#1500024, 0.7142857142857143 odj/h) | Koluszki Dworzec PKP (#1500011, 0.7142857142857143 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |
| Koluszki Dworzec PKP (#1500011, 0.7142857142857143 odj/h) | Koluszki Dworzec PKP (#1500024, 0.7142857142857143 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |
| Ozorków Konstytucji 3 Maja 37 (#1600030, 0.8571428571428571 odj/h) | Ozorków Konstytucji 3 Maja 37 (#1600011, 0.8571428571428571 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |
| Ozorków Konstytucji 3 Maja 37 (#1600011, 0.8571428571428571 odj/h) | Ozorków Konstytucji 3 Maja 37 (#1600030, 0.8571428571428571 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |
| Gałczyńskiego-Łęczycka (Zgierz) (#2982, 2.0714285714285716 odj/h) | Łęczycka (Zgierz) (#2983, 2.2142857142857144 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |

### Faza 3: Hierarchia Magnesow Miejskich POI

#### Top 20 Kategorii POI w Miescie
| Kategoria | Tier | Ilosc w Miescie | Wartosc Punktowa (W) |
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

#### TOP 10 Konkretnych Nazwanych Magnesow Miejskich (T0, T1, T2)
| Nazwa Obiektu | Kategoria POI | Tier | Waga Przyciagania (W) |
|---|---|---|---|
| **Port Lotniczy Łódź im. Władysława Reymonta** | `international_airport` | T0_MEGA_HUB | 204,252,860 |
| **Łask** | `national_rail_hub` | T0_MEGA_HUB | 37,224,542 |
| **Łódź Chojny** | `national_rail_hub` | T0_MEGA_HUB | 37,224,542 |
| **Łódź Fabryczna** | `national_rail_hub` | T0_MEGA_HUB | 37,224,542 |
| **Pabianice** | `national_rail_hub` | T0_MEGA_HUB | 37,224,542 |
| **Łódź Kaliska** | `national_rail_hub` | T0_MEGA_HUB | 37,224,542 |
| **Specjalistyczny Szpital Gruźlicy** | `hospital_clinical` | T1_NATIONAL_MAGNET | 21,921,986 |
| **Szpital Specjalistyczny Brzeziny** | `hospital_clinical` | T1_NATIONAL_MAGNET | 21,921,986 |
| **Wojewódzki Zespół Zakładów Opieki Zdrowotnej – Centrum Leczenia Chorób Płuc i Rehabilitacji im. błogosławionego ojca Rafała Chylińskiego** | `hospital_clinical` | T1_NATIONAL_MAGNET | 21,921,986 |
| **Salve Szpital** | `hospital_clinical` | T1_NATIONAL_MAGNET | 21,921,986 |

### Faza 4: Probki Pelnego DNA (Wszystkie 53 Metryki)

#### POZIOM 1: NAJLEPSZE SLUPKI FIZYCZNE MICRO (TOP 5)
<details><summary><b>Kilińskiego-Nawrot (ID: 391 | H3: 891e21b1427ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Kilińskiego-Nawrot
  stop_id                 : 391
  h3_index                : 891e21b1427ffff
  hub_id                  : 788
  hub_name                : Kilińskiego-Nawrot
  is_hub_anchor           : True
  stop_lat                : 51.7627
  stop_lon                : 19.4677

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 100.0000
  stop_local_score_raw    : 1.2793

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 6213102.4815
  stop_raw_gravity        : 3301797.0217
  stop_entropy            : 0.8817

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 25.5000
  stop_routes_count       : 9
  stop_routes             : 1, 5, 12, 18, 57, 77, 83, 80A, 80B
  stop_hub_share          : 0.5694

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 9467.4729
  stop_liquidity          : 6

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 514.1660

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 31x park_recreation
  > 24x commercial_zone
  > 8x convenience_store
  > 8x gastronomy
  > 7x specialized_retail
  > 6x health_clinic
  > 6x micro_playground
  > 5x government_central
  > 5x micro_parcel_locker
  > 4x bank
  > 4x culture_theatre
  > 4x place_of_worship
  > 3x sports_centre
  > 3x car_services
  > 3x business_office
  > 3x personal_services
  > 3x university_campus
  > 2x education_preschool
  > 2x post_office
  > 2x pharmacy
  > 2x micro_atm
  > 2x education_high_school
  > 1x supermarket
  > 1x shopping_mall

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - bank                     : Millennium Bank
    - education_preschool      : Przedszkole Miejskie Nr 223
    - post_office              : Urząd Pocztowy Łódź 1
    - convenience_store        : Żabka
    - gastronomy               : Cukiernia Braci Miś
    - specialized_retail       : Lemon Decor
    - bank                     : Bank Pekao
    - culture_theatre          : Sala Teatralna im. ks. Jerzego Popiełuszki
    - convenience_store        : Żabka
    - gastronomy               : Tu i Teraz
```
</details>
<details><summary><b>Piotrkowska-Żwirki (ID: 961 | H3: 891e21b109bffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Piotrkowska-Żwirki
  stop_id                 : 961
  h3_index                : 891e21b109bffff
  hub_id                  : 311
  hub_name                : Piotrkowska-Żwirki
  is_hub_anchor           : False
  stop_lat                : 51.7555
  stop_lon                : 19.4595

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.9658
  stop_local_score_raw    : 1.2596

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 5055504.2396
  stop_raw_gravity        : 1683425.6906
  stop_entropy            : 2.0031

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 22.7857
  stop_routes_count       : 5
  stop_routes             : 2, 3, 6, 7, 11
  stop_hub_share          : 0.5000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 10425.2401
  stop_liquidity          : 5

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 528.3164

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 33x gastronomy
  > 30x park_recreation
  > 25x commercial_zone
  > 14x micro_atm
  > 14x micro_parcel_locker
  > 12x micro_playground
  > 11x convenience_store
  > 10x bank
  > 9x health_clinic
  > 9x personal_services
  > 8x government_central
  > 6x pharmacy
  > 6x supermarket
  > 6x education_high_school
  > 5x culture_theatre
  > 5x specialized_retail
  > 3x post_office
  > 3x sports_centre
  > 2x education_preschool
  > 2x shopping_mall
  > 1x business_office
  > 1x hospital_clinical

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - culture_theatre          : Multikino Łódź
    - gastronomy               : Soplicowo
    - bank                     : Santander
    - micro_atm                : Bankomat Millennium
    - pharmacy                 : Rosa
    - pharmacy                 : Dbam o Zdrowie
    - bank                     : mBank
    - health_clinic            : Centrum Medycyny Estetycznej i Rehabilitacji Nowa Europa
    - micro_atm                : Euronet
    - micro_atm                : Bank Pekao
```
</details>
<details><summary><b>Piotrkowska-Żwirki (ID: 544 | H3: 891e21b1467ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Piotrkowska-Żwirki
  stop_id                 : 544
  h3_index                : 891e21b1467ffff
  hub_id                  : 311
  hub_name                : Piotrkowska-Żwirki
  is_hub_anchor           : True
  stop_lat                : 51.7561
  stop_lon                : 19.4592

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.9316
  stop_local_score_raw    : 1.2578

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 4851067.9491
  stop_raw_gravity        : 1627509.1859
  stop_entropy            : 1.9807

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 22.7857
  stop_routes_count       : 5
  stop_routes             : 2, 3, 6, 7, 11
  stop_hub_share          : 0.5000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 10425.2401
  stop_liquidity          : 5

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 536.4187

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
    - culture_theatre          : Multikino Łódź
    - gastronomy               : Soplicowo
    - bank                     : Santander
    - micro_atm                : Bankomat Millennium
    - bank                     : Millennium Bank
    - pharmacy                 : Rosa
    - pharmacy                 : Dbam o Zdrowie
    - health_clinic            : Centrum Medycyny Estetycznej i Rehabilitacji Nowa Europa
    - micro_atm                : Euronet
    - micro_atm                : Bank Pekao
```
</details>
<details><summary><b>Piłsudskiego-Kilińskiego (ID: 931 | H3: 891e21b155bffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Piłsudskiego-Kilińskiego
  stop_id                 : 931
  h3_index                : 891e21b155bffff
  hub_id                  : 26
  hub_name                : Piłsudskiego-Kilińskiego
  is_hub_anchor           : True
  stop_lat                : 51.7601
  stop_lon                : 19.4681

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.8974
  stop_local_score_raw    : 1.2531

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 6056534.1137
  stop_raw_gravity        : 2219116.5813
  stop_entropy            : 1.7293

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 27.1429
  stop_routes_count       : 9
  stop_routes             : 2, 4, 6, 8, 12, 14, 18, 10A, 10B
  stop_hub_share          : 0.3234

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 9467.4729
  stop_liquidity          : 4

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 331.8548

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 29x park_recreation
  > 19x commercial_zone
  > 10x specialized_retail
  > 9x gastronomy
  > 9x micro_parcel_locker
  > 5x convenience_store
  > 5x education_high_school
  > 4x health_clinic
  > 4x government_central
  > 4x place_of_worship
  > 4x university_campus
  > 3x micro_atm
  > 3x bank
  > 3x culture_theatre
  > 3x supermarket
  > 3x business_office
  > 3x micro_playground
  > 2x sports_centre
  > 2x education_preschool
  > 2x personal_services
  > 2x pharmacy
  > 2x car_services
  > 1x shopping_mall
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm                : Bankomat Millennium
    - bank                     : Millennium Bank
    - gastronomy               : Cukiernia Braci Miś
    - specialized_retail       : Lemon Decor
    - bank                     : Bank Pekao
    - culture_theatre          : Sala Teatralna im. ks. Jerzego Popiełuszki
    - convenience_store        : Żabka
    - specialized_retail       : MediaMarkt
    - supermarket              : Lidl
    - specialized_retail       : Agata Wojtkiewicz
```
</details>
<details><summary><b>Piłsudskiego-Widzew Stadion (ID: 944 | H3: 891e21b021bffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Piłsudskiego-Widzew Stadion
  stop_id                 : 944
  h3_index                : 891e21b021bffff
  hub_id                  : 924
  hub_name                : Piłsudskiego-Widzew Stadion
  is_hub_anchor           : True
  stop_lat                : 51.7642
  stop_lon                : 19.5166

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.8632
  stop_local_score_raw    : 1.2309

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 10935146.7519
  stop_raw_gravity        : 3878652.1500
  stop_entropy            : 1.8193

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 31.3571
  stop_routes_count       : 18
  stop_routes             : 3, 8, 9, 90, 10A, 10B, 58B, 64A, 64B, 72A, 75A, 75B, 80A, 80B, 82B, 91B, 91C, W
  stop_hub_share          : 0.5063

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 8635.0663
  stop_liquidity          : 79

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 144.9721

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 6x park_recreation
  > 6x commercial_zone
  > 5x car_services
  > 4x micro_playground
  > 3x gastronomy
  > 3x personal_services
  > 3x sports_centre
  > 3x industrial_zone
  > 2x convenience_store
  > 2x micro_parcel_locker
  > 2x education_high_school
  > 1x health_clinic
  > 1x micro_atm
  > 1x specialized_retail
  > 1x business_office

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store        : eLDe
    - gastronomy               : Pub i Restauracja W Sercu Łodzi
    - micro_parcel_locker      : Paczkomat InPost
    - health_clinic            : DentEst
    - micro_atm                : Bankomat Euronet
    - specialized_retail       : Duża odzież męska
    - personal_services        : Męski zakład
    - personal_services        : Diament Spa
    - personal_services        : Anna Białek
    - micro_parcel_locker      : Paczkomat InPost
```
</details>

#### POZIOM 1: NAJSLABSZE SLUPKI FIZYCZNE MICRO (BOTTOM 5)
<details><summary><b>Milionowa-Przędzalniana (ID: 752 | H3: 891e21b11d3ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Milionowa-Przędzalniana
  stop_id                 : 752
  h3_index                : 891e21b11d3ffff
  hub_id                  : 155
  hub_name                : Milionowa-Przędzalniana
  is_hub_anchor           : True
  stop_lat                : 51.7513
  stop_lon                : 19.4864

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.1709
  stop_local_score_raw    : -2.0895

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 3992052.5542
  stop_raw_gravity        : 3092024.8750
  stop_entropy            : 0.2911

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 4.0714
  stop_routes_count       : 1
  stop_routes             : 55A
  stop_hub_share          : 0.5044

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 11.3466
  stop_liquidity          : 1

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 302.7150

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
    - gastronomy               : Cesky Film
    - specialized_retail       : Ordom
    - convenience_store        : Sklep ogólnospożywczy
    - post_office              : Poczta Polska
    - gastronomy               : Kreatoora
    - gastronomy               : Cafe Vanilia
    - convenience_store        : Żabka
    - pharmacy                 : Olmed
    - gastronomy               : T.25 CAFE
    - micro_parcel_locker      : Paczkomat InPost
```
</details>
<details><summary><b>Lubocha II (ID: 1600088 | H3: 891e219738bffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Lubocha II
  stop_id                 : 1600088
  h3_index                : 891e219738bffff
  hub_id                  : 883
  hub_name                : Lubocha II
  is_hub_anchor           : False
  stop_lat                : 51.9038
  stop_lon                : 19.0903

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.1368
  stop_local_score_raw    : -2.1054

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.1429
  stop_routes_count       : 1
  stop_routes             : ŁA6
  stop_hub_share          : 0.4000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 5477.5695
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 0.9876

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Milionowa-Śmigłego-Rydza NŻ (ID: 754 | H3: 891e21b11d3ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Milionowa-Śmigłego-Rydza NŻ
  stop_id                 : 754
  h3_index                : 891e21b11d3ffff
  hub_id                  : 1382
  hub_name                : Milionowa-Śmigłego-Rydza NŻ
  is_hub_anchor           : True
  stop_lat                : 51.7517
  stop_lon                : 19.4885

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.1026
  stop_local_score_raw    : -2.1449

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 2392443.5201
  stop_raw_gravity        : 1665495.2881
  stop_entropy            : 0.4365

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 4.0000
  stop_routes_count       : 1
  stop_routes             : 55A
  stop_hub_share          : 1.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 11.3466
  stop_liquidity          : 1

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 283.0416

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
    - specialized_retail       : Ordom
    - post_office              : Poczta Polska
    - gastronomy               : Cafe Vanilia
    - convenience_store        : Żabka
    - pharmacy                 : Olmed
    - gastronomy               : T.25 CAFE
    - micro_parcel_locker      : Paczkomat InPost
    - micro_parcel_locker      : Paczkomat InPost
    - health_clinic            : LUX MED Diagnostyka
    - health_clinic            : Medicover Śmigłego-Rydza
```
</details>
<details><summary><b>Tymienieckiego-ŁSSE (ID: 1363 | H3: 891e21b10a3ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Tymienieckiego-ŁSSE
  stop_id                 : 1363
  h3_index                : 891e21b10a3ffff
  hub_id                  : 194
  hub_name                : Tymienieckiego-ŁSSE
  is_hub_anchor           : True
  stop_lat                : 51.7529
  stop_lon                : 19.4785

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.0684
  stop_local_score_raw    : -2.1736

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 4638569.6428
  stop_raw_gravity        : 2024770.7450
  stop_entropy            : 1.2909

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 4.0714
  stop_routes_count       : 1
  stop_routes             : 55A
  stop_hub_share          : 0.5044

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 11.3466
  stop_liquidity          : 1

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 125.8111

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 14x park_recreation
  > 13x gastronomy
  > 9x commercial_zone
  > 5x business_office
  > 5x micro_playground
  > 3x convenience_store
  > 3x industrial_zone
  > 3x education_high_school
  > 2x personal_services
  > 2x health_clinic
  > 2x micro_parcel_locker
  > 2x sports_centre
  > 1x post_office
  > 1x pharmacy
  > 1x education_preschool
  > 1x hospital_clinical
  > 1x university_campus

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy               : Cesky Film
    - gastronomy               : Kofeina
    - post_office              : Poczta Polska
    - gastronomy               : Browar Księży Młyn
    - gastronomy               : Kreatoora
    - convenience_store        : Żabka
    - personal_services        : A&K Beauty Hair
    - business_office          : Securitas
    - gastronomy               : Fit Cake Łódź Księży Młyn
    - business_office          : Surchem Sp. z o.o.
```
</details>
<details><summary><b>Warszawska-Legionów (Stryków) (ID: 1863 | H3: 891f524f36bffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Warszawska-Legionów (Stryków)
  stop_id                 : 1863
  h3_index                : 891f524f36bffff
  hub_id                  : 1132
  hub_name                : Warszawska-Legionów (Stryków)
  is_hub_anchor           : True
  stop_lat                : 51.8949
  stop_lon                : 19.5966

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.0342
  stop_local_score_raw    : -2.2032

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 35315.9043
  stop_raw_gravity        : 35315.9043
  stop_entropy            : -0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.5714
  stop_routes_count       : 1
  stop_routes             : 60C
  stop_hub_share          : 1.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 101.2658
  stop_liquidity          : 1

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 143.5306

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x car_services
  > 1x place_of_worship
  > 1x micro_playground
  > 1x park_recreation

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - car_services             : LPG
    - place_of_worship         : Kościół św. Anny i św. Marcina
```
</details>

#### POZIOM 2: NAJWAZNIEJSZE WEZLY LOGICZNE MACRO (TOP 5 HUBOW)
<details><summary><b>HUB: Piłsudskiego-Kilińskiego (ID: 26 | H3: 891e21b155bffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Piłsudskiego-Kilińskiego
  hub_id                  : 26
  h3_index                : 891e21b155bffff
  hub_stops_count         : 6
  hub_stops_ids           : 389, 411, 412, 741, 931, 957
  lat                     : 51.7602
  lon                     : 19.4687

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 100.0000
  hub_local_score_raw     : 1.4041

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 15537909.2422
  hub_raw_gravity         : 5680879.2725
  hub_entropy             : 1.7351

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 83.9286
  hub_routes_count        : 18
  hub_routes              : 1, 2, 4, 5, 6, 8, 12, 14, 18, 57, 77, 83, 10A, 10B, 53A, 64B, 80A, 80B

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 9467.4729
  hub_liquidity           : 4

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 1049.5946
```
</details>
<details><summary><b>HUB: Piotrkowska-Brzeźna (ID: 137 | H3: 891e21b109bffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Piotrkowska-Brzeźna
  hub_id                  : 137
  h3_index                : 891e21b109bffff
  hub_stops_count         : 4
  hub_stops_ids           : 2, 119, 546, 960
  lat                     : 51.7528
  lon                     : 19.4603

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.9299
  hub_local_score_raw     : 1.3729

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 14758328.1570
  hub_raw_gravity         : 5210078.6179
  hub_entropy             : 1.8326

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 71.3571
  hub_routes_count        : 11
  hub_routes              : 2, 3, 6, 7, 11, 57, 77, 83, 55A, 80A, 80B

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 10275.0750
  hub_liquidity           : 6

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 977.8336
```
</details>
<details><summary><b>HUB: Rokicińska-Maszynowa (ID: 497 | H3: 891e21b023bffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Rokicińska-Maszynowa
  hub_id                  : 497
  h3_index                : 891e21b023bffff
  hub_stops_count         : 4
  hub_stops_ids           : 500, 943, 945, 1094
  lat                     : 51.7624
  lon                     : 19.5280

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.8597
  hub_local_score_raw     : 1.3513

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 8722600.3439
  hub_raw_gravity         : 3651629.6827
  hub_entropy             : 1.3887

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 54.6429
  hub_routes_count        : 18
  hub_routes              : 3, 8, 9, 90, 10A, 10B, 58B, 72A, 75A, 75B, 80A, 80B, 82A, 82B, 91A, 91B, 91C, W

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 8870.3702
  hub_liquidity           : 6

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 4871.3463
```
</details>
<details><summary><b>HUB: Piotrkowska-Żwirki (ID: 311 | H3: 891e21b1467ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Piotrkowska-Żwirki
  hub_id                  : 311
  h3_index                : 891e21b1467ffff
  hub_stops_count         : 3
  hub_stops_ids           : 544, 961, 3395
  lat                     : 51.7558
  lon                     : 19.4591

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.7896
  hub_local_score_raw     : 1.2715

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 13370816.6571
  hub_raw_gravity         : 4304089.9719
  hub_entropy             : 2.1065

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 45.5714
  hub_routes_count        : 5
  hub_routes              : 2, 3, 6, 7, 11

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 10425.2401
  hub_liquidity           : 5

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 1510.2866
```
</details>
<details><summary><b>HUB: Kilińskiego-Tuwima (ID: 31 | H3: 891e21b15dbffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Kilińskiego-Tuwima
  hub_id                  : 31
  h3_index                : 891e21b15dbffff
  hub_stops_count         : 3
  hub_stops_ids           : 394, 409, 1362
  lat                     : 51.7660
  lon                     : 19.4662

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.7195
  hub_local_score_raw     : 1.2357

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 17634260.4359
  hub_raw_gravity         : 9900750.4243
  hub_entropy             : 0.7811

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 46.7857
  hub_routes_count        : 10
  hub_routes              : 1, 5, 12, 18, 57, 77, 83, 53A, 80A, 80B

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 9777.3159
  hub_liquidity           : 4

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 1011.5033
```
</details>

---

## LOMZA
#### DASHBOARD ASERCJI PIPELINE'U (Pelna Integralnosc Bazy)
```text
[PASS ZERO NULLS & INFS] Petla obliczeniowa wygenerowala 100% spojnych komorek.
[STATS] [WARN] Z-Score Micro ODD (Mean: -0.000, Std: 0.446)
        Rozklad Rang Slupkow (Micro): A: 18, A+: 9, B: 26, C: 36, D: 44, F: 43
[STATS] [WARN] Z-Score Macro ODD (Mean: -0.000, Std: 0.444)
        Rozklad Rang Hubow (Macro): A: 11, A+: 6, B: 17, C: 23, D: 28, F: 27
[DEMOGRAPHY] [PASS] DEMOGRAFIA W NORMIE: +8.6% (GUS strefa: 65,157 vs Baza miejska: 60,000)
[PASS] POI Parquet 100% Valid (Matematyka Huffa dziala)
[PASS] POP Parquet 100% Valid
[PASS] H3 Res 8 Grid 100% Valid (77 komorek, 36 pustyn transportowych)
```

### Faza 0: Statystyki Ogolne i Balans Sieci
- **Slupki Fizyczne (Micro):** 176 slupkow
- **Wezly Logiczne (Macro Hubs):** 112 hubow (Wskaznik konsolidacji: 1.57 slupka/hub)
- **Populacja Strefy Transportowej (GUS 250m):** 65,157 mieszkancow
- **Transakcje Notarialne RCN:** 5,045 aktow
### Faza 1: Siatka Analityczna Uber H3 Res 8 (0.74 km2 / komorka)
- **Liczba Komorek H3 Res 8:** 77
- **Rynek Nieruchomosci RCN w Heksach:** Pokrycie 55.8% (43/77 komorek), Srednia: 4,127 PLN/m2, Mediana: 4,810 PLN/m2, Std: 1,705, Min: 31, Max: 6,509 PLN/m2
- **Demografia GUS NSP 2021 w Heksach:** Laczna ludnosc w heksach: 65,157, Srednia/heks: 846.2, Mediana: 137.0, Std: 1869.6, Max: 10,473
- **Podaz Transportu w Heksach:** Sredni Transport Score: 20.66, Max Transport Score: 100.00, Srednia odjazdow/h: 0.00, Pustynie Transportowe TDI: 36

#### TOP 5 Pustyn Transportowych (The Investment List)
| H3 Index | Lat | Lon | Populacja GUS | Odjazdy/h | TDI Score |
|---|---|---|---|---|---|
| `881f51cad7fffff` | 53.15771 | 22.07513 | 10,473 | 0.0 | **97.12** |
| `881f51cad1fffff` | 53.16510 | 22.07293 | 9,075 | 0.0 | **95.62** |
| `881f51cad3fffff` | 53.16249 | 22.08581 | 6,450 | 0.0 | **92.04** |
| `881f51c1e5fffff` | 53.17725 | 22.08140 | 4,590 | 0.0 | **88.47** |
| `881f51cad5fffff` | 53.16032 | 22.06225 | 3,296 | 0.0 | **84.99** |

#### TOP 5 Biegunow Transportu (Najwyzsza Podaz)
| H3 Index | Lat | Lon | Transport Score | Odjazdy/h | Liczba Slupkow |
|---|---|---|---|---|---|
| `881f51c13dfffff` | 53.18507 | 22.04274 | **100.00** | 0.0 | 11 |
| `881f51cad7fffff` | 53.15771 | 22.07513 | **100.00** | 0.0 | 11 |
| `881f51cad3fffff` | 53.16249 | 22.08581 | **100.00** | 0.0 | 12 |
| `881f51c1e5fffff` | 53.17725 | 22.08140 | **100.00** | 0.0 | 11 |
| `881f51c131fffff` | 53.18247 | 22.05563 | **90.90** | 0.0 | 10 |

#### TOP 5 Najdrozszych Heksow Mieszkaniowych RCN
| H3 Index | Lat | Lon | Mediana Ceny m2 | Liczba Transakcji |
|---|---|---|---|---|
| `881f51db3bfffff` | 53.24166 | 21.79550 | **6,509 PLN** | 4 |
| `881f51ca99fffff` | 53.15510 | 22.08801 | **6,456 PLN** | 637 |
| `881f51cadbfffff` | 53.16987 | 22.08360 | **6,383 PLN** | 638 |
| `881f51c123fffff` | 53.18030 | 22.03207 | **6,363 PLN** | 1 |
| `881f51cad7fffff` | 53.15771 | 22.07513 | **6,237 PLN** | 996 |

### Faza 2: Audyt Zbednosci TCRP Report 100 (The Axe List)
- **Zbedne Slupki (R >= 0.50 - Umiarkowana Kanibalizacja):** 0
- **Zbedne Slupki (R >= 0.70 - Rekomendacja Likwidacji):** 0
- **Zbedne Slupki (R >= 0.90 - Skrajna Zbednosc / Dubel):** 0
- Brak slupkow spelniajacych prog likwidacji R >= 0.70.

### Faza 3: Hierarchia Magnesow Miejskich POI

#### Top 20 Kategorii POI w Miescie
| Kategoria | Tier | Ilosc w Miescie | Wartosc Punktowa (W) |
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

#### TOP 10 Konkretnych Nazwanych Magnesow Miejskich (T0, T1, T2)
| Nazwa Obiektu | Kategoria POI | Tier | Waga Przyciagania (W) |
|---|---|---|---|
| **Stadion Miejski w Łomży** | `national_stadium` | T1_NATIONAL_MAGNET | 21,016,713 |
| **Szpital Wojewódzki im. Kardynała Stefana Wyszyńskiego w Łomży** | `hospital_clinical` | T1_NATIONAL_MAGNET | 20,160,774 |
| **Wojewódzki Ośrodek Profilaktyki i Terapii Uzależnień w Łomży** | `hospital_clinical` | T1_NATIONAL_MAGNET | 20,160,774 |
| **Akademia Łomżyńska** | `university_campus` | T1_NATIONAL_MAGNET | 5,571,516 |
| **Wyższe Seminarium duchowne im. Jana Pawła II** | `university_campus` | T1_NATIONAL_MAGNET | 5,571,516 |
| **Międzynarodowa Akademia Nauk Stosowanych w Łomży** | `university_campus` | T1_NATIONAL_MAGNET | 5,571,516 |
| **MOSiR Camping** | `commercial_zone` | T2_STRATEGIC_HUB | 3,724,124 |
| **Galeria Veneda** | `shopping_mall` | T2_STRATEGIC_HUB | 2,975,617 |
| **Galeria Dworcowa** | `shopping_mall` | T2_STRATEGIC_HUB | 2,975,617 |
| **Stokrotka** | `supermarket` | T2_STRATEGIC_HUB | 2,124,746 |

### Faza 4: Probki Pelnego DNA (Wszystkie 53 Metryki)

#### POZIOM 1: NAJLEPSZE SLUPKI FIZYCZNE MICRO (TOP 5)
<details><summary><b>Kazańska — Spółdzielnia Perspektywa (ID: 143 | H3: 891f51cad2bffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Kazańska — Spółdzielnia Perspektywa
  stop_id                 : 143
  h3_index                : 891f51cad2bffff
  hub_id                  : 109
  hub_name                : Kazańska — Spółdzielnia Perspektywa
  is_hub_anchor           : False
  stop_lat                : 53.1593
  stop_lon                : 22.0820

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 100.0000
  stop_local_score_raw    : 0.6887

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 3802862.6239
  stop_raw_gravity        : 2007857.5759
  stop_entropy            : 0.8940

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 6280.5978
  stop_liquidity          : 1252

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 828.2642

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 23x micro_playground
  > 8x micro_atm
  > 6x micro_parcel_locker
  > 6x supermarket
  > 6x pharmacy
  > 5x park_recreation
  > 3x shopping_mall
  > 3x gastronomy
  > 3x education_preschool
  > 3x specialized_retail
  > 2x place_of_worship
  > 1x post_office
  > 1x bank
  > 1x personal_services
  > 1x convenience_store
  > 1x government_central
  > 1x hospital_clinical

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm                : Bankomat Cash4You
    - post_office              : UP Łomża 6
    - shopping_mall            : Galeria Łomża
    - micro_atm                : Euronet
    - micro_atm                : PKO BP
    - bank                     : PKO BP
    - micro_atm                : PKO BP
    - micro_parcel_locker      : Paczkomat InPost
    - supermarket              : Stokrotka
    - personal_services        : Rossmann
```
</details>
<details><summary><b>Kazańska — Spółdzielnia Perspektywa (ID: 142 | H3: 891f51cad2bffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Kazańska — Spółdzielnia Perspektywa
  stop_id                 : 142
  h3_index                : 891f51cad2bffff
  hub_id                  : 109
  hub_name                : Kazańska — Spółdzielnia Perspektywa
  is_hub_anchor           : True
  stop_lat                : 53.1602
  stop_lon                : 22.0820

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.4318
  stop_local_score_raw    : 0.6545

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 3554006.5012
  stop_raw_gravity        : 2159195.1952
  stop_entropy            : 0.6460

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 6125.5743
  stop_liquidity          : 1051

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 821.8924

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
    - micro_atm                : Bankomat Cash4You
    - post_office              : UP Łomża 6
    - shopping_mall            : Galeria Łomża
    - micro_atm                : Euronet
    - micro_atm                : PKO BP
    - bank                     : PKO BP
    - micro_atm                : PKO BP
    - micro_parcel_locker      : Paczkomat InPost
    - supermarket              : Stokrotka
    - gastronomy               : Diavolo Łomża
```
</details>
<details><summary><b>Zawadzka — Stokrotka (ID: 96 | H3: 891f51cad77ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Zawadzka — Stokrotka
  stop_id                 : 96
  h3_index                : 891f51cad77ffff
  hub_id                  : 103
  hub_name                : Zawadzka — Stokrotka
  is_hub_anchor           : True
  stop_lat                : 53.1612
  stop_lon                : 22.0761

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 98.8636
  stop_local_score_raw    : 0.5834

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 2665933.3323
  stop_raw_gravity        : 1555071.0156
  stop_entropy            : 0.7143

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 5769.5178
  stop_liquidity          : 642

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 1080.7691

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
    - post_office              : UP Łomża 6
    - shopping_mall            : Galeria Łomża
    - micro_atm                : Euronet
    - micro_atm                : PKO BP
    - bank                     : PKO BP
    - micro_atm                : PKO BP
    - micro_parcel_locker      : Paczkomat InPost
    - gastronomy               : Diavolo Łomża
    - personal_services        : Rossmann
    - gastronomy               : Apetyt Bistro
```
</details>
<details><summary><b>Aleja Legionów — Stary Szpital (ID: 4 | H3: 891f51c132fffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Aleja Legionów — Stary Szpital
  stop_id                 : 4
  h3_index                : 891f51c132fffff
  hub_id                  : 0
  hub_name                : Aleja Legionów — Kontakty
  is_hub_anchor           : False
  stop_lat                : 53.1766
  stop_lon                : 22.0716

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 98.2955
  stop_local_score_raw    : 0.5537

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 4876361.1382
  stop_raw_gravity        : 2221404.8326
  stop_entropy            : 1.1952

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 5293.9921
  stop_liquidity          : 240

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 612.6368

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 11x bank
  > 10x place_of_worship
  > 10x micro_playground
  > 7x gastronomy
  > 7x park_recreation
  > 6x education_high_school
  > 5x pharmacy
  > 4x personal_services
  > 4x convenience_store
  > 4x government_central
  > 4x education_preschool
  > 2x culture_theatre
  > 2x police_station
  > 2x micro_parcel_locker
  > 1x marketplace
  > 1x specialized_retail
  > 1x social_support_mops
  > 1x university_campus
  > 1x post_office
  > 1x supermarket
  > 1x hospital_clinical

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - pharmacy                 : Gemini
    - marketplace              : Targowisko Miejskie
    - education_high_school    : Katolicka szkoła podstawowa im. Kardynała S. Wyszyńskiego
    - gastronomy               : Chicken Bar
    - culture_theatre          : Miejska Biblioteka Publiczna
    - bank                     : Alior Bank
    - bank                     : EuroBank
    - pharmacy                 : Medica
    - bank                     : SKOK
    - gastronomy               : Smak Kebab
```
</details>
<details><summary><b>Aleja Piłsudzkiego — Empik (ID: 49 | H3: 891f51cad77ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Aleja Piłsudzkiego — Empik
  stop_id                 : 49
  h3_index                : 891f51cad77ffff
  hub_id                  : 34
  hub_name                : Aleja Piłsudzkiego — Łagody
  is_hub_anchor           : False
  stop_lat                : 53.1608
  stop_lon                : 22.0792

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 97.7273
  stop_local_score_raw    : 0.5089

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 2468946.9602
  stop_raw_gravity        : 1111789.9307
  stop_entropy            : 1.2207

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 5545.2865
  stop_liquidity          : 665

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 849.0335

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
    - micro_atm                : Bankomat Cash4You
    - post_office              : UP Łomża 6
    - education_preschool      : Przedszkole Publiczne Nr 10
    - shopping_mall            : Galeria Łomża
    - micro_atm                : Euronet
    - micro_atm                : PKO BP
    - bank                     : PKO BP
    - micro_atm                : PKO BP
    - micro_parcel_locker      : Paczkomat InPost
    - supermarket              : Stokrotka
```
</details>

#### POZIOM 1: NAJSLABSZE SLUPKI FIZYCZNE MICRO (BOTTOM 5)
<details><summary><b>Browarna — Mostek (ID: 178 | H3: 891f51c13cbffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Browarna — Mostek
  stop_id                 : 178
  h3_index                : 891f51c13cbffff
  hub_id                  : 83
  hub_name                : Browarna — Mostek
  is_hub_anchor           : False
  stop_lat                : 53.1815
  stop_lon                : 22.0397

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 2.8409
  stop_local_score_raw    : -1.2163

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 125.0902
  stop_raw_gravity        : 125.0902
  stop_entropy            : -0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 6155.1640
  stop_liquidity          : 4

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 502.5943

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x gastronomy

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy               : Pizzeria Sawana
```
</details>
<details><summary><b>Rybaki — Sikorskiego (ID: 131 | H3: 891f51c1e63ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Rybaki — Sikorskiego
  stop_id                 : 131
  h3_index                : 891f51c1e63ffff
  hub_id                  : 61
  hub_name                : Rybaki — Sikorskiego
  is_hub_anchor           : True
  stop_lat                : 53.1748
  stop_lon                : 22.0933

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 2.2727
  stop_local_score_raw    : -1.2685

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 10121.1621
  stop_raw_gravity        : 10121.1621
  stop_entropy            : -0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 2692.3077
  stop_liquidity          : 1

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 160.2287

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x gastronomy
  > 1x convenience_store

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store        : Sklep Spożywczy Ewa
```
</details>
<details><summary><b>Zdrojowa Ⅰ (ID: 85 | H3: 891f51c1e6fffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Zdrojowa Ⅰ
  stop_id                 : 85
  h3_index                : 891f51c1e6fffff
  hub_id                  : 26
  hub_name                : Zdrojowa Ⅰ
  is_hub_anchor           : False
  stop_lat                : 53.1726
  stop_lon                : 22.0959

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 1.7045
  stop_local_score_raw    : -1.7166

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 842.7905
  stop_raw_gravity        : 842.7905
  stop_entropy            : -0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 2692.3077
  stop_liquidity          : 1

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 150.7839

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x convenience_store

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store        : Sklep Spożywczy Ewa
```
</details>
<details><summary><b>Zdrojowa Ⅰ (ID: 84 | H3: 891f51c1e6fffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Zdrojowa Ⅰ
  stop_id                 : 84
  h3_index                : 891f51c1e6fffff
  hub_id                  : 26
  hub_name                : Zdrojowa Ⅰ
  is_hub_anchor           : True
  stop_lat                : 53.1726
  stop_lon                : 22.0961

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 1.1364
  stop_local_score_raw    : -1.7366

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 759.4495
  stop_raw_gravity        : 759.4495
  stop_entropy            : -0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 2692.3077
  stop_liquidity          : 1

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 148.6605

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x convenience_store

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store        : Sklep Spożywczy Ewa
```
</details>
<details><summary><b>Królowej Bony (ID: 212 | H3: 891f51c1ad7ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Królowej Bony
  stop_id                 : 212
  h3_index                : 891f51c1ad7ffff
  hub_id                  : 87
  hub_name                : Królowej Bony
  is_hub_anchor           : True
  stop_lat                : 53.1700
  stop_lon                : 22.0995

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.5682
  stop_local_score_raw    : -2.2105

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 5960.6481
  stop_liquidity          : 2

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 192.3234

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>

#### POZIOM 2: NAJWAZNIEJSZE WEZLY LOGICZNE MACRO (TOP 5 HUBOW)
<details><summary><b>HUB: Kazańska — Spółdzielnia Perspektywa (ID: 109 | H3: 891f51cad2bffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Kazańska — Spółdzielnia Perspektywa
  hub_id                  : 109
  h3_index                : 891f51cad2bffff
  hub_stops_count         : 2
  hub_stops_ids           : 142, 143
  lat                     : 53.1598
  lon                     : 22.0820

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 100.0000
  hub_local_score_raw     : 0.7214

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 6848506.1805
  hub_raw_gravity         : 3952707.4165
  hub_entropy             : 0.7326

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 0.0000
  hub_routes_count        : 0
  hub_routes              : 

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 6257.0451
  hub_liquidity           : 1262

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 1544.2297
```
</details>
<details><summary><b>HUB: Zawadzka — Stokrotka (ID: 103 | H3: 891f51cad77ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Zawadzka — Stokrotka
  hub_id                  : 103
  h3_index                : 891f51cad77ffff
  hub_stops_count         : 1
  hub_stops_ids           : 96
  lat                     : 53.1612
  lon                     : 22.0761

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.1071
  hub_local_score_raw     : 0.5677

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 3969243.3041
  hub_raw_gravity         : 2306893.0045
  hub_entropy             : 0.7206

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 0.0000
  hub_routes_count        : 0
  hub_routes              : 

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 5769.5178
  hub_liquidity           : 642

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 1675.2307
```
</details>
<details><summary><b>HUB: Aleja Piłsudzkiego — Łagody (ID: 34 | H3: 891f51cad77ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Aleja Piłsudzkiego — Łagody
  hub_id                  : 34
  h3_index                : 891f51cad77ffff
  hub_stops_count         : 2
  hub_stops_ids           : 48, 49
  lat                     : 53.1606
  lon                     : 22.0792

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 98.2143
  hub_local_score_raw     : 0.5164

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 3983791.9842
  hub_raw_gravity         : 1800901.9968
  hub_entropy             : 1.2121

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 0.0000
  hub_routes_count        : 0
  hub_routes              : 

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 5540.1662
  hub_liquidity           : 675

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 1460.9883
```
</details>
<details><summary><b>HUB: Aleja Legionów — Kontakty (ID: 0 | H3: 891f51c132fffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Aleja Legionów — Kontakty
  hub_id                  : 0
  h3_index                : 891f51c132fffff
  hub_stops_count         : 2
  hub_stops_ids           : 3, 4
  lat                     : 53.1770
  lon                     : 22.0721

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 97.3214
  hub_local_score_raw     : 0.5002

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 6053473.9836
  hub_raw_gravity         : 2583530.1330
  hub_entropy             : 1.3431

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 0.0000
  hub_routes_count        : 0
  hub_routes              : 

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 5275.6532
  hub_liquidity           : 298

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 1009.2018
```
</details>
<details><summary><b>HUB: Aleja Legionów — Kopernika (ID: 2 | H3: 891f51cad9bffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Aleja Legionów — Kopernika
  hub_id                  : 2
  h3_index                : 891f51cad9bffff
  hub_stops_count         : 3
  hub_stops_ids           : 5, 6, 73
  lat                     : 53.1734
  lon                     : 22.0684

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 96.4286
  hub_local_score_raw     : 0.4711

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 7263138.8547
  hub_raw_gravity         : 3256723.7363
  hub_entropy             : 1.2302

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 0.0000
  hub_routes_count        : 0
  hub_routes              : 

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 5228.7582
  hub_liquidity           : 175

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 649.2856
```
</details>

---

## LUBLIN
#### DASHBOARD ASERCJI PIPELINE'U (Pelna Integralnosc Bazy)
```text
[PASS ZERO NULLS & INFS] Petla obliczeniowa wygenerowala 100% spojnych komorek.
[STATS] [PASS] Z-Score Micro VALID (Mean: 0.000, Std: 0.702)
        Rozklad Rang Slupkow (Micro): A: 132, A+: 66, B: 197, C: 263, D: 328, F: 328
[STATS] [PASS] Z-Score Macro VALID (Mean: -0.000, Std: 0.712)
        Rozklad Rang Hubow (Macro): A: 76, A+: 38, B: 113, C: 151, D: 189, F: 188
[DEMOGRAPHY] [INFO] OBSZAR AGLOMERACYJNY: +35.2% (GUS strefa aglomeracyjna: 446,126 vs Miasto rdzen: 330,000)
[PASS] POI Parquet 100% Valid (Matematyka Huffa dziala)
[PASS] POP Parquet 100% Valid
[PASS] H3 Res 8 Grid 100% Valid (869 komorek, 165 pustyn transportowych)
```

### Faza 0: Statystyki Ogolne i Balans Sieci
- **Slupki Fizyczne (Micro):** 1,314 slupkow
- **Wezly Logiczne (Macro Hubs):** 755 hubow (Wskaznik konsolidacji: 1.74 slupka/hub)
- **Populacja Strefy Transportowej (GUS 250m):** 446,126 mieszkancow
- **Transakcje Notarialne RCN:** 40,868 aktow
### Faza 1: Siatka Analityczna Uber H3 Res 8 (0.74 km2 / komorka)
- **Liczba Komorek H3 Res 8:** 869
- **Rynek Nieruchomosci RCN w Heksach:** Pokrycie 29.6% (257/869 komorek), Srednia: 6,764 PLN/m2, Mediana: 6,768 PLN/m2, Std: 2,425, Min: 428, Max: 26,463 PLN/m2
- **Demografia GUS NSP 2021 w Heksach:** Laczna ludnosc w heksach: 446,126, Srednia/heks: 513.4, Mediana: 94.0, Std: 1327.7, Max: 9,239
- **Podaz Transportu w Heksach:** Sredni Transport Score: 9.18, Max Transport Score: 100.00, Srednia odjazdow/h: 13.62, Pustynie Transportowe TDI: 165

#### TOP 5 Pustyn Transportowych (The Investment List)
| H3 Index | Lat | Lon | Populacja GUS | Odjazdy/h | TDI Score |
|---|---|---|---|---|---|
| `881e2d0985fffff` | 51.21899 | 22.51163 | 3,814 | 0.0 | **86.53** |
| `881e2d0831fffff` | 51.25921 | 22.52406 | 1,893 | 0.0 | **79.18** |
| `881e2d7261fffff` | 51.20527 | 22.57413 | 1,728 | 0.0 | **78.22** |
| `881e2d0823fffff` | 51.25707 | 22.50115 | 1,343 | 0.0 | **75.58** |
| `881e2d0917fffff` | 51.23482 | 22.47202 | 756 | 0.0 | **69.56** |

#### TOP 5 Biegunow Transportu (Najwyzsza Podaz)
| H3 Index | Lat | Lon | Transport Score | Odjazdy/h | Liczba Slupkow |
|---|---|---|---|---|---|
| `881e2d7251fffff` | 51.22201 | 22.62827 | **100.00** | 246.6 | 9 |
| `881e2d7249fffff` | 51.23026 | 22.59077 | **100.00** | 284.2 | 11 |
| `881e2d0817fffff` | 51.26896 | 22.54489 | **100.00** | 156.9 | 7 |
| `881e2d0813fffff` | 51.27383 | 22.55531 | **100.00** | 171.1 | 6 |
| `881e2d08e9fffff` | 51.26621 | 22.55740 | **100.00** | 204.6 | 9 |

#### TOP 5 Najdrozszych Heksow Mieszkaniowych RCN
| H3 Index | Lat | Lon | Mediana Ceny m2 | Liczba Transakcji |
|---|---|---|---|---|
| `881e2d7217fffff` | 51.19638 | 22.64701 | **26,463 PLN** | 4 |
| `881e2d72edfffff` | 51.18876 | 22.64909 | **17,083 PLN** | 2 |
| `881e2d3a09fffff` | 51.32867 | 22.98708 | **14,056 PLN** | 2 |
| `881e2d08bbfffff` | 51.24486 | 22.62202 | **13,800 PLN** | 12 |
| `881e2d08e9fffff` | 51.26621 | 22.55740 | **10,746 PLN** | 670 |

### Faza 2: Audyt Zbednosci TCRP Report 100 (The Axe List)
- **Zbedne Slupki (R >= 0.50 - Umiarkowana Kanibalizacja):** 451
- **Zbedne Slupki (R >= 0.70 - Rekomendacja Likwidacji):** 311
- **Zbedne Slupki (R >= 0.90 - Skrajna Zbednosc / Dubel):** 151

| Zbedny Słupek | Dominujacy Słupek | Dystans [m] | S_service | S_spatial | S_cannibal | R-Score |
|---|---|---|---|---|---|---|
| Skalskiego (#3292, 4.214285714285714 odj/h) | Skalskiego (#3291, 4.285714285714286 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |
| Kupiecka IKEA (#2004, 1.5714285714285714 odj/h) | Kupiecka IKEA (#2003, 1.5714285714285714 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |
| Kupiecka IKEA (#2003, 1.5714285714285714 odj/h) | Kupiecka IKEA (#2004, 1.5714285714285714 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |
| Płouszowice Pierwsze NŻ (#9722, 0.5714285714285714 odj/h) | Płouszowice Kolonia NŻ (#9712, 0.5714285714285714 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |
| Płouszowice Kolonia NŻ (#9712, 0.5714285714285714 odj/h) | Płouszowice Pierwsze NŻ (#9722, 0.5714285714285714 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |

### Faza 3: Hierarchia Magnesow Miejskich POI

#### Top 20 Kategorii POI w Miescie
| Kategoria | Tier | Ilosc w Miescie | Wartosc Punktowa (W) |
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

#### TOP 10 Konkretnych Nazwanych Magnesow Miejskich (T0, T1, T2)
| Nazwa Obiektu | Kategoria POI | Tier | Waga Przyciagania (W) |
|---|---|---|---|
| **Port Lotniczy Lublin** | `international_airport` | T0_MEGA_HUB | 191,846,537 |
| **Lublin Główny** | `national_rail_hub` | T0_MEGA_HUB | 35,896,452 |
| **KS Ciecierzyn** | `national_stadium` | T1_NATIONAL_MAGNET | 23,123,671 |
| **I Klinika Psychiatrii** | `hospital_clinical` | T1_NATIONAL_MAGNET | 21,682,418 |
| **Samodzielny Publiczny Zakład Opieki Zdrowotnej w Świdniku** | `hospital_clinical` | T1_NATIONAL_MAGNET | 21,682,418 |
| **I Wojskowy Szpital Kliniczny z Polikliniką SPZOZ w Lublinie** | `hospital_clinical` | T1_NATIONAL_MAGNET | 21,682,418 |
| **Samodzielny Publiczny Zakład Opieki Zdrowotnej - Szpital MSWiA w Lublinie** | `hospital_clinical` | T1_NATIONAL_MAGNET | 21,682,418 |
| **Wojewódzki Szpital Specjalistyczny im. Stefana Wyszyńskiego** | `hospital_clinical` | T1_NATIONAL_MAGNET | 21,682,418 |
| **Uniwersytecki Szpital Kliniczny Nr 4 w Lublinie** | `hospital_clinical` | T1_NATIONAL_MAGNET | 21,682,418 |
| **Uniwersytecki Szpital Kliniczny nr 1 w Lublinie** | `hospital_clinical` | T1_NATIONAL_MAGNET | 21,682,418 |

### Faza 4: Probki Pelnego DNA (Wszystkie 53 Metryki)

#### POZIOM 1: NAJLEPSZE SLUPKI FIZYCZNE MICRO (TOP 5)
<details><summary><b>Ogród Saski (ID: 1003 | H3: 891e2d09db3ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Ogród Saski
  stop_id                 : 1003
  h3_index                : 891e2d09db3ffff
  hub_id                  : 209
  hub_name                : Ogród Saski
  is_hub_anchor           : True
  stop_lat                : 51.2477
  stop_lon                : 22.5506

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 100.0000
  stop_local_score_raw    : 1.6206

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 11647552.8979
  stop_raw_gravity        : 4861616.6231
  stop_entropy            : 1.3958

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 39.5000
  stop_routes_count       : 19
  stop_routes             : 2, 3, 4, 7, 8, 13, 15, 18, 20, 26, 31, 44, 55, 57, 74, 150, 151, 155, 158
  stop_hub_share          : 0.6227

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 9655.1724
  stop_liquidity          : 981

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 325.5773

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
    - business_office          : Voal Lublin
    - convenience_store        : Żabka
    - micro_atm                : Euronet
    - micro_atm                : PKO BP
    - gastronomy               : Shawarma
    - gastronomy               : Insomnia
    - convenience_store        : Żabka
    - bank                     : Narodowy Bank Polski
    - specialized_retail       : Pracownia Krawiecka i Renowacja odzieży skórzanej
    - bank                     : Punkt Obsługi Bankowej I piętro
```
</details>
<details><summary><b>Plac Litewski (ID: 1021 | H3: 891e2d08e6bffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Plac Litewski
  stop_id                 : 1021
  h3_index                : 891e2d08e6bffff
  hub_id                  : 556
  hub_name                : Plac Litewski
  is_hub_anchor           : False
  stop_lat                : 51.2494
  stop_lon                : 22.5580

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.9239
  stop_local_score_raw    : 1.5483

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 26907892.5529
  stop_raw_gravity        : 11219701.5495
  stop_entropy            : 1.3983

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 19.0000
  stop_routes_count       : 9
  stop_routes             : 2, 18, 26, 31, 32, 40, 57, 150, 302
  stop_hub_share          : 0.4981

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 10634.2759
  stop_liquidity          : 831

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 538.5433

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
    - bank                     : Millennium Bank
    - convenience_store        : Żabka
    - micro_atm                : Euronet
    - micro_atm                : PKO BP
    - bank                     : Millennium Przedsiębiorstwa
    - bank                     : Narodowy Bank Polski
    - specialized_retail       : Pracownia Krawiecka i Renowacja odzieży skórzanej
    - convenience_store        : Żabka
    - bank                     : Punkt Obsługi Bankowej I piętro
    - convenience_store        : Żabka
```
</details>
<details><summary><b>Plac Litewski (ID: 1022 | H3: 891e2d08e6bffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Plac Litewski
  stop_id                 : 1022
  h3_index                : 891e2d08e6bffff
  hub_id                  : 556
  hub_name                : Plac Litewski
  is_hub_anchor           : True
  stop_lat                : 51.2490
  stop_lon                : 22.5581

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.8478
  stop_local_score_raw    : 1.5321

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 25969392.4333
  stop_raw_gravity        : 10318958.1689
  stop_entropy            : 1.5167

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 19.1429
  stop_routes_count       : 9
  stop_routes             : 2, 18, 26, 31, 32, 40, 57, 150, 302
  stop_hub_share          : 0.5019

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 10500.0000
  stop_liquidity          : 852

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 513.2762

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 68x gastronomy
  > 28x government_central
  > 22x bank
  > 22x convenience_store
  > 22x park_recreation
  > 17x personal_services
  > 17x university_campus
  > 16x specialized_retail
  > 14x education_high_school
  > 12x commercial_zone
  > 10x pharmacy
  > 10x micro_playground
  > 9x micro_atm
  > 9x health_clinic
  > 7x place_of_worship
  > 5x culture_theatre
  > 5x business_office
  > 5x micro_parcel_locker
  > 4x education_preschool
  > 4x social_support_mops
  > 3x hospital_clinical
  > 2x supermarket
  > 1x post_office
  > 1x shopping_mall
  > 1x marketplace

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - bank                     : Millennium Bank
    - convenience_store        : Żabka
    - micro_atm                : Euronet
    - micro_atm                : PKO BP
    - micro_atm                : Euronet
    - bank                     : Millennium Przedsiębiorstwa
    - bank                     : Narodowy Bank Polski
    - specialized_retail       : Pracownia Krawiecka i Renowacja odzieży skórzanej
    - convenience_store        : Żabka
    - bank                     : Punkt Obsługi Bankowej I piętro
```
</details>
<details><summary><b>Zamojska (ID: 2231 | H3: 891e2d08ac7ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Zamojska
  stop_id                 : 2231
  h3_index                : 891e2d08ac7ffff
  hub_id                  : 48
  hub_name                : Zamojska
  is_hub_anchor           : True
  stop_lat                : 51.2421
  stop_lon                : 22.5689

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.7717
  stop_local_score_raw    : 1.4850

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 7365483.1093
  stop_raw_gravity        : 3652710.3818
  stop_entropy            : 1.0164

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 26.8571
  stop_routes_count       : 15
  stop_routes             : 3, 5, 6, 7, 13, 17, 22, 23, 24, 25, 52, 55, 156, 159, 160
  stop_hub_share          : 0.5215

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 10175.0000
  stop_liquidity          : 213

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 368.5606

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 7x micro_parcel_locker
  > 7x education_high_school
  > 7x park_recreation
  > 5x convenience_store
  > 5x micro_playground
  > 5x university_campus
  > 4x social_support_mops
  > 3x specialized_retail
  > 3x gastronomy
  > 3x place_of_worship
  > 2x shopping_mall
  > 2x police_station
  > 1x supermarket
  > 1x bank
  > 1x car_services
  > 1x personal_services
  > 1x culture_theatre
  > 1x education_preschool
  > 1x micro_atm
  > 1x government_central
  > 1x business_office
  > 1x commercial_zone
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - shopping_mall            : Vipsat
    - supermarket              : Biedronka
    - bank                     : Bank DNB Nord
    - car_services             : Amic
    - specialized_retail       : Telemax
    - specialized_retail       : Retoure Euro RTV AGD
    - personal_services        : Salon Fryzjerski Syrena
    - gastronomy               : Jazzve
    - culture_theatre          : Letnie Kino Perła
    - convenience_store        : Społem
```
</details>
<details><summary><b>Zamojska (ID: 2232 | H3: 891e2d08a1bffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Zamojska
  stop_id                 : 2232
  h3_index                : 891e2d08a1bffff
  hub_id                  : 48
  hub_name                : Zamojska
  is_hub_anchor           : False
  stop_lat                : 51.2416
  stop_lon                : 22.5694

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.6956
  stop_local_score_raw    : 1.4552

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 8015186.1453
  stop_raw_gravity        : 3862476.1267
  stop_entropy            : 1.0751

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 24.6429
  stop_routes_count       : 14
  stop_routes             : 3, 5, 6, 7, 13, 17, 22, 24, 25, 52, 55, 156, 159, 160
  stop_hub_share          : 0.4785

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 10207.0841
  stop_liquidity          : 209

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 345.7425

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
    - shopping_mall            : Vipsat
    - supermarket              : Biedronka
    - micro_atm                : Euronet
    - micro_atm                : Euronet
    - bank                     : Bank DNB Nord
    - car_services             : Amic
    - sports_centre            : Hala MOSiR im. Zdzisława Niedzieli
    - sports_centre            : Strefa H2O
    - specialized_retail       : Telemax
    - gastronomy               : Maxipizza
```
</details>

#### POZIOM 1: NAJSLABSZE SLUPKI FIZYCZNE MICRO (BOTTOM 5)
<details><summary><b>Zawieprzyce - skrzyżowanie NŻ (ID: 9661 | H3: 891e2d00b63ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Zawieprzyce - skrzyżowanie NŻ
  stop_id                 : 9661
  h3_index                : 891e2d00b63ffff
  hub_id                  : 32
  hub_name                : Zawieprzyce - skrzyżowanie NŻ
  is_hub_anchor           : True
  stop_lat                : 51.3538
  stop_lon                : 22.7444

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.3805
  stop_local_score_raw    : -1.8842

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.6429
  stop_routes_count       : 1
  stop_routes             : 22
  stop_hub_share          : 1.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 7245.8954
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 2.8093

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Kawka - szklarnia NŻ (ID: 8062 | H3: 891e2d1884fffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Kawka - szklarnia NŻ
  stop_id                 : 8062
  h3_index                : 891e2d1884fffff
  hub_id                  : 427
  hub_name                : Kawka - szklarnia NŻ
  is_hub_anchor           : False
  stop_lat                : 51.3757
  stop_lon                : 22.4681

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.3044
  stop_local_score_raw    : -1.8933

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.3571
  stop_routes_count       : 1
  stop_routes             : 44
  stop_hub_share          : 0.5000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 7245.8954
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 6.1688

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Kawka - szklarnia NŻ (ID: 8061 | H3: 891e2d1884fffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Kawka - szklarnia NŻ
  stop_id                 : 8061
  h3_index                : 891e2d1884fffff
  hub_id                  : 427
  hub_name                : Kawka - szklarnia NŻ
  is_hub_anchor           : True
  stop_lat                : 51.3755
  stop_lon                : 22.4682

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.2283
  stop_local_score_raw    : -1.9001

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.3571
  stop_routes_count       : 1
  stop_routes             : 44
  stop_hub_share          : 0.5000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 7245.8954
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 5.7248

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Snopków I (ID: 9512 | H3: 891e2d08417ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Snopków I
  stop_id                 : 9512
  h3_index                : 891e2d08417ffff
  hub_id                  : 259
  hub_name                : Snopków I
  is_hub_anchor           : True
  stop_lat                : 51.2990
  stop_lon                : 22.4929

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.1522
  stop_local_score_raw    : -1.9014

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.7857
  stop_routes_count       : 1
  stop_routes             : 7
  stop_hub_share          : 1.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 4567.3390
  stop_liquidity          : 1

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 85.8954

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x car_services

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - car_services             : Auto Naprawa Łukasz Lipiec
```
</details>
<details><summary><b>Podzamcze (ID: 50518 | H3: 891e2d0db87ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Podzamcze
  stop_id                 : 50518
  h3_index                : 891e2d0db87ffff
  hub_id                  : 640
  hub_name                : Podzamcze
  is_hub_anchor           : True
  stop_lat                : 51.2097
  stop_lon                : 22.7874

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.0761
  stop_local_score_raw    : -1.9300

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 1033.6439
  stop_raw_gravity        : 1033.6439
  stop_entropy            : -0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 2488.8709
  stop_liquidity          : 1

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 172.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 3x park_recreation
  > 1x micro_playground

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - park_recreation          : zespół pałacowo-parkowy w Podzamczu
```
</details>

#### POZIOM 2: NAJWAZNIEJSZE WEZLY LOGICZNE MACRO (TOP 5 HUBOW)
<details><summary><b>HUB: Ogród Saski (ID: 209 | H3: 891e2d09da3ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Ogród Saski
  hub_id                  : 209
  h3_index                : 891e2d09da3ffff
  hub_stops_count         : 2
  hub_stops_ids           : 1001, 1003
  lat                     : 51.2475
  lon                     : 22.5510

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 100.0000
  hub_local_score_raw     : 1.5448

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 26610472.1708
  hub_raw_gravity         : 11271840.3490
  hub_entropy             : 1.3608

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 63.4286
  hub_routes_count        : 22
  hub_routes              : 2, 3, 4, 7, 8, 13, 15, 18, 20, 26, 31, 32, 40, 44, 55, 57, 74, 150, 151, 155, 158, 302

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 9661.2834
  hub_liquidity           : 1063

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 596.6178
```
</details>
<details><summary><b>HUB: Plac Litewski (ID: 556 | H3: 891e2d08e6bffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Plac Litewski
  hub_id                  : 556
  h3_index                : 891e2d08e6bffff
  hub_stops_count         : 2
  hub_stops_ids           : 1021, 1022
  lat                     : 51.2492
  lon                     : 22.5580

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.8675
  hub_local_score_raw     : 1.5215

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 44097035.8639
  hub_raw_gravity         : 17742268.8335
  hub_entropy             : 1.4854

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 38.1429
  hub_routes_count        : 9
  hub_routes              : 2, 18, 26, 31, 32, 40, 57, 150, 302

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 10477.8057
  hub_liquidity           : 855

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 804.6433
```
</details>
<details><summary><b>HUB: Zamojska (ID: 48 | H3: 891e2d08ac7ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Zamojska
  hub_id                  : 48
  h3_index                : 891e2d08ac7ffff
  hub_stops_count         : 2
  hub_stops_ids           : 2231, 2232
  lat                     : 51.2418
  lon                     : 22.5692

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.7351
  hub_local_score_raw     : 1.4700

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 13682080.0370
  hub_raw_gravity         : 6604393.2802
  hub_entropy             : 1.0717

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 51.5000
  hub_routes_count        : 15
  hub_routes              : 3, 5, 6, 7, 13, 17, 22, 23, 24, 25, 52, 55, 156, 159, 160

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 10088.3635
  hub_liquidity           : 219

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 690.6494
```
</details>
<details><summary><b>HUB: KUL (ID: 713 | H3: 891e2d09d87ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : KUL
  hub_id                  : 713
  h3_index                : 891e2d09d87ffff
  hub_stops_count         : 2
  hub_stops_ids           : 5902, 5903
  lat                     : 51.2489
  lon                     : 22.5420

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.6026
  hub_local_score_raw     : 1.2840

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 8421112.5772
  hub_raw_gravity         : 5400774.4769
  hub_entropy             : 0.5592

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 71.2857
  hub_routes_count        : 20
  hub_routes              : 2, 3, 4, 7, 8, 12, 13, 15, 18, 20, 26, 31, 44, 55, 57, 74, 150, 151, 155, 158

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 7778.9588
  hub_liquidity           : 891

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 516.5858
```
</details>
<details><summary><b>HUB: Lotnicza (ID: 459 | H3: 891e2d72493ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Lotnicza
  hub_id                  : 459
  h3_index                : 891e2d72493ffff
  hub_stops_count         : 2
  hub_stops_ids           : 3121, 3122
  lat                     : 51.2331
  lon                     : 22.5863

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.4702
  hub_local_score_raw     : 1.2609

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 15429541.3745
  hub_raw_gravity         : 7895714.0486
  hub_entropy             : 0.9542

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 35.8571
  hub_routes_count        : 11
  hub_routes              : 7, 14, 16, 23, 35, 55, 153, 156, 158, 161, 950

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 7547.4128
  hub_liquidity           : 1613

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 2629.9225
```
</details>

---

## OLSZTYN
#### DASHBOARD ASERCJI PIPELINE'U (Pelna Integralnosc Bazy)
```text
[PASS ZERO NULLS & INFS] Petla obliczeniowa wygenerowala 100% spojnych komorek.
[STATS] [WARN] Z-Score Micro ODD (Mean: -0.000, Std: 0.471)
        Rozklad Rang Slupkow (Micro): A: 82, A+: 41, B: 123, C: 163, D: 204, F: 204
[STATS] [WARN] Z-Score Macro ODD (Mean: -0.000, Std: 0.470)
        Rozklad Rang Hubow (Macro): A: 42, A+: 22, B: 64, C: 85, D: 106, F: 106
[DEMOGRAPHY] [INFO] OBSZAR AGLOMERACYJNY: +26.8% (GUS strefa aglomeracyjna: 215,625 vs Miasto rdzen: 170,000)
[PASS] POI Parquet 100% Valid (Matematyka Huffa dziala)
[PASS] POP Parquet 100% Valid
[PASS] H3 Res 8 Grid 100% Valid (708 komorek, 142 pustyn transportowych)
```

### Faza 0: Statystyki Ogolne i Balans Sieci
- **Slupki Fizyczne (Micro):** 817 slupkow
- **Wezly Logiczne (Macro Hubs):** 425 hubow (Wskaznik konsolidacji: 1.92 slupka/hub)
- **Populacja Strefy Transportowej (GUS 250m):** 215,625 mieszkancow
- **Transakcje Notarialne RCN:** 20,397 aktow
### Faza 1: Siatka Analityczna Uber H3 Res 8 (0.74 km2 / komorka)
- **Liczba Komorek H3 Res 8:** 708
- **Rynek Nieruchomosci RCN w Heksach:** Pokrycie 37.9% (268/708 komorek), Srednia: 5,527 PLN/m2, Mediana: 5,740 PLN/m2, Std: 3,898, Min: 26, Max: 47,546 PLN/m2
- **Demografia GUS NSP 2021 w Heksach:** Laczna ludnosc w heksach: 215,625, Srednia/heks: 304.6, Mediana: 17.5, Std: 1092.6, Max: 10,444
- **Podaz Transportu w Heksach:** Sredni Transport Score: 10.99, Max Transport Score: 100.00, Srednia odjazdow/h: 0.00, Pustynie Transportowe TDI: 142

#### TOP 5 Pustyn Transportowych (The Investment List)
| H3 Index | Lat | Lon | Populacja GUS | Odjazdy/h | TDI Score |
|---|---|---|---|---|---|
| `881f543981fffff` | 53.78820 | 20.48851 | 10,444 | 0.0 | **97.09** |
| `881f542b01fffff` | 53.73727 | 20.50533 | 9,077 | 0.0 | **95.62** |
| `881f5439b9fffff` | 53.77852 | 20.50397 | 8,142 | 0.0 | **94.48** |
| `881f542b0dfffff` | 53.73968 | 20.49228 | 8,075 | 0.0 | **94.39** |
| `881f542b09fffff` | 53.74455 | 20.50293 | 7,286 | 0.0 | **93.31** |

#### TOP 5 Biegunow Transportu (Najwyzsza Podaz)
| H3 Index | Lat | Lon | Transport Score | Odjazdy/h | Liczba Slupkow |
|---|---|---|---|---|---|
| `881f547697fffff` | 53.74690 | 20.45315 | **100.00** | 0.0 | 11 |
| `881f5439abfffff` | 53.77606 | 20.48027 | **100.00** | 0.0 | 12 |
| `881f5439b1fffff` | 53.77124 | 20.50637 | **100.00** | 0.0 | 10 |
| `881f5439b5fffff` | 53.76638 | 20.49572 | **100.00** | 0.0 | 11 |
| `881f5439b7fffff` | 53.76397 | 20.50877 | **100.00** | 0.0 | 11 |

#### TOP 5 Najdrozszych Heksow Mieszkaniowych RCN
| H3 Index | Lat | Lon | Mediana Ceny m2 | Liczba Transakcji |
|---|---|---|---|---|
| `881f547691fffff` | 53.75418 | 20.45075 | **47,546 PLN** | 4 |
| `881f5439e7fffff` | 53.78087 | 20.45417 | **17,355 PLN** | 279 |
| `881f5476d9fffff` | 53.77841 | 20.43047 | **16,298 PLN** | 53 |
| `881f547415fffff` | 53.71517 | 20.36568 | **14,276 PLN** | 1 |
| `881f5439e5fffff` | 53.78328 | 20.44111 | **13,917 PLN** | 62 |

### Faza 2: Audyt Zbednosci TCRP Report 100 (The Axe List)
- **Zbedne Slupki (R >= 0.50 - Umiarkowana Kanibalizacja):** 0
- **Zbedne Slupki (R >= 0.70 - Rekomendacja Likwidacji):** 0
- **Zbedne Slupki (R >= 0.90 - Skrajna Zbednosc / Dubel):** 0
- Brak slupkow spelniajacych prog likwidacji R >= 0.70.

### Faza 3: Hierarchia Magnesow Miejskich POI

#### Top 20 Kategorii POI w Miescie
| Kategoria | Tier | Ilosc w Miescie | Wartosc Punktowa (W) |
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

#### TOP 10 Konkretnych Nazwanych Magnesow Miejskich (T0, T1, T2)
| Nazwa Obiektu | Kategoria POI | Tier | Waga Przyciagania (W) |
|---|---|---|---|
| **Olsztyn Główny** | `national_rail_hub` | T0_MEGA_HUB | 33,019,673 |
| **Uniwersytecki Szpital Kliniczny** | `hospital_clinical` | T1_NATIONAL_MAGNET | 20,260,335 |
| **Powiatowy Szpital Pomocy Maltańskiej** | `hospital_clinical` | T1_NATIONAL_MAGNET | 20,260,335 |
| **Miejski Szpital Zespolony w Olsztynie - Filia** | `hospital_clinical` | T1_NATIONAL_MAGNET | 20,260,335 |
| **Wojewódzki Specjalistyczny Szpital Dziecięcy w Olsztynie** | `hospital_clinical` | T1_NATIONAL_MAGNET | 20,260,335 |
| **Samodzielny Publiczny Zespół Gruźlicy i Chorób Płuc** | `hospital_clinical` | T1_NATIONAL_MAGNET | 20,260,335 |
| **Wojewódzki Zespół Lecznictwa Psychiatrycznego** | `hospital_clinical` | T1_NATIONAL_MAGNET | 17,637,646 |
| **Wojewódzki Szpital Specjalistyczny w Olsztynie** | `hospital_clinical` | T1_NATIONAL_MAGNET | 17,637,646 |
| **Miejski Szpital Zespolony w Olsztynie** | `hospital_clinical` | T1_NATIONAL_MAGNET | 17,637,646 |
| **Stadion Gminny w Jonkowie** | `national_stadium` | T1_NATIONAL_MAGNET | 16,859,791 |

### Faza 4: Probki Pelnego DNA (Wszystkie 53 Metryki)

#### POZIOM 1: NAJLEPSZE SLUPKI FIZYCZNE MICRO (TOP 5)
<details><summary><b>Stawiguda (ID: 9415 | H3: 891f546660bffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Stawiguda
  stop_id                 : 9415
  h3_index                : 891f546660bffff
  hub_id                  : 54
  hub_name                : Stawiguda
  is_hub_anchor           : True
  stop_lat                : 53.6507
  stop_lon                : 20.4077

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 100.0000
  stop_local_score_raw    : 0.6173

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 10006349.0283
  stop_raw_gravity        : 10006349.0283
  stop_entropy            : -0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 9182.7820
  stop_liquidity          : 2

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 388.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 8x industrial_zone
  > 2x supermarket
  > 1x micro_parcel_locker
  > 1x gastronomy
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_parcel_locker      : Paczkomat InPost
    - gastronomy               : Alibi
    - supermarket              : Biedronka
    - supermarket              : Dino
```
</details>
<details><summary><b>Janowicza (Wilczyńskiego) (ID: 178 | H3: 891f542b0d7ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Janowicza (Wilczyńskiego)
  stop_id                 : 178
  h3_index                : 891f542b0d7ffff
  hub_id                  : 216
  hub_name                : Janowicza (Wilczyńskiego)
  is_hub_anchor           : True
  stop_lat                : 53.7415
  stop_lon                : 20.4957

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.8776
  stop_local_score_raw    : 0.5755

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 7106564.6723
  stop_raw_gravity        : 3540352.4867
  stop_entropy            : 1.0073

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 6598.5130
  stop_liquidity          : 613

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 1443.5655

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 35x micro_playground
  > 19x gastronomy
  > 11x personal_services
  > 10x micro_atm
  > 10x convenience_store
  > 8x health_clinic
  > 7x bank
  > 7x specialized_retail
  > 6x pharmacy
  > 6x micro_parcel_locker
  > 5x education_preschool
  > 4x supermarket
  > 4x commercial_zone
  > 3x sports_centre
  > 3x shopping_mall
  > 2x post_office
  > 2x place_of_worship
  > 2x industrial_zone
  > 2x park_recreation
  > 1x culture_theatre
  > 1x education_high_school

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - bank                     : Millennium Bank
    - supermarket              : Społem
    - micro_atm                : Euronet
    - supermarket              : Lidl
    - bank                     : BS Szczytno
    - bank                     : PKO BP
    - bank                     : Santander
    - bank                     : BNP Paribas Polska
    - gastronomy               : Na Rogu Czasu
    - gastronomy               : Twój Przepis
```
</details>
<details><summary><b>D.H. Śliwa (Wilczyńskiego) (ID: 177 | H3: 891f542b08bffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : D.H. Śliwa (Wilczyńskiego)
  stop_id                 : 177
  h3_index                : 891f542b08bffff
  hub_id                  : 378
  hub_name                : D.H. Śliwa (Wilczyńskiego)
  is_hub_anchor           : False
  stop_lat                : 53.7417
  stop_lon                : 20.5007

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.7552
  stop_local_score_raw    : 0.5744

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 4331205.2592
  stop_raw_gravity        : 2665813.8474
  stop_entropy            : 0.6247

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 6934.8873
  stop_liquidity          : 492

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 1635.0798

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 45x micro_playground
  > 18x gastronomy
  > 13x commercial_zone
  > 9x convenience_store
  > 8x micro_parcel_locker
  > 7x micro_atm
  > 7x personal_services
  > 7x pharmacy
  > 6x bank
  > 5x specialized_retail
  > 5x education_preschool
  > 3x supermarket
  > 3x education_high_school
  > 2x health_clinic
  > 2x sports_centre
  > 2x shopping_mall
  > 2x park_recreation
  > 1x post_office
  > 1x social_support_mops

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - bank                     : Millennium Bank
    - supermarket              : Społem
    - micro_atm                : Euronet
    - supermarket              : Lidl
    - bank                     : BS Szczytno
    - bank                     : Santander
    - bank                     : BNP Paribas Polska
    - gastronomy               : Na Rogu Czasu
    - gastronomy               : Twój Przepis
    - gastronomy               : Gruby Benek
```
</details>
<details><summary><b>Szpital Dziecięcy (Dworcowa) (ID: 84 | H3: 891f5439b57ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Szpital Dziecięcy (Dworcowa)
  stop_id                 : 84
  h3_index                : 891f5439b57ffff
  hub_id                  : 206
  hub_name                : Szpital Dziecięcy (Dworcowa)
  is_hub_anchor           : True
  stop_lat                : 53.7681
  stop_lon                : 20.4971

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.6328
  stop_local_score_raw    : 0.5634

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 4969962.1374
  stop_raw_gravity        : 3379688.2170
  stop_entropy            : 0.4705

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 7680.3207
  stop_liquidity          : 840

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 813.1214

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 9x convenience_store
  > 6x gastronomy
  > 6x micro_parcel_locker
  > 6x micro_playground
  > 5x education_preschool
  > 4x education_high_school
  > 4x personal_services
  > 3x pharmacy
  > 2x micro_atm
  > 2x government_central
  > 2x hospital_clinical
  > 1x car_services
  > 1x supermarket
  > 1x post_office
  > 1x culture_theatre
  > 1x sports_centre
  > 1x specialized_retail
  > 1x health_clinic
  > 1x park_recreation

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - car_services             : BP
    - gastronomy               : Arton Jedzenie domowe
    - convenience_store        : Lewiatan
    - convenience_store        : Maciejka i Nela
    - supermarket              : Carrefour Market
    - gastronomy               : Cud Miód i Pizza Italiana
    - education_high_school    : Zespół Szkół Gastronomiczno-Spożywczych
    - post_office              : Urząd Pocztowy Olsztyn 17
    - gastronomy               : Dwie Strony Świata
    - convenience_store        : Kubuś
```
</details>
<details><summary><b>Szpital Dziecięcy (Żołnierska) (ID: 105 | H3: 891f5439b57ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Szpital Dziecięcy (Żołnierska)
  stop_id                 : 105
  h3_index                : 891f5439b57ffff
  hub_id                  : 49
  hub_name                : Szpital Dziecięcy (Żołnierska)
  is_hub_anchor           : False
  stop_lat                : 53.7688
  stop_lon                : 20.4965

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.5104
  stop_local_score_raw    : 0.5624

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 5424772.3233
  stop_raw_gravity        : 3808217.3845
  stop_entropy            : 0.4245

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 7684.2928
  stop_liquidity          : 837

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 752.3279

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 11x convenience_store
  > 9x micro_parcel_locker
  > 7x education_preschool
  > 7x micro_playground
  > 5x gastronomy
  > 4x education_high_school
  > 4x personal_services
  > 4x specialized_retail
  > 3x micro_atm
  > 3x pharmacy
  > 3x government_central
  > 2x supermarket
  > 2x sports_centre
  > 2x hospital_clinical
  > 1x post_office
  > 1x culture_theatre
  > 1x health_clinic
  > 1x shopping_mall
  > 1x park_recreation

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store        : Lewiatan
    - micro_atm                : Euronet
    - convenience_store        : Maciejka i Nela
    - supermarket              : Carrefour Market
    - gastronomy               : Cud Miód i Pizza Italiana
    - education_high_school    : Zespół Szkół Gastronomiczno-Spożywczych
    - pharmacy                 : Dr. Max
    - post_office              : Urząd Pocztowy Olsztyn 17
    - gastronomy               : Dwie Strony Świata
    - convenience_store        : Kubuś
```
</details>

#### POZIOM 1: NAJSLABSZE SLUPKI FIZYCZNE MICRO (BOTTOM 5)
<details><summary><b>Spręcowo-Świetlica (Spręcowo) (ID: 597 | H3: 891f543a297ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Spręcowo-Świetlica (Spręcowo)
  stop_id                 : 597
  h3_index                : 891f543a297ffff
  hub_id                  : 130
  hub_name                : Spręcowo-Świetlica (Spręcowo)
  is_hub_anchor           : True
  stop_lat                : 53.8818
  stop_lon                : 20.4367

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.6120
  stop_local_score_raw    : -1.2109

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 1658.7970
  stop_raw_gravity        : 922.3721
  stop_entropy            : 0.7984

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 630.5833
  stop_liquidity          : 2

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 68.3627

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 2x car_services
  > 1x micro_parcel_locker
  > 1x convenience_store
  > 1x micro_playground

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_parcel_locker      : Appkomat InPost
    - convenience_store        : Sklep Spożywczo-Przemysłowy Dziadak Zbigniew
    - car_services             : Auto Serwis Archacki
```
</details>
<details><summary><b>Nowe Włóki wieś (Nowe Włóki) (ID: 524 | H3: 891f5431223ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Nowe Włóki wieś (Nowe Włóki)
  stop_id                 : 524
  h3_index                : 891f5431223ffff
  hub_id                  : 128
  hub_name                : Nowe Włóki wieś (Nowe Włóki)
  is_hub_anchor           : False
  stop_lat                : 53.9050
  stop_lon                : 20.5262

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.4284
  stop_local_score_raw    : -1.2183

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 240.6414
  stop_raw_gravity        : 240.6414
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 852.8785
  stop_liquidity          : 1

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 65.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x place_of_worship

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - place_of_worship         : Kaplica pw. Matki Bożej Szkaplerznej
```
</details>
<details><summary><b>Nowe Włóki wieś (Nowe Włóki) (ID: 523 | H3: 891f5431223ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Nowe Włóki wieś (Nowe Włóki)
  stop_id                 : 523
  h3_index                : 891f5431223ffff
  hub_id                  : 128
  hub_name                : Nowe Włóki wieś (Nowe Włóki)
  is_hub_anchor           : True
  stop_lat                : 53.9050
  stop_lon                : 20.5262

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.4284
  stop_local_score_raw    : -1.2183

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 240.6414
  stop_raw_gravity        : 240.6414
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 852.8785
  stop_liquidity          : 1

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 65.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x place_of_worship

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - place_of_worship         : Kaplica pw. Matki Bożej Szkaplerznej
```
</details>
<details><summary><b>Sętal Kolonia (Sętal) (ID: 531 | H3: 891f543a0abffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Sętal Kolonia (Sętal)
  stop_id                 : 531
  h3_index                : 891f543a0abffff
  hub_id                  : 125
  hub_name                : Sętal Kolonia (Sętal)
  is_hub_anchor           : True
  stop_lat                : 53.8917
  stop_lon                : 20.4630

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.2448
  stop_local_score_raw    : -1.6606

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 1009.4950
  stop_liquidity          : 2

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 11.2509

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Sętal Kolonia (Sętal) (ID: 532 | H3: 891f543a0abffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Sętal Kolonia (Sętal)
  stop_id                 : 532
  h3_index                : 891f543a0abffff
  hub_id                  : 125
  hub_name                : Sętal Kolonia (Sętal)
  is_hub_anchor           : False
  stop_lat                : 53.8917
  stop_lon                : 20.4630

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.1224
  stop_local_score_raw    : -1.6750

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 1009.4950
  stop_liquidity          : 2

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 9.4118

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>

#### POZIOM 2: NAJWAZNIEJSZE WEZLY LOGICZNE MACRO (TOP 5 HUBOW)
<details><summary><b>HUB: Janowicza (Wilczyńskiego) (ID: 216 | H3: 891f542b0d7ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Janowicza (Wilczyńskiego)
  hub_id                  : 216
  h3_index                : 891f542b0d7ffff
  hub_stops_count         : 2
  hub_stops_ids           : 178, 179
  lat                     : 53.7416
  lon                     : 20.4965

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 100.0000
  hub_local_score_raw     : 0.5692

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 10864698.7138
  hub_raw_gravity         : 5528942.4199
  hub_entropy             : 0.9651

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 0.0000
  hub_routes_count        : 0
  hub_routes              : 

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 6651.4945
  hub_liquidity           : 688

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 3094.6968
```
</details>
<details><summary><b>HUB: Szpital Dziecięcy (Dworcowa) (ID: 206 | H3: 891f5439b57ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Szpital Dziecięcy (Dworcowa)
  hub_id                  : 206
  h3_index                : 891f5439b57ffff
  hub_stops_count         : 2
  hub_stops_ids           : 84, 85
  lat                     : 53.7685
  lon                     : 20.4977

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.7647
  hub_local_score_raw     : 0.5677

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 9556911.7992
  hub_raw_gravity         : 5489607.2723
  hub_entropy             : 0.7409

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 0.0000
  hub_routes_count        : 0
  hub_routes              : 

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 7645.1508
  hub_liquidity           : 886

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 1768.4722
```
</details>
<details><summary><b>HUB: Szpital Dziecięcy (Żołnierska) (ID: 49 | H3: 891f5439b57ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Szpital Dziecięcy (Żołnierska)
  hub_id                  : 49
  h3_index                : 891f5439b57ffff
  hub_stops_count         : 2
  hub_stops_ids           : 104, 105
  lat                     : 53.7690
  lon                     : 20.4963

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.5294
  hub_local_score_raw     : 0.5607

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 10551414.8575
  hub_raw_gravity         : 7345938.7458
  hub_entropy             : 0.4364

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 0.0000
  hub_routes_count        : 0
  hub_routes              : 

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 7684.2928
  hub_liquidity           : 837

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 1487.4787
```
</details>
<details><summary><b>HUB: D.H. Śliwa (Wilczyńskiego) (ID: 378 | H3: 891f542b08bffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : D.H. Śliwa (Wilczyńskiego)
  hub_id                  : 378
  h3_index                : 891f542b08bffff
  hub_stops_count         : 2
  hub_stops_ids           : 176, 177
  lat                     : 53.7415
  lon                     : 20.5015

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.2941
  hub_local_score_raw     : 0.5549

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 7277799.7434
  hub_raw_gravity         : 4534308.4590
  hub_entropy             : 0.6051

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 0.0000
  hub_routes_count        : 0
  hub_routes              : 

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 6846.4730
  hub_liquidity           : 547

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 3080.1402
```
</details>
<details><summary><b>HUB: Carrefour (Krasickiego) (ID: 213 | H3: 891f542b42fffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Carrefour (Krasickiego)
  hub_id                  : 213
  h3_index                : 891f542b42fffff
  hub_stops_count         : 3
  hub_stops_ids           : 173, 747, 748
  lat                     : 53.7499
  lon                     : 20.5045

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.0588
  hub_local_score_raw     : 0.5280

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 6028037.6830
  hub_raw_gravity         : 3363463.0777
  hub_entropy             : 0.7922

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 0.0000
  hub_routes_count        : 0
  hub_routes              : 

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 7244.6910
  hub_liquidity           : 1464

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 2014.8334
```
</details>

---

## OPOLE
#### DASHBOARD ASERCJI PIPELINE'U (Pelna Integralnosc Bazy)
```text
[PASS ZERO NULLS & INFS] Petla obliczeniowa wygenerowala 100% spojnych komorek.
[STATS] [WARN] Z-Score Micro ODD (Mean: -0.000, Std: 0.432)
        Rozklad Rang Slupkow (Micro): A: 54, A+: 28, B: 81, C: 109, D: 136, F: 135
[STATS] [WARN] Z-Score Macro ODD (Mean: 0.000, Std: 0.432)
        Rozklad Rang Hubow (Macro): A: 34, A+: 18, B: 52, C: 69, D: 86, F: 85
[DEMOGRAPHY] [INFO] OBSZAR AGLOMERACYJNY: +25.6% (GUS strefa aglomeracyjna: 150,715 vs Miasto rdzen: 120,000)
[PASS] POI Parquet 100% Valid (Matematyka Huffa dziala)
[PASS] POP Parquet 100% Valid
[PASS] H3 Res 8 Grid 100% Valid (318 komorek, 146 pustyn transportowych)
```

### Faza 0: Statystyki Ogolne i Balans Sieci
- **Slupki Fizyczne (Micro):** 543 slupkow
- **Wezly Logiczne (Macro Hubs):** 344 hubow (Wskaznik konsolidacji: 1.58 slupka/hub)
- **Populacja Strefy Transportowej (GUS 250m):** 150,715 mieszkancow
- **Transakcje Notarialne RCN:** 5,560 aktow
### Faza 1: Siatka Analityczna Uber H3 Res 8 (0.74 km2 / komorka)
- **Liczba Komorek H3 Res 8:** 318
- **Rynek Nieruchomosci RCN w Heksach:** Pokrycie 39.3% (125/318 komorek), Srednia: 6,623 PLN/m2, Mediana: 6,864 PLN/m2, Std: 2,662, Min: 468, Max: 18,078 PLN/m2
- **Demografia GUS NSP 2021 w Heksach:** Laczna ludnosc w heksach: 150,715, Srednia/heks: 473.9, Mediana: 120.5, Std: 1111.2, Max: 9,010
- **Podaz Transportu w Heksach:** Sredni Transport Score: 18.41, Max Transport Score: 100.00, Srednia odjazdow/h: 0.00, Pustynie Transportowe TDI: 146

#### TOP 5 Pustyn Transportowych (The Investment List)
| H3 Index | Lat | Lon | Populacja GUS | Odjazdy/h | TDI Score |
|---|---|---|---|---|---|
| `881e23c6e7fffff` | 50.67394 | 17.96731 | 9,010 | 0.0 | **95.54** |
| `881e23c45dfffff` | 50.66561 | 17.93491 | 6,826 | 0.0 | **92.63** |
| `881e23c6e5fffff` | 50.67621 | 17.95481 | 6,057 | 0.0 | **91.38** |
| `881e23c44dfffff` | 50.66484 | 17.89995 | 6,038 | 0.0 | **91.34** |
| `881e23c6edfffff` | 50.68378 | 17.95225 | 5,783 | 0.0 | **90.89** |

#### TOP 5 Biegunow Transportu (Najwyzsza Podaz)
| H3 Index | Lat | Lon | Transport Score | Odjazdy/h | Liczba Slupkow |
|---|---|---|---|---|---|
| `881e23c6e7fffff` | 50.67394 | 17.96731 | **100.00** | 0.0 | 14 |
| `881e23c713fffff` | 50.65953 | 17.89001 | **100.00** | 0.0 | 9 |
| `881e23c451fffff` | 50.66334 | 17.94741 | **100.00** | 0.0 | 9 |
| `881e23c5d7fffff` | 50.60273 | 17.96787 | **100.00** | 0.0 | 10 |
| `881e23c637fffff` | 50.67318 | 17.93235 | **100.00** | 0.0 | 10 |

#### TOP 5 Najdrozszych Heksow Mieszkaniowych RCN
| H3 Index | Lat | Lon | Mediana Ceny m2 | Liczba Transakcji |
|---|---|---|---|---|
| `881e23c661fffff` | 50.69738 | 17.87718 | **18,078 PLN** | 2 |
| `881e23d4a3fffff` | 50.73068 | 17.88937 | **16,388 PLN** | 3 |
| `881e23c46bfffff` | 50.64970 | 17.90508 | **14,454 PLN** | 4 |
| `881e23c6adfffff` | 50.66637 | 17.96987 | **11,629 PLN** | 257 |
| `881e23c403fffff` | 50.64289 | 17.94259 | **11,050 PLN** | 5 |

### Faza 2: Audyt Zbednosci TCRP Report 100 (The Axe List)
- **Zbedne Slupki (R >= 0.50 - Umiarkowana Kanibalizacja):** 0
- **Zbedne Slupki (R >= 0.70 - Rekomendacja Likwidacji):** 0
- **Zbedne Slupki (R >= 0.90 - Skrajna Zbednosc / Dubel):** 0
- Brak slupkow spelniajacych prog likwidacji R >= 0.70.

### Faza 3: Hierarchia Magnesow Miejskich POI

#### Top 20 Kategorii POI w Miescie
| Kategoria | Tier | Ilosc w Miescie | Wartosc Punktowa (W) |
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

#### TOP 10 Konkretnych Nazwanych Magnesow Miejskich (T0, T1, T2)
| Nazwa Obiektu | Kategoria POI | Tier | Waga Przyciagania (W) |
|---|---|---|---|
| **Komprachcice** | `national_rail_hub` | T0_MEGA_HUB | 30,818,416 |
| **Dobrzeń Wielki** | `national_rail_hub` | T0_MEGA_HUB | 30,818,416 |
| **Opole Główne** | `national_rail_hub` | T0_MEGA_HUB | 30,818,416 |
| **Opole Czarnowąsy** | `national_rail_hub` | T0_MEGA_HUB | 30,818,416 |
| **Uniwersytecki Szpital Kliniczny w Opolu** | `hospital_clinical` | T1_NATIONAL_MAGNET | 19,420,353 |
| **Wojewódzki Specjalistyczny Zespół Neuropsychiatryczny** | `hospital_clinical` | T1_NATIONAL_MAGNET | 19,420,353 |
| **Opolskie Centrum Onkologii** | `hospital_clinical` | T1_NATIONAL_MAGNET | 19,420,353 |
| **Samodzielny Publiczny Zakład Opieki Zdrowotnej MSWiA** | `hospital_clinical` | T1_NATIONAL_MAGNET | 19,420,353 |
| **116 Szpital Wojskowy z Przychodnią** | `hospital_clinical` | T1_NATIONAL_MAGNET | 19,420,353 |
| **Szpital Wojewódzki** | `hospital_clinical` | T1_NATIONAL_MAGNET | 16,906,399 |

### Faza 4: Probki Pelnego DNA (Wszystkie 53 Metryki)

#### POZIOM 1: NAJLEPSZE SLUPKI FIZYCZNE MICRO (TOP 5)
<details><summary><b>Ozimska - Dubois (259) (ID: 259 | H3: 891e23c45d3ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Ozimska - Dubois (259)
  stop_id                 : 259
  h3_index                : 891e23c45d3ffff
  hub_id                  : 212
  hub_name                : Ozimska - Dubois (259)
  is_hub_anchor           : True
  stop_lat                : 50.6678
  stop_lon                : 17.9336

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 100.0000
  stop_local_score_raw    : 0.6854

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 16198419.0943
  stop_raw_gravity        : 7829171.4646
  stop_entropy            : 1.0690

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 9262.9089
  stop_liquidity          : 451

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 649.8319

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
    - gastronomy               : Karczma pod Czeremchą
    - specialized_retail       : Tifanni
    - specialized_retail       : Mona
    - personal_services        : DermoLam
    - gastronomy               : Classic Coffee
    - gastronomy               : Sandwich Express
    - gastronomy               : Tutaj
    - gastronomy               : Pierogarnia Staropolska
    - pharmacy                 : Multifarm Ozimska
    - government_central       : Urząd Statystyczny w Opolu - Informatorium
```
</details>
<details><summary><b>Ozimska - Dubois (260) (ID: 260 | H3: 891e23c45d3ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Ozimska - Dubois (260)
  stop_id                 : 260
  h3_index                : 891e23c45d3ffff
  hub_id                  : 131
  hub_name                : Ozimska - Dubois (260)
  is_hub_anchor           : True
  stop_lat                : 50.6679
  stop_lon                : 17.9310

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.8158
  stop_local_score_raw    : 0.6833

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 14230621.2744
  stop_raw_gravity        : 5051524.2525
  stop_entropy            : 1.8171

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 9226.2749
  stop_liquidity          : 454

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 748.6459

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
    - shopping_mall            : Solaris Center
    - micro_atm                : Bankomat BZ WBK
    - government_central       : Prokuratura Okręgowa w Opolu
    - gastronomy               : Book A Coffee
    - gastronomy               : Karczma pod Czeremchą
    - specialized_retail       : Tifanni
    - convenience_store        : Żabka
    - convenience_store        : Żabka
    - convenience_store        : Delikatesy Kołłątaja
    - gastronomy               : Dolce Vita
```
</details>
<details><summary><b>Armii Krajowej - Dworzec Główny (7) (ID: 7 | H3: 891e23c4437ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Armii Krajowej - Dworzec Główny (7)
  stop_id                 : 7
  h3_index                : 891e23c4437ffff
  hub_id                  : 138
  hub_name                : 1 Maja - Dworzec Główny (1)
  is_hub_anchor           : False
  stop_lat                : 50.6631
  stop_lon                : 17.9277

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.6317
  stop_local_score_raw    : 0.6298

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 16689802.7057
  stop_raw_gravity        : 5829682.1456
  stop_entropy            : 1.8629

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 9606.4242
  stop_liquidity          : 296

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 326.7769

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 24x gastronomy
  > 11x government_central
  > 11x convenience_store
  > 9x bank
  > 9x pharmacy
  > 7x park_recreation
  > 6x micro_atm
  > 6x industrial_zone
  > 5x health_clinic
  > 4x police_station
  > 3x personal_services
  > 3x education_high_school
  > 3x specialized_retail
  > 3x hospital_clinical
  > 2x supermarket
  > 2x culture_theatre
  > 2x shopping_mall
  > 2x micro_playground
  > 1x national_rail_hub
  > 1x business_office
  > 1x post_office
  > 1x university_campus
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - bank                     : Millennium Przedsiębiorstwa
    - micro_atm                : Bankomat BZ WBK
    - micro_atm                : Bankomat Millennium
    - micro_atm                : Bankomat BZ WBK
    - bank                     : Millennium Bank
    - personal_services        : Astor
    - government_central       : Prokuratura Okręgowa w Opolu
    - gastronomy               : Grabówka
    - convenience_store        : Żabka
    - convenience_store        : Żabka
```
</details>
<details><summary><b>Kołłątaja - Dworzec Główny (149) (ID: 149 | H3: 891e23c4437ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Kołłątaja - Dworzec Główny (149)
  stop_id                 : 149
  h3_index                : 891e23c4437ffff
  hub_id                  : 307
  hub_name                : Kołłątaja - Dworzec Główny (149)
  is_hub_anchor           : True
  stop_lat                : 50.6642
  stop_lon                : 17.9275

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.4475
  stop_local_score_raw    : 0.6194

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 13969667.3931
  stop_raw_gravity        : 4664052.8702
  stop_entropy            : 1.9952

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 9309.8335
  stop_liquidity          : 340

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 410.1293

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
    - bank                     : Millennium Przedsiębiorstwa
    - micro_atm                : Bankomat BZ WBK
    - micro_atm                : Bankomat Millennium
    - micro_atm                : Bankomat BZ WBK
    - bank                     : Millennium Bank
    - personal_services        : Astor
    - government_central       : Prokuratura Okręgowa w Opolu
    - gastronomy               : Grabówka
    - gastronomy               : Pizza Hut
    - specialized_retail       : Tifanni
```
</details>
<details><summary><b>1 Maja - Dworzec Główny (2) (ID: 2 | H3: 891e23c4437ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : 1 Maja - Dworzec Główny (2)
  stop_id                 : 2
  h3_index                : 891e23c4437ffff
  hub_id                  : 138
  hub_name                : 1 Maja - Dworzec Główny (1)
  is_hub_anchor           : False
  stop_lat                : 50.6633
  stop_lon                : 17.9285

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.2634
  stop_local_score_raw    : 0.6136

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 14176402.8167
  stop_raw_gravity        : 4605668.9734
  stop_entropy            : 2.0780

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 9606.4242
  stop_liquidity          : 300

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 337.6851

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 21x gastronomy
  > 12x convenience_store
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
    - bank                     : Millennium Przedsiębiorstwa
    - micro_atm                : Bankomat BZ WBK
    - micro_atm                : Bankomat Millennium
    - micro_atm                : Bankomat BZ WBK
    - bank                     : Millennium Bank
    - personal_services        : Astor
    - government_central       : Prokuratura Okręgowa w Opolu
    - specialized_retail       : Tifanni
    - convenience_store        : Żabka
    - convenience_store        : Żabka
```
</details>

#### POZIOM 1: NAJSLABSZE SLUPKI FIZYCZNE MICRO (BOTTOM 5)
<details><summary><b>Ochodze (231) (ID: 231 | H3: 891e23c0977ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Ochodze (231)
  stop_id                 : 231
  h3_index                : 891e23c0977ffff
  hub_id                  : 99
  hub_name                : Ochodze (231)
  is_hub_anchor           : True
  stop_lat                : 50.6186
  stop_lon                : 17.8120

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.9208
  stop_local_score_raw    : -1.5814

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 7734.0793
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 132.8751

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Prószków - Grunwaldzka - Rudnicka (917) (ID: 917 | H3: 891e23c53c3ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Prószków - Grunwaldzka - Rudnicka (917)
  stop_id                 : 917
  h3_index                : 891e23c53c3ffff
  hub_id                  : 97
  hub_name                : Prószków - Grunwaldzka - Rudnicka (914)
  is_hub_anchor           : False
  stop_lat                : 50.5927
  stop_lon                : 17.8656

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.7366
  stop_local_score_raw    : -1.6283

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 7734.0793
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 86.0881

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Prószków - Grunwaldzka - Rudnicka (914) (ID: 914 | H3: 891e23c53c3ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Prószków - Grunwaldzka - Rudnicka (914)
  stop_id                 : 914
  h3_index                : 891e23c53c3ffff
  hub_id                  : 97
  hub_name                : Prószków - Grunwaldzka - Rudnicka (914)
  is_hub_anchor           : True
  stop_lat                : 50.5922
  stop_lon                : 17.8656

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.5525
  stop_local_score_raw    : -1.6298

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 7734.0793
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 84.9119

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Czarnowąsy - Pętla (60) (ID: 60 | H3: 891e23d4b8fffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Czarnowąsy - Pętla (60)
  stop_id                 : 60
  h3_index                : 891e23d4b8fffff
  hub_id                  : 343
  hub_name                : Czarnowąsy - Pętla (60)
  is_hub_anchor           : True
  stop_lat                : 50.7400
  stop_lon                : 17.9113

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.3683
  stop_local_score_raw    : -1.6643

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 7734.0793
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 61.6566

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Świerkle - Pętla (71) (ID: 71 | H3: 891e23d4937ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Świerkle - Pętla (71)
  stop_id                 : 71
  h3_index                : 891e23d4937ffff
  hub_id                  : 211
  hub_name                : Świerkle - Pętla (71)
  is_hub_anchor           : True
  stop_lat                : 50.7530
  stop_lon                : 17.9446

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.1842
  stop_local_score_raw    : -1.7069

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 7734.0793
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 41.4428

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>

#### POZIOM 2: NAJWAZNIEJSZE WEZLY LOGICZNE MACRO (TOP 5 HUBOW)
<details><summary><b>HUB: Ozimska - Dubois (259) (ID: 212 | H3: 891e23c45d3ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Ozimska - Dubois (259)
  hub_id                  : 212
  h3_index                : 891e23c45d3ffff
  hub_stops_count         : 1
  hub_stops_ids           : 259
  lat                     : 50.6678
  lon                     : 17.9336

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 100.0000
  hub_local_score_raw     : 0.6413

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 21787871.6086
  hub_raw_gravity         : 10271277.7081
  hub_entropy             : 1.1212

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 0.0000
  hub_routes_count        : 0
  hub_routes              : 

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 9262.9089
  hub_liquidity           : 451

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 876.5959
```
</details>
<details><summary><b>HUB: Ozimska - Dubois (260) (ID: 131 | H3: 891e23c45d3ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Ozimska - Dubois (260)
  hub_id                  : 131
  h3_index                : 891e23c45d3ffff
  hub_stops_count         : 1
  hub_stops_ids           : 260
  lat                     : 50.6679
  lon                     : 17.9310

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.7093
  hub_local_score_raw     : 0.6131

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 16905736.1699
  hub_raw_gravity         : 6013746.0659
  hub_entropy             : 1.8112

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 0.0000
  hub_routes_count        : 0
  hub_routes              : 

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 9226.2749
  hub_liquidity           : 454

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 900.9938
```
</details>
<details><summary><b>HUB: 1 Maja - Dworzec Główny (1) (ID: 138 | H3: 891e23c4437ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : 1 Maja - Dworzec Główny (1)
  hub_id                  : 138
  h3_index                : 891e23c4437ffff
  hub_stops_count         : 3
  hub_stops_ids           : 1, 2, 7
  lat                     : 50.6632
  lon                     : 17.9283

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.4186
  hub_local_score_raw     : 0.6111

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 22676484.4124
  hub_raw_gravity         : 7491922.4701
  hub_entropy             : 2.0268

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 0.0000
  hub_routes_count        : 0
  hub_routes              : 

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 9538.7244
  hub_liquidity           : 319

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 556.7105
```
</details>
<details><summary><b>HUB: Kołłątaja - Dworzec Główny (149) (ID: 307 | H3: 891e23c4437ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Kołłątaja - Dworzec Główny (149)
  hub_id                  : 307
  h3_index                : 891e23c4437ffff
  hub_stops_count         : 1
  hub_stops_ids           : 149
  lat                     : 50.6642
  lon                     : 17.9275

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.1279
  hub_local_score_raw     : 0.5980

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 20935971.6557
  hub_raw_gravity         : 7017662.8752
  hub_entropy             : 1.9833

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 0.0000
  hub_routes_count        : 0
  hub_routes              : 

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 9309.8335
  hub_liquidity           : 340

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 594.3157
```
</details>
<details><summary><b>HUB: Reymonta (327) (ID: 221 | H3: 891e23c45dbffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Reymonta (327)
  hub_id                  : 221
  h3_index                : 891e23c45dbffff
  hub_stops_count         : 1
  hub_stops_ids           : 327
  lat                     : 50.6645
  lon                     : 17.9300

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 98.8372
  hub_local_score_raw     : 0.5812

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 13257481.2793
  hub_raw_gravity         : 4028922.2039
  hub_entropy             : 2.2906

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 0.0000
  hub_routes_count        : 0
  hub_routes              : 

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 9545.0207
  hub_liquidity           : 419

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 753.9317
```
</details>

---

## POZNAN
#### DASHBOARD ASERCJI PIPELINE'U (Pelna Integralnosc Bazy)
```text
[PASS ZERO NULLS & INFS] Petla obliczeniowa wygenerowala 100% spojnych komorek.
[STATS] [PASS] Z-Score Micro VALID (Mean: 0.000, Std: 0.634)
        Rozklad Rang Slupkow (Micro): A: 559, A+: 280, B: 837, C: 1117, D: 1396, F: 1396
[STATS] [PASS] Z-Score Macro VALID (Mean: 0.000, Std: 0.536)
        Rozklad Rang Hubow (Macro): A: 278, A+: 139, B: 416, C: 556, D: 694, F: 693
[DEMOGRAPHY] [INFO] OBSZAR AGLOMERACYJNY: +151.2% (GUS strefa aglomeracyjna: 1,331,460 vs Miasto rdzen: 530,000)
[PASS] POI Parquet 100% Valid (Matematyka Huffa dziala)
[PASS] POP Parquet 100% Valid
[PASS] H3 Res 8 Grid 100% Valid (4,953 komorek, 1191 pustyn transportowych)
```

### Faza 0: Statystyki Ogolne i Balans Sieci
- **Slupki Fizyczne (Micro):** 5,585 slupkow
- **Wezly Logiczne (Macro Hubs):** 2,776 hubow (Wskaznik konsolidacji: 2.01 slupka/hub)
- **Populacja Strefy Transportowej (GUS 250m):** 1,331,460 mieszkancow
- **Transakcje Notarialne RCN:** 105,538 aktow
### Faza 1: Siatka Analityczna Uber H3 Res 8 (0.74 km2 / komorka)
- **Liczba Komorek H3 Res 8:** 4,953
- **Rynek Nieruchomosci RCN w Heksach:** Pokrycie 41.2% (2039/4953 komorek), Srednia: 5,237 PLN/m2, Mediana: 5,378 PLN/m2, Std: 2,586, Min: 57, Max: 34,986 PLN/m2
- **Demografia GUS NSP 2021 w Heksach:** Laczna ludnosc w heksach: 1,331,460, Srednia/heks: 268.8, Mediana: 34.0, Std: 834.3, Max: 11,037
- **Podaz Transportu w Heksach:** Sredni Transport Score: 11.03, Max Transport Score: 100.00, Srednia odjazdow/h: 0.63, Pustynie Transportowe TDI: 1191

#### TOP 5 Pustyn Transportowych (The Investment List)
| H3 Index | Lat | Lon | Populacja GUS | Odjazdy/h | TDI Score |
|---|---|---|---|---|---|
| `881e24aa15fffff` | 52.38792 | 16.91978 | 11,037 | 0.0 | **97.67** |
| `881e24aac3fffff` | 52.39220 | 16.97847 | 9,762 | 0.0 | **96.38** |
| `881e24a325fffff` | 52.45716 | 16.91813 | 9,207 | 0.0 | **95.77** |
| `881e24aac5fffff` | 52.38902 | 16.95554 | 9,063 | 0.0 | **95.60** |
| `881e24b89bfffff` | 52.44983 | 16.92086 | 8,585 | 0.0 | **95.04** |

#### TOP 5 Biegunow Transportu (Najwyzsza Podaz)
| H3 Index | Lat | Lon | Transport Score | Odjazdy/h | Liczba Slupkow |
|---|---|---|---|---|---|
| `881e24a82dfffff` | 52.32484 | 16.88298 | **100.00** | 0.0 | 12 |
| `881e24aa1bfffff` | 52.39845 | 16.93998 | **100.00** | 28.9 | 14 |
| `881e2432e9fffff` | 52.26615 | 17.07321 | **100.00** | 28.0 | 9 |
| `881e2432e7fffff` | 52.25142 | 17.07863 | **100.00** | 82.3 | 10 |
| `881e2432cbfffff` | 52.28193 | 17.10350 | **100.00** | 63.9 | 21 |

#### TOP 5 Najdrozszych Heksow Mieszkaniowych RCN
| H3 Index | Lat | Lon | Mediana Ceny m2 | Liczba Transakcji |
|---|---|---|---|---|
| `881e24a105fffff` | 52.42365 | 16.95473 | **34,986 PLN** | 4 |
| `881e244689fffff` | 51.99957 | 16.36766 | **33,051 PLN** | 2 |
| `881e24246dfffff` | 52.11306 | 17.36938 | **18,152 PLN** | 1 |
| `881e255985fffff` | 51.93604 | 17.55282 | **17,978 PLN** | 1 |
| `881e24a1b9fffff` | 52.40485 | 17.07023 | **14,894 PLN** | 16 |

### Faza 2: Audyt Zbednosci TCRP Report 100 (The Axe List)
- **Zbedne Slupki (R >= 0.50 - Umiarkowana Kanibalizacja):** 540
- **Zbedne Slupki (R >= 0.70 - Rekomendacja Likwidacji):** 363
- **Zbedne Slupki (R >= 0.90 - Skrajna Zbednosc / Dubel):** 179

| Zbedny Słupek | Dominujacy Słupek | Dystans [m] | S_service | S_spatial | S_cannibal | R-Score |
|---|---|---|---|---|---|---|
| Brodowo/Słoneczna (#3:164:01, 0.07142857142857142 odj/h) | Brodowo/Słoneczna (#3:164:00, 0.5714285714285714 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |
| Olszewo/Henrykowo (#3:140:03, 0.2857142857142857 odj/h) | Olszewo/Henrykowo (#3:140:02, 0.7142857142857143 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |
| Miłosław/Przejazd kolejowy (#3:362:01, 0.07142857142857142 odj/h) | Miłosław/Przejazd kolejowy (#3:362:00, 0.07142857142857142 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |
| Miłosław/Przejazd kolejowy (#3:362:00, 0.07142857142857142 odj/h) | Miłosław/Przejazd kolejowy (#3:362:01, 0.07142857142857142 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |
| Pławce/Szkoła (#3:200:01, 0.5 odj/h) | Pławce/Szkoła (#3:200:00, 0.5 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |

### Faza 3: Hierarchia Magnesow Miejskich POI

#### Top 20 Kategorii POI w Miescie
| Kategoria | Tier | Ilosc w Miescie | Wartosc Punktowa (W) |
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

#### TOP 10 Konkretnych Nazwanych Magnesow Miejskich (T0, T1, T2)
| Nazwa Obiektu | Kategoria POI | Tier | Waga Przyciagania (W) |
|---|---|---|---|
| **Port Lotniczy Poznań-Ławica im. Henryka Wieniawskiego** | `international_airport` | T0_MEGA_HUB | 217,774,950 |
| **Opalenica** | `national_rail_hub` | T0_MEGA_HUB | 39,003,636 |
| **Nowy Tomyśl** | `national_rail_hub` | T0_MEGA_HUB | 39,003,636 |
| **Poznań Główny** | `national_rail_hub` | T0_MEGA_HUB | 39,003,636 |
| **Międzynarodowe Targi Poznańskie** | `exhibition_centre` | T1_NATIONAL_MAGNET | 34,786,739 |
| **Stadion sportowy w Dusznikach** | `national_stadium` | T1_NATIONAL_MAGNET | 25,334,608 |
| **Stadion im. Józefa Kopaczewskiego w Kamieńcu** | `national_stadium` | T1_NATIONAL_MAGNET | 25,334,608 |
| **Stadion Mawit i Pogoń Lwówek** | `national_stadium` | T1_NATIONAL_MAGNET | 25,334,608 |
| **Stadion Miejski w Nowym Tomyślu im. Andrzeja Wojtkowiaka** | `national_stadium` | T1_NATIONAL_MAGNET | 25,334,608 |
| **KS Polonia Poznań** | `national_stadium` | T1_NATIONAL_MAGNET | 25,334,608 |

### Faza 4: Probki Pelnego DNA (Wszystkie 53 Metryki)

#### POZIOM 1: NAJLEPSZE SLUPKI FIZYCZNE MICRO (TOP 5)
<details><summary><b>Buk, Rynek (ID: 48 | H3: 891e2412947ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Buk, Rynek
  stop_id                 : 48
  h3_index                : 891e2412947ffff
  hub_id                  : 2315
  hub_name                : Buk, Rynek
  is_hub_anchor           : True
  stop_lat                : 52.3577
  stop_lon                : 16.5167

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.9910
  stop_local_score_raw    : 2.6010

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 15051702.9818
  stop_raw_gravity        : 5940616.1173
  stop_entropy            : 1.5337

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 6.2143
  stop_routes_count       : 16
  stop_routes             : 10, 19, 44, 51, 52, 57, 76, 96, 122, 169, 325, 328, 333, 781, 782, 783
  stop_hub_share          : 1.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 7457.9832
  stop_liquidity          : 571

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 2180.7131

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 9x specialized_retail
  > 6x gastronomy
  > 5x personal_services
  > 4x pharmacy
  > 3x education_high_school
  > 3x education_preschool
  > 3x convenience_store
  > 3x park_recreation
  > 2x sports_centre
  > 2x culture_theatre
  > 2x health_clinic
  > 2x micro_parcel_locker
  > 2x place_of_worship
  > 2x government_central
  > 2x industrial_zone
  > 1x police_station
  > 1x supermarket
  > 1x micro_atm
  > 1x bank
  > 1x business_office
  > 1x social_support_mops
  > 1x post_office

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - pharmacy                 : Apteka \
    - pharmacy                 : Zdrowie
    - gastronomy               : Pizza Place Buk
    - police_station           : Komisariat Policji w Buku
    - supermarket              : Lewiatan \
    - education_high_school    : Szkoła Podstawowa im. Bohaterów Bukowskich
    - sports_centre            : Hala Sportowa
    - education_high_school    : Szkoła Zawodowa Buk
    - specialized_retail       : Eldorox
    - personal_services        : U Reni
```
</details>
<details><summary><b>Rondo Solidarności (ID: 48 | H3: 891e24a16a3ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Rondo Solidarności
  stop_id                 : 48
  h3_index                : 891e24a16a3ffff
  hub_id                  : 626
  hub_name                : Rondo Solidarności
  is_hub_anchor           : True
  stop_lat                : 52.4339
  stop_lon                : 16.9377

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.9910
  stop_local_score_raw    : 2.6010

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 15051702.9818
  stop_raw_gravity        : 5940616.1173
  stop_entropy            : 1.5337

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 6.2143
  stop_routes_count       : 16
  stop_routes             : 10, 19, 44, 51, 52, 57, 76, 96, 122, 169, 325, 328, 333, 781, 782, 783
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 7457.9832
  stop_liquidity          : 571

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 2180.7131

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 94x park_recreation
  > 30x micro_playground
  > 21x micro_parcel_locker
  > 13x personal_services
  > 10x convenience_store
  > 8x gastronomy
  > 5x micro_atm
  > 5x government_central
  > 5x education_preschool
  > 4x pharmacy
  > 4x health_clinic
  > 4x specialized_retail
  > 3x bank
  > 2x culture_theatre
  > 2x education_high_school
  > 1x post_office
  > 1x social_support_mops
  > 1x business_office
  > 1x place_of_worship
  > 1x supermarket
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm                : Euronet
    - micro_atm                : Santander
    - pharmacy                 : Familijna
    - health_clinic            : Poznański Ośrodek Specjalistyczny Usług Medycznych
    - micro_atm                : Euronet
    - culture_theatre          : Biblioteka Raczyńskich - Filia 42
    - government_central       : Administracja Osiedla Pod Lipami
    - gastronomy               : Pasja Smaków
    - post_office              : Poczta Polska
    - convenience_store        : Społem
```
</details>
<details><summary><b>Zbrudzewo (ID: 683 | H3: 891e2423657ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Zbrudzewo
  stop_id                 : 683
  h3_index                : 891e2423657ffff
  hub_id                  : 947
  hub_name                : Zbrudzewo
  is_hub_anchor           : True
  stop_lat                : 52.1167
  stop_lon                : 17.0365

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.9552
  stop_local_score_raw    : 2.4511

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 6922969.3025
  stop_raw_gravity        : 2944306.0856
  stop_entropy            : 1.3513

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 5.5000
  stop_routes_count       : 10
  stop_routes             : 156, 158, 172, 211, 212, 218, 250, 251, 329, 330
  stop_hub_share          : 1.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 9033.5604
  stop_liquidity          : 185

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 1699.8359

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x education_high_school
  > 1x commercial_zone
  > 1x micro_playground

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - education_high_school    : Szkoła Podstawowa im. Janusza Korczaka
```
</details>
<details><summary><b>Dąbrówka/Kasztanowa (ID: 683 | H3: 891e24168b3ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Dąbrówka/Kasztanowa
  stop_id                 : 683
  h3_index                : 891e24168b3ffff
  hub_id                  : 1938
  hub_name                : Dąbrówka/Kasztanowa
  is_hub_anchor           : True
  stop_lat                : 52.3777
  stop_lon                : 16.7432

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.9552
  stop_local_score_raw    : 2.4511

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 6922969.3025
  stop_raw_gravity        : 2944306.0856
  stop_entropy            : 1.3513

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 5.5000
  stop_routes_count       : 10
  stop_routes             : 156, 158, 172, 211, 212, 218, 250, 251, 329, 330
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 9033.5604
  stop_liquidity          : 185

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 1699.8359

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 194x park_recreation
  > 9x micro_playground
  > 7x micro_parcel_locker
  > 5x gastronomy
  > 5x personal_services
  > 3x supermarket
  > 2x convenience_store
  > 2x place_of_worship
  > 1x micro_atm
  > 1x pharmacy
  > 1x car_services
  > 1x specialized_retail
  > 1x bank
  > 1x health_clinic
  > 1x shopping_mall
  > 1x post_office
  > 1x education_high_school
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - supermarket              : Stokrotka
    - supermarket              : Biedronka
    - gastronomy               : Silva Rerum
    - micro_atm                : SGB
    - pharmacy                 : Consultorio
    - personal_services        : Agnieszka Szafrańska
    - car_services             : Orlen
    - specialized_retail       : Pepco
    - bank                     : Bank Spółdzielczy Duszniki
    - convenience_store        : Żabka
```
</details>
<details><summary><b>Czempiń, Dworzec Kolejowy - ul. Kolejowa (ID: 73 | H3: 891e240ed47ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Czempiń, Dworzec Kolejowy - ul. Kolejowa
  stop_id                 : 73
  h3_index                : 891e240ed47ffff
  hub_id                  : 1795
  hub_name                : Czempiń, Dworzec Kolejowy - ul. Kolejowa
  is_hub_anchor           : True
  stop_lat                : 52.1403
  stop_lon                : 16.7545

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.9194
  stop_local_score_raw    : 2.1143

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 3113915.3916
  stop_raw_gravity        : 1097242.3850
  stop_entropy            : 1.8379

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 5.1429
  stop_routes_count       : 10
  stop_routes             : 239, 801, 802, 807, 808, 809, 810, 811, 812, 816
  stop_hub_share          : 1.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 7161.1253
  stop_liquidity          : 233

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 442.0078

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 3x supermarket
  > 2x micro_parcel_locker
  > 2x park_recreation
  > 1x regional_rail_hub
  > 1x gastronomy
  > 1x pharmacy
  > 1x micro_atm
  > 1x bank
  > 1x government_central
  > 1x post_office
  > 1x education_preschool
  > 1x police_station
  > 1x micro_playground

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - regional_rail_hub        : Czempiń
    - pharmacy                 : Amfora
    - micro_atm                : PKO BP
    - bank                     : PKO BP
    - government_central       : Urząd Gminy w Czempiniu
    - micro_parcel_locker      : Paczkomat InPost
    - micro_parcel_locker      : Paczkomat InPost
    - supermarket              : POLOmarket
    - post_office              : Poczta Polska
    - education_preschool      : Przedszkole
```
</details>

#### POZIOM 1: NAJSLABSZE SLUPKI FIZYCZNE MICRO (BOTTOM 5)
<details><summary><b>Garby (ID: 3:343:01 | H3: 891e2435a0bffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Garby
  stop_id                 : 3:343:01
  h3_index                : 891e2435a0bffff
  hub_id                  : 1731
  hub_name                : Garby
  is_hub_anchor           : True
  stop_lat                : 52.1569
  stop_lon                : 17.2900

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.0895
  stop_local_score_raw    : -2.1704

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.1429
  stop_routes_count       : 1
  stop_routes             : 26
  stop_hub_share          : 1.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 200.0064
  stop_liquidity          : 2

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 123.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Luboń/Rzeczna (ID: 3071 | H3: 891e24a846fffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Luboń/Rzeczna
  stop_id                 : 3071
  h3_index                : 891e24a846fffff
  hub_id                  : 886
  hub_name                : Luboń/Rzeczna
  is_hub_anchor           : False
  stop_lat                : 52.3470
  stop_lon                : 16.9015

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.0716
  stop_local_score_raw    : -2.2035

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 1107023.8872
  stop_raw_gravity        : 536515.7302
  stop_entropy            : 1.0634

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 4.0723
  stop_liquidity          : 74

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 170.7430

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
    - personal_services        : 3 stopnie
    - convenience_store        : Żabka
    - post_office              : Agencja Pocztowa
    - convenience_store        : Mateo Stadion
    - convenience_store        : Żabka
    - business_office          : MG Robba
    - car_services             : Bear-Lock Centrum Zapezpieczeń
    - business_office          : G.W.T.
    - car_services             : STM Auto Naprawa
    - education_high_school    : Szkoła Podstawowa nr 3
```
</details>
<details><summary><b>Luboń/Rzeczna (ID: 3070 | H3: 891e24a846fffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Luboń/Rzeczna
  stop_id                 : 3070
  h3_index                : 891e24a846fffff
  hub_id                  : 886
  hub_name                : Luboń/Rzeczna
  is_hub_anchor           : True
  stop_lat                : 52.3467
  stop_lon                : 16.9015

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.0537
  stop_local_score_raw    : -2.2052

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 900092.3005
  stop_raw_gravity        : 427944.0887
  stop_entropy            : 1.1033

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 4.0723
  stop_liquidity          : 75

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 198.3169

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 4x education_high_school
  > 3x convenience_store
  > 3x car_services
  > 2x business_office
  > 1x post_office
  > 1x personal_services
  > 1x micro_playground
  > 1x park_recreation
  > 1x industrial_zone
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store        : Żabka
    - post_office              : Agencja Pocztowa
    - convenience_store        : Mateo Stadion
    - convenience_store        : Żabka
    - business_office          : MG Robba
    - car_services             : Bear-Lock Centrum Zapezpieczeń
    - business_office          : G.W.T.
    - car_services             : STM Auto Naprawa
    - education_high_school    : Szkoła Podstawowa nr 3
    - education_high_school    : Dwujęzyczne Liceum Ogólnokształcące w Luboniu
```
</details>
<details><summary><b>Jeziory Wielkie/Wieś (ID: 2627 | H3: 891e2422493ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Jeziory Wielkie/Wieś
  stop_id                 : 2627
  h3_index                : 891e2422493ffff
  hub_id                  : 2299
  hub_name                : Jeziory Wielkie - Wieś
  is_hub_anchor           : False
  stop_lat                : 52.1838
  stop_lon                : 17.1239

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.0358
  stop_local_score_raw    : -2.6297

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 84.9593
  stop_liquidity          : 1

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 66.7853

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Jeziory Wielkie/Wieś (ID: 2628 | H3: 891e2430a67ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Jeziory Wielkie/Wieś
  stop_id                 : 2628
  h3_index                : 891e2430a67ffff
  hub_id                  : 2299
  hub_name                : Jeziory Wielkie - Wieś
  is_hub_anchor           : False
  stop_lat                : 52.1837
  stop_lon                : 17.1228

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.0179
  stop_local_score_raw    : -2.6414

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 84.9593
  stop_liquidity          : 1

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 59.5500

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>

#### POZIOM 2: NAJWAZNIEJSZE WEZLY LOGICZNE MACRO (TOP 5 HUBOW)
<details><summary><b>HUB: Kórnik - Pl. Niepodległości (ID: 100 | H3: 891e2432a9bffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Kórnik - Pl. Niepodległości
  hub_id                  : 100
  h3_index                : 891e2432a9bffff
  hub_stops_count         : 8
  hub_stops_ids           : 203, 204, 2605, 2606, KDNIE01, KDNIE01a, KDNIE02a, KDNIE02end
  lat                     : 52.2481
  lon                     : 17.0879

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 100.0000
  hub_local_score_raw     : 2.4659

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 2928420.3533
  hub_raw_gravity         : 1280248.3555
  hub_entropy             : 1.2874

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 11.5000
  hub_routes_count        : 17
  hub_routes              : 156, 172, 211, 212, 250, 329, 330, 580, 582, 590, 591, 592, 593, 595, 596, 598, 599

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 6929.1201
  hub_liquidity           : 6

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 569.9231
```
</details>
<details><summary><b>HUB: Śrem, Dworzec Autobusowy Peron 9 (ID: 171 | H3: 891e24388afffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Śrem, Dworzec Autobusowy Peron 9
  hub_id                  : 171
  h3_index                : 891e24388afffff
  hub_stops_count         : 10
  hub_stops_ids           : 547, 547-1, 547-2, 547-3, 547-4, 547-5, 547-6, 547-7, 547-8, 547-9
  lat                     : 52.0866
  lon                     : 17.0191

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.9640
  hub_local_score_raw     : 2.4169

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 3932929.2194
  hub_raw_gravity         : 1802371.8213
  hub_entropy             : 1.1821

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 10.0714
  hub_routes_count        : 27
  hub_routes              : 115, 156, 158, 172, 207, 211, 212, 213, 218, 230, 233, 237, 239, 240, 241, 242, 245, 250, 251, 312, 314, 315, 316, 317, 329, 330, 919

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 5735.0945
  hub_liquidity           : 126

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 1655.6644
```
</details>
<details><summary><b>HUB: Poznań Główny - Dworzec Autobusowy Peron 18 (ID: 342 | H3: 891e24aa563ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Poznań Główny - Dworzec Autobusowy Peron 18
  hub_id                  : 342
  h3_index                : 891e24aa563ffff
  hub_stops_count         : 25
  hub_stops_ids           : 399, 810, 811, 1714, 1715, 1807, 159_1_14, 159_1_16, 399-1, 399-10, 399-11, 399-12, 399-13, 399-14, 399-15, 399-16, 399-18, 399-2, 399-3, 399-4, 399-5, 399-6, 399-7, 399-8, 399-9
  lat                     : 52.4026
  lon                     : 16.9140

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.9280
  hub_local_score_raw     : 2.4089

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 12458341.0239
  hub_raw_gravity         : 4510636.2265
  hub_entropy             : 1.7620

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 12.4286
  hub_routes_count        : 42
  hub_routes              : 10, 12, 19, 22, 33, 36, 44, 51, 52, 54, 55, 57, 60, 76, 93, 97, 102, 115, 156, 158, 169, 172, 207, 211, 212, 218, 250, 251, 292, 293, 294, 297, 312, 321, 325, 326, 327, 328, 330, 331, 333, 349

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 7462.6866
  hub_liquidity           : 515

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 47.6703
```
</details>
<details><summary><b>HUB: Kórnik - Reja (ID: 243 | H3: 891e2432e77ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Kórnik - Reja
  hub_id                  : 243
  h3_index                : 891e2432e77ffff
  hub_stops_count         : 6
  hub_stops_ids           : 201, 202, 2603, 2604, KDREJ01, KDREJ02
  lat                     : 52.2532
  lon                     : 17.0821

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.8919
  hub_local_score_raw     : 2.3893

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 11633174.5194
  hub_raw_gravity         : 6011227.0190
  hub_entropy             : 0.9352

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 9.5714
  hub_routes_count        : 13
  hub_routes              : 156, 172, 211, 212, 250, 330, 590, 591, 592, 593, 596, 598, 599

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 6551.0516
  hub_liquidity           : 80

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 627.3150
```
</details>
<details><summary><b>HUB: Śrem, ul. Grunwaldzka (ID: 762 | H3: 891e243883bffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Śrem, ul. Grunwaldzka
  hub_id                  : 762
  h3_index                : 891e243883bffff
  hub_stops_count         : 2
  hub_stops_ids           : 548, 549
  lat                     : 52.0806
  lon                     : 17.0138

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.8559
  hub_local_score_raw     : 2.1993

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 8338847.3718
  hub_raw_gravity         : 4648200.4596
  hub_entropy             : 0.7940

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 6.7857
  hub_routes_count        : 16
  hub_routes              : 115, 156, 158, 172, 207, 211, 212, 218, 233, 237, 245, 250, 251, 312, 317, 330

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 5164.8352
  hub_liquidity           : 99

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 4321.6905
```
</details>

---

## PRZEMYSL
#### DASHBOARD ASERCJI PIPELINE'U (Pelna Integralnosc Bazy)
```text
[PASS ZERO NULLS & INFS] Petla obliczeniowa wygenerowala 100% spojnych komorek.
[STATS] [PASS] Z-Score Micro VALID (Mean: 0.000, Std: 0.662)
        Rozklad Rang Slupkow (Micro): A: 31, A+: 16, B: 47, C: 62, D: 77, F: 77
[STATS] [PASS] Z-Score Macro VALID (Mean: -0.000, Std: 0.662)
        Rozklad Rang Hubow (Macro): A: 18, A+: 10, B: 27, C: 36, D: 45, F: 44
[DEMOGRAPHY] [PASS] DEMOGRAFIA W NORMIE: +18.7% (GUS strefa: 71,214 vs Baza miejska: 60,000)
[PASS] POI Parquet 100% Valid (Matematyka Huffa dziala)
[PASS] POP Parquet 100% Valid
[PASS] H3 Res 8 Grid 100% Valid (202 komorek, 31 pustyn transportowych)
```

### Faza 0: Statystyki Ogolne i Balans Sieci
- **Slupki Fizyczne (Micro):** 310 slupkow
- **Wezly Logiczne (Macro Hubs):** 180 hubow (Wskaznik konsolidacji: 1.72 slupka/hub)
- **Populacja Strefy Transportowej (GUS 250m):** 71,214 mieszkancow
- **Transakcje Notarialne RCN:** 902 aktow
### Faza 1: Siatka Analityczna Uber H3 Res 8 (0.74 km2 / komorka)
- **Liczba Komorek H3 Res 8:** 202
- **Rynek Nieruchomosci RCN w Heksach:** Pokrycie 30.2% (61/202 komorek), Srednia: 4,461 PLN/m2, Mediana: 4,401 PLN/m2, Std: 3,036, Min: 696, Max: 21,111 PLN/m2
- **Demografia GUS NSP 2021 w Heksach:** Laczna ludnosc w heksach: 71,214, Srednia/heks: 352.5, Mediana: 55.0, Std: 914.4, Max: 6,495
- **Podaz Transportu w Heksach:** Sredni Transport Score: 10.85, Max Transport Score: 100.00, Srednia odjazdow/h: 3.37, Pustynie Transportowe TDI: 31

#### TOP 5 Pustyn Transportowych (The Investment List)
| H3 Index | Lat | Lon | Populacja GUS | Odjazdy/h | TDI Score |
|---|---|---|---|---|---|
| `881e2b14d9fffff` | 49.77871 | 22.76928 | 3,097 | 0.0 | **84.34** |
| `881e2b14cdfffff` | 49.77444 | 22.72437 | 741 | 0.0 | **69.35** |
| `881e2b16adfffff` | 49.79282 | 22.70806 | 502 | 0.0 | **65.27** |
| `881e2b1453fffff` | 49.78786 | 22.69785 | 391 | 0.0 | **62.65** |
| `881e2bb9a5fffff` | 49.81974 | 22.78161 | 370 | 0.0 | **62.07** |

#### TOP 5 Biegunow Transportu (Najwyzsza Podaz)
| H3 Index | Lat | Lon | Transport Score | Odjazdy/h | Liczba Slupkow |
|---|---|---|---|---|---|
| `881e2b14dbfffff` | 49.77588 | 22.78152 | **100.00** | 43.4 | 9 |
| `881e2b16bbfffff` | 49.79427 | 22.76523 | **100.00** | 43.4 | 8 |
| `881e2bab63fffff` | 49.78579 | 22.80196 | **100.00** | 41.4 | 8 |
| `881e2bab67fffff` | 49.78083 | 22.79174 | **100.00** | 46.9 | 13 |
| `881e2b16b3fffff` | 49.78649 | 22.76725 | **100.00** | 107.6 | 17 |

#### TOP 5 Najdrozszych Heksow Mieszkaniowych RCN
| H3 Index | Lat | Lon | Mediana Ceny m2 | Liczba Transakcji |
|---|---|---|---|---|
| `881e2baae1fffff` | 49.80338 | 22.94698 | **21,111 PLN** | 6 |
| `881e2b14c9fffff` | 49.77940 | 22.73458 | **9,967 PLN** | 1 |
| `881e2b16b5fffff` | 49.78436 | 22.74479 | **9,121 PLN** | 67 |
| `881e2b14d9fffff` | 49.77871 | 22.76928 | **7,625 PLN** | 30 |
| `881e2b16adfffff` | 49.79282 | 22.70806 | **7,363 PLN** | 20 |

### Faza 2: Audyt Zbednosci TCRP Report 100 (The Axe List)
- **Zbedne Slupki (R >= 0.50 - Umiarkowana Kanibalizacja):** 177
- **Zbedne Slupki (R >= 0.70 - Rekomendacja Likwidacji):** 149
- **Zbedne Slupki (R >= 0.90 - Skrajna Zbednosc / Dubel):** 101

| Zbedny Słupek | Dominujacy Słupek | Dystans [m] | S_service | S_spatial | S_cannibal | R-Score |
|---|---|---|---|---|---|---|
| Witoszyńce - Końcowy (#454, 0.2857142857142857 odj/h) | Witoszyńce - Kier. Przemyśl (#378, 0.2857142857142857 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |
| Witoszyńce - Kier. Przemyśl (#378, 0.2857142857142857 odj/h) | Witoszyńce - Końcowy (#454, 0.2857142857142857 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |
| Jagiellońska - PL. Pileckiego - Końcowy (#6, 0.14285714285714285 odj/h) | Jagiellońska - PL. Pileckiego - Kier. Zasanie (#4, 9.642857142857142 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |
| Słowackiego - PGK - Końcowy (#440, 0.14285714285714285 odj/h) | Słowackiego - PGK - Kier. Pikulice (#408, 1.4285714285714286 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |
| Rożubowice Końcówka (#436, 0.2857142857142857 odj/h) | Rożubowice Końcówka - Kier. Przemyśl (#306, 0.2857142857142857 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |

### Faza 3: Hierarchia Magnesow Miejskich POI

#### Top 20 Kategorii POI w Miescie
| Kategoria | Tier | Ilosc w Miescie | Wartosc Punktowa (W) |
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

#### TOP 10 Konkretnych Nazwanych Magnesow Miejskich (T0, T1, T2)
| Nazwa Obiektu | Kategoria POI | Tier | Waga Przyciagania (W) |
|---|---|---|---|
| **Przemyśl Główny** | `national_rail_hub` | T0_MEGA_HUB | 29,447,671 |
| **Polonia Przemyśl** | `national_stadium` | T1_NATIONAL_MAGNET | 21,390,025 |
| **Centrum Leczenia Ambulatoryjnego nr.2** | `hospital_clinical` | T1_NATIONAL_MAGNET | 18,933,534 |
| **Caritas Centrum Medyczno-Charytatywne im. Św. Józefa w Przemyślu** | `hospital_clinical` | T1_NATIONAL_MAGNET | 18,933,534 |
| **Wojewódzki Szpital im. Św. Ojca Pio w Przemyślu** | `hospital_clinical` | T1_NATIONAL_MAGNET | 18,933,534 |
| **Kolegium Nauczycielskie im. Aleksandra Fredry w Przemyślu** | `university_campus` | T1_NATIONAL_MAGNET | 14,614,092 |
| **Państwowa Akademia Nauk Stosowanych w Przemyślu** | `university_campus` | T1_NATIONAL_MAGNET | 14,614,092 |
| **Wyższa Szkoła Prawa i Administracji** | `university_campus` | T1_NATIONAL_MAGNET | 14,614,092 |
| **Wyższe Seminarium Duchowne w Przemyślu** | `university_campus` | T1_NATIONAL_MAGNET | 12,722,306 |
| **Medyczno-Społeczne Centrum Kształcenia Zawodowego i Ustawicznego** | `university_campus` | T1_NATIONAL_MAGNET | 12,722,306 |

### Faza 4: Probki Pelnego DNA (Wszystkie 53 Metryki)

#### POZIOM 1: NAJLEPSZE SLUPKI FIZYCZNE MICRO (TOP 5)
<details><summary><b>Jagiellońska - PL. RYBI - Kier. Plac Na Bramie (ID: 1 | H3: 891e2b16b2fffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Jagiellońska - PL. RYBI - Kier. Plac Na Bramie
  stop_id                 : 1
  h3_index                : 891e2b16b2fffff
  hub_id                  : 27
  hub_name                : Jagiellońska - PL. Pileckiego - Kier. Zasanie
  is_hub_anchor           : False
  stop_lat                : 49.7841
  stop_lon                : 22.7707

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 100.0000
  stop_local_score_raw    : 1.7569

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 8295402.9161
  stop_raw_gravity        : 2622250.1468
  stop_entropy            : 2.1635

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 9.5714
  stop_routes_count       : 13
  stop_routes             : 1, 2, 3, 4, 5, 8, 10, 12, 16, 18, 20, 25, 28
  stop_hub_share          : 0.5826

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 5091.0094
  stop_liquidity          : 46

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 562.5421

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 61x gastronomy
  > 23x specialized_retail
  > 18x micro_atm
  > 17x convenience_store
  > 15x bank
  > 14x commercial_zone
  > 13x government_central
  > 13x personal_services
  > 11x park_recreation
  > 10x pharmacy
  > 10x place_of_worship
  > 9x micro_playground
  > 7x health_clinic
  > 6x education_preschool
  > 5x education_high_school
  > 4x culture_theatre
  > 3x social_support_mops
  > 3x business_office
  > 2x post_office
  > 2x micro_parcel_locker
  > 2x marketplace
  > 2x sports_centre
  > 2x police_station
  > 1x university_campus
  > 1x shopping_mall
  > 1x hospital_clinical
  > 1x industrial_zone
  > 1x car_services
  > 1x supermarket

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - government_central       : Prokuratura Rejonowa w Przemyślu
    - gastronomy               : 3 Papryczki
    - post_office              : Urząd Pocztowy Przemyśl 8
    - micro_atm                : Bankomat PKO BP
    - gastronomy               : Margherita
    - pharmacy                 : Pogodna
    - micro_atm                : Euronet
    - pharmacy                 : Dr. Max
    - pharmacy                 : Słoneczna
    - pharmacy                 : Pod Orłem
```
</details>
<details><summary><b>Jagiellońska - PL. Pileckiego - Kier. Zasanie (ID: 4 | H3: 891e2b16b2fffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Jagiellońska - PL. Pileckiego - Kier. Zasanie
  stop_id                 : 4
  h3_index                : 891e2b16b2fffff
  hub_id                  : 27
  hub_name                : Jagiellońska - PL. Pileckiego - Kier. Zasanie
  is_hub_anchor           : True
  stop_lat                : 49.7839
  stop_lon                : 22.7715

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.6774
  stop_local_score_raw    : 1.7444

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 8747752.9068
  stop_raw_gravity        : 2861241.9558
  stop_entropy            : 2.0573

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 9.6429
  stop_routes_count       : 13
  stop_routes             : 1, 2, 3, 4, 5, 8, 10, 12, 16, 18, 20, 25, 28
  stop_hub_share          : 0.5870

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 4887.8991
  stop_liquidity          : 42

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 582.2126

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
    - government_central       : Prokuratura Rejonowa w Przemyślu
    - gastronomy               : 3 Papryczki
    - post_office              : Urząd Pocztowy Przemyśl 8
    - micro_atm                : Bankomat PKO BP
    - gastronomy               : Margherita
    - pharmacy                 : Pogodna
    - micro_atm                : Euronet
    - pharmacy                 : Dr. Max
    - pharmacy                 : Słoneczna
    - pharmacy                 : Pod Orłem
```
</details>
<details><summary><b>Grunwaldzka - PL. Konstytucji - Kier. Ostrów (ID: 44 | H3: 891e2b16b23ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Grunwaldzka - PL. Konstytucji - Kier. Ostrów
  stop_id                 : 44
  h3_index                : 891e2b16b23ffff
  hub_id                  : 78
  hub_name                : Grunwaldzka - PL. Konstytucji - Kier. Centrum
  is_hub_anchor           : False
  stop_lat                : 49.7865
  stop_lon                : 22.7648

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.3548
  stop_local_score_raw    : 1.3134

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 5471859.3837
  stop_raw_gravity        : 2838351.6231
  stop_entropy            : 0.9278

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 4.7143
  stop_routes_count       : 7
  stop_routes             : 1, 4, 10, 12, 18, 25, 28
  stop_hub_share          : 0.5546

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 6061.5990
  stop_liquidity          : 63

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 435.1714

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
    - government_central       : Prokuratura Rejonowa w Przemyślu
    - gastronomy               : 3 Papryczki
    - micro_atm                : Bankomat PKO BP
    - pharmacy                 : Pod Orłem
    - pharmacy                 : Niezapominajka
    - micro_atm                : Bankomat BZ WBK
    - micro_atm                : Bankomat ING Bank Slaski
    - gastronomy               : Restauracja Dominikańska
    - convenience_store        : Mini Market
    - gastronomy               : Libera
```
</details>
<details><summary><b>Grunwaldzka - OS. Kmiecie - Kier. Centrum (ID: 51 | H3: 891e2b16b43ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Grunwaldzka - OS. Kmiecie - Kier. Centrum
  stop_id                 : 51
  h3_index                : 891e2b16b43ffff
  hub_id                  : 86
  hub_name                : Grunwaldzka - OS. Kmiecie - Kier. Centrum
  is_hub_anchor           : True
  stop_lat                : 49.7842
  stop_lon                : 22.7472

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.0323
  stop_local_score_raw    : 1.3123

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 2142936.4158
  stop_raw_gravity        : 780941.7355
  stop_entropy            : 1.7440

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 3.5714
  stop_routes_count       : 5
  stop_routes             : 1, 10, 12, 25, 28
  stop_hub_share          : 1.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 8260.9625
  stop_liquidity          : 106

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 656.5711

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 9x micro_playground
  > 7x park_recreation
  > 5x convenience_store
  > 4x gastronomy
  > 4x health_clinic
  > 4x industrial_zone
  > 3x pharmacy
  > 2x micro_atm
  > 2x education_preschool
  > 2x commercial_zone
  > 1x post_office
  > 1x personal_services
  > 1x culture_theatre
  > 1x bank
  > 1x supermarket
  > 1x specialized_retail
  > 1x social_support_mops
  > 1x place_of_worship

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm                : PKO BP
    - micro_atm                : Bank Pekao
    - post_office              : Urząd Pocztowy Przemyśl 6
    - gastronomy               : Nad Sanem
    - convenience_store        : Piotruś Pan
    - convenience_store        : Piotruś Pan
    - pharmacy                 : Rodzinna
    - culture_theatre          : Filia nr.7 Przemyskiej Biblioteki Publicznej
    - bank                     : PKO BP
    - supermarket              : Maciuś
```
</details>
<details><summary><b>Dworskiego - Smolki (ID: 113 | H3: 891e2bab64bffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Dworskiego - Smolki
  stop_id                 : 113
  h3_index                : 891e2bab64bffff
  hub_id                  : 112
  hub_name                : Dworskiego - Smolki
  is_hub_anchor           : True
  stop_lat                : 49.7812
  stop_lon                : 22.7779

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 98.7097
  stop_local_score_raw    : 1.3013

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 9029813.2557
  stop_raw_gravity        : 2760910.3167
  stop_entropy            : 2.2706

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 5.7143
  stop_routes_count       : 6
  stop_routes             : 1, 2, 12, 18, 20, 25
  stop_hub_share          : 1.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 4159.4454
  stop_liquidity          : 61

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 716.2534

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 37x gastronomy
  > 17x specialized_retail
  > 15x convenience_store
  > 14x micro_atm
  > 13x commercial_zone
  > 12x park_recreation
  > 11x bank
  > 11x health_clinic
  > 9x personal_services
  > 9x micro_playground
  > 9x government_central
  > 8x education_high_school
  > 6x pharmacy
  > 6x sports_centre
  > 5x place_of_worship
  > 4x education_preschool
  > 4x social_support_mops
  > 3x culture_theatre
  > 3x police_station
  > 3x business_office
  > 3x industrial_zone
  > 2x post_office
  > 2x micro_parcel_locker
  > 2x supermarket
  > 1x national_rail_hub
  > 1x shopping_mall
  > 1x car_services
  > 1x university_campus
  > 1x hospital_clinical

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - pharmacy                 : Pogodna
    - micro_atm                : Euronet
    - pharmacy                 : Dr. Max
    - pharmacy                 : Słoneczna
    - national_rail_hub        : Przemyśl Główny
    - bank                     : Millennium Bank
    - gastronomy               : Bar Misz Masz
    - gastronomy               : Kebab Sindbad
    - convenience_store        : Piotruś Pan
    - personal_services        : Natura
```
</details>

#### POZIOM 1: NAJSLABSZE SLUPKI FIZYCZNE MICRO (BOTTOM 5)
<details><summary><b>Łętownia Wieś - Kier. Bełwin (ID: 284 | H3: 891e2b1610fffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Łętownia Wieś - Kier. Bełwin
  stop_id                 : 284
  h3_index                : 891e2b1610fffff
  hub_id                  : 135
  hub_name                : Łętownia Wieś - Kier. Przemyśl
  is_hub_anchor           : False
  stop_lat                : 49.8236
  stop_lon                : 22.6882

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 1.6129
  stop_local_score_raw    : -1.6583

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0714
  stop_routes_count       : 1
  stop_routes             : 1
  stop_hub_share          : 1.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 5989.2328
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 39.2608

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Łętownia N / Ż - Kier. Przemyśl (ID: 281 | H3: 891e2b16167ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Łętownia N / Ż - Kier. Przemyśl
  stop_id                 : 281
  h3_index                : 891e2b16167ffff
  hub_id                  : 89
  hub_name                : Łętownia N / Ż - Kier. Przemyśl
  is_hub_anchor           : True
  stop_lat                : 49.8193
  stop_lon                : 22.6947

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 1.2903
  stop_local_score_raw    : -1.6766

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0714
  stop_routes_count       : 1
  stop_routes             : 1
  stop_hub_share          : 1.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 5989.2328
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 33.9505

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Łętownia N / Ż - Kier. Bełwin (ID: 282 | H3: 891e2b16167ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Łętownia N / Ż - Kier. Bełwin
  stop_id                 : 282
  h3_index                : 891e2b16167ffff
  hub_id                  : 89
  hub_name                : Łętownia N / Ż - Kier. Przemyśl
  is_hub_anchor           : False
  stop_lat                : 49.8193
  stop_lon                : 22.6948

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.9677
  stop_local_score_raw    : -1.6771

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0714
  stop_routes_count       : 1
  stop_routes             : 1
  stop_hub_share          : 1.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 5989.2328
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 33.8099

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Łuczyce II N / Ż - Kier. Przemyśl (ID: 300 | H3: 891e2ba9467ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Łuczyce II N / Ż - Kier. Przemyśl
  stop_id                 : 300
  h3_index                : 891e2ba9467ffff
  hub_id                  : 117
  hub_name                : Łuczyce II N / Ż - Kier. Przemyśl
  is_hub_anchor           : True
  stop_lat                : 49.7430
  stop_lon                : 22.8279

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.6452
  stop_local_score_raw    : -1.7618

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.3571
  stop_routes_count       : 1
  stop_routes             : 20
  stop_hub_share          : 0.5556

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 5989.2328
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 3.2155

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Łuczyce II N / Ż - Kier. Rożubowice (ID: 301 | H3: 891e2ba9467ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Łuczyce II N / Ż - Kier. Rożubowice
  stop_id                 : 301
  h3_index                : 891e2ba9467ffff
  hub_id                  : 117
  hub_name                : Łuczyce II N / Ż - Kier. Przemyśl
  is_hub_anchor           : False
  stop_lat                : 49.7432
  stop_lon                : 22.8274

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.3226
  stop_local_score_raw    : -1.8187

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.2857
  stop_routes_count       : 1
  stop_routes             : 20
  stop_hub_share          : 0.4444

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 5989.2328
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 2.7845

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>

#### POZIOM 2: NAJWAZNIEJSZE WEZLY LOGICZNE MACRO (TOP 5 HUBOW)
<details><summary><b>HUB: Jagiellońska - PL. Pileckiego - Kier. Zasanie (ID: 27 | H3: 891e2b16b2fffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Jagiellońska - PL. Pileckiego - Kier. Zasanie
  hub_id                  : 27
  h3_index                : 891e2b16b2fffff
  hub_stops_count         : 3
  hub_stops_ids           : 1, 4, 6
  lat                     : 49.7840
  lon                     : 22.7711

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 100.0000
  hub_local_score_raw     : 1.6578

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 15678053.5248
  hub_raw_gravity         : 4973397.6932
  hub_entropy             : 2.1524

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 16.4286
  hub_routes_count        : 13
  hub_routes              : 1, 2, 3, 4, 5, 8, 10, 12, 16, 18, 20, 25, 28

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 5054.9451
  hub_liquidity           : 47

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 1131.4245
```
</details>
<details><summary><b>HUB: Słowackiego - Poczta - Kier. Centrum (ID: 23 | H3: 891e2b14db3ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Słowackiego - Poczta - Kier. Centrum
  hub_id                  : 23
  h3_index                : 891e2b14db3ffff
  hub_stops_count         : 4
  hub_stops_ids           : 90, 91, 505, 506
  lat                     : 49.7778
  lon                     : 22.7796

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.4444
  hub_local_score_raw     : 1.3960

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 17923813.3471
  hub_raw_gravity         : 9795050.7511
  hub_entropy             : 0.8299

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 7.9286
  hub_routes_count        : 7
  hub_routes              : 3, 4, 5, 8, 10, 16, 28

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 6297.7099
  hub_liquidity           : 135

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 1192.4278
```
</details>
<details><summary><b>HUB: Grunwaldzka - PL. Konstytucji - Kier. Centrum (ID: 78 | H3: 891e2b16b23ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Grunwaldzka - PL. Konstytucji - Kier. Centrum
  hub_id                  : 78
  h3_index                : 891e2b16b23ffff
  hub_stops_count         : 2
  hub_stops_ids           : 43, 44
  lat                     : 49.7864
  lon                     : 22.7649

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 98.8889
  hub_local_score_raw     : 1.3030

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 10096211.0024
  hub_raw_gravity         : 5219342.3648
  hub_entropy             : 0.9344

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 8.5000
  hub_routes_count        : 7
  hub_routes              : 1, 4, 10, 12, 18, 25, 28

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 6061.5990
  hub_liquidity           : 63

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 751.3997
```
</details>
<details><summary><b>HUB: Słowackiego - Biblioteka (ID: 1 | H3: 891e2bab64bffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Słowackiego - Biblioteka
  hub_id                  : 1
  h3_index                : 891e2bab64bffff
  hub_stops_count         : 2
  hub_stops_ids           : 88, 89
  lat                     : 49.7806
  lon                     : 22.7758

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 98.3333
  hub_local_score_raw     : 1.1223

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 13125353.7461
  hub_raw_gravity         : 4070920.7544
  hub_entropy             : 2.2242

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 8.0000
  hub_routes_count        : 7
  hub_routes              : 3, 4, 5, 8, 10, 16, 28

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 4195.9212
  hub_liquidity           : 68

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 1318.2393
```
</details>
<details><summary><b>HUB: Monte Cassino - Szpital Wojewódzki - Końcowy (ID: 147 | H3: 891e2b169abffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Monte Cassino - Szpital Wojewódzki - Końcowy
  hub_id                  : 147
  h3_index                : 891e2b169abffff
  hub_stops_count         : 2
  hub_stops_ids           : 14, 434
  lat                     : 49.8089
  lon                     : 22.7809

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 97.7778
  hub_local_score_raw     : 1.1134

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 13841311.3403
  hub_raw_gravity         : 13407646.7586
  hub_entropy             : 0.0323

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 6.2143
  hub_routes_count        : 4
  hub_routes              : 2, 10, 16, 18

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 5635.3888
  hub_liquidity           : 113

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 787.8842
```
</details>

---

## RADOM
#### DASHBOARD ASERCJI PIPELINE'U (Pelna Integralnosc Bazy)
```text
[PASS ZERO NULLS & INFS] Petla obliczeniowa wygenerowala 100% spojnych komorek.
[STATS] [PASS] Z-Score Micro VALID (Mean: 0.000, Std: 0.661)
        Rozklad Rang Slupkow (Micro): A: 73, A+: 37, B: 109, C: 145, D: 182, F: 181
[STATS] [PASS] Z-Score Macro VALID (Mean: 0.000, Std: 0.664)
        Rozklad Rang Hubow (Macro): A: 44, A+: 22, B: 66, C: 88, D: 110, F: 109
[DEMOGRAPHY] [PASS] DEMOGRAFIA W NORMIE: +19.6% (GUS strefa: 239,185 vs Baza miejska: 200,000)
[PASS] POI Parquet 100% Valid (Matematyka Huffa dziala)
[PASS] POP Parquet 100% Valid
[PASS] H3 Res 8 Grid 100% Valid (400 komorek, 127 pustyn transportowych)
```

### Faza 0: Statystyki Ogolne i Balans Sieci
- **Slupki Fizyczne (Micro):** 727 slupkow
- **Wezly Logiczne (Macro Hubs):** 439 hubow (Wskaznik konsolidacji: 1.66 slupka/hub)
- **Populacja Strefy Transportowej (GUS 250m):** 239,185 mieszkancow
- **Transakcje Notarialne RCN:** 4,179 aktow
### Faza 1: Siatka Analityczna Uber H3 Res 8 (0.74 km2 / komorka)
- **Liczba Komorek H3 Res 8:** 400
- **Rynek Nieruchomosci RCN w Heksach:** Pokrycie 20.2% (81/400 komorek), Srednia: 5,692 PLN/m2, Mediana: 5,756 PLN/m2, Std: 1,636, Min: 72, Max: 10,095 PLN/m2
- **Demografia GUS NSP 2021 w Heksach:** Laczna ludnosc w heksach: 239,185, Srednia/heks: 598.0, Mediana: 181.0, Std: 1327.0, Max: 10,209
- **Podaz Transportu w Heksach:** Sredni Transport Score: 9.75, Max Transport Score: 100.00, Srednia odjazdow/h: 8.76, Pustynie Transportowe TDI: 127

#### TOP 5 Pustyn Transportowych (The Investment List)
| H3 Index | Lat | Lon | Populacja GUS | Odjazdy/h | TDI Score |
|---|---|---|---|---|---|
| `881e2c058bfffff` | 51.36786 | 21.17370 | 1,102 | 0.0 | **73.50** |
| `881e2c059dfffff` | 51.36527 | 21.18627 | 922 | 0.0 | **71.64** |
| `881e2c04e5fffff` | 51.39297 | 21.18986 | 771 | 0.0 | **69.76** |
| `881e2c059bfffff` | 51.36766 | 21.20917 | 512 | 0.0 | **65.47** |
| `881e2c073bfffff` | 51.42122 | 21.08697 | 454 | 0.0 | **64.22** |

#### TOP 5 Biegunow Transportu (Najwyzsza Podaz)
| H3 Index | Lat | Lon | Transport Score | Odjazdy/h | Liczba Slupkow |
|---|---|---|---|---|---|
| `881e2c0439fffff` | 51.40572 | 21.16246 | **100.00** | 172.1 | 14 |
| `881e2c043dfffff` | 51.40074 | 21.15213 | **100.00** | 150.8 | 16 |
| `881e2c042bfffff` | 51.40333 | 21.13955 | **100.00** | 111.3 | 7 |
| `881e2c0427fffff` | 51.39077 | 21.13147 | **100.00** | 102.9 | 12 |
| `881e2c0431fffff` | 51.39815 | 21.16471 | **100.00** | 100.5 | 11 |

#### TOP 5 Najdrozszych Heksow Mieszkaniowych RCN
| H3 Index | Lat | Lon | Mediana Ceny m2 | Liczba Transakcji |
|---|---|---|---|---|
| `881e2c0401fffff` | 51.41588 | 21.14763 | **10,095 PLN** | 1 |
| `881e2c05c5fffff` | 51.37563 | 21.13597 | **9,884 PLN** | 2 |
| `881e2c042bfffff` | 51.40333 | 21.13955 | **8,248 PLN** | 110 |
| `881e2c0433fffff` | 51.39556 | 21.17729 | **8,121 PLN** | 22 |
| `881e2c0467fffff` | 51.40850 | 21.11439 | **8,099 PLN** | 418 |

### Faza 2: Audyt Zbednosci TCRP Report 100 (The Axe List)
- **Zbedne Slupki (R >= 0.50 - Umiarkowana Kanibalizacja):** 246
- **Zbedne Slupki (R >= 0.70 - Rekomendacja Likwidacji):** 164
- **Zbedne Slupki (R >= 0.90 - Skrajna Zbednosc / Dubel):** 35

| Zbedny Słupek | Dominujacy Słupek | Dystans [m] | S_service | S_spatial | S_cannibal | R-Score |
|---|---|---|---|---|---|---|
| Zbrowskiego / Olsztyńska (#1904, 2.4285714285714284 odj/h) | Zbrowskiego / Olsztyńska (#94, 2.5714285714285716 odj/h) | 6.6m | 1.00 | 1.00 | 0.99 | **0.9838** |
| Przejazd / Idalińska (#249, 3.0 odj/h) | Przejazd / Idalińska (#260, 3.142857142857143 odj/h) | 10.0m | 1.00 | 0.99 | 0.98 | **0.9739** |
| Stalowa / Starokrakowska (#285, 1.8571428571428572 odj/h) | Stalowa / Starokrakowska (#289, 2.0 odj/h) | 10.4m | 1.00 | 0.99 | 0.98 | **0.9728** |
| Witosa / Mieszka I (NŻ) (#1535, 1.5 odj/h) | Witosa / Mieszka I (NŻ) (#1536, 1.5714285714285714 odj/h) | 11.8m | 1.00 | 0.99 | 0.97 | **0.9683** |
| Reja / Wolność (#109, 7.214285714285714 odj/h) | Reja / Wolność (#125, 7.285714285714286 odj/h) | 12.2m | 1.00 | 0.99 | 0.97 | **0.9668** |

### Faza 3: Hierarchia Magnesow Miejskich POI

#### Top 20 Kategorii POI w Miescie
| Kategoria | Tier | Ilosc w Miescie | Wartosc Punktowa (W) |
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

#### TOP 10 Konkretnych Nazwanych Magnesow Miejskich (T0, T1, T2)
| Nazwa Obiektu | Kategoria POI | Tier | Waga Przyciagania (W) |
|---|---|---|---|
| **Port Lotniczy Warszawa-Radom** | `international_airport` | T0_MEGA_HUB | 187,989,020 |
| **Radom Główny** | `national_rail_hub` | T0_MEGA_HUB | 34,180,638 |
| **Stadion im. Braci Czachorów RKS Radomiak** | `national_stadium` | T1_NATIONAL_MAGNET | 23,270,084 |
| **Regionalne Centrum Krwiodawstwa i Krwiolecznictwa im. dr Konrada Vietha w Radomiu** | `hospital_clinical` | T1_NATIONAL_MAGNET | 20,687,709 |
| **Mazowiecki Oddział Wojewódzki NFZ - Delegatura w Radomiu** | `hospital_clinical` | T1_NATIONAL_MAGNET | 20,687,709 |
| **Samodzielny Wojewódzki Publiczny Zespół Zakładów Psychiatrycznej Opieki Zdrowotnej im. dr Barbary Borzym** | `hospital_clinical` | T1_NATIONAL_MAGNET | 20,687,709 |
| **Radomskie Centrum Onkologii** | `hospital_clinical` | T1_NATIONAL_MAGNET | 20,687,709 |
| **Radomski Szpital Specjalistyczny im. dr. Tytusa Chałubińskiego - Budynek Specjalistyczny** | `hospital_clinical` | T1_NATIONAL_MAGNET | 20,687,709 |
| **Radomski Szpital Specjalistyczny im. dr Tytusa Chałubińskiego - Oddział Rehabilitacji** | `hospital_clinical` | T1_NATIONAL_MAGNET | 20,687,709 |
| **Stadion Lekkoatletyczno-Piłkarski im. Marszałka Józefa Piłsudskiego** | `national_stadium` | T1_NATIONAL_MAGNET | 20,257,785 |

### Faza 4: Probki Pelnego DNA (Wszystkie 53 Metryki)

#### POZIOM 1: NAJLEPSZE SLUPKI FIZYCZNE MICRO (TOP 5)
<details><summary><b>Chrobrego / Mierzejewskiego (ID: 59 | H3: 891e2c041dbffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Chrobrego / Mierzejewskiego
  stop_id                 : 59
  h3_index                : 891e2c041dbffff
  hub_id                  : 271
  hub_name                : Chrobrego / Mierzejewskiego
  is_hub_anchor           : False
  stop_lat                : 51.4185
  stop_lon                : 21.1633

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 100.0000
  stop_local_score_raw    : 1.4063

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 14466804.2003
  stop_raw_gravity        : 10804632.3650
  stop_entropy            : 0.3389

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 8.7857
  stop_routes_count       : 6
  stop_routes             : 7, 11, 13, 21, 23, 24
  stop_hub_share          : 0.4960

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 8112.2352
  stop_liquidity          : 83

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 599.3228

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 98x park_recreation
  > 19x micro_playground
  > 18x university_campus
  > 10x gastronomy
  > 5x specialized_retail
  > 5x health_clinic
  > 5x micro_parcel_locker
  > 4x personal_services
  > 3x police_station
  > 3x micro_atm
  > 3x supermarket
  > 3x place_of_worship
  > 2x pharmacy
  > 2x education_high_school
  > 2x convenience_store
  > 2x car_services
  > 1x post_office
  > 1x social_support_mops
  > 1x government_central
  > 1x culture_theatre
  > 1x education_preschool
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - university_campus        : Wydział Inżynierii Chemicznej i Towaroznawstwa
    - police_station           : Komenda Miejska Policji w Radomiu
    - post_office              : Urząd Pocztowy Radom 7
    - university_campus        : Centrum Naukowo-Badawcze
    - university_campus        : Wydział Ekonomii i Finansów
    - university_campus        : Aula Głowna UTH Radom
    - gastronomy               : Dell' Arte
    - gastronomy               : BurgerMANIA
    - pharmacy                 : Apteka Polskich Farmaceutów s.c.
    - micro_atm                : Euronet
```
</details>
<details><summary><b>Chrobrego / Mierzejewskiego (ID: 156 | H3: 891e2c040afffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Chrobrego / Mierzejewskiego
  stop_id                 : 156
  h3_index                : 891e2c040afffff
  hub_id                  : 271
  hub_name                : Chrobrego / Mierzejewskiego
  is_hub_anchor           : True
  stop_lat                : 51.4177
  stop_lon                : 21.1624

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.8624
  stop_local_score_raw    : 1.3945

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 16995442.6174
  stop_raw_gravity        : 13941797.8669
  stop_entropy            : 0.2190

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 8.9286
  stop_routes_count       : 6
  stop_routes             : 7, 11, 13, 21, 23, 24
  stop_hub_share          : 0.5040

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 8033.8884
  stop_liquidity          : 51

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 493.2556

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
    - university_campus        : Wydział Inżynierii Chemicznej i Towaroznawstwa
    - police_station           : Komenda Miejska Policji w Radomiu
    - post_office              : Urząd Pocztowy Radom 7
    - university_campus        : Centrum Naukowo-Badawcze
    - university_campus        : Wydział Ekonomii i Finansów
    - university_campus        : Aula Głowna UTH Radom
    - gastronomy               : Dell' Arte
    - gastronomy               : BurgerMANIA
    - pharmacy                 : Apteka Polskich Farmaceutów s.c.
    - micro_atm                : Euronet
```
</details>
<details><summary><b>Limanowskiego / Wałowa (ID: 870 | H3: 891e2c042a3ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Limanowskiego / Wałowa
  stop_id                 : 870
  h3_index                : 891e2c042a3ffff
  hub_id                  : 236
  hub_name                : Limanowskiego / Wałowa
  is_hub_anchor           : False
  stop_lat                : 51.4029
  stop_lon                : 21.1397

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.7249
  stop_local_score_raw    : 1.3795

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 9913387.0100
  stop_raw_gravity        : 3267664.3059
  stop_entropy            : 2.0338

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 10.3571
  stop_routes_count       : 8
  stop_routes             : 1, 2, 5, 10, 11, 16, 17, 23
  stop_hub_share          : 0.5000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 8334.0751
  stop_liquidity          : 102

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 323.4267

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 152x park_recreation
  > 11x specialized_retail
  > 9x health_clinic
  > 9x gastronomy
  > 8x place_of_worship
  > 7x industrial_zone
  > 6x personal_services
  > 6x micro_playground
  > 5x convenience_store
  > 4x commercial_zone
  > 3x social_support_mops
  > 3x government_central
  > 2x car_services
  > 2x pharmacy
  > 2x education_high_school
  > 2x supermarket
  > 1x post_office
  > 1x micro_atm
  > 1x micro_parcel_locker
  > 1x education_preschool
  > 1x national_stadium
  > 1x hospital_clinical
  > 1x university_campus

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store        : Żabka
    - car_services             : Transoil
    - health_clinic            : Radomska Stacja Pogotowia Ratunkowego
    - post_office              : Ajencja Pocztowa Radom
    - place_of_worship         : Kaplica domowa
    - place_of_worship         : Kaplica domowa
    - gastronomy               : Casa Verde Ristorante Pizzeria
    - gastronomy               : Radomska Cafe
    - specialized_retail       : Media Expert
    - gastronomy               : Nihil Novi
```
</details>
<details><summary><b>Chrobrego / Rapackiego (ID: 159 | H3: 891e2c040a7ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Chrobrego / Rapackiego
  stop_id                 : 159
  h3_index                : 891e2c040a7ffff
  hub_id                  : 238
  hub_name                : Chrobrego / Rapackiego
  is_hub_anchor           : False
  stop_lat                : 51.4213
  stop_lon                : 21.1628

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.5873
  stop_local_score_raw    : 1.2589

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 15455776.1495
  stop_raw_gravity        : 9890054.5777
  stop_entropy            : 0.5628

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 8.9286
  stop_routes_count       : 6
  stop_routes             : 7, 11, 13, 21, 23, 24
  stop_hub_share          : 0.4980

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 6394.3671
  stop_liquidity          : 132

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 830.4918

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 111x park_recreation
  > 23x university_campus
  > 19x micro_playground
  > 9x gastronomy
  > 6x convenience_store
  > 6x micro_parcel_locker
  > 5x health_clinic
  > 4x specialized_retail
  > 4x supermarket
  > 3x micro_atm
  > 3x personal_services
  > 3x place_of_worship
  > 2x car_services
  > 2x pharmacy
  > 2x education_preschool
  > 1x post_office
  > 1x education_high_school
  > 1x social_support_mops
  > 1x culture_theatre
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - car_services             : Circle K Express
    - university_campus        : Wydział Inżynierii Chemicznej i Towaroznawstwa
    - post_office              : Urząd Pocztowy Radom 7
    - car_services             : Orlen
    - university_campus        : Centrum Naukowo-Badawcze
    - university_campus        : Wydział Ekonomii i Finansów
    - university_campus        : Aula Głowna UTH Radom
    - gastronomy               : Dell' Arte
    - university_campus        : Katedra Pojazdów Samochodowych
    - gastronomy               : BurgerMANIA
```
</details>
<details><summary><b>Limanowskiego / Wałowa (ID: 123 | H3: 891e2c042a3ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Limanowskiego / Wałowa
  stop_id                 : 123
  h3_index                : 891e2c042a3ffff
  hub_id                  : 236
  hub_name                : Limanowskiego / Wałowa
  is_hub_anchor           : True
  stop_lat                : 51.4019
  stop_lon                : 21.1400

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.4498
  stop_local_score_raw    : 1.2406

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 10470397.7225
  stop_raw_gravity        : 3566134.2021
  stop_entropy            : 1.9361

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 10.3571
  stop_routes_count       : 8
  stop_routes             : 1, 2, 5, 10, 11, 16, 17, 23
  stop_hub_share          : 0.5000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 7128.3613
  stop_liquidity          : 61

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 309.4911

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
    - health_clinic            : Orto Profil Roma
    - convenience_store        : Żabka
    - car_services             : Transoil
    - health_clinic            : Radomska Stacja Pogotowia Ratunkowego
    - post_office              : Ajencja Pocztowa Radom
    - place_of_worship         : Kaplica domowa
    - place_of_worship         : Kaplica domowa
    - gastronomy               : Casa Verde Ristorante Pizzeria
    - gastronomy               : Radomska Cafe
    - gastronomy               : Nihil Novi
```
</details>

#### POZIOM 1: NAJSLABSZE SLUPKI FIZYCZNE MICRO (BOTTOM 5)
<details><summary><b>Rożki I (ID: 1233 | H3: 891e2c0e16bffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Rożki I
  stop_id                 : 1233
  h3_index                : 891e2c0e16bffff
  hub_id                  : 160
  hub_name                : Rożki I
  is_hub_anchor           : True
  stop_lat                : 51.3359
  stop_lon                : 21.0388

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.6878
  stop_local_score_raw    : -2.1458

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 6689.2033
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 57.8875

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Małęczyn Stary / Leśna (NŻ) (ID: 1339 | H3: 891e2c3a597ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Małęczyn Stary / Leśna (NŻ)
  stop_id                 : 1339
  h3_index                : 891e2c3a597ffff
  hub_id                  : 263
  hub_name                : Małęczyn Stary / Leśna (NŻ)
  is_hub_anchor           : True
  stop_lat                : 51.3712
  stop_lon                : 21.2698

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.5502
  stop_local_score_raw    : -2.1574

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 6689.2033
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 53.4460

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Małęczyn Stary / Leśna (NŻ) (ID: 1340 | H3: 891e2c3a597ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Małęczyn Stary / Leśna (NŻ)
  stop_id                 : 1340
  h3_index                : 891e2c3a597ffff
  hub_id                  : 263
  hub_name                : Małęczyn Stary / Leśna (NŻ)
  is_hub_anchor           : False
  stop_lat                : 51.3714
  stop_lon                : 21.2700

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.4127
  stop_local_score_raw    : -2.1619

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 6689.2033
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 51.8015

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Kozłów I (NŻ) (ID: 903 | H3: 891e2c068afffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Kozłów I (NŻ)
  stop_id                 : 903
  h3_index                : 891e2c068afffff
  hub_id                  : 230
  hub_name                : Kozłów I (NŻ)
  is_hub_anchor           : False
  stop_lat                : 51.4520
  stop_lon                : 21.2319

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.2751
  stop_local_score_raw    : -2.4210

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 6689.2033
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 8.1285

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Kozłów I (NŻ) (ID: 902 | H3: 891e2c068afffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Kozłów I (NŻ)
  stop_id                 : 902
  h3_index                : 891e2c068afffff
  hub_id                  : 230
  hub_name                : Kozłów I (NŻ)
  is_hub_anchor           : True
  stop_lat                : 51.4521
  stop_lon                : 21.2321

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.1376
  stop_local_score_raw    : -2.4252

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 6689.2033
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 7.8715

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>

#### POZIOM 2: NAJWAZNIEJSZE WEZLY LOGICZNE MACRO (TOP 5 HUBOW)
<details><summary><b>HUB: Chrobrego / Mierzejewskiego (ID: 271 | H3: 891e2c041dbffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Chrobrego / Mierzejewskiego
  hub_id                  : 271
  h3_index                : 891e2c041dbffff
  hub_stops_count         : 2
  hub_stops_ids           : 59, 156
  lat                     : 51.4181
  lon                     : 21.1629

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 100.0000
  hub_local_score_raw     : 1.4318

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 28892364.8802
  hub_raw_gravity         : 23115385.4368
  hub_entropy             : 0.2499

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 17.7143
  hub_routes_count        : 6
  hub_routes              : 7, 11, 13, 21, 23, 24

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 8016.7971
  hub_liquidity           : 89

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 826.2769
```
</details>
<details><summary><b>HUB: Limanowskiego / Wałowa (ID: 236 | H3: 891e2c042a3ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Limanowskiego / Wałowa
  hub_id                  : 236
  h3_index                : 891e2c042a3ffff
  hub_stops_count         : 2
  hub_stops_ids           : 123, 870
  lat                     : 51.4024
  lon                     : 21.1399

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.7722
  hub_local_score_raw     : 1.4151

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 18567720.4832
  hub_raw_gravity         : 6369336.1521
  hub_entropy             : 1.9152

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 20.7143
  hub_routes_count        : 8
  hub_routes              : 1, 2, 5, 10, 11, 16, 17, 23

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 8177.0904
  hub_liquidity           : 106

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 569.6059
```
</details>
<details><summary><b>HUB: Chrobrego / Rapackiego (ID: 238 | H3: 891e2c040a7ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Chrobrego / Rapackiego
  hub_id                  : 238
  h3_index                : 891e2c040a7ffff
  hub_stops_count         : 2
  hub_stops_ids           : 63, 159
  lat                     : 51.4217
  lon                     : 21.1628

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.5444
  hub_local_score_raw     : 1.2673

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 21219544.9617
  hub_raw_gravity         : 14129966.5853
  hub_entropy             : 0.5017

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 17.9286
  hub_routes_count        : 7
  hub_routes              : 3, 7, 11, 13, 21, 23, 24

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 6494.4079
  hub_liquidity           : 133

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 1152.5792
```
</details>
<details><summary><b>HUB: Malczewskiego / Kelles-Krauza (ID: 406 | H3: 891e2c043d3ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Malczewskiego / Kelles-Krauza
  hub_id                  : 406
  h3_index                : 891e2c043d3ffff
  hub_stops_count         : 2
  hub_stops_ids           : 49, 129
  lat                     : 51.4048
  lon                     : 21.1505

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.3166
  hub_local_score_raw     : 1.2154

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 10096677.9436
  hub_raw_gravity         : 4520833.5059
  hub_entropy             : 1.2334

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 17.5000
  hub_routes_count        : 4
  hub_routes              : 7, 9, 17, 19

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 7780.6892
  hub_liquidity           : 118

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 494.7400
```
</details>
<details><summary><b>HUB: Okulickiego / Rondo (ID: 58 | H3: 891e2c042b3ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Okulickiego / Rondo
  hub_id                  : 58
  h3_index                : 891e2c042b3ffff
  hub_stops_count         : 2
  hub_stops_ids           : 110, 143
  lat                     : 51.4044
  lon                     : 21.1371

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.0888
  hub_local_score_raw     : 1.2149

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 14152812.7111
  hub_raw_gravity         : 5634663.7581
  hub_entropy             : 1.5117

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 18.2143
  hub_routes_count        : 7
  hub_routes              : 2, 5, 6, 8, 10, 15, 25

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 7658.2265
  hub_liquidity           : 165

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 374.2909
```
</details>

---

## RZESZOW
#### DASHBOARD ASERCJI PIPELINE'U (Pelna Integralnosc Bazy)
```text
[PASS ZERO NULLS & INFS] Petla obliczeniowa wygenerowala 100% spojnych komorek.
[STATS] [PASS] Z-Score Micro VALID (Mean: 0.000, Std: 0.732)
        Rozklad Rang Slupkow (Micro): A: 259, A+: 130, B: 391, C: 518, D: 649, F: 649
[STATS] [PASS] Z-Score Macro VALID (Mean: 0.000, Std: 0.686)
        Rozklad Rang Hubow (Macro): A: 138, A+: 70, B: 208, C: 277, D: 346, F: 345
[DEMOGRAPHY] [INFO] OBSZAR AGLOMERACYJNY: +123.0% (GUS strefa aglomeracyjna: 423,608 vs Miasto rdzen: 190,000)
[PASS] POI Parquet 100% Valid (Matematyka Huffa dziala)
[PASS] POP Parquet 100% Valid
[PASS] H3 Res 8 Grid 100% Valid (1,904 komorek, 425 pustyn transportowych)
```

### Faza 0: Statystyki Ogolne i Balans Sieci
- **Slupki Fizyczne (Micro):** 2,596 slupkow
- **Wezly Logiczne (Macro Hubs):** 1,384 hubow (Wskaznik konsolidacji: 1.88 slupka/hub)
- **Populacja Strefy Transportowej (GUS 250m):** 423,608 mieszkancow
- **Transakcje Notarialne RCN:** 12,298 aktow
### Faza 1: Siatka Analityczna Uber H3 Res 8 (0.74 km2 / komorka)
- **Liczba Komorek H3 Res 8:** 1,904
- **Rynek Nieruchomosci RCN w Heksach:** Pokrycie 16.9% (321/1904 komorek), Srednia: 6,453 PLN/m2, Mediana: 6,180 PLN/m2, Std: 9,178, Min: 62, Max: 161,358 PLN/m2
- **Demografia GUS NSP 2021 w Heksach:** Laczna ludnosc w heksach: 423,608, Srednia/heks: 222.5, Mediana: 80.0, Std: 587.3, Max: 9,585
- **Podaz Transportu w Heksach:** Sredni Transport Score: 7.60, Max Transport Score: 100.00, Srednia odjazdow/h: 8.12, Pustynie Transportowe TDI: 425

#### TOP 5 Pustyn Transportowych (The Investment List)
| H3 Index | Lat | Lon | Populacja GUS | Odjazdy/h | TDI Score |
|---|---|---|---|---|---|
| `881e286c85fffff` | 50.01275 | 22.02638 | 1,656 | 0.0 | **77.78** |
| `881e28609bfffff` | 50.14971 | 21.96574 | 1,638 | 0.0 | **77.66** |
| `881e282921fffff` | 50.23231 | 22.11695 | 1,503 | 0.0 | **76.76** |
| `881e282d53fffff` | 50.26109 | 22.41057 | 1,502 | 0.0 | **76.75** |
| `881e286c59fffff` | 50.06238 | 21.96655 | 1,290 | 0.0 | **75.16** |

#### TOP 5 Biegunow Transportu (Najwyzsza Podaz)
| H3 Index | Lat | Lon | Transport Score | Odjazdy/h | Liczba Slupkow |
|---|---|---|---|---|---|
| `881e286ccdfffff` | 50.03871 | 22.00773 | **100.00** | 607.4 | 21 |
| `881e286cd5fffff` | 50.03050 | 22.04467 | **100.00** | 148.4 | 13 |
| `881e286c51fffff` | 50.05465 | 21.96867 | **100.00** | 144.1 | 10 |
| `881e286cddfffff` | 50.03824 | 22.04256 | **100.00** | 293.3 | 15 |
| `881e2bd66bfffff` | 49.96901 | 22.02675 | **100.00** | 96.8 | 11 |

#### TOP 5 Najdrozszych Heksow Mieszkaniowych RCN
| H3 Index | Lat | Lon | Mediana Ceny m2 | Liczba Transakcji |
|---|---|---|---|---|
| `881e286c8dfffff` | 50.02049 | 22.02427 | **161,358 PLN** | 99 |
| `881e286d9bfffff` | 49.98724 | 22.01022 | **13,400 PLN** | 5 |
| `881e286de9fffff` | 49.99089 | 21.92832 | **12,106 PLN** | 4 |
| `881e286ecbfffff` | 50.09514 | 22.01544 | **12,069 PLN** | 1 |
| `881e286c57fffff` | 50.04691 | 21.97079 | **11,632 PLN** | 129 |

### Faza 2: Audyt Zbednosci TCRP Report 100 (The Axe List)
- **Zbedne Slupki (R >= 0.50 - Umiarkowana Kanibalizacja):** 812
- **Zbedne Slupki (R >= 0.70 - Rekomendacja Likwidacji):** 593
- **Zbedne Slupki (R >= 0.90 - Skrajna Zbednosc / Dubel):** 287

| Zbedny Słupek | Dominujacy Słupek | Dystans [m] | S_service | S_spatial | S_cannibal | R-Score |
|---|---|---|---|---|---|---|
| Sikorskiego katedra 04 nż (#1503, 0.5 odj/h) | Sikorskiego katedra 04 (#58, 52.857142857142854 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |
| Krzemienica GOK 02 (#1729, 0.42857142857142855 odj/h) | Krzemienica GOK 01 (#1728, 0.42857142857142855 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |
| Krzemienica GOK 01 (#1728, 0.42857142857142855 odj/h) | Krzemienica GOK 02 (#1729, 0.42857142857142855 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |
| Podkarpacka / Nalepy 10 (#399, 4.214285714285714 odj/h) | Podkarpacka / Nalepy 10 nż (#119, 25.78571428571429 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |
| Chmielnik cmentarz 10 (#1210, 0.7857142857142857 odj/h) | Chmielnik cmentarz 09 (#1211, 0.8571428571428571 odj/h) | 6.7m | 1.00 | 1.00 | 0.99 | **0.9836** |

### Faza 3: Hierarchia Magnesow Miejskich POI

#### Top 20 Kategorii POI w Miescie
| Kategoria | Tier | Ilosc w Miescie | Wartosc Punktowa (W) |
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

#### TOP 10 Konkretnych Nazwanych Magnesow Miejskich (T0, T1, T2)
| Nazwa Obiektu | Kategoria POI | Tier | Waga Przyciagania (W) |
|---|---|---|---|
| **Port lotniczy Rzeszów-Jasionka im. Rodziny Ulmów** | `international_airport` | T0_MEGA_HUB | 194,869,952 |
| **Rzeszów Główny** | `national_rail_hub` | T0_MEGA_HUB | 35,711,344 |
| **LKS Łąka** | `national_stadium` | T1_NATIONAL_MAGNET | 21,355,857 |
| **Stadion** | `national_stadium` | T1_NATIONAL_MAGNET | 21,355,857 |
| **Hala Podpromie** | `national_stadium` | T1_NATIONAL_MAGNET | 21,355,857 |
| **Stadion LKS \** | `national_stadium` | T1_NATIONAL_MAGNET | 21,355,857 |
| **LKS Bratek Bratkowice** | `national_stadium` | T1_NATIONAL_MAGNET | 21,355,857 |
| **IZO Arena** | `national_stadium` | T1_NATIONAL_MAGNET | 21,355,857 |
| **Stadion Plantatora Nienadówka** | `national_stadium` | T1_NATIONAL_MAGNET | 21,355,857 |
| **Junak Słocina** | `national_stadium` | T1_NATIONAL_MAGNET | 21,355,857 |

### Faza 4: Probki Pelnego DNA (Wszystkie 53 Metryki)

#### POZIOM 1: NAJLEPSZE SLUPKI FIZYCZNE MICRO (TOP 5)
<details><summary><b>Sikorskiego katedra 04 (ID: 58 | H3: 891e286ce2fffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Sikorskiego katedra 04
  stop_id                 : 58
  h3_index                : 891e286ce2fffff
  hub_id                  : 1368
  hub_name                : Sikorskiego katedra 04
  is_hub_anchor           : True
  stop_lat                : 50.0138
  stop_lon                : 22.0171

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.9807
  stop_local_score_raw    : 1.6632

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 6012592.3742
  stop_raw_gravity        : 1999112.1199
  stop_entropy            : 2.0076

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 52.8571
  stop_routes_count       : 72
  stop_routes             : 2, 5, 8, 18, 19, 37, 44, 58, 108, 200, 201, 202, 203, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 221, 222, 223, 224, 225, 227, 228, 230, 232, 233, 234, 236, 237, 238, 239, 240, 241, 246, 250, 251, 260, 261, 262, 263, 288, 301, 302, 305, 307, 308, 309, 310, 311, 312, 313, 314, 317, 400, 401, 402, 403, 406, 602, 610
  stop_hub_share          : 0.9906

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 9503.0271
  stop_liquidity          : 160

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 458.0119

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 3x convenience_store
  > 2x education_preschool
  > 1x micro_parcel_locker
  > 1x personal_services
  > 1x place_of_worship
  > 1x micro_playground
  > 1x park_recreation
  > 1x specialized_retail

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store        : Żabka
    - education_preschool      : Złobek \
    - education_preschool      : Niepubliczna Placówka Oświatowo-Wychowawcza Emotikon w Rzeszowie
    - micro_parcel_locker      : Paczkomat InPost
    - personal_services        : Odnowa
    - convenience_store        : Śnieżynka
    - place_of_worship         : Katedra pw. Najświętszego Serca Pana Jezusa
    - park_recreation          : Park Papieski
    - specialized_retail       : Agata
    - convenience_store        : Śnieżynka
```
</details>
<details><summary><b>Rzeszów D.A. 10 (ID: 58 | H3: 891e286ccd3ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Rzeszów D.A. 10
  stop_id                 : 58
  h3_index                : 891e286ccd3ffff
  hub_id                  : 581
  hub_name                : Rzeszów D.A. 10
  is_hub_anchor           : True
  stop_lat                : 50.0421
  stop_lon                : 22.0031

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.9807
  stop_local_score_raw    : 1.6632

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 6012592.3742
  stop_raw_gravity        : 1999112.1199
  stop_entropy            : 2.0076

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 52.8571
  stop_routes_count       : 72
  stop_routes             : 2, 5, 8, 18, 19, 37, 44, 58, 108, 200, 201, 202, 203, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 221, 222, 223, 224, 225, 227, 228, 230, 232, 233, 234, 236, 237, 238, 239, 240, 241, 246, 250, 251, 260, 261, 262, 263, 288, 301, 302, 305, 307, 308, 309, 310, 311, 312, 313, 314, 317, 400, 401, 402, 403, 406, 602, 610
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 9503.0271
  stop_liquidity          : 160

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 458.0119

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 62x gastronomy
  > 50x park_recreation
  > 31x personal_services
  > 26x specialized_retail
  > 23x commercial_zone
  > 20x convenience_store
  > 16x government_central
  > 12x micro_atm
  > 11x pharmacy
  > 11x bank
  > 10x micro_playground
  > 10x university_campus
  > 9x health_clinic
  > 9x micro_parcel_locker
  > 7x education_high_school
  > 5x supermarket
  > 5x culture_theatre
  > 5x shopping_mall
  > 4x post_office
  > 3x business_office
  > 3x place_of_worship
  > 3x education_preschool
  > 1x national_rail_hub
  > 1x industrial_zone
  > 1x sports_centre

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm                : PKO BP
    - gastronomy               : Dara Fit
    - micro_atm                : Euronet
    - government_central       : Urząd Komunikacji Elektronicznej
    - gastronomy               : Kogucik
    - supermarket              : Biedronka
    - government_central       : Powiatowy Inspektorat Nadzoru Budowlanego
    - supermarket              : FRAC
    - pharmacy                 : Dr. Max
    - specialized_retail       : Atelier
```
</details>
<details><summary><b>Podkarpacka / Matuszczaka 03 (ID: 50 | H3: 891e286c33bffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Podkarpacka / Matuszczaka 03
  stop_id                 : 50
  h3_index                : 891e286c33bffff
  hub_id                  : 639
  hub_name                : Podkarpacka / Matuszczaka 03
  is_hub_anchor           : True
  stop_lat                : 50.0168
  stop_lon                : 21.9754

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.9037
  stop_local_score_raw    : 1.6516

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 11764664.6021
  stop_raw_gravity        : 4896044.3021
  stop_entropy            : 1.4029

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 49.0714
  stop_routes_count       : 39
  stop_routes             : 1, 4, 6, 10, 11, 13, 15, 16, 17, 19, 20, 22, 27, 31, 35, 37, 39, 41, 42, 45, 46, 47, 51, 52, 54, 57, 59, 108, 203, 208, 209, 210, 219, 223, 228, 233, 251, 288, 0B
  stop_hub_share          : 1.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 9373.3262
  stop_liquidity          : 283

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 399.7816

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 8x industrial_zone
  > 7x micro_playground
  > 6x supermarket
  > 6x commercial_zone
  > 5x education_preschool
  > 5x gastronomy
  > 5x personal_services
  > 4x convenience_store
  > 4x park_recreation
  > 3x education_high_school
  > 2x micro_parcel_locker
  > 2x health_clinic
  > 1x pharmacy
  > 1x micro_atm
  > 1x shopping_mall
  > 1x university_campus
  > 1x car_services
  > 1x sports_centre
  > 1x specialized_retail
  > 1x post_office

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store        : Żabka
    - supermarket              : MarketVita
    - convenience_store        : Żabka
    - pharmacy                 : APTEKA NA ARCHITEKTÓW
    - micro_atm                : Euronet
    - supermarket              : Stokrotka
    - education_preschool      : Fair Play
    - education_preschool      : Król Maciuś
    - shopping_mall            : Morele.net - Punkt odbioru (netpunkt)
    - convenience_store        : Żabka
```
</details>
<details><summary><b>Piłsudskiego U. Wojewódzki 05 (ID: 50 | H3: 891e286c1a7ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Piłsudskiego U. Wojewódzki 05
  stop_id                 : 50
  h3_index                : 891e286c1a7ffff
  hub_id                  : 1094
  hub_name                : Piłsudskiego U. Wojewódzki 05
  is_hub_anchor           : True
  stop_lat                : 50.0407
  stop_lon                : 22.0009

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.9037
  stop_local_score_raw    : 1.6516

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 11764664.6021
  stop_raw_gravity        : 4896044.3021
  stop_entropy            : 1.4029

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 49.0714
  stop_routes_count       : 39
  stop_routes             : 1, 4, 6, 10, 11, 13, 15, 16, 17, 19, 20, 22, 27, 31, 35, 37, 39, 41, 42, 45, 46, 47, 51, 52, 54, 57, 59, 108, 203, 208, 209, 210, 219, 223, 228, 233, 251, 288, 0B
  stop_hub_share          : 0.6433

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 9373.3262
  stop_liquidity          : 283

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 399.7816

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 96x gastronomy
  > 49x park_recreation
  > 31x personal_services
  > 29x commercial_zone
  > 26x specialized_retail
  > 16x bank
  > 15x government_central
  > 13x micro_atm
  > 12x convenience_store
  > 11x education_high_school
  > 11x health_clinic
  > 11x micro_parcel_locker
  > 7x pharmacy
  > 7x university_campus
  > 6x supermarket
  > 6x shopping_mall
  > 5x culture_theatre
  > 5x post_office
  > 5x micro_playground
  > 2x business_office
  > 2x education_preschool
  > 2x place_of_worship
  > 1x national_rail_hub
  > 1x sports_centre
  > 1x marketplace

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm                : PKO BP
    - gastronomy               : Dara Fit
    - micro_atm                : Euronet
    - government_central       : Urząd Komunikacji Elektronicznej
    - gastronomy               : Kogucik
    - supermarket              : Biedronka
    - education_high_school    : Technikum Nr 1
    - education_high_school    : VI Liceum Ogólnokształcące
    - supermarket              : FRAC
    - specialized_retail       : Atelier
```
</details>
<details><summary><b>Powst. Warszawy szkoła 11 (ID: 182 | H3: 891e286ce07ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Powst. Warszawy szkoła 11
  stop_id                 : 182
  h3_index                : 891e286ce07ffff
  hub_id                  : 1305
  hub_name                : Powst. Warszawy szkoła 11
  is_hub_anchor           : True
  stop_lat                : 50.0188
  stop_lon                : 22.0088

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.8267
  stop_local_score_raw    : 1.5612

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 6615305.4889
  stop_raw_gravity        : 2110522.1687
  stop_entropy            : 2.1344

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 22.6429
  stop_routes_count       : 16
  stop_routes             : 5, 6, 8, 13, 18, 29, 34, 36, 37, 43, 49, 58, 219, 223, 253, 0B
  stop_hub_share          : 1.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 10185.8925
  stop_liquidity          : 467

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 1513.6159

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 9x micro_playground
  > 7x education_preschool
  > 6x convenience_store
  > 5x supermarket
  > 5x pharmacy
  > 4x gastronomy
  > 4x personal_services
  > 4x micro_parcel_locker
  > 3x education_high_school
  > 2x micro_atm
  > 2x post_office
  > 2x specialized_retail
  > 2x commercial_zone
  > 2x park_recreation
  > 1x car_services
  > 1x sports_centre
  > 1x health_clinic
  > 1x business_office
  > 1x shopping_mall
  > 1x university_campus

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - supermarket              : Biedronka
    - micro_atm                : Euronet
    - supermarket              : Delikatesy Hitpol
    - post_office              : Poczta Podwisłocze
    - pharmacy                 : Apteka Panacea
    - post_office              : Urząd Pocztowy Rzeszów 14
    - car_services             : BP Tulipan
    - gastronomy               : Zajazd Polonez
    - convenience_store        : Żabka
    - convenience_store        : Żabka
```
</details>

#### POZIOM 1: NAJSLABSZE SLUPKI FIZYCZNE MICRO (BOTTOM 5)
<details><summary><b>Hyżne Nieborów Wygon 03 (ID: 1577 | H3: 891e2bd6b4fffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Hyżne Nieborów Wygon 03
  stop_id                 : 1577
  h3_index                : 891e2bd6b4fffff
  hub_id                  : 531
  hub_name                : Hyżne Nieborów Wygon 03
  is_hub_anchor           : True
  stop_lat                : 49.9193
  stop_lon                : 22.1440

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.1926
  stop_local_score_raw    : -2.0201

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0714
  stop_routes_count       : 1
  stop_routes             : 241
  stop_hub_share          : 0.5000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 7964.9363
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 14.0048

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Hyżne Nieborów Wygon 04 (ID: 1578 | H3: 891e2bd6b43ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Hyżne Nieborów Wygon 04
  stop_id                 : 1578
  h3_index                : 891e2bd6b43ffff
  hub_id                  : 531
  hub_name                : Hyżne Nieborów Wygon 03
  is_hub_anchor           : False
  stop_lat                : 49.9196
  stop_lon                : 22.1439

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.1541
  stop_local_score_raw    : -2.0452

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0714
  stop_routes_count       : 1
  stop_routes             : 241
  stop_hub_share          : 0.5000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 7964.9363
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 11.8946

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Wólka Sokołowska las 44 (ID: 992 | H3: 891e282955bffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Wólka Sokołowska las 44
  stop_id                 : 992
  h3_index                : 891e282955bffff
  hub_id                  : 1166
  hub_name                : Wólka Sokołowska las 44
  is_hub_anchor           : True
  stop_lat                : 50.2617
  stop_lon                : 22.1394

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.1156
  stop_local_score_raw    : -2.2100

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.9286
  stop_routes_count       : 1
  stop_routes             : 215
  stop_hub_share          : 1.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 7964.9363
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Krzemienica działki 03 (ID: 1354 | H3: 891e2b9a277ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Krzemienica działki 03
  stop_id                 : 1354
  h3_index                : 891e2b9a277ffff
  hub_id                  : 687
  hub_name                : Krzemienica działki 03
  is_hub_anchor           : True
  stop_lat                : 50.0654
  stop_lon                : 22.1640

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.0578
  stop_local_score_raw    : -2.3421

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.4286
  stop_routes_count       : 1
  stop_routes             : 401
  stop_hub_share          : 0.5000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 7964.9363
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Krzemienica działki 04 (ID: 1355 | H3: 891e2b9a277ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Krzemienica działki 04
  stop_id                 : 1355
  h3_index                : 891e2b9a277ffff
  hub_id                  : 687
  hub_name                : Krzemienica działki 03
  is_hub_anchor           : False
  stop_lat                : 50.0652
  stop_lon                : 22.1639

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.0578
  stop_local_score_raw    : -2.3421

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.4286
  stop_routes_count       : 1
  stop_routes             : 401
  stop_hub_share          : 0.5000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 7964.9363
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>

#### POZIOM 2: NAJWAZNIEJSZE WEZLY LOGICZNE MACRO (TOP 5 HUBOW)
<details><summary><b>HUB: Piłsudskiego U. Wojewódzki 05 (ID: 1094 | H3: 891e286c1a7ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Piłsudskiego U. Wojewódzki 05
  hub_id                  : 1094
  h3_index                : 891e286c1a7ffff
  hub_stops_count         : 2
  hub_stops_ids           : 50, 288
  lat                     : 50.0408
  lon                     : 22.0010

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 100.0000
  hub_local_score_raw     : 1.7097

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 30929432.8822
  hub_raw_gravity         : 13204944.5893
  hub_entropy             : 1.3423

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 76.2857
  hub_routes_count        : 41
  hub_routes              : 1, 4, 6, 10, 11, 13, 15, 16, 17, 19, 20, 22, 27, 31, 35, 37, 39, 41, 42, 45, 46, 47, 51, 52, 54, 57, 59, 108, 203, 208, 209, 210, 219, 223, 228, 233, 251, 253, 288, 0A, 0B

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 8689.0244
  hub_liquidity           : 91

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 615.2226
```
</details>
<details><summary><b>HUB: Lisa-Kuli 01 (ID: 35 | H3: 891e286c133ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Lisa-Kuli 01
  hub_id                  : 35
  h3_index                : 891e286c133ffff
  hub_stops_count         : 5
  hub_stops_ids           : 68, 69, 118, 186, 440
  lat                     : 50.0361
  lon                     : 21.9971

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.9277
  hub_local_score_raw     : 1.7034

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 31577095.6754
  hub_raw_gravity         : 12112762.9936
  hub_entropy             : 1.6069

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 71.0714
  hub_routes_count        : 34
  hub_routes              : 2, 3, 7, 8, 10, 11, 14, 15, 18, 23, 26, 28, 30, 34, 35, 36, 42, 45, 58, 59, 203, 208, 209, 211, 219, 223, 230, 233, 251, 253, 281, 288, 0A, 0B

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 8514.2261
  hub_liquidity           : 134

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 787.3125
```
</details>
<details><summary><b>HUB: Krakowska jedn. wojskowa 01 (ID: 0 | H3: 891e286c187ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Krakowska jedn. wojskowa 01
  hub_id                  : 0
  h3_index                : 891e286c187ffff
  hub_stops_count         : 2
  hub_stops_ids           : 16, 49
  lat                     : 50.0440
  lon                     : 21.9861

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.8555
  hub_local_score_raw     : 1.6953

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 17208034.7928
  hub_raw_gravity         : 6049252.4784
  hub_entropy             : 1.8447

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 56.0000
  hub_routes_count        : 25
  hub_routes              : 1, 2, 3, 6, 17, 19, 22, 27, 30, 33, 34, 36, 42, 47, 108, 203, 208, 209, 210, 219, 223, 228, 233, 251, 288

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 8426.3266
  hub_liquidity           : 205

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 1810.7700
```
</details>
<details><summary><b>HUB: Powst. Warszawy dom studenta 09 (ID: 150 | H3: 891e286ce03ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Powst. Warszawy dom studenta 09
  hub_id                  : 150
  h3_index                : 891e286ce03ffff
  hub_stops_count         : 3
  hub_stops_ids           : 74, 183, 408
  lat                     : 50.0194
  lon                     : 22.0046

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.7832
  hub_local_score_raw     : 1.6858

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 3554039.3495
  hub_raw_gravity         : 1507508.1047
  hub_entropy             : 1.3576

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 53.1429
  hub_routes_count        : 25
  hub_routes              : 5, 6, 8, 10, 12, 13, 18, 29, 31, 34, 36, 37, 40, 43, 49, 58, 108, 210, 218, 219, 223, 232, 253, 0A, 0B

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 10086.8559
  hub_liquidity           : 426

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 1161.2979
```
</details>
<details><summary><b>HUB: Cieplińskiego 02 (ID: 202 | H3: 891e286c1afffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Cieplińskiego 02
  hub_id                  : 202
  h3_index                : 891e286c1afffff
  hub_stops_count         : 4
  hub_stops_ids           : 117, 187, 206, 207
  lat                     : 50.0390
  lon                     : 21.9981

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.7110
  hub_local_score_raw     : 1.6566

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 16393157.9167
  hub_raw_gravity         : 6592743.8855
  hub_entropy             : 1.4865

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 74.9286
  hub_routes_count        : 32
  hub_routes              : 2, 3, 7, 8, 10, 11, 14, 15, 18, 23, 26, 28, 30, 34, 35, 36, 42, 45, 58, 59, 108, 203, 208, 209, 219, 223, 233, 251, 253, 288, 0A, 0B

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 8680.6351
  hub_liquidity           : 82

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 588.8247
```
</details>

---

## SUWALKI
#### DASHBOARD ASERCJI PIPELINE'U (Pelna Integralnosc Bazy)
```text
[PASS ZERO NULLS & INFS] Petla obliczeniowa wygenerowala 100% spojnych komorek.
[STATS] [PASS] Z-Score Micro VALID (Mean: -0.000, Std: 0.710)
        Rozklad Rang Slupkow (Micro): A: 33, A+: 17, B: 50, C: 67, D: 83, F: 83
[STATS] [PASS] Z-Score Macro VALID (Mean: -0.000, Std: 0.706)
        Rozklad Rang Hubow (Macro): A: 22, A+: 12, B: 33, C: 45, D: 55, F: 55
[DEMOGRAPHY] [PASS] DEMOGRAFIA W NORMIE: +6.3% (GUS strefa: 74,387 vs Baza miejska: 70,000)
[PASS] POI Parquet 100% Valid (Matematyka Huffa dziala)
[PASS] POP Parquet 100% Valid
[PASS] H3 Res 8 Grid 100% Valid (285 komorek, 14 pustyn transportowych)
```

### Faza 0: Statystyki Ogolne i Balans Sieci
- **Slupki Fizyczne (Micro):** 333 slupkow
- **Wezly Logiczne (Macro Hubs):** 222 hubow (Wskaznik konsolidacji: 1.50 slupka/hub)
- **Populacja Strefy Transportowej (GUS 250m):** 74,387 mieszkancow
- **Transakcje Notarialne RCN:** 1,306 aktow
### Faza 1: Siatka Analityczna Uber H3 Res 8 (0.74 km2 / komorka)
- **Liczba Komorek H3 Res 8:** 285
- **Rynek Nieruchomosci RCN w Heksach:** Pokrycie 25.6% (73/285 komorek), Srednia: 4,905 PLN/m2, Mediana: 3,993 PLN/m2, Std: 3,598, Min: 319, Max: 17,831 PLN/m2
- **Demografia GUS NSP 2021 w Heksach:** Laczna ludnosc w heksach: 74,387, Srednia/heks: 261.0, Mediana: 14.0, Std: 969.4, Max: 7,094
- **Podaz Transportu w Heksach:** Sredni Transport Score: 8.04, Max Transport Score: 100.00, Srednia odjazdow/h: 3.61, Pustynie Transportowe TDI: 14

#### TOP 5 Pustyn Transportowych (The Investment List)
| H3 Index | Lat | Lon | Populacja GUS | Odjazdy/h | TDI Score |
|---|---|---|---|---|---|
| `881f42dadbfffff` | 54.11081 | 22.91281 | 315 | 0.0 | **60.39** |
| `881f42c145fffff` | 54.03261 | 22.96026 | 311 | 0.0 | **60.26** |
| `881f42dad5fffff` | 54.10156 | 22.89102 | 242 | 0.0 | **57.63** |
| `881f42da95fffff` | 54.08433 | 22.90835 | 229 | 0.0 | **57.06** |
| `881f42da87fffff` | 54.08236 | 22.88443 | 171 | 0.0 | **54.01** |

#### TOP 5 Biegunow Transportu (Najwyzsza Podaz)
| H3 Index | Lat | Lon | Transport Score | Odjazdy/h | Liczba Slupkow |
|---|---|---|---|---|---|
| `881f42d1ebfffff` | 54.12734 | 22.93246 | **100.00** | 54.6 | 9 |
| `881f42d1a1fffff` | 54.10549 | 22.93888 | **100.00** | 72.4 | 10 |
| `881f42d18dfffff` | 54.12468 | 22.94550 | **100.00** | 104.6 | 14 |
| `881f42d1e1fffff` | 54.12272 | 22.92156 | **100.00** | 69.1 | 10 |
| `881f42d1a5fffff` | 54.10087 | 22.92799 | **100.00** | 84.9 | 13 |

#### TOP 5 Najdrozszych Heksow Mieszkaniowych RCN
| H3 Index | Lat | Lon | Mediana Ceny m2 | Liczba Transakcji |
|---|---|---|---|---|
| `881f0d56c1fffff` | 54.65981 | 17.04012 | **17,831 PLN** | 1 |
| `881f425359fffff` | 53.85801 | 22.97455 | **15,437 PLN** | 58 |
| `881f425211fffff` | 53.86583 | 23.06992 | **14,925 PLN** | 1 |
| `881f0d56cbfffff` | 54.66489 | 17.05059 | **14,068 PLN** | 2 |
| `881f42504dfffff` | 53.83534 | 23.01774 | **12,238 PLN** | 1 |

### Faza 2: Audyt Zbednosci TCRP Report 100 (The Axe List)
- **Zbedne Slupki (R >= 0.50 - Umiarkowana Kanibalizacja):** 110
- **Zbedne Slupki (R >= 0.70 - Rekomendacja Likwidacji):** 86
- **Zbedne Slupki (R >= 0.90 - Skrajna Zbednosc / Dubel):** 44

| Zbedny Słupek | Dominujacy Słupek | Dystans [m] | S_service | S_spatial | S_cannibal | R-Score |
|---|---|---|---|---|---|---|
| Sikorskiego / Rondo (06) (#512, 0.2857142857142857 odj/h) | Sikorskiego / Rondo (06) (#441, 1.0 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |
| Kościuszki / Zespół Szkół Nr 2 (02) (#487, 0.21428571428571427 odj/h) | Kościuszki / Zespół Szkół Nr 2 (02) (#85, 3.7857142857142856 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |
| Zielone Królewskie 04L (#344, 0.14285714285714285 odj/h) | Zielone Królewskie 04P (#336, 0.14285714285714285 odj/h) | 1.3m | 1.00 | 1.00 | 1.00 | **0.9972** |
| Zielone Królewskie 04P (#336, 0.14285714285714285 odj/h) | Zielone Królewskie 04L (#344, 0.14285714285714285 odj/h) | 1.3m | 1.00 | 1.00 | 1.00 | **0.9972** |
| Sobolewo 04L / P (#159, 0.14285714285714285 odj/h) | Sobolewo 04L / P. (#320, 0.2857142857142857 odj/h) | 1.7m | 1.00 | 1.00 | 1.00 | **0.9962** |

### Faza 3: Hierarchia Magnesow Miejskich POI

#### Top 20 Kategorii POI w Miescie
| Kategoria | Tier | Ilosc w Miescie | Wartosc Punktowa (W) |
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

#### TOP 10 Konkretnych Nazwanych Magnesow Miejskich (T0, T1, T2)
| Nazwa Obiektu | Kategoria POI | Tier | Waga Przyciagania (W) |
|---|---|---|---|
| **Szpital Wojewódzki im. dr. Ludwika Rydygiera w Suwałkach** | `hospital_clinical` | T1_NATIONAL_MAGNET | 21,788,885 |
| **Stadion lekkoatletyczny** | `national_stadium` | T1_NATIONAL_MAGNET | 19,341,933 |
| **Stadion Miejski w Suwałkach** | `national_stadium` | T1_NATIONAL_MAGNET | 19,341,933 |
| **Państwowa Wyższa Szkoła Zawodowa im. prof. Edwarda F. Szczepanika w Suwałkach** | `university_campus` | T1_NATIONAL_MAGNET | 18,611,333 |
| **Suwałki Arena** | `national_stadium` | T1_NATIONAL_MAGNET | 16,838,131 |
| **Suwałki** | `regional_rail_hub` | T1_NATIONAL_MAGNET | 5,772,291 |
| **Płociczno Tartak** | `regional_rail_hub` | T1_NATIONAL_MAGNET | 5,772,291 |
| **Przedsiębiorstwo Gospodarki Komunalnej w Suwałkach** | `commercial_zone` | T2_STRATEGIC_HUB | 4,447,805 |
| **Wojewódzki Ośrodek Ruchu Drogowego** | `commercial_zone` | T2_STRATEGIC_HUB | 4,447,805 |
| **Suwalska Specjalna Strefa Ekonomiczna** | `industrial_zone` | T2_STRATEGIC_HUB | 4,425,489 |

### Faza 4: Probki Pelnego DNA (Wszystkie 53 Metryki)

#### POZIOM 1: NAJLEPSZE SLUPKI FIZYCZNE MICRO (TOP 5)
<details><summary><b>Reja / Lidl (05) (ID: 15 | H3: 891f42d1e07ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Reja / Lidl (05)
  stop_id                 : 15
  h3_index                : 891f42d1e07ffff
  hub_id                  : 172
  hub_name                : Reja / Lidl (05)
  is_hub_anchor           : True
  stop_lat                : 54.1229
  stop_lon                : 22.9294

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 100.0000
  stop_local_score_raw    : 1.4301

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 5069456.8393
  stop_raw_gravity        : 2063019.0689
  stop_entropy            : 1.4573

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 9.5000
  stop_routes_count       : 13
  stop_routes             : 2, 5, 6, 7, 11, 14, 15, 16, 17, 19, 20, 21, 24
  stop_hub_share          : 1.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 6067.0292
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 1024.3046

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 25x micro_playground
  > 6x micro_parcel_locker
  > 4x education_high_school
  > 4x pharmacy
  > 3x convenience_store
  > 3x health_clinic
  > 3x supermarket
  > 3x park_recreation
  > 2x personal_services
  > 2x place_of_worship
  > 2x shopping_mall
  > 1x specialized_retail
  > 1x education_preschool
  > 1x gastronomy
  > 1x hospital_clinical
  > 1x national_stadium

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - education_high_school    : Szkoła Podstawowa nr 7
    - convenience_store        : ABC
    - health_clinic            : Prywatna przychodnia
    - health_clinic            : Klinika Implantologiczna
    - convenience_store        : Groszek
    - specialized_retail       : Dealz
    - personal_services        : Hebe
    - micro_parcel_locker      : Paczkomat InPost
    - micro_parcel_locker      : Paczkomat InPost
    - micro_parcel_locker      : Paczkomat InPost
```
</details>
<details><summary><b>Pułaskiego / Biedronka (06) (ID: 309 | H3: 891f42d1e27ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Pułaskiego / Biedronka (06)
  stop_id                 : 309
  h3_index                : 891f42d1e27ffff
  hub_id                  : 133
  hub_name                : Pułaskiego / Biedronka (06)
  is_hub_anchor           : True
  stop_lat                : 54.1213
  stop_lon                : 22.9407

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.6997
  stop_local_score_raw    : 1.4132

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 1516447.7786
  stop_raw_gravity        : 728633.5985
  stop_entropy            : 1.0812

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 10.6429
  stop_routes_count       : 15
  stop_routes             : 2, 4, 5, 6, 7, 10, 14, 15, 16, 17, 18, 19, 20, 21, 24
  stop_hub_share          : 1.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 6067.0292
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 1086.7080

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 22x micro_playground
  > 4x education_high_school
  > 4x pharmacy
  > 4x micro_parcel_locker
  > 3x health_clinic
  > 3x supermarket
  > 2x micro_atm
  > 2x gastronomy
  > 2x education_preschool
  > 2x car_services
  > 1x personal_services
  > 1x government_central
  > 1x national_stadium
  > 1x post_office
  > 1x park_recreation

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm                : Bankomat BZ WBK
    - micro_atm                : Bankomat Cash4You
    - education_high_school    : Szkoła Podstawowa nr 7
    - pharmacy                 : Cefarm
    - health_clinic            : Klinika Implantologiczna
    - micro_parcel_locker      : Paczkomat InPost
    - pharmacy                 : Dbam o Zdrowie (Doz)
    - gastronomy               : Bar Koko
    - micro_parcel_locker      : Paczkomat InPost
    - pharmacy                 : Apteka (Samczuk i wspólnicy)
```
</details>
<details><summary><b>Pułaskiego / Taxi (05) (ID: 52 | H3: 891f42d1e27ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Pułaskiego / Taxi (05)
  stop_id                 : 52
  h3_index                : 891f42d1e27ffff
  hub_id                  : 20
  hub_name                : Pułaskiego / Taxi (05)
  is_hub_anchor           : True
  stop_lat                : 54.1196
  stop_lon                : 22.9385

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.3994
  stop_local_score_raw    : 1.3536

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 1801714.0174
  stop_raw_gravity        : 598896.7305
  stop_entropy            : 2.0084

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 9.4286
  stop_routes_count       : 13
  stop_routes             : 4, 6, 7, 10, 14, 15, 16, 17, 18, 19, 20, 21, 24
  stop_hub_share          : 0.7543

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 6067.0292
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 975.5081

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 16x micro_playground
  > 6x government_central
  > 5x pharmacy
  > 4x health_clinic
  > 3x micro_parcel_locker
  > 3x gastronomy
  > 2x specialized_retail
  > 2x education_preschool
  > 2x education_high_school
  > 2x supermarket
  > 2x park_recreation
  > 1x micro_atm
  > 1x police_station
  > 1x post_office
  > 1x place_of_worship
  > 1x car_services
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm                : Bankomat Cash4You
    - specialized_retail       : JYSK
    - specialized_retail       : Media Expert
    - pharmacy                 : Cefarm
    - health_clinic            : Prywatna przychodnia
    - health_clinic            : Klinika Implantologiczna
    - government_central       : Prokuratura Okręgowa w Suwałkach
    - micro_parcel_locker      : Paczkomat InPost
    - gastronomy               : Bar Koko
    - pharmacy                 : Apteka (Samczuk i wspólnicy)
```
</details>
<details><summary><b>Kowalskiego / MERK (01) (ID: 304 | H3: 891f42d18dbffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Kowalskiego / MERK (01)
  stop_id                 : 304
  h3_index                : 891f42d18dbffff
  hub_id                  : 185
  hub_name                : Kowalskiego / MERK (01)
  is_hub_anchor           : True
  stop_lat                : 54.1260
  stop_lon                : 22.9395

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.0991
  stop_local_score_raw    : 1.3508

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 2326051.3989
  stop_raw_gravity        : 1068990.5375
  stop_entropy            : 1.1759

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 9.5714
  stop_routes_count       : 13
  stop_routes             : 2, 5, 6, 7, 11, 14, 15, 16, 17, 18, 19, 20, 21
  stop_hub_share          : 0.5255

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 6067.0292
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 731.6190

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
    - micro_atm                : Bankomat BZ WBK
    - education_high_school    : Szkoła Podstawowa nr 7
    - micro_parcel_locker      : Paczkomat InPost
    - car_services             : Auto-Szyby-Alarmy
    - health_clinic            : Klinika Implantologiczna
    - supermarket              : Biedronka
    - specialized_retail       : RTV Euro AGD
    - personal_services        : Rossmann
    - pharmacy                 : Dbam o Zdrowie (Doz)
    - specialized_retail       : Media Expert
```
</details>
<details><summary><b>Pułaskiego / Chopina (08) (ID: 458 | H3: 891f42d18cbffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Pułaskiego / Chopina (08)
  stop_id                 : 458
  h3_index                : 891f42d18cbffff
  hub_id                  : 61
  hub_name                : Pułaskiego / Chopina (08)
  is_hub_anchor           : True
  stop_lat                : 54.1234
  stop_lon                : 22.9429

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 98.7988
  stop_local_score_raw    : 1.3494

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 761022.1577
  stop_raw_gravity        : 301254.7947
  stop_entropy            : 1.5262

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 10.6429
  stop_routes_count       : 15
  stop_routes             : 2, 4, 5, 6, 7, 10, 14, 15, 16, 17, 18, 19, 20, 21, 24
  stop_hub_share          : 0.5418

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 6067.0292
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 894.7772

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
    - micro_atm                : Bankomat BZ WBK
    - education_high_school    : Szkoła Podstawowa nr 7
    - micro_parcel_locker      : Paczkomat InPost
    - car_services             : Auto-Szyby-Alarmy
    - pharmacy                 : Dbam o Zdrowie (Doz)
    - gastronomy               : Bar Koko
    - micro_parcel_locker      : Paczkomat InPost
    - pharmacy                 : Arnika
    - supermarket              : Lewiatan
    - micro_parcel_locker      : Appkomat InPost
```
</details>

#### POZIOM 1: NAJSLABSZE SLUPKI FIZYCZNE MICRO (BOTTOM 5)
<details><summary><b>Biała Woda / Skrzyżowanie 04 (ID: 488 | H3: 891f42d024fffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Biała Woda / Skrzyżowanie 04
  stop_id                 : 488
  h3_index                : 891f42d024fffff
  hub_id                  : 200
  hub_name                : Biała Woda / Skrzyżowanie 04
  is_hub_anchor           : True
  stop_lat                : 54.1501
  stop_lon                : 22.9159

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 1.5015
  stop_local_score_raw    : -1.2822

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.1429
  stop_routes_count       : 1
  stop_routes             : 5
  stop_hub_share          : 1.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 6067.0292
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 5.9383

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Pułaskiego / Osinki (14) (ID: 120 | H3: 891f42d1dd3ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Pułaskiego / Osinki (14)
  stop_id                 : 120
  h3_index                : 891f42d1dd3ffff
  hub_id                  : 217
  hub_name                : Pułaskiego / Osinki (14)
  is_hub_anchor           : True
  stop_lat                : 54.1427
  stop_lon                : 22.9622

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 1.2012
  stop_local_score_raw    : -1.2905

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.2143
  stop_routes_count       : 1
  stop_routes             : 10
  stop_hub_share          : 1.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 6067.0292
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 3.4576

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Wychodne / Trzciane 18 P (ID: 170 | H3: 891f42dae5bffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Wychodne / Trzciane 18 P
  stop_id                 : 170
  h3_index                : 891f42dae5bffff
  hub_id                  : 91
  hub_name                : Wychodne / Trzciane 18 P
  is_hub_anchor           : True
  stop_lat                : 54.0860
  stop_lon                : 22.8300

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.9009
  stop_local_score_raw    : -1.3152

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.2143
  stop_routes_count       : 1
  stop_routes             : 3
  stop_hub_share          : 1.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 6067.0292
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 2.4310

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Zielone Kamedulskie Os. (ID: 129 | H3: 891f42daab7ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Zielone Kamedulskie Os.
  stop_id                 : 129
  h3_index                : 891f42daab7ffff
  hub_id                  : 31
  hub_name                : Zielone Kamedulskie Os.
  is_hub_anchor           : True
  stop_lat                : 54.0812
  stop_lon                : 22.8758

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.6006
  stop_local_score_raw    : -1.3461

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.4286
  stop_routes_count       : 1
  stop_routes             : 3
  stop_hub_share          : 1.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 3993.0556
  stop_liquidity          : 9

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 293.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Plociczno 09 (ID: 147 | H3: 891f42c109bffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Plociczno 09
  stop_id                 : 147
  h3_index                : 891f42c109bffff
  hub_id                  : 29
  hub_name                : Plociczno 09
  is_hub_anchor           : True
  stop_lat                : 54.0270
  stop_lon                : 22.9795

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.3003
  stop_local_score_raw    : -1.3718

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 49199.7300
  stop_raw_gravity        : 49199.7300
  stop_entropy            : -0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.5000
  stop_routes_count       : 1
  stop_routes             : 4
  stop_hub_share          : 0.6364

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 2644.2308
  stop_liquidity          : 1

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 24.1781

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x gastronomy
  > 1x micro_parcel_locker

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_parcel_locker      : Appkomat InPost
```
</details>

#### POZIOM 2: NAJWAZNIEJSZE WEZLY LOGICZNE MACRO (TOP 5 HUBOW)
<details><summary><b>HUB: Kowalskiego / MERK (01) (ID: 185 | H3: 891f42d18dbffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Kowalskiego / MERK (01)
  hub_id                  : 185
  h3_index                : 891f42d18dbffff
  hub_stops_count         : 3
  hub_stops_ids           : 13, 41, 304
  lat                     : 54.1259
  lon                     : 22.9393

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 100.0000
  hub_local_score_raw     : 1.4370

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 3578273.4355
  hub_raw_gravity         : 1628230.0973
  hub_entropy             : 1.1976

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 18.2143
  hub_routes_count        : 14
  hub_routes              : 2, 5, 6, 7, 11, 14, 15, 16, 17, 18, 19, 20, 21, 27 P

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 6067.0292
  hub_liquidity           : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 1357.4597
```
</details>
<details><summary><b>HUB: Pułaskiego / Chopina (08) (ID: 61 | H3: 891f42d18cbffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Pułaskiego / Chopina (08)
  hub_id                  : 61
  h3_index                : 891f42d18cbffff
  hub_stops_count         : 2
  hub_stops_ids           : 9, 458
  lat                     : 54.1234
  lon                     : 22.9425

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.5495
  hub_local_score_raw     : 1.4061

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 1252053.5712
  hub_raw_gravity         : 482869.2767
  hub_entropy             : 1.5929

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 19.6429
  hub_routes_count        : 15
  hub_routes              : 2, 4, 5, 6, 7, 10, 14, 15, 16, 17, 18, 19, 20, 21, 24

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 6067.0292
  hub_liquidity           : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 1408.0436
```
</details>
<details><summary><b>HUB: Kowalskiego / Paca (04) (ID: 21 | H3: 891f42d1eafffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Kowalskiego / Paca (04)
  hub_id                  : 21
  h3_index                : 891f42d1eafffff
  hub_stops_count         : 2
  hub_stops_ids           : 14, 40
  lat                     : 54.1257
  lon                     : 22.9332

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.0991
  hub_local_score_raw     : 1.3497

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 864708.8584
  hub_raw_gravity         : 317852.2642
  hub_entropy             : 1.7205

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 18.1429
  hub_routes_count        : 14
  hub_routes              : 2, 5, 6, 7, 11, 14, 15, 16, 17, 18, 19, 20, 21, 27 P

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 6067.0292
  hub_liquidity           : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 1464.9806
```
</details>
<details><summary><b>HUB: Nowomiejska / Świerkowa (01) (ID: 41 | H3: 891f42d1a97ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Nowomiejska / Świerkowa (01)
  hub_id                  : 41
  h3_index                : 891f42d1a97ffff
  hub_stops_count         : 3
  hub_stops_ids           : 70, 379, 407
  lat                     : 54.1144
  lon                     : 22.9406

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 98.6486
  hub_local_score_raw     : 1.3312

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 2590403.7747
  hub_raw_gravity         : 1303350.2546
  hub_entropy             : 0.9875

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 15.2857
  hub_routes_count        : 12
  hub_routes              : 1, 2, 6, 7, 15, 16, 17, 18, 19, 20, 21, 24

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 6067.0292
  hub_liquidity           : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 1272.2275
```
</details>
<details><summary><b>HUB: Noniewicza / Stokrotka (05) (ID: 78 | H3: 891f42d1a1bffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Noniewicza / Stokrotka (05)
  hub_id                  : 78
  h3_index                : 891f42d1a1bffff
  hub_stops_count         : 2
  hub_stops_ids           : 3, 17
  lat                     : 54.1052
  lon                     : 22.9316

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 98.1982
  hub_local_score_raw     : 1.2998

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 3122817.0712
  hub_raw_gravity         : 1450611.5494
  hub_entropy             : 1.1528

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 15.0000
  hub_routes_count        : 14
  hub_routes              : 2, 3, 4, 5, 6, 7, 8, 10, 11, 14, 16, 18, 23, 24

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 6067.0292
  hub_liquidity           : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 867.2587
```
</details>

---

## SWINOUJSCIE
#### DASHBOARD ASERCJI PIPELINE'U (Pelna Integralnosc Bazy)
```text
[PASS ZERO NULLS & INFS] Petla obliczeniowa wygenerowala 100% spojnych komorek.
[STATS] [WARN] Z-Score Micro ODD (Mean: -0.000, Std: 0.472)
        Rozklad Rang Slupkow (Micro): A: 20, A+: 10, B: 29, C: 39, D: 48, F: 48
[STATS] [WARN] Z-Score Macro ODD (Mean: -0.000, Std: 0.480)
        Rozklad Rang Hubow (Macro): A: 12, A+: 6, B: 17, C: 24, D: 29, F: 28
[DEMOGRAPHY] [PASS] DEMOGRAFIA W NORMIE: +0.5% (GUS strefa: 40,200 vs Baza miejska: 40,000)
[PASS] POI Parquet 100% Valid (Matematyka Huffa dziala)
[PASS] POP Parquet 100% Valid
[PASS] H3 Res 8 Grid 100% Valid (193 komorek, 23 pustyn transportowych)
```

### Faza 0: Statystyki Ogolne i Balans Sieci
- **Slupki Fizyczne (Micro):** 194 slupkow
- **Wezly Logiczne (Macro Hubs):** 116 hubow (Wskaznik konsolidacji: 1.67 slupka/hub)
- **Populacja Strefy Transportowej (GUS 250m):** 40,200 mieszkancow
- **Transakcje Notarialne RCN:** 5,875 aktow
### Faza 1: Siatka Analityczna Uber H3 Res 8 (0.74 km2 / komorka)
- **Liczba Komorek H3 Res 8:** 193
- **Rynek Nieruchomosci RCN w Heksach:** Pokrycie 79.8% (154/193 komorek), Srednia: 6,795 PLN/m2, Mediana: 4,159 PLN/m2, Std: 6,680, Min: 16, Max: 31,940 PLN/m2
- **Demografia GUS NSP 2021 w Heksach:** Laczna ludnosc w heksach: 40,200, Srednia/heks: 208.3, Mediana: 0.0, Std: 973.1, Max: 9,161
- **Podaz Transportu w Heksach:** Sredni Transport Score: 9.84, Max Transport Score: 100.00, Srednia odjazdow/h: 0.00, Pustynie Transportowe TDI: 23

#### TOP 5 Pustyn Transportowych (The Investment List)
| H3 Index | Lat | Lon | Populacja GUS | Odjazdy/h | TDI Score |
|---|---|---|---|---|---|
| `881f0ec739fffff` | 53.91204 | 14.24266 | 9,161 | 0.0 | **95.72** |
| `881f0ec73bfffff` | 53.91033 | 14.25577 | 5,819 | 0.0 | **90.96** |
| `881f0ec73dfffff` | 53.90668 | 14.23262 | 5,658 | 0.0 | **90.66** |
| `881f0ec735fffff` | 53.89961 | 14.23569 | 3,766 | 0.0 | **86.39** |
| `881f0ec731fffff` | 53.90497 | 14.24573 | 3,750 | 0.0 | **86.35** |

#### TOP 5 Biegunow Transportu (Najwyzsza Podaz)
| H3 Index | Lat | Lon | Transport Score | Odjazdy/h | Liczba Slupkow |
|---|---|---|---|---|---|
| `881f0ec731fffff` | 53.90497 | 14.24573 | **100.00** | 0.0 | 11 |
| `881f0ec703fffff` | 53.91911 | 14.23959 | **100.00** | 0.0 | 10 |
| `881f0ec73bfffff` | 53.91033 | 14.25577 | **100.00** | 0.0 | 12 |
| `881f0ec735fffff` | 53.89961 | 14.23569 | **100.00** | 0.0 | 10 |
| `881f0ec73dfffff` | 53.90668 | 14.23262 | **100.00** | 0.0 | 11 |

#### TOP 5 Najdrozszych Heksow Mieszkaniowych RCN
| H3 Index | Lat | Lon | Mediana Ceny m2 | Liczba Transakcji |
|---|---|---|---|---|
| `881f0ec711fffff` | 53.92276 | 14.26275 | **31,940 PLN** | 140 |
| `881f0e1365fffff` | 53.92697 | 14.43417 | **31,209 PLN** | 909 |
| `881f0e1361fffff` | 53.93232 | 14.44424 | **30,197 PLN** | 195 |
| `881f0ec715fffff` | 53.91740 | 14.25270 | **24,600 PLN** | 233 |
| `881f0e8ce3fffff` | 54.03026 | 14.76131 | **23,275 PLN** | 18 |

### Faza 2: Audyt Zbednosci TCRP Report 100 (The Axe List)
- **Zbedne Slupki (R >= 0.50 - Umiarkowana Kanibalizacja):** 0
- **Zbedne Slupki (R >= 0.70 - Rekomendacja Likwidacji):** 0
- **Zbedne Slupki (R >= 0.90 - Skrajna Zbednosc / Dubel):** 0
- Brak slupkow spelniajacych prog likwidacji R >= 0.70.

### Faza 3: Hierarchia Magnesow Miejskich POI

#### Top 20 Kategorii POI w Miescie
| Kategoria | Tier | Ilosc w Miescie | Wartosc Punktowa (W) |
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

#### TOP 10 Konkretnych Nazwanych Magnesow Miejskich (T0, T1, T2)
| Nazwa Obiektu | Kategoria POI | Tier | Waga Przyciagania (W) |
|---|---|---|---|
| **Świnoujście Centrum** | `national_rail_hub` | T0_MEGA_HUB | 27,385,370 |
| **Świnoujście** | `national_rail_hub` | T0_MEGA_HUB | 27,385,370 |
| **Szpital Miejski im. Jana Garduły w Świnoujściu** | `hospital_clinical` | T1_NATIONAL_MAGNET | 17,435,993 |
| **przystań morska w Świnoujściu-Karsiborze** | `industrial_zone` | T2_STRATEGIC_HUB | 4,009,197 |
| **Terminal LNG w Świnoujściu** | `industrial_zone` | T2_STRATEGIC_HUB | 4,009,197 |
| **Schronisko dla bezdomnych zwierząt w Świnoujściu** | `commercial_zone` | T2_STRATEGIC_HUB | 3,394,042 |
| **CH Uznam** | `shopping_mall` | T2_STRATEGIC_HUB | 3,059,627 |
| **Galeria Promenada** | `shopping_mall` | T2_STRATEGIC_HUB | 3,059,627 |
| **Pasaż Handlowy Centrum** | `shopping_mall` | T2_STRATEGIC_HUB | 3,059,627 |
| **Galeria Corso** | `shopping_mall` | T2_STRATEGIC_HUB | 3,059,627 |

### Faza 4: Probki Pelnego DNA (Wszystkie 53 Metryki)

#### POZIOM 1: NAJLEPSZE SLUPKI FIZYCZNE MICRO (TOP 5)
<details><summary><b>Wieża widokowa (ID: 114 | H3: 891f0ec714bffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Wieża widokowa
  stop_id                 : 114
  h3_index                : 891f0ec714bffff
  hub_id                  : 11
  hub_name                : Wieża widokowa
  is_hub_anchor           : True
  stop_lat                : 53.9137
  stop_lon                : 14.2499

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 100.0000
  stop_local_score_raw    : 0.6249

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 3476505.2149
  stop_raw_gravity        : 1710067.3222
  stop_entropy            : 1.0330

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 16459.7262
  stop_liquidity          : 227

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 527.4083

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
    - gastronomy               : Kurna Chata
    - gastronomy               : Neptun
    - gastronomy               : Zefir
    - bank                     : PKO BP
    - micro_atm                : Bank Pekao
    - gastronomy               : Z kur czy byk
    - education_preschool      : Aktywne Przedszkole i Żłobek KOGUT
    - convenience_store        : Żabka
    - pharmacy                 : Morska
    - specialized_retail       : H&M
```
</details>
<details><summary><b>Uzdrowiskowa (ID: 175 | H3: 891f0ec7173ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Uzdrowiskowa
  stop_id                 : 175
  h3_index                : 891f0ec7173ffff
  hub_id                  : 15
  hub_name                : Uzdrowiskowa
  is_hub_anchor           : True
  stop_lat                : 53.9187
  stop_lon                : 14.2654

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.4845
  stop_local_score_raw    : 0.6106

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 2872154.2439
  stop_raw_gravity        : 1392593.1422
  stop_entropy            : 1.0625

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 22476.3333
  stop_liquidity          : 168

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 73.4184

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
    - convenience_store        : Odido
    - gastronomy               : Costa Bravs
    - gastronomy               : Tu Dostaniesz Wypieków
    - convenience_store        : Żabka
    - gastronomy               : Czuć miętą
    - gastronomy               : Berlin Döner Kebap
    - gastronomy               : Mila
    - gastronomy               : Baila
    - gastronomy               : Truskawkawa
    - gastronomy               : Promenada
```
</details>
<details><summary><b>Narutowicza (ID: 186 | H3: 891f0ec714bffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Narutowicza
  stop_id                 : 186
  h3_index                : 891f0ec714bffff
  hub_id                  : 53
  hub_name                : Narutowicza
  is_hub_anchor           : True
  stop_lat                : 53.9147
  stop_lon                : 14.2482

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 98.9691
  stop_local_score_raw    : 0.5539

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 1628695.9218
  stop_raw_gravity        : 661887.2872
  stop_entropy            : 1.4607

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 17616.3324
  stop_liquidity          : 243

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 330.9071

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
    - gastronomy               : Kurna Chata
    - gastronomy               : Zefir
    - bank                     : PKO BP
    - gastronomy               : Z kur czy byk
    - education_preschool      : Aktywne Przedszkole i Żłobek KOGUT
    - convenience_store        : Żabka
    - government_central       : Areszt Śledczy w Świnoujściu
    - gastronomy               : Cafe Wieża
    - personal_services        : Looksus
    - convenience_store        : Delikatesy Zbyszko
```
</details>
<details><summary><b>Szpital (ID: 206 | H3: 891f0ec73a3ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Szpital
  stop_id                 : 206
  h3_index                : 891f0ec73a3ffff
  hub_id                  : 43
  hub_name                : Szpital
  is_hub_anchor           : True
  stop_lat                : 53.9101
  stop_lon                : 14.2583

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 98.4536
  stop_local_score_raw    : 0.5232

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 5980736.8169
  stop_raw_gravity        : 4201908.8960
  stop_entropy            : 0.4233

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 12717.7700
  stop_liquidity          : 167

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 411.4993

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 10x gastronomy
  > 9x specialized_retail
  > 9x park_recreation
  > 5x personal_services
  > 4x bank
  > 4x convenience_store
  > 4x supermarket
  > 3x micro_atm
  > 2x place_of_worship
  > 2x health_clinic
  > 2x micro_playground
  > 1x education_preschool
  > 1x pharmacy
  > 1x government_central
  > 1x micro_parcel_locker
  > 1x business_office
  > 1x car_services
  > 1x shopping_mall
  > 1x industrial_zone
  > 1x hospital_clinical
  > 1x education_high_school

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - bank                     : Bank Spółdzielczy
    - gastronomy               : Da Grasso
    - micro_atm                : Bank Pekao
    - convenience_store        : Żabka
    - convenience_store        : Żabka
    - education_preschool      : Niepubliczne przedszkole TYGRYSEK
    - specialized_retail       : Top Secret
    - gastronomy               : Magiczna Spiżarnia
    - micro_atm                : Euronet
    - gastronomy               : Koku Sushi
```
</details>
<details><summary><b>Szpital (ID: 209 | H3: 891f0ec73a7ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Szpital
  stop_id                 : 209
  h3_index                : 891f0ec73a7ffff
  hub_id                  : 43
  hub_name                : Szpital
  is_hub_anchor           : False
  stop_lat                : 53.9102
  stop_lon                : 14.2589

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 97.9381
  stop_local_score_raw    : 0.5150

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 5225725.6781
  stop_raw_gravity        : 3763940.3542
  stop_entropy            : 0.3884

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 12989.9968
  stop_liquidity          : 157

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 377.7527

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
    - bank                     : Bank Spółdzielczy
    - gastronomy               : Da Grasso
    - micro_atm                : Bank Pekao
    - convenience_store        : Żabka
    - convenience_store        : Żabka
    - education_preschool      : Niepubliczne przedszkole TYGRYSEK
    - specialized_retail       : Top Secret
    - gastronomy               : Magiczna Spiżarnia
    - micro_atm                : Euronet
    - gastronomy               : Koku Sushi
```
</details>

#### POZIOM 1: NAJSLABSZE SLUPKI FIZYCZNE MICRO (BOTTOM 5)
<details><summary><b>Mostowa / Pomorska (ID: 88 | H3: 891f0ec516fffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Mostowa / Pomorska
  stop_id                 : 88
  h3_index                : 891f0ec516fffff
  hub_id                  : 80
  hub_name                : Mostowa / Pomorska
  is_hub_anchor           : False
  stop_lat                : 53.8631
  stop_lon                : 14.2883

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 2.5773
  stop_local_score_raw    : -1.3140

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 14111.9365
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Barlickiego - Cargo PKP (ID: 34 | H3: 891f0ec42b7ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Barlickiego - Cargo PKP
  stop_id                 : 34
  h3_index                : 891f0ec42b7ffff
  hub_id                  : 95
  hub_name                : Barlickiego - Cargo PKP
  is_hub_anchor           : False
  stop_lat                : 53.8983
  stop_lon                : 14.3155

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 2.5773
  stop_local_score_raw    : -1.3140

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 14111.9365
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Barlickiego - Cargo PKP (ID: 167 | H3: 891f0ec42b7ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Barlickiego - Cargo PKP
  stop_id                 : 167
  h3_index                : 891f0ec42b7ffff
  hub_id                  : 95
  hub_name                : Barlickiego - Cargo PKP
  is_hub_anchor           : True
  stop_lat                : 53.8984
  stop_lon                : 14.3156

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 2.5773
  stop_local_score_raw    : -1.3140

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 14111.9365
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Krzywa - Leśniczówka (ID: 51 | H3: 891f0ec5457ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Krzywa - Leśniczówka
  stop_id                 : 51
  h3_index                : 891f0ec5457ffff
  hub_id                  : 91
  hub_name                : Krzywa - Leśniczówka
  is_hub_anchor           : True
  stop_lat                : 53.8837
  stop_lon                : 14.2211

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 1.0309
  stop_local_score_raw    : -1.4891

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 6135.4826
  stop_liquidity          : 2

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 21.9684

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Krzywa - Leśniczówka (ID: 52 | H3: 891f0ec5457ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Krzywa - Leśniczówka
  stop_id                 : 52
  h3_index                : 891f0ec5457ffff
  hub_id                  : 91
  hub_name                : Krzywa - Leśniczówka
  is_hub_anchor           : False
  stop_lat                : 53.8839
  stop_lon                : 14.2215

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.5155
  stop_local_score_raw    : -1.4997

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 6135.4826
  stop_liquidity          : 2

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 19.0914

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>

#### POZIOM 2: NAJWAZNIEJSZE WEZLY LOGICZNE MACRO (TOP 5 HUBOW)
<details><summary><b>HUB: Wieża widokowa (ID: 11 | H3: 891f0ec714bffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Wieża widokowa
  hub_id                  : 11
  h3_index                : 891f0ec714bffff
  hub_stops_count         : 1
  hub_stops_ids           : 114
  lat                     : 53.9137
  lon                     : 14.2499

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 100.0000
  hub_local_score_raw     : 0.5665

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 4348486.0416
  hub_raw_gravity         : 2086244.3455
  hub_entropy             : 1.0844

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 0.0000
  hub_routes_count        : 0
  hub_routes              : 

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 16459.7262
  hub_liquidity           : 227

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 689.2559
```
</details>
<details><summary><b>HUB: Uzdrowiskowa (ID: 15 | H3: 891f0ec7173ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Uzdrowiskowa
  hub_id                  : 15
  h3_index                : 891f0ec7173ffff
  hub_stops_count         : 1
  hub_stops_ids           : 175
  lat                     : 53.9187
  lon                     : 14.2654

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.1379
  hub_local_score_raw     : 0.5181

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 2870542.4641
  hub_raw_gravity         : 1392726.9753
  hub_entropy             : 1.0611

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 0.0000
  hub_routes_count        : 0
  hub_routes              : 

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 22476.3333
  hub_liquidity           : 168

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 73.5071
```
</details>
<details><summary><b>HUB: Szpital (ID: 43 | H3: 891f0ec73a3ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Szpital
  hub_id                  : 43
  h3_index                : 891f0ec73a3ffff
  hub_stops_count         : 2
  hub_stops_ids           : 206, 209
  lat                     : 53.9102
  lon                     : 14.2586

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 98.2759
  hub_local_score_raw     : 0.5082

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 10289935.4336
  hub_raw_gravity         : 7317914.1435
  hub_entropy             : 0.4061

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 0.0000
  hub_routes_count        : 0
  hub_routes              : 

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 12717.7700
  hub_liquidity           : 167

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 669.2742
```
</details>
<details><summary><b>HUB: Narutowicza (ID: 53 | H3: 891f0ec714bffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Narutowicza
  hub_id                  : 53
  h3_index                : 891f0ec714bffff
  hub_stops_count         : 1
  hub_stops_ids           : 186
  lat                     : 53.9147
  lon                     : 14.2482

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 97.4138
  hub_local_score_raw     : 0.4996

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 2016306.6476
  hub_raw_gravity         : 810418.2875
  hub_entropy             : 1.4880

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 0.0000
  hub_routes_count        : 0
  hub_routes              : 

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 17616.3324
  hub_liquidity           : 243

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 433.8836
```
</details>
<details><summary><b>HUB: Chrobrego (ID: 86 | H3: 891f0ec73a3ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Chrobrego
  hub_id                  : 86
  h3_index                : 891f0ec73a3ffff
  hub_stops_count         : 2
  hub_stops_ids           : 27, 184
  lat                     : 53.9098
  lon                     : 14.2556

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 96.5517
  hub_local_score_raw     : 0.4903

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 8230200.4598
  hub_raw_gravity         : 4424384.5072
  hub_entropy             : 0.8602

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 0.0000
  hub_routes_count        : 0
  hub_routes              : 

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 12107.0911
  hub_liquidity           : 236

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 942.7117
```
</details>

---

## SZCZECIN
#### DASHBOARD ASERCJI PIPELINE'U (Pelna Integralnosc Bazy)
```text
[PASS ZERO NULLS & INFS] Petla obliczeniowa wygenerowala 100% spojnych komorek.
[STATS] [PASS] Z-Score Micro VALID (Mean: -0.000, Std: 0.660)
        Rozklad Rang Slupkow (Micro): A: 178, A+: 89, B: 266, C: 355, D: 444, F: 443
[STATS] [PASS] Z-Score Macro VALID (Mean: 0.000, Std: 0.689)
        Rozklad Rang Hubow (Macro): A: 92, A+: 47, B: 139, C: 185, D: 231, F: 231
[DEMOGRAPHY] [INFO] OBSZAR AGLOMERACYJNY: +27.6% (GUS strefa aglomeracyjna: 510,367 vs Miasto rdzen: 400,000)
[PASS] POI Parquet 100% Valid (Matematyka Huffa dziala)
[PASS] POP Parquet 100% Valid
[PASS] H3 Res 8 Grid 100% Valid (1,264 komorek, 106 pustyn transportowych)
```

### Faza 0: Statystyki Ogolne i Balans Sieci
- **Slupki Fizyczne (Micro):** 1,775 slupkow
- **Wezly Logiczne (Macro Hubs):** 925 hubow (Wskaznik konsolidacji: 1.92 slupka/hub)
- **Populacja Strefy Transportowej (GUS 250m):** 510,367 mieszkancow
- **Transakcje Notarialne RCN:** 45,297 aktow
### Faza 1: Siatka Analityczna Uber H3 Res 8 (0.74 km2 / komorka)
- **Liczba Komorek H3 Res 8:** 1,264
- **Rynek Nieruchomosci RCN w Heksach:** Pokrycie 67.8% (857/1264 komorek), Srednia: 4,507 PLN/m2, Mediana: 4,005 PLN/m2, Std: 6,506, Min: 9, Max: 177,891 PLN/m2
- **Demografia GUS NSP 2021 w Heksach:** Laczna ludnosc w heksach: 510,367, Srednia/heks: 403.8, Mediana: 6.0, Std: 1291.6, Max: 14,863
- **Podaz Transportu w Heksach:** Sredni Transport Score: 5.92, Max Transport Score: 100.00, Srednia odjazdow/h: 25.43, Pustynie Transportowe TDI: 106

#### TOP 5 Pustyn Transportowych (The Investment List)
| H3 Index | Lat | Lon | Populacja GUS | Odjazdy/h | TDI Score |
|---|---|---|---|---|---|
| `881f0e7083fffff` | 53.55958 | 14.82493 | 6,231 | 0.0 | **91.67** |
| `881f0e44a9fffff` | 53.53802 | 14.53890 | 5,254 | 0.0 | **89.89** |
| `881f0e709dfffff` | 53.56492 | 14.83498 | 3,101 | 0.0 | **84.35** |
| `881f0e708bfffff` | 53.56671 | 14.82193 | 3,097 | 0.0 | **84.34** |
| `881f0e7b6dfffff` | 53.46115 | 14.46092 | 2,612 | 0.0 | **82.55** |

#### TOP 5 Biegunow Transportu (Najwyzsza Podaz)
| H3 Index | Lat | Lon | Transport Score | Odjazdy/h | Liczba Slupkow |
|---|---|---|---|---|---|
| `881f0e4c93fffff` | 53.42371 | 14.48907 | **100.00** | 342.7 | 14 |
| `881f0e7b33fffff` | 53.44345 | 14.54209 | **100.00** | 1085.9 | 14 |
| `881f0e7b37fffff` | 53.43807 | 14.53209 | **100.00** | 282.4 | 15 |
| `881f0e7b29fffff` | 53.45050 | 14.49000 | **100.00** | 418.2 | 14 |
| `881f0e7b2bfffff` | 53.44874 | 14.50302 | **100.00** | 313.5 | 9 |

#### TOP 5 Najdrozszych Heksow Mieszkaniowych RCN
| H3 Index | Lat | Lon | Mediana Ceny m2 | Liczba Transakcji |
|---|---|---|---|---|
| `881f0e7b29fffff` | 53.45050 | 14.49000 | **177,891 PLN** | 205 |
| `881f0e70adfffff` | 53.54533 | 14.78172 | **21,542 PLN** | 2 |
| `881f0e6c1dfffff` | 53.35206 | 15.00967 | **15,812 PLN** | 1 |
| `881f0e7981fffff` | 53.39888 | 14.62226 | **13,444 PLN** | 143 |
| `881f1db655fffff` | 53.38614 | 14.46817 | **12,731 PLN** | 54 |

### Faza 2: Audyt Zbednosci TCRP Report 100 (The Axe List)
- **Zbedne Slupki (R >= 0.50 - Umiarkowana Kanibalizacja):** 631
- **Zbedne Slupki (R >= 0.70 - Rekomendacja Likwidacji):** 486
- **Zbedne Slupki (R >= 0.90 - Skrajna Zbednosc / Dubel):** 264

| Zbedny Słupek | Dominujacy Słupek | Dystans [m] | S_service | S_spatial | S_cannibal | R-Score |
|---|---|---|---|---|---|---|
| Wańkowicza nż 12 (#88012, 3.0 odj/h) | Wańkowicza nż 11 (#88011, 3.0 odj/h) | 2.0m | 1.00 | 1.00 | 1.00 | **0.9955** |
| Wańkowicza nż 11 (#88011, 3.0 odj/h) | Wańkowicza nż 12 (#88012, 3.0 odj/h) | 2.0m | 1.00 | 1.00 | 1.00 | **0.9955** |
| Maciejowicka nż 22 (#89022, 0.14285714285714285 odj/h) | Maciejowicka nż 21 (#89021, 0.14285714285714285 odj/h) | 2.8m | 1.00 | 1.00 | 0.99 | **0.9937** |
| Maciejowicka nż 21 (#89021, 0.14285714285714285 odj/h) | Maciejowicka nż 22 (#89022, 0.14285714285714285 odj/h) | 2.8m | 1.00 | 1.00 | 0.99 | **0.9937** |
| Gumieńce 12 (#20112, 0.8571428571428571 odj/h) | Gumieńce 11 (#20111, 17.428571428571427 odj/h) | 3.4m | 1.00 | 1.00 | 0.99 | **0.9923** |

### Faza 3: Hierarchia Magnesow Miejskich POI

#### Top 20 Kategorii POI w Miescie
| Kategoria | Tier | Ilosc w Miescie | Wartosc Punktowa (W) |
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

#### TOP 10 Konkretnych Nazwanych Magnesow Miejskich (T0, T1, T2)
| Nazwa Obiektu | Kategoria POI | Tier | Waga Przyciagania (W) |
|---|---|---|---|
| **Szczecin Główny** | `national_rail_hub` | T0_MEGA_HUB | 34,787,083 |
| **Goleniów** | `national_rail_hub` | T0_MEGA_HUB | 34,787,083 |
| **Szczecin Dąbie** | `national_rail_hub` | T0_MEGA_HUB | 34,787,083 |
| **Kliniska** | `national_rail_hub` | T0_MEGA_HUB | 34,787,083 |
| **Szczecin Port Centralny** | `national_rail_hub` | T0_MEGA_HUB | 34,787,083 |
| **Białuń** | `national_rail_hub` | T0_MEGA_HUB | 34,787,083 |
| **Uniwersytecki Szpital Kliniczny nr 1 Pomorskiego Uniwersytetu Medycznego** | `hospital_clinical` | T1_NATIONAL_MAGNET | 25,500,442 |
| **Samodzielny Publiczny Zakład Opieki Zdrowotnej MSWiA w Szczecinie** | `hospital_clinical` | T1_NATIONAL_MAGNET | 25,500,442 |
| **Szpitalne Centrum Medyczne w Goleniowie** | `hospital_clinical` | T1_NATIONAL_MAGNET | 25,500,442 |
| **Samodzielny Publiczny Wojewódzki Szpital Zespolony - Zdunowo** | `hospital_clinical` | T1_NATIONAL_MAGNET | 25,500,442 |

### Faza 4: Probki Pelnego DNA (Wszystkie 53 Metryki)

#### POZIOM 1: NAJLEPSZE SLUPKI FIZYCZNE MICRO (TOP 5)
<details><summary><b>Klonowica Zajezdnia 22 (ID: 32622 | H3: 891f0e7b2bbffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Klonowica Zajezdnia 22
  stop_id                 : 32622
  h3_index                : 891f0e7b2bbffff
  hub_id                  : 151
  hub_name                : Klonowica Zajezdnia 22
  is_hub_anchor           : True
  stop_lat                : 53.4495
  stop_lon                : 14.4964

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 100.0000
  stop_local_score_raw    : 1.2056

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 6971533.6266
  stop_raw_gravity        : 3621248.9114
  stop_entropy            : 0.9252

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 25.4286
  stop_routes_count       : 7
  stop_routes             : 53, 60, 75, 80, 222, 225, 227
  stop_hub_share          : 0.5394

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 8487.1632
  stop_liquidity          : 235

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 339.4321

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
    - pharmacy                 : Dbam o Zdrowie
    - post_office              : Filia Urzędu Pocztowego Szczecin 43
    - education_high_school    : Publiczna Katolicka Szkoła Podstawowa im. św. Stanisława Kostki
    - pharmacy                 : Gemini
    - micro_atm                : Bank Pekao
    - gastronomy               : Pizza Pasta i Basta
    - gastronomy               : Pod różami
    - government_central       : Instytut Pamięci Narodowej
    - government_central       : Zarząd Dróg i Transportu Miejskiego
    - business_office          : Tramwaje Szczecińskie
```
</details>
<details><summary><b>Plac Żołnierza Polskiego 12 (ID: 11312 | H3: 891f0e79507ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Plac Żołnierza Polskiego 12
  stop_id                 : 11312
  h3_index                : 891f0e79507ffff
  hub_id                  : 39
  hub_name                : Plac Żołnierza Polskiego 12
  is_hub_anchor           : True
  stop_lat                : 53.4292
  stop_lon                : 14.5534

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.9437
  stop_local_score_raw    : 1.1908

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 1814807.5325
  stop_raw_gravity        : 656387.5205
  stop_entropy            : 1.7648

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 44.6429
  stop_routes_count       : 5
  stop_routes             : 2, 3, 4, 8, 10
  stop_hub_share          : 0.6164

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 7401.0534
  stop_liquidity          : 698

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 281.2719

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 95x gastronomy
  > 80x specialized_retail
  > 30x personal_services
  > 25x bank
  > 21x convenience_store
  > 18x health_clinic
  > 15x government_central
  > 10x micro_atm
  > 10x pharmacy
  > 10x micro_parcel_locker
  > 9x micro_playground
  > 9x business_office
  > 6x supermarket
  > 6x place_of_worship
  > 5x education_high_school
  > 5x post_office
  > 5x education_preschool
  > 4x commercial_zone
  > 3x culture_theatre
  > 2x shopping_mall
  > 2x sports_centre
  > 2x car_services
  > 2x university_campus
  > 1x social_support_mops
  > 1x park_recreation

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy               : Turysta
    - gastronomy               : Ali Baba Kebab
    - gastronomy               : Mak Kwak
    - convenience_store        : Żabka
    - gastronomy               : Spiżarnia Szczecińska
    - gastronomy               : KFC
    - supermarket              : Netto
    - gastronomy               : El Tapatio
    - convenience_store        : Żabka
    - pharmacy                 : Apteka z Sercem
```
</details>
<details><summary><b>Plac Kościuszki 35 (ID: 10435 | H3: 891f0e79553ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Plac Kościuszki 35
  stop_id                 : 10435
  h3_index                : 891f0e79553ffff
  hub_id                  : 72
  hub_name                : Plac Kościuszki 35
  is_hub_anchor           : True
  stop_lat                : 53.4257
  stop_lon                : 14.5363

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.8873
  stop_local_score_raw    : 1.1827

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 1703620.3252
  stop_raw_gravity        : 931202.9680
  stop_entropy            : 0.8295

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 39.6429
  stop_routes_count       : 7
  stop_routes             : 61, 62, 90, 241, 242, 243, 811
  stop_hub_share          : 0.3020

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 7123.7281
  stop_liquidity          : 1078

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 555.4965

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 46x gastronomy
  > 38x specialized_retail
  > 33x personal_services
  > 15x convenience_store
  > 15x health_clinic
  > 12x park_recreation
  > 11x pharmacy
  > 11x bank
  > 7x education_high_school
  > 6x supermarket
  > 6x micro_atm
  > 6x micro_parcel_locker
  > 6x micro_playground
  > 4x shopping_mall
  > 3x post_office
  > 3x business_office
  > 2x university_campus
  > 1x culture_theatre
  > 1x sports_centre
  > 1x social_support_mops
  > 1x place_of_worship
  > 1x marketplace
  > 1x education_preschool

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - culture_theatre          : Helios
    - gastronomy               : Mak Kwak
    - gastronomy               : Prasad
    - gastronomy               : Green Way
    - convenience_store        : Żabka
    - pharmacy                 : Centrum
    - supermarket              : Carrefour
    - specialized_retail       : Reserved
    - gastronomy               : China Town
    - gastronomy               : Bar Rab
```
</details>
<details><summary><b>Pomorzany Dobrzyńska 11 (ID: 21911 | H3: 891f0e792a3ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Pomorzany Dobrzyńska 11
  stop_id                 : 21911
  h3_index                : 891f0e792a3ffff
  hub_id                  : 801
  hub_name                : Pomorzany Dobrzyńska 11
  is_hub_anchor           : True
  stop_lat                : 53.3984
  stop_lon                : 14.5244

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.8310
  stop_local_score_raw    : 1.1759

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 2956478.4935
  stop_raw_gravity        : 1772468.6433
  stop_entropy            : 0.6680

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 29.9286
  stop_routes_count       : 2
  stop_routes             : 53, 811
  stop_hub_share          : 1.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 7180.7128
  stop_liquidity          : 302

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 825.2886

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 9x convenience_store
  > 8x micro_playground
  > 4x gastronomy
  > 4x personal_services
  > 3x specialized_retail
  > 3x supermarket
  > 2x micro_parcel_locker
  > 2x park_recreation
  > 2x education_high_school
  > 1x post_office
  > 1x pharmacy
  > 1x business_office
  > 1x place_of_worship
  > 1x shopping_mall
  > 1x commercial_zone
  > 1x education_preschool
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy               : Huong Sen
    - post_office              : Filia Urzędu Pocztowego Szczecin 37
    - pharmacy                 : Pod Paprocią
    - convenience_store        : Sklepik Szogun
    - specialized_retail       : DiP
    - supermarket              : Mili
    - gastronomy               : Nefis
    - convenience_store        : Żabka
    - personal_services        : Finezja
    - convenience_store        : monopolowy
```
</details>
<details><summary><b>Zawadzkiego Kościół 12 (ID: 32112 | H3: 891f0e7b2b3ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Zawadzkiego Kościół 12
  stop_id                 : 32112
  h3_index                : 891f0e7b2b3ffff
  hub_id                  : 353
  hub_name                : Zawadzkiego Kościół 11
  is_hub_anchor           : False
  stop_lat                : 53.4511
  stop_lon                : 14.5007

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.7746
  stop_local_score_raw    : 1.1571

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 4949654.0789
  stop_raw_gravity        : 1732138.3504
  stop_entropy            : 1.8575

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 18.3571
  stop_routes_count       : 4
  stop_routes             : 53, 75, 80, 95
  stop_hub_share          : 0.4138

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 9247.0277
  stop_liquidity          : 313

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 703.0559

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 8x micro_playground
  > 7x gastronomy
  > 6x education_high_school
  > 6x health_clinic
  > 5x car_services
  > 3x government_central
  > 3x specialized_retail
  > 3x micro_parcel_locker
  > 3x park_recreation
  > 2x convenience_store
  > 2x pharmacy
  > 2x micro_atm
  > 2x business_office
  > 2x personal_services
  > 2x university_campus
  > 2x place_of_worship
  > 2x industrial_zone
  > 1x post_office
  > 1x student_dormitory
  > 1x hospital_clinical
  > 1x national_stadium
  > 1x supermarket
  > 1x education_preschool
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store        : Żabka
    - pharmacy                 : Dbam o Zdrowie
    - post_office              : Filia Urzędu Pocztowego Szczecin 43
    - education_high_school    : Publiczna Katolicka Szkoła Podstawowa im. św. Stanisława Kostki
    - pharmacy                 : Gemini
    - micro_atm                : Euronet
    - gastronomy               : Pizza Pasta i Basta
    - gastronomy               : Felicita Italian Bistro
    - gastronomy               : Pod różami
    - government_central       : Instytut Pamięci Narodowej
```
</details>

#### POZIOM 1: NAJSLABSZE SLUPKI FIZYCZNE MICRO (BOTTOM 5)
<details><summary><b>Bolesławice (ID: 113 | H3: 891f0e7067bffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Bolesławice
  stop_id                 : 113
  h3_index                : 891f0e7067bffff
  hub_id                  : 767
  hub_name                : Bolesławice
  is_hub_anchor           : False
  stop_lat                : 53.5659
  stop_lon                : 14.6816

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.2817
  stop_local_score_raw    : -2.1775

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 6621.5027
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 3.2692

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Redlica Rondo nż 11 (ID: 98011 | H3: 891f0e4ebdbffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Redlica Rondo nż 11
  stop_id                 : 98011
  h3_index                : 891f0e4ebdbffff
  hub_id                  : 173
  hub_name                : Redlica Rondo nż 11
  is_hub_anchor           : True
  stop_lat                : 53.4583
  stop_lon                : 14.4215

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.2254
  stop_local_score_raw    : -2.1841

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 1.0000
  stop_routes_count       : 1
  stop_routes             : 222
  stop_hub_share          : 0.5000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 2940.8579
  stop_liquidity          : 2

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 14.2017

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Żdżary skrzyż. nż. (ID: 96 | H3: 891f0e70c57ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Żdżary skrzyż. nż.
  stop_id                 : 96
  h3_index                : 891f0e70c57ffff
  hub_id                  : 871
  hub_name                : Żdżary skrzyż. nż.
  is_hub_anchor           : False
  stop_lat                : 53.5744
  stop_lon                : 14.7851

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.1690
  stop_local_score_raw    : -2.2167

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 6621.5027
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 1.7443

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Żdżary skrzyż. nż. (ID: 95 | H3: 891f0e70c57ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Żdżary skrzyż. nż.
  stop_id                 : 95
  h3_index                : 891f0e70c57ffff
  hub_id                  : 871
  hub_name                : Żdżary skrzyż. nż.
  is_hub_anchor           : True
  stop_lat                : 53.5742
  stop_lon                : 14.7861

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.1127
  stop_local_score_raw    : -2.2341

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 6621.5027
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 1.2557

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Grambow (ID: 179218 | H3: 891f0e4c237ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Grambow
  stop_id                 : 179218
  h3_index                : 891f0e4c237ffff
  hub_id                  : 479
  hub_name                : Grambow
  is_hub_anchor           : True
  stop_lat                : 53.4173
  stop_lon                : 14.3472

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.0563
  stop_local_score_raw    : -2.3063

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 6621.5027
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>

#### POZIOM 2: NAJWAZNIEJSZE WEZLY LOGICZNE MACRO (TOP 5 HUBOW)
<details><summary><b>HUB: Plac Rodła 34 (ID: 12 | H3: 891f0e79533ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Plac Rodła 34
  hub_id                  : 12
  h3_index                : 891f0e79533ffff
  hub_stops_count         : 15
  hub_stops_ids           : 11411, 11412, 11511, 11512, 11524, 11525, 11526, 11527, 11528, 11529, 11532, 11534, 11535, 11541, 11542
  lat                     : 53.4313
  lon                     : 14.5555

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 100.0000
  hub_local_score_raw     : 1.5278

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 11153657.4978
  hub_raw_gravity         : 3930612.3287
  hub_entropy             : 1.8376

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 154.2857
  hub_routes_count        : 20
  hub_routes              : 1, 2, 3, 4, 5, 8, 10, 11, 58, 59, 68, 70, 74, 86, 90, 101, 107, A, B, C

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 7554.3430
  hub_liquidity           : 1076

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 1248.0148
```
</details>
<details><summary><b>HUB: Brama Portowa 43 (ID: 45 | H3: 891f0e7950fffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Brama Portowa 43
  hub_id                  : 45
  h3_index                : 891f0e7950fffff
  hub_stops_count         : 12
  hub_stops_ids           : 10812, 10813, 10814, 10821, 10822, 10823, 10831, 10832, 10833, 10842, 10843, 11111
  lat                     : 53.4250
  lon                     : 14.5511

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.8919
  hub_local_score_raw     : 1.4709

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 20913398.7410
  hub_raw_gravity         : 7448688.3090
  hub_entropy             : 1.8077

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 132.6429
  hub_routes_count        : 15
  hub_routes              : 1, 2, 3, 7, 8, 9, 10, 52, 61, 75, 76, 87, A, B, C

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 6632.6531
  hub_liquidity           : 884

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 1108.5560
```
</details>
<details><summary><b>HUB: Plac Kościuszki 35 (ID: 72 | H3: 891f0e795cfffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Plac Kościuszki 35
  hub_id                  : 72
  h3_index                : 891f0e795cfffff
  hub_stops_count         : 12
  hub_stops_ids           : 10412, 10421, 10422, 10432, 10433, 10434, 10435, 10441, 10442, 10451, 10452, 10511
  lat                     : 53.4268
  lon                     : 14.5370

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.7838
  hub_local_score_raw     : 1.4608

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 6151904.5930
  hub_raw_gravity         : 2467900.4734
  hub_entropy             : 1.4928

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 131.2857
  hub_routes_count        : 14
  hub_routes              : 4, 7, 8, 9, 10, 61, 62, 70, 75, 90, 241, 242, 243, 811

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 6841.6106
  hub_liquidity           : 1460

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 3452.8575
```
</details>
<details><summary><b>HUB: Kołłątaja 32 (ID: 33 | H3: 891f0e7b327ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Kołłątaja 32
  hub_id                  : 33
  h3_index                : 891f0e7b327ffff
  hub_stops_count         : 9
  hub_stops_ids           : 12711, 12712, 12713, 12714, 12715, 12721, 12722, 12731, 12732
  lat                     : 53.4434
  lon                     : 14.5482

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.6757
  hub_local_score_raw     : 1.4197

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 7470648.5247
  hub_raw_gravity         : 2708382.9198
  hub_entropy             : 1.7583

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 125.3571
  hub_routes_count        : 18
  hub_routes              : 2, 3, 10, 11, 51, 53, 57, 60, 63, 67, 69, 78, 82, 87, 89, 92, 99, B

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 6923.1311
  hub_liquidity           : 850

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 1865.9826
```
</details>
<details><summary><b>HUB: Klonowica Zajezdnia 22 (ID: 151 | H3: 891f0e7b287ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Klonowica Zajezdnia 22
  hub_id                  : 151
  h3_index                : 891f0e7b287ffff
  hub_stops_count         : 5
  hub_stops_ids           : 32611, 32621, 32622, 32631, 32632
  lat                     : 53.4497
  lon                     : 14.4963

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.5676
  hub_local_score_raw     : 1.3455

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 29432967.5245
  hub_raw_gravity         : 14436655.3797
  hub_entropy             : 1.0388

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 47.1429
  hub_routes_count        : 7
  hub_routes              : 53, 60, 75, 80, 222, 225, 227

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 8983.5729
  hub_liquidity           : 369

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 1590.8952
```
</details>

---

## TORUN
#### DASHBOARD ASERCJI PIPELINE'U (Pelna Integralnosc Bazy)
```text
[PASS ZERO NULLS & INFS] Petla obliczeniowa wygenerowala 100% spojnych komorek.
[STATS] [WARN] Z-Score Micro ODD (Mean: -0.000, Std: 0.460)
        Rozklad Rang Slupkow (Micro): A: 88, A+: 44, B: 131, C: 175, D: 218, F: 218
[STATS] [WARN] Z-Score Macro ODD (Mean: -0.000, Std: 0.457)
        Rozklad Rang Hubow (Macro): A: 45, A+: 23, B: 68, C: 90, D: 113, F: 112
[DEMOGRAPHY] [INFO] OBSZAR AGLOMERACYJNY: +30.7% (GUS strefa aglomeracyjna: 248,382 vs Miasto rdzen: 190,000)
[PASS] POI Parquet 100% Valid (Matematyka Huffa dziala)
[PASS] POP Parquet 100% Valid
[PASS] H3 Res 8 Grid 100% Valid (657 komorek, 185 pustyn transportowych)
```

### Faza 0: Statystyki Ogolne i Balans Sieci
- **Slupki Fizyczne (Micro):** 874 slupkow
- **Wezly Logiczne (Macro Hubs):** 451 hubow (Wskaznik konsolidacji: 1.94 slupka/hub)
- **Populacja Strefy Transportowej (GUS 250m):** 248,382 mieszkancow
- **Transakcje Notarialne RCN:** 16,216 aktow
### Faza 1: Siatka Analityczna Uber H3 Res 8 (0.74 km2 / komorka)
- **Liczba Komorek H3 Res 8:** 657
- **Rynek Nieruchomosci RCN w Heksach:** Pokrycie 48.1% (316/657 komorek), Srednia: 4,266 PLN/m2, Mediana: 3,981 PLN/m2, Std: 3,013, Min: 40, Max: 27,603 PLN/m2
- **Demografia GUS NSP 2021 w Heksach:** Laczna ludnosc w heksach: 248,382, Srednia/heks: 378.1, Mediana: 35.0, Std: 1138.3, Max: 10,074
- **Podaz Transportu w Heksach:** Sredni Transport Score: 12.85, Max Transport Score: 100.00, Srednia odjazdow/h: 0.00, Pustynie Transportowe TDI: 185

#### TOP 5 Pustyn Transportowych (The Investment List)
| H3 Index | Lat | Lon | Populacja GUS | Odjazdy/h | TDI Score |
|---|---|---|---|---|---|
| `881f56528dfffff` | 53.02215 | 18.60232 | 10,074 | 0.0 | **96.71** |
| `881f56574dfffff` | 53.02334 | 18.67479 | 9,987 | 0.0 | **96.62** |
| `881f5652e7fffff` | 53.01198 | 18.58160 | 8,892 | 0.0 | **95.40** |
| `881f56cda7fffff` | 53.03066 | 18.67222 | 7,176 | 0.0 | **93.16** |
| `881f5652e5fffff` | 53.01421 | 18.56867 | 7,101 | 0.0 | **93.05** |

#### TOP 5 Biegunow Transportu (Najwyzsza Podaz)
| H3 Index | Lat | Lon | Transport Score | Odjazdy/h | Liczba Slupkow |
|---|---|---|---|---|---|
| `881f56cdbdfffff` | 53.04081 | 18.69295 | **100.00** | 0.0 | 11 |
| `881f56cdb5fffff` | 53.03350 | 18.69552 | **100.00** | 0.0 | 10 |
| `881f56cd35fffff` | 53.04918 | 18.60494 | **100.00** | 0.0 | 10 |
| `881f56501bfffff` | 52.99002 | 18.58935 | **100.00** | 0.0 | 11 |
| `881f565741fffff` | 53.02110 | 18.68773 | **100.00** | 0.0 | 11 |

#### TOP 5 Najdrozszych Heksow Mieszkaniowych RCN
| H3 Index | Lat | Lon | Mediana Ceny m2 | Liczba Transakcji |
|---|---|---|---|---|
| `881f565217fffff` | 53.02885 | 18.56350 | **27,603 PLN** | 2 |
| `881f56cd2bfffff` | 53.05872 | 18.58941 | **22,516 PLN** | 2 |
| `881f565481fffff` | 52.97259 | 18.88679 | **20,164 PLN** | 2 |
| `881f565761fffff` | 53.00363 | 18.66957 | **10,695 PLN** | 16 |
| `881f56cdb1fffff` | 53.03857 | 18.70589 | **9,900 PLN** | 57 |

### Faza 2: Audyt Zbednosci TCRP Report 100 (The Axe List)
- **Zbedne Slupki (R >= 0.50 - Umiarkowana Kanibalizacja):** 0
- **Zbedne Slupki (R >= 0.70 - Rekomendacja Likwidacji):** 0
- **Zbedne Slupki (R >= 0.90 - Skrajna Zbednosc / Dubel):** 0
- Brak slupkow spelniajacych prog likwidacji R >= 0.70.

### Faza 3: Hierarchia Magnesow Miejskich POI

#### Top 20 Kategorii POI w Miescie
| Kategoria | Tier | Ilosc w Miescie | Wartosc Punktowa (W) |
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

#### TOP 10 Konkretnych Nazwanych Magnesow Miejskich (T0, T1, T2)
| Nazwa Obiektu | Kategoria POI | Tier | Waga Przyciagania (W) |
|---|---|---|---|
| **Toruń Główny** | `national_rail_hub` | T0_MEGA_HUB | 33,982,577 |
| **Motoarena Toruń im. Mariana Rosego** | `national_stadium` | T1_NATIONAL_MAGNET | 23,409,173 |
| **Stadion Miejski im.Grzegorza Dunieckiego** | `national_stadium` | T1_NATIONAL_MAGNET | 23,409,173 |
| **Wojewódzki Szpital Zespolony – Szpital Psychiatryczny** | `hospital_clinical` | T1_NATIONAL_MAGNET | 17,926,938 |
| **Ośrodek Terapii Odwykowej Uzależnień** | `hospital_clinical` | T1_NATIONAL_MAGNET | 17,926,938 |
| **Wojewódzki Szpital Zespolony im. L. Rydygiera** | `hospital_clinical` | T1_NATIONAL_MAGNET | 17,926,938 |
| **Wojewódzki Szpital Zespolony im. Ludwika Rydygiera - Szpital Dziecięcy w Toruniu** | `hospital_clinical` | T1_NATIONAL_MAGNET | 17,926,938 |
| **Przychodnia Rodzinna na Sadowej** | `hospital_clinical` | T1_NATIONAL_MAGNET | 17,926,938 |
| **Wojewódzki Szpital Zespolony** | `hospital_clinical` | T1_NATIONAL_MAGNET | 17,926,938 |
| **Wojewódzki Ośrodek Terapii Uzależnień i Współuzależnienia** | `hospital_clinical` | T1_NATIONAL_MAGNET | 17,926,938 |

### Faza 4: Probki Pelnego DNA (Wszystkie 53 Metryki)

#### POZIOM 1: NAJLEPSZE SLUPKI FIZYCZNE MICRO (TOP 5)
<details><summary><b>Krynicka (ID: 53402 | H3: 891f56cdb0bffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Krynicka
  stop_id                 : 53402
  h3_index                : 891f56cdb0bffff
  hub_id                  : 150
  hub_name                : Krynicka
  is_hub_anchor           : True
  stop_lat                : 53.0363
  stop_lon                : 18.7051

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 100.0000
  stop_local_score_raw    : 0.5879

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 9268884.4628
  stop_raw_gravity        : 4391440.1051
  stop_entropy            : 1.1107

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 9704.9387
  stop_liquidity          : 59

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 488.5237

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 15x commercial_zone
  > 7x micro_playground
  > 6x industrial_zone
  > 5x personal_services
  > 5x micro_parcel_locker
  > 5x park_recreation
  > 3x convenience_store
  > 2x education_high_school
  > 2x education_preschool
  > 1x health_clinic
  > 1x car_services
  > 1x gastronomy
  > 1x place_of_worship
  > 1x sports_centre

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - education_high_school    : Szkoła Podstawowa nr 35
    - health_clinic            : Niepubliczny Zaklad Opieki Zdrowotnej ALFAMED
    - education_preschool      : Oddział Przedszkolny w SP nr 35
    - car_services             : Orlen
    - convenience_store        : Odido
    - personal_services        : Gabinet Manualnych Terapii Twarzy
    - convenience_store        : Angelika
    - personal_services        : Beata
    - micro_parcel_locker      : DPD Pickup Station
    - gastronomy               : Stop Cafe
```
</details>
<details><summary><b>Garbaty Mostek (ID: 2801 | H3: 891f5652807ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Garbaty Mostek
  stop_id                 : 2801
  h3_index                : 891f5652807ffff
  hub_id                  : 283
  hub_name                : Garbaty Mostek
  is_hub_anchor           : True
  stop_lat                : 53.0193
  stop_lon                : 18.6221

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.8856
  stop_local_score_raw    : 0.5705

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 8318684.5184
  stop_raw_gravity        : 3135818.8078
  stop_entropy            : 1.6528

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 7325.5194
  stop_liquidity          : 409

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 1557.3213

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 27x micro_playground
  > 11x personal_services
  > 10x micro_parcel_locker
  > 8x specialized_retail
  > 7x health_clinic
  > 6x post_office
  > 5x gastronomy
  > 5x convenience_store
  > 4x supermarket
  > 4x pharmacy
  > 4x park_recreation
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
    - supermarket              : Biedronka
    - health_clinic            : TORMED Sp. z o.o.
    - micro_parcel_locker      : Paczkomat InPost
    - supermarket              : Torimpex
    - gastronomy               : Rabarbar
    - pharmacy                 : Apteka Prima
    - health_clinic            : Nasz Lekarz
    - micro_parcel_locker      : Paczkomat InPost
    - pharmacy                 : Apteka Bliska Tobie
    - pharmacy                 : Dbam o Zdrowie
```
</details>
<details><summary><b>Mała Nieszawka - Szkoła (ID: 99301 | H3: 891f56500bbffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Mała Nieszawka - Szkoła
  stop_id                 : 99301
  h3_index                : 891f56500bbffff
  hub_id                  : 196
  hub_name                : Mała Nieszawka - Szkoła
  is_hub_anchor           : True
  stop_lat                : 52.9902
  stop_lon                : 18.5470

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.7712
  stop_local_score_raw    : 0.5620

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 13462244.3826
  stop_raw_gravity        : 5343583.3077
  stop_entropy            : 1.5193

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 8448.5407
  stop_liquidity          : 5

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 490.1527

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 5x car_services
  > 5x industrial_zone
  > 4x personal_services
  > 2x education_high_school
  > 2x commercial_zone
  > 1x gastronomy
  > 1x health_clinic
  > 1x government_central
  > 1x micro_parcel_locker
  > 1x place_of_worship
  > 1x supermarket
  > 1x education_preschool

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - car_services             : Autostart
    - personal_services        : Katarzyna Kalińska Atencja
    - gastronomy               : Kuchnia Edyty
    - personal_services        : Szalone Nożyczki
    - personal_services        : Agnieszka Mikołajczak
    - car_services             : Auto Szlif
    - car_services             : Silnikownia Przemysław Staniszewski
    - government_central       : Sołtys
    - personal_services        : Jerzy Jarczyński
    - micro_parcel_locker      : Paczkomat InPost
```
</details>
<details><summary><b>Garbaty Mostek (ID: 2804 | H3: 891f5652807ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Garbaty Mostek
  stop_id                 : 2804
  h3_index                : 891f5652807ffff
  hub_id                  : 283
  hub_name                : Garbaty Mostek
  is_hub_anchor           : False
  stop_lat                : 53.0196
  stop_lon                : 18.6227

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.6568
  stop_local_score_raw    : 0.5587

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 8070165.7949
  stop_raw_gravity        : 2974172.7545
  stop_entropy            : 1.7134

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 7324.3647
  stop_liquidity          : 415

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 1423.3400

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
    - supermarket              : Biedronka
    - health_clinic            : TORMED Sp. z o.o.
    - supermarket              : Torimpex
    - gastronomy               : Rabarbar
    - pharmacy                 : Apteka Prima
    - health_clinic            : Nasz Lekarz
    - micro_parcel_locker      : Paczkomat InPost
    - pharmacy                 : Apteka Bliska Tobie
    - pharmacy                 : Dbam o Zdrowie
    - convenience_store        : Żabka
```
</details>
<details><summary><b>Świętopełka (ID: 8702 | H3: 891f56528bbffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Świętopełka
  stop_id                 : 8702
  h3_index                : 891f56528bbffff
  hub_id                  : 149
  hub_name                : Świętopełka
  is_hub_anchor           : False
  stop_lat                : 53.0240
  stop_lon                : 18.6189

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.5423
  stop_local_score_raw    : 0.5357

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 12832215.3609
  stop_raw_gravity        : 4806117.6880
  stop_entropy            : 1.6700

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 7029.9728
  stop_liquidity          : 373

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 880.7936

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
    - micro_atm                : Santander
    - supermarket              : Biedronka
    - supermarket              : Lidl
    - specialized_retail       : Pracownia Krawiectwa Męskiego
    - micro_atm                : PKO BP
    - post_office              : Poczta Polska
    - micro_atm                : Bitomat Bitcoin ATM
    - supermarket              : Biedronka
    - pharmacy                 : Puls Świętopełka
    - personal_services        : Zakład Fryzjerski
```
</details>

#### POZIOM 1: NAJSLABSZE SLUPKI FIZYCZNE MICRO (BOTTOM 5)
<details><summary><b>Solankowa (ID: 17701 | H3: 891f565725bffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Solankowa
  stop_id                 : 17701
  h3_index                : 891f565725bffff
  hub_id                  : 61
  hub_name                : Solankowa
  is_hub_anchor           : True
  stop_lat                : 52.9816
  stop_lon                : 18.6707

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.4005
  stop_local_score_raw    : -1.6832

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 6395.0179
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Przysiecka (ID: 68202 | H3: 891f56525bbffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Przysiecka
  stop_id                 : 68202
  h3_index                : 891f56525bbffff
  hub_id                  : 87
  hub_name                : Przysiecka
  is_hub_anchor           : False
  stop_lat                : 53.0587
  stop_lon                : 18.5468

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.4005
  stop_local_score_raw    : -1.6832

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 6395.0179
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Przysiecka (ID: 68101 | H3: 891f56525bbffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Przysiecka
  stop_id                 : 68101
  h3_index                : 891f56525bbffff
  hub_id                  : 87
  hub_name                : Przysiecka
  is_hub_anchor           : True
  stop_lat                : 53.0588
  stop_lon                : 18.5468

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.4005
  stop_local_score_raw    : -1.6832

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 6395.0179
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Dzikowo (ID: 99109 | H3: 891f5655e43ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Dzikowo
  stop_id                 : 99109
  h3_index                : 891f5655e43ffff
  hub_id                  : 431
  hub_name                : Dzikowo
  is_hub_anchor           : True
  stop_lat                : 52.9308
  stop_lon                : 18.7678

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.4005
  stop_local_score_raw    : -1.6832

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 6395.0179
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Dzikowo (ID: 99110 | H3: 891f5655e43ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Dzikowo
  stop_id                 : 99110
  h3_index                : 891f5655e43ffff
  hub_id                  : 431
  hub_name                : Dzikowo
  is_hub_anchor           : False
  stop_lat                : 52.9307
  stop_lon                : 18.7685

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.4005
  stop_local_score_raw    : -1.6832

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 6395.0179
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>

#### POZIOM 2: NAJWAZNIEJSZE WEZLY LOGICZNE MACRO (TOP 5 HUBOW)
<details><summary><b>HUB: Świętopełka (ID: 149 | H3: 891f56528bbffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Świętopełka
  hub_id                  : 149
  h3_index                : 891f56528bbffff
  hub_stops_count         : 4
  hub_stops_ids           : 8403, 8504, 8601, 8702
  lat                     : 53.0237
  lon                     : 18.6185

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 100.0000
  hub_local_score_raw     : 0.5911

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 33046938.1519
  hub_raw_gravity         : 12543044.4217
  hub_entropy             : 1.6347

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 0.0000
  hub_routes_count        : 0
  hub_routes              : 

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 6994.9063
  hub_liquidity           : 422

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 2309.8897
```
</details>
<details><summary><b>HUB: Garbaty Mostek (ID: 283 | H3: 891f5652807ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Garbaty Mostek
  hub_id                  : 283
  h3_index                : 891f5652807ffff
  hub_stops_count         : 2
  hub_stops_ids           : 2801, 2804
  lat                     : 53.0194
  lon                     : 18.6224

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.7783
  hub_local_score_raw     : 0.5873

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 18679830.1389
  hub_raw_gravity         : 6998193.7014
  hub_entropy             : 1.6692

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 0.0000
  hub_routes_count        : 0
  hub_routes              : 

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 7308.8788
  hub_liquidity           : 434

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 3101.4580
```
</details>
<details><summary><b>HUB: Plac Rapackiego (ID: 83 | H3: 891f5652a87ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Plac Rapackiego
  hub_id                  : 83
  h3_index                : 891f5652a87ffff
  hub_stops_count         : 2
  hub_stops_ids           : 101, 202
  lat                     : 53.0102
  lon                     : 18.5993

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.5565
  hub_local_score_raw     : 0.5348

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 27561591.7926
  hub_raw_gravity         : 15533775.7918
  hub_entropy             : 0.7743

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 0.0000
  hub_routes_count        : 0
  hub_routes              : 

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 7111.8986
  hub_liquidity           : 224

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 1406.1365
```
</details>
<details><summary><b>HUB: Szosa Okrężna (ID: 113 | H3: 891f5652ecbffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Szosa Okrężna
  hub_id                  : 113
  h3_index                : 891f5652ecbffff
  hub_stops_count         : 4
  hub_stops_ids           : 46802, 46901, 58804, 58903
  lat                     : 53.0195
  lon                     : 18.5659

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.3348
  hub_local_score_raw     : 0.5322

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 34319873.2956
  hub_raw_gravity         : 30167783.0197
  hub_entropy             : 0.1376

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 0.0000
  hub_routes_count        : 0
  hub_routes              : 

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 7126.5678
  hub_liquidity           : 399

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 1104.7960
```
</details>
<details><summary><b>HUB: Dekerta (ID: 300 | H3: 891f56528c3ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Dekerta
  hub_id                  : 300
  h3_index                : 891f56528c3ffff
  hub_stops_count         : 2
  hub_stops_ids           : 13101, 13202
  lat                     : 53.0203
  lon                     : 18.6022

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.1131
  hub_local_score_raw     : 0.5285

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 19070342.1836
  hub_raw_gravity         : 7011747.0978
  hub_entropy             : 1.7198

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 0.0000
  hub_routes_count        : 0
  hub_routes              : 

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 6916.7332
  hub_liquidity           : 599

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 2101.2230
```
</details>

---

## TROJMIASTO
#### DASHBOARD ASERCJI PIPELINE'U (Pelna Integralnosc Bazy)
```text
[PASS ZERO NULLS & INFS] Petla obliczeniowa wygenerowala 100% spojnych komorek.
[STATS] [PASS] Z-Score Micro VALID (Mean: -0.000, Std: 0.582)
        Rozklad Rang Slupkow (Micro): A: 470, A+: 236, B: 708, C: 941, D: 1177, F: 1177
[STATS] [PASS] Z-Score Macro VALID (Mean: -0.000, Std: 0.577)
        Rozklad Rang Hubow (Macro): A: 169, A+: 85, B: 254, C: 339, D: 423, F: 423
[DEMOGRAPHY] [INFO] OBSZAR AGLOMERACYJNY: +37.8% (GUS strefa aglomeracyjna: 1,033,361 vs Miasto rdzen: 750,000)
[PASS] POI Parquet 100% Valid (Matematyka Huffa dziala)
[PASS] POP Parquet 100% Valid
[PASS] H3 Res 8 Grid 100% Valid (1,726 komorek, 571 pustyn transportowych)
```

### Faza 0: Statystyki Ogolne i Balans Sieci
- **Slupki Fizyczne (Micro):** 4,709 slupkow
- **Wezly Logiczne (Macro Hubs):** 1,693 hubow (Wskaznik konsolidacji: 2.78 slupka/hub)
- **Populacja Strefy Transportowej (GUS 250m):** 1,033,361 mieszkancow
- **Transakcje Notarialne RCN:** 150,122 aktow
### Faza 1: Siatka Analityczna Uber H3 Res 8 (0.74 km2 / komorka)
- **Liczba Komorek H3 Res 8:** 1,726
- **Rynek Nieruchomosci RCN w Heksach:** Pokrycie 72.1% (1244/1726 komorek), Srednia: 6,927 PLN/m2, Mediana: 6,235 PLN/m2, Std: 4,084, Min: 44, Max: 41,459 PLN/m2
- **Demografia GUS NSP 2021 w Heksach:** Laczna ludnosc w heksach: 1,033,361, Srednia/heks: 598.7, Mediana: 36.0, Std: 1344.0, Max: 10,207
- **Podaz Transportu w Heksach:** Sredni Transport Score: 12.14, Max Transport Score: 100.00, Srednia odjazdow/h: 0.58, Pustynie Transportowe TDI: 571

#### TOP 5 Pustyn Transportowych (The Investment List)
| H3 Index | Lat | Lon | Populacja GUS | Odjazdy/h | TDI Score |
|---|---|---|---|---|---|
| `881f7258bdfffff` | 54.49683 | 18.51146 | 10,207 | 0.0 | **96.85** |
| `881f724813fffff` | 54.40962 | 18.59344 | 9,756 | 0.0 | **96.38** |
| `881f7248c5fffff` | 54.40745 | 18.60666 | 8,025 | 0.0 | **94.33** |
| `881f7248e3fffff` | 54.39315 | 18.61193 | 7,870 | 0.0 | **94.12** |
| `881f09b351fffff` | 54.32812 | 18.59863 | 7,698 | 0.0 | **93.89** |

#### TOP 5 Biegunow Transportu (Najwyzsza Podaz)
| H3 Index | Lat | Lon | Transport Score | Odjazdy/h | Liczba Slupkow |
|---|---|---|---|---|---|
| `881f7248e9fffff` | 54.40247 | 18.59608 | **100.00** | 10.3 | 24 |
| `881f09b357fffff` | 54.32096 | 18.60126 | **100.00** | 13.7 | 18 |
| `881f0d25c3fffff` | 54.60519 | 18.29667 | **100.00** | 27.0 | 13 |
| `881f09b249fffff` | 54.36952 | 18.63303 | **100.00** | 0.0 | 26 |
| `881f72483bfffff` | 54.39966 | 18.57228 | **100.00** | 8.0 | 24 |

#### TOP 5 Najdrozszych Heksow Mieszkaniowych RCN
| H3 Index | Lat | Lon | Mediana Ceny m2 | Liczba Transakcji |
|---|---|---|---|---|
| `881f72cdabfffff` | 54.70296 | 18.68409 | **41,459 PLN** | 3 |
| `881f724905fffff` | 54.37124 | 18.45864 | **36,734 PLN** | 10 |
| `881f724aa1fffff` | 54.42889 | 18.59875 | **34,882 PLN** | 12 |
| `881f724a17fffff` | 54.45465 | 18.56438 | **31,163 PLN** | 55 |
| `881f72575dfffff` | 54.68439 | 18.71592 | **30,277 PLN** | 239 |

### Faza 2: Audyt Zbednosci TCRP Report 100 (The Axe List)
- **Zbedne Slupki (R >= 0.50 - Umiarkowana Kanibalizacja):** 208
- **Zbedne Slupki (R >= 0.70 - Rekomendacja Likwidacji):** 180
- **Zbedne Slupki (R >= 0.90 - Skrajna Zbednosc / Dubel):** 141

| Zbedny Słupek | Dominujacy Słupek | Dystans [m] | S_service | S_spatial | S_cannibal | R-Score |
|---|---|---|---|---|---|---|
| Kukawka 01 (#176, 0.9285714285714286 odj/h) | Kukawka 01 (#176, 0.9285714285714286 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |
| Kukawka 01 (#176, 0.9285714285714286 odj/h) | Kukawka 01 (#176, 0.9285714285714286 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |
| Port Lotniczy 02 (#102, 0.5 odj/h) | Port Lotniczy 02 (#102, 0.5 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |
| Suchanino 01 (#151, 0.21428571428571427 odj/h) | Suchanino 01 (#151, 0.21428571428571427 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |
| Suchanino 01 (#151, 0.21428571428571427 odj/h) | Suchanino 01 (#151, 0.21428571428571427 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |

### Faza 3: Hierarchia Magnesow Miejskich POI

#### Top 20 Kategorii POI w Miescie
| Kategoria | Tier | Ilosc w Miescie | Wartosc Punktowa (W) |
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

#### TOP 10 Konkretnych Nazwanych Magnesow Miejskich (T0, T1, T2)
| Nazwa Obiektu | Kategoria POI | Tier | Waga Przyciagania (W) |
|---|---|---|---|
| **Port Lotniczy Gdańsk im. Lecha Wałęsy** | `international_airport` | T0_MEGA_HUB | 207,269,246 |
| **Gdańsk Główny** | `national_rail_hub` | T0_MEGA_HUB | 38,456,144 |
| **Gdynia Główna** | `national_rail_hub` | T0_MEGA_HUB | 38,456,144 |
| **SP ZOZ Sanatorium Uzdrowiskowe MSWiA w Sopocie** | `hospital_clinical` | T1_NATIONAL_MAGNET | 24,170,819 |
| **Wojewódzki Szpital Psychiatryczny im. Tadeusza Bilikiewicza** | `hospital_clinical` | T1_NATIONAL_MAGNET | 24,170,819 |
| **Szpital Dziecięcy Polanki** | `hospital_clinical` | T1_NATIONAL_MAGNET | 24,170,819 |
| **Uniwersyteckie Centrum Medycyny Morskiej i Tropikalnej** | `hospital_clinical` | T1_NATIONAL_MAGNET | 24,170,819 |
| **Szpital im. Mikołaja Kopernika** | `hospital_clinical` | T1_NATIONAL_MAGNET | 24,170,819 |
| **Lux Med** | `hospital_clinical` | T1_NATIONAL_MAGNET | 24,170,819 |
| **Szpital Specjalistyczny im. Floriana Ceynowy w Wejherowie** | `hospital_clinical` | T1_NATIONAL_MAGNET | 24,170,819 |

### Faza 4: Probki Pelnego DNA (Wszystkie 53 Metryki)

#### POZIOM 1: NAJLEPSZE SLUPKI FIZYCZNE MICRO (TOP 5)
<details><summary><b>Wejherowo Szpital 02 (ID: 318 | H3: 891f0d25197ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Wejherowo Szpital 02
  stop_id                 : 318
  h3_index                : 891f0d25197ffff
  hub_id                  : 620
  hub_name                : Wejherowo Szpital 02
  is_hub_anchor           : True
  stop_lat                : 54.6149
  stop_lon                : 18.2454

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 100.0000
  stop_local_score_raw    : 2.9381

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 3393395.8798
  stop_raw_gravity        : 3362068.6725
  stop_entropy            : 0.0093

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 5.6429
  stop_routes_count       : 4
  stop_routes             : 2, 5, 8, 701
  stop_hub_share          : 1.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 8809.6007
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 27.4031

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x gastronomy
  > 1x car_services
  > 1x hospital_clinical

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy               : Bar Restauracyjny
    - car_services             : Elektryka pojazdowa
    - hospital_clinical        : Szpital Specjalistyczny im. Floriana Ceynowy w Wejherowie
```
</details>
<details><summary><b>Wejherowo Os. Fenikowskiego 01 (ID: 859 | H3: 891f0d25cabffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Wejherowo Os. Fenikowskiego 01
  stop_id                 : 859
  h3_index                : 891f0d25cabffff
  hub_id                  : 951
  hub_name                : Wejherowo Os. Fenikowskiego 01
  is_hub_anchor           : True
  stop_lat                : 54.6109
  stop_lon                : 18.2932

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.9788
  stop_local_score_raw    : 2.9276

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 1234363.3463
  stop_raw_gravity        : 588405.0787
  stop_entropy            : 1.0978

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 4.5714
  stop_routes_count       : 3
  stop_routes             : 1, 4, 8
  stop_hub_share          : 1.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 8115.1832
  stop_liquidity          : 52

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 2468.2523

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 2x health_clinic
  > 2x convenience_store
  > 2x micro_playground
  > 1x personal_services
  > 1x post_office
  > 1x micro_parcel_locker
  > 1x place_of_worship
  > 1x education_preschool

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - health_clinic            : NZOZ Kaszuby Filia nr 1
    - personal_services        : Efekt Solarium & Fryzjer
    - convenience_store        : Delikatesy Premium
    - convenience_store        : Żabka
    - micro_parcel_locker      : Paczkomat InPost
    - place_of_worship         : Kościół pw. św Karola Boromeusza
    - education_preschool      : Niepubliczne Przedszkole Stonoga II
```
</details>
<details><summary><b>Wejherowo Sobieskiego - GS 02 (ID: 83 | H3: 891f0d2515bffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Wejherowo Sobieskiego - GS 02
  stop_id                 : 83
  h3_index                : 891f0d2515bffff
  hub_id                  : 258
  hub_name                : Wejherowo Sobieskiego - GS 02
  is_hub_anchor           : True
  stop_lat                : 54.6027
  stop_lon                : 18.2317

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.9575
  stop_local_score_raw    : 2.7247

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 4680640.8564
  stop_raw_gravity        : 1704895.9013
  stop_entropy            : 1.7454

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 4.4286
  stop_routes_count       : 6
  stop_routes             : 2, 3, 4, 7, 12, 16
  stop_hub_share          : 0.6139

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 5756.5789
  stop_liquidity          : 159

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 383.7643

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
    - regional_rail_hub        : Wejherowo
    - bank                     : Millennium Bank
    - micro_atm                : Bankomat Millennium
    - gastronomy               : Jedyny Taki Kebab w Mieście
    - bank                     : Santander
    - police_station           : Komenda Powiatowa Policji w Wejherowie
    - gastronomy               : Bar Gusto
    - convenience_store        : Kami
    - gastronomy               : Do syta
    - bank                     : BNP Paribas
```
</details>
<details><summary><b>Wejherowo Nadrzeczna 02 (ID: 818 | H3: 891f0d25113ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Wejherowo Nadrzeczna 02
  stop_id                 : 818
  h3_index                : 891f0d25113ffff
  hub_id                  : 2
  hub_name                : Wejherowo Nadrzeczna 02
  is_hub_anchor           : True
  stop_lat                : 54.6090
  stop_lon                : 18.2444

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.9363
  stop_local_score_raw    : 2.6672

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 3645005.7580
  stop_raw_gravity        : 1498092.3131
  stop_entropy            : 1.4331

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 4.5000
  stop_routes_count       : 6
  stop_routes             : 2, 5, 8, 11, 12, 701
  stop_hub_share          : 0.6058

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 6315.6141
  stop_liquidity          : 23

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 170.1967

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 9x specialized_retail
  > 7x micro_playground
  > 5x personal_services
  > 3x health_clinic
  > 3x micro_parcel_locker
  > 3x industrial_zone
  > 2x supermarket
  > 2x gastronomy
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
    - personal_services        : Studio Kleopatra
    - health_clinic            : Stermed
    - health_clinic            : Lek. Stomatolog Maria Chmiel
    - personal_services        : Salon Fryzjerski Adam
    - specialized_retail       : Media Expert
    - specialized_retail       : Pepco
    - supermarket              : Biedronka
    - personal_services        : Rossmann
    - specialized_retail       : Stoper
    - specialized_retail       : Mandarynka
```
</details>
<details><summary><b>Wejherowo Obrońców Helu 01 (ID: 663 | H3: 891f0d25113ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Wejherowo Obrońców Helu 01
  stop_id                 : 663
  h3_index                : 891f0d25113ffff
  hub_id                  : 2
  hub_name                : Wejherowo Nadrzeczna 02
  is_hub_anchor           : False
  stop_lat                : 54.6081
  stop_lon                : 18.2441

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.9151
  stop_local_score_raw    : 2.6549

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 3351708.0774
  stop_raw_gravity        : 1443281.2352
  stop_entropy            : 1.3223

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 4.4286
  stop_routes_count       : 5
  stop_routes             : 2, 5, 8, 11, 12
  stop_hub_share          : 0.5962

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 6035.6653
  stop_liquidity          : 43

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 262.0848

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 14x specialized_retail
  > 9x gastronomy
  > 9x micro_playground
  > 8x personal_services
  > 4x convenience_store
  > 4x micro_parcel_locker
  > 3x health_clinic
  > 3x supermarket
  > 3x industrial_zone
  > 2x business_office
  > 2x education_preschool
  > 2x pharmacy
  > 2x education_high_school
  > 2x government_central
  > 1x bank
  > 1x post_office
  > 1x shopping_mall
  > 1x social_support_mops
  > 1x car_services
  > 1x marketplace
  > 1x sports_centre

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy               : Dragon Sushi
    - specialized_retail       : Arkowiec Wejherowo
    - personal_services        : Studio Kleopatra
    - personal_services        : Beast Barber Shop
    - specialized_retail       : Street Wear Shop
    - specialized_retail       : Czapnictwo
    - personal_services        : Kosmyk
    - health_clinic            : Stermed
    - health_clinic            : Lek. Stomatolog Maria Chmiel
    - gastronomy               : Klub zdrowego stylu życia Iwona Jankowska
```
</details>

#### POZIOM 1: NAJSLABSZE SLUPKI FIZYCZNE MICRO (BOTTOM 5)
<details><summary><b>Bogatka Bogatka I 02 (ID: 14625 | H3: 891f09b290fffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Bogatka Bogatka I 02
  stop_id                 : 14625
  h3_index                : 891f09b290fffff
  hub_id                  : 632
  hub_name                : Bogatka Bogatka I 01
  is_hub_anchor           : False
  stop_lat                : 54.3282
  stop_lon                : 18.7835

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.1168
  stop_local_score_raw    : -2.6845

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 7185.7466
  stop_liquidity          : 4

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 13.1594

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Kielno Różana 13 (ID: 31637 | H3: 891f0996ccbffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Kielno Różana 13
  stop_id                 : 31637
  h3_index                : 891f0996ccbffff
  hub_id                  : 219
  hub_name                : Kielno Różana 13
  is_hub_anchor           : True
  stop_lat                : 54.4586
  stop_lon                : 18.3234

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.0849
  stop_local_score_raw    : -2.7207

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 4880.6447
  stop_liquidity          : 6

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 66.3596

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Dobrzewino Owsiana 16 (ID: 31633 | H3: 891f0996dabffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Dobrzewino Owsiana 16
  stop_id                 : 31633
  h3_index                : 891f0996dabffff
  hub_id                  : 1634
  hub_name                : Dobrzewino Owsiana 16
  is_hub_anchor           : True
  stop_lat                : 54.4604
  stop_lon                : 18.3852

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.0637
  stop_local_score_raw    : -2.7431

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 5152.1099
  stop_liquidity          : 5

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 40.8132

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Dobrzewino Owsiana 63 (ID: 31634 | H3: 891f0996dabffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Dobrzewino Owsiana 63
  stop_id                 : 31634
  h3_index                : 891f0996dabffff
  hub_id                  : 1385
  hub_name                : Dobrzewino Owsiana 63
  is_hub_anchor           : True
  stop_lat                : 54.4611
  stop_lon                : 18.3841

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.0425
  stop_local_score_raw    : -2.7493

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 4988.5509
  stop_liquidity          : 7

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 45.2268

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Demptowo - Jednostka Wojskowa 01 (ID: 38160 | H3: 891f725817bffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Demptowo - Jednostka Wojskowa 01
  stop_id                 : 38160
  h3_index                : 891f725817bffff
  hub_id                  : 1279
  hub_name                : Demptowo - Jednostka Wojskowa 01
  is_hub_anchor           : True
  stop_lat                : 54.5206
  stop_lon                : 18.4493

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.0212
  stop_local_score_raw    : -2.8601

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 8809.6007
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>

#### POZIOM 2: NAJWAZNIEJSZE WEZLY LOGICZNE MACRO (TOP 5 HUBOW)
<details><summary><b>HUB: Wejherowo Nadrzeczna 02 (ID: 2 | H3: 891f0d25113ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Wejherowo Nadrzeczna 02
  hub_id                  : 2
  h3_index                : 891f0d25113ffff
  hub_stops_count         : 6
  hub_stops_ids           : 663, 664, 666, 818, 31377, 40375
  lat                     : 54.6090
  lon                     : 18.2444

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 100.0000
  hub_local_score_raw     : 2.4060

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 12039265.3293
  hub_raw_gravity         : 5096926.9568
  hub_entropy             : 1.3621

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 7.4286
  hub_routes_count        : 6
  hub_routes              : 2, 5, 8, 11, 12, 701

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 6035.6653
  hub_liquidity           : 43

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 503.5894
```
</details>
<details><summary><b>HUB: Wejherowo Sobieskiego - GS 02 (ID: 258 | H3: 891f0d2515bffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Wejherowo Sobieskiego - GS 02
  hub_id                  : 258
  h3_index                : 891f0d2515bffff
  hub_stops_count         : 2
  hub_stops_ids           : 83, 677
  lat                     : 54.6027
  lon                     : 18.2322

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.9409
  hub_local_score_raw     : 2.3895

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 11226843.2393
  hub_raw_gravity         : 4131399.6122
  hub_entropy             : 1.7174

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 7.2143
  hub_routes_count        : 6
  hub_routes              : 2, 3, 4, 7, 12, 16

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 5783.3288
  hub_liquidity           : 179

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 784.3305
```
</details>
<details><summary><b>HUB: Wejherowo Filharmonia Kaszubska 01 (ID: 199 | H3: 891f0d25027ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Wejherowo Filharmonia Kaszubska 01
  hub_id                  : 199
  h3_index                : 891f0d25027ffff
  hub_stops_count         : 3
  hub_stops_ids           : 78, 79, 423
  lat                     : 54.6032
  lon                     : 18.2270

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.8819
  hub_local_score_raw     : 2.3883

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 6682686.0939
  hub_raw_gravity         : 2421503.4297
  hub_entropy             : 1.7597

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 7.0714
  hub_routes_count        : 6
  hub_routes              : 2, 3, 4, 7, 11, 16

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 6182.7293
  hub_liquidity           : 180

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 1344.2149
```
</details>
<details><summary><b>HUB: Wejherowo Szpitalna 04 n/ż (ID: 163 | H3: 891f0d25187ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Wejherowo Szpitalna 04 n/ż
  hub_id                  : 163
  h3_index                : 891f0d25187ffff
  hub_stops_count         : 4
  hub_stops_ids           : 94, 95, 96, 317
  lat                     : 54.6134
  lon                     : 18.2495

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.8228
  hub_local_score_raw     : 2.3211

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 9821169.1637
  hub_raw_gravity         : 9623205.9730
  hub_entropy             : 0.0206

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 6.7143
  hub_routes_count        : 5
  hub_routes              : 2, 5, 8, 12, 701

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 8809.6007
  hub_liquidity           : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 105.3731
```
</details>
<details><summary><b>HUB: Wejherowo Broniewskiego - Dworzec PKP 02 (ID: 107 | H3: 891f0d251cbffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Wejherowo Broniewskiego - Dworzec PKP 02
  hub_id                  : 107
  h3_index                : 891f0d251cbffff
  hub_stops_count         : 2
  hub_stops_ids           : 86, 87
  lat                     : 54.6068
  lon                     : 18.2300

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.7637
  hub_local_score_raw     : 2.2427

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 7184658.9110
  hub_raw_gravity         : 2571844.6336
  hub_entropy             : 1.7936

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 6.6429
  hub_routes_count        : 5
  hub_routes              : 1, 5, 10, 12, 701

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 5960.4905
  hub_liquidity           : 89

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 639.0237
```
</details>

---

## WARSZAWA
#### DASHBOARD ASERCJI PIPELINE'U (Pelna Integralnosc Bazy)
```text
[PASS ZERO NULLS & INFS] Petla obliczeniowa wygenerowala 100% spojnych komorek.
[STATS] [PASS] Z-Score Micro VALID (Mean: 0.000, Std: 0.511)
        Rozklad Rang Slupkow (Micro): A: 1038, A+: 521, B: 1559, C: 2079, D: 2598, F: 2598
[STATS] [PASS] Z-Score Macro VALID (Mean: -0.000, Std: 0.526)
        Rozklad Rang Hubow (Macro): A: 472, A+: 236, B: 707, C: 943, D: 1178, F: 1178
[DEMOGRAPHY] [INFO] OBSZAR AGLOMERACYJNY: +71.2% (GUS strefa aglomeracyjna: 3,081,843 vs Miasto rdzen: 1,800,000)
[PASS] POI Parquet 100% Valid (Matematyka Huffa dziala)
[PASS] POP Parquet 100% Valid
[PASS] H3 Res 8 Grid 100% Valid (4,442 komorek, 1641 pustyn transportowych)
```

### Faza 0: Statystyki Ogolne i Balans Sieci
- **Slupki Fizyczne (Micro):** 10,393 slupkow
- **Wezly Logiczne (Macro Hubs):** 4,714 hubow (Wskaznik konsolidacji: 2.20 slupka/hub)
- **Populacja Strefy Transportowej (GUS 250m):** 3,081,843 mieszkancow
- **Transakcje Notarialne RCN:** 227,085 aktow
### Faza 1: Siatka Analityczna Uber H3 Res 8 (0.74 km2 / komorka)
- **Liczba Komorek H3 Res 8:** 4,442
- **Rynek Nieruchomosci RCN w Heksach:** Pokrycie 44.4% (1974/4442 komorek), Srednia: 8,433 PLN/m2, Mediana: 7,713 PLN/m2, Std: 8,057, Min: 84, Max: 329,336 PLN/m2
- **Demografia GUS NSP 2021 w Heksach:** Laczna ludnosc w heksach: 3,081,843, Srednia/heks: 693.8, Mediana: 118.0, Std: 1704.0, Max: 15,391
- **Podaz Transportu w Heksach:** Sredni Transport Score: 11.15, Max Transport Score: 100.00, Srednia odjazdow/h: 3.75, Pustynie Transportowe TDI: 1641

#### TOP 5 Pustyn Transportowych (The Investment List)
| H3 Index | Lat | Lon | Populacja GUS | Odjazdy/h | TDI Score |
|---|---|---|---|---|---|
| `881f53c99dfffff` | 52.22477 | 21.09409 | 15,391 | 0.0 | **101.16** |
| `881f5234b1fffff` | 52.24037 | 20.90992 | 14,251 | 0.0 | **100.35** |
| `881f53c821fffff` | 52.25735 | 21.03629 | 13,871 | 0.0 | **100.07** |
| `881f522493fffff` | 52.13279 | 21.06242 | 13,294 | 0.0 | **99.62** |
| `881f522499fffff` | 52.14282 | 21.04742 | 13,268 | 0.0 | **99.60** |

#### TOP 5 Biegunow Transportu (Najwyzsza Podaz)
| H3 Index | Lat | Lon | Transport Score | Odjazdy/h | Liczba Slupkow |
|---|---|---|---|---|---|
| `881f530b09fffff` | 52.17425 | 21.58712 | **100.00** | 287.4 | 22 |
| `881f530b41fffff` | 52.18434 | 21.57218 | **100.00** | 149.4 | 20 |
| `881f5319a7fffff` | 52.19443 | 21.55724 | **100.00** | 125.7 | 16 |
| `881f530b43fffff` | 52.18174 | 21.58489 | **100.00** | 78.6 | 10 |
| `881f522137fffff` | 52.09396 | 20.62063 | **100.00** | 276.0 | 10 |

#### TOP 5 Najdrozszych Heksow Mieszkaniowych RCN
| H3 Index | Lat | Lon | Mediana Ceny m2 | Liczba Transakcji |
|---|---|---|---|---|
| `881f52242dfffff` | 52.13836 | 20.89353 | **329,336 PLN** | 21 |
| `881f53c8a9fffff` | 52.24703 | 21.12317 | **59,099 PLN** | 4 |
| `881f5225abfffff` | 52.08841 | 20.93275 | **40,964 PLN** | 24 |
| `881f53c937fffff` | 52.21520 | 21.00138 | **23,871 PLN** | 31 |
| `881f5226cbfffff` | 52.21026 | 20.99094 | **23,609 PLN** | 10 |

### Faza 2: Audyt Zbednosci TCRP Report 100 (The Axe List)
- **Zbedne Slupki (R >= 0.50 - Umiarkowana Kanibalizacja):** 1359
- **Zbedne Slupki (R >= 0.70 - Rekomendacja Likwidacji):** 1147
- **Zbedne Slupki (R >= 0.90 - Skrajna Zbednosc / Dubel):** 801

| Zbedny Słupek | Dominujacy Słupek | Dystans [m] | S_service | S_spatial | S_cannibal | R-Score |
|---|---|---|---|---|---|---|
| Paderewskiego 01 (#ZABKI_471, 5.857142857142857 odj/h) | Paderewskiego 01 (#ZABKI_471, 5.857142857142857 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |
| Paderewskiego 01 (#ZABKI_471, 5.857142857142857 odj/h) | Paderewskiego 01 (#ZABKI_471, 5.857142857142857 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |
| Ząbki Kochanowskiego 01 (#ZABKI_131, 5.142857142857143 odj/h) | Ząbki Kochanowskiego 01 (#ZABKI_131, 5.142857142857143 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |
| Mińsk Maz. Chemik 05 (#MINSK_chemik-05, 11.857142857142858 odj/h) | Mińsk Maz. Chemik 05 (#MINSK_chemik-05, 11.857142857142858 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |
| Mińsk Maz. Chemik 05 (#MINSK_chemik-05, 11.857142857142858 odj/h) | Mińsk Maz. Chemik 05 (#MINSK_chemik-05, 11.857142857142858 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |

### Faza 3: Hierarchia Magnesow Miejskich POI

#### Top 20 Kategorii POI w Miescie
| Kategoria | Tier | Ilosc w Miescie | Wartosc Punktowa (W) |
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

#### TOP 10 Konkretnych Nazwanych Magnesow Miejskich (T0, T1, T2)
| Nazwa Obiektu | Kategoria POI | Tier | Waga Przyciagania (W) |
|---|---|---|---|
| **Port Lotniczy Warszawa-Modlin** | `international_airport` | T0_MEGA_HUB | 242,647,992 |
| **Lotnisko Chopina** | `international_airport` | T0_MEGA_HUB | 242,647,992 |
| **Warszawa Centralna** | `national_rail_hub` | T0_MEGA_HUB | 41,504,761 |
| **Warszawa Wschodnia** | `national_rail_hub` | T0_MEGA_HUB | 41,504,761 |
| **Warszawa Gdańska** | `national_rail_hub` | T0_MEGA_HUB | 41,504,761 |
| **Warszawa Główna** | `national_rail_hub` | T0_MEGA_HUB | 41,504,761 |
| **Warszawa Zachodnia** | `national_rail_hub` | T0_MEGA_HUB | 41,504,761 |
| **Podkowa Leśna Główna** | `national_rail_hub` | T0_MEGA_HUB | 41,504,761 |
| **Stadion Miejski KS Mszczonowianka Mszczonów** | `national_stadium` | T1_NATIONAL_MAGNET | 26,372,728 |
| **Klub Sportowy \** | `national_stadium` | T1_NATIONAL_MAGNET | 26,372,728 |

### Faza 4: Probki Pelnego DNA (Wszystkie 53 Metryki)

#### POZIOM 1: NAJLEPSZE SLUPKI FIZYCZNE MICRO (TOP 5)
<details><summary><b>Grodzisk Maz. Dw. PKP (ID: 585919 | H3: 891f5221387ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Grodzisk Maz. Dw. PKP
  stop_id                 : 585919
  h3_index                : 891f5221387ffff
  hub_id                  : 17
  hub_name                : Grodzisk Maz. Dw. PKP
  is_hub_anchor           : True
  stop_lat                : 52.1097
  stop_lon                : 20.6223

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 100.0000
  stop_local_score_raw    : 2.5296

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 6510854.4259
  stop_raw_gravity        : 1975095.3671
  stop_entropy            : 2.2965

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 56.3571
  stop_routes_count       : 20
  stop_routes             : 0, 13, 16, 17, 18, 21, 22, 23, 24, 25, 26, 28, 29, 30, 31, 32, 33, 34, 63, 82
  stop_hub_share          : 0.9622

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 10295.3559
  stop_liquidity          : 98

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 186.0550

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
    - pharmacy                 : Farmacja 24
    - pharmacy                 : Dbam o Zdrowie
    - post_office              : Poczta Polska
    - bank                     : Millennium Bank
    - micro_atm                : Euronet
    - micro_atm                : Euronet
    - pharmacy                 : Centralna
    - micro_atm                : PKO BP
    - gastronomy               : Studnia Smaków
    - gastronomy               : Donatello
```
</details>
<details><summary><b>Grodzisk Maz. Zondka (ID: 586000 | H3: 891f52213bbffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Grodzisk Maz. Zondka
  stop_id                 : 586000
  h3_index                : 891f52213bbffff
  hub_id                  : 2798
  hub_name                : Grodzisk Maz. Zondka
  is_hub_anchor           : True
  stop_lat                : 52.1076
  stop_lon                : 20.6226

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.9904
  stop_local_score_raw    : 2.2853

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 4138772.6069
  stop_raw_gravity        : 1261362.5170
  stop_entropy            : 2.2812

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 37.2857
  stop_routes_count       : 20
  stop_routes             : 0, 13, 16, 17, 18, 21, 22, 23, 24, 25, 26, 28, 29, 30, 31, 32, 33, 34, 63, 82
  stop_hub_share          : 1.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 10146.8048
  stop_liquidity          : 215

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 280.8288

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
    - pharmacy                 : Farmacja 24
    - pharmacy                 : Dbam o Zdrowie
    - post_office              : Poczta Polska
    - bank                     : Millennium Bank
    - micro_atm                : Euronet
    - culture_theatre          : Kino CK
    - gastronomy               : Biesiadowo
    - gastronomy               : LOFT Food & Music
    - micro_atm                : Euronet
    - micro_atm                : Euronet
```
</details>
<details><summary><b>Komorów (ID: komor | H3: 891f5227247ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Komorów
  stop_id                 : komor
  h3_index                : 891f5227247ffff
  hub_id                  : 138
  hub_name                : Komorów
  is_hub_anchor           : False
  stop_lat                : 52.1481
  stop_lon                : 20.8114

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.9759
  stop_local_score_raw    : 2.2241

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 10218595.8427
  stop_raw_gravity        : 6960104.3165
  stop_entropy            : 0.4682

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 21.5714
  stop_routes_count       : 2
  stop_routes             : WKD, WKD ZKA
  stop_hub_share          : 0.8728

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 12196.1005
  stop_liquidity          : 14

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 657.1395

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1089x park_recreation
  > 16x micro_playground
  > 8x micro_parcel_locker
  > 6x personal_services
  > 6x sports_centre
  > 6x commercial_zone
  > 4x convenience_store
  > 4x gastronomy
  > 3x education_preschool
  > 2x pharmacy
  > 2x micro_atm
  > 2x health_clinic
  > 2x education_high_school
  > 2x social_support_mops
  > 2x industrial_zone
  > 1x post_office
  > 1x bank
  > 1x regional_rail_hub
  > 1x business_office
  > 1x place_of_worship

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - pharmacy                 : Apteka \
    - post_office              : Poczta Polska
    - micro_atm                : Euronet
    - convenience_store        : Delikatesy Tosia
    - pharmacy                 : Apteka \
    - bank                     : Bank Spółdzielczy Raszyn
    - health_clinic            : NZOZ Arka Komorów
    - convenience_store        : abc
    - regional_rail_hub        : Komorów
    - personal_services        : Szyk
```
</details>
<details><summary><b>Komorów (ID: komor | H3: 891f5227247ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Komorów
  stop_id                 : komor
  h3_index                : 891f5227247ffff
  hub_id                  : 138
  hub_name                : Komorów
  is_hub_anchor           : True
  stop_lat                : 52.1481
  stop_lon                : 20.8114

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.9759
  stop_local_score_raw    : 2.2241

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 10218595.8427
  stop_raw_gravity        : 6960104.3165
  stop_entropy            : 0.4682

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 21.5714
  stop_routes_count       : 2
  stop_routes             : WKD, WKD ZKA
  stop_hub_share          : 0.8728

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 12196.1005
  stop_liquidity          : 14

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 657.1395

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1089x park_recreation
  > 16x micro_playground
  > 8x micro_parcel_locker
  > 6x personal_services
  > 6x sports_centre
  > 6x commercial_zone
  > 4x convenience_store
  > 4x gastronomy
  > 3x education_preschool
  > 2x pharmacy
  > 2x micro_atm
  > 2x health_clinic
  > 2x education_high_school
  > 2x social_support_mops
  > 2x industrial_zone
  > 1x post_office
  > 1x bank
  > 1x regional_rail_hub
  > 1x business_office
  > 1x place_of_worship

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - pharmacy                 : Apteka \
    - post_office              : Poczta Polska
    - micro_atm                : Euronet
    - convenience_store        : Delikatesy Tosia
    - pharmacy                 : Apteka \
    - bank                     : Bank Spółdzielczy Raszyn
    - health_clinic            : NZOZ Arka Komorów
    - convenience_store        : abc
    - regional_rail_hub        : Komorów
    - personal_services        : Szyk
```
</details>
<details><summary><b>Grodzisk Maz. Kościuszki (ID: 585931 | H3: 891f52213bbffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Grodzisk Maz. Kościuszki
  stop_id                 : 585931
  h3_index                : 891f52213bbffff
  hub_id                  : 54
  hub_name                : Grodzisk Maz. Kościuszki
  is_hub_anchor           : True
  stop_lat                : 52.1066
  stop_lon                : 20.6252

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.9615
  stop_local_score_raw    : 2.0661

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 5089773.5859
  stop_raw_gravity        : 1664133.9635
  stop_entropy            : 2.0585

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 26.7857
  stop_routes_count       : 17
  stop_routes             : 0, 13, 16, 17, 21, 22, 23, 26, 28, 29, 30, 31, 32, 33, 34, 63, 82
  stop_hub_share          : 0.5350

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 9249.5960
  stop_liquidity          : 134

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 255.7521

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 382x park_recreation
  > 30x gastronomy
  > 27x specialized_retail
  > 19x personal_services
  > 15x convenience_store
  > 11x micro_atm
  > 11x micro_playground
  > 10x government_central
  > 9x health_clinic
  > 8x pharmacy
  > 8x bank
  > 8x education_high_school
  > 6x micro_parcel_locker
  > 5x commercial_zone
  > 4x culture_theatre
  > 3x post_office
  > 2x supermarket
  > 2x police_station
  > 2x social_support_mops
  > 2x shopping_mall
  > 2x place_of_worship
  > 1x regional_rail_hub
  > 1x education_preschool
  > 1x sports_centre
  > 1x industrial_zone
  > 1x marketplace

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - pharmacy                 : Farmacja 24
    - pharmacy                 : Dbam o Zdrowie
    - post_office              : Poczta Polska
    - bank                     : Millennium Bank
    - micro_atm                : Euronet
    - culture_theatre          : Kino CK
    - gastronomy               : Biesiadowo
    - gastronomy               : LOFT Food & Music
    - micro_atm                : Euronet
    - micro_atm                : Euronet
```
</details>

#### POZIOM 1: NAJSLABSZE SLUPKI FIZYCZNE MICRO (BOTTOM 5)
<details><summary><b>Góra Rzeczna (ID: 185902 | H3: 891f52aed47ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Góra Rzeczna
  stop_id                 : 185902
  h3_index                : 891f52aed47ffff
  hub_id                  : 2535
  hub_name                : Góra Rzeczna
  is_hub_anchor           : False
  stop_lat                : 52.4457
  stop_lon                : 20.7678

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.0481
  stop_local_score_raw    : -2.1743

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 88323.9403
  stop_raw_gravity        : 80473.2347
  stop_entropy            : 0.0976

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 95.1261
  stop_liquidity          : 2

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 94.8912

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x convenience_store
  > 1x micro_playground

  [WSKAZANE KONKRETNE INSTYTUCJE]
```
</details>
<details><summary><b>Huta Żabiowolska Lipowa (ID: 586270 | H3: 891f522f26bffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Huta Żabiowolska Lipowa
  stop_id                 : 586270
  h3_index                : 891f522f26bffff
  hub_id                  : 3646
  hub_name                : Huta Żabiowolska Lipowa
  is_hub_anchor           : False
  stop_lat                : 52.0220
  stop_lon                : 20.6863

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.0385
  stop_local_score_raw    : -2.1889

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.4286
  stop_routes_count       : 1
  stop_routes             : 51
  stop_hub_share          : 0.2308

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 1090.0056
  stop_liquidity          : 1

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 61.7387

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Góra Pałacowa (ID: 187601 | H3: 891f52aed07ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Góra Pałacowa
  stop_id                 : 187601
  h3_index                : 891f52aed07ffff
  hub_id                  : 2475
  hub_name                : Góra Pałacowa
  is_hub_anchor           : True
  stop_lat                : 52.4488
  stop_lon                : 20.7758

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.0289
  stop_local_score_raw    : -2.1890

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 556232.2725
  stop_raw_gravity        : 556232.2725
  stop_entropy            : -0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 96.5903
  stop_liquidity          : 2

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 16.9183

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x industrial_zone
  > 1x park_recreation

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - park_recreation          : park XVI
```
</details>
<details><summary><b>Jazgarzew Wólka Pęcherska (ID: 379702 | H3: 891f535b307ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Jazgarzew Wólka Pęcherska
  stop_id                 : 379702
  h3_index                : 891f535b307ffff
  hub_id                  : 2487
  hub_name                : Jazgarzew Wólka Pęcherska
  is_hub_anchor           : False
  stop_lat                : 52.0309
  stop_lon                : 20.9813

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.0192
  stop_local_score_raw    : -2.2980

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 1937.5427
  stop_liquidity          : 1

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 23.2923

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Jazgarzew Wólka Pęcherska (ID: 379701 | H3: 891f535b307ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Jazgarzew Wólka Pęcherska
  stop_id                 : 379701
  h3_index                : 891f535b307ffff
  hub_id                  : 2487
  hub_name                : Jazgarzew Wólka Pęcherska
  is_hub_anchor           : True
  stop_lat                : 52.0309
  stop_lon                : 20.9812

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.0096
  stop_local_score_raw    : -2.3009

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 1937.5427
  stop_liquidity          : 1

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 22.7077

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>

#### POZIOM 2: NAJWAZNIEJSZE WEZLY LOGICZNE MACRO (TOP 5 HUBOW)
<details><summary><b>HUB: Grodzisk Maz. Dw. PKP (ID: 17 | H3: 891f5221387ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Grodzisk Maz. Dw. PKP
  hub_id                  : 17
  h3_index                : 891f5221387ffff
  hub_stops_count         : 4
  hub_stops_ids           : 34165, 34165, 585919, 585989
  lat                     : 52.1102
  lon                     : 20.6221

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 100.0000
  hub_local_score_raw     : 2.1271

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 17293237.3693
  hub_raw_gravity         : 5719312.4318
  hub_entropy             : 2.0237

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 58.5714
  hub_routes_count        : 22
  hub_routes              : 0, 13, 15, 16, 17, 18, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 63, 82

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 10465.3826
  hub_liquidity           : 109

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 469.0104
```
</details>
<details><summary><b>HUB: Pruszków USC (ID: 49 | H3: 891f522762bffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Pruszków USC
  hub_id                  : 49
  h3_index                : 891f522762bffff
  hub_stops_count         : 12
  hub_stops_ids           : prusc, prusc, 419301, 419302, 624411, 624412, 1011275, 1502613, 1502614, 1502615, 1502650, 1890019
  lat                     : 52.1653
  lon                     : 20.8071

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.9788
  hub_local_score_raw     : 1.9861

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 18606974.9197
  hub_raw_gravity         : 6307331.3186
  hub_entropy             : 1.9501

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 35.7143
  hub_routes_count        : 11
  hub_routes              : 2, 4, 5, 6, 7, 10, 62, 67, 77, 78, WKD ZKA

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 8930.4955
  hub_liquidity           : 634

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 1810.8157
```
</details>
<details><summary><b>HUB: Grodzisk Maz. Kościuszki (ID: 54 | H3: 891f52213a3ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Grodzisk Maz. Kościuszki
  hub_id                  : 54
  h3_index                : 891f52213a3ffff
  hub_stops_count         : 2
  hub_stops_ids           : 585924, 585931
  lat                     : 52.1067
  lon                     : 20.6259

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.9576
  hub_local_score_raw     : 1.9528

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 9521970.4285
  hub_raw_gravity         : 3102724.4392
  hub_entropy             : 2.0689

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 50.0714
  hub_routes_count        : 17
  hub_routes              : 0, 13, 16, 17, 21, 22, 23, 26, 28, 29, 30, 31, 32, 33, 34, 63, 82

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 9249.5960
  hub_liquidity           : 136

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 455.8630
```
</details>
<details><summary><b>HUB: PKP Pruszków (ID: 47 | H3: 891f522760bffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : PKP Pruszków
  hub_id                  : 47
  h3_index                : 891f522760bffff
  hub_stops_count         : 10
  hub_stops_ids           : 4905, 34108, 34108, prusp, prusp, 490580, 624169, 1287177, 1502590, 1502591
  lat                     : 52.1679
  lon                     : 20.7987

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.9364
  hub_local_score_raw     : 1.9498

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 24348343.5853
  hub_raw_gravity         : 8583654.3417
  hub_entropy             : 1.8366

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 30.2143
  hub_routes_count        : 13
  hub_routes              : 1, 2, 5, 6, 7, 10, 60, 65, 66, 67, 77, 78, S1

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 10752.3203
  hub_liquidity           : 1163

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 1117.6291
```
</details>
<details><summary><b>HUB: Grodzisk Maz. Zondka (ID: 2798 | H3: 891f52213bbffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Grodzisk Maz. Zondka
  hub_id                  : 2798
  h3_index                : 891f52213bbffff
  hub_stops_count         : 1
  hub_stops_ids           : 586000
  lat                     : 52.1076
  lon                     : 20.6226

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.9151
  hub_local_score_raw     : 1.8748

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 9783039.7973
  hub_raw_gravity         : 2914086.2969
  hub_entropy             : 2.3572

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 37.2857
  hub_routes_count        : 20
  hub_routes              : 0, 13, 16, 17, 18, 21, 22, 23, 24, 25, 26, 28, 29, 30, 31, 32, 33, 34, 63, 82

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 10146.8048
  hub_liquidity           : 215

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 556.9256
```
</details>

---

## WROCLAW
#### DASHBOARD ASERCJI PIPELINE'U (Pelna Integralnosc Bazy)
```text
[PASS ZERO NULLS & INFS] Petla obliczeniowa wygenerowala 100% spojnych komorek.
[STATS] [PASS] Z-Score Micro VALID (Mean: 0.000, Std: 0.582)
        Rozklad Rang Slupkow (Micro): A: 331, A+: 166, B: 496, C: 664, D: 826, F: 828
[STATS] [PASS] Z-Score Macro VALID (Mean: 0.000, Std: 0.607)
        Rozklad Rang Hubow (Macro): A: 142, A+: 72, B: 214, C: 285, D: 356, F: 355
[DEMOGRAPHY] [INFO] OBSZAR AGLOMERACYJNY: +42.7% (GUS strefa aglomeracyjna: 912,971 vs Miasto rdzen: 640,000)
[PASS] POI Parquet 100% Valid (Matematyka Huffa dziala)
[PASS] POP Parquet 100% Valid
[PASS] H3 Res 8 Grid 100% Valid (2,289 komorek, 593 pustyn transportowych)
```

### Faza 0: Statystyki Ogolne i Balans Sieci
- **Slupki Fizyczne (Micro):** 3,311 slupkow
- **Wezly Logiczne (Macro Hubs):** 1,424 hubow (Wskaznik konsolidacji: 2.33 slupka/hub)
- **Populacja Strefy Transportowej (GUS 250m):** 912,971 mieszkancow
- **Transakcje Notarialne RCN:** 58,508 aktow
### Faza 1: Siatka Analityczna Uber H3 Res 8 (0.74 km2 / komorka)
- **Liczba Komorek H3 Res 8:** 2,289
- **Rynek Nieruchomosci RCN w Heksach:** Pokrycie 63.8% (1460/2289 komorek), Srednia: 5,065 PLN/m2, Mediana: 4,626 PLN/m2, Std: 4,312, Min: 11, Max: 118,691 PLN/m2
- **Demografia GUS NSP 2021 w Heksach:** Laczna ludnosc w heksach: 912,971, Srednia/heks: 398.9, Mediana: 21.0, Std: 1259.4, Max: 15,171
- **Podaz Transportu w Heksach:** Sredni Transport Score: 9.73, Max Transport Score: 100.00, Srednia odjazdow/h: 0.93, Pustynie Transportowe TDI: 593

#### TOP 5 Pustyn Transportowych (The Investment List)
| H3 Index | Lat | Lon | Populacja GUS | Odjazdy/h | TDI Score |
|---|---|---|---|---|---|
| `881e2040ddfffff` | 51.12122 | 17.03440 | 15,171 | 0.0 | **101.01** |
| `881e2040d1fffff` | 51.11907 | 17.04699 | 15,002 | 0.0 | **100.89** |
| `881e2040e3fffff` | 51.09769 | 17.00730 | 14,137 | 0.0 | **100.27** |
| `881e204003fffff` | 51.11377 | 16.95427 | 11,359 | 0.0 | **97.97** |
| `881e204057fffff` | 51.12661 | 16.96151 | 10,823 | 0.0 | **97.47** |

#### TOP 5 Biegunow Transportu (Najwyzsza Podaz)
| H3 Index | Lat | Lon | Transport Score | Odjazdy/h | Liczba Slupkow |
|---|---|---|---|---|---|
| `881e20461dfffff` | 51.17877 | 17.19143 | **100.00** | 13.1 | 12 |
| `881e2042a7fffff` | 51.12767 | 16.99662 | **100.00** | 19.7 | 13 |
| `881e2042b1fffff` | 51.13621 | 17.02906 | **100.00** | 0.0 | 17 |
| `881e204033fffff` | 51.09664 | 16.97221 | **100.00** | 36.6 | 8 |
| `881e204035fffff` | 51.09343 | 16.94971 | **100.00** | 30.3 | 10 |

#### TOP 5 Najdrozszych Heksow Mieszkaniowych RCN
| H3 Index | Lat | Lon | Mediana Ceny m2 | Liczba Transakcji |
|---|---|---|---|---|
| `881e2041bbfffff` | 51.05165 | 16.98825 | **118,691 PLN** | 22 |
| `881e20409bfffff` | 51.10727 | 17.07484 | **17,899 PLN** | 4 |
| `881e2040cbfffff` | 51.12337 | 17.02181 | **17,369 PLN** | 150 |
| `881e204731fffff` | 51.12113 | 17.11722 | **15,839 PLN** | 1 |
| `881e204197fffff` | 51.05700 | 16.99816 | **15,350 PLN** | 13 |

### Faza 2: Audyt Zbednosci TCRP Report 100 (The Axe List)
- **Zbedne Slupki (R >= 0.50 - Umiarkowana Kanibalizacja):** 50
- **Zbedne Slupki (R >= 0.70 - Rekomendacja Likwidacji):** 41
- **Zbedne Slupki (R >= 0.90 - Skrajna Zbednosc / Dubel):** 30

| Zbedny Słupek | Dominujacy Słupek | Dystans [m] | S_service | S_spatial | S_cannibal | R-Score |
|---|---|---|---|---|---|---|
| Oleśnica (#1536316, 0.2857142857142857 odj/h) | Oleśnica (#1475210, 1.0 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |
| Oleśnica Rataje (#1475088, 0.5714285714285714 odj/h) | Oleśnica Rataje (#1475099, 1.2857142857142858 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |
| Wrocław Nadodrze (#2475915, 0.5714285714285714 odj/h) | Wrocław Nadodrze (#1474703, 9.857142857142858 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |
| Wrocław Zakrzów (#1474731, 1.4285714285714286 odj/h) | Wrocław Zakrzów (#1474706, 2.4285714285714284 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |
| Wrocław Leśnica (#1474993, 3.142857142857143 odj/h) | Wrocław Leśnica (#1475006, 3.142857142857143 odj/h) | 1.0m | 1.00 | 1.00 | 1.00 | **0.9978** |

### Faza 3: Hierarchia Magnesow Miejskich POI

#### Top 20 Kategorii POI w Miescie
| Kategoria | Tier | Ilosc w Miescie | Wartosc Punktowa (W) |
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

#### TOP 10 Konkretnych Nazwanych Magnesow Miejskich (T0, T1, T2)
| Nazwa Obiektu | Kategoria POI | Tier | Waga Przyciagania (W) |
|---|---|---|---|
| **Port Lotniczy Wrocław** | `international_airport` | T0_MEGA_HUB | 213,878,203 |
| **Borowa Oleśnicka** | `national_rail_hub` | T0_MEGA_HUB | 36,742,790 |
| **Siechnice** | `national_rail_hub` | T0_MEGA_HUB | 36,742,790 |
| **Długołęka** | `national_rail_hub` | T0_MEGA_HUB | 36,742,790 |
| **Wrocław Sołtysowice** | `national_rail_hub` | T0_MEGA_HUB | 36,742,790 |
| **Wrocław Nadodrze** | `national_rail_hub` | T0_MEGA_HUB | 36,742,790 |
| **Wrocław Psie Pole** | `national_rail_hub` | T0_MEGA_HUB | 36,742,790 |
| **Wrocław Główny** | `national_rail_hub` | T0_MEGA_HUB | 36,742,790 |
| **Czernica Wrocławska** | `national_rail_hub` | T0_MEGA_HUB | 36,742,790 |
| **Stadion KP Dąb Dobroszyce** | `national_stadium` | T1_NATIONAL_MAGNET | 24,659,474 |

### Faza 4: Probki Pelnego DNA (Wszystkie 53 Metryki)

#### POZIOM 1: NAJLEPSZE SLUPKI FIZYCZNE MICRO (TOP 5)
<details><summary><b>Wrocław Główny (ID: 1474640 | H3: 891e204083bffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Wrocław Główny
  stop_id                 : 1474640
  h3_index                : 891e204083bffff
  hub_id                  : 173
  hub_name                : Wrocław Główny
  is_hub_anchor           : True
  stop_lat                : 51.0979
  stop_lon                : 17.0380

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 100.0000
  stop_local_score_raw    : 4.1636

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 4236492.1517
  stop_raw_gravity        : 2605615.1962
  stop_entropy            : 0.6259

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 21.0000
  stop_routes_count       : 25
  stop_routes             : D1, D10, D11, D12, D14, D2, D20, D3, D3/D9, D4, D4/D8, D40, D5, D6, D60, D62/D6, D64, D7, D70, D71, D8, D8/D4, D9, D90, 249555
  stop_hub_share          : 0.3712

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 11624.2797
  stop_liquidity          : 520

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 89.0630

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
    - national_rail_hub        : Wrocław Główny
    - micro_atm                : Santander
    - car_services             : Circle K
    - gastronomy               : Mały Bar u Babci Jadzi
    - pharmacy                 : Wrocławska
    - health_clinic            : Luxmed
    - convenience_store        : Żabka
    - gastronomy               : Jadłomania
    - gastronomy               : Frytkarnia Wujka Patryka
    - gastronomy               : Abradable
```
</details>
<details><summary><b>Wrocław Główny (ID: 1474738 | H3: 891e204083bffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Wrocław Główny
  stop_id                 : 1474738
  h3_index                : 891e204083bffff
  hub_id                  : 173
  hub_name                : Wrocław Główny
  is_hub_anchor           : False
  stop_lat                : 51.0979
  stop_lon                : 17.0380

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.9698
  stop_local_score_raw    : 3.5468

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 4236492.1517
  stop_raw_gravity        : 2605615.1962
  stop_entropy            : 0.6259

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 12.6429
  stop_routes_count       : 22
  stop_routes             : D1, D10, D11, D12, D14, D2, D20, D3, D30, D4, D4/D8, D5, D5/D62, D7, D7/D83, D70, D71, D8, D80, D83, D83/D7, D9/D3
  stop_hub_share          : 0.2235

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 11624.2797
  stop_liquidity          : 520

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 89.0630

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
    - national_rail_hub        : Wrocław Główny
    - micro_atm                : Santander
    - car_services             : Circle K
    - gastronomy               : Mały Bar u Babci Jadzi
    - pharmacy                 : Wrocławska
    - health_clinic            : Luxmed
    - convenience_store        : Żabka
    - gastronomy               : Jadłomania
    - gastronomy               : Frytkarnia Wujka Patryka
    - gastronomy               : Abradable
```
</details>
<details><summary><b>Wrocław Nadodrze (ID: 1474703 | H3: 891e2042b6fffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Wrocław Nadodrze
  stop_id                 : 1474703
  h3_index                : 891e2042b6fffff
  hub_id                  : 196
  hub_name                : Wrocław Nadodrze
  is_hub_anchor           : True
  stop_lat                : 51.1257
  stop_lon                : 17.0330

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.9396
  stop_local_score_raw    : 3.3950

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 8200586.6918
  stop_raw_gravity        : 4718742.8713
  stop_entropy            : 0.7379

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 9.8571
  stop_routes_count       : 11
  stop_routes             : D4/D8, D7/D80, D7/D83, D70, D8, D8/D4, D80, D80/D7, D83, D83/D7, 249555
  stop_hub_share          : 0.8790

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 8513.2136
  stop_liquidity          : 195

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 430.8453

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
    - national_rail_hub        : Wrocław Nadodrze
    - micro_atm                : Euronet
    - convenience_store        : Rabat
    - gastronomy               : Maybe Coffee
    - health_clinic            : Sensodentis
    - pharmacy                 : Dbam o Zdrowie
    - government_central       : Urząd Skarbowy Wrocław-Psie Pole
    - personal_services        : Manufaktura Piękna
    - post_office              : Urząd Pocztowy Wrocław 4
    - gastronomy               : Enklawa Cafe
```
</details>
<details><summary><b>Wrocław Główny (ID: 1474861 | H3: 891e204083bffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Wrocław Główny
  stop_id                 : 1474861
  h3_index                : 891e204083bffff
  hub_id                  : 173
  hub_name                : Wrocław Główny
  is_hub_anchor           : False
  stop_lat                : 51.0979
  stop_lon                : 17.0380

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.9094
  stop_local_score_raw    : 2.9788

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 4236492.1517
  stop_raw_gravity        : 2605615.1962
  stop_entropy            : 0.6259

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 7.7857
  stop_routes_count       : 17
  stop_routes             : D1, D11, D3/D9, D4/D8, D5, D7, D7/D80, D7/D83, D70, D71, D8, D80, D80/D7, D83, D83/D7, D9/D3, D91/D4
  stop_hub_share          : 0.1376

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 11624.2797
  stop_liquidity          : 520

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 89.0630

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
    - national_rail_hub        : Wrocław Główny
    - micro_atm                : Santander
    - car_services             : Circle K
    - gastronomy               : Mały Bar u Babci Jadzi
    - pharmacy                 : Wrocławska
    - health_clinic            : Luxmed
    - convenience_store        : Żabka
    - gastronomy               : Jadłomania
    - gastronomy               : Frytkarnia Wujka Patryka
    - gastronomy               : Abradable
```
</details>
<details><summary><b>Wrocław Kuźniki (ID: 1474792 | H3: 891e2040547ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Wrocław Kuźniki
  stop_id                 : 1474792
  h3_index                : 891e2040547ffff
  hub_id                  : 229
  hub_name                : Wrocław Kuźniki
  is_hub_anchor           : True
  stop_lat                : 51.1280
  stop_lon                : 16.9522

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.8792
  stop_local_score_raw    : 2.9587

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 2532931.9672
  stop_raw_gravity        : 1784338.7033
  stop_entropy            : 0.4195

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 7.5714
  stop_routes_count       : 2
  stop_routes             : D2, D20
  stop_hub_share          : 1.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 8740.1407
  stop_liquidity          : 37

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 425.8166

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 10x micro_playground
  > 6x convenience_store
  > 6x micro_parcel_locker
  > 6x park_recreation
  > 3x business_office
  > 3x personal_services
  > 2x pharmacy
  > 2x education_preschool
  > 2x health_clinic
  > 2x gastronomy
  > 1x regional_rail_hub
  > 1x culture_theatre
  > 1x post_office
  > 1x government_central
  > 1x micro_atm
  > 1x place_of_worship
  > 1x industrial_zone
  > 1x supermarket
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - business_office          : Cadou
    - regional_rail_hub        : Wrocław Kuźniki
    - culture_theatre          : Miejska Biblioteka Publiczna
    - convenience_store        : Żabka
    - pharmacy                 : Kuźniki
    - pharmacy                 : Sarbinowska
    - convenience_store        : Żabka
    - education_preschool      : Przedszkole FSA
    - health_clinic            : Anadent
    - personal_services        : Harmonia urody
```
</details>

#### POZIOM 1: NAJSLABSZE SLUPKI FIZYCZNE MICRO (BOTTOM 5)
<details><summary><b>Siekierowice Szkoła (ID: 223 | H3: 891e200841bffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Siekierowice Szkoła
  stop_id                 : 223
  h3_index                : 891e200841bffff
  hub_id                  : 748
  hub_name                : Siekierowice Szkoła
  is_hub_anchor           : False
  stop_lat                : 51.2676
  stop_lon                : 17.2832

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.1510
  stop_local_score_raw    : -2.6413

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 763.4014
  stop_liquidity          : 1

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 32.2370

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Siekierowice Szkoła (ID: 194 | H3: 891e200841bffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Siekierowice Szkoła
  stop_id                 : 194
  h3_index                : 891e200841bffff
  hub_id                  : 748
  hub_name                : Siekierowice Szkoła
  is_hub_anchor           : True
  stop_lat                : 51.2676
  stop_lon                : 17.2831

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.1208
  stop_local_score_raw    : -2.6455

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 763.4014
  stop_liquidity          : 1

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 30.9741

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Częstochowska (ID: 5262 | H3: 891e20431afffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Częstochowska
  stop_id                 : 5262
  h3_index                : 891e20431afffff
  hub_id                  : 734
  hub_name                : Częstochowska
  is_hub_anchor           : False
  stop_lat                : 51.1341
  stop_lon                : 16.9004

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.0906
  stop_local_score_raw    : -2.6681

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 6050.3913
  stop_raw_gravity        : 2732.4496
  stop_entropy            : 1.2143

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 18.4393
  stop_liquidity          : 1

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 157.2939

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 5x micro_parcel_locker
  > 2x micro_playground
  > 1x convenience_store
  > 1x education_preschool
  > 1x park_recreation

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store        : Żabka
    - education_preschool      : Złote Przedszkole Na Złotnikach
    - micro_parcel_locker      : Paczkomat InPost
    - micro_parcel_locker      : DPD Pickup Station
    - micro_parcel_locker      : Orlen Paczka
    - micro_parcel_locker      : DHL BOX 24/7
    - micro_parcel_locker      : Allegro One Box
```
</details>
<details><summary><b>Częstochowska (ID: 5261 | H3: 891e20431afffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Częstochowska
  stop_id                 : 5261
  h3_index                : 891e20431afffff
  hub_id                  : 734
  hub_name                : Częstochowska
  is_hub_anchor           : True
  stop_lat                : 51.1339
  stop_lon                : 16.9000

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.0604
  stop_local_score_raw    : -2.6692

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 5336.8848
  stop_raw_gravity        : 2324.2924
  stop_entropy            : 1.2961

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 18.4393
  stop_liquidity          : 1

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 178.9256

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 5x micro_parcel_locker
  > 1x convenience_store
  > 1x education_preschool
  > 1x micro_playground
  > 1x park_recreation

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store        : Żabka
    - education_preschool      : Złote Przedszkole Na Złotnikach
    - micro_parcel_locker      : Paczkomat InPost
    - micro_parcel_locker      : DPD Pickup Station
    - micro_parcel_locker      : Orlen Paczka
    - micro_parcel_locker      : DHL BOX 24/7
    - micro_parcel_locker      : Allegro One Box
```
</details>
<details><summary><b>Mękarzowice (ID: 225 | H3: 891e200a207ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Mękarzowice
  stop_id                 : 225
  h3_index                : 891e200a207ffff
  hub_id                  : 743
  hub_name                : Mękarzowice
  is_hub_anchor           : True
  stop_lat                : 51.2834
  stop_lon                : 17.2780

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.0302
  stop_local_score_raw    : -2.6780

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.0000
  stop_routes_count       : 0
  stop_routes             : 
  stop_hub_share          : 0.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 621.3162
  stop_liquidity          : 1

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 43.6339

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>

#### POZIOM 2: NAJWAZNIEJSZE WEZLY LOGICZNE MACRO (TOP 5 HUBOW)
<details><summary><b>HUB: Wrocław Główny (ID: 173 | H3: 891e204083bffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Wrocław Główny
  hub_id                  : 173
  h3_index                : 891e204083bffff
  hub_stops_count         : 9
  hub_stops_ids           : 60103, 1413380, 1474640, 1474651, 1474679, 1474738, 1474861, 1536277, 1536279
  lat                     : 51.0979
  lon                     : 17.0377

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 100.0000
  hub_local_score_raw     : 3.9288

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 17634296.7288
  hub_raw_gravity         : 10987259.3946
  hub_entropy             : 0.6050

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 56.5714
  hub_routes_count        : 35
  hub_routes              : D1, D10, D11, D12, D14, D2, D20, D3, D3/D9, D30, D4, D4/D8, D40, D5, D5/D62, D6, D60, D62/D6, D64, D7, D7/D80, D7/D83, D70, D71, D8, D8/D4, D80, D80/D7, D83, D83/D7, D9, D9/D3, D90, D91/D4, 249555

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 11619.1850
  hub_liquidity           : 525

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 329.9153
```
</details>
<details><summary><b>HUB: Wrocław Mikołajów (ID: 862 | H3: 891e2040c53ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Wrocław Mikołajów
  hub_id                  : 862
  h3_index                : 891e2040c53ffff
  hub_stops_count         : 5
  hub_stops_ids           : 58651, 1413385, 1474701, 1474726, 1475181
  lat                     : 51.1162
  lon                     : 16.9984

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.9298
  hub_local_score_raw     : 2.8646

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 13579116.2150
  hub_raw_gravity         : 5185009.4615
  hub_entropy             : 1.6189

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 15.8571
  hub_routes_count        : 15
  hub_routes              : D3, D3/D9, D30, D4/D8, D7/D80, D7/D83, D70, D8, D8/D4, D80, D80/D7, D83, D83/D7, D9/D3, 249555

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 10261.1940
  hub_liquidity           : 497

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 755.3694
```
</details>
<details><summary><b>HUB: Wrocław Nadodrze (ID: 196 | H3: 891e2042b6fffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Wrocław Nadodrze
  hub_id                  : 196
  h3_index                : 891e2042b6fffff
  hub_stops_count         : 5
  hub_stops_ids           : 59105, 1413387, 1474703, 1474728, 2475915
  lat                     : 51.1257
  lon                     : 17.0328

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.8596
  hub_local_score_raw     : 2.7207

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 41036307.0364
  hub_raw_gravity         : 23915229.1610
  hub_entropy             : 0.7159

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 11.2143
  hub_routes_count        : 11
  hub_routes              : D4/D8, D7/D80, D7/D83, D70, D8, D8/D4, D80, D80/D7, D83, D83/D7, 249555

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 8513.2136
  hub_liquidity           : 195

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 2235.8273
```
</details>
<details><summary><b>HUB: Wrocław Muchobór (ID: 254 | H3: 891e2040173ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Wrocław Muchobór
  hub_id                  : 254
  h3_index                : 891e2040173ffff
  hub_stops_count         : 5
  hub_stops_ids           : 58867, 1413386, 1474793, 1474963, 1475046
  lat                     : 51.1111
  lon                     : 16.9749

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.7893
  hub_local_score_raw     : 2.6557

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 7828655.9813
  hub_raw_gravity         : 3467444.6123
  hub_entropy             : 1.2578

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 17.5000
  hub_routes_count        : 7
  hub_routes              : D1, D10, D11, D12, D14, D2, D20

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 11661.0048
  hub_liquidity           : 86

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 38.3920
```
</details>
<details><summary><b>HUB: Wrocław Sołtysowice (ID: 203 | H3: 891e20470d3ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Wrocław Sołtysowice
  hub_id                  : 203
  h3_index                : 891e20470d3ffff
  hub_stops_count         : 6
  hub_stops_ids           : 59204, 1413397, 1474704, 1474729, 1475166, 1475214
  lat                     : 51.1425
  lon                     : 17.0835

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.7191
  hub_local_score_raw     : 2.5234

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 41658091.6275
  hub_raw_gravity         : 32706669.2209
  hub_entropy             : 0.2737

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 11.2857
  hub_routes_count        : 11
  hub_routes              : D4/D8, D7/D80, D7/D83, D70, D8, D8/D4, D80, D80/D7, D83, D83/D7, 249555

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 8371.5012
  hub_liquidity           : 8

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 281.6518
```
</details>

---

## ZIELONA-GORA
#### DASHBOARD ASERCJI PIPELINE'U (Pelna Integralnosc Bazy)
```text
[PASS ZERO NULLS & INFS] Petla obliczeniowa wygenerowala 100% spojnych komorek.
[STATS] [PASS] Z-Score Micro VALID (Mean: 0.000, Std: 0.694)
        Rozklad Rang Slupkow (Micro): A: 48, A+: 24, B: 72, C: 95, D: 119, F: 119
[STATS] [PASS] Z-Score Macro VALID (Mean: 0.000, Std: 0.686)
        Rozklad Rang Hubow (Macro): A: 26, A+: 14, B: 40, C: 53, D: 66, F: 66
[DEMOGRAPHY] [PASS] DEMOGRAFIA W NORMIE: +1.2% (GUS strefa: 141,680 vs Baza miejska: 140,000)
[PASS] POI Parquet 100% Valid (Matematyka Huffa dziala)
[PASS] POP Parquet 100% Valid
[PASS] H3 Res 8 Grid 100% Valid (376 komorek, 52 pustyn transportowych)
```

### Faza 0: Statystyki Ogolne i Balans Sieci
- **Slupki Fizyczne (Micro):** 477 slupkow
- **Wezly Logiczne (Macro Hubs):** 265 hubow (Wskaznik konsolidacji: 1.80 slupka/hub)
- **Populacja Strefy Transportowej (GUS 250m):** 141,680 mieszkancow
- **Transakcje Notarialne RCN:** 5,063 aktow
### Faza 1: Siatka Analityczna Uber H3 Res 8 (0.74 km2 / komorka)
- **Liczba Komorek H3 Res 8:** 376
- **Rynek Nieruchomosci RCN w Heksach:** Pokrycie 64.9% (244/376 komorek), Srednia: 4,969 PLN/m2, Mediana: 4,867 PLN/m2, Std: 2,563, Min: 93, Max: 10,728 PLN/m2
- **Demografia GUS NSP 2021 w Heksach:** Laczna ludnosc w heksach: 141,680, Srednia/heks: 376.8, Mediana: 1.5, Std: 1100.8, Max: 8,834
- **Podaz Transportu w Heksach:** Sredni Transport Score: 9.75, Max Transport Score: 100.00, Srednia odjazdow/h: 4.46, Pustynie Transportowe TDI: 52

#### TOP 5 Pustyn Transportowych (The Investment List)
| H3 Index | Lat | Lon | Populacja GUS | Odjazdy/h | TDI Score |
|---|---|---|---|---|---|
| `881f192f09fffff` | 51.94655 | 15.46479 | 1,089 | 0.0 | **73.38** |
| `881f192f31fffff` | 51.92256 | 15.48611 | 605 | 0.0 | **67.22** |
| `881f192f49fffff` | 51.96318 | 15.44632 | 587 | 0.0 | **66.91** |
| `881f192c39fffff` | 51.91628 | 15.57242 | 540 | 0.0 | **66.03** |
| `881f192c1dfffff` | 51.92904 | 15.57946 | 527 | 0.0 | **65.78** |

#### TOP 5 Biegunow Transportu (Najwyzsza Podaz)
| H3 Index | Lat | Lon | Transport Score | Odjazdy/h | Liczba Slupkow |
|---|---|---|---|---|---|
| `881f192e6dfffff` | 51.97746 | 15.48873 | **100.00** | 57.4 | 6 |
| `881f192f11fffff` | 51.94073 | 15.50302 | **100.00** | 91.9 | 13 |
| `881f192f1dfffff` | 51.94267 | 15.49028 | **100.00** | 55.3 | 10 |
| `881f192c09fffff` | 51.93294 | 15.55398 | **100.00** | 66.0 | 10 |
| `881f192f1bfffff` | 51.94613 | 15.51290 | **100.00** | 183.3 | 8 |

#### TOP 5 Najdrozszych Heksow Mieszkaniowych RCN
| H3 Index | Lat | Lon | Mediana Ceny m2 | Liczba Transakcji |
|---|---|---|---|---|
| `881f192d53fffff` | 51.90396 | 15.51729 | **10,728 PLN** | 4 |
| `881f192e21fffff` | 51.95889 | 15.51994 | **10,417 PLN** | 18 |
| `881f1921bbfffff` | 51.97940 | 15.47598 | **10,198 PLN** | 10 |
| `881f192d59fffff` | 51.91326 | 15.50170 | **10,164 PLN** | 8 |
| `881f192f53fffff` | 51.95542 | 15.49730 | **9,996 PLN** | 52 |

### Faza 2: Audyt Zbednosci TCRP Report 100 (The Axe List)
- **Zbedne Slupki (R >= 0.50 - Umiarkowana Kanibalizacja):** 267
- **Zbedne Slupki (R >= 0.70 - Rekomendacja Likwidacji):** 231
- **Zbedne Slupki (R >= 0.90 - Skrajna Zbednosc / Dubel):** 115

| Zbedny Słupek | Dominujacy Słupek | Dystans [m] | S_service | S_spatial | S_cannibal | R-Score |
|---|---|---|---|---|---|---|
| Ochla (#803, 0.07142857142857142 odj/h) | Ochla (#779, 1.3571428571428572 odj/h) | 2.1m | 1.00 | 1.00 | 1.00 | **0.9954** |
| Drzewna (#1030, 1.1428571428571428 odj/h) | Drzewna (#1019, 1.1428571428571428 odj/h) | 2.2m | 1.00 | 1.00 | 1.00 | **0.9950** |
| Drzewna (#1019, 1.1428571428571428 odj/h) | Drzewna (#1030, 1.1428571428571428 odj/h) | 2.2m | 1.00 | 1.00 | 1.00 | **0.9950** |
| OS. ŚLĄSKIE (#137, 5.714285714285714 odj/h) | OS. ŚLĄSKIE (#484, 5.785714285714286 odj/h) | 2.2m | 1.00 | 1.00 | 1.00 | **0.9950** |
| ZAWADZKIEGO "ZOŚKI" (#80, 4.071428571428571 odj/h) | ZAWADZKIEGO "ZOŚKI" (#1044, 4.285714285714286 odj/h) | 2.2m | 1.00 | 1.00 | 1.00 | **0.9950** |

### Faza 3: Hierarchia Magnesow Miejskich POI

#### Top 20 Kategorii POI w Miescie
| Kategoria | Tier | Ilosc w Miescie | Wartosc Punktowa (W) |
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

#### TOP 10 Konkretnych Nazwanych Magnesow Miejskich (T0, T1, T2)
| Nazwa Obiektu | Kategoria POI | Tier | Waga Przyciagania (W) |
|---|---|---|---|
| **Zielona Góra Główna** | `national_rail_hub` | T0_MEGA_HUB | 32,052,882 |
| **Szpital Uniwersytecki w Zielonej Górze** | `hospital_clinical` | T1_NATIONAL_MAGNET | 21,574,639 |
| **Stadion Żużlowy** | `national_stadium` | T1_NATIONAL_MAGNET | 19,163,571 |
| **Stadion Uniwersytetu Zielonogórskiego** | `national_stadium` | T1_NATIONAL_MAGNET | 19,163,571 |
| **Stadion MOSiR** | `national_stadium` | T1_NATIONAL_MAGNET | 19,163,571 |
| **Poliklinika - Szpital MSWiA** | `hospital_clinical` | T1_NATIONAL_MAGNET | 18,781,814 |
| **Uniwersytet Zielonogórski** | `university_campus` | T1_NATIONAL_MAGNET | 18,051,276 |
| **Uniwersytet Zielonogórski - Campus B** | `university_campus` | T1_NATIONAL_MAGNET | 18,051,276 |
| **Uniwersytet Zielonogórski - Campus A** | `university_campus` | T1_NATIONAL_MAGNET | 18,051,276 |
| **Uniwersytet Zielonogórski - Wydział Artystyczny** | `university_campus` | T1_NATIONAL_MAGNET | 18,051,276 |

### Faza 4: Probki Pelnego DNA (Wszystkie 53 Metryki)

#### POZIOM 1: NAJLEPSZE SLUPKI FIZYCZNE MICRO (TOP 5)
<details><summary><b>Dworzec Główny (ID: 11 | H3: 891f192f1a7ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Dworzec Główny
  stop_id                 : 11
  h3_index                : 891f192f1a7ffff
  hub_id                  : 200
  hub_name                : Dworzec Główny
  is_hub_anchor           : True
  stop_lat                : 51.9472
  stop_lon                : 15.5166

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 100.0000
  stop_local_score_raw    : 1.6624

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 5095990.9398
  stop_raw_gravity        : 1824093.2490
  stop_entropy            : 1.7937

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 20.6429
  stop_routes_count       : 20
  stop_routes             : 0, 1, 3, 5, 6, 8, 12, 17, 19, 20, 21, 22, 25, 26, 27, 30, 44, 101, 102, 103
  stop_hub_share          : 0.5850

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 7733.4105
  stop_liquidity          : 46

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 253.1643

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 18x park_recreation
  > 11x gastronomy
  > 9x convenience_store
  > 8x micro_playground
  > 7x specialized_retail
  > 7x micro_parcel_locker
  > 6x government_central
  > 5x pharmacy
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
    - pharmacy                 : Dbam o Zdrowie
    - convenience_store        : Mlekovitka
    - gastronomy               : Son Hao
    - gastronomy               : Kuchnia u Jasia
    - supermarket              : Kwiaciarnia
    - police_station           : Komenda Regionalna Straży Ochrony Kolei w Zielonej Górze
    - gastronomy               : Retro
    - convenience_store        : 1 Minute
    - gastronomy               : Bar Turysta
    - convenience_store        : Żabka
```
</details>
<details><summary><b>Dworzec Główny (ID: 28 | H3: 891f192f1a7ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Dworzec Główny
  stop_id                 : 28
  h3_index                : 891f192f1a7ffff
  hub_id                  : 200
  hub_name                : Dworzec Główny
  is_hub_anchor           : False
  stop_lat                : 51.9470
  stop_lon                : 15.5163

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.7904
  stop_local_score_raw    : 1.6081

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 5960706.4318
  stop_raw_gravity        : 2142889.5803
  stop_entropy            : 1.7816

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 17.8571
  stop_routes_count       : 17
  stop_routes             : 0, 1, 3, 5, 6, 8, 12, 17, 19, 20, 21, 22, 26, 27, 30, 44, 101
  stop_hub_share          : 0.5061

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 7975.2819
  stop_liquidity          : 42

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 246.0927

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 18x park_recreation
  > 12x gastronomy
  > 9x convenience_store
  > 8x micro_playground
  > 7x specialized_retail
  > 7x micro_parcel_locker
  > 6x government_central
  > 5x pharmacy
  > 4x sports_centre
  > 4x health_clinic
  > 3x supermarket
  > 2x business_office
  > 2x personal_services
  > 2x micro_atm
  > 2x industrial_zone
  > 1x police_station
  > 1x culture_theatre
  > 1x national_rail_hub
  > 1x education_high_school
  > 1x education_preschool
  > 1x social_support_mops
  > 1x bank
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - pharmacy                 : Dbam o Zdrowie
    - convenience_store        : Mlekovitka
    - gastronomy               : Son Hao
    - gastronomy               : Kuchnia u Jasia
    - supermarket              : Kwiaciarnia
    - police_station           : Komenda Regionalna Straży Ochrony Kolei w Zielonej Górze
    - gastronomy               : Retro
    - convenience_store        : 1 Minute
    - gastronomy               : Bar Turysta
    - convenience_store        : Żabka
```
</details>
<details><summary><b>Centrum (ID: 10 | H3: 891f192f117ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Centrum
  stop_id                 : 10
  h3_index                : 891f192f117ffff
  hub_id                  : 140
  hub_name                : Centrum
  is_hub_anchor           : True
  stop_lat                : 51.9428
  stop_lon                : 15.5074

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.5807
  stop_local_score_raw    : 1.5448

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 10933759.8245
  stop_raw_gravity        : 4474951.3649
  stop_entropy            : 1.4433

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 13.4286
  stop_routes_count       : 11
  stop_routes             : 0, 5, 6, 8, 12, 17, 19, 20, 26, 27, 44
  stop_hub_share          : 0.5449

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 7501.6230
  stop_liquidity          : 60

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 412.9081

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
    - bank                     : Millennium Bank
    - micro_atm                : Bankomat BZ WBK
    - bank                     : Millennium Bank Przedsiębiorstwa
    - convenience_store        : Spar Express
    - convenience_store        : Żabka
    - gastronomy               : La Tulipe Noire
    - business_office          : Port2000
    - supermarket              : Biedronka
    - bank                     : PKO BP
    - gastronomy               : Heban
```
</details>
<details><summary><b>Centrum (ID: 29 | H3: 891f192f1abffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Centrum
  stop_id                 : 29
  h3_index                : 891f192f1abffff
  hub_id                  : 140
  hub_name                : Centrum
  is_hub_anchor           : False
  stop_lat                : 51.9432
  stop_lon                : 15.5081

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.3711
  stop_local_score_raw    : 1.5328

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 9059267.2790
  stop_raw_gravity        : 3645056.7021
  stop_entropy            : 1.4854

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 13.2857
  stop_routes_count       : 11
  stop_routes             : 0, 5, 6, 8, 12, 17, 19, 20, 26, 27, 44
  stop_hub_share          : 0.5391

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 7813.2251
  stop_liquidity          : 62

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 415.2721

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 62x specialized_retail
  > 53x gastronomy
  > 27x personal_services
  > 17x bank
  > 16x government_central
  > 16x park_recreation
  > 14x convenience_store
  > 9x micro_playground
  > 7x micro_atm
  > 6x pharmacy
  > 6x business_office
  > 5x culture_theatre
  > 5x shopping_mall
  > 5x place_of_worship
  > 4x health_clinic
  > 4x education_preschool
  > 4x commercial_zone
  > 3x supermarket
  > 1x social_support_mops
  > 1x micro_parcel_locker
  > 1x post_office
  > 1x education_high_school
  > 1x university_campus
  > 1x car_services
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - bank                     : Millennium Bank
    - micro_atm                : Bankomat BZ WBK
    - bank                     : Millennium Bank Przedsiębiorstwa
    - pharmacy                 : Dbam o Zdrowie
    - convenience_store        : Spar Express
    - gastronomy               : Kuchnia u Jasia
    - convenience_store        : Żabka
    - gastronomy               : La Tulipe Noire
    - business_office          : Port2000
    - gastronomy               : Niger
```
</details>
<details><summary><b>Staszica (ID: 12 | H3: 891f192f1a7ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Staszica
  stop_id                 : 12
  h3_index                : 891f192f1a7ffff
  hub_id                  : 39
  hub_name                : Staszica
  is_hub_anchor           : True
  stop_lat                : 51.9462
  stop_lon                : 15.5197

[OCENA STOP DNA & RANKING]
  stop_grade              : A+
  stop_percentile         : 99.1614
  stop_local_score_raw    : 1.3562

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 3655345.9639
  stop_raw_gravity        : 1142016.3660
  stop_entropy            : 2.2008

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 11.7857
  stop_routes_count       : 9
  stop_routes             : 0, 1, 5, 8, 19, 21, 22, 44, 103
  stop_hub_share          : 0.5093

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 7788.3272
  stop_liquidity          : 52

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 368.2466

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
    - convenience_store        : Mlekovitka
    - gastronomy               : Son Hao
    - supermarket              : Kwiaciarnia
    - police_station           : Komenda Regionalna Straży Ochrony Kolei w Zielonej Górze
    - gastronomy               : Retro
    - convenience_store        : 1 Minute
    - gastronomy               : Bar Turysta
    - convenience_store        : Żabka
    - convenience_store        : Żabka
    - convenience_store        : Żabka
```
</details>

#### POZIOM 1: NAJSLABSZE SLUPKI FIZYCZNE MICRO (BOTTOM 5)
<details><summary><b>Leśniczówka (ID: 721 | H3: 891f192ca57ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Leśniczówka
  stop_id                 : 721
  h3_index                : 891f192ca57ffff
  hub_id                  : 207
  hub_name                : Leśniczówka
  is_hub_anchor           : False
  stop_lat                : 51.8910
  stop_lon                : 15.6229

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 1.0482
  stop_local_score_raw    : -2.0936

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.3571
  stop_routes_count       : 1
  stop_routes             : 30
  stop_hub_share          : 0.5000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 5531.5663
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 5.5087

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Leśniczówka (ID: 718 | H3: 891f192ca57ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Leśniczówka
  stop_id                 : 718
  h3_index                : 891f192ca57ffff
  hub_id                  : 207
  hub_name                : Leśniczówka
  is_hub_anchor           : True
  stop_lat                : 51.8910
  stop_lon                : 15.6230

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.8386
  stop_local_score_raw    : -2.0938

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.3571
  stop_routes_count       : 1
  stop_routes             : 30
  stop_hub_share          : 0.5000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 5531.5663
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 5.4913

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Kiełpin las (ID: 870 | H3: 891e2692ddbffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Kiełpin las
  stop_id                 : 870
  h3_index                : 891e2692ddbffff
  hub_id                  : 239
  hub_name                : Kiełpin las
  is_hub_anchor           : True
  stop_lat                : 51.8561
  stop_lon                : 15.5066

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.5241
  stop_local_score_raw    : -2.2909

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.2857
  stop_routes_count       : 1
  stop_routes             : 27
  stop_hub_share          : 0.5000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 5531.5663
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Kiełpin las (ID: 871 | H3: 891e2692ddbffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Kiełpin las
  stop_id                 : 871
  h3_index                : 891e2692ddbffff
  hub_id                  : 239
  hub_name                : Kiełpin las
  is_hub_anchor           : False
  stop_lat                : 51.8561
  stop_lon                : 15.5064

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.5241
  stop_local_score_raw    : -2.2909

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 0.0000
  stop_raw_gravity        : 0.0000
  stop_entropy            : 0.0000

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.2857
  stop_routes_count       : 1
  stop_routes             : 27
  stop_hub_share          : 0.5000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 5531.5663
  stop_liquidity          : 0

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektow w okolicy 500m.
```
</details>
<details><summary><b>Elektrociepłownia (ID: 115 | H3: 891f192f573ffff)</b></summary>

```text

[IDENTYFIKACJA SLUPKA]
  stop_name               : Elektrociepłownia
  stop_id                 : 115
  h3_index                : 891f192f573ffff
  hub_id                  : 146
  hub_name                : Elektrociepłownia
  is_hub_anchor           : True
  stop_lat                : 51.9525
  stop_lon                : 15.4873

[OCENA STOP DNA & RANKING]
  stop_grade              : F
  stop_percentile         : 0.2096
  stop_local_score_raw    : -2.3185

[FILAR 1: INFRASTRUKTURA & POI]
  stop_infra_score        : 3315992.9183
  stop_raw_gravity        : 1507363.3153
  stop_entropy            : 1.1999

[FILAR 2: TRANSPORT GTFS]
  stop_departures_h       : 0.2143
  stop_routes_count       : 3
  stop_routes             : 2, 3, 6
  stop_hub_share          : 1.0000

[FILAR 3: NIERUCHOMOSCI RCN]
  stop_market_val         : 27.6539
  stop_liquidity          : 10

[FILAR 4: GESTOSC POPULACJI GUS]
  stop_pop_val            : 5.2969

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
    - specialized_retail       : JYSK
    - specialized_retail       : Black Red White
    - specialized_retail       : Derby Jeans
    - specialized_retail       : Media Expert
    - gastronomy               : Flamingo
    - specialized_retail       : Pepco
    - specialized_retail       : Abra Meble
    - gastronomy               : Nova Shusi
    - specialized_retail       : Vox
    - car_services             : LD Auto Service S.C.
```
</details>

#### POZIOM 2: NAJWAZNIEJSZE WEZLY LOGICZNE MACRO (TOP 5 HUBOW)
<details><summary><b>HUB: Dworzec Główny (ID: 200 | H3: 891f192f1a7ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Dworzec Główny
  hub_id                  : 200
  h3_index                : 891f192f1a7ffff
  hub_stops_count         : 4
  hub_stops_ids           : 11, 28, 111, 460
  lat                     : 51.9472
  lon                     : 15.5166

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 100.0000
  hub_local_score_raw     : 1.5749

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 11047133.6960
  hub_raw_gravity         : 3767781.0192
  hub_entropy             : 1.9320

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 35.2857
  hub_routes_count        : 20
  hub_routes              : 0, 1, 3, 5, 6, 8, 12, 17, 19, 20, 21, 22, 25, 26, 27, 30, 44, 101, 102, 103

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 7808.9819
  hub_liquidity           : 50

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 550.3326
```
</details>
<details><summary><b>HUB: Centrum (ID: 140 | H3: 891f192f117ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Centrum
  hub_id                  : 140
  h3_index                : 891f192f117ffff
  hub_stops_count         : 2
  hub_stops_ids           : 10, 29
  lat                     : 51.9430
  lon                     : 15.5078

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.6226
  hub_local_score_raw     : 1.5096

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 19944016.5119
  hub_raw_gravity         : 8056148.1659
  hub_entropy             : 1.4756

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 24.6429
  hub_routes_count        : 11
  hub_routes              : 0, 5, 6, 8, 12, 17, 19, 20, 26, 27, 44

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 7660.4555
  hub_liquidity           : 67

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 814.9750
```
</details>
<details><summary><b>HUB: Staszica (ID: 39 | H3: 891f192f1a7ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Staszica
  hub_id                  : 39
  h3_index                : 891f192f1a7ffff
  hub_stops_count         : 2
  hub_stops_ids           : 12, 27
  lat                     : 51.9457
  lon                     : 15.5200

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 99.2453
  hub_local_score_raw     : 1.3793

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 7947218.7598
  hub_raw_gravity         : 2486664.5460
  hub_entropy             : 2.1959

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 23.1429
  hub_routes_count        : 9
  hub_routes              : 0, 1, 5, 8, 19, 21, 22, 44, 103

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 7805.4638
  hub_liquidity           : 53

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 801.2603
```
</details>
<details><summary><b>HUB: Monte Cassino (ID: 213 | H3: 891f192f397ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Monte Cassino
  hub_id                  : 213
  h3_index                : 891f192f397ffff
  hub_stops_count         : 2
  hub_stops_ids           : 129, 146
  lat                     : 51.9319
  lon                     : 15.4849

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 98.8679
  hub_local_score_raw     : 1.2526

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 9715511.2242
  hub_raw_gravity         : 3505241.2548
  hub_entropy             : 1.7717

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 14.4286
  hub_routes_count        : 7
  hub_routes              : 0, 2, 8, 9, 10, 12, 14

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 7233.7260
  hub_liquidity           : 80

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 2041.3597
```
</details>
<details><summary><b>HUB: Wiśniowa (ID: 35 | H3: 891f192f3b3ffff)</b></summary>

```text

[IDENTYFIKACJA WEZLA]
  hub_name                : Wiśniowa
  hub_id                  : 35
  h3_index                : 891f192f3b3ffff
  hub_stops_count         : 2
  hub_stops_ids           : 128, 147
  lat                     : 51.9289
  lon                     : 15.4930

[OCENA WEZLA & RANKING]
  hub_grade               : A+
  hub_percentile          : 98.4906
  hub_local_score_raw     : 1.2457

[FILAR 1: INFRASTRUKTURA & POI]
  hub_infra_score         : 6493408.0044
  hub_raw_gravity         : 2289331.2635
  hub_entropy             : 1.8364

[FILAR 2: TRANSPORT GTFS]
  hub_departures_h        : 14.4286
  hub_routes_count        : 7
  hub_routes              : 0, 2, 8, 9, 10, 12, 14

[FILAR 3: NIERUCHOMOSCI RCN]
  hub_market_val          : 7847.0899
  hub_liquidity           : 118

[FILAR 4: GESTOSC POPULACJI GUS]
  hub_pop_val             : 2483.5700
```
</details>

---
