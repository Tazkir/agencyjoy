"use client";

import Link from "next/link";
import Logo from "../../../public/svg/logo.svg";
import { scrollToSection } from "@/lib/scrollToSection";
import Image from "next/image";
import AccentTextButtonUp from "../CustomUI/Button/AccentTextButtonUp";
import { Separator } from "../ui/separator";
import { useRouter } from "next/navigation";

const menus = [
  {
    title: "Why Us",
    link: "whyus",
  },

  {
    title: "Mission",
    link: "mission",
  },

  {
    title: "Works",
    link: "works",
  },

  {
    title: "Services",
    link: "services",
  },
];

export default function Footer() {
  const router = useRouter();
  return (
    <div className="w-full h-full flex justify-center items-center py-10">
      <div className="w-[90%] lg:w-[80%] h-auto border rounded-3xl relative flex justify-center items-center py-10 px-3 lg:p-24">
        <div className="absolute inset-0 -z-10 flex justify-center items-center">
          <div className="w-full h-full bg-grid-slate-200 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] opacity-20" />
        </div>

        <div className="w-full h-full flex flex-col justify-center items-center gap-6">
          <Link
            onClick={(e) => {
              e.preventDefault();
              router.push("/");
              scrollToSection("hero");
            }}
            href="/"
          >
            <Image src={Logo} alt="Logo" width={120} height={60} />
          </Link>

          <div className="w-full xl:w-1/2 text-center px-1">
            <h1 className="font-medium text-clamp-footer">
              Let’s Turn Your Dream Into Reality
            </h1>
          </div>

          <div className="w-full xl:w-1/4 text-center space-x-3 px-3">
            <p className="font-manrope font-normal text-[16px] md:text-[18px] text-[#919191]">
              We bring your vision to life with creativity and precision. Let’s
              make it happen.
            </p>
          </div>

          <AccentTextButtonUp title="Book A Call" classNames="text-[24px]" />

          <Separator className="my-4 w-1/2 h-[2px] bg-gradient-to-r from-transparent from-0% via-[#262626] via-50% to-transparent to-100%" />

          <div className="w-full xl:w-1/3 flex flex-col justify-center items-center space-x-3 text-center">
            <ul className="flex flex-wrap justify-center items-center gap-5 font-manrope text-[#AFAFAF] text-[16px] md:text-[18px] font-normal">
              {menus.map((menu, i) => (
                <li key={i}>
                  <Link
                    href={`/#${menu.link}`}
                    onClick={(e) => {
                      e.preventDefault();
                      router.push(`/#${menu.link}`);
                      scrollToSection(`${menu.link}`);
                    }}
                    className="hover:text-gray-300"
                  >
                    {menu.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className="hover:text-gray-300">
                  Contact
                </Link>
              </li>
            </ul>

            <div className="flex flex-col justify-center items-center gap-5 mt-10">
              <h3 className="text-[#919191] text-[16px] md:text-[18px] font-manrope font-normal">
                Copyright AgencyJoy. All right reserved.
              </h3>

              <p className="text-[#919191] text-[16px] md:text-[18px] font-manrope font-normal">
                Reference and Resources{" "}
                <Link
                  target="_blank"
                  href="https://www.framer.com/marketplace/templates/agencyjoy/"
                  className="text-[#E46F03]"
                >
                  Click Here
                </Link>
              </p>

              <p className="text-[#919191] text-[16px] md:text-[18px] font-manrope font-normal">
                Made by{" "}
                <Link
                  target="_blank"
                  href="https://tazkirfurqan.online/"
                  className="text-[#E46F03]"
                >
                  Tazkir Furqan
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
