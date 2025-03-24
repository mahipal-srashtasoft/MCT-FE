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
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 bg-orange-500  rounded-full pointer-events-none z-50"
      animate={{ x: position.x - 8, y: position.y - 8 }} // Adjust to position behind the cursor
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
    />
  );
}
