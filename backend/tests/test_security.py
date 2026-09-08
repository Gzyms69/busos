from app import spatial_engine
from app.main import app
from fastapi.testclient import TestClient

client = TestClient(app)


def test_sql_injection_defense_grade_filter():
    """Verifies that malicious SQL injection payload in 'grade' filter is sanitized or rejected."""
    malicious_payload = "A' OR 1=1 --"

    # 1. Test via spatial_engine directly
    try:
        res = spatial_engine.get_hexagons_ranking(
            city="kielce",
            grade=malicious_payload,
            limit=5
        )
        assert isinstance(res, dict)
        assert "items" in res
    except ValueError:
        pass

    # 2. Test via HTTP API
    response = client.get(
        "/api/v1/hexagons/ranking",
        params={"city": "kielce", "grade": malicious_payload, "limit": 5}
    )
    assert response.status_code in [200, 422]
    if response.status_code == 200:
        data = response.json()
        assert "items" in data


def test_path_traversal_defense_city_param():
    """Verifies that directory traversal payloads in 'city' parameter are rejected cleanly."""
    traversal_payloads = [
        "../../etc",
        "../..",
        "kielce/../../etc",
        "....//....//etc",
        "kielce\\..\\..\\etc"
    ]
    for payload in traversal_payloads:
        resp = client.get(f"/api/v1/cities/{payload}/boundary")
        assert resp.status_code in [400, 404, 422], f"Failed for path {payload}: got {resp.status_code}"

        resp2 = client.get("/api/v1/hubs", params={"city": payload})
        assert resp2.status_code in [400, 404, 422], f"Failed for query {payload}: got {resp2.status_code}"


def test_cors_policy_whitelist():
    """Verifies that CORS allows trusted origins and rejects untrusted origins."""
    trusted_origin = "https://busos.czerwinskidawid.pl"
    untrusted_origin = "https://malicious-bot-site.com"

    # Trusted origin preflight
    resp_trusted = client.options(
        "/api/v1/cities",
        headers={
            "Origin": trusted_origin,
            "Access-Control-Request-Method": "GET"
        }
    )
    assert resp_trusted.headers.get("access-control-allow-origin") == trusted_origin

    # Untrusted origin preflight
    resp_untrusted = client.options(
        "/api/v1/cities",
        headers={
            "Origin": untrusted_origin,
            "Access-Control-Request-Method": "GET"
        }
    )
    assert resp_untrusted.headers.get("access-control-allow-origin") != untrusted_origin
    assert resp_untrusted.headers.get("access-control-allow-origin") != "*"


def test_ai_similar_hubs_top_k_bounds():
    """Verifies that top_k in SimilarHubRequest is strictly bounded (max 50)."""
    payload = {
        "city": "kielce",
        "hub_id": "1",
        "top_k": 999999
    }
    resp = client.post("/api/v1/ai/similar-hubs", json=payload)
    assert resp.status_code == 422, f"Expected 422 for unbound top_k, got {resp.status_code}"


def test_rate_limiter_blocks_excessive_traffic():
    """Verifies that slowapi rate limiter enforces limits on excessive requests."""
    responses = []
    for _ in range(70):
        r = client.get("/api/v1/cities", headers={"X-Forwarded-For": "198.51.100.25"})
        responses.append(r.status_code)

    assert 429 in responses, f"Rate limiter did not trigger 429 in 70 requests: {set(responses)}"
    app.state.limiter.reset()
