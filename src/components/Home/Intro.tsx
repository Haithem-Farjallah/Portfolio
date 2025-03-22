import { useEffect, useRef, useState } from "react";
import { FaArrowRightLong, FaArrowDown } from "react-icons/fa6";

import gsap from "gsap";

export default function Intro() {
  const [text] = useState(
    "Hello World! I'm Haithem Farjallah, a software engineering student passionate about coding and problem-solving. I enjoy exploring new technologies and creating innovative solutions. I'm eager to learn and grow in this ever-evolving field."
  );
  const content = useRef(null);
  const [buttonText, setButtonText] = useState("Get in touch");
  const timeoutRef = useRef<number | null>(null);
  const isHovered = useRef(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("haithemfarjallah2002@gmail.com");
    gsap.to(".connect>p", {
      y: -10,
      opacity: 0,
      duration: 0.3,
      ease: "power1.in",
      onComplete: () => {
        setButtonText("Email copied!");
        gsap.fromTo(
          ".connect>p",
          {
            y: 10,
            opacity: 0,
            rotateX: 50,
            textShadow: "2px 4px 6px rgba(0, 0, 0, 0.3)",
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.3,
            ease: "power1.out",
            rotateX: 0,
            text,
          }
        );
      },
    });
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      if (isHovered.current) {
        gsap.to(".connect>p", {
          y: -10,
          opacity: 0,
          duration: 0.3,
          ease: "power1.in",
          onComplete: () => {
            setButtonText("Copy email");
            gsap.fromTo(
              ".connect>p",
              {
                y: 10,
                opacity: 0,
                rotateX: 50,
                textShadow: "2px 4px 6px rgba(0, 0, 0, 0.3)",
              },
              {
                y: 0,
                opacity: 1,
                duration: 0.3,
                ease: "power1.out",
                rotateX: 0,
                textShadow: "none",
              }
            );
          },
        });
      }
    }, 2000);
  };

  const handleMouseEnter = () => {
    isHovered.current = true;
    gsap.to(".connect>p", {
      y: -10,
      opacity: 0,
      duration: 0.3,
      ease: "power1.in",
      onComplete: () => {
        setButtonText("Copy email");
        gsap.timeline().fromTo(
          ".connect>p",
          { y: 20, opacity: 0, rotateX: 50 },
          {
            y: 0,
            opacity: 1,
            duration: 0.3,
            ease: "power1.out",
            rotateX: 0,
            stagger: 0.1,
          },
          "<"
        );
      },
    });
  };
  const handleMouseLeave = () => {
    isHovered.current = false;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    gsap.to(".connect>p", {
      y: 10,
      opacity: 0,
      duration: 0.3,
      ease: "power1.in",
      onComplete: () => {
        setButtonText("Get in touch");
        gsap.fromTo(
          ".connect>p",
          { y: -10, opacity: 0, rotateX: 50 },
          { y: 0, opacity: 1, duration: 0.3, ease: "power1.out", rotateX: 0 }
        );
      },
    });
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline()
        .from(".heroSection", {
          opacity: 0,
          delay: 1.5,
          stagger: { amount: 1 },
        })
        .from(".connect", { y: 30, opacity: 0 })
        .from(".Scroll", {
          y: -10,
          opacity: 0,
          duration: 0.8,
          delay: 0.4,
          stagger: { amount: 0.7 },
        });
    }, [content]);

    return () => {
      ctx.revert();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className=" relative h-screen  md:h-screen flex justify-center items-center overflow-hidden ">
      <div
        ref={content}
        className="absolute inset-0 m-3 overflow-hidden bg-white/5 border border-gray-900/5 dark:border-none backdrop-blur-md shadow flex justify-center items-center rounded-lg "
      >
        <div className="absolute w-[650px] h-[650px] bg-pink-600/70 rounded-full blur-[100px] z-10 animate-move-around left-1/4 top-1/2"></div>
        <div className="absolute w-[650px] h-[650px] bg-blue-500/70 rounded-full blur-[100px] z-10 animate-move-around-reverse left-3/4 top-1/2"></div>

        <div className="relative z-20 mx-auto max-w-xl md:max-w-4xl p-6">
          <p className="text-[#1c1d20] dark:text-white md:text-3xl font-sans">
            {text.split("").map((char, index) => (
              <span className="heroSection" key={index}>
                {char}
              </span>
            ))}
          </p>

          <div className="connect flex items-center mt-5  text-[#1c1d20] dark:text-white">
            <FaArrowRightLong className="h-4" />
            <p
              className="font-medium md:text-lg underline underline-offset-8 py-8 p-2 mb-1 "
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={copyEmail}
            >
              {buttonText}
            </p>
          </div>
        </div>
        <div className="Scroll text-[#1c1d20] dark:text-white bottom-5  z-20 flex gap-2 font-sans items-center right-10 text-xs absolute">
          <span>Scroll to discover</span>
          <FaArrowDown className="mt-1" />
        </div>
      </div>
    </div>
  );
}
