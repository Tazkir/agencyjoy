import AccentButtonUp from "@/components/CustomUI/Button/AccentButtonUp";
import SectionBadge from "@/components/CustomUI/SectionBadge/SectionBadge";
import { TitleText } from "@/components/CustomUI/Typography/text";
import { CheckCircle } from "lucide-react";
import React from "react";

const features = [
  "Up to 50 users",
  "Priority support",
  "Enhanced Security",
  "Advanced Analytics",
  "Custom workflows",
];

export default function Pricing() {
  return (
    <div
      id="pricing"
      className="w-full relative flex justify-center items-center py-16"
    >
      <div className="w-full flex flex-col justify-center items-center gap-5">
        <SectionBadge title="Simple Pricing" />

        <TitleText title="Transparent Pricing Plans" />

        <div className="w-full md:w-[90%] lg:w-[80%] xl:w-[60%] flex flex-col lg:flex-row justify-center items-center gap-7 py-14 px-5 *:w-full *:h-auto *:p-8 *:flex *:flex-col *:justify-start *:items-start *:gap-3 *:rounded-3xl *:bg-gradient-to-t *:from-[#141414] *:to-[#262626]">
          <div className="flex-[1.1] border">
            <h1 className="font-medium text-clamp-title-pricing">Standard</h1>
            <h4 className="font-manrope text-clamp-desc-pricing text-[#AFAFAF]">
              Ideal for small teams.
            </h4>

            <h1 className="flex justify-start items-end font-bold text-[#FFFFFF] text-2xl md:text-4xl gap-1">
              $900
              <span className="font-manrope text-lg font-normal text-[#626262]">
                /month
              </span>
            </h1>
            <div className="w-full justify-center items-center my-2">
              <AccentButtonUp title="Get Started" classNames="w-full" />
            </div>

            <div className="w-full justify-center items-start flex flex-col gap-5">
              <h4 className="font-manrope font-normal text-[#626262]">
                What&apos;s Included:
              </h4>

              <div className="w-full flex flex-col gap-4">
                <div className="flex gap-2 justify-start items-center">
                  <CheckCircle className="w-5 h-5 text-[#919191]" />
                  <p className="font-manrope font-normal text-[#919191]">
                    Up to 10 users
                  </p>
                </div>

                <div className="flex gap-2 justify-start items-center">
                  <CheckCircle className="w-5 h-5 text-[#919191]" />
                  <p className="font-manrope font-normal text-[#919191]">
                    Basic support
                  </p>
                </div>

                <div className="flex gap-2 justify-start items-center">
                  <CheckCircle className="w-5 h-5 text-[#919191]" />
                  <p className="font-manrope font-normal text-[#919191]">
                    Standard features
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-[2] border">
            <div className="w-full flex justify-start items-center gap-2">
              <h1 className="font-medium text-clamp-title-pricing">Pro</h1>
              <div className="flex justify-center items-center bg-[#262626] border rounded-full">
                <p className="px-4 py-1 font-manrope font-normal text-sm text-[#FFFFFF] ">
                  Popular
                </p>
              </div>
            </div>
            <h4 className="font-manrope text-clamp-desc-pricing text-[#AFAFAF]">
              Designed for expanding teams and advanced needs.
            </h4>

            <h1 className="flex justify-start items-end font-bold text-[#FFFFFF] text-2xl md:text-4xl gap-1">
              $1,600
              <span className="font-manrope text-lg font-normal text-[#626262]">
                /month
              </span>
            </h1>

            <div className="w-full justify-center items-center my-2">
              <AccentButtonUp title="Get Started" classNames="w-full" />
            </div>

            <div className="w-full justify-center items-start flex flex-col gap-5">
              <h4 className="font-manrope font-normal text-[#626262]">
                What&apos;s Included:
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-between items-start w-full">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-[#919191] shrink-0" />
                    <p className="font-manrope font-normal text-[#919191]">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
