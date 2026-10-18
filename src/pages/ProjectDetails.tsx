import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiChevronLeft,
  FiChevronRight,
  FiX,
} from "react-icons/fi";
import { Project, projects } from "../components/data/Projects";
import LineSeparator from "../components/shared/LineSeparator";
import Pagination from "../components/shared/Pagination";
import Curve from "../components/shared/curve/Curve";

/* Shared tokens. Every colour flips with the theme, so nothing is
   hardcoded to one mode. #545557 is the muted grey from ContactSection
   and reads correctly against both backgrounds. */
const MUTED = "text-[#545557]";
const BODY = "text-black/80 dark:text-white/80";
const HOVER_FULL = "hover:text-black dark:hover:text-white";
const HAIRLINE = "border-black/10 dark:border-white/10";
const HAIRLINE_HOVER = "hover:border-black/30 dark:hover:border-white/30";
const UNDERLINE = "bg-black dark:bg-white";

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    const singleProject = projects.find((p) => String(p.id) === String(id));
    if (!singleProject) {
      navigate("/404");
      return;
    }
    setProject(singleProject);
    setLightboxIndex(null);
  }, [id, navigate]);

  const images = project?.images ?? [];
  const isOpen = lightboxIndex !== null;

  const close = useCallback(() => setLightboxIndex(null), []);

  const step = useCallback(
    (direction: number) => {
      setLightboxIndex((current) => {
        if (current === null || images.length === 0) return current;
        return (current + direction + images.length) % images.length;
      });
    },
    [images.length]
  );

  /* Keyboard control + scroll lock while the lightbox is open. */
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, close, step]);

  const status = !project?.isDone
    ? { label: "In progress", live: false }
    : { label: project?.link ? "Live" : "Shipped", live: true };

  const restCount = Math.max(images.length - 1, 0);
  const restCols =
    restCount === 1
      ? "grid-cols-1"
      : restCount === 2 || restCount === 4
      ? "grid-cols-2"
      : "grid-cols-2 md:grid-cols-3";

  return (
    <div className="min-h-screen">
      <Curve />

      <div className="mx-auto max-w-7xl px-6 pt-40 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div
            className={`flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] ${MUTED}`}
          >
            <span
              className={`h-[6px] w-[6px] rounded-full ${
                status.live
                  ? "bg-black dark:bg-white"
                  : "animate-pulse bg-[#545557]"
              }`}
            />
            {status.label}
            {project?.releaseYear && (
              <>
                <span className="text-black/25 dark:text-white/25">/</span>
                <span>{project.releaseYear}</span>
              </>
            )}
          </div>

          <h1 className="mt-6 text-5xl leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            {project?.name}
          </h1>
        </motion.div>

        <div className="mt-16 h-[1px] w-full bg-black/10 dark:bg-white/10" />

        <div className="grid grid-cols-1 gap-12 pt-14 lg:grid-cols-[260px_1fr] lg:gap-20">
          <aside className="h-fit lg:sticky lg:top-28">
            <div className="space-y-10">
              {!!project?.technologies?.length && (
                <div>
                  <h2
                    className={`font-mono text-xs uppercase tracking-[0.2em] ${MUTED}`}
                  >
                    Built with
                  </h2>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`rounded-full border px-3 py-1 font-mono text-xs transition-colors duration-300 ${HAIRLINE} ${HAIRLINE_HOVER} ${MUTED} ${HOVER_FULL}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {(project?.link || project?.github) && (
                <div>
                  <h2
                    className={`font-mono text-xs uppercase tracking-[0.2em] ${MUTED}`}
                  >
                    Links
                  </h2>
                  <div className="mt-4 flex flex-col">
                    {project?.link && (
                      <SpecLink href={project.link} label="Live site" />
                    )}
                    {project?.github && (
                      <SpecLink href={project.github} label="Source code" />
                    )}
                  </div>
                </div>
              )}

              {images.length > 0 && project?.isDone && (
                <div>
                  <h2
                    className={`font-mono text-xs uppercase tracking-[0.2em] ${MUTED}`}
                  >
                    Gallery
                  </h2>
                  <p className={`mt-4 font-mono text-xs ${MUTED}`}>
                    {String(images.length).padStart(2, "0")} images
                  </p>
                </div>
              )}
            </div>
          </aside>

          <div className="min-w-0">
            {!project?.isDone ? (
              <div className="flex min-h-[45vh] flex-col justify-center border-l border-black/10 pl-8 dark:border-white/10">
                <p
                  className={`text-2xl font-light leading-relaxed sm:text-3xl ${BODY}`}
                >
                  Still being built.
                </p>
                <p
                  className={`mt-4 max-w-md text-base leading-relaxed ${MUTED}`}
                >
                  This one isn't ready to show yet. Check back soon, or take a
                  look at the projects either side of it.
                </p>
              </div>
            ) : (
              <>
                <p
                  className={`max-w-5xl text-xl font-light leading-relaxed sm:text-2xl sm:leading-relaxed ${BODY}`}
                >
                  {project?.description || "No description available."}
                </p>

                {images.length > 0 && (
                  <div className="mt-20 space-y-3">
                    <Shot
                      src={images[0]}
                      index={0}
                      name={project?.name ?? ""}
                      onOpen={() => setLightboxIndex(0)}
                      className="aspect-video"
                    />

                    {restCount > 0 && (
                      <div className={`grid gap-3 ${restCols}`}>
                        {images.slice(1).map((img, i) => (
                          <Shot
                            key={`${img}-${i}`}
                            src={img}
                            index={i + 1}
                            name={project?.name ?? ""}
                            onOpen={() => setLightboxIndex(i + 1)}
                            className="aspect-video"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        <div className="mt-24">
          <LineSeparator />
          <Pagination id={parseInt(id ?? "0")} />
        </div>
      </div>

      {/* The lightbox is always a dark overlay in both themes, so its
          own colours stay fixed. */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md"
            onClick={(e) => e.target === e.currentTarget && close()}
          >
            <div className="pointer-events-none absolute left-0 right-0 top-0 flex items-center justify-between px-6 py-6 sm:px-10">
              <span className="font-mono text-xs tracking-[0.2em] text-white/70">
                {String((lightboxIndex ?? 0) + 1).padStart(2, "0")}
                <span className="text-white/40"> / </span>
                {String(images.length).padStart(2, "0")}
              </span>
              <button
                type="button"
                onClick={close}
                aria-label="Close"
                className="pointer-events-auto text-white/70 transition-colors duration-300 hover:text-white"
              >
                <FiX size={26} />
              </button>
            </div>

            {images.length > 1 && (
              <>
                <LightboxArrow side="left" onClick={() => step(-1)} />
                <LightboxArrow side="right" onClick={() => step(1)} />
              </>
            )}

            <motion.img
              key={images[lightboxIndex ?? 0]}
              src={images[lightboxIndex ?? 0]}
              alt="Full size"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="max-h-[85vh] max-w-[88%] rounded-xl object-contain shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* One gallery tile. The image is absolutely positioned so the tile's
   aspect ratio always wins, whatever the source image dimensions are. */
const Shot = ({
  src,
  index,
  name,
  onOpen,
  className = "",
}: {
  src: string;
  index: number;
  name: string;
  onOpen: () => void;
  className?: string;
}) => (
  <motion.button
    type="button"
    onClick={onOpen}
    initial={{ opacity: 0, y: 14 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
    className={`group relative block w-full overflow-hidden rounded-xl border transition-colors duration-300 ${HAIRLINE} ${HAIRLINE_HOVER} ${className}`}
  >
    <img
      src={src}
      alt={`${name} screenshot ${index + 1}`}
      loading="lazy"
      className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
    />
    <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    <span className="absolute bottom-3 left-3 rounded bg-black/60 px-2 py-1 font-mono text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      {String(index + 1).padStart(2, "0")}
    </span>
  </motion.button>
);

/* Underline sweeps in from the left on hover. */
const SpecLink = ({ href, label }: { href: string; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`group flex items-center justify-between border-b py-3 transition-colors duration-300 last:border-b-0 ${HAIRLINE} ${BODY} ${HOVER_FULL}`}
  >
    <span className="relative text-base">
      {label}
      <span
        className={`absolute -bottom-1 left-0 h-[1px] w-0 transition-all duration-300 group-hover:w-full ${UNDERLINE}`}
      />
    </span>
    <FiArrowUpRight
      size={16}
      className={`transition-all duration-300 group-hover:-translate-y-[2px] group-hover:translate-x-[2px] ${MUTED} group-hover:text-black dark:group-hover:text-white`}
    />
  </a>
);

const LightboxArrow = ({
  side,
  onClick,
}: {
  side: "left" | "right";
  onClick: () => void;
}) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={side === "left" ? "Previous image" : "Next image"}
    className={`absolute top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/15 bg-black/40 p-3 text-white/70 backdrop-blur transition-all duration-300 hover:border-white/40 hover:text-white ${
      side === "left" ? "left-3 sm:left-8" : "right-3 sm:right-8"
    }`}
  >
    {side === "left" ? <FiChevronLeft size={22} /> : <FiChevronRight size={22} />}
  </button>
);

export default ProjectDetails;