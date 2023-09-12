import { NOT_STARTED } from "src/models/timetable/constants";
import { DateValue } from "../formComponents/dateInput/types";
import { FormStage, FormState } from "./types";

export const TITLE_KEY = "title";
export const DESCRIPTION_KEY = "description";
export const PUBLISH_DATE_KEY = "publishDate";
export const SCOPING_KEY = "scoping";
export const GATEWAY_1_KEY = "gateway1";
export const EXPORT_KEY = "export";

const DEFAULT_DATE: DateValue = { day: "", month: "", year: "" };

const INITIAL_STAGE: FormStage = {
  startDate: DEFAULT_DATE,
  endDate: DEFAULT_DATE,
  progress: NOT_STARTED,
  additionalInformation: "",
};

export const INITIAL_STATE: FormState = {
  [TITLE_KEY]: "",
  [DESCRIPTION_KEY]: "",
  [PUBLISH_DATE_KEY]: DEFAULT_DATE,
  [SCOPING_KEY]: INITIAL_STAGE,
  [GATEWAY_1_KEY]: INITIAL_STAGE,
};
