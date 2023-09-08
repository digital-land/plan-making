import { useState } from "preact/hooks";
import DescriptionPage from "./components/DescriptionPage";
import PublishedDatePage from "./components/PublishedDatePage";
import StagePage from "./components/StagePage";
import TitlePage from "./components/TitlePage";

const TOTAL_PAGES = 5;

const TITLE_KEY = "title";
const DESCRIPTION_KEY = "description";
const PUBLISH_DATE_KEY = "publishDate";
const SCOPING_KEY = "scoping";
const GATEWAY_1_KEY = "gateway1";

const renderPage = (
  key: string,
  value: Record<string, any>,
  handleValueChange: (value: any) => void,
) => {
  switch (key) {
    case TITLE_KEY:
      return (
        <TitlePage
          value={value[key]}
          onChange={(title) => handleValueChange({ [key]: title })}
        />
      );
    case DESCRIPTION_KEY:
      return (
        <DescriptionPage
          value={value[key]}
          onChange={(description) => handleValueChange({ [key]: description })}
        />
      );
    case PUBLISH_DATE_KEY:
      return (
        <PublishedDatePage
          value={value[key]}
          onChange={(publishDate) => handleValueChange({ [key]: publishDate })}
        />
      );
    case SCOPING_KEY:
      return (
        <StagePage
          stageName="Scoping and early participation"
          value={value[key]}
          onChange={(stage) => handleValueChange({ [key]: stage })}
        />
      );
    case GATEWAY_1_KEY:
      return (
        <StagePage
          stageName="Gateway 1. Check-point"
          value={value[key]}
          onChange={(stage) => handleValueChange({ [key]: stage })}
        />
      );
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
];

const TimetableForm = () => {
  const [data, setData] = useState<Record<string, any>>({});
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const currentPage = FORM_KEY_LIST[currentPageIndex];

  const handleValueChange = (value: any) => {
    setData({ ...data, ...value });
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
      <button
        className="bg-green-700 hover:bg-green-800 text-white py-1 px-2"
        onClick={handleContinueClicked}
      >
        Continue
      </button>
    </div>
  );
};

export default TimetableForm;
