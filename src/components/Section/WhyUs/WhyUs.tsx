"use client";

import brain from "../../../../public/lotties/brain.json";
import people from "../../../../public/lotties/people.json";
import thumbup from "../../../../public/lotties/thumbup.json";
import {
  DescriptionText,
  TitleText,
} from "@/components/CustomUI/Typography/text";
import AccentButtonDown from "@/components/CustomUI/Button/AccentButtonDown";
import { scrollToSection } from "@/lib/scrollToSection";
import Link from "next/link";
import BenefitsCard from "@/components/Card/BenefitsCard";
import SectionBadge from "@/components/CustomUI/SectionBadge/SectionBadge";

export default function WhyUs() {
  const brainLottie = {
    loop: true,
    autoplay: true,
    animationData: brain,
    mode: "normal",
  };

  const thumbUpLottie = {
    loop: true,
    autoplay: true,
    animationData: thumbup,
    mode: "normal",
  };

  const peopleLottie = {
    loop: true,
    autoplay: true,
    animationData: people,
    mode: "normal",
  };

  return (
    <div
      id="whyus"
      className="w-full min-h-screen relative flex flex-col justify-center items-center gap-14"
    >
      <div className="w-full flex flex-col justify-center items-center gap-4">
        <SectionBadge title="Why Us" />

        <div className="flex flex-col justify-center items-center text-center">
          <TitleText title="Experience the Benefits" />
          <TitleText title="of Our Expertise" />
        </div>

        <DescriptionText title="That drives impactful gain powerful results" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-6">
        <BenefitsCard
          title="Innovative Approach"
          desc="Look for works that reflect a unique character and differentiate in
            a crowded marketplace"
          lottieFile={brainLottie}
        />

        <BenefitsCard
          title="Seamless Experience"
          desc="A seamless user experience across all devices, ensuring every
            interaction connects with the user."
          lottieFile={thumbUpLottie}
        />

        <BenefitsCard
          title="Ongoing Partnership"
          desc="Find a new partner easily, not just providers, who offer ongoing
            support even after the project ends."
          lottieFile={peopleLottie}
        />
      </div>

      <Link
        href="#pricing"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("pricing");
        }}
        className="hover:text-gray-300"
      >
        <AccentButtonDown title="See Pricing" />
      </Link>
    </div>
  );
}
