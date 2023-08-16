import { Map as OLMap } from "ol";
import { ComponentChildren } from "preact";
import { CSSProperties, useMemo, useState } from "preact/compat";
import { MapProvider } from "../../contexts/mapContext";

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
  const [map] = useState(new OLMap());
  const props = useMemo(
    () => ({ id, className, style }),
    [id, className, style],
  );

  return (
    <MapProvider map={map} {...props}>
      {children}
    </MapProvider>
  );
};

export default MapContainer;
