import xsustain from "../../assets/experience/xsustain.jpg";
import etnafes from "../../assets/experience/etnafes.jpg";
import medianet from "../../assets/experience/medianet.png";
import dipawer from "../../assets/experience/dipawer.jpeg";
import AltaViaApplication from "../../assets/experience/alta-via-logo.jpeg";

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

// const calculateDuration = (startDate: string): number => {
//   const start = new Date(startDate);
//   const now = new Date();
//   const months =
//     (now.getFullYear() - start.getFullYear()) * 12 +
//     (now.getMonth() - start.getMonth()) +
//     1;
//   return months <= 0 ? 1 : months;
// };

export const experiences: Experience[] = [
  {
    image: AltaViaApplication,
title: "Software Engineer Intern (Graduation Internship)",
    company: "Alta Via Consulting",
    location: "Berlin , Germany",
    type: "Full-time",
    date: "April 2026 - September 2026",
    // duration: `${calculateDuration("2026-04-01")} months`,
    duration:"6 months",
    summary:
      "Created data synchronisation solution between NetSuite and DATEV German accounting software",
    technologies: ["NodeJS", "React", "Docker", "AWS" ],
  },
  {
    image: dipawer,
    title: "Full Stack Developer",
    company: "Dipawer",
    location: "Tunis , Tunisia",
    type: "Full-time",
    date: "August 2025- March 2026",
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
    date: "May 2025 - July 2025",
    duration: "3 months",
    summary:
      "Set up the deployment pipeline and cloud infrastructure for a client management application",
    technologies: ["Python", "kubernetes","Docker", "AWS", "Terraform", ],
  },
  {
    image: xsustain,
    title: "Software Engineer Intern",
    company: "Xsustain",
    location: "Tunis , Tunisia",
    type: "Full-time",
    date: "June 2024 - August 2024",
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
    date: "June 2023 - August 2023",
    duration: "3 months",
    summary:
      "Contributed to scaling the company's official website and enhancing its features",

    technologies: ["VueJS", "Bootstrap", "Laravel", "MySQL"],
  },
];
