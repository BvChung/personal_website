export type Project = {
	title: string;
	tech: string[];
	link: string;
	description?: string;
};

export const projects: Project[] = [
	{
		title: "EchoAI",
		tech: [
			"NextJS",
			"TypeScript",
			"Firebase",
			"Google Gemini",
			"AssemblyAI",
			"Google Cloud Storage",
		],
		link: "https://devpost.com/software/echoai?ref_content=user-portfolio&ref_feature=in_progress",
		description:
			"CodeRED Genesis Hackathon 2nd Place Winner General Track. AI powered public speaking prep platform.",
	},
	{
		title: "Public Health Machine Learning Models",
		tech: ["Python", "SciKit-Learn", "Pandas", "NumPy"],
		link: "https://github.com/BvChung/public-health-machine-learning-analysis",
		description:
			"Data preprocessing and analysis using machine learning models.",
	},
	{
		title: "CougarCS Admin Portal",
		tech: ["NextJS", "TypeScript", "Tailwind CSS", "PostgreSQL"],
		link: "https://github.com/CougarCS/CougarCS-AdminPortal",
		description:
			"An administrative dashboard designed for club officers, streamlining member and event management.",
	},
	{
		title: "Personal Website",
		tech: ["Astro", "TypeScript", "Tailwind CSS"],
		link: "https://github.com/BvChung/personal_website",
		description:
			"This website! Posts are written in Markdown styled with CSS and integrated through Astro.",
	},
	{
		title: "Google Sheets Event Bot",
		tech: ["Python", "Discord.py"],
		link: "https://github.com/BvChung/g-sheet-bot",
		description:
			"A Discord bot integrated with Google Sheets API to upload and query spreadsheet data.",
	},
];
