export type Progress = "notStarted" | "delayed" | "inProgress" | "finished";

export type RowData = {
  developmentPlanEvent: string;
  startDate: string;
  endDate: string;
  progress: Progress;
};
