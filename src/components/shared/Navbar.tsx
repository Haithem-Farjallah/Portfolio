import { useEffect, useRef } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
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
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from("h1, .navbar>a,.switch", {
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
    <div className=" fixed z-10 top-0  w-full px-10 ">
      <nav
        ref={navRef}
        className="flex justify-between items-center p-5 font-sans text-sm mt-2 text-[#1c1d20] dark:text-white bg-transparent"
      >
        <h1>Haithem Farjallah</h1>
        <div className="navbar flex items-center gap-8 ">
          <Link to="/home">Home</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/contact">Contact</Link>
          <Switch
            className=" switch outline-none border dark:border-[#111d11]"
            checked={theme === "light"}
            onChange={toggleTheme}
            offColor="#000000"
            onColor="#ffffff"
            onHandleColor="#000000"
            handleDiameter={10}
            checkedIcon={
              <div className="flex justify-center items-center h-full text-xs ">
                <FiSun className="text-black" />
              </div>
            }
            uncheckedIcon={
              <div className="flex justify-center items-center h-full text-xs ">
                <FiMoon className="text-white" />
              </div>
            }
            height={20}
            width={48}
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
