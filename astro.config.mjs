import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// https://astro.build/config
export default defineConfig({
	integrations: [mdx(), tailwind(), sitemap()],
	site: "https://demo.maxencewolff.com/",
	markdown: {
		syntaxHighlight: "shiki",
		shikiConfig: {
			theme: "dracula-soft",
			wrap: true,
		},
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex],
	},
});
