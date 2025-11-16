export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  releaseYear?: string;
  link?: string;
  github?: string;
  imagePreview?: string;
  images: string[];
  isDone: boolean;
}

/*Preview Images  */
const azureImages = {
  bookstore: "https://portfoliopics.blob.core.windows.net/images/bookstore.png",
  smartscroll:
    "https://portfoliopics.blob.core.windows.net/images/smartscroll.png",
  jobFitAI: "https://portfoliopics.blob.core.windows.net/images/jobfitAI.png",
  aws: "https://portfoliopics.blob.core.windows.net/images/aws.png",
  consommiTounsi:
    "https://portfoliopics.blob.core.windows.net/images/consommiTounsi.png",
  socialMediaDeployment:
    "https://portfoliopics.blob.core.windows.net/images/social-media-deployment.png",
};

/* JobFit Ai images: */
import jobFitAI1 from "../../assets/projects/jobFit AI/1.png";
import jobFitAI2 from "../../assets/projects/jobFit AI/2.png";
import jobFitAI3 from "../../assets/projects/jobFit AI/3.png";
import jobFitAI4 from "../../assets/projects/jobFit AI/4.png";
import jobFitAI5 from "../../assets/projects/jobFit AI/5.png";

/*Smart scroll images :  */

import smartscroll1 from "../../assets/projects/smart scroll/1.png";
import smartscroll2 from "../../assets/projects/smart scroll/2.png";
import smartscroll3 from "../../assets/projects/smart scroll/3.png";

/* AWS images :  */
import aws1 from "../../assets/projects/awsProject/1.png";
import aws2 from "../../assets/projects/awsProject/2.png";
import aws3 from "../../assets/projects/awsProject/3.png";
import aws4 from "../../assets/projects/awsProject/4.png";
import aws5 from "../../assets/projects/awsProject/5.png";

/* Book store images :  */
import bookstore1 from "../../assets/projects/bookstore/1.png";
import bookstore2 from "../../assets/projects/bookstore/2.png";
import bookstore3 from "../../assets/projects/bookstore/3.png";
import bookstore4 from "../../assets/projects/bookstore/4.png";
import bookstore5 from "../../assets/projects/bookstore/5.png";
import bookstore6 from "../../assets/projects/bookstore/6.png";

/*social media app deployment  */
import socialMediaDeployment1 from "../../assets/projects/SM-deployment/1.jpeg";
import socialMediaDeployment2 from "../../assets/projects/SM-deployment/2.jpeg";
import socialMediaDeployment3 from "../../assets/projects/SM-deployment/3.jpeg";
import socialMediaDeployment4 from "../../assets/projects/SM-deployment/4.jpeg";

export const projects: Project[] = [
  {
    id: "1",
    name: "JobFit AI",
    description:
      "An AI-powered recruitment platform that helps recruiters find the best candidates by analyzing resumes and job requirements. Utilizes the Gemini API to provide intelligent candidate-job matching and improve hiring efficiency.",
    technologies: [
      "Angular",
      "Node js",
      "Postgresql",
      "TailwindCSS",
      "Gemini API",
    ],
    github: "https://github.com/Haithem-Farjallah/JobFit-AI",
    imagePreview: azureImages.jobFitAI,
    images: [jobFitAI1, jobFitAI2, jobFitAI3, jobFitAI4, jobFitAI5],
    releaseYear: "2025",
    isDone: true,
  },
  {
    id: "2",
    name: "Cloud Native Social Media Platform",
    description:
      "Developed and deployed a social media platform built with microservices architecture on Azure Kubernetes Service. Implemented automated CI/CD pipelines using Jenkins and ArgoCD for GitOps-based continuous delivery. Complete infrastructure provisioned and managed as code with Terraform across multiple environments.",
    technologies: [
      "Spring Boot",
      "Azure",
      "Kubernetes (AKS)",
      "Terraform",
      "Docker",
      "Jenkins",
      "ArgoCD",
    ],
    github: "https://github.com/Haithem-Farjallah/social-media-app-deployment",
    imagePreview: azureImages.socialMediaDeployment,
    images: [
      socialMediaDeployment3,
      socialMediaDeployment4,
      socialMediaDeployment1,
      socialMediaDeployment2,
    ],
    releaseYear: "2025",
    isDone: true,
  },
  {
    id: "3",
    name: "Consomi Tounsi",
    description:
      "A real-time chat application with a sleek and responsive UI. Built using WebSockets, it enables seamless instant messaging and group chats with a smooth user experience.",
    technologies: ["Spring Boot", "TypeScript", "CSS", "Socket.IO"],
    link: "",
    github: "https://github.com/medkhalilbensmida/Projet-Spring",
    imagePreview: azureImages.consommiTounsi,
    images: [],
    releaseYear: "2025",
    isDone: true,
  },
  {
    id: "4",
    name: "Smart Scroll",
    description:
      "A Chrome extension that instantly highlights top solutions in GitHub issues, saving developers time by surfacing the best answers based on community upvotes.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    releaseYear: "2025",
    github: "https://github.com/Haithem-Farjallah/Smart-Scroll",
    imagePreview: azureImages.smartscroll,
    isDone: true,
    images: [smartscroll1, smartscroll2, smartscroll3],
  },
  {
    id: "5",
    name: "AWS Scalable Architecture",
    description:
      "Designed and deployed a robust three-tier cloud architecture on AWS, featuring EC2 instances, load balancing, a secure database layer, and Docker containerization.",
    technologies: ["AWS", "Docker", "Nginx"],
    // link: "https://example.com",
    imagePreview: azureImages.aws,
    images: [aws1, aws2, aws3, aws4, aws5],
    releaseYear: "2025",
    isDone: true,
  },
  {
    id: "6",
    name: "Bookstore App",
    description:
      "A full-stack e-commerce application for browsing and purchasing books. The app features user authentication, product catalog, shopping cart functionality, and order processing. Built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and Redux Toolkit for state management.",
    technologies: [
      "MongoDB",
      "Express.js",
      "Node.js",
      "React.js",
      "TailwindCSS",
      "Redux Toolkit",
    ],
    releaseYear: "2024",
    link: "https://book-store-frontend-lake.vercel.app/",
    github: "https://github.com/Haithem-Farjallah/BookStore",
    imagePreview: azureImages.bookstore,
    isDone: true,
    images: [
      bookstore1,
      bookstore2,
      bookstore3,
      bookstore4,
      bookstore5,
      bookstore6,
    ],
  },
];
