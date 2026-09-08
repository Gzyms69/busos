"""
Unit tests for vectorized GEOS distance computation in stop-transaction bridge generation.
"""

import pytest
import geopandas as gpd
from shapely.geometry import Point
import pandas as pd

def test_vectorized_distance_equivalence():
    stops = gpd.GeoDataFrame({
        'stop_id': ['s1', 's2'],
        'geometry': [Point(0, 0), Point(100, 100)]
    }, crs="EPSG:2180")

    joined = gpd.GeoDataFrame({
        'stop_id': ['s1', 's2', 's1'],
        'geometry': [Point(3, 4), Point(100, 105), Point(0, 10)]
    }, crs="EPSG:2180")

    stop_geoms = stops.set_index('stop_id')['geometry']
    joined_stop_geom = joined['stop_id'].map(stop_geoms)
    distances = joined.geometry.distance(joined_stop_geom).round(1)

    assert list(distances) == [5.0, 5.0, 10.0]
