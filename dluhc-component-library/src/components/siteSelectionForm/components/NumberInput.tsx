interface NumberInputProps {
  value: number;
  onChange: (value: number) => void;
}

const NumberInput = ({ value, onChange }: NumberInputProps) => {
  const numberInputBox = (
    <div className="flex items-center mb-4">
      <label className="font-semibold flex">
        <input
          type="number"
          class="text mr-2"
          step="1"
          min="18"
          max="100"
          value={value}
          onChange={(event) => onChange(event.currentTarget.valueAsNumber)}
        />
      </label>
    </div>
  );

  return <div>{numberInputBox}</div>;
};

export default NumberInput;
