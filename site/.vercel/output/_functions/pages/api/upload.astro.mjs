import { mkdir, writeFile } from 'node:fs/promises';
import { extname, join } from 'node:path';
import { randomUUID } from 'node:crypto';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/avif", "image/gif"];
const MAX_SIZE = 5 * 1024 * 1024;
const POST = async ({ request }) => {
  if (process.env.VERCEL) {
    return new Response(
      JSON.stringify({ error: "Upload is not available in production. Run the site locally to upload images." }),
      { status: 503, headers: { "Content-Type": "application/json" } }
    );
  }
  try {
    const formData = await request.formData();
    const file = formData.get("file");
    if (!file) {
      return new Response(JSON.stringify({ error: "No file uploaded" }), { status: 400 });
    }
    if (!ALLOWED_TYPES.includes(file.type)) {
      return new Response(JSON.stringify({ error: `Invalid file type: ${file.type}` }), { status: 400 });
    }
    if (file.size > MAX_SIZE) {
      return new Response(JSON.stringify({ error: "File too large (max 5 MB)" }), { status: 400 });
    }
    const ext = extname(file.name) || ".jpg";
    const filename = `${randomUUID()}${ext}`;
    const UPLOAD_DIR = join(process.cwd(), "public", "uploads", "carousel");
    await mkdir(UPLOAD_DIR, { recursive: true });
    const buffer = Buffer.from(await file.arrayBuffer());
    await writeFile(join(UPLOAD_DIR, filename), buffer);
    const publicPath = `/uploads/carousel/${filename}`;
    return new Response(JSON.stringify({ ok: true, path: publicPath }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
