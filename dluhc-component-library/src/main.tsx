import { render } from "preact";
import BaseMap from "./components/maps/baseMap.tsx";
import MapContainer from "./components/maps/mapContainer.tsx";
import SiteSelectionForm from "./components/siteSelectionForm/SiteSelectionForm.tsx";
import TimetablePage from "./components/timetablePage/TimetablePage.tsx";

import "./index.css";
import DrawingLayer from "./components/maps/drawingLayer.tsx";

type Options = any;
type RenderFunction = (options: Options, element: HTMLElement) => void;

declare global {
  interface Window {
    DLUHC: Record<string, RenderFunction>;
  }
}

const renderSiteSelectionForm: RenderFunction = (
  options: {
    schemaFilepath: string;
  },
  element: HTMLElement,
) => {
  render(<SiteSelectionForm filepath={options.schemaFilepath} />, element);
};

const renderTimetable: RenderFunction = (
  options: {
    stagesFilepath: string;
    headersFilepath: string;
  },
  element: HTMLElement,
) => {
  render(
    <TimetablePage
      stagesFilepath={options.stagesFilepath}
      headersFilepath={options.headersFilepath}
    />,
    element,
  );
};

const renderMap: RenderFunction = (_options: {}, element: HTMLElement) => {
  render(
    <MapContainer>
      <BaseMap
        lat={54.97}
        lng={-1.65}
        zoom={10}
        style={{ height: "500px", width: "500px" }}
      />
      <DrawingLayer />
    </MapContainer>,
    element,
  );
};

window.DLUHC = {
  ...window.DLUHC,
  renderSiteSelectionForm,
  renderTimetable,
  renderMap,
};
