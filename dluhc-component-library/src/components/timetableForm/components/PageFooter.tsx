interface PageFooterProps {
  currentPage: number;
  totalPages: number;
  onBackClick: () => void;
  onNextClick: () => void;
  onSaveClick: () => void;
}

const PageFooter = ({
  currentPage,
  totalPages,
  onBackClick,
  onNextClick,
  onSaveClick,
}: PageFooterProps) => {
  return (
    <div>
      {currentPage !== 0 && (
        <button
          className="bg-gray-200 hover:bg-gray-300 text-black py-1 px-2 mr-5"
          onClick={onBackClick}
        >
          Back
        </button>
      )}
      {currentPage < totalPages - 1 && (
        <button
          className="bg-green-700 hover:bg-green-800 text-white py-1 px-2"
          onClick={onNextClick}
        >
          Save and continue
        </button>
      )}
      {currentPage === totalPages - 1 && (
        <button
          className="bg-green-700 hover:bg-green-800 text-white py-1 px-2"
          onClick={onSaveClick}
        >
          Save and complete
        </button>
      )}
    </div>
  );
};

export default PageFooter;
