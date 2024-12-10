"use client";

import Image from "next/image";
import one from "../../../../public/images/1.avif";
import Cube from "../../../../public/svg/cube.svg";
import Box from "../../../../public/svg/box.svg";
import Barchart from "../../../../public/svg/barchart.svg";
import File from "../../../../public/svg/file.svg";
import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/MagicUi/animatedBeam";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-11 items-center justify-center rounded-md border bg-radial-button from-[#262626] to-[#171717] p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export default function PlanAndOrganize() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative overflow-hidden w-full h-[48%] flex justify-center items-center bg-radial-button from-[#171717] to-[#050505] rounded-xl p-4"
      ref={containerRef}
    >
      <div className="flex size-full flex-col items-stretch justify-between gap-2">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref} className="opacity-0"></Circle>
          <Circle ref={div5Ref}>
            <Image
              src={Box}
              width={1000}
              height={1000}
              alt=""
              className="object-contain w-full h-full"
            />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref} className="opacity-0"></Circle>
          <Circle ref={div4Ref} className="size-12 sm:size-13 rounded-full">
            <Image
              src={Cube}
              width={1000}
              height={1000}
              alt=""
              className="object-contain w-full h-full"
            />
          </Circle>
          <Circle ref={div6Ref}>
            <Image
              src={File}
              width={1000}
              height={1000}
              alt=""
              className="object-contain w-full h-full"
            />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref} className="opacity-0"></Circle>
          <Circle ref={div7Ref}>
            <Image
              src={Barchart}
              width={1000}
              height={1000}
              alt=""
              className="object-contain w-full h-full"
            />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
      />

      <div className="absolute w-full h-full top-0">
        <Image
          src={one}
          width={1000}
          height={1000}
          alt=""
          className="object-fill opacity-30 w-full h-full"
        />
      </div>
    </div>
  );
}
