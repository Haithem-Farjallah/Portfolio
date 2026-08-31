import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  FiArrowUpRight,
  FiChevronLeft,
  FiChevronRight,
  FiMaximize2,
  FiX,
} from "react-icons/fi";

import { certificates } from "../data/Certeficats.data";
import SectionTitle from "../shared/SectionTitle";

export default function Certeficats() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  const close = () => setActiveIndex(null);
  const showPrev = () =>
    setActiveIndex((index) =>
      index === null ? null : (index - 1 + certificates.length) % certificates.length
    );
  const showNext = () =>
    setActiveIndex((index) =>
      index === null ? null : (index + 1) % certificates.length
    );

  /* Escape / arrow keys drive the lightbox, and the page behind it stays put. */
  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex]);

  const active = activeIndex === null ? null : certificates[activeIndex];

  return (
    <div className="mt-24 mb-20 w-full px-6 sm:mt-32 sm:mb-28 lg:mt-40 lg:mb-32">
      <SectionTitle>Certificates</SectionTitle>

      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
        {certificates.map((cert, index) => (
          <motion.button
            key={cert.id}
            type="button"
            data-cursor-hover
            onClick={() => setActiveIndex(index)}
            initial={reduceMotion ? undefined : { opacity: 0, y: 28 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.55,
              delay: reduceMotion ? 0 : Math.min(index * 0.08, 0.3),
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group flex flex-col overflow-hidden rounded-2xl border border-black/10 text-left transition-colors duration-300 hover:border-black/25 hover:bg-black/[0.02] dark:border-white/10 dark:hover:border-white/25 dark:hover:bg-white/[0.03]"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-white">
              <img
                src={cert.image}
                alt={cert.title}
                className="h-full w-full object-contain p-4 transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 flex items-end justify-end bg-gradient-to-t from-black/50 via-transparent to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black">
                  <FiMaximize2 size={15} />
                </span>
              </div>
            </div>

            <div className="flex flex-1 flex-col gap-1.5 p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#545557]">
                {cert.issuer} &middot; {cert.date}
              </p>
              <h3 className="text-lg font-medium leading-snug">{cert.title}</h3>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-6 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={close}
          >
            <button
              onClick={close}
              aria-label="Close"
              className="fixed right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors duration-300 hover:border-white/50"
            >
              <FiX size={18} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              aria-label="Previous certificate"
              className="fixed left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-white transition-colors duration-300 hover:border-white/50 sm:left-6"
            >
              <FiChevronLeft size={20} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              aria-label="Next certificate"
              className="fixed right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-white transition-colors duration-300 hover:border-white/50 sm:right-6"
            >
              <FiChevronRight size={20} />
            </button>

            <motion.div
              key={active.id}
              className="w-full max-w-3xl"
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={active.image}
                alt={active.title}
                className="max-h-[70vh] w-full rounded-xl bg-white object-contain"
              />

              <div className="mt-4 flex flex-wrap items-center justify-between gap-4 text-white">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">
                    {active.issuer} &middot; {active.date}
                  </p>
                  <h3 className="text-xl font-medium">{active.title}</h3>
                </div>

                {active.credentialUrl && (
                  <a
                    href={active.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm transition-colors duration-300 hover:border-white/50"
                  >
                    Verify
                    <FiArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
