import { useMemo } from "preact/hooks";
import { FormPageSchema, FormValue } from "../types";
import MultiSelect from "./MultiSelect";
import { JSXInternal } from "node_modules/preact/src/jsx";
import Input from "./Input";
import RadioButtons from "./RadioButtons";
import BooleanInput from "./Checkbox";

interface DynamicFormProps {
  id: string;
  formPageSchema: FormPageSchema;
  value: FormValue;
  onFormValueChange: (id: string, value: FormValue) => void;
}

enum InputType {
  TextInput,
  NumberInput,
  RadioInput,
  MultiSelect,
  BooleanInput,
  None,
}

const getInputType = (formPageSchema: FormPageSchema) => {
  if (formPageSchema.type === "string") {
    return InputType.TextInput;
  }

  if (formPageSchema.type === "number") {
    return InputType.NumberInput;
  }

  if (formPageSchema.type === "array") {
    return InputType.MultiSelect;
  }

  if (formPageSchema.type === "radio") {
    return InputType.RadioInput;
  }

  if (formPageSchema.type == "boolean") {
    return InputType.BooleanInput;
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
    case InputType.TextInput:
      questionInputComponent = (
        <Input
          type={formPageSchema.type}
          value={(value as string) ?? ""}
          onChange={handleFormValueChange}
        />
      );

      break;

    case InputType.NumberInput:
      questionInputComponent = (
        <Input
          type={formPageSchema.type}
          value={value as number}
          step={formPageSchema.step}
          min={formPageSchema.min}
          max={formPageSchema.max}
          onChange={handleFormValueChange}
        />
      );

      break;

    case InputType.RadioInput:
      questionInputComponent = (
        <RadioButtons
          name={formPageSchema.title}
          options={formPageSchema.enum as ReadonlyArray<string>}
          value={value as String}
          onChange={handleFormValueChange}
        />
      );
      break;

    case InputType.BooleanInput:
      questionInputComponent = (
        <BooleanInput
          value={value as boolean}
          onChange={handleFormValueChange}
        />
      );
      break;
  }

  return <form>{questionInputComponent}</form>;
};

export default DynamicForm;
