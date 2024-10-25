import { useEffect, useRef, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";
import gsap from "gsap";

export default function Home() {
  const [buttonText, setButtonText] = useState("Get in touch");
  const copyEmail = () => {
    navigator.clipboard.writeText("haithemfarjallah2002@gmail.com");
    setButtonText("Email copied !");
    setTimeout(() => {
      setButtonText("Copy email");
    }, 2000);
  };

  return (
    // Main container with fullscreen black background
    <div>
      <div className="relative h-[90vh] md:h-screen flex justify-center  items-center overflow-hidden">
        {/* Glass effect box with margin, semi-transparent white background, and border */}
        <div className="absolute inset-0 m-3 overflow-hidden bg-white/5 border border-gray-900/5 dark:border-none backdrop-blur-md shadow flex justify-center items-center rounded-lg">
          {/* Large pink blur circle on the left */}
          <div className="absolute w-[650px] h-[650px] bg-pink-600/70 rounded-full blur-[100px] z-10 animate-move-around left-1/4 top-1/2 "></div>

          {/* Large blue blur circle on the right with reverse animation */}
          <div className="absolute w-[650px] h-[650px] bg-blue-500/70 rounded-full blur-[100px] z-10 animate-move-around-reverse  left-3/4 top-1/2 "></div>

          {/* Content section inside the glass effect box */}
          <div className="relative z-20  mx-auto max-w-xl md:max-w-4xl p-6">
            <p className="text-black dark:text-white  md:text-3xl  font-sans  ">
              Hello World ! I'm Haithem Farjallah , a software engineering
              student passionate about coding and problem-solving. I enjoy
              exploring new technologies and creating innovative solutions. I'm
              eager to learn and grow in this ever-evolving field.
            </p>

            <div className="flex items-center mt-8 gap-3 text-black dark:text-white ">
              <FaArrowRightLong className=" h-4 " />
              <p
                className="  font-medium md:text-lg underline underline-offset-8 pb-1 cursor-pointer"
                onMouseEnter={() => setButtonText("Copy email")}
                onMouseLeave={() => setButtonText("Get in touch")}
                onClick={copyEmail}
              >
                {buttonText}
              </p>
            </div>
          </div>
          <div className="text-black dark:text-white bottom-5 cursor-pointer z-20 flex gap-2 font-sans items-center right-10 text-xs absolute">
            <span>Scroll to discover</span>
            <FaArrowDown className="mt-1 " />
          </div>
        </div>
      </div>
      <div>{/* Additional content for scrolling */}</div>
    </div>
  );
}
