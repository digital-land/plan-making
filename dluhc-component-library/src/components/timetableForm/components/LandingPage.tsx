import { FormState } from "../types";
import { loadTimetable } from "../utils";

interface LandingPageProps {
  onContinueClick: () => void;
  onUploadTimetable: (value: FormState) => void;
}

const LandingPage = ({
  onContinueClick,
  onUploadTimetable,
}: LandingPageProps) => {
  const onUpload = async (files: FileList | null) => {
    if (!files || files.length === 0) {
      return;
    }
    const url = URL.createObjectURL(files[0]);
    const formData = await loadTimetable(url);
    return onUploadTimetable(formData);
  };

  return (
    <div className="flex flex-col">
      <h1 className="my-6 text-3xl font-bold">
        Local Plan Timetable Generation Form
      </h1>
      <p className=" mb-2 text-gray-600 w-6/12">
        This form can support you in the creation and publishing of a Local Plan
        Timetable.
      </p>
      <p className="text-blue-400 underline">
        Read more about how to publish Timetable CSV data online
      </p>
      <div>
        <button
          className="bg-green-700 hover:bg-green-800 text-white py-1 px-2 my-4"
          onClick={onContinueClick}
        >
          Start a new timetable
        </button>
      </div>
      <div>
        <label
          type="button"
          role="button"
          className="bg-green-700 hover:bg-green-800 text-white py-1 px-2"
        >
          Upload and edit an exisiting timetable
          <input
            hidden
            type="file"
            accept="text/json"
            onChange={(event) => onUpload(event.currentTarget.files)}
          />
        </label>
      </div>
    </div>
  );
};

export default LandingPage;
