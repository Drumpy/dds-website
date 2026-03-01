"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

import UruguayFlagIcon from "./UruguayFlagIcon";
import AnimatedHeroText from "./AnimatedHeroText";

import { Gradient } from "../lib/gradient";
import { riseWithFade } from "@/lib/animations";
import { ScrollDownIcon } from "./Icons";

function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gradientInitialized = useRef(false);

  useEffect(() => {
    if (!canvasRef.current || gradientInitialized.current) return;
    gradientInitialized.current = true;
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");
  }, []);

  return (
    <AnimatePresence>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative grid place-content-center place-items-center min-h-[85vh] sm:min-h-[80vh] bg-hero-placeholder bg-center bg-no-repeat bg-cover z-0 text-center"
      >
        <span className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-normal tracking-wide text-white border bg-white/5 backdrop-blur-lg border-white/10 rounded-3xl">
          Working from Uruguay <UruguayFlagIcon />
        </span>
        <motion.div initial="initial" animate="animate">
          <h1 className="mb-6 text-5xl font-bold sm:text-7xl font-wide drop-shadow-md">
            <AnimatedHeroText title="Diego Do Santos" />
          </h1>
          <motion.p
            variants={riseWithFade}
            className="text-lg sm:text-lg font-medium tracking-[4px] text-blue-100/60 drop-shadow uppercase max-w-[300px] sm:max-w-none mx-auto"
          >
            Creative Developer
          </motion.p>
        </motion.div>
        <div className="absolute w-full top-0 bottom-0 -z-10 bg-linear-to-t from-[#101012] to-transparent"></div>
        <ScrollDownIcon className="h-6 w-6 absolute animate-bounce bottom-16 duration-1000 text-white/20" />
        <canvas
          ref={canvasRef}
          className="absolute inset-0 -z-20 animate-pulse"
          id="gradient-canvas"
          data-transition-in
        />
      </motion.section>
    </AnimatePresence>
  );
}

export default Hero;
