"use client";

import PrimaryButtonDown from "@/components/CustomUI/Button/PrimaryButtonDown";
import Marquee from "@/components/Marquee/marquee";
import { Badge } from "@/components/ui/badge";
import { scrollToSection } from "@/lib/scrollToSection";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import { AnimatedDiv } from "@/components/Motion/AnimatedComponents";
import { WordFadeIn } from "@/components/Motion/WordFadeIn";

export default function Hero() {
  const { ref: sectionRef } = useInViewAnimation({
    threshold: 0.1,
  });

  return (
    <AnimatePresence>
      <div
        id="hero"
        className="w-full min-h-screen relative flex justify-center items-center"
      >
        <div className="absolute inset-0 -z-10 flex justify-start items-center">
          <div className="w-[80%] h-full bg-grid-slate-200 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] opacity-50" />
        </div>

        <div
          className="w-full h-screen relative z-10 flex flex-col justify-center items-center px-2 overflow-hidden"
          ref={sectionRef}
        >
          <AnimatedDiv viewportOptions={{ amount: 0.2, delay: 0.3 }}>
            <Badge
              variant="outline"
              className="font-manrope font-normal md:text-sm text-xs flex justify-center items-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-green-400 animate-[btnpulse_2s_infinite]" />
              Available now, only 3 spots left
            </Badge>
          </AnimatedDiv>

          <div className="w-full flex flex-col justify-center items-center gap-5">
            <div className="flex flex-col justify-center items-center text-center">
              <div className="text-clamp-hero">
                <WordFadeIn
                  viewportOptions={{ amount: 0.1, delay: 0.4 }}
                  words="Innovative Agency"
                  className="inline-block mr-2 text-[#E87811]"
                />
              </div>
              <div className="text-clamp-hero">
                <WordFadeIn
                  viewportOptions={{ amount: 0.3, delay: 0.6 }}
                  words="Beyond ✦ Limits."
                  className="inline-block mr-2"
                />
              </div>
              <div className="text-clamp-hero">
                <WordFadeIn
                  viewportOptions={{ amount: 0.5, delay: 0.8 }}
                  words="Amplified With AI."
                  className="inline-block mr-2 text-[#E87811]"
                />
              </div>
            </div>

            <div className="font-manrope font-medium text-clamp-h3 text-[#AFAFAF] text-center">
              <WordFadeIn
                viewportOptions={{ amount: 0.2, delay: 0.2 }}
                words="Design services at your fingertips, Pause or cancel anytime."
              />
            </div>

            <AnimatedDiv viewportOptions={{ amount: 0.2, delay: 0.8 }}>
              <Link
                href="#whyus"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("whyus");
                }}
                className="hover:text-gray-300"
              >
                <PrimaryButtonDown title="Learn More" />
              </Link>
            </AnimatedDiv>

            <AnimatedDiv
              className="w-full flex flex-col gap-5 justify-center items-center py-7"
              viewportOptions={{ amount: 0.2, delay: 1 }}
            >
              <h3 className="font-manrope text-base font-semibold text-[#919191]">
                Our services are featured on
              </h3>
              <Marquee />
            </AnimatedDiv>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
}
