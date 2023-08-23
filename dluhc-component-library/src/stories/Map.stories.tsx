import DrawingLayer from "src/components/maps/drawingLayer";
import BaseMap from "../components/maps/baseMap";
import MapContainer from "../components/maps/mapContainer";

interface MapComponentProps {
  lat: number;
  lng: number;
  zoom: number;
}

const MapComponent = ({ lat, lng, zoom }: MapComponentProps) => {
  return (
    <MapContainer>
      <BaseMap
        lat={lat}
        lng={lng}
        zoom={zoom}
        style={{ height: "500px", width: "500px" }}
      />
      <DrawingLayer />
    </MapContainer>
  );
};

export default {
  component: MapComponent,
  title: "Components/Map/Base",
  tags: ["autodocs"],
};

export const Default = {
  args: {
    lat: 54.97,
    lng: -1.65,
    zoom: 10,
  },
};
