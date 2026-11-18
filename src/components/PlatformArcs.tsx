const platforms = [
  { name: "Snapchat", bg: "#fffc00", fg: "#111" },
  { name: "Facebook", bg: "#1877f2", fg: "#fff" },
  { name: "Instagram", bg: "url(#ig)", fg: "#fff" },
  { name: "Pinterest", bg: "#e60023", fg: "#fff" },
  { name: "X", bg: "#111", fg: "#fff" },
  { name: "LinkedIn", bg: "#0a66c2", fg: "#fff" },
  { name: "TikTok", bg: "#111", fg: "#fff" },
  { name: "YouTube", bg: "#ff0000", fg: "#fff" },
];

/** Social platform arcs (rebuilt as live text so the names are spelled correctly and readable). */
export function PlatformArcs() {
  return (
    <ul className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4" aria-label="Platforms we market on">
      {platforms.map((p, i) => (
        <li key={p.name} className={i % 2 ? "sm:translate-y-8" : ""}>
          <svg viewBox="0 0 220 125" className="mx-auto w-full max-w-[220px]" role="img" aria-label={p.name}>
            <defs>
              {p.name === "Instagram" && (
                <linearGradient id="ig" x1="0" y1="1" x2="1" y2="0">
                  <stop offset="0" stopColor="#feda75" />
                  <stop offset="0.4" stopColor="#fa7e1e" />
                  <stop offset="0.7" stopColor="#d62976" />
                  <stop offset="1" stopColor="#962fbf" />
                </linearGradient>
              )}
              <path id={`arc-${i}`} d="M30 115A80 80 0 0 1 190 115" />
            </defs>
            <path d="M5 120A105 105 0 0 1 215 120H155A45 45 0 0 0 65 120Z" fill={p.bg} />
            <text fill={p.fg} fontSize="20" fontFamily="var(--font-montserrat)" letterSpacing="1">
              <textPath href={`#arc-${i}`} startOffset="50%" textAnchor="middle">
                {p.name}
              </textPath>
            </text>
          </svg>
        </li>
      ))}
    </ul>
  );
}
