import hashlib
import json
import os
import time
from typing import Any, Dict, Optional, Tuple

from fastapi import Request, Response
from fastapi.responses import JSONResponse
from starlette.middleware.base import BaseHTTPMiddleware

REDIS_URL = os.getenv("REDIS_URL")

# In-memory fallback idempotency store: key -> (status, sha256, response_dict, expires_at)
_MEMORY_IDEMPOTENCY_STORE: Dict[str, Tuple[str, str, Dict[str, Any], float]] = {}


class IdempotencyStore:
    """Unified store supporting Redis with graceful in-memory fallback."""

    def __init__(self):
        self.redis_client = None
        if REDIS_URL:
            try:
                import redis.asyncio as aioredis
                self.redis_client = aioredis.from_url(REDIS_URL, decode_responses=False)
            except Exception:
                self.redis_client = None

    async def get(self, key: str) -> Optional[Tuple[str, str, Optional[Dict[str, Any]]]]:
        """Returns (status, sha256, response_dict) or None."""
        now = time.time()
        if self.redis_client:
            try:
                data = await self.redis_client.get(f"busos:idempotency:{key}")
                if data:
                    parsed = json.loads(data.decode("utf-8"))
                    return parsed["status"], parsed["sha256"], parsed.get("response")
            except Exception:
                pass  # Fallback to in-memory

        # Check in-memory
        if key in _MEMORY_IDEMPOTENCY_STORE:
            status, sha256_val, resp_dict, expires_at = _MEMORY_IDEMPOTENCY_STORE[key]
            if expires_at > now:
                return status, sha256_val, resp_dict
            else:
                del _MEMORY_IDEMPOTENCY_STORE[key]
        return None

    async def set_in_progress(self, key: str, sha256_val: str, lock_ttl: int = 30) -> bool:
        """Sets state to IN_PROGRESS. Returns False if already exists."""
        now = time.time()
        if self.redis_client:
            try:
                payload = json.dumps({"status": "IN_PROGRESS", "sha256": sha256_val})
                acquired = await self.redis_client.set(
                    f"busos:idempotency:{key}",
                    payload,
                    ex=lock_ttl,
                    nx=True
                )
                if not acquired:
                    return False
                return True
            except Exception:
                pass

        if key in _MEMORY_IDEMPOTENCY_STORE:
            _, _, _, expires_at = _MEMORY_IDEMPOTENCY_STORE[key]
            if expires_at > now:
                return False

        _MEMORY_IDEMPOTENCY_STORE[key] = ("IN_PROGRESS", sha256_val, None, now + lock_ttl)
        return True

    async def set_completed(self, key: str, sha256_val: str, response_dict: Dict[str, Any], ttl: int = 86400):
        """Saves completed response with 24h TTL."""
        now = time.time()
        if self.redis_client:
            try:
                payload = json.dumps({
                    "status": "COMPLETED",
                    "sha256": sha256_val,
                    "response": response_dict
                })
                await self.redis_client.set(f"busos:idempotency:{key}", payload, ex=ttl)
                return
            except Exception:
                pass

        _MEMORY_IDEMPOTENCY_STORE[key] = ("COMPLETED", sha256_val, response_dict, now + ttl)

    async def clear(self, key: str):
        """Releases an in-progress lock upon failure."""
        if self.redis_client:
            try:
                await self.redis_client.delete(f"busos:idempotency:{key}")
            except Exception:
                pass
        _MEMORY_IDEMPOTENCY_STORE.pop(key, None)


idempotency_store = IdempotencyStore()


class IdempotencyMiddleware(BaseHTTPMiddleware):
    """
    Middleware verifying Idempotency-Key headers on mutating/heavy requests.
    Prevents duplicate executions and replays cached responses.
    """
    async def dispatch(self, request: Request, call_next):
        # Standard IETF draft-ietf-httpapi-idempotency-key-header:
        # Idempotency keys are only processed for mutating HTTP methods
        idempotency_key = request.headers.get("Idempotency-Key")
        if request.method not in ("POST", "PUT", "PATCH") or not idempotency_key:
            return await call_next(request)

        # Read and cache request body
        body_bytes = await request.body()
        sha256_hash = hashlib.sha256(body_bytes).hexdigest()

        # 1. Check existing state
        existing = await idempotency_store.get(idempotency_key)
        if existing:
            status, cached_sha, cached_resp = existing
            if status == "IN_PROGRESS":
                return JSONResponse(
                    status_code=409,
                    content={"detail": "Request with this Idempotency-Key is currently in-flight"}
                )
            if status == "COMPLETED":
                if cached_sha != sha256_hash:
                    return JSONResponse(
                        status_code=422,
                        content={"detail": "Idempotency key payload mismatch"}
                    )
                # Replay cached response
                headers = dict(cached_resp.get("headers", {}))
                headers["Idempotent-Replayed"] = "true"
                return Response(
                    content=cached_resp.get("body", "").encode("utf-8"),
                    status_code=cached_resp.get("status_code", 200),
                    headers=headers,
                    media_type=cached_resp.get("media_type", "application/json")
                )

        # 2. Acquire lock
        acquired = await idempotency_store.set_in_progress(idempotency_key, sha256_hash, lock_ttl=30)
        if not acquired:
            return JSONResponse(
                status_code=409,
                content={"detail": "Request with this Idempotency-Key is currently in-flight"}
            )

        try:
            response = await call_next(request)
            
            # Consume and buffer response body for caching
            response_body = [section async for section in response.body_iterator]
            response.body_iterator = _iterate_in_chunks(response_body)
            full_body = b"".join(response_body).decode("utf-8", errors="replace")

            # Only cache successful/acceptable status codes
            if response.status_code < 500:
                resp_cache = {
                    "status_code": response.status_code,
                    "body": full_body,
                    "media_type": response.media_type or "application/json",
                    "headers": {k: v for k, v in response.headers.items() if k.lower() not in ["content-length", "set-cookie"]}
                }
                await idempotency_store.set_completed(idempotency_key, sha256_hash, resp_cache)
            else:
                await idempotency_store.clear(idempotency_key)

            return response
        except Exception as e:
            await idempotency_store.clear(idempotency_key)
            raise e


async def _iterate_in_chunks(chunks):
    for chunk in chunks:
        yield chunk
