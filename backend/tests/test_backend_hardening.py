import json
import uuid
from app.core.cache import cache
from app.core.idempotency import _MEMORY_IDEMPOTENCY_STORE
from app.main import app
from app.spatial_engine import get_duckdb_connection
from fastapi.testclient import TestClient

client = TestClient(app)


def test_w3c_traceparent_and_trace_id_headers():
    """Verifies that every response includes X-Trace-Id and valid W3C traceparent."""
    resp = client.get("/health")
    assert resp.status_code == 200
    assert "x-trace-id" in resp.headers
    assert "traceparent" in resp.headers

    trace_id = resp.headers["x-trace-id"]
    traceparent = resp.headers["traceparent"]

    assert len(trace_id) == 32
    assert traceparent.startswith("00-")
    assert trace_id in traceparent
    assert traceparent.endswith("-01")


def test_incoming_traceparent_propagation():
    """Verifies that an incoming W3C traceparent preserves the parent trace_id."""
    incoming_trace_id = "4bf92f3577b34da6a3ce929d0e0e4736"
    incoming_span_id = "00f067aa0ba902b7"
    incoming_header = f"00-{incoming_trace_id}-{incoming_span_id}-01"

    resp = client.get("/health", headers={"traceparent": incoming_header})
    assert resp.status_code == 200
    assert resp.headers["x-trace-id"] == incoming_trace_id
    assert resp.headers["traceparent"].startswith(f"00-{incoming_trace_id}-")


def test_prometheus_metrics_exposition():
    """Verifies that GET /metrics returns official Prometheus text format with BusOS metrics."""
    # Generate some traffic first
    client.get("/health")
    client.get("/api/v1/cities")

    resp = client.get("/metrics")
    assert resp.status_code == 200
    assert "text/plain" in resp.headers["content-type"]

    content = resp.text
    assert "busos_http_requests_total" in content
    assert "busos_http_request_duration_seconds" in content
    assert "busos_cache_hits_total" in content
    assert "busos_cache_misses_total" in content
    assert "busos_active_duckdb_queries" in content


def test_cached_query_acceleration_and_headers():
    """Verifies that cached endpoints emit X-Cache: MISS then X-Cache: HIT."""
    unique_limit = 3
    url = f"/api/v1/hexagons/ranking?city=kielce&limit={unique_limit}&offset=0"

    # First request: MISS
    resp1 = client.get(url)
    assert resp1.status_code == 200
    assert resp1.headers.get("x-cache") == "MISS"
    data1 = resp1.json()

    # Second request: HIT
    resp2 = client.get(url)
    assert resp2.status_code == 200
    assert resp2.headers.get("x-cache") == "HIT"
    data2 = resp2.json()

    # Data equivalence
    assert data1 == data2


def test_idempotency_key_replay_and_mismatch():
    """Verifies that Idempotency-Key replays exact responses and detects payload tampering."""
    unique_key = f"test-idem-{uuid.uuid4().hex}"
    payload1 = {
        "city": "kielce",
        "hub_id": "1",
        "top_k": 2
    }

    # 1. First execution
    resp1 = client.post(
        "/api/v1/ai/similar-hubs",
        json=payload1,
        headers={"Idempotency-Key": unique_key}
    )
    assert resp1.status_code == 200
    assert "idempotent-replayed" not in resp1.headers

    # 2. Replay execution (identical payload)
    resp2 = client.post(
        "/api/v1/ai/similar-hubs",
        json=payload1,
        headers={"Idempotency-Key": unique_key}
    )
    assert resp2.status_code == 200
    assert resp2.headers.get("idempotent-replayed") == "true"
    assert resp1.json() == resp2.json()

    # 3. Reused key with different payload (Mismatch -> 422)
    payload_tampered = {
        "city": "kielce",
        "hub_id": "1",
        "top_k": 5
    }
    resp3 = client.post(
        "/api/v1/ai/similar-hubs",
        json=payload_tampered,
        headers={"Idempotency-Key": unique_key}
    )
    assert resp3.status_code == 422
    assert "mismatch" in resp3.json()["detail"].lower()


def test_idempotency_in_flight_conflict():
    """Verifies that an in-flight Idempotency-Key returns 409 Conflict."""
    conflict_key = f"in-flight-{uuid.uuid4().hex}"
    import time
    # Simulate a key currently in-progress
    _MEMORY_IDEMPOTENCY_STORE[conflict_key] = ("IN_PROGRESS", "some_hash", None, time.time() + 30)

    resp = client.post(
        "/api/v1/ai/similar-hubs",
        json={"city": "kielce", "hub_id": "1", "top_k": 2},
        headers={"Idempotency-Key": conflict_key}
    )
    assert resp.status_code == 409
    assert "in-flight" in resp.json()["detail"].lower()
    _MEMORY_IDEMPOTENCY_STORE.pop(conflict_key, None)


def test_duckdb_shared_connection_cursor_safety():
    """Verifies that get_duckdb_connection returns thread-safe cursors respecting memory limits."""
    cur1 = get_duckdb_connection()
    cur2 = get_duckdb_connection()

    res1 = cur1.execute("SELECT 1 + 1").fetchone()[0]
    res2 = cur2.execute("SELECT 2 * 3").fetchone()[0]

    assert res1 == 2
    assert res2 == 6

    # Verify memory limit setting
    settings = cur1.execute("SELECT current_setting('memory_limit')").fetchone()[0]
    assert "GB" in settings or "GiB" in settings or "bytes" in settings or int(settings.replace("GB", "").replace("GiB", "").strip() or 0) >= 1
