import { ReactNode } from "react";
import { Variants, Transition } from "framer-motion";
import { MotionDiv, MotionSpan } from "./motion";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

interface AnimatedProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  transition?: Transition;
  viewportOptions?: Record<string, number>;
}

const defaultVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const AnimatedDiv = ({
  children,
  className = "",
  variants = defaultVariants,
  viewportOptions = {},
}: AnimatedProps) => {
  const { ref, isInView } = useInViewAnimation(viewportOptions);

  return (
    <MotionDiv
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </MotionDiv>
  );
};

export const AnimatedSpan = ({
  children,
  className = "",
  variants = defaultVariants,
  viewportOptions = {},
}: AnimatedProps) => {
  const { ref, isInView } = useInViewAnimation(viewportOptions);

  return (
    <MotionSpan
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </MotionSpan>
  );
};
