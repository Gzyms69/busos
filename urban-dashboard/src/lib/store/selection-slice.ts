import type { StateCreator } from "zustand";

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

  selectObject: (type: SelectionType, id: string | number | null, data?: any) => void;
  clearSelection: () => void;
  setInspectorOpen: (open: boolean) => void;
  setActiveRoute: (routeUid: string | null, directionId?: number | null) => void;
  setActiveRouteData: (data: any | null) => void;
}

export const createSelectionSlice: StateCreator<SelectionSlice, [], [], SelectionSlice> = (set) => ({
  selectionType: null,
  selectedId: null,
  selectedData: null,
  isInspectorOpen: false,

  activeRouteUid: null,
  activeDirectionId: null,
  activeRouteData: null,

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
    }),

  setInspectorOpen: (open: boolean) =>
    set({
      isInspectorOpen: open,
    }),

  setActiveRoute: (routeUid, directionId = 0) =>
    set({
      activeRouteUid: routeUid,
      activeDirectionId: directionId,
      selectionType: routeUid ? "route" : null,
      selectedId: routeUid,
    }),

  setActiveRouteData: (data) =>
    set({
      activeRouteData: data,
    }),
});
