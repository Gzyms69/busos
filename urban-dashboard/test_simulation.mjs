import assert from "node:assert";
import {
  formatSecondsToHms,
  calculateBearing,
  calculateDistanceMeters,
  computeActiveVehicles,
} from "./src/components/simulation/simulation-engine.ts";

console.log("[+] Uruchamianie testów silnika symulacji BusOS...");

// 1. Test formatowania czasu
assert.strictEqual(formatSecondsToHms(0), "00:00:00");
assert.strictEqual(formatSecondsToHms(3661), "01:01:01");
assert.strictEqual(formatSecondsToHms(14 * 3600 + 35 * 60 + 22), "14:35:22");
assert.strictEqual(formatSecondsToHms(86399), "23:59:59");
console.log("  [✓] formatSecondsToHms: poprawne");

// 2. Test obliczania odległości (Warszawa - Kraków ok. 250 km)
const distM = calculateDistanceMeters(21.0122, 52.2297, 19.945, 50.0647);
assert(distM > 240000 && distM < 260000, `Niepoprawny dystans: ${distM}`);
console.log("  [✓] calculateDistanceMeters (Haversine): poprawne");

// 3. Test obliczania kursu / kąta (Północ = 0, Wschód = 90, Południe = 180, Zachód = 270)
const bearingNorth = calculateBearing(20.0, 50.0, 20.0, 51.0);
assert(Math.abs(bearingNorth - 0) < 1, `Kurs na północ powinien być 0, jest: ${bearingNorth}`);

const bearingEast = calculateBearing(20.0, 50.0, 21.0, 50.0);
assert(Math.abs(bearingEast - 90) < 5, `Kurs na wschód powinien być ~90, jest: ${bearingEast}`);
console.log("  [✓] calculateBearing: poprawne");

// 4. Test interpolacji aktywnego pojazdu
const mockTrips = [
  {
    trip_id: "trip_test_1",
    route_id: "34",
    route_short_name: "34",
    route_color: "#E31E24",
    headsign: "Bukówka",
    direction_id: 0,
    start_sec: 1000,
    end_sec: 2000,
    waypoints: [
      [1000, 20.60, 50.85, "Przystanek A"],
      [1500, 20.65, 50.85, "Przystanek B"],
      [2000, 20.70, 50.85, "Przystanek C"],
    ],
  },
];

// 4a. Czas przed kursem -> 0 pojazdów
assert.strictEqual(computeActiveVehicles(mockTrips, 500).length, 0);

// 4b. Czas po kursie -> 0 pojazdów
assert.strictEqual(computeActiveVehicles(mockTrips, 2500).length, 0);

// 4c. Dokładnie w połowie pierwszego segmentu (1250 sekunda)
const active = computeActiveVehicles(mockTrips, 1250);
assert.strictEqual(active.length, 1);
const bus = active[0];
assert.strictEqual(bus.routeShortName, "34");
assert(Math.abs(bus.lon - 20.625) < 0.001, `Niepoprawna interpolacja lon: ${bus.lon}`);
assert(Math.abs(bus.lat - 50.85) < 0.001, `Niepoprawna interpolacja lat: ${bus.lat}`);
assert.strictEqual(bus.currentStopName, "Przystanek A");
assert.strictEqual(bus.nextStopName, "Przystanek B");
assert.strictEqual(bus.nextStopEtaSec, 250);
console.log("  [✓] computeActiveVehicles: poprawna interpolacja czasoprzestrzenna");

// 5. Test filtrowania linii
const filteredOut = computeActiveVehicles(mockTrips, 1250, "99");
assert.strictEqual(filteredOut.length, 0);
const filteredIn = computeActiveVehicles(mockTrips, 1250, "34");
assert.strictEqual(filteredIn.length, 1);
console.log("  [✓] computeActiveVehicles filter: poprawne");

console.log("[✓] Wszystkie testy silnika symulacji zakończone sukcesem!");
