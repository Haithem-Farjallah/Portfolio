import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollBar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    const progress = document.querySelector(".progress") as HTMLElement;

    const updateProgress = () => {
      let totalHeight = document.body.scrollHeight - window.innerHeight;
      let progressHeight = (window.scrollY / totalHeight) * 100;
      if (progress) {
        progress.style.height = progressHeight + "%";
      }
    };

    // Reset the scrollbar to the top when the route changes
    if (progress) {
      progress.style.height = "0%";
    }

    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, [location]);

  return (
    <div>
      <div className="progress fixed top-0 right-0 w-[2px] z-10 dark:bg-white bg-[#1c1d20]"></div>
      <div className="fixed top-0 right-0 w-[2px] h-full bg-[#e1e1e1] dark:bg-[#111111]"></div>
      <div>{children}</div>
    </div>
  );
};

export default ScrollBar;
