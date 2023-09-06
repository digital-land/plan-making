import Textarea from "./Textarea";

const DescriptionPage = () => {
  return (
    <div className="flex flex-col">
      <h1 className="my-2 text-4xl font-bold">Summary text</h1>
      <p>Keep this specific to your own Local Plan</p>
      <Textarea value="" onChange={() => {}} maxLength={400} />
    </div>
  );
};

export default DescriptionPage;
