"use client";

import Image from "next/image";
import { MotionDiv } from "../Motion/motion";
import { data } from "@/lib/data";

function Marquee() {
  return (
    <div className="relative w-full overflow-hidden flex justify-center items-center rounded-full">
      <div className="w-[80%] overflow-hidden whitespace-nowrap rounded-2xl relative shadow-inner">
        <MotionDiv
          className="overflow-hidden inline-block"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              duration: 90,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            },
          }}
        >
          <div className="inline-flex">
            {Array.from({ length: 5 }).map(() =>
              data.partners.map((partner, index) => (
                <Image
                  src={partner.src}
                  width={120}
                  height={80}
                  alt="graphno"
                  className="skill ml-5 "
                  key={index}
                />
              ))
            )}
          </div>

          <div className="inline-flex">
            {Array.from({ length: 5 }).map(() =>
              data.partners.map((partner, index) => (
                <Image
                  src={partner.src}
                  width={120}
                  height={80}
                  alt="graphno"
                  className="skill ml-5 "
                  key={index}
                />
              ))
            )}
          </div>
        </MotionDiv>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
      </div>
    </div>
  );
}

export default Marquee;
