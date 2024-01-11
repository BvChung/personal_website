export type Project = {
	title: string;
	tech: string[];
	link: string;
	description?: string;
};

export const projects: Project[] = [
	{
		title: "Covid-19 Machine Learning Model",
		tech: ["Python", "SciKit-Learn", "Pandas", "NumPy"],
		link: "https://github.com/BvChung/covid-machine-learning-analysis",
		description:
			"Machine learning regression models to predict the number of ICU admissions with US COVID-19 dataset.",
	},
	{
		title: "CougarCS Admin Portal",
		tech: ["NextJS", "TypeScript", "Tailwind CSS, PostgreSQL"],
		link: "https://github.com/CougarCS/CougarCS-AdminPortal",
		description:
			"An administrative dashboard designed for club officers, streamlining the management of members and events.",
	},
	{
		title: "Personal Website",
		tech: ["Astro", "TypeScript", "Tailwind CSS"],
		link: "https://github.com/BvChung/personal_website",
		description:
			"This website! Posts are written in Markdown styled with CSS and integrated through Astro.",
	},
	{
		title: "Google Sheets Autobot",
		tech: ["Python", "Discord.py"],
		link: "https://github.com/BvChung/google-sheets-autobot",
		description:
			"A Discord bot integrated with Google Sheets API to upload and query spreadsheet data.",
	},
];
