interface MultiSelectProps {
  options: ReadonlyArray<string>;
  values?: Array<string>;
  onChange: (values: Array<string>) => void;
}

const MultiSelect = ({ options, values = [], onChange }: MultiSelectProps) => {
  if (!options.length) {
    return null;
  }

  const handleChange = (value: string, isChecked: boolean) => {
    let updatedValues;
    if (isChecked) {
      updatedValues = [...values, value];
    } else {
      updatedValues = values.filter((existingValue) => existingValue !== value);
    }
    onChange(updatedValues);
  };

  const optionComponents = options.map((key) => {
    const isChecked = values.includes(key);

    return (
      <div key={key} className="flex items-center mb-4">
        <label className="font-semibold flex">
          <input
            type="checkbox"
            class="checkbox mr-2"
            checked={isChecked}
            onClick={() => handleChange(key, !isChecked)}
          />
          <span>{key}</span>
        </label>
      </div>
    );
  });

  return <div>{optionComponents}</div>;
};

export default MultiSelect;
