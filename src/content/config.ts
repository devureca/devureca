import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.string(),
        description: z.string().optional(),
    }),
});

const proyectos = defineCollection({
    type: 'content',
    schema: z.object({
        name: z.string(),
        year: z.string(),
        tags: z.array(z.string()),
        desc: z.string(),
    }),
});

export const collections = { blog, proyectos };