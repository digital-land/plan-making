import { render } from "preact";
import SiteSelectionForm from "./components/siteSelectionForm.tsx";
import Timetable from "./components/timetable/Timetable.tsx";

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
  render(<Timetable filepath={options.timetableDataPath} />, element);
};

window.DLUHC = {
  ...window.DLUHC,
  renderSiteSelectionForm,
  renderTimetable,
};
