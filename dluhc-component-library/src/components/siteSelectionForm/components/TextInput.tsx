interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
}

const TextInput = ({ value, onChange }: TextInputProps) => {
  const textInputBox = (
    <div className="flex items-center mb-4">
      <label className="font-semibold flex">
        <input
          type="text"
          class="text mr-2"
          value={value}
          onChange={(event) => onChange(event.currentTarget.value)}
        />
      </label>
    </div>
  );

  return <div>{textInputBox}</div>;
};

export default TextInput;
