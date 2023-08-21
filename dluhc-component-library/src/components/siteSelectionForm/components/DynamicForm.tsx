import { FormStage } from "../types";
import FormPage from "./FormPage";
import MultiSelect from "./MultiSelect";

interface DynamicFormProps {
  data: FormStage;
  onBackClicked: () => void;
  onContinueClicked: () => void;
}

enum InputType {
  Input,
  MultiSelect,
  None,
}

const getInputType = (data: FormStage) => {
  if (data.type === "string") {
    return data.enum ? InputType.MultiSelect : InputType.Input;
  }

  return InputType.None;
};

const DynamicForm = ({
  data,
  onBackClicked,
  onContinueClicked,
}: DynamicFormProps) => {
  let questionInputComponent = null;

  const inputType = getInputType(data);

  switch (inputType) {
    case InputType.MultiSelect:
      questionInputComponent = (
        <MultiSelect values={data.enum as ReadonlyArray<string>} />
      );
      break;
  }

  return (
    <FormPage
      title={data.title}
      subtitle={data.subtitle}
      onBackClicked={onBackClicked}
      onContinueClicked={onContinueClicked}
    >
      <div>{questionInputComponent}</div>
    </FormPage>
  );
};

export default DynamicForm;
