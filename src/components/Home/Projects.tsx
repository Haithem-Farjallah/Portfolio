import { useState, useEffect } from "react";
import { projects } from "../data/Projects";
import { NavLink } from "react-router-dom";

const Projects = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const fixedImageSize = { width: 350, height: 200 };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      setHoveredItem(null);
    };
  }, []);

  const handleMouseEnter = (imgSrc: string) => {
    setHoveredItem(imgSrc);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <main className="mt-40  ">
      <h1 className=" text-5xl font-bold uppercase tracking-wider text-center">
        Projects
      </h1>
      <nav className="menu  ">
        {projects.map((project, index) => (
          <NavLink
            key={index}
            to={`/projects/${project.id}`}
            style={{ zIndex: 12 }}
            className="menu__item font-[300] py-6  border-y border-[#3e3e3e]  hover:border-[#4e4e4e] mx-auto max-w-[88rem] w-screen hover:font-[400] "
            data-img={`img/${index + 1}.jpg`}
            onMouseEnter={() =>
              project.imagePreview && handleMouseEnter(project.imagePreview)
            }
            onMouseLeave={handleMouseLeave}
          >
            <span className="menu__item-text   ">
              <span className="menu__item-textinner">{project.name}</span>
            </span>
            <span className="menu__item-sub">{project.releaseYear}</span>
          </NavLink>
        ))}
      </nav>
      {hoveredItem && (
        <div
          style={{
            position: "fixed",
            left: `${mousePosition.x - fixedImageSize.width / 2}px`,
            top: `${mousePosition.y - fixedImageSize.height / 2}px`,
            width: `${fixedImageSize.width}px`,
            height: `${fixedImageSize.height}px`,
            pointerEvents: "none",
            zIndex: 13,
            overflow: "hidden",
          }}
        >
          <img
            src={hoveredItem}
            className="rounded w-full h-full "
            alt="hovered"
          />
        </div>
      )}
    </main>
  );
};

export default Projects;
