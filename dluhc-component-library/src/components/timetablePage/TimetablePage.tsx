import csvToJson from "csvtojson";
import { useEffect, useState } from "preact/hooks";
import { TimetableData } from "src/models/timetable/types";
import { AccordionDropdown } from "src/components/formComponents";
import { loadCSV, loadJson } from "../../utils";
import Timetable from "./Timetable";

interface TimetablePageProps {
  stagesFilepath: string;
  headersFilepath: string;
}

const DEFAULT_TIMETABLE_DATA: TimetableData = {
  title: "",
  description: "",
  publishDate: new Date(),
  updated: "",
  status: "",
  periodStartToEnd: "",
  coverage: "",
  stages: [],
};

const TimetablePage = ({
  stagesFilepath,
  headersFilepath,
}: TimetablePageProps) => {
  const [timetableData, setTimetableData] = useState<TimetableData>(
    DEFAULT_TIMETABLE_DATA,
  );

  const loadData = async () => {
    if (/.csv$/.test(stagesFilepath)) {
      let loadedData: TimetableData = DEFAULT_TIMETABLE_DATA;

      await loadCSV(stagesFilepath).then(async (data) => {
        await csvToJson()
          .fromString(data)
          .then((jsonObj) => {
            loadedData.stages = jsonObj;
          });
      });

      await loadCSV(headersFilepath).then(async (data) => {
        await csvToJson()
          .fromString(data)
          .then((jsonObj) => {
            loadedData = {
              ...loadedData,
              ...jsonObj[0],
            };
          });
      });

      setTimetableData(loadedData);
    } else if (/.json$/.test(stagesFilepath)) {
      await loadJson(stagesFilepath).then((data) => {
        setTimetableData(data);
      });
    }
  };

  useEffect(() => {
    loadData();
  }, [setTimetableData, stagesFilepath, headersFilepath]);
  return (
    <>
      <div>
        <div>
          <h1 className="my-16 text-3xl font-bold">{timetableData.title}</h1>
          <p className="w-2/3 text-lg mb-8">{timetableData.description}</p>
          <p className="w-2/3 mb-8 text-lg">
            This page provides updates on the progress of our New Local Plan
          </p>
        </div>
        <hr className="my-8"></hr>
        <div>
          <div className="my-8">
            <p className="text-sm">
              Published {new Date(timetableData.publishDate).toDateString()}
            </p>
            <p className="text-sm">
              last updated {timetableData.updated} -
              <span className="text-blue-400 underline"> See all updates</span>
            </p>
          </div>
          <div>
            <p>Status: {timetableData.status}</p>
            <p>Period: {timetableData.periodStartToEnd}</p>
            <p>Coverage: {timetableData.coverage}</p>
            <AccordionDropdown text="More information"></AccordionDropdown>
          </div>
        </div>
        <div>
          <h2 className="mb-6 mt-12 text-xl font-bold">Timetable</h2>
          <Timetable data={timetableData.stages} />
        </div>
      </div>
    </>
  );
};
export default TimetablePage;
