export function DatabaseIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" fill="currentColor" fillOpacity="0.8" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" fill="transparent" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" fill="transparent" />
      <ellipse cx="12" cy="12" rx="9" ry="3" fill="currentColor" fillOpacity="0.6" />
      <ellipse cx="12" cy="19" rx="9" ry="3" fill="currentColor" fillOpacity="0.4" />
    </svg>
  )
}

