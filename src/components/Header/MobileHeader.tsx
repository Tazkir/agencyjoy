"use client";

import Image from "next/image";
import Logo from "../../../public/svg/logo.svg";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import PrimaryButton from "../CustomUI/Button/PrimaryButton";
import { scrollToSection } from "@/lib/scrollToSection";
import { MotionDiv } from "../Motion/motion";
import { AnimatePresence } from "framer-motion";
import { menuVariants } from "../Motion/variants";
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

function MobileHeader() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <nav className="w-full h-auto flex flex-col justify-center items-center gap-5 py-[13px] px-[20px] bg-background/30 backdrop-blur-lg shadow-md rounded-3xl overflow-hidden border">
        <div className="w-full flex justify-between items-center">
          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              router.push("/");
              scrollToSection("hero");
            }}
          >
            <Image src={Logo} width={100} height={100} alt="Logo" />
          </Link>

          {open ? (
            <X
              className="w-6 h-6 text-[#999999] cursor-pointer"
              onClick={() => setOpen((prev) => !prev)}
            />
          ) : (
            <Menu
              className="w-6 h-6 text-[#999999] cursor-pointer"
              onClick={() => setOpen((prev) => !prev)}
            />
          )}
        </div>

        <AnimatePresence>
          {open && (
            <MotionDiv
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="w-full flex flex-col justify-center items-center gap-2"
            >
              <hr className="bg-white h-[0.2px] w-[70%]" />

              <ul className="flex flex-col justify-center items-center gap-5 font-manrope text-[#919191] font-semibold">
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
                <li>
                  <Link href="/term" className="hover:text-gray-300">
                    Term & Condition
                  </Link>
                </li>
                <li>
                  <Link href="/404" className="hover:text-gray-300">
                    404
                  </Link>
                </li>
                <li>
                  <PrimaryButton
                    classNames="w-[10em] px-2 text-base text-white"
                    title="Let's Talk"
                    onClick={(e) => {
                      e.preventDefault();
                      router.push(`/contact`);
                    }}
                  />
                </li>
              </ul>
            </MotionDiv>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}

export default MobileHeader;
