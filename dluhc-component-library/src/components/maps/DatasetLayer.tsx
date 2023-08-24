import { Geometry } from "ol/geom";
import { fetchEntities } from "src/api/api";
import MapLayer from "./mapLayer";
import { useQuery } from "@tanstack/react-query";
import { Dataset } from "src/api/types";

interface DatasetlayerProps {
  area: Geometry;
  dataset: Dataset;
  zIndex?: number;
}

const DatasetLayer = ({ area, dataset, zIndex = 1 }: DatasetlayerProps) => {
  const { data, isLoading, isError } = useQuery(
    ["dataset", area, dataset],
    () => fetchEntities(dataset.dataset, area),
  );

  if (isLoading || isError) {
    return null;
  }

  return (
    <MapLayer
      features={data}
      stroke={{ color: "#003078", width: 2 }}
      fill={{ color: "rgba(0, 48, 120, 0.2)" }}
      zIndex={zIndex}
    />
  );
};

export default DatasetLayer;
