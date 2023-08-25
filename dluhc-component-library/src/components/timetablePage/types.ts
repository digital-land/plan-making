export type Progress = "notStarted" | "delayed" | "inProgress" | "finished";

export type TimetableStage = {
  developmentPlanEvent: string;
  startDate: string;
  endDate: string;
  progress: Progress;
};
