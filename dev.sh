#!/bin/bash

# --- Urban Gravity Engine: Dev Lifecycle (Professional Edition) ---
APP_DIR="urban-dashboard"
DEFAULT_PORT=3000
PID_FILE="$APP_DIR/.dev.pid"
PORT_FILE="$APP_DIR/.dev.port"
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

is_port_in_use() {
  local p=$1
  if command -v fuser >/dev/null 2>&1; then
    fuser "$p/tcp" >/dev/null 2>&1 && return 0
  fi
  if command -v ss >/dev/null 2>&1; then
    ss -tlnH "sport = :$p" 2>/dev/null | grep -q ":$p\b" && return 0
  fi
  if command -v lsof >/dev/null 2>&1; then
    lsof -i :"$p" -sTCP:LISTEN >/dev/null 2>&1 && return 0
  fi
  return 1
}

get_port_pid() {
  local p=$1
  local pids=""
  if command -v fuser >/dev/null 2>&1; then
    pids=$(fuser "$p/tcp" 2>/dev/null | tr -s ' ' '\n' | grep -E '^[0-9]+$' | head -1)
  fi
  if [ -z "$pids" ] && command -v lsof >/dev/null 2>&1; then
    pids=$(lsof -t -i :"$p" -sTCP:LISTEN 2>/dev/null | head -1)
  fi
  echo "$pids"
}

is_our_dashboard_process() {
  local check_pid=$1
  if [ -z "$check_pid" ] || ! ps -p "$check_pid" >/dev/null 2>&1; then
    return 1
  fi
  # If matching stored PID
  if [ -f "$PID_FILE" ]; then
    local stored_pid=$(cat "$PID_FILE" 2>/dev/null)
    if [ "$check_pid" = "$stored_pid" ]; then
      return 0
    fi
    # Check if child of stored PID
    if pgrep -P "$stored_pid" 2>/dev/null | grep -qw "$check_pid"; then
      return 0
    fi
  fi
  # Check process cwd
  local proc_cwd=$(readlink -f "/proc/$check_pid/cwd" 2>/dev/null)
  if [[ "$proc_cwd" == *"$APP_DIR"* ]] || [[ "$proc_cwd" == *"busos"* ]]; then
    return 0
  fi
  return 1
}

find_available_port() {
  local p=${1:-$DEFAULT_PORT}
  local max_p=$((p + 50))
  while [ $p -le $max_p ]; do
    if ! is_port_in_use "$p"; then
      echo "$p"
      return 0
    fi
    p=$((p + 1))
  done
  log_error "No available port found in range ${1:-$DEFAULT_PORT} - $max_p."
  return 1
}

get_actual_port() {
  # 1. Read from PORT_FILE if exists
  if [ -f "$PORT_FILE" ]; then
    local p=$(cat "$PORT_FILE" 2>/dev/null | tr -d '[:space:]')
    if [ ! -z "$p" ]; then
      echo "$p"
      return 0
    fi
  fi

  # 2. Try to extract from logs: e.g. "http://localhost:3000"
  local port=$(grep -oP "http://localhost:\K[0-9]+" "$LOG_FILE" 2>/dev/null | tail -1)
  if [ ! -z "$port" ]; then
    echo "$port"
    return 0
  fi
  
  # 3. Fallback to lsof if PID file exists
  if [ -f "$PID_FILE" ]; then
    local pid=$(cat "$PID_FILE")
    local child_pids=$(pgrep -P "$pid" 2>/dev/null | tr '\n' ',' | sed 's/,$//')
    local pids_to_check="$pid"
    if [ ! -z "$child_pids" ]; then pids_to_check="$pid,$child_pids"; fi
    port=$(lsof -nP -iTCP -sTCP:LISTEN -a -p "$pids_to_check" 2>/dev/null | grep -oP ":\K[0-9]+" | head -1)
    if [ ! -z "$port" ]; then
      echo "$port"
      return 0
    fi
  fi

  echo "$DEFAULT_PORT"
}

