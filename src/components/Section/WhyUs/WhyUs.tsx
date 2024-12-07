"use client";

import { Badge } from "@/components/ui/badge";
import Bg from "../../../../public/images/bg-grid.png";
import Image from "next/image";
import brain from "../../../../public/lotties/brain.json";
import people from "../../../../public/lotties/people.json";
import thumbup from "../../../../public/lotties/thumbup.json";
import dynamic from "next/dynamic";
import { DescriptionText, TitleText } from "@/components/Typography/text";
import AccentButtonDown from "@/components/Button/AccentButtonDown";
import { scrollToSection } from "@/lib/scrollToSection";
import Link from "next/link";

const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

export default function WhyUs() {
  const brainLottie = {
    loop: true,
    autoplay: true,
    animationData: brain,
  };

  const thumbUpLottie = {
    loop: true,
    autoplay: true,
    animationData: thumbup,
  };

  const peopleLottie = {
    loop: true,
    autoplay: true,
    animationData: people,
  };

  return (
    <div
      id="whyus"
      className="w-full min-h-screen relative flex flex-col justify-center items-center gap-14"
    >
      <div className="w-full flex flex-col justify-center items-center gap-4">
        <Badge
          variant="outline"
          className="font-manrope text-[#AFAFAF] text-sm px-5 py-1"
        >
          Why Us
        </Badge>

        <div className="flex flex-col justify-center items-center text-center">
          <TitleText title="Experience the Benefits" />
          <TitleText title="of Our Expertise" />
        </div>

        <DescriptionText title="That drives impactful gain powerful results" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-6 *:w-[20em] *:h-[25em] *:bg-gray-500 *:flex *:flex-col *:gap-5 *:justify-start *:items-center *:rounded-2xl *:px-6 *:py-6 *:text-center *:bg-primary *:shadow-lg">
        <div>
          <div className="relative overflow-hidden w-full h-[48%] flex justify-center items-center bg-radial-button from-[#171717] to-[#050505] rounded-xl">
            <div className="absolute w-full h-full top-0">
              <Image
                src={Bg}
                width={100}
                height={100}
                alt=""
                className="object-contain opacity-30 w-full h-full"
              />
            </div>
            <div className="w-20 h-20 z-20 rounded-full flex justify-center items-center bg-radial-button from-[#E89548] to-[#E46F03] border border-[#E89548]">
              <Lottie options={brainLottie} height={100} width={100} />
            </div>
          </div>
          <h3 className="text-2xl font-satoshi">Innovative Approach</h3>

          <p className="font-manrope font-normal text-lg text-[#AFAFAF]">
            Look for works that reflect a unique character and differentiate in
            a crowded marketplace
          </p>
        </div>

        <div>
          <div className="relative overflow-hidden w-full h-[48%] flex justify-center items-center bg-radial-button from-[#171717] to-[#050505] rounded-xl">
            <div className="absolute w-full h-full top-0">
              <Image
                src={Bg}
                width={100}
                height={100}
                alt=""
                className="object-contain opacity-30 w-full h-full"
              />
            </div>
            <div className="w-20 h-20 rounded-full flex justify-center items-center bg-radial-button from-[#E89548] to-[#E46F03] border border-[#E89548]">
              <Lottie options={thumbUpLottie} height={100} width={100} />
            </div>
          </div>
          <h3 className="text-2xl font-medium">Seamless Experience</h3>
          <p className="font-manrope font-normal text-lg text-[#AFAFAF]">
            A seamless user experience across all devices, ensuring every
            interaction connects with the user.
          </p>
        </div>

        <div>
          <div className="relative overflow-hidden w-full h-[48%] flex justify-center items-center bg-radial-button from-[#171717] to-[#050505] rounded-xl">
            <div className="absolute w-full h-full top-0">
              <Image
                src={Bg}
                width={100}
                height={100}
                alt=""
                className="object-contain opacity-20 w-full h-full"
              />
            </div>
            <div className="w-20 h-20 rounded-full flex justify-center items-center bg-radial-button from-[#E89548] to-[#E46F03] border border-[#E89548]">
              <Lottie options={peopleLottie} height={100} width={100} />
            </div>
          </div>
          <h3 className="text-2xl font-medium">Ongoing Partnership</h3>
          <p className="font-manrope font-normal text-lg text-[#AFAFAF]">
            Find a new partner easily, not just providers, who offer ongoing
            support even after the project ends.
          </p>
        </div>
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
