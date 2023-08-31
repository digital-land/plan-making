import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CSSProperties } from "preact/compat";
import { ReactNode } from "react";
import MapComponent from "src/components/maps/MapComponent";

interface MapComponentProps {
  baseMapProps: BaseMapProps;
}

interface BaseMapProps {
  lat: number;
  lng: number;
  zoom: number;
  style: CSSProperties;
  isDrawingMode: boolean;
}

const queryClient = new QueryClient();

const MapInput = ({ baseMapProps }: MapComponentProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      {
        (
          <MapComponent baseMapProps={baseMapProps} showDatasets={false} />
        ) as ReactNode
      }
    </QueryClientProvider>
  );
};

export default {
  component: MapInput,
  title: "Components/Map/Base",
  tags: ["autodocs"],
};

export const Default = {
  args: {
    baseMapProps: {
      lat: 54.97,
      lng: -1.65,
      zoom: 10,
      isDrawingMode: false,
      style: { height: "500px", width: "500px" },
    },
  },
};
