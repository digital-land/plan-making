import { useMemo } from "preact/hooks";
import { FormPageSchema, FormValue } from "../types";
import MultiSelect from "./MultiSelect";
import { JSXInternal } from "node_modules/preact/src/jsx";

interface DynamicFormProps {
  id: string;
  formPageSchema: FormPageSchema;
  value: FormValue;
  onFormValueChange: (id: string, value: FormValue) => void;
}

enum InputType {
  Input,
  MultiSelect,
  None,
}

const getInputType = (formPageSchema: FormPageSchema) => {
  if (formPageSchema.type === "string") {
    return formPageSchema.enum ? InputType.MultiSelect : InputType.Input;
  }

  return InputType.None;
};

const DynamicForm = ({
  id,
  formPageSchema,
  value,
  onFormValueChange,
}: DynamicFormProps) => {
  let questionInputComponent: JSXInternal.Element | null = null;

  const inputType = useMemo(
    () => getInputType(formPageSchema),
    [formPageSchema],
  );

  const handleFormValueChange = (newValue: FormValue) => {
    onFormValueChange(id, newValue);
  };

  switch (inputType) {
    case InputType.MultiSelect:
      questionInputComponent = (
        <MultiSelect
          options={formPageSchema.enum as ReadonlyArray<string>}
          values={value as Record<string, boolean>}
          onChange={handleFormValueChange}
        />
      );
      break;
  }

  return <form>{questionInputComponent}</form>;
};

export default DynamicForm;
