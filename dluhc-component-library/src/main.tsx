import { render } from "preact";
import SiteSelectionForm from "./components/siteSelectionForm.tsx";

import "./index.css";

type renderFunction = (options: {}, element: HTMLElement) => void;

declare global {
  interface Window {
    DLUHC: Record<string, renderFunction>;
  }
}

const renderSiteSelectionForm: renderFunction = (
  _options: {},
  element: HTMLElement,
) => {
  render(<SiteSelectionForm />, element);
};

window.DLUHC = {
  ...window.DLUHC,
  renderSiteSelectionForm,
};
