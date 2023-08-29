import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Polygon from "ol/geom/Polygon";
import { CSSProperties } from "preact/compat";
import { ReactNode } from "react";
import DatasetControl from "./DatasetControl";
import DatasetLayers from "./DatasetLayers";
import "./MapComponent.css";
import BaseMap from "./baseMap";
import DrawingLayer from "./drawingLayer";
import MapContainer from "./mapContainer";

interface MapComponentProps {
  baseMapProps?: BaseMapProps;
  drawingMapProps?: DrawingMapProps;
  showDatasets?: boolean;
  id?: string;
  className?: string;
  style?: CSSProperties;
  onChange?: (boundary: Polygon) => void;
}

interface BaseMapProps {
  lat?: number;
  lng?: number;
  zoom?: number;
  isDrawingMode?: boolean;
}

interface DrawingMapProps {
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
  circleRadius?: number;
  circleFillColor?: string;
}

const queryClient = new QueryClient();

const MapComponent = ({
  id,
  className = "map-container",
  style = { height: "700px", width: "100%" },
  showDatasets = true,
  onChange,
  baseMapProps = {
    isDrawingMode: true,
    lat: 54.97,
    lng: -1.65,
    zoom: 10,
  },
  drawingMapProps = {
    strokeColor: "#ffcc33",
    fillColor: "rgba(255, 255, 255, 0.2)",
    strokeWidth: 2,
    circleRadius: 7,
    circleFillColor: "#ffcc33",
  },
}: MapComponentProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      {
        (
          <MapContainer id={id} className={className} style={style}>
            <BaseMap
              lat={baseMapProps.lat}
              lng={baseMapProps.lng}
              zoom={baseMapProps.zoom}
              style={{ height: "100%", width: "100%" }}
            />
            <div className="map-controls">
              {showDatasets && <DatasetControl />}
            </div>
            {baseMapProps.isDrawingMode && (
              <DrawingLayer
                strokeColor={drawingMapProps.strokeColor}
                fillcolor={drawingMapProps.fillColor}
                strokeWidth={drawingMapProps.strokeWidth}
                circleRadius={drawingMapProps.circleRadius}
                circleFillColor={drawingMapProps.circleFillColor}
                onChange={onChange}
              />
            )}
            {showDatasets && <DatasetLayers />}
          </MapContainer>
        ) as ReactNode
      }
    </QueryClientProvider>
  );
};

export default MapComponent;
