import { useState, useEffect, useRef } from "react";

export const useMousePosition = (normalizer = 4) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const rafId = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => {
        setPosition({
          x: (e.clientX - window.innerWidth / 2) / normalizer,
          y: (e.clientY - window.innerHeight / 2) / normalizer,
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId.current);
    };
  }, [normalizer]);

  return position;
};