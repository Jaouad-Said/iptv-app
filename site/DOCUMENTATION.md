# IPTV Sales Website - Full Documentation

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack](#2-tech-stack)
3. [Project Structure](#3-project-structure)
4. [Getting Started](#4-getting-started)
5. [Configuration](#5-configuration)
6. [Internationalization (i18n)](#6-internationalization-i18n)
7. [Pages & Routing](#7-pages--routing)
8. [Components Reference](#8-components-reference)
9. [Layouts](#9-layouts)
10. [Styling & Design System](#10-styling--design-system)
11. [Blog System](#11-blog-system)
12. [SEO & Metadata](#12-seo--metadata)
13. [Security](#13-security)
14. [Performance Optimizations](#14-performance-optimizations)
15. [Deployment](#15-deployment)
16. [Customization Guide](#16-customization-guide)
17. [Troubleshooting](#17-troubleshooting)

---

## 1. Project Overview

A modern, static IPTV subscription sales website built with Astro 5 and Tailwind CSS 4. The site supports three languages (English, French, Arabic with RTL), uses WhatsApp as the primary customer contact channel, and is optimized for performance, SEO, and security.

### Key Features

- **Multilingual**: English, French, Arabic (with full RTL support)
- **Static Site Generation (SSG)**: Zero server-side runtime, maximum performance
- **WhatsApp Integration**: Floating action button + pre-filled messages per page context
- **Responsive Design**: Mobile-first with glassmorphism, gradient accents, scroll animations
- **Blog System**: Markdown/MDX-powered content collections with schema validation
- **SEO**: Automatic sitemap, hreflang, Open Graph, Twitter Cards, JSON-LD structured data
- **Security**: CSP, HSTS, X-Frame-Options, and other security headers
- **Analytics**: Google Analytics 4 offloaded to a web worker via Partytown
- **Dark Mode**: System-preference detection with manual toggle, no FOUC

### Build Output

The site compiles to 29 static HTML pages in the `dist/` directory, ready for deployment to any CDN or static hosting provider.

---

## 2. Tech Stack

| Tool | Version | Purpose |
|--- |--- |--- |
| Astro | 5.17.1 | Static site framework with component islands |
| Tailwind CSS | 4.2.1 | Utility-first CSS via `@tailwindcss/vite` plugin |
| TypeScript | 5.9.3 | Type safety across all components and configs |
| Sharp | 0.34.5 | Image optimization (WebP/AVIF generation) |
| @astrojs/mdx | 4.3.13 | MDX support for blog content |
| @astrojs/sitemap | 3.7.0 | Auto-generated multilingual sitemap with hreflang |
| @astrojs/partytown | 2.1.4 | Offloads analytics scripts to web workers |
| @astrojs/check | 0.9.6 | Astro + TypeScript type checking |

---

## 3. Project Structure

```
site/
├── astro.config.mjs          # Astro configuration (i18n, integrations, vite)
├── tsconfig.json              # TypeScript config (extends Astro strict)
├── package.json               # Dependencies and scripts
├── netlify.toml               # Netlify deploy config + security headers
│
├── public/                    # Static files served as-is
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── robots.txt             # Search engine crawl rules
│   ├── _headers               # Cloudflare Pages security headers
│   └── assets/
│       └── images/
│           ├── hero-devices.svg    # Hero section device illustration
│           └── wave-divider.svg    # Decorative section divider
│
└── src/
    ├── config/                # All site-wide configuration (single source of truth)
    │   ├── site.ts            # Brand name, domain, email, social links
    │   ├── whatsapp.ts        # WhatsApp number + message templates
    │   ├── plans.ts           # Pricing plans, features, badges
    │   ├── navigation.ts      # Nav links + footer links
    │   └── locales.ts         # Supported languages, RTL detection, metadata
    │
    ├── i18n/                  # Translation system
    │   ├── en.ts              # English translations (~250 lines)
    │   ├── fr.ts              # French translations (~235 lines)
    │   ├── ar.ts              # Arabic translations (~235 lines)
    │   └── index.ts           # useTranslations() + interpolate() helpers
    │
    ├── styles/
    │   └── global.css         # Tailwind v4 @theme, custom animations, design system
    │
    ├── layouts/
    │   ├── Base.astro         # <html> shell: head, SEO, fonts, dark mode, scroll reveal
    │   └── Page.astro         # Base + Nav + Footer + WhatsApp FAB wrapper
    │
    ├── components/
    │   ├── nav/
    │   │   └── Nav.astro              # Sticky header, language switcher, mobile menu
    │   ├── footer/
    │   │   └── Footer.astro           # Multi-column footer with social links
    │   ├── whatsapp/
    │   │   └── WhatsAppFAB.astro      # Floating WhatsApp button (bottom-right/left)
    │   ├── sections/
    │   │   ├── Hero.astro             # Split-layout hero with device illustration
    │   │   ├── StatsBar.astro         # Glass-card stats counter strip
    │   │   ├── MovieCarousel.astro    # Infinite marquee of movie posters
    │   │   ├── HowItWorks.astro       # Timeline-style 3-step guide
    │   │   ├── WhyChooseUs.astro      # Bento grid feature cards
    │   │   ├── Testimonials.astro     # Customer review cards
    │   │   ├── FaqAccordion.astro     # Expandable FAQ with JSON-LD
    │   │   └── ContactCTA.astro       # Green gradient WhatsApp CTA section
    │   └── pricing/
    │       ├── PricingSection.astro   # Tabbed single/multi plan switcher
    │       └── PlanCard.astro         # Individual pricing card
    │
    ├── pages/
    │   ├── index.astro                # Root redirect -> /en/
    │   └── [lang]/
    │       ├── index.astro            # Home page (all sections)
    │       ├── pricing.astro          # Dedicated pricing page + OfferCatalog JSON-LD
    │       ├── reseller.astro         # Reseller program page
    │       ├── affiliate.astro        # Affiliate/referral program page
    │       ├── faq.astro              # FAQ page
    │       ├── privacy.astro          # Privacy policy
    │       ├── terms.astro            # Terms of service
    │       ├── refund.astro           # Refund policy
    │       └── blog/
    │           ├── index.astro        # Blog listing page
    │           └── [slug].astro       # Individual blog post + Article JSON-LD
    │
    └── content/
        ├── config.ts                  # Zod schema for blog collection
        └── blog/
            ├── en/
            │   └── what-is-iptv.md    # Sample English blog post
            ├── fr/
            │   └── what-is-iptv.md    # Sample French blog post
            └── ar/
                └── what-is-iptv.md    # Sample Arabic blog post
```

---

## 4. Getting Started

### Prerequisites

- Node.js 20+ (LTS recommended)
- npm 9+

### Installation

```bash
cd site
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:4321`. Hot module replacement is enabled.

### Production Build

```bash
npm run build
```

Output goes to `./dist/`. Build produces 29 static HTML pages.

### Preview Production Build

```bash
npm run preview
```

Serves the built `dist/` folder locally for testing.

### Type Checking

```bash
npm run check
```

Runs `astro check` for TypeScript + Astro template validation.

---

## 5. Configuration

All site-wide settings live in `src/config/`. These files are the **single source of truth** for business data.

### 5.1 Site Config (`src/config/site.ts`)

Defines brand identity, domain, and global metadata.

```typescript
export const SITE = {
  name: 'YourBrand',           // Brand name used in titles, footer, JSON-LD
  tagline: 'Premium IPTV Service',
  domain: 'yourdomain.com',
  url: 'https://yourdomain.com',
  email: 'contact@yourdomain.com',
  foundedYear: 2024,
  supportHours: { open: 9, close: 24 },  // UTC+1 (CET)
  socialLinks: {
    telegram: 'https://t.me/yourbotname',
  },
  currency: 'EUR',
  currencySymbol: '\u20ac',
  ga4Id: '',                   // Google Analytics 4 measurement ID (G-XXXXXXXXXX)
};
```

**What to change for your brand:**
- `name` - Your business name
- `domain` / `url` - Your actual domain
- `email` - Support email address
- `socialLinks` - Update or add platforms
- `ga4Id` - Your Google Analytics 4 ID (leave empty to disable)

### 5.2 WhatsApp Config (`src/config/whatsapp.ts`)

Controls the WhatsApp floating button and per-page pre-filled messages.

```typescript
export const WHATSAPP_CONFIG = {
  number: 'PLACEHOLDER',    // Replace with your WhatsApp Business number (no + or spaces)
  messages: {
    default:   'Hello! I am interested in your IPTV service.',
    pricing:   'Hello! I would like to know more about your pricing plans.',
    reseller:  'Hello! I am interested in your reseller program.',
    affiliate: 'Hello! I want to learn about your affiliate program.',
    trial:     'Hello! I would like to request a free trial.',
    extend:    'Hello! I would like to extend my current subscription.',
  },
} as const;
```

**What to change:**
- `number` - Your WhatsApp Business number in international format (e.g. `212600000000`)
- `messages` - Customize pre-filled messages for each page context

`getWhatsAppUrl(key)` generates the `wa.me` link with URL-encoded text.

### 5.3 Pricing Plans (`src/config/plans.ts`)

All pricing data in one place. Drives the pricing section, JSON-LD OfferCatalog, and WhatsApp messages.

**Single Device Plans:**

| Duration | Price | Original | Best Value? |
|--- |--- |--- |--- |
| 1 Month | 15 EUR | 21 EUR | No |
| 3 Months | 30 EUR | 42 EUR | No |
| 6 Months | 45 EUR | 62 EUR | No |
| 1 Year | 70 EUR | 95 EUR | Yes |

**Multi-Device Plans (all 1 year):**

| Devices | Price | Original | Best Value? |
|--- |--- |--- |--- |
| 2 | 120 EUR | 165 EUR | No |
| 3 | 180 EUR | 249 EUR | Yes |
| 4 | 210 EUR | 289 EUR | No |

Each plan has these properties:

```typescript
interface Plan {
  id: string;                    // Unique identifier
  durationMonths: number;        // 1, 3, 6, or 12
  durationLabel: string;         // Display text (e.g. "1 Month")
  priceEUR: number;              // Current price
  originalPriceEUR?: number;     // Strikethrough price (optional)
  isBestValue: boolean;          // Highlights the card
  badge?: string;                // Optional badge text
  devicesCount?: number;         // For multi-device plans
  waMessageKey: MessageKey;      // WhatsApp message template to use
}
```

**Plan Features:**
- `PLAN_FEATURES_BASE` - Features shown by default on every card
- `PLAN_FEATURES_EXTRA` - Additional features hidden behind "More details" toggle

### 5.4 Navigation (`src/config/navigation.ts`)

```typescript
export const NAV_LINKS: NavLink[] = [
  { key: 'home',     href: '/' },
  { key: 'pricing',  href: '/pricing' },
  { key: 'reseller', href: '/reseller' },
  { key: 'affiliate',href: '/affiliate' },
  { key: 'faq',      href: '/faq' },
];
```

Links are translated via the i18n system. The `key` maps to `nav[key]` in translation files. The `href` is automatically prefixed with the current language (e.g. `/en/pricing`).

### 5.5 Locales (`src/config/locales.ts`)

```typescript
export const LOCALES = ['en', 'fr', 'ar'] as const;
export const DEFAULT_LOCALE = 'en';
export const RTL_LOCALES = new Set<Locale>(['ar']);

export function isRTL(locale: Locale): boolean {
  return RTL_LOCALES.has(locale);
}
```

`LOCALE_META` provides flag emojis, native names, OG locale codes, and hreflang codes for each language.

---

## 6. Internationalization (i18n)

### URL Structure

```
/         -> 301 redirect to /en/
/en/      -> English (LTR)
/fr/      -> French (LTR)
/ar/      -> Arabic (RTL)
```

All pages use the `[lang]/` dynamic route parameter. Astro's built-in i18n with `prefixDefaultLocale: true` ensures consistent URL structure.

### Translation Files

Located in `src/i18n/`:

- **`en.ts`** - Source of truth for translation keys (exports the `Translations` type)
- **`fr.ts`** - French translations (typed as `Translations`)
- **`ar.ts`** - Arabic translations (typed as `Translations`)

The `Translations` type uses a recursive `Stringify<T>` mapping that converts literal string types to `string`, allowing each language to have different text content while maintaining structural type safety.

### Using Translations

```typescript
// In any .astro component frontmatter:
import { useTranslations, interpolate } from '../../i18n/index';
import type { Locale } from '../../config/locales';

const { lang } = Astro.props;
const t = useTranslations(lang);

// Access a translation section
const hero = t('hero');
console.log(hero.headline); // "Premium {brand} Experience"

// Interpolate variables
const title = interpolate(hero.headline, { brand: 'MyBrand' });
// -> "Premium MyBrand Experience"
```

### Translation Sections

| Key | Content |
|--- |--- |
| `nav` | Navigation link labels |
| `hero` | Hero section text, CTAs, ticker items |
| `howItWorks` | 3-step process titles and descriptions |
| `whyUs` | 6 feature cards (title, description, icon name) |
| `plans` | Pricing labels, feature names, buttons, durations |
| `faq` | FAQ questions and answers (7 items) |
| `contact` | Contact section title, subtitle, hours, WhatsApp CTA |
| `footer` | Footer sections, copyright text |
| `reseller` | Reseller program page content |
| `affiliate` | Affiliate program page content |
| `lang_modal` | Language selector labels |
| `duration` | Duration labels (1m, 3m, 6m, 1y) |
| `common` | Shared UI labels |

### RTL Support

When the locale is Arabic:
1. `<html lang="ar" dir="rtl">` is set by `Base.astro`
2. All spacing uses Tailwind logical properties (`ms-*`, `me-*`, `ps-*`, `pe-*`, `start-*`, `end-*`)
3. The WhatsApp FAB uses `end-5` which flips from right to left
4. Marquee animations reverse direction via `[dir="rtl"]` CSS selectors
5. Arabic-specific font (Noto Sans Arabic) is loaded alongside Inter

---

## 7. Pages & Routing

### Page Map

| URL Pattern | File | Description |
|--- |--- |--- |
| `/` | `pages/index.astro` | 301 redirect to `/en/` |
| `/{lang}/` | `pages/[lang]/index.astro` | Home page with all sections |
| `/{lang}/pricing` | `pages/[lang]/pricing.astro` | Dedicated pricing page |
| `/{lang}/reseller` | `pages/[lang]/reseller.astro` | Reseller program |
| `/{lang}/affiliate` | `pages/[lang]/affiliate.astro` | Affiliate/referral program |
| `/{lang}/faq` | `pages/[lang]/faq.astro` | FAQ page |
| `/{lang}/privacy` | `pages/[lang]/privacy.astro` | Privacy policy |
| `/{lang}/terms` | `pages/[lang]/terms.astro` | Terms of service |
| `/{lang}/refund` | `pages/[lang]/refund.astro` | Refund policy |
| `/{lang}/blog` | `pages/[lang]/blog/index.astro` | Blog listing |
| `/{lang}/blog/{slug}` | `pages/[lang]/blog/[slug].astro` | Blog post detail |

All `[lang]` pages use `getStaticPaths()` to generate one page per locale (`en`, `fr`, `ar`).

### Home Page Section Order

```
Hero                -> Split layout with device illustration
StatsBar            -> Glass-card animated statistics
MovieCarousel       -> Infinite marquee of movie posters
HowItWorks          -> 3-step timeline guide
WhyChooseUs         -> 6-card bento grid
Testimonials        -> Customer review cards
PricingSection      -> Tabbed single/multi plans
FaqAccordion        -> Expandable Q&A
ContactCTA          -> Green gradient WhatsApp CTA
```

---

## 8. Components Reference

### 8.1 Navigation (`Nav.astro`)

**Location:** `src/components/nav/Nav.astro`

Sticky header that becomes translucent glass on scroll. Features:
- Desktop: horizontal nav links, language dropdown, dark mode toggle, WhatsApp CTA button
- Mobile: hamburger menu with full-screen overlay
- Language switcher with flag emojis and native language names
- Dark mode toggle with sun/moon icons
- Active link highlighting based on current URL

**Props:** `lang: Locale`

### 8.2 Footer (`Footer.astro`)

**Location:** `src/components/footer/Footer.astro`

Multi-column footer. Features:
- Top CTA strip with WhatsApp link
- 4 columns: Brand info, Service links, Help links, Legal links
- Social media icons (Telegram)
- Bottom bar with copyright and language

**Props:** `lang: Locale`

### 8.3 WhatsApp FAB (`WhatsAppFAB.astro`)

**Location:** `src/components/whatsapp/WhatsAppFAB.astro`

Fixed-position floating action button in the bottom-right corner (flips to bottom-left in RTL). Features:
- Pulsing green ring animation (`animate-ping`)
- Opens `wa.me` link in new tab with pre-filled message
- Pure `<a>` tag, zero JavaScript, works without JS
- Pre-filled message determined by the `messageKey` prop

**Props:** `lang: Locale`, `messageKey?: MessageKey`

### 8.4 Hero (`Hero.astro`)

**Location:** `src/components/sections/Hero.astro`

Split-layout hero section (text 3/5, device illustration 2/5). Features:
- Mesh gradient background with decorative floating dots
- Device SVG illustration with glow effect
- Two CTA buttons (WhatsApp + pricing anchor)
- Horizontal ticker strip with service highlights
- Wave divider at bottom

**Props:** `lang: Locale`

### 8.5 StatsBar (`StatsBar.astro`)

**Location:** `src/components/sections/StatsBar.astro`

Glass-card statistics strip. Features:
- Overlaps hero with negative top margin (`-mt-6`)
- 4 stats: 10,000+ Channels, 50+ Countries, 4K Quality, 24/7 Support
- Gradient text numbers, staggered scroll-reveal animations
- Green accent line at top

**Props:** None (hardcoded stats)

### 8.6 MovieCarousel (`MovieCarousel.astro`)

**Location:** `src/components/sections/MovieCarousel.astro`

Infinite horizontal marquee of movie poster placeholders. Features:
- 22 movie titles with hue-based gradient colors
- Pauses on hover
- RTL-aware animation direction
- Rounded corner poster cards

**Props:** None

### 8.7 HowItWorks (`HowItWorks.astro`)

**Location:** `src/components/sections/HowItWorks.astro`

3-step process guide with timeline design. Features:
- Connected timeline with dashed lines between steps
- Glowing numbered circles
- Step title + description from translations
- Vertical layout on mobile, horizontal on desktop
- HowTo JSON-LD structured data

**Props:** `lang: Locale`

### 8.8 WhyChooseUs (`WhyChooseUs.astro`)

**Location:** `src/components/sections/WhyChooseUs.astro`

Bento grid of 6 feature cards. Features:
- Asymmetric grid (first 2 cards span 2 columns on large screens)
- Glass-card + bento-card styling with hover lift effect
- Gradient accent left border on large cards
- Icons from translations, staggered scroll-reveal

**Props:** `lang: Locale`

### 8.9 Testimonials (`Testimonials.astro`)

**Location:** `src/components/sections/Testimonials.astro`

3 customer review cards. Features:
- Star ratings rendered as SVGs
- Blockquote with quotation marks
- Avatar circles with gradient initials
- Country flags and names
- Glass-card styling with green top border accent

**Props:** None (hardcoded testimonials)

### 8.10 PricingSection (`PricingSection.astro`)

**Location:** `src/components/pricing/PricingSection.astro`

Tabbed pricing section. Features:
- iOS-style sliding pill indicator between tabs
- Two panels: Single device / Multi device
- Subtitle text changes with tab switch
- Mesh gradient background

**Props:** `lang: Locale`

### 8.11 PlanCard (`PlanCard.astro`)

**Location:** `src/components/pricing/PlanCard.astro`

Individual pricing card. Features:
- "Best Value" badge with shine animation for featured plans
- Gradient top border accent for featured cards
- Strikethrough original price
- Monthly equivalent calculation for multi-month plans
- Device count badge for multi-device plans
- Expandable "More details" feature list via `<details>` element
- WhatsApp CTA button

**Props:** `plan: Plan`, `lang: Locale`

### 8.12 FaqAccordion (`FaqAccordion.astro`)

**Location:** `src/components/sections/FaqAccordion.astro`

Expandable FAQ section. Features:
- Native `<details>/<summary>` elements (no JavaScript)
- Chevron rotation on open
- FAQPage JSON-LD structured data for Google rich results
- Reusable on both home page and dedicated FAQ page

**Props:** `lang: Locale`, `showTitle?: boolean`

### 8.13 ContactCTA (`ContactCTA.astro`)

**Location:** `src/components/sections/ContactCTA.astro`

Full-width contact call-to-action. Features:
- Diagonal green gradient background (`from-[#00D084] via-[#00b371] to-[#006840]`)
- Floating decorative dots with animation
- Support status badge (open/closed based on CET hours)
- Large inverted WhatsApp CTA button
- Email display

**Props:** `lang: Locale`

---

## 9. Layouts

### Base.astro

**Location:** `src/layouts/Base.astro`

Root HTML document layout. Handles:
- `<html lang dir>` attributes (RTL for Arabic)
- `<meta>` tags: charset, viewport, theme-color, description, robots
- Canonical URL construction
- hreflang links for all 3 languages + x-default
- Open Graph and Twitter Card meta tags
- Favicon links (SVG + ICO)
- Google Fonts loading (non-render-blocking via `media="print"` trick)
- Organization JSON-LD schema
- Dark mode init script (inline, runs before CSS paints to prevent FOUC)
- Scroll reveal IntersectionObserver script (observes `[data-reveal]` elements)

### Page.astro

**Location:** `src/layouts/Page.astro`

Wraps `Base.astro` and adds common page-level components:
- Navigation bar (`Nav.astro`)
- `<main>` content slot
- Footer (`Footer.astro`)
- WhatsApp FAB (`WhatsAppFAB.astro`)

**Props:** `lang`, `title`, `description`, `canonicalPath?`, `ogImage?`, `noIndex?`, `waMessageKey?`

---

## 10. Styling & Design System

### Tailwind CSS v4

The project uses Tailwind CSS 4 with the Vite plugin (`@tailwindcss/vite`), not the legacy PostCSS approach. Configuration is done via CSS `@theme` blocks in `src/styles/global.css`.

### Custom Theme Variables

```css
@theme {
  --color-planet: #00D084;        /* Primary green */
  --color-planet-2: #00e69b;      /* Lighter green */
  --color-planet-dark: #00b371;   /* Darker green */
  --color-accent: #6366f1;        /* Indigo accent */
  --color-accent-2: #818cf8;      /* Lighter indigo */

  --font-sans: 'Inter', 'Noto Sans Arabic', system-ui, sans-serif;

  --shadow-card: 0 4px 24px 0 rgba(0, 208, 132, 0.08);
  --shadow-card-hover: 0 12px 40px -8px rgba(0, 208, 132, 0.2);
  --shadow-button: 0 2px 12px 0 rgba(0, 208, 132, 0.3);
  --shadow-glow: 0 0 60px 20px rgba(0, 208, 132, 0.15);
}
```

### Dark Mode

Dark mode uses the `class` strategy. The inline script in `Base.astro` reads the user's preference from `localStorage` (key: `iptv_theme`) or falls back to `prefers-color-scheme`. The `dark` class is toggled on `<html>` before any CSS loads, preventing flash of wrong theme.

```css
@variant dark (&:where(.dark, .dark *));
```

### Design Utilities

| Class | Description |
|--- |--- |
| `.text-gradient` | Green-to-indigo gradient text |
| `.text-gradient-light` | Green-only gradient text |
| `.glass-card` | Glassmorphism with backdrop blur (dark mode aware) |
| `.mesh-gradient` | Multi-radial gradient background (dark mode aware) |
| `.bento-card` | Hover lift + shadow transition for feature cards |
| `.plan-card` | Pricing card hover border + shadow + lift |
| `.plan-card-featured` | Highlighted pricing card with green border |
| `.badge-shine` | Animated highlight sweep (for "Best Value" badge) |
| `.section-wave` | Wave SVG divider pseudo-element |
| `.timeline-line` | Green gradient line for connectors |
| `.prose-custom` | Blog content typography |

### Animations

| Class / Keyframes | Duration | Description |
|--- |--- |--- |
| `.marquee-track` | 45s | Infinite horizontal scroll (RTL-aware) |
| `.ticker-track` | 30s | Faster horizontal scroll (RTL-aware) |
| `.animate-float` | 4s | Vertical float up/down |
| `.animate-float-slow` | 6s | Slower float with slight rotation |
| `.animate-glow` | 3s | Pulsing box-shadow glow |
| `.badge-shine` | 3s | Horizontal highlight sweep |

### Scroll Reveal

Elements with `data-reveal`, `data-reveal-left`, or `data-reveal-right` attributes start invisible and animate in when they enter the viewport (15% threshold). The IntersectionObserver adds a `data-visible` attribute which triggers CSS transitions.

```html
<!-- Fade up from below -->
<div data-reveal>...</div>

<!-- Slide in from left -->
<div data-reveal-left>...</div>

<!-- Slide in from right -->
<div data-reveal-right>...</div>

<!-- Staggered delay -->
<div data-reveal style="transition-delay: 200ms">...</div>
```

Respects `prefers-reduced-motion: reduce` by disabling all reveal animations.

---

## 11. Blog System

### Content Collection

Blog posts use Astro Content Collections with Zod schema validation.

**Schema (`src/content/config.ts`):**

```typescript
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    author: z.string().default('Admin'),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }).optional(),
    tags: z.array(z.string()).default([]),
    lang: z.enum(['en', 'fr', 'ar']),
    draft: z.boolean().default(false),
    canonicalSlug: z.string().optional(),   // For cross-language linking
  }),
});
```

### Adding a Blog Post

1. Create a Markdown file in `src/content/blog/{lang}/`:

```markdown
---
title: "Your Post Title"
description: "A brief description for SEO"
pubDate: 2024-01-15
author: "Author Name"
tags: ["iptv", "streaming"]
lang: "en"
canonicalSlug: "your-post-slug"
---

Your content here in Markdown...
```

2. For translations, create the same slug in other language folders and use the same `canonicalSlug` value.

### Blog Pages

- **Listing** (`/{lang}/blog`): Shows all posts filtered by language, sorted by date
- **Detail** (`/{lang}/blog/{slug}`): Full post with Article JSON-LD schema

---

## 12. SEO & Metadata

### Per-Page Meta Tags

`Base.astro` generates the following for every page:
- `<title>` with brand suffix (e.g. "Pricing - YourBrand")
- `<meta name="description">`
- `<link rel="canonical">` to the specific language URL
- `<meta name="robots">` (optional noindex)

### hreflang Tags

Every page includes alternate links for all 3 languages plus `x-default`:

```html
<link rel="alternate" hreflang="en" href="https://yourdomain.com/en/pricing" />
<link rel="alternate" hreflang="fr" href="https://yourdomain.com/fr/pricing" />
<link rel="alternate" hreflang="ar" href="https://yourdomain.com/ar/pricing" />
<link rel="alternate" hreflang="x-default" href="https://yourdomain.com/en/pricing" />
```

### Open Graph & Twitter Cards

Every page includes:
- `og:type`, `og:site_name`, `og:title`, `og:description`, `og:url`, `og:image`
- `twitter:card` (summary_large_image), `twitter:title`, `twitter:description`, `twitter:image`

### JSON-LD Structured Data

| Page | Schema Type | Content |
|--- |--- |--- |
| All pages | Organization | Brand name, URL, logo, contact point |
| Home | HowTo | 3-step setup process (from HowItWorks) |
| FAQ | FAQPage | All FAQ questions and answers |
| Pricing | OfferCatalog | All plans with EUR prices |
| Blog posts | Article | Title, author, dates, image |

### Sitemap

`@astrojs/sitemap` auto-generates `sitemap-index.xml` with all localized URLs and hreflang data. The sitemap URL is referenced in `robots.txt`.

### robots.txt

```
User-agent: *
Allow: /
Sitemap: https://yourdomain.com/sitemap-index.xml
```

---

## 13. Security

### HTTP Headers

Security headers are configured in two places for deployment flexibility:

**Cloudflare Pages (`public/_headers`)** and **Netlify (`netlify.toml`):**

| Header | Value |
|--- |--- |
| X-Frame-Options | SAMEORIGIN |
| X-Content-Type-Options | nosniff |
| Referrer-Policy | strict-origin-when-cross-origin |
| Permissions-Policy | camera=(), microphone=(), geolocation() |
| Strict-Transport-Security | max-age=63072000; includeSubDomains; preload |
| Content-Security-Policy | default-src 'self'; script-src 'self' 'unsafe-inline' googletagmanager.com; ... |

### CSP Details

The Content Security Policy allows:
- Scripts: self + inline (required for Astro) + Google Tag Manager
- Styles: self + inline + Google Fonts
- Fonts: self + Google Fonts (gstatic)
- Images: self + data URIs + HTTPS
- Connections: self + Google Analytics
- Frames: none (blocked)

### Cache Control

| Path | Policy |
|--- |--- |
| `/_astro/*` | `public, max-age=31536000, immutable` (1 year, hashed filenames) |
| `/assets/*` | `public, max-age=86400, stale-while-revalidate=604800` (1 day + 7 day stale) |

---

## 14. Performance Optimizations

### Zero JavaScript by Default

Astro's island architecture means components ship zero client-side JavaScript unless they use `client:*` directives. All sections are server-rendered HTML + CSS.

### Client-Side Scripts

The only JavaScript on the page:
1. **Dark mode init** (~150 bytes, inline in `<head>`) - prevents FOUC
2. **Scroll reveal observer** (~200 bytes, inline at end of `<body>`) - animates `[data-reveal]` elements
3. **Nav scroll handler** (~300 bytes, in `Nav.astro`) - glassmorphism header on scroll
4. **Tab switcher** (~400 bytes, in `PricingSection.astro`) - single/multi plan toggle

### Font Loading

Google Fonts (Inter + Noto Sans Arabic) are loaded non-render-blocking using the `media="print"` trick:

```html
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/..."
  media="print"
  onload="this.media='all'"
/>
```

A `<noscript>` fallback ensures fonts load even without JavaScript.

### Analytics

Google Analytics 4 is loaded via `@astrojs/partytown`, which offloads the script to a web worker. This means GA4 has zero impact on main-thread performance and Core Web Vitals.

### Image Optimization

The project uses Astro's built-in image service with Sharp for automatic WebP/AVIF conversion and responsive srcset generation. Use the `<Image>` component from `astro:assets` for optimized images:

```astro
---
import { Image } from 'astro:assets';
import myImage from '../assets/my-image.png';
---
<Image src={myImage} alt="Description" />
```

### Build Optimizations

- `build.inlineStylesheets: 'auto'` - Small CSS chunks are inlined, eliminating render-blocking CSS requests
- Static output - No server runtime, pages served directly from CDN
- Hashed asset filenames (`/_astro/`) - enables aggressive 1-year caching

---

## 15. Deployment

### Cloudflare Pages (Recommended)

1. Push to a Git repository (GitHub/GitLab)
2. Connect the repo to Cloudflare Pages
3. Set build command: `npm run build`
4. Set output directory: `dist`
5. Set Node.js version: 20
6. The `public/_headers` file will be automatically picked up

### Netlify

1. Push to a Git repository
2. Connect to Netlify
3. `netlify.toml` is already configured:
   - Build command: `npm run build`
   - Publish directory: `dist/`
   - Node version: 20
   - Security headers included in the config

### Vercel

1. Push to a Git repository
2. Connect to Vercel
3. Framework preset: Astro
4. Build command: `npm run build`
5. Output directory: `dist`
6. You'll need to add security headers via `vercel.json`

### Manual / Self-Hosted

```bash
npm run build
# Upload the contents of ./dist/ to your web server
# Ensure your web server is configured to serve index.html for directory requests
```

---

## 16. Customization Guide

### Changing Brand Colors

Edit the `@theme` block in `src/styles/global.css`:

```css
@theme {
  --color-planet: #YOUR_COLOR;
  --color-planet-2: #YOUR_LIGHTER_VARIANT;
  --color-planet-dark: #YOUR_DARKER_VARIANT;
}
```

Also update hardcoded hex values in components (search for `#00D084` and `#00e69b`).

### Adding a New Language

1. Add the locale code to `LOCALES` in `src/config/locales.ts`
2. Add metadata to `LOCALE_META` (flag, label, og:locale, hreflang)
3. If RTL, add to `RTL_LOCALES`
4. Create a new translation file `src/i18n/{code}.ts` (copy `en.ts` structure, translate values)
5. Import it in `src/i18n/index.ts` and add to the `translations` map
6. Add the locale to the `i18n.locales` array in `astro.config.mjs`
7. Add the sitemap locale mapping in `astro.config.mjs`
8. Add hreflang `<link>` in `Base.astro`

### Adding a New Page

1. Create `src/pages/[lang]/your-page.astro`:

```astro
---
import Page from '../../layouts/Page.astro';
import { LOCALES } from '../../config/locales';
import { useTranslations } from '../../i18n/index';
import type { Locale } from '../../config/locales';

export function getStaticPaths() {
  return LOCALES.map(lang => ({ params: { lang } }));
}

const { lang } = Astro.params as { lang: Locale };
const t = useTranslations(lang);
---

<Page
  lang={lang}
  title="Page Title"
  description="Page description for SEO"
  canonicalPath="/your-page"
  waMessageKey="default"
>
  <!-- Your content here -->
</Page>
```

2. Add the page to `NAV_LINKS` or `FOOTER_LINKS` in `src/config/navigation.ts`
3. Add translation keys for the page content in all language files

### Adding a New Section to the Home Page

1. Create a new component in `src/components/sections/YourSection.astro`
2. Import it in `src/pages/[lang]/index.astro`
3. Add it to the section order in the template

### Modifying Pricing Plans

Edit `src/config/plans.ts`:
- Change prices: update `priceEUR` and `originalPriceEUR`
- Add a plan: add a new entry to `SINGLE_PLANS` or `MULTI_PLANS`
- Change features: edit `PLAN_FEATURES_BASE` or `PLAN_FEATURES_EXTRA`
- Add feature text: add translation keys to the `plans.features` section in all language files

### Adding Payment Integration (Future)

The current architecture supports adding payment by:
1. Replacing WhatsApp CTA buttons in `PlanCard.astro` with payment links
2. Adding a checkout page at `src/pages/[lang]/checkout.astro`
3. Integrating with Stripe, PayPal, or any payment provider via API routes (requires switching Astro output to `'server'` or `'hybrid'`)

---

## 17. Troubleshooting

### Build Fails with TypeScript Errors

Run `npm run check` to see detailed error output. Common causes:
- Missing translation key in one language file (all languages must have identical structure)
- Import path typo in a component

### Fonts Not Loading

Check browser DevTools Network tab. The fonts use a non-render-blocking technique. If fonts fail to load:
1. Verify the Google Fonts URL in `Base.astro`
2. Check CSP headers allow `fonts.googleapis.com` and `fonts.gstatic.com`
3. Ensure the `onload` attribute is present on the `<link>` tag

### Dark Mode Flashes White

The inline dark mode script must execute before any CSS paints. If you see a flash:
1. Verify the dark mode `<script is:inline>` is in the `<head>`, not the `<body>`
2. Ensure it runs synchronously (not deferred)
3. Check `localStorage` key is `iptv_theme`

### Scroll Animations Not Working

1. Verify `Base.astro` includes the IntersectionObserver script
2. Check that elements have `data-reveal`, `data-reveal-left`, or `data-reveal-right` attributes
3. Check `prefers-reduced-motion` isn't set in your OS accessibility settings

### WhatsApp Button Not Working

1. Check `WHATSAPP_CONFIG.number` in `src/config/whatsapp.ts` is set (not `'PLACEHOLDER'`)
2. The number must be in international format without `+` or spaces (e.g. `212600000000`)
3. Verify the generated URL format: `https://wa.me/NUMBER?text=...`

### Sitemap Not Generated

1. Verify `@astrojs/sitemap` is in the `integrations` array in `astro.config.mjs`
2. Check `site` is set to your actual domain URL
3. Run `npm run build` and check for `dist/sitemap-index.xml`

### RTL Layout Issues

1. Verify Arabic pages have `dir="rtl"` on `<html>` (inspect in DevTools)
2. Use Tailwind logical properties (`ms-*`, `me-*`, `ps-*`, `pe-*`, `start-*`, `end-*`) instead of `ml-*`, `mr-*`, `pl-*`, `pr-*`, `left-*`, `right-*`
3. Test marquee/ticker animations - they should reverse in RTL

---

## Quick Reference

### NPM Scripts

```bash
npm run dev       # Development server (localhost:4321)
npm run build     # Production build to ./dist/
npm run preview   # Preview production build
npm run check     # TypeScript + Astro type checking
```

### Key Files to Edit

| What to Change | File |
|--- |--- |
| Brand name, domain, email | `src/config/site.ts` |
| WhatsApp number | `src/config/whatsapp.ts` |
| Pricing plans | `src/config/plans.ts` |
| Navigation links | `src/config/navigation.ts` |
| Languages | `src/config/locales.ts` |
| English text | `src/i18n/en.ts` |
| French text | `src/i18n/fr.ts` |
| Arabic text | `src/i18n/ar.ts` |
| Colors & animations | `src/styles/global.css` |
| SEO meta tags | `src/layouts/Base.astro` |
| Security headers | `public/_headers` or `netlify.toml` |
| Google Analytics ID | `src/config/site.ts` (`ga4Id`) |
