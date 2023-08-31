interface BooleanInputProps {
  value: boolean;
  onChange: (value: boolean) => void;
}

const BooleanInput = ({ value, onChange }: BooleanInputProps) => {
  return (
    <div className="flex items-center">
      <label className="font-semibold flex">
        <input
          type="checkbox"
          class="checkbox mr-2"
          checked={value}
          onClick={() => onChange(!value)}
        />
      </label>
    </div>
  );
};

export default BooleanInput;
