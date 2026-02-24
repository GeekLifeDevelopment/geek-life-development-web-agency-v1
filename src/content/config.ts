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

export const collections = {
  work: workCollection
};
