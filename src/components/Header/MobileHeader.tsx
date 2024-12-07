"use client";

import Image from "next/image";
import Logo from "../../../public/svg/logo.svg";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import PrimaryButton from "../Button/PrimaryButton";
import { scrollToSection } from "@/lib/scrollToSection";
import { MotionDiv } from "../Motion/motion";
import { AnimatePresence } from "framer-motion";
import { menuVariants } from "../Motion/variants";

function MobileHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="w-full h-auto flex flex-col justify-center items-center gap-5 py-[13px] px-[20px] bg-background/30 backdrop-blur-lg shadow-md rounded-3xl overflow-hidden border">
        <div className="w-full flex justify-between items-center">
          <Link href="/">
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
                <li>
                  <PrimaryButton
                    classNames="w-[10em] px-2 text-base text-white"
                    title="Let's Talk"
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
