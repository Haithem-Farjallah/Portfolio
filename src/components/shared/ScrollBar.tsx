import React, { useEffect } from "react";

const ScrollBar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    const progress = document.querySelector(".progress") as HTMLElement;
    const updateProgress = () => {
      let totalHeight = document.body.scrollHeight - window.innerHeight;
      let progressHeight = (window.scrollY / totalHeight) * 100;
      if (progress) {
        progress.style.height = progressHeight + "%";
      }
    };

    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);
  return (
    <div>
      <div className="progress fixed top-0 right-0 w-[2px] z-10  dark:bg-white bg-[#1c1d20] "></div>
      <div className="fixed top-0 right-0 w-[2px] h-full bg-[#e1e1e1] dark:bg-[#111111]"></div>
      <div>{children}</div>
    </div>
  );
};

export default ScrollBar;
