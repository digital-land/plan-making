import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "preact/compat";
import { ReactNode } from "react";
import MapComponent from "src/components/maps/MapComponent";
import { Boundary } from "src/components/maps/types";

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
  pointerStrokeColor: string;
  pointerFillColor: string;
  pointerRadius: number;
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
      strokeColor: "#DD6970",
      fillColor: "rgba(221, 105, 112, 0.1)",
      strokeWidth: 2,
      vertexPoints: 4,
      vertexRadius: 5,
      pointerStrokeColor: "white",
      pointerFillColor: "#DD6970",
      pointerRadius: 5,
    },
  },
};
