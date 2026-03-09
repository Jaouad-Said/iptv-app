import { d as defineMiddleware, s as sequence } from './chunks/index_jpKfWmno.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_IJk5Xari.mjs';
import 'piccolore';
import './chunks/astro/server_CZEfcTG3.mjs';
import 'clsx';

const onRequest$1 = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);
  const response = await next();
  if (url.pathname.startsWith("/admin") || url.pathname.startsWith("/api")) {
    const headers = new Headers(response.headers);
    headers.set("X-Astro-Reroute", "no");
    return new Response(response.body, {
      status: response.status,
      headers
    });
  }
  return response;
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
