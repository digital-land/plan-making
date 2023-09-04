import { Feature } from "ol";
import { FeatureLike } from "ol/Feature";
import { MultiPoint, Polygon } from "ol/geom";
import { Draw, Modify } from "ol/interaction";
import { DrawEvent } from "ol/interaction/Draw";
import { ModifyEvent } from "ol/interaction/Modify";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Fill, RegularShape, Stroke, Style } from "ol/style";
import { useEffect, useRef } from "preact/compat";
import { useMap } from "src/contexts/mapContext";
import { Boundary } from "../types";

interface DrawingLayerProps {
  zIndex?: number;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
  vertexPoints?: number;
  vertexRadius?: number;
  value?: Boundary;
  onChange?: (boundary: Boundary) => void;
}

const DrawingLayer = ({
  zIndex = 2,
  strokeColor = "#DD6970",
  fillColor = "rgba(221, 105, 112, 0.1)",
  strokeWidth = 2,
  vertexPoints = 4,
  vertexRadius = 5,
  value,
  onChange,
}: DrawingLayerProps) => {
  const map = useMap();

  const source = useRef(new VectorSource());

  useEffect(() => {
    const outlineStyle = new Style({
      fill: new Fill({ color: fillColor }),
      stroke: new Stroke({ color: strokeColor, width: strokeWidth }),
    });

    const vertexStyle = new Style({
      image: new RegularShape({
        fill: new Fill({
          color: fillColor,
        }),
        stroke: new Stroke({
          color: strokeColor,
          width: strokeWidth,
        }),
        points: vertexPoints,
        radius: vertexRadius,
        angle: Math.PI / 4,
      }),
      geometry: (feature: FeatureLike) => {
        const polygon = feature.getGeometry();
        if (polygon) {
          const coordinates: number[][] = (
            polygon as Polygon
          ).getCoordinates()[0];
          return new MultiPoint(coordinates);
        }
      },
    });

    const layer = new VectorLayer({
      source: source.current,
      style: [outlineStyle, vertexStyle],
      zIndex,
    });
    map.addLayer(layer);
    return () => map?.removeLayer(layer);
  }, [
    map,
    source,
    fillColor,
    strokeColor,
    strokeWidth,
    vertexPoints,
    vertexRadius,
    zIndex,
  ]);

  useEffect(() => {
    source.current.clear(); // for now, only allow 1 boundary to be drawn
    if (value) {
      source.current.addFeature(
        new Feature({ geometry: new Polygon(value as number[][][]) }),
      );
    }
  }, [value, source]);

  useEffect(() => {
    const draw = new Draw({ type: "Polygon" });
    const modify = new Modify({ source: source.current });

    map.addInteraction(draw);
    map.addInteraction(modify);

    draw.on("drawend", (event: DrawEvent) => {
      const geometry = event.feature.getGeometry();
      const coordinates = geometry
        ? (geometry as Polygon).getCoordinates()
        : [];
      if (onChange) {
        onChange(coordinates);
      }
    });

    modify.on("modifyend", (event: ModifyEvent) => {
      const geometry = event.features.getArray()[0].getGeometry();
      const coordiantes = geometry
        ? (geometry as Polygon).getCoordinates()
        : [];
      if (onChange) {
        onChange(coordiantes);
      }
    });

    return () => {
      map?.removeInteraction(draw);
    };
  }, [map, source]);

  return null;
};

export default DrawingLayer;
