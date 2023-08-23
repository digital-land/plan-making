interface RadioButtonsProps {
  name: string;
  options: ReadonlyArray<string>;
  value: String;
  onChange: (values: string) => void;
}

const RadioButtons = ({
  name,
  options,
  value,
  onChange,
}: RadioButtonsProps) => {
  if (!options.length) {
    return null;
  }

  const optionComponents = options.map((key) => (
    <div key={key} className="flex items-center mb-4">
      <label className="font-semibold flex">
        <input
          type="radio"
          class="radio mr-2"
          name={name}
          checked={value === key}
          onClick={() => onChange(key)}
        />
        <span>{key}</span>
      </label>
    </div>
  ));

  return <div>{optionComponents}</div>;
};

export default RadioButtons;
