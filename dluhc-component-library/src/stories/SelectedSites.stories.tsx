import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Feature from "ol/Feature";
import { useState } from "preact/compat";
import { ReactNode } from "react";
import MapComponent from "src/components/maps/MapComponent";
import { Boundary } from "src/components/maps/types";

interface MapComponentProps {
  baseMapProps: BaseMapProps;
  submittedSites: Feature[];
}

interface BaseMapProps {
  lat: number;
  lng: number;
  zoom: number;
  isDrawingMode: boolean;
}

const queryClient = new QueryClient();

const MapInput = ({ baseMapProps }: MapComponentProps) => {
  const [boundary, setBoundary] = useState<Boundary>();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {
          (
            <MapComponent
              baseMapProps={baseMapProps}
              showDatasets={false}
              value={boundary}
              onChange={setBoundary}
            />
          ) as ReactNode
        }
      </QueryClientProvider>
    </>
  );
};

export default {
  component: MapInput,
  title: "Components/Map/SelectedSites",
  tags: ["autodocs"],
};

export const Default = {
  args: {
    baseMapProps: {
      isDrawingMode: false,
      lat: 54.97,
      lng: -1.65,
      zoom: 10,
      style: { height: "500px", width: "500px" },
    },
    submittedSites: {},
  },
};
