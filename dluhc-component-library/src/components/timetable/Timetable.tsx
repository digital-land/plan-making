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

  return <div>{filepath}</div>;
};

export default Timetable;
