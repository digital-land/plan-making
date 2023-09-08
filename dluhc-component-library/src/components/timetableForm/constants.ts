import { NOT_STARTED } from "src/models/timetable/constants";
import { FormState, Stage } from "./types";

export const TITLE_KEY = "title";
export const DESCRIPTION_KEY = "description";
export const PUBLISH_DATE_KEY = "publishDate";
export const SCOPING_KEY = "scoping";
export const GATEWAY_1_KEY = "gateway1";

const INITIAL_STAGE: Stage = {
  startDate: { day: "", month: "", year: "" },
  endDate: { day: "", month: "", year: "" },
  progress: NOT_STARTED,
  additionalInformation: "",
};

export const INITIAL_STATE: FormState = {
  [TITLE_KEY]: "",
  [DESCRIPTION_KEY]: "",
  [PUBLISH_DATE_KEY]: { day: "", month: "", year: "" },
  [SCOPING_KEY]: INITIAL_STAGE,
  [GATEWAY_1_KEY]: INITIAL_STAGE,
};
