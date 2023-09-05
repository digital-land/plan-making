const PROGRESS_OPTIONS = [
  { id: "notStarted", name: "Not Started" },
  { id: "delayed", name: "Delayed" },
  { id: "inProgress", name: "In Progress" },
  { id: "finished", name: "Finished" },
];

const StagesPage = () => {
  return (
    <div className="flex items-center my-8">
      <label className="font-semibold flex flex-col">
        <h1 className="my-2 text-4xl font-bold">Stages</h1>

        <label className="font-semibold flex flex-col">
          Event
          <input
            class="text mr-2 border-2 border-black py-1 px-2"
            type="text"
          />
        </label>

        <label className="font-semibold flex flex-col">
          Start Date
          <input
            class="text mr-2 border-2 border-black py-1 px-2"
            type="month"
          />
        </label>

        <label className="font-semibold flex flex-col">
          End Date
          <input
            class="text mr-2 border-2 border-black py-1 px-2"
            type="month"
          />
        </label>

        <label className="font-semibold flex flex-col">
          Progress
          <select class="text mr-2 border-2 border-black py-1 px-2" type="text">
            {PROGRESS_OPTIONS.map((value) => (
              <option key={value.id}>{value.name}</option>
            ))}
          </select>
        </label>
      </label>
    </div>
  );
};

export default StagesPage;
