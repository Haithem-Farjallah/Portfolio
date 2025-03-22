import FST from "../../assets/education/FST.png";
import LPK from "../../assets//education/LPK.jpg";
interface Education {
  id: string;
  degree: string;
  date: string;
  university: string;
  location: string;
  imgURL: string;
}
export const educations: Education[] = [
  {
    id: "1",
    degree: "Software Engineering",
    date: "2023-present",
    university: "Faculty of Science of Tunis",
    location: "Tunisia",
    imgURL: FST,
  },
  {
    id: "2",
    degree: "Integrated Preparatory Cycle",
    date: "2021-2023",
    university: "Faculty of Science of Tunis",
    location: "Tunisia",
    imgURL: FST,
  },
  {
    id: "3",
    degree: "High School",
    date: "2017-2021",
    university: "Lycee Pilote Kairouan",
    location: "Tunisia",
    imgURL: LPK,
  },
];
