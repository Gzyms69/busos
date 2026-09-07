# BusOS Tactical Roadmap & Session State (SSOT)

> **Document Status:** `ACTIVE SSOT` (Updated after Task 1, 2, 3 Completion)  
> **Target Scale:** 30 Calibrated Cities Live on OCI Cloud & Vercel Global Edge.

---

## 1. Executive Context & Verified Baseline State

- **Frontend**: Live on Vercel Global Edge ([https://busos.czerwinskidawid.pl](https://busos.czerwinskidawid.pl)), Next.js 16.2.1 Turbopack, React 19, Deck.gl v9, MapLibre GL.
  - **Build Status**: `npm run build` succeeds in **2.2s**; `npx tsc --noEmit` passes with **0 errors**.
- **Backend**: Live on Oracle Cloud Infrastructure Ampere A1 ARM64 ([https://api.busos.czerwinskidawid.pl](https://api.busos.czerwinskidawid.pl)), FastAPI 0.115+, DuckDB 1.2+, Qdrant Vector Engine (port 6333), Caddy 2 with auto Let's Encrypt TLS 1.3 / HTTP/3.
  - **Health Telemetry**: `{"status":"healthy","version":"9.5.0","active_cities_count":30,"qdrant_connected":true}`.
- **Contract SSOT**: `docs/contracts/DATA_DICTIONARY_AND_API_SSOT.md` locked.

---

## 2. Completed Milestones (Session Verification Log)

### Task 1: DuckDB Dynamic Schema Introspection (`backend/app/spatial_engine.py`)
- **Problem Resolved**: Wcześniejszy Binder Error 500 (`Referenced column "name" not found`) w Warszawie, Wrocławiu i Poznaniu został definitywnie wyeliminowany.
- **Rozwiązanie**: Silnik bada schemat `poi_matrix.parquet` w locie (`DESCRIBE`) i automatycznie mapuje brakujące kolumny `name`, `category`, `tier` na bazie wag grawitacji Huffa $w$.
- **Dowód weryfikacji**:
  ```text
  Warszawa: 767 POIs, 12 komórek demograficznych (HTTP 200)
  Wrocław:  437 POIs, 13 komórek demograficznych (HTTP 200)
  Kielce:   755 POIs, 13 komórek demograficznych (HTTP 200)
  ```

### Task 2: Unified Analytical H3 Grid (Step 17 Pipeline & FastAPI `/api/v1/hexagons`)
- **Nowy krok potoku**: `scripts/pipeline/17_build_h3_grid.py` realizuje wielodomenową fuzję przystanków GTFS, siatki demograficznej GUS 250m, transakcji notarialnych RCN oraz wag POI do stałej siatki Uber H3 (Resolution 8).
- **Metryki**: Wskaźnik Pustyni Transportowej (`transit_desert_index`), flaga wykluczenia (`is_transit_desert`), znormalizowany `transport_score` (0-100), mediana cen RCN.
- **Wygenerowane i zweryfikowane zbiory**:
  ```text
  Kielce:   843 komórki H3 (0.31s) | 197 pustyń transportowych
  Warszawa: 4438 komórek H3 (3.40s) | 1549 pustyń transportowych
  Wrocław:  2286 komórek H3 (0.98s) | 264 pustynie transportowe
  Poznań:   4952 komórki H3 (1.95s) | 644 pustynie transportowe
  Kraków:   2064 komórki H3 (1.24s) | 403 pustynie transportowe
  Łódź:     1742 komórki H3 (0.32s) | 264 pustynie transportowe
  ```
- **Nowy endpoint API**: `GET /api/v1/hexagons?city={city}&min_pop=0` zwraca dane siatki ze schematem Pydantic `HexagonsResponse`.

### Task 3: Optymalizacja Frontendu i Deck.gl GPU Compute
- **Wdrożenie `AbortController`**: `MapContainer.tsx` i `api-client.ts` przerywają zaległe żądania sieciowe przy szybkim przełączaniu miast, zapobiegając race conditions i zamrażaniu wątku WebGL.
- **Natywny GPU `H3HexagonLayer`**:
  - Zastąpiono powolny `HexagonLayer` (liczony na CPU z surowych punktów RCN) natywnym `H3HexagonLayer` z `@deck.gl/geo-layers`.
  - Warstwa renderuje pre-kalkulowane komórki H3 Res 8 z wysokością 3D proporcjonalną do `transport_score` oraz kolorystyką wyróżniającą Pustynie Transportowe (czerwony alert) i gęstą obsługę (szmaragd/błękit).
- **Odblokowanie kliknięć przystanków**: Słupki 3D nie przechwytują już kliknięć myszy (`pickable: false` lub hierarchia warstw), a przystanki (`ScatterplotLayer`) renderują się na wierzchu z priorytetem interakcji.
- **Dwupoziomowy Tooltip**: Prezentacja parametrów przystanku lub pełnego profilu komórki H3 (populacja, odjazdy/h, cena m² RCN).

---

## 3. Decyzje Architektoniczne z Sesji Grill-Me (LOCKED)

1. **Automatyzacja CI/CD i Wdrażania**:
   - **Frontend (Vercel)**: Automatyczny deploy przy `git push origin main`.
   - **Backend (OCI ARM64)**: Dodano `.github/workflows/deploy-backend.yml`. Po skonfigurowaniu secretów (`OCI_HOST`, `OCI_SSH_KEY`, `OCI_USER`) push do `main` automatycznie łączy się po SSH i bez przestoju przeładowuje kontenery Docker Compose na chmurze OCI.
2. **Modularyzacja API & Maksymalizacja Danych**:
   - Rozbicie monolitycznego `main.py` na dedykowane routery domenowe:
     - `app/routers/hubs.py` (granularne metryki węzłów, POI, ludność, widok composite `/full`)
     - `app/routers/hexagons.py` (siatka H3, profil komórki, przystanki w hexie)
     - `app/routers/market.py` (wyciąganie danych z `rcn_stats.json` i transakcji)
     - `app/routers/analytics.py` (The Investment List - pustynie TDI, The Axe List - TCRP 100, wyceny POI)
     - `app/routers/ai.py` (wektorowe podobieństwo Qdrant)
3. **100% Kompatybilności Wstecznej**:
   - Istniejące endpointy (`/api/v1/hubs`, `/details`, `/hexagons`, `/population`, `/transactions`, `/health`) zostają w 100% zachowane, gwarantując zero przestojów na Vercelu.
4. **Zautomatyzowany Test Suite przez Tier-2 Sub-Worker**:
   - Wygenerowanie kompleksowego pakietu testów `pytest` dla wszystkich nowych i starych endpointów za pomocą FastMCP `chinese-worker` (`worker_generate_tests`).

---

## 4. Action Items dla Kolejnej Sesji

1. **Krok 1: Refaktoryzacja Modułowa FastAPI (`backend/app/routers/`)**:
   - Implementacja domen: `hubs.py`, `hexagons.py`, `market.py`, `analytics.py`, `ai.py`.
   - Podpięcie danych z `rcn_stats.json`, `poi_valuation.json` i `h3_grid.parquet`.
2. **Krok 2: Wygenerowanie Test Suite przez `chinese-worker`**:
   - Uruchomienie `worker_generate_tests` dla routerów backendu i weryfikacja `pytest tests/ -v`.
3. **Krok 3: Przebudowa Frontendu na Palantir Blueprint.js**:
   - Integracja `@blueprintjs/core@^6.16.0` i `@blueprintjs/table`.
   - Podpięcie widoków tabelarycznych: "The Investment List" i "The Axe List".
4. **Krok 4: Integracja Qdrant i Wdrożenie OCI**:
   - Aktywacja wektorowego wyszukiwania podobnych węzłów (`similar-hubs`).
   - Push i deployment na OCI przez GitHub Actions.

---

## 5. Handoff Bootstrap Prompt (Kopiuj-Wklej do Nowej Sesji)

```markdown
Kontynuujemy rozwój BusOS zgodnie z protokołem Session Handoff.

1. Załaduj wymagane skille: `spec-driven-development`, `skill-backend-architect`, `skill-frontend-architect`, `skill-qa-engineer`.
2. Przeczytaj pliki SSOT: `NEXT_SESSION_PLAN.md` oraz `docs/contracts/DATA_DICTIONARY_AND_API_SSOT.md`.
3. Stan bazowy:
   - DuckDB w `backend/app/spatial_engine.py` działa z dynamiczną introspekcją kolumn (Warszawa, Wrocław, Kraków zwracają pełne POI i populację).
   - Pipeline Step 17 (`scripts/pipeline/17_build_h3_grid.py`) i endpoint `/api/v1/hexagons` działają dla wszystkich miast.
   - Deck.gl renderuje natywny GPU `H3HexagonLayer` z `AbortController` przy przełączaniu miast (0 lagów, odblokowane kliknięcia przystanków).
   - Utworzono workflow CI/CD `.github/workflows/deploy-backend.yml` dla OCI.
   - `npm run build` w `urban-dashboard` kompiluje się w 2.2s (0 błędów TS).
4. Cele nowej sesji (zgodnie z ustaleniami grill-me):
   - Cel 1: Rozbicie backendu na modułowe routery (`backend/app/routers/`: hubs, hexagons, market, analytics, ai) i wyciągnięcie pełni danych (rcn_stats, poi_valuation, The Investment List, The Axe List) przy zachowaniu 100% kompatybilności wstecznej.
   - Cel 2: Wygenerowanie test suite pytest przez FastMCP `chinese-worker` (`worker_generate_tests`).
   - Cel 3: Rozpoczęcie migracji panelu na Palantir Blueprint.js (@blueprintjs/core, @blueprintjs/table) i integracja z Qdrant.
```

