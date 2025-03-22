export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  releaseYear?: string;
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
    name: "JobMatch AI",
    description:
      "An AI-powered recruitment platform that helps recruiters find the best candidates by analyzing resumes and job requirements. Utilizes the Gemini API to provide intelligent candidate-job matching and improve hiring efficiency.",
    technologies: ["React", "TypeScript", "CSS", "AI", "Gemini API"],
    link: "https://example.com",
    github: "https://github.com/username/jobmatch-ai",
    image: demo,
    video: test,
    releaseYear: "2021",
  },
  {
    id: "2",
    name: "InstantChat",
    description:
      "A real-time chat application with a sleek and responsive UI. Built using WebSockets, it enables seamless instant messaging and group chats with a smooth user experience.",
    technologies: ["React", "TypeScript", "CSS", "Socket.IO"],
    link: "https://example.com",
    github: "https://github.com/username/instantchat",
    image:
      "data:image/jpeg;base64,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",
    video: test,
    releaseYear: "2020",
  },
  {
    id: "3",
    name: "BookHaven",
    description:
      "An online bookstore where users can browse, purchase, and read digital books. Features include a powerful search engine, book previews, and a smooth shopping experience.",
    technologies: ["React", "TypeScript", "CSS"],
    link: "https://example.com",
    github: "https://github.com/username/bookhaven",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9AX9CwIUgaoF1saxZnGw9CM62tTLvdXEguA&s",
    video: test,
    releaseYear: "2019",
  },
  {
    id: "4",
    name: "AWS Scalable Architecture",
    description:
      "Designed and deployed a robust three-tier cloud architecture on AWS, featuring EC2 instances, load balancing, a secure database layer, and Docker containerization.",
    technologies: ["AWS", "Terraform", "Docker", "Nginx"],
    link: "https://example.com",
    github: "https://github.com/username/aws-architecture",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoFRQjM-wM_nXMA03AGDXgJK3VeX7vtD3ctA&s",
    video: test,
    releaseYear: "2018",
  },
];
