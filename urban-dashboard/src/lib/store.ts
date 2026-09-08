import { create } from 'zustand'

export interface ViewState {
  longitude: number;
  latitude: number;
  zoom: number;
  pitch: number;
  bearing: number;
}

interface UrbanStore {
  selectedCity: string;
  activeHubId: number | string | null;
  activeHubLat: number | null;
  activeHubLon: number | null;
  hubFilters: string[];
  mapViewState: ViewState;
  
  mapType: 'flat' | 'satellite';
  show3DBuildings: boolean;

  activeRouteUid: string | null;
  activeDirectionId: number | null;
  activeRouteData: any | null;
  
  setCity: (city: string) => void;
  setActiveHub: (id: number | string | null, lat?: number, lon?: number) => void;
  setActiveRoute: (routeUid: string | null, directionId?: number | null) => void;
  setActiveRouteData: (data: any | null) => void;
  setFilters: (filters: string[]) => void;
  setMapViewState: (viewState: ViewState) => void;
  setMapType: (type: 'flat' | 'satellite') => void;
  setShow3DBuildings: (show: boolean) => void;
}

export const useStore = create<UrbanStore>((set) => ({
  selectedCity: 'kielce',
  activeHubId: null,
  activeHubLat: null,
  activeHubLon: null,
  hubFilters: [],
  mapType: 'flat',
  show3DBuildings: false,
  activeRouteUid: null,
  activeDirectionId: null,
  activeRouteData: null,
  mapViewState: {
    longitude: 20.6285,
    latitude: 50.8703,
    zoom: 12,
    pitch: 45,
    bearing: 0
  },
  
  setCity: (city) => set({
    selectedCity: city,
    activeHubId: null,
    activeHubLat: null,
    activeHubLon: null,
    activeRouteUid: null,
    activeDirectionId: null,
    activeRouteData: null
  }),
  setActiveHub: (id, lat, lon) => set({
    activeHubId: id,
    activeHubLat: lat ?? null,
    activeHubLon: lon ?? null,
    activeRouteUid: null,
    activeRouteData: null
  }),
  setActiveRoute: (routeUid, directionId) => set({
    activeRouteUid: routeUid,
    activeDirectionId: directionId ?? 0,
    activeHubId: null,
    activeHubLat: null,
    activeHubLon: null
  }),
  setActiveRouteData: (data) => set({ activeRouteData: data }),
  setFilters: (filters) => set({ hubFilters: filters }),
  setMapViewState: (viewState) => set({ mapViewState: viewState }),
  setMapType: (type) => set({ mapType: type }),
  setShow3DBuildings: (show) => set({ show3DBuildings: show }),
}))
