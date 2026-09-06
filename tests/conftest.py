"""
Standard test fixtures for the BusOS platform.
Provides mock spatial entities, POI records, and GTFS samples for testing.
"""

import pandas as pd
import pytest


@pytest.fixture
def sample_hstore_records():
    """Returns a dictionary of various raw HSTORE samples."""
    return {
        "hospital": '"amenity"=>"hospital","name"=>"Wojewódzki Szpital Zespolony"',
        "mall": '"shop"=>"mall","name"=>"Galeria Echo"',
        "rail_main": '"railway"=>"station","name"=>"Kielce Główne","uic_ref"=>"5100021"',
        "pharmacy": '"amenity"=>"pharmacy","name"=>"Apteka Słoneczna"',
        "supermarket": '"shop"=>"supermarket","name"=>"Biedronka"',
        "corrupted": 'amenity=>"broken, missing quote',
    }


@pytest.fixture
def sample_stops_df():
    """Returns a DataFrame representing transit stops."""
    return pd.DataFrame([
        {"stop_id": "ST_01", "stop_name": "Kielce, Żytnia I", "lat": 50.8701, "lon": 20.6275},
        {"stop_id": "ST_02", "stop_name": "Kielce, Żytnia II", "lat": 50.8703, "lon": 20.6278},
        {"stop_id": "ST_03", "stop_name": "Kraków Główny PKP", "lat": 50.0660, "lon": 19.9482},
        {"stop_id": "ST_04", "stop_name": "Łódź Fabryczna", "lat": 51.7686, "lon": 19.4678},
    ])
