import { Textarea } from "src/components/formComponents";

const TitlePage = () => {
  return (
    <div className="flex flex-col">
      <h1 className="my-6 text-3xl font-bold">Local Plan title</h1>
      <p className="text-sm mb-2 text-gray-600">
        Such as Birmingham City 2025-2040 Local Plan timetable
      </p>
      <Textarea value="" onChange={() => {}} maxLength={100} />
    </div>
  );
};

export default TitlePage;
