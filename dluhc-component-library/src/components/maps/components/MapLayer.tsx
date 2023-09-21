import Feature from "ol/Feature";
import BaseLayer from "ol/layer/Base";
import VectorImageLayer from "ol/layer/VectorImage";
import VectorSource from "ol/source/Vector";
import Fill, { Options as FillOptions } from "ol/style/Fill";
import Stroke, { Options as StrokeOptions } from "ol/style/Stroke";
import Style from "ol/style/Style";
import { useEffect, useRef } from "preact/hooks";
import { useMap } from "src/contexts/mapContext";
import { isEmpty } from "ol/extent";

interface MapLayerProps {
  features: Feature[];
  stroke: StrokeOptions;
  fill: FillOptions;
  zIndex?: number;
  fitView?: boolean;
}

const MapLayer = ({
  features,
  stroke,
  fill,
  zIndex = 1,
  fitView = false,
}: MapLayerProps) => {
  const map = useMap();
  const layer = useRef<BaseLayer | null>(null);

  useEffect(() => {
    if (layer.current) {
      map.removeLayer(layer.current);
      layer.current = null;
    }

    const source = new VectorSource({
      features: features,
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

    if (fitView && !isEmpty(source.getExtent())) {
      map.getView().fit(source.getExtent(), { padding: [10, 10, 10, 10] });
    }

    return () => {
      layer.current && map?.removeLayer(layer.current);
    };
  }, [features, map, layer, stroke, fill]);

  return null;
};

export default MapLayer;
