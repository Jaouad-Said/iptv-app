import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_Cfiqkp3b.mjs';
import { manifest } from './manifest_C8gyE5_y.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/admin.astro.mjs');
const _page3 = () => import('./pages/api/save-config.astro.mjs');
const _page4 = () => import('./pages/api/upload.astro.mjs');
const _page5 = () => import('./pages/_lang_/affiliate.astro.mjs');
const _page6 = () => import('./pages/_lang_/blog/_slug_.astro.mjs');
const _page7 = () => import('./pages/_lang_/blog.astro.mjs');
const _page8 = () => import('./pages/_lang_/faq.astro.mjs');
const _page9 = () => import('./pages/_lang_/pricing.astro.mjs');
const _page10 = () => import('./pages/_lang_/privacy.astro.mjs');
const _page11 = () => import('./pages/_lang_/refund.astro.mjs');
const _page12 = () => import('./pages/_lang_/reseller.astro.mjs');
const _page13 = () => import('./pages/_lang_/terms.astro.mjs');
const _page14 = () => import('./pages/_lang_.astro.mjs');
const _page15 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/admin/index.astro", _page2],
    ["src/pages/api/save-config.ts", _page3],
    ["src/pages/api/upload.ts", _page4],
    ["src/pages/[lang]/affiliate.astro", _page5],
    ["src/pages/[lang]/blog/[slug].astro", _page6],
    ["src/pages/[lang]/blog/index.astro", _page7],
    ["src/pages/[lang]/faq.astro", _page8],
    ["src/pages/[lang]/pricing.astro", _page9],
    ["src/pages/[lang]/privacy.astro", _page10],
    ["src/pages/[lang]/refund.astro", _page11],
    ["src/pages/[lang]/reseller.astro", _page12],
    ["src/pages/[lang]/terms.astro", _page13],
    ["src/pages/[lang]/index.astro", _page14],
    ["src/pages/index.astro", _page15]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "5c6ecd11-2043-4f29-88f3-a6b23875d3ed",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
