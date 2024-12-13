"use client";

import { Variants } from "framer-motion";

import { cn } from "@/lib/utils";
import { MotionDiv, MotionSpan } from "./motion";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

interface WordFadeInProps {
  words: string;
  className?: string;
  delay?: number;
  variants?: Variants;
  viewportOptions?: Record<string, number>;
}

export function WordFadeIn({
  words,
  viewportOptions,
  delay = 0.15,
  variants = {
    hidden: { opacity: 0, filter: "blur(20px)" },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { delay: i * delay },
    }),
  },
  className,
}: WordFadeInProps) {
  const _words = words.split(" ");

  const { ref, isInView } = useInViewAnimation(viewportOptions);

  return (
    <MotionDiv
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={cn("font-display text-center drop-shadow-sm", className)}
    >
      {_words.map((word, i) => (
        <MotionSpan key={`${word}-${i}`} variants={variants} custom={i}>
          {word}{" "}
        </MotionSpan>
      ))}
    </MotionDiv>
  );
}
