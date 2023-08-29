import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { fromExtent } from "ol/geom/Polygon";
import { useState } from "preact/compat";
import { ReactNode, useMemo } from "react";
import { useFetchDatasets } from "src/api/planningData/api";
import { Dataset } from "src/api/planningData/types";
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
  const { data, isLoading } = useFetchDatasets();
  const [selectedDatasets, setSelectedDatasets] = useState<string[]>([]);

  const onSelect = (dataset: string) => {
    const index = selectedDatasets.findIndex((d) => d === dataset);
    if (index === -1) {
      setSelectedDatasets([...selectedDatasets, dataset]);
    } else {
      setSelectedDatasets(selectedDatasets.filter((_, i) => i !== index));
    }
  };

  const datasets = useMemo(() => {
    return (
      data?.filter((item) =>
        selectedDatasets.some((dataset) => item.dataset === dataset),
      ) || []
    );
  }, [data, selectedDatasets]);

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
          selectedDatasets={datasets}
        />
      </MapContainer>
      <div className="col-span-3 grid">
        <DatasetList
          items={data || []}
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
