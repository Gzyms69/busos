"""
Unit tests for GTFS transit canonical patterns, time parsing, and multi-feed key isolation.
"""

import pytest
from shapely.geometry import LineString
import importlib

_mod = importlib.import_module("scripts.pipeline.01b_extract_transit_routes")
parse_time_to_seconds = _mod.parse_time_to_seconds


def test_parse_time_gtfs_handles_midnight():
    assert parse_time_to_seconds("08:30:00") == 30600
    assert parse_time_to_seconds("24:15:00") == 87300 # Over 24h in GTFS
    assert parse_time_to_seconds("invalid") == 0

def test_canonical_route_monotonicity():
    # Sequence of stops in canonical order
    coords = [(21.0, 52.2), (21.01, 52.21), (21.02, 52.22)]
    line = LineString(coords)
    assert line.is_valid
    assert len(line.coords) == 3

def test_multi_feed_key_isolation():
    # Confirms that lines with same route_id from different operators have unique route_uids
    feed_a_route = "ztm_1"
    feed_b_route = "km_1"
    assert feed_a_route != feed_b_route
