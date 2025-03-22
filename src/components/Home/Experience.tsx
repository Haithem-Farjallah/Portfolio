import React, { useEffect, useLayoutEffect, useState } from "react";
import { experiences } from "../data/Experience";
import type { Experience } from "../data/Experience";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { FaCalendarAlt, FaClock, FaGithub } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { techIcons } from "../data/TechIcons";

const ExperienceDetails = ({ experience }: { experience: Experience }) => (
  <div className="  flex  flex-col md:flex-row gap-2  space-x-3">
    <div className="w-[100px] h-[100px] md:w-[150px] md:h-[150px]  relative">
      <img
        src={experience.image}
        alt="company logo"
        className="   rounded-xl "
      />
    </div>
    <div className=" flex flex-col gap-5 ">
      <h1 className="text-2xl font-semibold ">{experience.title}</h1>
      <div className="flex flex-wrap items-center gap-2 text-sm ">
        <div className="flex items-center gap-1 border-2 dark:border-[#2e2e2e] px-3 py-[2px]  rounded-2xl dark:text-gray-300 text-gray-500  ">
          <MdWork className="mt-[2px]" />
          <span>{experience.company}</span>
        </div>
        <div className="flex items-center gap-1 border-2 dark:border-[#2e2e2e] px-3 py-[2px]  rounded-2xl dark:text-gray-300 text-gray-500 ">
          <IoLocationSharp className="mt-[2px]" />
          <span>{experience.location}</span>
        </div>
        <div className="flex items-center gap-1 border-2 dark:border-[#2e2e2e] px-3 py-[2px]  rounded-2xl dark:text-gray-300 text-gray-500 ">
          <MdWork className="mt-[2px]" />
          <span>{experience.type}</span>
        </div>
      </div>

      <div className="space-y-1 font-[400]">
        <div className=" flex items-center space-x-3  text-sm border-b py-2 dark:border-[#2e2e2e]">
          <FaCalendarAlt />
          <span>{experience.date} </span>
        </div>
        <div className=" flex items-center space-x-3  text-sm border-b py-2  dark:border-[#2e2e2e]">
          <FaClock />
          <span>{experience.duration} </span>
        </div>
      </div>

      <h1 className=" font-medium my-1">{experience.summary}</h1>

      <div className="flex gap-2 space-x-3  text-lg ">
        {experience.technologies.map((tech, index) => (
          <div key={index} className="flex items-center ">
            {techIcons[tech]}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Experience: React.FC = () => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || "dark"
  );
  useEffect(() => {
    window.addEventListener("storage", () => {
      const theme = localStorage.getItem("theme");
      console.log(theme);
      if (theme) {
        setTheme(theme);
      }
    });
  }, []);
  return (
    <div className="container  mx-auto p-5  block">
      <h1 className="mb-20 text-5xl font-bold uppercase tracking-wider text-center">
        Experience
      </h1>
      <VerticalTimeline animate={true}>
        {experiences.map((experience: Experience, index: number) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: theme === "dark" ? "#000" : "#fff",
              border: "2px solid #2E2E2E",
              boxShadow: "none",
              borderRadius: "20px",
            }}
            contentArrowStyle={{
              borderRight: "10px solid #2E2E2E",
            }}
            iconStyle={{
              background: theme === "dark" ? "#000" : "#fff",
              color: theme === "dark" ? "#fff" : "#000",
              boxShadow: "none",
            }}
            icon={<VscDebugBreakpointLog />}
          >
            <ExperienceDetails experience={experience} />
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
