/**
 * BusOS Palantir Foundry — Formatters & Export Helpers
 */

export function formatNumber(
  val: number | null | undefined,
  decimals: number = 1,
  fallback: string = "—"
): string {
  if (val == null || !Number.isFinite(val)) return fallback;
  return new Intl.NumberFormat("pl-PL", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(val);
}

export function formatPLN(
  val: number | null | undefined,
  perM2: boolean = false,
  fallback: string = "—"
): string {
  if (val == null || !Number.isFinite(val)) return fallback;
  const formatted = new Intl.NumberFormat("pl-PL", {
    maximumFractionDigits: 0,
  }).format(Math.round(val));
  return perM2 ? `${formatted} PLN/m²` : `${formatted} PLN`;
}

export function formatSpeed(
  kmh: number | null | undefined,
  fallback: string = "—"
): string {
  if (kmh == null || !Number.isFinite(kmh)) return fallback;
  return `${formatNumber(kmh, 1)} km/h`;
}

export function formatDistance(
  meters: number | null | undefined,
  fallback: string = "—"
): string {
  if (meters == null || !Number.isFinite(meters)) return fallback;
  if (meters >= 1000) {
    return `${formatNumber(meters / 1000, 2)} km`;
  }
  return `${Math.round(meters)} m`;
}

export function formatDuration(
  seconds: number | null | undefined,
  fallback: string = "—"
): string {
  if (seconds == null || !Number.isFinite(seconds)) return fallback;
  const s = Math.round(seconds);
  const min = Math.floor(s / 60);
  const remSec = s % 60;
  if (min === 0) return `${remSec}s`;
  if (remSec === 0) return `${min}m`;
  return `${min}m ${remSec}s`;
}

export function exportToCsv(
  filename: string,
  headers: string[],
  rows: (string | number | boolean | null | undefined)[][]
): void {
  const sanitize = (cell: any) => {
    if (cell == null) return '""';
    const str = String(cell).replace(/"/g, '""');
    return `"${str}"`;
  };

  const headerLine = headers.map(sanitize).join(";");
  const rowLines = rows.map((r) => r.map(sanitize).join(";"));
  const csvContent = "\uFEFF" + [headerLine, ...rowLines].join("\r\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", filename.endsWith(".csv") ? filename : `${filename}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function exportToJson(filename: string, data: any): void {
  const jsonContent = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonContent], { type: "application/json;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", filename.endsWith(".json") ? filename : `${filename}.json`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
