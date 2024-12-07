"use client";

import Image from "next/image";
import Logo from "../../../public/svg/logo.svg";
import PrimaryButton from "../Button/PrimaryButton";
import Link from "next/link";
import { scrollToSection } from "@/lib/scrollToSection";
import { useRouter } from "next/navigation";

function DesktopHeader() {
  const route = useRouter();

  const onSubmit = () => {
    route.push("/contact");
  };
  return (
    <>
      <nav className="w-[854px] h-auto flex justify-between items-center py-[13px] px-[46px] bg-background/30 backdrop-blur-md shadow-sm shadow-white rounded-full">
        <Link href="/">
          <Image src={Logo} alt="Logo" width={104} height={30} />
        </Link>

        <ul className="flex justify-center items-center gap-5 font-manrope text-[#919191] font-semibold">
          <li>
            <Link
              href="#whyus"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("whyus");
              }}
              className="hover:text-gray-300"
            >
              Why Us
            </Link>
          </li>
          <li>
            <Link
              href="#mission"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("mission");
              }}
              className="hover:text-gray-300"
            >
              Mission
            </Link>
          </li>
          <li>
            <Link
              href="#works"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("works");
              }}
              className="hover:text-gray-300"
            >
              Works
            </Link>
          </li>
          <li>
            <Link
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("services");
              }}
              className="hover:text-gray-300"
            >
              Services
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-gray-300">
              Pages
            </Link>
          </li>
        </ul>

        <PrimaryButton
          title="Let's Talk"
          onClick={() => {
            onSubmit();
          }}
        />
      </nav>
    </>
  );
}

export default DesktopHeader;
