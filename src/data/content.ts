type Social = {
  label: string;
  link: string;
};

type UserInformation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

export const content: UserInformation = {
  mail: "chung.brandon123@gmail.com",
  title: "Hello there, I’m Brandon 👋",
  description:
    "I am Computer Science student studying at the University of Houston. Delving into the diverse applications of *Full-Stack Development, Software Design, and Data Science*.",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/itsstormzz_",
    },
    {
      label: "Bento",
      link: "https://bento.me/m-wolff",
    },
    {
      label: "Github",
      link: "https://github.com/MaeWolff",
    },
  ],
};
