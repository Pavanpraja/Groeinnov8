import HeroSection from "@/components/HomePage/HeroSection";
import InteractiveInfoBlocks from "@/components/HomePage/InteractiveInfoBlocks";
import Publications from "@/components/HomePage/Publications";
import ToolsSection from "@/components/HomePage/ToolsSection";
import WhatWeDo from "@/components/HomePage/WhatWeDo";
import WhoWeAre from "@/components/HomePage/WhoWeAre";
import WhyUs from "@/components/HomePage/WhyUs";

export default function Home() {
  return (
    <div className="mt-[5rem]">
      <HeroSection />
      <WhoWeAre />
      <WhatWeDo />
      <InteractiveInfoBlocks />
      <WhyUs />
      <ToolsSection />
      <Publications />
    </div>
  );
}
