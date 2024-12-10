import { cn } from "@/lib/utils";
import { Button } from "../../ui/button";
import Image, { StaticImageData } from "next/image";

type Button = {
  title: string;
  image: StaticImageData;
  classNames?: string;
  animationDelay?: string;
};

export default function SmartAutomationButton({
  title,
  image,
  classNames,

  animationDelay = "0s",
}: Button) {
  return (
    <div className="relative inline-block overflow-hidden py-[2px] px-[2px] rounded-md">
      <span
        className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,var(--background)_80%,var(--ring2)_50%,var(--background)_100%)] animate-shimmer"
        style={{
          animationDelay,
          animationDuration: "3s",
          animationIterationCount: "infinite",
        }}
      />
      <Button
        variant="default"
        className={cn(
          "relative inline-flex justify-center items-center font-manrope border bg-[#202020] w-[10em] gap-2",
          classNames
        )}
      >
        <Image
          src={image}
          width={100}
          height={100}
          alt="icon"
          className="w-5 h-5"
        />
        {title}
      </Button>
    </div>
  );
}
