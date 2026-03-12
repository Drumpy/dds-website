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
          <h1 className="mb-6 text-4xl font-bold sm:text-7xl font-wide drop-shadow-md">
            <AnimatedHeroText title="Diego Do Santos" />
          </h1>
          <motion.p
            variants={riseWithFade}
            className="text-sm tracking-widest text-blue-100/60 drop-shadow uppercase max-w-[300px] sm:max-w-none mx-auto"
          >
            Creative Developer
          </motion.p>
        </motion.div>

        {/* Currently Building */}
        <motion.div
          variants={riseWithFade}
          className="flex flex-col items-center gap-2 mt-14"
        >
          <motion.a
            href="https://bodasimple.uy"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3.5 rounded-[14px] border border-white/9 bg-white/4 px-5 py-3 backdrop-blur-md transition-all duration-300 hover:-translate-y-px hover:border-white/15 hover:bg-white/[0.07] hover:shadow-[0_8px_40px_rgba(139,92,246,0.12)]"
          >
            {/* Pulse dot */}
            <div className="relative h-2 w-2 shrink-0">
              <div className="absolute inset-[-3px] animate-ping rounded-full bg-green-400/30" />
              <div className="absolute inset-0 rounded-full bg-green-400" />
            </div>

            {/* Text */}
            <div className="flex flex-col gap-0.5 text-left">
              <span className="text-[10px] font-normal uppercase leading-none tracking-widest text-white/30">
                Currently building
              </span>
              <span className="text-md font-mono font-semibold tracking-wide leading-snug text-white/88">
                Boda<span className="text-olive-300">Simple</span>.uy
              </span>
            </div>

            {/* Arrow */}
            <svg
              className="ml-1 text-white/20 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white/50"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </motion.a>

          <p className="text-xs tracking-wide text-white/20 mt-1">
            Wedding management platform for couples
          </p>
        </motion.div>

        <div className="absolute w-full top-0 bottom-0 -z-10 bg-linear-to-t from-[#101012] to-transparent" />
        <ScrollDownIcon className="h-6 w-6 absolute animate-bounce bottom-16 duration-1000 text-white/20" />
        <canvas
          ref={canvasRef}
          className="absolute inset-0 -z-20"
          id="gradient-canvas"
          data-transition-in
        />
      </motion.section>
    </AnimatePresence>
  );
}

export default Hero;
