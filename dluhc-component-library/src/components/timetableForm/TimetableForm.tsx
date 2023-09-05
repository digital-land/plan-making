import { useMemo, useState } from "preact/hooks";
import DescriptionPage from "./components/DescriptionPage";
import PageFooter from "./components/PageFooter";
import StagesPage from "./components/StagesPage";
import TitlePage from "./components/TitlePage";

const TIMETABLE_FORM_PAGES = new Map([
  ["title", TitlePage],
  ["description", DescriptionPage],
  ["stages", StagesPage],
]);

const TIMETABLE_PAGE_IDS = ["title", "description", "stages"];

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

  return (
    <div>
      <div>{PageComponent && <PageComponent />}</div>
      <PageFooter
        currentPage={currentPage}
        totalPages={TIMETABLE_PAGE_IDS.length}
        onBackClick={() => setCurrentPage(currentPage - 1)}
        onNextClick={() => setCurrentPage(currentPage + 1)}
        onSaveClick={() => {}}
      />
    </div>
  );
};

export default TimetableForm;
