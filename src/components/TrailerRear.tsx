export default function TrailerRear() {
  const lines = Array.from({ length: 14 });
  return (
    <div className="relative h-[60vh] min-h-[420px] w-full overflow-hidden rounded-3xl bg-gradient-to-b from-[#0b3a7a] via-[#0a2a5e] to-[#06122b]">
      {/* Road */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent" />
      <div
        className="absolute inset-x-0 bottom-0 h-1/3"
        style={{
          background:
            "repeating-linear-gradient(90deg, transparent 0 60px, rgba(255,255,255,0.55) 60px 110px)",
          transform: "perspective(500px) rotateX(60deg)",
          transformOrigin: "bottom",
          maskImage: "linear-gradient(to top, black, transparent)",
        }}
      />

      {/* Speed lines */}
      <div className="pointer-events-none absolute inset-0">
        {lines.map((_, i) => {
          const top = 8 + (i * 84) / lines.length + Math.random() * 4;
          const delay = (i * 0.13).toFixed(2);
          const duration = (0.55 + (i % 5) * 0.18).toFixed(2);
          const width = 60 + ((i * 37) % 220);
          const opacity = 0.25 + ((i * 17) % 60) / 100;
          return (
            <span
              key={i}
              className="speed-line"
              style={{
                top: `${top}%`,
                width: `${width}px`,
                opacity,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
              }}
            />
          );
        })}
      </div>

      {/* Trailer rear illustration */}
      <svg
        viewBox="0 0 600 400"
        className="absolute left-1/2 top-1/2 z-10 w-[78%] max-w-[520px] -translate-x-1/2 -translate-y-[55%] drop-shadow-[0_30px_40px_rgba(0,0,0,0.55)]"
        aria-hidden
      >
        {/* Shadow under trailer */}
        <ellipse cx="300" cy="370" rx="240" ry="14" fill="rgba(0,0,0,0.55)" />

        {/* Bumper */}
        <rect x="70" y="320" width="460" height="14" rx="4" fill="#1a2331" />

        {/* Trailer body */}
        <rect x="70" y="60" width="460" height="260" rx="10" fill="#f4f6fa" />
        <rect x="70" y="60" width="460" height="260" rx="10" fill="url(#shade)" />

        {/* Vertical seam (doors) */}
        <line x1="300" y1="70" x2="300" y2="315" stroke="#c5cdda" strokeWidth="3" />

        {/* Door panel lines */}
        {[120, 180, 240, 360, 420, 480].map((x) => (
          <line key={x} x1={x} y1="80" x2={x} y2="305" stroke="#dde3ec" strokeWidth="1.5" />
        ))}

        {/* Hinges */}
        {[100, 200, 290].map((y) => (
          <g key={y}>
            <rect x="74" y={y} width="14" height="8" fill="#8a96a8" rx="1" />
            <rect x="512" y={y} width="14" height="8" fill="#8a96a8" rx="1" />
          </g>
        ))}

        {/* Door handles */}
        <rect x="270" y="160" width="14" height="80" rx="3" fill="#0070F2" />
        <rect x="316" y="160" width="14" height="80" rx="3" fill="#0070F2" />
        <circle cx="277" cy="160" r="6" fill="#0b3a7a" />
        <circle cx="277" cy="240" r="6" fill="#0b3a7a" />
        <circle cx="323" cy="160" r="6" fill="#0b3a7a" />
        <circle cx="323" cy="240" r="6" fill="#0b3a7a" />

        {/* Blue brand band */}
        <rect x="70" y="90" width="460" height="26" fill="#0070F2" />
        <text
          x="300"
          y="109"
          textAnchor="middle"
          fontFamily="Cairo, Tajawal, sans-serif"
          fontWeight="800"
          fontSize="16"
          fill="#ffffff"
          letterSpacing="2"
        >
          AL-SHEHABY • الشهيبي
        </text>

        {/* Reflective tape */}
        <g>
          {Array.from({ length: 18 }).map((_, i) => (
            <rect
              key={i}
              x={80 + i * 25}
              y="300"
              width="18"
              height="10"
              fill={i % 2 === 0 ? "#e11d2a" : "#f8fafc"}
            />
          ))}
        </g>

        {/* Tail lights */}
        <rect x="90" y="270" width="40" height="22" rx="4" fill="#ff2d2d">
          <animate attributeName="opacity" values="1;0.55;1" dur="1.4s" repeatCount="indefinite" />
        </rect>
        <rect x="470" y="270" width="40" height="22" rx="4" fill="#ff2d2d">
          <animate attributeName="opacity" values="1;0.55;1" dur="1.4s" repeatCount="indefinite" />
        </rect>
        <rect x="95" y="275" width="30" height="6" rx="2" fill="#ffd9d9" opacity="0.8" />
        <rect x="475" y="275" width="30" height="6" rx="2" fill="#ffd9d9" opacity="0.8" />

        {/* Wheels */}
        <g>
          {[140, 200, 400, 460].map((x) => (
            <g key={x}>
              <ellipse cx={x} cy="345" rx="28" ry="12" fill="#0a0d12" />
              <ellipse cx={x} cy="343" rx="20" ry="7" fill="#2a2f38" />
            </g>
          ))}
        </g>

        <defs>
          <linearGradient id="shade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(0,0,0,0.0)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.18)" />
          </linearGradient>
        </defs>
      </svg>

      <style>{`
        @keyframes speedLine {
          0%   { transform: translateX(110vw); opacity: 0; }
          10%  { opacity: 1; }
          100% { transform: translateX(-120vw); opacity: 0; }
        }
        .speed-line {
          position: absolute;
          left: 0;
          height: 2px;
          border-radius: 2px;
          background: linear-gradient(90deg, transparent, #ffffff 40%, #9ec6ff 70%, transparent);
          filter: drop-shadow(0 0 6px rgba(158,198,255,0.6));
          animation-name: speedLine;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
}
