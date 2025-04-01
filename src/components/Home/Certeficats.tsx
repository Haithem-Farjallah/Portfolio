import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { items } from "../data/Certeficats.data";
interface VariantsProps {
  direction: number;
  position: () => string;
}

export default function Certeficats() {
  const [[activeIndex, direction], setActiveIndex] = useState<[number, number]>(
    [0, 0]
  );

  const indexInArrayScope =
    ((activeIndex % items.length) + items.length) % items.length;

  const visibleItems = [...items, ...items].slice(
    indexInArrayScope,
    indexInArrayScope + 3
  );

  const handleClick = (newDirection: number) => {
    setActiveIndex((prevIndex) => [prevIndex[0] + newDirection, newDirection]);
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      <h1 className="mb-20 text-5xl font-bold uppercase tracking-wider text-center">
        Certificats
      </h1>
      <div className="flex my-5">
        <AnimatePresence mode="popLayout" initial={false}>
          {visibleItems.map((item) => {
            return (
              <motion.div
                className="flex items-center justify-center bg-white rounded-lg shadow-lg text-xl relative mb-5 max-w-full max-h-full object-contain"
                key={item.key}
                layout
                custom={{
                  direction,
                  position: () => {
                    if (item === visibleItems[0]) {
                      return "left";
                    } else if (item === visibleItems[1]) {
                      return "center";
                    } else {
                      return "right";
                    }
                  },
                }}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 1 }}
              >
                {item.content}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      <div className="flex space-x-4">
        <motion.button
          whileTap={{ scale: 0.8 }}
          className=" rounded-full  h-12 w-12 shadow-md z-10 border-2 transition-all cursor-none"
          onClick={() => handleClick(-1)}
        >
          ◀︎
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.8 }}
          className=" rounded-full  h-12 w-12 shadow-md z-10 border-2  transition-all cursor-none"
          onClick={() => handleClick(1)}
        >
          ▶︎
        </motion.button>
      </div>
    </div>
  );
}

const variants = {
  enter: ({ direction }: VariantsProps) => {
    return { scale: 0.2, x: direction < 1 ? 50 : -50, opacity: 0 };
  },
  center: ({ position, direction }: VariantsProps) => {
    return {
      scale: position() === "center" ? 1 : 0.7,
      x: 0,
      zIndex: getZIndex({ position, direction }),
      opacity: 1,
    };
  },
  exit: ({ direction }: VariantsProps) => {
    return { scale: 0.2, x: direction < 1 ? -50 : 50, opacity: 0 };
  },
};

function getZIndex({
  position,
  direction,
}: {
  position: () => string;
  direction: number;
}) {
  const indexes: Record<string, number> = {
    left: direction > 0 ? 2 : 1,
    center: 3,
    right: direction > 0 ? 1 : 2,
  };
  return indexes[position()];
}
