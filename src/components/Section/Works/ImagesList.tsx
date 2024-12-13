import Image from "next/image";
import { MotionDiv } from "@/components/Motion/motion";
import { AnimatePresence } from "framer-motion";
import { ImagesProps } from "./Works";

type ImagesListProps = {
  images: ImagesProps[];
  openIndex: number;
};

export default function ImagesList({ images, openIndex }: ImagesListProps) {
  return (
    <>
      <MotionDiv
        className="w-full h-full flex justify-center items-center rounded-3xl bg-radial-button from-[#262626] to-[#141414] p-7 overflow-hidden"
        layout
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <AnimatePresence mode="wait">
          {images.map(
            (image, index) =>
              openIndex === index && (
                <MotionDiv
                  key={index}
                  initial={{
                    opacity: 0,
                    filter: "blur(10px)",
                  }}
                  animate={{
                    opacity: 1,
                    filter: "blur(0px)",
                  }}
                  exit={{ opacity: 0, filter: "blur(10px)" }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="w-full h-[20em] relative overflow-hidden"
                >
                  <Image
                    src={image.img}
                    width={1000}
                    height={1000}
                    alt={`Work ${index + 1}`}
                    className="w-full h-full object-cover rounded-2xl"
                  />

                  <div className="absolute inset-0 z-10 w-full h-full flex justify-between items-end px-5 pb-2">
                    <MotionDiv
                      initial={{
                        opacity: 0,
                        y: "25%",
                        filter: "blur(10px)",
                      }}
                      animate={{
                        opacity: 1,
                        y: "0%",
                        filter: "blur(0px)",
                      }}
                      transition={{
                        delay: 0.2,
                        ease: "easeInOut",
                      }}
                    >
                      <Image
                        src={image.logo}
                        width={100}
                        height={100}
                        alt={`Work ${index + 1}`}
                        className="w-32 h-3w-32 object-contain"
                      />
                    </MotionDiv>

                    <MotionDiv
                      initial={{
                        opacity: 0,
                        y: "25%",
                        filter: "blur(10px)",
                      }}
                      animate={{
                        opacity: 1,
                        y: "0%",
                        filter: "blur(0px)",
                      }}
                      transition={{
                        delay: 0.3,
                        ease: "easeInOut",
                      }}
                    >
                      <Image
                        src={image.svg}
                        width={100}
                        height={100}
                        alt={`Work ${index + 1}`}
                        className="w-32 h-3w-32 object-contain"
                      />
                    </MotionDiv>
                  </div>
                </MotionDiv>
              )
          )}
        </AnimatePresence>
      </MotionDiv>
    </>
  );
}
