export interface SiteSelectionFormSchema {
  properties: Record<string, FormStage>;
}

export interface FormStage {
  title: string;
  subtitle?: string;
  enum?: ReadonlyArray<string>;
}
