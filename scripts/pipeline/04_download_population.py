import requests
import zipfile
import io
import os
from pathlib import Path
import urllib3

# Wyłączamy ostrzeżenia SSL dla źródeł rządowych
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

# Zweryfikowany link bezpośredni dostarczony przez użytkownika
DIRECT_DATA_URL = "https://geo.stat.gov.pl/atom-web/download/?fileId=73995564fe6126cc9d8eafd0c7fe822f&name=NSP2021_TOT_GRID250m_GPKG.zip"
DEST_DIR = Path("data/poland/population")

def download_population():
    DEST_DIR.mkdir(parents=True, exist_ok=True)
    target_path = DEST_DIR / "nsp2021_grid250m.gpkg"
    
    if target_path.exists():
        print(f"Siatka populacji już istnieje w: {target_path}")
        return

    print(f"Pobieranie zweryfikowanej siatki populacji NSP 2021 (format GPKG)...")
    print(f"Źródło: {DIRECT_DATA_URL}")
    
    try:
        # Pobieranie paczki danych
        r = requests.get(DIRECT_DATA_URL, verify=False, stream=True, timeout=600)
        r.raise_for_status()
        
        print("Rozpakowywanie...")
        with zipfile.ZipFile(io.BytesIO(r.content)) as z:
            # Szukamy głównego pliku GPKG wewnątrz ZIP
            gpkg_names = [n for n in z.namelist() if n.endswith('.gpkg')]
            if gpkg_names:
                # Wybieramy najwiekszy plik lub pierwszy pasujący
                gpkg_name = gpkg_names[0]
                z.extract(gpkg_name, path=DEST_DIR)
                
                old_path = DEST_DIR / gpkg_name
                if old_path != target_path:
                    if target_path.exists(): os.remove(target_path)
                    os.rename(str(old_path), str(target_path))
                
                print(f"SUKCES! Siatka populacji zapisana w: {target_path}")
            else:
                print("BŁĄD: Nie znaleziono pliku .gpkg wewnątrz pobranej paczki ZIP.")

    except Exception as e:
        print(f"BŁĄD KRYTYCZNY podczas pobierania populacji: {e}")

if __name__ == "__main__":
    download_population()
