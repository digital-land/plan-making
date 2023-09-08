import { DateValue } from "src/components/formComponents/dateInput/types";
import { Progress } from "src/models/timetable/types";

export type TimetableFormData = Record<string, any>;

export interface Stage {
  name: string;
  startDate?: DateValue;
  endDate?: DateValue;
  progress: Progress;
  additionalInformation?: string;
}
