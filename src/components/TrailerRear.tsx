export default function TrailerRear() {
  return (
    <div className="group relative h-[60vh] min-h-[420px] w-full overflow-hidden rounded-3xl shadow-[var(--shadow-elegant)]">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-[1.04]"
      >
        <source src="/videos/20654625.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay layers */}
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Glowing accent bar */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[3px] shadow-[var(--shadow-glow)]"
        style={{ background: "var(--gradient-primary)" }}
      />

      {/* Bottom-overlay brand + stat card */}
      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
        {/* Brand badge */}
        <div
          className="flex items-center gap-3 rounded-2xl border border-white/10 px-4 py-3 backdrop-blur-xl"
          style={{ background: "color-mix(in oklab, white 8%, transparent)" }}
        >
          <div
            className="grid h-10 w-10 place-items-center rounded-xl font-black text-white text-sm"
            style={{ background: "var(--gradient-primary)" }}
          >
            ش
          </div>
          <div>
            <p className="text-sm font-bold text-white">الشهيبي</p>
            <p className="text-[11px] text-white/50">Al-Shehaby Logistics</p>
          </div>
        </div>

        {/* Stat badge */}
        <div
          className="rounded-xl border border-white/10 px-3 py-2.5 text-center backdrop-blur-xl"
          style={{ background: "color-mix(in oklab, white 8%, transparent)" }}
        >
          <p className="text-xl font-black text-white leading-none">80+</p>
          <p className="text-[10px] text-white/60 whitespace-nowrap">طناً الحمولة</p>
        </div>
      </div>
    </div>
  );
}
