import HeroSection from "@/components/HomePage/HeroSection";
import WhatWeDo from "@/components/HomePage/WhatWeDo";
import WhoWeAre from "@/components/HomePage/WhoWeAre";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-[5rem]">
      <HeroSection />
      <WhoWeAre />
      <WhatWeDo />
    </div>
  );
}
