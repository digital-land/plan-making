import {
  AnyObject,
  ArraySchema,
  ISchema,
  MixedSchema,
  NumberSchema,
  StringSchema,
} from "yup";

export type QuestionType = "string" | "number" | "array" | "object" | "radio";

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
  items?: Record<string, QuestionType>;
}

export type FormValue = string | number | boolean | Array<string>;

export type FormState = Record<string, FormValue>;

export type ValidationShape =
  | StringSchema
  | NumberSchema
  | ArraySchema<any[] | undefined, AnyObject, any, "">;
