import { useFetchDatasets } from "src/api/planningData/api";
import { useSelectedDatasets } from "src/contexts/DatasetContext";
import DatasetList from "src/components/datasets/DatasetList";

const DatasetControl = () => {
  const { data: datasets, isLoading } = useFetchDatasets();
  const [selectedDatasets, selectDataset] = useSelectedDatasets();

  return (
    <div className="dataset-control">
      <DatasetList
        items={datasets || []}
        selectedItems={selectedDatasets}
        onSelect={selectDataset}
        isLoading={isLoading}
      />
    </div>
  );
};

export default DatasetControl;
