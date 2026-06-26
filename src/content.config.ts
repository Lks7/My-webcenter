import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import z from "astro/zod";

const blogsCollection = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blogs" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        author: z.string().optional(),
        tags: z.array(z.string()).optional(),
        draft: z.boolean().optional(),
        image: z.object({
            url: image(),
            alt: z.string().optional()
        })
            .optional(),
    }),
});

const servicesCollection = defineCollection({
    loader: glob({ pattern: "**/!(README).{md,mdx}", base: "./src/content/services" }),
    schema: z.object({
        name: z.string(),
        description: z.string(),
        url: z.string().url(),
        icon: z.string().default("globe"),
        category: z.enum(["productivity", "tools", "social", "dev", "media", "other"]).default("other"),
        status: z.enum(["active", "maintenance", "offline"]).default("active"),
        featured: z.boolean().default(false),
        tags: z.array(z.string()).optional(),
        order: z.number().default(99),
    }),
});

export const collections = {
    blogs: blogsCollection,
    services: servicesCollection,
};
