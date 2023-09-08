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
import { Progress } from "src/models/timetable/types";
import { Stage } from "../types";

interface StagePageProps {
  stageName: string;
  value: Partial<Stage> | undefined;
  onChange: (value: Partial<Stage>) => void;
}

const PROGRESS_OPTIONS: ReadonlyArray<RadioOption<string>> = [
  { label: PROGRESS_TEXT_MAP[NOT_STARTED], value: NOT_STARTED },
  { label: PROGRESS_TEXT_MAP[DELAYED], value: DELAYED },
  { label: PROGRESS_TEXT_MAP[IN_PROGRESS], value: IN_PROGRESS },
  { label: PROGRESS_TEXT_MAP[FINISHED], value: FINISHED },
];

const StagePage = ({ stageName, value, onChange }: StagePageProps) => {
  return (
    <div className="flex flex-col">
      <h1 className="my-2 text-4xl font-bold">{stageName}</h1>

      <div className="my-2">
        <h2 className="text-2xl font-bold">Start date</h2>
        <p>For example, 3 2025</p>
        <DateInput
          value={value?.startDate || {}}
          onChange={(startDate) => onChange({ ...value, startDate })}
          showDays={false}
        />
      </div>

      <div className="my-2">
        <h2 className="text-2xl font-bold">End date</h2>
        <DateInput
          value={value?.endDate || {}}
          onChange={(endDate) => onChange({ ...value, endDate })}
          showDays={false}
        />
      </div>

      <div className="my-2">
        <h2 className="text-2xl font-bold">Progress</h2>
        <RadioButtons
          options={PROGRESS_OPTIONS}
          value={value?.progress}
          onChange={(progress) =>
            onChange({ ...value, progress: progress as Progress })
          }
        />
      </div>

      <div className="my-2">
        <h2 className="text-2xl font-bold">
          Additional information (optional)
        </h2>
        <Textarea
          value={value?.additionalInformation || ""}
          onChange={(additionalInformation) =>
            onChange({ ...value, additionalInformation })
          }
          maxLength={100}
        />
      </div>
    </div>
  );
};

export default StagePage;
