import { useState } from "preact/hooks";
import DescriptionPage from "./components/DescriptionPage";
import PublishedDatePage from "./components/PublishedDatePage";
import StagesPage from "./components/StagePage";
import TitlePage from "./components/TitlePage";

const TOTAL_PAGES = 5;

const renderPage = (currentPage: number) => {
  switch (currentPage) {
    case 0:
      return <TitlePage />;
    case 1:
      return <DescriptionPage />;
    case 2:
      return <PublishedDatePage />;
    case 3:
      return <StagesPage stageName="Scoping and early participation" />;
    case 4:
      return <StagesPage stageName="Gateway 1. Check-point" />;
    default:
      return null;
  }
};

const TimetableForm = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const Page = renderPage(currentPage);

  const handleBackClicked = () => {
    if (currentPage !== 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleContinueClicked = () => {
    if (currentPage < TOTAL_PAGES - 1) {
      setCurrentPage(currentPage + 1);
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
