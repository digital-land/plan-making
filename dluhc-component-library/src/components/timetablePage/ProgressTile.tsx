import { PROGRESS_TEXT_MAP } from "src/models/timetable/constants";
import { Progress } from "src/models/timetable/types";

interface ProgressTileProps {
  progress: Progress;
}

const ProgressTile = ({ progress }: ProgressTileProps) => {
  const progressClass = `progress-${progress}`;

  return (
    <span className={`uppercase font-semibold py-1 px-2 ${progressClass}`}>
      {PROGRESS_TEXT_MAP[progress]}
    </span>
  );
};

export default ProgressTile;
