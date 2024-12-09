import { Badge } from "@/components/ui/badge";

type SectionBadge = {
  title: string;
};

export default function SectionBadge({ title }: SectionBadge) {
  return (
    <>
      <Badge
        variant="outline"
        className="font-manrope text-[#AFAFAF] text-sm px-5 py-1"
      >
        {title}
      </Badge>
    </>
  );
}
