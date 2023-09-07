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
        className="border-2 border-black"
      />
      {maxLength && (
        <p>You have {maxLength - value.length} characters remaining</p>
      )}
    </div>
  );
};

export default Textarea;
