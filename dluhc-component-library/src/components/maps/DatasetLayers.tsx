import { fromExtent } from "ol/geom/Polygon";
import { useMemo } from "react";
import { useFetchDatasets } from "src/api/planningData/api";
import { useMap } from "src/contexts/mapContext";
import DatasetLayer from "./DatasetLayer";

interface DatasetLayersProps {
  selectedDatasets: string[];
}

const DatasetLayers = ({ selectedDatasets }: DatasetLayersProps) => {
  const map = useMap();
  const { data } = useFetchDatasets();

  const datasets = useMemo(
    () =>
      data?.filter((dataset) => selectedDatasets.includes(dataset.dataset)) ||
      [],
    [selectedDatasets, data],
  );

  const area = fromExtent(map.getView().calculateExtent(map.getSize()));
  const layers = datasets.map((dataset) => (
    <DatasetLayer dataset={dataset} area={area} key={dataset.dataset} />
  ));

  return <>{layers}</>;
};

export default DatasetLayers;
