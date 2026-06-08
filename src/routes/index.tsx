import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense, useState } from "react";
import WhatsAppButton from "@/components/WhatsAppButton";

const TrailerScene = lazy(() => import("@/components/TrailerScene"));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "الشهيبي | النقل البري الثقيل عبر الشرق الأوسط" },
      {
        name: "description",
        content:
          "الشهيبي – شركة مصرية رائدة في النقل البري الثقيل والشحنات العملاقة، التخليص الجمركي، وتأجير الأساطيل عبر الشرق الأوسط.",
      },
      { property: "og:title", content: "الشهيبي للنقل البري الثقيل" },
      {
        property: "og:description",
        content:
          "نقل بري ثقيل عابر للحدود من مصر إلى الشرق الأوسط. أسطول حديث وخبرة تتجاوز عقدين.",
      },
    ],
  }),
  component: LandingPage,
});

const PHONE = "+201005695601";
const WHATSAPP_HREF = `https://wa.me/${PHONE.replace(/[^0-9]/g, "")}`;

const NAV = [
  { href: "#home", label: "الرئيسية" },
  { href: "#services", label: "خدماتنا" },
  { href: "#fleet", label: "الأسطول" },
  { href: "#coverage", label: "التغطية" },
  { href: "#about", label: "من نحن" },
  { href: "#contact", label: "تواصل" },
];

const SERVICES = [
  {
    title: "النقل البري الثقيل",
    desc: "أسطول من الشاحنات والمقطورات الحديثة لنقل البضائع الثقيلة بأمان وكفاءة عبر الطرق الرئيسية.",
    icon: (
      <path d="M3 7h11v8H3zM14 10h4l3 3v2h-7z M6 17.5A1.5 1.5 0 1 1 9 17.5a1.5 1.5 0 0 1-3 0Zm10 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
    ),
  },
  {
    title: "الشحنات العملاقة والمشاريع",
    desc: "حلول متخصصة لنقل المعدات الإنشائية، توربينات الطاقة، ومعدات النفط والغاز فوق الحجم القياسي.",
    icon: (
      <path d="M3 13l3-7h8l3 7v4h-2a2 2 0 1 1-4 0H9a2 2 0 1 1-4 0H3z M14 4h6v4h-6z" />
    ),
  },
  {
    title: "التخليص الجمركي العابر",
    desc: "إنجاز كافة إجراءات التخليص والوثائق الجمركية على المنافذ بين مصر والسعودية والإمارات والأردن والعراق.",
    icon: (
      <path d="M4 4h16v4H4zM4 10h16v10H4zM9 14h6v4H9z" />
    ),
  },
  {
    title: "تأجير الأساطيل والاستشارات",
    desc: "حلول تأجير طويلة الأجل للشركات واستشارات سلاسل الإمداد لرفع كفاءة عملياتك اللوجستية.",
    icon: (
      <path d="M3 12l9-8 9 8v8H3zM10 14h4v6h-4z" />
    ),
  },
];

const STATS = [
  { value: "25+", label: "عاماً من الخبرة" },
  { value: "180+", label: "شاحنة ومقطورة" },
  { value: "12", label: "دولة بالشرق الأوسط" },
  { value: "+1M", label: "طن مشحونة سنوياً" },
];

const COUNTRIES = [
  "مصر", "السعودية", "الإمارات", "الأردن", "العراق",
  "الكويت", "قطر", "البحرين", "عُمان", "لبنان", "سوريا", "ليبيا",
];

const CLIENTS = [
  "ARAMCO", "ADNOC", "ORASCOM", "EMAAR", "SIEMENS", "SCHNEIDER",
  "HASSAN ALLAM", "PETROJET", "ENPPI",
];

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <Section3D />
      <Fleet />
      <Coverage />
      <About />
      <Contact />
      <Inquiry />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

