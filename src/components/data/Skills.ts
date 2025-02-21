import python from "../../assets/skills/python.png";
import javascript from "../../assets/skills/js.png";
import typescript from "../../assets/skills/ts.png";
import java from "../../assets/skills/java.png";
import php from "../../assets/skills/php.png";
import angular from "../../assets/skills/angular.png";
import laravel from "../../assets/skills/laravel.png";
import springboot from "../../assets/skills/springboot.png";
import svelte from "../../assets/skills/svelte.png";
import pandas from "../../assets/skills/pandas.png";
import tensorflow from "../../assets/skills/tensorflow.png";
import azure from "../../assets/skills/azure.png";
import terraform from "../../assets/skills/terraform.png";
import jenkins from "../../assets/skills/jenkins.png";
import postman from "../../assets/skills/postman.png";
import github from "../../assets/skills/github.png";
import jmeter from "../../assets/skills/jmeter.png";
import postgres from "../../assets/skills/postgres.png";
import html from "../../assets/skills/html.svg";
import css from "../../assets/skills/css.svg";
import react from "../../assets/skills/react.svg";
import aws from "../../assets/skills/aws.svg";
import c from "../../assets/skills/c.svg";
import cpp from "../../assets/skills/cpp.svg";
import bootstrap from "../../assets/skills/bootstrap.svg";
import tailwind from "../../assets/skills/tailwind.svg";
import docker from "../../assets/skills/docker.svg";
import kubernetes from "../../assets/skills/kubernetes.svg";

export const techStack = [
  {
    category: "Programming Languages",
    items: [
      { name: "Python", image: python },
      { name: "JavaScript", image: javascript },
      { name: "TypeScript", image: typescript },
      { name: "Java", image: java },
      { name: "C", image: c },
      { name: "C++", image: cpp },
      { name: "PHP", image: php },
    ],
  },
  {
    category: "Frameworks",
    items: [
      { name: "Angular", image: angular },
      { name: "Laravel", image: laravel },
      { name: "Spring Boot", image: springboot },
      { name: "Svelte", image: svelte },
    ],
  },
  {
    category: "Libraries",
    items: [
      { name: "ReactJS", image: react },
      { name: "NumPy", image: python },
      { name: "Pandas", image: pandas },
      { name: "TensorFlow", image: tensorflow },
    ],
  },
  {
    category: "DevOps",
    items: [
      { name: "Docker", image: docker },
      { name: "Kubernetes", image: kubernetes },
      { name: "AWS", image: aws },
      { name: "Azure Cloud", image: azure },
      { name: "Terraform", image: terraform },
      { name: "Jenkins", image: jenkins },
    ],
  },
  {
    category: "Markup & Style",
    items: [
      { name: "HTML", image: html },
      { name: "CSS", image: css },
      { name: "Bootstrap", image: bootstrap },
      { name: "Tailwind CSS", image: tailwind },
    ],
  },
  {
    category: "Databases",
    items: [{ name: "PostgreSQL", image: postgres }],
  },
  {
    category: "Dev Tools",
    items: [
      { name: "Postman", image: postman },
      { name: "GitHub", image: github },
    ],
  },
  {
    category: "Testing",
    items: [{ name: "JMeter", image: jmeter }],
  },
];
