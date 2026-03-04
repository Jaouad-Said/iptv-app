import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Admin'),
    image: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
    tags: z.array(z.string()).default([]),
    lang: z.enum(['en', 'fr', 'ar']),
    draft: z.boolean().default(false),
    /** Shared slug across all language versions for hreflang linking */
    canonicalSlug: z.string(),
  }),
});

export const collections = { blog };
