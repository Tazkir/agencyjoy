import SectionBadge from "@/components/CustomUI/SectionBadge/SectionBadge";
import {
  DescriptionText,
  TitleText,
} from "@/components/CustomUI/Typography/text";
import PlanAndOrganize from "./PlanAndOrganize";
import Image from "next/image";
import Bg from "../../../../public/images/bg-grid.png";
import CustomProject from "./CustomProject";
import SmartAutomation from "./SmartAutomation";
import ProductCard from "@/components/Card/ProductCard";
import ai from "../../../../public/product/ai.svg";
import ads from "../../../../public/product/ads.svg";
import analytic from "../../../../public/product/analytic.svg";
import cloud from "../../../../public/product/cloud.svg";
import data from "../../../../public/product/data.svg";
import real from "../../../../public/product/real.svg";
import security from "../../../../public/product/security.svg";
import serverless from "../../../../public/product/serverless.svg";

export default function Services() {
  return (
    <div
      id="services"
      className="w-full min-h-screen flex flex-col justify-center items-center py-20 gap-10"
    >
      <div className="w-full flex flex-col justify-center items-center gap-6">
        <SectionBadge title="Our Services" />
        <TitleText title="Expertise That Drives Quality" />
        <div className="w-3/4 md:w-1/3">
          <DescriptionText title="With deep expertise, we deliver quality solutions that drive success and exceed industry standards consistently." />
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 justify-center items-center gap-6">
        <div className="w-[18em] sm:w-[23em] h-auto bg-radial-button from-[#262626] to-[#141414] flex flex-col gap-5 justify-start items-center rounded-2xl px-6 py-10 text-center bg-primary shadow-lg relative overflow-hidden">
          <div className="absolute w-full h-full flex justify-center items-center bottom-40">
            <Image
              src={Bg}
              width={100}
              height={100}
              alt=""
              className="object-contain opacity-25 w-3/5 h-full"
            />
          </div>

          <h3 className="text-3xl font-satoshi font-medium">Plan & Organize</h3>

          <PlanAndOrganize />

          <p className="font-manrope font-normal text-lg text-[#AFAFAF]">
            We enhance efficiency by integrating apps and reducing downtime.
          </p>
        </div>

        <div className="w-[18em] sm:w-[23em] h-auto bg-radial-button from-[#262626] to-[#141414] flex flex-col gap-5 justify-start items-center rounded-2xl px-6 py-10 text-center bg-primary shadow-lg relative overflow-hidden">
          <div className="absolute w-full h-full flex justify-center items-center bottom-40">
            <Image
              src={Bg}
              width={100}
              height={100}
              alt=""
              className="object-contain opacity-25 w-3/5 h-full"
            />
          </div>

          <h3 className="text-3xl font-satoshi font-medium">Custom Projects</h3>

          <CustomProject />

          <p className="font-manrope font-normal text-lg text-[#AFAFAF]">
            We created a versatile chatbot that understands diverse questions.
          </p>
        </div>

        <div className="w-[18em] sm:w-[23em] h-auto bg-radial-button from-[#262626] to-[#141414] flex flex-col gap-5 justify-start items-center rounded-2xl px-6 py-10 text-center bg-primary shadow-lg relative overflow-hidden">
          <div className="absolute w-full h-full flex justify-center items-center bottom-40">
            <Image
              src={Bg}
              width={100}
              height={100}
              alt=""
              className="object-contain opacity-25 w-3/5 h-full"
            />
          </div>

          <h3 className="text-3xl font-satoshi font-medium">
            Smart Automation
          </h3>

          <SmartAutomation />

          <p className="font-manrope font-normal text-lg text-[#AFAFAF]">
            We analyze operations and suggest AI solutions to boost efficiency.
          </p>
        </div>
      </div>

      <div className="w-[63%] justify-center items-center flex flex-wrap gap-7">
        <ProductCard title="AI-Driven Solutions" icon={ai} />
        <ProductCard title="Serverless Computing" icon={serverless} />
        <ProductCard title="Cloud Integration" icon={cloud} />
        <ProductCard title="Data Insight" icon={data} />
        <ProductCard title="Analytics" icon={analytic} />
        <ProductCard title="API Security" icon={security} />
        <ProductCard title="Real-Time" icon={real} />
        <ProductCard title="Ad Targeting" icon={ads} />
      </div>
    </div>
  );
}
