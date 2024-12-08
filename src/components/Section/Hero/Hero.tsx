"use client";

import PrimaryButtonDown from "@/components/CustomUI/Button/PrimaryButtonDown";
import Marquee from "@/components/Marquee/marquee";
import { DescriptionText } from "@/components/CustomUI/Typography/text";
import { Badge } from "@/components/ui/badge";
import { scrollToSection } from "@/lib/scrollToSection";
import Link from "next/link";

export default function Hero() {
  return (
    <div
      id="hero"
      className="w-full min-h-screen relative flex justify-center items-center"
    >
      <div className="absolute inset-0 -z-10 flex justify-start items-center">
        <div className="w-[80%] h-full bg-grid-slate-200 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] opacity-50" />
      </div>
      <div className="w-full h-screen relative z-10 flex flex-col justify-center items-center px-2">
        <Badge
          variant="outline"
          className="font-manrope font-normal md:text-sm text-xs flex justify-center items-center gap-2"
        >
          <div className="w-2 h-2 rounded-full bg-green-400 animate-[btnpulse_2s_infinite]" />
          Available now, only 3 spots left
        </Badge>

        <div className="w-full flex flex-col justify-center items-center gap-5">
          <div className="flex flex-col justify-center items-center text-center">
            <h1 className="text-clamp-hero text-[#E87811]">
              Innovative Agency
            </h1>
            <h1 className="text-clamp-hero">Beyond ✦ Limits.</h1>
            <h1 className="text-clamp-hero text-[#E87811]">
              Amplified With AI.
            </h1>
          </div>

          <DescriptionText title="Design services at your fingertips, Pause or cancel anytime." />

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

          <div className="w-full flex flex-col gap-5 justify-center items-center py-7">
            <h3 className="font-manrope text-base font-semibold text-[#919191]">
              Our services are featured on
            </h3>
            <Marquee />
          </div>
        </div>
      </div>
    </div>
  );
}
