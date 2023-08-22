import Polygon from "ol/geom/Polygon";
import { Draw } from "ol/interaction";
import VectorLayer from "ol/layer/Vector";
import VectorSource, { VectorSourceEvent } from "ol/source/Vector";
import { useEffect, useRef } from "react";
import { fetchDataset } from "src/api/api";
import { useMap } from "src/contexts/mapContext";

const DrawingLayer = () => {
  const map = useMap();
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
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    map.addInteraction(new Draw({ source: source, type: "Polygon" }));

    map.addLayer(vector);

    source.on("addfeature", async function (evt: VectorSourceEvent) {
      let feature = evt.feature;
      let geometry = feature?.getGeometry() as Polygon;
      let features = await fetchDataset(geometry);
      console.log(features);
    });
  }, [ref]);

  return <div ref={ref} />;
};

export default DrawingLayer;