stop_app() {
  log_info "Stopping Urban Dashboard processes..."
  
  local port=$(get_actual_port)
  local port_pid=$(get_port_pid "$port")

  # 1. Kill via PID file
  if [ -f "$PID_FILE" ]; then
    local pid=$(cat "$PID_FILE" 2>/dev/null)
    if [ ! -z "$pid" ] && ps -p "$pid" > /dev/null 2>&1; then
      # Kill children first
      pkill -P "$pid" 2>/dev/null
      kill -15 "$pid" 2>/dev/null
      sleep 1
      if ps -p "$pid" > /dev/null 2>&1; then
        kill -9 "$pid" 2>/dev/null
      fi
      log_success "Terminated PID $pid and its subtree."
    fi
    rm -f "$PID_FILE"
  fi

  # 2. Cleanup orphaned ports IF and ONLY IF it belongs to Urban Dashboard
  if [ ! -z "$port_pid" ]; then
    if is_our_dashboard_process "$port_pid"; then
      pkill -P "$port_pid" 2>/dev/null
      kill -9 "$port_pid" 2>/dev/null
      sleep 1
      log_warn "Force-cleared dashboard instance on port $port (PID: $port_pid)"
    fi
  fi
  rm -f "$PORT_FILE"
}

status_app() {
  if [ -f "$PID_FILE" ]; then
    local pid=$(cat "$PID_FILE")
    if ps -p "$pid" > /dev/null 2>&1; then
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
      rm -f "$PID_FILE" "$PORT_FILE"
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

  # 1. Check if Urban Dashboard is ALREADY running
  if [ -f "$PID_FILE" ]; then
    local cur_pid=$(cat "$PID_FILE" 2>/dev/null)
    local cur_port=$(get_actual_port)
    if [ ! -z "$cur_pid" ] && ps -p "$cur_pid" >/dev/null 2>&1 && is_port_in_use "$cur_port"; then
      log_success "Urban Dashboard is ALREADY RUNNING (PID: $cur_pid)"
      log_info "Port: ${GREEN}$cur_port${NC}"
      log_info "URL:  ${GREEN}http://localhost:$cur_port${NC}"
      log_info "Use './dev.sh restart' to reload or './dev.sh stop' to shutdown."
      return 0
    fi
  fi

  # Also check if ANY port in dev range has a running instance of our dashboard
  local test_p=3000
  while [ $test_p -le 3050 ]; do
    if is_port_in_use "$test_p"; then
      local opp_pid=$(get_port_pid "$test_p")
      if [ ! -z "$opp_pid" ] && is_our_dashboard_process "$opp_pid"; then
        log_success "Urban Dashboard is ALREADY RUNNING on port ${GREEN}$test_p${NC} (PID: $opp_pid)"
        log_info "URL:  ${GREEN}http://localhost:$test_p${NC}"
        echo "$opp_pid" > "$PID_FILE"
        echo "$test_p" > "$PORT_FILE"
        log_info "Use './dev.sh restart' to reload or './dev.sh stop' to shutdown."
        return 0
      fi
    fi
    test_p=$((test_p + 1))
  done

  # 2. Allow overriding port via 2nd argument
  local requested_port=${2:-$DEFAULT_PORT}
  local target_port="$requested_port"

  if is_port_in_use "$requested_port"; then
    local occupant_pid=$(get_port_pid "$requested_port")
    log_warn "Port $requested_port is in use by external process (PID: ${occupant_pid:-unknown})."
    target_port=$(find_available_port "$((requested_port + 1))")
    if [ -z "$target_port" ]; then
      log_error "Failed to find available port."
      exit 1
    fi
    log_info "Automatically selected free port: ${GREEN}$target_port${NC}"
  fi

  # Clear logs
  > "$LOG_FILE"

  cd "$APP_DIR" || exit 1
  # nohup & setsid & disown to detach completely into background daemon
  nohup setsid npm run dev -- -p "$target_port" > "dev.log" 2>&1 &
  local new_pid=$!
  disown "$new_pid" 2>/dev/null
  echo "$new_pid" > ".dev.pid"
  echo "$target_port" > ".dev.port"
  cd ..

  log_info "Waiting for Next.js to signal 'Ready'..."
  
  local timeout=45
  local elapsed=0
  local actual_port=""

  while [ $elapsed -lt $timeout ]; do
    # Check for fatal error messages in log first
    if grep -q "Another next dev server is already running" "$LOG_FILE" 2>/dev/null; then
      echo ""
      log_error "Another Next.js dev server is already running in $APP_DIR."
      stop_app
      exit 1
    fi
    if grep -q "EADDRINUSE" "$LOG_FILE" 2>/dev/null; then
      echo ""
      log_error "Port $target_port is already in use (EADDRINUSE)."
      stop_app
      exit 1
    fi

    # Check if port is actually listening and owned by our process
    if is_port_in_use "$target_port"; then
      local listening_pid=$(get_port_pid "$target_port")
      if [ ! -z "$listening_pid" ]; then
        echo "$listening_pid" > "$PID_FILE"
        echo "$target_port" > "$PORT_FILE"
        actual_port="$target_port"
        new_pid="$listening_pid"
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
    stop_app
    exit 1
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
