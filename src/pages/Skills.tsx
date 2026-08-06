import React from "react";
import Curve from "../components/shared/curve/Curve";
import { techStackJSX } from "../components/data/TechSkills.tsx";
import { IoCubeOutline } from "react-icons/io5";
import { FiSearch, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

const Skills: React.FC = () => {
  const techStack = techStackJSX();
  const [search, setSearch] = React.useState<string>("");

  const query = search.trim().toLowerCase();

  const filteredTechStack = techStack
    .map((stack) => {
      const categoryMatches = stack.category.toLowerCase().includes(query);
      return {
        ...stack,
        items: categoryMatches
          ? stack.items
          : stack.items.filter((item) =>
              item.name.toLowerCase().includes(query)
            ),
      };
    })
    .filter((stack) => stack.items.length > 0);

  const resultCount = filteredTechStack.reduce(
    (total, stack) => total + stack.items.length,
    0
  );

  const highlight = (text: string) => {
    if (!query) return text;
    const index = text.toLowerCase().indexOf(query);
    if (index === -1) return text;
    return (
      <>
        {text.slice(0, index)}
        <span className="text-white underline decoration-[#545557] underline-offset-4">
          {text.slice(index, index + query.length)}
        </span>
        {text.slice(index + query.length)}
      </>
    );
  };

  return (
    <>
      <Curve />
      <div className="min-h-screen py-28">
        <div className="container max-w-7xl mx-auto px-8">

          <div className="relative">
            <FiSearch
              size={18}
              className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-[#545557]"
            />
            <input
              type="text"
              aria-label="Search technologies"
              placeholder="Search a technology or category..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === "Escape" && setSearch("")}
              className="w-full h-14 rounded-xl border border-[#2a2b2d] bg-transparent pl-14 pr-14 text-lg outline-none transition-colors duration-300 placeholder:text-[#4e4e4e] hover:border-[#3d3e40] focus:border-[#545557]"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                aria-label="Clear search"
                className="absolute right-5 top-1/2 -translate-y-1/2 text-[#545557] transition-colors duration-300 hover:text-white"
              >
                <FiX size={18} />
              </button>
            )}
          </div>

          <p className="mt-4 h-5 text-sm text-[#545557]">
            {search &&
              `${resultCount} ${resultCount === 1 ? "result" : "results"}`}
          </p>

          {filteredTechStack.length === 0 ? (
            <div className="flex h-[50vh] flex-col items-center justify-center gap-5 text-center">
              <IoCubeOutline size="66" className="text-[#545557]" />
              <h2 className="text-xl tracking-wider">
                Nothing matches "{search}"
              </h2>
              <button
                type="button"
                onClick={() => setSearch("")}
                className="text-sm text-[#545557] underline underline-offset-4 transition-colors duration-300 hover:text-white"
              >
                Clear search
              </button>
            </div>
          ) : (
            <div className="mt-8">
              {filteredTechStack.map((stack) => (
                <div key={stack.category}>
                  <div className="my-12 flex items-center gap-5">
                    <div className="h-[1px] w-[20px] bg-[#545557]" />
                    <h2 className="text-lg text-[#545557]">{stack.category}</h2>
                    <div className="h-[1px] flex-1 bg-[#545557]" />
                    <span className="text-sm text-[#3d3e40]">
                      {stack.items.length}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {stack.items.map((item, i) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.35,
                          delay: Math.min(i * 0.04, 0.3),
                        }}
                        className="group relative flex items-center overflow-hidden rounded-lg border border-[#1e1e1e] bg-white/[0.02] px-8 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#545557] hover:bg-white/[0.04]"
                      >
                        <span className="relative z-10 text-xl font-light">
                          {highlight(item.name)}
                        </span>

                        <div className="absolute right-0 h-24 w-40 opacity-70 transition-opacity duration-300 group-hover:opacity-100">
                          <img
                            src={item.image}
                            alt=""
                            aria-hidden="true"
                            loading="lazy"
                            className="h-full w-full object-cover object-center dark:brightness-75"
                            style={{
                              WebkitMaskImage:
                                "linear-gradient(to left, black 30%, transparent 100%)",
                              maskImage:
                                "linear-gradient(to left, black 30%, transparent 100%)",
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Skills;