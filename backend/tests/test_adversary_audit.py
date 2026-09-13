import concurrent.futures
import threading
import uuid
from app import spatial_engine
from app.core.idempotency import _MEMORY_IDEMPOTENCY_STORE
from app.core.telemetry import generate_latest
from app.main import app, get_real_client_ip
from app.routers.ai import _EMBEDDINGS_CACHE
from fastapi import Request
from fastapi.testclient import TestClient

client = TestClient(app)


def test_ai_similar_hubs_thread_safe_concurrency():
    """Verifies that concurrent searches for different hubs do not mutate cached DataFrame or cause race conditions."""
    payloads = [
        {"city": "kielce", "hub_id": "1", "top_k": 3},
        {"city": "kielce", "hub_id": "2", "top_k": 3},
        {"city": "kielce", "hub_id": "3", "top_k": 3},
    ]

    def execute_search(p):
        return client.post("/api/v1/ai/similar-hubs", json=p)

    with concurrent.futures.ThreadPoolExecutor(max_workers=3) as executor:
        futures = [executor.submit(execute_search, p) for p in payloads]
        results = [f.result() for f in futures]

    for resp in results:
        assert resp.status_code == 200
        data = resp.json()
        assert isinstance(data, list)
        assert len(data) > 0

    # Ensure no '_sim' column was injected into the cached DataFrame in _EMBEDDINGS_CACHE
    for source_db, entry in _EMBEDDINGS_CACHE.items():
        _, df, _ = entry
        assert "_sim" not in df.columns, "Cached DataFrame was mutated in-place by concurrent requests!"


def test_duckdb_multithreaded_initialization():
    """Verifies that simultaneous initialization from multiple threads safely shares a single DuckDB engine."""
    cursors = []
    engine_ids = []

    def fetch_conn():
        cur = spatial_engine.get_duckdb_connection()
        cursors.append(cur)
        engine_ids.append(id(spatial_engine._DUCKDB_ENGINE))
        return cur.execute("SELECT 42").fetchone()[0]

    with concurrent.futures.ThreadPoolExecutor(max_workers=8) as executor:
        futures = [executor.submit(fetch_conn) for _ in range(16)]
        results = [f.result() for f in futures]

    assert all(r == 42 for r in results)
    # All threads must share the exact same underlying engine instance
    assert len(set(engine_ids)) == 1, "Multiple DuckDB engines were created during concurrent initialization!"


def test_rate_limiter_extracts_x_forwarded_for():
    """Verifies that get_real_client_ip properly extracts the client IP behind a reverse proxy."""
    # 1. Test helper directly
    scope = {
        "type": "http",
        "headers": [
            (b"x-forwarded-for", b"203.0.113.195, 10.0.0.1"),
            (b"x-real-ip", b"203.0.113.195")
        ]
    }
    req = Request(scope)
    assert get_real_client_ip(req) == "203.0.113.195"

    # Fallback to X-Real-IP
    scope_real_ip = {
        "type": "http",
        "headers": [(b"x-real-ip", b"198.51.100.42")]
    }
    req_real = Request(scope_real_ip)
    assert get_real_client_ip(req_real) == "198.51.100.42"


def test_idempotency_bypasses_get_requests():
    """Verifies that GET requests with Idempotency-Key are ignored per IETF standard and not stored in memory."""
    unique_key = f"get-idem-{uuid.uuid4().hex}"

    resp = client.get("/api/v1/cities", headers={"Idempotency-Key": unique_key})
    assert resp.status_code == 200
    assert "idempotent-replayed" not in resp.headers

    # Must NOT create an entry in memory idempotency store
    assert unique_key not in _MEMORY_IDEMPOTENCY_STORE


def test_telemetry_sanitizes_malicious_city_label():
    """Verifies that malicious or oversized city queries are sanitized to 'other' in Prometheus metrics."""
    malicious_city = "attack_overflow_cardinality_bomb_9999999999999999999999999"
    client.get(f"/api/v1/hexagons?city={malicious_city}")

    metrics_text = generate_latest().decode("utf-8")
    # Verify that the oversized attack string is NOT used as a label
    assert f'city="{malicious_city}"' not in metrics_text
    # Instead, 'other' should be present
    assert 'city="other"' in metrics_text


def test_caddyfile_blocks_metrics_configuration():
    """Verifies that Caddyfile configuration forbids public access to /metrics."""
    import os
    caddyfile_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), "Caddyfile")
    assert os.path.exists(caddyfile_path)
    with open(caddyfile_path, "r", encoding="utf-8") as f:
        content = f.read()

    assert "@metrics_block" in content
    assert "path /metrics" in content
    assert "403" in content
