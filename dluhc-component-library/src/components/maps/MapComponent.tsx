import { CSSProperties, useState } from "preact/compat";
import BaseMap from "./components/BaseMap";
import DatasetControl from "./components/DatasetControl";
import DatasetLayers from "./components/DatasetLayers";
import DrawingLayer from "./components/DrawingLayer";
import MapContainer from "./components/MapContainer";
import { Boundary } from "./types";

import "./MapComponent.css";

interface MapComponentProps {
  baseMapProps?: BaseMapProps;
  drawingMapProps?: DrawingMapProps;
  showDatasets?: boolean;
  id?: string;
  className?: string;
  style?: CSSProperties;
  value?: Boundary;
  onChange?: (boundary: Boundary) => void;
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
  vertexPoints?: number;
  vertexRadius?: number;
}

const DrawingMapProperties = {
  strokeColor: "#ffcc33",
  fillColor: "rgba(255, 255, 255, 0.2)",
  strokeWidth: 2,
  vertexPoints: 4,
  vertexRadius: 5,
};

const BaseMapProperties = {
  isDrawingMode: true,
  lat: 54.97,
  lng: -1.65,
  zoom: 10,
};

const MapComponent = ({
  id,
  className = "map-container",
  style = { height: "700px", width: "100%" },
  showDatasets = true,
  value,
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

  const [datasets, setDatasets] = useState<ReadonlyArray<string>>([]);
  const selectDataset = (dataset: string) => {
    if (!datasets.includes(dataset)) {
      setDatasets([...datasets, dataset]);
    } else {
      setDatasets(
        datasets.filter((selectedDataset) => selectedDataset !== dataset),
      );
    }
  };

  return (
    <MapContainer id={id} className={className} style={style}>
      <BaseMap
        lat={customBaseMapProperties.lat}
        lng={customBaseMapProperties.lng}
        zoom={customBaseMapProperties.zoom}
        style={{ height: "100%", width: "100%" }}
      />
      <div className="map-controls">
        {showDatasets && (
          <DatasetControl
            selectedDatasets={datasets}
            onSelectDataset={selectDataset}
          />
        )}
      </div>
      {customBaseMapProperties.isDrawingMode && (
        <DrawingLayer
          strokeColor={customDrawingProperties.strokeColor}
          fillcolor={customDrawingProperties.fillColor}
          strokeWidth={customDrawingProperties.strokeWidth}
          vertexPoints={customDrawingProperties.vertexPoints}
          vertexRadius={customDrawingProperties.vertexRadius}
          value={value}
          onChange={onChange}
        />
      )}
      {showDatasets && <DatasetLayers selectedDatasets={datasets} />}
    </MapContainer>
  );
};

export default MapComponent;
