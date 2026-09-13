import type { StateCreator } from "zustand";

export interface MapViewState {
  longitude: number;
  latitude: number;
  zoom: number;
  pitch: number;
  bearing: number;
}

export type H3ColorMetric =
  | "transport_score"
  | "pop_total"
  | "transit_desert"
  | "rcn_median_price_m2";

export interface MapSlice {
  viewState: MapViewState;
  mapStyle: "light" | "dark" | "satellite";
  showBoundary: boolean;
  showHexagons: boolean;
  showStops: boolean;
  showHubs: boolean;
  showRoutes: boolean;
  show3DBuildings: boolean;
  h3Metric: H3ColorMetric;

  setViewState: (viewState: Partial<MapViewState>) => void;
  setMapStyle: (style: "light" | "dark" | "satellite") => void;
  toggleLayer: (
    layer:
      | "showBoundary"
      | "showHexagons"
      | "showStops"
      | "showHubs"
      | "showRoutes"
      | "show3DBuildings"
  ) => void;
  setLayerVisible: (
    layer:
      | "showBoundary"
      | "showHexagons"
      | "showStops"
      | "showHubs"
      | "showRoutes"
      | "show3DBuildings",
    visible: boolean
  ) => void;
  setH3Metric: (metric: H3ColorMetric) => void;
  resetView: () => void;
}

const DEFAULT_VIEW_STATE: MapViewState = {
  longitude: 20.6285,
  latitude: 50.8703,
  zoom: 12,
  pitch: 0,
  bearing: 0,
};

export const createMapSlice: StateCreator<MapSlice, [], [], MapSlice> = (set, get) => ({
  viewState: DEFAULT_VIEW_STATE,
  mapStyle: "light",
  showBoundary: true,
  showHexagons: false,
  showStops: true,
  showHubs: true,
  showRoutes: true,
  show3DBuildings: false,
  h3Metric: "transport_score",

  setViewState: (partial) =>
    set({
      viewState: { ...get().viewState, ...partial },
    }),

  setMapStyle: (style) =>
    set({
      mapStyle: style,
    }),

  toggleLayer: (layer) =>
    set({
      [layer]: !get()[layer],
    } as any),

  setLayerVisible: (layer, visible) =>
    set({
      [layer]: visible,
    } as any),

  setH3Metric: (metric) =>
    set({
      h3Metric: metric,
    }),

  resetView: () =>
    set({
      viewState: {
        ...get().viewState,
        pitch: 0,
        bearing: 0,
      },
    }),
});
