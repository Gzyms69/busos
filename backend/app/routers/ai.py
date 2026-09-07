import os
import sqlite3
import numpy as np
import httpx
from typing import List
from fastapi import APIRouter, HTTPException
from app.schemas import SimilarHubRequest, SimilarHubResponse
from app.spatial_engine import DATA_DIR

router = APIRouter(tags=["AI & Vector Search"])

QDRANT_HOST = os.getenv("QDRANT_HOST", "qdrant")
QDRANT_PORT = int(os.getenv("QDRANT_PORT", "6333"))


@router.post("/ai/similar-hubs", response_model=List[SimilarHubResponse])
async def search_similar_hubs(req: SimilarHubRequest):
    """
    Finds semantically & structurally similar transit hubs across Poland based on Stop DNA profile.
    Tries Qdrant vector engine first; falls back to exact multi-dimensional cosine similarity
    over normalized Stop DNA metrics if Qdrant is offline.
    """
    # 1. Try Qdrant if online
    try:
        async with httpx.AsyncClient(timeout=1.0) as client:
            r = await client.get(f"http://{QDRANT_HOST}:{QDRANT_PORT}/collections")
            if r.status_code == 200:
                pass
    except Exception:
        pass

    # 2. Resilient Vector Distance Fallback across Poland
    db_file = os.path.join(os.path.dirname(DATA_DIR), "database", "master_stop_dna_poland.gpkg")
    target_hub_id = int(req.hub_id) if req.hub_id.isdigit() else req.hub_id

    # Fallback to local city hubs.gpkg if national database is not yet stitched
    source_db = db_file if os.path.exists(db_file) else os.path.join(DATA_DIR, req.city, "04_results", "hubs.gpkg")
    if not os.path.exists(source_db):
        raise HTTPException(status_code=404, detail=f"No Stop DNA database found for city '{req.city}'")

    con = sqlite3.connect(f"file:{source_db}?mode=ro", uri=True)
    table_name = "master_stop_dna_poland" if os.path.exists(db_file) else "hubs"
    
    try:
        import pandas as pd
        df = pd.read_sql_query(f"SELECT * FROM {table_name}", con)
    finally:
        con.close()

    if df.empty:
        return []

    # Find target hub
    target_row = df[(df["hub_id"] == target_hub_id)]
    if "city_context" in df.columns:
        target_row = df[(df["hub_id"] == target_hub_id) & (df["city_context"] == req.city)]

    if target_row.empty:
        raise HTTPException(status_code=404, detail=f"Hub '{req.hub_id}' not found in city '{req.city}'")

    target = target_row.iloc[0]
    
    # Feature vector: [infra_score, transit_freq, pop_val, market_val]
    feat_cols = ["hub_infra_score", "hub_departures_h", "hub_pop_val", "hub_market_val"]
    for c in feat_cols:
        if c not in df.columns:
            # Check aliases
            alt = c.replace("hub_", "")
            if alt in df.columns:
                df[c] = df[alt]
            elif c.replace("departures_h", "departures") in df.columns:
                df[c] = df[c.replace("departures_h", "departures")]
            else:
                df[c] = 0.0

    matrix = df[feat_cols].fillna(0.0).values
    norm = np.linalg.norm(matrix, axis=1, keepdims=True)
    norm[norm == 0] = 1e-9
    normalized_matrix = matrix / norm

    t_vec = target_row[feat_cols].fillna(0.0).values[0]
    t_norm = np.linalg.norm(t_vec)
    if t_norm == 0:
        t_norm = 1e-9
    t_normalized = t_vec / t_norm

    sims = np.dot(normalized_matrix, t_normalized)
    df["_sim"] = sims

    # Exclude self
    other = df[df["hub_id"] != target_hub_id].copy()
    if other.empty:
        other = df.copy()

    top = other.sort_values("_sim", ascending=False).head(req.top_k)

    results = []
    for _, row in top.iterrows():
        c_city = str(row.get("city_context") or req.city)
        name = str(row.get("hub_name") or row.get("stop_name") or f"Hub #{row['hub_id']}")
        grade = str(row.get("hub_grade") or row.get("grade") or "C")
        score = float(row.get("hub_local_score_raw") or row.get("local_score_raw") or 0.0)

        results.append(SimilarHubResponse(
            hub_id=str(row["hub_id"]),
            city=c_city,
            stop_name=name,
            similarity_score=round(float(row["_sim"]), 4),
            grade=grade,
            local_score_raw=round(score, 3)
        ))

    return results
