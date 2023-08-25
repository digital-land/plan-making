import { useMemo } from "preact/compat";
import { Dataset } from "src/api/planningData/types";

interface DatasetSelectProps {
  item: Dataset;
  selected: boolean;
  onSelect: (item: Dataset) => void;
}

const DatasetSelect = ({ item, selected, onSelect }: DatasetSelectProps) => {
  const id = useMemo(() => `${item.dataset}-checkbox`, [item]);

  return (
    <div key={item.dataset} className="flex items-center mb-4">
      <input
        id={id}
        className="h-5 w-5 flex-none cursor-pointer"
        type="checkbox"
        checked={selected}
        onChange={() => onSelect(item)}
      />
      <label htmlFor={id} className="ml-2 font-semibold cursor-pointer">
        {item.name}
      </label>
    </div>
  );
};

export default DatasetSelect;
