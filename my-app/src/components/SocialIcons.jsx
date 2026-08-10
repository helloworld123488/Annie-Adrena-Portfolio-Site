import "./SocialIcons.css";

const ICONS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/annie-adrena-k-j/",
    bg: "#0A66C2",
    svg: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="#fff">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.62 0 4.29 2.38 4.29 5.48zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56z" />
      </svg>
    ),
  },
  {
    label: "Threads",
    href: "https://www.threads.com/@adrenahr.solutions?hl=en",
    bg: "#000000",
    svg: (
      <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="#fff" strokeWidth="1.6">
        <path d="M12.5 3C7.8 3 5 6.2 5 11.4v1.2C5 17.6 7.7 21 12.4 21c3.9 0 6.2-2 6.6-4.7.4-2.9-1-4.6-3.5-5.2-2.1-.5-4.1-.2-4.7 1.4-.5 1.3.2 2.4 1.6 2.6 1.1.2 2-.4 2.2-1.3" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=adrenahr.solutions@gmail.com",
    bg: "#EA4335",
    svg: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="#fff">
        <path d="M3 5.5A1.5 1.5 0 0 1 4.5 4h15A1.5 1.5 0 0 1 21 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18.5zm2.1.6 6.9 5.4 6.9-5.4H5.1zM19.5 7.4l-6.86 5.37a1 1 0 0 1-1.28 0L4.5 7.4V18h15z" />
      </svg>
    ),
  },
];

export default function SocialIcons({ className = "" }) {
  return (
    <div className={`social ${className}`}>
      {ICONS.map((i) => (
        <a
          key={i.label}
          href={i.href}
          aria-label={i.label}
          className="social__btn"
          style={{ background: i.bg }}
          target="_blank"
          rel="noreferrer"
        >
          {i.svg}
        </a>
      ))}
    </div>
  );
}
