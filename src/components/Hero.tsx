"use client";

import { AnimatePresence, motion } from "framer-motion";

import UruguayFlagIcon from "./UruguayFlagIcon";
import AnimatedHeroText from "./AnimatedHeroText";

import { Gradient } from "../lib/gradient";
import { riseWithFade } from "@/lib/animations";

function Hero() {
  if (typeof document !== "undefined") {
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");
  }
  return (
    <AnimatePresence>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative grid place-content-center place-items-center min-h-[85vh] sm:min-h-[80vh] bg-hero-placeholder bg-center bg-no-repeat bg-cover z-0 text-center"
      >
        <span className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-sm font-normal tracking-wide text-white border bg-white/5 backdrop-blur-lg border-white/10 rounded-3xl">
          Working from Uruguay <UruguayFlagIcon />
        </span>
        <motion.div initial="initial" animate="animate">
          <h1 className="mb-6 text-5xl font-bold sm:text-7xl font-wide drop-shadow-md">
            <AnimatedHeroText title="Diego Do Santos" />
          </h1>
          <motion.p
            variants={riseWithFade}
            className="text-lg sm:text-xl font-medium tracking-[6px] text-blue-100/60 drop-shadow uppercase max-w-[300px] sm:max-w-none mx-auto"
          >
            Creative Developer
          </motion.p>
        </motion.div>
        <div className="absolute w-full top-0 bottom-0 -z-10 bg-gradient-to-t from-[#101012] to-transparent"></div>
        <canvas
          className="absolute inset-0 -z-20 animate-pulse"
          id="gradient-canvas"
          data-transition-in
        />
      </motion.section>
    </AnimatePresence>
  );
}

export default Hero;
