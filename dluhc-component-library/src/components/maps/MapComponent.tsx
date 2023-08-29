import MapContainer from "./mapContainer";
import BaseMap from "./baseMap";
import DrawingLayer from "./drawingLayer";
import { CSSProperties, useMemo } from "preact/compat";

interface MapComponentProps {
  baseMapProps?: BaseMapProps;
  drawingMapProps?: DrawingMapProps;
  id?: string;
  className?: string;
  style?: CSSProperties;
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

const MapComponent = ({
  id,
  className,
  style = { height: "500px", width: "500px" },
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
    <MapContainer id={id} className={className} style={style}>
      <BaseMap
        lat={baseMapProps.lat}
        lng={baseMapProps.lng}
        zoom={baseMapProps.zoom}
        style={{ height: "100%", width: "100%" }}
      />
      {baseMapProps.isDrawingMode && (
        <DrawingLayer
          strokeColor={drawingMapProps.strokeColor}
          fillcolor={drawingMapProps.fillColor}
          strokeWidth={drawingMapProps.strokeWidth}
          circleRadius={drawingMapProps.circleRadius}
          circleFillColor={drawingMapProps.circleFillColor}
        />
      )}
    </MapContainer>
  );
};

export default MapComponent;
