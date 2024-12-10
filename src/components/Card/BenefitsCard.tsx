"use client";

import Image from "next/image";
import Bg from "../../../public/images/bg-grid.png";
import dynamic from "next/dynamic";
import Particles from "../MagicUi/particles";

const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

type LottieOptions = {
  loop: boolean;
  autoplay: boolean;
  animationData: object;
};

type CardProps = {
  title: string;
  desc: string;
  lottieFile: LottieOptions;
};

export default function BenefitsCard({ title, desc, lottieFile }: CardProps) {
  return (
    <div className="w-[18em] sm:w-[20em] h-[25em] bg-radial-button from-[#262626] to-[#141414] flex flex-col gap-5 justify-start items-center rounded-2xl px-6 py-6 text-center bg-primary shadow-lg">
      <div className="relative overflow-hidden w-full h-[48%] flex justify-center items-center bg-radial-button from-[#171717] to-[#050505] rounded-xl">
        <Particles
          className="absolute inset-0"
          quantity={20}
          ease={80}
          color={"#ffffff"}
        />

        <div className="absolute w-full h-full top-0">
          <Image
            src={Bg}
            width={100}
            height={100}
            alt=""
            className="object-contain opacity-30 w-full h-full"
          />
        </div>

        <div className="w-20 h-20 z-30 rounded-full flex justify-center items-center bg-radial-button from-[#E89548] to-[#E46F03] border border-[#E89548]">
          <Lottie options={lottieFile} height={100} width={100} />
        </div>
      </div>
      <h3 className="text-2xl font-satoshi font-medium">{title}</h3>

      <p className="font-manrope font-normal text-lg text-[#AFAFAF]">{desc}</p>
    </div>
  );
}
