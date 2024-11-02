import React from "react";
import { experiences } from "../data/Experience";

const Experience: React.FC = () => {
  return (
    <div className="container mx-auto p-5 dark:text-white text-black lg:flex block ">
      <h1 className="md:w-1/6 mb-5 text-lg font-semibold uppercase tracking-wide">
        Experience
      </h1>
      <div className="lg:w-5/6 space-y-6 flex flex-col gap-5 ">
        {experiences.map((experience) => (
          <div key={experience.id} className=" space-y-2">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-medium">{experience.title}</h1>
              <h1 className=" text-gray-400">{experience.date}</h1>
            </div>
            <div className="flex items-center space-x-2 text-blue-500/70 ">
              <p>{experience.location}</p>
              <span>/</span>
              <h1>{experience.company}</h1>
            </div>
            <div className="space-y-2  text-gray-300 text-sm">
              {experience.description.map((desc, index) => (
                <p key={index}>- {desc}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
