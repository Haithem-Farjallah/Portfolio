import { NavLink } from "react-router-dom";
import { projects } from "../data/Projects";

const Projects = () => {
  return (
    <div className="">
      <h2 className="text-2xl my-12 px-5 dark:text-white text-black">
        Projects
      </h2>
      <div className="flex flex-col gap-12 lg:max-w-7xl mx-auto md:max-w-3xl max-w-lg">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } gap-3`}
          >
            <div className="w-full md:w-1/4 h-72 relative group">
              <img
                src={project.image}
                alt={project.name}
                className={`rounded-lg object-cover transition-opacity duration-300 w-full h-full ${
                  index % 2 === 0 ? "md:rounded-bl-xl" : "md:rounded-br-xl"
                } group-hover:opacity-0`}
              />
              <video
                src={project.video}
                className="absolute inset-0 w-full h-full rounded-lg object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                autoPlay
                loop
                muted
              />
            </div>

            <div
              className={`w-full md:w-3/4 bg-[#1c1d20] text-white flex flex-col justify-between px-6 py-8 rounded-lg border border-white/20 ${
                index % 2 === 0 ? "md:rounded-br-xl" : "md:rounded-bl-xl"
              }`}
            >
              <NavLink
                to={`/projects/${project.id}`}
                className="font-semibold text-3xl text-center md:text-left hover:underline w-fit"
              >
                {project.name}
              </NavLink>

              <p className="text-lg text-gray-300 text-center md:text-left">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm bg-white/90 px-3 py-1 rounded text-blue-500 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 justify-center md:justify-start">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:underline text-lg"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:underline text-lg"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
