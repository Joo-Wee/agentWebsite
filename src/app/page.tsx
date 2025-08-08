
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WhatYouGet from "@/components/WhatYouGet";
import FinalCTA from "@/components/FinalCTA";
import { AudienceSection } from "@/components/AudienceSection";
import { CommunitySection } from "@/components/CommunitySection";
import { WhyItMattersSection } from "@/components/WhyItMattersSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <HowItWorks />
      <AudienceSection />
      <CommunitySection />
      <WhatYouGet />
      <WhyItMattersSection />
      <FinalCTA />
    </div>
  );
}
