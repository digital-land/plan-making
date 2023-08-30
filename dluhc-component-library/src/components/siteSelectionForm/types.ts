import { AnyObject, ArraySchema, NumberSchema, StringSchema } from "yup";

export type QuestionType = "string" | "number" | "array" | "object";

export interface FormPageSchema {
  type: QuestionType;
  title: string;
  subtitle?: string;
  enum?: ReadonlyArray<string>;
  step?: string;
  min?: string;
  max?: string;
  required?: ReadonlyArray<string>;
  properties?: Record<string, FormPageSchema>;
  dependencies?: Record<string, FormPageSchema>;
}

export type FormValue = string | number | boolean | Array<string>;

export type FormState = Record<string, FormValue>;

export type ValidationShape =
  | StringSchema
  | NumberSchema
  | ArraySchema<string[] | undefined, AnyObject, "", "">;
