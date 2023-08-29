import { ComponentChildren, createContext } from "preact";
import { useContext, useState } from "preact/hooks";

const DatasetContext = createContext<{
  selectedDatasets: string[];
  selectDataset: (dataset: string) => void;
} | null>(null);

const useSelectedDatasets = () => {
  const context = useContext(DatasetContext);
  if (!context) {
    throw new Error("useDatasets must be used within a DatasetProvider");
  }
  return [context.selectedDatasets, context.selectDataset] as const;
};

interface DatasetProviderProps {
  initialDatasets?: string[];
  children?: ComponentChildren;
}

const DatasetProvider = ({
  initialDatasets = [],
  children,
}: DatasetProviderProps) => {
  const [datasets, setDatasets] = useState(initialDatasets);

  const selectDataset = (dataset: string) => {
    if (!datasets.includes(dataset)) {
      setDatasets([...datasets, dataset]);
    } else {
      setDatasets(datasets.filter((d) => d !== dataset));
    }
  };

  return (
    <DatasetContext.Provider
      value={{ selectedDatasets: datasets, selectDataset }}
    >
      {children}
    </DatasetContext.Provider>
  );
};

export { DatasetProvider, useSelectedDatasets };
