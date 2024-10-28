import { useEffect, useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";
import { ReactLenis } from "lenis/react";

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
      <div className=" dark:bg-black bg-white  overflow-y-hidden relative">
        <ReactLenis
          root
          options={{ infinite: true, duration: 1.2, smoothWheel: true }}
        >
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <Home />
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C_UAhXq9GfuGO452EEzfbKnh1viQB9EDBQ&s"
              alt=""
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C_UAhXq9GfuGO452EEzfbKnh1viQB9EDBQ&s"
              alt=""
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C_UAhXq9GfuGO452EEzfbKnh1viQB9EDBQ&s"
              alt=""
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C_UAhXq9GfuGO452EEzfbKnh1viQB9EDBQ&s"
              alt=""
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C_UAhXq9GfuGO452EEzfbKnh1viQB9EDBQ&s"
              alt=""
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C_UAhXq9GfuGO452EEzfbKnh1viQB9EDBQ&s"
              alt=""
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C_UAhXq9GfuGO452EEzfbKnh1viQB9EDBQ&s"
              alt=""
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C_UAhXq9GfuGO452EEzfbKnh1viQB9EDBQ&s"
              alt=""
            />
          </div>
          <Home />
        </ReactLenis>
      </div>
    </div>
  );
};

export default App;
