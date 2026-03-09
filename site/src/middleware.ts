import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);
  const response = await next();

  // Astro i18n with prefixDefaultLocale returns 404 for non-locale-prefixed routes.
  // Set X-Astro-Reroute header so the i18n middleware skips the 404 override
  // for our admin panel and API endpoints.
  if (url.pathname.startsWith('/admin') || url.pathname.startsWith('/api')) {
    const headers = new Headers(response.headers);
    headers.set('X-Astro-Reroute', 'no');
    return new Response(response.body, {
      status: response.status,
      headers,
    });
  }

  return response;
});
