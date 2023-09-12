import Option from "./Option";

import "./MultiSelect.css";

interface MultiSelectProps {
  options: ReadonlyArray<{ key: string; label: string }>;
  values?: ReadonlyArray<string>;
  className?: string;
  onChange: (values: ReadonlyArray<string>) => void;
}

const MultiSelect = ({
  options,
  values = [],
  className,
  onChange,
}: MultiSelectProps) => {
  if (!options.length) {
    return null;
  }

  const handleChange = (key: string, isChecked: boolean) => {
    if (isChecked) {
      onChange([...values, key]);
    } else {
      onChange(values.filter((existingValue) => existingValue !== key));
    }
  };

  const optionComponents = options.map((option) => {
    const isChecked = values.includes(option.key);

    return (
      <Option
        key={option.key}
        option={option}
        isChecked={isChecked}
        onChange={handleChange}
      />
    );
  });

  return <div className={className}>{optionComponents}</div>;
};

export default MultiSelect;
