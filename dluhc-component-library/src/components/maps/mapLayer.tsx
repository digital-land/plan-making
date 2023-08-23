import { useEffect } from "react";
import { useMap } from "../../contexts/mapContext";
import { FeatureCollection } from "geojson";
import VectorSource from "ol/source/Vector";
import GeoJSON from "ol/format/GeoJSON";
import VectorImageLayer from "ol/layer/VectorImage";
import Style from "ol/style/Style";
import Fill, { Options as FillOptions } from "ol/style/Fill";
import Stroke, { Options as StrokeOptions } from "ol/style/Stroke";
import { useRef } from "preact/hooks";
import BaseLayer from "ol/layer/Base";

interface MapLayerProps {
  features: FeatureCollection;
  stroke: StrokeOptions;
  fill: FillOptions;
  zIndex: number;
}

const MapLayer = ({ features, stroke, fill, zIndex = 2 }: MapLayerProps) => {
  const map = useMap();
  const layer = useRef<BaseLayer | null>(null);

  useEffect(() => {
    if (layer.current) {
      map.removeLayer(layer.current);
      layer.current = null;
    }

    const source = new VectorSource({
      features: new GeoJSON().readFeatures(features),
    });
    layer.current = new VectorImageLayer({
      source,
      style: new Style({
        fill: new Fill(fill),
        stroke: new Stroke(stroke),
      }),
    });

    layer.current.setZIndex(zIndex);
    map.addLayer(layer.current);

    return () => {
      layer.current && map?.removeLayer(layer.current);
    };
  }, [features, map, layer, stroke, fill]);

  return null;
};

export default MapLayer;
