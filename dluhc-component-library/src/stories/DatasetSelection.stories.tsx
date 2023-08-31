import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import MapComponent from "src/components/maps/MapComponent";

interface MapComponentProps {
  baseMapProps: BaseMapProps;
  showDatasets: boolean;
}

interface BaseMapProps {
  lat: number;
  lng: number;
  zoom: number;
  isDrawingMode: boolean;
}

const queryClient = new QueryClient();

const MapInput = ({ baseMapProps, showDatasets }: MapComponentProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      {
        (
          <MapComponent
            baseMapProps={baseMapProps}
            showDatasets={showDatasets}
          />
        ) as ReactNode
      }
    </QueryClientProvider>
  );
};

export default {
  component: MapInput,
  title: "Components/Map/Dataset Selection",
  tags: ["autodocs"],
};

export const Default = {
  args: {
    baseMapProps: { lat: 54.98, lng: -1.58, zoom: 12.9, isDrawingMode: false },
    showDatasets: true,
  },
};
