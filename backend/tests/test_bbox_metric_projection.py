"""
Unit tests for metric CRS bounding box calculation in EPSG:2180.
"""

import pytest
import geopandas as gpd
from shapely.geometry import Point
import importlib

_mod = importlib.import_module("scripts.pipeline.02_collect_stops")
compute_city_bbox_metric = _mod.compute_city_bbox_metric


def test_compute_city_bbox_metric_bounds():
    # Stops in central Warsaw (EPSG:4326)
    pts = [Point(21.01, 52.23), Point(21.02, 52.24)]
    gdf = gpd.GeoDataFrame(geometry=pts, crs="EPSG:4326")
    
    bbox = compute_city_bbox_metric(gdf, buffer_meters=5000.0)
    min_lon, min_lat, max_lon, max_lat = bbox
    
    # Bounding box must be in Polish WGS84 range and around 10-15 km in extent, NOT 5000 degrees!
    assert 20.8 < min_lon < 21.01
    assert 21.02 < max_lon < 21.2
    assert 52.1 < min_lat < 52.23
    assert 52.24 < max_lat < 52.4
    assert (max_lon - min_lon) < 0.3
    assert (max_lat - min_lat) < 0.3
