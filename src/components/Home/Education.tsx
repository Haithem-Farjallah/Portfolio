import React from "react";
import { educations } from "../data/Education";
import demo from "../../assets/demo.png";

const Education: React.FC = () => {
  return (
    <div className="container mx-auto p-6 dark:text-white text-gray-900 lg:flex flex-col block mb-32">
      <h1 className="mb-8 text-2xl font-bold uppercase tracking-wider text-center">
        Education
      </h1>
      <div className="mx-auto max-w-7xl w-full space-y-6 flex flex-col">
        {educations.map((experience) => (
          <div
            key={experience.id}
            className="flex items-center  shadow-lg rounded-xl p-5 gap-5 border border-[#2e2e2e] hover:shadow-xl transition-all"
          >
            <div className="w-24 h-24 flex-shrink-0">
              <img
                src={demo}
                alt={experience.degree}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col w-full ">
              <div className="flex items-center justify-between ">
                <h2 className="text-xl font-semibold">{experience.degree}</h2>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {experience.date}
                </p>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                {experience.location}
              </p>
              <p className="text-gray-700 dark:text-gray-400 text-sm mt-1">
                {experience.major}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
