interface TextareaProps {
  value: string;
  onChange: (value: string) => void;
  maxLength?: number;
}

const Textarea = ({ value, onChange, maxLength }: TextareaProps) => {
  return (
    <div>
      <textarea
        value={value}
        onChange={(event) => onChange(event.currentTarget.value)}
        maxLength={maxLength}
        className="border-2 border-black w-8/12 h-32 focus:outline-offset-2 focus:outline-2 focus:outline-yellow-400"
      />
      {maxLength && (
        <p className="text-sm mb-8 text-gray-600">
          You have {maxLength - value.length} characters remaining
        </p>
      )}
    </div>
  );
};

export default Textarea;
