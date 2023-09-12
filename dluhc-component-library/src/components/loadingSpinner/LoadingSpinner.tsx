import "./LoadingSpinner.css";

interface LoadingSpinnerProps {
  className?: string;
}

const LoadingSpinner = ({ className }: LoadingSpinnerProps) => {
  return (
    <div className={className}>
      <span class="loading-spinner" />
    </div>
  );
};

export default LoadingSpinner;
