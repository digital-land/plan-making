interface CheckboxInputProps {
  value: boolean;
  onChange: (value: boolean) => void;
}

const Checkbox = ({ value, onChange }: CheckboxInputProps) => {
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

export default Checkbox;
