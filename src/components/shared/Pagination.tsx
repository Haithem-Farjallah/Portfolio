import React from "react";
import { projects } from "../data/Projects";
import { NavLink } from "react-router-dom";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

interface PaginationProps {
  id: number;
}

const Pagination: React.FC<PaginationProps> = ({ id }) => {
  const hasPrevious = id > 1;
  const hasNext = id < projects.length;

  return (
    <div
      className={`flex items-center mb-6 ${
        hasPrevious && hasNext
          ? "justify-between"
          : hasPrevious
          ? "justify-start"
          : "justify-end"
      }`}
    >
      {hasPrevious && (
        <NavLink
          to={`/projects/${id - 1}`}
          className="flex items-center gap-1  px-4 py-2 rounded-lg dark:hover:text-white transition duration-300"
        >
          <FaArrowLeftLong className="h-5" />
          <span className="text-lg ">Prev Project</span>
        </NavLink>
      )}
      {hasNext && (
        <NavLink
          to={`/projects/${id + 1}`}
          className="flex items-center gap-1  px-4 py-2 rounded-lg dark:hover:text-white transition duration-300"
        >
          <FaArrowRightLong className="h-5" />
          <span className="text-lg ">Next Project</span>
        </NavLink>
      )}
    </div>
  );
};

export default Pagination;
