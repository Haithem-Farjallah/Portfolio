import React from "react";
import { experiences } from "../data/Experience";
import type { Experience } from "../data/Experience";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const ExperienceDetails = ({ experience }: { experience: Experience }) => (
  <div key={experience.id} className=" space-y-2">
    <div className="flex items-center justify-between">
      <h1 className="text-xl font-medium">{experience.title}</h1>
      <h1 className=" text-gray-400">{experience.date}</h1>
    </div>
    <div className="flex items-center  space-x-2 text-blue-500/70 ">
      <p>{experience.location}</p>
      <span>/</span>
      <h1>{experience.company}</h1>
    </div>
    <div className="space-y-2  text-gray-300 text-sm">
      {experience.description.map((desc, index) => (
        <p key={index}> - {desc}</p>
      ))}
    </div>
  </div>
);

const Experience: React.FC = () => {
  return (
    <div className="container mx-auto p-5 dark:text-white text-black  block ">
      <h1 className=" mb-5 text-lg font-semibold uppercase tracking-wide">
        Experience
      </h1>
      <VerticalTimeline>
        {experiences.map((experience: Experience, index: number) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#000",
              border: "1px solid #fff",
            }}
            contentArrowStyle={{ borderRight: "10px solid  #fff" }}
            date="2011 - present"
            iconStyle={{
              background: "#000",
              color: "#fff",
              border: "1px solid #fff",
            }}
          >
            <ExperienceDetails experience={experience} key={index} />
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
