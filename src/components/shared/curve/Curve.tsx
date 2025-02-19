import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { text, curve, translate } from "./anim";
import "./style.css";
import { useLocation } from "react-router-dom";
import { projects } from "../../data/Projects";

const routes: { [key: string]: string } = {
  "/": "Welcome ",
  "/home": "Home",
  "/skills": "Skills",
  "/contact": "Contact",
  dynamic: getProjectName(), // will display the project name
};

function getProjectName() {
  const id = location.pathname.split("/")[2];
  const project = projects.find((p) => p.id == id);
  return project?.name || " Project";
}

const getRouteName = (pathname: string): string => {
  if (pathname.startsWith("/projects/")) {
    return routes["dynamic"];
  }
  return routes[pathname] || "Unknown Route";
};

const anim = (variants: any) => {
  return {
    variants,
    initial: "initial",
    animate: "enter",
    exit: "exit",
  };
};

interface Dimensions {
  width: number | null;
  height: number | null;
}

interface SVGProps {
  width: number;
  height: number;
}

const Curve = () => {
  const location = useLocation();
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: null,
    height: null,
  });
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div
      className={`page curve fixed top-[50%] left-[50%] ${
        animationComplete ? "z-0" : "z-50"
      }`}
    >
      <div
        className="background dark:bg-black bg-[#d1d1d1]"
        style={{ opacity: dimensions.width == null ? 1 : 0 }}
      />
      <motion.p className="route  w-screen" {...anim(text)}>
        <div className="  dark:text-white text-[#1c1d20] font-medium  ">
          <p>{getRouteName(location.pathname)}</p>
        </div>
      </motion.p>
      {dimensions.width != null && dimensions.height != null && (
        <SVG
          width={dimensions.width}
          height={dimensions.height}
          onAnimationComplete={() => setAnimationComplete(true)}
        />
      )}
    </div>
  );
};

const SVG: React.FC<SVGProps & { onAnimationComplete: () => void }> = ({
  height,
  width,
  onAnimationComplete,
}) => {
  const initialPath = `
    M0 300 
    Q${width / 2} 0 ${width} 300
    L${width} ${height + 300}
    Q${width / 2} ${height + 600} 0 ${height + 300}
    L0 0
  `;

  const targetPath = `
    M0 300
    Q${width / 2} 0 ${width} 300
    L${width} ${height}
    Q${width / 2} ${height} 0 ${height}
    L0 0
  `;

  return (
    <motion.svg {...anim(translate)}>
      <motion.path
        fill={`${
          localStorage.getItem("theme") === "dark" ? "#111111" : "#d1d1d1"
        }`}
        {...anim(curve(initialPath, targetPath))}
        onAnimationComplete={onAnimationComplete}
      />
    </motion.svg>
  );
};

export default Curve;
