# RAPORT W OPARCIU O ASERCJE W PEŁNI SYSTEMOWE DNA - 2026-03-22 22:12

---
## PODSUMOWANIE RYGORYSTYCZNE DLA POLSKI
```text
Przepróbkowanych Miast    : 30
Krytyczne Nulle / Inf     : 0 FAILURES
Łączna Walidacja Populacji: 16,867,234 osób (Siatka 250m GUS)
Ilość Transakcji RCN Pkt  : 1,104,389 aktów notarialnych
Obiekty Infr. OSM BAZA    : 10,640,807 zweryfikowanych geometrii
```
---


## WALIDACJA ZRZUTU KRAJOWEGO (NATIONAL STITCHING)
```text
[❌ KRYTYCZNY BLAD ODCZYTU MASTER] 'city_context'
```
---

## BIALYSTOK
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: 0.000, Std: 0.665)
     Rozkład Kartek (unikalne Huby): A: 2, A+: 1, B: 3, C: 4, D: 5, F: 4
[👥 BAZA LUDNOŚCI GUS] ❌ OSTRZEŻENIE DEMOGRAFICZNE: Odchylenie 32.2%. GUS: 383,482 vs Baza: 290,000
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
```

### Faza 0: Statystyki ogólne
- **Populacja Miasta:** 383,482 (GUS Grid)
- **Transakcje RCN:** 34,402

### Faza III: Top 20 POI (Miasto)

| Kategoria | Tier | Ilość w Mieście | Wartość Punktowa (W) |
|---|---|---|---|
| `national_rail_hub` | T0_MEGA_HUB | 1 | 2,080,701,331 |
| `regional_rail_hub` | T1_NATIONAL_MAGNET | 4 | 1,006,864,637 |
| `hospital_clinical` | T1_NATIONAL_MAGNET | 11 | 182,371,115 |
| `national_stadium` | T1_NATIONAL_MAGNET | 6 | 167,843,970 |
| `university_campus` | T1_NATIONAL_MAGNET | 34 | 118,744,907 |
| `industrial_zone` | T2_STRATEGIC_HUB | 239 | 19,627,209 |
| `commercial_zone` | T2_STRATEGIC_HUB | 57 | 18,810,179 |
| `shopping_mall` | T2_STRATEGIC_HUB | 37 | 15,402,536 |
| `logistics_hub` | T2_STRATEGIC_HUB | 1 | 14,454,951 |
| `student_dormitory` | T2_STRATEGIC_HUB | 9 | 13,556,595 |
| `supermarket` | T2_STRATEGIC_HUB | 145 | 9,960,368 |
| `government_central` | T2_STRATEGIC_HUB | 104 | 9,488,625 |
| `business_office` | T2_STRATEGIC_HUB | 160 | 8,425,540 |
| `marketplace` | T3_LOCAL_CORE | 12 | 1,604,025 |
| `education_high_school` | T3_LOCAL_CORE | 136 | 1,559,941 |
| `sports_centre` | T3_LOCAL_CORE | 51 | 1,070,512 |
| `social_support_mops` | T3_LOCAL_CORE | 42 | 1,024,977 |
| `culture_theatre` | T3_LOCAL_CORE | 42 | 813,141 |
| `health_clinic` | T3_LOCAL_CORE | 205 | 701,179 |
| `park_recreation` | T4_DAILY_SERVICE | 104 | 152,062 |

### Faza IV: Próbki Pełnego DNA 100% (Zobacz szczegóły POI!)

#### NAJLEPSZE PRZYSTANKI (TOP 5)
<details><summary><b> al. Piłsudskiego/Rzeka Biała DP (891f51334a7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             :  al. Piłsudskiego/Rzeka Biała DP
  stop_id               : 7
  h3_index              : 891f51334a7ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.9335

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 174499022.3594

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 227.8571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6848.6991

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 30.7690

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 69x gastronomy
  > 40x specialized_retail
  > 20x convenience_store
  > 15x personal_services
  > 11x health_clinic
  > 11x micro_playground
  > 11x bank
  > 10x place_of_worship
  > 9x government_central
  > 8x micro_parcel_locker
  > 7x pharmacy
  > 7x micro_atm
  > 7x park_recreation
  > 4x culture_theatre
  > 4x education_preschool
  > 4x education_high_school
  > 3x post_office
  > 3x business_office
  > 3x sports_centre
  > 3x social_support_mops
  > 3x university_campus
  > 2x supermarket
  > 2x hospital_clinical
  > 2x shopping_mall

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy             : Sioux
    - gastronomy             : Prima Savona
    - gastronomy             : Patio
    - government_central     : Komenda Miejska Państwowej Straży Pożarnej w Białymstoku
    - place_of_worship       : Kaplica pw. Matki Bożej Częstochowskiej
    - place_of_worship       : Kaplica pw. Świętej Rodziny
    - convenience_store      : Lewiatan
    - gastronomy             : Bar Grodno
    - gastronomy             : Trójkąty Kwadraty
    - gastronomy             : Tokaj
    - personal_services      : Gabinet kosmetyczny
    - gastronomy             : Bar u Greka
```
</details>
<details><summary><b> H. Sienkiewicza/Ryska DP (891f51a9b67ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             :  H. Sienkiewicza/Ryska DP
  stop_id               : 12
  h3_index              : 891f51a9b67ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.9335

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 174499022.3594

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 227.8571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6848.6991

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 30.7690

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
    - supermarket            : Biedronka
    - place_of_worship       : Kaplica pw. Matki Bożej Częstochowskiej
    - car_services           : Circle K
    - pharmacy               : Dr. Max
    - micro_atm              : PKO BP
    - gastronomy             : Super King
    - personal_services      : Mirosław Konopko
    - personal_services      : M Studio
    - personal_services      : Rossmann
    - convenience_store      : Delikatesy u Chłopców
    - convenience_store      : Chorten
    - post_office            : Poczta Polska - UP Białystok 25
```
</details>
<details><summary><b> Wasilkowska/Gen. W. Andersa DW (891f51a9b37ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             :  Wasilkowska/Gen. W. Andersa DW
  stop_id               : 14
  h3_index              : 891f51a9b37ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.9335

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 174499022.3594

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 227.8571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6848.6991

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 30.7690

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 5x convenience_store
  > 4x micro_parcel_locker
  > 4x gastronomy
  > 3x micro_playground
  > 3x education_preschool
  > 2x micro_atm
  > 2x car_services
  > 2x pharmacy
  > 2x education_high_school
  > 2x health_clinic
  > 2x supermarket
  > 2x personal_services
  > 1x business_office
  > 1x post_office
  > 1x specialized_retail
  > 1x government_central
  > 1x park_recreation
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - business_office        : CORAL
    - car_services           : Stacja kontroli pojazdów
    - convenience_store      : Chorten
    - post_office            : Poczta Polska - UP Białystok 25
    - micro_atm              : PKO PB
    - specialized_retail     : Komis meblowy Rocco-Meble
    - pharmacy               : Dbam o Zdrowie
    - education_high_school  : Niepubliczna Szkoła Podstawowa
    - micro_parcel_locker    : Paczkomat InPost
    - micro_parcel_locker    : Paczkomat InPost
    - micro_parcel_locker    : Paczkomat InPost
    - gastronomy             : Mozaika
```
</details>
<details><summary><b> W. Raginisa/Trawiasta DW (891f51a9967ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             :  W. Raginisa/Trawiasta DW
  stop_id               : 10
  h3_index              : 891f51a9967ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.9335

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 174499022.3594

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 227.8571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6848.6991

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 30.7690

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 3x supermarket
  > 2x convenience_store
  > 2x micro_parcel_locker
  > 2x place_of_worship
  > 1x post_office
  > 1x micro_playground
  > 1x personal_services
  > 1x specialized_retail
  > 1x car_services

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - post_office            : Filia Urzędu Pocztowego Białystok 25
    - supermarket            : Biedronka
    - convenience_store      : Żabka
    - personal_services      : Rossmann
    - specialized_retail     : Pepco
    - micro_parcel_locker    : Paczkomat InPost
    - micro_parcel_locker    : Paczkomat InPost
    - convenience_store      : Chorten
    - place_of_worship       : Cerkiew Mądrości Bożej
    - supermarket            : Tak-Tu
    - place_of_worship       : Kaplica pw. Chrystusa Zbawiciela
    - car_services           : Auto-Serwis Hodźko
```
</details>
<details><summary><b>Raginisa/Ogródki Działkowe (891f51324d7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Raginisa/Ogródki Działkowe
  stop_id               : 39
  h3_index              : 891f51324d7ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.9335

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 174499022.3594

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 227.8571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6848.6991

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 30.7690

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 3x convenience_store
  > 1x car_services
  > 1x micro_parcel_locker

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - car_services           : Stacja Paliw LPG \
    - micro_parcel_locker    : Appkomat InPost
    - convenience_store      : Żabka
    - convenience_store      : Lewiatan
    - convenience_store      : Lewiatan
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Fasty (891f51a9663ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Fasty
  stop_id               : 24067
  h3_index              : 891f51a9663ffff
  hub_id                : 9

[OCENA Z-SCORE & RANK]
  grade                 : D
  local_percentile      : 26.3158
  local_score_raw       : -0.5611

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6811.5942

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 5.9032

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Hołówki Duże (891f513862fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Hołówki Duże
  stop_id               : 24380
  h3_index              : 891f513862fffff
  hub_id                : 10

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 21.0526
  local_score_raw       : -0.6837

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6811.5942

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1.5896

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Bojary (891f510ed57ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Bojary
  stop_id               : 24554
  h3_index              : 891f510ed57ffff
  hub_id                : 6

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 15.7895
  local_score_raw       : -0.7101

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6811.5942

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1.0973

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Zimnochy (891f5138243ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Zimnochy
  stop_id               : 24398
  h3_index              : 891f5138243ffff
  hub_id                : 17

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 10.5263
  local_score_raw       : -0.7761

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6811.5942

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 0.2362

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Dobrzyniewo Duże (891f511497bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Dobrzyniewo Duże
  stop_id               : 24075
  h3_index              : 891f511497bffff
  hub_id                : 8

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 5.2632
  local_score_raw       : -0.7817

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6811.5942

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 0.1828

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>

---

## BYDGOSZCZ
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: 0.000, Std: 0.568)
     Rozkład Kartek (unikalne Huby): A: 2, A+: 2, B: 3, C: 5, D: 6, F: 5
[👥 BAZA LUDNOŚCI GUS] ✅ DEMOGRAFIA OK (Odchylenie zaledwie 18.8%)
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
```

### Faza 0: Statystyki ogólne
- **Populacja Miasta:** 403,938 (GUS Grid)
- **Transakcje RCN:** 11,410

### Faza III: Top 20 POI (Miasto)

| Kategoria | Tier | Ilość w Mieście | Wartość Punktowa (W) |
|---|---|---|---|
| `international_airport` | T0_MEGA_HUB | 1 | 12,106,594,904 |
| `national_rail_hub` | T0_MEGA_HUB | 1 | 2,106,473,582 |
| `regional_rail_hub` | T1_NATIONAL_MAGNET | 8 | 1,002,806,887 |
| `hospital_clinical` | T1_NATIONAL_MAGNET | 19 | 196,946,089 |
| `national_stadium` | T1_NATIONAL_MAGNET | 9 | 171,677,673 |
| `university_campus` | T1_NATIONAL_MAGNET | 61 | 165,747,436 |
| `industrial_zone` | T2_STRATEGIC_HUB | 1210 | 16,139,303 |
| `commercial_zone` | T2_STRATEGIC_HUB | 318 | 14,957,834 |
| `shopping_mall` | T2_STRATEGIC_HUB | 25 | 13,516,448 |
| `logistics_hub` | T2_STRATEGIC_HUB | 4 | 13,103,376 |
| `supermarket` | T2_STRATEGIC_HUB | 148 | 10,382,469 |
| `government_central` | T2_STRATEGIC_HUB | 78 | 9,965,567 |
| `business_office` | T2_STRATEGIC_HUB | 45 | 8,220,721 |
| `education_high_school` | T3_LOCAL_CORE | 157 | 1,591,407 |
| `marketplace` | T3_LOCAL_CORE | 13 | 1,402,277 |
| `sports_centre` | T3_LOCAL_CORE | 121 | 1,262,538 |
| `social_support_mops` | T3_LOCAL_CORE | 28 | 1,244,044 |
| `culture_theatre` | T3_LOCAL_CORE | 39 | 942,999 |
| `health_clinic` | T3_LOCAL_CORE | 143 | 860,993 |
| `education_preschool` | T4_DAILY_SERVICE | 111 | 131,870 |

### Faza IV: Próbki Pełnego DNA 100% (Zobacz szczegóły POI!)

#### NAJLEPSZE PRZYSTANKI (TOP 5)
<details><summary><b>Bydgoszcz Leśna (891f0bada0bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Bydgoszcz Leśna
  stop_id               : 18374
  h3_index              : 891f0bada0bffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.6055

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 16157841.1318

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 176.9286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5782.5426

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 2.9194

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 11x park_recreation
  > 5x car_services
  > 4x health_clinic
  > 3x pharmacy
  > 3x micro_parcel_locker
  > 3x personal_services
  > 3x industrial_zone
  > 2x shopping_mall
  > 2x micro_atm
  > 2x education_preschool
  > 1x gastronomy
  > 1x convenience_store
  > 1x university_campus
  > 1x micro_playground
  > 1x commercial_zone
  > 1x hospital_clinical

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - shopping_mall          : Kier
    - gastronomy             : Cukiernia Staropolska
    - pharmacy               : Im. Ojca Pio
    - shopping_mall          : BBS
    - car_services           : Renault Uni-car
    - pharmacy               : Gemini
    - convenience_store      : Żabka
    - micro_parcel_locker    : Paczkomat InPost
    - personal_services      : Szufelka
    - micro_atm              : PKO BP
    - micro_parcel_locker    : Paczkomat InPost
    - pharmacy               : Doz Apteka. Dbam O Zdrowie. Leśna
```
</details>
<details><summary><b>Bydgoszcz Bielawy (891f0b37413ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Bydgoszcz Bielawy
  stop_id               : 16725
  h3_index              : 891f0b37413ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.6055

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 16157841.1318

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 176.9286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5782.5426

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 2.9194

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 13x micro_playground
  > 11x industrial_zone
  > 8x park_recreation
  > 6x micro_parcel_locker
  > 5x commercial_zone
  > 4x health_clinic
  > 4x sports_centre
  > 3x personal_services
  > 3x car_services
  > 2x gastronomy
  > 2x micro_atm
  > 2x business_office
  > 2x education_preschool
  > 1x convenience_store
  > 1x education_high_school
  > 1x place_of_worship

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - health_clinic          : Trzaska Stomatologia
    - personal_services      : U Agaty
    - gastronomy             : Bistro Do-Syta
    - car_services           : Mechanika Pojazdowa Gackowski
    - car_services           : Auto-Diesel
    - micro_atm              : PKO BP
    - personal_services      : Klaudia
    - personal_services      : bella lash
    - health_clinic          : Stomatologia Bart-Dental
    - micro_atm              : Euronet
    - micro_parcel_locker    : Paczkomat InPost
    - micro_parcel_locker    : Allegro One Box
```
</details>
<details><summary><b>Bydgoszcz Wschód (891f0b37557ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Bydgoszcz Wschód
  stop_id               : 16717
  h3_index              : 891f0b37557ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.6055

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 16157841.1318

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 176.9286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5782.5426

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 2.9194

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 4x industrial_zone
  > 4x commercial_zone
  > 1x regional_rail_hub
  > 1x gastronomy
  > 1x education_high_school
  > 1x car_services
  > 1x convenience_store

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - regional_rail_hub      : Bydgoszcz Wschód
    - gastronomy             : Subway
    - education_high_school  : Branżowa Szkoła I Stopnia \
    - car_services           : Amic
    - industrial_zone        : Bydgoskie Zakłady Sklejek \
    - industrial_zone        : CitoNet-Bydgoszcz Sp. z o.o.
    - industrial_zone        : Żegluga Bydgoska
    - commercial_zone        : ICF Bydgoszcz
```
</details>
<details><summary><b>Bydgoszcz Brdyujście (891f0b362c3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Bydgoszcz Brdyujście
  stop_id               : 16741
  h3_index              : 891f0b362c3ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.6055

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 16157841.1318

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 176.9286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5782.5426

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 2.9194

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 12x specialized_retail
  > 4x micro_atm
  > 4x commercial_zone
  > 3x car_services
  > 3x micro_parcel_locker
  > 3x gastronomy
  > 3x personal_services
  > 1x supermarket
  > 1x health_clinic
  > 1x business_office
  > 1x post_office
  > 1x bank
  > 1x pharmacy
  > 1x shopping_mall
  > 1x industrial_zone
  > 1x university_campus
  > 1x park_recreation

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - car_services           : Auchan
    - supermarket            : Auchan
    - micro_atm              : Bankomat BZ WBK
    - micro_atm              : Bankomat Cash4You
    - car_services           : AIM Serwis
    - micro_parcel_locker    : Paczkomat InPost
    - business_office        : Syneo.pl
    - gastronomy             : Cukiernia Sowa
    - specialized_retail     : Monnari
    - specialized_retail     : RTV Euro AGD
    - specialized_retail     : Pepco
    - micro_parcel_locker    : Paczkomat InPost
```
</details>
<details><summary><b>Bydgoszcz Politechnika (891f0b3604fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Bydgoszcz Politechnika
  stop_id               : 16758
  h3_index              : 891f0b3604fffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.6055

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 16157841.1318

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 176.9286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5782.5426

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 2.9194

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 2x micro_atm
  > 2x micro_parcel_locker
  > 2x micro_playground
  > 1x culture_theatre
  > 1x health_clinic
  > 1x supermarket
  > 1x gastronomy
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : Pekao
    - micro_atm              : PKO BP
    - culture_theatre        : Regionalne Centrum Innowacyjności
    - health_clinic          : Punkt szczepień
    - micro_parcel_locker    : Paczkomat InPost
    - micro_parcel_locker    : Allegro One Box
    - supermarket            : Biedronka
    - gastronomy             : Chillout II
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Wudzyn (891f0ba54bbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Wudzyn
  stop_id               : 16535
  h3_index              : 891f0ba54bbffff
  hub_id                : 20

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 21.7391
  local_score_raw       : -0.2810

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 889378.3041

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 1.3571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 2350.2143

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 30.2540

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x convenience_store
  > 1x micro_parcel_locker
  > 1x pharmacy
  > 1x micro_playground
  > 1x industrial_zone
  > 1x education_high_school

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_parcel_locker    : Paczkomat InPost
    - pharmacy               : Lawenda
    - education_high_school  : SP Wudzyn
```
</details>
<details><summary><b>Bydgoszcz Błonie (891f0b32e6fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Bydgoszcz Błonie
  stop_id               : 258924
  h3_index              : 891f0b32e6fffff
  hub_id                : 2

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 17.3913
  local_score_raw       : -0.2953

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 1543360.3107

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 4268.1240

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 15.5244

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 5x micro_playground
  > 4x car_services
  > 3x micro_parcel_locker
  > 3x industrial_zone
  > 2x supermarket
  > 2x education_preschool
  > 1x micro_atm
  > 1x personal_services
  > 1x health_clinic
  > 1x business_office
  > 1x shopping_mall
  > 1x gastronomy
  > 1x park_recreation

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : Euronet
    - micro_parcel_locker    : Paczkomat InPost
    - supermarket            : Biedronka
    - personal_services      : Bellissima
    - health_clinic          : Grzegorzewicz
    - business_office        : Premia
    - micro_parcel_locker    : Paczkomat InPost
    - car_services           : Serwis Auto-Moto
    - car_services           : Auto Serwis Marlen
    - car_services           : Blacharstwo Lakiernictwo Jarosław Rybarczyk
    - car_services           : Naprawa felg Mirosław Klewicz
    - micro_parcel_locker    : Appkomat InPost
```
</details>
<details><summary><b>Ostromecko (891f0b36c7bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Ostromecko
  stop_id               : 18598
  h3_index              : 891f0b36c7bffff
  hub_id                : 16

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 13.0435
  local_score_raw       : -0.3555

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 259661.9488

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 1.0714

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 2823.5294

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 22.5860

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 2x gastronomy
  > 2x convenience_store
  > 1x pharmacy
  > 1x micro_parcel_locker
  > 1x education_high_school
  > 1x park_recreation
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store      : Żabka
    - pharmacy               : Punkt Apteczny
    - micro_parcel_locker    : Paczkomat InPost
    - gastronomy             : Restauracja Ostromecka
```
</details>
<details><summary><b>Stronno (891f0ba52c3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Stronno
  stop_id               : 16527
  h3_index              : 891f0ba52c3ffff
  hub_id                : 18

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 8.6957
  local_score_raw       : -0.9827

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 1.3571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 4268.1240

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 6.0877

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Chmielniki Bydgoskie (891f0b20593ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Chmielniki Bydgoskie
  stop_id               : 19075
  h3_index              : 891f0b20593ffff
  hub_id                : 12

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 4.3478
  local_score_raw       : -1.4619

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0633

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 4268.1240

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 0.2623

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>

---

## CZESTOCHOWA
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: 0.000, Std: 0.554)
     Rozkład Kartek (unikalne Huby): A: 1, A+: 1, B: 1, C: 2, D: 2, F: 2
[👥 BAZA LUDNOŚCI GUS] ✅ DEMOGRAFIA OK (Odchylenie zaledwie 14.7%)
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
```

### Faza 0: Statystyki ogólne
- **Populacja Miasta:** 240,937 (GUS Grid)
- **Transakcje RCN:** 10,835

### Faza III: Top 20 POI (Miasto)

| Kategoria | Tier | Ilość w Mieście | Wartość Punktowa (W) |
|---|---|---|---|
| `national_rail_hub` | T0_MEGA_HUB | 1 | 1,978,429,395 |
| `regional_rail_hub` | T1_NATIONAL_MAGNET | 3 | 963,643,236 |
| `national_stadium` | T1_NATIONAL_MAGNET | 6 | 191,642,813 |
| `hospital_clinical` | T1_NATIONAL_MAGNET | 8 | 182,740,645 |
| `university_campus` | T1_NATIONAL_MAGNET | 13 | 173,639,389 |
| `industrial_zone` | T2_STRATEGIC_HUB | 164 | 19,051,100 |
| `commercial_zone` | T2_STRATEGIC_HUB | 43 | 16,917,583 |
| `shopping_mall` | T2_STRATEGIC_HUB | 17 | 14,972,151 |
| `government_central` | T2_STRATEGIC_HUB | 29 | 10,669,614 |
| `supermarket` | T2_STRATEGIC_HUB | 80 | 9,856,527 |
| `business_office` | T2_STRATEGIC_HUB | 40 | 8,699,260 |
| `education_high_school` | T3_LOCAL_CORE | 94 | 1,516,563 |
| `sports_centre` | T3_LOCAL_CORE | 33 | 1,310,136 |
| `marketplace` | T3_LOCAL_CORE | 8 | 1,295,595 |
| `social_support_mops` | T3_LOCAL_CORE | 15 | 1,038,064 |
| `health_clinic` | T3_LOCAL_CORE | 71 | 738,631 |
| `culture_theatre` | T3_LOCAL_CORE | 33 | 735,170 |
| `education_preschool` | T4_DAILY_SERVICE | 36 | 124,040 |
| `place_of_worship` | T4_DAILY_SERVICE | 91 | 96,105 |
| `park_recreation` | T4_DAILY_SERVICE | 298 | 92,147 |

### Faza IV: Próbki Pełnego DNA 100% (Zobacz szczegóły POI!)

#### NAJLEPSZE PRZYSTANKI (TOP 5)
<details><summary><b>Łojki - Kopalniana (891e23a7167ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Łojki - Kopalniana
  stop_id               : 1611
  h3_index              : 891e23a7167ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 0.8890

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 5968093.1325

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 137.6429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5713.9779

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 122.2719

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x business_office

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - business_office        : Montaż mebli i paneli
```
</details>
<details><summary><b>Blachownia - Piastów I (891e23a46cfffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Blachownia - Piastów I
  stop_id               : 1610
  h3_index              : 891e23a46cfffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 0.8890

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 5968093.1325

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 137.6429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5713.9779

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 122.2719

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Blachownia - Piastów II (891e23a7333ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Blachownia - Piastów II
  stop_id               : 1609
  h3_index              : 891e23a7333ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 0.8890

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 5968093.1325

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 137.6429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5713.9779

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 122.2719

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Blachownia - Piastów III (891e23a7303ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Blachownia - Piastów III
  stop_id               : 1608
  h3_index              : 891e23a7303ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 0.8890

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 5968093.1325

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 137.6429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5713.9779

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 122.2719

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 3x gastronomy
  > 1x micro_parcel_locker
  > 1x industrial_zone
  > 1x shopping_mall

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_parcel_locker    : Paczkomat InPost
    - gastronomy             : COFFEE ZONE
    - shopping_mall          : Galeria Blachownia
    - gastronomy             : Totutaj
```
</details>
<details><summary><b>Blachownia - Piastów III (891e23a7303ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Blachownia - Piastów III
  stop_id               : 1607
  h3_index              : 891e23a7303ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 0.8890

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 5968093.1325

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 137.6429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5713.9779

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 122.2719

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 3x gastronomy
  > 1x micro_parcel_locker
  > 1x industrial_zone
  > 1x shopping_mall

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_parcel_locker    : Paczkomat InPost
    - gastronomy             : COFFEE ZONE
    - shopping_mall          : Galeria Blachownia
    - gastronomy             : Totutaj
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Blachownia (891e23a55d7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Blachownia
  stop_id               : 265741
  h3_index              : 891e23a55d7ffff
  hub_id                : 0

[OCENA Z-SCORE & RANK]
  grade                 : C
  local_percentile      : 55.5556
  local_score_raw       : 0.0621

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 1516344712.5079

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 3976.1431

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 56.4023

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 3x education_high_school
  > 2x health_clinic
  > 2x micro_parcel_locker
  > 1x regional_rail_hub
  > 1x police_station
  > 1x convenience_store
  > 1x place_of_worship
  > 1x micro_playground
  > 1x supermarket

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - regional_rail_hub      : Blachownia
    - education_high_school  : Przedszkole nr 1 w Blachowni
    - education_high_school  : Szkoła Podstawowa nr 3 im. Stanisława Staszica w Blachowni
    - micro_parcel_locker    : Paczkomat InPost
    - police_station         : Komisariat Policji w Blachowni
    - micro_parcel_locker    : Paczkomat InPost
    - convenience_store      : Żabka
    - place_of_worship       : Kościół pw. Świętego Franciszka z Asyżu
    - education_high_school  : Zespół Szkolno-Przedszkolny w Blachowni
    - supermarket            : Aldi
```
</details>
<details><summary><b>Częstochowa Aniołów (891e2169a7bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Częstochowa Aniołów
  stop_id               : 63099
  h3_index              : 891e2169a7bffff
  hub_id                : 2

[OCENA Z-SCORE & RANK]
  grade                 : D
  local_percentile      : 44.4444
  local_score_raw       : -0.2783

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 21357928.1868

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5654.6324

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 7.0691

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 3x industrial_zone
  > 2x car_services
  > 1x pharmacy
  > 1x convenience_store
  > 1x education_high_school
  > 1x education_preschool
  > 1x micro_playground

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - pharmacy               : Koralowa
    - convenience_store      : Społem
    - education_high_school  : Szkoła Podstawowa nr 24 im. Jana Marcina Szancera
    - education_preschool    : Przedszkole Miejskie nr 25
    - car_services           : Orlen
```
</details>
<details><summary><b>Rząsawa (891e2169dd3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Rząsawa
  stop_id               : 63123
  h3_index              : 891e2169dd3ffff
  hub_id                : 7

[OCENA Z-SCORE & RANK]
  grade                 : D
  local_percentile      : 33.3333
  local_score_raw       : -0.4873

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 18155898.4919

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5654.6324

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 2x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - industrial_zone        : Przedsiębiorstwo Robót Drogowych
```
</details>
<details><summary><b>Częstochowa Raków (891e23a4d27ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Częstochowa Raków
  stop_id               : 62687
  h3_index              : 891e23a4d27ffff
  hub_id                : 4

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 22.2222
  local_score_raw       : -0.5967

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 1195395.5889

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 4449.5827

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 101.6479

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 4x micro_playground
  > 2x university_campus
  > 2x pharmacy
  > 2x convenience_store
  > 2x park_recreation
  > 1x education_high_school
  > 1x police_station
  > 1x micro_parcel_locker
  > 1x culture_theatre
  > 1x supermarket
  > 1x education_preschool

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - education_high_school  : Zespół Szkół im. Bolesława Prusa w Częstochowie
    - police_station         : Komisariat Policji VI w Częstochowie
    - micro_parcel_locker    : Paczkomat InPost
    - university_campus      : Internat przy Zespole Szkół im. Bolesława Prusa w Częstochowie
    - pharmacy               : Fides
    - pharmacy               : Apteka Św.Floriana
    - convenience_store      : Delikatesy Centrum
    - culture_theatre        : Biblioteka Publiczna im. dr Władysława Biegańskiego Filia nr 7
    - park_recreation        : skwer Junaków
    - convenience_store      : PSS Społem
    - supermarket            : Dino
```
</details>
<details><summary><b>Kusięta Nowe (891e2ed028fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Kusięta Nowe
  stop_id               : 62877
  h3_index              : 891e2ed028fffff
  hub_id                : 6

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 11.1111
  local_score_raw       : -0.6592

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 896185.4562

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5654.6324

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 5.1151

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 3x education_high_school
  > 2x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - education_high_school  : Szkoła Podstawowa
```
</details>

---

## ELBLAG
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ⚠️ Z-Score ODD DIST (Mean: -0.000, Std: 0.300)
     Rozkład Kartek (unikalne Huby): A+: 1, C: 1
[👥 BAZA LUDNOŚCI GUS] ✅ DEMOGRAFIA OK (Odchylenie zaledwie 8.6%)
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
```

### Faza 0: Statystyki ogólne
- **Populacja Miasta:** 119,411 (GUS Grid)
- **Transakcje RCN:** 5,907

### Faza III: Top 20 POI (Miasto)

| Kategoria | Tier | Ilość w Mieście | Wartość Punktowa (W) |
|---|---|---|---|
| `regional_rail_hub` | T1_NATIONAL_MAGNET | 1 | 925,731,487 |
| `national_stadium` | T1_NATIONAL_MAGNET | 1 | 200,278,366 |
| `hospital_clinical` | T1_NATIONAL_MAGNET | 4 | 183,184,276 |
| `university_campus` | T1_NATIONAL_MAGNET | 6 | 180,735,573 |
| `commercial_zone` | T2_STRATEGIC_HUB | 17 | 16,849,509 |
| `industrial_zone` | T2_STRATEGIC_HUB | 299 | 15,005,604 |
| `shopping_mall` | T2_STRATEGIC_HUB | 13 | 12,020,675 |
| `supermarket` | T2_STRATEGIC_HUB | 60 | 8,580,310 |
| `business_office` | T2_STRATEGIC_HUB | 52 | 8,182,751 |
| `government_central` | T2_STRATEGIC_HUB | 27 | 7,530,038 |
| `education_high_school` | T3_LOCAL_CORE | 35 | 1,718,471 |
| `sports_centre` | T3_LOCAL_CORE | 11 | 1,346,676 |
| `marketplace` | T3_LOCAL_CORE | 6 | 1,125,938 |
| `social_support_mops` | T3_LOCAL_CORE | 12 | 1,026,305 |
| `health_clinic` | T3_LOCAL_CORE | 50 | 742,357 |
| `culture_theatre` | T3_LOCAL_CORE | 15 | 692,595 |
| `education_preschool` | T4_DAILY_SERVICE | 40 | 122,882 |
| `place_of_worship` | T4_DAILY_SERVICE | 38 | 93,308 |
| `park_recreation` | T4_DAILY_SERVICE | 266 | 92,487 |
| `police_station` | T4_DAILY_SERVICE | 4 | 88,557 |

### Faza IV: Próbki Pełnego DNA 100% (Zobacz szczegóły POI!)

#### NAJLEPSZE PRZYSTANKI (TOP 5)
<details><summary><b>Nowakowo I (891f54d2a97ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Nowakowo I
  stop_id               : 1
  h3_index              : 891f54d2a97ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 0.2121

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 12817537.5178

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 73.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6527.0936

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 70.6486

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 3x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - industrial_zone        : Stolfront
    - industrial_zone        : H.M.Serdyńscy - Szkółka drzew i krzewów
```
</details>
<details><summary><b>Nowakowo (891f54d284bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Nowakowo
  stop_id               : 2
  h3_index              : 891f54d284bffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 0.2121

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 12817537.5178

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 73.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6527.0936

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 70.6486

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 3x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - industrial_zone        : Stolfront
    - industrial_zone        : H.M.Serdyńscy - Szkółka drzew i krzewów
```
</details>
<details><summary><b>Nowakowo I (891f54d2a97ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Nowakowo I
  stop_id               : 3
  h3_index              : 891f54d2a97ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 0.2121

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 12817537.5178

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 73.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6527.0936

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 70.6486

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 3x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - industrial_zone        : Stolfront
    - industrial_zone        : H.M.Serdyńscy - Szkółka drzew i krzewów
```
</details>
<details><summary><b>Nowakowo (891f54d284bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Nowakowo
  stop_id               : 4
  h3_index              : 891f54d284bffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 0.2121

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 12817537.5178

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 73.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6527.0936

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 70.6486

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 3x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - industrial_zone        : Stolfront
    - industrial_zone        : H.M.Serdyńscy - Szkółka drzew i krzewów
```
</details>
<details><summary><b>Nowodworska (891f54d0e67ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Nowodworska
  stop_id               : 9
  h3_index              : 891f54d0e67ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 0.2121

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 12817537.5178

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 73.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6527.0936

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 70.6486

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 5x industrial_zone
  > 3x car_services
  > 1x micro_parcel_locker
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_parcel_locker    : Paczkomat InPost
    - car_services           : Orlen
    - car_services           : Peugeot
    - car_services           : FIAT - Auto El
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Żuławska - Fabryka Mebli (891f54d1d27ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Żuławska - Fabryka Mebli
  stop_id               : 826
  h3_index              : 891f54d1d27ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 0.2121

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 12817537.5178

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 73.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6527.0936

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 70.6486

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 9x industrial_zone
  > 1x micro_parcel_locker
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_parcel_locker    : Appkomat InPost
    - industrial_zone        : InPost
```
</details>
<details><summary><b>Kwiatkowskiego - Jana Pawła II (891f54d2b6bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Kwiatkowskiego - Jana Pawła II
  stop_id               : 881
  h3_index              : 891f54d2b6bffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 0.2121

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 12817537.5178

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 73.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6527.0936

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 70.6486

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 12x industrial_zone
  > 6x business_office
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - industrial_zone        : Acoustics
    - business_office        : Elbląski Park Technologiczny
    - industrial_zone        : Avante Okna
    - business_office        : Wtórmet-Plast
    - industrial_zone        : Dan-Stal
    - industrial_zone        : Nutrimilk
    - business_office        : Proxmus
    - industrial_zone        : Proxmus
    - industrial_zone        : Vivenge
    - commercial_zone        : Elbląski Park Technologiczny
    - industrial_zone        : Grupa ARA
    - industrial_zone        : Elstar
```
</details>
<details><summary><b>Sąd - Pętla (891f54d0aa7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Sąd - Pętla
  stop_id               : 1004
  h3_index              : 891f54d0aa7ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 0.2121

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 12817537.5178

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 73.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6527.0936

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 70.6486

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 18x specialized_retail
  > 17x bank
  > 17x park_recreation
  > 12x convenience_store
  > 12x gastronomy
  > 12x personal_services
  > 7x health_clinic
  > 7x micro_parcel_locker
  > 6x pharmacy
  > 5x micro_atm
  > 4x education_preschool
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
<details><summary><b>Sąd - Pętla (891f54d0aa7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Sąd - Pętla
  stop_id               : 1005
  h3_index              : 891f54d0aa7ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 0.2121

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 12817537.5178

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 73.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6527.0936

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 70.6486

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
<details><summary><b>Elbląg (891f54d0b53ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Elbląg
  stop_id               : 8151
  h3_index              : 891f54d0b53ffff
  hub_id                : 0

[OCENA Z-SCORE & RANK]
  grade                 : C
  local_percentile      : 50.0000
  local_score_raw       : -0.2121

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 787499694.7234

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6247.2831

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 57.5050

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 15x park_recreation
  > 9x specialized_retail
  > 9x micro_parcel_locker
  > 7x convenience_store
  > 6x supermarket
  > 5x personal_services
  > 5x car_services
  > 4x micro_atm
  > 4x bank
  > 4x pharmacy
  > 3x gastronomy
  > 2x micro_playground
  > 2x post_office
  > 2x shopping_mall
  > 1x regional_rail_hub
  > 1x marketplace
  > 1x government_central
  > 1x industrial_zone
  > 1x health_clinic
  > 1x education_preschool

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - regional_rail_hub      : Elbląg
    - micro_atm              : Euronet
    - bank                   : PKO BP
    - marketplace            : Giełda Elbląska
    - supermarket            : Mak Chemia
    - pharmacy               : Dom Leków
    - convenience_store      : ABC
    - gastronomy             : Domino's
    - pharmacy               : Centrum
    - micro_atm              : Bankomat Euronet
    - micro_parcel_locker    : Paczkomat InPost
    - bank                   : Euronet
```
</details>

---

## ELK
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: 0.000, Std: 0.712)
     Rozkład Kartek (unikalne Huby): A: 1, A+: 1, B: 1, C: 2, D: 2, F: 1
[👥 BAZA LUDNOŚCI GUS] ✅ DEMOGRAFIA OK (Odchylenie zaledwie 20.8%)
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
```

### Faza 0: Statystyki ogólne
- **Populacja Miasta:** 72,490 (GUS Grid)
- **Transakcje RCN:** 3,570

### Faza III: Top 20 POI (Miasto)

| Kategoria | Tier | Ilość w Mieście | Wartość Punktowa (W) |
|---|---|---|---|
| `regional_rail_hub` | T1_NATIONAL_MAGNET | 3 | 863,441,340 |
| `hospital_clinical` | T1_NATIONAL_MAGNET | 3 | 160,943,905 |
| `university_campus` | T1_NATIONAL_MAGNET | 5 | 118,092,691 |
| `industrial_zone` | T2_STRATEGIC_HUB | 71 | 16,609,430 |
| `commercial_zone` | T2_STRATEGIC_HUB | 44 | 16,239,746 |
| `shopping_mall` | T2_STRATEGIC_HUB | 4 | 13,265,248 |
| `supermarket` | T2_STRATEGIC_HUB | 32 | 9,976,578 |
| `business_office` | T2_STRATEGIC_HUB | 8 | 6,884,858 |
| `government_central` | T2_STRATEGIC_HUB | 37 | 6,840,295 |
| `marketplace` | T3_LOCAL_CORE | 3 | 1,266,955 |
| `education_high_school` | T3_LOCAL_CORE | 47 | 1,079,354 |
| `sports_centre` | T3_LOCAL_CORE | 30 | 1,030,349 |
| `social_support_mops` | T3_LOCAL_CORE | 10 | 762,381 |
| `culture_theatre` | T3_LOCAL_CORE | 7 | 621,922 |
| `health_clinic` | T3_LOCAL_CORE | 65 | 586,001 |
| `park_recreation` | T4_DAILY_SERVICE | 713 | 116,702 |
| `education_preschool` | T4_DAILY_SERVICE | 25 | 84,619 |
| `place_of_worship` | T4_DAILY_SERVICE | 36 | 80,241 |
| `police_station` | T4_DAILY_SERVICE | 3 | 78,862 |
| `specialized_retail` | T4_DAILY_SERVICE | 94 | 63,529 |

### Faza IV: Próbki Pełnego DNA 100% (Zobacz szczegóły POI!)

#### NAJLEPSZE PRZYSTANKI (TOP 5)
<details><summary><b>11. Listopada — Szkoła (891f5538cd3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : 11. Listopada — Szkoła
  stop_id               : 90-01
  h3_index              : 891f5538cd3ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.3344

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 12885294.9249

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 21.2857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5124.9203

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 73.1447

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 19x park_recreation
  > 17x micro_playground
  > 5x health_clinic
  > 4x gastronomy
  > 3x education_preschool
  > 3x convenience_store
  > 3x education_high_school
  > 2x personal_services
  > 2x micro_parcel_locker
  > 2x commercial_zone
  > 1x car_services
  > 1x culture_theatre
  > 1x social_support_mops
  > 1x pharmacy
  > 1x university_campus
  > 1x post_office
  > 1x place_of_worship

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - education_preschool    : Jedyneczka
    - gastronomy             : Pizzeria 4 You
    - car_services           : Orlen
    - personal_services      : Hairdresser & Make Up Artist Marek Bogdziewicz
    - convenience_store      : Lewiatan
    - culture_theatre        : Filia Warmińsko-Mazurskiej Biblioteki Pedagogicznej im. prof. T. Kotarbińskiego w Olsztynie
    - social_support_mops    : Poradnia Psychologiczno-Pedagogiczna
    - education_high_school  : Centrum Kształcenia Praktycznego i Ustawicznego
    - micro_parcel_locker    : Paczkomat InPost
    - micro_parcel_locker    : Paczkomat InPost
    - pharmacy               : Gemini
    - convenience_store      : Orlen
```
</details>
<details><summary><b>11. Listopada — Szkoła (891f5538cd7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : 11. Listopada — Szkoła
  stop_id               : 90
  h3_index              : 891f5538cd7ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.3344

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 12885294.9249

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 21.2857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5124.9203

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 73.1447

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 22x park_recreation
  > 19x micro_playground
  > 9x education_high_school
  > 6x education_preschool
  > 6x health_clinic
  > 5x personal_services
  > 5x gastronomy
  > 5x micro_parcel_locker
  > 4x convenience_store
  > 4x specialized_retail
  > 2x pharmacy
  > 2x commercial_zone
  > 1x culture_theatre
  > 1x social_support_mops
  > 1x university_campus
  > 1x post_office
  > 1x supermarket
  > 1x sports_centre
  > 1x place_of_worship

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store      : Żabka
    - education_preschool    : Jedyneczka
    - education_high_school  : Szkoła Policealna nr 4
    - education_high_school  : Technikum nr 4
    - education_high_school  : Zasadnicza Szkoła Zawodowa nr 8
    - specialized_retail     : Tomex
    - specialized_retail     : Tanis
    - gastronomy             : Pizzeria 4 You
    - gastronomy             : Kaskada
    - personal_services      : Hairdresser & Make Up Artist Marek Bogdziewicz
    - specialized_retail     : Polster HB Meble Tapicerowane
    - gastronomy             : Little Thai
```
</details>
<details><summary><b>Wojska Polskiego — Park (891f5538c6fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Wojska Polskiego — Park
  stop_id               : 9
  h3_index              : 891f5538c6fffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.3344

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 12885294.9249

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 21.2857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5124.9203

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 73.1447

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 30x specialized_retail
  > 16x bank
  > 16x micro_playground
  > 13x park_recreation
  > 11x personal_services
  > 11x gastronomy
  > 7x health_clinic
  > 5x supermarket
  > 5x convenience_store
  > 5x place_of_worship
  > 4x micro_atm
  > 3x pharmacy
  > 3x government_central
  > 3x university_campus
  > 3x education_high_school
  > 3x education_preschool
  > 3x micro_parcel_locker
  > 2x post_office
  > 2x social_support_mops
  > 2x commercial_zone
  > 2x sports_centre
  > 1x shopping_mall
  > 1x business_office
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
<details><summary><b>Targowa — Bazar (891f553888bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Targowa — Bazar
  stop_id               : 89
  h3_index              : 891f553888bffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.3344

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 12885294.9249

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 21.2857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5124.9203

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 73.1447

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 13x park_recreation
  > 5x gastronomy
  > 5x commercial_zone
  > 4x supermarket
  > 4x car_services
  > 4x micro_playground
  > 4x micro_parcel_locker
  > 4x place_of_worship
  > 3x health_clinic
  > 2x micro_atm
  > 2x personal_services
  > 2x marketplace
  > 1x specialized_retail
  > 1x pharmacy
  > 1x convenience_store
  > 1x education_preschool
  > 1x hospital_clinical
  > 1x sports_centre
  > 1x education_high_school

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : Bankomat BZ WBK
    - supermarket            : Kaufland
    - supermarket            : Biedronka
    - car_services           : Auto-Marcin
    - gastronomy             : Roma
    - specialized_retail     : Atu
    - gastronomy             : Kebab
    - car_services           : Orlen
    - car_services           : Auto Serwis Mobile
    - health_clinic          : Eskulap
    - gastronomy             : Stop Cafe
    - pharmacy               : Dbam o Zdrowie
```
</details>
<details><summary><b>Kochanowskiego — Sklep (891f5538803ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Kochanowskiego — Sklep
  stop_id               : 88
  h3_index              : 891f5538803ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.3344

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 12885294.9249

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 21.2857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5124.9203

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 73.1447

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 19x park_recreation
  > 15x micro_playground
  > 6x health_clinic
  > 5x convenience_store
  > 4x car_services
  > 3x supermarket
  > 3x pharmacy
  > 3x education_preschool
  > 3x micro_parcel_locker
  > 2x micro_atm
  > 2x education_high_school
  > 2x industrial_zone
  > 2x commercial_zone
  > 1x bank
  > 1x government_central
  > 1x post_office
  > 1x specialized_retail
  > 1x personal_services
  > 1x sports_centre

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - bank                   : Bank Pekao
    - supermarket            : Kaufland
    - supermarket            : Biedronka
    - government_central     : PEC Ełk
    - pharmacy               : Cef@Rm 36
    - car_services           : Auto Serwis Mobile
    - health_clinic          : Eskulap
    - convenience_store      : Spożywczak
    - post_office            : UP Ełk Nr 6
    - car_services           : CircleK
    - convenience_store      : abc
    - pharmacy               : Asak
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Ełk Szyba Zachód (891f5538863ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Ełk Szyba Zachód
  stop_id               : 12278
  h3_index              : 891f5538863ffff
  hub_id                : 3

[OCENA Z-SCORE & RANK]
  grade                 : C
  local_percentile      : 62.5000
  local_score_raw       : -0.0104

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 699923.4162

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 3613.0191

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 50.3725

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 24x park_recreation
  > 7x micro_playground
  > 3x car_services
  > 3x convenience_store
  > 1x health_clinic
  > 1x education_high_school

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - car_services           : Auto-Grupa
    - convenience_store      : Plus Rydzewski
    - car_services           : Maxter
    - health_clinic          : Zaspół Gabinetów Lekarskich
    - car_services           : Auto Tęcza
    - education_high_school  : Specjalny Ośrodek Szkolno - Wychowawczy
```
</details>
<details><summary><b>Pogorzel Wielka (891f557402bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Pogorzel Wielka
  stop_id               : 12294
  h3_index              : 891f557402bffff
  hub_id                : 5

[OCENA Z-SCORE & RANK]
  grade                 : C
  local_percentile      : 50.0000
  local_score_raw       : -0.2691

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 9682.4033

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 4784.2342

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 11.7945

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x place_of_worship

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - place_of_worship       : Kaplica dojazdowa
```
</details>
<details><summary><b>Nowa Wieś Ełcka (891f5539947ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Nowa Wieś Ełcka
  stop_id               : 12286
  h3_index              : 891f5539947ffff
  hub_id                : 4

[OCENA Z-SCORE & RANK]
  grade                 : D
  local_percentile      : 37.5000
  local_score_raw       : -0.4575

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 877.1672

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 2822.5084

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 41.5368

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x place_of_worship
  > 1x park_recreation

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - place_of_worship       : Kościół pw. Świętego Józefa Rzemieślnika
```
</details>
<details><summary><b>Ełk Szyba Wschód (891f553886fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Ełk Szyba Wschód
  stop_id               : 12237
  h3_index              : 891f553886fffff
  hub_id                : 2

[OCENA Z-SCORE & RANK]
  grade                 : D
  local_percentile      : 25.0000
  local_score_raw       : -0.4961

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 67163.3605

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 1116.7478

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 21.7854

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 24x park_recreation
  > 4x micro_playground
  > 3x car_services
  > 2x convenience_store
  > 1x health_clinic
  > 1x education_high_school

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - car_services           : Auto-Grupa
    - car_services           : Maxter
    - health_clinic          : Zaspół Gabinetów Lekarskich
    - car_services           : Auto Tęcza
    - education_high_school  : Specjalny Ośrodek Szkolno - Wychowawczy
```
</details>
<details><summary><b>Bajtkowo (891f557694bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Bajtkowo
  stop_id               : 12260
  h3_index              : 891f557694bffff
  hub_id                : 0

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 12.5000
  local_score_raw       : -0.9270

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 4784.2342

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1.6006

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>

---

## GIZYCKO
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: -0.000, Std: 0.660)
     Rozkład Kartek (unikalne Huby): A+: 1, B: 1, C: 1, D: 1, F: 1
[👥 BAZA LUDNOŚCI GUS] ✅ DEMOGRAFIA OK (Odchylenie zaledwie 19.0%)
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
```

### Faza 0: Statystyki ogólne
- **Populacja Miasta:** 35,698 (GUS Grid)
- **Transakcje RCN:** 605

### Faza III: Top 20 POI (Miasto)

| Kategoria | Tier | Ilość w Mieście | Wartość Punktowa (W) |
|---|---|---|---|
| `regional_rail_hub` | T1_NATIONAL_MAGNET | 2 | 785,274,458 |
| `hospital_clinical` | T1_NATIONAL_MAGNET | 1 | 195,831,810 |
| `commercial_zone` | T2_STRATEGIC_HUB | 3 | 15,533,367 |
| `industrial_zone` | T2_STRATEGIC_HUB | 13 | 15,437,533 |
| `shopping_mall` | T2_STRATEGIC_HUB | 5 | 9,359,042 |
| `supermarket` | T2_STRATEGIC_HUB | 19 | 7,642,037 |
| `government_central` | T2_STRATEGIC_HUB | 15 | 6,922,875 |
| `business_office` | T2_STRATEGIC_HUB | 3 | 5,916,516 |
| `marketplace` | T3_LOCAL_CORE | 1 | 1,555,028 |
| `education_high_school` | T3_LOCAL_CORE | 15 | 1,252,998 |
| `sports_centre` | T3_LOCAL_CORE | 17 | 907,915 |
| `culture_theatre` | T3_LOCAL_CORE | 3 | 812,677 |
| `health_clinic` | T3_LOCAL_CORE | 4 | 733,491 |
| `social_support_mops` | T3_LOCAL_CORE | 1 | 532,585 |
| `park_recreation` | T4_DAILY_SERVICE | 11 | 137,677 |
| `police_station` | T4_DAILY_SERVICE | 2 | 78,680 |
| `place_of_worship` | T4_DAILY_SERVICE | 22 | 74,304 |
| `specialized_retail` | T4_DAILY_SERVICE | 20 | 73,837 |
| `education_preschool` | T4_DAILY_SERVICE | 12 | 72,291 |
| `car_services` | T4_DAILY_SERVICE | 6 | 70,141 |

### Faza IV: Próbki Pełnego DNA 100% (Zobacz szczegóły POI!)

#### NAJLEPSZE PRZYSTANKI (TOP 5)
<details><summary><b>aleja  1 Maja Cmentarz (891f5510343ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : aleja  1 Maja Cmentarz
  stop_id               : 174
  h3_index              : 891f5510343ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 0.8579

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 13421882.6360

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 4.2143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 4776.4054

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 184.6397

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 4x micro_playground
  > 3x micro_parcel_locker
  > 2x specialized_retail
  > 2x supermarket
  > 2x commercial_zone
  > 1x car_services
  > 1x convenience_store
  > 1x government_central

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - car_services           : Biłas&Synowie
    - convenience_store      : Delikatesy u Teresy
    - specialized_retail     : JYSK
    - specialized_retail     : Meble +
    - micro_parcel_locker    : Paczkomat InPost
    - micro_parcel_locker    : Paczkomat InPost
    - government_central     : Generalna Dyrekcja Dróg Krajowych i Autostrad
    - micro_parcel_locker    : Paczkomat InPost
    - supermarket            : Intermarché
    - supermarket            : Biedronka
```
</details>
<details><summary><b>aleja  1 Maja Cmentarz (891f551034bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : aleja  1 Maja Cmentarz
  stop_id               : 182
  h3_index              : 891f551034bffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 0.8579

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 13421882.6360

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 4.2143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 4776.4054

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 184.6397

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 6x micro_playground
  > 3x micro_parcel_locker
  > 2x specialized_retail
  > 2x supermarket
  > 2x commercial_zone
  > 1x car_services
  > 1x convenience_store

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - car_services           : Biłas&Synowie
    - convenience_store      : Delikatesy u Teresy
    - specialized_retail     : JYSK
    - specialized_retail     : Meble +
    - micro_parcel_locker    : Paczkomat InPost
    - micro_parcel_locker    : Paczkomat InPost
    - micro_parcel_locker    : Paczkomat InPost
    - supermarket            : Intermarché
    - supermarket            : Biedronka
```
</details>
<details><summary><b>Al. 1-go Maja (891f5511c17ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Al. 1-go Maja
  stop_id               : 10
  h3_index              : 891f5511c17ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 0.8579

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 13421882.6360

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 4.2143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 4776.4054

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 184.6397

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
<details><summary><b>Al. 1-go Maja (891f5511c17ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Al. 1-go Maja
  stop_id               : 11
  h3_index              : 891f5511c17ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 0.8579

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 13421882.6360

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 4.2143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 4776.4054

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 184.6397

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 12x gastronomy
  > 6x sports_centre
  > 6x micro_playground
  > 5x education_high_school
  > 5x pharmacy
  > 5x government_central
  > 5x place_of_worship
  > 4x convenience_store
  > 4x bank
  > 4x micro_atm
  > 4x education_preschool
  > 4x supermarket
  > 2x post_office
  > 2x micro_parcel_locker
  > 2x shopping_mall
  > 2x specialized_retail
  > 1x car_services
  > 1x social_support_mops
  > 1x culture_theatre
  > 1x park_recreation
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
    - pharmacy               : Cef@Rm 36
```
</details>
<details><summary><b>Sympatyczna 1 (891f55102afffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Sympatyczna 1
  stop_id               : 15
  h3_index              : 891f55102afffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 0.8579

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 13421882.6360

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 4.2143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 4776.4054

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 184.6397

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x sports_centre
  > 1x education_high_school

  [WSKAZANE KONKRETNE INSTYTUCJE]
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Zielony Gaj (891f5510c17ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Zielony Gaj
  stop_id               : 98
  h3_index              : 891f5510c17ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 0.8579

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 13421882.6360

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 4.2143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 4776.4054

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 184.6397

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Wilkasy Niegocin (891f5511e53ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Wilkasy Niegocin
  stop_id               : 12658
  h3_index              : 891f5511e53ffff
  hub_id                : 3

[OCENA Z-SCORE & RANK]
  grade                 : B
  local_percentile      : 80.0000
  local_score_raw       : 0.1132

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 17330495.4498

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 10940.4560

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 2.7445

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
<details><summary><b>Giżycko (891f5511c67ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Giżycko
  stop_id               : 12609
  h3_index              : 891f5511c67ffff
  hub_id                : 0

[OCENA Z-SCORE & RANK]
  grade                 : C
  local_percentile      : 60.0000
  local_score_raw       : 0.1003

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 926164155.3205

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 3550.8962

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 50.9957

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 4x gastronomy
  > 4x convenience_store
  > 3x health_clinic
  > 2x micro_atm
  > 2x shopping_mall
  > 1x regional_rail_hub
  > 1x bank
  > 1x education_preschool
  > 1x micro_parcel_locker
  > 1x personal_services
  > 1x place_of_worship
  > 1x government_central
  > 1x supermarket
  > 1x park_recreation
  > 1x industrial_zone
  > 1x micro_playground

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - regional_rail_hub      : Giżycko
    - gastronomy             : Tawerna Marina
    - micro_atm              : Euronet
    - bank                   : Bank Pekao
    - convenience_store      : U Gośki
    - education_preschool    : Krasnal
    - micro_atm              : Bank Pekao
    - gastronomy             : Hotel Masovia
    - gastronomy             : PodKładka
    - gastronomy             : Puzzle Smaku
    - shopping_mall          : Ekomarina Gizycko
    - micro_parcel_locker    : Paczkomat InPost
```
</details>
<details><summary><b>Siedliska (891f550210bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Siedliska
  stop_id               : 12633
  h3_index              : 891f550210bffff
  hub_id                : 1

[OCENA Z-SCORE & RANK]
  grade                 : D
  local_percentile      : 40.0000
  local_score_raw       : -0.0818

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 661358371.0007

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 4124.8453

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 2.1654

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x regional_rail_hub

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - regional_rail_hub      : Siedliska
```
</details>
<details><summary><b>Sterławki Małe (891f551a56fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Sterławki Małe
  stop_id               : 12666
  h3_index              : 891f551a56fffff
  hub_id                : 2

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 20.0000
  local_score_raw       : -0.9896

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 4124.8453

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 0.1278

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>

---

## GORZOW
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: -0.000, Std: 0.614)
     Rozkład Kartek (unikalne Huby): A: 1, A+: 1, B: 1, C: 1, D: 2, F: 1
[👥 BAZA LUDNOŚCI GUS] ✅ DEMOGRAFIA OK (Odchylenie zaledwie 7.9%)
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
```

### Faza 0: Statystyki ogólne
- **Populacja Miasta:** 129,431 (GUS Grid)
- **Transakcje RCN:** 3,895

### Faza III: Top 20 POI (Miasto)

| Kategoria | Tier | Ilość w Mieście | Wartość Punktowa (W) |
|---|---|---|---|
| `regional_rail_hub` | T1_NATIONAL_MAGNET | 2 | 920,993,909 |
| `national_stadium` | T1_NATIONAL_MAGNET | 3 | 204,858,734 |
| `hospital_clinical` | T1_NATIONAL_MAGNET | 4 | 204,295,675 |
| `university_campus` | T1_NATIONAL_MAGNET | 13 | 135,217,546 |
| `industrial_zone` | T2_STRATEGIC_HUB | 304 | 14,110,099 |
| `shopping_mall` | T2_STRATEGIC_HUB | 16 | 14,078,838 |
| `commercial_zone` | T2_STRATEGIC_HUB | 255 | 11,243,586 |
| `student_dormitory` | T2_STRATEGIC_HUB | 1 | 9,901,922 |
| `supermarket` | T2_STRATEGIC_HUB | 67 | 9,562,909 |
| `government_central` | T2_STRATEGIC_HUB | 48 | 8,538,105 |
| `business_office` | T2_STRATEGIC_HUB | 18 | 6,140,532 |
| `sports_centre` | T3_LOCAL_CORE | 34 | 1,288,232 |
| `education_high_school` | T3_LOCAL_CORE | 98 | 1,268,781 |
| `marketplace` | T3_LOCAL_CORE | 6 | 1,138,311 |
| `health_clinic` | T3_LOCAL_CORE | 45 | 812,075 |
| `culture_theatre` | T3_LOCAL_CORE | 16 | 760,510 |
| `social_support_mops` | T3_LOCAL_CORE | 4 | 710,425 |
| `park_recreation` | T4_DAILY_SERVICE | 144 | 120,027 |
| `education_preschool` | T4_DAILY_SERVICE | 46 | 116,760 |
| `police_station` | T4_DAILY_SERVICE | 9 | 99,448 |

### Faza IV: Próbki Pełnego DNA 100% (Zobacz szczegóły POI!)

#### NAJLEPSZE PRZYSTANKI (TOP 5)
<details><summary><b>Okulickiego (891f0a40d33ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Okulickiego
  stop_id               : 451
  h3_index              : 891f0a40d33ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.0710

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 24464452.4646

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 188.1429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6838.5060

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 400.4070

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 20x micro_playground
  > 7x gastronomy
  > 7x micro_parcel_locker
  > 5x sports_centre
  > 4x convenience_store
  > 4x specialized_retail
  > 3x pharmacy
  > 3x health_clinic
  > 2x personal_services
  > 2x bank
  > 2x park_recreation
  > 2x supermarket
  > 1x culture_theatre
  > 1x place_of_worship
  > 1x shopping_mall
  > 1x education_high_school
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store      : Żabka
    - convenience_store      : Żabka
    - gastronomy             : Pizzeria O.K.
    - personal_services      : Rossmann
    - specialized_retail     : Pepco
    - bank                   : Bank Pekao
    - specialized_retail     : Soldo
    - culture_theatre        : Multikino
    - specialized_retail     : Caleer
    - convenience_store      : Żabka
    - convenience_store      : Żabka
    - sports_centre          : Hala sportowa SP20
```
</details>
<details><summary><b>AWF (891f0a40aa3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : AWF
  stop_id               : 5
  h3_index              : 891f0a40aa3ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.0710

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 24464452.4646

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 188.1429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6838.5060

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 400.4070

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 29x gastronomy
  > 18x commercial_zone
  > 14x specialized_retail
  > 10x university_campus
  > 7x education_high_school
  > 6x micro_playground
  > 5x pharmacy
  > 5x park_recreation
  > 4x culture_theatre
  > 4x convenience_store
  > 4x personal_services
  > 4x government_central
  > 3x bank
  > 3x micro_parcel_locker
  > 3x shopping_mall
  > 2x car_services
  > 2x post_office
  > 2x health_clinic
  > 2x education_preschool
  > 1x micro_atm
  > 1x regional_rail_hub
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - bank                   : Deutsche Bank
    - culture_theatre        : Helios
    - micro_atm              : Bankomat BZ WBK
    - bank                   : Millennium Bank
    - regional_rail_hub      : Gorzów Wielkopolski
    - car_services           : Shell
    - car_services           : BP
    - culture_theatre        : Biblioteka Główna
    - convenience_store      : Żabka
    - post_office            : UP Gorzów Wlkp. 12
    - gastronomy             : U Bartosza
    - gastronomy             : Łubu Dubu
```
</details>
<details><summary><b>Wieprzyce PKP (891f0a41d73ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Wieprzyce PKP
  stop_id               : 35
  h3_index              : 891f0a41d73ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.0710

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 24464452.4646

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 188.1429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6838.5060

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 400.4070

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 11x park_recreation
  > 7x industrial_zone
  > 6x commercial_zone
  > 2x education_preschool
  > 1x micro_parcel_locker
  > 1x place_of_worship
  > 1x convenience_store
  > 1x supermarket
  > 1x car_services

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - education_preschool    : Prywatne Przedszkole ELEMELEK
    - micro_parcel_locker    : Paczkomat InPost
    - industrial_zone        : Zajezdnia tramwajowo-autobusowa MZK
    - park_recreation        : Park Wieprzycki
    - place_of_worship       : Kościół pw. Trójcy Świętej
    - convenience_store      : Lewiatan
    - supermarket            : Delikatesy Centrum
    - car_services           : Stacja Paliw MZK
    - commercial_zone        : Budnex Sp. z o.o.
    - commercial_zone        : Kaskat Sp. z o.o.
```
</details>
<details><summary><b>Czechów Klonowa (891f0a450c7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Czechów Klonowa
  stop_id               : 1081
  h3_index              : 891f0a450c7ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.0710

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 24464452.4646

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 188.1429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6838.5060

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 400.4070

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 3x industrial_zone
  > 1x convenience_store
  > 1x micro_playground
  > 1x micro_parcel_locker
  > 1x place_of_worship

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store      : Maniek
    - micro_parcel_locker    : Paczkomat InPost
    - place_of_worship       : Kościół pw. Najświętszej Maryi Panny Królowej Polski
    - industrial_zone        : SARRIS DARM SPÓŁKA Z O.O.
```
</details>
<details><summary><b>Czechów SARRIS DARM (891f0a4508fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Czechów SARRIS DARM
  stop_id               : 1080
  h3_index              : 891f0a4508fffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.0710

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 24464452.4646

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 188.1429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6838.5060

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 400.4070

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 3x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - industrial_zone        : SARRIS DARM SPÓŁKA Z O.O.
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Gorzów Wielkopolski (891f0a40aafffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Gorzów Wielkopolski
  stop_id               : 13904
  h3_index              : 891f0a40aafffff
  hub_id                : 0

[OCENA Z-SCORE & RANK]
  grade                 : B
  local_percentile      : 71.4286
  local_score_raw       : 0.0716

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 1088925144.1299

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 4861.1111

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 25.9101

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 21x gastronomy
  > 13x specialized_retail
  > 13x commercial_zone
  > 6x park_recreation
  > 5x micro_playground
  > 4x convenience_store
  > 4x micro_parcel_locker
  > 4x industrial_zone
  > 3x shopping_mall
  > 3x education_high_school
  > 3x health_clinic
  > 2x culture_theatre
  > 2x bank
  > 2x post_office
  > 2x pharmacy
  > 2x personal_services
  > 1x micro_atm
  > 1x regional_rail_hub
  > 1x car_services
  > 1x government_central
  > 1x social_support_mops
  > 1x university_campus
  > 1x sports_centre

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - culture_theatre        : Helios
    - micro_atm              : Bankomat BZ WBK
    - bank                   : Millennium Bank
    - regional_rail_hub      : Gorzów Wielkopolski
    - car_services           : Shell
    - convenience_store      : Żabka
    - specialized_retail     : Vistula
    - specialized_retail     : Promod
    - gastronomy             : Sphinx
    - specialized_retail     : Big Star
    - specialized_retail     : Pako Lorente
    - gastronomy             : Bistro 111
```
</details>
<details><summary><b>Gorzów Wielkopolski Zamoście (891f0a40b53ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Gorzów Wielkopolski Zamoście
  stop_id               : 13953
  h3_index              : 891f0a40b53ffff
  hub_id                : 4

[OCENA Z-SCORE & RANK]
  grade                 : C
  local_percentile      : 57.1429
  local_score_raw       : -0.1118

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 34133105.9665

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5210.8295

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 165.3759

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 18x industrial_zone
  > 13x park_recreation
  > 9x commercial_zone
  > 8x micro_playground
  > 4x gastronomy
  > 3x micro_parcel_locker
  > 2x specialized_retail
  > 2x personal_services
  > 2x convenience_store
  > 2x social_support_mops
  > 2x shopping_mall
  > 2x place_of_worship
  > 2x health_clinic
  > 1x post_office
  > 1x pharmacy
  > 1x bank
  > 1x police_station
  > 1x education_preschool
  > 1x education_high_school
  > 1x marketplace

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - specialized_retail     : Jajo Strusia
    - personal_services      : Gorzów Repeta
    - convenience_store      : Carrefour Express
    - gastronomy             : Dobry Skład
    - gastronomy             : Bar Jesz
    - micro_parcel_locker    : Paczkomat InPost
    - specialized_retail     : Komfort
    - social_support_mops    : Caritas
    - pharmacy               : Apteka Ogólnodostępna Pogodna
    - gastronomy             : il Pavone
    - micro_parcel_locker    : Orlen Paczka
    - shopping_mall          : TK Maxx
```
</details>
<details><summary><b>Gorzów Wielkopolski Wschodni (891f0a40b8bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Gorzów Wielkopolski Wschodni
  stop_id               : 260653
  h3_index              : 891f0a40b8bffff
  hub_id                : 3

[OCENA Z-SCORE & RANK]
  grade                 : D
  local_percentile      : 42.8571
  local_score_raw       : -0.1638

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 51713341.4594

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5314.6297

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 51.2183

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 11x commercial_zone
  > 10x park_recreation
  > 8x gastronomy
  > 7x government_central
  > 7x education_high_school
  > 5x micro_playground
  > 4x culture_theatre
  > 4x micro_parcel_locker
  > 3x place_of_worship
  > 2x convenience_store
  > 2x education_preschool
  > 2x supermarket
  > 2x sports_centre
  > 1x post_office
  > 1x bank
  > 1x micro_atm
  > 1x car_services
  > 1x university_campus
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - culture_theatre        : Teatr im. Juliusza Osterwy
    - post_office            : Poczta Polska
    - bank                   : Lubuski Bank Spółdzielczy
    - micro_atm              : Euronet
    - gastronomy             : Art Cafe
    - convenience_store      : Żabka
    - gastronomy             : Kamienica Smaku
    - gastronomy             : Dobre Koryto
    - gastronomy             : Restauracja WietNam Ha-Noi
    - government_central     : Biuro Związku Celowego Gmin MG-6 w Gorzowie
    - convenience_store      : Żabka
    - government_central     : Wojewódzki Inspektorat Transportu Drogowego w Gorzowie
```
</details>
<details><summary><b>Gorzów Wielkopolski Wieprzyce (891f0a41d73ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Gorzów Wielkopolski Wieprzyce
  stop_id               : 13961
  h3_index              : 891f0a41d73ffff
  hub_id                : 2

[OCENA Z-SCORE & RANK]
  grade                 : D
  local_percentile      : 28.5714
  local_score_raw       : -0.2249

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 9090946.5836

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7563.2226

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 10.9838

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 11x park_recreation
  > 6x industrial_zone
  > 5x commercial_zone
  > 2x education_preschool
  > 1x micro_parcel_locker
  > 1x place_of_worship
  > 1x convenience_store
  > 1x supermarket
  > 1x car_services

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - education_preschool    : Prywatne Przedszkole ELEMELEK
    - micro_parcel_locker    : Paczkomat InPost
    - industrial_zone        : Zajezdnia tramwajowo-autobusowa MZK
    - park_recreation        : Park Wieprzycki
    - place_of_worship       : Kościół pw. Trójcy Świętej
    - convenience_store      : Lewiatan
    - supermarket            : Delikatesy Centrum
    - car_services           : Stacja Paliw MZK
    - commercial_zone        : Budnex Sp. z o.o.
    - commercial_zone        : Kaskat Sp. z o.o.
```
</details>
<details><summary><b>Gorzów Wielkopolski Karnin (891f0a4e143ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Gorzów Wielkopolski Karnin
  stop_id               : 13946
  h3_index              : 891f0a4e143ffff
  hub_id                : 1

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 14.2857
  local_score_raw       : -0.9596

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 159007.8973

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6015.3994

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 5.5869

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x micro_parcel_locker
  > 1x place_of_worship
  > 1x supermarket

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_parcel_locker    : Paczkomat InPost
    - place_of_worship       : Kościół filialny NMP Królowej Polski w Karninie
    - supermarket            : Dino
```
</details>

---

## GZM
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: 0.000, Std: 0.609)
     Rozkład Kartek (unikalne Huby): A: 23, A+: 12, B: 35, C: 47, D: 58, F: 57
[👥 BAZA LUDNOŚCI GUS] ❌ OSTRZEŻENIE DEMOGRAFICZNE: Odchylenie 59.3%. GUS: 3,664,676 vs Baza: 2,300,000
[❌]  `sum_pull` <= 0 w POI PARQUET!
[✅]  POP Parquet 100% Valid
```

### Faza 0: Statystyki ogólne
- **Populacja Miasta:** 3,664,676 (GUS Grid)
- **Transakcje RCN:** 212,099

### Faza III: Top 20 POI (Miasto)

| Kategoria | Tier | Ilość w Mieście | Wartość Punktowa (W) |
|---|---|---|---|
| `international_airport` | T0_MEGA_HUB | 2 | 14,202,902,456 |
| `national_rail_hub` | T0_MEGA_HUB | 38 | 2,367,259,201 |
| `regional_rail_hub` | T1_NATIONAL_MAGNET | 71 | 1,165,893,238 |
| `national_stadium` | T1_NATIONAL_MAGNET | 115 | 230,445,499 |
| `hospital_clinical` | T1_NATIONAL_MAGNET | 128 | 228,598,430 |
| `university_campus` | T1_NATIONAL_MAGNET | 144 | 184,725,807 |
| `exhibition_centre` | T1_NATIONAL_MAGNET | 1 | 85,796,483 |
| `industrial_zone` | T2_STRATEGIC_HUB | 4743 | 20,012,785 |
| `logistics_hub` | T2_STRATEGIC_HUB | 2 | 19,043,596 |
| `commercial_zone` | T2_STRATEGIC_HUB | 2538 | 17,982,326 |
| `shopping_mall` | T2_STRATEGIC_HUB | 219 | 17,456,535 |
| `student_dormitory` | T2_STRATEGIC_HUB | 2 | 17,007,019 |
| `supermarket` | T2_STRATEGIC_HUB | 1267 | 12,613,359 |
| `government_central` | T2_STRATEGIC_HUB | 600 | 10,858,040 |
| `business_office` | T2_STRATEGIC_HUB | 886 | 8,581,446 |
| `marketplace` | T3_LOCAL_CORE | 122 | 1,778,431 |
| `education_high_school` | T3_LOCAL_CORE | 1646 | 1,757,160 |
| `sports_centre` | T3_LOCAL_CORE | 838 | 1,576,496 |
| `social_support_mops` | T3_LOCAL_CORE | 289 | 1,203,024 |
| `culture_theatre` | T3_LOCAL_CORE | 490 | 926,346 |

### Faza IV: Próbki Pełnego DNA 100% (Zobacz szczegóły POI!)

#### NAJLEPSZE PRZYSTANKI (TOP 5)
<details><summary><b>Katowice (891e232dcd7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Katowice
  stop_id               : 73312
  h3_index              : 891e232dcd7ffff
  hub_id                : 76

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.2861

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 2939339575.6057

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 103.7143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7088.2298

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 176.3686

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 149x gastronomy
  > 111x specialized_retail
  > 65x personal_services
  > 33x convenience_store
  > 23x bank
  > 21x micro_atm
  > 15x health_clinic
  > 13x pharmacy
  > 13x commercial_zone
  > 12x government_central
  > 11x culture_theatre
  > 9x business_office
  > 8x park_recreation
  > 7x micro_parcel_locker
  > 7x place_of_worship
  > 6x supermarket
  > 6x education_high_school
  > 6x university_campus
  > 6x micro_playground
  > 4x post_office
  > 4x shopping_mall
  > 3x car_services
  > 2x police_station
  > 2x industrial_zone
  > 1x national_rail_hub
  > 1x sports_centre
  > 1x social_support_mops
  > 1x exhibition_centre
  > 1x marketplace

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - supermarket            : Zenit
    - government_central     : Sąd Okręgowy w Katowicach
    - culture_theatre        : Teatr Bez Sceny
    - micro_atm              : Euronet
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
<details><summary><b>Szopienice Kościół (891e232ca93ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Szopienice Kościół
  stop_id               : 2970
  h3_index              : 891e232ca93ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.5690
  local_score_raw       : 1.2111

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 3254492.4262

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 1467.7143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5168.7764

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 30.7783

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 7x park_recreation
  > 7x micro_playground
  > 5x education_high_school
  > 5x industrial_zone
  > 4x convenience_store
  > 4x micro_parcel_locker
  > 3x pharmacy
  > 3x education_preschool
  > 2x gastronomy
  > 2x bank
  > 2x personal_services
  > 2x health_clinic
  > 2x place_of_worship
  > 2x commercial_zone
  > 1x micro_atm
  > 1x police_station
  > 1x culture_theatre
  > 1x business_office
  > 1x sports_centre
  > 1x post_office
  > 1x supermarket
  > 1x marketplace
  > 1x hospital_clinical
  > 1x social_support_mops

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - pharmacy               : Apteka \
    - pharmacy               : Apteka \
    - micro_atm              : Santander
    - police_station         : Komisariat Policji V w Katowicach
    - education_preschool    : Żłobek Miejski
    - education_high_school  : Szkoła Podstawowa nr 55
    - pharmacy               : Apteka \
    - gastronomy             : Maccolino
    - convenience_store      : Żabka
    - bank                   : Santander
    - personal_services      : Rossmann
    - bank                   : Bank Pekao
```
</details>
<details><summary><b>Strzemieszyce Stacyjna (891e2e584a7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Strzemieszyce Stacyjna
  stop_id               : 2866
  h3_index              : 891e2e584a7ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.5690
  local_score_raw       : 1.2111

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 3254492.4262

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 1467.7143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5168.7764

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 30.7783

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 2x industrial_zone
  > 2x micro_playground
  > 1x national_rail_hub
  > 1x micro_parcel_locker
  > 1x convenience_store
  > 1x gastronomy
  > 1x culture_theatre
  > 1x education_high_school
  > 1x park_recreation
  > 1x supermarket

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - national_rail_hub      : Dąbrowa Górnicza Strzemieszyce
    - micro_parcel_locker    : Paczkomat InPost
    - gastronomy             : Ale Kava
    - culture_theatre        : Miejska Biblioteka Publiczna - Filia nr 8
    - education_high_school  : Szkoła Podstawowa nr 17
    - park_recreation        : Plac Szczęśliwego Krasnala
    - supermarket            : Biedronka
```
</details>
<details><summary><b>Mokre Kolonia (891e059044bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Mokre Kolonia
  stop_id               : 6465
  h3_index              : 891e059044bffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.5690
  local_score_raw       : 1.2111

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 3254492.4262

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 1467.7143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5168.7764

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 30.7783

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 7x industrial_zone
  > 2x commercial_zone
  > 1x car_services

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - car_services           : Mariocar
```
</details>
<details><summary><b>Pyskowice Powstańców Śląskich (891e23382dbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Pyskowice Powstańców Śląskich
  stop_id               : 4131
  h3_index              : 891e23382dbffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.5690
  local_score_raw       : 1.2111

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 3254492.4262

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 1467.7143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5168.7764

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 30.7783

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 6x gastronomy
  > 6x personal_services
  > 5x specialized_retail
  > 4x micro_parcel_locker
  > 3x supermarket
  > 3x industrial_zone
  > 2x convenience_store
  > 2x health_clinic
  > 2x commercial_zone
  > 2x micro_playground
  > 1x pharmacy
  > 1x sports_centre
  > 1x bank
  > 1x micro_atm
  > 1x park_recreation
  > 1x car_services
  > 1x place_of_worship
  > 1x education_high_school

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - pharmacy               : Zdrowit
    - convenience_store      : Żabka
    - gastronomy             : Verde
    - sports_centre          : Basen przy szkole podstawowej nr 5
    - personal_services      : Fryzostyl
    - specialized_retail     : Gold Mebel
    - specialized_retail     : Kids
    - gastronomy             : Kebab Nook
    - personal_services      : Pasja
    - bank                   : Alior Bank
    - gastronomy             : Selim Kebab Haus
    - health_clinic          : Apex
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Bohumín (891e05d3333ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Bohumín
  stop_id               : 179223
  h3_index              : 891e05d3333ffff
  hub_id                : 19

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 2.1552
  local_score_raw       : -1.6363

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 2.6429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6066.9456

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Drogomyśl (891e05d483bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Drogomyśl
  stop_id               : 75861
  h3_index              : 891e05d483bffff
  hub_id                : 56

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 1.7241
  local_score_raw       : -1.6724

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 1.5000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6066.9456

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 0.6743

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Inwałd (891e05b9a83ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Inwałd
  stop_id               : 76299
  h3_index              : 891e05b9a83ffff
  hub_id                : 69

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 1.2931
  local_score_raw       : -1.6805

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6066.9456

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 10.4192

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Kotulin (891e230e197ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Kotulin
  stop_id               : 70276
  h3_index              : 891e230e197ffff
  hub_id                : 92

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.8621
  local_score_raw       : -1.8236

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6066.9456

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 2.4676

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Bukowno Przymiarki (891e2e58937ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Bukowno Przymiarki
  stop_id               : 74260
  h3_index              : 891e2e58937ffff
  hub_id                : 21

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.4310
  local_score_raw       : -1.9341

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6066.9456

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 0.3809

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>

---

## KIELCE
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: -0.000, Std: 0.642)
     Rozkład Kartek (unikalne Huby): A: 2, A+: 1, B: 3, C: 4, D: 4, F: 4
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
<details><summary><b>Skwer Sendlerowej (891e2eb5ea3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Skwer Sendlerowej
  stop_id               : 1553
  h3_index              : 891e2eb5ea3ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.8444

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 66410115.0295

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 150.5000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7809.3602

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 108.8057

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 79x park_recreation
  > 77x gastronomy
  > 57x personal_services
  > 53x specialized_retail
  > 19x government_central
  > 16x bank
  > 16x micro_atm
  > 14x commercial_zone
  > 13x convenience_store
  > 10x micro_parcel_locker
  > 10x business_office
  > 10x health_clinic
  > 10x education_high_school
  > 6x shopping_mall
  > 5x pharmacy
  > 5x supermarket
  > 4x culture_theatre
  > 3x post_office
  > 3x micro_playground
  > 2x education_preschool
  > 2x place_of_worship
  > 1x sports_centre
  > 1x social_support_mops

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - government_central     : Urząd Marszałkowski Województwa Świętokrzyskiego Departament Wdrażania Europejskiego Funduszu Społecznego
    - bank                   : Millennium Bank
    - micro_atm              : Euronet
    - bank                   : mBank
    - micro_atm              : Euronet
    - bank                   : ING Bank Śląski
    - shopping_mall          : Centrum Rondo
    - bank                   : Santander
    - personal_services      : Rossmann
    - micro_atm              : Planet Cash
    - gastronomy             : Pierogarnia
    - gastronomy             : Jadłodalnia Tempo
```
</details>
<details><summary><b>Chęciny / Dąbrowskiego (891e2ea044bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Chęciny / Dąbrowskiego
  stop_id               : 1552
  h3_index              : 891e2ea044bffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.8444

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 66410115.0295

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 150.5000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7809.3602

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 108.8057

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Bilcza III (891e2ea0d6fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Bilcza III
  stop_id               : 1551
  h3_index              : 891e2ea0d6fffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.8444

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 66410115.0295

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 150.5000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7809.3602

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 108.8057

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 4x micro_playground
  > 2x commercial_zone
  > 2x park_recreation
  > 2x education_preschool
  > 1x culture_theatre
  > 1x convenience_store
  > 1x micro_parcel_locker
  > 1x supermarket
  > 1x gastronomy
  > 1x place_of_worship
  > 1x shopping_mall
  > 1x sports_centre
  > 1x education_high_school

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - culture_theatre        : Biblioteka publiczno-szkolna
    - convenience_store      : Livio
    - micro_parcel_locker    : Paczkomat InPost
    - supermarket            : Spar
    - gastronomy             : Pyszna Micha
    - place_of_worship       : Kościół pw. Świętego Kazimierza
    - shopping_mall          : Słoneczny Pasaż
    - sports_centre          : Hala Sportowa Bilcza
    - education_high_school  : Szkoła Podstawowa im. ks. Piotra Ściegiennego w Bilczy
    - education_preschool    : Przedszkole Nr 1  w Bilczy
```
</details>
<details><summary><b>Chabrowa / Wojska Polskiego (891e2ea7437ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Chabrowa / Wojska Polskiego
  stop_id               : 1537
  h3_index              : 891e2ea7437ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.8444

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 66410115.0295

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 150.5000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7809.3602

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 108.8057

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x place_of_worship
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
```
</details>
<details><summary><b>Korona / Arka (891e2eb5e67ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Korona / Arka
  stop_id               : 1536
  h3_index              : 891e2eb5e67ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.8444

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 66410115.0295

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 150.5000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7809.3602

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 108.8057

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 26x park_recreation
  > 7x education_high_school
  > 6x convenience_store
  > 6x micro_playground
  > 3x gastronomy
  > 3x health_clinic
  > 3x specialized_retail
  > 3x culture_theatre
  > 3x commercial_zone
  > 2x national_stadium
  > 2x personal_services
  > 2x education_preschool
  > 2x sports_centre
  > 2x place_of_worship
  > 1x pharmacy
  > 1x post_office
  > 1x business_office
  > 1x university_campus

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - national_stadium       : Hala sportowa
    - convenience_store      : J&K Market
    - gastronomy             : Pizzeria Kadzielnia
    - convenience_store      : Lewiatan
    - education_high_school  : VII Liceum Ogólnokształcące imienia Józefa Piłsudskiego w Kielcach
    - pharmacy               : Farm-Vit
    - post_office            : Poczta Polska
    - convenience_store      : Odido
    - personal_services      : Ystin
    - convenience_store      : Żabka
    - convenience_store      : Żabka
    - convenience_store      : Społem
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Dębska Wola (891e2eae263ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Dębska Wola
  stop_id               : 64097
  h3_index              : 891e2eae263ffff
  hub_id                : 1

[OCENA Z-SCORE & RANK]
  grade                 : D
  local_percentile      : 27.7778
  local_score_raw       : -0.2751

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 6278684.4961

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7388.8165

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 4.4035

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 3x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
```
</details>
<details><summary><b>Piekoszów Łaziska (891e2eb19abffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Piekoszów Łaziska
  stop_id               : 64782
  h3_index              : 891e2eb19abffff
  hub_id                : 11

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 22.2222
  local_score_raw       : -0.2962

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 17951637.2423

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7388.8165

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1.0493

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 3x commercial_zone
  > 2x car_services
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - car_services           : Stacja Paliw XEL
    - car_services           : XEL
```
</details>
<details><summary><b>Piekoszów (891e2ea24b3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Piekoszów
  stop_id               : 280410
  h3_index              : 891e2ea24b3ffff
  hub_id                : 10

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 16.6667
  local_score_raw       : -0.3530

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 20416459.2048

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7388.8165

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 0.0248

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 6x industrial_zone
  > 3x commercial_zone
  > 2x business_office
  > 1x park_recreation

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - business_office        : Alma-Alpinex
    - business_office        : Stacja Demontażu Pojazdów AutoPort
    - industrial_zone        : Magazyn Logistyczno-Dystrybucyjny Artykułów Spożywczych
```
</details>
<details><summary><b>Brzeziny (891e2ea0e77ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Brzeziny
  stop_id               : 63867
  h3_index              : 891e2ea0e77ffff
  hub_id                : 0

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 11.1111
  local_score_raw       : -0.6605

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 11793.8171

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7388.8165

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 6.8521

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x convenience_store

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store      : Groszek
```
</details>
<details><summary><b>Tumlin (891e2eb6297ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Tumlin
  stop_id               : 63776
  h3_index              : 891e2eb6297ffff
  hub_id                : 15

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 5.5556
  local_score_raw       : -1.3775

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
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: 0.000, Std: 0.665)
     Rozkład Kartek (unikalne Huby): A: 6, A+: 4, B: 9, C: 13, D: 16, F: 15
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
<details><summary><b>Balice Airport (891e05b4587ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Balice Airport
  stop_id               : STRATEGIC
  h3_index              : 891e05b4587ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 2.5148

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 22605208.8395

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 890.5000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 11495.8449

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 188.5301

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Stella-Sawickiego (891e2e6a363ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Stella-Sawickiego
  stop_id               : 12
  h3_index              : 891e2e6a363ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 2.5148

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 22605208.8395

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 890.5000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 11495.8449

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 188.5301

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 29x park_recreation
  > 6x micro_parcel_locker
  > 6x micro_playground
  > 4x convenience_store
  > 4x personal_services
  > 3x car_services
  > 3x gastronomy
  > 3x industrial_zone
  > 2x education_preschool
  > 1x micro_atm
  > 1x university_campus
  > 1x sports_centre
  > 1x supermarket
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - car_services           : MPO
    - personal_services      : Sensuelle
    - convenience_store      : Żabka
    - convenience_store      : Żabka
    - gastronomy             : Docent
    - micro_parcel_locker    : Paczkomat InPost
    - micro_parcel_locker    : Paczkomat InPost
    - micro_parcel_locker    : Paczkomat InPost
    - micro_parcel_locker    : Paczkomat InPost
    - gastronomy             : Osama Sushi
    - personal_services      : Bulldog Barbers
    - education_preschool    : Bajeczka
```
</details>
<details><summary><b>Stella-Sawickiego (891e2e6a363ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Stella-Sawickiego
  stop_id               : 13
  h3_index              : 891e2e6a363ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 2.5148

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 22605208.8395

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 890.5000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 11495.8449

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 188.5301

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 25x park_recreation
  > 8x micro_parcel_locker
  > 7x micro_playground
  > 6x personal_services
  > 5x convenience_store
  > 3x gastronomy
  > 2x micro_atm
  > 2x education_preschool
  > 2x industrial_zone
  > 2x car_services
  > 1x university_campus
  > 1x supermarket
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - personal_services      : Sensuelle
    - convenience_store      : Żabka
    - convenience_store      : Żabka
    - convenience_store      : Lewiatan
    - gastronomy             : Docent
    - micro_atm              : Euronet
    - personal_services      : Kraina Urody
    - micro_parcel_locker    : Paczkomat InPost
    - micro_parcel_locker    : Paczkomat InPost
    - micro_parcel_locker    : Paczkomat InPost
    - micro_parcel_locker    : Paczkomat InPost
    - gastronomy             : Osama Sushi
```
</details>
<details><summary><b>KRAKÓW PRZYLASEK (891e2e6f067ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : KRAKÓW PRZYLASEK
  stop_id               : 280604
  h3_index              : 891e2e6f067ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 2.5148

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 22605208.8395

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 890.5000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 11495.8449

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 188.5301

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
```
</details>
<details><summary><b>Cienista (891e2e6ae17ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Cienista
  stop_id               : 102
  h3_index              : 891e2e6ae17ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 2.5148

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 22605208.8395

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 890.5000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 11495.8449

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 188.5301

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 7x micro_parcel_locker
  > 6x education_high_school
  > 6x car_services
  > 2x supermarket
  > 2x gastronomy
  > 2x micro_playground
  > 1x health_clinic
  > 1x personal_services
  > 1x business_office
  > 1x social_support_mops
  > 1x specialized_retail
  > 1x micro_atm
  > 1x sports_centre
  > 1x place_of_worship
  > 1x education_preschool
  > 1x industrial_zone
  > 1x park_recreation

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - education_high_school  : Securcom - Niepubliczna Placówka Kształcenia Ustawicznego
    - education_high_school  : Podstawowa Szkoła Specjalna nr 71 im. Marii Grzegorzewskiej
    - education_high_school  : Szkoła Specjalna Przysposabiająca do Pracy nr 1
    - education_high_school  : Branżowa Szkoła Specjalna I Stopnia nr 31
    - health_clinic          : Przychodnia na Krakowiaków \
    - car_services           : Moya
    - personal_services      : Baciar Barber Shop
    - car_services           : Valdi
    - supermarket            : Lewiatan
    - car_services           : Auto Center Gaz
    - business_office        : G4 Geodezja
    - social_support_mops    : Noclegownia i schronisko dla bezdomnych mężczyzn
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Wielkie Drogi (891e05a28a3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Wielkie Drogi
  stop_id               : 78022
  h3_index              : 891e05a28a3ffff
  hub_id                : 55

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 7.9365
  local_score_raw       : -1.0557

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 1.9286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7964.1256

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 35.3482

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Goszcza (891e2e6315bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Goszcza
  stop_id               : 79350
  h3_index              : 891e2e6315bffff
  hub_id                : 2

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 6.3492
  local_score_raw       : -1.2368

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 1.4286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 10592.4296

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 2.7805

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Wola Radziszowska (891e05a54d3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Wola Radziszowska
  stop_id               : 80168
  h3_index              : 891e05a54d3ffff
  hub_id                : 56

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 4.7619
  local_score_raw       : -1.4253

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 10592.4296

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 12.2700

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Podolany (891e05a090bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Podolany
  stop_id               : 178077
  h3_index              : 891e05a090bffff
  hub_id                : 38

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 3.1746
  local_score_raw       : -1.4777

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
<details><summary><b>Kraków Nowa Huta (891e2e61a6fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Kraków Nowa Huta
  stop_id               : 178406
  h3_index              : 891e2e61a6fffff
  hub_id                : 19

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 1.5873
  local_score_raw       : -1.6748

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0714

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 10592.4296

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 0.1316

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>

---

## KUTNO
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: 0.000, Std: 0.723)
     Rozkład Kartek (unikalne Huby): A+: 1, B: 1, C: 1, D: 1, F: 1
[👥 BAZA LUDNOŚCI GUS] Brak profilu w CITY_BASELINES
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
```

### Faza 0: Statystyki ogólne
- **Populacja Miasta:** 47,419 (GUS Grid)
- **Transakcje RCN:** 533

### Faza III: Top 20 POI (Miasto)

| Kategoria | Tier | Ilość w Mieście | Wartość Punktowa (W) |
|---|---|---|---|
| `national_rail_hub` | T0_MEGA_HUB | 1 | 1,655,992,455 |
| `hospital_clinical` | T1_NATIONAL_MAGNET | 1 | 205,664,834 |
| `national_stadium` | T1_NATIONAL_MAGNET | 1 | 173,549,346 |
| `university_campus` | T1_NATIONAL_MAGNET | 2 | 133,151,467 |
| `industrial_zone` | T2_STRATEGIC_HUB | 98 | 16,663,023 |
| `shopping_mall` | T2_STRATEGIC_HUB | 2 | 15,215,160 |
| `commercial_zone` | T2_STRATEGIC_HUB | 3 | 14,681,670 |
| `supermarket` | T2_STRATEGIC_HUB | 20 | 9,930,920 |
| `government_central` | T2_STRATEGIC_HUB | 12 | 9,038,752 |
| `business_office` | T2_STRATEGIC_HUB | 4 | 8,029,100 |
| `social_support_mops` | T3_LOCAL_CORE | 4 | 1,567,108 |
| `marketplace` | T3_LOCAL_CORE | 2 | 1,565,088 |
| `education_high_school` | T3_LOCAL_CORE | 19 | 1,329,468 |
| `sports_centre` | T3_LOCAL_CORE | 10 | 1,091,806 |
| `culture_theatre` | T3_LOCAL_CORE | 4 | 797,461 |
| `health_clinic` | T3_LOCAL_CORE | 10 | 788,377 |
| `police_station` | T4_DAILY_SERVICE | 2 | 106,189 |
| `education_preschool` | T4_DAILY_SERVICE | 10 | 104,951 |
| `park_recreation` | T4_DAILY_SERVICE | 27 | 103,295 |
| `place_of_worship` | T4_DAILY_SERVICE | 18 | 83,258 |

### Faza IV: Próbki Pełnego DNA 100% (Zobacz szczegóły POI!)

#### NAJLEPSZE PRZYSTANKI (TOP 5)
<details><summary><b>Dworzec PKP (891f52c9997ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Dworzec PKP
  stop_id               : 1
  h3_index              : 891f52c9997ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.1070

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 19381975.0668

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 20.1429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6519.2465

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 169.7358

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 10x park_recreation
  > 8x convenience_store
  > 6x micro_playground
  > 4x micro_parcel_locker
  > 3x car_services
  > 3x place_of_worship
  > 2x gastronomy
  > 2x industrial_zone
  > 1x micro_atm
  > 1x post_office
  > 1x national_rail_hub
  > 1x sports_centre
  > 1x specialized_retail
  > 1x education_preschool
  > 1x health_clinic
  > 1x government_central

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store      : Żabka
    - convenience_store      : Agatka
    - micro_atm              : Euronet
    - gastronomy             : Espresso cafe
    - post_office            : Poczta Polska
    - national_rail_hub      : Kutno
    - gastronomy             : Super Kebab
    - micro_parcel_locker    : Paczkomat InPost
    - convenience_store      : Groszek
    - micro_parcel_locker    : Paczkomat InPost
    - micro_parcel_locker    : DHL BOX 24/7
    - micro_parcel_locker    : DPD Pickup Station
```
</details>
<details><summary><b>Sienkiewicza / Wspólna Praca (891f52c8a53ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Sienkiewicza / Wspólna Praca
  stop_id               : 3
  h3_index              : 891f52c8a53ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.1070

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 19381975.0668

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 20.1429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6519.2465

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 169.7358

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 16x gastronomy
  > 16x convenience_store
  > 14x bank
  > 12x specialized_retail
  > 10x park_recreation
  > 7x micro_atm
  > 7x pharmacy
  > 6x personal_services
  > 6x micro_parcel_locker
  > 5x micro_playground
  > 5x government_central
  > 3x health_clinic
  > 2x car_services
  > 2x supermarket
  > 1x police_station
  > 1x marketplace
  > 1x sports_centre
  > 1x place_of_worship
  > 1x industrial_zone
  > 1x culture_theatre
  > 1x education_high_school

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : Bankomat BZ WBK
    - gastronomy             : Jana
    - bank                   : Bank Pekao
    - bank                   : Bank Pekao
    - bank                   : BNP Paribas
    - convenience_store      : Malwina 24h
    - convenience_store      : Żabka
    - convenience_store      : Żabka
    - gastronomy             : Pizzeria Papa Doriano
    - convenience_store      : Żabka
    - gastronomy             : Pizzeria 55
    - bank                   : meritumbank
```
</details>
<details><summary><b>Narutowicza / Rondo (891f52c8a53ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Narutowicza / Rondo
  stop_id               : 4
  h3_index              : 891f52c8a53ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.1070

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 19381975.0668

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 20.1429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6519.2465

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 169.7358

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 15x convenience_store
  > 14x bank
  > 13x gastronomy
  > 12x specialized_retail
  > 8x park_recreation
  > 7x micro_atm
  > 7x micro_playground
  > 6x personal_services
  > 6x pharmacy
  > 6x government_central
  > 5x micro_parcel_locker
  > 4x health_clinic
  > 3x supermarket
  > 3x place_of_worship
  > 2x culture_theatre
  > 2x car_services
  > 2x education_high_school
  > 1x police_station
  > 1x marketplace
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : Bankomat BZ WBK
    - bank                   : Bank Pekao
    - bank                   : Bank Pekao
    - bank                   : BNP Paribas
    - culture_theatre        : Kino
    - convenience_store      : Malwina 24h
    - convenience_store      : Żabka
    - convenience_store      : Żabka
    - gastronomy             : Pizzeria Papa Doriano
    - convenience_store      : Żabka
    - gastronomy             : Pizzeria 55
    - bank                   : meritumbank
```
</details>
<details><summary><b>Skłodowskiej / MZK (891f52c8ac3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Skłodowskiej / MZK
  stop_id               : 5
  h3_index              : 891f52c8ac3ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.1070

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 19381975.0668

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 20.1429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6519.2465

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 169.7358

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 8x convenience_store
  > 4x education_high_school
  > 4x micro_playground
  > 4x park_recreation
  > 3x bank
  > 3x gastronomy
  > 3x micro_parcel_locker
  > 3x pharmacy
  > 3x government_central
  > 2x culture_theatre
  > 2x supermarket
  > 2x health_clinic
  > 2x place_of_worship
  > 1x micro_atm
  > 1x car_services
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - bank                   : Bank Pekao
    - culture_theatre        : Kino
    - bank                   : meritumbank
    - gastronomy             : Altero
    - convenience_store      : Delikatesy
    - education_high_school  : II Liceum Ogólnokształcące im. Jana Kasprowicza w Kutnie
    - convenience_store      : Delikatesy Centrum
    - car_services           : Gumir
    - gastronomy             : Bistro Różane
    - bank                   : PKO BP
    - micro_parcel_locker    : Paczkomat InPost
    - micro_parcel_locker    : Paczkomat InPost
```
</details>
<details><summary><b>Skłodowskiej / MZK (891f52c8ac3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Skłodowskiej / MZK
  stop_id               : 6
  h3_index              : 891f52c8ac3ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.1070

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 19381975.0668

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 20.1429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6519.2465

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 169.7358

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 7x convenience_store
  > 4x micro_playground
  > 4x park_recreation
  > 3x bank
  > 3x gastronomy
  > 3x education_high_school
  > 3x micro_parcel_locker
  > 3x government_central
  > 2x culture_theatre
  > 2x pharmacy
  > 2x supermarket
  > 2x health_clinic
  > 2x place_of_worship
  > 1x micro_atm
  > 1x car_services
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - bank                   : Bank Pekao
    - culture_theatre        : Kino
    - bank                   : meritumbank
    - gastronomy             : Altero
    - convenience_store      : Delikatesy
    - education_high_school  : II Liceum Ogólnokształcące im. Jana Kasprowicza w Kutnie
    - car_services           : Gumir
    - gastronomy             : Bistro Różane
    - bank                   : PKO BP
    - micro_parcel_locker    : Paczkomat InPost
    - micro_parcel_locker    : Paczkomat InPost
    - pharmacy               : Medest I
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Wschodnia / Południow (891f525253bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Wschodnia / Południow
  stop_id               : 691
  h3_index              : 891f525253bffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.1070

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 19381975.0668

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 20.1429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6519.2465

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 169.7358

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 10x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - industrial_zone        : Hoop Polska Sp. z o.o.
    - industrial_zone        : DS Smith Polska sp z o.o. Zakład Kutno
    - industrial_zone        : \
    - industrial_zone        : PAJA Folie Sp. z o.o.
    - industrial_zone        : LIBNER POLSKA SP. Z O.O.
    - industrial_zone        : Lampre Polska Sp. z o.o
    - industrial_zone        : Enginova Sp. z o.o.
    - industrial_zone        : Serioplast Poland Sp. z o.o.
    - industrial_zone        : Star Fitness
    - industrial_zone        : Łódzka Specjalna Strefa Ekonomiczna - Podstrefa Kutno
```
</details>
<details><summary><b>Kutno (891f52c9997ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Kutno
  stop_id               : 32201
  h3_index              : 891f52c9997ffff
  hub_id                : 0

[OCENA Z-SCORE & RANK]
  grade                 : B
  local_percentile      : 80.0000
  local_score_raw       : 0.2378

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 1471673767.0727

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 4755.4348

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 100.1097

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 10x park_recreation
  > 9x convenience_store
  > 6x micro_playground
  > 5x micro_parcel_locker
  > 5x industrial_zone
  > 3x place_of_worship
  > 2x car_services
  > 1x micro_atm
  > 1x gastronomy
  > 1x post_office
  > 1x national_rail_hub
  > 1x education_high_school
  > 1x specialized_retail
  > 1x education_preschool
  > 1x health_clinic
  > 1x government_central

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store      : Delikatesy
    - convenience_store      : Żabka
    - convenience_store      : Agatka
    - micro_atm              : Euronet
    - gastronomy             : Espresso cafe
    - post_office            : Poczta Polska
    - national_rail_hub      : Kutno
    - micro_parcel_locker    : Paczkomat InPost
    - convenience_store      : Groszek
    - micro_parcel_locker    : Paczkomat InPost
    - micro_parcel_locker    : Paczkomat InPost
    - micro_parcel_locker    : DHL BOX 24/7
```
</details>
<details><summary><b>Sklęczki (891f52c8b6fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Sklęczki
  stop_id               : 32441
  h3_index              : 891f52c8b6fffff
  hub_id                : 3

[OCENA Z-SCORE & RANK]
  grade                 : C
  local_percentile      : 60.0000
  local_score_raw       : -0.0817

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 1999802.1075

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6346.7492

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 6.4223

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 5x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - industrial_zone        : GO Trakt
    - industrial_zone        : Schomburg
    - industrial_zone        : AMZ-Kutno
    - industrial_zone        : EKOBUD
```
</details>
<details><summary><b>Kutno Azory (891f52c9ca3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Kutno Azory
  stop_id               : 32326
  h3_index              : 891f52c9ca3ffff
  hub_id                : 1

[OCENA Z-SCORE & RANK]
  grade                 : D
  local_percentile      : 40.0000
  local_score_raw       : -0.5779

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 93128.0323

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 3974.3198

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 3.1490

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
  hub_id                : 2

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 20.0000
  local_score_raw       : -0.6853

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6346.7492

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 9.8409

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>

---

## LEGNICA
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: -0.000, Std: 0.653)
     Rozkład Kartek (unikalne Huby): A: 1, A+: 1, B: 1, C: 2, D: 2, F: 2
[👥 BAZA LUDNOŚCI GUS] ❌ OSTRZEŻENIE DEMOGRAFICZNE: Odchylenie 28.1%. GUS: 115,261 vs Baza: 90,000
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
```

### Faza 0: Statystyki ogólne
- **Populacja Miasta:** 115,261 (GUS Grid)
- **Transakcje RCN:** 17,704

### Faza III: Top 20 POI (Miasto)

| Kategoria | Tier | Ilość w Mieście | Wartość Punktowa (W) |
|---|---|---|---|
| `national_rail_hub` | T0_MEGA_HUB | 1 | 1,834,542,142 |
| `hospital_clinical` | T1_NATIONAL_MAGNET | 1 | 264,184,796 |
| `national_stadium` | T1_NATIONAL_MAGNET | 2 | 172,415,694 |
| `university_campus` | T1_NATIONAL_MAGNET | 3 | 167,816,720 |
| `shopping_mall` | T2_STRATEGIC_HUB | 7 | 16,782,525 |
| `industrial_zone` | T2_STRATEGIC_HUB | 155 | 16,367,897 |
| `commercial_zone` | T2_STRATEGIC_HUB | 55 | 15,478,991 |
| `supermarket` | T2_STRATEGIC_HUB | 43 | 9,089,550 |
| `government_central` | T2_STRATEGIC_HUB | 37 | 7,462,030 |
| `business_office` | T2_STRATEGIC_HUB | 18 | 6,850,912 |
| `marketplace` | T3_LOCAL_CORE | 3 | 1,287,543 |
| `education_high_school` | T3_LOCAL_CORE | 40 | 1,248,043 |
| `sports_centre` | T3_LOCAL_CORE | 17 | 1,052,295 |
| `social_support_mops` | T3_LOCAL_CORE | 7 | 860,984 |
| `health_clinic` | T3_LOCAL_CORE | 31 | 652,149 |
| `culture_theatre` | T3_LOCAL_CORE | 24 | 630,719 |
| `park_recreation` | T4_DAILY_SERVICE | 206 | 119,758 |
| `education_preschool` | T4_DAILY_SERVICE | 29 | 105,020 |
| `place_of_worship` | T4_DAILY_SERVICE | 62 | 86,776 |
| `car_services` | T4_DAILY_SERVICE | 21 | 68,766 |

### Faza IV: Próbki Pełnego DNA 100% (Zobacz szczegóły POI!)

#### NAJLEPSZE PRZYSTANKI (TOP 5)
<details><summary><b>Okrężna - Sportowców (891e26389cbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Okrężna - Sportowców
  stop_id               : 2136
  h3_index              : 891e26389cbffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.3185

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 3302232.8887

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 56.3571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 4881.6568

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 39.3238

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x convenience_store
  > 1x micro_parcel_locker
  > 1x sports_centre

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store      : Żabka
    - micro_parcel_locker    : Paczkomat InPost
```
</details>
<details><summary><b>Okrężna - Bystra (891e26389cbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Okrężna - Bystra
  stop_id               : 2135
  h3_index              : 891e26389cbffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.3185

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 3302232.8887

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 56.3571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 4881.6568

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 39.3238

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x place_of_worship
  > 1x sports_centre

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - place_of_worship       : Kościół pw. Świętego Wojciecha
```
</details>
<details><summary><b>Karlińskiego - Pod Pająkiem (891e2638953ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Karlińskiego - Pod Pająkiem
  stop_id               : 2134
  h3_index              : 891e2638953ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.3185

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 3302232.8887

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 56.3571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 4881.6568

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 39.3238

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - industrial_zone        : Stacja gazowa
```
</details>
<details><summary><b>Karlińskiego - Myśliwca (891e2638953ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Karlińskiego - Myśliwca
  stop_id               : 2133
  h3_index              : 891e2638953ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.3185

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 3302232.8887

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 56.3571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 4881.6568

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 39.3238

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x micro_parcel_locker
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_parcel_locker    : Paczkomat InPost
    - industrial_zone        : Stacja gazowa
```
</details>
<details><summary><b>Karlinskiego - Myrka (891e263894bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Karlinskiego - Myrka
  stop_id               : 2132
  h3_index              : 891e263894bffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.3185

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 3302232.8887

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 56.3571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 4881.6568

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 39.3238

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 2x industrial_zone
  > 1x micro_parcel_locker
  > 1x post_office
  > 1x gastronomy

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_parcel_locker    : Paczkomat InPost
    - post_office            : GLS
    - gastronomy             : Pizza Drive
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Legnica Strefa (891e262a4a7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Legnica Strefa
  stop_id               : 279503
  h3_index              : 891e262a4a7ffff
  hub_id                : 5

[OCENA Z-SCORE & RANK]
  grade                 : C
  local_percentile      : 55.5556
  local_score_raw       : -0.0751

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 14591502.4030

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 4759.2628

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 3x industrial_zone
  > 1x business_office

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - business_office        : Oddział Lear Corporation Poland II
    - industrial_zone        : Legnicka Specjalna Strefa Ekonomiczna - Obszar Legnica I
    - industrial_zone        : Legnicka Specjalna Strefa Ekonomiczna - Obszar Legnickie Pole I
    - industrial_zone        : Legnicka Specjalna Strefa Ekonomiczna - Obszar Legnickie Pole I
```
</details>
<details><summary><b>Szczedrzykowice (891e2620143ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Szczedrzykowice
  stop_id               : 53124
  h3_index              : 891e2620143ffff
  hub_id                : 7

[OCENA Z-SCORE & RANK]
  grade                 : D
  local_percentile      : 44.4444
  local_score_raw       : -0.1814

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 13002743.8100

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 1090.6040

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 12.3447

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
```
</details>
<details><summary><b>Jaśkowice Legnickie (891e2620053ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Jaśkowice Legnickie
  stop_id               : 53132
  h3_index              : 891e2620053ffff
  hub_id                : 0

[OCENA Z-SCORE & RANK]
  grade                 : D
  local_percentile      : 33.3333
  local_score_raw       : -0.4817

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 17232.0221

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 3888.5288

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 4.0837

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x pharmacy

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - pharmacy               : Punkt Apteczny Lekosfera Dga 19
```
</details>
<details><summary><b>Rzeszotary (891e263a9dbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Rzeszotary
  stop_id               : 53249
  h3_index              : 891e263a9dbffff
  hub_id                : 6

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 22.2222
  local_score_raw       : -0.6119

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 12363.8900

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 2107.1115

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 10.0016

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 2x car_services
  > 1x place_of_worship
  > 1x micro_playground

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - place_of_worship       : Kościół pw. Świętego Krzyża
```
</details>
<details><summary><b>Kunice (891e2623303ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Kunice
  stop_id               : 280916
  h3_index              : 891e2623303ffff
  hub_id                : 2

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 11.1111
  local_score_raw       : -0.8136

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 489.0936

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 4759.2628

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 0.3040

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x education_preschool

  [WSKAZANE KONKRETNE INSTYTUCJE]
```
</details>

---

## LESZNO
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: 0.000, Std: 0.649)
     Rozkład Kartek (unikalne Huby): A+: 1, B: 1, C: 1, D: 1, F: 1
[👥 BAZA LUDNOŚCI GUS] Brak profilu w CITY_BASELINES
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
```

### Faza 0: Statystyki ogólne
- **Populacja Miasta:** 81,945 (GUS Grid)
- **Transakcje RCN:** 3,695

### Faza III: Top 20 POI (Miasto)

| Kategoria | Tier | Ilość w Mieście | Wartość Punktowa (W) |
|---|---|---|---|
| `regional_rail_hub` | T1_NATIONAL_MAGNET | 1 | 888,538,546 |
| `hospital_clinical` | T1_NATIONAL_MAGNET | 2 | 189,368,558 |
| `national_stadium` | T1_NATIONAL_MAGNET | 4 | 133,648,789 |
| `university_campus` | T1_NATIONAL_MAGNET | 24 | 83,276,985 |
| `industrial_zone` | T2_STRATEGIC_HUB | 92 | 16,179,375 |
| `commercial_zone` | T2_STRATEGIC_HUB | 37 | 14,370,923 |
| `shopping_mall` | T2_STRATEGIC_HUB | 11 | 12,986,994 |
| `supermarket` | T2_STRATEGIC_HUB | 46 | 8,267,056 |
| `government_central` | T2_STRATEGIC_HUB | 41 | 6,839,176 |
| `business_office` | T2_STRATEGIC_HUB | 40 | 5,635,533 |
| `marketplace` | T3_LOCAL_CORE | 3 | 1,267,530 |
| `education_high_school` | T3_LOCAL_CORE | 52 | 1,163,141 |
| `sports_centre` | T3_LOCAL_CORE | 15 | 871,356 |
| `social_support_mops` | T3_LOCAL_CORE | 8 | 864,534 |
| `culture_theatre` | T3_LOCAL_CORE | 13 | 714,702 |
| `health_clinic` | T3_LOCAL_CORE | 48 | 614,440 |
| `park_recreation` | T4_DAILY_SERVICE | 70 | 119,601 |
| `education_preschool` | T4_DAILY_SERVICE | 40 | 95,537 |
| `place_of_worship` | T4_DAILY_SERVICE | 24 | 90,638 |
| `police_station` | T4_DAILY_SERVICE | 11 | 81,926 |

### Faza IV: Próbki Pełnego DNA 100% (Zobacz szczegóły POI!)

#### NAJLEPSZE PRZYSTANKI (TOP 5)
<details><summary><b>Energetyków (891e2461407ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Energetyków
  stop_id               : 313
  h3_index              : 891e2461407ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 0.8446

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 17116112.4639

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 16.5000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5555.5556

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 74.8737

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 12x specialized_retail
  > 9x gastronomy
  > 4x government_central
  > 3x business_office
  > 2x post_office
  > 2x micro_parcel_locker
  > 2x car_services
  > 2x personal_services
  > 2x bank
  > 2x shopping_mall
  > 2x commercial_zone
  > 1x supermarket
  > 1x micro_playground
  > 1x university_campus
  > 1x pharmacy
  > 1x industrial_zone
  > 1x culture_theatre
  > 1x education_high_school
  > 1x park_recreation

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - supermarket            : Intermarché
    - specialized_retail     : H&M
    - specialized_retail     : C&A
    - specialized_retail     : New Yorker
    - specialized_retail     : Carry
    - specialized_retail     : Cubus
    - government_central     : Regionalne Centrum Gospodarki Odpadami reSort sp. z o.o.
    - specialized_retail     : Dyskont Oskar
    - post_office            : DPD Strefa Paczki
    - government_central     : Komunalny Związek Gmin Regionu Leszczyńskiego
    - university_campus      : Arena Kreatywnej Edukacji
    - post_office            : FedEx Express
```
</details>
<details><summary><b>Gronówko bloki (891e2463593ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Gronówko bloki
  stop_id               : 281
  h3_index              : 891e2463593ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 0.8446

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 17116112.4639

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 16.5000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5555.5556

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 74.8737

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x micro_playground

  [WSKAZANE KONKRETNE INSTYTUCJE]
```
</details>
<details><summary><b>Święciechowa II (891e247ab47ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Święciechowa II
  stop_id               : 279
  h3_index              : 891e247ab47ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 0.8446

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 17116112.4639

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 16.5000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5555.5556

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 74.8737

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
```
</details>
<details><summary><b>Jagiełły (891e2463093ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Jagiełły
  stop_id               : 278
  h3_index              : 891e2463093ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 0.8446

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 17116112.4639

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 16.5000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5555.5556

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 74.8737

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 4x micro_playground
  > 1x convenience_store
  > 1x car_services
  > 1x education_preschool
  > 1x gastronomy
  > 1x supermarket
  > 1x micro_parcel_locker

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store      : Żabka
    - car_services           : Mechanika pojazdowa Ryszard Hope
    - education_preschool    : Malowane Żyrafy
    - gastronomy             : Pizzeria MAFIA
    - supermarket            : Dino
    - micro_parcel_locker    : Paczkomat InPost
```
</details>
<details><summary><b>Jagiełły (891e2463093ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Jagiełły
  stop_id               : 277
  h3_index              : 891e2463093ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 0.8446

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 17116112.4639

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 16.5000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5555.5556

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 74.8737

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 4x micro_playground
  > 1x convenience_store
  > 1x car_services
  > 1x education_preschool
  > 1x gastronomy
  > 1x supermarket
  > 1x micro_parcel_locker

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store      : Żabka
    - car_services           : Mechanika pojazdowa Ryszard Hope
    - education_preschool    : Malowane Żyrafy
    - gastronomy             : Pizzeria MAFIA
    - supermarket            : Dino
    - micro_parcel_locker    : Paczkomat InPost
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Kasprowicza (891e2463257ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Kasprowicza
  stop_id               : 2
  h3_index              : 891e2463257ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 0.8446

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 17116112.4639

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 16.5000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5555.5556

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 74.8737

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 6x gastronomy
  > 6x personal_services
  > 5x specialized_retail
  > 3x micro_atm
  > 3x health_clinic
  > 3x industrial_zone
  > 3x commercial_zone
  > 2x supermarket
  > 2x education_preschool
  > 2x pharmacy
  > 2x government_central
  > 2x sports_centre
  > 2x marketplace
  > 2x micro_parcel_locker
  > 2x place_of_worship
  > 2x park_recreation
  > 1x post_office
  > 1x convenience_store
  > 1x culture_theatre
  > 1x car_services
  > 1x business_office
  > 1x bank
  > 1x shopping_mall
  > 1x micro_playground

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : Santander
    - micro_atm              : Bankomat BZ WBK
    - supermarket            : POLOmarket
    - education_preschool    : Przedszkole Miejskie Nr 7
    - convenience_store      : Żabka
    - specialized_retail     : Pepco
    - culture_theatre        : Miejska Biblioteka Publiczna Filia Nr 1
    - car_services           : Orlen
    - gastronomy             : Bar Zbyhal
    - pharmacy               : Dom Leków
    - health_clinic          : NZOZ MERIDIAN
    - personal_services      : Abes
```
</details>
<details><summary><b>Leszno (891e246328bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Leszno
  stop_id               : 42606
  h3_index              : 891e246328bffff
  hub_id                : 0

[OCENA Z-SCORE & RANK]
  grade                 : B
  local_percentile      : 80.0000
  local_score_raw       : 0.3902

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 1281436898.5407

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5220.5221

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 44.3682

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 12x government_central
  > 11x specialized_retail
  > 7x micro_atm
  > 7x gastronomy
  > 7x health_clinic
  > 6x education_high_school
  > 5x pharmacy
  > 5x industrial_zone
  > 4x bank
  > 4x personal_services
  > 4x park_recreation
  > 4x micro_playground
  > 4x commercial_zone
  > 3x supermarket
  > 2x post_office
  > 2x culture_theatre
  > 2x car_services
  > 2x police_station
  > 2x education_preschool
  > 2x convenience_store
  > 1x regional_rail_hub
  > 1x micro_parcel_locker
  > 1x hospital_clinical
  > 1x university_campus
  > 1x social_support_mops
  > 1x shopping_mall

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - regional_rail_hub      : Leszno
    - post_office            : Urząd Pocztowy Leszno 1
    - bank                   : Santander
    - micro_atm              : Santander
    - micro_atm              : Bankomat BZ WBK
    - micro_atm              : Bankomat BZ WBK
    - education_high_school  : Szkoła Podstawowa nr 9
    - micro_atm              : Bankomat Kredyt Bank
    - supermarket            : POLOmarket
    - supermarket            : Dino
    - specialized_retail     : Salon Meblowy
    - specialized_retail     : Pepco
```
</details>
<details><summary><b>Leszno Grzybowo (891e24631cfffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Leszno Grzybowo
  stop_id               : 42754
  h3_index              : 891e24631cfffff
  hub_id                : 1

[OCENA Z-SCORE & RANK]
  grade                 : C
  local_percentile      : 60.0000
  local_score_raw       : -0.0976

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 26999702.5201

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7830.6837

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 2.4137

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 2x micro_parcel_locker
  > 2x business_office
  > 2x industrial_zone
  > 1x car_services
  > 1x gastronomy
  > 1x commercial_zone
  > 1x education_preschool
  > 1x health_clinic

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - car_services           : Orlen
    - gastronomy             : Grant
    - micro_parcel_locker    : Paczkomat InPost
    - micro_parcel_locker    : Paczkomat InPost
    - business_office        : PS Farm
    - business_office        : Jakub Pelec
    - education_preschool    : Akademia Odkrywców
    - health_clinic          : VISUS
```
</details>
<details><summary><b>Lipno Nowe (891e2471887ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Lipno Nowe
  stop_id               : 42648
  h3_index              : 891e2471887ffff
  hub_id                : 2

[OCENA Z-SCORE & RANK]
  grade                 : D
  local_percentile      : 40.0000
  local_score_raw       : -0.2841

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 14410545.9022

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 4000.0000

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 14.3865

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 2x gastronomy
  > 1x car_services
  > 1x police_station
  > 1x bank
  > 1x micro_parcel_locker
  > 1x pharmacy
  > 1x place_of_worship
  > 1x micro_playground
  > 1x supermarket
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - car_services           : Stacja Paliw Markowski
    - police_station         : Komisariat Policji Rewir w Lipnie
    - bank                   : Poznański Bank Spółdzielczy
    - micro_parcel_locker    : Paczkomat InPost
    - pharmacy               : Punkt Apteczny Aronia
    - gastronomy             : Raz Dwa Trzy
    - place_of_worship       : Kaplica pw. Św. Jadwigi Śląskiej w Lipnie
    - gastronomy             : Pod Lipami
    - supermarket            : Dino
```
</details>
<details><summary><b>Wilkowice (891e2471a4fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Wilkowice
  stop_id               : 42952
  h3_index              : 891e2471a4fffff
  hub_id                : 3

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 20.0000
  local_score_raw       : -0.8531

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 54960.6560

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 3000.0000

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 22.9993

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x micro_parcel_locker
  > 1x supermarket

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_parcel_locker    : Appkomat InPost
    - supermarket            : Dino
```
</details>

---

## LODZ
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: -0.000, Std: 0.685)
     Rozkład Kartek (unikalne Huby): A: 5, A+: 3, B: 7, C: 10, D: 12, F: 12
[👥 BAZA LUDNOŚCI GUS] ❌ OSTRZEŻENIE DEMOGRAFICZNE: Odchylenie 55.4%. GUS: 1,041,306 vs Baza: 670,000
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
```

### Faza 0: Statystyki ogólne
- **Populacja Miasta:** 1,041,306 (GUS Grid)
- **Transakcje RCN:** 9,351

### Faza III: Top 20 POI (Miasto)

| Kategoria | Tier | Ilość w Mieście | Wartość Punktowa (W) |
|---|---|---|---|
| `international_airport` | T0_MEGA_HUB | 1 | 12,184,884,591 |
| `national_rail_hub` | T0_MEGA_HUB | 5 | 2,219,843,847 |
| `regional_rail_hub` | T1_NATIONAL_MAGNET | 14 | 1,083,122,288 |
| `hospital_clinical` | T1_NATIONAL_MAGNET | 37 | 217,280,016 |
| `national_stadium` | T1_NATIONAL_MAGNET | 10 | 198,351,396 |
| `university_campus` | T1_NATIONAL_MAGNET | 92 | 184,312,978 |
| `industrial_zone` | T2_STRATEGIC_HUB | 1518 | 18,290,379 |
| `shopping_mall` | T2_STRATEGIC_HUB | 75 | 16,779,165 |
| `commercial_zone` | T2_STRATEGIC_HUB | 1162 | 16,201,642 |
| `logistics_hub` | T2_STRATEGIC_HUB | 8 | 15,025,206 |
| `student_dormitory` | T2_STRATEGIC_HUB | 1 | 14,177,184 |
| `supermarket` | T2_STRATEGIC_HUB | 331 | 11,882,566 |
| `government_central` | T2_STRATEGIC_HUB | 180 | 9,731,960 |
| `business_office` | T2_STRATEGIC_HUB | 162 | 7,981,330 |
| `education_high_school` | T3_LOCAL_CORE | 388 | 1,623,530 |
| `marketplace` | T3_LOCAL_CORE | 46 | 1,516,559 |
| `social_support_mops` | T3_LOCAL_CORE | 73 | 1,426,209 |
| `sports_centre` | T3_LOCAL_CORE | 212 | 1,232,547 |
| `culture_theatre` | T3_LOCAL_CORE | 150 | 868,127 |
| `health_clinic` | T3_LOCAL_CORE | 454 | 777,651 |

### Faza IV: Próbki Pełnego DNA 100% (Zobacz szczegóły POI!)

#### NAJLEPSZE PRZYSTANKI (TOP 5)
<details><summary><b>Łódź Zarzew (891e21b11a3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Łódź Zarzew
  stop_id               : 280915
  h3_index              : 891e21b11a3ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 2.4231

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 180105032.9878

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 552.2857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5481.2484

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 78.8680

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 9x commercial_zone
  > 7x industrial_zone
  > 1x car_services
  > 1x business_office
  > 1x sports_centre

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - car_services           : MOL
    - business_office        : PEKAES
    - commercial_zone        : Netia
    - industrial_zone        : Panattoni Business Center Łódź II
    - industrial_zone        : Panattoni Business Center Łódź III
```
</details>
<details><summary><b>Pabianice Północne (891e21bb15bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Pabianice Północne
  stop_id               : 280346
  h3_index              : 891e21bb15bffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 2.4231

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 180105032.9878

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 552.2857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5481.2484

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 78.8680

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 2x gastronomy
  > 1x supermarket
  > 1x micro_parcel_locker
  > 1x education_high_school
  > 1x police_station

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy             : Willa Impresja
    - supermarket            : Willa Impresja
    - micro_parcel_locker    : Paczkomat InPost
    - education_high_school  : Szkoła Podstawowa nr 5
    - police_station         : Komenda Powiatowa Policji w Pabianicach
```
</details>
<details><summary><b>Zgierz Rudunki (891f5249d4bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Zgierz Rudunki
  stop_id               : 280344
  h3_index              : 891f5249d4bffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 2.4231

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 180105032.9878

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 552.2857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5481.2484

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 78.8680

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 4x park_recreation

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - park_recreation        : Rodzinny Ogród Działkowy \
    - park_recreation        : Rodzinny Ogród Działkowy \
    - park_recreation        : Rodzinny Ogród Działkowy \
    - park_recreation        : Ogródki działkowe \
```
</details>
<details><summary><b>Łódź Radogoszcz Wschód (891f5249b4fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Łódź Radogoszcz Wschód
  stop_id               : 264956
  h3_index              : 891f5249b4fffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 2.4231

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 180105032.9878

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 552.2857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5481.2484

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 78.8680

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 6x micro_playground
  > 3x micro_parcel_locker
  > 2x pharmacy
  > 2x health_clinic
  > 1x supermarket
  > 1x micro_atm
  > 1x gastronomy
  > 1x sports_centre
  > 1x education_high_school
  > 1x education_preschool

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - pharmacy               : Nastrojowa
    - supermarket            : Biedronka
    - health_clinic          : Uśmiech. Poradnia stomatologii rodzinnej
    - micro_atm              : Planet Cash
    - micro_parcel_locker    : Paczkomat InPost
    - gastronomy             : Bukowiecki Sushi
    - micro_parcel_locker    : DPD Pickup Station
    - micro_parcel_locker    : DPD Pickup Station
    - health_clinic          : MCM Bałuty. Przychodnia Zdrowia Nastrojowa
    - pharmacy               : Brassica
    - education_high_school  : Szkoła Podstawowa nr 184 im. Ludwika Waryńskiego
    - education_preschool    : Przedszkole Miejskie nr 231
```
</details>
<details><summary><b>Łódź Warszawska (891e21b356fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Łódź Warszawska
  stop_id               : 264955
  h3_index              : 891e21b356fffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 2.4231

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 180105032.9878

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 552.2857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5481.2484

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 78.8680

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 14x park_recreation
  > 5x education_high_school
  > 4x micro_parcel_locker
  > 3x micro_playground
  > 2x supermarket
  > 1x car_services
  > 1x convenience_store
  > 1x social_support_mops
  > 1x industrial_zone
  > 1x education_preschool

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - education_high_school  : Szkoła Podstawowa Specjalna nr 39
    - education_high_school  : LVI Liceum Ogólnokształcące Specjalne
    - education_high_school  : Technikum Specjalne nr 23
    - supermarket            : Stokrotka Market
    - micro_parcel_locker    : Allegro One Box
    - micro_parcel_locker    : Orlen Paczka
    - micro_parcel_locker    : Appkomat InPost
    - micro_parcel_locker    : Paczkomat InPost
    - convenience_store      : Żabka
    - education_high_school  : Zespół Szkół Geodezyjno-Technicznych
    - social_support_mops    : Dom Pomocy Społecznej POGODNA JESIEŃ
    - supermarket            : Biedronka
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Smardzew (891f5248adbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Smardzew
  stop_id               : 46946
  h3_index              : 891f5248adbffff
  hub_id                : 36

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 10.2041
  local_score_raw       : -0.8158

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 24262.9499

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 2.2143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 2505.3686

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 7.7910

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x health_clinic
  > 1x micro_parcel_locker
  > 1x pharmacy
  > 1x convenience_store

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - health_clinic          : Niepubliczny Zakład Opieki Zdrowotnej \
    - micro_parcel_locker    : Paczkomat InPost
    - pharmacy               : Leśna
    - convenience_store      : Odido
```
</details>
<details><summary><b>Chrusty Nowe (891e21a7453ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Chrusty Nowe
  stop_id               : 47415
  h3_index              : 891e21a7453ffff
  hub_id                : 3

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 8.1633
  local_score_raw       : -0.9125

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 12082.6928

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.9286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5477.5695

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 2.2595

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x convenience_store

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store      : Sklep Spożywczy
```
</details>
<details><summary><b>Łaznów (891e21a0bd3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Łaznów
  stop_id               : 47431
  h3_index              : 891e21a0bd3ffff
  hub_id                : 1

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 6.1224
  local_score_raw       : -1.3342

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.8571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5477.5695

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 14.4544

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Wykno (891e21a4057ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Wykno
  stop_id               : 47548
  h3_index              : 891e21a4057ffff
  hub_id                : 40

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 4.0816
  local_score_raw       : -1.3700

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 1.9286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5477.5695

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1.2324

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Wolbórka (891e21ae6c7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Wolbórka
  stop_id               : 47449
  h3_index              : 891e21ae6c7ffff
  hub_id                : 39

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 2.0408
  local_score_raw       : -1.5535

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.8571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5477.5695

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1.3620

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>

---

## LOMZA
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: 0.000, Std: 0.600)
     Rozkład Kartek (unikalne Huby): A: 17, A+: 9, B: 25, C: 34, D: 42, F: 42
[👥 BAZA LUDNOŚCI GUS] ✅ DEMOGRAFIA OK (Odchylenie zaledwie 8.7%)
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
```

### Faza 0: Statystyki ogólne
- **Populacja Miasta:** 65,199 (GUS Grid)
- **Transakcje RCN:** 5,045

### Faza III: Top 20 POI (Miasto)

| Kategoria | Tier | Ilość w Mieście | Wartość Punktowa (W) |
|---|---|---|---|
| `national_stadium` | T1_NATIONAL_MAGNET | 1 | 209,769,262 |
| `hospital_clinical` | T1_NATIONAL_MAGNET | 2 | 201,219,951 |
| `university_campus` | T1_NATIONAL_MAGNET | 3 | 55,607,043 |
| `industrial_zone` | T2_STRATEGIC_HUB | 21 | 18,832,605 |
| `commercial_zone` | T2_STRATEGIC_HUB | 2 | 14,867,844 |
| `shopping_mall` | T2_STRATEGIC_HUB | 6 | 11,879,062 |
| `supermarket` | T2_STRATEGIC_HUB | 32 | 8,482,190 |
| `government_central` | T2_STRATEGIC_HUB | 16 | 7,985,801 |
| `business_office` | T2_STRATEGIC_HUB | 7 | 6,343,241 |
| `education_high_school` | T3_LOCAL_CORE | 32 | 1,252,803 |
| `sports_centre` | T3_LOCAL_CORE | 6 | 1,161,327 |
| `marketplace` | T3_LOCAL_CORE | 2 | 1,104,011 |
| `culture_theatre` | T3_LOCAL_CORE | 5 | 811,653 |
| `health_clinic` | T3_LOCAL_CORE | 10 | 655,261 |
| `social_support_mops` | T3_LOCAL_CORE | 3 | 556,070 |
| `park_recreation` | T4_DAILY_SERVICE | 27 | 123,292 |
| `education_preschool` | T4_DAILY_SERVICE | 33 | 87,428 |
| `place_of_worship` | T4_DAILY_SERVICE | 31 | 75,824 |
| `post_office` | T4_DAILY_SERVICE | 5 | 68,373 |
| `specialized_retail` | T4_DAILY_SERVICE | 28 | 63,043 |

### Faza IV: Próbki Pełnego DNA 100% (Zobacz szczegóły POI!)

#### NAJLEPSZE PRZYSTANKI (TOP 5)
<details><summary><b>Aleja Legionów — Stary Szpital (891f51c132fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Aleja Legionów — Stary Szpital
  stop_id               : 4
  h3_index              : 891f51c132fffff
  hub_id                : 16

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.2505

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 18035254.0577

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 10.1429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5293.9921

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 189.9900

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
    - pharmacy               : Gemini
    - marketplace            : Targowisko Miejskie
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
<details><summary><b>Stary Rynek (891f51c1e57ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Stary Rynek
  stop_id               : 35
  h3_index              : 891f51c1e57ffff
  hub_id                : 133

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.4083
  local_score_raw       : 1.1601

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 9933874.3525

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 12.5714

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5123.4125

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 60.9289

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 15x place_of_worship
  > 10x gastronomy
  > 8x park_recreation
  > 7x education_high_school
  > 6x bank
  > 6x micro_playground
  > 4x convenience_store
  > 3x pharmacy
  > 3x specialized_retail
  > 3x government_central
  > 2x micro_atm
  > 2x health_clinic
  > 2x personal_services
  > 2x social_support_mops
  > 2x micro_parcel_locker
  > 1x university_campus
  > 1x culture_theatre
  > 1x supermarket
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : Bankomat BZ WBK
    - bank                   : Millennium Bank
    - micro_atm              : Euronet
    - health_clinic          : Wojewódzki Ośrodek Profilaktyki i Terapii Uzależnień
    - gastronomy             : Pizzeria Diavolo Perfetto
    - pharmacy               : Cef@Rm 36
    - education_high_school  : Katolicka szkoła podstawowa im. Kardynała S. Wyszyńskiego
    - bank                   : BNP Paribas Polska
    - gastronomy             : Kuchnia Polska na Skarpie
    - bank                   : Crédit Agricole
    - bank                   : Kasa Stefczyka
    - bank                   : BNP Paribas Polska
```
</details>
<details><summary><b>Plac Kościuszki — Delikatesy (891f51c1ecbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Plac Kościuszki — Delikatesy
  stop_id               : 1
  h3_index              : 891f51c1ecbffff
  hub_id                : 81

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 98.8166
  local_score_raw       : 1.1358

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 1154373.9107

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 15.2143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5280.5102

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 112.8844

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 12x place_of_worship
  > 11x bank
  > 11x gastronomy
  > 11x micro_playground
  > 9x education_high_school
  > 8x park_recreation
  > 5x personal_services
  > 5x convenience_store
  > 4x specialized_retail
  > 4x government_central
  > 3x culture_theatre
  > 3x pharmacy
  > 3x social_support_mops
  > 3x micro_parcel_locker
  > 2x micro_atm
  > 1x police_station
  > 1x university_campus
  > 1x health_clinic
  > 1x post_office
  > 1x supermarket

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : Bankomat BZ WBK
    - bank                   : Millennium Bank
    - micro_atm              : Euronet
    - education_high_school  : Katolicka szkoła podstawowa im. Kardynała S. Wyszyńskiego
    - gastronomy             : Chicken Bar
    - culture_theatre        : Miejska Biblioteka Publiczna
    - bank                   : Alior Bank
    - bank                   : EuroBank
    - pharmacy               : Medica
    - personal_services      : Natura
    - police_station         : Komenda Miejska Policji w Łomży
    - education_high_school  : Zespół Szkół Specjalnych w Łomży
```
</details>
<details><summary><b>Plac Kościuszki — Jantar (891f51c1e53ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Plac Kościuszki — Jantar
  stop_id               : 2
  h3_index              : 891f51c1e53ffff
  hub_id                : 82

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 98.2249
  local_score_raw       : 1.1053

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 1428009.5737

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 14.2143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5277.0449

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 96.9705

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 14x place_of_worship
  > 11x bank
  > 11x gastronomy
  > 10x micro_playground
  > 8x education_high_school
  > 8x park_recreation
  > 5x convenience_store
  > 4x pharmacy
  > 4x specialized_retail
  > 4x personal_services
  > 4x government_central
  > 3x culture_theatre
  > 3x social_support_mops
  > 2x micro_atm
  > 2x health_clinic
  > 2x supermarket
  > 2x micro_parcel_locker
  > 1x police_station
  > 1x university_campus
  > 1x post_office

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : Bankomat BZ WBK
    - bank                   : Millennium Bank
    - micro_atm              : Euronet
    - health_clinic          : Wojewódzki Ośrodek Profilaktyki i Terapii Uzależnień
    - supermarket            : Lidl
    - pharmacy               : Cef@Rm 36
    - education_high_school  : Katolicka szkoła podstawowa im. Kardynała S. Wyszyńskiego
    - gastronomy             : Chicken Bar
    - culture_theatre        : Miejska Biblioteka Publiczna
    - bank                   : Alior Bank
    - bank                   : EuroBank
    - pharmacy               : Medica
```
</details>
<details><summary><b>Rządowa (891f51c1e53ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Rządowa
  stop_id               : 36
  h3_index              : 891f51c1e53ffff
  hub_id                : 111

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 97.6331
  local_score_raw       : 1.0100

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 555632.0116

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 12.6429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5125.0000

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 252.6701

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 15x place_of_worship
  > 10x gastronomy
  > 8x bank
  > 8x park_recreation
  > 8x micro_playground
  > 7x education_high_school
  > 5x convenience_store
  > 4x specialized_retail
  > 3x pharmacy
  > 3x personal_services
  > 3x government_central
  > 2x micro_atm
  > 2x health_clinic
  > 2x supermarket
  > 2x social_support_mops
  > 2x micro_parcel_locker
  > 1x university_campus
  > 1x post_office
  > 1x culture_theatre
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : Bankomat BZ WBK
    - bank                   : Millennium Bank
    - micro_atm              : Euronet
    - health_clinic          : Wojewódzki Ośrodek Profilaktyki i Terapii Uzależnień
    - supermarket            : Lidl
    - pharmacy               : Cef@Rm 36
    - education_high_school  : Katolicka szkoła podstawowa im. Kardynała S. Wyszyńskiego
    - bank                   : BNP Paribas Polska
    - gastronomy             : Kuchnia Polska na Skarpie
    - bank                   : Crédit Agricole
    - bank                   : Kasa Stefczyka
    - bank                   : PKO BP
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Królowej Bony (891f51c1ad7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Królowej Bony
  stop_id               : 212
  h3_index              : 891f51c1ad7ffff
  hub_id                : 53

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 2.3669
  local_score_raw       : -1.3622

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 1.5714

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5960.6481

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 19.5072

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Sikorskiego — Dworna (891f51c1e7bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Sikorskiego — Dworna
  stop_id               : 83
  h3_index              : 891f51c1e7bffff
  hub_id                : 115

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 1.7751
  local_score_raw       : -1.5376

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 717.1639

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.7857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 2692.3077

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 23.8990

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 4x education_high_school
  > 2x place_of_worship
  > 1x gastronomy
  > 1x bank
  > 1x convenience_store
  > 1x health_clinic
  > 1x government_central

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - education_high_school  : Szkoła Podstawowa nr 4
    - bank                   : Bank BPS
    - place_of_worship       : Kaplica klasztorna
    - convenience_store      : Sklep Spożywczy Ewa
    - health_clinic          : Pogotowie Ratunkowe w Łomży
    - government_central     : Prokuratura Rejonowa w Łomży
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
  hub_id                : 164

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 1.1834
  local_score_raw       : -1.5852

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 5.5372

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 1.0714

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 4879.1823

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 8.6292

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x micro_parcel_locker
  > 1x health_clinic

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_parcel_locker    : Appkomat InPost
    - health_clinic          : Gabinet Położnej \
```
</details>
<details><summary><b>Zdrojowa Ⅰ (891f51c1e6fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Zdrojowa Ⅰ
  stop_id               : 85
  h3_index              : 891f51c1e6fffff
  hub_id                : 167

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.5917
  local_score_raw       : -1.8560

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 4.2538

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 1.5714

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 2692.3077

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 16.9338

[TOP OBIEKTY POI (CATCHMENT 500m)]
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
  hub_id                : 167

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.5917
  local_score_raw       : -1.8560

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 4.2538

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 1.5714

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 2692.3077

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 16.9338

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x convenience_store

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store      : Sklep Spożywczy Ewa
```
</details>

---

## LUBLIN
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: -0.000, Std: 0.632)
     Rozkład Kartek (unikalne Huby): A: 2, A+: 2, B: 3, C: 4, D: 5, F: 5
[👥 BAZA LUDNOŚCI GUS] ❌ OSTRZEŻENIE DEMOGRAFICZNE: Odchylenie 35.2%. GUS: 446,126 vs Baza: 330,000
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
```

### Faza 0: Statystyki ogólne
- **Populacja Miasta:** 446,126 (GUS Grid)
- **Transakcje RCN:** 40,868

### Faza III: Top 20 POI (Miasto)

| Kategoria | Tier | Ilość w Mieście | Wartość Punktowa (W) |
|---|---|---|---|
| `international_airport` | T0_MEGA_HUB | 1 | 11,390,138,880 |
| `national_rail_hub` | T0_MEGA_HUB | 1 | 2,131,211,632 |
| `regional_rail_hub` | T1_NATIONAL_MAGNET | 4 | 1,031,718,843 |
| `hospital_clinical` | T1_NATIONAL_MAGNET | 23 | 192,969,097 |
| `national_stadium` | T1_NATIONAL_MAGNET | 10 | 180,730,108 |
| `university_campus` | T1_NATIONAL_MAGNET | 86 | 113,767,948 |
| `industrial_zone` | T2_STRATEGIC_HUB | 338 | 17,903,645 |
| `commercial_zone` | T2_STRATEGIC_HUB | 341 | 16,740,234 |
| `shopping_mall` | T2_STRATEGIC_HUB | 35 | 16,043,259 |
| `student_dormitory` | T2_STRATEGIC_HUB | 1 | 15,766,263 |
| `supermarket` | T2_STRATEGIC_HUB | 191 | 10,011,655 |
| `government_central` | T2_STRATEGIC_HUB | 104 | 9,275,588 |
| `business_office` | T2_STRATEGIC_HUB | 95 | 7,763,200 |
| `education_high_school` | T3_LOCAL_CORE | 274 | 1,219,234 |
| `marketplace` | T3_LOCAL_CORE | 31 | 1,198,429 |
| `social_support_mops` | T3_LOCAL_CORE | 69 | 1,048,535 |
| `sports_centre` | T3_LOCAL_CORE | 172 | 999,003 |
| `health_clinic` | T3_LOCAL_CORE | 210 | 745,751 |
| `culture_theatre` | T3_LOCAL_CORE | 84 | 695,497 |
| `police_station` | T4_DAILY_SERVICE | 22 | 147,654 |

### Faza IV: Próbki Pełnego DNA 100% (Zobacz szczegóły POI!)

#### NAJLEPSZE PRZYSTANKI (TOP 5)
<details><summary><b>ZIELONA-Zajezdnia Grygowej (891e2d7259bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : ZIELONA-Zajezdnia Grygowej
  stop_id               : 9871
  h3_index              : 891e2d7259bffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 2.0980

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 64472105.1533

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 221.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7324.0783

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 313.3785

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 10x industrial_zone
  > 4x car_services
  > 3x specialized_retail
  > 2x commercial_zone
  > 1x business_office

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - business_office        : Miejska Korporacja Komunikacyjna Sp.z o.o.
    - specialized_retail     : New Yorker
    - specialized_retail     : RTV Euro AGD
    - specialized_retail     : MediaMarkt
    - car_services           : Stacja Wodorowa Neso
    - car_services           : Hala Główna
    - industrial_zone        : Zajezdnia Trolejbusowa MPK Lublin
    - industrial_zone        : Zajezdnia Autobusowa \
    - industrial_zone        : Wytwórnia Betonu Towarowego
    - industrial_zone        : Drukarnia Embe-Press
    - industrial_zone        : Zakłady Chemiczne PERMEDIA S.A.
    - commercial_zone        : DPD
```
</details>
<details><summary><b> Dworzec Świdnik Wschodni (891e2d0d337ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             :  Dworzec Świdnik Wschodni
  stop_id               : 9862
  h3_index              : 891e2d0d337ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 2.0980

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 64472105.1533

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 221.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7324.0783

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 313.3785

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 8x micro_playground
  > 3x micro_parcel_locker
  > 3x specialized_retail
  > 2x supermarket
  > 2x personal_services
  > 2x car_services
  > 2x convenience_store
  > 1x post_office
  > 1x pharmacy
  > 1x education_high_school
  > 1x education_preschool
  > 1x place_of_worship
  > 1x health_clinic
  > 1x industrial_zone
  > 1x police_station
  > 1x park_recreation
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - pharmacy               : Top-Farm
    - micro_parcel_locker    : Paczkomat InPost
    - micro_parcel_locker    : Paczkomat InPost
    - supermarket            : Biedronka
    - personal_services      : Rossmann
    - specialized_retail     : Pepco
    - specialized_retail     : vive Profit
    - personal_services      : Hebe
    - specialized_retail     : Sinsay
    - micro_parcel_locker    : Paczkomat InPost
    - supermarket            : Biedronka
    - education_high_school  : Państwowa Szkoła Muzyczna I stopnia im. Rodziny Wiłkomirskich
```
</details>
<details><summary><b> Dworzec Świdnik Wschodni (891e2d0d337ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             :  Dworzec Świdnik Wschodni
  stop_id               : 9861
  h3_index              : 891e2d0d337ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 2.0980

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 64472105.1533

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 221.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7324.0783

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 313.3785

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 8x micro_playground
  > 3x micro_parcel_locker
  > 3x specialized_retail
  > 2x supermarket
  > 2x personal_services
  > 2x car_services
  > 2x convenience_store
  > 1x post_office
  > 1x pharmacy
  > 1x education_high_school
  > 1x education_preschool
  > 1x place_of_worship
  > 1x health_clinic
  > 1x industrial_zone
  > 1x police_station
  > 1x park_recreation
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - pharmacy               : Top-Farm
    - micro_parcel_locker    : Paczkomat InPost
    - micro_parcel_locker    : Paczkomat InPost
    - supermarket            : Biedronka
    - personal_services      : Rossmann
    - specialized_retail     : Pepco
    - specialized_retail     : vive Profit
    - personal_services      : Hebe
    - specialized_retail     : Sinsay
    - micro_parcel_locker    : Paczkomat InPost
    - supermarket            : Biedronka
    - education_high_school  : Państwowa Szkoła Muzyczna I stopnia im. Rodziny Wiłkomirskich
```
</details>
<details><summary><b>Tomaszowice - kościół (891e2d54d0fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Tomaszowice - kościół
  stop_id               : 9793
  h3_index              : 891e2d54d0fffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 2.0980

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 64472105.1533

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 221.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7324.0783

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 313.3785

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 3x education_high_school
  > 2x supermarket
  > 1x culture_theatre
  > 1x health_clinic
  > 1x pharmacy
  > 1x education_preschool
  > 1x micro_atm
  > 1x personal_services
  > 1x micro_parcel_locker
  > 1x industrial_zone
  > 1x park_recreation
  > 1x bank
  > 1x place_of_worship
  > 1x convenience_store
  > 1x micro_playground
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - culture_theatre        : Biblioteka Gminna
    - health_clinic          : NZOZ \
    - pharmacy               : Punkt Apteczny
    - education_preschool    : Klub przedszkolaka
    - micro_atm              : Bank Spółdzielczy w Cycowie
    - micro_parcel_locker    : Paczkomat InPost
    - education_high_school  : Szkoła Podstawowa
    - bank                   : Bank Spółdzielczy w Cycowie
    - place_of_worship       : Kościół pw. Świętych Apostołów Piotra i Pawła w Tomaszowicach
    - convenience_store      : Groszek
    - supermarket            : Lewiatan
    - commercial_zone        : Polski Inkubator Technologii i Biznesu Sp. z o. o.
```
</details>
<details><summary><b>Tomaszowice - kościół (891e2d54d3bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Tomaszowice - kościół
  stop_id               : 9792
  h3_index              : 891e2d54d3bffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 2.0980

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 64472105.1533

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 221.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7324.0783

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 313.3785

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 3x education_high_school
  > 2x supermarket
  > 1x culture_theatre
  > 1x health_clinic
  > 1x pharmacy
  > 1x education_preschool
  > 1x micro_atm
  > 1x personal_services
  > 1x micro_parcel_locker
  > 1x industrial_zone
  > 1x park_recreation
  > 1x bank
  > 1x place_of_worship
  > 1x convenience_store
  > 1x micro_playground
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - culture_theatre        : Biblioteka Gminna
    - health_clinic          : NZOZ \
    - pharmacy               : Punkt Apteczny
    - education_preschool    : Klub przedszkolaka
    - micro_atm              : Bank Spółdzielczy w Cycowie
    - micro_parcel_locker    : Paczkomat InPost
    - education_high_school  : Szkoła Podstawowa
    - bank                   : Bank Spółdzielczy w Cycowie
    - place_of_worship       : Kościół pw. Świętych Apostołów Piotra i Pawła w Tomaszowicach
    - convenience_store      : Groszek
    - supermarket            : Lewiatan
    - commercial_zone        : Polski Inkubator Technologii i Biznesu Sp. z o. o.
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Krężnica Jara (891e2d44dcbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Krężnica Jara
  stop_id               : 51383
  h3_index              : 891e2d44dcbffff
  hub_id                : 3

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 23.8095
  local_score_raw       : -0.3409

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 4287.1462

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7245.8954

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 13.9390

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 2x convenience_store
  > 1x gastronomy
  > 1x micro_parcel_locker
  > 1x place_of_worship
  > 1x car_services

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store      : Żabka
    - gastronomy             : Kebab - Pizzeria Akcent
    - convenience_store      : ABC
    - micro_parcel_locker    : Paczkomat InPost
    - place_of_worship       : Kościół pw. Świętego Floriana
```
</details>
<details><summary><b>Rudnik (891e2d0f643ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Rudnik
  stop_id               : 50641
  h3_index              : 891e2d0f643ffff
  hub_id                : 16

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 19.0476
  local_score_raw       : -0.5390

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 779.1403

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7245.8954

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 4.2766

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 2x park_recreation

  [WSKAZANE KONKRETNE INSTYTUCJE]
```
</details>
<details><summary><b>Podzamcze (891e2d0db87ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Podzamcze
  stop_id               : 50518
  h3_index              : 891e2d0db87ffff
  hub_id                : 15

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 14.2857
  local_score_raw       : -0.7922

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 32029.4083

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 2488.8709

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 11.9097

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 3x park_recreation
  > 1x micro_playground

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - park_recreation        : zespół pałacowo-parkowy w Podzamczu
```
</details>
<details><summary><b>Łagiewniki (891e2d0a973ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Łagiewniki
  stop_id               : 280442
  h3_index              : 891e2d0a973ffff
  hub_id                : 0

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 9.5238
  local_score_raw       : -0.7945

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7245.8954

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 12.6743

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Majdan (891e2d4412fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Majdan
  stop_id               : 51391
  h3_index              : 891e2d4412fffff
  hub_id                : 11

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 4.7619
  local_score_raw       : -0.9312

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7245.8954

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 2.6445

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>

---

## OLSZTYN
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: 0.000, Std: 0.624)
     Rozkład Kartek (unikalne Huby): A: 2, A+: 1, B: 3, C: 4, D: 4, F: 4
[👥 BAZA LUDNOŚCI GUS] ❌ OSTRZEŻENIE DEMOGRAFICZNE: Odchylenie 40.3%. GUS: 238,431 vs Baza: 170,000
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
```

### Faza 0: Statystyki ogólne
- **Populacja Miasta:** 238,431 (GUS Grid)
- **Transakcje RCN:** 20,397

### Faza III: Top 20 POI (Miasto)

| Kategoria | Tier | Ilość w Mieście | Wartość Punktowa (W) |
|---|---|---|---|
| `national_rail_hub` | T0_MEGA_HUB | 1 | 1,981,800,132 |
| `regional_rail_hub` | T1_NATIONAL_MAGNET | 5 | 953,476,370 |
| `hospital_clinical` | T1_NATIONAL_MAGNET | 10 | 202,581,047 |
| `national_stadium` | T1_NATIONAL_MAGNET | 5 | 168,600,661 |
| `university_campus` | T1_NATIONAL_MAGNET | 31 | 87,520,231 |
| `industrial_zone` | T2_STRATEGIC_HUB | 146 | 17,669,556 |
| `shopping_mall` | T2_STRATEGIC_HUB | 19 | 14,134,418 |
| `commercial_zone` | T2_STRATEGIC_HUB | 48 | 13,831,031 |
| `supermarket` | T2_STRATEGIC_HUB | 84 | 9,213,257 |
| `government_central` | T2_STRATEGIC_HUB | 85 | 8,139,847 |
| `business_office` | T2_STRATEGIC_HUB | 67 | 6,978,743 |
| `education_high_school` | T3_LOCAL_CORE | 79 | 1,452,160 |
| `marketplace` | T3_LOCAL_CORE | 5 | 1,398,856 |
| `sports_centre` | T3_LOCAL_CORE | 41 | 1,145,310 |
| `culture_theatre` | T3_LOCAL_CORE | 26 | 903,243 |
| `social_support_mops` | T3_LOCAL_CORE | 15 | 851,225 |
| `health_clinic` | T3_LOCAL_CORE | 74 | 686,502 |
| `police_station` | T4_DAILY_SERVICE | 13 | 106,243 |
| `education_preschool` | T4_DAILY_SERVICE | 76 | 97,075 |
| `park_recreation` | T4_DAILY_SERVICE | 220 | 95,910 |

### Faza IV: Próbki Pełnego DNA 100% (Zobacz szczegóły POI!)

#### NAJLEPSZE PRZYSTANKI (TOP 5)
<details><summary><b>Limanowskiego (Limanowskiego) (891f5439807ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Limanowskiego (Limanowskiego)
  stop_id               : 865
  h3_index              : 891f5439807ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.8086

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 15868918.5146

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 163.1429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6900.1399

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 485.1588

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 16x personal_services
  > 11x gastronomy
  > 10x health_clinic
  > 8x micro_playground
  > 8x convenience_store
  > 7x supermarket
  > 6x micro_parcel_locker
  > 6x pharmacy
  > 4x place_of_worship
  > 4x park_recreation
  > 4x education_high_school
  > 3x specialized_retail
  > 3x education_preschool
  > 2x government_central
  > 1x micro_atm
  > 1x post_office
  > 1x culture_theatre
  > 1x marketplace
  > 1x sports_centre
  > 1x car_services
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy             : Pod Żaglami
    - micro_atm              : PKO BP
    - micro_parcel_locker    : Paczkomat InPost
    - health_clinic          : NZOZ VITA
    - supermarket            : Delikatesy Dwójka
    - gastronomy             : Milano
    - gastronomy             : Krys-Stan Restauracja
    - gastronomy             : Tino
    - gastronomy             : Gruby Benek
    - post_office            : Urząd Pocztowy Olsztyn 3
    - pharmacy               : Apteka Przyjazna
    - supermarket            : Biedronka
```
</details>
<details><summary><b>Wiadukt Powstańców Węgierskich 1956 (Limanowskiego) (891f543980fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Wiadukt Powstańców Węgierskich 1956 (Limanowskiego)
  stop_id               : 864
  h3_index              : 891f543980fffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.8086

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 15868918.5146

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 163.1429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6900.1399

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 485.1588

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 31x park_recreation
  > 23x personal_services
  > 16x gastronomy
  > 16x specialized_retail
  > 12x convenience_store
  > 11x micro_playground
  > 8x micro_parcel_locker
  > 8x health_clinic
  > 7x pharmacy
  > 6x supermarket
  > 5x government_central
  > 4x micro_atm
  > 3x place_of_worship
  > 3x police_station
  > 2x post_office
  > 2x education_preschool
  > 2x education_high_school
  > 1x national_rail_hub
  > 1x culture_theatre
  > 1x marketplace
  > 1x bank
  > 1x business_office
  > 1x sports_centre
  > 1x car_services
  > 1x shopping_mall

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - national_rail_hub      : Olsztyn Główny
    - gastronomy             : Pod Żaglami
    - gastronomy             : Kebab King
    - post_office            : Urząd Pocztowy Olsztyn 2
    - convenience_store      : Spożywczak
    - pharmacy               : Apteka Tania
    - gastronomy             : Restauracja pod Samowarem
    - gastronomy             : Milano
    - convenience_store      : Żabka
    - gastronomy             : Krys-Stan Restauracja
    - gastronomy             : Tino
    - gastronomy             : Gruby Benek
```
</details>
<details><summary><b>Nikielkowo-Dębowa (Nikielkowo) (891f5438a27ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Nikielkowo-Dębowa (Nikielkowo)
  stop_id               : 863
  h3_index              : 891f5438a27ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.8086

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 15868918.5146

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 163.1429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6900.1399

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 485.1588

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x place_of_worship
  > 1x park_recreation

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - place_of_worship       : Kaplica pw. Matki Bożej Częstochowskiej
```
</details>
<details><summary><b>Nikielkowo-Dębowa (Nikielkowo) (891f5438a27ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Nikielkowo-Dębowa (Nikielkowo)
  stop_id               : 862
  h3_index              : 891f5438a27ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.8086

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 15868918.5146

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 163.1429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6900.1399

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 485.1588

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x place_of_worship
  > 1x park_recreation

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - place_of_worship       : Kaplica pw. Matki Bożej Częstochowskiej
```
</details>
<details><summary><b>Bublewicza (Cementowa) (891f542a693ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Bublewicza (Cementowa)
  stop_id               : 861
  h3_index              : 891f542a693ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.8086

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 15868918.5146

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 163.1429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6900.1399

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 485.1588

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 3x car_services
  > 2x business_office
  > 2x industrial_zone
  > 1x post_office
  > 1x micro_parcel_locker
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - car_services           : Orlen
    - business_office        : Miejski Box
    - micro_parcel_locker    : Paczkomat InPost
    - industrial_zone        : baza PKS
    - business_office        : Przedsiębiorstwo Robót Inżynieryjnych Budownictwa Sp. z o.o.
    - car_services           : Autoserwis. Krawętkowski
    - car_services           : Moya
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Olsztyn Dajtki (891f5476d77ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Olsztyn Dajtki
  stop_id               : 263441
  h3_index              : 891f5476d77ffff
  hub_id                : 8

[OCENA Z-SCORE & RANK]
  grade                 : D
  local_percentile      : 27.7778
  local_score_raw       : -0.2298

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 22316.0073

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6578.0266

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 65.7670

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 2x micro_playground
  > 1x convenience_store
  > 1x micro_parcel_locker
  > 1x personal_services
  > 1x park_recreation

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store      : Lewiatan
    - micro_parcel_locker    : Paczkomat InPost
    - personal_services      : Wenus
```
</details>
<details><summary><b>Nikielkowo (891f5438b53ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Nikielkowo
  stop_id               : 279439
  h3_index              : 891f5438b53ffff
  hub_id                : 7

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 22.2222
  local_score_raw       : -0.4483

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 55465.2761

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5745.5157

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 12.7165

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x micro_parcel_locker
  > 1x place_of_worship
  > 1x micro_playground
  > 1x park_recreation

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_parcel_locker    : Paczkomat InPost
    - place_of_worship       : Kaplica pw. Matki Bożej Częstochowskiej
```
</details>
<details><summary><b>Bartąg (891f5474d7bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Bartąg
  stop_id               : 9423
  h3_index              : 891f5474d7bffff
  hub_id                : 1

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 16.6667
  local_score_raw       : -0.8779

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6854.1234

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 7.8403

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Jonkowo (891f540c843ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Jonkowo
  stop_id               : 9522
  h3_index              : 891f540c843ffff
  hub_id                : 5

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 11.1111
  local_score_raw       : -0.9363

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6854.1234

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 3.9557

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Bukwałd (891f543b42fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Bukwałd
  stop_id               : 9258
  h3_index              : 891f543b42fffff
  hub_id                : 2

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 5.5556
  local_score_raw       : -0.9444

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6854.1234

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 3.5767

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>

---

## OPOLE
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: 0.000, Std: 0.519)
     Rozkład Kartek (unikalne Huby): A: 2, A+: 1, B: 2, C: 3, D: 3, F: 3
[👥 BAZA LUDNOŚCI GUS] ❌ OSTRZEŻENIE DEMOGRAFICZNE: Odchylenie 25.6%. GUS: 150,715 vs Baza: 120,000
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
```

### Faza 0: Statystyki ogólne
- **Populacja Miasta:** 150,715 (GUS Grid)
- **Transakcje RCN:** 5,560

### Faza III: Top 20 POI (Miasto)

| Kategoria | Tier | Ilość w Mieście | Wartość Punktowa (W) |
|---|---|---|---|
| `national_rail_hub` | T0_MEGA_HUB | 4 | 1,823,841,111 |
| `regional_rail_hub` | T1_NATIONAL_MAGNET | 3 | 918,354,495 |
| `hospital_clinical` | T1_NATIONAL_MAGNET | 8 | 183,669,687 |
| `university_campus` | T1_NATIONAL_MAGNET | 17 | 158,617,813 |
| `national_stadium` | T1_NATIONAL_MAGNET | 3 | 158,203,350 |
| `commercial_zone` | T2_STRATEGIC_HUB | 29 | 16,143,639 |
| `industrial_zone` | T2_STRATEGIC_HUB | 316 | 15,996,414 |
| `shopping_mall` | T2_STRATEGIC_HUB | 12 | 14,837,823 |
| `supermarket` | T2_STRATEGIC_HUB | 70 | 8,908,334 |
| `government_central` | T2_STRATEGIC_HUB | 64 | 8,171,427 |
| `business_office` | T2_STRATEGIC_HUB | 24 | 7,509,370 |
| `marketplace` | T3_LOCAL_CORE | 2 | 1,351,234 |
| `education_high_school` | T3_LOCAL_CORE | 60 | 1,255,962 |
| `sports_centre` | T3_LOCAL_CORE | 32 | 1,204,620 |
| `social_support_mops` | T3_LOCAL_CORE | 9 | 841,519 |
| `health_clinic` | T3_LOCAL_CORE | 41 | 756,348 |
| `culture_theatre` | T3_LOCAL_CORE | 14 | 754,616 |
| `park_recreation` | T4_DAILY_SERVICE | 55 | 118,493 |
| `education_preschool` | T4_DAILY_SERVICE | 41 | 106,419 |
| `place_of_worship` | T4_DAILY_SERVICE | 63 | 91,022 |

### Faza IV: Próbki Pełnego DNA 100% (Zobacz szczegóły POI!)

#### NAJLEPSZE PRZYSTANKI (TOP 5)
<details><summary><b>Szarych Szeregów - Szkoła (952) (891e23c6e5bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Szarych Szeregów - Szkoła (952)
  stop_id               : 952
  h3_index              : 891e23c6e5bffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.1812

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 1829519.9262

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 72.7857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7751.9380

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 161.3706

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 10x micro_playground
  > 4x education_high_school
  > 3x pharmacy
  > 3x supermarket
  > 3x gastronomy
  > 3x park_recreation
  > 2x car_services
  > 2x specialized_retail
  > 2x personal_services
  > 2x convenience_store
  > 2x micro_parcel_locker
  > 2x place_of_worship
  > 1x national_stadium
  > 1x education_preschool
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - pharmacy               : Witaminka
    - car_services           : MOL
    - national_stadium       : Stadion lekkoatletyczny im. Opolskich Olimpijczyków
    - car_services           : Circle K
    - specialized_retail     : Komfort
    - supermarket            : Delikatesy Centrum
    - supermarket            : Lewiatan
    - personal_services      : Drogerie Polskie
    - gastronomy             : Italiana
    - pharmacy               : Nowa
    - convenience_store      : abc
    - personal_services      : La Cosmetica
```
</details>
<details><summary><b>1 Maja - Dworzec Główny (2) (891e23c4437ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : 1 Maja - Dworzec Główny (2)
  stop_id               : 2
  h3_index              : 891e23c4437ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.1812

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 1829519.9262

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 72.7857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7751.9380

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 161.3706

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
<details><summary><b>Wspólna - 8 (481) (891e23c7193ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Wspólna - 8 (481)
  stop_id               : 481
  h3_index              : 891e23c7193ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.1812

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 1829519.9262

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 72.7857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7751.9380

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 161.3706

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 7x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - industrial_zone        : Przedsiębiorstwo Handlu Chemikaliami 
    - industrial_zone        : Polaris Poland Sp. z o.o.
```
</details>
<details><summary><b>Wspólna (404) (891e23c7193ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Wspólna (404)
  stop_id               : 404
  h3_index              : 891e23c7193ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.1812

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 1829519.9262

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 72.7857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7751.9380

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 161.3706

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 8x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - industrial_zone        : Przedsiębiorstwo Handlu Chemikaliami 
    - industrial_zone        : Polaris Poland Sp. z o.o.
```
</details>
<details><summary><b>Wspólna (403) (891e23c719bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Wspólna (403)
  stop_id               : 403
  h3_index              : 891e23c719bffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.1812

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 1829519.9262

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 72.7857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7751.9380

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 161.3706

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 8x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - industrial_zone        : Przedsiębiorstwo Handlu Chemikaliami 
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Opole Gosławice (891e23c684bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Opole Gosławice
  stop_id               : 60863
  h3_index              : 891e23c684bffff
  hub_id                : 6

[OCENA Z-SCORE & RANK]
  grade                 : D
  local_percentile      : 35.7143
  local_score_raw       : -0.2639

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 3720114.7731

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 8223.2871

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 29.2238

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 3x industrial_zone
  > 2x health_clinic
  > 1x gastronomy
  > 1x convenience_store
  > 1x education_high_school
  > 1x car_services

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy             : Opolska Strzecha
    - convenience_store      : Fajny Sklep 2.0
    - education_high_school  : Społeczne Językowe Liceum Ogólnokształcące im. Alberta Einsteina
    - car_services           : Serwis Opon 24h
    - health_clinic          : Medin Klinika
    - health_clinic          : PanMedica
```
</details>
<details><summary><b>Opole Groszowice (891e23c43b3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Opole Groszowice
  stop_id               : 62000
  h3_index              : 891e23c43b3ffff
  hub_id                : 8

[OCENA Z-SCORE & RANK]
  grade                 : D
  local_percentile      : 28.5714
  local_score_raw       : -0.3237

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 524558609.5973

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5408.0042

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 14.5889

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 4x industrial_zone
  > 1x regional_rail_hub

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - regional_rail_hub      : Opole Groszowice
```
</details>
<details><summary><b>Opole Chmielowice (891e23c7307ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Opole Chmielowice
  stop_id               : 60731
  h3_index              : 891e23c7307ffff
  hub_id                : 4

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 21.4286
  local_score_raw       : -0.4431

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 12925633.0931

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6393.8567

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 27.9605

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 2x industrial_zone
  > 1x education_preschool
  > 1x micro_playground
  > 1x micro_parcel_locker
  > 1x pharmacy
  > 1x gastronomy
  > 1x convenience_store
  > 1x post_office
  > 1x sports_centre
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_parcel_locker    : Paczkomat InPost
    - pharmacy               : Eskulap
    - gastronomy             : Pub Tramonto
    - convenience_store      : Magda
    - post_office            : Filia Urzędu Pocztowego nr 7 w Opolu
```
</details>
<details><summary><b>Opole Borki (891e23d484bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Opole Borki
  stop_id               : 61069
  h3_index              : 891e23d484bffff
  hub_id                : 3

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 14.2857
  local_score_raw       : -0.5130

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 8721851.0959

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7734.0793

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 5.7166

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 2x micro_parcel_locker
  > 2x industrial_zone
  > 1x gastronomy
  > 1x supermarket

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_parcel_locker    : DPD Pickup Station
    - micro_parcel_locker    : DHL BOX 24/7
    - gastronomy             : BIEGAL Kebab
    - supermarket            : Biedronka
```
</details>
<details><summary><b>Opole Grotowice (891e23c5d33ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Opole Grotowice
  stop_id               : 62034
  h3_index              : 891e23c5d33ffff
  hub_id                : 9

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 7.1429
  local_score_raw       : -0.9565

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 38641.4768

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6700.2131

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 36.7705

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 3x car_services
  > 1x convenience_store
  > 1x pharmacy
  > 1x micro_parcel_locker
  > 1x micro_playground
  > 1x place_of_worship
  > 1x supermarket

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store      : Rabat
    - pharmacy               : Galen
    - micro_parcel_locker    : Paczkomat InPost
    - place_of_worship       : Kościół parafialny pw. Chrystusa Króla
    - supermarket            : Biedronka
    - car_services           : Orlen
    - car_services           : Orlen
    - car_services           : Orlen
```
</details>

---

## POZNAN
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: -0.000, Std: 0.573)
     Rozkład Kartek (unikalne Huby): A: 9, A+: 5, B: 13, C: 17, D: 22, F: 21
[👥 BAZA LUDNOŚCI GUS] ❌ OSTRZEŻENIE DEMOGRAFICZNE: Odchylenie 156.9%. GUS: 1,361,470 vs Baza: 530,000
[❌]  `sum_pull` <= 0 w POI PARQUET!
[✅]  POP Parquet 100% Valid
```

### Faza 0: Statystyki ogólne
- **Populacja Miasta:** 1,361,470 (GUS Grid)
- **Transakcje RCN:** 105,538

### Faza III: Top 20 POI (Miasto)

| Kategoria | Tier | Ilość w Mieście | Wartość Punktowa (W) |
|---|---|---|---|
| `international_airport` | T0_MEGA_HUB | 1 | 12,985,612,552 |
| `national_rail_hub` | T0_MEGA_HUB | 3 | 2,325,280,250 |
| `regional_rail_hub` | T1_NATIONAL_MAGNET | 43 | 1,091,990,502 |
| `exhibition_centre` | T1_NATIONAL_MAGNET | 1 | 345,714,013 |
| `national_stadium` | T1_NATIONAL_MAGNET | 29 | 227,548,635 |
| `hospital_clinical` | T1_NATIONAL_MAGNET | 40 | 209,541,018 |
| `university_campus` | T1_NATIONAL_MAGNET | 112 | 147,879,330 |
| `industrial_zone` | T2_STRATEGIC_HUB | 2005 | 19,274,211 |
| `logistics_hub` | T2_STRATEGIC_HUB | 6 | 18,552,408 |
| `shopping_mall` | T2_STRATEGIC_HUB | 81 | 17,868,628 |
| `commercial_zone` | T2_STRATEGIC_HUB | 1206 | 16,927,033 |
| `student_dormitory` | T2_STRATEGIC_HUB | 1 | 12,952,013 |
| `supermarket` | T2_STRATEGIC_HUB | 597 | 11,545,540 |
| `government_central` | T2_STRATEGIC_HUB | 300 | 9,085,326 |
| `business_office` | T2_STRATEGIC_HUB | 934 | 7,334,661 |
| `education_high_school` | T3_LOCAL_CORE | 556 | 1,598,921 |
| `marketplace` | T3_LOCAL_CORE | 48 | 1,470,554 |
| `sports_centre` | T3_LOCAL_CORE | 351 | 1,299,389 |
| `social_support_mops` | T3_LOCAL_CORE | 97 | 1,146,452 |
| `culture_theatre` | T3_LOCAL_CORE | 186 | 854,890 |

### Faza IV: Próbki Pełnego DNA 100% (Zobacz szczegóły POI!)

#### NAJLEPSZE PRZYSTANKI (TOP 5)
<details><summary><b>Złotkowo (891e24bac57ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Złotkowo
  stop_id               : 7575_2_2
  h3_index              : 891e24bac57ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 3.5274

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 13757503.6914

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 803.5000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7615.2413

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 68.8263

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - industrial_zone        : Bowa
```
</details>
<details><summary><b>Złotkowo (891e24bac57ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Złotkowo
  stop_id               : 7575_1_1
  h3_index              : 891e24bac57ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 3.5274

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 13757503.6914

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 803.5000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7615.2413

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 68.8263

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - industrial_zone        : Bowa
```
</details>
<details><summary><b>Złotkowo (891e24bac57ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Złotkowo
  stop_id               : 7575_BUS
  h3_index              : 891e24bac57ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 3.5274

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 13757503.6914

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 803.5000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7615.2413

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 68.8263

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - industrial_zone        : Bowa
```
</details>
<details><summary><b>Złotkowo (891e24bac57ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Złotkowo
  stop_id               : 7575_parent
  h3_index              : 891e24bac57ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 3.5274

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 13757503.6914

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 803.5000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7615.2413

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 68.8263

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - industrial_zone        : Bowa
```
</details>
<details><summary><b>Złotniki Grzybowe (891e24baab3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Złotniki Grzybowe
  stop_id               : 7574_2_2
  h3_index              : 891e24baab3ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 3.5274

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 13757503.6914

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 803.5000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7615.2413

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 68.8263

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 4x business_office
  > 2x industrial_zone
  > 1x micro_playground

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - business_office        : SNP Poland sp. z o. o.
    - business_office        : M2T Spółka z ograniczoną odpowiedzialnością sp.k.
    - business_office        : LST-Soft Sp. z o.o.
    - business_office        : Axpol Trading
    - industrial_zone        : YouNick Technology Park
    - industrial_zone        : Stacja elektroenergetyczna \
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Promno (891e24a7303ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Promno
  stop_id               : 30999
  h3_index              : 891e24a7303ffff
  hub_id                : 58

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 5.7471
  local_score_raw       : -0.6450

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 1331.6103

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7386.5635

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 10.3946

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x gastronomy

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy             : Ha Noi
```
</details>
<details><summary><b>Solec Wielkopolski (891e2427233ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Solec Wielkopolski
  stop_id               : 30270
  h3_index              : 891e2427233ffff
  hub_id                : 69

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 4.5977
  local_score_raw       : -0.9973

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 49.7692

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5228.7258

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 16.2591

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x convenience_store
  > 1x micro_parcel_locker

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store      : Lewiatan
    - micro_parcel_locker    : Paczkomat InPost
```
</details>
<details><summary><b>Ptaszkowo (891e240346fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Ptaszkowo
  stop_id               : 43075
  h3_index              : 891e240346fffff
  hub_id                : 61

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 3.4483
  local_score_raw       : -1.1308

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 656.7492

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 4785.4785

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 0.8355

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 2x place_of_worship
  > 1x micro_playground

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - place_of_worship       : Kościół pw. Świętych Apostołów Piotra i Pawła
    - place_of_worship       : Kaplica cmentarna
```
</details>
<details><summary><b>Chludowo (891e24b143bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Chludowo
  stop_id               : 28696
  h3_index              : 891e24b143bffff
  hub_id                : 4

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 2.2989
  local_score_raw       : -1.2045

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7386.5635

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 7.0050

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Górka Duchowna (891e24703b3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Górka Duchowna
  stop_id               : 42655
  h3_index              : 891e24703b3ffff
  hub_id                : 14

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 1.1494
  local_score_raw       : -1.4661

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7386.5635

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>

---

## PRZEMYSL
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: 0.000, Std: 0.720)
     Rozkład Kartek (unikalne Huby): A+: 1, B: 1, C: 1, D: 1
[👥 BAZA LUDNOŚCI GUS] ✅ DEMOGRAFIA OK (Odchylenie zaledwie 18.7%)
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
```

### Faza 0: Statystyki ogólne
- **Populacja Miasta:** 71,214 (GUS Grid)
- **Transakcje RCN:** 902

### Faza III: Top 20 POI (Miasto)

| Kategoria | Tier | Ilość w Mieście | Wartość Punktowa (W) |
|---|---|---|---|
| `national_rail_hub` | T0_MEGA_HUB | 1 | 1,759,089,477 |
| `regional_rail_hub` | T1_NATIONAL_MAGNET | 1 | 879,544,738 |
| `national_stadium` | T1_NATIONAL_MAGNET | 1 | 212,959,498 |
| `hospital_clinical` | T1_NATIONAL_MAGNET | 3 | 188,481,462 |
| `university_campus` | T1_NATIONAL_MAGNET | 7 | 145,469,756 |
| `shopping_mall` | T2_STRATEGIC_HUB | 4 | 14,797,514 |
| `commercial_zone` | T2_STRATEGIC_HUB | 68 | 13,014,116 |
| `industrial_zone` | T2_STRATEGIC_HUB | 268 | 11,287,381 |
| `supermarket` | T2_STRATEGIC_HUB | 23 | 9,797,176 |
| `government_central` | T2_STRATEGIC_HUB | 32 | 8,745,395 |
| `business_office` | T2_STRATEGIC_HUB | 13 | 7,792,244 |
| `marketplace` | T3_LOCAL_CORE | 3 | 1,678,750 |
| `education_high_school` | T3_LOCAL_CORE | 51 | 1,288,907 |
| `social_support_mops` | T3_LOCAL_CORE | 17 | 1,279,021 |
| `sports_centre` | T3_LOCAL_CORE | 20 | 1,171,927 |
| `culture_theatre` | T3_LOCAL_CORE | 16 | 741,508 |
| `health_clinic` | T3_LOCAL_CORE | 38 | 728,556 |
| `police_station` | T4_DAILY_SERVICE | 6 | 103,840 |
| `education_preschool` | T4_DAILY_SERVICE | 35 | 101,352 |
| `car_services` | T4_DAILY_SERVICE | 17 | 100,338 |

### Faza IV: Próbki Pełnego DNA 100% (Zobacz szczegóły POI!)

#### NAJLEPSZE PRZYSTANKI (TOP 5)
<details><summary><b>Monte Cassino N / Ż - Kier. Centrum (891e2b1690fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Monte Cassino N / Ż - Kier. Centrum
  stop_id               : 711
  h3_index              : 891e2b1690fffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 0.7298

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 32586729.5045

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 16.7857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6151.4729

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 174.8083

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 6x industrial_zone
  > 2x micro_parcel_locker
  > 1x place_of_worship
  > 1x micro_playground

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_parcel_locker    : Paczkomat InPost
    - micro_parcel_locker    : Appkomat InPost
    - place_of_worship       : Kościół pw. św. Józefa Sebastiana Biskupa
```
</details>
<details><summary><b>Jagiellońska - PL. RYBI - Kier. Plac Na Bramie (891e2b16b2fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Jagiellońska - PL. RYBI - Kier. Plac Na Bramie
  stop_id               : 1
  h3_index              : 891e2b16b2fffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 0.7298

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 32586729.5045

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 16.7857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6151.4729

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 174.8083

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
    - micro_atm              : Bankomat ING Bank Slaski
    - micro_atm              : Bank Pekao
```
</details>
<details><summary><b>3 - GO MAJA - OS. Hoffmanowej - Kier. Żurawica (891e2b16b23ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : 3 - GO MAJA - OS. Hoffmanowej - Kier. Żurawica
  stop_id               : 2
  h3_index              : 891e2b16b23ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 0.7298

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 32586729.5045

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 16.7857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6151.4729

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 174.8083

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 14x park_recreation
  > 13x micro_playground
  > 11x gastronomy
  > 11x specialized_retail
  > 11x commercial_zone
  > 8x convenience_store
  > 6x pharmacy
  > 6x micro_atm
  > 6x education_high_school
  > 6x health_clinic
  > 6x place_of_worship
  > 5x bank
  > 5x personal_services
  > 3x micro_parcel_locker
  > 3x government_central
  > 2x supermarket
  > 2x education_preschool
  > 2x university_campus
  > 2x post_office
  > 2x industrial_zone
  > 1x culture_theatre
  > 1x shopping_mall
  > 1x sports_centre
  > 1x car_services

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy             : 3 Papryczki
    - pharmacy               : Pod Orłem
    - pharmacy               : Niezapominajka
    - micro_atm              : Bankomat BZ WBK
    - micro_atm              : Bankomat ING Bank Slaski
    - micro_atm              : Bankomat KB
    - gastronomy             : FastoPizza
    - supermarket            : Biedronka
    - micro_atm              : Euronet
    - bank                   : MultiBank
    - bank                   : VeloBank
    - education_preschool    : Przedszkole Nr 7
```
</details>
<details><summary><b>Ujkowice Szkoła - Kier. Ujkowice (891e2bb922fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Ujkowice Szkoła - Kier. Ujkowice
  stop_id               : 675
  h3_index              : 891e2bb922fffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 0.7298

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 32586729.5045

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 16.7857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6151.4729

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 174.8083

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x convenience_store
  > 1x education_high_school

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store      : Groszek
    - education_high_school  : Szkoła Podstawowa im. Adama Mickiewicza w Ujkowicach
```
</details>
<details><summary><b>Wysockiego - Obronna - Końcowy (891e2b16c77ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Wysockiego - Obronna - Końcowy
  stop_id               : 674
  h3_index              : 891e2b16c77ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 0.7298

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 32586729.5045

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 16.7857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6151.4729

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 174.8083

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Jagiellońska - PL. Pileckiego - Końcowy (891e2b16b2fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Jagiellońska - PL. Pileckiego - Końcowy
  stop_id               : 6
  h3_index              : 891e2b16b2fffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 0.7298

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 32586729.5045

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 16.7857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6151.4729

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 174.8083

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
<details><summary><b>Jagiellońska - PL. Pileckiego - Kier. Zasanie (891e2b16b2fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Jagiellońska - PL. Pileckiego - Kier. Zasanie
  stop_id               : 4
  h3_index              : 891e2b16b2fffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 0.7298

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 32586729.5045

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 16.7857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6151.4729

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 174.8083

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
<details><summary><b>Przemyśl Główny (891e2bab643ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Przemyśl Główny
  stop_id               : 84400
  h3_index              : 891e2bab643ffff
  hub_id                : 0

[OCENA Z-SCORE & RANK]
  grade                 : B
  local_percentile      : 75.0000
  local_score_raw       : 0.2550

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 329478777.1032

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 4195.9212

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 144.6430

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 43x gastronomy
  > 21x specialized_retail
  > 18x convenience_store
  > 16x micro_atm
  > 16x commercial_zone
  > 12x bank
  > 12x personal_services
  > 11x health_clinic
  > 9x pharmacy
  > 9x micro_playground
  > 9x government_central
  > 8x education_high_school
  > 6x police_station
  > 4x park_recreation
  > 4x sports_centre
  > 3x culture_theatre
  > 3x place_of_worship
  > 3x social_support_mops
  > 3x business_office
  > 3x car_services
  > 2x education_preschool
  > 2x micro_parcel_locker
  > 2x post_office
  > 2x marketplace
  > 2x supermarket
  > 2x industrial_zone
  > 1x national_rail_hub
  > 1x shopping_mall
  > 1x hospital_clinical

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - pharmacy               : Pogodna
    - micro_atm              : Euronet
    - pharmacy               : Dr. Max
    - pharmacy               : Słoneczna
    - national_rail_hub      : Przemyśl Główny
    - micro_atm              : Bank Pekao
    - bank                   : Millennium Bank
    - gastronomy             : Bar Misz Masz
    - gastronomy             : Kebab Sindbad
    - convenience_store      : Piotruś Pan
    - personal_services      : Natura
    - personal_services      : Sabina
```
</details>
<details><summary><b>Przemyśl Zasanie (891e2bab6d3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Przemyśl Zasanie
  stop_id               : 84434
  h3_index              : 891e2bab6d3ffff
  hub_id                : 2

[OCENA Z-SCORE & RANK]
  grade                 : C
  local_percentile      : 50.0000
  local_score_raw       : -0.0065

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 19485018.5622

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5663.8978

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 272.6683

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 34x park_recreation
  > 12x micro_playground
  > 5x social_support_mops
  > 4x health_clinic
  > 4x supermarket
  > 4x industrial_zone
  > 3x car_services
  > 3x gastronomy
  > 3x micro_parcel_locker
  > 3x place_of_worship
  > 2x pharmacy
  > 1x personal_services
  > 1x convenience_store
  > 1x government_central
  > 1x education_high_school
  > 1x business_office
  > 1x commercial_zone
  > 1x education_preschool

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - car_services           : MPS
    - gastronomy             : Da Grasso
    - pharmacy               : Całodobowa
    - micro_parcel_locker    : Paczkomat InPost
    - pharmacy               : Słoneczna
    - convenience_store      : SAS
    - gastronomy             : Bar Mleczny \
    - health_clinic          : Przychodnia Specjalistyczna \
    - place_of_worship       : Kaplica szpitalna
    - micro_parcel_locker    : Pocztex
    - micro_parcel_locker    : DHL BOX 24/7
    - government_central     : Urząd Gminy Przemyśl
```
</details>
<details><summary><b>Przemyśl Wschodni (891e2bab62fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Przemyśl Wschodni
  stop_id               : 280183
  h3_index              : 891e2bab62fffff
  hub_id                : 1

[OCENA Z-SCORE & RANK]
  grade                 : D
  local_percentile      : 25.0000
  local_score_raw       : -0.9783

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 3444436.0818

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 2137.1632

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 55.5999

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 7x specialized_retail
  > 5x car_services
  > 5x industrial_zone
  > 3x micro_playground
  > 3x gastronomy
  > 2x micro_atm
  > 2x convenience_store
  > 2x government_central
  > 2x park_recreation
  > 2x commercial_zone
  > 2x personal_services
  > 1x shopping_mall
  > 1x supermarket
  > 1x pharmacy

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : Euronet
    - car_services           : EvoCar Serwis
    - industrial_zone        : MZK Przemyśl
    - shopping_mall          : CH Blue Park
    - gastronomy             : Restauracja Trojka
    - convenience_store      : abc
    - car_services           : Centrum NOVA
    - government_central     : Powiatowy Inspektorat Weterynarii
    - car_services           : NOVA
    - industrial_zone        : OKNOTERM Fabryka Okien
    - government_central     : Urząd Skarbowy
    - gastronomy             : McDonald's
```
</details>

---

## RADOM
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: 0.000, Std: 0.589)
     Rozkład Kartek (unikalne Huby): A: 2, A+: 1, B: 2, C: 4, D: 4, F: 3
[👥 BAZA LUDNOŚCI GUS] ✅ DEMOGRAFIA OK (Odchylenie zaledwie 19.6%)
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
```

### Faza 0: Statystyki ogólne
- **Populacja Miasta:** 239,185 (GUS Grid)
- **Transakcje RCN:** 4,179

### Faza III: Top 20 POI (Miasto)

| Kategoria | Tier | Ilość w Mieście | Wartość Punktowa (W) |
|---|---|---|---|
| `international_airport` | T0_MEGA_HUB | 1 | 11,225,757,832 |
| `national_rail_hub` | T0_MEGA_HUB | 1 | 2,041,095,592 |
| `regional_rail_hub` | T1_NATIONAL_MAGNET | 2 | 1,004,413,991 |
| `hospital_clinical` | T1_NATIONAL_MAGNET | 8 | 205,846,295 |
| `national_stadium` | T1_NATIONAL_MAGNET | 9 | 137,728,849 |
| `university_campus` | T1_NATIONAL_MAGNET | 55 | 110,861,262 |
| `industrial_zone` | T2_STRATEGIC_HUB | 471 | 16,298,487 |
| `commercial_zone` | T2_STRATEGIC_HUB | 95 | 15,111,546 |
| `shopping_mall` | T2_STRATEGIC_HUB | 30 | 13,995,736 |
| `supermarket` | T2_STRATEGIC_HUB | 72 | 10,255,154 |
| `government_central` | T2_STRATEGIC_HUB | 42 | 8,232,057 |
| `business_office` | T2_STRATEGIC_HUB | 29 | 7,200,349 |
| `marketplace` | T3_LOCAL_CORE | 8 | 1,658,485 |
| `education_high_school` | T3_LOCAL_CORE | 105 | 1,592,359 |
| `social_support_mops` | T3_LOCAL_CORE | 21 | 1,394,113 |
| `sports_centre` | T3_LOCAL_CORE | 50 | 963,342 |
| `culture_theatre` | T3_LOCAL_CORE | 27 | 822,611 |
| `health_clinic` | T3_LOCAL_CORE | 148 | 745,792 |
| `education_preschool` | T4_DAILY_SERVICE | 53 | 128,237 |
| `police_station` | T4_DAILY_SERVICE | 10 | 109,939 |

### Faza IV: Próbki Pełnego DNA 100% (Zobacz szczegóły POI!)

#### NAJLEPSZE PRZYSTANKI (TOP 5)
<details><summary><b>Zbrowskiego / Gołębiowska (NŻ) (891e2c041c7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Zbrowskiego / Gołębiowska (NŻ)
  stop_id               : 1906
  h3_index              : 891e2c041c7ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.7889

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 5921307.6644

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 69.0714

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6741.8225

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 193.2709

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 50x park_recreation
  > 22x micro_playground
  > 5x micro_parcel_locker
  > 4x place_of_worship
  > 3x pharmacy
  > 3x education_high_school
  > 2x health_clinic
  > 2x convenience_store
  > 2x education_preschool
  > 2x specialized_retail
  > 2x industrial_zone
  > 1x supermarket
  > 1x government_central
  > 1x culture_theatre
  > 1x commercial_zone
  > 1x national_stadium

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - pharmacy               : Od Serca
    - health_clinic          : Poliklinika MSWiA
    - pharmacy               : Apteka
    - place_of_worship       : Kaplica domowa
    - health_clinic          : Przychodnia Gołębiów
    - pharmacy               : Apteka
    - convenience_store      : Żabka
    - convenience_store      : abc
    - supermarket            : Delikatesy Centrum
    - education_preschool    : Przedszkole Niepubliczne \
    - micro_parcel_locker    : Paczkomat InPost
    - micro_parcel_locker    : Paczkomat InPost
```
</details>
<details><summary><b>Zbrowskiego / Zientarskiego (891e2c04157ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Zbrowskiego / Zientarskiego
  stop_id               : 1905
  h3_index              : 891e2c04157ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.7889

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 5921307.6644

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 69.0714

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6741.8225

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 193.2709

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 84x park_recreation
  > 18x micro_playground
  > 12x micro_parcel_locker
  > 6x specialized_retail
  > 6x convenience_store
  > 4x gastronomy
  > 4x place_of_worship
  > 4x personal_services
  > 4x education_preschool
  > 3x pharmacy
  > 3x health_clinic
  > 3x supermarket
  > 2x micro_atm
  > 2x car_services
  > 2x education_high_school
  > 2x shopping_mall
  > 2x industrial_zone
  > 1x post_office
  > 1x bank
  > 1x government_central
  > 1x culture_theatre
  > 1x national_stadium
  > 1x sports_centre
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : Bankomat \
    - micro_atm              : Euronet
    - post_office            : Urząd Pocztowy Radom 14
    - gastronomy             : Mamma Mia Ristorante Pizzeria
    - pharmacy               : Od Serca
    - health_clinic          : Poliklinika MSWiA
    - car_services           : Avia
    - pharmacy               : Apteka
    - car_services           : Circle K
    - gastronomy             : Va Bene
    - health_clinic          : Orto Dent
    - place_of_worship       : Kaplica domowa
```
</details>
<details><summary><b>Zbrowskiego / Olsztyńska (891e2c043b3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Zbrowskiego / Olsztyńska
  stop_id               : 1904
  h3_index              : 891e2c043b3ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.7889

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 5921307.6644

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 69.0714

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6741.8225

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 193.2709

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 234x park_recreation
  > 14x micro_playground
  > 9x micro_parcel_locker
  > 7x convenience_store
  > 6x personal_services
  > 6x place_of_worship
  > 6x industrial_zone
  > 4x specialized_retail
  > 4x health_clinic
  > 4x supermarket
  > 3x university_campus
  > 2x gastronomy
  > 2x car_services
  > 2x sports_centre
  > 2x education_preschool
  > 2x business_office
  > 2x shopping_mall
  > 1x bank
  > 1x pharmacy
  > 1x post_office
  > 1x national_stadium
  > 1x commercial_zone
  > 1x education_high_school

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy             : Mamma Mia Ristorante Pizzeria
    - car_services           : Circle K
    - gastronomy             : Bolek i Lolek
    - personal_services      : Natura
    - convenience_store      : Sklep  u  Jacka
    - convenience_store      : Społem
    - convenience_store      : Żabka
    - personal_services      : Hebe
    - specialized_retail     : Media Expert
    - specialized_retail     : Pepco
    - specialized_retail     : KiK
    - car_services           : Zakład blacharski
```
</details>
<details><summary><b>Zbrowskiego / Wodna (891e2c043bbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Zbrowskiego / Wodna
  stop_id               : 1903
  h3_index              : 891e2c043bbffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.7889

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 5921307.6644

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 69.0714

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6741.8225

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 193.2709

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 166x park_recreation
  > 18x micro_playground
  > 8x micro_parcel_locker
  > 7x industrial_zone
  > 6x place_of_worship
  > 5x convenience_store
  > 5x health_clinic
  > 3x personal_services
  > 3x supermarket
  > 3x education_high_school
  > 2x sports_centre
  > 2x business_office
  > 2x education_preschool
  > 2x commercial_zone
  > 1x gastronomy
  > 1x specialized_retail
  > 1x car_services
  > 1x pharmacy
  > 1x post_office
  > 1x shopping_mall
  > 1x university_campus

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - sports_centre          : Pływalnia Orka
    - gastronomy             : Bolek i Lolek
    - personal_services      : Natura
    - convenience_store      : Społem
    - convenience_store      : Żabka
    - business_office        : Ubezpieczenia
    - specialized_retail     : Diamonds
    - sports_centre          : Aqua Aerobic
    - personal_services      : Marcell. Salon fryzjerski
    - health_clinic          : ABC-Pulmo
    - car_services           : Zakład blacharski
    - health_clinic          : Przychodnia Specjalistyczna - Akademickie Centrum Medyczne
```
</details>
<details><summary><b>Zbrowskiego / Kolberga (891e2c043bbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Zbrowskiego / Kolberga
  stop_id               : 1902
  h3_index              : 891e2c043bbffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.7889

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 5921307.6644

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 69.0714

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6741.8225

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 193.2709

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 180x park_recreation
  > 14x micro_playground
  > 8x industrial_zone
  > 6x health_clinic
  > 6x education_high_school
  > 6x place_of_worship
  > 5x personal_services
  > 5x commercial_zone
  > 4x convenience_store
  > 3x specialized_retail
  > 3x bank
  > 3x micro_parcel_locker
  > 3x supermarket
  > 2x business_office
  > 2x pharmacy
  > 2x education_preschool
  > 1x sports_centre
  > 1x post_office
  > 1x gastronomy
  > 1x car_services
  > 1x government_central
  > 1x university_campus

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - sports_centre          : Pływalnia Orka
    - post_office            : Urząd Pocztowy Radom 10
    - gastronomy             : Awangarda
    - specialized_retail     : Trafika
    - personal_services      : Jaskinia Piękna
    - business_office        : Ubezpieczenia
    - health_clinic          : Stomatologia
    - personal_services      : Salon urody \
    - personal_services      : Salon fryzjerski Agnieszka & Artur Wójciccy
    - specialized_retail     : Diamonds
    - personal_services      : Marcell. Salon fryzjerski
    - bank                   : Bank Spółdzielczy w Radomiu
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Kończyce Radomskie (891e2c0e1abffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Kończyce Radomskie
  stop_id               : 48470
  h3_index              : 891e2c0e1abffff
  hub_id                : 4

[OCENA Z-SCORE & RANK]
  grade                 : D
  local_percentile      : 31.2500
  local_score_raw       : -0.2126

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 30152.7761

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6689.2033

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 12.5700

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x micro_parcel_locker
  > 1x supermarket

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_parcel_locker    : Paczkomat InPost
    - supermarket            : Dino
```
</details>
<details><summary><b>Dąbrówka Zabłotnia (891e2c0c533ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Dąbrówka Zabłotnia
  stop_id               : 279429
  h3_index              : 891e2c0c533ffff
  hub_id                : 1

[OCENA Z-SCORE & RANK]
  grade                 : D
  local_percentile      : 25.0000
  local_score_raw       : -0.3299

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 19475.5709

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6689.2033

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 4.7637

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Groszowice Wrzosów (891e2c33057ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Groszowice Wrzosów
  stop_id               : 279432
  h3_index              : 891e2c33057ffff
  hub_id                : 2

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 18.7500
  local_score_raw       : -0.4578

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 465.0636

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6689.2033

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 12.7711

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 2x place_of_worship
  > 1x park_recreation

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - place_of_worship       : Kaplica szpitalna
    - place_of_worship       : Kaplica pw. Najświętszej Bożej Rodzicielki Matki Kościoła
```
</details>
<details><summary><b>Kosów (891e2c0eccfffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Kosów
  stop_id               : 279430
  h3_index              : 891e2c0eccfffff
  hub_id                : 5

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 12.5000
  local_score_raw       : -0.4995

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 527.7784

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6689.2033

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 7.6858

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 3x park_recreation
  > 1x micro_parcel_locker

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_parcel_locker    : Paczkomat InPost
```
</details>
<details><summary><b>Antoniówka (891e2c33667ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Antoniówka
  stop_id               : 48769
  h3_index              : 891e2c33667ffff
  hub_id                : 0

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 6.2500
  local_score_raw       : -0.8299

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6689.2033

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 11.7263

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>

---

## RZESZOW
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: 0.000, Std: 0.635)
     Rozkład Kartek (unikalne Huby): A: 4, A+: 2, B: 6, C: 7, D: 9, F: 9
[👥 BAZA LUDNOŚCI GUS] ❌ OSTRZEŻENIE DEMOGRAFICZNE: Odchylenie 131.4%. GUS: 439,622 vs Baza: 190,000
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
```

### Faza 0: Statystyki ogólne
- **Populacja Miasta:** 439,622 (GUS Grid)
- **Transakcje RCN:** 12,298

### Faza III: Top 20 POI (Miasto)

| Kategoria | Tier | Ilość w Mieście | Wartość Punktowa (W) |
|---|---|---|---|
| `international_airport` | T0_MEGA_HUB | 1 | 11,590,658,840 |
| `national_rail_hub` | T0_MEGA_HUB | 1 | 2,124,073,017 |
| `regional_rail_hub` | T1_NATIONAL_MAGNET | 11 | 1,003,506,794 |
| `hospital_clinical` | T1_NATIONAL_MAGNET | 13 | 208,186,659 |
| `national_stadium` | T1_NATIONAL_MAGNET | 22 | 188,959,023 |
| `university_campus` | T1_NATIONAL_MAGNET | 58 | 112,653,198 |
| `industrial_zone` | T2_STRATEGIC_HUB | 650 | 17,311,486 |
| `commercial_zone` | T2_STRATEGIC_HUB | 593 | 15,009,198 |
| `shopping_mall` | T2_STRATEGIC_HUB | 43 | 13,749,337 |
| `logistics_hub` | T2_STRATEGIC_HUB | 1 | 9,255,077 |
| `government_central` | T2_STRATEGIC_HUB | 100 | 9,199,534 |
| `supermarket` | T2_STRATEGIC_HUB | 179 | 8,928,326 |
| `business_office` | T2_STRATEGIC_HUB | 103 | 7,826,730 |
| `marketplace` | T3_LOCAL_CORE | 12 | 1,478,830 |
| `education_high_school` | T3_LOCAL_CORE | 294 | 1,353,422 |
| `sports_centre` | T3_LOCAL_CORE | 80 | 1,323,682 |
| `social_support_mops` | T3_LOCAL_CORE | 31 | 1,232,400 |
| `culture_theatre` | T3_LOCAL_CORE | 47 | 777,086 |
| `health_clinic` | T3_LOCAL_CORE | 197 | 774,540 |
| `park_recreation` | T4_DAILY_SERVICE | 1376 | 115,579 |

### Faza IV: Próbki Pełnego DNA 100% (Zobacz szczegóły POI!)

#### NAJLEPSZE PRZYSTANKI (TOP 5)
<details><summary><b>Jasionka Airport (891e28653c3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Jasionka Airport
  stop_id               : STRATEGIC
  h3_index              : 891e28653c3ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 2.5550

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 41157365.8155

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 255.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 8871.2722

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 73.2108

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x business_office
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - business_office        : WiseGlass sp. z o.o.
```
</details>
<details><summary><b>Gwoźnica Górna 24 (891e2bc2857ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Gwoźnica Górna 24
  stop_id               : 1
  h3_index              : 891e2bc2857ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 2.5550

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 41157365.8155

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 255.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 8871.2722

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 73.2108

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Gwoźnica Górna poczta 21 (891e2bc2c6fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Gwoźnica Górna poczta 21
  stop_id               : 2
  h3_index              : 891e2bc2c6fffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 2.5550

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 41157365.8155

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 255.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 8871.2722

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 73.2108

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 2x convenience_store
  > 1x post_office
  > 1x place_of_worship

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store      : Groszek
    - place_of_worship       : Kościół pw. św. Antoniego Padewskiego
```
</details>
<details><summary><b>Gwoźnica Górna poczta 22 (891e2bc2c6fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Gwoźnica Górna poczta 22
  stop_id               : 3
  h3_index              : 891e2bc2c6fffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 2.5550

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 41157365.8155

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 255.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 8871.2722

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 73.2108

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 2x convenience_store
  > 1x post_office
  > 1x place_of_worship

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store      : Groszek
    - place_of_worship       : Kościół pw. św. Antoniego Padewskiego
```
</details>
<details><summary><b>Armii Krajowej / Krzyżanowskiego 03 (891e286c8d7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Armii Krajowej / Krzyżanowskiego 03
  stop_id               : 662_1
  h3_index              : 891e286c8d7ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 2.5550

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 41157365.8155

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 255.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 8871.2722

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 73.2108

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 37x park_recreation
  > 4x car_services
  > 3x micro_parcel_locker
  > 3x commercial_zone
  > 2x gastronomy
  > 2x specialized_retail
  > 2x sports_centre
  > 2x education_preschool
  > 1x convenience_store
  > 1x industrial_zone
  > 1x micro_playground

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store      : U Ignaca
    - car_services           : Moya
    - micro_parcel_locker    : Paczkomat InPost
    - gastronomy             : Thai Koon
    - micro_parcel_locker    : Paczkomat InPost
    - specialized_retail     : Serwis Radio Hobby
    - car_services           : Orlen
    - specialized_retail     : MEBLO DOM II
    - car_services           : PPHU \
    - car_services           : Ledniowski Krzysztof Zakład Blacharsko-Lakierniczy
    - sports_centre          : Strefa sportu
    - education_preschool    : Bajkowe Przedszkole
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Sędziszów Małopolski Wschodni (891e286ae5bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Sędziszów Małopolski Wschodni
  stop_id               : 280259
  h3_index              : 891e286ae5bffff
  hub_id                : 28

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 13.5135
  local_score_raw       : -0.8401

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7964.9363

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 8.6971

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x car_services

  [WSKAZANE KONKRETNE INSTYTUCJE]
```
</details>
<details><summary><b>Boguchwała Dolna (891e286dc47ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Boguchwała Dolna
  stop_id               : 280245
  h3_index              : 891e286dc47ffff
  hub_id                : 4

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 10.8108
  local_score_raw       : -0.8649

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7964.9363

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 6.9951

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Krzemienica (891e2b9a02bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Krzemienica
  stop_id               : 82651
  h3_index              : 891e2b9a02bffff
  hub_id                : 11

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 8.1081
  local_score_raw       : -0.8677

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7964.9363

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 6.8178

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Będziemyśl (891e286a87bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Będziemyśl
  stop_id               : 81273
  h3_index              : 891e286a87bffff
  hub_id                : 2

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 5.4054
  local_score_raw       : -0.9686

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7964.9363

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 2.5562

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x car_services

  [WSKAZANE KONKRETNE INSTYTUCJE]
```
</details>
<details><summary><b>Budy Głogowskie (891e2860ca7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Budy Głogowskie
  stop_id               : 82958
  h3_index              : 891e2860ca7ffff
  hub_id                : 5

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 2.7027
  local_score_raw       : -0.9997

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7964.9363

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1.7879

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>

---

## SUWALKI
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: -0.000, Std: 0.566)
     Rozkład Kartek (unikalne Huby): A+: 1, C: 1, D: 1
[👥 BAZA LUDNOŚCI GUS] ✅ DEMOGRAFIA OK (Odchylenie zaledwie 6.3%)
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
```

### Faza 0: Statystyki ogólne
- **Populacja Miasta:** 74,387 (GUS Grid)
- **Transakcje RCN:** 1,306

### Faza III: Top 20 POI (Miasto)

| Kategoria | Tier | Ilość w Mieście | Wartość Punktowa (W) |
|---|---|---|---|
| `regional_rail_hub` | T1_NATIONAL_MAGNET | 2 | 856,891,388 |
| `hospital_clinical` | T1_NATIONAL_MAGNET | 1 | 215,671,106 |
| `university_campus` | T1_NATIONAL_MAGNET | 1 | 184,219,006 |
| `national_stadium` | T1_NATIONAL_MAGNET | 7 | 167,703,915 |
| `commercial_zone` | T2_STRATEGIC_HUB | 13 | 17,600,681 |
| `industrial_zone` | T2_STRATEGIC_HUB | 50 | 17,512,875 |
| `shopping_mall` | T2_STRATEGIC_HUB | 11 | 11,632,988 |
| `supermarket` | T2_STRATEGIC_HUB | 33 | 9,430,221 |
| `government_central` | T2_STRATEGIC_HUB | 18 | 9,319,599 |
| `business_office` | T2_STRATEGIC_HUB | 4 | 8,378,960 |
| `marketplace` | T3_LOCAL_CORE | 2 | 1,875,481 |
| `education_high_school` | T3_LOCAL_CORE | 26 | 1,370,577 |
| `social_support_mops` | T3_LOCAL_CORE | 2 | 1,144,223 |
| `culture_theatre` | T3_LOCAL_CORE | 3 | 934,378 |
| `sports_centre` | T3_LOCAL_CORE | 8 | 931,329 |
| `health_clinic` | T3_LOCAL_CORE | 17 | 632,597 |
| `park_recreation` | T4_DAILY_SERVICE | 47 | 102,191 |
| `place_of_worship` | T4_DAILY_SERVICE | 19 | 93,346 |
| `car_services` | T4_DAILY_SERVICE | 25 | 89,681 |
| `police_station` | T4_DAILY_SERVICE | 2 | 89,425 |

### Faza IV: Próbki Pełnego DNA 100% (Zobacz szczegóły POI!)

#### NAJLEPSZE PRZYSTANKI (TOP 5)
<details><summary><b>Północna / Różana (02) (891f42d1aa7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Północna / Różana (02)
  stop_id               : 1
  h3_index              : 891f42d1aa7ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 0.4184

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 60156630.1939

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 26.6429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 3546.0993

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 87.5639

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 2x car_services
  > 2x micro_playground
  > 1x micro_parcel_locker
  > 1x place_of_worship
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - car_services           : Transbud
    - micro_parcel_locker    : Appkomat InPost
    - place_of_worship       : Kościół pw. Świętego Brata Alberta Chmielowskiego
    - car_services           : Transbud
```
</details>
<details><summary><b>Dwernickiego / Plaza (01) (891f42d1a1bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Dwernickiego / Plaza (01)
  stop_id               : 2
  h3_index              : 891f42d1a1bffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 0.4184

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 60156630.1939

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 26.6429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 3546.0993

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 87.5639

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 32x specialized_retail
  > 14x micro_playground
  > 12x gastronomy
  > 8x micro_parcel_locker
  > 8x pharmacy
  > 7x personal_services
  > 6x micro_atm
  > 6x bank
  > 4x supermarket
  > 3x shopping_mall
  > 3x car_services
  > 3x park_recreation
  > 2x health_clinic
  > 2x government_central
  > 2x education_high_school
  > 1x education_preschool
  > 1x place_of_worship
  > 1x culture_theatre
  > 1x post_office

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : Bankomat Cash4You
    - bank                   : Bank BPS
    - bank                   : Bank Spółdzielczy
    - micro_parcel_locker    : Paczkomat InPost
    - gastronomy             : Chilli Pizza
    - micro_parcel_locker    : Paczkomat InPost
    - micro_parcel_locker    : Paczkomat InPost
    - micro_parcel_locker    : Paczkomat InPost
    - micro_parcel_locker    : Paczkomat InPost
    - micro_parcel_locker    : Paczkomat InPost
    - micro_parcel_locker    : Paczkomat InPost
    - pharmacy               : Super-Pharm
```
</details>
<details><summary><b>Noniewicza / Stokrotka (05) (891f42d1a1bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Noniewicza / Stokrotka (05)
  stop_id               : 3
  h3_index              : 891f42d1a1bffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 0.4184

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 60156630.1939

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 26.6429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 3546.0993

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 87.5639

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 39x specialized_retail
  > 23x gastronomy
  > 20x micro_playground
  > 19x personal_services
  > 10x bank
  > 10x pharmacy
  > 7x micro_atm
  > 6x park_recreation
  > 4x convenience_store
  > 4x micro_parcel_locker
  > 3x health_clinic
  > 3x government_central
  > 3x education_high_school
  > 3x shopping_mall
  > 2x education_preschool
  > 2x supermarket
  > 2x post_office
  > 2x car_services
  > 1x place_of_worship
  > 1x culture_theatre

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : Bankomat Cash4You
    - micro_atm              : Bankomat Cash4You
    - bank                   : Bank BPS
    - bank                   : Bank Spółdzielczy
    - gastronomy             : Gruby Benek
    - convenience_store      : Eden
    - gastronomy             : Naleśnikarnia 
    - specialized_retail     : Szmizjerka
    - gastronomy             : Al Capone
    - gastronomy             : Emmi
    - micro_parcel_locker    : Paczkomat InPost
    - health_clinic          : NZOZ Przychodnia Rodzinna i Medycyny Pracy
```
</details>
<details><summary><b>Północna / Fabryka Mebli (03) (891f42d1aa7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Północna / Fabryka Mebli (03)
  stop_id               : 4
  h3_index              : 891f42d1aa7ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 0.4184

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 60156630.1939

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 26.6429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 3546.0993

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 87.5639

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 3x micro_playground
  > 2x car_services
  > 1x education_preschool
  > 1x micro_parcel_locker
  > 1x place_of_worship
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - car_services           : Transbud
    - education_preschool    : Kids & Co.
    - micro_parcel_locker    : Appkomat InPost
    - place_of_worship       : Kościół pw. Świętego Brata Alberta Chmielowskiego
    - car_services           : Transbud
```
</details>
<details><summary><b>Jana Pawła II / SOK (01) (891f42d1a8fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Jana Pawła II / SOK (01)
  stop_id               : 5
  h3_index              : 891f42d1a8fffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 0.4184

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 60156630.1939

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 26.6429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 3546.0993

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 87.5639

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 16x micro_playground
  > 6x gastronomy
  > 5x supermarket
  > 5x specialized_retail
  > 3x micro_parcel_locker
  > 2x pharmacy
  > 2x government_central
  > 2x education_preschool
  > 1x micro_atm
  > 1x health_clinic
  > 1x personal_services
  > 1x social_support_mops
  > 1x place_of_worship
  > 1x bank
  > 1x culture_theatre
  > 1x post_office
  > 1x car_services
  > 1x park_recreation

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - supermarket            : Delikatesy Centrum
    - supermarket            : Biedronka
    - supermarket            : Lewiatan
    - micro_playground       : urządzenie do Boulderingu
    - health_clinic          : Melius Centrum Rehabilitacji
    - micro_parcel_locker    : Paczkomat InPost
    - pharmacy               : Dbam o Zdrowie (Doz)
    - micro_parcel_locker    : Paczkomat InPost
    - micro_parcel_locker    : Appkomat InPost
    - government_central     : Powiatowy Inspektorat Nadzoru Budowlanego
    - education_preschool    : Emelek Klonowa
    - education_preschool    : Słoneczko
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Sejneńska Przystanek Tymczasowy (891f42d1b4fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Sejneńska Przystanek Tymczasowy
  stop_id               : 529
  h3_index              : 891f42d1b4fffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 0.4184

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 60156630.1939

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 26.6429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 3546.0993

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 87.5639

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 2x commercial_zone
  > 2x car_services
  > 1x micro_parcel_locker
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_parcel_locker    : Paczkomat InPost
    - commercial_zone        : Przedsiębiorstwo Gospodarki Komunalnej w Suwałkach
    - car_services           : Stacja Paliw PGK
    - car_services           : PGK
```
</details>
<details><summary><b>Podhorskiego / Kolejowa (01) (891f42d1a13ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Podhorskiego / Kolejowa (01)
  stop_id               : 530
  h3_index              : 891f42d1a13ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 0.4184

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 60156630.1939

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 26.6429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 3546.0993

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 87.5639

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 29x specialized_retail
  > 10x micro_playground
  > 8x gastronomy
  > 5x pharmacy
  > 5x personal_services
  > 4x micro_atm
  > 4x micro_parcel_locker
  > 3x bank
  > 3x supermarket
  > 2x place_of_worship
  > 2x shopping_mall
  > 1x education_preschool
  > 1x health_clinic
  > 1x social_support_mops
  > 1x culture_theatre
  > 1x post_office
  > 1x car_services
  > 1x park_recreation

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : Bankomat Cash4You
    - bank                   : Bank BPS
    - micro_parcel_locker    : Paczkomat InPost
    - micro_parcel_locker    : Paczkomat InPost
    - micro_parcel_locker    : Paczkomat InPost
    - micro_parcel_locker    : Paczkomat InPost
    - pharmacy               : Super-Pharm
    - pharmacy               : Gemini
    - pharmacy               : Cefarm
    - pharmacy               : Apteka (D. Tarasiewicz-Kuźmicka)
    - education_preschool    : Emelek Klonowa
    - gastronomy             : Tomcio Paluch Pasta
```
</details>
<details><summary><b>Waryńskiego / Przedszkole (03) (891f42d1a73ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Waryńskiego / Przedszkole (03)
  stop_id               : 531
  h3_index              : 891f42d1a73ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 0.4184

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 60156630.1939

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 26.6429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 3546.0993

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 87.5639

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 20x gastronomy
  > 15x personal_services
  > 15x specialized_retail
  > 11x micro_playground
  > 6x pharmacy
  > 4x micro_parcel_locker
  > 4x supermarket
  > 4x health_clinic
  > 3x micro_atm
  > 3x shopping_mall
  > 3x education_high_school
  > 3x park_recreation
  > 2x bank
  > 2x convenience_store
  > 2x government_central
  > 2x commercial_zone
  > 1x education_preschool
  > 1x post_office
  > 1x police_station
  > 1x business_office
  > 1x marketplace
  > 1x place_of_worship
  > 1x university_campus
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : Bankomat Cash4You
    - gastronomy             : Pizzeria Fantazja Pizza Suwałki Kebab Jedzenie na dowóz
    - gastronomy             : Max Kebab
    - gastronomy             : Kartaczyk
    - pharmacy               : Pod Złotym Lwem
    - bank                   : Kasa Stefczyka
    - gastronomy             : King Kebap
    - gastronomy             : Wół i buła
    - gastronomy             : Bar Mleczny \
    - specialized_retail     : Szmizjerka
    - gastronomy             : Obiadkowo
    - personal_services      : Rossmann
```
</details>
<details><summary><b>Suwałki (891f42d1a07ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Suwałki
  stop_id               : 12807
  h3_index              : 891f42d1a07ffff
  hub_id                : 1

[OCENA Z-SCORE & RANK]
  grade                 : C
  local_percentile      : 66.6667
  local_score_raw       : 0.2254

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 1189384027.3100

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6067.0292

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 13.1552

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 2x park_recreation
  > 1x regional_rail_hub
  > 1x micro_parcel_locker
  > 1x convenience_store
  > 1x national_stadium
  > 1x place_of_worship
  > 1x government_central
  > 1x commercial_zone
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - regional_rail_hub      : Suwałki
    - micro_parcel_locker    : Paczkomat InPost
    - convenience_store      : Kamienica
    - place_of_worship       : Kościół pw. Świętego Wojciecha Biskupa i Męczennika
    - government_central     : Powiatowa Stacja Sanitarno-Epidemiologiczna w Suwałkach
    - park_recreation        : Park Suwalskich Przedsiębiorców
```
</details>
<details><summary><b>Płociczno koło Suwałk (891f42d8937ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Płociczno koło Suwałk
  stop_id               : 12922
  h3_index              : 891f42d8937ffff
  hub_id                : 0

[OCENA Z-SCORE & RANK]
  grade                 : D
  local_percentile      : 33.3333
  local_score_raw       : -0.6438

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 686020.6707

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6067.0292

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 0.0999

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
```
</details>

---

## SWINOUJSCIE
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ⚠️ Z-Score ODD DIST (Mean: 0.000, Std: 0.482)
     Rozkład Kartek (unikalne Huby): A+: 1, B: 1, C: 1, D: 1, F: 1
[👥 BAZA LUDNOŚCI GUS] ✅ DEMOGRAFIA OK (Odchylenie zaledwie 13.3%)
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
```

### Faza 0: Statystyki ogólne
- **Populacja Miasta:** 45,308 (GUS Grid)
- **Transakcje RCN:** 5,875

### Faza III: Top 20 POI (Miasto)

| Kategoria | Tier | Ilość w Mieście | Wartość Punktowa (W) |
|---|---|---|---|
| `national_rail_hub` | T0_MEGA_HUB | 2 | 1,636,585,892 |
| `hospital_clinical` | T1_NATIONAL_MAGNET | 1 | 173,707,738 |
| `logistics_hub` | T2_STRATEGIC_HUB | 1 | 17,198,844 |
| `industrial_zone` | T2_STRATEGIC_HUB | 33 | 15,962,956 |
| `commercial_zone` | T2_STRATEGIC_HUB | 11 | 13,515,135 |
| `shopping_mall` | T2_STRATEGIC_HUB | 5 | 12,186,141 |
| `student_dormitory` | T2_STRATEGIC_HUB | 1 | 12,098,626 |
| `supermarket` | T2_STRATEGIC_HUB | 19 | 7,574,369 |
| `government_central` | T2_STRATEGIC_HUB | 11 | 7,008,902 |
| `business_office` | T2_STRATEGIC_HUB | 7 | 6,526,127 |
| `education_high_school` | T3_LOCAL_CORE | 15 | 1,464,119 |
| `marketplace` | T3_LOCAL_CORE | 1 | 1,414,222 |
| `social_support_mops` | T3_LOCAL_CORE | 4 | 1,305,574 |
| `sports_centre` | T3_LOCAL_CORE | 4 | 1,194,384 |
| `culture_theatre` | T3_LOCAL_CORE | 5 | 749,854 |
| `health_clinic` | T3_LOCAL_CORE | 10 | 614,703 |
| `education_preschool` | T4_DAILY_SERVICE | 9 | 119,702 |
| `police_station` | T4_DAILY_SERVICE | 4 | 92,741 |
| `place_of_worship` | T4_DAILY_SERVICE | 12 | 83,105 |
| `park_recreation` | T4_DAILY_SERVICE | 180 | 68,976 |

### Faza IV: Próbki Pełnego DNA 100% (Zobacz szczegóły POI!)

#### NAJLEPSZE PRZYSTANKI (TOP 5)
<details><summary><b>1 Maja - Dom Kultury (891f0ec5e3bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : 1 Maja - Dom Kultury
  stop_id               : 1
  h3_index              : 891f0ec5e3bffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 0.7076

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 24804940.0929

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 21.2143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 11839.9340

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 0.0348

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 2x micro_playground
  > 1x culture_theatre
  > 1x industrial_zone
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - industrial_zone        : przystań morska w Świnoujściu-Karsiborze
```
</details>
<details><summary><b>1 Maja - Dom Kultury (891f0ec5e3bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : 1 Maja - Dom Kultury
  stop_id               : 2
  h3_index              : 891f0ec5e3bffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 0.7076

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 24804940.0929

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 21.2143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 11839.9340

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 0.0348

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x culture_theatre
  > 1x industrial_zone
  > 1x commercial_zone
  > 1x micro_playground

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - industrial_zone        : przystań morska w Świnoujściu-Karsiborze
```
</details>
<details><summary><b>1 Maja / I Armii Wojska Polskiego (891f0ec5e0fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : 1 Maja / I Armii Wojska Polskiego
  stop_id               : 3
  h3_index              : 891f0ec5e0fffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 0.7076

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 24804940.0929

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 21.2143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 11839.9340

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 0.0348

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 3x micro_playground
  > 2x industrial_zone
  > 2x park_recreation
  > 1x convenience_store
  > 1x culture_theatre
  > 1x gastronomy
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store      : abc
    - gastronomy             : Rybaczówka Karczma Rybna
    - industrial_zone        : przystań morska w Świnoujściu-Karsiborze
```
</details>
<details><summary><b>1 Maja / I Armii Wojska Polskiego (891f0ec5e73ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : 1 Maja / I Armii Wojska Polskiego
  stop_id               : 7
  h3_index              : 891f0ec5e73ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 0.7076

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 24804940.0929

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 21.2143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 11839.9340

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 0.0348

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 2x micro_playground
  > 2x industrial_zone
  > 2x park_recreation
  > 1x convenience_store
  > 1x culture_theatre
  > 1x gastronomy
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store      : abc
    - gastronomy             : Rybaczówka Karczma Rybna
    - industrial_zone        : przystań morska w Świnoujściu-Karsiborze
```
</details>
<details><summary><b>1 Maja - kościół (891f0ec585bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : 1 Maja - kościół
  stop_id               : 4
  h3_index              : 891f0ec585bffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 0.7076

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 24804940.0929

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 21.2143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 11839.9340

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 0.0348

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x industrial_zone
  > 1x place_of_worship

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - place_of_worship       : Kościół pw. Niepokalanego Poczęcia Najświętszej Maryi Panny
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Zalewowa / Szmaragdowa (891f0ec5d93ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Zalewowa / Szmaragdowa
  stop_id               : 129
  h3_index              : 891f0ec5d93ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 0.7076

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 24804940.0929

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 21.2143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 11839.9340

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 0.0348

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x place_of_worship
  > 1x micro_parcel_locker
  > 1x micro_playground
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - place_of_worship       : Kaplica domowa
    - micro_parcel_locker    : Paczkomat InPost
```
</details>
<details><summary><b>Świnoujście (891f0ec46cbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Świnoujście
  stop_id               : 1008
  h3_index              : 891f0ec46cbffff
  hub_id                : 0

[OCENA Z-SCORE & RANK]
  grade                 : B
  local_percentile      : 80.0000
  local_score_raw       : 0.2117

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 1150526341.3965

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 9505.1918

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 10.7778

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 5x gastronomy
  > 2x micro_atm
  > 1x national_rail_hub
  > 1x car_services
  > 1x convenience_store
  > 1x personal_services
  > 1x pharmacy
  > 1x micro_parcel_locker
  > 1x supermarket
  > 1x post_office
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - national_rail_hub      : Świnoujście
    - car_services           : Car-o-liner
    - convenience_store      : Żabka
    - gastronomy             : Tawerna Białe Żagle
    - micro_atm              : Pekao SA
    - pharmacy               : Centrum Zdrowia
    - gastronomy             : Love and laugh kebab
    - micro_atm              : Euronet
    - micro_parcel_locker    : Paczkomat InPost
    - gastronomy             : Bar Bosman
    - supermarket            : Biedronka
    - post_office            : FUP Świnoujście 1
```
</details>
<details><summary><b>Świnoujście Port (891f0ec732fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Świnoujście Port
  stop_id               : 1073
  h3_index              : 891f0ec732fffff
  hub_id                : 1

[OCENA Z-SCORE & RANK]
  grade                 : C
  local_percentile      : 60.0000
  local_score_raw       : -0.1603

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 140229.5310

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 14111.9365

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 2x micro_atm
  > 2x business_office
  > 1x car_services
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : Euronet
    - micro_atm              : Euronet
    - business_office        : Biuro Obsługi Frachtowej CARGO Polferries - Świnoujście
    - business_office        : Baza Oznakowania Nawigacyjnego
    - car_services           : Orlen
```
</details>
<details><summary><b>Świnoujście Warszów (891f0ec4663ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Świnoujście Warszów
  stop_id               : 1057
  h3_index              : 891f0ec4663ffff
  hub_id                : 3

[OCENA Z-SCORE & RANK]
  grade                 : D
  local_percentile      : 40.0000
  local_score_raw       : -0.1909

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 41128.2611

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 9496.4435

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 17.7704

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 4x micro_playground
  > 2x convenience_store
  > 2x education_high_school
  > 1x micro_parcel_locker
  > 1x personal_services
  > 1x place_of_worship
  > 1x police_station
  > 1x education_preschool

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store      : Wyspa Smaków
    - micro_parcel_locker    : Paczkomat InPost
    - convenience_store      : Lewiatan
    - personal_services      : Lashespoint
    - place_of_worship       : Kościół pw. Świętego Wojciecha Biskupa i Męczennika
    - police_station         : Posterunek Policji Świnoujście-Warszów
    - education_high_school  : Szkoła Podstawowa nr 2 im. Henryka Sucharskiego
    - education_preschool    : Przedszkole Miejskie nr 9
    - education_high_school  : Szkoła Podstawowa nr 2 im. Henryka Sucharskiego
```
</details>
<details><summary><b>Świnoujście Przytór (891f0ec438fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Świnoujście Przytór
  stop_id               : 1040
  h3_index              : 891f0ec438fffff
  hub_id                : 2

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 20.0000
  local_score_raw       : -0.5681

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 14111.9365

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1.8874

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>

---

## SZCZECIN
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: -0.000, Std: 0.605)
     Rozkład Kartek (unikalne Huby): A: 2, A+: 2, B: 3, C: 4, D: 5, F: 4
[👥 BAZA LUDNOŚCI GUS] ❌ OSTRZEŻENIE DEMOGRAFICZNE: Odchylenie 27.8%. GUS: 511,323 vs Baza: 400,000
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
```

### Faza 0: Statystyki ogólne
- **Populacja Miasta:** 511,323 (GUS Grid)
- **Transakcje RCN:** 45,297

### Faza III: Top 20 POI (Miasto)

| Kategoria | Tier | Ilość w Mieście | Wartość Punktowa (W) |
|---|---|---|---|
| `international_airport` | T0_MEGA_HUB | 1 | 11,672,841,373 |
| `national_rail_hub` | T0_MEGA_HUB | 6 | 2,065,756,509 |
| `regional_rail_hub` | T1_NATIONAL_MAGNET | 2 | 1,060,009,482 |
| `hospital_clinical` | T1_NATIONAL_MAGNET | 11 | 252,344,282 |
| `national_stadium` | T1_NATIONAL_MAGNET | 10 | 198,700,419 |
| `university_campus` | T1_NATIONAL_MAGNET | 58 | 126,447,203 |
| `industrial_zone` | T2_STRATEGIC_HUB | 591 | 17,191,089 |
| `commercial_zone` | T2_STRATEGIC_HUB | 275 | 16,391,562 |
| `logistics_hub` | T2_STRATEGIC_HUB | 2 | 16,330,280 |
| `shopping_mall` | T2_STRATEGIC_HUB | 40 | 15,366,025 |
| `supermarket` | T2_STRATEGIC_HUB | 207 | 10,308,949 |
| `government_central` | T2_STRATEGIC_HUB | 145 | 8,120,851 |
| `student_dormitory` | T2_STRATEGIC_HUB | 3 | 6,999,964 |
| `business_office` | T2_STRATEGIC_HUB | 315 | 6,673,978 |
| `education_high_school` | T3_LOCAL_CORE | 221 | 1,415,835 |
| `marketplace` | T3_LOCAL_CORE | 24 | 1,333,889 |
| `sports_centre` | T3_LOCAL_CORE | 105 | 1,181,652 |
| `social_support_mops` | T3_LOCAL_CORE | 75 | 1,025,454 |
| `culture_theatre` | T3_LOCAL_CORE | 57 | 829,651 |
| `health_clinic` | T3_LOCAL_CORE | 356 | 707,547 |

### Faza IV: Próbki Pełnego DNA 100% (Zobacz szczegóły POI!)

#### NAJLEPSZE PRZYSTANKI (TOP 5)
<details><summary><b>Rurzyca ul. Goleniowska VIII (891f0e630afffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Rurzyca ul. Goleniowska VIII
  stop_id               : 52
  h3_index              : 891f0e630afffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.6721

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 45367855.5722

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 494.8571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6974.6170

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 23.4418

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x car_services

  [WSKAZANE KONKRETNE INSTYTUCJE]
```
</details>
<details><summary><b>Rurzyca ul. Goleniowska "Farmer" (891f0e6302bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Rurzyca ul. Goleniowska "Farmer"
  stop_id               : 31
  h3_index              : 891f0e6302bffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.6721

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 45367855.5722

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 494.8571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6974.6170

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 23.4418

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 2x industrial_zone
  > 1x micro_parcel_locker

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_parcel_locker    : Appkomat InPost
    - industrial_zone        : Farmer
    - industrial_zone        : Puch Automatyka
```
</details>
<details><summary><b>Kliniska Wielkie ul. Szczecińska II (891f0e633d7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Kliniska Wielkie ul. Szczecińska II
  stop_id               : 33
  h3_index              : 891f0e633d7ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.6721

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 45367855.5722

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 494.8571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6974.6170

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 23.4418

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 2x micro_parcel_locker
  > 2x park_recreation
  > 1x gastronomy
  > 1x personal_services
  > 1x pharmacy
  > 1x culture_theatre
  > 1x place_of_worship
  > 1x supermarket
  > 1x education_high_school

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy             : Piccolo Amore
    - pharmacy               : Punkt Apteczny Pod Klonami
    - micro_parcel_locker    : Paczkomat InPost
    - culture_theatre        : Miejska i Powiatowa Biblioteka Publiczna im. C.K. Norwida w Goleniowie Filia w Kliniskach Wielkich
    - micro_parcel_locker    : Allegro One Box
    - place_of_worship       : Kościół pw. bł. Michała Kozala BW
    - supermarket            : Dino
    - education_high_school  : Szkoła Podstawowa im. prof. Wiesława Grochowskiego w Kliniskach Wielkich
```
</details>
<details><summary><b>Kliniska Wielkie, ul. Szczecińska IV (891f0e633cbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Kliniska Wielkie, ul. Szczecińska IV
  stop_id               : 51
  h3_index              : 891f0e633cbffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.6721

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 45367855.5722

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 494.8571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6974.6170

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 23.4418

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x personal_services
  > 1x pharmacy
  > 1x place_of_worship
  > 1x park_recreation
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - pharmacy               : Punkt Apteczny Pod Klonami
    - place_of_worship       : Kościół pw. bł. Michała Kozala BW
    - commercial_zone        : GLS
```
</details>
<details><summary><b>Pucice ul. Wiejska III (891f0e789b7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Pucice ul. Wiejska III
  stop_id               : 42
  h3_index              : 891f0e789b7ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.6721

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 45367855.5722

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 494.8571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6974.6170

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 23.4418

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x micro_atm
  > 1x health_clinic
  > 1x pharmacy
  > 1x business_office
  > 1x car_services
  > 1x micro_parcel_locker
  > 1x supermarket
  > 1x sports_centre

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - health_clinic          : Profi-Med
    - pharmacy               : Punkt Apteczny Lekserwis
    - business_office        : Carnot Corporation
    - car_services           : LOGIS TRANS
    - micro_parcel_locker    : Paczkomat InPost
    - supermarket            : Biedronka
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Rurka (891f0e63537ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Rurka
  stop_id               : 1412
  h3_index              : 891f0e63537ffff
  hub_id                : 6

[OCENA Z-SCORE & RANK]
  grade                 : D
  local_percentile      : 25.0000
  local_score_raw       : -0.3448

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 9473657.2079

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6621.5027

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 0.0181

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - industrial_zone        : Zakład produkcji betonu komórkowego Solbet
```
</details>
<details><summary><b>Szczecin Załom (891f0e61683ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Szczecin Załom
  stop_id               : 1180
  h3_index              : 891f0e61683ffff
  hub_id                : 15

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 20.0000
  local_score_raw       : -0.4446

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 28960.2614

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6988.2393

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 15.4430

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x education_high_school

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - education_high_school  : Szkoła Podstawowa nr 39 im. Arkadego Fiedlera
```
</details>
<details><summary><b>Szczecin Zdunowo (891f0e6a12fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Szczecin Zdunowo
  stop_id               : 1214
  h3_index              : 891f0e6a12fffff
  hub_id                : 17

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 15.0000
  local_score_raw       : -0.5441

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 11283104.0586

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 3380.6626

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 2.3517

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 2x micro_playground
  > 1x convenience_store
  > 1x education_high_school
  > 1x park_recreation

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store      : Gama
    - education_high_school  : Szkoła Podstawowa nr 13 im. Orląt Lwowskich
```
</details>
<details><summary><b>Radziszewo (891f1db4e93ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Radziszewo
  stop_id               : 280148
  h3_index              : 891f1db4e93ffff
  hub_id                : 5

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 10.0000
  local_score_raw       : -0.5892

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 15540983.9783

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 2370.4245

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 3.7849

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 2x park_recreation
  > 1x convenience_store
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store      : Sklep spożywczy \
    - park_recreation        : Młyńskie Wzgórze
    - park_recreation        : Skwer pod kasztanem
```
</details>
<details><summary><b>Grambow (891f0e4c237ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Grambow
  stop_id               : 179218
  h3_index              : 891f0e4c237ffff
  hub_id                : 3

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 5.0000
  local_score_raw       : -1.4686

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6621.5027

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>

---

## TORUN
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: -0.000, Std: 0.633)
     Rozkład Kartek (unikalne Huby): A: 2, A+: 1, B: 2, C: 3, D: 4, F: 3
[👥 BAZA LUDNOŚCI GUS] ❌ OSTRZEŻENIE DEMOGRAFICZNE: Odchylenie 34.3%. GUS: 255,210 vs Baza: 190,000
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
```

### Faza 0: Statystyki ogólne
- **Populacja Miasta:** 255,210 (GUS Grid)
- **Transakcje RCN:** 16,216

### Faza III: Top 20 POI (Miasto)

| Kategoria | Tier | Ilość w Mieście | Wartość Punktowa (W) |
|---|---|---|---|
| `national_rail_hub` | T0_MEGA_HUB | 1 | 2,035,221,534 |
| `regional_rail_hub` | T1_NATIONAL_MAGNET | 6 | 975,698,036 |
| `national_stadium` | T1_NATIONAL_MAGNET | 5 | 196,748,412 |
| `hospital_clinical` | T1_NATIONAL_MAGNET | 18 | 166,826,851 |
| `university_campus` | T1_NATIONAL_MAGNET | 108 | 106,920,811 |
| `industrial_zone` | T2_STRATEGIC_HUB | 598 | 15,955,191 |
| `shopping_mall` | T2_STRATEGIC_HUB | 22 | 14,640,816 |
| `commercial_zone` | T2_STRATEGIC_HUB | 516 | 14,005,604 |
| `supermarket` | T2_STRATEGIC_HUB | 112 | 9,220,600 |
| `government_central` | T2_STRATEGIC_HUB | 90 | 7,336,624 |
| `business_office` | T2_STRATEGIC_HUB | 92 | 6,496,089 |
| `education_high_school` | T3_LOCAL_CORE | 111 | 1,452,094 |
| `marketplace` | T3_LOCAL_CORE | 9 | 1,172,679 |
| `social_support_mops` | T3_LOCAL_CORE | 40 | 1,156,126 |
| `sports_centre` | T3_LOCAL_CORE | 71 | 1,121,552 |
| `culture_theatre` | T3_LOCAL_CORE | 38 | 817,948 |
| `health_clinic` | T3_LOCAL_CORE | 298 | 652,436 |
| `education_preschool` | T4_DAILY_SERVICE | 94 | 113,122 |
| `place_of_worship` | T4_DAILY_SERVICE | 96 | 88,532 |
| `police_station` | T4_DAILY_SERVICE | 8 | 86,799 |

### Faza IV: Próbki Pełnego DNA 100% (Zobacz szczegóły POI!)

#### NAJLEPSZE PRZYSTANKI (TOP 5)
<details><summary><b>Targowa (891f5652953ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Targowa
  stop_id               : 14401
  h3_index              : 891f5652953ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.6523

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 20478986.3589

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 273.1429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6885.7143

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 185.2118

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 24x park_recreation
  > 20x personal_services
  > 9x micro_playground
  > 8x education_high_school
  > 6x commercial_zone
  > 5x convenience_store
  > 5x micro_parcel_locker
  > 4x health_clinic
  > 4x car_services
  > 3x government_central
  > 3x specialized_retail
  > 3x gastronomy
  > 3x supermarket
  > 2x university_campus
  > 2x education_preschool
  > 1x pharmacy
  > 1x bank
  > 1x post_office
  > 1x business_office

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store      : Żabka
    - convenience_store      : Żabka
    - education_high_school  : Szkoła Podstawowa Dla Dzieci Z Autyzmem Prometheus
    - micro_parcel_locker    : Paczkomat InPost
    - micro_parcel_locker    : Paczkomat InPost
    - pharmacy               : Lubicka
    - government_central     : WFOSiGW w Toruniu - Dział Obsługi Osób Fizycznych i Programów Ogólnopolskich
    - personal_services      : Medicaskin
    - bank                   : Sgb
    - specialized_retail     : Venessa
    - personal_services      : Wizard/Bellissima
    - specialized_retail     : Stolera
```
</details>
<details><summary><b>Gołębia (891f565282fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Gołębia
  stop_id               : 56803
  h3_index              : 891f565282fffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.6523

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 20478986.3589

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 273.1429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6885.7143

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 185.2118

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 19x park_recreation
  > 16x personal_services
  > 9x micro_playground
  > 8x education_high_school
  > 4x health_clinic
  > 4x micro_parcel_locker
  > 3x convenience_store
  > 2x gastronomy
  > 2x supermarket
  > 2x university_campus
  > 2x education_preschool
  > 2x government_central
  > 2x car_services
  > 1x pharmacy
  > 1x post_office
  > 1x national_stadium
  > 1x business_office
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store      : Żabka
    - health_clinic          : Przychodnia Cito-Med
    - education_high_school  : Szkoła Podstawowa Dla Dzieci Z Autyzmem Prometheus
    - micro_parcel_locker    : Paczkomat InPost
    - micro_parcel_locker    : Paczkomat InPost
    - pharmacy               : Lubicka
    - personal_services      : Rossmann
    - personal_services      : Esthetic Dental Clinic
    - gastronomy             : Qchenka
    - health_clinic          : Jopa clinic
    - supermarket            : Delikatesy Centrum
    - personal_services      : Weronika Bakacz
```
</details>
<details><summary><b>Dworzec Miasto (891f565286fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Dworzec Miasto
  stop_id               : 31403
  h3_index              : 891f565286fffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.6523

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 20478986.3589

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 273.1429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6885.7143

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 185.2118

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 11x park_recreation
  > 5x health_clinic
  > 5x personal_services
  > 5x industrial_zone
  > 4x gastronomy
  > 3x place_of_worship
  > 3x commercial_zone
  > 2x business_office
  > 2x education_high_school
  > 1x regional_rail_hub
  > 1x micro_parcel_locker
  > 1x pharmacy
  > 1x specialized_retail
  > 1x car_services
  > 1x government_central
  > 1x culture_theatre
  > 1x micro_playground

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - health_clinic          : Centrum Medyczne Olk-Med
    - regional_rail_hub      : Toruń Miasto
    - business_office        : Pomoc drogowa - laweta Toruń
    - micro_parcel_locker    : Paczkomat InPost
    - pharmacy               : Euro Apteka
    - gastronomy             : Serce Gruzji
    - personal_services      : SC Beauty Clinic
    - personal_services      : Górny Barber
    - specialized_retail     : Garderobe
    - car_services           : Euromaster Sujkowscy
    - health_clinic          : Porabiasz lecznicza ran [gabinet prywatny]
    - health_clinic          : Poradnia Medycyny Pracy
```
</details>
<details><summary><b>Grębocin - Pętla (891f56cd913ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Grębocin - Pętla
  stop_id               : 19904
  h3_index              : 891f56cd913ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.6523

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 20478986.3589

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 273.1429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6885.7143

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 185.2118

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 8x commercial_zone
  > 7x personal_services
  > 5x gastronomy
  > 5x park_recreation
  > 3x car_services
  > 2x supermarket
  > 2x micro_parcel_locker
  > 2x place_of_worship
  > 2x industrial_zone
  > 1x bank
  > 1x education_preschool
  > 1x specialized_retail
  > 1x micro_atm
  > 1x pharmacy
  > 1x convenience_store
  > 1x education_high_school
  > 1x health_clinic
  > 1x micro_playground
  > 1x social_support_mops

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - bank                   : Bank Spółdzielczy w Grębocinie
    - education_preschool    : Słoneczko
    - gastronomy             : Galiano Pizza
    - gastronomy             : Pod Kasztanami
    - gastronomy             : Pizzeria Rustico
    - supermarket            : POLOmarket
    - specialized_retail     : Lassar
    - micro_atm              : Euronet
    - pharmacy               : Apteka Dla Ciebie
    - personal_services      : Lena
    - gastronomy             : Rustico
    - personal_services      : Bellesca
```
</details>
<details><summary><b>Dobrzejewice (891f5656adbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Dobrzejewice
  stop_id               : 99135
  h3_index              : 891f5656adbffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.6523

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 20478986.3589

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 273.1429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6885.7143

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 185.2118

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 4x specialized_retail
  > 4x social_support_mops
  > 3x personal_services
  > 2x convenience_store
  > 2x health_clinic
  > 2x micro_parcel_locker
  > 2x commercial_zone
  > 2x education_high_school
  > 1x post_office
  > 1x micro_atm
  > 1x bank
  > 1x police_station
  > 1x pharmacy
  > 1x culture_theatre
  > 1x place_of_worship
  > 1x supermarket

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store      : Lewiatan
    - convenience_store      : Maciej
    - post_office            : Poczta Polska
    - micro_atm              : BS Grębocin
    - bank                   : BS w Grębocinie
    - police_station         : Komisariat Policji
    - pharmacy               : Puls 9
    - health_clinic          : Marcin Kusz
    - culture_theatre        : Gminna Biblioteka Publiczna
    - specialized_retail     : Butik u Moniki
    - social_support_mops    : Gminny Ośrodek Pomocy Społecznej w Obrowie. Filia w Dobrzejewicach
    - specialized_retail     : Aga
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Ostaszewo Toruńskie (891f56cc68bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Ostaszewo Toruńskie
  stop_id               : 20370
  h3_index              : 891f56cc68bffff
  hub_id                : 6

[OCENA Z-SCORE & RANK]
  grade                 : D
  local_percentile      : 33.3333
  local_score_raw       : -0.2690

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 738178545.1127

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 2590.6736

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 0.7111

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 2x industrial_zone
  > 1x regional_rail_hub
  > 1x place_of_worship
  > 1x micro_playground
  > 1x park_recreation

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - regional_rail_hub      : Ostaszewo Toruńskie
    - place_of_worship       : Kaplica pw. Matki Boskiej Częstochowskiej
```
</details>
<details><summary><b>Grębocin (891f56cd86bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Grębocin
  stop_id               : 19943
  h3_index              : 891f56cd86bffff
  hub_id                : 4

[OCENA Z-SCORE & RANK]
  grade                 : D
  local_percentile      : 26.6667
  local_score_raw       : -0.2970

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 29962164.3118

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 1947.1268

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 16.3966

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 33x industrial_zone
  > 3x commercial_zone
  > 2x micro_playground
  > 1x convenience_store
  > 1x business_office

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - business_office        : POLCHEM Sp. z o.o.
    - industrial_zone        : Elektrociepłownia PGE Toruń
    - industrial_zone        : MTL
    - industrial_zone        : MTL
    - industrial_zone        : Instal
    - industrial_zone        : Mikropasz
    - industrial_zone        : Reja
    - industrial_zone        : Dukat
    - industrial_zone        : Welwet
    - industrial_zone        : Wytwórnia betonu Holcim
    - industrial_zone        : Tombud
    - industrial_zone        : Next Lightning
```
</details>
<details><summary><b>Dobrzejewice (891f5654567ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Dobrzejewice
  stop_id               : 19950
  h3_index              : 891f5654567ffff
  hub_id                : 3

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 20.0000
  local_score_raw       : -0.3845

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 856530.8341

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6395.0179

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 3.8620

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
```
</details>
<details><summary><b>Brzoza Toruńska (891f5655697ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Brzoza Toruńska
  stop_id               : 19760
  h3_index              : 891f5655697ffff
  hub_id                : 0

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 13.3333
  local_score_raw       : -0.9167

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 6460.3217

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6395.0179

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 0.1082

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 2x micro_playground
  > 2x gastronomy

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy             : Bonus
    - gastronomy             : Smacznie i Szybko
```
</details>
<details><summary><b>Cierpice Kąkol (891f565304fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Cierpice Kąkol
  stop_id               : 259135
  h3_index              : 891f565304fffff
  hub_id                : 2

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 6.6667
  local_score_raw       : -0.9621

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 272.9441

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6395.0179

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 5.1757

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x convenience_store

  [WSKAZANE KONKRETNE INSTYTUCJE]
```
</details>

---

## TROJMIASTO
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: -0.000, Std: 0.644)
     Rozkład Kartek (unikalne Huby): A: 6, A+: 3, B: 8, C: 12, D: 14, F: 13
[👥 BAZA LUDNOŚCI GUS] Brak profilu w CITY_BASELINES
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
```

### Faza 0: Statystyki ogólne
- **Populacja Miasta:** 1,057,375 (GUS Grid)
- **Transakcje RCN:** 150,122

### Faza III: Top 20 POI (Miasto)

| Kategoria | Tier | Ilość w Mieście | Wartość Punktowa (W) |
|---|---|---|---|
| `international_airport` | T0_MEGA_HUB | 1 | 12,302,394,383 |
| `national_rail_hub` | T0_MEGA_HUB | 2 | 2,282,104,382 |
| `regional_rail_hub` | T1_NATIONAL_MAGNET | 14 | 1,090,333,107 |
| `hospital_clinical` | T1_NATIONAL_MAGNET | 17 | 236,859,900 |
| `national_stadium` | T1_NATIONAL_MAGNET | 14 | 224,976,610 |
| `university_campus` | T1_NATIONAL_MAGNET | 62 | 157,419,036 |
| `logistics_hub` | T2_STRATEGIC_HUB | 1 | 18,080,291 |
| `shopping_mall` | T2_STRATEGIC_HUB | 91 | 16,061,530 |
| `commercial_zone` | T2_STRATEGIC_HUB | 1072 | 15,824,230 |
| `industrial_zone` | T2_STRATEGIC_HUB | 1931 | 15,564,981 |
| `supermarket` | T2_STRATEGIC_HUB | 315 | 10,765,154 |
| `government_central` | T2_STRATEGIC_HUB | 248 | 9,747,446 |
| `business_office` | T2_STRATEGIC_HUB | 369 | 7,849,825 |
| `education_high_school` | T3_LOCAL_CORE | 354 | 1,612,641 |
| `marketplace` | T3_LOCAL_CORE | 30 | 1,562,441 |
| `social_support_mops` | T3_LOCAL_CORE | 84 | 1,208,199 |
| `sports_centre` | T3_LOCAL_CORE | 217 | 1,191,750 |
| `culture_theatre` | T3_LOCAL_CORE | 125 | 884,079 |
| `health_clinic` | T3_LOCAL_CORE | 681 | 730,713 |
| `police_station` | T4_DAILY_SERVICE | 50 | 138,119 |

### Faza IV: Próbki Pełnego DNA 100% (Zobacz szczegóły POI!)

#### NAJLEPSZE PRZYSTANKI (TOP 5)
<details><summary><b>Sopot (891f724ae5bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Sopot
  stop_id               : 5942
  h3_index              : 891f724ae5bffff
  hub_id                : 45

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.1682

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 1673591420.7313

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 13.2857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 13000.5417

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 193.1308

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 45x gastronomy
  > 16x micro_atm
  > 11x convenience_store
  > 11x specialized_retail
  > 11x personal_services
  > 8x bank
  > 8x park_recreation
  > 6x government_central
  > 6x commercial_zone
  > 5x pharmacy
  > 5x health_clinic
  > 5x place_of_worship
  > 4x education_preschool
  > 4x social_support_mops
  > 4x micro_playground
  > 3x micro_parcel_locker
  > 3x education_high_school
  > 2x post_office
  > 2x culture_theatre
  > 2x sports_centre
  > 1x regional_rail_hub
  > 1x supermarket
  > 1x shopping_mall
  > 1x university_campus
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - regional_rail_hub      : Sopot
    - post_office            : Poczta Polska
    - convenience_store      : Carrefour Express
    - bank                   : Santander
    - bank                   : Crédit Agricole
    - bank                   : Millennium Bank
    - bank                   : Millennium Bank
    - micro_atm              : Bankomat Millennium
    - micro_atm              : Bankomat Cash4You
    - micro_atm              : Bankomat Millennium
    - micro_atm              : Bankomat BZ WBK
    - pharmacy               : Dom Leków
```
</details>
<details><summary><b>Gdynia Orłowo (891f724a507ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Gdynia Orłowo
  stop_id               : 5934
  h3_index              : 891f724a507ffff
  hub_id                : 30

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 98.2143
  local_score_raw       : 0.9815

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 655595671.2953

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 13.2143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 12722.4513

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 93.6842

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 75x specialized_retail
  > 9x micro_atm
  > 9x gastronomy
  > 7x micro_parcel_locker
  > 7x commercial_zone
  > 6x personal_services
  > 6x industrial_zone
  > 5x health_clinic
  > 4x convenience_store
  > 2x bank
  > 2x business_office
  > 2x place_of_worship
  > 2x micro_playground
  > 2x education_preschool
  > 1x post_office
  > 1x regional_rail_hub
  > 1x car_services
  > 1x pharmacy
  > 1x supermarket
  > 1x education_high_school
  > 1x shopping_mall

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : Bankomat Millennium
    - post_office            : Poczta Polska
    - micro_atm              : Bank PeKaO SA
    - micro_atm              : Euronet
    - micro_atm              : Millennium Bank
    - convenience_store      : Minuta 8
    - micro_atm              : Euronet
    - specialized_retail     : Bejto - Materace
    - regional_rail_hub      : Gdynia Orłowo
    - bank                   : Kasa Stefczyka
    - micro_atm              : SKOK24
    - health_clinic          : Orłowska Dental Clinic
```
</details>
<details><summary><b>Gdańsk Główny (891f09b2467ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Gdańsk Główny
  stop_id               : 7500
  h3_index              : 891f09b2467ffff
  hub_id                : 4

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 96.4286
  local_score_raw       : 0.8832

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 3467990279.7020

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 13.3571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 11764.7059

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 14.3088

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 35x gastronomy
  > 25x specialized_retail
  > 23x personal_services
  > 16x micro_atm
  > 13x park_recreation
  > 13x commercial_zone
  > 11x place_of_worship
  > 10x bank
  > 10x convenience_store
  > 10x government_central
  > 7x pharmacy
  > 7x health_clinic
  > 6x university_campus
  > 5x culture_theatre
  > 4x supermarket
  > 4x micro_parcel_locker
  > 3x education_high_school
  > 3x micro_playground
  > 2x police_station
  > 2x post_office
  > 1x national_rail_hub
  > 1x business_office
  > 1x shopping_mall
  > 1x social_support_mops
  > 1x car_services
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy             : KFC
    - micro_atm              : Santander
    - micro_atm              : Euronet
    - micro_atm              : Euronet
    - bank                   : Millennium Bank
    - micro_atm              : Euronet
    - supermarket            : Biedronka
    - education_high_school  : Akademickie Liceum Ogólnokształcące \
    - micro_atm              : Euronet
    - micro_atm              : Euronet
    - gastronomy             : Rada Miasta
    - supermarket            : Biedronka
```
</details>
<details><summary><b>Gdańsk Wrzeszcz (891f7248ac3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Gdańsk Wrzeszcz
  stop_id               : 7534
  h3_index              : 891f7248ac3ffff
  hub_id                : 21

[OCENA Z-SCORE & RANK]
  grade                 : A
  local_percentile      : 94.6429
  local_score_raw       : 0.8478

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 1082254036.9020

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 13.2857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 9184.0935

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 121.1863

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 122x specialized_retail
  > 92x personal_services
  > 70x gastronomy
  > 35x health_clinic
  > 19x micro_atm
  > 17x business_office
  > 16x park_recreation
  > 15x convenience_store
  > 14x micro_parcel_locker
  > 11x bank
  > 9x micro_playground
  > 9x commercial_zone
  > 8x pharmacy
  > 4x post_office
  > 4x supermarket
  > 3x education_high_school
  > 3x government_central
  > 3x place_of_worship
  > 3x education_preschool
  > 2x shopping_mall
  > 2x industrial_zone
  > 1x regional_rail_hub
  > 1x culture_theatre
  > 1x university_campus

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy             : Fukafe
    - gastronomy             : McDonald's
    - gastronomy             : KFC
    - bank                   : Millennium Bank
    - gastronomy             : Chinkalnia
    - bank                   : Millennium Bank
    - gastronomy             : Xo Thai
    - gastronomy             : Bar Maciuś
    - post_office            : Poczta Polska
    - personal_services      : Skin Revolution
    - pharmacy               : Dr. Max
    - gastronomy             : Kebab Laamh
```
</details>
<details><summary><b>Gdynia Chylonia (891f725aac7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Gdynia Chylonia
  stop_id               : 6031
  h3_index              : 891f725aac7ffff
  hub_id                : 24

[OCENA Z-SCORE & RANK]
  grade                 : A
  local_percentile      : 92.8571
  local_score_raw       : 0.7590

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 1272861168.7534

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 13.1429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 8220.7719

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 80.8815

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 11x bank
  > 11x micro_parcel_locker
  > 8x industrial_zone
  > 8x park_recreation
  > 7x gastronomy
  > 6x micro_playground
  > 5x micro_atm
  > 5x pharmacy
  > 5x convenience_store
  > 5x commercial_zone
  > 4x car_services
  > 4x supermarket
  > 3x specialized_retail
  > 2x business_office
  > 2x education_high_school
  > 1x post_office
  > 1x regional_rail_hub
  > 1x personal_services
  > 1x culture_theatre
  > 1x health_clinic
  > 1x place_of_worship
  > 1x sports_centre

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - car_services           : Shell
    - supermarket            : Delikatesy Centrum
    - bank                   : Millennium Bank
    - post_office            : Urząd Pocztowy Gdynia 4
    - gastronomy             : Kevin. Pizzeria
    - bank                   : Millennium Przedsiębiorstwa
    - micro_atm              : Euronet
    - micro_atm              : Euronet
    - bank                   : Santander
    - pharmacy               : Centrum Leków Chylonia
    - bank                   : PKO BP
    - gastronomy             : Sultan
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Leźno (891f0986cd7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Leźno
  stop_id               : 178108
  h3_index              : 891f0986cd7ffff
  hub_id                : 35

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 8.9286
  local_score_raw       : -1.1480

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 90212.9988

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5194.8052

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 14.1233

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 2x convenience_store
  > 1x micro_parcel_locker
  > 1x gastronomy
  > 1x industrial_zone
  > 1x micro_playground

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_parcel_locker    : Paczkomat InPost
    - gastronomy             : Bafra Kebab
    - convenience_store      : Delikatesy u Janusza
```
</details>
<details><summary><b>Gdańsk Rębiechowo (891f7249447ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Gdańsk Rębiechowo
  stop_id               : 257521
  h3_index              : 891f7249447ffff
  hub_id                : 17

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 7.1429
  local_score_raw       : -1.2185

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 79215.5699

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 8809.6007

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 0.2861

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x park_recreation

  [WSKAZANE KONKRETNE INSTYTUCJE]
```
</details>
<details><summary><b>Żukowo Zachodnie (891f098664fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Żukowo Zachodnie
  stop_id               : 18051
  h3_index              : 891f098664fffff
  hub_id                : 54

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 5.3571
  local_score_raw       : -1.2200

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 47566.1383

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5520.0641

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 10.5021

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Cieplewo (891f09bada3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Cieplewo
  stop_id               : 7328
  h3_index              : 891f09bada3ffff
  hub_id                : 1

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 3.5714
  local_score_raw       : -1.3266

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 12315.8898

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 4361.9884

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 25.1696

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x micro_playground
  > 1x business_office

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - business_office        : PIB Masternak
```
</details>
<details><summary><b>Otomino (891f0986283ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Otomino
  stop_id               : 265664
  h3_index              : 891f0986283ffff
  hub_id                : 36

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 1.7857
  local_score_raw       : -1.3809

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 1397.3177

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 8809.6007

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 8.5249

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x convenience_store

  [WSKAZANE KONKRETNE INSTYTUCJE]
```
</details>

---

## WARSZAWA
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: -0.000, Std: 0.610)
     Rozkład Kartek (unikalne Huby): A: 11, A+: 6, B: 17, C: 23, D: 28, F: 28
[👥 BAZA LUDNOŚCI GUS] ❌ OSTRZEŻENIE DEMOGRAFICZNE: Odchylenie 71.2%. GUS: 3,081,843 vs Baza: 1,800,000
[❌]  `sum_pull` <= 0 w POI PARQUET!
[✅]  POP Parquet 100% Valid
```

### Faza 0: Statystyki ogólne
- **Populacja Miasta:** 3,081,843 (GUS Grid)
- **Transakcje RCN:** 227,085

### Faza III: Top 20 POI (Miasto)

| Kategoria | Tier | Ilość w Mieście | Wartość Punktowa (W) |
|---|---|---|---|
| `international_airport` | T0_MEGA_HUB | 2 | 14,460,100,790 |
| `national_rail_hub` | T0_MEGA_HUB | 6 | 2,472,971,799 |
| `regional_rail_hub` | T1_NATIONAL_MAGNET | 72 | 1,166,725,779 |
| `national_stadium` | T1_NATIONAL_MAGNET | 34 | 251,648,589 |
| `hospital_clinical` | T1_NATIONAL_MAGNET | 75 | 241,577,101 |
| `exhibition_centre` | T1_NATIONAL_MAGNET | 3 | 172,587,056 |
| `university_campus` | T1_NATIONAL_MAGNET | 234 | 146,189,956 |
| `shopping_mall` | T2_STRATEGIC_HUB | 175 | 19,681,708 |
| `industrial_zone` | T2_STRATEGIC_HUB | 5113 | 18,160,397 |
| `commercial_zone` | T2_STRATEGIC_HUB | 3934 | 17,668,590 |
| `student_dormitory` | T2_STRATEGIC_HUB | 17 | 13,803,323 |
| `supermarket` | T2_STRATEGIC_HUB | 912 | 11,158,061 |
| `government_central` | T2_STRATEGIC_HUB | 678 | 10,635,222 |
| `business_office` | T2_STRATEGIC_HUB | 1311 | 8,482,151 |
| `logistics_hub` | T2_STRATEGIC_HUB | 19 | 8,376,859 |
| `marketplace` | T3_LOCAL_CORE | 113 | 1,911,325 |
| `education_high_school` | T3_LOCAL_CORE | 1304 | 1,614,025 |
| `social_support_mops` | T3_LOCAL_CORE | 282 | 1,403,647 |
| `sports_centre` | T3_LOCAL_CORE | 843 | 1,324,046 |
| `culture_theatre` | T3_LOCAL_CORE | 490 | 862,519 |

### Faza IV: Próbki Pełnego DNA 100% (Zobacz szczegóły POI!)

#### NAJLEPSZE PRZYSTANKI (TOP 5)
<details><summary><b>Modlin Airport (891f52ae0cbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Modlin Airport
  stop_id               : STRATEGIC
  h3_index              : 891f52ae0cbffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.3741

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 3571622.4163

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 303.1857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 10534.8460

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 6.1192

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 7x gastronomy
  > 6x micro_atm
  > 1x police_station
  > 1x international_airport
  > 1x place_of_worship

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : Euronet
    - micro_atm              : Euronet
    - micro_atm              : Euronet
    - micro_atm              : Grupa BPS
    - micro_atm              : Euronet
    - gastronomy             : Costa
    - police_station         : Posterunek Policji w Modlinie
    - gastronomy             : Atmosphere
    - international_airport  : Port Lotniczy Warszawa-Modlin
    - place_of_worship       : Kaplica pw. Matki Bożej Loretańskiej
    - gastronomy             : So Coffee
    - gastronomy             : BestFly Bar
```
</details>
<details><summary><b>Łosie, Łosie-pętla (891f53c20b7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Łosie, Łosie-pętla
  stop_id               : 122
  h3_index              : 891f53c20b7ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.3741

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 3571622.4163

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 303.1857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 10534.8460

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 6.1192

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x convenience_store

  [WSKAZANE KONKRETNE INSTYTUCJE]
```
</details>
<details><summary><b>Łosie, Sosnowa (891f53c2097ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Łosie, Sosnowa
  stop_id               : 123
  h3_index              : 891f53c2097ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.3741

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 3571622.4163

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 303.1857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 10534.8460

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 6.1192

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Łosie, Jaworowa (891f53c243bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Łosie, Jaworowa
  stop_id               : 120
  h3_index              : 891f53c243bffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.3741

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 3571622.4163

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 303.1857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 10534.8460

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 6.1192

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Łosie, Szyszkowa (891f53c240fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Łosie, Szyszkowa
  stop_id               : 125
  h3_index              : 891f53c240fffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.3741

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 3571622.4163

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 303.1857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 10534.8460

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 6.1192

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Mińsk Mazowiecki Anielina (891f530b01bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Mińsk Mazowiecki Anielina
  stop_id               : 39800
  h3_index              : 891f530b01bffff
  hub_id                : 30

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 4.4248
  local_score_raw       : -1.1063

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 93475.0410

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 2.8571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5838.4880

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 10.5344

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x micro_parcel_locker
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_parcel_locker    : Paczkomat InPost
```
</details>
<details><summary><b>Kornelin (891f520ee73ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Kornelin
  stop_id               : 34629
  h3_index              : 891f520ee73ffff
  hub_id                : 21

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 3.5398
  local_score_raw       : -1.1285

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 30560.0186

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 1.5000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 10154.4102

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 14.8918

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x convenience_store

  [WSKAZANE KONKRETNE INSTYTUCJE]
```
</details>
<details><summary><b>Wieliszew Centrum (891f53dac77ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Wieliszew Centrum
  stop_id               : 265023
  h3_index              : 891f53dac77ffff
  hub_id                : 101

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 2.6549
  local_score_raw       : -1.2669

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 10233790.5233

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 10154.4102

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x park_recreation
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
```
</details>
<details><summary><b>Ustanówek (891f5359c37ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Ustanówek
  stop_id               : 33936
  h3_index              : 891f5359c37ffff
  hub_id                : 48

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 1.7699
  local_score_raw       : -1.2790

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 5353.2239

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 4.2143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5648.1972

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 10.4566

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x micro_parcel_locker
  > 1x convenience_store
  > 1x park_recreation

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_parcel_locker    : Paczkomat InPost
    - convenience_store      : Odido
```
</details>
<details><summary><b>Dąbkowizna (891f53c3467ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Dąbkowizna
  stop_id               : 36640
  h3_index              : 891f53c3467ffff
  hub_id                : 9

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.8850
  local_score_raw       : -2.6786

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.2143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 10154.4102

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 2.6028

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>

---

## WROCLAW
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: 0.000, Std: 0.634)
     Rozkład Kartek (unikalne Huby): A: 7, A+: 4, B: 11, C: 14, D: 18, F: 17
[👥 BAZA LUDNOŚCI GUS] ❌ OSTRZEŻENIE DEMOGRAFICZNE: Odchylenie 46.7%. GUS: 938,629 vs Baza: 640,000
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
```

### Faza 0: Statystyki ogólne
- **Populacja Miasta:** 938,629 (GUS Grid)
- **Transakcje RCN:** 58,508

### Faza III: Top 20 POI (Miasto)

| Kategoria | Tier | Ilość w Mieście | Wartość Punktowa (W) |
|---|---|---|---|
| `international_airport` | T0_MEGA_HUB | 1 | 12,711,153,521 |
| `national_rail_hub` | T0_MEGA_HUB | 8 | 2,182,464,786 |
| `regional_rail_hub` | T1_NATIONAL_MAGNET | 17 | 1,071,762,978 |
| `national_stadium` | T1_NATIONAL_MAGNET | 10 | 237,539,677 |
| `hospital_clinical` | T1_NATIONAL_MAGNET | 19 | 233,364,423 |
| `university_campus` | T1_NATIONAL_MAGNET | 235 | 103,222,670 |
| `student_dormitory` | T2_STRATEGIC_HUB | 1 | 22,107,741 |
| `shopping_mall` | T2_STRATEGIC_HUB | 41 | 17,488,702 |
| `industrial_zone` | T2_STRATEGIC_HUB | 1205 | 16,668,696 |
| `commercial_zone` | T2_STRATEGIC_HUB | 1098 | 16,547,171 |
| `supermarket` | T2_STRATEGIC_HUB | 290 | 10,374,761 |
| `government_central` | T2_STRATEGIC_HUB | 210 | 8,029,690 |
| `business_office` | T2_STRATEGIC_HUB | 428 | 7,467,615 |
| `logistics_hub` | T2_STRATEGIC_HUB | 3 | 7,443,852 |
| `marketplace` | T3_LOCAL_CORE | 20 | 1,593,596 |
| `education_high_school` | T3_LOCAL_CORE | 463 | 1,329,975 |
| `sports_centre` | T3_LOCAL_CORE | 218 | 1,145,484 |
| `social_support_mops` | T3_LOCAL_CORE | 68 | 1,138,891 |
| `culture_theatre` | T3_LOCAL_CORE | 108 | 800,994 |
| `health_clinic` | T3_LOCAL_CORE | 556 | 734,517 |

### Faza IV: Próbki Pełnego DNA 100% (Zobacz szczegóły POI!)

#### NAJLEPSZE PRZYSTANKI (TOP 5)
<details><summary><b>Żórawina (891e204c28fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Żórawina
  stop_id               : 1474857
  h3_index              : 891e204c28fffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 3.5440

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 525493627.5806

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 781.0714

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 8722.5661

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 184.2569

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 2x industrial_zone
  > 1x regional_rail_hub
  > 1x micro_atm
  > 1x bank
  > 1x convenience_store
  > 1x government_central
  > 1x micro_playground
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - regional_rail_hub      : Żórawina
    - bank                   : Bank Polskiej Spóldzielczości
    - government_central     : Urząd Gminy Żórawina
    - industrial_zone        : Ssab
```
</details>
<details><summary><b>Żórawina (891e204c28fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Żórawina
  stop_id               : 1475193
  h3_index              : 891e204c28fffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 3.5440

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 525493627.5806

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 781.0714

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 8722.5661

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 184.2569

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 2x industrial_zone
  > 1x regional_rail_hub
  > 1x micro_atm
  > 1x bank
  > 1x convenience_store
  > 1x government_central
  > 1x micro_playground
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - regional_rail_hub      : Żórawina
    - bank                   : Bank Polskiej Spóldzielczości
    - government_central     : Urząd Gminy Żórawina
    - industrial_zone        : Ssab
```
</details>
<details><summary><b>Żórawina (891e204c28fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Żórawina
  stop_id               : 1413427
  h3_index              : 891e204c28fffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 3.5440

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 525493627.5806

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 781.0714

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 8722.5661

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 184.2569

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 2x industrial_zone
  > 1x regional_rail_hub
  > 1x micro_atm
  > 1x bank
  > 1x convenience_store
  > 1x government_central
  > 1x micro_playground
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - regional_rail_hub      : Żórawina
    - bank                   : Bank Polskiej Spóldzielczości
    - government_central     : Urząd Gminy Żórawina
    - industrial_zone        : Ssab
```
</details>
<details><summary><b>Zębice Wrocławskie (891e204eb6fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Zębice Wrocławskie
  stop_id               : 2333179
  h3_index              : 891e204eb6fffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 3.5440

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 525493627.5806

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 781.0714

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 8722.5661

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 184.2569

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x sports_centre

  [WSKAZANE KONKRETNE INSTYTUCJE]
```
</details>
<details><summary><b>Zębice Wrocławskie (891e204eb6fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Zębice Wrocławskie
  stop_id               : 2333165
  h3_index              : 891e204eb6fffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 3.5440

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 525493627.5806

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 781.0714

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 8722.5661

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 184.2569

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x sports_centre

  [WSKAZANE KONKRETNE INSTYTUCJE]
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Zakrzów Kotowice (891e207b407ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Zakrzów Kotowice
  stop_id               : 58313
  h3_index              : 891e207b407ffff
  hub_id                : 67

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 7.0423
  local_score_raw       : -1.0895

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7147.4236

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 2.8110

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Chrząstawa Mała (891e207a403ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Chrząstawa Mała
  stop_id               : 263510
  h3_index              : 891e207a403ffff
  hub_id                : 3

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 5.6338
  local_score_raw       : -1.1105

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6356.1585

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 3.7914

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Solniki Wielkie (891e2072aa3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Solniki Wielkie
  stop_id               : 59626
  h3_index              : 891e2072aa3ffff
  hub_id                : 32

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 4.2254
  local_score_raw       : -1.1505

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7147.4236

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1.2577

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Wierzbice (891e204884bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Wierzbice
  stop_id               : 58420
  h3_index              : 891e204884bffff
  hub_id                : 36

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 2.8169
  local_score_raw       : -1.2454

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7147.4236

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Sadowice Wrocławskie (891e204a50fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Sadowice Wrocławskie
  stop_id               : 58925
  h3_index              : 891e204a50fffff
  hub_id                : 25

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 1.4085
  local_score_raw       : -1.3414

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 2842.8856

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 3.0641

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>

---

## ZIELONA-GORA
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: -0.000, Std: 0.732)
     Rozkład Kartek (unikalne Huby): A+: 1, B: 1, C: 1, D: 1, F: 1
[👥 BAZA LUDNOŚCI GUS] Brak profilu w CITY_BASELINES
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
```

### Faza 0: Statystyki ogólne
- **Populacja Miasta:** 141,680 (GUS Grid)
- **Transakcje RCN:** 5,063

### Faza III: Top 20 POI (Miasto)

| Kategoria | Tier | Ilość w Mieście | Wartość Punktowa (W) |
|---|---|---|---|
| `national_rail_hub` | T0_MEGA_HUB | 1 | 1,886,772,163 |
| `hospital_clinical` | T1_NATIONAL_MAGNET | 2 | 211,597,524 |
| `national_stadium` | T1_NATIONAL_MAGNET | 4 | 187,891,764 |
| `university_campus` | T1_NATIONAL_MAGNET | 14 | 161,441,492 |
| `industrial_zone` | T2_STRATEGIC_HUB | 105 | 17,321,706 |
| `commercial_zone` | T2_STRATEGIC_HUB | 65 | 16,631,085 |
| `shopping_mall` | T2_STRATEGIC_HUB | 27 | 14,069,436 |
| `supermarket` | T2_STRATEGIC_HUB | 67 | 10,075,869 |
| `government_central` | T2_STRATEGIC_HUB | 60 | 9,177,426 |
| `business_office` | T2_STRATEGIC_HUB | 69 | 7,987,425 |
| `education_high_school` | T3_LOCAL_CORE | 43 | 1,725,076 |
| `sports_centre` | T3_LOCAL_CORE | 89 | 905,344 |
| `social_support_mops` | T3_LOCAL_CORE | 14 | 899,772 |
| `culture_theatre` | T3_LOCAL_CORE | 27 | 822,180 |
| `health_clinic` | T3_LOCAL_CORE | 57 | 738,168 |
| `police_station` | T4_DAILY_SERVICE | 5 | 127,881 |
| `education_preschool` | T4_DAILY_SERVICE | 45 | 118,929 |
| `park_recreation` | T4_DAILY_SERVICE | 92 | 112,324 |
| `place_of_worship` | T4_DAILY_SERVICE | 40 | 97,574 |
| `car_services` | T4_DAILY_SERVICE | 32 | 82,354 |

### Faza IV: Próbki Pełnego DNA 100% (Zobacz szczegóły POI!)

#### NAJLEPSZE PRZYSTANKI (TOP 5)
<details><summary><b>Kętrzyńska (891f192c553ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Kętrzyńska
  stop_id               : 1104
  h3_index              : 891f192c553ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 0.8675

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 22869148.8650

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 43.1429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7846.1932

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 145.1953

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 9x micro_playground
  > 7x specialized_retail
  > 4x micro_parcel_locker
  > 3x pharmacy
  > 3x park_recreation
  > 3x car_services
  > 3x shopping_mall
  > 2x gastronomy
  > 2x personal_services
  > 2x convenience_store
  > 2x supermarket
  > 1x culture_theatre
  > 1x health_clinic
  > 1x micro_atm
  > 1x police_station
  > 1x place_of_worship
  > 1x education_high_school
  > 1x business_office
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - pharmacy               : Śląska
    - specialized_retail     : Pepco
    - specialized_retail     : Stelmet Zielona Góra
    - micro_parcel_locker    : Paczkomat InPost
    - culture_theatre        : Wojewódzka i Miejska Biblioteka Publiczna im. C. Norwida
    - gastronomy             : Na Wypasie
    - specialized_retail     : Lumpeks
    - health_clinic          : Centrum medycyny estetycznej i naczyniowej
    - micro_parcel_locker    : Paczkomat InPost
    - personal_services      : Studio Rogalska
    - pharmacy               : Dbam o Zdrowie
    - pharmacy               : Pharmaland
```
</details>
<details><summary><b>BOTANICZNA (891f192d593ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : BOTANICZNA
  stop_id               : 1
  h3_index              : 891f192d593ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 0.8675

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 22869148.8650

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 43.1429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7846.1932

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 145.1953

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 2x education_high_school
  > 1x gastronomy
  > 1x convenience_store
  > 1x sports_centre

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy             : Kawiarnia
    - convenience_store      : Dobry Sklep
    - education_high_school  : Zespół Szkół i Placówek Kształcenia Zawodowego
    - education_high_school  : Zespół Szkół Zawodowych PBO
```
</details>
<details><summary><b>Botaniczna (891f192d593ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Botaniczna
  stop_id               : 2
  h3_index              : 891f192d593ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 0.8675

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 22869148.8650

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 43.1429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7846.1932

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 145.1953

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 3x education_high_school
  > 2x convenience_store
  > 1x gastronomy
  > 1x park_recreation
  > 1x sports_centre
  > 1x micro_playground

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy             : Kawiarnia
    - convenience_store      : Żabka
    - convenience_store      : Dobry Sklep
    - park_recreation        : Ogród Botaniczny Uniwersytetu Zielonogórskiego
    - education_high_school  : Centrum Kształcenia Zawodowego i Ustawicznego Nr 1 „Budowlanka”
    - education_high_school  : Zespół Szkół i Placówek Kształcenia Zawodowego
    - education_high_school  : Zespół Szkół Zawodowych PBO
```
</details>
<details><summary><b>Ogród Botaniczny (891f192f337ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Ogród Botaniczny
  stop_id               : 3
  h3_index              : 891f192f337ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 0.8675

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 22869148.8650

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 43.1429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7846.1932

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 145.1953

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 6x micro_playground
  > 3x education_high_school
  > 2x convenience_store
  > 1x gastronomy
  > 1x business_office
  > 1x park_recreation
  > 1x specialized_retail
  > 1x education_preschool

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy             : Kawiarnia
    - convenience_store      : Żabka
    - convenience_store      : Dobry Sklep
    - business_office        : Sufity napięte
    - park_recreation        : Ogród Botaniczny Uniwersytetu Zielonogórskiego
    - education_high_school  : Centrum Kształcenia Zawodowego i Ustawicznego Nr 1 „Budowlanka”
    - education_high_school  : Zespół Szkół i Placówek Kształcenia Zawodowego
    - education_high_school  : Zespół Szkół Zawodowych PBO
    - specialized_retail     : Tilda Meble
    - education_preschool    : Miejskie Przedszkole nr 40
```
</details>
<details><summary><b>Głowackiego (891f192f3a7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Głowackiego
  stop_id               : 4
  h3_index              : 891f192f3a7ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 0.8675

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 22869148.8650

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 43.1429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7846.1932

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 145.1953

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 8x micro_playground
  > 7x convenience_store
  > 4x specialized_retail
  > 4x education_high_school
  > 4x park_recreation
  > 2x gastronomy
  > 2x personal_services
  > 2x post_office
  > 2x micro_parcel_locker
  > 2x pharmacy
  > 2x education_preschool
  > 2x supermarket
  > 2x government_central
  > 1x social_support_mops
  > 1x micro_atm
  > 1x place_of_worship
  > 1x health_clinic
  > 1x sports_centre

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy             : Bella Napoli
    - convenience_store      : Na Górce
    - convenience_store      : Żabka
    - convenience_store      : Przyjaciele Jedzenia
    - convenience_store      : Sklep spożywczy
    - specialized_retail     : Kaszmir - Odzież używana & Outlet
    - post_office            : UP Zielona Góra 2 Filia
    - post_office            : UP Zielona Góra 2 Filia
    - convenience_store      : Żabka
    - micro_parcel_locker    : Paczkomat InPost
    - pharmacy               : Jaskółcza
    - social_support_mops    : Ośrodek Profilaktyki i Pomocy Psychiatrycznej RELACJA
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Dworzec Główny (891f192f1a7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Dworzec Główny
  stop_id               : 11
  h3_index              : 891f192f1a7ffff
  hub_id                : -1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 0.8675

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 22869148.8650

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 43.1429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7846.1932

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 145.1953

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
<details><summary><b>Zielona Góra Główna (891f192f1a3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Zielona Góra Główna
  stop_id               : 27805
  h3_index              : 891f192f1a3ffff
  hub_id                : 0

[OCENA Z-SCORE & RANK]
  grade                 : B
  local_percentile      : 80.0000
  local_score_raw       : 0.7061

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 315710030.0434

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 8177.0941

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 26.9377

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 20x park_recreation
  > 13x gastronomy
  > 7x specialized_retail
  > 7x micro_parcel_locker
  > 6x convenience_store
  > 6x government_central
  > 5x pharmacy
  > 4x health_clinic
  > 4x micro_playground
  > 3x micro_atm
  > 3x supermarket
  > 3x industrial_zone
  > 2x business_office
  > 2x education_preschool
  > 2x commercial_zone
  > 1x police_station
  > 1x culture_theatre
  > 1x national_rail_hub
  > 1x social_support_mops
  > 1x personal_services
  > 1x education_high_school
  > 1x place_of_worship
  > 1x bank

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : Bankomat BZ WBK
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
```
</details>
<details><summary><b>Zielona Góra Stary Kisielin (891f192c197ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Zielona Góra Stary Kisielin
  stop_id               : 27920
  h3_index              : 891f192c197ffff
  hub_id                : 3

[OCENA Z-SCORE & RANK]
  grade                 : C
  local_percentile      : 60.0000
  local_score_raw       : -0.3160

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 24641957.5693

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5289.0015

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 18.5569

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 4x business_office
  > 3x micro_playground
  > 2x industrial_zone
  > 1x micro_parcel_locker
  > 1x commercial_zone
  > 1x place_of_worship
  > 1x park_recreation
  > 1x convenience_store
  > 1x supermarket
  > 1x sports_centre

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - commercial_zone        : Kleszczewscy s. c.
    - place_of_worship       : Kościół pw. Matki Bożej Wspomożenia Wiernych
    - park_recreation        : Park przy Pałacu w Starym Kisielinie
    - convenience_store      : Żabka
    - supermarket            : Dino
    - industrial_zone        : Tartak Drewdach s.c.
```
</details>
<details><summary><b>Zielona Góra Przylep (891f1921aa3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Zielona Góra Przylep
  stop_id               : 27938
  h3_index              : 891f1921aa3ffff
  hub_id                : 2

[OCENA Z-SCORE & RANK]
  grade                 : D
  local_percentile      : 40.0000
  local_score_raw       : -0.6269

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 13057902.4907

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5531.5663

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1.1027

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 2x industrial_zone
  > 1x gastronomy
  > 1x car_services

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - industrial_zone        : WallraV Sp. z o.o.
```
</details>
<details><summary><b>Zielona Góra Nowy Kisielin (891f192cea7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Zielona Góra Nowy Kisielin
  stop_id               : 258457
  h3_index              : 891f192cea7ffff
  hub_id                : 1

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 20.0000
  local_score_raw       : -0.6307

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 15792664.0796

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5531.5663

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 2x industrial_zone
  > 1x business_office

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - industrial_zone        : Eobuwie.pl S.A.
```
</details>

---
