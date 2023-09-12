interface LandingPageProps {
  onContinueClick: () => void;
}

const LandingPage = ({ onContinueClick }: LandingPageProps) => {
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
        <button className="bg-green-700 hover:bg-green-800 text-white py-1 px-2">
          Upload and edit an exisiting timetable
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
