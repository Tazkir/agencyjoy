"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const AccordionFaq: React.FC<AccordionProps> = ({ title, children }) => {
  const contentsRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  const [targetHeight, setTargetHeight] = useState(0);

  const toggle = () => setShow(!show);

  const height = show ? targetHeight : 0;

  useEffect(() => {
    const setHeight = () => {
      if (contentsRef.current) {
        setTargetHeight(contentsRef.current.offsetHeight);
      }
    };

    setHeight();

    const handleResize = () => setHeight();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [show]);

  return (
    <div
      className={`rounded-xl transition duration-500 md:rounded-2xl hover:bg-radial-button hover:from-[#262626] hover:to-[#141414] group ${
        show ? "bg-radial-button from-[#262626] to-[#141414]" : ""
      }`}
    >
      <div
        onClick={toggle}
        className="flex cursor-pointer items-center p-5 md:p-6"
      >
        <div
          className={`font-medium text-[#919191] group-hover:text-[#FFFFFF] text-[23px] md:text-[26px] transition ${
            show ? "text-[#FFFFFF]" : ""
          }`}
        >
          {title}
        </div>

        <div className="relative ml-auto">
          <ChevronDown
            className={`h-5 w-5 transition-transform duration-500 md:h-6 md:w-6 ${
              show ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
      </div>

      <div
        style={{
          height: `${height}px`,
        }}
        className="overflow-hidden px-5 transition-[height] duration-500 will-change-[height] md:px-6"
      >
        <div
          ref={contentsRef}
          className="space-y-4 pb-5 font-light leading-relaxed tracking-wide md:pb-6"
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default AccordionFaq;
