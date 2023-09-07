import { useMemo } from "preact/hooks";
import { useFetchDatasets } from "src/api/planningData/api";
import DatasetList from "src/components/datasets/DatasetList";

interface DatasetControlProps {
  selectedDatasets: ReadonlyArray<string>;
  datasetFilterList?: ReadonlyArray<string>;
  onSelectDataset: (dataset: string) => void;
}

const DatasetControl = ({
  selectedDatasets,
  datasetFilterList,
  onSelectDataset,
}: DatasetControlProps) => {
  const { data: datasets, isLoading } = useFetchDatasets();

  const filteredDatasets = useMemo(() => {
    if (!datasets) {
      return [];
    }

    if (datasetFilterList && datasetFilterList.length) {
      return datasets.filter((dataset) =>
        datasetFilterList.includes(dataset.dataset),
      );
    }

    return datasets;
  }, [datasetFilterList, datasets]);

  return (
    <div className="dataset-control">
      <DatasetList
        items={filteredDatasets}
        selectedItems={selectedDatasets}
        onSelect={onSelectDataset}
        isLoading={isLoading}
      />
    </div>
  );
};

export default DatasetControl;
