import { cn } from "@/lib/utils";
import { Button } from "../../ui/button";
import { ArrowUpRight } from "lucide-react";

type Button = {
  title: string;
  classNames?: string;
  onClick?: () => void;
};

export default function AccentTextButtonUp({
  title,
  classNames,
  onClick,
}: Button) {
  return (
    <Button
      className={cn(
        "relative inline-flex justify-center items-center bg-transparent font-manrope font-normal py-6 px-4 text-2xl",
        "bg-gradient-to-r from-[#E89548] to-[#E46F03] bg-clip-text text-transparent group",
        classNames
      )}
      onClick={onClick}
    >
      {title}

      <div className="relative ml-1 mt-1 h-5 w-5 overflow-hidden text-[#E89548]">
        <div className="absolute transition-all duration-200 group-hover:-translate-y-4 group-hover:translate-x-4">
          <ArrowUpRight />
          <ArrowUpRight className="-translate-x-4" />
        </div>
      </div>
    </Button>
  );
}
