export const menuVariants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      opacity: { duration: 0.2 },
      height: { duration: 0.3 },
    },
  },
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      opacity: { duration: 0.4 },
      height: { type: "spring", stiffness: 300, damping: 30 },
    },
  },

  initialFadeInBottom: {
    opacity: 0,
    y: "10%",
  },

  animateFadeInBottom: {
    opacity: 1,
    y: "0%",
  },

  blurInWord: {
    initial: {
      opacity: 0,
      height: 0,
      y: "20%",
      filter: "blur(10px)",
    },
    animate: {
      opacity: 1,
      y: "0%",
      height: "auto",
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  },
};
