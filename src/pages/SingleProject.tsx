import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Project, projects } from "../components/data/Projects";
import LineSeparator from "../components/shared/LineSeparator";
import Pagination from "../components/shared/Pagination";
import Curve from "../components/shared/curve/Curve";

const SingleProject = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const singleProject = projects.find((p) => p.id == id);
    if (!singleProject) {
      navigate("/404");
      return;
    }
    setProject(singleProject);
  }, [id]);

  return (
    <div className="min-h-screen">
      <Curve />
      <div className=" text-white flex flex-col">
        <div className="relative">
          <video
            src={project?.video}
            className="w-full h-64 sm:h-80 md:h-96 object-cover duration-300"
            autoPlay
            loop
            muted
          ></video>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end px-2 mt-12">
              <h1 className="text-3xl sm:text-4xl font-bold text-center sm:text-left">
                {project?.name}
              </h1>
              <div className="text-lg mt-2 sm:mt-0">"2022-2023"</div>
            </div>
            <LineSeparator />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6">
            <div className="p-4 border border-gray-700 rounded-lg">
              <h2 className="text-2xl font-semibold mb-2">
                Project Description
              </h2>
              <p className="text-gray-300">
                {project?.description || "No description available."}
              </p>
            </div>
            <div className="p-4 border border-gray-700 rounded-lg">
              <h2 className="text-2xl font-semibold mb-2">Technologies Used</h2>
              <ul className="list-disc pl-5 text-gray-300">
                {project?.technologies && project?.technologies.length
                  ? project?.technologies.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))
                  : "No technologies listed."}
              </ul>
            </div>
            {project?.link && (
              <div className="col-span-1 sm:col-span-2 p-4 border border-gray-700 rounded-lg">
                <h2 className="text-2xl font-semibold mb-2">Project Link</h2>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  {project.link}
                </a>
              </div>
            )}
            <div className="col-span-1 sm:col-span-2 p-4 border border-gray-700 rounded-lg">
              <h2 className="text-2xl font-semibold mb-2">GitHub Repository</h2>
              <a
                href={project?.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                {project?.github}
              </a>
            </div>
          </div>
          <LineSeparator />
          <Pagination id={parseInt(id ?? "0")} />
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
