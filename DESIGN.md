---
name: Al-Shaheebi Trust International Road Transport
description: Premium logistics landing page serving the Arab world
colors:
  primary-deep: "oklch(0.28 0.09 255)"
  primary: "oklch(0.58 0.18 252)"
  primary-foreground: "oklch(1 0 0)"
  secondary: "oklch(0.96 0.01 250)"
  secondary-foreground: "oklch(0.22 0.06 252)"
  muted: "oklch(0.96 0.01 250)"
  muted-foreground: "oklch(0.50 0.03 250)"
  accent: "oklch(0.92 0.04 252)"
  border: "oklch(0.90 0.02 250)"
  background: "oklch(1 0 0)"
  foreground: "oklch(0.18 0.04 250)"
  whatsapp: "oklch(0.66 0.18 150)"
  surface-deep: "oklch(0.20 0.08 255)"
  surface-dark: "oklch(0.12 0.06 255)"
typography:
  display:
    fontFamily: "Cairo, Tajawal, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 5rem)"
    fontWeight: 900
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Cairo, Tajawal, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Cairo, Tajawal, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "Cairo, Tajawal, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Cairo, Tajawal, system-ui, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.18em"
    textTransform: "uppercase"
rounded:
  sm: "0.375rem"
  md: "0.5rem"
  lg: "0.75rem"
  xl: "1rem"
  full: "9999px"
spacing:
  section: "6rem 8rem"
  container: "1.25rem"
  grid: "1.5rem"
  stack: "1rem"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    rounded: "{rounded.full}"
    padding: "0.85rem 1.6rem"
  button-primary-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    padding: "0.85rem 1.6rem"
  button-ghost:
    backgroundColor: "oklch(1 1 0 / 0.08)"
    textColor: "oklch(1 0 0)"
    rounded: "{rounded.full}"
    padding: "0.85rem 1.6rem"
  card-default:
    backgroundColor: "{colors.background}"
    rounded: "{rounded.xl}"
    padding: "1.75rem"
  input-default:
    backgroundColor: "{colors.background}"
    rounded: "{rounded.xl}"
    padding: "0.75rem 1rem"
---

# Design System: Al-Shaheebi Trust

## 1. Overview

**Creative North Star: "The Heavy Metal"**

Al-Shaheebi Trust is built on power, reach, and trust. Every visual decision echoes the weight of a loaded truck crossing the Arab world — nothing is light, nothing is fleeting. The palette is anchored in Deep Water Blue, a saturated navy that reads as authority without aggression. Surfaces are dark and immersive, lit by cinematic gradients that suggest desert dawns and highway nights. Motion is deliberate: the Ken Burns zoom on capital city images, the slow parallax on the hero video, the floating WhatsApp beacon — every animation has the gravity of something heavy in motion.

This system explicitly rejects the generic trucking template: no cheap stock photography, no clip art icons, no beige backgrounds, no cluttered layouts. Instead, it stakes its ground in the Middle East — Arabic-first typography, a coverage map that proudly names 15 Arab capitals, and a tone that says "we built this, we know these roads."

**Key Characteristics:**
- Heavy, authoritative, grounded — nothing feels floating or disposable
- Dark immersive surfaces punctuated by Deep Water Blue accents
- Cinematic motion — slow, smooth, intentional
- Arabic-first with a premium, not decorative, treatment
- Show-don't-tell: visual proof of fleet, coverage, and operations

## 2. Colors

The palette is built around a single saturated blue — Deep Water Blue — carried across dark and light surfaces. It is not a cheerful blue. It is the blue of the open sea at night, of a truck's headlights on a long haul.

### Primary
- **Deep Water Blue** (`oklch(0.58 0.18 252)` / `--primary`): The brand anchor. Used for buttons (gradient-primary), accent text, focus rings, subtle glows, and the primary decorative gradient. It appears on ≤30% of any given screen — present enough to brand, rare enough to mean something.
- **Deep Water Navy** (`oklch(0.28 0.09 255)` / `--primary-deep`): The dark variant of the primary. Used as the scroll-state header background, section backgrounds via gradient-deep, and the deeper end of decorative gradients.
- **Primary Foreground** (`oklch(1 0 0)` / `--primary-foreground`): White. Text on primary backgrounds and buttons.

### Neutral (Dark Surface)
- **Surface Deep** (`oklch(0.20 0.08 255)` / `--surface-deep`, mapped to `--gradient-deep` start): The default dark section background — a deep, cool navy, not black.
- **Surface Dark** (`oklch(0.12 0.06 255)` / `--surface-dark`, mapped to `--gradient-deep` end): The darkest section background. Used in the Coverage section and Footer.

