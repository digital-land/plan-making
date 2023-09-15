import { FormState } from "../types";
import { getTimetableDownload } from "../utils";

interface ExportPageProps {
  value: FormState;
}

const ExportPage = ({ value }: ExportPageProps) => {
  const downloadLink = getTimetableDownload(value);
  return (
    <div>
      <h1 className="my-6 text-3xl font-bold">Export your timetable to JSON</h1>
      <p className="w-2/3 mb-4">
        When you have completed all the details, you can export your data into a
        JSON file that can generate the DLUHC TImetable Template on your
        website.
      </p>
      <p className="text-blue-400 underline mb-4">
        Read more about how to publish Timetable JSON data online
      </p>
      <a
        role="button"
        type="button"
        className="bg-green-700 hover:bg-green-800 text-white py-1 px-2"
        href={downloadLink}
        download="timetable.json"
      >
        Export Timetable JSON
      </a>
    </div>
  );
};

export default ExportPage;
