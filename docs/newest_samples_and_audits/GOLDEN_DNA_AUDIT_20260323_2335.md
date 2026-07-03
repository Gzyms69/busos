# RAPORT W OPARCIU O ASERCJE W PEŁNI SYSTEMOWE DNA - 2026-03-23 23:38

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
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: -0.000, Std: 0.718)
     Rozkład Kartek (unikalne Huby): A: 99, A+: 50, B: 149, C: 198, D: 248, F: 247
[👥 BAZA LUDNOŚCI GUS] ❌ OSTRZEŻENIE DEMOGRAFICZNE: Odchylenie 31.3%. GUS: 380,838 vs Baza: 290,000
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
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
<details><summary><b>al. Piłsudskiego/pl. Niepodległości (301) (891f513348fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : al. Piłsudskiego/pl. Niepodległości (301)
  stop_id               : 301
  h3_index              : 891f513348fffff
  hub_id                : 94

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.5155

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 5387317.2159

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 69.3571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7440.0000

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 703.4008

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 25x personal_services
  > 21x gastronomy
  > 17x specialized_retail
  > 11x convenience_store
  > 11x micro_parcel_locker
  > 8x micro_playground
  > 7x health_clinic
  > 7x education_high_school
  > 6x pharmacy
  > 6x government_central
  > 6x place_of_worship
  > 5x micro_atm
  > 5x bank
  > 4x education_preschool
  > 3x university_campus
  > 3x park_recreation
  > 2x supermarket
  > 2x social_support_mops
  > 2x shopping_mall
  > 2x commercial_zone
  > 1x post_office
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
<details><summary><b>al. Piłsudskiego/Waryńskiego(306) (891f51334b3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : al. Piłsudskiego/Waryńskiego(306)
  stop_id               : 306
  h3_index              : 891f51334b3ffff
  hub_id                : 231

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.8991
  local_score_raw       : 1.4397

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 3015827.9204

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 54.7857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7584.3346

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 959.4414

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 48x gastronomy
  > 29x personal_services
  > 17x micro_playground
  > 17x specialized_retail
  > 16x convenience_store
  > 13x micro_parcel_locker
  > 12x health_clinic
  > 8x micro_atm
  > 8x pharmacy
  > 8x bank
  > 6x government_central
  > 4x social_support_mops
  > 4x education_preschool
  > 3x supermarket
  > 3x business_office
  > 3x university_campus
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
<details><summary><b>Pogodna/Wiejska (321) (891f51336a7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Pogodna/Wiejska (321)
  stop_id               : 321
  h3_index              : 891f51336a7ffff
  hub_id                : 15

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.7982
  local_score_raw       : 1.4349

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 5357182.8734

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 44.5714

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7793.3985

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1092.3836

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 28x micro_playground
  > 8x gastronomy
  > 7x micro_parcel_locker
  > 6x convenience_store
  > 5x supermarket
  > 5x health_clinic
  > 4x micro_atm
  > 4x pharmacy
  > 4x education_preschool
  > 2x specialized_retail
  > 2x sports_centre
  > 2x education_high_school
  > 2x car_services
  > 1x business_office
  > 1x place_of_worship
  > 1x personal_services
  > 1x student_dormitory
  > 1x university_campus
  > 1x bank
  > 1x industrial_zone
  > 1x government_central

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy             : Bar BIBI
    - supermarket            : Biedronka
    - gastronomy             : Savona
    - convenience_store      : Owoce i warzywa
    - health_clinic          : Dentysta
    - gastronomy             : Naleśnikarnia Retrospekcja
    - gastronomy             : Express Bar
    - gastronomy             : Kebab
    - health_clinic          : Dentysta
    - pharmacy               : Pogodna
    - pharmacy               : Malwa
    - pharmacy               : Cef@Rm 36
```
</details>
<details><summary><b>Sienkiewicza/Ryska (420) (891f51a9b67ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Sienkiewicza/Ryska (420)
  stop_id               : 420
  h3_index              : 891f51a9b67ffff
  hub_id                : 489

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.6973
  local_score_raw       : 1.4294

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 23182204.5889

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 25.3571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 8297.3621

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1882.0983

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
<details><summary><b>Wiejska/UWB(528) (891f51330cbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Wiejska/UWB(528)
  stop_id               : 528
  h3_index              : 891f51330cbffff
  hub_id                : 374

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.5964
  local_score_raw       : 1.4038

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 7023731.4650

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 35.9286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 8314.6067

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 968.3730

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

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Lewickie-Kolonia (1957) (891f513122fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Lewickie-Kolonia (1957)
  stop_id               : 1957
  h3_index              : 891f513122fffff
  hub_id                : 240

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.5045
  local_score_raw       : -1.5811

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.2857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6811.5942

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 0.0000

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

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.3532
  local_score_raw       : -1.6683

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6811.5942

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Koźliki / Kolonia Krynickie (891f5123357ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Koźliki / Kolonia Krynickie
  stop_id               : 499
  h3_index              : 891f5123357ffff
  hub_id                : 823

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.3532
  local_score_raw       : -1.6683

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6811.5942

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Choroszcz/Rynek 11 Listopada (2157) (891f5106063ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Choroszcz/Rynek 11 Listopada (2157)
  stop_id               : 2157
  h3_index              : 891f5106063ffff
  hub_id                : 187

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.2018
  local_score_raw       : -2.0215

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 1477644.0033

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 3.4286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 101.6202

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 333.1801

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
<details><summary><b>Choroszcz/Zastawie (935) (891f51063d3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Choroszcz/Zastawie (935)
  stop_id               : 935
  h3_index              : 891f51063d3ffff
  hub_id                : 20

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.1009
  local_score_raw       : -2.1514

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 306925.4482

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 3.4286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 101.6202

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 250.3782

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 3x place_of_worship
  > 2x convenience_store
  > 1x government_central
  > 1x micro_parcel_locker
  > 1x bank

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store      : Chorten
    - place_of_worship       : Kapliczka św. Jana Nepomucena
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
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: 0.000, Std: 0.557)
     Rozkład Kartek (unikalne Huby): A: 65, A+: 33, B: 98, C: 130, D: 162, F: 162
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
  stop_id               : 10078
  h3_index              : 891f0b3294bffff
  hub_id                : 270

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.8862

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 33957651.9740

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 56.5000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 4268.1240

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 615.6162

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 64x gastronomy
  > 17x park_recreation
  > 16x commercial_zone
  > 10x bank
  > 9x university_campus
  > 8x convenience_store
  > 8x government_central
  > 7x micro_atm
  > 7x micro_parcel_locker
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
    - micro_atm              : Pekao Sa
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
```
</details>
<details><summary><b>Wojska Polskiego - Boya-Żeleńskiego (891f0b3761bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Wojska Polskiego - Boya-Żeleńskiego
  stop_id               : 10043
  h3_index              : 891f0b3761bffff
  hub_id                : 161

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.8462
  local_score_raw       : 1.6536

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 5573454.0263

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 36.4286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 4268.1240

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 3445.8233

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
<details><summary><b>Zbożowy Rynek (891f0b3294bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Zbożowy Rynek
  stop_id               : 10063
  h3_index              : 891f0b3294bffff
  hub_id                : 73

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.6923
  local_score_raw       : 1.6407

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 17310068.0715

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 35.2857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 4268.1240

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 816.9053

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
<details><summary><b>Szarych Szeregów (891f0b3762bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Szarych Szeregów
  stop_id               : 11011
  h3_index              : 891f0b3762bffff
  hub_id                : 538

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.5385
  local_score_raw       : 1.6390

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 5429605.9730

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 36.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 4268.1240

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 3170.1582

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 18x micro_playground
  > 9x micro_parcel_locker
  > 6x supermarket
  > 6x education_high_school
  > 5x bank
  > 5x health_clinic
  > 5x pharmacy
  > 5x park_recreation
  > 5x commercial_zone
  > 4x education_preschool
  > 3x micro_atm
  > 3x convenience_store
  > 2x car_services
  > 2x gastronomy
  > 2x government_central
  > 1x shopping_mall
  > 1x post_office
  > 1x personal_services
  > 1x culture_theatre
  > 1x sports_centre
  > 1x marketplace

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - car_services           : Circle K
    - bank                   : Millennium Bank
    - micro_atm              : Bankomat Millennium
    - supermarket            : Kaufland
    - supermarket            : Biedronka
    - education_high_school  : Przedszkole nr 9
    - education_high_school  : Szkoła Podstawowa nr 57 im. Towarzystwa Miłośników Miasta Bydgoszczy
    - convenience_store      : Żabka
    - shopping_mall          : Hermes
    - convenience_store      : Żabka
    - bank                   : Alior Bank
    - bank                   : Crédit Agricole
```
</details>
<details><summary><b>Wyżyny (891f0b37677ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Wyżyny
  stop_id               : 10045
  h3_index              : 891f0b37677ffff
  hub_id                : 107

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.3846
  local_score_raw       : 1.5708

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 13484658.7908

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 23.5714

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 4268.1240

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 3620.9946

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 18x micro_playground
  > 8x micro_parcel_locker
  > 7x park_recreation
  > 6x micro_atm
  > 5x car_services
  > 5x pharmacy
  > 5x education_preschool
  > 4x supermarket
  > 4x health_clinic
  > 3x gastronomy
  > 3x convenience_store
  > 3x personal_services
  > 3x sports_centre
  > 3x education_high_school
  > 2x commercial_zone
  > 1x bank
  > 1x culture_theatre
  > 1x place_of_worship
  > 1x university_campus
  > 1x government_central
  > 1x marketplace
  > 1x social_support_mops

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
<details><summary><b>Zamczysko - Pętla (891f0bad943ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Zamczysko - Pętla
  stop_id               : 8161
  h3_index              : 891f0bad943ffff
  hub_id                : 63

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.7692
  local_score_raw       : -1.8135

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 4268.1240

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 140.0000

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

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.6154
  local_score_raw       : -1.8769

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.2857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 4268.1240

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 17.0000

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

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.4615
  local_score_raw       : -1.8832

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 4268.1240

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 60.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Pod Skarpą - Przemysła II (891f0bad90fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Pod Skarpą - Przemysła II
  stop_id               : 8159
  h3_index              : 891f0bad90fffff
  hub_id                : 316

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.3077
  local_score_raw       : -1.8833

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 4268.1240

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 59.9570

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

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.1538
  local_score_raw       : -2.5389

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 2171550.7054

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.5714

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 170.2997

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 15.3376

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
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: 0.000, Std: 0.676)
     Rozkład Kartek (unikalne Huby): A: 44, A+: 23, B: 66, C: 89, D: 110, F: 110
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
<details><summary><b>II Aleja Najświętszej Maryi Panny (891e23a6b8bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : II Aleja Najświętszej Maryi Panny
  stop_id               : 1172
  h3_index              : 891e23a6b8bffff
  hub_id                : 434

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.4462

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 9439065.0135

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 74.5714

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5784.8383

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 808.7778

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 63x gastronomy
  > 54x specialized_retail
  > 22x micro_atm
  > 19x convenience_store
  > 13x personal_services
  > 12x park_recreation
  > 10x bank
  > 9x pharmacy
  > 8x micro_playground
  > 7x health_clinic
  > 7x micro_parcel_locker
  > 6x culture_theatre
  > 5x marketplace
  > 4x social_support_mops
  > 4x government_central
  > 4x shopping_mall
  > 3x education_high_school
  > 2x business_office
  > 2x supermarket
  > 2x commercial_zone
  > 1x education_preschool
  > 1x place_of_worship
  > 1x university_campus

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy             : KFC
    - culture_theatre        : Główna Biblioteka Publiczna im. dr Władysława Biegańskiego
    - gastronomy             : Strefa Pizzy
    - culture_theatre        : Cinema City Wolność w Częstochowie
    - micro_atm              : ING
    - micro_atm              : Millenium
    - bank                   : Millennium Bank
    - micro_atm              : Euronet
    - gastronomy             : Lunchownia
    - business_office        : amiplay
    - personal_services      : Obagi Medical
    - education_high_school  : Zespół Szkół Muzycznych
```
</details>
<details><summary><b>PLAC Daszyńskiego (891e23a6bbbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : PLAC Daszyńskiego
  stop_id               : 483
  h3_index              : 891e23a6bbbffff
  hub_id                : 219

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.7738
  local_score_raw       : 1.2779

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 3797364.1840

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 55.4286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5651.6800

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1068.1573

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 23x specialized_retail
  > 16x gastronomy
  > 12x micro_atm
  > 9x convenience_store
  > 6x pharmacy
  > 5x bank
  > 5x shopping_mall
  > 5x personal_services
  > 4x micro_playground
  > 3x place_of_worship
  > 2x business_office
  > 2x health_clinic
  > 2x micro_parcel_locker
  > 2x culture_theatre
  > 2x education_high_school
  > 1x hospital_clinical
  > 1x marketplace
  > 1x industrial_zone
  > 1x commercial_zone
  > 1x supermarket
  > 1x government_central
  > 1x park_recreation
  > 1x education_preschool

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy             : Strefa Pizzy
    - micro_atm              : Millennium
    - bank                   : Millennium Bank
    - business_office        : amiplay
    - health_clinic          : N.Z.O.Z. \
    - convenience_store      : Żabka
    - shopping_mall          : TK Maxx
    - convenience_store      : Żabka
    - pharmacy               : Nowa Farmacja
    - gastronomy             : Collorata pizza
    - convenience_store      : Społem
    - specialized_retail     : Bellissima
```
</details>
<details><summary><b>Dworzec PKS (891e23a6b0bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Dworzec PKS
  stop_id               : 53
  h3_index              : 891e23a6b0bffff
  hub_id                : 330

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.5475
  local_score_raw       : 1.2294

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 9525489.6588

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 49.3571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5512.4541

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 644.1843

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 52x park_recreation
  > 21x specialized_retail
  > 13x gastronomy
  > 8x convenience_store
  > 8x micro_playground
  > 6x personal_services
  > 5x pharmacy
  > 5x government_central
  > 5x micro_atm
  > 5x commercial_zone
  > 4x health_clinic
  > 4x micro_parcel_locker
  > 4x supermarket
  > 4x industrial_zone
  > 3x bank
  > 3x place_of_worship
  > 2x post_office
  > 2x shopping_mall
  > 1x social_support_mops
  > 1x national_rail_hub
  > 1x police_station
  > 1x culture_theatre
  > 1x sports_centre
  > 1x marketplace
  > 1x education_high_school

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - bank                   : Millennium Przedsiębiorstwa
    - social_support_mops    : Caritas Archidiecezji Częstochowskiej
    - pharmacy               : Apteka św. Łukasza Całodobowa
    - government_central     : Agencja Restrukturyzacji i Modernizacji Rolnictwa
    - national_rail_hub      : Częstochowa
    - post_office            : Poczta Polska
    - convenience_store      : Żabka
    - pharmacy               : Główna
    - gastronomy             : Piwiarnia Częstochowa
    - personal_services      : Makstyle
    - micro_atm              : ING Bank Śląski (Planet cash)
    - health_clinic          : Stomed
```
</details>
<details><summary><b>Korczaka (891e23a6b57ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Korczaka
  stop_id               : 26
  h3_index              : 891e23a6b57ffff
  hub_id                : 384

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.3213
  local_score_raw       : 1.1992

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 9815617.0290

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 40.7857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5116.2791

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1407.1704

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 89x park_recreation
  > 25x micro_playground
  > 12x convenience_store
  > 9x gastronomy
  > 7x health_clinic
  > 7x micro_parcel_locker
  > 6x government_central
  > 5x pharmacy
  > 5x personal_services
  > 5x place_of_worship
  > 5x commercial_zone
  > 4x bank
  > 4x micro_atm
  > 4x specialized_retail
  > 2x post_office
  > 2x supermarket
  > 2x culture_theatre
  > 2x education_high_school
  > 1x police_station
  > 1x business_office
  > 1x sports_centre
  > 1x shopping_mall
  > 1x industrial_zone
  > 1x education_preschool

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - bank                   : Millennium Przedsiębiorstwa
    - gastronomy             : Czenstochovia
    - convenience_store      : Żabka
    - pharmacy               : Apteka św. Łukasza Całodobowa
    - government_central     : Agencja Restrukturyzacji i Modernizacji Rolnictwa
    - convenience_store      : Żabka
    - convenience_store      : Paśnik
    - pharmacy               : Nowa Farmacja
    - police_station         : Komisariat Policji IV w Częstochowie
    - gastronomy             : Piwiarnia Częstochowa
    - micro_atm              : Planet Cash
    - micro_atm              : Euronet
```
</details>
<details><summary><b>HALA Polonia (891e23a68afffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : HALA Polonia
  stop_id               : 183
  h3_index              : 891e23a68afffff
  hub_id                : 426

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.0950
  local_score_raw       : 1.1530

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 6799059.7955

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 35.7143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5405.7565

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1540.1801

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 14x gastronomy
  > 14x convenience_store
  > 13x micro_playground
  > 7x park_recreation
  > 6x health_clinic
  > 5x pharmacy
  > 5x personal_services
  > 5x sports_centre
  > 4x post_office
  > 4x education_preschool
  > 3x micro_atm
  > 3x micro_parcel_locker
  > 3x supermarket
  > 2x bank
  > 2x specialized_retail
  > 2x university_campus
  > 2x education_high_school
  > 1x culture_theatre
  > 1x government_central
  > 1x place_of_worship
  > 1x hospital_clinical
  > 1x police_station

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - post_office            : Poczta Polska UP Częstochowa 18
    - gastronomy             : Mega Pizza
    - bank                   : ING Bank Śląski
    - health_clinic          : Przychodnia COMBIMED
    - health_clinic          : Przychodnia
    - pharmacy               : Corax
    - gastronomy             : Świat pierożka
    - convenience_store      : Lewiatan
    - personal_services      : Rossmann
    - post_office            : Filia Urzędu Pocztowego 1
    - convenience_store      : Żabka
    - health_clinic          : Dermatochirurgia
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>OS. POD Wilczą Górą (891e2ed156fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : OS. POD Wilczą Górą
  stop_id               : 750
  h3_index              : 891e2ed156fffff
  hub_id                : 83

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 1.1312
  local_score_raw       : -1.6828

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0714

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5654.6324

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 104.2802

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Kusięta "krótkie" (891e2ed0237ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Kusięta "krótkie"
  stop_id               : 709
  h3_index              : 891e2ed0237ffff
  hub_id                : 244

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.9050
  local_score_raw       : -1.7023

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5654.6324

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 114.6904

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Kusięta LAS (891e2ed150fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Kusięta LAS
  stop_id               : 699
  h3_index              : 891e2ed150fffff
  hub_id                : 392

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.6787
  local_score_raw       : -1.7110

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5654.6324

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 105.3562

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

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.4525
  local_score_raw       : -1.7418

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 1.4286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5654.6324

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1.0319

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Kusięta Przejazd Kolejowy (891e2ed02afffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Kusięta Przejazd Kolejowy
  stop_id               : 707
  h3_index              : 891e2ed02afffff
  hub_id                : 121

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.2262
  local_score_raw       : -1.7436

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5654.6324

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 76.4675

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>

---

## ELBLAG
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: -0.000, Std: 0.708)
     Rozkład Kartek (unikalne Huby): A: 18, A+: 10, B: 28, C: 37, D: 46, F: 46
[👥 BAZA LUDNOŚCI GUS] ✅ DEMOGRAFIA OK (Odchylenie zaledwie 8.0%)
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
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
  stop_id               : 423
  h3_index              : 891f54d0abbffff
  hub_id                : 76

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.2386

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 7764412.8363

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 36.6429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6883.8146

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1362.9688

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 41x gastronomy
  > 15x bank
  > 15x park_recreation
  > 11x specialized_retail
  > 8x convenience_store
  > 6x micro_atm
  > 5x government_central
  > 4x pharmacy
  > 4x business_office
  > 4x personal_services
  > 4x micro_playground
  > 4x micro_parcel_locker
  > 3x culture_theatre
  > 3x health_clinic
  > 3x place_of_worship
  > 3x education_high_school
  > 2x supermarket
  > 2x social_support_mops
  > 2x car_services
  > 1x post_office
  > 1x police_station
  > 1x education_preschool
  > 1x marketplace
  > 1x university_campus
  > 1x sports_centre

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - bank                   : Millennium Bank
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
```
</details>
<details><summary><b>Ogólna - Pętla (891f54d0d03ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Ogólna - Pętla
  stop_id               : 167
  h3_index              : 891f54d0d03ffff
  hub_id                : 16

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.4595
  local_score_raw       : 1.1460

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 4318702.4358

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 34.4286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6874.9090

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1145.6423

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 54x park_recreation
  > 13x micro_playground
  > 6x convenience_store
  > 6x supermarket
  > 5x personal_services
  > 3x micro_parcel_locker
  > 2x health_clinic
  > 2x specialized_retail
  > 1x post_office
  > 1x micro_atm
  > 1x pharmacy
  > 1x place_of_worship
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
<details><summary><b>Robotnicza (891f54d084bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Robotnicza
  stop_id               : 90
  h3_index              : 891f54d084bffff
  hub_id                : 8

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 98.9189
  local_score_raw       : 1.1195

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 11121708.3927

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 27.7857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7010.0876

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 765.5847

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
<details><summary><b>Sąd - Pętla (891f54d0aa7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Sąd - Pętla
  stop_id               : 1004
  h3_index              : 891f54d0aa7ffff
  hub_id                : 1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 98.3784
  local_score_raw       : 1.0763

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 5985783.5780

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 33.0714

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6147.7352

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1252.0051

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
<details><summary><b>Ogólna - Sklep (891f54d0d53ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Ogólna - Sklep
  stop_id               : 123
  h3_index              : 891f54d0d53ffff
  hub_id                : 99

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 97.8378
  local_score_raw       : 1.0528

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 2859385.5883

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 29.4286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6903.3531

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1237.3046

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 93x park_recreation
  > 18x micro_playground
  > 10x personal_services
  > 9x specialized_retail
  > 6x health_clinic
  > 4x micro_parcel_locker
  > 4x convenience_store
  > 4x gastronomy
  > 4x car_services
  > 3x post_office
  > 3x supermarket
  > 2x pharmacy
  > 2x education_preschool
  > 1x culture_theatre
  > 1x education_high_school

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - specialized_retail     : Gatta
    - specialized_retail     : Reserved
    - specialized_retail     : New Yorker
    - personal_services      : Rossmann
    - specialized_retail     : Media Markt
    - post_office            : Poczta Polska
    - micro_parcel_locker    : Paczkomat InPost
    - personal_services      : LeCher
    - specialized_retail     : Łapciuch
    - personal_services      : Blue
    - pharmacy               : Dyżurna
    - supermarket            : Top Market
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

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 2.7027
  local_score_raw       : -1.8545

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.9286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6527.0936

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 13.4114

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>ROD "Słoneczne Wzgórze" (891f54d72d3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : ROD "Słoneczne Wzgórze"
  stop_id               : 313
  h3_index              : 891f54d72d3ffff
  hub_id                : 70

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 2.1622
  local_score_raw       : -1.8976

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.9286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6527.0936

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 7.4564

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>ROD "Skowronek II" (891f54d72cbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : ROD "Skowronek II"
  stop_id               : 315
  h3_index              : 891f54d72cbffff
  hub_id                : 33

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 1.6216
  local_score_raw       : -1.9063

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.8571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6527.0936

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 8.3241

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>ROD "Skowronek I" (891f54d72dbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : ROD "Skowronek I"
  stop_id               : 314
  h3_index              : 891f54d72dbffff
  hub_id                : 39

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 1.0811
  local_score_raw       : -1.9717

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.8571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6527.0936

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 3.1547

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

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.5405
  local_score_raw       : -2.0640

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 1.6429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 3857.9519

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 31.5588

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>

---

## ELK
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: -0.000, Std: 0.773)
     Rozkład Kartek (unikalne Huby): A: 21, A+: 11, B: 31, C: 41, D: 52, F: 51
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

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.5599

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 10077124.4229

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 11.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5920.3143

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 2732.0152

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
<details><summary><b>Wojska Polskiego — Park (891f5538c6fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Wojska Polskiego — Park
  stop_id               : 9
  h3_index              : 891f5538c6fffff
  hub_id                : 22

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.5169
  local_score_raw       : 1.5519

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 8788962.9138

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 13.8571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5435.3355

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1335.7744

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
<details><summary><b>Kilińskiego — Szkoła nr 7 (891f553880bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Kilińskiego — Szkoła nr 7
  stop_id               : 11
  h3_index              : 891f553880bffff
  hub_id                : 189

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.0338
  local_score_raw       : 1.5182

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 3046632.4767

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 13.3571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5644.7679

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1646.9917

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

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 98.5507
  local_score_raw       : 1.4725

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 4067720.3757

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 11.2857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6141.1825

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1093.3895

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

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 98.0676
  local_score_raw       : 1.4603

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 6045509.6111

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 12.2857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5500.0000

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 976.9753

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

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 2.4155
  local_score_raw       : -1.1057

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 1.1429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 1690.1362

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 64.7597

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

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 1.9324
  local_score_raw       : -1.1448

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.2857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 2464.4529

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 62.4707

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

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 1.4493
  local_score_raw       : -1.1812

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.7143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 1688.6910

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 99.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Buczki (891f5523043ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Buczki
  stop_id               : 253
  h3_index              : 891f5523043ffff
  hub_id                : 135

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.9662
  local_score_raw       : -1.2231

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 4784.2342

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 0.0000

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

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.4831
  local_score_raw       : -1.6290

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 1205.0124

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 102.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>

---

## GIZYCKO
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: 0.000, Std: 0.732)
     Rozkład Kartek (unikalne Huby): A: 10, A+: 5, B: 14, C: 19, D: 23, F: 23
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
<details><summary><b>Warszawska — Park (891f5511c07ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Warszawska — Park
  stop_id               : 76
  h3_index              : 891f5511c07ffff
  hub_id                : 0

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.5010

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 5414780.9490

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 3.7857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 4787.2340

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 818.4387

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 19x gastronomy
  > 7x micro_atm
  > 7x pharmacy
  > 7x bank
  > 7x convenience_store
  > 6x sports_centre
  > 5x government_central
  > 5x micro_parcel_locker
  > 4x specialized_retail
  > 4x shopping_mall
  > 4x micro_playground
  > 4x place_of_worship
  > 3x health_clinic
  > 3x supermarket
  > 3x education_high_school
  > 3x park_recreation
  > 1x education_preschool
  > 1x business_office
  > 1x social_support_mops
  > 1x personal_services
  > 1x culture_theatre
  > 1x marketplace

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy             : Tawerna Marina
    - micro_atm              : Euronet
    - gastronomy             : Pizza Oregano
    - pharmacy               : Parkowa
    - bank                   : BNP Paribas Polska
    - gastronomy             : Pizzeria Margarita
    - bank                   : Bank Pekao
    - bank                   : PKO BP
    - convenience_store      : U Gośki
    - gastronomy             : Prosto z Młynka
    - gastronomy             : Kuchnie Świata
    - education_preschool    : Krasnal
```
</details>
<details><summary><b>Warszawska — Wieża Ciśnień (891f5511c33ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Warszawska — Wieża Ciśnień
  stop_id               : 77
  h3_index              : 891f5511c33ffff
  hub_id                : 8

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 98.9362
  local_score_raw       : 1.4794

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 10582858.5509

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 3.7857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 4498.6290

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 670.1423

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 8x gastronomy
  > 7x micro_playground
  > 6x pharmacy
  > 6x convenience_store
  > 6x place_of_worship
  > 5x park_recreation
  > 4x bank
  > 4x micro_atm
  > 4x specialized_retail
  > 4x micro_parcel_locker
  > 3x health_clinic
  > 3x supermarket
  > 3x shopping_mall
  > 3x government_central
  > 1x education_preschool
  > 1x business_office
  > 1x social_support_mops
  > 1x personal_services
  > 1x education_high_school
  > 1x hospital_clinical
  > 1x marketplace
  > 1x commercial_zone
  > 1x sports_centre

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - pharmacy               : Parkowa
    - gastronomy             : Pizzeria Margarita
    - bank                   : Bank Pekao
    - convenience_store      : U Gośki
    - education_preschool    : Krasnal
    - pharmacy               : Dr. Max
    - pharmacy               : Cef@Rm 36
    - micro_atm              : Euronet
    - gastronomy             : Cukiernia u Adama
    - micro_atm              : Bank Pekao
    - gastronomy             : Hotel Masovia
    - business_office        : ProGIS Sp. z o.o. Usługi geodezyjne i informatyczne
```
</details>
<details><summary><b>Al. 1-go Maja (891f5511c17ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Al. 1-go Maja
  stop_id               : 10
  h3_index              : 891f5511c17ffff
  hub_id                : 49

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 97.8723
  local_score_raw       : 1.4074

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 5594659.0421

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 3.0714

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 4612.5742

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1501.6143

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
<details><summary><b>Plac Grunwaldzki — Bank (891f5511c03ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Plac Grunwaldzki — Bank
  stop_id               : 60
  h3_index              : 891f5511c03ffff
  hub_id                : 45

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 96.8085
  local_score_raw       : 1.2506

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 7771326.3378

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 1.8571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5174.1610

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 2451.0752

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

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 95.7447
  local_score_raw       : 1.2265

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 7042412.6872

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 2.1429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 4864.4678

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1343.2128

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

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Guty (891f551141bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Guty
  stop_id               : 148
  h3_index              : 891f551141bffff
  hub_id                : 55

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 5.3191
  local_score_raw       : -0.9870

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0714

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 4124.8453

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 31.0000

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

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 4.2553
  local_score_raw       : -1.0861

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.1429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 4124.8453

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 6.0000

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

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 3.1915
  local_score_raw       : -1.1137

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.1429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 2497.6807

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 108.3840

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

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 2.1277
  local_score_raw       : -1.1315

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.1429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 2497.6807

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 90.6160

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

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 1.0638
  local_score_raw       : -1.1513

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 4124.8453

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 10.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>

---

## GORZOW
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: 0.000, Std: 0.699)
     Rozkład Kartek (unikalne Huby): A: 22, A+: 11, B: 32, C: 44, D: 54, F: 53
[👥 BAZA LUDNOŚCI GUS] ✅ DEMOGRAFIA OK (Odchylenie zaledwie 7.1%)
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
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
<details><summary><b>Stilon (891f0a409dbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Stilon
  stop_id               : 119
  h3_index              : 891f0a409dbffff
  hub_id                : 20

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.0630

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 21205255.5649

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 46.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7602.4155

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1221.6220

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 7x micro_playground
  > 6x commercial_zone
  > 5x gastronomy
  > 5x specialized_retail
  > 5x micro_parcel_locker
  > 4x micro_atm
  > 4x health_clinic
  > 3x supermarket
  > 2x education_high_school
  > 2x convenience_store
  > 2x pharmacy
  > 2x sports_centre
  > 2x car_services
  > 2x industrial_zone
  > 1x government_central
  > 1x personal_services
  > 1x education_preschool
  > 1x university_campus
  > 1x park_recreation

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : Euronet
    - education_high_school  : Cosinus
    - supermarket            : Biedronka
    - micro_atm              : Bankomat / ATM
    - convenience_store      : Żabka
    - gastronomy             : Sushi Madara
    - government_central     : PGW \
    - specialized_retail     : KiK
    - specialized_retail     : Pepco
    - specialized_retail     : Sinsay
    - personal_services      : Rossmann
    - supermarket            : Biedronka
```
</details>
<details><summary><b>Rondo Szczecińskie (891f0a40e0fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Rondo Szczecińskie
  stop_id               : 115
  h3_index              : 891f0a40e0fffff
  hub_id                : 41

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.5370
  local_score_raw       : 1.0620

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 20447686.0827

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 51.8571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 8008.4417

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 655.2534

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 11x micro_parcel_locker
  > 9x micro_playground
  > 6x government_central
  > 5x specialized_retail
  > 4x gastronomy
  > 4x industrial_zone
  > 3x supermarket
  > 3x commercial_zone
  > 3x car_services
  > 2x police_station
  > 2x micro_atm
  > 2x personal_services
  > 2x shopping_mall
  > 1x post_office
  > 1x bank
  > 1x convenience_store
  > 1x pharmacy
  > 1x sports_centre
  > 1x education_high_school
  > 1x university_campus

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - supermarket            : Biedronka
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
    - micro_parcel_locker    : Paczkomat InPost
```
</details>
<details><summary><b>SP 13 (891f0a40d4fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : SP 13
  stop_id               : 11
  h3_index              : 891f0a40d4fffff
  hub_id                : 193

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.0741
  local_score_raw       : 1.0410

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 3249497.4604

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 67.8571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7454.0515

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 2997.0123

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 19x micro_playground
  > 5x micro_parcel_locker
  > 4x health_clinic
  > 3x supermarket
  > 3x education_preschool
  > 3x convenience_store
  > 3x pharmacy
  > 3x education_high_school
  > 2x post_office
  > 2x micro_atm
  > 2x gastronomy
  > 1x personal_services
  > 1x park_recreation
  > 1x place_of_worship
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - supermarket            : Stokrotka
    - micro_atm              : Bankomat Cash4You
    - supermarket            : Biedronka
    - micro_atm              : Bankomat / ATM
    - post_office            : Poczta
    - health_clinic          : Przychodnia Stomatologiczna PERIODENT
    - education_preschool    : Przedszkole P29
    - gastronomy             : Tarantino Grill Bar & Cafe
    - gastronomy             : Prato Pizza
    - convenience_store      : Żabka
    - convenience_store      : Lewiatan
    - micro_parcel_locker    : Paczkomat InPost
```
</details>
<details><summary><b>Czereśniowa (891f0a408a3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Czereśniowa
  stop_id               : 71
  h3_index              : 891f0a408a3ffff
  hub_id                : 139

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 98.6111
  local_score_raw       : 1.0392

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 4214864.0325

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 67.7143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7377.6646

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 2348.2091

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 12x micro_playground
  > 3x health_clinic
  > 3x gastronomy
  > 3x micro_parcel_locker
  > 3x education_high_school
  > 2x supermarket
  > 2x post_office
  > 2x micro_atm
  > 2x car_services
  > 2x pharmacy
  > 2x sports_centre
  > 1x education_preschool
  > 1x park_recreation
  > 1x place_of_worship
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - supermarket            : Stokrotka
    - micro_atm              : Bankomat Cash4You
    - supermarket            : Biedronka
    - micro_atm              : Bankomat / ATM
    - post_office            : Poczta
    - health_clinic          : Przychodnia Stomatologiczna PERIODENT
    - gastronomy             : Tarantino Grill Bar & Cafe
    - car_services           : CUL
    - gastronomy             : Prato Pizza
    - micro_parcel_locker    : Paczkomat InPost
    - pharmacy               : Apteka Hipokrates
    - pharmacy               : Ziko Apteka
```
</details>
<details><summary><b>Rondo Górczyńskie (891f0a40d47ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Rondo Górczyńskie
  stop_id               : 69
  h3_index              : 891f0a40d47ffff
  hub_id                : 45

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 98.1481
  local_score_raw       : 0.9427

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 1580126.0029

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 67.7143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7796.9476

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 2047.2958

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 24x micro_playground
  > 9x park_recreation
  > 7x micro_parcel_locker
  > 6x specialized_retail
  > 6x education_preschool
  > 3x supermarket
  > 3x convenience_store
  > 3x pharmacy
  > 3x education_high_school
  > 2x gastronomy
  > 2x personal_services
  > 1x bank
  > 1x shopping_mall
  > 1x health_clinic
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy             : Pizzeria OK
    - gastronomy             : Turecki Kebap
    - bank                   : PKO BP
    - supermarket            : Chata Polska
    - specialized_retail     : Top Secret Outlet
    - personal_services      : Rossmann
    - specialized_retail     : Monnari
    - specialized_retail     : Quiosque
    - specialized_retail     : Scotfree
    - specialized_retail     : Abra Meble
    - specialized_retail     : Vox Meble
    - education_preschool    : Przedszkole P29
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

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 2.3148
  local_score_raw       : -2.4135

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 1.4286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6015.3994

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 23.2207

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Osiedlowa I (gr. strefy) (891f0a4064bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Osiedlowa I (gr. strefy)
  stop_id               : 1220
  h3_index              : 891f0a4064bffff
  hub_id                : 175

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 1.8519
  local_score_raw       : -2.4660

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 1.1429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6015.3994

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 20.2604

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

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 1.3889
  local_score_raw       : -2.4707

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 2.7143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6015.3994

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 3.0000

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

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.9259
  local_score_raw       : -2.4895

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 1.1429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6015.3994

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 16.0000

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

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.4630
  local_score_raw       : -2.5303

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 13653.5003

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 1.7143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 696.0874

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 39.3098

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
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: 0.000, Std: 0.631)
     Rozkład Kartek (unikalne Huby): A: 480, A+: 241, B: 721, C: 962, D: 1201, F: 1201
[👥 BAZA LUDNOŚCI GUS] ❌ OSTRZEŻENIE DEMOGRAFICZNE: Odchylenie 49.3%. GUS: 3,432,986 vs Baza: 2,300,000
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
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
<details><summary><b>Katowice (891e232dcd7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Katowice
  stop_id               : 73312
  h3_index              : 891e232dcd7ffff
  hub_id                : 71

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.7538

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 32958457.2260

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 212.4286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7018.5289

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 578.2183

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 143x gastronomy
  > 122x specialized_retail
  > 61x personal_services
  > 33x convenience_store
  > 22x bank
  > 21x micro_atm
  > 15x health_clinic
  > 14x commercial_zone
  > 13x pharmacy
  > 11x government_central
  > 10x culture_theatre
  > 9x business_office
  > 9x park_recreation
  > 7x supermarket
  > 7x micro_parcel_locker
  > 7x place_of_worship
  > 6x university_campus
  > 6x micro_playground
  > 5x education_high_school
  > 5x shopping_mall
  > 4x car_services
  > 4x post_office
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
<details><summary><b>Katowice AWF (891e232d13bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Katowice AWF
  stop_id               : 11085
  h3_index              : 891e232d13bffff
  hub_id                : 2908

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.9792
  local_score_raw       : 1.7124

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 44353920.1409

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 89.7143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 8330.2497

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 2746.7398

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
    - gastronomy             : Strzelec
    - government_central     : Wojewódzka Stacja Sanitarno-Epidemiologiczna w Katowicach
    - health_clinic          : PsychoMEDIC
    - culture_theatre        : Filia nr 4 Miejska Biblioteka Publiczna w Katowicach
    - pharmacy               : Apteka Główna
    - pharmacy               : Dbam o Zdrowie
    - micro_parcel_locker    : Paczkomat InPost
    - micro_atm              : Euronet
    - convenience_store      : Żabka
    - convenience_store      : Żabka
    - convenience_store      : Żabka
    - social_support_mops    : Społeczne Ministerstwo ds. Samotności
```
</details>
<details><summary><b>Sosnowiec Główny (891e232c8a3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Sosnowiec Główny
  stop_id               : 74658
  h3_index              : 891e232c8a3ffff
  hub_id                : 228

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.9584
  local_score_raw       : 1.5615

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 38801090.6281

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 115.7143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5139.5141

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1498.7265

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 28x gastronomy
  > 8x bank
  > 8x micro_parcel_locker
  > 8x specialized_retail
  > 8x personal_services
  > 7x convenience_store
  > 6x pharmacy
  > 6x health_clinic
  > 4x micro_atm
  > 4x park_recreation
  > 4x micro_playground
  > 3x shopping_mall
  > 3x place_of_worship
  > 3x government_central
  > 2x education_preschool
  > 2x supermarket
  > 2x education_high_school
  > 1x national_rail_hub
  > 1x car_services
  > 1x police_station
  > 1x social_support_mops
  > 1x marketplace
  > 1x business_office
  > 1x post_office
  > 1x university_campus

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - bank                   : Millennium Bank
    - micro_atm              : Euronet
    - micro_atm              : Euronet
    - gastronomy             : Zam Zam Spicy Kebab
    - bank                   : VeloBank
    - micro_parcel_locker    : Paczkomat InPost
    - national_rail_hub      : Sosnowiec Główny
    - pharmacy               : Apteka Blisko Centrum
    - pharmacy               : Apteka im. Ignacego Łukasiewicza
    - gastronomy             : Oh My Ramen
    - bank                   : boś bank
    - specialized_retail     : koszulker.pl
```
</details>
<details><summary><b>Tychy (891e0590e6fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Tychy
  stop_id               : 73700_
  h3_index              : 891e0590e6fffff
  hub_id                : 92

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.9376
  local_score_raw       : 1.5254

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 18594563.3828

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 156.7143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5303.0161

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 657.0811

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 6x convenience_store
  > 6x micro_playground
  > 4x business_office
  > 4x industrial_zone
  > 3x gastronomy
  > 2x culture_theatre
  > 2x micro_parcel_locker
  > 2x sports_centre
  > 2x education_high_school
  > 1x post_office
  > 1x national_rail_hub
  > 1x health_clinic
  > 1x personal_services
  > 1x micro_atm
  > 1x place_of_worship

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - culture_theatre        : MBP Filia nr 1
    - culture_theatre        : MBP Filia nr 2 dla Dzieci i Młodzieży
    - gastronomy             : Con Amore
    - convenience_store      : Stokrotka
    - post_office            : Poczta Polska
    - national_rail_hub      : Tychy
    - convenience_store      : Żabka
    - convenience_store      : abc
    - health_clinic          : Centrum Diagnostyczne ASPER
    - gastronomy             : Akademia Cafe
    - personal_services      : Irena Nowak
    - business_office        : Glas-Serwis
```
</details>
<details><summary><b>Katowice Sokolska (891e232c267ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Katowice Sokolska
  stop_id               : 2708
  h3_index              : 891e232c267ffff
  hub_id                : 2216

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.9168
  local_score_raw       : 1.4936

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 11387331.3628

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 93.1429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 9888.6215

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 492.5660

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

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Bibiela Droga do Żyglina nż (891e2335163ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Bibiela Droga do Żyglina nż
  stop_id               : 5985
  h3_index              : 891e2335163ffff
  hub_id                : 2837

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.1040
  local_score_raw       : -2.0917

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 1.3571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 1358.3265

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 16.0309

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Morgi Kościół (891e05962bbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Morgi Kościół
  stop_id               : 1764
  h3_index              : 891e05962bbffff
  hub_id                : 1712

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.0832
  local_score_raw       : -2.1028

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 112614.9230

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 7.8571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5.8774

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 477.3647

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x place_of_worship

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - place_of_worship       : Kościół pw. Świętego Jacka w Mysłowicach
```
</details>
<details><summary><b>Zabrzeg Czarnolesie (891e0588073ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Zabrzeg Czarnolesie
  stop_id               : 178298
  h3_index              : 891e0588073ffff
  hub_id                : 403

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.0624
  local_score_raw       : -2.1599

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6066.9456

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Płużniczka Skrzyżowanie z DK-94 (891e230ecb7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Płużniczka Skrzyżowanie z DK-94
  stop_id               : 5912
  h3_index              : 891e230ecb7ffff
  hub_id                : 729

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.0416
  local_score_raw       : -2.6027

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 1.5714

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 195.1872

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 47.9947

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

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.0208
  local_score_raw       : -2.6330

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 1.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 157.1515

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 166.4873

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>

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

## KUTNO
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: 0.000, Std: 0.659)
     Rozkład Kartek (unikalne Huby): A: 12, A+: 6, B: 17, C: 23, D: 29, F: 28
[👥 BAZA LUDNOŚCI GUS] Brak profilu w CITY_BASELINES
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
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
  stop_id               : 14
  h3_index              : 891f52c8a0bffff
  hub_id                : 102

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.3066

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 5250151.5101

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 18.5000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5495.6897

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 909.2114

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

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.1304
  local_score_raw       : 1.2910

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 5316896.4449

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 16.2857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5744.6809

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1346.1189

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
  stop_id               : 16
  h3_index              : 891f52c8a77ffff
  hub_id                : 30

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 98.2609
  local_score_raw       : 1.2407

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 7863463.4949

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 13.0714

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6016.5975

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1507.4000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 7x supermarket
  > 6x pharmacy
  > 5x car_services
  > 5x micro_parcel_locker
  > 5x education_preschool
  > 4x convenience_store
  > 4x specialized_retail
  > 4x industrial_zone
  > 3x micro_atm
  > 3x micro_playground
  > 2x bank
  > 2x place_of_worship
  > 2x education_high_school
  > 2x government_central
  > 2x health_clinic
  > 2x park_recreation
  > 1x personal_services
  > 1x commercial_zone
  > 1x sports_centre
  > 1x gastronomy
  > 1x shopping_mall

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - supermarket            : Aldi
    - car_services           : Carrefour
    - bank                   : Santander
    - bank                   : Bank Pekao
    - micro_atm              : PKO BP
    - specialized_retail     : NEONET
    - micro_atm              : Pekao
    - place_of_worship       : Kościół Zielonoświątkowy
    - car_services           : Wasbruk
    - education_high_school  : Zakład Doskonalenia Zawodowego w Warszawie Centrum Kształcenia w Kutnie
    - micro_parcel_locker    : Paczkomat InPost
    - micro_parcel_locker    : Paczkomat InPost
```
</details>
<details><summary><b>Chrobrego (891f5252493ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Chrobrego
  stop_id               : 33
  h3_index              : 891f5252493ffff
  hub_id                : 45

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 97.3913
  local_score_raw       : 1.1535

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 3299290.4611

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 13.0714

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6044.9050

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1385.2530

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 5x convenience_store
  > 4x micro_parcel_locker
  > 2x supermarket
  > 2x bank
  > 2x place_of_worship
  > 2x education_high_school
  > 2x government_central
  > 1x micro_atm
  > 1x pharmacy
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
    - convenience_store      : Żabka
    - micro_parcel_locker    : DPD Oddział Miejski Kutno
    - sports_centre          : Hala SP 9 Kutno (KS BNG Kutno)
```
</details>
<details><summary><b>Barlickiego (891f52c8a57ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Barlickiego
  stop_id               : 159
  h3_index              : 891f52c8a57ffff
  hub_id                : 61

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 96.5217
  local_score_raw       : 1.1488

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 2758020.3856

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 14.0714

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5744.6809

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1301.3579

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 15x gastronomy
  > 14x convenience_store
  > 13x bank
  > 13x specialized_retail
  > 9x micro_atm
  > 9x pharmacy
  > 8x personal_services
  > 5x micro_parcel_locker
  > 5x park_recreation
  > 4x education_high_school
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

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 4.3478
  local_score_raw       : -1.4728

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 1.7857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6346.7492

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 31.1410

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

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 3.4783
  local_score_raw       : -1.4741

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 1.7857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6346.7492

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 30.6452

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Kuczków I (891f52c88d3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Kuczków I
  stop_id               : 152
  h3_index              : 891f52c88d3ffff
  hub_id                : 79

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 2.6087
  local_score_raw       : -1.5312

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 1.5714

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6346.7492

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 26.4182

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Lotnicza (891f525202fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Lotnicza
  stop_id               : 279
  h3_index              : 891f525202fffff
  hub_id                : 105

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 1.7391
  local_score_raw       : -1.6791

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.8571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6346.7492

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 41.0000

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

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.8696
  local_score_raw       : -1.9470

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6346.7492

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 110.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>

---

## LEGNICA
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: 0.000, Std: 0.735)
     Rozkład Kartek (unikalne Huby): A: 23, A+: 12, B: 34, C: 45, D: 57, F: 56
[👥 BAZA LUDNOŚCI GUS] ❌ OSTRZEŻENIE DEMOGRAFICZNE: Odchylenie 25.5%. GUS: 112,987 vs Baza: 90,000
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
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
<details><summary><b>Piłsudskiego - Heweliusza (891e2638d63ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Piłsudskiego - Heweliusza
  stop_id               : 1790
  h3_index              : 891e2638d63ffff
  hub_id                : 5

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.3645

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 3763447.4339

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 30.2143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5254.4818

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 2950.6313

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
    - post_office            : Poczta Polska
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
    - business_office        : Vectra TV
```
</details>
<details><summary><b>Iwaszkiewicza - Baczyńskiego (891e262326bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Iwaszkiewicza - Baczyńskiego
  stop_id               : 1730
  h3_index              : 891e262326bffff
  hub_id                : 45

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.5595
  local_score_raw       : 1.3390

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 4916419.5139

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 36.7857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 4940.7115

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1003.5956

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 8x micro_playground
  > 7x personal_services
  > 4x convenience_store
  > 4x health_clinic
  > 3x education_preschool
  > 3x micro_parcel_locker
  > 3x pharmacy
  > 3x gastronomy
  > 2x specialized_retail
  > 1x police_station
  > 1x post_office
  > 1x culture_theatre
  > 1x micro_atm
  > 1x supermarket
  > 1x sports_centre
  > 1x park_recreation
  > 1x hospital_clinical
  > 1x education_high_school

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - police_station         : Staffa 2
    - post_office            : Poczta Polska
    - convenience_store      : Żabka
    - education_preschool    : Przedszkole Niepubliczne Tęczowy Zakątek
    - specialized_retail     : KiK
    - micro_parcel_locker    : Paczkomat InPost
    - pharmacy               : Pod Różą
    - culture_theatre        : Legnicka Biblioteka Publiczna - filia nr 1
    - micro_atm              : Euronet
    - personal_services      : Hair
    - gastronomy             : Capri
    - personal_services      : Pani Peggy
```
</details>
<details><summary><b>Piłsudskiego - Koskowicka (891e263899bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Piłsudskiego - Koskowicka
  stop_id               : 1792
  h3_index              : 891e263899bffff
  hub_id                : 25

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.1189
  local_score_raw       : 1.3061

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 1995302.1866

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 30.1429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5253.9405

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 2660.0230

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 8x micro_playground
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
  > 1x culture_theatre
  > 1x bank
  > 1x business_office
  > 1x park_recreation
  > 1x micro_atm
  > 1x specialized_retail
  > 1x shopping_mall
  > 1x education_high_school
  > 1x industrial_zone

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
<details><summary><b>Skarbka - Pl. Słowiański (891e2638893ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Skarbka - Pl. Słowiański
  stop_id               : 1826
  h3_index              : 891e2638893ffff
  hub_id                : 44

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 98.6784
  local_score_raw       : 1.2865

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 9464967.0513

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 25.5000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 4498.2570

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 2311.1158

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 34x gastronomy
  > 15x government_central
  > 15x convenience_store
  > 13x specialized_retail
  > 12x bank
  > 9x personal_services
  > 9x place_of_worship
  > 8x pharmacy
  > 8x park_recreation
  > 5x education_high_school
  > 5x micro_parcel_locker
  > 5x commercial_zone
  > 4x micro_atm
  > 4x culture_theatre
  > 3x health_clinic
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
<details><summary><b>Iwaszkiewicza - Sikorskiego (891e262327bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Iwaszkiewicza - Sikorskiego
  stop_id               : 1728
  h3_index              : 891e262327bffff
  hub_id                : 9

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 98.2379
  local_score_raw       : 1.1714

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 10866942.5805

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 19.5000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5026.4719

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 968.3825

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 12x personal_services
  > 6x micro_playground
  > 5x specialized_retail
  > 5x health_clinic
  > 4x convenience_store
  > 4x micro_parcel_locker
  > 3x post_office
  > 3x education_preschool
  > 3x pharmacy
  > 3x gastronomy
  > 2x industrial_zone
  > 1x police_station
  > 1x culture_theatre
  > 1x micro_atm
  > 1x business_office
  > 1x supermarket
  > 1x place_of_worship
  > 1x hospital_clinical
  > 1x education_high_school

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - police_station         : Staffa 2
    - post_office            : Poczta Polska
    - convenience_store      : Żabka
    - education_preschool    : Przedszkole Niepubliczne Tęczowy Zakątek
    - specialized_retail     : KiK
    - micro_parcel_locker    : Paczkomat InPost
    - micro_parcel_locker    : Paczkomat InPost
    - pharmacy               : Pod Różą
    - culture_theatre        : Legnicka Biblioteka Publiczna - filia nr 1
    - micro_atm              : Euronet
    - personal_services      : Hair
    - gastronomy             : Capri
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Raczkowa - Nr 7 (891e262a02bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Raczkowa - Nr 7
  stop_id               : 2105
  h3_index              : 891e262a02bffff
  hub_id                : 30

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 2.2026
  local_score_raw       : -1.5402

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.7143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 2317.0732

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 91.0307

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Rzeszotary - Ul. Wiejska Nr 110 (891e263a9c7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Rzeszotary - Ul. Wiejska Nr 110
  stop_id               : 2071
  h3_index              : 891e263a9c7ffff
  hub_id                : 58

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 1.7621
  local_score_raw       : -1.6759

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.5714

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 1500.0000

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 232.5404

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

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 1.3216
  local_score_raw       : -1.7721

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 4759.2628

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1.0000

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

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.8811
  local_score_raw       : -1.8186

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.3571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 1504.2118

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 82.8493

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

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.4405
  local_score_raw       : -1.8430

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.3571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 1504.2118

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 62.1507

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>

---

## LESZNO
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: -0.000, Std: 0.750)
     Rozkład Kartek (unikalne Huby): A: 14, A+: 8, B: 21, C: 28, D: 35, F: 35
[👥 BAZA LUDNOŚCI GUS] Brak profilu w CITY_BASELINES
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
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

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.2902

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 18815895.0704

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 9.7143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5167.6258

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1789.6493

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
<details><summary><b>Jana Pawła II pływalnia (891e2463223ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Jana Pawła II pływalnia
  stop_id               : 110
  h3_index              : 891e2463223ffff
  hub_id                : 121

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.2908
  local_score_raw       : 1.0926

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 12569562.9507

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 6.8571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5522.3881

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1940.9207

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 15x specialized_retail
  > 13x micro_playground
  > 11x personal_services
  > 8x health_clinic
  > 7x pharmacy
  > 7x park_recreation
  > 6x convenience_store
  > 6x education_preschool
  > 5x micro_atm
  > 5x bank
  > 5x supermarket
  > 5x micro_parcel_locker
  > 5x gastronomy
  > 4x commercial_zone
  > 3x post_office
  > 3x education_high_school
  > 2x car_services
  > 2x university_campus
  > 2x sports_centre
  > 2x shopping_mall
  > 1x culture_theatre
  > 1x place_of_worship
  > 1x business_office
  > 1x police_station
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - post_office            : Urząd Pocztowy Leszno 3
    - micro_atm              : Bankomat BZ WBK
    - bank                   : Santander
    - micro_atm              : Bankomat Santander
    - micro_atm              : Santander
    - pharmacy               : Medina
    - supermarket            : Biedronka
    - specialized_retail     : Neonet
    - convenience_store      : Żabka
    - specialized_retail     : RTV Euro AGD
    - specialized_retail     : TXM
    - personal_services      : Rossmann
```
</details>
<details><summary><b>Krasińskiego (891e2463203ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Krasińskiego
  stop_id               : 81
  h3_index              : 891e2463203ffff
  hub_id                : 137

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 98.5816
  local_score_raw       : 1.0772

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 19581118.2408

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 8.2143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 4471.5864

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1049.7720

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
    - post_office            : Urząd Pocztowy Leszno 1
    - bank                   : Santander
    - micro_atm              : Bankomat BZ WBK
    - micro_atm              : Bankomat BZ WBK
    - culture_theatre        : Miejska Biblioteka Publiczna
    - culture_theatre        : Pedagogiczna Biblioteka Publiczna
    - micro_atm              : Bankomat Kredyt Bank
    - convenience_store      : Żabka
    - education_high_school  : Zespół Prywatnych Szkół Średnich
    - gastronomy             : Primavera
    - bank                   : Bank Spółdzielczy
    - convenience_store      : Żabka
```
</details>
<details><summary><b>Szpitalna SZPITAL (891e246330bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Szpitalna SZPITAL
  stop_id               : 13
  h3_index              : 891e246330bffff
  hub_id                : 16

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 97.8723
  local_score_raw       : 0.9934

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 29685726.3654

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 5.3571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7340.0526

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 449.2655

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 5x health_clinic
  > 4x business_office
  > 3x micro_parcel_locker
  > 2x pharmacy
  > 2x personal_services
  > 2x specialized_retail
  > 2x commercial_zone
  > 1x culture_theatre
  > 1x education_preschool
  > 1x convenience_store
  > 1x university_campus
  > 1x hospital_clinical
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - pharmacy               : Dbam o Zdrowie
    - culture_theatre        : Archiwum Państwowe
    - education_preschool    : Przedszkole Miejskie nr 19
    - convenience_store      : Sklep Livio
    - personal_services      : \
    - health_clinic          : Focus
    - specialized_retail     : Art Decor
    - health_clinic          : Nocna i świąteczna opieka ambulatoryjna
    - health_clinic          : SOR
    - business_office        : N-Automation Group
    - business_office        : GASKOM
    - business_office        : Systemy wystawiennicze - Display System
```
</details>
<details><summary><b>Niepodległości (891e24632abffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Niepodległości
  stop_id               : 34
  h3_index              : 891e24632abffff
  hub_id                : 50

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 97.1631
  local_score_raw       : 0.9758

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 28460928.2153

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 5.2143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5152.2248

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1435.4575

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 43x specialized_retail
  > 25x gastronomy
  > 17x personal_services
  > 14x convenience_store
  > 11x university_campus
  > 11x bank
  > 11x park_recreation
  > 10x health_clinic
  > 7x education_high_school
  > 7x education_preschool
  > 7x government_central
  > 6x micro_atm
  > 6x pharmacy
  > 6x business_office
  > 5x micro_playground
  > 5x commercial_zone
  > 3x culture_theatre
  > 3x supermarket
  > 3x shopping_mall
  > 3x micro_parcel_locker
  > 3x social_support_mops
  > 2x sports_centre
  > 2x post_office
  > 2x place_of_worship
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : Bankomat BZ WBK
    - culture_theatre        : Miejska Biblioteka Publiczna
    - culture_theatre        : Pedagogiczna Biblioteka Publiczna
    - university_campus      : Wyższa Szkoła Humanistyczna BUDYNEK D
    - education_high_school  : Zakład Doskonalenia Zawodowego
    - pharmacy               : Dom Leków
    - convenience_store      : POLOmarket
    - gastronomy             : Primavera
    - convenience_store      : Żabka
    - bank                   : Bank Spółdzielczy
    - specialized_retail     : Sporting
    - specialized_retail     : Reserved
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

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 3.5461
  local_score_raw       : -2.0335

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 1.5000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 3256.2942

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 102.9462

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Wyciążkowo (891e2462683ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Wyciążkowo
  stop_id               : 284
  h3_index              : 891e2462683ffff
  hub_id                : 1

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 2.8369
  local_score_raw       : -2.1001

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.5714

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5117.6027

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 134.0000

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

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 2.1277
  local_score_raw       : -2.1998

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.5714

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 4882.8125

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 69.8655

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

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 1.4184
  local_score_raw       : -2.5943

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 129.5653

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.2857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 499.4554

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 162.9564

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

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.7092
  local_score_raw       : -2.6800

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 86.9456

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.2857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 499.4554

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 117.0436

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
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: -0.000, Std: 0.721)
     Rozkład Kartek (unikalne Huby): A: 142, A+: 72, B: 214, C: 286, D: 356, F: 356
[👥 BAZA LUDNOŚCI GUS] ❌ OSTRZEŻENIE DEMOGRAFICZNE: Odchylenie 46.8%. GUS: 983,517 vs Baza: 670,000
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
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
<details><summary><b>Kilińskiego-Piłsudskiego (891e21b155bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Kilińskiego-Piłsudskiego
  stop_id               : 389
  h3_index              : 891e21b155bffff
  hub_id                : 26

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.4003

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 14658320.9196

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 83.9286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 9467.4729

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1049.5946

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 27x park_recreation
  > 19x commercial_zone
  > 8x specialized_retail
  > 8x micro_parcel_locker
  > 6x convenience_store
  > 4x education_high_school
  > 4x place_of_worship
  > 4x university_campus
  > 3x micro_atm
  > 3x bank
  > 3x supermarket
  > 3x health_clinic
  > 3x government_central
  > 3x car_services
  > 3x micro_playground
  > 2x culture_theatre
  > 2x sports_centre
  > 2x gastronomy
  > 2x business_office
  > 2x education_preschool
  > 2x personal_services
  > 2x pharmacy
  > 1x shopping_mall
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : Bankomat Millennium
    - bank                   : Millennium Bank
    - convenience_store      : sklep spożywczy
    - bank                   : Bank Pekao
    - culture_theatre        : Sala Teatralna im. ks. Jerzego Popiełuszki
    - convenience_store      : Żabka
    - specialized_retail     : MediaMarkt
    - supermarket            : Lidl
    - specialized_retail     : Agata Wojtkiewicz
    - specialized_retail     : Butik Ślubny
    - specialized_retail     : Odzież robocza
    - specialized_retail     : Fashion Obsession
```
</details>
<details><summary><b>Piotrkowska-Brzeźna (891e21b109bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Piotrkowska-Brzeźna
  stop_id               : 546
  h3_index              : 891e21b109bffff
  hub_id                : 137

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.9299
  local_score_raw       : 1.3636

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 12996407.5564

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 71.3571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 10275.0750

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 977.8336

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 38x park_recreation
  > 24x gastronomy
  > 21x commercial_zone
  > 11x micro_playground
  > 8x convenience_store
  > 7x health_clinic
  > 7x personal_services
  > 6x culture_theatre
  > 5x pharmacy
  > 5x sports_centre
  > 5x micro_parcel_locker
  > 4x micro_atm
  > 4x supermarket
  > 3x bank
  > 3x education_preschool
  > 3x education_high_school
  > 2x post_office
  > 2x specialized_retail
  > 2x government_central
  > 2x university_campus
  > 2x hospital_clinical
  > 1x place_of_worship

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy             : Soplicowo
    - pharmacy               : Rosa
    - pharmacy               : Dbam o Zdrowie
    - supermarket            : Społem
    - bank                   : mBank
    - gastronomy             : Karczma u Chochoła
    - gastronomy             : Pizzeria Papa Lolo
    - convenience_store      : Lewiatan
    - culture_theatre        : Biblioteka Miejska w Łodzi
    - convenience_store      : Żabka
    - post_office            : Urząd Pocztowy Łódź 21
    - health_clinic          : Diason
```
</details>
<details><summary><b>Rokicińska-Maszynowa (891e21b023bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Rokicińska-Maszynowa
  stop_id               : 945
  h3_index              : 891e21b023bffff
  hub_id                : 497

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.8597
  local_score_raw       : 1.3388

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 7446408.5051

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 54.6429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 8870.3702

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 4871.3463

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 8x park_recreation
  > 7x micro_playground
  > 4x personal_services
  > 3x convenience_store
  > 3x gastronomy
  > 2x supermarket
  > 2x pharmacy
  > 2x culture_theatre
  > 2x education_preschool
  > 2x health_clinic
  > 2x industrial_zone
  > 1x micro_atm
  > 1x sports_centre
  > 1x car_services
  > 1x micro_parcel_locker
  > 1x business_office
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - supermarket            : Stokrotka
    - supermarket            : Biedronka
    - micro_atm              : Cash4You
    - sports_centre          : Siłownia
    - pharmacy               : Dr. Max
    - culture_theatre        : Biblioteka Miejska w Łodzi
    - car_services           : Serwis opon „Auto-Centrum”
    - personal_services      : Catherine Studio Kosmetyczne
    - micro_parcel_locker    : Paczkomat InPost
    - pharmacy               : Apteka Bliska Zdrowiu
    - education_preschool    : Przedszkole Miejskie nr 183
    - gastronomy             : Pizzeria 105
```
</details>
<details><summary><b>Piotrkowska-Żwirki (891e21b1467ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Piotrkowska-Żwirki
  stop_id               : 544
  h3_index              : 891e21b1467ffff
  hub_id                : 311

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.7896
  local_score_raw       : 1.2618

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 11736722.1783

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 45.5714

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 10425.2401

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1510.2866

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
<details><summary><b>Kilińskiego-Tuwima (891e21b1437ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Kilińskiego-Tuwima
  stop_id               : 409
  h3_index              : 891e21b1437ffff
  hub_id                : 31

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.7195
  local_score_raw       : 1.2420

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 18878334.4623

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 46.7857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 9777.3159

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1011.5033

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 43x park_recreation
  > 26x commercial_zone
  > 11x gastronomy
  > 10x micro_parcel_locker
  > 9x convenience_store
  > 8x micro_playground
  > 6x personal_services
  > 5x bank
  > 5x specialized_retail
  > 5x health_clinic
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
  > 1x micro_atm
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - bank                   : Millennium Przedsiębiorstwa
    - education_preschool    : Przedszkole Miejskie Nr 223
    - post_office            : Urząd Pocztowy Łódź 1
    - convenience_store      : Żabka
    - gastronomy             : Cukiernia Braci Miś
    - gastronomy             : Tu i Teraz
    - specialized_retail     : Agata Wojtkiewicz
    - personal_services      : Fryzjer
    - specialized_retail     : Szop
    - bank                   : Santander
    - convenience_store      : Żabka
    - gastronomy             : Złoty Imbir
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Wola Żytowska/Konin kier. Pabianice (891e218e917ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Wola Żytowska/Konin kier. Pabianice
  stop_id               : 1400018
  h3_index              : 891e218e917ffff
  hub_id                : 851

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.3506
  local_score_raw       : -2.0155

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5477.5695

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 8.9765

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Przędzalniana-Milionowa (891e21b11d3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Przędzalniana-Milionowa
  stop_id               : 755
  h3_index              : 891e21b11d3ffff
  hub_id                : 155

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.2805
  local_score_raw       : -2.0219

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 8119301.7712

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 8.0714

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 11.3466

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 603.6916

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 10x commercial_zone
  > 9x gastronomy
  > 9x convenience_store
  > 7x micro_playground
  > 6x park_recreation
  > 5x micro_parcel_locker
  > 4x pharmacy
  > 3x health_clinic
  > 2x specialized_retail
  > 2x place_of_worship
  > 2x car_services
  > 2x education_preschool
  > 2x industrial_zone
  > 1x post_office
  > 1x business_office
  > 1x micro_atm
  > 1x hospital_clinical
  > 1x education_high_school
  > 1x sports_centre
  > 1x supermarket

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy             : Cesky Film
    - specialized_retail     : Ordom
    - convenience_store      : Sklep ogólnospożywczy
    - post_office            : Poczta Polska
    - pharmacy               : Dbam o Zdrowie
    - convenience_store      : Primus
    - gastronomy             : Kreatoora
    - convenience_store      : Warzywniak Owoce i Warzywa
    - convenience_store      : Żabka
    - pharmacy               : Olmed
    - gastronomy             : T.25 CAFE
    - micro_parcel_locker    : Paczkomat InPost
```
</details>
<details><summary><b>Lubocha II (891e219738bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Lubocha II
  stop_id               : 1600077
  h3_index              : 891e219738bffff
  hub_id                : 883

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.2104
  local_score_raw       : -2.0371

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.3571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5477.5695

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 2.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Warszawska-Legionów (Stryków) (891f524f36bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Warszawska-Legionów (Stryków)
  stop_id               : 1863
  h3_index              : 891f524f36bffff
  hub_id                : 1132

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.1403
  local_score_raw       : -2.2639

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 82404.9912

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.5714

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 101.2658

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 151.0445

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

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.0701
  local_score_raw       : -2.2945

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 4119314.3974

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 4.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 11.3466

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 466.1380

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
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: -0.000, Std: 0.644)
     Rozkład Kartek (unikalne Huby): A: 11, A+: 6, B: 17, C: 23, D: 28, F: 27
[👥 BAZA LUDNOŚCI GUS] ✅ DEMOGRAFIA OK (Odchylenie zaledwie 8.6%)
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
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
<details><summary><b>Aleja Legionów — Kontakty (891f51c132fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Aleja Legionów — Kontakty
  stop_id               : 3
  h3_index              : 891f51c132fffff
  hub_id                : 0

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.2345

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 6215697.7608

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 19.2143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5275.6532

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1009.2018

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
<details><summary><b>Plac Kościuszki — Delikatesy (891f51c1ecbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Plac Kościuszki — Delikatesy
  stop_id               : 1
  h3_index              : 891f51c1ecbffff
  hub_id                : 3

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.1071
  local_score_raw       : 1.1690

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 2561267.5419

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 21.9286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5280.5102

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1228.8879

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
<details><summary><b>Aleja Legionów — Kopernika (891f51cad93ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Aleja Legionów — Kopernika
  stop_id               : 5
  h3_index              : 891f51cad93ffff
  hub_id                : 2

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 98.2143
  local_score_raw       : 1.1440

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 7385720.1877

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 16.8571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5228.7582

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 649.2856

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 11x micro_playground
  > 8x bank
  > 7x gastronomy
  > 5x education_high_school
  > 4x pharmacy
  > 3x supermarket
  > 3x convenience_store
  > 3x micro_parcel_locker
  > 3x place_of_worship
  > 2x marketplace
  > 2x personal_services
  > 2x shopping_mall
  > 2x education_preschool
  > 1x micro_atm
  > 1x government_central
  > 1x car_services
  > 1x specialized_retail
  > 1x police_station
  > 1x park_recreation
  > 1x hospital_clinical

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - pharmacy               : Gemini
    - supermarket            : Lidl
    - marketplace            : Targowisko Miejskie
    - bank                   : Alior Bank
    - bank                   : EuroBank
    - bank                   : SKOK
    - gastronomy             : Smak Kebab
    - bank                   : Crédit Agricole
    - gastronomy             : Gruby Benek
    - bank                   : SKOK
    - personal_services      : Rossmann
    - convenience_store      : Alex
```
</details>
<details><summary><b>Aleja Piłsudzkiego — Niemcewicza (891f51cad73ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Aleja Piłsudzkiego — Niemcewicza
  stop_id               : 50
  h3_index              : 891f51cad73ffff
  hub_id                : 23

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 97.3214
  local_score_raw       : 1.0045

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 1431702.9284

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 14.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5803.1088

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1981.2401

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 44x micro_playground
  > 7x micro_atm
  > 6x education_preschool
  > 5x pharmacy
  > 5x supermarket
  > 4x micro_parcel_locker
  > 4x gastronomy
  > 3x shopping_mall
  > 3x specialized_retail
  > 3x park_recreation
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
<details><summary><b>Aleja Piłsudzkiego — Przejazd Kolejowy (891f51cadcfffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Aleja Piłsudzkiego — Przejazd Kolejowy
  stop_id               : 56
  h3_index              : 891f51cadcfffff
  hub_id                : 13

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 96.4286
  local_score_raw       : 0.9424

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 2048643.2216

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 18.5714

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 4974.0573

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 741.7644

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 11x micro_playground
  > 6x specialized_retail
  > 6x gastronomy
  > 5x micro_parcel_locker
  > 3x car_services
  > 3x supermarket
  > 3x education_preschool
  > 3x industrial_zone
  > 2x personal_services
  > 2x convenience_store
  > 1x micro_atm
  > 1x bank
  > 1x pharmacy
  > 1x business_office

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : Bankomat Cash4You
    - car_services           : Circle K
    - car_services           : Orlen
    - bank                   : Hexabank
    - specialized_retail     : Abra
    - gastronomy             : Diavolo Pizzeria
    - gastronomy             : Frangos Burger & Grill House
    - supermarket            : Biedronka
    - personal_services      : Hebe
    - gastronomy             : Restauracja Cztery Pory Roku
    - micro_parcel_locker    : Paczkomat InPost
    - convenience_store      : Żabka
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Sikorskiego — Dworna (891f51c1e7bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Sikorskiego — Dworna
  stop_id               : 83
  h3_index              : 891f51c1e7bffff
  hub_id                : 66

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 4.4643
  local_score_raw       : -1.1054

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 74722.8609

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 2.3571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 2692.3077

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 338.4301

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
  hub_id                : 20

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 3.5714
  local_score_raw       : -1.4763

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 2751.8985

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 1.0714

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 4879.1823

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 142.1386

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

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 2.6786
  local_score_raw       : -1.7418

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 14012.5921

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.7857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 2692.3077

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 226.3417

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
  stop_id               : 85
  h3_index              : 891f51c1e6fffff
  hub_id                : 26

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 1.7857
  local_score_raw       : -2.0001

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 1107.8143

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 1.5714

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 2692.3077

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 218.0049

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

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.8929
  local_score_raw       : -2.4824

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 1.5714

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5960.6481

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 229.7792

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>

---

## LUBLIN
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: -0.000, Std: 0.706)
     Rozkład Kartek (unikalne Huby): A: 76, A+: 38, B: 113, C: 151, D: 189, F: 188
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
<details><summary><b>Ogród Saski (891e2d09da3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Ogród Saski
  stop_id               : 1001
  h3_index              : 891e2d09da3ffff
  hub_id                : 209

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.5469

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 29273737.3621

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 63.4286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 9661.2834

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 596.6178

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 49x gastronomy
  > 24x government_central
  > 24x park_recreation
  > 17x bank
  > 16x convenience_store
  > 12x specialized_retail
  > 12x commercial_zone
  > 8x culture_theatre
  > 7x micro_atm
  > 7x pharmacy
  > 6x micro_playground
  > 5x business_office
  > 5x health_clinic
  > 5x personal_services
  > 5x place_of_worship
  > 4x supermarket
  > 4x education_preschool
  > 4x university_campus
  > 4x education_high_school
  > 4x marketplace
  > 3x micro_parcel_locker
  > 2x shopping_mall
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
    - gastronomy             : Galeria Smaku
```
</details>
<details><summary><b>Plac Litewski (891e2d08e6bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Plac Litewski
  stop_id               : 1022
  h3_index              : 891e2d08e6bffff
  hub_id                : 556

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.8675
  local_score_raw       : 1.5300

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 50677865.7938

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 38.1429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 10477.8057

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 804.6433

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
    - bank                   : Millennium Bank
    - convenience_store      : Żabka
    - micro_atm              : Euronet
    - micro_atm              : PKO BP
    - micro_atm              : Euronet
    - bank                   : Millennium Przedsiębiorstwa
    - bank                   : Narodowy Bank Polski
    - specialized_retail     : Pracownia Krawiecka i Renowacja odzieży skórzanej
    - convenience_store      : Żabka
    - bank                   : Punkt Obsługi Bankowej I piętro
    - convenience_store      : Żabka
    - micro_atm              : PKO BP
```
</details>
<details><summary><b>Zamojska (891e2d08a1bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Zamojska
  stop_id               : 2232
  h3_index              : 891e2d08a1bffff
  hub_id                : 48

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.7351
  local_score_raw       : 1.4771

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 16442391.7349

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 51.5000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 10088.3635

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 690.6494

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

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.6026
  local_score_raw       : 1.2851

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 9728285.5906

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 71.2857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7778.9588

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 516.5858

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

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.4702
  local_score_raw       : 1.2582

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 16575772.8372

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 35.8571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7547.4128

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 2629.9225

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
<details><summary><b>Kawka - szklarnia NŻ (891e2d1884fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Kawka - szklarnia NŻ
  stop_id               : 8061
  h3_index              : 891e2d1884fffff
  hub_id                : 427

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.6623
  local_score_raw       : -1.9273

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.7143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7245.8954

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 12.0374

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
  hub_id                : 193

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.5298
  local_score_raw       : -1.9292

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7245.8954

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 67.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b> Zemborzyce Wojciechowskie II NŻ (891e2d46bafffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             :  Zemborzyce Wojciechowskie II NŻ
  stop_id               : 8762
  h3_index              : 891e2d46bafffff
  hub_id                : 49

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.3974
  local_score_raw       : -2.0323

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 1.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 4976.1824

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 55.8509

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Zawieprzyce - skrzyżowanie NŻ (891e2d00b63ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Zawieprzyce - skrzyżowanie NŻ
  stop_id               : 9661
  h3_index              : 891e2d00b63ffff
  hub_id                : 32

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.2649
  local_score_raw       : -2.0764

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.6429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7245.8954

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 2.8093

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

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.1325
  local_score_raw       : -2.0970

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.7857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 4567.3390

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 85.8954

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 1x car_services

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - car_services           : Auto Naprawa Łukasz Lipiec
```
</details>

---

## OLSZTYN
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: -0.000, Std: 0.721)
     Rozkład Kartek (unikalne Huby): A: 42, A+: 22, B: 64, C: 85, D: 106, F: 106
[👥 BAZA LUDNOŚCI GUS] ❌ OSTRZEŻENIE DEMOGRAFICZNE: Odchylenie 26.8%. GUS: 215,625 vs Baza: 170,000
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
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
<details><summary><b>Carrefour (Krasickiego) (891f542b42fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Carrefour (Krasickiego)
  stop_id               : 747
  h3_index              : 891f542b42fffff
  hub_id                : 213

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.2196

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 6457763.6185

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 46.8571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7244.6910

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 2014.8334

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
<details><summary><b>Centrum (Piłsudskiego) (891f5439ab7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Centrum (Piłsudskiego)
  stop_id               : 391
  h3_index              : 891f5439ab7ffff
  hub_id                : 385

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.7647
  local_score_raw       : 1.1926

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 10873133.0430

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 74.7143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6097.5610

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 508.3502

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 62x park_recreation
  > 57x gastronomy
  > 34x government_central
  > 25x specialized_retail
  > 21x personal_services
  > 15x micro_atm
  > 11x bank
  > 11x convenience_store
  > 9x micro_playground
  > 6x pharmacy
  > 6x culture_theatre
  > 6x health_clinic
  > 6x place_of_worship
  > 6x commercial_zone
  > 5x education_high_school
  > 5x micro_parcel_locker
  > 4x shopping_mall
  > 3x post_office
  > 2x supermarket
  > 2x education_preschool
  > 2x police_station
  > 2x sports_centre
  > 1x business_office
  > 1x university_campus

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - education_high_school  : II Liceum Ogólnokształcące im. K. I. Gałczyńskiego
    - pharmacy               : Euro Apteka
    - gastronomy             : KFC
    - culture_theatre        : Helios
    - micro_atm              : Bankomat BZ WBK
    - micro_atm              : Euronet
    - micro_atm              : Euronet
    - micro_atm              : Euronet
    - bank                   : Millennium Bank
    - micro_atm              : Euronet
    - specialized_retail     : Reserved
    - specialized_retail     : RTV Euro AGD
```
</details>
<details><summary><b>Janowicza (Wilczyńskiego) (891f542b0d7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Janowicza (Wilczyńskiego)
  stop_id               : 179
  h3_index              : 891f542b0d7ffff
  hub_id                : 216

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.5294
  local_score_raw       : 1.1784

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 11211869.6407

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 35.1429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6651.4945

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 3094.6968

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
<details><summary><b>D.H. Śliwa (Wilczyńskiego) (891f542b08bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : D.H. Śliwa (Wilczyńskiego)
  stop_id               : 177
  h3_index              : 891f542b08bffff
  hub_id                : 378

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.2941
  local_score_raw       : 1.1679

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 8084768.2923

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 35.0714

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6846.4730

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 3080.1402

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
<details><summary><b>Jarocka (Wilczyńskiego) (891f542b0c3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Jarocka (Wilczyńskiego)
  stop_id               : 181
  h3_index              : 891f542b0c3ffff
  hub_id                : 242

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.0588
  local_score_raw       : 1.1235

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 9280796.0658

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 35.1429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6651.8548

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1919.8474

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 38x micro_playground
  > 12x gastronomy
  > 10x convenience_store
  > 8x health_clinic
  > 8x personal_services
  > 6x micro_atm
  > 6x micro_parcel_locker
  > 5x specialized_retail
  > 4x supermarket
  > 4x bank
  > 3x pharmacy
  > 3x car_services
  > 3x education_preschool
  > 3x industrial_zone
  > 3x commercial_zone
  > 2x sports_centre
  > 2x shopping_mall
  > 2x place_of_worship
  > 2x park_recreation
  > 1x post_office
  > 1x business_office
  > 1x culture_theatre

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - supermarket            : Społem
    - supermarket            : Lidl
    - bank                   : BS Szczytno
    - bank                   : PKO BP
    - bank                   : Santander
    - gastronomy             : Twój Przepis
    - gastronomy             : Gruby Benek
    - convenience_store      : Żabka
    - convenience_store      : Żabka
    - gastronomy             : Krova grill&pub
    - micro_atm              : Bank Pekao
    - micro_atm              : PKO BP
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Spręcowo-Świetlica (Spręcowo) (891f543a297ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Spręcowo-Świetlica (Spręcowo)
  stop_id               : 598
  h3_index              : 891f543a297ffff
  hub_id                : 130

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 1.1765
  local_score_raw       : -1.4756

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 2500.8246

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.7143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 630.5833

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 143.1696

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
<details><summary><b>Jezioro Skanda (Pstrowskiego) (891f542b503ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Jezioro Skanda (Pstrowskiego)
  stop_id               : 205
  h3_index              : 891f542b503ffff
  hub_id                : 363

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.9412
  local_score_raw       : -1.5121

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.4286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6854.1234

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Dorotowo-Kepijko (Dorotowo) (891f5474a0bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Dorotowo-Kepijko (Dorotowo)
  stop_id               : 769
  h3_index              : 891f5474a0bffff
  hub_id                : 171

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.7059
  local_score_raw       : -1.5528

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6854.1234

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Bartąg-Kolonia (Bartąg-Kolonia) (891f542b6cbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Bartąg-Kolonia (Bartąg-Kolonia)
  stop_id               : 604
  h3_index              : 891f542b6cbffff
  hub_id                : 289

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.4706
  local_score_raw       : -1.6147

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6854.1234

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Sętal Kolonia (Sętal) (891f543a0abffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Sętal Kolonia (Sętal)
  stop_id               : 532
  h3_index              : 891f543a0abffff
  hub_id                : 125

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.2353
  local_score_raw       : -2.1135

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 1009.4950

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 21.8133

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>

---

## OPOLE
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: 0.000, Std: 0.651)
     Rozkład Kartek (unikalne Huby): A: 34, A+: 18, B: 52, C: 69, D: 86, F: 85
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
<details><summary><b>1 Maja - Dworzec Główny (2) (891e23c4437ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : 1 Maja - Dworzec Główny (2)
  stop_id               : 2
  h3_index              : 891e23c4437ffff
  hub_id                : 138

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.4397

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 21960908.3575

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 32.5000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 9538.7244

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 556.7105

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
<details><summary><b>Niemodlińska - Koszyka (217) (891e23c44d7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Niemodlińska - Koszyka (217)
  stop_id               : 217
  h3_index              : 891e23c44d7ffff
  hub_id                : 133

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.7093
  local_score_raw       : 1.4190

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 4370622.7496

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 41.8571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 8172.1772

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 2235.0055

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 5x micro_playground
  > 3x micro_atm
  > 3x pharmacy
  > 3x supermarket
  > 3x industrial_zone
  > 3x education_high_school
  > 2x personal_services
  > 2x shopping_mall
  > 1x convenience_store
  > 1x education_preschool
  > 1x health_clinic
  > 1x specialized_retail
  > 1x park_recreation
  > 1x gastronomy

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : Pekao SA
    - micro_atm              : PKO BP
    - micro_atm              : Euronet
    - personal_services      : Salon fryzjerski Image
    - convenience_store      : Żabka
    - pharmacy               : Za Odrą
    - pharmacy               : Dr. Max
    - pharmacy               : Apteka Niemodlińska Multifarm Opolskie Apteki
    - personal_services      : Rossman
    - shopping_mall          : Karo
    - supermarket            : Emma
    - shopping_mall          : AS
```
</details>
<details><summary><b>Reymonta (327) (891e23c45dbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Reymonta (327)
  stop_id               : 327
  h3_index              : 891e23c45dbffff
  hub_id                : 221

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.4186
  local_score_raw       : 1.3083

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 14444831.2909

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 24.5714

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 9545.0207

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 753.9317

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
<details><summary><b>Sosnkowskiego - Fieldorfa (337) (891e23c6edbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Sosnkowskiego - Fieldorfa (337)
  stop_id               : 337
  h3_index              : 891e23c6edbffff
  hub_id                : 13

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.1279
  local_score_raw       : 1.2893

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 6524065.3857

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 26.7143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 8684.2105

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1741.8182

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 5x government_central
  > 4x micro_playground
  > 3x pharmacy
  > 3x supermarket
  > 3x industrial_zone
  > 3x university_campus
  > 2x micro_atm
  > 2x convenience_store
  > 2x health_clinic
  > 1x car_services
  > 1x gastronomy
  > 1x micro_parcel_locker
  > 1x education_high_school
  > 1x education_preschool

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : Bankomat BZ WBK
    - pharmacy               : Apteka Zdrowit
    - convenience_store      : Żabka
    - supermarket            : Stokrotka
    - supermarket            : Netto
    - convenience_store      : abc
    - supermarket            : Biedronka
    - car_services           : Petrochemia Płock
    - government_central     : Centrum Powiadamiania Ratunkowego
    - government_central     : Okręgowa Stacja Chemiczno - Rolnicza w Opolu
    - gastronomy             : Stołówka Studenta
    - government_central     : Centrum Aktywizacji Zawodowej Urzad pracy
```
</details>
<details><summary><b>Sosnkowskiego - Politechnika (341) (891e23c6337ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Sosnkowskiego - Politechnika (341)
  stop_id               : 341
  h3_index              : 891e23c6337ffff
  hub_id                : 15

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 98.8372
  local_score_raw       : 1.2568

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 15296412.4498

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 22.6429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7383.0101

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1718.8849

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 7x micro_playground
  > 4x supermarket
  > 3x gastronomy
  > 3x university_campus
  > 2x micro_atm
  > 2x pharmacy
  > 2x convenience_store
  > 2x car_services
  > 2x industrial_zone
  > 1x specialized_retail
  > 1x government_central
  > 1x place_of_worship
  > 1x education_high_school
  > 1x sports_centre
  > 1x park_recreation

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : Bankomat BZ WBK
    - gastronomy             : Hotel Festival
    - pharmacy               : Apteka Zdrowit
    - convenience_store      : Żabka
    - supermarket            : Netto
    - convenience_store      : abc
    - supermarket            : Biedronka
    - car_services           : Circle K
    - gastronomy             : Stołówka Studenta
    - specialized_retail     : Pepco
    - government_central     : Centrum Aktywizacji Zawodowej Urzad pracy
    - pharmacy               : Apteka U Wysoczańskiej
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Ochodze (231) (891e23c0977ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Ochodze (231)
  stop_id               : 231
  h3_index              : 891e23c0977ffff
  hub_id                : 99

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 1.4535
  local_score_raw       : -1.9394

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 1.2857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7734.0793

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 267.8969

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

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 1.1628
  local_score_raw       : -1.9694

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 1.5000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7734.0793

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 141.3272

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Prószków - Grunwaldzka - Rudnicka (914) (891e23c53c3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Prószków - Grunwaldzka - Rudnicka (914)
  stop_id               : 914
  h3_index              : 891e23c53c3ffff
  hub_id                : 97

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.8721
  local_score_raw       : -2.0722

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.8571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7734.0793

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 171.0000

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

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.5814
  local_score_raw       : -2.0853

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 1.5714

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7734.0793

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 41.4428

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Pucnik - Pętla (490) (891e23c50c3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Pucnik - Pętla (490)
  stop_id               : 490
  h3_index              : 891e23c50c3ffff
  hub_id                : 143

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.2907
  local_score_raw       : -2.1586

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.5000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7734.0793

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 174.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>

---

## POZNAN
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: 0.000, Std: 0.571)
     Rozkład Kartek (unikalne Huby): A: 278, A+: 139, B: 416, C: 556, D: 694, F: 693
[👥 BAZA LUDNOŚCI GUS] ❌ OSTRZEŻENIE DEMOGRAFICZNE: Odchylenie 151.2%. GUS: 1,331,460 vs Baza: 530,000
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
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
<details><summary><b>Rondo Rataje (891e24aacdbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Rondo Rataje
  stop_id               : 2732
  h3_index              : 891e24aacdbffff
  hub_id                : 38

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.4896

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 4732275.8175

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 93.5000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7122.2607

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 935.4171

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 187x park_recreation
  > 43x specialized_retail
  > 26x micro_playground
  > 22x gastronomy
  > 12x micro_parcel_locker
  > 6x micro_atm
  > 6x convenience_store
  > 6x bank
  > 5x personal_services
  > 4x pharmacy
  > 4x supermarket
  > 4x health_clinic
  > 4x shopping_mall
  > 3x place_of_worship
  > 3x commercial_zone
  > 3x education_preschool
  > 2x social_support_mops
  > 1x sports_centre
  > 1x police_station
  > 1x car_services
  > 1x education_high_school

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - pharmacy               : Wielkopolska
    - supermarket            : Biedronka
    - gastronomy             : Pesto
    - pharmacy               : Apteka Gemini
    - health_clinic          : Gabinet Terapii Biofeedback
    - pharmacy               : Apteka Nad Wartą
    - convenience_store      : Jabłuszko
    - sports_centre          : Siłownia Słodkiewicz
    - pharmacy               : Wielkopolska
    - supermarket            : Best Market
    - personal_services      : JU-KA
    - micro_atm              : PKO BP
```
</details>
<details><summary><b>Święty Marcin (891e24aa523ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Święty Marcin
  stop_id               : 3665
  h3_index              : 891e24aa523ffff
  hub_id                : 631

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.9640
  local_score_raw       : 1.4402

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 13509636.2705

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 41.7143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 10824.0000

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1168.3555

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 245x park_recreation
  > 153x gastronomy
  > 62x specialized_retail
  > 24x convenience_store
  > 23x personal_services
  > 21x bank
  > 21x micro_atm
  > 20x culture_theatre
  > 10x health_clinic
  > 10x government_central
  > 8x pharmacy
  > 8x place_of_worship
  > 7x business_office
  > 6x education_high_school
  > 6x micro_parcel_locker
  > 6x university_campus
  > 4x supermarket
  > 2x micro_playground
  > 2x social_support_mops
  > 2x shopping_mall
  > 1x post_office
  > 1x education_preschool
  > 1x sports_centre
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - culture_theatre        : Kino Muza
    - culture_theatre        : Teatr Ósmego Dnia
    - convenience_store      : Żabka
    - gastronomy             : Shemo na Murnej
    - gastronomy             : Bar Pod Arkadami
    - gastronomy             : W Bramie
    - convenience_store      : Żabka
    - pharmacy               : Fontana
    - personal_services      : CoCo Studio Urody
    - bank                   : Bank Nowy S.A.
    - convenience_store      : Żabka
    - gastronomy             : Kociak
```
</details>
<details><summary><b>Os. Rzeczypospolitej (891e24aae93ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Os. Rzeczypospolitej
  stop_id               : 182
  h3_index              : 891e24aae93ffff
  hub_id                : 1460

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.9280
  local_score_raw       : 1.4111

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 5529074.2570

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 46.3571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7983.4607

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 2855.9850

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 202x park_recreation
  > 30x micro_playground
  > 9x gastronomy
  > 9x micro_parcel_locker
  > 6x convenience_store
  > 6x micro_atm
  > 6x personal_services
  > 5x car_services
  > 4x health_clinic
  > 4x specialized_retail
  > 4x education_high_school
  > 4x education_preschool
  > 3x supermarket
  > 2x pharmacy
  > 2x sports_centre
  > 1x post_office
  > 1x shopping_mall
  > 1x place_of_worship
  > 1x social_support_mops
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store      : Carrefour Market
    - micro_atm              : Santander
    - micro_atm              : PKO BP
    - pharmacy               : Apteka Św. Kamila
    - convenience_store      : Żabka
    - post_office            : Poczta Polska
    - supermarket            : Stokrotka
    - micro_atm              : PKO BP
    - pharmacy               : Apteka Gemini
    - health_clinic          : Poradnia Lekarza Rodzinnego
    - personal_services      : Salon Urody Inspiracje
    - micro_atm              : Pekao
```
</details>
<details><summary><b>Zamek (891e24aa53bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Zamek
  stop_id               : 1704
  h3_index              : 891e24aa53bffff
  hub_id                : 660

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.8919
  local_score_raw       : 1.3663

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 10336677.8297

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 67.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7974.4081

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 335.8098

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 267x park_recreation
  > 85x gastronomy
  > 26x business_office
  > 17x convenience_store
  > 16x micro_atm
  > 15x bank
  > 14x culture_theatre
  > 11x specialized_retail
  > 10x personal_services
  > 9x government_central
  > 8x university_campus
  > 6x place_of_worship
  > 5x education_high_school
  > 5x micro_playground
  > 4x health_clinic
  > 4x pharmacy
  > 2x social_support_mops
  > 2x micro_parcel_locker
  > 2x supermarket
  > 2x industrial_zone
  > 1x post_office
  > 1x education_preschool
  > 1x sports_centre
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - culture_theatre        : Teatr Ósmego Dnia
    - culture_theatre        : Filharmonia Poznańska
    - gastronomy             : Bar Pod Arkadami
    - gastronomy             : W Bramie
    - bank                   : Bank Nowy S.A.
    - convenience_store      : Żabka
    - gastronomy             : Mollini Ristorante
    - gastronomy             : Da Vinci
    - gastronomy             : Papavero
    - gastronomy             : Zahir Kebab
    - gastronomy             : Hummusownia
    - convenience_store      : Żabka
```
</details>
<details><summary><b>Rondo Kaponiera (891e24aa50fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Rondo Kaponiera
  stop_id               : 1768
  h3_index              : 891e24aa50fffff
  hub_id                : 299

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.8559
  local_score_raw       : 1.3583

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 11436500.9204

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 63.6429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 9351.4673

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 207.5846

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 224x park_recreation
  > 48x gastronomy
  > 38x business_office
  > 19x health_clinic
  > 14x convenience_store
  > 9x bank
  > 9x micro_atm
  > 8x government_central
  > 7x culture_theatre
  > 7x personal_services
  > 6x micro_playground
  > 6x university_campus
  > 6x micro_parcel_locker
  > 3x pharmacy
  > 3x sports_centre
  > 2x post_office
  > 2x industrial_zone
  > 1x place_of_worship
  > 1x specialized_retail
  > 1x hospital_clinical
  > 1x education_high_school
  > 1x education_preschool

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - culture_theatre        : Filharmonia Poznańska
    - post_office            : Poczta Polska
    - gastronomy             : W Bramie
    - convenience_store      : Żabka
    - gastronomy             : Emma Cafe
    - gastronomy             : Ptasie Radio
    - gastronomy             : Trocadero
    - post_office            : Poczta Polska
    - bank                   : Bank Pocztowy
    - bank                   : BNP Paribas Polska
    - gastronomy             : Jeżycka Café
    - micro_atm              : Euronet
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Rumiejki (891e2434dcfffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Rumiejki
  stop_id               : 3:142:00
  h3_index              : 891e2434dcfffff
  hub_id                : 1233

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.1801
  local_score_raw       : -1.7569

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.7143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 690.4488

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 78.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Jeziory Wielkie - Wieś (891e2422493ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Jeziory Wielkie - Wieś
  stop_id               : JWWIE01
  h3_index              : 891e2422493ffff
  hub_id                : 2299

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.1441
  local_score_raw       : -2.0332

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 2.8571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 84.9593

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 193.1998

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

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.1081
  local_score_raw       : -2.0430

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 1880870.6177

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 1.3571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 4.0723

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 540.6158

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
<details><summary><b>Garby (891e2435a0bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Garby
  stop_id               : 3:343:01
  h3_index              : 891e2435a0bffff
  hub_id                : 1731

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.0720
  local_score_raw       : -2.2228

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.1429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 200.0064

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 123.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Strzeszyńska (891e24b891bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Strzeszyńska
  stop_id               : 513
  h3_index              : 891e24b891bffff
  hub_id                : 731

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.0360
  local_score_raw       : -2.4760

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 8292982.5146

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 3.4999

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 61.8816

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
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: -0.000, Std: 0.655)
     Rozkład Kartek (unikalne Huby): A: 18, A+: 10, B: 27, C: 36, D: 45, F: 44
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
<details><summary><b>Jagiellońska - PL. Pileckiego - Kier. Zasanie (891e2b16b2fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Jagiellońska - PL. Pileckiego - Kier. Zasanie
  stop_id               : 4
  h3_index              : 891e2b16b2fffff
  hub_id                : 27

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.6601

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 13933773.7079

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 16.4286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5054.9451

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1131.4245

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
<details><summary><b>Słowackiego - Poczta - Kier. Pikulice (891e2b14db3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Słowackiego - Poczta - Kier. Pikulice
  stop_id               : 91
  h3_index              : 891e2b14db3ffff
  hub_id                : 23

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.4444
  local_score_raw       : 1.4160

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 18995541.5180

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 7.9286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6297.7099

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1192.4278

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 17x park_recreation
  > 10x micro_playground
  > 8x health_clinic
  > 7x education_high_school
  > 6x commercial_zone
  > 5x industrial_zone
  > 4x place_of_worship
  > 3x culture_theatre
  > 3x gastronomy
  > 3x convenience_store
  > 3x government_central
  > 3x sports_centre
  > 3x education_preschool
  > 3x university_campus
  > 2x specialized_retail
  > 2x supermarket
  > 2x social_support_mops
  > 1x personal_services
  > 1x post_office
  > 1x micro_atm
  > 1x micro_parcel_locker
  > 1x pharmacy
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
<details><summary><b>Grunwaldzka - PL. Konstytucji - Kier. Centrum (891e2b16b23ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Grunwaldzka - PL. Konstytucji - Kier. Centrum
  stop_id               : 43
  h3_index              : 891e2b16b23ffff
  hub_id                : 78

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 98.8889
  local_score_raw       : 1.3148

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 10417610.5641

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 8.5000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6061.5990

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 751.3997

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 13x micro_playground
  > 12x gastronomy
  > 12x commercial_zone
  > 10x government_central
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
<details><summary><b>Monte Cassino - Szpital Wojewódzki - Kier. Centrum (891e2b169abffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Monte Cassino - Szpital Wojewódzki - Kier. Centrum
  stop_id               : 14
  h3_index              : 891e2b169abffff
  hub_id                : 147

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 98.3333
  local_score_raw       : 1.1308

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 14665166.7865

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 6.2143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5635.3888

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 787.8842

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
<details><summary><b>Słowackiego - Biblioteka (891e2bab64bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Słowackiego - Biblioteka
  stop_id               : 89
  h3_index              : 891e2bab64bffff
  hub_id                : 1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 97.7778
  local_score_raw       : 1.1174

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 11016629.6269

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 8.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 4195.9212

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1318.2393

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

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Rożubowice Końcówka (891e2ba902bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Rożubowice Końcówka
  stop_id               : 436
  h3_index              : 891e2ba902bffff
  hub_id                : 139

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 2.7778
  local_score_raw       : -1.6232

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.5714

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5989.2328

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 83.7804

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Łętownia Wieś - Kier. Bełwin (891e2b1610fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Łętownia Wieś - Kier. Bełwin
  stop_id               : 284
  h3_index              : 891e2b1610fffff
  hub_id                : 135

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 2.2222
  local_score_raw       : -1.8735

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0714

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5989.2328

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 78.7997

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Łętownia N / Ż - Kier. Bełwin (891e2b16167ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Łętownia N / Ż - Kier. Bełwin
  stop_id               : 282
  h3_index              : 891e2b16167ffff
  hub_id                : 89

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 1.6667
  local_score_raw       : -1.8927

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0714

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5989.2328

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 67.7606

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

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 1.1111
  local_score_raw       : -1.9164

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.6429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5989.2328

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 6.0000

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

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.5556
  local_score_raw       : -1.9255

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.3571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5989.2328

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 15.6847

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>

---

## RADOM
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: 0.000, Std: 0.666)
     Rozkład Kartek (unikalne Huby): A: 44, A+: 22, B: 66, C: 88, D: 110, F: 109
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
<details><summary><b>Chrobrego / Mierzejewskiego (891e2c041dbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Chrobrego / Mierzejewskiego
  stop_id               : 59
  h3_index              : 891e2c041dbffff
  hub_id                : 271

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.4401

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 35312823.2602

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 17.7143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 8016.7971

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 826.2769

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

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.7722
  local_score_raw       : 1.3917

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 17233675.2874

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 20.7143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 8177.0904

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 569.6059

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

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.5444
  local_score_raw       : 1.2801

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 27275361.9723

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 17.9286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6494.4079

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1152.5792

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

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.3166
  local_score_raw       : 1.2161

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 11866834.5888

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 17.5000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7780.6892

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 494.7400

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
<details><summary><b>Dw. Główny PKP / pl. Dworcowy (891e2c0434fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Dw. Główny PKP / pl. Dworcowy
  stop_id               : 1480
  h3_index              : 891e2c0434fffff
  hub_id                : 5

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.0888
  local_score_raw       : 1.2100

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 23756686.3766

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 25.8571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5414.0285

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 802.1257

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 76x park_recreation
  > 14x personal_services
  > 14x micro_playground
  > 10x specialized_retail
  > 9x bank
  > 9x convenience_store
  > 8x gastronomy
  > 8x commercial_zone
  > 7x micro_atm
  > 6x health_clinic
  > 6x government_central
  > 5x pharmacy
  > 5x car_services
  > 4x education_high_school
  > 4x micro_parcel_locker
  > 4x industrial_zone
  > 3x business_office
  > 2x education_preschool
  > 2x culture_theatre
  > 2x university_campus
  > 1x supermarket
  > 1x post_office
  > 1x sports_centre
  > 1x national_rail_hub
  > 1x place_of_worship
  > 1x shopping_mall
  > 1x social_support_mops
  > 1x marketplace

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - bank                   : Bank Pekao
    - pharmacy               : Apteka całodobowa Gemini
    - micro_atm              : Bankomat Cash4You
    - supermarket            : Biedronka
    - pharmacy               : Apteka od Serca
    - personal_services      : Salon fryzjerski
    - bank                   : BNP Paribas Polska
    - personal_services      : Rossmann
    - post_office            : Urząd Pocztowy Radom 1
    - pharmacy               : Polskich Farmaceutów
    - gastronomy             : Bar Kubuś
    - specialized_retail     : MIDAS
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Małęczyn Stary / Pogodna (NŻ) (891e2c04b2bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Małęczyn Stary / Pogodna (NŻ)
  stop_id               : 1338
  h3_index              : 891e2c04b2bffff
  hub_id                : 312

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 1.1390
  local_score_raw       : -2.1438

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6689.2033

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 185.1502

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Rożki I (891e2c0e16bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Rożki I
  stop_id               : 1234
  h3_index              : 891e2c0e16bffff
  hub_id                : 160

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.9112
  local_score_raw       : -2.2140

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6689.2033

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 112.5745

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Antoniówka (891e2c33667ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Antoniówka
  stop_id               : 48769
  h3_index              : 891e2c33667ffff
  hub_id                : 297

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.6834
  local_score_raw       : -2.2168

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6689.2033

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 110.3865

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

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.4556
  local_score_raw       : -2.2235

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6689.2033

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 105.2548

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Kozłów I (NŻ) (891e2c068afffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Kozłów I (NŻ)
  stop_id               : 902
  h3_index              : 891e2c068afffff
  hub_id                : 230

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.2278
  local_score_raw       : -2.4839

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6689.2033

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 16.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>

---

## RZESZOW
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: 0.000, Std: 0.684)
     Rozkład Kartek (unikalne Huby): A: 138, A+: 70, B: 208, C: 277, D: 346, F: 345
[👥 BAZA LUDNOŚCI GUS] ❌ OSTRZEŻENIE DEMOGRAFICZNE: Odchylenie 123.0%. GUS: 423,608 vs Baza: 190,000
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
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
<details><summary><b>Piłsudskiego U. Wojewódzki 05 (891e286c1a7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Piłsudskiego U. Wojewódzki 05
  stop_id               : 50
  h3_index              : 891e286c1a7ffff
  hub_id                : 1094

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.7087

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 34190797.2921

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 76.2857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 8689.0244

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 615.2226

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
    - micro_atm              : PKO BP
    - gastronomy             : Dara Fit
    - micro_atm              : Euronet
    - government_central     : Urząd Komunikacji Elektronicznej
    - gastronomy             : Kogucik
    - supermarket            : Biedronka
    - education_high_school  : Technikum Nr 1
    - education_high_school  : VI Liceum Ogólnokształcące
    - supermarket            : FRAC
    - specialized_retail     : Atelier
    - gastronomy             : Avanti
    - gastronomy             : DaGrasso
```
</details>
<details><summary><b>Lisa-Kuli 01 (891e286c133ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Lisa-Kuli 01
  stop_id               : 69
  h3_index              : 891e286c133ffff
  hub_id                : 35

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.9277
  local_score_raw       : 1.6995

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 33357343.6175

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 71.0714

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 8514.2261

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 787.3125

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
<details><summary><b>Powst. Warszawy dom studenta 08 (891e286ce17ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Powst. Warszawy dom studenta 08
  stop_id               : 74
  h3_index              : 891e286ce17ffff
  hub_id                : 150

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.8555
  local_score_raw       : 1.6816

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 3823650.1824

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 53.1429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 10086.8559

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1161.2979

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 9x micro_playground
  > 5x convenience_store
  > 4x pharmacy
  > 4x gastronomy
  > 4x personal_services
  > 4x education_preschool
  > 3x supermarket
  > 3x education_high_school
  > 2x micro_parcel_locker
  > 2x park_recreation
  > 1x post_office
  > 1x sports_centre
  > 1x health_clinic
  > 1x micro_atm
  > 1x business_office
  > 1x specialized_retail
  > 1x commercial_zone
  > 1x university_campus
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - supermarket            : Biedronka
    - supermarket            : Delikatesy Hitpol
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
```
</details>
<details><summary><b>Krakowska jedn. wojskowa 01 (891e286c187ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Krakowska jedn. wojskowa 01
  stop_id               : 49
  h3_index              : 891e286c187ffff
  hub_id                : 0

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.7832
  local_score_raw       : 1.6769

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 14543394.6299

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 56.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 8426.3266

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1810.7700

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 11x micro_parcel_locker
  > 9x park_recreation
  > 7x personal_services
  > 7x commercial_zone
  > 6x education_high_school
  > 6x health_clinic
  > 5x specialized_retail
  > 5x micro_playground
  > 5x gastronomy
  > 5x supermarket
  > 4x convenience_store
  > 4x education_preschool
  > 3x shopping_mall
  > 3x micro_atm
  > 3x business_office
  > 2x pharmacy
  > 1x post_office
  > 1x car_services
  > 1x university_campus
  > 1x bank
  > 1x place_of_worship
  > 1x government_central
  > 1x hospital_clinical
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - convenience_store      : Żabka
    - post_office            : Urząd Pocztowy nr 7
    - shopping_mall          : Alton-hurtowniaGSM
    - convenience_store      : Społem
    - convenience_store      : Delikatesy Premium
    - personal_services      : New LOOK
    - specialized_retail     : Detex
    - specialized_retail     : Pepco
    - micro_atm              : Planet Cash
    - education_high_school  : Społeczna Szkoła Podstwowa nr 2
    - education_high_school  : VIII Liceum Ogólnokształcące
    - car_services           : Shell
```
</details>
<details><summary><b>Cieplińskiego 01 (891e286c1afffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Cieplińskiego 01
  stop_id               : 187
  h3_index              : 891e286c1afffff
  hub_id                : 202

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.7110
  local_score_raw       : 1.6520

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 17230190.5202

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 74.9286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 8680.6351

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 588.8247

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 89x gastronomy
  > 45x park_recreation
  > 32x commercial_zone
  > 31x specialized_retail
  > 29x personal_services
  > 16x government_central
  > 15x bank
  > 13x micro_atm
  > 13x convenience_store
  > 12x education_high_school
  > 11x micro_parcel_locker
  > 10x health_clinic
  > 10x university_campus
  > 9x pharmacy
  > 8x micro_playground
  > 8x sports_centre
  > 8x shopping_mall
  > 6x supermarket
  > 5x culture_theatre
  > 5x education_preschool
  > 4x business_office
  > 3x post_office
  > 3x place_of_worship
  > 3x police_station
  > 1x marketplace

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
    - specialized_retail     : Impresja
    - specialized_retail     : Aryton
    - specialized_retail     : Anna Skrzynecka
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

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.3613
  local_score_raw       : -1.5599

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7964.9363

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 6.9466

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

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.2890
  local_score_raw       : -1.6349

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.9286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7964.9363

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Krzemienica działki 03 (891e2b9a277ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Krzemienica działki 03
  stop_id               : 1354
  h3_index              : 891e2b9a277ffff
  hub_id                : 687

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.2168
  local_score_raw       : -1.6476

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.8571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7964.9363

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 0.0000

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

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.1445
  local_score_raw       : -1.6668

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7964.9363

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 2.7591

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

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.0723
  local_score_raw       : -1.6839

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7964.9363

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 2.3342

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>

---

## SUWALKI
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: -0.000, Std: 0.705)
     Rozkład Kartek (unikalne Huby): A: 22, A+: 12, B: 33, C: 45, D: 55, F: 55
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
<details><summary><b>Kowalskiego / Andersa (02) (891f42d18dbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Kowalskiego / Andersa (02)
  stop_id               : 41
  h3_index              : 891f42d18dbffff
  hub_id                : 185

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.4643

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 6018772.1210

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 18.2143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6067.0292

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1357.4597

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 25x micro_playground
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
  > 1x education_preschool
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
<details><summary><b>Pułaskiego / Kowalskiego (07) (891f42d18cbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Pułaskiego / Kowalskiego (07)
  stop_id               : 9
  h3_index              : 891f42d18cbffff
  hub_id                : 61

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.5495
  local_score_raw       : 1.4251

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 1848770.1166

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 19.6429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6067.0292

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1408.0436

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 27x micro_playground
  > 7x park_recreation
  > 4x supermarket
  > 3x education_high_school
  > 3x micro_parcel_locker
  > 3x car_services
  > 3x health_clinic
  > 3x pharmacy
  > 2x gastronomy
  > 2x education_preschool
  > 1x micro_atm
  > 1x personal_services
  > 1x national_stadium
  > 1x place_of_worship
  > 1x post_office

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : Bankomat BZ WBK
    - education_high_school  : Szkoła Podstawowa nr 7
    - micro_parcel_locker    : Paczkomat InPost
    - car_services           : Auto-Szyby-Alarmy
    - health_clinic          : Klinika Implantologiczna
    - pharmacy               : Dbam o Zdrowie (Doz)
    - gastronomy             : Bar Koko
    - micro_parcel_locker    : Paczkomat InPost
    - pharmacy               : Apteka (Samczuk i wspólnicy)
    - pharmacy               : Arnika
    - education_preschool    : Chatka Puchatka
    - education_preschool    : Krecik
```
</details>
<details><summary><b>Kowalskiego / Przedszkole (03) (891f42d1eafffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Kowalskiego / Przedszkole (03)
  stop_id               : 40
  h3_index              : 891f42d1eafffff
  hub_id                : 21

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.0991
  local_score_raw       : 1.3900

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 1769727.5131

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 18.1429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6067.0292

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1464.9806

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 27x micro_playground
  > 8x park_recreation
  > 4x micro_parcel_locker
  > 3x education_high_school
  > 3x health_clinic
  > 3x gastronomy
  > 3x supermarket
  > 2x convenience_store
  > 2x pharmacy
  > 2x national_stadium
  > 1x education_preschool
  > 1x personal_services
  > 1x place_of_worship

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - education_high_school  : Szkoła Podstawowa nr 7
    - health_clinic          : Prywatna przychodnia
    - health_clinic          : Klinika Implantologiczna
    - convenience_store      : Groszek
    - micro_parcel_locker    : Paczkomat InPost
    - micro_parcel_locker    : Paczkomat InPost
    - pharmacy               : Apteka (W. Korzeniowski)
    - pharmacy               : Apteka (Samczuk i wspólnicy)
    - education_preschool    : Chatka Puchatka
    - gastronomy             : Bafra Kebab
    - gastronomy             : BoTo Pizza
    - micro_parcel_locker    : Paczkomat InPost
```
</details>
<details><summary><b>Nowomiejska / Świerkowa (01) (891f42d1a97ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Nowomiejska / Świerkowa (01)
  stop_id               : 407
  h3_index              : 891f42d1a97ffff
  hub_id                : 41

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 98.6486
  local_score_raw       : 1.3259

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 2636595.2920

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 15.2857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6067.0292

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1272.2275

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 22x micro_playground
  > 5x government_central
  > 5x micro_parcel_locker
  > 4x supermarket
  > 2x micro_atm
  > 2x specialized_retail
  > 2x pharmacy
  > 2x education_preschool
  > 1x health_clinic
  > 1x police_station
  > 1x car_services
  > 1x gastronomy
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : Bankomat Cash4You
    - supermarket            : Delikatesy Centrum
    - supermarket            : Biedronka
    - supermarket            : Lewiatan
    - specialized_retail     : JYSK
    - specialized_retail     : Media Expert
    - micro_playground       : urządzenie do Boulderingu
    - health_clinic          : Melius Centrum Rehabilitacji
    - government_central     : Prokuratura Okręgowa w Suwałkach
    - micro_parcel_locker    : Paczkomat InPost
    - micro_parcel_locker    : Paczkomat InPost
    - pharmacy               : Dbam o Zdrowie (Doz)
```
</details>
<details><summary><b>Noniewicza / Stokrotka (05) (891f42d1a1bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Noniewicza / Stokrotka (05)
  stop_id               : 3
  h3_index              : 891f42d1a1bffff
  hub_id                : 78

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 98.1982
  local_score_raw       : 1.2949

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 3204178.6944

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 15.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6067.0292

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 867.2587

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

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Pułaskiego / Studzieniczne (16) (891f42d0367ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Pułaskiego / Studzieniczne (16)
  stop_id               : 121
  h3_index              : 891f42d0367ffff
  hub_id                : 69

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 2.2523
  local_score_raw       : -1.3584

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.2143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6067.0292

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 5.3854

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

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 1.8018
  local_score_raw       : -1.3642

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.1429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6067.0292

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 7.2097

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

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 1.3514
  local_score_raw       : -1.3915

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.2143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6067.0292

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 3.4576

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

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.9009
  local_score_raw       : -1.4156

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.2143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6067.0292

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 2.4310

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

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.4505
  local_score_raw       : -1.4245

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.4286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 3993.0556

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 293.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>

---

## SWINOUJSCIE
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: -0.000, Std: 0.650)
     Rozkład Kartek (unikalne Huby): A: 12, A+: 6, B: 17, C: 24, D: 29, F: 28
[👥 BAZA LUDNOŚCI GUS] ✅ DEMOGRAFIA OK (Odchylenie zaledwie 0.5%)
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
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
<details><summary><b>Matejki / Konstytucji 3 Maja (891f0ec739bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Matejki / Konstytucji 3 Maja
  stop_id               : 63
  h3_index              : 891f0ec739bffff
  hub_id                : 74

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.0746

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 3732247.5848

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 11.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 10627.0833

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1504.4342

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 13x specialized_retail
  > 13x micro_playground
  > 11x gastronomy
  > 6x personal_services
  > 4x education_preschool
  > 4x park_recreation
  > 3x supermarket
  > 3x government_central
  > 3x micro_parcel_locker
  > 3x education_high_school
  > 2x micro_atm
  > 2x culture_theatre
  > 2x pharmacy
  > 2x convenience_store
  > 1x post_office
  > 1x place_of_worship
  > 1x health_clinic
  > 1x sports_centre
  > 1x business_office
  > 1x shopping_mall
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy             : Bar Kopytko
    - gastronomy             : Batista
    - supermarket            : Biedronka
    - micro_atm              : Euronet
    - education_preschool    : Aktywne Przedszkole i Żłobek KOGUT
    - supermarket            : Stokrotka
    - specialized_retail     : H&M
    - specialized_retail     : Reserved
    - specialized_retail     : Mohito
    - specialized_retail     : Medicine
    - specialized_retail     : Cropp
    - culture_theatre        : Multikino
```
</details>
<details><summary><b>Grunwaldzka / Łużycka (891f0ec7357ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Grunwaldzka / Łużycka
  stop_id               : 41
  h3_index              : 891f0ec7357ffff
  hub_id                : 5

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.1379
  local_score_raw       : 1.0207

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 1388017.6232

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 13.3571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 9869.7480

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 819.4774

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 10x micro_playground
  > 5x specialized_retail
  > 4x education_high_school
  > 3x micro_atm
  > 3x supermarket
  > 3x pharmacy
  > 3x convenience_store
  > 3x industrial_zone
  > 2x personal_services
  > 2x micro_parcel_locker
  > 1x health_clinic
  > 1x shopping_mall
  > 1x commercial_zone
  > 1x car_services
  > 1x marketplace
  > 1x education_preschool

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : Bankomat BZ WBK
    - supermarket            : Kaufland
    - health_clinic          : Medi-Raj
    - specialized_retail     : Media Expert
    - supermarket            : Netto
    - supermarket            : POLOmarket
    - personal_services      : Natura
    - pharmacy               : Centrum Zdrowia24H
    - convenience_store      : abc
    - convenience_store      : Żabka
    - specialized_retail     : Pepco
    - pharmacy               : Cosmedica
```
</details>
<details><summary><b>Plac Kościelny (891f0ec7317ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Plac Kościelny
  stop_id               : 81
  h3_index              : 891f0ec7317ffff
  hub_id                : 54

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 98.2759
  local_score_raw       : 0.9633

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 3638424.0843

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 9.2143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 11104.6172

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 999.5213

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 34x gastronomy
  > 30x specialized_retail
  > 21x personal_services
  > 13x park_recreation
  > 12x micro_playground
  > 9x convenience_store
  > 8x pharmacy
  > 7x supermarket
  > 7x health_clinic
  > 6x bank
  > 5x micro_atm
  > 5x education_preschool
  > 4x shopping_mall
  > 3x education_high_school
  > 2x culture_theatre
  > 2x government_central
  > 2x business_office
  > 2x micro_parcel_locker
  > 2x place_of_worship
  > 1x industrial_zone
  > 1x post_office
  > 1x social_support_mops

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy             : Da Grasso
    - gastronomy             : Neptun
    - gastronomy             : Costa
    - supermarket            : Netto
    - bank                   : PKO BP
    - micro_atm              : Bank Pekao
    - gastronomy             : Z kur czy byk
    - education_preschool    : Aktywne Przedszkole i Żłobek KOGUT
    - convenience_store      : Żabka
    - specialized_retail     : Media Expert
    - supermarket            : Netto
    - supermarket            : POLOmarket
```
</details>
<details><summary><b>Chrobrego (891f0ec73a3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Chrobrego
  stop_id               : 27
  h3_index              : 891f0ec73a3ffff
  hub_id                : 86

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 97.4138
  local_score_raw       : 0.9181

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 8823859.8142

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 6.9286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 12107.0911

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 942.7117

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 25x gastronomy
  > 17x park_recreation
  > 15x specialized_retail
  > 14x personal_services
  > 11x convenience_store
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
    - gastronomy             : Z kur czy byk
    - convenience_store      : Żabka
    - convenience_store      : Żabka
    - convenience_store      : Żabka
    - education_preschool    : Niepubliczne przedszkole TYGRYSEK
    - specialized_retail     : Top Secret
```
</details>
<details><summary><b>Kapitanat Portu (891f0ec46dbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Kapitanat Portu
  stop_id               : 46
  h3_index              : 891f0ec46dbffff
  hub_id                : 61

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 96.5517
  local_score_raw       : 0.9173

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 1299830.8948

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 8.4286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 15974.7013

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 289.5330

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 3x gastronomy
  > 2x convenience_store
  > 2x micro_atm
  > 1x national_rail_hub
  > 1x specialized_retail
  > 1x government_central
  > 1x place_of_worship
  > 1x micro_parcel_locker
  > 1x car_services
  > 1x supermarket
  > 1x micro_playground
  > 1x hospital_clinical

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - national_rail_hub      : Świnoujście
    - convenience_store      : Żabka
    - specialized_retail     : Szok
    - micro_atm              : Euronet
    - gastronomy             : China Box
    - government_central     : Zarząd Dróg Miejskich i Żeglugi w Świnoujściu
    - micro_atm              : Pekao SA
    - place_of_worship       : Kaplica szpitalna
    - micro_parcel_locker    : Paczkomat InPost
    - gastronomy             : Bar Bosman
    - car_services           : Orlen
    - gastronomy             : Pub Tawerna
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Przytór - Dworzec PKP (891f0ec438bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Przytór - Dworzec PKP
  stop_id               : 89
  h3_index              : 891f0ec438bffff
  hub_id                : 41

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 4.3103
  local_score_raw       : -1.3804

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 1.9286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 14111.9365

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 2.2397

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Przytór - Dworzec PKP (891f0ec438fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Przytór - Dworzec PKP
  stop_id               : 137
  h3_index              : 891f0ec438fffff
  hub_id                : 98

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 3.4483
  local_score_raw       : -1.4071

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 1.8571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 14111.9365

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1.7907

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

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 2.5862
  local_score_raw       : -1.4122

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 2.2143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 14111.9365

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 0.0000

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

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 1.7241
  local_score_raw       : -1.7778

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.7857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 14111.9365

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Świnoujście Przytór (891f0ec438fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Świnoujście Przytór
  stop_id               : 1040
  h3_index              : 891f0ec438fffff
  hub_id                : 27

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.8621
  local_score_raw       : -2.0332

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 14111.9365

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 2.9696

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>

---

## SZCZECIN
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: 0.000, Std: 0.686)
     Rozkład Kartek (unikalne Huby): A: 92, A+: 47, B: 139, C: 185, D: 231, F: 231
[👥 BAZA LUDNOŚCI GUS] ❌ OSTRZEŻENIE DEMOGRAFICZNE: Odchylenie 27.6%. GUS: 510,367 vs Baza: 400,000
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
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
<details><summary><b>Plac Rodła 29 (891f0e79533ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Plac Rodła 29
  stop_id               : 11529
  h3_index              : 891f0e79533ffff
  hub_id                : 12

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.5567

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 10009407.5085

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 154.2857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7554.3430

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1248.0148

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 91x specialized_retail
  > 77x gastronomy
  > 25x personal_services
  > 16x convenience_store
  > 16x bank
  > 16x government_central
  > 10x micro_parcel_locker
  > 9x micro_atm
  > 9x health_clinic
  > 8x pharmacy
  > 7x education_high_school
  > 6x micro_playground
  > 5x education_preschool
  > 4x supermarket
  > 4x business_office
  > 3x university_campus
  > 3x culture_theatre
  > 3x post_office
  > 3x shopping_mall
  > 3x place_of_worship
  > 3x commercial_zone
  > 2x car_services
  > 2x sports_centre
  > 1x social_support_mops

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

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.8919
  local_score_raw       : 1.5024

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 19619671.4507

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 132.6429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6632.6531

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1108.5560

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
<details><summary><b>Krzywoustego 11 (891f0e79557ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Krzywoustego 11
  stop_id               : 10511
  h3_index              : 891f0e79557ffff
  hub_id                : 72

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.7838
  local_score_raw       : 1.5017

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 6525630.2726

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 131.2857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6841.6106

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 3452.8575

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 59x gastronomy
  > 53x specialized_retail
  > 43x personal_services
  > 21x convenience_store
  > 16x health_clinic
  > 14x bank
  > 11x park_recreation
  > 10x pharmacy
  > 8x supermarket
  > 8x micro_playground
  > 7x education_high_school
  > 6x micro_atm
  > 5x business_office
  > 4x culture_theatre
  > 3x post_office
  > 3x place_of_worship
  > 3x university_campus
  > 3x micro_parcel_locker
  > 2x shopping_mall
  > 2x education_preschool
  > 1x car_services
  > 1x social_support_mops

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - culture_theatre        : Pionier 1907
    - culture_theatre        : Helios
    - gastronomy             : Mak Kwak
    - car_services           : Orlen
    - gastronomy             : Prasad
    - gastronomy             : Green Way
    - convenience_store      : Żabka
    - pharmacy               : Centrum
    - micro_atm              : Pekao SA
    - bank                   : Bank Pekao
    - pharmacy               : Cefarm
    - gastronomy             : China Town
```
</details>
<details><summary><b>Kołłątaja 14 (891f0e7b327ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Kołłątaja 14
  stop_id               : 12714
  h3_index              : 891f0e7b327ffff
  hub_id                : 33

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.6757
  local_score_raw       : 1.4568

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 7648820.1155

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 125.3571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6923.1311

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1865.9826

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 19x specialized_retail
  > 18x gastronomy
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
<details><summary><b>Klonowica Zajezdnia 32 (891f0e7b287ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Klonowica Zajezdnia 32
  stop_id               : 32632
  h3_index              : 891f0e7b287ffff
  hub_id                : 151

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.5676
  local_score_raw       : 1.3698

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 30468373.3963

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 47.1429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 8983.5729

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1590.8952

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 11x micro_playground
  > 7x education_high_school
  > 7x government_central
  > 6x university_campus
  > 5x gastronomy
  > 5x personal_services
  > 4x health_clinic
  > 4x car_services
  > 4x micro_parcel_locker
  > 4x commercial_zone
  > 3x pharmacy
  > 3x park_recreation
  > 2x micro_atm
  > 2x business_office
  > 2x specialized_retail
  > 2x place_of_worship
  > 2x convenience_store
  > 2x industrial_zone
  > 1x post_office
  > 1x sports_centre
  > 1x police_station
  > 1x supermarket
  > 1x education_preschool

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
<details><summary><b>Żdżary skrzyż. nż. (891f0e70c57ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Żdżary skrzyż. nż.
  stop_id               : 96
  h3_index              : 891f0e70c57ffff
  hub_id                : 871

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.5405
  local_score_raw       : -2.0520

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.3571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6621.5027

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 3.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Bolesławice (891f0e7067bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Bolesławice
  stop_id               : 113
  h3_index              : 891f0e7067bffff
  hub_id                : 767

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.4324
  local_score_raw       : -2.0528

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.1429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6621.5027

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 7.0000

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

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.3243
  local_score_raw       : -2.0708

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.2143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6621.5027

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 4.0000

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

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.2162
  local_score_raw       : -2.0730

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.2143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 3687.7689

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 120.5818

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

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.1081
  local_score_raw       : -2.2657

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
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: -0.000, Std: 0.655)
     Rozkład Kartek (unikalne Huby): A: 45, A+: 23, B: 68, C: 90, D: 113, F: 112
[👥 BAZA LUDNOŚCI GUS] ❌ OSTRZEŻENIE DEMOGRAFICZNE: Odchylenie 30.7%. GUS: 248,382 vs Baza: 190,000
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
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
<details><summary><b>Aleja Solidarności (891f565284bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Aleja Solidarności
  stop_id               : 28202
  h3_index              : 891f565284bffff
  hub_id                : 4

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.4088

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 26141382.5993

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 134.4286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6783.4395

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1125.6581

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 107x gastronomy
  > 86x specialized_retail
  > 56x park_recreation
  > 25x personal_services
  > 18x government_central
  > 18x health_clinic
  > 14x bank
  > 14x convenience_store
  > 12x micro_atm
  > 10x commercial_zone
  > 9x university_campus
  > 9x micro_playground
  > 7x culture_theatre
  > 7x micro_parcel_locker
  > 7x place_of_worship
  > 5x business_office
  > 4x pharmacy
  > 4x supermarket
  > 3x marketplace
  > 3x social_support_mops
  > 2x car_services
  > 1x shopping_mall
  > 1x education_preschool
  > 1x post_office
  > 1x education_high_school
  > 1x sports_centre

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - bank                   : Crédit Agricole
    - bank                   : Millennium Bank
    - micro_atm              : Bankomat Millennium
    - bank                   : Millennium Przedsiębiorstwa
    - bank                   : PKO BP
    - government_central     : Poradnia Psychologiczno Pedagogiczna
    - pharmacy               : Puls Uniwersytecka
    - bank                   : ING Bank Śląski
    - convenience_store      : Żabka
    - micro_atm              : PKO BP
    - gastronomy             : Piccolo
    - gastronomy             : Miś
```
</details>
<details><summary><b>Szosa Okrężna (891f5652ecfffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Szosa Okrężna
  stop_id               : 46802
  h3_index              : 891f5652ecfffff
  hub_id                : 113

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.7783
  local_score_raw       : 1.2722

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 37380756.8266

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 71.4286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7126.5678

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1104.7960

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
<details><summary><b>Wyszyńskiego (891f56574c7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Wyszyńskiego
  stop_id               : 10701
  h3_index              : 891f56574c7ffff
  hub_id                : 43

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.5565
  local_score_raw       : 1.2093

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 4611445.1427

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 94.0714

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6250.0000

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 3112.1756

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 53x personal_services
  > 29x micro_playground
  > 25x specialized_retail
  > 14x gastronomy
  > 14x health_clinic
  > 10x convenience_store
  > 8x micro_parcel_locker
  > 6x pharmacy
  > 4x education_preschool
  > 3x bank
  > 3x post_office
  > 3x commercial_zone
  > 2x supermarket
  > 2x business_office
  > 2x place_of_worship
  > 2x shopping_mall
  > 2x sports_centre
  > 2x park_recreation
  > 2x education_high_school
  > 1x micro_atm
  > 1x marketplace
  > 1x social_support_mops

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : Bankomat Cash4You
    - bank                   : Millennium Bank
    - pharmacy               : Gemini
    - personal_services      : Studio Fryzur Efekt
    - supermarket            : POLOmarket
    - gastronomy             : Azzurro
    - gastronomy             : Cukiernia Franciszek Pokojski
    - bank                   : BNP Paribas Polska
    - micro_parcel_locker    : Paczkomat InPost
    - micro_parcel_locker    : Paczkomat InPost
    - micro_parcel_locker    : Paczkomat InPost
    - pharmacy               : Dbam o Zdrowie
```
</details>
<details><summary><b>Żwirki i Wigury (891f5652c4fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Żwirki i Wigury
  stop_id               : 70204
  h3_index              : 891f5652c4fffff
  hub_id                : 1

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.3348
  local_score_raw       : 1.1850

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 10202088.3922

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 70.0714

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7022.3263

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1696.5595

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 65x park_recreation
  > 36x personal_services
  > 16x health_clinic
  > 15x micro_playground
  > 11x commercial_zone
  > 7x specialized_retail
  > 6x micro_parcel_locker
  > 6x convenience_store
  > 6x gastronomy
  > 5x education_high_school
  > 4x car_services
  > 2x supermarket
  > 2x business_office
  > 2x education_preschool
  > 2x sports_centre
  > 1x pharmacy
  > 1x post_office
  > 1x bank
  > 1x culture_theatre
  > 1x micro_atm
  > 1x hospital_clinical

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - supermarket            : Biedronka
    - pharmacy               : Dbam o Zdrowie
    - education_high_school  : Szkoła Podstawowa nr 25
    - education_high_school  : Zasadnicza Szkoła Zawodowa w SOSW
    - personal_services      : Isabell Studio Spa
    - post_office            : Poczta Polska
    - micro_parcel_locker    : Paczkomat InPost
    - micro_parcel_locker    : Paczkomat InPost
    - convenience_store      : Żabka
    - convenience_store      : Żabka
    - convenience_store      : Żabka
    - health_clinic          : Holis-Med
```
</details>
<details><summary><b>Ślaskiego (891f56574c3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Ślaskiego
  stop_id               : 10603
  h3_index              : 891f56574c3ffff
  hub_id                : 184

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.1131
  local_score_raw       : 1.1666

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 5750291.9152

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 80.4286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6542.5177

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 2142.4277

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 35x personal_services
  > 28x micro_playground
  > 22x specialized_retail
  > 11x health_clinic
  > 10x gastronomy
  > 8x convenience_store
  > 6x micro_parcel_locker
  > 6x park_recreation
  > 5x pharmacy
  > 4x bank
  > 3x post_office
  > 3x place_of_worship
  > 3x shopping_mall
  > 3x education_preschool
  > 2x education_high_school
  > 1x micro_atm
  > 1x supermarket
  > 1x sports_centre
  > 1x university_campus
  > 1x commercial_zone
  > 1x marketplace

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : Bankomat Cash4You
    - bank                   : Millennium Bank
    - pharmacy               : Gemini
    - bank                   : Crédit Agricole
    - gastronomy             : Zahir Kebab
    - personal_services      : Studio Fryzur Efekt
    - supermarket            : POLOmarket
    - health_clinic          : Przychodnia Rodzinna na Skarpie
    - personal_services      : Salon Psiej Urody
    - specialized_retail     : Ciuchowe Love
    - gastronomy             : Cukiernia Franciszek Pokojski
    - bank                   : BNP Paribas Polska
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Łążyn II (891f5656a2fffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Łążyn II
  stop_id               : 99140
  h3_index              : 891f5656a2fffff
  hub_id                : 239

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 1.1086
  local_score_raw       : -1.8460

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.2143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6395.0179

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 54.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Młyniec II - Dolina Drwęcy (891f5656507ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Młyniec II - Dolina Drwęcy
  stop_id               : 99030
  h3_index              : 891f5656507ffff
  hub_id                : 232

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.8869
  local_score_raw       : -1.8512

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.4286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6395.0179

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 30.2182

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Dobrzejewice - Cmentarz (891f5656a0bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Dobrzejewice - Cmentarz
  stop_id               : 99138
  h3_index              : 891f5656a0bffff
  hub_id                : 132

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.6652
  local_score_raw       : -1.8630

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.2143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6395.0179

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 45.0000

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

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.4435
  local_score_raw       : -1.8811

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 2.8571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6395.0179

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Dzikowo (891f5655e43ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Dzikowo
  stop_id               : 99110
  h3_index              : 891f5655e43ffff
  hub_id                : 431

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.2217
  local_score_raw       : -1.9165

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 2.4286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 6395.0179

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>

---

## TROJMIASTO
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: -0.000, Std: 0.694)
     Rozkład Kartek (unikalne Huby): A: 169, A+: 85, B: 254, C: 339, D: 423, F: 423
[👥 BAZA LUDNOŚCI GUS] Brak profilu w CITY_BASELINES
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
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
<details><summary><b>Gdańsk Główny (891f09b2467ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Gdańsk Główny
  stop_id               : 7500
  h3_index              : 891f09b2467ffff
  hub_id                : 205

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.7250

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 33475844.3013

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 367.9286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 11463.8448

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 289.3224

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
<details><summary><b>Jaśkowa Dolina 03 (891f7248acfffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Jaśkowa Dolina 03
  stop_id               : 1594
  h3_index              : 891f7248acfffff
  hub_id                : 99

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.9409
  local_score_raw       : 1.5773

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 37180004.8221

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 142.5714

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 10135.1351

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 2083.5847

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 90x personal_services
  > 61x specialized_retail
  > 54x gastronomy
  > 39x health_clinic
  > 23x micro_atm
  > 17x park_recreation
  > 16x convenience_store
  > 16x micro_parcel_locker
  > 13x commercial_zone
  > 11x business_office
  > 10x bank
  > 10x micro_playground
  > 9x pharmacy
  > 8x government_central
  > 6x education_high_school
  > 4x supermarket
  > 4x post_office
  > 4x place_of_worship
  > 3x education_preschool
  > 2x culture_theatre
  > 2x police_station
  > 2x shopping_mall
  > 1x regional_rail_hub
  > 1x sports_centre
  > 1x car_services
  > 1x industrial_zone
  > 1x university_campus
  > 1x social_support_mops

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy             : Fukafe
    - bank                   : Kasa Stefczyka
    - pharmacy               : Manhattan
    - bank                   : Millennium Bank
    - gastronomy             : Chinkalnia
    - gastronomy             : Xo Thai
    - gastronomy             : Bar Maciuś
    - supermarket            : Eurospar
    - post_office            : Poczta Polska
    - gastronomy             : Sphinx
    - personal_services      : Skin Revolution
    - pharmacy               : Dr. Max
```
</details>
<details><summary><b>Brama Wyżynna 05 (891f09b208bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Brama Wyżynna 05
  stop_id               : 1028
  h3_index              : 891f09b208bffff
  hub_id                : 425

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.8819
  local_score_raw       : 1.5442

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 13351438.9083

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 232.8571

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 12985.5411

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 360.3317

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 131x gastronomy
  > 47x specialized_retail
  > 46x park_recreation
  > 31x personal_services
  > 24x micro_atm
  > 15x government_central
  > 12x convenience_store
  > 11x bank
  > 11x shopping_mall
  > 11x place_of_worship
  > 9x health_clinic
  > 7x pharmacy
  > 7x culture_theatre
  > 7x commercial_zone
  > 6x micro_playground
  > 4x post_office
  > 3x micro_parcel_locker
  > 3x police_station
  > 2x supermarket
  > 2x university_campus
  > 2x education_preschool
  > 1x social_support_mops
  > 1x marketplace

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy             : La Famiglia Pizza
    - post_office            : Urząd Pocztowy Gdańsk 50
    - bank                   : Millennium Bank
    - gastronomy             : Retro
    - gastronomy             : Santorini
    - gastronomy             : Costa Coffee
    - government_central     : Izba Administracji Skarbowej w Gdańsku
    - gastronomy             : Pizzeria Napoli
    - pharmacy               : Ratuszowa
    - gastronomy             : Lodziarnia Grycan
    - gastronomy             : Original Burger
    - gastronomy             : Ferber
```
</details>
<details><summary><b>Piekarnicza 03 (891f7249bb7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Piekarnicza 03
  stop_id               : 1723
  h3_index              : 891f7249bb7ffff
  hub_id                : 432

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.8228
  local_score_raw       : 1.4270

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 18781828.8340

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 87.7143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 10957.1326

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 3518.2388

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 96x park_recreation
  > 22x specialized_retail
  > 15x gastronomy
  > 11x micro_parcel_locker
  > 11x commercial_zone
  > 10x personal_services
  > 10x micro_playground
  > 8x car_services
  > 5x government_central
  > 5x business_office
  > 5x health_clinic
  > 4x convenience_store
  > 4x industrial_zone
  > 3x micro_atm
  > 3x supermarket
  > 3x education_high_school
  > 2x pharmacy
  > 2x post_office
  > 1x culture_theatre
  > 1x education_preschool
  > 1x shopping_mall
  > 1x place_of_worship

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : Planet Cash
    - supermarket            : Carrefour
    - culture_theatre        : Cinema1
    - government_central     : Urząd Miejski w Gdańsku
    - car_services           : EDCservice
    - business_office        : BlastLab
    - government_central     : Centrum Pracy Socjalnej 9 (MOPR)
    - education_high_school  : I Gdańskie Liceum Katolickie im. św. Wojciecha
    - education_high_school  : Katolicka Szkoła Podstawowa im. Św. Wojciecha
    - specialized_retail     : JYSK
    - specialized_retail     : H&M
    - specialized_retail     : KappAhl
```
</details>
<details><summary><b>Galeria Bałtycka 02 (891f7248adbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Galeria Bałtycka 02
  stop_id               : 2024
  h3_index              : 891f7248adbffff
  hub_id                : 203

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.7637
  local_score_raw       : 1.3902

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 10218717.8725

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 170.5714

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 10244.8086

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1019.6652

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 114x specialized_retail
  > 55x personal_services
  > 54x gastronomy
  > 21x health_clinic
  > 15x micro_parcel_locker
  > 13x micro_atm
  > 13x micro_playground
  > 11x commercial_zone
  > 8x convenience_store
  > 7x business_office
  > 7x industrial_zone
  > 6x bank
  > 6x government_central
  > 4x supermarket
  > 4x park_recreation
  > 3x pharmacy
  > 3x post_office
  > 2x sports_centre
  > 2x social_support_mops
  > 2x shopping_mall
  > 2x education_high_school
  > 1x regional_rail_hub
  > 1x culture_theatre
  > 1x place_of_worship
  > 1x car_services
  > 1x marketplace
  > 1x education_preschool

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy             : McDonald's
    - gastronomy             : KFC
    - bank                   : Millennium Bank
    - gastronomy             : Hacjenda
    - convenience_store      : Żabka
    - pharmacy               : Dr. Max
    - gastronomy             : Burger King
    - health_clinic          : Almed Przychodnia Stomatologiczna
    - health_clinic          : Dentysta Klonowa
    - personal_services      : Golibroda Gdański
    - bank                   : PKO BP
    - health_clinic          : Enel-med
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Wejherowo Kąpino Dolne 01 n/ż (891f0d24203ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Wejherowo Kąpino Dolne 01 n/ż
  stop_id               : 101
  h3_index              : 891f0d24203ffff
  hub_id                : 359

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.2953
  local_score_raw       : -2.9061

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 8809.6007

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 19.0000

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

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.2363
  local_score_raw       : -2.9159

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.9286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 4988.5509

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 45.2268

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Bojano Graniczna 04 (891f0996dd3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Bojano Graniczna 04
  stop_id               : 31624
  h3_index              : 891f0996dd3ffff
  hub_id                : 1192

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.1772
  local_score_raw       : -2.9372

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5693.3744

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 143.3462

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Bojano Dębowa Karczma 02 (891f0996d9bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Bojano Dębowa Karczma 02
  stop_id               : 31625
  h3_index              : 891f0996d9bffff
  hub_id                : 411

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.1181
  local_score_raw       : -2.9662

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5762.7119

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 100.5978

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

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.0591
  local_score_raw       : -3.1663

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.1429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 8809.6007

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>

---

## WARSZAWA
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: -0.000, Std: 0.536)
     Rozkład Kartek (unikalne Huby): A: 472, A+: 236, B: 707, C: 943, D: 1178, F: 1178
[👥 BAZA LUDNOŚCI GUS] ❌ OSTRZEŻENIE DEMOGRAFICZNE: Odchylenie 71.2%. GUS: 3,081,843 vs Baza: 1,800,000
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
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
<details><summary><b>Grodzisk Mazowiecki (891f522114bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Grodzisk Mazowiecki
  stop_id               : 34165
  h3_index              : 891f522114bffff
  hub_id                : 17

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 2.0007

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 16814071.7354

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 65.9286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 10465.3826

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 469.0104

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 162x park_recreation
  > 12x gastronomy
  > 12x specialized_retail
  > 12x personal_services
  > 9x government_central
  > 8x micro_playground
  > 7x health_clinic
  > 7x micro_parcel_locker
  > 6x convenience_store
  > 6x commercial_zone
  > 5x education_high_school
  > 5x industrial_zone
  > 4x pharmacy
  > 3x micro_atm
  > 2x bank
  > 2x supermarket
  > 2x culture_theatre
  > 2x social_support_mops
  > 1x post_office
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
<details><summary><b>Pruszków (891f522760bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Pruszków
  stop_id               : 4905
  h3_index              : 891f522760bffff
  hub_id                : 47

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.9788
  local_score_raw       : 1.8875

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 24677160.5470

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 36.9286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 10752.3203

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1117.6291

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 60x park_recreation
  > 10x personal_services
  > 10x specialized_retail
  > 9x gastronomy
  > 8x micro_parcel_locker
  > 8x convenience_store
  > 7x micro_playground
  > 6x health_clinic
  > 4x industrial_zone
  > 3x education_high_school
  > 2x micro_atm
  > 2x post_office
  > 2x government_central
  > 2x education_preschool
  > 1x bank
  > 1x sports_centre
  > 1x supermarket
  > 1x pharmacy
  > 1x regional_rail_hub
  > 1x culture_theatre
  > 1x business_office
  > 1x commercial_zone

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
<details><summary><b>Pruszków Kościuszki (891f5227667ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Pruszków Kościuszki
  stop_id               : 624411
  h3_index              : 891f5227667ffff
  hub_id                : 49

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.9576
  local_score_raw       : 1.8193

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 16435641.6394

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 35.7143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 8930.4955

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1810.8157

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 46x park_recreation
  > 34x personal_services
  > 24x gastronomy
  > 23x specialized_retail
  > 18x micro_playground
  > 15x micro_parcel_locker
  > 13x health_clinic
  > 12x convenience_store
  > 11x bank
  > 10x micro_atm
  > 8x education_preschool
  > 5x pharmacy
  > 5x business_office
  > 5x government_central
  > 4x education_high_school
  > 3x supermarket
  > 2x culture_theatre
  > 2x post_office
  > 2x commercial_zone
  > 1x university_campus
  > 1x place_of_worship
  > 1x car_services
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - pharmacy               : Apteka Centralna
    - convenience_store      : Żabka
    - bank                   : Millennium Bank
    - bank                   : mBank
    - gastronomy             : Kale
    - gastronomy             : Palermo Pizza & Pasta
    - bank                   : Santander
    - bank                   : Crédit Agricole
    - bank                   : Bank Pekao
    - bank                   : Skok Stefczyka
    - convenience_store      : Społem
    - personal_services      : Krystyna
```
</details>
<details><summary><b>Warszawa Ochota (891f53c93c7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Warszawa Ochota
  stop_id               : 33498
  h3_index              : 891f53c93c7ffff
  hub_id                : 68

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.9364
  local_score_raw       : 1.8169

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 11173942.2400

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 31.6857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 14742.0147

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 624.8933

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 96x park_recreation
  > 31x gastronomy
  > 26x personal_services
  > 20x health_clinic
  > 19x commercial_zone
  > 13x convenience_store
  > 12x micro_atm
  > 11x micro_parcel_locker
  > 9x micro_playground
  > 7x specialized_retail
  > 5x business_office
  > 5x government_central
  > 4x pharmacy
  > 3x education_preschool
  > 3x car_services
  > 3x education_high_school
  > 2x supermarket
  > 2x culture_theatre
  > 2x social_support_mops
  > 1x bank
  > 1x post_office
  > 1x sports_centre
  > 1x national_rail_hub
  > 1x police_station
  > 1x university_campus
  > 1x industrial_zone
  > 1x place_of_worship

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - supermarket            : Biedronka
    - gastronomy             : Trattoria da Antonio
    - gastronomy             : Gaga
    - pharmacy               : Dbam o Zdrowie
    - health_clinic          : Art Gyn
    - pharmacy               : Słoneczna
    - convenience_store      : Żabka
    - bank                   : Millennium Bank
    - gastronomy             : Telesajgon
    - convenience_store      : Żabka
    - post_office            : Poczta Polska
    - sports_centre          : 147 Break
```
</details>
<details><summary><b>Grodzisk Maz. Kościuszki (891f52213bbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Grodzisk Maz. Kościuszki
  stop_id               : 585931
  h3_index              : 891f52213bbffff
  hub_id                : 54

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.9151
  local_score_raw       : 1.7803

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 9321399.5482

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 50.0714

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 9249.5960

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 455.8630

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
<details><summary><b>Borzęcin Duży Borki (891f5237333ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Borzęcin Duży Borki
  stop_id               : 617401
  h3_index              : 891f5237333ffff
  hub_id                : 2699

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.1061
  local_score_raw       : -1.8485

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 10154.4102

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1.0238

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Bronisława Czecha - Las (891f53cd2dbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Bronisława Czecha - Las
  stop_id               : 202301
  h3_index              : 891f53cd2dbffff
  hub_id                : 2857

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.0849
  local_score_raw       : -1.9264

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 10154.4102

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 0.0000

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

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.0636
  local_score_raw       : -2.1562

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 1937.5427

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 46.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Góra Rzeczna (891f52aed47ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Góra Rzeczna
  stop_id               : 185902
  h3_index              : 891f52aed47ffff
  hub_id                : 2535

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.0424
  local_score_raw       : -2.1588

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 239667.2573

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 95.1261

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 203.0000

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

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.0212
  local_score_raw       : -2.2024

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 1491568.8050

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 96.5903

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 32.1375

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
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: 0.000, Std: 0.722)
     Rozkład Kartek (unikalne Huby): A: 142, A+: 72, B: 214, C: 285, D: 356, F: 355
[👥 BAZA LUDNOŚCI GUS] ❌ OSTRZEŻENIE DEMOGRAFICZNE: Odchylenie 42.7%. GUS: 912,971 vs Baza: 640,000
[✅]  POI Parquet 100% Valid (Matematyka Huffa działa)
[✅]  POP Parquet 100% Valid
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
<details><summary><b>PL. GRUNWALDZKI (891e2040993ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : PL. GRUNWALDZKI
  stop_id               : 4893
  h3_index              : 891e2040993ffff
  hub_id                : 620

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.4196

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 36642070.2976

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 148.6429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 9726.4438

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1119.2590

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 72x gastronomy
  > 44x specialized_retail
  > 42x university_campus
  > 25x personal_services
  > 19x micro_atm
  > 16x health_clinic
  > 14x convenience_store
  > 12x micro_parcel_locker
  > 11x bank
  > 10x micro_playground
  > 9x education_high_school
  > 8x pharmacy
  > 7x industrial_zone
  > 6x park_recreation
  > 5x business_office
  > 5x commercial_zone
  > 4x culture_theatre
  > 3x post_office
  > 3x car_services
  > 1x supermarket
  > 1x place_of_worship
  > 1x education_preschool
  > 1x shopping_mall
  > 1x government_central

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - bank                   : Santander
    - bank                   : Millennium Bank
    - micro_atm              : Santander
    - supermarket            : Biedronka
    - micro_atm              : Euronet
    - micro_atm              : Santander
    - business_office        : Wrocławski Instytut Zastosowań Informacji Przestrzennej i Sztucznej Inteligencji
    - health_clinic          : Endokrynolog Grabiński Marek
    - personal_services      : Kulesza
    - gastronomy             : Pizza Hut
    - convenience_store      : Żabka
    - gastronomy             : Cure Coffee
```
</details>
<details><summary><b>Strzegomska (krzyżówka) (891e204015bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Strzegomska (krzyżówka)
  stop_id               : 5296
  h3_index              : 891e204015bffff
  hub_id                : 197

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.9298
  local_score_raw       : 1.3587

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 23997592.2077

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 95.5000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 9567.9012

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 3271.2719

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 19x micro_parcel_locker
  > 18x micro_playground
  > 14x gastronomy
  > 9x personal_services
  > 8x convenience_store
  > 7x pharmacy
  > 6x micro_atm
  > 6x education_preschool
  > 5x bank
  > 5x supermarket
  > 4x car_services
  > 4x education_high_school
  > 4x health_clinic
  > 4x park_recreation
  > 3x business_office
  > 3x specialized_retail
  > 2x shopping_mall
  > 2x post_office
  > 2x place_of_worship
  > 2x commercial_zone
  > 1x culture_theatre
  > 1x university_campus
  > 1x government_central
  > 1x sports_centre
  > 1x police_station
  > 1x industrial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - gastronomy             : Dom Czebureka
    - bank                   : Millennium
    - shopping_mall          : Hala Strzegomska
    - car_services           : Shell
    - convenience_store      : Żabka
    - personal_services      : Sun Tower
    - convenience_store      : Żabka
    - culture_theatre        : Miejska Biblioteka Publiczna
    - car_services           : Škoda
    - business_office        : Psboy.pl - kursy wideo
    - business_office        : Keyshorts.com - keyboard stickers
    - supermarket            : Biedronka
```
</details>
<details><summary><b>Pomorska (891e2040dcbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Pomorska
  stop_id               : 1595
  h3_index              : 891e2040dcbffff
  hub_id                : 298

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.8596
  local_score_raw       : 1.3380

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 15105813.1375

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 92.4286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 11195.8555

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 2670.6996

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 50x gastronomy
  > 42x personal_services
  > 19x convenience_store
  > 19x specialized_retail
  > 18x micro_playground
  > 14x park_recreation
  > 10x health_clinic
  > 8x education_high_school
  > 8x micro_parcel_locker
  > 6x micro_atm
  > 6x industrial_zone
  > 5x social_support_mops
  > 5x university_campus
  > 4x government_central
  > 4x education_preschool
  > 3x pharmacy
  > 3x business_office
  > 3x commercial_zone
  > 1x police_station
  > 1x culture_theatre
  > 1x supermarket
  > 1x bank
  > 1x post_office
  > 1x place_of_worship
  > 1x sports_centre
  > 1x marketplace

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - personal_services      : Kukła Nail
    - pharmacy               : Pod Skrzydłem Anioła
    - gastronomy             : Burger 22
    - personal_services      : Rossmann
    - convenience_store      : Żabka
    - personal_services      : Wrocławski Golibroda
    - gastronomy             : Pomiędzy
    - convenience_store      : Żabka
    - gastronomy             : Mewa
    - social_support_mops    : Zespół Terenowej Pracy Socjalnej nr 1
    - health_clinic          : Platinum
    - specialized_retail     : Serwis RTV
```
</details>
<details><summary><b>Kliniki - Politechnika Wrocławska (891e2040987ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Kliniki - Politechnika Wrocławska
  stop_id               : 4757
  h3_index              : 891e2040987ffff
  hub_id                : 612

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.7893
  local_score_raw       : 1.2929

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 79988831.2642

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 88.0714

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 9907.1207

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 611.9661

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 45x university_campus
  > 21x gastronomy
  > 12x health_clinic
  > 10x park_recreation
  > 5x industrial_zone
  > 4x convenience_store
  > 4x bank
  > 3x micro_atm
  > 3x business_office
  > 3x personal_services
  > 3x culture_theatre
  > 3x micro_playground
  > 3x government_central
  > 2x pharmacy
  > 2x education_high_school
  > 1x post_office
  > 1x hospital_clinical
  > 1x police_station
  > 1x sports_centre
  > 1x education_preschool
  > 1x social_support_mops
  > 1x commercial_zone

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - micro_atm              : Santander
    - business_office        : Wrocławski Instytut Zastosowań Informacji Przestrzennej i Sztucznej Inteligencji
    - pharmacy               : Pod Kaliną
    - gastronomy             : Lody włoskie & amerykańskie
    - post_office            : FUP Wrocław 48
    - pharmacy               : Polon
    - gastronomy             : El Gordito
    - gastronomy             : Starbucks
    - convenience_store      : Krokus
    - gastronomy             : Greco
    - university_campus      : Erasmus+
    - health_clinic          : Polident
```
</details>
<details><summary><b>Młodych Techników Akademia Sztuk Teatralnych (891e2040c73ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Młodych Techników Akademia Sztuk Teatralnych
  stop_id               : 5519
  h3_index              : 891e2040c73ffff
  hub_id                : 810

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.7191
  local_score_raw       : 1.2843

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 16563323.7200

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 67.9286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 13970.1099

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 1651.2578

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 21x gastronomy
  > 16x micro_playground
  > 12x health_clinic
  > 10x education_high_school
  > 9x convenience_store
  > 9x park_recreation
  > 7x personal_services
  > 7x micro_parcel_locker
  > 6x university_campus
  > 6x commercial_zone
  > 5x micro_atm
  > 5x supermarket
  > 4x government_central
  > 3x social_support_mops
  > 3x pharmacy
  > 3x education_preschool
  > 2x post_office
  > 2x car_services
  > 2x specialized_retail
  > 2x bank
  > 2x industrial_zone
  > 1x police_station
  > 1x sports_centre
  > 1x place_of_worship
  > 1x shopping_mall

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - post_office            : Wrocław 57
    - gastronomy             : Doner House
    - convenience_store      : Przystanek
    - car_services           : Circle K
    - police_station         : Komisariat Policji Wrocław-Stare Miasto
    - supermarket            : Delikatesy Centrum
    - health_clinic          : Endo-Med
    - convenience_store      : Żabka
    - social_support_mops    : Miejski Ośrodek Pomocy Społecznej ZOBU
    - social_support_mops    : Zespół Terenowej Pracy Socjalnej nr 1
    - gastronomy             : Sawara Gyros
    - pharmacy               : Ginsana
```
</details>

#### NAJSŁABSZE PRZYSTANKI (BOTTOM 5)
<details><summary><b>Oleśnica - ul. Wileńska (cmentarz) (891e207259bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Oleśnica - ul. Wileńska (cmentarz)
  stop_id               : 164
  h3_index              : 891e207259bffff
  hub_id                : 401

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.3511
  local_score_raw       : -2.2191

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.2143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7147.4236

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Janówek (891e22b1403ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Janówek
  stop_id               : 364
  h3_index              : 891e22b1403ffff
  hub_id                : 1239

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.2458
  local_score_raw       : -2.2728

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
<details><summary><b>Durok - skrzy. (obr. Groblice) (891e207b63bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Durok - skrzy. (obr. Groblice)
  stop_id               : 60
  h3_index              : 891e207b63bffff
  hub_id                : 1107

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.2458
  local_score_raw       : -2.2728

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
<details><summary><b>Kopiec (891e200b54bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Kopiec
  stop_id               : 255
  h3_index              : 891e200b54bffff
  hub_id                : 939

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.1404
  local_score_raw       : -2.3488

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 1550.7980

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 61.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Siekierowice Szkoła (891e200841bffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Siekierowice Szkoła
  stop_id               : 194
  h3_index              : 891e200841bffff
  hub_id                : 748

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.0702
  local_score_raw       : -2.5643

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 763.4014

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 63.2112

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>

---

## ZIELONA-GORA
#### 🛡️ DASHBOARD ASERCJI PIPELINU (100% Populacji Przystanków)
```text
[✅ ZERO NULLS & INFS] Pętla policzyła wszystko bez pustych i uszkodzonych komórek.
[📈 ROZKŁAD STATYSTYCZNY] ✅ Z-Score ROZKŁAD VALID (Mean: 0.000, Std: 0.686)
     Rozkład Kartek (unikalne Huby): A: 26, A+: 14, B: 40, C: 53, D: 66, F: 66
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
<details><summary><b>Dworzec Główny (891f192f1a7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Dworzec Główny
  stop_id               : 28
  h3_index              : 891f192f1a7ffff
  hub_id                : 200

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 100.0000
  local_score_raw       : 1.5569

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 9825667.1750

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 35.2857

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7808.9819

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 550.3326

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
<details><summary><b>Centrum (891f192f1abffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Centrum
  stop_id               : 29
  h3_index              : 891f192f1abffff
  hub_id                : 140

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.6226
  local_score_raw       : 1.5021

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 19676202.2911

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 24.6429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7660.4555

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 814.9750

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
    - bank                   : Millennium Bank
    - micro_atm              : Bankomat BZ WBK
    - bank                   : Millennium Bank Przedsiębiorstwa
    - pharmacy               : Dbam o Zdrowie
    - convenience_store      : Spar Express
    - gastronomy             : Kuchnia u Jasia
    - convenience_store      : Żabka
    - gastronomy             : La Tulipe Noire
    - business_office        : Port2000
    - gastronomy             : Niger
    - specialized_retail     : Karibu
    - bank                   : Santander Consumer Bank
```
</details>
<details><summary><b>Staszica (891f192f1a7ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Staszica
  stop_id               : 12
  h3_index              : 891f192f1a7ffff
  hub_id                : 39

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 99.2453
  local_score_raw       : 1.3687

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 7502741.3411

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 23.1429

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7805.4638

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 801.2603

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
  stop_id               : 146
  h3_index              : 891f192f397ffff
  hub_id                : 213

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 98.8679
  local_score_raw       : 1.2538

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 10218394.1390

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 14.4286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7233.7260

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 2041.3597

[TOP OBIEKTY POI (CATCHMENT 500m)]
  > 19x micro_playground
  > 11x micro_parcel_locker
  > 10x convenience_store
  > 7x health_clinic
  > 7x pharmacy
  > 6x supermarket
  > 6x personal_services
  > 3x car_services
  > 3x education_high_school
  > 3x education_preschool
  > 2x micro_atm
  > 2x post_office
  > 2x specialized_retail
  > 2x commercial_zone
  > 2x park_recreation
  > 1x gastronomy
  > 1x bank
  > 1x culture_theatre
  > 1x place_of_worship
  > 1x government_central
  > 1x university_campus

  [WSKAZANE KONKRETNE INSTYTUCJE]
    - car_services           : Circle K
    - micro_atm              : Bankomat BZ WBK
    - post_office            : UP Zielona Góra 10
    - gastronomy             : Cafe San Remo
    - supermarket            : Chata Polska
    - convenience_store      : Żabka
    - convenience_store      : Chata Polska
    - convenience_store      : Edbal
    - health_clinic          : Centrum Stomatologii
    - convenience_store      : Żabka
    - pharmacy               : Dr. Max
    - personal_services      : Ewa
```
</details>
<details><summary><b>Wiśniowa (891f192f3b3ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Wiśniowa
  stop_id               : 128
  h3_index              : 891f192f3b3ffff
  hub_id                : 35

[OCENA Z-SCORE & RANK]
  grade                 : A+
  local_percentile      : 98.4906
  local_score_raw       : 1.2462

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 6738463.5666

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 14.4286

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 7847.0899

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 2483.5700

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
<details><summary><b>Elektrociepłownia (891f192f573ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Elektrociepłownia
  stop_id               : 115
  h3_index              : 891f192f573ffff
  hub_id                : 146

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 1.8868
  local_score_raw       : -2.0208

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 5188493.8455

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.2143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 27.6539

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 7.7467

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
<details><summary><b>Ochla Kożuchowska (891f192d2afffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Ochla Kożuchowska
  stop_id               : 234
  h3_index              : 891f192d2afffff
  hub_id                : 133

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 1.5094
  local_score_raw       : -2.0295

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.5714

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5531.5663

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 47.9433

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Leśniczówka (891f192ca57ffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Leśniczówka
  stop_id               : 721
  h3_index              : 891f192ca57ffff
  hub_id                : 207

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 1.1321
  local_score_raw       : -2.1090

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.7143

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5531.5663

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 11.0000

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

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.7547
  local_score_raw       : -2.1967

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.0000

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5531.5663

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 80.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>
<details><summary><b>Kiełpin las (891e2692ddbffff)</b></summary>

```text

[IDENTYFIKACJA]
  stop_name             : Kiełpin las
  stop_id               : 871
  h3_index              : 891e2692ddbffff
  hub_id                : 239

[OCENA Z-SCORE & RANK]
  grade                 : F
  local_percentile      : 0.3774
  local_score_raw       : -2.3616

[FILAR 1: INFRASTRUKTURA]
  infra_score           : 0.0000

[FILAR 2: TRANSPORT GTFS]
  transit_freq          : 0.5714

[FILAR 3: NIERUCHOMOŚCI RCN]
  market_val            : 5531.5663

[FILAR 4: GĘSTOŚĆ POPULACJI]
  pop_val               : 0.0000

[TOP OBIEKTY POI (CATCHMENT 500m)]
  Brak sklasyfikowanych obiektów w okolicy.
```
</details>

---
