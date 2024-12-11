import Hero from "@/components/Section/Hero/Hero";
import OurMission from "@/components/Section/OurMission/OurMission";
import Pricing from "@/components/Section/Pricing/Pricing";
import Services from "@/components/Section/Services/Services";
import WhyUs from "@/components/Section/WhyUs/WhyUs";
import Works from "@/components/Section/Works/Works";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Hero />
      <WhyUs />
      <OurMission />
      <Works />
      <Services />
      <Pricing />
    </div>
  );
}
