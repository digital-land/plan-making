export type Progress = "notStarted" | "delayed" | "inProgress" | "finished";

export type TimetableStage = {
  developmentPlanEvent: string;
  startDate: string;
  endDate: string;
  progress: Progress;
};

export type TimetableHeader = {
  name: string;
  description: string;
  published: string;
  updated: string;
  status: string;
  periodStartToEnd: string;
  coverage: string;
};
