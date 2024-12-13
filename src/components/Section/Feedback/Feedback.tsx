"use client";

import SectionBadge from "@/components/CustomUI/SectionBadge/SectionBadge";
import { TitleText } from "@/components/CustomUI/Typography/text";
import feedback from "../../../../public/user/feedback.jpg";
import zapfast from "../../../../public/svg/zapfast.svg";
import brightnest from "../../../../public/svg/brightnest.svg";
import creativeedge from "../../../../public/svg/creativeedge.svg";
import primecore from "../../../../public/svg/primecore.svg";
import Image from "next/image";
import { Star } from "lucide-react";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import { AnimatedDiv } from "@/components/Motion/AnimatedComponents";
import { AnimatePresence } from "framer-motion";

interface TestimonialProps {
  logo: string;
  quote: string;
  author: string;
  role: string;
}

const testimonials: TestimonialProps[] = [
  {
    logo: brightnest,
    quote:
      "The creativity and AI expertise from AgencyJoy set a new benchmark for our industry. Highly recommended!",
    author: "Agus Blimbing",
    role: "Tech Manager",
  },
  {
    logo: creativeedge,
    quote:
      "The blend of AI and creativity at AgencyJoy transformed our vision into reality. Exceptional support!",
    author: "Steve Kebalen",
    role: "AI Developer",
  },
  {
    logo: primecore,
    quote:
      "AgencyJoy's cutting-edge AI and creativity made a significant difference in our project's success. Fantastic work!",
    author: "John Kepanjen",
    role: "E-Commerce Stacks",
  },
];

export default function Feedback() {
  const { ref: sectionRef } = useInViewAnimation({
    threshold: 0.1,
  });

  return (
    <AnimatePresence>
      <div
        id="feedback"
        className="w-full relative flex flex-col justify-center items-center gap-14 pb-14"
        ref={sectionRef}
      >
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <AnimatedDiv viewportOptions={{ amount: 0.2, delay: 0.1 }}>
            <SectionBadge title="What Our Users Say" />
          </AnimatedDiv>

          <AnimatedDiv viewportOptions={{ amount: 0.3, delay: 0.3 }}>
            <TitleText title="Trusted by Businesses Like Yours" />
          </AnimatedDiv>
        </div>

        <div className="w-[70%] flex flex-col lg:flex-row gap-0 lg:gap-10 justify-center items-center">
          <AnimatedDiv
            viewportOptions={{ amount: 0.4, delay: 0.4 }}
            className="flex-1"
          >
            <Image
              src={feedback}
              width={1000}
              height={1000}
              alt=""
              className="w-full h-full object-contain rounded-3xl"
            />
          </AnimatedDiv>

          <AnimatedDiv
            viewportOptions={{ amount: 0.5, delay: 0.5 }}
            className="flex-[1.4] flex flex-col justify-center items-center lg:items-start space-y-5"
          >
            <Image
              src={zapfast}
              width={1000}
              height={1000}
              alt=""
              className="w-28 h-28 object-contain"
            />

            <h1 className="font-manrope font-medium text-[#DEDEDE] capitalize text-clamp-feedback lg:text-start text-center">
              &#34;AgencyJoy&#39;s fusion of AI and innovation set our project
              apart. Their solutions are second to none.&#34;
            </h1>

            <div className="flex flex-col lg:flex-row justify-center items-center gap-0 lg:gap-4">
              <h2 className="text-3xl font-medium text-[#DEDEDE] text-[22px] lg:text-[26px]">
                Zidane Muharto
              </h2>
              <h3 className="font-manrope font-normal text-[#AFAFAF] text-[16px] lg:text-[18px]">
                Chief Techology Officer
              </h3>
            </div>

            <hr className="border-[0.3px] w-full" />

            <div className="w-full lg:w-[80%] flex justify-start items-center gap-5">
              <div className="flex justify-start items-center gap-3">
                <h1 className="font-medium text-[30px]">73%</h1>
                <p className="font-manrope font-normal text-[#919191] text-[17px]">
                  Sales increase in first month.
                </p>
              </div>

              <div className="flex justify-start items-center gap-3">
                <h1 className="font-medium text-[30px]">5X</h1>
                <p className="font-manrope font-normal text-[#919191] text-[17px]">
                  Faster customer resolutions.
                </p>
              </div>
            </div>
          </AnimatedDiv>
        </div>

        <div className="w-full flex justify-center items-center">
          <div className="w-[85%] lg:w-[70%] grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#3D3D3D]">
            {testimonials.map((testimonial, index) => (
              <AnimatedDiv
                viewportOptions={{
                  amount: index * 0.5,
                  delay: (index * 0.5) / 2,
                }}
                className="flex flex-col items-center gap-5 py-8 md:py-0 px-5"
                key={index}
              >
                <div className="w-36 h-36 flex justify-center items-center">
                  <Image
                    src={testimonial.logo}
                    width={100}
                    height={100}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      className="w-5 h-5"
                      stroke="transparent"
                      fill="#EF8B2E"
                      key={index}
                    />
                  ))}
                </div>

                <h1 className="font-manrope font-normal text-[#AFAFAF] text-center text-[18px]">
                  &quot;{testimonial.quote}&quot;
                </h1>

                <div className="w-full flex flex-col justify-center items-center">
                  <h2 className="text-[21px] font-medium">
                    {testimonial.author}
                  </h2>

                  <h3 className="font-manrope font-normal text-[#919191] text-[16x]">
                    {testimonial.role}
                  </h3>
                </div>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
}
