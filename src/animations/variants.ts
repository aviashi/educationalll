import type { Transition, Variants } from 'motion/react';

export const DESKTOP_EASE = [0.16, 1, 0.3, 1] as const;

export const fastTransition: Transition = {
  duration: 0.18,
  ease: DESKTOP_EASE,
};

export const standardTransition: Transition = {
  duration: 0.26,
  ease: DESKTOP_EASE,
};

export const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 8,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: standardTransition,
  },
  exit: {
    opacity: 0,
    y: -6,
    transition: fastTransition,
  },
};

export const staggerGridVariants: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

export const cardItemVariants: Variants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: standardTransition,
  },
};
