const cubicEase = [0.6, 0.01, 0.05, 0.95] as const;

export const riseWithFade = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: cubicEase,
      duration: 0.7,
      delay: 0.9,
    },
  },
}

export const staggerChildren = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

export const wordAnimation = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: cubicEase,
      duration: 0.7,
    },
  },
};
