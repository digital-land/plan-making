export interface SiteSelectionFormSchema {
  required: Array<string>;
  properties: Record<string, FormPageSchema>;
}

export type QuestionType = "string" | "number";

export interface FormPageSchema {
  type: QuestionType;
  title: string;
  subtitle?: string;
  enum?: ReadonlyArray<string>;
  step?: string;
  min?: string;
  max?: string;
}

export type FormValue = string | number | boolean | Record<string, boolean>;

export type FormState = Record<string, FormValue>;
