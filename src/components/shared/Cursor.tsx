import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";

const Cursor = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const posX = e.clientX;
    const posY = e.clientY;

    if (cursorDotRef.current && cursorOutlineRef.current) {
      const dotOffset = cursorDotRef.current.offsetWidth / 2;
      const outlineOffset = cursorOutlineRef.current.offsetWidth / 2;

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
  }, []);

  const handleLinkHover = useCallback(() => {
    if (cursorDotRef.current && cursorOutlineRef.current) {
      gsap.to(cursorDotRef.current, {
        backgroundColor: "orange",
        scale: 1.1,
        duration: 0.3,
      });
      gsap.to(cursorOutlineRef.current, {
        borderColor: "orange",
        scale: 1.2,
        duration: 0.3,
      });
    }
  }, []);

  const handleLinkHoverOut = useCallback(() => {
    if (cursorDotRef.current && cursorOutlineRef.current) {
      gsap.to(cursorDotRef.current, {
        backgroundColor: "white",
        scale: 1,
        duration: 0.3,
      });
      gsap.to(cursorOutlineRef.current, {
        borderColor: "white",
        scale: 1,
        duration: 0.3,
      });
    }
  }, []);

  const addHoverListeners = useCallback(() => {
    document.querySelectorAll("a").forEach((link) => {
      link.addEventListener("mouseenter", handleLinkHover);
      link.addEventListener("mouseleave", handleLinkHoverOut);
    });
  }, [handleLinkHover, handleLinkHoverOut]);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    addHoverListeners();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.querySelectorAll("a").forEach((link) => {
        link.removeEventListener("mouseenter", handleLinkHover);
        link.removeEventListener("mouseleave", handleLinkHoverOut);
      });
    };
  }, [handleMouseMove, addHoverListeners]);

  // reset router when navigating between routes
  useEffect(() => {
    if (cursorDotRef.current && cursorOutlineRef.current) {
      gsap.to(cursorDotRef.current, {
        backgroundColor: "white",
        scale: 1,
        duration: 0.3,
      });
      gsap.to(cursorOutlineRef.current, {
        borderColor: "white",
        scale: 1,
        duration: 0.3,
      });
    }

    setTimeout(addHoverListeners, 100);
  }, [location.pathname, addHoverListeners]);

  return (
    <>
      <div
        ref={cursorDotRef}
        className="cursor-dot w-2 h-2 border-none dark:bg-white bg-black fixed top-0 left-0 rounded-full z-50 pointer-events-none"
      ></div>
      <div
        ref={cursorOutlineRef}
        className="cursor-outline w-9 h-9 border dark:border-white border-black fixed top-0 left-0 rounded-full z-50 pointer-events-none"
      ></div>
    </>
  );
};

export default Cursor;
