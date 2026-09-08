import { apiFetch } from "./client";
import type { SimilarHubItem } from "./types";

export async function fetchSimilarHubs(
  city: string,
  hubId: string | number,
  topK: number = 5,
  signal?: AbortSignal
): Promise<SimilarHubItem[]> {
  return apiFetch<SimilarHubItem[]>("/api/v1/ai/similar-hubs", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      city,
      hub_id: String(hubId),
      top_k: topK,
    }),
    signal,
  });
}
