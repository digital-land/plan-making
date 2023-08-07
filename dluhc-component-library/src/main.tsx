import { render } from "preact";
import SiteSelectionForm from "./components/siteSelectionForm.tsx";

declare global {
  interface Window {
    DLUHC: any;
  }
}

const renderSiteSelectionForm = (_options: {}, element: HTMLElement) => {
  render(<SiteSelectionForm />, element);
};

window.DLUHC = {
  ...window.DLUHC,
  renderSiteSelectionForm,
} as Record<string, () => void>;
