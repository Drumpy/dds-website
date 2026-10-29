"use client";

import { useEffect, useRef } from "react";
import { MotionConfig, motion } from "framer-motion";

import UruguayFlagIcon from "./UruguayFlagIcon";
import AnimatedHeroText from "./AnimatedHeroText";
import Socials from "./Socials";
import LanguageToggle from "./LanguageToggle";

import { Gradient } from "../lib/gradient";
import { riseWithFade } from "@/lib/animations";
import { useI18n } from "@/i18n/I18nProvider";
import { ArrowUpRightIcon, ScrollDownIcon } from "./Icons";

type FeaturedProject = {
  href: string;
  label: string;
  descriptionKey: "bodasimple" | "drumpy";
  logo: string | null;
  glow: string;
};

const featuredProjects: FeaturedProject[] = [
  {
    href: "https://bodasimple.uy",
    label: "BodaSimple.uy",
    descriptionKey: "bodasimple",
    logo: null,
    // The glow lives on a pseudo-element and only its opacity animates:
    // animating box-shadow repaints the card on every frame.
    glow: "before:shadow-[0_8px_36px_rgba(163,177,138,0.22)]",
  },
  {
    href: "https://world.dds.uy",
    label: "Drumpy World",
    descriptionKey: "drumpy",
    logo: "/logos/drumpy-world.webp",
    glow: "before:shadow-[0_8px_36px_rgba(34,211,238,0.22)]",
  },
];

const cardClassName =
  "group relative flex flex-col gap-2.5 rounded-[14px] border border-white/9 bg-white/4 px-4 py-3.5 text-left backdrop-blur-md transition-[transform,border-color,background-color] duration-200 ease-out-strong active:scale-[0.98] active:duration-100 motion-reduce:transition-colors motion-reduce:active:scale-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70 before:pointer-events-none before:absolute before:inset-0 before:rounded-[14px] before:opacity-0 before:transition-opacity before:duration-200 before:ease-out-strong can-hover:group-hover:before:opacity-100 can-hover:hover:-translate-y-px can-hover:hover:border-white/15 can-hover:hover:bg-white/[0.07]";

function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gradientInitialized = useRef(false);
  const t = useI18n();

  useEffect(() => {
    if (!canvasRef.current || gradientInitialized.current) return;
    gradientInitialized.current = true;
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="relative grid place-content-center place-items-center min-h-hero pt-14 pb-44 sm:pt-20 sm:pb-48 px-6 bg-hero-placeholder bg-center bg-no-repeat bg-cover z-0 text-center"
      >
        <div className="absolute top-5 right-5 sm:top-6 sm:right-8">
          <LanguageToggle />
        </div>

        <span className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-normal tracking-wide text-white border bg-white/5 backdrop-blur-lg border-white/10 rounded-3xl">
          {t.hero.location} <UruguayFlagIcon />
        </span>

        <motion.div initial="initial" animate="animate">
          <h1 className="mb-6 text-4xl font-bold sm:text-7xl font-wide drop-shadow-md">
            <AnimatedHeroText title="Diego Do Santos" />
          </h1>
          <motion.p
            variants={riseWithFade}
            className="text-sm sm:text-base font-medium tracking-[0.01em] text-blue-50/85 drop-shadow max-w-[280px] sm:max-w-none mx-auto"
          >
            {t.hero.subtitle}
          </motion.p>
        </motion.div>

        {/* Featured projects */}
        <motion.div
          variants={riseWithFade}
          className="mt-14 flex w-full max-w-[26rem] flex-col items-center px-6 sm:max-w-2xl"
        >
          <span className="mb-3 text-[10px] font-normal uppercase leading-none tracking-[0.22em] text-white/40">
            {t.hero.featuredLabel}
          </span>

          <div className="grid w-full gap-3 sm:grid-cols-2">
            {featuredProjects.map((project) => {
              const description = t.featured[project.descriptionKey];

              return (
                <a
                  key={project.href}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.label} — ${description}`}
                  className={`${cardClassName} ${project.glow}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-12 items-center">
                      {project.logo ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={project.logo}
                          alt=""
                          aria-hidden="true"
                          className="h-full w-auto object-contain"
                        />
                      ) : (
                        /* BodaSimple's logotype: Cormorant Garamond, "Boda" upright
                           and "Simple" in italic — same treatment as its navbar. */
                        <span className="font-cormorant text-[26px] sm:text-[28px] leading-none tracking-[-0.01em] text-[#f4f0e8]">
                          Boda
                          <span className="italic text-[oklch(0.8_0.055_133)]">
                            Simple
                          </span>
                        </span>
                      )}
                    </div>

                    <ArrowUpRightIcon className="mt-1 shrink-0 text-white/30 transition-[transform,color] duration-200 ease-out-strong can-hover:group-hover:-translate-y-0.5 can-hover:group-hover:translate-x-0.5 can-hover:group-hover:text-white/60 group-active:translate-x-0.5 group-active:-translate-y-0.5 group-active:text-white/60" />
                  </div>

                  <p className="text-xs leading-snug tracking-wide text-white/45">
                    {description}
                  </p>
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          variants={riseWithFade}
          className="absolute inset-x-0 bottom-20 flex justify-center sm:bottom-24"
        >
          <Socials />
        </motion.div>

        <div className="absolute w-full top-0 bottom-0 -z-10 bg-linear-to-t from-[#101012] to-transparent" />
        <div className="absolute inset-x-0 bottom-6 flex justify-center">
          <motion.a
            variants={riseWithFade}
            href="#projects"
            aria-label={t.hero.scrollToProjects}
            className="group inline-flex rounded-full p-2.5 text-white/25 transition-[color,transform] duration-200 ease-out-strong can-hover:hover:text-white/55 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70 motion-reduce:transition-colors"
          >
            <ScrollDownIcon className="h-6 w-6 transition-transform duration-300 ease-out-strong can-hover:group-hover:translate-y-1 motion-reduce:transition-none" />
          </motion.a>
        </div>
        <canvas
          ref={canvasRef}
          className="absolute inset-0 -z-20"
          id="gradient-canvas"
          data-transition-in
        />
      </motion.section>
    </MotionConfig>
  );
}

export default Hero;
