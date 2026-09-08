function IconBase({ className, children, ...props }) {
  return (
    <svg
      className={className ? `dd-icon ${className}` : "dd-icon"}
      viewBox="0 0 24 24"
      fill="currentColor"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export function CloudIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M7 18a5 5 0 0 1-.4-9.98A6 6 0 0 1 18.2 9.5 4.5 4.5 0 0 1 17.5 18H7Z" />
    </IconBase>
  );
}

export function SpinnerIcon(props) {
  return (
    <IconBase viewBox="0 0 50 50" {...props}>
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
    </IconBase>
  );
}

export function UserIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.4 0-8 2.24-8 5v3h16v-3c0-2.76-3.6-5-8-5Z" />
    </IconBase>
  );
}

export function FlaskIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M9 2v6.2L4.3 17a2 2 0 0 0 1.8 3h11.8a2 2 0 0 0 1.8-3L15 8.2V2h-1.5v6.6l1.4 2.6h-5.8l1.4-2.6V2H9Zm-1.5 0h9V.5h-9V2Z" />
    </IconBase>
  );
}
