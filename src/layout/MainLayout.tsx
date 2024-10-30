import React, { useLayoutEffect, useState } from "react";
import Navbar from "../components/shared/Navbar";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || "dark"
  );

  useLayoutEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="main-layout">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
