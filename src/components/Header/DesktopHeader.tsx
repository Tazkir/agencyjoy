"use client";

import Image from "next/image";
import Logo from "../../../public/svg/logo.svg";
import PrimaryButton from "../CustomUI/Button/PrimaryButton";
import Link from "next/link";
import { scrollToSection } from "@/lib/scrollToSection";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
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

function DesktopHeader() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <nav className="w-[854px] h-auto flex justify-between items-center py-[13px] px-[46px] bg-background/30 backdrop-blur-md shadow-md border rounded-full">
        <Link
          href="/"
          onClick={(e) => {
            e.preventDefault();
            router.push("/");
            scrollToSection("hero");
          }}
        >
          <Image src={Logo} alt="Logo" width={104} height={30} />
        </Link>

        <ul className="flex justify-center items-center gap-5 font-manrope text-[#919191] font-semibold">
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

          <li className="relative">
            <button
              className="hover:text-gray-300 flex items-center gap-2 relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onClick={toggleDropdown}
              aria-expanded={isDropdownOpen}
            >
              Pages{" "}
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isDropdownOpen && (
              <div
                className="absolute left-1/2 -translate-x-1/2 w-max top-14 flex justify-center items-center bg-background shadow-md border rounded-xl"
                aria-expanded={isDropdownOpen}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <div className="flex flex-col justify-center items-start gap-5 p-[28px] font-manrope text-[#919191] font-semibold">
                  <Link
                    onClick={toggleDropdown}
                    href="/contact"
                    className="hover:text-gray-300"
                  >
                    Contact
                  </Link>
                  <Link
                    onClick={toggleDropdown}
                    href="/term"
                    className="hover:text-gray-300"
                  >
                    Term & Condition
                  </Link>
                  <Link
                    onClick={toggleDropdown}
                    href="/404"
                    className="hover:text-gray-300"
                  >
                    404
                  </Link>
                </div>
              </div>
            )}
          </li>
        </ul>

        <PrimaryButton title="Let's Talk" />
      </nav>
    </>
  );
}

export default DesktopHeader;
