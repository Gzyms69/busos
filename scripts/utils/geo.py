"""
Geospatial and text parsing utility functions for BusOS.
Single Source of Truth (SSOT).
"""

import re
import unicodedata
from typing import Any, Dict

POLISH_DIACRITICS_MAP = str.maketrans("ąćęłńóśźżĄĆĘŁŃÓŚŹŻ", "acelnoszzACELNOSZZ")


def parse_hstore(hstore_str: Any) -> Dict[str, str]:
    """
    Parses an OpenStreetMap / PostgreSQL HSTORE string into a Python dictionary.

    Handles formats like:
        '"amenity"=>"hospital","name"=>"Szpital"'
        'amenity=>pharmacy,name=>Apteka'
    Returns an empty dict if input is None, empty, or NaN.
    """
    if hstore_str is None:
        return {}
    if isinstance(hstore_str, dict):
        return hstore_str

    s = str(hstore_str).strip()
    if not s or s.lower() == "nan" or s.lower() == "none":
        return {}

    res = {}
    pattern = r"\"?([^\",=>\s]+)\"?\s*=>\s*\"?([^\",]*)\"?"
    for m in re.finditer(pattern, s):
        k = m.group(1).strip()
        v = m.group(2).strip()
        if k:
            res[k] = v
    return res


def normalize_name(name: Any, strip_rail_suffixes: bool = False) -> str:
    """
    Normalizes a stop or city name to a canonical alphanumeric string.
    Correctly maps Polish characters (including 'Ł/ł'), removes accents, punctuation, spaces, and lowers case.

    Example:
        'Kielce, Dworzec Główny PKP / PKS' -> 'kielcedworzecglownypkppks'
        'Łódź Fabryczna' -> 'lodzfabryczna'
    """
    if not name:
        return ""
    s = str(name).strip()
    if not s or s.lower() == "nan" or s.lower() == "none":
        return ""

    # Translate Polish diacritics explicitly (Ł/ł doesn't decompose under NFD)
    s = s.translate(POLISH_DIACRITICS_MAP).lower()
    # Strip any remaining combining diacritics
    n = "".join(c for c in unicodedata.normalize("NFD", s) if unicodedata.category(c) != "Mn")
    if strip_rail_suffixes:
        n = re.sub(r"glown[a-z]*", "", n)
        n = re.sub(r"osobow[a-z]*", "", n)
    # Keep only ASCII letters and digits
    return re.sub(r"[^a-z0-9]", "", n)
