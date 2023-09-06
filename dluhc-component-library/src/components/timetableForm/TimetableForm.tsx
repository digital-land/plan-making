import { useMemo, useState } from "preact/hooks";
import DescriptionPage from "./components/DescriptionPage";
import PublishedDatePage from "./components/PublishedDatePage";
import TitlePage from "./components/TitlePage";

const TIMETABLE_FORM_PAGES = [
  { id: "title", component: TitlePage },
  { id: "description", component: DescriptionPage },
  { id: "publishedDate", component: PublishedDatePage },
];

const TimetableForm = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const page = useMemo(() => TIMETABLE_FORM_PAGES[currentPage], [currentPage]);

  const handleBackClicked = () => {
    if (currentPage !== 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleContinueClicked = () => {
    if (currentPage < TIMETABLE_FORM_PAGES.length - 1) {
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
      <div>{page && <page.component />}</div>
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
