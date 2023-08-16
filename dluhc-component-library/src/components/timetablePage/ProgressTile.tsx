import { Progress } from "./types";

interface ProgressTileProps {
  progress: Progress;
}

const progressTextMap = {
  notStarted: "Not started",
  delayed: "Delayed",
  inProgress: "In progress",
  finished: "Finished",
};

const ProgressTile = ({ progress }: ProgressTileProps) => {
  const progressClass = `progress-${progress}`;

  return (
    <span className={`uppercase font-semibold py-1 px-2 ${progressClass}`}>
      {progressTextMap[progress]}
    </span>
  );
};

export default ProgressTile;
