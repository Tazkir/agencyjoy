"use client";

import AccentButtonUp from "@/components/CustomUI/Button/AccentButtonUp";

import ai from "../../public/product/ai.svg";
import ads from "../../public/product/ads.svg";
import analytic from "../../public/product/analytic.svg";
import cloud from "../../public/product/cloud.svg";
import data from "../../public/product/data.svg";
import real from "../../public/product/real.svg";
import security from "../../public/product/security.svg";
import serverless from "../../public/product/serverless.svg";
// import PhysicsProductCards from "@/components/NotFound/PhysicsProductCards";
import { StaticImageData } from "next/image";
import Physics from "@/components/NotFound/Physics";
import ProductCard from "@/components/Card/ProductCard";

type ProductProps = {
  title: string;
  icon: StaticImageData;
};

// Products data
const products: ProductProps[] = [
  { title: "AI-Driven Solutions", icon: ai },
  { title: "Serverless Computing", icon: serverless },
  { title: "Cloud Integration", icon: cloud },
  { title: "Data Insight", icon: data },
  { title: "Analytics", icon: analytic },
  { title: "API Security", icon: security },
  { title: "Real-Time", icon: real },
  { title: "Ad Targeting", icon: ads },
];

function NotFoundPage() {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center gap-8 py-52 relative">
      <div className="flex flex-col justify-center items-center gap-8 relative">
        <h3 className="font-medium text-[#FFFFFF] text-[18px] md:text-[20px] lg:text-[24px]">
          Page Not Found
        </h3>

        <h1 className="text-[100px] md:text-[150px] lg:text-[206px] font-medium bg-gradient-to-b from-[#171717] to-[#3D3D3D] inline-block text-transparent bg-clip-text">
          404
        </h1>

        <p className="font-manrope font-normal text-[#AFAFAF] text-[16px] md:text-[18px]">
          We can’t find the page you’re looking for.
        </p>

        <AccentButtonUp title="Back to Home" classNames="relative z-40" />
      </div>

      <div className="w-[90%] h-screen absolute bottom-0 isolate pointer-events-none">
        <Physics
          gravY={0.5}
          wallOptions={{ top: false, bottom: true, left: true, right: true }}
          frictionOptions={{ friction: 0.05, frictionAir: 0.005 }}
          mouseOptions={{ enable: true, angularStiffness: 0.1, stiffness: 0.1 }}
          densityOptions={{ enable: true, density: 0.001 }}
        >
          {products.map((product, index) => (
            <ProductCard
              title={product.title}
              icon={product.icon}
              className="w-full cursor-text relative z-40 pointer-events-auto"
              key={index}
            />
          ))}
        </Physics>
      </div>
    </div>
  );
}

export default NotFoundPage;
