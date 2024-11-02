interface experience {
  id: string;
  title: string;
  company: string;
  date: string;
  description: string[];
  location: string;
}

export const experiences: experience[] = [
  {
    id: "1",
    title: "Frontend Engineer (Remote)",
    company: "TechWave Solutions",
    date: "Jul 2021 - Present",
    description: [
      "Developing and maintaining responsive user interfaces using React and Tailwind CSS.",
      "Implementing complex UI interactions and ensuring cross-browser compatibility.",
      "Collaborating with backend engineers to integrate APIs using Redux Saga.",
    ],
    location: "New York, USA",
  },
  {
    id: "2",
    title: "Software Developer",
    company: "Wevoz Innovations",
    date: "Jun 2020 - Jun 2021",
    description: [
      "Built and optimized mobile and web applications using React and React Native.",
      "Developed automation scripts for data scraping using Python and Selenium.",
      "Contributed to PHP backend development and API integration for various client projects.",
    ],
    location: "Milan, Italy",
  },
  {
    id: "3",
    title: "Frontend Engineer (Contractor)",
    company: "FreeBeings",
    date: "Mar 2019 - Aug 2020",
    description: [
      "Worked on multiple client projects to deliver responsive and modern web applications.",
      "Occasionally led frontend teams and mentored junior developers on best practices.",
      "Collaborated with designers and project managers to ensure design accuracy and functionality.",
    ],
    location: "Remote",
  },
  {
    id: "4",
    title: "Junior Web Developer",
    company: "InnoTech Labs",
    date: "Jan 2018 - Feb 2019",
    description: [
      "Assisted in the development of e-commerce websites using HTML, CSS, and JavaScript.",
      "Performed debugging and troubleshooting for frontend issues reported by QA teams.",
      "Participated in code reviews and contributed to frontend feature improvements.",
    ],
    location: "San Francisco, USA",
  },
];
