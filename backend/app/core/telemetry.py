import json
import logging
import re
import sys
import time
import uuid
from contextvars import ContextVar
from datetime import datetime, timezone
from typing import Optional

from fastapi import Request, Response
from prometheus_client import CONTENT_TYPE_LATEST, Counter, Gauge, Histogram, generate_latest
from starlette.middleware.base import BaseHTTPMiddleware

# Context variables for W3C distributed tracing
current_trace_id: ContextVar[str] = ContextVar("current_trace_id", default="")
current_span_id: ContextVar[str] = ContextVar("current_span_id", default="")

# Prometheus Metrics Catalog
HTTP_REQUESTS_TOTAL = Counter(
    "busos_http_requests_total",
    "Total HTTP requests handled by BusOS API",
    ["method", "handler", "status", "city"]
)

HTTP_REQUEST_DURATION_SECONDS = Histogram(
    "busos_http_request_duration_seconds",
    "HTTP request execution duration in seconds",
    ["method", "handler"],
    buckets=[0.005, 0.01, 0.025, 0.05, 0.1, 0.25, 0.5, 1.0, 2.5, 5.0]
)

CACHE_HITS_TOTAL = Counter(
    "busos_cache_hits_total",
    "Total cache hits in BusOS caching layer",
    ["cache_type"]  # "memory" or "redis"
)

CACHE_MISSES_TOTAL = Counter(
    "busos_cache_misses_total",
    "Total cache misses in BusOS caching layer",
    ["cache_type"]
)

ACTIVE_DUCKDB_QUERIES = Gauge(
    "busos_active_duckdb_queries",
    "Number of concurrent active DuckDB queries"
)


class JsonLogFormatter(logging.Formatter):
    """Outputs structured single-line JSON correlated with trace_id and span_id."""
    def format(self, record: logging.LogRecord) -> str:
        log_entry = {
            "timestamp": datetime.now(timezone.utc).isoformat(),
            "severity": record.levelname,
            "trace_id": current_trace_id.get(),
            "span_id": current_span_id.get(),
            "message": record.getMessage(),
            "module": record.module,
        }
        if hasattr(record, "extra_fields") and isinstance(record.extra_fields, dict):
            log_entry.update(record.extra_fields)
        if record.exc_info:
            log_entry["exception"] = self.formatException(record.exc_info)
        return json.dumps(log_entry, ensure_ascii=False)


def setup_telemetry_logging():
    """Configures root logger to use JsonLogFormatter on stdout."""
    handler = logging.StreamHandler(sys.stdout)
    handler.setFormatter(JsonLogFormatter())
    root_logger = logging.getLogger("busos")
    root_logger.setLevel(logging.INFO)
    root_logger.handlers = [handler]
    root_logger.propagate = False
    return root_logger


logger = setup_telemetry_logging()

# W3C traceparent regex: 00-{32 hex trace_id}-{16 hex span_id}-{2 hex flags}
TRACEPARENT_RE = re.compile(r"^00-([0-9a-fA-F]{32})-([0-9a-fA-F]{16})-[0-9a-fA-F]{2}$")


class TracingMiddleware(BaseHTTPMiddleware):
    """
    W3C Traceparent Propagation & Telemetry Middleware.
    Extracts or creates W3C trace context, emits X-Trace-Id, logs structured JSON,
    and increments Prometheus counters and histograms.
    """
    async def dispatch(self, request: Request, call_next):
        # 1. Parse or generate W3C trace context
        traceparent = request.headers.get("traceparent")
        if traceparent and TRACEPARENT_RE.match(traceparent):
            m = TRACEPARENT_RE.match(traceparent)
            trace_id = m.group(1).lower()
        else:
            trace_id = uuid.uuid4().hex
        
        span_id = uuid.uuid4().hex[:16]
        current_trace_id.set(trace_id)
        current_span_id.set(span_id)

        start_time = time.perf_counter()
        method = request.method
        path = request.url.path

        # Determine city parameter if present with strict cardinality protection
        city_raw = request.query_params.get("city") or request.path_params.get("city", "none")
        if city_raw and len(city_raw) <= 32 and city_raw.replace("-", "").replace("_", "").isalnum():
            city = city_raw.lower().strip()
        else:
            city = "other"

        # Map path to clean handler label to avoid high cardinality in Prometheus
        handler_label = self._get_handler_label(path)

        try:
            response: Response = await call_next(request)
            status_code = response.status_code
        except Exception as exc:
            duration = time.perf_counter() - start_time
            HTTP_REQUESTS_TOTAL.labels(
                method=method,
                handler=handler_label,
                status=500,
                city=city
            ).inc()
            HTTP_REQUEST_DURATION_SECONDS.labels(
                method=method,
                handler=handler_label
            ).observe(duration)
            raise exc

        duration = time.perf_counter() - start_time

        # Update Prometheus metrics
        HTTP_REQUESTS_TOTAL.labels(
            method=method,
            handler=handler_label,
            status=status_code,
            city=city
        ).inc()

        HTTP_REQUEST_DURATION_SECONDS.labels(
            method=method,
            handler=handler_label
        ).observe(duration)

        # Attach standard trace headers
        response.headers["X-Trace-Id"] = trace_id
        response.headers["traceparent"] = f"00-{trace_id}-{span_id}-01"

        return response

    @staticmethod
    def _get_handler_label(path: str) -> str:
        """Collapses variable path segments to keep Prometheus metric labels bounded."""
        if path.startswith("/api/v1/hexagons/"):
            return "/api/v1/hexagons/{hex_index}"
        if path.startswith("/api/v1/cities/") and "/boundary" in path:
            return "/api/v1/cities/{city}/boundary"
        if path.startswith("/api/v1/hubs/"):
            return "/api/v1/hubs/{hub_id}"
        if path.startswith("/api/v1/stops/"):
            return "/api/v1/stops/{stop_id}"
        return path


def metrics_endpoint() -> Response:
    """Returns official Prometheus exposition text."""
    return Response(content=generate_latest(), media_type=CONTENT_TYPE_LATEST)