/* ----------------------------- Header ----------------------------- */
function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="container-x flex items-center justify-between py-5">
        <a href="#home" className="flex items-center gap-3">
          <LogoMark />
          <div className="leading-tight">
            <div className="text-xl font-black text-white drop-shadow">الشهيبي</div>
            <div className="text-[10px] tracking-[0.3em] text-white/70">AL-SHEHABY LOGISTICS</div>
          </div>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-semibold text-white/85 transition-colors hover:text-white"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <a href="#inquiry" className="btn-primary hidden md:inline-flex !py-2.5 !px-5 text-sm">
          اطلب عرض سعر
        </a>

        <button
          aria-label="القائمة"
          className="rounded-md p-2 text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden">
          <div className="container-x rounded-2xl bg-[color:var(--color-primary-deep)]/95 p-5 backdrop-blur">
            <div className="flex flex-col gap-3 text-white">
              {NAV.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="rounded-md py-2 text-sm font-semibold">
                  {n.label}
                </a>
              ))}
              <a href="#inquiry" onClick={() => setOpen(false)} className="btn-primary mt-2 !py-2.5 text-sm">
                اطلب عرض سعر
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function LogoMark() {
  return (
    <div className="grid h-11 w-11 place-items-center rounded-xl bg-white/15 ring-1 ring-white/30 backdrop-blur">
      <svg viewBox="0 0 32 32" className="h-7 w-7 text-white" fill="currentColor">
        <path d="M2 18h14V8H4a2 2 0 0 0-2 2zM16 11h6l4 4v6h-2.2a3 3 0 0 1-5.6 0H16zM7 22.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm12 0a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Z" />
      </svg>
    </div>
  );
}

