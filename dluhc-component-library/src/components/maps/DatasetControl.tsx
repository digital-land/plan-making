import { useFetchDatasets } from "src/api/planningData/api";
import DatasetList from "src/components/datasets/DatasetList";

interface DatasetControlProps {
  selectedDatasets: ReadonlyArray<string>;
  onSelectDataset: (dataset: string) => void;
}

const DatasetControl = ({
  selectedDatasets,
  onSelectDataset,
}: DatasetControlProps) => {
  const { data: datasets, isLoading } = useFetchDatasets();

  return (
    <div className="dataset-control">
      <DatasetList
        items={datasets || []}
        selectedItems={selectedDatasets}
        onSelect={onSelectDataset}
        isLoading={isLoading}
      />
    </div>
  );
};

export default DatasetControl;
