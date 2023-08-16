import { render } from "preact";
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