### Neutral (Light Surface)
- **White** (`oklch(1 0 0)` / `--background`, `--card`): Card backgrounds, form backgrounds, and light mode sections.
- **Almost White** (`oklch(0.96 0.01 250)` / `--secondary`, `--muted`): Subtle tinted off-white for form fields, secondary card areas, and muted backgrounds.
- **Border Light** (`oklch(0.90 0.02 250)` / `--border`): Light dividers and strokes.

### Text
- **Ink** (`oklch(0.18 0.04 250)` / `--foreground`): Dark text on light backgrounds. Near-black with a blue lean.
- **Muted Ink** (`oklch(0.50 0.03 250)` / `--muted-foreground`): Secondary text, labels, descriptions on light backgrounds.
- **White** (`oklch(1 0 0)`): Primary text on dark surfaces, used at varying opacities (85% body, 70% secondary, 55% copyright).

### Accent
- **WhatsApp Green** (`oklch(0.66 0.18 150)` / `--whatsapp`): Used exclusively for the floating WhatsApp CTA. Bright, saturated, purpose-built. Not used decoratively.

### Named Rules
- **The Deep Water Rule.** The primary blue appears on ≤30% of any given screen. Its restraint is what makes it authoritative. Overuse turns it into a uniform — and uniforms are not premium.
- **The Night Haul Rule.** Dark sections are never black. They are tinted navy — cool, deep, and directional. True black reads as dead; tinted dark surfaces read as purposeful.

## 3. Typography

**Display Font:** Cairo (ExtraBold 800 / Black 900), with Tajawal fallback
**Body Font:** Cairo (Regular 400 / SemiBold 600), with Tajawal fallback
**Label Font:** Cairo (Bold 700), with Tajawal fallback

**Character:** One family, voiced through weight contrast. Cairo's geometric-Arabic hybrid carries both authority and warmth — squared enough for headlines, open enough for long body text. The entire hierarchy comes from weight and size, not from switching families. This is the typographic equivalent of a single engine that does highway and city driving.

### Hierarchy
- **Display** (Black 900, `clamp(2.5rem, 6vw, 5rem)`, 1.1): Hero headlines only. Never used for section titles. line-height tight for dramatic stacking. `text-wrap: balance` required.
- **Headline** (ExtraBold 800, `clamp(1.75rem, 3.5vw, 2.75rem)`, 1.15): Section titles. `text-wrap: balance`.
- **Title** (Bold 700, `1.125rem`, 1.3): Card titles, feature names.
- **Body** (Regular 400, `0.875rem`, 1.7): Paragraphs, descriptions. Line length capped at 65–75ch.
- **Label** (Bold 700, `0.8rem`, 1.2, tracking `0.18em`, uppercase): Eyebrow section markers, tags.
- **Stat Numerals** (Black 900, `clamp(1.75rem, 3.5vw, 2.75rem)`): Stat counters. Gradient primary text via `background-clip: text`.

### Named Rules
- **The Single Engine Rule.** Cairo is the only typeface. No second display font, no serif accent. Weight contrast does all the work. A second font would fracture the brand's disciplined, one-voice character.
- **The Highway Rule.** Body text on dark backgrounds is white at 80–85% opacity, never pure white, never below 70%. The slight dim reduces eye strain on long dark-mode reads.

## 4. Elevation

Depth is conveyed through cinematic shadows — dark, wide, and atmospheric. Surfaces are not flat; they sit in a dimly lit space and catch light. The shadows are never sharp (no tight `box-shadow: 0 2px 4px`). They are diffused, as if illuminated by a single desert moon.

### Shadow Vocabulary
- **Elegant Shadow** (`0 20px 60px -25px oklch(0.30 0.12 255 / 0.45)`): Default card shadow. Wide, soft, deep. Used on service cards, contact cards, stat panels.
- **Glow Shadow** (`0 0 60px oklch(0.58 0.18 252 / 0.35)`): Hover state for primary elements, and the hero accent bar. A colored glow, not a neutral shadow.
- **WhatsApp Pulse** (`@keyframes pulse-ring`): A pulsing radial glow in WhatsApp green, unique to the floating FAB.

### Named Rules
- **The Moonlight Rule.** All shadows are wide and soft (>50px blur). Tight shadows (2–8px blur) look like low-budget print. These shadows belong in a warehouse under a single light source — cinematic, not corporate.

## 5. Components

### Buttons
- **Shape:** Pill shape (rounded-full, 9999px). Tall padding (0.85rem 1.6rem) for a substantial feel.
- **Primary:** Gradient from Deep Water Blue to a deeper navy (`--gradient-primary`). White text, weight 700. Hover: lift 2px (`translateY(-2px)`), glow shadow, brightness 1.05. Ease-out transition 250ms.
- **Ghost:** Transparent with a white border at 35% opacity. Blur backdrop. Weight 600. Hover: white bg at 18% opacity, lift 2px.
- **Do not use** the shadcn `default` button (slate bg) on this page — only the custom primary/ghost patterns.

