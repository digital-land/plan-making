interface ProgressTileProps {
  progress: "notStarted" | "delayed" | "inProgress" | "finished";
}

const ProgressTile = ({ progress }: ProgressTileProps) => {
  const progressClass = `progress-${progress}`;

  return (
    <span className={`uppercase font-semibold py-1 px-2 ${progressClass}`}>
      {progress}
    </span>
  );
};

export default ProgressTile;
