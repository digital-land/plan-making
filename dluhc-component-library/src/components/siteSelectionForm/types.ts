export type QuestionType = "string" | "object";

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
  dependencies?: Record<string, ReadonlyArray<string>>;
}

export type FormValue = string | number | boolean | Record<string, boolean>;

export type FormState = Record<string, FormValue>;
