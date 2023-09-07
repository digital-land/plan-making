import { useMemo, useState } from "preact/hooks";
import DescriptionPage from "./components/DescriptionPage";
import PublishedDatePage from "./components/PublishedDatePage";
import StagesPage from "./components/StagePage";
import TitlePage from "./components/TitlePage";

const TIMETABLE_FORM_PAGES = [
  { id: "title", component: TitlePage },
  { id: "description", component: DescriptionPage },
  { id: "publishedDate", component: PublishedDatePage },
  {
    id: "scoping",
    component: StagesPage,
    props: { stageName: "Scoping and early participation" },
  },
  {
    id: "gateway1",
    component: StagesPage,
    props: { stageName: "Gateway 1. Check-point" },
  },
];

const TimetableForm = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const page = useMemo(() => {
    const formPage = TIMETABLE_FORM_PAGES[currentPage];

    if (!formPage) {
      return;
    }

    return formPage.props ? (
      <formPage.component {...formPage.props} />
    ) : (
      <formPage.component />
    );
  }, [currentPage]);

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
      <div>{page}</div>
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
