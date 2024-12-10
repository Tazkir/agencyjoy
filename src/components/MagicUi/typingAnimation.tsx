"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

interface TypingAnimationProps {
  text: string;
  duration?: number;
  className?: string;
}

export function TypingAnimation({
  text,
  duration = 200,
  className,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(true); // Indicates typing or erasing
  const [index, setIndex] = useState<number>(0); // Tracks the character position

  useEffect(() => {
    const typingEffect = setInterval(() => {
      if (isTyping) {
        // Typing forward
        if (index < text.length) {
          setDisplayedText(text.substring(0, index + 1));
          setIndex(index + 1);
        } else {
          setIsTyping(false); // Switch to erasing
        }
      } else {
        // Erasing backward
        if (index > 0) {
          setDisplayedText(text.substring(0, index - 1));
          setIndex(index - 1);
        } else {
          setIsTyping(true); // Switch to typing
        }
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [text, duration, index, isTyping]);

  return <span className={cn("", className)}>{displayedText}</span>;
}
