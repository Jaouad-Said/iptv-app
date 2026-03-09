import { c as createComponent, r as renderComponent, a as renderTemplate, b as renderScript, u as unescapeHTML, m as maybeRenderHead } from '../chunks/astro/server_CZEfcTG3.mjs';
import 'piccolore';
import { $ as $$Base, S as SITE } from '../chunks/Base_CqGLP5nb.mjs';
import { P as PLAN_FEATURES_EXTRA, a as PLAN_FEATURES_BASE, M as MULTI_PLANS, S as SINGLE_PLANS } from '../chunks/plans_hev7Aa7M.mjs';
import { a as ar, f as fr, e as en, W as WHATSAPP_CONFIG } from '../chunks/ar_CuGwO3Jc.mjs';
import { W as WHY_RESELL_FEATURES, R as RESELLER_TIERS } from '../chunks/reseller_BaoTL-ww.mjs';
import { C as CAROUSEL_ITEMS } from '../chunks/carousel_CVDjIjz6.mjs';
import { g as getCollection } from '../chunks/_astro_content_B65WlXDc.mjs';
import { createHash } from 'node:crypto';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const blogPosts = await getCollection("blog");
  const serializedPosts = blogPosts.map((p) => ({
    slug: p.slug,
    body: p.body,
    ...p.data,
    pubDate: p.data.pubDate?.toISOString?.() ?? p.data.pubDate,
    updatedDate: p.data.updatedDate?.toISOString?.() ?? p.data.updatedDate ?? null
  }));
  const adminData = {
    site: SITE,
    singlePlans: SINGLE_PLANS,
    multiPlans: MULTI_PLANS,
    planFeaturesBase: PLAN_FEATURES_BASE,
    planFeaturesExtra: PLAN_FEATURES_EXTRA,
    whatsapp: WHATSAPP_CONFIG,
    resellerTiers: RESELLER_TIERS,
    whyResellFeatures: WHY_RESELL_FEATURES,
    translations: { en, fr, ar },
    blogPosts: serializedPosts,
    carouselItems: CAROUSEL_ITEMS
  };
  const passwordHash = createHash("sha256").update("limitless2024").digest("hex");
  const isProduction = !!process.env.VERCEL;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "lang": "en", "title": "Admin Panel", "description": "Site administration panel", "noIndex": true }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div id="admin-root"></div> <script id="admin-data" type="application/json">', '<\/script> <script id="admin-password-hash" type="application/json">', '<\/script> <script id="admin-env" type="application/json">', "<\/script> ", " "])), maybeRenderHead(), unescapeHTML(JSON.stringify(adminData)), unescapeHTML(JSON.stringify(passwordHash)), unescapeHTML(JSON.stringify({ isProduction })), renderScript($$result2, "/home/said-j/Desktop/Projetcs/DEV PROJECTS/iptv/site/src/pages/admin/index.astro?astro&type=script&index=0&lang.ts")) })}`;
}, "/home/said-j/Desktop/Projetcs/DEV PROJECTS/iptv/site/src/pages/admin/index.astro", void 0);

const $$file = "/home/said-j/Desktop/Projetcs/DEV PROJECTS/iptv/site/src/pages/admin/index.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
