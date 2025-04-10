// ...imports
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Project, projects } from "../components/data/Projects";
import LineSeparator from "../components/shared/LineSeparator";
import Pagination from "../components/shared/Pagination";
import Curve from "../components/shared/curve/Curve";

const SingleProject = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [popupImage, setPopupImage] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const singleProject = projects.find((p) => p.id == id);
    if (!singleProject) {
      navigate("/404");
      return;
    }
    setProject(singleProject);
  }, [id]);

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setPopupImage(null);
    }
  };

  return (
    <div className="min-h-screen">
      <Curve />
      <div className=" flex flex-col">
        {!project?.isDone ? (
          <div className="text-center min-h-[75vh] flex flex-col justify-center mt-20 px-4">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              This project is still in progress
            </h1>
            <p className="text-lg text-gray-300">
              I'm working hard on it and it will be ready soon. Stay tuned!
            </p>
          </div>
        ) : (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end px-2 mt-12">
                <h1 className="text-3xl sm:text-4xl font-bold text-center sm:text-left">
                  {project?.name}
                </h1>
                <div className="text-lg mt-2 sm:mt-0">
                  {project?.releaseYear}
                </div>
              </div>
              <LineSeparator />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-6">
              <div className="p-4 border-2 border-[#2e2e2e] rounded-lg">
                <h2 className="text-2xl font-semibold mb-2">
                  Project Description
                </h2>
                <p className="">
                  {project?.description || "No description available."}
                </p>
              </div>
              <div className="p-4  border-2 border-[#2e2e2e] rounded-lg">
                <h2 className="text-2xl font-semibold mb-2">
                  Technologies Used
                </h2>
                <ul className="list-disc pl-5 ">
                  {project?.technologies?.length
                    ? project.technologies.map((tech, index) => (
                        <li key={index}>{tech}</li>
                      ))
                    : "No technologies listed."}
                </ul>
              </div>
              {project?.link && (
                <div className="col-span-1 sm:col-span-2 p-4 border-2 border-[#2e2e2e] rounded-lg">
                  <h2 className="text-2xl font-semibold mb-2">Project Link</h2>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dark:text-blue-400 text-blue-500 hover:underline"
                  >
                    {project.link}
                  </a>
                </div>
              )}
              {project?.github && (
                <div className="col-span-1 sm:col-span-2 p-4 border-2 border-[#2e2e2e] rounded-lg">
                  <h2 className="text-2xl font-semibold mb-2">
                    GitHub Repository
                  </h2>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dark:text-blue-400 text-blue-500 hover:underline"
                  >
                    {project.github}
                  </a>
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
              {project?.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Project Image ${index + 1}`}
                  className="cursor-pointer rounded-lg hover:scale-105 transition-transform duration-200 max-h-48 object-cover w-full"
                  onClick={() => setPopupImage(img)}
                />
              ))}
            </div>

            {/* Full-screen popup */}
            {popupImage && (
              <div
                className="fixed inset-0 bg-black bg-opacity-90 backdrop-blur-sm flex items-center justify-center z-50"
                onClick={handleBackgroundClick}
              >
                <button
                  className="absolute top-6 right-6 text-white text-4xl font-bold hover:text-red-400 transition"
                  onClick={() => setPopupImage(null)}
                >
                  &times;
                </button>
                <img
                  src={popupImage}
                  alt="Full Size"
                  className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg transition-transform duration-300"
                />
              </div>
            )}
          </div>
        )}
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <LineSeparator />
          <Pagination id={parseInt(id ?? "0")} />
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
