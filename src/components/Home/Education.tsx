import React from "react";
import { educations } from "../data/Education";

import { IoLocationOutline } from "react-icons/io5";

const Education: React.FC = () => {
  // const educationRef = useRef(null);
  // useEffect(() => {
  //   let ctx = gsap.context(() => {
  //     gsap.from(".education", {
  //       y: -50,
  //       opacity: 0,
  //       duration: 0.8,
  //       ease: "back.out(2)",
  //       delay: 0.4,
  //       stagger: {
  //         amount: 0.7,
  //       },
  //     });
  //   }, educationRef);

  //   return () => ctx.revert();
  // }, []);

  return (
    <div className="container mx-auto p-6 dark:text-white text-gray-900 lg:flex flex-col block mb-32">
      <h1 className=" my-20 text-5xl font-bold uppercase tracking-wider text-center">
        Education
      </h1>
      <div className="mx-auto max-w-7xl w-full space-y-6 flex flex-col">
        {educations.map((experience) => (
          <div
            // ref={educationRef}
            key={experience.id}
            className="education flex items-center  shadow-lg rounded-xl p-5 gap-5 border border-[#2e2e2e] hover:shadow-xl transition-all"
          >
            <div className="w-32 h-24 flex-shrink-0">
              <img
                src={experience.imgURL}
                alt={experience.degree}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col w-full gap-2 ">
              <div className="flex items-center justify-between ">
                <h2 className="text-xl font-semibold">{experience.degree}</h2>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {experience.date}
                </p>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {experience.university}
              </p>
              <div className="flex items-center gap-1">
                <IoLocationOutline />

                <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                  {experience.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
