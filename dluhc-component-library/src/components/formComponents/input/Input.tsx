export interface InputProps<T> {
  value: T;
  type?: string;
  step?: string;
  min?: string;
  max?: string;
  label?: string;
  onChange: (value: T) => void;
}

const Input = <T extends number | string>({
  value,
  type,
  step,
  min,
  max,
  label,
  onChange,
}: InputProps<T>) => {
  const handleChange = (value: string) => {
    onChange((type === "number" ? parseFloat(value) : value) as T);
  };

  const InputBox = (
    <div className="flex items-center my-8">
      <label className="flex text-xl font-bold flex-col">
        {label}
        <input
          type={type}
          class="font-semibold text-base text mr-2 border-2 border-black py-1 px-2 focus:outline-offset-2 focus:outline-2 focus:outline-yellow-400"
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
