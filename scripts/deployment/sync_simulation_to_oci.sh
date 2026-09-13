#!/usr/bin/env bash
# ==============================================================================
# BusOS Tactical Deployment Tool: Sync Simulation Data to OCI ARM64
# ==============================================================================
# Synchronizes simulation_trips_math.json (and optional simulation_trips.json)
# across all 30 calibrated metropolitan agglomerations to the OCI host.
#
# Usage:
#   ./scripts/deployment/sync_simulation_to_oci.sh [OPTIONS]
#
# Options:
#   --host <IP/HOST>       OCI Host address (default: read from OCI_HOST env or ssh config)
#   --user <USER>          OCI SSH user (default: ubuntu)
#   --key <KEY_PATH>       Path to SSH private key (default: ~/.ssh/id_rsa or ~/.ssh/id_ed25519)
#   --city <CITY_SLUG>     Sync specific city only (default: all cities)
#   --include-gps          Also sync heavy simulation_trips.json (GPS trajectories)
#   --dry-run              Dry run without transferring files
# ==============================================================================

set -euo pipefail

OCI_USER="${OCI_USER:-ubuntu}"
OCI_HOST="${OCI_HOST:-}"
SSH_KEY="${SSH_KEY:-}"
TARGET_DIR="${TARGET_DIR:-/home/ubuntu/busos/data/cities}"
SPECIFIC_CITY=""
INCLUDE_GPS=false
DRY_RUN=""

while [[ $# -gt 0 ]]; do
  case "$1" in
    --host)
      OCI_HOST="$2"
      shift 2
      ;;
    --user)
      OCI_USER="$2"
      shift 2
      ;;
    --key)
      SSH_KEY="$2"
      shift 2
      ;;
    --city)
      SPECIFIC_CITY="$2"
      shift 2
      ;;
    --include-gps)
      INCLUDE_GPS=true
      shift
      ;;
    --dry-run)
      DRY_RUN="--dry-run"
      shift
      ;;
    -h|--help)
      echo "Usage: $0 [--host <IP>] [--user <USER>] [--key <KEY_PATH>] [--city <SLUG>] [--include-gps] [--dry-run]"
      exit 0
      ;;
    *)
      echo "Unknown option: $1"
      exit 1
      ;;
  esac
done

if [[ -z "$OCI_HOST" ]]; then
  echo "[ERROR] OCI_HOST is required. Set via --host <IP> or export OCI_HOST=..."
  exit 1
fi

SSH_OPTS=""
if [[ -n "$SSH_KEY" ]]; then
  SSH_OPTS="-e 'ssh -i $SSH_KEY -o StrictHostKeyChecking=no'"
else
  SSH_OPTS="-e 'ssh -o StrictHostKeyChecking=no'"
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
DATA_DIR="$REPO_ROOT/data/cities"

if [[ ! -d "$DATA_DIR" ]]; then
  echo "[ERROR] Local data directory not found at $DATA_DIR"
  exit 1
fi

echo "======================================================================"
echo "BusOS: Syncing Simulation Assets to OCI ARM64 ($OCI_USER@$OCI_HOST)"
echo "Target path: $TARGET_DIR"
echo "Mode: $([ "$INCLUDE_GPS" = true ] && echo "Math + GPS" || echo "Math Only (~196 MB total)")"
echo "======================================================================"

# Create target directories on remote host
echo "[1/3] Ensuring remote directory structure exists..."
ssh ${SSH_KEY:+-i "$SSH_KEY"} -o StrictHostKeyChecking=no "$OCI_USER@$OCI_HOST" "mkdir -p $TARGET_DIR"

# Rsync filter rule: include simulation_trips_math.json (and simulation_trips.json if requested)
RSYNC_INCLUDES=("--include=*/" "--include=*/*/04_results/" "--include=*/*/04_results/simulation_trips_math.json")
if [[ "$INCLUDE_GPS" = true ]]; then
  RSYNC_INCLUDES+=("--include=*/*/04_results/simulation_trips.json")
fi
RSYNC_INCLUDES+=("--exclude=*")

if [[ -n "$SPECIFIC_CITY" ]]; then
  echo "[2/3] Transferring simulation files for city: $SPECIFIC_CITY..."
  SRC="$DATA_DIR/$SPECIFIC_CITY/04_results/simulation_trips_math.json"
  if [[ ! -f "$SRC" ]]; then
    echo "[ERROR] Local file does not exist: $SRC"
    exit 1
  fi
  ssh ${SSH_KEY:+-i "$SSH_KEY"} -o StrictHostKeyChecking=no "$OCI_USER@$OCI_HOST" "mkdir -p $TARGET_DIR/$SPECIFIC_CITY/04_results"
  rsync -avz --progress $DRY_RUN ${SSH_KEY:+-e "ssh -i $SSH_KEY -o StrictHostKeyChecking=no"} \
    "$SRC" "$OCI_USER@$OCI_HOST:$TARGET_DIR/$SPECIFIC_CITY/04_results/"
else
  echo "[2/3] Transferring simulation files for all cities via rsync..."
  rsync -avz --progress $DRY_RUN \
    ${SSH_KEY:+-e "ssh -i $SSH_KEY -o StrictHostKeyChecking=no"} \
    "${RSYNC_INCLUDES[@]}" \
    "$DATA_DIR/" "$OCI_USER@$OCI_HOST:$TARGET_DIR/"
fi

echo "[3/3] Verification: checking remote file presence..."
if [[ -z "$DRY_RUN" ]]; then
  ssh ${SSH_KEY:+-i "$SSH_KEY"} -o StrictHostKeyChecking=no "$OCI_USER@$OCI_HOST" \
    "find $TARGET_DIR -name 'simulation_trips_math.json' | wc -l" | xargs -I {} echo "[SUCCESS] Verified {} cities with active simulation files on OCI."
fi

echo "[DONE] Simulation dataset deployment complete."
