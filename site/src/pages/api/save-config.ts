import type { APIRoute } from 'astro';
import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';

export const prerender = false;

const ALLOWED_FILES = ['site.json', 'plans.json', 'whatsapp.json', 'carousel.json', 'reseller.json'];

export const POST: APIRoute = async ({ request }) => {
  // Vercel serverless functions have a read-only filesystem
  if (process.env.VERCEL) {
    return new Response(
      JSON.stringify({ error: 'Save is not available in production. Run the site locally to edit configurations.' }),
      { status: 503, headers: { 'Content-Type': 'application/json' } }
    );
  }

  try {
    const body = await request.json();
    const { file, data } = body;

    if (!file || !data) {
      return new Response(JSON.stringify({ error: 'Missing file or data' }), { status: 400 });
    }

    if (!ALLOWED_FILES.includes(file)) {
      return new Response(JSON.stringify({ error: `File not allowed: ${file}` }), { status: 403 });
    }

    const DATA_DIR = join(process.cwd(), 'src', 'data');
    const filePath = join(DATA_DIR, file);
    await writeFile(filePath, JSON.stringify(data, null, 2) + '\n', 'utf-8');

    return new Response(JSON.stringify({ ok: true, file }), { status: 200 });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
};
