import { AnyObject, ArraySchema, NumberSchema, StringSchema } from "yup";

export interface SiteSelectionFormSchema {
  required: Array<string>;
  properties: Record<string, FormPageSchema>;
}

export type QuestionType = "string" | "number" | "array";

export interface FormPageSchema {
  type: QuestionType;
  title: string;
  subtitle?: string;
  enum?: ReadonlyArray<string>;
  step?: string;
  min?: string;
  max?: string;
}

export type FormValue = string | number | boolean | Array<string>;

export type FormState = Record<string, FormValue>;

export type ValidationShape =
  | StringSchema
  | NumberSchema
  | ArraySchema<string[] | undefined, AnyObject, "", "">;
