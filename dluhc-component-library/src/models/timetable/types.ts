import { NOT_STARTED, DELAYED, IN_PROGRESS, FINISHED } from "./constants";

export interface TimetableData {
  title: string;
  description: string;
  publishDate: number;
  updated: string;
  status: string;
  periodStartToEnd: string;
  coverage: string;
  stages: Stage[];
}

export interface Stage {
  key: string;
  name: string;
  startDate: number;
  endDate: number;
  progress: Progress;
  additionalInformation: string;
}

export type Progress =
  | typeof NOT_STARTED
  | typeof DELAYED
  | typeof IN_PROGRESS
  | typeof FINISHED;
