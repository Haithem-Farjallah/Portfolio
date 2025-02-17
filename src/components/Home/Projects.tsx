import React, { useState, useEffect } from "react";
import { projects } from "../data/Projects";

const Projects = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleMouseEnter = (imgSrc: string) => {
    const img = new Image();
    img.src = imgSrc;
    img.onload = () => {
      setImageSize({ width: img.width, height: img.height });
      setHoveredItem(imgSrc);
    };
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <main className="bg-black text-white h-[200vh] ">
      <h1 className="flex text-xl">Projects</h1>
      <nav className="menu ">
        {projects.map((project, index) => (
          <a
            style={{ zIndex: 12 }}
            key={index}
            className="menu__item font-[300]   hover:font-[400] "
            data-img={`img/${index + 1}.jpg`}
            onMouseEnter={() =>
              project.image && handleMouseEnter(project.image)
            }
            onMouseLeave={handleMouseLeave}
          >
            <span className="menu__item-text   ">
              <span className="menu__item-textinner">{project.name}</span>
            </span>
            <span className="menu__item-sub">{project.name}</span>
          </a>
        ))}
      </nav>

      {hoveredItem && (
        <img
          src={hoveredItem}
          alt="hovered"
          style={{
            position: "fixed",
            left: `${mousePosition.x - imageSize.width / 2}px`, // Center horizontally
            top: `${mousePosition.y - imageSize.height / 2}px`, // Center vertically
            pointerEvents: "none",
            zIndex: 11,
          }}
        />
      )}
    </main>
  );
};

export default Projects;
