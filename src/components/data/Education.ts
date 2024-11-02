interface Education {
  id: string;
  degree: string;
  major: string;
  date: string;
  university: string;
  location: string;
}
export const educations: Education[] = [
  {
    id: "1",
    degree: "Bachelor of Science",
    major: "Computer Science",
    date: "2017 - 2021",
    university: "University of California",
    location: "Los Angeles, USA",
  },
  {
    id: "2",
    degree: "High School Diploma",
    major: "Science",
    date: "2013 - 2017",
    university: "Saint Mary's High School",
    location: "San Francisco, USA",
  },
];
