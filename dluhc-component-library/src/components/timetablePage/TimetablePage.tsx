import { useEffect, useState } from "preact/hooks";
import csvToJson from "csvtojson";
import { loadCSV, loadJson } from "../../utils";
import Timetable from "./Timetable";
import { TimetableHeader, TimetableStage } from "./types";
import AccordionDropdown from "../accordianDropdown/AccordionDropdown";

interface TimetablePageProps {
  stagesFilepath: string;
  headersFilepath: string;
}

const TimetablePage = ({
  stagesFilepath,
  headersFilepath,
}: TimetablePageProps) => {
  const [timetableData, setTimetableData] = useState<TimetableStage[]>();
  const [timetableHeaderData, setTimetableHeaderData] =
    useState<TimetableHeader>();

  const loadData = async () => {
    if (/.csv$/.test(stagesFilepath)) {
      await loadCSV(stagesFilepath).then((data) => {
        csvToJson()
          .fromString(data)
          .then((jsonObj) => setTimetableData(jsonObj as TimetableStage[]));
      });
    } else if (/.json$/.test(stagesFilepath)) {
      await loadJson(stagesFilepath).then((data) => {
        setTimetableData(data);
      });
    }

    await loadCSV(headersFilepath).then((data) => {
      csvToJson()
        .fromString(data)
        .then((jsonObj) => {
          setTimetableHeaderData(jsonObj[0] as TimetableHeader);
        });
    });
  };

  useEffect(() => {
    loadData();
  }, [
    setTimetableData,
    stagesFilepath,
    setTimetableHeaderData,
    headersFilepath,
  ]);
  return (
    <>
      <div>
        <div>
          <h1 className="my-16 text-3xl font-bold">
            {timetableHeaderData?.name}
          </h1>
          <p className="w-2/3 text-lg mb-8">
            {timetableHeaderData?.description}
          </p>
          <p className="w-2/3 mb-8 text-lg">
            This page provides updates on the progress of our New Local Plan
          </p>
        </div>
        <hr className="my-8"></hr>
        <div>
          <div className="my-8">
            <p className="text-sm">
              Published {timetableHeaderData?.published}
            </p>
            <p className="text-sm">
              last updated {timetableHeaderData?.updated} -
              <span className="text-blue-400 underline"> See all updates</span>
            </p>
          </div>
          <div>
            <p>Status: {timetableHeaderData?.status}</p>
            <p>Period: {timetableHeaderData?.periodStartToEnd}</p>
            <p>Coverage: {timetableHeaderData?.coverage}</p>
            <AccordionDropdown text="More information"></AccordionDropdown>
          </div>
        </div>
        <div>
          <h2 className="mb-6 mt-12 text-xl font-bold">Timetable</h2>
          <Timetable data={timetableData} />
        </div>
      </div>
    </>
  );
};
export default TimetablePage;
