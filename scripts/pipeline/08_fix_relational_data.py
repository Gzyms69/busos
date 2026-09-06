"""
Offline / Fallback Cadastral Relational Parser (GML 3.2 + XLink).

Rola modułu:
Ten skrypt służy jako dedykowany parser awaryjny (offline fallback) dla miast,
które posiadają surowe paczki katastralne GML 3.2 z relacjami XLink (np. Łódź, Giżycko)
umieszczone bezpośrednio w katalogu data/cities/{city}/rcn/*.gml.

W standardowym automatycznym potoku zadanie to realizuje Krok 07 (WFS Harvester).
Moduł ten jest zachowany jako narzędzie specjalistyczne do przetwarzania danych offline.
"""

import geopandas as gpd
import pandas as pd
from lxml import etree
from pathlib import Path
import os
import argparse
import json
import sys

def get_data_dir():
    return Path(os.environ.get("PIPELINE_DATA_DIR", "data"))

def clean_ref(ref):
    if not ref: return None
    return ref.split('/')[-1].replace('#', '')

def fix_city_rcn(city_name, data_dir):
    city_dir = data_dir / "cities" / city_name / "rcn"
    gml_files = list(city_dir.glob("*.gml"))
    
    if not gml_files:
        print(f"__PIPELINE_METRICS__={json.dumps({'city': city_name, 'status': 'no_gml'})}")
        return False

    all_features = []
    ns = {
        'rcn': 'urn:gugik:specyfikacje:gmlas:rejestrcennieruchomosci:1.0',
        'gml': 'http://www.opengis.net/gml/3.2',
        'xlink': 'http://www.w3.org/1999/xlink'
    }

    for gml_path in gml_files:
        try:
            tree = etree.parse(str(gml_path))
            root = tree.getroot()
            
            documents = {doc.get('{http://www.opengis.net/gml/3.2}id'): doc.xpath('./rcn:dataSporzadzeniaDokumentu/text()', namespaces=ns)[0] 
                        for doc in root.xpath('//rcn:RCN_Dokument', namespaces=ns) if doc.xpath('./rcn:dataSporzadzeniaDokumentu/text()', namespaces=ns)}

            lokale = {}
            for lok in root.xpath('//rcn:RCN_Lokal', namespaces=ns):
                gml_id = lok.get('{http://www.opengis.net/gml/3.2}id')
                pos = lok.xpath('.//gml:pos/text()', namespaces=ns)
                pow_uzyt = lok.xpath('./rcn:powUzytkowaLokalu/text()', namespaces=ns)
                
                if pos:
                    coords = [float(x) for x in pos[0].split()]
                    if len(coords) == 2:
                        if coords[0] > 6000000: easting, northing = coords[0], coords[1]
                        elif coords[1] > 6000000: easting, northing = coords[1], coords[0]
                        else: easting, northing = coords[0], coords[1]
                        
                        lokale[gml_id] = {
                            'easting': easting, 
                            'northing': northing,
                            'm2': float(pow_uzyt[0]) if pow_uzyt else None
                        }

            nieruchomosci = {nier.get('{http://www.opengis.net/gml/3.2}id'): clean_ref(nier.xpath('./rcn:lokal/@xlink:href', namespaces=ns)[0])
                            for nier in root.xpath('//rcn:RCN_Nieruchomosc', namespaces=ns) if nier.xpath('./rcn:lokal/@xlink:href', namespaces=ns)}

            for trans in root.xpath('//rcn:RCN_Transakcja', namespaces=ns):
                price = trans.xpath('./rcn:cenaTransakcjiBrutto/text()', namespaces=ns)
                doc_ref = trans.xpath('./rcn:podstawaPrawna/@xlink:href', namespaces=ns)
                n_refs = trans.xpath('./rcn:nieruchomosc/@xlink:href', namespaces=ns)
                final_date = documents.get(clean_ref(doc_ref[0])) if doc_ref else None
                
                for nr in n_refs:
                    n_id = clean_ref(nr)
                    if n_id in nieruchomosci:
                        l_id = nieruchomosci[n_id]
                        if l_id in lokale:
                            all_features.append({
                                'tran_cena_brutto': float(price[0]) if price else 0,
                                'dok_data': final_date,
                                'easting': lokale[l_id]['easting'],
                                'northing': lokale[l_id]['northing'],
                                'm2': lokale[l_id]['m2']
                            })
        except Exception as e:
            print(f"  [WARN] GML structure error in {gml_path.name}: {e}", file=sys.stderr)

    if all_features:
        df = pd.DataFrame(all_features)
        df['dok_data'] = pd.to_datetime(df['dok_data'], errors='coerce')
        df = df[df['dok_data'] >= '2025-01-01']
        
        if not df.empty:
            sample_e = df['easting'].iloc[0]
            detected_crs = "EPSG:2180"
            if sample_e > 5000000:
                zone = int(str(int(sample_e))[0])
                if zone == 5: detected_crs = "EPSG:2177"
                elif zone == 6: detected_crs = "EPSG:2178"
                elif zone == 7: detected_crs = "EPSG:2179"
            
            gdf = gpd.GeoDataFrame(df, geometry=gpd.points_from_xy(df.easting, df.northing), crs=detected_crs)
            if detected_crs != "EPSG:2180": 
                gdf = gdf.to_crs("EPSG:2180")
            
            out_file = data_dir / "cities" / city_name / "02_spatial" / "transactions.gpkg"
            out_file.parent.mkdir(parents=True, exist_ok=True)
            
            if out_file.exists():
                try:
                    existing = gpd.read_file(out_file)
                    gdf = pd.concat([existing, gdf], ignore_index=True)
                except Exception as e:
                    print(f"  [WARN] Failed to read existing RCN for append ({city_name}): {e}", file=sys.stderr)
                    
            gdf.to_file(out_file, driver="GPKG", layer="transactions")
            
            metrics = {"city": city_name, "recovered": len(gdf), "crs": detected_crs}
            print(f"__PIPELINE_METRICS__={json.dumps(metrics)}")
            return True

    metrics = {"city": city_name, "recovered": 0, "status": "no_valid_data"}
    print(f"__PIPELINE_METRICS__={json.dumps(metrics)}")
    return False

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--city", help="Miasto", required=True)
    parser.add_argument("--force", action="store_true")
    args = parser.parse_args()

    data_dir = get_data_dir()
    fix_city_rcn(args.city, data_dir)

if __name__ == "__main__":
    main()
