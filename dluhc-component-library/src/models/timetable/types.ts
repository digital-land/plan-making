import { NOT_STARTED, DELAYED, IN_PROGRESS, FINISHED } from "./constants";

export interface TimetableData {
  title: string;
  description: string;
  publishDate: Date;
  updated: string;
  status: string;
  periodStartToEnd: string;
  coverage: string;
  stages: Stage[];
}

export interface Stage {
  key: string;
  name: string;
  startDate: Date;
  endDate: Date;
  progress: Progress;
  additionalInformation: string;
}

export type Progress =
  | typeof NOT_STARTED
  | typeof DELAYED
  | typeof IN_PROGRESS
  | typeof FINISHED;
