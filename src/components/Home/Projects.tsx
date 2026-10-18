import { useEffect } from "react";
import { projects } from "../data/Projects";
import { NavLink } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import MouseFollower from "mouse-follower";
import "mouse-follower/dist/mouse-follower.min.css";
import SectionTitle from "../shared/SectionTitle";

MouseFollower.registerGSAP(gsap);


const Projects = () => {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    // Skip on touch devices (no hover)
    if (window.matchMedia("(hover: none)").matches) return;

    const cursor = new MouseFollower({
      visible: false, // hidden until a row with data-cursor-show is hovered
      skewing: reduceMotion ? 0 : 3, // jelly stretch while moving
      skewingText: reduceMotion ? 0 : 2,
      speed: 0.6,
    });

    return () => cursor.destroy();
  }, [reduceMotion]);

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
    <main className="mt-24 sm:mt-32 lg:mt-40">
      <SectionTitle>Projects</SectionTitle>

      <nav className="menu">
        {projects.map((project, index) => (
          <motion.div key={index} {...rowReveal(index)}>
            <NavLink
              to={`/projects/${project.id}`}
              data-cursor-show
              data-cursor-text="View Details"
              style={{ zIndex: 12 }}
              className={`menu__item group mx-auto flex w-full max-w-[88rem] items-center gap-6 border-b border-black/10 px-6 py-7 transition-colors duration-300 hover:border-black/30 hover:bg-black/[0.02] dark:border-white/10 dark:hover:border-white/30 dark:hover:bg-white/[0.03] ${
                index === 0 ? "border-t" : ""
              }`}
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
    </main>
  );
};

export default Projects;