"use client";

import AccentTextButtonUp from "@/components/CustomUI/Button/AccentTextButtonUp";
import SectionBadge from "@/components/CustomUI/SectionBadge/SectionBadge";
import { DescriptionText } from "@/components/CustomUI/Typography/text";
import ArrowDown from "../../../../public/svg/arrowdown.svg";
import Image from "next/image";
import Link from "next/link";
import { scrollToSection } from "@/lib/scrollToSection";

export default function OurMission() {
  return (
    <div
      id="mission"
      className="w-full min-h-screen relative flex justify-center items-center py-16"
    >
      <div className="w-full h-full flex flex-col justify-center items-center text-center gap-10 px-2">
        <SectionBadge title="Our Mission" />

        <div className="w-full flex flex-col justify-center items-center text-center">
          <h1 className="text-clamp-hero flex flex-wrap justify-center gap-2">
            We Drive
            <span className="text-clamp-hero text-[#E87811]">Businesses</span>
          </h1>

          <h1 className="text-clamp-hero flex flex-wrap justify-center gap-2">
            To The
            <span className="text-clamp-hero text-[#E87811]">Forefront</span>
            <span className="text-clamp-hero">Of The Industries</span>
          </h1>

          <h1 className="text-clamp-hero flex flex-wrap justify-center gap-2">
            Through Comprehensive
          </h1>

          <h1 className="text-clamp-hero flex flex-wrap justify-center gap-2">
            AI
            <span className="text-clamp-hero text-[#E87811]">Automation.</span>
          </h1>
        </div>

        <div className="lg:w-[40%]">
          <DescriptionText title="First impressions matter. That's why our mission is to create clean, enduring designs that elevate. First impressions matter. That's why our mission." />
        </div>

        <AccentTextButtonUp title="Book A Call" />

        <div className="w-full py-10 ">
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
        </div>
      </div>
    </div>
  );
}
