interface DateInputProps {
  showDays?: boolean;
}

const DateInput = ({ showDays = true }: DateInputProps) => {
  return (
    <div>
      {showDays && (
        <label>
          Day
          <input type="text" className="border-2 border-black w-10" />
        </label>
      )}

      <label>
        Month
        <input type="text" className="border-2 border-black w-10" />
      </label>

      <label>
        Year
        <input type="text" className="border-2 border-black w-20" />
      </label>
    </div>
  );
};

export default DateInput;
