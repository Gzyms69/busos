"""
backend/app/domain/market_bridge.py
High-performance analytical engine for dynamic RCN transactions querying via DuckDB.
Thread-safe, direct read_parquet execution with native Predicate Pushdown support.
"""

import os
from pathlib import Path
from typing import Dict, Any, Optional, List
import duckdb

DEFAULT_DATA_PATHS = [
    os.getenv("BUSOS_DATA_DIR"),
    "/data/cities",
    str(Path(__file__).resolve().parents[3] / "data" / "cities") if len(Path(__file__).resolve().parents) > 3 else None,
    os.path.join(os.getcwd(), "data/cities"),
    os.path.join(os.getcwd(), "../data/cities"),
    os.path.join(os.path.dirname(__file__), "../../data/cities"),
]
DATA_DIR = Path(next((p for p in DEFAULT_DATA_PATHS if p and os.path.exists(p)), "data/cities"))


def get_duckdb_con(app_state=None) -> duckdb.DuckDBPyConnection:
    """Zwraca singleton z app.state lub fallback do dedykowanego połączenia."""
    if app_state and hasattr(app_state, "duckdb") and app_state.duckdb is not None:
        return app_state.duckdb
    return duckdb.connect(":memory:")

def get_bridge_path(city: str) -> Optional[Path]:
    p = DATA_DIR / city / "04_results" / "stop_transactions_bridge.parquet"
    return p if p.exists() else None

def get_transactions_path(city: str) -> Optional[Path]:
    p = DATA_DIR / city / "02_spatial" / "transactions.parquet"
    return p if p.exists() else None

def get_bulk_stops_summary(
    city: str,
    date_from: Optional[str] = None,
    date_to: Optional[str] = None,
    market_type: Optional[str] = None,
    app_state = None
) -> Dict[str, Dict[str, Any]]:
    """
    Zwraca zagregowane wyceny rynkowe dla wszystkich słupków w mieście w 1 zapytaniu SQL.
    Odpytuje bezpośrednio read_parquet(?) z dynamicznym WHERE, eliminując DDL race condition
    i włączając sprzętowy Predicate Pushdown (Zone Maps).
    """
    bridge_p = get_bridge_path(city)
    if not bridge_p:
        return {}

    con = get_duckdb_con(app_state)
    
    where_clauses = []
    params = [str(bridge_p)]

    if date_from:
        where_clauses.append("dok_data >= ?::DATE")
        params.append(date_from)
    if date_to:
        where_clauses.append("dok_data <= ?::DATE")
        params.append(date_to)
    if market_type:
        where_clauses.append("tran_rodzaj_rynku = ?")
        params.append(market_type)

    where_sql = f"WHERE {' AND '.join(where_clauses)}" if where_clauses else ""

    query = f"""
    SELECT 
        stop_id,
        hub_id,
        COUNT(DISTINCT tx_id) AS tx_count,
        ROUND(MEDIAN(price_m2), 2) AS median_price_m2,
        ROUND(AVG(price_m2), 2) AS avg_price_m2,
        ROUND(PERCENTILE_CONT(0.25) WITHIN GROUP (ORDER BY price_m2), 2) AS q1_price_m2,
        ROUND(PERCENTILE_CONT(0.75) WITHIN GROUP (ORDER BY price_m2), 2) AS q3_price_m2
    FROM read_parquet(?)
    {where_sql}
    GROUP BY stop_id, hub_id;
    """
    
    rows = con.execute(query, params).fetchall()

    result = {}
    for r in rows:
        result[str(r[0])] = {
            "stop_id": str(r[0]),
            "hub_id": int(r[1]),
            "tx_count": int(r[2]),
            "median_price_m2": float(r[3]) if r[3] is not None else 0.0,
            "avg_price_m2": float(r[4]) if r[4] is not None else 0.0,
            "q1_price_m2": float(r[5]) if r[5] is not None else 0.0,
            "q3_price_m2": float(r[6]) if r[6] is not None else 0.0
        }
    return result

def get_stop_transactions_list(
    city: str,
    stop_id: str,
    date_from: Optional[str] = None,
    date_to: Optional[str] = None,
    app_state = None
) -> List[Dict[str, Any]]:
    """Zwraca listę transakcji dla pojedynczego słupka z pełnym Zone Maps Pushdown."""
    bridge_p = get_bridge_path(city)
    if not bridge_p:
        return []

    con = get_duckdb_con(app_state)
    where_clauses = ["stop_id = ?"]
    params = [str(bridge_p), stop_id]

    if date_from:
        where_clauses.append("dok_data >= ?::DATE")
        params.append(date_from)
    if date_to:
        where_clauses.append("dok_data <= ?::DATE")
        params.append(date_to)

    where_sql = f"WHERE {' AND '.join(where_clauses)}"

    query = f"""
    SELECT 
        tx_id,
        CAST(dok_data AS VARCHAR) AS dok_data,
        price_m2,
        distance_m,
        tran_rodzaj_rynku
    FROM read_parquet(?)
    {where_sql}
    ORDER BY dok_data DESC;
    """
    rows = con.execute(query, params).fetchall()

    return [
        {
            "tx_id": r[0],
            "dok_data": r[1],
            "price_m2": float(r[2]),
            "distance_m": float(r[3]),
            "market_type": r[4]
        }
        for r in rows
    ]

def get_h3_grid_market_val(
    city: str,
    date_from: Optional[str] = None,
    date_to: Optional[str] = None,
    market_type: Optional[str] = None,
    app_state = None
) -> List[Dict[str, Any]]:
    """Wycenia heksy H3 w locie dla zadanego przedziału czasowego z dynamicznym pushdown."""
    tx_p = get_transactions_path(city)
    if not tx_p:
        return []

    con = get_duckdb_con(app_state)
    where_clauses = []
    params = [str(tx_p)]

    if date_from:
        where_clauses.append("dok_data >= ?::DATE")
        params.append(date_from)
    if date_to:
        where_clauses.append("dok_data <= ?::DATE")
        params.append(date_to)
    if market_type:
        where_clauses.append("tran_rodzaj_rynku = ?")
        params.append(market_type)

    where_sql = f"WHERE {' AND '.join(where_clauses)}" if where_clauses else ""

    query = f"""
    SELECT 
        h3_index,
        COUNT(*) AS tx_count,
        ROUND(MEDIAN(price_m2), 2) AS median_price_m2,
        ROUND(AVG(price_m2), 2) AS avg_price_m2,
        ROUND(STDDEV(price_m2), 2) AS std_price_m2
    FROM read_parquet(?)
    {where_sql}
    GROUP BY h3_index;
    """
    rows = con.execute(query, params).fetchall()

    return [
        {
            "h3_index": r[0],
            "tx_count": int(r[1]),
            "median_price_m2": float(r[2]) if r[2] is not None else 0.0,
            "avg_price_m2": float(r[3]) if r[3] is not None else 0.0,
            "std_price_m2": float(r[4]) if r[4] is not None else 0.0
        }
        for r in rows
    ]
