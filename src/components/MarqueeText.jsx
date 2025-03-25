import React from "react";
import { motion } from "framer-motion";

export default function MarqueeText({ text = "Scrolling Text" }) {
  return (
    <div className="overflow-hidden py-2 whitespace-nowrap bgImg">
      <motion.div
        className="inline-block motionText"
        data-aos="fade-up"
        animate={{ x: ["20%", "-100%"] }} // Moves text from right to left
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
      >
        {text}
      </motion.div>
    </div>
  );
}
