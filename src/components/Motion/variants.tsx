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
};
