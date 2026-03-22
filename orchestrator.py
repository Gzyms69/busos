import argparse
import os
import sys
import json
import logging
from pathlib import Path
import subprocess
import concurrent.futures
from datetime import datetime
import threading

def setup_logger(data_dir):
    log_dir = Path(data_dir) / "logs"
    log_dir.mkdir(parents=True, exist_ok=True)
    
    logger = logging.getLogger("TurboOrchestrator")
    logger.setLevel(logging.DEBUG)
    
    # Konsola: INFO i wyżej, czysty format dla użytkownika
    ch = logging.StreamHandler()
    ch.setLevel(logging.INFO)
    formatter = logging.Formatter('%(asctime)s | %(message)s', datefmt='%H:%M:%S')
    ch.setFormatter(formatter)
    
    # Plik: Pełny zapis wszystkiego
    fh = logging.FileHandler(log_dir / "pipeline_run.log")
    fh.setLevel(logging.DEBUG)
    fh.setFormatter(logging.Formatter('%(asctime)s - %(levelname)s - %(message)s'))
    
    logger.addHandler(ch)
    logger.addHandler(fh)
    return logger

class TurboOrchestrator:
    def __init__(self, data_dir, cities, force_update, max_workers):
        self.data_dir = Path(data_dir).resolve()
        self.force_update = force_update
        self.max_workers = max_workers
        self.state_file = self.data_dir / ".pipeline_state.json"
        self._lock = threading.Lock()
        # POPRAWKA: Logger musi byc zainicjowany PRZED _load_state,
        # bo _load_state moze uzyc self.logger.warning()
        self.logger = setup_logger(self.data_dir)
        self.state = self._load_state()
        
        cities_root = self.data_dir / "cities"
        if cities == ['all']:
            if cities_root.exists():
                self.target_cities = sorted([d.name for d in cities_root.iterdir() if d.is_dir() and d.name != 'rail'])
            else:
                self.target_cities = []
        else:
            parsed_cities = []
            for c in cities:
                parsed_cities.extend([x.strip() for x in c.split(',') if x.strip()])
            self.target_cities = parsed_cities

        # EKSPORT ZMIENNYCH ŚRODOWISKOWYCH (FIX: PRZEKAZYWANIE FILTRÓW)
        os.environ["PIPELINE_DATA_DIR"] = str(self.data_dir)
        os.environ["PIPELINE_WORKERS"] = str(self.max_workers)
        if cities != ['all']:
            os.environ["PIPELINE_CITIES"] = ",".join(self.target_cities)
        else:
            os.environ.pop("PIPELINE_CITIES", None)

    def _load_state(self):
        with self._lock:
            if not self.force_update and self.state_file.exists():
                try:
                    with open(self.state_file, 'r') as f:
                        return json.load(f)
                except (json.JSONDecodeError, IOError) as e:
                    self.logger.warning(f"Nie udalo sie wczytac state: {e}")
                    return {}
            return {}

    def _save_state(self):
        with self._lock:
            with open(self.state_file, 'w') as f:
                json.dump(self.state, f, indent=4)

    def stream_process(self, cmd, label):
        """Uruchamia proces i natychmiastowo przekazuje każdą linię na ekran."""
        process = subprocess.Popen(
            cmd,
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT,
            text=True,
            env=os.environ.copy(),
            bufsize=1, # Line buffered
            universal_newlines=True
        )
        
        metrics = None
        # Przekazujemy output do loggera (by trafił do pliku) i na ekran
        for line in iter(process.stdout.readline, ""):
            if line.startswith("__PIPELINE_METRICS__="):
                try:
                    metrics = json.loads(line.split("=", 1)[1])
                except json.JSONDecodeError:
                    pass
            else:
                clean_line = line.strip()
                if clean_line:
                    # To teraz trafia do FileHandler i StreamHandler
                    self.logger.info(f"[{label:^10}] {clean_line}")
        
        process.stdout.close()
        return process.wait(), metrics

    def run_global_step(self, step_id, script_path):
        self.logger.info(f"\n" + "="*80)
        self.logger.info(f" START KROKU: {step_id} ({Path(script_path).name})")
        self.logger.info("="*80)
        
        if not self.force_update and self.state.get(step_id) == "SUCCESS":
            self.logger.info(f"--- POMINIĘTO (już wykonane) ---")
            return True

        cmd = [sys.executable, str(script_path)]
        if self.force_update: cmd.append("--force")

        rc, metrics = self.stream_process(cmd, "GLOBAL")
        
        if rc == 0:
            self.state[step_id] = "SUCCESS"
            self._save_state()
            if metrics:
                self.logger.info(f"--- RAPORT KOŃCOWY KROKU ---")
                self.logger.info(json.dumps(metrics, indent=2))
            return True
        else:
            self.logger.error(f"KROK GLOBALNY {step_id} PADŁ (RC={rc})")
            return False

    def run_city_parallel_step(self, step_id, script_path):
        self.logger.info(f"\n" + "="*80)
        self.logger.info(f" START KROKU RÓWNOLEGŁEGO: {step_id} (Workers: {self.max_workers})")
        self.logger.info("="*80)
        
        # ODŚWIEŻANIE LISTY MIAST (Fix dla nowo utworzonych folderów w Step 01)
        cities_root = self.data_dir / "cities"
        if cities_root.exists():
            current_on_disk = sorted([d.name for d in cities_root.iterdir() if d.is_dir() and d.name != 'rail'])
            # Jeśli użytkownik nie podał konkretnej listy, bierzemy wszystko co jest na dysku
            if not self.target_cities or self.target_cities == ['all']:
                self.target_cities = current_on_disk
            # Zmieniamy listę roboczą dla tego kroku, by uwzględnić nowe foldery
            cities_to_scan = self.target_cities
        else:
            cities_to_scan = []

        cities_to_do = []
        for city in cities_to_scan:
            city_step_key = f"{step_id}_{city}"
            if self.force_update or self.state.get(city_step_key) != "SUCCESS":
                cities_to_do.append(city)

        if not cities_to_do:
            self.logger.info(f"--- WSZYSTKIE MIASTA GOTOWE ---")
            return True

        failed = []
        collected_metrics = []
        
        with concurrent.futures.ThreadPoolExecutor(max_workers=self.max_workers) as executor:
            futures = {}
            for city in cities_to_do:
                cmd = [sys.executable, str(script_path), "--city", city]
                if self.force_update:
                    cmd.append("--force")
                futures[executor.submit(self.stream_process, cmd, city)] = city
            
            for future in concurrent.futures.as_completed(futures):
                city = futures[future]
                rc, metrics = future.result()
                
                if rc == 0:
                    self.state[f"{step_id}_{city}"] = "SUCCESS"
                    self._save_state()
                    if metrics: collected_metrics.append(metrics)
                    self.logger.info(f"[DONE] {city}")
                else:
                    self.logger.error(f"[FAIL] {city} (RC={rc})")
                    failed.append(city)

        if collected_metrics:
            self.logger.info(f"\n--- PODSUMOWANIE ZBIORCZE: {step_id} ---")
            keys = list(collected_metrics[0].keys())
            header = " | ".join([f"{str(k).upper():<15}" for k in keys])
            self.logger.info(header)
            self.logger.info("-" * len(header))
            for m in collected_metrics:
                row = " | ".join([f"{str(m.get(k, '')):<15}" for k in keys])
                self.logger.info(row)

        if failed:
            self.logger.error(f"Krok {step_id} nie powiódł się dla: {', '.join(failed)}")
            return False
        return True

