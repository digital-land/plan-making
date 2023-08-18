import { FormStage } from "../types";
import FormPage from "./FormPage";
import MultiSelect from "./MultiSelect";

interface DynamicFormProps {
  data: FormStage;
  onBackClicked: () => void;
  onContinueClicked: () => void;
}

const DynamicForm = ({
  data,
  onBackClicked,
  onContinueClicked,
}: DynamicFormProps) => {
  return (
    <FormPage
      title={data.title}
      subtitle={data.subtitle}
      onBackClicked={onBackClicked}
      onContinueClicked={onContinueClicked}
    >
      <div>{data.enum && <MultiSelect values={data.enum} />}</div>
    </FormPage>
  );
};

export default DynamicForm;
