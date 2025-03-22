import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Cursor = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);
  const [color, setColor] = useState("white");
  useEffect(() => {
    if (cursorDotRef.current) {
      setColor(cursorDotRef.current.style.backgroundColor);
    }
    const handleMouseMove = (e: MouseEvent) => {
      const posX = e.clientX;
      const posY = e.clientY;

      if (cursorDotRef.current && cursorOutlineRef.current) {
        const dotOffset = cursorDotRef.current.offsetWidth / 2;
        const outlineOffset = cursorOutlineRef.current.offsetWidth / 2;

        // Move cursorDot and cursorOutline to follow the mouse position
        gsap.to(cursorDotRef.current, {
          duration: 0.3,
          top: posY - dotOffset,
          left: posX - dotOffset,
          ease: "power3.out",
        });
        gsap.to(cursorOutlineRef.current, {
          duration: 0.5,
          delay: 0.05,
          top: posY - outlineOffset,
          left: posX - outlineOffset,
          ease: "power3.out",
        });
      }
    };

    // Handle hover effect on links
    // const handleLinkHover = () => {
    //   if (cursorDotRef.current && cursorOutlineRef.current) {
    //     gsap.to(cursorDotRef.current, {
    //       backgroundColor: "orange",
    //       scale: 1.1, // increase size
    //       duration: 0.3,
    //     });
    //     gsap.to(cursorOutlineRef.current, {
    //       borderColor: "orange",
    //       scale: 1.2, // increase size slightly more than cursorDot
    //       duration: 0.3,
    //     });
    //   }
    // };

    const handleLinkHoverOut = () => {
      if (cursorDotRef.current && cursorOutlineRef.current) {
        gsap.to(cursorDotRef.current, {
          backgroundColor: color, // or original color
          scale: 1, // reset size
          duration: 0.3,
        });
        gsap.to(cursorOutlineRef.current, {
          borderColor: color,
          scale: 1, // reset size
          duration: 0.3,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    // document.querySelectorAll("a").forEach((link) => {
    //   link.addEventListener("mouseenter", handleLinkHover);
    //   link.addEventListener("mouseleave", handleLinkHoverOut);
    // });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      // document.querySelectorAll("a").forEach((link) => {
      //   link.removeEventListener("mouseenter", handleLinkHover);
      //   link.removeEventListener("mouseleave", handleLinkHoverOut);
      // });
      handleLinkHoverOut();
    };
  });

  return (
    <div>
      <div
        ref={cursorDotRef}
        className="cursor-dot w-2 h-2 border-none dark:bg-white bg-black fixed top-0 left-0 rounded-full z-50 pointer-events-none"
      ></div>
      <div
        ref={cursorOutlineRef}
        className="cursor-outline w-9 h-9 border dark:border-white border-black fixed top-0 left-0 rounded-full z-50 pointer-events-none"
      ></div>
    </div>
  );
};

export default Cursor;
