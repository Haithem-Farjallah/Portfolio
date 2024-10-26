import { useEffect, useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";
import { div } from "three/webgpu";

const App = () => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || "dark"
  );
  useEffect(() => {
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
    <div>
      <Cursor />
      <div className="h-screen dark:bg-black bg-white  overflow-y-hidden relative">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Home />
      </div>
    </div>
  );
};

export default App;
