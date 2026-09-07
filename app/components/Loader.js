export default function Loader() {
  return (
    <div className="loader">
      <svg
        className="spinner"
        viewBox="0 0 50 50"
        width="40"
        height="40"
        role="status"
        aria-label="Chargement..."
      >
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="90 150"
        />
      </svg>
    </div>
  );
}