### Cards / Containers
- **Corner Style:** rounded-2xl (1rem) for all content cards. rounded-3xl (1.5rem) for the inquiry form promo panel.
- **Background:** White (`--background`) for light cards on light sections. Transparent/dark containers on dark sections use gradient-deep.
- **Shadow Strategy:** Elegant Shadow at rest. Glow Shadow on hover for interactive cards.
- **Border:** `border-border` (light gray-blue) on light cards. No border on dark cards — depth comes from shadow and gradient.
- **Internal Padding:** 1.75rem (p-7) for standard cards.

### Carousel (Coverage Section)
- **Shape:** Full-height column on desktop (550–650px), fills container width on mobile. No round corners on mobile (edge-to-edge), rounded-2xl on desktop.
- **Content:** Single slide per view (basis-full). Each slide fills the full height with object-cover image.
- **Motion:** Autoplay every 3.5s, Ken Burns continuous zoom (`animate-ken-burns`), gradient overlay at bottom for city name.
- **Controls:** No dot indicators, no arrow buttons. Pure autoplay.
- **Fallback:** Animated gradient placeholder (`animate-pulse`) if image fails to load.

### Images
- **Fleet cards:** aspect-[4/3], object-cover. Hover: scale-110 with 700ms transition.
- **Capital city slides:** object-cover, full-height. Fade in on load (opacity 0 → 1).
- **All images** should be local (no external dependencies post-download). onError handler hides broken images.

### Navigation (Header)
- **Style:** Fixed top, transparent at rest, `--primary-deep/95` with `backdrop-blur-md` on scroll (threshold 80px).
- **Logo:** White-background box, rounded-lg, shadow-ring border.
- **Desktop links:** text-sm, semibold 600, white/85 → white on hover. Smooth color transition.
- **Mobile:** Hamburger toggle → dropdown overlay with the same links + CTA.
- **CTA in header:** Primary button at smaller scale (`!py-2.5 !px-5 text-sm`).

### Inputs / Fields
- **Style:** rounded-xl (1rem), border-border, `--secondary`/40 bg. Padding: 0.75rem 1rem.
- **Focus:** border shifts to primary, bg to white, ring-2 in primary color.
- **Label:** text-sm, semibold, block, 1.5mb gap.
- **Error:** Standard shadcn validation pattern with destructive-colored messages.

### WhatsApp Floating Button
- **Position:** fixed bottom-6 left-6, z-50.
- **Size:** 56×56 circle.
- **Color:** WhatsApp Green (`--whatsapp`).
- **Animation:** `animate-pulse-ring` (pulsing green glow ring).
- **Icon:** WhatsApp SVG (24×24), white.

## 6. Do's and Don'ts

### Do:
- **Do** use Deep Water Blue as the primary accent — restrained, authoritative, ≤30% of any screen.
- **Do** use dark backgrounds as the default for premium sections (gradient-deep: cool navy, not black).
- **Do** use cinematic wide shadows (>50px blur) for card depth — soft, diffused, moonlight-quality.
- **Do** keep typography to one family (Cairo). Vary weight, not font.
- **Do** use the Ken Burns zoom on capital city images — it makes the coverage section feel alive.
- **Do** respect `prefers-reduced-motion`: collapse animations to crossfades or instant transitions.
- **Do** use local images only. No external `src` dependencies that can fail at load time.
- **Do** keep the pill button shape (rounded-full) for all primary and ghost buttons.
- **Do** write Arabic-first. English is present as a subtitle, never as the primary copy.

### Don't:
- **Don't** use generic trucking stock photography, cheap clip art, or template-like layouts (PRODUCT.md anti-reference).
- **Don't** put gray text on colored backgrounds — use a shade of that color or a transparency instead.
- **Don't** use gradient text (`background-clip: text` with a gradient) — use a single solid color.
- **Don't** use side-stripe borders (border-left >1px as a colored accent on cards).
- **Don't** use glassmorphism decoratively — blurs and glass cards are rare and purposeful here, not defaults.
- **Don't** use the hero-metric template (big number + small label + gradient accent) as a section pattern.
- **Don't** put an eyebrow (`تغطيتنا الجغرافية`-style kicker) above every section — one is voice, two is pattern, three is reflex.
- **Don't** use numbered section markers (01 · About / 02 · Coverage) as default scaffolding.
- **Don't** use bounce or elastic easing — use exponential ease-out (quart / quint / expo).
- **Don't** let text overflow containers — test headings at every breakpoint.
- **Don't** ship hard-coded colors that should use design tokens (`--color-primary`, `--gradient-deep`, etc.).
