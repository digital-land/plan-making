import { Geometry } from "ol/geom";
import { Options as FillOptions } from "ol/style/Fill";
import { Options as StrokeOptions } from "ol/style/Stroke";
import { useMemo } from "preact/compat";
import { useFetchEntities } from "src/api/planningData/api";
import { Dataset } from "src/api/planningData/types";
import MapLayer from "./MapLayer";

interface DatasetlayerProps {
  area: Geometry;
  dataset: Dataset;
  zIndex?: number;
}

const DatasetLayer = ({ area, dataset, zIndex = 1 }: DatasetlayerProps) => {
  const { data, isLoading, isError } = useFetchEntities(area, dataset.dataset);

  if (isLoading || isError) {
    return null;
  }

  const stroke: StrokeOptions = useMemo(() => {
    const color = dataset["paint-options"]
      ? dataset["paint-options"].colour
      : "#003078";
    return { color, width: 2 };
  }, [dataset]);

  const fill: FillOptions = useMemo(() => {
    const paintOptions = dataset["paint-options"];
    if (!paintOptions) {
      return { color: "rgba(0, 48, 120, 0.2)" };
    }

    const { colour, opacity } = paintOptions;
    const red = parseInt(colour.slice(1, 3), 16);
    const green = parseInt(colour.slice(3, 5), 16);
    const blue = parseInt(colour.slice(5, 7), 16);

    return { color: `rgb(${red}, ${green}, ${blue}, ${opacity || 0.2})` };
  }, [dataset]);

  return (
    <MapLayer features={data} stroke={stroke} fill={fill} zIndex={zIndex} />
  );
};

export default DatasetLayer;
