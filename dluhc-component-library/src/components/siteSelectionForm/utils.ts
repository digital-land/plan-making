import { FormPageSchema, RadioOption } from "./types";

export const convertPropertyToOptions: (
  property: FormPageSchema,
) => ReadonlyArray<RadioOption> = (property) => {
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
