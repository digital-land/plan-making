import { DateValue } from "src/components/formComponents/dateInput/types";
import { FormState, FormStage } from "./types";
import { Stage, TimetableData } from "src/models/timetable/types";
import {
  DESCRIPTION_KEY,
  GATEWAY_1_KEY,
  INITIAL_STAGE,
  PUBLISH_DATE_KEY,
  SCOPING_KEY,
  TITLE_KEY,
} from "./constants";

export const getTimetableDownload = (formData: FormState) => {
  const timetable = formatTimetableFormData(formData);
  return `data:text/json;charset=urf-8, ${encodeURIComponent(
    JSON.stringify(timetable),
  )}`;
};

export const loadTimetable = async (url: string): Promise<FormState> => {
  return fetch(url)
    .then((res) => res.json())
    .then((data) => formatTimetableData(data));
};

const formatTimetableData = (timetable: TimetableData): FormState => ({
  [TITLE_KEY]: timetable.title,
  [DESCRIPTION_KEY]: timetable.description,
  [PUBLISH_DATE_KEY]: formatDate(timetable.publishDate),
  [SCOPING_KEY]: findAndFormatStage(SCOPING_KEY, timetable.stages),
  [GATEWAY_1_KEY]: findAndFormatStage(GATEWAY_1_KEY, timetable.stages),
});

const findAndFormatStage = (key: string, stages: Stage[]): FormStage => {
  const stage = stages.find((stage) => stage.key === key);
  return stage ? formatStage(stage) : INITIAL_STAGE;
};

const formatStage = (stage: Stage): FormStage => ({
  startDate: formatDate(stage.startDate),
  endDate: formatDate(stage.endDate),
  progress: stage.progress,
  additionalInformation: stage.additionalInformation,
});

const formatDate = (timestamp: number): DateValue => {
  const date = new Date(timestamp);
  return {
    day: date.getDate().toString(),
    month: (date.getMonth() + 1).toString(),
    year: date.getFullYear().toString(),
  };
};

const formatTimetableFormData = (formData: FormState): TimetableData => ({
  title: formData.title,
  description: formData.description,
  publishDate: formatDateValue(formData.publishDate),
  updated: "",
  status: "",
  periodStartToEnd: "",
  coverage: "",
  stages: [
    formatFormStage(
      SCOPING_KEY,
      "Scoping and early participation",
      formData[SCOPING_KEY],
    ),
    formatFormStage(
      GATEWAY_1_KEY,
      "Gateway 1. Check-point",
      formData[GATEWAY_1_KEY],
    ),
  ],
});

const formatFormStage = (
  key: string,
  name: string,
  stage: FormStage,
): Stage => ({
  key,
  name,
  startDate: formatDateValue(stage.startDate),
  endDate: formatDateValue(stage.endDate),
  progress: stage.progress,
  additionalInformation: stage.additionalInformation,
});

const formatDateValue = (dateValue: DateValue) => {
  const year = dateValue.year
    ? parseInt(dateValue.year)
    : new Date().getFullYear();
  const month = dateValue.month ? parseInt(dateValue.month) - 1 : 0;
  const day = dateValue.day ? parseInt(dateValue.day) : 1;
  return new Date(year, month, day).getTime();
};
