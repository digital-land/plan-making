export type QuestionType = "string" | "number" | "object";

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

export type FormValue = string | number | boolean | Record<string, boolean>;

export type FormState = Record<string, FormValue>;
