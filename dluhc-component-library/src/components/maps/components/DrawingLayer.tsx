import { Feature } from "ol";
import { FeatureLike } from "ol/Feature";
import { MultiPoint, Polygon } from "ol/geom";
import { Draw, Modify, Snap } from "ol/interaction";
import { DrawEvent } from "ol/interaction/Draw";
import { ModifyEvent } from "ol/interaction/Modify";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Fill, RegularShape, Stroke, Style } from "ol/style";
import CircleStyle from "ol/style/Circle";
import { useEffect, useMemo, useRef } from "preact/compat";
import { useMap } from "src/contexts/mapContext";
import { Boundary } from "../types";

interface DrawingLayerProps {
  zIndex?: number;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
  vertexPoints?: number;
  vertexRadius?: number;
  pointerStrokeColor?: string;
  pointerFillColor?: string;
  pointerRadius?: number;
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
  pointerStrokeColor = "white",
  pointerFillColor = "#DD6970",
  pointerRadius = 5,
  value,
  onChange,
}: DrawingLayerProps) => {
  const map = useMap();

  const source = useRef(new VectorSource());

  const stroke = useMemo(
    () => new Stroke({ color: strokeColor, width: strokeWidth }),
    [strokeColor, strokeWidth],
  );
  const fill = useMemo(() => new Fill({ color: fillColor }), [fillColor]);

  const pointerStyle = useMemo(() => {
    return new Style({
      stroke,
      fill,
      image: new CircleStyle({
        radius: pointerRadius,
        stroke: new Stroke({ color: pointerStrokeColor }),
        fill: new Fill({ color: pointerFillColor }),
      }),
    });
  }, [stroke, fill, pointerStrokeColor, pointerFillColor, pointerRadius]);

  const outlineStyle = useMemo(
    () => new Style({ fill, stroke }),
    [fill, stroke],
  );

  const vertexStyle = useMemo(() => {
    return new Style({
      image: new RegularShape({
        fill,
        stroke,
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
  }, [fill, stroke, vertexPoints, vertexRadius]);

  useEffect(() => {
    const layer = new VectorLayer({
      source: source.current,
      style: [outlineStyle, vertexStyle],
      zIndex,
    });
    map.addLayer(layer);
    return () => map?.removeLayer(layer);
  }, [map, source, outlineStyle, vertexStyle, zIndex]);

  useEffect(() => {
    source.current.clear(); // for now, only allow 1 boundary to be drawn
    if (value) {
      source.current.addFeature(
        new Feature({ geometry: new Polygon(value as number[][][]) }),
      );
    }
  }, [value, source]);

  useEffect(() => {
    const draw = new Draw({ type: "Polygon", style: pointerStyle });
    const modify = new Modify({ source: source.current, style: pointerStyle });
    const snap = new Snap({ source: source.current });

    map.addInteraction(draw);
    map.addInteraction(modify);
    map.addInteraction(snap);

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
      map?.removeInteraction(modify);
      map?.removeInteraction(snap);
    };
  }, [map, source, pointerStyle]);

  return null;
};

export default DrawingLayer;
