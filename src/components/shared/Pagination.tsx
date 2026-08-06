import React from "react";
import { projects } from "../data/Projects";
import { NavLink } from "react-router-dom";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const Pagination: React.FC<{ id: number }> = ({ id }) => {
  /* Walk the array rather than assuming ids run 1..length, so this
     keeps working if a project is ever removed or reordered. */
  const currentIndex = projects.findIndex((p) => String(p.id) === String(id));
  const previous = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const next =
    currentIndex > -1 && currentIndex < projects.length - 1
      ? projects[currentIndex + 1]
      : null;

  if (!previous && !next) return null;

  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const label =
    "flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#545557] transition-colors duration-300 group-hover:text-black dark:group-hover:text-white";
  const title =
    "relative w-fit text-2xl font-light text-black/70 transition-colors duration-300 group-hover:text-black dark:text-white/70 dark:group-hover:text-white sm:text-3xl";
  const underline =
    "absolute -bottom-1 left-0 h-[1px] w-0 bg-black transition-all duration-300 group-hover:w-full dark:bg-white";

  return (
    <div className="mb-6 grid grid-cols-1 sm:grid-cols-2">
      {previous ? (
        <NavLink
          to={`/projects/${previous.id}`}
          onClick={toTop}
          className="group flex flex-col gap-3 py-8 pr-6 sm:border-r sm:border-black/10 sm:dark:border-white/10"
        >
          <span className={label}>
            <FiArrowLeft
              size={14}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Previous
          </span>
          <span className={title}>
            {previous.name}
            <span className={underline} />
          </span>
        </NavLink>
      ) : (
        <div className="hidden sm:block" />
      )}

      {next && (
        <NavLink
          to={`/projects/${next.id}`}
          onClick={toTop}
          className="group flex flex-col items-start gap-3 border-t border-black/10 py-8 dark:border-white/10 sm:items-end sm:border-t-0 sm:pl-6 "
        >
          <span className={label}>
            Next
            <FiArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </span>
          <span className={`${title} sm:text-right`}>
            {next.name}
            <span className={underline} />
          </span>
        </NavLink>
      )}
    </div>
  );
};

export default Pagination;