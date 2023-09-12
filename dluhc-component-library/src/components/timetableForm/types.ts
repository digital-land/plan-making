import { DateValue } from "src/components/formComponents/dateInput/types";
import { Progress } from "src/models/timetable/types";
import {
  DESCRIPTION_KEY,
  GATEWAY_1_KEY,
  PUBLISH_DATE_KEY,
  SCOPING_KEY,
  TITLE_KEY,
} from "./constants";

export interface FormState {
  [TITLE_KEY]: string;
  [DESCRIPTION_KEY]: string;
  [PUBLISH_DATE_KEY]: DateValue;
  [SCOPING_KEY]: FormStage;
  [GATEWAY_1_KEY]: FormStage;
}

export type FormValue = String | DateValue | FormStage;

export interface FormStage {
  startDate: DateValue;
  endDate: DateValue;
  progress: Progress;
  additionalInformation: string;
}
