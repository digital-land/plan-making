import { useCallback } from "preact/hooks";
import { Dataset } from "src/api/planningData/types";
import DatasetSelect from "./DatasetSelect";

interface DatasetListProps {
  title?: string;
  items: Dataset[];
  selectedItems: ReadonlyArray<string>;
  onSelect: (dataset: string) => void;
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
    (dataset: string) => selectedItems.includes(dataset),
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
    <div className="flex flex-col border h-full overflow-hidden">
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
