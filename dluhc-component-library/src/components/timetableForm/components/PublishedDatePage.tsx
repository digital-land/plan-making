import { DateInput } from "src/components/formComponents";

const PublishedDatePage = () => {
  return (
    <div className="flex flex-col">
      <h1 className="my-6 text-3xl font-bold">Timetable published date</h1>
      <p className="w-1/2">
        This is the date this version of your timetable will be published
        publicly online
      </p>
      <p className="text-sm mt-4 mb-2 text-gray-600">For example, 21 3 2025</p>
      <DateInput />
    </div>
  );
};

export default PublishedDatePage;
