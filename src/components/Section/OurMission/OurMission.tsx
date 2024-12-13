"use client";

import AccentTextButtonUp from "@/components/CustomUI/Button/AccentTextButtonUp";
import SectionBadge from "@/components/CustomUI/SectionBadge/SectionBadge";
import ArrowDown from "../../../../public/svg/arrowdown.svg";
import Image from "next/image";
import Link from "next/link";
import { scrollToSection } from "@/lib/scrollToSection";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import { AnimatePresence } from "framer-motion";
import { AnimatedDiv } from "@/components/Motion/AnimatedComponents";
import { WordFadeIn } from "@/components/Motion/WordFadeIn";

export default function OurMission() {
  const { ref: sectionRef } = useInViewAnimation({
    threshold: 0.1,
  });

  return (
    <AnimatePresence>
      <div
        id="mission"
        className="w-full min-h-screen relative flex justify-center items-center py-16"
        ref={sectionRef}
      >
        <div className="w-full h-full flex flex-col justify-center items-center text-center gap-10 px-2">
          <AnimatedDiv viewportOptions={{ amount: 0.2, delay: 0.3 }}>
            <SectionBadge title="Our Mission" />
          </AnimatedDiv>

          <div className="w-full flex flex-col justify-center items-center text-center">
            <div className="text-clamp-hero flex flex-wrap justify-center gap-2">
              <WordFadeIn
                viewportOptions={{ amount: 0.1, delay: 0.1 }}
                words="We Drive"
              />

              <WordFadeIn
                viewportOptions={{ amount: 0.1, delay: 0.2 }}
                words="Businesses"
                className="text-[#E87811]"
              />
            </div>

            <div className="text-clamp-hero flex flex-wrap justify-center gap-2">
              <WordFadeIn
                viewportOptions={{ amount: 0.1, delay: 0.3 }}
                words="To The"
              />

              <WordFadeIn
                viewportOptions={{ amount: 0.1, delay: 0.4 }}
                words="Forefront"
                className="text-[#E87811]"
              />

              <WordFadeIn
                viewportOptions={{ amount: 0.1, delay: 0.5 }}
                words="Of The Industries"
              />
            </div>

            <WordFadeIn
              viewportOptions={{ amount: 0.1, delay: 0.6 }}
              words="Through Comprehensive"
              className="text-clamp-hero flex flex-wrap justify-center gap-2"
            />

            <div className="text-clamp-hero flex flex-wrap justify-center gap-2">
              <WordFadeIn
                viewportOptions={{ amount: 0.1, delay: 0.7 }}
                words=" AI"
              />

              <WordFadeIn
                viewportOptions={{ amount: 0.1, delay: 0.8 }}
                words="Automation."
                className="text-[#E87811]"
              />
            </div>
          </div>

          <div className="lg:w-[40%] font-manrope font-medium text-clamp-h3 text-[#AFAFAF] text-center">
            <WordFadeIn
              viewportOptions={{ amount: 0.2, delay: 0.3 }}
              words="First impressions matter. That's why our mission is to create clean, enduring designs that elevate."
            />
          </div>

          <AnimatedDiv viewportOptions={{ amount: 0.2, delay: 0.3 }}>
            <AccentTextButtonUp title="Book A Call" />
          </AnimatedDiv>

          <AnimatedDiv
            viewportOptions={{ amount: 0.5, delay: 0.7 }}
            className="w-full py-10 "
          >
            <div className="w-full h-full flex justify-center items-center">
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("works");
                }}
                href="#works"
              >
                <Image
                  src={ArrowDown}
                  width={80}
                  height={120}
                  alt="arrow"
                  className="hover:animate-arrow-bounce cursor-pointer"
                />
              </Link>
            </div>
          </AnimatedDiv>
        </div>
      </div>
    </AnimatePresence>
  );
}
