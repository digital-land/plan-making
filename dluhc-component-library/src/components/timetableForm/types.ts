import { DateValue } from "src/components/formComponents/dateInput/types";
import { Progress } from "src/models/timetable/types";

export interface Stage {
  startDate: DateValue;
  endDate: DateValue;
  progress: Progress;
  additionalInformation?: string;
}
