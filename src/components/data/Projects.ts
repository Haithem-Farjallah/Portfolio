interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  link?: string;
  github: string;
  image?: string;
}
import demo from "../../assets/demo.png";
export const projects: Project[] = [
  {
    id: "1",
    name: "Project 1",
    description: "This is a project description",
    technologies: ["React", "TypeScript"],
    link: "https://example.com",
    github: "",
    image: demo,
  },
  {
    id: "2",
    name: "Project 1",
    description: "This is a project description",
    technologies: ["React", "TypeScript"],
    link: "https://example.com",
    github: "",
    image: demo,
  },
  {
    id: "3",
    name: "Project 1",
    description: "This is a project description",
    technologies: ["React", "TypeScript"],
    link: "https://example.com",
    github: "",
    image: demo,
  },
  {
    id: "4",
    name: "Project 1",
    description: "This is a project description",
    technologies: ["React", "TypeScript"],
    link: "https://example.com",
    github: "",
    image: demo,
  },
];
