import {
  AnyObject,
  ArraySchema,
  BooleanSchema,
  NumberSchema,
  StringSchema,
} from "yup";

import { Boundary } from "../maps/types";

export type QuestionType = "string" | "number" | "array" | "object" | "boolean";

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
  items?: FormPageSchema;
}

export type FormValue = string | number | boolean | Array<string> | Boundary;

export type FormState = Record<string, FormValue>;

export type ValidationArraySchema = ArraySchema<
  any[] | undefined,
  AnyObject,
  any,
  ""
>;

export type ValidationShape =
  | StringSchema
  | NumberSchema
  | BooleanSchema
  | ValidationArraySchema;

export type Widget = "map" | "radio";

export type UiPropertySchema = { "ui:widget"?: Widget };

export type UiSchema = Record<string, UiPropertySchema>;

export type FormAnswers = {
  question: string;
  answer: FormValue;
};
