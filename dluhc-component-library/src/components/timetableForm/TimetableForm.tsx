import { useState } from "preact/hooks";
import DescriptionPage from "./components/DescriptionPage";
import ExportPage from "./components/ExportPage";
import PublishedDatePage from "./components/PublishedDatePage";
import StagePage from "./components/StagePage";
import TitlePage from "./components/TitlePage";
import {
  DESCRIPTION_KEY,
  EXPORT_KEY,
  GATEWAY_1_KEY,
  INITIAL_STATE,
  PUBLISH_DATE_KEY,
  SCOPING_KEY,
  TITLE_KEY,
} from "./constants";
import { FormState, FormValue } from "./types";

const TOTAL_PAGES = 6;

const renderPage = (
  key: string,
  value: FormState,
  handleValueChange: (key: keyof FormState, value: FormValue) => void,
) => {
  switch (key) {
    case TITLE_KEY:
      return (
        <TitlePage
          value={value[key]}
          onChange={(title) => handleValueChange(key, title)}
        />
      );
    case DESCRIPTION_KEY:
      return (
        <DescriptionPage
          value={value[key]}
          onChange={(description) => handleValueChange(key, description)}
        />
      );
    case PUBLISH_DATE_KEY:
      return (
        <PublishedDatePage
          value={value[key]}
          onChange={(publishDate) => handleValueChange(key, publishDate)}
        />
      );
    case SCOPING_KEY:
      return (
        <StagePage
          stageName="Scoping and early participation"
          value={value[key]}
          onChange={(stage) => handleValueChange(key, stage)}
        />
      );
    case GATEWAY_1_KEY:
      return (
        <StagePage
          stageName="Gateway 1. Check-point"
          value={value[key]}
          onChange={(stage) => handleValueChange(key, stage)}
        />
      );
    case EXPORT_KEY:
      return <ExportPage value={value} />;
    default:
      return null;
  }
};

const FORM_KEY_LIST = [
  TITLE_KEY,
  DESCRIPTION_KEY,
  PUBLISH_DATE_KEY,
  SCOPING_KEY,
  GATEWAY_1_KEY,
  EXPORT_KEY,
];

const TimetableForm = () => {
  const [data, setData] = useState<FormState>(INITIAL_STATE);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const currentPage = FORM_KEY_LIST[currentPageIndex];

  const handleValueChange = (key: keyof FormState, value: FormValue) => {
    setData({ ...data, [key]: value });
  };

  const Page = renderPage(currentPage, data, handleValueChange);

  const handleBackClicked = () => {
    if (currentPageIndex !== 0) {
      setCurrentPageIndex(currentPageIndex - 1);
    }
  };

  const handleContinueClicked = () => {
    if (currentPageIndex < TOTAL_PAGES - 1) {
      setCurrentPageIndex(currentPageIndex + 1);
    }
  };

  return (
    <div>
      <div>
        &lt;
        <p
          className="underline hover:decoration-2 py-1 px-2 inline-block cursor-pointer"
          onClick={handleBackClicked}
        >
          Back
        </p>
      </div>
      <div>{Page}</div>
      {currentPage !== EXPORT_KEY && (
        <button
          className="bg-green-700 hover:bg-green-800 text-white py-1 px-2"
          onClick={handleContinueClicked}
        >
          Continue
        </button>
      )}
    </div>
  );
};

export default TimetableForm;
