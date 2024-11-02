import React from "react";
import { projects } from "../data/Projects";
import { FaGithub } from "react-icons/fa6";
import { LuLink } from "react-icons/lu";

const Projects: React.FC = () => {
  return (
    <div className="w-full  text-white  ">
      <h1 className=" m-4 my-10 text-2xl">Featured Projects :</h1>
      <div className="flex flex-wrap mx-auto px-5 max-w-7xl  lg:justify-between justify-center  ">
        {projects.map((project) => (
          <div key={project.id} className="flex flex-col max-w-lg gap-2 mb-5 ">
            <div className="">
              <img src={project.image} alt="image project" />
            </div>
            <div className=" px-1 flex flex-col gap-1">
              <div className="flex items-center  justify-between">
                <h1 className=" text-xl">{project.name}</h1>
                <div className="flex items-center gap-5">
                  <a href={project.github}>
                    <FaGithub className=" text-xl" />
                  </a>
                  <a href={project.link}>
                    <LuLink className=" text-xl" />
                  </a>
                </div>
              </div>
              <p className="text-[#C4C4C4]">{project.description}</p>
              <div className="flex gap-2 text-sm text-blue-500/70 ">
                {project.technologies.map((tech, index) => (
                  <span key={tech}>
                    {tech} {index !== project.technologies.length - 1 && "-"}
                  </span>
                ))}
              </div>
              <div></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
