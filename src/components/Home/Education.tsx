import React from "react";
import { educations } from "../data/Education";
import { IoLocationOutline } from "react-icons/io5";
import { motion, useReducedMotion } from "framer-motion";

const Education: React.FC = () => {
  const reduceMotion = useReducedMotion();

  return (
    <div className="container mx-auto mb-32 px-6">
      <h1 className="my-20 text-center text-5xl tracking-tight sm:text-6xl">
        Education
      </h1>

      <div className="mx-auto flex max-w-5xl flex-col gap-5">
        {educations.map((education, index) => (
          <motion.div
            key={education.id}
            initial={reduceMotion ? undefined : { opacity: 0, y: 28 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.55,
              delay: reduceMotion ? 0 : Math.min(index * 0.08, 0.3),
              ease: [0.22, 1, 0.36, 1],
            }}
            className="education group flex flex-col gap-6 rounded-2xl border border-black/10 p-6 transition-colors duration-300 hover:border-black/25 hover:bg-black/[0.02] dark:border-white/10 dark:hover:border-white/25 dark:hover:bg-white/[0.03] sm:flex-row sm:items-start sm:p-8"
          >
            <div className="h-24 w-32 shrink-0 overflow-hidden rounded-xl border border-black/10 bg-white dark:border-white/10">
              <img
                src={education.imgURL}
                alt={`${education.university} logo`}
                className="h-full w-full object-contain p-2"
              />
            </div>

            <div className="min-w-0 flex-1 space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#545557]">
                  {education.date}
                </p>
                {education.distinction && (
                  <span className="rounded-full bg-black px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-white dark:bg-white dark:text-black">
                    {education.distinction}
                  </span>
                )}
              </div>

              <h2 className="text-xl font-medium leading-snug sm:text-2xl">
                {education.degree}
              </h2>

              <p className="leading-relaxed text-black/70 dark:text-white/70">
                {education.university}
              </p>

              <div className="flex items-center gap-1.5 text-sm text-[#545557]">
                <IoLocationOutline className="shrink-0" />
                <span>{education.location}</span>
              </div>

              {education.description && (
                <p className="max-w-2xl pt-1 text-sm leading-relaxed text-black/60 dark:text-white/60">
                  {education.description}
                </p>
              )}

              {!!education.coursework?.length && (
                <div className="pt-2">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#545557]">
                    Coursework
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {education.coursework.map((subject) => (
                      <span
                        key={subject}
                        className="rounded-full border border-black/15 px-3 py-1 text-xs text-[#545557] transition-colors duration-300 hover:border-black/40 hover:text-black dark:border-white/15 dark:hover:border-white/40 dark:hover:text-white"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;