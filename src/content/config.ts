import { defineCollection, z } from 'astro:content';

const workCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    websiteUrl: z.string().url(),
    summary: z.string(),
    tags: z.array(z.string()),
    date: z.string().optional(),
    nextSteps: z.array(z.string()).optional()
  })
});

const resourcesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
    hero: z
      .object({
        eyebrow: z.string().optional()
      })
      .optional()
  })
});

export const collections = {
  work: workCollection,
  resources: resourcesCollection
};
