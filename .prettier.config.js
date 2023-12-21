// prettier.config.js

export default {
	plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
	tailwindConfig: "./tailwind.config.ts",
	tailwindAttributes: ["myClassList"],
	tailwindFunctions: ["clsx", "tw"],
};
