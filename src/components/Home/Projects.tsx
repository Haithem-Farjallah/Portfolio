import { useState, useEffect, useRef } from "react";
import { projects } from "../data/Projects";
import { NavLink } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { motion, useReducedMotion } from "framer-motion";

const Projects = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

  const mouseRef = useRef({ x: 0, y: 0 });
  const hasMoved = useRef(false);

  const reduceMotion = useReducedMotion();

  const fixedImageSize = { width: 350, height: 200 };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      hasMoved.current = true;
      mouseRef.current = { x: event.clientX, y: event.clientY };
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    const syncHover = () => {
      if (!hasMoved.current) return;
      const { x, y } = mouseRef.current;
      const element = document.elementFromPoint(x, y);
      const item = element?.closest<HTMLElement>("[data-preview]");
      setHoveredItem(item?.dataset.preview || null);
    };

    const handleWindowLeave = () => setHoveredItem(null);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", syncHover, { passive: true });
    document.addEventListener("mouseleave", handleWindowLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", syncHover);
      document.removeEventListener("mouseleave", handleWindowLeave);
      setHoveredItem(null);
    };
  }, []);

  const handleMouseEnter = (imgSrc: string) => {
    setHoveredItem(imgSrc);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const markFailed = (src: string) =>
    setFailedImages((previous) => new Set(previous).add(src));

  const showPreview = hoveredItem !== null && !failedImages.has(hoveredItem);

  /* Rows rise into place as they enter the viewport. Anyone who has
     asked their OS to reduce motion just gets them in place. */
  const rowReveal = (index: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-80px" },
          transition: {
            duration: 0.55,
            delay: Math.min(index * 0.07, 0.35),
            ease: [0.22, 1, 0.36, 1] as const,
          },
        };

  return (
    <main className="mt-40">
      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto mb-16 flex flex-col items-center gap-4 px-6"
      >
        <h1 className="text-5xl tracking-tight sm:text-6xl">Projects</h1>
      </motion.div>

      <nav className="menu">
        {projects.map((project, index) => (
          <motion.div key={index} {...rowReveal(index)}>
            <NavLink
              to={`/projects/${project.id}`}
              style={{ zIndex: 12 }}
              className={`menu__item group mx-auto flex w-full max-w-[88rem] items-center gap-6 border-b border-black/10 px-6 py-7 transition-colors duration-300 hover:border-black/30 hover:bg-black/[0.02] dark:border-white/10 dark:hover:border-white/30 dark:hover:bg-white/[0.03] ${
                index === 0 ? "border-t" : ""
              }`}
              data-img={`img/${index + 1}.jpg`}
              data-preview={project.imagePreview || undefined}
              onMouseEnter={() =>
                project.imagePreview && handleMouseEnter(project.imagePreview)
              }
              onMouseLeave={handleMouseLeave}
            >
              <span className="hidden w-8 shrink-0 font-mono text-xs text-[#545557] sm:block">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="menu__item-text min-w-0 flex-1">
                <span className="menu__item-textinner block truncate text-3xl font-light transition-transform duration-500 ease-out group-hover:translate-x-3 sm:text-5xl">
                  {project.name}
                </span>
              </span>

              <span className="menu__item-sub shrink-0 font-mono text-xs tracking-[0.15em] text-[#545557]">
                {project.releaseYear}
              </span>

              <FiArrowUpRight
                size={20}
                className="shrink-0 -translate-x-2 text-[#545557] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-black group-hover:opacity-100 dark:group-hover:text-white"
              />
            </NavLink>
          </motion.div>
        ))}
      </nav>

      {showPreview && (
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
            className="rounded w-full h-full"
            alt="hovered"
            onError={() => markFailed(hoveredItem)}
          />
        </div>
      )}
    </main>
  );
};

export default Projects;