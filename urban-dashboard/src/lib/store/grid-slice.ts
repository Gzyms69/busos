import type { StateCreator } from "zustand";

export interface GridSlice {
  // Stops Grid
  stopsOrderBy: string;
  stopsOrderDir: "asc" | "desc";
  stopsGradeFilter: string;
  stopsAnchorOnly: boolean;
  stopsSearch: string;

  // Hubs Grid
  hubsOrderBy: string;
  hubsOrderDir: "asc" | "desc";
  hubsMinStops: number;

  // Hexagons Grid
  hexOrderBy: string;
  hexOrderDir: "asc" | "desc";

  // Common Jump to Rank
  rankJump: number | null;

  setStopsOrdering: (orderBy: string, orderDir?: "asc" | "desc") => void;
  setStopsFilter: (filters: { grade?: string; anchorOnly?: boolean; search?: string }) => void;
  setHubsOrdering: (orderBy: string, orderDir?: "asc" | "desc") => void;
  setHubsMinStops: (minStops: number) => void;
  setHexOrdering: (orderBy: string, orderDir?: "asc" | "desc") => void;
  setRankJump: (rank: number | null) => void;
}

export const createGridSlice: StateCreator<GridSlice, [], [], GridSlice> = (set, get) => ({
  stopsOrderBy: "score",
  stopsOrderDir: "asc",
  stopsGradeFilter: "",
  stopsAnchorOnly: false,
  stopsSearch: "",

  hubsOrderBy: "score",
  hubsOrderDir: "asc",
  hubsMinStops: 1,

  hexOrderBy: "transport_score",
  hexOrderDir: "desc",

  rankJump: null,

  setStopsOrdering: (orderBy, orderDir) =>
    set({
      stopsOrderBy: orderBy,
      stopsOrderDir: orderDir || (get().stopsOrderBy === orderBy && get().stopsOrderDir === "asc" ? "desc" : "asc"),
    }),

  setStopsFilter: (filters) =>
    set({
      stopsGradeFilter: filters.grade !== undefined ? filters.grade : get().stopsGradeFilter,
      stopsAnchorOnly: filters.anchorOnly !== undefined ? filters.anchorOnly : get().stopsAnchorOnly,
      stopsSearch: filters.search !== undefined ? filters.search : get().stopsSearch,
    }),

  setHubsOrdering: (orderBy, orderDir) =>
    set({
      hubsOrderBy: orderBy,
      hubsOrderDir: orderDir || (get().hubsOrderBy === orderBy && get().hubsOrderDir === "asc" ? "desc" : "asc"),
    }),

  setHubsMinStops: (minStops) =>
    set({
      hubsMinStops: minStops,
    }),

  setHexOrdering: (orderBy, orderDir) =>
    set({
      hexOrderBy: orderBy,
      hexOrderDir: orderDir || (get().hexOrderBy === orderBy && get().hexOrderDir === "asc" ? "desc" : "asc"),
    }),

  setRankJump: (rank) =>
    set({
      rankJump: rank,
    }),
});
