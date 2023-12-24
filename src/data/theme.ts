import type { TailwindColor } from "../types/tailwind";

type Theme = {
	colors: {
		primary: TailwindColor;
		blur: {
			top: TailwindColor;
			bottom: TailwindColor;
		};
	};
};

const theme: Theme = {
	colors: {
		primary: "cyan",
		blur: {
			top: "orange",
			bottom: "violet",
		},
	},
};

export default theme;
