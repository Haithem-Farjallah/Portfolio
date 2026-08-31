import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface SectionTitleProps {
  children: ReactNode;
}

export default function SectionTitle({ children }: SectionTitleProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto mb-16 flex flex-col items-center px-6 text-center"
    >
      <h1 className="text-5xl tracking-tight sm:text-6xl">{children}</h1>
    </motion.div>
  );
}
