import { GeometryCollection } from "ol/geom";
import Polygon from "ol/geom/Polygon";
import { Draw } from "ol/interaction";
import VectorLayer from "ol/layer/Vector";
import VectorSource, { VectorSourceEvent } from "ol/source/Vector";
import { useEffect, useRef } from "react";
import { fetchDataset } from "src/api/api";
import { useMap } from "src/contexts/mapContext";

interface DrawingLayerProps {
  zIndex?: number;
  strokeColor?: string;
  fillcolor?: string;
  strokeWidth?: number;
  circleRadius?: number;
  circleFillColor?: string;
}

const DrawingLayer = ({
  zIndex = 2,
  strokeColor = "#ffcc33",
  fillcolor = "rgba(255, 255, 255, 0.2)",
  strokeWidth = 2,
  circleRadius = 7,
  circleFillColor = "#ffcc33",
}: DrawingLayerProps) => {
  let features: GeometryCollection | undefined;
  const map = useMap();
  const source = new VectorSource();
  const vector = new VectorLayer({
    source: source,
    style: {
      "fill-color": fillcolor,
      "stroke-color": strokeColor,
      "stroke-width": strokeWidth,
      "circle-radius": circleRadius,
      "circle-fill-color": circleFillColor,
    },
  });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    map.addInteraction(new Draw({ source: source, type: "Polygon" }));
    vector.setZIndex(zIndex);
    map.addLayer(vector);

    source.on("addfeature", async function (evt: VectorSourceEvent) {
      let feature = evt.feature;
      let geometry = feature?.getGeometry() as Polygon;
      features = await fetchDataset(geometry);
    });
  }, [ref, zIndex]);

  return <div ref={ref} />;
};

export default DrawingLayer;
