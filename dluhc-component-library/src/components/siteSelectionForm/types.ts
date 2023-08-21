export interface SiteSelectionFormSchema {
  properties: Record<string, FormPageSchema>;
}

export type QuestionType = "string";

export interface FormPageSchema {
  type: QuestionType;
  title: string;
  subtitle?: string;
  enum?: ReadonlyArray<string>;
}

export type FormValue = string | number | boolean | Record<string, boolean>;

export type FormState = Record<string, FormValue>;
