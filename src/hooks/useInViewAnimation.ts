"use client";

import { useInView } from "framer-motion";
import { useRef, RefObject } from "react";

export const useInViewAnimation = (options = {}) => {
  const ref = useRef<HTMLDivElement | null>(null); // Specify HTMLElement here
  const isInView = useInView(ref as RefObject<Element>, {
    once: true,
    ...options,
  });

  return { ref, isInView };
};
