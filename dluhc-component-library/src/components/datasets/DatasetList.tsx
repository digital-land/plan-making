import { useCallback } from "preact/hooks";
import DatasetSelect from "./DatasetSelect";
import { Dataset } from "src/api/planningData/types";

interface DatasetListProps {
  title?: string;
  items: Dataset[];
  selectedItems: Dataset[];
  onSelect: (dataset: Dataset) => void;
  isLoading?: boolean;
}

const DatasetList = ({
  title = "Data Layers",
  items,
  selectedItems,
  onSelect,
  isLoading = false,
}: DatasetListProps) => {
  const isSelected = useCallback(
    (dataset: string) => selectedItems.some((item) => item.dataset === dataset),
    [selectedItems],
  );

  const datasets = items.map((item) => (
    <DatasetSelect
      key={item.dataset}
      item={item}
      selected={isSelected(item.dataset)}
      onSelect={onSelect}
    />
  ));

  return (
    <div className="flex flex-col border max-h-full overflow-hidden">
      <div className="text-xl font-bold border-b p-2">{title}</div>
      <div className="pt-2 px-2 overflow-y-auto overscroll-none grow flex flex-col">
        {!isLoading ? (
          datasets
        ) : (
          <div className="text-center flex flex-col justify-center grow">
            Loading...
          </div>
        )}
      </div>
    </div>
  );
};

export default DatasetList;
