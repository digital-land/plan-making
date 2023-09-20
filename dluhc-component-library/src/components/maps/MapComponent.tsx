import { CSSProperties, useState } from "preact/compat";
import { Options as FillOptions } from "ol/style/Fill";
import { Options as StrokeOptions } from "ol/style/Stroke";

import BaseMap from "./components/BaseMap";
import DatasetControl from "./components/DatasetControl";
import DatasetLayers from "./components/DatasetLayers";
import DrawingLayer from "./components/DrawingLayer";
import MapContainer from "./components/MapContainer";
import MapLayer from "./components/MapLayer";
import { Boundary } from "./types";
import { boundaryToFeature } from "./utils";

import "./MapComponent.css";

interface MapComponentProps {
  baseMapProps?: BaseMapProps;
  drawingMapProps?: DrawingMapProps;
  showDatasets?: boolean;
  datasetFilterList?: ReadonlyArray<string>;
  id?: string;
  className?: string;
  style?: CSSProperties;
  value?: Boundary;
  onChange?: (boundary: Boundary) => void;
  boundaries?: Boundary[];
  strokeOptions?: StrokeOptions;
  fillOptions?: FillOptions;
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
  pointerStrokeColor?: string;
  pointerFillColor?: string;
  pointerRadius?: number;
}

const DrawingMapProperties = {
  strokeColor: "#DD6970",
  fillColor: "rgba(221, 105, 112, 0.1)",
  strokeWidth: 2,
  vertexPoints: 4,
  vertexRadius: 5,
  pointerStrokeColor: "white",
  pointerFillColor: "#DD6970",
  pointerRadius: 5,
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
  style = { height: "700px", width: "100%" },
  showDatasets = true,
  strokeOptions = { color: "#6495ED", width: 2 },
  fillOptions = { color: "rgba(0, 48, 120, 0.2)" },
  datasetFilterList,
  value,
  onChange,
  boundaries,
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

  const containerClassName = `map-container ${className}`;

  return (
    <MapContainer id={id} className={containerClassName} style={style}>
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
            datasetFilterList={datasetFilterList}
          />
        )}
      </div>
      {customBaseMapProperties.isDrawingMode && (
        <DrawingLayer
          {...customDrawingProperties}
          value={value}
          onChange={onChange}
        />
      )}
      {showDatasets && <DatasetLayers selectedDatasets={datasets} />}
      {boundaries && (
        <MapLayer
          features={boundaryToFeature(boundaries)}
          stroke={strokeOptions}
          fill={fillOptions}
          populated={true}
        />
      )}
    </MapContainer>
  );
};

export default MapComponent;
