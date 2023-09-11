interface OptionProps {
  option: { key: string; label: string };
  isChecked: boolean;
  onChange: (key: string, value: boolean) => void;
}

const Option = ({ option, isChecked, onChange }: OptionProps) => {
  return (
    <div className="flex items-center mb-4">
      <label className="font-semibold flex">
        <input
          type="checkbox"
          class="checkbox mr-2"
          checked={isChecked}
          onClick={() => onChange(option.key, !isChecked)}
        />
        <span>{option.label}</span>
      </label>
    </div>
  );
};

export default Option;
