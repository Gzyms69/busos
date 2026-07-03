#!/bin/bash

# --- Urban Gravity Engine: Dev Lifecycle (Professional Edition) ---
APP_DIR="urban-dashboard"
DEFAULT_PORT=3000
PID_FILE="$APP_DIR/.dev.pid"
LOG_FILE="$APP_DIR/dev.log"

# Colors for better visibility
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

log_info() { echo -e "${BLUE}[INFO]${NC} $1"; }
log_success() { echo -e "${GREEN}[SUCCESS]${NC} $1"; }
log_warn() { echo -e "${YELLOW}[WARN]${NC} $1"; }
log_error() { echo -e "${RED}[ERROR]${NC} $1"; }

get_actual_port() {
  # Try to extract from logs first: e.g. "http://localhost:3000"
  local port=$(grep -oP "http://localhost:\K[0-9]+" "$LOG_FILE" 2>/dev/null | tail -1)
  
  if [ -z "$port" ]; then
    # Fallback to lsof if PID file exists
    if [ -f "$PID_FILE" ]; then
      local pid=$(cat "$PID_FILE")
      # Next.js usually has child processes, so we look for any process in the tree listening
      local child_pids=$(pgrep -P "$pid" | tr '\n' ',' | sed 's/,$//')
      local pids_to_check="$pid"
      if [ ! -z "$child_pids" ]; then pids_to_check="$pid,$child_pids"; fi
      
      port=$(lsof -nP -iTCP -sTCP:LISTEN -a -p "$pids_to_check" 2>/dev/null | grep -oP ":\K[0-9]+" | head -1)
    fi
  fi
  echo "$port"
}

stop_app() {
  log_info "Stopping Urban Dashboard processes..."
  
  # 1. Kill via PID file
  if [ -f "$PID_FILE" ]; then
    local pid=$(cat "$PID_FILE")
    if ps -p "$pid" > /dev/null; then
      # Kill children first
      pkill -P "$pid" 2>/dev/null
      kill -15 "$pid" 2>/dev/null
      sleep 1
      if ps -p "$pid" > /dev/null; then
        kill -9 "$pid" 2>/dev/null
      fi
      log_success "Terminated PID $pid and its subtree."
    fi
    rm "$PID_FILE"
  fi

  # 2. Cleanup orphaned ports if any
  local port=$(get_actual_port)
  port=${port:-$DEFAULT_PORT}
  
  local port_pid=$(lsof -t -i:"$port" 2>/dev/null)
  if [ ! -z "$port_pid" ]; then
    kill -9 "$port_pid" 2>/dev/null
    log_warn "Force-cleared orphaned port $port (PID: $port_pid)"
  fi
}

status_app() {
  if [ -f "$PID_FILE" ]; then
    local pid=$(cat "$PID_FILE")
    if ps -p "$pid" > /dev/null; then
      local port=$(get_actual_port)
      log_success "Urban Dashboard is RUNNING (PID: $pid)"
      if [ ! -z "$port" ]; then
        log_info "Port: ${GREEN}$port${NC}"
        log_info "URL:  ${GREEN}http://localhost:$port${NC}"
      else
        log_warn "Port not yet detected (app might be starting up)."
      fi
      return 0
    else
      log_error "PID file exists but process $pid is dead."
      rm "$PID_FILE"
      return 1
    fi
  else
    log_info "Urban Dashboard is NOT running."
    return 1
  fi
}

start_app() {
  log_info "Initializing Urban Dashboard Engine..."
  
  if [ ! -d "$APP_DIR" ]; then
    log_error "Critical: Application directory '$APP_DIR' not found."
    exit 1
  fi

  # Allow overriding port via 2nd argument
  local target_port=${2:-$DEFAULT_PORT}

  # Ensure app is stopped before starting
  local current_port_pid=$(lsof -t -i:"$target_port" 2>/dev/null)
  if [ ! -z "$current_port_pid" ]; then
    log_warn "Port $target_port is busy. Stopping previous instance..."
    stop_app
  fi

  # Clear logs
  > "$LOG_FILE"

  cd "$APP_DIR" || exit 1
  # nohup & disown to detach properly
  nohup npm run dev -- -p "$target_port" > "dev.log" 2>&1 &
  local new_pid=$!
  echo "$new_pid" > ".dev.pid"
  cd ..

  log_info "Waiting for Next.js to signal 'Ready'..."
  
  local timeout=45
  local elapsed=0
  local actual_port=""

  while [ $elapsed -lt $timeout ]; do
    if ! ps -p "$new_pid" > /dev/null; then
      log_error "Application crashed immediately after start. Check $LOG_FILE"
      exit 1
    fi

    # Check for Ready message in log (Next.js 14/15+)
    if grep -Ei "Ready in|Started server on|localhost:" "$LOG_FILE" > /dev/null; then
      actual_port=$(get_actual_port)
      if [ ! -z "$actual_port" ]; then
        break
      fi
    fi

    sleep 1
    elapsed=$((elapsed + 1))
    echo -n "."
  done
  echo ""

  if [ ! -z "$actual_port" ]; then
    log_success "Urban Dashboard is LIVE!"
    log_info "URL:  ${GREEN}http://localhost:$actual_port${NC}"
    log_info "PID:  $new_pid"
    log_info "Log:  tail -f $LOG_FILE"
  else
    log_error "Timeout: App started but did not report port in $timeout seconds."
    log_warn "Check $LOG_FILE for errors."
  fi
}

# Main command dispatcher
case "$1" in
  start)
    start_app "$@"
    ;;
  stop)
    stop_app
    ;;
  restart)
    stop_app
    sleep 1
    start_app "$@"
    ;;
  status)
    status_app
    ;;
  *)
    echo -e "${YELLOW}Usage:${NC} $0 {start|stop|restart|status} [optional_port]"
    exit 1
    ;;
esac
