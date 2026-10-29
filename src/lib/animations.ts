import type { Variants } from "framer-motion";

/* Strong ease-out: starts fast, feels responsive. Custom curves beat the
   built-in CSS easings, which are too weak to read as intentional. */
const cubicEase = [0.6, 0.01, 0.05, 0.95] as const;

/* Framer Motion's `y` shorthand animates CSS variables, which the browser
   won't composite. Full transform strings stay on the GPU — the hero entrance
   runs while the gradient canvas is still initialising. */
export const riseWithFade: Variants = {
  initial: {
    opacity: 0,
    transform: "translateY(28px)",
  },
  animate: {
    opacity: 1,
    transform: "translateY(0px)",
    transition: {
      ease: cubicEase,
      duration: 0.5,
      delay: 0.45,
    },
  },
};

export const staggerChildren: Variants = {
  animate: {
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.08,
    },
  },
};

export const wordAnimation: Variants = {
  initial: {
    opacity: 0,
    transform: "translateY(100px)",
  },
  animate: {
    opacity: 1,
    transform: "translateY(0px)",
    transition: {
      ease: cubicEase,
      duration: 0.7,
    },
  },
};
