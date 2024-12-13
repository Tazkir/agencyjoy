import { motion, type MotionProps } from "framer-motion";
import React, { forwardRef } from "react";

// Define types for different HTML elements with motion props
type MotionDivProps = MotionProps & React.HTMLAttributes<HTMLDivElement>;
type MotionNavProps = MotionProps & React.HTMLAttributes<HTMLElement>;
type MotionSpanProps = MotionProps & React.HTMLAttributes<HTMLSpanElement>;
type MotionH2Props = MotionProps & React.HTMLAttributes<HTMLHeadingElement>;
type MotionPProps = MotionProps & React.HTMLAttributes<HTMLParagraphElement>;
type MotionAProps = MotionProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;

// Export typed motion components with forwardRef and displayName
export const MotionDiv = forwardRef<HTMLDivElement, MotionDivProps>(
  (props, ref) => <motion.div ref={ref} {...props} />
);
MotionDiv.displayName = "MotionDiv";

export const MotionNav = forwardRef<HTMLElement, MotionNavProps>(
  (props, ref) => <motion.nav ref={ref} {...props} />
);
MotionNav.displayName = "MotionNav";

export const MotionSpan = forwardRef<HTMLSpanElement, MotionSpanProps>(
  (props, ref) => <motion.span ref={ref} {...props} />
);
MotionSpan.displayName = "MotionSpan";

export const MotionH2 = forwardRef<HTMLHeadingElement, MotionH2Props>(
  (props, ref) => <motion.h2 ref={ref} {...props} />
);
MotionH2.displayName = "MotionH2";

export const MotionP = forwardRef<HTMLParagraphElement, MotionPProps>(
  (props, ref) => <motion.p ref={ref} {...props} />
);
MotionP.displayName = "MotionP";

export const MotionA = forwardRef<HTMLAnchorElement, MotionAProps>(
  (props, ref) => <motion.a ref={ref} {...props} />
);
MotionA.displayName = "MotionA";
