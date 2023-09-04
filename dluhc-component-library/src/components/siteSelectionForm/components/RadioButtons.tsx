import { RadioOption } from "../types";

interface RadioButtonsProps<T extends string | boolean> {
  options: ReadonlyArray<RadioOption<T>>;
  value: T;
  onChange: (values: T) => void;
}

const RadioButtons = <T extends string | boolean>({
  options,
  value,
  onChange,
}: RadioButtonsProps<T>) => {
  const optionComponents = options.map((option) => (
    <div key={option.value} className="flex items-center mb-4">
      <label className="font-semibold flex">
        <input
          type="radio"
          class="radio mr-2"
          checked={value === option.value}
          onClick={() => onChange(option.value)}
        />
        <span>{option.label}</span>
      </label>
    </div>
  ));

  return <div>{optionComponents}</div>;
};

export default RadioButtons;
