export interface SiteSelectionFormSchema {
  properties: Record<string, FormStage>;
}

export type QuestionType = "string";

export interface FormStage {
  type: QuestionType;
  title: string;
  subtitle?: string;
  enum?: ReadonlyArray<string>;
}
