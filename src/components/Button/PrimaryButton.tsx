import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";

type Button = {
  title: string;
  classNames?: string;
  onClick?: () => void;
};

export default function PrimaryButton({ title, classNames, onClick }: Button) {
  return (
    <div className="relative inline-block overflow-hidden py-[1px] px-[1px] rounded-md group">
      <span className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,var(--background)_80%,var(--ring2)_50%,var(--background)_100%)] group-hover:bg-[conic-gradient(from_90deg_at_50%_50%,var(--ring2)_0%,var(--ring2)_50%,var(--ring2)_100%)] animate-[spin_2s_linear_infinite] group-hover:animation-none" />
      <Button
        variant="default"
        className={cn(
          "relative inline-flex justify-center items-center font-manrope bg-[#202020]",
          classNames
        )}
        onClick={onClick}
      >
        {title}

        <div className="relative ml-1 h-5 w-5 overflow-hidden">
          <div className="absolute transition-all duration-200 group-hover:-translate-y-4 group-hover:translate-x-4">
            <ArrowUpRight className="w-5 h-5" />
            <ArrowUpRight className="h-5 w-5 -translate-x-4" />
          </div>
        </div>
      </Button>
    </div>
  );
}
