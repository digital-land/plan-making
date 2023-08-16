import { View } from "ol";
import TileLayer from "ol/layer/Tile";
import { useGeographic } from "ol/proj";
import { OSM } from "ol/source";
import { CSSProperties } from "preact/compat";
import { useEffect, useMemo } from "preact/hooks";
import "../../../node_modules/ol/ol.css";
import { useMap } from "../../contexts/mapContext";

interface BaseMapProps {
  mapId: string;
  lat?: number;
  lng?: number;
  zoom?: number;
  className?: string;
  style?: CSSProperties;
}

const BaseMap = ({
  mapId,
  lat = 0,
  lng = 0,
  zoom = 0,
  className,
  style,
}: BaseMapProps) => {
  const map = useMap();
  const props = useMemo(() => ({ className, style }), [className, style]);

  useEffect(() => {
    useGeographic();
    map.setLayers([new TileLayer({ source: new OSM() })]);
    map.setView(
      new View({
        center: [lng, lat],
        zoom,
      }),
    );
    map.setTarget(mapId);
  }, [lng, lat, map, mapId, zoom]);

  return <div id={mapId} {...props} />;
};

export default BaseMap;
