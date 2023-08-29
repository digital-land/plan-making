import { fromExtent } from "ol/geom/Polygon";
import { useSelectedDatasets } from "src/contexts/DatasetContext";
import { useMap } from "src/contexts/mapContext";
import DatasetLayer from "./DatasetLayer";
import { useMemo } from "react";
import { useFetchDatasets } from "src/api/planningData/api";

const DatasetLayers = () => {
  const map = useMap();
  const [selectedDatasets] = useSelectedDatasets();
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
