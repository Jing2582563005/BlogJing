import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    section: z.enum(['art', 'life', 'research', 'code']),
    date: z.coerce.date(),
    text: z.string(),
    images: z.array(z.string()).optional().default([]),
    tags: z.array(z.string()).optional().default([]),
  }),
});

export const collections = { posts };