/* ------------------------------ Hero ------------------------------ */
function Hero() {
  return (
    <section id="home" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      {/* Cinematic background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.pexels.com/videos/2103099/free-video-2103099.jpg?auto=compress&cs=tinysrgb&w=1920"
      >
        <source src="https://videos.pexels.com/video-files/2103099/2103099-uhd_3840_2160_30fps.mp4" type="video/mp4" />
        <source src="https://videos.pexels.com/video-files/2103099/2103099-hd_1920_1080_30fps.mp4" type="video/mp4" />
        <source src="https://videos.pexels.com/video-files/1409899/1409899-hd_1920_1080_25fps.mp4" type="video/mp4" />
      </video>

      {/* gradient overlays */}
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/40" />

      <div className="relative z-10 flex h-full items-end pb-20 md:items-center md:pb-0">
        <div className="container-x">
          <div className="max-w-2xl text-white">
            <span className="eyebrow !text-white/80">مقرنا الرئيسي – جمهورية مصر العربية</span>
            <h1 className="mt-4 text-4xl font-black leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl">
              نُحرّك ما يبني <span className="block text-[color:var(--color-primary)]">الشرق الأوسط</span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-white/85 md:text-lg">
              الشهيبي – خبرة تتجاوز ربع قرن في النقل البري الثقيل والشحنات العملاقة عبر الحدود.
              أسطول حديث، طاقم محترف، وحلول لوجستية متكاملة من القاهرة إلى كل عاصمة عربية.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#inquiry" className="btn-primary">احصل على عرض سعر</a>
              <a href="#services" className="btn-ghost">تعرّف على خدماتنا</a>
            </div>

            <div className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-white/15 pt-6">
              {STATS.slice(0, 3).map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-black text-white">{s.value}</div>
                  <div className="mt-1 text-xs text-white/70">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* scroll indicator */}
      <div className="absolute inset-x-0 bottom-6 z-10 flex justify-center">
        <div className="flex flex-col items-center gap-2 text-white/80 animate-float">
          <span className="text-[10px] tracking-[0.4em]">SCROLL</span>
          <span className="h-10 w-px bg-white/60" />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Stats ----------------------------- */
function Stats() {
  return (
    <section
      className="relative -mt-12 z-20"
      aria-label="إحصاءات الشركة"
    >
      <div className="container-x">
        <div className="grid grid-cols-2 gap-4 rounded-2xl bg-white p-6 shadow-[var(--shadow-elegant)] ring-1 ring-black/5 md:grid-cols-4 md:p-8">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="bg-clip-text text-3xl font-black text-transparent md:text-4xl"
                   style={{ backgroundImage: "var(--gradient-primary)" }}>
                {s.value}
              </div>
              <div className="mt-1 text-xs font-semibold text-muted-foreground md:text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- Services ---------------------------- */
function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">خدماتنا</span>
          <h2 className="section-title mt-3">حلول لوجستية متكاملة لكل قطاع</h2>
          <p className="mt-4 text-base text-muted-foreground">
            من الشحنات العملاقة لمشاريع البنية التحتية إلى عقود التأجير طويلة الأجل،
            نُقدّم لعملائنا منظومة نقل بري لا تتوقف.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
            >
              <div
                className="grid h-12 w-12 place-items-center rounded-xl text-primary-foreground"
                style={{ background: "var(--gradient-primary)" }}
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                  {s.icon}
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-bold text-[color:var(--color-primary-deep)]">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <div
                className="pointer-events-none absolute -inset-px -z-10 rounded-2xl opacity-0 transition-opacity group-hover:opacity-100"
                style={{ background: "linear-gradient(135deg, oklch(0.58 0.18 252 / 0.08), transparent)" }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- 3D Trailer Section --------------------------- */
function Section3D() {
  return (
    <section
      className="relative overflow-hidden border-y border-border bg-[color:var(--color-secondary)] py-16 md:py-24"
      aria-label="ماكيت ثلاثي الأبعاد للمقطورة"
    >
      <div className="container-x grid items-center gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <span className="eyebrow">ماكيت ثلاثي الأبعاد</span>
          <h2 className="section-title mt-3">أسطول مُهيّأ لأصعب الشحنات</h2>
          <p className="mt-4 text-base text-muted-foreground">
            مقطوراتنا متعددة المحاور قادرة على نقل أحمال تتجاوز 80 طناً عبر تضاريس متنوعة.
            مرّر الصفحة لاكتشاف الماكيت من كل الزوايا.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              "مقطورات لو-بد و فلات-بد متعددة المحاور",
              "نظام تتبع GPS لحظي على كل مركبة",
              "صيانة دورية معتمدة من الوكلاء",
              "سائقون مدرّبون على القيادة الدولية",
            ].map((f) => (
              <li key={f} className="flex items-start gap-3 text-foreground">
                <span
                  className="mt-1 grid h-5 w-5 flex-none place-items-center rounded-full text-white"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 12l4 4L19 6" />
                  </svg>
                </span>
                {f}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-7">
          <div className="overflow-hidden rounded-3xl bg-white shadow-[var(--shadow-elegant)] ring-1 ring-black/5">
            <Suspense
              fallback={
                <div className="grid h-[80vh] place-items-center text-sm text-muted-foreground">
                  جارٍ تحميل الماكيت ثلاثي الأبعاد…
                </div>
              }
            >
              <TrailerScene />
            </Suspense>
          </div>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            مرّر للأسفل لتدوير الماكيت • Scroll to rotate
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Fleet ----------------------------- */
const FLEET = [
  {
    name: "شاحنات ڤولڤو FH16",
    desc: "قوة سحب 750 حصاناً للشحنات الثقيلة طويلة المسافة.",
    img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "مقطورات لو-بد",
    desc: "منصات منخفضة لنقل المعدات الإنشائية والآليات الثقيلة.",
    img: "https://images.unsplash.com/photo-1601158935942-52255782d322?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "بيك أب تويوتا هايلوكس",
    desc: "أسطول دعم وخدمات مرافقة في الطرق الصحراوية الوعرة.",
    img: "https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&w=1200&q=80",
  },
];

function Fleet() {
  return (
    <section id="fleet" className="py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="eyebrow">الأسطول</span>
            <h2 className="section-title mt-3">قوة تحريك على الطرق العربية</h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            أسطول حديث بمتوسط عمر تشغيلي أقل من 4 سنوات، يخضع لبرنامج صيانة استباقي
            يضمن جاهزية تتجاوز 98%.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {FLEET.map((f) => (
            <article
              key={f.name}
              className="group overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={f.img}
                  alt={f.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-[color:var(--color-primary-deep)]">{f.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Clients marquee */}
        <div className="mt-20">
          <p className="text-center text-xs font-semibold tracking-[0.3em] text-muted-foreground">
            موثوقون لدى كبرى الشركات
          </p>
          <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <div className="flex w-max animate-marquee items-center gap-12 py-3">
              {[...CLIENTS, ...CLIENTS].map((c, i) => (
                <span key={i} className="text-base font-black text-muted-foreground/70">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Coverage --------------------------- */
function Coverage() {
  return (
    <section
      id="coverage"
      className="relative overflow-hidden py-24 text-white md:py-32"
      style={{ background: "var(--gradient-deep)" }}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, oklch(0.58 0.18 252 / .6), transparent 40%), radial-gradient(circle at 80% 70%, oklch(0.42 0.16 255 / .5), transparent 45%)",
        }}
      />
      <div className="container-x relative grid items-center gap-12 md:grid-cols-2">
        <div>
          <span className="eyebrow !text-[color:var(--color-primary)]">تغطيتنا الجغرافية</span>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">
            من القاهرة <span className="text-[color:var(--color-primary)]">إلى كل عاصمة عربية</span>
          </h2>
          <p className="mt-4 max-w-lg text-white/75">
            شبكة طرق ومنافذ نشطة تصلك بأهم الموانئ والمناطق الصناعية في الشرق الأوسط،
            مع فرق دعم محلية في كل دولة نخدمها.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {COUNTRIES.map((c) => (
              <span
                key={c}
                className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold backdrop-blur"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Stylised map */}
        <div className="relative aspect-square w-full max-w-lg justify-self-center">
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(circle, oklch(0.58 0.18 252 / .35), transparent 60%)",
            }}
          />
          <svg viewBox="0 0 400 400" className="relative h-full w-full">
            <defs>
              <radialGradient id="g" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </radialGradient>
            </defs>
            <circle cx="200" cy="200" r="180" fill="url(#g)" stroke="rgba(255,255,255,0.15)" />
            <circle cx="200" cy="200" r="120" fill="none" stroke="rgba(255,255,255,0.1)" />
            <circle cx="200" cy="200" r="60" fill="none" stroke="rgba(255,255,255,0.08)" />

            {/* HQ */}
            <g>
              <circle cx="200" cy="200" r="9" fill="#0070F2" />
              <circle cx="200" cy="200" r="16" fill="none" stroke="#0070F2" strokeOpacity="0.5">
                <animate attributeName="r" from="9" to="40" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.7" to="0" dur="2s" repeatCount="indefinite" />
              </circle>
              <text x="200" y="225" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="700">القاهرة</text>
            </g>

            {/* destination dots */}
            {[
              [310, 150, "الرياض"],
              [330, 210, "دبي"],
              [260, 110, "عَمّان"],
              [305, 95, "بغداد"],
              [330, 175, "الكويت"],
              [340, 245, "مسقط"],
              [240, 145, "بيروت"],
              [125, 290, "طرابلس"],
            ].map(([x, y, label]) => (
              <g key={label as string}>
                <line x1="200" y1="200" x2={x as number} y2={y as number} stroke="#0070F2" strokeOpacity="0.45" strokeDasharray="3 4" />
                <circle cx={x as number} cy={y as number} r="5" fill="#fff" />
                <text x={x as number} y={(y as number) - 10} textAnchor="middle" fill="rgba(255,255,255,.85)" fontSize="10" fontWeight="600">{label}</text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ About ----------------------------- */
function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container-x grid items-center gap-12 md:grid-cols-2">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80"
            alt="أسطول الشهيبي على الطريق"
            loading="lazy"
            className="aspect-[5/6] w-full rounded-3xl object-cover shadow-[var(--shadow-elegant)]"
          />
          <div className="absolute -bottom-6 -start-6 hidden rounded-2xl bg-white p-5 shadow-[var(--shadow-elegant)] ring-1 ring-black/5 sm:block">
            <div className="text-3xl font-black text-[color:var(--color-primary)]">25+</div>
            <div className="text-xs font-semibold text-muted-foreground">عاماً في خدمة الشرق الأوسط</div>
          </div>
        </div>
        <div>
          <span className="eyebrow">من نحن</span>
          <h2 className="section-title mt-3">قصة شركة وُلدت على الطريق</h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            انطلقت <strong>شركة الشهيبي</strong> من جمهورية مصر العربية كمؤسسة عائلية متخصصة في النقل البري الثقيل،
            وتطوّرت لتصبح واحدة من أهم اللاعبين الإقليميين في نقل الشحنات العملاقة وعقود البنية التحتية
            بين دول الشرق الأوسط وشمال إفريقيا.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            نؤمن بأن كل شحنة هي عهد. لذا نستثمر في أحدث الأساطيل، وندرّب طواقمنا على أعلى معايير السلامة الدولية،
            ونلتزم بالمواعيد التي نتفق عليها مهما كانت الظروف.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4 text-center sm:gap-6">
            {[
              { v: "ISO 9001", l: "شهادة الجودة" },
              { v: "24/7", l: "دعم تشغيلي" },
              { v: "98%", l: "نسبة الالتزام" },
            ].map((b) => (
              <div key={b.l} className="rounded-2xl border border-border p-4">
                <div className="text-lg font-black text-[color:var(--color-primary-deep)]">{b.v}</div>
                <div className="mt-1 text-[11px] font-semibold text-muted-foreground">{b.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Contact ---------------------------- */
function Contact() {
  return (
    <section
      id="contact"
      className="border-y border-border bg-[color:var(--color-secondary)] py-20 md:py-28"
    >
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">تواصل معنا</span>
          <h2 className="section-title mt-3">جاهزون لخدمتك على مدار الساعة</h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "اتصل بنا",
              value: PHONE,
              href: `tel:${PHONE}`,
              icon: <path d="M3 5c0-1.1.9-2 2-2h2.6a1 1 0 0 1 1 .76l1 4a1 1 0 0 1-.27.95L7.7 10.7a14 14 0 0 0 5.6 5.6l1.99-1.63a1 1 0 0 1 .95-.27l4 1a1 1 0 0 1 .76 1V19a2 2 0 0 1-2 2A17 17 0 0 1 3 5z" />,
            },
            {
              title: "واتساب",
              value: PHONE,
              href: WHATSAPP_HREF,
              icon: <path d="M16 2a14 14 0 0 0-12 21L2 30l7-2a14 14 0 1 0 7-26zm0 25.4a11.4 11.4 0 0 1-5.8-1.6l-.4-.2-4.1 1.1 1.1-4-.3-.4A11.4 11.4 0 1 1 16 27.4z" />,
            },
            {
              title: "المقر الرئيسي",
              value: "القاهرة، جمهورية مصر العربية",
              href: "#",
              icon: <path d="M12 2a8 8 0 0 0-8 8c0 6 8 12 8 12s8-6 8-12a8 8 0 0 0-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />,
            },
          ].map((c) => (
            <a
              key={c.title}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
            >
              <div
                className="grid h-14 w-14 flex-none place-items-center rounded-xl text-white"
                style={{ background: "var(--gradient-primary)" }}
              >
                <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
                  {c.icon}
                </svg>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{c.title}</div>
                <div dir="ltr" className="mt-1 text-lg font-bold text-[color:var(--color-primary-deep)]">
                  {c.value}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Inquiry ---------------------------- */
function Inquiry() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", phone: "", message: "" });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = `استفسار جديد من موقع الشهيبي:%0A
الاسم: ${form.name}%0A
الشركة: ${form.company}%0A
رقم الهاتف: ${form.phone}%0A
الرسالة: ${form.message}`;
    window.open(`${WHATSAPP_HREF}?text=${text}`, "_blank");
    setSent(true);
  };

  return (
    <section id="inquiry" className="py-24 md:py-32">
      <div className="container-x">
        <div className="overflow-hidden rounded-3xl ring-1 ring-black/5 shadow-[var(--shadow-elegant)] md:grid md:grid-cols-2">
          <div
            className="relative hidden p-12 text-white md:block"
            style={{ background: "var(--gradient-deep)" }}
          >
            <div
              aria-hidden
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 30% 30%, oklch(0.58 0.18 252 / .7), transparent 50%)",
              }}
            />
            <div className="relative">
              <span className="eyebrow !text-[color:var(--color-primary)]">طلب استفسار</span>
              <h2 className="mt-3 text-3xl font-black md:text-4xl">دعنا ندرس شحنتك</h2>
              <p className="mt-4 max-w-sm text-white/80">
                أرسل تفاصيل الشحنة وسيتواصل معك أحد مسؤولي حسابات الشهيبي خلال 24 ساعة عمل
                بعرض سعر تفصيلي.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-white/85">
                {["دراسة المسار والتكلفة", "تأمين على البضاعة", "تخليص جمركي شامل"].map((t) => (
                  <li key={t} className="flex items-center gap-3">
                    <span
                      className="grid h-6 w-6 place-items-center rounded-full text-white"
                      style={{ background: "var(--gradient-primary)" }}
                    >
                      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M5 12l4 4L19 6" />
                      </svg>
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12">
            <h3 className="text-2xl font-black text-[color:var(--color-primary-deep)]">
              املأ البيانات وسنتواصل معك
            </h3>
            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <Field
                label="الاسم"
                required
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                placeholder="الاسم الكامل"
              />
              <Field
                label="اسم الشركة"
                value={form.company}
                onChange={(v) => setForm({ ...form, company: v })}
                placeholder="اسم الشركة (اختياري)"
              />
              <Field
                label="رقم التواصل"
                required
                type="tel"
                value={form.phone}
                onChange={(v) => setForm({ ...form, phone: v })}
                placeholder="+20 100 000 0000"
              />
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-foreground">
                  تفاصيل الشحنة <span className="text-[color:var(--color-primary)]">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="نوع البضاعة، الوزن، نقطة التحميل والتسليم..."
                  className="w-full rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:bg-white"
                />
              </div>

              <button type="submit" className="btn-primary w-full !py-3">
                إرسال الاستفسار عبر واتساب
              </button>

              {sent && (
                <p className="text-center text-sm font-semibold text-[color:var(--color-whatsapp)]">
                  تم فتح واتساب — تابع الإرسال من هناك. شكراً لتواصلك مع الشهيبي.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label, value, onChange, placeholder, required, type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-foreground">
        {label} {required && <span className="text-[color:var(--color-primary)]">*</span>}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:bg-white"
      />
    </div>
  );
}

/* ----------------------------- Footer ----------------------------- */
function Footer() {
  return (
    <footer className="relative pt-16 pb-8 text-white" style={{ background: "var(--gradient-deep)" }}>
      <div className="container-x">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <LogoMark />
              <div className="leading-tight">
                <div className="text-xl font-black">الشهيبي</div>
                <div className="text-[10px] tracking-[0.3em] text-white/70">AL-SHEHABY LOGISTICS</div>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm text-white/70">
              شركة مصرية رائدة في النقل البري الثقيل والشحنات العملاقة عبر دول الشرق الأوسط.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold">روابط سريعة</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {NAV.map((n) => (
                <li key={n.href}><a href={n.href} className="hover:text-white">{n.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold">تواصل</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li dir="ltr" className="text-end">{PHONE}</li>
              <li>القاهرة، مصر</li>
              <li><a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="hover:text-white">واتساب</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/55 md:flex-row">
          <span>© {new Date().getFullYear()} الشهيبي للنقل البري الثقيل. جميع الحقوق محفوظة.</span>
          <span>صُمم بإتقان في القاهرة.</span>
        </div>
      </div>
    </footer>
  );
}
