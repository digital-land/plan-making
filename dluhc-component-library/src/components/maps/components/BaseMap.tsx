import { View } from "ol";
import TileLayer from "ol/layer/Tile";
import { useGeographic } from "ol/proj";
import { OSM } from "ol/source";
import { CSSProperties } from "preact/compat";
import { useEffect, useMemo, useRef } from "preact/hooks";
import { useMap } from "src/contexts/mapContext";
import "../../../../node_modules/ol/ol.css";

interface BaseMapProps {
  lat?: number;
  lng?: number;
  zoom?: number;
  id?: string;
  className?: string;
  style?: CSSProperties;
  zIndex?: number;
}

const BaseMap = ({
  lat = 0,
  lng = 0,
  zoom = 0,
  id,
  className,
  style,
  zIndex = 0,
}: BaseMapProps) => {
  const map = useMap();
  const props = useMemo(
    () => ({ id, className, style }),
    [id, className, style],
  );
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    useGeographic();
    const tileLayer = new TileLayer({ source: new OSM() });
    tileLayer.setZIndex(zIndex);
    map.addLayer(tileLayer);
    map.setView(
      new View({
        center: [lng, lat],
        zoom,
      }),
    );
    map.setTarget(ref.current);
  }, [lng, lat, map, ref, zoom, zIndex]);

  return <div ref={ref} {...props} />;
};

export default BaseMap;
