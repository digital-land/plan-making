import { DateInput } from "src/components/formComponents";
import { DateValue } from "src/components/formComponents/dateInput/types";

interface PublishedDatePageProps {
  value: DateValue | undefined;
  onChange: (value: DateValue) => void;
}

const PublishedDatePage = ({ value, onChange }: PublishedDatePageProps) => {
  return (
    <div className="flex flex-col">
      <h1 className="my-6 text-3xl font-bold">Timetable published date</h1>
      <p className="w-1/2">
        This is the date this version of your timetable will be published
        publicly online
      </p>
      <p className="text-sm mt-4 mb-2 text-gray-600">For example, 21 3 2025</p>
      <DateInput value={value || {}} onChange={onChange} />
    </div>
  );
};

export default PublishedDatePage;
