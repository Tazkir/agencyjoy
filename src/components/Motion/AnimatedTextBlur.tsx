"use client";

import { MotionDiv, MotionSpan } from "./motion";

interface AnimatedTextBlurProps {
  text: string;
  className?: string;
  wordClassName?: string;
}

const AnimatedTextBlur: React.FC<AnimatedTextBlurProps> = ({
  text,
  className = "",
  wordClassName = "",
}) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      filter: "blur(10px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <MotionDiv
      className={`overflow-hidden ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <MotionSpan
          variants={child}
          key={index}
          className={`inline-block mr-1 ${wordClassName}`}
        >
          {word}
        </MotionSpan>
      ))}
    </MotionDiv>
  );
};

export default AnimatedTextBlur;
