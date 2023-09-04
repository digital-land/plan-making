import {
  AnyObject,
  ArraySchema,
  BooleanSchema,
  NumberSchema,
  StringSchema,
} from "yup";

import { Boundary } from "../maps/types";

export type QuestionType =
  | "string"
  | "number"
  | "array"
  | "object"
  | "radio"
  | "boolean"
  | "map"
  | "radio";

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

export type FormValue = string | number | boolean | Array<string> | Boundary;

export type FormState = Record<string, FormValue>;

export type ValidationShape =
  | StringSchema
  | NumberSchema
  | BooleanSchema
  | ArraySchema<any[] | undefined, AnyObject, any, "">;
