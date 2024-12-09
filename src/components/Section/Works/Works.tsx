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

  return (
    <div
      id="works"
      className="w-full h-auto relative py-20 flex flex-col justify-center items-center gap-16"
    >
      <div className="w-full flex flex-col justify-center items-center gap-5">
        <SectionBadge title="Work That Make Us Proud" />

        <div className="flex flex-col justify-center items-center text-center">
          <TitleText title="Recent Works, Notable Impact" />
        </div>

        <div className="w-[90%] sm:w-[70%] flex xl:flex-row flex-col-reverse justify-center items-center gap-20 pt-5">
          <div className="flex-1">
            <AccordionList openIndex={openIndex} handleToggle={handleToggle} />
          </div>

          <div className="flex-1 w-full">
            <ImagesList images={images} openIndex={openIndex} />
          </div>
        </div>
      </div>

      <div className="w-[80%] md:w-[90%] max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 md:*:border-r md:last:*:border-none max-md:first:*:border-b max-md:first:*:border-r [&:nth-child(2)]:*:border-b md:[&:nth-child(2)]:*:border-b-0 [&:nth-child(3)]:*:border-r">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-8 text-center"
            >
              <h3 className="text-clamp-h2 font-medium mb-2">{metric.value}</h3>
              <p className="text-clamp-h3 text-[#AFAFAF]">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
