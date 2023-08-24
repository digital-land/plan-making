import DrawingLayer from "src/components/maps/drawingLayer";
import BaseMap from "../components/maps/baseMap";
import MapContainer from "../components/maps/mapContainer";

interface MapComponentProps {
  lat: number;
  lng: number;
  zoom: number;
  strokeColor: string;
  fillColor: string;
  strokeWidth: number;
  circleRadius: number;
  circleFillColor: string;
}

const MapComponent = ({
  lat,
  lng,
  zoom,
  strokeColor,
  fillColor,
  strokeWidth,
  circleRadius,
  circleFillColor,
}: MapComponentProps) => {
  return (
    <MapContainer>
      <BaseMap
        lat={lat}
        lng={lng}
        zoom={zoom}
        style={{ height: "500px", width: "500px" }}
      />
      <DrawingLayer
        strokeColor={strokeColor}
        strokeWidth={strokeWidth}
        fillcolor={fillColor}
        circleRadius={circleRadius}
        circleFillColor={circleFillColor}
      />
    </MapContainer>
  );
};

export default {
  component: MapComponent,
  title: "Components/Map/Drawing Layer",
  tags: ["autodocs"],
};

export const Default = {
  args: {
    lat: 54.97,
    lng: -1.65,
    zoom: 10,
    strokeColor: "#ffcc33",
    fillColor: "rgba(255, 255, 255, 0.2)",
    strokeWidth: 2,
    circleRadius: 7,
    circleFillColor: "#ffcc33",
  },
};
