import { useEffect, useRef, useState } from "react";
import { FiMoon, FiSun, FiX } from "react-icons/fi";
import Switch from "react-switch";
import gsap from "gsap";
import { Link } from "react-router-dom";

const Navbar = ({
  theme,
  toggleTheme,
}: {
  theme: string;
  toggleTheme: () => void;
}) => {
  const navRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("h1, .navbar-link, .switch", {
        y: -50,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(2)",
        delay: 0.4,
        stagger: {
          amount: 0.7,
        },
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="fixed z-50 top-0 w-full px-4">
      <nav
        ref={navRef}
        className=" mt-5 mx-auto flex items-center justify-between flex-wrap p-4 text-sm font-sans text-[#1c1d20] dark:text-white"
      >
        <h1 className="font-medium">Haithem Farjallah</h1>

        {/* Mobile Switch + Hamburger */}
        <div className="flex items-center md:hidden gap-4 ml-auto">
          <Switch
            className="switch outline-none border dark:border-[#111d11]"
            checked={theme === "light"}
            onChange={toggleTheme}
            offColor="#000000"
            onColor="#ffffff"
            onHandleColor="#000000"
            handleDiameter={10}
            checkedIcon={
              <div className="flex justify-center items-center h-full text-xs">
                <FiSun className="text-black" />
              </div>
            }
            uncheckedIcon={
              <div className="flex justify-center items-center h-full text-xs">
                <FiMoon className="text-white" />
              </div>
            }
            height={20}
            width={48}
          />

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 ml-auto">
          <Link to="/home" className="navbar-link">
            Home
          </Link>
          <Link to="/skills" className="navbar-link">
            Skills
          </Link>
          <Link to="/contact" className="navbar-link">
            Contact
          </Link>
          <a
            href={
              "https://portfoliopics.blob.core.windows.net/images/Haithem_Farjallah.pdf"
            }
            className="navbar-link"
            target="_blank"
          >
            <button>Resume</button>
          </a>
          <Switch
            className="switch outline-none border dark:border-[#111d11]"
            checked={theme === "light"}
            onChange={toggleTheme}
            offColor="#000000"
            onColor="#ffffff"
            onHandleColor="#000000"
            handleDiameter={10}
            checkedIcon={
              <div className="flex justify-center items-center h-full text-xs">
                <FiSun className="text-black" />
              </div>
            }
            uncheckedIcon={
              <div className="flex justify-center items-center h-full text-xs">
                <FiMoon className="text-white" />
              </div>
            }
            height={20}
            width={48}
          />
        </div>
      </nav>

      {/* Backdrop overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Sidebar Menu (Left Side) */}
      {menuOpen && (
        <div className="fixed top-0 left-0 h-screen w-[70%] sm:w-[40%] bg-white dark:bg-[#1a1a1a] z-50 p-6 pt-8 md:hidden shadow-lg">
          {/* Close Button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4 text-2xl text-gray-700 dark:text-white"
          >
            <FiX />
          </button>

          <ul className="flex flex-col gap-6 text-base mt-10 text-black dark:text-white">
            <li>
              <Link
                to="/home"
                className="navbar-link"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                className="navbar-link"
                onClick={() => setMenuOpen(false)}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="navbar-link"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <a
                href={
                  "https://portfoliopics.blob.core.windows.net/images/Haithem_Farjallah.pdf"
                }
                className="navbar-link"
                target="_blank"
              >
                <button>Resume</button>
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
