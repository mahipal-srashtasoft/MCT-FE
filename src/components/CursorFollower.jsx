import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CursorFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <motion.img
      src="/Images/Logo.png" // Replace with the actual logo path
      alt="Cursor Logo"
      className="fixed top-1.5 left-5 w-11 h-11 pointer-events-none z-50"
      animate={{ x: position.x - 20, y: position.y - 20 }} // Adjust to center the logo
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
    />
  );
}