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
  description: string;
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    image: xsustain,
    title: "Frontend Engineer (Remote)",
    company: "TechWave Solutions",
    location: "New York, USA",
    type: "Full-time",
    date: "Jul 2021 - Present",
    duration: "1 year",
    summary:
      "Developing and maintaining responsive user interfaces using React and Tailwind CSS.",
    description:
      "Implementing complex UI interactions and ensuring cross-browser compatibility.",
    technologies: ["React", "TailwindCSS", "MongoDB"],
  },
  {
    image: xsustain,
    title: "Software Developer",
    company: "Wevoz Innovations",
    location: "Milan, Italy",
    type: "Full-time",
    date: "Jun 2020 - Jun 2021",
    duration: "1 year",
    summary:
      "Built and optimized mobile and web applications using React and React Native.",
    description:
      "Developed automation scripts for data scraping using Python and Selenium.",
    technologies: ["React", "Python", "Selenium"],
  },
  {
    image: etnafes,
    title: "Frontend Engineer (Contractor)",
    company: "FreeBeings",
    location: "Remote",
    type: "Contract",

    date: "Mar 2019 - Aug 2020",
    duration: "1 year",
    summary:
      "Worked on multiple client projects to deliver responsive and modern web applications.",
    description:
      "Occasionally led frontend teams and mentored junior developers on best practices.",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
  },
];
