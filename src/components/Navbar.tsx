import { FiMoon, FiSun } from "react-icons/fi";
import Switch from "react-switch";

const Navbar = ({
  theme,
  toggleTheme,
}: {
  theme: string;
  toggleTheme: () => void;
}) => {
  return (
    <div className="absolute top-0 z-20 w-full px-10 ">
      <nav className="flex justify-between items-center p-5 font-sans text-sm mt-2 text-black dark:text-white bg-transparent">
        <h1>Haithem Farjallah</h1>
        <div className="flex items-center gap-8 ">
          <a href="#">Home</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
          <Switch
            className="outline-none"
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
