const DateInput = () => {
  return (
    <div className="flex mb-4">
      <label className="mr-2">
        <p>Day</p>
        <input
          type="text"
          className="border-2 border-black w-10 focus:outline-offset-2 focus:outline-2 focus:outline-yellow-400"
        />
      </label>

      <label className="mx-2">
        <p>Month</p>
        <input
          type="text"
          className="border-2 border-black w-10 focus:outline-offset-2 focus:outline-2 focus:outline-yellow-400"
        />
      </label>

      <label className="mx-2">
        <p>Year</p>
        <input
          type="text"
          className="border-2 border-black w-20 focus:outline-offset-2 focus:outline-2 focus:outline-yellow-400"
        />
      </label>
    </div>
  );
};

export default DateInput;
