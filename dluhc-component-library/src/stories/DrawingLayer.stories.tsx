import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "preact/compat";
import { ReactNode } from "react";
import MapComponent from "src/components/maps/MapComponent";
import { Polygon as Boundary } from "src/components/maps/types";

interface MapComponentProps {
  baseMapProps: BaseMapProps;
  drawingMapProps: DrawingMapProps;
}

interface BaseMapProps {
  lat: number;
  lng: number;
  zoom: number;
  isDrawingMode: boolean;
}

interface DrawingMapProps {
  strokeColor: string;
  fillColor: string;
  strokeWidth: number;
  circleRadius: number;
  circleFillColor: string;
}

const queryClient = new QueryClient();

const MapInput = ({ baseMapProps, drawingMapProps }: MapComponentProps) => {
  const [boundary, setBoundary] = useState<Boundary>();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {
          (
            <MapComponent
              baseMapProps={baseMapProps}
              drawingMapProps={drawingMapProps}
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
  title: "Components/Map/Drawing Layer",
  tags: ["autodocs"],
};

export const Default = {
  args: {
    baseMapProps: {
      lat: 54.97,
      lng: -1.65,
      zoom: 10,
      isDrawingMode: true,
      style: { height: "500px", width: "500px" },
    },
    drawingMapProps: {
      strokeColor: "#ffcc33",
      fillColor: "rgba(255, 255, 255, 0.2)",
      strokeWidth: 2,
      circleRadius: 7,
      circleFillColor: "#ffcc33",
    },
  },
};
