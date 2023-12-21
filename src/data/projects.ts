export type Project = {
	title: string;
	tech: string[];
	link: string;
	isComingSoon?: boolean;
};

const projects: Project[] = [
	{
		title: "CougarCS Admin Portal",
		tech: ["NextJS", "Tailwind CSS, PostgreSQL"],
		link: "https://github.com/BvChung/CougarCS-AdminPortal",
	},
	{
		title: "Portfolio / Lina BLIDI",
		tech: ["ReactJS (NextJS)", "TypeScript"],
		link: "https://www.linablidi.fr/",
	},
	{
		title: "Personal Website",
		tech: ["Astro"],
		link: "/",
		isComingSoon: true,
	},
];

export default projects;
