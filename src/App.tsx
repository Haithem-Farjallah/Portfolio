import { lazy, useEffect, useState, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";
import { ReactLenis } from "lenis/react";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./components/ScrollToTop";
import { div } from "framer-motion/client";

const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));

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
    <AnimatePresence mode="wait">
      <Cursor />
      <Suspense fallback={<div> waiting</div>}>
        <div className="dark:bg-black bg-white overflow-y-hidden">
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <Routes>
            {["/", "/home"].map((path) => (
              <Route
                path={path}
                key={path}
                element={
                  // Apply infinite scroll only to Home route
                  <ReactLenis
                    root
                    options={{
                      infinite: true,
                      duration: 1.2,
                      smoothWheel: true,
                    }}
                  >
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
                      {/* Repeat images as needed */}
                    </div>
                    <Home />
                  </ReactLenis>
                }
              />
            ))}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* Add other routes as needed */}
          </Routes>
          <ScrollToTop />
        </div>
      </Suspense>
    </AnimatePresence>
  );
};

export default App;
