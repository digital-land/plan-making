import { ComponentChildren } from "preact";

interface FormPageProps {
  children?: ComponentChildren;
  title: string;
  subtitle?: string;
  onBackClicked: () => void;
  onContinueClicked: () => void;
}

const FormPage = ({
  children,
  title,
  subtitle,
  onBackClicked,
  onContinueClicked,
}: FormPageProps) => {
  return (
    <div>
      <div className="form-page-header mb-4">
        <h1 className="my-2 text-4xl font-bold">{title}</h1>
        {subtitle ? <p>{subtitle}</p> : null}
      </div>
      <div className="form-page-body mb-4">{children}</div>
      <div className="form-page-footer mt-10 flex space-x-6">
        <button
          className="bg-gray-200 hover:bg-gray-300 text-black py-1 px-2"
          onClick={onBackClicked}
        >
          Back
        </button>
        <button
          className="bg-green-700 hover:bg-green-800 text-white py-1 px-2"
          onClick={onContinueClicked}
        >
          Save and continue
        </button>
      </div>
    </div>
  );
};

export default FormPage;
