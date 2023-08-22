import { View } from "ol";
import TileLayer from "ol/layer/Tile";
import { useGeographic } from "ol/proj";
import { OSM } from "ol/source";
import { CSSProperties } from "preact/compat";
import { useEffect, useMemo, useRef } from "preact/hooks";
import "../../../node_modules/ol/ol.css";
import { Draw } from "ol/interaction.js";
import { useMap } from "../../contexts/mapContext";
import VectorSource, { VectorSourceEvent } from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import { Polygon } from "ol/geom";
import { fetchDataset } from "src/api/api";

interface BaseMapProps {
  lat?: number;
  lng?: number;
  zoom?: number;
  id?: string;
  className?: string;
  style?: CSSProperties;
}

const BaseMap = ({
  lat = 0,
  lng = 0,
  zoom = 0,
  id,
  className,
  style,
}: BaseMapProps) => {
  const map = useMap();
  const props = useMemo(
    () => ({ id, className, style }),
    [id, className, style],
  );
  const ref = useRef<HTMLDivElement>(null);
  const source = new VectorSource();
  const vector = new VectorLayer({
    source: source,
    style: {
      "fill-color": "rgba(255, 255, 255, 0.2)",
      "stroke-color": "#ffcc33",
      "stroke-width": 2,
      "circle-radius": 7,
      "circle-fill-color": "#ffcc33",
    },
  });

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    useGeographic();
    map.setLayers([new TileLayer({ source: new OSM() }), vector]);
    map.setView(
      new View({
        center: [lng, lat],
        zoom,
      }),
    );
    map.setTarget(ref.current);
    map.addInteraction(new Draw({ source: source, type: "Polygon" }));
    source.on("addfeature", async function (evt: VectorSourceEvent) {
      let feature = evt.feature;
      let geometry = feature?.getGeometry() as Polygon;
      let features = await fetchDataset(geometry);
    });
  }, [lng, lat, map, ref, zoom]);

  return <div ref={ref} {...props} />;
};

export default BaseMap;
