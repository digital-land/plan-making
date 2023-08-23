import { useCallback } from "preact/hooks";
import DatasetSelect from "./DatasetSelect";
import { Dataset } from "src/api/types";

interface DatasetListProps {
  title?: string;
  items: Dataset[];
  selectedItems: Dataset[];
  onSelect: (dataset: Dataset) => void;
}

const DatasetList = ({
  title = "Data Layers",
  items,
  selectedItems,
  onSelect,
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
    <div className="grid border max-h-full overflow-hidden">
      <div className="text-xl font-bold border-b p-2">{title}</div>
      <div className="pt-2 px-2 overflow-y-auto overscroll-none">
        {datasets}
      </div>
    </div>
  );
};

export default DatasetList;
