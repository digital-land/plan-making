import { render } from "preact";
import BaseMap from "./components/maps/baseMap.tsx";
import MapContainer from "./components/maps/mapContainer.tsx";
import SiteSelectionForm from "./components/siteSelectionForm.tsx";
import TimetablePage from "./components/timetablePage/TimetablePage.tsx";

import "./index.css";

type Options = any;
type RenderFunction = (options: Options, element: HTMLElement) => void;

declare global {
  interface Window {
    DLUHC: Record<string, RenderFunction>;
  }
}

const renderSiteSelectionForm: RenderFunction = (
  _options: {},
  element: HTMLElement,
) => {
  render(<SiteSelectionForm />, element);
};

const renderTimetable: RenderFunction = (
  options: {
    timetableFilepath: string;
  },
  element: HTMLElement,
) => {
  render(<TimetablePage filepath={options.timetableFilepath} />, element);
};

const renderMap: RenderFunction = (_options: {}, element: HTMLElement) => {
  render(
    <MapContainer>
      <BaseMap
        mapId="site-selection-map"
        lat={54.97}
        lng={-1.65}
        zoom={10}
        style={{ height: "500px", width: "500px" }}
      ></BaseMap>
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
