import type { StateCreator } from "zustand";
import type { AxeStopItem } from "@/lib/api/types";

export type SelectionType = "stop" | "hub" | "hex" | "route" | null;

export interface SelectionSlice {
  selectionType: SelectionType;
  selectedId: string | number | null;
  selectedData: any | null;
  isInspectorOpen: boolean;

  // Active Route GTFS state
  activeRouteUid: string | null;
  activeDirectionId: number | null;
  activeRouteData: any | null;

  // Selected Axe List pair for map vector
  selectedAxePair: AxeStopItem | null;

  // Cross-highlighting hover state (Table <-> Map)
  hoveredType: SelectionType;
  hoveredId: string | number | null;
  setHoveredObject: (type: SelectionType, id: string | number | null) => void;

  selectObject: (type: SelectionType, id: string | number | null, data?: any) => void;
  clearSelection: () => void;
  setInspectorOpen: (open: boolean) => void;
  setActiveRoute: (
    routeUid: string | null,
    directionId?: number | null,
    setAsPrimarySelection?: boolean
  ) => void;
  setActiveRouteData: (data: any | null) => void;
  setSelectedAxePair: (pair: AxeStopItem | null) => void;
}

export const createSelectionSlice: StateCreator<SelectionSlice, [], [], SelectionSlice> = (set) => ({
  selectionType: null,
  selectedId: null,
  selectedData: null,
  isInspectorOpen: false,

  activeRouteUid: null,
  activeDirectionId: null,
  activeRouteData: null,
  selectedAxePair: null,
  hoveredType: null,
  hoveredId: null,

  setHoveredObject: (type, id) =>
    set({
      hoveredType: type,
      hoveredId: id,
    }),

  selectObject: (type, id, data = null) =>
    set({
      selectionType: type,
      selectedId: id,
      selectedData: data,
      isInspectorOpen: id != null,
    }),

  clearSelection: () =>
    set({
      selectionType: null,
      selectedId: null,
      selectedData: null,
      isInspectorOpen: false,
      selectedAxePair: null,
      activeRouteUid: null,
      activeDirectionId: null,
      activeRouteData: null,
    }),

  setInspectorOpen: (open: boolean) =>
    set({
      isInspectorOpen: open,
    }),

  setActiveRoute: (routeUid, directionId = 0, setAsPrimarySelection = false) =>
    set((state) => ({
      activeRouteUid: routeUid,
      activeDirectionId: directionId,
      ...(setAsPrimarySelection
        ? {
            selectionType: routeUid ? "route" : null,
            selectedId: routeUid,
            isInspectorOpen: Boolean(routeUid),
          }
        : {}),
    })),

  setActiveRouteData: (data) =>
    set({
      activeRouteData: data,
    }),

  setSelectedAxePair: (pair) =>
    set({
      selectedAxePair: pair,
    }),
});
