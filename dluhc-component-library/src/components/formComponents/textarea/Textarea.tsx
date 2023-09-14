import "./Textarea.css";

export interface TextareaProps {
  value: string;
  maxLength?: number;
  label?: string;
  className?: string;
  onChange: (value: string) => void;
}

const Textarea = ({
  value,
  maxLength,
  label,
  className,
  onChange,
}: TextareaProps) => {
  return (
    <div className={className}>
      <label className="flex text-xl font-bold flex-col">
        {label}
        <textarea
          value={value}
          onChange={(event) => onChange(event.currentTarget.value)}
          maxLength={maxLength}
          className="font-semibold text-base border-2 border-black w-8/12 h-32 focus:outline-offset-2 focus:outline-2 focus:outline-yellow-400"
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
