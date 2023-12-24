import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		publishedDate: z.date(),
		publishedTime: z.string(),
		description: z.string(),
	}),
});

export const collections = { posts: postsCollection };
