import { useEffect, useState } from "preact/hooks";
import csvToJson from "csvtojson";
import { loadCSV, loadJson } from "../../utils";
import Timetable from "./Timetable";
import { TimetableHeader, TimetableStage } from "./types";
import AccordionDropdown from "./AccordionDropdown";

interface TimetablePageProps {
  filepath: string;
  headersFilepath: string;
}

const TimetablePage = ({ filepath, headersFilepath }: TimetablePageProps) => {
  const [timetableData, setTimetableData] = useState<TimetableStage[]>();
  const [timetableHeaderData, setTimetableHeaderData] =
    useState<TimetableHeader>();

  useEffect(() => {
    console.log({ headersFilepath });

    loadCSV(headersFilepath).then((data) => {
      csvToJson()
        .fromString(data)
        .then((jsonObj) => {
          console.log("setting timetable data:", jsonObj[0]);
          console.log({ data: jsonObj[0] });
          //setTimetableHeaderData(jsonObj[0] as TimetableHeader);
          setTimetableHeaderData({
            name: "Test name",
            description: "Description",
          } as TimetableHeader);
        });
    });
  }, [setTimetableHeaderData, headersFilepath]);

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
    console.log("test load data effect");
  }, [setTimetableData, filepath]);

  // console.log("Headers");
  // console.log(headersFilepath);
  // console.log(timetableHeaderData);
  // console.log("data");
  // console.log(timetableData);

  // let x = null;
  // if (timetableHeaderData) {
  //   x = timetableHeaderData[0];
  // }

  console.log("rerender");

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
            This page provides updates on the progress of our New Local Plan.
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
            <p>
              Period: {timetableHeaderData?.periodStartDate} -{" "}
              {timetableHeaderData?.periodEndDate}
            </p>
            <p>Coverage: {timetableHeaderData?.coverage}</p>
            <AccordionDropdown></AccordionDropdown>
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
