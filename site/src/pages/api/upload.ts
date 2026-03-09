import type { APIRoute } from 'astro';
import { writeFile, mkdir } from 'node:fs/promises';
import { join, extname } from 'node:path';
import { randomUUID } from 'node:crypto';

export const prerender = false;

const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/avif', 'image/gif'];
const MAX_SIZE = 5 * 1024 * 1024; // 5 MB

export const POST: APIRoute = async ({ request }) => {
  // Vercel serverless functions have a read-only filesystem
  if (process.env.VERCEL) {
    return new Response(
      JSON.stringify({ error: 'Upload is not available in production. Run the site locally to upload images.' }),
      { status: 503, headers: { 'Content-Type': 'application/json' } }
    );
  }

  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return new Response(JSON.stringify({ error: 'No file uploaded' }), { status: 400 });
    }

    if (!ALLOWED_TYPES.includes(file.type)) {
      return new Response(JSON.stringify({ error: `Invalid file type: ${file.type}` }), { status: 400 });
    }

    if (file.size > MAX_SIZE) {
      return new Response(JSON.stringify({ error: 'File too large (max 5 MB)' }), { status: 400 });
    }

    // Generate unique filename
    const ext = extname(file.name) || '.jpg';
    const filename = `${randomUUID()}${ext}`;

    const UPLOAD_DIR = join(process.cwd(), 'public', 'uploads', 'carousel');
    await mkdir(UPLOAD_DIR, { recursive: true });
    const buffer = Buffer.from(await file.arrayBuffer());
    await writeFile(join(UPLOAD_DIR, filename), buffer);

    const publicPath = `/uploads/carousel/${filename}`;

    return new Response(JSON.stringify({ ok: true, path: publicPath }), { status: 200 });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
};
