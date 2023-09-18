export interface TextareaProps {
  value: string;
  maxLength?: number;
  label?: string;
  className?: string;
  onChange: (value: string) => void;
  multiItem?: boolean;
}

const Textarea = ({
  value,
  maxLength,
  label,
  className,
  onChange,
  multiItem = false,
}: TextareaProps) => {
  return (
    <div className={className}>
      <label className="flex text-xl font-bold flex-col">
        {label}
        <textarea
          value={value}
          onChange={(event) => onChange(event.currentTarget.value)}
          maxLength={maxLength}
          className={
            "font-semibold text-base border-2 border-black 2 h-32 focus:outline-offset-2 focus:outline-2 focus:outline-yellow-400 resize" +
            (multiItem ? "w-8/12" : "")
          }
        />
      </label>
      {maxLength && (
        <p className="text-sm mb-8 text-gray-600">
          You have {maxLength - value.length} characters remaining
        </p>
      )}
    </div>
  );
};

export default Textarea;
