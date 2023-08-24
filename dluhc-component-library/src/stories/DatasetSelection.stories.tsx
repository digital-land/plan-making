import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { fromExtent } from "ol/geom/Polygon";
import { useState } from "preact/compat";
import { ReactNode } from "react";
import { fetchDatasetList } from "src/api/api";
import { Dataset } from "src/api/types";
import DatasetList from "src/components/datasets/DatasetList";
import DatasetLayer from "src/components/maps/DatasetLayer";
import BaseMap from "src/components/maps/baseMap";
import MapContainer from "src/components/maps/mapContainer";
import { useMap } from "src/contexts/mapContext";

const queryClient = new QueryClient();

interface MapComponentProps {
  lat: number;
  lng: number;
  zoom: number;
  selectedDatasets: Dataset[];
}

interface DatasetSelectionProps {
  lat: number;
  lng: number;
  zoom: number;
}

const MapComponent = ({
  lat,
  lng,
  zoom,
  selectedDatasets,
}: MapComponentProps) => {
  const map = useMap();
  const area = fromExtent(map.getView().calculateExtent(map.getSize()));
  return (
    <>
      <BaseMap lat={lat} lng={lng} zoom={zoom} className="h-full" />
      {selectedDatasets.map((dataset) => (
        <DatasetLayer dataset={dataset} area={area} key={dataset.dataset} />
      ))}
    </>
  );
};

const DatasetSelection = ({ lat, lng, zoom }: DatasetSelectionProps) => {
  const { data: datasets, isLoading } = useQuery({
    queryKey: ["datasets"],
    queryFn: () => fetchDatasetList(),
    select: (data) =>
      data.datasets.sort((a, b) => a.name.localeCompare(b.name)),
  });

  const [selectedDatasets, setSelectedDatasets] = useState<Dataset[]>([]);

  const onSelect = (dataset: Dataset) => {
    const index = selectedDatasets.findIndex(
      (d) => d.dataset === dataset.dataset,
    );
    if (index === -1) {
      setSelectedDatasets([...selectedDatasets, dataset]);
    } else {
      setSelectedDatasets(selectedDatasets.filter((_, i) => i !== index));
    }
  };

  return (
    <div
      className="grid grid-rows-1 grid-cols-8 h-full"
      style={{ height: "500px" }}
    >
      <MapContainer style={{ height: "100%" }} className="col-span-5">
        <MapComponent
          lat={lat}
          lng={lng}
          zoom={zoom}
          selectedDatasets={selectedDatasets}
        />
      </MapContainer>
      <div className="col-span-3 grid">
        <DatasetList
          items={datasets || []}
          selectedItems={selectedDatasets}
          onSelect={onSelect}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

const queryWrapper = ({ lat, lng, zoom }: MapComponentProps) => (
  <QueryClientProvider client={queryClient}>
    {(<DatasetSelection lat={lat} lng={lng} zoom={zoom} />) as ReactNode}
  </QueryClientProvider>
);

export default {
  component: queryWrapper,
  title: "Components/Map/Dataset Selection",
  tags: ["autodocs"],
};

export const Default = {
  args: {
    lat: 54.98,
    lng: -1.62,
    zoom: 12.9,
  },
};
