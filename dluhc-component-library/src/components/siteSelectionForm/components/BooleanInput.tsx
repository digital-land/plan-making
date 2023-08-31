interface BooleanInputProps {
  value: boolean;
  onChange: (value: boolean) => void;
}

const BooleanInput = ({ value, onChange }: BooleanInputProps) => {
  const checkboxComponent = () => {
    let isChecked = value;
    return (
      <div className="flex items-center">
        <label className="font-semibold flex">
          <input
            type="checkbox"
            class="checkbox mr-2"
            checked={isChecked}
            onClick={() => onChange(!isChecked)}
          />
        </label>
      </div>
    );
  };

  return <div>{checkboxComponent()}</div>;
};

export default BooleanInput;
