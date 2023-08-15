import { Map as OLMap } from "ol";
import { ComponentChildren, createContext } from "preact";
import { useContext } from "preact/hooks";

const MapContext = createContext<OLMap | null>(null);

const useMap = () => {
  const context = useContext(MapContext);
  if (!context) {
    throw new Error("useMap must be used within a MapProvider");
  }
  return context;
};

interface MapProviderProps {
  map: OLMap;
  children?: ComponentChildren;
}

const MapProvider = ({ map, children }: MapProviderProps) => {
  return <MapContext.Provider value={map}>{children}</MapContext.Provider>;
};

export { MapProvider, useMap };
