import { DateValue } from "src/components/formComponents/dateInput/types";
import { FormState, FormStage } from "./types";
import { Stage, Timetable } from "src/models/timetable/types";
import { GATEWAY_1_KEY, SCOPING_KEY } from "./constants";

export const getTimetableDownload = (formData: FormState) => {
  const timetable = formatTimetableFormData(formData);
  return `data:text/json;charset=urf-8, ${encodeURIComponent(
    JSON.stringify(timetable),
  )}`;
};

const formatTimetableFormData = (formData: FormState): Timetable => ({
  title: formData.title,
  description: formData.description,
  publishDate: formatDateValue(formData.publishDate),
  stages: [
    formatStage(
      SCOPING_KEY,
      "Scoping and early participation",
      formData[SCOPING_KEY],
    ),
    formatStage(
      GATEWAY_1_KEY,
      "Gateway 1. Check-point",
      formData[GATEWAY_1_KEY],
    ),
  ],
});

const formatStage = (key: string, name: string, stage: FormStage): Stage => ({
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
  return new Date(year, month, day);
};
