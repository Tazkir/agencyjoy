import SectionBadge from "@/components/CustomUI/SectionBadge/SectionBadge";
import React from "react";

export default function Services() {
  return (
    <div id="services" className="w-full flex py-10">
      <div className="w-full flex flex-col justify-center items-center gap-6">
        <SectionBadge title="Our Services" />
      </div>
    </div>
  );
}
