import { ComponentChildren } from "preact";
import { Boundary } from "src/components/maps/types";
import {
  FormPageSchema,
  FormValue,
  QuestionType,
  UiPropertySchema,
  Widget,
} from "../types";
import MultiSelect from "./MultiSelect";
import Input from "./Input";
import RadioButtons from "./RadioButtons";
import Checkbox from "./Checkbox";
import MapPage from "./MapPage";
import { convertPropertyToOptions } from "../utils";

interface DynamicFormProps {
  id: string;
  formPageSchema: FormPageSchema;
  uiSchema?: UiPropertySchema;
  value: FormValue;
  onFormValueChange: (id: string, value: FormValue) => void;
}

enum InputType {
  TextInput,
  NumberInput,
  RadioInput,
  MultiSelect,
  Checkbox,
  Map,
  None,
}

const InputTypeMap: Record<QuestionType, InputType> = {
  string: InputType.TextInput,
  number: InputType.NumberInput,
  array: InputType.MultiSelect,
  boolean: InputType.Checkbox,
  object: InputType.None,
};

const widgetMap: Record<Widget, InputType> = {
  radio: InputType.RadioInput,
  map: InputType.Map,
};

const getInputType = (dataType: QuestionType, widgetType?: Widget) => {
  if (widgetType) {
    return widgetMap[widgetType];
  }

  return InputTypeMap[dataType];
};

const DynamicForm = ({
  id,
  formPageSchema,
  uiSchema,
  value,
  onFormValueChange,
}: DynamicFormProps) => {
  let questionInputComponent: ComponentChildren | null = null;

  const handleFormValueChange = (newValue: FormValue) => {
    onFormValueChange(id, newValue);
  };

  switch (getInputType(formPageSchema.type, uiSchema?.["ui:widget"])) {
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
          options={convertPropertyToOptions(formPageSchema)}
          value={value as string | boolean}
          onChange={handleFormValueChange}
        />
      );
      break;

    case InputType.Checkbox:
      questionInputComponent = (
        <Checkbox value={value as boolean} onChange={handleFormValueChange} />
      );
      break;

    case InputType.Map:
      questionInputComponent = (
        <MapPage value={value as Boundary} onChange={handleFormValueChange} />
      );
      break;
  }

  return <form>{questionInputComponent}</form>;
};

export default DynamicForm;
