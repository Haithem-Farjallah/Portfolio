import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { text, curve, translate } from "./anim";
import "./style.css";
import { useLocation } from "react-router-dom";

const routes: { [key: string]: string } = {
  "/": "Welcome ",
  "/home": "Home",
  "/about": "About",
  "/contact": "Contact",
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

  useEffect(() => {
    {
      console.log(routes[location.pathname]);
    }
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
    <div className="page curve fixed top-[50%] left-[50%] z-50 ">
      <div
        className="background dark:bg-black bg-[#d1d1d1]"
        style={{ opacity: dimensions.width == null ? 1 : 0 }}
      />
      <motion.p className="route  w-screen" {...anim(text)}>
        <div className="  dark:text-white text-[#1c1d20] font-medium  ">
          <p>{routes[location.pathname]}</p>
        </div>
      </motion.p>
      {dimensions.width != null && dimensions.height != null && (
        <SVG width={dimensions.width} height={dimensions.height} />
      )}
    </div>
  );
};

const SVG: React.FC<SVGProps> = ({ height, width }) => {
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
      />
    </motion.svg>
  );
};

export default Curve;
