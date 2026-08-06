import { useEffect, useRef, useState } from "react";
import { FiArrowUpRight, FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import gsap from "gsap";

const RESUME_URL =
  "https://drive.google.com/file/d/1ealaWZ1d61aiQOeuUnx-y9JO35eOGBNP/view";

const NAV_ITEMS = [
  { to: "/home", label: "Home" },
  { to: "/skills", label: "Skills" },
  { to: "/contact", label: "Contact" },
];

const Navbar = ({
  theme,
  toggleTheme,
}: {
  theme: string;
  toggleTheme: () => void;
}) => {
  const navRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".nav-brand, .navbar-link, .switch", {
        y: -50,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(2)",
        delay: 0.4,
        stagger: { amount: 0.7 },
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  /* Close the drawer on navigation. */
  useEffect(() => setMenuOpen(false), [pathname]);

  /* Escape closes, and the page behind the drawer stays put. */
  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <div className="fixed top-0 z-50 w-full px-4">
      <nav
        ref={navRef}
        className="mx-auto mt-5 flex max-w-7xl items-center justify-between px-4 py-4 font-sans text-sm text-[#1c1d20] dark:text-white"
      >
        <NavLink to="/home" className="nav-brand font-medium tracking-tight">
          Haithem Farjallah
        </NavLink>

        {/* Desktop */}
        <div className="ml-auto hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <NavItem key={item.to} to={item.to} label={item.label} />
          ))}

          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-link group flex items-center gap-2 rounded-full border border-black/15 px-4 py-1.5 transition-colors duration-300 hover:border-black/40 dark:border-white/15 dark:hover:border-white/40"
          >
            Resume
            <FiArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-[2px] group-hover:translate-x-[2px]"
            />
          </a>

          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>

        {/* Mobile */}
        <div className="ml-auto flex items-center gap-3 md:hidden">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button
            onClick={() => setMenuOpen(true)}
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            className="switch flex h-9 w-9 items-center justify-center rounded-full border border-black/15 transition-colors duration-300 hover:border-black/40 dark:border-white/15 dark:hover:border-white/40"
          >
            <FiMenu size={16} />
          </button>
        </div>
      </nav>

      {/* Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 bg-white/60 backdrop-blur-sm dark:bg-black/60 md:hidden"
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "tween",
                ease: [0.22, 1, 0.36, 1],
                duration: 0.4,
              }}
              className="fixed right-0 top-0 z-50 flex h-screen w-[78%] max-w-sm flex-col border-l border-black/10 bg-white p-8 text-[#1c1d20] dark:border-white/10 dark:bg-[#0d0d0f] dark:text-white md:hidden"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#545557]">
                  Menu
                </span>
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="transition-opacity duration-300 hover:opacity-60"
                >
                  <FiX size={22} />
                </button>
              </div>

              <ul className="mt-14 flex flex-col">
                {NAV_ITEMS.map((item, i) => (
                  <motion.li
                    key={item.to}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.12 + i * 0.06, duration: 0.35 }}
                    className="border-b border-black/10 dark:border-white/10"
                  >
                    <NavLink to={item.to} className="group flex items-baseline gap-4 py-5">
                      {({ isActive }) => (
                        <>
                          <span className="font-mono text-xs text-[#545557]">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="relative text-3xl font-light">
                            {item.label}
                            <span
                              className={`absolute -bottom-1 left-0 h-[1px] bg-black transition-all duration-300 dark:bg-white ${
                                isActive ? "w-full" : "w-0 group-hover:w-full"
                              }`}
                            />
                          </span>
                        </>
                      )}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>

              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-auto flex items-center justify-between rounded-full border border-black/15 px-6 py-3 text-base transition-colors duration-300 hover:border-black/40 dark:border-white/15 dark:hover:border-white/40"
              >
                Resume
                <FiArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-[2px] group-hover:translate-x-[2px]"
                />
              </a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

/* Every link keeps the nav's own colour. Only the underline changes:
   permanent on the active route, sweeps in on hover elsewhere. */
const NavItem = ({ to, label }: { to: string; label: string }) => (
  <NavLink to={to} className="navbar-link group relative">
    {({ isActive }) => (
      <>
        {label}
        <span
          className={`absolute -bottom-1 left-0 h-[1px] bg-black transition-all duration-300 dark:bg-white ${
            isActive ? "w-full" : "w-0 "
          }`}
        />
      </>
    )}
  </NavLink>
);

/* Knob carries the icon for the mode you're currently in. */
const ThemeToggle = ({
  theme,
  toggleTheme,
}: {
  theme: string;
  toggleTheme: () => void;
}) => {
  const isDark = theme !== "light";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      role="switch"
      aria-checked={isDark}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="switch relative h-8 w-16 rounded-full border border-black/15 transition-colors duration-300 hover:border-black/40 dark:border-white/15 dark:hover:border-white/40"
    >
      <span
        className={`absolute left-[3px] top-[3px] flex h-[24px] w-[24px] items-center justify-center rounded-full bg-black text-white transition-transform duration-300 ease-out dark:bg-white dark:text-black ${
          isDark ? "translate-x-0" : "translate-x-8"
        }`}
      >
        {isDark ? <FiMoon size={12} /> : <FiSun size={12} />}
      </span>
    </button>
  );
};

export default Navbar;