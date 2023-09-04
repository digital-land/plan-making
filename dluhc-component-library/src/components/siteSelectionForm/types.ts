import { StringSchema, NumberSchema, BooleanSchema } from "yup";
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
}

export type FormValue =
  | string
  | number
  | boolean
  | Record<string, boolean>
  | Boundary;

export type FormState = Record<string, FormValue>;

export type ValidationShape = StringSchema | NumberSchema | BooleanSchema;

export type Widget = "map" | "radio";

export type UiPropertySchema = { "ui:widget"?: Widget };

export type UiSchema = Record<string, UiPropertySchema>;

export type RadioOption = {
  label: string;
  value: string | boolean;
};
