import { useMemo, useState } from "preact/hooks";
import DescriptionPage from "./components/DescriptionPage";
import PublishedDatePage from "./components/PublishedDatePage";
import TitlePage from "./components/TitlePage";

const TIMETABLE_FORM_PAGES = new Map([
  ["title", TitlePage],
  ["description", DescriptionPage],
  ["publishedDate", PublishedDatePage],
]);

const TIMETABLE_PAGE_IDS = ["title", "description", "publishedDate"];

const TimetableForm = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const currentPageId = useMemo(
    () => TIMETABLE_PAGE_IDS[currentPage],
    [currentPage],
  );

  const PageComponent = useMemo(
    () => TIMETABLE_FORM_PAGES.get(currentPageId),
    [currentPage],
  );

  const handleBackClicked = () => {
    if (currentPage !== 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleContinueClicked = () => {
    if (currentPage < TIMETABLE_PAGE_IDS.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <button
        className="bg-gray-200 hover:bg-gray-300 py-1 px-2"
        onClick={handleBackClicked}
      >
        Back
      </button>
      <div>{PageComponent && <PageComponent />}</div>
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
