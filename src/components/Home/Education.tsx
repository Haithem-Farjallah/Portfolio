import React from "react";
import { educations } from "../data/Education";

const Education: React.FC = () => {
  return (
    <div className="container mx-auto p-5 dark:text-white text-black lg:flex block mb-32 ">
      <h1 className="md:w-1/6 mb-5 text-lg font-semibold uppercase tracking-wide">
        Education
      </h1>
      <div className="lg:w-5/6 space-y-6 flex flex-col gap-5 ">
        {educations.map((experience) => (
          <div key={experience.id} className=" space-y-2">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-medium">{experience.degree}</h1>
              <h1 className=" text-gray-400">{experience.date}</h1>
            </div>
            <div className="text-blue-500/70 ">
              <p>{experience.location}</p>
            </div>
            <div className="space-y-2  text-gray-300 text-sm">
              <p>- {experience.major}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
