import {
  DateInput,
  RadioButtons,
  Textarea,
} from "src/components/formComponents";
import { RadioOption } from "src/components/formComponents/types";
import {
  DELAYED,
  FINISHED,
  IN_PROGRESS,
  NOT_STARTED,
  PROGRESS_TEXT_MAP,
} from "src/models/timetable/constants";

interface StagePageProps {
  stageName: string;
}

const PROGRESS_OPTIONS: ReadonlyArray<RadioOption<string>> = [
  { label: PROGRESS_TEXT_MAP[NOT_STARTED], value: NOT_STARTED },
  { label: PROGRESS_TEXT_MAP[DELAYED], value: DELAYED },
  { label: PROGRESS_TEXT_MAP[IN_PROGRESS], value: IN_PROGRESS },
  { label: PROGRESS_TEXT_MAP[FINISHED], value: FINISHED },
];

const StagesPage = ({ stageName }: StagePageProps) => {
  return (
    <div className="flex flex-col">
      <h1 className="my-2 text-4xl font-bold">{stageName}</h1>

      <div className="my-2">
        <h2 className="text-2xl font-bold">Start date</h2>
        <p>For example, 3 2025</p>
        <DateInput showDays={false} />
      </div>

      <div className="my-2">
        <h2 className="text-2xl font-bold">End date</h2>
        <DateInput showDays={false} />
      </div>

      <div className="my-2">
        <h2 className="text-2xl font-bold">Progress</h2>
        <RadioButtons
          options={PROGRESS_OPTIONS}
          value={NOT_STARTED}
          onChange={() => {}}
        />
      </div>

      <div className="my-2">
        <h2 className="text-2xl font-bold">
          Additional information (optional)
        </h2>
        <Textarea value="" onChange={() => {}} maxLength={100} />
      </div>
    </div>
  );
};

export default StagesPage;
