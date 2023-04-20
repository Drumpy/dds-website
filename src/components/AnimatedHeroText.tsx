"use client";

import { motion } from "framer-motion";
import { staggerChildren, wordAnimation } from "@/lib/animations";

type AnimatedHeroTextProps = {
  title: string;
};

function AnimatedHeroText({ title }: AnimatedHeroTextProps) {
  return (
    <motion.span variants={staggerChildren}>
      {title.split(" ").map((word, index) => (
        <div key={index} className="inline-block">
          <motion.span
            variants={wordAnimation}
            className="inline-block bg-clip-text text-transparent bg-gradient-to-b from-white/90 from-5% to-blue-100/60"
          >
            {word + "\u00A0"}
          </motion.span>
        </div>
      ))}
    </motion.span>
  );
}

export default AnimatedHeroText;
