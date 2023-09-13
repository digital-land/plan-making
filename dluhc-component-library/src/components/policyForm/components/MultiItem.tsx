import { JSXInternal } from "node_modules/preact/src/jsx";

interface MultiItemProps {
  label?: string;
  values?: ReadonlyArray<string>;
  className?: string;
  input: (
    value: string,
    handleValueChange: (index: number, newValue: string) => void,
    index: number,
  ) => JSXInternal.Element;
  onChange: (values: ReadonlyArray<string>) => void;
}

const MultiItem = ({
  label,
  values = [],
  className,
  input,
  onChange,
}: MultiItemProps) => {
  const handleValueChange = (index: number, newValue: string) => {
    let newState = [...values];

    newState[index] = newValue;

    onChange(newState);
  };

  const handleAddClicked = () => {
    onChange([...values, ""]);
  };

  const handleDeleteClicked = (index: number) => {
    const newState = [...values];

    newState.splice(index, 1);

    onChange(newState);
  };

  const inputs = values.map((value, index) => {
    return (
      <div className="flex flex-row my-4">
        <p className="flex flex-col justify-center pr-2 font-bold">{`${index}.`}</p>
        {input(value, handleValueChange, index)}
        <button
          className="bg-red-700 hover:bg-red-800 text-white py-1 px-2"
          type="button"
          onClick={() => handleDeleteClicked(index)}
        >
          Delete
        </button>
      </div>
    );
  });

  const parentClass = `my-4 align-middle ${className}`;

  return (
    <div className={parentClass}>
      <label className="text-xl font-bold">{label}</label>
      <div className="my-2">{inputs}</div>
      <button
        className="bg-green-700 hover:bg-green-800 text-white py-1 px-2"
        type="button"
        onClick={handleAddClicked}
      >
        Add
      </button>
    </div>
  );
};

export default MultiItem;
