import { DateValue } from "./types";

interface DateInputProps {
  showDays?: boolean;
  value: DateValue;
  onChange: (value: DateValue) => void;
}

const DateInput = ({ showDays = true, value, onChange }: DateInputProps) => {
  return (
    <div className="flex mb-4">
      {showDays && (
        <label className="mr-2">
          <p>Day</p>
          <input
            type="text"
            value={value.day || ""}
            onChange={(event) =>
              onChange({ ...value, day: event.currentTarget.value })
            }
            className="border-2 border-black w-10 focus:outline-offset-2 focus:outline-2 focus:outline-yellow-400"
          />
        </label>
      )}

      <label className="mx-2">
        <p>Month</p>
        <input
          type="text"
          value={value.month || ""}
          onChange={(event) =>
            onChange({ ...value, month: event.currentTarget.value })
          }
          className="border-2 border-black w-10 focus:outline-offset-2 focus:outline-2 focus:outline-yellow-400"
        />
      </label>

      <label className="mx-2">
        <p>Year</p>
        <input
          type="text"
          value={value.year || ""}
          onChange={(event) =>
            onChange({ ...value, year: event.currentTarget.value })
          }
          className="border-2 border-black w-20 focus:outline-offset-2 focus:outline-2 focus:outline-yellow-400"
        />
      </label>
    </div>
  );
};

export default DateInput;
