interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  link?: string;
  github: string;
  image?: string;
  video?: string; // Added video field
}

import demo from "../../assets/demo.png";
import test from "../../assets/test.mp4";

export const projects: Project[] = [
  {
    id: "1",
    name: "Portfolio Website",
    description:
      "A responsive portfolio website built with React and TypeScript.A responsive portfolio website built with React and TypeScriptA responsive portfolio website built with React and TypeScript",
    technologies: ["React", "TypeScript", "CSS"],
    link: "https://example.com",
    github: "https://github.com/username/portfolio-website",
    image: demo,
    video: test,
  },
  {
    id: "2",
    name: "Portfolio Website",
    description:
      "A responsive portfolio website built with React and TypeScript.A responsive portfolio website built with React and TypeScriptA responsive portfolio website built with React and TypeScript",
    technologies: ["React", "TypeScript", "CSS"],
    link: "https://example.com",
    github: "https://github.com/username/portfolio-website",
    image: demo,
    video: test,
  },
  {
    id: "3",
    name: "Portfolio Website",
    description:
      "A responsive portfolio website built with React and TypeScript.A responsive portfolio website built with React and TypeScriptA responsive portfolio website built with React and TypeScript",
    technologies: ["React", "TypeScript", "CSS"],
    link: "https://example.com",
    github: "https://github.com/username/portfolio-website",
    image: demo,
    video: test,
  },
];
