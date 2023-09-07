import { NOT_STARTED, DELAYED, IN_PROGRESS, FINISHED } from "./constants";

export type Progress =
  | typeof NOT_STARTED
  | typeof DELAYED
  | typeof IN_PROGRESS
  | typeof FINISHED;
