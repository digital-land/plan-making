import { number, boolean, array, string, object, ObjectShape } from "yup";
import { RadioOption } from "src/components/formComponents/types";
import {
  FormPageSchema,
  FormState,
  ValidationArraySchema,
  ValidationShape,
} from "./types";
import db from "./db";

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

export const REQUIRED_MESSAGE = "This field is required.";

export const getValidationShape: (
  property?: FormPageSchema,
) => ValidationShape = (property) => {
  switch (property?.type) {
    case "number":
      return number();
    case "boolean":
      return boolean();
    case "array":
      return array().of<any>(getValidationShape(property.items));
    case "string":
    default:
      return string();
  }
};

export const createValidationSchema = (
  key: string,
  formSchema: FormPageSchema,
) => {
  let validationShape: ValidationShape;

  const property = formSchema.properties?.[key];

  if (!property) {
    return object({});
  }

  validationShape = getValidationShape(property);

  if (validationShape && formSchema.required?.includes(key)) {
    if (isArrayValidationShape(property, validationShape)) {
      validationShape = validationShape.min(1, REQUIRED_MESSAGE);
    }
    validationShape = validationShape.required(REQUIRED_MESSAGE);
  }

  return object({ [key]: validationShape } as ObjectShape);
};

export const storeFormData = (formData: FormState) => {
  return db.formDataStore.put({ id: "siteSelectionForm", data: formData });
};

export const getFormData = () => {
  return db.formDataStore.get("siteSelectionForm").then((result) => result?.data);
};

export const clearFormData = () => {
  return db.formDataStore.clear();
};
