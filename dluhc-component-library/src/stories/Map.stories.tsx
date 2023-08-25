import { CSSProperties } from "preact/compat";
import MapComponent from "src/components/maps/MapComponent";

interface MapComponentProps {
  baseMapProps: BaseMapProps;
}

interface BaseMapProps {
  lat: number;
  lng: number;
  zoom: number;
  style: CSSProperties;
  drawingMode: boolean;
}

const MapInput = ({ baseMapProps }: MapComponentProps) => {
  return <MapComponent baseMapProps={baseMapProps} />;
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
      drawingMode: false,
      style: { height: "500px", width: "500px" },
    },
  },
};
