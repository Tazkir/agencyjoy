"use client";

import AccentButtonUp from "@/components/CustomUI/Button/AccentButtonUp";
import SectionBadge from "@/components/CustomUI/SectionBadge/SectionBadge";
import {
  DescriptionText,
  TitleText,
} from "@/components/CustomUI/Typography/text";
import FAQ from "@/components/Section/FAQ/FAQ";
import Image from "next/image";
import address from "../../../../public/svg/home-contact.svg";
import phone from "../../../../public/svg/phone-contact.svg";
import email from "../../../../public/svg/email-contact.svg";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import { AnimatedDiv } from "@/components/Motion/AnimatedComponents";
import { AnimatePresence } from "framer-motion";

const contactInfo = [
  {
    title: "Head Office",
    icon: address,
    list: [
      {
        no: 1,
        text: "5899 Alexys Highway Suite",
      },
      {
        no: 2,
        text: "678, NR, Nevada, USA",
      },
    ],
  },
  {
    title: "Phone",
    icon: phone,
    list: [
      {
        no: 1,
        text: "+1 234 567 890",
      },
      {
        no: 2,
        text: "+1 234 567 890",
      },
    ],
  },
  {
    title: "Email",
    icon: email,
    list: [
      {
        no: 1,
        text: "customer@agencyjoy.com",
      },
      {
        no: 2,
        text: "client@agencyjoy.com",
      },
    ],
  },
];

export default function Contact() {
  const { ref: sectionRef } = useInViewAnimation({
    threshold: 0.1,
  });

  return (
    <AnimatePresence>
      <div
        className="w-full min-h-screen flex flex-col justify-center items-center gap-[60px] pt-28"
        ref={sectionRef}
      >
        <div className="flex flex-col justify-center items-center gap-8 px-2">
          <AnimatedDiv viewportOptions={{ amount: 0.2, delay: 0.1 }}>
            <SectionBadge title="Let's Talk" />
          </AnimatedDiv>

          <AnimatedDiv viewportOptions={{ amount: 0.4, delay: 0.4 }}>
            <TitleText title="We're Here To Help" />
          </AnimatedDiv>

          <AnimatedDiv viewportOptions={{ amount: 0.6, delay: 0.6 }}>
            <DescriptionText title="Our team is ready to support you with expert advice & solutions." />
          </AnimatedDiv>
        </div>

        <AnimatedDiv
          viewportOptions={{ amount: 0.5, delay: 0.5 }}
          className="w-[90%] xl:w-[50%] h-full p-10 lg:p-20 gap-10 justify-center items-center bg-radial-button from-[#262626] to-[#141414] rounded-[22px] "
        >
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
        </AnimatedDiv>

        <div className="w-[80%] lg:w-[70%]">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-x-0 divide-y md:divide-x md:divide-y-0">
            {contactInfo.map((info, i) => (
              <AnimatedDiv
                viewportOptions={{
                  amount: (0.2 * i) / 2,
                  delay: (0.2 * i) / 2,
                }}
                className="w-full flex flex-col justify-center items-center gap-3 py-5 md:py-0"
                key={i}
              >
                <div className="w-61 h-16 p-4 border rounded-full bg-gradient-to-tl from-[#141414] to-[#3D3D3D]">
                  <Image
                    src={info.icon}
                    height={1000}
                    width={1000}
                    alt="Icon"
                    className="w-full h-full"
                  />
                </div>

                <h1 className="font-medium text-[18px] lg:text-[21px] text-[#FFFFFF]">
                  {info.title}
                </h1>

                <div className="flex flex-col justify-center items-center">
                  {info.list.map((item, i) => (
                    <h3
                      className="font-manrope font-normal text-[16px] lg:text-[18px] text-[#AFAFAF]"
                      key={i}
                    >
                      {item.text}
                    </h3>
                  ))}
                </div>
              </AnimatedDiv>
            ))}
          </div>
        </div>

        <FAQ />
      </div>
    </AnimatePresence>
  );
}
