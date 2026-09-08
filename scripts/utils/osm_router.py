"""
scripts/utils/osm_router.py
High-performance OSM transit router using momepy, networkx, and cKDTree in EPSG:2180.
Generates street- and track-aligned LineString geometries for transit routes.
"""

from pathlib import Path
from typing import List, Tuple, Optional
import geopandas as gpd
import pandas as pd
import numpy as np
import networkx as nx
import momepy
from scipy.spatial import cKDTree
from shapely.geometry import LineString, Point
from pyproj import Transformer


class OSMTransitRouter:
    """
    In-memory graph router for transit routes based on local OSM infrastructure extracts.
    Operates strictly in Polish metric projection EPSG:2180 for geometric precision.
    """

    def __init__(self, infrastructure_gpkg: Path):
        self.gpkg_path = Path(infrastructure_gpkg)
        self._graph: Optional[nx.Graph] = None
        self._tree: Optional[cKDTree] = None
        self._nodes: Optional[List[Tuple[float, float]]] = None
        self._transformer_to_2180 = Transformer.from_crs("EPSG:4326", "EPSG:2180", always_xy=True)
        self._transformer_to_4326 = Transformer.from_crs("EPSG:2180", "EPSG:4326", always_xy=True)

    def is_available(self) -> bool:
        return self.gpkg_path.exists()

    def _ensure_graph(self):
        if self._graph is not None:
            return
        if not self.is_available():
            raise FileNotFoundError(f"Brak pliku infrastruktury OSM: {self.gpkg_path}")

        # Wczytanie warstwy lines
        lines = gpd.read_file(self.gpkg_path, layer="lines")
        if lines.empty:
            return

        # Filtrowanie dróg i torowisk
        tags = lines['all_tags'].astype(str) if 'all_tags' in lines.columns else pd.Series("", index=lines.index)
        railway_col = lines['railway'].astype(str) if 'railway' in lines.columns else pd.Series("", index=lines.index)

        mask = (
            tags.str.contains('highway', na=False) |
            railway_col.isin(['tram', 'light_rail', 'rail']) |
            tags.str.contains('railway=>tram', na=False) |
            tags.str.contains('railway=>light_rail', na=False)
        )
        filtered = lines[mask].copy()
        if filtered.empty:
            filtered = lines.copy()

        # Eksplozja do pojedynczych geometrii LineString
        exploded = filtered.explode(index_parts=False)
        exploded = exploded[exploded.geometry.geom_type == 'LineString']
        if exploded.empty:
            return

        # Reprojekcja do EPSG:2180 (układ metryczny)
        lines_2180 = exploded.to_crs(epsg=2180)

        # Budowa grafu sieciowego z momepy
        G = momepy.gdf_to_nx(lines_2180, approach='primal', length='length')
        self._graph = G

        # Budowa przestrzennego drzewa cKDTree węzłów
        self._nodes = list(G.nodes)
        node_coords = np.array(self._nodes)
        if len(node_coords) > 0:
            self._tree = cKDTree(node_coords)

    def route_stops_sequence(
        self,
        stop_lon_lat_list: List[Tuple[float, float]],
        mode: str = "bus"
    ) -> Tuple[Optional[LineString], str]:
        """
        Trasuje sekwencję przystanków (lista krotek (lon, lat) w EPSG:4326).
        Zwraca krotkę (LineString w EPSG:4326, geometry_source).
        """
        if len(stop_lon_lat_list) < 2:
            if len(stop_lon_lat_list) == 1:
                pt = stop_lon_lat_list[0]
                return LineString([pt, pt]), "osm_matched"
            return None, "empty"

        try:
            self._ensure_graph()
        except Exception:
            return LineString(stop_lon_lat_list), "direct_fallback"

        if self._graph is None or self._tree is None or not self._nodes:
            return LineString(stop_lon_lat_list), "direct_fallback"

        # Transformacja przystanków do EPSG:2180
        stops_2180 = [self._transformer_to_2180.transform(lon, lat) for lon, lat in stop_lon_lat_list]

        all_pts_2180 = []
        routed_segments = 0
        fallback_segments = 0

        for i in range(len(stops_2180) - 1):
            pt_u = stops_2180[i]
            pt_v = stops_2180[i + 1]

            # Znajdź najbliższe węzły grafu drogowego
            dist_u, idx_u = self._tree.query([pt_u[0], pt_u[1]])
            dist_v, idx_v = self._tree.query([pt_v[0], pt_v[1]])

            segment_pts = None

            # Dopuszczalny bufor dojścia do drogi (500m)
            if dist_u <= 500 and dist_v <= 500:
                node_u = self._nodes[idx_u]
                node_v = self._nodes[idx_v]

                if node_u == node_v:
                    segment_pts = [pt_u, node_u, pt_v]
                    routed_segments += 1
                else:
                    try:
                        path_nodes = nx.shortest_path(self._graph, source=node_u, target=node_v, weight='length')
                        segment_pts = [pt_u] + list(path_nodes) + [pt_v]
                        routed_segments += 1
                    except (nx.NetworkXNoPath, nx.NodeNotFound):
                        segment_pts = None

            if segment_pts is None:
                segment_pts = [pt_u, pt_v]
                fallback_segments += 1

            if not all_pts_2180:
                all_pts_2180.extend(segment_pts)
            else:
                if all_pts_2180[-1] == segment_pts[0]:
                    all_pts_2180.extend(segment_pts[1:])
                else:
                    all_pts_2180.extend(segment_pts)

        # Usunięcie kolejnych duplikatów współrzędnych
        clean_pts_2180 = [all_pts_2180[0]]
        for pt in all_pts_2180[1:]:
            if pt != clean_pts_2180[-1]:
                clean_pts_2180.append(pt)

        if len(clean_pts_2180) < 2:
            clean_pts_2180.append(clean_pts_2180[0])

        # Reprojekcja do EPSG:4326
        clean_pts_4326 = [self._transformer_to_4326.transform(x, y) for x, y in clean_pts_2180]

        if routed_segments > 0 and fallback_segments == 0:
            source = "osm_matched"
        elif routed_segments > 0:
            source = "osm_hybrid"
        else:
            source = "direct_fallback"

        return LineString(clean_pts_4326), source
