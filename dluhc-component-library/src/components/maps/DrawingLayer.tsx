import { Feature } from "ol";
import { Polygon } from "ol/geom";
import { Draw } from "ol/interaction";
import { DrawEvent } from "ol/interaction/Draw";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { useEffect, useRef } from "preact/compat";
import { useMap } from "src/contexts/mapContext";

interface DrawingLayerProps {
  zIndex?: number;
  strokeColor?: string;
  fillcolor?: string;
  strokeWidth?: number;
  circleRadius?: number;
  circleFillColor?: string;
  value?: number[][][];
  onChange?: (boundary: number[][][]) => void;
}

const DrawingLayer = ({
  zIndex = 2,
  strokeColor = "#ffcc33",
  fillcolor = "rgba(255, 255, 255, 0.2)",
  strokeWidth = 2,
  circleRadius = 7,
  circleFillColor = "#ffcc33",
  value,
  onChange,
}: DrawingLayerProps) => {
  const map = useMap();

  const source = useRef(new VectorSource());

  useEffect(() => {
    const layer = new VectorLayer({
      source: source.current,
      style: {
        "fill-color": fillcolor,
        "stroke-color": strokeColor,
        "stroke-width": strokeWidth,
        "circle-radius": circleRadius,
        "circle-fill-color": circleFillColor,
      },
      zIndex,
    });
    map.addLayer(layer);
    return () => map?.removeLayer(layer);
  }, [
    map,
    source,
    fillcolor,
    strokeColor,
    strokeWidth,
    circleRadius,
    circleFillColor,
    zIndex,
  ]);

  useEffect(() => {
    source.current.clear(); // for now, only allow 1 boundary to be drawn
    if (value) {
      source.current.addFeature(new Feature({ geometry: new Polygon(value) }));
    }
  }, [value, source]);

  useEffect(() => {
    const draw = new Draw({ type: "Polygon" });
    map.addInteraction(draw);

    draw.on("drawend", (event: DrawEvent) => {
      const geometry = event.feature.getGeometry();
      const coordinates = geometry
        ? (geometry as Polygon).getCoordinates()
        : [];
      if (onChange) {
        onChange(coordinates);
      }
    });

    return () => {
      map?.removeInteraction(draw);
    };
  }, [map]);

  return null;
};

export default DrawingLayer;
