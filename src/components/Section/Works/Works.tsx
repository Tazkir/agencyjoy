"use client";

import { useState } from "react";
import SectionBadge from "@/components/CustomUI/SectionBadge/SectionBadge";
import { TitleText } from "@/components/CustomUI/Typography/text";
import image1 from "../../../../public/works/1.png";
import image2 from "../../../../public/works/2.png";
import image3 from "../../../../public/works/3.png";
import logo1 from "../../../../public/partners/1.svg";
import logo2 from "../../../../public/partners/3.svg";
import logo3 from "../../../../public/partners/2.svg";
import svg1 from "../../../../public/svg/charts.svg";
import svg2 from "../../../../public/svg/charts2.svg";
import ImagesList from "./ImagesList";
import { StaticImageData } from "next/image";
import AccordionList from "./AccordionList";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import { AnimatePresence } from "framer-motion";
import { AnimatedDiv } from "@/components/Motion/AnimatedComponents";

interface Metric {
  value: string;
  label: string;
}

const metrics: Metric[] = [
  {
    value: "150k+",
    label: "Active Users",
  },
  {
    value: "4.9",
    label: "Rating out of 5",
  },
  {
    value: "99k+",
    label: "Positive Reviews",
  },
  {
    value: "85k+",
    label: "Users Satisfied",
  },
];

export type ImagesProps = {
  id: number;
  img: StaticImageData;
  logo: string;
  svg: string;
};

const images: ImagesProps[] = [
  { id: 1, img: image1, logo: logo1, svg: svg1 },
  { id: 2, img: image2, logo: logo2, svg: svg1 },
  { id: 3, img: image3, logo: logo3, svg: svg2 },
];

export default function Works() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const handleToggle = (index: number) => {
    if (index !== openIndex) {
      setOpenIndex(index);
    }
  };

  const { ref: sectionRef } = useInViewAnimation({
    threshold: 0.1,
  });

  return (
    <AnimatePresence>
      <div
        id="works"
        className="w-full h-auto relative py-20 flex flex-col justify-center items-center gap-16"
      >
        <div
          className="w-full h-auto relative py-20 flex flex-col justify-center items-center gap-16"
          ref={sectionRef}
        >
          <div className="w-full flex flex-col justify-center items-center gap-5">
            <AnimatedDiv viewportOptions={{ amount: 0.2, delay: 0.1 }}>
              <SectionBadge title="Work That Make Us Proud" />
            </AnimatedDiv>

            <AnimatedDiv
              viewportOptions={{ amount: 0.2, delay: 0.2 }}
              className="flex flex-col justify-center items-center text-center"
            >
              <TitleText title="Recent Works, Notable Impact" />
            </AnimatedDiv>

            <div className="w-[90%] sm:w-[70%] flex xl:flex-row flex-col-reverse justify-center items-center gap-20 pt-5">
              <div className="flex-1">
                <AnimatedDiv viewportOptions={{ amount: 0.2, delay: 0.3 }}>
                  <AccordionList
                    openIndex={openIndex}
                    handleToggle={handleToggle}
                  />
                </AnimatedDiv>
              </div>

              <div className="flex-1 w-full">
                <AnimatedDiv viewportOptions={{ amount: 0.7, delay: 1 }}>
                  <ImagesList images={images} openIndex={openIndex} />
                </AnimatedDiv>
              </div>
            </div>
          </div>

          <div className="w-[80%] md:w-[90%] max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 md:*:border-r md:last:*:border-none max-md:first:*:border-b max-md:first:*:border-r [&:nth-child(2)]:*:border-b md:[&:nth-child(2)]:*:border-b-0 [&:nth-child(3)]:*:border-r">
              {metrics.map((metric, index) => (
                <AnimatedDiv
                  key={index}
                  viewportOptions={{ amount: 0.7, delay: index * 0.3 }}
                >
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center p-8 text-center"
                  >
                    <h3 className="text-clamp-h2 font-medium mb-2">
                      {metric.value}
                    </h3>
                    <p className="text-clamp-h3 text-[#AFAFAF]">
                      {metric.label}
                    </p>
                  </div>
                </AnimatedDiv>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
}
