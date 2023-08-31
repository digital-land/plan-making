import MapContainer from "./mapContainer";
import BaseMap from "./baseMap";
import DrawingLayer from "./drawingLayer";
import { CSSProperties } from "preact/compat";
import Polygon from "ol/geom/Polygon";

interface MapComponentProps {
  baseMapProps?: BaseMapProps;
  drawingMapProps?: DrawingMapProps;
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

const DrawingMapProperties = {
  strokeColor: "#ffcc33",
  fillColor: "rgba(255, 255, 255, 0.2)",
  strokeWidth: 2,
  circleRadius: 7,
  circleFillColor: "#ffcc33",
};

const BaseMapProperties = {
  isDrawingMode: true,
  lat: 54.97,
  lng: -1.65,
  zoom: 10,
};

const MapComponent = ({
  id,
  className,
  style = { height: "500px", width: "500px" },
  onChange,
  baseMapProps,
  drawingMapProps,
}: MapComponentProps) => {
  const customDrawingProperties = {
    ...DrawingMapProperties,
    ...drawingMapProps,
  };

  const customBaseMapProperties = {
    ...BaseMapProperties,
    ...baseMapProps,
  };

  return (
    <MapContainer id={id} className={className} style={style}>
      <BaseMap
        lat={customBaseMapProperties.lat}
        lng={customBaseMapProperties.lng}
        zoom={customBaseMapProperties.zoom}
        style={{ height: "100%", width: "100%" }}
      />
      {customBaseMapProperties.isDrawingMode && (
        <DrawingLayer
          strokeColor={customDrawingProperties.strokeColor}
          fillcolor={customDrawingProperties.fillColor}
          strokeWidth={customDrawingProperties.strokeWidth}
          circleRadius={customDrawingProperties.circleRadius}
          circleFillColor={customDrawingProperties.circleFillColor}
          onChange={onChange}
        />
      )}
    </MapContainer>
  );
};

export default MapComponent;
