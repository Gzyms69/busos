export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://api.busos.czerwinskidawid.pl";

export interface ApiFetchOptions extends RequestInit {
  timeoutMs?: number;
}

export class ApiError extends Error {
  constructor(
    public status: number,
    public statusText: string,
    message: string
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export type ConnectivityStatus = "online" | "offline" | "reconnecting";
export type ConnectivityListener = (status: ConnectivityStatus, error?: string | null) => void;

const connectivityListeners = new Set<ConnectivityListener>();

export function onConnectivityChange(listener: ConnectivityListener): () => void {
  connectivityListeners.add(listener);
  return () => {
    connectivityListeners.delete(listener);
  };
}

export function notifyConnectivity(status: ConnectivityStatus, error?: string | null): void {
  connectivityListeners.forEach((fn) => {
    try {
      fn(status, error);
    } catch {}
  });
}

export async function apiFetch<T>(
  path: string,
  options: ApiFetchOptions = {}
): Promise<T> {
  const { timeoutMs = 30000, signal, ...fetchOptions } = options;

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  // Link external signal to internal controller
  if (signal) {
    signal.addEventListener("abort", () => controller.abort());
  }

  const url = path.startsWith("http") ? path : `${API_BASE_URL}${path}`;

  try {
    const res = await fetch(url, {
      ...fetchOptions,
      signal: controller.signal,
    });

    clearTimeout(timer);

    if (!res.ok) {
      const errorBody = await res.text().catch(() => "");
      if (res.status === 429) {
        notifyConnectivity("offline", "Przekroczono limit zapytań (429)");
      } else if (res.status >= 500) {
        notifyConnectivity("offline", `Błąd serwera API (${res.status})`);
      }
      throw new ApiError(
        res.status,
        res.statusText,
        `API request to ${path} failed (${res.status} ${res.statusText}): ${errorBody}`
      );
    }

    notifyConnectivity("online");
    return (await res.json()) as T;
  } catch (err: any) {
    clearTimeout(timer);
    if (err.name === "AbortError") {
      throw err;
    }
    notifyConnectivity("offline", err.message || "Brak połączenia z serwerem API");
    throw err;
  }
}
