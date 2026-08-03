import xsustain from "../../assets/experience/xsustain.jpg";
import etnafes from "../../assets/experience/etnafes.jpg";
import medianet from "../../assets/experience/medianet.png";
import dipawer from "../../assets/experience/dipawer.jpeg";
import AltaViaApplication from "../../assets/experience/alta-via-logo.png";

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

const calculateDuration = (startDate: string): number => {
  const start = new Date(startDate);
  const now = new Date();
  const months =
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth()) +
    1;
  return months <= 0 ? 1 : months;
};

export const experiences: Experience[] = [
  {
    image: AltaViaApplication,
    title: "Software Engineer Intern",
    company: "Alta Via Applications",
    location: "Berlin , Germany",
    type: "Full-time",
    date: "Apr 2026 - Present",
    duration: `${calculateDuration("2026-04-01")} months`,
    summary:
      "Working on data synchronisation between NetSuite and DATEV, the German accounting and tax platform",
    technologies: ["JavaScript", "React", "Git", "AWS" ],
  },
  {
    image: dipawer,
    title: "Full Stack Developer <br/> (Part-time)",
    company: "Dipawer",
    location: "Tunis , Tunisia",
    type: "Full-time",
    date: "Aug 2025-Mar 2026",
    duration: "8 months",
    summary:
      "Worked on Velp, a digital platform for the pet industry that serves both pet owners and professionals",
    technologies: ["Angular", "TailwindCSS", "Spring Boot", "MongoDB"],
  },
  {
    image: medianet,
    title: "Software Engineer Intern",
    company: "Medianet",
    location: "Tunis , Tunisia",
    type: "Full-time",
    date: "Jun 2025 - Aug 2025",
    duration: "3 months",
    summary:
      "Developed a machine learning model to detect spam emails and generate daily report ",
    technologies: ["Spring Boot", "PostgreSQL", "Python"],
  },
  {
    image: xsustain,
    title: "Software Engineer Intern",
    company: "Xsustain",
    location: "Tunis , Tunisia",
    type: "Full-time",
    date: "Jun 2024 - Aug 2024",
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
    title: "Software Engineer Intern",
    company: "Etnafes",
    location: "Kairouan , Tunisia",
    type: "Full-time",
    date: "Jun 2023 - Aug 2023",
    duration: "3 months",
    summary:
      "Contributed to scaling the company's official website and enhancing its features",

    technologies: ["VueJS", "Bootstrap", "Laravel", "MySQL"],
  },
];
