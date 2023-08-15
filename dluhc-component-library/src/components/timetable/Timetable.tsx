import { useEffect, useState } from "preact/hooks";

interface TimetableProps {
  filepath: string;
}

const loadData = async (filepath: string) =>
  await fetch(filepath).then((res) => res.json());

const Timetable = ({ filepath }: TimetableProps) => {
  const [timetableData, setTimetableData] = useState();

  useEffect(() => {
    loadData(filepath).then((data) => {
      setTimetableData(data);
    });
  }, [setTimetableData, filepath]);

  return (
    <>
      <div>
        <h1>Birmingham New Local Plan Timetable</h1>
        <p>
          We are working on a new Local Plan for Birmingham which will guide how
          the city will develop in the future and provide policies to guide
          decisions on development proposals and planning applications up to
          2042.
        </p>
      </div>
      <div>
        <div>
          <p>Published some day</p>
          <p>last updated some day</p>
        </div>
        <div>
          <p>Status: New Local Plan</p>
          <p>Period: 2022 - 2042</p>
          <p>Coverage: City Wide</p>
          <a>More Information</a>
        </div>
      </div>
      <div>
        <h2>Timetable</h2>
        <a>show all sections</a>
        <div>timetable table</div>
      </div>
    </>
  );
};

export default Timetable;
