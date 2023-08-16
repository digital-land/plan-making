import { render } from "preact";
import SiteSelectionForm from "./components/siteSelectionForm.tsx";
import TimetablePage from "./components/timetablePage/TimetablePage.tsx";

import "./index.css";

// TODO update any
type renderFunction = (options: any, element: HTMLElement) => void;

declare global {
  interface Window {
    DLUHC: Record<string, renderFunction>;
  }
}

const renderSiteSelectionForm: renderFunction = (
  _options: {},
  element: HTMLElement
) => {
  render(<SiteSelectionForm />, element);
};

const renderTimetable: renderFunction = (
  options: {
    timetableDataPath: string;
  },
  element: HTMLElement
) => {
  render(<TimetablePage filepath={options.timetableDataPath} />, element);
};

window.DLUHC = {
  ...window.DLUHC,
  renderSiteSelectionForm,
  renderTimetable,
};
