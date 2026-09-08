#!/usr/bin/env bash
set -euo pipefail

# ==============================================================================
# BusOS — Frontend Playwright E2E Test Suite Runner
# ==============================================================================

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKSPACE_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
FRONTEND_DIR="$WORKSPACE_ROOT/urban-dashboard"

echo "========================================================================"
echo "🚀 Uruchamianie BusOS Frontend Interactive E2E Test Suite (Playwright)"
echo "   Katalog frontendu: $FRONTEND_DIR"
echo "   Przeglądarka: Systemowy Google Chrome (/usr/bin/google-chrome)"
echo "========================================================================"

cd "$FRONTEND_DIR"

# 1. Weryfikacja obecności Google Chrome
if [ ! -f "/usr/bin/google-chrome" ]; then
  echo "❌ BŁĄD: Brak systemowego Google Chrome pod /usr/bin/google-chrome"
  exit 1
fi

CHROME_VER=$(google-chrome --version)
echo "✔ Wykryto przeglądarkę: $CHROME_VER"

# 2. Wykonanie testów Playwright
echo "▶ Wykonywanie 10 scenariuszy E2E..."
npx playwright test "$@"

echo "========================================================================"
echo "✔ 100% testów E2E zakończonych sukcesem! Zero błędów w konsoli (console.error === 0)."
echo "========================================================================"
