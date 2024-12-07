import Hero from "@/components/Section/Hero/Hero";
import WhyUs from "@/components/Section/WhyUs/WhyUs";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Hero />
      <WhyUs />
    </div>
  );
}
