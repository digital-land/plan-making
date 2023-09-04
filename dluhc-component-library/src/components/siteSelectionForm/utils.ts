import {
  FormPageSchema,
  RadioOption,
  ValidationArraySchema,
  ValidationShape,
} from "./types";

export const convertPropertyToOptions: (
  property: FormPageSchema,
) => ReadonlyArray<RadioOption<boolean | string>> = (property) => {
  if (property.type === "boolean") {
    return [
      { label: "Yes", value: true },
      { label: "No", value: false },
    ];
  }

  if (property.type === "string" && property?.enum?.length) {
    return property.enum.map((value) => ({ label: value, value }));
  }

  return [];
};

export const isArrayValidationShape = (
  property: FormPageSchema,
  validationShape: ValidationShape,
): validationShape is ValidationArraySchema => property?.type === "array";
