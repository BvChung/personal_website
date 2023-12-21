import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				mainText: "#e3ad39",
				mainBG: "#222234",
				hoverBG: "#2B2836",
				hoverBG2: "#494556",
				blockBG: "#282A36",
				blockSide: "#655E7F",
				secondary: "#B6B4CA",
				secondary2: "#CBC8D6",
				secondary3: "#8B869E",
			},
		},
	},
	plugins: [],
};

export default config;