def main():
    parser = argparse.ArgumentParser(description="PANCERNY ORKIESTRATOR 3.1 - TRANSPARENT")
    parser.add_argument("--data-dir", default="data", help="Katalog roboczy")
    parser.add_argument("--cities", nargs="+", default=["all"], help="Miasta lub 'all'")
    parser.add_argument("--force-update", action="store_true", help="Wymuś nadpisanie danych")
    parser.add_argument("--workers", type=int, default=2, help="Ilość równoległych procesów (OGR2OGR)")
    parser.add_argument("--step", type=int, help="Uruchom tylko jeden krok")
    
    args = parser.parse_args()
    orch = TurboOrchestrator(args.data_dir, args.cities, args.force_update, args.workers)
    
    pipeline = [
        (0, "scripts/pipeline/00_init_environment.py", True),
        (1, "scripts/pipeline/01_fetch_gtfs.py", True),
        (2, "scripts/pipeline/02_collect_stops.py", False),
        (3, "scripts/pipeline/03_download_osm_pbf.py", True),
        (4, "scripts/pipeline/04_download_population.py", True),
        (5, "scripts/pipeline/05_extract_infrastructure.py", True),
        (6, "scripts/pipeline/06_identify_rcn_teryt.py", True),
        (7, "scripts/pipeline/07_harvest_rcn_omnibus.py", True),
        # POPRAWKA P1-2: Krok 08 usuniety (dead code -- czytal z nieistniejacej sciezki rcn/)
        # (8, "scripts/pipeline/08_fix_relational_data.py", False),
        (9, "scripts/pipeline/09_fix_suwalki_geometry.py", True),   # POPRAWKA P1-4: Global zamiast 29x parallel
        (10, "scripts/pipeline/10_unify_schemas.py", False),
        (11, "scripts/pipeline/11_build_master_db.py", True),
        (12, "scripts/pipeline/12_audit_data_quality.py", False),
        (13, "scripts/pipeline/13_isolate_city_data.py", False),
        (14, "scripts/pipeline/14_build_isc_valuation.py", False),
        (15, "scripts/pipeline/15_compute_stop_dna.py", False)
    ]

    orch.logger.info("=== PANCERNY ORKIESTRATOR 3.2 - SYSTEM TRANSPARENTNY ===")
    
    for num, script, is_global in pipeline:
        if args.step is not None and args.step != num:
            continue
            
        success = False
        if is_global:
            success = orch.run_global_step(f"step_{num:02d}", script)
        else:
            success = orch.run_city_parallel_step(f"step_{num:02d}", script)
            
        if not success and args.step is None:
            orch.logger.error(f"ZATRZYMANO POTOK na kroku {num}. Sprawdź logi powyżej.")
            sys.exit(1)

    orch.logger.info("\n=== POTOK ZAKOŃCZONY SUKCESEM. DANE SĄ GOTOWE DO ANALIZY. ===")
    
    # KRYTYCZNA POPRAWKA: Twarde wyjście, by ubić ewentualne zwisy w ThreadPoolExecutor
    os._exit(0)

if __name__ == "__main__":
    main()
