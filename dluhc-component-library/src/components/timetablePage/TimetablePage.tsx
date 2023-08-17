import { useEffect, useState } from "preact/hooks";
import Timetable from "./Timetable";
import csvToJson from "csvtojson";
import { TimetableStage } from "./types";

interface TimetablePageProps {
  filepath: string;
}

const loadJson = async (filepath: string) =>
  await fetch(filepath).then((res) => res.json());

const loadCSV = async (filepath: string) =>
  await fetch(filepath).then((res) => res.text());

const TimetablePage = ({ filepath }: TimetablePageProps) => {
  const [timetableData, setTimetableData] = useState<TimetableStage[]>();

  useEffect(() => {
    if (/.csv$/.test(filepath)) {
      loadCSV(filepath).then((data) => {
        csvToJson()
          .fromString(data)
          .then((jsonObj) => setTimetableData(jsonObj as TimetableStage[]));
      });
    } else if (/.json$/.test(filepath)) {
      loadJson(filepath).then((data) => {
        setTimetableData(data);
      });
    }
  }, [setTimetableData, filepath]);

  return (
    <>
      <div>
        <div>
          <h1 className="my-16 text-3xl font-bold">
            Birmingham New Local Plan Timetable
          </h1>
          <p className="w-2/3 text-lg mb-8">
            We are working on a new Local Plan for Birmingham which will guide
            how the city will develop in the future and provide policies to
            guide decisions on development proposals and planning applications
            up to 2042.
          </p>
          <p className="w-2/3 mb-8 text-lg">
            This page provides updates on the progress of our New Local Plan.
          </p>
        </div>
        <hr className="my-8"></hr>
        <div>
          <div className="my-8">
            <p className="text-sm">Published 5 january 2023</p>
            <p className="text-sm">
              last updated 5 january 2023 -
              <span className="text-blue-400 underline"> See all updates</span>
            </p>
          </div>
          <div>
            <p>Status: New Local Plan</p>
            <p>Period: 2022 - 2042</p>
            <p>Coverage: City Wide</p>
            <a className="text-blue-400 underline">➤ More Information</a>
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
