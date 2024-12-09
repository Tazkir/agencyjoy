"use client";

import React, { useEffect, useRef, useState } from "react";

interface AccordionProps {
  title: string;
  titleLeft: string;
  desc: string;
  children?: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  titleLeft,
  desc,
  children,
  isOpen,
  onToggle,
}) => {
  const contentsRef = useRef<HTMLDivElement>(null);
  const [targetHeight, setTargetHeight] = useState(0);

  const height = isOpen ? targetHeight : 0;

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
  }, [isOpen]);

  return (
    <div className="bg-transparent transition duration-500 group even:border-b even:border-t even:border-[#3D3D3D]">
      <div
        onClick={onToggle}
        className={`flex flex-col gap-5 cursor-pointer items-center p-5 md:p-6 border-l group-hover:border-[#E87811] transition duration-500 ${
          isOpen ? "border-[#E87811]" : "border-[#3D3D3D]"
        } `}
      >
        <div className="w-full flex flex-col-reverse md:flex-row justify-between items-start gap-2 text-center">
          <div className="flex justify-start items-center">
            <h3 className="text-3xl font-medium font-satoshi">{title}</h3>
          </div>

          <div className="relative ml-auto flex justify-start items-center">
            <p
              className={`font-manrope font-normal text-base text-[#AFAFAF] transition duration-500 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            >
              {titleLeft}
            </p>
          </div>
        </div>

        <div
          style={{
            height: `${height}px`,
          }}
          className="overflow-hidden transition-[height] duration-500 will-change-[height]"
        >
          <div
            ref={contentsRef}
            className="space-y-4 pb-5 font-light leading-relaxed tracking-wide md:pb-6"
          >
            <p className="font-manrope font-normal text-base text-[#AFAFAF]">
              {desc}
            </p>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
