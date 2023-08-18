interface MultiSelectProps {
  values: ReadonlyArray<String>;
}

const MultiSelect = ({ values }: MultiSelectProps) => {
  if (!values.length) {
    return null;
  }

  const options = values.map((value) => (
    <div key={value} className="flex items-center mb-4">
      <input type="checkbox" class="checkbox" />
      <label className="ml-2 font-semibold">{value}</label>
    </div>
  ));

  return <div>{options}</div>;
};

export default MultiSelect;
