import { DateInput } from "src/components/formComponents";

const PublishedDatePage = () => {
  return (
    <div className="flex flex-col">
      <h1 className="my-2 text-4xl font-bold">Timetable published date</h1>
      <p>
        This is the date this version of your timetable will be published
        publicly online
      </p>
      <p>For example, 21 3 2025</p>
      <DateInput />
    </div>
  );
};

export default PublishedDatePage;
