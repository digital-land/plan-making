interface MultiSelectProps {
  options: ReadonlyArray<string>;
  values?: Record<string, boolean>;
  onChange: (values: Record<string, boolean>) => void;
}

const MultiSelect = ({ options, values = {}, onChange }: MultiSelectProps) => {
  if (!options.length) {
    return null;
  }

  const handleChange = (key: string, value: boolean) => {
    onChange({
      ...values,
      [key]: value,
    });
  };

  const optionComponents = options.map((key) => (
    <div key={key} className="flex items-center mb-4">
      <label className="font-semibold flex">
        <input
          type="checkbox"
          class="checkbox mr-2"
          checked={values[key]}
          onClick={() => handleChange(key, !values[key])}
        />
        <span>{key}</span>
      </label>
    </div>
  ));

  return <div>{optionComponents}</div>;
};

export default MultiSelect;
