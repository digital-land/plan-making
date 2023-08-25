interface InputProps<T> {
  value: T;
  type: string;
  step?: string;
  min?: string;
  max?: string;
  onChange: (value: T) => void;
}

const Input = <T extends number | string>({
  value,
  type,
  step,
  min,
  max,
  onChange,
}: InputProps<T>) => {
  const handleChange = (value: string) => {
    let parsedValue: number | string = value;

    if (type == "number") {
      parsedValue = Number(value);
    }

    onChange(parsedValue as T);
  };

  const InputBox = (
    <div className="flex items-center mb-4">
      <label className="font-semibold flex">
        <input
          type={type}
          class="text mr-2"
          value={value}
          onChange={(event) => handleChange(event.currentTarget.value)}
          step={step}
          min={min}
          max={max}
        />
      </label>
    </div>
  );

  return <div>{InputBox}</div>;
};

export default Input;
