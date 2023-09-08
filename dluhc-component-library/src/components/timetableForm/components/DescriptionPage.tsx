import { Textarea } from "src/components/formComponents";

interface DescriptionPageProps {
  value: string | undefined;
  onChange: (value: string) => void;
}

const DescriptionPage = ({ value, onChange }: DescriptionPageProps) => {
  return (
    <div className="flex flex-col">
      <h1 className="my-6 text-3xl font-bold">Summary text</h1>
      <p className="text-sm mb-2 text-gray-600">
        Keep this specific to your own Local Plan
      </p>
      <Textarea value={value || ""} onChange={onChange} maxLength={400} />
    </div>
  );
};

export default DescriptionPage;
