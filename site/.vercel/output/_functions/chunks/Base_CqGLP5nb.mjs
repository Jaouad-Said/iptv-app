import { d as createAstro, c as createComponent, a as renderTemplate, i as renderSlot, j as renderHead, u as unescapeHTML, m as maybeRenderHead, e as addAttribute } from './astro/server_CZEfcTG3.mjs';
import 'piccolore';
import 'clsx';
/* empty css                             */

const name = "Limitless";
const tagline = "Premium IPTV Service";
const domain = "yourdomain.com";
const url = "https://yourdomain.com";
const email = "contact@yourdomain.com";
const foundedYear = 2024;
const supportHours = {"open":9,"close":24};
const socialLinks = {"telegram":"https://t.me/yourbotname"};
const currency = "EUR";
const currencySymbol = "€";
const ga4Id = "";
const siteData = {
  name,
  tagline,
  domain,
  url,
  email,
  foundedYear,
  supportHours,
  socialLinks,
  currency,
  currencySymbol,
  ga4Id,
};

const SITE = siteData;

const LOCALES = ["en", "fr", "ar"];
const RTL_LOCALES = /* @__PURE__ */ new Set(["ar"]);
const LOCALE_META = {
  en: { label: "EN", flag: "🇬🇧", ogLocale: "en_US", hreflangCode: "en", nativeName: "English" },
  fr: { label: "FR", flag: "🇫🇷", ogLocale: "fr_FR", hreflangCode: "fr", nativeName: "Français" },
  ar: { label: "AR", flag: "🇸🇦", ogLocale: "ar_SA", hreflangCode: "ar", nativeName: "العربية" }
};
function isRTL(locale) {
  return RTL_LOCALES.has(locale);
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://yourdomain.com");
const $$Base = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Base;
  const {
    lang,
    title,
    description,
    canonicalPath = "/",
    ogImage,
    noIndex = false
  } = Astro2.props;
  const dir = isRTL(lang) ? "rtl" : "ltr";
  const canonicalUrl = `${SITE.url}/${lang}${canonicalPath === "/" ? "" : canonicalPath}`;
  const ogImageUrl = ogImage ?? `${SITE.url}/og-default.jpg`;
  const fullTitle = title === SITE.name ? title : `${title} \u2014 ${SITE.name}`;
  return renderTemplate(_a || (_a = __template(["<html", "", ' class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="theme-color" content="#0F172A"><!-- Title & Description --><title>', '</title><meta name="description"', ">", '<!-- Canonical --><link rel="canonical"', '><!-- hreflang --><link rel="alternate" hreflang="en"', '><link rel="alternate" hreflang="fr"', '><link rel="alternate" hreflang="ar"', '><link rel="alternate" hreflang="x-default"', '><!-- Open Graph --><meta property="og:type" content="website"><meta property="og:site_name"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:url"', '><meta property="og:image"', '><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><!-- Twitter Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', `><!-- Favicons --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" type="image/x-icon" href="/favicon.ico"><link rel="manifest" href="/manifest.json"><!-- Fonts (non-render-blocking) --><link rel="preconnect" href="https://fonts.googleapis.com" crossorigin><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Noto+Sans+Arabic:wght@400;600;700;800;900&display=swap" media="print" onload="this.media='all'">`, '<noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Noto+Sans+Arabic:wght@400;600;700;800;900&display=swap"></noscript><!-- Organization JSON-LD --><script type="application/ld+json">', "<\/script><!-- Extra head slots from child layouts -->", "<!-- Dark mode init \u2014 MUST be inline before any CSS to prevent FOUC --><script>\n      (() => {\n        let theme = null;\n        try { theme = localStorage.getItem('iptv_theme'); } catch {}\n        const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;\n        const useDark = theme === 'dark' || (!theme && prefersDark);\n        document.documentElement.classList.toggle('dark', useDark);\n      })();\n    <\/script>", '</head> <body class="bg-white text-slate-800 dark:bg-slate-950 dark:text-slate-100 antialiased"> ', " <!-- Scroll-reveal IntersectionObserver (tiny, ~200 bytes) --> <script>\n      (() => {\n        const selectors = '[data-reveal],[data-reveal-left],[data-reveal-right]';\n        function initReveal() {\n          const els = document.querySelectorAll(selectors);\n          if (!els.length) return;\n          const io = new IntersectionObserver((entries) => {\n            entries.forEach((e) => {\n              if (e.isIntersecting) {\n                e.target.setAttribute('data-visible', '');\n                io.unobserve(e.target);\n              }\n            });\n          }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });\n          els.forEach((el) => io.observe(el));\n        }\n        if (document.readyState === 'loading') {\n          document.addEventListener('DOMContentLoaded', initReveal);\n        } else {\n          initReveal();\n        }\n        document.addEventListener('astro:after-swap', initReveal);\n      })();\n    <\/script> </body> </html>"])), addAttribute(lang, "lang"), addAttribute(dir, "dir"), fullTitle, addAttribute(description, "content"), noIndex && renderTemplate`<meta name="robots" content="noindex, nofollow">`, addAttribute(canonicalUrl, "href"), addAttribute(`${SITE.url}/en${canonicalPath === "/" ? "" : canonicalPath}`, "href"), addAttribute(`${SITE.url}/fr${canonicalPath === "/" ? "" : canonicalPath}`, "href"), addAttribute(`${SITE.url}/ar${canonicalPath === "/" ? "" : canonicalPath}`, "href"), addAttribute(`${SITE.url}/en${canonicalPath === "/" ? "" : canonicalPath}`, "href"), addAttribute(SITE.name, "content"), addAttribute(fullTitle, "content"), addAttribute(description, "content"), addAttribute(canonicalUrl, "content"), addAttribute(ogImageUrl, "content"), addAttribute(fullTitle, "content"), addAttribute(description, "content"), addAttribute(ogImageUrl, "content"), maybeRenderHead(), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": SITE.name,
    "url": SITE.url,
    "logo": `${SITE.url}/assets/logo/logo.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "availableLanguage": ["English", "French", "Arabic"]
    }
  })), renderSlot($$result, $$slots["head"]), renderHead(), renderSlot($$result, $$slots["default"]));
}, "/home/said-j/Desktop/Projetcs/DEV PROJECTS/iptv/site/src/layouts/Base.astro", void 0);

export { $$Base as $, LOCALES as L, SITE as S, LOCALE_META as a };
