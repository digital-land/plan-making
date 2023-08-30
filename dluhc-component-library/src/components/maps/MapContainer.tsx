import { Map as OLMap, View } from "ol";
import {
  ComponentChildren,
  cloneElement,
  isValidElement,
  toChildArray,
} from "preact";
import { CSSProperties, useMemo, useState } from "preact/compat";
import { MapProvider } from "src/contexts/mapContext";

interface MapContainerProps {
  id?: string;
  className?: string;
  style?: CSSProperties;
  children?: ComponentChildren;
}

const MapContainer = ({
  id,
  className,
  style,
  children,
}: MapContainerProps) => {
  const [map] = useState(
    new OLMap({ view: new View({ center: [0, 0], zoom: 0 }) }),
  );
  const props = useMemo(
    () => ({ id, className, style }),
    [id, className, style],
  );

  const childrenWithProps = toChildArray(children).map((child, index) => {
    if (isValidElement(child)) {
      return cloneElement(child, { zIndex: index });
    }
    return child;
  });

  return (
    <MapProvider map={map}>
      <div {...props}>{childrenWithProps}</div>
    </MapProvider>
  );
};

export default MapContainer;
