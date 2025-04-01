import xsustain from "../../assets/experience/xsustain.jpg";
import etnafes from "../../assets/experience/etnafes.jpg";

export interface Experience {
  image: string;
  title: string;
  company: string;
  location: string;
  type: string;
  date: string;
  duration: string;
  summary: string;
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    image: xsustain,
    title: "Full Stack Developer",
    company: "Xsustain",
    location: "Tunis , Tunisia",
    type: "Full-time",
    date: "Jun 2024-Aug 2024",
    duration: "3 months",
    summary: "Developed a restaurant management application",
    technologies: [
      "React",
      "TailwindCSS",
      "MongoDB",
      "NodeJS",
      "ExpressJS",
      "Redux",
    ],
  },
  {
    image: etnafes,
    title: "Full Stack Developer",
    company: "Etnafes",
    location: "Kairouan , Tunisia",
    type: "Full-time",
    date: "Jun 2023-Aug 2023",
    duration: "1 year",
    summary:
      "Contributed to scaling the company's official website and enhancing its features",

    technologies: ["VueJS", "Bootstrap", "Laravel", "MySQL"],
  },
];
