import AccentButtonUp from "@/components/CustomUI/Button/AccentButtonUp";
import SectionBadge from "@/components/CustomUI/SectionBadge/SectionBadge";
import {
  DescriptionText,
  TitleText,
} from "@/components/CustomUI/Typography/text";
import React from "react";

export default function Contact() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center gap-8 pt-28">
      <div className="flex flex-col justify-center items-center gap-8 px-2">
        <SectionBadge title="Let's Talk" />
        <TitleText title="We're Here To Help" />
        <DescriptionText title="Our team is ready to support you with expert advice & solutions." />
      </div>

      <div className="w-[90%] xl:w-[50%] h-full p-10 lg:p-20 gap-10 justify-center items-center bg-radial-button from-[#262626] to-[#141414] rounded-[22px] ">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <div className="w-full flex flex-col justify-center items-start">
            <label className="font-manrope font-normal text-[16px] lg:text-[18px]">
              Name *
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full h-14 text-[17px] focus:outline-none bg-transparent border-b placeholder:font-manrope placeholder:text-[17px] placeholder:text-[#626262]"
            />
          </div>

          <div className="w-full flex flex-col justify-center items-start">
            <label className="font-manrope font-normal text-[16px] lg:text-[18px]">
              Email *
            </label>
            <input
              type="text"
              placeholder="example@email.com"
              className="w-full h-14 text-[17px] focus:outline-none bg-transparent border-b placeholder:font-manrope placeholder:text-[17px] placeholder:text-[#626262]"
            />
          </div>

          <div className="w-full col-span-1 xl:col-span-2 flex flex-col justify-center items-start">
            <label className="font-manrope font-normal text-[16px] lg:text-[18px]">
              Company Name *
            </label>
            <input
              type="text"
              placeholder="Ex. StaticMania"
              className="w-full h-14 text-[17px] focus:outline-none bg-transparent border-b placeholder:font-manrope placeholder:text-[17px] placeholder:text-[#626262]"
            />
          </div>

          <div className="w-full  flex flex-col justify-center items-start">
            <label className="font-manrope font-normal text-[16px] lg:text-[18px]">
              Select Service *
            </label>
            <select
              defaultValue="Select Your Services"
              className="w-full h-14 text-[17px] focus:outline-none bg-transparent border-b placeholder:font-manrope placeholder:text-[17px] placeholder:text-[#626262] *:bg-[#141414] *:text-white"
            >
              <option disabled>Select Your Services</option>
              <option>Analytics & Reporting</option>
              <option>Brand Strategy</option>
              <option>Event Planning</option>
              <option>Advertising Campaigns</option>
              <option>Consulting Services</option>
            </select>
          </div>

          <div className="w-full flex flex-col justify-center items-start">
            <label className="font-manrope font-normal text-[16px] lg:text-[18px]">
              Project Budget *
            </label>
            <select
              defaultValue="Select Your Range"
              className="w-full h-14 text-[17px] focus:outline-none bg-transparent border-b placeholder:font-manrope placeholder:text-[17px] placeholder:text-[#626262] *:bg-[#141414] *:text-white"
            >
              <option disabled>Select Your Range</option>
              <option>Under $10.000</option>
              <option>$10.000 - $25.000</option>
              <option>$25.000 - $50.000</option>
              <option>Above $50.000</option>
              <option>Custom Budget</option>
            </select>
          </div>

          <div className="w-full col-span-1 xl:col-span-2 flex flex-col justify-center items-start">
            <label className="font-manrope font-normal text-[16px] lg:text-[18px]">
              Project Details *
            </label>
            <input
              type="text"
              placeholder="Tell us more about your project"
              className="w-full h-14 text-[17px] focus:outline-none bg-transparent border-b placeholder:font-manrope placeholder:text-[17px] placeholder:text-[#626262]"
            />
          </div>
        </div>

        <div className="w-full flex flex-col xl:flex-row justify-between items-center text-center gap-4 mt-16">
          <AccentButtonUp title="Submit" classNames="px-8 text-[16px]" />
          <h2 className="font-manrope font-normal text-[#AFAFAF] text-[16px] lg:text-[18px]">
            We will contact you within 24 business hours.
          </h2>
        </div>
      </div>
    </div>
  );
}
