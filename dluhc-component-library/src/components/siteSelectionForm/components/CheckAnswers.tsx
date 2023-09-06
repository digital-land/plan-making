interface CheckAnswersProps {
  onBackClicked: () => void;
  onSubmitClicked: () => void;
}

const CheckAnswers = ({
  onBackClicked,
  onSubmitClicked,
}: CheckAnswersProps) => {
  return (
    <div>
      <div className="form-page-header mb-4">
        <h1 className="my-2 text-4xl font-bold">Check your answers</h1>
      </div>
      <div className="form-page-footer mt-10 flex space-x-6">
        <button
          className="bg-gray-200 hover:bg-gray-300 text-black py-1 px-2"
          onClick={onBackClicked}
        >
          Back
        </button>
        <button
          className="bg-green-700 hover:bg-green-800 text-white py-1 px-2"
          onClick={onSubmitClicked}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default CheckAnswers;
