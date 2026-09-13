import asyncio
import functools
import hashlib
import json
import os
import random
import time
from collections import OrderedDict
from typing import Any, Callable, Dict, Optional, Tuple

from app.core.telemetry import CACHE_HITS_TOTAL, CACHE_MISSES_TOTAL
from fastapi import Response
from pydantic import BaseModel

REDIS_URL = os.getenv("REDIS_URL")


class InMemoryLRUCache:
    """Thread-safe In-Memory LRU cache with TTL expiration and item count bounds."""
    def __init__(self, max_items: int = 500):
        self.max_items = max_items
        self._cache: OrderedDict[str, Tuple[Any, float]] = OrderedDict()
        self._lock = asyncio.Lock()

    async def get(self, key: str) -> Optional[Any]:
        async with self._lock:
            if key not in self._cache:
                return None
            val, expires_at = self._cache[key]
            if time.time() > expires_at:
                del self._cache[key]
                return None
            # Move to end to mark as recently used
            self._cache.move_to_end(key)
            return val

    async def set(self, key: str, value: Any, ttl: int):
        async with self._lock:
            if key in self._cache:
                self._cache.move_to_end(key)
            self._cache[key] = (value, time.time() + ttl)
            if len(self._cache) > self.max_items:
                self._cache.popitem(last=False)  # Evict least recently used

    async def clear(self):
        async with self._lock:
            self._cache.clear()


class DistributedCache:
    """
    Dual-Backend Cache: Uses Redis when REDIS_URL is active,
    falls back cleanly to InMemoryLRUCache.
    Includes Mutex Lock & TTL Jitter against Cache Stampedes.
    """
    def __init__(self):
        self.in_memory = InMemoryLRUCache(max_items=500)
        self.redis_client = None
        self._key_locks: Dict[str, asyncio.Lock] = {}
        self._master_lock = asyncio.Lock()

        if REDIS_URL:
            try:
                import redis.asyncio as aioredis
                self.redis_client = aioredis.from_url(REDIS_URL, decode_responses=True)
            except Exception:
                self.redis_client = None

    async def _get_key_lock(self, key: str) -> asyncio.Lock:
        async with self._master_lock:
            if key not in self._key_locks:
                self._key_locks[key] = asyncio.Lock()
            return self._key_locks[key]

    async def get(self, key: str) -> Tuple[Optional[Any], str]:
        """Returns (value, cache_type) where cache_type is 'redis' or 'memory'."""
        if self.redis_client:
            try:
                raw = await self.redis_client.get(f"busos:cache:{key}")
                if raw is not None:
                    return json.loads(raw), "redis"
            except Exception:
                pass  # Fallback to in-memory

        val = await self.in_memory.get(key)
        return val, "memory"

    async def set(self, key: str, value: Any, ttl: int, jitter: int = 0):
        actual_ttl = ttl + (random.randint(0, jitter) if jitter > 0 else 0)
        json_val = json.dumps(value, default=str)

        if self.redis_client:
            try:
                await self.redis_client.set(f"busos:cache:{key}", json_val, ex=actual_ttl)
                return
            except Exception:
                pass

        await self.in_memory.set(key, value, ttl=actual_ttl)

    async def acquire_stampede_lock(self, key: str, lock_ttl: int = 5) -> bool:
        """Acquires a short mutex lock to prevent concurrent recomputation."""
        if self.redis_client:
            try:
                return bool(await self.redis_client.set(f"busos:lock:{key}", "1", ex=lock_ttl, nx=True))
            except Exception:
                pass
        lock = await self._get_key_lock(key)
        return not lock.locked()


cache = DistributedCache()


def cached_query(prefix: str, ttl: int = 300, jitter: int = 60):
    """
    Decorator for caching endpoint/service results.
    Prevents cache stampedes and attaches X-Cache header.
    """
    def decorator(func: Callable):
        @functools.wraps(func)
        async def wrapper(*args, **kwargs):
            # Extract response object if passed in kwargs
            response: Optional[Response] = kwargs.get("response")

            # Deterministic hash of kwargs and args
            key_parts = [prefix]
            for arg in args:
                if isinstance(arg, (str, int, float, bool)):
                    key_parts.append(str(arg))
            for k in sorted(kwargs.keys()):
                if k != "response":
                    v = kwargs[k]
                    if isinstance(v, BaseModel):
                        v = v.model_dump()
                    key_parts.append(f"{k}={json.dumps(v, sort_keys=True, default=str)}")

            key_hash = hashlib.sha256(":".join(key_parts).encode("utf-8")).hexdigest()
            cache_key = f"{prefix}:{key_hash}"

            # 1. Try Cache Read
            cached_val, cache_type = await cache.get(cache_key)
            if cached_val is not None:
                CACHE_HITS_TOTAL.labels(cache_type=cache_type).inc()
                if response:
                    response.headers["X-Cache"] = "HIT"
                return cached_val

            CACHE_MISSES_TOTAL.labels(cache_type=cache_type).inc()

            # 2. Cache Miss - compute under mutex
            lock = await cache._get_key_lock(cache_key)
            async with lock:
                # Double-check if another worker computed it while waiting
                cached_val, cache_type = await cache.get(cache_key)
                if cached_val is not None:
                    CACHE_HITS_TOTAL.labels(cache_type=cache_type).inc()
                    if response:
                        response.headers["X-Cache"] = "HIT"
                    return cached_val

                # Execute original function
                result = await func(*args, **kwargs)

                # Serialize if Pydantic model
                serializable = result.model_dump() if isinstance(result, BaseModel) else result

                # Cache computed result
                await cache.set(cache_key, serializable, ttl=ttl, jitter=jitter)
                if response:
                    response.headers["X-Cache"] = "MISS"

                return result

        return wrapper
    return decorator
