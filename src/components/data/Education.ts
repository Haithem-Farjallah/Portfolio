import FST from "../../assets/education/FST.png";
import LPK from "../../assets/education/LPK.jpg";

export interface Education {
  id: string;
  degree: string;
  date: string;
  university: string;
  location: string;
  imgURL: string;
  description?: string;
  coursework?: string[];
  distinction?: string;
}

export const educations: Education[] = [
  {
    id: "1",
    degree: "Master in Information Technology",
    date: "2021 - present",
    university: "Faculty of Science of Tunis",
    location: "Tunisia",
    imgURL: FST,
    description:
      "Two years of integrated preparatory cycle followed by the master's programme, covering the theory behind software as well as building it.",
    coursework: [
      "Mathematics",
      "Data Structures",
      "Algorithms",
      "Databases",
      "Operating Systems",
      "Computer Networks",
      "Artificial Intelligence",
      "Cloud Foundation",
      
    ],
  },
  {
    id: "2",
    degree: "High School",
    date: "2017 - 2021",
    university: "Lycee Pilote Kairouan",
    location: "Tunisia",
    imgURL: LPK,
    description:
      "Graduated from a pilot school with an Excellent mention in the baccalaureate.",
  },
];